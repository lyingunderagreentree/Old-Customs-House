import React from 'react'
// import menuPageItem from './menu-page-item'
import './menu-page.scss'
import mainMenuPic from './img/main-menu.png'

export default () => (
  <div className="menu-page page">

    <div className="background background--menu"></div>

    <div className="container">
      <div className="container--double">
        <div className="container--double__item">

          <div><h2>Меню</h2></div>

          <ul className="menu-list">
            <li className="menu-list__item"><a>Горячие закуски</a></li>
            <li className="menu-list__item"><a>Холодные закуски</a></li>
            <li className="menu-list__item"><a>Супы</a></li>
            <li className="menu-list__item"><a>Дикие морепродукты</a></li>
            <li className="menu-list__item"><a>Горячие рыбные блюда</a></li>
            <li className="menu-list__item"><a>Горячие мясные блюда</a></li>
            <li className="menu-list__item"><a>Гарниры</a></li>
            <li className="menu-list__item"><a>Десерты</a></li>
            <li className="menu-list__item"><a>Молекулярная кухня</a></li>
            <li className="menu-list__item"><a>Вегетарианское меню</a></li>
            <li className="menu-list__item"><a>Банкетное меню</a></li>
            <li className="menu-list__item"><a>Винная карта</a></li>
            <li className="menu-list__item"><a>Напитки</a></li>
          </ul>

        </div>

        <div className="container--double__item">

          <div className="menu-list__pic">
            <img src={mainMenuPic}/>
          </div>

        </div>
      </div>
    </div>

  </div>
)