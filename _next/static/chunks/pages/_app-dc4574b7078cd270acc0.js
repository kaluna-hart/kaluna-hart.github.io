_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{"/0+H":function(e,t,r){"use strict";t.__esModule=!0,t.isInAmpMode=a,t.useAmp=function(){return a(n.default.useContext(i.AmpStateContext))};var o,n=(o=r("q1tI"))&&o.__esModule?o:{default:o},i=r("lwAK");function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=void 0!==t&&t,o=e.hybrid,n=void 0!==o&&o,i=e.hasQuery,a=void 0!==i&&i;return r||n&&a}},0:function(e,t,r){r("74v/"),e.exports=r("nOHt")},"74v/":function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r("hUgY")}])},"8Kt/":function(e,t,r){"use strict";r("lSNA");t.__esModule=!0,t.defaultHead=u,t.default=void 0;var o,n=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=d();if(t&&t.has(e))return t.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var i=o?Object.getOwnPropertyDescriptor(e,n):null;i&&(i.get||i.set)?Object.defineProperty(r,n,i):r[n]=e[n]}r.default=e,t&&t.set(e,r);return r}(r("q1tI")),i=(o=r("Xuae"))&&o.__esModule?o:{default:o},a=r("lwAK"),c=r("FYa8"),s=r("/0+H");function d(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return d=function(){return e},e}function u(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[n.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(n.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===n.default.Fragment?e.concat(n.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var r=n.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(l,[]).reverse().concat(u(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,r=new Set,o={};return function(n){var i=!0;if(n.key&&"number"!==typeof n.key&&n.key.indexOf("$")>0){var a=n.key.slice(n.key.indexOf("$")+1);e.has(a)?i=!1:e.add(a)}switch(n.type){case"title":case"base":t.has(n.type)?i=!1:t.add(n.type);break;case"meta":for(var c=0,s=f.length;c<s;c++){var d=f[c];if(n.props.hasOwnProperty(d))if("charSet"===d)r.has(d)?i=!1:r.add(d);else{var u=n.props[d],l=o[d]||new Set;l.has(u)?i=!1:(l.add(u),o[d]=l)}}}return i}}()).reverse().map((function(e,t){var r=e.key||t;return n.default.cloneElement(e,{key:r})}))}function m(e){var t=e.children,r=(0,n.useContext)(a.AmpStateContext),o=(0,n.useContext)(c.HeadManagerContext);return n.default.createElement(i.default,{reduceComponentsToState:p,headManager:o,inAmpMode:(0,s.isInAmpMode)(r)},t)}m.rewind=function(){};var h=m;t.default=h},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,r){var o=r("WkPL");e.exports=function(e){if(Array.isArray(e))return o(e)}},RIqP:function(e,t,r){var o=r("Ijbi"),n=r("EbDI"),i=r("ZhPi"),a=r("Bnag");e.exports=function(e){return o(e)||n(e)||i(e)||a()}},Xuae:function(e,t,r){"use strict";var o=r("RIqP"),n=r("lwsE"),i=r("W8MJ"),a=(r("PJYZ"),r("7W2i")),c=r("a1gu"),s=r("Nsbk");function d(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,o=s(e);if(t){var n=s(this).constructor;r=Reflect.construct(o,arguments,n)}else r=o.apply(this,arguments);return c(this,r)}}t.__esModule=!0,t.default=void 0;var u=r("q1tI"),l=function(e){a(r,e);var t=d(r);function r(e){var i;return n(this,r),(i=t.call(this,e))._hasHeadManager=void 0,i.emitChange=function(){i._hasHeadManager&&i.props.headManager.updateHead(i.props.reduceComponentsToState(o(i.props.headManager.mountedInstances),i.props))},i._hasHeadManager=i.props.headManager&&i.props.headManager.mountedInstances,i}return i(r,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),r}(u.Component);t.default=l},hUgY:function(e,t,r){"use strict";r.r(t);var o=r("q1tI"),n=r.n(o),i=r("8Kt/"),a=r.n(i),c=r("2A+t"),s=r("qKvR"),d=r("ZdEh"),u=function(e){return"--theme-ui-"+e},l=function(e,t){return"var("+u(e)+", "+t+")"},f=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return e.filter(Boolean).join("-")},p={fontWeights:!0,lineHeights:!0},m={useCustomProperties:!0,initialColorModeName:!0,initialColorMode:!0},h=function(e,t){return"number"!==typeof t||p[e]?t:t+"px"},g=function(e,t,r){var o=Array.isArray(e)?[]:{};for(var n in e){var i=e[n],a=f(t,n);if(i&&"object"===typeof i)o[n]=g(i,a,n);else if(m[n])o[n]=i;else{var c=h(r||n,i);o[n]=l(a,c)}}return o},b=function(e,t){var r={};for(var o in t)if("modes"!==o){var n=f(e,o),i=t[o];i&&"object"===typeof i?r=Object.assign({},r,b(n,i)):r[u(n)]=i}return r},v=function(e){try{return window.localStorage.getItem("theme-ui-color-mode")||e}catch(t){console.warn("localStorage is disabled and color mode might not work as expected.","Please check your Site Settings.",t)}},y=function(e){try{window.localStorage.setItem("theme-ui-color-mode",e)}catch(t){console.warn("localStorage is disabled and color mode might not work as expected.","Please check your Site Settings.",t)}},x=function(e){void 0===e&&(e={});var t=n.a.useState(e.initialColorModeName||"default"),r=t[0],o=t[1];return n.a.useEffect((function(){var t=v();if(document.body.classList.remove("theme-ui-"+t),t||!e.useColorSchemeMediaQuery)t&&t!==r&&o(t);else{var n=function(){var e="(prefers-color-scheme: dark)",t=window.matchMedia?window.matchMedia(e):{},r=window.matchMedia?window.matchMedia("(prefers-color-scheme: light)"):{};return t.media===e&&t.matches?"dark":"(prefers-color-scheme: light)"===r.media&&r.matches?"light":"default"}();o(n)}}),[]),n.a.useEffect((function(){r&&y(r)}),[r]),[r,o]},w=function(){return Object(c.c)(s.a,{styles:function(e){return function(e){if(void 0===e&&(e={}),!e.colors||!1===e.useBodyStyles)return{};if(!1===e.useCustomProperties||!e.colors.modes)return Object(d.a)({body:{color:"text",bg:"background"}})(e);var t=e.rawColors||e.colors,r=t.modes,o=b("colors",t);return Object.keys(r).forEach((function(e){o["&.theme-ui-"+e]=b("colors",r[e])})),Object(d.a)({body:Object.assign({},o,{color:"text",bg:"background"})})(e)}(e)}})},S=function(e){var t=e.children,r=Object(c.e)(),o=x(r.theme),n=o[0],i=o[1],a=function(e,t){if(!t)return e;var r=Object(d.b)(e,"colors.modes",{});return c.d.all({},e,{colors:Object(d.b)(r,t,{})})}(r.theme||{},n),u=Object.assign({},a);!1!==a.useCustomProperties&&(u.colors=g(u.colors,"colors"));var l=Object.assign({},r,{theme:a,colorMode:n,setColorMode:i});return Object(c.c)(s.b.Provider,{value:u},Object(c.c)(c.a.Provider,{value:l},Object(c.c)(w,{key:"color-mode"}),t))},j=r("5D9J"),k=r("7ljp"),O={inlineCode:"code",thematicBreak:"hr",root:"div"},C=function(e){return function(t){return Object(d.a)(Object(d.b)(t.theme,"styles."+e))(t.theme)}},M=Object(j.a)("div")(C("div")),_={};["p","b","i","a","h1","h2","h3","h4","h5","h6","img","pre","code","ol","ul","li","blockquote","hr","em","table","tr","th","td","em","strong","del","inlineCode","thematicBreak","div","root"].forEach((function(e){var t;_[e]=Object(j.a)(O[t=e]||t)(C(e)),M[e]=_[e]}));var R=function(e){var t=Object.assign({},_);return Object.keys(e).forEach((function(r){t[r]=Object(j.a)(e[r])(C(r))})),t},B=function(e){var t=e.components,r=e.children,o=Object(k.c)();return Object(c.c)(k.a,{components:R(Object.assign({},o,t)),children:r})},A=function(e,t,r,o,n){for(t=t&&t.split?t.split("."):[t],o=0;o<t.length;o++)e=e?e[t[o]]:n;return e===n?r:e},W=[40,52,64].map((function(e){return e+"em"})),z={space:[0,4,8,16,32,64,128,256,512],fontSizes:[12,14,16,20,24,32,48,64,72]},E={bg:"backgroundColor",m:"margin",mt:"marginTop",mr:"marginRight",mb:"marginBottom",ml:"marginLeft",mx:"marginX",my:"marginY",p:"padding",pt:"paddingTop",pr:"paddingRight",pb:"paddingBottom",pl:"paddingLeft",px:"paddingX",py:"paddingY"},I={marginX:["marginLeft","marginRight"],marginY:["marginTop","marginBottom"],paddingX:["paddingLeft","paddingRight"],paddingY:["paddingTop","paddingBottom"],size:["width","height"]},P={color:"colors",backgroundColor:"colors",borderColor:"colors",margin:"space",marginTop:"space",marginRight:"space",marginBottom:"space",marginLeft:"space",marginX:"space",marginY:"space",padding:"space",paddingTop:"space",paddingRight:"space",paddingBottom:"space",paddingLeft:"space",paddingX:"space",paddingY:"space",top:"space",right:"space",bottom:"space",left:"space",gridGap:"space",gridColumnGap:"space",gridRowGap:"space",gap:"space",columnGap:"space",rowGap:"space",fontFamily:"fonts",fontSize:"fontSizes",fontWeight:"fontWeights",lineHeight:"lineHeights",letterSpacing:"letterSpacings",border:"borders",borderTop:"borders",borderRight:"borders",borderBottom:"borders",borderLeft:"borders",borderWidth:"borderWidths",borderStyle:"borderStyles",borderRadius:"radii",borderTopRightRadius:"radii",borderTopLeftRadius:"radii",borderBottomRightRadius:"radii",borderBottomLeftRadius:"radii",borderTopWidth:"borderWidths",borderTopColor:"colors",borderTopStyle:"borderStyles",borderBottomWidth:"borderWidths",borderBottomColor:"colors",borderBottomStyle:"borderStyles",borderLeftWidth:"borderWidths",borderLeftColor:"colors",borderLeftStyle:"borderStyles",borderRightWidth:"borderWidths",borderRightColor:"colors",borderRightStyle:"borderStyles",outlineColor:"colors",boxShadow:"shadows",textShadow:"shadows",zIndex:"zIndices",width:"sizes",minWidth:"sizes",maxWidth:"sizes",height:"sizes",minHeight:"sizes",maxHeight:"sizes",flexBasis:"sizes",size:"sizes",fill:"colors",stroke:"colors"},F=function(e,t){if("number"!==typeof t||t>=0)return A(e,t,t);var r=Math.abs(t),o=A(e,r,r);return"string"===typeof o?"-"+o:-1*o},H=["margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","top","bottom","left","right"].reduce((function(e,t){var r;return Object.assign({},e,((r={})[t]=F,r))}),{}),L=function(e){return function(t){void 0===t&&(t={});var r=Object.assign({},z,t.theme||t),o={},n=function(e){return function(t){var r={},o=A(t,"breakpoints",W),n=[null].concat(o.map((function(e){return"@media screen and (min-width: "+e+")"})));for(var i in e){var a="function"===typeof e[i]?e[i](t):e[i];if(null!=a)if(Array.isArray(a))for(var c=0;c<a.slice(0,n.length).length;c++){var s=n[c];s?(r[s]=r[s]||{},null!=a[c]&&(r[s][i]=a[c])):r[i]=a[c]}else r[i]=a}return r}}("function"===typeof e?e(r):e)(r);for(var i in n){var a=n[i],c="function"===typeof a?a(r):a;if("variant"!==i)if(c&&"object"===typeof c)o[i]=L(c)(r);else{var s=A(E,i,i),d=A(P,s),u=A(r,d,A(r,s,{})),l=A(H,s,A)(u,c,c);if(I[s])for(var f=I[s],p=0;p<f.length;p++)o[f[p]]=l;else o[s]=l}else{var m=L(A(r,c))(r);o=Object.assign({},o,m)}}return o}},T=function(){return Object(c.c)(s.a,{styles:function(e){if(!1===e.useBodyStyles||e.styles&&!e.styles.root)return!1;var t=!1===e.useBorderBox?null:"border-box";return L({"*":{boxSizing:t},body:{margin:0,variant:"styles.root"}})(e)}})},X=function(e){var t=e.theme,r=e.components,o=e.children;return"function"===typeof Object(c.e)().setColorMode?Object(c.c)(c.b,{theme:t},Object(c.c)(B,{components:r,children:o})):Object(c.c)(c.b,{theme:t},Object(c.c)(S,null,Object(c.c)(T),Object(c.c)(B,{components:r,children:o})))},D={colors:{text:"#333",background:"#FFFFFF",imBackground:"#F0FFF0",gray:"#6c6c6c",accent:"#3f3f3f"},fonts:{body:'"\u30d2\u30e9\u30ae\u30ce \u89d2\u30b4", "\u30e1\u30a4\u30ea\u30aa", sans-serif',heading:"Cardo",cursive:"Dancing Script",monospace:"Menlo, monospace",footer:"Roboto"},fontSizes:[12,14,16,18,24,32,48,64,72],space:[0,4,8,16,32,64,128,256,512],text:{default:{color:"text"},heading:{fontFamily:"heading"},codeName:{fontFamily:"cursive",fontSize:[5]},copylight:{fontFamily:"footer",fontSize:"0.5em"}},buttons:{primary:{bg:"background",color:"gray","&:hover":{bg:"imBackground"}},icon:{color:"gray",borderRadius:"50%",":hover":{bg:"imBackground"}},floating:{textAlign:"center",lineHeight:"inherit",transition:"0.3s",boxShadow:"0 2px 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)",border:"solid 2px",borderRadius:"100%",bg:"imBackground",":hover":{boxShadow:"0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2)"}}},breakpoints:["40em","52em","64em"],layout:{skillBox:{boxShadow:"0 2px 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)",bg:"imBackground",mx:"0.3em",borderRadius:"0.5em",overflowX:"scroll",zIndex:3},pageHeader:{textAlign:"center",fontFamily:"cursive",whiteSpace:"nowrap",fontSize:[4,5,5,6]},profileContent:{textAlign:"center",justifyContent:"center",display:"flex",flexDirection:"column",maxWidth:["95%","40em",null,"70em"],minWidth:["90%","40em",null,"60em"],m:"auto"}},styles:{a:{wordBreak:"break-word"},profile:{section:{display:"inline-block",textAlign:"left",position:"relative",border:"solid 1px",borderRadius:"15px",mx:"auto",maxWidth:"100%",minWidth:"100%",fontSize:["1em","1.5em"],my:"0.8em",boxShadow:"0 5px 20px 0 rgba(0, 0, 0, 0.2), 0 2px 5px 0 rgba(0, 0, 0, 0.4)","& h2":{position:"absolute",top:"-0.7em",left:"0.7em",bg:"white",borderRadius:"5px",fontSize:["1em","1.5em"],boxShadow:"0 5px 20px 0 rgba(0, 0, 0, 0.1) inset"}}},blog:{postList:{mx:"auto",maxWidth:"100%",minWidth:"100%",fontSize:["1em","1.5em"],my:"0.8em"},categoryList:{flexDirection:"row",overflowX:"scroll"},categoryBox:{textAlign:"center",fontSize:"inherit",border:"solid thin",minWidth:"6em",flexBasis:"0 0 6em",mx:"0.1em"},articleList:{flexFlow:"column",overflowY:"scroll"}}},cards:{article:{display:"flex",flexFlow:"row"}}};n.a.createElement;t.default=function(e){var t=e.Component,r=e.pageProps;return n.a.createElement(X,{theme:D},n.a.createElement(a.a,null,n.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"})),n.a.createElement(t,r))}},lwAK:function(e,t,r){"use strict";var o;t.__esModule=!0,t.AmpStateContext=void 0;var n=((o=r("q1tI"))&&o.__esModule?o:{default:o}).default.createContext({});t.AmpStateContext=n}},[[0,2,3,0,4]]]);