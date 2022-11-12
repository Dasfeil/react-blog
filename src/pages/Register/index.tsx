import { Formik, Form, Field, FormikProps} from 'formik'
import React from 'react'
import { register } from '../../services/conduit'
import * as Yup from 'yup'
import CustomInputComponent from '../../components/CustomInputComponent'
import { useAppDispatch } from '../../redux/hooks'
import { useHistory } from 'react-router-dom'
import { userAction } from '../../redux/user/slice'
import { AxiosError } from 'axios'

const initialValues = {
    username: '',
    email: '',
    password: '',
}

const yupSchema = Yup.object().shape({
    username: Yup.string()
    .min(3, 'Username is too short (minimum 3)')
    .max(50, 'Username is too long (maximum 50)')
    .required('Username is required'),
    email: Yup.string()
    .email('Not a correct email format')
    .required('Email is required'),
    password: Yup.string()
    .required('Password is required')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
    "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character")
})

const Register = (): JSX.Element => {
    const dispatch = useAppDispatch()
    const history = useHistory()
    return (
        <>
            <Formik
            initialValues={initialValues}
            validationSchema= {yupSchema}
            onSubmit={ async (values) => {
                await register(values.username, values.email, values.password).then(res => {
                    dispatch(userAction.setUser(res))
                })
                .then(() => history.push('/'))
                .catch((err: AxiosError) => console.log(err.response))
            }}>
                {(props: FormikProps<{username: string, email: string, password: string}>) => (
                    <Form className='space-y-2'>
                        <Field type='text' {...props.getFieldProps('username')} component={CustomInputComponent}></Field>
                        <Field type='email' {...props.getFieldProps('email')} component={CustomInputComponent}></Field>
                        <Field type='password' {...props.getFieldProps('password')} component={CustomInputComponent}></Field> 
                        <button type='submit'>Register</button>
                    </Form>
                )}
            </Formik>
        </>
    )
}


export default Register
