(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{149:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return c});var n=a(0),r=a.n(n),i=a(36),l=a(152),o=a(151),c="161381411";t.default=function(e){var t=e.data;return r.a.createElement(l.a,null,r.a.createElement(o.a,{title:"Home",keywords:["gatsby","application","react"]}),r.a.createElement("h1",null,"태그"),r.a.createElement("hr",null),r.a.createElement("h1",null,"최근 글"),t.allMarkdownRemark.edges.map(function(e){return r.a.createElement("div",{key:e.node.id},r.a.createElement(i.Link,{to:e.node.frontmatter.path},r.a.createElement("h4",null,e.node.frontmatter.title),r.a.createElement("small",null,"Posted on ",e.node.frontmatter.date)))}))}},151:function(e,t,a){"use strict";var n=a(155),r=a(0),i=a.n(r),l=a(1),o=a.n(l),c=a(157),s=a.n(c),m=a(36);function u(e){var t=e.description,a=e.lang,r=e.meta,l=e.keywords,o=e.title;return i.a.createElement(m.StaticQuery,{query:d,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:o},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:n}].concat(l.length>0?{name:"keywords",content:l.join(", ")}:[]).concat(r)})},data:n})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=u;var d="1025518380"},152:function(e,t,a){"use strict";var n=a(153),r=a(0),i=a.n(r),l=a(1),o=a.n(l),c=a(36),s=function(e){var t=e.siteTitle;return i.a.createElement("div",{style:{background:"#40A998",opacity:"0.7",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(c.Link,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};s.propTypes={siteTitle:o.a.string},s.defaultProps={siteTitle:""};var m=s,u=function(){return i.a.createElement("div",{style:{background:"#f4f4f4",paddingTop:"10px"}},i.a.createElement("ul",{style:{listStyle:"none",display:"flex",justifyContent:"space-evenly"}},i.a.createElement("li",null,i.a.createElement(c.Link,{to:"/"},"HOME")),i.a.createElement("li",null,i.a.createElement(c.Link,{to:"/about"},"ABOUT")),i.a.createElement("li",null,i.a.createElement(c.Link,{to:"/postlist"},"CATEGORY"))))},d=(a(154),function(e){var t=e.children;return i.a.createElement(c.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(m,{siteTitle:e.site.siteMetadata.title}),i.a.createElement(u,null),i.a.createElement("div",{style:{margin:"2.5rem auto",maxWidth:800}},t,i.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))},data:n})});d.propTypes={children:o.a.node.isRequired};t.a=d},153:function(e){e.exports={data:{site:{siteMetadata:{title:"아기 드래곤의 개발공부 로그"}}}}},154:function(e,t,a){},155:function(e){e.exports={data:{site:{siteMetadata:{title:"아기 드래곤의 개발공부 로그",description:"공부한 내용을 정리하는 개발 로그입니다",author:"김지운"}}}}}}]);
//# sourceMappingURL=component---src-pages-postlist-js-73b7c9c99d4d963639db.js.map