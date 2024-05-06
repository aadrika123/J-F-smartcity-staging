import{u as b,a as g,g as u,r as a,j as e}from"./index-b42da1a9.js";import{r as y,s as _}from"./swachhBharat-5aff38be.js";import{a as k,P as E}from"./ProjectApiList-919c817c.js";import{B as S}from"./BarLoader-9b37f4dc.js";import{c as A,n as d,i as B,d as C}from"./PowerupFunctions-06f97d99.js";import{A as P}from"./index.esm-fb304c24.js";import{B as F}from"./BottomErrorCard-205cd99b.js";import{u as L}from"./useSetTitle-bc705181.js";import{A as M}from"./ApiHeader2-b363f7b8.js";import{F as T}from"./index.esm-c4cab7fb.js";import{B as I}from"./index.esm-a32309ca.js";import"./iconBase-b3245ee2.js";import"./index-d3a1814a.js";import"./index-6360e0e1.js";const Y=()=>{var c;L("Challan");const{id:o}=b(),m=g();u("userDetails");const{api_fpChallan2:j}=E(),[s,f]=a.useState(null),[h,l]=a.useState(!1),[v,w]=a.useState(""),[N,n]=a.useState(!1),t=(r,i)=>{w(i),l(r),r||window.history.back()};return a.useEffect(()=>{l(!1),n(!0),k.post(j,{challanId:o},M()).then(r=>{var i,x,p;n(!1),(i=r==null?void 0:r.data)!=null&&i.status?f((x=r==null?void 0:r.data)==null?void 0:x.data):t(!0,A((p=r==null?void 0:r.data)==null?void 0:p.message))}).catch(r=>{n(!1),t(!0,"Some error occured! Please try again later!!!")})},[]),e.jsxs(e.Fragment,{children:[h&&e.jsx(F,{activateBottomErrorCard:t,errorTitle:v}),N&&e.jsx(S,{}),e.jsx("div",{className:"w-full h-screen md:pt-10",children:e.jsxs("div",{className:"md:w-4/5 mx-auto shadow-none md:shadow-xl bg-gray-50 md:py-10",children:[e.jsxs("div",{className:"fixed bottom-1 md:bottom-10 text-center flex justify-center items-center gap-4  w-screen z-40",children:[e.jsxs("button",{onClick:()=>window.print(),className:`border border-indigo-600 w-24 py-1 rounded-sm shadow-md hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 \r
                            text-white flex items-center justify-center gap-1 `,children:[e.jsx(P,{className:"inline text-lg"}),"Print"]}),!(s!=null&&s.payment_status)&&e.jsxs("button",{onClick:()=>{m(`/fp-pay/${o}/direct`)},className:`border border-orange-600 w-24 py-1 rounded-sm shadow-md hover:shadow-xl bg-orange-500 hover:bg-orange-600 \r
                            text-white flex items-center justify-center gap-1 `,children:[e.jsx(I,{})," Pay"]}),(s==null?void 0:s.payment_status)&&e.jsxs("button",{onClick:()=>{m(`/payment-receipt/${s==null?void 0:s.tran_no}/direct`)},className:`border border-green-600 w-24 py-1 rounded-sm shadow-md hover:shadow-xl bg-green-500 hover:bg-green-600 \r
                    text-white flex items-center justify-center gap-1 `,children:[e.jsx(T,{})," Receipt"]})]}),e.jsx("div",{className:"mx-auto print:block flex justify-center print:w-[98vw] print:drop-shadow-none print:shadow-none print:appearance-none",id:"printableArea",children:e.jsxs("div",{className:"md:w-[70%] md:m-0 m-2 print:w-auto overflow-x-hidden border-2 border-dashed border-black py-4 px-3 relative h-full md:h-[80vh] print:h-full print:border-2 print:border-black font-semibold",children:[e.jsxs("div",{className:"",children:[e.jsxs("div",{className:"flex flex-col justify-center items-center gap-x-4 md:absolute print:top-[4%] top-[5%] left-[25%] print:left-[5%]",children:[e.jsx("img",{src:y,alt:"Logo",srcset:"",className:"h-16 w-16 appearance-none mix-blend-darken"}),e.jsx("span",{className:"text-3xl font-bold uppercase",children:(c=s==null?void 0:s.ulbDetails)==null?void 0:c.ulb_name})]}),e.jsx("div",{className:"w-full flex justify-center",children:e.jsx("div",{className:"w-full flex justify-center mt-2",children:e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx("div",{className:" text-2xl underline font-bold px-8 ",children:"कार्यालय : राँची नगर निगम, राँची"}),e.jsx("div",{className:" font-bold px-8 text-base mt-2",children:"कचहरी रोड, राँची, पिन नo- 834001"}),e.jsx("div",{className:" font- px-8 text-sm",children:"E-mail ID- support@ranchimunicipal.com"}),e.jsx("div",{className:" font- px-8 text-sm font-normal",children:"Toll Free Number: 1800 890 4115"}),e.jsxs("div",{className:" font-semibold px-8 text-sm",children:[(s==null?void 0:s.challan_print_type)=="1"?"(चालान - ख)":"(चालान - क)"," "]})]})})})]}),e.jsxs("div",{className:"grid grid-cols-12 items-center text-sm mt-4 border-b pb-2 border-gray-700",children:[e.jsxs("div",{className:"col-span-12 md:col-span-8 print:col-span-8 flex gap-2",children:[e.jsx("div",{className:"",children:"रसीद क्रमांक:- "}),e.jsx("div",{className:"font-normal",children:d(s==null?void 0:s.challan_no)})]}),e.jsxs("div",{className:"col-span-12 md:col-span-4 print:col-span-4 flex gap-2",children:[e.jsx("div",{className:"",children:"दिनांक:- "}),e.jsx("div",{className:"font-normal",children:B(s==null?void 0:s.challan_date)})]}),e.jsxs("div",{className:"col-span-12 md:col-span-6 print:col-span-6 flex gap-2",children:[e.jsx("div",{className:"",children:"शाखा का नाम:- "}),e.jsx("div",{className:"",children:"सिटी इंफोर्स्मेंट सेल"})]})]}),e.jsx("div",{className:"flex justify-between mb-2 pt-2 gap-2",children:e.jsxs("div",{className:"text-start text-sm w-full flex flex-wrap gap-y-1 gap-x-1 md:gap-x-0 print:gap-x-0 ",children:[e.jsx("div",{className:"w-[2%] mr-1 md:mr-0 print:mr-0",children:"1."}),e.jsxs("div",{className:"md:w-[98%] print:w-[98%] w-[95%] flex gap-2",children:[e.jsx("div",{className:"w-[23%]",children:"दोषी व्यक्ति का नाम :- "}),e.jsx("div",{className:"w-[83%]",children:e.jsxs("div",{className:"w-full flex gap-2",children:[e.jsx("div",{className:"w-[20%]",children:"श्री/ श्रीमती/सुश्री "})," ",e.jsx("div",{className:"w-[80%] border-b-2 border-dashed border-gray-500 font-normal",children:d(s==null?void 0:s.full_name)})]})})]}),e.jsx("div",{className:"w-[2%] mr-1 md:mr-0 print:mr-0",children:"2."}),e.jsxs("div",{className:"md:w-[98%] print:w-[98%] w-[95%] flex gap-2",children:[e.jsx("div",{className:"w-[23%]",children:"पिता / पति का नाम :-  "}),e.jsx("div",{className:"w-[83%]",children:e.jsxs("div",{className:"w-full flex gap-2",children:[e.jsx("div",{className:"w-[20%]",children:"श्री/स्व "})," ",e.jsx("div",{className:"w-[80%] border-b-2 border-dashed border-gray-500 font-normal",children:d(s==null?void 0:s.guardian_name)})]})})]}),e.jsx("div",{className:"w-[2%] mr-1 md:mr-0 print:mr-0",children:"3."}),e.jsxs("div",{className:"md:w-[98%] print:w-[98%] w-[95%] flex gap-2",children:[e.jsx("div",{className:"w-[23%]",children:"पता :-  "}),e.jsx("div",{className:"w-[83%]",children:e.jsx("div",{className:"w-full flex gap-2",children:e.jsxs("div",{className:"w-full border-b-2 border-dashed border-gray-500 font-normal flex gap-2",children:[e.jsx("span",{children:s==null?void 0:s.street_address}),e.jsx("span",{children:s==null?void 0:s.city}),e.jsx("span",{children:s==null?void 0:s.region}),e.jsx("span",{children:s==null?void 0:s.postal_code})]})})})]}),e.jsx("div",{className:"w-[2%] mr-1 md:mr-0 print:mr-0",children:"4."}),e.jsxs("div",{className:"md:w-[98%] print:w-[98%] w-[95%] flex gap-2",children:[e.jsx("div",{className:"w-[23%]",children:"कृत्य का प्रकार  :- "}),e.jsx("div",{className:"w-[83%] border-b-2 border-gray-500 border-dashed font-normal",children:d(s==null?void 0:s.violation_name)})]}),e.jsx("div",{className:"w-[2%] mr-1 md:mr-0 print:mr-0",children:"5."}),e.jsxs("div",{className:"md:w-[98%] print:w-[98%] w-[95%] flex gap-2 flex-wrap",children:[e.jsx("div",{className:"",children:"झारखंड नगरपालिका अधिनियम 2011 की धारा "}),e.jsx("div",{className:"w-[15%] border-dashed border-b-2 border-gray-500 font-normal ",children:d(s==null?void 0:s.violation_section)}),e.jsx("div",{children:"के अधीन या उप नियम / विनियम की कंडिका"}),e.jsx("div",{className:"w-[85%] border-dashed border-b-2 border-gray-500 font-normal ",children:d(s==null?void 0:s.violation_name)}),e.jsx("div",{children:"के अधीन दण्ड शुल्क अधिरोपित।  "})]}),e.jsx("div",{className:"w-[2%] mr-1 md:mr-0 print:mr-0",children:"6."}),e.jsxs("div",{className:"md:w-[98%] print:w-[98%] w-[95%] flex gap-2",children:[e.jsx("div",{className:"w-[23%]",children:"कृत्य स्थल :- "}),e.jsx("div",{className:"w-[83%] border-b-2 border-gray-500 border-dashed font-normal",children:d(s==null?void 0:s.violation_place)})]}),e.jsx("div",{className:"w-[2%] mr-1 md:mr-0 print:mr-0",children:"7."}),e.jsxs("div",{className:"md:w-[98%] print:w-[98%] w-[95%] flex gap-2",children:[e.jsx("div",{className:"w-[23%]",children:"निर्धारित दण्ड शुल्क :- "}),e.jsxs("div",{className:"w-[83%]",children:[e.jsxs("div",{className:"w-full flex gap-2",children:[e.jsx("div",{className:"w-[12%]",children:"(अंको में )"})," ",e.jsx("div",{className:"w-[86%] border-b-2 border-dashed border-gray-500 font-normal",children:C(s==null?void 0:s.amount)})]}),e.jsxs("div",{className:"w-full flex gap-2",children:[e.jsx("div",{className:"w-[12%]",children:"(शब्दों में)"})," ",e.jsx("div",{className:"w-[86%] border-b-2 border-dashed border-gray-500 font-normal",children:d(s==null?void 0:s.amount_in_words)})]})]})]}),e.jsx("div",{className:"w-[50%] mt-6 flex justify-start",children:e.jsx("div",{className:"h-36 w-36 border border-gray-700 flex items-center justify-center",children:e.jsx("img",{src:s==null?void 0:s.geo_tagged_image,alt:"violation image",srcset:"",className:""})})}),e.jsx("div",{className:"w-[50%] mt-6 flex justify-end items-center",children:e.jsxs("div",{className:"w-full flex flex-col gap-2 ",children:[e.jsxs("div",{className:"flex gap-1 w-full",children:[e.jsx("div",{children:"हस्ताक्षर"})," ",e.jsx("div",{className:"w-[50%] border-b-2 border-dashed border-gray-500"})]}),e.jsx("div",{children:"निर्गत करने वाले प्राधिकृत पदाधिकारी"})]})})]})}),e.jsx("div",{className:"pt-1 mt-4 border-t border-gray-700 text-sm",children:(s==null?void 0:s.challan_print_type)=="1"?"नोट  :- चालान में उल्लेखित धारा 602  के अंतर्गत, शास्ति राशि 14 (चौदह) दिनों के अंदर भुगतान करने पर 50% को छूट अनुमन्य होगा। चालान में उल्लेखित दण्ड शुल्क का भुगतान करना अनिवार्य है, अन्यथा दण्ड शुल्क की वसूली हेतु नियमानुसार विधि सम्मत करवाई की जाएगी।":"नोट:- चालान में उल्लेखित शास्ति राशि 14  (चौदह) दिनों के अंदर भुगतान करना अनिवार्य है। अन्यथा दण्ड शुल्क की वसूली हेतु नियमानुसार विधि सम्मत करवाई की जाएगी।"}),e.jsx("div",{className:"flex justify-start items-center mt-6 font-normal text-xs",children:"अधिक जानकारी के लिए संपर्क करे : udhd.jharkhand.gov.in, 1800 890 4115 or 0651-3500700"}),e.jsx("div",{className:"flex justify-center items-center mt-4",children:e.jsx("img",{src:_,alt:"",className:"h-10 opacity-70"})}),e.jsx("div",{className:"flex justify-center items-center mt-4 text-xs font-normal",children:"यह रसीद कंप्यूटर द्वारा बनाई गई है और इसमें हस्ताक्षर की आवश्यकता नहीं है।"})]})})]})})]})};export{Y as default};
