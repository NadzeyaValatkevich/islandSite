import { ClassName } from "../../../types";
import styles from "./index.module.scss";

interface IProps extends ClassName {
  onClick: () => void;
}

export const ArrowPrevBlack = (props: IProps) => {
  return (
    <div
      className={
        props.className ? `${styles.arrow} ${props.className}` : styles.arrow
      }
      onClick={props.onClick}
    >
      <svg
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="-1"
          y="1"
          width="48"
          height="48"
          rx="24"
          transform="matrix(-1 0 0 1 48 0)"
          stroke="white"
          strokeWidth="2"
        />
        <path
          d="M28.8198 13L17.7072 24.1127C17.3166 24.5032 17.3166 25.1364 17.7072 25.5269L28.8198 36.6395"
          stroke="white"
          strokeWidth="2"
          stroke-linecap="round"
        />
      </svg>
    </div>
  );
};
