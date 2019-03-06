import React from 'react';
import { Link } from 'react-router-dom';
// import logo.jpg from '.../static';

function Header() {
  return (
    <header  style={headerStyle}>

    <h1   style={headStyle}>Hezron Kimutai</h1>
    <div className='navbar'>
    <ul>
    <li><Link className='link' style={linkStyle} to="/"> Home </Link></li>
    <li><Link className='link'  style={linkStyle} to="/about"> About </Link></li>
    <li><Link  className='link' style={linkStyle} to="/articles"> Articles </Link></li>
    <li><Link  className='link' style={linkStyle} to="/videos"> Videos </Link></li>
    <li><Link  className='link' style={linkStyle} to="/photos"> Photos </Link></li>
    <li><Link  className='link' style={linkStyle} to="/addarticles"> Add Article </Link></li>

    </ul></div>
    </header>
  )
}
const headerStyle = {
  background: '#333',
  color: ' #FF00FF',
  textAlign: 'center',
  padding: '5px',
  backgroundImage: `url(${require('./logo.jpeg')})`,
  backgroundPosition: 'center',
  backgroundSize: '100%',
  backgroundRepeat: 'no-repeat',
  backgroundBlendMode: 'screen',
  borderRadius:'5px'
}
const headStyle = {
  fontSize:'70px'
}

// const imageStyle = {
//   height:'250px',
//   width:'200px'
//
// }

const linkStyle = {

  textDecoration:'none',
  margin:'20px',
  padding:'5px',
  fontSize:'20px',
  borderRadius:'5px'
}

export default Header;
