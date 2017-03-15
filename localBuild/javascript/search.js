<!doctype html>
<html>
<head>
    <meta content="IE=edge" http-equiv="X-UA-Compatible">
<meta charset="utf-8">
<meta name="theme-color" content="#56aac6">
<meta content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" name="viewport">
<link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="Developer Center Search">


<!-- Use title if it's in the page YAML frontmatter -->
<title>PureCloud Developer Center | Genesys</title>
<meta property="og:title" content="PureCloud Developer Center | Genesys">

<script type="text/javascript">
window.NREUM||(NREUM={}),__nr_require=function(t,e,n){function r(n){if(!e[n]){var o=e[n]={exports:{}};t[n][0].call(o.exports,function(e){var o=t[n][1][e];return r(o||e)},o,o.exports)}return e[n].exports}if("function"==typeof __nr_require)return __nr_require;for(var o=0;o<n.length;o++)r(n[o]);return r}({1:[function(t,e,n){function r(t){try{c.console&&console.log(t)}catch(e){}}var o,i=t("ee"),a=t(15),c={};try{o=localStorage.getItem("__nr_flags").split(","),console&&"function"==typeof console.log&&(c.console=!0,o.indexOf("dev")!==-1&&(c.dev=!0),o.indexOf("nr_dev")!==-1&&(c.nrDev=!0))}catch(s){}c.nrDev&&i.on("internal-error",function(t){r(t.stack)}),c.dev&&i.on("fn-err",function(t,e,n){r(n.stack)}),c.dev&&(r("NR AGENT IN DEVELOPMENT MODE"),r("flags: "+a(c,function(t,e){return t}).join(", ")))},{}],2:[function(t,e,n){function r(t,e,n,r,o){try{d?d-=1:i("err",[o||new UncaughtException(t,e,n)])}catch(c){try{i("ierr",[c,(new Date).getTime(),!0])}catch(s){}}return"function"==typeof f&&f.apply(this,a(arguments))}function UncaughtException(t,e,n){this.message=t||"Uncaught error with no additional information",this.sourceURL=e,this.line=n}function o(t){i("err",[t,(new Date).getTime()])}var i=t("handle"),a=t(16),c=t("ee"),s=t("loader"),f=window.onerror,u=!1,d=0;s.features.err=!0,t(1),window.onerror=r;try{throw new Error}catch(l){"stack"in l&&(t(8),t(7),"addEventListener"in window&&t(5),s.xhrWrappable&&t(9),u=!0)}c.on("fn-start",function(t,e,n){u&&(d+=1)}),c.on("fn-err",function(t,e,n){u&&(this.thrown=!0,o(n))}),c.on("fn-end",function(){u&&!this.thrown&&d>0&&(d-=1)}),c.on("internal-error",function(t){i("ierr",[t,(new Date).getTime(),!0])})},{}],3:[function(t,e,n){t("loader").features.ins=!0},{}],4:[function(t,e,n){function r(t){}if(window.performance&&window.performance.timing&&window.performance.getEntriesByType){var o=t("ee"),i=t("handle"),a=t(8),c=t(7),s="learResourceTimings",f="addEventListener",u="resourcetimingbufferfull",d="bstResource",l="resource",p="-start",h="-end",m="fn"+p,w="fn"+h,v="bstTimer",y="pushState";t("loader").features.stn=!0,t(6);var g=NREUM.o.EV;o.on(m,function(t,e){var n=t[0];n instanceof g&&(this.bstStart=Date.now())}),o.on(w,function(t,e){var n=t[0];n instanceof g&&i("bst",[n,e,this.bstStart,Date.now()])}),a.on(m,function(t,e,n){this.bstStart=Date.now(),this.bstType=n}),a.on(w,function(t,e){i(v,[e,this.bstStart,Date.now(),this.bstType])}),c.on(m,function(){this.bstStart=Date.now()}),c.on(w,function(t,e){i(v,[e,this.bstStart,Date.now(),"requestAnimationFrame"])}),o.on(y+p,function(t){this.time=Date.now(),this.startPath=location.pathname+location.hash}),o.on(y+h,function(t){i("bstHist",[location.pathname+location.hash,this.startPath,this.time])}),f in window.performance&&(window.performance["c"+s]?window.performance[f](u,function(t){i(d,[window.performance.getEntriesByType(l)]),window.performance["c"+s]()},!1):window.performance[f]("webkit"+u,function(t){i(d,[window.performance.getEntriesByType(l)]),window.performance["webkitC"+s]()},!1)),document[f]("scroll",r,{passive:!0}),document[f]("keypress",r,!1),document[f]("click",r,!1)}},{}],5:[function(t,e,n){function r(t){for(var e=t;e&&!e.hasOwnProperty(u);)e=Object.getPrototypeOf(e);e&&o(e)}function o(t){c.inPlace(t,[u,d],"-",i)}function i(t,e){return t[1]}var a=t("ee").get("events"),c=t(17)(a,!0),s=t("gos"),f=XMLHttpRequest,u="addEventListener",d="removeEventListener";e.exports=a,"getPrototypeOf"in Object?(r(document),r(window),r(f.prototype)):f.prototype.hasOwnProperty(u)&&(o(window),o(f.prototype)),a.on(u+"-start",function(t,e){var n=t[1],r=s(n,"nr@wrapped",function(){function t(){if("function"==typeof n.handleEvent)return n.handleEvent.apply(n,arguments)}var e={object:t,"function":n}[typeof n];return e?c(e,"fn-",null,e.name||"anonymous"):n});this.wrapped=t[1]=r}),a.on(d+"-start",function(t){t[1]=this.wrapped||t[1]})},{}],6:[function(t,e,n){var r=t("ee").get("history"),o=t(17)(r);e.exports=r,o.inPlace(window.history,["pushState","replaceState"],"-")},{}],7:[function(t,e,n){var r=t("ee").get("raf"),o=t(17)(r),i="equestAnimationFrame";e.exports=r,o.inPlace(window,["r"+i,"mozR"+i,"webkitR"+i,"msR"+i],"raf-"),r.on("raf-start",function(t){t[0]=o(t[0],"fn-")})},{}],8:[function(t,e,n){function r(t,e,n){t[0]=a(t[0],"fn-",null,n)}function o(t,e,n){this.method=n,this.timerDuration="number"==typeof t[1]?t[1]:0,t[0]=a(t[0],"fn-",this,n)}var i=t("ee").get("timer"),a=t(17)(i),c="setTimeout",s="setInterval",f="clearTimeout",u="-start",d="-";e.exports=i,a.inPlace(window,[c,"setImmediate"],c+d),a.inPlace(window,[s],s+d),a.inPlace(window,[f,"clearImmediate"],f+d),i.on(s+u,r),i.on(c+u,o)},{}],9:[function(t,e,n){function r(t,e){d.inPlace(e,["onreadystatechange"],"fn-",c)}function o(){var t=this,e=u.context(t);t.readyState>3&&!e.resolved&&(e.resolved=!0,u.emit("xhr-resolved",[],t)),d.inPlace(t,w,"fn-",c)}function i(t){v.push(t),h&&(g=-g,b.data=g)}function a(){for(var t=0;t<v.length;t++)r([],v[t]);v.length&&(v=[])}function c(t,e){return e}function s(t,e){for(var n in t)e[n]=t[n];return e}t(5);var f=t("ee"),u=f.get("xhr"),d=t(17)(u),l=NREUM.o,p=l.XHR,h=l.MO,m="readystatechange",w=["onload","onerror","onabort","onloadstart","onloadend","onprogress","ontimeout"],v=[];e.exports=u;var y=window.XMLHttpRequest=function(t){var e=new p(t);try{u.emit("new-xhr",[e],e),e.addEventListener(m,o,!1)}catch(n){try{u.emit("internal-error",[n])}catch(r){}}return e};if(s(p,y),y.prototype=p.prototype,d.inPlace(y.prototype,["open","send"],"-xhr-",c),u.on("send-xhr-start",function(t,e){r(t,e),i(e)}),u.on("open-xhr-start",r),h){var g=1,b=document.createTextNode(g);new h(a).observe(b,{characterData:!0})}else f.on("fn-end",function(t){t[0]&&t[0].type===m||a()})},{}],10:[function(t,e,n){function r(t){var e=this.params,n=this.metrics;if(!this.ended){this.ended=!0;for(var r=0;r<d;r++)t.removeEventListener(u[r],this.listener,!1);if(!e.aborted){if(n.duration=(new Date).getTime()-this.startTime,4===t.readyState){e.status=t.status;var i=o(t,this.lastSize);if(i&&(n.rxSize=i),this.sameOrigin){var a=t.getResponseHeader("X-NewRelic-App-Data");a&&(e.cat=a.split(", ").pop())}}else e.status=0;n.cbTime=this.cbTime,f.emit("xhr-done",[t],t),c("xhr",[e,n,this.startTime])}}}function o(t,e){var n=t.responseType;if("json"===n&&null!==e)return e;var r="arraybuffer"===n||"blob"===n||"json"===n?t.response:t.responseText;return h(r)}function i(t,e){var n=s(e),r=t.params;r.host=n.hostname+":"+n.port,r.pathname=n.pathname,t.sameOrigin=n.sameOrigin}var a=t("loader");if(a.xhrWrappable){var c=t("handle"),s=t(11),f=t("ee"),u=["load","error","abort","timeout"],d=u.length,l=t("id"),p=t(14),h=t(13),m=window.XMLHttpRequest;a.features.xhr=!0,t(9),f.on("new-xhr",function(t){var e=this;e.totalCbs=0,e.called=0,e.cbTime=0,e.end=r,e.ended=!1,e.xhrGuids={},e.lastSize=null,p&&(p>34||p<10)||window.opera||t.addEventListener("progress",function(t){e.lastSize=t.loaded},!1)}),f.on("open-xhr-start",function(t){this.params={method:t[0]},i(this,t[1]),this.metrics={}}),f.on("open-xhr-end",function(t,e){"loader_config"in NREUM&&"xpid"in NREUM.loader_config&&this.sameOrigin&&e.setRequestHeader("X-NewRelic-ID",NREUM.loader_config.xpid)}),f.on("send-xhr-start",function(t,e){var n=this.metrics,r=t[0],o=this;if(n&&r){var i=h(r);i&&(n.txSize=i)}this.startTime=(new Date).getTime(),this.listener=function(t){try{"abort"===t.type&&(o.params.aborted=!0),("load"!==t.type||o.called===o.totalCbs&&(o.onloadCalled||"function"!=typeof e.onload))&&o.end(e)}catch(n){try{f.emit("internal-error",[n])}catch(r){}}};for(var a=0;a<d;a++)e.addEventListener(u[a],this.listener,!1)}),f.on("xhr-cb-time",function(t,e,n){this.cbTime+=t,e?this.onloadCalled=!0:this.called+=1,this.called!==this.totalCbs||!this.onloadCalled&&"function"==typeof n.onload||this.end(n)}),f.on("xhr-load-added",function(t,e){var n=""+l(t)+!!e;this.xhrGuids&&!this.xhrGuids[n]&&(this.xhrGuids[n]=!0,this.totalCbs+=1)}),f.on("xhr-load-removed",function(t,e){var n=""+l(t)+!!e;this.xhrGuids&&this.xhrGuids[n]&&(delete this.xhrGuids[n],this.totalCbs-=1)}),f.on("addEventListener-end",function(t,e){e instanceof m&&"load"===t[0]&&f.emit("xhr-load-added",[t[1],t[2]],e)}),f.on("removeEventListener-end",function(t,e){e instanceof m&&"load"===t[0]&&f.emit("xhr-load-removed",[t[1],t[2]],e)}),f.on("fn-start",function(t,e,n){e instanceof m&&("onload"===n&&(this.onload=!0),("load"===(t[0]&&t[0].type)||this.onload)&&(this.xhrCbStart=(new Date).getTime()))}),f.on("fn-end",function(t,e){this.xhrCbStart&&f.emit("xhr-cb-time",[(new Date).getTime()-this.xhrCbStart,this.onload,e],e)})}},{}],11:[function(t,e,n){e.exports=function(t){var e=document.createElement("a"),n=window.location,r={};e.href=t,r.port=e.port;var o=e.href.split("://");!r.port&&o[1]&&(r.port=o[1].split("/")[0].split("@").pop().split(":")[1]),r.port&&"0"!==r.port||(r.port="https"===o[0]?"443":"80"),r.hostname=e.hostname||n.hostname,r.pathname=e.pathname,r.protocol=o[0],"/"!==r.pathname.charAt(0)&&(r.pathname="/"+r.pathname);var i=!e.protocol||":"===e.protocol||e.protocol===n.protocol,a=e.hostname===document.domain&&e.port===n.port;return r.sameOrigin=i&&(!e.hostname||a),r}},{}],12:[function(t,e,n){function r(){}function o(t,e,n){return function(){return i(t,[(new Date).getTime()].concat(c(arguments)),e?null:this,n),e?void 0:this}}var i=t("handle"),a=t(15),c=t(16),s=t("ee").get("tracer"),f=NREUM;"undefined"==typeof window.newrelic&&(newrelic=f);var u=["setPageViewName","setCustomAttribute","setErrorHandler","finished","addToTrace","inlineHit","addRelease"],d="api-",l=d+"ixn-";a(u,function(t,e){f[e]=o(d+e,!0,"api")}),f.addPageAction=o(d+"addPageAction",!0),f.setCurrentRouteName=o(d+"routeName",!0),e.exports=newrelic,f.interaction=function(){return(new r).get()};var p=r.prototype={createTracer:function(t,e){var n={},r=this,o="function"==typeof e;return i(l+"tracer",[Date.now(),t,n],r),function(){if(s.emit((o?"":"no-")+"fn-start",[Date.now(),r,o],n),o)try{return e.apply(this,arguments)}finally{s.emit("fn-end",[Date.now()],n)}}}};a("setName,setAttribute,save,ignore,onEnd,getContext,end,get".split(","),function(t,e){p[e]=o(l+e)}),newrelic.noticeError=function(t){"string"==typeof t&&(t=new Error(t)),i("err",[t,(new Date).getTime()])}},{}],13:[function(t,e,n){e.exports=function(t){if("string"==typeof t&&t.length)return t.length;if("object"==typeof t){if("undefined"!=typeof ArrayBuffer&&t instanceof ArrayBuffer&&t.byteLength)return t.byteLength;if("undefined"!=typeof Blob&&t instanceof Blob&&t.size)return t.size;if(!("undefined"!=typeof FormData&&t instanceof FormData))try{return JSON.stringify(t).length}catch(e){return}}}},{}],14:[function(t,e,n){var r=0,o=navigator.userAgent.match(/Firefox[\/\s](\d+\.\d+)/);o&&(r=+o[1]),e.exports=r},{}],15:[function(t,e,n){function r(t,e){var n=[],r="",i=0;for(r in t)o.call(t,r)&&(n[i]=e(r,t[r]),i+=1);return n}var o=Object.prototype.hasOwnProperty;e.exports=r},{}],16:[function(t,e,n){function r(t,e,n){e||(e=0),"undefined"==typeof n&&(n=t?t.length:0);for(var r=-1,o=n-e||0,i=Array(o<0?0:o);++r<o;)i[r]=t[e+r];return i}e.exports=r},{}],17:[function(t,e,n){function r(t){return!(t&&t instanceof Function&&t.apply&&!t[a])}var o=t("ee"),i=t(16),a="nr@original",c=Object.prototype.hasOwnProperty,s=!1;e.exports=function(t,e){function n(t,e,n,o){function nrWrapper(){var r,a,c,s;try{a=this,r=i(arguments),c="function"==typeof n?n(r,a):n||{}}catch(f){l([f,"",[r,a,o],c])}u(e+"start",[r,a,o],c);try{return s=t.apply(a,r)}catch(d){throw u(e+"err",[r,a,d],c),d}finally{u(e+"end",[r,a,s],c)}}return r(t)?t:(e||(e=""),nrWrapper[a]=t,d(t,nrWrapper),nrWrapper)}function f(t,e,o,i){o||(o="");var a,c,s,f="-"===o.charAt(0);for(s=0;s<e.length;s++)c=e[s],a=t[c],r(a)||(t[c]=n(a,f?c+o:o,i,c))}function u(n,r,o){if(!s||e){var i=s;s=!0;try{t.emit(n,r,o)}catch(a){l([a,n,r,o])}s=i}}function d(t,e){if(Object.defineProperty&&Object.keys)try{var n=Object.keys(t);return n.forEach(function(n){Object.defineProperty(e,n,{get:function(){return t[n]},set:function(e){return t[n]=e,e}})}),e}catch(r){l([r])}for(var o in t)c.call(t,o)&&(e[o]=t[o]);return e}function l(e){try{t.emit("internal-error",e)}catch(n){}}return t||(t=o),n.inPlace=f,n.flag=a,n}},{}],ee:[function(t,e,n){function r(){}function o(t){function e(t){return t&&t instanceof r?t:t?s(t,c,i):i()}function n(n,r,o){if(!l.aborted){t&&t(n,r,o);for(var i=e(o),a=h(n),c=a.length,s=0;s<c;s++)a[s].apply(i,r);var f=u[y[n]];return f&&f.push([g,n,r,i]),i}}function p(t,e){v[t]=h(t).concat(e)}function h(t){return v[t]||[]}function m(t){return d[t]=d[t]||o(n)}function w(t,e){f(t,function(t,n){e=e||"feature",y[n]=e,e in u||(u[e]=[])})}var v={},y={},g={on:p,emit:n,get:m,listeners:h,context:e,buffer:w,abort:a,aborted:!1};return g}function i(){return new r}function a(){(u.api||u.feature)&&(l.aborted=!0,u=l.backlog={})}var c="nr@context",s=t("gos"),f=t(15),u={},d={},l=e.exports=o();l.backlog=u},{}],gos:[function(t,e,n){function r(t,e,n){if(o.call(t,e))return t[e];var r=n();if(Object.defineProperty&&Object.keys)try{return Object.defineProperty(t,e,{value:r,writable:!0,enumerable:!1}),r}catch(i){}return t[e]=r,r}var o=Object.prototype.hasOwnProperty;e.exports=r},{}],handle:[function(t,e,n){function r(t,e,n,r){o.buffer([t],r),o.emit(t,e,n)}var o=t("ee").get("handle");e.exports=r,r.ee=o},{}],id:[function(t,e,n){function r(t){var e=typeof t;return!t||"object"!==e&&"function"!==e?-1:t===window?0:a(t,i,function(){return o++})}var o=1,i="nr@id",a=t("gos");e.exports=r},{}],loader:[function(t,e,n){function r(){if(!b++){var t=g.info=NREUM.info,e=d.getElementsByTagName("script")[0];if(setTimeout(f.abort,3e4),!(t&&t.licenseKey&&t.applicationID&&e))return f.abort();s(v,function(e,n){t[e]||(t[e]=n)}),c("mark",["onload",a()],null,"api");var n=d.createElement("script");n.src="https://"+t.agent,e.parentNode.insertBefore(n,e)}}function o(){"complete"===d.readyState&&i()}function i(){c("mark",["domContent",a()],null,"api")}function a(){return(new Date).getTime()}var c=t("handle"),s=t(15),f=t("ee"),u=window,d=u.document,l="addEventListener",p="attachEvent",h=u.XMLHttpRequest,m=h&&h.prototype;NREUM.o={ST:setTimeout,CT:clearTimeout,XHR:h,REQ:u.Request,EV:u.Event,PR:u.Promise,MO:u.MutationObserver},t(12);var w=""+location,v={beacon:"bam.nr-data.net",errorBeacon:"bam.nr-data.net",agent:"js-agent.newrelic.com/nr-1016.min.js"},y=h&&m&&m[l]&&!/CriOS/.test(navigator.userAgent),g=e.exports={offset:a(),origin:w,features:{},xhrWrappable:y};d[l]?(d[l]("DOMContentLoaded",i,!1),u[l]("load",r,!1)):(d[p]("onreadystatechange",o),u[p]("onload",r)),c("mark",["firstbyte",a()],null,"api");var b=0},{}]},{},["loader",2,10,4,3]);
;NREUM.info={beacon:"bam.nr-data.net",errorBeacon:"bam.nr-data.net",licenseKey:"7a5b0de38e",applicationID:"43232289",sa:1}
</script>


