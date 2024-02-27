import { useEffect,useMemo } from "react";
import { createPortal } from "react-dom";

import { CloseIcon } from "../../assets/icons/Close";
import { useGetPolicyQuery } from "../../reduxTools/requests/apiRequests";
import { MainButton } from "../buttons/mainButton/MainButton";

import styles from "./PolicyAgreement.module.scss";

const modalRootElement = document.querySelector("#modal");

type IProps = {
  type: string;
  onClose: (ev: React.MouseEvent<HTMLDivElement>) => void;
  isOpen: boolean;
};

export const PolicyAgreement = (props: IProps) => {
  const { type, isOpen, onClose } = props;
  const element = useMemo(() => document.createElement("div"), []);
  const { data } = useGetPolicyQuery();

  useEffect(() => {
    if (isOpen) {
      modalRootElement?.appendChild(element);
      return () => {
        modalRootElement?.removeChild(element);
      };
    }
  });
  const header =
    type === "policy"
      ? "Политика конфиденциальности"
      : "Пользовательское соглашение";

  if (isOpen && data) {
    return createPortal(
      <div className={styles["wrapper"]} onClick={onClose}>
        <div
          className={styles["container"]}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={styles["container-icon"]}>
            <span>
              <CloseIcon onClick={onClose} />
            </span>
          </div>
          <h2>{header}</h2>
          <div className={styles["content"]}>
            {type === "policy" ? data[0].policy : data[0].agreement}
          </div>
          <div onClick={onClose} className={styles["button"]}>
            <MainButton value="Закрыть" classButton="small"></MainButton>
          </div>
        </div>
      </div>,

      element,
    );
  } else return null;
};
