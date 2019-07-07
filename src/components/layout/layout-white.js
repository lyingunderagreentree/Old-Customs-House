import React from 'react'
import './layout.scss'
import Header from '../header/header'
import Footer from '../footer/footer'

export default ({children}) => (
  <div className="layout-white"> 

    <div className="min-height">
      <Header />
      {children}
      <Footer />

      <div className="bttn--side"><a>Забронировать</a></div>  
    </div>

    

  </div>
)


