import{r as l,u as I,s as $,b as O,j as e,B as R,D as q,Y as z,t as J,n,A as b,e as S,g as U}from"./index-21aade66.js";import{T as V}from"./Tabs-65330aff.js";import{B as Y}from"./BottomErrorCard-c4e8289a.js";function X(){const[w,P]=l.useState([]),[h,G]=l.useState(!0),[_,c]=l.useState(!1),[x,k]=l.useState(!1),[y,A]=l.useState(null),[L,C]=l.useState(null),[D,u]=l.useState(!1),[f,E]=l.useState(),{api_getPickupPointData:B,api_deletePickupPointData:F,api_searchPickupPointData:H}=U(),g=I();$("Pickup Point Master");const d=[{id:1,fee_head:10,fee_head_type:10,desc:"hello"},{id:2,fee_head:10,fee_head_type:10,desc:"hello"},{id:3,fee_head:10,fee_head_type:10,desc:"hello"},{id:4,fee_head:10,fee_head_type:10,desc:"hello"},{id:5,fee_head:10,fee_head_type:10,desc:"hello"}],j=O({initialValues:{search:""},onSubmit:(a,t)=>{console.log("at submit ",a),m(a)}}),M=[{Header:"Sl No.",Cell:({cell:a})=>e.jsx("span",{children:n(a.row.index+1)})},{Header:"Pickup Point Name",accessor:"pickup_point_name"},{Header:"Pickup Point Address",accessor:"pickup_point_address"},{Header:"Status",Cell:({cell:a})=>{var t,i;return e.jsx("span",{className:((t=a.row.original)==null?void 0:t.status)==="Active"?"text-[green]":"text-[red]",children:n((i=a.row.original)==null?void 0:i.status)})}},{Header:"Created Date & Time",Cell:({cell:a})=>{var t,i;return e.jsxs("span",{children:[n((t=a.row.original)==null?void 0:t.date)," | ",n((i=a.row.original)==null?void 0:i.time)]})}},{Header:"Action",Cell:({cell:a})=>{var t,i;return e.jsxs("div",{className:"flex",children:[e.jsx("button",{onClick:()=>{var s;return g(`/pickup-point-form/${(s=a.row.original)==null?void 0:s.id}`)},className:"edit-button-master",children:"Edit"}),e.jsx("button",{onClick:()=>{var s,r;C((s=a.row.original)==null?void 0:s.id),E(((r=a.row.original)==null?void 0:r.status)==="Active"?"deactive":"active"),u(!0)},className:`${((t=a.row.original)==null?void 0:t.status)=="Active"?"deactivate-button-master":"deactivate-second-button-master"}`,children:((i=a.row.original)==null?void 0:i.status)==="Active"?"Deactivate":"Activate"})]})}}],T=()=>{c(!0),u(!1);let a={id:L,status:f};b.post(F,a,S()).then(function(t){var i,s,r;console.log("delete response..",(i=t==null?void 0:t.data)==null?void 0:i.data),((s=t==null?void 0:t.data)==null?void 0:s.status)===!0?m():o(!0,`${(r=t==null?void 0:t.data)==null?void 0:r.message}`),c(!1)}).catch(function(t){console.log("==delete error...",t),o(!0,"Error occured in deletion."),c(!1)})},m=(a=null)=>{let t,i;a===null?(i={},t=B):(i={search:a==null?void 0:a.search},t=H),c(!0),b.post(t,i,S()).then(function(s){var r,p,v,N;console.log("view fee master..",(r=s==null?void 0:s.data)==null?void 0:r.data),(p=s==null?void 0:s.data)!=null&&p.status?P((v=s==null?void 0:s.data)==null?void 0:v.data):o(!0,`${(N=s==null?void 0:s.data)==null?void 0:N.message}`),c(!1)}).catch(function(s){console.log("==2 error list...",s),o(!0,"Error occured while fetching data."),c(!1)})};l.useEffect(()=>{m()},[]);const o=(a,t)=>{A(t),k(a)};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"main-div",children:e.jsxs("div",{className:"main-inner-div",children:[_&&e.jsx(R,{}),x&&e.jsx(Y,{activateBottomErrorCard:o,errorTitle:y}),x&&e.jsxs("div",{className:"alert-msg",role:"alert",children:[e.jsx("strong",{className:"sorry-msg",children:"Sorry! "}),e.jsx("span",{className:"some-error-msg",children:"Some error occured while fetching list. Please try again later"}),e.jsx("span",{className:"absolute-span"})]}),D&&e.jsx(q,{setdeleteStatus:u,deleteItem:T,deactivate:f}),e.jsxs("div",{className:"main-sub-div",children:[e.jsx("div",{className:"main-sub-inner-div",children:e.jsxs("div",{className:"text-div",children:[e.jsx("div",{className:"big-text",children:"Pickup Point Master List"}),e.jsx("div",{className:"small-text",children:"Unlock Your Potential. Join Our Journey Of Education And Excellence"})]})}),e.jsx("div",{className:"tab-div",children:e.jsxs("div",{className:"global-filter-div",children:[e.jsx("form",{onSubmit:j.handleSubmit,children:e.jsxs("div",{className:"global-filter flex",children:[e.jsx("input",{type:"search",placeholder:"Search...",...j.getFieldProps("search"),className:"bg-[#F2F4F4] h-10 pl-4 "}),e.jsx("button",{className:"bg-[#3b82f6] w-14 max-[320px]:w-8 h-10 rounded-r-[5px] flex items-center justify-center text-white",type:"submit",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",class:"h-5 w-5 ",children:e.jsx("path",{"fill-rule":"evenodd",d:"M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z","clip-rule":"evenodd"})})})," "]})}),e.jsx("div",{className:"hiplus-div",children:e.jsx("button",{onClick:()=>g("/pickup-point-form"),type:"button",className:"hiplus-button",children:e.jsx(z,{className:"hiplus"})})})]})})]}),e.jsx(V,{listRoute:"/pickup-point",formRoute:"/pickup-point-form"}),e.jsx("div",{className:"mt-6",children:e.jsx("span",{className:"text-lg font-noarml text-gray-500",children:"Pickup Point List"})}),h&&(d==null?void 0:d.length)!=0&&e.jsx(J,{filter:!1,exportStatus:!1,assessmentType:!1,columns:M,dataList:w}),h&&(d==null?void 0:d.length)==0&&e.jsx("div",{className:"text-xl font-semibold text-red-400 text-center",children:"Data Not Found"})]})})})}export{X as default};
