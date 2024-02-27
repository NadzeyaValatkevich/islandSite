import { useNavigate } from "react-router-dom";

import { BigLine } from "../../assets/icons/LinesBg/BigLine/BigLine";
import { LittleLine } from "../../assets/icons/LinesBg/LittleLine/LittleLine";
import { MainButton } from "../../components/buttons/mainButton/MainButton";

import styles from "./NotFound.module.scss";

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className={styles["not-found-block"]}>
      <div className={styles.description}>
        <div className={styles.number}>404</div>
        <div className={styles.text}>Page not found</div>
        <MainButton value={"Back to Home"} handler={() => navigate("/")} />
        <div className={styles.big}></div>
      </div>
      <div className={styles.veryBig}></div>
      <div className={styles.little}></div>
      <div className={styles["little-line-block"]}>
        <LittleLine />
        <div className={styles.middle}></div>
      </div>
      <div className={styles["big-line-block"]}>
        <BigLine />
        <div className={styles["little-right"]}></div>
      </div>
    </div>
  );
};
