import{S as G,i as Q,s as U,e as j,c as N,a as y,d as i,b as C,f as _,j as D,l as H,F as k,t as b,k as q,K as W,g as d,J as B,L as J}from"../../chunks/vendor-32d49ddd.js";import{c as X}from"../../chunks/catalog2-652cc0cf.js";function K(u,l,r){const a=u.slice();return a[2]=l[r],a}function L(u,l,r){const a=u.slice();return a[2]=l[r],a}function Y(u){let l,r=u[2].title+"",a,c,o,P=u[2].authors+"",R,A,n,w,T=u[2].whenpub+"",S,I,E,v,m=u[2].price&&Z(u);return{c(){l=j("span"),a=b(r),c=b(` by 
      `),o=j("span"),R=b(P),A=D(),n=j("span"),w=b("("),S=b(T),I=b(")"),E=D(),m&&m.c(),v=q(),this.h()},l(e){l=N(e,"SPAN",{class:!0});var p=y(l);a=d(p,r),p.forEach(i),c=d(e,` by 
      `),o=N(e,"SPAN",{class:!0});var s=y(o);R=d(s,P),s.forEach(i),A=H(e),n=N(e,"SPAN",{class:!0});var t=y(n);w=d(t,"("),S=d(t,T),I=d(t,")"),t.forEach(i),E=H(e),m&&m.l(e),v=q(),this.h()},h(){C(l,"class","title svelte-13mktbj"),C(o,"class","authors"),C(n,"class","when")},m(e,p){_(e,l,p),k(l,a),_(e,c,p),_(e,o,p),k(o,R),_(e,A,p),_(e,n,p),k(n,w),k(n,S),k(n,I),_(e,E,p),m&&m.m(e,p),_(e,v,p)},p(e,p){e[2].price&&m.p(e,p)},d(e){e&&i(l),e&&i(c),e&&i(o),e&&i(A),e&&i(n),e&&i(E),m&&m.d(e),e&&i(v)}}}function Z(u){let l,r,a=u[2].price+"",c;return{c(){l=j("span"),r=b("$"),c=b(a),this.h()},l(o){l=N(o,"SPAN",{class:!0});var P=y(l);r=d(P,"$"),c=d(P,a),P.forEach(i),this.h()},h(){C(l,"class","price")},m(o,P){_(o,l,P),k(l,r),k(l,c)},p:B,d(o){o&&i(l)}}}function O(u){let l,r=u[2].isTRS80&&Y(u);return{c(){l=j("div"),r&&r.c(),this.h()},l(a){l=N(a,"DIV",{class:!0});var c=y(l);r&&r.l(c),c.forEach(i),this.h()},h(){C(l,"class","product svelte-13mktbj")},m(a,c){_(a,l,c),r&&r.m(l,null)},p(a,c){a[2].isTRS80&&r.p(a,c)},d(a){a&&i(l),r&&r.d()}}}function x(u){let l,r=u[2].title+"",a,c,o,P=u[2].authors+"",R,A,n,w,T=u[2].whenpub+"",S,I,E,v,m,e=u[2].isAtari+"",p;return{c(){l=j("span"),a=b(r),c=b(` by 
      `),o=j("span"),R=b(P),A=D(),n=j("span"),w=b("("),S=b(T),I=b(")"),E=D(),v=j("span"),m=b("$"),p=b(e),this.h()},l(s){l=N(s,"SPAN",{class:!0});var t=y(l);a=d(t,r),t.forEach(i),c=d(s,` by 
      `),o=N(s,"SPAN",{class:!0});var h=y(o);R=d(h,P),h.forEach(i),A=H(s),n=N(s,"SPAN",{class:!0});var f=y(n);w=d(f,"("),S=d(f,T),I=d(f,")"),f.forEach(i),E=H(s),v=N(s,"SPAN",{class:!0});var $=y(v);m=d($,"$"),p=d($,e),$.forEach(i),this.h()},h(){C(l,"class","title svelte-13mktbj"),C(o,"class","authors"),C(n,"class","when"),C(v,"class","price")},m(s,t){_(s,l,t),k(l,a),_(s,c,t),_(s,o,t),k(o,R),_(s,A,t),_(s,n,t),k(n,w),k(n,S),k(n,I),_(s,E,t),_(s,v,t),k(v,m),k(v,p)},p:B,d(s){s&&i(l),s&&i(c),s&&i(o),s&&i(A),s&&i(n),s&&i(E),s&&i(v)}}}function z(u){let l,r,a=u[2].isAtari&&x(u);return{c(){l=j("div"),a&&a.c(),r=D(),this.h()},l(c){l=N(c,"DIV",{class:!0});var o=y(l);a&&a.l(o),r=H(o),o.forEach(i),this.h()},h(){C(l,"class","product svelte-13mktbj")},m(c,o){_(c,l,o),a&&a.m(l,null),k(l,r)},p(c,o){c[2].isAtari&&a.p(c,o)},d(c){c&&i(l),a&&a.d()}}}function g(u){let l,r,a,c,o,P,R,A,n,w,T,S,I,E,v,m=u[0],e=[];for(let t=0;t<m.length;t+=1)e[t]=O(L(u,m,t));let p=u[0],s=[];for(let t=0;t<p.length;t+=1)s[t]=z(K(u,p,t));return{c(){l=D(),r=j("h1"),a=b("Acorn's Products"),c=D(),o=j("div"),P=b("Acorn published software for the Radio Shack TRS-80, Atari Computer and IBM PC Compatibles."),R=D(),A=j("h2"),n=b("TRS-80 Programs"),w=D();for(let t=0;t<e.length;t+=1)e[t].c();T=D(),S=j("h2"),I=b("Atari Programs"),E=D();for(let t=0;t<s.length;t+=1)s[t].c();v=q(),this.h()},l(t){W('[data-svelte="svelte-17bgpg7"]',document.head).forEach(i),l=H(t),r=N(t,"H1",{class:!0});var f=y(r);a=d(f,"Acorn's Products"),f.forEach(i),c=H(t),o=N(t,"DIV",{});var $=y(o);P=d($,"Acorn published software for the Radio Shack TRS-80, Atari Computer and IBM PC Compatibles."),$.forEach(i),R=H(t),A=N(t,"H2",{class:!0});var M=y(A);n=d(M,"TRS-80 Programs"),M.forEach(i),w=H(t);for(let V=0;V<e.length;V+=1)e[V].l(t);T=H(t),S=N(t,"H2",{class:!0});var F=y(S);I=d(F,"Atari Programs"),F.forEach(i),E=H(t);for(let V=0;V<s.length;V+=1)s[V].l(t);v=q(),this.h()},h(){document.title="Acorn Software Products Product Catalog",C(r,"class","svelte-13mktbj"),C(A,"class","svelte-13mktbj"),C(S,"class","svelte-13mktbj")},m(t,h){_(t,l,h),_(t,r,h),k(r,a),_(t,c,h),_(t,o,h),k(o,P),_(t,R,h),_(t,A,h),k(A,n),_(t,w,h);for(let f=0;f<e.length;f+=1)e[f].m(t,h);_(t,T,h),_(t,S,h),k(S,I),_(t,E,h);for(let f=0;f<s.length;f+=1)s[f].m(t,h);_(t,v,h)},p(t,[h]){if(h&1){m=t[0];let f;for(f=0;f<m.length;f+=1){const $=L(t,m,f);e[f]?e[f].p($,h):(e[f]=O($),e[f].c(),e[f].m(T.parentNode,T))}for(;f<e.length;f+=1)e[f].d(1);e.length=m.length}if(h&1){p=t[0];let f;for(f=0;f<p.length;f+=1){const $=K(t,p,f);s[f]?s[f].p($,h):(s[f]=z($),s[f].c(),s[f].m(v.parentNode,v))}for(;f<s.length;f+=1)s[f].d(1);s.length=p.length}},i:B,o:B,d(t){t&&i(l),t&&i(r),t&&i(c),t&&i(o),t&&i(R),t&&i(A),t&&i(w),J(e,t),t&&i(T),t&&i(S),t&&i(E),J(s,t),t&&i(v)}}}const st=!0;function tt(u){const l=X.products;return[Object.values(l).sort(function(a,c){return a.title>c.title?1:-1})]}class it extends G{constructor(l){super();Q(this,l,tt,g,U,{})}}export{it as default,st as prerender};
