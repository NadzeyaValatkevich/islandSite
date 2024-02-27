import { useEffect,useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";

import { Arrow } from "../../assets/icons/Arrow";
import { closeFormStateAction,openFormStateAction } from "../../reduxTools/formForOrderHouse/actions";
import { useGetObjectsQuery } from "../../reduxTools/requests/apiRequests";
import { AppState } from "../../reduxTools/store";
import { Footer } from "../Footer";
import { FormContainer } from "../form/FormContainer";
import { Header } from "../Header";

import styles from "./Layout.module.scss";

export const Layout = () => {
  const { data } = useGetObjectsQuery();  
  
  const isFormOpen = useSelector((state: AppState) => state.form.isFormOpen);
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const handleClick = () => {
    const element = document.body;
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    });
  }, []);
  
  useEffect(() => {
    if (pathname.includes("form") && !isFormOpen) {
      dispatch(openFormStateAction());
    }
    if(!pathname.includes("form") && isFormOpen){
      dispatch(closeFormStateAction());
      window.location.reload()
    }
  }, [dispatch, pathname, isFormOpen]);

  if (data === undefined) {
    return null;
  }
  
  return (
    <div className={styles.layout}>
      <Header visible={visible} />
      <Outlet />
      <Footer />
      <div
        onClick={handleClick}
        className={visible ? styles["arrow-top"] : styles.hide}
        id="arrow-top"
      >
        <Arrow />
      </div>
      <div className={isFormOpen ? styles.container : styles.hide}>
        <FormContainer />
      </div>
      
    </div>
  );
};
