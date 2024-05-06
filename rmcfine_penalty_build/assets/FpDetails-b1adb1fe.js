import{u as H,a as q,r,j as e}from"./index-b42da1a9.js";import{A as w}from"./AxiosInterceptors-6b3b5d6a.js";import{P as V}from"./ProjectApiList-919c817c.js";import{B as W}from"./BarLoader-9b37f4dc.js";import{n as c}from"./PowerupFunctions-06f97d99.js";import{d as x}from"./index.esm-8b1df361.js";import{B as G}from"./BottomErrorCard-205cd99b.js";import{A as S}from"./ApiHeader-6d683756.js";import{P as J}from"./PilotWorkflowDocumentRow-71347645.js";import{M as K}from"./index-d3a1814a.js";import{R as Q}from"./index.esm-c2437a46.js";import{u as X}from"./useSetTitle-bc705181.js";import"./iconBase-b3245ee2.js";import"./index.esm-93eddc1a.js";import"./index-6360e0e1.js";const pe=()=>{var g,b,v,y;X("Fine & Penalty Details");const{id:n}=H(),{fpDetails:D,getFpUploadedDocument:F}=V();q();const[p,o]=r.useState(!1),[a,A]=r.useState(null),[M,E]=r.useState(!1),[P,T]=r.useState(""),[d,_]=r.useState(null),[h,k]=r.useState(null),[z,f]=r.useState(!1),[j,B]=r.useState(""),[u,C]=r.useState(!1),m=(s,l)=>{E(s),T(l)},L=()=>{w.post(D,{applicationId:n},S()).then(s=>{var l,t,i;(l=s==null?void 0:s.data)!=null&&l.status?A((t=s==null?void 0:s.data)==null?void 0:t.data):m(!0,(i=s==null?void 0:s.data)==null?void 0:i.message)}).catch(s=>{m(!0,"Some error occured! Please try again later")}).finally(()=>{o(!1)})},R=()=>{w.post(F,{applicationId:n},S()).then(s=>{var l,t;(l=s==null?void 0:s.data)!=null&&l.status&&_((t=s==null?void 0:s.data)==null?void 0:t.data)}).catch(s=>{}).finally(()=>{o(!1)})},I=()=>f(!0),N=()=>f(!1),O=(s,l,t)=>{B(s),k(l),C(t),I()};return r.useEffect(()=>{o(!0),L(),R()},[n]),p?e.jsx(W,{}):e.jsxs(e.Fragment,{children:[M&&e.jsx(G,{activateBottomErrorCard:m,errorTitle:P}),e.jsx("div",{class:" py-4 w-full bg-white rounded-md shadow-md",children:e.jsxs("div",{className:"",children:[e.jsx("div",{className:"w-full ",children:e.jsx("div",{className:"container mx-auto mb-0 mt-1 p-2 md:p-5 py-1 ",children:e.jsx("div",{className:"md:flex no-wrap md:-mx-2 ",children:e.jsx("div",{className:"w-full md:mx-2 ",children:e.jsxs("div",{className:"md:p-3  rounded-sm",children:[e.jsx("div",{className:"flex items-center pl-0 space-x-2 font-semibold text-gray-900 leading-8 mb-2",children:e.jsx("div",{className:"tracking-wide flex-1 text-xl font-semibold uppercase text-center text-gray-700 border-b border-gray-400 mb-4 pb-1",children:"Fine & Penalty Details "})}),e.jsx("div",{className:" rounded-lg  py-6 bg-white shadow-xl",children:e.jsxs("div",{className:"grid grid-cols-10 space-y-2  pl-4 ",children:[e.jsxs("div",{className:"col-span-5 md:col-span-3 text-xs",children:[e.jsx("div",{className:"font-bold text-sm",children:c(a==null?void 0:a.application_no)}),e.jsx("div",{className:"text-gray-500 flex",children:"Application No."})]}),e.jsxs("div",{className:"col-span-5 md:col-span-3 text-xs",children:[e.jsx("div",{className:"font-bold text-sm",children:c(a==null?void 0:a.apply_date)}),e.jsx("div",{className:"text-gray-500 flex",children:"Apply Date"})]})]})})]})})})})}),(b=(g=a==null?void 0:a.fullDetailsData)==null?void 0:g.dataArray)==null?void 0:b.map(s=>{var l;return e.jsx("div",{className:"w-full ",children:e.jsx("div",{className:"container mx-auto mb-0 mt-1 p-2 md:p-5 py-1 ",children:e.jsx("div",{className:"md:flex no-wrap md:-mx-2 ",children:e.jsx("div",{className:"w-full md:mx-2 ",children:e.jsxs("div",{className:"md:p-3  rounded-sm",children:[e.jsx("div",{className:"flex items-center pl-0 space-x-2 font-semibold text-gray-900 leading-8 mb-2",children:e.jsxs("div",{className:"tracking-wide flex-1",children:[e.jsx(x,{className:"inline font-semibold"})," ",c(s==null?void 0:s.headerTitle)]})}),e.jsx("div",{className:" rounded-lg  py-6 bg-white shadow-xl",children:e.jsx("div",{className:"grid grid-cols-10 space-y-2  pl-4 ",children:(l=s==null?void 0:s.data)==null?void 0:l.map(t=>e.jsxs("div",{className:"col-span-5 md:col-span-2 text-xs",children:[e.jsx("div",{className:"font-bold text-sm",children:c(t==null?void 0:t.value)}),e.jsx("div",{className:"text-gray-500 flex",children:c(t==null?void 0:t.displayString)})]}))})})]})})})})})}),(y=(v=a==null?void 0:a.fullDetailsData)==null?void 0:v.tableArray)==null?void 0:y.map(s=>{var l,t;return e.jsx("div",{className:"w-full overflow-x-auto",children:e.jsx("div",{className:"container mx-auto mb-0 mt-1 md:p-5 py-1 ",children:e.jsx("div",{className:"md:flex no-wrap md:-mx-2 ",children:e.jsx("div",{className:"w-full md:mx-2 ",children:e.jsxs("div",{className:"px-1 md:p-3 rounded-sm",children:[e.jsx("div",{className:"flex items-center pl-0 space-x-2 font-semibold text-gray-900 leading-8 mb-2",children:e.jsxs("span",{className:"tracking-wide",children:[e.jsx(x,{className:"inline font-semibold"})," ",c(s==null?void 0:s.headerTitle)]})}),e.jsx(e.Fragment,{children:e.jsxs("table",{className:"min-w-full leading-normal mt-2 bg-white shadow-xl",children:[e.jsx("thead",{className:"font-bold text-left text-sm bg-white text-gray-600",children:e.jsx("tr",{children:(l=s==null?void 0:s.tableHead)==null?void 0:l.map(i=>e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:c(i)}))})}),e.jsx("tbody",{className:"text-sm",children:e.jsx(e.Fragment,{children:(t=s==null?void 0:s.tableData)==null?void 0:t.map((i,Y)=>e.jsx("tr",{className:"bg-white  border-b border-gray-200",children:i==null?void 0:i.map(U=>e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:c(U)}))}))})})]})})]})})})})})}),e.jsxs("div",{className:"container mx-auto mt-10  px-4  rounded-lg",children:[e.jsxs("h1",{className:"px-1 font-semibold font-serif text-gray-500 mt-10",children:[e.jsx(x,{className:"inline"})," Document List"]}),e.jsx("div",{className:"py-0 shadow-xl mt-3",children:e.jsx("div",{className:"-mx-4 sm:-mx-8 px-4 sm:px-8 py-0 overflow-x-auto",children:e.jsx("div",{className:"inline-block min-w-full rounded-lg overflow-hidden",children:e.jsxs("table",{className:"min-w-full leading-normal",children:[e.jsx("thead",{className:"bg-white",children:e.jsxs("tr",{className:"font-semibold",children:[e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm capitalize",children:"#"}),e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm capitalize",children:"Document Name"}),e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm capitalize",children:"View"})]})}),e.jsx("tbody",{children:d&&e.jsxs(e.Fragment,{children:[(d==null?void 0:d.length)==0&&!p&&e.jsx("tr",{className:"mt-10 py-20",children:e.jsx("td",{colSpan:5,className:"text-center",children:e.jsx("span",{className:"bg-red-200 text-sm text-red-400 italic my-4 px-4 py-2 rounded-md shadow-lg ",children:"No Document Found !!"})})}),d==null?void 0:d.map((s,l)=>e.jsx(J,{openModal:O,docList:s,index:l}))]})})]})})})})]})]})}),e.jsx(K,{isOpen:z,onRequestClose:N,className:"w-screen h-screen flex justify-center items-center",contentLabel:"Example Modal",children:e.jsxs("div",{class:" rounded-lg shadow-xl border-2 border-gray-200 bg-white md:ml-32 p-4 animate__animated animate__zoomIn animate__faster w-full md:w-[60vw] h-[80vh]",children:[e.jsx("div",{className:"absolute top-2 font-normal bg-red-200 hover:bg-red-300 right-2 rounded-full p-2 cursor-pointer",onClick:N,children:e.jsx(Q,{})}),u==!0||u=="true"?e.jsx(e.Fragment,{children:e.jsxs("div",{className:"w-full h-full bg-gray-700 flex items-center justify-center text-gray-200",children:[e.jsx("div",{className:"border-r-2 border-gray-200 pr-4",children:"Error"}),e.jsx("div",{className:"pl-4",children:"Document not visible"})]})}):e.jsxs(e.Fragment,{children:[h=="pdf"&&e.jsx(e.Fragment,{children:e.jsx("iframe",{className:"w-full h-full",src:j,frameborder:"0"})}),h!="pdf"&&e.jsx(e.Fragment,{children:e.jsx("div",{className:"w-full h-[77vh] overflow-auto flex flex-wrap items-center justify-center",children:e.jsx("img",{src:j,alt:"",srcset:"",className:" "})})})]})]})})]})};export{pe as default};
