import{r as i,c as $,a as aa,u as ea,b as sa,j as a,B as ta,A as N,e as j,Q as A,g as la}from"./index-21aade66.js";import{B as oa}from"./BottomErrorCard-c4e8289a.js";import{S as da}from"./OutLineTextField-7556c55f.js";const na="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFIElEQVR4nO1aW2hcRRie8dJo1bZpkp3ZNLaltUUC3thk5/83i3moQvCKD0W0giASFNtaNTlnEx/ikxpUJFLFC3iplwexBGoJ1iptzWUmYYs+2IdoS+yDWuOlNEbwgl2Zs6e5bC67s9nuOWfdD/6XmTPf/893/vl3Zs4SkgMsIXfboFI5mVATtpCfdERVPSkQNJcF8oDDnWMcOuZC+Se2kN05CzBlctIWMl4A33GHy9S/kN2kcEhRW8inTIOwQJ5pbxxuyHvyUXWdJdRv5uKrni6SuoAUGpaQOy2Q/xpmws/5LIdE4/BmC9QpQ19nLVAWOZ9oh6FtNsi/zdJRfZ9oGNmQqw+7KbnWFvKkUbYJ9Y+N6gFSDLTj8BaTguSuyZN6Ytm4O2FojQXyhGm9SQh5CykmEjjSaAk1blgTRjuEZAtxPh5JVlsgjxlm168WDsaIF2iLDWy0hTpuKMJXiXh/ZSZXV1StsEAlDSf/XQcOXk28RGckGdaTMluvcqir+dDlU5OPJJdbQh4xFPLYkw0jVxI/4NHmL1fZIL8wLFoHd7T0VejxFqgOszWv+ufLIk+xo6WvwgL1kWFh7O1qPnRRayR5sS3kxzkKt09nDPEjtm798EIb1Otmqaze1ZuWrvqvl+ktdJal844Wi/gbqXx2jS/rkfrN6vRe4JkezU2CAgvUdqNdo5BP63F2JLnSFurodJ88a0VVm9fzKSNv1MEaEopvyMv02MCCi4cpg3HKMbUkYzBOODxEAoUQ3OsG/ydl2E85HszLGA44HBxThIm7SVBAOQw5QYehaclkYRFPi4kDxHcI4RYSxtZMoxx+pxwmpp+DayiH3aQOVmflrIpd4Txbizeca9JcmnM+X04MnoCJ9VnW7umpCTB4Lp3GcHt2XrzNfeMvzBh/ejFfpFpsIkVHbex6N4BvKIdnZ5mz9qcFIBxvpAz7SDhSnZWXx2sox09nLh9HAKcWZPhxfGNKx0I8E4BBb2aXG/C0AEvEQnzat/cCcByjDF6bbfhX2jLb87UF+LRvHwiQ8to8FgAGSQhu8sK0b1/WgGLBHzWAlQXoNRavvn4ZCcM2yvElbYTH7nPa/hcZUC02UYajczdOOEpqGzeXtgB1cCnl+K1bPD/XhyYSwnsoh8/ctuP6mdIVIAQPumMO6Phn9FC9U0wfoLC1ZAWgHN9yAg6JO+Z0MrzV5dtTugIw2OMEzKFlTmdI3Owugw9KVgDCcOdCk6QM33PFeax0BaiMrKQcf3Sr/tvOia8GY5TDm+6vwSmyrnlV6QqgwSBKOfw0791fqAmIAYIpgIa+GWKYoBz3aSMh6CS1jVXEEMEVoEAIngDs2st0tScc7p9zt6fb9CkvHFleegJc1VJBOXZThn9k/w6gn4Fn9JjSEGBd8yWUwRF3gpPpn7vMu72pO7730zfKjhCHs4kQCAEowxfdCR0lNbGNWXmrYrWU47DL/XywBVgbr3Tu8vQ3AibW58wdEoxyPKNvghfbF/hfgDDc5b79V03pKcc30ueG2J3BFYDB9vT2Fp8w5ufYlv6Ygo8EV4Aw7EofcWGXMX8OYwMjAGX4C+VwwsicMYEXQMTPfd7Oz2BisS/M/hfgPKMsACtnQK8vlwDl0OMWssP6Dw+z2vI1hq8EJgMoh/1uIRubIcD+pf1ZCvcGRoBioSwAK2dAry+XAF1qwSuhIpgqmJWL4Fz4NgOKhbIAzA8ZwHGy4AUvZ9O+vRJgdXQF5fBDwYuduY3pWPKdx3/lUsB8H5IGuQAAAABJRU5ErkJggg==",ha=()=>{var F,M;let p=new Date().toISOString().slice(0,10);console.log(p),i.useState("");const[D,B]=i.useState(!1),[k,O]=i.useState(null),[W,g]=i.useState(!1),[ca,Q]=i.useState([]),{api_master_fee_collection_search:X,api_payment_mode_active_all:G,api_fee_collection_store:_,api_fetch_fee_collection:z}=la(),[b,J]=i.useState([]),[c,f]=i.useState([]),[y,L]=i.useState(0),[o,V]=i.useState(),[v,K]=i.useState([]),[w,T]=i.useState(!1),Y=$({admissionNo:aa().required("Admission number is required feild")}),S=ea(),d=sa({initialValues:{admissionNo:"",paymentModeId:"1",paymentMode:"Cash"},onSubmit:async s=>{console.log("at submit ",s),await Z(s),T(!w)},validationSchema:Y}),R=async()=>{var s,t;try{const e=await N.post(G,{},j());console.log("paymentMode",e==null?void 0:e.data),((s=e==null?void 0:e.data)==null?void 0:s.status)===!0&&J((t=e==null?void 0:e.data)==null?void 0:t.data)}catch(e){console.log("paymentMode",e),m(!0,"Error occured in submitting form.")}},Z=async s=>{var t,e,r,n,x;g(!0);try{const l=await N.post(X,{admissionNo:s.admissionNo},j());console.log("paymentMode",l==null?void 0:l.data),((t=l==null?void 0:l.data)==null?void 0:t.status)===!0?(V((r=(e=l==null?void 0:l.data)==null?void 0:e.data)==null?void 0:r.studentDetails),f((x=(n=l==null?void 0:l.data)==null?void 0:n.data)==null?void 0:x.monthly_fee.map(u=>({...u,isPaid:!1})))):(console.log("==2 error list...",error),A.warning("Error occured in submitting form"),g(!1)),g(!1)}catch(l){console.log("paymentMode",l),m(!0,"Error occured in submitting form."),g(!1)}},H=s=>{},m=(s,t)=>{O(t),B(s)};console.log(o),i.useEffect(()=>{console.log("feeDataaa",c);const s=c.flatMap(t=>t.isPaid?t==null?void 0:t.fee.map(e=>{var r,n;return{admissionNo:o==null?void 0:o.admissionNo,monthName:t==null?void 0:t.month_name,totalFee:t==null?void 0:t.total,isPaid:t!=null&&t.isPaid?1:0,addPayment:t==null?void 0:t.addPayment,paymentDate:p,paymentModeId:parseInt((r=d==null?void 0:d.values)==null?void 0:r.paymentModeId),grandTotal:y,feeHeadId:e==null?void 0:e.fee_ids,feeHeadName:e==null?void 0:e.fee_head,feeAmount:e==null?void 0:e.amount,className:o==null?void 0:o.className,paymentMode:(n=d==null?void 0:d.values)==null?void 0:n.paymentMode}}):[]);console.log("GetData",s),K(s),L(c.reduce((t,e)=>e.isPaid&&e.addPayment?t+e.total:t,0))},[c,(F=d==null?void 0:d.values)==null?void 0:F.paymentModeId]);const U=async()=>{var s,t;try{const e=await N.post(z,{admissionNo:o==null?void 0:o.admissionNo},j());console.log("fetchFeeColl",e==null?void 0:e.data),((s=e==null?void 0:e.data)==null?void 0:s.status)==!0&&(Q((t=e==null?void 0:e.data)==null?void 0:t.data),f(r=>r.map(n=>{var x,l,u,E,C,I,P;return{...n,receiptNo:(u=(l=(x=e==null?void 0:e.data)==null?void 0:x.data)==null?void 0:l.find(h=>(h==null?void 0:h.month_name)==(n==null?void 0:n.month_name)))==null?void 0:u.receipt_no,isPaid:((C=(E=e==null?void 0:e.data)==null?void 0:E.data)==null?void 0:C.some(h=>(h==null?void 0:h.month_name)==(n==null?void 0:n.month_name)))||!1,isDisabled:((P=(I=e==null?void 0:e.data)==null?void 0:I.data)==null?void 0:P.some(h=>(h==null?void 0:h.month_name)==(n==null?void 0:n.month_name)))||!1}})))}catch(e){console.log("paymentMode",e),m(!0,"Error occured in submitting form.")}};i.useEffect(()=>{U()},[w]);const q=async()=>{var s,t,e,r,n,x;if(console.log("submitFee",v),v.length<=0)A.warning("Please check at least one month");else try{const l=await N.post(_,{admissionNo:o==null?void 0:o.admissionNo,grandTotal:y,isPaid:((s=d==null?void 0:d.values)==null?void 0:s.paymentModeId)==1?1:0,paymentDate:p,paymentModeId:parseInt((t=d==null?void 0:d.values)==null?void 0:t.paymentModeId),feeCollection:v.filter(u=>(u==null?void 0:u.addPayment)==!0)},j());console.log("paymentMode",(e=l==null?void 0:l.data)==null?void 0:e.receiptNo),(r=l==null?void 0:l.data)!=null&&r.status?(alert("Payment Done"),S("/receipt",{state:{receiptNo:(x=(n=l==null?void 0:l.data)==null?void 0:n.data)==null?void 0:x.receiptNo}})):A.warning(`${l.data.message}`)}catch(l){console.log(l),m(!0,"Error occured in submitting form.")}};return i.useEffect(()=>{R()},[(M=d==null?void 0:d.values)==null?void 0:M.paymentModeId]),a.jsxs(a.Fragment,{children:[W&&a.jsx(ta,{}),D&&a.jsx(oa,{activateBottomErrorCard:m,errorTitle:k}),a.jsx("form",{onSubmit:d.handleSubmit,onChange:H,children:a.jsxs("div",{className:"px-3 w-[70%] m-auto space-y-5 h-[80vh] overflow-auto",children:[a.jsxs("div",{className:"text-center",children:[a.jsx("div",{className:"text-[32px] font-semibold text-gray-700",children:"Fee Collection"}),a.jsx("p",{className:"text-teal-600",children:"Securing a Bright Future: Collecting Fees to Support Education Excellence"})]}),a.jsxs("div",{className:"border border-gray-200 rounded-lg shadow-lg w-full m-auto p-5 ",children:[a.jsxs("div",{className:"flex items-center justify-center gap-14 flex-wrap ",children:[a.jsx("div",{children:a.jsx("p",{className:"text-2xl font-semibold text-teal-900",children:"Date"})}),a.jsx("div",{children:a.jsx("input",{disabled:!0,type:"text",className:"border rounded-lg shadow-md w-full h-10 px-8 block -mt-1 ",placeholder:"",value:p})}),a.jsx("div",{children:a.jsxs("p",{className:"text-2xl font-semibold text-teal-900",children:["Admission No"," ",a.jsx("small",{className:"mt-1 -ml-1 text-lg font-semibold text-red-600 inline ",children:"*"})]})}),a.jsxs("div",{children:[" ",a.jsx("input",{...d.getFieldProps("admissionNo"),type:"text",className:"border rounded-lg shadow-md w-full h-10 px-8 block -mt-1 ",placeholder:"Enter admission no"})]}),a.jsxs("div",{children:[" ",a.jsx("button",{type:"submit",className:"text-white bg-[#0F766E] w-full px-10 mr-9 rounded-lg font-semibold py-2",children:"Search"})]})]}),a.jsx("span",{className:"text-red-600 ml-[45vh]  text-sm mt-2",children:d.touched.admissionNo&&d.errors.admissionNo?d.errors.admissionNo:null})]}),c.length>0?a.jsxs(a.Fragment,{children:[a.jsxs("div",{children:[a.jsxs("p",{className:"ml-5 text-gray-700 font-bold text-xl",children:["Name - ",o==null?void 0:o.fullName]}),a.jsxs("div",{className:"flex justify-between rounded-lg shadow-lg border border-gray-200 p-5",children:[a.jsxs("div",{children:[a.jsx("p",{className:"font-bold text-xl text-gray-700",children:"Admission No"}),a.jsx("p",{className:"text-[18px] font-medium text-gray-500",children:o==null?void 0:o.admissionNo})]}),a.jsxs("div",{children:[a.jsx("p",{className:"font-bold text-xl text-gray-700",children:"Class"}),a.jsx("p",{className:"text-[18px] font-medium text-gray-500 text-center",children:o==null?void 0:o.className})]}),a.jsxs("div",{children:[a.jsx("p",{className:"font-bold text-xl text-gray-700",children:"Status"}),a.jsx("p",{className:"text-[18px] font-medium text-green-500 text-center",children:o==null?void 0:o.status})]}),a.jsx("div",{children:a.jsx("img",{src:na,alt:"Id Card",className:"opacity-80 h-12"})})]}),a.jsxs("div",{className:"m-auto mt-5 overflow-auto",children:[a.jsxs("div",{className:"grid grid-cols-12 font-semibold text-lg text-gray-700",children:[a.jsx("div",{className:"col-span-3 ml-5",children:"Months"}),a.jsx("div",{className:"col-span-3 ml-3",children:"Fees"}),a.jsx("div",{className:"col-span-2",children:"Amount"}),a.jsx("div",{className:"col-span-1"}),a.jsx("div",{className:"col-span-2 mx-auto flex justify-start items-center",children:a.jsx("input",{type:"checkbox",className:"w-6 h-6",onChange:s=>{const t=c.map(e=>({...e,isPaid:s.target.checked}));f(t)},checked:(c==null?void 0:c.filter(s=>(s==null?void 0:s.isPaid)==!0).length)==(c==null?void 0:c.length)})})]}),a.jsxs("div",{className:" rounded-lg shadow-lg border border-gray-200 px-5",children:[c&&c.map((s,t)=>{var e;return a.jsxs("div",{className:"grid grid-cols-12 text-gray-600 border-b py-2",children:[a.jsx("div",{className:"col-span-3 ",children:s.month_name}),a.jsxs("div",{className:"col-span-3",children:[s.fee.map(r=>a.jsx(a.Fragment,{children:a.jsx("div",{children:r.fee_head})})),a.jsx("div",{className:"font-bold text-black",children:"Total "})]}),a.jsxs("div",{className:"col-span-2",children:[s.fee.map(r=>a.jsxs("p",{children:["₹ ",r.amount]})),a.jsxs("p",{className:" text-black font-bold w-full px-10",children:["₹ ",s.total]})]}),a.jsx("div",{className:"col-span-1 border-r-2 border-gray-200 my-2"}),a.jsx("div",{className:"col-span-2 m-auto text-center",children:s!=null&&s.isDisabled?a.jsx("p",{className:"font-medium text-green-600 cursor-pointer",onClick:()=>{S("/receipt",{state:{receiptNo:s==null?void 0:s.receiptNo}})},children:"View"}):a.jsx("input",{type:"checkbox",onChange:r=>{const n=c.map((x,l)=>l==t?{...x,isPaid:r.target.checked,addPayment:!0}:l>t?{...x,isPaid:!1,addPayment:!1}:x);f(n)},checked:s==null?void 0:s.isPaid,className:"w-6 h-6  content-center",disabled:t==0?!1:!((e=c[t-1])!=null&&e.isPaid)})})]},t)}),a.jsxs("div",{className:"grid grid-cols-12 mt-4 mb-4",children:[a.jsx("div",{className:"col-span-6",children:a.jsxs("p",{className:"font-bold text-lg text-black",children:[" ","Paid Amount"," "]})}),a.jsx("div",{className:"col-span-4",children:a.jsxs("p",{className:" px-3 w-1/2  font-bold text-black",children:["₹"," ",c.filter(s=>s==null?void 0:s.isDisabled).reduce((s,t)=>s+(t==null?void 0:t.total),0)]})})]}),a.jsxs("div",{className:"grid grid-cols-12 mt-4 mb-4",children:[a.jsx("div",{className:"col-span-6",children:a.jsx("p",{className:"font-bold text-lg text-black",children:" Amount "})}),a.jsx("div",{className:"col-span-4",children:a.jsxs("p",{className:" px-3 w-1/2  font-bold text-black",children:["₹ ",y]})})]})]})]})]}),a.jsxs("div",{className:"border border-gray-200 rounded-lg shadow-xl w-full m-auto p-5 ",children:[a.jsxs("div",{className:"flex flex-wrap justify-center items-center gap-x-5",children:[a.jsx("div",{children:a.jsx("p",{className:"font-bold text-lg text-gray-700",children:"Payment Mode"})}),a.jsx("div",{children:a.jsx(da,{className:"border rounded-lg shadow-md w-full h-10 px-8 ",name:"paymentModeId",formik:d,selectedText:"paymentMode",children:b==null?void 0:b.map(s=>a.jsx("option",{value:s==null?void 0:s.id,children:s==null?void 0:s.payment_mode_name}))})})]}),a.jsx("div",{className:"mt-3 ",children:a.jsx("div",{className:"flex justify-center py-5",children:a.jsx("button",{type:"button",className:"bg-green-700 px-3 py-1 text-white font-semibold rounded shadow",onClick:()=>q(),children:"Pay Now"})})})]})]}):a.jsx("span",{children:"No record found"})]})})]})};export{ha as default};
