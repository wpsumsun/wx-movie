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
    isLoading: true
  },
  onLoad: function () {
    this.getMovesRank()
  },
  getMovesRank() {
    if (this.data.movies.length <= 250) {
      api.getMoviesRank('/v2/movie/top250', { start: this.data.start, count: this.data.count })
       .then((res) => {
         this.data.start += 10
         this.setData({ isLoading: false, movies: res.subjects})
       })
    }
  },

})
