import api from "../../utils/api.js"
Page({

  data: {
    location: {}
  },

  onLoad: function (options) {
    api.getLocation()
      .then((location) => {
        this.setData({ location })
      })
  },
})