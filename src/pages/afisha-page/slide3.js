import React from 'react'
import Slider from 'react-slick'
import slide1 from './img/test.jpg'
import '../afisha-slider.scss'

const sliderSettings = {
  dots: false,
  speed: 300,
  slidesToShow: 1,
  arrows: true
}

export default () => (
  <div className="slide3 slide">

    <div className="container">

      <div className="container--double">

        <div className="container--double__item">
          <div><h2>3D шоу Le Petit Chef</h2></div>
      
          <div className="text-block">
            <p>Представляем вам Le Petit Chef – кулинарный видео-перфоманс, 
            взорвавший европейское профессиональное сообщество.  
            Обычный ужин превращается в увлекательный шоу-ужин благодаря технологиям 3D-мэппинга. 
            Le Petit Chef – это комбинация цифрового искусства, звука, комедии и технического прогресса, 
            разворачивается прямо на поверхности стола.</p>

          </div>
        </div>

        <div className="container--double__item">

          <Slider className="afisha-slider" {...sliderSettings}>
            <img src={slide1}/>
            <img src={slide1}/>
            <img src={slide1}/>
            <img src={slide1}/>
            <img src={slide1}/>
          </Slider>

        </div>
        
      </div>
    </div>
  </div>
)
