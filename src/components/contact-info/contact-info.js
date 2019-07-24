import React from 'react'
import './contact-info.scss'
import InlineSVG from 'svg-inline-react'
import place from './img/place.svg'
import clock from './img/clock.svg'
import phone from './img/phone.svg'
import mail from './img/mail.svg'
import qoute from './img/quote.svg'

export default () => (
  <div className="contact-info">
    
    <span className="contact-info__quote is-hidden-mobile">
      Мир меняется, Старая Таможня <span className="primary-color">остается прежней!</span>
      <InlineSVG className="contact-info__quote-icon" src={qoute} />
    </span>
    <p className="contact-info__p is-hidden-mobile">С 1996 года ресторан бережно хранит свои лучшие традиции. 
      Вы можете забронировать стол по телефону или заполнив форму ниже
    </p>

    <ul className="contact-info__address"> 
      <li><InlineSVG src={place} />Санкт-Петербург, Таможенный переулок, 1</li>
      <li><InlineSVG src={clock} />Ежедневно 13:00 - 23:00</li>
      <li><InlineSVG src={phone} />+7 (821) 327 89 80</li>
      <li><InlineSVG src={mail} />custom@cocncord-catering</li>
    </ul>

    <div className="contact-info__mobile">
      <p>Таможенный переулок, 1</p>
      <p>+7 (821) 327 89 80</p>
    </div>

  </div>
)