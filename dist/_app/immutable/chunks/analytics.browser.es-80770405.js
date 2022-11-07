function Ze(e,t,n,r,a){for(t=t.split?t.split("."):t,r=0;r<t.length;r++)e=e?e[t[r]]:a;return e===a?n:e}var Oe="undefined",et="object",St="any",Et="*",re="__",Te=typeof process<"u"?process:{};Te.env&&Te.env.NODE_ENV;var X=typeof window<"u";Te.versions!=null&&Te.versions.node!=null;typeof Deno<"u"&&Deno.core;X&&window.name==="nodejs"||typeof navigator<"u"&&(navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom"));function Pt(e,t){return t.charAt(0)[e]()+t.slice(1)}var Jt=Pt.bind(null,"toUpperCase"),Bt=Pt.bind(null,"toLowerCase");function Ft(e){return Ot(e)?Jt("null"):typeof e=="object"?Kt(e):Object.prototype.toString.call(e).slice(8,-1)}function $e(e,t){t===void 0&&(t=!0);var n=Ft(e);return t?Bt(n):n}function Pe(e,t){return typeof t===e}var G=Pe.bind(null,"function"),le=Pe.bind(null,"string"),ce=Pe.bind(null,"undefined"),Wt=Pe.bind(null,"boolean");Pe.bind(null,"symbol");function Ot(e){return e===null}function Xt(e){return $e(e)==="number"&&!isNaN(e)}function Ht(e){return $e(e)==="array"}function F(e){if(!Gt(e))return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function Gt(e){return e&&(typeof e=="object"||e!==null)}function Kt(e){return G(e.constructor)?e.constructor.name:null}function Qt(e){return e instanceof Error||le(e.message)&&e.constructor&&Xt(e.constructor.stackTraceLimit)}function xt(e,t){if(typeof t!="object"||Ot(t))return!1;if(t instanceof e)return!0;var n=$e(new e(""));if(Qt(t))for(;t;){if($e(t)===n)return!0;t=Object.getPrototypeOf(t)}return!1}xt.bind(null,TypeError);xt.bind(null,SyntaxError);function Me(e,t){var n=e instanceof Element||e instanceof HTMLDocument;return n&&t?Yt(e,t):n}function Yt(e,t){return t===void 0&&(t=""),e&&e.nodeName===t.toUpperCase()}function ze(e){var t=[].slice.call(arguments,1);return function(){return e.apply(void 0,[].slice.call(arguments).concat(t))}}ze(Me,"form");ze(Me,"button");ze(Me,"input");ze(Me,"select");function tt(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch{return null}}function Zt(){if(X){var e=navigator,t=e.languages;return e.userLanguage||(t&&t.length?t[0]:e.language)}}function en(){try{return Intl.DateTimeFormat().resolvedOptions().timeZone}catch{}}function tn(e){return function(t){for(var n,r=Object.create(null),a=/([^&=]+)=?([^&]*)/g;n=a.exec(t);){var u=tt(n[1]),c=tt(n[2]);u.substring(u.length-2)==="[]"?(r[u=u.substring(0,u.length-2)]||(r[u]=[])).push(c):r[u]=c===""||c}for(var f in r){var y=f.split("[");y.length>1&&(nn(r,y.map(function(v){return v.replace(/[?[\]\\ ]/g,"")}),r[f]),delete r[f])}return r}(function(t){if(t){var n=t.match(/\?(.*)/);return n&&n[1]?n[1].split("#")[0]:""}return X&&window.location.search.substring(1)}(e))}function nn(e,t,n){for(var r=t.length-1,a=0;a<r;++a){var u=t[a];if(u==="__proto__"||u==="constructor")break;u in e||(e[u]={}),e=e[u]}e[t[r]]=n}function Ue(){for(var e="",t=0,n=4294967295*Math.random()|0;t++<36;){var r="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx"[t-1],a=15&n;e+=r=="-"||r=="4"?r:(r=="x"?a:3&a|8).toString(16),n=t%8==0?4294967295*Math.random()|0:n>>4}return e}var be="global",pe=re+"global"+re,ge=typeof self===et&&self.self===self&&self||typeof global===et&&global.global===global&&global||void 0;function ie(e){return ge[pe][e]}function oe(e,t){return ge[pe][e]=t}function ve(e){delete ge[pe][e]}function he(e,t,n){var r;try{if(We(e)){var a=window[e];r=a[t].bind(a)}}catch{}return r||n}ge[pe]||(ge[pe]={});var xe={};function We(e){if(typeof xe[e]!==Oe)return xe[e];try{var t=window[e];t.setItem(Oe,Oe),t.removeItem(Oe)}catch{return xe[e]=!1}return xe[e]=!0}function g(){return g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},g.apply(this,arguments)}var Z="function",K="undefined",rn="@@redux/"+Math.random().toString(36),nt=function(){return typeof Symbol===Z&&Symbol.observable||"@@observable"}(),Ne=" != "+Z;function Nt(e,t,n){var r;if(typeof t===Z&&typeof n===K&&(n=t,t=void 0),typeof n!==K){if(typeof n!==Z)throw new Error("enhancer"+Ne);return n(Nt)(e,t)}if(typeof e!==Z)throw new Error("reducer"+Ne);var a=e,u=t,c=[],f=c,y=!1;function v(){f===c&&(f=c.slice())}function A(){return u}function d(m){if(typeof m!==Z)throw new Error("Listener"+Ne);var T=!0;return v(),f.push(m),function(){if(T){T=!1,v();var w=f.indexOf(m);f.splice(w,1)}}}function j(m){if(!F(m))throw new Error("Act != obj");if(typeof m.type===K)throw new Error("ActType "+K);if(y)throw new Error("Dispatch in reducer");try{y=!0,u=a(u,m)}finally{y=!1}for(var T=c=f,w=0;w<T.length;w++)(0,T[w])();return m}return j({type:"@@redux/INIT"}),(r={dispatch:j,subscribe:d,getState:A,replaceReducer:function(m){if(typeof m!==Z)throw new Error("next reducer"+Ne);a=m,j({type:"@@redux/INIT"})}})[nt]=function(){var m,T=d;return(m={subscribe:function(w){if(typeof w!="object")throw new TypeError("Observer != obj");function h(){w.next&&w.next(A())}return h(),{unsubscribe:T(h)}}})[nt]=function(){return this},m},r}function on(e,t){var n=t&&t.type;return"action "+(n&&n.toString()||"?")+"reducer "+e+" returns "+K}function me(){var e=[].slice.call(arguments);return e.length===0?function(t){return t}:e.length===1?e[0]:e.reduce(function(t,n){return function(){return t(n.apply(void 0,[].slice.call(arguments)))}})}function an(){var e=arguments;return function(t){return function(n,r,a){var u,c=t(n,r,a),f=c.dispatch,y={getState:c.getState,dispatch:function(v){return f(v)}};return u=[].slice.call(e).map(function(v){return v(y)}),g({},c,{dispatch:f=me.apply(void 0,u)(c.dispatch)})}}}var Q=re+"anon_id",ee=re+"user_id",ne=re+"user_traits",Dn={__proto__:null,ANON_ID:Q,USER_ID:ee,USER_TRAITS:ne},Y="userId",se="anonymousId",Ae=["bootstrap","params","campaign","initializeStart","initialize","initializeEnd","ready","resetStart","reset","resetEnd","pageStart","page","pageEnd","pageAborted","trackStart","track","trackEnd","trackAborted","identifyStart","identify","identifyEnd","identifyAborted","userIdChanged","registerPlugins","enablePlugin","disablePlugin","online","offline","setItemStart","setItem","setItemEnd","setItemAborted","removeItemStart","removeItem","removeItemEnd","removeItemAborted"],Be=["name","EVENTS","config","loaded"],p=Ae.reduce(function(e,t){return e[t]=t,e},{registerPluginType:function(e){return"registerPlugin:"+e},pluginReadyType:function(e){return"ready:"+e}}),rt=/^utm_/,it=/^an_prop_/,ot=/^an_trait_/;function un(e){var t=e.storage.setItem;return function(n){return function(r){return function(a){if(a.type===p.bootstrap){var u=a.params,c=a.user,f=a.persistedUser,y=a.initialUser,v=f.userId===c.userId;f.anonymousId!==c.anonymousId&&t(Q,c.anonymousId),v||t(ee,c.userId),y.traits&&t(ne,g({},v&&f.traits?f.traits:{},y.traits));var A=Object.keys(a.params);if(A.length){var d=u.an_uid,j=u.an_event,m=A.reduce(function(T,w){if(w.match(rt)||w.match(/^(d|g)clid/)){var h=w.replace(rt,"");T.campaign[h==="campaign"?"name":h]=u[w]}return w.match(it)&&(T.props[w.replace(it,"")]=u[w]),w.match(ot)&&(T.traits[w.replace(ot,"")]=u[w]),T},{campaign:{},props:{},traits:{}});n.dispatch(g({type:p.params,raw:u},m,d?{userId:d}:{})),d&&setTimeout(function(){return e.identify(d,m.traits)},0),j&&setTimeout(function(){return e.track(j,m.props)},0),Object.keys(m.campaign).length&&n.dispatch({type:p.campaign,campaign:m.campaign})}}return r(a)}}}}function cn(e){return function(t,n){if(t===void 0&&(t={}),n===void 0&&(n={}),n.type===p.setItemEnd){if(n.key===Q)return g({},t,{anonymousId:n.value});if(n.key===ee)return g({},t,{userId:n.value})}switch(n.type){case p.identify:return Object.assign({},t,{userId:n.userId,traits:g({},t.traits,n.traits)});case p.reset:return[ee,Q,ne].forEach(function(r){e.removeItem(r)}),Object.assign({},t,{userId:null,anonymousId:null,traits:{}});default:return t}}}function at(e){return{userId:e.getItem(ee),anonymousId:e.getItem(Q),traits:e.getItem(ne)}}var Fe=function(e){return re+"TEMP"+re+e};function sn(e){var t=e.storage,n=t.setItem,r=t.removeItem,a=t.getItem;return function(u){return function(c){return function(f){var y=f.userId,v=f.traits,A=f.options;if(f.type===p.reset&&([ee,ne,Q].forEach(function(m){r(m)}),[Y,se,"traits"].forEach(function(m){ve(Fe(m))})),f.type===p.identify){a(Q)||n(Q,Ue());var d=a(ee),j=a(ne)||{};d&&d!==y&&u.dispatch({type:p.userIdChanged,old:{userId:d,traits:j},new:{userId:y,traits:v},options:A}),y&&n(ee,y),v&&n(ne,g({},j,v))}return c(f)}}}}var ye={};function ut(e,t){ye[e]&&G(ye[e])&&(ye[e](t),delete ye[e])}function jt(e,t,n){return new Promise(function(r,a){return t()?r(e):n<1?a(g({},e,{queue:!0})):new Promise(function(u){return setTimeout(u,10)}).then(function(u){return jt(e,t,n-10).then(r,a)})})}function _t(e,t,n){var r=t(),a=e.getState(),u=a.plugins,c=a.queue,f=a.user;if(!a.context.offline&&c&&c.actions&&c.actions.length){var y=c.actions.reduce(function(A,d,j){return u[d.plugin].loaded?(A.process.push(d),A.processIndex.push(j)):(A.requeue.push(d),A.requeueIndex.push(j)),A},{processIndex:[],process:[],requeue:[],requeueIndex:[]});if(y.processIndex&&y.processIndex.length){y.processIndex.forEach(function(A){var d=c.actions[A],j=d.plugin,m=d.payload.type,T=r[j][m];if(T&&G(T)){var w=function(O,_){return O===void 0&&(O={}),_===void 0&&(_={}),[Y,se].reduce(function($,s){return O.hasOwnProperty(s)&&_[s]&&_[s]!==O[s]&&($[s]=_[s]),$},O)}(d.payload,f);T({payload:w,config:u[j].config,instance:n});var h=m+":"+j;e.dispatch(g({},w,{type:h,_:{called:h,from:"queueDrain"}}))}});var v=c.actions.filter(function(A,d){return!~y.processIndex.indexOf(d)});c.actions=v}}}var qe=function(e){var t=e.data,n=e.action,r=e.instance,a=e.state,u=e.allPlugins,c=e.allMatches,f=e.store,y=e.EVENTS;try{var v=a.plugins,A=a.context,d=n.type,j=d.match(fe),m=t.exact.map(function(h){return h.pluginName});j&&(m=c.during.map(function(h){return h.pluginName}));var T=function(h,O){return function(_,$,s){var b=$.config,U=$.name,M=U+"."+_.type;s&&(M=s.event);var z=_.type.match(fe)?function(V,C,J,L,B){return function(S,k){var W=L?L.name:V,R=k&&Ee(k)?k:J;if(L&&(!(R=k&&Ee(k)?k:[V]).includes(V)||R.length!==1))throw new Error("Method "+C+" can only abort "+V+" plugin. "+JSON.stringify(R)+" input valid");return g({},B,{abort:{reason:S,plugins:R,caller:C,_:W}})}}(U,M,O,s,_):function(V,C){return function(){throw new Error(V.type+" action not cancellable. Remove abort in "+C)}}(_,M);return{payload:ln(_),instance:h,config:b||{},abort:z}}}(r,m),w=t.exact.reduce(function(h,O){var _=O.pluginName,$=O.methodName,s=!1;return $.match(/^initialize/)||$.match(/^reset/)||(s=!v[_].loaded),A.offline&&$.match(/^(page|track|identify)/)&&(s=!0),h[""+_]=s,h},{});return Promise.resolve(t.exact.reduce(function(h,O,_){var $=O.pluginName;return Promise.resolve(h).then(function(s){function b(){return Promise.resolve(s)}var U=function(){if(t.namespaced&&t.namespaced[$])return Promise.resolve(t.namespaced[$].reduce(function(M,z,V){return Promise.resolve(M).then(function(C){return z.method&&G(z.method)?(function(S,k){var W=gt(S);if(W&&W.name===k){var R=gt(W.method);throw new Error([k+" plugin is calling method "+S,"Plugins cant call self","Use "+W.method+" "+(R?"or "+R.method:"")+" in "+k+" plugin insteadof "+S].join(`
`))}}(z.methodName,z.pluginName),Promise.resolve(z.method({payload:C,instance:r,abort:(J=C,L=$,B=z.pluginName,function(S,k){return g({},J,{abort:{reason:S,plugins:k||[L],caller:d,from:B||L}})}),config:lt(z.pluginName,v,u),plugins:v})).then(function(S){var k=F(S)?S:{};return Promise.resolve(g({},C,k))})):C;var J,L,B})},Promise.resolve(n))).then(function(M){s[$]=M});s[$]=n}();return U&&U.then?U.then(b):b()})},Promise.resolve({}))).then(function(h){return Promise.resolve(t.exact.reduce(function(O,_,$){try{var s=t.exact.length===$+1,b=_.pluginName,U=u[b];return Promise.resolve(O).then(function(M){var z=h[b]?h[b]:{};if(j&&(z=M),Re(z,b))return Ve({data:z,method:d,instance:r,pluginName:b,store:f}),Promise.resolve(M);if(Re(M,b))return s&&Ve({data:M,method:d,instance:r,store:f}),Promise.resolve(M);if(w.hasOwnProperty(b)&&w[b]===!0)return f.dispatch({type:"queue",plugin:b,payload:z,_:{called:"queue",from:"queueMechanism"}}),Promise.resolve(M);var V=T(h[b],u[b]);return Promise.resolve(U[d]({abort:V.abort,payload:z,instance:r,config:lt(b,v,u),plugins:v})).then(function(C){var J=F(C)?C:{},L=g({},M,J),B=h[b];if(Re(B,b))Ve({data:B,method:d,instance:r,pluginName:b,store:f});else{var S=d+":"+b;(S.match(/:/g)||[]).length<2&&!d.match(ct)&&!d.match(st)&&r.dispatch(g({},j?L:z,{type:S,_:{called:S,from:"submethod"}}))}return Promise.resolve(L)})})}catch(M){return Promise.reject(M)}},Promise.resolve(n))).then(function(O){if(!(d.match(fe)||d.match(/^registerPlugin/)||d.match(st)||d.match(ct)||d.match(/^params/)||d.match(/^userIdChanged/))){if(y.plugins.includes(d),O._&&O._.originalAction===d)return O;var _=g({},O,{_:{originalAction:O.type,called:O.type,from:"engineEnd"}});kt(O,t.exact.length)&&!d.match(/End$/)&&(_=g({},_,{type:O.type+"Aborted"})),f.dispatch(_)}return O})})}catch(h){return Promise.reject(h)}},fe=/Start$/,ct=/^bootstrap/,st=/^ready/;function Ve(e){var t=e.pluginName,n=e.method+"Aborted"+(t?":"+t:"");e.store.dispatch(g({},e.data,{type:n,_:{called:n,from:"abort"}}))}function lt(e,t,n){var r=t[e]||n[e];return r&&r.config?r.config:{}}function ft(e,t){return t.reduce(function(n,r){return r[e]?n.concat({methodName:e,pluginName:r.name,method:r[e]}):n},[])}function dt(e,t){var n=e.replace(fe,""),r=t?":"+t:"";return[""+e+r,""+n+r,n+"End"+r]}function Re(e,t){var n=e.abort;return!!n&&(n===!0||pt(n,t)||n&&pt(n.plugins,t))}function kt(e,t){var n=e.abort;if(!n)return!1;if(n===!0||le(n))return!0;var r=n.plugins;return Ee(n)&&n.length===t||Ee(r)&&r.length===t}function Ee(e){return Array.isArray(e)}function pt(e,t){return!(!e||!Ee(e))&&e.includes(t)}function gt(e){var t=e.match(/(.*):(.*)/);return!!t&&{method:t[1],name:t[2]}}function ln(e){return Object.keys(e).reduce(function(t,n){return n==="type"||(t[n]=F(e[n])?Object.assign({},e[n]):e[n]),t},{})}function fn(e,t,n){var r={};return function(a){return function(u){return function(c){try{var f,y=function(s){return f?s:u(d)},v=c.type,A=c.plugins,d=c;if(c.abort)return Promise.resolve(u(c));if(v===p.enablePlugin&&a.dispatch({type:p.initializeStart,plugins:A,disabled:[],fromEnable:!0,meta:c.meta}),v===p.disablePlugin&&setTimeout(function(){return ut(c.meta.rid,{payload:c})},0),v===p.initializeEnd){var j=t(),m=Object.keys(j),T=m.filter(function(s){return A.includes(s)}).map(function(s){return j[s]}),w=[],h=[],O=c.disabled,_=T.map(function(s){var b=s.name;return jt(s,s.loaded,1e4).then(function(U){return r[b]||(a.dispatch({type:p.pluginReadyType(b),name:b,events:Object.keys(s).filter(function(M){return!Be.includes(M)})}),r[b]=!0),w=w.concat(b),s}).catch(function(U){if(U instanceof Error)throw new Error(U);return h=h.concat(U.name),U})});Promise.all(_).then(function(s){var b={plugins:w,failed:h,disabled:O};setTimeout(function(){m.length===_.length+O.length&&a.dispatch(g({},{type:p.ready},b))},0)})}var $=function(){if(v!==p.bootstrap)return/^ready:([^:]*)$/.test(v)&&setTimeout(function(){return _t(a,t,e)},0),Promise.resolve(function(s,b,U,M,z){try{var V=G(b)?b():b,C=s.type,J=C.replace(fe,"");if(s._&&s._.called)return Promise.resolve(s);var L=U.getState(),B=(W=V,(R=L.plugins)===void 0&&(R={}),(o=s.options)===void 0&&(o={}),Object.keys(W).filter(function(i){var l=o.plugins||{};return Wt(l[i])?l[i]:l.all!==!1&&(!R[i]||R[i].enabled!==!1)}).map(function(i){return W[i]}));C===p.initializeStart&&s.fromEnable&&(B=Object.keys(L.plugins).filter(function(i){var l=L.plugins[i];return s.plugins.includes(i)&&!l.initialized}).map(function(i){return V[i]}));var S=B.map(function(i){return i.name}),k=function(i,l,E){var P=dt(i).map(function(I){return ft(I,l)});return l.reduce(function(I,q){var x=q.name,D=dt(i,x).map(function(ue){return ft(ue,l)}),N=D[0],H=D[1],ae=D[2];return N.length&&(I.beforeNS[x]=N),H.length&&(I.duringNS[x]=H),ae.length&&(I.afterNS[x]=ae),I},{before:P[0],beforeNS:{},during:P[1],duringNS:{},after:P[2],afterNS:{}})}(C,B);return Promise.resolve(qe({action:s,data:{exact:k.before,namespaced:k.beforeNS},state:L,allPlugins:V,allMatches:k,instance:U,store:M,EVENTS:z})).then(function(i){function l(){var I=function(){if(C.match(fe))return Promise.resolve(qe({action:g({},E,{type:J+"End"}),data:{exact:k.after,namespaced:k.afterNS},state:L,allPlugins:V,allMatches:k,instance:U,store:M,EVENTS:z})).then(function(q){q.meta&&q.meta.hasCallback&&ut(q.meta.rid,{payload:q})})}();return I&&I.then?I.then(function(){return i}):i}if(kt(i,S.length))return i;var E,P=function(){if(C!==J)return Promise.resolve(qe({action:g({},i,{type:J}),data:{exact:k.during,namespaced:k.duringNS},state:L,allPlugins:V,allMatches:k,instance:U,store:M,EVENTS:z})).then(function(I){E=I});E=i}();return P&&P.then?P.then(l):l()})}catch(i){return Promise.reject(i)}var W,R,o}(c,t,e,a,n)).then(function(s){var b=u(s);return f=1,b})}();return Promise.resolve($&&$.then?$.then(y):y($))}catch(s){return Promise.reject(s)}}}}}function dn(e){return function(t){return function(n){return function(r){var a=r.type,u=r.key,c=r.value,f=r.options;if(a===p.setItem||a===p.removeItem){if(r.abort)return n(r);a===p.setItem?e.setItem(u,c,f):e.removeItem(u,f)}return n(r)}}}}var pn=function(){var e=this;this.before=[],this.after=[],this.addMiddleware=function(t,n){e[n]=e[n].concat(t)},this.removeMiddleware=function(t,n){var r=e[n].findIndex(function(a){return a===t});r!==-1&&(e[n]=[].concat(e[n].slice(0,r),e[n].slice(r+1)))},this.dynamicMiddlewares=function(t){return function(n){return function(r){return function(a){var u={getState:n.getState,dispatch:function(f){return n.dispatch(f)}},c=e[t].map(function(f){return f(u)});return me.apply(void 0,c)(r)(a)}}}}};function gn(e){return function(t,n){t===void 0&&(t={});var r={};if(n.type==="initialize:aborted")return t;if(/^registerPlugin:([^:]*)$/.test(n.type)){var a=mt(n.type,"registerPlugin"),u=e()[a];if(!u||!a)return t;var c=n.enabled;return r[a]={enabled:c,initialized:!!c&&Boolean(!u.initialize),loaded:!!c&&Boolean(u.loaded()),config:u.config||{}},g({},t,r)}if(/^initialize:([^:]*)$/.test(n.type)){var f=mt(n.type,p.initialize),y=e()[f];return y&&f?(r[f]=g({},t[f],{initialized:!0,loaded:Boolean(y.loaded())}),g({},t,r)):t}if(/^ready:([^:]*)$/.test(n.type))return r[n.name]=g({},t[n.name],{loaded:!0}),g({},t,r);switch(n.type){case p.disablePlugin:return g({},t,vt(n.plugins,!1,t));case p.enablePlugin:return g({},t,vt(n.plugins,!0,t));default:return t}}}function mt(e,t){return e.substring(t.length+1,e.length)}function vt(e,t,n){return e.reduce(function(r,a){return r[a]=g({},n[a],{enabled:t}),r},n)}function At(e){try{return JSON.parse(JSON.stringify(e))}catch{}return e}var mn={last:{},history:[]};function vn(e,t){e===void 0&&(e=mn);var n=t.options,r=t.meta;if(t.type===p.track){var a=At(g({event:t.event,properties:t.properties},Object.keys(n).length&&{options:n},{meta:r}));return g({},e,{last:a,history:e.history.concat(a)})}return e}var hn={actions:[]};function yn(e,t){e===void 0&&(e=hn);var n=t.payload;switch(t.type){case"queue":var r;return r=n&&n.type&&n.type===p.identify?[t].concat(e.actions):e.actions.concat(t),g({},e,{actions:r});case"dequeue":return[];default:return e}}var Tt=/#.*$/;function bn(e){var t=/(http[s]?:\/\/)?([^\/\s]+\/)(.*)/g.exec(e);return"/"+(t&&t[3]?t[3].split("?")[0].replace(Tt,""):"")}var $t,Mt,zt,Ut,In=function(e){if(e===void 0&&(e={}),!X)return e;var t=document,n=t.title,r=t.referrer,a=window,u=a.location,c=a.innerWidth,f=a.innerHeight,y=u.hash,v=u.search,A=function(j){var m=function(){if(X){for(var T,w=document.getElementsByTagName("link"),h=0;T=w[h];h++)if(T.getAttribute("rel")==="canonical")return T.getAttribute("href")}}();return m?m.match(/\?/)?m:m+j:window.location.href.replace(Tt,"")}(v),d={title:n,url:A,path:bn(A),hash:y,search:v,width:c,height:f};return r&&r!==""&&(d.referrer=r),g({},d,e)},wn={last:{},history:[]};function Sn(e,t){e===void 0&&(e=wn);var n=t.options;if(t.type===p.page){var r=At(g({properties:t.properties,meta:t.meta},Object.keys(n).length&&{options:n}));return g({},e,{last:r,history:e.history.concat(r)})}return e}$t=function(){if(!X)return!1;var e=navigator.appVersion;return~e.indexOf("Win")?"Windows":~e.indexOf("Mac")?"MacOS":~e.indexOf("X11")?"UNIX":~e.indexOf("Linux")?"Linux":"Unknown OS"}(),Mt=X?document.referrer:null,zt=Zt(),Ut=en();var ht={initialized:!1,sessionId:Ue(),app:null,version:null,debug:!1,offline:!!X&&!navigator.onLine,os:{name:$t},userAgent:X?navigator.userAgent:"node",library:{name:"analytics",version:"0.11.0"},timezone:Ut,locale:zt,campaign:{},referrer:Mt};function En(e,t){e===void 0&&(e=ht);var n=e.initialized,r=t.campaign;switch(t.type){case p.campaign:return g({},e,{campaign:r});case p.offline:return g({},e,{offline:!0});case p.online:return g({},e,{offline:!1});default:return n?e:g({},ht,e,{initialized:!0})}}var Pn=["plugins","reducers","storage"];function On(e,t,n){if(X){var r=window[(n?"add":"remove")+"EventListener"];e.split(" ").forEach(function(a){r(a,t)})}}function xn(e){var t=On.bind(null,"online offline",function(n){return Promise.resolve(!navigator.onLine).then(e)});return t(!0),function(n){return t(!1)}}function Ct(){return oe("analytics",[]),function(e){return function(t,n,r){var a=e(t,n,r),u=a.dispatch;return Object.assign(a,{dispatch:function(c){return ge[pe].analytics.push(c.action||c),u(c)}})}}}function yt(e){return function(){return me(me.apply(null,arguments),Ct())}}function Je(e){return e?Ht(e)?e:[e]:[]}function bt(e,t,n){e===void 0&&(e={});var r,a,u=Ue();return t&&(ye[u]=(r=t,a=function(c){for(var f,y=c||Array.prototype.slice.call(arguments),v=0;v<y.length;v++)if(G(y[v])){f=y[v];break}return f}(n),function(c){a&&a(c),r(c)})),g({},e,{rid:u,ts:new Date().getTime()},t?{hasCallback:!0}:{})}function Nn(e){e===void 0&&(e={});var t=e.reducers||{},n=e.initialUser||{},r=(e.plugins||[]).reduce(function(o,i){if(G(i))return o.middlewares=o.middlewares.concat(i),o;if(i.NAMESPACE&&(i.name=i.NAMESPACE),!i.name)throw new Error("https://lytics.dev/errors/1");var l=i.EVENTS?Object.keys(i.EVENTS).map(function(I){return i.EVENTS[I]}):[];o.pluginEnabled[i.name]=!(i.enabled===!1||i.config&&i.config.enabled===!1),delete i.enabled,i.methods&&(o.methods[i.name]=Object.keys(i.methods).reduce(function(I,q){var x;return I[q]=(x=i.methods[q],function(){for(var D=Array.prototype.slice.call(arguments),N=new Array(x.length),H=0;H<D.length;H++)N[H]=D[H];return N[N.length]=s,x.apply({instance:s},N)}),I},{}),delete i.methods);var E=Object.keys(i).concat(l),P=new Set(o.events.concat(E));if(o.events=Array.from(P),o.pluginsArray=o.pluginsArray.concat(i),o.plugins[i.name])throw new Error(i.name+"AlreadyLoaded");return o.plugins[i.name]=i,o.plugins[i.name].loaded||(o.plugins[i.name].loaded=function(){return!0}),o},{plugins:{},pluginEnabled:{},methods:{},pluginsArray:[],middlewares:[],events:[]}),a=e.storage?e.storage:{getItem:ie,setItem:oe,removeItem:ve},u=function(o){return function(i,l,E){return l.getState("user")[i]||(E&&F(E)&&E[i]?E[i]:at(o)[i]||ie(Fe(i))||null)}}(a),c=r.plugins,f=r.events.filter(function(o){return!Be.includes(o)}).sort(),y=new Set(f.concat(Ae).filter(function(o){return!Be.includes(o)})),v=Array.from(y).sort(),A=function(){return c},d=new pn,j=d.addMiddleware,m=d.removeMiddleware,T=d.dynamicMiddlewares,w=function(){throw new Error("Abort disabled inListener")},h=tn(),O=at(a),_=g({},O,n,h.an_uid?{userId:h.an_uid}:{},h.an_aid?{anonymousId:h.an_aid}:{});_.anonymousId||(_.anonymousId=Ue());var $=g({enable:function(o,i){return new Promise(function(l){S.dispatch({type:p.enablePlugin,plugins:Je(o),_:{originalAction:p.enablePlugin}},l,[i])})},disable:function(o,i){return new Promise(function(l){S.dispatch({type:p.disablePlugin,plugins:Je(o),_:{originalAction:p.disablePlugin}},l,[i])})}},r.methods),s={identify:function(o,i,l,E){try{var P=le(o)?o:null,I=F(o)?o:i,q=l||{},x=s.user();oe(Fe(Y),P);var D=P||I.userId||u(Y,s,I);return Promise.resolve(new Promise(function(N){S.dispatch(g({type:p.identifyStart,userId:D,traits:I||{},options:q,anonymousId:x.anonymousId},x.id&&x.id!==P&&{previousId:x.id}),N,[i,l,E])}))}catch(N){return Promise.reject(N)}},track:function(o,i,l,E){try{var P=F(o)?o.event:o;if(!P||!le(P))throw new Error("EventMissing");var I=F(o)?o:i||{},q=F(l)?l:{};return Promise.resolve(new Promise(function(x){S.dispatch({type:p.trackStart,event:P,properties:I,options:q,userId:u(Y,s,i),anonymousId:u(se,s,i)},x,[i,l,E])}))}catch(x){return Promise.reject(x)}},page:function(o,i,l){try{var E=F(o)?o:{},P=F(i)?i:{};return Promise.resolve(new Promise(function(I){S.dispatch({type:p.pageStart,properties:In(E),options:P,userId:u(Y,s,E),anonymousId:u(se,s,E)},I,[o,i,l])}))}catch(I){return Promise.reject(I)}},user:function(o){if(o===Y||o==="id")return u(Y,s);if(o===se||o==="anonId")return u(se,s);var i=s.getState("user");return o?Ze(i,o):i},reset:function(o){return new Promise(function(i){S.dispatch({type:p.resetStart},i,o)})},ready:function(o){return s.on(p.ready,o)},on:function(o,i){if(!o||!G(i))return!1;if(o===p.bootstrap)throw new Error(".on disabled for "+o);var l=/Start$|Start:/;if(o==="*"){var E=function(x){return function(D){return function(N){return N.type.match(l)&&i({payload:N,instance:s,plugins:c}),D(N)}}},P=function(x){return function(D){return function(N){return N.type.match(l)||i({payload:N,instance:s,plugins:c}),D(N)}}};return j(E,je),j(P,_e),function(){m(E,je),m(P,_e)}}var I=o.match(l)?je:_e,q=function(x){return function(D){return function(N){return N.type===o&&i({payload:N,instance:s,plugins:c,abort:w}),D(N)}}};return j(q,I),function(){return m(q,I)}},once:function(o,i){if(!o||!G(i))return!1;if(o===p.bootstrap)throw new Error(".once disabled for "+o);var l=s.on(o,function(E){i({payload:E.payload,instance:s,plugins:c,abort:w}),l()});return l},getState:function(o){var i=S.getState();return o?Ze(i,o):Object.assign({},i)},dispatch:function(o){var i=le(o)?{type:o}:o;if(Ae.includes(i.type))throw new Error("reserved action "+i.type);var l=g({},i,{_:g({originalAction:i.type},o._||{})});S.dispatch(l)},enablePlugin:$.enable,disablePlugin:$.disable,plugins:$,storage:{getItem:a.getItem,setItem:function(o,i,l){S.dispatch({type:p.setItemStart,key:o,value:i,options:l})},removeItem:function(o,i){S.dispatch({type:p.removeItemStart,key:o,options:i})}},setAnonymousId:function(o,i){s.storage.setItem(Q,o,i)},events:{core:Ae,plugins:f}},b=r.middlewares.concat([function(o){return function(i){return function(l){return l.meta||(l.meta=bt()),i(l)}}},T(je),fn(s,A,{all:v,plugins:f}),dn(a),un(s),sn(s),T(_e)]),U={context:En,user:cn(a),page:Sn,track:vn,plugins:gn(A),queue:yn},M=me,z=me;if(X&&e.debug){var V=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;V&&(M=V({trace:!0,traceLimit:25})),z=function(){return arguments.length===0?Ct():F(typeof arguments[0])?yt():yt().apply(null,arguments)}}var C,J=function(o){return Object.keys(o).reduce(function(i,l){return Pn.includes(l)||(i[l]=o[l]),i},{})}(e),L=r.pluginsArray.reduce(function(o,i){var l=i.name,E=i.config,P=i.loaded,I=r.pluginEnabled[l];return o[l]={enabled:I,initialized:!!I&&Boolean(!i.initialize),loaded:Boolean(P()),config:E||{}},o},{}),B={context:J,user:_,plugins:L},S=Nt(function(o){for(var i=Object.keys(o),l={},E=0;E<i.length;E++){var P=i[E];typeof o[P]===Z&&(l[P]=o[P])}var I,q=Object.keys(l);try{(function(x){Object.keys(x).forEach(function(D){var N=x[D];if(typeof N(void 0,{type:"@@redux/INIT"})===K||typeof N(void 0,{type:rn})===K)throw new Error("reducer "+D+" "+K)})})(l)}catch(x){I=x}return function(x,D){if(x===void 0&&(x={}),I)throw I;for(var N=!1,H={},ae=0;ae<q.length;ae++){var ue=q[ae],Ye=x[ue],Le=(0,l[ue])(Ye,D);if(typeof Le===K){var Rt=on(ue,D);throw new Error(Rt)}H[ue]=Le,N=N||Le!==Ye}return N?H:x}}(g({},U,t)),B,z(M(an.apply(void 0,b))));S.dispatch=(C=S.dispatch,function(o,i,l){var E=g({},o,{meta:bt(o.meta,i,Je(l))});return C.apply(null,[E])});var k=Object.keys(c);S.dispatch({type:p.bootstrap,plugins:k,config:J,params:h,user:_,initialUser:n,persistedUser:O});var W=k.filter(function(o){return r.pluginEnabled[o]}),R=k.filter(function(o){return!r.pluginEnabled[o]});return S.dispatch({type:p.registerPlugins,plugins:k,enabled:r.pluginEnabled}),r.pluginsArray.map(function(o,i){var l=o.bootstrap,E=o.config,P=o.name;l&&G(l)&&l({instance:s,config:E,payload:o}),S.dispatch({type:p.registerPluginType(P),name:P,enabled:r.pluginEnabled[P],plugin:o}),r.pluginsArray.length===i+1&&S.dispatch({type:p.initializeStart,plugins:W,disabled:R})}),xn(function(o){S.dispatch({type:o?p.offline:p.online})}),function(o,i,l){setInterval(function(){return _t(o,i,l)},3e3)}(S,A,s),s}var je="before",_e="after",Ie="cookie",te=qt(),Dt=Ce,jn=Ce;function Lt(e){return te?Ce(e,"",-1):ve(e)}function qt(){if(te!==void 0)return te;var e="cookiecookie";try{Ce(e,e),te=document.cookie.indexOf(e)!==-1,Lt(e)}catch{te=!1}return te}function Ce(e,t,n,r,a,u){if(typeof window<"u"){var c=arguments.length>1;return te===!1&&(c?oe(e,t):ie(e)),c?document.cookie=e+"="+encodeURIComponent(t)+(n?"; expires="+new Date(+new Date+1e3*n).toUTCString()+(r?"; path="+r:"")+(a?"; domain="+a:"")+(u?"; secure":""):""):decodeURIComponent((("; "+document.cookie).split("; "+e+"=")[1]||"").split(";")[0])}}var we="localStorage",_n=We.bind(null,"localStorage");he("localStorage","getItem",ie);he("localStorage","setItem",oe);he("localStorage","removeItem",ve);var Se="sessionStorage",kn=We.bind(null,"sessionStorage");he("sessionStorage","getItem",ie);he("sessionStorage","setItem",oe);he("sessionStorage","removeItem",ve);function de(e){var t=e;try{if((t=JSON.parse(e))==="true")return!0;if(t==="false")return!1;if(F(t))return t;parseFloat(t)===t&&(t=parseFloat(t))}catch{}if(t!==null&&t!=="")return t}var An=_n(),Tn=kn(),$n=qt();function Vt(e,t){if(e){var n=Xe(t),r=!Qe(n),a=He(n)?de(localStorage.getItem(e)):void 0;if(r&&!ce(a))return a;var u=Ge(n)?de(Dt(e)):void 0;if(r&&u)return u;var c=Ke(n)?de(sessionStorage.getItem(e)):void 0;if(r&&c)return c;var f=ie(e);return r?f:{localStorage:a,sessionStorage:c,cookie:u,global:f}}}function Mn(e,t,n){if(e&&!ce(t)){var r={},a=Xe(n),u=JSON.stringify(t),c=!Qe(a);return He(a)&&(r[we]=ke(we,t,de(localStorage.getItem(e))),localStorage.setItem(e,u),c)?r[we]:Ge(a)&&(r[Ie]=ke(Ie,t,de(Dt(e))),jn(e,u),c)?r[Ie]:Ke(a)&&(r[Se]=ke(Se,t,de(sessionStorage.getItem(e))),sessionStorage.setItem(e,u),c)?r[Se]:(r[be]=ke(be,t,ie(e)),oe(e,t),c?r[be]:r)}}function zn(e,t){if(e){var n=Xe(t),r=Vt(e,Et),a={};return!ce(r.localStorage)&&He(n)&&(localStorage.removeItem(e),a[we]=r.localStorage),!ce(r.cookie)&&Ge(n)&&(Lt(e),a[Ie]=r.cookie),!ce(r.sessionStorage)&&Ke(n)&&(sessionStorage.removeItem(e),a[Se]=r.sessionStorage),!ce(r.global)&&De(n,be)&&(ve(e),a[be]=r.global),a}}function Xe(e){return e?le(e)?e:e.storage:St}function He(e){return An&&De(e,we)}function Ge(e){return $n&&De(e,Ie)}function Ke(e){return Tn&&De(e,Se)}function Qe(e){return e===Et||e==="all"}function De(e,t){return e===St||e===t||Qe(e)}function ke(e,t,n){return{location:e,current:t,previous:n}}var Un={setItem:Mn,getItem:Vt,removeItem:zn};function Cn(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function It(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function wt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?It(Object(n),!0).forEach(function(r){Cn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):It(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ln(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t={storage:Un};return Nn(wt(wt({},t),e))}export{Ln as Analytics,Dn as CONSTANTS,p as EVENTS,Ln as default,Ln as init};
