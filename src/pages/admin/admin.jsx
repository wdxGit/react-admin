import React, { Component } from "react";

import { Redirect, Route, Switch } from "react-router-dom";

// 二级路由
import Home from "../home/home.jsx";
import Category from "../category/category.jsx";
import Product from "../product/product.jsx";
import Role from "../role/role.jsx";
import Bar from "../charts/bar.jsx";
import Line from "../charts/line.jsx";
import Pie from "../charts/pie.jsx";

import memoryUtils from "../../utils/memoryUtils";
import LeftNav from "../../components/LeftNav/LeftNav.jsx";
import Header from "../../components/Header/Header.jsx";
import { Layout } from "antd";
const { Footer, Sider, Content } = Layout;

/**
 * 后台管理路由组件
 */
class Admin extends Component {
  render() {
    const user = memoryUtils.user;
    // 如果内存中没有user
    if (!user || !user._id) {
      // 自动跳转到登录页（在render()中）
      return <Redirect to="/login" />;
    }

    return (
      <Layout style={{ height: "100%" }}>
        <Sider>
          <LeftNav />
        </Sider>
        <Layout>
          <Header></Header>
          <Content style={{ margin: "20px", backgroundColor: "#fff" }}>
            {/* 
              二级路由 
                Switch匹配一个
                Redirect都找不到进入
            */}
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/category" component={Category} />
              <Route path="/product" component={Product} />
              <Route path="/role" component={Role} />
              <Route path="/bar" component={Bar} />
              <Route path="/line" component={Line} />
              <Route path="/pie" component={Pie} />
              <Redirect to="/home" />
            </Switch>
          </Content>
          <Footer style={{ textAlign: "center", color: "#cccccc" }}>
            推荐使用谷歌浏览器，可以获得更佳页面操作体验
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default Admin;
