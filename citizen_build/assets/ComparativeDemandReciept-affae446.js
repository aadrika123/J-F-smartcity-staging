import{j as r}from"./mui-8e804a04.js";import{k as O,A as H,b as I,B as U,n as p,p as c,V as x}from"./index-19682a6e.js";import{P as q}from"./PropertyApiList-37c20837.js";import{r as d,f as D}from"./router-87042356.js";import{S as G}from"./ServerErrorCard-d469daf8.js";import"./CommonModal-340f9ebb.js";import{P as W}from"./PrintButton-775ad1c5.js";import{h as Z}from"./moment-fbc5633a.js";import"./react-09dd1212.js";import"./axios-97164839.js";import"./reactIcons-6a3b6da1.js";import"./redux-4db06ad6.js";import"./i18next-e99b4042.js";import"./index-4e794517.js";import"./Styles-a2fa8249.js";const xr=()=>{var t,h,g,j,f,y,N,u,v,R,w,A;O();const[l,S]=d.useState(),[s,V]=d.useState(),[o,X]=d.useState(),[M,b]=d.useState(!1),[k,m]=d.useState(!1),{comparativeDemandReciept:E}=q(),a=D();d.useEffect(()=>{B()},[]);const B=()=>{b(!1),m(!0),H.post(E,{propId:a==null?void 0:a.id},I()).then(e=>{var n,P,T,F,C,_;console.log("comparative demand success => ",e),(n=e==null?void 0:e.data)!=null&&n.status?(S((P=e==null?void 0:e.data)==null?void 0:P.data),V((F=(T=e==null?void 0:e.data)==null?void 0:T.data)==null?void 0:F.arvRule),X((_=(C=e==null?void 0:e.data)==null?void 0:C.data)==null?void 0:_.cvRule)):b(!0),m(!1)}).catch(e=>{console.log("comparative demand error => ",e),b(!0),m(!1)})};if(k)return r.jsx(r.Fragment,{children:r.jsx(U,{})});if(M)return r.jsx(G,{title:"Server is busy",desc:"Server is too busy to respond. Please try again later.",buttonText:"View Dashboard",buttonUrl:"/propertyDashboard"});let i=l==null?void 0:l.ulbDetails;return r.jsxs(r.Fragment,{children:[r.jsx(W,{}),r.jsx("div",{className:"container border-2 border-dashed border-black  flex-1 w-[80vw] print:w-[100vw] print:h-[100vh] text-black ",id:"printableArea",children:r.jsxs("div",{className:"p-4 print:p-0 text-xs",children:[r.jsx("img",{src:i==null?void 0:i.state_logo,alt:"",srcset:"",className:"absolute top-[20%] left-[27%] h-[40vh] backImage opacity-10"}),r.jsx("div",{children:r.jsxs("div",{className:"flex flex-col justify-center items-center gap-x-4",children:[r.jsx("img",{src:i==null?void 0:i.ulb_logo,alt:"Logo",srcset:"",className:"h-16 w-16"}),r.jsx("div",{className:"text-xs font-semibold flex flex-col justify-center items-center",children:r.jsx("div",{className:"uppercase font-bold text-3xl mb-2",children:i==null?void 0:i.ulb_name})}),r.jsx("div",{className:"w-full flex justify-center",children:r.jsx("div",{className:"grid grid-cols-6 w-max",children:r.jsx("div",{className:"col-span-6 uppercase border-2 font-bold border-black px-8 py-1 text-base",children:"Comparative Demand Receipt"})})})]})}),r.jsx("div",{className:"flex flex-col",children:r.jsxs("span",{className:"font-semibold",children:["Date:"," ",r.jsx("span",{className:"font-normal",children:Z(new Date).format("DD-MM-yy")})," "]})}),r.jsxs("div",{className:"flex flex-col w-full font-semibold",children:[r.jsxs("div",{children:["Mr/Mrs/Ms:"," ",r.jsx("span",{className:"font-normal",children:p((t=l==null?void 0:l.basicDetails)==null?void 0:t.owner_name)})]}),r.jsxs("div",{children:["Father's/Husband's Name:"," ",r.jsx("span",{className:"font-normal",children:p((h=l==null?void 0:l.basicDetails)==null?void 0:h.guardian_name)})]}),r.jsxs("div",{children:[(g=l==null?void 0:l.basicDetails)!=null&&g.new_holding_no?r.jsxs("span",{children:["Holding Number :"," ",r.jsx("span",{className:"font-normal",children:(j=l==null?void 0:l.basicDetails)==null?void 0:j.new_holding_no})]}):r.jsxs("span",{children:["Property Tax Number :"," ",r.jsx("span",{className:"font-normal",children:(f=l==null?void 0:l.basicDetails)==null?void 0:f.pt_no})]})," ",r.jsxs("span",{children:["Ward No."," ",r.jsx("span",{className:"font-normal",children:((y=l==null?void 0:l.basicDetails)==null?void 0:y.new_ward_no)==""?(N=l==null?void 0:l.basicDetails)==null?void 0:N.old_ward_no:(u=l==null?void 0:l.basicDetails)==null?void 0:u.new_ward_no})]})]}),r.jsxs("div",{children:["Address:"," ",r.jsx("span",{className:"font-normal",children:(v=l==null?void 0:l.basicDetails)==null?void 0:v.prop_address})]})]}),r.jsxs("div",{className:"flex flex-col w-full gap-y-2 mt-2",children:[r.jsxs("div",{children:["झारखण्ड नगरपालिका अधिनियम 2011 की धारा 590 द्वारा प्रदत्त शक्तियों का प्रयोग करते हुए झारखण्ड के राज्यपाल नगर विकास एवं आवास विभाग, झारखण्ड, राँची की अधिसूचना 1511 दिनांक 29.04.2022 के अनुसार झारखण्ड नगरपालिका सम्पत्ति कर (निर्धारण, संग्रहण और वसूली) में संशोधन किया गया है. इस संशोधन के अनुसार झारखण्ड राज्य के सभी नगर निगम, परिषद और पंचायत में रहने वाले आम नागिरिकों और व्यवसायियों को सुचित किया जाता है कि अब से होल्डिंग टैक्स कि वसुली सर्किलरेट के लिए नियमों के आधार पर वित्तीय वर्ष 2022 के अप्रैल महीने से की जाएगी."," "]}),r.jsxs("div",{children:["सम्पत्तिकर नियम 2013 में संशोधन किया गया है, अतः वित्तिय वर्ष 2022-23 से सम्पत्तिकर का मूल्याकन वार्षिक किराया मूल्य के स्थान पर पूजीगत मूल्य के आधार पर किया जायेगा। आपके भवन (होल्डिंग नं० -"," ",(R=l==null?void 0:l.basicDetails)==null?void 0:R.new_holding_no,") के घृतिकर की गणना 01.04.2022 से सर्किलरेट के अनुसार किया जायेगा।"]}),r.jsx("div",{children:"झारखण्ड नगरपालिका कर भुगतान (समय, प्रक्रिया तथा वसूली) विनियम संशोधन 2022 के विहित प्रावधान के अनुसार आपको उक्त अवधि का धृति कर का भुगतान करना है।"}),r.jsx("div",{children:"घृतिकर कि वार्षिक किरायादर एव पूजीगत मूल्य के आधार पर तुलनात्मक घृतिकर की गणना निम्नवत है :"})]}),r.jsxs("div",{className:"mt-4",children:[r.jsx("div",{className:"text-lg font-bold mb-2",children:"Annual Rental Value - As ARV Rule (Effect From 01-04-2016 to 31-03-2022)"}),r.jsxs("div",{className:"flex flex-col",children:[r.jsx("span",{children:"a. Carpet area for residential - 70% of buildup area"}),r.jsx("span",{children:"b. Carpet area for commercial - 80% of buildup area"})]}),r.jsx("div",{className:"font-bold text-md",children:"Annual Rental Value (ARV) = Carpet Area X Usage Factor X Occupancy Factor X Rental Rate"})]}),r.jsxs("div",{className:"mt-4",children:[r.jsx("div",{className:"text-lg font-bold mb-2",children:"Capital Value - As Per Current Rule (Effect From 01-04-2022)"}),r.jsxs("div",{className:"flex flex-col",children:[r.jsx("span",{children:"a. Residential - 0.075%"}),r.jsx("span",{children:"b. Commercial - 0.150%"}),r.jsx("span",{children:"c. Commercial & Greater than 25000 sqft - 0.20%"})]}),r.jsxs("div",{className:"font-bold text-md flex flex-wrap w-full",children:["Property Tax = Circle Rate X Buildup Area X Occupancy Factor X Tax Percentage X Calculation Factor X Matrix Factor Rate"," ",r.jsx("span",{className:"text-red-600",children:"(Only in case of 100% residential property)"})]})]}),r.jsx("div",{className:"overflow-auto",children:r.jsxs("table",{className:"w-full mt-2 text-[10px]",children:[r.jsxs("tr",{children:[r.jsx("td",{className:"bg-gray-200 border-[1px] border-gray-700 pl-1 font-semibold",children:"Rule"}),r.jsx("td",{className:"bg-gray-200 border-[1px] border-gray-700 pl-1 font-semibold",children:"Floor"}),r.jsx("td",{className:"bg-gray-200 border-[1px] border-gray-700 pl-1 font-semibold",children:"Built-up-area"}),r.jsx("td",{className:"bg-gray-200 border-[1px] border-gray-700 pl-1 font-semibold",children:"Usage Factor"}),r.jsx("td",{className:"bg-gray-200 border-[1px] border-gray-700 pl-1 font-semibold",children:"Occ Factor"}),r.jsx("td",{className:"bg-gray-200 border-[1px] border-gray-700 pl-1 font-semibold",children:"Carpet Area (70%/80%)"}),r.jsx("td",{className:"bg-gray-200 border-[1px] border-gray-700 pl-1 font-semibold",children:"Rental Rate / Matrix Factor"}),r.jsx("td",{className:"bg-gray-200 border-[1px] border-gray-700 pl-1 font-semibold",children:"Tax Perc."}),r.jsx("td",{className:"bg-gray-200 border-[1px] border-gray-700 pl-1 font-semibold",children:"Calculation Factor"}),r.jsx("td",{className:"bg-gray-200 border-[1px] border-gray-700 pl-1 font-semibold",children:"(Annual Rental Value) p.e.f"}),r.jsx("td",{className:"bg-gray-200 border-[1px] border-gray-700 pl-1 font-semibold",children:"Circle Rate"})]}),(s==null?void 0:s.length)>0&&(s==null?void 0:s.map((e,n)=>r.jsxs("tr",{children:[n+1==1&&r.jsx("td",{className:"border-[1px] border-gray-700 pl-1",rowSpan:s==null?void 0:s.length,children:"ARV"}),r.jsx("td",{className:"border-[1px] border-gray-700 pl-1",children:p(e==null?void 0:e.floor)}),r.jsx("td",{className:"border-[1px] border-gray-700 pl-1",children:c(e==null?void 0:e.buildupArea)}),r.jsx("td",{className:"border-[1px] border-gray-700 pl-1",children:c(e==null?void 0:e.usageFactor)}),r.jsx("td",{className:"border-[1px] border-gray-700 pl-1",children:c(e==null?void 0:e.occupancyFactor)}),r.jsx("td",{className:"border-[1px] border-gray-700 pl-1",children:c(e==null?void 0:e.carpetArea)}),r.jsx("td",{className:"border-[1px] border-gray-700 pl-1",children:c(e==null?void 0:e.rentalRate)}),r.jsx("td",{className:"border-[1px] border-gray-700 pl-1",children:c(e==null?void 0:e.taxPerc)}),r.jsx("td",{className:"border-[1px] border-gray-700 pl-1",children:c(e==null?void 0:e.calculationFactor)}),r.jsx("td",{className:"border-[1px] border-gray-700 pl-1",children:x(e==null?void 0:e.arvPsf)}),r.jsx("td",{className:"border-[1px] border-gray-700 pl-1",children:c(e==null?void 0:e.circleRate)})]}))),(o==null?void 0:o.length)>0&&(o==null?void 0:o.map((e,n)=>r.jsxs("tr",{children:[n+1==1&&r.jsx("td",{className:"border-[1px] border-gray-700 pl-1",rowSpan:o==null?void 0:o.length,children:"CV"}),r.jsx("td",{className:"border-[1px] border-gray-700 pl-1",children:p(e==null?void 0:e.floor)}),r.jsx("td",{className:"border-[1px] border-gray-700 pl-1",children:c(e==null?void 0:e.buildupArea)}),r.jsx("td",{className:"border-[1px] border-gray-700 pl-1",children:c(e==null?void 0:e.usageFactor)}),r.jsx("td",{className:"border-[1px] border-gray-700 pl-1",children:c(e==null?void 0:e.occupancyFactor)}),r.jsx("td",{className:"border-[1px] border-gray-700 pl-1",children:c(e==null?void 0:e.carpetArea)}),r.jsx("td",{className:"border-[1px] border-gray-700 pl-1",children:c(e==null?void 0:e.rentalRate)}),r.jsx("td",{className:"border-[1px] border-gray-700 pl-1",children:c(e==null?void 0:e.taxPerc)}),r.jsx("td",{className:"border-[1px] border-gray-700 pl-1",children:c(e==null?void 0:e.calculationFactor)}),r.jsx("td",{className:"border-[1px] border-gray-700 pl-1",children:x(e==null?void 0:e.arvPsf)}),r.jsx("td",{className:"border-[1px] border-gray-700 pl-1",children:c(e==null?void 0:e.circleRate)})]})))]})}),r.jsxs("table",{className:"w-full mt-2 text-[10px]",children:[r.jsxs("tr",{children:[r.jsx("td",{className:"bg-gray-200 border-[1px] border-gray-700 pl-1 font-semibold",children:"Rule"}),r.jsx("td",{className:"bg-gray-200 border-[1px] border-gray-700 pl-1 font-semibold",children:"Floor"}),r.jsx("td",{className:"bg-gray-200 border-[1px] border-gray-700 pl-1 font-semibold",children:"ARV Total Property Tax"}),r.jsx("td",{className:"bg-gray-200 border-[1px] border-gray-700 pl-1 font-semibold",children:"CV Total Property Tax"})]}),(s==null?void 0:s.length)>0&&(s==null?void 0:s.map((e,n)=>r.jsxs("tr",{children:[n+1==1&&r.jsx("td",{className:"border-[1px] border-gray-700 pl-1",rowSpan:s==null?void 0:s.length,children:"ARV"}),r.jsx("td",{className:"border-[1px] border-gray-700 pl-1",children:p(e==null?void 0:e.floor)}),r.jsx("td",{className:"border-[1px] border-gray-700 pl-1",children:x(e==null?void 0:e.arvTotalPropTax)}),r.jsx("td",{className:"border-[1px] border-gray-700 pl-1",children:x(e==null?void 0:e.cvArvPropTax)})]}))),(o==null?void 0:o.length)>0&&(o==null?void 0:o.map((e,n)=>r.jsxs("tr",{children:[n+1==1&&r.jsx("td",{className:"border-[1px] border-gray-700 pl-1",rowSpan:o==null?void 0:o.length,children:"CV"}),r.jsx("td",{className:"border-[1px] border-gray-700 pl-1",children:p(e==null?void 0:e.floor)}),r.jsx("td",{className:"border-[1px] border-gray-700 pl-1",children:x(e==null?void 0:e.arvTotalPropTax)}),r.jsx("td",{className:"border-[1px] border-gray-700 pl-1",children:x(e==null?void 0:e.cvArvPropTax)})]}))),r.jsxs("tr",{children:[r.jsx("td",{className:"border-[1px] border-gray-700 pr-1 text-end",colSpan:2,children:"Total"}),r.jsx("td",{className:"border-[1px] border-gray-700 pl-1",children:x((w=l==null?void 0:l.total)==null?void 0:w.arvTotalPropTax)}),r.jsx("td",{className:"border-[1px] border-gray-700 pl-1",children:x((A=l==null?void 0:l.total)==null?void 0:A.cvTotalPropTax)})]})]})]})})]})};export{xr as default};
