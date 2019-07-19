import React from 'react'
import './header.scss'
// import headerWhiteLogoUrl from './img/logo.png'
// import headerBlackLogoUrl from './img/logo_black.png'
import InlineSVG from 'svg-inline-react'
import Navigation from '../navigation/navigation'
import logo from './img/logo.svg'
import { Link } from 'react-router-dom'

export default () => (

	<div className="header columns">

		<div className="container column is-10 is-10-mobile">

			<div className="columns space-between">
				<div className="header__logo column is-3 is-4-mobile">
					<Link to='/'><InlineSVG src={logo} /></Link>
				</div>
				<div className="column is-6-mobile is-6">
					<Navigation />		
				</div>
			</div>

		</div>
			
	</div>

)
