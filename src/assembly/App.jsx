import React from 'react';

class App extends React.Component {
  render() {
    return (<div style={{ padding: 24, background: '#fff' }}>
      {this.props.children}
    </div>);
  }
}
export default App;
