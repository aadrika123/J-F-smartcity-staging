import{j as a,F as x,P as y,B as A,n as t,a as L,A as k}from"./index-aa0d4902.js";function g(){const{api_postDepartmental:o,api_getDepartmentalData:l,api_fieldVerificationList:i}=L(),{api_workflowInfo:s,api_HostelInboxList:n,api_HostelOutboxList:p,api_HostelApplicationFullDetailById:r,api_HostelEscalateApplication:d,api_HostelIndependentComment:u,api_HostelSpecialboxList:m,api_HostelPostNextLevel:c,api_HostelViewDocuments:_,api_HostelUploadDocuments:w,api_advertDocumentVerification:C,api_HostelApproveReject:f,api_HostelVerifyDocument:h,api_HostelBTC:H,api_HostelBTCList:v,api_uploadHostelDocumentShow:D}=k();return a(x,{children:a(y,{workflowData:{api:{api_inboxList:{method:"post",url:n},api_outboxList:{method:"post",url:p},api_specialList:{method:"post",url:m},apt_btcList:{method:"post",url:v},api_fieldVerificationList:{method:"post",url:i},api_details:{method:"post",url:r},api_workflowInfo:{method:"post",url:s},api_independentComment:{method:"post",url:u},api_sendLevel:{method:"post",url:c},api_escalate:{method:"post",url:d},api_btc:{method:"post",url:H},api_approveReject:{method:"post",url:f},api_postDepartmentalData:{method:"post",url:o},api_getDepartmentalData:{method:"post",url:l},api_uploadDocumentShow:{method:"post",url:D},api_uploadDocument:{method:"post",url:w},api_verifyDocuments:{method:"post",url:h},api_documentList:{method:"post",url:_},documentBaseUrl:A},workflow:{workflowName:"Hostel Workflow",workflowId:24,moduleId:5,formUrl:"/advertisement/hostelEdit",fullDetailsUrl:"/advertisement/hostelApplicationDetail"},tableColumns:[{Header:"#",Cell:({row:e})=>a("div",{className:"pr-2",children:e.index+1})},{Header:"Application No.",accessor:"application_no",Cell:e=>t(e==null?void 0:e.value)},{Header:"Applicant Name",accessor:"applicant",Cell:e=>t(e==null?void 0:e.value)},{Header:"Entity Name",accessor:"entity_name",Cell:e=>t(e==null?void 0:e.value)},{Header:"Applied Date",accessor:"application_date",Cell:e=>t(e==null?void 0:e.value)},{Header:"Application Type",accessor:"application_type",Cell:({cell:e})=>a("div",{className:" rounded-full shadow-lg h-7 mx-auto w-7 font-semibold text-center py-1 text-sm px-1 -ml-1 "+(e.row.values.application_type=="New Apply"?"bg-sky-200 text-sky-900 ":"")+(e.row.values.application_type=="Renew"?"bg-indigo-200 text-indigo-900 ":""),children:Array.from(e.row.values.application_type)[0]}),Cell:e=>t(e==null?void 0:e.value)}]}})})}export{g as default};
