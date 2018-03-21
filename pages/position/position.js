import api from "../../utils/api.js"
Page({

  data: {
    location: {},
    markers: [{
      iconPath: "../../images/icon-location.png",
      id: 0,
      latitude: null,
      longitude: null,
      width: 50,
      height: 50
    }],
  },

  onLoad: function (options) {
    var latitude = "markers[0].latitude"
    var longitude = "markers[0].longitude"
    api.getLocation()
      .then((location) => {
        this.setData({ location, [latitude]: location.latitude, [longitude]: location.longitude,  })
      })
  },
})