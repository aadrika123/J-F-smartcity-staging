import{r as l,u as G,s as I,b as P,j as e,B as $,D as O,X as R,L as q,n as d,A as b,e as S,g as z}from"./index-de640f8f.js";import{T as J}from"./Tabs-e95c1dde.js";import{B as U}from"./BottomErrorCard-511fba4a.js";function W(){const[h,w]=l.useState([]),[x,V]=l.useState(!0),[y,r]=l.useState(!1),[f,L]=l.useState(!1),[D,A]=l.useState(null),[M,C]=l.useState(null),[H,u]=l.useState(!1),[g,E]=l.useState(),{api_fetchDiscoutGroupListMap:B,api_deleteDiscountByIdMap:F,api_searchDiscoutGroupListMap:T}=z(),p=G();I("Fee Head Type Master");const c=[{id:1,fee_head_type:10,discount_group:10,is_annual:"Yes",is_optional:"No",is_latefee_applicable:"No"},{id:2,fee_head_type:10,discount_group:10,is_annual:"No",is_optional:"Yes",is_latefee_applicable:"Yes"},{id:3,fee_head_type:10,discount_group:10,is_annual:"Yes",is_optional:"No",is_latefee_applicable:"Yes"},{id:4,fee_head_type:10,discount_group:10,is_annual:"No",is_optional:"Yes",is_latefee_applicable:"Yes"},{id:5,fee_head_type:10,discount_group:10,is_annual:"Yes",is_optional:"No",is_latefee_applicable:"No"}],_=P({initialValues:{search:""},onSubmit:(a,t)=>{console.log("at submit ",a),m(a)}}),Y=[{Header:"Sl No.",Cell:({cell:a})=>e.jsx("span",{children:d(a.row.index+1)})},{Header:"Admission No",accessor:"admission_no"},{Header:"Student name",accessor:"student_name"},{Header:"Discount Group Name",accessor:"discount_group"},{Header:"Discount % ",accessor:"discount_percent"},{Header:"Created Date & Time",Cell:({cell:a})=>{var t,i;return e.jsxs("span",{children:[d((t=a.row.original)==null?void 0:t.date)," | ",d((i=a.row.original)==null?void 0:i.time)]})}},{Header:"Status",Cell:({cell:a})=>{var t,i;return e.jsx("span",{className:((t=a.row.original)==null?void 0:t.status)==="Active"?"text-[green]":"text-[red]",children:d((i=a.row.original)==null?void 0:i.status)})}},{Header:"Action",Cell:({cell:a})=>{var t,i;return e.jsxs("div",{className:"flex",children:[e.jsx("button",{onClick:()=>p(`/discount-group-map-form/${a.row.original.id}`),className:"edit-button-master",children:"Edit"}),e.jsx("button",{onClick:()=>{var s,o;C((s=a.row.original)==null?void 0:s.id),E(((o=a.row.original)==null?void 0:o.status)==="Active"?"deactive":"active"),u(!0)},className:`${((t=a.row.original)==null?void 0:t.status)=="Active"?"deactivate-button-master":"deactivate-second-button-master"}`,children:((i=a.row.original)==null?void 0:i.status)==="Active"?"Deactivate":"Activate"})]})}}],k=()=>{r(!0),u(!1);let a={id:M,status:g};b.post(F,a,S()).then(function(t){var i,s,o;console.log("delete response..",(i=t==null?void 0:t.data)==null?void 0:i.data),(s=t==null?void 0:t.data)!=null&&s.status?m():n(!0,`${(o=t==null?void 0:t.data)==null?void 0:o.message}`),r(!1)}).catch(function(t){console.log("==delete error...",t),n(!0,"Error occured in deletion."),r(!1)})},m=(a=null)=>{let t,i;a===null?(i={},t=B):(i={search:a==null?void 0:a.search},t=T),r(!0),b.post(t,i,S()).then(function(s){var o,j,N,v;console.log("view discount group map..",(o=s==null?void 0:s.data)==null?void 0:o.data),(j=s==null?void 0:s.data)!=null&&j.status?w((N=s==null?void 0:s.data)==null?void 0:N.data):n(!0,`${(v=s==null?void 0:s.data)==null?void 0:v.message}`),r(!1)}).catch(function(s){console.log("==2 error list...",s),n(!0,"Error occured while fetching data."),r(!1)})};l.useEffect(()=>{m()},[]);const n=(a,t)=>{A(t),L(a)};return console.log(h),e.jsx(e.Fragment,{children:e.jsx("div",{className:"main-div",children:e.jsxs("div",{className:"main-inner-div",children:[y&&e.jsx($,{}),f&&e.jsx(U,{activateBottomErrorCard:n,errorTitle:D}),f&&e.jsxs("div",{className:"alert-msg",role:"alert",children:[e.jsx("strong",{className:"sorry-msg",children:"Sorry! "}),e.jsx("span",{className:"some-error-msg",children:"Some error occured while fetching list. Please try again later"}),e.jsx("span",{className:"absolute-span"})]}),H&&e.jsx(O,{setdeleteStatus:u,deleteItem:k,deactivate:g}),e.jsxs("div",{className:"main-sub-div",children:[e.jsx("div",{className:"main-sub-inner-div",children:e.jsxs("div",{className:"text-div",children:[e.jsx("div",{className:"big-text",children:"Discount Group Map List"}),e.jsx("div",{className:"small-text",children:"Unlock Your Potential. Join Our Journey Of Education And Excellence"})]})}),e.jsx("div",{className:"tab-div",children:e.jsxs("div",{className:"global-filter-div",children:[e.jsx("form",{onSubmit:_.handleSubmit,children:e.jsxs("div",{className:"global-filter flex",children:[e.jsx("input",{type:"search",placeholder:"Search...",..._.getFieldProps("search"),className:"bg-[#F2F4F4] h-10 pl-4 "}),e.jsx("button",{className:"bg-[#3b82f6] w-14 max-[320px]:w-8 h-10 rounded-r-[5px] flex items-center justify-center text-white",type:"submit",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",class:"h-5 w-5 ",children:e.jsx("path",{"fill-rule":"evenodd",d:"M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z","clip-rule":"evenodd"})})})," "]})}),e.jsx("div",{className:"hiplus-div",children:e.jsx("button",{onClick:()=>p("/discount-group-map-form"),type:"button",className:"hiplus-button",children:e.jsx(R,{className:"hiplus"})})})]})})]}),e.jsx(J,{listRoute:"/discount-group-map",formRoute:"/discount-group-map-form"}),e.jsx("div",{className:"mt-6",children:e.jsx("span",{className:"lists",children:" Discount Group Map List"})}),x&&(c==null?void 0:c.length)!=0&&e.jsx(q,{filter:!1,exportStatus:!1,assessmentType:!1,columns:Y,dataList:h}),x&&(c==null?void 0:c.length)==0&&e.jsx("div",{className:"data-not-found",children:"Data Not Found"})]})})})}export{W as default};
