import React from 'react';
import Grid from './components/grid'
//import logo from './assets/logo.png';

//our inspiration: https://www.w3schools.com/howto/howto_css_dropdown.asp

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Grid />
    </div>
  );
}

function Navbar() {
  return (
    <div className='navbar'>
      <NavItemSingle path='#'>ABOUT</NavItemSingle>
      <NavItemSingle path='#'>PROGRAMS</NavItemSingle>
      <NavItemSingle path='#'>RESOURCES</NavItemSingle>
      <NavItemSingle path='#'>EVENTS</NavItemSingle>
      <NavItemSingle path='#'>DIRECTORY</NavItemSingle>
      <NavItemSingle path='#'>DONATE</NavItemSingle>
    </div>
  );
}

function NavItemSingle(props) {
  return (
    <div className='nav-item-single'>
      <a className='single-btn' href={props.path}>{props.children}</a>
    </div>
  );
}

function NavItemDrop(props) {
  return (
    <div className='nav-item-drop'>
      <a className='drop-btn' href={props.path}>{props.children}</a>
      <div className='dropdown-content'>
        <a href='#'>element1</a>
        <a href='#'>element2</a>
        <a href='#'>element3</a>
        <a href='#'>element4</a>
        <a href='#'>element5</a>
        <a href='#'>element6</a>
      </div>
    </div>
  );
}

export default App;

/*
<div className="App">
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      ...from the Cantonese Alliance.
    </p>
  </header>
</div>
*/