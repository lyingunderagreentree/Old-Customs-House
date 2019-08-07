import React from 'react'
import '../page-slider.scss'
import './about-page.scss'
import Slide1 from './slide1'
import Slide2 from './slide2'
import Slide3 from './slide3'
import Slide4 from './slide4'
import Slide5 from './slide5'
import Slider from 'react-slick' 
import eventEmitter from '../../utils/eventEmitter'
import ScrollEventsArea from '../../components/scroll-events-area/scroll-events-area'
import AnimatedScroll from '../../components/animated-scroll-icon/animated-scroll-icon'
import Layout from '../../components/layout/layout'

class AboutPage extends React.Component {
  isSliderEnabled = true
  
  sliderSettings = {
    dots: true,
    speed: 800,
    slidesToShow: 1,
    arrows: false,
    vertical: true,
    verticalSwiping: false,
    infinite: false,
    useTransform: true,
    draggable: false,
    cssEase: 'cubic-bezier(0.445, 0.050, 0.550, 0.950)',
    responsive: [
      {
        breakpoint: 677,
        settings: {
          vertical: false,
          apadtiveHeight: true
        }
      } 
    ]
  }

  constructor(props) {
    super(props)
    this.slider = React.createRef()
  }

  componentDidMount() {
    eventEmitter.emit('SET_LAYOUT_THEME', '')
  }

  render() {
    return (
      <div className="about-page page">
        <Layout>

          <ScrollEventsArea
            onScrollUp={e => {
              e.preventDefault()
              if (this.isSliderEnabled) {
                this.slider.current.slickNext()
                this.isSliderEnabled = false
                setTimeout(() => {
                  this.isSliderEnabled = true
                }, 1000);
              }
            }}
            onScrollDown={e => {
              e.preventDefault()
              if (this.isSliderEnabled) {
                this.slider.current.slickPrev()
                this.isSliderEnabled = false
                setTimeout(() => {
                  this.isSliderEnabled = true
                }, 1000);
              }
            }}
          >
            <Slider className="page__slider" {...this.sliderSettings} ref={this.slider}>
              <Slide1 />
              <Slide2 />
              <Slide3 />
              <Slide4 />
              <Slide5 />
            </Slider>
          </ScrollEventsArea>

          <AnimatedScroll />

        </Layout>
      </div>
    )
  }
}

export default AboutPage
