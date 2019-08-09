import React from 'react'
import aboutPagePic4 from './img/About_4.jpg'

export default () => (
  <div className="slide1 slide--big columns">
    <div className="container column is-10 is-10-mobile">
      <div className="content-holder">
        <div className="content-holder__item">
          <div><h2>Архитектурное наследие</h2></div>

          <div className="text-block">
            <p>Петербуржцы трепетно относятся к истории и традициям своего города, 
              ведь богатое культурное и архитектурное наследие – безусловно, 
              повод для гордости.</p> 

            <p>Среди всемирно известных достопримечательностей Северной Венеции – 
              ансамбль Стрелки Васильевского острова. 
              Именно здесь расположился истинно петербургский ресторан «Старая таможня».
            </p>
          </div>
        </div>
      </div>

    </div>

    <img src={aboutPagePic4} className="background background--img" />

  </div>
)