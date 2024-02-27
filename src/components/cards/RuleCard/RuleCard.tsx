import { ShipIcon } from "../../../assets/icons/Ship";
import { IRule } from "../../../types";

import styles from "./RuleCard.module.scss";

export const RuleCard = (props: IRule) => {
  const { content } = props;

  return (
    <div className={styles.flag}>
      <div>
        <ShipIcon />
      </div>
      <p>{content}</p>
    </div>
  );
};
