import{j as e}from"./mui-8e804a04.js";import{a as Oe,r as x,u as Ue,f as We}from"./router-87042356.js";import"./index-4e794517.js";import{W as Ee}from"./WaterApiList-e42e9d41.js";import{m as Ie,A as Le}from"./index-19682a6e.js";import{p as ye}from"./pdf-37897ad1.js";import{V as Re}from"./ViewUploadedDoc-f648d701.js";/* empty css              *//* empty css                */import{W as Ye}from"./WaterPaymentModal-a63326c4.js";import{W as Be}from"./WaterApplicationTopButtons-4f3b7c8c.js";import{h as ve}from"./moment-fbc5633a.js";import{S as h}from"./ShimmerEffectInline-66ba2926.js";import"./react-09dd1212.js";import"./axios-97164839.js";import"./reactIcons-6a3b6da1.js";import"./redux-4db06ad6.js";import"./i18next-e99b4042.js";import"./index.esm-2e3a7c1f.js";import"./RazorpayPaymentScreen-7e667066.js";import"./CitizenApplyApiList-70acccc5.js";import"./success-39308b33.js";import"./index.esm-e8e486ac.js";const hs=m=>{var y,v,g,w,_,A,P,u,M,V,C,S,T,k,O,U,W,E,I,L,R,Y,B,q,$,H,z,G,J,K,Q,X,Z,D,F,ee,se,te,de,xe,re,ce,ne,ae,le,oe,ie,he,me,Ne,je,pe,fe;const[qe,ge]=Oe.useState(!1),[s,we]=x.useState(),[_e,Ae]=x.useState(0),[Pe,ue]=x.useState(),[r,N]=x.useState(!1),[Me,j]=x.useState(!1),{api_waterViewPendingApplication:Ve,header:Ce}=Ee(),p=Ue(),{id:f}=We(),{setBreadCrumbData:Se}=x.useContext(Ie);x.useEffect(()=>{Se(["Water Dashboard","View Applications"])},[]),x.useEffect(()=>{m.openModal>0&&ge(!0)},[m.openModal]),console.log("waterapplicationFullData===>",(y=s==null?void 0:s.applicationDetails)==null?void 0:y.payment_status),x.useEffect(()=>{N(!0),Le.post(Ve,{applicationId:f},Ce).then(t=>{console.log("Application Full Data",t.data.data),we(t.data.data),N(!1)}).catch(t=>{console.log("ERROR : Pending Application Data",t),N(!1)})},[m.openModal]);const b=t=>{Ae(d=>d+1),ue(t)},Te=()=>{j(!0)},ke=(v=s==null?void 0:s.applicationDetails)==null?void 0:v.connection_type;return e.jsxs(e.Fragment,{children:[Me&&e.jsx(Ye,{category:ke,openPaymentModal:j,paymentData:s==null?void 0:s.documentDetails}),e.jsx(Re,{openDocviewModal:_e,documentUrl:Pe}),e.jsx(Be,{active:"application",title:"Water Application Details",applicationNo:(g=s==null?void 0:s.applicationDetails)==null?void 0:g.application_no}),e.jsx("div",{className:"grid grid-cols-12 mb-20",children:e.jsxs("div",{className:"rounded-md col-span-12",children:[((w=s==null?void 0:s.applicationDetails)==null?void 0:w.current_role_name)&&e.jsxs("p",{className:"text-center text-green-600 font-semibold",children:[" Your Application Submitted. Currently at ",(_=s==null?void 0:s.applicationDetails)==null?void 0:_.current_role_name]}),((A=s==null?void 0:s.applicationDetails)==null?void 0:A.scheduledDate)&&((P=s==null?void 0:s.applicationDetails)==null?void 0:P.scheduledTime)&&e.jsxs("p",{className:"text-center",children:["Scheduled Inspection Date ",e.jsxs("span",{className:"font-semibold",children:["  ",ve((u=s==null?void 0:s.applicationDetails)==null?void 0:u.scheduledDate,"YYYY-MM-DD").format("DD-MMM-yy")]})," Time : ",e.jsx("span",{className:"font-semibold",children:ve((M=s==null?void 0:s.applicationDetails)==null?void 0:M.scheduledTime,"h:mm:ss A").format("hh:mm A")})]}),e.jsxs("div",{className:"overflow-y-auto",children:[e.jsx("div",{className:"bg-white shadow-xl p-4 border border-gray-200",children:e.jsxs("div",{className:"",children:[e.jsxs("h1",{className:"px-1 font-semibold font-serif text-xs  text-[#37517e] ",children:[e.jsx("img",{src:"https://cdn-icons-png.flaticon.com/512/6592/6592963.png",alt:"pin",className:"w-5 inline"})," Basic Details"]}),r?e.jsx(h,{}):e.jsxs("div",{className:"mt-2 bg-white max-sm:flex max-sm:flex-col",children:[e.jsxs("div",{className:"flex space-x-10 pl-4 max-sm:flex-col max-sm:space-x-0 max-sm:space-y-2",children:[e.jsxs("div",{className:"flex-1 text-xs",children:[e.jsx("div",{className:"text-[#37517e]",children:"ULB Name"}),e.jsx("div",{className:"font-bold text-sm text-[#37517e]",children:(V=s==null?void 0:s.applicationDetails)!=null&&V.ulb_name?(C=s==null?void 0:s.applicationDetails)==null?void 0:C.ulb_name:"N/A"})]}),e.jsxs("div",{className:"flex-1 text-xs",children:[e.jsx("div",{className:"text-[#37517e]",children:"Ward No"}),e.jsx("div",{className:"font-semibold text-sm text-[#37517e]",children:(S=s==null?void 0:s.applicationDetails)!=null&&S.ward_name?(T=s==null?void 0:s.applicationDetails)==null?void 0:T.ward_name:"N/A"})]}),e.jsxs("div",{className:"flex-1 text-xs",children:[e.jsx("div",{className:"text-[#37517e]",children:"Type of Connection"}),e.jsx("div",{className:"font-semibold text-sm text-[#37517e]",children:(k=s==null?void 0:s.applicationDetails)!=null&&k.connection_type?(O=s==null?void 0:s.applicationDetails)==null?void 0:O.connection_type:"N/A"})]})]}),e.jsxs("div",{className:"flex space-x-10  pl-4 mt-4 max-sm:flex-col max-sm:space-x-0 max-sm:space-y-2",children:[e.jsxs("div",{className:"flex-1 text-xs",children:[e.jsx("div",{className:"text-[#37517e]",children:"Connection Through"}),e.jsx("div",{className:"font-bold text-sm text-[#37517e]",children:(U=s==null?void 0:s.applicationDetails)!=null&&U.connection_through?(W=s==null?void 0:s.applicationDetails)==null?void 0:W.connection_through:"N/A"})]}),e.jsxs("div",{className:"flex-1 text-xs",children:[e.jsx("div",{className:"text-[#37517e]",children:"Owner Type"}),e.jsx("div",{className:"font-bold text-sm text-[#37517e]",children:(E=s==null?void 0:s.applicationDetails)!=null&&E.owner_char_type?(I=s==null?void 0:s.applicationDetails)==null?void 0:I.owner_char_type:"N/A"})]}),e.jsxs("div",{className:"flex-1 text-xs",children:[e.jsx("div",{className:"text-[#37517e]",children:"Property Type"}),e.jsx("div",{className:"font-bold text-sm text-[#37517e]",children:(L=s==null?void 0:s.applicationDetails)!=null&&L.property_type?(R=s==null?void 0:s.applicationDetails)==null?void 0:R.property_type:"N/A"})]}),e.jsxs("div",{className:"flex-1 text-xs",children:[e.jsx("div",{className:"text-[#37517e]",children:"Category Type"}),e.jsx("div",{className:"font-semibold text-sm text-[#37517e]",children:(Y=s==null?void 0:s.applicationDetails)!=null&&Y.category?(B=s==null?void 0:s.applicationDetails)==null?void 0:B.category:"N/A"})]}),e.jsxs("div",{className:"flex-1 text-xs",children:[e.jsx("div",{className:"text-[#37517e]",children:"Pipeline Type"}),e.jsxs("div",{className:"font-semibold text-sm text-[#37517e]",children:[!((q=s==null?void 0:s.applicationDetails)!=null&&q.pipeline_type_id)&&"N/A",(($=s==null?void 0:s.applicationDetails)==null?void 0:$.pipeline_type_id)==1&&"New Pipeline",((H=s==null?void 0:s.applicationDetails)==null?void 0:H.pipeline_type_id)==2&&"Old Pipeline"]})]}),e.jsx("div",{className:"flex-1 text-xs"})]})]})]})}),e.jsxs("div",{className:"bg-white shadow-xl p-4 border border-gray-200 my-3",children:[e.jsxs("h1",{className:"px-1 font-semibold font-serif text-xs mt-2 text-[#37517e]",children:[e.jsx("img",{src:"https://cdn-icons-png.flaticon.com/512/609/609803.png",alt:"pin",className:"w-5 inline text-[#37517e]"})," Property Address & Details"]}),r?e.jsx(h,{}):e.jsxs("div",{className:"mt-2 ",children:[e.jsxs("div",{className:"flex space-x-10 pl-4 max-sm:flex-col max-sm:space-x-0 max-sm:space-y-2",children:[e.jsxs("div",{className:"flex-1 text-xs",children:[e.jsx("div",{className:"text-[#37517e]",children:"Ward No"}),e.jsx("div",{className:"font-bold text-sm text-[#37517e]",children:(z=s==null?void 0:s.applicationDetails)!=null&&z.ward_name?(G=s==null?void 0:s.applicationDetails)==null?void 0:G.ward_name:"N/A"})]}),e.jsxs("div",{className:"flex-1 text-xs",children:[e.jsx("div",{className:"text-[#37517e]",children:"Total Area(Sq.Ft.)"}),e.jsx("div",{className:"font-semibold text-sm text-[#37517e]",children:(J=s==null?void 0:s.applicationDetails)!=null&&J.area_sqft?(K=s==null?void 0:s.applicationDetails)==null?void 0:K.area_sqft:"N/A"})]}),e.jsxs("div",{className:"flex-1 text-xs",children:[e.jsx("div",{className:"text-[#37517e]",children:"Pin Code"}),e.jsx("div",{className:"font-bold text-sm text-[#37517e]",children:(Q=s==null?void 0:s.applicationDetails)!=null&&Q.pin?(X=s==null?void 0:s.applicationDetails)==null?void 0:X.pin:"N/A"})]}),((Z=s==null?void 0:s.applicationDetails)==null?void 0:Z.holding_no)&&e.jsxs("div",{className:"flex-1 text-xs",children:[e.jsx("div",{className:"text-[#37517e]",children:"Holding No"}),e.jsx("div",{className:"font-bold text-sm text-[#37517e]",children:(D=s==null?void 0:s.applicationDetails)!=null&&D.holding_no?(F=s==null?void 0:s.applicationDetails)==null?void 0:F.holding_no:"N/A"})]}),((ee=s==null?void 0:s.applicationDetails)==null?void 0:ee.saf_no)&&e.jsxs("div",{className:"flex-1 text-xs",children:[e.jsx("div",{className:"text-[#37517e]",children:"SAF No"}),e.jsx("div",{className:"font-bold text-sm text-[#37517e]",children:(se=s==null?void 0:s.applicationDetails)!=null&&se.saf_no?(te=s==null?void 0:s.applicationDetails)==null?void 0:te.saf_no:"N/A"})]})]}),e.jsx("div",{}),e.jsxs("div",{className:"col-span-4 grid grid-cols-5 justify-center items-center",children:[e.jsx("div",{className:"col-span-2 flex justify-center items-center w-full h-[1px] bg-gray-400"}),e.jsx("div",{className:"flex justify-center items-center",children:e.jsxs("label",{className:"form-check-label text-gray-800",children:[" ",e.jsx("small",{className:"block mt-1 text-xs text-gray-400 inline md:px-4 font-mono text-center",children:"Complete Address"})]})}),e.jsx("div",{className:"col-span-2 flex justify-center items-center w-full h-[1px] bg-gray-400"})]}),e.jsx("div",{className:"px-4",children:e.jsx("div",{className:"flex text-xs",children:e.jsxs("div",{className:"flex-1 text-xs",children:[e.jsx("div",{className:"text-[#37517e]",children:"Address"}),e.jsx("div",{className:"font-bold text-sm text-[#37517e]",children:(de=s==null?void 0:s.applicationDetails)!=null&&de.address?(xe=s==null?void 0:s.applicationDetails)==null?void 0:xe.address:"N/A"})]})})})]})]}),((re=s==null?void 0:s.applicationDetails)==null?void 0:re.payment_status)==0&&e.jsxs("div",{className:"bg-white shadow-xl p-4 border border-gray-200",children:[e.jsxs("h1",{className:"px-1 font-semibold font-serif text-xs mt-2 text-[#37517e]",children:[e.jsx("img",{src:"https://cdn-icons-png.flaticon.com/512/8948/8948774.png",alt:"pin",className:"w-5 inline text-[#37517e]"})," Payment Details"]}),r?e.jsx(h,{}):((ce=s==null?void 0:s.documentDetails)==null?void 0:ce.doc_upload_status)==!1?e.jsx("div",{className:"text-center text-indigo-600",children:"Payment Pending :- Please Upload Document First"}):(ae=(ne=s==null?void 0:s.documentDetails)==null?void 0:ne.connectionCharges)!=null&&ae.paid_status?e.jsxs("div",{className:"mt-2",children:[e.jsxs("div",{className:"flex space-x-10 pl-4 ",children:[e.jsx("div",{className:"text-xs",children:e.jsx("div",{className:"text-[#37517e]",children:"Sl."})}),e.jsx("div",{className:"flex-1 text-xs",children:e.jsx("div",{className:"text-[#37517e]",children:"Trans No"})}),e.jsx("div",{className:"flex-1 text-xs",children:e.jsx("div",{className:"text-[#37517e]",children:"Amount"})}),e.jsx("div",{className:"flex-1 text-xs",children:e.jsx("div",{className:"text-[#37517e]",children:"Payment Mode"})}),e.jsx("div",{className:" text-xs",children:e.jsx("div",{className:"text-[#37517e]",children:"Status"})}),e.jsx("div",{className:"flex-1 text-xs",children:e.jsx("div",{className:"text-[#37517e]",children:"Payment Data Time"})}),e.jsx("div",{className:"flex-1 text-xs",children:e.jsx("div",{className:"text-[#37517e]",children:"Action"})})]}),((le=s==null?void 0:s.waterTransDetail)==null?void 0:le.length)>0&&((oe=s==null?void 0:s.waterTransDetail)==null?void 0:oe.map((t,d)=>e.jsxs("div",{className:"flex space-x-10 pl-4 my-2 border-b border-y-gray-200",children:[e.jsx("div",{className:"text-xs",children:e.jsxs("div",{className:"font-semibold text-sm text-[#37517e]",children:[d+1,"."]})}),e.jsx("div",{className:"flex-1 text-xs",children:e.jsx("div",{className:"font-semibold text-sm text-[#37517e]",children:(t==null?void 0:t.tran_no)||"N/A"})}),e.jsx("div",{className:"flex-1 text-xs",children:e.jsx("div",{className:"font-bold text-sm text-[#37517e]",children:(t==null?void 0:t.amount)||"N/A"})}),e.jsx("div",{className:"flex-1 text-xs",children:e.jsx("div",{className:"font-semibold text-sm text-[#37517e]",children:(t==null?void 0:t.payment_mode)||"N/A"})}),e.jsx("div",{className:"text-xs",children:e.jsxs("div",{className:"font-semibold text-sm text-[#37517e]",children:[(t==null?void 0:t.verify_status)==1&&"Paid",(t==null?void 0:t.verify_status)==2&&"Processing"]})}),e.jsx("div",{className:"flex-1 text-xs",children:e.jsx("div",{className:"font-semibold text-xs text-[#37517e]",children:(t==null?void 0:t.created_at)||"N/A"})}),e.jsx("div",{className:"flex-1 text-xs",children:e.jsx("div",{className:"font-semibold text-sm text-[#37517e]",children:e.jsx("button",{className:"hover:border-b-2 border-blue-500 hover:text-blue-500",onClick:()=>p(`/waterConnReceipt/${t==null?void 0:t.tran_no}`),children:"Print Receipt"})})})]},d)))]}):e.jsxs("div",{children:[e.jsx("div",{className:"text-center",children:e.jsx("p",{children:"Please Make Payment"})}),e.jsx("div",{className:"flex justify-center",children:e.jsx("button",{onClick:()=>Te(),className:"px-2 py-1 bg-indigo-600 text-sm text-white",children:"Pay Now"})})]})]}),((ie=s==null?void 0:s.documentDetails)==null?void 0:ie.doc_upload_status)==!1&&e.jsxs("div",{className:"bg-white shadow-xl p-4 border border-gray-200 my-5",children:[e.jsxs("h1",{className:"px-1 font-semibold font-serif text-xs text-[#37517e]",children:[e.jsx("img",{src:"https://cdn-icons-png.flaticon.com/512/2029/2029957.png",alt:"pin",className:"w-5 inline text-[#37517e]"})," Document Details"]}),r?e.jsx(h,{}):(he=s==null?void 0:s.documentDetails)!=null&&he.doc_upload_status?e.jsxs("table",{className:"min-w-full leading-normal mt-2 bg-white",children:[e.jsx("thead",{className:"font-bold text-left text-sm border text-[#37517e] bg-sky-100",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-xs uppercase text-left",children:"#"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-xs uppercase text-left",children:"Document Name"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-xs uppercase text-left",children:"Status"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-xs uppercase text-left",children:"Preview"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-xs uppercase text-left",children:"View "})]})}),e.jsxs("tbody",{className:"text-sm",children:[e.jsx(e.Fragment,{children:(Ne=(me=s==null?void 0:s.documentDetails)==null?void 0:me.documentsList)==null?void 0:Ne.map((t,d)=>{var c,n,a,l,o;return e.jsxs("tr",{className:"bg-white shadow-lg border-b border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-sm text-left text-[#37517e]",children:d+1}),e.jsx("td",{className:"px-2 py-2 text-sm text-left text-[#37517e]",children:t!=null&&t.docName?t==null?void 0:t.docName:"N/A"}),e.jsx("td",{className:"px-2 py-2 text-sm text-left text-[#37517e]",children:(t==null?void 0:t.uploadDoc)==""?e.jsx("p",{className:"text-red-400 font-semibold",children:"NotUpload"}):e.jsx("p",{className:"text-green-400 font-semibold",children:"Uploaded"})}),e.jsx("td",{className:"px-2 py-2 text-sm text-left text-[#37517e]",children:((n=(c=t==null?void 0:t.uploadDoc)==null?void 0:c.doc_path)==null?void 0:n.split(".").pop())=="pdf"?e.jsx("img",{className:"h-10 w-10 border rounded shadow-md",src:ye}):(a=t==null?void 0:t.uploadDoc)!=null&&a.doc_path?e.jsx("img",{className:"h-10 w-10 border rounded shadow-md",src:(l=t==null?void 0:t.uploadDoc)==null?void 0:l.doc_path}):"N/A"}),e.jsx("td",{className:"px-2 py-2 text-sm text-left text-[#37517e]",children:(o=t==null?void 0:t.uploadDoc)!=null&&o.doc_path?e.jsx("button",{onClick:()=>{var i,be;return b((i=t==null?void 0:t.uploadDoc)==null?void 0:i.doc_path,(be=t==null?void 0:t.uploadDoc)==null?void 0:be.docName)},className:"bg-indigo-600 text-white px-2 py-1 rounded",children:"View"}):e.jsx("button",{disabled:!0,className:"bg-indigo-200 text-white px-2 py-1 rounded",children:"View"})})]})})}),e.jsx(e.Fragment,{children:(pe=(je=s==null?void 0:s.documentDetails)==null?void 0:je.ownersDocList)==null?void 0:pe.map((t,d)=>{var c,n,a,l,o;return e.jsxs("tr",{className:"bg-white shadow-lg border-b border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-sm text-left text-[#37517e]",children:d+1}),e.jsx("td",{className:"px-2 py-2 text-sm text-left text-[#37517e]",children:t!=null&&t.docName?(t==null?void 0:t.ownerName)+" ( "+(t==null?void 0:t.docName)+")":"N/A"}),e.jsx("td",{className:"px-2 py-2 text-sm text-left text-[#37517e]",children:(t==null?void 0:t.uploadDoc)==""?e.jsx("p",{className:"text-red-400 font-semibold",children:"NotUpload"}):e.jsx("p",{className:"text-green-400 font-semibold",children:"Uploaded"})}),e.jsx("td",{className:"px-2 py-2 text-sm text-left text-[#37517e]",children:((n=(c=t==null?void 0:t.uploadDoc)==null?void 0:c.doc_path)==null?void 0:n.split(".").pop())=="pdf"?e.jsx("img",{className:"h-10 w-10 border rounded shadow-md",src:ye}):(a=t==null?void 0:t.uploadDoc)!=null&&a.doc_path?e.jsx("img",{className:"h-10 w-10 border rounded shadow-md",src:(l=t==null?void 0:t.uploadDoc)==null?void 0:l.doc_path}):"N/A"}),e.jsx("td",{className:"px-2 py-2 text-sm text-left text-[#37517e]",children:(o=t==null?void 0:t.uploadDoc)!=null&&o.doc_path?e.jsx("button",{onClick:()=>{var i;return b((i=t==null?void 0:t.uploadDoc)==null?void 0:i.doc_path)},className:"bg-indigo-600 text-white px-2 py-1 rounded",children:"View"}):e.jsx("button",{disabled:!0,className:"bg-indigo-200 text-white px-2 py-1 rounded",children:"View"})})]})})})]})]}):e.jsxs("div",{children:[e.jsx("div",{className:"text-center",children:e.jsx("p",{children:"Please Upload Document"})}),e.jsx("div",{className:"flex justify-center",children:e.jsx("button",{onClick:()=>p(`/water-doc-upload/${f}`),className:"px-2 py-1 bg-indigo-600 text-sm text-white",children:"Upload Document"})})]})]}),e.jsxs("div",{className:"bg-white shadow-xl p-4 border border-gray-200 my-5",children:[e.jsxs("h1",{className:"px-1 font-semibold font-serif text-xs text-[#37517e]",children:[e.jsx("img",{src:"https://cdn-icons-png.flaticon.com/512/2029/2029957.png",alt:"pin",className:"w-5 inline text-[#37517e]"})," Owner Details"]}),r?e.jsx(h,{}):e.jsx("div",{className:"overflow-auto",children:e.jsxs("table",{className:"min-w-full leading-normal mt-2 bg-white",children:[e.jsx("thead",{className:"font-bold text-left text-sm border text-[#37517e] bg-sky-100",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-xs uppercase text-left",children:"#"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-xs uppercase text-left",children:"Owner Name"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-xs uppercase text-left",children:"Father Name"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-xs uppercase text-left",children:"Mobile No."}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-xs uppercase text-left",children:"Email "})]})}),e.jsx("tbody",{className:"text-sm",children:e.jsx(e.Fragment,{children:(fe=s==null?void 0:s.ownerDetails)==null?void 0:fe.map((t,d)=>e.jsxs("tr",{className:"bg-white shadow-lg border-b border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-sm text-left text-[#37517e]",children:d+1}),e.jsx("td",{className:"px-2 py-2 text-sm text-left text-[#37517e]",children:t!=null&&t.applicant_name?t==null?void 0:t.applicant_name:"N/A"}),e.jsx("td",{className:"px-2 py-2 text-sm text-left text-[#37517e]",children:t!=null&&t.guardian_name?t==null?void 0:t.guardian_name:"N/A"}),e.jsx("td",{className:"px-2 py-2 text-sm text-left text-[#37517e]",children:t!=null&&t.mobile_no?t==null?void 0:t.mobile_no:"N/A"}),e.jsx("td",{className:"px-2 py-2 text-sm text-left text-[#37517e]",children:t!=null&&t.email?t==null?void 0:t.email:"N/A"})]}))})})]})})]})]})]})})]})};export{hs as default};
