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

module.exports = {
    getMoviesRank
}