<link href='//fonts.googleapis.com/css?family=Lato:300,400' rel='stylesheet' async type='text/css'>
<script src="/vendor/assets/bower/jquery/dist/jquery.min.js"></script>
<script src="/vendor/assets/bower/lunr.js/lunr.min.js" async defer></script>
<script src="/vendor/assets/bower/clipboard/dist/clipboard.min.js" async defer></script>
<script src="/stylesheets/lib/bootstrap-3.1.1/dist/js/bootstrap.min.js" async ></script>

<link href="/stylesheets/styles.css" rel="stylesheet" />
<script src="/javascript/collapse.js" async="true" defer="defer"></script>
<script src="/javascript/transition.js" async="true" defer="defer"></script>
<script src="/javascript/swagger.js" async="true" defer="defer"></script>
<script src="/javascript/modal.js" async="true" defer="defer"></script>
<script src="/javascript/analytics.js" async="true" defer="defer"></script>
<script src="/javascript/forms.js" async="true" defer="defer"></script>
<script src="/javascript/clipboard.js" async="true" defer="defer"></script>
<script src="/javascript/search.js" async="true" defer="defer"></script>
<script src="/javascript/tab.js" async="true" defer="defer"></script>

<link rel="stylesheet" href="https://cdn.rawgit.com/konpa/devicon/master/devicon.min.css">

