import{r as i,s as Le,c as Pe,a as p,b as Be,j as t,P as Ve,B as $e,D as ke,t as qe,U as Me,A as N,e as b,Q as n,n as _,S as Ue,x as Oe,K as W,l as Ye,g as Je}from"./index-21aade66.js";const Ge=()=>{const[f,F]=i.useState([]),[y,H]=i.useState(!1),[X,Z]=i.useState(null),[T,Ke]=i.useState(!0),[ee,te]=i.useState(!1),[ae,le]=i.useState([]),[de,r]=i.useState(!1),[ze,E]=i.useState(!1),[Qe,se]=i.useState(null),[h,D]=i.useState(null),[ie,w]=i.useState(!1),[A,ce]=i.useState(),[m,C]=i.useState(1),[S,re]=i.useState([]),[x,oe]=i.useState(10),[ne,I]=i.useState(),[L,P]=i.useState(),[ue,me]=i.useState(),{api_fetcHeadTypeActiveList:fe,api_fetcHeadList:he,api_searchHeadList:xe,api_postHead:ge,api_editHead:je,api_getHeadById:ye,api_deleteHeadById:ve}=Je(),Ne=()=>{N.post(fe,{},b()).then(function(e){var d,l,a;(d=e==null?void 0:e.data)!=null&&d.status?re((l=e==null?void 0:e.data)==null?void 0:l.data):B(!0,`${(a=e==null?void 0:e.data)==null?void 0:a.message}`),r(!1)}).catch(function(e){console.log("==2 error list...",e),B(!0,"Error occured while fetching data.")})};i.useEffect(()=>{Ne()},[]),Le("Fee Head type Master");const g=[{id:1,fee_head:10,fee_head_type:10,desc:"hello"},{id:2,fee_head:10,fee_head_type:10,desc:"hello"},{id:3,fee_head:10,fee_head_type:10,desc:"hello"},{id:4,fee_head:10,fee_head_type:10,desc:"hello"},{id:5,fee_head:10,fee_head_type:10,desc:"hello"}],be=Pe({feeHead:p().required("Enter fee head."),feeHeadTypeId:p().required("Select fee head type"),description:p().required("Enter description.")}),c=Be({initialValues:{feeHead:"",feeHeadTypeId:"",description:""},onSubmit:(e,d)=>{console.log("at submit ",e),Ee(e),c.resetForm()},validationSchema:be}),j=e=>{console.log(e);let d,l;e===void 0?(l={perPage:x,page:m},d=he):(l={search:e,perPage:x,page:m},d=xe),r(!0),N.post(d,l,b()).then(function(a){var s,o,u,v,V,$,k,q,M,U,O,Y,J,K,z,Q,R,G;((s=a==null?void 0:a.data)==null?void 0:s.status)===!0?((u=(o=a==null?void 0:a.data)==null?void 0:o.data)==null?void 0:u.total)===0?(n.error("Data not Found"),F((V=(v=a==null?void 0:a.data)==null?void 0:v.data)==null?void 0:V.data),I((k=($=a==null?void 0:a.data)==null?void 0:$.data)==null?void 0:k.last_page),P((M=(q=a==null?void 0:a.data)==null?void 0:q.data)==null?void 0:M.total),H(!1)):(console.log("Fee Head data",(O=(U=a==null?void 0:a.data)==null?void 0:U.data)==null?void 0:O.data),F((J=(Y=a==null?void 0:a.data)==null?void 0:Y.data)==null?void 0:J.data),I((z=(K=a==null?void 0:a.data)==null?void 0:K.data)==null?void 0:z.last_page),P((R=(Q=a==null?void 0:a.data)==null?void 0:Q.data)==null?void 0:R.total),H(!1)):n.error(`${(G=a==null?void 0:a.data)==null?void 0:G.message}`),r(!1)}).catch(function(a){n.warning("Error occured while fetching data."),r(!1)})};console.log(L);const He=f;console.log(f);const we=e=>{oe(parseInt(e)),H(!0)},Se=e=>{C(e-1)},pe=e=>{C(e+1)};i.useEffect(()=>{m&&y&&j()},[m,y]),i.useEffect(()=>{x&&y&&j()},[x,y]);const _e=[{Header:"Sl No.",Cell:({cell:e})=>t.jsxs("span",{children:[" ",(m-1)*x+e.row.index+1," "]})},{Header:"Fee Head",accessor:"fee_head"},{Header:"Fee Head Type",accessor:"fee_head_type"},{Header:"Description",accessor:"description"},{Header:"Created Date & Time",Cell:({cell:e})=>{var d,l;return t.jsxs("span",{children:[_((d=e.row.original)==null?void 0:d.date)," |"," ",_((l=e.row.original)==null?void 0:l.time)]})}},{Header:"Status",Cell:({cell:e})=>{var d,l;return t.jsx("span",{className:((d=e.row.original)==null?void 0:d.status)==="Active"?"text-[green]":"text-[red]",children:_((l=e.row.original)==null?void 0:l.status)})}},{Header:"Action",Cell:({cell:e})=>{var d,l;return t.jsxs("div",{className:"flex",children:[t.jsx("button",{onClick:()=>{Ue.fire({icon:"warning",title:"Are you sure?",text:"You want to update it!",showCancelButton:!0,confirmButtonText:"Yes, update it!",cancelButtonText:"No, cancel!"}).then(a=>{var s,o;a.value&&(D((s=e.row.original)==null?void 0:s.id),Fe((o=e.row.original)==null?void 0:o.id))})},className:"edit-button-master",children:t.jsx("a",{title:"edit",children:t.jsx(Oe,{size:23})})}),t.jsx("button",{onClick:()=>{var a,s;Z((a=e.row.original)==null?void 0:a.id),ce(((s=e.row.original)==null?void 0:s.status)==="Active"?"deactive":"active"),w(!0)},className:`${((d=e.row.original)==null?void 0:d.status)=="Active"?"deactivate-button-master":"deactivate-second-button-master"}`,children:((l=e.row.original)==null?void 0:l.status)==="Active"?"Deactivate":"Activate"})]})}}];console.log(m);const Fe=e=>{r(!0);let d={id:e};N.post(ye,d,b()).then(function(l){var a,s,o,u;console.log("fetch edit data response..",(a=l==null?void 0:l.data)==null?void 0:a.data),(s=l==null?void 0:l.data)!=null&&s.status?Te((o=l==null?void 0:l.data)==null?void 0:o.data):n.error(`${(u=l==null?void 0:l.data)==null?void 0:u.message}`),r(!1)}).catch(function(l){console.log("= edit data error...",l),E(!0),r(!1)})},Te=e=>{console.log("existing property details in prop address...",e),c.setFieldValue("feeHead",e==null?void 0:e.fee_head),c.setFieldValue("feeHeadTypeId",e==null?void 0:e.fee_head_type_id),c.setFieldValue("description",e==null?void 0:e.description)};console.log(h);const Ee=e=>{console.log(e),r(!0);let d,l,a={feeHead:e.feeHead,feeHeadTypeId:e.feeHeadTypeId,description:e.description};h!==null?(d=je,l=a,l.id=h):(e==null?void 0:e.feeHead)!==""&&(e==null?void 0:e.description)!==""&&h==null&&(d=ge,l=a),N.post(d,l,b()).then(function(s){var o,u,v;console.log("fee head type..",(o=s==null?void 0:s.data)==null?void 0:o.data),((u=s==null?void 0:s.data)==null?void 0:u.status)===!0?(n.success(h!==null?"Data Updated Successfully!":"Data Added Successfully"),j(),D(null)):n.error(`${(v=s==null?void 0:s.data)==null?void 0:v.message}`),r(!1)}).catch(function(s){console.log("==2 error list...",s),n.warning("Error occured in submitting form."),r(!1)})},De=()=>{r(!0),w(!1);let e={id:X,status:A};N.post(ve,e,b()).then(function(d){var l,a;((l=d==null?void 0:d.data)==null?void 0:l.status)===!0?(j(),(e==null?void 0:e.status)=="active"?n.success("Activated Successfully"):n.error("Deactivated Successfully")):n.error(`${(a=d==null?void 0:d.data)==null?void 0:a.message}`),r(!1)}).catch(function(d){n.warning("Error occured in deletion."),r(!1)})};i.useEffect(()=>{j()},[]);const Ae=e=>{let d=e.target.name,l=e.target.value;d=="feeHead"&&c.setFieldValue("feeHead",W(l,c.values.feeHead,50)),d=="description"&&c.setFieldValue("description",W(l,c.values.description,50))},B=(e,d)=>{se(d),E(e)},Ce=[{title:"Fee Head ",feild:"fee_head"},{title:"Fee Head Type",feild:"fee_head_type"},{title:"Description",feild:"description"},{title:"Created Date  ",feild:"date"},{title:"Created Time ",feild:"time"},{title:"Status",feild:"status"}],Ie=()=>{const e=new Ye;e.text("Fee Head Type Details",10,10),e.autoTable({theme:"grid",columns:Ce.map(d=>({...d,dataKey:d.feild})),body:f}),e.save("FeeHeadtype.pdf")};return i.useEffect(()=>{const e=f.map(d=>{const{id:l,...a}=d;return a});console.log(e),le(e)},[f]),t.jsx(t.Fragment,{children:t.jsxs("div",{className:"w-full h-[76vh] lg:h-auto overflow-auto ",children:[t.jsxs("div",{className:"flex items-start justify-start flex-col mt-5 ml-5 ",children:[t.jsx("h1",{className:"text-4xl font-semibold text-gray-700",children:"Fee Head Form"}),t.jsx("h1",{className:"common-header-smalltext",children:"Unlock Your Potential. Join Our Journey Of Education And Excellence"})]}),t.jsx("div",{className:" mt-1 ml-3 mr-3 ",children:t.jsx("div",{className:"flex h-auto  items-start justify-start w-full",children:t.jsxs("div",{className:"grid grid-cols-12 w-full  ml-3 mr-3 ",children:[t.jsx("div",{className:"col-span-12  lg:col-span-4 w-full flex justify-center",children:t.jsxs("div",{className:"mt-8 border border-teal-300 w-full  rounded-md relative",children:[t.jsxs("div",{className:"bg-white px-3 ",children:[" ",t.jsx("h1",{className:" absolute text-2xl bg-whitext-[#0F766E]te flex font-semibold  -mt-4 text-[#0F766E] ml-9",children:"Add"})]}),t.jsxs("div",{className:"w-full mb-6 mt-[14vh] pb-10  ",children:[t.jsxs("form",{onSubmit:c.handleSubmit,onChange:Ae,children:[t.jsxs("div",{className:"grid grid-cols-12 mt-6",children:[t.jsx("div",{className:" col-span-12 lg:col-span-3",children:t.jsxs("label",{className:" flex items-start justify-start ml-2 text-teal-900 text-md md:w-[20vw] w-full font-bold",htmlFor:"",children:["Fee Head Type",t.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600  ",children:"*"})]})}),t.jsxs("div",{className:"col-span-12 lg:col-span-9",children:[t.jsxs("select",{...c.getFieldProps("feeHeadTypeId"),type:"text",className:"common-input-css",placeholder:"Select fee head type",children:[t.jsx("option",{value:"",children:"Select"}),S==null?void 0:S.map((e,d)=>t.jsx("option",{value:e==null?void 0:e.id,children:e==null?void 0:e.fee_head_type}))]}),t.jsx("br",{}),t.jsx("span",{className:"text-red-600  text-xs",children:c.touched.feeHeadTypeId&&c.errors.feeHeadTypeId?c.errors.feeHeadTypeId:null})]})]}),t.jsxs("div",{className:"grid grid-cols-12 mt-6",children:[t.jsx("div",{className:" col-span-12 lg:col-span-3",children:t.jsxs("label",{className:" flex items-start justify-start ml-2 text-teal-900 text-md md:w-[20vw] w-full font-bold",htmlFor:"",children:["Fee Head",t.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600  ",children:"*"})]})}),t.jsxs("div",{className:"col-span-12 lg:col-span-9",children:[t.jsx("input",{...c.getFieldProps("feeHead"),className:"common-input-css",type:"text",placeholder:"Enter fee head type"}),t.jsx("br",{}),t.jsx("span",{className:"text-red-600  text-xs",children:c.touched.feeHead&&c.errors.feeHead?c.errors.feeHead:null})]})]}),t.jsxs("div",{className:"grid grid-cols-12 mt-6",children:[t.jsx("div",{className:" col-span-12 lg:col-span-3",children:t.jsxs("label",{className:" flex items-start justify-start ml-2 text-teal-900 text-md md:w-[20vw] w-full font-bold",htmlFor:"",children:["Description",t.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600  ",children:"*"})]})}),t.jsxs("div",{className:"col-span-12 lg:col-span-9",children:[t.jsx("input",{...c.getFieldProps("description"),className:"common-input-css",type:"text",placeholder:"Enter fee head type"}),t.jsx("br",{}),t.jsx("span",{className:"text-red-600  text-xs",children:c.touched.description&&c.errors.description?c.errors.description:null})]})]}),t.jsx("div",{className:"mt-7",children:t.jsx("button",{type:"submit",className:"save-button",children:h!==null?"Update":"Save"})})]}),t.jsx("div",{className:"mandatorytext",children:t.jsxs("h1",{children:["Note : (*) is a mandatory field"," "]})})]})]})}),t.jsx("div",{className:" col-span-12 md:col-span-12 lg:col-span-8 w-full lg:ml-2 ",children:t.jsxs("div",{className:"mt-8 border border-teal-300  rounded-md relative",children:[t.jsxs("div",{className:"bg-white px-3 ",children:[" ",t.jsx("h1",{className:" absolute text-2xl bg-white flex font-semibold  -mt-4 text-[#0F766E] ml-9",children:"View List"})]}),t.jsx("div",{className:"mt-5  ",children:t.jsx(Ve,{generatePdf:Ie,enable:ee,setenable:te,csvdata:ae,readymadeListData:f,fetchMasterList:j,setSearchTableData:me,searchTableData:ue})}),t.jsx("div",{className:"-mt-5 main-div",children:t.jsxs("div",{className:" rounded-md h-[80vh] 2xl:p-6 p-4 overflow-y-auto",children:[de&&t.jsx($e,{}),ie&&t.jsx(ke,{setdeleteStatus:w,deleteItem:De,deactivate:A}),t.jsxs("div",{className:"h-[57vh] overflow-auto max-[1004px]:h-full",children:[T&&(g==null?void 0:g.length)!=0&&t.jsx(qe,{filter:!1,exportStatus:!1,assessmentType:!1,columns:_e,dataList:He,pageNumber:L}),t.jsx(Me,{ChangePage:we,number:m,lastPage:ne,nextPage:pe,prevPage:Se,postperpage:x,blockToast:y,setBlockToast:H})]}),T&&(g==null?void 0:g.length)==0&&t.jsx("div",{className:"data-not-found",children:"Data Not Found"})]})})]})})]})})})]})})};export{Ge as default};
