import React, { Component } from 'react';

import './App.css';

import {Layout, Header, Navigation,Drawer, Content} from 'react-mdl';
import Main from './components/main';
class App extends Component {
  render() {
    return (
      /* Uses a header that scrolls with the text, rather than staying locked at the top */
<div className="demo-big-content">
    <Layout>
        <Header title="Title" scroll>
            <Navigation>
                <a href="about">About</a>
                <a href="contact">Contact</a>
                <a href="survey">Survey</a>
                <a href="login">Login</a>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
            <a href="about.js">About</a>
                <a href="contact.js">Contact</a>
                <a href="survey">Survey</a>
                <a href="login">Login</a>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
          

          <Main/>
        </Content>
    </Layout>
</div>
    );
  }
}

export default App;
