import React from 'react'
import './menu-item-page.scss'
import mainMenuPic from '../menu-page/img/main-menu.png'
import eventEmitter from '../../utils/eventEmitter'
import { Link } from 'react-router-dom'
import InlineSVG from 'svg-inline-react'
import arrowBack from '../../components/button/img/back_arrow.svg'
import Fade from 'react-reveal/Fade'

class MenuPageItem extends React.Component {
  componentDidMount() {
    eventEmitter.emit('SET_LAYOUT_THEME', '')
  }

  render() {
    return (
      <div className="menu-item-page page columns">

        <div className="background background--menu is-hidden-mobile"></div>
    
        <div className="container column is-10 is-10-mobile">
          <div className="content-holder">
            <div className="content-holder__item">
    
              <div className="menu-section-name"><h2>Горячие закуски</h2></div>
              <Fade bottom cascade>
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
              </Fade>
              <button className="bttn bttn--back">
                <InlineSVG src={arrowBack} />
                <Link to='/menu/'>Вернуться в меню</Link>
              </button>
      
            </div>
          </div>
    
          <div className="menu-pic">
            <img src={mainMenuPic}/>
          </div>
    
        </div>
      </div>
    )
  }
}

export default MenuPageItem