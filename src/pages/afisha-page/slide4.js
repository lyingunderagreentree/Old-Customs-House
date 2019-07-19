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
      <div className="content-holder content-holder--reverse">
        <div className="content-holder__item">
          <div> <h2>Винные вечера</h2> </div>
          <Date />
      
          <div className="text-block">
            <p>Узнать, как создаются кулинарные шедевры – большая удача. 
              Гости «Старой Таможни» могут своими глазами увидеть, 
              как из отдельных продуктов рождается превосходная симфония вкуса. </p>

            <p>На островке в центре зала шеф-повар не только приготовит для вас изысканный ужин: 
              перед вами развернется настоящий кулинарный спектакль. 
              В зале могут с комфортом расположиться от 5 до 15 человек.</p>

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
