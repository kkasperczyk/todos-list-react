(this["webpackJsonptodo-list-react"]=this["webpackJsonptodo-list-react"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(20)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(6),r=n.n(c),i=(n(13),n(7)),s=n(3),l=n(2),u=(n(14),function(e){var t=e.addNewTask,n=Object(a.useState)(""),c=Object(l.a)(n,2),r=c[0],i=c[1];return o.a.createElement("form",{className:"form",onSubmit:function(e){e.preventDefault(),t(r.trim()),i("")}},o.a.createElement("h2",{className:"form__header"},"Dodaj nowe zadanie"),o.a.createElement("div",{className:"form__main-content"},o.a.createElement("input",{value:r,onChange:function(e){var t=e.target;return i(t.value)},className:"form__input",autoFocus:!0,placeholder:"Co jest do zrobienia?"}),o.a.createElement("button",{className:"form__button"},"Dodaj zadanie")))}),m=(n(15),function(e){var t=e.tasks,n=e.hideDone,a=e.removeTask,c=e.toggleTaskDone;return o.a.createElement("ul",{className:"tasks__list"},t.map((function(e){return o.a.createElement("li",{key:e.id,className:"js-tasks__list-item ".concat(e.done&&n?"tasks__list-item--hidden":"")},o.a.createElement("button",{onClick:function(){return c(e.id)},className:"js-done ".concat(e.done?"js-done--ticked":"")},"\u2714"),o.a.createElement("span",{className:"js-taskContent ".concat(e.done?"js-taskContent--done":"")},e.content),o.a.createElement("button",{onClick:function(){return a(e.id)},className:"js-remove"},"\ud83d\uddd1"))})))}),d=(n(16),function(e){var t=e.tasks,n=e.hideDone,a=e.toggleHideDone,c=e.setAllDone;return t.length>0&&o.a.createElement("div",{className:"tasks__buttonContainer"},o.a.createElement("button",{onClick:a,className:"tasks__button js-hideDoneButton"},n?"Poka\u017c uko\u0144czone":"Ukryj uko\u0144czone"),o.a.createElement("button",{onClick:c,className:"tasks__button js-toggleAllDoneButton",disabled:t.every((function(e){return e.done}))},"Uko\u0144cz wszystkie"))}),f=function(e){var t=e.title;return o.a.createElement("h1",{className:"header"},t)},k=(n(17),function(e){var t=e.children;return o.a.createElement("div",{className:"tasks"},t)}),h=(n(18),function(e){var t=e.children;return o.a.createElement("div",{className:"tasks__container"},t)}),E=function(e){var t=e.title;return o.a.createElement("h2",{className:"tasks__header"},t)},v=(n(19),function(e){var t=e.children;return o.a.createElement("main",{className:"main"},t)});var b=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)([{id:1,content:"przej\u015b\u0107 na Reacta",done:!1},{id:2,content:"zje\u015b\u0107 obiad",done:!0}]),b=Object(l.a)(r,2),j=b[0],_=b[1];return o.a.createElement(v,null,o.a.createElement(f,{title:"Lista zada\u0144"}),o.a.createElement(u,{addNewTask:function(e){_((function(t){return[].concat(Object(i.a)(t),[{content:e,done:!1,id:t.length?t[t.length-1].id+1:1}])}))}}),o.a.createElement(k,null,o.a.createElement(h,null,o.a.createElement(E,{title:"Lista zada\u0144"}),o.a.createElement(d,{tasks:j,hideDone:n,toggleHideDone:function(){c((function(e){return!e}))},setAllDone:function(){_((function(e){return e.map((function(e){return Object(s.a)(Object(s.a)({},e),{},{done:!0})}))}))}})),o.a.createElement(m,{tasks:j,hideDone:n,removeTask:function(e){_((function(t){return t.filter((function(t){return t.id!==e}))}))},toggleTaskDone:function(e){_((function(t){return t.map((function(t){return t.id===e?Object(s.a)(Object(s.a)({},t),{},{done:!t.done}):t}))}))}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.4f79855b.chunk.js.map