//index.js
//获取应用实例
const app = getApp()
import api from "../../utils/api"

Page({
  data: {
    movies: [],
    start: 0,
    count: 10,
    total: 250,
    isLoading: true,
    isDone: true,
    scrollHeight: 0,
    
  },
  onLoad: function () {
    this.getMovesRank()
    this.getHeight()
  },
  getMovesRank() {
    this.data.isDone = false
    if (this.data.movies.length < 50 && !this.data.isDone) {
      api.getMoviesRank('/v2/movie/top250', { start: this.data.start, count: this.data.count })
       .then((res) => {
         this.data.start += 10
         this.data.movies = this.data.movies.concat(res.subjects)
         this.setData({ movies: this.data.movies, isLoading: false, isDone: true})
       })
    } else {
      wx.showToast({ title: '已经全部加载完了' })
    }
  },
  loadMore () {
    this.getMovesRank()
  },
})
