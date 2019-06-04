//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    logo:[
      "http://q1411603774.imwork.net:15699/WeChatTest/public/images/logo.png",
      "http://q1411603774.imwork.net:15699/WeChatTest/public/images/logo2.png",
      "http://q1411603774.imwork.net:15699/WeChatTest/public/images/logo4.png"
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    skirtImg: {},
    clothImg: {},
    txImg: {}
  },
  onLoad: function(){
    var page = this;

    //获得两件裙子信息
    wx.request({
      url: 'http://q1411603774.imwork.net:15699/WeChatTest/welcome/showSkirtTwo',
      header: { 'content-type': 'application/json'},
      success: function(res) {
        page.setData({skirtImg: res.data});
      },
      
    });
    wx.request({
      url: 'http://q1411603774.imwork.net:15699/WeChatTest/welcome/showClothTwo',
      header: { 'content-type': 'application/json' },
      success: function (res) {
        page.setData({clothImg: res.data});
      },
    });
    wx.request({
      url: 'http://q1411603774.imwork.net:15699/WeChatTest/welcome/showTxTwo',
      header: { 'content-type': 'application/json' },
      success: function (res) {
        page.setData({ txImg: res.data });
      },
    });
    
  },

  //跳转单个类型页面
  toSkirtPage: function () {
    wx.navigateTo({
      url: '../typePage/typePage?type=' + 1,
    })
  },
  toClothPage: function () {
    wx.navigateTo({
      url: '../typePage/typePage?type=' + 3,
    })
  },
  toTxPage:function(){
    wx.navigateTo({
      url: '../typePage/typePage?type=' + 2,
    })
  },
  //点击单个商品进入商品详情页面
  toCommod:function(e){
    wx.navigateTo({
      url: '../commod/commod?id='+e.currentTarget.id,
      
    })
  }
  
  
  
})
