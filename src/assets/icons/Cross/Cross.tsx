import { useDispatch } from "react-redux";

import { changeMenuStateAction } from "../../../reduxTools/burgerMenu/actions";

import styles from "./Cross.module.scss";

export const Cross = () => {
  const dispatch = useDispatch();

  const onClickHandler = () => dispatch(changeMenuStateAction());

  return (
    <div className={styles.cross} onClick={onClickHandler}>
      <svg viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="&#208;&#154;&#209;&#128;&#208;&#181;&#209;&#129;&#209;&#130;&#208;&#184;&#208;&#186;">
          <path
            id="Line 1"
            d="M2 2L24 24"
            stroke="#C1B397"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            id="Line 2"
            d="M2 24L24 2"
            stroke="#C1B397"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </g>
      </svg>
    </div>
  );
};
