// import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {Settings} from "react-slick";
import {BeatLoader} from "react-spinners";

import BackgroundBlockImage from "../../components/BackgroundBlockImage";
import {MainButton} from "../../components/buttons/mainButton/MainButton";
import {EntertainmentCard} from "../../components/cards/EntertainmentCard/EntertainmentCard";
import {HouseLittleCard} from "../../components/cards/HouseLittleCard";
import {KitchenCard} from "../../components/cards/KitchenCard";
import {Carousel} from "../../components/Carousel/Carousel";
import {Container} from "../../components/Container/Container";
import {HomeBlockTemplate} from "../../components/HomeBlockTemplate/HomeBlockTemplate";
import {
  useGetDishesQuery, useGetEntertainmentsQuery, useGetMainPageQuery,
useGetObjectsQuery} from "../../reduxTools/requests/apiRequests";
import {useDatas} from "../../services/useDatas"
import { useRate } from "../../services/useRate";

import {ToFormButton} from './../../components/buttons/toFormButton';

import styles from "./Home.module.scss";
import {useDispatch} from "react-redux";

export const DimensionsFunc = (src: string, setDimensions: (value: {width: number, height: number}) => void) => {
  const img = new Image();

  img.src = src;

  img.onload = function () {
    setDimensions({
      width: img.width,
      height: img.height
    })
  }
};

export const getImgSize = (imgSrc: string) => {
  let newImg = new Image();
  newImg.src = imgSrc;
  let height = newImg.height;
  let width = newImg.width;
  return (width - height)
};

export const Home = () => {
  const dispatch = useDispatch();
  const {data: houses} = useGetObjectsQuery();
  const {data: dishes} = useGetDishesQuery();
  const {data: entertainments} = useGetEntertainmentsQuery();
  const {data: mainPage} = useGetMainPageQuery();
  const navigate = useNavigate();
  const datas = useDatas();
  const {currency, cur_rate, cur_scale} = useRate();
  const {title, titleHouse, titleKitchen, titleEntertainment, main_back, nameForSearchButton} = datas;

  const sliderFaceBlockSettings: Settings = {
    slidesToShow: 1,
    centerPadding: "137px",
    infinite: true,
    speed: 300,
    arrows: false,
    centerMode: true,
    dots: true,
    responsive: [
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 1,
          infinite: true,
          dots: true,
          speed: 300,
          centerMode: true,
          variableWidth: true
        }
      }
    ]
  };

  const housesSliderSettings = {
    arrows: true,
    dots: true,
    speed: 900,
    slidesToShow: 3,
    centerPadding: "0px",
    slidesToScroll: 1,
    initialSlide: 0,
    infinite: true,
    responsive: [
      {
        breakpoint: 1270,
        settings: {
          arrows: false,
        }
      },
      {
        breakpoint: 769,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesPerRow: 3,
          dots: true,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 500,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesPerRow: 4,
          slidesToScroll: 1,
        }
      },
    ]
  };

  const kitchenSliderSettings = {
    arrows: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    currentSlide: 0,
    rows: 2,
    speed: 900,
    dots: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 1270,
        settings: {
          arrows: false,
        }
      },
      {
        breakpoint: 550,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 2,
          slidesPerRow: 2,
        }
      }
    ]
  };

  return (
      <>
        <div className={styles["face-block"]}>
          <BackgroundBlockImage image={main_back}/>
          <Container>
            <div className={styles["content-container"]}>
              <div className={styles["left-side"]}>
                <div className={styles.title}>{title}</div>
                <p className={styles.descriptionTitle}>{mainPage && mainPage[0].description}</p>
              </div>
              <div className={styles["right-side"]}>
                <Carousel settings={sliderFaceBlockSettings}>
                  {mainPage && mainPage[0].photos.map((el, index) => {
                    return <img key={index.toString()} src={el} alt="pict"/>;
                  })}
                </Carousel>
              </div>
            </div>
            <ToFormButton
                value={title}
                buttonValue={nameForSearchButton}
                className={styles.form}
            />
          </Container>
        </div>
        <HomeBlockTemplate title={titleHouse} className={styles.houses}>
          <div className={styles.blockDescription}>{mainPage && mainPage[0].house_description}</div>
          <div className={styles["houses-carousel"]}>
            {houses ? (
                <Carousel settings={housesSliderSettings}>
                  {houses.map((el) => (
                      <HouseLittleCard
                          key={el.id}
                          currency = {currency}
                          cur_scale = {cur_scale}
                          cur_rate = {cur_rate} 
                          {...el}
                      />
                  ))}
                </Carousel>) : (
                <div className={styles.preload}>
                  <BeatLoader color="#583711"/>
                </div>)
            }
          </div>
          <MainButton value="Подробнее" handler={() => navigate("/houses")}/>
        </HomeBlockTemplate>

        <HomeBlockTemplate title={titleKitchen} className={styles.kitchen}>
          <div className={styles.blockDescription}>{mainPage && mainPage[0].kitchen_description}</div>
          <div className={styles["carousel-container"]}>
            {dishes ? (
                <Carousel settings={kitchenSliderSettings}>
                  {dishes.map((el) => (
                      <KitchenCard
                          key={el.id}
                          id={el.id}
                          photo={el.photo}
                          title={el.title}
                          description={el.description}
                      />
                  ))
                  }
                </Carousel>) : (
                <div className={styles.preload}>
                  <BeatLoader color="#583711"/>
                </div>)
            }
          </div>
        </HomeBlockTemplate>
        <HomeBlockTemplate title={titleEntertainment}>
          <div className={styles.blockDescription}> {mainPage && mainPage[0].entertainment_description} </div>
          <div className={styles["entertainment-container"]}>
            {entertainments ? entertainments.slice(0, 6).map((el, index) => {
              return (
                  <EntertainmentCard
                      title={el.title}
                      photos={el.photos}
                      key={el.id}
                      id={el.id}
                  />
              );
            }) : (
                <div className={styles.preload}>
                  <BeatLoader color="#583711"/>
                </div>
            )}
          </div>
        <div className={styles.blockBtn}>
          <MainButton
              value="Подробнее"
              className={styles["entertainment-button"]}
              handler={() => navigate("/entertainments")}
          />
        </div>
        </HomeBlockTemplate>
        <HomeBlockTemplate>
          <ToFormButton value={title} buttonValue={nameForSearchButton}/>
        </HomeBlockTemplate>
      </>
  );
};