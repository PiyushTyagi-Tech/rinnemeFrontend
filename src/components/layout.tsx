import React from 'react';

import 'antd/dist/antd.css';
import Achievements from './Achievements'

import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  StarOutlined,
  UploadOutlined,
  UsergroupAddOutlined,
  FacebookOutlined,
  InstagramOutlined,
  GithubOutlined,
  UserOutlined,
 
  SettingOutlined,
 
} from '@ant-design/icons';
import AchievementForm from './Achievements';

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;


class Dashboard extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" >
            <StarOutlined/>
            <span> Achievements</span>
          </Menu.Item>
          <Menu.Item key="2">
            <UploadOutlined />
            <span>Resume</span>
          </Menu.Item>
          <Menu.Item key="3">
            < UserOutlined/>
            <span>About Me</span>
          </Menu.Item>
         
          <SubMenu
            key="sub1"
            title={
              <span>
                <SettingOutlined />
                <span>Settings</span>
              </span>
            }
          >
            <Menu.Item key="4">Option 9</Menu.Item>
            <Menu.Item key="5">Option 10</Menu.Item>
            </SubMenu>
            <SubMenu
            key="sub2"
            title={
              <span>
                <UsergroupAddOutlined />
                <span>Social Links</span>
              </span>
            }
          >
              <Menu.Item key="6"><FacebookOutlined/>Facebook</Menu.Item>
              <Menu.Item key="7"><GithubOutlined/>Github</Menu.Item>
              <Menu.Item key="8"><InstagramOutlined/>Instagram</Menu.Item>

            </SubMenu>
          
        </Menu>  
       </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0}}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
          <AchievementForm/>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default Dashboard; 