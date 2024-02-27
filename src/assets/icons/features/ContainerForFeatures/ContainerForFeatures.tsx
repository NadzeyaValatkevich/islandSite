import styles from "./ContainerForFeatures.module.scss";

interface IProps {
  children: React.ReactNode;
  littleIcon?: boolean;
}

export const ContainerForFeatures = (props: IProps) => {
  return (
    <div
      className={
        props.littleIcon
          ? `${styles.container} ${styles["little-icon"]}`
          : styles.container
      }
    >
      {props.children}
    </div>
  );
};
