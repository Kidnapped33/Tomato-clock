// pages/test/test.js
Page({
  data: {
    message:'first',
    number:1,
    togger:true,
    arr2:[{id:1,text:1},{id:2,text:2},{id:3,text:3}],
    arr:[1,2,3],
    str:"woshistr",
    str2:"我是反过来",
    array:[1,2,3],
    array2:[1,2,3],
    obj:{id:1,text:"i am 1"}
  },
  changeObjText(){
    this.setData({"obj.text": "i am 2"})
    console.log(1)
  },
  pushItem(){
let array2 = this.data.array
let newNumber = array2.push(array2.length + 1)
this.setData({array2})
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  useReverse(){
    this.setData({str2:this.data.str2.split('').reverse().join('')})},
  onShow: function () {
this.setData({str:"123123"})
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