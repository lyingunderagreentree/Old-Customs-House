import React from 'react'
import './menu-page-item.scss'
import mainMenuPic from './img/main-menu.png'

export default () => (
  <div className="menu-page-item">

    <div className="background background--menu"></div>

    <div className="container">
      <div className="container--menu">

        <div className="menu-section-name"><h2>Горячие закуски</h2></div>

        <ul className="menu-section">
          <li className="menu-section__item">
            <p className="position">Foie Gras запеченная в карамели из хереса с мармеладом 
              глинтвейн из красного апельсина и сорбетом из черной смородины</p>
              <span className="dotted"></span>
              <p className="price">2200 руб.</p>
          </li>
        
        </ul>

      </div>

        {/* <div className="container--double__item">

          <div className="menu-section__pic">
            <img src={mainMenuPic}/>
          </div>

        </div> */}
    </div>
  </div>
)