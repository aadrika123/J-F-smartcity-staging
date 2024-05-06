import{r as o,j as s}from"./index-56164ba8.js";import{L as V}from"./ListTable-3fd25db3.js";import{C as oe}from"./index.esm-c189564c.js";import{A as le}from"./ApiHeader-6d683756.js";import{u as ne}from"./useSetTitle-6fdb2eea.js";import{A as de}from"./AxiosInterceptors-4a143d44.js";import{P as ae}from"./ProjectApiList-aaddad78.js";import{n as u,c as ce,a as me,b as q}from"./PowerupFunctions-ad6e73c3.js";import{S as I}from"./ShimmerEffectInline-84972968.js";import{B as pe}from"./BarLoader-fc975e5a.js";import{B as fe}from"./BottomErrorCard-949cda51.js";import{R as xe}from"./index.esm-3d7aabd9.js";import{c as he,a as ue,u as ge}from"./formik.esm-21504a96.js";import{F as be}from"./index.esm-155c43b6.js";import"./index-d5a2305f.js";import"./index-1ec5dbcf.js";import"./index.esm-e64cd4f5.js";import"./iconBase-3ee2c362.js";import"./index-564339db.js";const We=()=>{ne("Violation Master");const{api_addRole:Ne,api_updateRole:we,api_deletedRole:je,api_enf_cell:M,api_addUser:ye,api_updateUser:_e,api_deletedUser:ke,api_enf_officer:Se,api_assignRole:Ce}=ae(),f=o.useRef(),[x,S]=o.useState(!1),[P,L]=o.useState(!1),[U,H]=o.useState(""),[T,B]=o.useState(!1),[d,O]=o.useState(""),[Y,C]=o.useState(null),[h,g]=o.useState([]),[a,Fe]=o.useState([]),[l,_]=o.useState(null),[D,Ee]=o.useState(!1),[t,Ae]=o.useState("user"),[b,F]=o.useState(null),[N,E]=o.useState(null),[K,w]=o.useState(null),G="float-right bg-[#1A4D8C] px-3 py-1 rounded-sm shadow-lg hover:shadow-xl hover:bg-[#113766] hover:text-white text-white flex items-center",J="text-gray-800 text-sm",A="border focus:outline-none drop-shadow-sm focus:drop-shadow-md px-4 py-1 text-gray-700 shadow-black placeholder:text-sm",Q="block w-full border focus:outline-none drop-shadow-sm focus:drop-shadow-md p-1 text-sm text-slate-500 file:mr-4 file:py-1 file:px-4 file:rounded-sm file:border file:text-xs file:font-semibold file:bg-zinc-100 hover:file:bg-zinc-200",W=e=>`px-4 py-1 text-sm bg-${e}-500 hover:bg-${e}-600 select-none rounded-sm hover:drop-shadow-md text-white`,k=(e,r)=>{B(e),H(r)},X=(e,r=null)=>{switch(O(e),e){case"add":break;case"edit":_(r),t=="role"&&i.setFieldValue("role",r==null?void 0:r.role_name),t=="user"&&(i.setFieldValue("firstName",(r==null?void 0:r.first_name)||""),i.setFieldValue("middleName",(r==null?void 0:r.middle_name)||""),i.setFieldValue("lastName",(r==null?void 0:r.last_name)||""),i.setFieldValue("mobileNo",r==null?void 0:r.mobile),i.setFieldValue("email",r==null?void 0:r.email),i.setFieldValue("designation",r==null?void 0:r.designation),i.setFieldValue("employeeCode",r==null?void 0:r.employee_code),i.setFieldValue("address",r==null?void 0:r.address),i.setFieldValue("signature",r==null?void 0:r.signature),i.setFieldValue("profile",r==null?void 0:r.profile_image));break;case"delete":C(r);break;case"assign":_(r),C(r==null?void 0:r.id),w((r==null?void 0:r.wf_role_id)||"");break}f.current.showModal()},Z=[{Header:"#",Cell:({row:e})=>s.jsx("div",{className:"pr-2",children:(e==null?void 0:e.index)+1})},{Header:"Roles",accessor:"role_name",Cell:({cell:e})=>{var r;return u((r=e.row.original)==null?void 0:r.role_name)}}],v=[{Header:"#",Cell:({row:e})=>s.jsx("div",{className:"pr-2",children:(e==null?void 0:e.index)+1})},{Header:"Profile",accessor:"profile",Cell:({cell:e})=>{var r,n;return s.jsx(s.Fragment,{children:(r=e.row.original)!=null&&r.profile_image?s.jsx("img",{className:"border drop-shadow-lg h-8 rounded-sm",src:(n=e.row.original)==null?void 0:n.profile_image,alt:"profile",srcset:""}):"N/A"})}},{Header:"Name",accessor:"user_name",Cell:({cell:e})=>{var r;return u((r=e.row.original)==null?void 0:r.user_name)}},{Header:"Mobile No.",accessor:"mobile",Cell:({cell:e})=>{var r;return u((r=e.row.original)==null?void 0:r.mobile)}},{Header:"E-mail",accessor:"email",Cell:({cell:e})=>{var r;return u((r=e.row.original)==null?void 0:r.email.replace("@","[at]").replace(".","[dot]"))}},{Header:"Address",accessor:"address",Cell:({cell:e})=>{var r;return u((r=e.row.original)==null?void 0:r.address)}}],j=[{title:"Role",key:"role",width:` w-full ${t=="role"?"block ":"hidden "}`,type:t=="role"?"text":"select",hint:"Enter role",required:!0,options:a,okey:"id",ovalue:"role_name",required:t=="role"&&!0},{title:"First Name",key:"firstName",width:`md:w-[31%] w-full ${t=="user"?"block ":"hidden "}`,type:"text",hint:"Enter first name",required:t=="user"&&!0},{title:"Middle Name",key:"middleName",width:`md:w-[31%] w-full ${t=="user"?"block ":"hidden "}`,type:"text",hint:"Enter middle name",required:!1},{title:"Last Name",key:"lastName",width:`md:w-[31%] w-full ${t=="user"?"block ":"hidden "}`,type:"text",hint:"Enter last name",required:t=="user"&&!0},{title:"Mobile No.",key:"mobileNo",width:`md:w-[48%] w-full ${t=="user"?"block ":"hidden "}`,type:"text",hint:"Enter mobile no.",required:t=="user"&&!0},{title:"E-Mail",key:"email",width:`md:w-[48%] w-full ${t=="user"?"block ":"hidden "}`,type:"email",hint:"Enter email",required:t=="user"&&!0},{title:"Employee Code",key:"employeeCode",width:`md:w-[48%] w-full ${t=="user"?"block ":"hidden "}`,type:"text",hint:"Enter employee code",required:t=="user"&&!0},{title:"Designation",key:"designation",width:`md:w-[48%] w-full ${t=="user"?"block ":"hidden "}`,type:"text",hint:"Enter designation",required:t=="user"&&!0},{title:"Upload Profile Picture",key:"profile",width:`md:w-[48%] w-full ${t=="user"?"block ":"hidden "}`,type:"file",hint:"Enter employee code",required:!1},{title:"Upload Signature",key:"signature",width:`md:w-[48%] w-full ${t=="user"?"block ":"hidden "}`,type:"file",hint:"Enter employee code",required:!1},{title:"Address",key:"address",width:` w-full ${t=="user"?"block ":"hidden "}`,type:"text",hint:"Enter address",required:t=="user"&&!0}],ee=he().shape([...j].reduce((e,r)=>(r!=null&&r.required&&(e[r.key]=ue().required(r==null?void 0:r.hint)),e),{})),i=ge({initialValues:{role:"",firstName:"",middleName:"",lastName:"",mobileNo:"",email:"",designation:"",employeeCode:"",address:"",signature:"",profile:""},enableReinitialize:!0,validationSchema:ee,onSubmit:e=>{$(e)}}),re=()=>{g([]),S(!0);let e;t=="user"&&(e=M),de.post(e,{userType:"EC"},le()).then(r=>{var n,m,c;(n=r==null?void 0:r.data)!=null&&n.status?g((m=r==null?void 0:r.data)==null?void 0:m.data):(k(!0,ce((c=r==null?void 0:r.data)==null?void 0:c.message)),g([]))}).catch(r=>{k(!0,"Server Error! Please try again later."),g([])}).finally(()=>{S(!1),_(null),F(null),E(null),w(null),f.current.close()})},se=(e,r="",n,m="",c="",p=!1,y=[],te="",ie="")=>s.jsxs("div",{className:`flex flex-col ${m} `,children:[r!=""&&s.jsxs("label",{htmlFor:e,className:J,children:[r," ",p&&s.jsx("span",{className:"text-red-500 text-xs font-bold",children:"*"})," : "]}),n!="select"&&n!="file"&&s.jsx("input",{...i.getFieldProps(e),type:n,className:A+` ${i.touched[e]&&i.errors[e]?" border-red-200 placeholder:text-red-400 ":" focus:border-zinc-300 border-zinc-200"}`,name:e,id:"",placeholder:c}),n=="file"&&s.jsx("input",{type:"file",className:Q+`${i.touched[e]&&i.errors[e]?" border-red-200 placeholder:text-red-400 text-red-400 file:border-red-200 file:text-red-400":" focus:border-zinc-300 border-zinc-200 file:border-zinc-300 file:text-gray-600"}`,name:e,id:"",placeholder:c,accept:".jpg, .jpeg, .png"}),n=="select"&&s.jsx("select",{...i.getFieldProps(e),className:A+` ${i.touched[e]&&i.errors[e]?" border-red-200 placeholder:text-red-400 text-red-400":" focus:border-zinc-300 border-zinc-200 "}`,children:D?s.jsx("option",{children:"Loading..."}):s.jsxs(s.Fragment,{children:[s.jsx("option",{value:null,children:"Select"}),typeof y=="object"&&(y==null?void 0:y.map(R=>s.jsx("option",{className:"",value:R[te],children:R[ie]})))]})})]}),$=e=>{L(!0),f.current.close();let r=new FormData;switch(d){case"add":t=="role"&&(e==null||e.role),t=="user"&&(r.append("firstName",e==null?void 0:e.firstName),r.append("middleName",e==null?void 0:e.middleName),r.append("lastName",e==null?void 0:e.lastName),r.append("mobileNo",e==null?void 0:e.mobileNo),r.append("email",e==null?void 0:e.email),r.append("designation",e==null?void 0:e.designation),r.append("employeeCode",e==null?void 0:e.employeeCode),r.append("address",e==null?void 0:e.address),b&&r.append("signature",b),N&&r.append("profile",N));break;case"edit":t=="role"&&(l==null||l.id,e==null||e.role),t=="user"&&(r.append("userId",l==null?void 0:l.id),r.append("firstName",e==null?void 0:e.firstName),r.append("middleName",e==null?void 0:e.middleName),r.append("lastName",e==null?void 0:e.lastName),r.append("mobileNo",e==null?void 0:e.mobileNo),r.append("email",e==null?void 0:e.email),r.append("designation",e==null?void 0:e.designation),r.append("employeeCode",e==null?void 0:e.employeeCode),r.append("address",e==null?void 0:e.address),b&&r.append("signature",b),N&&r.append("profile",N));break;case"delete":t=="user"&&r.append("userId",Y);break}},z=e=>{var m,c;const r=e.target.name,n=e.target.value;if(r=="mobileNo"&&i.setFieldValue("mobileNo",me(n,i.values.mobileNo,10)),r=="signature"){let p=(m=e==null?void 0:e.target)==null?void 0:m.files[0];if(!q(p)){i.setFieldValue("signature","");return}F(p)}if(r=="profile"){let p=(c=e==null?void 0:e.target)==null?void 0:c.files[0];if(!q(p)){i.setFieldValue("profile","");return}E(p)}r=="roleAssign"&&w(n)};return o.useEffect(()=>{re()},[t]),s.jsxs(s.Fragment,{children:[P&&s.jsx(pe,{}),T&&s.jsx(fe,{activateBottomErrorCard:k,errorTitle:U}),s.jsxs("div",{className:"poppins p-4 px-6",children:[s.jsx("div",{className:"uppercase font-semibold text-gray-700 text-2xl py-2 text-center tracking-[0.5rem]",children:"Know Your Enforcement Cell"}),s.jsx("div",{className:"w-full h-[0.15rem] bg-gray-400 mb-6"}),x&&s.jsx(I,{}),!x&&s.jsx(s.Fragment,{children:(h==null?void 0:h.length)>0?s.jsxs(s.Fragment,{children:[t=="role"&&s.jsx(V,{columns:Z,dataList:h,exportStatus:!1}),t=="user"&&s.jsx(V,{columns:v,dataList:h,exportStatus:!1})]}):s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"flex justify-end mb-2",children:s.jsxs("button",{onClick:()=>X("add"),className:G+"capitalize flex gap-1 items-center",children:[s.jsx(oe,{})," Add ",s.jsx("span",{className:"capitalize",children:t})]})}),s.jsx("div",{className:"bg-red-100 text-red-500 py-2 text-lg font-semibold text-center border border-red-500 drop-shadow-sm",children:"Oops! No Data Found."})]})})]}),s.jsxs("dialog",{ref:f,className:`relative overflow-clip animate__animated animate__zoomIn animate__faster w-full ${t=="role"&&"md:w-[21rem]"} ${t=="user"&&d!="delete"&&"md:w-[50rem]"} ${d=="delete"&&"md:w-[21rem]"} ${d=="assign"&&"md:w-[40rem]"}`,children:[d!="delete"&&s.jsx("span",{onClick:()=>(f.current.close(),i.resetForm(),w(null)),className:"block p-1 bg-red-100 hover:bg-red-500 rounded-full hover:text-white cursor-pointer transition-all duration-200 absolute top-2 right-2",children:s.jsx(xe,{})}),d!="delete"&&d!="assign"&&s.jsxs("form",{onChange:e=>(i.handleChange(e),z(e)),onSubmit:i.handleSubmit,className:"p-4 px-8 py-6 shadow-lg",children:[s.jsxs("section",{className:"flex flex-row justify-between gap-4 flex-wrap",children:[s.jsxs("header",{className:"w-full font-semibold text-xl capitalize text-sky-700 border-b pb-1 text-center",children:[d," ",t]}),d=="edit"&&t=="user"&&s.jsx(s.Fragment,{children:s.jsxs("div",{className:"w-full grid grid-cols-12 items-center gap-4 mb-4 mt-2",children:[s.jsxs("div",{className:"md:col-span-6 col-span-12 flex gap-2 items-center flex-wrap text-sm",children:["Profile Image : ",s.jsx("img",{src:(l==null?void 0:l.profile_image)||"",className:"ml-4 h-20 border drop-shadow-md rounded-sm p-1",alt:"Profile",srcset:""})]}),s.jsxs("div",{className:"md:col-span-6 col-span-12 flex gap-2 items-center flex-wrap text-sm",children:["Signature : ",s.jsx("img",{src:(l==null?void 0:l.signature)||"",className:"ml-4 h-20 border drop-shadow-md rounded-sm p-1",alt:"Signature",srcset:""})]})]})}),j==null?void 0:j.map(e=>se(e==null?void 0:e.key,e==null?void 0:e.title,e==null?void 0:e.type,e==null?void 0:e.width,e==null?void 0:e.hint,e==null?void 0:e.required,e==null?void 0:e.options,e==null?void 0:e.okey,e==null?void 0:e.ovalue))]}),s.jsx("footer",{className:"mt-4 flex justify-center",children:s.jsxs("button",{type:"submit",className:W("green"),children:[d=="add"&&"Add",d=="edit"&&"Update"]})})]}),d=="delete"&&s.jsx(s.Fragment,{children:s.jsxs("div",{className:" z-50 px-6 py-4 flex flex-col gap-4 ",children:[s.jsxs("div",{className:"flex items-center gap-6",children:[s.jsx("span",{className:"text-red-500 bg-red-100 p-2 block rounded-full drop-shadow-md shadow-red-300",children:s.jsx(be,{size:25})}),s.jsxs("div",{className:"flex flex-col gap-2",children:[s.jsx("span",{className:"text-xl font-semibold border-b pb-1",children:"Confirmation"}),s.jsx("span",{className:"text-base",children:"Are you sure want to delete ?"})]})]}),s.jsxs("div",{className:"flex justify-end gap-2",children:[s.jsx("button",{className:"text-white bg-slate-400 hover:bg-slate-500 px-4 py-1 text-sm ",onClick:()=>f.current.close(),children:"No"}),s.jsx("button",{className:"text-white bg-red-500 hover:bg-red-600 px-4 py-1 text-sm ",onClick:()=>$(),children:"Yes"})]})]})}),d=="assign"&&s.jsx(s.Fragment,{children:s.jsxs("div",{className:"p-4 px-8 py-6 shadow-lg",children:[s.jsxs("header",{className:"w-full font-semibold text-xl capitalize text-sky-700 border-b pb-1 mt-4 text-center",children:["Assign Role to ",s.jsx("span",{className:"text-amber-600",children:l==null?void 0:l.user_name})]}),!x&&Array.isArray(a)&&(a==null?void 0:a.length)>0&&s.jsx("div",{className:" mt-4 animate__animated animate__fadeIn animate__faster",children:s.jsx("button",{onClick:()=>roleAssignFun(),className:"float-right bg-green-500 px-3 py-1 rounded-sm shadow-lg hover:shadow-xl hover:bg-green-600 hover:text-white text-white flex items-center mb-1",children:"Assign"})}),s.jsxs("div",{className:"flex flex-col h-[40vh] w-full overflow-y-auto md:overflow-x-hidden mt-6",children:[s.jsxs("div",{className:"w-full grid grid-cols-12 items-center gap-2 bg-slate-500 text-white font-semibold border border-slate-200 px-4 py-2",children:[s.jsx("div",{className:"col-span-3",children:"Sl. No."}),s.jsx("div",{className:"col-span-6",children:"Role Name"}),s.jsx("div",{className:"col-span-3 text-end"})]}),x&&s.jsx(I,{}),!x&&Array.isArray(a)&&(a==null?void 0:a.map((e,r)=>s.jsx(s.Fragment,{children:s.jsxs("div",{className:"w-full grid grid-cols-12 items-center gap-2 bg-slate-100 border-b hover:bg-white pb-1 p-4 animate__animated animate__fadeIn animate__faster",children:[s.jsx("div",{className:"col-span-1",children:r+1}),s.jsx("div",{className:"col-span-10",children:e==null?void 0:e.role_name}),s.jsx("div",{className:"col-span-1",children:s.jsx("label",{class:"inline-flex items-center px-4",children:s.jsx("input",{type:"radio",name:"roleAssign",checked:K==(e==null?void 0:e.id)||"",value:e==null?void 0:e.id,onChange:z,class:"cursor-pointer form-radio h-5 w-5 text-slate-800"})})})]},r)}))),!x&&Array.isArray(a)&&(a==null?void 0:a.length)==0&&s.jsx("div",{className:"w-full text-center text-red-400 font-semibold pb-1 p-4",children:"No Roles Available"})]})]})})]})]})};export{We as default};
