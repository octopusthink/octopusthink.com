(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"16Xr":function(t,n,e){"use strict";var r=e("nONw"),i=e("BjK0"),c=e("+wZX"),o=[].slice,a={},u=function(t,n,e){if(!(n in a)){for(var r=[],i=0;i<n;i++)r[i]="a["+i+"]";a[n]=Function("F,a","return new F("+r.join(",")+")")}return a[n](t,e)};t.exports=Function.bind||function(t){var n=r(this),e=o.call(arguments,1),a=function(){var r=e.concat(o.call(arguments));return this instanceof a?u(n,r.length,r):c(n,r,t)};return i(n.prototype)&&(a.prototype=n.prototype),a}},"A2+M":function(t,n,e){var r=e("X8hv");t.exports={MDXRenderer:r}},HXL5:function(t,n,e){"use strict";var r=e("gqYL"),i=(e("q1tI"),e("qKvR"));n.a=function(t){var n=t.children,e=Object(r.useTheme)();return Object(i.jsx)("section",{css:Object(i.css)("background:",e.colors.neutral.white,";margin:0 auto;padding-top:8rem;padding-bottom:8rem;padding-left:",e.site.mobilePadding,";padding-right:",e.site.mobilePadding,";min-height:70vh;justify-content:center;display:flex;flex-direction:column;@media screen and (min-width:640px){padding-left:",e.site.tabletPadding,";padding-right:",e.site.tabletPadding,";}@media screen and (min-width:1024px){padding-left:",e.site.desktopPadding,";padding-right:",e.site.desktopPadding,";max-width:",e.site.maxSiteWidth,";}")},Object(i.jsx)("div",{css:Object(i.css)("max-width:",e.site.maxContentWidth,";margin:0 auto;")},n))}},X8hv:function(t,n,e){function r(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function i(t,n,e){return(i=r()?Reflect.construct:function(t,n,e){var r=[null];r.push.apply(r,n);var i=new(Function.bind.apply(t,r));return e&&c(i,e.prototype),i}).apply(null,arguments)}function c(t,n){return(c=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function o(t){return function(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function a(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function u(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?a(e,!0).forEach((function(n){s(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):a(e).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function s(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}e("xtjI"),e("Dq+y"),e("Ggvi"),e("YbXK"),e("cFtU"),e("m210"),e("4DPX"),e("rzGZ"),e("LagC"),e("q8oJ"),e("8npG"),e("nWfQ"),e("nWfQ"),e("LagC"),e("YbXK"),e("cFtU"),e("q8oJ"),e("m210"),e("xtjI"),e("4DPX"),e("rzGZ"),e("Dq+y"),e("8npG"),e("Ggvi");var p=e("q1tI"),l=e("7ljp"),f=l.useMDXComponents,d=l.mdx,b=e("BfwJ").useMDXScope;t.exports=function(t){var n=t.scope,e=t.components,r=t.children,c=function(t,n){if(null==t)return{};var e,r,i={},c=Object.keys(t);for(r=0;r<c.length;r++)e=c[r],n.indexOf(e)>=0||(i[e]=t[e]);return i}(t,["scope","components","children"]),a=f(e),s=b(n),l=p.useMemo((function(){if(!r)return null;var t=u({React:p,mdx:d},s),n=Object.keys(t),e=n.map((function(n){return t[n]}));return i(Function,["_fn"].concat(o(n),[""+r])).apply(void 0,[{}].concat(o(e)))}),[r,n]);return p.createElement(l,u({components:a},c))}},nWfQ:function(t,n,e){var r=e("P8UN"),i=e("nsRs"),c=e("nONw"),o=e("1a8y"),a=e("BjK0"),u=e("96qb"),s=e("16Xr"),p=(e("emib").Reflect||{}).construct,l=u((function(){function t(){}return!(p((function(){}),[],t)instanceof t)})),f=!u((function(){p((function(){}))}));r(r.S+r.F*(l||f),"Reflect",{construct:function(t,n){c(t),o(n);var e=arguments.length<3?t:c(arguments[2]);if(f&&!l)return p(t,n,e);if(t==e){switch(n.length){case 0:return new t;case 1:return new t(n[0]);case 2:return new t(n[0],n[1]);case 3:return new t(n[0],n[1],n[2]);case 4:return new t(n[0],n[1],n[2],n[3])}var r=[null];return r.push.apply(r,n),new(s.apply(t,r))}var u=e.prototype,d=i(a(u)?u:Object.prototype),b=Function.apply.call(t,d,n);return a(b)?b:d}})},r7GO:function(t,n,e){"use strict";e.r(n),e.d(n,"Page",(function(){return l})),e.d(n,"pageQuery",(function(){return f}));var r=e("A2+M"),i=(e("q1tI"),e("B1va")),c=e("HXL5"),o=e("LIIa"),a=e("GPKm"),u=e("wtQ5"),s=e("99TB"),p=e("qKvR"),l=function(t){var n=t.data.page,e=n.body,l=n.fields,f=l.canonical,d=l.metaDescription,b=l.slug,y=l.summary,g=l.title,m=d||y;return Object(p.jsx)(s.a,null,Object(p.jsx)(u.a,{canonical:f,title:g,description:m,pathname:b}),Object(p.jsx)(a.a,null,Object(p.jsx)(o.a,{summary:y,description:m,title:g}),Object(p.jsx)(c.a,null,Object(p.jsx)(r.MDXRenderer,null,e)),Object(p.jsx)(i.a,{light:!0})))},f="2609551952";n.default=l}}]);
//# sourceMappingURL=component---src-templates-page-js-99e67d17d557d148a319.js.map