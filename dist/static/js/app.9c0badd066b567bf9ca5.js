webpackJsonp([1],{"+kXF":function(t,e){},"3QB7":function(t,e){},"5s8g":function(t,e){},"9nPT":function(t,e){},A2q5:function(t,e){},C34Q:function(t,e,a){t.exports=a.p+"static/img/bg.2e867f3.png"},Ct4b:function(t,e){},Eccp:function(t,e){},GJrg:function(t,e){},J5Xl:function(t,e){},K9pE:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("VCXJ"),i={props:{open:{type:Boolean,default:!1},docked:{type:Boolean,default:!0}},data:function(){return{menuVal:"#/"}},computed:{lang:function(){return Vue.config.lang}},methods:{handleClose:function(){this.$emit("close")},handleMenuChange:function(t){this.menuVal=t,this.docked?window.location.hash=this.menuVal:this.changeHref=!0,this.$emit("change",t)},handleHide:function(){this.changeHref&&(window.location.hash=this.menuVal,this.changeHref=!1)}},mounted:function(){var t=this;this.menuVal=window.location.hash,window.addEventListener("hashchange",function(){t.menuVal=window.location.hash})}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("mu-drawer",{staticClass:"app-drawer",attrs:{open:t.open,docked:t.docked,overlay:t.docked,zDepth:1},on:{hide:t.handleHide,close:t.handleClose}},[a("mu-appbar",{staticClass:"exmaples-nav-appbar",attrs:{zDepth:0}},[a("a",{staticClass:"exmaples-appbar-title",attrs:{href:"#/main"},on:{click:function(e){t.handleMenuChange("#/")}}},[t._v("书适阅读")])]),t._v(" "),a("mu-divider"),t._v(" "),a("div",{staticClass:"exmaple-drawer-content"},[a("mu-list",{attrs:{value:t.menuVal},on:{change:t.handleMenuChange}},[a("mu-list-item",{attrs:{value:"#/main",title:"主页"}},[a("mu-icon",{attrs:{slot:"left",value:"home"},slot:"left"})],1),t._v(" "),a("mu-list-item",{attrs:{title:"用户",toggleNested:"",open:!1}},[a("mu-icon",{attrs:{slot:"left",value:"book"},slot:"left"}),t._v(" "),a("mu-list-item",{attrs:{slot:"nested",value:"#/user/login",title:"登录"},slot:"nested"},[a("mu-icon",{attrs:{slot:"left",value:"whatshot",color:"red"},slot:"left"})],1),t._v(" "),a("mu-list-item",{attrs:{slot:"nested",value:"#/user/register",title:"注册"},slot:"nested"},[a("mu-icon",{attrs:{slot:"left",value:"pie_chart",color:"red"},slot:"left"})],1),t._v(" "),a("mu-list-item",{attrs:{slot:"nested",value:"#/user/register",title:"注销"},slot:"nested"},[a("mu-icon",{attrs:{slot:"left",value:"beenhere",color:"red"},slot:"left"})],1),t._v(" "),a("mu-list-item",{attrs:{slot:"nested",value:"#/user/register",title:"个人中心"},slot:"nested"},[a("mu-icon",{attrs:{slot:"left",value:"reorder",color:"red"},slot:"left"})],1)],1),t._v(" "),a("mu-list-item",{attrs:{title:"小说",toggleNested:"",open:!1}},[a("mu-icon",{attrs:{slot:"left",value:"book"},slot:"left"}),t._v(" "),a("mu-list-item",{attrs:{slot:"nested",value:"#/book/rank",title:"排行"},slot:"nested"},[a("mu-icon",{attrs:{slot:"left",value:"whatshot",color:"red"},slot:"left"})],1),t._v(" "),a("mu-list-item",{attrs:{slot:"nested",value:"#/book/cate",title:"分类"},slot:"nested"},[a("mu-icon",{attrs:{slot:"left",value:"pie_chart",color:"red"},slot:"left"})],1),t._v(" "),a("mu-list-item",{attrs:{slot:"nested",value:"#/book/love",title:"收藏"},slot:"nested"},[a("mu-icon",{attrs:{slot:"left",value:"beenhere",color:"red"},slot:"left"})],1),t._v(" "),a("mu-list-item",{attrs:{slot:"nested",value:"#/book/list",title:"书单"},slot:"nested"},[a("mu-icon",{attrs:{slot:"left",value:"reorder",color:"red"},slot:"left"})],1)],1),t._v(" "),a("mu-list-item",{attrs:{title:"图片",toggleNested:"",open:!1}},[a("mu-icon",{attrs:{slot:"left",value:"panorama"},slot:"left"}),t._v(" "),a("mu-list-item",{attrs:{slot:"nested",value:"#/image/rank",title:"排行"},slot:"nested"},[a("mu-icon",{attrs:{slot:"left",value:"whatshot",color:"red"},slot:"left"})],1),t._v(" "),a("mu-list-item",{attrs:{slot:"nested",value:"#/image/cate",title:"分类"},slot:"nested"},[a("mu-icon",{attrs:{slot:"left",value:"pie_chart",color:"red"},slot:"left"})],1),t._v(" "),a("mu-list-item",{attrs:{slot:"nested",value:"#/image/love",title:"收藏"},slot:"nested"},[a("mu-icon",{attrs:{slot:"left",value:"beenhere",color:"red"},slot:"left"})],1)],1),t._v(" "),a("mu-list-item",{attrs:{title:"其它",toggleNested:"",open:!1}},[a("mu-icon",{attrs:{slot:"left",value:"link"},slot:"left"}),t._v(" "),a("mu-list-item",{attrs:{slot:"nested",value:"#/other/Meizitu",title:"妹子图"},slot:"nested"}),t._v(" "),a("mu-list-item",{attrs:{slot:"nested",value:"#/raisedButton",title:"绝对领域"},slot:"nested"}),t._v(" "),a("mu-list-item",{attrs:{slot:"nested",value:"#/iconButton",title:"MMJEPG"},slot:"nested"}),t._v(" "),a("mu-list-item",{attrs:{slot:"nested",value:"#/floatButton",title:"更多..."},slot:"nested"})],1)],1),t._v(" "),a("mu-divider"),t._v(" "),a("mu-list",[a("mu-list-item",{attrs:{value:"#/main",title:"设置"}},[a("mu-icon",{attrs:{slot:"left",value:"settings"},slot:"left"})],1),t._v(" "),a("mu-list-item",{attrs:{href:"https://github.com/aferica/muse-ui-vue",target:"_blank",title:"GitHub"}},[a("mu-icon",{attrs:{slot:"left",value:"help_outline"},slot:"left"})],1)],1)],1)],1)},staticRenderFns:[]};var n={data:function(){var t=r();return{open:t,docked:!1,desktop:t,title:"",menuVal:"#/"}},computed:{isHomePage:function(){return"/"===this.$route.fullPath}},mounted:function(){var t=this;this.routes=this.$router.options.routes,this.setTitle(),this.changeNav(),this.handleResize=function(){t.changeNav()},window.addEventListener("resize",this.handleResize),window.addEventListener("hashchange",function(){t.setTitle()})},methods:{toggleNav:function(){this.open=!this.open},changeNav:function(){var t=r();this.docked=t,t!==this.desktop&&(!t&&this.desktop&&this.open&&(this.open=!1),!t||this.desktop||this.open||(this.open=!0),this.desktop=t)},handleMenuChange:function(t){this.desktop||(this.open=!1)},handleUserMenuChange:function(t){this.menuVal=t,this.docked?window.location.hash=this.menuVal:this.changeHref=!0,this.$emit("change",t)},setTitle:function(){var t=window.location.hash;t&&t.length>1&&(t=t.substring(1));for(var e=0;e<this.routes.length;e++){var a=this.routes[e];if(a.path===t)return void(this.title=a.name||"")}}},destroyed:function(){window.removeEventListener("resize",this.handleResize)},components:{"app-nav":a("Z0/y")(i,o,!1,function(t){a("kov6")},"data-v-69d3696e",null).exports}};function r(){return window.innerWidth>993}var l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[t.isHomePage?t._e():a("mu-appbar",{staticClass:"example-appbar",class:{"nav-hide":!t.open},attrs:{zDepth:0,title:"index"===t.title?"":t.title}},[a("mu-icon-button",{attrs:{slot:"left",icon:"menu"},on:{click:t.toggleNav},slot:"left"}),t._v(" "),a("mu-switch",{staticClass:"demo-switch",attrs:{slot:"right",label:"开关"},slot:"right"})],1),t._v(" "),t.isHomePage?t._e():a("app-nav",{attrs:{open:t.open,docked:t.docked},on:{change:t.handleMenuChange,close:t.toggleNav}}),t._v(" "),a("div",{staticClass:"example-content",class:{"nav-hide":!t.open,"home-page":t.isHomePage}},[a("router-view")],1)],1)},staticRenderFns:[]};var c=a("Z0/y")(n,l,!1,function(t){a("9nPT")},"data-v-df90ee6a",null).exports,u=a("rLc4"),d={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hello"},[s("div",{staticClass:"mu-banner"},[s("router-link",{attrs:{to:"main",tag:"span"}},[s("img",{staticClass:"mu-banner-image",attrs:{src:a("C34Q"),width:"100%",height:"100%"}}),t._v(" "),s("div",{staticClass:"mu-logo"},[s("img",{staticClass:"mu-logo-image",attrs:{src:a("qIEg"),alt:""}})]),t._v(" "),s("h1",{staticClass:"mu-banner-title"},[t._v("\n      程序猿的成长之路\n    ")]),t._v(" "),s("br"),t._v(" "),s("h3",{staticClass:"mu-banner-sub-title"},[t._v("\n      学习的实践地，娱乐的自由地\n    ")])])],1),t._v(" "),t._m(0),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mu-desc-wrapper"},[s("div",{staticClass:"mu-desc"},[s("div",{staticClass:"mu-desc-content"},[s("h2",{staticClass:"mu-desc-title"}),t._v(" "),s("h3",{staticClass:"mu-desc-sub-title"},[t._v("笔记博客，记录点点滴滴")]),t._v(" "),s("img",{staticClass:"mu-desc-image",attrs:{src:a("fgq6")}})])]),t._v(" "),s("div",{staticClass:"mu-desc"},[s("div",{staticClass:"mu-desc-content"},[s("h2",{staticClass:"mu-desc-title"}),t._v(" "),s("h3",{staticClass:"mu-desc-sub-title"},[t._v("热门书籍，避免无聊时光")]),t._v(" "),s("img",{staticClass:"mu-desc-image",attrs:{src:a("xx0f")}})])]),t._v(" "),s("div",{staticClass:"mu-desc"},[s("div",{staticClass:"mu-desc-content"},[s("h2",{staticClass:"mu-desc-title"}),t._v(" "),s("h3",{staticClass:"mu-desc-sub-title"},[t._v("缤纷图片，放松释放压力")]),t._v(" "),s("img",{staticClass:"mu-desc-image",attrs:{src:a("m22b")}})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mu-footer"},[e("a",{staticClass:"beian",attrs:{href:"http://www.aferica.wang"}},[this._v("Aferica")]),this._v(" © 2017-2018"),e("br"),this._v(" "),e("a",{staticClass:"beian",attrs:{target:"_Blank",href:"http://www.miitbeian.gov.cn"}},[this._v("粤ICP备18008014号")])])}]};var h=a("Z0/y")({name:"Home",data:function(){return{msg:"Welcome to Your Vue.js App"}}},d,!1,function(t){a("+kXF")},"data-v-1063fb99",null).exports,m=a("2sCs"),p=a.n(m),g=(a("uVke"),a("DMPO")),v={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"booksList"}},[a("mu-card",[a("mu-list",[a("mu-sub-header",[t._v(t._s(t.title))]),t._v(" "),a("hr"),t._v(" "),t._l(t.booksArray,function(e){return a("div",{key:e._id},[a("router-link",{attrs:{to:"/book/info/"+e._id}},[a("mu-list-item",{staticClass:"listTitle",attrs:{title:e.title,afterText:e.author}})],1),t._v(" "),a("mu-divider")],1)})],2)],1)],1)},staticRenderFns:[]};var f=a("Z0/y")({data:function(){return{books:[]}},props:["booksArray","title"],mounted:function(){},methods:{}},v,!1,function(t){a("Ct4b")},"data-v-df618052",null).exports,_={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"imagesList"}},[a("mu-card",[a("mu-list",[a("mu-sub-header",[t._v(t._s(t.title))]),t._v(" "),a("hr"),t._v(" "),t._l(t.imagesArray,function(e){return a("div",{key:e._id},[a("router-link",{attrs:{to:"/image/info/"+e._id}},[a("mu-list-item",{staticClass:"listTitle",attrs:{title:e.title}})],1),t._v(" "),a("mu-divider")],1)})],2)],1)],1)},staticRenderFns:[]};var C=a("Z0/y")({data:function(){return{}},props:["imagesArray","title"],mounted:function(){},methods:{}},_,!1,function(t){a("K9pE")},"data-v-254ea99c",null).exports,b={name:"mymain",data:function(){return{swiperOption:{slidesPerView:3,spaceBetween:50,pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{640:{slidesPerView:1,spaceBetween:10}}},activeTab:"book",hotRank:[],overRank:[],popRank:[],firstFiveBooks:[],staticUrl:this.GLOBAL.ALLAPI.static,xingganImages:[],qingchunImages:[],xiaohuaImages:[]}},components:{swiper:g.swiper,swiperSlide:g.swiperSlide,BooksList:f,ImagesList:C},computed:{},mounted:function(){this.getBooksInfo(),this.getImagesInfo()},methods:{handleTabChange:function(t){this.activeTab=t},getBooksInfo:function(){var t=this,e=this.GLOBAL.ALLAPI.API+this.GLOBAL.ALLAPI.rank.rankInfo+"/";p.a.get(e+"564d8494fe996c25652644d2").then(function(e){e.data.ok&&(t.firstFiveBooks=e.data.ranking.books.slice(0,5),t.hotRank=e.data.ranking.books.slice(0,50))}),p.a.get(e+"564d8a004a15bb8369d9e28d").then(function(e){e.data.ok&&(t.overRank=e.data.ranking.books.slice(0,50))}),p.a.get(e+"564eea0b731ade4d6c509493").then(function(e){e.data.ok&&(t.popRank=e.data.ranking.books.slice(0,50))})},getImagesInfo:function(){var t=this,e=this.GLOBAL.ALLAPI.photo.getPictureByTagsAnd;p.a.get(e+"?tags=性感,美臀").then(function(e){e.data.code||(t.xingganImages=e.data.data)}),p.a.get(e+"?tags=清纯").then(function(e){e.data.code||(t.qingchunImages=e.data.data)}),p.a.get(e+"?tags=校花").then(function(e){e.data.code||(t.xiaohuaImages=e.data.data)})}}},k={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"mymain"}},[a("mu-tabs",{attrs:{value:t.activeTab},on:{change:t.handleTabChange}},[a("mu-tab",{attrs:{value:"book",title:"小说"}}),t._v(" "),a("mu-tab",{attrs:{value:"image",title:"美图"}})],1),t._v(" "),"book"===t.activeTab?a("div",[a("div",{staticClass:"content"},[a("mu-row",{attrs:{gutter:""}},[a("mu-col",{attrs:{width:"100",tablet:"50",desktop:"33"}},[a("BooksList",{attrs:{booksArray:t.hotRank,title:"追书最热榜"}})],1),t._v(" "),a("mu-col",{attrs:{width:"100",tablet:"50",desktop:"33"}},[a("BooksList",{attrs:{booksArray:t.overRank,title:"追书完结榜"}})],1),t._v(" "),a("mu-col",{attrs:{width:"100",tablet:"50",desktop:"33"}},[a("BooksList",{attrs:{booksArray:t.popRank,title:"读者留存率"}})],1)],1)],1)]):t._e(),t._v(" "),"image"===t.activeTab?a("div",[a("div",{staticClass:"content"},[a("mu-row",{attrs:{gutter:""}},[a("mu-col",{attrs:{width:"100",tablet:"50",desktop:"33"}},[a("ImagesList",{attrs:{imagesArray:t.xingganImages,title:"性感诱人"}})],1),t._v(" "),a("mu-col",{attrs:{width:"100",tablet:"50",desktop:"33"}},[a("ImagesList",{attrs:{imagesArray:t.qingchunImages,title:"清纯可爱"}})],1),t._v(" "),a("mu-col",{attrs:{width:"100",tablet:"50",desktop:"33"}},[a("ImagesList",{attrs:{imagesArray:t.xiaohuaImages,title:"美女校花"}})],1)],1)],1)]):t._e()],1)},staticRenderFns:[]};var w=a("Z0/y")(b,k,!1,function(t){a("GJrg")},"data-v-7dad878f",null).exports,L={name:"meizitu",data:function(){return{isDesktop:this.GLOBAL.getWidth(),tags:[],images:[],selectTag:"a/pure",bottomNav:"a/pure",selectTagTitle:"颜值控"}},components:{},mounted:function(){this.getMeizituTags(),this.getImagesByTag(),window.addEventListener("resize",this.handleResize)},methods:{getMeizituTags:function(){var t=this;p.a.get("https://www.aferica.wang/api/other/meizitu/tags").then(function(e){0==e.data.code&&(t.tags=e.data.data)})},getImagesByTag:function(){var t=this,e="http://127.0.0.1:3000/api/other/meizitu/meinv/"+encodeURIComponent(this.selectTag)+"/1";p.a.get(e).then(function(e){0==e.data.code&&(t.images=e.data.data)})},handleChange:function(){},changeTag:function(t){this.selectTagTitle=t.title,this.selectTag=t.tags,this.getImagesByTag()},handleResize:function(){this.isDesktop=this.GLOBAL.getWidth()}}},I={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"meizitu"}},[a("mu-back-top"),t._v(" "),a("div",{staticClass:"tag-container"},t._l(t.tags,function(e){return a("mu-chip",{key:e.title,staticClass:"demo-chip",on:{click:function(a){t.changeTag(e)}}},[t._v("\n      "+t._s(e.title)+"\n    ")])})),t._v(" "),a("div",{staticClass:"list-container"},[a("mu-grid-list",{staticClass:"girllist"},[a("mu-sub-header",[t._v(t._s(t.selectTagTitle))]),t._v(" "),t._l(t.images,function(e){return a("mu-grid-tile",{key:e.pid,staticClass:"girlitem",attrs:{titlePosition:"top",rows:t.isDesktop,cols:t.isDesktop}},[a("router-link",{attrs:{to:{path:"/other/meizituinfo",query:{pid:e.pid}}}},[a("img",{attrs:{src:e.smallSrc}})]),t._v(" "),a("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.title))])],1)})],2)],1)],1)},staticRenderFns:[]};var A=a("Z0/y")(L,I,!1,function(t){a("g85w")},"data-v-04d14905",null).exports,x={name:"meizituinfo",data:function(){return{isDesktop:this.GLOBAL.getWidth(),images:[],title:"",staticUrl:this.GLOBAL.ALLAPI.IMGAPI}},components:{},mounted:function(){this.getImagesByPid(),window.addEventListener("resize",this.handleResize)},methods:{getImagesByPid:function(){var t=this,e="https://www.aferica.wang/api/other/meizitu/detail/"+this.$route.query.pid;p.a.get(e).then(function(e){0==e.data.code&&(t.images=e.data.data.imgList,t.title=e.data.title)})},handleResize:function(){this.isDesktop=this.GLOBAL.getWidth()}}},y={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"meizituinfo"}},[a("div",{staticClass:"list-container"},[a("mu-card",{staticClass:"infoCard"},[a("mu-card-header",[a("h3",[t._v(t._s(t.title))])]),t._v(" "),t._l(t.images,function(e){return a("div",{key:e},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.staticUrl+e,expression:"staticUrl + item"}]})])})],2)],1)])},staticRenderFns:[]};var T=a("Z0/y")(x,y,!1,function(t){a("A2q5")},"data-v-3cee2655",null).exports,B=a("KPSb"),P=a.n(B),E={name:"userlogin",data:function(){return{username:"",password:"",inputCaptchaCode:"",captchaCode:"",captchaSrc:"",usernameErro:"",passwordErro:"",captchaCodeErro:"",captchaCodeColor:"",captchaCodeCheck:!1,dialog:!1,dialogText:"",successLogin:!1}},components:{},mounted:function(){this.getCaptcha()},methods:{getCaptcha:function(){var t=this,e=this.GLOBAL.ALLAPI.user.captcha;p.a.get(e).then(function(e){0==e.data.code&&(t.captchaCode=e.data.data.text,t.captchaSrc=e.data.data.img)})},login:function(){var t=this;this.checkCaptchaCode(),this.captchaCodeCheck&&p.a.post(this.GLOBAL.ALLAPI.user.login,{name:this.username,password:P()(this.password)}).then(function(e){0==e.data.code?(t.showToast(),t.$router.push({path:"/main"})):(t.dialogText="抱歉，由于神秘力量导致注册失败了，请重试",t.dialog=!0,t.usernameErro="用户名或密码错误，请重新输入",t.passwordErro="用户名或密码错误，请重新输入",t.username="",t.password="")})},checkCaptchaCode:function(){this.inputCaptchaCode==this.captchaCode?(this.captchaCodeErro="输入正确",this.captchaCodeColor="green",this.captchaCodeCheck=!0):(this.getCaptcha(),this.captchaCodeErro="验证码错误，请重新输入",this.captchaCodeColor="red")},close:function(){this.dialog=!1},showToast:function(){var t=this;this.successLogin=!0,this.toastTimer&&clearTimeout(this.toastTimer),this.toastTimer=setTimeout(function(){t.successLogin=!1},2e3)}}},z={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"userlogin"}},[a("mu-card",{staticClass:"loginform"},[a("mu-card-text",[a("mu-text-field",{attrs:{label:"账号",hintText:"请输入用户名",errorText:t.usernameErro,labelFloat:"",fullWidth:""},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),t._v(" "),a("mu-text-field",{attrs:{label:"密码",hintText:"请输入密码",type:"password",errorText:t.passwordErro,labelFloat:"",fullWidth:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),a("br"),t._v(" "),a("mu-text-field",{staticStyle:{width:"75%"},attrs:{label:"验证码",hintText:"请输入右侧验证码",errorText:t.captchaCodeErro,errorColor:t.captchaCodeColor,labelFloat:"",fullWidth:""},on:{blur:t.checkCaptchaCode},model:{value:t.inputCaptchaCode,callback:function(e){t.inputCaptchaCode=e},expression:"inputCaptchaCode"}}),t._v(" "),a("img",{staticStyle:{width:"23%",height:"3em"},attrs:{src:t.captchaSrc}})],1),t._v(" "),a("mu-divider"),t._v(" "),a("mu-card-actions",{staticClass:"actions"},[a("mu-raised-button",{staticClass:"demo-raised-button",attrs:{label:"登录",primary:""},on:{click:function(e){t.login()}}}),t._v(" "),a("router-link",{attrs:{to:"/user/register",tag:"span"}},[a("mu-raised-button",{staticClass:"demo-raised-button",attrs:{label:"没有账户，去注册",secondary:""}})],1)],1)],1),t._v(" "),a("mu-dialog",{attrs:{open:t.dialog,title:"^_^登录"},on:{close:t.close}},[t._v("\n    "+t._s(t.dialogText)+"\n    "),a("mu-flat-button",{attrs:{slot:"actions",primary:"",label:"确定"},on:{click:t.close},slot:"actions"})],1),t._v(" "),t.successLogin?a("mu-toast",{attrs:{message:"恭喜您，登录成功！系统将自动跳转回主页面"},on:{close:t.hideToast}}):t._e()],1)},staticRenderFns:[]};var R={name:"login",data:function(){return{}},components:{UserLogin:a("Z0/y")(E,z,!1,function(t){a("3QB7")},"data-v-65474c72",null).exports},methods:{}},G={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"login"}},[e("user-login")],1)},staticRenderFns:[]};var F=a("Z0/y")(R,G,!1,function(t){a("PGjJ")},"data-v-a1f0eb06",null).exports,O={name:"userregister",data:function(){return{username:"",password:"",inviteCode:"",email:"",password1:"",inputCaptchaCode:"",captchaCode:"",captchaSrc:"",usernameErro:"",passwordErro:"",inviteCodeErro:"",emailErro:"",password1Erro:"",captchaCodeErro:"",captchaCodeColor:"",captchaCodeCheck:!1,dialog:!1,dialogText:""}},components:{},mounted:function(){this.getCaptcha()},methods:{getCaptcha:function(){var t=this,e=this.GLOBAL.ALLAPI.user.captcha;p.a.get(e).then(function(e){0==e.data.code&&(t.captchaCode=e.data.data.text,t.captchaSrc=e.data.data.img)})},register:function(){var t=this;this.checkCaptchaCode(),this.captchaCodeCheck&&p.a.post(this.GLOBAL.ALLAPI.user.register,{name:this.username,password:P()(this.password),email:this.email,invitation_code_other:this.phone}).then(function(e){0==e.data.code?(t.dialog=!0,t.dialogText="恭喜您，注册成功！系统将自动跳转回主页面 "):(t.dialogText="抱歉，由于神秘力量导致注册失败了，请重试",t.dialog=!0)})},checkCaptchaCode:function(){this.inputCaptchaCode==this.captchaCode?(this.captchaCodeErro="输入正确",this.captchaCodeColor="green",this.captchaCodeCheck=!0):(this.getCaptcha(),this.captchaCodeErro="验证码错误，请重新输入",this.captchaCodeColor="red")},close:function(){this.dialog=!1}}},q={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"userregister"}},[a("mu-card",{staticClass:"registerform"},[a("mu-card-text",[a("mu-text-field",{attrs:{label:"账号",hintText:"请输入用户名",errorText:t.usernameErro,labelFloat:"",fullWidth:""},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),t._v(" "),a("mu-text-field",{attrs:{label:"邮箱",hintText:"请输入邮箱",errorText:t.emailErro,labelFloat:"",fullWidth:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),a("mu-text-field",{attrs:{label:"密码",hintText:"请输入密码",type:"password",errorText:t.passwordErro,labelFloat:"",fullWidth:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),a("br"),t._v(" "),a("mu-text-field",{attrs:{label:"确认密码",hintText:"请再次输入密码确认",type:"password",errorText:t.password1Erro,labelFloat:"",fullWidth:""},model:{value:t.password1,callback:function(e){t.password1=e},expression:"password1"}}),a("br"),t._v(" "),a("mu-text-field",{attrs:{label:"邀请码",hintText:"如果有邀请码，请输入",errorText:t.inviteCodeErro,labelFloat:"",fullWidth:""},model:{value:t.inviteCode,callback:function(e){t.inviteCode=e},expression:"inviteCode"}}),t._v(" "),a("mu-text-field",{staticStyle:{width:"75%"},attrs:{label:"验证码",hintText:"请输入右侧验证码",errorText:t.captchaCodeErro,errorColor:t.captchaCodeColor,labelFloat:"",fullWidth:""},on:{blur:t.checkCaptchaCode},model:{value:t.inputCaptchaCode,callback:function(e){t.inputCaptchaCode=e},expression:"inputCaptchaCode"}}),t._v(" "),a("img",{staticStyle:{width:"23%",height:"3em"},attrs:{src:t.captchaSrc}})],1),t._v(" "),a("mu-divider"),t._v(" "),a("mu-card-actions",{staticClass:"actions"},[a("mu-raised-button",{staticClass:"demo-raised-button",attrs:{label:"注册",primary:""},on:{click:function(e){t.register()}}}),t._v(" "),a("router-link",{attrs:{to:"/user/login",tag:"span"}},[a("mu-raised-button",{staticClass:"demo-raised-button",attrs:{label:"已有账户，去登录",secondary:""}})],1)],1)],1),t._v(" "),a("mu-dialog",{attrs:{open:t.dialog,title:"^_^注册"},on:{close:t.close}},[t._v("\n    "+t._s(t.dialogText)+"\n    "),a("mu-flat-button",{attrs:{slot:"actions",primary:"",label:"确定"},on:{click:t.close},slot:"actions"})],1)],1)},staticRenderFns:[]};var $={name:"register",data:function(){return{}},components:{UserRegister:a("Z0/y")(O,q,!1,function(t){a("J5Xl")},"data-v-0c17ef82",null).exports},methods:{}},W={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"register"}},[e("user-register")],1)},staticRenderFns:[]};var M=a("Z0/y")($,W,!1,function(t){a("Eccp")},"data-v-9a2c7df6",null).exports,N={data:function(){return{activeTab:"tab1",bookInfo:[],allChapters:[],comments:[],staticUrl:this.GLOBAL.ALLAPI.IMGAPI,staticCover:this.GLOBAL.ALLAPI.static,score:"--",longIntro:""}},mounted:function(){this.getBookInfo(),this.getBookAllChapters(),this.getBookComment()},methods:{getBookInfo:function(){var t=this,e=this.GLOBAL.ALLAPI.API+this.GLOBAL.ALLAPI.book.bookInfo;p.a.get(e+"/"+this.$route.params._id).then(function(e){console.log(e.data),null!=e.data&&(t.bookInfo=e.data,t.score=e.data.rating.score,t.longIntro="　　"+e.data.longIntro.replace(/\n/g,"\n　　"),console.log(t.longIntro))})},handleTabChange:function(t){this.activeTab=t},getBookAllChapters:function(){var t=this,e=this.GLOBAL.ALLAPI.API+this.GLOBAL.ALLAPI.book.bookChapters;p.a.get(e+"/"+this.$route.params._id).then(function(e){console.log(e.data),e.data.ok&&(t.allChapters=e.data.mixToc.chapters)})},getBookComment:function(){var t=this,e=this.GLOBAL.ALLAPI.API,a=this.GLOBAL.ALLAPI.comment.commentInfo+"?book="+this.$route.params._id+"&sort=comment-count&limit=50";p.a.get(e+encodeURIComponent(a)).then(function(e){console.log(e.data),e.data.ok&&(t.comments=e.data.reviews)})}}},S={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"bookInfo"}},[a("mu-card",{staticClass:"infoCard"},[a("mu-card-media",[a("mu-row",{staticClass:"mainInfo",attrs:{gutter:""}},[a("mu-col",{attrs:{width:"40",desktop:"20"}},[a("img",{staticClass:"cover",attrs:{src:t.staticCover+t.bookInfo.cover}})]),t._v(" "),a("mu-col",{attrs:{width:"5",desktop:"0"}}),t._v(" "),a("mu-col",{staticStyle:{position:"relative",height:"174px"},attrs:{width:"55",desktop:"80"}},[a("b",{staticClass:"title"},[t._v(t._s(t.bookInfo.title))]),t._v("   \n          "),a("span",{staticClass:"author"},[t._v(t._s(t.bookInfo.author)+" 著")]),t._v(" "),a("mu-row",{staticClass:"hotInfo",attrs:{gutter:""}},[a("mu-col",{attrs:{width:"100",desktop:"20"}},[a("span",[t._v("字数："+t._s(t.bookInfo.wordCount))])]),t._v(" "),a("mu-col",{attrs:{width:"100",desktop:"20"}},[a("span",[t._v("追书："+t._s(t.bookInfo.latelyFollower))])]),t._v(" "),a("mu-col",{attrs:{width:"100",desktop:"20"}},[a("span",[t._v("留存率："+t._s(t.bookInfo.retentionRatio)+"%")])]),t._v(" "),a("mu-col",{attrs:{width:"0",desktop:"40"}})],1),t._v(" "),a("span",{staticClass:"rate"},[t._v("评分："+t._s(t.score))]),a("br"),t._v(" "),a("mu-raised-button",{staticClass:"myButton demo-raised-button",attrs:{label:"开始阅读"}})],1),t._v(" "),a("mu-divider"),a("br"),t._v(" "),a("pre",[t._v(t._s(t.longIntro))])],1)],1)],1),t._v(" "),a("mu-card",{staticClass:"allInfoCard"},[a("mu-tabs",{attrs:{value:t.activeTab},on:{change:t.handleTabChange}},[a("mu-tab",{attrs:{value:"tab1",title:"目录"}}),t._v(" "),a("mu-tab",{attrs:{value:"tab2",title:"书友评论"}})],1),t._v(" "),"tab1"===t.activeTab?a("div",[a("mu-row",{staticClass:"allChapters",attrs:{gutter:""}},t._l(t.allChapters,function(e){return a("mu-col",{key:e.title,staticClass:"chapterList",attrs:{width:"100",desktop:"50"}},[a("span",{staticClass:"chapter"},[t._v(t._s(e.title))]),t._v(" "),a("mu-divider")],1)}))],1):t._e(),t._v(" "),"tab2"===t.activeTab?a("div",[a("mu-list",{staticClass:"commentInfo"},t._l(t.comments,function(e){return a("div",{key:e._id},[a("mu-list-item",{attrs:{title:e.title}},[a("mu-avatar",{attrs:{slot:"leftAvatar",src:t.staticCover+e.author.avatar},slot:"leftAvatar"}),t._v(" "),a("p"),t._v(" "),a("pre",[t._v("              "+t._s(e.content)+"\n            ")])],1),t._v(" "),a("mu-divider",{attrs:{inset:""}})],1)}))],1):t._e()],1)],1)},staticRenderFns:[]};var V=a("Z0/y")(N,S,!1,function(t){a("rDMu")},"data-v-53451384",null).exports,D={data:function(){return{imageInfo:[],staticUrl:this.GLOBAL.ALLAPI.IMGAPI}},mounted:function(){this.getImageDetail()},methods:{getImageDetail:function(){var t=this,e=this.GLOBAL.ALLAPI.photo.getPictureById;p.a.get(e+"?_id="+this.$route.params._id).then(function(e){e.data.code||(t.imageInfo=e.data.data[0])})}}},H={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"imageInfo"}},[a("mu-card",{staticClass:"infoCard"},[a("mu-card-header",[a("h3",[t._v(t._s(t.imageInfo.title))])]),t._v(" "),a("div",{staticClass:"tag-container"},t._l(t.imageInfo.tags,function(e){return a("mu-chip",{key:e,staticClass:"demo-chip",attrs:{backgroundColor:"#F5FFFA",color:"#67c23a"}},[t._v("\n        "+t._s(e)+"\n      ")])})),t._v(" "),t._l(t.imageInfo.image_url,function(e){return a("div",{key:e},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.staticUrl+e,expression:"staticUrl + item"}]})])})],2)],1)},staticRenderFns:[]};var U=a("Z0/y")(D,H,!1,function(t){a("uQUv")},"data-v-59c4abfa",null).exports;s.default.use(u.a);var Z=new u.a({routes:[{path:"/",name:"首页",component:h},{path:"/main",name:"主页",component:w},{path:"/book/rank",name:"小说-排行",component:w},{path:"/book/cate",name:"小说-分类",component:w},{path:"/book/love",name:"小说-收藏",component:w},{path:"/book/list",name:"小说-书单",component:w},{path:"/book/info/:_id",name:"小说-详情",component:V},{path:"/image/rank",name:"图片-排行",component:w},{path:"/image/cate",name:"图片-分类",component:w},{path:"/image/love",name:"图片-收藏",component:w},{path:"/image/info/:_id",name:"图片-展示",component:U},{path:"/other/Meizitu",name:"妹子图",component:A},{path:"/other/meizituinfo",name:"妹子图-详情",component:T,props:!0},{path:"/user/login",name:"登录",component:F},{path:"/user/register",name:"注册",component:M}]}),J=a("q2H9"),Q=a.n(J),X=(a("5s8g"),a("lJzc")),j=a.n(X);function K(){return window.innerWidth>993?1/3:window.innerWidth>450?.5:1}var Y={isDesktop:K(),getWidth:K,ALLAPI:{API:"https://www.aferica.wang/api/getNoEncode/byurl?url=",EncodeAPI:"https://www.aferica.wang/api/getWithEncode/byurl?mainurl=",IMGAPI:"https://www.aferica.wang/api/getimg/byurl?url=",static:"https://www.aferica.wang/api/getimg/byurl?url=http://statics.zhuishushenqi.com",category:{categoryWithBookCount:"http://api.zhuishushenqi.com/cats/lv2/statistics",categoryWithSubCategories:"http://api.zhuishushenqi.com/cats/lv2",categoryInfo:"http://api.zhuishushenqi.com/book/by-categories"},book:{bookInfo:"http://api.zhuishushenqi.com/book",relatedRecommendedBooks:"http://api.zhuishushenqi.com/book",authorBooks:"http://api.zhuishushenqi.com/book/accurate-search",bookChapters:"http://api.zhuishushenqi.com/mix-atoc",bookSources:"http://api.zhuishushenqi.com/atoc",chapterContent:"http://chapter2.zhuishushenqi.com/chapter/",bookSearch:"http://api.zhuishushenqi.com/book/fuzzy-search"},rank:{rankCategory:"http://api.zhuishushenqi.com/ranking/gender",rankInfo:"http://api.zhuishushenqi.com/ranking"},comment:{commentInfo:"http://api.zhuishushenqi.com/post/review/by-book"},bookList:{bookList:"http://api.zhuishushenqi.com/book-list",bookListInfo:"http://api.zhuishushenqi.com/book-list/"},photo:{getPictureByTagsOr:"https://www.aferica.wang/api/picture/getPictureByTagsOr",getPictureByTagsAnd:"https://www.aferica.wang/api/picture/getPictureByTagsAnd",getPictureById:"https://www.aferica.wang/api/picture/getPicture",getPictureNumber:"https://www.aferica.wang/api/picture/getPictureNumber"},user:{captcha:"https://www.aferica.wang/api/common/getCaptchaPng",login:"https://www.aferica.wang/api/user/login",register:"https://www.aferica.wang/api/user/register"}}};s.default.use(j.a),s.default.use(Q.a),s.default.prototype.GLOBAL=Y,s.default.config.productionTip=!1,new s.default({el:"#app",router:Z,components:{App:c},template:"<App/>"})},PGjJ:function(t,e){},fgq6:function(t,e,a){t.exports=a.p+"static/img/img1.35d144b.png"},g85w:function(t,e){},kov6:function(t,e){},m22b:function(t,e,a){t.exports=a.p+"static/img/img3.6e264e6.png"},qIEg:function(t,e,a){t.exports=a.p+"static/img/main.50a3089.png"},rDMu:function(t,e){},uQUv:function(t,e){},uVke:function(t,e){},xx0f:function(t,e,a){t.exports=a.p+"static/img/img2.9bd96df.png"}},["NHnr"]);
//# sourceMappingURL=app.9c0badd066b567bf9ca5.js.map