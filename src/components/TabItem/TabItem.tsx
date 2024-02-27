import React, { useState } from "react";
import cn from "classnames";

import { HouseIcon } from "../../assets/icons/inputIcons/HouseIcon";
import { LittleArrow } from "../../assets/icons/LittleArrow";

import styles from "./Dropdown.module.scss";

export interface IDropdownData {
  id?: number;
  title: string;
}

interface IProps {
  dropdownData: IDropdownData[];
  icon: React.ReactNode;
}

export const TabItem = (props: IProps) => {
  const { dropdownData, icon } = props;
  const [value, setValue] = useState("");

  const clickTabItem = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    value: string,
  ) => {
    e.stopPropagation();
    setValue(value);
  };

  return <div></div>;
};

export default TabItem;
