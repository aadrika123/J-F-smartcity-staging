import{r as c,c as nt,a as x,b as mt,j as l,aa as ut,ab as xt,cE as h,cI as f,cB as g,cF as j,U as ht,A as y,e as N,Q as v,g as ft}from"./index-21aade66.js";import{N as gt}from"./nodata-040bca7f.js";import"./iconify-1f600ab3.js";import"./lodash-fd0ed28e.js";import{M as s}from"./MenuItem-d38a9826.js";const wt=()=>{const o=[{value:1,label:"Paid"},{value:0,label:"Not Paid"}],[n,V]=c.useState([]),[m,Y]=c.useState([]),[jt,i]=c.useState(!1),{api_finance_year:G,api_getactiveClassData:K,api_payment_report:X}=ft(),[b,u]=c.useState(!1),[Z,D]=c.useState(!1),[P,S]=c.useState(1),[w,tt]=c.useState(10),[lt,F]=c.useState(),[yt,I]=c.useState(),[E,_]=c.useState([]),et=E,at=t=>{tt(parseInt(t))},ct=t=>{S(t-1)},it=t=>{S(t+1)},st=()=>{y.post(K,{},N()).then(function(t){var e,d,r;(e=t==null?void 0:t.data)!=null&&e.status?(console.log((d=t==null?void 0:t.data)==null?void 0:d.data),Y((r=t==null?void 0:t.data)==null?void 0:r.data)):activateBottomErrorCard(!0,"Error occured while fetching data."),i(!1)}).catch(function(t){console.log("==2 error list...",t),activateBottomErrorCard(!0,"Error occured while fetching data.")})},dt=()=>{i(!0),y.post(G,{},N()).then(function(t){t!=null&&t.data?(console.log(t==null?void 0:t.data),V(t==null?void 0:t.data)):activateBottomErrorCard(!0,"Error occured while fetching data."),i(!1)}).catch(function(t){console.log("==2 error list...",t),activateBottomErrorCard(!0,"Error occured while fetching data."),i(!1)})};c.useEffect(()=>{dt(),st()},[]);const rt=nt({fy:x().required("Required"),classId:x().required("Required"),isPaid:x().required("Required")}),a=mt({initialValues:{fy:"",classId:"",isPaid:""},validationSchema:rt,onSubmit:async t=>{console.log("at submit ",t),ot(t),a.resetForm()}}),ot=t=>{i(!0),y.post(X,{fy:t.fy,classId:t.classId,isPaid:t.isPaid},N()).then(function(e){var d,r,C,p,B,L,q,A,M,W,k,R,z,$,H,J,O,T,U,Q;console.log(e),((d=e==null?void 0:e.data)==null?void 0:d.status)===!0?((C=(r=e==null?void 0:e.data)==null?void 0:r.data)==null?void 0:C.total)===0||((B=(p=e==null?void 0:e.data)==null?void 0:p.data)==null?void 0:B.data.length)===0?(v.error("Data not Found"),_((q=(L=e==null?void 0:e.data)==null?void 0:L.data)==null?void 0:q.data),F((M=(A=e==null?void 0:e.data)==null?void 0:A.data)==null?void 0:M.last_page),I((k=(W=e==null?void 0:e.data)==null?void 0:W.data)==null?void 0:k.total),u(!1),D(!0)):(console.log("class section map data",(z=(R=e==null?void 0:e.data)==null?void 0:R.data)==null?void 0:z.data),_((H=($=e==null?void 0:e.data)==null?void 0:$.data)==null?void 0:H.data),F((O=(J=e==null?void 0:e.data)==null?void 0:J.data)==null?void 0:O.last_page),I((U=(T=e==null?void 0:e.data)==null?void 0:T.data)==null?void 0:U.total),u(!0)):v.error(`${(Q=e==null?void 0:e.data)==null?void 0:Q.message}`),i(!1)}).catch(function(e){console.log("==2 error list...",e),v.warning("Error occured in submitting form."),i(!1)})};return console.log(E),l.jsx(l.Fragment,{children:l.jsxs("div",{className:"h-[77vh] lg:h-auto overflow-y-auto",children:[l.jsxs("div",{className:"flex items-start justify-start flex-col mt-5 ml-5 ",children:[l.jsx("h1",{className:"text-4xl font-semibold text-gray-700",children:"Payment Status"}),l.jsx("h1",{className:"common-header-smalltext",children:"Unlock Your Potential. Join Our Journey Of Education And Excellence"})]}),l.jsx(ut,{value:a,children:l.jsx(xt,{autoComplete:"off",children:l.jsxs("div",{className:"grid grid-cols-12 gap-5 ml-[4vh] mt-[2vh]",children:[l.jsx("div",{className:"col-span-12 lg:col-span-3",children:l.jsxs(h,{fullWidth:!0,error:a.touched.fy&&!!a.errors.fy,children:[l.jsx(f,{id:"demo-simple-select-label",sx:{padding:0},children:"Select Financial year"}),l.jsxs(g,{labelId:"demo-simple-select-label",id:"demo-simple-select",label:"Select Menu",...a.getFieldProps("fy"),fullWidth:!0,size:"small",children:[l.jsx(s,{value:"",children:"Select"}),n&&(n==null?void 0:n.map(t=>l.jsx(s,{value:t==null?void 0:t.fy,children:t==null?void 0:t.fy})))]}),l.jsx(j,{children:a.touched.fy&&a.errors.fy})]})}),l.jsx("div",{className:"col-span-12 lg:col-span-3",children:l.jsxs(h,{fullWidth:!0,error:a.touched.classId&&!!a.errors.classId,children:[l.jsx(f,{id:"demo-simple-select-label",sx:{padding:0},children:"Select Class"}),l.jsxs(g,{labelId:"demo-simple-select-label",id:"demo-simple-select",label:"Select Menu",...a.getFieldProps("classId"),fullWidth:!0,size:"small",children:[l.jsx(s,{value:"",children:"Select"}),m&&(m==null?void 0:m.map(t=>l.jsx(s,{value:t==null?void 0:t.id,children:t==null?void 0:t.class_name})))]}),l.jsx(j,{children:a.touched.classId&&a.errors.classId})]})}),l.jsx("div",{className:"col-span-12 lg:col-span-3",children:l.jsxs(h,{fullWidth:!0,error:a.touched.isPaid&&!!a.errors.isPaid,children:[l.jsx(f,{id:"demo-simple-select-label",sx:{padding:0},children:"Select Payment Status"}),l.jsxs(g,{labelId:"demo-simple-select-label",id:"demo-simple-select",label:"Select Menu",...a.getFieldProps("isPaid"),fullWidth:!0,size:"small",children:[l.jsx(s,{value:"",children:"Select"}),o&&(o==null?void 0:o.map(t=>l.jsx(s,{value:t==null?void 0:t.value,children:t==null?void 0:t.label})))]}),l.jsx(j,{children:a.touched.isPaid&&a.errors.isPaid})]})}),l.jsx("div",{className:"col-span-12 lg:col-span-3",children:l.jsx("button",{onClick:()=>u(!b),className:"save-button",children:"Search"})})]})})}),b?l.jsx(l.Fragment,{children:l.jsxs("div",{className:"relative overflow-auto  w-[150vw] lg:w-[95%] ml-[2vw] shadow-md mt-[2vh]   sm:rounded-lg",children:[l.jsxs("table",{className:"w-full text-sm text-left ",id:"myTable",children:[l.jsx("thead",{className:"text-md ",children:l.jsxs("tr",{className:"text-white bg-[#3f7772]",children:[l.jsx("th",{scope:"col",className:" py-5  text-center ",children:"Sl No."}),l.jsx("th",{scope:"col",className:" py-5  text-center ",children:"Admission No"}),l.jsx("th",{scope:"col",className:" py-5  text-center",children:"Full Name"}),l.jsx("th",{scope:"col",className:" py-5  text-center",children:"Class"}),l.jsx("th",{scope:"col",className:" py-5  text-center",children:"Registration Date"}),l.jsx("th",{scope:"col",className:" py-5  text-center",children:"Category"}),l.jsx("th",{scope:"col",className:" py-5  text-center",children:"Payment Status"})]})}),et.map((t,e)=>l.jsx(l.Fragment,{children:l.jsx("tbody",{children:l.jsxs("tr",{className:"bg-white border-b  hover:bg-slate-100 ",children:[l.jsx("td",{scope:"row",className:"px-6 py-4 font-medium whitespace-nowrap  text-center",children:(P-1)*w+e+1}),l.jsx("td",{className:"px-6 py-4 text-center",children:t==null?void 0:t.admission_no}),l.jsx("td",{className:"px-6 py-4 text-center",children:t==null?void 0:t.full_name}),l.jsx("td",{className:"px-6 py-4 text-center",children:t==null?void 0:t.class_name}),l.jsx("td",{className:"px-6 py-4 text-center",children:t==null?void 0:t.registration_date}),l.jsx("td",{className:"px-6 py-4 text-center",children:t==null?void 0:t.category_name}),l.jsx("td",{className:"px-6 py-4 text-center",children:t==null?void 0:t.is_paid})]})})}))]}),l.jsx(ht,{ChangePage:at,number:P,lastPage:lt,nextPage:it,prevPage:ct,postperpage:w})]})}):Z?l.jsx(l.Fragment,{children:l.jsx("div",{className:"flex justify-center items-center",children:l.jsx("img",{src:gt,alt:""})})}):null]})})};export{wt as default};