</head>

<body class = 'single single-resources blog'>
    <div class="whiteheader">
    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <header class="branding">
                    <h1>
                        <a href="/" title="PureCloud Developer Center">
                        <span class="logo">PureCloud Developer Center</span>
                        <span class="site-name">Developer Center</span></a>
                    </h1>
                </header>
            </div>
            <div class="col-md-8">
                <nav>
                    <ul class="nav navbar-nav">
                        
<li class="dropdown ">
    <a id="headerMenugettingstarted" href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> Getting Started <span class="caret"></span> </a>
    <ul class="dropdown-menu" aria-labelledby="headerMenugettingstarted">
<li>

                <a href="/gettingstarted/">Getting Started</a>


                <a href="/api/">APIs</a>


                <a href="/gettingstarted/developer-org-setup.html">Developer Org Setup</a>

            </li>

    </ul>
</li>



<li class="dropdown ">
    <a id="headerMenuAPIs" href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> APIs <span class="caret"></span> </a>
    <ul class="dropdown-menu" aria-labelledby="headerMenuAPIs">
<li>

                <a href="/api/rest/">Platform</a>


                <a href="/api/webchat/">Web Chat</a>


                <a href="/api/webhooks/">Web Hooks</a>


                <a href="/api/webservice-datadip/">Web Service Data Dip</a>


                <a href="/api/cobrowse/">Co-browse</a>


                <a href="/api/screenshare/">Screen share</a>

            </li>

    </ul>
