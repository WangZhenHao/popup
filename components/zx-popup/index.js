/**
 * author   wzh
 * created  2018-10-21
 * updated  2019-3-5
 * 
 * 对话框zx-popup使用方法
 *
 * <zx-popup id="..." zx-class="..." popup-visible="{{...}}}" zx-postion="..." modal="{{...}}" z-index="{{...}}" bind:popupStatus="popupChange" close-on-click-modal="{{true}}">
 * 	  <view>
 * 	  	.....
 * 	  </view>
 * </zx-popup>
 *
 * zx-class     外部定义的class 
 * id           弹窗id				通过方法传入
 * 									id获取组件里面的内容
 * 									
 * popup-visible       显示或者隐藏对话框 	true|false          		默认隐藏
 * zx-postion          内容位置			    bottom|top|middle|let   	默认bottom 
 * modal		       是否显示背景         true|false         	 		默认true
   z-index             弹窗层级             Number              		默认99

 * close-on-click-modal 是否可以通过点击 modal 层来关闭 popup
   popupStatus          显示或者隐藏的回调函数:主要是因为如果点击了弹层,组件内容的popupVisible被改变了
 * 				但是外面的popupVisible没有改变,就会导致数据不统一的情况
 * 
 */

Component({
	externalClasses: ['zx-class'],
	properties: {
		popupVisible: {
			type: Boolean,
			value: false,
			observer(value) {
				this.triggerEvent('popupStatus', value)
				this.chnageAnimateName(value);
			}
		},
		animateType: {
			type: Boolean,
			value: false
		},
		zxPosition: {
			type: String,
			value: 'bottom'
		},
		modal: {
			type: Boolean,
			value: true
		},
		zIndex: {
			type: Number,
			value: 100
		},
		closeOnClickModal: {
			type: Boolean,
			value: true
		}
	},
	data: {
		popTransName: '',
		showdowTransName: '',
		_showHide: false
	},
	methods: {
		chnageAnimateName(type) {
			let popTransName = '',
			    showdowTransName = ''
			if(type) {
				popTransName = this.data.zxPosition + '-enter-animated';
				showdowTransName = 'showdow-enter';
				this.setData({
					_showHide: type
				})
			} else {
				popTransName = this.data.zxPosition + '-leave-animated';
				showdowTransName = 'showdow-leave';
				setTimeout(() => {
					this.setData({
						_showHide: false
					})
				}, 150)
			}

			this.setData({
				popTransName: popTransName,
				showdowTransName: showdowTransName,
				
			})
		},
		clickModal() {
			if(this.data.closeOnClickModal) {
				this.hidePop();
			}
		},
		hidePop() {
			this.chnageAnimateName(false)
			setTimeout(() => {
				this.setData({
					_showHide: false,
					popupVisible: false
				})
			}, 150)
			
		}
	}
})