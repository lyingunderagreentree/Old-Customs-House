import React, { useRef, useEffect } from 'react'
import './main-slider.scss'
import MainPage from '../../pages/main-page/main-page'
import AboutPage from '../../pages/about-page/about-page'
import AfishaPage from '../../pages/afisha-page/afisha-page'
import MenuPage from '../../pages/menu-page/menu-page'
import MenuPageItem from '../../pages/menu-page/menu-page-item'
import ContactPage from '../../pages/contact-page/contact-page'
import Slider from 'react-slick'
import Hamster from 'hamsterjs'
import eventEmitter from '../../utils/eventEmitter'

function TestTest(props) {
  const r = useRef(0)
  useEffect(() => {
    Hamster(r.current).wheel(props.onScroll)
  })

  return <div ref={r}>{props.children}</div>
}

class MainSlider extends React.Component {
  static SliderItem = (props) => {
    return props.children
  }

  sliderSettings = {
    dots: false,
    speed: 300,
    slidesToShow: 1,
    arrows: false,
    vertical: true,
    verticalSwiping: true,
    infinite: false
    // useTransform: true,
    // cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)'
  }

  constructor(props) {
    super(props)
    this.sliderRef = null
    this.onPageScroll = this.onPageScroll.bind(this)
    this.sliderItemConfig = [
      {
        "url": "/",
        "theme": ""
      },
      {
        "url": "/asdf",
        "theme": ""
      },
      {
        "url": "/afewefsdf",
        "theme": "layout--black"
      },
      {
        "url": "/afewefweffsdf",
        "theme": ""
      },
      {
        "url": "/afeweeeeefsdf",
        "theme": ""
      },
      {
        "url": "/afewefewfwefsdf",
        "theme": "layout--black"
      }
    ]
    this.sliderBeforeChange = this.sliderBeforeChange.bind(this)
  }

  render() {
    const { children } = this.props

    return (
      <div className='main-slider'>
        <Slider 
          ref={r => {this.sliderRef = r}} 
          beforeChange={this.sliderBeforeChange}
          {...this.sliderSettings}
        >
          {children.map(sliderItem => (
            <TestTest key={sliderItem.props.url} onScroll={this.onPageScroll}>
              {sliderItem}
            </TestTest>
          ))}
        </Slider>
      </div>
    )
  }

  onPageScroll(e) {
    if (e.deltaY > 0) {
      this.sliderRef.slickNext()
    }
    if (e.deltaY < 0) {
      this.sliderRef.slickPrev()
    }
  }

  sliderBeforeChange(currentSlide, nextSlide) {
    eventEmitter.emit('CHANGE_LAYOUT_THEME', this.sliderItemConfig[nextSlide].theme)
  }
}

export default () => (
  <MainSlider>
    <MainSlider.SliderItem url="/">
      <MainPage />
    </MainSlider.SliderItem>
    <MainSlider.SliderItem url="about12">
      <AboutPage />
    </MainSlider.SliderItem>
    <MainSlider.SliderItem url="about42142" theme="layout--black">
      <AfishaPage />
    </MainSlider.SliderItem>
    <MainSlider.SliderItem url="about4124121">
      <MenuPage />
    </MainSlider.SliderItem>
    <MainSlider.SliderItem url="about745676">
      <MenuPageItem />
    </MainSlider.SliderItem>
    <MainSlider.SliderItem url="afewfebout745676" theme="layout--black">
      <ContactPage />
    </MainSlider.SliderItem>
  </MainSlider>
)


// export default () => (
//   <div className="main-slider">
//     <Slider  {...sliderSettings}>
//       <MainPage />
//       <AboutPage />
//       <AfishaPage />
//       <MenuPage />
//       <MenuPageItem />
//       <ContactPage />
//     </Slider>
//   </div>
// )
