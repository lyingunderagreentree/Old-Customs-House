import React from 'react'
import ReactDOM from 'react-dom'
import Modal from 'react-modal'
import ContactInfo from '../../contact-info/contact-info'
import BookingForm from '../../booking-form/booking-form'
import './booking.scss'

class BookingModal extends React.Component {

  render() {
    return (
      <div className="booking-modal">
        
        {/* <Modal
          isOpen={true} 
          style={{ overlay: {}, content: {} }} 
          center  
          className="booking-pop-up__content"
        > */}
          <ContactInfo />
          <BookingForm />

        

      </div>
    )
  }
}

export default BookingModal
  

