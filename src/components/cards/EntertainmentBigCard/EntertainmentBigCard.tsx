import { useNavigate } from "react-router";
import { BeatLoader } from "react-spinners";

import { IEntertainments } from "../../../types";
import Carousel from "../../Carousel";

import styles from "./EntertainmentBigCard.module.scss";
import {useEffect, useState} from "react";
import {DimensionsFunc, getImgSize} from "../../../pages/Home/Home";

interface  MyProps extends IEntertainments {
  currency: string,
  cur_scale: number,
  cur_rate: number
} 

export const EntertainmentBigCard = (props: MyProps) => {

  const { id, photos, title, prices, description_short, currency, cur_rate, cur_scale } =
    props;
  const navigate = useNavigate();

  const entertainmentPhotosSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    rows: 1,
    dots: true,
    infinite: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1270,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  let price = prices
    ? prices.map((el) => {
        for (let key in el) {
          return +el[key];
        }
      })
    : ([] as number[]);
  price.sort((a: any, b: any) => a - b);

  const priceBYN = price[0] 
  ? currency==="BYN"
  ? price[0]
  : Math.round((+price[0] / cur_scale) * cur_rate)
  :null
   
  const priceScreen = priceBYN
    ? `от ${priceBYN} ${+priceBYN > 1 ? "рублей" : "рубля"}`
    : "бесплатно";


  return (
    <div className={styles.card}>
      <div
        className={styles.title}
        onClick={() => {
          navigate(`/entertainments/${id}`);
        }}
      >
        {title}
      </div>
      {photos ? (
        <Carousel settings={entertainmentPhotosSettings}>
          {photos.map((el, index) => {

              let dif = getImgSize(el)

            return (
                <div key={index}>
              <img src={el} alt={title}
                   className={
                       dif > 0 ? styles.cover : styles.contain
                   }
              />
            </div>
            )})}
        </Carousel>
      ) : (
        <div className={styles.preload}>
          <BeatLoader color="#583711" />
        </div>
      )}

      <p className={styles.description_short}>{description_short}</p>
      <div className={styles.footer}>
        <div
          className={styles.more}
          onClick={() => {
            navigate(`/entertainments/${id}`);
          }}
        >
          Подробнее ...
        </div>
        <div className={styles.price}>{priceScreen}</div>
      </div>
    </div>
  );
};
