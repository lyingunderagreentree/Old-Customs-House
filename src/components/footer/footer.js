import React from 'react'
import './footer.scss'
import SocialButtons from '../social-buttons/social-buttons'
import LanguageSwitch from '../language-switch/language-switch'

export default() => (
  <div className="footer">

    <div className="container container--footer">  
      <SocialButtons />

      <LanguageSwitch />
    </div>

  </div>
)