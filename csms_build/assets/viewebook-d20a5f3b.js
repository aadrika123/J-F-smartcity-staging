import{r as a,A as I,e as T,Q as k,j as e,T as z,I as M,Z as _,g as F}from"./index-de640f8f.js";function G(){const[x,P]=a.useState([]),[R,r]=a.useState(!1),[s,h]=a.useState(1),[n,V]=a.useState(10),[m,S]=a.useState(),[D,A]=a.useState(),[o,E]=a.useState(),{api_getebookData:L,api_searchebookData:$}=F();console.log(D),console.log(x);const C=t=>{h(t-1)},B=t=>{h(t+1)};a.useEffect(()=>{i()},[]),a.useEffect(()=>{i()},[s]),a.useEffect(()=>{i()},[n]);const i=t=>{console.log(t);let c,d;t===void 0?(d={perPage:n,page:s},c=L):(d={search:t,perPage:n,page:s},c=$),r(!0),I.post(c,d,T()).then(function(l){var f,u,g,b,v,p,j,w,N,y;(f=l==null?void 0:l.data)!=null&&f.status?(console.log("vehicle data",(g=(u=l==null?void 0:l.data)==null?void 0:u.data)==null?void 0:g.data),P((v=(b=l==null?void 0:l.data)==null?void 0:b.data)==null?void 0:v.data),S((j=(p=l==null?void 0:l.data)==null?void 0:p.data)==null?void 0:j.last_page),A((N=(w=l==null?void 0:l.data)==null?void 0:w.data)==null?void 0:N.total)):k.error(`${(y=l==null?void 0:l.data)==null?void 0:y.message}`),r(!1)}).catch(function(l){k.warning("Error occured while fetching data."),r(!1)})};return e.jsx("div",{children:e.jsxs("div",{classNameName:"p-6 h-[76vh] ",children:[e.jsx("h1",{className:" text-[4vh] text-[#4338ca] font-bold ",children:"View Book Gallery"}),e.jsx("div",{className:" w-full px-[40%] flex items-center justify-end mt-2",children:e.jsx(z,{id:"search",type:"search",label:"Search",size:"small",fullWidth:!0,onChange:t=>{t.target.value===""?i():E(t.target.value)},onKeyDown:t=>t.key==="Enter"&&i(o),sx:{width:"100%"},InputProps:{endAdornment:e.jsx(M,{position:"end",sx:{marginRight:"-14px"},children:e.jsx("button",{onClick:()=>{o===""?i():i(o)},className:"bg-[#3b82f6] w-14 max-[320px]:w-8 h-10 rounded-r-[5px] flex items-center justify-center text-white",type:"submit",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",class:"h-5 w-5 ",children:e.jsx("path",{"fill-rule":"evenodd",d:"M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z","clip-rule":"evenodd"})})})})}})}),e.jsxs("div",{className:"flex flex-wrap items-center justify-center mt-[1vh] h-[72vh] overflow-auto",children:[x.map((t,c)=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:"block w-[40vh] h-[50vh] m-[10px] rounded-[10px] shadow-lg",children:[e.jsx("div",{className:"w-[40vh] h-[25vh] rounded-t-[10px]",children:e.jsx("img",{src:`${_}/api/${t==null?void 0:t.cover_pic_docs}`,alt:"pic1",className:"h-[100%] w-[100%] rounded-t-[10px]"})}),e.jsxs("div",{classNameName:"w-full flex items-center justify-between px-5 ",children:[e.jsxs("div",{className:"flex mt-3",children:[" ",e.jsx("div",{className:"w-full text-left ml-[5vh]",children:e.jsx("h1",{className:"text-[3vh] font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600 ",children:t==null?void 0:t.book_name})})]}),e.jsxs("div",{className:"flex ",children:[" ",e.jsx("div",{className:"w-full text-left ml-[5vh]",children:e.jsx("h1",{className:"text-[2vh] text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-black ",children:t==null?void 0:t.author_name})})]}),e.jsxs("div",{className:"flex ",children:[" ",e.jsx("div",{className:"w-full text-left ml-[5vh]",children:e.jsx("h1",{className:"text-[2vh] text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-black ",children:t==null?void 0:t.publish_by})})]}),e.jsxs("div",{className:"flex ",children:[" ",e.jsx("div",{className:"w-full text-left ml-[5vh]",children:e.jsxs("h1",{className:"text-[2vh] text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-black ",children:["$ ",t==null?void 0:t.price]})})]}),e.jsx("button",{className:"text-white bg-gradient-to-r from-[yellow] to-[#0c0a09] font-bold px-12 py-2 rounded-[10px]",children:e.jsx("a",{href:`${_}/api/${t==null?void 0:t.ebook_docs}`,target:"_blank",children:"View"})})]})]})})),e.jsxs("div",{className:"mt-3 w-full flex items-center justify-between px-10 my-2",children:[e.jsx("button",{type:"submit",className:(s===1?"opacity-50":"opacity-100")+"bg-white text-red-600 border-red-600 border px-8 py-2 rounded-lg hover:text-white text-[2vh] hover:bg-red-600",onClick:()=>C(s),disabled:s===1,children:"Previous"}),e.jsx("button",{className:(s===m?"opacity-50":"opacity-100")+"bg-white text-indigo-600 border-indigo-600 border px-8 py-2 rounded-lg hover:text-white text-[2vh] hover:bg-indigo-600",onClick:()=>B(s),disabled:s===m,children:" Next"})]})]})]})})}export{G as default};
