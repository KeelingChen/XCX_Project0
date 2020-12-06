import {postList} from '../../data/data.js'
// console.log(postList)
// const app=getApp()
// console.log(app.test)
// pages/posts/posts.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {     
        //增加缓存   
        //  wx.setStorageSync('flag', true)
        // 修改缓存
        //  wx.setStorageSync('flag', false)
        //  删除指定缓存 
        //  wx.removeStorageSync('flag')
        //  增加一个新的缓存
        //  wx.setStorageSync('flag1', 666)
        //  获取指定缓存的信息
        //  const flag=wx.getStorageSync('flag1')
        //  console.log(flag)
        // wx.clearStorageSync()
        this.setData({
            postList
        })
        
    },
    toDetail:function(e){
        const pid=e.detail.pid
        console.log(e)
        wx.navigateTo({
          url: '/pages/post-detail/post-detail?pid='+pid,
        })
    },
    SwiperToDetail(e){
        const pid=e.currentTarget.dataset.id
        // console.log(e)
        wx.navigateTo({
          url: '/pages/post-detail/post-detail?pid='+pid,
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