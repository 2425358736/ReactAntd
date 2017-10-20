import React from 'react';
import { Router, Route, hashHistory } from 'dva/router';
import App from './assembly/App';
import TableCom from './assembly/Table';
import MenuLeft from './assembly/MenuLeft';
import MenuComponent from './assembly/Menu';
import WrappedRegistrationForm from './assembly/RegistrationForm';
import ThumbnailExhibition from './assembly/Thumbnail';
import Shiro from './assembly/Shiro';
import Test from './assembly/Test';

class RouterConfig extends React.Component {
  render() {
    return (
      <App>
        <Router history={hashHistory}>
          <Route path="/home/tree" component={MenuComponent} />
          <Route path="/home/table" component={TableCom} />
          <Route path="/home/menuLeft" component={MenuLeft} />
          <Route path="/home/wrappedRegistrationForm" component={WrappedRegistrationForm} />
          <Route path="/home/thumbnailExhibition" component={ThumbnailExhibition} />
          <Route path="/home/shiro" component={Shiro} />
          <Route path="/home/test" component={Test} />
        </Router>
      </App>
    );
  }
}

export default RouterConfig;
