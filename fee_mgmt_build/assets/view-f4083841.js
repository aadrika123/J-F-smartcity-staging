import{r as n,b as H,j as t,L as Q,A as R}from"./index-dd1288ad.js";import{P as T}from"./Page-c37fa378.js";import{B as Y}from"./Breadcrumb-5eaf1e4d.js";import{a as $}from"./index.esm-a97a4a89.js";import{C as q}from"./index-0f60d4d6.js";const Z=()=>{const{api_retrievestudent:F}=R,[x,a]=n.useState([]),[l,m]=n.useState(1),[p,k]=n.useState(!1),[r,A]=n.useState(10),[c,j]=n.useState(),[J,u]=n.useState(),[B,i]=n.useState(!1),I=x,M=e=>{A(parseInt(e))},V=e=>{m(e-1)},G=e=>{m(e+1)};n.useEffect(()=>{o()},[l]),n.useEffect(()=>{o()},[r]);const o=async()=>{var e,d,y,f,N,g,b,h,w,v,S,_,C,P,E,L;try{i(!0);const s=await H.post(`${F}`,{perPage:r,page:l});console.log(s.data),s.status==200&&(((d=(e=s==null?void 0:s.data)==null?void 0:e.data)==null?void 0:d.total)===0?(toast.error("Data not Found"),a((f=(y=s==null?void 0:s.data)==null?void 0:y.data)==null?void 0:f.data),j((g=(N=s==null?void 0:s.data)==null?void 0:N.data)==null?void 0:g.last_page),u((h=(b=s==null?void 0:s.data)==null?void 0:b.data)==null?void 0:h.total)):(console.log("exam term data",(v=(w=s==null?void 0:s.data)==null?void 0:w.data)==null?void 0:v.data),a((_=(S=s==null?void 0:s.data)==null?void 0:S.data)==null?void 0:_.data),j((P=(C=s==null?void 0:s.data)==null?void 0:C.data)==null?void 0:P.last_page),u((L=(E=s==null?void 0:s.data)==null?void 0:E.data)==null?void 0:L.total)),i(!1))}catch(s){console.log(s),i(!1)}};return n.useEffect(()=>{o()},[]),t.jsx("div",{className:"bg-white",children:t.jsxs(T,{title:"Student",pageName:"Student List",children:[t.jsx(Y,{list:[{title:"Home",path:"/home"},{title:"Student Entry",path:"/add-new-student"},{title:"Student List",path:"/student/view"}]}),B?t.jsx(Q,{}):t.jsxs("div",{className:"relative overflow-x-auto w-[95%] shadow-md mt-[2vh] ml-[2vw] sm:rounded-lg",children:[t.jsx("div",{className:"w-full flex items-end justify-end text-[#0F766E] my-4 text-[4vh] right",children:t.jsx($,{onClick:()=>k(!p)})}),p&&t.jsx(q,{data:x,target:"_blank"}),t.jsxs("table",{className:"w-full text-sm text-left ",id:"myTable",children:[t.jsx("thead",{className:"text-md ",children:t.jsxs("tr",{className:"text-white bg-[#0F766E]",children:[t.jsx("th",{scope:"col",className:" py-5  text-center ",children:"Sl No."}),t.jsx("th",{scope:"col",className:" py-5  text-center",children:"Admission No"}),t.jsx("th",{scope:"col",className:" py-5  text-center",children:"Class"}),t.jsx("th",{scope:"col",className:" py-5  text-center",children:"Section"}),t.jsx("th",{scope:"col",className:" py-5  text-center ",children:"Full Name"}),t.jsx("th",{scope:"col",className:" py-5  text-center ",children:"Father's Name"}),t.jsx("th",{scope:"col",className:" py-5  text-center",children:"Gender"}),t.jsx("th",{scope:"col",className:" py-5  text-center",children:"Financial Year"}),t.jsx("th",{scope:"col",className:" py-5  text-center",children:"Admission Date"}),t.jsx("th",{scope:"col",className:" py-5  text-center",children:"Category"}),t.jsx("th",{scope:"col",className:" py-5  text-center",children:"Special Ability"}),t.jsx("th",{scope:"col",className:" py-5  text-center",children:"Parent/Staff Quota"}),t.jsx("th",{scope:"col",className:" py-5  text-center",children:"Status"})]})}),I.map((e,d)=>t.jsx(t.Fragment,{children:t.jsx("tbody",{children:t.jsxs("tr",{className:"bg-white border-b  hover:bg-slate-100 ",children:[t.jsx("td",{scope:"row",className:"px-6 py-4 font-medium whitespace-nowrap  text-center",children:(l-1)*r+d+1}),t.jsx("td",{className:"px-6 py-4 text-center",children:e==null?void 0:e.admission_no}),t.jsx("td",{className:"px-6 py-4 text-center",children:e==null?void 0:e.class_name}),t.jsx("td",{className:"px-6 py-4 text-center",children:e==null?void 0:e.section}),t.jsx("td",{className:"px-6 py-4 text-center",children:e==null?void 0:e.full_name}),t.jsx("td",{className:"px-6 py-4 text-center",children:e==null?void 0:e.father_name}),t.jsx("td",{className:"px-6 py-4 text-center",children:e==null?void 0:e.gender_name}),t.jsx("td",{className:"px-6 py-4 text-center",children:e==null?void 0:e.financial_year}),t.jsx("td",{className:"px-6 py-4 text-center",children:e==null?void 0:e.admission_date}),t.jsx("td",{className:"px-6 py-4 text-center",children:e==null?void 0:e.category_name}),t.jsx("td",{className:"px-6 py-4 text-center",children:e==null?void 0:e.disability}),t.jsx("td",{className:"px-6 py-4 text-center",children:e==null?void 0:e.is_parent_staff}),t.jsx("td",{className:"px-6 py-4 text-center",children:e==null?void 0:e.status})]})})}))]}),t.jsxs("div",{className:"flex p-4  w-full",children:[t.jsxs("div",{className:"flex items-start justify-start w-full ",children:[" ",t.jsx("select",{className:"h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[calc(1/2)] p-2.5 ",value:r,onChange:e=>M(e.target.value),children:[5,10,25,50].map(e=>t.jsxs("option",{value:e,children:["show ",e]},e))})]}),t.jsxs("div",{className:"flex items-center justify-center w-full",children:[" ",t.jsxs("span",{children:["Page ","",t.jsxs("strong",{children:[l," of ",c]}),""]})]}),t.jsxs("div",{className:"flex items-center justify-end w-full",children:[t.jsx("button",{className:(l===1?"opacity-50":"opacity-100")+" text-xl hover:bg-sky-300 hover:text-white",onClick:()=>V(l),disabled:l===1,children:"⬅️"}),t.jsx("button",{className:(l===c?"opacity-50":"opacity-100")+" text-xl hover:bg-sky-300 hover:text-white",onClick:()=>G(l),disabled:l===c,children:"➡️"})]})]})]})]})})};export{Z as default};
