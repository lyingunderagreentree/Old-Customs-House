import React from 'react'
import './input.scss'
import MaskedInput from 'react-text-mask'

export default (props) => (
  <div className="input-number input">
    <label>Телефон</label>
    <MaskedInput
      mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
      className="form-control"
      placeholder="(888) 888 8888"
      {...props}
    />
  </div>
)
