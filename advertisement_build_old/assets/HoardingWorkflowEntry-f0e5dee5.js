import{j as a,P as A,B as k,n as o,a as v,A as x}from"./index-16131624.js";function I(){const{api_postDepartmental:e,api_getDepartmentalData:i,api_fieldVerificationList:l}=v(),{api_workflowInfo:p,api_hoardingInboxList:n,api_hoardingOutboxList:r,api_hoardingApplicationFullDetailById:d,api_hoardingEscalateApplication:s,api_hoardingIndependentComment:u,api_hoardingSpecialboxList:m,api_hoardingPostNextLevel:c,api_hoardingViewDocuments:_,api_hoardingUploadDocuments:h,api_hoardingApproveReject:f,api_hoardingVerifyDocument:w,api_hoardingBTC:g,api_hoardingBTCList:D,api_uploadHoardingDocumentShow:L}=x();return a(A,{workflowData:{api:{api_inboxList:{method:"post",url:n},api_outboxList:{method:"post",url:r},api_specialList:{method:"get",url:m},apt_btcList:{method:"post",url:D},api_fieldVerificationList:{method:"post",url:l},api_details:{method:"post",url:d},api_workflowInfo:{method:"post",url:p},api_independentComment:{method:"post",url:u},api_sendLevel:{method:"post",url:c},api_escalate:{method:"post",url:s},api_btc:{method:"post",url:g},api_approveReject:{method:"post",url:f},api_postDepartmentalData:{method:"post",url:e},api_getDepartmentalData:{method:"post",url:i},api_uploadDocumentShow:{method:"post",url:L},api_uploadDocument:{method:"post",url:h},api_verifyDocuments:{method:"post",url:w},api_documentList:{method:"post",url:_},documentBaseUrl:k},workflow:{workflowName:"Advertisement Workflow",workflowId:22,moduleId:5,fullDetailsUrl:"/advertisement/hoardingApplicationDetail"},tableColumns:[{Header:"#",Cell:({row:t})=>a("div",{className:"pr-2",children:t.index+1})},{Header:"Application No.",accessor:"application_no",Cell:t=>o(t==null?void 0:t.value)},{Header:"Applied Date",accessor:"application_date",Cell:t=>o(t==null?void 0:t.value)}],customTabs:null}})}export{I as default};
