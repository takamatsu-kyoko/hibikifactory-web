"use strict";(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[923],{6325:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(7294),l=n(5444);function a(e){var t=e.update;return r.createElement("li",null,t.type+": "+t.summary+" ("+t.date+")")}function u(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e){for(var t,n=e.limit,o=void 0===n?void 0:n,i=(0,l.K2)("852476546"),c=[],m=u(i.change_log.nodes);!(t=m()).done;){var d=t.value;c.push({id:d.id,type:"changelog",date:d.date,summary:d.summary,description:d.description,url:d.url,slug:d.slug})}for(var s,f=u(i.recent_updates.nodes);!(s=f()).done;){var E=s.value;null!==E.frontmatter.updated_on&&c.push({id:E.id,type:"update",date:E.frontmatter.updated_on,summary:E.frontmatter.title,url:null,slug:E.slug})}for(var p,y=u(i.recent_posts.nodes);!(p=y()).done;){var g=p.value;c.push({id:g.id,type:"post",date:g.frontmatter.published_on,summary:g.frontmatter.title,url:null,slug:g.slug})}return c.sort((function(e,t){return e.date<t.date?1:e.date>t.date?-1:0})),r.createElement("ul",null,c.slice(0,o?parseInt(o):void 0).map((function(e){return r.createElement(a,{key:e.id,update:e})})))}},5610:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(7294);function l(){return r.createElement("footer",null,r.createElement("section",null,r.createElement("h2",null,"響製作所"),r.createElement("span",null,"https://www.hibikifactory.net/")),r.createElement("section",null,r.createElement("ul",null,r.createElement("li",null,"高松 響子"),r.createElement("ul",null,r.createElement("li",null,"Twitter: takamatsu_kyoko"),r.createElement("li",null,"Instagram: takamatsu_kyoko"),r.createElement("li",null,"GitHub: takamatsu-kyoko"),r.createElement("li",null,"T'sLove: id 45642")))))}},1639:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(7294),l=n(5444);function a(){return r.createElement("nav",null,r.createElement("ul",null,r.createElement("li",null,r.createElement(l.rU,{to:"/"},"Home")),r.createElement("li",null,r.createElement(l.rU,{to:"/blog/"},"Blog")),r.createElement("li",null,"About"),r.createElement("li",null,r.createElement(l.rU,{to:"/changelog/"},"Log"))))}function u(){return r.createElement("header",null,r.createElement("span",null,"Hibiki Factory"),r.createElement(a,null))}},4928:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(7294),l=n(5444);function a(e){var t=e.blog;return r.createElement("li",null,r.createElement(l.rU,{to:"/blog/post/"+t.slug},t.frontmatter.title))}function u(){var e=(0,l.K2)("3839847348");return r.createElement("section",null,r.createElement("h2",null,"カテゴリ"),e.allMdx.group.map((function(e){return r.createElement("section",{key:e.fieldValue},r.createElement("h3",null,e.fieldValue),r.createElement("ul",null,e.edges.map((function(e){return r.createElement(a,{key:e.node.id,blog:e.node})}))))})))}function o(){return r.createElement("aside",null,r.createElement(u,null))}},1775:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(7294),l=n(1639),a=n(4928),u=n(5610);function o(e){e.pagetitele;var t=e.children;return r.createElement("div",null,r.createElement(l.Z,null),r.createElement("main",null,t),r.createElement(a.Z,null),r.createElement(u.Z,null))}},7254:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var r=n(7294),l=n(1775),a=n(6325);function u(){return r.createElement(l.Z,null,r.createElement("h1",null,"更新履歴"),r.createElement(a.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-changelog-js-394d8e58982eefeff03a.js.map