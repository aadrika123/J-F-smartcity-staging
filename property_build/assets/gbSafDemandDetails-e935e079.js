import{bv as Y,a as q,k as J,r as x,j as e,B as M,S as $,aZ as K,aJ as X,n as a,b1 as D,b2 as l,b3 as ee,i as se,e as V,b4 as te,A as ae,aI as le,aY as xe}from"./index-a8a14e0c.js";import"./RazorpayPaymentScreen-a1057627.js";import{T as re}from"./TopTabs-5f034116.js";function he(ce){var o,p,h,b,m,f,j,y,N,u,g,v,w,A,P,S,T,_,z,R,B,L,C,F,E,I;const{id:c}=Y(),{propertyGenerateOrderId:ie,api_getsafDemandById:k}=xe(),H=q();J("SAF Demand Details");const[U,ne]=x.useState(!1),[s,G]=x.useState();x.useState("");const[O,Q]=x.useState(""),[n,i]=x.useState(!1),[W,d]=x.useState(!1),Z=()=>{i(!0),d(!1),ae.post(k,{id:c},le()).then(function(t){var r;Q((r=t==null?void 0:t.data)==null?void 0:r.safNo),G(t.data.data),i(!1)}).catch(function(t){d(!0),i(!1)})};return x.useEffect(()=>{Z()},[]),n?e.jsx(e.Fragment,{children:e.jsx(M,{})}):W?e.jsx($,{title:"Server is busy",desc:"Server is too busy to respond. Please try again later.",buttonText:"View Dashboard",buttonUrl:"/propertyDashboard"}):e.jsxs(e.Fragment,{children:[e.jsx(K,{position:"top-right",autoClose:2e3}),n&&e.jsx(X,{}),e.jsxs("div",{className:"w-full mx-auto md:px-6",children:[e.jsx("div",{className:"pt-10",children:e.jsx(re,{payButton:(s==null?void 0:s.paymentStatus)!==1,payableAmount:(o=s==null?void 0:s.amounts)==null?void 0:o.payableAmount,title:"Demand Details",type:"gbSaf",id:c,safNo:O,active:"demand"})}),e.jsx("div",{className:"w-full bg-white shadow-xl mb-6",children:e.jsxs("div",{className:"py-6 mt-2 rounded-lg shadow-lg p-4",children:[e.jsxs("div",{className:"flex flex-col md:flex-row space-y-2 md:space-x-5 pl-4 ",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:a((p=s==null?void 0:s.basicDetails)==null?void 0:p.saf_no)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Application No.(Saf No)"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:a((h=s==null?void 0:s.basicDetails)==null?void 0:h.old_ward_no)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Ward No."})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-lg",children:a((b=s==null?void 0:s.basicDetails)==null?void 0:b.new_ward_no)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"New Ward No"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-md",children:a((m=s==null?void 0:s.basicDetails)==null?void 0:m.ownership_type)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Govt. Building Usage Type"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:a((f=s==null?void 0:s.basicDetails)==null?void 0:f.property_type)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Property Usage Type"})]})]}),e.jsxs("div",{className:"flex flex-col md:flex-row space-y-2 md:space-x-10  pl-4 mt-4",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:a((j=s==null?void 0:s.basicDetails)==null?void 0:j.zone)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Zone"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:a((y=s==null?void 0:s.basicDetails)==null?void 0:y.is_mobile_tower)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Property has Mobile Tower(s) ?"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsxs("div",{className:"font-semibold text-md",children:[a((N=s==null?void 0:s.basicDetails)==null?void 0:N.is_hoarding_board)," "]}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Property has Hoarding Board(s) ?"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-md",children:a((u=s==null?void 0:s.basicDetails)==null?void 0:u.is_petrol_pump)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Is property a Petrol Pump ?"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:a((g=s==null?void 0:s.basicDetails)==null?void 0:g.is_water_harvesting)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Rainwater harvesting provision ?"})]})]})]})}),e.jsxs("div",{className:"",children:[(s==null?void 0:s.paymentStatus)==1&&e.jsx("div",{className:"w-full mt-20 text-center",children:e.jsx("span",{className:"text-3xl text-red-500  font-semibold px-4 py-2",children:"No Dues Found !"})}),(s==null?void 0:s.paymentStatus)!=1&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mt-10",children:[e.jsxs("h1",{className:"px-1 font-semibold font-serif text-xs",children:[e.jsx("img",{src:D,alt:"pin",className:"w-5 inline"})," Tax Details"]}),e.jsxs("div",{className:"md:flex font-mono text-xs py-2 text-gray-900",children:[e.jsxs("div",{className:"flex max-sm:mb-2",children:[e.jsx("div",{className:"flex-initial px-2 font-bold",children:"Total Payable Amount"}),e.jsx("div",{className:"flex-initial px-2",children:"= "})]}),e.jsxs("div",{className:"flex",children:[e.jsxs("div",{className:"flex-initial px-2 bg-gray-100 rounded-lg",children:[" ","( Tax Amount"]}),e.jsx("div",{className:"flex-initial px-2",children:"+"}),e.jsx("div",{className:"flex-initial px-2 bg-gray-100 rounded-lg",children:"Late Assessment Penalty"}),e.jsx("div",{className:"flex-initial px-2",children:"+"}),e.jsx("div",{className:"flex-initial px-2 bg-gray-100 rounded-lg",children:"1% Penalty )"})]}),e.jsx("div",{className:"text-center",children:e.jsx("div",{className:"flex-initial px-1",children:"-"})})," ",e.jsxs("div",{className:"flex",children:[e.jsxs("div",{className:"flex-initial px-2 bg-gray-100 rounded-lg",children:[" ","( Rebate"]}),e.jsx("div",{className:"flex-initial px-2",children:"+"}),e.jsx("div",{className:"flex-initial px-2 bg-gray-100 rounded-lg",children:"Special Rebate )"})]})]}),e.jsx("div",{className:"overflow-auto",children:e.jsxs("table",{className:"min-w-full leading-normal mt-2",children:[e.jsx("thead",{className:"font-bold text-left text-sm bg-white text-gray-600",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Tax Amount (₹)"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Late Assessment Penalty (₹)"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"1% Penalty (₹)"}),e.jsxs("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:["Rebate( ",a((v=s==null?void 0:s.amounts)==null?void 0:v.rebatePerc),"% in ₹)"]}),e.jsxs("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:["Special Rebate("," ",a((w=s==null?void 0:s.amounts)==null?void 0:w.specialRebatePerc),"% in ₹)"]}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Payable Amount (₹)"})]})}),e.jsx("tbody",{className:"text-sm",children:e.jsxs("tr",{className:"bg-white shadow-lg border-b border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:l((A=s==null?void 0:s.amounts)==null?void 0:A.totalTax)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:l((P=s==null?void 0:s.amounts)==null?void 0:P.lateAssessmentPenalty)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:l((S=s==null?void 0:s.amounts)==null?void 0:S.totalOnePercPenalty)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:l((T=s==null?void 0:s.amounts)==null?void 0:T.rebateAmt)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:l((_=s==null?void 0:s.amounts)==null?void 0:_.specialRebateAmt)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:l((z=s==null?void 0:s.amounts)==null?void 0:z.payableAmount)})]})})]})})]}),((B=(R=s==null?void 0:s.amounts)==null?void 0:R.rebates)==null?void 0:B.length)!==0&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mt-10 text-md font-semibold",children:"Rebate Description"}),e.jsx("div",{className:"overflow-auto",children:e.jsxs("table",{className:"min-w-full leading-normal mt-2",children:[e.jsx("thead",{className:"font-bold text-left text-sm bg-white text-gray-600",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"#"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Rebate Type"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"percent(%)"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Amount"})]})}),e.jsx("tbody",{className:"text-sm",children:(C=(L=s==null?void 0:s.amounts)==null?void 0:L.rebates)==null?void 0:C.map((t,r)=>e.jsxs("tr",{className:"bg-white shadow-lg border-b border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:r+1}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a(t==null?void 0:t.keyString)}),e.jsxs("td",{className:"px-2 py-2 text-sm text-left",children:[l(t==null?void 0:t.rebatePerc),"%"]}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:l(t==null?void 0:t.rebateAmount)})]}))})]})})]}),e.jsxs("div",{className:"mt-10",children:[(s==null?void 0:s.details)&&e.jsxs("div",{children:[e.jsxs("h1",{className:"px-1 font-semibold font-serif text-md mt-10",children:[e.jsx("img",{src:ee,alt:"pin",className:"w-5 inline"})," Tax Description of Annual Rental Value - As Per Old Rule (Effect Upto 31-03-2016)"]}),e.jsxs("div",{className:"flex font-mono text-xs py-2 px-1 text-gray-900",children:[e.jsx("div",{className:"flex-initial px-2 font-bold",children:"Annual Rental Value (ARV)"}),e.jsx("div",{className:"flex-initial px-2",children:"="}),e.jsx("div",{className:"flex-initial px-2 bg-gray-100 rounded-lg",children:"Builtup Area"}),e.jsx("div",{className:"flex-initial px-2",children:"x"}),e.jsx("div",{className:"flex-initial px-2 bg-gray-100 rounded-lg",children:"Rental Rate"})]}),e.jsx("div",{className:"overflow-auto",children:e.jsxs("table",{className:"min-w-full leading-normal mt-2",children:[e.jsx("thead",{className:"font-bold text-left text-sm bg-white text-gray-600",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"#"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"ARV"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Quarter"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Quarter / Year"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Holding Tax (₹)"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"1% penalty (₹)"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Water Tax (₹)"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Latrine/Conservancy Tax (₹)"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Education Cess (₹)"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Health Cess (₹)"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Quarterly Tax (₹)"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Adjusted Amount"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Balance"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Due Date"})]})}),e.jsx("tbody",{className:"text-sm",children:e.jsx(e.Fragment,{children:(F=s.details)==null?void 0:F.map((t,r)=>e.jsxs("tr",{className:"bg-white shadow-lg border-b border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:r+1}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a(t==null?void 0:t.arv)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a(t==null?void 0:t.qtr)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a(t==null?void 0:t.fyear)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a(t==null?void 0:t.holding_tax)}),e.jsxs("td",{className:"px-2 py-2 text-sm text-left",children:[a(t==null?void 0:t.onePercPenaltyTax),"(",a(t==null?void 0:t.onePercPenalty),"%)"]}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a(t==null?void 0:t.water_tax)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a(t==null?void 0:t.latrine_tax)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a(t==null?void 0:t.education_cess)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a(t==null?void 0:t.health_cess)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a(t==null?void 0:t.amount)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a(t==null?void 0:t.adjust_amount)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a(t==null?void 0:t.balance)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:se(t==null?void 0:t.due_date)})]}))})})]})})]}),e.jsx("div",{className:"mt-10 flex",children:!U&&e.jsxs("div",{className:"md:flex md:justify-between md:w-full max-sm:p-2 w-full",children:[e.jsx("div",{className:"text-left flex-1",children:e.jsxs("div",{children:[e.jsxs("span",{className:"font-semibold text-gray-600 text-xl max-sm:text-[1rem]",children:["Total Payable Amount"," "]}),e.jsx("span",{className:"text-3xl font-bold ml-8 max-sm:ml-20",children:V((E=s==null?void 0:s.amounts)==null?void 0:E.payableAmount)})]})}),e.jsx("div",{className:"text-right flex-1 justify-between",children:e.jsxs("button",{onClick:()=>H(`/property-payment/${c}/gbsaf`),type:"button",className:"max-sm:w-full md:ml-4 font-bold px-6 py-2 bg-indigo-500 text-white  text-sm leading-tight uppercase rounded  hover:bg-indigo-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out shadow-xl border border-white",children:["Pay","",V((I=s==null?void 0:s.amounts)==null?void 0:I.payableAmount)," ",e.jsx("span",{children:e.jsx(te,{className:"inline font-bold text-xl"})})," "]})})]})}),e.jsx("div",{className:"h-20 w-full"})]})]})]})]}),e.jsx("div",{className:"w-full h-40"})]})}export{he as default};
