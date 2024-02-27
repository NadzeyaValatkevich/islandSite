import { useFormContext } from "react-hook-form";

import { ClassName } from "../../../types";

import styles from "./FormInput.module.scss";

interface IProps extends ClassName {
  type: string;
  placeholder?: string;
  label?: string;
  icon?: JSX.Element;
  required: boolean;
  name: string;
  min?: string;
  error: boolean;
  pattern?: RegExp;
  minLength?: number;
}

export const FormInput = (props: IProps) => {
  const {
    type,
    placeholder,
    label,
    icon,
    required,
    name,
    error,
    pattern,
    minLength,
  } = props;

  const { register } = useFormContext();

  return (
    <label className={error ? `${styles.label} ${styles.error}` : styles.label}>
      <p>
        {label}
        {required ? "*" : null}
      </p>

      {icon}
      <input
        type={type}
        autoComplete="off"
        {...register(name, {
          required: required,
          pattern: pattern,
          minLength: minLength,
        })}
        placeholder={placeholder}
        required={required}
      />
      {error && <div className={styles["error-icon"]}>!</div>}
    </label>
  );
};
