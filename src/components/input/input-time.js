import React from 'react'
import DatePicker from 'react-datepicker'
import '../../../node_modules/react-datepicker/dist/react-datepicker.css'
import './input.scss'
import './input-date-picker.scss'

class InputTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date()
    };
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  render() {
    return (
      <div className="input-time input" >
    
        <label>Время</label>
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChange}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={60}
          timeFormat="HH:mm"
          dateFormat="HH:mm"
          timeCaption="Time"
          calendarClassName="time-picker"
        />
      
      </div>
    )
  }
}

export default InputTime

// export default ({
//   id,
//   ...rest
// }) => (
//   <div className="input-time input">
    
//     <label htmlFor={id}>Время</label>
//     <input id={id} type='text' {...rest} />

//   </div>
// )