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
			// <Layout>
			// 	<Slide />
			// </Layout>			
			
			<div>
				
				<Background />

				<div className="container is-10 is-center">

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

				<div className="bttn--side">Забронировать</div> 

			</div>
		)
	}
}

export default App

