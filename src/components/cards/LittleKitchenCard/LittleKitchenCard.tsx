import { IMeal } from "../../../types";
import { LittleMealTimeCard } from "../LittleMealTimeCard";

import styles from "./LittleKitchenCard.module.scss";

interface IProps {
  data: IMeal[];
  currency: string,
  cur_scale: number,
  cur_rate: number 
}

export const LittleKitchenCard = (props: IProps) => {
  const { data, currency, cur_scale, cur_rate} = props;
  return (
    <div className={styles.kitchen}>
      <h2>Кухня</h2>
      {data &&
        data.map((el: IMeal) => {
          return (
            <LittleMealTimeCard
              currency = {currency}
              cur_rate = {cur_rate}
              cur_scale = {cur_scale}
              key={el.id}
              {...el}
              
            />
          );
        })}
    </div>
  );
};
