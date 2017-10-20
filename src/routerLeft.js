import React from 'react';
import { Router, Route, hashHistory } from 'dva/router';
import SiderDemo from './components/index/SiderDemo';
import Login from './assembly/Login';

function RouterConfigLeft() {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={() => { window.location.href = '/#/login'; return null; }} />
      <Route path="/home" component={SiderDemo} />
      <Route path="/login" component={Login} />
    </Router>
  );
}

export default RouterConfigLeft;
