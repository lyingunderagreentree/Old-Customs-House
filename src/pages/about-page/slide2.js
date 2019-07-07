import React from 'react'
import aboutPagePic2 from './img/About_2.jpg'

export default () => (
  <div className="slide2 slide">

    <div className="container">

      <div className="container--half">

        <h2>Душа ресторана — Мистер Гир</h2>

        <div className="text-block">
          <p>Мистер Энтони Уильям Гир создает неповторимую атмосферу заведения. 
            Многолетний опыт работы в лучших ресторанах Великобритании и Франции 
            позволяет мистеру Гиру безошибочно выстраивать работу «Старой Таможни».</p>

          <p>Кроме того мистер Гир – действующий член гильдии сомелье 
            и хранитель уникальной коллекции вин и сотернов. 
            Он подберет идеальное винное сопровождение к каждому блюду.</p>
        </div>
        
      </div>

    </div>

    <img src={aboutPagePic2} className="background background--img" />

  </div>
)