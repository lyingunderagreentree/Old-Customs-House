import React, { Component } from "react"
import '../styles/app.scss'
import '../styles/buttons.scss'
import Layout from './layout/layout'
import MainSlider from './main-slider/main-slider'

class App extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			
			<div>
				<Layout />
				<MainSlider />
			</div>

		)
	}
}

export default App
