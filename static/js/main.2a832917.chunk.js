(this["webpackJsonptodo-list-react"]=this["webpackJsonptodo-list-react"]||[]).push([[0],[,,,function(e,t,a){e.exports=a(15)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),s=a(2),c=a.n(s),r=(a(8),a(9),function(){return o.a.createElement("form",{className:"form"},o.a.createElement("h2",{className:"form__header"},"Dodaj nowe zadanie"),o.a.createElement("div",{className:"form__main-content"},o.a.createElement("input",{className:"form__input",autoFocus:!0,placeholder:"Co jest do zrobienia?"}),o.a.createElement("button",{className:"form__button"},"Dodaj zadanie")))}),l=(a(10),function(e){var t=e.tasks,a=e.hideDoneTasks;return o.a.createElement("ul",{className:"tasks__list"},t.map((function(e){return o.a.createElement("li",{className:"js-tasks__list-item ".concat(e.done&&a?"tasks__list-item--hidden":"")},o.a.createElement("button",{className:"js-done ".concat(e.done?"js-done--ticked":"")},"\u2714"),o.a.createElement("span",{className:"js-taskContent ".concat(e.done?"js-taskContent--done":"")},e.content),o.a.createElement("button",{className:"js-remove"},"\ud83d\uddd1"))})))}),i=(a(11),function(e){var t=e.tasks,a=e.hideDoneTasks;return t.length>0&&o.a.createElement("div",{className:"tasks__buttonContainer"},o.a.createElement("button",{className:"tasks__button js-hideDoneButton"},a?"Poka\u017c uko\u0144czone":"Ukryj uko\u0144czone"),o.a.createElement("button",{className:"tasks__button js-toggleAllDoneButton",disabled:t.every((function(e){return e.done}))},"Uko\u0144cz wszystkie"))}),m=function(e){var t=e.title;return o.a.createElement("h1",{className:"header"},t)},u=(a(12),function(e){var t=e.children;return o.a.createElement("div",{className:"tasks"},t)}),d=(a(13),function(e){var t=e.children;return o.a.createElement("div",{className:"tasks__container"},t)}),k=function(e){var t=e.title;return o.a.createElement("h2",{className:"tasks__header"},t)},E=(a(14),function(e){var t=e.children;return o.a.createElement("main",{className:"main"},t)}),f=[{id:1,content:"przej\u015b\u0107 na Reacta",done:!1},{id:2,content:"zje\u015b\u0107 obiad",done:!0}];var h=function(){return o.a.createElement(E,null,o.a.createElement(m,{title:"Lista zada\u0144"}),o.a.createElement(r,null),o.a.createElement(u,null,o.a.createElement(d,null,o.a.createElement(k,{title:"Lista zada\u0144"}),o.a.createElement(i,{tasks:f,hideDoneTasks:!1})),o.a.createElement(l,{tasks:f,hideDoneTasks:!1})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[3,1,2]]]);
//# sourceMappingURL=main.2a832917.chunk.js.map