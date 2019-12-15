/**
 * 发送异步ajax请求函数
 * 封装ajax
 * 函数返回的是promise对象
 * 优化：
 *      统一处理请求异常
 */

import axios from "axios";

import { message } from "antd";

export default function ajax(url, data = {}, type = 'GET') {

    let promise;

    return new Promise((resolve, reject) => {
        // 执行异步ajax
        if (type === 'GET') {
            promise = axios.get(url, { // 配置对象
                params: data
            })
        } else if (type === 'POST') {
            promise = axios.post(url, data)
        }
        promise.then((res) => { // 成功
            resolve(res);
        }).catch((err) => {
            message.error(`请求出错了${err.message}`);
        })
    })


}