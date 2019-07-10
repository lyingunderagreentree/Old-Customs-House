import React from 'react'
import './header.scss'
// import headerWhiteLogoUrl from './img/logo.png'
// import headerBlackLogoUrl from './img/logo_black.png'
import InlineSVG from 'svg-inline-react'
import Navigation from '../navigation/navigation'
import logo from './img/logo.svg'

export default () => (

	<div className="header">

		<div className="container">

			<div className="columns space-between">
				<div className="header__logo column is-3">
					<InlineSVG src={logo} />
				</div>
				<div className="column is-4">
					<Navigation />		
				</div>
			</div>

		</div>
			
	</div>

)
