import React from 'react'
import './social-buttons.scss'
import youtubeIcon from './img/youtube.png'

export default() => (
  <ul className="social-buttons">
    <li className="social-buttons__item"><img src={youtubeIcon} /></li>
    <li className="social-buttons__item"><img src={youtubeIcon} /></li>
    <li className="social-buttons__item"><img src={youtubeIcon} /></li>
  </ul>
)