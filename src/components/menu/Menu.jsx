import './Menu.css'

function Menu({ isOpen, onClose, onSubitemClicked }) {
    const menuStyles = {
      width: isOpen ? '30%' : 0,
      top: '10%',
      bottom: '5%',
      right: '-15px',
    };

    const handleSubitemClick = (itemId) => {
      onClose();
      onSubitemClicked(itemId);
    };
  
    return (
      <div className="menu" style={menuStyles}>
        <button className="menu__btn" onClick={onClose}> × </button>
        <div className="menu__content">
            <ul className="menu__list">
            <li className="item">Диагностика жесткие дисков
                <ul className="menu__sublist">
                <li className="subitem" onClick={() => handleSubitemClick(1)}>smartmontools</li>
                <li className="subitem" onClick={() => handleSubitemClick(2)}>GSmartControl</li>
                <li className="subitem" onClick={() => handleSubitemClick(3)}>HDDTemp</li>
                </ul>
            </li>
            <li className="item">Архивация данных и работа с архивами
                <ul className="menu__sublist">
                <li className="subitem" onClick={() => handleSubitemClick(4)}>File Roller</li>
                <li className="subitem" onClick={() => handleSubitemClick(5)}>7-Zip</li>
                <li className="subitem" onClick={() => handleSubitemClick(6)}>PeaZip</li>
                </ul>
            </li>
            <li className="item">Антивирусная безопасность
                <ul className="menu__sublist">
                <li className="subitem" onClick={() => handleSubitemClick(7)}>ClamAV</li>
                <li className="subitem" onClick={() => handleSubitemClick(8)}>Sophos Antivirus</li>
                <li className="subitem" onClick={() => handleSubitemClick(9)}>ESET NOD32 Antivirus</li>
                </ul>
            </li>
            </ul>
        </div>
      </div>
    );
  }
  
  export default Menu;