import React from 'react'
import DatePicker from 'react-datepicker'
import '../../../node_modules/react-datepicker/dist/react-datepicker.css'
import './input.scss'
import './input-date-picker.scss'

class InputDay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  render() {
    return (
      <div className="input-day input" >
    
        <label>Дата</label>
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChange}
        />
      
      </div>
    )
  }
}

export default InputDay


// export default ({
//   id,
//   ...rest
// }) => (
//   <div className="input-day input" >
    
//     <label htmlFor={id}>Дата</label>
//     <input id={id} type='text' {...rest} />

//   </div>
// )
