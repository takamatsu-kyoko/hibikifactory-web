"use strict";(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[923],{6325:function(e,t,n){n.d(t,{Z:function(){return c}});var l=n(7294),r=n(5444);function a(e){var t=e.update;return l.createElement("li",null,t.type+": "+t.summary+" ("+t.date+")")}function u(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var l=0;return function(){return l>=e.length?{done:!0}:{done:!1,value:e[l++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,l=new Array(t);n<t;n++)l[n]=e[n];return l}function c(e){for(var t,n=e.limit,o=void 0===n?void 0:n,c=(0,r.K2)("852476546"),i=[],m=u(c.change_log.nodes);!(t=m()).done;){var d=t.value;i.push({id:d.id,type:"changelog",date:d.date,summary:d.summary,description:d.description,url:d.url,slug:d.slug})}for(var s,f=u(c.recent_updates.nodes);!(s=f()).done;){var E=s.value;null!==E.frontmatter.updated_on&&i.push({id:E.id,type:"update",date:E.frontmatter.updated_on,summary:E.frontmatter.title,url:null,slug:E.slug})}for(var p,g=u(c.recent_posts.nodes);!(p=g()).done;){var v=p.value;i.push({id:v.id,type:"post",date:v.frontmatter.published_on,summary:v.frontmatter.title,url:null,slug:v.slug})}return i.sort((function(e,t){return e.date<t.date?1:e.date>t.date?-1:0})),l.createElement("ul",null,i.slice(0,o?parseInt(o):void 0).map((function(e){return l.createElement(a,{key:e.id,update:e})})))}},5610:function(e,t,n){n.d(t,{Z:function(){return r}});var l=n(7294);function r(){return l.createElement("footer",null,l.createElement("section",null,l.createElement("h2",null,"響製作所"),l.createElement("span",null,"https://www.hibikifactory.net/")),l.createElement("section",null,l.createElement("ul",null,l.createElement("li",null,"高松 響子"),l.createElement("ul",null,l.createElement("li",null,"Twitter: takamatsu_kyoko"),l.createElement("li",null,"Instagram: takamatsu_kyoko"),l.createElement("li",null,"GitHub: takamatsu-kyoko"),l.createElement("li",null,"T'sLove: id 45642")))))}},1639:function(e,t,n){n.d(t,{Z:function(){return u}});var l=n(7294),r=n(5444);function a(){return l.createElement("nav",null,l.createElement("ul",null,l.createElement("li",null,l.createElement(r.rU,{to:"/"},"Home")),l.createElement("li",null,l.createElement(r.rU,{to:"/blog/"},"Blog")),l.createElement("li",null,"About"),l.createElement("li",null,l.createElement(r.rU,{to:"/changelog/"},"Log"))))}function u(){return l.createElement("header",null,l.createElement("h1",null,"Logo"),l.createElement(a,null))}},4928:function(e,t,n){n.d(t,{Z:function(){return o}});var l=n(7294),r=n(5444);function a(e){var t=e.blog;return l.createElement("li",null,l.createElement(r.rU,{to:"/blog/post/"+t.slug},t.frontmatter.title))}function u(){var e=(0,r.K2)("3839847348");return l.createElement("section",null,l.createElement("h2",null,"Blog List"),e.allMdx.group.map((function(e){return l.createElement("section",{key:e.fieldValue},l.createElement("h3",null,e.fieldValue),l.createElement("ul",null,e.edges.map((function(e){return l.createElement(a,{key:e.node.id,blog:e.node})}))))})))}function o(){return l.createElement("aside",null,l.createElement(u,null))}},1775:function(e,t,n){n.d(t,{Z:function(){return o}});var l=n(7294),r=n(1639),a=n(4928),u=n(5610);function o(e){e.pagetitele;var t=e.children;return l.createElement("div",null,l.createElement(r.Z,null),l.createElement("main",null,t),l.createElement(a.Z,null),l.createElement(u.Z,null))}},7254:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var l=n(7294),r=n(1775),a=n(6325);function u(){return l.createElement(r.Z,null,l.createElement("h1",null,"Change log"),l.createElement(a.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-changelog-js-bb9f860f4c8a848fa9b8.js.map