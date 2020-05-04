(this["webpackJsonpmyjournal-official-frontend"]=this["webpackJsonpmyjournal-official-frontend"]||[]).push([[0],{27:function(e,t,a){e.exports=a.p+"static/media/login-journal.14bd004e.jpg"},49:function(e,t,a){e.exports=a(79)},58:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(25),l=a.n(o),c=a(3),u=(a(58),a(20)),s=a(45),i=a(46),m=a(2),d=a.n(m),f=a(4),p=a(15),E=a(12),b=a.n(E),h="/api/journals",v=null,y={getAll:function(){var e=Object(f.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t={headers:{Authorization:v}},!v){e.next=8;break}return e.next=4,b.a.get(h,t);case 4:return a=e.sent,e.abrupt("return",a.data);case 8:return e.abrupt("return",[]);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),createJournal:function(){var e=Object(f.a)(d.a.mark((function e(t){var a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Authorization:v}},e.next=3,b.a.post(h,t,a);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),updateJournal:function(){var e=Object(f.a)(d.a.mark((function e(t,a){var n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:v}},e.next=3,b.a.put("".concat(h,"/").concat(t),a,n);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),deleteJournal:function(){var e=Object(f.a)(d.a.mark((function e(t){var a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Authorization:v}},e.next=3,b.a.delete("".concat(h,"/").concat(t),a);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),setToken:function(e){v="bearer ".concat(e)}},g={journals:[],displayedJournalId:null,journalToUpdateId:null},N=function(e,t){return function(){var a=Object(f.a)(d.a.mark((function a(n){var r;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,y.updateJournal(e,t);case 3:r=a.sent,n({type:"UPDATE_JOURNAL",data:r}),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),console.log(a.t0.message);case 10:case"end":return a.stop()}}),a,null,[[0,7]])})));return function(e){return a.apply(this,arguments)}}()},j=function(e){return{type:"SET_DISPLAYED_JOURNAL",id:e}},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT_JOURNALS":return{journals:t.data,displayedJournalId:t.data.length>0?t.data[t.data.length-1].id:null,journalToUpdateId:null};case"CREATE_JOURNAL":var a=e.journals.concat(t.data).sort((function(e,t){return e.date>t.date?1:-1}));return{journals:a,displayedJournalId:t.data.id,journalToUpdateId:null};case"UPDATE_JOURNAL":return{journals:e.journals.map((function(e){return e.id===t.data.id?t.data:e})),displayedJournalId:t.data.id,journalToUpdateId:null};case"DELETE_JOURNAL":for(var n=null,r=0;r<e.journals.length;r++){var o=e.journals[r];if(o.id===t.id){if(r<e.journals.length-1){n=e.journals[r+1].id;break}if(r>0){n=e.journals[r-1].id;break}}}return{journals:e.journals.filter((function(e){return e.id!==t.id})),displayedJournalId:n,journalToUpdateId:null};case"SET_DISPLAYED_JOURNAL":return Object(p.a)({},e,{displayedJournalId:t.id,journalToUpdateId:null});case"SET_JOURNAL_TO_UPDATE":return Object(p.a)({},e,{displayedJournalId:null,journalToUpdateId:t.id});case"USER_LOGOUT":return g;default:return e}},O={login:function(){var e=Object(f.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.post("/api/login",t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},x=JSON.parse(window.localStorage.getItem("loggedInMyJournalAppUser")),w=function(e,t){return function(){var a=Object(f.a)(d.a.mark((function a(n){var r;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,O.login({username:e,password:t});case 3:r=a.sent,window.localStorage.setItem("loggedInMyJournalAppUser",JSON.stringify(r)),n({type:"USER_LOGIN",user:r}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.log(a.t0.message);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(e){return a.apply(this,arguments)}}()},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_LOGIN":return t.user;case"USER_LOGOUT":return null;default:return e}},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"all",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SECTION_FILTER":return t.section;case"USER_LOGOUT":return"all";default:return e}},A=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_JOURNAL_FORM_DISPLAY_ON":return!0;case"SET_JOURNAL_FORM_DISPLAY_OFF":case"USER_LOGOUT":return!1;default:return e}},S=null,L={getAll:function(){var e=Object(f.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t={headers:{Authorization:S}},!S){e.next=8;break}return e.next=4,b.a.get("api/monthlies",t);case 4:return a=e.sent,e.abrupt("return",a.data);case 8:return e.abrupt("return",[]);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),createMonthly:function(){var e=Object(f.a)(d.a.mark((function e(t){var a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Authorization:S}},e.next=3,b.a.post("api/monthlies",t,a);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),updateMonthly:function(){var e=Object(f.a)(d.a.mark((function e(t,a){var n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:S}},e.next=3,b.a.put("".concat("api/monthlies","/").concat(t),a,n);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),deleteMonthly:function(){var e=Object(f.a)(d.a.mark((function e(t){var a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Authorization:S}},e.next=3,b.a.delete("".concat("api/monthlies","/").concat(t),a);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),setToken:function(e){S="bearer ".concat(e)}},R=function(e){return{type:"TOGGLE_MONTHLY_UPDATE_FORM",id:e}},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT_MONTHLIES":return t.data.map((function(e){return Object(p.a)({},e,{editable:!1})})).reverse();case"CREATE_MONTHLY":return[t.data].concat(e);case"UPDATE_MONTHLY":return e.map((function(e){return e.id===t.data.id?Object(p.a)({},t.data,{editable:!1}):e}));case"TOGGLE_MONTHLY_UPDATE_FORM":return e.map((function(e){return e.id===t.id?Object(p.a)({},e,{editable:!e.editable}):e}));case"DELETE_MONTHLY":return e.filter((function(e){return e.id!==t.id}));case"USER_LOGOUT":return[];default:return e}},M=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_MONTHLY_FORM_DISPLAY_ON":return!0;case"SET_MONTHLY_FORM_DISPLAY_OFF":case"USER_LOGOUT":return!1;default:return e}},U=Object(u.combineReducers)({loginRedux:_,journalsRedux:k,sectionFilter:T,displayJournalForm:A,monthlies:I,displayMonthlyForm:M}),q=Object(u.createStore)(U,Object(s.composeWithDevTools)(Object(u.applyMiddleware)(i.a))),J=a(8),C=a(16),D=a(19),F=a(48),P=function(){var e=Object(c.c)((function(e){return e.journalsRedux.journals})),t=[];e.length>0&&e.map((function(e){if(0===e.todos.filter((function(e){return!e.done})).length){var a=new Date(e.date);a.setMinutes(a.getTimezoneOffset()),t.push(a)}return null}));return r.a.createElement(F.a,{tileClassName:function(e){var a=e.date,n=0;if("month"===e.view)for(var r=n;r<t.length;r++){var o=t[r];if(o.getTime()===a.getTime())return n++,"cross-off-day";o.getTime()<a.getTime()&&n++}return null}})},Y=a(6),H=a(7),z=function(e){var t=new Date(e);return["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][t.getDay()]+" "+t.toLocaleString()},W=function(e){var t=e.monthly,a=Object(c.b)();return r.a.createElement("div",{className:"monthly"},r.a.createElement("div",{className:"monthly-header"},r.a.createElement("div",{className:"monthly-date h6"},z(t.date)),r.a.createElement("button",{className:"btn-sm btn-dark",title:"Edit this monthly card",onClick:function(){return a(R(t.id))}},r.a.createElement(Y.a,{icon:H.e})),r.a.createElement("button",{className:"btn-sm btn-dark",title:"Delete this monthly card",onClick:function(){return a((e=t.id,function(){var t=Object(f.a)(d.a.mark((function t(a){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,L.deleteMonthly(e);case 3:a({type:"DELETE_MONTHLY",id:e}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0.message);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()));var e}},r.a.createElement(Y.a,{icon:H.i}))),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.content}}))},G=a(10),B=function(e){var t=e.monthly,a=Object(c.b)(),n=Object(G.b)({defaultValues:t}),o=n.register,l=n.handleSubmit,u=n.errors;return r.a.createElement("div",{className:"monthly-editable"},r.a.createElement("form",{onSubmit:l((function(e){var n={content:e.content};a(function(e,t){return function(){var a=Object(f.a)(d.a.mark((function a(n){var r;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,L.updateMonthly(e,t);case 3:r=a.sent,n({type:"UPDATE_MONTHLY",data:r}),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),console.log(a.t0.message);case 10:case"end":return a.stop()}}),a,null,[[0,7]])})));return function(e){return a.apply(this,arguments)}}()}(t.id,n))}))},r.a.createElement("div",{className:"monthly-header"},r.a.createElement("div",{className:"monthly-date h6"},z(t.date)),r.a.createElement("button",{className:"btn-sm btn-dark",title:"Save the change",type:"submit"},r.a.createElement(Y.a,{icon:H.g})),r.a.createElement("button",{className:"btn-sm btn-dark",title:"Cancel the change",type:"reset",onClick:function(){return a(R(t.id))}},r.a.createElement(Y.a,{icon:H.h}))),r.a.createElement("textarea",{className:"monthly-input",name:"content",ref:o({required:!0})}),u.content&&r.a.createElement("span",{className:"error-text"},"This field is required.")))},Z=function(){var e=Object(c.b)(),t=Object(G.b)(),a=t.register,n=t.handleSubmit,o=t.errors;return r.a.createElement("div",{className:"add-monthly"},r.a.createElement("form",{onSubmit:n((function(t){var a={content:t.content};e(function(e){return function(){var t=Object(f.a)(d.a.mark((function t(a){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,L.createMonthly(e);case 3:n=t.sent,a({type:"CREATE_MONTHLY",data:n}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}(a)),e({type:"SET_MONTHLY_FORM_DISPLAY_OFF"})}))},r.a.createElement("div",{className:"monthly-header"},r.a.createElement("div",{className:"monthly-date h6"},"Write your new monthly card"),r.a.createElement("button",{className:"btn-sm btn-dark",title:"Save",type:"submit"},r.a.createElement(Y.a,{icon:H.g})),r.a.createElement("button",{className:"btn-sm btn-dark",title:"Cancel",type:"reset",onClick:function(){return e({type:"SET_MONTHLY_FORM_DISPLAY_OFF"})}},r.a.createElement(Y.a,{icon:H.h}))),r.a.createElement("textarea",{className:"monthly-input",placeholder:"What have you done last month? What are your plans for next month?",name:"content",ref:a({required:!0})}),o.content&&r.a.createElement("span",{className:"error-text"},"This field is required.")))},Q=function(){var e=Object(c.b)(),t=Object(c.c)((function(e){return e.monthlies})),a=Object(c.c)((function(e){return e.displayMonthlyForm}));return r.a.createElement("div",{className:"calendar-page flex-container"},r.a.createElement(P,null),a?r.a.createElement(Z,null):r.a.createElement("button",{className:"add-monthly-button btn btn-dark",onClick:function(){return e({type:"SET_MONTHLY_FORM_DISPLAY_ON"})}},"Write a new monthly update"),t.length>0&&t.map((function(e){return e.editable?r.a.createElement(B,{key:e.id,monthly:e}):r.a.createElement(W,{key:e.id,monthly:e})})))},V=function(){var e=Object(n.useState)(""),t=Object(J.a)(e,2),a=t[0],o=t[1],l=Object(c.b)(),u=Object(c.c)((function(e){return e.journalsRedux.journals})),s=Object(c.c)((function(e){return e.journalsRedux.displayedJournalId})),i=Object(c.c)((function(e){return e.journalsRedux.journalToUpdateId}));return r.a.createElement("div",{className:"date-list-page"},r.a.createElement("input",{className:"date-search-box",type:"text",placeholder:"Search Date",value:a,onChange:function(e){return o(e.target.value)}}),r.a.createElement("div",{className:"date-list"},u&&u.length>0&&u.map((function(e){return e.date.includes(a)&&r.a.createElement("div",{key:e.id,onClick:function(){return l(j(e.id))}},r.a.createElement("div",{className:"h6 date-list-item"},e.date,"\xa0",(e.id===s||e.id===i)&&r.a.createElement(Y.a,{icon:H.d})))}))))},X=function(e){var t=e.todo,a=Object(c.b)(),n=Object(c.c)((function(e){return e.journalsRedux.journals})),o=Object(c.c)((function(e){return e.journalsRedux.displayedJournalId}));return r.a.createElement("div",{className:"todo-item"},r.a.createElement("input",{className:"checkbox-input",type:"checkbox",checked:t.done,onChange:function(){var e=o?n.find((function(e){return e.id===o})):null,r=Object(p.a)({},t,{done:!t.done}),l=e.todos.map((function(e){return e.id===t.id?r:e})),c=Object(p.a)({},e,{todos:l});a(N(o,c))}}),r.a.createElement("label",null,t.task))},K=function(e){var t=e.reflection,a={backgroundColor:t.color},n=Object(c.b)(),o=Object(c.c)((function(e){return e.journalsRedux.journals})).filter((function(e){return e.reflections.includes(t)}))[0];return r.a.createElement("div",{className:"reflection-item",style:a},r.a.createElement("input",{type:"color",style:{borderRadius:"0.25rem"},title:"Choose a color for the reflection card",value:t.color?t.color:"#ffebcd",onChange:function(e){var a=o.reflections.map((function(a){return a.id===t.id?Object(p.a)({},a,{color:e.target.value}):a}));o.reflections=a,n(N(o.id,o))}}),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.content}}))},$=function(e){var t=e.bookSummary;return r.a.createElement("div",{className:"book-summary-item"},r.a.createElement("div",{className:"book-summary-header"},r.a.createElement("span",{className:"book-title h6"},t.title),t.chapter&&r.a.createElement(r.a.Fragment,null,"Chapter: ",r.a.createElement("i",null,t.chapter))),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.content}}))},ee=function(e){var t=e.quote;return r.a.createElement("div",{className:"quote-item"},r.a.createElement("blockquote",{className:"quote-content"},r.a.createElement("i",null,"\u201c",t.content,"\u201d")),t.source&&r.a.createElement("div",{className:"quote-source"},"- ",t.source),t.comment&&r.a.createElement("div",null,t.comment))},te=function(e){var t=e.vocabulary;return r.a.createElement("div",{className:"word-item"},r.a.createElement("strong",null,t.word),r.a.createElement("br",null),t.definition)},ae=function(e){var t=e.journal,a=Object(c.c)((function(e){return e.sectionFilter}));return r.a.createElement("div",{className:"journal-page"},!("all"!==a&&0===t[a].length)&&r.a.createElement("div",{className:"date-section"},r.a.createElement("h5",null,t.date)),0!==t.todos.length&&("all"===a||"todos"===a)&&r.a.createElement("div",{className:"todos-section"},r.a.createElement("h5",{className:"text-muted"},"Todos"),r.a.createElement("div",{className:"todos-list"},t.todos.map((function(e){return r.a.createElement(X,{key:e.id,todo:e})})))),0!==t.reflections.length&&("all"===a||"reflections"===a)&&r.a.createElement("div",{className:"reflections-section"},r.a.createElement("h5",{className:"text-muted"},"Reflections"),t.reflections.map((function(e){return r.a.createElement(K,{key:e.id,reflection:e})}))),0!==t.book_summaries.length&&("all"===a||"book_summaries"===a)&&r.a.createElement("div",{className:"book-summaries-section"},r.a.createElement("h5",{className:"text-muted"},"Book Summary"),t.book_summaries.map((function(e){return r.a.createElement($,{key:e.id,bookSummary:e})}))),0!==t.quotes.length&&("all"===a||"quotes"===a)&&r.a.createElement("div",{className:"quotes-section"},r.a.createElement("h5",{className:"text-muted"},"Cool Quotes"),t.quotes.map((function(e){return r.a.createElement(ee,{key:e.id,quote:e})}))),0!==t.words_of_today.length&&("all"===a||"words_of_today"===a)&&r.a.createElement("div",{className:"words-section"},r.a.createElement("h5",{className:"text-muted"},"Words of Today"),t.words_of_today.map((function(e){return r.a.createElement(te,{key:e.id,vocabulary:e})}))))},ne=function(e){var t=e.inputArray,a=e.buttonText;return r.a.createElement("button",{className:"first-add-button btn-sm btn-dark",onClick:function(e){e.preventDefault(),t.append({})}},a)},re=function(e){var t=e.inputArray,a=e.index;return r.a.createElement("button",{className:"btn-sm btn-dark",title:"Add a task",onClick:function(e){e.preventDefault(),t.insert(a+1)}},r.a.createElement(Y.a,{icon:H.f}))},oe=function(e){var t=e.inputArray,a=e.index;return r.a.createElement("button",{className:"btn-sm btn-dark",title:"Delete the task",onClick:function(){return t.remove(a)}},r.a.createElement(Y.a,{icon:H.i}))},le=function(e){var t=e.inputArray,a=e.index;return r.a.createElement("button",{className:"btn-sm btn-dark",title:"Move up",onClick:function(e){e.preventDefault(),t.swap(a,Math.max(0,a-1))}},r.a.createElement(Y.a,{icon:H.b}))},ce=function(e){var t=e.inputArray,a=e.index;return r.a.createElement("button",{className:"btn-sm btn-dark",title:"Move Down",onClick:function(e){e.preventDefault(),t.swap(a,Math.min(t.fields.length-1,a+1))}},r.a.createElement(Y.a,{icon:H.a}))},ue=function(e){var t=e.inputArray,a=e.index;return r.a.createElement("div",{className:"add-form-button-group"},r.a.createElement(le,{inputArray:t,index:a}),r.a.createElement(ce,{inputArray:t,index:a}),r.a.createElement(re,{inputArray:t,index:a}),r.a.createElement(oe,{inputArray:t,index:a}))},se=function(){var e=Object(n.useState)(null),t=Object(J.a)(e,2),a=t[0],o=t[1],l=Object(c.c)((function(e){return e.journalsRedux.journals})),u=Object(c.c)((function(e){return e.journalsRedux.journalToUpdateId})),s=u?l.find((function(e){return e.id===u})):null,i=Object(G.b)({defaultValues:s||""}),m=i.register,p=i.control,E=i.handleSubmit,b=i.errors,h=(0,i.watch)("reflections"),v=Object(G.a)({control:p,name:"todos"}),g=Object(G.a)({control:p,name:"reflections"}),k=Object(G.a)({control:p,name:"book_summaries"}),O=Object(G.a)({control:p,name:"quotes"}),x=Object(G.a)({control:p,name:"words_of_today"}),w=Object(c.b)(),_=function(){return r.a.createElement("span",{className:"error-text"},"This field is required.")};return r.a.createElement("div",{className:"add-form-page"},r.a.createElement("form",{onSubmit:E((function(e){if(N?l.find((function(t){return t.date===e.date&&t.id!==u})):l.find((function(t){return t.date===e.date})))return o(s?"A journal for ".concat(e.date," already exists. Please choose another date for the edited journal."):"A journal for ".concat(e.date," already exists. If you want to edit the journal for ").concat(e.date,", please choose update function instead.")),void setTimeout(o,5e3,null);if(!(e.todos||e.reflections||e.book_summaries||e.quotes||e.words_of_today))return o("Journal has no content."),void setTimeout(o,5e3,null);var t={date:e.date,todos:e.todos?e.todos:[],reflections:e.reflections?e.reflections:[],book_summaries:e.book_summaries?e.book_summaries:[],quotes:e.quotes?e.quotes:[],words_of_today:e.words_of_today?e.words_of_today:[]};w(s?N(u,t):function(e){return function(){var t=Object(f.a)(d.a.mark((function t(a){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y.createJournal(e);case 3:n=t.sent,a({type:"CREATE_JOURNAL",data:n}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}(t))}))},r.a.createElement("div",{className:"add-form-header detail-header flex-container"},r.a.createElement("div",{className:"detail-header-button-group"},r.a.createElement("button",{className:"btn btn-dark journal-save-button",type:"submit"},"Save"),r.a.createElement("button",{className:"btn btn-dark journal-cancel-button",type:"reset",onClick:function(){w(j(s?u:l[l.length-1].id))}},"Cancel"))),r.a.createElement("span",{className:"error-text"},a),r.a.createElement("div",{className:"date-section"},r.a.createElement("label",{className:"date-label h5"},"Date"),r.a.createElement("input",{className:"journal-form-control date-input",type:"date",name:"date",ref:m({required:!0})})),b.date&&_(),r.a.createElement("div",{className:"todos-section"},r.a.createElement("h5",null,"Todos"),0===v.fields.length&&r.a.createElement(ne,{inputArray:v,buttonText:"Add a task"}),v.fields.map((function(e,t){return r.a.createElement("div",{className:"flex-container",key:e.id},r.a.createElement("div",{className:"add-todo-item"},r.a.createElement("input",{className:"checkbox-input",type:"checkbox",name:"todos[".concat(t,"].done"),ref:m()}),r.a.createElement("input",{className:"journal-form-control task-input",placeholder:"Write your todo here...",name:"todos[".concat(t,"].task"),ref:m({required:!0,pattern:/[A-Za-z0-9]+/})})),r.a.createElement(ue,{inputArray:v,index:t}))})),b.todos&&_()),r.a.createElement("div",{className:"reflections-section"},r.a.createElement("h5",null,"Reflections"),0===g.fields.length&&r.a.createElement(ne,{inputArray:g,buttonText:"Add a reflection"}),g.fields.map((function(e,t){return r.a.createElement("div",{className:"flex-container",key:e.id},r.a.createElement("div",{className:"add-reflection-item",style:{backgroundColor:h&&h.length>t?h[t].color:"#ffebcd"}},r.a.createElement("textarea",{className:"journal-form-control reflection-input",placeholder:"How is your day?",name:"reflections[".concat(t,"].content"),ref:m({required:!0,pattern:/[A-Za-z0-9]+/})})),r.a.createElement("div",{style:{alignSelf:"center",marginBottom:10}},r.a.createElement(ue,{inputArray:g,index:t}),"Tag color\xa0",r.a.createElement("input",{type:"color",style:{borderRadius:"0.25rem"},title:"Choose a color for the reflection card",defaultValue:"#ffebcd",name:"reflections[".concat(t,"].color"),ref:m()})))})),b.reflections&&_()),r.a.createElement("div",{className:"book-summaries-section"},r.a.createElement("h5",null,"Book Summaries"),0===k.fields.length&&r.a.createElement(ne,{inputArray:k,buttonText:"Add a summary"}),k.fields.map((function(e,t){return r.a.createElement("div",{className:"flex-container",key:e.id},r.a.createElement("div",{className:"add-book-summary-item"},r.a.createElement("input",{className:"journal-form-control book-title-input",placeholder:"Book title",name:"book_summaries[".concat(t,"].title"),ref:m({required:!0,pattern:/[A-Za-z0-9]+/})}),r.a.createElement("input",{className:"journal-form-control book-chapter-input",placeholder:"Chapter",name:"book_summaries[".concat(t,"].chapter"),ref:m()}),r.a.createElement("textarea",{className:"journal-form-control book-summary-input",placeholder:"Chapter summary and your thoughts...",name:"book_summaries[".concat(t,"].content"),ref:m({required:!0,pattern:/[A-Za-z0-9]+/})})),r.a.createElement(ue,{inputArray:k,index:t}))})),b.book_summaries&&_()),r.a.createElement("div",{className:"quotes-section"},r.a.createElement("h5",null,"Cool Quotes"),0===O.fields.length&&r.a.createElement(ne,{inputArray:O,buttonText:"Add a quotation"}),O.fields.map((function(e,t){return r.a.createElement("div",{className:"flex-container",key:e.id},r.a.createElement("div",{className:"add-quote-item"},r.a.createElement("textarea",{className:"journal-form-control quote-content-input",placeholder:"What interesting and insightful quotation you have come across today?",name:"quotes[".concat(t,"].content"),ref:m({required:!0,pattern:/[A-Za-z0-9]+/})}),r.a.createElement("input",{className:"journal-form-control quote-source-input",placeholder:"Source",name:"quotes[".concat(t,"].source"),ref:m()}),r.a.createElement("textarea",{className:"journal-form-control quote-comment-input",placeholder:"Any comments you may have...",name:"quotes[".concat(t,"].comment"),ref:m()})),r.a.createElement(ue,{inputArray:O,index:t}))})),b.quotes&&_()),r.a.createElement("div",{className:"words-section"},r.a.createElement("h5",null,"Words of the day"),0===x.fields.length&&r.a.createElement(ne,{inputArray:x,buttonText:"Add a word"}),x.fields.map((function(e,t){return r.a.createElement("div",{className:"flex-container",key:e.id},r.a.createElement("div",{className:"add-word-item"},r.a.createElement("input",{className:"journal-form-control word-input",placeholder:"Word",name:"words_of_today[".concat(t,"].word"),ref:m({required:!0,pattern:/[A-Za-z0-9]+/})}),r.a.createElement("input",{className:"journal-form-control definition-input",placeholder:"Definition...",name:"words_of_today[".concat(t,"].definition"),ref:m({required:!0,pattern:/[A-Za-z0-9]+/})})),r.a.createElement(ue,{inputArray:x,index:t}))})),b.words_of_today&&_())))},ie=function(){var e=Object(c.b)(),t=Object(c.c)((function(e){return e.sectionFilter})),a=Object(c.c)((function(e){return e.journalsRedux.displayedJournalId})),n=Object(c.c)((function(e){return e.displayJournalForm}));return r.a.createElement("div",{className:"detail-header flex-container"},r.a.createElement("div",{className:"detail-header-button-group"},(a||!n)&&"all"===t&&r.a.createElement("button",{className:"btn btn-dark detail-header-button",title:"Write a new journal",onClick:function(){e(j(null)),e({type:"SET_JOURNAL_FORM_DISPLAY_ON"})}},r.a.createElement(Y.a,{icon:H.f})),a&&"all"===t&&r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"btn btn-dark detail-header-button",title:"Update the journal",onClick:function(){e({type:"SET_JOURNAL_TO_UPDATE",id:a}),e({type:"SET_JOURNAL_FORM_DISPLAY_ON"})}},r.a.createElement(Y.a,{icon:H.c})),r.a.createElement("button",{className:"btn btn-dark detail-header-button",title:"Delete the journal",onClick:function(){return e((t=a,function(){var e=Object(f.a)(d.a.mark((function e(a){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.deleteJournal(t);case 3:a({type:"DELETE_JOURNAL",id:t}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}()));var t}},r.a.createElement(Y.a,{icon:H.i})))),r.a.createElement("div",{className:"detail-header-filter"},r.a.createElement("label",{className:"h6"},"Filter\xa0"),r.a.createElement("select",{onChange:function(t){return e({type:"SET_SECTION_FILTER",section:t.target.value})}},r.a.createElement("option",{value:"all"},"All"),r.a.createElement("option",{value:"todos"},"Todo"),r.a.createElement("option",{value:"reflections"},"Reflection"),r.a.createElement("option",{value:"book_summaries"},"Book Summary"),r.a.createElement("option",{value:"quotes"},"Quote"),r.a.createElement("option",{value:"words_of_today"},"Word of the Day"))))},me=function(){var e=Object(c.c)((function(e){return e.journalsRedux.journals})),t=Object(c.c)((function(e){return e.sectionFilter})),a=Object(c.c)((function(e){return e.journalsRedux.displayedJournalId})),n=a?e.find((function(e){return e.id===a})):null,o=Object(c.c)((function(e){return e.displayJournalForm}));return r.a.createElement("div",{className:"flex-container"},r.a.createElement(V,null),r.a.createElement("div",{className:"detail-section"},(a||0===e.length)&&r.a.createElement(ie,null),"all"===t?n?r.a.createElement(ae,{journal:n}):o?r.a.createElement(se,null):r.a.createElement("p",null,"Write your first journal..."):e.map((function(e){return r.a.createElement(ae,{key:e.id,journal:e})}))))},de=a(27),fe=a.n(de),pe=function(){var e=Object(n.useState)(null),t=Object(J.a)(e,2),a=t[0],o=t[1],l=Object(n.useState)(!0),u=Object(J.a)(l,2),s=u[0],i=u[1],m=Object(c.b)(),p=Object(G.b)(),E=p.register,b=p.handleSubmit,h=p.errors,v=function(){var e=Object(f.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m(w(t.username,t.password));case 2:JSON.parse(window.localStorage.getItem("loggedInMyJournalAppUser"))||o("Wrong credentials.");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"my-page-container row"},r.a.createElement("div",{className:"col-md-3"},r.a.createElement("h3",null,"Login"),r.a.createElement("form",{onSubmit:b(v)},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"h6"},"Username"),r.a.createElement("input",{className:"form-control",type:"text",name:"username",ref:E({required:!0,minLength:4})})),h.username&&r.a.createElement("span",{className:"error-text"},"This field is required."),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"h6"},"Password"),r.a.createElement("input",{className:"form-control",type:"password",name:"password",ref:E({required:!0,minLength:4})})),h.password&&r.a.createElement("span",{className:"error-text"},"This field is required."),r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-primary mr-3 my-medium-button",type:"submit"},"Login"),r.a.createElement("button",{className:"btn btn-primary my-medium-button"},r.a.createElement(C.b,{className:"register-link",to:"/register"},"Register")))),r.a.createElement("span",{className:"error-text"},a),s&&r.a.createElement("div",{className:"info-box"},r.a.createElement("button",{className:"cross-button",onClick:function(){return i(!1)}},r.a.createElement("span",null,"\xd7")),"Welcome to My Journal. Use \u201croot\u201d as both username and password for a quick demo. Or go to the about-page to learn more.")),r.a.createElement("div",{className:"col-md-9"},r.a.createElement("img",{className:"img-fluid",src:fe.a,alt:"A journal a day  makes bad habits go away"})))},Ee={register:function(){var e=Object(f.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.post("/api/users",t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},be=function(){var e=Object(n.useState)(null),t=Object(J.a)(e,2),a=t[0],o=t[1],l=Object(D.g)(),c=Object(G.b)(),u=c.register,s=c.handleSubmit,i=c.errors,m=function(){var e=Object(f.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Ee.register(t);case 3:l.push("/login"),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),e.t0.response.data.error.includes("`username` to be unique")&&o("Username already exists. Choose another username.");case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"my-page-container row"},r.a.createElement("div",{className:"col-md-3"},r.a.createElement("h3",null,"Registration"),r.a.createElement("form",{onSubmit:s(m)},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"h6"},"Username"),r.a.createElement("input",{className:"form-control",type:"text",name:"username",ref:u({required:!0,minLength:4})})),i.username&&r.a.createElement("span",{className:"error-text"},"Username must have at least 4 characters."),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"h6"},"Name"),r.a.createElement("input",{className:"form-control",type:"text",name:"name",ref:u({required:!0})})),i.name&&r.a.createElement("span",{className:"error-text"},"This field is required."),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"h6"},"Password"),r.a.createElement("input",{className:"form-control",type:"password",name:"password",ref:u({required:!0,minLength:4})})),i.password&&r.a.createElement("span",{className:"error-text"},"Password must have at least 4 characters."),r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-primary mr-3 my-medium-button",type:"submit"},"Register"))),r.a.createElement("span",{className:"error-text"},a),r.a.createElement("p",{className:"mt-3"},"Already have an account?\xa0",r.a.createElement(C.b,{to:"/login"},"Login"))),r.a.createElement("div",{className:"col-md-9"},r.a.createElement("img",{className:"img-fluid",src:fe.a,alt:"A journal a day  makes bad habits go away"})))},he=function(){return r.a.createElement("div",{className:"about-page"},r.a.createElement("p",null,"Hello and welcome to ",r.a.createElement("em",null,"My Journal"),". I built this website as a personal project to learn about full stack web development. To take a quick look at the website, use \u201croot\u201d as both username and password to log in."),r.a.createElement("p",null,"Here are the main technologies, frameworks and libraries that I use."),r.a.createElement("h6",null,"Front end:"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("strong",null,"React:")," Use JSX to write React components."),r.a.createElement("li",null,r.a.createElement("strong",null,"React-Redux:")," Manage data from a central \u201cstore\u201d."),r.a.createElement("li",null,r.a.createElement("strong",null,"Axios:")," Make requests to and receive responses from the server."),r.a.createElement("li",null,r.a.createElement("strong",null,"React-Router:")," Manage navigation."),r.a.createElement("li",null,r.a.createElement("strong",null,"React-Hook-Form:")," Manage data input and validation for forms.")),r.a.createElement("h6",null,"Back end:"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("strong",null,"Nodejs/Express:")," Handle requests to the server."),r.a.createElement("li",null,r.a.createElement("strong",null,"MongoDB:")," The database is hosted on MongoDB Atlas cloud service."),r.a.createElement("li",null,r.a.createElement("strong",null,"Mongoose:")," Translate between Javascript objects and their representation in MongoDB, provide schema validation."),r.a.createElement("li",null,r.a.createElement("strong",null,"JSON Web Token:")," Encrypt and decrypt tokens used for token based authentication."),r.a.createElement("li",null,r.a.createElement("strong",null,"Bcrypt:"),"  Generate the password hashes."),r.a.createElement("li",null,r.a.createElement("strong",null,"Dotenv:")," Configure environment variables."),r.a.createElement("li",null,r.a.createElement("strong",null,"Jest/Supertest:")," For writing backend tests.")),r.a.createElement("br",null),r.a.createElement("h5",null,"Some quick notes about journaling"),r.a.createElement("p",null,"Almost every self-help book and advice mention journaling at some capacity, so it must be helpful, right? Of course, everyone has their own reasons, and there is no right or wrong way to write journals, but for me, those are the main benefits:"),r.a.createElement("ul",null,r.a.createElement("li",null,"Putting my thoughts into writing helps me think more clearly and assist with decision making. When I make a mistake, writing about my thinking and the circumstances that lead to it reminds me to avoid making the same mistake in the future."),r.a.createElement("li",null,"I write summaries for interesting books that I read and chip in my own opinion. Not only I retain useful information from the book longer, but I also sometimes gain new insights that I would not get if I only read books passively."),r.a.createElement("li",null,"It is simply fun to have a dialogue with myself.")))},ve=function(){return r.a.createElement("div",{style:{backgroundColor:"#292b2c",color:"white",height:100,paddingTop:20,position:"absolute",bottom:0,width:"100%"}},r.a.createElement("em",{style:{fontSize:18,paddingLeft:"10%"}},"- A journal a day  makes bad habits go away")," ",r.a.createElement("br",null),r.a.createElement("p",{style:{fontSize:16,paddingLeft:"30%"}},"Me, 2020."))},ye=function(){var e=Object(n.useState)(window.location.pathname),t=Object(J.a)(e,2),a=t[0],o=t[1],l=Object(c.c)((function(e){return e.loginRedux}));l&&(y.setToken(l.token),L.setToken(l.token));var u=Object(c.b)();Object(n.useEffect)((function(){u(function(){var e=Object(f.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.getAll();case 2:(a=e.sent).sort((function(e,t){return e.date>t.date?1:-1})),t({type:"INIT_JOURNALS",data:a});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),u(function(){var e=Object(f.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.getAll();case 2:a=e.sent,t({type:"INIT_MONTHLIES",data:a});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[u,l]);var s=function(e){if(e===a)return{backgroundColor:"cornsilk"}};return r.a.createElement("div",null,r.a.createElement(C.a,null,r.a.createElement("nav",{className:"nav bg-dark"},r.a.createElement(C.b,{className:"navbar-brand",onClick:function(){return o("/journals")},to:"/journals"},"My Journal"),l&&r.a.createElement(C.b,{className:"nav-link",style:s("/calendar"),onClick:function(){return o("/calendar")},to:"/calendar"},"Calendar"),l&&r.a.createElement(C.b,{className:"nav-link",style:s("/journals"),onClick:function(){return o("/journals")},to:"/journals"},"Journals"),r.a.createElement(C.b,{className:"nav-link",style:s("/about"),onClick:function(){return o("/about")},to:"/about"},"About"),!l&&r.a.createElement(C.b,{className:"nav-link ml-auto",to:"/login"},"Login"),l&&r.a.createElement(C.b,{className:"nav-link ml-auto",onClick:function(){return u((window.localStorage.removeItem("loggedInMyJournalAppUser"),{type:"USER_LOGOUT"}))},to:"/login"},"Logout")),r.a.createElement(D.d,null,r.a.createElement(D.b,{path:"/login"},l?r.a.createElement(D.a,{to:"/journals"}):r.a.createElement(pe,null),r.a.createElement(ve,null)),r.a.createElement(D.b,{path:"/register"},r.a.createElement(be,null),r.a.createElement(ve,null)),r.a.createElement(D.b,{path:"/calendar"},l?r.a.createElement(Q,null):r.a.createElement(D.a,{to:"/login"}),r.a.createElement(ve,null)),r.a.createElement(D.b,{path:"/journals"},l?r.a.createElement(me,null):r.a.createElement(D.a,{to:"/login"})),r.a.createElement(D.b,{path:"/about"},r.a.createElement(he,null),r.a.createElement(ve,null)),r.a.createElement(D.b,{path:"/"},l?r.a.createElement(D.a,{to:"/calendar"}):r.a.createElement(D.a,{to:"/login"})))))};l.a.render(r.a.createElement(c.a,{store:q},r.a.createElement(ye,null)),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.36601557.chunk.js.map