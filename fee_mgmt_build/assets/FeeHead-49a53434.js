import{r,b as v,Q as p,j as e,L as ie,A as oe}from"./index-dd1288ad.js";import{P as ne}from"./Page-c37fa378.js";import{B as ce}from"./Breadcrumb-5eaf1e4d.js";import{u as me,F as xe,a as ue}from"./formik.esm-5fbe598e.js";import{S as fe}from"./StudentAdd-c128c818.js";import{c as he,a as pe}from"./index.esm-e655e2bf.js";import{I as ge,E as je}from"./jspdf.plugin.autotable-f89c5ba8.js";import{B as ve,a as we}from"./index.esm-a97a4a89.js";import{C as be}from"./index-0f60d4d6.js";import{L as ye}from"./LoadingButton-8b46375a.js";import"./TextField-b2648471.js";import{T as V}from"./TextField-4875ffa0.js";import"./index-20c391bc.js";import"./Select-35bb0e77.js";function $e(){const[h,u]=r.useState(!1),{api_get_fee_head:z,api_add_fee_head:K,api_delete_fee_head:O,api_search_fee_head:W}=oe,[f,w]=r.useState([]),[b,Q]=r.useState([]),[g,U]=r.useState(),[d,y]=r.useState(1),[N,G]=r.useState(!1),[m,J]=r.useState(5),[j,F]=r.useState(),[Ne,S]=r.useState(),[X,x]=r.useState(!1),[C,Y]=r.useState(!1),Z=f,D=t=>{J(parseInt(t)),u(!0)},ee=t=>{y(t-1)},te=t=>{y(t+1)};r.useEffect(()=>{d&&h&&o()},[d,h]),r.useEffect(()=>{m&&h&&o()},[m,h]);const o=async t=>{var c,a,_,k,P,E,H,A,L,T,B,I,M,$,q,R;let l,i;t===void 0?(i={perPage:m,page:d},l=z):(i={search:t,perPage:m,page:d},l=W);try{x(!0);const s=await v.post(l,i);s.status==200&&(((a=(c=s==null?void 0:s.data)==null?void 0:c.data)==null?void 0:a.total)===0?(p.error("Data not Found"),w((k=(_=s==null?void 0:s.data)==null?void 0:_.data)==null?void 0:k.data),F((E=(P=s==null?void 0:s.data)==null?void 0:P.data)==null?void 0:E.last_page),S((A=(H=s==null?void 0:s.data)==null?void 0:H.data)==null?void 0:A.total),u(!1)):(console.log("exam term data",(T=(L=s==null?void 0:s.data)==null?void 0:L.data)==null?void 0:T.data),w((I=(B=s==null?void 0:s.data)==null?void 0:B.data)==null?void 0:I.data),F(($=(M=s==null?void 0:s.data)==null?void 0:M.data)==null?void 0:$.last_page),S((R=(q=s==null?void 0:s.data)==null?void 0:q.data)==null?void 0:R.total),u(!1)),x(!1))}catch(s){console.log(s),x(!1)}};r.useEffect(()=>{o()},[]);const se=()=>Y(!C),ae=he({feeHead:pe().required("Required")}),n=me({initialValues:{feeHead:""},onSubmit:async t=>{var l,i,c;console.log("at submit",t),n.resetForm();try{const a=await v.post(`${K}`,t);(l=a==null?void 0:a.data)!=null&&l.status?(p.success((i=a==null?void 0:a.data)==null?void 0:i.message),o()):p.error((c=a==null?void 0:a.data)==null?void 0:c.message)}catch(a){p.error(a==null?void 0:a.message)}},validationSchema:ae}),le=async(t,l)=>{try{x(!0);const i=await v.post(`${O}`,{id:t,status:l==="Active"?"deactive":"active"});console.log(i),i.status==200&&o(),x(!1)}catch(i){console.log(i),x(!1)}},re=[{title:"Fee Head Name",feild:"fee_head_name"},{title:"Created Date  ",feild:"date"},{title:"Created Time ",feild:"time"},{title:"Status",feild:"status"}],de=()=>{const t=new je;t.text("Fee Head Details",10,10),t.autoTable({theme:"grid",columns:re.map(l=>({...l,dataKey:l.feild})),body:f}),t.save("FeeHead.pdf")};return r.useEffect(()=>{const t=f.map(l=>{const{id:i,...c}=l;return c});console.log(t),Q(t)},[f]),e.jsxs(e.Fragment,{children:[e.jsx(fe,{isOpen:C,toggle:se,Link:"/student/view"}),e.jsxs(ne,{title:"Student",pageName:"Fee Head Master",children:[e.jsx(ce,{list:[{title:"Home",path:"/home"},{title:"Student List",path:"/student/view"},{title:"Student Entry",path:"/add-new-student"}]}),e.jsxs("div",{className:"w-full grid grid-cols-12 gap-x-2",children:[e.jsxs("div",{className:"col-span-12 md:col-span-4 border rounded-lg h-[60vh] ml-[3vh]",children:[e.jsx("h1",{className:"absolute -mt-[0.9vw] ml-[2.5vw] text-xl text-[#0F766E] bg-white w-[2vw]",children:"Add"}),e.jsx("div",{className:"mt-5 mx-auto ",children:X?e.jsx(ie,{}):e.jsx("div",{className:" w-full mt-[7vh]",children:e.jsx("div",{className:"  ",children:e.jsx("div",{className:"p-6 space-y-6 flex justify-center items-center",children:e.jsx(xe,{value:n,children:e.jsxs(ue,{children:[e.jsxs("div",{className:"flex w-full",children:[e.jsxs("label",{className:"w-full",htmlFor:"",children:["Fee Head",e.jsx("span",{className:"text-[red]",children:"*"})]}),e.jsx(V,{type:"text",...n.getFieldProps("feeHead"),label:"Fee Head",fullWidth:!0,size:"small",error:n.touched.feeHead&&!!n.errors.feeHead,helperText:n.touched.feeHead&&n.errors.feeHead})]}),e.jsx("div",{className:"flex justify-center ml-[12vh] rounded-lg  mt-[10vh]",children:e.jsxs(ye,{className:" bg-[#0F766E]",type:"submit",isLoading:n.isSubmitting,children:[" ","SUBMIT"," "]})}),e.jsx("div",{className:"flex justify-center items lg:ml-16 mt-11 text-[2vh]",children:e.jsxs("h1",{className:"text-red-600",children:["Note : (*) is a mandatory field"," "]})})]})})})})})})]}),e.jsxs("div",{className:"col-span-12 md:col-span-8 border rounded-lg py-2 h-auto",children:[e.jsx("h1",{className:"absolute ml-[2.5vw] text-xl  text-[#0F766E] -mt-[1.5vw] bg-white w-[5.5vw]",children:"View List"}),e.jsxs("div",{className:"relative overflow-x-auto w-[95%]  shadow-md mt-[3vh] ml-[2vw] sm:rounded-lg",children:[e.jsxs("div",{className:"flex flex-wrap justify-between mt-2",children:[e.jsxs("div",{className:"ml-9 text-3xl gap-x-3 flex",children:[e.jsx("div",{className:"text-red-700 cursor-pointer",children:e.jsx(ve,{onClick:de})}),e.jsx("div",{className:"text-[#0F766E] cursor-pointer",children:e.jsx(we,{onClick:()=>G(!N)})}),N&&e.jsx(be,{data:b||f,target:"_blank"})]}),e.jsx("div",{className:" mr-9 justify-start  max-[870px]:block max-[870px]:mt-2",children:e.jsx("div",{className:"",children:e.jsx("div",{className:"",children:e.jsx(V,{id:"search",type:"search",label:"Search",size:"small",fullWidth:!0,onChange:t=>{t.target.value===""?o():U(t.target.value)},onKeyDown:t=>t.key==="Enter"&&o(g),sx:{width:"100%"},InputProps:{endAdornment:e.jsx(ge,{position:"end",sx:{marginRight:"-14px"},children:e.jsx("button",{onClick:()=>{g===""?o():o(g)},className:"bg-[#0F766E] w-14 max-[320px]:w-8 h-10 rounded-r-[5px] flex items-center justify-center text-white",type:"submit",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",class:"h-5 w-5 ",children:e.jsx("path",{"fill-rule":"evenodd",d:"M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z","clip-rule":"evenodd"})})})})}})})})})]}),e.jsxs("table",{className:"w-full text-sm text-left  mt-[2vh] ",id:"myTable",children:[e.jsx("thead",{className:"text-md ",children:e.jsxs("tr",{className:"text-white bg-[#0F766E]",children:[e.jsx("th",{scope:"col",className:" py-5  text-center ",children:"Sl No."}),e.jsx("th",{scope:"col",className:" py-5  text-center",children:"Fee Head Name"}),e.jsx("th",{scope:"col",className:" py-5  text-center",children:"Create Date | Created Time"}),e.jsx("th",{scope:"col",className:" py-5  text-center ",children:"Status"}),e.jsx("th",{scope:"col",className:" py-5  text-center ",children:"Action"})]})}),Z.map((t,l)=>e.jsx(e.Fragment,{children:e.jsx("tbody",{children:e.jsxs("tr",{className:"bg-white border-b  hover:bg-slate-100 ",children:[e.jsx("td",{scope:"row",className:"px-6 py-4 font-medium whitespace-nowrap  text-center",children:(d-1)*m+l+1}),e.jsx("td",{className:"px-6 py-4 text-center",children:t==null?void 0:t.fee_head_name}),e.jsxs("td",{className:"px-6 py-4 text-center",children:[t==null?void 0:t.date," | ",t==null?void 0:t.time]}),e.jsx("td",{className:"px-6 py-4 text-center ",children:e.jsx("h1",{className:(t==null?void 0:t.status)==="Active"?"text-[green]":"text-[red]",children:t==null?void 0:t.status})}),e.jsx("td",{className:"px-6 py-4 text-center",children:e.jsx("button",{className:`${(t==null?void 0:t.status)==="Active"?"ml-4 px-3 py-1.5 border border-red-500 text-red-500 font-medium text-xs leading-tight uppercase rounded shadow-xl hover:bg-red-700 hover:text-white hover:shadow-lg  active:shadow-lg transition duration-150 ease-in-out cursor-pointer":"ml-4 px-5 py-1.5 border border-[green] text-[green] font-medium text-xs leading-tight uppercase rounded shadow-xl hover:bg-[green] hover:text-white hover:shadow-lg  active:shadow-lg transition duration-150 ease-in-out cursor-pointer"}`,onClick:()=>le(t==null?void 0:t.id,t==null?void 0:t.status),children:(t==null?void 0:t.status)==="Active"?"Deactivate":"Activate"})})]})})}))]}),e.jsxs("div",{className:"flex p-4  w-full",children:[e.jsxs("div",{className:"flex items-start justify-start w-full ",children:[" ",e.jsx("select",{className:"h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[calc(1/2)] p-2.5 ",value:m,onChange:t=>D(t.target.value),children:[5,10,25,50].map(t=>e.jsxs("option",{value:t,children:["show ",t]},t))})]}),e.jsxs("div",{className:"flex items-center justify-center w-full",children:[" ",e.jsxs("span",{children:["Page ","",e.jsxs("strong",{children:[d," of ",j]}),""]})]}),e.jsxs("div",{className:"flex items-center justify-end w-full",children:[e.jsx("button",{className:(d===1?"opacity-50":"opacity-100")+" text-xl hover:bg-sky-300 hover:text-white",onClick:()=>{ee(d),u(!0)},disabled:d===1,children:"⬅️"}),e.jsx("button",{className:(d===j?"opacity-50":"opacity-100")+" text-xl hover:bg-sky-300 hover:text-white",onClick:()=>{te(d),u(!0)},disabled:d===j,children:"➡️"})]})]})]})]})]})]})]})}export{$e as default};