</li>



<li class="dropdown ">
    <a id="headerMenuResources" href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> Resources <span class="caret"></span> </a>
    <ul class="dropdown-menu" aria-labelledby="headerMenuResources">
<li>

                <a href="/developer-tools/">Developer Tools</a>


                <a href="/api/tutorials.html">Tutorials</a>


                <a href="/api/rest/client-libraries/">Platform API SDKs</a>


                <a href="/opensource/">Open Source</a>


                <a href="/api/rest/authorization/">Authorization</a>


                <a href="/video/">Videos</a>

            </li>

    </ul>
</li>



<li>
    <a class=" pull-left" href="/forum/">Forum </a>

</li>



                    </ul>
                </nav>
            </div>
        </div>
    </div>
</div>
<div class="home-intro">

    <div class="branding-strip">
        <div class="container">
            <div class="row">
                <div class="col-md-3 col-sm-12 col-xs-12 col-md-offset-1">
                    <div class="header-banner headerTitle">
                        <h2 class="notranslate">
                            Developer Center
                        </h2>
                    </div>
                </div>
                <div class="col-md-4 col-sm-12 col-xs-12" style="padding-right: 0;">
                    <div class="help-search">
                        <form class="help-search-form" role="form" autocomplete="off">
                            <div class="input-group">
                                <div class="input-group-addon">
                                    <i class="fa fa-search"></i>
                                </div>
                                <input id='search' type="text" class="search-input" autocomplete="off" placeholder="Search the Developer Center…">
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-md-4 col-sm-12 col-xs-12">
                    <div class="pull-right">
                        <!--
