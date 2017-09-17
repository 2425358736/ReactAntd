import React from 'react';
import { Router, Route, hashHistory } from 'dva/router';
import IndexPage from './routes/IndexPage';
import TableCom from './assembly/Table';
import MenuLeft from './assembly/MenuLeft';

function RouterConfig() {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={IndexPage} />
      <Route path="/table" component={TableCom} />
      <Route path="/menuLeft" component={MenuLeft} />
    </Router>
  );
}

export default RouterConfig;
