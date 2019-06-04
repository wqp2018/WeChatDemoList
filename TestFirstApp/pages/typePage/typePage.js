// pages/typePage/typePage.js
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: {},
    pageSize:null
  },
  getType:function(type){
    wx.request({
      url: 'http://q1411603774.imwork.net:15699/WeChatTest/welcome/searchType/' + type,
      success: function (res) {
        wx.setNavigationBarTitle({
          title: res.data[0].ctname,
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var page = this;
    page.setData({ pageSize: options.type})
    //设置头部title
    this.getType(options.type);
    //获取列表
    wx.showLoading({
      title: '正在刷新',
      mask: true,
    }),
    wx.request({
      url: 'http://q1411603774.imwork.net:15699/WeChatTest/welcome/searchCommodByType/' + page.data.pageSize,
      success:function(res){
        page.setData({imgUrl:res.data});
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
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    var page = this;
    wx.showLoading({
      title: '正在刷新',
      mask: true,
    }),
    //获取列表
    wx.request({
      url: 'http://q1411603774.imwork.net:15699/WeChatTest/welcome/searchCommodByType/' + page.data.pageSize,
      success: function (res) {
        page.setData({ imgUrl: res.data });
        wx.stopPullDownRefresh();
        wx.hideLoading()
      }
    })
  },
  //点击单个商品进入商品详情页面
  toCommod: function (e) {
    wx.navigateTo({
      url: '../commod/commod?id=' + e.currentTarget.id,
    })
  }

  
})