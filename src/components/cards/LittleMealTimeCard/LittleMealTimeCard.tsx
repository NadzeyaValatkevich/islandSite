import { PriceIcon } from "../../../assets/icons/Price";
import { TimeIcon } from "../../../assets/icons/Time";
import { IMeal } from "../../../types";

import styles from "./LittleMealTimeCard.module.scss";

interface  MyProps extends IMeal {
  currency: string,
  cur_scale: number,
  cur_rate: number
} 

export const LittleMealTimeCard = (props: MyProps) => {
  const { time, title, price, currency, cur_rate, cur_scale } = props;

  const priceBYN = price 
  ? currency==="BYN"
  ? price
  : Math.round((+price / cur_scale) * cur_rate)
  :null
  
  const priceScreen = priceBYN
    ? `${priceBYN} BYN`
    : "цену уточняйте";

  return (
    <div className={styles.card}>
      <p className={styles.title}>{title}</p>
      <div className={styles["time-price-block"]}>
        <div className={styles.time}>
          <div>
            <TimeIcon />
          </div>
          <p>{time}</p>
        </div>
        <div className={styles.price}>
          <div>
            <PriceIcon />
          </div>
          <p>
            <span>{priceScreen}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
