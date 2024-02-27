import { ClassName } from "../../../../types";

import styles from "./ContainerForInputIcon.module.scss";

interface IProps extends ClassName {
  children: React.ReactNode;
}

export const ContainerForInputIcon = (props: IProps) => {
  return (
    <div
      className={
        props.className
          ? `${styles.container} ${props.className}`
          : styles.container
      }
    >
      {props.children}
    </div>
  );
};
