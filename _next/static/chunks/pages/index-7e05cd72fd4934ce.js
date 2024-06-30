(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{3454:function(e,t,n){"use strict";var i,r;e.exports=(null==(i=n.g.process)?void 0:i.env)&&"object"==typeof(null==(r=n.g.process)?void 0:r.env)?n.g.process:n(7663)},5557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(2285)}])},477:function(e,t,n){"use strict";var i=n(3454);n(1479);var r=n(7294),s=r&&"object"==typeof r&&"default"in r?r:{default:r},o=void 0!==i&&i.env&&!0,a=function(e){return"[object String]"===Object.prototype.toString.call(e)},l=function(){function e(e){var t=void 0===e?{}:e,n=t.name,i=void 0===n?"stylesheet":n,r=t.optimizeForSpeed,s=void 0===r?o:r;c(a(i),"`name` must be a string"),this._name=i,this._deletedRulePlaceholder="#"+i+"-deleted-rule____{}",c("boolean"==typeof s,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=s,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var l=document.querySelector('meta[property="csp-nonce"]');this._nonce=l?l.getAttribute("content"):null}var t=e.prototype;return t.setOptimizeForSpeed=function(e){c("boolean"==typeof e,"`setOptimizeForSpeed` accepts a boolean"),c(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},t.isOptimizeForSpeed=function(){return this._optimizeForSpeed},t.inject=function(){var e=this;if(c(!this._injected,"sheet already injected"),this._injected=!0,this._optimizeForSpeed){this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),this._optimizeForSpeed||(o||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0);return}this._serverSheet={cssRules:[],insertRule:function(t,n){return"number"==typeof n?e._serverSheet.cssRules[n]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),n},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},t.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},t.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},t.insertRule=function(e,t){if(c(a(e),"`insertRule` accepts only strings"),this._optimizeForSpeed){var n=this.getSheet();"number"!=typeof t&&(t=n.cssRules.length);try{n.insertRule(e,t)}catch(t){return o||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var i=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,i))}return this._rulesCount++},t.replaceRule=function(e,t){if(this._optimizeForSpeed){var n=this.getSheet();if(t.trim()||(t=this._deletedRulePlaceholder),!n.cssRules[e])return e;n.deleteRule(e);try{n.insertRule(t,e)}catch(i){o||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),n.insertRule(this._deletedRulePlaceholder,e)}}else{var i=this._tags[e];c(i,"old rule at index `"+e+"` not found"),i.textContent=t}return e},t.deleteRule=function(e){if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];c(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}},t.flush=function(){this._injected=!1,this._rulesCount=0,this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)}),this._tags=[]},t.cssRules=function(){var e=this;return this._tags.reduce(function(t,n){return n?t=t.concat(Array.prototype.map.call(e.getSheetForTag(n).cssRules,function(t){return t.cssText===e._deletedRulePlaceholder?null:t})):t.push(null),t},[])},t.makeStyleTag=function(e,t,n){t&&c(a(t),"makeStyleTag accepts only strings as second parameter");var i=document.createElement("style");this._nonce&&i.setAttribute("nonce",this._nonce),i.type="text/css",i.setAttribute("data-"+e,""),t&&i.appendChild(document.createTextNode(t));var r=document.head||document.getElementsByTagName("head")[0];return n?r.insertBefore(i,n):r.appendChild(i),i},function(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}(e.prototype,[{key:"length",get:function(){return this._rulesCount}}]),e}();function c(e,t){if(!e)throw Error("StyleSheet: "+t+".")}var u=function(e){for(var t=5381,n=e.length;n;)t=33*t^e.charCodeAt(--n);return t>>>0},d={};function h(e,t){if(!t)return"jsx-"+e;var n=String(t),i=e+n;return d[i]||(d[i]="jsx-"+u(e+"-"+n)),d[i]}function f(e,t){var n=e+t;return d[n]||(d[n]=t.replace(/__jsx-style-dynamic-selector/g,e)),d[n]}var m=function(){function e(e){var t=void 0===e?{}:e,n=t.styleSheet,i=void 0===n?null:n,r=t.optimizeForSpeed,s=void 0!==r&&r;this._sheet=i||new l({name:"styled-jsx",optimizeForSpeed:s}),this._sheet.inject(),i&&"boolean"==typeof s&&(this._sheet.setOptimizeForSpeed(s),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer=void 0,this._indices={},this._instancesCounts={}}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer||(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(e,t){return e[t]=0,e},{}));var n=this.getIdAndRules(e),i=n.styleId,r=n.rules;if(i in this._instancesCounts){this._instancesCounts[i]+=1;return}var s=r.map(function(e){return t._sheet.insertRule(e)}).filter(function(e){return -1!==e});this._indices[i]=s,this._instancesCounts[i]=1},t.remove=function(e){var t=this,n=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw Error("StyleSheetRegistry: "+t+".")}(n in this._instancesCounts,"styleId: `"+n+"` not found"),this._instancesCounts[n]-=1,this._instancesCounts[n]<1){var i=this._fromServer&&this._fromServer[n];i?(i.parentNode.removeChild(i),delete this._fromServer[n]):(this._indices[n].forEach(function(e){return t._sheet.deleteRule(e)}),delete this._indices[n]),delete this._instancesCounts[n]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={}},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map(function(t){return[t,e._fromServer[t]]}):[],n=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map(function(t){return[t,e._indices[t].map(function(e){return n[e].cssText}).join(e._optimizeForSpeed?"":"\n")]}).filter(function(e){return!!e[1]}))},t.styles=function(e){var t,n;return t=this.cssRules(),void 0===(n=e)&&(n={}),t.map(function(e){var t=e[0],i=e[1];return s.default.createElement("style",{id:"__"+t,key:"__"+t,nonce:n.nonce?n.nonce:void 0,dangerouslySetInnerHTML:{__html:i}})})},t.getIdAndRules=function(e){var t=e.children,n=e.dynamic,i=e.id;if(n){var r=h(i,n);return{styleId:r,rules:Array.isArray(t)?t.map(function(e){return f(r,e)}):[f(r,t)]}}return{styleId:h(i),rules:Array.isArray(t)?t:[t]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e,t){return e[t.id.slice(2)]=t,e},{})},e}(),p=r.createContext(null);p.displayName="StyleSheetContext";var _=s.default.useInsertionEffect||s.default.useLayoutEffect,x=new m;function y(e){var t=x||r.useContext(p);return t&&_(function(){return t.add(e),function(){t.remove(e)}},[e.id,String(e.dynamic)]),null}y.dynamic=function(e){return e.map(function(e){return h(e[0],e[1])}).join(" ")},t.style=y},1822:function(e,t,n){"use strict";e.exports=n(477).style},2285:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var i=n(5893),r=n(1822),s=n.n(r),o=n(7294),a=n(9008),l=n.n(a),c=n(5291),u=n.n(c),d=n(6455),h=n.n(d);function f(){let[e,t]=(0,o.useState)(""),[n,r]=(0,o.useState)("Here is your PDF document."),[a,c]=(0,o.useState)("Your AWS Document"),d=async e=>{try{h().fire({title:"Sending...",text:"Please wait while we send your email.",allowOutsideClick:!1,didOpen:()=>{h().showLoading()}});let t=await fetch("https://obzyzblvsyacryqnviixt3qgma0dllld.lambda-url.us-east-1.on.aws/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({toEmail:e,subject:"Your AWS Document",text:"Here is your PDF document."})});if(t.ok)h().fire({title:"Email sent!",text:"PDF Document was sent to your provided email.",icon:"success"});else{let e=await t.text();h().fire({title:"Error",text:"Error sending email: ".concat(e),icon:"error"})}}catch(e){console.error("Error:",e),h().fire({title:"Error",text:"Error sending email",icon:"error"})}};return(0,i.jsxs)("div",{className:"jsx-8e20465f1067a600 "+(u().container||""),children:[(0,i.jsxs)(l(),{children:[(0,i.jsx)("title",{className:"jsx-8e20465f1067a600",children:"Create Next App"}),(0,i.jsx)("link",{rel:"icon",href:"/favicon.ico",className:"jsx-8e20465f1067a600"})]}),(0,i.jsx)("header",{className:"jsx-8e20465f1067a600 "+(u().header2||""),children:(0,i.jsx)("img",{src:"https://i.postimg.cc/g2XCJk7W/1mc0KI.jpg",className:"jsx-8e20465f1067a600"})}),(0,i.jsxs)("main",{className:"jsx-8e20465f1067a600",children:[(0,i.jsxs)("h1",{className:"jsx-8e20465f1067a600 "+(u().title||""),children:["Get Flash Notes, Tips and Tricks on 100+ ",(0,i.jsx)("b",{className:"jsx-8e20465f1067a600 "+(u().boldAws||""),children:"AWS"})," Topics"]}),(0,i.jsx)("div",{className:"jsx-8e20465f1067a600 "+(u().thinPara1||""),children:"My curated All-In-One AWS study document, just a single E-Mail away."}),(0,i.jsxs)("div",{className:"jsx-8e20465f1067a600 "+(u().emailContainer||""),children:[(0,i.jsx)("input",{type:"email",placeholder:"Enter email here to receive the full document",value:e,onChange:e=>t(e.target.value),className:"jsx-8e20465f1067a600 "+(u().emailInput||"")}),(0,i.jsx)("button",{onClick:()=>d(e),className:"jsx-8e20465f1067a600 "+(u().sendButton||""),children:"Send"})]}),(0,i.jsxs)("header",{className:"jsx-8e20465f1067a600 "+(u().header||""),children:[(0,i.jsx)("div",{className:"jsx-8e20465f1067a600 "+(u().headerOut||""),children:"Site Views: \xa0"}),(0,i.jsx)("div",{className:"jsx-8e20465f1067a600 "+(u().headerIn||""),children:"1000"})]}),(0,i.jsxs)("div",{className:"jsx-8e20465f1067a600 "+(u().SampleDoc||""),children:[(0,i.jsx)("div",{className:"jsx-8e20465f1067a600 "+(u().thinPara||""),children:"Not sure about the full document?"}),(0,i.jsx)("a",{href:"/organized.pdf",target:"_blank",rel:"noopener noreferrer",className:"jsx-8e20465f1067a600 "+(u().anew||""),children:(0,i.jsxs)("button",{className:"jsx-8e20465f1067a600 "+(u().downloadButton||""),children:[(0,i.jsx)("div",{className:"jsx-8e20465f1067a600",children:(0,i.jsx)("img",{src:"https://i.postimg.cc/kgTDsD5b/download-button-on-transparent-background-free-png.webp",alt:"Download",className:"jsx-8e20465f1067a600"})}),"Get a Free PDF Sample"]})})]}),(0,i.jsx)("div",{className:"jsx-8e20465f1067a600 "+(u().finalSection||""),children:(0,i.jsx)("a",{href:"",className:"jsx-8e20465f1067a600",children:"How this site works"})})]}),(0,i.jsx)(s(),{id:"2cc64e5d721cad0f",children:"main.jsx-8e20465f1067a600{padding:5rem 0;-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}footer.jsx-8e20465f1067a600{width:100%;height:100px;border-top:1px solid#eaeaea;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}footer.jsx-8e20465f1067a600 img.jsx-8e20465f1067a600{margin-left:.5rem}footer.jsx-8e20465f1067a600 a.jsx-8e20465f1067a600{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;text-decoration:none;color:inherit}code.jsx-8e20465f1067a600{background:#fafafa;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;padding:.75rem;font-size:1.1rem;font-family:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}"}),(0,i.jsx)(s(),{id:"605fdb5fca344e05",children:"html,body{padding:0;margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif}*{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}"})]})}},1479:function(){},5291:function(e){e.exports={container:"Home_container__d256j",header:"Home_header__y2QYS",headerOut:"Home_headerOut__h750j",headerIn:"Home_headerIn__9MamD",header2:"Home_header2__xat9a",finalSection:"Home_finalSection__qMwMT",navButton:"Home_navButton__CJnYb",emailContainer:"Home_emailContainer__iPaWq",emailInput:"Home_emailInput__Dj6qN",sendButton:"Home_sendButton__kNNkw",anew:"Home_anew__YUblr",thinPara:"Home_thinPara__3h__d",thinPara1:"Home_thinPara1__OTEFK",SampleDoc:"Home_SampleDoc__YhmRQ",downloadButton:"Home_downloadButton__GHDC0",title:"Home_title__hYX6j",boldAws:"Home_boldAws__Z587o",description:"Home_description__uXNdx",grid:"Home_grid__AVljO",card:"Home_card__E5spL",logo:"Home_logo__IOQAX"}},7663:function(e){!function(){var t={229:function(e){var t,n,i,r=e.exports={};function s(){throw Error("setTimeout has not been defined")}function o(){throw Error("clearTimeout has not been defined")}function a(e){if(t===setTimeout)return setTimeout(e,0);if((t===s||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:s}catch(e){t=s}try{n="function"==typeof clearTimeout?clearTimeout:o}catch(e){n=o}}();var l=[],c=!1,u=-1;function d(){c&&i&&(c=!1,i.length?l=i.concat(l):u=-1,l.length&&h())}function h(){if(!c){var e=a(d);c=!0;for(var t=l.length;t;){for(i=l,l=[];++u<t;)i&&i[u].run();u=-1,t=l.length}i=null,c=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===o||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function m(){}r.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new f(e,t)),1!==l.length||c||a(h)},f.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=m,r.addListener=m,r.once=m,r.off=m,r.removeListener=m,r.removeAllListeners=m,r.emit=m,r.prependListener=m,r.prependOnceListener=m,r.listeners=function(e){return[]},r.binding=function(e){throw Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw Error("process.chdir is not supported")},r.umask=function(){return 0}}},n={};function i(e){var r=n[e];if(void 0!==r)return r.exports;var s=n[e]={exports:{}},o=!0;try{t[e](s,s.exports,i),o=!1}finally{o&&delete n[e]}return s.exports}i.ab="//";var r=i(229);e.exports=r}()},9008:function(e,t,n){e.exports=n(7828)}},function(e){e.O(0,[166,888,774,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);