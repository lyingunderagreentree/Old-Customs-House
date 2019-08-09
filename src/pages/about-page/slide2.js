import React from 'react'
import aboutPagePic2 from './img/About_2.jpg'
import Fade from 'react-reveal/Fade'

export default () => (
  <div className="slide1 slide--big columns">
    <div className="container column is-10 is-10-mobile">
      <div className="content-holder">
        <div className="content-holder__item">
          <div><h2>Душа ресторана — Мистер Гир</h2></div>
          <Fade bottom cascade>
          <div className="text-block">
            <p>Мистер Энтони Уильям Гир создает неповторимую атмосферу заведения. 
              Многолетний опыт работы в лучших ресторанах Великобритании и Франции 
              позволяет мистеру Гиру безошибочно выстраивать работу «Старой Таможни».</p>

            <p>Кроме того мистер Гир – действующий член гильдии сомелье 
              и хранитель уникальной коллекции вин и сотернов. 
              Он подберет идеальное винное сопровождение к каждому блюду.</p>
          </div>
          </Fade>
        </div>
      </div>

    </div>

    <img src={aboutPagePic2} className="background background--img" />

  </div>
)