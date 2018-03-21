// pages/search/search.js
import api from "../../utils/api.js" 
Page({
  data: {
    movies: [],
    isFirst: true
  },
  onLoad: function (options) {
  },
  search(e) {
    const value = e.detail.value
    if (value !== '') {
      api.search(`/v2/movie/search?q=${value}&tag=${value}`, {})
        .then((res) => {
          this.setData({ movies: res.subjects, isFirst: false })
        })
    }
  }
})