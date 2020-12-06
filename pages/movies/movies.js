// pages/movies/movies.js
const app=getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        inTheaters:[],
        commingSoon:[],
        top250:[],
        searchResult:false,
        searchData:[]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        const that=this
        // 0
        wx.request({
          url: app.gBaseUrl+'in_theaters',
          data:{
            start:0,
            count:3
          },
          success(res){
            // console.log(res)
            that.setData({
                inTheaters:res.data.subjects
            })
          }
        })
        // 1
        wx.request({
            url: app.gBaseUrl+'coming_soon',
            data:{
              start:0,
              count:3
            },
            success(res){
            //   console.log(res.data)
              that.setData({
                commingSoon:res.data.subjects
              })
            }
          })
        //   2
          wx.request({
            url: app.gBaseUrl+'top250',
            data:{
              start:0,
              count:3
            },
            success(res){
            //   console.log(res.data)
              that.setData({
                  top250:res.data.subjects
              })
            }
          })
    },
    onGotoMore(e){
      // console.log(e.currentTarget.dataset.type)
      const type=e.currentTarget.dataset.type
      wx.navigateTo({
        url: '/pages/more-movie/more-movie?type='+type,
      })
    },
    onConfirm(e){
      this.setData({
        searchResult:true
      })
      wx.request({
        url: app.gBaseUrl+'search',
        data:{
          q:e.detail.value
        },
        success:(res)=>{
          this.setData({
            searchData:res.data.subjects
          })
        }
      })
    },
    onSearchCancel(e){      
      this.setData({
        searchResult:false
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