import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'


import { reqIp, reqWeather } from "./../../api/index";
import menuList from "../../config/menuConfig";

// moment时间插件
import moment from "moment";

import "./header.less";

/**
 * 头部导航组件
 */
class Header extends Component {

  state = {
    cond_code: "999", // 天气图片
    cond_txt: "", // 当前天气
    nowTime: "", // 当前时间
  };

  // 获取当前天气
  getWeather = async () => {
    const resIp = await reqIp();
    if (resIp.data.dma_code === "0") {
      const {ip} = resIp.data;
      const resWeather = await reqWeather(ip);
      // console.log(resWeather);
      const { cond_code } = resWeather.data.HeWeather6[0].now;
      const { cond_txt } = resWeather.data.HeWeather6[0].now;
      // console.log(cond_txt);
      this.setState({
        cond_code,
        cond_txt
      });
    }
  };

  // 获取当前时间
  getNowTime = () => {
    setInterval(() => {
      let nowTime = moment().format('YYYY-MM-DD HH:mm:ss');
      this.setState({nowTime});
    }, 1000);
  };

  getTitle = () => {
    // 得到当前请求路径
    const { pathname } = this.props.location;
    let title;
    menuList.forEach((element) => {
      if (element.key === pathname) { // 如果当前element对象的key和path一样，item的title就是要显示的title
        title = element.title;
      } else if (element.children) {
        // 在所有子item中查找匹配的
        const cItem = element.children.find(cItem => pathname.indexOf(cItem.key)===0);
        if (cItem) {
          title = cItem.title;
        }
      }
    });
    return title;
  };

  componentDidMount = () => {
    this.getWeather();
    this.getNowTime();
  };


  render() {
    
    // 得到标题 路由名
    const title = this.getTitle();

    return (
      <div className="header">
        <div className="header_top">
          <span>欢迎, Adimater</span>
          <a href="#">退出</a>
        </div>
        <div className="header_bottom">
          <div className="header_bottom_left">{title}</div>
          <div className="header_bottom_right">
            <span>{this.state.nowTime}</span>
            <img src={require(`../../assets/images/weather/${this.state.cond_code}.png`)} alt="天气" />
            <span>{this.state.cond_txt}</span>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Header);