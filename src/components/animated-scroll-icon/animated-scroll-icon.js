import React from 'react'
import './animated-scroll-icon.scss'
import Lottie from 'react-lottie'
import animationScroll from '../../pages/scroll.json' 

class AnimatedScroll extends React.Component {
  defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationScroll,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  render() {
    return (
      <div className="animated-scroll">
        <span className="animated-scroll__text">scroll</span>
        <Lottie options={this.defaultOptions} width={'100%'}/>
      </div>
    )
  }
}


export default AnimatedScroll