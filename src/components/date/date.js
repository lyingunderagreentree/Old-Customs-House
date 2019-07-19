import React from 'react'
import './date.scss'
import clock from './img/clock.svg'
import InlineSVG from 'svg-inline-react'

class Date extends React.Component {
  render() {
    return (
      <div className="date">
        <InlineSVG src={clock} />
        <p className="date__time">ПН - СБ, 20:00 - 22:30</p>
      </div>
    )
  }
}

export default Date