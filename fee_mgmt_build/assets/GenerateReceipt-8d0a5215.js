import{r as V,u as D,j as e,L as G,b as m,A as Y,Q as v}from"./index-dd1288ad.js";import{l as J}from"./index-9fc97ba5.js";import{u as O,F as U,a as W}from"./formik.esm-5fbe598e.js";import{c as X,a as u}from"./index.esm-e655e2bf.js";import{S as F,a as Z,L as R}from"./LoadingButton-8b46375a.js";import"./TextField-b2648471.js";import{P as ee}from"./Page-c37fa378.js";import{B as se}from"./Breadcrumb-5eaf1e4d.js";import{u as j}from"./useQuery-53a02e0f.js";const je=()=>{var k,_,E,C,P,A,$,z;const l=V.useRef(),p=J.useReactToPrint({content:()=>l.current}),{api_class:b,api_fy:I,api_fee_report:t,api_month_active_all:x,api_fee_search_fee_receipt:r}=Y,{data:d,isLoading:f,error:g}=j({queryKey:["month"],queryFn:async()=>(await m.post(`${x}`,{})).data.data}),{data:o,isLoading:N,error:y}=j({queryKey:["fy"],queryFn:async()=>(await m.post(`${I}`,{})).data.data}),{data:c,isLoading:i,error:S}=j({queryKey:["class"],queryFn:async()=>(await m.post(`${b}`,{})).data.data}),w=s=>{var h,B,K;(h=s==null?void 0:s.data)!=null&&h.status?v.success((K=s==null?void 0:s.data)==null?void 0:K.message):v.error((B=s==null?void 0:s.data)==null?void 0:B.message)},H=s=>{v.error(s==null?void 0:s.error)},{data:n,isLoading:re,error:le,refetch:M,isFetching:q,isSuccess:ne,isError:ae}=j({queryKey:["viewReceipt"],queryFn:async()=>await m.post(`${r}`,{fyId:a.values.fyId,classId:a.values.classId,monthId:a.values.monthId,admissionNo:a.values.admissionNo}),onSuccess:w,onError:H,enabled:!1}),Q=X({fyId:u().required("Required"),classId:u().required("Required"),monthId:u().required("Required"),admissionNo:u().required("Required").min(2,"Invalid No").max(20)}),a=O({initialValues:{fyId:"",classId:"",monthId:"",admissionNo:""},onSubmit:async s=>{M(),console.log("on submit",s)},validationSchema:Q}),{collapsed:L}=D();return e.jsxs(ee,{title:"Search Receipt",pageName:"Search Receipt",children:[e.jsx(se,{list:[{title:"Home",path:"/home"},{title:"Search Receipt",path:"#"}]}),e.jsx("div",{className:"border p-6 py-4 mx-auto w-[96%]",children:e.jsx(U,{value:a,children:e.jsx(W,{onSubmit:a.handleSubmit,children:e.jsx("div",{className:"lg:px-24 mx-auto px-6 justify-center lg:ml-28",children:e.jsxs("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-5 content-center",children:[e.jsx("div",{children:e.jsx(F,{name:"fyId",label:"Financial Year",formik:a,isRequiredLabel:!0,size:"xs",children:(o==null?void 0:o.length)>0&&(o==null?void 0:o.map(s=>e.jsx("option",{value:s==null?void 0:s.id,children:s==null?void 0:s.financial_year})))})}),e.jsx("div",{children:e.jsx(F,{name:"classId",label:"Select Class",formik:a,isRequiredLabel:!0,size:"xs",children:(c==null?void 0:c.length)>0&&(c==null?void 0:c.map(s=>e.jsx("option",{value:s==null?void 0:s.id,children:s==null?void 0:s.class_name})))})}),e.jsx("div",{children:e.jsxs(F,{name:"monthId",label:"Month",formik:a,isRequiredLabel:!0,size:"xs",isBlankSelect:!0,children:[e.jsx("option",{value:"",children:"Select All"}),(d==null?void 0:d.length)>0&&(d==null?void 0:d.map((s,h)=>e.jsx("option",{value:s==null?void 0:s.id,children:s==null?void 0:s.month_name},h)))]})}),e.jsx("div",{children:e.jsx(Z,{name:"admissionNo",label:"Admission No",formik:a,isRequiredLabel:!0,size:"xs",isBlankSelect:!0})}),e.jsx("div",{children:e.jsx("div",{className:"mt-7",children:e.jsxs(R,{color:"primary",type:"submit",size:"xs",className:"rounded-lg",isLoading:q,children:[" ","Search"," "]})})})]})})})})}),q?e.jsx(G,{}):e.jsxs(e.Fragment,{children:[((E=(_=(k=n==null?void 0:n.data)==null?void 0:k.data)==null?void 0:_.feeDetails)==null?void 0:E.length)>0?e.jsxs("div",{className:"grid grid-cols-1 gap-2 md:grid-cols-2 content-center",children:[e.jsx("div",{children:e.jsx(T,{viewReceipt:(C=n==null?void 0:n.data)==null?void 0:C.data,copyName:"School Copy",componentRef:l,collapsed:L})}),e.jsx("div",{children:e.jsx(T,{viewReceipt:(P=n==null?void 0:n.data)==null?void 0:P.data,copyName:"Student Copy",componentRef:l,collapsed:L})})]}):e.jsx("div",{className:"text-center mt-5 text-[red]",children:"No Data Found"}),((z=($=(A=n==null?void 0:n.data)==null?void 0:A.data)==null?void 0:$.feeDetails)==null?void 0:z.length)>0&&e.jsx("div",{className:"text-center mt-3 mb-5",children:e.jsx("button",{onClick:p,className:"text-white bg-blue-500 px-2 py-2 rounded-lg ",children:"PRINT RECEIPT"})})]})]})},T=({viewReceipt:l,copyName:p,componentRef:b,collapsed:I})=>{var x;const{user:t}=D();return e.jsx("div",{ref:b,className:"flex flex-wrap ",children:(x=l==null?void 0:l.feeDetails)==null?void 0:x.map((r,d)=>{var f,g,o,N,y,c;return e.jsxs("div",{className:`border  border-black mt-[4vh] ml-[4vh] mb-2 rounded-md ')] 

             bg-opacity-80 w-[92%]
              `,children:[e.jsxs("div",{className:"text-center tracking-wider",children:[e.jsxs("div",{className:"flex justify-between font-semibold p-2",children:[e.jsx("h1",{children:r==null?void 0:r.receiptNo}),e.jsx("h1",{children:p})]}),e.jsx("h1",{className:"text-3xl mt-[2vh] font-bold",children:t==null?void 0:t.name}),e.jsx("h1",{className:"text-xl font-semibold",children:(t==null?void 0:t.address)||"Address"})]}),e.jsxs("div",{className:"tracking-wider text-xl mt-[2vh] ml-[2vh] font-semibold",children:[e.jsxs("label",{htmlFor:"",children:["Name",e.jsxs("span",{children:[": ",(f=l==null?void 0:l.stdDetails)==null?void 0:f.full_name]})]}),e.jsxs("div",{className:"flex flex-wrap mt-[2vh] gap-x-7",children:[e.jsxs("label",{htmlFor:"",children:["Class: ",e.jsx("span",{children:(g=l==null?void 0:l.stdDetails)==null?void 0:g.class_name})]}),e.jsxs("label",{htmlFor:"",children:["Section: ",e.jsx("span",{children:(o=l==null?void 0:l.stdDetails)==null?void 0:o.section_name})]}),e.jsxs("label",{htmlFor:"",children:["Roll no: ",e.jsx("span",{children:(N=l==null?void 0:l.stdDetails)==null?void 0:N.roll_no})]})]})]}),e.jsx("h1",{className:"font-bold text-center mt-[2vh] uppercase text-3xl ",children:r==null?void 0:r.monthName}),e.jsxs("div",{className:"flex justify-between",children:[e.jsxs("div",{className:"flex w-[60%] gap-y-3 ml-[5vh] flex-col tracking-wider text-xl mt-[5vh] font-semibold",children:[(y=r==null?void 0:r.details)==null?void 0:y.map((i,S)=>e.jsx(e.Fragment,{children:e.jsx("label",{htmlFor:"",children:i==null?void 0:i.feeHeadName})})),e.jsx("label",{className:"flex",htmlFor:"",children:"Discount %"}),e.jsx("label",{className:"flex justify-end text-lg",htmlFor:"",children:"Total Payable"})]}),e.jsx("div",{className:"w-[20%] mt-[2vh] mr-[7vh]",children:e.jsxs("div",{className:"border-2 w-[10rem] h-auto  rounded-lg border-black",children:[e.jsx("h1",{className:"border-b-2  tracking-wider text-xl text-center font-semibold  border-black",children:"Amount"}),e.jsxs("div",{className:"h-[60%] tracking-wider text-lg flex text-center flex-col gap-y-1 border-b-2  border-black ",children:[(c=r==null?void 0:r.details)==null?void 0:c.map((i,S)=>e.jsx(e.Fragment,{children:e.jsx("h1",{children:i==null?void 0:i.receivedAmount})})),e.jsx("h1",{children:(r==null?void 0:r.discount)||0})]}),e.jsx("div",{className:"h-[40%] font-bold text-center tracking-wider text-xl flex flex-col gap-y-3   border-black ",children:r==null?void 0:r.netPay})]})})]}),e.jsxs("div",{className:"flex justify-between tracking-wider text-xl mt-[5vh] mb-[4vh] font-semibold",children:[e.jsxs("label",{className:"ml-[2vh]",htmlFor:"",children:["Date:"," ",e.jsx("span",{children:new Date().toLocaleDateString()})]}),e.jsx("label",{className:"mr-[3vh]",htmlFor:"",children:"Cashier"})]})]},d)})})};export{je as default};
