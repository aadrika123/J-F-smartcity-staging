import{r as l,u as P,s as $,b as O,j as e,B as R,D as U,Y as q,t as z,n as o,A as S,e as w,g as J}from"./index-21aade66.js";import{T as V}from"./Tabs-65330aff.js";import{B as Y}from"./BottomErrorCard-c4e8289a.js";import{I as G}from"./iconify-1f600ab3.js";function ee(){const[y,_]=l.useState([]),[h,K]=l.useState(!0),[M,d]=l.useState(!1),[x,p]=l.useState(!1),[L,A]=l.useState(null),[C,D]=l.useState(null),[E,u]=l.useState(!1),[f,B]=l.useState(),{api_getMenuData:H,api_deleteMenuData:T,api_searchMenuDataById:F}=J(),g=P();$("Menu Master");const c=[{id:1,fee_head:10,fee_head_type:10,desc:"hello"},{id:2,fee_head:10,fee_head_type:10,desc:"hello"},{id:3,fee_head:10,fee_head_type:10,desc:"hello"},{id:4,fee_head:10,fee_head_type:10,desc:"hello"},{id:5,fee_head:10,fee_head_type:10,desc:"hello"}],j=O({initialValues:{search:""},onSubmit:(a,t)=>{console.log("at submit ",a),m(a)}}),I=[{Header:"Sl No.",Cell:({cell:a})=>e.jsx("span",{children:o(a.row.index+1)})},{Header:"User Type",accessor:"user_type"},{Header:"Menu Name",accessor:"menu_name"},{Header:"Icon Name",accessor:"icon_name",Cell:({cell:a})=>{var t;return e.jsx("span",{children:e.jsx(G,{icon:(t=a.row.original)==null?void 0:t.icon_name,className:"w-6 h-6"})})}},{Header:"Status",Cell:({cell:a})=>{var t,i;return e.jsx("span",{className:((t=a.row.original)==null?void 0:t.status)==="Active"?"text-[green]":"text-[red]",children:o((i=a.row.original)==null?void 0:i.status)})}},{Header:"Created Date & Time",Cell:({cell:a})=>{var t,i;return e.jsxs("span",{children:[o((t=a.row.original)==null?void 0:t.date)," | ",o((i=a.row.original)==null?void 0:i.time)]})}},{Header:"Action",Cell:({cell:a})=>{var t,i;return e.jsxs("div",{className:"flex",children:[e.jsx("button",{onClick:()=>{var s;return g(`/menu-form/${(s=a.row.original)==null?void 0:s.id}`)},className:"edit-button-master",children:"Edit"}),e.jsx("button",{onClick:()=>{var s,r;D((s=a.row.original)==null?void 0:s.id),B(((r=a.row.original)==null?void 0:r.status)==="Active"?"deactive":"active"),u(!0)},className:`${((t=a.row.original)==null?void 0:t.status)=="Active"?"deactivate-button-master":"deactivate-second-button-master"}`,children:((i=a.row.original)==null?void 0:i.status)==="Active"?"Deactivate":"Activate"})]})}}],k=()=>{d(!0),u(!1);let a={id:C,status:f};S.post(T,a,w()).then(function(t){var i,s,r;console.log("delete response..",(i=t==null?void 0:t.data)==null?void 0:i.data),((s=t==null?void 0:t.data)==null?void 0:s.status)===!0?m():n(!0,`${(r=t==null?void 0:t.data)==null?void 0:r.message}`),d(!1)}).catch(function(t){console.log("==delete error...",t),n(!0,"Error occured in deletion."),d(!1)})},m=(a=null)=>{let t,i;a===null?(i={},t=H):(i={search:a==null?void 0:a.search},t=F),d(!0),S.post(t,i,w()).then(function(s){var r,v,N,b;console.log("view fee master..",(r=s==null?void 0:s.data)==null?void 0:r.data),(v=s==null?void 0:s.data)!=null&&v.status?_((N=s==null?void 0:s.data)==null?void 0:N.data):n(!0,`${(b=s==null?void 0:s.data)==null?void 0:b.message}`),d(!1)}).catch(function(s){console.log("==2 error list...",s),n(!0,"Error occured while fetching data."),d(!1)})};l.useEffect(()=>{m()},[]);const n=(a,t)=>{A(t),p(a)};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"main-div",children:e.jsxs("div",{className:"main-inner-div",children:[M&&e.jsx(R,{}),x&&e.jsx(Y,{activateBottomErrorCard:n,errorTitle:L}),x&&e.jsxs("div",{className:"alert-msg",role:"alert",children:[e.jsx("strong",{className:"sorry-msg",children:"Sorry! "}),e.jsx("span",{className:"some-error-msg",children:"Some error occured while fetching list. Please try again later"}),e.jsx("span",{className:"absolute-span"})]}),E&&e.jsx(U,{setdeleteStatus:u,deleteItem:k,deactivate:f}),e.jsxs("div",{className:"main-sub-div",children:[e.jsx("div",{className:"main-sub-inner-div",children:e.jsxs("div",{className:"text-div",children:[e.jsx("div",{className:"big-text",children:"Menu Master List"}),e.jsx("div",{className:"small-text",children:"Unlock Your Potential. Join Our Journey Of Education And Excellence"})]})}),e.jsx("div",{className:"tab-div",children:e.jsxs("div",{className:"global-filter-div",children:[e.jsx("form",{onSubmit:j.handleSubmit,children:e.jsxs("div",{className:"global-filter flex",children:[e.jsx("input",{type:"search",placeholder:"Search...",...j.getFieldProps("search"),className:"bg-[#F2F4F4] h-10 pl-4 "}),e.jsx("button",{className:"bg-[#3b82f6] w-14 max-[320px]:w-8 h-10 rounded-r-[5px] flex items-center justify-center text-white",type:"submit",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",class:"h-5 w-5 ",children:e.jsx("path",{"fill-rule":"evenodd",d:"M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z","clip-rule":"evenodd"})})})," "]})}),e.jsx("div",{className:"hiplus-div",children:e.jsx("button",{onClick:()=>g("/menu-form"),type:"button",className:"hiplus-button",children:e.jsx(q,{className:"hiplus"})})})]})})]}),e.jsx(V,{listRoute:"/menu",formRoute:"/menu-form"}),e.jsx("div",{className:"mt-6",children:e.jsx("span",{className:"lists",children:"Menu List"})}),h&&(c==null?void 0:c.length)!=0&&e.jsx(z,{filter:!1,exportStatus:!1,assessmentType:!1,columns:I,dataList:y}),h&&(c==null?void 0:c.length)==0&&e.jsx("div",{className:"data-not-found",children:"Data Not Found"})]})})})}export{ee as default};