<a href='http://interactions.wpengine.com/'>
    <img class="img-responsive" src='/images/reimagine-interactions-2016-dark-blue.png' />
</a>
-->

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="container container-padding-none">
    <div class="col-md-12">
        <ul class="breadcrumb">
            <li><a href="/"><i class="fa fa-home"></i> <span class="sr-only">Home</span></a></li>
            <li></li>
        </ul>
    </div>
</div>



    <section class='main-content'>
        <div class='container container-padding-none'>
            <div class='col-md-3 pull-right'>
                <aside class='sidebar'>

                    <h3>Posts by Tag</h3>
                    <a href="../tags/example.html" style="font-size: NaN%">example</a>
                </aside>
            </div>
            <div class='col-md-9'>
                
$(document).ready(function () {

    'use strict';
    var index, store;


    $('.help-search-form').submit(function(){
        window.location.search = "q=" + $('.search-input').val();
        event.preventDefault();
        return false;
    });

    // Set up search
    var searchJsonUrl = "/search.json";
    $.getJSON(searchJsonUrl, function (response) {

        function doSearch(query, resultdiv){
            // Search for it
            var result = index.search(query);
            // Output it
            if (result.length === 0) {
                // Hide results
                return false;
            } else {
                // Show results
                resultdiv.empty();
                var count = 0;
                for (var item in result) {
                    var ref = result[item].ref;
                    var page = response[ref];
                    var content = "";

                    var searchitem = '<li>'+
                        '<a href="' + page.url + '" >' +
                            '<div class="search-title">' + page.title + '</div>' +
                            '<div class="search-url">' + page.url + '</div>' +
                        '</a>' +
                        '</li>';
                    resultdiv.append(searchitem);

                    count++;
                    if(count == 7){
                        return true;
                    }
                }
                return true;
            }

        }

        index = lunr(function () {
           this.field('title', {boost: 10})
           this.field('content')
           this.ref('id')
         })

         for(var i in response){
             var page = response[i];
             page.id = i;
             index.add(page);
         }

         if(window.location.search.indexOf("?q=") ==0){
             var resultdiv = $('#modal-search-results');

             var searchValue = decodeURIComponent(window.location.search.substring(3)).replace('+',' ');

             $('.modal-search-input').val(searchValue);

             $("#searchModel").modal();
             doSearch(searchValue, resultdiv) ? resultdiv.show() : resultdiv.hide();
             resultdiv.show()
         }

        // Handle search
        $('.search-input').on('keyup', function () {
            var resultdiv = $('.search-results-popup');
            var query = $(this).val();
            doSearch(query, resultdiv) ? resultdiv.show() : resultdiv.hide();
        });

        var offset = $('.search-input').offset();
        var height = $('.search-input').height();
        var width = $('.search-input').width() + 15;

        if(offset == null){
            return;
        }

        var top = offset.top + height + 12 + "px";

        $('#search-results').css({
            "position" : "absolute",
            "left"     : offset.left - 5 + "px",
            "top"      : top ,
            "width" : width
        });

        $('.search-results-popup').hide();
    });
});


            </div>

            <br class="clear">
        </div>
    </section>
    
