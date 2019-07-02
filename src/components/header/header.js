import React from 'react'
import './header.scss'
import headerLogoUrl from './img/logo.png'
import Navigation from '../navigation/navigation'

export default () => (
	<div className="header columns">
		<div className="column is-3">
			<div className="header__logo">
				<img src={headerLogoUrl}  />
			</div>
		</div>
		<div className="column is-4">
			<Navigation />		
		</div>
	</div>
)
