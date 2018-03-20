// pages/release/release.js
import api from "../../utils/api"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies: [],
    isLoading: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    api.getMoviesReleasing("/v2/movie/in_theaters", {})
       .then((res) => {
         this.setData({ movies: res.subjects, isLoading: false })
       })
  },
})