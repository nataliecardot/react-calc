(window["webpackJsonpreact-calc"]=window["webpackJsonpreact-calc"]||[]).push([[0],{17:function(e,t,n){e.exports=n(28)},22:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),l=n(8),c=n.n(l),r=n(9),o=n(10),d=n(14),u=n(11),s=n(15),h=(n(22),n(23),function(e){return i.a.createElement("div",{className:"button-wrapper ".concat((t=e.children,isNaN(t)&&"\xb7"!==t&&"="!==t?"operator":null)),onClick:function(){return e.handleClick(e.children)}},e.children);var t}),m=(n(24),function(e){return i.a.createElement("div",{className:"input"},e.input)}),p=(n(25),function(e){return i.a.createElement("div",{className:"clear-btn",onClick:e.handleClear},e.children)}),E=n(30),f=(n(26),function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(d.a)(this,Object(u.a)(t).call(this,e))).addToInput=function(e){n.setState({input:n.state.input+e})},n.handleEqualsSign=function(){n.setState({input:E.a(n.state.input)})},n.handleDecimalPoint=function(){n.setState({input:n.state.input+"."})},n.handleDivisionSymbol=function(){n.setState({input:n.state.input+"/"})},n.handleMultiplicationSymbol=function(){n.setState({input:n.state.input+"*"})},n.state={input:""},n}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"app"},i.a.createElement("div",{className:"calc-wrapper"},i.a.createElement(m,{input:this.state.input}),i.a.createElement("div",{className:"row"},i.a.createElement(h,{handleClick:this.addToInput},"7"),i.a.createElement(h,{handleClick:this.addToInput},"8"),i.a.createElement(h,{handleClick:this.addToInput},"9"),i.a.createElement(h,{handleClick:function(){return e.handleDivisionSymbol()}},"\xf7")),i.a.createElement("div",{className:"row"},i.a.createElement(h,{handleClick:this.addToInput},"4"),i.a.createElement(h,{handleClick:this.addToInput},"5"),i.a.createElement(h,{handleClick:this.addToInput},"6"),i.a.createElement(h,{handleClick:function(){return e.handleMultiplicationSymbol()}},"\xd7")),i.a.createElement("div",{className:"row"},i.a.createElement(h,{handleClick:this.addToInput},"1"),i.a.createElement(h,{handleClick:this.addToInput},"2"),i.a.createElement(h,{handleClick:this.addToInput},"3"),i.a.createElement(h,{handleClick:this.addToInput},"\u2212")),i.a.createElement("div",{className:"row"},i.a.createElement(h,{handleClick:this.addToInput},"0"),i.a.createElement(h,{handleClick:function(){return e.handleDecimalPoint()}},"\xb7"),i.a.createElement(h,{handleClick:function(){return e.handleEqualsSign()}},"="),i.a.createElement(h,{handleClick:this.addToInput},"+")),i.a.createElement("div",{className:"row"},i.a.createElement(p,{handleClear:function(){return e.setState({input:""})}},"Clear"))))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[17,1,2]]]);
//# sourceMappingURL=main.4c1ddc24.chunk.js.map