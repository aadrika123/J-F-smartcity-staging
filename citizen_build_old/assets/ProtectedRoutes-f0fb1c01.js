import{j as e}from"./mui-8e804a04.js";import{r as o,u as I,L as ee,h as H,N as D,O as ae}from"./router-87042356.js";import{l as E,g as z}from"./localstorage-fbfe5679.js";import{A as $,b as F,P as te,k as G,m as A,l as U,B as V,E as se,q as ne,F as oe}from"./index-2435513d.js";import{u as re}from"./user-9843d999.js";import{C as le}from"./CitizenApplyApiList-b4f47007.js";import{M as W}from"./index-4e794517.js";import{a as q}from"./index.esm-f717eb21.js";import{a as Y}from"./redux-4db06ad6.js";/* empty css                */import{c as ie,d as ce}from"./index.esm-df462c79.js";import{a as de}from"./index.esm-61f3eeba.js";import{T as ue}from"./TitleBar-51f50842.js";import{s as xe,d as me}from"./Styles-a2fa8249.js";import{a as he}from"./index.esm-c151f2f7.js";import"./react-09dd1212.js";import"./axios-97164839.js";import"./reactIcons-6a3b6da1.js";import"./i18next-e99b4042.js";function J(t){const{api_logout:s}=te();console.log("inside citizen logout hook"),$.post(s,{},F()).then(function(i){console.log("logout response via usesetlogout.",i)}).catch(function(i){console.log("logout success...")}).finally(()=>{t()})}const ge=t=>{const{t:s}=G(),[i,b]=o.useState(!1),[j,c]=o.useState(!1),{toggleBar:u,settoggleBar:x}=o.useContext(A),{brand_tag:m,brand_name:d,ulb_name:g,brand_logo:p}=U(s),f=I();function h(){b(!1)}const v=()=>{c(!1),E(),t.LOGOUT(),f("/")},_=()=>{h(),J(v)},{api_getProfileDetails:C}=le(),[l,O]=o.useState(),[w,y]=o.useState(""),N=ne;return o.useEffect(()=>{$.post(C,{},F()).then(function(r){var L,k,M;console.log("getdata for my profile in sidebar ....",r.data),r.data.status&&(O((L=r==null?void 0:r.data)==null?void 0:L.data),y(`${N}/${(M=(k=r==null?void 0:r.data)==null?void 0:k.data)==null?void 0:M.profile_photo}`))}).catch(function(r){console.log("getdata for my profile errorrr.... ",r)})},[]),console.log(`image data => ${N}/${l==null?void 0:l.profile_photo}`),e.jsxs(e.Fragment,{children:[j&&e.jsx(V,{}),e.jsxs("div",{className:"bg-white flex flex-row justify-between px-2 sm:px-6 py-1 border shadow-sm print:hidden",children:[e.jsxs("div",{className:"flex items-center gap-2 sm:gap-4",children:[e.jsx("img",{src:p,alt:"",className:"w-11 h-11"}),e.jsx("span",{className:"font-semibold text-xl",children:m}),e.jsx("div",{onClick:()=>{x(!u)},children:e.jsx("span",{className:"cursor-pointer text-gray-700 text-xl",children:e.jsx(se,{})})})]}),e.jsxs("div",{className:"flex items-center sm:gap-4 gap-2",children:[e.jsx("span",{className:"sm:visible sm:block hidden",children:e.jsx("button",{onClick:()=>_(),className:"bg-red-500 hover:bg-red-600 text-white px-4 py-1.5 text-xs rounded-sm shadow-md",children:"Log Out"})}),e.jsxs("span",{className:"font-semibold capitalize flex gap-1",children:[e.jsx("span",{className:"sm:visible sm:block hidden",children:"Welcome,"})," ",l==null?void 0:l.name]}),e.jsx("span",{children:e.jsx(ee,{to:"/editProfile",children:e.jsx("img",{src:w,onError:()=>y(re),alt:"",className:"w-11 h-11 rounded-full border-2 border-gray-200 bg-gray-50 p-1"})})})]})]}),e.jsx(W,{isOpen:i,onRequestClose:h,className:"h-screen w-screen flex items-center justify-center",contentLabel:"Logout Modal",children:e.jsxs("div",{class:"relative rounded-lg shadow-lg p-10 w-max h-max backdrop-blur-sm bg-white animate__animated animate__slideInLeft animate__faster",children:[e.jsx("button",{onClick:h,type:"button",class:"absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center",children:e.jsx("svg",{class:"w-5 h-5",fill:"currentColor",children:e.jsx("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})})}),e.jsxs("div",{class:"p-6 text-center",children:[e.jsxs("div",{className:"w-full flex h-10",children:[" ",e.jsx("span",{className:"mx-auto",children:e.jsx(q,{size:30})})]}),e.jsx("h3",{class:"mb-5 text-lg font-normal text-gray-500",children:"Are you sure to logout ?"}),e.jsx("button",{type:"button",class:"text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2",onClick:_,children:"Yes, I'm sure"})]})]})})]})},pe=t=>({RightNavCloseStatus:t.RightNavCloseStatus,isLoggedIn:t.isLoggedIn}),fe=t=>({RIGHT_NAV_OPEN:s=>t({type:"RIGHT_NAV_OPEN"}),LOGOUT:s=>t({type:"LOGOUT"}),RIGHT_NAV_CLOSE:s=>t({type:"RIGHT_NAV_CLOSE"})}),be=Y(pe,fe)(ge);const je=t=>{var B,R;const{t:s}=G(),{ulb_name:i,brand_tag:b,state:j}=U(s),{toggleBar:c,settoggleBar:u}=o.useContext(A),[x,m]=o.useState(!1),[d,g]=o.useState(""),[p,f]=o.useState(!1),h=H(),v=I(),[_,C]=o.useState(!1);if(h.pathname=="/login"||h.pathname=="/register")return;function l(){f(!1)}const O=()=>{C(!1),E(),t.LOGOUT(),v("/")},w=()=>{l(),J(O)},y="block w-full pl-7 py-2 px-6 clear-both whitespace-nowrap text-sm hover:text-white hover:bg-indigo-700 rounded-md text-sm animate__animated animate__fadeIn animate__faster ",N="block py-3 px-4 hover:text-white hover:bg-indigo-700 rounded-md animate__animated animate__fadeIn animate__faster ",r=a=>{m(!x),g(a)},L="animate__animated animate__slideInLeft animate__faster bg-indigo-500 w-[15rem] ",k="animate__animated animate__fadeInLeft animate__faster ",M="animate__animated animate__fadeInLeft animate__faster ",Q="w-0 sm:w-3 bg-indigo-500 animate__animated ",K="animate__animated animate__fadeOutLeft animate__faster ",X="animate__animated animate__fadeOutLeft animate__faster ",Z=a=>{(a==null?void 0:a.split("/")[1])=="safform"&&(v(`/${a}`),window.location.reload())};return e.jsxs(e.Fragment,{children:[_&&e.jsx(V,{}),e.jsxs("header",{className:(c?L:Q)+" relative select-none transition-all duration-200 h-full text-white ",children:[e.jsx("div",{class:(c?M:X)+" bg-gradient-to-r from-cyan-500 to-blue-500 ",id:"mobile-menu",children:e.jsx("nav",{id:"mobile-nav",class:"flex flex-col ltr:right-0 rtl:left-0 w-full top-0 py-4 ",children:e.jsx("div",{class:"mb-auto text-sm 2xl:text-base text-gray-50",children:e.jsx("div",{class:" px-4 h-[87vh] overflow-y-auto scrollbar-width-10 scrollbar-track-indigo-100 scrollbar-thumb-indigo-700 scrollbar-thumb-rounded-full scrollbar-thumb-hover-indigo-500 transition-all duration-200",children:e.jsx("nav",{class:"relative flex flex-wrap items-center justify-between",children:e.jsxs("ul",{id:"side-menu",class:"w-full float-none flex flex-col mb-[40px]",children:[(R=(B=t==null?void 0:t.menu)==null?void 0:B.mainMenu)==null?void 0:R.map(a=>{var T,P;return e.jsx(e.Fragment,{children:e.jsxs("li",{className:`relative cursor-pointer ${a!=null&&a.hiddenForSmallScreen?"hidden":""}`,onClick:()=>{var n;window.innerWidth<=763&&((n=a==null?void 0:a.subMenu)==null?void 0:n.length)==0&&u(!c)},children:[e.jsxs(D,{to:(a==null?void 0:a.route)==""?null:a==null?void 0:a.route,className:({isActive:n})=>{var S;return(n&&((S=a==null?void 0:a.subMenu)==null?void 0:S.length)==0?"bg-gradient-to-r from-blue-600 to-violet-600 ":" ")+`${N} flex gap-2 items-center`},onClick:()=>{r(a==null?void 0:a.name),d==(a==null?void 0:a.name)&&g("")},children:[" ",e.jsx("span",{className:"flex",children:(a==null?void 0:a.isMantence)==!0?e.jsxs("span",{className:"-mt-1  text-red-600 font-extrabold text-2xl font-extrabold",children:[e.jsx(de,{})," "]}):e.jsxs("span",{className:"  ",children:["  ",e.jsx(ie,{})]})})," ",e.jsxs("div",{className:"flex justify-between items-center flex-1",children:[e.jsx("span",{children:a==null?void 0:a.name}),(a==null?void 0:a.route)==""&&e.jsx("span",{className:d==(a==null?void 0:a.name)?"transition-all duration-200 ease-in-out rotate-90":"transition-all duration-200 ease-in-out rotate-0",children:e.jsx(oe,{})})]})," "]}),((T=a==null?void 0:a.subMenu)==null?void 0:T.length)>0&&d==(a==null?void 0:a.name)&&e.jsx("ul",{class:"block rounded rounded-t-none top-full py-0.5 ltr:text-left rtl:text-right mb-4 bg-gradient-to-r from-blue-600 to-violet-600",children:(P=a==null?void 0:a.subMenu)==null?void 0:P.map(n=>e.jsx(e.Fragment,{children:e.jsx("li",{class:"relative cursor-pointer",onClick:()=>{window.innerWidth<=763&&u(!c)},children:e.jsxs(D,{to:n==null?void 0:n.route,onClick:()=>Z(n==null?void 0:n.route),className:({isActive:S})=>(S?"bg-indigo-400 ":" ")+`${y} flex gap-3 items-center`,children:[e.jsx("span",{children:e.jsx(ce,{})})," ",e.jsx("span",{children:n==null?void 0:n.name})]})})}))})]})})}),e.jsx("li",{className:"relative sm:hidden visible",children:e.jsx("button",{className:"py-2 px-6 w-full text-sm inline-block text-center rounded leading-5 text-gray-100 bg-red-500 border border-pink-500 hover:text-gray-300 hover:bg-red-600 hover:ring-0 hover:border-red-600 focus:bg-red-600 focus:border-pink-600 focus:outline-none focus:ring-0 cursor-pointer",onClick:()=>{w()},children:"Log Out"})})]})})})})})}),e.jsx("div",{className:(c?k:K)+"absolute text-xs text-white bottom-14 py-[5px] bg-[#3A83f5] text-center z-10 border-t-[1px] w-[96%]",children:e.jsxs("span",{className:"",children:[" ","© 2024 : ",b=="AMC"?"AMC":"JUIDCO"]})})]}),e.jsx(W,{isOpen:p,onRequestClose:l,className:"h-screen w-screen flex items-center justify-center",contentLabel:"Logout Modal",children:e.jsxs("div",{class:"relative rounded-lg shadow-lg p-10 w-max h-max backdrop-blur-sm bg-white",children:[e.jsx("button",{onClick:l,type:"button",class:"absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center",children:e.jsx("svg",{class:"w-5 h-5",fill:"currentColor",children:e.jsx("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})})}),e.jsxs("div",{class:"p-6 text-center",children:[e.jsxs("div",{className:"w-full flex h-10",children:[" ",e.jsx("span",{className:"mx-auto",children:e.jsx(q,{size:30})})]}),e.jsx("h3",{class:"mb-5 text-lg font-normal text-gray-500",children:"Are you sure to logout ?"}),e.jsx("button",{type:"button",class:"text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2",onClick:w,children:"Yes, I'm sure"})]})]})})]})},ve=t=>({RightNavCloseStatus:t.RightNavCloseStatus,isLoggedIn:t.isLoggedIn}),_e=t=>({RIGHT_NAV_OPEN:s=>t({type:"RIGHT_NAV_OPEN"}),LOGOUT:s=>t({type:"LOGOUT"}),RIGHT_NAV_CLOSE:s=>t({type:"RIGHT_NAV_CLOSE"})}),we=Y(ve,_e)(je),ye=t=>{console.log(t.windowSize,"===>>");const i={mainMenu:[{name:"Home",route:"/",subMenu:[],hiddenForSmallScreen:t.windowSize<="400"&&!0},{name:"Dashboard",route:"/landingDashboard",subMenu:[]},{name:"Property",route:"",isMantence:!0,subMenu:[{name:"My Properties",route:"/propertyDashboard"},{name:"Payment History",route:"/PropertyAllTranscationList"},{name:"Tax Calculator",route:"/tax-cal/inside"}]},{name:"Water",route:"",isMantence:!0,subMenu:[{name:"Water Connections",route:"/water-dashboard"},{name:"Payment History",route:"/waterViewAllPaymentHistory"}]},{name:"Trade",route:"/trade-dashboard",isMantence:!0,subMenu:[]},{name:"Fines & Penalties",route:"/fines",subMenu:[]},{name:"Swm",route:"/swm",isMantence:!0},{name:"Advertisement",route:"/advertisement-dashboard",isMantence:!0},{name:"Market Section",route:"/marketingDashboard",isMantence:!0},{name:"Marriage Registration",route:"/marriage-index",isMantence:!0},{name:"Pet Registration",route:"/pet-registration-dashboard",isMantence:!0},{name:"Water Tanker",route:"/waterTankerDashboard"},{name:"Septic Tank",route:"/septicTankDashboard"},{name:"Rig (HYDT) Registration",route:"/vehicle-registration-dashboard"},{name:"Scheme",route:"/info-scheme-inside",subMenu:[]},{name:"FAQ",route:"/faq-inside",subMenu:[]}]};return e.jsx(e.Fragment,{children:e.jsx(we,{menu:i})})},Ge=()=>{const t=I(),{setheartBeatCounter:s,settoggleBar:i,breadCrumbData:b,titleText:j,titleStatus:c}=o.useContext(A),u=location.pathname.startsWith("/citizen/safform/"),x=["/citizen/landingDashboard"].includes(location.pathname);o.useEffect(()=>{s(f=>f+1)},[]);const m=H();let d=localStorage.getItem("device")=="mobile",g=window.innerWidth;const p=()=>{m.pathname.includes("paymentSuccessTanker")?t("/waterTankerDashboard"):m.pathname.includes("paymentSuccess-septicTank")?t("/septicTankDashboard"):window.history.back()};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"relative flex justify-center items-center  h-[100vh] w-full ",children:[e.jsx("div",{className:"backgroundDoodle"}),e.jsxs("div",{className:"flex flex-row flex-wrap w-full md:w-[95%] h-full md:h-[97%] bg-[#eff2f7]  md:rounded-[40px] lg:rounded-[40px] drop-shadow-[0_15px_15px_rgba(0,0,0,0.25)] overflow-clip blurBackground",children:[!d&&e.jsx("div",{className:"w-full",children:e.jsx(be,{})}),e.jsx("div",{className:"md:flex md:relative absolute top-[3.4rem] md:top-0 h-full",style:{zIndex:999},children:e.jsx(ye,{windowSize:g})}),e.jsxs("div",{className:"flex-1 h-full w-[60%] relative",onClick:()=>window.innerWidth<=763&&i(!1),children:[!x&&!u&&!d&&e.jsxs("span",{className:"cursor-pointer hover:text-indigo-500 font-semibold md:text-base text-sm  top-0 left-1 md:top-8 md:left-2",onClick:p,children:[e.jsx(he,{className:"inline"}),"Back"]}),e.jsx("div",{className:" px-2 md:px-10 md:mt-0",children:e.jsx(ue,{titleText:j,titleStatus:c})}),e.jsxs("div",{className:`${xe} ${!x&&" md:px-5 pt-6 md:pt-4"} `,children:[z("citizen_token")!="null"&&z("citizen_token")!=null?e.jsx(ae,{}):t("/login"),e.jsx("div",{className:"h-[9vh]"})]}),e.jsx("div",{className:me})]})]})]})})};export{Ge as default};
