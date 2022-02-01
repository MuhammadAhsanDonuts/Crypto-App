import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Space, Typography } from 'antd';

import { Exchanges, HomePage, News, Cryptocurrencies, CryptoDetails, Navbar } from './components';
import './App.css';

export const App = () => (
  <div className="app">
    <div className="navbar">
      <Navbar />
    </div>
    <div className="main">
      <Layout>
        <div className="routes">
          <Switch>
            <Route exact path="/home">
              <HomePage />  
            </Route>
            <Route exact path="/exchanges">
              <Exchanges />
            </Route>
            <Route exact path="/cryptocurrencies">
              <Cryptocurrencies /> 
            </Route>
            <Route exact path="/crypto/:coinId">
              <CryptoDetails />
            </Route>
            <Route exact path="/news">
              <News />
            </Route>
          </Switch>
        </div>
      </Layout>
      <div className="footer" >
            <Typography.Title level={5} style={{color: 'white', textAlign: 'center'}}>
                Cryptoverse <br/>
                All rights reserverd
            </Typography.Title>
            <Space>
                <Link to="/home">Home</Link>
                <Link to="/cryptocurrencies">Cryptocurrencies</Link>
                <Link to="/news">News</Link>
            </Space>
      </div>
    </div>
  </div>
);
export default App; 