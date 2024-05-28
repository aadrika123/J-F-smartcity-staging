import{j as s,P as we,d as Ie,I as We,c as ke}from"./index-mo0knpl2.js";import{e as Ee}from"./router-WshRxXk2.js";import{b as Le}from"./useCustomQuery-uMtzZsfp.js";import"./reactQuery-2daanlHr.js";import"./reactQueryDevtools-6dm9iask.js";import"./axios-YpSsR79r.js";import"./tailwind-Ucrx0-S6.js";import"./reactIcons-UnuJhE_7.js";import"./reactLazyLoadImageComponent-2lnvQYCj.js";import"./headlessui-oHdMYZDI.js";function qe(){var d,i,a,r,x,n,c,o,b,m,h,u,N,j,g,f,_,v,A,P,R,w,C,T,M,I,W,k,E,L,V,B,F,O,z,J,K,S,U,Y,q,G,H,Q,X,Z,$,p,y,D,ee,se,te,le,de,ie,ae,re,xe,ne,ce,oe,be,me,he,ue,Ne,je;const{id:l}=Ee(),e=Le({api:ke.api_payment_receipt,config:{transactionNo:l},options:{enabled:!!l}}),t=ge=>ge||"NA",Ce=()=>{var fe,_e,ve,Ae,Pe,Re;return(ve=(_e=(fe=e==null?void 0:e.data)==null?void 0:fe.data)==null?void 0:_e.ulbDetails)!=null&&ve.address?"[C]"+((Re=(Pe=(Ae=e==null?void 0:e.data)==null?void 0:Ae.data)==null?void 0:Pe.ulbDetails)==null?void 0:Re.address)+"\n":""},Te="[C]"+t((a=(i=(d=e==null?void 0:e.data)==null?void 0:d.data)==null?void 0:i.ulbDetails)==null?void 0:a.ulb_name)+"\n"+Ce()+"[C]Payment Receipt\n \n \nTransaction No: "+t((x=(r=e==null?void 0:e.data)==null?void 0:r.data)==null?void 0:x.tran_no)+'\n \n<b>Challan No: </b><b><font size="big">'+t((c=(n=e==null?void 0:e.data)==null?void 0:n.data)==null?void 0:c.challan_no)+"</font></b>\n \nName: "+t((b=(o=e==null?void 0:e.data)==null?void 0:o.data)==null?void 0:b.full_name)+"\n \nAddress: "+t((h=(m=e==null?void 0:e.data)==null?void 0:m.data)==null?void 0:h.street_address)+"\n \nMobile: "+t((N=(u=e==null?void 0:e.data)==null?void 0:u.data)==null?void 0:N.mobile)+"\n \nChallan Date: "+t((g=(j=e==null?void 0:e.data)==null?void 0:j.data)==null?void 0:g.challan_date)+"\n \nAmount: "+t((_=(f=e==null?void 0:e.data)==null?void 0:f.data)==null?void 0:_.amount)+"\n \nIn Word: "+t((A=(v=e==null?void 0:e.data)==null?void 0:v.data)==null?void 0:A.amount_in_words)+"\n \nMode: "+t((R=(P=e==null?void 0:e.data)==null?void 0:P.data)==null?void 0:R.payment_mode)+"\nTran Date: "+t((C=(w=e==null?void 0:e.data)==null?void 0:w.data)==null?void 0:C.tran_date)+"\n \n********************************\n \n"+t((M=(T=e==null?void 0:e.data)==null?void 0:T.data)==null?void 0:M.violation_name)+"\n\n[C]Thank You!\n[C]For More Details Please\n[C]Visit:  "+t((k=(W=(I=e==null?void 0:e.data)==null?void 0:I.data)==null?void 0:W.ulbDetails)==null?void 0:k.parent_website)+"\n[C]Mail:"+t((V=(L=(E=e==null?void 0:e.data)==null?void 0:E.data)==null?void 0:L.ulbDetails)==null?void 0:V.email)+"\n",Me=()=>{window.ReactNativeWebView&&window.ReactNativeWebView.postMessage(JSON.stringify({Key:"PRINT_FOR_BT_PRINTER",keyData:{charPerLine:32,printTxt:Te}}))};return e.isLoading?s.jsx(we,{title:"Payment Receipt",children:s.jsx("div",{className:"flex justify-center items-center h-screen",children:s.jsx("div",{className:"flex justify-center items-center",children:s.jsx(Ie,{})})})}):s.jsx(we,{title:"Payment Receipt",children:s.jsxs("div",{className:"p-4",children:[s.jsx("div",{className:"text-center mb-1",children:s.jsx("h1",{className:"text-base font-semibold text-blue-gray-500",children:"Payment Receipt"})}),s.jsxs("div",{className:"border p-4 rounded-lg",children:[s.jsx("div",{className:"flex justify-center",children:s.jsx(We,{src:((O=(F=(B=e==null?void 0:e.data)==null?void 0:B.data)==null?void 0:F.ulbDetails)==null?void 0:O.ulb_logo)||"/jh-logo.webp",alt:"logo",className:"w-16 h-16"})}),s.jsxs("div",{className:"text-center mt-2",children:[s.jsx("h1",{className:"text-lg font-semibold text-blue-gray-500",children:(K=(J=(z=e==null?void 0:e.data)==null?void 0:z.data)==null?void 0:J.ulbDetails)==null?void 0:K.ulb_name}),s.jsx("h1",{className:"text-xs font-semibold text-blue-gray-500",children:(Y=(U=(S=e==null?void 0:e.data)==null?void 0:S.data)==null?void 0:U.ulbDetails)==null?void 0:Y.address}),s.jsx("h1",{className:"text-xs font-semibold text-blue-gray-500 mt-2",children:"Payment Receipt"})]}),s.jsx("div",{className:"border-t border-gray-200 my-4"}),s.jsx("div",{className:"mt-4",children:s.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[s.jsxs("div",{children:[s.jsx("h1",{className:"text-xs font-semibold text-blue-gray-500 mt-2",children:"Transaction No"}),s.jsx("h1",{className:"text-xs font-semibold text-blue-gray-500 mt-2",children:"Challan No :"}),s.jsx("h1",{className:"text-xs font-semibold text-blue-gray-500 mt-2",children:"Name :"}),s.jsx("h1",{className:"text-xs font-semibold text-blue-gray-500 mt-2",children:"Address :"}),s.jsx("h1",{className:"text-xs font-semibold text-blue-gray-500 mt-2",children:"Mobile :"}),s.jsx("h1",{className:"text-xs font-semibold text-blue-gray-500 mt-2",children:"Challan Date :"}),s.jsx("h1",{className:"text-xs font-semibold text-blue-gray-500 mt-2",children:"Amount :"}),s.jsx("h1",{className:"text-xs font-semibold text-blue-gray-500 mt-2",children:"In Word :"}),s.jsx("h1",{className:"text-xs font-semibold text-blue-gray-500 mt-2",children:"Mode :"}),s.jsx("h1",{className:"text-xs font-semibold text-blue-gray-500 mt-2",children:"Transaction Date :"})]}),s.jsxs("div",{children:[s.jsx("p",{className:"text-xs  text-blue-gray-500 mt-2",children:((G=(q=e==null?void 0:e.data)==null?void 0:q.data)==null?void 0:G.tran_no)||"NA"}),s.jsx("p",{className:"text-xs  text-blue-gray-500 mt-2",children:((Q=(H=e==null?void 0:e.data)==null?void 0:H.data)==null?void 0:Q.challan_no)||"NA"}),s.jsx("p",{className:"text-xs  text-blue-gray-500 mt-2",children:((Z=(X=e==null?void 0:e.data)==null?void 0:X.data)==null?void 0:Z.full_name)||"NA"}),s.jsx("p",{className:"text-xs  text-blue-gray-500 mt-2",children:((p=($=e==null?void 0:e.data)==null?void 0:$.data)==null?void 0:p.street_address)||"NA"}),s.jsx("p",{className:"text-xs  text-blue-gray-500 mt-2",children:((D=(y=e==null?void 0:e.data)==null?void 0:y.data)==null?void 0:D.mobile)||"NA"}),s.jsx("p",{className:"text-xs  text-blue-gray-500 mt-2",children:((se=(ee=e==null?void 0:e.data)==null?void 0:ee.data)==null?void 0:se.challan_date)||"NA"}),s.jsx("p",{className:"text-xs  text-blue-gray-500 mt-2",children:((le=(te=e==null?void 0:e.data)==null?void 0:te.data)==null?void 0:le.amount)||"NA"}),s.jsx("p",{className:"text-xs  text-blue-gray-500 mt-2",children:((ie=(de=e==null?void 0:e.data)==null?void 0:de.data)==null?void 0:ie.amount_in_words)||"NA"}),s.jsx("p",{className:"text-xs  text-blue-gray-500 mt-2",children:((re=(ae=e==null?void 0:e.data)==null?void 0:ae.data)==null?void 0:re.payment_mode)||"NA"}),s.jsx("p",{className:"text-xs  text-blue-gray-500 mt-2",children:((ne=(xe=e==null?void 0:e.data)==null?void 0:xe.data)==null?void 0:ne.tran_date)||"NA"})]})]})}),s.jsx("div",{className:"border-t border-gray-200 my-4"}),s.jsx("div",{className:"text-center mt-4",children:s.jsx("h1",{className:"text-xs font-semibold text-blue-gray-500",children:(oe=(ce=e==null?void 0:e.data)==null?void 0:ce.data)==null?void 0:oe.violation_name})}),s.jsx("div",{className:"border-t border-gray-200 my-4"}),s.jsx("div",{className:"text-center mt-2",children:s.jsxs("h1",{className:"text-xs font-semibold text-blue-gray-500",children:["Email : ",(he=(me=(be=e==null?void 0:e.data)==null?void 0:be.data)==null?void 0:me.ulbDetails)==null?void 0:he.email]})}),s.jsx("div",{className:"text-center mt-1",children:s.jsxs("h1",{className:"text-xs font-semibold text-blue-gray-500",children:["Website : ",(je=(Ne=(ue=e==null?void 0:e.data)==null?void 0:ue.data)==null?void 0:Ne.ulbDetails)==null?void 0:je.parent_website]})})]}),s.jsx("div",{className:"flex justify-center mt-4",children:s.jsx("button",{onClick:Me,type:"button",className:"inline-flex justify-center px-4 py-1.5 font-bold text-xs text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500",children:"Print Receipt"})})]})})}export{qe as default};
