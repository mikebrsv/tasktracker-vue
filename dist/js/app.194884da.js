(function(e){function t(t){for(var r,o,s=t[0],u=t[1],i=t[2],l=0,f=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);d&&d(t);while(f.length)f.shift()();return c.push.apply(c,i||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,s=1;s<n.length;s++){var u=n[s];0!==a[u]&&(r=!1)}r&&(c.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={app:0},c=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var i=0;i<s.length;i++)t(s[i]);var d=u;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"02c3":function(e,t,n){"use strict";n("67f6")},"1a52":function(e,t,n){"use strict";n("1a6a")},"1a6a":function(e,t,n){},"1fb0":function(e,t,n){},3378:function(e,t,n){"use strict";n("1fb0")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a={class:"container"};function c(e,t,n,c,o,s){var u=Object(r["v"])("Header"),i=Object(r["v"])("router-view"),d=Object(r["v"])("Footer");return Object(r["o"])(),Object(r["d"])("div",a,[Object(r["f"])(u,{title:"Task Tracker"}),Object(r["f"])(i),Object(r["f"])(d)])}var o=Object(r["F"])("data-v-a00f5352"),s=o((function(e,t,n,a,c,o){return Object(r["o"])(),Object(r["d"])("header",null,[Object(r["f"])("h1",null,Object(r["x"])(n.title),1)])})),u={name:"Header",props:{title:String}};n("1a52");u.render=s,u.__scopeId="data-v-a00f5352";var i=u,d=Object(r["F"])("data-v-7454c886");Object(r["r"])("data-v-7454c886");var l=Object(r["f"])("p",null,"Copyright © 2021",-1),f=Object(r["e"])("About");Object(r["p"])();var b=d((function(e,t){var n=Object(r["v"])("router-link");return Object(r["o"])(),Object(r["d"])("footer",null,[l,Object(r["f"])(n,{to:"/about"},{default:d((function(){return[f]})),_:1})])}));n("93fe");const p={};p.render=b,p.__scopeId="data-v-7454c886";var j=p,O={name:"App",components:{Header:i,Footer:j}};n("3378");O.render=c;var m=O,k=n("6c02");function h(e,t,n,a,c,o){var s=Object(r["v"])("Button"),u=Object(r["v"])("AddTask"),i=Object(r["v"])("Tasks");return Object(r["o"])(),Object(r["d"])(r["a"],null,[Object(r["f"])(s,{onButtonClick:o.toggleAddTask,text:c.showAddTask?"Close Form":"Add Task",color:c.showAddTask?"red":"green"},null,8,["onButtonClick","text","color"]),Object(r["E"])(Object(r["f"])(u,{onAddTask:o.addTask},null,8,["onAddTask"]),[[r["B"],c.showAddTask]]),Object(r["f"])(i,{onToggleReminder:o.toggleReminder,onDeleteTask:o.deleteTask,tasks:c.tasks},null,8,["onToggleReminder","onDeleteTask","tasks"])],64)}var v=n("5530"),g=n("2909"),T=n("1da1");n("96cf"),n("d3b7"),n("99af"),n("4de4"),n("d81d");function x(e,t,n,a,c,o){var s=Object(r["v"])("Task");return Object(r["o"])(!0),Object(r["d"])(r["a"],null,Object(r["u"])(n.tasks,(function(t){return Object(r["o"])(),Object(r["d"])("div",{key:t.id},[Object(r["f"])(s,{onToggleReminder:function(n){return e.$emit("toggle-reminder",t.id)},onDeleteTask:function(n){return e.$emit("delete-task",t.id)},task:t},null,8,["onToggleReminder","onDeleteTask","task"])])})),128)}var y=Object(r["F"])("data-v-14fca59c"),w=y((function(e,t,n,a,c,o){return Object(r["o"])(),Object(r["d"])("div",{onDblclick:t[2]||(t[2]=function(e){return o.onToggle(n.task.id)}),class:[n.task.reminder?"reminder":"","task"]},[Object(r["f"])("h3",null,[Object(r["e"])(Object(r["x"])(n.task.text),1),Object(r["f"])("i",{class:"fas fa-times",onClick:t[1]||(t[1]=function(e){return o.onDelete(n.task.id)})})]),Object(r["f"])("p",null,Object(r["x"])(n.task.day),1)],34)})),A={name:"Task",props:{task:Object},methods:{onDelete:function(e){this.$emit("delete-task",e)},onToggle:function(e){this.$emit("toggle-reminder",e)}}};n("7937");A.render=w,A.__scopeId="data-v-14fca59c";var R=A,_={name:"Tasks",props:{tasks:Array},components:{Task:R},emits:["delete-task","toggle-reminder"]};_.render=x;var S=_,D=Object(r["F"])("data-v-10fc0e5c");Object(r["r"])("data-v-10fc0e5c");var C={class:"form-control"},P=Object(r["f"])("label",null,"Task",-1),E={class:"form-control"},F=Object(r["f"])("label",null,"Day & Time",-1),B={class:"form-control form-control-check"},$=Object(r["f"])("label",null,"Set Reminder",-1),H=Object(r["f"])("input",{class:"btn btn-block btn btn-block",type:"submit",value:"Save Task"},null,-1);Object(r["p"])();var I=D((function(e,t,n,a,c,o){return Object(r["o"])(),Object(r["d"])("form",{class:"add-form",onSubmit:t[4]||(t[4]=function(){return o.onSubmit&&o.onSubmit.apply(o,arguments)})},[Object(r["f"])("div",C,[P,Object(r["E"])(Object(r["f"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return c.text=e}),type:"text",name:"text",placeholder:"Add Task"},null,512),[[r["A"],c.text]])]),Object(r["f"])("div",E,[F,Object(r["E"])(Object(r["f"])("input",{"onUpdate:modelValue":t[2]||(t[2]=function(e){return c.day=e}),type:"text",name:"day",placeholder:"Add Day & Time"},null,512),[[r["A"],c.day]])]),Object(r["f"])("div",B,[$,Object(r["E"])(Object(r["f"])("input",{"onUpdate:modelValue":t[3]||(t[3]=function(e){return c.reminder=e}),type:"checkbox",name:"reminder"},null,512),[[r["z"],c.reminder]])]),H],32)})),J={name:"AddTask",data:function(){return{text:"",day:"",reminder:!1}},methods:{onSubmit:function(e){if(e.preventDefault(),this.text){var t={text:this.text,day:this.day,reminder:this.reminder};this.$emit("add-task",t),this.text="",this.day="",this.reminder=!1}else alert("Please add a task")}}};n("67a5");J.render=I,J.__scopeId="data-v-10fc0e5c";var M=J,U=Object(r["F"])("data-v-6ea85b72"),V=U((function(e,t,n,a,c,o){return Object(r["o"])(),Object(r["d"])("button",{class:"btn btn-block",onClick:t[1]||(t[1]=function(e){return o.onClick()}),style:{background:n.color}},Object(r["x"])(n.text),5)})),N={name:"Button",props:{text:String,color:String},methods:{onClick:function(){this.$emit("button-click")}}};n("02c3");N.render=V,N.__scopeId="data-v-6ea85b72";var z=N,G={name:"Home",components:{Tasks:S,AddTask:M,Button:z},data:function(){return{tasks:[],showAddTask:!1}},methods:{toggleAddTask:function(){this.showAddTask=!this.showAddTask},addTask:function(e){var t=this;return Object(T["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,fetch("http://localhost:5000/tasks",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});case 2:return r=n.sent,n.next=5,r.json();case 5:a=n.sent,t.tasks=[].concat(Object(g["a"])(t.tasks),[a]);case 7:case"end":return n.stop()}}),n)})))()},deleteTask:function(e){var t=this;return Object(T["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!confirm("Are you sure?")){n.next=5;break}return n.next=3,fetch("http://localhost:5000/tasks/".concat(e),{method:"DELETE"});case 3:r=n.sent,200===r.status?t.tasks=t.tasks.filter((function(t){return t.id!==e})):alert("Error deleting task");case 5:case"end":return n.stop()}}),n)})))()},toggleReminder:function(e){var t=this;return Object(T["a"])(regeneratorRuntime.mark((function n(){var r,a,c,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.fetchTask(e);case 2:return r=n.sent,a=Object(v["a"])(Object(v["a"])({},r),{},{reminder:!r.reminder}),n.next=6,fetch("http://localhost:5000/tasks/".concat(e),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});case 6:return c=n.sent,n.next=9,c.json();case 9:o=n.sent,t.tasks=t.tasks.map((function(t){return t.id===e?Object(v["a"])(Object(v["a"])({},t),{},{reminder:o.reminder}):t}));case 11:case"end":return n.stop()}}),n)})))()},fetchTasks:function(){return Object(T["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/tasks");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))()},fetchTask:function(e){return Object(T["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://localhost:5000/tasks/".concat(e));case 2:return n=t.sent,t.next=5,n.json();case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})))()}},created:function(){var e=this;return Object(T["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.fetchTasks();case 2:e.tasks=t.sent;case 3:case"end":return t.stop()}}),t)})))()}};G.render=h;var L=G,q=Object(r["f"])("h3",null,"Version 1.0.0",-1),K=Object(r["e"])("Go Back");function Q(e,t){var n=Object(r["v"])("router-link");return Object(r["o"])(),Object(r["d"])(r["a"],null,[q,Object(r["f"])(n,{to:"/"},{default:Object(r["D"])((function(){return[K]})),_:1})],64)}const W={};W.render=Q;var X=W,Y=[{path:"/",name:"Home",component:L},{path:"/about",name:"About",component:X}],Z=Object(k["a"])({history:Object(k["b"])("/"),routes:Y}),ee=Z;Object(r["c"])(m).use(ee).mount("#app")},"5d4f":function(e,t,n){},"67a5":function(e,t,n){"use strict";n("d327")},"67f6":function(e,t,n){},7937:function(e,t,n){"use strict";n("b50b")},"93fe":function(e,t,n){"use strict";n("5d4f")},b50b:function(e,t,n){},d327:function(e,t,n){}});
//# sourceMappingURL=app.194884da.js.map