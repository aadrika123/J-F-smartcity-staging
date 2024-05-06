import{M as I,r,g as T,h as L,d as g,e as B,f as s,F as E,j as e,i as M,k as u,l as j,A as P}from"./index-16131624.js";import{u as U}from"./useSetTitle-92e85e38.js";I.setAppElement("#root");function q(){var m,p,x,h;const{api_privateLandApplicationFullDetailById:f,api_privateLandViewDocuments:N}=P();U("Agency Details");const[n,y]=r.useState();r.useState(),T();const{id:i}=L(),[o,b]=r.useState(),[d,c]=r.useState(!1),[_,A]=r.useState(!1),[O,v]=r.useState(""),w=()=>A(!0);r.useEffect(()=>{D()},[]);const D=()=>{let l={applicationId:i};g.post(N,l,B()).then(a=>{var t;y((t=a==null?void 0:a.data)==null?void 0:t.data)}).catch(a=>{})},S=l=>{v(l),w()},k=()=>{c(!0);const a={headers:{Authorization:`Bearer ${window.localStorage.getItem("token")}`,Accept:"application/json"}};g.post(f,{applicationId:i,type:"Active"},a).then(function(t){b(t.data.data),c(!1)}).catch(function(t){c(!1)})};return r.useEffect(()=>{k()},[]),s(E,{children:[d&&e(M,{}),e("div",{className:"grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-2 container mx-auto w-full",children:s("div",{className:"col-span-12 rounded-lg  p-4",children:[e("h1",{className:"mb-2 pl-2 font-bold text-3xl text-gray-700 uppercase underline text-center",children:nullToNA((p=(m=o==null?void 0:o.fullDetailsData)==null?void 0:m.cardArray)==null?void 0:p.headerTitle)}),s("h1",{className:"flex-1 flex pl-2 font-bold text-2xl text-gray-700",children:["Application No. -",nullToNA((o==null?void 0:o.application_no)||"")]}),s("div",{className:"p-4",children:[s("h1",{className:"px-1 font-semibold font-serif  text-gray-500",children:[e(u,{className:"inline"})," Basic Details"]}),(h=(x=o==null?void 0:o.fullDetailsData)==null?void 0:x.dataArray)==null?void 0:h.map(l=>{var a;return e("div",{className:"grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 container mx-auto bg-white rounded-lg shadow-xl p-4 mt-4",children:(a=l==null?void 0:l.data)==null?void 0:a.map(t=>s("div",{className:"pl-4 p-2",children:[s("h1",{className:"font-bold text-sm",children:[nullToNA((t==null?void 0:t.value)||"N/A")," "]}),e("h1",{className:"text-gray-500 text-xs",children:nullToNA(t==null?void 0:t.displayString)})]}))})})]})]})}),s("div",{className:"container mx-auto mt-10  px-5 pb-48  rounded-lg",children:[s("h1",{className:"px-1 font-semibold font-serif text-gray-500 mt-10",children:[e(u,{className:"inline"})," Document List"]}),e("div",{className:"py-0 shadow-xl mt-3",children:e("div",{className:"-mx-4 sm:-mx-8 px-4 sm:px-8 py-0 overflow-x-auto",children:e("div",{className:"inline-block min-w-full rounded-lg overflow-hidden",children:s("table",{className:"min-w-full leading-normal",children:[e("thead",{className:"bg-white",children:s("tr",{className:"font-semibold",children:[e("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm ",children:"#"}),e("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm ",children:"Document Name"}),e("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm ",children:"View"}),e("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm ",children:"Status"}),e("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm ",children:"Remarks"})]})}),s("tbody",{children:[(n==null?void 0:n.length)==0&&!d&&e("tr",{className:"mt-10 py-20",children:e("td",{colSpan:5,className:"text-center",children:e("span",{className:"bg-red-200 text-sm text-red-400 italic my-4 px-4 py-2 rounded-md shadow-lg ",children:"No Document Found !!"})})}),n==null?void 0:n.map((l,a)=>e(j,{openModal:S,docList:l,index:a}))]})]})})})})]})]})}export{q as default};
