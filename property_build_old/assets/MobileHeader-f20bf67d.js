import{v as f,g as c,w as y,r as s,u as v,j as e,B as j,N as d,J as N,K as w,F as k,cZ as L,Q as S,T as C}from"./index-c73b3921.js";const A={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",backgroundColor:"white",border:"none"}};c.setAppElement("#root");function O(r){const l=y();s.useState(!1),s.useState(null);const[x,o]=s.useState(!1),[m,i]=s.useState(!1),[g,n]=s.useState(!1),a=v(),h=()=>{n(!1),C(),r.LOGOUT(),a("/mobile-login")},b=()=>{t(),n(!0),S(h),a("/mobile-login")};function u(){i(!0)}function t(){i(!1)}s.useState("property");const p=()=>{a("/mobile-modules")};return e.jsxs(e.Fragment,{children:[g&&e.jsx(j,{}),l.pathname!="/landing"&&l.pathname!="/"&&l.pathname!="/login"&&l.pathname!="/mobile-login"&&l.pathname!="/error"&&e.jsx("div",{className:"flex flex-col transition-all duration-500 ease-in-out mainHeader",children:e.jsxs("nav",{className:"w-full bg-white  flex flex-row flex-nowrap items-center justify-between mt-0 py-2  px-6 darks:bg-gray-800 shadow-sm transition-all duration-500 ease-in-out",id:"desktop-menu",children:[e.jsx("div",{className:"flex items-center",children:e.jsx("div",{class:" text-center py-3",children:e.jsx("div",{onClick:p,class:"text-2xl font-semibold text-gray-200 px-4 max-h-9 overflow-hidden hidden-compact cursor-pointer",children:e.jsx("span",{class:"text-gray-700 darks:text-gray-200",children:"UD&HD"})})})}),e.jsx("form",{className:"hidden sm:inline-block md:hidden lg:inline-block mx-5"}),e.jsxs("ul",{className:"flex ltr:ml-auto rtl:mr-auto mt-2 ",children:[e.jsxs("li",{"x-data":"{ open: false }",className:"relative",children:[e.jsxs("a",{href:"javascript:;",className:"py-3 px-4 flex text-sm rounded-full focus:outline-none","aria-controls":"mobile-canvas","aria-expanded":"false",children:[e.jsx("span",{className:"sr-only",children:"Customizer"}),e.jsx(d,{anchorId:"logout_button"}),e.jsx(N,{id:"logout_button","data-tooltip-content":"Click to Logout User.",onClick:u,className:"inline text-2xl font-semibold"})]}),e.jsxs("div",{className:"fixed w-full h-full inset-0 z-50 bg-red-600",id:"mobile-canvas","x-description":"Mobile menu","x-show":"open",style:{display:"none"},children:[e.jsx("span",{className:"fixed bg-gray-900 bg-opacity-70 w-full h-full inset-x-0 top-0"}),e.jsxs("nav",{id:"mobile-nav",className:"flex flex-col ltr:right-0 rtl:left-0 w-72 fixed top-0 bg-white darks:bg-gray-800 h-full overflow-auto z-40 scrollbars show",children:[e.jsx("div",{className:"p-6 bg-indigo-500 text-gray-100 border-b border-gray-200 darks:border-gray-700",children:e.jsxs("div",{className:"flex flex-row justify-between",children:[e.jsx("h3",{className:"text-md font-bold",children:"Customizer"}),e.jsx("button",{type:"button",className:"inline-block w-4 h-4",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",className:"inline-block text-gray-100 bi bi-x-lg",viewBox:"0 0 16 16",id:"x-lg",children:e.jsx("path",{d:"M1.293 1.293a1 1 0 011.414 0L8 6.586l5.293-5.293a1 1 0 111.414 1.414L9.414 8l5.293 5.293a1 1 0 01-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 01-1.414-1.414L6.586 8 1.293 2.707a1 1 0 010-1.414z"})})})]})}),e.jsxs("div",{className:"py-3 px-6 border-b border-gray-200 darks:border-gray-700",children:[e.jsx("p",{className:"text-base text-semibold",children:"Color Scheme"}),e.jsxs("div",{className:"flex flex-row",children:[e.jsxs("div",{className:"relative inline-block w-8 py-3 mt-0.5 ltr:mr-3 rtl:ml-3 align-middle select-none transition duration-200 ease-in",children:[e.jsx("input",{type:"checkbox",name:"lightdark",id:"lightdark",className:"toggle-checkbox absolute block w-5 h-5 rounded-full bg-white darks:bg-gray-900 border-2 darks:border-gray-700 appearance-none cursor-pointer"}),e.jsx("label",{htmlFor:"lightdark",className:"toggle-label block overflow-hidden h-5 rounded-full bg-gray-300 darks:bg-gray-700 cursor-pointer"})]}),e.jsx("p",{className:"text-sm text-gray-500 self-center",children:"Light and Dark"})]})]}),e.jsxs("div",{className:"py-3 px-6 border-b border-gray-200 darks:border-gray-700",children:[e.jsx("p",{className:"text-base text-semibold",children:"Sidebar Color"}),e.jsxs("div",{className:"flex flex-row",children:[e.jsxs("div",{className:"relative inline-block w-8 py-3 mt-0.5 ltr:mr-3 rtl:ml-3 align-middle select-none transition duration-200 ease-in",children:[e.jsx("input",{type:"checkbox",name:"sidecolor",id:"sidecolor",className:"toggle-checkbox absolute block w-5 h-5 rounded-full bg-white darks:bg-gray-900 border-2 darks:border-gray-700 appearance-none cursor-pointer"}),e.jsx("label",{htmlFor:"sidecolor",className:"toggle-label block overflow-hidden h-5 rounded-full bg-gray-300 darks:bg-gray-700 cursor-pointer"})]}),e.jsx("p",{className:"text-sm text-gray-500 self-center",children:"Light and Dark"})]})]}),e.jsxs("div",{className:"py-3 px-6 border-b border-gray-200 darks:border-gray-700",children:[e.jsx("p",{className:"text-base text-semibold",children:"Direction"}),e.jsxs("div",{className:"flex flex-row",children:[e.jsxs("div",{className:"relative inline-block w-8 py-3 mt-0.5 ltr:mr-3 rtl:ml-3 align-middle select-none transition duration-200 ease-in",children:[e.jsx("input",{type:"checkbox",name:"rtlmode",id:"rtlmode",className:"toggle-checkbox absolute block w-5 h-5 rounded-full bg-white darks:bg-gray-900 border-2 darks:border-gray-700 appearance-none cursor-pointer"}),e.jsx("label",{htmlFor:"rtlmode",className:"toggle-label block overflow-hidden h-5 rounded-full bg-gray-300 darks:bg-gray-700 cursor-pointer"})]}),e.jsx("p",{className:"text-sm text-gray-500 self-center",children:"LTR and RTL"})]})]}),e.jsxs("div",{className:"py-3 px-6 border-b border-gray-200 darks:border-gray-700",children:[e.jsx("p",{className:"text-base text-semibold",children:"Layout"}),e.jsxs("div",{className:"relative mb-3",children:[e.jsx("a",{href:"index.html",className:"inline-block py-2 px-2.5 mt-2 rounded text-sm text-gray-500 bg-gray-100 darks:bg-gray-900 darks:bg-opacity-20 darks:hover:bg-opacity-60 hover:text-indigo-500 hover:bg-gray-200 self-center",children:"Default"}),e.jsx("a",{href:"layout-compact.html",className:"inline-block py-2 px-2.5 mt-2 rounded text-sm text-gray-500 bg-gray-100 darks:bg-gray-900 darks:bg-opacity-20 darks:hover:bg-opacity-60 hover:text-indigo-500 hover:bg-gray-200 self-center",children:"Compact"}),e.jsx("a",{href:"layout-topnav.html",className:"inline-block py-2 px-2.5 mt-2 rounded text-sm text-gray-500 bg-gray-100 darks:bg-gray-900 darks:bg-opacity-20 darks:hover:bg-opacity-60 hover:text-indigo-500 hover:bg-gray-200 self-center",children:"Topnav"})]})]}),e.jsxs("div",{id:"customcolor",className:"py-3 px-6 border-b border-gray-200 darks:border-gray-700",children:[e.jsx("p",{className:"text-base text-semibold",children:"Primary Color"}),e.jsxs("div",{className:"relative my-3",children:[e.jsx("div",{id:"custred",title:"red",className:"inline-block p-3 ltr:mr-1.5 rtl:ml-1.5 bg-red-500 hover:opacity-90 rounded-full cursor-pointer"}),e.jsx("div",{id:"custyellow",title:"yellow",className:"inline-block p-3 ltr:mr-1.5 rtl:ml-1.5 bg-yellow-500 hover:opacity-90 rounded-full cursor-pointer"}),e.jsx("div",{id:"custgreen",title:"green",className:"inline-block p-3 ltr:mr-1.5 rtl:ml-1.5 bg-green-500 hover:opacity-90 rounded-full cursor-pointer"}),e.jsx("div",{id:"custblue",title:"blue",className:"inline-block p-3 ltr:mr-1.5 rtl:ml-1.5 bg-blue-500 hover:opacity-90 rounded-full cursor-pointer"}),e.jsx("div",{id:"custpurple",title:"purple",className:"inline-block p-3 ltr:mr-1.5 rtl:ml-1.5 bg-purple-500 hover:opacity-90 rounded-full cursor-pointer"}),e.jsx("div",{id:"custpink",title:"pink",className:"inline-block p-3 ltr:mr-1.5 rtl:ml-1.5 bg-pink-500 hover:opacity-90 rounded-full cursor-pointer"}),e.jsx("div",{id:"custindigo",title:"reset color",className:"inline-block cursor-pointer",children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"currentColor",className:"bi bi-arrow-counterclockwise",viewBox:"0 0 16 16",children:[e.jsx("path",{fillRule:"evenodd",d:"M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"}),e.jsx("path",{d:"M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"})]})})]})]}),e.jsx("div",{className:"pt-6 px-6",children:e.jsxs("div",{"x-data":"{ open: true }","x-show":"open",className:"flex justify-between items-center relative bg-yellow-100 text-yellow-900 p-3 rounded-lg mb-4",children:[e.jsxs("div",{children:["How to apply? please read the documentation on ",e.jsx("a",{href:"docs/customize.html",className:"underline font-semibold",children:"Customize page"})]}),e.jsx("button",{type:"button",children:e.jsx("span",{className:"text-2xl",children:"×"})})]})})]})]})]}),e.jsxs("li",{"x-data":"{ open: false }",className:"relative",children:[e.jsx("a",{href:"javascript:;",className:"py-3 px-4 flex text-sm rounded-full focus:outline-none",id:"messages",children:e.jsxs("div",{className:"relative inline-block",children:[e.jsx(d,{anchorId:"notification_icon"}),e.jsx(w,{id:"notification_icon","data-tooltip-content":"Show all notifications.",onClick:()=>o(!0),className:"inline text-2xl font-semibold"}),e.jsx("span",{className:"flex justify-center absolute -top-2 ltr:-right-1 rtl:-left-1 text-center bg-pink-500 px-1 text-white rounded-full text-xs",children:e.jsx("span",{className:"align-self-center",children:"3"})})]})}),e.jsxs("div",{"x-show":"open",className:"w-72 origin-top-right absolute ltr:-right-36 md:ltr:right-0 rtl:-left-36 md:rtl:left-0 rounded top-full z-50 py-0.5 ltr:text-left rtl:text-right bg-white darks:bg-gray-800 border darks:border-gray-700 shadow-md",style:{display:"none"},children:[e.jsx("div",{className:"p-3 font-normal border-b border-gray-200 darks:border-gray-700",children:e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"font-bold",children:"Messages"}),e.jsxs("div",{"x-data":"{ open: false }",className:"absolute top-0 ltr:right-0 rtl:left-0",children:[e.jsx("a",{href:"javascript:;",className:"inline-block ltr:mr-2 rtl:ml-2",title:"Search message",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",className:"inline-block w-4 h-4 bi bi-search",viewBox:"0 0 16 16",children:e.jsx("path",{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"})})}),e.jsx("div",{"x-show":"open",className:"origin-top-right absolute ltr:right-0 rtl:left-0 bg-white darks:bg-gray-700 z-10 rounded",style:{minWidth:"16rem"},children:e.jsx("form",{className:"inline-block w-full",children:e.jsxs("div",{className:"flex flex-wrap items-stretch w-full relative",children:[e.jsx("input",{type:"text",className:"flex-shrink flex-grow max-w-full leading-5 relative text-sm py-2 px-4 ltr:rounded-l rtl:rounded-r text-gray-800 bg-gray-100 overflow-x-auto focus:outline-none border border-gray-100 focus:border-gray-200 focus:ring-0 darks:text-gray-400 darks:bg-gray-700 darks:border-gray-700 darks:focus:border-gray-600",placeholder:"Search messages…","aria-label":"Search"}),e.jsx("div",{className:"flex -mr-px",children:e.jsx("button",{className:"flex items-center py-2 px-4 ltr:-ml-1 rtl:-mr-1 ltr:rounded-r rtl:rounded-l leading-5 text-gray-100 bg-indigo-500 border border-indigo-500 hover:text-white hover:bg-indigo-600 hover:ring-0 hover:border-indigo-600 focus:bg-indigo-600 focus:border-indigo-600 focus:outline-none focus:ring-0",type:"button",children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"w-5 h-5",children:[e.jsx("circle",{cx:11,cy:11,r:8}),e.jsx("line",{x1:21,y1:21,x2:"16.65",y2:"16.65"})]})})})]})})}),e.jsx("a",{href:"#",className:"inline-block ltr:mr-2 rtl:ml-2",title:"Mark all as read"}),e.jsx("a",{href:"#",className:"inline-block ltr:mr-2 rtl:ml-2",title:"New message",children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",className:"inline-block w-4 h-4 bi bi-pencil-square",viewBox:"0 0 16 16",children:[e.jsx("path",{d:"M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"}),e.jsx("path",{fillRule:"evenodd",d:"M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"})]})})]})]})}),e.jsxs("div",{className:"max-h-60 overflow-y-auto scrollbars show",children:[e.jsx("a",{href:"#",children:e.jsxs("div",{className:"flex flex-wrap flex-row items-center border-b border-gray-200 darks:border-gray-700 darks:bg-gray-900 darks:bg-opacity-40 darks:hover:bg-opacity-20 py-2 hover:bg-gray-100 bg-gray-50",children:[e.jsx("div",{className:"flex-shrink max-w-full px-2 w-1/4 text-center",children:e.jsxs("div",{className:"relative",children:[e.jsx("img",{src:"src/img/avatar/avatar2.png",className:"h-10 w-10 rounded-full mx-auto",alt:"Daniel Esteban"}),e.jsx("span",{title:"online",className:"flex justify-center absolute -bottom-0.5 ltr:right-2 rtl:left-2 text-center bg-green-500 border border-white w-3 h-3 rounded-full"})]})}),e.jsxs("div",{className:"flex-shrink max-w-full px-2 w-3/4",children:[e.jsx("div",{className:"text-sm font-bold",children:"Daniel Esteban"}),e.jsx("div",{className:"text-gray-500 text-sm mt-1",children:"What do you think about this project?"}),e.jsx("div",{className:"text-gray-500 text-sm mt-1",children:"12m ago"})]})]})}),e.jsx("a",{href:"#",children:e.jsxs("div",{className:"flex flex-wrap flex-row items-center border-b border-gray-200 darks:border-gray-700 darks:bg-gray-900 darks:bg-opacity-40 darks:hover:bg-opacity-20 py-2 hover:bg-gray-100 bg-gray-50",children:[e.jsx("div",{className:"flex-shrink max-w-full px-2 w-1/4 text-center",children:e.jsxs("div",{className:"relative",children:[e.jsx("img",{src:"src/img/avatar/avatar3.png",className:"h-10 w-10 rounded-full mx-auto",alt:"Carlos Garcia"}),e.jsx("span",{title:"busy",className:"flex justify-center absolute -bottom-0.5 ltr:right-2 rtl:left-2 text-center bg-pink-500 border border-white w-3 h-3 rounded-full"})]})}),e.jsxs("div",{className:"flex-shrink max-w-full px-2 w-3/4",children:[e.jsx("div",{className:"text-sm font-bold",children:"Carlos Garcia"}),e.jsx("div",{className:"text-gray-500 text-sm mt-1",children:"Hello, how are you friends?"}),e.jsx("div",{className:"text-gray-500 text-sm mt-1",children:"30m ago"})]})]})}),e.jsx("a",{href:"#",children:e.jsxs("div",{className:"flex flex-wrap flex-row items-center border-b border-gray-200 darks:border-gray-700 darks:bg-gray-900 darks:bg-opacity-40 darks:hover:bg-opacity-20 py-2 hover:bg-gray-100 bg-gray-50",children:[e.jsx("div",{className:"flex-shrink max-w-full px-2 w-1/4 text-center",children:e.jsxs("div",{className:"relative",children:[e.jsx("img",{src:"src/img/avatar/avatar4.png",className:"h-10 w-10 rounded-full mx-auto",alt:"Steven Rey"}),e.jsx("span",{title:"offline",className:"flex justify-center absolute -bottom-0.5 ltr:right-2 rtl:left-2 text-center bg-gray-500 border border-white w-3 h-3 rounded-full"})]})}),e.jsxs("div",{className:"flex-shrink max-w-full px-2 w-3/4",children:[e.jsx("div",{className:"text-sm font-bold",children:"Steven Rey"}),e.jsx("div",{className:"text-gray-500 text-sm mt-1",children:"Thank you for your help today."}),e.jsx("div",{className:"text-gray-500 text-sm mt-1",children:"4h ago"})]})]})}),e.jsx("a",{href:"#",children:e.jsxs("div",{className:"flex flex-wrap flex-row items-center border-b border-gray-200 darks:border-gray-700 darks:hover:bg-gray-900 darks:hover:bg-opacity-20 py-2 hover:bg-gray-100",children:[e.jsx("div",{className:"flex-shrink max-w-full px-2 w-1/4 text-center",children:e.jsxs("div",{className:"relative",children:[e.jsx("img",{src:"src/img/avatar/avatar.png",className:"h-10 w-10 rounded-full mx-auto",alt:"Roman Davis"}),e.jsx("span",{title:"offline",className:"flex justify-center absolute -bottom-0.5 ltr:right-2 rtl:left-2 text-center bg-gray-500 border border-white w-3 h-3 rounded-full"})]})}),e.jsxs("div",{className:"flex-shrink max-w-full px-2 w-3/4",children:[e.jsx("div",{className:"text-sm font-bold",children:"Roman Davis"}),e.jsx("div",{className:"text-gray-500 text-sm mt-1",children:"Do you have time? I want to call you."}),e.jsx("div",{className:"text-gray-500 text-sm mt-1",children:"5h ago"})]})]})})]}),e.jsx("div",{className:"p-3 text-center font-normal",children:e.jsx("a",{href:"#",className:"hover:underline",children:"Show all Messages"})})]})]})]})]})}),e.jsx(c,{isOpen:m,onRequestClose:t,style:A,contentLabel:"Example Modal",children:e.jsxs("div",{class:"relative bg-white rounded-lg shadow-xl border-2 border-gray-50",children:[e.jsx("button",{onClick:t,type:"button",class:"absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center darks:hover:bg-gray-800 darks:hover:text-white",children:e.jsx("svg",{class:"w-5 h-5",fill:"currentColor",children:e.jsx("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})})}),e.jsxs("div",{class:"p-6 text-center",children:[e.jsxs("div",{className:"w-full flex h-10",children:[" ",e.jsx("span",{className:"mx-auto",children:e.jsx(k,{size:30})})]}),e.jsx("h3",{class:"mb-5 text-lg font-normal text-gray-500 darks:text-gray-400",children:"Are you sure you want to logout ?"}),e.jsx("button",{type:"button",class:"text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 darks:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2",onClick:b,children:"Yes, I'm sure"})]})]})}),x&&e.jsx(L,{setnotificationState:o})]})}const _=r=>({navCloseStatus:r.navCloseStatus,isLoggedIn:r.isLoggedIn}),z=r=>({NAV_OPEN:l=>r({type:"NAV_OPEN"}),NAV_CLOSE:l=>r({type:"NAV_CLOSE"}),NAV_OPEN_ORIGINAL_STATUS:l=>r({type:"NAV_OPEN_ORIGINAL_STATUS"}),NAV_CLOSE_ORIGINAL_STATUS:l=>r({type:"NAV_CLOSE_ORIGINAL_STATUS"}),LOGOUT:l=>r({type:"LOGOUT"})}),T=f(_,z)(O);export{T as default};
