import { IDishCard } from "../../../types";

import styles from "./KitchenCard.module.scss";

export const KitchenCard = (props: IDishCard) => {
  const { photo, title, description } = props;
  return (
    <div className={styles.card}>
      <div className={styles["card__image-container"]}>
        <img src={photo} alt={photo} />
      </div>
      <div className={styles["card__info"]}>
        <div className={styles["card__info-wrapper"]}>
          <h3 className={styles["card__title"]}>{title}</h3>
          <p className={styles["card__description"]}>{description}</p>
        </div>
      </div>
    </div>
  );
};
