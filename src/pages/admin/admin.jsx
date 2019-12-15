import React, { Component } from 'react';
import { Redirect } from "react-router-dom";

import memoryUtils from "../../utils/memoryUtils";

import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
/**
 * 后台管理路由组件
 */
class Admin extends Component {
  render() {
    const user = memoryUtils.user;
    // 如果内存中没有user
    if (!user || !user._id) {
      // 自动跳转到登录页（在render()中）
      return <Redirect to="/login" />
    }

    return (
      <Layout style={{height: "100%"}}>
        <Sider>Sider</Sider>
        <Layout>
          <Header>Header</Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    )
  }
}

export default Admin;