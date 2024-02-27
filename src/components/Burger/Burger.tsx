import { useDispatch } from "react-redux";
import cn from "classnames";

import { changeMenuStateAction } from "../../reduxTools/burgerMenu/actions";
import { BurgerProps } from "../../types";

import styles from "./Burger.module.scss";

export const Burger = (props: BurgerProps) => {
  const dispatch = useDispatch();

  const onClickHandler = () => dispatch(changeMenuStateAction());

  return (
    <div className={styles["menu-button-container"]} onClick={onClickHandler}>
      <div className={styles["menu-button"]}>
        <div
          className={cn(styles.line, { [styles.lineBg]: props.visible })}
        ></div>
      </div>
    </div>
  );
};
