"use client"
import { DatePicker, DatePickerProps } from "antd";
import { Controller, useFormContext } from "react-hook-form";
import dayjs,{Dayjs} from 'dayjs';

type UMDatePickerProps = {
  onChange?: (valOne: Dayjs | null, valTwo: string)=> void;
  name: string;
  value?: Dayjs;
  label?: string;
  size?: 'large' | 'small'
}

const FormDatePicker = ({onChange, name, value, label, size}:UMDatePickerProps) => {
  const {control, setValue} = useFormContext();

  const HandleOnChange: DatePickerProps['onChange'] = (date, dateString) => {
    onChange? onChange(date, dateString) : null
    setValue(name, dateString)
  };

  return (
    <>
    {label? label: null} <br/>
    <Controller
        control={control}
        name={name}
        render={({ field}) => (<DatePicker 
          style={{width: '100%'}}
          value={dayjs(field.value) || null} 
          size={size}
          onChange={HandleOnChange} />)}
    />
    </>
  );
};

export default FormDatePicker;