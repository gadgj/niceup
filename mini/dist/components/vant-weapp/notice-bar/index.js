(wx["webpackJsonp"]=wx["webpackJsonp"]||[]).push([[67],{197:function(t,i,e){"use strict";e.r(i);var n=e(6),a=e(5),o=e(10);Object(a["a"])({props:{text:{type:String,value:"",observer:function(){var t=this;wx.nextTick((function(){t.init()}))}},mode:{type:String,value:""},url:{type:String,value:""},openType:{type:String,value:"navigate"},delay:{type:Number,value:1},speed:{type:Number,value:50,observer:function(){var t=this;wx.nextTick((function(){t.init()}))}},scrollable:{type:Boolean,value:!0},leftIcon:{type:String,value:""},color:String,backgroundColor:String,background:String,wrapable:Boolean},data:{show:!0},created:function(){this.resetAnimation=wx.createAnimation({duration:0,timingFunction:"linear"})},destroyed:function(){this.timer&&clearTimeout(this.timer)},methods:{init:function(){var t=this;Promise.all([this.getRect(".van-notice-bar__content"),this.getRect(".van-notice-bar__wrap")]).then((function(i){var e=Object(n["a"])(i,2),a=e[0],o=e[1];if(null!=a&&null!=o&&a.width&&o.width){var r=t.data,s=r.speed,l=r.scrollable,c=r.delay;if(l&&o.width<a.width){var u=a.width/s*1e3;t.wrapWidth=o.width,t.contentWidth=a.width,t.duration=u,t.animation=wx.createAnimation({duration:u,timingFunction:"linear",delay:c}),t.scroll()}}}))},scroll:function(){var t=this;this.timer&&clearTimeout(this.timer),this.timer=null,this.setData({animationData:this.resetAnimation.translateX(this.wrapWidth).step().export()}),Object(o["g"])((function(){t.setData({animationData:t.animation.translateX(-t.contentWidth).step().export()})})),this.timer=setTimeout((function(){t.scroll()}),this.duration)},onClickIcon:function(t){"closeable"===this.data.mode&&(this.timer&&clearTimeout(this.timer),this.timer=null,this.setData({show:!1}),this.$emit("close",t.detail))},onClick:function(t){this.$emit("click",t)}}})}},[[197,0,1,2]]]);