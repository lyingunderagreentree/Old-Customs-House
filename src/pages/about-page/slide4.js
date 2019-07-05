import React from 'react'
import aboutPagePic4 from './img/About_4.jpg'

export default () => (
  <div className="slide4 slide">

    <div className="container">

      <div className="container--half">

        <h2>Архитектурное наследие</h2>

        <div className="text-block">
          <p>Петербуржцы трепетно относятся к истории и традициям своего города, 
            ведь богатое культурное и архитектурное наследие – безусловно, 
            повод для гордости.</p> 

          <p>Среди всемирно известных достопримечательностей Северной Венеции – 
            ансамбль Стрелки Васильевского острова. 
            Именно здесь расположился истинно петербургский ресторан «Старая таможня».</p>

        </div>
        
      </div>

    </div>

    <img src={aboutPagePic4} className="background--img" />

  </div>
)