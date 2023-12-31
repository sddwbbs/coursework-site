import Header from './components/header/Header'
import Menu from './components/menu/Menu'
import Content from './components/content/Content'
import { useState } from 'react';

function App() {

  const [toggle, setToggle] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function updateToggle(id) {
    setToggle(id);
  }

  function handleRightImageClick() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div className="App">
      <Header onLeftImageClick={updateToggle} onRightImageClick={handleRightImageClick} />
      <div className={`menuBackdrop ${isMenuOpen ? 'active' : ''}`}></div>
      <Menu isOpen={isMenuOpen} onClose={handleRightImageClick} onSubitemClicked={updateToggle} />
      <Content toggle={toggle} />
    </div>
  );
}

export default App;
