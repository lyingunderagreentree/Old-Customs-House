import React from 'react'
import './input.scss'

export default ({
  id,
  ...rest
}) => (
  <div className="input-time input">
    
    <label htmlFor={id}>Время</label>
    <input id={id} type='text' {...rest} />

  </div>
)