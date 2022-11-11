import React from 'react'
import { login } from '../../services/conduit'
import { Formik, Field, FormikProps, Form } from 'formik'
import CustomInputComponent from '../../components/CustomInputComponent'
import { userAction } from '../../redux/user/slice'
import { useAppDispatch } from '../../redux/hooks'
import { useHistory } from 'react-router-dom'

const initialValues = {
  email: '',
  password: ''
}


const Login = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const history = useHistory()
  return (
    <>
      <Formik
      initialValues={initialValues}
      onSubmit={ async (values) => {
        await login(values.email, values.password).then(res => dispatch(userAction.setUser(res))).catch(console.log)
        history.push('/')
      }}>
        {(props: FormikProps<{email: string, password: string}>) => (
          <Form className='space-y-2'>
            <Field type="text" {...props.getFieldProps('email')} component={CustomInputComponent}></Field>
            <Field type="password" {...props.getFieldProps('password')} component={CustomInputComponent}></Field>
            <button type="submit">Login</button>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default Login