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

export default class extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // ref.css({

    // })
  }

  render() {

    return (
      <div className="slide1 slide--big columns">
        <div className="container column is-10 is-10-mobile">
          <div className="content-holder">
            <div className="content-holder__item">

              <div className="is-hidden-mobile">  
                <h2>Jazz вечера</h2>
              </div>
    
              <div className="date">
                <InlineSVG src={clock} />
                <p className="date__time">ПН - СБ, 20:00 - 22:30</p>
              </div>
    
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

              <div className="on-mobile"><h2>Jazz вечера</h2></div>
    
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
  }

}
