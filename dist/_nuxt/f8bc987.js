(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{296:function(t,n,o){"use strict";var r=o(2),e=o(297);r({target:"String",proto:!0,forced:o(298)("link")},{link:function(t){return e(this,"a","href",t)}})},297:function(t,n,o){var r=o(5),e=o(21),c=o(12),l=/"/g,d=r("".replace);t.exports=function(t,n,o,r){var f=c(e(t)),v="<"+n;return""!==o&&(v+=" "+o+'="'+d(c(r),l,"&quot;")+'"'),v+">"+f+"</"+n+">"}},298:function(t,n,o){var r=o(3);t.exports=function(t){return r((function(){var n=""[t]('"');return n!==n.toLowerCase()||n.split('"').length>3}))}},301:function(t,n,o){t.exports=o.p+"img/patterns-two.859a212.png"},318:function(t,n,o){"use strict";o.r(n);o(32),o(50),o(296);var r=[function(){var t=this._self._c;return t("div",{staticClass:"pattern"},[t("img",{attrs:{src:o(301),alt:"patterns",loading:"lazy"}})])}],e={props:["block","dataBinding"],methods:{classObject:function(t){return"front_bottom"==t?"image-one":"back_top_right"==t?"image-two":"back_top_left"==t?"image-three":void 0}}},c=o(49),component=Object(c.a)(e,(function(){var t=this,n=t._self._c;return n("section",{staticClass:"about-hero-two",attrs:{"data-cms-bind":t.dataBinding}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-xl-5 col-lg-10 mx-auto"},[n("div",{staticClass:"about-hero-two-content position-relative"},[n("h2",[t._v(t._s(t.block.title))]),t._v("\n          "+t._s(t.block.description)+"\n          "),n("div",{staticClass:"scroll-down d-flex justify-content-center justify-content-xl-start"},[n("a",{staticClass:"btn btn-primary btn-lg",attrs:{href:t.block.button.text}},[t._v("\n              "+t._s(t.block.button.link)+"\n            ")])])])]),t._v(" "),n("div",{staticClass:"col-xl-7 col-lg-12"},[n("div",{staticClass:"about-hero-two-banner"},[t._l(t.block.hero_images,(function(o){return n("div",{class:t.classObject(o.placement)},[n("img",{attrs:{src:o.image,alt:"aboutfeature",loading:"lazy"}})])})),t._v(" "),t._m(0)],2)])])])])}),r,!1,null,null,null);n.default=component.exports}}]);