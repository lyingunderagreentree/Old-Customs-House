import React from 'react'
import './header.scss'
import InlineSVG from 'svg-inline-react'
import Navigation from '../navigation/navigation'
import logo from './img/logo.svg'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade'
import LanguageSwitch from '../language-switch/language-switch'

export default () => (

	<div className="header columns">

		<div className="container column is-10 is-10-mobile">
			<div className="columns flex-container">
				<div className="header__logo column is-3 is-9-mobile">
					<Link to='/'><InlineSVG src={logo} /></Link>
				</div>
				<LanguageSwitch />
				<div className="header__nav column is-5 is-6-tablet">
					<Navigation />		
				</div>
			</div>
		</div>
			
	</div>

)
