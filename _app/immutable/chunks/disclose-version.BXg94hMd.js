import{c as _}from"./runtime.DizAfNWN.js";function l(e){console.warn("hydration_mismatch")}const w=1,g=2,O=4,b=8,x=16,S=1,T=2,I="[",E="[!",y="]",m={},C=Symbol();let a=!1;function D(e){a=e}let r;function f(e){if(e===null)throw l(),m;return r=e}function R(){return f(r.nextSibling)}function L(e){if(a){if(r.nextSibling!==null)throw l(),m;r=e}}function M(){for(var e=0,n=r;;){if(n.nodeType===8){var t=n.data;if(t===y){if(e===0)return n;e-=1}else(t===I||t===E)&&(e+=1)}var s=n.nextSibling;n.remove(),n=s}}var d;function U(){if(d===void 0){d=window;var e=Element.prototype;e.__click=void 0,e.__className="",e.__attributes=null,e.__e=void 0,Text.prototype.__t=void 0}}function c(){return document.createTextNode("")}function H(e){if(!a)return e.firstChild;var n=r.firstChild;return n===null&&(n=r.appendChild(c())),f(n),n}function Y(e,n){if(!a){var t=e.firstChild;return t instanceof Comment&&t.data===""?t.nextSibling:t}return r}function B(e,n=!1){if(!a)return e.nextSibling;var t=r.nextSibling,s=t.nodeType;if(n&&s!==3){var i=c();return t==null||t.before(i),f(i),i}return f(t),t}function k(e){e.textContent=""}function N(e){var n=document.createElement("template");return n.innerHTML=e,n.content}function o(e,n){var t;(t=_).nodes??(t.nodes={start:e,end:n})}function F(e,n){var t=(n&S)!==0,s=(n&T)!==0,i,v=!e.startsWith("<!>");return()=>{if(a)return o(r,null),r;i||(i=N(v?e:"<!>"+e),t||(i=i.firstChild));var u=s?document.importNode(i,!0):i.cloneNode(!0);if(t){var h=u.firstChild,p=u.lastChild;o(h,p)}else o(u,u);return u}}function Z(){if(!a){var e=c();return o(e,e),e}var n=r;return n.nodeType!==3&&(n.before(n=c()),f(n)),o(n,n),n}function j(){if(a)return o(r,null),r;var e=document.createDocumentFragment(),n=document.createComment(""),t=c();return e.append(n,t),o(n,t),e}function q(e,n){if(a){_.nodes.end=r,R();return}e!==null&&e.before(n)}const P="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(P);export{I as H,O as P,C as U,q as a,m as b,D as c,f as d,c as e,Y as f,r as g,R as h,y as i,l as j,U as k,k as l,a as m,o as n,j as o,H as p,E as q,L as r,B as s,F as t,M as u,w as v,g as w,b as x,x as y,Z as z};
