const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:null,
    login:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.login({
      success: function(res) {
        console.log(res)
      }
    })
  },
  getUserInfo: function(){
    var page = this;
    wx.getUserInfo({
      success: function(res){
        console.log(res.userInfo);
        page.setData({login:false,userInfo:res.userInfo});
      }
    })
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})