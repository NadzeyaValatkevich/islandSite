import { ClassName } from "../../types";
import { BackgroundBlockImage } from "../BackgroundBlockImage/BackgroundBlockImage";
import { Container } from "../Container";

import styles from "./FaceBlock.module.scss";

interface IProps extends ClassName {
  image: string;
  title: string;
}

export const FaceBlock = (props: IProps) => {
  const { image, title } = props;
  return (
    <div className={styles["face-block"]}>
      <BackgroundBlockImage image={image} />
      <Container>
        <div className={styles["content-container"]}>
          <div className={styles.title}>{title}</div>
        </div>
      </Container>
    </div>
  );
};
