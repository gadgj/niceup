(wx["webpackJsonp"]=wx["webpackJsonp"]||[]).push([[140],{141:function(e,t,n){},237:function(e,t,n){"use strict";n.r(t);var r=n(3),a=n(23);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){Object(a["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var s=n(6),u=n(0),o=n(2),l=n.n(o),f=n(1),d=n(19),m=n(77),h=n.n(m),p=n(29),g=n(78),A=n(38),v=n(27),b=n(51),y=n.n(b),$=n(35);n(141);function E(e){var t=e.data;return u["createElement"](f["g"],{className:"product-card"},u["createElement"]("van-card",{price:t.spec_price,title:t.product_title,thumb:t.product_thumb,thumbMode:"aspectFill",num:t.num},u["createElement"](f["c"],{name:"desc"},u["createElement"](f["g"],{className:"tags"},u["createElement"]("van-tag",{plain:!0,color:"#0e9a9c",size:"medium"},t.spec_title)))))}function O(e){var t,n=null===(t=Object(o["getCurrentInstance"])().router)||void 0===t?void 0:t.params,r=u["useState"](n?n.id:""),a=Object(s["a"])(r,2),i=a[0],m=(a[1],Object(A["c"])(i)),b=m.data,O=m.mutate,M=Object(p["a"])(),D=M.data,_=M.mutate;if(Object(o["useDidShow"])((function(){_()})),u["useEffect"]((function(){D&&D.openid||l.a.redirectTo({url:"/pages/login/login"})}),[]),!D||!D.openid||!b)return u["createElement"](f["g"],null);var S=function(){switch(b.freight_type){case"normal":return"\u666e\u901a\u5feb\u9012";default:return"\u666e\u901a\u5feb\u9012"}},N=function(){var e=D.openid,t="tag",n=b.psns.map((function(e){return{goods_id:e.spec_id,goods_name:"".concat(e.product_title,"-").concat(e.spec_title),quantity:e.num,price:e.spec_price,spec_id:e.spec_id,product_id:e.product_id}})),r=JSON.stringify({goods_detail:n});l.a.cloud.callFunction({name:"pay",data:{body:$["miniTitle"],detail:r,outTradeNo:b._id,totalFee:b.price,openid:e,goodsTag:t}}).then((function(e){var t=e.result,n=t.payRes,r=t.errorMessage;if(n){var a=n.payment;l.a.requestPayment(c(c({},a),{},{success:function(e){v["a"].success("\u652f\u4ed8\u6210\u529f\uff01"),O()},fail:function(e){}}))}else Object(v["a"])(r)}))},w=function(){return u["createElement"]("van-submit-bar",{price:100*b.price,buttonText:"\u652f\u4ed8",onSubmit:N})},k=function(){var e="",t="";switch(b.state){case 0:e="\u5f85\u4ed8\u6b3e";break;case 2:e="\u5f85\u53d1\u8d27",t="state-bar__bar__payed";break;case 4:e="\u5df2\u53d1\u8d27",t="state-bar__bar__exped";break;case-1:e="\u5df2\u5173\u95ed";break;case-2:e="\u5df2\u9000\u6b3e";break;default:e="\u5f85\u4ed8\u6b3e";break}return u["createElement"](f["g"],{className:"state-bar"},u["createElement"](f["g"],{className:"bar-class state-bar__bar"},u["createElement"](f["g"],{className:"state-bar__bar__state ".concat(t)},e)),u["createElement"](f["g"],{className:"state-bar__safe"}))};return u["createElement"](f["g"],{className:"order-detail"},u["createElement"]("van-sticky",null,u["createElement"](d["a"],{back:!0,title:"\u8ba2\u5355\u8be6\u60c5",style:{backgroundColor:"white"}})),u["createElement"](f["g"],{className:"address"},u["createElement"](f["b"],{className:"line-img",src:h.a}),u["createElement"]("van-cell-group",null,u["createElement"](f["g"],{className:"card-wapper_van-cell_last"},u["createElement"]("van-cell",{center:!0,label:"".concat(b.provinceName).concat(b.cityName).concat(b.countyName).concat(b.detailInfo)},u["createElement"](f["c"],{name:"title"},u["createElement"](f["g"],{className:"header"},u["createElement"](f["g"],{className:"name"},b.name),u["createElement"](f["g"],{className:"phone"},b.phone)))))),u["createElement"]("van-cell-group",null,u["createElement"](f["g"],{className:"card-wapper_van-cell_last c-white mt-10"},u["createElement"]("van-cell",{center:!0,title:"\u914d\u9001\u65b9\u5f0f",value:S()})))),u["createElement"](f["g"],{className:"list"},b.psns.map((function(e){return u["createElement"](E,{data:e})}))),u["createElement"](f["g"],{className:"mt-10"},u["createElement"]("van-cell-group",null,u["createElement"]("van-cell",{title:"\u5546\u54c1\u603b\u4ef7",value:"\uffe5".concat(b.price-b.freight_fee)}),u["createElement"]("van-cell",{title:"\u90ae\u8d39",value:"\uffe5".concat(b.freight_fee)}),b.state>0&&u["createElement"]("van-cell",{title:"\u7f16\u53f7",value:b.outTradeNo},u["createElement"](f["c"],{name:"right-icon"},u["createElement"](f["g"],{className:"act-copy"},u["createElement"]("van-icon",{name:y.a,color:"#969799",size:"16PX",onClick:function(){l.a.setClipboardData({data:b.outTradeNo,success:function(e){}})}})))),u["createElement"]("van-cell",{title:"\u4e0b\u5355\u65f6\u95f4",value:g(new Date(b.createdAt)).format("YYYY-MM-DD HH:mm"),border:!1}),4==b.state&&b.exp.map((function(e,t){return u["createElement"]("van-cell",{key:t,title:e.expType,value:e.expNumber,border:!1},u["createElement"](f["c"],{name:"right-icon"},u["createElement"](f["g"],{className:"act-copy"},u["createElement"]("van-icon",{name:y.a,color:"#969799",size:"16PX",onClick:function(){l.a.setClipboardData({data:e.expNumber,success:function(e){}})}}))))})))),!b.subscribe&&u["createElement"](f["g"],{className:"mt-10"},u["createElement"]("van-cell-group",null,u["createElement"]("van-cell",{icon:"bullhorn-o",title:"\u5f00\u542f\u53d1\u8d27\u6d88\u606f\u901a\u77e5"},u["createElement"](f["c"],{name:"right-icon"},u["createElement"]("van-button",{type:"default",size:"mini",onClick:function(){l.a.requestSubscribeMessage({tmplIds:["n6ixnfxvjOdjzcaZ9p14RJiO7U2VhWMEwRKmg3ZTtV4"],success:function(e){Object(A["b"])(i,(function(){O()}))}})}},"\u53bb\u5f00\u542f"))))),u["createElement"]("van-toast",{id:"van-toast"}),0==b.state?w():k())}var M={};Page(Object(r["createPageConfig"])(O,"pages/order/detail/detail",{},M||{}))},77:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAu4AAAAGCAYAAACclRsMAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAC7qADAAQAAAABAAAABgAAAABBPYVeAAACkklEQVR4Ae2bP28TQRDFZ8/nYNMAigI1AgUhkKCjRIKaloIyfCA+QihBokNUICHR8QWioBRUdIR/hS1dYm/e3AUOi1vJ2p2hiN5IjubmMvPin+6ct2s7PPs4i+ISUQLmdj9FNkYiO3emMqmXqFYuiqoWI1RVeD6X2e6uSHOEQ9RRCkFP2EeIFeYfy4fr92X/8k17gXYiedqCJU/yzCPA+z2PW6qLPFNk8urkmcct1UWeKTJ5dfLM4/Z3l5eDhkaQ1qLHbl3w5NY5mHY10I6S0AwBhgya85cvWtNeIfc07QpTFQ62tmX/ipdpVxXyVAp2QZ52LHUSeZJnHgG+fuZxS3WRZ4pMXp0887ilusgzRWb9up+LVsOODe4F/pZHNyZycQIpLUW1806B+bqP2rx+I/LzFzJcIqeb7PF0AeGhPBuP5f32A4/R/Uzy7FlYZORpQbGfQZ49C4uMPC0o9jPIs2dhkZGnBcV+Bnn2LCyyM87Tzbirga5gpG9v1XLtgq6xENgNl+AmCZMeZbG3J8efD/CRmd+anXMf6SrCIZZ4Ps/vPZUK6xG9VryCPG3Jkid55hDg/Z5DLd1Dnmk2OWfIM4dauoc802xyzpBnDrV/e2ofOwshmOhL00oeXh23u+Cdjp9p16cWvx7K0dt3SFRNPzajVWRILPf5I9410NF6Eb66+1jq5QK5KnYP1TQP8rRFSp7kuSYB3u98/VzzUln5Nf4/WsFRfECexQhXBpDnCo7ig//K89OXHy77xLrfvXm+ko1K7ayLxB/Q7ZdOIRG/HUpsGqipnj5U2z6wJGiHNqNavk837QUGJpLnAJSCEnkWwBtoJc8BKAUl8iyAN9BKngNQCkrkWQBvoJU8B6AUlM46zxOtUvrSpyIzLAAAAABJRU5ErkJggg=="},78:function(e,t,n){!function(t,n){e.exports=n()}(0,(function(){"use strict";var e="millisecond",t="second",n="minute",r="hour",a="day",i="week",c="month",s="quarter",u="year",o="date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,f=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},m=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},h={s:m,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),a=n%60;return(t<=0?"+":"-")+m(r,2,"0")+":"+m(a,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),a=t.clone().add(r,c),i=n-a<0,s=t.clone().add(r+(i?-1:1),c);return+(-(r+(n-a)/(i?a-s:s-a))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(l){return{M:c,y:u,w:i,d:a,D:o,h:r,m:n,s:t,ms:e,Q:s}[l]||String(l||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},p="en",g={};g[p]=d;var A=function(e){return e instanceof $},v=function(e,t,n){var r;if(!e)return p;if("string"==typeof e)g[e]&&(r=e),t&&(g[e]=t,r=e);else{var a=e.name;g[a]=e,r=a}return!n&&r&&(p=r),r||!n&&p},b=function(e,t){if(A(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new $(n)},y=h;y.l=v,y.i=A,y.w=function(e,t){return b(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var $=function(){function d(e){this.$L=v(e.locale,null,!0),this.parse(e)}var m=d.prototype;return m.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(y.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(l);if(r){var a=r[2]-1||0,i=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],a,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)):new Date(r[1],a,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},m.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},m.$utils=function(){return y},m.isValid=function(){return!("Invalid Date"===this.$d.toString())},m.isSame=function(e,t){var n=b(e);return this.startOf(t)<=n&&n<=this.endOf(t)},m.isAfter=function(e,t){return b(e)<this.startOf(t)},m.isBefore=function(e,t){return this.endOf(t)<b(e)},m.$g=function(e,t,n){return y.u(e)?this[t]:this.set(n,e)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(e,s){var l=this,f=!!y.u(s)||s,d=y.p(e),m=function(e,t){var n=y.w(l.$u?Date.UTC(l.$y,t,e):new Date(l.$y,t,e),l);return f?n:n.endOf(a)},h=function(e,t){return y.w(l.toDate()[e].apply(l.toDate("s"),(f?[0,0,0,0]:[23,59,59,999]).slice(t)),l)},p=this.$W,g=this.$M,A=this.$D,v="set"+(this.$u?"UTC":"");switch(d){case u:return f?m(1,0):m(31,11);case c:return f?m(1,g):m(0,g+1);case i:var b=this.$locale().weekStart||0,$=(p<b?p+7:p)-b;return m(f?A-$:A+(6-$),g);case a:case o:return h(v+"Hours",0);case r:return h(v+"Minutes",1);case n:return h(v+"Seconds",2);case t:return h(v+"Milliseconds",3);default:return this.clone()}},m.endOf=function(e){return this.startOf(e,!1)},m.$set=function(i,s){var l,f=y.p(i),d="set"+(this.$u?"UTC":""),m=(l={},l[a]=d+"Date",l[o]=d+"Date",l[c]=d+"Month",l[u]=d+"FullYear",l[r]=d+"Hours",l[n]=d+"Minutes",l[t]=d+"Seconds",l[e]=d+"Milliseconds",l)[f],h=f===a?this.$D+(s-this.$W):s;if(f===c||f===u){var p=this.clone().set(o,1);p.$d[m](h),p.init(),this.$d=p.set(o,Math.min(this.$D,p.daysInMonth())).$d}else m&&this.$d[m](h);return this.init(),this},m.set=function(e,t){return this.clone().$set(e,t)},m.get=function(e){return this[y.p(e)]()},m.add=function(e,s){var o,l=this;e=Number(e);var f=y.p(s),d=function(t){var n=b(l);return y.w(n.date(n.date()+Math.round(t*e)),l)};if(f===c)return this.set(c,this.$M+e);if(f===u)return this.set(u,this.$y+e);if(f===a)return d(1);if(f===i)return d(7);var m=(o={},o[n]=6e4,o[r]=36e5,o[t]=1e3,o)[f]||1,h=this.$d.getTime()+e*m;return y.w(h,this)},m.subtract=function(e,t){return this.add(-1*e,t)},m.format=function(e){var t=this;if(!this.isValid())return"Invalid Date";var n=e||"YYYY-MM-DDTHH:mm:ssZ",r=y.z(this),a=this.$locale(),i=this.$H,c=this.$m,s=this.$M,u=a.weekdays,o=a.months,l=function(e,r,a,i){return e&&(e[r]||e(t,n))||a[r].substr(0,i)},d=function(e){return y.s(i%12||12,e,"0")},m=a.meridiem||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r},h={YY:String(this.$y).slice(-2),YYYY:this.$y,M:s+1,MM:y.s(s+1,2,"0"),MMM:l(a.monthsShort,s,o,3),MMMM:l(o,s),D:this.$D,DD:y.s(this.$D,2,"0"),d:String(this.$W),dd:l(a.weekdaysMin,this.$W,u,2),ddd:l(a.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(i),HH:y.s(i,2,"0"),h:d(1),hh:d(2),a:m(i,c,!0),A:m(i,c,!1),m:String(c),mm:y.s(c,2,"0"),s:String(this.$s),ss:y.s(this.$s,2,"0"),SSS:y.s(this.$ms,3,"0"),Z:r};return n.replace(f,(function(e,t){return t||h[e]||r.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(e,o,l){var f,d=y.p(o),m=b(e),h=6e4*(m.utcOffset()-this.utcOffset()),p=this-m,g=y.m(this,m);return g=(f={},f[u]=g/12,f[c]=g,f[s]=g/3,f[i]=(p-h)/6048e5,f[a]=(p-h)/864e5,f[r]=p/36e5,f[n]=p/6e4,f[t]=p/1e3,f)[d]||p,l?g:y.a(g)},m.daysInMonth=function(){return this.endOf(c).$D},m.$locale=function(){return g[this.$L]},m.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=v(e,t,!0);return r&&(n.$L=r),n},m.clone=function(){return y.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},d}(),E=$.prototype;return b.prototype=E,[["$ms",e],["$s",t],["$m",n],["$H",r],["$W",a],["$M",c],["$y",u],["$D",o]].forEach((function(e){E[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),b.extend=function(e,t){return e.$i||(e(t,$,b),e.$i=!0),b},b.locale=v,b.isDayjs=A,b.unix=function(e){return b(1e3*e)},b.en=g[p],b.Ls=g,b.p={},b}))}},[[237,0,3,1,2]]]);