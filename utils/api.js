const host = "http://t.yushu.im"

function getMoviesRank(url, data) {
    return new Promise((resolve, reject) => {
        wx.request({
            url: `${host}${url}`,
            data,
            success(res) {
                if (res.data.subjects) {
                    resolve(res.data)
                } else {
                    reject({ status: 'error', msg: '获取Top250电影失败' })
                }
            },
            fail() {
                reject({ status: 'error', msg: '获取Top250电影失败' })
            }
        })
    })
}

function getMoviesReleasing(url, data) {
    return new Promise((resolve, reject) => {
        wx.request({
            url: `${host}${url}`,
            data,
            success(res) {
                if (res.data.subjects) {
                    resolve(res.data)
                } else {
                    reject({ status: 'error', msg: '获取正在上映电影失败' })
                }
            },
            fail() {
                reject({ status: 'error', msg: '获取正在上映电影失败' })
            }
        })
    })
}

function getMovieDetail(url, data) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${host}${url}`,
      data,
      success(res) {
        if (res.data) {
          resolve(res.data)
        } else {
          reject({ status: 'error', msg: '获取电影详情失败' })
        }
      },
      fail() {
        reject({ status: 'error', msg: '获取电影详情失败' })
      }
    })
  })
} 

function search(url, data) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${host}${url}`,
      data,
      success(res) {
        if (res.data.subjects) {
          resolve(res.data)
        } else {
          reject({ status: 'error', msg: '搜索失败' })
        }
      },
      fail() {
        reject({ status: 'error', msg: '搜索失败' })
      }
    })
  })
}

function getLocation() {
  return new Promise((resolve, reject) => {
    wx.getLocation({
      type: 'wgs84',
      success(res) {
        var latitude = res.latitude
        var longitude = res.longitude
        resolve({ latitude, longitude})
      },
      fail() {
        reject({ status: 'error', msg: '获取地理位置失败' })
      }
    })
  })
}

module.exports = {
    getMoviesRank,
    getMoviesReleasing,
    getMovieDetail,
    search,
    getLocation
}