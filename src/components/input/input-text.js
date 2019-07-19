import React from 'react'
import './input.scss'

export default ({
  id,
  ...rest
}) => (
  <div className="input-text input">
    
    <label htmlFor={id}>Имя</label>
    <input id={id} type='text' {...rest} />
  </div>
)