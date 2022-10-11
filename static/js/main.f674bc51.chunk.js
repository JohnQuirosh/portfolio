(this.webpackJsonpporfolio=this.webpackJsonpporfolio||[]).push([[0],{28:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},44:function(e,t,c){"use strict";c.r(t);var n=c(9),s=c(3),i=c(1),a=c(0),l=Object(i.createContext)(),r=function(e){var t=e.children,c=Object(i.useState)("light"),n=Object(s.a)(c,2),r=n[0],o=n[1];Object(i.useEffect)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)");o(e.matches?"dark":"light"),e.addEventListener("change",(function(e){o(e.matches?"dark":"light")}))}),[]);return Object(a.jsx)(l.Provider,{value:[{themeName:r,toggleTheme:function(){var e="dark"===r?"light":"dark";localStorage.setItem("themeName",e),o(e)}}],children:t})},o="https://johnquiros.xyz",j="JQ.",h="John Quiros",u="Web Developer",b="Im a coding enthusiast. I love simple things so I design and code nice and simple things. I love what I do. I am looking for a challenging job where I can continue my studies while I can share my experience and knowledge with my colleagues.",d="https://www.linkedin.com/in/johnquiros/",m={linkedin:"https://www.linkedin.com/in/johnquiros/",github:"https://github.com/JohnQuirosh"},O=[{name:"Jungle Life",description:"An E-commerce was developed for the sale and information of tours.",stack:["React","PHP","Wordpress"],sourceCode:"https://github.com/JohnQuirosh",livePreview:"https://junglelifecr.com/"},{name:"Jazis Natural",description:"A site designed for the sale of body creams in general. It was made with bright colors to attract people attention.",stack:["React","PHP","Wordpress"],sourceCode:"https://github.com/JohnQuirosh",livePreview:"https://www.jazisnatural.com/"},{name:"Amusement Park",description:"A website built with Wordpress. We created plugins with APIS to integrate Wocommerce in a site created by the Amusement Park company.",stack:["PHP","Laravel","Javascript","Jquery"],sourceCode:"https://github.com/JohnQuirosh",livePreview:"https://boleteria.parquediversiones.com/"}],x=["HTML","CSS","JavaScript","TypeScript","React","Vuejs","SASS","Material UI","Git","PHP","Laravel","Angular"],p="johnquirosh@gmail.com",f=c(16),v=c.n(f),k=c(14),g=c.n(k),N=c(18),_=c.n(N),w=c(17),P=c.n(w),y=(c(28),function(){var e=Object(i.useContext)(l),t=Object(s.a)(e,1)[0],c=t.themeName,n=t.toggleTheme,r=Object(i.useState)(!1),o=Object(s.a)(r,2),j=o[0],h=o[1],u=function(){return h(!j)};return Object(a.jsxs)("nav",{className:"center nav",children:[Object(a.jsxs)("ul",{style:{display:j?"flex":null},className:"nav__list",children:[O.length?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#projects",onClick:u,className:"link link--nav",children:"Projects"})}):null,x.length?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#skills",onClick:u,className:"link link--nav",children:"Skills"})}):null,p?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#contact",onClick:u,className:"link link--nav",children:"Contact"})}):null]}),Object(a.jsx)("button",{type:"button",onClick:n,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===c?Object(a.jsx)(g.a,{}):Object(a.jsx)(v.a,{})}),Object(a.jsx)("button",{type:"button",onClick:u,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:j?Object(a.jsx)(P.a,{}):Object(a.jsx)(_.a,{})})]})}),C=(c(32),function(){var e=o,t=j;return Object(a.jsxs)("header",{className:"header center",children:[Object(a.jsx)("h3",{children:e?Object(a.jsx)("a",{href:e,className:"link",children:t}):t}),Object(a.jsx)(y,{})]})}),S=c(11),I=c.n(S),J=c(19),A=c.n(J),E=(c(33),function(){var e=h,t=u,c=b,n=d,s=m;return Object(a.jsxs)("div",{className:"about center",children:[e&&Object(a.jsxs)("h1",{children:["Hi, I am ",Object(a.jsxs)("span",{className:"about__name",children:[e,"."]})]}),t&&Object(a.jsxs)("h2",{className:"about__role",children:["A ",t,"."]}),Object(a.jsx)("p",{className:"about__desc",children:c&&c}),Object(a.jsxs)("div",{className:"about__contact center",children:[n&&Object(a.jsx)("a",{href:n,children:Object(a.jsx)("span",{type:"button",className:"button-ui",children:"Resume"})}),s&&Object(a.jsxs)(a.Fragment,{children:[s.github&&Object(a.jsx)("a",{href:s.github,"aria-label":"github",className:"link link--icon",children:Object(a.jsx)(I.a,{})}),s.linkedin&&Object(a.jsx)("a",{href:s.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(a.jsx)(A.a,{})})]})]})]})}),q=c(7),H=c.n(q),L=c(20),Q=c.n(L),W=(c(35),function(e){var t=e.project;return Object(a.jsxs)("div",{className:"project",children:[Object(a.jsx)("h3",{children:t.name}),Object(a.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(a.jsx)("ul",{className:"project__stack",children:t.stack.map((function(e){return Object(a.jsx)("li",{className:"project__stack-item",children:e},H()())}))}),t.sourceCode&&Object(a.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(a.jsx)(I.a,{})}),t.livePreview&&Object(a.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(a.jsx)(Q.a,{})})]})}),z=(c(36),function(){return O.length?Object(a.jsxs)("section",{id:"projects",className:"section projects",children:[Object(a.jsx)("h2",{className:"section__title",children:"Projects"}),Object(a.jsx)("div",{className:"projects__grid",children:O.map((function(e){return Object(a.jsx)(W,{project:e},H()())}))})]}):null}),R=(c(37),function(){return x.length?Object(a.jsxs)("section",{className:"section skills",id:"skills",children:[Object(a.jsx)("h2",{className:"section__title",children:"Skills"}),Object(a.jsx)("ul",{className:"skills__list",children:x.map((function(e){return Object(a.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},H()())}))})]}):null}),T=c(21),M=c.n(T),B=(c(38),function(){var e=Object(i.useState)(!1),t=Object(s.a)(e,2),c=t[0],n=t[1];return Object(i.useEffect)((function(){var e=function(){return window.pageYOffset>500?n(!0):n(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),c?Object(a.jsx)("div",{className:"scroll-top",children:Object(a.jsx)("a",{href:"#top",children:Object(a.jsx)(M.a,{fontSize:"large"})})}):null}),D=(c(39),function(){return p?Object(a.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(a.jsx)("h2",{className:"section__title",children:"Contact"}),Object(a.jsx)("a",{href:"mailto:".concat(p),children:Object(a.jsx)("span",{type:"button",className:"button-ui",children:"Email me"})}),Object(a.jsx)("h1",{children:"Hola"})]}):null}),F=(c(40),function(){return Object(a.jsx)("footer",{className:"footer",children:Object(a.jsx)("a",{href:"https://johnquiros.xyz",className:"link footer__link",children:"John Quiros @2022"})})}),G=(c(41),function(){var e=Object(i.useContext)(l),t=Object(s.a)(e,1)[0].themeName;return Object(a.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(a.jsx)(C,{}),Object(a.jsxs)("main",{children:[Object(a.jsx)(E,{}),Object(a.jsx)(z,{}),Object(a.jsx)(R,{}),Object(a.jsx)(D,{})]}),Object(a.jsx)(B,{}),Object(a.jsx)(F,{})]})});c(42);Object(n.render)(Object(a.jsx)(r,{children:Object(a.jsx)(G,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.f674bc51.chunk.js.map