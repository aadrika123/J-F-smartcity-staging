import{j as e}from"./mui-8e804a04.js";import{x as Dr,B as ar,n as l,y as re,C as Gr,A as ee,b as le}from"./index-19682a6e.js";import{P as se}from"./PropertyApiList-37c20837.js";import{r as d,f as xe}from"./router-87042356.js";import{T as Mr}from"./index.esm-f345aada.js";import{S as ce}from"./ServerErrorCard-d469daf8.js";import"./moment-fbc5633a.js";import"./react-09dd1212.js";import"./axios-97164839.js";import"./reactIcons-6a3b6da1.js";import"./redux-4db06ad6.js";import"./i18next-e99b4042.js";function ue(oe){var h,g,t,j,m,f,u,T,w,v,N,k,_,S,F,R,C,A,P,V,Q,H,q,L,E,z,B,U,W,I,G,M,O,Z,J,K,X,Y,$,D,a,rr,er,lr,sr,xr,cr,or,ir,dr,yr,pr,nr,br,hr,gr,tr,jr,mr,fr,ur,Tr,wr,vr,Nr,kr,_r,Sr,Fr,Rr,Cr,Ar,Pr,Vr,Qr,Hr,qr,Lr,Er,zr,Br,Ur,Wr,Ir;const[Or,y]=d.useState(!1);d.useState();const[Zr,p]=d.useState(!1),[s,Jr]=d.useState(),{id:Kr,type:n}=xe(),{api_getTcComparisonData:Xr}=se();let b;n=="agency"?b="Agency TC Comparison":b="ULB TC Comparison",Dr(b);const Yr=()=>{},$r=()=>{y(!0),p(!1);let r={verificationId:Kr};ee.post(Xr,r,le()).then(function(x){var o,i;console.log("tc comparison data list...",x==null?void 0:x.data),(o=x==null?void 0:x.data)!=null&&o.status?Jr((i=x==null?void 0:x.data)==null?void 0:i.data):p(!0),y(!1)}).catch(function(x){console.log("tc comparison data error...",x),p(!0),y(!1)})};return d.useEffect(()=>{$r()},[]),Or?e.jsx(e.Fragment,{children:e.jsx(ar,{})}):Zr?e.jsx(ce,{title:"Server is busy",desc:"Server is too busy to respond. Please try again later.",buttonText:"View Dashboard",buttonUrl:"/propertyDashboard"}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:" text-lg pb-4 md:py-4 text-gray-500",children:[e.jsxs("span",{children:["Verified By : ",e.jsx("span",{className:"font-semibold text-gray-800",children:l((h=s==null?void 0:s.employee_details)==null?void 0:h.user_name)})," "]}),e.jsxs("span",{className:"float-right",children:["Verification Date : ",e.jsx("span",{className:"font-semibold text-gray-800",children:re((g=s==null?void 0:s.employee_details)==null?void 0:g.date[0])})]})," "]}),e.jsx("div",{className:"w-full bg-white shadow-xl mb-6",children:e.jsx("div",{className:"py-4 rounded-lg shadow-lg p-4",children:e.jsxs("div",{className:"flex flex-col md:flex-row space-y-2 md:space-x-10  pl-4 md:items-center justify-center",children:[e.jsxs("div",{className:"flex-1 flex flex-col-reverse justify-center",children:[e.jsx("div",{className:"font-semibold text-md",children:l((t=s==null?void 0:s.saf_details)==null?void 0:t.assessment_type)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Assessment Type"})]}),e.jsxs("div",{className:"flex-1 flex flex-col-reverse justify-center",children:[e.jsx("div",{className:"font-bold text-sm",children:l((j=s==null?void 0:s.saf_details)==null?void 0:j.saf_no)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"SAF No."})]}),(s==null?void 0:s.holding_no)&&e.jsxs("div",{className:"flex-1 flex flex-col-reverse justify-center",children:[e.jsx("div",{className:"font-bold text-sm",children:l((m=s==null?void 0:s.saf_details)==null?void 0:m.holding_no)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Holding No."})]}),(s==null?void 0:s.pt_no)&&e.jsxs("div",{className:"flex-1 flex flex-col-reverse justify-center",children:[e.jsx("div",{className:"font-bold text-sm",children:l((f=s==null?void 0:s.saf_details)==null?void 0:f.pt_no)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"PT No."})]}),e.jsxs("div",{className:"flex-1 flex flex-col-reverse justify-center",children:[e.jsxs("div",{className:"font-semibold text-md",children:[l((u=s==null?void 0:s.saf_details)==null?void 0:u.holding_type)," "]}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Holding Type"})]}),e.jsxs("div",{className:"flex-1 flex flex-col-reverse justify-center",children:[e.jsx("div",{className:"font-bold text-sm",children:l((T=s==null?void 0:s.saf_details)==null?void 0:T.zone_mstr_id)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Zone"})]}),e.jsxs("div",{className:"flex-1 flex flex-col-reverse justify-center",children:[e.jsx("div",{className:"font-bold text-sm",children:l((w=s==null?void 0:s.saf_details)==null?void 0:w.prop_address)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Address"})]})]})})}),e.jsx("div",{className:" font-bold text-lg pb-4 md:py-4 text-gray-400",children:"Verification Details"}),e.jsx("div",{className:"w-full bg-white shadow-xl mb-6",children:e.jsx("div",{class:"relative overflow-x-auto shadow-md sm:rounded-lg",children:e.jsxs("table",{class:"w-full text-sm text-left text-gray-500 darks:text-gray-400",children:[e.jsx("thead",{class:"text-gray-700 capitalize darks:text-gray-400",children:e.jsxs("tr",{className:"border-b border-gray-200 bg-gray-50",children:[e.jsx("th",{scope:"col",class:"text-md px-6 py-3",children:"#"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Particular"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Self-Assessed"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Check"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Verification"})]})}),e.jsx("tbody",{children:(v=s==null?void 0:s.property_comparison)==null?void 0:v.map((r,x)=>e.jsxs("tr",{class:"border-b border-gray-200 ",children:[e.jsx("th",{scope:"row",class:"px-6 py-3 font-medium text-gray-900 whitespace-nowrap  darks:bg-gray-800",children:x+1}),e.jsx("th",{scope:"row",class:"px-6 py-3 font-medium text-gray-900 whitespace-nowrap  darks:bg-gray-800 border-l border-l-gray-200",children:l(r==null?void 0:r.key)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.according_application)}),e.jsxs("td",{class:"px-6 py-3 darks:bg-gray-800 border-l border-l-gray-200",children:[l(r==null?void 0:r.values)&&e.jsx(Gr,{className:"inline text-green-500 text-3xl ml-3"}),l(r==null?void 0:r.values)==!1&&e.jsx(Mr,{className:"inline text-red-500 text-5xl"})]}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.according_verification)})]}))})]})})}),e.jsx("div",{className:" font-bold text-lg pb-4 md:py-4 text-gray-400",children:"Floor Verified Details"}),e.jsx("div",{className:"w-full bg-white shadow-xl mb-6",children:e.jsx("div",{class:"relative overflow-x-auto shadow-md sm:rounded-lg",children:e.jsxs("table",{class:"w-full text-sm text-left text-gray-500 darks:text-gray-400",children:[e.jsx("thead",{class:"text-gray-700 capitalize darks:text-gray-400",children:e.jsxs("tr",{className:"border-b border-gray-200 bg-gray-50",children:[e.jsx("th",{scope:"col",class:"text-md px-6 py-3",children:"Floor No."}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Usage Type"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Occupany Type"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Construction Type"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Built Up Area (in sq ft.)"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Date of completion"})]})}),e.jsx("tbody",{children:(N=s==null?void 0:s.floor_comparison)==null?void 0:N.map(r=>{var x,o,i;return e.jsxs(e.Fragment,{children:[e.jsxs("tr",{className:"border-b border-gray-200 ",children:[e.jsx("td",{rowspan:"3",className:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.floar_name)}),e.jsx("td",{className:"px-6 py-3 border-l border-l-gray-200 font-semibold text-gray-900",children:"Self Assessed"}),(x=r==null?void 0:r.values)==null?void 0:x.map(c=>e.jsx("td",{className:"px-6 py-3 border-l border-l-gray-200",children:l(c==null?void 0:c.according_application)}))]}),e.jsxs("tr",{className:"border-b border-gray-200 ",children:[e.jsx("td",{className:"px-6 py-3 border-l border-l-gray-200 font-semibold text-gray-900",children:"Check"}),(o=r==null?void 0:r.values)==null?void 0:o.map(c=>e.jsxs("td",{className:"px-6 py-3 border-l border-l-gray-200",children:[(c==null?void 0:c.values)&&e.jsx(Gr,{className:"inline text-green-500 text-3xl ml-3"}),(c==null?void 0:c.values)==!1&&e.jsx(Mr,{className:"inline text-red-500 text-5xl"})]}))]}),e.jsxs("tr",{className:"border-b border-gray-200 ",children:[e.jsx("td",{className:"px-6 py-3 border-l border-l-gray-200 font-semibold text-gray-900",children:"Verification"}),(i=r==null?void 0:r.values)==null?void 0:i.map(c=>e.jsx("td",{className:"px-6 py-3 border-l border-l-gray-200",children:l(c==null?void 0:c.according_verification)}))]})]})})})]})})}),n=="agency"&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:" font-bold text-lg pb-4 md:py-4 text-gray-400",children:"Geo Tagging"}),e.jsx("div",{className:"w-full bg-white shadow-xl mb-6",children:e.jsx("div",{class:"relative overflow-x-auto shadow-md sm:rounded-lg",children:e.jsxs("table",{class:"w-full text-sm text-left text-gray-500 darks:text-gray-400",children:[e.jsx("thead",{class:"text-gray-700 capitalize darks:text-gray-400",children:e.jsxs("tr",{className:"border-b border-gray-200 bg-gray-50",children:[e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Location"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Image"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Latitude"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Longitude"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"View on google map"})]})}),e.jsx("tbody",{children:(k=s==null?void 0:s.geoTagging)==null?void 0:k.map(r=>e.jsxs("tr",{class:"border-b border-gray-200 ",children:[e.jsx("th",{scope:"row",class:"px-6 py-3 font-medium text-gray-900 whitespace-nowrap  darks:bg-gray-800",children:l(r==null?void 0:r.direction_type)}),e.jsx("th",{scope:"row",class:"px-6 py-3 font-medium text-gray-900 whitespace-nowrap  darks:bg-gray-800 border-l border-l-gray-200",children:e.jsx("span",{onClick:()=>Yr(r==null?void 0:r.imageUrl),className:"cursor-pointer",children:e.jsx("img",{className:"w-40",src:l(r==null?void 0:r.paths)})})}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.latitude)}),e.jsx("td",{class:"px-6 py-3 darks:bg-gray-800 border-l border-l-gray-200",children:l(r==null?void 0:r.longitude)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.mapUrl)})]}))})]})})})]}),n=="ulb"&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:" font-bold text-lg py-1 px-4 text-white bg-indigo-500 mt-10",children:"Quarterly Tax Details"}),e.jsxs(e.Fragment,{children:[e.jsx("div",{className:" font-bold text-lg pb-4 md:py-1 text-gray-800 bg-white mb-5 pl-5 mt-10",children:"According to Assessment"}),e.jsx("div",{className:"w-full bg-white shadow-xl mb-6",children:e.jsx("div",{class:"relative overflow-x-auto shadow-md sm:rounded-lg",children:e.jsxs("table",{class:"w-full text-sm text-left text-gray-500 darks:text-gray-400",children:[e.jsx("thead",{class:"text-gray-700 capitalize darks:text-gray-400",children:e.jsxs("tr",{className:"border-b border-gray-200 bg-gray-50",children:[e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Effect From"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"ARV/CV"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Holding Tax"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Water Tax"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Education Cess"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Health Cess"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Latrine Tax"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"RWH Penalty"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Quarterly Tax"})]})}),e.jsxs("tbody",{children:[((F=(S=(_=s==null?void 0:s.Tax)==null?void 0:_.according_application)==null?void 0:S.details)==null?void 0:F.RuleSet1)&&((V=(P=(A=(C=(R=s==null?void 0:s.Tax)==null?void 0:R.according_application)==null?void 0:C.details)==null?void 0:A.RuleSet1)==null?void 0:P.totalQtrTaxes)==null?void 0:V.map(r=>e.jsxs("tr",{class:"border-b border-gray-200 ",children:[e.jsx("th",{scope:"row",class:"px-6 py-3 font-medium text-gray-900 whitespace-nowrap  darks:bg-gray-800",children:l(r==null?void 0:r.effectingFrom)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.arv)}),e.jsx("td",{class:"px-6 py-3 darks:bg-gray-800 border-l border-l-gray-200",children:l(r==null?void 0:r.holdingTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.waterTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.educationTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.healthTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.latrineTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.rwhPenalty)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.quaterlyTax)})]}))),((q=(H=(Q=s==null?void 0:s.Tax)==null?void 0:Q.according_application)==null?void 0:H.details)==null?void 0:q.RuleSet2)&&((U=(B=(z=(E=(L=s==null?void 0:s.Tax)==null?void 0:L.according_application)==null?void 0:E.details)==null?void 0:z.RuleSet2)==null?void 0:B.totalQtrTaxes)==null?void 0:U.map(r=>e.jsxs("tr",{class:"border-b border-gray-200 ",children:[e.jsx("th",{scope:"row",class:"px-6 py-3 font-medium text-gray-900 whitespace-nowrap  darks:bg-gray-800",children:l(r==null?void 0:r.effectingFrom)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.arv)}),e.jsx("td",{class:"px-6 py-3 darks:bg-gray-800 border-l border-l-gray-200",children:l(r==null?void 0:r.holdingTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.waterTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.educationTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.healthTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.latrineTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.rwhPenalty)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.quaterlyTax)})]}))),((G=(I=(W=s==null?void 0:s.Tax)==null?void 0:W.according_application)==null?void 0:I.details)==null?void 0:G.RuleSet3)&&((K=(J=(Z=(O=(M=s==null?void 0:s.Tax)==null?void 0:M.according_application)==null?void 0:O.details)==null?void 0:Z.RuleSet3)==null?void 0:J.totalQtrTaxes)==null?void 0:K.map(r=>e.jsxs("tr",{class:"border-b border-gray-200 ",children:[e.jsx("th",{scope:"row",class:"px-6 py-3 font-medium text-gray-900 whitespace-nowrap  darks:bg-gray-800",children:l(r==null?void 0:r.effectingFrom)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.arv)}),e.jsx("td",{class:"px-6 py-3 darks:bg-gray-800 border-l border-l-gray-200",children:l(r==null?void 0:r.holdingTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.waterTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.educationTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.healthTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.latrineTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.rwhPenalty)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.quaterlyTax)})]})))]})]})})})]}),e.jsxs(e.Fragment,{children:[e.jsx("div",{className:" font-bold text-lg pb-4 md:py-1 text-gray-800 bg-white mb-5 pl-5",children:"According to Verification"}),e.jsx("div",{className:"w-full bg-white shadow-xl mb-6",children:e.jsx("div",{class:"relative overflow-x-auto shadow-md sm:rounded-lg",children:e.jsxs("table",{class:"w-full text-sm text-left text-gray-500 darks:text-gray-400",children:[e.jsx("thead",{class:"text-gray-700 capitalize darks:text-gray-400",children:e.jsxs("tr",{className:"border-b border-gray-200 bg-gray-50",children:[e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Effect From"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"ARV/CV"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Holding Tax"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Water Tax"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Education Cess"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Health Cess"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Latrine Tax"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"RWH Penalty"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Quarterly Tax"})]})}),e.jsxs("tbody",{children:[(($=(Y=(X=s==null?void 0:s.Tax)==null?void 0:X.according_verification)==null?void 0:Y.details)==null?void 0:$.RuleSet1)&&((lr=(er=(rr=(a=(D=s==null?void 0:s.Tax)==null?void 0:D.according_verification)==null?void 0:a.details)==null?void 0:rr.RuleSet1)==null?void 0:er.totalQtrTaxes)==null?void 0:lr.map(r=>e.jsxs("tr",{class:"border-b border-gray-200 ",children:[e.jsx("th",{scope:"row",class:"px-6 py-3 font-medium text-gray-900 whitespace-nowrap  darks:bg-gray-800",children:l(r==null?void 0:r.effectingFrom)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.arv)}),e.jsx("td",{class:"px-6 py-3 darks:bg-gray-800 border-l border-l-gray-200",children:l(r==null?void 0:r.holdingTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.waterTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.educationTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.healthTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.latrineTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.rwhPenalty)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.quaterlyTax)})]}))),((cr=(xr=(sr=s==null?void 0:s.Tax)==null?void 0:sr.according_verification)==null?void 0:xr.details)==null?void 0:cr.RuleSet2)&&((pr=(yr=(dr=(ir=(or=s==null?void 0:s.Tax)==null?void 0:or.according_verification)==null?void 0:ir.details)==null?void 0:dr.RuleSet2)==null?void 0:yr.totalQtrTaxes)==null?void 0:pr.map(r=>e.jsxs("tr",{class:"border-b border-gray-200 ",children:[e.jsx("th",{scope:"row",class:"px-6 py-3 font-medium text-gray-900 whitespace-nowrap  darks:bg-gray-800",children:l(r==null?void 0:r.effectingFrom)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.arv)}),e.jsx("td",{class:"px-6 py-3 darks:bg-gray-800 border-l border-l-gray-200",children:l(r==null?void 0:r.holdingTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.waterTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.educationTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.healthTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.latrineTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.rwhPenalty)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.quaterlyTax)})]}))),((hr=(br=(nr=s==null?void 0:s.Tax)==null?void 0:nr.according_verification)==null?void 0:br.details)==null?void 0:hr.RuleSet3)&&((fr=(mr=(jr=(tr=(gr=s==null?void 0:s.Tax)==null?void 0:gr.according_verification)==null?void 0:tr.details)==null?void 0:jr.RuleSet3)==null?void 0:mr.totalQtrTaxes)==null?void 0:fr.map(r=>e.jsxs("tr",{class:"border-b border-gray-200 ",children:[e.jsx("th",{scope:"row",class:"px-6 py-3 font-medium text-gray-900 whitespace-nowrap  darks:bg-gray-800",children:l(r==null?void 0:r.effectingFrom)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.arv)}),e.jsx("td",{class:"px-6 py-3 darks:bg-gray-800 border-l border-l-gray-200",children:l(r==null?void 0:r.holdingTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.waterTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.educationTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.healthTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.latrineTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.rwhPenalty)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.quaterlyTax)})]})))]})]})})})]}),e.jsxs(e.Fragment,{children:[e.jsx("div",{className:" font-bold text-lg pb-4 md:py-1 text-gray-800 bg-white mb-5 pl-5",children:"Differences :"}),e.jsx("div",{className:"w-full bg-white shadow-xl mb-6",children:e.jsx("div",{class:"relative overflow-x-auto shadow-md sm:rounded-lg",children:e.jsxs("table",{class:"w-full text-sm text-left text-gray-500 darks:text-gray-400",children:[e.jsx("thead",{class:"text-gray-700 capitalize darks:text-gray-400",children:e.jsxs("tr",{className:"border-b border-gray-200 bg-gray-50",children:[e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Effect From"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"ARV/CV"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Holding Tax"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Water Tax"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Education Cess"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Health Cess"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Latrine Tax"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"RWH Penalty"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Quarterly Tax"})]})}),e.jsxs("tbody",{children:[((wr=(Tr=(ur=s==null?void 0:s.Tax)==null?void 0:ur.compairTax)==null?void 0:Tr.details)==null?void 0:wr.RuleSet1)&&((Sr=(_r=(kr=(Nr=(vr=s==null?void 0:s.Tax)==null?void 0:vr.compairTax)==null?void 0:Nr.details)==null?void 0:kr.RuleSet1)==null?void 0:_r.totalQtrTaxes)==null?void 0:Sr.map(r=>e.jsxs("tr",{class:"border-b border-gray-200 ",children:[e.jsx("th",{scope:"row",class:"px-6 py-3 font-medium text-gray-900 whitespace-nowrap  darks:bg-gray-800",children:l(r==null?void 0:r.effectingFrom)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.arv)}),e.jsx("td",{class:"px-6 py-3 darks:bg-gray-800 border-l border-l-gray-200",children:l(r==null?void 0:r.holdingTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.waterTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.educationTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.healthTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.latrineTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.rwhPenalty)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.quaterlyTax)})]}))),((Cr=(Rr=(Fr=s==null?void 0:s.Tax)==null?void 0:Fr.compairTax)==null?void 0:Rr.details)==null?void 0:Cr.RuleSet2)&&((Hr=(Qr=(Vr=(Pr=(Ar=s==null?void 0:s.Tax)==null?void 0:Ar.compairTax)==null?void 0:Pr.details)==null?void 0:Vr.RuleSet2)==null?void 0:Qr.totalQtrTaxes)==null?void 0:Hr.map(r=>e.jsxs("tr",{class:"border-b border-gray-200 ",children:[e.jsx("th",{scope:"row",class:"px-6 py-3 font-medium text-gray-900 whitespace-nowrap  darks:bg-gray-800",children:l(r==null?void 0:r.effectingFrom)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.arv)}),e.jsx("td",{class:"px-6 py-3 darks:bg-gray-800 border-l border-l-gray-200",children:l(r==null?void 0:r.holdingTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.waterTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.educationTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.healthTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.latrineTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.rwhPenalty)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.quaterlyTax)})]}))),((Er=(Lr=(qr=s==null?void 0:s.Tax)==null?void 0:qr.compairTax)==null?void 0:Lr.details)==null?void 0:Er.RuleSet3)&&((Ir=(Wr=(Ur=(Br=(zr=s==null?void 0:s.Tax)==null?void 0:zr.compairTax)==null?void 0:Br.details)==null?void 0:Ur.RuleSet3)==null?void 0:Wr.totalQtrTaxes)==null?void 0:Ir.map(r=>e.jsxs("tr",{class:"border-b border-gray-200 ",children:[e.jsx("th",{scope:"row",class:"px-6 py-3 font-medium text-gray-900 whitespace-nowrap  darks:bg-gray-800",children:l(r==null?void 0:r.effectingFrom)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.arv)}),e.jsx("td",{class:"px-6 py-3 darks:bg-gray-800 border-l border-l-gray-200",children:l(r==null?void 0:r.holdingTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.waterTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.educationTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.healthTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.latrineTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.rwhPenalty)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.quaterlyTax)})]})))]})]})})})]})]}),e.jsx("div",{className:"w-full h-40 md:none"})]})}export{ue as default};
