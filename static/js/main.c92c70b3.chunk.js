(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{130:function(e,t,n){e.exports={cont:"Preloader_cont__no7rc"}},131:function(e,t,n){e.exports={input:"ProfileStatus_input__zWunz"}},132:function(e,t,n){},14:function(e,t,n){e.exports={navbar:"Navbar_navbar__BiLsO",item:"Navbar_item__2p_ZY",active:"Navbar_active__bbJag"}},163:function(e,t,n){},164:function(e,t,n){},24:function(e,t,n){e.exports={dialogs:"Dialogs_dialogs__jrLN6",dialogs__item:"Dialogs_dialogs__item__-Xiwo",active:"Dialogs_active__xpsSl",masseges:"Dialogs_masseges__3zxdR",img:"Dialogs_img__3_-OF"}},25:function(e,t,n){e.exports={usersContainer:"Users_usersContainer__KhVtj",btn:"Users_btn__19U-D",userBlock:"Users_userBlock__1qZLy",namephoto:"Users_namephoto__h_1NU",left:"Users_left__DmHGB",name:"Users_name__1EWsQ",photo:"Users_photo__27W9R",btnFo:"Users_btnFo__1I4h2",btnUn:"Users_btnUn__3_2fn",right:"Users_right__2ABte",status:"Users_status__6SxyQ",geo:"Users_geo__3Uu8v",nav:"Users_nav__3bmQ6",selected:"Users_selected__3789m",nav_item:"Users_nav_item__2oahu",load:"Users_load__HZ_U0"}},288:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n(65),i=n.n(a),r=(n(163),n(18)),o=n(19),c=n(21),u=n(20),l=n(10),j=(n(164),n(5)),d=n(9),b=n(128).create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"e7cbc77a-ac77-4c35-86a1-8ab289d056c4"}}),p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return b.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},h=function(e){return b.post("follow/".concat(e))},f={getProfile:function(e){return b.get("profile/"+e)},getStatus:function(e){return b.get("profile/status/"+e)},updateStatus:function(e){return b.put("profile/status",{status:e})}},g=function(){return b.get("auth/me")},m=function(e,t,n){return b.post("/auth/login",{email:e,password:t,rememberMe:n})},O=function(){return b.delete("/auth/login")},_=n(37),x="SET_USER_DATA",v={userID:null,email:null,login:null,isAuth:!1},P=function(e,t,n,s){return{type:x,payload:{userID:e,email:t,login:n,isAuth:s}}},N=function(){return function(e){return g().then((function(t){if(0===t.data.resultCode){var n=t.data.data,s=n.id,a=n.email,i=n.login;e(P(s,a,i,!0))}}))}},S=function(){return function(e){O().then((function(t){0===t.data.resultCode&&e(P(null,null,null,!1))}))}},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(j.a)(Object(j.a)({},e),t.payload);default:return e}},C=n(52),U=n.n(C),w=n(11),k=n(0),D=function(e){return Object(k.jsxs)("header",{className:U.a.header,children:[Object(k.jsx)("img",{className:U.a.img,src:"https://upload.wikimedia.org/wikipedia/commons/d/db/Zeronet_logo.png",alt:"d"}),Object(k.jsx)("h1",{className:U.a.name,children:"Osaco"}),Object(k.jsx)("div",{className:U.a.login,children:e.isAuth?Object(k.jsxs)("div",{children:[Object(k.jsx)("div",{children:e.login}),Object(k.jsx)("button",{onClick:e.logout,children:"logout"})]}):Object(k.jsx)(w.b,{to:"/login",children:" LOGIN "})})]})},A=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(k.jsx)(D,Object(j.a)(Object(j.a)({},this.props),{},{logout:this.props.logout}))}}]),n}(s.Component),E=Object(d.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:S})(A),T=n(14),F=n.n(T),I=function(){return Object(k.jsxs)("nav",{className:F.a.navbar,children:[Object(k.jsx)("div",{className:F.a.item,children:Object(k.jsx)(w.b,{to:"/profile",activeClassName:F.a.active,children:"Profile"})}),Object(k.jsx)("div",{className:F.a.item,children:Object(k.jsx)(w.b,{to:"/dialogs",activeClassName:F.a.active,children:"Massege"})}),Object(k.jsx)("div",{className:F.a.item,children:Object(k.jsx)(w.b,{to:"/news",activeClassName:F.a.active,children:"News"})}),Object(k.jsx)("div",{className:F.a.item,children:Object(k.jsx)(w.b,{to:"/music",activeClassName:F.a.active,children:"Music"})}),Object(k.jsx)("div",{className:F.a.item,children:Object(k.jsx)(w.b,{to:"/settings",activeClassName:F.a.active,children:"Settings"})}),Object(k.jsx)("div",{className:F.a.item,children:Object(k.jsx)(w.b,{to:"/friends",activeClassName:F.a.active,children:"Friends"})}),Object(k.jsx)("div",{className:F.a.item,children:Object(k.jsx)(w.b,{to:"/users",activeClassName:F.a.active,children:"Users"})})]})},M=n(41),z="SEND-MESSAGE",B={messages:[{id:1,message:"hellow world"},{id:1,message:"hi"},{id:1,message:"new massfew"}],dialogs:[{id:1,name:"Sashula"},{id:2,name:"Dima"},{id:3,name:"Lesha"}]},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case z:var n=t.newMessageBody;return Object(j.a)(Object(j.a)({},e),{},{messages:[].concat(Object(M.a)(e.messages),[{id:6,message:n}])});default:return e}},R=n(24),H=n.n(R),Z=function(e){var t="/dialogs/"+e.id;return Object(k.jsx)("div",{className:H.a.dialog,children:Object(k.jsxs)(w.b,{to:t,className:H.a.dialogItem,activeClassName:H.a.active,children:[Object(k.jsx)("img",{className:H.a.img,src:"https://icons.veryicon.com/png/o/business/multi-color-financial-and-business-icons/user-139.png",alt:"avatar_user_massage"}),Object(k.jsx)("p",{children:e.name})]})})},Q=function(e){return Object(k.jsx)("div",{className:H.a.message,children:e.message})},G=n(124),W=n(125),J=function(e){if(!e)return"is req"},K=function(e){return function(t){if(t.length>e)return"Max len is ".concat(e)}},Y=n(94),X=n(53),q=n.n(X),V=["input","meta"],$=["input","meta"],ee=function(e){var t=e.input,n=e.meta,s=Object(Y.a)(e,V),a=n.touched&&n.error;return Object(k.jsxs)("div",{className:q.a.formcontroll+" "+(a?q.a.error:" "),children:[Object(k.jsx)("textarea",Object(j.a)(Object(j.a)({},t),s)),a?Object(k.jsx)("span",{children:n.error}):Object(k.jsx)("span",{children:"ok"})]})},te=function(e){var t=e.input,n=e.meta,s=Object(Y.a)(e,$),a=n.touched&&n.error;return Object(k.jsxs)("div",{className:q.a.formcontroll+" "+(a?q.a.error:" "),children:[Object(k.jsx)("input",Object(j.a)(Object(j.a)({},t),s)),a?Object(k.jsx)("span",{children:n.error}):Object(k.jsx)("span",{children:"ok"})]})},ne=K(50),se=Object(W.a)({form:"dialog"})((function(e){return Object(k.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(k.jsx)(G.a,{component:ee,name:"dialog",placeholder:"Enter message text",validate:[J,ne]}),Object(k.jsx)("button",{children:"Send"})]})})),ae=function(e){var t=e.dialogs,n=t.dialogs.map((function(e){return Object(k.jsx)(Z,{name:e.name,id:e.id})})),s=t.messages.map((function(e){return Object(k.jsx)(Q,{message:e.message})}));return Object(k.jsxs)("div",{className:H.a.dialogs,children:[Object(k.jsx)("div",{className:H.a.dialogs__item,children:n}),Object(k.jsxs)("div",{className:H.a.masseges,children:[Object(k.jsx)("div",{children:s}),Object(k.jsx)("div",{children:Object(k.jsx)(se,{onSubmit:function(t){e.sendMessage(t.dialog)}})})]})]})},ie=function(e){return{isAuth:e.auth.isAuth}},re=function(e){var t=function(t){Object(c.a)(s,t);var n=Object(u.a)(s);function s(){return Object(r.a)(this,s),n.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return this.props.isAuth?Object(k.jsx)(e,Object(j.a)({},this.props)):Object(k.jsx)(l.a,{to:"/login"})}}]),s}(s.Component);return Object(d.b)(ie)(t)},oe=n(8),ce=Object(oe.d)(Object(d.b)((function(e){return{dialogs:e.dialogs,isAuth:e.auth.isAuth}}),(function(e){return{sendMessage:function(t){e(function(e){return{type:z,newMessageBody:e}}(t))}}})),re)(ae),ue="FOLLOW",le="UNFOLLOW",je="SET_USERS",de="SET_CURRENT_PAGE",be="SET_TOTAL_USER_COUNT",pe="TOGLE_IS_FETCHING",he="TOGLE_FOLLOW_DISABLE",fe={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!1,followDiasable:[]},ge=function(e){return{type:je,users:e}},me=function(e){return{type:de,currentPage:e}},Oe=function(e){return{type:be,totalUsersCount:e}},_e=function(e){return{type:pe,isFetching:e}},xe=function(e,t){return{type:he,isFetching:e,userId:t}},ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ue:return Object(j.a)(Object(j.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userID?Object(j.a)(Object(j.a)({},e),{},{follow:!0}):e}))});case le:return Object(j.a)(Object(j.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userID?Object(j.a)(Object(j.a)({},e),{},{follow:!1}):e}))});case je:return Object(j.a)(Object(j.a)({},e),{},{users:t.users});case de:return Object(j.a)(Object(j.a)({},e),{},{currentPage:t.currentPage});case be:return Object(j.a)(Object(j.a)({},e),{},{totalUsersCount:t.totalUsersCount});case pe:return Object(j.a)(Object(j.a)({},e),{},{isFetching:t.isFetching});case he:return Object(j.a)(Object(j.a)({},e),{},{followDiasable:t.isFetching?[].concat(Object(M.a)(e.followDiasable),[t.userId]):e.followDiasable.filter((function(e){return e!==t.userId}))});default:return e}},Pe=n(25),Ne=n.n(Pe),Se=n.p+"static/media/photo.6d818f3e.jpeg",ye=n(51),Ce=n(93),Ue=n.n(Ce),we=function(e){for(var t=e.totalUsersCount,n=e.pageSize,a=e.currentPage,i=e.onPageChange,r=e.portionSize,o=void 0===r?15:r,c=Math.ceil(t/10),u=[],l=1;l<=c;l++)u.push(l);var j=Math.ceil(c/n),d=Object(s.useState)(1),b=Object(ye.a)(d,2),p=b[0],h=b[1],f=(p-1)*o+1,g=p*o;return Object(k.jsxs)("div",{children:[p>1&&Object(k.jsx)("button",{onClick:function(){h(p-1)},children:"PREV"}),u.filter((function(e){return e>=f&&e<=g})).map((function(e){return Object(k.jsx)("span",{className:a===e?Ue.a.selected:Ue.a.nav_item,onClick:function(t){i(e)},children:e},e)})),j>p&&Object(k.jsx)("button",{onClick:function(){h(p+1)},children:"NEXT"})]})},ke=function(e){return Object(k.jsxs)("div",{className:Ne.a.usersContainer,children:[Object(k.jsx)("div",{className:Ne.a.nav,children:Object(k.jsx)(we,{totalUsersCount:e.totalUsersCount,pageSize:e.pageSize,currentPage:e.currentPage,onPageChange:e.onPageChange})}),e.users.map((function(t){return Object(k.jsxs)("div",{className:Ne.a.userBlock,children:[Object(k.jsxs)("div",{className:Ne.a.left,children:[Object(k.jsxs)("div",{className:Ne.a.namephoto,children:[Object(k.jsx)(w.b,{to:"/profile/"+t.id,children:Object(k.jsx)("img",{src:null!=t.photos.small?t.photos.small:Se,alt:"userphoto",className:Ne.a.photo})}),Object(k.jsx)("div",{className:Ne.a.name,children:t.name})]}),t.follow?Object(k.jsx)("button",{disabled:e.followDiasable.some((function(e){return e===t.id})),onClick:function(){e.unfollow(t.id)},children:"Unfollow"}):Object(k.jsx)("button",{disabled:e.followDiasable.some((function(e){return e===t.id})),onClick:function(){e.follow(t.id)},children:"Follow"})]}),Object(k.jsxs)("div",{className:Ne.a.right,children:[Object(k.jsx)("div",{className:Ne.a.status,children:t.status}),Object(k.jsxs)("div",{className:Ne.a.geo,children:[Object(k.jsx)("span",{children:"\u0432\u0442\u043a"}),Object(k.jsx)("span",{children:"\u0449\u043a\u0431"})]})]})]},t.id)}))]})},De=n(130),Ae=n.n(De),Ee=n.p+"static/media/loading-buffering.c7d9f081.gif",Te=function(){return Object(k.jsx)("div",{className:Ae.a.cont,children:Object(k.jsx)("img",{src:Ee,alt:"sa"})})},Fe=function(e){return e.userPage.users},Ie=function(e){return e.userPage.pageSize},Me=function(e){return e.userPage.totalUsersCount},ze=function(e){return e.userPage.currentPage},Be=function(e){return e.userPage.isFetching},Le=function(e){return e.userPage.followDiasable},Re=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(r.a)(this,n);for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).onPageChange=function(t){e.props.getUsers(t,e.props.pageSize)},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(k.jsx)(k.Fragment,{children:this.props.isFetching?Object(k.jsx)(Te,{}):Object(k.jsx)(ke,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChange:this.onPageChange,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followDiasable:this.props.followDiasable})})}}]),n}(s.Component),He=Object(d.b)((function(e){return{users:Fe(e),pageSize:Ie(e),totalUsersCount:Me(e),currentPage:ze(e),isFetching:Be(e),followDiasable:Le(e)}}),{setUsers:ge,setCurrentPage:me,setTotalUsersCount:Oe,getUsers:function(e,t){return function(n){n(_e(!0)),n(me(e)),p(e,t).then((function(e){n(_e(!1)),n(ge(e.items)),n(Oe(e.totalCount))}))}},follow:function(e){return function(t){t(xe(!0,e)),h(e).then((function(n){0===n.data.resultCode&&t(function(e){return{type:ue,userID:e}}(e)),t(xe(!1,e))}))}},unfollow:function(e){return function(t){t(xe(!0,e)),h(e).then((function(n){0===n.data.resultCode&&t(function(e){return{type:le,userID:e}}(e)),t(xe(!1,e))}))}}})(Re),Ze="ADD-POST",Qe="SET_USER_PROFILE",Ge="SET_STATUS",We="UPDATE_STATUS",Je={posts:[{id:1,message:"hellow world!",like:45325},{id:2,message:"hi",like:5245}],profile:null,status:""},Ke=function(e){return{type:Ge,status:e}},Ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ze:var n={id:5,message:t.postBody,like:0};return Object(j.a)(Object(j.a)({},e),{},{posts:[].concat(Object(M.a)(e.posts),[n])});case Qe:return Object(j.a)(Object(j.a)({},e),{},{profile:t.profile});case Ge:case We:return Object(j.a)(Object(j.a)({},e),{},{status:t.status});default:return e}},Xe=n(71),qe=n.n(Xe),Ve=n(54),$e=n.n(Ve),et=function(e){return Object(k.jsxs)("div",{className:$e.a.card,children:[Object(k.jsxs)("div",{className:$e.a.block,children:[Object(k.jsx)("img",{className:$e.a.img,src:"https://handcraftguide.com/sites/default/files/styles/original___water/public/sketchingforkids1handcraftguide.com__0.jpg?itok=CiUYaUmE",alt:""}),Object(k.jsx)("div",{className:$e.a.massage,children:e.message})]}),Object(k.jsxs)("span",{children:["like ",e.like]})]})},tt=K(10),nt=Object(W.a)({form:"post"})((function(e){return Object(k.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(k.jsx)(G.a,{component:ee,name:"postBody",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442",validate:[J,tt]}),Object(k.jsx)("button",{children:"Add"})]})})),st=function(e){var t=e.posts.map((function(e){return Object(k.jsx)(et,{message:e.message,like:e.like},e.like)}));return Object(k.jsxs)("div",{className:qe.a.my_post,children:[Object(k.jsxs)("div",{className:qe.a.addPostblock,children:[Object(k.jsx)("h2",{className:qe.a.title,children:"My posts"}),Object(k.jsx)(nt,{onSubmit:function(t){e.addPosts(t.postBody)}})]}),Object(k.jsx)("div",{className:!0,children:t})]})},at=Object(d.b)((function(e){return{posts:e.profile.posts}}),(function(e){return{addPosts:function(t){e(function(e){return{type:Ze,postBody:e}}(t))}}}))(st),it=n(72),rt=n.n(it),ot=n(131),ct=n.n(ot),ut=function(e){var t=Object(s.useState)(!1),n=Object(ye.a)(t,2),a=n[0],i=n[1],r=Object(s.useState)(e.status),o=Object(ye.a)(r,2),c=o[0],u=o[1];Object(s.useEffect)((function(){u(e.status),console.log("res")}),[e.status]);return Object(k.jsx)("div",{children:a?Object(k.jsx)("input",{onChange:function(e){u(e.currentTarget.value)},value:c,type:"text",autoFocus:!0,onBlur:function(){i(!1),e.updateStatus(c)},className:ct.a.input}):Object(k.jsx)("span",{onClick:function(){i(!0)},children:e.status||"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0441\u0442\u0430\u0442\u0443\u0441"})})},lt=function(e){return e.profile?Object(k.jsxs)("div",{children:[Object(k.jsx)("div",{children:Object(k.jsx)("img",{className:rt.a.img,src:"https://img.freepik.com/free-photo/background-in-dark-colors-with-triangular-elements_183270-846.jpg?size=626&ext=jpg"})}),Object(k.jsxs)("div",{className:rt.a.profile__info,children:[Object(k.jsx)("div",{children:Object(k.jsx)("img",{className:rt.a.img_prof,src:e.profile.photos.large,alt:"d"})}),Object(k.jsx)(ut,{status:e.status,updateStatus:e.updateStatus})]})]}):Object(k.jsx)(Te,{})},jt=function(e){return Object(k.jsxs)("div",{children:[Object(k.jsx)(lt,{profile:e.profile,status:e.status,updateStatus:e.updateStatus}),Object(k.jsx)(at,{})]})},dt=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=this.props.loginUserId),this.props.getProfile(e),this.props.getStatus(e)}},{key:"render",value:function(){return Object(k.jsx)(jt,Object(j.a)(Object(j.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),n}(s.Component),bt=Object(oe.d)(Object(d.b)((function(e){return{profile:e.profile.profile,status:e.profile.status,loginUserId:e.auth.userID,isAuth:e.auth.isAuth}}),{getProfile:function(e){return function(t){f.getProfile(e).then((function(e){var n;t((n=e.data,{type:Qe,profile:n}))}))}},getStatus:function(e){return function(t){f.getStatus(e).then((function(e){t(Ke(e.data))}))}},updateStatus:function(e){return function(t){f.updateStatus(e).then((function(n){0===n.data.resultCode&&t(Ke(e))}))}}}),l.f,re)(dt),pt=Object(W.a)({form:"login"})((function(e){return Object(k.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(k.jsx)("div",{children:Object(k.jsx)(G.a,{name:"email",component:te,type:"text",placeholder:"login",validate:[J]})}),Object(k.jsx)("div",{children:Object(k.jsx)(G.a,{name:"password",component:te,type:"text",placeholder:"password",validate:[J]})}),Object(k.jsxs)("div",{children:[Object(k.jsx)("span",{children:"remember me"}),Object(k.jsx)(G.a,{name:"rememberMe",component:te,type:"checkbox",validate:[J]})]}),e.error,Object(k.jsx)("button",{children:"login"})]})})),ht=n(132),ft=n.n(ht),gt=function(e){return e.isAuth?Object(k.jsx)(l.a,{to:"/profile"}):Object(k.jsxs)("div",{className:ft.a.loginForm,children:[Object(k.jsx)("h1",{children:"Login"}),Object(k.jsx)(pt,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}})]})},mt=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(k.jsx)(gt,{isAuth:this.props.isAuth,login:this.props.login,logout:this.props.logout})}}]),n}(s.Component),Ot=Object(d.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(s){m(e,t,n).then((function(e){0===e.data.resultCode?s(N()):s(Object(_.a)("login",{_error:e.data.messages[0]}))}))}},logout:S})(mt),_t="SET_INITIALIZED",xt={initialized:!1},vt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _t:return Object(j.a)(Object(j.a)({},e),{},{initialized:!0});default:return e}},Pt=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.initialize()}},{key:"render",value:function(){return this.props.initialized?Object(k.jsxs)("div",{className:"app_wrapper",children:[Object(k.jsx)(E,{}),Object(k.jsx)(I,{}),Object(k.jsxs)("div",{className:"app_wrapper_cont",children:[Object(k.jsx)(l.b,{path:"/profile/:userId?",render:function(){return Object(k.jsx)(bt,{})}}),Object(k.jsx)(l.b,{path:"/dialogs",render:function(){return Object(k.jsx)(ce,{})}}),Object(k.jsx)(l.b,{path:"/users",render:function(){return Object(k.jsx)(He,{})}}),Object(k.jsx)(l.b,{path:"/login",render:function(){return Object(k.jsx)(Ot,{})}})]})]}):Object(k.jsx)(Te,{})}}]),n}(s.Component),Nt=Object(oe.d)(l.f,Object(d.b)((function(e){return{initialized:e.app.initialized}}),{initialize:function(){return function(e){e(N()).then((function(){e({type:_t})}))}}}))(Pt),St={},yt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:St;return e},Ct=n(133),Ut=n(126),wt=Object(oe.c)({profile:Ye,dialogs:L,sidebar:yt,userPage:ve,auth:y,form:Ut.a,app:vt}),kt=Object(oe.e)(wt,Object(oe.a)(Ct.a));i.a.render(Object(k.jsx)(w.a,{children:Object(k.jsx)(d.a,{store:kt,children:Object(k.jsx)(Nt,{})})}),document.getElementById("root"))},52:function(e,t,n){e.exports={header:"Header_header__3OnRM",img:"Header_img__2Uje7",name:"Header_name__3_38T",login:"Header_login__1BXmT"}},53:function(e,t,n){e.exports={formcontroll:"FormsControls_formcontroll__nZYV0",error:"FormsControls_error__MK-WG"}},54:function(e,t,n){e.exports={card:"Posts_card__1b1HZ",img:"Posts_img__297Mj",massage:"Posts_massage__ZuRNA",block:"Posts_block__Qt1O3"}},71:function(e,t,n){e.exports={my_post:"MyPosts_my_post__QnROQ",input:"MyPosts_input__2ryBp",addPostblock:"MyPosts_addPostblock__3e0ni",title:"MyPosts_title__2e8gr"}},72:function(e,t,n){e.exports={img:"Profile_img__35Yrg",img_prof:"Profile_img_prof__OQQev",profile__info:"Profile_profile__info__1L8bQ"}},93:function(e,t,n){e.exports={usersContainer:"Paginator_usersContainer__3LB4X",btn:"Paginator_btn__sp7F9",userBlock:"Paginator_userBlock__37noH",namephoto:"Paginator_namephoto__5JDB8",left:"Paginator_left__324Tc",name:"Paginator_name__H-E0R",photo:"Paginator_photo__1Nsw0",btnFo:"Paginator_btnFo__1Kcyk",btnUn:"Paginator_btnUn__2k8nj",right:"Paginator_right__mOjK8",status:"Paginator_status__z46pP",geo:"Paginator_geo__1iBqZ",nav:"Paginator_nav__3uDcJ",selected:"Paginator_selected__3PSZC",nav_item:"Paginator_nav_item__31pph",load:"Paginator_load__3Ui59"}}},[[288,1,2]]]);
//# sourceMappingURL=main.c92c70b3.chunk.js.map