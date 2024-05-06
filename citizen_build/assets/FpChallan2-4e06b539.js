import{j as e}from"./mui-8e804a04.js";import{f as _,u as k,r as i}from"./router-87042356.js";import{s as E}from"./swachhBharat-866bc914.js";import{o as S,r as P,n as a,y as A,V as C,P as B}from"./index-19682a6e.js";import{B as L,a as I}from"./BottomErrorCard-e0c6421c.js";import{A as M}from"./ApiHeader2-b5fd0f3d.js";import{a as F}from"./axios-97164839.js";import{b as J}from"./index.esm-a4ef204f.js";import{f as v}from"./index.esm-c151f2f7.js";import{a as R}from"./localstorage-fbfe5679.js";import"./react-09dd1212.js";import"./reactIcons-6a3b6da1.js";import"./redux-4db06ad6.js";import"./i18next-e99b4042.js";import"./index-4e794517.js";const D=()=>{var x,j,f;const{id:c}=_(),l=k(),d=R("userDetails"),{api_fpChallan2:b}=B(),[s,N]=i.useState(null),[g,m]=i.useState(!1),[w,u]=i.useState(""),[y,o]=i.useState(!1),t=(r,n)=>{u(n),m(r),r||window.history.back()};return i.useEffect(()=>{m(!1),o(!0),F.post(b,{challanId:c},M()).then(r=>{var n,p,h;console.log("getting challan 2 details => ",r),o(!1),(n=r==null?void 0:r.data)!=null&&n.status?N((p=r==null?void 0:r.data)==null?void 0:p.data):t(!0,S((h=r==null?void 0:r.data)==null?void 0:h.message))}).catch(r=>{console.log("getting challan 2 error => ",r),o(!1),t(!0,"Some error occured! Please try again later!!!")})},[]),e.jsxs(e.Fragment,{children:[g&&e.jsx(L,{activateBottomErrorCard:t,errorTitle:w}),y&&e.jsx(I,{}),e.jsxs("div",{className:"fixed bottom-10 text-center flex justify-center items-center gap-4  w-screen z-40",children:[e.jsxs("button",{onClick:()=>window.print(),className:`border border-indigo-600 w-24 py-1 rounded-sm shadow-md hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 \r
                            text-white flex items-center justify-center gap-1 `,children:[e.jsx(P,{className:"inline text-lg"}),"Print"]}),((d==null?void 0:d.user_type)=="JSK"||(d==null?void 0:d.user_type)=="ADMIN")&&!(s!=null&&s.payment_status)&&e.jsxs("button",{onClick:()=>{l(`/fp-pay/${c}`)},className:`border border-orange-600 w-24 py-1 rounded-sm shadow-md hover:shadow-xl bg-orange-500 hover:bg-orange-600 \r
                            text-white flex items-center justify-center gap-1 `,children:[e.jsx(v,{})," Pay"]}),(d==null?void 0:d.user_type)!="JSK"&&!(s!=null&&s.payment_status)&&e.jsxs("div",{className:`border border-red-600 w-max px-4 py-1 rounded-sm shadow-md bg-red-500\r
                            text-white flex items-center justify-center gap-1 `,children:[e.jsx(v,{})," Payment Not Done"]}),(s==null?void 0:s.payment_status)&&e.jsxs("button",{onClick:()=>{l(`/fp-receipt/${s==null?void 0:s.tran_no}`)},className:`border border-green-600 w-24 py-1 rounded-sm shadow-md hover:shadow-xl bg-green-500 hover:bg-green-600 \r
                    text-white flex items-center justify-center gap-1 `,children:[e.jsx(J,{})," Receipt"]})]}),e.jsx("div",{className:"mx-auto print:block flex justify-center print:w-[98vw] print:drop-shadow-none print:shadow-none print:appearance-none",id:"printableArea",children:e.jsxs("div",{className:"w-[70%] print:w-auto overflow-x-hidden border-2 border-dashed border-black py-4 px-3 relative h-[80vh] print:h-full print:border-2 print:border-black font-semibold",children:[e.jsxs("div",{className:"",children:[e.jsx("div",{className:"flex justify-center items-center w-full h-20",children:e.jsx("div",{children:e.jsx("img",{src:(x=s==null?void 0:s.ulbDetails)==null?void 0:x.ulb_logo,alt:"Logo",srcset:"",className:"h-16 w-16 appearance-none mix-blend-darken "})})}),e.jsx("div",{className:"w-full flex justify-center",children:e.jsx("div",{className:"w-full flex justify-center mt-2",children:e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsxs("div",{className:" text-2xl underline font-bold px-8 ",children:["कार्यालय : ",(j=s==null?void 0:s.ulbDetails)==null?void 0:j.ulb_hindi_name]}),e.jsx("div",{className:" font-bold px-8 text-base mt-2",children:(f=s==null?void 0:s.ulbDetails)==null?void 0:f.hindi_address}),e.jsx("div",{className:" font- px-8 text-sm",children:"E-mail ID- support@ranchimunicipal.com"}),e.jsxs("div",{className:" font-semibold px-8 text-sm",children:[(s==null?void 0:s.challan_print_type)=="1"?"(चालान - ख)":"(चालान - क)"," "]})]})})})]}),e.jsxs("div",{className:"grid grid-cols-12 items-center text-sm mt-4 border-b pb-2 border-gray-700",children:[e.jsxs("div",{className:"col-span-8 flex gap-2",children:[e.jsx("div",{className:"",children:"रसीद क्रमांक:- "}),e.jsx("div",{className:"font-normal",children:a(s==null?void 0:s.challan_no)})]}),e.jsxs("div",{className:"col-span-4 flex gap-2",children:[e.jsx("div",{className:"",children:"दिनांक:- "}),e.jsx("div",{className:"font-normal",children:A(s==null?void 0:s.challan_date)})]}),e.jsxs("div",{className:"col-span-6 flex gap-2",children:[e.jsx("div",{className:"",children:"शाखा का नाम:- "}),e.jsx("div",{className:"",children:"सिटी इंफोर्स्मेंट सेल"})]})]}),e.jsx("div",{className:"flex justify-between mb-2 pt-2 gap-2",children:e.jsxs("div",{className:"text-start text-sm w-full flex flex-wrap gap-y-1 ",children:[e.jsx("div",{className:"w-[2%]",children:"1."}),e.jsxs("div",{className:"w-[98%] flex gap-2",children:[e.jsx("div",{className:"w-[23%]",children:"दोषी व्यक्ति का नाम :- "}),e.jsx("div",{className:"w-[83%]",children:e.jsxs("div",{className:"w-full flex gap-2",children:[e.jsx("div",{className:"w-[20%]",children:"श्री/ श्रीमती/सुश्री "})," ",e.jsx("div",{className:"w-[80%] border-b-2 border-dashed border-gray-500 font-normal",children:a(s==null?void 0:s.full_name)})]})})]}),e.jsx("div",{className:"w-[2%]",children:"2."}),e.jsxs("div",{className:"w-[98%] flex gap-2",children:[e.jsx("div",{className:"w-[23%]",children:"पिता / पति का नाम :-  "}),e.jsx("div",{className:"w-[83%]",children:e.jsxs("div",{className:"w-full flex gap-2",children:[e.jsx("div",{className:"w-[20%]",children:"श्री/स्व "})," ",e.jsx("div",{className:"w-[80%] border-b-2 border-dashed border-gray-500 font-normal",children:a(s==null?void 0:s.guardian_name)})]})})]}),e.jsx("div",{className:"w-[2%]",children:"3."}),e.jsxs("div",{className:"w-[98%] flex gap-2",children:[e.jsx("div",{className:"w-[23%]",children:"पता :-  "}),e.jsx("div",{className:"w-[83%]",children:e.jsx("div",{className:"w-full flex gap-2",children:e.jsxs("div",{className:"w-full border-b-2 border-dashed border-gray-500 font-normal flex gap-2",children:[e.jsx("span",{children:s==null?void 0:s.street_address}),e.jsx("span",{children:s==null?void 0:s.city}),e.jsx("span",{children:s==null?void 0:s.region}),e.jsx("span",{children:s==null?void 0:s.postal_code})]})})})]}),e.jsx("div",{className:"w-[2%]",children:"4."}),e.jsxs("div",{className:"w-[98%] flex gap-2",children:[e.jsx("div",{className:"w-[23%]",children:"कृत्य का प्रकार  :- "}),e.jsx("div",{className:"w-[83%] border-b-2 border-gray-500 border-dashed font-normal",children:a(s==null?void 0:s.violation_name)})]}),e.jsx("div",{className:"w-[2%]",children:"5."}),e.jsxs("div",{className:"w-[98%] flex gap-2 flex-wrap",children:[e.jsx("div",{className:"",children:"झारखंड नगरपालिका अधिनियम 2011 की धारा "}),e.jsx("div",{className:"w-[15%] border-dashed border-b-2 border-gray-500 font-normal ",children:a(s==null?void 0:s.violation_section)}),e.jsx("div",{children:"के अधीन या उप नियम / विनियम की कंडिका"}),e.jsx("div",{className:"w-[85%] border-dashed border-b-2 border-gray-500 font-normal ",children:a(s==null?void 0:s.violation_name)}),e.jsx("div",{children:"के अधीन दण्ड शुल्क अधिरोपित।  "})]}),e.jsx("div",{className:"w-[2%]",children:"6."}),e.jsxs("div",{className:"w-[98%] flex gap-2",children:[e.jsx("div",{className:"w-[23%]",children:"कृत्य स्थल :- "}),e.jsx("div",{className:"w-[83%] border-b-2 border-gray-500 border-dashed font-normal",children:a(s==null?void 0:s.violation_place)})]}),e.jsx("div",{className:"w-[2%]",children:"7."}),e.jsxs("div",{className:"w-[98%] flex gap-2",children:[e.jsx("div",{className:"w-[23%]",children:"निर्धारित दण्ड शुल्क :- "}),e.jsxs("div",{className:"w-[83%]",children:[e.jsxs("div",{className:"w-full flex gap-2",children:[e.jsx("div",{className:"w-[12%]",children:"(अंको में )"})," ",e.jsx("div",{className:"w-[86%] border-b-2 border-dashed border-gray-500 font-normal",children:C(s==null?void 0:s.amount)})]}),e.jsxs("div",{className:"w-full flex gap-2",children:[e.jsx("div",{className:"w-[12%]",children:"(शब्दों में)"})," ",e.jsx("div",{className:"w-[86%] border-b-2 border-dashed border-gray-500 font-normal",children:a(s==null?void 0:s.amount_in_words)})]})]})]}),e.jsx("div",{className:"w-[50%] mt-6 flex justify-start",children:e.jsx("div",{className:"h-36 w-36 border border-gray-700 flex items-center justify-center",children:e.jsx("img",{src:s==null?void 0:s.geo_tagged_image,alt:"violation image",srcset:"",className:""})})}),e.jsx("div",{className:"w-[50%] mt-6 flex justify-end items-center",children:e.jsxs("div",{className:"w-full flex flex-col gap-2 ",children:[e.jsxs("div",{className:"flex gap-1 w-full",children:[e.jsx("div",{children:"हस्ताक्षर"})," ",e.jsx("div",{className:"w-[50%] border-b-2 border-dashed border-gray-500"})]}),e.jsx("div",{children:"निर्गत करने वाले प्राधिकृत पदाधिकारी"})]})})]})}),e.jsx("div",{className:"pt-1 mt-4 border-t border-gray-700 text-sm",children:(s==null?void 0:s.challan_print_type)=="1"?"नोट  :- चालान में उल्लेखित धारा 602  के अंतर्गत, शास्ति राशि 14 (चौदह) दिनों के अंदर भुगतान करने पर 50% को छूट अनुमन्य होगा। चालान में उल्लेखित दण्ड शुल्क का भुगतान करना अनिवार्य है, अन्यथा दण्ड शुल्क की वसूली हेतु नियमानुसार विधि सम्मत करवाई की जाएगी।":"नोट:- चालान में उल्लेखित शास्ति राशि 14  (चौदह) दिनों के अंदर भुगतान करना अनिवार्य है। अन्यथा दण्ड शुल्क की वसूली हेतु नियमानुसार विधि सम्मत करवाई की जाएगी।"}),e.jsx("div",{className:"flex justify-start items-center mt-6 font-normal text-xs",children:"E-mail ID- support@ranchimunicipal.com"}),e.jsx("div",{className:"flex justify-start items-center mt-6 font-normal text-xs",children:"अधिक जानकारी के लिए संपर्क करे : www.jharkhandegovernance.com, ********** or **********"}),e.jsx("div",{className:"flex justify-center items-center mt-4",children:e.jsx("img",{src:E,alt:"",className:"h-10 opacity-70"})}),e.jsx("div",{className:"flex justify-center items-center mt-4 text-xs font-normal",children:"यह रसीद कंप्यूटर द्वारा बनाई गई है और इसमें हस्ताक्षर की आवश्यकता नहीं है।"})]})})]})};export{D as default};
