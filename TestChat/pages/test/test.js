Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: [["亚洲", "欧洲"], ['中国', '阿富汗']],
    index: [0, 0]
  },
  bindMultiPickerColumnChange: function (e) {
    console.log(e.detail.column + "列，", e.detail.value + "行");

    var data = {
      array : this.data.array,
      index : this.data.index
    }

    data.index[e.detail.column] = e.detail.value;

    switch(e.detail.column){
      case 0 :
        switch(e.detail.value){
          case 0: 
            console.log("触发0")
            data.array[1] = ['中国', '阿富汗'];
            break;
          case 1:
            console.log("触发1")
            data.array[1] = ['德国', '英国'];
            break;
        }
    };


    this.setData({
      array : data.array, 
      index : data.index
    })
  },
  bindMultiPickerChange: function(){
    var array = this.data.array;
    var index = this.data.index;
    console.log(array)
    console.log(array[0][index[0]] + " , " + array[1][index[1]])
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  }

  
})