(this["webpackJsonptodo-list-react"]=this["webpackJsonptodo-list-react"]||[]).push([[0],{17:function(n,e,t){n.exports=t(29)},29:function(n,e,t){"use strict";t.r(e);var r=t(0),o=t.n(r),a=t(8),c=t.n(a),i=t(4),u=t(16),l=t(6),d=Object(l.b)({name:"tasks",initialState:{tasks:[],hideDone:!1},reducers:{addTask:function(n,e){var t=n.tasks,r=e.payload;t.push(r)},toggleHideDone:function(n,e){n.hideDone=!n.hideDone},toggleTaskDone:function(n,e){var t=n.tasks,r=e.payload,o=t.findIndex((function(n){return n.id===r}));t[o].done=!t[o].done},removeTask:function(n,e){var t=n.tasks,r=e.payload,o=t.findIndex((function(n){return n.id===r}));t.splice(o,1)},setAllDone:function(n){n.tasks.forEach((function(n){n.done=!0}))}}}),s=d.actions,f=s.addTask,m=s.toggleHideDone,b=s.toggleTaskDone,p=s.removeTask,h=s.setAllDone,v=function(n){return n.tasks},g=d.reducer,x=t(1),k=t(2);function j(){var n=Object(x.a)(["\n  padding: 10px;\n  background-color: hsl(180, 100%, 25%);\n  color: hsl(179, 58%, 88%);\n  font-weight: 300;\n  border: none;\n  transition: background-color 1s, transform 0.3s;\n\n  &:hover {\n    transform: scale(1.1);\n    background-color: hsl(180, 100%, 35%);\n  }\n\n  @media (max-width: 767px) {\n    margin-top: 10px;\n    width: 100%;\n  }\n"]);return j=function(){return n},n}function w(){var n=Object(x.a)(["\n  padding: 10px;\n  width: 100%;\n  max-width: 800px;\n  margin-right: 20px;\n  flex-grow: 1;\n  border: 2px solid #e8e8e8;\n\n  &:placeholder {\n    color: hsl(0, 0%, 75%);\n  }\n\n  @media (max-width: 767px) {\n    width: 100%;\n    max-width: unset;\n  }\n"]);return w=function(){return n},n}function O(){var n=Object(x.a)(["\n  padding: 20px;\n  border-top: 2px solid #e8e8e8;\n  display: flex;\n\n  @media (max-width: 767px) {\n    flex-direction: column;\n    flex-basis: 100%;\n  }\n"]);return O=function(){return n},n}function E(){var n=Object(x.a)(["\n  padding: 20px;\n  margin: 0;\n\n  @media (max-width: 767px) {\n    font-size: 20px;\n  }\n"]);return E=function(){return n},n}function y(){var n=Object(x.a)(["\n  background-color: white;\n"]);return y=function(){return n},n}var D=k.c.form(y()),z=k.c.h2(E()),C=k.c.div(O()),T=k.c.input(w()),S=k.c.button(j()),I=function(){var n=Object(r.useState)(""),e=Object(u.a)(n,2),t=e[0],a=e[1],c=Object(r.useRef)(null),d=Object(i.b)();return o.a.createElement(D,{onSubmit:function(n){n.preventDefault();var e=t.trim();e&&(d(f({content:e,done:!1,id:Object(l.c)()})),a(""),c.current.focus())}},o.a.createElement(z,null,"Dodaj nowe zadanie"),o.a.createElement(C,null,o.a.createElement(T,{ref:c,value:t,onChange:function(n){var e=n.target;return a(e.value)},autoFocus:!0,placeholder:"Co jest do zrobienia?"}),o.a.createElement(S,null,"Dodaj zadanie")))};function A(){var n=Object(x.a)(["\n  height: 30px;\n  width: 30px;\n  background-color: red;\n  border: none;\n  color: white;\n  flex-shrink: 0;\n"]);return A=function(){return n},n}function B(){var n=Object(x.a)(["\n      color: white;\n    "]);return B=function(){return n},n}function H(){var n=Object(x.a)(["\n  height: 30px;\n  width: 30px;\n  background-color: green;\n  border: none;\n  color: green;\n  flex-shrink: 0;\n\n  ","\n"]);return H=function(){return n},n}function J(){var n=Object(x.a)(["\n      text-decoration: line-through;\n    "]);return J=function(){return n},n}function L(){var n=Object(x.a)(["\n  flex-grow: 1;\n  margin: 0 10px;\n\n  ","\n"]);return L=function(){return n},n}function M(){var n=Object(x.a)(["\n      display: none;\n    "]);return M=function(){return n},n}function U(){var n=Object(x.a)(["\n  padding: 10px;\n  border-bottom: 2px solid #e8e8e8;\n  display: flex;\n  align-items: center;\n\n  ","\n"]);return U=function(){return n},n}function W(){var n=Object(x.a)(["\n  padding: 20px;\n  margin-top: 25px;\n  list-style-type: none;\n"]);return W=function(){return n},n}var F=k.c.ul(W()),P=k.c.li(U(),(function(n){return n.hidden&&Object(k.b)(M())})),R=k.c.span(L(),(function(n){return n.done&&Object(k.b)(J())})),$=k.c.button(H(),(function(n){return n.done&&Object(k.b)(B())})),q=k.c.button(A()),G=function(){var n=Object(i.c)(v),e=n.tasks,t=n.hideDone,r=Object(i.b)();return o.a.createElement(F,null,e.map((function(n){return o.a.createElement(P,{key:n.id,hidden:n.done&&t},o.a.createElement($,{onClick:function(){return r(b(n.id))},done:n.done},"\u2714"),o.a.createElement(R,{done:n.done},n.content),o.a.createElement(q,{onClick:function(){return r(p(n.id))}},"\ud83d\uddd1"))})))};function K(){var n=Object(x.a)(["\n  background-color: transparent;\n  border: none;\n  padding: 20px;\n  color: teal;\n  transition: color 0.3s;\n\n  &:hover {\n    color: hsl(180, 100%, 35%);\n  }\n\n  &:active {\n    color: hsl(180, 100%, 50%);\n  }\n\n  &:disabled {\n    color: #ccc;\n  }\n"]);return K=function(){return n},n}function N(){var n=Object(x.a)(["\n  display: grid;\n  grid-template-columns: 1fr auto;\n\n  @media (max-width: 767px) {\n    grid-template-columns: 1fr;\n  }\n"]);return N=function(){return n},n}var Q=k.c.div(N()),V=k.c.button(K()),X=function(){var n=Object(i.c)(v),e=n.tasks,t=n.hideDone,r=Object(i.b)();return e.length>0&&o.a.createElement(Q,null,o.a.createElement(V,{onClick:function(){return r(m())}},t?"Poka\u017c uko\u0144czone":"Ukryj uko\u0144czone"),o.a.createElement(V,{onClick:function(){return r(h())},disabled:e.every((function(n){return n.done}))},"Uko\u0144cz wszystkie"))},Y=function(n){var e=n.title;return o.a.createElement("h1",null,e)};function Z(){var n=Object(x.a)(["\n  background-color: white;\n  margin-top: 10px;\n  width: 100%;\n"]);return Z=function(){return n},n}var _=k.c.div(Z()),nn=function(n){var e=n.children;return o.a.createElement(_,null,e)};function en(){var n=Object(x.a)(["\n  display: grid;\n  grid-template-columns: 1fr auto;\n  border-bottom: 2px solid #e8e8e8;\n  padding: 20px;\n\n  @media (max-width: 767px) {\n    grid-template-columns: 1fr;\n    padding-bottom: 20px;\n  }\n"]);return en=function(){return n},n}var tn=k.c.div(en()),rn=function(n){var e=n.children;return o.a.createElement(tn,null,e)},on=function(n){var e=n.title;return o.a.createElement("h2",null,e)};function an(){var n=Object(x.a)(["\n  margin: 10vh auto;\n  width: 100%;\n  max-width: 1000px;\n\n  display: flex;\n  flex-flow: column wrap;\n"]);return an=function(){return n},n}var cn=k.c.div(an()),un=function(n){var e=n.children;return o.a.createElement(cn,null,e)};function ln(){var n=Object(x.a)(['\n  html {\n    box-sizing: border-box;\n  }\n\n  *,\n    ::after,\n    ::before {\n    box-sizing: inherit;\n  }\n\n  body {\n    padding: 20px;\n    font-family: "Montserrat", sans-serif;\n    background-color: #efefef;\n    justify-content: center;\n  }\n']);return ln=function(){return n},n}var dn=Object(k.a)(ln());var sn=function(){return o.a.createElement(un,null,o.a.createElement(dn,null),o.a.createElement(Y,{title:"Lista zada\u0144"}),o.a.createElement(I,null),o.a.createElement(nn,null,o.a.createElement(rn,null,o.a.createElement(on,{title:"Lista zada\u0144"}),o.a.createElement(X,null)),o.a.createElement(G,null)))},fn=function(){return o.a.createElement(sn,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var mn=Object(l.a)({reducer:{tasks:g}});c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(i.a,{store:mn},o.a.createElement(fn,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.ab061843.chunk.js.map