import React from 'react'
import './input.scss'

export default ({
  id,
  ...rest
}) => (
  <div className="input-counter input">

    <label htmlFor={id}>Гости</label>
    <input id={id} type='text' {...rest} />
    
  </div>
)