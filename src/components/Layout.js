
import About from './pages/About';
import Home from './pages/Home';
import Articles from './pages/Articles';
import Article from './pages/Article';
import AddArticles from './pages/AddArticles';
import Videos from './pages/Videos';
import Photos from './pages/Photos';
import Signin from './pages/Signin';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
import {Button, Navbar,Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

const { Header, Content, Footer } = Layout;


// import logo.jpg from '.../static';
// <Menu.Item key="1"><img alt="logo" src='/logo.png' style={{width:'70px',height:'50px'}} /></Menu.Item>
// <Menu.Item key="1"><Link className='link'  to="/about"> About </Link></Menu.Item>
// <Menu.Item key="2"><Link className='link'  to="/videos"> Videos </Link></Menu.Item>
// <Menu.Item key="3"><Link className='link'  to="/"> Home </Link></Menu.Item>
// <Menu.Item key="4"><Link className='link'  to="/articles"> Articles </Link></Menu.Item>
// <Menu.Item key="5"><Link className='link'  to="/addarticles"> Add Article </Link></Menu.Item>
// <Menu.Item key="6"><Link className='link'  to="/signin"> signin </Link></Menu.Item>

export default  function Body() {
  return (
    <Layout>
    <Navbar  collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="/"><img src='/logo.png'/></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/photos">photos</Nav.Link>
      <Nav.Link href="/videos">videos</Nav.Link>
      <NavDropdown title="Contents" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/videos">Videos</NavDropdown.Item>
        <NavDropdown.Item href="/articles">Articles</NavDropdown.Item>
        <NavDropdown.Item href="/addarticles">Add Articles</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="about">About</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>

      <Content style={{ padding: '0 50px', marginTop: 64 }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
        <Route exact path='/articles' component={Articles}/>
        <Route exact path='/article' component={Article}/>


          <Route exact path='/addarticles' component={AddArticles} />





          <Route exact path='/videos' component={Videos } />
    <Route exact path='/about' component={About}/>
    <Route exact path='/' component={Home}/>
    <Route exact path='/about' component={About}/>
      <Route exact path='/signin' component={Signin}/>
    <Route exact path='/photos' component={Photos}/></div></Content>
      <Footer style={{ textAlign: 'center' }}>
        Hezsolutions ©2019 Created Hezsolutions
      </Footer>
    </Layout>
)}
