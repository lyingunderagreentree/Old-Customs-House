import React from 'react'
import Slider from 'react-slick'
import slide1 from './img/test.jpg'
import slide2 from './img/test1.jpg'
import '../afisha-slider.scss'
import '../../styles/date.scss'
import clock from './img/clock.svg'
import InlineSVG from 'svg-inline-react'
import Fade from 'react-reveal/Fade'
import { Slide } from 'react-slideshow-image'

const PicSliderSettings = {
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


// const picSliderSettings = {
//   duration: 5000,
//   transitionDuration: 500,
//   infinite: false,
//   indicators: false,
//   arrows: true,
//   onChange: (oldIndex, newIndex) => {
    
//   }
// }

export default () => (
  <div className="slide1 slide--big columns">
    <div className="container column is-10 is-10-mobile"> 
      <div className="content-holder content-holder--reverse">
        <div className="content-holder__item">

          <div className="is-hidden-mobile">  
            <h2>Кулинарное шоу</h2> 
          </div>

          <div className="date">
            <InlineSVG src={clock} />
            <p className="date__time">ПН - СБ, 20:00 - 22:30</p>
          </div>
          <Fade bottom cascade>
            <div className="text-block">
              <p>Узнать, как создаются кулинарные шедевры – большая удача. 
                Гости «Старой Таможни» могут своими глазами увидеть, 
                как из отдельных продуктов рождается превосходная симфония вкуса. </p>

              <p>На островке в центре зала шеф-повар не только приготовит для вас изысканный ужин: 
                перед вами развернется настоящий кулинарный спектакль. 
                В зале могут с комфортом расположиться от 5 до 15 человек.</p>
            </div>
          </Fade>
        </div>

        <div className="content-holder__item">

          <div className="on-mobile"><h2>Кулинарное шоу</h2></div>

          <Slider className="afisha-slider" {...PicSliderSettings}>
            <img src={slide1}/>
            <img src={slide1}/>
            <img src={slide1}/>
            <img src={slide1}/>
            <img src={slide1}/>
          </Slider>

          {/* <div className="slide-container afisha-slider">
            <Slide {...picSliderSettings}>
              <div className="each-slide"><img src={slide1}/></div>
              <div className="each-slide"><img src={slide2}/></div>
              <div className="each-slide"><img src={slide1}/></div>
              <div className="each-slide"><img src={slide2}/></div>
              <div className="each-slide"><img src={slide1}/></div>
            </Slide>
          </div> */}

        </div>
        
      </div>
    </div>
  </div>
)