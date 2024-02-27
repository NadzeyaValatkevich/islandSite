import { ClassName } from "../../types";
import { Container } from "../Container/Container";

import styles from "./HomeBlockTemplate.module.scss";

interface Props extends ClassName {
  children: React.ReactNode;
  id?: string;
  title?: string;
}

export const HomeBlockTemplate = (props: Props) => {
  return (
    <div
      className={
        props.className ? `${styles.block} ${props.className}` : styles.block
      }
      id={props.id}
    >
      <Container>
        {props.title ? <div className={styles.title}>{props.title}</div> : null}
        {props.children}
      </Container>
    </div>
  );
};
