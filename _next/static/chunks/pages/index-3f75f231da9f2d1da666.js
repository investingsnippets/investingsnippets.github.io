_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{"13+B":function(e,t,a){"use strict";a.d(t,"a",(function(){return f}));var n=a("wx14"),l=a("q1tI"),i=a.n(l),o=a("IF/j"),r=a("YFqc"),s=a.n(r),c=a("xY5u"),u=i.a.createElement;function m(e){var t=e.title,a=e.description,n=e.img,l=e.author,i=e.date,r=e.tags,m=e.topic,d=e.slug,g=Object(o.c)().siteUrl;return u("article",{className:"rounded w-full lg:flex mb-10",key:d},u("div",{className:"h-48 lg:w-48 flex-none bg-cover overflow-hidden opacity-75",style:{backgroundImage:"url('".concat(n,"')")},title:"".concat(t)},u("div",{className:"relative -bottom-4/5 z-20"},u(s.a,{href:"/topic/[slug]",as:"/topic/".concat(m.id)},u("a",{className:"ml-2 px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center"},m.name)))),u("div",{className:"bg-white rounded px-4 flex flex-col justify-between leading-normal w-full"},u("div",null,u("header",{className:"mt-3 md:mt-0 text-gray-700 font-bold text-2xl mb-2"},u(s.a,{href:"/post/[slug]",as:"/post/".concat(d)},u("a",{className:"text-2xl lg:text-3xl font-bold font-display"},t))),u("section",null,u("p",{className:"text-gray-700 text-base"},a))),u("div",{className:"flex mt-3 flex-row"},u(c.a,{alt:"".concat(l.name),src:"".concat(l.image),previewSrc:"".concat(l.image),className:"h-10 w-10 rounded-full mr-2 object-cover"}),u("div",null,u("p",{className:"font-semibold text-gray-700 text-sm capitalize"}," ",l.name," "),u("p",{className:"text-gray-600 text-xs"}," ",i," ")),u("div",{className:"ml-10 mr-3 lg:flex flex-row"},r.map((function(e){var t=e.id,a=e.icon,n=e.name;return u("div",{className:"bg-gray-200 pr-1 text-sm mr-2 my-3 flex justify-items-center",key:t},u(s.a,{href:"/tag/[tag]",as:"/tag/".concat(t),key:t},u("a",{className:"text-gray-600",key:t},u("img",{className:"filter-orange-700 h-4 w-4 m-1 inline-block",alt:"".concat(n),src:"".concat(g,"/static/").concat(a),"data-srcset":"".concat(g,"/static/").concat(a)}),n)))}))))))}var d=a("nOHt"),g=i.a.createElement;function f(e){var t=e.children,a=e.total,l=Object(d.useRouter)(),i=l.query,r="";l.pathname.includes("slug")&&(r=l.pathname.replace(/\[slug\]/g,i.slug));var c=Object.prototype.hasOwnProperty.call(i,"page")?parseInt(i.page,10):1,u=Object(o.c)().paginationLimit,f=Math.ceil(a/u),x=1===c?1:c-1,b=c===f?c:c+1,p=(c-1)*u,v=c*u;return g("content",null,g("div",null,t.slice(p,v).map((function(e){var t=e.frontmatter,a=e.slug;return g(m,Object(n.a)({},t,{slug:a,key:a}))}))),f>1&&g("div",{className:"bg-white px-4 py-3 flex items-center justify-between sm:px-6"},g("div",{className:"flex-1 flex justify-between sm:hidden"},g(s.a,{href:"".concat(r,"/?page=").concat(x)},g("a",{className:"".concat(1!==c?"visible":"invisible"," relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150")},"Previous")),g(s.a,{href:"".concat(r,"/?page=").concat(b)},g("a",{className:"".concat(c!==f?"visible":"invisible"," ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150")},"Next"))),g("div",{className:"hidden sm:flex-1 sm:flex sm:items-center sm:justify-between"},g("div",null,g("p",{className:"text-sm leading-5 text-gray-700"},"Showing",g("span",{className:"font-medium mx-1"},p),"to",g("span",{className:"font-medium mx-1"},v),"of",g("span",{className:"font-medium mx-1"},a),"results")),g("div",null,g("nav",{className:"relative z-0 inline-flex"},g(s.a,{href:"".concat(r,"/?page=").concat(x)},g("a",{className:"".concat(1!==c?"visible":"invisible",' relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150" aria-label="Previous')},g("svg",{className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor"},g("path",{fillRule:"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",clipRule:"evenodd"})))),Array(f).fill().map((function(e,t){return g(s.a,{href:"".concat(r,"/?page=").concat(t+1),key:t+1},g("a",{className:"-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 ".concat(t+1===c?"bg-orange-600":"bg-white"," text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150")},t+1))})),g(s.a,{href:"".concat(r,"/?page=").concat(b)},g("a",{className:"".concat(c!==f?"visible":"invisible",' -ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150" aria-label="Next')},g("svg",{className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor"},g("path",{fillRule:"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",clipRule:"evenodd"})))))))))}},RNiq:function(e,t,a){"use strict";a.r(t),a.d(t,"__N_SSG",(function(){return c})),a.d(t,"default",(function(){return u}));var n=a("q1tI"),l=a.n(n),i=a("5Yp1"),o=a("jdeN"),r=a("13+B"),s=l.a.createElement,c=!0;function u(e){var t=e.posts,a=e.tags,n=e.sortedTopics,l=e.allTopics;return s(i.a,{tags:a,sortedTopics:n,allTopics:l},s(o.a,null),s(r.a,{total:t.length},t))}},vlRD:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a("RNiq")}])}},[["vlRD",1,2,6,5,0,3,4]]]);