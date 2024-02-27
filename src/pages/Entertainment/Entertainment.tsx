import React, { useRef } from "react";
import Slider from "react-slick";
import { BeatLoader } from "react-spinners";

import { EntertainmentBigCard } from "../../components/cards/EntertainmentBigCard/EntertainmentBigCard";
import Carousel from "../../components/Carousel";
import { FaceBlock } from "../../components/FaceBlock";
import { HomeBlockTemplate } from "../../components/HomeBlockTemplate";
import { useGetEntertainmentsQuery } from "../../reduxTools/requests/apiRequests";
import { useDatas } from "../../services/useDatas";
import { useRate } from "../../services/useRate";

import { ToFormButton } from "./../../components/buttons/toFormButton/ToFormButton";

import styles from "./Entertainment.module.scss";

const Entertainment = () => {
  const { data } = useGetEntertainmentsQuery();
  const datas = useDatas();
  const { currency, cur_rate, cur_scale } = useRate();
  
  const {
    titleEntertainment,
    entertainments_back,
    title,
    nameForSearchButton,
  } = datas;
  
    const entertainmentCardsSettings = {
        slidesToShow: 3,
        slidesToScroll: 3,
        speed: 900,
        rows: 1,
        dots: true,
        dotsClass: 'custom_paging',
        customPaging: (i: number) => (
            <div>{i + 1}</div>
        ),
        appendDots: (dots: any) => <div className={styles.custom_padding}><ul>{dots}</ul></div>,
        infinite: true,
        slidesPerRow: 2,
        arrows: false,
        touchMove: false,
        responsive: [
            {
                breakpoint: 950,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                    rows: 1,
                    slidesPerRow: 2,
                    arrows: false,
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    rows: 3,
                    arrows: false,
                    slidesPerRow: 1,
                }
            }
        ]
    };

    const smallEntertainmentCardsSettings = {
        slidesToShow: 3,
        slidesToScroll: 3,
        speed: 900,
        rows: 1,
        dots: true,
        dotsClass: 'custom_paging',
        customPaging: (i: number) => (
            <div>{i + 1}</div>
        ),
        appendDots: (dots: any) => <div className={styles.custom_padding}><ul>{dots}</ul></div>,
        infinite: true,
        slidesPerRow: 1,
        arrows: false,
        touchMove: false,
        responsive: [
            {
                breakpoint: 950,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    rows: 1,
                    slidesPerRow: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    rows: 3,
                    arrows: false,
                    slidesPerRow: 1,
                }
            }
        ]
    };

    let slider = useRef<Slider | null>(null);

  return (
    <>
      <FaceBlock title={titleEntertainment} image={entertainments_back} />
      <HomeBlockTemplate title="">
        <div className={styles.container}>
          {data ? (
            <div>
              <Carousel settings={
                  data.length >= 6 ? entertainmentCardsSettings
                  : smallEntertainmentCardsSettings} slider={slider}>
                {data.map((element) => (
                  <EntertainmentBigCard
                    key={element.id}
                    currency = {currency}
                    cur_scale = {cur_scale}
                    cur_rate = {cur_rate} 
                    {...element}
                  />
                ))}
              </Carousel>
              <div className={styles.blockNav}>
                <button
                  type="button"
                  className={styles["slide-m-prev"]}
                  onClick={() => slider.current?.slickPrev()}
                ></button>
                <button
                  type="button"
                  className={styles["slide-m-next"]}
                  onClick={() => slider.current?.slickNext()}
                ></button>
              </div>
            </div>
          ) : (
            <div className={styles.preload}>
              <BeatLoader color="#583711" />
            </div>
          )}
        </div>
      </HomeBlockTemplate>
      <HomeBlockTemplate>
        <ToFormButton
          value={title}
          buttonValue={nameForSearchButton}
        />
      </HomeBlockTemplate>
    </>
  );
};

export default Entertainment;
