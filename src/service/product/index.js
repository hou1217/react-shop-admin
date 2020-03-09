import axios from '@/service/axios.js'
// mock
const authors = {
  data:[
    {
      name: '漕河泾一店',
      value: 'author1'
    },
    {
      name: '漕河泾二店',
      value: 'author2'
    },
    {
      name: '漕河泾三店',
      value: 'author3'
    }
  ]
}
/**
 * 获取权限列表
 */
function getRightsList(params){
  return new Promise((resolve,reject) => {
    axios.post(`/security-app/permission/permission/list`,params)
    .then((res) => {
      resolve(res);
    })
    .catch((err)=>{
      reject(err);
    });
  })
}
/**
 * 获取活动列表
 */
function getProductList(params){
  return axios.get(`/api/v1/admin/products`,{params:params})
}
function getVuePathList(params){
  return new Promise((resolve,reject) => {
    axios.post(`/security-app/permission/vuepath/list`,params)
    .then((res) => {
      resolve(res);
    })
    .catch((err)=>{
      reject(err);
    });
  })
}
/**
 * 创建路径
 * @param params
 */
function createPath(params){
  return new Promise((resolve, reject) => {
    axios.post(`/security-app/permission/path/create`,params)
    .then((res) => {
      resolve(res);
    })
    .catch((err)=>{
      reject(err);
    });
  });
}
function createVuePath(params){
  return new Promise((resolve, reject) => {
    axios.post(`/security-app/permission/vuepath/create`,params)
    .then((res) => {
      resolve(res);
    })
    .catch((err)=>{
      reject(err);
    });
  });
}
function createRights(params){
  return new Promise((resolve, reject) => {
    axios.post(`/security-app/permission/permission/create`,params)
    .then((res) => {
      resolve(res);
    })
    .catch((err)=>{
      reject(err);
    });
  });
}
function addProduct(params){
  return new Promise((resolve, reject) => {
    axios.post(`/api/v1/admin/products`,params)
    .then((res) => {
      resolve(res);
    })
    .catch((err)=>{
      reject(err);
    });
  });
}
function getPathDetail(params){
  return new Promise((resolve, reject) => {
    axios.post(`/security-app/permission/path/detail`,params)
    .then((res) => {
      resolve(res);
    })
    .catch((err)=>{
      reject(err);
    });
  });
}
function getRightsDetail(params){
  return new Promise((resolve, reject) => {
    axios.post(`/security-app/permission/permission/detail`,params)
    .then((res) => {
      resolve(res);
    })
    .catch((err)=>{
      reject(err);
    });
  });
}
function getVuePathDetail(params){
  return new Promise((resolve, reject) => {
    axios.post(`/security-app/permission/vuepath/detail`,params)
    .then((res) => {
      resolve(res);
    })
    .catch((err)=>{
      reject(err);
    });
  });
}
/**
 * 获取类型列表
 */
function getActivityType(params){
  return new Promise((resolve,reject) => {
    axios.post(`/operation-app/campaign/type/list`,params)
    .then((res) => {
      resolve(res);
    })
    .catch((err)=>{
      reject(err);
    });
  })
}
/**
 * 获取角色详情
 */
function getRoleDetail(params){
  return new Promise((resolve,reject) => {
    axios.post(`/security-app/permission/role/detail`,params)
    .then((res) => {
      resolve(res);
    })
    .catch((err)=>{
      reject(err);
    });
  })
}
/**
 * 获取用户列表
 * @param {*} params
 */
function getAuthorList(params){
  return new Promise((resolve, reject) => {
    // axios({
    //   method: 'GET',
    //   url: searchAuthorUrl,
    //   params: params,
    //   headers: {
    //     'WALLAN-TOKEN' : JSON.parse(localStorage.getItem('SESSION_KEY'))?JSON.parse(localStorage.getItem('SESSION_KEY'))["token"]:''
    //   }
    // }).then((res) => {
    //   resolve(res);
    // }).catch((err) => {
    //   reject(err);
    // });
    
    resolve(authors);
  });
}
/**
 * 更新角色
 * @param params
 */
function updateRole(params){
  return new Promise((resolve, reject) => {
    axios.post(`/security-app/permission/role/update`,params)
    .then((res) => {
      resolve(res);
    })
    .catch((err)=>{
      reject(err);
    });
  });
}
function updatePath(params){
  return new Promise((resolve, reject) => {
    axios.post(`/security-app/permission/path/update`,params)
    .then((res) => {
      resolve(res);
    })
    .catch((err)=>{
      reject(err);
    });
  });
}
function updateVuePath(params){
  return new Promise((resolve, reject) => {
    axios.post(`/security-app/permission/vuepath/update`,params)
    .then((res) => {
      resolve(res);
    })
    .catch((err)=>{
      reject(err);
    });
  });
}
function updateRights(params){
  return new Promise((resolve, reject) => {
    axios.post(`/security-app/permission/permission/update`,params)
    .then((res) => {
      resolve(res);
    })
    .catch((err)=>{
      reject(err);
    });
  });
}
/**
 * 获取用户列表
 * @param params {page, pageSize, keyword}
 */
