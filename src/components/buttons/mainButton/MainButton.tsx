import { ClassName } from "../../../types";

import styles from "./MainButton.module.scss";

interface IButton extends ClassName {
  value: string;
  handler?: () => void;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  classButton?: string;
}

export const MainButton = (props: IButton) => {
  const { value, handler, classButton, type = "button" } = props;

  return (
    <button
      onClick={handler}
      className={
        classButton ? `${styles.button} ${classButton}` : styles.button
      }
      type={type}
    >
      {value}
    </button>
  );
};
