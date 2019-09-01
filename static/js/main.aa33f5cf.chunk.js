(window["webpackJsonpreact-app"]=window["webpackJsonpreact-app"]||[]).push([[0],{125:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(10),o=r.n(c),s=(r(99),r(166)),i=r(170),l=r(37),u=r(36),p=r(84),h=r(31),d=r(43),m=r(27),f=r(21),b=r(39),O=r(40),y=r(45),v=r(161),g=r(165),E=r(164),j=r(162),w=r(163),k=r(168),P=r(171),S=r(173),x=r(12),L=r(18),C=r.n(L),I=r(19),U=r(60),R=r.n(U),D="/api/";function A(e,t){return D+e.replace(/({(\S+)})/g,function(e,r,n){return t[n]})}var _=function(){function e(){Object(m.a)(this,e)}return Object(f.a)(e,null,[{key:"fetch",value:function(e,t){return R.a.get(A(e,t)).then(function(e){return new Promise(function(t){return setTimeout(function(){return t(e)},2e3)})})}},{key:"save",value:function(e,t){return R.a.post(A(e,t))}}]),e}();function F(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function N(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?F(r,!0).forEach(function(t){Object(x.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):F(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var T=C.a.mark(W),B="USER_LIST_REQUEST",J="USER_LIST_SUCCESS",Q="USER_LIST_FAILURE",M={data:[]};function W(){return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(I.d)(B,C.a.mark(function e(){var t;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(I.b)(_.fetch,"user-list.json");case 3:return t=e.sent,e.next=6,Object(I.c)({type:J,data:t.data});case 6:e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(0),e.next=12,Object(I.c)({type:Q,error:e.t0});case 12:case"end":return e.stop()}},e,null,[[0,8]])}));case 2:case"end":return e.stop()}},T)}var V=r(159),X=function(){return a.a.createElement("div",{style:{textAlign:"center",width:"100%"}},a.a.createElement(V.a,null))},$=function(e){function t(){return Object(m.a)(this,t),Object(b.a)(this,Object(O.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){!this.userListReady()&&this.props.fetchUserList()}},{key:"userListReady",value:function(){return!!this.props.data.length}},{key:"handleChangePage",value:function(e,t){this.props.history.push("/users/page/"+(t+1))}},{key:"render",value:function(){var e=this.props,t=e.fetching,r=e.data,n=e.error,c=this.props.match.params.page-1;return t?a.a.createElement(X,null):a.a.createElement("div",null,a.a.createElement(v.a,null,a.a.createElement(j.a,null,a.a.createElement(w.a,null,a.a.createElement(E.a,null,"ID"),a.a.createElement(E.a,{align:"right"},"User Name"),a.a.createElement(E.a,{align:"right"},"Email"))),a.a.createElement(g.a,null,n?a.a.createElement(S.a,{open:!0,message:n}):r.slice(10*c,10*c+10).map(function(e){return a.a.createElement(w.a,{key:e.name,hover:!0,role:"checkbox",tabIndex:-1},a.a.createElement(E.a,{component:"th",scope:"row"},a.a.createElement(l.b,{to:"/users/".concat(e.userId,"/")},e.userId)),a.a.createElement(E.a,{align:"right"},a.a.createElement(l.b,{to:"/users/".concat(e.userId,"/")},e.name)),a.a.createElement(E.a,{align:"right"},a.a.createElement(l.b,{to:"/users/".concat(e.userId,"/")},e.email)))})),a.a.createElement(k.a,null,a.a.createElement(w.a,null,a.a.createElement(P.a,{colSpan:3,count:r.length,rowsPerPage:10,rowsPerPageOptions:[10],page:c,onChangePage:this.handleChangePage.bind(this)})))))}}]),t}(a.a.Component),q=Object(d.b)(function(e){return e.userListReducer||M},function(e){return{fetchUserList:function(){return e({type:B})}}})($),z=C.a.mark(te);function G(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function H(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?G(r,!0).forEach(function(t){Object(x.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):G(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var K="USER_REQUEST",Y="USER_SUCCESS",Z="USER_FAILURE",ee={data:{userId:"",name:"",email:"",phone:"",acls:[]}};function te(){return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(I.d)(K,C.a.mark(function e(t){var r,n;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.payload.userId,e.prev=1,e.next=4,Object(I.b)(_.fetch,"user/{userId}.json",{userId:r});case 4:return n=e.sent,e.next=7,Object(I.c)({type:Y,data:H({},n.data,{userId:r})});case 7:e.next=13;break;case 9:return e.prev=9,e.t0=e.catch(1),e.next=13,Object(I.c)({type:Z,error:e.t0});case 13:case"end":return e.stop()}},e,null,[[1,9]])}));case 2:case"end":return e.stop()}},z)}function re(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function ne(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?re(r,!0).forEach(function(t){Object(x.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):re(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var ae=C.a.mark(le),ce="ACL_LIST_REQUEST",oe="ACL_LIST_SUCCESS",se="ACL_LIST_FAILURE",ie={data:{}};function le(){return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(I.d)(ce,C.a.mark(function e(){var t;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(I.b)(_.fetch,"access-levels.json");case 3:return t=e.sent,e.next=6,Object(I.c)({type:oe,data:t.data});case 6:e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(0),e.next=12,Object(I.c)({type:se,error:e.t0});case 12:case"end":return e.stop()}},e,null,[[0,8]])}));case 2:case"end":return e.stop()}},ae)}var ue=r(169),pe=r(85),he=r(63),de=function(e){function t(){var e,r;Object(m.a)(this,t);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(r=Object(b.a)(this,(e=Object(O.a)(t)).call.apply(e,[this].concat(a)))).state={data:{}},r}return Object(y.a)(t,e),Object(f.a)(t,[{key:"closeForm",value:function(){this.props.onClose()}},{key:"render",value:function(){var e=this,t=this.props,r=t.data,n=t.aclList;return a.a.createElement("div",null,a.a.createElement(he.b,{initialValues:r,onSubmit:function(t,r){var n=r.setSubmitting;alert(JSON.stringify(t,null,2)),n(!1),e.closeForm.apply(e)}},function(t){var r=t.values,c=t.touched,o=t.errors,s=t.isSubmitting,i=t.handleSubmit,l=t.handleChange,u=t.handleBlur;return a.a.createElement("form",{onSubmit:i},a.a.createElement("label",{htmlFor:"name",style:{display:"block"}},"User Name"),a.a.createElement("input",{id:"name",placeholder:"Enter user name",type:"text",value:r.name,className:o.name&&c.name?"text-input error":"text-input",onChange:l,onBlur:u}),a.a.createElement("label",{htmlFor:"email",style:{display:"block"}},"Email"),a.a.createElement("input",{id:"email",placeholder:"Enter user's email",type:"text",value:r.email,className:o.email&&c.email?"text-input error":"text-input",onChange:l,onBlur:u}),a.a.createElement("label",{htmlFor:"phone",style:{display:"block"}},"Phone"),a.a.createElement("input",{id:"phone",placeholder:"Enter user phone",type:"text",value:r.phone,className:o.phone&&c.phone?"text-input error":"text-input",onChange:l,onBlur:u}),a.a.createElement(he.a,{name:"acls",render:function(e){return a.a.createElement("div",null,Object.entries(n).map(function(t){var n=Object(pe.a)(t,2),c=n[0],o=n[1];return a.a.createElement("div",{key:c},a.a.createElement("input",{name:"acls",type:"checkbox",value:c,checked:r.acls.includes(1*c),onChange:function(t){if(t.target.checked)e.push(1*c);else{var n=r.acls.indexOf(1*c);e.remove(n)}}}),o)}))}}),a.a.createElement("p",null,a.a.createElement(ue.a,{variant:"contained",color:"primary",type:"submit",disabled:s},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"),a.a.createElement(ue.a,{onClick:e.closeForm.bind(e)},"\u0417\u0430\u043a\u0440\u044b\u0442\u044c")))}))}}]),t}(a.a.Component);function me(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var fe=function(e){function t(){var e,r;Object(m.a)(this,t);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(r=Object(b.a)(this,(e=Object(O.a)(t)).call.apply(e,[this].concat(a)))).state={edit:!1},r}return Object(y.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchUser(this.props.match.params.id),!this.aclListLoaded()&&this.props.fetchAclList()}},{key:"resolveAccessName",value:function(e){return Object.keys(this.props.aclList).length?this.props.aclList[e]:"loading..."}},{key:"aclListLoaded",value:function(){return!!Object.keys(this.props.aclList).length}},{key:"cardLoaded",value:function(){return!this.props.fetching&&!!Object.keys(this.props.data).length}},{key:"handleEditClick",value:function(e){this.props.history.push("/users/".concat(this.props.match.params.id,"/edit")),this.setState({edit:!0})}},{key:"handleFormClose",value:function(){this.props.history.goBack(),this.setState({edit:!1})}},{key:"render",value:function(){var e=this,t=this.props,r=t.fetching,n=t.error,c=t.data;return this.props.match.isExact?a.a.createElement("div",null,a.a.createElement("p",null,a.a.createElement("label",null,"User Name: "),c.name),a.a.createElement("p",null,a.a.createElement("label",null,"Email: "),c.email),r?a.a.createElement(X,null):n?a.a.createElement(S.a,{open:!0,message:n}):a.a.createElement("div",null,a.a.createElement("p",null,a.a.createElement("label",null,"Phone: "),c.phone),c.acls.map(function(t){return a.a.createElement("p",{key:t},a.a.createElement("label",null,"Access: "),e.resolveAccessName(t))})),this.cardLoaded()&&this.aclListLoaded()?a.a.createElement(ue.a,{variant:"contained",color:"primary",onClick:this.handleEditClick.bind(this)},"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"):""):a.a.createElement(u.b,{path:"/users/:id/edit",render:function(t){return a.a.createElement(de,Object.assign({},t,{data:e.props.data,aclList:e.props.aclList,onClose:e.handleFormClose.bind(e)}))}})}}]),t}(a.a.Component),be=Object(d.b)(function(e){var t=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?me(r,!0).forEach(function(t){Object(x.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):me(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},e.userReducer||ee,{aclList:e.aclReducer.data});if(t.error)return t;var r=e.userListReducer.data.find(function(e){return e.userId===t.data.userId});return r?(Object.assign(t.data,r),t):t},function(e){return{fetchUser:function(t){return e({type:K,payload:{userId:t}})},fetchAclList:function(){return e({type:ce})}}})(fe),Oe=C.a.mark(ye);function ye(){return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(I.a)([W(),te(),le()]);case 2:case"end":return e.stop()}},Oe)}var ve=Object(h.c)({userListReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case B:return N({},e,{fetching:!0,data:[],error:null});case J:return N({},e,{fetching:!1,data:t.data});case Q:return N({},e,{fetching:!1,data:[],error:"\u041d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0441\u043f\u0438\u0441\u043e\u043a \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439: "+t.error.message});default:return e}},userReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case K:return H({},e,{fetching:!0,data:{userId:t.payload.userId},error:null});case Y:return H({},e,{fetching:!1,data:t.data});case Z:return H({},e,{fetching:!1,error:"\u041d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f: "+t.error.message});default:return e}},aclReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ce:return ne({},e,{fetching:!0,data:{},error:null});case oe:return ne({},e,{fetching:!1,data:t.data});case se:return ne({},e,{fetching:!1,data:{},error:"\u041d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0441\u043f\u0438\u0441\u043e\u043a \u043f\u043e\u043b\u043d\u043e\u043c\u043e\u0447\u0438\u0439: "+t.error.message});default:return e}}}),ge=Object(p.a)(),Ee=Object(h.e)(ve,Object(h.a)(ge));ge.run(ye);var je=function(){var e=Object(i.a)(function(e){return{root:{width:"100%",marginTop:e.spacing(3),overflowX:"auto"}}})();return a.a.createElement(d.a,{store:Ee},a.a.createElement("div",{className:"App"},a.a.createElement(l.a,null,a.a.createElement(s.a,{className:e.root},a.a.createElement(u.a,{from:"/",to:"/users/page/1"}),a.a.createElement(u.d,null,a.a.createElement(u.b,{path:"/users/page/:page",component:q}),a.a.createElement(u.b,{path:"/users/:id",component:be}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(je,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},94:function(e,t,r){e.exports=r(125)},99:function(e,t,r){}},[[94,1,2]]]);
//# sourceMappingURL=main.aa33f5cf.chunk.js.map