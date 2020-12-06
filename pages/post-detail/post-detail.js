// pages/post-detail/post-detail.js
import {postList} from '../../data/data.js'
const app=getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        postData:{},
        _pid:null,
        collected:false,
        _collected:{},
        isPlaying:false,
        _mgr:null,
        _musicStatus:{}
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        const postData=postList[options.pid]
        this.data._pid=options.pid
        // 获取收藏缓存的对象
        const postCollection=wx.getStorageSync('collected')
        this.data._collected=postCollection
        // console.log(postCollection)//输出的是一个对象
        // 读取当前文章的收藏情况
        let collected=postCollection[this.data._pid]
        if(collected==undefined){
            collected=false
        }                
        // if(app.gIsPlaying[this.data._pid]==undefined){
        //     app.gIsPlaying[this.data._pid]=false
        // }
        this.setData({
            postData,
            collected,
            isPlaying:this.currentMusicIsPlaying()
        })
       const mgr=wx.getBackgroundAudioManager()
       this.data._mgr=mgr  
       mgr.onPlay(this.onMusicStart)
       mgr.onPause(this.onMusicStop)
    },
    async onCollect(){
        // // 创建开关，用来判断此时的收藏状态
        const collect_status=this.data.collected
        // // 创建缓存对象
        const postCollected=this.data._collected
        // // 将某篇文章的缓存值变为true
        // postCollected[this.data._pid]=true
        // // 写入缓存
        // wx.setStorageSync('collected', postCollected)        
        // // 绑定数据
        // this.setData({
        //     collected:true
        // })        
        if(collect_status){
            postCollected[this.data._pid]=false
            wx.setStorageSync('collected', postCollected)
            this.setData({
                collected:false
            })
        }else{
            postCollected[this.data._pid]=true
            wx.setStorageSync('collected', postCollected)
            this.setData({
                collected:true
            })
        }
        wx.showToast({
          title: this.data.collected?'收藏成功':'取下收藏',
          duration:1000
        })
        // 强提示演示
        // const result=await wx.showModal({
        //   title:'是否收藏'
        // })
        // // console.log(result)
        // if(result.confirm){
        //     postCollected[this.data._pid]=true
        //     wx.setStorageSync('collected', postCollected)
        //     this.setData({
        //         collected:true
        //     })
        // }else{
        //     postCollected[this.data._pid]=false
        //     wx.setStorageSync('collected', postCollected)
        //     this.setData({
        //         collected:false
        //     })
        // }

    },
    onShare(){
        wx.showActionSheet({
          itemList: ['分享到QQ','分享到朋友圈','分享到空间'],
        })
    },
    currentMusicIsPlaying(){
        if(app.gIsPlaying&&app.gIsPlayingPostId==this.data._pid){
            return true
        }
        return false
    },
    onMusicStart(){
        //一般设置了title和src，就不用显示的调用
        const mgr=this.data._mgr        
        mgr.src=this.data.postData.music.url
        // title没有的话，无法播放
        mgr.title=this.data.postData.music.title        
        this.setData({
            isPlaying:true
        })
        app.gIsPlaying=true
        app.gIsPlayingPostId=this.data._pid
    },
    onMusicStop(){
        const mgr=this.data._mgr
        mgr.pause()
        app.gIsPlaying=false
        app.gIsPlayingPostId=-1
        this.setData({
            isPlaying:false
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