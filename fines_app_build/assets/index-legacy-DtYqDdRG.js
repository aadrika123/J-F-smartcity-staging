System.register(["./index-legacy-ah2JEICP.js","./router-legacy-ZIRLiol3.js","./useCustomQuery-legacy-a69hriI8.js","./reactQuery-legacy-1Tj_AsDB.js","./reactQueryDevtools-legacy-f3hWO9gP.js","./axios-legacy-V-9BatBQ.js","./tailwind-legacy-4WU_uB-v.js","./reactIcons-legacy-ythRqRRX.js","./reactLazyLoadImageComponent-legacy-6Kg3uOph.js","./headlessui-legacy-zeOI4r4p.js"],(function(l,e){"use strict";var a,t,n,d,i,s,o;return{setters:[function(l){a=l.j,t=l.P,n=l.d,d=l.I,i=l.c},function(l){s=l.e},function(l){o=l.b},null,null,null,null,null,null,null],execute:function(){l("default",(function(){var l,e,u,r,c,x,v,m,b,h,N,j,y,g,f,p,_,D,A,w,C,R,P,T,I,M,W,L,k,Q,V,z,E=s().id,F=o({api:i.api_payment_receipt,config:{transactionNo:E},options:{enabled:!!E}}),O=function(l){return l||"NA"},S="[C]"+O(null==F||null===(l=F.data)||void 0===l||null===(l=l.data)||void 0===l||null===(l=l.ulbDetails)||void 0===l?void 0:l.ulb_name)+"\n"+(null!=F&&null!==(V=F.data)&&void 0!==V&&null!==(V=V.data)&&void 0!==V&&null!==(V=V.ulbDetails)&&void 0!==V&&V.address?"[C]"+(null==F||null===(z=F.data)||void 0===z||null===(z=z.data)||void 0===z||null===(z=z.ulbDetails)||void 0===z?void 0:z.address)+"\n":"")+"[C]Payment Receipt\n \n \nTransaction No: "+O(null==F||null===(e=F.data)||void 0===e||null===(e=e.data)||void 0===e?void 0:e.tran_no)+'\n \n<b>Challan No: </b><b><font size="big">'+O(null==F||null===(u=F.data)||void 0===u||null===(u=u.data)||void 0===u?void 0:u.challan_no)+"</font></b>\n \nName: "+O(null==F||null===(r=F.data)||void 0===r||null===(r=r.data)||void 0===r?void 0:r.full_name)+"\n \nAddress: "+O(null==F||null===(c=F.data)||void 0===c||null===(c=c.data)||void 0===c?void 0:c.street_address)+"\n \nMobile: "+O(null==F||null===(x=F.data)||void 0===x||null===(x=x.data)||void 0===x?void 0:x.mobile)+"\n \nChallan Date: "+O(null==F||null===(v=F.data)||void 0===v||null===(v=v.data)||void 0===v?void 0:v.challan_date)+"\n \nAmount: "+O(null==F||null===(m=F.data)||void 0===m||null===(m=m.data)||void 0===m?void 0:m.amount)+"\n \nIn Word: "+O(null==F||null===(b=F.data)||void 0===b||null===(b=b.data)||void 0===b?void 0:b.amount_in_words)+"\n \nMode: "+O(null==F||null===(h=F.data)||void 0===h||null===(h=h.data)||void 0===h?void 0:h.payment_mode)+"\nTran Date: "+O(null==F||null===(N=F.data)||void 0===N||null===(N=N.data)||void 0===N?void 0:N.tran_date)+"\n \n********************************\n \n"+O(null==F||null===(j=F.data)||void 0===j||null===(j=j.data)||void 0===j?void 0:j.violation_name)+"\n\n[C]Thank You!\n[C]For More Details Please\n[C]Visit:  "+O(null==F||null===(y=F.data)||void 0===y||null===(y=y.data)||void 0===y||null===(y=y.ulbDetails)||void 0===y?void 0:y.parent_website)+"\n[C]Mail:"+O(null==F||null===(g=F.data)||void 0===g||null===(g=g.data)||void 0===g||null===(g=g.ulbDetails)||void 0===g?void 0:g.email)+"\n";return F.isLoading?a.jsx(t,{title:"Payment Receipt",children:a.jsx("div",{className:"flex justify-center items-center h-screen",children:a.jsx("div",{className:"flex justify-center items-center",children:a.jsx(n,{})})})}):a.jsx(t,{title:"Payment Receipt",children:a.jsxs("div",{className:"p-4",children:[a.jsx("div",{className:"text-center mb-1",children:a.jsx("h1",{className:"text-base font-semibold text-blue-gray-500",children:"Payment Receipt"})}),a.jsxs("div",{className:"border p-4 rounded-lg",children:[a.jsx("div",{className:"flex justify-center",children:a.jsx(d,{src:(null==F||null===(f=F.data)||void 0===f||null===(f=f.data)||void 0===f||null===(f=f.ulbDetails)||void 0===f?void 0:f.ulb_logo)||"/jh-logo.webp",alt:"logo",className:"w-16 h-16"})}),a.jsxs("div",{className:"text-center mt-2",children:[a.jsx("h1",{className:"text-lg font-semibold text-blue-gray-500",children:null==F||null===(p=F.data)||void 0===p||null===(p=p.data)||void 0===p||null===(p=p.ulbDetails)||void 0===p?void 0:p.ulb_name}),a.jsx("h1",{className:"text-xs font-semibold text-blue-gray-500",children:null==F||null===(_=F.data)||void 0===_||null===(_=_.data)||void 0===_||null===(_=_.ulbDetails)||void 0===_?void 0:_.address}),a.jsx("h1",{className:"text-xs font-semibold text-blue-gray-500 mt-2",children:"Payment Receipt"})]}),a.jsx("div",{className:"border-t border-gray-200 my-4"}),a.jsx("div",{className:"mt-4",children:a.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[a.jsxs("div",{children:[a.jsx("h1",{className:"text-xs font-semibold text-blue-gray-500 mt-2",children:"Transaction No"}),a.jsx("h1",{className:"text-xs font-semibold text-blue-gray-500 mt-2",children:"Challan No :"}),a.jsx("h1",{className:"text-xs font-semibold text-blue-gray-500 mt-2",children:"Name :"}),a.jsx("h1",{className:"text-xs font-semibold text-blue-gray-500 mt-2",children:"Address :"}),a.jsx("h1",{className:"text-xs font-semibold text-blue-gray-500 mt-2",children:"Mobile :"}),a.jsx("h1",{className:"text-xs font-semibold text-blue-gray-500 mt-2",children:"Challan Date :"}),a.jsx("h1",{className:"text-xs font-semibold text-blue-gray-500 mt-2",children:"Amount :"}),a.jsx("h1",{className:"text-xs font-semibold text-blue-gray-500 mt-2",children:"In Word :"}),a.jsx("h1",{className:"text-xs font-semibold text-blue-gray-500 mt-2",children:"Mode :"}),a.jsx("h1",{className:"text-xs font-semibold text-blue-gray-500 mt-2",children:"Transaction Date :"})]}),a.jsxs("div",{children:[a.jsx("p",{className:"text-xs  text-blue-gray-500 mt-2",children:(null==F||null===(D=F.data)||void 0===D||null===(D=D.data)||void 0===D?void 0:D.tran_no)||"NA"}),a.jsx("p",{className:"text-xs  text-blue-gray-500 mt-2",children:(null==F||null===(A=F.data)||void 0===A||null===(A=A.data)||void 0===A?void 0:A.challan_no)||"NA"}),a.jsx("p",{className:"text-xs  text-blue-gray-500 mt-2",children:(null==F||null===(w=F.data)||void 0===w||null===(w=w.data)||void 0===w?void 0:w.full_name)||"NA"}),a.jsx("p",{className:"text-xs  text-blue-gray-500 mt-2",children:(null==F||null===(C=F.data)||void 0===C||null===(C=C.data)||void 0===C?void 0:C.street_address)||"NA"}),a.jsx("p",{className:"text-xs  text-blue-gray-500 mt-2",children:(null==F||null===(R=F.data)||void 0===R||null===(R=R.data)||void 0===R?void 0:R.mobile)||"NA"}),a.jsx("p",{className:"text-xs  text-blue-gray-500 mt-2",children:(null==F||null===(P=F.data)||void 0===P||null===(P=P.data)||void 0===P?void 0:P.challan_date)||"NA"}),a.jsx("p",{className:"text-xs  text-blue-gray-500 mt-2",children:(null==F||null===(T=F.data)||void 0===T||null===(T=T.data)||void 0===T?void 0:T.amount)||"NA"}),a.jsx("p",{className:"text-xs  text-blue-gray-500 mt-2",children:(null==F||null===(I=F.data)||void 0===I||null===(I=I.data)||void 0===I?void 0:I.amount_in_words)||"NA"}),a.jsx("p",{className:"text-xs  text-blue-gray-500 mt-2",children:(null==F||null===(M=F.data)||void 0===M||null===(M=M.data)||void 0===M?void 0:M.payment_mode)||"NA"}),a.jsx("p",{className:"text-xs  text-blue-gray-500 mt-2",children:(null==F||null===(W=F.data)||void 0===W||null===(W=W.data)||void 0===W?void 0:W.tran_date)||"NA"})]})]})}),a.jsx("div",{className:"border-t border-gray-200 my-4"}),a.jsx("div",{className:"text-center mt-4",children:a.jsx("h1",{className:"text-xs font-semibold text-blue-gray-500",children:null==F||null===(L=F.data)||void 0===L||null===(L=L.data)||void 0===L?void 0:L.violation_name})}),a.jsx("div",{className:"border-t border-gray-200 my-4"}),a.jsx("div",{className:"text-center mt-2",children:a.jsxs("h1",{className:"text-xs font-semibold text-blue-gray-500",children:["Email : ",null==F||null===(k=F.data)||void 0===k||null===(k=k.data)||void 0===k||null===(k=k.ulbDetails)||void 0===k?void 0:k.email]})}),a.jsx("div",{className:"text-center mt-1",children:a.jsxs("h1",{className:"text-xs font-semibold text-blue-gray-500",children:["Website : ",null==F||null===(Q=F.data)||void 0===Q||null===(Q=Q.data)||void 0===Q||null===(Q=Q.ulbDetails)||void 0===Q?void 0:Q.parent_website]})})]}),a.jsx("div",{className:"flex justify-center mt-4",children:a.jsx("button",{onClick:function(){window.ReactNativeWebView&&window.ReactNativeWebView.postMessage(JSON.stringify({Key:"PRINT_FOR_BT_PRINTER",keyData:{charPerLine:32,printTxt:S}}))},type:"button",className:"inline-flex justify-center px-4 py-1.5 font-bold text-xs text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500",children:"Print Receipt"})})]})})}))}}}));
