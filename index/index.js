const app = getApp()

Page({
  data: {
  	left: false,
  	top: false,
  	middle: false,
  	bottom: false,
  	right: false
  },
  onLoad: function () {
    // setInterval(() => {
    // 	this.showPop();
    // }, 2000)
  },
  rightPopHandle(e) {
  	this.data.right = e.detail;
  },
  popupStatusHandle(e) {
  	this.data.left = e.detail;
  },
  leftPop() {
  	this.data.left = !this.data.left;
  	this.setData({
  		left: this.data.left
  	})
  },
  rightPop() {
  	this.data.right = !this.data.right;
  	this.setData({
  		right: this.data.right
  	})
  },
  middlePop() {
  	this.setData({
  		middle: true
  	})
  },
  topPop() {
  	this.setData({
  		top: true
  	})
  },
  bottomPop() {
  	this.setData({
  		bottom: true
  	})
  }
})
