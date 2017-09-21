import React from 'react';
import { Router, Route, hashHistory } from 'dva/router';
import App from './assembly/App';
import IndexPage from './routes/IndexPage';
import TableCom from './assembly/Table';
import MenuLeft from './assembly/MenuLeft';
import MenuComponent from './assembly/Menu';
import WrappedRegistrationForm from './assembly/RegistrationForm';
import ThumbnailExhibition from './assembly/Thumbnail';

class RouterConfig extends React.Component {
  render() {
    return (
      <App>
        <Router history={hashHistory}>
          <Route path="/" component={IndexPage} />
          <Route path="/tree" component={MenuComponent} />
          <Route path="/table" component={TableCom} />
          <Route path="/menuLeft" component={MenuLeft} />
          <Route path="/wrappedRegistrationForm" component={WrappedRegistrationForm} />
          <Route path="/thumbnailExhibition" component={ThumbnailExhibition} />
        </Router>
      </App>
    );
  }
}

export default RouterConfig;
