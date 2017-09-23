import { Modal, Button } from 'antd';
import React from 'react';

class Thumbnail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // url 图片数组
      url: props.url,
      visible: false,
      src: '',
      subscript: 0,
    };
  }
  // componentWillReceiveProps(nextProps) {
  //   this.setState({
  //     url: nextProps.url,
  //   });
  // }
  open = (i) => {
    this.setState({
      visible: true,
      subscript: i,
      src: this.state.url[i],
    });
  }
  handleCancel = () => {
    this.setState({
      visible: false,
    });
  }
  moveImg = (i) => {
    const sum = this.state.url.length - 1;
    let subscript = this.state.subscript + i;
    if (subscript > sum) {
      subscript = 0;
    } else if (subscript < 0) {
      subscript = sum;
    }
    this.open(subscript);
  }
  render() {
    return (
      <div>
        <Modal
          maskClosable={false}
          title="图片预览"
          style={{ top: 100 }}
          footer={null}
          visible={this.state.visible}
          onCancel={this.handleCancel}
        >
          <Button onClick={this.moveImg.bind(this, -1)}>上一张</Button>
          <Button style={{ float: 'right' }} onClick={this.moveImg.bind(this, 1)}>下一张</Button>
          <div style={{ height: '20px' }} />
          <img id="img" alt="图片预览" src={this.state.src} style={{ width: '100%', height: '300px' }} />
        </Modal>
        {this.state.url.map((u, i) => {
          const img = u;
          return (
            <img
              alt="图片预览"
              key={i}
              style={{
                width: '128px',
                height: '128px',
                marginRight: '20px',
                marginTop: '10px',
              }}
              src={img}
              onClick={this.open.bind(this, i)}
            />);
        })}

      </div>
    );
  }
}
export default Thumbnail;
