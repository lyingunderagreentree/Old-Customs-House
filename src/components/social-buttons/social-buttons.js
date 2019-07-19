import React from 'react'
import './social-buttons.scss'
import InlineSVG from 'svg-inline-react'
import facebook from '../footer/img/Facebook.svg'
import instagram from '../footer/img/Inst.svg'
import youtube from '../footer/img/youtube.svg'

export default() => (
  <ul className="social-buttons">
    <li className="social-buttons__item"><InlineSVG className="social-buttons__icon" src={facebook} /></li>
    <li className="social-buttons__item"><InlineSVG className="social-buttons__icon" src={instagram} /></li>
    <li className="social-buttons__item"><InlineSVG className="social-buttons__icon" src={youtube} /></li>
  </ul>
)