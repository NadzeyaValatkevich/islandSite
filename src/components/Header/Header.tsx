import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import cn from "classnames";

import { Cross } from "../../assets/icons/Cross/Cross";
import { Logo } from "../../assets/icons/Logo/Logo";
import { AppState } from "../../reduxTools/store";
import { HeaderProps } from "../../types";
import { Burger } from "../Burger/Burger";
import { Container } from "../Container/Container";
import Navbar from "../Navbar/Navbar";

import styles from "./Header.module.scss";

export const Header = (props: HeaderProps) => {
  const burgerIsOpen = useSelector(
    (state: AppState) => state.burgerMenu.isOpen,
  );
  return (
    <div
      className={cn(styles.header, {
        [styles.headerBg]: burgerIsOpen || props.visible,
      })}
    >
      <Container>
        <div className={styles["content-container"]}>
          <NavLink to="/">
            <Logo />
          </NavLink>
          <Navbar className={styles.navigation} />
          {burgerIsOpen ? <Cross /> : <Burger visible={props.visible} />}
          <div
            className={
              burgerIsOpen
                ? `${styles["menu"]} ${styles["menu-open"]}`
                : styles["menu"]
            }
          >
            <Container>
              <Navbar />
            </Container>
          </div>
        </div>
      </Container>
    </div>
  );
};
