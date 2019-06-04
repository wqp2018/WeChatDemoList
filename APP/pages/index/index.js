//index.js
//获取应用实例
const app = getApp()
var util = require('../../utils/util.js')

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    movie:[
      '电影',
      "小电影",
      "大电影"
    ]
  },
  
  onLoad: function () {
    wx.getLocation({
      type: 'wgs84 ',
      altitude: true,
      success: function(res) {
        console.log(res)
      },
    })
  },
  kk: function(){
    wx.authorize({
      scope: 'scope.userLocation',
      success: function (res) {
        wx.chooseAddress({
          success: function(res) {
            console.log(res)
          },
          fail: function(res) {},
        })
      },
    })
  },
  jj:function(){
    wx.getSetting({
      success: function(res) {
        if(res.authSetting['scope.userLocation']){
          console.log("已授权")
        }else{
          console.log("未授权")
        }
      },
    })
  },
  settingPage: function(){
    wx.openSetting({
      success: function(res) {
        console.log(res)
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  sc: function(){
    util.kk();
  }
 
})