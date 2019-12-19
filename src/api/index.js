/**
 * 包含所有接口函数
 */

import ajax from "./ajax";
const BASE = "";

// 登录接口
export const reqLogin = (username, password) => ajax(BASE + "/login", { username, password }, "POST");

// 添加用户
export const reqAddUser = user => ajax(BASE + "/manage/user/add", user, "POST");

// 获取ip
export const reqIp = () => ajax("https://ip.seeip.org/geoip");

// 获取天气
export const reqWeather = (location, key = "935896ee043b42878ec15569226f3710") => ajax("https://free-api.heweather.net/s6/weather/", { location, key });