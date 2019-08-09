import React from 'react'
import './main-page.scss'
import eventEmitter from '../../utils/eventEmitter'
// import BackgroundVideo from '../../components/background-video/background-video'
import BookingModal from '../../components/modal/custom-modals/booking'
import Modal from '../../components/modal/modal'
import InlineSVG from 'svg-inline-react'
import logo from '../../components/header/img/logo.svg'
import { Link } from 'react-router-dom'
import Div100vh from 'react-div-100vh'
import Layout from '../../components/layout/layout'
import FinishOrderMessage from '../../components/modal/custom-modals/finish-order'

class MainPage extends React.Component {

  modalProps = {
    triggerText: "Забронировать стол"
  }

  modalContent = (
    <BookingModal />
    // <FinishOrderMessage />
  )

  componentDidMount() {
    eventEmitter.emit('SET_LAYOUT_THEME', '')
  }

  render() {
    return (
       
      <Div100vh className="main-page page columns">   
        <Layout>

          <div className="background background--main"></div>
          
          <div className="container column is-10 is-10-mobile">
            <div className="logo-mobile"><Link to='/'><InlineSVG src={logo} /></Link></div>

            <div className="main-page__name">
              <h1>Ресторан <br />высокой кухни
                <span className="primary-color"> с многолетней историей</span>
              </h1>
            </div>

            <p className="main-page__p">— since 1996 —</p>

            <Modal modalProps={this.modalProps} modalContent={this.modalContent} />
            
          </div>
      
          {/* <BackgroundVideo /> */}

        </Layout>
      </Div100vh>
    )
  }
}

export default MainPage

  