(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{219:function(t,n,l){t.exports=l.p+"img/W540x960_01 (1).652bfda.jpg"},243:function(t,n,l){"use strict";l.r(n);var e=[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"download_box"},[n("div",{staticClass:"download_item"},[n("div",{staticClass:"download_item_pic",attrs:{"data-text":"wallpaper01"}},[n("img",{attrs:{src:l(219),alt:""}})])])])},function(){var t=this,n=t.$createElement,l=t._self._c||n;return l("ul",{staticClass:"normol_page",staticStyle:{display:"none"}},[l("li",{staticClass:"normol_page_btn"},[t._v("3")]),t._v(" "),l("li",{staticClass:"normol_page_btn"},[t._v("2")]),t._v(" "),l("li",{staticClass:"normol_page_btn on"},[t._v("1")]),t._v(" "),l("li",{staticClass:"normol_page_btn prev"}),t._v(" "),l("li",{staticClass:"normol_page_btn next"})])}],o={data:function(){return{tabNum:0}},mounted:function(){var t=this;window.onresize=function(){"/download"==t.$route.path&&t.sizeHnadler()}},methods:{sizeHnadler:function(){var t=document.querySelector(".download_box"),n=document.querySelectorAll(".download_item"),l=document.querySelector(".download_item_pic").clientWidth+30;if(window.screen.width>767){var e=parseInt(t.clientWidth/l);n[0].style.width="calc(100% / 4 )";for(var i=0;i<n.length;i++)n[i].style.width="calc(100% /"+e+")"}else for(i=0;i<n.length;i++)n[i].style.width=""}}},c=l(16),component=Object(c.a)(o,(function(){var t=this,n=t.$createElement,l=t._self._c||n;return l("div",{staticClass:"main_container"},[l("main",{staticClass:"main"},[l("div",{staticClass:"download"},[l("ul",{staticClass:"normol_tab"},[l("li",{class:[0==this.tabNum?"on":""],on:{click:function(n){t.tabNum=0}}},[t._v("\n                    PC wallpaper\n                ")]),t._v(" "),l("li",{class:[1==this.tabNum?"on":""],on:{click:function(n){t.tabNum=1}}},[t._v("\n                    Mobile wallpaper\n                ")])]),t._v(" "),t._m(0)]),t._v(" "),t._m(1)])])}),e,!1,null,null,null);n.default=component.exports}}]);