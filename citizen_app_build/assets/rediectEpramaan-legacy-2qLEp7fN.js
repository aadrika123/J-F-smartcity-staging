System.register(["./index-legacy-p2qpfHNA.js","./router-legacy-Fb8rn-oH.js","./tailwind-legacy-2x1dbYuU.js","./useCustomQuery-legacy-DfkI2aQ2.js","./RotatingLoader-legacy-tC5LIKrk.js","./reactQuery-legacy-O28UBLTF.js","./reactQueryDevtools-legacy-f3hWO9gP.js","./axios-legacy-V-9BatBQ.js","./reactIcons-legacy-Ba5Iphix.js","./reactLazyLoadImageComponent-legacy-7uJnvnT3.js","./headlessui-legacy-9Nk7xZCp.js"],(function(e,l){"use strict";var n,a,c,i,t,o,s,r,u;return{setters:[function(e){n=e.u,a=e.c,c=e.a,i=e.j,t=e.d},function(e){o=e.i},function(e){s=e.r},function(e){r=e.a},function(e){u=e.R},null,null,null,null,null,null],execute:function(){e("default",(function(){var e,l,d,f=n(),x=a({updateAction:t}).state,m=o(),j=new URLSearchParams(window.location.search).get("code"),g=r({api:null===(e=c)||void 0===e?void 0:e.ePramanRedirect,key:"redirectEpramaan",config:{type:"mobile",code:j,nonce:null==x||null===(l=x.ePramaan)||void 0===l?void 0:l.nonce,codeVerifier:null==x||null===(d=x.ePramaan)||void 0===d?void 0:d.codeVerifier},value:[j],options:{enable:!!j,onSuccess:function(e){null!=e&&e.status?null==f||f.loginWithEPramaan(e):m("/juidco-app/auth/e-praman-login")},onError:function(e){m("/juidco-app/auth/e-praman-login")}}});return g.data,g.isFetching?i.jsxs("div",{className:"flex flex-col h-28",children:[i.jsx(u,{}),i.jsx("div",{className:"flex flex-col flex-1 items-center justify-center",children:i.jsx("div",{className:"flex flex-col items-center",children:i.jsx("h1",{className:"text-base font-bold text-gray-600",children:"Please wait..."})})})]}):i.jsx("div",{className:"flex flex-col h-28",children:i.jsx("div",{className:"flex flex-col flex-1 items-center justify-center",children:i.jsx("div",{className:"flex flex-col items-center",children:i.jsx(s.Button,{color:"blue",onClick:function(){return m("/juidco-app/auth/e-praman-login")},children:"Go back to E-Praman Login"})})})})}))}}}));
