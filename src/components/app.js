import React, { Component } from "react"
import '../styles/app.scss'
import '../styles/buttons.scss'
import LayoutWhite from './layout/layout-white'
import LayoutBlack from './layout/layout-black'
import MainPage from '../pages/main-page/main-page'
import AboutPage from '../pages/about-page/about-page'
import AfishaPage from '../pages/afisha-page/afisha-page'
import MenuPage from '../pages/menu-page/menu-page'
import MenuPageItem from '../pages/menu-page/menu-page-item'
import ContactPage from '../pages/contact-page/contact-page'

class App extends Component {

	constructor() {
		super()
	}

	render() {
		return (
			
			<div>
				
				<LayoutWhite>
					<MainPage />
			 	</LayoutWhite>

				<LayoutWhite>
					<AboutPage />
			 	</LayoutWhite>

				<LayoutBlack>
					<AfishaPage />
			 	</LayoutBlack> 

				<LayoutWhite>
					<MenuPage />
				</LayoutWhite>

				<LayoutWhite>
					<MenuPageItem />
				</LayoutWhite>

				<LayoutBlack>
					<ContactPage />
				</LayoutBlack>

			</div>

		)
	}
}

export default App
