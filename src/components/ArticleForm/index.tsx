import { Formik, FormikProps, Form, Field, FieldArray, ArrayHelpers } from 'formik'
import React from 'react'
import { CArticle } from '../../interfaces/article'
import CustomInputComponent from '../CustomInputComponent'
import * as Yup from 'yup'

const initialValues: CArticle = {
    title: '',
    description: '',
    body: '',
    tagList: new Array<string>()
}

const yupSchema = Yup.object().shape({
    title: Yup.string()
    .required('Title is required'),
    description: Yup.string()
    .required('Description is required'),
    body: Yup.string()
    .required('Body is required'),
    tagList: Yup.array().of(
        Yup.string()
        .required('Tag cannot be empty')
    )
})

const ArticleForm = (): JSX.Element => {
  return (
        <Formik
        initialValues={initialValues}
        onSubmit={() => {
            console.log('bruh')
        }}
        validationSchema={yupSchema}>
            {(props: FormikProps<CArticle>) => (
                <Form>
                    <label htmlFor='title'>Title:</label>
                    <Field id="title" component={CustomInputComponent} {...props.getFieldProps('title')}/>
                    <label htmlFor='desc'>Description:</label>
                    <Field id="desc" component={CustomInputComponent} {...props.getFieldProps('description')}/>
                    <label htmlFor='body'>Body:</label>
                    <Field id="body" component={CustomInputComponent} {...props.getFieldProps('body')}/>
                    <FieldArray name="tagList">
                        {(helper: ArrayHelpers) => (
                            <div>
                                {props.values.tagList !== undefined && props.values.tagList.length > 0 && (
                                    props.values.tagList.map((tag, index) => (
                                        <div key={index}>
                                            <Field component={CustomInputComponent} {...props.getFieldProps(`tagList.${index}`)}/>
                                            <button type="button" onClick={() => helper.remove(index)}>X</button>
                                        </div>
                                    ))
                                )}
                                <button type="button" onClick={() => helper.push('')}>+</button>
                            </div>
                        )}
                    </FieldArray>
                    <button type='submit'>Create</button>
                </Form>
            )}
        </Formik>
    )
}

export default ArticleForm