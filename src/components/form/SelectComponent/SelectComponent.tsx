import React from "react";
import { Controller,useFormContext } from "react-hook-form";
import ReactSelect from "react-select";

import "./SelectComponent.scss";

export interface Option {
  value: number | string;
  label: string;
}

interface IProps {
  optionBase: any;
  icon: React.ReactNode;
  error?: boolean;
  name: string;
  required: boolean;
  isSearchable: boolean;
  label: string;
}

export const SelectComponent = (props: IProps) => {
  const { optionBase, icon, name, required, isSearchable, label, error } =
    props;

  const {control } = useFormContext();
 
  const options = optionBase.map((item: any) => ({
    value: item.id || item.title,
    label: item.title,
  }));
  return (
    <div className="container">
      <p className="label">
        {label}
        {required ? "*" : null}
      </p>
      <div
        className={
          error ? `customSelect__wrapper error` : "customSelect__wrapper"
        }
      >
        <div className="icon">{icon}</div>
        <Controller
          rules={{
            required: true,
          }}
          render={({ field }) => (
            <ReactSelect
              {...field}
              options={options}
              placeholder={options[0].label}
              className="customSelect"
              classNamePrefix="customSelect"
              isSearchable={isSearchable}
              required={required}
              blurInputOnSelect={true}
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  fontSize: "15px",
                  background: "none",
                  cursor: "pointer",
                  border: "none",
                  boxShadow: "none",
                  outline: state.isFocused ? "none" : "none",
                }),
                option: (baseStyles, state) => ({
                  ...baseStyles,
                  fontSize: "15px",
                  cursor: "pointer",
                  background: "none",
                }),
              }}
            />
          )}
          name={name}
          control={control}
        />
      </div>
    </div>
  );
};
export default SelectComponent;
