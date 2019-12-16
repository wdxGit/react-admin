import React, { Component } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/images/logo.svg";

// 引入样式
import "./LeftNav.less";

import { Menu, Icon } from "antd";
const { SubMenu } = Menu;

/**
 * 左侧导航组件
 */
class LeftNav extends Component {
  state = {
    collapsed: false
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    return (
      <div className="left_nav">
        <Link to="/" className="left_nav_header">
          <img src={logo} alt="logo" />
          <h1>React 后台</h1>
        </Link>
        <Menu mode="inline" theme="dark">
          <Menu.Item key="/home">
            <Link to="/home">
              <Icon type="home" />
              <span>首页</span>
            </Link>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="mail" />
                <span>商品</span>
              </span>
            }
          >
            <Menu.Item key="/category">
              <Link to="/category">
                <Icon type="mail" />
                <span>品类管理</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="/product">
              <Link to="/product">
                <Icon type="mail" />
                <span>商品管理</span>
              </Link>
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="/user">
            <Link to="/user">
              <Icon type="user" />
              <span>用户管理</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="/role">
            <Link to="/role">
              <Icon type="user" />
              <span>角色管理</span>
            </Link>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default LeftNav;
