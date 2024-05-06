import{H as B,J as W,j as e,cD as z,bv as G,r as Y,k as V,A as X,aI as J,aJ as K,aY as Z}from"./index-a8a14e0c.js";import{R as $}from"./index-5ec99d37.js";import{Q as U}from"./QrCode-ace15f61.js";class ee extends B.Component{render(){var c,x,d,i,o,m,h,f,a,t,r,n,j,N,p,b,g,y,u,v,D,w,A,T,R,P,C,S,F,I,_,E,H,L,k,M,O,Q;let s=W();return e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:[e.jsx("div",{className:"md:px-0 flex-1 "}),e.jsx("div",{className:"md:px-0 flex-1 ",children:e.jsxs("button",{onClick:()=>window.print(),className:"float-right pl-4 pr-6 py-1 bg-sky-400 text-white font-medium text-xs leading-tight uppercase rounded  hover:bg-amber-100 hover: focus: focus:outline-none focus:ring-0  active: transition duration-150 ease-in-out",children:[e.jsx(z,{className:"inline text-lg"}),"print"]})})]}),e.jsx("div",{id:"printableArea",className:"",children:e.jsx("div",{children:e.jsxs("div",{className:"border-2 border-dashed border-gray-600  bg-white p-6 w-[250mm] h-auto ml-12 md:mx-auto lg:mx-auto  container  mt-12 pb-12",children:[e.jsxs("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12 ",children:[e.jsx("div",{className:"",children:e.jsx("img",{src:s==null?void 0:s.ulb_logo,className:"h-20 mx-auto"})}),e.jsx("div",{className:"",children:e.jsx("img",{src:s==null?void 0:s.state_logo,alt:"",className:"w-[22rem] h-[22rem]  absolute z-10 bg-transparent opacity-20 mt-[16rem] ml-[17rem]  rounded-full border"})})]}),e.jsx("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12 p-2 ",children:e.jsx("div",{className:"",children:e.jsx("h1",{className:"font-bold text-4xl text-center uppercase ",children:s==null?void 0:s.ulb_name})})}),e.jsx("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12 p-2 ",children:e.jsx("div",{className:"mx-auto",children:e.jsxs("h1",{className:"font-semibold text-2xl text-center text-gray-800 border border-gray-700 w-[20rem] ",children:["HOLDING TAX ",e.jsx("br",{})," PAYMENT RECEIPT"]})})}),e.jsx("div",{children:e.jsx("table",{className:"w-full  p-2 mt-1",children:e.jsxs("tr",{className:"",children:[e.jsxs("td",{className:" ",children:[e.jsxs("div",{className:"flex p-1 text-xl",children:[e.jsx("h1",{className:"flex text-gray-900 font-sans ",children:"Receipt No. :"}),e.jsxs("h1",{className:"flex font-sans font-semibold  pl-2",children:[" ",(x=(c=this.props)==null?void 0:c.paymentData)==null?void 0:x.transactionNo]})]}),e.jsxs("div",{className:"flex p-1 text-xl",children:[e.jsx("h1",{className:"flex text-gray-900 font-sans ",children:"Department/Section :"}),e.jsx("h1",{className:"flex font-sans font-semibold pl-2 ",children:(i=(d=this.props)==null?void 0:d.paymentData)==null?void 0:i.departmentSection})]}),e.jsxs("div",{className:"flex p-1 text-xl",children:[e.jsx("h1",{className:"flex text-gray-900 font-sans ",children:"Account Description :"}),e.jsx("h1",{className:"flex font-sans font-semibold pl-2 ",children:(m=(o=this.props)==null?void 0:o.paymentData)==null?void 0:m.accountDescription})]}),e.jsx("div",{className:"flex p-1 text-xl"})]}),e.jsxs("td",{className:" ",children:[e.jsxs("div",{className:"flex p-1 text-xl",children:[e.jsx("h1",{className:"flex text-gray-900 font-sans ",children:"Date :"}),e.jsx("h1",{className:"flex font-sans font-semibold pl-2 ",children:(f=(h=this.props)==null?void 0:h.paymentData)==null?void 0:f.transactionDate})]}),e.jsxs("div",{className:"flex p-1 text-xl",children:[e.jsx("h1",{className:"flex text-gray-900 font-sans ",children:"Ward No. :"}),e.jsx("h1",{className:"flex font-sans font-semibold pl-2 ",children:(t=(a=this.props)==null?void 0:a.paymentData)==null?void 0:t.newWardNo})]}),e.jsxs("div",{className:"flex p-1 text-xl",children:[e.jsx("h1",{className:"flex text-gray-900 font-sans ",children:((r=this.props)==null?void 0:r.module)=="holding"?"Holding No. ":"Applicatin No. "}),e.jsx("h1",{className:"flex font-sans font-semibold pl-2 ",children:(j=(n=this.props)==null?void 0:n.paymentData)==null?void 0:j.applicationNo})]}),e.jsx("div",{className:"flex p-1 text-xl",children:"  "}),e.jsx("div",{className:"flex p-1 text-xl"}),e.jsx("div",{className:"flex p-1 text-xl",children:"  "}),e.jsx("div",{className:"flex p-1 text-xl"})]})]})})}),e.jsx("div",{children:e.jsx("table",{className:"w-full  p-2 mt-4",children:e.jsx("tr",{className:"",children:e.jsxs("td",{className:" ",children:[e.jsxs("div",{className:"flex p-1 text-xl",children:[e.jsx("h1",{className:"flex text-gray-900 font-sans ",children:"Received From Mr/Mrs/Miss :"}),e.jsx("h1",{className:"flex font-sans font-semibold  pl-2",children:(p=(N=this.props)==null?void 0:N.paymentData)==null?void 0:p.customerName})]}),e.jsxs("div",{className:"flex p-1 text-xl",children:[e.jsx("h1",{className:"flex text-gray-900 font-sans ",children:"Address :"}),e.jsx("h1",{className:"flex font-sans font-semibold pl-2 ",children:(g=(b=this.props)==null?void 0:b.paymentData)==null?void 0:g.address})]}),e.jsxs("div",{className:"flex p-1 text-xl",children:[e.jsx("h1",{className:"flex text-gray-900 font-sans ",children:"A Sum of Rs.  :"}),e.jsx("h1",{className:"flex font-sans font-semibold pl-2 ",children:(u=(y=this.props)==null?void 0:y.paymentData)==null?void 0:u.totalPaidAmount})]}),e.jsxs("div",{className:"flex p-1 text-xl",children:[e.jsx("h1",{className:"flex text-gray-900 font-sans ",children:"(in words) :"}),e.jsxs("h1",{className:"flex font-sans font-semibold pl-2 border-b border-dashed border-gray-600 ",children:[" ",(D=(v=this.props)==null?void 0:v.paymentData)==null?void 0:D.paidAmtInWords," Rupees Only"]})]}),e.jsxs("div",{className:"flex p-1 text-xl",children:[e.jsxs("h1",{className:"flex text-gray-900 font-sans ",children:["towards : ",e.jsx("span",{className:" font-sans font-semibold ml-1",children:(A=(w=this.props)==null?void 0:w.paymentData)==null?void 0:A.towards})]}),e.jsxs("h1",{className:"flex text-gray-900 font-sans  ml-8 ",children:["Vide : ",(R=(T=this.props)==null?void 0:T.paymentData)==null?void 0:R.paymentMode," ",e.jsx("span",{className:" font-sans font-semibold ml-1"})]})]})]})})})}),e.jsx("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12 p-2 mt-3",children:e.jsx("div",{className:"",children:e.jsx("h1",{className:"font-bold text-xl text-left ",children:"N.B. Online Payment/Cheque/Draft/Bankers Cheque are Subject to Realisation"})})}),e.jsx("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12 p-2 -mt-1",children:e.jsx("div",{className:"",children:e.jsx("h1",{className:"font-bold text-xl text-left ",children:"HOLDING TAX DETAILS"})})}),e.jsx("div",{children:e.jsxs("table",{className:"w-full border border-gray-500 ",children:[e.jsxs("thead",{className:" w-full",children:[e.jsxs("tr",{className:"flex  text-xl   ",children:[e.jsx("td",{className:" text-center border-r  w-48",children:e.jsx("h1",{className:" text-gray-900 font-sans ",children:"Description"})}),e.jsx("td",{className:"flex-1 text-center border border-gray-500",children:e.jsx("h1",{className:" text-gray-900 font-sans",children:"Period"})}),e.jsx("td",{className:" text-center  border-l w-48",children:e.jsx("h1",{className:" text-gray-900 font-sans",children:"Total Amount"})})]}),e.jsxs("tr",{className:"flex text-xl ",children:[e.jsx("td",{className:"text-center w-48"}),e.jsx("td",{className:"flex-1 first-line:text-center border-b border-r border-l border-gray-500",children:e.jsxs("tr",{className:"flex  ",children:[e.jsx("td",{className:"flex-1 text-center border-r border-gray-500",children:e.jsx("h1",{className:" text-gray-900 font-sans",children:"From"})}),e.jsx("td",{className:"flex-1 text-center ",children:e.jsx("h1",{className:" text-gray-900 font-sans",children:"To"})})]})}),e.jsx("td",{className:"text-center border-l w-48"})]}),e.jsxs("tr",{className:"flex  text-xl   border-b border-gray-500",children:[e.jsx("td",{className:"text-center w-48 ",children:" "}),e.jsx("td",{className:"flex-1 text-center  border-r border-l border-gray-500",children:e.jsxs("tr",{className:"flex  ",children:[e.jsx("td",{className:"flex-1 text-center ",children:e.jsxs("tr",{className:"flex  ",children:[e.jsx("td",{className:"flex-1 text-center ",children:e.jsx("h1",{className:" text-gray-900 font-sans border-r border-gray-500",children:"QTR"})}),e.jsx("td",{className:"flex-1 text-center ",children:e.jsx("h1",{className:" text-gray-900 font-sans border-r border-gray-500",children:"FY"})})]})}),e.jsx("td",{className:"flex-1   text-center",children:e.jsxs("tr",{className:"flex  ",children:[e.jsx("td",{className:"flex-1 text-center ",children:e.jsx("h1",{className:" text-gray-900 font-sans border-r border-gray-500",children:"QTR"})}),e.jsx("td",{className:"flex-1 text-center",children:e.jsx("h1",{className:" text-gray-900 font-sans ",children:"FY"})})]})})]})}),e.jsx("td",{className:"text-center border-l w-48",children:" "})]})]}),e.jsxs("tbody",{children:[e.jsxs("tr",{className:"flex  border-b border-gray-500  text-xl ",children:[e.jsx("td",{className:" text-center w-48",children:e.jsx("h1",{className:" font-sans font-semibold ",children:"Holding Tax"})}),e.jsx("td",{className:"flex-1 text-center border-r border-l border-gray-500",children:e.jsxs("tr",{className:"flex  ",children:[e.jsx("td",{className:"flex-1 text-center ",children:e.jsxs("tr",{className:"flex  ",children:[e.jsx("td",{className:"flex-1 text-center ",children:e.jsx("h1",{className:"font-sans font-semibold  border-r border-gray-500 text-[0.7rem]",children:(C=(P=this.props)==null?void 0:P.paymentData)==null?void 0:C.paidFromQtr})}),e.jsx("td",{className:"flex-1 text-center ",children:e.jsx("h1",{className:"font-sans font-semibold  border-r border-gray-500 text-[0.7rem]",children:(F=(S=this.props)==null?void 0:S.paymentData)==null?void 0:F.paidFrom})})]})}),e.jsx("td",{className:"flex-1   text-center",children:e.jsxs("tr",{className:"flex  ",children:[e.jsx("td",{className:"flex-1 text-center ",children:e.jsx("h1",{className:" font-sans font-semibold border-r border-gray-500 text-[0.7rem]",children:(_=(I=this.props)==null?void 0:I.paymentData)==null?void 0:_.paidUptoQtr})}),e.jsx("td",{className:"flex-1 text-center",children:e.jsx("h1",{className:" font-sans font-semibold text-[0.7rem]",children:(H=(E=this.props)==null?void 0:E.paymentData)==null?void 0:H.paidUpto})})]})})]})}),e.jsx("td",{className:"text-center border-l w-48",children:e.jsx("h1",{className:" font-sans font-semibold ",children:(k=(L=this.props)==null?void 0:L.paymentData)==null?void 0:k.demandAmount})})]}),(Q=(O=(M=this.props)==null?void 0:M.paymentData)==null?void 0:O.taxDetails)==null?void 0:Q.map(l=>e.jsxs("tr",{className:"flex border-b border-gray-500  text-xl ",children:[e.jsx("td",{className:"flex-1 text-center ",children:e.jsx("h1",{className:" font-sans font-semibold ",children:" "})}),e.jsx("td",{className:"flex-1 text-center ",children:e.jsxs("tr",{className:"flex",children:[e.jsx("td",{className:"flex-1 text-center ",children:e.jsxs("tr",{className:"flex",children:[e.jsx("td",{className:"flex-1 text-center ",children:e.jsx("h1",{className:"font-sans font-semibold"})}),e.jsx("td",{className:"flex-1 text-center ",children:e.jsx("h1",{className:"font-sans font-semibold"})})]})}),e.jsx("td",{className:"flex-1 text-right",children:e.jsx("tr",{className:" ",children:e.jsx("td",{className:" ",children:e.jsx("h1",{className:"-ml-16 font-sans font-semibold text-sm",children:l==null?void 0:l.keyString})})})})]})}),e.jsx("td",{className:" text-center border-l border-gray-500 w-48",children:e.jsx("h1",{className:" font-sans font-semibold ",children:l==null?void 0:l.value})})]}))]})]})}),e.jsx("div",{children:e.jsx("table",{className:"w-full mt-10 ",children:e.jsxs("tr",{className:"",children:[e.jsxs("td",{className:" ",children:[e.jsx("div",{className:"",children:e.jsx(U,{url:window.location.href,size:"64"})}),e.jsx("div",{className:"flex ",children:e.jsxs("h1",{className:"flex text-gray-900 font-sans text-xl",children:["For Details Please Visit : ",s==null?void 0:s.website]})}),e.jsx("div",{className:"flex ",children:e.jsxs("h1",{className:"flex text-gray-900 font-sans text-xl",children:["Or Call us at ",s==null?void 0:s.mobile_no," or ",s==null?void 0:s.mobile_no_2]})})]}),e.jsxs("td",{className:"float-right mt-16",children:[e.jsx("div",{className:"flex ",children:e.jsx("h1",{className:"flex text-gray-900 font-sans text-xl",children:"In Collaboration with"})}),e.jsx("div",{className:"flex",children:e.jsx("h1",{className:"flex text-gray-900 font-sans text-xl",children:"Sri Publication & Stationers Pvt Ltd"})})]})]})})}),e.jsx("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12 p-2 mt-2",children:e.jsx("div",{className:"",children:e.jsx("h1",{className:"font-semibold text-xl text-center ",children:"**This is a computer-generated receipt and it does not require a signature.**"})})})]})})})]})}}class ae extends B.Component{render(){var c,x,d,i,o,m,h,f,a,t,r,n,j,N,p,b,g,y,u,v,D,w,A,T,R,P,C,S,F,I,_,E,H,L,k,M,O,Q;let s=W();return e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:[e.jsx("div",{className:"md:px-0 flex-1 "}),e.jsx("div",{className:"md:px-0 flex-1 ",children:e.jsxs("button",{onClick:()=>window.print(),className:"float-right pl-4 pr-6 py-1 bg-sky-400 text-white font-medium text-xs leading-tight uppercase rounded  hover:bg-amber-100 hover: focus: focus:outline-none focus:ring-0  active: transition duration-150 ease-in-out",children:[e.jsx(z,{className:"inline text-lg"}),"print"]})})]}),e.jsx("div",{id:"printableArea",className:"",children:e.jsx("div",{children:e.jsxs("div",{className:"border-2 border-dashed border-gray-600  bg-white p-6 w-[250mm] h-auto ml-12 md:mx-auto lg:mx-auto  container  mt-12 pb-12",children:[e.jsxs("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12 ",children:[e.jsx("div",{className:"",children:e.jsx("img",{src:s==null?void 0:s.ulb_logo,className:"h-20 mx-auto"})}),e.jsx("div",{className:"",children:e.jsx("img",{src:s==null?void 0:s.state_logo,alt:"",className:"w-[22rem] h-[22rem]  absolute z-10 bg-transparent opacity-20 mt-[16rem] ml-[17rem]  rounded-full border"})})]}),e.jsx("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12 p-2 ",children:e.jsx("div",{className:"",children:e.jsx("h1",{className:"font-bold text-4xl text-center uppercase ",children:s==null?void 0:s.ulb_name})})}),e.jsx("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12 p-2 ",children:e.jsx("div",{className:"mx-auto",children:e.jsxs("h1",{className:"font-semibold text-2xl text-center text-gray-800 border border-gray-700 w-[20rem] ",children:["HOLDING TAX ",e.jsx("br",{})," PAYMENT RECEIPT"]})})}),e.jsx("div",{children:e.jsx("table",{className:"w-full  p-2 mt-1",children:e.jsxs("tr",{className:"",children:[e.jsxs("td",{className:" ",children:[e.jsxs("div",{className:"flex p-1 text-xl",children:[e.jsx("h1",{className:"flex text-gray-900 font-sans ",children:"Receipt No. :"}),e.jsxs("h1",{className:"flex font-sans font-semibold  pl-2",children:[" ",(x=(c=this.props)==null?void 0:c.paymentData)==null?void 0:x.transactionNo]})]}),e.jsxs("div",{className:"flex p-1 text-xl",children:[e.jsx("h1",{className:"flex text-gray-900 font-sans ",children:"Department/Section :"}),e.jsx("h1",{className:"flex font-sans font-semibold pl-2 ",children:(i=(d=this.props)==null?void 0:d.paymentData)==null?void 0:i.departmentSection})]}),e.jsxs("div",{className:"flex p-1 text-xl",children:[e.jsx("h1",{className:"flex text-gray-900 font-sans ",children:"Account Description :"}),e.jsx("h1",{className:"flex font-sans font-semibold pl-2 ",children:(m=(o=this.props)==null?void 0:o.paymentData)==null?void 0:m.accountDescription})]}),e.jsx("div",{className:"flex p-1 text-xl"})]}),e.jsxs("td",{className:" ",children:[e.jsxs("div",{className:"flex p-1 text-xl",children:[e.jsx("h1",{className:"flex text-gray-900 font-sans ",children:"Date :"}),e.jsx("h1",{className:"flex font-sans font-semibold pl-2 ",children:(f=(h=this.props)==null?void 0:h.paymentData)==null?void 0:f.transactionDate})]}),e.jsxs("div",{className:"flex p-1 text-xl",children:[e.jsx("h1",{className:"flex text-gray-900 font-sans ",children:"Ward No. :"}),e.jsx("h1",{className:"flex font-sans font-semibold pl-2 ",children:(t=(a=this.props)==null?void 0:a.paymentData)==null?void 0:t.newWardNo})]}),e.jsxs("div",{className:"flex p-1 text-xl",children:[e.jsx("h1",{className:"flex text-gray-900 font-sans ",children:((r=this.props)==null?void 0:r.module)=="holding"?"Holding No. ":"Applicatin No. "}),e.jsx("h1",{className:"flex font-sans font-semibold pl-2 ",children:(j=(n=this.props)==null?void 0:n.paymentData)==null?void 0:j.applicationNo})]}),e.jsx("div",{className:"flex p-1 text-xl",children:"  "}),e.jsx("div",{className:"flex p-1 text-xl"}),e.jsx("div",{className:"flex p-1 text-xl",children:"  "}),e.jsx("div",{className:"flex p-1 text-xl"})]})]})})}),e.jsx("div",{children:e.jsx("table",{className:"w-full  p-2 mt-4",children:e.jsx("tr",{className:"",children:e.jsxs("td",{className:" ",children:[e.jsxs("div",{className:"flex p-1 text-xl",children:[e.jsx("h1",{className:"flex text-gray-900 font-sans ",children:"Received From Mr/Mrs/Miss :"}),e.jsx("h1",{className:"flex font-sans font-semibold  pl-2",children:(p=(N=this.props)==null?void 0:N.paymentData)==null?void 0:p.customerName})]}),e.jsxs("div",{className:"flex p-1 text-xl",children:[e.jsx("h1",{className:"flex text-gray-900 font-sans ",children:"Address :"}),e.jsx("h1",{className:"flex font-sans font-semibold pl-2 ",children:(g=(b=this.props)==null?void 0:b.paymentData)==null?void 0:g.address})]}),e.jsxs("div",{className:"flex p-1 text-xl",children:[e.jsx("h1",{className:"flex text-gray-900 font-sans ",children:"A Sum of Rs.  :"}),e.jsx("h1",{className:"flex font-sans font-semibold pl-2 ",children:(u=(y=this.props)==null?void 0:y.paymentData)==null?void 0:u.totalPaidAmount})]}),e.jsxs("div",{className:"flex p-1 text-xl",children:[e.jsx("h1",{className:"flex text-gray-900 font-sans ",children:"(in words) :"}),e.jsxs("h1",{className:"flex font-sans font-semibold pl-2 border-b border-dashed border-gray-600 ",children:[" ",(D=(v=this.props)==null?void 0:v.paymentData)==null?void 0:D.paidAmtInWords," Rupees Only"]})]}),e.jsxs("div",{className:"flex p-1 text-xl",children:[e.jsxs("h1",{className:"flex text-gray-900 font-sans ",children:["towards : ",e.jsx("span",{className:" font-sans font-semibold ml-1",children:(A=(w=this.props)==null?void 0:w.paymentData)==null?void 0:A.towards})]}),e.jsxs("h1",{className:"flex text-gray-900 font-sans  ml-8 ",children:["Vide : ",(R=(T=this.props)==null?void 0:T.paymentData)==null?void 0:R.paymentMode," ",e.jsx("span",{className:" font-sans font-semibold ml-1"})]})]})]})})})}),e.jsx("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12 p-2 mt-3",children:e.jsx("div",{className:"",children:e.jsx("h1",{className:"font-bold text-xl text-left ",children:"N.B. Online Payment/Cheque/Draft/Bankers Cheque are Subject to Realisation"})})}),e.jsx("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12 p-2 -mt-1",children:e.jsx("div",{className:"",children:e.jsx("h1",{className:"font-bold text-xl text-left ",children:"HOLDING TAX DETAILS"})})}),e.jsx("div",{children:e.jsxs("table",{className:"w-full border border-gray-500 ",children:[e.jsxs("thead",{className:" w-full",children:[e.jsxs("tr",{className:"flex  text-xl   ",children:[e.jsx("td",{className:" text-center border-r  w-48",children:e.jsx("h1",{className:" text-gray-900 font-sans ",children:"Description"})}),e.jsx("td",{className:"flex-1 text-center border border-gray-500",children:e.jsx("h1",{className:" text-gray-900 font-sans",children:"Period"})}),e.jsx("td",{className:" text-center  border-l w-48",children:e.jsx("h1",{className:" text-gray-900 font-sans",children:"Total Amount"})})]}),e.jsxs("tr",{className:"flex text-xl ",children:[e.jsx("td",{className:"text-center w-48"}),e.jsx("td",{className:"flex-1 first-line:text-center border-b border-r border-l border-gray-500",children:e.jsxs("tr",{className:"flex  ",children:[e.jsx("td",{className:"flex-1 text-center border-r border-gray-500",children:e.jsx("h1",{className:" text-gray-900 font-sans",children:"From"})}),e.jsx("td",{className:"flex-1 text-center ",children:e.jsx("h1",{className:" text-gray-900 font-sans",children:"To"})})]})}),e.jsx("td",{className:"text-center border-l w-48"})]}),e.jsxs("tr",{className:"flex  text-xl   border-b border-gray-500",children:[e.jsx("td",{className:"text-center w-48 ",children:" "}),e.jsx("td",{className:"flex-1 text-center  border-r border-l border-gray-500",children:e.jsxs("tr",{className:"flex  ",children:[e.jsx("td",{className:"flex-1 text-center ",children:e.jsxs("tr",{className:"flex  ",children:[e.jsx("td",{className:"flex-1 text-center ",children:e.jsx("h1",{className:" text-gray-900 font-sans border-r border-gray-500",children:"QTR"})}),e.jsx("td",{className:"flex-1 text-center ",children:e.jsx("h1",{className:" text-gray-900 font-sans border-r border-gray-500",children:"FY"})})]})}),e.jsx("td",{className:"flex-1   text-center",children:e.jsxs("tr",{className:"flex  ",children:[e.jsx("td",{className:"flex-1 text-center ",children:e.jsx("h1",{className:" text-gray-900 font-sans border-r border-gray-500",children:"QTR"})}),e.jsx("td",{className:"flex-1 text-center",children:e.jsx("h1",{className:" text-gray-900 font-sans ",children:"FY"})})]})})]})}),e.jsx("td",{className:"text-center border-l w-48",children:" "})]})]}),e.jsxs("tbody",{children:[e.jsxs("tr",{className:"flex  border-b border-gray-500  text-xl ",children:[e.jsx("td",{className:" text-center w-48",children:e.jsx("h1",{className:" font-sans font-semibold ",children:"Holding Tax"})}),e.jsx("td",{className:"flex-1 text-center border-r border-l border-gray-500",children:e.jsxs("tr",{className:"flex  ",children:[e.jsx("td",{className:"flex-1 text-center ",children:e.jsxs("tr",{className:"flex  ",children:[e.jsx("td",{className:"flex-1 text-center ",children:e.jsx("h1",{className:"font-sans font-semibold  border-r border-gray-500 text-[0.7rem]",children:(C=(P=this.props)==null?void 0:P.paymentData)==null?void 0:C.paidFromQtr})}),e.jsx("td",{className:"flex-1 text-center ",children:e.jsx("h1",{className:"font-sans font-semibold  border-r border-gray-500 text-[0.7rem]",children:(F=(S=this.props)==null?void 0:S.paymentData)==null?void 0:F.paidFrom})})]})}),e.jsx("td",{className:"flex-1   text-center",children:e.jsxs("tr",{className:"flex  ",children:[e.jsx("td",{className:"flex-1 text-center ",children:e.jsx("h1",{className:" font-sans font-semibold border-r border-gray-500 text-[0.7rem]",children:(_=(I=this.props)==null?void 0:I.paymentData)==null?void 0:_.paidUptoQtr})}),e.jsx("td",{className:"flex-1 text-center",children:e.jsx("h1",{className:" font-sans font-semibold text-[0.7rem]",children:(H=(E=this.props)==null?void 0:E.paymentData)==null?void 0:H.paidUpto})})]})})]})}),e.jsx("td",{className:"text-center border-l w-48",children:e.jsx("h1",{className:" font-sans font-semibold ",children:(k=(L=this.props)==null?void 0:L.paymentData)==null?void 0:k.demandAmount})})]}),(Q=(O=(M=this.props)==null?void 0:M.paymentData)==null?void 0:O.taxDetails)==null?void 0:Q.map(l=>e.jsxs("tr",{className:"flex border-b border-gray-500  text-xl ",children:[e.jsx("td",{className:"flex-1 text-center ",children:e.jsx("h1",{className:" font-sans font-semibold ",children:" "})}),e.jsx("td",{className:"flex-1 text-center ",children:e.jsxs("tr",{className:"flex",children:[e.jsx("td",{className:"flex-1 text-center ",children:e.jsxs("tr",{className:"flex",children:[e.jsx("td",{className:"flex-1 text-center ",children:e.jsx("h1",{className:"font-sans font-semibold"})}),e.jsx("td",{className:"flex-1 text-center ",children:e.jsx("h1",{className:"font-sans font-semibold"})})]})}),e.jsx("td",{className:"flex-1 text-right",children:e.jsx("tr",{className:" ",children:e.jsx("td",{className:" ",children:e.jsx("h1",{className:"-ml-16 font-sans font-semibold text-sm",children:l==null?void 0:l.keyString})})})})]})}),e.jsx("td",{className:" text-center border-l border-gray-500 w-48",children:e.jsx("h1",{className:" font-sans font-semibold ",children:l==null?void 0:l.value})})]}))]})]})}),e.jsx("div",{children:e.jsx("table",{className:"w-full mt-10 ",children:e.jsxs("tr",{className:"",children:[e.jsxs("td",{className:" ",children:[e.jsx("div",{className:"",children:e.jsx(U,{url:window.location.href,size:"64"})}),e.jsx("div",{className:"flex ",children:e.jsxs("h1",{className:"flex text-gray-900 font-sans text-xl",children:["For Details Please Visit : ",s==null?void 0:s.website]})}),e.jsx("div",{className:"flex ",children:e.jsxs("h1",{className:"flex text-gray-900 font-sans text-xl",children:["Or Call us at ",s==null?void 0:s.mobile_no," or ",s==null?void 0:s.mobile_no_2]})})]}),e.jsxs("td",{className:"float-right mt-16",children:[e.jsx("div",{className:"flex ",children:e.jsx("h1",{className:"flex text-gray-900 font-sans text-xl",children:"In Collaboration with"})}),e.jsx("div",{className:"flex",children:e.jsx("h1",{className:"flex text-gray-900 font-sans text-xl",children:"Sri Publication & Stationers Pvt Ltd"})})]})]})})}),e.jsx("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12 p-2 mt-2",children:e.jsx("div",{className:"",children:e.jsx("h1",{className:"font-semibold text-xl text-center ",children:"**This is a computer-generated receipt and it does not require a signature.**"})})})]})})})]})}}function re(){const{paymentId:q,module:s}=G(),c=Y.useRef(),[x,d]=Y.useState(),[i,o]=Y.useState(!1);V("Payment Receipt");const{api_getPaymentData:m,api_getHoldingReceiptUrl:h}=Z();Y.useEffect(()=>{f()},[]);const f=()=>{a(!0),window.localStorage.getItem("token");let t,r;s=="holding"?(t=h,r={tranNo:q}):(t=m,r={tranNo:q}),X.post(t,r,J()).then(n=>{n.data.status?(d(n.data.data),setTimeout(()=>{a(!1)},500)):a(!1)}).catch(n=>{setTimeout(()=>{a(!1)},500)})},a=t=>{o(t)};return e.jsxs("div",{children:[i&&e.jsx(K,{}),e.jsx($,{trigger:()=>e.jsx("button",{}),content:()=>c.current}),e.jsx(ee,{module:s,ref:c,paymentData:x})]})}export{re as default};