function getAccountsList(params){
  return new Promise((resolve,reject) => {
    axios.post(`/nakebao-admin-app/nakebao/administrator/search`,params)
    .then((res) => {
      resolve(res);
    })
    .catch((err)=>{
      reject(err);
    });
  })
}
/**
 * 获取用户信息
 * @param params {}
 */
function getAccountInfo(params){
  return new Promise((resolve,reject) => {
    axios.get(`/nakebao-admin-app/nakebao/administrator/get`,{params:params})
    .then((res) => {
      resolve(res);
    })
    .catch((err)=>{
      reject(err);
    });
  })
}
/**
 * 创建用户
 * @param params
 */
function createAccount(params){
  return new Promise((resolve, reject) => {
    axios.post(`/nakebao-admin-app/nakebao/administrator/create`,params)
    .then((res) => {
      resolve(res);
    })
    .catch((err)=>{
      reject(err);
    });
  });
}
/**
 * 修改用户
 * @param params
 */
function updateAccount(params){
  return new Promise((resolve, reject) => {
    axios.post(`/nakebao-admin-app/nakebao/administrator/update`,params)
    .then((res) => {
      resolve(res);
    })
    .catch((err)=>{
      reject(err);
    });
  });
}
/**
 * 激活用户
 * @param params
 */
function activateAccount(params){
  return new Promise((resolve, reject) => {
    axios.post(`/nakebao-admin-app/nakebao/administrator/active`,params)
    .then((res) => {
      resolve(res);
    })
    .catch((err)=>{
      reject(err);
    });
  });
}
/**
 * 删除用户
 * @param params
 */
function deleteAccount(params){
  return new Promise((resolve, reject) => {
    axios.post(`/nakebao-admin-app/nakebao/administrator/delete`,params)
    .then((res) => {
      resolve(res);
    })
    .catch((err)=>{
      reject(err);
    });
  });
}
function deletePath(params){
  return new Promise((resolve, reject) => {
    axios.post(`/security-app/permission/path/delete`,params)
    .then((res) => {
      resolve(res);
    })
    .catch((err)=>{
      reject(err);
    });
  });
}
function deleteRights(params){
  return new Promise((resolve, reject) => {
    axios.post(`/security-app/permission/permission/delete`,params)
    .then((res) => {
      resolve(res);
    })
    .catch((err)=>{
      reject(err);
    });
  });
}
function deleteRole(params){
  return new Promise((resolve, reject) => {
    axios.post(`/security-app/permission/role/delete`,params)
    .then((res) => {
      resolve(res);
    })
    .catch((err)=>{
      reject(err);
    });
  });
}
function deleteVuePath(params){
  return new Promise((resolve, reject) => {
    axios.post(`/security-app/permission/vuepath/delete`,params)
    .then((res) => {
      resolve(res);
    })
    .catch((err)=>{
      reject(err);
    });
  });
}
function deleteVuePathBatch(params){
  return new Promise((resolve, reject) => {
    axios.post(`/security-app/permission/vuepath/delete/batch`,params)
    .then((res) => {
      resolve(res);
    })
    .catch((err)=>{
      reject(err);
    });
  });
}
function deletePathBatch(params){
  return new Promise((resolve, reject) => {
    axios.post(`/security-app/permission/path/delete/batch`,params)
    .then((res) => {
      resolve(res);
    })
    .catch((err)=>{
      reject(err);
    });
  });
}
function orderVuePath(params){
  return new Promise((resolve, reject) => {
    axios.post(`/security-app/permission/vuepath/order`,params)
    .then((res) => {
      resolve(res);
    })
    .catch((err)=>{
      reject(err);
    });
  });
}
function orderPath(params){
  return new Promise((resolve, reject) => {
    axios.post(`/security-app/permission/path/order`,params)
    .then((res) => {
      resolve(res);
    })
    .catch((err)=>{
      reject(err);
    });
  });
}
/**
 * 批量激活用户
 * @param params
 */
function activateAccounts(params){
  return new Promise((resolve, reject) => {
    axios.post(`/nakebao-admin-app/nakebao/administrator/active-multi`,params)
    .then((res) => {
      resolve(res);
    })
    .catch((err)=>{
      reject(err);
    });
  });
}
/**
 * 批量删除用户
 * @param params
 */
function deleteAccounts(params){
  return new Promise((resolve, reject) => {
    axios.post(`/nakebao-admin-app/nakebao/administrator/delete-multi`,params)
    .then((res) => {
      resolve(res);
    })
    .catch((err)=>{
      reject(err);
    });
  });
}
const productApi = {
  getRightsList,
  getActivityType,
  getProductList,
  getVuePathList,
  getAuthorList,
  createPath,
  createVuePath,
  createRights,
  addProduct,
  getPathDetail,
  getRightsDetail,
  getRoleDetail,
  getVuePathDetail,
  updatePath,
  updateVuePath,
  updateRights,
  updateRole,
  getAccountsList,
  getAccountInfo,
  createAccount,
  updateAccount,
  activateAccount,
  deleteAccount,
  deletePath,
  deleteRights,
  deleteRole,
  deleteVuePath,
  deleteVuePathBatch,
  deletePathBatch,
  orderVuePath,
  orderPath,
  activateAccounts,
  deleteAccounts
}
export default productApi

