import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb,Icon,Dropdown,Avatar,message } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import Logo from '@/assets/images/logo.png'
import {adminRoutes} from '@/routes'
import { withRouter  } from 'react-router-dom'
import {clearToken} from '@/utils/auth'
import './frame.css'
const routes = adminRoutes.filter(route=>route.isShow = true)
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const Index = (props) => {
  const popMenu = (<Menu onClick={p=>{
    if(p.key === "logout"){
      clearToken()
      props.history.push("/login");
    }else{
      message.info(p.key);
    }
  }}>
    <Menu.Item key="logout">退出</Menu.Item>
  </Menu>)
  return (  
    <Layout>
      <Header className="header" style={{
        backgroundColor:"#428bca"
      }}>
        <div className="logo">
          <img src={Logo} width="50" alt="logo"/>
        </div>
        <Dropdown overlay={popMenu}>
          <div>
            <Avatar>U</Avatar>
            <span style={{color:"#fff"}}>管理员</span>
            <Icon type="down"></Icon>
          </div>
        </Dropdown>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            {routes.map(route=>{
              if (route.children && route.children.length && !route.hideChildren) {
                return(
                  <SubMenu
                    key={route.path}
                    title={
                      <span>
                        <Icon type={route.icon}></Icon>
                        {route.title}
                      </span>
                    }
                  >
                    {
                      route.children.map(item=>{
                        return(
                          <Menu.Item key={item.path} onClick={p=>{
                            // console.log(p);
                            props.history.push(p.key)}
                          }>
                            <Icon type={item.icon}></Icon>
                            {item.title}
                          </Menu.Item>
                        )
                        
                      })
                    }

                  </SubMenu>
                )
              }else{
                return(
                  <Menu.Item key={route.path} onClick={p=>props.history.push(p.key)}>
                    <Icon type={route.icon}></Icon>
                    {route.title}
                  </Menu.Item>
                )
              }
              
            })}
            {/* <SubMenu
              key="sub1"
              title={
                <span>
                  
                  subnav 1
                </span>
              }
            >
              <Menu.Item key="1">option1</Menu.Item>
              <Menu.Item key="2">option2</Menu.Item>
              <Menu.Item key="3">option3</Menu.Item>
              <Menu.Item key="4">option4</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  
                  subnav 2
                </span>
              }
            >
              <Menu.Item key="5">option5</Menu.Item>
              <Menu.Item key="6">option6</Menu.Item>
              <Menu.Item key="7">option7</Menu.Item>
              <Menu.Item key="8">option8</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              title={
                <span>
                  
                  subnav 3
                </span>
              }
            >
              <Menu.Item key="9">option9</Menu.Item>
              <Menu.Item key="10">option10</Menu.Item>
              <Menu.Item key="11">option11</Menu.Item>
              <Menu.Item key="12">option12</Menu.Item>
            </SubMenu> */}
          </Menu>
        </Sider>
        <Layout style={{ padding: '16px' }}>
          {/* <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb> */}
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              backgroundColor:"#fff"
            }}
          >
            {props.children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}
 
export default withRouter(Index);
 
