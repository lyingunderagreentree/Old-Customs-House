import React from 'react'
import './layout.scss'
import Header from '../header/header'
import Footer from '../footer/footer'
import eventEmitter from '../../utils/eventEmitter'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentTheme: ''
    }
  }

  componentDidMount() {
    eventEmitter.on('CHANGE_LAYOUT_THEME', theme => {
      this.setState({
        currentTheme: theme
      })
    })
  }

  render() {
    return (
      <div className={`layout ${this.state.currentTheme}`}> 
        <div className="min-height">
          <Header />
          {this.props.children}
          <Footer />
          <div className="bttn--side"><a>Забронировать</a></div>  
        </div>
      </div>
    )
  }
}
