// pages/movie-detail/movie-detail.js
import {
    convertToCastString,
    convertToCastsInfo
} from '../../utils/util.js'
const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        movie: {},
        amovie: {}
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        const mid = options.mid
        wx.request({
            url: app.gBaseUrl + 'subject/' + mid,
            success: (res) => {
                console.log(res.data)
                this.processMovieData(res.data)
                this.setData({
                    movie: res.data
                })
            }
        })
    },
    processMovieData(movie) {
        const data = {}
        data.directors = convertToCastString(movie.directors)
        data.casts = convertToCastString(movie.casts)
        data.genres = movie.genres.join('、')
        data.info=convertToCastsInfo(movie.casts)
        this.setData({
            amovie: data
        })
    },
    viewMoviePostImg() {
        wx.previewImage({
            urls: [this.data.movie.images.large],
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