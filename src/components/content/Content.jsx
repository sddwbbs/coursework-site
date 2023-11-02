import React from 'react';
import { useLottie } from "lottie-react";
import './Content.css';
import animationData from '../../assets/web-designer-with-idea.json'; 

import firstLogo from '../../assets/smartmontools.png';
import secondLogo from '../../assets/internal-hard-disk-drive.png';
import thierdLogo from '../../assets/reload-drive.png';

import smartmontools_1_img from '../../assets/smartmontools/1.png'
import smartmontools_2_img from '../../assets/smartmontools/2.png'
import smartmontools_3_img from '../../assets/smartmontools/3.png'
import smartmontools_4_img from '../../assets/smartmontools/4.png'
import smartmontools_5_img from '../../assets/smartmontools/5.png'

import gsmartcontrol_1_img from '../../assets/gsmartcontrol/1.png'
import gsmartcontrol_2_img from '../../assets/gsmartcontrol/2.png'
import gsmartcontrol_3_img from '../../assets/gsmartcontrol/3.png'

import hddtemp_1_img from '../../assets/hddtemp/1.png'

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
        <p style={{ marginBottom: "20px"}}>
        Smartmontools - это набор командных инструментов для мониторинга и управления
        данными Self-Monitoring, Analysis and Reporting Technology (SMART) на ваших жестких дисках
        и твердотельных накопителях. Эти инструменты позволяют вам проверить состояние и работоспособность
        ваших накопителей и предоставляют информацию о состоянии жестких дисков и накопителей SSD.
        </p>
        <p style={{ marginBottom: "10px", fontWeight: "600", fontSize: "21px"}}> 
        Чтение атрибутов S.M.A.R.T. вашего жёсткого диска:
        </p>
        <img className="content__img" src={smartmontools_1_img} width="550px" alt="Img" />
        <p style={{ marginBottom: "20px"}}>Результат выполнения smartctl для вашего NVMe SSD показывает следующую информацию:</p>
        <ul style={{ marginBottom: "20px"}}>
          <li>1. Модель диска: 311CD0512GB</li>
          <li>2. Серийный номер: 511210909081013040</li>
          <li>3. Версия прошивки: EDFOB0.6</li>
          <li>4. Общая емкость: 512 GB</li>
          <li>5. Версия NVMe: 1.3</li>
          <li>6. Количество пространств имен: 1</li>
          <li>7. Самодиагностика S.M.A.R.T.: "PASSED" (диск находится в хорошем состоянии).</li>
          <li>8. Текущая температура: 30 Celsius</li>
          <li>9. Состояние зарезервированной емкости: 100%</li>
          <li>10. Процент использования: 1%</li>
          <li>11. Общее количество прочитанных и записанных данных.</li>
          <li>12. Время работы диска: 2,601 часов.</li>
          <li>13. Количество аварийных отключений: 20.</li>
          <li>14. Состояние контроллера, такие как температура и поддерживаемые энергосостояния.</li>
        </ul>
        <p style={{ marginBottom: "20px"}}>Общий результат самодиагностики S.M.A.R.T. - "PASSED", что указывает на то, что диск находится в надежном состоянии. Температура также находится в пределах нормы.</p>
        <p style={{ marginBottom: "10px", fontWeight: "600", fontSize: "21px"}}>Запуск краткого самодиагностического теста:</p>
        <img className="content__img" src={smartmontools_2_img} width="550px" alt="Img" />
        <p style={{ marginBottom: "20px"}}>
        Команда smartctl -t short /dev/nvme0n1 предполагает запуск краткого самодиагностического теста 
        на вашем NVMe SSD. Ошибка "Invalid Field in Command (0x2002)" может возникнуть по разным причинам, 
        и она обычно означает, что этот конкретный тип теста не поддерживается для вашего SSD или недоступен.
        NVMe SSDs могут иметь разную поддержку функциональности S.M.A.R.T. и типов тестов. Некоторые модели
        могут не поддерживать краткий самодиагностический тест. В большинстве случаев это не проблема, 
        так как основная цель S.M.A.R.T. - предупреждение о проблемах с диском и мониторинг его состояния. 
        Вы уже проверили общее состояние вашего диска с помощью smartctl -a /dev/nvme0n1, и он показал 
        "PASSED", что означает, что ваш диск в целом находится в хорошем состоянии.
        </p>
        <p style={{ marginBottom: "10px", fontWeight: "600", fontSize: "21px"}}>Отображение журнала самодиагностики:</p>
        <img className="content__img" src={smartmontools_3_img} width="550px" alt="Img" />
        <p style={{ marginBottom: "20px"}}>
        Команда smartctl -l selftest /dev/nvme0n1 также вызывает ошибку "Invalid Field in Command (0x2002)". 
        Это может означать, что ваш NVMe SSD не поддерживает чтение журнала самодиагностики через smartctl.
        </p>
        <p style={{ marginBottom: "20px"}}>
        В этом случае, несмотря на отсутствие возможности просматривать журнал самодиагностики через smartctl,
        вы все равно можете мониторить состояние вашего диска с
        помощью общей информации, предоставленной командой smartctl -a /dev/nvme0n1
        </p>
        <p style={{ marginBottom: "10px", fontWeight: "600", fontSize: "21px"}}>Создание отчёта:</p>
        <img className="content__img" src={smartmontools_4_img} width="550px" alt="Img" />
        <p style={{ marginBottom: "20px"}}>
        Данная команда выполняет чтение информации S.M.A.R.T. с вашего NVMe SSD
        с использованием smartctl и записывает эту информацию в файл smart_report.txt, 
        что позволяет вам сохранить результаты для последующего анализа и мониторинга состояния вашего диска.
        </p>
        </div>
        <div className={toggle === 2 ? "content__show" : "content"}>
          <img className="content__logo" src={secondLogo} width="250px" alt="secondLogo" />
          <h1 className="content__header">GSmartControl</h1>
          <p style={{ marginBottom: "20px"}}>
          GSmartControl - это утилита для мониторинга и анализа состояния жестких дисков.
          Она предоставляет информацию о здоровье и производительности вашего жесткого диска
          и может помочь выявить проблемы, связанные с жестким диском. Вот пример использования GSmartControl в Manjaro Linux:
          </p>
          <p style={{ marginBottom: "20px"}}>
          После запуска GSmartControl вы увидите главное окно программы. В этом окне вы увидите список доступных жестких дисков, подключенных к вашей системе.
          </p>  
          <img className="content__img" src={gsmartcontrol_1_img} width="550px" alt="Img" />
          <p style={{ marginBottom: "20px"}}>
          Выберите жесткий диск, который вы хотите проанализировать, 
          щелкнув на нем левой кнопкой мыши. GSmartControl отображает атрибуты SMART
          (Self-Monitoring, Analysis, and Reporting Technology) вашего жесткого диска. Эти
          атрибуты предоставляют информацию о состоянии жесткого диска, такую как температура, количество
          обнаруженных ошибок и другие параметры. Вы можете анализировать эти атрибуты, чтобы определить,
          насколько здоров ваш жесткий диск. Для проверки 
          состояния жесткого диска можно выполнить самотестирование, двойное нажатие ЛКМ на диск:
          </p>  
          <img className="content__img" src={gsmartcontrol_2_img} width="550px" alt="Img" />
          <p style={{ marginBottom: "20px"}}>
          GSmartControl также предоставляет журнал самотестирования и событий, которые могут содержать информацию 
          о предыдущих проблемах с жестким диском.
          Вы можете просмотреть журналы, чтобы получить дополнительные сведения о состоянии вашего диска:
          </p>  
          <img className="content__img" src={gsmartcontrol_3_img} width="800px" alt="Img" />
        </div>
        <div className={toggle === 3 ? "content__show" : "content"}>
          <img className="content__logo" src={thierdLogo} width="250px" alt="thierdLogo" />
          <h1 className="content__header">HDDTemp</h1>
          <p style={{ marginBottom: "20px"}}>
          hddtemp - это утилита для мониторинга температуры жестких дисков в Linux.
          Она позволяет вам проверить текущую температуру ваших жестких дисков.
          Вот пример использования hddtemp в Manjaro Linux с описанием:
          </p>  
          <img className="content__img" src={hddtemp_1_img} width="550px" alt="Img" />
          <p style={{ marginBottom: "20px"}}>
          Ошибка, которую вы видите, связана с тем,
          что hddtemp не может определить тип шины для вашего NVMe SSD, или этот тип шины неизвестен.
          hddtemp предназначен для мониторинга температуры жестких дисков,
          подключенных по стандартной шине SATA или IDE, и не поддерживает NVMe SSD.
          </p>  
        </div>
    </div>
  );
}

export default Content;
