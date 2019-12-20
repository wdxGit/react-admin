import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import LinkBtn from "./../../components/LinkBtn/LinkBtn";
import { Modal } from "antd";

import { reqIp, reqWeather } from "./../../api/index";
import menuList from "../../config/menuConfig";

import memoryUtils from "../../utils/memoryUtils";
import storageUtils from "../../utils/storageUtils";

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
    this.intervalId = setInterval(() => {
      let nowTime = moment().format('YYYY-MM-DD HH:mm:ss');
      this.setState({ nowTime });
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
        const cItem = element.children.find(cItem => pathname.indexOf(cItem.key) === 0);
        if (cItem) {
          title = cItem.title;
        }
      }
    });
    return title;
  };

  /** 退出登录 */
  logOut = () => {
    Modal.confirm({
      content: '是否退出登录',
      okText: '退出',
      cancelText: '取消',
      onOk: () => { // 使用箭头函数 会使用外部的this
        // console.log('OK');
        // 删除保存数据
        storageUtils.removeUser();
        memoryUtils.user = {};
        // 跳转到login
        this.props.history.replace("/login");
      }
    });
  }

  componentDidMount = () => {
    this.getWeather();
    this.getNowTime();
  };

  /** 在当前组件卸载之前 */
  componentWillUnmount = () => {
    // 清除定时器
    clearInterval(this.intervalId);
  };
  

  render() {

    // 得到标题 路由名
    const title = this.getTitle();

    return (
      <div className="header">
        <div className="header_top">
          <span>欢迎, Adimater</span>
          <LinkBtn onClick={this.logOut}>退出</LinkBtn>
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