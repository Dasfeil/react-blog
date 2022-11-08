import { Formik, Form, Field, FormikProps} from 'formik'
import React from 'react'
import { register } from '../../services/conduit'
import * as Yup from 'yup'

const initialValues = {
    username: '',
    email: '',
    password: '',
}

const yupSchema = Yup.object().shape({
    username: Yup.string()
    .min(2, 'Username is too short (minimum 3)')
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

    return (
        <>
            <Formik
            initialValues={initialValues}
            validationSchema= {yupSchema}
            onSubmit={ async (values) => {
                await register(values.username, values.email, values.password)
            }}>
                {(props: FormikProps<{username: string, email: string, password: string}>) => (
                    <Form>
                        <Field type='text' {...props.getFieldProps('username')}></Field>
                        <Field name="email" type='email'></Field>
                        <Field name="password" type='password'></Field>
                    </Form>
                )}
            </Formik>
        </>
    )
}


export default Register