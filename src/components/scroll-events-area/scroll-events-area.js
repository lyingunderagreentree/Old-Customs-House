import React from 'react'
import Hamster from 'hamsterjs'

export default class ScrollEventsArea extends React.Component {
  constructor(props) {
    super(props)
    this.scrollArea = React.createRef()
  }

  componentDidMount() {
    Hamster(this.scrollArea.current).wheel(e => {
      if (e.deltaY > 0) {
        this.props.onScrollUp(e)
      }
      if (e.deltaY < 0) {
        this.props.onScrollDown(e)
      }
    })
  }

  render() {
    return (
      <div className='scroll-events-area' ref={this.scrollArea}>
        {this.props.children}
      </div>
    )
  }
}

