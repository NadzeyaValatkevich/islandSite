import { ClassName } from "../../types";

import styles from "./Container.module.scss";

interface Props extends ClassName {
  children: React.ReactNode;
}

export const Container = (props: Props) => {
  const { className, children } = props;
  return (
    <div
      className={
        className ? `${styles.container} ${className}` : styles.container
      }
    >
      {children}
    </div>
  );
};
