import React from 'react'

class FinishOrderMessage extends React.Component {

  render() {
    return (
      <div className="finish-order-message">
        <h1>Спасибо за заявку.
          <span className="primary-color"> 
            С вами свяжутся в ближайшее время
          </span>
        </h1>
        <button className="bttn">Хорошо</button>
      </div>
    )
  }
}

export default FinishOrderMessage
  

