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
  <div className="slide4 slide">
    <div className="container">
      <div className="container--double">
        <div className="container--double__item">
          <div> <h2>Винные вечера</h2> </div>
      
          <div className="text-block">
            <p>Узнать, как создаются кулинарные шедевры – большая удача. 
              Гости «Старой Таможни» могут своими глазами увидеть, 
              как из отдельных продуктов рождается превосходная симфония вкуса. </p>

            <p>На островке в центре зала шеф-повар не только приготовит для вас изысканный ужин: 
              перед вами развернется настоящий кулинарный спектакль. 
              В зале могут с комфортом расположиться от 5 до 15 человек.</p>

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
