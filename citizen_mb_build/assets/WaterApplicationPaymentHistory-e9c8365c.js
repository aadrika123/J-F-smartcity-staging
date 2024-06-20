import{r,c as T,u as W,b as s,F as u,j as t,l as Y,a as j}from"./index-92e4a43a.js";import{h as B}from"./moment-a9aaa855.js";import{W as k}from"./WaterApiList-e6e52714.js";import E from"./CommonLoader-325ae215.js";import{A as I}from"./ApplicationButtons-a1c116a6.js";import"./BeatLoader-b3b9df9b.js";function K($){var c,o,l,n,x,m,h,p,y,N,g,f,b,v,A,w;const[_,i]=r.useState(!1),[e,P]=r.useState();r.useState(0),r.useState(!0),r.useState(0),r.useState();const{id:a}=T();console.log("param",a);const C=W(),{api_getPendingApplicationDetails:L,header:M}=k(),S=()=>{i(!0),j.post(`${L}`,{applicationId:a},M).then(function(d){console.log("view Water full details ...",d.data.data),P(d.data.data),i(!1)}).catch(function(d){console.log("==2 details by id error...",d),i(!1)})};return r.useEffect(()=>{S()},[a]),console.log("isLoading",e),s(u,{children:[_&&t(E,{}),t("div",{className:"mx-auto w-full",children:s("div",{className:"",children:[t(I,{active:"payment"}),s("div",{className:"",children:[t("h1",{className:"px-1 mt-3 text-center font-semibold text-gray-700",children:" Basic Details"}),t("p",{className:"border-b border-gray-700 mx-5"}),t("div",{className:" mt-2 border bg-white rounded-lg shadow-xl",children:s("div",{className:"space-y-4 pl-4 border border-gray-300 rounded m-2 p-2",children:[s("div",{className:"flex space-x-4 ",children:[s("div",{className:"flex-1",children:[t("div",{className:"font-semibold text-sm",children:(c=e==null?void 0:e.applicationDetails)!=null&&c.ulb_name?(o=e==null?void 0:e.applicationDetails)==null?void 0:o.ulb_name:"N/A"}),t("div",{className:"text-gray-600 text-xs",children:"ULB Name"})]}),s("div",{className:"flex-1",children:[t("div",{className:"font-bold text-sm",children:(l=e==null?void 0:e.applicationDetails)!=null&&l.application_no?(n=e==null?void 0:e.applicationDetails)==null?void 0:n.application_no:"N/A"}),t("div",{className:"text-gray-600 text-xs",children:"Application No."})]})]}),s("div",{className:"flex space-x-4 ",children:[s("div",{className:"flex-1",children:[t("div",{className:"font-semibold text-sm",children:(x=e==null?void 0:e.applicationDetails)!=null&&x.connection_type?(m=e==null?void 0:e.applicationDetails)==null?void 0:m.connection_type:"N/A"}),t("div",{className:"text-gray-600 text-xs",children:"Connection Type"})]}),s("div",{className:"flex-1",children:[t("div",{className:"font-semibold text-sm",children:(h=e==null?void 0:e.applicationDetails)!=null&&h.pipeline_type?(p=e==null?void 0:e.applicationDetails)==null?void 0:p.pipeline_type:"N/A"}),t("div",{className:"text-gray-600 text-xs",children:"Pipeline Type"})]})]}),s("div",{className:"flex space-x-4 ",children:[s("div",{className:"flex-1",children:[t("div",{className:"font-semibold text-sm",children:(y=e==null?void 0:e.applicationDetails)!=null&&y.apply_from?(N=e==null?void 0:e.applicationDetails)==null?void 0:N.apply_from:"N/A"}),t("div",{className:"text-gray-600 text-xs",children:"Apply From"})]}),s("div",{className:"flex-1",children:[t("div",{className:"font-semibold text-sm",children:(g=e==null?void 0:e.applicationDetails)!=null&&g.apply_date?B((f=e==null?void 0:e.applicationDetails)==null?void 0:f.apply_date,"YYYY-MM-DD").format("DD-MMM-yy"):"N/A"}),t("div",{className:"text-gray-600 text-xs",children:"Apply Date"})]})]})]})}),(e==null?void 0:e.calculation)&&s("div",{className:"mt-10",children:[s("h1",{className:"px-1 font-semibold font-serif text-gray-500",children:[t(Y,{className:"inline"}),"Application Payment Details"]}),s("table",{className:"min-w-full leading-normal mt-2 bg-white rounded-lg shadow-xl p-4",children:[t("thead",{className:"font-bold text-left text-sm border text-gray-800 bg-white",children:s("tr",{children:[t("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"#"}),t("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Category"}),t("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Conn Fee"}),t("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Penalty"}),t("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Total"}),t("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Action"})]})}),t("tbody",{className:"text-sm",children:t(u,{children:s("tr",{className:"bg-white shadow-xl border-b border-gray-200",children:[t("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:1}),t("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:(b=e==null?void 0:e.calculation)==null?void 0:b.chargeCatagory}),t("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:(v=e==null?void 0:e.calculation)==null?void 0:v.connectionFee}),t("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:(A=e==null?void 0:e.calculation)==null?void 0:A.penalty}),t("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:(w=e==null?void 0:e.calculation)==null?void 0:w.totalAmount}),t("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:t("button",{onClick:()=>C(`/water-application-payment/${a}`),type:"button",className:" px-5 py-2.5 border border-indigo-500 hover:text-indigo-100 font-medium text-xs leading-tight uppercase rounded shadow-xl bg-indigo-700 hover:bg-indigo-800 text-white hover:shadow-lg  active:shadow-lg transition duration-150 ease-in-out cursor-pointer",children:"Pay Now"})})]})})})]})]})]})]})}),t("div",{className:"w-full h-32"})]})}export{K as default};
