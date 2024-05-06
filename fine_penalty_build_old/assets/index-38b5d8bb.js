import{R as N}from"./index-e38c13c4.js";var S=Object.defineProperty,P=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable,I=(u,s,a)=>s in u?S(u,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):u[s]=a,b=(u,s)=>{for(var a in s||(s={}))v.call(s,a)&&I(u,a,s[a]);if(P)for(var a of P(s))O.call(s,a)&&I(u,a,s[a]);return u},F=(u,s)=>{var a={};for(var i in u)v.call(u,i)&&s.indexOf(i)<0&&(a[i]=u[i]);if(u!=null&&P)for(var i of P(u))s.indexOf(i)<0&&O.call(u,i)&&(a[i]=u[i]);return a};/**
 * @license QR Code generator library (TypeScript)
 * Copyright (c) Project Nayuki.
 * SPDX-License-Identifier: MIT
 */var R;(u=>{const s=class{constructor(t,e,r,o){if(this.version=t,this.errorCorrectionLevel=e,this.modules=[],this.isFunction=[],t<s.MIN_VERSION||t>s.MAX_VERSION)throw new RangeError("Version value out of range");if(o<-1||o>7)throw new RangeError("Mask value out of range");this.size=t*4+17;let n=[];for(let l=0;l<this.size;l++)n.push(!1);for(let l=0;l<this.size;l++)this.modules.push(n.slice()),this.isFunction.push(n.slice());this.drawFunctionPatterns();const h=this.addEccAndInterleave(r);if(this.drawCodewords(h),o==-1){let l=1e9;for(let E=0;E<8;E++){this.applyMask(E),this.drawFormatBits(E);const f=this.getPenaltyScore();f<l&&(o=E,l=f),this.applyMask(E)}}c(0<=o&&o<=7),this.mask=o,this.applyMask(o),this.drawFormatBits(o),this.isFunction=[]}static encodeText(t,e){const r=u.QrSegment.makeSegments(t);return s.encodeSegments(r,e)}static encodeBinary(t,e){const r=u.QrSegment.makeBytes(t);return s.encodeSegments([r],e)}static encodeSegments(t,e,r=1,o=40,n=-1,h=!0){if(!(s.MIN_VERSION<=r&&r<=o&&o<=s.MAX_VERSION)||n<-1||n>7)throw new RangeError("Invalid value");let l,E;for(l=r;;l++){const M=s.getNumDataCodewords(l,e)*8,g=C.getTotalBits(t,l);if(g<=M){E=g;break}if(l>=o)throw new RangeError("Data too long")}for(const M of[s.Ecc.MEDIUM,s.Ecc.QUARTILE,s.Ecc.HIGH])h&&E<=s.getNumDataCodewords(l,M)*8&&(e=M);let f=[];for(const M of t){i(M.mode.modeBits,4,f),i(M.numChars,M.mode.numCharCountBits(l),f);for(const g of M.getData())f.push(g)}c(f.length==E);const p=s.getNumDataCodewords(l,e)*8;c(f.length<=p),i(0,Math.min(4,p-f.length),f),i(0,(8-f.length%8)%8,f),c(f.length%8==0);for(let M=236;f.length<p;M^=253)i(M,8,f);let w=[];for(;w.length*8<f.length;)w.push(0);return f.forEach((M,g)=>w[g>>>3]|=M<<7-(g&7)),new s(l,e,w,n)}getModule(t,e){return 0<=t&&t<this.size&&0<=e&&e<this.size&&this.modules[e][t]}getModules(){return this.modules}drawFunctionPatterns(){for(let r=0;r<this.size;r++)this.setFunctionModule(6,r,r%2==0),this.setFunctionModule(r,6,r%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);const t=this.getAlignmentPatternPositions(),e=t.length;for(let r=0;r<e;r++)for(let o=0;o<e;o++)r==0&&o==0||r==0&&o==e-1||r==e-1&&o==0||this.drawAlignmentPattern(t[r],t[o]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(t){const e=this.errorCorrectionLevel.formatBits<<3|t;let r=e;for(let n=0;n<10;n++)r=r<<1^(r>>>9)*1335;const o=(e<<10|r)^21522;c(o>>>15==0);for(let n=0;n<=5;n++)this.setFunctionModule(8,n,m(o,n));this.setFunctionModule(8,7,m(o,6)),this.setFunctionModule(8,8,m(o,7)),this.setFunctionModule(7,8,m(o,8));for(let n=9;n<15;n++)this.setFunctionModule(14-n,8,m(o,n));for(let n=0;n<8;n++)this.setFunctionModule(this.size-1-n,8,m(o,n));for(let n=8;n<15;n++)this.setFunctionModule(8,this.size-15+n,m(o,n));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let t=this.version;for(let r=0;r<12;r++)t=t<<1^(t>>>11)*7973;const e=this.version<<12|t;c(e>>>18==0);for(let r=0;r<18;r++){const o=m(e,r),n=this.size-11+r%3,h=Math.floor(r/3);this.setFunctionModule(n,h,o),this.setFunctionModule(h,n,o)}}drawFinderPattern(t,e){for(let r=-4;r<=4;r++)for(let o=-4;o<=4;o++){const n=Math.max(Math.abs(o),Math.abs(r)),h=t+o,l=e+r;0<=h&&h<this.size&&0<=l&&l<this.size&&this.setFunctionModule(h,l,n!=2&&n!=4)}}drawAlignmentPattern(t,e){for(let r=-2;r<=2;r++)for(let o=-2;o<=2;o++)this.setFunctionModule(t+o,e+r,Math.max(Math.abs(o),Math.abs(r))!=1)}setFunctionModule(t,e,r){this.modules[e][t]=r,this.isFunction[e][t]=!0}addEccAndInterleave(t){const e=this.version,r=this.errorCorrectionLevel;if(t.length!=s.getNumDataCodewords(e,r))throw new RangeError("Invalid argument");const o=s.NUM_ERROR_CORRECTION_BLOCKS[r.ordinal][e],n=s.ECC_CODEWORDS_PER_BLOCK[r.ordinal][e],h=Math.floor(s.getNumRawDataModules(e)/8),l=o-h%o,E=Math.floor(h/o);let f=[];const p=s.reedSolomonComputeDivisor(n);for(let M=0,g=0;M<o;M++){let A=t.slice(g,g+E-n+(M<l?0:1));g+=A.length;const L=s.reedSolomonComputeRemainder(A,p);M<l&&A.push(0),f.push(A.concat(L))}let w=[];for(let M=0;M<f[0].length;M++)f.forEach((g,A)=>{(M!=E-n||A>=l)&&w.push(g[M])});return c(w.length==h),w}drawCodewords(t){if(t.length!=Math.floor(s.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");let e=0;for(let r=this.size-1;r>=1;r-=2){r==6&&(r=5);for(let o=0;o<this.size;o++)for(let n=0;n<2;n++){const h=r-n,E=(r+1&2)==0?this.size-1-o:o;!this.isFunction[E][h]&&e<t.length*8&&(this.modules[E][h]=m(t[e>>>3],7-(e&7)),e++)}}c(e==t.length*8)}applyMask(t){if(t<0||t>7)throw new RangeError("Mask value out of range");for(let e=0;e<this.size;e++)for(let r=0;r<this.size;r++){let o;switch(t){case 0:o=(r+e)%2==0;break;case 1:o=e%2==0;break;case 2:o=r%3==0;break;case 3:o=(r+e)%3==0;break;case 4:o=(Math.floor(r/3)+Math.floor(e/2))%2==0;break;case 5:o=r*e%2+r*e%3==0;break;case 6:o=(r*e%2+r*e%3)%2==0;break;case 7:o=((r+e)%2+r*e%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[e][r]&&o&&(this.modules[e][r]=!this.modules[e][r])}}getPenaltyScore(){let t=0;for(let n=0;n<this.size;n++){let h=!1,l=0,E=[0,0,0,0,0,0,0];for(let f=0;f<this.size;f++)this.modules[n][f]==h?(l++,l==5?t+=s.PENALTY_N1:l>5&&t++):(this.finderPenaltyAddHistory(l,E),h||(t+=this.finderPenaltyCountPatterns(E)*s.PENALTY_N3),h=this.modules[n][f],l=1);t+=this.finderPenaltyTerminateAndCount(h,l,E)*s.PENALTY_N3}for(let n=0;n<this.size;n++){let h=!1,l=0,E=[0,0,0,0,0,0,0];for(let f=0;f<this.size;f++)this.modules[f][n]==h?(l++,l==5?t+=s.PENALTY_N1:l>5&&t++):(this.finderPenaltyAddHistory(l,E),h||(t+=this.finderPenaltyCountPatterns(E)*s.PENALTY_N3),h=this.modules[f][n],l=1);t+=this.finderPenaltyTerminateAndCount(h,l,E)*s.PENALTY_N3}for(let n=0;n<this.size-1;n++)for(let h=0;h<this.size-1;h++){const l=this.modules[n][h];l==this.modules[n][h+1]&&l==this.modules[n+1][h]&&l==this.modules[n+1][h+1]&&(t+=s.PENALTY_N2)}let e=0;for(const n of this.modules)e=n.reduce((h,l)=>h+(l?1:0),e);const r=this.size*this.size,o=Math.ceil(Math.abs(e*20-r*10)/r)-1;return c(0<=o&&o<=9),t+=o*s.PENALTY_N4,c(0<=t&&t<=2568888),t}getAlignmentPatternPositions(){if(this.version==1)return[];{const t=Math.floor(this.version/7)+2,e=this.version==32?26:Math.ceil((this.version*4+4)/(t*2-2))*2;let r=[6];for(let o=this.size-7;r.length<t;o-=e)r.splice(1,0,o);return r}}static getNumRawDataModules(t){if(t<s.MIN_VERSION||t>s.MAX_VERSION)throw new RangeError("Version number out of range");let e=(16*t+128)*t+64;if(t>=2){const r=Math.floor(t/7)+2;e-=(25*r-10)*r-55,t>=7&&(e-=36)}return c(208<=e&&e<=29648),e}static getNumDataCodewords(t,e){return Math.floor(s.getNumRawDataModules(t)/8)-s.ECC_CODEWORDS_PER_BLOCK[e.ordinal][t]*s.NUM_ERROR_CORRECTION_BLOCKS[e.ordinal][t]}static reedSolomonComputeDivisor(t){if(t<1||t>255)throw new RangeError("Degree out of range");let e=[];for(let o=0;o<t-1;o++)e.push(0);e.push(1);let r=1;for(let o=0;o<t;o++){for(let n=0;n<e.length;n++)e[n]=s.reedSolomonMultiply(e[n],r),n+1<e.length&&(e[n]^=e[n+1]);r=s.reedSolomonMultiply(r,2)}return e}static reedSolomonComputeRemainder(t,e){let r=e.map(o=>0);for(const o of t){const n=o^r.shift();r.push(0),e.forEach((h,l)=>r[l]^=s.reedSolomonMultiply(h,n))}return r}static reedSolomonMultiply(t,e){if(t>>>8||e>>>8)throw new RangeError("Byte out of range");let r=0;for(let o=7;o>=0;o--)r=r<<1^(r>>>7)*285,r^=(e>>>o&1)*t;return c(r>>>8==0),r}finderPenaltyCountPatterns(t){const e=t[1];c(e<=this.size*3);const r=e>0&&t[2]==e&&t[3]==e*3&&t[4]==e&&t[5]==e;return(r&&t[0]>=e*4&&t[6]>=e?1:0)+(r&&t[6]>=e*4&&t[0]>=e?1:0)}finderPenaltyTerminateAndCount(t,e,r){return t&&(this.finderPenaltyAddHistory(e,r),e=0),e+=this.size,this.finderPenaltyAddHistory(e,r),this.finderPenaltyCountPatterns(r)}finderPenaltyAddHistory(t,e){e[0]==0&&(t+=this.size),e.pop(),e.unshift(t)}};let a=s;a.MIN_VERSION=1,a.MAX_VERSION=40,a.PENALTY_N1=3,a.PENALTY_N2=3,a.PENALTY_N3=40,a.PENALTY_N4=10,a.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],a.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],u.QrCode=a;function i(t,e,r){if(e<0||e>31||t>>>e)throw new RangeError("Value out of range");for(let o=e-1;o>=0;o--)r.push(t>>>o&1)}function m(t,e){return(t>>>e&1)!=0}function c(t){if(!t)throw new Error("Assertion error")}const d=class{constructor(t,e,r){if(this.mode=t,this.numChars=e,this.bitData=r,e<0)throw new RangeError("Invalid argument");this.bitData=r.slice()}static makeBytes(t){let e=[];for(const r of t)i(r,8,e);return new d(d.Mode.BYTE,t.length,e)}static makeNumeric(t){if(!d.isNumeric(t))throw new RangeError("String contains non-numeric characters");let e=[];for(let r=0;r<t.length;){const o=Math.min(t.length-r,3);i(parseInt(t.substr(r,o),10),o*3+1,e),r+=o}return new d(d.Mode.NUMERIC,t.length,e)}static makeAlphanumeric(t){if(!d.isAlphanumeric(t))throw new RangeError("String contains unencodable characters in alphanumeric mode");let e=[],r;for(r=0;r+2<=t.length;r+=2){let o=d.ALPHANUMERIC_CHARSET.indexOf(t.charAt(r))*45;o+=d.ALPHANUMERIC_CHARSET.indexOf(t.charAt(r+1)),i(o,11,e)}return r<t.length&&i(d.ALPHANUMERIC_CHARSET.indexOf(t.charAt(r)),6,e),new d(d.Mode.ALPHANUMERIC,t.length,e)}static makeSegments(t){return t==""?[]:d.isNumeric(t)?[d.makeNumeric(t)]:d.isAlphanumeric(t)?[d.makeAlphanumeric(t)]:[d.makeBytes(d.toUtf8ByteArray(t))]}static makeEci(t){let e=[];if(t<0)throw new RangeError("ECI assignment value out of range");if(t<128)i(t,8,e);else if(t<16384)i(2,2,e),i(t,14,e);else if(t<1e6)i(6,3,e),i(t,21,e);else throw new RangeError("ECI assignment value out of range");return new d(d.Mode.ECI,0,e)}static isNumeric(t){return d.NUMERIC_REGEX.test(t)}static isAlphanumeric(t){return d.ALPHANUMERIC_REGEX.test(t)}getData(){return this.bitData.slice()}static getTotalBits(t,e){let r=0;for(const o of t){const n=o.mode.numCharCountBits(e);if(o.numChars>=1<<n)return 1/0;r+=4+n+o.bitData.length}return r}static toUtf8ByteArray(t){t=encodeURI(t);let e=[];for(let r=0;r<t.length;r++)t.charAt(r)!="%"?e.push(t.charCodeAt(r)):(e.push(parseInt(t.substr(r+1,2),16)),r+=2);return e}};let C=d;C.NUMERIC_REGEX=/^[0-9]*$/,C.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,C.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:",u.QrSegment=C})(R||(R={}));(u=>{(s=>{const a=class{constructor(m,c){this.ordinal=m,this.formatBits=c}};let i=a;i.LOW=new a(0,1),i.MEDIUM=new a(1,0),i.QUARTILE=new a(2,3),i.HIGH=new a(3,2),s.Ecc=i})(u.QrCode||(u.QrCode={}))})(R||(R={}));(u=>{(s=>{const a=class{constructor(m,c){this.modeBits=m,this.numBitsCharCount=c}numCharCountBits(m){return this.numBitsCharCount[Math.floor((m+7)/17)]}};let i=a;i.NUMERIC=new a(1,[10,12,14]),i.ALPHANUMERIC=new a(2,[9,11,13]),i.BYTE=new a(4,[8,16,16]),i.KANJI=new a(8,[8,10,12]),i.ECI=new a(7,[0,0,0]),s.Mode=i})(u.QrSegment||(u.QrSegment={}))})(R||(R={}));var _=R;/**
 * @license qrcode.react
 * Copyright (c) Paul O'Shannessy
 * SPDX-License-Identifier: ISC
 */var B={L:_.QrCode.Ecc.LOW,M:_.QrCode.Ecc.MEDIUM,Q:_.QrCode.Ecc.QUARTILE,H:_.QrCode.Ecc.HIGH},z=128,D="L",T="#FFFFFF",U="#000000",Q=!1,y=4,k=.1;function H(u,s=0){const a=[];return u.forEach(function(i,m){let c=null;i.forEach(function(d,C){if(!d&&c!==null){a.push(`M${c+s} ${m+s}h${C-c}v1H${c+s}z`),c=null;return}if(C===i.length-1){if(!d)return;c===null?a.push(`M${C+s},${m+s} h1v1H${C+s}z`):a.push(`M${c+s},${m+s} h${C+1-c}v1H${c+s}z`);return}d&&c===null&&(c=C)})}),a.join("")}function $(u,s){return u.slice().map((a,i)=>i<s.y||i>=s.y+s.h?a:a.map((m,c)=>c<s.x||c>=s.x+s.w?m:!1))}function Y(u,s,a,i){if(i==null)return null;const m=a?y:0,c=u.length+m*2,d=Math.floor(s*k),C=c/s,t=(i.width||d)*C,e=(i.height||d)*C,r=i.x==null?u.length/2-t/2:i.x*C,o=i.y==null?u.length/2-e/2:i.y*C;let n=null;if(i.excavate){let h=Math.floor(r),l=Math.floor(o),E=Math.ceil(t+r-h),f=Math.ceil(e+o-l);n={x:h,y:l,w:E,h:f}}return{x:r,y:o,h:e,w:t,excavation:n}}(function(){try{new Path2D().addPath(new Path2D)}catch{return!1}return!0})();function X(u){const s=u,{value:a,size:i=z,level:m=D,bgColor:c=T,fgColor:d=U,includeMargin:C=Q,imageSettings:t}=s,e=F(s,["value","size","level","bgColor","fgColor","includeMargin","imageSettings"]);let r=_.QrCode.encodeText(a,B[m]).getModules();const o=C?y:0,n=r.length+o*2,h=Y(r,i,C,t);let l=null;t!=null&&h!=null&&(h.excavation!=null&&(r=$(r,h.excavation)),l=N.createElement("image",{xlinkHref:t.src,height:h.h,width:h.w,x:h.x+o,y:h.y+o,preserveAspectRatio:"none"}));const E=H(r,o);return N.createElement("svg",b({height:i,width:i,viewBox:`0 0 ${n} ${n}`},e),N.createElement("path",{fill:c,d:`M0,0 h${n}v${n}H0z`,shapeRendering:"crispEdges"}),N.createElement("path",{fill:d,d:E,shapeRendering:"crispEdges"}),l)}export{X as Q};
