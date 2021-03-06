# react后台管理界面

## 创建
  ```
    npx create-react-app 

    create-react-app 

    新建 src 
      APP.js /** 应用的根组件 */
      index.js  /** 入口js */
      文件夹
  ```

## autd使用 官网
  ```
    yarn add antd

    按需加载
    yarn add react-app-rewired customize-cra
    yarn add babel-plugin-import
    
    最外成新建 config-overrides.js
    const { override, fixBabelImports } = require('customize-cra');

    module.exports = override(
        // 针对antd实现按需打包： 根据import来打包
        fixBabelImports('import', {
            libraryName: 'antd',
            libraryDirectory: 'es',
            style: 'css',
        }),
    );

    引入样式 
      + 全部引入 不推荐
        - index.js import "antd/dist/antd.min.css" 
      + 按需引入
        - 修改package.json
  
        修改：
          "scripts": {
          -   "start": "react-scripts start",
          +   "start": "react-app-rewired start",
          -   "build": "react-scripts build",
          +   "build": "react-app-rewired build",
          -   "test": "react-scripts test",
          +   "test": "react-app-rewired test",
          }

    自定义主题
      yarn add less less-loader
        config-overrides.js

        - const { override, fixBabelImports } = require('customize-cra');
        + const { override, fixBabelImports, addLessLoader } = require('customize-cra');

        module.exports = override(
          fixBabelImports('import', {
            libraryName: 'antd',
            libraryDirectory: 'es',
        -   style: 'css',
        +   style: true,
          }),
        + addLessLoader({
        +   javascriptEnabled: true,
        +   modifyVars: { '@primary-color': '#1DA57A' },
        + }),
        );

        官网 - 配置主题
  ```

## 引入路由
  + 下载

      ```
        yarn add react-router-dom
      ```
    
  + 书写
  
    ```
      page文件夹新建路由组件

      APP.js
        import { BrowserRouter, Route, Switch } from "react-router-dom";
        /**
          * BrowserRouter 外层标签
          * Route 路由标签
          *    path 路径
          *    component 引入文件
          *  Switch 只匹配其中一个
          */

          <BrowserRouter>
            <Switch>
              <Route path="/login" component={Login}></Route>
              <Route path="/admin" component={Admin}></Route>
            </Switch>
          </BrowserRouter>
    ```
## 基本使用
  1. class
  
    ```
      className=""
    ```
  2. 静态资源

    ```
      先引入
        eg: import logo from "./images/logo.svg"
      动态的值
        <img src={logo} alt=""/>
    ```