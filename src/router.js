import React from 'react';
import { Router, Route, hashHistory } from 'dva/router';
import App from './assembly/App';
import IndexPage from './routes/IndexPage';
import TableCom from './assembly/Table';
import MenuLeft from './assembly/MenuLeft';
import WrappedRegistrationForm from './assembly/RegistrationForm';

class RouterConfig extends React.Component {
  render() {
    return (
      <App>
        <Router history={hashHistory}>
          <Route path="/" component={IndexPage} />
          <Route path="/table" component={TableCom} />
          <Route path="/menuLeft" component={MenuLeft} />
          <Route path="/wrappedRegistrationForm" component={WrappedRegistrationForm} />
        </Router>
      </App>
    );
  }
}

export default RouterConfig;
