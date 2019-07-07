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

				{/* <LayoutWhite>
					<AboutPage />
			 	</LayoutWhite>

				<LayoutBlack>
					<AfishaPage />
			 	</LayoutBlack> */}

				<LayoutWhite>
					<MenuPage />
				</LayoutWhite>

				<LayoutWhite>
					<MenuPageItem />
				</LayoutWhite>

			</div>

		)
	}
}

export default App

{/* <Background />

<div className="columns columns--overflow">
	<div className="container column is-10">

		<Header />

		<div className="main-slide">
			
			<div className="main-slide__name">
				<h1>Ресторан высокой кухни
				<span className="primary-color"> с многолетней историей</span></h1>
			</div>

			<div className="bttn">Забронировать стол</div>
		</div>

		<Footer />

	</div>

	<div className="bttn--side"><a>Забронировать</a></div> 

</div> */}