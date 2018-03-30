!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t(e.jscalpel={})}(this,function(e){"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n=(function(){function e(e){this.value=e}function t(t){function n(o,u){try{var a=t[o](u),i=a.value;i instanceof e?Promise.resolve(i.value).then(function(e){n("next",e)},function(e){n("throw",e)}):r(a.done?"return":"normal",a.value)}catch(e){r("throw",e)}}function r(e,t){switch(e){case"return":o.resolve({value:t,done:!0});break;case"throw":o.reject(t);break;default:o.resolve({value:t,done:!1})}(o=o.next)?n(o.key,o.arg):u=null}var o,u;this._invoke=function(e,t){return new Promise(function(r,a){var i={key:e,arg:t,resolve:r,reject:a,next:null};u?u=u.next=i:(o=u=i,n(e,t))})},"function"!=typeof t.return&&(this.return=void 0)}"function"==typeof Symbol&&Symbol.asyncIterator&&(t.prototype[Symbol.asyncIterator]=function(){return this}),t.prototype.next=function(e){return this._invoke("next",e)},t.prototype.throw=function(e){return this._invoke("throw",e)},t.prototype.return=function(e){return this._invoke("return",e)}}(),function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}),r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=Object.prototype.toString,u=function(e){return"[object Object]"===o.call(e)},a=function(){function e(t){var r=t.target,o=t.returnedValue,u=t.error;n(this,e),this._target=r,this._error=u,this._returnedValue=o}return r(e,[{key:"_getValueByPath",value:function(e){for(var n=void 0,r=this._target,o=this._fallbackpath(e).split("."),u=0,a=o.length;u<a;u++)if(void 0===(void 0===(n=n?n[o[u]]:r[o[u]])?"undefined":t(n)))return n;return n}},{key:"_getValue",value:function(e){var t=void 0,n=[],r=this;return"string"==typeof e&&e.length>0?this._getValueByPath(e):"[object Array]"===o.call(e)?(e.forEach(function(e,o){"string"==typeof e&&(t=r._getValueByPath(e),n.push(t))}),0===n.length?null:n):null}},{key:"get",value:function(e){return e?this._getValueByPath(e):this._returnedValue}},{key:"_fallbackpath",value:function(e){return"string"!=typeof e?"":e}},{key:"_extend",value:function(e,t){if(u(e))for(var n=e,r=t.split("."),o=r.length,a=0;a<o;a++)void 0===n[r[a]]&&(n[r[a]]={}),n=(arguments.length<=2?0:arguments.length-2)>0&&a===o-1?n[r[a]]=arguments.length<=2?void 0:arguments[2]:n[r[a]]}},{key:"_setOrDel",value:function(e,t){var n=this._fallbackpath(e);""!==n?this._extend(this._target,n,t):"function"==typeof this._error&&this._error(this._target,e)}},{key:"set",value:function(e,t){var n=this;u(e)?Object.keys(e).forEach(function(t,r){n._setOrDel(t,e[t])}):this._setOrDel(e,t)}},{key:"has",value:function(e){return!!this._getValueByPath(e)}},{key:"del",value:function(e){var t=this;e&&(Array.isArray(e)?e.forEach(function(e,n){t._setOrDel(e,void 0)}):t._setOrDel(ph,void 0))}}]),e}(),i=function(e,t){var n=e.target,r=e.path,u=e.keys,i=e.dynamicKeys,c=e.prefix,l=e.callback,f=e.success,s=e.deep,y=e.plugins,p=e.error,h=f||l,v=!!c,g=function e(t){var n={},r=[];return"[object Object]"===o.call(t)?(Object.keys(t).forEach(function(u,a){Array.isArray(t[u])?(t[u].forEach(function(e,t){r.push(e)}),n[u]=r,r=[]):o.call("[object Object]"===t[u])&&(n[u]=e(t[u]))}),n):t},d=function(e){return c&&v?c+"."+e:""+e},b=function(e){for(var t=e.path,n=e.target,r=d(t).split("."),o=0,u=r.length;o<u;o++)if(void 0===(n=n[r[o]]))return n;return n},m=function(e){var t=e.plugins,n=e.name,r={value:e.value,name:n};t&&Array.isArray(t)&&t.length&&t.forEach(function(e,t){e(r)})},_=void 0,k=void 0,j=function(e){var t=null;try{if(t="string"==typeof e?JSON.parse(e):e,s&&(t=g(t)),"[object Object]"!==o.call(t)&&!Array.isArray(t))return void("function"==typeof p&&p(t))}catch(e){return void("function"==typeof p&&p(t,e))}return t}(n),O=[],x=h?function(e){var t=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,n=/=[^,]+/gm,r=/=>.*$/gm,o=e.toString().replace(t,"").replace(r,"").replace(n,""),u=o.slice(o.indexOf("(")+1,o.indexOf(")")).match(/([^\s,]+)/g);return null===u?[]:u}(h):[];return"string"==typeof(r=function(e){var t=e.path,n=void 0===t?"":t,r=e.keys,o=e.dynamicKeys;return r||"function"==typeof o?n=r||o(c):"function"==typeof n&&(n=n(c)),n}({path:r,keys:u,dynamicKeys:i}))&&r.length>0?(k=b({path:r,target:n}),m({plugins:y,name:x[0],value:k}),_=h&&"function"==typeof h?h.call(null,k,j,r,t):h):"[object Array]"===o.call(r)&&(r.forEach(function(e,t){"string"==typeof e&&(k=b({path:e,target:n}),m({plugins:y,value:k,name:x[t]}),O.push(k)),k=void 0}),O.push(j,r,t),_=h&&"function"==typeof h?h.apply(null,O):h),"function"==typeof l||"function"==typeof f?_:new a({target:j,error:p})};e.default=i,e.jscalpelType=function(e){var n=e.value,r=e.name;return-1!==["string","undefined","function","number","boolean"].indexOf(void 0===n?"undefined":t(n))?{value:n,type:void 0===n?"undefined":t(n)}:n+""=="null"?{value:n,type:"null"}:Array.isArray(n)?{value:n,type:"array",length:n.length}:"[object Object]"===Object.prototype.toString.call(n)?{value:n,name:r,type:"object",keys:Object.keys(n),values:Object.values(n)}:void 0},e.jscalpelLogic=function(e){return function(t){var n=t.value,r=t.name;return e[r]&&i({target:e,prefix:""+r,path:["match","success"],callback:function(e,t){return e({value:n,name:r})&&t({value:n,name:r}),n}}),n}},e.jscalpelORM=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1],n=arguments[2];if(!u(e))return console.error("source为"+e+",不是对象"),n;if(!u(t))return console.error("rules为"+t+",不是对象"),n;try{var r=Object.keys(t),o=t._extraInfo||{},a={},c=i({target:a}),l=i({target:e});return r.forEach(function(e,n){c.set(e,void 0===l.get(e)?l.get(t[e]):l.get(e))}),Object.assign(a,o)}catch(e){return console.error("请检查source和rules配置，两者都必须为对象!"),n}},Object.defineProperty(e,"__esModule",{value:!0})});