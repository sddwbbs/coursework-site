import React from 'react'
import { useLottie } from "lottie-react"
import './Content.css'
import animationData from '../../assets/web-designer-with-idea.json'

import firstLogo from '../../assets/smartmontools.png'
import secondLogo from '../../assets/internal-hard-disk-drive.png'
import thierdLogo from '../../assets/reload-drive.png'
import fourthLogo from '../../assets/file-roller.png'
import fifthLogo from '../../assets/7z.png'

import smartmontools_1_img from '../../assets/smartmontools/1.png'
import smartmontools_2_img from '../../assets/smartmontools/2.png'
import smartmontools_3_img from '../../assets/smartmontools/3.png'
import smartmontools_4_img from '../../assets/smartmontools/4.png'
import smartmontools_5_img from '../../assets/smartmontools/5.png'
import smartmontools_6_img from '../../assets/smartmontools/6.png'
import smartmontools_7_img from '../../assets/smartmontools/7.png'
import smartmontools_e1_img from '../../assets/smartmontools/e1.png'
import smartmontools_e2_img from '../../assets/smartmontools/e2.png'
import smartmontools_e3_img from '../../assets/smartmontools/e3.png'
import smartmontools_screen from '../../assets/smartmontools/screen_with_date.png'

import gsmartcontrol_1_img from '../../assets/gsmartcontrol/1.png'
import gsmartcontrol_2_img from '../../assets/gsmartcontrol/2.png'
import gsmartcontrol_3_img from '../../assets/gsmartcontrol/3.png'
import gsmartcontrol_e1_img from '../../assets/gsmartcontrol/e1.png'
import gsmartcontrol_e2_img from '../../assets/gsmartcontrol/e2.png'
import gsmartcontrol_screen from '../../assets/gsmartcontrol/screen_with_date.png'

import hddtemp_1_img from '../../assets/hddtemp/1.png'
import hddtemp_screen from '../../assets/hddtemp/screen_with_date.png'

