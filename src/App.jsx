import React from 'react';
import { Switch, Route, link } from 'react-router-dom';
import { Layout, Typography, space } from 'antd';
import {Navbar} from './components';

const App = () => {
  return (
    <div className='app'>
      <div className='navbar'>
        <Navbar />
        <Layout/>
      </div>
      <div className='main'></div>
      <div className='footer'></div>

    </div>
  )
}

export default App