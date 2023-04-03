import React, { useState } from 'react';

//import Navbar from './components/Navbar'
//import logo from './assets/logo.png';

function App() {
  return (
    <div>
      <Navbar>
        <NavItem icon='hello'>
          <DropdownMenu/>
        </NavItem>
      </Navbar>
      <h1>CantoLTA</h1>
    </div>
  );
}

function Navbar(props) {
  return (
    <nav className='navbar'>
      <ul className='navbar-nav'> { props.children } </ul>
    </nav>
  )
}

function NavItem(props) {
  const [open, setOpen] = useState(false);
  return (
    <li className='nav-item'>
      <a href="#" className='icon-button' onClick={() => setOpen(!open)}>
        {props.icon}
      </a>
      {open && props.children}
    </li>
  )
}

function DropdownMenu() {

  function DropdownItem(props) {
    return (
      <a href='#' className='menu-item'>
        <span className='icon-button'>{props.leftIcon}</span>
        {props.children}
        <span className='icon-right'>{props.rightIcon}</span>
      </a>
    )
  }

  return (
    <div className='dropdown'>
      <DropdownItem>hi there</DropdownItem>
    </div>
  )
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