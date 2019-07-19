import React from 'react'
import './main-page.scss'
import eventEmitter from '../../utils/eventEmitter'
// import BackgroundVideo from '../../components/background-video/background-video'
import BookingModal from '../../components/modal/custom-modals/booking'
import Modal from '../../components/modal/modal'

class MainPage extends React.Component {

  modalProps = {
    triggerText: "Забронировать стол"
  }

  modalContent = (
    <BookingModal />
  )

  componentDidMount() {
    eventEmitter.emit('SET_LAYOUT_THEME', '')
  }

  render() {
    return (
      <div className="main-page page columns">      
        <div className="background background--main"></div>

        <div className="container column is-10 is-10-mobile">

          <div className="main-page__name">
            <h1>Ресторан <br />высокой кухни
              <span className="primary-color"> с многолетней историей</span>
            </h1>
          </div>

          <Modal modalProps={this.modalProps} modalContent={this.modalContent} />
          
        </div>

        {/* <BackgroundVideo /> */}

      </div>
    )
  }
}

export default MainPage

  