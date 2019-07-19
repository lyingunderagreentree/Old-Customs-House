import React from 'react'
import Slider from 'react-slick'
import slide1 from './img/test.jpg'
import '../afisha-slider.scss'
import Date from '../../components/date/date'

const sliderSettings = {
  dots: true,
  speed: 500,
  slidesToShow: 1,
  arrows: true
}

export default () => (
  <div className="slide1 slide columns">
    <div className="container column is-10 is-10-mobile">
      <div className="content-holder">

        <div className="content-holder__item">
          <div><h2>3D шоу Le Petit Chef</h2></div>
          <Date />
      
          <div className="text-block">
            <p>Представляем вам Le Petit Chef – кулинарный видео-перфоманс, 
            взорвавший европейское профессиональное сообщество.  
            Обычный ужин превращается в увлекательный шоу-ужин благодаря технологиям 3D-мэппинга. 
            Le Petit Chef – это комбинация цифрового искусства, звука, комедии и технического прогресса, 
            разворачивается прямо на поверхности стола.</p>

          </div>
        </div>

        <div className="content-holder__item">

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
