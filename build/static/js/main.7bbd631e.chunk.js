(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{22:function(e,n,t){},42:function(e,n,t){"use strict";t.r(n);var o=t(1),c=t.n(o),r=t(17),u=t.n(r),a=(t(22),t(3)),i=t(0),s=function(e){var n=e.searchText,t=e.onChange;return Object(i.jsxs)("div",{children:["filter shown with: ",Object(i.jsx)("input",{value:n,onChange:t})]})},d=function(e){var n=e.newName,t=e.newNumber,o=e.onNameChange,c=e.onNumberChange,r=e.onSubmit;return Object(i.jsx)("div",{children:Object(i.jsxs)("form",{onSubmit:r,children:[Object(i.jsxs)("div",{children:["name: ",Object(i.jsx)("input",{value:n,onChange:o})]}),Object(i.jsxs)("div",{children:["number: ",Object(i.jsx)("input",{value:t,onChange:c})]}),Object(i.jsx)("div",{children:Object(i.jsx)("button",{type:"submit",children:"add"})})]})})},l=function(e){var n=e.personsToShow,t=e.deleteHandler;return Object(i.jsx)("div",{children:n.map((function(e){return Object(i.jsxs)("p",{children:[e.name," ",e.number,Object(i.jsx)("button",{onClick:function(){return t(e.id)},children:"delete"})]},e.id)}))})},b=t(8),j=t(4),f=t.n(j),h="/api/persons",m={getAll:function(){return f.a.get(h).then((function(e){return e.data}))},create:function(e){return f.a.post(h,e).then((function(e){return e.data}))},deletePerson:function(e){return f.a.delete("".concat(h,"/").concat(e)).then((function(e){return e.data}))},updateNumber:function(e,n,t){var o=Object(b.a)(Object(b.a)({},e),{},{number:t});return f.a.put("".concat(h,"/").concat(n),o).then((function(e){return e.data}))}},O=function(e){var n=e.message,t={color:"green",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10};return null===n?null:(n.startsWith("Information")&&(t.color="red"),Object(i.jsx)("div",{style:t,children:n}))},g=function(){var e=Object(o.useState)([]),n=Object(a.a)(e,2),t=n[0],c=n[1];Object(o.useEffect)((function(){m.getAll().then((function(e){c(e)}))}),[]);var r=Object(o.useState)(""),u=Object(a.a)(r,2),b=u[0],j=u[1],f=Object(o.useState)(""),h=Object(a.a)(f,2),g=h[0],p=h[1],v=Object(o.useState)(""),x=Object(a.a)(v,2),w=x[0],C=x[1],S=Object(o.useState)(null),N=Object(a.a)(S,2),T=N[0],k=N[1],y=t.filter((function(e){return e.name.toLowerCase().includes(w.toLowerCase())}));return Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"Phonebook"}),Object(i.jsx)(O,{message:T}),Object(i.jsx)(s,{value:w,onChange:function(e){C(e.target.value)}}),Object(i.jsx)("h3",{children:"Add a new"}),Object(i.jsx)(d,{newName:b,newNumber:g,onNameChange:function(e){j(e.target.value)},onNumberChange:function(e){p(e.target.value)},onSubmit:function(e){if(e.preventDefault(),t.some((function(e){return e.name===b}))){if(window.confirm("".concat(b," is already added to phonebook, replace the old number with a new one?"))){var n=t.find((function(e){return e.name===b}));!function(e,n){m.updateNumber(e,n,g).then((function(e){c(t.map((function(t){return t.id!==n?t:e}))),j(""),p(""),k("Changed ".concat(e.name,"'s number")),setTimeout((function(){k(null)}),5e3)})).catch((function(e){k(e.response.data.error),setTimeout((function(){k(null)}),5e3),console.log(e.response.data.error)}))}(n,n.id)}}else{var o={name:b,number:g};m.create(o).then((function(e){c(t.concat(e)),j(""),p(""),k("Added ".concat(e.name)),setTimeout((function(){k(null)}),5e3)})).catch((function(e){k(e.response.data.error),setTimeout((function(){k(null)}),5e3),console.log(e)}))}}}),Object(i.jsx)("h3",{children:"Numbers"}),Object(i.jsx)(l,{personsToShow:y,deleteHandler:function(e){var n=t.find((function(n){return n.id===e}));window.confirm("Delete ".concat(n.name," ?"))&&m.deletePerson(e).then((function(n){c(t.filter((function(n){return n.id!==e})))}))}})]})},p=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,43)).then((function(n){var t=n.getCLS,o=n.getFID,c=n.getFCP,r=n.getLCP,u=n.getTTFB;t(e),o(e),c(e),r(e),u(e)}))};u.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(g,{})}),document.getElementById("root")),p()}},[[42,1,2]]]);
//# sourceMappingURL=main.7bbd631e.chunk.js.map