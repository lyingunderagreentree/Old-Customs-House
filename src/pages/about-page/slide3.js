import React from 'react'
import aboutPagePic3 from './img/About_3.jpg'

export default () => (
  <div className="slide3 slide">

    <div className="container">

      <div className="container--half">
        <div className="container--half__item">
          <div><h2>Высокая кухня</h2></div>

          <div className="text-block">
            <p>Меню, которое удовлетворит потребности даже самого привередливого гурмана: 
              изысканные блюда, приготовленные настоящими мастерами кулинарии, дикие морепродукты, 
              шикарная карта вин, уникальные десерты.</p>
          </div>
        </div>
      </div>

    </div>

    <img src={aboutPagePic3} className="background background--img" />

  </div>
)