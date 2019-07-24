import React, { Component } from "react"
import ReactDOM from 'react-dom'
import '../styles/app.scss'
import '../styles/buttons.scss'
import { isMoment } from "moment";
import Layout from './layout/layout'
import { HashRouter as Router, Route } from 'react-router-dom'
import { AnimatedSwitch } from 'react-router-transition'
import MainPage from '../pages/main-page/main-page'
import AboutPage from '../pages/about-page/about-page'
import AfishaPage from '../pages/afisha-page/afisha-page'
import MenuPage from '../pages/menu-page/menu-page'
import MenuPageItem from '../pages/menu-item-page/menu-item-page'
import ContactPage from '../pages/contact-page/contact-page'

class App extends Component {
	
	render() {
		return (
			<React.Fragment>
				<Router>
					<Layout />

					<AnimatedSwitch
						atEnter={{ opacity: 0 }}
						atLeave={{ opacity: 0 }}
						atActive={{ opacity: 1 }}
						className="switch-wrapper"
					>
						<Route exact path="/" component={MainPage} />
						<Route path="/about/" component={AboutPage}/>
						<Route path="/afisha/" component={AfishaPage}/>
						<Route path="/menu/" component={MenuPage}/>
						<Route path="/menu-item-page/" component={MenuPageItem}/>
						<Route path="/contact/" component={ContactPage}/>
					</AnimatedSwitch>
				</Router>

			</React.Fragment>
			
		)
	}
}

export default App
