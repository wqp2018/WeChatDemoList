//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    //第一级
    brands: {},
    //第二级
    objects: [],
    bindex: 0,
    oindex: 0,
    bjectArray: [
      {
        brand: "博世",
        id: 0,
        array: ["博世喷油器配件", "博世传感器", "杰克赛尔配件", "博世油泵配件", "博世共轨管配件", "博世泵喷嘴"]
      },
      {
        brand: "德尔福",
        id: 1,
        array: ["德尔福喷油器配件", "德尔福传感器", "德尔福油泵", "德尔福共轨管配件", "德尔福滤清器", "德尔福电脑版ECU", "德尔福机油", "德尔福维修部件"]
      },
      {
        brand: "卡特",
        id: 2,
        array: ["卡特传感器", "卡特C7C9泵喷嘴", "卡特共轨配件"]
      },
      {
        brand: "康明斯",
        id: 3,
        array: ["西康配件", "东风康明斯", "福田康明斯"]
      }
    ]
  },
  onLoad: function () {
    var barr = this.data.bjectArray;

    var l = this.data.bjectArray.length;
    var page = this;
    var brands = [];

    for(var i = 0; i < l; i++){
        brands.push(barr[i].brand)
    }

    this.setData({
      brands: brands,
      objects: barr[this.data.bindex].array
    })
  
  },
  bindPickerChangeB: function (e) {
    var barr = this.data.bjectArray;
    this.setData({
      bindex: e.detail.value,
      oindex: 0,
    })
    this.setData({ objects: barr[this.data.bindex].array })
  },
  bindPickerChangeO: function(e){
    this.setData({
      oindex: e.detail.value
    })
  }
  
})
