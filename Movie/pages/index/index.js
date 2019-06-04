//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2519994468.jpg',
      'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2518645794.jpg',
      'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2519726014.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    movies:null,
    message:null,
    hidden:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadMovie();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },
  dataToMessage(data){
    var title = data.original_title;
    var directors = data.directors;
    var members = data.casts;
    var country = data.countries[0];
    var genres = data.genres;

    //演员信息
    var member = "";
    for(var i in members){
      member += members[i].name + " / ";
    }
    if(member!=null){
      member = member.slice(0,-2);
    }
    console.log(data)


    //导演
    var director = "";
    for (var i in directors) {
      director += directors[i].name + " / ";
    }
    if (director != null) {
      director = director.slice(0, -2);
    }

    //类型
    var genre = "";
    for (var i in genres) {
      genre += genres[i] + " / ";
    }
    if (genre != null) {
      genre = genre.slice(0, -2);
    }

    var text = "名称 : " + title + "\n导演 : " + director + "\n演员 : " + member + "\n类型 : " + genre + "\n地区 : " + country + " | 上映年份 : " + data.year;

    data.text = text;
    
    
  },
  dataToMessages(datas){
    for(var i in datas){
      var data = datas[i];
      this.dataToMessage(datas[i])
    }
  },
  //连接电影数据API
  loadMovie: function(){
    var that = this;
    wx:wx.request({
      url: 'http://t.yushu.im/v2/movie/in_theaters',
      header: {'content-type': 'application/json'},
      success: function(res) {
        //获取一部电影中的详细信息
        that.dataToMessages(res.data.subjects);
        //显示电影列表和电影简略信息
        that.setData({movies:res.data.subjects,hidden:true})
        
      }
    }),
      wx.showToast({
        title: '成功',
        icon: 'loading',
        duration: 2000,
        mask: true
      })   
  },
  

  
})