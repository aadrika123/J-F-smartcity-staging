import{u as G,A as H,Q as n,j as t,T as K,I as Q,g as W}from"./index-de640f8f.js";import{A as $}from"./ApiHeader2-f80ad0bc.js";const i="/assets/book-5eeea8f0.webp";function Y(){G();const[J,c]=useState(!1),[l,h]=useState(1),[s,O]=useState(10),[_,m]=useState(),[I,u]=useState(),[r,T]=useState(),[z,f]=useState([]);useState(!1);const{api_retrieve_video:B,api_search_video:M}=W();console.log(I),console.log(z);const R=a=>{h(a-1)},q=a=>{h(a+1)};useEffect(()=>{d()},[l]),useEffect(()=>{d()},[s]),useEffect(()=>{d()},[]);const d=a=>{console.log("initialvalue",a,s,l);let x,o;a===void 0?(o={perPage:s,page:l},x=B):(o={search:a},x=M),c(!0),H.post(x,o,$()).then(function(e){var v,g,b,w,j,N,p,y,k,V,C,E,S,A,D,P,F,L;((v=e==null?void 0:e.data)==null?void 0:v.status)===!0?((b=(g=e==null?void 0:e.data)==null?void 0:g.data)==null?void 0:b.total)===0?(n.error("Data not Found"),f((j=(w=e==null?void 0:e.data)==null?void 0:w.data)==null?void 0:j.data),m((p=(N=e==null?void 0:e.data)==null?void 0:N.data)==null?void 0:p.last_page),u((k=(y=e==null?void 0:e.data)==null?void 0:y.data)==null?void 0:k.total)):(console.log("exam term data",(C=(V=e==null?void 0:e.data)==null?void 0:V.data)==null?void 0:C.data),f((S=(E=e==null?void 0:e.data)==null?void 0:E.data)==null?void 0:S.data),m((D=(A=e==null?void 0:e.data)==null?void 0:A.data)==null?void 0:D.last_page),u((F=(P=e==null?void 0:e.data)==null?void 0:P.data)==null?void 0:F.total)):n.error(`${(L=e==null?void 0:e.data)==null?void 0:L.message}`),c(!1)}).catch(function(e){n.warning("Error occured while fetching data."),c(!1)})};return t.jsx("div",{children:t.jsxs("div",{classNameName:"p-6 h-[76vh] ",children:[t.jsx("h1",{className:" text-[4vh] text-[#4338ca] font-bold ",children:"View Video Gallery"}),t.jsx("div",{className:" w-full px-[40%] flex items-center justify-end mt-2",children:t.jsx(K,{id:"search",type:"search",label:"Search",size:"small",fullWidth:!0,onChange:a=>{a.target.value===""?d():T(a.target.value)},onKeyDown:a=>a.key==="Enter"&&d(r),sx:{width:"100%"},InputProps:{endAdornment:t.jsx(Q,{position:"end",sx:{marginRight:"-14px"},children:t.jsx("button",{onClick:()=>{r===""?d():d(r)},className:"bg-[#0F766E] w-14 max-[320px]:w-8 h-10 rounded-r-[5px] flex items-center justify-center text-white",type:"submit",children:t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",class:"h-5 w-5 ",children:t.jsx("path",{"fill-rule":"evenodd",d:"M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z","clip-rule":"evenodd"})})})})}})}),t.jsxs("div",{className:"flex flex-wrap items-center justify-center mt-[1vh] h-[72vh] overflow-auto",children:[t.jsxs("div",{className:"block w-[40vh] h-[40vh] m-[10px] rounded-[10px] shadow-lg",children:[t.jsx("div",{className:"w-[40vh] h-[25vh] rounded-t-[10px]",children:t.jsx("img",{src:i,alt:"pic1",className:"h-[100%] w-[100%] rounded-t-[10px]"})}),t.jsxs("div",{classNameName:"w-full flex items-center justify-center px-5 ",children:[t.jsxs("div",{className:"flex mt-3 ",children:[" ",t.jsx("div",{className:"w-full ml-[5vh]",children:t.jsx("h1",{className:"text-[3vh] font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-black ",children:"Annual Fest"})})]}),t.jsx("button",{className:"mt-2 text-white bg-gradient-to-r from-[yellow] to-[#0c0a09] font-bold px-12 py-2 rounded-[10px]",children:"View Video Collection"})]})]}),t.jsxs("div",{className:"block w-[40vh] h-[40vh] m-[10px] rounded-[10px] shadow-lg",children:[t.jsx("div",{className:"w-[40vh] h-[25vh] rounded-t-[10px]",children:t.jsx("img",{src:i,alt:"pic1",className:"h-[100%] w-[100%] rounded-t-[10px]"})}),t.jsxs("div",{classNameName:"w-full flex items-center justify-center px-5 ",children:[t.jsxs("div",{className:"flex mt-3 ",children:[" ",t.jsx("div",{className:"w-full ml-[5vh]",children:t.jsx("h1",{className:"text-[3vh] font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-black ",children:"Republic day"})})]}),t.jsx("button",{className:"mt-2 text-white bg-gradient-to-r from-[yellow] to-[#0c0a09] font-bold px-12 py-2 rounded-[10px]",children:"View Video Collection"})]})]}),t.jsxs("div",{className:"block w-[40vh] h-[40vh] m-[10px] rounded-[10px] shadow-lg",children:[t.jsx("div",{className:"w-[40vh] h-[25vh] rounded-t-[10px]",children:t.jsx("img",{src:i,alt:"pic1",className:"h-[100%] w-[100%] rounded-t-[10px]"})}),t.jsxs("div",{classNameName:"w-full flex items-center justify-center px-5 ",children:[t.jsxs("div",{className:"flex mt-3 ",children:[" ",t.jsx("div",{className:"w-full ml-[5vh]",children:t.jsx("h1",{className:"text-[3vh] font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-black ",children:"Independance Day"})})]}),t.jsx("button",{className:"mt-2 text-white bg-gradient-to-r from-[yellow] to-[#0c0a09] font-bold px-12 py-2 rounded-[10px]",children:"View Video Collection"})]})]}),t.jsxs("div",{className:"block w-[40vh] h-[40vh] m-[10px] rounded-[10px] shadow-lg",children:[t.jsx("div",{className:"w-[40vh] h-[25vh] rounded-t-[10px]",children:t.jsx("img",{src:i,alt:"pic1",className:"h-[100%] w-[100%] rounded-t-[10px]"})}),t.jsxs("div",{classNameName:"w-full flex items-center justify-center px-5 ",children:[t.jsxs("div",{className:"flex mt-3 ",children:[" ",t.jsx("div",{className:"w-full ml-[5vh]",children:t.jsx("h1",{className:"text-[3vh] font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-black ",children:"Concert"})})]}),t.jsx("button",{className:"mt-2 text-white bg-gradient-to-r from-[yellow] to-[#0c0a09] font-bold px-12 py-2 rounded-[10px]",children:"View Video Collection"})]})]}),t.jsxs("div",{className:"mt-3 w-full flex items-center justify-between px-10 my-2",children:[t.jsx("button",{type:"submit",className:"bg-white text-red-600 border-red-600 border px-8 py-2 rounded-lg hover:text-white text-[2vh] hover:bg-red-600",disabled:l===1,onClick:()=>R(l),children:"Previous"}),t.jsx("button",{className:"bg-white text-[#0F766E] border-[#0F766E] border px-8 py-2 rounded-lg hover:text-white text-[2vh] hover:bg-[#0F766E]",disabled:l===_,onClick:()=>q(l),children:" Next"})]})]})]})})}export{Y as default};
