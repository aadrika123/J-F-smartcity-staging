import{a8 as W,j as t,v as It,r as o,s as Vt,c as Tt,a as S,b as Mt,aK as Pt,O as Bt,B as Ot,D as qt,L as Ut,P as $t,A as b,e as v,Q as n,n as D,S as Rt,w as zt,x as Yt,l as Jt,g as Kt}from"./index-de640f8f.js";const Qt={overlay:{backgroundColor:"rgba(0,0,0,0.5)"},content:{top:"50%",left:"50%",right:"auto",bottom:"auto",backgroundColor:"transparent",border:"none",marginRight:"-50%",transform:"translate(-50%, -50%)"}};W.setAppElement("#root");function Gt(m){return t.jsx(W,{isOpen:m.isModelOpen,style:Qt,contentLabel:"Example Modal",children:t.jsx("div",{className:"h-[85vh] rounded-lg   flex items-center justify-center",children:t.jsxs("div",{className:" bg-white lg:w-[900px]  rounded-lg shadow ",children:[t.jsxs("div",{className:"flex items-center justify-between p-4 border-b rounded-t ",children:[t.jsx("h3",{className:"text-xl font-semibold text-gray-900 ",children:"Instructions"}),t.jsx("button",{onClick:()=>m.setIsModelOpen(!1),type:"button",className:"text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center  ","data-modal-hide":"staticModal",children:t.jsx("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})})})]}),t.jsxs("div",{className:"p-6 space-y-6",children:[t.jsxs("h1",{className:"text-base leading-relaxed text-gray-500  ",children:[t.jsx("h1",{className:"font-bold",children:" Step 1:Upload Data Through Form "}),t.jsx("p",{className:"text-sm leading-relaxed text-gray-500 ",children:"• Fill the data"}),t.jsx("p",{className:"text-sm leading-relaxed text-gray-500 ",children:"• Check the Validation"}),t.jsx("p",{className:"text-sm leading-relaxed text-gray-500 ",children:"• Click on the save button"})]}),t.jsxs("h1",{className:"text-base leading-relaxed text-gray-500  ",children:[t.jsx("h1",{className:"font-bold",children:" Step 1: Upload Data Through CSV File"}),t.jsx("p",{className:"text-sm leading-relaxed text-gray-500 ",children:"• If you want to upload CSV file"}),t.jsx("p",{className:"text-sm leading-relaxed text-gray-500 ",children:"• Download the CSV file first in instruction page"}),t.jsx("p",{className:"text-sm leading-relaxed text-gray-500 ",children:"• Fill the form according to the header"}),t.jsx("p",{className:"text-sm leading-relaxed text-gray-500 ",children:"• save the file"}),t.jsx("p",{className:"text-sm leading-relaxed text-gray-500 ",children:"• Upload the File"})]})]}),t.jsxs("div",{className:"flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b  justify-between",children:[t.jsxs("div",{className:"flex items-center justify-center text-green-600 ",children:[t.jsx(It,{className:"text-xl font-semibold "}),"  ",t.jsx("a",{href:"/holiday-csv.csv",target:"_blank",rel:"noreferrer",children:t.jsx("h1",{className:"text-sm font-semibold underline",children:"Download CSV"})})]}),t.jsx("button",{onClick:()=>m.setIsModelOpen(!1),type:"button",className:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center   ",children:"Continue To Add Holiday"})]})]})})})}const ee=()=>{const[m,C]=o.useState([]),[X,Z]=o.useState([]),[tt,_]=o.useState(!0),[E,Wt]=o.useState(!0),[et,at]=o.useState(!1),[lt,c]=o.useState(!1),[Xt,st]=o.useState(!1);o.useState(null);const[g,p]=o.useState(null),[it,w]=o.useState(!1),[F,dt]=o.useState(),[j,H]=o.useState(1),[N,ot]=o.useState(10),[ct,A]=o.useState(),[k,L]=o.useState(),[rt,nt]=o.useState(),[h,I]=o.useState(""),[ut,mt]=o.useState(),{api_getHolidayByID:ht,api_getHolidayData:xt,api_postHolidayData:ft,api_editHolidayData:gt,api_deleteHolidayData:yt,api_searchHolidayData:jt,api_getActiveHolidayData:Zt,api_postCSVfile:bt}=Kt();Vt("Holiday Master");const y=[{id:1,fee_head:10,fee_head_type:10,desc:"hello"},{id:2,fee_head:10,fee_head_type:10,desc:"hello"},{id:3,fee_head:10,fee_head_type:10,desc:"hello"},{id:4,fee_head:10,fee_head_type:10,desc:"hello"},{id:5,fee_head:10,fee_head_type:10,desc:"hello"}],vt=Tt({holiday:S().required("Holiday is required feild"),holidayStartDate:S().required("Date is required feild"),holidayEndDate:S().required("Date is required feild")}),d=Mt({enableReinitialize:!0,initialValues:{holiday:"",holidayStartDate:"",holidayEndDate:"",description:""},onSubmit:(e,{resetForm:l})=>{Ft(e),l()},validationSchema:vt}),f=e=>{console.log(e);let l,s;e===void 0?(s={perPage:N,page:j},l=xt):(s={search:e},l=jt),c(!0),b.post(l,s,v()).then(function(a){var i,r,u,x,V,T,M,P,B,O,q,U,$,R,z,Y,J,K,Q,G;((i=a==null?void 0:a.data)==null?void 0:i.status)===!0?((u=(r=a==null?void 0:a.data)==null?void 0:r.data)==null?void 0:u.total)===0||((V=(x=a==null?void 0:a.data)==null?void 0:x.data)==null?void 0:V.data.length)===0?(n.error("Data not Found"),C((M=(T=a==null?void 0:a.data)==null?void 0:T.data)==null?void 0:M.data),A((B=(P=a==null?void 0:a.data)==null?void 0:P.data)==null?void 0:B.last_page),L((q=(O=a==null?void 0:a.data)==null?void 0:O.data)==null?void 0:q.total)):(console.log("Misc. Category data",($=(U=a==null?void 0:a.data)==null?void 0:U.data)==null?void 0:$.data),C((z=(R=a==null?void 0:a.data)==null?void 0:R.data)==null?void 0:z.data),A((J=(Y=a==null?void 0:a.data)==null?void 0:Y.data)==null?void 0:J.last_page),L((Q=(K=a==null?void 0:a.data)==null?void 0:K.data)==null?void 0:Q.total)):n.error(`${(G=a==null?void 0:a.data)==null?void 0:G.message}`),c(!1)}).catch(function(a){n.warning("Error occured while fetching data."),c(!1)})};console.log(k);const Nt=m;console.log(m);const pt=e=>{ot(parseInt(e))},wt=e=>{H(e-1)},St=e=>{H(e+1)};o.useEffect(()=>{f()},[j]),o.useEffect(()=>{f()},[N]);const Dt=[{Header:"Sl No.",Cell:({cell:e})=>t.jsxs("span",{children:[" ",(j-1)*N+e.row.index+1," "]})},{Header:"Holiday",accessor:"holiday"},{Header:"Start Date",accessor:"holiday_start_date"},{Header:"End Date",accessor:"holiday_end_date"},{Header:"Description",accessor:"description"},{Header:"Created Date & Time",Cell:({cell:e})=>{var l,s;return t.jsxs("span",{children:[D((l=e.row.original)==null?void 0:l.date)," |"," ",D((s=e.row.original)==null?void 0:s.time)]})}},{Header:"Status",Cell:({cell:e})=>{var l,s;return t.jsx("span",{className:((l=e.row.original)==null?void 0:l.status)==="Active"?"text-[green]":"text-[red]",children:D((s=e.row.original)==null?void 0:s.status)})}},{Header:"Action",Cell:({cell:e})=>{var l,s;return t.jsxs("div",{className:"flex",children:[t.jsx("button",{onClick:()=>{Rt.fire({icon:"warning",title:"Are you sure?",text:"You want to update it!",showCancelButton:!0,confirmButtonText:"Yes, update it!",cancelButtonText:"No, cancel!"}).then(a=>{var i,r;a.value&&(p((i=e.row.original)==null?void 0:i.id),Ct((r=e.row.original)==null?void 0:r.id))})},className:"edit-button-master",children:t.jsx("a",{title:"edit",children:t.jsx(zt,{size:23})})}),t.jsx("button",{onClick:()=>{var a,i;nt((a=e.row.original)==null?void 0:a.id),dt(((i=e.row.original)==null?void 0:i.status)==="Active"?"deactive":"active"),w(!0)},className:`${((l=e.row.original)==null?void 0:l.status)=="Active"?"deactivate-button-master":"deactivate-second-button-master"}`,children:((s=e.row.original)==null?void 0:s.status)==="Active"?"Deactivate":"Activate"})]})}}];console.log(j),o.useEffect(()=>{console.log("formikvalue",d.values)},[d.values]),o.useEffect(()=>{const e=m.map(l=>{const{id:s,...a}=l;return a});console.log(e),Z(e)},[m]);const Ct=e=>{c(!0);let l={id:e};b.post(ht,l,v()).then(function(s){var a,i,r,u;console.log("fetch edit data response..",(a=s==null?void 0:s.data)==null?void 0:a.data),(i=s==null?void 0:s.data)!=null&&i.status?_t((r=s==null?void 0:s.data)==null?void 0:r.data):n.error(`${(u=s==null?void 0:s.data)==null?void 0:u.message}`),c(!1)}).catch(function(s){console.log("= edit data error...",s),st(!0),c(!1)})},_t=e=>{console.log("existing property details in prop address...",e),d.setFieldValue("holiday",e==null?void 0:e.holiday),d.setFieldValue("holidayStartDate",e==null?void 0:e.holiday_start_date),d.setFieldValue("holidayEndDate",e==null?void 0:e.holiday_end_date),d.setFieldValue("description",e==null?void 0:e.description)},Et=e=>{console.log(e),c(!0);const l=new FormData;l.append("holidayDocs",e);let s,a;for(const i of l.keys())console.log(i);s=bt,a=l,b.post(s,a,v()).then(function(i){var r,u,x;console.log("holiday master..",(r=i==null?void 0:i.data)==null?void 0:r.data),((u=i==null?void 0:i.data)==null?void 0:u.status)===!0?(n.success(g!==null?"Data Updated Successfully!":"Data Added Successfully"),f(),p(null),I("")):n.error(`${(x=i==null?void 0:i.data)==null?void 0:x.message}`),c(!1)}).catch(function(i){console.log("==2 error list...",i),n.warning("Error occured in submitting form."),c(!1)})},Ft=e=>{console.log(e);const l=new FormData;l.append("holiday",e.holiday),l.append("holidayStartDate",e.holidayStartDate),l.append("holidayEndDate",e.holidayEndDate),l.append("description",e.description),c(!0);let s,a=l;g!==null?(s=gt,a=l,l.append("id",g)):g==null&&(s=ft,a=l),b.post(s,a,v()).then(function(i){var r,u,x;console.log("bank master..",(r=i==null?void 0:i.data)==null?void 0:r.data),((u=i==null?void 0:i.data)==null?void 0:u.status)===!0?(n.success(g!==null?"Data Updated Successfully!":"Data Added Successfully"),f(),p(null)):n.error(`${(x=i==null?void 0:i.data)==null?void 0:x.message}`),c(!1)}).catch(function(i){console.log("==2 error list...",i),n.warning("Error occured in submitting form."),c(!1)})},Ht=()=>{c(!0),w(!1);let e={id:rt,status:F};b.post(yt,e,v()).then(function(l){var s,a;((s=l==null?void 0:l.data)==null?void 0:s.status)===!0?(f(),(e==null?void 0:e.status)=="active"?n.success("Activated Successfully"):n.error("Deactivated Successfully")):n.error(`${(a=l==null?void 0:l.data)==null?void 0:a.message}`),c(!1)}).catch(function(l){n.warning("Error occured in deletion."),c(!1)})};o.useEffect(()=>{f()},[]);const At=e=>{let l=e.target.name,s=e.target.value;l=="holiday"&&d.setFieldValue("holiday",allowCharacterInput(s,d.values.holiday,40)),l=="description"&&d.setFieldValue("description",Yt(s,d.values.description,100))},kt=[{title:"Holiday",feild:"holiday"},{title:"Start Date",feild:"holiday_start_date"},{title:"End Date",feild:"holiday_end_date"},{title:"Description",feild:"description"},{title:"Created Date  ",feild:"date"},{title:"Created Time ",feild:"time"},{title:"Status",feild:"status"}],Lt=()=>{const e=new Jt;e.text("Holiday Details",10,10),e.autoTable({theme:"grid",columns:kt.map(l=>({...l,dataKey:l.feild})),body:m}),e.save("Holiday.pdf")};return console.log(d.values.holidayStartDate),t.jsxs(t.Fragment,{children:[t.jsx(Gt,{setIsModelOpen:_,isModelOpen:tt}),t.jsxs("div",{className:"w-full h-[76vh]  overflow-auto ",children:[t.jsxs("div",{className:"flex items-start justify-start flex-col mt-5 ml-5 ",children:[t.jsx("h1",{className:"text-4xl font-semibold text-gray-700",children:"Holiday Form"}),t.jsx("h1",{className:"common-header-smalltext",children:"Unlock Your Potential. Join Our Journey Of Education And Excellence"})]}),t.jsx("div",{className:" mt-1 ml-3 mr-3 ",children:t.jsx("div",{className:"flex h-auto  items-start justify-start w-full",children:t.jsxs("div",{className:"grid grid-cols-12 w-full  ml-3 mr-3 ",children:[t.jsx("div",{className:"col-span-12  lg:col-span-4 w-full flex justify-center",children:t.jsxs("div",{className:"block col-span-12  lg:col-span-4 w-full ",children:[t.jsxs("div",{className:"mt-8 border border-teal-300 w-full  rounded-md relative",children:[t.jsxs("div",{className:"bg-white px-3 ",children:[" ",t.jsx("h1",{className:" absolute text-2xl bg-white flex font-semibold  -mt-4 text-[#0F766E] ml-9",children:"Add"})]}),t.jsxs("div",{className:"w-full mb-6 mt-[14vh] pb-10 px-2  ",children:[t.jsxs("form",{onSubmit:d.handleSubmit,onChange:At,children:[t.jsxs("div",{className:"grid grid-cols-12 mt-1 w-full",children:[t.jsx("div",{className:" col-span-12 lg:col-span-4 w-full",children:t.jsxs("label",{className:" flex items-start justify-start ml-2 text-teal-900 text-md w-full font-bold",htmlFor:"",children:["Holiday",t.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600  ",children:"*"})]})}),t.jsxs("div",{className:"col-span-12 lg:col-span-8 w-full",children:[t.jsx("input",{...d.getFieldProps("holiday"),className:"common-input-css",type:"text",placeholder:"Enter holiday"}),t.jsx("br",{}),t.jsx("span",{className:"text-red-600  text-xs",children:d.touched.holiday&&d.errors.holiday?d.errors.holiday:null})]})]}),t.jsxs("div",{className:"grid grid-cols-12 mt-2 w-full",children:[t.jsx("div",{className:" col-span-12 lg:col-span-4 w-full",children:t.jsxs("label",{className:" flex items-start justify-start ml-2 text-teal-900 text-md w-full font-bold",htmlFor:"",children:["Start date",t.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600  ",children:"*"})]})}),t.jsxs("div",{className:"col-span-12 lg:col-span-8 w-full",children:[t.jsx("input",{...d.getFieldProps("holidayStartDate"),className:"common-input-css",type:"date",min:new Date().toISOString().split("T")[0]}),t.jsx("br",{}),t.jsx("span",{className:"text-red-600  text-xs",children:d.touched.holidayStartDate&&d.errors.holidayStartDate?d.errors.holidayStartDate:null})]})]}),t.jsxs("div",{className:"grid grid-cols-12 mt-2 w-full",children:[t.jsx("div",{className:" col-span-12 lg:col-span-4 w-full",children:t.jsxs("label",{className:" flex items-start justify-start ml-2 text-teal-900 text-md w-full font-bold",htmlFor:"",children:["End date",t.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600  ",children:"*"})]})}),t.jsxs("div",{className:"col-span-12 lg:col-span-8 w-full",children:[t.jsx("input",{...d.getFieldProps("holidayEndDate"),className:"common-input-css",type:"date",min:d.values.holidayStartDate}),t.jsx("br",{}),t.jsx("span",{className:"text-red-600  text-xs",children:d.touched.holidayEndDate&&d.errors.holidayEndDate?d.errors.holidayEndDate:null})]})]}),t.jsxs("div",{className:"grid grid-cols-12 mt-2 w-full",children:[t.jsx("div",{className:" col-span-12 lg:col-span-4 w-full",children:t.jsxs("label",{className:" flex items-start justify-start ml-2 text-teal-900 text-md w-full font-bold",htmlFor:"",children:["Description",t.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600  ",children:"*"})]})}),t.jsxs("div",{className:"col-span-12 lg:col-span-8 w-full",children:[t.jsx("input",{...d.getFieldProps("description"),className:"common-input-css",type:"text",placeholder:"Enter description"}),t.jsx("br",{}),t.jsx("span",{className:"text-red-600  text-xs",children:d.touched.description&&d.errors.description?d.errors.description:null})]})]}),t.jsx("div",{className:"mt-7",children:t.jsx("button",{type:"submit",className:"save-button",children:g!==null?"Update":"Save"})})]}),t.jsx("div",{className:"mandatorytext",children:t.jsx("h1",{children:"Note : (*) is a mandatory field "})})]})]}),t.jsxs("div",{className:"mt-4 border border-teal-300 w-full  rounded-md relative",children:[t.jsx("span",{onClick:()=>_(!0),className:"w-full text-right flex items-start justify-end my-2 mr-4",children:t.jsx("a",{href:"#",title:"View instruction",children:t.jsx(Pt,{size:30})})}),t.jsxs("label",{htmlFor:"holidayDocs",className:"  mt-4 inline-flex items-center px-4 py-2 bg-white border border-teal-600 rounded-l font-semibold cursor-pointer text-sm text-black tracking-widest  active:bg-white focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition ",children:[" ","Choose Holiday CSV File"]}),t.jsxs("div",{children:[t.jsx("input",{type:"file",name:"holidayDocs",accept:".csv",id:"holidayDocs",className:"sr-only inline-flex items-center px-4 py-2 bg-white border  active:bg-white focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition ",value:h[0],onChange:e=>{I(e.target.files[0])}}),h?h==null?void 0:h.name:"No file selected"]}),t.jsx("button",{className:h?"next-btn":"next-disable-btn",disabled:h==="",onClick:()=>Et(h),children:"Upload"})]})]})}),t.jsx("div",{className:" col-span-12 md:col-span-12 lg:col-span-8 w-full lg:ml-2 ",children:t.jsxs("div",{className:"mt-8 border border-teal-300  rounded-md relative",children:[t.jsxs("div",{className:"bg-white px-3 ",children:[" ",t.jsx("h1",{className:" absolute text-2xl bg-white flex font-semibold  -mt-4 text-gray-500 ml-9",children:"View List"})]}),t.jsx("div",{className:"mt-5  ",children:t.jsx(Bt,{generatePdf:Lt,enable:et,setenable:at,csvdata:X,readymadeListData:m,fetchMasterList:f,setSearchTableData:mt,searchTableData:ut})}),t.jsx("div",{className:"-mt-5 main-div",children:t.jsxs("div",{className:" rounded-md h-[80vh] 2xl:p-6 p-4 overflow-y-auto",children:[lt&&t.jsx(Ot,{}),it&&t.jsx(qt,{setdeleteStatus:w,deleteItem:Ht,deactivate:F}),t.jsxs("div",{className:"h-[57vh] overflow-auto max-[1004px]:h-full",children:[E&&(y==null?void 0:y.length)!=0&&t.jsx(Ut,{filter:!1,exportStatus:!1,assessmentType:!1,columns:Dt,dataList:Nt,pageNumber:k}),t.jsx($t,{ChangePage:pt,number:j,lastPage:ct,nextPage:St,prevPage:wt,postperpage:N})]}),E&&(y==null?void 0:y.length)==0&&t.jsx("div",{className:"data-not-found",children:"Data Not Found"})]})})]})})]})})})]})]})};export{ee as default};
