"use strict";(self.webpackChunkreact_node_team_project=self.webpackChunkreact_node_team_project||[]).push([[612],{5084:function(e,t,a){a.d(t,{Z:function(){return l}});var n="DropList_DropList__rRKqA",r="DropList_DropItem__iUAth",s=a(184);function l(e){var t=e.list,a=e.onSelect;return(0,s.jsx)(s.Fragment,{children:t.length>0&&(0,s.jsx)("ul",{className:n,children:t.map((function(e){return e.city?(0,s.jsxs)("li",{className:r,onClick:function(){return a("".concat(e.city,", ").concat(e.region))},children:[e.city,", ",e.region]},e._id):(0,s.jsx)("li",{className:r,onClick:function(){return a(e.breed)},children:e.breed},e._id)}))})})}},613:function(e,t){var a={maskInput:function(e){var t,a=e.target,n=a.dataset.pattern,r=a.dataset.prefix,s=0,l=0,i="";r&&(s=r.length,i+=r,a.value.length<r.length&&(a.value=r)),t=r&&r===a.value.slice(0,r.length)?a.value.replace(r,"").replace(/[^\d]/g,""):a.value.replace(/[^\d]/g,"");for(var o=s;o<n.length;o++)t[l]&&("*"!==n[o]?i+=n[o]:(i+=t[l],l++));a.value=i},onMaskedInputBlur:function(e){var t=e.target,a=t.dataset.prefix;a&&t.value.length<=a.length&&(t.value="")},onMaskedInputFocus:function(e){var t=e.target,a=t.dataset.prefix;a&&!t.value&&(t.value=a)}};t.Z=a},8612:function(e,t,a){a.r(t),a.d(t,{default:function(){return ct}});var n,r,s,l=a(2791),i=a(6493),o=a(885),c="UserData_wrapper__8m8Y8",d="UserData_imgBlock__aeHAe",u="UserData_imgWrap__BOcIa",m="UserData_image__gr45t",p="UserData_InputWrapper__a7j7i",f="UserData_InputFile__7SoCl",h="UserData_editPhoto__xJMN3",_="UserData_editPhotoIcon__+lLRD",x="UserData_userInfo__tcH9C",g=a(5861),v=a(4687),j=a.n(v),y=["title","titleId"];function b(){return b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},b.apply(this,arguments)}function C(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function N(e,t){var a=e.title,i=e.titleId,o=C(e,y);return l.createElement("svg",b({width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":i},o),a?l.createElement("title",{id:i},a):null,n||(n=l.createElement("g",{filter:"url(#filter0_b_201_1216)"},l.createElement("circle",{cx:10,cy:10,r:10,fill:"#FDF7F2"}))),r||(r=l.createElement("path",{d:"M6.0522 14.4687C5.97994 14.4686 5.9085 14.4534 5.84241 14.4242C5.77633 14.395 5.71705 14.3523 5.66835 14.2989C5.61876 14.246 5.58093 14.1832 5.55732 14.1146C5.53371 14.046 5.52487 13.9732 5.53137 13.901L5.65897 12.4979L11.5538 6.60516L13.3959 8.44683L7.50272 14.339L6.0996 14.4666C6.08384 14.4681 6.06802 14.4688 6.0522 14.4687ZM13.7637 8.0786L11.922 6.23693L13.0267 5.13225C13.0751 5.08382 13.1325 5.0454 13.1957 5.01919C13.2589 4.99298 13.3267 4.97949 13.3952 4.97949C13.4636 4.97949 13.5314 4.99298 13.5946 5.01919C13.6578 5.0454 13.7153 5.08382 13.7637 5.13225L14.8683 6.23693C14.9168 6.2853 14.9552 6.34275 14.9814 6.40597C15.0076 6.4692 15.0211 6.53698 15.0211 6.60542C15.0211 6.67387 15.0076 6.74164 14.9814 6.80487C14.9552 6.8681 14.9168 6.92554 14.8683 6.97391L13.7642 8.07808L13.7637 8.0786Z"})),s||(s=l.createElement("defs",null,l.createElement("filter",{id:"filter0_b_201_1216",x:-4,y:-4,width:28,height:28,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},l.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),l.createElement("feGaussianBlur",{in:"BackgroundImageFix",stdDeviation:2}),l.createElement("feComposite",{in2:"SourceAlpha",operator:"in",result:"effect1_backgroundBlur_201_1216"}),l.createElement("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_backgroundBlur_201_1216",result:"shape"})))))}var P,w,I=l.forwardRef(N),B=(a.p,["title","titleId"]);function E(){return E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},E.apply(this,arguments)}function k(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function D(e,t){var a=e.title,n=e.titleId,r=k(e,B);return l.createElement("svg",E({width:28,height:28,viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":n},r),a?l.createElement("title",{id:n},a):null,P||(P=l.createElement("g",{filter:"url(#filter0_d_201_1118)"},l.createElement("g",{filter:"url(#filter1_b_201_1118)"},l.createElement("circle",{cx:14,cy:10,r:10,fill:"#FDF7F2"})),l.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18.9589 6.13349C19.3339 6.4905 19.3485 7.08391 18.9915 7.45892L13.0415 13.7089C12.8646 13.8948 12.6191 14 12.3625 14C12.1059 14 11.8604 13.8948 11.6835 13.7089L8.88349 10.7677C8.52649 10.3927 8.54108 9.79932 8.91609 9.44232C9.29109 9.08531 9.8845 9.0999 10.2415 9.47491L12.3625 11.7028L17.6335 6.16609C17.9905 5.79108 18.5839 5.77649 18.9589 6.13349Z",fill:"#F59256"}))),w||(w=l.createElement("defs",null,l.createElement("filter",{id:"filter0_d_201_1118",x:0,y:0,width:28,height:28,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},l.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),l.createElement("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),l.createElement("feOffset",{dy:4}),l.createElement("feGaussianBlur",{stdDeviation:2}),l.createElement("feComposite",{in2:"hardAlpha",operator:"out"}),l.createElement("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"}),l.createElement("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_201_1118"}),l.createElement("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_201_1118",result:"shape"})),l.createElement("filter",{id:"filter1_b_201_1118",x:0,y:-4,width:28,height:28,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},l.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),l.createElement("feGaussianBlur",{in:"BackgroundImageFix",stdDeviation:2}),l.createElement("feComposite",{in2:"SourceAlpha",operator:"in",result:"effect1_backgroundBlur_201_1118"}),l.createElement("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_backgroundBlur_201_1118",result:"shape"})))))}var O,Z,L=l.forwardRef(D),M=(a.p,"UserDataItem_wrapper__kQ71j"),F="UserDataItem_field__VVxRS",A="UserDataItem_value__fxpm5",S="UserDataItem_Input__gs9H+",U="UserDataItem_button__8WDxM",R="UserDataItem_logo__cCnnd",V="UserDataItem_inputBox__w+BlF",T=a(9434),H=a(9249),q=a(613),G=a(2797),W=a(5985),z=a(5084),K=a(6661),Y=a(184),J=new Date;function Q(e){var t=e.field,a=e.value,n=e.disBtnEdit,r=e.setDisBtnEdit,s=(0,l.useRef)(),i=(0,l.useState)(!1),c=(0,o.Z)(i,2),d=c[0],u=c[1],m=(0,l.useState)(a),p=(0,o.Z)(m,2),f=p[0],h=p[1],_=(0,l.useState)(!1),x=(0,o.Z)(_,2),v=x[0],y=x[1],b=(0,T.I0)(),C=(0,T.v9)(H.um.getUserToken),N=(0,T.v9)(H.um.getDisabledBtn),P=(0,T.v9)(H.um.getCities),w=G.Ry({email:G.Z_().email("Invalid email").required("Email is required")}),B=G.Ry({city:G.Z_().matches(/^[a-zA-Z\-\u2019 ]+, [a-zA-Z\-\u2019 ]+$/,"Address should be in format: City, Region")}),E=G.Ry({phone:G.Z_().matches(/^\+38\(0..\)...-..-../,"Phone should be in format +38(067)123-45-67")}),k=G.Ry({birthday:G.hT().transform((function(e,t){return this.isType(e)?e:(0,K.Z)(t,"dd.MM.yyyy",new Date)})).typeError("Please enter a valid date").required().min("1920-11-13","Date is too early").max(J)}),D=function(){var e=(0,g.Z)(j().mark((function e(n){return j().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),!0,"Phone"!==t){e.next=9;break}return e.next=5,E.isValid({phone:f});case 5:if(e.sent){e.next=9;break}return W.Am.error("Phone should be in format +38(067)123-45-67"),e.abrupt("return");case 9:if("Email"!==t){e.next=16;break}return e.next=12,w.isValid({email:f});case 12:if(e.sent){e.next=16;break}return W.Am.error("Invalid email"),e.abrupt("return");case 16:if("City"!==t){e.next=23;break}return e.next=19,B.isValid({city:f});case 19:if(e.sent){e.next=23;break}return W.Am.error("Address should be in format: City, Region"),e.abrupt("return");case 23:if("Birthday"!==t){e.next=30;break}return e.next=26,k.isValid({birthday:f});case 26:if(e.sent){e.next=30;break}return W.Am.error("Please enter a valid date"),e.abrupt("return");case 30:d&&f!==a&&b(H.r5.patchUserInfo({type:t.toLowerCase(),value:f,token:C})),u(!1),r(!1);case 33:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,Y.jsx)("form",{ref:s,onSubmit:D,children:(0,Y.jsxs)("div",{className:M,children:[(0,Y.jsxs)("p",{className:F,children:[t,":"]}),d?"Phone"===t?(0,Y.jsx)("input",{className:S,type:t.toLowerCase(),name:t.toLowerCase(),value:f,onChange:function(e){return h(e.target.value)},"data-pattern":"+**(***)***-**-**","data-prefix":"+38(0",onInput:q.Z.maskInput,onFocus:q.Z.onMaskedInputFocus,onBlur:q.Z.onMaskedInputBlur}):"Birthday"===t?(0,Y.jsx)("input",{className:S,type:t.toLowerCase(),name:t.toLowerCase(),value:f,onChange:function(e){return h(e.target.value)},"data-pattern":"**.**.****",onInput:q.Z.maskInput,onFocus:q.Z.onMaskedInputFocus,onBlur:q.Z.onMaskedInputBlur}):"City"===t?(0,Y.jsxs)("label",{className:V,htmlFor:"city",children:[(0,Y.jsx)("input",{className:S,type:t.toLowerCase(),name:t.toLowerCase(),value:f,onChange:function(e){/\d/g.test(e.target.value)||" "!==e.target.value&&(h(e.target.value),e.target.value.length>=3?(b(H.r5.searchCity(e.target.value)),y(!0)):y(!1))}}),v&&(0,Y.jsx)(z.Z,{list:P,onSelect:function(e){h(e),y(!1)}})]}):(0,Y.jsx)("input",{className:S,type:t.toLowerCase(),name:t.toLowerCase(),value:f,onChange:function(e){return h(e.target.value)}}):(0,Y.jsx)("p",{className:A,children:f}),d?(0,Y.jsx)("button",{className:U,type:"button",onClick:D,children:(0,Y.jsx)(L,{className:R})}):N||n?(0,Y.jsx)("button",{className:U,type:"button",disabled:!0,children:(0,Y.jsx)(I,{className:R,style:{fill:"gray"}})}):(0,Y.jsx)("button",{className:U,type:"button",onClick:function(){r(!0),u(!0)},children:(0,Y.jsx)(I,{className:R})})]})})}var $=["title","titleId"];function X(){return X=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},X.apply(this,arguments)}function ee(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function te(e,t){var a=e.title,n=e.titleId,r=ee(e,$);return l.createElement("svg",X({id:"search-icon",width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":n},r),a?l.createElement("title",{id:n},a):null,O||(O=l.createElement("path",{d:"M9.99996 7.70825C8.50419 7.70825 7.29163 8.92081 7.29163 10.4166C7.29163 11.9124 8.50419 13.1249 9.99996 13.1249C11.4957 13.1249 12.7083 11.9124 12.7083 10.4166C12.7083 8.92081 11.4957 7.70825 9.99996 7.70825Z",fill:"#F59256"})),Z||(Z=l.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.70829 0.208252C6.5577 0.208252 5.62496 1.14099 5.62496 2.29159V2.44039C5.62496 2.81845 5.31849 3.12492 4.94044 3.12492C2.78718 3.12492 1.04163 4.87048 1.04163 7.02373V10.866C1.04162 12.2022 1.04162 13.2497 1.12118 14.0865C1.20228 14.9395 1.37043 15.6379 1.74773 16.2536C2.14283 16.8983 2.68491 17.4404 3.32965 17.8355C3.94534 18.2128 4.64376 18.3809 5.49672 18.462C6.33352 18.5416 7.38097 18.5416 8.7171 18.5416H11.2828C12.6189 18.5416 13.6664 18.5416 14.5032 18.462C15.3562 18.3809 16.0546 18.2128 16.6703 17.8355C17.315 17.4404 17.8571 16.8983 18.2522 16.2536C18.6295 15.6379 18.7976 14.9395 18.8787 14.0865C18.9583 13.2497 18.9583 12.2022 18.9583 10.8661V7.02373C18.9583 4.87047 17.2127 3.12492 15.0595 3.12492C14.6814 3.12492 14.375 2.81845 14.375 2.4404V2.29159C14.375 1.14099 13.4422 0.208252 12.2916 0.208252H7.70829ZM6.04163 10.4166C6.04163 8.23046 7.81383 6.45825 9.99996 6.45825C12.1861 6.45825 13.9583 8.23046 13.9583 10.4166C13.9583 12.6027 12.1861 14.3749 9.99996 14.3749C7.81383 14.3749 6.04163 12.6027 6.04163 10.4166ZM15 7.91659C14.5397 7.91659 14.1666 7.54349 14.1666 7.08325C14.1666 6.62301 14.5397 6.24992 15 6.24992C15.4602 6.24992 15.8333 6.62301 15.8333 7.08325C15.8333 7.54349 15.4602 7.91659 15 7.91659Z",fill:"#F59256"})))}var ae,ne,re=l.forwardRef(te),se=(a.p,"Logout_button__-hJsB"),le="Logout_logo__v4GOS",ie=["title","titleId"];function oe(){return oe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},oe.apply(this,arguments)}function ce(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function de(e,t){var a=e.title,n=e.titleId,r=ce(e,ie);return l.createElement("svg",oe({width:18,height:18,viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":n},r),a?l.createElement("title",{id:n},a):null,ae||(ae=l.createElement("g",{opacity:.6,clipPath:"url(#clip0_201_1184)"},l.createElement("path",{d:"M15.3049 6.57135L15.3051 6.57118C15.3843 6.49195 15.5128 6.49182 15.5923 6.57127L17.1668 8.14574C17.6569 8.63589 17.6569 9.43442 17.1668 9.92457L15.5923 11.499C15.5524 11.5389 15.5014 11.5586 15.4486 11.5586C15.396 11.5586 15.3449 11.5389 15.305 11.499L15.3049 11.499C15.2256 11.4197 15.2256 11.2912 15.3049 11.212L15.305 11.2119L16.4249 10.0918L17.2784 9.23828H16.0714H7.62891C7.51668 9.23828 7.42578 9.14738 7.42578 9.03516C7.42578 8.92293 7.51668 8.83203 7.62891 8.83203H16.0714H17.2784L16.4249 7.9785L15.305 6.85844L15.3049 6.85833C15.2256 6.77909 15.2256 6.65059 15.3049 6.57135ZM12.2266 13.7812V15.1875C12.2266 16.4622 11.1888 17.5 9.91406 17.5H2.84766C1.57294 17.5 0.535156 16.4622 0.535156 15.1875V2.8125C0.535156 1.53778 1.57294 0.5 2.84766 0.5H9.91406C11.1888 0.5 12.2266 1.53778 12.2266 2.8125V4.21875C12.2266 4.33097 12.1357 4.42188 12.0234 4.42188C11.9112 4.42188 11.8203 4.33097 11.8203 4.21875V2.8125C11.8203 1.761 10.9656 0.90625 9.91406 0.90625H2.84766C1.79615 0.90625 0.941406 1.761 0.941406 2.8125V15.1875C0.941406 16.239 1.79615 17.0938 2.84766 17.0938H9.91406C10.9656 17.0938 11.8203 16.239 11.8203 15.1875V13.7812C11.8203 13.669 11.9112 13.5781 12.0234 13.5781C12.1357 13.5781 12.2266 13.669 12.2266 13.7812Z",fill:"#F59256",stroke:"#F59256"}))),ne||(ne=l.createElement("defs",null,l.createElement("clipPath",{id:"clip0_201_1184"},l.createElement("rect",{width:18,height:18,fill:"white"})))))}var ue=l.forwardRef(de);a.p;function me(){var e=(0,T.I0)();return(0,Y.jsxs)("button",{className:se,type:"button",onClick:function(){return e(H.r5.logOut())},children:[(0,Y.jsx)(ue,{className:le}),"Logout"]})}function pe(){var e=(0,T.v9)(H.um.getUser),t=(0,l.useState)(!1),a=(0,o.Z)(t,2),n=a[0],r=a[1],s=(0,T.I0)(),i=(0,T.v9)(H.um.getUserToken);return(0,Y.jsxs)("div",{className:c,children:[(0,Y.jsxs)("div",{className:d,children:[(0,Y.jsx)("div",{className:u,children:(0,Y.jsx)("img",{className:m,src:e.image,alt:e.name,width:"233",height:"233"})}),(0,Y.jsxs)("div",{className:p,children:[(0,Y.jsxs)("button",{type:"button",className:h,children:[(0,Y.jsx)(re,{className:_}),"Edit photo"]}),(0,Y.jsx)("input",{className:f,type:"file",accept:".jpg,.png",onChange:function(e){var t=(0,o.Z)(e.target.files,1)[0];t&&s(H.r5.patchUserInfo({type:"image",value:t,token:i}))}})]})]}),(0,Y.jsxs)("div",{className:x,children:[(0,Y.jsx)(Q,{field:"Name",value:e.name,disBtnEdit:n,setDisBtnEdit:r}),(0,Y.jsx)(Q,{field:"Email",value:e.email,disBtnEdit:n,setDisBtnEdit:r}),(0,Y.jsx)(Q,{field:"Birthday",value:e.birthday,disBtnEdit:n,setDisBtnEdit:r}),(0,Y.jsx)(Q,{field:"Phone",value:e.phone,disBtnEdit:n,setDisBtnEdit:r}),(0,Y.jsx)(Q,{field:"City",value:e.city,disBtnEdit:n,setDisBtnEdit:r}),(0,Y.jsx)(me,{})]})]})}var fe="UserPage_User__tYBSM",he="UserPage_title__jagkd",_e="PetsList_list__BF2Yy",xe="PetsList_card__GETH8",ge="PetsList_petPhoto__TdmzW",ve="PetsList_petInfo__EBKMl",je="PetsList_deleteBtn__tyLd0",ye="PetsList_petInfoCategory__0Canm",be="PetsList_petInfoTitle__Ctkjq",Ce="PetsList_noPets__GrDs1",Ne=a(2507),Pe=a(2756);function we(){var e=(0,T.I0)(),t=(0,T.v9)(Ne.M7.getUserPetsList),a=(0,T.v9)(Ne.M7.getIsLoading);return(0,l.useEffect)((function(){e(Ne.xh.getUserPet())}),[]),(0,Y.jsx)(Y.Fragment,{children:a?(0,Y.jsx)("div",{style:{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:(0,Y.jsx)(Pe.s5,{strokeColor:"#F59256",strokeWidth:"5",animationDuration:"0.75",width:"150",visible:!0})}):(0,Y.jsx)("div",{children:null!==t&&void 0!==t&&t.length?(0,Y.jsx)("ul",{className:_e,children:t.map((function(t){return(0,Y.jsxs)("li",{className:xe,children:[(0,Y.jsx)("img",{src:t.image,alt:"Pet",className:ge}),(0,Y.jsx)("button",{}),(0,Y.jsxs)("div",{className:ve,children:[(0,Y.jsx)("button",{type:"button",onClick:function(){e(Ne.xh.deleteUserPet(t._id))},className:je}),(0,Y.jsxs)("p",{className:ye,children:[(0,Y.jsx)("span",{className:be,children:"Name: "}),t.name]}),(0,Y.jsxs)("p",{className:ye,children:[(0,Y.jsx)("span",{className:be,children:"Date of birth: "}),t.birthday]}),(0,Y.jsxs)("p",{className:ye,children:[(0,Y.jsx)("span",{className:be,children:"Breed: "}),t.breed]}),(0,Y.jsxs)("p",{className:ye,children:[(0,Y.jsx)("span",{className:be,children:"Comments: "}),t.comments]})]})]},t._id)}))}):(0,Y.jsx)("p",{className:Ce,children:"No pets available in the list yet"})})})}var Ie="PetsData_wrapper__FMjlV",Be="PetsData_header__n79Uk",Ee="PetsData_title__UYC8R",ke="PetsData_addPetWrapper__9laze",De="PetsData_addPetTitle__6zKBQ",Oe="PetsData_buttonAddPet__VyaON",Ze=a(3081),Le=a(1413),Me=a(5705),Fe="ModalAddsPet_containerPet__QNexQ",Ae="ModalAddsPet_errorMsg__8PPlT",Se="ModalAddsPet_title__A4Cxc",Ue="ModalAddsPet_formWrapper__YfzvU",Re="ModalAddsPet_formPageOne__owADx",Ve="ModalAddsPet_label__uyLiq",Te="ModalAddsPet_input__KUkW0",He="ModalAddsPet_inputLast__dPdLP",qe="ModalAddsPet_buttonsWrapper__qjaEj",Ge="ModalAddsPet_buttonSubmit__IqN7w",We="ModalAddsPet_buttonSimple__DZeWs",ze="ModalAddsPet_formPageTwo__Goi1V",Ke="ModalAddsPet_addPhotoText__bP8dy",Ye="ModalAddsPet_addPhotoBtn__MHs86",Je="ModalAddsPet_textareaWrapper__0PaXh",Qe="ModalAddsPet_textarea__kkHDx",$e="ModalAddsPet_addFileBtnWrapper__-G8pD",Xe="ModalAddsPet_addFileInput__o7ebW",et="ModalAddsPet_inputImage__VWdtN",tt=new Date,at=G.Ry({name:G.Z_().min(2).max(16).matches(/[a-zA-Z]/,"Only alphanumeric characters are allowed").required(),birthday:G.hT().transform((function(e,t){return this.isType(e)?e:(0,K.Z)(t,"dd.MM.yyyy",new Date)})).typeError("please enter a valid date").required().min("1950-11-13","Date is too early").max(tt),breed:G.Z_().min(2).max(35).matches(/[a-zA-Z]/,"Only alphanumeric characters are allowed").required()});function nt(e){var t=e.data,a=(e.setFormData,e.next),n=e.onClose,r=(0,T.I0)(),s=(0,l.useState)(!1),i=(0,o.Z)(s,2),c=i[0],d=i[1],u=(0,l.useState)(t.breed),m=(0,o.Z)(u,2),p=m[0],f=m[1],h=(0,T.v9)(H.um.getBreeds);return(0,Y.jsxs)("div",{className:Fe,children:[(0,Y.jsx)("div",{className:Se,children:"Add pet"}),(0,Y.jsx)("div",{className:Ue,children:(0,Y.jsx)(Me.J9,{initialValues:t,onSubmit:function(e){a((0,Le.Z)((0,Le.Z)({},e),{},{breed:p}),!1)},validationSchema:at,children:(0,Y.jsxs)(Me.l0,{autoComplete:"on",className:Re,children:[(0,Y.jsx)("label",{htmlFor:"name",className:Ve,children:"Name pet"}),(0,Y.jsx)(Me.gN,{type:"text",name:"name",placeholder:"Type name pet",className:Te}),(0,Y.jsx)(Me.Bc,{name:"name",render:function(e){return(0,Y.jsx)("div",{className:Ae,children:e})}}),(0,Y.jsx)("label",{htmlFor:"birthday",className:Ve,children:"Date of birth"}),(0,Y.jsx)(Me.gN,{name:"birthday",placeholder:"Type date of birth",className:Te,"data-pattern":"**.**.****",onInput:q.Z.maskInput,onFocus:q.Z.onMaskedInputFocus,onBlur:q.Z.onMaskedInputBlur}),(0,Y.jsx)(Me.Bc,{name:"birthday",render:function(e){return(0,Y.jsx)("div",{className:Ae,children:e})}}),(0,Y.jsx)("label",{htmlFor:"breed",className:Ve,children:"Breed"}),(0,Y.jsxs)("div",{style:{position:"relative"},children:[(0,Y.jsx)(Me.gN,{name:"breed",placeholder:"Type breed",autoComplete:"off",value:p,className:He,onInput:function(e){/\d/g.test(e.target.value)||" "!==e.target.value&&(f(e.target.value),e.target.value.length>=3?(r(H.r5.searchBreeds(e.target.value)),d(!0)):d(!1))}}),c&&(0,Y.jsx)(z.Z,{list:h,onSelect:function(e){f(e),d(!1)}})]}),(0,Y.jsx)(Me.Bc,{name:"breed",render:function(e){return(0,Y.jsx)("div",{className:Ae,children:e})}}),(0,Y.jsxs)("div",{className:qe,children:[(0,Y.jsx)("button",{type:"submit",className:Ge,children:"Next"}),(0,Y.jsx)("button",{type:"button",className:We,onClick:function(){return n()},children:"Cancel"})]})]})})})]})}var rt=G.Ry({image:G.nK().required("Image is Required!(jpg,jpeg,png)").test("fileFormat","Unsupported file type",(function(e){return null===e||e&&st.includes(e.type)})),comments:G.Z_().min(8).max(120).matches(/^[a-zA-Z0-9 ]*$/,"Only alphanumeric characters and numbers are allowed").required()}),st=["image/jpg","image/jpeg","image/png"];function lt(e){var t=e.next,a=e.data,n=e.onClose,r=e.setFormData,s=e.prev,i=(0,l.useState)(a.image),c=(0,o.Z)(i,2),d=c[0],u=c[1];return(0,Y.jsxs)("div",{className:Fe,children:[(0,Y.jsx)("div",{className:Se,children:"Add pet"}),(0,Y.jsx)("div",{className:Ue,children:(0,Y.jsx)(Me.J9,{initialValues:a,onSubmit:function(e){t((0,Le.Z)((0,Le.Z)({},e),{},{image:d}),!0),n()},validationSchema:rt,children:function(e){var t=e.setFieldValue;return(0,Y.jsxs)(Me.l0,{autoComplete:"on",className:ze,children:[(0,Y.jsx)("p",{className:Ke,children:"Add photo and some comments"}),(0,Y.jsxs)("div",{className:$e,children:[d?(0,Y.jsx)("img",{className:et,src:URL.createObjectURL(d),alt:d.name}):(0,Y.jsx)("button",{type:"button",className:Ye}),(0,Y.jsx)("input",{type:"file",id:"image",name:"image",accept:".jpg,.png",onChange:function(e){return function(e,t){var a=(0,o.Z)(e.target.files,1)[0];a&&(u(a),t("image",a),r((function(e){return(0,Le.Z)((0,Le.Z)({},e),{},{image:a})})))}(e,t)},className:Xe})]}),(0,Y.jsx)(Me.Bc,{name:"image",render:function(e){return(0,Y.jsx)("div",{className:Ae,children:e})}}),(0,Y.jsxs)("div",{className:Je,children:[(0,Y.jsx)("label",{className:Ve,children:"Comments"}),(0,Y.jsx)(Me.gN,{as:"textarea",className:Qe,name:"comments",placeholder:"Type comments"}),(0,Y.jsx)(Me.Bc,{name:"comments",render:function(e){return(0,Y.jsx)("div",{className:Ae,children:e})}})]}),(0,Y.jsxs)("div",{className:qe,children:[(0,Y.jsx)("button",{type:"submit",className:Ge,children:"Done"}),(0,Y.jsx)("button",{type:"button",onClick:s,className:We,children:"Back"})]})]})}})})]})}function it(e){var t=e.onClose,a=(0,T.I0)(),n=(0,T.v9)(H.um.getUserToken),r=(0,l.useState)({name:"",birthday:"",breed:"",image:"",comments:""}),s=(0,o.Z)(r,2),i=s[0],c=s[1],d=(0,l.useState)(0),u=(0,o.Z)(d,2),m=u[0],p=u[1],f=["First page","Second page"],h=function(e){a(Ne.xh.addUserPet({form:e,token:n}))},_=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];c((function(t){return e})),p((function(e){return e+1})),t&&h(e)},x=[(0,Y.jsx)(nt,{onClose:t,next:_,data:i,setFormData:c,title:f[m]}),(0,Y.jsx)(lt,{prev:function(e){c((function(t){return(0,Le.Z)((0,Le.Z)({},t),e)})),p((function(e){return e-1}))},onClose:t,next:_,data:i,setFormData:c,title:f[m]})];return(0,Y.jsx)(Y.Fragment,{children:x[m]})}function ot(){var e=(0,l.useState)(!1),t=(0,o.Z)(e,2),a=t[0],n=t[1];return(0,Y.jsx)(Y.Fragment,{children:(0,Y.jsxs)("div",{className:Ie,children:[(0,Y.jsxs)("div",{className:Be,children:[(0,Y.jsx)("h2",{className:Ee,children:"My pets: "}),(0,Y.jsxs)("div",{className:ke,children:[(0,Y.jsx)("h3",{className:De,children:"Add pet"}),(0,Y.jsx)("button",{onClick:function(){n(!0)},className:Oe})]})]}),a&&(0,Y.jsx)(Ze.Z,{onClose:function(){return n(!1)},children:(0,Y.jsx)(it,{onClose:function(){return n(!1)}})}),(0,Y.jsx)(we,{})]})})}function ct(){return(0,Y.jsx)(i.Z,{children:(0,Y.jsxs)("div",{className:fe,children:[(0,Y.jsxs)("div",{children:[(0,Y.jsx)("h2",{className:he,children:"My information:"}),(0,Y.jsx)(pe,{})]}),(0,Y.jsx)(ot,{})]})})}}}]);
//# sourceMappingURL=612.b6e9998f.chunk.js.map