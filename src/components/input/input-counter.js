import React from 'react'
import './input.scss'
import CounterInput from 'react-counter-input'

class InputCounter extends React.Component {
  render() {
    return (
      <div className="input-counter input">

        <label>Гости</label>
        <CounterInput
          min={0}
          max={15}
          onCountChange={count => console.log(count)}
          wrapperStyle={{
            width: '100%', 
            justifyContent: 'space-around',     
            border: '1px solid #d3d3d3',
            borderRadius: '2px',
            color: '#707070',
            font: '1rem $muller',
            padding: '15px',
            height: '100%',
            outline: 'none',
            zIndex: '1',
            fontSize: '12px'
          }}
          inputStyle={{
            marginBottom: '0px'
          }}
        />

      </div>
    );
  }
}

export default InputCounter