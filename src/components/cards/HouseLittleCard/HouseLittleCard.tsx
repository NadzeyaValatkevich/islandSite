import {NavLink} from "react-router-dom";

import {House} from "../../../types";
import {FlagItem} from "../../FlagItem";

import styles from "./HouseLittleCard.module.scss";
import {useEffect, useState} from "react";
import {DimensionsFunc} from "../../../pages/Home/Home";

interface MyProps extends House {
    currency: string,
    cur_scale: number,
    cur_rate: number
}

export const HouseLittleCard = (props: MyProps) => {
  
  const {
    title,
    description_short,
    photos,
    price_weekday,
    id,
    currency,
    cur_rate,
    cur_scale
  } = props;

  const priceBYN = price_weekday&&+price_weekday>0
    ? currency==="BYN"
    ? `от ${Number(price_weekday)} BYN в сутки`
    : `от ${
      (Math.round((+price_weekday / cur_scale) * cur_rate)/ 10)* 10
      } BYN в сутки`
    : "цену уточняйте";
          
    const [dimensions, setDimensions] = useState({width: 0, height: 0});

    useEffect(() => {
        DimensionsFunc(photos[0], setDimensions)
    });
      
  return (
    <div className={styles.card}>
      <NavLink to={`houses/${id}`} className={styles.linkBlock}>
          <img src={photos[0]} alt="house" 
            className={
                         (dimensions.width - dimensions.height) >= 0 ? styles.cover : styles.contain
                     }
            />
      </NavLink>
        <div className={styles["text-content"]}>
                <NavLink to={`houses/${id}`}>
                    <h1>{title}</h1>
                </NavLink>
                <p>{description_short}</p>
            </div>
            <FlagItem value={priceBYN} className={styles.flag}/>
        </div>
    );
};
