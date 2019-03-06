
import About from './pages/About';
import Home from './pages/Home';
import Articles from './pages/Articles';
import Article from './pages/Article';
import AddArticles from './pages/AddArticles';
import Videos from './pages/Videos';
import Photos from './pages/Photos';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;


// import logo.jpg from '.../static';

export default  function Body() {
  return (
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >

        <Menu.Item key="1"><img alt="logo" src='/logo.png' style={{width:'70px',height:'50px'}} /></Menu.Item>
        <Menu.Item key="1"><Link className='link'  to="/about"> About </Link></Menu.Item>
        <Menu.Item key="2"><Link className='link'  to="/videos"> Videos </Link></Menu.Item>
        <Menu.Item key="3"><Link className='link'  to="/"> Home </Link></Menu.Item>
        <Menu.Item key="4"><Link className='link'  to="/articles"> Articles </Link></Menu.Item>
        <Menu.Item key="5"><Link className='link'  to="/addarticles"> Add Article </Link></Menu.Item>
        <Menu.Item key="6"><Link className='link'  to="/"> About </Link></Menu.Item>
        </Menu>
      </Header>
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
    <Route exact path='/photos' component={Photos}/></div></Content>
      <Footer style={{ textAlign: 'center' }}>
        Hezsolutions ©2019 Created Hezsolutions
      </Footer>
    </Layout>
)}
