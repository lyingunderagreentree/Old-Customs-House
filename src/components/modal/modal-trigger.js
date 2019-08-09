import React from 'react'

class ModalTrigger extends React.Component {
  
  render() {
    return (
      <button
        ref={this.props.buttonRef}
        onClick={this.props.showModal}
        className="modal-button bttn"
      >
        {this.props.triggerText}
      </button>
    )
  }
}

export default ModalTrigger