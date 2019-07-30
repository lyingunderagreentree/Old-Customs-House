import React from 'react'
import './menu-page.scss'
import mainMenuPic from './img/main-menu.png'
import eventEmitter from '../../utils/eventEmitter'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade'

class MenuPage extends React.Component {
  componentDidMount() {
    eventEmitter.emit('SET_LAYOUT_THEME', '')
  }

  render() {
    return (
      <div className="menu-page page columns">

        <div className="background background--menu is-hidden-mobile"></div>

        <div className="container column is-10 is-10-mobile">

          <div className="content-holder">
            <div className="content-holder__item">

              <div><h2>Меню</h2></div>
              <Fade bottom cascade>
              <ul className="menu-list">
              
                <li className="menu-list__item">
                  <Link to='/menu-item-page' className="highlighted">Горячие закуски</Link>
                  <div className="menu-pic is-hidden-mobile">
                    <img src={mainMenuPic}/>
                  </div>
                </li>
                <li className="menu-list__item">
                  <Link to='/menu-item-page' className="highlighted">Холодные закуски</Link>
                  <div className="menu-pic is-hidden-mobile">
                    <img src={mainMenuPic}/>
                  </div>
                </li>
                <li className="menu-list__item"><Link to='/menu-item-page' className="highlighted">Супы</Link></li>
                <li className="menu-list__item"><Link to='/menu-item-page' className="highlighted">Дикие морепродукты</Link></li>
                <li className="menu-list__item"><Link to='/menu-item-page' className="highlighted">Горячие рыбные блюда</Link></li>
                <li className="menu-list__item"><Link to='/menu-item-page' className="highlighted">Горячие мясные блюда</Link></li>
                <li className="menu-list__item"><Link to='/menu-item-page' className="highlighted">Гарниры</Link></li>
                <li className="menu-list__item"><Link to='/menu-item-page' className="highlighted">Десерты</Link></li>
                <li className="menu-list__item"><Link to='/menu-item-page' className="highlighted">Молекулярная кухня</Link></li>
                <li className="menu-list__item"><Link to='/menu-item-page' className="highlighted">Вегетарианское меню</Link></li>
                <li className="menu-list__item"><Link to='/menu-item-page' className="highlighted">Банкетное меню</Link></li>
                <li className="menu-list__item"><Link to='/menu-item-page' className="highlighted">Винная карта</Link></li>
                <li className="menu-list__item"><Link to='/menu-item-page' className="highlighted">Напитки</Link></li>
                
              </ul>
              </Fade>
            </div>
          </div>
          
         
          {/* <div className="menu-pic is-hidden-mobile">
            <img src={mainMenuPic}/>
          </div> */}
          
        </div>
      </div>
    )
  }
}

export default MenuPage