# 小程序弹框组件

### 仿照mint-ui的弹框而做的小程序弹框组件

![AreaInertailScroll](https://github.com/WangZhenHao/popup/blob/master/images/popup.gif)


[代码片段: https://developers.weixin.qq.com/s/kM0vQFmP7O6D](https://developers.weixin.qq.com/s/kM0vQFmP7O6D)  

```
	 对话框zx-popup使用方法
 <zx-popup 
  id="..." 
  zx-class="..." 
  popup-visible="{{...}}}" 
  zx-postion="{{...}}" 
  modal="{{...}}" 
  z-index="{{...}}" 
  bind:popupStatus="popupChange" 
  close-on-click-modal="{{true}}"
 >
     <view>
       .....
     </view>
  </zx-popup>
 
  zx-class                 外部定义的class 
  id                       弹窗id通过方法传入id获取组件里面的内容
                     
  popup-visible           显示或者隐藏对话框           true|false               默认隐藏
  zx-postion              内容位置                    bottom|top|middle|let     默认bottom 
  modal                   是否显示背景                  true|false              默认true
  z-index                 弹窗层级                     Number                   默认99

  close-on-click-modal   是否可以通过点击 modal 层来关闭弹框    true|fasle      默认true

  popupStatus            显示或者隐藏的回调函数:主要是因为如果点击了弹层,组件内容的popupVisible被改变了
         但是外面的popupVisible没有改变,就会导致数据不统一的情况
```


