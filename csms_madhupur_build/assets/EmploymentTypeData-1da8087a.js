import{r as d,s as Dt,c as At,a as Ct,Z as Ft,b as Lt,j as a,P as Pt,B as Bt,D as It,t as kt,U as Ht,A as b,e as w,Q as m,n as p,S as $t,x as qt,K as Ot,l as Ut,g as Vt}from"./index-21aade66.js";const zt=()=>{const[u,T]=d.useState([]),[y,v]=d.useState(!1),[K,Z]=d.useState([]),[E,Mt]=d.useState(!0),[Q,X]=d.useState(!1),[W,c]=d.useState(!1),[Yt,tt]=d.useState(!1);d.useState(null);const[f,_]=d.useState(null),[et,S]=d.useState(!1),[D,at]=d.useState(),[h,A]=d.useState(1),[N,lt]=d.useState(10),[it,C]=d.useState(),[st,dt]=d.useState(),[F,L]=d.useState(),[ct,ot]=d.useState(),{api_getemploymenttypeDataById:mt,api_getemploymenttypeData:nt,api_searchemploymenttypeData:rt,api_postemploymenttypeData:ut,api_editemploymenttypeData:ft,api_deleteemploymenttypeData:ht}=Vt();Dt("Teaching Title Master");const x=[{id:1,fee_head:10,fee_head_type:10,desc:"hello"},{id:2,fee_head:10,fee_head_type:10,desc:"hello"},{id:3,fee_head:10,fee_head_type:10,desc:"hello"},{id:4,fee_head:10,fee_head_type:10,desc:"hello"},{id:5,fee_head:10,fee_head_type:10,desc:"hello"}],xt=At({empTypeName:Ct().matches(Ft,"Please Enter value between A-Z to a-z").required("Employement type is required feild")}),n=Lt({initialValues:{empTypeName:""},onSubmit:(t,i)=>{console.log("at submit ",t),St(t),n.resetForm()},validationSchema:xt}),g=t=>{console.log(t);let i,l;t===void 0?(l={perPage:N,page:h},i=nt):(l={search:t},i=rt),c(!0),b.post(i,l,w()).then(function(e){var s,o,r,j,P,B,I,k,H,$,q,O,U,V,M,Y,R,z,G,J;((s=e==null?void 0:e.data)==null?void 0:s.status)===!0?((r=(o=e==null?void 0:e.data)==null?void 0:o.data)==null?void 0:r.total)===0||((P=(j=e==null?void 0:e.data)==null?void 0:j.data)==null?void 0:P.data.length)===0?(m.error("Data not Found"),T((I=(B=e==null?void 0:e.data)==null?void 0:B.data)==null?void 0:I.data),C((H=(k=e==null?void 0:e.data)==null?void 0:k.data)==null?void 0:H.last_page),L((q=($=e==null?void 0:e.data)==null?void 0:$.data)==null?void 0:q.total),v(!1)):(console.log("Teaching Title data",(U=(O=e==null?void 0:e.data)==null?void 0:O.data)==null?void 0:U.data),T((M=(V=e==null?void 0:e.data)==null?void 0:V.data)==null?void 0:M.data),C((R=(Y=e==null?void 0:e.data)==null?void 0:Y.data)==null?void 0:R.last_page),L((G=(z=e==null?void 0:e.data)==null?void 0:z.data)==null?void 0:G.total),v(!1)):m.error(`${(J=e==null?void 0:e.data)==null?void 0:J.message}`),c(!1)}).catch(function(e){m.warning("Error occured while fetching data."),c(!1)})};console.log(F);const gt=u;console.log(u);const yt=t=>{lt(parseInt(t)),v(!0)},Nt=t=>{A(t-1)},jt=t=>{A(t+1)};d.useEffect(()=>{h&&y&&g()},[h,y]),d.useEffect(()=>{N&&y&&g()},[N,y]);const vt=[{Header:"Sl No.",Cell:({cell:t})=>a.jsxs("span",{children:[" ",(h-1)*N+t.row.index+1," "]})},{Header:"Employement Type",accessor:"emp_type_name"},{Header:"Created Date & Time",Cell:({cell:t})=>{var i,l;return a.jsxs("span",{children:[p((i=t.row.original)==null?void 0:i.date)," |"," ",p((l=t.row.original)==null?void 0:l.time)]})}},{Header:"Status",Cell:({cell:t})=>{var i,l;return a.jsx("span",{className:((i=t.row.original)==null?void 0:i.status)==="Active"?"text-[green]":"text-[red]",children:p((l=t.row.original)==null?void 0:l.status)})}},{Header:"Action",Cell:({cell:t})=>{var i,l;return a.jsxs("div",{className:"flex",children:[a.jsx("button",{onClick:()=>{$t.fire({icon:"warning",title:"Are you sure?",text:"You want to update it!",showCancelButton:!0,confirmButtonText:"Yes, update it!",cancelButtonText:"No, cancel!"}).then(e=>{var s,o;e.value&&(_((s=t.row.original)==null?void 0:s.id),bt((o=t.row.original)==null?void 0:o.id))})},className:"edit-button-master",children:a.jsx("a",{title:"edit",children:a.jsx(qt,{size:23})})}),a.jsx("button",{onClick:()=>{var e,s;dt((e=t.row.original)==null?void 0:e.id),at(((s=t.row.original)==null?void 0:s.status)==="Active"?"deactive":"active"),S(!0)},className:`${((i=t.row.original)==null?void 0:i.status)=="Active"?"deactivate-button-master":"deactivate-second-button-master"}`,children:((l=t.row.original)==null?void 0:l.status)==="Active"?"Deactivate":"Activate"})]})}}];console.log(h),d.useEffect(()=>{const t=u.map(i=>{const{id:l,...e}=i;return e});console.log(t),Z(t)},[u]);const bt=t=>{c(!0);let i={id:t};b.post(mt,i,w()).then(function(l){var e,s,o,r;console.log("fetch edit data response..",(e=l==null?void 0:l.data)==null?void 0:e.data),(s=l==null?void 0:l.data)!=null&&s.status?wt((o=l==null?void 0:l.data)==null?void 0:o.data):m.error(`${(r=l==null?void 0:l.data)==null?void 0:r.message}`),c(!1)}).catch(function(l){console.log("= edit data error...",l),tt(!0),c(!1)})},wt=t=>{console.log("existing property details in prop address...",t),n.setFieldValue("empTypeName",t==null?void 0:t.emp_type_name)};console.log(f);const St=t=>{console.log(t),c(!0);let i,l,e={empTypeName:t.empTypeName};f!==null?(i=ft,l=e,l.id=f):(t==null?void 0:t.teachingTitleName)!==""&&f==null&&(i=ut,l=e),b.post(i,l,w()).then(function(s){var o,r,j;console.log("bank master..",(o=s==null?void 0:s.data)==null?void 0:o.data),((r=s==null?void 0:s.data)==null?void 0:r.status)===!0?(m.success(f!==null?"Data Updated Successfully!":"Data Added Successfully"),g(),_(null)):m.error(`${(j=s==null?void 0:s.data)==null?void 0:j.message}`),c(!1)}).catch(function(s){console.log("==2 error list...",s),m.warning("Error occured in submitting form."),c(!1)})},pt=()=>{c(!0),S(!1);let t={id:st,status:D};b.post(ht,t,w()).then(function(i){var l,e;((l=i==null?void 0:i.data)==null?void 0:l.status)===!0?(g(),(t==null?void 0:t.status)=="active"?m.success("Activated Successfully"):m.error("Deactivated Successfully")):m.error(`${(e=i==null?void 0:i.data)==null?void 0:e.message}`),c(!1)}).catch(function(i){m.warning("Error occured in deletion."),c(!1)})};d.useEffect(()=>{g()},[]);const Tt=t=>{let i=t.target.name,l=t.target.value;i=="empTypeName"&&n.setFieldValue("empTypeName",Ot(l,n.values.empTypeName,50))},Et=[{title:"Employment Type",feild:"emp_type_name"},{title:"Created Date  ",feild:"date"},{title:"Created Time ",feild:"time"},{title:"Status",feild:"status"}],_t=()=>{const t=new Ut;t.text("Employment Type Details",10,10),t.autoTable({theme:"grid",columns:Et.map(i=>({...i,dataKey:i.feild})),body:u}),t.save("EmploymentType.pdf")};return a.jsx(a.Fragment,{children:a.jsxs("div",{className:"w-full h-[76vh] lg:h-auto overflow-auto ",children:[a.jsxs("div",{className:"flex items-start justify-start flex-col mt-5 ml-5 ",children:[a.jsx("h1",{className:"text-4xl font-semibold text-gray-700",children:"Employment Type Form"}),a.jsx("h1",{className:"common-header-smalltext",children:"Unlock Your Potential. Join Our Journey Of Education And Excellence"})]}),a.jsx("div",{className:" mt-1 ml-3 mr-3 ",children:a.jsx("div",{className:"flex h-auto  items-start justify-start w-full",children:a.jsxs("div",{className:"grid grid-cols-12 w-full  ml-3 mr-3 ",children:[a.jsx("div",{className:"col-span-12  lg:col-span-4 w-full flex justify-center",children:a.jsxs("div",{className:"mt-8 border border-teal-300 w-full  rounded-md relative",children:[a.jsxs("div",{className:"bg-white px-3 ",children:[" ",a.jsx("h1",{className:" absolute text-2xl bg-white flex font-semibold  -mt-4 text-[#0F766E] ml-9",children:"Add"})]}),a.jsxs("div",{className:"w-full mb-6 mt-[14vh] pb-10  ",children:[a.jsxs("form",{onSubmit:n.handleSubmit,onChange:Tt,children:[a.jsxs("div",{className:"grid grid-cols-12 mt-6 w-full",children:[a.jsx("div",{className:" col-span-12 lg:col-span-4 w-full",children:a.jsxs("label",{className:" flex items-start justify-start ml-2 text-teal-900 text-md w-full font-bold",htmlFor:"",children:["Employment Type",a.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600  ",children:"*"})]})}),a.jsxs("div",{className:"col-span-12 lg:col-span-8 w-full",children:[a.jsx("input",{...n.getFieldProps("empTypeName"),className:"common-input-css",type:"text",placeholder:"Enter employment type"}),a.jsx("br",{}),a.jsx("span",{className:"text-red-600  text-xs",children:n.touched.empTypeName&&n.errors.empTypeName?n.errors.empTypeName:null})]})]}),a.jsx("div",{className:"mt-7",children:a.jsx("button",{type:"submit",className:"save-button",children:f!==null?"Update":"Save"})})]}),a.jsx("div",{className:"mandatorytext",children:a.jsx("h1",{children:"Note : (*) is a mandatory field "})})]})]})}),a.jsx("div",{className:" col-span-12 md:col-span-12 lg:col-span-8 w-full lg:ml-2 ",children:a.jsxs("div",{className:"mt-8 border  border-teal-300 rounded-md relative",children:[a.jsxs("div",{className:"bg-white px-3 ",children:[" ",a.jsx("h1",{className:" absolute text-2xl bg-white flex font-semibold  -mt-4 text-[#0F766E] ml-9",children:"View List"})]}),a.jsx("div",{className:"mt-5  ",children:a.jsx(Pt,{generatePdf:_t,enable:Q,setenable:X,csvdata:K,readymadeListData:u,fetchMasterList:g,setSearchTableData:ot,searchTableData:ct})}),a.jsx("div",{className:"-mt-5 main-div",children:a.jsxs("div",{className:" rounded-md h-[80vh] 2xl:p-6 p-4 overflow-y-auto",children:[W&&a.jsx(Bt,{}),et&&a.jsx(It,{setdeleteStatus:S,deleteItem:pt,deactivate:D}),a.jsxs("div",{className:"h-[57vh] overflow-auto max-[1004px]:h-full",children:[E&&(x==null?void 0:x.length)!=0&&a.jsx(kt,{filter:!1,exportStatus:!1,assessmentType:!1,columns:vt,dataList:gt,pageNumber:F}),a.jsx(Ht,{ChangePage:yt,number:h,lastPage:it,nextPage:jt,prevPage:Nt,postperpage:N,blockToast:y,setBlockToast:v})]}),E&&(x==null?void 0:x.length)==0&&a.jsx("div",{className:"data-not-found",children:"Data Not Found"})]})})]})})]})})})]})})};export{zt as default};
