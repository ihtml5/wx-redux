//index.js
//获取应用实例
const app = getApp()
const { wxLoad } = require('../../reducers/home/index.js');

const { connect } = require('../../utils/wx-redux/index.js');
const mapStateToProps = (state) => {
  return {
    status: state.appStatus
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    refreshPage: () => {
      dispatch(wxLoad());
    }
  }
}
const defaultCfg = {
  data: {
    motto: 'Hello wxScalpel',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    console.log('app:::', app);
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
};

const pageCfg = connect(mapStateToProps, mapDispatchToProps)(defaultCfg);

Page(pageCfg);
