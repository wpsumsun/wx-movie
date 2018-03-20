// pages/detail/detail.js
import api from "../../utils/api.js"
Page({
  data: {
    detail: {},
    isLoading: true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (query) {
    api.getMovieDetail(`/v2/movie/subject/${query.id}`, {})
       .then((res) => {
         console.log(res)
         this.setData({ detail: res, isLoading: false })
         console.log(this.data)
       })
  },

})