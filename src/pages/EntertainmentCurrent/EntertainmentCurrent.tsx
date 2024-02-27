import React from "react";
import { useParams } from "react-router";
import { BeatLoader } from "react-spinners";

import { Container } from "../../components/Container";
import { FaceBlock } from "../../components/FaceBlock";
import { HomeBlockTemplate } from "../../components/HomeBlockTemplate";
import { MyGallery } from "../../components/ImageGalleryCarousel";
import { useGetEntertainmentsCurrentQuery } from "../../reduxTools/requests/apiRequests";
import { useDatas } from "../../services/useDatas";
import { useRate } from "../../services/useRate";

import { ToFormButton } from "./../../components/buttons/toFormButton/ToFormButton";

import styles from "./EntertainmentCurrent.module.scss";

const EntertainmentCurrent = () => {
  const { id } = useParams();
  const { data } = useGetEntertainmentsCurrentQuery(id!);
  const datas = useDatas();
  const { currency, cur_rate, cur_scale } = useRate();
  const {
    titleEntertainment,
    entertainments_back,
    title,
    nameForSearchButton,
  } = datas;
  
  if (!data)
    return (
      <div className={styles.preload}>
        <BeatLoader color="#583711" />
      </div>
    );

  const price =
    data.prices && data.prices[0] ? (
      data.prices.map((el, index) => {
        for (let key in el) {
          const priceBYN = el[key] 
          ? currency==="BYN"
          ? el[key]
          : Math.round((+el[key] / cur_scale) * cur_rate)
          :null

          const priceItem =
            +el[key]  > 0
              ? `${priceBYN} BYN`
              : "бесплатно"
          return (
            <React.Fragment key={index}>
              <div>{key}</div>
              <div className={styles.numberPrice}>{priceItem} </div>
            </React.Fragment>
          );
        }
      })
    ) : (
      <div>бесплатно</div>
    );

  return (
    <>
      <FaceBlock title={titleEntertainment} image={entertainments_back} />
      <HomeBlockTemplate>
        <Container className={styles.card}>
          <p className={styles.title}>{data.title}</p>
          <div className={styles.sliderContainer}>
            {data.photos ? (
              <MyGallery images={data.photos} thumbnailPosition="right" />
            ) : null}
          </div>
          <div className={styles.info}>
            <p className={styles.descriptionShort}>{data.description_short}</p>
            <p className={styles.descriptionLong}>{data.description_long}</p>
            <div className={styles.price}>Цены </div>
            <div className={styles.line} />
            <div className={styles.grid}>{price}</div>
          </div>
        </Container>
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

export default EntertainmentCurrent;
