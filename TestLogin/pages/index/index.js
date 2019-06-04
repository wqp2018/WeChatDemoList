//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
  

  },
  getInfo: function(){
    var page = this;
    wx.request({
      url: 'http://q1411603774.imwork.net:15699/index.php/welcome/showCommodFour',
      success: function(res){
        console.log(res.data)
        page.setData({userinfo:res.data})
      }
    })
  }
  
})
