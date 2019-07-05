import React from 'react'
import './main-page.scss'

export default () => (

  <div className="main-page">        

    <div className="container">

      <div className="main-page__name">
        <h1>Ресторан высокой кухни
        <span className="primary-color"> с многолетней историей</span></h1>
      </div>
      <div className="bttn">Забронировать стол</div>
      
    </div>

    <div /*style={{backgroundImage: 'url(./img/Main_PAGE.jpg)'}}*/ className="background background--main"></div>

  </div>

)