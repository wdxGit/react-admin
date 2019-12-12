import React, { Component } from 'react';
import { Form, Icon, Input, Button } from 'antd';

import "./login.less";
import logo from "./images/logo.svg";

/**
 * 登录的路由组件
 */
class Login extends Component {

  handleSubmit = event => {
    // 阻止事件的默认行为
    event.preventDefault();
    // 得到from对象
    const form = this.props.form;
    // 获取输入数据 全部
    form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {

    // 得到form对象
    const form = this.props.form;
    const { getFieldDecorator } = form;
    return (
      <div className="login">
        <header className="login_header">
          <img src={logo} alt="" />
          <h1>React项目: 后台管理系统</h1>
        </header>
        <section className="login_content">
          <h2>用户登录</h2>

          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {
                /**
                 * getFieldDecorator 定义函数
                 * username 标识名称
                 */
                getFieldDecorator('username', {
                  rules: [{ required: true, message: 'Please input your username!' }],
                })(
                  <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="管理员"
                  />
                )
              }
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="密码"
                />
              )}
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                登录
              </Button>
            </Form.Item>
          </Form>
        </section>
      </div>
    )
  }
}

// auto form表单使用 Login是class名
// 导出新创建的常量 WrappedNormalLoginForm

/**
 * 高阶函数
 *    form.create()() getFieldDecorator()() 因为它返回一个函数
 * 
 *    1. 接收函数类型的参数
 *    2. 函数的返回值是函数
 *    3. 常见： 
 *      eg: setTimeOut()/ setInterVal()
 *          Promise(() => {}) then(res => {})
 *          数组遍历相关的方法： forEach filter map reduce find findIndex
 *          
 *          bind()
 *     高阶函数更加动态，更加具有扩展性
 * 
 * 
 * 高阶组件
 *    本质是一个函数
 *    接受一个组件（被包装组件），返回一个新的组件（包装组件），包装组件会向被包装组件传入特定的属性
 *    作用：扩展组件功能
 *    传入的要是组件，Form.Item不是 是标签
 *    高阶组件也是一个高阶函数，接收的是一个组件函数，返回一个组件函数
 */

/**
 * 包装form组件 生成一个新的组件 Login From
 * 新组件会像Form组件传递一个强大的对象属性：form
 */

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Login);
export default WrappedNormalLoginForm;

/**
 * 前台表单认证
 *    验证要求：
 *       1. 必须输入
 *       2. 必须大于4位
 *       3. 必须小于12位
 *       4. 必须是英文、数字、下划线组成
 * 收集表单输入数据
 */