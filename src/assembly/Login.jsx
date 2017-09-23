import React from 'react';
import { Input, Button } from 'antd';
import { apiPost } from '../api/request';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      passWord: '',
    };
  }
  userName = (e) => {
    this.setState({
      userName: e.target.value,
    });
  }
  passWord = (e) => {
    this.setState({
      passWord: e.target.value,
    });
  }
  login = async () => {
    const data = await apiPost(
      'http://localhost:8484/login',
      { loginName: this.state.userName,
        passWord: this.state.passWord },
    );
    console.log(data);
  }
  render() {
    return (
      <div>
        <Input onChange={this.userName} />
        <Input onChange={this.passWord} />
        <Button onClick={this.login}>确定</Button>
      </div>
    );
  }
}
export default Login;
