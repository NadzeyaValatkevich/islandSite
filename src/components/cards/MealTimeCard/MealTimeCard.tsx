import { TimeIcon } from "../../../assets/icons/Time";
import { IMeal } from "../../../types";
import { FlagItem } from "../../FlagItem";

import styles from "./MealTimeCard.module.scss";

interface  MyProps extends IMeal {
  currency: string,
  cur_scale: number,
  cur_rate: number
} 

export const MealTimeCard = (props: MyProps) => {
  const { time, title, price, currency, cur_scale, cur_rate } = props;

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
      <FlagItem value={title} className={styles.flag} />
      <div className={styles.row}>
        <div className={styles.time}>
          <div>
            <TimeIcon />
          </div>
          <p>{time}</p>
        </div>
        <div className={styles.price}>
          <span>{priceScreen}</span>
        </div>
      </div>
    </div>
  );
};
