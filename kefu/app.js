//app.js
App({
  openid:null,
  onLaunch: function () {
    var page = this;
    // 登录
    wx.login({
      success: res => {
        console.log(res)
        //发送 res.code 到后台换取 openId, sessionKey, unionId
        wx.request({
          //url: 'http://q1411603774.imwork.net:15699/WeChatTest/welcome/getOpenId/'+res.code,
          url: 'http://q1411603774.imwork.net:15699/WeChatTest/welcome/testt/' + res.code,
          header: {
            'content-type': 'application/json' // 默认值
          },
          success: function(res) {
            page.openid = res.data.openid;
            console.log(res)
          }
        })
      }
    })
  },
  globalData: {
    userInfo: null
  }
})