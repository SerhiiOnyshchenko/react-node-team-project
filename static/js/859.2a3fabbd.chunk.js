"use strict";(self.webpackChunkreact_node_team_project=self.webpackChunkreact_node_team_project||[]).push([[859],{5084:function(e,t,a){a.d(t,{Z:function(){return i}});var n="DropList_DropList__rRKqA",s="DropList_DropItem__iUAth",r=a(184);function i(e){var t=e.list,a=e.onSelect;return(0,r.jsx)(r.Fragment,{children:t.length>0&&(0,r.jsx)("ul",{className:n,children:t.map((function(e){return e.city?(0,r.jsxs)("li",{className:s,onClick:function(){return a("".concat(e.city,", ").concat(e.region))},children:[e.city,", ",e.region]},e._id):(0,r.jsx)("li",{className:s,onClick:function(){return a(e.breed)},children:e.breed},e._id)}))})})}},613:function(e,t){var a={maskInput:function(e){var t,a=e.target,n=a.dataset.pattern,s=a.dataset.prefix,r=0,i=0,l="";s&&(r=s.length,l+=s,a.value.length<s.length&&(a.value=s)),t=s&&s===a.value.slice(0,s.length)?a.value.replace(s,"").replace(/[^\d]/g,""):a.value.replace(/[^\d]/g,"");for(var c=r;c<n.length;c++)t[i]&&("*"!==n[c]?l+=n[c]:(l+=t[i],i++));a.value=l},onMaskedInputBlur:function(e){var t=e.target,a=t.dataset.prefix;a&&t.value.length<=a.length&&(t.value="")},onMaskedInputFocus:function(e){var t=e.target,a=t.dataset.prefix;a&&!t.value&&(t.value=a)}};t.Z=a},5859:function(e,t,a){a.r(t),a.d(t,{default:function(){return ge}});var n=a(885),s=a(2791),r="NoticesSearch_SearchContainer__o78d+",i="NoticesSearch_SearchTitle__m4DZ1",l="NoticesSearch_SearchInput__MejtC",c="NoticesSearch_SearchForm__mpL9p",o="NoticesSearch_SearchBtn__TGMAQ",d=a(184);function u(e){var t=e.onSearch;return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("div",{className:r,children:[(0,d.jsx)("h2",{className:i,children:"Find your favorite pet"}),(0,d.jsxs)("form",{className:c,onSubmit:function(e){e.preventDefault();var a=e.target.search.value;t(a),e.target.search.value=""},children:[(0,d.jsx)("input",{className:l,type:"text",name:"search",autoFocus:!0,placeholder:"Search",required:!0}),(0,d.jsx)("button",{className:o,type:"submit"})]})]})})}var m=a(1413),h=a(5361),x="NoticesCategoriesNav_btnLink__AC6BN",p="NoticesCategoriesNav_wrapper__DuH-X",f=a(1087),N=a(7689),_=a(9434),j=a(9249),v=[{id:"sell",text:"sell",active:!1},{id:"lost-found",text:"lost/found",active:!1},{id:"for-free",text:"In good hends",active:!1}],g=[{id:"favorite",text:"Favorite ads",active:!1},{id:"own",text:"My ads",active:!1}];function b(){var e=(0,_.v9)(j.um.getIsLoggedIn),t=(0,s.useState)(e?[].concat(v,g):v),a=(0,n.Z)(t,2),r=a[0],i=a[1],l=(0,N.TH)();return(0,s.useEffect)((function(){var t,a=l.pathname.split("/");t=e?[].concat(v,g).map((function(e){return(0,m.Z)((0,m.Z)({},e),{},{active:a[2]===e.id})})):r.map((function(e){return(0,m.Z)((0,m.Z)({},e),{},{active:a[2]===e.id})})),i(t)}),[l,e]),(0,d.jsx)("div",{className:p,children:r.map((function(e){var t=e.id,a=e.text,n=(e.smole,e.active);return(0,d.jsx)(f.rU,{to:"/notices/".concat(t),className:x,style:{color:"inherit"},children:(0,d.jsx)(h.Z,{text:a,smole:!0,active:n})},t)}))})}var y,A=a(9869),Z="AddNoticeButton_btnWrapper__UjUEZ",M="AddNoticeButton_btn__jkeNX",F="AddNoticeButton_icon__QL6Nl",S=["title","titleId"];function B(){return B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},B.apply(this,arguments)}function k(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}function C(e,t){var a=e.title,n=e.titleId,r=k(e,S);return s.createElement("svg",B({width:18,height:18,viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":n},r),a?s.createElement("title",{id:n},a):null,y||(y=s.createElement("path",{d:"M9 17V9M9 9V1M9 9H17M9 9H1",stroke:"white",strokeWidth:2,strokeLinecap:"round"})))}var O=s.forwardRef(C),I=(a.p,a(4805)),w=a(5985),q=a(5705),D="AddNoticeModal_Wrapper__hlzZC",L="AddNoticeModal_header__1pB72",T="AddNoticeModal_text__YWSWC",W="AddNoticeModal_radioWrapper__CmWQq",R="AddNoticeModal_wrapprerInput__R4RQv",P="AddNoticeModal_radioBtn__6ngfc",E="AddNoticeModal_inputRadio__-hhzl",U="AddNoticeModal_textFildWrap__xV5OK",V="AddNoticeModal_inputText__4LaAj",Y="AddNoticeModal_inputTextarea__t+koT",H="AddNoticeModal_label__bVW7J",Q="AddNoticeModal_submitBtnWrapp__OEVWW",J="AddNoticeModal_errorMsg__hKD-a",K="AddNoticeModal_submitBtn__pAryO",z="AddNoticeModal_sexWrap__luL+O",X="AddNoticeModal_sexLabel__0fnyd",G="AddNoticeModal_sexIcon__E09k+",$="AddNoticeModal_sexIconFemale__4tooD",ee="AddNoticeModal_inputSex__ykv1L",te="AddNoticeModal_sexText__6ShdL",ae="AddNoticeModal_sexM__URyIb",ne="AddNoticeModal_avatarLabel__Zuybc",se="AddNoticeModal_addImage__S5-Z6",re="AddNoticeModal_selectedAvatar__d5L3J",ie="AddNoticeModal_inputFile__z46ch",le=a(2797),ce=a(613),oe=a(5084),de=le.Ry({titleOfAd:le.Z_().required("Field is required!"),category:le.Z_().required("Category is required!"),namePet:le.Z_().required("Field is required!"),breed:le.Z_().required("Field is required!"),dateOfBirth:le.Z_().matches(/^\s*(3[01]|[12][0-9]|0?[1-9])\.(1[012]|0?[1-9])\.((?:19|20)\d{2})\s*$/,"Date format is DD.MM.YYYY").required("Field is required!")}),ue=function(e){var t=e.formData,a=e.setFormData,r=e.nextStep,i=e.onClose,l=(0,_.I0)(),c=(0,s.useState)(t.breed),o=(0,n.Z)(c,2),u=o[0],h=o[1],x=(0,s.useState)(!1),p=(0,n.Z)(x,2),f=p[0],N=p[1],v=(0,_.v9)(j.um.getBreeds);return(0,d.jsxs)("div",{children:[(0,d.jsx)("p",{className:T,children:"Write some information about your notice."}),(0,d.jsx)(q.J9,{validationSchema:de,initialValues:t,onSubmit:function(e){a((0,m.Z)((0,m.Z)({},e),{},{breed:u})),r()},children:(0,d.jsxs)(q.l0,{children:[(0,d.jsxs)("div",{role:"group","aria-labelledby":"my-radio-group",className:W,children:[(0,d.jsxs)("label",{className:R,htmlFor:"lost/found",children:[(0,d.jsx)(q.gN,{type:"radio",name:"category",value:"lost/found",id:"lost/found",className:E}),(0,d.jsx)("div",{className:P,children:"lost/found"})]}),(0,d.jsxs)("label",{className:R,htmlFor:"in_good_hands",children:[(0,d.jsx)(q.gN,{type:"radio",name:"category",value:"in_good_hands",id:"in good hands",className:E}),(0,d.jsx)("div",{className:P,children:"in good hands"})]}),(0,d.jsxs)("label",{className:R,htmlFor:"sell",children:[(0,d.jsx)(q.gN,{type:"radio",name:"category",value:"sell",id:"sell",className:E}),(0,d.jsx)("div",{className:P,children:"sell"})]}),(0,d.jsx)(q.Bc,{name:"category",render:function(e){return(0,d.jsx)("div",{className:J,children:e})}})]}),(0,d.jsxs)("div",{className:U,children:[(0,d.jsx)("label",{htmlFor:"titleOfAd",type:"text",className:H,children:"Tittle of ad*:"}),(0,d.jsx)(q.gN,{id:"titleOfAd",name:"titleOfAd",placeholder:"Type name pet",className:V}),(0,d.jsx)(q.Bc,{name:"titleOfAd",render:function(e){return(0,d.jsx)("div",{className:J,children:e})}})]}),(0,d.jsxs)("div",{className:U,children:[(0,d.jsx)("label",{htmlFor:"namePet",type:"text",className:H,children:"Name pet*:"}),(0,d.jsx)(q.gN,{id:"namePet",name:"namePet",placeholder:"Type name pet",className:V}),(0,d.jsx)(q.Bc,{name:"namePet",render:function(e){return(0,d.jsx)("div",{className:J,children:e})}})]}),(0,d.jsxs)("div",{className:U,children:[(0,d.jsx)("label",{htmlFor:"dateOfBirth",type:"text",className:H,children:"Date of birth*:"}),(0,d.jsx)(q.gN,{id:"dateOfBirth",name:"dateOfBirth",placeholder:"Type date of birth",className:V,"data-pattern":"**.**.****",onInput:ce.Z.maskInput,onFocus:ce.Z.onMaskedInputFocus,onBlur:ce.Z.onMaskedInputBlur}),(0,d.jsx)(q.Bc,{name:"dateOfBirth",render:function(e){return(0,d.jsx)("div",{className:J,children:e})}})]}),(0,d.jsxs)("div",{className:U,children:[(0,d.jsx)("label",{htmlFor:"breed",type:"text",className:H,children:"Breed*:"}),(0,d.jsx)(q.gN,{id:"breed",name:"breed",placeholder:"Type breed",className:V,autoComplete:"off",value:u,onInput:function(e){/\d/g.test(e.target.value)||" "!==e.target.value&&(h(e.target.value),e.target.value.length>=3?(l(j.r5.searchBreeds(e.target.value)),N(!0)):N(!1))}}),f&&(0,d.jsx)(oe.Z,{list:v,onSelect:function(e){h(e),N(!1)}}),(0,d.jsx)(q.Bc,{name:"breed",render:function(e){return(0,d.jsx)("div",{className:J,children:e})}})]}),(0,d.jsxs)("div",{className:Q,children:[(0,d.jsx)("button",{type:"submit",className:K,children:"Next"}),(0,d.jsx)("button",{type:"button",className:K,onClick:i,children:"Cancel"})]})]})})]})},me=a(3290),he=le.Ry({sex:le.Z_().required("Field is required!"),location:le.Z_().required("Field is required!"),price:le.Rx().min(0).max(1e4).notRequired(),image:le.nK().required("Image is Required!(jpg,jpeg,png)").test("fileFormat","Unsupported file type",(function(e){return null===e||e&&xe.includes(e.type)})),comments:le.Z_().min(4).max(120).required("Field is required!")}),xe=["image/jpg","image/jpeg","image/png"],pe=function(e){var t=e.formData,a=e.setFormData,r=e.prevStep,i=e.onClose,l=(0,s.useState)("back"),c=(0,n.Z)(l,2),o=c[0],u=c[1],h=(0,s.useState)(t.image),x=(0,n.Z)(h,2),p=x[0],f=x[1],v=(0,_.I0)(),g=(0,N.s0)(),b=(0,_.v9)(j.um.getUserToken);return(0,d.jsx)("div",{children:(0,d.jsx)(q.J9,{validationSchema:he,initialValues:t,onSubmit:function(e){a((0,m.Z)((0,m.Z)({},e),{},{image:p,price:"sell"!==e.category?"0":e.price})),"back"===o&&r(),"forward"===o&&(v(me.h.createNotices({values:e,token:b})),g("/notices/own"),i())},children:function(e){var s=e.setFieldValue;return(0,d.jsxs)(q.l0,{className:U,children:[(0,d.jsxs)("fieldset",{className:z,children:[(0,d.jsx)("legend",{className:ae,children:"The sex*:"}),(0,d.jsxs)("label",{className:X,htmlFor:"male",children:[(0,d.jsx)(q.gN,{className:ee,type:"radio",id:"male",name:"sex",alt:"male",value:"male"}),(0,d.jsx)("span",{className:G}),(0,d.jsx)("span",{className:te,children:"Male"})]}),(0,d.jsxs)("label",{className:X,htmlFor:"female",children:[(0,d.jsx)(q.gN,{className:ee,type:"radio",id:"female",name:"sex",alt:"female",value:"female"}),(0,d.jsx)("span",{className:$}),(0,d.jsx)("span",{className:te,children:"Female"})]})]}),(0,d.jsx)(q.Bc,{name:"sex",render:function(e){return(0,d.jsx)("div",{className:J,children:e})}}),(0,d.jsxs)("div",{className:U,children:[(0,d.jsx)("label",{htmlFor:"location",type:"text",className:H,children:"Location*:"}),(0,d.jsx)(q.gN,{id:"location",name:"location",placeholder:"Type location",className:V}),(0,d.jsx)(q.Bc,{name:"location",render:function(e){return(0,d.jsx)("div",{className:J,children:e})}})]}),"sell"===t.category&&(0,d.jsxs)("div",{className:U,children:[(0,d.jsx)("label",{htmlFor:"price",type:"text",className:H,children:"Price*:"}),(0,d.jsx)(q.gN,{id:"price",name:"price",type:"number",min:"0",max:"10000",placeholder:"Type price",className:V}),(0,d.jsx)(q.Bc,{name:"price",render:function(e){return(0,d.jsx)("div",{className:J,children:e})}})]}),(0,d.jsx)("label",{htmlFor:"image",className:ne,children:"Load the pet's image*:"}),(0,d.jsxs)("div",{className:se,children:[p&&(0,d.jsx)("img",{id:"image",className:re,src:URL.createObjectURL(p),alt:p.name}),(0,d.jsx)("input",{className:ie,type:"file",id:"image",name:"image",accept:".jpg,.png",onChange:function(e){return function(e,t){var s=(0,n.Z)(e.target.files,1)[0];s&&(f(s),t("image",s),a((function(e){return(0,m.Z)((0,m.Z)({},e),{},{image:s})})))}(e,s)}}),(0,d.jsx)(q.Bc,{name:"image",render:function(e){return(0,d.jsx)("div",{className:J,children:e})}})]}),(0,d.jsxs)("div",{className:U,children:[(0,d.jsx)("label",{className:H,htmlFor:"comments",children:"Comments*:"}),(0,d.jsx)(q.gN,{component:"textarea",name:"comments",id:"comments",rows:"3",placeholder:"Type comments",className:Y}),(0,d.jsx)(q.Bc,{name:"comments",render:function(e){return(0,d.jsx)("div",{className:J,children:e})}})]}),(0,d.jsxs)("div",{className:Q,children:[(0,d.jsx)("button",{type:"submit",className:K,onClick:function(){return u("forward")},children:"Done"}),(0,d.jsx)("button",{type:"submit",className:K,onClick:function(){return u("back")},children:"Back"})]})]})}})})};function fe(e){var t=e.onClose,a=(0,s.useState)(1),r=(0,n.Z)(a,2),i=r[0],l=r[1],c=(0,s.useState)({titleOfAd:"",namePet:"",breed:"",sex:"",location:"",price:"0",category:"",comments:"",dateOfBirth:"",image:""}),o=(0,n.Z)(c,2),u=o[0],m=o[1];switch(i){case 1:return(0,d.jsxs)("div",{className:D,children:[(0,d.jsx)("h1",{className:L,children:"Add pet"}),(0,d.jsx)(ue,{formData:u,setFormData:m,nextStep:function(){return l((function(e){return 1===e?e+1:2}))},onClose:t})]});case 2:return(0,d.jsxs)("div",{className:D,children:[(0,d.jsx)("h1",{className:L,children:"Add pet"}),(0,d.jsx)(pe,{formData:u,setFormData:m,prevStep:function(){return l((function(e){return e-1}))},onClose:t})]});default:return(0,d.jsx)("div",{})}}var Ne=a(3081);function _e(){var e=(0,I.useMediaQuery)({maxWidth:767}),t="Add pet",a=(0,_.v9)(A.Z.getIsLoggedIn),r=(0,s.useState)(!1),i=(0,n.Z)(r,2),l=i[0],c=i[1];return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{className:Z,children:[!e&&t,(0,d.jsxs)("button",{type:"button",className:M,onClick:function(e){if(!a)return w.Am.info("You must be logged in");c(!0)},children:[(0,d.jsx)(O,{className:F}),e&&t]})]}),l&&(0,d.jsx)(Ne.Z,{onClose:function(){c(!1)},children:(0,d.jsx)(fe,{onClose:function(){c(!1)}})})]})}var je="NoticesPage_btnBox__u9YgI",ve=a(6493);function ge(){var e=[],t=(0,N.TH)().pathname,a=(0,N.s0)(),r=(0,s.useState)(e),i=(0,n.Z)(r,2),l=i[0],c=i[1];return(0,s.useEffect)((function(){"/notices/lost-found"===t||"/notices/for-free"===t||"/notices/favotire"===t||"/notices/own"===t||a("/notices/sell")}),[]),(0,d.jsxs)(ve.Z,{children:[(0,d.jsx)(u,{onSearch:function(t){var a=e.filter((function(e){return e.titleOfAd.toLowerCase().includes(t.toLowerCase())}));c(a),console.log(l)}}),(0,d.jsxs)("div",{className:je,children:[(0,d.jsx)(b,{}),(0,d.jsx)(_e,{})]}),(0,d.jsx)(N.j3,{})]})}}}]);
//# sourceMappingURL=859.2a3fabbd.chunk.js.map