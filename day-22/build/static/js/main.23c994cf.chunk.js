(this["webpackJsonpday-22"]=this["webpackJsonpday-22"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(8),s=n.n(r),i=(n(14),n(15),n(3)),o=n.n(i),j=n(5),u=n(2),m=n(0),b=function(e){return Object(m.jsxs)("div",{className:"memeCard",onClick:function(){e.setEdit(!0),e.setEditMeme(e.template)},children:[Object(m.jsx)("img",{src:e.template.url,alt:"",srcSet:""}),Object(m.jsx)("p",{children:e.template.name})]})},d=n(9),l=function(e){var t=Object(c.useState)([]),n=Object(u.a)(t,2),a=n[0],r=n[1],s=Object(c.useState)(!1),i=Object(u.a)(s,2),b=i[0],l=i[1],p=Object(c.useState)(""),O=Object(u.a)(p,2),x=O[0],h=O[1];console.log(e.meme);var f=function(){var t=Object(j.a)(o.a.mark((function t(){var n,c,r,s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(n="https://api.imgflip.com/caption_image?template_id=".concat(e.meme.id,"&username=").concat("prash2002","&password=").concat("prash*2002"),c=0;c<e.meme.box_count;c++)void 0===a[c]&&(a[c]={text:"Caption ".concat(c+1)}),n+="&boxes[".concat(c,"][text]=").concat(a[c].text);return t.next=5,fetch(n);case 5:return r=t.sent,t.next=8,r.json();case 8:s=t.sent,console.log(s),h(s.data.url),l(!0);case 12:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(m.jsxs)("div",{className:"editMeme",children:[Object(m.jsx)("p",{children:e.meme.name}),b?Object(m.jsx)("div",{children:Object(m.jsx)("img",{src:x})}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("img",{src:e.meme.url}),Object(m.jsx)("div",{className:"input",children:Object(d.a)(Array(e.meme.box_count)).map((function(e,t){return Object(m.jsx)("input",{placeholder:"Caption ".concat(t+1),onChange:function(e){a[t]={text:e.target.value},r(a)}},t)}))}),Object(m.jsx)("button",{onClick:f,children:"Generate Meme"})]}),Object(m.jsx)("button",{onClick:function(){e.setEdit(!1)},children:"Choose Template"})]})},p=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(!1),s=Object(u.a)(r,2),i=s[0],d=s[1],p=Object(c.useState)(),O=Object(u.a)(p,2),x=O[0],h=O[1];return Object(c.useEffect)((function(){(function(){var e=Object(j.a)(o.a.mark((function e(){var t,n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.imgflip.com/get_memes");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.next=8,n.data.memes;case 8:c=e.sent,a(c);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(m.jsx)(m.Fragment,{children:i?Object(m.jsx)(l,{meme:x,setEdit:d}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h1",{children:"Meme Generator"}),Object(m.jsx)("div",{className:"memes",children:n.map((function(e){return Object(m.jsx)(b,{template:e,setEdit:d,setEditMeme:h},e.id)}))})]})})};var O=function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(p,{})})};s.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(O,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.23c994cf.chunk.js.map