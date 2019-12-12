/** 应用的根组件 */

import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

/**
 * BrowserRouter 路由器 没有#
 * HashRouter 路由器 有#
 * Route 路由标签
 *    path 路径
 *    component 引入文件
 *  Switch 只匹配其中一个
 */

import Login from "./pages/login/login";
import Admin from "./pages/admin/admin";

// 2. 使用autd
// import { message, Button } from 'antd';
export default class App extends Component {

    render() {
        return (
          <BrowserRouter>
            <Switch>
              <Route path="/login" component={Login}></Route>
              <Route path="/" component={Admin}></Route>
            </Switch>
          </BrowserRouter>
        )
    }
}