wx.serviceMarket.invokeService({
  service: 'wxe22270cb76412267',
  api: 'authorizedMusicExpress',
  "data": {
    // 获取歌单分类信息，其他接口类似
    "action": "DescribeStations",
    "data": {
      "length": 30,  // 条数，必须大于0且小于30
      "offset": 0    // offset (Default = 0)，(当前页-1) * length
    }
  }
}).then(res => console.log(res, 120120))
