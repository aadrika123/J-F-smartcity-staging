import{r as d,u as ge,s as Ne,b as be,j as e,B as _e,D as ye,C as Fe,n as c,Y as Se,t as pe,U as Ce,A as b,e as _,g as Le}from"./index-21aade66.js";import{T as Ee}from"./Tabs-277b6e58.js";import{B as Ae}from"./BottomErrorCard-c4e8289a.js";function ke(){var k;const[g,y]=d.useState([]),[o,v]=d.useState(!1),[F,He]=d.useState(!0),[Z,r]=d.useState(!1),[S,p]=d.useState(!1),[T,V]=d.useState(null),[ee,te]=d.useState(null),[ae,N]=d.useState(!1),[se,C]=d.useState(!1),[L,le]=d.useState(),[t,ie]=d.useState(),[m,E]=d.useState(1),[f,ce]=d.useState(10),[de,A]=d.useState(),[H,M]=d.useState(),{api_fetchClassFeeList:re,api_deleteClassFeeById:ne,api_getClassFeeById:xe,api_searchClassFeeList:oe}=Le(),P=ge();Ne("Fee Head Type Master");const x=[{id:1,fee_head_type:10,is_annual:"Yes",is_optional:"No",is_latefee_applicable:"No"},{id:2,fee_head_type:10,is_annual:"No",is_optional:"Yes",is_latefee_applicable:"Yes"},{id:3,fee_head_type:10,is_annual:"Yes",is_optional:"No",is_latefee_applicable:"Yes"},{id:4,fee_head_type:10,is_annual:"No",is_optional:"Yes",is_latefee_applicable:"Yes"},{id:5,fee_head_type:10,is_annual:"Yes",is_optional:"No",is_latefee_applicable:"No"}],D=be({initialValues:{search:""},onSubmit:(s,i)=>{console.log("at submit ",s),h(s)}}),me=[{Header:"Sl No.",Cell:({cell:s})=>e.jsx("span",{children:c(s.row.index+1)})},{Header:"Class",accessor:"class_name"},{Header:"Section",accessor:"section_name"},{Header:"Head Type",accessor:"fee_head_type",Cell:({cell:s})=>e.jsx("span",{children:c(s.row.original.fee_head_type)})},{Header:"Fee Head",accessor:"fee_head",Cell:({cell:s})=>e.jsx("span",{children:c(s.row.original.fee_head)})},{Header:"Created Date & Time",Cell:({cell:s})=>{var i,l;return e.jsxs("span",{children:[c((i=s.row.original)==null?void 0:i.date)," |"," ",c((l=s.row.original)==null?void 0:l.time)]})}},{Header:"Status",Cell:({cell:s})=>{var i,l;return e.jsx("span",{className:((i=s.row.original)==null?void 0:i.status)==="Active"?"text-[green]":"text-[red]",children:c((l=s.row.original)==null?void 0:l.status)})}},{Header:"Action",Cell:({cell:s})=>{var i,l;return e.jsxs("div",{className:"flex",children:[e.jsx("button",{onClick:()=>{var a;return P(`/classfee-master-form/${(a=s.row.original)==null?void 0:a.id}`)},className:"edit-button-master",children:"Edit"}),e.jsx("button",{onClick:()=>{var a,n;te((a=s.row.original)==null?void 0:a.id),le(((n=s.row.original)==null?void 0:n.status)==="Active"?"deactive":"active"),N(!0)},className:`${((i=s.row.original)==null?void 0:i.status)=="Active"?"deactivate-button-master":"deactivate-second-button-master"}`,children:((l=s.row.original)==null?void 0:l.status)==="Active"?"Deactivate":"Activate"}),e.jsx("button",{onClick:()=>{var a;return he((a=s.row.original)==null?void 0:a.id)},className:"view-button-master",children:"View"})]})}}],fe=()=>{r(!0),N(!1);let s={id:ee,status:L};b.post(ne,s,_()).then(function(i){var l,a;console.log("delete response..",(l=i==null?void 0:i.data)==null?void 0:l.data),(a=i==null?void 0:i.data)!=null&&a.status?h():u(!0,"Error occured in deletion."),r(!1)}).catch(function(i){console.log("==delete error...",i),u(!0,"Error occured in deletion."),r(!1)})},h=(s=null)=>{let i,l;s===null?(l={perPage:f,page:m},i=re):(l={search:s==null?void 0:s.search,perPage:f,page:m},i=oe),r(!0),b.post(i,l,_()).then(function(a){var n,j,B,Y,w,I,J,O,q,z,R,U,$,G,K,Q,W,X;((n=a==null?void 0:a.data)==null?void 0:n.status)===!0?((B=(j=a==null?void 0:a.data)==null?void 0:j.data)==null?void 0:B.total)===0?(toast.error("Data not Found"),y((w=(Y=a==null?void 0:a.data)==null?void 0:Y.data)==null?void 0:w.data),A((J=(I=a==null?void 0:a.data)==null?void 0:I.data)==null?void 0:J.last_page),M((q=(O=a==null?void 0:a.data)==null?void 0:O.data)==null?void 0:q.total),v(!1)):(console.log("exam term data",(R=(z=a==null?void 0:a.data)==null?void 0:z.data)==null?void 0:R.data),y(($=(U=a==null?void 0:a.data)==null?void 0:U.data)==null?void 0:$.data),A((K=(G=a==null?void 0:a.data)==null?void 0:G.data)==null?void 0:K.last_page),M((W=(Q=a==null?void 0:a.data)==null?void 0:Q.data)==null?void 0:W.total),v(!1)):toast.error(`${(X=a==null?void 0:a.data)==null?void 0:X.message}`),r(!1)}).catch(function(a){console.log("==2 error list...",a),u(!0,"Error occured while fetching data."),r(!1)})},he=s=>{r(!0);let i={id:s};b.post(xe,i,_()).then(function(l){var a,n,j;console.log("fetch fee master view data response..",(a=l==null?void 0:l.data)==null?void 0:a.data),(n=l==null?void 0:l.data)!=null&&n.status?(ie((j=l==null?void 0:l.data)==null?void 0:j.data),C(!0)):u(!0,"Error occured in submitting deactivation application. Please try again later."),r(!1)}).catch(function(l){console.log("= edit data error...",l),p(!0),r(!1)})};d.useEffect(()=>{h()},[]);const u=(s,i)=>{V(i),p(s)};console.log(H),console.log(g);const ue=s=>{ce(parseInt(s)),v(!0)},je=s=>{E(s-1)},ve=s=>{E(s+1)};return d.useEffect(()=>{m&&o&&h()},[m,o]),d.useEffect(()=>{f&&o&&h()},[f,o]),e.jsx(e.Fragment,{children:e.jsx("div",{className:"main-div",children:e.jsxs("div",{className:"main-inner-div",children:[Z&&e.jsx(_e,{}),S&&e.jsx(Ae,{activateBottomErrorCard:u,errorTitle:T}),S&&e.jsxs("div",{className:"alert-msg",role:"alert",children:[e.jsx("strong",{className:"sorry-msg",children:"Sorry! "}),e.jsx("span",{className:"some-error-msg",children:"Some error occured while fetching list. Please try again later"}),e.jsx("span",{className:"absolute-span"})]}),ae&&e.jsx(ye,{setdeleteStatus:N,deleteItem:fe,deactivate:L}),se&&e.jsx(Fe,{children:e.jsxs("div",{className:"w-full bg-[#ddf8f6] shadow-xl mb-6 relative",children:[e.jsx("button",{onClick:()=>C(!1),type:"button",class:"absolute top-3 right-10 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center darks:hover:bg-gray-800 darks:hover:text-white",children:e.jsx("svg",{class:"w-5 h-5",fill:"currentColor",children:e.jsx("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})})}),e.jsxs("div",{className:"py-6 mt-2 rounded-lg shadow-lg p-4",children:[e.jsx("div",{className:"font-semibold text-lg px-2 mb-5 text-[#1d807b]",children:"# School Fee"}),e.jsxs("div",{className:"flex flex-col md:flex-row space-y-2 md:space-x-5 pl-4 ",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:c(t==null?void 0:t.class_name)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Class"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:c(t==null?void 0:t.fee_head)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Fee Head"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:c(t==null?void 0:t.fee_amount)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Fee Amount"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:c(t==null?void 0:t.discount)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Discount"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:c(t==null?void 0:t.net_fee)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Net Fee"})]})]}),e.jsxs("div",{className:"flex flex-col md:flex-row space-y-2 md:space-x-10  pl-4 mt-4",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:c(t==null?void 0:t.jan_fee)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"January Fee"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:c(t==null?void 0:t.feb_fee)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"February Fee"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:c(t==null?void 0:t.mar_fee)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"March Fee"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:c(t==null?void 0:t.apr_fee)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"April Fee"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:c(t==null?void 0:t.may_fee)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"May Fee"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:c(t==null?void 0:t.jun_fee)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"June Fee"})]})]}),e.jsxs("div",{className:"flex flex-col md:flex-row space-y-2 md:space-x-10  pl-4 mt-4",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:c(t==null?void 0:t.jul_fee)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"July Fee"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:c(t==null?void 0:t.aug_fee)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"August Fee"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:c(t==null?void 0:t.sep_fee)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"September Fee"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:c(t==null?void 0:t.oct_fee)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"October Fee"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:c(t==null?void 0:t.nov_fee)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"November Fee"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:c(t==null?void 0:t.dec_fee)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"December Fee"})]})]})]})]})}),e.jsxs("div",{className:"main-sub-div",children:[e.jsx("div",{className:"main-sub-inner-div",children:e.jsxs("div",{className:"text-div",children:[e.jsx("div",{className:"big-text",children:"Class Fee Master List"}),e.jsx("div",{className:"small-text text-teal-300",children:"Unlock Your Potential. Join Our Journey Of Education And Excellence"})]})}),e.jsx("div",{className:"tab-div",children:e.jsxs("div",{className:"global-filter-div",children:[e.jsx("form",{onSubmit:D.handleSubmit,children:e.jsxs("div",{className:"global-filter flex",children:[e.jsx("input",{type:"search",placeholder:"Search...",...D.getFieldProps("search"),className:"bg-[#F2F4F4] h-10 pl-4 "}),e.jsx("button",{className:"bg-[#0F766E] w-14 max-[320px]:w-8 h-10 rounded-r-[5px] flex items-center justify-center text-white",type:"submit",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",class:"h-5 w-5 ",children:e.jsx("path",{"fill-rule":"evenodd",d:"M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z","clip-rule":"evenodd"})})})," "]})}),e.jsx("div",{className:"hiplus-div",children:e.jsx("button",{onClick:()=>P("/classfee-master-form"),type:"button",className:"hiplus-button bg-[#0F766E] hover:bg-[#0F766E]",children:e.jsx(Se,{className:"hiplus"})})})]})})]}),e.jsx(Ee,{listRoute:"/classfee-master",formRoute:"/classfee-master-form"}),e.jsx("div",{className:"mt-6",children:e.jsxs("span",{className:"lists text-[#0F766E]",children:[" ","Class Fee Master List (",(k=g[0])==null?void 0:k.academic_year,")"]})}),F&&(x==null?void 0:x.length)!=0&&e.jsxs(e.Fragment,{children:[e.jsx(pe,{filter:!1,exportStatus:!1,assessmentType:!1,columns:me,dataList:g,pageNumber:H}),e.jsx(Ce,{ChangePage:ue,number:m,lastPage:de,nextPage:ve,prevPage:je,postperpage:f,blockToast:o,setBlockToast:v})]}),F&&(x==null?void 0:x.length)==0&&e.jsx("div",{className:"data-not-found",children:"Data Not Found"})]})})})}export{ke as default};
