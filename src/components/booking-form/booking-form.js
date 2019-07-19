import React from 'react'
import './booking-form.scss'
import InputDay from '../input/input-day'
import InputTime from '../input/input-time'
import InputCounter from '../input/input-counter'
import InputText from '../input/input-text'
import InputNumber from '../input/input-number'
import Button from '../button/button'

export default () => (
  <form className="booking-form">

    <div className="booking-form__firstline">
      <InputDay id="input-day" placeholder={'dd/mm/yyyy'}/>
      <InputTime id="input-time" placeholder={'00:00'}/>
      <InputCounter id="input-counter" />
    </div>
    <div className="booking-form__secondline">
      <InputText id="input-name" placeholder={'Дмитрий Алексеевич'} />
      <InputNumber id="input-number" placeholder={'+7 955 555 555 5'}/>
    </div>
    <Button />

  </form>
    
)


  