(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{145:function(e,t,a){"use strict";a.r(t);a(168),a(170),a(52);var r=a(0),o=a.n(r),n=a(147),i=a(157),l=a(155),c=a(175),m=a(173),s=a(163),d=a(152),g=Object(n.a)(["display:inline-block;width:150px;border-radius:0;&:first-child{border-right:2px solid ",";border-top-left-radius:5px;border-bottom-left-radius:5px;}&:last-child{border-left:2px solid ",";border-top-right-radius:5px;border-bottom-right-radius:5px;}"],"hsla(0, 0%, 0%, 0.1)","hsla(0, 0%, 0%, 0.1)"),p=n.b.div.withConfig({displayName:"PaginationController__Container",componentId:"sc-1aqef8j-0"})(["display:flex;justify-content:center;align-items:center;@media (max-width:400px){font-size:0.8em;a,span{padding-top:0.75rem;padding-bottom:0.75rem;}}"]),h=Object(n.b)(d.b).withConfig({displayName:"PaginationController__PaginationButtonNormal",componentId:"sc-1aqef8j-1"})(["",";"],g),f=Object(n.b)(d.c).withConfig({displayName:"PaginationController__PaginationDisabledButton",componentId:"sc-1aqef8j-2"})(["",";"],g),u=function(e){var t=e.url,a=e.children;return e.isTextOnly?o.a.createElement(f,null,a):o.a.createElement(h,{url:t},a)},b=function(e){var t=e.isFirstPage,a=e.isLastPage,r=e.previousUrl,n=e.nextUrl;return o.a.createElement(p,null,o.a.createElement(u,{isTextOnly:t,url:"/articles/"+r},"←"," ","Previous"),o.a.createElement(u,{url:"/archive/"},"Archive"),o.a.createElement(u,{isTextOnly:a,url:"/articles/"+n},"Next"," ","→"))};function x(e){return e.map(function(e){var t=e.node;return o.a.createElement(k,{key:t.id},o.a.createElement(m.a,{url:t.fields.path,title:t.frontmatter.title,date:t.frontmatter.readableDate,excerpt:t.frontmatter.excerpt,excerptQuote:t.frontmatter.excerptQuote,showReadMoreHintInHeader:!0}))})}var w=n.b.div.withConfig({displayName:"PaginationTemplate__Pagination",componentId:"sc-1tcx50v-0"})(["padding:5rem 0;"]),v=n.b.ul.withConfig({displayName:"PaginationTemplate__Posts",componentId:"sc-1tcx50v-1"})([""]),E=n.b.ul.withConfig({displayName:"PaginationTemplate__Grid",componentId:"sc-1tcx50v-2"})(["margin-bottom:0;"]),y=n.b.li.withConfig({displayName:"PaginationTemplate__MainItem",componentId:"sc-1tcx50v-3"})(["margin-bottom:4rem;"]),k=n.b.li.withConfig({displayName:"PaginationTemplate__Item",componentId:"sc-1tcx50v-4"})(["margin-bottom:2rem;"]);t.default=function(e){var t=e.pageContext,a=t.group,r=t.index,n=t.first,m=t.last,d=r-1==1?"":(r-1).toString(),g=(r+1).toString(),p=function(e,t){var a=t.isFirstPage,r=t.splitAt;if(a){var n=e.slice(0,r),i=e.slice(r);return o.a.createElement(o.a.Fragment,null,o.a.createElement(v,null,n.map(function(e){var t=e.node;return o.a.createElement(y,{key:t.id},o.a.createElement(c.a,{url:t.fields.path,title:t.frontmatter.title,date:t.frontmatter.readableDate,content:t.html}))})),o.a.createElement(E,null,x(i)))}return o.a.createElement(E,null,x(e))}(a,{isFirstPage:n,splitAt:3});return o.a.createElement(l.a,null,o.a.createElement(i.Helmet,null,o.a.createElement("title",null,"Articles — Matthieu Oger")),o.a.createElement(s.a,{url:"/articles/"},"Articles"),o.a.createElement(b,{previousUrl:d,nextUrl:g,isFirstPage:n,isLastPage:m}),o.a.createElement(w,null,p),a.length>3&&o.a.createElement(b,{previousUrl:d,nextUrl:g,isFirstPage:n,isLastPage:m}))}},153:function(e){e.exports={data:{site:{siteMetadata:{handles:{twitter:"solarsailer",github:"solarsailer",dribbble:"matthieuoger",unsplash:"matthieuoger",instagram:"matthieuoger",speakerDeck:"matthieuoger",linkedIn:"matthieuoger"}}}}}},154:function(e,t,a){"use strict";var r=a(147);t.a=Object(r.a)(["a{color:inherit;text-decoration:none;transition:color 0.2s ease-in;}a:hover{color:var(--color-accent);}a:focus,a:active{color:hsl(var(--hue-accent),69%,47%);}"])},155:function(e,t,a){"use strict";var r=a(0),o=a.n(r),n=a(166),i=a(148),l=a(147),c=a(149),m=a(152),s=l.b.header.withConfig({displayName:"Header",componentId:"sc-10x7pot-0"})(["margin-bottom:5rem;"]),d=l.b.hr.withConfig({displayName:"Header__Separator",componentId:"sc-10x7pot-1"})(["height:1px;margin-left:50%;background:linear-gradient( to right,var(--color-page-background),hsl(0,0%,88%) );border-top:none;border-bottom:none;"]),g=Object(l.b)(m.a).withConfig({displayName:"Header__MenuButton",componentId:"sc-10x7pot-2"})(["color:#888;padding:3px 1rem 1px;background:hsla(0,0%,100%,0.5);border:2px solid hsla(0,0%,53%,0.25);border-radius:3px;font-size:0.85em;&.selected:not(:hover){color:white;background:hsl(var(--hue-accent),77%,65%);border:2px solid hsl(var(--hue-accent),77%,65%);}"]),p=l.b.nav.withConfig({displayName:"Header__GlobalMenu",componentId:"sc-10x7pot-3"})(["display:flex;align-items:flex-start;padding:2rem;background:linear-gradient( to bottom,hsl(0,0%,88%),var(--color-page-background) );@media (max-width:","px){flex-direction:column;align-items:center;}"],650),h=function(e){return void 0===e&&(e="#E44D2A"),o.a.createElement("svg",{width:"15",height:"15",viewBox:"0 0 15 15",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("path",{d:"M7.822.14l7.037 7.038a.456.456 0 0 1 0 .644L7.822 14.86a.456.456 0 0 1-.644 0L.14 7.822a.456.456 0 0 1 0-.644L7.178.14a.456.456 0 0 1 .644 0zM2.316 8.07h2.906a.294.294 0 0 0 .303-.302v-.523a.326.326 0 0 0-.08-.23.29.29 0 0 0-.223-.086H2.316a.294.294 0 0 0-.217.086.311.311 0 0 0-.086.23v.523a.294.294 0 0 0 .303.303zm7.462 0h2.906a.294.294 0 0 0 .303-.302v-.523a.326.326 0 0 0-.079-.23.29.29 0 0 0-.224-.086H9.778a.294.294 0 0 0-.217.086.311.311 0 0 0-.086.23v.523a.294.294 0 0 0 .303.303zM8.071 5.223V2.316a.294.294 0 0 0-.303-.303h-.523a.326.326 0 0 0-.23.079.29.29 0 0 0-.086.224v2.906c0 .088.029.16.086.217a.311.311 0 0 0 .23.086h.523a.294.294 0 0 0 .303-.303zm0 7.462V9.778a.294.294 0 0 0-.303-.303h-.523a.326.326 0 0 0-.23.08.29.29 0 0 0-.086.223v2.906c0 .088.029.16.086.217a.311.311 0 0 0 .23.086h.523a.294.294 0 0 0 .303-.303z",fill:e,fillRule:"nonzero"}))},f=l.b.h1.withConfig({displayName:"Header__GlobalTitle",componentId:"sc-10x7pot-4"})(["margin-bottom:0;font-size:1.4em;font-weight:500;text-transform:uppercase;line-height:normal;a{display:inline-block;color:#888;text-decoration:none;transition:all 0.3s ease-out;}span{opacity:0.75;}svg{width:21px;height:21px;transition:all 0.3s ease-out;vertical-align:-1px;}path{fill:#888;transition:all 0.3s ease-out;}a:hover{color:var(--color-accent);transform:translateX(5px);text-shadow:0 2px 10px hsla(var(--hue-accent),78%,53%,0.25);svg{transform:translateX(-5px) rotate(1turn);transform-origin:center;}path{fill:var(--color-accent);}}@media (max-width:","px){margin-bottom:1rem;}"],650),u=l.b.ul.withConfig({displayName:"Header__GlobalList",componentId:"sc-10x7pot-5"})(["flex:1;display:flex;margin-bottom:0;justify-content:flex-end;li + li{margin-left:1rem;}"]),b=function(){return o.a.createElement(s,{className:"page-header",id:"page_header"},o.a.createElement(p,null,o.a.createElement(f,null,o.a.createElement(i.Link,{to:"/"},o.a.createElement(h,null),"  ",o.a.createElement("span",null,"Matthieu")," ","Oger")),o.a.createElement(u,null,o.a.createElement("li",null,o.a.createElement(g,{url:"/about/",activeClassName:"selected"},"About")),o.a.createElement("li",null,o.a.createElement(g,{url:"/articles/",activeClassName:"selected"},"Articles")),o.a.createElement("li",null,o.a.createElement(g,{url:"/atom.xml",external:!0,newTab:!0},Object(c.b)("rss",{width:"11px",height:"11px",marginRight:"6px"}),"RSS")))),o.a.createElement(d,null))},x=a(153),w=(a(78),a(53),a(158),a(52),a(27),a(150),a(159)),v=a(160),E=a(161);function y(e){var t=e[0],a=e[1],r=Object(w.a)(t);if(r)return o.a.createElement(z,{key:t,handle:a,name:r.name,url:r.url,color:r.color})}var k=l.b.ul.withConfig({displayName:"CompactSocialNavigation__List",componentId:"wu2gli-0"})(["display:flex;justify-content:center;align-items:center;li + li{margin-left:2rem;}svg{display:block;width:35px;height:35px;}@media (max-width:","px){",";}"],500,E.a),C=l.b.a.withConfig({displayName:"CompactSocialNavigation__Link",componentId:"wu2gli-1"})(["color:#aaa;transition:all 0.12s ease-out;circle{stroke:currentColor;opacity:0.25;transition:all 0.5s ease-out;}path{opacity:0.9;transition:all 0.5s ease-out;}&:hover{color:",";circle,path{opacity:1;}}"],function(e){return e.color}),z=function(e){var t=e.handle,a=e.name,r=e.url,n=e.color,i=void 0===n?"white":n;return r=r.replace("@HANDLE",t),o.a.createElement("li",null,o.a.createElement(v.a,{text:a,color:i},o.a.createElement(C,{href:r,color:i},Object(c.a)(a+"-line",{color:i}))))},_=function(e){var t=e.handles;return o.a.createElement("nav",null,o.a.createElement(k,null,Object.entries(t).map(y)))},N=l.b.footer.withConfig({displayName:"Footer",componentId:"sc-1nazf9j-0"})(["color:#aaa;max-width:","px;margin-left:auto;margin-right:auto;margin-top:10rem;padding-top:3rem;padding-bottom:3rem;border-top:1px solid hsla(0,0%,0%,0.1);ul{margin-bottom:1rem;}>:last-child{margin-bottom:0;}@media (max-width:","px){ul{margin-bottom:2rem;}}@media (max-width:","px){max-width:80%;}"],550,500,650),I=l.b.p.withConfig({displayName:"Footer__Copyright",componentId:"sc-1nazf9j-1"})(["font-size:0.75em;text-align:center;text-transform:uppercase;a{color:inherit;transition:all 0.3s ease-out;text-decoration:none;}a:hover{color:var(--color-accent);}"]),P=function(e){var t=e.handles;return o.a.createElement(N,{className:"page-footer",id:"page_footer"},o.a.createElement(_,{handles:t}),o.a.createElement(I,null,o.a.createElement("a",{href:"/"},"© 2019 ",o.a.createElement("span",null,"Matthieu Oger"))))},M=function(){return o.a.createElement(i.StaticQuery,{query:"142630259",render:function(e){return o.a.createElement(P,{handles:e.site.siteMetadata.handles})},data:x})},A=a(162);t.a=function(e){var t=e.children;return o.a.createElement(A.a,null,o.a.createElement(n.a,null),o.a.createElement(b,null),o.a.createElement(A.c,null,t),o.a.createElement(M,null))}},156:function(e,t,a){"use strict";var r=a(11);e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},163:function(e,t,a){"use strict";var r=a(0),o=a.n(r),n=a(147),i=a(148),l=a(154),c=n.b.h1.withConfig({displayName:"PageTitle__Title",componentId:"sc-1lnts53-0"})(["display:flex;justify-content:center;align-items:center;margin-bottom:5rem;font-size:3em;font-weight:500;&::before,&::after{content:'';flex:1;height:1px;background:#ccc;}&::before{margin-right:3rem;background:linear-gradient( to left,hsl(0,0%,88%),var(--color-page-background) );}&::after{margin-left:3rem;background:linear-gradient( to right,hsl(0,0%,88%),var(--color-page-background) );}",";"],l.a);t.a=function(e){var t=e.url,a=e.children;return o.a.createElement(c,null,o.a.createElement(i.Link,{to:t||"#"},a))}},168:function(e,t,a){"use strict";a(169);var r=a(11),o=a(156),n=a(17),i=/./.toString,l=function(e){a(18)(RegExp.prototype,"toString",e,!0)};a(19)(function(){return"/a/b"!=i.call({source:"a",flags:"b"})})?l(function(){var e=r(this);return"/".concat(e.source,"/","flags"in e?e.flags:!n&&e instanceof RegExp?o.call(e):void 0)}):"toString"!=i.name&&l(function(){return i.call(this)})},169:function(e,t,a){a(17)&&"g"!=/./g.flags&&a(28).f(RegExp.prototype,"flags",{configurable:!0,get:a(156)})},170:function(e,t,a){var r=Date.prototype,o=r.toString,n=r.getTime;new Date(NaN)+""!="Invalid Date"&&a(18)(r,"toString",function(){var e=n.call(this);return e==e?o.call(this):"Invalid Date"})},173:function(e,t,a){"use strict";a(150);var r=a(0),o=a.n(r),n=a(147),i=a(148),l=Object(n.b)(i.Link).withConfig({displayName:"PostRecap__BlockLink",componentId:"hwfaf3-0"})(["display:block;color:inherit;text-decoration:none;.read-more-hint{color:var(--color-accent);font-size:1.1rem;font-style:italic;font-weight:normal;}"]),c=n.b.div.withConfig({displayName:"PostRecap__Wrapper",componentId:"hwfaf3-1"})(["position:relative;z-index:1;will-change:transform;transition:",";transition-property:transform;&:hover{transform:translateY(-5px);}"],"all 0.2s ease-out"),m=n.b.article.withConfig({displayName:"PostRecap__Article",componentId:"hwfaf3-2"})(["padding:2rem;background:white;border:1px solid hsla(0,0%,0%,0.05);border-radius:3px;transition:",";transition-property:color,background-color;&::before,&::after{content:'';display:block;position:absolute;z-index:-1;top:2rem;bottom:1rem;left:1rem;right:1rem;box-shadow:0 20px 30px hsla(0,0%,0%,0.1);transition:",";transition-property:opacity;}&::after{left:0;right:0;box-shadow:0 20px 40px hsla(0,0%,0%,0.4);opacity:0;}&:hover{color:white;background:var(--color-accent);&::before{opacity:0;}&::after{opacity:1;}}"],"all 0.2s ease-out","all 0.2s ease-out"),s=n.b.header.withConfig({displayName:"PostRecap__Header",componentId:"hwfaf3-3"})(["line-height:normal;"]),d=n.b.div.withConfig({displayName:"PostRecap__Content",componentId:"hwfaf3-4"})(["margin-top:2rem;>:last-child{margin-bottom:0;}"]),g=n.b.h2.withConfig({displayName:"PostRecap__Title",componentId:"hwfaf3-5"})(["margin-bottom:0.5rem;font-size:0.9em;font-weight:500;"]),p=n.b.p.withConfig({displayName:"PostRecap__Date",componentId:"hwfaf3-6"})(["color:hsla(0,0%,0%,0.5);margin-bottom:0;font-size:0.7em;font-weight:500;"]),h=n.b.p.withConfig({displayName:"PostRecap__Excerpt",componentId:"hwfaf3-7"})(["font-size:0.8em;"]),f=n.b.em.withConfig({displayName:"PostRecap__ExcerptQuote",componentId:"hwfaf3-8"})(["opacity:0.75;"]),u=function(){return o.a.createElement("span",{className:"read-more-hint",dangerouslySetInnerHTML:{__html:"→&nbsp;Read&nbsp;More"}})};t.a=function(e){var t=e.url,a=e.title,r=e.date,n=e.excerpt,i=e.excerptQuote,b=e.showReadMoreHintInHeader,x=void 0!==b&&b,w=!n&&!i;return o.a.createElement(l,{to:t},o.a.createElement(c,null,o.a.createElement(m,null,o.a.createElement(s,null,o.a.createElement(g,null,a),o.a.createElement(p,null,r," ",w&&x&&o.a.createElement(u,null))),n&&o.a.createElement(d,null,o.a.createElement(h,{dangerouslySetInnerHTML:{__html:n+' <span class="read-more-hint">→&nbsp;Read&nbsp;More</span>'}})),i&&o.a.createElement(d,null,o.a.createElement(h,null,i.name,":"," ",o.a.createElement(f,null,"“",i.quote,"”")," ",o.a.createElement(u,null))))))}},175:function(e,t,a){"use strict";var r=a(0),o=a.n(r),n=a(148),i=a(147),l=a(172),c=Object(i.a)(["a{color:hsl(var(--hue-accent),70%,10%);padding-top:1px;border-bottom:2px solid var(--color-accent);transition:all 0.175s;text-decoration:none;}a:visited{color:hsl(var(--hue-accent),70%,10%);}a:hover{color:hsl(var(--hue-accent),78%,53%);background:hsl(var(--hue-accent),76%,95%);border-color:hsl(var(--hue-accent),77%,72%);}a:active,a:focus{color:hsl(var(--hue-accent),69%,47%);background:hsl(var(--hue-accent),76%,90%);border-color:hsl(var(--hue-accent),69%,47%);}"]),m=Object(i.a)(["a[href*='pixelnest.io'],a[href*='twitter.com'],a[href*='github.com'],a[href*='dribbble.com'],a[href*='unsplash.com'],a[href*='instagram.com'],a[href*='speakerdeck.com'],a[href*='linkedin.com']{position:relative;margin-left:1.5em;&::before{content:'';display:inline-block;position:absolute;top:0.2em;left:-1.4em;width:1.15em;height:1.15em;margin-right:0.25em;background-repeat:no-repeat;background-size:1.15em;opacity:0.5;transition:opacity 0.175s;}&:hover::before{opacity:1;}}a[href*='pixelnest.io']::before{top:0.1em;background-image:url('/images/site/logo-pixelnest-link.png');}a[href*='twitter.com']::before{background-image:url(\"data:image/svg+xml,%3Csvg width='13' height='11' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11.585 3.24c.005.106.006.213.006.317 0 3.256-2.475 7.007-7.004 7.007A6.947 6.947 0 0 1 .814 9.457c.191.023.388.033.587.033a4.93 4.93 0 0 0 3.057-1.054 2.467 2.467 0 0 1-2.3-1.708 2.474 2.474 0 0 0 1.11-.043A2.464 2.464 0 0 1 1.296 4.27v-.03c.332.183.713.295 1.116.308A2.461 2.461 0 0 1 1.315 2.5c0-.45.121-.875.333-1.239a7 7 0 0 0 5.075 2.575 2.463 2.463 0 0 1 4.195-2.246A4.945 4.945 0 0 0 12.48.99a2.473 2.473 0 0 1-1.082 1.363 4.946 4.946 0 0 0 1.415-.39c-.33.494-.748.93-1.228 1.276z' fill='%234DA4FA' fill-rule='nonzero'/%3E%3C/svg%3E\");}a[href*='github.com']::before{background-image:url(\"data:image/svg+xml,%3Csvg width='13' height='11' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6.52 5.434h-.04c-1.55 0-2.916-.395-3.725.349A2.043 2.043 0 0 0 2.07 7.34c0 2.412 1.931 2.708 4.413 2.708h.038c2.48 0 4.412-.298 4.412-2.708 0-.577-.203-1.114-.686-1.558-.81-.744-2.176-.35-3.726-.35zM4.408 8.729c-.473 0-.855-.531-.855-1.185 0-.653.382-1.182.855-1.182.472 0 .855.529.855 1.182.001.654-.381 1.185-.855 1.185zm4.183 0c-.473 0-.855-.531-.855-1.185 0-.653.382-1.182.855-1.182.472 0 .854.529.854 1.182.002.654-.381 1.185-.854 1.185zm-.95 1.9c-.224 0-.67 0-1.141.003-.471-.003-.917-.003-1.14-.003-.99 0-4.912-.077-4.912-4.803 0-1.086.372-1.882.983-2.546-.096-.24-.102-1.604.417-2.912 0 0 1.192.13 2.996 1.369.376-.105 1.017-.159 1.656-.159.64 0 1.279.054 1.658.158C9.96.497 11.154.367 11.154.367c.518 1.307.514 2.673.416 2.912.611.664.983 1.46.983 2.545 0 4.73-3.923 4.805-4.912 4.805z' fill='%236CC644' fill-rule='nonzero'/%3E%3C/svg%3E\");}a[href*='dribbble.com']::before{background-image:url(\"data:image/svg+xml,%3Csvg width='13' height='13' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6.839 6.477c.043-.016.088-.028.134-.04a19.19 19.19 0 0 0-.364-.761c-2.448.725-4.791.732-5.21.725-.003.033-.003.066-.003.099 0 1.23.443 2.413 1.247 3.341.268-.432 1.69-2.553 4.196-3.364zm-3.434 4.076A5.05 5.05 0 0 0 6.5 11.604c.673 0 1.327-.13 1.945-.384a21.5 21.5 0 0 0-1.07-3.805c-2.762.977-3.805 2.815-3.97 3.138zM9.827 2.63a5.103 5.103 0 0 0-4.434-1.11 26.146 26.146 0 0 1 1.85 2.894C8.914 3.77 9.67 2.845 9.827 2.629zM6.116 4.76a30.799 30.799 0 0 0-1.843-2.852 5.128 5.128 0 0 0-2.75 3.46h.021c.529 0 2.408-.042 4.572-.608zM8.47 7.146c.606 1.683.884 3.082.964 3.53a5.122 5.122 0 0 0 2.095-3.311 7.565 7.565 0 0 0-2.073-.288c-.336 0-.668.023-.986.069zM6.5 12.616A6.123 6.123 0 0 1 .382 6.5 6.124 6.124 0 0 1 6.5.382 6.124 6.124 0 0 1 12.617 6.5 6.123 6.123 0 0 1 6.5 12.616zm1.2-7.322c.114.235.22.465.316.692l.092.221c.36-.043.746-.064 1.149-.064 1.111 0 2.035.163 2.345.224a5.116 5.116 0 0 0-1.11-3.047c-.208.269-1.065 1.254-2.791 1.974z' fill='%23EA4C89' fill-rule='nonzero'/%3E%3C/svg%3E\");}a[href*='unsplash.com']::before{background-image:url(\"data:image/svg+xml,%3Csvg width='13' height='12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.56 4.114v5.644a1.64 1.64 0 0 1-1.628 1.628H2.068c-.909 0-1.629-.72-1.629-1.628V4.076c0-.871.72-1.629 1.63-1.629h1.4l.304-.871c.151-.417.644-.758 1.098-.758H8.13c.454 0 .947.341 1.098.758l.303.909h1.402c.909 0 1.629.72 1.629 1.629zm-3.257 2.84c0-1.552-1.25-2.84-2.84-2.84a2.862 2.862 0 0 0-2.842 2.84c0 1.554 1.25 2.841 2.841 2.841 1.591-.037 2.841-1.287 2.841-2.84zm-.985-.037A1.819 1.819 0 1 1 6.5 5.098c1.023.038 1.818.834 1.818 1.819z' fill='%23EE8B21' fill-rule='evenodd'/%3E%3C/svg%3E\");}a[href*='instagram.com']::before{background-image:url(\"data:image/svg+xml,%3Csvg width='15' height='15' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13.669 11.765a3.328 3.328 0 0 1-1.904 1.904 4.78 4.78 0 0 1-1.58.302c-.695.032-.917.04-2.685.04s-1.99-.008-2.684-.04a4.78 4.78 0 0 1-1.58-.302 3.328 3.328 0 0 1-1.905-1.904 4.78 4.78 0 0 1-.302-1.58C.997 9.49.989 9.267.989 7.5s.008-1.99.04-2.684a4.78 4.78 0 0 1 .302-1.58A3.328 3.328 0 0 1 3.235 1.33a4.78 4.78 0 0 1 1.58-.302C5.51.997 5.733.989 7.5.989s1.99.008 2.684.04a4.78 4.78 0 0 1 1.58.302 3.328 3.328 0 0 1 1.905 1.904c.19.506.291 1.04.302 1.58.032.695.04.917.04 2.685s-.008 1.99-.04 2.684a4.78 4.78 0 0 1-.302 1.58zm-2.33-9.34a3.601 3.601 0 0 0-1.208-.224c-.687-.032-.893-.038-2.631-.038-1.738 0-1.944.006-2.63.038-.414.004-.823.08-1.21.224A2.156 2.156 0 0 0 2.425 3.66c-.144.387-.22.796-.224 1.21-.032.686-.038.892-.038 2.63s.006 1.944.038 2.63c.004.414.08.823.224 1.21a2.156 2.156 0 0 0 1.235 1.235c.387.144.796.22 1.21.224.686.032.892.038 2.63.038s1.944-.006 2.63-.038c.414-.004.823-.08 1.21-.224a2.156 2.156 0 0 0 1.235-1.235c.144-.387.22-.796.224-1.21.032-.686.038-.892.038-2.63s-.006-1.944-.038-2.63a3.601 3.601 0 0 0-.224-1.21 2.156 2.156 0 0 0-1.235-1.235zM4.158 7.5a3.343 3.343 0 1 1 6.686 0 3.343 3.343 0 0 1-6.686 0zm6.818-2.694a.781.781 0 1 1 0-1.563.781.781 0 0 1 0 1.563zM7.5 9.67a2.17 2.17 0 1 0 0-4.34 2.17 2.17 0 0 0 0 4.34z' fill='%23AB62EE' fill-rule='nonzero'/%3E%3C/svg%3E\");}a[href*='speakerdeck.com']::before{background-image:url(\"data:image/svg+xml,%3Csvg width='13' height='11' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2 0h9a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2zm3.5 7l-3-2.5 3-2.5v5zm2 0V3l3 2.5-3 2.5z' fill='%23396' fill-rule='nonzero'/%3E%3C/svg%3E\");}a[href*='linkedin.com']::before{background-image:url(\"data:image/svg+xml,%3Csvg width='11' height='11' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2.444 1.222c0 .672-.427 1.222-1.222 1.222C.49 2.444 0 1.894 0 1.284 0 .61.489 0 1.222 0c.734 0 1.222.55 1.222 1.222zM0 11h2.444V3.056H0V11zm8.311-7.822c-1.283 0-2.017.733-2.322 1.222h-.061l-.122-1.039h-2.2c0 .672.06 1.467.06 2.383V11h2.445V6.661c0-.244 0-.428.061-.611.184-.428.49-.978 1.161-.978.856 0 1.223.734 1.223 1.711V11H11V6.478c0-2.261-1.161-3.3-2.689-3.3z' fill='%230077B5' fill-rule='nonzero'/%3E%3C/svg%3E\");font-size:0.8em;}.twitter-tweet{a[href*='twitter.com']{margin-left:0;&::before{display:none;}}}"]),s=Object(i.a)(["position:absolute;top:-20px;right:20px;color:black;opacity:0.35;font-size:1.15rem;font-weight:500;text-transform:uppercase;"]),d=Object(i.a)(["& >:first-child{margin-top:0;}& >:last-child{margin-bottom:0;}h1,h2,h3,h4,h5,h6{font-weight:normal;line-height:normal;&::before{opacity:0.25;font-size:0.75em;font-weight:300;font-style:normal;}.more{color:#888;margin-left:0.5rem;font-size:0.7em;font-weight:normal;text-transform:none;}}h1{margin-top:6rem;margin-bottom:4rem;font-size:1.3em;font-weight:bold;text-transform:uppercase;&::before{content:'# ';}}h2{margin-top:5rem;margin-bottom:3rem;padding-bottom:0.5rem;border-bottom:2px solid hsla(0,0%,0%,0.1);font-size:1.2em;font-weight:normal;text-transform:uppercase;&::before{content:'## ';}}h3{display:table;margin-top:4rem;margin-bottom:2rem;padding-bottom:0.5rem;border-bottom:1px solid hsla(0,0%,0%,0.15);font-size:1.2em;font-weight:normal;text-transform:none;&::before{content:'### ';}}h4{margin-top:4rem;margin-bottom:2rem;color:hsl(0,0%,20%);font-size:1.1em;font-weight:500;text-transform:none;&::before{content:'#### ';}}h5{margin-top:3rem;margin-bottom:2rem;color:hsl(0,0%,39%);font-size:0.9em;font-weight:500;text-transform:uppercase;&::before{content:'##### ';}}h6{margin-top:3rem;margin-bottom:2rem;color:hsl(0,0%,59%);font-size:0.8em;font-weight:normal;text-transform:uppercase;&::before{content:'###### ';}}img,video{display:block;max-width:100%;margin-left:auto;margin-right:auto;border:1px solid hsla(0,0%,0%,0.1);}",";",";ul{li{position:relative;&::before{content:'';position:absolute;top:0.525em;left:-1.05em;width:5px;height:5px;background:var(--color-accent);border-radius:50%;}}}ol{list-style-type:decimal;li{padding-left:1rem;}}ul,ol{padding-left:4rem;font-size:0.9em;@media (max-width:600px){padding-left:3rem;}}li{margin-bottom:1rem;}figure{margin-top:0;margin-left:-1rem;margin-right:-1rem;margin-bottom:2rem;padding-top:0;padding-bottom:1rem;background:#f6f6f6;border-radius:","px;img,video{margin-bottom:1rem;border:none;}@media (max-width:","px){margin-left:-2rem;margin-right:-2rem;background:#f1f1f1;}}figcaption{color:#666;padding:0 2rem;font-family:",";font-size:0.8em;text-align:center;}.gatsby-highlight{position:relative;@media (max-width:","px){margin-left:-2rem;margin-right:-2rem;}&::before{content:'Code';",";}}.gatsby-highlight pre{margin:0;margin-bottom:2rem;padding:1.5rem 2.5rem;border-radius:","px;code{white-space:pre-wrap;}@media (max-width:","px){border-radius:0;}}code{font-size:0.75em;}p code,li code{color:var(--color-accent);margin-left:2px;margin-right:2px;padding-top:4px;padding-bottom:3px;padding-left:6px;padding-right:6px;background:hsla(0,0%,0%,0.09);font-weight:bold;}blockquote{position:relative;color:hsl(0,0%,20%);margin:0;margin-bottom:2rem;padding:2rem calc(2.5rem - 1px);background:#f1f1f1;border-radius:","px;border:1px solid hsl(0,0%,88%);font-size:0.85em;line-height:1.45;@media (max-width:","px){margin-left:-2rem;margin-right:-2rem;border:none;border-radius:0;background:#eaeaea;}&::before{content:'Quote';",";}}blockquote >:last-child{margin-bottom:0;}.twitter-tweet{background:hsl(var(--hue-twitter),93%,95%);border:1px solid hsl(var(--hue-twitter),91%,91%);&::before{content:'Tweet';color:var(--color-twitter);opacity:0.55;}}.tldr{background:hsl(var(--hue-tldr),80%,94%);border:1px solid hsl(var(--hue-tldr),80%,90%);&::before{content:'tl;dr';color:var(--color-tldr);opacity:0.9;}}hr{color:hsla(var(--hue-accent),78%,53%,0.2);max-width:80%;height:1px;margin:5rem 0 6rem;margin-left:auto;margin-right:auto;background:linear-gradient( to right,var(--color-page-background),hsl(0,0%,88%),var(--color-page-background) );border:none;}iframe{display:block;max-width:100%;margin-left:auto;margin-right:auto;margin-bottom:2rem;}a.footnote-ref{box-sizing:content-box;color:white;margin-left:2px;padding-left:5px;padding-right:5px;background:var(--color-accent);border:1px solid transparent;border-radius:3px;font-size:1.2rem;&:hover{color:var(--color-accent);background:#eee;border:1px solid var(--color-accent);}}.footnotes{position:relative;margin-top:10rem;padding:2rem 0;background:#eee;border-radius:","px;font-size:0.85em;&::before{content:'Footnotes';",";}hr{display:none;}ol{margin-bottom:0;padding-left:0;list-style:none;}li{position:relative;margin-bottom:2rem;padding:0 2rem 0;border-bottom:1px solid hsla(0,0%,0%,0.1);&:last-of-type{margin-bottom:-2rem;padding-bottom:0;border:none;}&:target{font-weight:500;}blockquote{margin-left:0;margin-right:0;padding:1.5rem;background:#ddd;border:none;}.footnote-backref{position:absolute;top:0;right:-11px;margin-left:2rem;padding:6px 6px 3px;background:hsl(var(--hue-accent),77%,81%);border-bottom:none;border-radius:","px;font-size:0.9em;line-height:normal;&:hover{color:white;background:var(--color-accent);}}}}"],c,m,5,700,l.a.code.fontStack,700,s,5,700,5,700,s,5,s,5),g=a(154),p=i.b.div.withConfig({displayName:"Post__Wrapper",componentId:"rn1cpw-0"})(["position:relative;z-index:1;"]),h=i.b.article.withConfig({displayName:"Post__Article",componentId:"rn1cpw-1"})(["padding:5rem;background:white;border:1px solid hsla(0,0%,0%,0.05);border-radius:3px;&::before{content:'';display:block;position:absolute;z-index:-1;top:2rem;bottom:1rem;left:1rem;right:1rem;box-shadow:0 20px 30px hsla(0,0%,0%,0.1);}@media (max-width:900px){padding:4rem;}@media (max-width:700px){padding:4rem 2rem;font-size:0.9em;}"]),f=i.b.header.withConfig({displayName:"Post__Header",componentId:"rn1cpw-2"})(["margin-bottom:6rem;text-align:center;line-height:normal;"]),u=i.b.h1.withConfig({displayName:"Post__Title",componentId:"rn1cpw-3"})(["margin-bottom:0.5rem;font-size:1.7em;font-weight:500;text-transform:capitalize;",";"],g.a),b=i.b.h2.withConfig({displayName:"Post__Subtitle",componentId:"rn1cpw-4"})(["margin-bottom:0;color:#aaa;font-size:0.8em;font-weight:normal;"]),x=i.b.div.withConfig({displayName:"Post__Content",componentId:"rn1cpw-5"})(["",";"],d),w=i.b.footer.withConfig({displayName:"Post__Footer",componentId:"rn1cpw-6"})(["padding-top:5rem;>:last-child{margin-bottom:0;}"]),v=i.b.p.withConfig({displayName:"Post__Date",componentId:"rn1cpw-7"})(["color:#aaa;font-size:0.75em;text-align:center;",";"],g.a);t.a=function(e){var t=e.url,a=e.title,r=e.date,i=e.content;return o.a.createElement(p,null,o.a.createElement(h,null,a&&o.a.createElement(f,null,o.a.createElement(u,null,o.a.createElement(n.Link,{to:t},a)),o.a.createElement(b,null,r)),o.a.createElement(x,{dangerouslySetInnerHTML:{__html:i}}),o.a.createElement(w,null,o.a.createElement(v,null,o.a.createElement(n.Link,{to:t},r)))))}}}]);
//# sourceMappingURL=component---src-components-templates-pagination-template-js-90a430ca17fcde69ea80.js.map