/** 入口js */

// 1. 渲染app标签

import React from 'react';
import ReactDom from 'react-dom';

import App from "./APP";

// 1.2 加载app标签 渲染到index的root上
ReactDom.render(<App/>, document.getElementById("root"));