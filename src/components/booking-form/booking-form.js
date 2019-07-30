import React from 'react'
import './booking-form.scss'
import InputDay from '../input/input-day'
import InputTime from '../input/input-time'
import InputCounter from '../input/input-counter'
import InputText from '../input/input-text'
import InputNumber from '../input/input-number'
import Button from '../button/button'
import { Formik } from 'formik'

const initialValues = {
  date: '',
  time: '',
  persons: null,
  name: '',
  phone: ''
}

const onSubmit = (values) => {
  console.log('check', values)
}

const validationSchema = {}

export default () => (
  <Formik
    initialValues={initialValues}
    onSubmit={onSubmit}
    validationSchema={validationSchema}
    render={({
      handleSubmit,
      handleChange,
      values,
      setFieldValue,
      errors,
    }) => (
      <form onSubmit={handleSubmit} className="booking-form">
        <div className="booking-form__firstline">
          <InputDay 
            id="input-day" 
            placeholder={'dd/mm/yyyy'}
            name='date'
            onChange={value => {
              setFieldValue('date', value)
            }}
          />
          <InputTime 
            id="input-time" 
            placeholder={'00:00'}
            name='time'
            onChange={value => {
              setFieldValue('time', value)
            }}
          />
          <InputCounter 
            id="input-counter" 
            name='persons'
            onChange={value => {
              setFieldValue('persons', value)
            }}
          />
        </div>
        <div className="booking-form__secondline">
          <InputText 
            onChange={handleChange} 
            id="input-name"
            value={values.name}
            name='name' 
            placeholder={'Дмитрий Алексеевич'} 
          />
          <InputNumber 
            name='phone'
            value={values.phone}
            onChange={handleChange} 
            id="input-number" 
            placeholder={'+7 955 555 555 5'}
          />
        </div>

        <button type={'submit'} className="bttn bttn--send">Отправить</button>
        
      </form>
    )}
  />
)


  