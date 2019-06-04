Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var page = this;
    wx.showLoading({
      title: '正在加载中',
      mask: true,
    }),
    wx.request({
      url: 'http://q1411603774.imwork.net:15699/WeChatTest/welcome/showAllCommod',
      header: { 'content-type': 'application/json'},
      success: function(res) {
        console.log(res)
        page.setData({imgUrl:res.data});
        wx.hideLoading()
      },
    })

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
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
    
  },
  //点击单个商品进入商品详情页面
  toCommod: function (e) {
    wx.navigateTo({
      url: '../commod/commod?id=' + e.currentTarget.id,

    })
  }
})