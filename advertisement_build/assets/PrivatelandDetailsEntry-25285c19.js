import{M as I,r as c,g as T,h as L,d as g,e as B,f as l,F as E,j as e,i as M,k as u,l as j,A as P}from"./index-aa0d4902.js";import{u as _}from"./useSetTitle-437759d4.js";I.setAppElement("#root");function q(){var m,p,h,x;const{api_privateLandApplicationFullDetailById:f,api_privateLandViewDocuments:N}=P();_("Agency Details");const[n,y]=c.useState();c.useState(),T();const{id:r}=L(),[o,b]=c.useState(),[d,i]=c.useState(!1),[O,A]=c.useState(!1),[R,v]=c.useState(""),w=()=>A(!0);c.useEffect(()=>{D()},[]);const D=()=>{console.log("before document fetch ",r);let s={applicationId:r};g.post(N,s,B()).then(a=>{var t;console.log("document list at saf application details ",a),y((t=a==null?void 0:a.data)==null?void 0:t.data)}).catch(a=>{console.log("error at saf application details ",a)})},S=s=>{console.log("incoming doc url modal => ",s),v(s),w()},k=()=>{i(!0);const a={headers:{Authorization:`Bearer ${window.localStorage.getItem("token")}`,Accept:"application/json"}};g.post(f,{applicationId:r,type:"Active"},a).then(function(t){console.log("agency application details",t.data.data),b(t.data.data),i(!1)}).catch(function(t){console.log("agency application details error...",t),i(!1)})};return c.useEffect(()=>{k()},[]),l(E,{children:[d&&e(M,{}),e("div",{className:"grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-2 container mx-auto w-full",children:l("div",{className:"col-span-12 rounded-lg  p-4",children:[e("h1",{className:"mb-2 pl-2 font-bold text-3xl text-gray-700 uppercase underline text-center",children:nullToNA((p=(m=o==null?void 0:o.fullDetailsData)==null?void 0:m.cardArray)==null?void 0:p.headerTitle)}),l("h1",{className:"flex-1 flex pl-2 font-bold text-2xl text-gray-700",children:["Application No. -",nullToNA((o==null?void 0:o.application_no)||"")]}),l("div",{className:"p-4",children:[l("h1",{className:"px-1 font-semibold font-serif  text-gray-500",children:[e(u,{className:"inline"})," Basic Details"]}),(x=(h=o==null?void 0:o.fullDetailsData)==null?void 0:h.dataArray)==null?void 0:x.map(s=>{var a;return e("div",{className:"grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 container mx-auto bg-white rounded-lg shadow-xl p-4 mt-4",children:(a=s==null?void 0:s.data)==null?void 0:a.map(t=>l("div",{className:"pl-4 p-2",children:[l("h1",{className:"font-bold text-sm",children:[nullToNA((t==null?void 0:t.value)||"N/A")," "]}),e("h1",{className:"text-gray-500 text-xs",children:nullToNA(t==null?void 0:t.displayString)})]}))})})]})]})}),l("div",{className:"container mx-auto mt-10  px-5 pb-48  rounded-lg",children:[l("h1",{className:"px-1 font-semibold font-serif text-gray-500 mt-10",children:[e(u,{className:"inline"})," Document List"]}),e("div",{className:"py-0 shadow-xl mt-3",children:e("div",{className:"-mx-4 sm:-mx-8 px-4 sm:px-8 py-0 overflow-x-auto",children:e("div",{className:"inline-block min-w-full rounded-lg overflow-hidden",children:l("table",{className:"min-w-full leading-normal",children:[e("thead",{className:"bg-white",children:l("tr",{className:"font-semibold",children:[e("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm ",children:"#"}),e("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm ",children:"Document Name"}),e("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm ",children:"View"}),e("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm ",children:"Status"}),e("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm ",children:"Remarks"})]})}),l("tbody",{children:[(n==null?void 0:n.length)==0&&!d&&e("tr",{className:"mt-10 py-20",children:e("td",{colSpan:5,className:"text-center",children:e("span",{className:"bg-red-200 text-sm text-red-400 italic my-4 px-4 py-2 rounded-md shadow-lg ",children:"No Document Found !!"})})}),n==null?void 0:n.map((s,a)=>e(j,{openModal:S,docList:s,index:a}))]})]})})})})]})]})}export{q as default};
