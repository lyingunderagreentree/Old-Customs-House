import React from 'react'
import './input.scss'

export default ({
  id,
  ...rest
}) => (
  <div className="input-day input" >
    
    <label htmlFor={id}>Дата</label>
    <input id={id} type='text' {...rest} />

  </div>
)
