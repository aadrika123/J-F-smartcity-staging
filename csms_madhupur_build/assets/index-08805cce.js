import{r as l,u as X,s as Z,b as ee,j as e,B as te,D as ae,t as se,n as h,A as P,e as k,g as le}from"./index-21aade66.js";import{B as ie}from"./BottomErrorCard-c4e8289a.js";import"./lodash-fd0ed28e.js";function ue(){const[v,H]=l.useState([]),[j,ce]=l.useState(!0),[B,o]=l.useState(!1),[b,F]=l.useState(!1),[M,T]=l.useState(null),[I,O]=l.useState(null),[$,m]=l.useState(!1),[c,N]=l.useState(1),[x,q]=l.useState(10),[g,J]=l.useState(),[re,U]=l.useState();l.useState();const{api_schoolistData:V,api_schoollistdeleteData:G}=le(),[f,R]=l.useState();X(),Z("School List");const d=[{id:1,fee_head:10,fee_head_type:10,desc:"hello"},{id:2,fee_head:10,fee_head_type:10,desc:"hello"},{id:3,fee_head:10,fee_head_type:10,desc:"hello"},{id:4,fee_head:10,fee_head_type:10,desc:"hello"},{id:5,fee_head:10,fee_head_type:10,desc:"hello"}],S=ee({initialValues:{search:""},onSubmit:(t,a)=>{console.log("at submit ",t),n(t)}}),Y=[{Header:"Sl No.",Cell:({cell:t})=>e.jsx("span",{children:h(t.row.index+1)})},{Header:"School Code",accessor:"school_code"},{Header:"School Name",accessor:"school_name"},{Header:"Mobile No",accessor:"mobile"},{Header:"Email",accessor:"email"},{Header:"Status",Cell:({cell:t})=>{var a,i;return e.jsx("span",{className:((a=t.row.original)==null?void 0:a.status)==="Active"?"text-[green]":"text-[red]",children:h((i=t.row.original)==null?void 0:i.status)})}},{Header:"Created Date & Time",Cell:({cell:t})=>{var a,i;return e.jsxs("span",{children:[h((a=t.row.original)==null?void 0:a.date)," | ",h((i=t.row.original)==null?void 0:i.time)]})}},{Header:"Action",Cell:({cell:t})=>{var a,i;return e.jsxs("div",{className:"flex",children:[e.jsx("button",{className:"edit-button-master",children:"Edit"}),e.jsx("button",{onClick:()=>{var s,r;O((s=t.row.original)==null?void 0:s.id),R(((r=t.row.original)==null?void 0:r.status)==="Active"?"deactive":"active"),m(!0)},className:`${((a=t.row.original)==null?void 0:a.status)=="Active"?"deactivate-button-master":"deactivate-second-button-master"}`,children:((i=t.row.original)==null?void 0:i.status)==="Active"?"Deactivate":"Activate"})]})}}];console.log(f);const z=()=>{o(!0),m(!1);let t={id:I,status:f};P.post(G,t,k()).then(function(a){var i,s,r;console.log("delete response..",(i=a==null?void 0:a.data)==null?void 0:i.data),((s=a==null?void 0:a.data)==null?void 0:s.status)===!0?n():u(!0,`${(r=a==null?void 0:a.data)==null?void 0:r.message}`),o(!1)}).catch(function(a){console.log("==delete error...",a),u(!0,"Error occured in deletion."),o(!1)})},n=t=>{console.log(t);let a,i;t===void 0?(i={perPage:x,page:c},a=V):(i={search:t},a=api_searchSectionGroupData),o(!0),P.post(a,i,k()).then(function(s){var r,y,w,_,p,L,C,A,D,E;(r=s==null?void 0:s.data)!=null&&r.status?(console.log("section group data",(w=(y=s==null?void 0:s.data)==null?void 0:y.data)==null?void 0:w.data),H((p=(_=s==null?void 0:s.data)==null?void 0:_.data)==null?void 0:p.data),J((C=(L=s==null?void 0:s.data)==null?void 0:L.data)==null?void 0:C.last_page),U((D=(A=s==null?void 0:s.data)==null?void 0:A.data)==null?void 0:D.total)):u(!0,`${(E=s==null?void 0:s.data)==null?void 0:E.message}`),o(!1)}).catch(function(s){u(!0,"Error occured while fetching data."),o(!1)})};console.log(v);const K=t=>{q(parseInt(t))},Q=t=>{N(t-1)},W=t=>{N(t+1)};l.useEffect(()=>{n()},[c]),l.useEffect(()=>{n()},[x]),l.useEffect(()=>{n()},[]);const u=(t,a)=>{T(a),F(t)};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"main-div",children:e.jsxs("div",{className:"main-inner-div",children:[B&&e.jsx(te,{}),b&&e.jsx(ie,{activateBottomErrorCard:u,errorTitle:M}),b&&e.jsxs("div",{className:"alert-msg",role:"alert",children:[e.jsx("strong",{className:"sorry-msg",children:"Sorry! "}),e.jsx("span",{className:"some-error-msg",children:"Some error occured while fetching list. Please try again later"}),e.jsx("span",{className:"absolute-span"})]}),$&&e.jsx(ae,{setdeleteStatus:m,deleteItem:z,deactivate:f}),e.jsxs("div",{className:"main-sub-div",children:[e.jsx("div",{className:"main-sub-inner-div",children:e.jsxs("div",{className:"text-div",children:[e.jsx("div",{className:"big-text",children:"School List"}),e.jsx("div",{className:"small-text",children:"Unlock Your Potential. Join Our Journey Of Education And Excellence"})]})}),e.jsx("div",{className:"tab-div",children:e.jsx("div",{className:"global-filter-div",children:e.jsx("form",{onSubmit:S.handleSubmit,children:e.jsxs("div",{className:"global-filter flex",children:[e.jsx("input",{type:"search",placeholder:"Search...",...S.getFieldProps("search"),className:"bg-[#F2F4F4] h-10 pl-4 "}),e.jsx("button",{className:"bg-[#3b82f6] w-14 max-[320px]:w-8 h-10 rounded-r-[5px] flex items-center justify-center text-white",type:"submit",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",class:"h-5 w-5 ",children:e.jsx("path",{"fill-rule":"evenodd",d:"M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z","clip-rule":"evenodd"})})})," "]})})})})]}),e.jsx("div",{className:"mt-6",children:e.jsx("span",{className:"lists",children:"School List"})}),j&&(d==null?void 0:d.length)!=0&&e.jsx(se,{filter:!1,exportStatus:!1,assessmentType:!1,columns:Y,dataList:v}),e.jsxs("div",{className:"mt-3 grid grid-cols-12 mr-3",children:[e.jsxs("div",{className:"col-span-2",children:[" ",e.jsx("select",{className:"h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ",value:x,onChange:t=>K(t.target.value),children:[5,10,25,50].map(t=>e.jsxs("option",{value:t,children:["show ",t]},t))})]}),e.jsxs("div",{className:"col-span-4 text-center col-start-5",children:[" ",e.jsxs("span",{children:["Page ","",e.jsxs("strong",{children:[c," of ",g]}),""]})]}),e.jsxs("div",{className:"col-span-4 text-right",children:[e.jsx("button",{className:(c===1?"opacity-50":"opacity-100")+" text-xl hover:bg-sky-300 hover:text-white",onClick:()=>Q(c),disabled:c===1,children:"⬅️"}),e.jsx("button",{className:(c===g?"opacity-50":"opacity-100")+" text-xl hover:bg-sky-300 hover:text-white",onClick:()=>W(c),disabled:c===g,children:"➡️"})]})]}),j&&(d==null?void 0:d.length)==0&&e.jsx("div",{className:"data-not-found",children:"Data Not Found"})]})})})}export{ue as default};
