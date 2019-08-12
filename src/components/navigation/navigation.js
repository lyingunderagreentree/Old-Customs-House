import React from 'react'
import { Link } from 'react-router-dom'
import { slide as Menu } from 'react-burger-menu'
import './navigation.scss'
import InlineSVG from 'svg-inline-react'
import burgerIcon from './img/Burger_menu.svg'
import SocialButtons from '../social-buttons/social-buttons'

class Navigation extends React.Component {
  showSettings (event) {
    event.preventDefault()
  }

  constructor (props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }

  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})  
    window.setTimeout(() => { 
      if (state.isOpen) {
        document.activeElement.blur()
      }
    })
  }
  closeMenu () {
    this.setState({menuOpen: false})
  }
  toggleMenu () {
    this.setState(state => ({menuOpen: !state.menuOpen}))
  }
  
  render() {
    return (
      <React.Fragment>
        <ul className="navigation is-hidden-mobile">
          <li className="navigation__item"><Link to='/about' className="highlighted">о ресторане</Link></li>
          <li className="navigation__item"><Link to='/afisha' className="highlighted">афиша</Link></li>
          <li className="navigation__item"><Link to='/menu' className="highlighted">меню</Link></li>
          <li className="navigation__item"><Link to='/contact' className="highlighted">контакты</Link></li>
        </ul>

        <Menu className="mobile" width={'100%'} isOpen={this.state.menuOpen}
          onStateChange={(state) => this.handleStateChange(state)} right 
          customBurgerIcon={ <InlineSVG src={ burgerIcon} /> }>
          <Link to='/' className="menu-item" onClick={() => this.closeMenu()}>главная</Link>
          <Link to='/about' className="menu-item" onClick={() => this.closeMenu()}>о ресторане</Link>
          <Link to='/afisha' className="menu-item" onClick={() => this.closeMenu()}>афиша</Link>
          <Link to='/menu' className="menu-item" onClick={() => this.closeMenu()}>меню</Link>
          <Link to='/contact' className="menu-item" onClick={() => this.closeMenu()}>контакты</Link>

          <SocialButtons />
        </Menu>

      </React.Fragment>
    )
  }
}


export default Navigation