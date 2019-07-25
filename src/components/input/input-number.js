import React from 'react'
import './input.scss'
import MaskedInput from 'react-text-mask'

export default () => (
  <div className="input-number input">
    <label>Телефон</label>
    <MaskedInput
      mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
      className="form-control"
      placeholder="(888) 888 8888"
    />
  </div>
)


// export default ({
//   id,
//   ...rest
// }) => (
//   <div className="input-number input">
    
//     <label htmlFor={id}>Телефон</label>
//     <input id={id} type='text' {...rest} />

//   </div>
// )