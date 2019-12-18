import React, { Component } from 'react';

import "./header.less";
/**
 * 头部导航组件
 */
class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header_top">
          <span>欢迎, Adimater</span>
          <a href="#">退出</a>
        </div>
        <div className="header_bottom">
          <div className="header_bottom_left">首页</div>
          <div className="header_bottom_right">
            <span>2019年12月18日23:26:05</span>
            {/*<img src={dayPictureUrl} alt="weather" />*/}
            
            <span>天气</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Header;