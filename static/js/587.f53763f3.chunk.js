"use strict";(self.webpackChunkproject=self.webpackChunkproject||[]).push([[587,819],{2819:function(e,s,a){a.r(s);var r=a(1087),i=a(3813),t=a(184);s.default=function(){return(0,t.jsxs)("div",{style:{marginLeft:"10px",marginTop:"10px"},children:[(0,t.jsx)("h1",{children:"404 Not Found"}),(0,t.jsxs)("p",{children:["I dunno what you expected, but it ain","'","t here. "]}),(0,t.jsx)(r.rU,{style:{maxWidth:"300px",display:"inline-block"},className:"locations__item-link tabs__item tabs__item--active",to:i.Z.main,children:"Go to start"})]})}},4587:function(e,s,a){a.r(s),a.d(s,{default:function(){return H}});var r=a(6391),i=a(2791);var t=a.p+"static/media/avatar.ab936ce8e958edf46e831f24248a75cc.svg",l=a(7689),n=a(1087),c=a(3813),o=a(1413),d=a(885),_=50,m=300,p=a(8479),h=a(5131),v=a(4825),u=a(184),x={rating:"",review:""};function j(e){var s=e.id,a=(0,p.$)(),r=(0,p.p)(v.i),t=(0,i.useState)(x),l=(0,d.Z)(t,2),n=l[0],c=l[1],j=(0,i.useState)(!1),g=(0,d.Z)(j,2),f=g[0],N=g[1],y=function(){var e=n.review.length>=_&&n.review.length<=m;return Boolean(s)&&Boolean(e)&&Boolean(+n.rating)},w=function(e){N(y());var s=e.target.value;c((0,o.Z)((0,o.Z)({},n),{},{rating:s}))};return(0,u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),y()&&s&&(a((0,h.Z_)({newComment:{rating:+n.rating,comment:n.review},offerId:s})),c(x))},className:"reviews__form form",action:"#",method:"post",children:[(0,u.jsx)("label",{className:"reviews__label form__label",htmlFor:"review",children:"Your review"}),(0,u.jsxs)("div",{className:"reviews__rating-form form__rating",children:[(0,u.jsx)("input",{onChange:w,className:"form__rating-input visually-hidden",name:"rating",checked:"5"===n.rating,defaultValue:5,id:"5-stars",type:"radio"}),(0,u.jsx)("label",{htmlFor:"5-stars",className:"reviews__rating-label form__rating-label",title:"perfect",children:(0,u.jsx)("svg",{className:"form__star-image",width:37,height:33,children:(0,u.jsx)("use",{xlinkHref:"#icon-star"})})}),(0,u.jsx)("input",{onChange:w,className:"form__rating-input visually-hidden",name:"rating",checked:"4"===n.rating,defaultValue:4,id:"4-stars",type:"radio"}),(0,u.jsx)("label",{htmlFor:"4-stars",className:"reviews__rating-label form__rating-label",title:"good",children:(0,u.jsx)("svg",{className:"form__star-image",width:37,height:33,children:(0,u.jsx)("use",{xlinkHref:"#icon-star"})})}),(0,u.jsx)("input",{onChange:w,className:"form__rating-input visually-hidden",name:"rating",checked:"3"===n.rating,defaultValue:3,id:"3-stars",type:"radio"}),(0,u.jsx)("label",{htmlFor:"3-stars",className:"reviews__rating-label form__rating-label",title:"not bad",children:(0,u.jsx)("svg",{className:"form__star-image",width:37,height:33,children:(0,u.jsx)("use",{xlinkHref:"#icon-star"})})}),(0,u.jsx)("input",{onChange:w,className:"form__rating-input visually-hidden",name:"rating",checked:"2"===n.rating,defaultValue:2,id:"2-stars",type:"radio"}),(0,u.jsx)("label",{htmlFor:"2-stars",className:"reviews__rating-label form__rating-label",title:"badly",children:(0,u.jsx)("svg",{className:"form__star-image",width:37,height:33,children:(0,u.jsx)("use",{xlinkHref:"#icon-star"})})}),(0,u.jsx)("input",{onChange:w,className:"form__rating-input visually-hidden",name:"rating",checked:"1"===n.rating,defaultValue:1,id:"1-star",type:"radio"}),(0,u.jsx)("label",{htmlFor:"1-star",className:"reviews__rating-label form__rating-label",title:"terribly",children:(0,u.jsx)("svg",{className:"form__star-image",width:37,height:33,children:(0,u.jsx)("use",{xlinkHref:"#icon-star"})})})]}),(0,u.jsx)("textarea",{onInput:function(e){N(y());var s=e.target.value;c((0,o.Z)((0,o.Z)({},n),{},{review:s}))},className:"reviews__textarea form__textarea",id:"review",name:"review",placeholder:"Tell how was your stay, what you like and what can be improved",value:n.review}),(0,u.jsxs)("div",{className:"reviews__button-wrapper",children:[(0,u.jsxs)("p",{className:"reviews__help",children:["To submit review please make sure to set",(0,u.jsx)("span",{className:"reviews__star",children:"rating"})," and describe your stay with at least ",(0,u.jsx)("b",{className:"reviews__text-amount",children:"50 characters"}),"."]}),(0,u.jsx)("button",{className:"reviews__submit form__submit button",type:"submit",disabled:r||!f,children:"Submit"})]})]})}var g=(0,i.memo)(j),f=a(8418);var N=function(e){var s=e.commentData,a=s.comment,r=s.date,i=s.rating,t=s.user;return(0,u.jsxs)("li",{className:"reviews__item",children:[(0,u.jsxs)("div",{className:"reviews__user user",children:[(0,u.jsx)("div",{className:"reviews__avatar-wrapper user__avatar-wrapper",children:(0,u.jsx)("img",{className:"reviews__avatar user__avatar",src:t.avatarUrl,alt:"Reviews avatar",width:54,height:54})}),(0,u.jsx)("span",{className:"reviews__user-name",children:t.name})]}),(0,u.jsxs)("div",{className:"reviews__info",children:[(0,u.jsx)("div",{className:"reviews__rating rating",children:(0,u.jsxs)("div",{className:"reviews__stars rating__stars",children:[(0,u.jsx)("span",{style:{width:(0,f.s0)(i)}}),(0,u.jsx)("span",{className:"visually-hidden",children:"Rating"})]})}),(0,u.jsx)("p",{className:"reviews__text",children:a}),(0,u.jsx)("time",{className:"reviews__time",dateTime:(0,f.t0)(r),children:(0,f.DV)(r)})]})]})};var y=function(){var e=(0,p.p)(v.ZQ).slice(-10);return(0,u.jsx)("ul",{className:"reviews__list",children:e.reverse().map((function(e){return(0,u.jsx)(N,{commentData:e},e.id)}))})},w=a(2552),b=a(773);var k=function(e){var s=e.nearbyOffers;return(0,u.jsxs)("section",{className:"near-places places",children:[(0,u.jsx)("h2",{className:"near-places__title",children:"Other places in the neighbourhood"}),(0,u.jsx)("div",{className:"near-places__list places__list",children:(0,u.jsx)(b.Z,{cityOffers:s})})]})},Z=a(7533),S=a(2819),R=a(1694),B=a.n(R),C=function(e){switch(e){case"apartment":return"Apartment";case"room":return"Private Room";case"house":return"House";case"hotel":return"Hotel";default:return"Sorry, type not found"}},F=a(7243);var H=function(){var e=(0,l.UO)().id,s=(0,p.$)();(0,i.useEffect)((function(){e&&(s((0,h.Q5)({offerId:e})),s((0,h.L7)({offerId:e})),s((0,h.bS)({offerId:e})))}),[s,e]);var a=(0,p.p)(v.zB),o=(0,p.p)(v.ZQ),d=(0,p.p)(v.Fm),_=(0,p.p)(v.o9),m=(0,p.p)(v.i),x=(0,p.p)(v.R1);return m?(0,u.jsx)(F.Z,{}):_.some((function(s){return String(s.id)===e}))?(0,u.jsxs)("div",{className:"page",children:[(0,u.jsx)("div",{style:{display:"none"},children:(0,u.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",children:[(0,u.jsx)("symbol",{id:"icon-arrow-select",viewBox:"0 0 7 4",children:(0,u.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"})}),(0,u.jsx)("symbol",{id:"icon-bookmark",viewBox:"0 0 17 18",children:(0,u.jsx)("path",{d:"M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"})}),(0,u.jsx)("symbol",{id:"icon-star",viewBox:"0 0 13 12",children:(0,u.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"})})]})}),(0,u.jsx)("header",{className:"header",children:(0,u.jsx)("div",{className:"container",children:(0,u.jsxs)("div",{className:"header__wrapper",children:[(0,u.jsx)("div",{className:"header__left",children:(0,u.jsx)(n.rU,{className:"header__logo-link",to:c.Z.main,children:(0,u.jsx)("img",{className:"header__logo",src:r.Z,alt:"6 cities logo",width:81,height:41})})}),(0,u.jsx)("nav",{className:"header__nav",children:(0,u.jsx)("ul",{className:"header__nav-list",children:(0,u.jsx)(Z.Z,{})})})]})})}),(0,u.jsxs)("main",{className:"page__main page__main--property",children:[(0,u.jsxs)("section",{className:"property",children:[(0,u.jsx)("div",{className:"property__gallery-container container",children:(0,u.jsx)("div",{className:"property__gallery",children:null===a||void 0===a?void 0:a.images.slice(0,6).map((function(e){return(0,u.jsx)("div",{className:"property__image-wrapper",children:(0,u.jsx)("img",{className:"property__image",src:e,alt:"Studio"})},e)}))})}),(0,u.jsx)("div",{className:"property__container container",children:(0,u.jsxs)("div",{className:"property__wrapper",children:[null!==a&&void 0!==a&&a.isPremium?(0,u.jsx)("div",{className:"property__mark",children:(0,u.jsx)("span",{children:"Premium"})}):null,(0,u.jsx)("div",{className:"property__name-wrapper",children:(0,u.jsx)("h1",{className:"property__name",children:(null===a||void 0===a?void 0:a.title)||"Sorry, offer not found"})}),(0,u.jsxs)("div",{className:"property__rating rating",children:[(0,u.jsxs)("div",{className:"property__stars rating__stars",children:[(0,u.jsx)("span",{style:{width:(0,f.s0)((null===a||void 0===a?void 0:a.rating)||0)}}),(0,u.jsx)("span",{className:"visually-hidden",children:"Rating"})]}),(0,u.jsx)("span",{className:"property__rating-value rating__value",children:(null===a||void 0===a?void 0:a.rating)||0})]}),(0,u.jsxs)("ul",{className:"property__features",children:[(0,u.jsx)("li",{className:"property__feature property__feature--entire",children:C(a?a.type:"none")}),(0,u.jsxs)("li",{className:"property__feature property__feature--bedrooms",children:[(null===a||void 0===a?void 0:a.bedrooms)||0," Bedrooms"]}),(0,u.jsxs)("li",{className:"property__feature property__feature--adults",children:["Max ",(null===a||void 0===a?void 0:a.maxAdults)||0," adults"]})]}),(0,u.jsxs)("div",{className:"property__price",children:[(0,u.jsxs)("b",{className:"property__price-value",children:["\u20ac",(null===a||void 0===a?void 0:a.price)||0]}),(0,u.jsx)("span",{className:"property__price-text",children:"\xa0night"})]}),(0,u.jsxs)("div",{className:"property__inside",children:[(0,u.jsxs)("h2",{className:"property__inside-title",children:["What","'","s inside"]}),(0,u.jsx)("ul",{className:"property__inside-list",children:(null===a||void 0===a?void 0:a.goods.map((function(e){return(0,u.jsx)("li",{className:"property__inside-item",children:e},e)})))||""})]}),(0,u.jsxs)("div",{className:"property__host",children:[(0,u.jsx)("h2",{className:"property__host-title",children:"Meet the host"}),(0,u.jsxs)("div",{className:"property__host-user user",children:[(0,u.jsx)("div",{className:B()("property__avatar-wrapper","user__avatar-wrapper",{"property__avatar-wrapper--pro":(null===a||void 0===a?void 0:a.host.isPro)||!1}),children:(0,u.jsx)("img",{className:"property__avatar user__avatar",src:(null===a||void 0===a?void 0:a.host.avatarUrl)||t,alt:"Host avatar",width:74,height:74})}),(0,u.jsx)("span",{className:"property__user-name",children:(null===a||void 0===a?void 0:a.host.name)||"Sorry, host name not found"}),(0,u.jsx)("span",{className:"property__user-status",children:null!==a&&void 0!==a&&a.host.isPro?"Pro":null})]}),(0,u.jsx)("div",{className:"property__description",children:(0,u.jsx)("p",{className:"property__text",children:(null===a||void 0===a?void 0:a.description)||"Sorry, description not found"})})]}),(0,u.jsxs)("section",{className:"property__reviews reviews",children:[(0,u.jsxs)("h2",{className:"reviews__title",children:["Reviews \xb7 ",(0,u.jsx)("span",{className:"reviews__amount",children:o.length})]}),(0,u.jsx)(y,{}),x?(0,u.jsx)(g,{id:e}):null]})]})}),(0,u.jsx)("section",{className:"property__map map",children:(0,u.jsx)(w.Z,{points:(0,f.lw)(d),renderedOnPropertyPage:!0})})]}),(0,u.jsx)("div",{className:"container",children:(0,u.jsx)(k,{nearbyOffers:d})})]})]}):(0,u.jsx)(S.default,{})}}}]);
//# sourceMappingURL=587.f53763f3.chunk.js.map