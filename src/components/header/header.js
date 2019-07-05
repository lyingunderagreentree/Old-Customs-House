import React from 'react'
import './header.scss'
import headerLogoUrl from './img/logo.png'
import Navigation from '../navigation/navigation'

export default () => (

	<div className="header">

		<div className="container">

			<div className="columns space-between">
				<div className="header__logo column is-3">
					<img src={headerLogoUrl} />
				</div>
				<div className="column is-4">
					<Navigation />		
				</div>
			</div>

		</div>
			
	</div>

)
