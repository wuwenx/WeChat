Page({
  data: {
    current: {
      poster: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000003bSL0v4bpKAx.jpg?max_age=2592000',
      name: '等你下课',
      author: '周杰伦',
      src: 'http://dl.stream.qqmusic.qq.com/C100001J5QJL1pRQYB.m4a?vkey=91A134958047EC04A21B8BFB7E9107BACB69E05A534FE40D340F735D128ADD558310154230F4BC6CE6710F441F0CB82636782DE73A72ABD4&fromtag=66'
    },
    audioAction: {
      method: 'pause'
    }
  },
  onPullDownRefresh:function()
  {
    //下拉刷新执行
     console.log(1);
  },
  onShareAppMessage:function(res)
  {
    //只有定义了此事件处理函数，右上角菜单才会显示“转发”按钮
    //button：页面内转发按钮；menu：右上角转发菜单
    if (res.from ="menu")
    {
      console.log(res.target)
    }
    return {
      title: '你转发了武文祥的小程序',
      path: '/logs/logs'
    }
  },
  audioPlayed: function (e) {
    console.log('audio is played')
  },
  audioTimeUpdated: function (e) {
    debugger
    this.duration = e.detail.duration;
  },

  timeSliderChanged: function (e) {
    if (!this.duration)
      return;

    var time = this.duration * e.detail.value / 100;

    this.setData({
      audioAction: {
        method: 'setCurrentTime',
        data: time
      }
    });
  },
  playbackRateSliderChanged: function (e) {
    this.setData({
      audioAction: {
        method: 'setPlaybackRate',
        data: e.detail.value
      }
    })
  },

  playAudio: function () {
    this.setData({
      audioAction: {
        method: 'play'
      }
    });
  },
  pauseAudio: function () {
    this.setData({
      audioAction: {
        method: 'pause'
      }
    });
  }
})