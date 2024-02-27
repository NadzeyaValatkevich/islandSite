import { useEffect,useMemo } from "react";
import { createPortal } from "react-dom";

import { CloseIcon } from "../../assets/icons/Close";

import { AlertCircle } from "./../../assets/icons/AlertCircle/AlertCircle";
import { CheckIcon } from "./../../assets/icons/CheckIcon/CheckIcon";

import "./Modal.scss";

const modalRootElement = document.querySelector("#modal");

type IProps = {
  myClass: string;
  content: string;
  onClose: (ev: React.MouseEvent<HTMLDivElement>) => void;
  isOpen: boolean;
};

const Modal = (props: IProps) => {
  const { myClass, content, onClose, isOpen } = props;
  const element = useMemo(() => document.createElement("div"), []);

  const text = content.split(".");

  useEffect(() => {
    if (isOpen) {
      modalRootElement?.appendChild(element);
      return () => {
        modalRootElement?.removeChild(element);
      };
    }
  });
  
  if (isOpen) {
    return createPortal(
      <div className="modal_container">
        <div className={myClass}>
          {myClass === "success wrapper" ? <CheckIcon /> : <AlertCircle />}
          <div>
            {text[0] ? <p className="content">{`${text[0]}.`}</p> : null}
            {text[1] ? <p className="content">{`${text[1]}.`}</p> : null}
            {text[2] ? <p className="content">{`${text[2]}.`}</p> : null}
          </div>
          <CloseIcon onClick={onClose} />
        </div>
      </div>,

      element,
    );
  } else return null;
};

export default Modal;
