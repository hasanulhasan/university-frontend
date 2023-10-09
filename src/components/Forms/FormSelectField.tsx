"use client"
import { Select } from "antd";
import { Controller, useFormContext } from "react-hook-form";

type selectOptions = {
  label: string,
  value: string
}

type SelectFieldProps = {
  name: string;
  options: selectOptions[];
  size?: "large" | "small";
  value?: string | string | undefined;
  placeholder?: string;
  label?: string;
  defaultValue?: selectOptions;
}

const FormSelectField = ({name, size, value, placeholder, defaultValue,options, label }:SelectFieldProps) => {
  const {control} = useFormContext();
  return (
    <>
    {label? label: null}
    <Controller
        control={control}
        name={name}
        render={({ field: {value, onChange} }) => (<Select
          onChange={onChange}
          options={options}
          value={value}
          size={size}
          placeholder={placeholder}
          style={{width: '100%'}}
        />)}
    />
    </>
  );
};

export default FormSelectField;