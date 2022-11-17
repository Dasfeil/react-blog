import React from 'react'
import { useAppSelector } from '../../redux/hooks'
import { Field, Form, Formik, FormikProps } from 'formik'
import { updateUser } from '../../services/conduit'
import CustomInputComponent from '../../components/CustomInputComponent'
import * as Yup from 'yup'

const yupSchema = Yup.object().shape({
  email: Yup.string()
  .email('Not a correct email format')
  .required('Email is required'),
  bio: Yup.string()
  .max(50, "Bio can't be longer than 50 characters")
  .nullable(),
  image: Yup.string()
  .url("Not a correct url format") 
})

const Settings = (): JSX.Element => {
  const user = useAppSelector(state => state.user)
  return (
    <div>
      <Formik
      initialValues={{
        email: user.email, 
        bio: user.bio === null? '': user.bio, 
        image: user.image
      }}
      validationSchema = {yupSchema}
      onSubmit = {async (values) => {
        await updateUser(user.token, {...values})
      }}>
        {(props: FormikProps<{email: string, bio: string, image: string}>) => (
          <Form>
            <Field component={CustomInputComponent} type='email' {...props.getFieldProps('email')}/>
            <Field component={CustomInputComponent} type='text' {...props.getFieldProps('bio')}/>
            <Field component={CustomInputComponent} type='text' {...props.getFieldProps('image')}/>
            <button type='submit'>Save</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Settings