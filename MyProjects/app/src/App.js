import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Layout, Header, Content, Navigation, Drawer} from "react-mdl";

class App extends Component {
  render() {
    return (
      <div className="App">
      <Layout fixedHeader>
      <Header title="My App">
      <Navigation className="hide-on-sm">
                
                </Navigation>
                </Header>
                <Drawer title="My App">
                <Content>
                Hi Rishi
                </Content>
                </Drawer>
                </Layout>
      </div>
    );
  }
}

export default App;
