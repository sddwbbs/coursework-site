import React from 'react';
import { useLottie } from "lottie-react";
import './Content.css';
import animationData from '../../assets/web-designer-with-idea.json'; 
import firstLogo from '../../assets/smartmontools.png';

function Content({ toggle }) {

  const options = {
    animationData: animationData,
    loop: true,
  };

  const { View } = useLottie(options);

  return (
    <div className="container">
        <div className={toggle === 0 ? "content__show" : "content"}>
          <div className="content__animation"><>{View}</></div>
        </div>
        <div className={toggle === 1 ? "content__show" : "content"}>
        <img className="content__logo" src={firstLogo} width="250px" alt="firstLogo" />
        <h1 className="content__header">Smartmontools</h1>
        <p>
        Smartmontools - это набор командных инструментов для мониторинга и управления
        данными Self-Monitoring, Analysis and Reporting Technology (SMART) на ваших жестких дисках
        и твердотельных накопителях. Эти инструменты позволяют вам проверить состояние и работоспособность
        ваших накопителей и предоставляют информацию о состоянии жестких дисков и накопителей SSD.
        </p>
        </div>
        <div className={toggle === 2 ? "content__show" : "content"}>
          
        </div>
        <div className={toggle === 3 ? "content__show" : "content"}>
            
        </div>
    </div>
  );
}

export default Content;
