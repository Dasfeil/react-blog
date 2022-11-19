import React from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { Field, Form, Formik, FormikProps } from 'formik'
import { updateUser } from '../../services/conduit'
import CustomInputComponent from '../../components/CustomInputComponent'
import * as Yup from 'yup'
import { useHistory } from 'react-router-dom'
import { userAction } from '../../redux/user/slice'
import { AxiosError } from 'axios'

const yupSchema = Yup.object().shape({
  email: Yup.string()
  .email('Not a correct email format')
  .required('Email is required'),
  bio: Yup.string()
  .max(50, "Bio can't be longer than 50 characters")
  .nullable(),
  image: Yup.string()
  .url("Not a correct url format"),
  password: Yup.string()
  .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
  "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character")
})

const Settings = (): JSX.Element => {
  const user = useAppSelector(state => state.user)
  const history = useHistory()
  const dispatch = useAppDispatch()
  return (
    <div>
      <Formik
      initialValues={{
        email: user.email, 
        bio: user.bio === null? '': user.bio, 
        image: user.image,
        password: ''
      }}
      validationSchema = {yupSchema}
      onSubmit = {async (values) => {
        await updateUser(user.token, {...values}).then((user) => dispatch(userAction.setUser(user))).catch((err: AxiosError) => console.log(err.response))
        history.push('/')
      }}>
        {(props: FormikProps<{email: string, bio: string, image: string, password: string}>) => (
          <Form>
            <label htmlFor="email">Email:</label>
            <Field id="email" component={CustomInputComponent} type='email' {...props.getFieldProps('email')}/>
            <label htmlFor="bio">Bio:</label>
            <Field id="bio" component={CustomInputComponent} {...props.getFieldProps('bio')}/>
            <label htmlFor="image">Image URL:</label>
            <Field id="image" component={CustomInputComponent} {...props.getFieldProps('image')}/>
            <label htmlFor="password">New password:</label>
            <Field id="password" component={CustomInputComponent} type='password' {...props.getFieldProps('password')}/>
            <button type='submit'>Save</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Settings