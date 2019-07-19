import React from 'react'
// import videoURL from './video-intro.mp4'
import './background-video.scss'

class BackgroundVideo extends React.Component {
  constructor (props) {
    super(props);

    // this.state = {
    //   videoURL: './video-intro.mp4'
    // }
  }

  render () {
    return (
      <div className="background-video">
        <video loop autoPlay>
          <source src={videoURL} type="video/mp4" />
        </video>
      </div>
    )
  }
}

export default BackgroundVideo