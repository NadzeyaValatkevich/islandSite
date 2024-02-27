import { ClassName } from "../../../types";
import styles from "./index.module.scss";

interface IProps extends ClassName {
  onClick: () => void;
}

export const ArrowNextBlack = (props: IProps) => {
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
          x="1"
          y="-1"
          width="48"
          height="48"
          rx="24"
          transform="matrix(1 8.74228e-08 8.74228e-08 -1 8.74228e-08 48)"
          stroke="white"
          strokeWidth="2"
        />
        <path
          d="M21.1802 37L32.2928 25.8873C32.6834 25.4968 32.6834 24.8636 32.2928 24.4731L21.1802 13.3605"
          stroke="white"
          strokeWidth="2"
          stroke-linecap="round"
        />
      </svg>
    </div>
  );
};
