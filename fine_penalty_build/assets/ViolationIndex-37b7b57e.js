import{r as l,j as a,n as ct}from"./index-56164ba8.js";import{L as tt}from"./ListTable-3fd25db3.js";import{C as dt}from"./index.esm-c189564c.js";import{A as I}from"./ApiHeader-6d683756.js";import{u as Mt}from"./useSetTitle-6fdb2eea.js";import{A as E}from"./AxiosInterceptors-4a143d44.js";import{P as mt}from"./ProjectApiList-aaddad78.js";import{d as at,c as nt,n as w,i as et}from"./PowerupFunctions-ad6e73c3.js";import{S as xt}from"./ShimmerEffectInline-84972968.js";import{B as It}from"./BarLoader-fc975e5a.js";import{B as Et}from"./BottomErrorCard-949cda51.js";import{R as ht}from"./index.esm-3d7aabd9.js";import{c as Ht,a as zt,u as Dt}from"./formik.esm-21504a96.js";import{F as $t}from"./index.esm-155c43b6.js";import{c as Bt}from"./index.esm-78682eb9.js";import"./index-d5a2305f.js";import"./index-1ec5dbcf.js";import"./index.esm-e64cd4f5.js";import"./iconBase-3ee2c362.js";import"./index-564339db.js";const Pt=n=>{var b,f,F,S,V,B,M,P;const{api_assignViolation:U}=mt(),[g,L]=l.useState(0),[p,j]=l.useState([]),[H,z]=l.useState(!1),[_,D]=l.useState(!1);l.useEffect(()=>{var m,h;const i=(h=(m=n==null?void 0:n.dataList)==null?void 0:m.filter(r=>(r==null?void 0:r.on_spot)==!0))==null?void 0:h.map(r=>r==null?void 0:r.id);j(i)},[n==null?void 0:n.dataList]);const Y=i=>p.some(m=>parseInt(m)==parseInt(i)),$=(i,m="")=>{var A,T;const h=i.target.name,r=i.target.value,v=i.target.checked;if(h=="violationAll")if(z(v),v){const x=(T=(A=n==null?void 0:n.dataList)==null?void 0:A.filter(u=>parseFloat(u==null?void 0:u.penalty_amount)<=parseFloat(g)))==null?void 0:T.map(u=>u==null?void 0:u.id);j(x)}else j([]);if(h=="violationSingle"){if(v)j(x=>[...x,r]);else if(!v&&H!=!0){let x=p==null?void 0:p.filter(u=>u!=r);j(x)}}},G=()=>{n==null||n.closeFun(),z(!1),L(0),n==null||n.refresh()},Z=()=>{D(!0);let i={violationId:p};E.post(U,i,I()).then(m=>{var h,r;(h=m==null?void 0:m.data)!=null&&h.status?ct.success("Violation Assigned Successfully !!!"):n==null||n.activateBottomErrorCard(!0,nt((r=m==null?void 0:m.data)==null?void 0:r.message))}).catch(m=>{n==null||n.activateBottomErrorCard(!0,"Server Error! Please try again later.")}).finally(()=>{D(!1),n==null||n.refresh()})};return a.jsxs(a.Fragment,{children:[a.jsx("span",{onClick:()=>G(),className:"block p-1 bg-red-100 hover:bg-red-500 rounded-full hover:text-white cursor-pointer transition-all duration-200 absolute top-2 right-2",children:a.jsx(ht,{})}),a.jsxs("div",{className:"p-4 px-6",children:[a.jsx("h1",{className:"font-semibold text-sky-700 border-b pb-1 text-center my-4 text-xl ",children:"Penalty Amount Assignment for On-Spot Challan Generation"}),a.jsxs("div",{className:"bg-sky-50 p-4",children:[a.jsx("label",{for:"minmax-range",class:"block mb-2 font-medium text-gray-900 text-lg",children:"Select Penalty Range"}),a.jsx("input",{id:"minmax-range",type:"range",min:"0",max:n==null?void 0:n.maxAmount,onChange:i=>L(i.target.value),value:g,class:"w-full h-2 range-input bg-sky-800 rounded-lg appearance-none cursor-pointer darks:bg-gray-700"}),a.jsxs("div",{className:"w-full flex justify-between text-xs font-semibold",children:[a.jsx("span",{children:at(0)}),a.jsx("span",{children:at(n==null?void 0:n.maxAmount)})]})]}),a.jsxs("div",{className:"my-4 font-semibold",children:[a.jsx("span",{className:"text-sm font-normal",children:"Amount:"})," ₹ ",a.jsx("input",{type:"number",className:"focus:outline-none border-b border-gray-300 w-28 bg-white",name:"",value:g,onChange:i=>L(i.target.value),max:parseFloat(n==null?void 0:n.maxAmount),placeholder:"0.00",id:""})]}),!_&&Array.isArray(n==null?void 0:n.dataList)&&((f=(b=n==null?void 0:n.dataList)==null?void 0:b.filter(i=>parseFloat(i==null?void 0:i.penalty_amount)<=parseFloat(g)))==null?void 0:f.length)>0&&a.jsx("div",{className:"px-2 animate__animated animate__fadeIn animate__faster",children:a.jsx("button",{onClick:()=>Z(),className:"float-right bg-green-500 px-3 py-1 rounded-sm shadow-lg hover:shadow-xl hover:bg-green-600 hover:text-white text-white flex items-center mb-1",children:"Assign"})}),a.jsxs("div",{className:"flex flex-col h-[60vh] w-full overflow-y-auto md:overflow-x-hidden",children:[a.jsxs("div",{className:"w-full grid grid-cols-12 items-center gap-2 bg-slate-500 text-white font-semibold border border-slate-200 px-4 py-2",children:[a.jsx("div",{className:"col-span-1",children:"Section"}),a.jsx("div",{className:"col-span-10 text-center",children:"Violation Name"}),a.jsxs("div",{className:"col-span-1 flex",children:[a.jsx("span",{children:"Action"}),Array.isArray(n==null?void 0:n.dataList)&&((S=(F=n==null?void 0:n.dataList)==null?void 0:F.filter(i=>parseFloat(i==null?void 0:i.penalty_amount)<=parseFloat(g)))==null?void 0:S.length)>0&&a.jsx("label",{class:"inline-flex items-center px-4 animate__animated animate__fadeIn animate__faster",children:a.jsx("input",{type:"checkbox",name:"violationAll",onChange:i=>$(i),class:"cursor-pointer form-checkbox h-5 w-5 text-slate-800"})})]})]}),_&&a.jsx(xt,{}),!_&&Array.isArray(n==null?void 0:n.dataList)&&((B=(V=n==null?void 0:n.dataList)==null?void 0:V.filter(i=>parseFloat(i==null?void 0:i.penalty_amount)<=parseFloat(g)))==null?void 0:B.map((i,m)=>a.jsx(a.Fragment,{children:a.jsxs("div",{className:"w-full grid grid-cols-12 items-center gap-2 bg-slate-100 border-b hover:bg-white pb-1 p-4 animate__animated animate__fadeIn animate__faster",children:[a.jsx("div",{className:"col-span-1",children:i==null?void 0:i.violation_section}),a.jsx("div",{className:"col-span-10",children:i==null?void 0:i.violation_name}),a.jsx("div",{className:"col-span-1",children:a.jsx("label",{class:"inline-flex items-center px-4",children:a.jsx("input",{type:"checkbox",name:"violationSingle",checked:H||Y(i==null?void 0:i.id)?!0:null,value:i==null?void 0:i.id,onChange:h=>$(h,i==null?void 0:i.id),class:"cursor-pointer form-checkbox h-5 w-5 text-slate-800"})})})]},m)}))),!_&&Array.isArray(n==null?void 0:n.dataList)&&((P=(M=n==null?void 0:n.dataList)==null?void 0:M.filter(i=>parseFloat(i==null?void 0:i.penalty_amount)<=parseFloat(g)))==null?void 0:P.length)==0&&a.jsx("div",{className:"w-full text-center text-red-400 font-semibold pb-1 p-4",children:"No Violation Available"})]})]})]})},de=()=>{var st,rt;Mt("Violation Master");const{api_violationMasterList:n,api_updateViolation:U,api_deleteViolation:g,api_addViolation:L,api_listDepartment:p,api_addDepartment:j,api_updateDepartment:H,api_deleteDepartment:z,api_listSection:_,api_addSection:D,api_updateSection:Y,api_deleteSection:$,api_getSectionList:G,api_getDepartmentList:Z}=mt(),b=l.useRef(),[f,F]=l.useState([]),[S,V]=l.useState(!1),[B,M]=l.useState(!1),[P,i]=l.useState(""),[m,h]=l.useState(!1),[r,v]=l.useState(""),[A,T]=l.useState(null),[x,u]=l.useState(null),[ft,ut]=l.useState([]),[gt,bt]=l.useState([]),[pt,Tt]=l.useState([]),[jt,q]=l.useState(!1),[o,J]=l.useState("department"),K="border border-red-300 text-red-400 mx-1 px-3 py-1 rounded-sm shadow-lg hover:shadow-xl hover:bg-red-800 hover:text-white",Q="float-right bg-[#1A4D8C] px-3 py-1 rounded-sm shadow-lg hover:shadow-xl hover:bg-[#113766] hover:text-white text-white flex items-center",yt="text-gray-800 text-sm",it="border focus:outline-none drop-shadow-sm focus:drop-shadow-md px-4 py-1 text-gray-700 shadow-black placeholder:text-sm",Nt=t=>`px-4 py-1 text-sm bg-${t}-500 hover:bg-${t}-600 select-none rounded-sm hover:drop-shadow-md text-white`,W=t=>`border border-slate-700 ${t?"bg-slate-700 text-white":"text-slate-700 shadow-2xl shadow-slate-700"} mx-1 px-3 py-1 rounded-sm hover:bg-slate-700 hover:text-white text-sm`,C=(t,e)=>{h(t),i(e)},k=(t,e=null)=>{switch(v(t),t){case"add":break;case"edit":u(e),o=="department"&&d.setFieldValue("department",e==null?void 0:e.department_name),o=="section"&&(d.setFieldValue("violationSection",e==null?void 0:e.violation_section),d.setFieldValue("department",e==null?void 0:e.department_id)),o=="violation"&&(d.setFieldValue("violationName",e==null?void 0:e.violation_name),d.setFieldValue("violationSection",e==null?void 0:e.violation_section_id),d.setFieldValue("department",e==null?void 0:e.department_id),d.setFieldValue("penaltyAmount",e==null?void 0:e.penalty_amount));break;case"delete":T(e);break}b.current.showModal()},wt=[{Header:"#",Cell:({row:t})=>a.jsx("div",{className:"pr-2",children:(t==null?void 0:t.index)+1})},{Header:"Department",accessor:"department_name",Cell:({cell:t})=>{var e;return w((e=t.row.original)==null?void 0:e.department_name)}},{Header:"Created At",accessor:"date",Cell:({cell:t})=>{var e;return et((e=t.row.original)==null?void 0:e.date)}},{Header:"Action",accessor:"id",Cell:({cell:t})=>a.jsx("div",{className:"flex flex-row flex-wrap gap-2",children:a.jsx("button",{onClick:()=>{var e,s;return k("delete",(s=(e=t==null?void 0:t.row)==null?void 0:e.original)==null?void 0:s.id)},className:K,children:"Delete"})})}],_t=[{Header:"#",Cell:({row:t})=>a.jsx("div",{className:"pr-2",children:(t==null?void 0:t.index)+1})},{Header:"Department",accessor:"department_name",Cell:({cell:t})=>{var e;return w((e=t.row.original)==null?void 0:e.department_name)}},{Header:"Violation Section",accessor:"violation_section",Cell:({cell:t})=>{var e;return w((e=t.row.original)==null?void 0:e.violation_section)}},{Header:"Created At",Cell:({cell:t})=>{var e;return et((e=t.row.original)==null?void 0:e.date)}},{Header:"Action",accessor:"id",Cell:({cell:t})=>a.jsx("div",{className:"flex flex-row flex-wrap gap-2",children:a.jsx("button",{onClick:()=>{var e,s;return k("delete",(s=(e=t==null?void 0:t.row)==null?void 0:e.original)==null?void 0:s.id)},className:K,children:"Delete"})})}],St=[{Header:"#",Cell:({row:t})=>a.jsx("div",{className:"pr-2",children:(t==null?void 0:t.index)+1})},{Header:"Department",accessor:"department_name",Cell:({cell:t})=>{var e;return w((e=t.row.original)==null?void 0:e.department_name)}},{Header:"Violation Section",accessor:"violation_section",Cell:({cell:t})=>{var e;return w((e=t.row.original)==null?void 0:e.violation_section)}},{Header:"Violation Name",accessor:"violation_name",Cell:({cell:t})=>{var e;return w((e=t.row.original)==null?void 0:e.violation_name)}},{Header:"Penalty Amount",accessor:"penalty_amount",Cell:({cell:t})=>{var e;return at((e=t.row.original)==null?void 0:e.penalty_amount)}},{Header:"On Spot",accessor:"on_spot",Cell:({cell:t})=>{var e;return a.jsx(a.Fragment,{children:(e=t.row.original)!=null&&e.on_spot?a.jsx("span",{className:"text-green-400 font-semibold",children:"Yes"}):a.jsx("span",{className:"text-red-400 font-semibold",children:"No"})})}},{Header:"Created By",accessor:"created_by",Cell:({cell:t})=>{var e;return w((e=t.row.original)==null?void 0:e.created_by)}},{Header:"Created At",accessor:"date",Cell:({cell:t})=>{var e;return et((e=t.row.original)==null?void 0:e.date)},className:" w-[7%] "},{Header:"Action",accessor:"id",Cell:({cell:t})=>a.jsx("div",{className:"flex flex-row flex-wrap gap-2",children:a.jsx("button",{onClick:()=>{var e,s;return k("delete",(s=(e=t==null?void 0:t.row)==null?void 0:e.original)==null?void 0:s.id)},className:K,children:"Delete"})})}],O=[{title:"Department",key:"department",width:`${o=="department"?" md:w-full ":o=="section"?" md:w-[45%] ":" md:w-[20%] "} w-full `,type:o=="department"?"text":"select",hint:"Enter department",required:!0,options:gt,okey:"id",ovalue:"department_name"},{title:"Violation Section",key:"violationSection",width:`${o=="section"?" md:w-[45%] ":" md:w-[20%] "} w-full ${o!="department"?"block ":"hidden "}`,type:o=="section"?"number":"select",hint:"Enter violation section",required:o!="department"&&!0,options:ft,okey:"id",ovalue:"violation_section"},{title:"Violation Name",key:"violationMade",width:`md:w-[20%] w-full ${o!="department"&&o!="section"?"block ":"hidden "}`,type:"text",hint:"Enter violation name",required:o!="department"&&o!="section"&&!0,options:pt,okey:"id",ovalue:"violation_name"},{title:"Penalty Amount",key:"penaltyAmount",width:`md:w-[20%] w-full ${o=="violation"?"block ":"hidden "}`,type:"number",hint:"Enter penalty Amount",required:o=="violation"&&!0}],vt=Ht().shape([...O].reduce((t,e)=>(e!=null&&e.required&&(t[e.key]=zt().required(e==null?void 0:e.hint)),t),{})),d=Dt({initialValues:{department:"",violationMade:"",violationSection:"",penaltyAmount:""},enableReinitialize:!0,validationSchema:vt,onSubmit:t=>{ot(t)}}),X=()=>{F([]),V(!0);let t;o=="department"&&(t=p),o=="section"&&(t=_),o=="violation"&&(t=n),E.post(t,{},I()).then(e=>{var s,c,y;(s=e==null?void 0:e.data)!=null&&s.status?F((c=e==null?void 0:e.data)==null?void 0:c.data):C(!0,nt((y=e==null?void 0:e.data)==null?void 0:y.message))}).catch(e=>{C(!0,"Server Error! Please try again later.")}).finally(()=>{V(!1)})},At=(t,e="",s,c="",y="",R=!1,N=[],Ft="",Vt="")=>a.jsxs("div",{className:`flex flex-col ${c} `,children:[e!=""&&a.jsxs("label",{htmlFor:t,className:yt,children:[e," ",R&&a.jsx("span",{className:"text-red-500 text-xs font-bold",children:"*"})," : "]}),s!="select"&&s!="file"&&a.jsx("input",{...d.getFieldProps(t),type:s,className:it+` ${d.touched[t]&&d.errors[t]?" border-red-200 placeholder:text-red-400 ":" focus:border-zinc-300 border-zinc-200"}`,name:t,id:"",placeholder:y,pattern:"^[a-zA-Z0-9\\s]*$",title:"Special characters are not allowed"}),s=="select"&&a.jsx("select",{...d.getFieldProps(t),className:it+` ${d.touched[t]&&d.errors[t]?" border-red-200 placeholder:text-red-400 text-red-400":" focus:border-zinc-300 border-zinc-200 "}`,children:jt?a.jsx("option",{children:"Loading..."}):a.jsxs(a.Fragment,{children:[a.jsx("option",{value:null,children:"Select"}),typeof N=="object"&&(N==null?void 0:N.map(lt=>a.jsx("option",{className:"",value:lt[Ft],children:lt[Vt]})))]})})]}),ot=t=>{M(!0),b.current.close();let e,s;switch(r){case"add":o=="department"&&(e={departmentName:t==null?void 0:t.department},s=j),o=="section"&&(e={violationSection:t==null?void 0:t.violationSection,departmentId:t==null?void 0:t.department},s=D),o=="violation"&&(e={violationName:t==null?void 0:t.violationMade,sectionId:t==null?void 0:t.violationSection,penaltyAmount:t==null?void 0:t.penaltyAmount,departmentId:t==null?void 0:t.department},s=L);break;case"edit":o=="department"&&(e={id:x==null?void 0:x.id,departmentName:t==null?void 0:t.department},s=H),o=="section"&&(e={id:x==null?void 0:x.id,violationSection:t==null?void 0:t.violationSection,department:t==null?void 0:t.department},s=Y),o=="violation"&&(e={id:x==null?void 0:x.id,violationName:t==null?void 0:t.violationMade,violationSection:t==null?void 0:t.violationSection,penaltyAmount:t==null?void 0:t.penaltyAmount,department:t==null?void 0:t.department},s=U);break;case"delete":o=="department"&&(s=z,e={departmentId:A}),o=="section"&&(s=$,e={sectionId:A}),o=="violation"&&(s=g,e={id:A});break}E.post(s,e,I()).then(c=>{var y,R,N;(y=c==null?void 0:c.data)!=null&&y.status?(ct.success((R=c==null?void 0:c.data)==null?void 0:R.message),X()):C(!0,nt((N=c==null?void 0:c.data)==null?void 0:N.message))}).catch(c=>{C(!0,"Server Error! Please try again later.")}).finally(()=>{M(!1),d.resetForm()})},Ct=()=>{q(!0),E.post(Z,{},I()).then(t=>{var e,s;(e=t==null?void 0:t.data)!=null&&e.status&&bt((s=t==null?void 0:t.data)==null?void 0:s.data)}).catch(t=>{}).finally(()=>{q(!1)})},kt=t=>{q(!0),E.post(G,{departmentId:t},I()).then(e=>{var s,c;(s=e==null?void 0:e.data)!=null&&s.status&&ut((c=e==null?void 0:e.data)==null?void 0:c.data)}).catch(e=>{}).finally(()=>{q(!1)})},Lt=t=>{const e=t.target.name,s=t.target.value;e=="violationSection"&&getViolationNameList(s),e=="department"&&kt(s)};return l.useEffect(()=>{o!="department"&&Ct(),X()},[o]),a.jsxs(a.Fragment,{children:[B&&a.jsx(It,{}),m&&a.jsx(Et,{activateBottomErrorCard:C,errorTitle:P}),a.jsxs("div",{className:"poppins p-4 px-6",children:[a.jsx("div",{className:"uppercase font-semibold text-gray-700 text-2xl py-2 text-center tracking-[0.7rem]",children:"Violation   Master"}),a.jsx("div",{className:"w-full h-[0.15rem] bg-gray-400 mb-6"}),a.jsxs("div",{className:"flex gap-1 w-full flex-wrap my-6",children:[a.jsx("button",{onClick:()=>J("department"),className:W(o=="department"),children:"Department Master"}),a.jsx("button",{onClick:()=>J("section"),className:W(o=="section"),children:"Section Master"}),a.jsx("button",{onClick:()=>J("violation"),className:W(o=="violation"),children:"Violation Master"})]}),S&&a.jsx(xt,{}),!S&&o=="violation"&&a.jsxs("button",{onClick:()=>k("assign"),className:Q+" bg-orange-500 hover:bg-orange-600 capitalize flex gap-1 items-center ml-2",children:[a.jsx(Bt,{}),"Assign On Spot Violation"]}),!S&&a.jsx(a.Fragment,{children:(f==null?void 0:f.length)>0?a.jsxs(a.Fragment,{children:[a.jsxs("button",{onClick:()=>k("add"),className:Q+"capitalize flex gap-1 items-center",children:[a.jsx(dt,{})," Add ",a.jsx("span",{className:"capitalize",children:o})]}),o=="department"&&a.jsx(tt,{columns:wt,dataList:f}),o=="section"&&a.jsx(tt,{columns:_t,dataList:f}),o=="violation"&&a.jsx(tt,{columns:St,dataList:f})]}):a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"flex justify-end mb-2",children:a.jsxs("button",{onClick:()=>k("add"),className:Q+"capitalize flex gap-1 items-center",children:[a.jsx(dt,{})," Add ",a.jsx("span",{className:"capitalize",children:o})]})}),a.jsx("div",{className:"bg-red-100 text-red-500 py-2 text-lg font-semibold text-center border border-red-500 drop-shadow-sm",children:"Oops! No Data Found."})]})})]}),a.jsxs("dialog",{ref:b,className:`relative overflow-clip animate__animated animate__zoomIn animate__faster ${r!="delete"&&o=="violation"&&" w-[90vw] md:max-w-[1080px]"}`,children:[r!="assign"&&r!="delete"&&a.jsx("span",{onClick:()=>(b.current.close(),d.resetForm()),className:"block p-1 bg-red-100 hover:bg-red-500 rounded-full hover:text-white cursor-pointer transition-all duration-200 absolute top-2 right-2",children:a.jsx(ht,{})}),r!="assign"&&r!="delete"&&a.jsxs("form",{onChange:t=>(d.handleChange(t),Lt(t)),onSubmit:d.handleSubmit,className:"p-4 px-8 py-6 shadow-lg",children:[a.jsxs("section",{className:"flex gap-4 flex-wrap",children:[a.jsxs("header",{className:"w-full font-semibold text-xl capitalize text-sky-700 border-b pb-1 text-center",children:[r," ",o]}),O==null?void 0:O.map(t=>At(t==null?void 0:t.key,t==null?void 0:t.title,t==null?void 0:t.type,t==null?void 0:t.width,t==null?void 0:t.hint,t==null?void 0:t.required,t==null?void 0:t.options,t==null?void 0:t.okey,t==null?void 0:t.ovalue)),((st=d.values)==null?void 0:st.violationMade)!=""&&a.jsxs("div",{className:"flex flex-wrap gap-2 text-sm w-full",children:[a.jsx("span",{className:"block w-full md:w-[15%]",children:"Violation Name :"}),(rt=d.values)==null?void 0:rt.violationMade,a.jsx("span",{className:"animate-ping",children:"|"})]})]}),a.jsx("footer",{className:"mt-4 flex justify-center",children:a.jsxs("button",{type:"submit",className:Nt("green"),children:[r=="add"&&"Add",r=="edit"&&"Update"]})})]}),r=="delete"&&a.jsx(a.Fragment,{children:a.jsxs("div",{className:" z-50 px-6 py-4 flex flex-col gap-4 ",children:[a.jsxs("div",{className:"flex items-center gap-6",children:[a.jsx("span",{className:"text-red-500 bg-red-100 p-2 block rounded-full drop-shadow-md shadow-red-300",children:a.jsx($t,{size:25})}),a.jsxs("div",{className:"flex flex-col gap-2",children:[a.jsx("span",{className:"text-xl font-semibold border-b pb-1",children:"Confirmation"}),a.jsx("span",{className:"text-base",children:"Are you sure want to delete ?"})]})]}),a.jsxs("div",{className:"flex justify-end gap-2",children:[a.jsx("button",{className:"text-white bg-slate-400 hover:bg-slate-500 px-4 py-1 text-sm ",onClick:()=>b.current.close(),children:"No"}),a.jsx("button",{className:"text-white bg-red-500 hover:bg-red-600 px-4 py-1 text-sm ",onClick:()=>ot(),children:"Yes"})]})]})}),r=="assign"&&a.jsx(Pt,{closeFun:()=>b.current.close(),refresh:()=>X(),maxAmount:Math.max(...f.map(t=>parseInt(t==null?void 0:t.penalty_amount,10))),dataList:f,activateBottomErrorCard:C})]})]})};export{de as default};
