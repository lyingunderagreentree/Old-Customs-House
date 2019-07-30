import React from 'react'
import './contact-page.scss'
import mapPic from './img/map.png'
import BookingForm from '../../components/booking-form/booking-form'
import ContactInfo from '../../components/contact-info/contact-info'
import eventEmitter from '../../utils/eventEmitter'
import Fade from 'react-reveal/Fade'

class ContactPage extends React.Component {
  componentDidMount() {
    eventEmitter.emit('SET_LAYOUT_THEME', 'layout--black')
  }

  render() {
    return (
      <div className="contact-page page columns">
        <div className="container column is-10 is-10-mobile">
          <div className="content-holder">
            <div className="content-holder__item">
              <h2 className="on-mobile">Контакты</h2>
              <Fade bottom cascad>
              <ContactInfo />

              <BookingForm />
              </Fade>
            </div>

            <div className="content-holder__item">
              
              <div className="map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1998.4364485633118!2d30.30146331586749!3d59.941492981877225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696311784b8e163%3A0xe2ecadf9273631a5!2z0KLQsNC80L7QttC10L3QvdGL0Lkg0L_QtdGALiwgMSwg0KHQsNC90LrRgi3Qn9C10YLQtdGA0LHRg9GA0LMsINCg0L7RgdGB0LjRjywgMTk5MDM0!5e0!3m2!1sru!2sge!4v1562632280164!5m2!1sru!2sge" style={{width:'100%', height:'100%'}}></iframe>
              </div>
              
            </div>

          </div>

        </div>

      </div>
    )
  }
}

export default ContactPage
