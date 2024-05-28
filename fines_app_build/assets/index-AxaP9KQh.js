import{j as t,P as Te,d as ke,I as Ee,c as Le}from"./index-mo0knpl2.js";import{e as Ue}from"./router-WshRxXk2.js";import{b as Ve}from"./useCustomQuery-uMtzZsfp.js";import"./reactQuery-2daanlHr.js";import"./reactQueryDevtools-6dm9iask.js";import"./axios-YpSsR79r.js";import"./tailwind-Ucrx0-S6.js";import"./reactIcons-UnuJhE_7.js";import"./reactLazyLoadImageComponent-2lnvQYCj.js";import"./headlessui-oHdMYZDI.js";function Qe(){var i,r,x,n,m,a,o,l,b,u,c,N,g,p,j,y,f,_,v,h,A,R,C,w,P,T,I,M,W,S,k,E,L,U,V,B,F,G,O,J,K,Y,q,z,H,Q,X,Z,$,D,ee,te,se,de,ie,re,xe,ne,me,ae,oe,le,be,ue,ce,Ne,ge,pe,je,ye,fe,_e;const{id:d}=Ue(),e=Ve({api:Le.api_challan_receipt,config:{challanId:d},options:{enabled:!!d}}),s=ve=>ve||"NA",Ie=(r=(i=e==null?void 0:e.data)==null?void 0:i.data)!=null&&r.payment_status?"Paid":"Unpaid",Me=()=>{var he,Ae,Re,Ce,we,Pe;return(Re=(Ae=(he=e==null?void 0:e.data)==null?void 0:he.data)==null?void 0:Ae.ulbDetails)!=null&&Re.address?"\n[C]"+((Pe=(we=(Ce=e==null?void 0:e.data)==null?void 0:Ce.data)==null?void 0:we.ulbDetails)==null?void 0:Pe.address)+"\n":""},We="[C]"+s((m=(n=(x=e==null?void 0:e.data)==null?void 0:x.data)==null?void 0:n.ulbDetails)==null?void 0:m.ulb_name)+"\n"+Me()+"[C]Challan Receipt\n \n \nChallan No:"+s((o=(a=e==null?void 0:e.data)==null?void 0:a.data)==null?void 0:o.challan_no)+"\n \nName: "+s((b=(l=e==null?void 0:e.data)==null?void 0:l.data)==null?void 0:b.full_name)+"\n \nGuardian name: "+s((c=(u=e==null?void 0:e.data)==null?void 0:u.data)==null?void 0:c.guardian_name)+"\n \nAddress: "+s((g=(N=e==null?void 0:e.data)==null?void 0:N.data)==null?void 0:g.street_address)+"\n \nMobile: "+s((j=(p=e==null?void 0:e.data)==null?void 0:p.data)==null?void 0:j.mobile)+"\n \nDate: "+s((f=(y=e==null?void 0:e.data)==null?void 0:y.data)==null?void 0:f.challan_date)+"\n \nAmount: "+s((v=(_=e==null?void 0:e.data)==null?void 0:_.data)==null?void 0:v.amount)+"\n \nIn Word: "+s((A=(h=e==null?void 0:e.data)==null?void 0:h.data)==null?void 0:A.amount_in_words)+"\n \nType: "+s((C=(R=e==null?void 0:e.data)==null?void 0:R.data)==null?void 0:C.challan_type)+"\n \nStatus: "+s(Ie)+"\n \nRegion: "+s((P=(w=e==null?void 0:e.data)==null?void 0:w.data)==null?void 0:P.region)+"\n \n********************************\n"+s((I=(T=e==null?void 0:e.data)==null?void 0:T.data)==null?void 0:I.violation_name)+"\n\n[C]Thank You!\n[C]For More Details Please\n[C]Visit:  "+s((S=(W=(M=e==null?void 0:e.data)==null?void 0:M.data)==null?void 0:W.ulbDetails)==null?void 0:S.parent_website)+"\n[C]Mail:"+s((L=(E=(k=e==null?void 0:e.data)==null?void 0:k.data)==null?void 0:E.ulbDetails)==null?void 0:L.email)+"\n",Se=()=>{window.ReactNativeWebView&&window.ReactNativeWebView.postMessage(JSON.stringify({Key:"PRINT_FOR_BT_PRINTER",keyData:{charPerLine:32,printTxt:We}}))};return e.isLoading?t.jsx(Te,{title:"Challan Receipt",children:t.jsx("div",{className:"flex justify-center items-center h-screen",children:t.jsx("div",{className:"flex justify-center items-center",children:t.jsx(ke,{})})})}):t.jsx(Te,{title:"Challan Receipt",children:t.jsxs("div",{className:"p-4",children:[t.jsx("div",{className:"text-center mb-1",children:t.jsx("h1",{className:"text-base font-semibold text-blue-gray-500",children:"Challan Receipt"})}),t.jsxs("div",{className:"border p-4 rounded-lg",children:[t.jsx("div",{className:"flex justify-center",children:t.jsx(Ee,{src:((B=(V=(U=e==null?void 0:e.data)==null?void 0:U.data)==null?void 0:V.ulbDetails)==null?void 0:B.ulb_logo)||"/jh-logo.webp",alt:"logo",className:"w-16 h-16"})}),t.jsxs("div",{className:"text-center mt-2",children:[t.jsx("h1",{className:"text-lg font-semibold text-blue-gray-500",children:(O=(G=(F=e==null?void 0:e.data)==null?void 0:F.data)==null?void 0:G.ulbDetails)==null?void 0:O.ulb_name}),t.jsx("h1",{className:"text-xs font-semibold text-blue-gray-500",children:(Y=(K=(J=e==null?void 0:e.data)==null?void 0:J.data)==null?void 0:K.ulbDetails)==null?void 0:Y.address}),t.jsx("h1",{className:"text-xs text-blue-gray-500 mt-2",children:"(Challan Receipt)"})]}),t.jsx("div",{className:"border-t border-gray-200 my-4"}),t.jsxs("div",{className:"mt-4",children:[t.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[t.jsxs("div",{children:[t.jsx("h1",{className:"text-xs font-semibold text-blue-gray-500 mt-4",children:"Challan No :"}),t.jsx("h1",{className:"text-xs font-semibold text-blue-gray-500 mt-4",children:"Name :"}),t.jsx("h1",{className:"text-xs font-semibold text-blue-gray-500 mt-4",children:"Guardian Name :"}),t.jsx("h1",{className:"text-xs font-semibold text-blue-gray-500 mt-4",children:"Address"}),t.jsx("h1",{className:"text-xs font-semibold text-blue-gray-500 mt-4",children:"Mobile"}),t.jsx("h1",{className:"text-xs font-semibold text-blue-gray-500 mt-4",children:"Challan Date :"}),t.jsx("h1",{className:"text-xs font-semibold text-blue-gray-500 mt-4",children:"Amount :"}),t.jsx("h1",{className:"text-xs font-semibold text-blue-gray-500 mt-4",children:"In Word :"}),t.jsx("h1",{className:"text-xs font-semibold text-blue-gray-500 mt-4",children:"Type :"}),t.jsx("h1",{className:"text-xs font-semibold text-blue-gray-500 mt-4",children:"Payment Status :"}),t.jsx("h1",{className:"text-xs font-semibold text-blue-gray-500 mt-4",children:"Region"})]}),t.jsxs("div",{children:[t.jsx("p",{className:"text-xs  text-blue-gray-500 mt-4",children:((z=(q=e==null?void 0:e.data)==null?void 0:q.data)==null?void 0:z.challan_no)||"N/A"}),t.jsx("p",{className:"text-xs  text-blue-gray-500 mt-4",children:((Q=(H=e==null?void 0:e.data)==null?void 0:H.data)==null?void 0:Q.full_name)||"N/A"}),t.jsx("p",{className:"text-xs  text-blue-gray-500 mt-4",children:((Z=(X=e==null?void 0:e.data)==null?void 0:X.data)==null?void 0:Z.guardian_name)||"N/A"}),t.jsx("p",{className:"text-xs  text-blue-gray-500 mt-4",children:((D=($=e==null?void 0:e.data)==null?void 0:$.data)==null?void 0:D.street_address)||"N/A"}),t.jsx("p",{className:"text-xs  text-blue-gray-500 mt-4",children:((te=(ee=e==null?void 0:e.data)==null?void 0:ee.data)==null?void 0:te.mobile)||"N/A"}),t.jsx("p",{className:"text-xs  text-blue-gray-500 mt-4",children:((de=(se=e==null?void 0:e.data)==null?void 0:se.data)==null?void 0:de.challan_date)||"N/A"}),t.jsx("p",{className:"text-xs  text-blue-gray-500 mt-4",children:((re=(ie=e==null?void 0:e.data)==null?void 0:ie.data)==null?void 0:re.amount)||"N/A"}),t.jsx("p",{className:"text-xs  text-blue-gray-500 mt-4",children:((ne=(xe=e==null?void 0:e.data)==null?void 0:xe.data)==null?void 0:ne.amount_in_words)||"N/A"}),t.jsx("p",{className:"text-xs  text-blue-gray-500 mt-4",children:((ae=(me=e==null?void 0:e.data)==null?void 0:me.data)==null?void 0:ae.challan_type)||"N/A"}),t.jsx("p",{className:"text-xs  text-blue-gray-500 mt-4",children:(le=(oe=e==null?void 0:e.data)==null?void 0:oe.data)!=null&&le.payment_status?t.jsx("span",{className:"text-xs font-bold bg-green-100 text-green-500 rounded-lg px-2 py-1",children:"Paid"}):t.jsx("span",{className:"text-xs bg-red-100 text-red-500 rounded-lg px-2 py-1",children:"Unpaid"})}),t.jsx("p",{className:"text-xs  text-blue-gray-500 mt-4",children:((ue=(be=e==null?void 0:e.data)==null?void 0:be.data)==null?void 0:ue.region)||"N/A"})]})]}),t.jsx("div",{className:"border-t border-gray-200 my-4"}),t.jsx("div",{className:"flex justify-between text-center",children:t.jsxs("p",{className:"text-xs  text-blue-gray-500 mt-2",children:[t.jsx("b",{children:"विवरण -: "}),((Ne=(ce=e==null?void 0:e.data)==null?void 0:ce.data)==null?void 0:Ne.violation_name)||"N/A"]})}),t.jsx("div",{className:"border-t border-gray-200 my-4"}),t.jsx("div",{className:"text-center mt-4",children:t.jsxs("h1",{className:"text-xs font-semibold text-blue-gray-500",children:["Email : ",(je=(pe=(ge=e==null?void 0:e.data)==null?void 0:ge.data)==null?void 0:pe.ulbDetails)==null?void 0:je.email]})}),t.jsx("div",{className:"text-center mt-1",children:t.jsxs("h1",{className:"text-xs font-semibold text-blue-gray-500",children:["Website : ",(_e=(fe=(ye=e==null?void 0:e.data)==null?void 0:ye.data)==null?void 0:fe.ulbDetails)==null?void 0:_e.parent_website]})})]})]}),t.jsx("div",{className:"flex justify-center mt-4",children:t.jsx("button",{onClick:Se,type:"button",className:"inline-flex justify-center px-4 py-1.5 font-bold text-xs text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500",children:"Print Receipt"})})]})})}export{Qe as default};
