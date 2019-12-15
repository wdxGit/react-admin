/** 入口js */

// 1. 渲染app标签
import React from 'react';
import ReactDOM from 'react-dom';

// 引入样式
// import "antd/dist/antd.min.css" // 全部 不建议

import App from "./APP";

import storageUtils from "./utils/storageUtils";
import memoryUtils from "./utils/memoryUtils"
// 读取local保存的user，保存到内存中
const user = storageUtils.getUser();
memoryUtils.user = user;

// 1.2 加载app标签 渲染到index的root上
ReactDOM.render( < App / > , document.getElementById("root"));