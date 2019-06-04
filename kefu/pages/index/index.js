//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    date: "2018-08-03",
  },
  
  onLoad: function () {
    wx.request({
      url: 'https://api.weixin.qq.com/cgi-bin/message/wxopen/template/send?access_token=ACCESS_TOKEN',
      data: '',
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  bindDateChange: function(res){
    this.setData({date:res.detail.value})
  },
  formSubmit: function(e){

    
    var formId = e.detail.formId;
    var openId = app.openid;
    var site = e.detail.value.site;
    var date = e.detail.value.date;
    var name = e.detail.value.name;
    var price = e.detail.value.price;

    console.log("openId : "+openId)

    wx.request({
      url: 'http://q1411603774.imwork.net:15699/WeChatTest/welcome/getAccessToken',
      data: {
        formId: formId,
        site: site,
        date: date,
        name: name,
        openId: openId,
        price: price
      },
      header: {
        'content-type': 'application/json'
      },
      success: function(res) {
        console.log(res)
      },
      fail: function(res) {},
    })


  },
  go: function(){
    wx.makePhoneCall({
      phoneNumber: '1340000' //仅为示例，并非真实的电话号码
    })
  }
  
})
