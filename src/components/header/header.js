import React from 'react'
import './header.scss'
// import headerWhiteLogoUrl from './img/logo.png'
// import headerBlackLogoUrl from './img/logo_black.png'
import InlineSVG from 'svg-inline-react'
import Navigation from '../navigation/navigation'
import logo from './img/logo.svg'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade'

export default () => (

	<div className="header columns">

		<div className="container column is-10 is-10-mobile">
			<div className="columns flex-container">
				<div className="header__logo column is-3 is-9-mobile">
					<Link to='/'><InlineSVG src={logo} /></Link>
				</div>
				<div className="column is-12-mobile is-5">
					<Navigation />		
				</div>
			</div>
		</div>
			
	</div>

)
