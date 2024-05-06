import{l as a,x as se,v as re,m as te,H as de,W as ne,y as ae,O as oe,z as q,B as ce,q as g,k as t,o as f,j as s,D as le,M as v,h as l,Q as me}from"./index-7349853a.js";import{W as ie}from"./WaterTopButtons-df52f055.js";function Ne(xe){var A,R,I,U,S,C,E,P,k,T,L,W;const[B,N]=a.useState(!1),[e,V]=a.useState(),[d,p]=a.useState(),[$,j]=a.useState(),[G,z]=a.useState(0),[c,b]=a.useState(),[M,x]=a.useState(!1),[w,he]=a.useState(!1),[_,y]=a.useState(!1),{notify:u}=a.useContext(se),{id:m}=re(),H=te();de("Water Consumer Demand Details");const{api_waterApprovedApplicationDetails:O,api_calculateMeterFixedReading:D,api_waterListDemand:Q,api_waterGenerateDemand:J,header:h}=ne(),K=r=>{if((e==null?void 0:e.connectionId)==3&&r.demandUpto=="")return y("Please select demand up date");if((e==null?void 0:e.connectionId)==1&&(r.demandUpto==""||r.meterReading==""||r.meterImage==""))return y("Field(s) Require");let o=new FormData;o.append("consumerId",m),o.append("demandUpto",r.demandUpto),o.append("finalRading",r.meterReading||(c==null?void 0:c.finalMeterReading)),o.append("document",$),g.post(J,o,h).then(i=>{i.data.status?(z(ee=>ee+1),u("Demand Generated","success")):(u("Error in Demand Generated","error"),x(i.data.message))}).catch(i=>{u("Something went wrong!","error"),x(i.response.data)})};ae().shape({meterReading:oe().required("Enter Meter Reading").min(((A=d==null?void 0:d.meterDetails)==null?void 0:A.final_meter_reading)+1||0+1e-6,`Reading must be greater previous ${((R=d==null?void 0:d.meterDetails)==null?void 0:R.final_meter_reading)||1e-6}`),meterImage:q().required("Select Image"),demandUpto:q().required("Select Upto Data")});const n=ce({enableReinitialize:!0,initialValues:{demandUpto:"",meterReading:"",meterImage:""},onSubmit:(r,{resetForm:o})=>{K(r),o()}}),X=r=>{let o=r.target.name,i=r.target.value;x(!1),y(""),o=="meterReading"&&n.setFieldValue("meterReading",me(i,n.values.meterReading,20)),o=="meterImage"&&j(r.target.files[0])},Y=a.useMemo(()=>()=>{if((e==null?void 0:e.connectionId)!=4)return null;g.post(D,{consumerId:m,uptoData:n.values.demandUpto},h).then(r=>{r.data.status?b(r.data.data):(x(r.data.message),b(!1))}).catch(r=>{b(!1)})},[n.values.demandUpto]);a.useEffect(()=>{Y()},[Y]);const Z=()=>{N(!0),g.post(O,{id:m},h).then(function(r){V(r.data.data),N(!1)}).catch(function(r){N(!1)})},F=()=>{g.post(Q,{ConsumerId:m},h).then(r=>{r.data.status?p(r.data.data):p(!1)}).catch(r=>{})};return a.useEffect(()=>{F(),Z()},[m,G]),t(f,{children:[B&&s(le,{}),s(ie,{active:"demand",consumerNo:e==null?void 0:e.consumer_no}),s("div",{className:"grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-2 container mx-auto w-full",children:s("div",{className:"col-span-12 rounded-lg p-4",children:t("div",{className:"p-4",children:[t("div",{className:"",children:[t("h1",{className:"px-1 font-semibold font-serif  text-gray-500",children:[s(v,{className:"inline"})," Basic Details"]}),s("div",{className:"py-6 mt-2 bg-white border rounded-lg shadow-xl p-4",children:t("div",{className:"flex space-x-5 pl-4 ",children:[t("div",{className:"flex-1",children:[s("div",{className:"font-semibold text-sm",children:e!=null&&e.ulb_name?e==null?void 0:e.ulb_name:"N/A"}),s("div",{className:"text-gray-500 text-xs",children:"ULB Name"})]}),t("div",{className:"flex-1",children:[s("div",{className:"font-bold text-sm",children:e!=null&&e.ward_name?e==null?void 0:e.ward_name:"N/A"}),s("div",{className:"text-gray-500 text-xs",children:"Ward No."})]}),t("div",{className:"flex-1",children:[s("div",{className:"font-bold text-sm",children:e!=null&&e.consumer_no?e==null?void 0:e.consumer_no:"N/A"}),s("div",{className:"text-gray-500 text-xs",children:"Consumer No"})]}),t("div",{className:"flex-1",children:[s("div",{className:"font-bold text-sm",children:e!=null&&e.connection_through?e==null?void 0:e.connection_through:"N/A"}),s("div",{className:"text-gray-500 text-xs",children:"Connection Through"})]}),(e==null?void 0:e.connection_through)=="SAF"?t("div",{className:"flex-1",children:[s("div",{className:"font-semibold text-md",children:e!=null&&e.saf_no?e==null?void 0:e.saf_no:"N/A"}),s("div",{className:"text-gray-500 text-xs",children:"SAF No"})]}):t("div",{className:"flex-1",children:[s("div",{className:"font-semibold text-md",children:e!=null&&e.holding_no?e==null?void 0:e.holding_no:"N/A"}),s("div",{className:"text-gray-500 text-xs",children:"Holding No"})]}),t("div",{className:"flex-1",children:[s("div",{className:"font-semibold text-md",children:e!=null&&e.owner_char_type?e==null?void 0:e.owner_char_type:"N/A"}),s("div",{className:"text-gray-500 text-xs",children:"Ownership Type"})]})]})})]}),d&&((I=d==null?void 0:d.consumerDemands)==null?void 0:I.length)!=0?t("div",{children:[t("div",{className:"flex flex-wrap w-full space-x-0 my-5",children:[t("div",{className:"grow",children:[s("span",{className:"text-sm",children:"Total Dues :"})," ",t("span",{className:"font-semibold text-gray-700 text-lg",children:["₹ ",d==null?void 0:d.totalSumDemand]})]}),t("div",{className:"grow",children:[s("span",{className:"text-sm",children:"Due From :"})," ",t("span",{className:"font-semibold text-gray-700 text-lg",children:[l((U=d==null?void 0:d.consumerDemands[0])==null?void 0:U.demand_from,"YYYY-MM-DD").format("DD-MMM-yy")," "]})]}),t("div",{className:"grow",children:[s("span",{className:"text-sm",children:"Due Upto :"})," ",t("span",{className:"font-semibold text-gray-700 text-lg",children:[l((C=(S=d==null?void 0:d.consumerDemands)==null?void 0:S.at(-1))==null?void 0:C.demand_upto,"YYYY-MM-DD").format("DD-MMM-yy")," "]})]}),t("div",{className:"grow",children:[s("span",{className:"text-sm",children:"Total Due Months :"})," ",s("span",{className:"font-semibold text-gray-700 text-lg",children:(E=d==null?void 0:d.consumerDemands)==null?void 0:E.length})]})]}),((P=d==null?void 0:d.consumerDemands)==null?void 0:P.length)!=0&&t("div",{className:"mt-6 mx-3 flex space-x-8",children:[t("div",{className:"float-left flex space-x-8",children:[s("p",{className:"text-gray-600 text-xl font-semibold",children:"Total Payable Amount"}),t("p",{className:"text-black text-2xl font-semibold",children:["₹ ",d==null?void 0:d.totalSumDemand]})]}),s("div",{className:"float-right",children:s("button",{onClick:()=>H(`//water-demand-payment/${m}`),className:"bg-indigo-700 hover:bg-indigo-600 px-4 py-2 rounded shadow-2xl text-white text-sm",children:"Pay Demand"})})]}),s("br",{}),t("div",{className:"mt-5",children:[t("h1",{className:"px-1 font-semibold font-serif text-gray-500",children:[s(v,{className:"inline"})," Demand Details"]}),t("table",{className:"min-w-full leading-normal mt-2 bg-white rounded-lg shadow-xl p-4",children:[s("thead",{className:"font-bold text-left text-sm border text-gray-800 bg-white",children:t("tr",{children:[s("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"#"}),s("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Demand From"}),s("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Demand Upto"}),s("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Demand Amount"}),s("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Penalty"}),s("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Connection Type"}),s("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Payable Amount "})]})}),s("tbody",{className:"text-sm",children:s(f,{children:(k=d==null?void 0:d.consumerDemands)==null?void 0:k.map((r,o)=>t("tr",{className:"bg-white shadow-xl border-b border-gray-200",children:[s("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:o+1}),s("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:r!=null&&r.demand_from?l(r==null?void 0:r.demand_from,"YYYY-MM-DD").format("DD-MMM-yy"):"N/A"}),s("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:r!=null&&r.demand_upto?l(r==null?void 0:r.demand_upto,"YYYY-MM-DD").format("DD-MMM-yy"):"N/A"}),s("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:r!=null&&r.balance_amount?r==null?void 0:r.balance_amount:"N/A"}),s("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:r!=null&&r.penalty?r==null?void 0:r.penalty:"N/A"}),s("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:r!=null&&r.connection_type?r==null?void 0:r.connection_type:"N/A"}),s("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:r!=null&&r.amount?"₹ "+(r==null?void 0:r.amount):"N/A"})]}))})})]})]})]}):s("div",{className:"w-full mt-20 text-center",children:s("span",{className:"text-xl text-red-500 border border-red-500 font-semibold px-4 py-2",children:"Demand Not Found !"})}),t("div",{className:"mt-5",children:[t("h1",{className:"px-1 font-semibold font-serif  text-gray-500",children:[s(v,{className:"inline"})," Meter/Fixed Connection Details"]}),t("div",{className:"py-6 mt-2 border bg-white rounded-lg shadow-xl p-4",children:[t("div",{className:"flex space-x-5 pl-4 ",children:[t("div",{className:"flex-1",children:[s("div",{className:"font-bold text-sm",children:(e==null?void 0:e.connectionName)||"N/A"}),s("div",{className:"text-gray-500 text-xs",children:"Connection Type"})]}),(e==null?void 0:e.connectionId)!=3&&t(f,{children:[t("div",{className:"flex-1",children:[s("div",{className:"font-bold text-sm",children:((T=e==null?void 0:e.meterDetails)==null?void 0:T.meter_no)||"N/A"}),s("div",{className:"text-gray-500 text-xs",children:"Meter No."})]}),t("div",{className:"flex-1",children:[s("div",{className:"font-bold text-sm",children:e!=null&&e.lastMeterReading?e==null?void 0:e.lastMeterReading:"N/A"}),s("div",{className:"text-gray-500 text-xs",children:"Last Meter Reading"})]})]}),t("div",{className:"flex-1",children:[t("div",{className:"font-semibold text-md",children:[(L=e==null?void 0:e.meterDetails)!=null&&L.connection_date?l((W=e==null?void 0:e.meterDetails)==null?void 0:W.connection_date,"YYYY-MM-DD").format("DD-MMM-yy"):"N/A"," "]}),t("div",{className:"text-gray-500 text-xs",children:[e==null?void 0:e.connectionName," Connection Date"]})]})]}),(e==null?void 0:e.connectionId)==4&&s("div",{className:"py-6 mt-2",children:t("div",{className:"flex space-x-5 pl-4 ",children:[t("div",{className:"flex-1",children:[t("div",{className:"font-semibold text-md",children:[l(e==null?void 0:e.demandFrom,"YYYY-MM-DD").format("DD-MMM-yy")+":"+l(e==null?void 0:e.demandUpto,"YYYY-MM-DD").format("DD-MMM-yy")," "]}),s("div",{className:"text-gray-500 text-xs",children:"Period"})]}),t("div",{className:"flex-1",children:[t("div",{className:"font-semibold text-md",children:[e==null?void 0:e.lastConsumedUnit," "]}),s("div",{className:"text-gray-500 text-xs",children:"Last Consumed Unit"})]}),t("div",{className:"flex-1",children:[t("div",{className:"font-semibold text-md",children:[e==null?void 0:e.avgReading," "]}),s("div",{className:"text-gray-500 text-xs",children:"Avg. Reading (Per/Date)"})]}),t("div",{className:"flex-1",children:[t("div",{className:"font-semibold text-md",children:[(c==null?void 0:c.diffInDays)||"N/A"," ",t("span",{className:"text-xs",children:["(",l(e==null?void 0:e.demandUpto,"YYYY-MM-DD").format("DD-MMM-yy")," : ",l(n.values.demandUpto,"YYYY-MM-DD").format("DD-MMM-yy"),")"]})," "]}),s("div",{className:"text-gray-500 text-xs",children:"Day Difference"})]})]})})]}),s("div",{className:"py-6 mt-2 bg-white rounded-lg shadow-xl p-4",children:t("form",{onSubmit:n.handleSubmit,onChange:X,className:"p-4 relative",children:[t("div",{className:"flex space-x-5 pl-4 ",children:[(e==null?void 0:e.connectionId)!=3&&t(f,{children:[s("div",{className:"flex-1",children:t("div",{className:"form-group mb-6 col-span-12 md:col-span-6 md:px-4",children:[t("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Upload Meter Image ",s("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),s("input",{...n.getFieldProps("meterImage"),type:"file",className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md cursor-pointer",placeholder:"Enter Meter Reading"}),s("span",{className:"text-red-600 absolute text-xs",children:n.touched.meterImage&&n.errors.meterImage?n.errors.meterImage:null})]})}),s("div",{className:"flex-1",children:t("div",{className:"form-group mb-6 col-span-12 md:col-span-6 md:px-4",children:[t("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Final Meter Reading ",s("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),s("input",{...n.getFieldProps("meterReading"),disabled:(e==null?void 0:e.connectionId)==4,value:c==null?void 0:c.finalMeterReading,type:"text",className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 disabled:bg-gray-100 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md cursor-pointer",placeholder:"Enter Meter Reading"}),s("span",{className:"text-red-600 absolute text-xs",children:n.touched.meterReading&&n.errors.meterReading?n.errors.meterReading:null})]})})]}),s("div",{className:"flex-1",children:t("div",{className:"form-group mb-6 col-span-12 md:col-span-6 md:px-4",children:[t("label",{className:"form-label inline-block mb-1 text-gray-900 text-sm font-semibold",children:["Demand Upto Date ",s("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),s("input",{...n.getFieldProps("demandUpto"),type:"date",className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md cursor-pointer"}),s("span",{className:"text-red-600 absolute text-xs",children:n.touched.demandUpto&&n.errors.demandUpto?n.errors.demandUpto:null})]})})]}),s("p",{className:"text-red-500 text-center font-semibold  ",children:M&&"Error : "+M}),t("p",{className:"text-red-500 text-center font-semibold  ",children:[_&&_,w&&w]}),s("div",{className:"flex justify-end mr-5",children:s("button",{type:"submit",className:"bg-indigo-700 px-3 py-2 text-white rounded",children:"Generate Demand"})})]})})]}),s("div",{className:"mt-6",children:" "})]})})}),s("div",{className:"w-full h-60"})]})}export{Ne as default};
