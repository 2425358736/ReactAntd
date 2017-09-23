import React from 'react';
import { apiPost } from '../api/request';

class Shiro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  shiro = async () => {
    const data = await apiPost(
      'http://localhost:8484/index',
    );
    console.log(data);
  }

  componentWillMount() {
    this.shiro();
  }

  render() {
    return (
      <div />
    );
  }
}
export default Shiro;
