import React, {FC} from 'react'
import { FieldProps } from 'formik'

interface CustomInputProps {
    type?: string
}

const CustomInputComponent: FC<CustomInputProps & FieldProps> = ({
    field, // { name, value, onChange, onBlur }
    form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
    type = "text",
    ...props
  }) => (
    <div>
      <input type={type} {...field} {...props} className="bg-gray-100 p-3 rounded-[5px] focus:outline focus:outline-[#8c83db] focus:outline-[1px]"/>
      {touched[field.name] === true && errors[field.name]?.length !== 0 && <div className='text-[#dd4343]'>{errors[field.name]?.toString()}</div>
      }
    </div>
  );

export default CustomInputComponent