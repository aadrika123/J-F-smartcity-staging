const i="http://203.129.217.246:8005";let e=window.localStorage.getItem("citizen_token");console.log("token ===== ",e);const a={headers:{Authorization:`Bearer ${e}`,Accept:"application/json"}};function p(){return{header:a,api_distList:`${i}/api/list-district`,api_wardListByUlb:`${i}/api/workflow/v2/crud/ward-by-ulb`,api_getAllUlbList:`${i}/api/get-all-ulb`,api_reqOtp:`${i}/api/grievance/auth/req-otp`,api_verifyOtp:`${i}/api/grievance/auth/verify-otp`,api_grievanceApplyForm:`${i}/api/grievance/register-grievance`,api_grievanceTrack:`${i}/api/grievance/auth/get-grievance`,api_grievanceGetActiveRejectApplication:`${i}/api/grievance/citizen/get-active-reject-applications`,api_grievanceGetApplicationDetails:`${i}/api/grievance/citizen/get-application-details`}}export{p as G};