import fileroller_1_img from '../../assets/file-roller/. (1).png'
import fileroller_2_img from '../../assets/file-roller/. (2).png'
import fileroller_3_img from '../../assets/file-roller/. (3).png'
import fileroller_4_img from '../../assets/file-roller/. (4).png'
import fileroller_5_img from '../../assets/file-roller/. (5).png'
import fileroller_6_img from '../../assets/file-roller/. (6).png'
import fileroller_7_img from '../../assets/file-roller/. (7).png'
import fileroller_8_img from '../../assets/file-roller/. (8).png'
import fileroller_9_img from '../../assets/file-roller/. (9).png'
import fileroller_10_img from '../../assets/file-roller/. (10).png'
import fileroller_11_img from '../../assets/file-roller/. (11).png'
import fileroller_12_img from '../../assets/file-roller/. (12).png'
import fileroller_13_img from '../../assets/file-roller/. (13).png'
import fileroller_14_img from '../../assets/file-roller/. (14).png'
import fileroller_15_img from '../../assets/file-roller/. (15).png'
import fileroller_16_img from '../../assets/file-roller/. (16).png'
import fileroller_17_img from '../../assets/file-roller/. (17).png'
import fileroller_18_img from '../../assets/file-roller/. (18).png'
import fileroller_19_img from '../../assets/file-roller/. (19).png'
import fileroller_20_img from '../../assets/file-roller/. (20).png'
import fileroller_21_img from '../../assets/file-roller/. (21).png'
import fileroller_22_img from '../../assets/file-roller/. (22).png'
import fileroller_23_img from '../../assets/file-roller/. (23).png'
import fileroller_24_img from '../../assets/file-roller/. (24).png'
import fileroller_25_img from '../../assets/file-roller/. (25).png'
import fileroller_26_img from '../../assets/file-roller/. (26).png'
import fileroller_27_img from '../../assets/file-roller/. (27).png'
import fileroller_28_img from '../../assets/file-roller/. (28).png'
import fileroller_29_img from '../../assets/file-roller/. (29).png'
import fileroller_30_img from '../../assets/file-roller/. (30).png'
import fileroller_31_img from '../../assets/file-roller/. (31).png'
import fileroller_32_img from '../../assets/file-roller/. (32).png'
import fileroller_33_img from '../../assets/file-roller/. (33).png'
import fileroller_34_img from '../../assets/file-roller/. (34).png'
import fileroller_35_img from '../../assets/file-roller/. (35).png'
import fileroller_36_img from '../../assets/file-roller/. (36).png'
import fileroller_screen from '../../assets/file-roller/screen_with_date.png'
import fileroller_e1_img from '../../assets/file-roller/experiments/. (1).png'
import fileroller_e2_img from '../../assets/file-roller/experiments/. (2).png'
import fileroller_e3_img from '../../assets/file-roller/experiments/. (3).png'
import fileroller_e4_img from '../../assets/file-roller/experiments/. (4).png'
import fileroller_e5_img from '../../assets/file-roller/experiments/. (5).png'
import fileroller_e6_img from '../../assets/file-roller/experiments/. (6).png'
import fileroller_e7_img from '../../assets/file-roller/experiments/. (7).png'
import fileroller_e8_img from '../../assets/file-roller/experiments/. (8).png'
import fileroller_e9_img from '../../assets/file-roller/experiments/. (9).png'
import fileroller_e10_img from '../../assets/file-roller/experiments/. (10).png'
import fileroller_e11_img from '../../assets/file-roller/experiments/. (11).png'



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
        <p style={{ marginBottom: "10px", color: "#A0F9D3", fontSize: "17px"}}>
        Производитель: 
        <span style={{ color: "#DFF7ED"}}> Cообщество разработчиков. Проект является открытым исходным кодом.</span>
        </p>
        <p style={{color: "#A0F9D3", fontSize: "17px"}}>
        Сайт: 
        <a style={{ color: "#DFF7ED" }} href="https://www.smartmontools.org" target="_blank" rel="noopener noreferrer"> smartmontools.org</a>
        </p>  
        <div class="content__separator">
            <hr />
            <span class="separator-text">Основные пункты</span>
        </div>
        <p className="content__text">
        Smartmontools - это набор командных инструментов для мониторинга и управления
        данными Self-Monitoring, Analysis and Reporting Technology (SMART) на ваших жестких дисках
        и твердотельных накопителях. Эти инструменты позволяют вам проверить состояние и работоспособность
        ваших накопителей и предоставляют информацию о состоянии жестких дисков и накопителей SSD.
        </p>
        <p className="content__header__2"> 
        Образ экрана
        </p>
        <img className="content__img" src={smartmontools_screen} width="900px" alt="Img" />
        <p className="content__header__2"> 
        Чтение атрибутов S.M.A.R.T. вашего жёсткого диска
        </p>
        <img className="content__img" src={smartmontools_1_img} width="550px" alt="Img" />
        <p className="content__text">Результат выполнения smartctl для вашего NVMe SSD показывает следующую информацию:</p>
        <ul style={{ marginBottom: "20px", marginLeft: "50px"}}>
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
        <p className="content__text">Общий результат самодиагностики S.M.A.R.T. - "PASSED", что указывает на то, что диск находится в надежном состоянии. Температура также находится в пределах нормы.</p>
        <p className="content__header__2">Запуск краткого самодиагностического теста</p>
        <img className="content__img" src={smartmontools_2_img} width="550px" alt="Img" />
        <p className="content__text">
        Команда smartctl -t short /dev/nvme0n1 предполагает запуск краткого самодиагностического теста 
        на вашем NVMe SSD. Ошибка "Invalid Field in Command (0x2002)" может возникнуть по разным причинам, 
        и она обычно означает, что этот конкретный тип теста не поддерживается для вашего SSD или недоступен.
        NVMe SSDs могут иметь разную поддержку функциональности S.M.A.R.T. и типов тестов. Некоторые модели
        могут не поддерживать краткий самодиагностический тест. В большинстве случаев это не проблема, 
        так как основная цель S.M.A.R.T. - предупреждение о проблемах с диском и мониторинг его состояния. 
        Вы уже проверили общее состояние вашего диска с помощью smartctl -a /dev/nvme0n1, и он показал 
        "PASSED", что означает, что ваш диск в целом находится в хорошем состоянии.
        </p>
        <p className="content__header__2">Отображение журнала самодиагностики</p>
        <img className="content__img" src={smartmontools_3_img} width="550px" alt="Img" />
        <p className="content__text">
        Команда smartctl -l selftest /dev/nvme0n1 также вызывает ошибку "Invalid Field in Command (0x2002)". 
        Это может означать, что ваш NVMe SSD не поддерживает чтение журнала самодиагностики через smartctl.
        </p>
        <p className="content__text">
        В этом случае, несмотря на отсутствие возможности просматривать журнал самодиагностики через smartctl,
        вы все равно можете мониторить состояние вашего диска с
        помощью общей информации, предоставленной командой smartctl -a /dev/nvme0n1
        </p>
        <p className="content__header__2">Создание отчёта</p>
        <img className="content__img" src={smartmontools_6_img} width="600px" alt="Img" />
        <img className="content__img" src={smartmontools_7_img} width="600px" alt="Img" />
        <p className="content__text">
        Данная команда выполняет чтение информации S.M.A.R.T. с вашего NVMe SSD
        с использованием smartctl и записывает эту информацию в файл smart_report.txt, 
        что позволяет вам сохранить результаты для последующего анализа и мониторинга состояния вашего диска.
        </p>
        <div class="content__separator">
            <hr />
            <span class="separator-text">Эксперименты</span>
        </div>
        <p className="content__header__2">Планирование тестов</p>
        <img className="content__img" src={smartmontools_e1_img} width="600px" alt="Img" />
        <p className="content__text">
        Вы можете запланировать тесты для выполнения в будущем.
        Например, для планирования долгого теста каждые день нужно использовать комманду со скриншота выше.
        </p>
        <p className="content__header__2">Использование скриптов</p>
        <img className="content__img" src={smartmontools_e2_img} width="600px" alt="Img" />
        <img className="content__img" src={smartmontools_e3_img} width="600px" alt="Img" />
        <p className="content__text">
        Вы можете написать собственные скрипты для автоматизации мониторинга.
        Например, проверка статуса всех дисков.
        </p>
        </div>

        <div className={toggle === 2 ? "content__show" : "content"}>
          <img className="content__logo" src={secondLogo} width="250px" alt="secondLogo" />
          <h1 className="content__header">GSmartControl</h1>
          <p style={{ marginBottom: "10px", color: "#A0F9D3", fontSize: "17px"}}>
          Производитель: 
          <span style={{ color: "#DFF7ED"}}> Cообщество разработчиков. Проект является открытым исходным кодом.</span>
          </p>
          <p style={{color: "#A0F9D3", fontSize: "17px"}}>
          Сайт: 
          <a style={{ color: "#DFF7ED" }} href="https://gsmartcontrol.shaduri.dev" target="_blank" rel="noopener noreferrer"> gsmartcontrol.shaduri.dev</a>
          </p>  
          <div class="content__separator">
            <hr />
            <span class="separator-text">Основные пункты</span>
          </div>
          <p className="content__text">
          GSmartControl - это утилита для мониторинга и анализа состояния жестких дисков.
          Она предоставляет информацию о здоровье и производительности вашего жесткого диска
          и может помочь выявить проблемы, связанные с жестким диском. Вот пример использования GSmartControl в Manjaro Linux:
          </p>
          <p className="content__header__2"> 
          Образ экрана
          </p>
          <img className="content__img" src={gsmartcontrol_screen} width="900px" alt="Img" />
          <p className="content__header__2"> 
          Использование программы
          </p>
          <p className="content__text">
          После запуска GSmartControl вы увидите главное окно программы. В этом окне вы увидите список доступных жестких дисков, подключенных к вашей системе.
          </p>  
          <img className="content__img" src={gsmartcontrol_1_img} width="550px" alt="Img" />
          <p className="content__text">
          Выберите жесткий диск, который вы хотите проанализировать, 
          щелкнув на нем левой кнопкой мыши. GSmartControl отображает атрибуты SMART
          (Self-Monitoring, Analysis, and Reporting Technology) вашего жесткого диска. Эти
          атрибуты предоставляют информацию о состоянии жесткого диска, такую как температура, количество
          обнаруженных ошибок и другие параметры. Вы можете анализировать эти атрибуты, чтобы определить,
          насколько здоров ваш жесткий диск. Для проверки 
          состояния жесткого диска можно выполнить самотестирование, двойное нажатие ЛКМ на диск:
          </p>  
          <img className="content__img" src={gsmartcontrol_2_img} width="550px" alt="Img" />
          <p className="content__text">
          GSmartControl также предоставляет журнал самотестирования и событий, которые могут содержать информацию 
          о предыдущих проблемах с жестким диском.
          Вы можете просмотреть журналы, чтобы получить дополнительные сведения о состоянии вашего диска.
          </p>  
          <img className="content__img" src={gsmartcontrol_3_img} width="800px" alt="Img" />
          <div class="content__separator">
            <hr />
            <span class="separator-text">Эксперименты</span>
          </div>
          <p className="content__header__2">Изменение общих настроек</p>
          <img className="content__img" src={gsmartcontrol_e1_img} width="500px" alt="Img" />
          <p className="content__text">
          Вы можете изменять общие настройки.
          </p>  
          <p className="content__header__2">Изменение настроек диска</p>
          <img className="content__img" src={gsmartcontrol_e2_img} width="500px" alt="Img" />
          <p className="content__text">
          Вы можете изменять настройки дисков.
          </p>  
        </div>

        <div className={toggle === 3 ? "content__show" : "content"}>
          <img className="content__logo" src={thierdLogo} width="250px" alt="thierdLogo" />
          <h1 className="content__header">HDDTemp</h1>
          <p style={{ marginBottom: "10px", color: "#A0F9D3", fontSize: "17px"}}>
          Производитель: 
          <span style={{ color: "#DFF7ED"}}> Cообщество разработчиков. Проект является открытым исходным кодом.</span>
          </p>
          <p style={{color: "#A0F9D3", fontSize: "17px"}}>
          Сайт: 
          <a style={{ color: "#DFF7ED" }} href="https://wiki.archlinux.org/title/Hddtemp" target="_blank" rel="noopener noreferrer"> wiki.archlinux.org/title/Hddtemp</a>
          </p>  
          <div class="content__separator">
            <hr />
            <span class="separator-text">Основные пункты</span>
          </div>
          <p className="content__text">
          hddtemp - это утилита для мониторинга температуры жестких дисков в Linux.
          Она позволяет вам проверить текущую температуру ваших жестких дисков.
          Вот пример использования hddtemp в Manjaro Linux с описанием:
          </p>  
          <p className="content__header__2"> 
          Образ экрана
          </p>
          <img className="content__img" src={hddtemp_screen} width="900px" alt="Img" />
          <p className="content__header__2"> 
          Использование программы
          </p>
          <img className="content__img" src={hddtemp_1_img} width="550px" alt="Img" />
          <p className="content__text">
          Ошибка, которую вы видите, связана с тем,
          что hddtemp не может определить тип шины для вашего NVMe SSD, или этот тип шины неизвестен.
          hddtemp предназначен для мониторинга температуры жестких дисков,
          подключенных по стандартной шине SATA или IDE, и не поддерживает NVMe SSD.
          </p>  
        </div>

        <div className={toggle === 4 ? "content__show" : "content"}>
        <img className="content__logo" src={fourthLogo} width="250px" alt="fourthLogo" />
          <h1 className="content__header">File Roller</h1>
          <p style={{ marginBottom: "10px", color: "#A0F9D3", fontSize: "17px"}}>
          Производитель: 
          <span style={{ color: "#DFF7ED"}}> Cообщество разработчиков. Проект является открытым исходным кодом.</span>
          </p>
          <p style={{color: "#A0F9D3", fontSize: "17px"}}>
          Сайт: 
          <a style={{ color: "#DFF7ED" }} href="https://wiki.gnome.org/Apps/FileRoller" target="_blank" rel="noopener noreferrer"> /wiki.gnome.org/Apps/FileRoller</a>
          </p>  
          <div class="content__separator">
            <hr />
            <span class="separator-text">Основные пункты</span>
          </div>
          <p className="content__header__2"> 
          Образ экрана
          </p>
          <img className="content__img" src={fileroller_screen} width="900px" alt="Img" />
          <p className="content__header__2"> 
          Создание нового архива
          </p>
          <p className="content__text">
          После запуска мы видим главное окно программы, пока что оно пустое.
          </p> 
          <img className="content__img" src={fileroller_1_img} width="550px" alt="Img" />
          <p className="content__text">
          Далее у нас есть возможность открыть меню дополнительных параметров
          </p> 
          <p className="content__text">Пункты меню:</p>
          <ul style={{ marginBottom: "20px", marginLeft: "50px"}}>
            <li>1. Создать новый архив</li>
            <li>2. Открыть архив</li>
            <li>3. Сохранить как</li>
            <li>4. Создать/изменить пароль</li>
            <li>5. Проверить целостность</li>
            <li>6. Свойства</li>
            <li>7. Показывать все файлы</li>
            <li>8. Показывать в виде папок</li>
            <li>9. Боковая панель (сайдбар)</li>
            <li>10. Горячие клавиши</li>
            <li>11. Справка</li>
            <li>12. Информация о программе</li>
          </ul>
          <img className="content__img" src={fileroller_2_img} width="550px" alt="Img" />
          <p className="content__text">
          В результате выбора "New Archive..." появляется следующее меню:
          </p> 
          <img className="content__img" src={fileroller_3_img} width="550px" alt="Img" />
          <p className="content__text">
          При нажатии "Other options" появляются дополнительные настройки, здесь можно установить пароль для архива:
          </p> 
          <img className="content__img" src={fileroller_4_img} width="550px" alt="Img" />
          <p className="content__text">
          Есть возможность выбрать тип архива из списка представленных, 
          я буду рассматривать работу программы на примере .zip архива:
          </p> 
          <img className="content__img" src={fileroller_5_img} width="550px" alt="Img" />
          <p className="content__text">
          Можно выбрать директорию в которой будет создан архив:
          </p> 
          <img className="content__img" src={fileroller_6_img} width="550px" alt="Img" />
          <p className="content__text">
          </p> 
          <img className="content__img" src={fileroller_7_img} width="550px" alt="Img" />
          <p className="content__header__2"> 
          Добавление файлов в архив
          </p>
          <p className="content__text">
          Созданный архив появляется в сайдбаре слева:
          </p> 
          <img className="content__img" src={fileroller_8_img} width="550px" alt="Img" />
          <p className="content__text">
          При нажатии кнопки "+" открывается окно в котором можно выбрать файлы, которые будут добавлены в архив:
          </p> 
          <img className="content__img" src={fileroller_9_img} width="650px" alt="Img" />
          <p className="content__text">
          Выбранные файлы будут с зеленой галочкой:
          </p> 
          <img className="content__img" src={fileroller_10_img} width="650px" alt="Img" />
          <p className="content__text">
          При нажатии правой кнопки мыши внутри окна появляется контекстное меню, в нем можно выбрать все,
          отменить весь выбор, поставить галочку для отображения скрытых файлов:
          </p> 
          <img className="content__img" src={fileroller_11_img} width="650px" alt="Img" />
          <p className="content__text">
          При нажатии кнопки "Options" можно загрузить настройки выбора, сохранить текущие настройки или сбросить текущие настройки: 
          </p> 
          <img className="content__img" src={fileroller_12_img} width="650px" alt="Img" />
          <p className="content__text">
          После нажатия кнопки "Add" происходит добавление файлов в архив:
          </p> 
          <img className="content__img" src={fileroller_13_img} width="400px" alt="Img" />
          <p className="content__text">
          Так выглядит главное меню после добавления файлов в архив:
          </p> 
          <img className="content__img" src={fileroller_14_img} width="650px" alt="Img" />
          <p className="content__header__2"> 
          Извлечение файлов из архива
          </p>
          <p className="content__text">
          Для извлечения файлов следует нажать кнопку "Extract", так же на скриншоте видно контекстное меню,
          появляющееся при нажатии ПКМ на любом из файлов
          </p> 
          <p className="content__text">Действия в контекстном меню:</p>
          <ul style={{ marginBottom: "20px", marginLeft: "50px"}}>
          <li>1. Открыть файл</li>
          <li>2. Открыть с помощью</li>
          <li>3. Извлечь конкретный файл</li>
          <li>4. Вырезать</li>
          <li>5. Копировать</li>
          <li>6. Вставить</li>
          <li>7. Переименовать</li>
          <li>8. Удалить</li>
          </ul>
          <img className="content__img" src={fileroller_15_img} width="650px" alt="Img" />
          <p className="content__text">
          После нажатия кнопки "Extract" появляется следующее окно, 
          в нем нужно выбрать папку, в которую будут извлечены файлы:
          </p> 
          <img className="content__img" src={fileroller_16_img} width="950px" alt="Img" />
          <p className="content__text">
          Сообщение о том, что извлчение прошло успешно:
          </p> 
          <img className="content__img" src={fileroller_17_img} width="350px" alt="Img" />
          <p className="content__text">
          Так выглядят файлы в директории после извлечения:
          </p> 
          <img className="content__img" src={fileroller_18_img} width="650px" alt="Img" />
          <p className="content__header__2"> 
          Поиск по файлам
          </p>
          <p className="content__text">
          В программе реализован поиск по файлам, находящимся в архиве:
          </p> 
          <img className="content__img" src={fileroller_19_img} width="750px" alt="Img" />
          <p className="content__header__2"> 
          Открытие существующего архива
          </p>
          <p className="content__text">
          Для открытия существующего архива выбираем пункт "Open..." основного меню:
          </p> 
          <img className="content__img" src={fileroller_2_img} width="550px" alt="Img" />
          <img className="content__img" src={fileroller_20_img} width="950px" alt="Img" />
          <p className="content__text">
          Так выглядит главное окно после открытия архива:
          </p> 
          <img className="content__img" src={fileroller_21_img} width="650px" alt="Img" />
          <p className="content__header__2"> 
          Сохранение архива
          </p>
          <p className="content__text">
          Для сохранения нужно выбрать пунк "Save As..." основного меню: 
          </p> 
          <img className="content__img" src={fileroller_2_img} width="550px" alt="Img" />
          <img className="content__img" src={fileroller_22_img} width="550px" alt="Img" />
          <p className="content__header__2"> 
          Создание/редактирование пароля
          </p>
          <p className="content__text">
          Для создания/редактирования пароля к архиву нужно выбрать пункт "Password..." основного меню:
          </p> 
          <img className="content__img" src={fileroller_2_img} width="550px" alt="Img" />
          <p className="content__text">
          Окно с вводом пароля:
          </p> 
          <img className="content__img" src={fileroller_23_img} width="350px" alt="Img" />
          <p className="content__text">
          </p> 
          <img className="content__img" src={fileroller_24_img} width="350px" alt="Img" />
          <p className="content__text">
          Окно с требованием ввести пароль к архиву:
          </p> 
          <img className="content__img" src={fileroller_25_img} width="350px" alt="Img" />
          <p className="content__header__2"> 
          Удаление файлов из архива
          </p>
          <p className="content__text">
          Для удаления из архива нужно выделить файл (файлы), 
          которые требуется удалить, средствами стандартного выделения:
          </p> 
          <img className="content__img" src={fileroller_14_img} width="650px" alt="Img" />
          <p className="content__text">
          Далее в контексном меню, открытом чере ПКМ, выбрать пунк "Delete" и появится следующее окно.
          Здесь есть выбор: удалить все файлы в архиве, удалить выбранные файлы 
          и удалить файлы с помощью фильтра (по названию или расширению):
          </p> 
          <img className="content__img" src={fileroller_26_img} width="350px" alt="Img" />
          <p className="content__text">
          Результат удаления директории "coursework-site":
          </p> 
          <img className="content__img" src={fileroller_27_img} width="650px" alt="Img" />
          <p className="content__header__2"> 
          Проверка целостности
          </p>
          <p className="content__text">
          Для запуска теста на проверку целостности нужно выбрать пункт "Test integrity" основного меню:
          </p> 
          <img className="content__img" src={fileroller_2_img} width="550px" alt="Img" />
          <img className="content__img" src={fileroller_28_img} width="750px" alt="Img" />
          <p className="content__header__2"> 
          Просмотр свойст
          </p>
          <p className="content__text">
          Для просмотра свойств архива нужно выбрать пунк "Properties" основного меню:
          </p> 
          <img className="content__img" src={fileroller_2_img} width="550px" alt="Img" />
          <img className="content__img" src={fileroller_29_img} width="750px" alt="Img" />
          <p className="content__header__2"> 
          Изменение параметров отображения
          </p>
          <p className="content__text">
          Для изменения параметов отображения есть 3 пункта в основном меню:
          </p> 
          <img className="content__img" src={fileroller_30_img} width="650px" alt="Img" />
          <img className="content__img" src={fileroller_31_img} width="650px" alt="Img" />
          <img className="content__img" src={fileroller_32_img} width="650px" alt="Img" />
          <p className="content__header__2"> 
          Горячие клавиши
          </p>
          <p className="content__text">
          Для просмотра горячих клавиш нужно выбрать пунк "Keyboard Shortcuts" основного меню:
          </p> 
          <img className="content__img" src={fileroller_2_img} width="550px" alt="Img" />
          <img className="content__img" src={fileroller_33_img} width="750px" alt="Img" />
          <p className="content__header__2"> 
          Справка
          </p>
          <p className="content__text">
          Для просмотра спраки нужно выбрать пунк "Help" основного меню:
          </p> 
          <img className="content__img" src={fileroller_2_img} width="550px" alt="Img" />
          <img className="content__img" src={fileroller_34_img} width="650px" alt="Img" />
          <p className="content__header__2"> 
          О программе
          </p>
          <p className="content__text">
          Для просмотра информации о программе нужно выбрать пунк "About Archive Manager" основного меню:
          </p> 
          <img className="content__img" src={fileroller_2_img} width="550px" alt="Img" />
          <img className="content__img" src={fileroller_35_img} width="750px" alt="Img" />
          <img className="content__img" src={fileroller_36_img} width="750px" alt="Img" />

          <div class="content__separator">
            <hr />
            <span class="separator-text">Эксперименты</span>
          </div>

          <p className="content__header__2"> 
          Эксперимент с различными форматами архивов
          </p>
          <p className="content__text">
          Создадим несколько архивов разных форматов (.zip, .7z, .tar) и сравним их:
          </p>
          <img className="content__img" src={fileroller_e1_img} width="750px" alt="Img" />
          <p className="content__text">Порядок по скорости сжатия (от самого быстрого к самому медленному):</p>
          <ul style={{ marginBottom: "20px", marginLeft: "50px"}}>
            <li>1. tar</li>
            <li>2. 7z</li>
            <li>3. zip</li>
          </ul>
          <p className="content__text">
          Скорость сжатия зависит от эффективности алгоритма и от исходных данных.
          </p>
          <p className="content__text">
          Рассмотрим свойства каждого архива:
          </p>
          <img className="content__img" src={fileroller_e2_img} width="550px" alt="Img" />
          <img className="content__img" src={fileroller_e3_img} width="550px" alt="Img" />
          <img className="content__img" src={fileroller_e4_img} width="550px" alt="Img" />
          <p className="content__header__2"> 
          Взаимодействие с помощью командной строки
          </p>
          <p className="content__text">
          Команды могут быть включены в ваши сценарии 
          для автоматизации упаковки и распаковки файлов через командную строку.
          </p>
          <p className="content__text">
          Распаковка архива в директорию:
          </p>
          <img className="content__img" src={fileroller_e5_img} width="550px" alt="Img" />
          <img className="content__img" src={fileroller_e6_img} width="850px" alt="Img" />
          <p className="content__text">
          Создание нового архива и добавление в него файла:
          </p>
          <img className="content__img" src={fileroller_e7_img} width="850px" alt="Img" />
          <img className="content__img" src={fileroller_e8_img} width="850px" alt="Img" />
          <p className="content__header__2"> 
          Работа с большими архивами
          </p>
          <img className="content__img" src={fileroller_e10_img} width="850px" alt="Img" />
          <img className="content__img" src={fileroller_e11_img} width="850px" alt="Img" />

        </div>

        <div className={toggle === 5 ? "content__show" : "content"}>
          <img className="content__logo" src={fifthLogo} width="250px" alt="secondLogo" />
          <h1 className="content__header">7-Zip</h1>
          <p style={{ marginBottom: "10px", color: "#A0F9D3", fontSize: "17px"}}>
          Производитель: 
          <span style={{ color: "#DFF7ED"}}> Cообщество разработчиков. Проект является открытым исходным кодом.</span>
          </p>
          <p style={{color: "#A0F9D3", fontSize: "17px"}}>
          Сайт: 
          <a style={{ color: "#DFF7ED" }} href="https://gsmartcontrol.shaduri.dev" target="_blank" rel="noopener noreferrer"> gsmartcontrol.shaduri.dev</a>
          </p>  
          <div class="content__separator">
            <hr />
            <span class="separator-text">Основные пункты</span>
          </div>
          
          <div class="content__separator">
            <hr />
            <span class="separator-text">Эксперименты</span>
          </div>
        </div>

    </div>
  );
}

export default Content;
