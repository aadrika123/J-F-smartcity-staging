import{r as d,j as t,n as T}from"./index-faef4408.js";import{L as B}from"./ListTable-8d07bfdb.js";import{C as be}from"./index.esm-e7b598de.js";import{A as E}from"./ApiHeader-6d683756.js";import{u as Ne}from"./useSetTitle-78d55b86.js";import{A as $}from"./AxiosInterceptors-06ddb7df.js";import{P as we}from"./ProjectApiList-919c817c.js";import{n as b,c as R,a as je,b as O}from"./PowerupFunctions-1c006beb.js";import{S as Y}from"./ShimmerEffectInline-e1eb703f.js";import{B as ye}from"./BarLoader-56cc2b49.js";import{B as _e}from"./BottomErrorCard-6b93cab8.js";import{R as Se}from"./index.esm-52d56c4d.js";import{c as ke,a as Fe,u as Ce}from"./formik.esm-f68c633c.js";import{F as Ae}from"./index.esm-13201a46.js";import{A as Ee}from"./ApiHeader2-b363f7b8.js";import"./index-b7057102.js";import"./index-eab1d8e2.js";import"./index.esm-03dcecfa.js";import"./iconBase-74df04d3.js";import"./index-cc999471.js";const er=()=>{Ne("Violation Master");const{api_addRole:D,api_updateRole:K,api_deletedRole:G,api_enf_cell:J,api_addUser:Q,api_updateUser:W,api_deletedUser:X,api_enf_officer:Z,api_assignRole:v}=we(),f=d.useRef(),[u,N]=d.useState(!1),[ee,z]=d.useState(!1),[re,te]=d.useState(""),[se,ie]=d.useState(!1),[c,oe]=d.useState(""),[F,V]=d.useState(null),[g,w]=d.useState([]),[m,$e]=d.useState([]),[a,C]=d.useState(null),[le,Re]=d.useState(!1),[s,ze]=d.useState("user"),[j,I]=d.useState(null),[y,q]=d.useState(null),[M,_]=d.useState(null),ne="float-right bg-[#1A4D8C] px-3 py-1 rounded-sm shadow-lg hover:shadow-xl hover:bg-[#113766] hover:text-white text-white flex items-center",de="text-gray-800 text-sm",P="border focus:outline-none drop-shadow-sm focus:drop-shadow-md px-4 py-1 text-gray-700 shadow-black placeholder:text-sm",ae="block w-full border focus:outline-none drop-shadow-sm focus:drop-shadow-md p-1 text-sm text-slate-500 file:mr-4 file:py-1 file:px-4 file:rounded-sm file:border file:text-xs file:font-semibold file:bg-zinc-100 hover:file:bg-zinc-200",ce=e=>`px-4 py-1 text-sm bg-${e}-500 hover:bg-${e}-600 select-none rounded-sm hover:drop-shadow-md text-white`,x=(e,r)=>{ie(e),te(r)},me=(e,r=null)=>{switch(oe(e),e){case"add":break;case"edit":C(r),s=="role"&&o.setFieldValue("role",r==null?void 0:r.role_name),s=="user"&&(o.setFieldValue("firstName",(r==null?void 0:r.first_name)||""),o.setFieldValue("middleName",(r==null?void 0:r.middle_name)||""),o.setFieldValue("lastName",(r==null?void 0:r.last_name)||""),o.setFieldValue("mobileNo",r==null?void 0:r.mobile),o.setFieldValue("email",r==null?void 0:r.email),o.setFieldValue("designation",r==null?void 0:r.designation),o.setFieldValue("employeeCode",r==null?void 0:r.employee_code),o.setFieldValue("address",r==null?void 0:r.address),o.setFieldValue("signature",r==null?void 0:r.signature),o.setFieldValue("profile",r==null?void 0:r.profile_image));break;case"delete":V(r);break;case"assign":C(r),V(r==null?void 0:r.id),_((r==null?void 0:r.wf_role_id)||"");break}f.current.showModal()},pe=[{Header:"#",Cell:({row:e})=>t.jsx("div",{className:"pr-2",children:(e==null?void 0:e.index)+1})},{Header:"Roles",accessor:"role_name",Cell:({cell:e})=>{var r;return b((r=e.row.original)==null?void 0:r.role_name)}}],fe=[{Header:"#",Cell:({row:e})=>t.jsx("div",{className:"pr-2",children:(e==null?void 0:e.index)+1})},{Header:"Profile",accessor:"profile",Cell:({cell:e})=>{var r,l;return t.jsx(t.Fragment,{children:(r=e.row.original)!=null&&r.profile_image?t.jsx("img",{className:"border drop-shadow-lg h-8 rounded-sm",src:(l=e.row.original)==null?void 0:l.profile_image,alt:"profile",srcset:""}):"N/A"})}},{Header:"Name",accessor:"user_name",Cell:({cell:e})=>{var r;return b((r=e.row.original)==null?void 0:r.user_name)}},{Header:"Mobile No.",accessor:"mobile",Cell:({cell:e})=>{var r;return b((r=e.row.original)==null?void 0:r.mobile)}},{Header:"E-mail",accessor:"email",Cell:({cell:e})=>{var r;return b((r=e.row.original)==null?void 0:r.email.replace("@","[at]").replace(".","[dot]"))}},{Header:"Address",accessor:"address",Cell:({cell:e})=>{var r;return b((r=e.row.original)==null?void 0:r.address)}}],S=[{title:"Role",key:"role",width:` w-full ${s=="role"?"block ":"hidden "}`,type:s=="role"?"text":"select",hint:"Enter role",required:!0,options:m,okey:"id",ovalue:"role_name",required:s=="role"&&!0},{title:"First Name",key:"firstName",width:`md:w-[31%] w-full ${s=="user"?"block ":"hidden "}`,type:"text",hint:"Enter first name",required:s=="user"&&!0},{title:"Middle Name",key:"middleName",width:`md:w-[31%] w-full ${s=="user"?"block ":"hidden "}`,type:"text",hint:"Enter middle name",required:!1},{title:"Last Name",key:"lastName",width:`md:w-[31%] w-full ${s=="user"?"block ":"hidden "}`,type:"text",hint:"Enter last name",required:s=="user"&&!0},{title:"Mobile No.",key:"mobileNo",width:`md:w-[48%] w-full ${s=="user"?"block ":"hidden "}`,type:"text",hint:"Enter mobile no.",required:s=="user"&&!0},{title:"E-Mail",key:"email",width:`md:w-[48%] w-full ${s=="user"?"block ":"hidden "}`,type:"email",hint:"Enter email",required:s=="user"&&!0},{title:"Employee Code",key:"employeeCode",width:`md:w-[48%] w-full ${s=="user"?"block ":"hidden "}`,type:"text",hint:"Enter employee code",required:s=="user"&&!0},{title:"Designation",key:"designation",width:`md:w-[48%] w-full ${s=="user"?"block ":"hidden "}`,type:"text",hint:"Enter designation",required:s=="user"&&!0},{title:"Upload Profile Picture",key:"profile",width:`md:w-[48%] w-full ${s=="user"?"block ":"hidden "}`,type:"file",hint:"Enter employee code",required:!1},{title:"Upload Signature",key:"signature",width:`md:w-[48%] w-full ${s=="user"?"block ":"hidden "}`,type:"file",hint:"Enter employee code",required:!1},{title:"Address",key:"address",width:` w-full ${s=="user"?"block ":"hidden "}`,type:"text",hint:"Enter address",required:s=="user"&&!0}],xe=ke().shape([...S].reduce((e,r)=>(r!=null&&r.required&&(e[r.key]=Fe().required(r==null?void 0:r.hint)),e),{})),o=Ce({initialValues:{role:"",firstName:"",middleName:"",lastName:"",mobileNo:"",email:"",designation:"",employeeCode:"",address:"",signature:"",profile:""},enableReinitialize:!0,validationSchema:xe,onSubmit:e=>{H(e)}}),A=()=>{w([]),N(!0);let e;s=="role"&&(e=J),s=="user"&&(e=Z),$.post(e,{userType:"EO"},E()).then(r=>{var l,i,n;(l=r==null?void 0:r.data)!=null&&l.status?w((i=r==null?void 0:r.data)==null?void 0:i.data):(x(!0,R((n=r==null?void 0:r.data)==null?void 0:n.message)),w([]))}).catch(r=>{x(!0,"Server Error! Please try again later."),w([])}).finally(()=>{N(!1),C(null),I(null),q(null),_(null),f.current.close()})},he=(e,r="",l,i="",n="",p=!1,h=[],k="",ge="")=>t.jsxs("div",{className:`flex flex-col ${i} `,children:[r!=""&&t.jsxs("label",{htmlFor:e,className:de,children:[r," ",p&&t.jsx("span",{className:"text-red-500 text-xs font-bold",children:"*"})," : "]}),l!="select"&&l!="file"&&t.jsx("input",{...o.getFieldProps(e),type:l,className:P+` ${o.touched[e]&&o.errors[e]?" border-red-200 placeholder:text-red-400 ":" focus:border-zinc-300 border-zinc-200"}`,name:e,id:"",placeholder:n}),l=="file"&&t.jsx("input",{type:"file",className:ae+`${o.touched[e]&&o.errors[e]?" border-red-200 placeholder:text-red-400 text-red-400 file:border-red-200 file:text-red-400":" focus:border-zinc-300 border-zinc-200 file:border-zinc-300 file:text-gray-600"}`,name:e,id:"",placeholder:n,accept:".jpg, .jpeg, .png"}),l=="select"&&t.jsx("select",{...o.getFieldProps(e),className:P+` ${o.touched[e]&&o.errors[e]?" border-red-200 placeholder:text-red-400 text-red-400":" focus:border-zinc-300 border-zinc-200 "}`,children:le?t.jsx("option",{children:"Loading..."}):t.jsxs(t.Fragment,{children:[t.jsx("option",{value:null,children:"Select"}),typeof h=="object"&&(h==null?void 0:h.map(U=>t.jsx("option",{className:"",value:U[k],children:U[ge]})))]})})]}),H=e=>{z(!0),f.current.close();let r,l,i=new FormData;switch(c){case"add":s=="role"&&(r={roleName:e==null?void 0:e.role},l=D),s=="user"&&(i.append("firstName",e==null?void 0:e.firstName),i.append("middleName",e==null?void 0:e.middleName),i.append("lastName",e==null?void 0:e.lastName),i.append("mobileNo",e==null?void 0:e.mobileNo),i.append("email",e==null?void 0:e.email),i.append("designation",e==null?void 0:e.designation),i.append("employeeCode",e==null?void 0:e.employeeCode),i.append("address",e==null?void 0:e.address),j&&i.append("signature",j),y&&i.append("profile",y),l=Q);break;case"edit":s=="role"&&(r={roleId:a==null?void 0:a.id,roleName:e==null?void 0:e.role},l=K),s=="user"&&(i.append("userId",a==null?void 0:a.id),i.append("firstName",e==null?void 0:e.firstName),i.append("middleName",e==null?void 0:e.middleName),i.append("lastName",e==null?void 0:e.lastName),i.append("mobileNo",e==null?void 0:e.mobileNo),i.append("email",e==null?void 0:e.email),i.append("designation",e==null?void 0:e.designation),i.append("employeeCode",e==null?void 0:e.employeeCode),i.append("address",e==null?void 0:e.address),j&&i.append("signature",j),y&&i.append("profile",y),l=W);break;case"delete":s=="role"&&(l=G,r={roleId:F}),s=="user"&&(l=X,i.append("userId",F));break}$.post(l,s=="user"?i:r,s=="user"?Ee():E()).then(n=>{var p,h,k;(p=n==null?void 0:n.data)!=null&&p.status?(T.success((h=n==null?void 0:n.data)==null?void 0:h.message),A()):x(!0,R((k=n==null?void 0:n.data)==null?void 0:k.message))}).catch(n=>{x(!0,"Server Error! Please try again later.")}).finally(()=>{z(!1),o.resetForm()})},L=e=>{var i,n;const r=e.target.name,l=e.target.value;if(r=="mobileNo"&&o.setFieldValue("mobileNo",je(l,o.values.mobileNo,10)),r=="signature"){let p=(i=e==null?void 0:e.target)==null?void 0:i.files[0];if(!O(p)){o.setFieldValue("signature","");return}I(p)}if(r=="profile"){let p=(n=e==null?void 0:e.target)==null?void 0:n.files[0];if(!O(p)){o.setFieldValue("profile","");return}q(p)}r=="roleAssign"&&_(l)},ue=()=>{N(!0);let e={userId:F,roleId:M};$.post(v,e,E()).then(r=>{var l,i;(l=r==null?void 0:r.data)!=null&&l.status?(T.success("Role Assigned Successfully !!!"),A()):x(!0,R((i=r==null?void 0:r.data)==null?void 0:i.message))}).catch(r=>{x(!0,"Server Error! Please try again later.")}).finally(()=>{N(!1),f.current.close()})};return d.useEffect(()=>{A()},[s]),t.jsxs(t.Fragment,{children:[ee&&t.jsx(ye,{}),se&&t.jsx(_e,{activateBottomErrorCard:x,errorTitle:re}),t.jsxs("div",{className:"poppins p-4 px-6",children:[t.jsx("div",{className:"uppercase font-semibold text-gray-700 text-2xl py-2 text-center tracking-[0.5rem]",children:"Know Your Enforcement Officer"}),t.jsx("div",{className:"w-full h-[0.15rem] bg-gray-400 mb-6"}),u&&t.jsx(Y,{}),!u&&t.jsx(t.Fragment,{children:(g==null?void 0:g.length)>0?t.jsxs(t.Fragment,{children:[s=="role"&&t.jsx(B,{columns:pe,dataList:g,exportStatus:!1}),s=="user"&&t.jsx(B,{columns:fe,dataList:g,exportStatus:!1})]}):t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"flex justify-end mb-2",children:t.jsxs("button",{onClick:()=>me("add"),className:ne+"capitalize flex gap-1 items-center",children:[t.jsx(be,{})," Add ",t.jsx("span",{className:"capitalize",children:s})]})}),t.jsx("div",{className:"bg-red-100 text-red-500 py-2 text-lg font-semibold text-center border border-red-500 drop-shadow-sm",children:"Oops! No Data Found."})]})})]}),t.jsxs("dialog",{ref:f,className:`relative overflow-clip animate__animated animate__zoomIn animate__faster w-full ${s=="role"&&"md:w-[21rem]"} ${s=="user"&&c!="delete"&&"md:w-[50rem]"} ${c=="delete"&&"md:w-[21rem]"} ${c=="assign"&&"md:w-[40rem]"}`,children:[c!="delete"&&t.jsx("span",{onClick:()=>(f.current.close(),o.resetForm(),_(null)),className:"block p-1 bg-red-100 hover:bg-red-500 rounded-full hover:text-white cursor-pointer transition-all duration-200 absolute top-2 right-2",children:t.jsx(Se,{})}),c!="delete"&&c!="assign"&&t.jsxs("form",{onChange:e=>(o.handleChange(e),L(e)),onSubmit:o.handleSubmit,className:"p-4 px-8 py-6 shadow-lg",children:[t.jsxs("section",{className:"flex flex-row justify-between gap-4 flex-wrap",children:[t.jsxs("header",{className:"w-full font-semibold text-xl capitalize text-sky-700 border-b pb-1 text-center",children:[c," ",s]}),c=="edit"&&s=="user"&&t.jsx(t.Fragment,{children:t.jsxs("div",{className:"w-full grid grid-cols-12 items-center gap-4 mb-4 mt-2",children:[t.jsxs("div",{className:"md:col-span-6 col-span-12 flex gap-2 items-center flex-wrap text-sm",children:["Profile Image : ",t.jsx("img",{src:(a==null?void 0:a.profile_image)||"",className:"ml-4 h-20 border drop-shadow-md rounded-sm p-1",alt:"Profile",srcset:""})]}),t.jsxs("div",{className:"md:col-span-6 col-span-12 flex gap-2 items-center flex-wrap text-sm",children:["Signature : ",t.jsx("img",{src:(a==null?void 0:a.signature)||"",className:"ml-4 h-20 border drop-shadow-md rounded-sm p-1",alt:"Signature",srcset:""})]})]})}),S==null?void 0:S.map(e=>he(e==null?void 0:e.key,e==null?void 0:e.title,e==null?void 0:e.type,e==null?void 0:e.width,e==null?void 0:e.hint,e==null?void 0:e.required,e==null?void 0:e.options,e==null?void 0:e.okey,e==null?void 0:e.ovalue))]}),t.jsx("footer",{className:"mt-4 flex justify-center",children:t.jsxs("button",{type:"submit",className:ce("green"),children:[c=="add"&&"Add",c=="edit"&&"Update"]})})]}),c=="delete"&&t.jsx(t.Fragment,{children:t.jsxs("div",{className:" z-50 px-6 py-4 flex flex-col gap-4 ",children:[t.jsxs("div",{className:"flex items-center gap-6",children:[t.jsx("span",{className:"text-red-500 bg-red-100 p-2 block rounded-full drop-shadow-md shadow-red-300",children:t.jsx(Ae,{size:25})}),t.jsxs("div",{className:"flex flex-col gap-2",children:[t.jsx("span",{className:"text-xl font-semibold border-b pb-1",children:"Confirmation"}),t.jsx("span",{className:"text-base",children:"Are you sure want to delete ?"})]})]}),t.jsxs("div",{className:"flex justify-end gap-2",children:[t.jsx("button",{className:"text-white bg-slate-400 hover:bg-slate-500 px-4 py-1 text-sm ",onClick:()=>f.current.close(),children:"No"}),t.jsx("button",{className:"text-white bg-red-500 hover:bg-red-600 px-4 py-1 text-sm ",onClick:()=>H(),children:"Yes"})]})]})}),c=="assign"&&t.jsx(t.Fragment,{children:t.jsxs("div",{className:"p-4 px-8 py-6 shadow-lg",children:[t.jsxs("header",{className:"w-full font-semibold text-xl capitalize text-sky-700 border-b pb-1 mt-4 text-center",children:["Assign Role to ",t.jsx("span",{className:"text-amber-600",children:a==null?void 0:a.user_name})]}),!u&&Array.isArray(m)&&(m==null?void 0:m.length)>0&&t.jsx("div",{className:" mt-4 animate__animated animate__fadeIn animate__faster",children:t.jsx("button",{onClick:()=>ue(),className:"float-right bg-green-500 px-3 py-1 rounded-sm shadow-lg hover:shadow-xl hover:bg-green-600 hover:text-white text-white flex items-center mb-1",children:"Assign"})}),t.jsxs("div",{className:"flex flex-col h-[40vh] w-full overflow-y-auto md:overflow-x-hidden mt-6",children:[t.jsxs("div",{className:"w-full grid grid-cols-12 items-center gap-2 bg-slate-500 text-white font-semibold border border-slate-200 px-4 py-2",children:[t.jsx("div",{className:"col-span-3",children:"Sl. No."}),t.jsx("div",{className:"col-span-6",children:"Role Name"}),t.jsx("div",{className:"col-span-3 text-end"})]}),u&&t.jsx(Y,{}),!u&&Array.isArray(m)&&(m==null?void 0:m.map((e,r)=>t.jsx(t.Fragment,{children:t.jsxs("div",{className:"w-full grid grid-cols-12 items-center gap-2 bg-slate-100 border-b hover:bg-white pb-1 p-4 animate__animated animate__fadeIn animate__faster",children:[t.jsx("div",{className:"col-span-1",children:r+1}),t.jsx("div",{className:"col-span-10",children:e==null?void 0:e.role_name}),t.jsx("div",{className:"col-span-1",children:t.jsx("label",{class:"inline-flex items-center px-4",children:t.jsx("input",{type:"radio",name:"roleAssign",checked:M==(e==null?void 0:e.id)||"",value:e==null?void 0:e.id,onChange:L,class:"cursor-pointer form-radio h-5 w-5 text-slate-800"})})})]},r)}))),!u&&Array.isArray(m)&&(m==null?void 0:m.length)==0&&t.jsx("div",{className:"w-full text-center text-red-400 font-semibold pb-1 p-4",children:"No Roles Available"})]})]})})]})]})};export{er as default};
