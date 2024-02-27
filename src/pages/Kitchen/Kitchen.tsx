import React, {useEffect, useRef} from "react";
import Slider from "react-slick";
import {BeatLoader} from "react-spinners";

import {ArrowNextPaginatop} from "../../assets/icons/ArrowNextPagination";
import {KitchenCard} from "../../components/cards/KitchenCard";
import {LittleKitchenCard} from "../../components/cards/LittleKitchenCard";
import {MealTimeCard} from "../../components/cards/MealTimeCard";
import Carousel from "../../components/Carousel";
import { FaceBlock } from "../../components/FaceBlock";
import { HomeBlockTemplate } from "../../components/HomeBlockTemplate";
import {
  useGetDishesQuery,
  useGetFeedingInfoQuery,
} from "../../reduxTools/requests/apiRequests";
import { useDatas } from "../../services/useDatas";
import { useRate } from "../../services/useRate";
import { IMeal } from "../../types";

import { ToFormButton } from "./../../components/buttons/toFormButton/ToFormButton";

import styles from "./Kitchen.module.scss";
import {log} from "util";

export const Kitchen = () => {
  const { data: meal } = useGetFeedingInfoQuery();
  const { data: dishes } = useGetDishesQuery();
  const datas = useDatas();  
  const { title, titleKitchen, kitchen_back, nameForSearchButton } = datas;
  const { currency, cur_rate, cur_scale } = useRate();
  
    const kitchenCardsSettings = {
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        touchMove: false,
        speed: 900,
        row: 1,
        dots: true,
        dotsClass: 'custom_paging',
        customPaging: (i: number) => (
            <div>{i + 1}</div>
        ),
        appendDots: (dots: any) => <div className={styles.custom_padding}><ul>{dots}</ul></div>,
        infinite: true,
        slidesPerRow: 4,
        responsive: [
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    touchMove: true,
                    infinite: true,
                    row: 1,
                    slidesPerRow: 6,
                }
            }
        ]
    };

    const smallKitchenCardsSettings = {
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        touchMove: false,
        speed: 900,
        row: 1,
        dots: true,
        dotsClass: 'custom_paging',
        customPaging: (i: number) => (
            <div>{i + 1}</div>
        ),
        appendDots: (dots: any) => <div className={styles.custom_padding}><ul>{dots}</ul></div>,
        infinite: true,
        slidesPerRow: 2,
        responsive: [
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    touchMove: true,
                    infinite: true,
                    row: 1,
                    slidesPerRow: 4,
                }
            }
        ]
    };


    let slider = useRef<Slider | null>(null);

    const windowWidth = window.innerWidth;


  return (
    <>
      <FaceBlock title={titleKitchen} image={kitchen_back} />
      <HomeBlockTemplate title="">
        <div className={styles["kitchen-container"]}>
          {windowWidth > 360 ? (
            <div className={styles["meal-time-block"]}>
              <div className={styles["meal-time-title"]}>Расписание</div>
              <div className={styles["meal-time"]}>
                {meal &&
                  meal.map((el: IMeal) => {
                    return (
                      <MealTimeCard
                        key={el.id}
                        currency = {currency}
                        cur_scale = {cur_scale}
                        cur_rate = {cur_rate}
                        {...el}
                      />
                    );
                  })}
              </div>
            </div>
          ) : (
            <div className={styles["meal-time-block"]}>
              {meal && (
                <LittleKitchenCard
                  cur_rate = {cur_rate}
                  currency = {currency}
                  cur_scale = {cur_scale}
                  data={meal}                  
                />
              )}
            </div>
          )}
          <div className={styles["meal-slider-block"]}>
            <div className={styles["meal-slider-title"]}>
              У нас можно попробовать
            </div>
            <div className={styles["meal-slider"]}>
              {dishes ? (
                <div>
                  <Carousel settings={
                      dishes.length >= 8 ?
                      kitchenCardsSettings :
                          smallKitchenCardsSettings
                  } slider={slider}>
                    {dishes.map((el) => (
                      <KitchenCard
                        key={el.id}
                        id={el.id}
                        photo={el.photo}
                        title={el.title}
                        description={el.description}
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
          </div>
        </div>
      </HomeBlockTemplate>
      <HomeBlockTemplate>
        <ToFormButton value={title} buttonValue={nameForSearchButton} />
      </HomeBlockTemplate>
    </>
  );
};