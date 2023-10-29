import './Menu.css'

function Menu({ isOpen, onClose }) {
    const menuStyles = {
      width: isOpen ? '30%' : 0,
      top: '10%',
      bottom: '5%',
      right: '-15px',
    };
  
    return (
      <div className="menu" style={menuStyles}>
        <button className="menu__btn" onClick={onClose}> × </button>
        <div className="menu__content">
            <ul className="menu__list">
            <li className="item">Пункт 1
                <ul className="menu__sublist">
                <li className="subitem">Подпункт 1</li>
                <li className="subitem">Подпункт 2</li>
                <li className="subitem">Подпункт 3</li>
                </ul>
            </li>
            <li className="item">Пункт 2
                <ul className="menu__sublist">
                <li className="subitem">Подпункт 1</li>
                <li className="subitem">Подпункт 2</li>
                <li className="subitem">Подпункт 3</li>
                </ul>
            </li>
            <li className="item">Пункт 3
                <ul className="menu__sublist">
                <li className="subitem">Подпункт 1</li>
                <li className="subitem">Подпункт 2</li>
                <li className="subitem">Подпункт 3</li>
                </ul>
            </li>
            </ul>
        </div>
      </div>
    );
  }
  
  export default Menu;