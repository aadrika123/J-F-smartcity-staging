import{r as l,u as ot,c as nt,a as ut,b as mt,j as t,B as xt,n as o,S as y,U as ft,A as v,e as w,g as ht}from"./index-21aade66.js";import{D as jt}from"./delete-e88f32cb.js";import{E as gt}from"./edit-970bcd64.js";function Ct(){var D;const[yt,O]=l.useState(!1),[vt,G]=l.useState(null);l.useState(""),l.useState([]),l.useState(!1);const[J,c]=l.useState(!1);l.useState(),l.useState(!0);const[b,N]=l.useState([]),[R,S]=l.useState(),[H,p]=l.useState(),[z,wt]=l.useState();l.useState(null);const[bt,K]=l.useState(!1);l.useState(!1);const C=ot(),{api_bulkdataaddemployee:Q,api_deleteEmployeeData:W,api_getEmployeeData:X,api_searchEmployeeData:Z}=ht(),V={uploadCSV:""},tt=nt({uploadCSV:ut().required("Select CSV File")}),d=mt({initialValues:V,onSubmit:a=>{const s=new FormData;s.append("uploadCSV",a.uploadCSV),et(s)},validationSchema:tt}),et=a=>{c(!0);let s,i;s=Q,i=a,v.post(s,i,w()).then(function(e){var n;console.log("Registration.....",e==null?void 0:e.data),e!=null&&e.data?(y.fire({icon:"success",title:"Employee",text:"Csv Data Added Successfully.",showConfirmButton:!1,timer:1500}),C("/bulk-employees"),u()):m(!0,`${(n=e==null?void 0:e.data)==null?void 0:n.response}`),c(!1)}).catch(function(e){console.log("==2 error list...",e),m(!0,"Error occured in submitting form."),c(!1)})},at=a=>{d.setFieldValue("uploadCSV",a)},lt=a=>{if(a.target.name=="uploadCSV"){let i=a.target.files[0];at(i);return}};l.useState([]);const[h,E]=l.useState(1),[j,st]=l.useState(10),u=(a=null)=>{c(!0);let s,i;a===null?(i={perPage:j,page:h},s=X):(i={search:z},s=Z),v.post(s,i,w()).then(function(e){var n,g,r,x,f,B,F,A,_,P,L,T,$,q,I,M,U,Y;((n=e==null?void 0:e.data)==null?void 0:n.status)===!0?((r=(g=e==null?void 0:e.data)==null?void 0:g.data)==null?void 0:r.total)===0?(toast.error("Data not Found"),N((f=(x=e==null?void 0:e.data)==null?void 0:x.data)==null?void 0:f.data),S((F=(B=e==null?void 0:e.data)==null?void 0:B.data)==null?void 0:F.last_page),p((_=(A=e==null?void 0:e.data)==null?void 0:A.data)==null?void 0:_.total)):(console.log("exam term data",(L=(P=e==null?void 0:e.data)==null?void 0:P.data)==null?void 0:L.data),N(($=(T=e==null?void 0:e.data)==null?void 0:T.data)==null?void 0:$.data),S((I=(q=e==null?void 0:e.data)==null?void 0:q.data)==null?void 0:I.last_page),p((U=(M=e==null?void 0:e.data)==null?void 0:M.data)==null?void 0:U.total)):toast.error(`${(Y=e==null?void 0:e.data)==null?void 0:Y.message}`),c(!1)}).catch(function(e){console.log("==2 error list...",e),m(!0,"Error occured while fetching data."),c(!1)})};l.useEffect(()=>{u()},[]),console.log(H);const k=b;console.log(b);const it=a=>{st(parseInt(a))},rt=a=>{E(a-1)},ct=a=>{E(a+1)};l.useEffect(()=>{u()},[h]),l.useEffect(()=>{u()},[j]);const dt=(a,s)=>{y.fire({icon:"warning",title:"Are you sure to delete?",showCancelButton:!0,confirmButtonText:"Yes, delete it!",cancelButtonText:"No, cancel!"}).then(e=>{e.value&&i(a,s)});const i=(e,n)=>{c(!0),K(!1);let g={id:e,status:n==="Active"?"deactive":"active"};v.post(W,g,w()).then(function(r){var x,f;console.log("delete response..",(x=r==null?void 0:r.data)==null?void 0:x.data),((f=r==null?void 0:r.data)==null?void 0:f.status)===!0?u():m(!0,"Error occured in deletion."),c(!1)}).catch(function(r){console.log("==delete error...",r),m(!0,"Error occured in deletion."),c(!1)})}},m=(a,s)=>{G(s),O(a)};return t.jsxs(t.Fragment,{children:[" ",J&&t.jsx(xt,{}),t.jsxs("div",{className:"block  w-full mx-[10px] ",children:[t.jsx("div",{className:"flex  max-[694px]:block",children:t.jsx("div",{className:"flex w-full items-start justify-start ml-5 mt-5",children:t.jsxs("div",{className:"block w-full",children:[t.jsx("h1",{className:"text-4xl font-semibold text-gray-700 flex justify-start w-full ",children:"Bulk Employee List"}),t.jsx("h1",{className:"text-teal-600 flex justify-start text-sm w-full",children:"Unlock Your Potential. Join Our Journey Of Education And Excellence"})]})})}),t.jsx("div",{className:"flex mt-[5vh]",children:t.jsx("form",{onSubmit:d.handleSubmit,onChange:lt,encType:"multipart/form-data",className:"flex  items-center justify-center w-full",children:t.jsx("div",{className:"flex  items-center justify-center w-full",children:t.jsxs("div",{className:"flex  items-center justify-center",children:[t.jsxs("label",{htmlFor:"uploadCSV",className:" h-[5vh] flex justify-center items-center px-4 bg-white border border-gray-600 rounded-l font-semibold cursor-pointer text-sm text-black tracking-widest  active:bg-white focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition ",children:[" ","Choose Employee CSV File"]}),t.jsxs("div",{className:"flex items-center justify-center",children:[t.jsx("input",{type:"file",name:"uploadCSV",accept:".csv",id:"uploadCSV",className:"sr-only h-[5vh]  inline-flex items-center px-4 py-2 bg-white border  active:bg-white focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition ",value:d.values.uploadCSV[0],onChange:a=>{d.setFieldValue("uploadCSV",a.target.files[0])}}),d.values.uploadCSV?(D=d.values.uploadCSV)==null?void 0:D.name:"No file selected",t.jsx("br",{}),t.jsx("span",{className:"text-red-600 text-xs ",children:d.touched.uploadCSV&&d.errors.uploadCSV?d.errors.uploadCSV:null})]}),t.jsx("button",{type:"submit",className:"next-btn",children:"Upload"})]})})})}),t.jsx("div",{className:"block ",children:t.jsx("div",{className:"w-auto  h-[60vh] overflow-y-auto overflow-x-hidden flex pt-[3vh]  pr-[3vh] bg-white max-[1024px]:overflow-auto  max-[768px]:w-[95%] max-[425px]:overflow-auto mr-2",children:t.jsxs("div",{className:"block w-full mt-[-20px]",children:[t.jsx("div",{className:"flex items-center text-[2.4vh] justify-end mr-4 mb-[10px] max-[918px]:block",children:t.jsx("div",{className:"float-left w-full flex ml-4 max-[918px]:ml-0"})}),t.jsx("div",{className:"ml-4 mb-4",children:t.jsx("hr",{className:" border-b-2"})}),t.jsxs("div",{className:"w-full h-[60vh] block   ",children:[t.jsxs("table",{className:"w-full mx-4 my-1   border-b border-b-gray overflow-auto max-[1000px]:w-[100vh] max-[1000px]:relative max-[1000px]:overflow-auto",children:[t.jsx("thead",{className:" text-white bg-[#0F766E] text-[1.7vh] p-12 w-full border-b border-b-gray h-[6vh] ",children:t.jsxs("tr",{className:"py-2 pl-4 w-full flex items-start justify-start text-left",children:[t.jsx("th",{className:"w-[50vh]",children:"Sl No."}),t.jsx("th",{className:"w-[100%] flex items-start justify-start",children:"Emp ID"}),t.jsx("th",{className:"w-[100%] flex items-start justify-start",children:"Full Name"}),t.jsx("th",{className:"w-[100%] flex items-start justify-start",children:"Gender"}),t.jsx("th",{className:"w-[100%] flex items-start justify-start ",children:"Department"}),t.jsx("th",{className:"w-[100%] flex items-start justify-start ",children:"Blood Group"}),t.jsx("th",{className:"w-[100%] flex items-start justify-start",children:"Mobile"}),t.jsx("th",{className:"w-[100%] flex items-start justify-start",children:"Email"}),t.jsx("th",{className:"w-[100%] flex items-start justify-start",children:"Status"}),t.jsx("th",{className:"w-[100%] flex items-center justify-center pr-1 mr-[2vh]",children:"Action"})]})}),t.jsx("tbody",{children:k&&k.map((a,s)=>t.jsx(t.Fragment,{children:t.jsxs("tr",{className:"py-2 pl-4 w-full text-[1.6vh] flex items-center justify-center text-[#696969] text-left verdana even:bg-gray-100",children:[t.jsx("td",{className:"w-[50vh] flex items-start justify-start text-[1.5vh]  px-1",children:o((h-1)*j+s+1)}),t.jsx("td",{className:"w-[100%] flex items-start justify-start  px-1",children:o(a.emp_no)}),t.jsx("td",{className:"w-[100%] flex items-start justify-start  px-1",children:o(a.full_name)}),t.jsx("td",{className:"w-[100%] flex items-start justify-start  px-1",children:o(a.gender_name)}),t.jsx("td",{className:"w-[100%] flex items-start justify-start  px-1",children:o(a.department_name)}),t.jsx("td",{className:"w-[100%] flex items-center justify-center   px-1",children:o(a.blood_group_name)}),t.jsx("td",{className:"w-[100%] flex items-start justify-start  px-1",children:o(a.mobile)}),t.jsx("td",{className:"w-[100%] flex items-start justify-start  px-1",children:(a==null?void 0:a.email)||"NA"}),t.jsx("td",{className:"w-[100%] flex items-start justify-start px-1",children:t.jsxs("span",{className:`text-xs font-semibold inline-block py-1 px-2 rounded ${a.status=="Active"?"text-green-600 bg-green-200":"text-red-600 bg-red-200"}  last:mr-0 `,children:[" ",o(a==null?void 0:a.status)]})}),t.jsxs("td",{className:" w-[100%] flex items-center justify-center",children:[t.jsx("a",{title:"Edit",children:t.jsx("img",{src:gt,className:"mr-2 text-indigo-600  hover:text-gray-500 w-6 h-6",onClick:()=>{y.fire({icon:"warning",title:"Are you sure?",text:"You want to update it!",showCancelButton:!0,confirmButtonText:"Yes, update it!",cancelButtonText:"No, cancel!"}).then(i=>{i.value&&C(`/second-editemployee/${a.id}`)})}})}),t.jsx("a",{title:"Delete",children:t.jsx("img",{src:jt,className:" text-red-600 hover:text-gray-500 mr-2 w-6 h-6",onClick:()=>dt(a.id,a==null?void 0:a.status)})})]})]})}))})]}),t.jsx(ft,{ChangePage:it,number:h,lastPage:R,nextPage:ct,prevPage:rt,postperpage:j})]})]})})})]})]})}export{Ct as default};
