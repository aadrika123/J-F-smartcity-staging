class f{static changeHeightWidth(e,a,t,l,n,s){return t>l&&(e=Math.round(e*l/t),t=l),e>a&&(t=Math.round(t*a/e),e=a),n&&t<n&&(e=Math.round(e*n/t),t=n),s&&e<s&&(t=Math.round(t*s/e),e=s),{height:e,width:t}}static resizeAndRotateImage(e,a,t,l,n,s="jpeg",i=100,r=0){var b=i/100,o=document.createElement("canvas"),h=e.width,d=e.height,g=this.changeHeightWidth(d,t,h,a,l,n);r&&(r===90||r===270)?(o.width=g.height,o.height=g.width):(o.width=g.width,o.height=g.height),h=g.width,d=g.height;var c=o.getContext("2d");return c.fillStyle="rgba(0, 0, 0, 0)",c.fillRect(0,0,h,d),c.imageSmoothingEnabled&&c.imageSmoothingQuality&&(c.imageSmoothingQuality="high"),r&&(c.rotate(r*Math.PI/180),r===90?c.translate(0,-o.width):r===180?c.translate(-o.width,-o.height):r===270?c.translate(-o.height,0):(r===0||r===360)&&c.translate(0,0)),c.drawImage(e,0,0,h,d),o.toDataURL(`image/${s}`,b)}static b64toByteArrays(e,a){for(var t=512,l=atob(e.toString().replace(/^data:image\/(png|jpeg|jpg|webp);base64,/,"")),n=[],s=0;s<l.length;s+=t){for(var i=l.slice(s,s+t),r=new Array(i.length),b=0;b<i.length;b++)r[b]=i.charCodeAt(b);var o=new Uint8Array(r);n.push(o)}return n}static b64toBlob(e,a){const t=this.b64toByteArrays(e,a);var l=new Blob(t,{type:a,lastModified:new Date});return l}static b64toFile(e,a,t){const l=this.b64toByteArrays(e,t);return new File(l,a,{type:t,lastModified:new Date})}static createResizedImage(e,a,t,l,n,s,i,r="base64",b=null,o=null){const h=new FileReader;if(e){if(e.type&&!e.type.includes("image"))throw Error("File Is NOT Image!");h.readAsDataURL(e),h.onload=()=>{var d=new Image;d.src=h.result,d.onload=function(){var g=f.resizeAndRotateImage(d,a,t,b,o,l,n,s);const c=`image/${l}`;switch(r){case"blob":const w=f.b64toBlob(g,c);i(w);break;case"base64":i(g);break;case"file":let y=e.name.toString().replace(/(png|jpeg|jpg|webp)$/i,"").concat(l.toString());const v=f.b64toFile(g,y,c);i(v);break;default:i(g)}}},h.onerror=d=>{throw Error(d)}}else throw Error("File Not Found!")}}const m={imageFileResizer:(u,e,a,t,l,n,s,i,r,b)=>f.createResizedImage(u,e,a,t,l,n,s,i,r,b)},p=u=>{var n,s,i;const e=u==null?void 0:u.split(","),a=((n=e[0])==null?void 0:n.indexOf("base64"))>=0?atob(e[1]):decodeURI(e[1]),t=(i=(s=e[0])==null?void 0:s.split(":")[1])==null?void 0:i.split(";")[0],l=new Uint8Array(a==null?void 0:a.length);for(let r=0;r<(a==null?void 0:a.length);r++)l[r]=a==null?void 0:a.charCodeAt(r);return new Blob([l],{type:t})},z=async u=>new Promise(a=>{m.imageFileResizer(u,250,250,"JPEG",60,0,t=>{a(t)},"base64")}).then(a=>p(a));export{z as r};
