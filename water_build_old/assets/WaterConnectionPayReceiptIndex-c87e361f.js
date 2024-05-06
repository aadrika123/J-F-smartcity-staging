import{l as a,v as u,W as y,q as v,j as e,k as l,w as r,h as w}from"./index-7349853a.js";import{C as A}from"./ComponentToPrint-7ca32295.js";import{Q as S}from"./QrCode-9eac920e.js";function _(){var n,i,o,d,m,h,f;const[P,t]=a.useState(!1),{paymentId:c}=u(),{api_paymentReceipt:x,header:p}=y();a.useRef(),a.useState(!1);const[g,b]=a.useState();a.useEffect(()=>{t(!0),v.post(x,{transactionNo:c},p).then(N=>{t(!1),b(N.data.data)}).catch(N=>{t(!1)})},[c]);const s=g;return e(A,{content:e("div",{className:"font-tahoma",children:l("div",{className:"border-2 border-dashed border-gray-600  bg-white p-6 w-[250mm] h-auto ml-12 md:mx-auto lg:mx-auto  container pb-12",children:[l("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12 ",children:[e("div",{className:"",children:e("img",{src:(n=r())==null?void 0:n.ulb_logo,className:"h-20 mx-auto"})}),e("div",{className:"flex justify-center items-center w-full h-full relative",children:e("img",{src:(i=r())==null?void 0:i.state_logo,alt:"",className:" w-80 h-80  top-60 absolute bg-transparent opacity-20  rounded-full border"})})]}),e("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12 p-3 ",children:e("div",{className:"",children:e("h1",{className:"font-bold text-3xl text-center uppercase ",children:(o=r())==null?void 0:o.ulb_name})})}),e("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12 p-2 ",children:e("div",{className:"mx-auto",children:e("h1",{className:"font-semibold text-2xl text-center text-gray-800 border border-gray-700 w-[24rem] uppercase",children:"water connection charge payment receipt"})})}),e("div",{children:e("table",{className:"w-full  p-2 ",children:l("tr",{className:"",children:[l("td",{className:" ",children:[l("div",{className:"flex p-1 text-sm",children:[e("h1",{className:"flex text-gray-900 font-sans font-semibold",children:"Receipt No. :"}),e("h1",{className:"flex font-sans  pl-2",children:s==null?void 0:s.transactionNo})]}),l("div",{className:"flex p-1 text-sm",children:[e("h1",{className:"flex text-gray-900 font-sans font-semibold",children:"Department/Section :"}),e("h1",{className:"flex font-sans pl-2 ",children:s==null?void 0:s.accountDescription})]}),l("div",{className:"flex p-1 text-sm",children:[e("h1",{className:"flex text-gray-900 font-semibold font-sans ",children:"Account Description :"}),e("h1",{className:"flex font-sans pl-2 ",children:"Water User Charge"})]}),(s==null?void 0:s.holdingNo)&&l("div",{className:"flex p-1 text-sm",children:[e("h1",{className:"flex text-gray-900 font-semibold font-sans ",children:"Holding No. :"}),e("h1",{className:"flex font-sans pl-2 ",children:s!=null&&s.holdingNo?s==null?void 0:s.holdingNo:"N/A"})]}),(s==null?void 0:s.safNo)&&l("div",{className:"flex p-1 text-sm",children:[e("h1",{className:"flex text-gray-900 font-semibold font-sans ",children:"Holding No. :"}),e("h1",{className:"flex font-sans pl-2 ",children:s!=null&&s.safNo?s==null?void 0:s.safNo:"N/A"})]})]}),l("td",{className:" ",children:[l("div",{className:"flex p-1 text-sm",children:[e("h1",{className:"flex text-gray-900 font-semibold font-sans ",children:"Date :"}),e("h1",{className:"flex font-sans pl-2 ",children:w(s==null?void 0:s.transactionDate).format("DD/MM/yy")||"N/A"})]}),l("div",{className:"flex p-1 text-sm",children:[e("h1",{className:"flex text-gray-900 font-semibold font-sans ",children:"Ward No. :"}),e("h1",{className:"flex font-sans pl-2 ",children:s==null?void 0:s.WardNo})]}),l("div",{className:"flex p-1 text-sm",children:[e("h1",{className:"flex text-gray-900 font-semibold font-sans ",children:"Application No. :"}),e("h1",{className:"flex font-sans pl-2 ",children:s==null?void 0:s.applicationNo})]}),e("div",{className:"flex p-1 text-sm"}),e("div",{className:"flex p-1 text-sm"}),e("div",{className:"flex p-1 text-sm"}),e("div",{className:"flex p-1 text-sm"}),e("div",{className:"flex p-1 text-sm",children:" "})]})]})})}),e("div",{children:e("table",{className:"w-full  p-2 ",children:e("tr",{className:"",children:l("td",{className:" ",children:[l("div",{className:"flex p-1 text-sm",children:[e("h1",{className:"flex text-gray-900 font-sans font-semibold whitespace-nowrap",children:"Received From Mr/Mrs/Miss :"}),e("h1",{className:"flex font-sans  pl-2",children:s==null?void 0:s.customerName})]}),l("div",{className:"flex p-1 text-sm",children:[e("h1",{className:"flex text-gray-900 font-sans font-semibold",children:"Mobile No. :"}),e("h1",{className:"flex font-sans  pl-2",children:s==null?void 0:s.customerMobile})]}),l("div",{className:"flex p-1 text-sm",children:[e("h1",{className:"flex text-gray-900 font-sans font-semibold",children:"Address :"}),e("h1",{className:"flex font-sans pl-2 ",children:s==null?void 0:s.address})]}),l("div",{className:"flex p-1 text-sm",children:[e("h1",{className:"flex text-gray-900 font-sans font-semibold",children:"A Sum of Rs.  :"}),e("h1",{className:"flex font-sans pl-2 ",children:s==null?void 0:s.totalPaidAmount})]}),l("div",{className:"flex p-1 text-sm",children:[e("h1",{className:"flex text-gray-900 font-sans font-semibold",children:"(in words) : "}),e("h1",{className:"flex font-sans pl-2 ",children:s==null?void 0:s.paidAmtInWords})]}),l("div",{className:"flex p-1 text-sm",children:[l("h1",{className:"flex text-gray-900 font-sans font-semibold",children:["Towards : ",e("span",{className:" font-sans font-normal ml-1",children:s==null?void 0:s.towards})]}),l("h1",{className:"flex text-gray-900 font-sans  ml-8 font-semibold",children:["Vide  : ",e("span",{className:" font-sans ml-1 font-normal",children:s==null?void 0:s.paymentMode})]})]})]})})})}),e("div",{className:"grid grid-col-1 md:grid-col-12 xl:grid-col-12 p-2 ",children:e("div",{className:"",children:e("h1",{className:"font-bold text-sm text-left ",children:"N.B. Online Payment/Cheque/Draft/Bankers Cheque are Subject to Realisation"})})}),e("div",{className:"grid grid-col-1 md:grid-col-12 xl:grid-col-12 p-2 -mt-1",children:e("div",{className:"",children:e("h1",{className:"font-bold text-sm text-left ",children:"WATER CONNECTION FEE DETAILS"})})}),e("div",{children:l("table",{className:"w-full border border-gray-500 ",children:[e("thead",{className:" w-full",children:l("tr",{className:"border border-gray-500 text-sm font-sans font-bold text-center ",children:[e("td",{colSpan:2,className:"border-r border-gray-500 w-72",children:e("h1",{className:" ",children:"Description "})}),e("td",{colSpan:1,className:" border-gray-500 w-72",children:e("h1",{className:"",children:"Total Amount "})})]})}),l("tbody",{children:[l("tr",{className:"border border-gray-500 text-sm font-sans  ",children:[e("td",{colSpan:2,className:"border-r border-gray-500 w-72",children:e("h1",{className:"text-left ml-2 ",children:" Connection Fee"})}),e("td",{colSpan:1,className:" border-gray-500 w-72",children:e("h1",{className:" text-right mr-2",children:s!=null&&s.connectionFee?" ₹ "+(s==null?void 0:s.connectionFee):(s==null?void 0:s.connectionFee)==0?0:"N/A"})}),e("td",{className:""})]}),l("tr",{className:"border border-gray-500 text-sm font-sans text-center ",children:[e("td",{colSpan:2,className:"border-r border-gray-500 w-72",children:e("h1",{className:"text-left ml-2 ",children:"Penalty"})}),e("td",{colSpan:1,className:"  border-gray-500 w-72",children:e("h1",{className:" text-right mr-2",children:s!=null&&s.penaltyAmount?" ₹ "+(s==null?void 0:s.penaltyAmount):(s==null?void 0:s.penaltyAmount)==0?0:"N/A"})})]}),l("tr",{className:"border border-gray-500 text-sm font-sans text-center ",children:[e("td",{colSpan:2,className:"border-r border-gray-500 w-72",children:e("h1",{className:" text-left ml-2",children:"Rebate"})}),e("td",{colSpan:1,className:" border-gray-500 w-72",children:e("h1",{className:" text-right mr-2",children:s!=null&&s.rebate?" ₹ "+(s==null?void 0:s.rebate):(s==null?void 0:s.rebate)==0?0:"N/A"})})]}),l("tr",{className:"border border-gray-500 text-sm font-sans text-center ",children:[e("td",{colSpan:2,className:"border-r border-gray-500 w-72",children:e("h1",{className:"text-left ml-2 ",children:"Payable Amount"})}),e("td",{colSpan:1,className:" border-gray-500 w-72",children:e("h1",{className:" text-right mr-2",children:s!=null&&s.totalPaidAmount?" ₹ "+(s==null?void 0:s.totalPaidAmount):(s==null?void 0:s.totalPaidAmount)==0?0:"N/A"})})]})]})]})}),e("div",{children:e("table",{className:"w-full  ",children:l("tr",{className:"",children:[l("td",{className:" ",children:[e("div",{className:"",children:e(S,{url:(d=r())==null?void 0:d.state_logo,size:"64"})}),e("div",{className:"flex ",children:l("h1",{className:"flex text-gray-900 font-sans text-sm",children:["For Details Please Visit : ",(m=r())==null?void 0:m.website]})}),e("div",{className:"flex ",children:l("h1",{className:"flex text-gray-900 font-sans text-sm",children:["Or Call us at ",(h=r())==null?void 0:h.mobile_no," OR ",(f=r())==null?void 0:f.mobile_no_2]})})]}),l("td",{className:"float-right mt-5",children:[e("div",{className:"flex ",children:e("h1",{className:"flex text-gray-900 font-sans text-sm",children:"In Collaboration with"})}),e("div",{className:"flex",children:e("h1",{className:"flex text-gray-900 font-sans text-sm",children:"Sri Publication & Stationers Pvt Ltd"})})]})]})})}),e("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12 p-2 ",children:e("div",{className:"",children:e("h1",{className:"font-semibold text-sm text-center ",children:"**This is a computer-generated receipt and it does not require a physical signature.**"})})}),e("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12",children:e("div",{className:"",children:e("img",{src:"https://zeevector.com/wp-content/uploads/LOGO/Swachh-Bharat-Logo-PNG.png",className:"w-36 mx-auto"})})})]})})})}export{_ as default};
