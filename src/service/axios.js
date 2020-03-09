import axios from 'axios'
import {getToken} from '../utils/auth'
const APP_HOST = process.env.REACT_APP_APP_HOST;
const instance = axios.create({
  baseURL: APP_HOST,
  timeout: 5000
})
// 添加请求拦截器
instance.interceptors.request.use( config => {
  config.headers['authorization'] = "Bearer "+getToken()
  return config;
},  error => {
  // 对请求错误做些什么
  return Promise.reject(error);
});
// axios响应拦截器
instance.interceptors.response.use((res) => {
  // console.log(res);
  return res.data;
}, error => {
  console.log(error);
  return Promise.reject(error);
})

export default instance;
