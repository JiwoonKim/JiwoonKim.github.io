(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{153:function(e,a,t){"use strict";t.r(a),t.d(a,"default",function(){return m}),t.d(a,"tagQuery",function(){return i});var n=t(0),r=t.n(n),l=t(55),c=t(163);function m(e){var a=e.data.allMarkdownRemark.edges,t=e.pageContext.tag,n=e.data.allMarkdownRemark.totalCount;return r.a.createElement(c.a,{title:t,metaDataType:"post-list",metaData:n},r.a.createElement("div",{className:"tags"},a.map(function(e,a){var t=e.node;return r.a.createElement("div",null,r.a.createElement(l.Link,{to:""+t.frontmatter.path,key:a},t.frontmatter.title))})))}var i="2508266909"},162:function(e){e.exports={data:{site:{siteMetadata:{author:"김지운"}}}}},163:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(1),c=t.n(l),m=t(55),i=t(160),o=t(161),s=t(165),u=t(8),p=t.n(u),d=t(166),E=(t(148),function(e){function a(){return e.apply(this,arguments)||this}p()(a,e);var t=a.prototype;return t.showSettings=function(e){e.preventDefault()},t.render=function(){return r.a.createElement(d.slide,null,r.a.createElement(m.Link,{to:"/"},"Home"),r.a.createElement(m.Link,{to:"/about"},"About"),r.a.createElement(m.Link,{to:"/postlist"},"Category"))},a}(r.a.Component)),f=(t(149),function(e){var a=e.title,t=e.metaDataType,n=e.metaData;return r.a.createElement("header",null,r.a.createElement("nav",null,r.a.createElement(E,null)),r.a.createElement("div",{className:"banner-container"},r.a.createElement(h,{title:a,metaDataType:t}),r.a.createElement(v,{metaDataType:t,metaData:n})))}),h=function(e){var a=e.title,t=e.metaDataType;return r.a.createElement("div",{className:"banner-title-container"},r.a.createElement("h1",{className:"tag-decoration tag-decoration-left"},r.a.createElement("span",null,"<h1>")),r.a.createElement(g,{title:a,metaDataType:t}),r.a.createElement("h1",{className:"tag-decoration tag-decoration-right"},r.a.createElement("span",null,"</h1>")))},g=function(e){var a=e.title,t=e.metaDataType;return"blog-post"===t||"all"===t?r.a.createElement("h1",{className:"banner-title"},a):r.a.createElement("h1",{className:"banner-title"},a,r.a.createElement("span",{className:"banner-title-include-string"},"에 해당하는 글"))},v=function(e){var a=e.metaDataType,t=e.metaData;return"blog-post"===a?r.a.createElement(y,{metaData:t}):"post-list"===a?r.a.createElement(b,{metaData:t}):r.a.createElement(D,null)},D=function(){return r.a.createElement("div",{className:"header-meta-data"})},y=function(e){var a=e.metaData;return r.a.createElement("div",{className:"header-meta-data"},r.a.createElement("span",null,r.a.createElement(o.a,{className:"meta-data-icon",icon:"calendar-alt"}),r.a.createElement("span",null,a.date)),r.a.createElement("span",null,r.a.createElement(o.a,{className:"meta-data-icon",icon:"tags"}),a.tags.map(function(e){return r.a.createElement(m.Link,{to:"tags/"+e.toLowerCase(),className:"tag"},r.a.createElement("span",null,e),r.a.createElement("span",null,"·"))})))},b=function(e){var a=e.metaData;return r.a.createElement("div",{className:"header-meta-data"},r.a.createElement("span",null,r.a.createElement(o.a,{className:"meta-data-icon",icon:"search"}),r.a.createElement("span",{className:"header-posts-count"},a),r.a.createElement("span",null,"matching articles")))};f.propTypes={title:c.a.string},f.defaultProps={title:""},i.b.add(s.a,s.c,s.b);var N=f,k=t(162),T=t(167),w=(t(150),function(){return r.a.createElement(m.StaticQuery,{query:"1041092198",render:function(e){return r.a.createElement("footer",null,r.a.createElement("h1",null,r.a.createElement("span",null,"© ",(new Date).getFullYear(),", Built by "," "),r.a.createElement(m.Link,{to:"/"},e.site.siteMetadata.author),r.a.createElement("span",null," "),r.a.createElement("a",{className:"footer-github-link",href:"https://github.com/JiwoonKim"},r.a.createElement(o.a,{icon:["fab","github"]}))))},data:k})});w.propTypes={author:c.a.string},w.defaultProps={author:""},i.b.add(T.a);var L=w,C=(t(151),function(e){var a=e.title,t=e.metaDataType,n=e.metaData,l=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(N,{title:a,metaDataType:t,metaData:n}),r.a.createElement("main",null,l),r.a.createElement(L,null))});C.propTypes={children:c.a.node.isRequired};a.a=C}}]);
//# sourceMappingURL=component---src-components-templates-tag-list-js-bbb7fdf9f97112ba0290.js.map