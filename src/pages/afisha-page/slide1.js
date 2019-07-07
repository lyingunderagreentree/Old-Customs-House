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
  <div className="slide1 slide">
    <div className="container">
      <div className="container--double">

        <div className="container--double__item">
          <div>  
            <h2>Jazz вечера</h2>
          </div>

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