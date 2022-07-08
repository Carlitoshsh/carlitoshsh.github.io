const de=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}};de();function y(){}function fe(t,e){for(const n in e)t[n]=e[n];return t}function ne(t){return t()}function W(){return Object.create(null)}function O(t){t.forEach(ne)}function ue(t){return typeof t=="function"}function j(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let N;function me(t,e){return N||(N=document.createElement("a")),N.href=e,t===N.href}function pe(t){return Object.keys(t).length===0}function oe(t,e,n,o){if(t){const r=le(t,e,n,o);return t[0](r)}}function le(t,e,n,o){return t[1]&&o?fe(n.ctx.slice(),t[1](o(e))):n.ctx}function ie(t,e,n,o){if(t[2]&&o){const r=t[2](o(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const i=[],l=Math.max(e.dirty.length,r.length);for(let s=0;s<l;s+=1)i[s]=e.dirty[s]|r[s];return i}return e.dirty|r}return e.dirty}function se(t,e,n,o,r,i){if(r){const l=le(e,n,o,i);t.p(l,r)}}function ae(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let o=0;o<n;o++)e[o]=-1;return e}return-1}function m(t,e){t.appendChild(e)}function _(t,e,n){t.insertBefore(e,n||null)}function g(t){t.parentNode.removeChild(t)}function ge(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function p(t){return document.createElement(t)}function F(t){return document.createTextNode(t)}function v(){return F(" ")}function he(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function f(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function ve(t){return Array.from(t.childNodes)}function P(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let K;function M(t){K=t}const A=[],X=[],T=[],R=[],_e=Promise.resolve();let Y=!1;function ye(){Y||(Y=!0,_e.then(ce))}function I(t){T.push(t)}const G=new Set;let H=0;function ce(){const t=K;do{for(;H<A.length;){const e=A[H];H++,M(e),be(e.$$)}for(M(null),A.length=0,H=0;X.length;)X.pop()();for(let e=0;e<T.length;e+=1){const n=T[e];G.has(n)||(G.add(n),n())}T.length=0}while(A.length);for(;R.length;)R.pop()();Y=!1,G.clear(),M(t)}function be(t){if(t.fragment!==null){t.update(),O(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(I)}}const J=new Set;let C;function $e(){C={r:0,c:[],p:C}}function ke(){C.r||O(C.c),C=C.p}function b(t,e){t&&t.i&&(J.delete(t),t.i(e))}function $(t,e,n,o){if(t&&t.o){if(J.has(t))return;J.add(t),C.c.push(()=>{J.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}function S(t){t&&t.c()}function x(t,e,n,o){const{fragment:r,on_mount:i,on_destroy:l,after_update:s}=t.$$;r&&r.m(e,n),o||I(()=>{const a=i.map(ne).filter(ue);l?l.push(...a):O(a),t.$$.on_mount=[]}),s.forEach(I)}function w(t,e){const n=t.$$;n.fragment!==null&&(O(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function xe(t,e){t.$$.dirty[0]===-1&&(A.push(t),ye(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function q(t,e,n,o,r,i,l,s=[-1]){const a=K;M(t);const d=t.$$={fragment:null,ctx:null,props:i,update:y,not_equal:r,bound:W(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(a?a.$$.context:[])),callbacks:W(),dirty:s,skip_bound:!1,root:e.target||a.$$.root};l&&l(d.root);let c=!1;if(d.ctx=n?n(t,e.props||{},(u,h,...E)=>{const k=E.length?E[0]:h;return d.ctx&&r(d.ctx[u],d.ctx[u]=k)&&(!d.skip_bound&&d.bound[u]&&d.bound[u](k),c&&xe(t,u)),h}):[],d.update(),c=!0,O(d.before_update),d.fragment=o?o(d.ctx):!1,e.target){if(e.hydrate){const u=ve(e.target);d.fragment&&d.fragment.l(u),u.forEach(g)}else d.fragment&&d.fragment.c();e.intro&&b(t.$$.fragment),x(t,e.target,e.anchor,e.customElement),ce()}M(a)}class L{$destroy(){w(this,1),this.$destroy=y}$on(e,n){const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(n),()=>{const r=o.indexOf(n);r!==-1&&o.splice(r,1)}}$set(e){this.$$set&&!pe(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function we(t){let e,n,o,r,i,l;return{c(){e=p("header"),n=p("h2"),n.textContent="CAGH",o=v(),r=p("div"),r.textContent="\u{1F313}",f(n,"id","my-site-brand"),f(n,"class","svelte-ysb5kw"),f(r,"id","color-switch"),f(r,"class","svelte-ysb5kw"),f(e,"class","svelte-ysb5kw")},m(s,a){_(s,e,a),m(e,n),m(e,o),m(e,r),i||(l=he(r,"click",t[0]),i=!0)},p:y,i:y,o:y,d(s){s&&g(e),i=!1,l()}}}function Ce(t){const e=window.matchMedia("(prefers-color-scheme: dark)");e.matches;function n(){document.body.classList.toString(),e.matches?document.body.classList.toggle("light-theme"):document.body.classList.toggle("dark-theme")}return[n]}class Se extends L{constructor(e){super(),q(this,e,Ce,we,j,{})}}function je(t){let e,n,o,r;return{c(){e=p("footer"),n=p("span"),n.textContent=`${new Date().getFullYear()}`,o=v(),r=p("span"),r.textContent="Designed by CAGH",f(r,"class","by-cagh svelte-1o4vr0v"),f(e,"class","svelte-1o4vr0v")},m(i,l){_(i,e,l),m(e,n),m(e,o),m(e,r)},p:y,i:y,o:y,d(i){i&&g(e)}}}class qe extends L{constructor(e){super(),q(this,e,null,je,j,{})}}function Le(t){let e,n,o,r,i,l,s,a,d,c,u,h,E,k,D;return{c(){e=v(),n=p("div"),o=p("img"),i=v(),l=p("div"),s=p("h4"),s.textContent="Carlos Gomez",a=v(),d=p("h5"),d.textContent=`${B}`,c=v(),u=p("a"),h=p("i"),E=v(),k=p("a"),D=p("i"),f(o,"fetchpriority","low"),me(o.src,r="https://media-exp2.licdn.com/dms/image/C4E03AQEw82g5bgYrlQ/profile-displayphoto-shrink_800_800/0/1633659774537?e=1662595200&v=beta&t=5OfHFmjhKhiWn7JXLuvayj2jW7JC23sMjsbO36YnDGw")||f(o,"src",r),f(o,"alt","Carlos"),f(o,"class","svelte-1exnmd5"),f(h,"class","devicon-linkedin-plain svelte-1exnmd5"),f(u,"href","https://linkedin.com/in/"+B),f(u,"rel","noopener noreferrer"),f(u,"target","_blank"),f(u,"class","svelte-1exnmd5"),f(D,"class","devicon-github-original svelte-1exnmd5"),f(k,"href","https://github.com/"+B),f(k,"target","_blank"),f(k,"rel","noopener noreferrer"),f(k,"class","svelte-1exnmd5"),f(l,"class","social"),f(n,"class","profile svelte-1exnmd5")},m(z,Q){_(z,e,Q),_(z,n,Q),m(n,o),m(n,i),m(n,l),m(l,s),m(l,a),m(l,d),m(l,c),m(l,u),m(u,h),m(l,E),m(l,k),m(k,D)},p:y,i:y,o:y,d(z){z&&g(e),z&&g(n)}}}let B="Carlitoshsh";class Ee extends L{constructor(e){super(),q(this,e,null,Le,j,{})}}function ze(t){let e,n;const o=t[1].default,r=oe(o,t,t[0],null);return{c(){e=p("main"),r&&r.c(),f(e,"class","svelte-lme7gr")},m(i,l){_(i,e,l),r&&r.m(e,null),n=!0},p(i,[l]){r&&r.p&&(!n||l&1)&&se(r,o,i,i[0],n?ie(o,i[0],l,null):ae(i[0]),null)},i(i){n||(b(r,i),n=!0)},o(i){$(r,i),n=!1},d(i){i&&g(e),r&&r.d(i)}}}function Ae(t,e,n){let{$$slots:o={},$$scope:r}=e;return t.$$set=i=>{"$$scope"in i&&n(0,r=i.$$scope)},[r,o]}class Me extends L{constructor(e){super(),q(this,e,Ae,ze,j,{})}}function U(t){let e,n;return{c(){e=p("i"),f(e,"class",n="cagh-icon "+t[0]+" svelte-4ds9ov")},m(o,r){_(o,e,r)},p(o,r){r&1&&n!==(n="cagh-icon "+o[0]+" svelte-4ds9ov")&&f(e,"class",n)},d(o){o&&g(e)}}}function Oe(t){let e,n,o,r,i,l,s,a,d,c=t[0]!=""&&U(t);return{c(){e=p("div"),n=p("div"),c&&c.c(),o=v(),r=p("div"),i=p("h4"),l=F(t[1]),s=v(),a=p("p"),d=F(t[2]),f(n,"class","icon"),f(r,"class","description svelte-4ds9ov"),f(e,"class","card svelte-4ds9ov")},m(u,h){_(u,e,h),m(e,n),c&&c.m(n,null),m(e,o),m(e,r),m(r,i),m(i,l),m(r,s),m(r,a),m(a,d)},p(u,[h]){u[0]!=""?c?c.p(u,h):(c=U(u),c.c(),c.m(n,null)):c&&(c.d(1),c=null),h&2&&P(l,u[1]),h&4&&P(d,u[2])},i:y,o:y,d(u){u&&g(e),c&&c.d()}}}function Ne(t,e,n){let{icon:o}=e,{name:r}=e,{description:i}=e;return t.$$set=l=>{"icon"in l&&n(0,o=l.icon),"name"in l&&n(1,r=l.name),"description"in l&&n(2,i=l.description)},[o,r,i]}class He extends L{constructor(e){super(),q(this,e,Ne,Oe,j,{icon:0,name:1,description:2})}}function V(t){let e,n;return{c(){e=p("h4"),n=F(t[0]),f(e,"class","svelte-fow3cq")},m(o,r){_(o,e,r),m(e,n)},p(o,r){r&1&&P(n,o[0])},d(o){o&&g(e)}}}function Te(t){let e,n,o,r=t[0]&&V(t);const i=t[2].default,l=oe(i,t,t[1],null);return{c(){e=p("section"),r&&r.c(),n=v(),l&&l.c(),f(e,"class","svelte-fow3cq")},m(s,a){_(s,e,a),r&&r.m(e,null),m(e,n),l&&l.m(e,null),o=!0},p(s,[a]){s[0]?r?r.p(s,a):(r=V(s),r.c(),r.m(e,n)):r&&(r.d(1),r=null),l&&l.p&&(!o||a&2)&&se(l,i,s,s[1],o?ie(i,s[1],a,null):ae(s[1]),null)},i(s){o||(b(l,s),o=!0)},o(s){$(l,s),o=!1},d(s){s&&g(e),r&&r.d(),l&&l.d(s)}}}function Je(t,e,n){let{$$slots:o={},$$scope:r}=e,{title:i=void 0}=e;return t.$$set=l=>{"title"in l&&n(0,i=l.title),"$$scope"in l&&n(1,r=l.$$scope)},[i,r,o]}class Z extends L{constructor(e){super(),q(this,e,Je,Te,j,{title:0})}}const ee=[{icon:"devicon-html5-plain-wordmark",name:"HTML",description:"Hypertext Markup Language"},{icon:"devicon-css3-plain-wordmark",name:"CSS",description:"Cascading Style Sheets"},{icon:"devicon-javascript-plain",name:"JavaScript",description:"JavaScript"},{icon:"devicon-typescript-plain",name:"TypeScript",description:"TypeScript"},{icon:"devicon-dotnetcore-plain",name:".NET",description:".NET Core"},{icon:"devicon-angularjs-plain",name:"Angular",description:"Angular"},{icon:"devicon-java-plain",name:"Java",description:"Java"}];function te(t,e,n){const o=t.slice();return o[0]=e[n],o}function Fe(t){let e,n;return e=new Ee({}),{c(){S(e.$$.fragment)},m(o,r){x(e,o,r),n=!0},i(o){n||(b(e.$$.fragment,o),n=!0)},o(o){$(e.$$.fragment,o),n=!1},d(o){w(e,o)}}}function re(t){let e,n;return e=new He({props:{icon:t[0].icon,name:t[0].name,description:t[0].description!=t[0].name?t[0].description:""}}),{c(){S(e.$$.fragment)},m(o,r){x(e,o,r),n=!0},p:y,i(o){n||(b(e.$$.fragment,o),n=!0)},o(o){$(e.$$.fragment,o),n=!1},d(o){w(e,o)}}}function De(t){let e,n,o=ee,r=[];for(let l=0;l<o.length;l+=1)r[l]=re(te(t,o,l));const i=l=>$(r[l],1,1,()=>{r[l]=null});return{c(){e=p("div");for(let l=0;l<r.length;l+=1)r[l].c();f(e,"class","cards svelte-uexfji")},m(l,s){_(l,e,s);for(let a=0;a<r.length;a+=1)r[a].m(e,null);n=!0},p(l,s){if(s&0){o=ee;let a;for(a=0;a<o.length;a+=1){const d=te(l,o,a);r[a]?(r[a].p(d,s),b(r[a],1)):(r[a]=re(d),r[a].c(),b(r[a],1),r[a].m(e,null))}for($e(),a=o.length;a<r.length;a+=1)i(a);ke()}},i(l){if(!n){for(let s=0;s<o.length;s+=1)b(r[s]);n=!0}},o(l){r=r.filter(Boolean);for(let s=0;s<r.length;s+=1)$(r[s]);n=!1},d(l){l&&g(e),ge(r,l)}}}function Ge(t){let e,n,o,r,i,l;return o=new Z({props:{$$slots:{default:[Fe]},$$scope:{ctx:t}}}),i=new Z({props:{title:"Skills",$$slots:{default:[De]},$$scope:{ctx:t}}}),{c(){e=p("h2"),e.textContent="\u26A0\uFE0F Site under construction",n=v(),S(o.$$.fragment),r=v(),S(i.$$.fragment)},m(s,a){_(s,e,a),_(s,n,a),x(o,s,a),_(s,r,a),x(i,s,a),l=!0},p(s,a){const d={};a&8&&(d.$$scope={dirty:a,ctx:s}),o.$set(d);const c={};a&8&&(c.$$scope={dirty:a,ctx:s}),i.$set(c)},i(s){l||(b(o.$$.fragment,s),b(i.$$.fragment,s),l=!0)},o(s){$(o.$$.fragment,s),$(i.$$.fragment,s),l=!1},d(s){s&&g(e),s&&g(n),w(o,s),s&&g(r),w(i,s)}}}function Be(t){let e,n,o,r,i,l,s,a,d;return r=new Se({}),l=new Me({props:{$$slots:{default:[Ge]},$$scope:{ctx:t}}}),a=new qe({}),{c(){e=p("link"),n=v(),o=p("main"),S(r.$$.fragment),i=v(),S(l.$$.fragment),s=v(),S(a.$$.fragment),f(e,"rel","stylesheet"),f(e,"href","https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"),f(o,"class","parent")},m(c,u){m(document.head,e),_(c,n,u),_(c,o,u),x(r,o,null),m(o,i),x(l,o,null),m(o,s),x(a,o,null),d=!0},p(c,[u]){const h={};u&8&&(h.$$scope={dirty:u,ctx:c}),l.$set(h)},i(c){d||(b(r.$$.fragment,c),b(l.$$.fragment,c),b(a.$$.fragment,c),d=!0)},o(c){$(r.$$.fragment,c),$(l.$$.fragment,c),$(a.$$.fragment,c),d=!1},d(c){g(e),c&&g(n),c&&g(o),w(r),w(l),w(a)}}}class Pe extends L{constructor(e){super(),q(this,e,null,Be,j,{})}}new Pe({target:document.getElementById("app")});
