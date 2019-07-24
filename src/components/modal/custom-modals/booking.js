import React from 'react'
import ContactInfo from '../../contact-info/contact-info'
import BookingForm from '../../booking-form/booking-form'
import './booking.scss'

class BookingModal extends React.Component {

  render() {
    return (
      <div className="booking-modal">
        
        <ContactInfo />
        <BookingForm />

      </div>
    )
  }
}

export default BookingModal
  

