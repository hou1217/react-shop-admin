define(function(require, exports, module) {
  'use strict';
  var app = require('app');
  var intfApi = undefined;
  var userId = -1;
  var token = '';
  return {
    /**init方法先从cookie判断是否已经登录，并尝试用token登录**/
    init: function(callbackOnLogin, callbackNotLogin) {
      intfApi = this.getProxyedInterface();
      var _this = this;
      //检查Cookie登录状态
      _this.checkLogin(function() {
        if (userId <= 0 && _this.isFromApp()) //来自app并且cookie是未登录状态
        {
          userId = intfApi.checkLogin(); //APP需要返回用户id
          token = intfApi.getToken();
          setTimeout(function() {
            if (userId > 0) //表示APP已经登录，有token存在
            {
              //用xfjtoken来进行本地登录。
              _this.loginWithToken(token, callbackOnLogin);
            } else {
              if (callbackNotLogin) {
                callbackNotLogin();
              }
            }
          }, 100);
        } else if (userId < 0) {
          if (callbackNotLogin) {
            callbackNotLogin();
          }
        } else {
          if (callbackOnLogin) {
            callbackOnLogin();
          }
        }
      });
    },
    gotoLogin: function() {
      var _t = this;
      if (this.isFromApp()) {
        //app打开登录弹窗
        intfApi.gotoLogin();
      } else {

        _t.openLoginWindow();
      }
    },
    goAuth: function() {
      var _t = this;
      if (this.isFromApp()) {
        //app打开认证
        intfApi.goAuth();
      } else {
        window.location.href = "/ucenter/realname";

      }
    },
    goShare: function(title, desc, link, imgUrl) {
      var _t = this;
      if (this.isFromApp()) {
        //app打开认证
        intfApi.goShare(title, desc, link, imgUrl);
      } else {
        $.toast("点击右上角分享");
      }
    },
    //网页打开登录弹窗
    openLoginWindow: function() {
      window.location.href = "/login/index";
    },
    //是否是app浏览器
    isFromApp: function() {
      return typeof(androidApi) != "undefined" || (typeof(window.webkit) != "undefined" && typeof(window.webkit.messageHandlers) != "undefined" && typeof(window.webkit.messageHandlers.iosApi) != "undefined");
    },
    //获得代理接口
    getProxyedInterface: function() {
      if (typeof(androidApi) != "undefined") {
        console.log("android api found");
        return androidApi;
      } else if (typeof(window.webkit) != "undefined" && typeof(window.webkit.messageHandlers.iosApi) != "undefined") {
        console.log("IOS api found");
        return {
          checkLogin: function() {
            window.webkit.messageHandlers.iosApi.postMessage({
              "key": "checkLogin"
            });
            setTimeout(function() {
              userId = localStorage.getItem("ios_userId");
            }, 50);
          },

          getToken: function() {
            window.webkit.messageHandlers.iosApi.postMessage({
              "key": "getToken"
            });
            setTimeout(function() {
              token = localStorage.getItem("ios_token");
            }, 50);
          },

          gotoLogin: function() {
            window.webkit.messageHandlers.iosApi.postMessage({
              "key": "gotoLogin"
            });
          },
          goAuth: function() {
            window.webkit.messageHandlers.iosApi.postMessage({
              "key": "goAuth"
            });

          },
          goShare: function(title, desc, link, imgUrl) {
            window.webkit.messageHandlers.iosApi.postMessage({
              "key": "goShare",
              "title": title,
              "desc": desc,
              "link": link,
              "imgUrl": imgUrl
            });
          },
          goTrade: function() {
          }
        };
      } else {
        console.log("found nothing, assume it's a  normal web browser");
        return this;
      }
    },

    checkLogin: function(callback) {
      var that = this;
      app.utils.request({
        data: {},
        url: '/login/checkLogin',
        success: function(result) {
          if (result.status != 0) {
            console.log("调用接口失败:" + result.data);
            //出现错误的情况下每隔5秒继续调用
            window.setTimeout(function() {
              that.checkLogin(callback)
            }, 5000);
            return;
          }
          console.log("登录status：" + result.data);
          if (result.data > 0) {
            userId = result.data; //假设已经登录
          } else {
            userId = -1;
          }
          callback();
        }
      });
    },
    //使用token进行登录
    loginWithToken: function(ticket, callbackOnLogin) {
      app.utils.request({
        data: {
          'ticket': ticket
        },
        url: '/login/loginWithToken',
        success: function(result) {
          if (!result.status) {
            //登录成功
            console.log("自动登录成功");
            userId = result.data;
            if (callbackOnLogin) {
              callbackOnLogin();
            }
          } else {
            console.log("自动登录失败");
          }
        }
      });
    },
    getUserId: function() {
      return userId;
    }
  }
});
