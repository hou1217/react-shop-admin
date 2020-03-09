import axios from 'axios'
const APP_HOST = process.env.REACT_APP_APP_HOST;

let instance = axios.create({
  baseURL:APP_HOST,
  timeout:5000
});
export default{
  
  loginPhone(params){
    console.log('调用登录接口');
    console.log(params);
    localStorage.setItem('USER_NAME', params.appUid || params.phoneNum);
    
    let url =  '/api/v1/auth/manager_login';
    return new Promise((resolve,reject) => {

      instance({
        method: 'POST',
        url: url,
        data: params
      })
      .then((res) => {
        console.log(res);
     
        resolve(res.data);
        
      })
      .catch((err)=>{
        console.error('数据异常：', err);
        reject(err)
      });
    })
  },
  /**Register
   * 注册
   * @param params
   */
  register(params){
    console.log('调用注册接口');
    console.log(params);
    let url =  '/authenticate-app/account/register/phone/do-register';
    return new Promise((resolve,reject) => {

      instance({
        method: 'POST',
        url: url,
        data: params
      })
      .then((res) => {
        console.log(res);
        if(res.data.state === '000000'){
          resolve(res.data);
        }else{
          reject(res)
        }
      })
      .catch((err)=>{
        console.error('数据异常：', err);
        reject(err)
      });
    })
  },
  resetPassword(params){
    console.log('重置密码');
    console.log(params);
    let url =  '/authenticate-app/account/pswd/reset/phone/do-reset';
    return new Promise((resolve,reject) => {

      instance({
        method: 'POST',
        url: url,
        data: params
      })
      .then((res) => {
        console.log(res);
        if(res.data.state === '000000'){
          resolve(res.data);
        }else{
          reject(res)
        }
      })
      .catch((err)=>{
        console.error('数据异常：', err);
        reject(err)
      });
    })
  },
  getCode(params){
    console.log('调用注册接口');
    console.log(params);
    let url =  '/authenticate-app/account/register/phone/send-code';
    return new Promise((resolve,reject) => {

      instance({
        method: 'POST',
        url: url,
        data: params
      })
      .then((res) => {
        console.log(res);
        if(res.data.state === '000000'){
          resolve(res.data);
        }else{
          reject(res)
        }
      })
      .catch((err)=>{
        console.error('数据异常：', err);
        reject(err)
      });
    })
  },
  getResetCode(params){
    console.log('调用注册接口');
    console.log(params);
    let url =  '/authenticate-app/account/pswd/reset/phone/send-code';
    return new Promise((resolve,reject) => {

      instance({
        method: 'POST',
        url: url,
        data: params
      })
      .then((res) => {
        console.log(res);
        if(res.data.state === '000000'){
          resolve(res.data);
        }else{
          reject(res)
        }
      })
      .catch((err)=>{
        console.error('数据异常：', err);
        reject(err)
      });
    })
  },
  getRouterList(params){
    const url =  '/security-app/permission/vue/router/list';
    return new Promise((resolve,reject) => {
      instance({
        method: 'POST',
        url: url,
        data:params,
        headers: {
          'WALLAN-TOKEN' : localStorage.getItem('ticket')?JSON.parse(localStorage.getItem('ticket'))["WALLAN-TOKEN"]:''
        }
      })
      .then((res) => {
        console.log(res);
        if(res.data.state === '000000'){
          resolve(res.data);
        }else{
          reject(res)
        }
      })
      .catch((err)=>{
        console.error('数据异常：', err);
        reject(err)
      });
    })
  },
  /**
   * 
   * @param {*} params 
   */
  logout(){
    console.log('调用退出接口');
    const url =  '/security-app/app/logout';
    return new Promise((resolve,reject) => {
      instance({
        method: 'POST',
        url: url,
        headers: {
          'WALLAN-TOKEN' : localStorage.getItem('ticket')?JSON.parse(localStorage.getItem('ticket'))["WALLAN-TOKEN"]:''
        }
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err)=>{
        console.error('数据异常：', err);
        reject(err)
      });
    })
  }
}
