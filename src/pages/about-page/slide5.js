import React from 'react'
import aboutPagePic5 from './img/About_5.jpg'

export default () => (
  <div className="slide1 slide--big columns">
    <div className="container column is-10 is-10-mobile">
      <div className="content-holder">
        <div className="content-holder__item">
          <div><h2>История</h2></div>

          <div className="text-block">
            <p>Свое название ресторан получил не случайно – здание, 
              в котором он расположен, было возведено по приказу Петра I 
              для защиты таможенных грузов от частых наводнений.</p> 

            <p>В интерьере сохранена историческая кирпичная кладка стен и сводчатых потолков. 
              Но атмосфера старины в ресторане связана не только с петровской эпохой – 
              в залах можно увидеть антикварные предметы других времен: патефон, печатная машинка 
              и письменный стол начала XX века.</p>

            <p>На портретах, стилизованных под старину, изображены, 
              в том числе, почетные гости ресторана. 
              Мебель из ценных пород дерева, классическое накрытие и изящный расписной фарфор 
              создают обстановку респектабельности.</p>
          </div>
        </div>
      </div>

    </div>

    <img src={aboutPagePic5} className="background background--img" />

  </div>
)