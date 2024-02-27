import styles from "./ContainerForSocials.module.scss";

interface IProps {
  children: React.ReactNode;
  href?: string;
}

export const ContainerForSocials = (props: IProps) => {
  return <div className={styles.container}>{props.children}</div>;
};
