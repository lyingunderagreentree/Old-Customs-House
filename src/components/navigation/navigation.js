import React from 'react'
import './navigation.scss'
import { Link } from 'react-router-dom'

export default () => (
  <ul className="navigation">
    <li className="navigation__item"><Link to='/about' className="highlighted">о ресторане</Link></li>
    <li className="navigation__item"><Link to='/afisha' className="highlighted">афиша</Link></li>
    <li className="navigation__item"><Link to='/menu' className="highlighted">меню</Link></li>
    <li className="navigation__item"><Link to='/contact' className="highlighted">контакты</Link></li>
  </ul>
)