<!-- Feedback Modal -->
<div class="modal fade" id="feedbackModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">Feedback</h4>
      </div>
      <div class="modal-body">
         <form class='lambdaform' data-url='/serverV1/feedback'>
             <div class="alert alert-danger" role="alert" style='display:none'>
                 An error occurred submitting feedback.
             </div>
             <input name="type" type="hidden" value='FEEDBACK'>
             <label>
               Was this page helpful?
             </label>
             <div class="form-group">
               <label class="radio-inline">
                  <input type="radio" name="wasHelpful" value="Yes"> Yes
                </label>
                <label class="radio-inline">
                  <input type="radio" name="wasHelpful" value="No"> No
                </label>
            </div>
              <div class="form-group">
                <label for="feedbackEmail">Email address</label>
                <input type="email" name="email" class="form-control" id="feedbackEmail" placeholder="Email">
              </div>
              <div class="form-group">
                <label for="feedback">Feedback</label>
                <textarea  name='feedback' class="form-control" rows="3" id='feedback' required></textarea>
              </div>
              <input id='feedbackUrl' type='hidden' name='page' value='http://www.inin.com'/>

              <input type='submit' value='Submit' class='btn btn-primary' />
          </form>
      </div>

    </div>
  </div>
</div>

<div class="modal fade" id="searchModel" tabindex="-1" role="dialog" aria-labelledby="searchModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="searchModalLabel">
            <form>
              <input type="text" class="modal-search-input" placeholder="Search the Developer Center…">
          </form>
        </h4>
      </div>
      <div class="modal-body">
          <div class="search-results" style="display: block;"  id='modal-search-results'>

          </div>
      </div>

    </div>
  </div>
