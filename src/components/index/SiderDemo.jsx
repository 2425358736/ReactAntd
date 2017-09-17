import React from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Link } from 'dva/router';
import RouterConfig from '../../router';

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class SiderDemo extends React.Component {
  state = {
    collapsed: false,
    // 面包屑组
    crumbs: [],
  };
  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }
  menuItem = (item, key, keyPath) => {
    this.setState({
      crumbs: item.keyPath.reverse(),
    });
    console.log(item);
    console.log(key);
    console.log(keyPath);
  }
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Menu onClick={this.menuItem} theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="菜单">
              <Icon type="pie-chart" />
              <span>菜单</span>
            </Menu.Item>
            <Menu.Item key="Table">
              <Link to="/table" style={{ color: '#e2e3db' }} ><Icon type="line-chart" />Table</Link>
            </Menu.Item>
            <Menu.Item key="Menu">
              <Link to="/menuLeft" style={{ color: '#e2e3db' }} ><Icon type="desktop" />Menu</Link>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={<span><Icon type="user" /><span>User</span></span>}
            >
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={<span><Icon type="team" /><span>Team</span></span>}
            >
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9">
              <Icon type="file" />
              <span>File</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '12px 0' }}>
              {this.state.crumbs.map((cru, i) => {
                return <Breadcrumb.Item key={i}>{cru}</Breadcrumb.Item>;
              })}
            </Breadcrumb>
            <RouterConfig />
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2016 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default SiderDemo;
