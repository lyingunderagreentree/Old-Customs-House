import React from 'react'
import './header.scss'
import headerWhiteLogoUrl from './img/logo.png'
import headerBlackLogoUrl from './img/logo_black.png'
import Navigation from '../navigation/navigation'

export default () => (

	<div className="header">

		<div className="container">

			<div className="columns space-between">
				<div className="header__logo column is-3">
					<img src={headerWhiteLogoUrl} className="header__logo header__logo--white" />
					<img src={headerBlackLogoUrl} className="header__logo header__logo--black" />
				</div>
				<div className="column is-4">
					<Navigation />		
				</div>
			</div>

		</div>
			
	</div>

)
