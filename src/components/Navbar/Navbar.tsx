import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

import { closeMenuStateAction } from "../../reduxTools/burgerMenu/actions";
import { useDatas } from "../../services/useDatas";
import { ClassName, INavbarData } from "../../types";

import styles from "./Navbar.module.scss";

const Navbar = (props: ClassName) => {
  const dispatch = useDispatch();
  const datas = useDatas();
  const { titleHouse, titleKitchen, titleEntertainment } = datas;

  const navbarData: INavbarData[] = [
    { id: 1, value: "Главная", path: "/" },
    { id: 2, value: titleHouse, path: "/houses" },
    { id: 3, value: titleKitchen, path: "/dish" },
    { id: 4, value: titleEntertainment, path: "/entertainments" },
    { id: 5, value: "Что рядом", path: "/nearests" },
    { id: 6, value: "Галерея", path: "/galleries" },
    { id: 7, value: "Правила", path: "/rule" },
    { id: 8, value: "Контакты", path: "/info" },
  ];

  return (
    <nav
      className={
        props.className
          ? `${styles.container} ${props.className}`
          : styles.container
      }
    >
      {navbarData.map(({ id, value, path }) => (
        <NavLink
          key={id}
          to={path}
          className={({ isActive }: { isActive: boolean }): string =>
            isActive
              ? `${styles["nav-link"]} ${styles["active"]}`
              : styles["nav-link"]
          }
          onClick={() => dispatch(closeMenuStateAction())}
        >
          {value}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navbar;
