(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{193:function(e,t,n){e.exports=n(330)},198:function(e,t,n){},330:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n.n(s),r=n(15),i=n.n(r),o=(n(198),n(104)),u=n(105),l=n(108),c=n(106),h=n(109),d=n(67),g=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(l.a)(this,Object(c.a)(t).call(this,e))).getSecret=function(e){for(var t=0;t<5;t++)e[t]=""+Math.floor(9*Math.random()+1);console.log("Secret: "+e)},n.enterGuess=function(e,t){for(var n=0;n<5;n++)t[n]=e.charAt(n)},n.output=function(e,t){console.log(e);for(var s=e+"   ",r=!0,i=[1,2,3,4,5],o=0;o<5;o++)i[o]=e.charAt(o);for(var u=0;u<5;u++)i[u]===t[u]?i[u]="*":r=!1;for(var l=0;l<5;l++)for(var c=0;c<5;c++)i[l]===t[c]&&l!==c&&(i[l]="+");for(var h=0;h<5;h++)"*"!==i[h]&&"+"!==i[h]&&(i[h]="-");s+=n.toString(i),n.state.enteredGuesses.push(a.a.createElement("p",null,s)),n.setState({enteredGuesses:n.state.enteredGuesses,button:r?"Start":"Enter"})},n.toString=function(e){for(var t="",n=0;n<e.length;n++)t+=e[n];return t},n.handleOnChange=function(e){n.setState({disableB:5!==e.target.value.length,guess:e.target.value})},n.handleEnter=function(e){"Enter"===e.key&&5===n.state.guess.length&&n.handleClick()},n.state={errorMsg:"",disableT:!0,disableB:!1,secret:[1,2,3,4,5],guess:"",enteredGuesses:[a.a.createElement("p",null,"Guesses: ")],button:"Start"},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"handleClick",value:function(){"Start"===this.state.button?(this.getSecret(this.state.secret),this.setState({button:"Enter",disableT:!1,disableB:!0,secret:this.state.secret,enteredGuesses:[a.a.createElement("p",null,"Guesses: ")]})):(this.output(this.state.guess,this.state.secret),this.setState(function(e){return{guess:"",disableB:"Start"!==e.button,disableT:"Start"===e.button}}))}},{key:"render",value:function(){var e=this;return a.a.createElement("div",{stlye:{padding:20,flexDirection:"column"}},a.a.createElement("p",null,'The target is to guess a 5 digit number. A "*" means the number is at the right spot, "+" means the number is in the 5 digit number but is in the wrong spot, and "-" means the number is not in the 5 digit number.'),a.a.createElement("div",{style:{flexDirection:"row",alignItems:"center"}},a.a.createElement(d.b,{value:this.state.guess,onChange:this.handleOnChange,disabled:this.state.disableT,style:{width:"250px",margin:"10px 10px"},variant:"outlined",onKeyPress:this.handleEnter}),a.a.createElement(d.a,{style:{marginLeft:"20"},variant:"outlined",color:"primary",disabled:this.state.disableB,onClick:function(){e.handleClick()}},this.state.button)),this.state.enteredGuesses.map(function(e){return e}))}}]),t}(s.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[193,2,1]]]);
//# sourceMappingURL=main.19205bf7.chunk.js.map