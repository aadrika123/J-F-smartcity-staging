import{r,g as m,h as x,j as t,t as j,v,a as f,w as S,x as d,y as g,z as C,D as w,E as b,G as y}from"./index-a8a14e0c.js";function L(e){const{userName:n,roles:s,setuserName:l,setroles:i}=r.useContext(m);return r.useEffect(()=>{let o=n==""?x("userName"):n,c=s==""?x("roles"):s;l(o),i(c)},[]),t.jsx(t.Fragment,{children:t.jsxs("div",{className:"text-center px-1",children:[t.jsx("span",{className:"text-[40px] flex justify-center py-2 text-white",children:t.jsx(j,{})}),t.jsx("p",{className:"text-sm font-medium",style:e.sideBarStatus?{display:"none"}:{display:"block"},children:n}),s!=""&&(s==null?void 0:s.map(o=>t.jsx("p",{className:"text-xs",style:e.sideBarStatus?{display:"none"}:{display:"block"},children:o})))]})})}function _(e){const n=f(),s=S(),l=i=>{if(window.innerWidth<=500&&(e.navCloseStatus||(e.NAV_CLOSE(),e.NAV_CLOSE_ORIGINAL_STATUS())),s.pathname===e.path){window.location.reload();return}n(e.path)};return t.jsx(t.Fragment,{children:e.subMenuStatus?t.jsx("li",{className:"cursor-pointer",style:{textDecoration:"none",fontSize:"13px",fontWeight:"400",paddingLeft:"10px"},children:e.title}):t.jsx("div",{className:"cursor-pointer",onClick:()=>l(e==null?void 0:e.menuId),children:t.jsx("li",{style:{textDecoration:"none",fontSize:"13px",fontWeight:"400",paddingLeft:"10px"},href:e.path,children:e.title})})})}const A=e=>({navCloseStatus:e.navCloseStatus,navOriginalCloseStatus:e.navOriginalCloseStatus}),O=e=>({NAV_CLOSE:n=>e({type:"NAV_CLOSE"}),NAV_CLOSE_ORIGINAL_STATUS:n=>e({type:"NAV_CLOSE_ORIGINAL_STATUS"})}),h=v(A,O)(_);function E(e){const[n,s]=r.useState("h-0"),l=()=>{n=="h-0"?s("h-auto"):s("h-0")};return t.jsx(t.Fragment,{children:t.jsxs("div",{className:"block select-none",children:[e.path!=null&&t.jsxs("li",{className:"cursor-pointer flex items-center pl-2 py-2 mt-2 hover:bg-sky-100 hover:border-l-2 hover:border-white  hover:text-[#1A4D8C]",style:{width:"250px"},children:[t.jsx("div",{className:"flex-none ",children:t.jsx(d,{})}),t.jsx("div",{className:"flex-initial w-40",children:t.jsx(h,{subMenuStatus:e.subMenuStatus,path:e.path,title:e.title})})]}),e.path==null&&t.jsxs("li",{onClick:l,className:"cursor-pointer flex items-center pl-2 py-2 mt-2 hover:bg-sky-100 hover:border-l-2 hover:border-white  hover:text-[#1A4D8C]",style:{width:"250px"},children:[t.jsx("div",{className:"flex-none ",children:t.jsx(d,{})}),t.jsx("div",{className:"flex-initial w-40",children:t.jsx(h,{subMenuStatus:e.subMenuStatus,path:e.path,title:e.title})}),e.subMenuStatus&&t.jsxs("div",{className:"flex-none ",children:[n=="h-0"&&t.jsx(g,{size:18}),n=="h-auto"&&t.jsx(C,{size:18})]})]}),e.path==null&&t.jsx("div",{className:`transition-all duration-1000 ${n} overflow-hidden bg-[#133e71]`,children:e.subMenu.map(i=>t.jsxs("div",{className:"flex items-center pl-6 py-2 hover:bg-sky-100 hover:border-l-2 hover:border-indigo-600  hover:text-[#1A4D8C]  text-white",style:{width:"250px"},children:[t.jsx("div",{className:"flex-none ",children:t.jsx(w,{size:14})}),t.jsx("div",{className:"flex-initial w-40",children:t.jsx(h,{path:i.path,title:i.name,menuId:i==null?void 0:i.id})})]}))})]})})}function k(e){const n=S(),{menuList:s,setmenuList:l}=r.useContext(m);r.useEffect(()=>{let a=s==""?x("menuList"):s;l(a)},[]);const i=()=>{e.navOriginalCloseStatus&&e.NAV_OPEN()},o=()=>{e.navOriginalCloseStatus&&e.NAV_CLOSE()};let c=window.localStorage.getItem("device");return t.jsx(t.Fragment,{children:c!="mobile"&&n.pathname!="/landing"&&n.pathname!="/"&&n.pathname!="/login"&&n.pathname!="/mobile-login"&&n.pathname!="/error"&&t.jsxs("div",{className:(e.navCloseStatus?"w-0 md:w-9":"w-56 pr-2")+" shadow-lg px-0 bg-[#1A4D8C] h-screen pb-12 overflow-y-scroll absolute top-16 left-0  text-white  transition-all z-40 border-r-2 scbar animate__animated animate__fadeInLeft",onMouseEnter:i,onMouseLeave:o,children:[t.jsx("div",{className:"py-4",children:t.jsx(L,{sideBarStatus:e.navCloseStatus})}),t.jsx("hr",{}),t.jsxs("ul",{className:"list-none",style:e.navCloseStatus==!0?{padding:"0px 2px 0px 2px"}:{padding:"0px 10px 0px 10px"},children:[(e==null?void 0:e.menuFetchStatus)&&t.jsx("div",{className:"w-full flex justify-center items-center",children:t.jsx(b,{strokeColor:"white",strokeWidth:"5",animationDuration:"0.75",width:"25",visible:!0})}),!(e!=null&&e.menuFetchStatus)&&s!=""&&(s==null?void 0:s.map((a,N)=>{var u;return t.jsx(E,{title:a.name,path:a==null?void 0:a.path,subMenu:a==null?void 0:a.children,subMenuStatus:((u=a==null?void 0:a.children)==null?void 0:u.length)!=0,icon:t.jsx(y,{size:14})},`sidebar_menu${N}`)})),t.jsx("div",{className:"mt-10 h-20"})]})]})})}const I=e=>({navCloseStatus:e.navCloseStatus,navOriginalCloseStatus:e.navOriginalCloseStatus}),V=e=>({NAV_OPEN:n=>e({type:"NAV_OPEN"}),NAV_CLOSE:n=>e({type:"NAV_CLOSE"})}),M=v(I,V)(k);export{M as default};