</div>

<div id='search-results' style='position: absolute; width: 507px; z-index: 999999;'>

    <div class="search-results search-results-popup" style="display: block;">

    </div>
</div>

<footer class="main-footer">
    <div class="container">
        <div class="row">
            <div class='col-md-2'>
                <a href="https://twitter.com/PureCloud_Dev" class="twitter-follow-button" data-show-count="false">Follow @PureCloud_Dev</a><script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

            </div>
            <div class="col-md-8">
                <a href="https://login.mypurecloud.com">PureCloud Login</a>
                <span class="divider">|</span>
                <a href="http://help.mypurecloud.com">Resource Center</a>
                <span class="divider">|</span>
                    <a href='#' data-toggle="modal" data-target="#feedbackModal">
                  Submit Feedback
                </a>

            </div>

            <div class='col-md-2'>
                <div id="google_translate_element"></div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-9">
                <p>PureCloud by Genesys&#8480; is a cloud communications, collaboration, and customer engagement platform that takes full advantage of the distributed nature of the cloud. PureCloud provides rapid deployment, industry-leading reliability, and unlimited scalability, to connect customers and employees in new, more efficient ways.</p>
            </div>
        </div>
    </div>
</footer>
<script type="text/javascript" src="https://help.mypurecloud.com/flyout/assets/js/dynamic-menu.js"></script>
<script>
$(function(){
	$('#feedbackUrl').val(window.location.href);
});
</script>
<script type="text/javascript">
function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'en', gaTrack: true, gaId: 'UA-73002812-1'}, 'google_translate_element');
}
</script><script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>


</body>
</html>