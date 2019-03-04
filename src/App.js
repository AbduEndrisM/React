import React, { Component } from 'react';

import './App.css';

import {Layout, Header, Navigation,Drawer, Content} from 'react-mdl';
 
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (  
      /* Uses a header that scrolls with the text, rather than staying locked at the top */
<div className="demo-big-content">
    <Layout>
        <Header title="Title" scroll>
            <Navigation>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/survey">Survey</Link>
                <Link  to="/login">Login</Link>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>

            <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
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
