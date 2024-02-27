import { NavLink } from "react-router-dom";

import { IEntertainmentCard } from "../../../types";
import { FlagItem } from "../../FlagItem";

import styles from "./EntertainmentCard.module.scss";
import {useEffect, useState} from "react";
import {DimensionsFunc} from "../../../pages/Home/Home";

export const EntertainmentCard = (props: IEntertainmentCard) => {
  const { id, photos, title } = props;

    const [dimensions, setDimensions] = useState({width: 0, height: 0});

    useEffect(() => {
        photos && DimensionsFunc(photos[0], setDimensions)
    });

  return (
    <div className={styles.card}>
      <NavLink to={`entertainments/${id}`}>
        <img src={photos && photos[0]} alt="view"
             className={
                 (dimensions.width - dimensions.height) >= 0 ? styles.cover : styles.contain
             }
        />
        <FlagItem value={title} className={styles.flag} />
      </NavLink>
    </div>
  );
};
