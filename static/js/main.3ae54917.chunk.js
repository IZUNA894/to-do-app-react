(this["webpackJsonpto-do"]=this["webpackJsonpto-do"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(6),c=a.n(l),r=(a(14),a(8)),i=a(1),s=a(2),m=a(4),u=a(3),d=a(5),h=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.toDos,a="";return a=0==t.length?o.a.createElement("div",{className:""},o.a.createElement("p",{className:""},"No's todo's left for today")):t.map((function(t){return o.a.createElement("li",{className:"  collection-item ",key:t.id},o.a.createElement("p",{className:""},t.title,o.a.createElement("a",{className:"waves-effect waves-light btn right",onClick:function(){e.props.deleteToDo(t.id)}},"Delete")))})),o.a.createElement("ul",{className:"collection"},a)}}]),t}(o.a.Component),f=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={title:null,id:null},a.handleChange=function(e){a.setState({title:e.target.value}),a.setState({id:5*Math.random()})},a.handleSubmit=function(e){e.preventDefault(),""!==document.getElementById("title").value&&(console.log(a.state),a.props.addToDo(a.state),document.getElementById("title").value="")},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("footer",{className:"page-footer"},o.a.createElement("div",{className:"row"},o.a.createElement("form",{className:"col s12",onSubmit:this.handleSubmit},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"input-field col s12"},o.a.createElement("input",{id:"title",type:"text",className:"validate",onChange:this.handleChange}),o.a.createElement("label",{htmlFor:"title"},"To-Do..."))))))}}]),t}(o.a.Component),v=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={toDos:[{title:"buy milk",id:1},{title:"go for walk",id:2},{title:"go for market",id:3}]},a.addToDo=function(e){var t=a.state.toDos;t=[].concat(Object(r.a)(t),[e]),a.setState({toDos:t})},a.deleteToDo=function(e){var t=a.state.toDos;t=t.filter((function(t){return e!=t.id})),a.setState({toDos:t})},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"container z-depth-5"},o.a.createElement("div",{className:"blue lighten-4 blue-text text-darken-4",style:{textAlign:null}},o.a.createElement("h2",null,"To-Do!"),o.a.createElement("p",{className:""},"create new to-do's here!")),o.a.createElement("div",{className:"blue-text text-darken-4 text"},o.a.createElement(h,{toDos:this.state.toDos,deleteToDo:this.deleteToDo})),o.a.createElement("div",{className:""},o.a.createElement(f,{addToDo:this.addToDo})))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.3ae54917.chunk.js.map