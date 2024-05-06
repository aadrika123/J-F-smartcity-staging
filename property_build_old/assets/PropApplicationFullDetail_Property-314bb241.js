import{r as i,u as S,bt as B,j as e,p as I,bh as T,A as k,aH as A,w as H,k as M,B as O,S as E,n as d,c2 as R,M as n,i as a,c4 as u,bA as $,P as L}from"./index-c73b3921.js";import{T as W}from"./TopTabs-da62851e.js";import{C as U}from"./CitizenApplyApiList-039263db.js";function Y(c){var b;const[y,N]=i.useState(null),[s,v]=i.useState(!1),[j,f]=i.useState(!1),h=S(),{id:o}=B(),{checkFormStatus:g}=U(),w=(t,m)=>{N(m),v(t)},_=(t,m)=>{if(!["Re Assessment","Mutation","Bifurcation","Concession","Harvesting","Objection"].includes(t)){h(`${m}/${o}`);return}let x;t=="Re Assessment"&&(x={type:"Reassesment",propertyId:o}),t=="Mutation"&&(x={type:"Mutation",propertyId:o}),t=="Bifurcation"&&(x={type:"Bifurcation",propertyId:o}),t=="Concession"&&(x={type:"Concession",propertyId:o}),t=="Harvesting"&&(x={type:"Harvesting",propertyId:o}),t=="Objection"&&(x={type:"Objection",propertyId:o}),f(!0),k.post(g,x,A()).then(l=>{var p,P,z,C;(P=(p=l==null?void 0:l.data)==null?void 0:p.data)!=null&&P.inWorkflow?w(!0,(C=(z=l==null?void 0:l.data)==null?void 0:z.data)==null?void 0:C.message):h(`${m}/${o}`)}).catch(l=>{}).finally(()=>f(!1))};return e.jsxs(e.Fragment,{children:[s&&e.jsx(I,{activateBottomErrorCard:w,errorTitle:y}),j&&e.jsx(T,{color:"#818cf8"}),!j&&e.jsx("div",{className:"flex gap-y-4 flex-wrap justify-center flex-row md:py-2 w-full items-center sm:justify-end",children:(b=c==null?void 0:c.permissionData)==null?void 0:b.map((t,m)=>e.jsx("button",{className:`cypress_button${m} mr-4 bg-white border border-indigo-500 text-indigo-500 px-4 py-1 shadow-lg hover:scale-105 rounded-sm text-sm md:text-base hover:bg-indigo-500 hover:text-white`,onClick:()=>{(t==null?void 0:t.action_name)=="View Saf"?h(`${t==null?void 0:t.endpoint}/${c==null?void 0:c.safId}`):_(t==null?void 0:t.action_name,t==null?void 0:t.endpoint)},children:t==null?void 0:t.lebel}))})]})}function G(){var t,m;const{id:c}=B();S(),H();const{api_getPropHoldingDetailsById:y}=$(),{api_getPermissionByUser:N}=L(),[s,v]=i.useState(),[j,f]=i.useState(!1),[h,o]=i.useState(null),[g,w]=i.useState(!1);M("Holding Details");const _=()=>{w(!1),f(!0),k.post(y,{propertyId:c},A()).then(function(r){var x,l;(x=r==null?void 0:r.data)!=null&&x.status?(v((l=r==null?void 0:r.data)==null?void 0:l.data),f(!1)):w(!0)}).catch(function(r){w(!0),f(!1)})},b=()=>{const r={module:1};k.post(N,r,A()).then(function(x){var l;o((l=x==null?void 0:x.data)==null?void 0:l.data)}).catch(function(x){})};return i.useEffect(()=>{_(),b()},[]),j?e.jsx(e.Fragment,{children:e.jsx(O,{})}):g?e.jsx(E,{title:"Server is busy",desc:"Server is too busy to respond. Please try again later.",buttonText:"View Dashboard",buttonUrl:"/propertyDashboard"}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-2 container mx-auto w-full overflow-x-auto",children:e.jsxs("div",{className:"col-span-12 rounded-lg p-4",children:[(s==null?void 0:s.active_status)==1&&e.jsxs(e.Fragment,{children:[e.jsx(W,{title:`Holding No. - ${d(s==null?void 0:s.new_holding_no)} `,type:"holding",id:c,safNo:"",active:"property"}),e.jsx("div",{className:"mt-2 sm:text-right",children:e.jsx(Y,{permissionData:h,safId:s==null?void 0:s.saf_id})})]}),(s==null?void 0:s.active_status)==0&&e.jsx("div",{className:"pl-4",children:e.jsxs("span",{className:"bg-red-500 text px-4 py-1 justify-center items-center font-semibold text-white shadow-xl",children:[e.jsx(R,{className:"inline"})," This holding has been deactivated"]})}),e.jsxs("div",{className:"p-2 md:p-4",children:[e.jsxs("div",{className:"",children:[e.jsxs("h1",{className:"px-1 font-semibold font-serif  text-gray-500",children:[e.jsx(n,{className:"inline"})," Basic Details"]}),e.jsxs("div",{className:"py-6 mt-2 bg-white rounded-lg shadow-xl p-4",children:[e.jsxs("div",{className:"flex md:flex-row flex-col gap-y-2 md:space-x-5 pl-4  ",children:[e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:d(s==null?void 0:s.new_holding_no)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:"Holding no."})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:d(s==null?void 0:s.old_ward_no)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:"Old Ward No."})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-semibold text-lg",children:d(s==null?void 0:s.new_ward_no)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:"New Ward No"})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-semibold text-md",children:d(s==null?void 0:s.ownership_type)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:"Ownership Type"})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:d(s==null?void 0:s.property_type)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:"Property Type"})]})]}),e.jsxs("div",{className:"flex md:flex-row flex-col gap-y-2 md:space-x-5 pl-4  ",children:[e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:d(s==null?void 0:s.holding_type)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:"Holding Type"})]}),e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"}),e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"}),e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"}),e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"})]}),(s==null?void 0:s.apartment_code)&&e.jsxs("div",{className:"flex md:flex-row flex-col gap-y-2 md:space-x-5 pl-4 ",children:[e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsxs("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:[d(s==null?void 0:s.apartment_name)," , ",d(s==null?void 0:s.corr_state)]}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:"Apartment Name"})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsxs("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:[d(s==null?void 0:s.apartment_code)," , ",d(s==null?void 0:s.corr_state)]}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:"Apartment Code"})]}),e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"}),e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"}),e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"}),e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"})]})]})]}),e.jsxs("h1",{className:"px-1 font-semibold font-serif mt-10 text-gray-500",children:[e.jsx(n,{className:"inline"})," Property Address & Details"]}),e.jsxs("div",{className:"py-6 mt-2 bg-white rounded-lg shadow-xl p-4",children:[e.jsxs("div",{className:"flex md:flex-row flex-col gap-y-2 md:space-x-10 pl-4 ",children:[e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:d(s==null?void 0:s.khata_no)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:"Khata No."})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-semibold text-md",children:d(s==null?void 0:s.plot_no)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:"Plot No"})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-semibold text-md",children:d(s==null?void 0:s.village_mauja_name)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:"Village/Mauja Name"})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:d(s==null?void 0:s.area_of_plot)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:"Area of Plot(Dismil)"})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:d(s==null?void 0:s.road_width)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:"Road Width(ft)"})]})]}),e.jsx("div",{className:"flex md:flex-row flex-col gap-y-2 md:space-x-5 pl-4 ",children:e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsxs("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:[d(s==null?void 0:s.prop_address)," , ",d(s==null?void 0:s.prop_state)]}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:"Property Address"})]})}),e.jsx("div",{className:"flex md:flex-row flex-col gap-y-2 md:space-x-5 pl-4 ",children:e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:d(s==null?void 0:s.corr_address)=="NA"&&d((s==null?void 0:s.prop_address)!="NA")?"Same as property address":e.jsxs(e.Fragment,{children:[d(s==null?void 0:s.corr_address)=="NA"&&d(s==null?void 0:s.corr_address)=="NA"?"NA":e.jsxs(e.Fragment,{children:[d(s==null?void 0:s.corr_address),", ",d(s==null?void 0:s.corr_state)]})," "]})}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:"Corresponding Address"})]})}),e.jsx("div",{})]}),e.jsxs("div",{className:"mt-10 md:w-auto w-[100vw] overflow-x-auto pr-4",children:[e.jsxs("h1",{className:"px-1 font-semibold font-serif text-gray-500",children:[e.jsx(n,{className:"inline"})," Owner Details"]}),e.jsxs("table",{className:"min-w-full leading-normal mt-2 bg-white rounded-lg shadow-xl p-4",children:[e.jsx("thead",{className:"font-bold text-left text-sm border text-gray-800 bg-white",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"#"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Owner Name"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Gender"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"DOB"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Guardian Name"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Relation"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Mobile No."}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Aadhar"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"PAN "}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"email "}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Is-Armed-Force "}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Is-Specially-Abled? "})]})}),e.jsx("tbody",{className:"text-sm",children:e.jsx(e.Fragment,{children:(t=s==null?void 0:s.owners)==null?void 0:t.map(r=>e.jsxs("tr",{className:"bg-white shadow-xl border-b border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:"#"}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:d(r==null?void 0:r.owner_name)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:d(r==null?void 0:r.gender)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:a(r==null?void 0:r.dob)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:d(r==null?void 0:r.guardian_name)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:d(r==null?void 0:r.relation_type)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:d(r==null?void 0:r.mobile_no)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:d(r==null?void 0:r.aadhar_no)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:d(r==null?void 0:r.pan_no)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:d(r==null?void 0:r.email)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:d(r==null?void 0:r.is_armed_force)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:d(r==null?void 0:r.is_specially_abled)})]}))})})]})]}),e.jsxs("h1",{className:"px-1 font-semibold font-serif mt-10 text-gray-500",children:[e.jsx(n,{className:"inline"})," Electricity Details"]}),e.jsx("div",{className:"py-6  mt-2 bg-white shadow-xl rounded-lg p-4",children:e.jsxs("div",{className:"flex md:flex-row flex-col gap-y-2 md:space-x-10 pl-4 ",children:[e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:d(s==null?void 0:s.elect_consumer_no)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:"Electricity K. No"})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-semibold text-md",children:d(s==null?void 0:s.elect_acc_no)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:"ACC No."})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-semibold text-md",children:d(s==null?void 0:s.elect_bind_book_no)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:"BIND/BOOK No."})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:d(s==null?void 0:s.elect_cons_category)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:"Electricity Consumer Category"})]}),e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"})]})}),e.jsxs("h1",{className:"px-1 font-semibold font-serif mt-10 text-gray-500",children:[e.jsx(n,{className:"inline"})," Building Details"]}),e.jsx("div",{className:"py-6  mt-2 bg-white shadow-xl rounded-lg p-4",children:e.jsxs("div",{className:"flex md:flex-row flex-col gap-y-2 md:space-x-5 pl-4 ",children:[e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:d(s==null?void 0:s.building_plan_approval_no)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:"Building Plan Approval No."})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-semibold text-md",children:a(s==null?void 0:s.building_plan_approval_date)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:"Building Plan Approval Date"})]}),e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"}),e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"}),e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"})]})}),e.jsxs("h1",{className:"px-1 font-semibold font-serif mt-10 text-gray-500",children:[e.jsx(n,{className:"inline"})," Water Details"]}),e.jsx("div",{className:"py-6  mt-2 bg-white shadow-xl rounded-lg p-4",children:e.jsxs("div",{className:"flex md:flex-row flex-col gap-y-2 md:space-x-5 pl-4 ",children:[e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-semibold text-md",children:d(s==null?void 0:s.water_conn_no)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:"Water Consumer No."})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:a(s==null?void 0:s.water_conn_date)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:"Water Connection Date"})]}),e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"}),e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"}),e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"})]})}),e.jsxs("div",{className:"mt-10 md:w-auto w-[100vw] overflow-x-auto  pr-6",children:[e.jsxs("h1",{className:"px-1 font-semibold font-serif text-gray-500 ",children:[e.jsx(n,{className:"inline"})," Floor Details"]}),e.jsxs("table",{className:"min-w-full leading-normal mt-2 bg-white rounded-lg shadow-xl",children:[e.jsx("thead",{className:"font-bold text-left border text-gray-800 text-xs bg-white",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"#"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Floor "}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Usage Type"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Occupancy Type"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Construction Type"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Built Up Area(sqt)"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"From Date"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Upto Date"})]})}),e.jsx("tbody",{className:"text-sm",children:(m=s==null?void 0:s.floors)==null?void 0:m.map((r,x)=>e.jsxs("tr",{className:"bg-white shadow-xl border-b border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:x+1}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:d(r==null?void 0:r.floor_name)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:d(r==null?void 0:r.usage_type)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:d(r==null?void 0:r.occupancy_type)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:d(r==null?void 0:r.construction_type)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:d(r==null?void 0:r.builtup_area)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:a(r==null?void 0:r.date_from)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:a(r==null?void 0:r.date_upto)})]}))})]})]}),e.jsxs("h1",{className:"px-1 font-semibold font-serif text-gray-500 mt-10",children:[e.jsx(n,{className:"inline"})," Additional Details"]}),e.jsxs("div",{className:"py-6 mt-2 bg-white rounded-lg shadow-xl p-4",children:[e.jsxs("div",{className:"flex md:flex-row flex-col gap-y-2 md:space-x-5 pl-4 ",children:[e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:s!=null&&s.is_mobile_tower?"Yes":"No"}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:"Property has Mobile Tower(s) ?"})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsxs("div",{className:"md:w-auto w-[50%] font-semibold text-md",children:[s!=null&&s.is_hoarding_board?"Yes":"No"," "]}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:"Property has Hoarding Board(s) ?"})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-semibold text-md",children:s!=null&&s.is_petrol_pump?"Yes":"No"}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:"Is property a Petrol Pump ?"})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:s!=null&&s.is_water_harvesting?"Yes":"No"}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:"Rainwater harvesting provision ?"})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:d(s==null?void 0:s.zone)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:"Zone"})]})]}),e.jsxs("div",{className:"flex md:flex-row flex-col gap-y-2 md:space-x-5 pl-4 ",children:[e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:(s==null?void 0:s.is_mobile_tower)&&u(s==null?void 0:s.tower_area)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:(s==null?void 0:s.is_mobile_tower)&&"Mobile Tower Area"})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsxs("div",{className:"md:w-auto w-[50%] font-semibold text-md",children:[(s==null?void 0:s.is_hoarding_board)&&u(s==null?void 0:s.hoarding_area)," "]}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:(s==null?void 0:s.is_hoarding_board)&&"Hoarding Area"})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-semibold text-md",children:(s==null?void 0:s.is_petrol_pump)&&u(s==null?void 0:s.under_ground_area)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:(s==null?void 0:s.is_petrol_pump)&&"Petrol Pump Area"})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:(s==null?void 0:s.is_water_harvesting)&&a(s==null?void 0:s.rwh_date_from)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:(s==null?void 0:s.is_water_harvesting)&&"Rainwater harvesting Construction Date"})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm"}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs"})]})]}),e.jsxs("div",{className:"flex md:flex-row flex-col gap-y-2 md:space-x-5 pl-4 ",children:[e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:(s==null?void 0:s.is_mobile_tower)&&a(s==null?void 0:s.tower_installation_date)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:(s==null?void 0:s.is_mobile_tower)&&"Mobile Tower Installation Date"})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsxs("div",{className:"md:w-auto w-[50%] font-semibold text-md",children:[(s==null?void 0:s.is_hoarding_board)&&a(s==null?void 0:s.hoarding_installation_date)," "]}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:(s==null?void 0:s.is_hoarding_board)&&"Hoarding Installation Date"})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-semibold text-md",children:(s==null?void 0:s.is_petrol_pump)&&a(s==null?void 0:s.petrol_pump_completion_date)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:(s==null?void 0:s.is_petrol_pump)&&"Petrol Pump Construction Date"})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm"}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs"})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm"}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs"})]})]})]})]})]})}),e.jsx("div",{className:"w-full h-60"})]})}export{G as default};
