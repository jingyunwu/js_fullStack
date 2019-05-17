//app.js
App({
  onLaunch: function (options) {
    let self = this
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
        env: 'vn-l6uyl'
      })
    }

    this.globalData.shareParam = options.query
    // 查询用户是否授权
    wx.getSetting({
      success: (result) => {
        // 已经授权
        if (result.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: (infoRes) => {
             self.globalData.userInfo = infoRes.userInfo
             if (self.catchUserInfo) {
              self.catchUserInfo(infoRes.userInfo)
             } 


             // 如若是个旧用户
             wx.cloud.callFunction({
               name: 'createUser',
               data: {
                 userInfo: infoRes.userInfo,
                 avatarUrl: infoRes.userInfo.avatarUrl,
                 name: '',
                 nickName: infoRes.userInfo.nickName,
                 sex: infoRes.userInfo.gender
               }
             })
            },
            fail: (err) => {
              console.log(err)
            },
            complete: () => {}
          });
            
        } else {
          wx.redirectTo({
            url: '/pages/login/login',
            success: (result) => {
              
            },
            fail: () => {},
            complete: () => {}
          });
            
        } 
      },
      fail: (err) => {
        console.log(err)
      },
      complete: () => {}
    });

    wx.cloud.callFunction({
      name: 'getUserInfo',
      data: {},
      success(res) {
        self.globalData.userInfoFromCloud = res.result.storeUser
      }
    })
      
  },
  globalData: {
    currentGroupInfo: null,
    currentGroupUserList: [],
    currentBill: null,
    userInfo: null,
    shareParam: null,
    billId: '',
    userInfoFromCloud: null,
    userRemark: {}
  }
})
