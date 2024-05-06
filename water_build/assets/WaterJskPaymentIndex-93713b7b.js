import{v as te,m as $,j as e,o as x,k as t,$ as ne,R as se,l as m,a0 as ce,x as J,H as K,W as Q,y as le,z as h,B as re,q as X,a1 as de,D as ie,A as me}from"./index-db77734d.js";function ae(){const{id:d}=te();console.log("param document",d);const f=$();return e(x,{children:e("div",{className:"bg-gray-200   h-screen",children:e("div",{className:" w-2/6 mx-auto  bg-white p-12",children:t("div",{className:"grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-1 mx-auto ",children:[e("div",{children:e("img",{src:"https://cdn-icons-png.flaticon.com/512/2169/2169862.png",className:"h-40 mx-auto"})}),e("div",{className:"ml-32 -mt-10",children:e("img",{src:"https://cdn-icons-png.flaticon.com/512/5610/5610944.png",className:"h-12 mx-auto opacity-75"})}),e("div",{children:e("h1",{className:"text-center text-2xl text-gray-600",children:"Payment Successful"})}),e("div",{children:t("h1",{className:"text-center text-sm text-gray-500",children:["Your payment is  successful!",e("br",{})," Now you upload your Document"]})}),t("div",{className:"mx-auto flex flex-row space-x-4",children:[e("button",{className:"w-32 text-xs p-3 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-sky-400 rounded-md hover:bg-sky-600 focus:outline-none focus:bg-sky-600",onClick:()=>f(`/safdocumentupload/${d}`),children:"Upload Document"}),e("button",{className:"w-32 text-xs mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-sky-400 rounded-md hover:bg-sky-600 focus:outline-none focus:bg-sky-600",onClick:()=>f("/dashboardEntry"),children:"Dashboard"})]})]})})})})}const he={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}};ne.setAppElement("#root");function oe(d){const[f,y]=se.useState(!1);m.useEffect(()=>{n()},[]);function n(){y(!0)}function N(){}function u(){y(!1),d.closeModal(!1)}return console.log("props?.connId===",d==null?void 0:d.connId),e("div",{children:t(ne,{isOpen:f,onAfterOpen:N,onRequestClose:u,style:he,contentLabel:"Example Modal",children:[e("div",{className:"flex flex-col-reverse max-sm:mt-20"}),e("div",{children:t("button",{className:"absolute  top-1 hover:bg-gray-300 bg-gray-200 max-sm:mt-20 max-sm:ml-5",onClick:u,children:[" ",e(ce,{size:25})," "]})}),(d==null?void 0:d.connId)==1&&e(x,{children:t("div",{className:"flex justify-center mt-3 ",children:[e("style",{children:`
                table {
                  border: 1px solid #b3adad;
                  border-collapse: collapse;
                }
        
                table th {
                  background: #a096ee;
                  color: #141414;
                }
        
                table td {
                  border: 1px solid #b3adad;
                  text-align: center;
                  background: #ffffff;
                  color: #313030;
                }
                `}),e("h1",{className:"absolute top-0 max-sm:mt-20 pt-2 ",children:"New Connection Chart"}),t("table",{className:"text-xs",children:[t("thead",{children:[t("tr",{children:[e("th",{className:"border-r border-black"}),e("th",{className:"border-r border-black"}),e("th",{className:"border-r border-black"}),e("th",{className:"border-b border-black",children:e("pre",{children:"    New Connection"})}),e("th",{className:"border-b border-black",children:e("pre",{className:"flex justify-start",children:"Fee"})})]}),t("tr",{children:[e("th",{className:"border-r border-black",children:"RATE CODE"}),e("th",{className:"border-r border-black",children:"CONNECTION TYPE"}),e("th",{className:"border-r border-black",children:"CATEGORY"}),e("th",{className:"border-r border-black",children:"BUILT-UP-AREA"}),e("th",{children:"AMOUNT"})]})]}),t("tbody",{children:[t("tr",{children:[e("td",{children:"WCC001"}),t("td",{className:"uppercase",children:["RESIDENTIAL BUILDING WITH ",e("br",{}),"HOLDING (OLD PIPE LINE/ ",e("br",{})," NEW PIPE LINE) For"]}),t("td",{children:["DOMESTIC APL ",e("br",{})," CATEGORY"]}),e("td",{style:{padding:"0"},children:t("table",{children:[e("tr",{children:e("td",{children:"0-1000 Square feet"})}),e("tr",{children:e("td",{children:"1001-3000 Square feet"})}),e("tr",{children:e("td",{children:"3001-5000 Square feet"})}),e("tr",{children:e("td",{children:"Above 5000 Square feet"})})]})}),e("td",{style:{padding:"0"},children:t("table",{children:[e("tr",{children:e("td",{className:"font-semibold",children:"  Rs-7000    "})}),e("tr",{children:e("td",{className:"font-semibold",children:"Rs-14000"})}),e("tr",{children:e("td",{className:"font-semibold",children:"Rs-28000"})}),e("tr",{children:e("td",{className:"font-semibold",children:"Rs-42000"})})]})})]}),t("tr",{children:[e("td",{children:"WCC003"}),t("td",{children:["RESIDENTIAL BUILDING ",e("br",{})," WITH (OLD PIPE LINE/ ",e("br",{})," NEW PIPE LINE) For"]}),e("td",{children:"DOMESTIC BPL CATEGORY"}),e("td",{children:"-"}),e("td",{className:"font-semibold",children:"00.00"})]}),t("tr",{children:[e("td",{children:"WCC005"}),e("td",{children:"APARTMENT"}),e("td",{children:"APARTMENT"}),e("td",{style:{padding:"0"},children:t("table",{children:[e("tr",{children:e("td",{children:"0-1000 Square feet"})}),e("tr",{children:e("td",{children:"1001-3000 Square feet"})}),e("tr",{children:e("td",{children:"3001-5000 Square feet"})}),e("tr",{children:e("td",{children:"Above 5000 Square feet"})})]})}),e("td",{style:{padding:"0"},children:t("table",{children:[e("tr",{children:e("td",{className:"font-semibold",children:"  Rs-7000    "})}),e("tr",{children:e("td",{className:"font-semibold",children:"Rs-14000"})}),e("tr",{children:e("td",{className:"font-semibold",children:"Rs-28000"})}),e("tr",{children:e("td",{className:"font-semibold",children:"Rs-42000"})})]})})]}),t("tr",{children:[e("td",{children:"WCC007"}),t("td",{children:["GOVERNMENT / INSTITUTIONAL ",e("br",{})," WITH HOLDING"]}),e("td",{children:"GOVERNMENT / INSTITUTIONAL"}),e("td",{children:"-"}),e("td",{className:"font-semibold",children:"Rs.26/ Sq.ft."})]}),t("tr",{children:[e("td",{children:"WCC009"}),t("td",{children:["COMMERCIAL WITH ",e("br",{})," HOLDING"]}),e("td",{children:"COMMERCIAL"}),e("td",{children:"-"}),e("td",{className:"font-semibold",children:"Rs.26/ Sq.ft."})]}),t("tr",{children:[e("td",{children:"WCC0011"}),e("td",{children:"SSI UNIT"}),e("td",{children:"SSI UNIT"}),e("td",{children:"-"}),e("td",{className:"font-semibold",children:"Rs.26/ Sq.ft."})]}),t("tr",{children:[e("td",{children:"WCC0013"}),t("td",{children:["OTHER THAN ",e("br",{})," SSI UNIT"]}),e("td",{children:"OTHER THAN SSI UNIT"}),e("td",{children:"-"}),e("td",{className:"font-semibold",children:"Rs.26/ Sq.ft."})]})]})]})]})}),(d==null?void 0:d.connId)==2&&e(x,{children:t("div",{className:"flex justify-center mt-3 ",children:[e("style",{children:`
                    table {
                      border: 1px solid #b3adad;
                      border-collapse: collapse;
                    }
            
                    table th {
                      background: #a096ee;
                      color: #141414;
                    }
            
                    table td {
                      border: 1px solid #b3adad;
                      text-align: center;
                      background: #ffffff;
                      color: #313030;
                    }
                    `}),e("h1",{className:"absolute top-0",children:"Regularization Chart"}),t("table",{className:"text-xs",children:[t("thead",{children:[t("tr",{children:[e("th",{className:"border-r border-black"}),e("th",{className:"border-r border-black"}),e("th",{className:"border-r border-black"}),e("th",{className:"border-b border-black",children:e("pre",{children:"    New Connection"})}),e("th",{className:"border-b border-black",children:e("pre",{className:"flex justify-start",children:" Fee"})})]}),t("tr",{children:[e("th",{className:"border-r border-black",children:"RATE CODE"}),e("th",{className:"border-r border-black",children:"CONNECTION TYPE"}),e("th",{className:"border-r border-black",children:"CATEGORY"}),e("th",{className:"border-r border-black",children:"BUILT TYPE AREA"}),e("th",{children:"AMOUNT"})]})]}),t("tbody",{children:[t("tr",{children:[e("td",{children:"WCC002"}),t("td",{className:"uppercase",children:["RESIDENTIAL BUILDING WITH",e("br",{}),"HOLDING (OLD PIPE LINE/ ",e("br",{})," NEW PIPE LINE)",e("br",{}),"For"]}),t("td",{children:["DOMESTIC APL ",e("br",{})," CATEGORY"]}),e("td",{style:{padding:0},children:t("table",{children:[e("tr",{children:e("td",{children:"0-1000 Square feet"})}),e("tr",{children:e("td",{children:"1001-3000 Square feet"})}),e("tr",{children:e("td",{children:"3001-5000 Square feet"})}),e("tr",{children:e("td",{children:"Above 500 Square feet"})})]})}),e("td",{style:{padding:0},children:t("table",{children:[e("tr",{children:e("td",{className:"font-semibold",children:"7000 + 4000 = 11000/-"})}),e("tr",{children:e("td",{className:"font-semibold",children:"14000 + 4000 = 18000/-"})}),e("tr",{children:e("td",{className:"font-semibold",children:"28000 + 4000 = 32000/-"})}),e("tr",{children:e("td",{className:"font-semibold",children:"42000 + 4000 = 46000/-"})})]})})]}),t("tr",{children:[e("td",{children:"WCC004"}),t("td",{children:["RESIDENTIAL BUILDING ",e("br",{})," WITH (OLD PIPE LINE/ ",e("br",{})," NEW PIPE LINE)",e("br",{}),"For"]}),e("td",{children:"DOMESTIC BPL CATEGORY"}),e("td",{children:"Do--"}),e("td",{className:"font-semibold",children:"4000.00"})]}),t("tr",{children:[e("td",{children:"WCC006"}),e("td",{children:"APARTMENT"}),e("td",{children:"APARTMENT"}),e("td",{style:{padding:0},children:t("table",{children:[e("tr",{children:e("td",{children:"0-1000 Square feet"})}),e("tr",{children:e("td",{children:"1001-3000 Square feet"})}),e("tr",{children:e("td",{children:"3001-5000 Square feet"})}),e("tr",{children:e("td",{children:"Above 500 Square feet"})})]})}),e("td",{style:{padding:0},children:t("table",{children:[e("tr",{children:e("td",{className:"font-semibold",children:"7000 + 4000 = 11000/-"})}),e("tr",{children:e("td",{className:"font-semibold",children:"14000 + 4000 = 18000/-"})}),e("tr",{children:e("td",{className:"font-semibold",children:"28000 + 4000 = 32000/-"})}),e("tr",{children:e("td",{className:"font-semibold",children:"42000 + 4000 = 46000/-"})})]})})]}),t("tr",{children:[e("td",{children:"WCC008"}),t("td",{children:["GOVERNMENT / INSTITUTIONAL ",e("br",{})," WITH HOLDING"]}),e("td",{children:"GOVERNMENT / INSTITUTIONAL"}),e("td",{children:"-"}),e("td",{className:"font-semibold",children:"Rs.26/ Sq.ft. + 10000.00"})]}),t("tr",{children:[e("td",{children:"WCC010"}),t("td",{children:["COMMERCIAL WITH ",e("br",{})," HOLDING"]}),e("td",{children:"COMMERCIAL"}),e("td",{children:"-"}),e("td",{className:"font-semibold",children:"Rs.26/ Sq.ft. + 10000.00"})]}),t("tr",{children:[e("td",{children:"WCC0012"}),e("td",{children:"SSI UNIT"}),e("td",{children:"SSI UNIT"}),e("td",{children:"-"}),e("td",{className:"font-semibold",children:"Rs.26/ Sq.ft. + 10000.00"})]}),t("tr",{children:[e("td",{children:"WCC0014"}),t("td",{children:["OTHER THAN ",e("br",{})," SSI UNIT"]}),e("td",{children:"OTHER THAN SSI UNIT"}),e("td",{children:"-"}),e("td",{className:"font-semibold",children:"Rs.26/ Sq.ft. + 10000.00"})]})]})]})]})})]})})}function be(d){var L,W,D,H,U,G;const[f,y]=m.useState(""),[n,N]=m.useState("no"),[u,I]=m.useState(),[v,R]=m.useState(),[i,T]=m.useState(0),[P,p]=m.useState(),[A,w]=m.useState(),{notify:s}=m.useContext(J),[C,k]=m.useState(!1),a=$(),l=d==null?void 0:d.data,c=d==null?void 0:d.installment,S=d==null?void 0:d.applicationId,_=d==null?void 0:d.connCat;K("Payment Page");const{api_waterPayConnectionCharges:E,header:B}=Q();m.useEffect(()=>{if(n=="no"){const r=(l==null?void 0:l.penalty)/10;I((l==null?void 0:l.totalAmount)-r),w(r),(l==null?void 0:l.paidStatus)!=0&&(N("yes"),w(0))}n=="yes"&&I(Number(l==null?void 0:l.connectionFee)+i)},[i,n,l]);const V=le({isInstallmentRadio:h().required("select Is InstallmentRadio"),paymentMode:h().required("select payment mode"),remarks:h().required("Enter remarks"),branchName:h(),cheque_dd_no:h(),cheque_dd_date:h(),advanceAmount:h()}),o=re({enableReinitialize:!0,initialValues:{paymentMode:"",remarks:"",bankName:"",branchName:"",cheque_dd_no:"",cheque_dd_date:"",applicationId:S,chargeCategory:_,selectInstallment:"",isInstallmentRadio:"no"},onSubmit:(r,g)=>{j(r)},validationSchema:V}),j=r=>{console.log("items",r);const g={paymentMode:r==null?void 0:r.paymentMode,remarks:r==null?void 0:r.remarks,bankName:r==null?void 0:r.bankName,branchName:r==null?void 0:r.branchName,chequeNo:r==null?void 0:r.cheque_dd_no,chequeDate:r==null?void 0:r.cheque_dd_date,amount:u,isInstallment:n,penaltyAmount:l==null?void 0:l.penalty,applicationId:r==null?void 0:r.applicationId,penaltyIds:P,chargeCategory:r==null?void 0:r.chargeCategory};console.log("Final Payload",g),X.post(E,g,B).then(b=>{var Z,F,ee;((Z=b==null?void 0:b.data)==null?void 0:Z.status)==!0?(a(`/water-payment-receipt/${(ee=(F=b==null?void 0:b.data)==null?void 0:F.data)==null?void 0:ee.TransactionNo}/application`),console.log("Payment Done",b),s("Payment Done Successfully","success")):s("Error While Payment","error")}).catch(b=>{s("Something Went Wrong","error"),console.log("Expecption while payment",b)})},Y=r=>{console.log("This..",r.target.selectedIndex,c[0].id),r.target.selectedIndex==1&&p([c[0].id]),r.target.selectedIndex==2&&p([c[0].id,c[1].id]),r.target.selectedIndex==3&&(p([c[0].id,c[1].id,c[2].id]),N("no"),p(void 0))},z=r=>{let g=r.target.name,b=r.target.value;console.log(g,b),g=="paymentMode"&&R(b),g=="selectInstallment"&&Y(r),g=="selectInstallment"&&r.target.selectedIndex==3&&N("no"),g=="selectInstallment"&&T(Number(b)),g=="isInstallmentRadio"&&N(r.target.value)};if(f==!0)return e(x,{children:e(ae,{})});console.log("connId",d.connId);const q=(l==null?void 0:l.penalty)>0&&((L=c[0])==null?void 0:L.installment_amount),M=(l==null?void 0:l.penalty)>0&&Number((W=c[1])==null?void 0:W.installment_amount)+Number((D=c[0])==null?void 0:D.installment_amount),O=(l==null?void 0:l.penalty)>0&&Number((H=c[2])==null?void 0:H.installment_amount)+Number((U=c[1])==null?void 0:U.installment_amount)+Number((G=c[0])==null?void 0:G.installment_amount);return t(x,{children:[C&&e(oe,{connId:d==null?void 0:d.connId,closeModal:k}),e(de,{position:"top-right",autoClose:2e3}),(l==null?void 0:l.paidStatus)==0&&e("div",{className:" block p-4 mt-4 w-full md:py-4 md:px-40 md:pb-0 md:pt-0 rounded-lg shadow-lg bg-white md:w-full mx-auto  overflow-x-auto mb-20 ",children:e("div",{className:" block p-4 w-full md:py-6 rounded-lg bg-white mx-auto ",children:t("form",{onSubmit:o.handleSubmit,onChange:z,className:"p-4 relative",children:[(l==null?void 0:l.chargeCatagoryId)===2&&(l==null?void 0:l.paidStatus)==0&&e("div",{className:"text-center text-green-600 font-semibold pb-2",children:"Note: 10% rebate on penalty in case whole penalty is paid"}),t("div",{className:"grid grid-cols-12",children:[t("div",{className:"bg-white col-span-12 grid grid-cols-12 pt-6 mb-4 border border-gray-200",children:[t("div",{className:"form-group mb-6 col-span-12 md:col-span-6 md:px-4",children:[e("span",{children:"Connection Fee :"})," ",e("span",{className:"font-mono font-semibold",children:l==null?void 0:l.connectionFee})]}),t("div",{className:"form-group mb-6 col-span-12 md:col-span-6 md:px-4",children:[e("span",{children:"Penalty :"})," ",e("span",{className:"font-mono font-semibold",children:l==null?void 0:l.penalty})]}),(l==null?void 0:l.chargeCatagoryId)===2&&t("div",{className:"form-group mb-6 col-span-12 md:col-span-6 md:px-4 flex space-x-2",children:[e("span",{children:"Pay penalty on installment?:"})," ",e("span",{className:"font-mono font-semibold",children:t("span",{className:"flex space-x-2",children:[t("label",{children:[e("input",{...o.getFieldProps("isInstallmentRadio"),type:"radio",name:"isInstallmentRadio",value:"yes",checked:n==="yes",disabled:(l==null?void 0:l.paidStatus)!=0}),"Yes"]}),t("label",{children:[e("input",{...o.getFieldProps("isInstallmentRadio"),type:"radio",name:"isInstallmentRadio",value:"no",checked:n==="no",disabled:(l==null?void 0:l.paidStatus)!=0}),"No"]})]})})]}),(l==null?void 0:l.penalty)>0&&n=="yes"?t("div",{className:"form-group mb-6 col-span-12 md:col-span-6 md:px-4",children:[t("label",{children:["Select Installment",e("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),t("select",{...o.getFieldProps("selectInstallment"),type:"text",className:"form-control mx-2 px-1 py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",children:[e("option",{value:"",children:"Select"}),e("option",{value:q,children:q}),c[1]&&e("option",{value:M,children:M}),c[2]&&e("option",{value:O,children:O})]}),e("p",{className:"text-red-600 text-xs",children:o.touched.selectInstallment&&o.errors.selectInstallment?o.errors.selectInstallment:null})]}):e("div",{className:"form-group mb-6 col-span-12 md:col-span-6 md:px-4 flex"}),e("div",{className:"form-group mb-6 col-span-12 md:col-span-6 md:px-4",children:t("div",{className:"w-full",children:[e("span",{children:"Total Payable Amount :"})," ",t("span",{className:"font-mono font-semibold text-xl",children:[" ₹",u]})]})}),e("div",{className:"form-group mb-6 col-span-12 md:col-span-6 md:px-4",children:t("div",{className:"w-full",children:[e("span",{children:"Rebate :"})," ",e("span",{className:"font-mono font-semibold text-xl",children:n=="yes"?0:A})]})})]}),t("div",{className:"form-group mb-6 col-span-12 md:col-span-6 md:px-4",children:[t("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[e("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),"Payment Mode"]}),t("select",{...o.getFieldProps("paymentMode"),type:"text",className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",children:[e("option",{value:"",children:"Select"}),e("option",{value:"Cash",children:"Cash"}),e("option",{value:"Cheque",children:"Cheque"}),e("option",{value:"DD",children:"DD"})]}),e("span",{className:"text-red-600 absolute text-xs",children:o.touched.paymentMode&&o.errors.paymentMode?o.errors.paymentMode:null})]}),t("div",{className:"form-group mb-6 col-span-12 md:col-span-6 md:px-4",children:[t("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[e("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),"Remarks"]}),e("input",{...o.getFieldProps("remarks"),type:"text",className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md cursor-pointer",placeholder:"Enter remarks"}),e("span",{className:"text-red-600 absolute text-xs",children:o.touched.remarks&&o.errors.remarks?o.errors.remarks:null})]}),(v=="Cheque"||v=="DD")&&t(x,{children:[t("div",{className:"form-group mb-6 col-span-12 md:col-span-6 md:px-4",children:[t("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[e("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),"Bank Name"]}),e("input",{...o.getFieldProps("bankName"),type:"text",className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",placeholder:"Enter Bank Name."}),e("span",{className:"text-red-600 absolute text-xs",children:o.touched.bankName&&o.errors.bankName?o.errors.bankName:null})]}),t("div",{className:"form-group mb-6 col-span-12 md:col-span-6 md:px-4",children:[t("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[e("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),"Branch Name"]}),e("input",{...o.getFieldProps("branchName"),type:"text",className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",placeholder:"Enter Branch Name"}),e("span",{className:"text-red-600 absolute text-xs",children:o.touched.branchName&&o.errors.branchName?o.errors.branchName:null})]}),t("div",{className:"form-group mb-6 col-span-12 md:col-span-6 md:px-4",children:[t("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[e("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),"Cheque/DD No"]}),e("input",{...o.getFieldProps("cheque_dd_no"),type:"text",placeholder:"Enter Check/DD",className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),e("span",{className:"text-red-600 absolute text-xs",children:o.touched.cheque_dd_no&&o.errors.cheque_dd_no?o.errors.cheque_dd_no:null})]}),t("div",{className:"form-group mb-6 col-span-12 md:col-span-6 md:px-4",children:[t("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[e("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),"Cheque/DD Date"]}),e("input",{...o.getFieldProps("cheque_dd_date"),type:"date",className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md cursor-pointer",placeholder:"Enter new ward no."}),e("span",{className:"text-red-600 absolute text-xs",children:o.touched.cheque_dd_date&&o.errors.cheque_dd_date?o.errors.cheque_dd_date:null})]})]}),e("div",{className:"col-span-12"}),e("div",{className:"col-span-12 grid grid-cols-2 mt-10",children:e("div",{className:""})})]}),t("div",{className:"md:pl-10 flex justify-between",children:[e("p",{onClick:()=>k(!C),className:"font-semibold text-blue-600 cursor-pointer hover:underline",children:"View Rate Chart"}),e("button",{type:"submit",className:" px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight  rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out cursor-pointer",children:"Pay Now"})]})]})})})]})}function ue(d){const[f,y]=m.useState(""),[n,N]=m.useState(),{notify:u}=m.useContext(J),[I,v]=m.useState(!1),R=$(),i=d==null?void 0:d.data,T=d==null?void 0:d.applicationId,P=d==null?void 0:d.connCat;K("Payment Page");const{api_waterPayConnectionCharges:p,header:A}=Q();console.log("firstfhjdfjdjdy",i);const w=le({isInstallmentRadio:h().required("select Is InstallmentRadio"),paymentMode:h().required("select payment mode"),remarks:h().required("Enter remarks"),branchName:h(),cheque_dd_no:h(),cheque_dd_date:h(),advanceAmount:h()}),s=re({enableReinitialize:!0,initialValues:{paymentMode:"",remarks:"",bankName:"",branchName:"",cheque_dd_no:"",cheque_dd_date:"",applicationId:T,chargeCategory:P,selectInstallment:"",isInstallmentRadio:"no"},onSubmit:(a,l)=>{C(a)},validationSchema:w}),C=a=>{console.log("items",a);const l={paymentMode:a==null?void 0:a.paymentMode,remarks:a==null?void 0:a.remarks,bankName:a==null?void 0:a.bankName,branchName:a==null?void 0:a.branchName,chequeNo:a==null?void 0:a.cheque_dd_no,chequeDate:a==null?void 0:a.cheque_dd_date,amount:i==null?void 0:i.totalAmount,penaltyAmount:i==null?void 0:i.penalty,applicationId:a==null?void 0:a.applicationId,chargeCategory:a==null?void 0:a.chargeCategory,isInstallment:"no"};console.log("Final Payload",l),X.post(p,l,A).then(c=>{var S,_,E;((S=c==null?void 0:c.data)==null?void 0:S.status)==!0?(R(`/water-payment-receipt/${(E=(_=c==null?void 0:c.data)==null?void 0:_.data)==null?void 0:E.TransactionNo}/application`),console.log("Payment Done",c),u("Payment Done Successfully","success")):u("Error While Payment","error")}).catch(c=>{u("Something Went Wrong","error"),console.log("Expecption while payment",c)})},k=a=>{let l=a.target.name,c=a.target.value;console.log(l,c),l=="paymentMode"&&N(c)};return f==!0?e(x,{children:e(ae,{})}):t(x,{children:[I&&e(oe,{connId:d==null?void 0:d.connId,closeModal:v}),e(de,{position:"top-right",autoClose:2e3}),(i==null?void 0:i.paidStatus)==0&&e("div",{className:" block p-4 mt-4 w-full md:py-4 md:px-40 md:pb-0 md:pt-0 rounded-lg shadow-lg bg-white md:w-full mx-auto  overflow-x-auto mb-20 ",children:e("div",{className:" block p-4 w-full md:py-6 rounded-lg bg-white mx-auto ",children:t("form",{onSubmit:s.handleSubmit,onChange:k,className:"p-4 relative",children:[t("div",{className:"grid grid-cols-12",children:[t("div",{className:"bg-white col-span-12 grid grid-cols-12 pt-6 mb-4 border border-gray-200",children:[t("div",{className:"form-group mb-6 col-span-12 md:col-span-6 md:px-4 pl-2",children:[e("span",{children:"Connection Fee :"})," ",e("span",{className:"font-mono font-semibold",children:i==null?void 0:i.connectionFee})]}),t("div",{className:"form-group mb-6 col-span-12 md:col-span-6 md:px-4 pl-2",children:[e("span",{children:"Penalty :"})," ",e("span",{className:"font-mono font-semibold",children:i==null?void 0:i.penalty})]}),e("div",{className:"form-group mb-6 col-span-12 md:col-span-6 md:px-4 pl-2",children:t("div",{className:"w-full",children:[e("span",{children:"Total Payable Amount :"})," ",t("span",{className:"font-mono font-semibold text-xl",children:[" ₹",i==null?void 0:i.totalAmount]})]})}),e("div",{className:"form-group mb-6 col-span-12 md:col-span-6 md:px-4 pl-2",children:t("div",{className:"w-full",children:[e("span",{children:"Category :"})," ",e("span",{className:"font-mono font-semibold text-md",children:i==null?void 0:i.chargeCatagory})]})})]}),t("div",{className:"form-group mb-6 col-span-12 md:col-span-6 md:px-4",children:[t("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[e("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),"Payment Mode"]}),t("select",{...s.getFieldProps("paymentMode"),type:"text",className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",children:[e("option",{value:"",children:"Select"}),e("option",{value:"Cash",children:"Cash"}),e("option",{value:"Cheque",children:"Cheque"}),e("option",{value:"DD",children:"DD"})]}),e("span",{className:"text-red-600 absolute text-xs",children:s.touched.paymentMode&&s.errors.paymentMode?s.errors.paymentMode:null})]}),t("div",{className:"form-group mb-6 col-span-12 md:col-span-6 md:px-4",children:[t("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[e("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),"Remarks"]}),e("input",{...s.getFieldProps("remarks"),type:"text",className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md cursor-pointer",placeholder:"Enter Remarks."}),e("span",{className:"text-red-600 absolute text-xs",children:s.touched.remarks&&s.errors.remarks?s.errors.remarks:null})]}),(n=="Cheque"||n=="DD")&&t(x,{children:[t("div",{className:"form-group mb-6 col-span-12 md:col-span-6 md:px-4",children:[t("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[e("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),"Bank Name"]}),e("input",{...s.getFieldProps("bankName"),type:"text",className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",placeholder:"Enter Bank Name."}),e("span",{className:"text-red-600 absolute text-xs",children:s.touched.bankName&&s.errors.bankName?s.errors.bankName:null})]}),t("div",{className:"form-group mb-6 col-span-12 md:col-span-6 md:px-4",children:[t("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[e("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),"Branch Name"]}),e("input",{...s.getFieldProps("branchName"),type:"text",className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",placeholder:"Enter Branch Name"}),e("span",{className:"text-red-600 absolute text-xs",children:s.touched.branchName&&s.errors.branchName?s.errors.branchName:null})]}),t("div",{className:"form-group mb-6 col-span-12 md:col-span-6 md:px-4",children:[t("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[e("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),"Cheque/DD No"]}),e("input",{...s.getFieldProps("cheque_dd_no"),type:"text",placeholder:"Enter Check/DD",className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),e("span",{className:"text-red-600 absolute text-xs",children:s.touched.cheque_dd_no&&s.errors.cheque_dd_no?s.errors.cheque_dd_no:null})]}),t("div",{className:"form-group mb-6 col-span-12 md:col-span-6 md:px-4",children:[t("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[e("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),"Cheque/DD Date"]}),e("input",{...s.getFieldProps("cheque_dd_date"),type:"date",className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md cursor-pointer",placeholder:"Enter new ward no."}),e("span",{className:"text-red-600 absolute text-xs",children:s.touched.cheque_dd_date&&s.errors.cheque_dd_date?s.errors.cheque_dd_date:null})]})]}),e("div",{className:"col-span-12"}),e("div",{className:"col-span-12 grid grid-cols-2 mt-10",children:e("div",{className:""})})]}),t("div",{className:"md:pl-10 flex justify-between",children:[e("p",{onClick:()=>v(!I),className:"font-semibold text-blue-600 cursor-pointer hover:underline",children:"View Rate Chart"}),e("button",{type:"submit",className:" px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight  rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out cursor-pointer",children:"Pay Now"})]})]})})})]})}function Ne(d){var i,T,P,p,A,w,s,C,k,a,l,c,S,_,E,B,V,o,j,Y,z,q,M,O,L,W,D,H,U,G;const[f,y]=m.useState(!1),[n,N]=m.useState(),{id:u}=te(),{notify:I}=m.useContext(J),{api_WaterGetDetailsById:v}=Q();K("Water Application Payment");const R=()=>{y(!0),console.log("before fetch property details in deactivation"),X.post(v,{applicationId:u},me()).then(function(r){console.log("view water details by id...",r.data.data),N(r.data.data),y(!1)}).catch(function(r){console.log("==2 details by id error...",r),y(!1),I("Something Went Wrong","error")})};return m.useEffect(()=>{R()},[]),console.log("applicationFullData?.applicationDetails",(i=n==null?void 0:n.applicationDetails)==null?void 0:i.connection_type_id),t(x,{children:[f&&e(ie,{}),e("div",{className:"w-full bg-white shadow-xl mb-6",children:e("div",{className:"",children:t("div",{className:"py-6 mt-2 bg-white rounded-lg shadow-lg p-4",children:[t("div",{className:"flex space-x-5 max-sm:space-x-0 max-sm:space-y-3 pl-4 max-sm:flex-col ",children:[t("div",{className:"flex-1",children:[e("div",{className:"font-bold text-sm",children:(T=n==null?void 0:n.applicationDetails)!=null&&T.application_no?(P=n==null?void 0:n.applicationDetails)==null?void 0:P.application_no:"N/A"}),e("div",{className:"text-gray-500 text-xs",children:"Application No"})]}),t("div",{className:"flex-1",children:[e("div",{className:"font-bold text-sm",children:(p=n==null?void 0:n.applicationDetails)!=null&&p.ward_name?(A=n==null?void 0:n.applicationDetails)==null?void 0:A.ward_name:"N/A"}),e("div",{className:"text-gray-500 text-xs",children:"Ward No."})]}),t("div",{className:"flex-1",children:[t("div",{className:"font-semibold text-md",children:[(w=n==null?void 0:n.applicationDetails)!=null&&w.connection_type?(s=n==null?void 0:n.applicationDetails)==null?void 0:s.connection_type:"N/A"," "]}),e("div",{className:"text-gray-500 text-xs",children:"Connection Type"})]}),t("div",{className:"flex-1",children:[e("div",{className:"font-semibold text-md",children:(C=n==null?void 0:n.applicationDetails)!=null&&C.owner_char_type?(k=n==null?void 0:n.applicationDetails)==null?void 0:k.owner_char_type:"N/A"}),e("div",{className:"text-gray-500 text-xs",children:"Ownership Type"})]}),t("div",{className:"flex-1",children:[e("div",{className:"font-bold text-sm",children:(a=n==null?void 0:n.applicationDetails)!=null&&a.property_type?(l=n==null?void 0:n.applicationDetails)==null?void 0:l.property_type:"N/A"}),e("div",{className:"text-gray-500 text-xs",children:"Property Type"})]})]}),t("div",{className:"flex space-x-5 max-sm:space-x-0 max-sm:space-y-3 max-sm:flex-col pl-4 mt-4",children:[t("div",{className:"flex-1",children:[e("div",{className:"font-bold text-sm",children:(c=n==null?void 0:n.applicationDetails)!=null&&c.pipeline_type?(S=n==null?void 0:n.applicationDetails)==null?void 0:S.pipeline_type:"N/A"}),e("div",{className:"text-gray-500 text-xs",children:"Pipeline Type"})]}),t("div",{className:"flex-1",children:[e("div",{className:"font-bold text-sm",children:(_=n==null?void 0:n.applicationDetails)!=null&&_.connection_through?(E=n==null?void 0:n.applicationDetails)==null?void 0:E.connection_through:"N/A"}),e("div",{className:"text-gray-500 text-xs",children:"Connection Through"})]}),(n==null?void 0:n.connection_through)=="SAF"?t("div",{className:"flex-1",children:[e("div",{className:"font-semibold text-md",children:(B=n==null?void 0:n.applicationDetails)!=null&&B.saf_no?(V=n==null?void 0:n.applicationDetails)==null?void 0:V.saf_no:"N/A"}),e("div",{className:"text-gray-500 text-xs",children:"SAF No"})]}):t("div",{className:"flex-1",children:[e("div",{className:"font-semibold text-md",children:(o=n==null?void 0:n.applicationDetails)!=null&&o.holding_no?(j=n==null?void 0:n.applicationDetails)==null?void 0:j.holding_no:"N/A"}),e("div",{className:"text-gray-500 text-xs",children:"Holding No"})]}),t("div",{className:"flex-1",children:[e("div",{className:"font-semibold text-md",children:(Y=n==null?void 0:n.applicationDetails)!=null&&Y.area_sqft?(z=n==null?void 0:n.applicationDetails)==null?void 0:z.area_sqft:"N/A"}),e("div",{className:"text-gray-500 text-xs",children:"Area (Sqft.)"})]}),t("div",{className:"flex-1",children:[e("div",{className:"font-bold text-sm",children:(q=n==null?void 0:n.applicationDetails)!=null&&q.category?(M=n==null?void 0:n.applicationDetails)==null?void 0:M.category:"N/A"}),e("div",{className:"text-gray-500 text-xs",children:"Category"})]})]})]})})}),e("div",{children:((O=n==null?void 0:n.calculation)==null?void 0:O.chargeCatagoryId)==2?e(be,{connId:(L=n==null?void 0:n.applicationDetails)==null?void 0:L.connection_type_id,connCat:(W=n==null?void 0:n.applicationDetails)==null?void 0:W.connection_type,applicationId:(D=n==null?void 0:n.applicationDetails)==null?void 0:D.id,installment:n==null?void 0:n.penaltyInstallments,data:n==null?void 0:n.calculation}):e(ue,{connId:(H=n==null?void 0:n.applicationDetails)==null?void 0:H.connection_type_id,connCat:(U=n==null?void 0:n.applicationDetails)==null?void 0:U.connection_type,applicationId:(G=n==null?void 0:n.applicationDetails)==null?void 0:G.id,installment:n==null?void 0:n.penaltyInstallments,data:n==null?void 0:n.calculation})}),e("div",{className:"w-full h-40 md:none"})]})}export{Ne as default};
