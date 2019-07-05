import React, { Component } from "react"
import '../styles/app.scss'
import '../styles/buttons.scss'
import Layout from './layout/layout'
import MainPage from '../pages/main-page/main-page'
import AboutPage from '../pages/about-page/about-page'

class App extends Component {

	constructor() {
		super()
	}

	render() {
		return (
			
			<div>
				
				<Layout>
					<MainPage />
			 	</Layout>

				 <Layout>
					<AboutPage />
			 	</Layout>

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