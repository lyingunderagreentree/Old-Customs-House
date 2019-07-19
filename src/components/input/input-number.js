import React from 'react'
import './input.scss'

export default ({
  id,
  ...rest
}) => (
  <div className="input-number input">
    
    <label htmlFor={id}>Телефон</label>
    <input id={id} type='text' {...rest} />

  </div>
)