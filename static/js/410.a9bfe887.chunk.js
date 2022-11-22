"use strict";(self.webpackChunkreact_node_team_project=self.webpackChunkreact_node_team_project||[]).push([[410],{1410:function(e,t,n){n.r(t),n.d(t,{default:function(){return Y}});var r=n(885),a=n(2791),s="NoticesSearch_SearchContainer__o78d+",o="NoticesSearch_SearchTitle__m4DZ1",i="NoticesSearch_SearchInput__MejtC",c="NoticesSearch_SearchForm__mpL9p",l="NoticesSearch_SearchBtn__TGMAQ",u=n(184);function d(e){var t=e.onSearch;return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)("div",{className:s,children:[(0,u.jsx)("h2",{className:o,children:"Find your favorite pet"}),(0,u.jsxs)("form",{className:c,onSubmit:function(e){e.preventDefault();var n=e.target.search.value;t(n),e.target.search.value=""},children:[(0,u.jsx)("input",{className:i,type:"text",name:"search",autoFocus:!0,placeholder:"Search",required:!0}),(0,u.jsx)("button",{className:l,type:"submit"})]})]})})}var h=n(1413),f=n(5361),v="NoticesCategoriesNav_btnLink__AC6BN",m="NoticesCategoriesNav_wrapper__DuH-X",p=n(1087),x=n(7689),j=n(9434),_=n(9249),N=[{id:"sell",text:"sell",active:!1},{id:"lost-found",text:"lost/found",active:!1},{id:"for-free",text:"In good hends",active:!1}],g=[{id:"favorite",text:"Favorite ads",active:!1},{id:"own",text:"My ads",active:!1}];function b(){var e=(0,j.v9)(_.um.getIsLoggedIn),t=(0,a.useState)(e?[].concat(N,g):N),n=(0,r.Z)(t,2),s=n[0],o=n[1],i=(0,x.TH)();return(0,a.useEffect)((function(){var t,n=i.pathname.split("/");t=e?[].concat(N,g).map((function(e){return(0,h.Z)((0,h.Z)({},e),{},{active:n[2]===e.id})})):s.map((function(e){return(0,h.Z)((0,h.Z)({},e),{},{active:n[2]===e.id})})),o(t)}),[i,e]),(0,u.jsx)("div",{className:m,children:s.map((function(e){var t=e.id,n=e.text,r=(e.smole,e.active);return(0,u.jsx)(p.rU,{to:"/notices/".concat(t),className:v,style:{color:"inherit"},children:(0,u.jsx)(f.Z,{text:n,smole:!0,active:r})},t)}))})}var S,Z=n(9869),y="AddNoticeButton_btnWrapper__UjUEZ",w="AddNoticeButton_btn__jkeNX",A="AddNoticeButton_icon__QL6Nl",C=["title","titleId"];function F(){return F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},F.apply(this,arguments)}function O(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function k(e,t){var n=e.title,r=e.titleId,s=O(e,C);return a.createElement("svg",F({width:18,height:18,viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},s),n?a.createElement("title",{id:r},n):null,S||(S=a.createElement("path",{d:"M9 17V9M9 9V1M9 9H17M9 9H1",stroke:"white",strokeWidth:2,strokeLinecap:"round"})))}var I=a.forwardRef(k),M=(n.p,n(4805)),B=n(9085),D=n(4942),L=n(5705),E=n(2797),z=E.Ry({name:E.Z_().required().matches(/^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/,"Name should contain only letters "),breed:E.Z_().required().matches(/^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/,"Breed  should contain only letters "),birthday:E.Z_().required()}),H=function(e){var t=e.nextStep,n=(e.handleFormData,e.values),s=(0,a.useState)(!1),o=(0,r.Z)(s,2),i=o[0],c=o[1];return console.log((function(e){e.preventDefault(),""===n.name||""===n.breed||""===n.birthday?c(!0):t()}),i),(0,u.jsx)("div",{children:(0,u.jsx)(L.J9,{validationSchema:z,children:(0,u.jsxs)(L.l0,{children:[(0,u.jsx)("label",{htmlFor:"name",children:"Name pet"}),(0,u.jsx)(L.gN,{id:"name",name:"name",placeholder:"Type name pet"})]})})})},T=function(e){var t=e.nextStep,n=(e.handleFormData,e.prevStep,e.values),s=(0,a.useState)(!1),o=(0,r.Z)(s,2),i=o[0],c=o[1];return console.log((function(e){e.preventDefault(),""===n.photo||""===n.comments?c(!0):t()}),i),(0,u.jsx)("div",{})},q=function(e){e.values;return(0,u.jsx)(u.Fragment,{})},P="AddNoticeModal_Wrapper__hlzZC",W="AddNoticeModal_header__1pB72";function Q(){var e=(0,a.useState)(1),t=(0,r.Z)(e,2),n=t[0],s=t[1],o=(0,a.useState)({name:"",birthday:"",breed:"",photo:"",comments:""}),i=(0,r.Z)(o,2),c=i[0],l=i[1],d=function(){s(n+1)},f=function(e){return function(t){var n=t.target.value;l((function(t){return(0,h.Z)((0,h.Z)({},t),{},(0,D.Z)({},e,n))}))}};switch(n){case 1:return(0,u.jsxs)("div",{className:P,children:[(0,u.jsx)("h1",{className:W,children:"Add pet"}),(0,u.jsx)(H,{nextStep:d,handleFormData:f,values:c})]});case 2:return(0,u.jsx)("div",{children:(0,u.jsx)(T,{nextStep:d,prevStep:function(){s(n-1)},handleFormData:f,values:c})});case 3:return(0,u.jsx)("div",{children:(0,u.jsx)(q,{values:c})});default:return(0,u.jsx)("div",{})}}var U=n(3081);function R(){var e=(0,M.useMediaQuery)({maxWidth:767}),t="Add pet",n=(0,j.v9)(Z.Z.getIsLoggedIn),s=(0,a.useState)(!1),o=(0,r.Z)(s,2),i=o[0],c=o[1];return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("div",{className:y,children:[!e&&t,(0,u.jsxs)("button",{type:"button",className:w,onClick:function(e){if(!n)return B.Am.info("You must be logged in");c(!0)},children:[(0,u.jsx)(I,{className:A}),e&&t]})]}),i&&(0,u.jsx)(U.Z,{onClose:function(){c(!1)},children:(0,u.jsx)(Q,{})})]})}var V="NoticesPage_btnBox__u9YgI",X=n(6493);function Y(){var e=[],t=(0,x.TH)().pathname,n=(0,x.s0)(),s=(0,a.useState)(e),o=(0,r.Z)(s,2),i=o[0],c=o[1];return(0,a.useEffect)((function(){"/notices/lost-found"===t||"/notices/for-free"===t||"/notices/favotire"===t||"/notices/own"===t||n("/notices/sell")}),[]),(0,u.jsxs)(X.Z,{children:[(0,u.jsx)(d,{onSearch:function(t){var n=e.filter((function(e){return e.titleOfAd.toLowerCase().includes(t.toLowerCase())}));c(n),console.log(i)}}),(0,u.jsxs)("div",{className:V,children:[(0,u.jsx)(b,{}),(0,u.jsx)(R,{})]}),(0,u.jsx)(x.j3,{})]})}}}]);
//# sourceMappingURL=410.a9bfe887.chunk.js.map