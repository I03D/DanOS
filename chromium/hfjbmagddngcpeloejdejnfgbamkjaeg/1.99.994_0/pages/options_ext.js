"use strict";__filename="pages/options_ext.js",define(["require","exports","./async_bg","./options_base","./options_defs","./options_permissions","./options_wnd"],function(n,e,o,t,i,r,l){function u(n){return new Date(+n-6e4*(new Date).getTimezoneOffset()).toJSON().slice(0,-5).replace("T"," ")}function s(n,e){return e&&("omniBlockList"===n||c(e))?"$base64:"+btoa(encodeURIComponent(e).replace(/%([0-9A-F]{2})/g,function(n,e){return String.fromCharCode(parseInt(e,16))})):e}function c(n){var e,o;if(null==h){for(o of(e=[],t.u.z("omniBlockList").split("\n")))o.trim()&&"#"!==o[0]&&e.push(o);h=e.length>0&&new RegExp(e.map(function(n){return n.replace(/[$()*+.?\[\\\]\^{|}]/g,"\\$&")}).join("|"),"")}return false!==h&&h.test(n)}function a(n){return n instanceof Array&&(n=n.join("\n").trimRight()),(n=n.replace(/\r\n?/g,"\n").replace(/\xa0/g," ")).replace(/^\$base64:(.*)/gm,function(n,e){try{return decodeURIComponent([].map.call(atob(e),function(n){return"%"+("00"+n.charCodeAt(0).toString(16)).slice(-2)}).join(""))}catch(n){}return n})}function f(n,e,l){return __awaiter(this,void 0,void 0,function*(){var s,c,f,d,m,y,h,_,w,S,V,O,x,C,k,A,j,L,R,T,E,P,B=this,N=e.environment,H=N&&N.platform||"",D=N&&N.extension&&N.extension+""||"",F=parseFloat(D||0)||0,I=F>1?D.split(".",2).join("."):"",M=F>parseFloat(r.yn.version);if(H&&(H=(""+H).slice(0,10)),confirm(t.t("confirmImport",[t.t(true!==l?"backupFile":"recommendedFile"),I?t.t("fileVCVer").replace("*",I):"",(I?t.t("fileVCVer_2").replace("*",I):"")+(M?t.t("fileVCNewer"):""),H?t.t("filePlatform",[t.t(H)||H[0].toUpperCase()+H.slice(1)]):t.t("commonPlatform"),n?t.t("atTime",[u(n)]):t.t("before")]))){for(w in s=new Date,c=b(s,false),Object.setPrototypeOf(e,null),(f=e["chromium"in e?"chromium":"chrome"])&&"object"==typeof f&&Object.assign(e,f),null==e.vimSync&&(m=(d=t.u.z("vimSync"))&&confirm(t.t("keepSyncing")),e.vimSync=m||null==d&&null,d&&console.log("Before importing: You chose to",m?"keep settings synced.":"stop syncing settings.")),y=function(n,e,o,t){var i=arguments.length>3,r=i?t:o,l=["%s %c%s",n,"color:darkred",e];r="string"!=typeof r||r.length<=72?r:r.slice(0,71).trimRight()+" \u2026",i&&l.push(o),l.push(r),h++,console.log.apply(console,l)},h=0,console.group("Import settings at "+u(+s+1)),o.R(8),n>1e4?console.info("load settings saved at %c%s%c.","color:darkblue",u(n),"color:auto"):console.info("load the settings:",l?"recommended.":"saved before."),(_=function(n){return n.split(/\s+/g).forEach(function(n){return n&&delete e[n]})})("name time environment author description chrome chromium firefox edge safari"),e)"@"===w[0]&&delete e[w];for(w in S=function(n){var o=e[n];"string"==typeof o&&o.includes("extension://",2)&&(/^(chrome|edge)-/.test(o)?o.startsWith("edge-")&&(e[n]=o.replace("edge-","chrome-")):delete e[n])},S("vomnibarPage"),S("newTabUrl"),V=t.o(),O=t.u.S,x=t.r.rt,V)V[w]===O[w]||w in e||(e[w]=null);for(w in _("findModeRawQueryList innerCSS findCSS omniCSS newTabUrl_f vomnibarPage_f\n      focusNewTabContent dialogMode"),C={__proto__:null,extWhiteList:"extAllowList",phraseBlacklist:"omniBlockList"})w in e&&(e[C[w]]=e[w],delete e[w]);for(R of(null==e.keyLayout&&(A=e[p[1]],j=e[p[2]],void 0===(k=e[p[0]])&&void 0===A&&void 0===j||(L=void 0,L=null==(k=null!==k?k+"":k)?4:"2"===k||"true"===k?1:"1"===k?12:4,L|=null==(A=null!==A?A+"":A)||1===L?0:"2"===A||"true"===A?16:"1"===A?512:0,L|=null==(j=null!==j?j+"":j)?0:"2"===j?128:"1"===j?64:0,e.keyLayout=L|=256)),p))delete e[R];e.vimSync!==t.u.z("vimSync")&&(y("import","vimSync",e.vimSync),yield t.u.J("vimSync",e.vimSync),yield x.vimSync.Z()),void 0!==(T=x.keyMappings)&&(delete x.keyMappings,x.keyMappings=T),yield Promise.all(Object.values(x).map(function(n){return __awaiter(B,void 0,void 0,function*(){var o=n.T,i=e[o];if(delete e[o],o in O)return null==i?i=O[o]:("string"==typeof O[o]&&(i=a(i)),i=yield n.I(i)),n.et(yield n.q(),i)?n.K?void 0:n.Z():(y("import",o,i),yield t.u.J(o,i),o in t.u.L&&t.r.st.push(o),yield n.Z(),n.F())})})).catch(function(n){y("[ERROR] importing options failed","cause:",n)}),yield Promise.all(Object.keys(e).map(function(n){return __awaiter(B,void 0,void 0,function*(){var i=e[n];if(null==i)if(n in O){if(i=O[n],t.u.z(n)!==i)return y("reset",n,i),t.u.J(n,i)}else if(n.includes("|"))return y("remove",n,"(from local)"),o.O(28,{key:n,val:null});if("string"==typeof O[n]&&(i=a(i)),n in O){if(t.u.z(n)!==i)return y("update",n,i),t.u.J(n,i)}else if(n.includes("|"))return y("save",n,i=""+i),o.O(28,{key:n,val:i})})})).catch(function(n){y("[ERROR] saving fields failed","cause:",n)}),o.R(0,8),yield 0,i.Jt.onclick(false),h<=0?console.info("no differences found."):c.options>0&&(E=g(c.text),console.info("[message] you may recover old configuration of %d option(s), by open the %s URL below ON THIS TAB:\n%c%s",c.options,E.slice(0,5),"color: #15c;",E)),console.info("import settings: finished."),console.groupEnd(),(P=VApi&&VApi.y().r)&&P.querySelector("#HCls")&&v("force"),VApi&&VApi.h(1,0,t.t("importOK"))}else VApi&&VApi.h(1,0,t.t("cancelImport"))})}function d(n,e,i){var r,l,u,s,c,a=null,d=null,p="";try{(r=m(i?e:e.replace(/\xa0/g," ")))instanceof Error?d=r:r?a=r:p=t.t("notJSON")}catch(n){d=n}return null!=d&&(p=d?(d.message||d)+"":t.t("exc")+(""!==d?d:t.t("unknown")),p=(l=/^(\d+):(\d+)$/.exec(p))?t.t("JSONParseError",[l[1],l[2]]):p),a?(n=+new Date(a.time||("object"==typeof n?+n:n))||0,"Vimium C"!==a.name&&"Vimium++"!==a.name||n<1e4&&n>0?(p=t.t("notVCJSON"),alert(p)):(u=t.r.rt.keyMappings.Q?Promise.resolve():o._n("./options_checker.js"),s=n,c=a,void u.then(function(){setTimeout(f,17,s,c,i)}))):alert(p)}function m(n){function e(){return/a?/.test("")}function o(n){for(var e=n.length;i.length<e;i+=i);return i.slice(0,e)}var t,i,r,l,u,s,c,a=/[^\r\n]+/g;if(!n||!(n=n.trimRight()))return null;i=" ";try{return r=JSON.parse(n.replace(/"(?:\\[^\r\n]|[^"\\\r\n])*"|'(?:\\[^\r\n]|[^'\\\r\n])*'|(?:\/\/|#)[^\r\n]*|\/\*[^]*?\*\//g,function(n){var e=n[0];return"/"===e||"#"===e?n.startsWith("/*")?n.replace(a,o):o(n):n})),e(),r}catch(n){if(t=/\b(?:position (\d+)|line (\d+) column (\d+))/.exec(n+""),e(),!t||!t[0])throw n}return t[2]?(l=+t[2],u=+t[3]):+t[1]>0?(s=n.includes("\r")?n.includes("\r\n")?"\r\n":"\r":"\n",u=(c=n.slice(0,+t[1]).split(s))[(l=c.length)-1].length+1):l=u=1,new SyntaxError(l+":"+u)}var p,g,v,y,b,h,_,w,S,V;Object.defineProperty(e,"__esModule",{value:true}),p=["ignoreKeyboardLayout","ignoreCapsLock","mapModifier"],g=function(n){if(l.wn())return"data:application/json;base64,"+btoa(String.fromCharCode.apply(String,(new TextEncoder).encode(n)));var e=new Blob([n],{type:"application/json",endings:"native"});return URL.createObjectURL(e)},v=function(n){var e,t,i,r,u;if(VApi&&VApi.z){if(t=VApi.y().r,i=false,n&&"force"!==n&&o.Qt(n),t&&(e=t.querySelector("#HCls"))){if("force"!==n&&null!=t.querySelector(".HelpCommandName"))return void o.Sn(e);i=!!(u=(r=t.querySelector("#HDlg"))&&r.parentElement||r)&&u.remove!==HTMLElement.prototype.remove,u&&(u.remove=HTMLElement.prototype.remove)}VApi.r[0](40,{i:1,q:[{n:24,q:null}]},i||"#commands"===location.hash?function(){var n,e=VApi&&VApi.y(),t=e&&e.r&&e.r.querySelector("#HDlg");t&&((n=t.parentElement||t).remove=function(){HTMLElement.prototype.remove.call(n),location.hash="","none"!=o.$("#optionalPermissionsBox").style.display&&l.Vn("#optionalPermissions")})}:function(){})}else o.On.then(v.bind(null,n))},o.$("#showCommands").onclick=v,t.s.prototype.xn=function(n){var e,o,i,r,l,u;if(!n||!this.Cn){for(l of(o=/^([:^]?[a-z\-?*]+:\/\/)?((?:[^\/]|\/])+)(\/[^\]].*|\/?$)/,e=this.Y()))(r=o.exec(i=l.pattern.replace("(?:[^./]+\\.)*?","*.")))&&r[1]&&r[2]&&(i=r[3]?r[3].replace(/\\\./g,"."):"",(r=r[2].replace(/\\\./g,".").split(".")).reverse(),i=r.join(".")+i),l.kn=i;e.sort(function(n,e){return n.kn<e.kn?-1:n.kn===e.kn?0:1}),this.G(e),this.E(),n&&(u=this,this.Cn=setTimeout(function(n,e){n.firstChild.data=e,u.Cn=0},1e3,n,n.firstChild.data),n.firstChild.data=t.t("3_2"))}},o.$("#exclusionSortButton").onclick=function(){t.r.rt.exclusionRules.xn(this)},y="",b=function(n,e){var i,l,u,c,a,f,d,m,g,v,y,b=Object.create(null);for(a of(b.name="Vimium C",e||(b["@time"]=n.toLocaleString(),b.time=n.getTime()),b.environment={extension:r.yn.version,platform:t.u.b},b.environment.chromium=o.Pt,i=t.o(),l=t.u.S,u=Object.keys(i).sort(),h=null,c=function(n){var e=i[n],o=l[n];if(e===o)return"continue";"string"!=typeof o?b[n]=e:e.includes("\n")?(b[n]=e.split("\n").map(function(e){return s(n,e)})).push(""):b[n]=s(n,e)},u))c(a);for(h=null,null!=b.keyLayout&&(9&(f=b.keyLayout)&&(b[p[0]]=8&f?1:2),528&f&&(b[p[1]]=512&f?1:2),192&f&&(b[p[2]]=64&f?1:2)),m=(d=JSON.stringify(b,null,"\t")+"\n").split("\n"),g=0;g<m.length;g++)m[g].replace(/[\u4e00-\u9fff]/g,"  ").length+1>120&&/^\s+"\w+":/.test(m[g])&&(v=m[g].split(":",1)[0]+":",y=(y=m[g].slice(v.length).trimLeft()).replace(/[\u4e00-\u9fff]/g,"  ").length+4>120?y:"\t\t"+y,m[g]=v+"\n"+y);return d=m.join("\n"),"win"===b.environment.platform&&(d=d.replace(/\n/g,"\r\n")),{text:d,options:u.length}},i.Et.onclick=function(n){var e,t,i,r,l,s;y&&(URL.revokeObjectURL(y),y=""),e=new Date,i=b(e,t=!!n&&(n.ctrlKey||n.metaKey||n.shiftKey)).text,r=u(e),l="vimium_c-",l+=t?"settings":r.replace(/[\-:]/g,"").replace(" ","_"),l+=".json",(s=document.createElement("a")).download=l,s.href=g(i),o.Sn(s),y=s.href,console.info("EXPORT settings to %c%s%c at %c%s%c.","color:darkred",l,"color:auto","color:darkblue",r,"color:auto")},h=null,(_=o.$("#settingsFile")).onclick=null,_.onchange=function(){var n,e,o,i=this.files[0];this.value="",i&&(n=t.r.rt.vimSync.C?102400:10485760,i.size&&i.size>n?alert(t.t("JSONTooLarge",[i.name,n/1024])):(e=new FileReader,o=i.lastModified||i.lastModifiedDate||0,e.onload=function(){return d(o,this.result,false)},e.readAsText(i)))},(w=o.$("#importOptions")).onclick=null,w.onchange=function(){o.$("#importButton").focus(),"exported"!==this.value?fetch("../settings-template.json").then(function(n){return n.text()}).then(function(n){return d(0,n,true)}):l.wn(1)||o.Sn(_)},l.delayed_task&&(V=l.delayed_task,l.clear_delayed_task(),(S=o.$(V[0])).onclick&&S.onclick(V[1]))});