Page({

  /**
   * 页面的初始数据
   */
  data: {
    id : null,
    imgUrls: {},
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({id:options.id});
    var page = this;
    wx.showLoading({
      title: '正在努力加载中',
      mask: false
    })
    wx.request({
      url: 'http://q1411603774.imwork.net:15699/WeChatTest/welcome/searchCommodById/'+ page.data.id,
      header: { 'content-type': 'application/json'},
      success: function(res) {
        console.log(res.data[0])
        page.setData({ imgUrls: res.data[0]});
        wx.hideLoading();
      }
    })
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
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
    
  }
})