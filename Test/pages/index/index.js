//index.js
//获取应用实例
const app = getApp()
const APP_ID = 'wx4130ffbbf85d2179';//输入小程序appid
const APP_SECRET = '8e96be202019d34cfd682cd859261ede';//输入小程序app_secret
var OPEN_ID = ''//储存获取到openid
var SESSION_KEY = ''//储存获取到session_key

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onLoad:function(){
    var page = this;
    wx.login({
      success: function (res) {
        console.log(res.code)
        wx.request({
          url: 'https://api.weixin.qq.com/sns/jscode2session?appid='+APP_ID+'&secret='+APP_SECRET+'&js_code='+res.code+'&grant_type=authorization_code',
          success: function (res) {
            console.log(res)
          }
        })
      }
    })

  },
  kk: function(){
    wx.getUserInfo({
      success: function (res) {
        console.log(res.userInfo)
      }
    })
  }
})
