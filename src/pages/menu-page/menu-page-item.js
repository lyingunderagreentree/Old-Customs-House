import React from 'react'
import './menu-page-item.scss'
import mainMenuPic from './img/main-menu.png'
//import menuPagePic from '../about-page/img/About_3.jpg'

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
              <p className="price">2200 руб.</p>
          </li>

          <li className="menu-section__item">
            <p className="position">Равиоли-Фаготтини в соусе из старого портвейна, сервируются выдержанным Parmesan Reggiano и икрой из лесных грибов</p>
              <span className="dotted"></span>
              <p className="price">1100 руб.</p>
          </li>

          <li className="menu-section__item">
            <p className="position">Теплые тигровые креветки с соусом из спелых томатов</p>
              <span className="dotted"></span>
              <p className="price">2200 руб.</p>
          </li>

          <li className="menu-section__item">
            <p className="position">Традиционные пельмени c кремом из хрена, сервируются граните из клюквы с водкой</p>
              <span className="dotted"></span>
              <p className="price">2200 руб.</p>
          </li>

          <li className="menu-section__item">
            <p className="position">Грудинка молодого поросенка в апельсиновом соусе с томленым пореем</p>
              <span className="dotted"></span>
              <p className="price">2200 руб.</p>
          </li>

          <li className="menu-section__item">
            <p className="position">Раковые шейки с крем-брюле из шампанского</p>
              <span className="dotted"></span>
              <p className="price">2200 руб.</p>
          </li>

          <li className="menu-section__item">
            <p className="position">К любому из выбранных Вами блюд рекомендуем добавить черный трюфель</p>
              <span className="dotted"></span>
              <p className="price">2200 руб.</p>
          </li>
        </ul>

        <button className="bttn bttn--back">Вернуться в меню</button>

      </div>

      <div className="menu-pic">
        <img src={mainMenuPic}/>
      </div>

    </div>
  </div>
)