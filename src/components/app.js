import React, { Component } from "react"
import '../styles/app.scss'
import '../styles/home.scss'
import '../styles/buttons.scss'
import Header from './header/header'
import Background from './background/background'
import Footer from './footer/footer'

class App extends Component {

	constructor() {
		super()
	}

	render() {
		return (

			// <PageSlider>

			// 	<Layout>
			// 		<AboutPage />
			// 	</Layout>

			// 	<Layout>
			// 		<AfishaPage />
			// 	</Layout>

			// </PageSlider>
						
			
			<div>
				
				<Background />

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

				</div>
			</div>
		)
	}
}

export default App

