(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"16fj":function(e,t,n){"use strict";n.r(t);var r=n("CcnG"),o=function(){return function(){}}(),s=n("pMnS"),i=n("ZYCi"),u=n("Ip0R"),a=function(){function e(){this.movie=null}return e.prototype.ngOnInit=function(){},e}(),l=r.kb({encapsulation:0,styles:[[""]],data:{}});function p(e){return r.wb(0,[(e()(),r.mb(0,0,null,null,9,"div",[["class","card"]],null,null,null,null,null)),(e()(),r.mb(1,0,null,null,0,"img",[["class","card-img-top"]],[[8,"src",4]],null,null,null,null)),(e()(),r.mb(2,0,null,null,7,"div",[["class","card-body"]],null,null,null,null,null)),(e()(),r.mb(3,0,null,null,1,"h5",[["class","card-title"]],null,null,null,null,null)),(e()(),r.vb(4,null,["",""])),(e()(),r.mb(5,0,null,null,1,"p",[["class","card-text"]],null,null,null,null,null)),(e()(),r.vb(6,null,["",""])),(e()(),r.mb(7,0,null,null,2,"a",[["class","btn btn-primary"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(e,t,n){var o=!0;return"click"===t&&(o=!1!==r.tb(e,8).onClick(n.button,n.ctrlKey,n.metaKey,n.shiftKey)&&o),o},null,null)),r.lb(8,671744,null,0,i.l,[i.k,i.a,u.g],{routerLink:[0,"routerLink"]},null),(e()(),r.vb(-1,null,[" Details "]))],function(e,t){e(t,8,0,"/videos/"+t.component.movie.id)},function(e,t){var n=t.component;e(t,1,0,n.movie.imageUrl),e(t,4,0,n.movie.title),e(t,6,0,n.movie.description),e(t,7,0,r.tb(t,8).target,r.tb(t,8).href)})}var c=function(){function e(){}return e.prototype.ngOnInit=function(){},e}(),h=r.kb({encapsulation:0,styles:[[""]],data:{}});function d(e){return r.wb(0,[(e()(),r.mb(0,0,null,null,1,"app-video-list-item",[],null,null,null,p,l)),r.lb(1,114688,null,0,a,[],{movie:[0,"movie"]},null)],function(e,t){e(t,1,0,t.context.$implicit)},null)}function f(e){return r.wb(0,[(e()(),r.db(16777216,null,null,1,null,d)),r.lb(1,278528,null,0,u.h,[r.M,r.J,r.r],{ngForOf:[0,"ngForOf"]},null)],function(e,t){e(t,1,0,t.component.movies)},null)}var y=n("mrSG"),m=n("AytR"),v=n("F/XL"),b=n("6blF"),g=n("Phjn"),w=n("VnD/"),T=n("67Y/"),O=function(){return function(){}}(),k=function(){return function(){}}(),E=function(){function e(e){var t=this;this.normalizedNames=new Map,this.lazyUpdate=null,e?this.lazyInit="string"==typeof e?function(){t.headers=new Map,e.split("\n").forEach(function(e){var n=e.indexOf(":");if(n>0){var r=e.slice(0,n),o=r.toLowerCase(),s=e.slice(n+1).trim();t.maybeSetNormalizedName(r,o),t.headers.has(o)?t.headers.get(o).push(s):t.headers.set(o,[s])}})}:function(){t.headers=new Map,Object.keys(e).forEach(function(n){var r=e[n],o=n.toLowerCase();"string"==typeof r&&(r=[r]),r.length>0&&(t.headers.set(o,r),t.maybeSetNormalizedName(n,o))})}:this.headers=new Map}return e.prototype.has=function(e){return this.init(),this.headers.has(e.toLowerCase())},e.prototype.get=function(e){this.init();var t=this.headers.get(e.toLowerCase());return t&&t.length>0?t[0]:null},e.prototype.keys=function(){return this.init(),Array.from(this.normalizedNames.values())},e.prototype.getAll=function(e){return this.init(),this.headers.get(e.toLowerCase())||null},e.prototype.append=function(e,t){return this.clone({name:e,value:t,op:"a"})},e.prototype.set=function(e,t){return this.clone({name:e,value:t,op:"s"})},e.prototype.delete=function(e,t){return this.clone({name:e,value:t,op:"d"})},e.prototype.maybeSetNormalizedName=function(e,t){this.normalizedNames.has(t)||this.normalizedNames.set(t,e)},e.prototype.init=function(){var t=this;this.lazyInit&&(this.lazyInit instanceof e?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(function(e){return t.applyUpdate(e)}),this.lazyUpdate=null))},e.prototype.copyFrom=function(e){var t=this;e.init(),Array.from(e.headers.keys()).forEach(function(n){t.headers.set(n,e.headers.get(n)),t.normalizedNames.set(n,e.normalizedNames.get(n))})},e.prototype.clone=function(t){var n=new e;return n.lazyInit=this.lazyInit&&this.lazyInit instanceof e?this.lazyInit:this,n.lazyUpdate=(this.lazyUpdate||[]).concat([t]),n},e.prototype.applyUpdate=function(e){var t=e.name.toLowerCase();switch(e.op){case"a":case"s":var n=e.value;if("string"==typeof n&&(n=[n]),0===n.length)return;this.maybeSetNormalizedName(e.name,t);var r=("a"===e.op?this.headers.get(t):void 0)||[];r.push.apply(r,Object(y.i)(n)),this.headers.set(t,r);break;case"d":var o=e.value;if(o){var s=this.headers.get(t);if(!s)return;0===(s=s.filter(function(e){return-1===o.indexOf(e)})).length?(this.headers.delete(t),this.normalizedNames.delete(t)):this.headers.set(t,s)}else this.headers.delete(t),this.normalizedNames.delete(t)}},e.prototype.forEach=function(e){var t=this;this.init(),Array.from(this.normalizedNames.keys()).forEach(function(n){return e(t.normalizedNames.get(n),t.headers.get(n))})},e}(),C=function(){function e(){}return e.prototype.encodeKey=function(e){return j(e)},e.prototype.encodeValue=function(e){return j(e)},e.prototype.decodeKey=function(e){return decodeURIComponent(e)},e.prototype.decodeValue=function(e){return decodeURIComponent(e)},e}();function j(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/gi,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%2B/gi,"+").replace(/%3D/gi,"=").replace(/%3F/gi,"?").replace(/%2F/gi,"/")}var x=function(){function e(e){void 0===e&&(e={});var t,n,r,o=this;if(this.updates=null,this.cloneFrom=null,this.encoder=e.encoder||new C,e.fromString){if(e.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=(t=e.fromString,n=this.encoder,r=new Map,t.length>0&&t.split("&").forEach(function(e){var t=e.indexOf("="),o=Object(y.h)(-1==t?[n.decodeKey(e),""]:[n.decodeKey(e.slice(0,t)),n.decodeValue(e.slice(t+1))],2),s=o[0],i=o[1],u=r.get(s)||[];u.push(i),r.set(s,u)}),r)}else e.fromObject?(this.map=new Map,Object.keys(e.fromObject).forEach(function(t){var n=e.fromObject[t];o.map.set(t,Array.isArray(n)?n:[n])})):this.map=null}return e.prototype.has=function(e){return this.init(),this.map.has(e)},e.prototype.get=function(e){this.init();var t=this.map.get(e);return t?t[0]:null},e.prototype.getAll=function(e){return this.init(),this.map.get(e)||null},e.prototype.keys=function(){return this.init(),Array.from(this.map.keys())},e.prototype.append=function(e,t){return this.clone({param:e,value:t,op:"a"})},e.prototype.set=function(e,t){return this.clone({param:e,value:t,op:"s"})},e.prototype.delete=function(e,t){return this.clone({param:e,value:t,op:"d"})},e.prototype.toString=function(){var e=this;return this.init(),this.keys().map(function(t){var n=e.encoder.encodeKey(t);return e.map.get(t).map(function(t){return n+"="+e.encoder.encodeValue(t)}).join("&")}).join("&")},e.prototype.clone=function(t){var n=new e({encoder:this.encoder});return n.cloneFrom=this.cloneFrom||this,n.updates=(this.updates||[]).concat([t]),n},e.prototype.init=function(){var e=this;null===this.map&&(this.map=new Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(function(t){return e.map.set(t,e.cloneFrom.map.get(t))}),this.updates.forEach(function(t){switch(t.op){case"a":case"s":var n=("a"===t.op?e.map.get(t.param):void 0)||[];n.push(t.value),e.map.set(t.param,n);break;case"d":if(void 0===t.value){e.map.delete(t.param);break}var r=e.map.get(t.param)||[],o=r.indexOf(t.value);-1!==o&&r.splice(o,1),r.length>0?e.map.set(t.param,r):e.map.delete(t.param)}}),this.cloneFrom=null)},e}();function N(e){return"undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer}function P(e){return"undefined"!=typeof Blob&&e instanceof Blob}function S(e){return"undefined"!=typeof FormData&&e instanceof FormData}var R=function(){function e(e,t,n,r){var o;if(this.url=t,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=e.toUpperCase(),function(e){switch(e){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||r?(this.body=void 0!==n?n:null,o=r):o=n,o&&(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.params&&(this.params=o.params)),this.headers||(this.headers=new E),this.params){var s=this.params.toString();if(0===s.length)this.urlWithParams=t;else{var i=t.indexOf("?");this.urlWithParams=t+(-1===i?"?":i<t.length-1?"&":"")+s}}else this.params=new x,this.urlWithParams=t}return e.prototype.serializeBody=function(){return null===this.body?null:N(this.body)||P(this.body)||S(this.body)||"string"==typeof this.body?this.body:this.body instanceof x?this.body.toString():"object"==typeof this.body||"boolean"==typeof this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()},e.prototype.detectContentTypeHeader=function(){return null===this.body?null:S(this.body)?null:P(this.body)?this.body.type||null:N(this.body)?null:"string"==typeof this.body?"text/plain":this.body instanceof x?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof this.body||"number"==typeof this.body||Array.isArray(this.body)?"application/json":null},e.prototype.clone=function(t){void 0===t&&(t={});var n=t.method||this.method,r=t.url||this.url,o=t.responseType||this.responseType,s=void 0!==t.body?t.body:this.body,i=void 0!==t.withCredentials?t.withCredentials:this.withCredentials,u=void 0!==t.reportProgress?t.reportProgress:this.reportProgress,a=t.headers||this.headers,l=t.params||this.params;return void 0!==t.setHeaders&&(a=Object.keys(t.setHeaders).reduce(function(e,n){return e.set(n,t.setHeaders[n])},a)),t.setParams&&(l=Object.keys(t.setParams).reduce(function(e,n){return e.set(n,t.setParams[n])},l)),new e(n,r,s,{params:l,headers:a,reportProgress:u,responseType:o,withCredentials:i})},e}(),A=function(e){return e[e.Sent=0]="Sent",e[e.UploadProgress=1]="UploadProgress",e[e.ResponseHeader=2]="ResponseHeader",e[e.DownloadProgress=3]="DownloadProgress",e[e.Response=4]="Response",e[e.User=5]="User",e}({}),z=function(){return function(e,t,n){void 0===t&&(t=200),void 0===n&&(n="OK"),this.headers=e.headers||new E,this.status=void 0!==e.status?e.status:t,this.statusText=e.statusText||n,this.url=e.url||null,this.ok=this.status>=200&&this.status<300}}(),L=function(e){function t(t){void 0===t&&(t={});var n=e.call(this,t)||this;return n.type=A.ResponseHeader,n}return Object(y.d)(t,e),t.prototype.clone=function(e){return void 0===e&&(e={}),new t({headers:e.headers||this.headers,status:void 0!==e.status?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})},t}(z),I=function(e){function t(t){void 0===t&&(t={});var n=e.call(this,t)||this;return n.type=A.Response,n.body=void 0!==t.body?t.body:null,n}return Object(y.d)(t,e),t.prototype.clone=function(e){return void 0===e&&(e={}),new t({body:void 0!==e.body?e.body:this.body,headers:e.headers||this.headers,status:void 0!==e.status?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})},t}(z),U=function(e){function t(t){var n=e.call(this,t,0,"Unknown Error")||this;return n.name="HttpErrorResponse",n.ok=!1,n.message=n.status>=200&&n.status<300?"Http failure during parsing for "+(t.url||"(unknown url)"):"Http failure response for "+(t.url||"(unknown url)")+": "+t.status+" "+t.statusText,n.error=t.error||null,n}return Object(y.d)(t,e),t}(z);function F(e,t){return{body:t,headers:e.headers,observe:e.observe,params:e.params,reportProgress:e.reportProgress,responseType:e.responseType,withCredentials:e.withCredentials}}var M=function(){function e(e){this.handler=e}return e.prototype.request=function(e,t,n){var r,o=this;if(void 0===n&&(n={}),e instanceof R)r=e;else{var s;s=n.headers instanceof E?n.headers:new E(n.headers);var i=void 0;n.params&&(i=n.params instanceof x?n.params:new x({fromObject:n.params})),r=new R(e,t,void 0!==n.body?n.body:null,{headers:s,params:i,reportProgress:n.reportProgress,responseType:n.responseType||"json",withCredentials:n.withCredentials})}var u=Object(v.a)(r).pipe(Object(g.a)(function(e){return o.handler.handle(e)}));if(e instanceof R||"events"===n.observe)return u;var a=u.pipe(Object(w.a)(function(e){return e instanceof I}));switch(n.observe||"body"){case"body":switch(r.responseType){case"arraybuffer":return a.pipe(Object(T.a)(function(e){if(null!==e.body&&!(e.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return e.body}));case"blob":return a.pipe(Object(T.a)(function(e){if(null!==e.body&&!(e.body instanceof Blob))throw new Error("Response is not a Blob.");return e.body}));case"text":return a.pipe(Object(T.a)(function(e){if(null!==e.body&&"string"!=typeof e.body)throw new Error("Response is not a string.");return e.body}));case"json":default:return a.pipe(Object(T.a)(function(e){return e.body}))}case"response":return a;default:throw new Error("Unreachable: unhandled observe type "+n.observe+"}")}},e.prototype.delete=function(e,t){return void 0===t&&(t={}),this.request("DELETE",e,t)},e.prototype.get=function(e,t){return void 0===t&&(t={}),this.request("GET",e,t)},e.prototype.head=function(e,t){return void 0===t&&(t={}),this.request("HEAD",e,t)},e.prototype.jsonp=function(e,t){return this.request("JSONP",e,{params:(new x).append(t,"JSONP_CALLBACK"),observe:"body",responseType:"json"})},e.prototype.options=function(e,t){return void 0===t&&(t={}),this.request("OPTIONS",e,t)},e.prototype.patch=function(e,t,n){return void 0===n&&(n={}),this.request("PATCH",e,F(n,t))},e.prototype.post=function(e,t,n){return void 0===n&&(n={}),this.request("POST",e,F(n,t))},e.prototype.put=function(e,t,n){return void 0===n&&(n={}),this.request("PUT",e,F(n,t))},e}(),H=function(){function e(e,t){this.next=e,this.interceptor=t}return e.prototype.handle=function(e){return this.interceptor.intercept(e,this.next)},e}(),q=new r.o("HTTP_INTERCEPTORS"),B=function(){function e(){}return e.prototype.intercept=function(e,t){return t.handle(e)},e}(),D=/^\)\]\}',?\n/,K=function(){return function(){}}(),J=function(){function e(){}return e.prototype.build=function(){return new XMLHttpRequest},e}(),X=function(){function e(e){this.xhrFactory=e}return e.prototype.handle=function(e){var t=this;if("JSONP"===e.method)throw new Error("Attempted to construct Jsonp request without JsonpClientModule installed.");return new b.a(function(n){var r=t.xhrFactory.build();if(r.open(e.method,e.urlWithParams),e.withCredentials&&(r.withCredentials=!0),e.headers.forEach(function(e,t){return r.setRequestHeader(e,t.join(","))}),e.headers.has("Accept")||r.setRequestHeader("Accept","application/json, text/plain, */*"),!e.headers.has("Content-Type")){var o=e.detectContentTypeHeader();null!==o&&r.setRequestHeader("Content-Type",o)}if(e.responseType){var s=e.responseType.toLowerCase();r.responseType="json"!==s?s:"text"}var i=e.serializeBody(),u=null,a=function(){if(null!==u)return u;var t=1223===r.status?204:r.status,n=r.statusText||"OK",o=new E(r.getAllResponseHeaders()),s=function(e){return"responseURL"in e&&e.responseURL?e.responseURL:/^X-Request-URL:/m.test(e.getAllResponseHeaders())?e.getResponseHeader("X-Request-URL"):null}(r)||e.url;return u=new L({headers:o,status:t,statusText:n,url:s})},l=function(){var t=a(),o=t.headers,s=t.status,i=t.statusText,u=t.url,l=null;204!==s&&(l=void 0===r.response?r.responseText:r.response),0===s&&(s=l?200:0);var p=s>=200&&s<300;if("json"===e.responseType&&"string"==typeof l){var c=l;l=l.replace(D,"");try{l=""!==l?JSON.parse(l):null}catch(h){l=c,p&&(p=!1,l={error:h,text:l})}}p?(n.next(new I({body:l,headers:o,status:s,statusText:i,url:u||void 0})),n.complete()):n.error(new U({error:l,headers:o,status:s,statusText:i,url:u||void 0}))},p=function(e){var t=new U({error:e,status:r.status||0,statusText:r.statusText||"Unknown Error"});n.error(t)},c=!1,h=function(t){c||(n.next(a()),c=!0);var o={type:A.DownloadProgress,loaded:t.loaded};t.lengthComputable&&(o.total=t.total),"text"===e.responseType&&r.responseText&&(o.partialText=r.responseText),n.next(o)},d=function(e){var t={type:A.UploadProgress,loaded:e.loaded};e.lengthComputable&&(t.total=e.total),n.next(t)};return r.addEventListener("load",l),r.addEventListener("error",p),e.reportProgress&&(r.addEventListener("progress",h),null!==i&&r.upload&&r.upload.addEventListener("progress",d)),r.send(i),n.next({type:A.Sent}),function(){r.removeEventListener("error",p),r.removeEventListener("load",l),e.reportProgress&&(r.removeEventListener("progress",h),null!==i&&r.upload&&r.upload.removeEventListener("progress",d)),r.abort()}})},e}(),V=new r.o("XSRF_COOKIE_NAME"),W=new r.o("XSRF_HEADER_NAME"),_=function(){return function(){}}(),G=function(){function e(e,t,n){this.doc=e,this.platform=t,this.cookieName=n,this.lastCookieString="",this.lastToken=null,this.parseCount=0}return e.prototype.getToken=function(){if("server"===this.platform)return null;var e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=Object(u.r)(e,this.cookieName),this.lastCookieString=e),this.lastToken},e}(),Y=function(){function e(e,t){this.tokenService=e,this.headerName=t}return e.prototype.intercept=function(e,t){var n=e.url.toLowerCase();if("GET"===e.method||"HEAD"===e.method||n.startsWith("http://")||n.startsWith("https://"))return t.handle(e);var r=this.tokenService.getToken();return null===r||e.headers.has(this.headerName)||(e=e.clone({headers:e.headers.set(this.headerName,r)})),t.handle(e)},e}(),$=function(){function e(e,t){this.backend=e,this.injector=t,this.chain=null}return e.prototype.handle=function(e){if(null===this.chain){var t=this.injector.get(q,[]);this.chain=t.reduceRight(function(e,t){return new H(e,t)},this.backend)}return this.chain.handle(e)},e}(),Q=function(){function e(){}var t;return t=e,e.disable=function(){return{ngModule:t,providers:[{provide:Y,useClass:B}]}},e.withOptions=function(e){return void 0===e&&(e={}),{ngModule:t,providers:[e.cookieName?{provide:V,useValue:e.cookieName}:[],e.headerName?{provide:W,useValue:e.headerName}:[]]}},e}(),Z=function(){return function(){}}(),ee=function(){function e(e){this.http=e}return e.prototype.fetchMovies=function(){return this.http.get(m.a.moviesURL).toPromise()},e.prototype.fetchMovieById=function(e){return y.b(this,void 0,void 0,function(){return y.e(this,function(t){switch(t.label){case 0:return[4,this.fetchMovies()];case 1:return[2,t.sent().find(function(t){return t.id===e})]}})})},e.ngInjectableDef=r.Q({factory:function(){return new e(r.T(M))},token:e,providedIn:"root"}),e}(),te=function(){function e(e){this.moviesService=e,this.movies=null}return e.prototype.ngOnInit=function(){this.getMovies()},e.prototype.getMovies=function(){return y.b(this,void 0,void 0,function(){var e;return y.e(this,function(t){switch(t.label){case 0:return e=this,[4,this.moviesService.fetchMovies()];case 1:return e.movies=t.sent(),[2]}})})},e}(),ne=r.kb({encapsulation:0,styles:[[""]],data:{}});function re(e){return r.wb(0,[(e()(),r.mb(0,0,null,null,1,"p",[],null,null,null,null,null)),(e()(),r.vb(-1,null,["Videos:"])),(e()(),r.mb(2,0,null,null,1,"app-video-list",[],null,null,null,f,h)),r.lb(3,114688,null,0,c,[],{movies:[0,"movies"]},null)],function(e,t){e(t,3,0,t.component.movies)},null)}function oe(e){return r.wb(0,[(e()(),r.mb(0,0,null,null,1,"app-page-video-list",[],null,null,null,re,ne)),r.lb(1,114688,null,0,te,[ee],null,null)],function(e,t){e(t,1,0)},null)}var se=r.ib("app-page-video-list",te,oe,{},{},[]),ie=function(){function e(e,t){this.route=e,this.movieService=t}return e.prototype.ngOnInit=function(){this.movieId=this.route.snapshot.params.id,this.getMovie(this.movieId)},e.prototype.getMovie=function(e){return y.b(this,void 0,void 0,function(){var t;return y.e(this,function(n){switch(n.label){case 0:return t=this,[4,this.movieService.fetchMovieById(e)];case 1:return t.movie=n.sent(),[2]}})})},e}(),ue=r.kb({encapsulation:0,styles:[[""]],data:{}});function ae(e){return r.wb(0,[(e()(),r.mb(0,0,null,null,6,"div",[["class","card"]],null,null,null,null,null)),(e()(),r.mb(1,0,null,null,0,"img",[["class","card-img-top"]],[[8,"src",4]],null,null,null,null)),(e()(),r.mb(2,0,null,null,4,"div",[["class","card-body"]],null,null,null,null,null)),(e()(),r.mb(3,0,null,null,1,"h5",[["class","card-title"]],null,null,null,null,null)),(e()(),r.vb(4,null,["",""])),(e()(),r.mb(5,0,null,null,1,"p",[["class","card-text"]],null,null,null,null,null)),(e()(),r.vb(6,null,["",""]))],null,function(e,t){var n=t.component;e(t,1,0,n.movie.imageUrl),e(t,4,0,n.movie.title),e(t,6,0,n.movie.description)})}function le(e){return r.wb(0,[(e()(),r.db(16777216,null,null,1,null,ae)),r.lb(1,16384,null,0,u.i,[r.M,r.J],{ngIf:[0,"ngIf"]},null)],function(e,t){e(t,1,0,t.component.movie)},null)}function pe(e){return r.wb(0,[(e()(),r.mb(0,0,null,null,1,"app-page-video-profile",[],null,null,null,le,ue)),r.lb(1,114688,null,0,ie,[i.a,ee],null,null)],function(e,t){e(t,1,0)},null)}var ce=r.ib("app-page-video-profile",ie,pe,{},{},[]),he=function(){return function(){}}();n.d(t,"LogicModuleNgFactory",function(){return de});var de=r.jb(o,[],function(e){return r.rb([r.sb(512,r.j,r.Y,[[8,[s.a,se,ce]],[3,r.j],r.w]),r.sb(4608,u.k,u.j,[r.t,[2,u.q]]),r.sb(4608,_,G,[u.c,r.A,V]),r.sb(4608,Y,Y,[_,W]),r.sb(5120,q,function(e){return[e]},[Y]),r.sb(4608,J,J,[]),r.sb(6144,K,null,[J]),r.sb(4608,X,X,[K]),r.sb(6144,k,null,[X]),r.sb(4608,O,$,[k,r.p]),r.sb(4608,M,M,[O]),r.sb(4608,ee,ee,[M]),r.sb(1073742336,u.b,u.b,[]),r.sb(1073742336,i.m,i.m,[[2,i.s],[2,i.k]]),r.sb(1073742336,he,he,[]),r.sb(1073742336,Q,Q,[]),r.sb(1073742336,Z,Z,[]),r.sb(1073742336,o,o,[]),r.sb(1024,i.i,function(){return[[{path:"videoList",component:te},{path:":id",component:ie}]]},[]),r.sb(256,V,"XSRF-TOKEN",[]),r.sb(256,W,"X-XSRF-TOKEN",[])])})}}]);