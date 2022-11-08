import React, {FC} from 'react'
import { FieldProps } from 'formik'
interface CustomInputProps {
    type?: string
}

const CustomInputComponent: FC<CustomInputProps & FieldProps> = ({
    field, // { name, value, onChange, onBlur }
    form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
    type = "text",
    meta
  }) => (
    <>
      <input type={type} {...field}/>
      {meta.touched && meta.error && (
        <div>{meta.error}</div>
      )}
    </>
  );

export default CustomInputComponent