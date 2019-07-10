import React from 'react'
import './main-slider.scss'
import MainPage from '../../pages/main-page/main-page'
import AboutPage from '../../pages/about-page/about-page'
import AfishaPage from '../../pages/afisha-page/afisha-page'
import MenuPage from '../../pages/menu-page/menu-page'
import MenuPageItem from '../../pages/menu-page/menu-page-item'
import ContactPage from '../../pages/contact-page/contact-page'
import Slider from 'react-slick'

const sliderSettings = {
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

export default () => (
  <div className="main-slider">
    <Slider  {...sliderSettings}>
      <MainPage />
      <AboutPage />
      <AfishaPage />
      <MenuPage />
      <MenuPageItem />
      <ContactPage />
    </Slider>
  </div>
)