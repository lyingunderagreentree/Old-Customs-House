import React from 'react'
import './footer.scss'
import SocialButtons from '../social-buttons/social-buttons'
import LanguageSwitch from '../language-switch/language-switch'
import Fade from 'react-reveal/Fade'

export default() => (
  <div className="footer columns">
    <div className="container container--footer column is-10 is-10-mobile">  
      <SocialButtons />

      <LanguageSwitch />
    </div>
  </div>
)