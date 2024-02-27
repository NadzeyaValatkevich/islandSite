import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import {
  closeFormStateAction,
  openFormStateAction,
} from "../../../reduxTools/formForOrderHouse/actions";
import { AppState } from "../../../reduxTools/store";
import { Form } from "../Form/Form";

import styles from "./FormContainer.module.scss";

export const FormContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isFormOpen = useSelector((state: AppState) => state.form.isFormOpen);
  const { pathname } = useLocation();
  useEffect(() => {
    if (!pathname.includes("form") && isFormOpen) {
      dispatch(closeFormStateAction());
    }
    if (pathname.includes("form") && !isFormOpen) {
      dispatch(openFormStateAction());
    }
  }, [dispatch, isFormOpen, pathname]);

  const closeForm = () => {
    document.body.style.overflow = "visible";
    dispatch(closeFormStateAction());
    const param = pathname.slice(0, -4);
    navigate(param);
  };
  
  return (
    <div
      className={isFormOpen ? styles.container : styles.hide}
      onClick={closeForm}
    >
      <div className={styles.form} onClick={(e) => e.stopPropagation()}>
        <div className={styles["close-button"]} onClick={closeForm}>
          &#10006;
        </div>

        <h1>найти домик</h1>
        <p>Обязательное поле*</p>

        <Form />
      </div>
    </div>
  );
};
