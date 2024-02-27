import React, { ChangeEventHandler } from "react";

import { ClassName } from "../../../types";

import styles from "./DateInput.module.scss";

interface IProps extends ClassName {
  type: string;
  placeholder?: string;
  label?: string;
  icon?: JSX.Element;
  required: boolean;
  error?: boolean;
  value?: string;
  name: string;
  ref?: React.RefObject<HTMLInputElement>;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onClick?: () => void;
  min?: string;
}

export const DateInput = (props: IProps) => {
  const {
    type,
    placeholder,
    label,
    icon,
    required,
    error,
    value,
    ref,
    onBlur,
    onClick,
    onChange,
  } = props;

  return (
    <label className={error ? `${styles.label} ${styles.error}` : styles.label}>
      <p>
        {label}
        {required ? "*" : null}
      </p>
      {/* <div> */}
      {icon}

      <input
        type={type}
        autoComplete="off"
        placeholder={placeholder}
        value={value}
        onClick={onClick}
        ref={ref}
        onBlur={onBlur}
        onChange={onChange}
        // name = {name}
      />

      {error && <div className={styles["error-icon"]}>!</div>}
      {/* </div> */}
    </label>
  );
};
