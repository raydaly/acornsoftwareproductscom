import{S as U,i as W,s as X,e as S,c as E,a as k,d as s,b as x,f,t as h,k as y,g as v,n as I,D as P,E as O,K as Y,l as J}from"../../chunks/vendor-0f94f40a.js";import{c as Z}from"../../chunks/catalog2-a20a399d.js";function L(u,l,a){const i=u.slice();return i[2]=l[a],i}function g(u){let l,a=u[2].title+"",i,r,c,d=u[2].authors+"",C,B,m,w,R=u[2].whenpub+"",N,M,A,T,b=u[2].price&&tt(u);return{c(){l=S("span"),i=h(a),r=h(` by 
      `),c=S("span"),C=h(d),B=y(),m=S("span"),w=h("("),N=h(R),M=h(")"),A=y(),b&&b.c(),T=J(),this.h()},l(e){l=E(e,"SPAN",{class:!0});var _=k(l);i=v(_,a),_.forEach(s),r=v(e,` by 
      `),c=E(e,"SPAN",{class:!0});var H=k(c);C=v(H,d),H.forEach(s),B=I(e),m=E(e,"SPAN",{class:!0});var j=k(m);w=v(j,"("),N=v(j,R),M=v(j,")"),j.forEach(s),A=I(e),b&&b.l(e),T=J(),this.h()},h(){x(l,"class","title svelte-1jrjfbh"),x(c,"class","authors"),x(m,"class","when")},m(e,_){f(e,l,_),P(l,i),f(e,r,_),f(e,c,_),P(c,C),f(e,B,_),f(e,m,_),P(m,w),P(m,N),P(m,M),f(e,A,_),b&&b.m(e,_),f(e,T,_)},p(e,_){e[2].price&&b.p(e,_)},d(e){e&&s(l),e&&s(r),e&&s(c),e&&s(B),e&&s(m),e&&s(A),b&&b.d(e),e&&s(T)}}}function tt(u){let l,a,i=u[2].price+"",r;return{c(){l=S("span"),a=h("$"),r=h(i),this.h()},l(c){l=E(c,"SPAN",{class:!0});var d=k(l);a=v(d,"$"),r=v(d,i),d.forEach(s),this.h()},h(){x(l,"class","price")},m(c,d){f(c,l,d),P(l,a),P(l,r)},p:O,d(c){c&&s(l)}}}function Q(u){let l,a=u[2].isTRS80&&g(u);return{c(){l=S("div"),a&&a.c(),this.h()},l(i){l=E(i,"DIV",{class:!0});var r=k(l);a&&a.l(r),r.forEach(s),this.h()},h(){x(l,"class","product svelte-1jrjfbh")},m(i,r){f(i,l,r),a&&a.m(l,null)},p(i,r){i[2].isTRS80&&a.p(i,r)},d(i){i&&s(l),a&&a.d()}}}function lt(u){let l,a,i,r,c,d,C,B,m,w,R,N,M,A,T,b,e,_,H,j,q,$=u[0],n=[];for(let t=0;t<$.length;t+=1)n[t]=Q(L(u,$,t));return{c(){l=S("h1"),a=h("Products"),i=y(),r=S("p"),c=h("Acorn published software for the Radio Shack TRS-80, Atari Computer and IBM PC Compatibles."),d=y(),C=S("h2"),B=h("TRS-80 Programs"),m=y();for(let t=0;t<n.length;t+=1)n[t].c();w=y(),R=S("h2"),N=h("Atari Programs"),M=y(),A=S("p"),T=h("Atari catalog will be updated in next version."),b=y(),e=S("h2"),_=h("IBM PC Programs"),H=y(),j=S("p"),q=h("IBM catalog will be updated in next version."),this.h()},l(t){l=E(t,"H1",{class:!0});var o=k(l);a=v(o,"Products"),o.forEach(s),i=I(t),r=E(t,"P",{});var p=k(r);c=v(p,"Acorn published software for the Radio Shack TRS-80, Atari Computer and IBM PC Compatibles."),p.forEach(s),d=I(t),C=E(t,"H2",{});var D=k(C);B=v(D,"TRS-80 Programs"),D.forEach(s),m=I(t);for(let K=0;K<n.length;K+=1)n[K].l(t);w=I(t),R=E(t,"H2",{});var V=k(R);N=v(V,"Atari Programs"),V.forEach(s),M=I(t),A=E(t,"P",{});var z=k(A);T=v(z,"Atari catalog will be updated in next version."),z.forEach(s),b=I(t),e=E(t,"H2",{});var F=k(e);_=v(F,"IBM PC Programs"),F.forEach(s),H=I(t),j=E(t,"P",{});var G=k(j);q=v(G,"IBM catalog will be updated in next version."),G.forEach(s),this.h()},h(){x(l,"class","svelte-1jrjfbh")},m(t,o){f(t,l,o),P(l,a),f(t,i,o),f(t,r,o),P(r,c),f(t,d,o),f(t,C,o),P(C,B),f(t,m,o);for(let p=0;p<n.length;p+=1)n[p].m(t,o);f(t,w,o),f(t,R,o),P(R,N),f(t,M,o),f(t,A,o),P(A,T),f(t,b,o),f(t,e,o),P(e,_),f(t,H,o),f(t,j,o),P(j,q)},p(t,[o]){if(o&1){$=t[0];let p;for(p=0;p<$.length;p+=1){const D=L(t,$,p);n[p]?n[p].p(D,o):(n[p]=Q(D),n[p].c(),n[p].m(w.parentNode,w))}for(;p<n.length;p+=1)n[p].d(1);n.length=$.length}},i:O,o:O,d(t){t&&s(l),t&&s(i),t&&s(r),t&&s(d),t&&s(C),t&&s(m),Y(n,t),t&&s(w),t&&s(R),t&&s(M),t&&s(A),t&&s(b),t&&s(e),t&&s(H),t&&s(j)}}}const rt=!0;function et(u){const l=Z.products;return[Object.values(l).sort(function(i,r){return i.title>r.title?1:-1})]}class at extends U{constructor(l){super();W(this,l,et,lt,X,{})}}export{at as default,rt as prerender};