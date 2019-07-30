import React from 'react'
import Slider from 'react-slick'
import slide1 from './img/test.jpg'
import '../afisha-slider.scss'
import Date from '../../components/date/date'
import Fade from 'react-reveal/Fade'

const sliderSettings = {
  dots: true,
  speed: 500,
  slidesToShow: 1,
  arrows: true,
  responsive: [
    {
      breakpoint: 677,
      settings: {
        dots: false,
        swipe: false,
      }
    } 
  ]
}

export default () => (
  <div className="slide1 slide columns">
    <div className="container column is-10 is-10-mobile">
      <div className="content-holder">
        <div className="content-holder__item">
          <div>  
            <h2>Jazz вечера</h2>
          </div>

          <Date />
          <Fade bottom cascade>
          <div className="text-block">
            <p>Каждый вечер с понедельника по субботу в ресторане «Старая Таможня» звучит прекрасный легкий джаз – 
              лучшие музыканты Петербурга играют и поют для гостей. У нас играет и несравненная Ольга Абдуллина – 
              яркая и талантливая джазистка. Виртуозное владение скэтом, вокальной импровизацией, авторские аранжировки — 
              вас ждет коктейль из каверов известных мелодий и джаза с очаровательными нотками фанка. </p>

            <p>В профессиональном списке Ольги Абдуллиной уже значится множество фестивалей России и за ее пределами: 
              Усадьба джаз, Rigas Ritmi international jazz festival, Jazztori festival, Петроджаз, Джаз без границ. 
              Она выступала на Экономическом форуме, Алых парусах, Паралимпийских играх. 
              Сейчас Ольга Абдуллина готовится к участию в проекте «Голос».</p>
          </div>
          </Fade>
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