import React from 'react'
import { useAppSelector } from '../../redux/hooks'
import { Formik } from 'formik'

const Settings = (): JSX.Element => {
  const user = useAppSelector(state => state.user)
  return (
    <div>
      <Formik
      initialValues={{
        email: user.email, 
        bio: user.bio, 
        image: user.image
      }}
      onSubmit = {(value) => {
        
      }}>

      </Formik>
    </div>
  )
}

export default Settings