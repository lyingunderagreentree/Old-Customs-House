import React from 'react'
import Hamster from 'hamsterjs'

export default class ScrollEventsArea extends React.Component {
  _isMounted = false

  constructor(props) {
    super(props)
    this.scrollArea = React.createRef()
  }

  componentDidMount() {
    this._isMounted = true

    Hamster(this.scrollArea.current).wheel(e => {
      if (e.originalEvent.deltaY > 0) {
        this.props.onScrollUp(e)
      }
      else {
        this.props.onScrollDown(e)
      }
    })
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
      <div className='scroll-events-area' ref={this.scrollArea}>
        {this.props.children}
      </div>
    )
  }
}

