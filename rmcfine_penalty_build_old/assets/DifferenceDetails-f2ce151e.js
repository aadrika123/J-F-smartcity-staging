import{u as m,r as o,j as a}from"./index-faef4408.js";import{A as N}from"./AxiosInterceptors-06ddb7df.js";import{B as S}from"./BottomErrorCard-6b93cab8.js";import{S as E}from"./ShimmerEffectInline-e1eb703f.js";import{n as r,c as y}from"./PowerupFunctions-1c006beb.js";import{A}from"./ApiHeader-6d683756.js";import{P as v}from"./ProjectApiList-919c817c.js";import"./index-cc999471.js";import"./index-eab1d8e2.js";const T=()=>{const{id:x}=m(),{api_compData:f}=v(),[s,h]=o.useState([]),[c,e]=o.useState(!1),[g,d]=o.useState(!1),[j,u]=o.useState(""),n=(t,i)=>{d(t),u(i)},b=()=>{e(!0),N.post(f,{applicationId:x},A()).then(t=>{var i,l,p;(i=t==null?void 0:t.data)!=null&&i.status?h((l=t==null?void 0:t.data)==null?void 0:l.data):n(!0,y((p=t==null?void 0:t.data)==null?void 0:p.message))}).catch(t=>{n(!0,"Server Error, Please try again later !!!")}).finally(()=>{e(!1),d(!1)})};return o.useEffect(()=>{b()},[]),a.jsxs(a.Fragment,{children:[g&&a.jsx(S,{activateBottomErrorCard:n,errorTitle:j}),a.jsxs("div",{className:"w-full flex flex-col gap-5  p-4 md:p-6 transition-all duration-200",children:[a.jsx("h1",{className:"text-2xl font-semibold uppercase text-center text-gray-700 border-b border-gray-400 mb-4 pb-1 tracking-widest",children:"Comparision Chart"}),c&&a.jsx(E,{}),!c&&a.jsx(a.Fragment,{children:a.jsx("div",{className:"bg-white p-4",children:a.jsxs("table",{className:"w-full grid grid-cols-12",children:[a.jsxs("tr",{className:"col-span-12 grid grid-cols-12 items-center bg-slate-200 p-2 text-slate-600 text-lg gap-x-4",children:[a.jsx("th",{className:"col-span-4 text-start font-bold ",children:"#"}),a.jsx("th",{className:"col-span-4 text-start font-bold ",children:"Apply Data"}),a.jsx("th",{className:"col-span-4 text-start font-bold ",children:"Approved Data"})]}),(s==null?void 0:s.length)>0?a.jsx(a.Fragment,{children:s==null?void 0:s.map(t=>a.jsx(a.Fragment,{children:a.jsxs("tr",{className:"col-span-12 grid grid-cols-12 items-center px-2 py-1.5 border-b gap-x-4",children:[a.jsx("td",{className:"col-span-4 font-semibold",children:t==null?void 0:t.displayString}),a.jsx("td",{className:`col-span-4 ${r(t==null?void 0:t.final)!=r(t==null?void 0:t.applied)&&" text-red-500"}`,children:r(t==null?void 0:t.applied)}),a.jsx("td",{className:`col-span-4 ${r(t==null?void 0:t.final)!=r(t==null?void 0:t.applied)&&" text-green-600"}`,children:r(t==null?void 0:t.final)})]})}))}):a.jsx("tr",{className:"col-span-12 mt-4 w-full border border-red-200 bg-red-100 text-center text-red-500 py-2 text-lg",children:a.jsx("td",{colSpan:3,className:"flex justify-center",children:"Oops! No Comparision Data available."})})]})})})]})]})};export{T as default};
