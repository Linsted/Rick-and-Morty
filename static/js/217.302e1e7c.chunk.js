"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[217],{3025:function(n,e,t){t.d(e,{D:function(){return s},E:function(){return c}});var r=t(5861),i=t(4687),a=t.n(i),o=t(1243),c=function(){var n=(0,r.Z)(a().mark((function n(){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o.Z.defaults.baseURL="https://rickandmortyapi.com/api/character/",n.next=3,o.Z.get("",{});case 3:return e=n.sent,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(a().mark((function n(e,t){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o.Z.defaults.baseURL="https://rickandmortyapi.com/api/character/",n.next=3,o.Z.get("".concat(e),{signal:t.signal});case 3:return r=n.sent,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()},3217:function(n,e,t){t.r(e),t.d(e,{default:function(){return X}});var r,i,a,o,c,s,p,u,x,d,l,f,m=t(3433),h=t(5861),g=t(9439),b=t(4687),w=t.n(b),Z=t(2791),j=t(3025),v=t(9014),y=t(168),k=t(7402),_=t(1087),z=k.Z.li(r||(r=(0,y.Z)(["\ndisplay: flex;\nflex-direction: column;\ncolor: black;\ntext-decoration: none;\nmax-width: 312px;\n\nborder-radius: 4px;\nmargin-inline: auto;\nbox-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.14);\ntransition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);\n\n:hover, :focus-within {\n    transform: scale(1.1);\n}\n\n\n@media(min-width: 361px){\n        \n    \n    max-width: 240px;\n    \n    }\n"]))),C=k.Z.img(i||(i=(0,y.Z)(["\nmargin-inline: auto;\nwidth: 312px;\nheight: 232px;\nborder-top-left-radius: 4px;\nborder-top-right-radius: 4px;\n\n@media(min-width: 361px){\n        \n    \n    width: 240px;\n    height: 168px;\n    \n    }\n"]))),E=(0,k.Z)(_.rU)(a||(a=(0,y.Z)(["\ncolor: #000000;\ntext-decoration: none;\nborder-radius: 4px;\n\n"]))),S=k.Z.div(o||(o=(0,y.Z)(["\npadding: 12px 16px;\n\n"]))),H=k.Z.h2(c||(c=(0,y.Z)(["\nfont-weight: 500;\nfont-size: 20px;\nline-height: 1.5;\nletter-spacing: 0.15px;\ncolor: rgba(0, 0, 0, 0.87);\nmargin-bottom: 1px;\n\n"]))),R=k.Z.p(s||(s=(0,y.Z)(["\nfont-weight: 400;\nfont-size: 14px;\nline-height: 1.5;\nletter-spacing: 0.25px;\ncolor: rgba(0, 0, 0, 0.6);\n\n"]))),F=t(7689),L=t(184),U=function(n){var e=n.characters,t=(0,F.TH)();return e.length>0&&e.map((function(n){return(0,L.jsx)(z,{children:(0,L.jsxs)(E,{to:"/characters/".concat(n.id),state:{from:t},children:[(0,L.jsx)(C,{src:n.image,alt:n.name}),(0,L.jsxs)(S,{children:[(0,L.jsx)(H,{children:n.name}),(0,L.jsx)(R,{children:n.species})]})]})},n.id)}))},q=k.Z.ul(p||(p=(0,y.Z)(["\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n\n    @media(min-width: 1020px){\n        margin-inline: auto;\n    max-width: 1020px;\n    \n    }\n    \n\n    @media(max-width: 360px){\n        \n    flex-direction: column;\n    gap: 32px;\n    \n    }\n\n    @media(min-width: 1020px){\n        \n    \n    gap: 20px;\n    \n    }\n\n"]))),B=function(n){var e=n.characters;return(0,L.jsx)(q,{children:(0,L.jsx)(U,{characters:e})})},D=t(1532),M=k.Z.div(u||(u=(0,y.Z)(["\n    display: flex;\n    justify-content: center;\n"]))),P=function(){return(0,L.jsx)(M,{children:(0,L.jsx)("img",{src:D,alt:"Error"})})},T=t(2134),A=k.Z.div(x||(x=(0,y.Z)(["\n     display: flex; \n     justify-content: center; \n    position: relative;\n    margin-bottom: 32px;\n    margin-inline: auto;\n    max-width: 312px;\n    \n\n      @media(min-width: 1020px){\n        \n            max-width: 1020px;\n            margin-bottom: 61px;\n            \n    \n    \n    }\n\n"]))),G=k.Z.input(d||(d=(0,y.Z)(["\n    box-sizing: border-box;\n    width: 312px;\n    height: 56px;\n    padding: 0px;\n    border: 1px solid rgba(0, 0, 0, 0.5);\n    border-radius: 8px;\n    outline: none;\n    padding-left: 48px;\n    transition: border 1000ms cubic-bezier(0.4, 0, 0.2, 1);\n\n        @media(min-width: 1020px){\n        \n            width: 1020px;\n    \n    \n    }\n\n    :hover, :focus {\n        border: 1.5px solid rgb(0, 179, 196);\n    }\n\n    ::placeholder{\n        font-family: 'Roboto';\n\nfont-weight: 400;\nfont-size: 16px;\nline-height: 1.5;\ncolor: rgba(0, 0, 0, 0.5);\n    };\n\n    \n\n"]))),I=(0,k.Z)(T.RB5)(l||(l=(0,y.Z)(["\n    position: absolute;\n    top: 14px;\n    left: 20px;\n    color: rgba(0, 0, 0, 0.54);\n    width: 22px;\n    height: 22px;\n"]))),J=function(n){var e=n.onFilter,t=n.filter;return(0,L.jsxs)(A,{children:[(0,L.jsx)(I,{}),(0,L.jsx)(G,{type:"text",name:"filter",onChange:e,value:t,placeholder:"Filter by name..."})]})},K=t(5222),N=t(9272),O=t(2649),Q=t(2100),V=k.Z.header(f||(f=(0,y.Z)(["\n    display: flex;\n    justify-content: center;\n    margin-bottom: 32px;\n\n    @media(min-width: 361px){\n      margin-bottom: 16px;  \n    \n    gap: 24px;\n    \n    }\n"]))),W=function(){return(0,L.jsx)(V,{children:(0,L.jsxs)("picture",{children:[(0,L.jsx)("source",{srcSet:"".concat(O," 600w, ").concat(Q," 1200w"),media:"(min-width: 361px)",sizes:"(min-width: 600px) 600px",type:"image/jpeg"}),(0,L.jsx)("source",{srcSet:"".concat(K," 312w, ").concat(N," 624w"),media:"(min-width: 360px)",sizes:"(min-width: 360px) 312px",type:"image/jpeg"}),(0,L.jsx)("img",{src:O,alt:"Rick and Morty poster"})]})})},X=function(){var n=(0,_.lr)(),e=(0,g.Z)(n,2),t=e[0],r=e[1],i=null===t.get("query")?"":t.get("query"),a=(0,Z.useState)([]),o=(0,g.Z)(a,2),c=o[0],s=o[1],p=(0,Z.useState)(!1),u=(0,g.Z)(p,2),x=u[0],d=u[1],l=(0,Z.useState)([]),f=(0,g.Z)(l,2),b=f[0],y=f[1],k=(0,Z.useState)(!1),z=(0,g.Z)(k,2),C=z[0],E=z[1];(0,Z.useEffect)((function(){d(!1);var n=function(){var n=(0,h.Z)(w().mark((function n(){var e,t;return w().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,j.E();case 3:t=n.sent,(e=(0,m.Z)(t.data.results)).sort((function(n,e){return n.name.localeCompare(e.name)})),n.next=12;break;case 8:return n.prev=8,n.t0=n.catch(0),console.log(n.t0),n.abrupt("return",v.ZP.error("Sorry, an error occurred!"));case 12:e.sort((function(n,e){return n.name.localeCompare(e.name)})),s(e);case 15:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,Z.useEffect)((function(){var n=i.trim().toLowerCase();y(c.filter((function(e){return e.name.toLowerCase().includes(n)})))}),[c,i]),(0,Z.useEffect)((function(){return C&&0!==i.length&&0===b.length&&d(!0),function(){d(!1),E(!0)}}),[i,b,C]);return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)(_.rU,{to:"/",children:[" ",(0,L.jsx)(W,{})]}),(0,L.jsx)(J,{onFilter:function(n){return r({query:n.target.value})},filter:i}),x&&(0,L.jsx)(P,{}),(0,L.jsx)(B,{characters:b}),(0,L.jsx)(v.x7,{})]})}},1532:function(n,e,t){n.exports=t.p+"static/media/Error.8754640b1d7343240fcb.jpg"},2649:function(n,e,t){n.exports=t.p+"static/media/Header_img_desktop.e1bd8c6f0caac12faa98.jpg"},2100:function(n,e,t){n.exports=t.p+"static/media/Header_img_desktop@2x.8509243835e49f1e4e05.jpg"},5222:function(n,e,t){n.exports=t.p+"static/media/Header_img_mobile.68569f5ed1ed6e054cf8.jpg"},9272:function(n,e,t){n.exports=t.p+"static/media/Header_img_mobile@2x.d8f63e8850adfbde4af8.jpg"}}]);
//# sourceMappingURL=217.302e1e7c.chunk.js.map