import React from 'react';
import { Router, Route, hashHistory } from 'dva/router';
import SiderDemo from './components/index/SiderDemo';

function RouterConfigLeft() {
  return (
    <Router history={hashHistory}>
      <Route path="/**" component={SiderDemo} />
    </Router>
  );
}

export default RouterConfigLeft;
