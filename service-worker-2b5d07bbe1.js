"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["build/css/backend/app-8d15d694a8.css","8d15d694a845fac72943b7f2e62103ad"],["build/css/fonts/RionaSans-Regular.woff2","d57575d5633d0a90ce74521fcfecd53a"],["build/css/fonts/Roboto-Bold.woff2","39b2c3031be6b4ea96e2e3e95d307814"],["build/css/fonts/Roboto-Regular.woff2","2751ee43015f9884c3642f103b7f70c9"],["build/css/fonts/fontawesome-webfont.woff2","e6cf7c6ec7c2d6f670ae9d762604cb0b"],["build/css/fonts/glyphicons-halflings-regular.woff2","448c34a56d699c29117adc64c43affeb"],["build/css/frontend/app-52f25c5255.css","52f25c5255b654a9dccfbc76885e0793"],["build/js/backend/app-b6426b852d.js","b6426b852dae19bdd157e8b883a9f4bc"],["build/js/frontend/app-0c81ca8d55.js","0c81ca8d55b916ed749db2b0c642a60b"],["build/js/frontend/vendor-d17ab1c6b5.js","d17ab1c6b54bc04f15a9b76ea36039cb"],["images/avatar.png","f41790e519919946d983e038a50cc6ba"],["images/banner_1536.png","dd6cdeae9f53a31ecf30ce09d19a0a4b"],["images/banner_2560.png","de1b0edef2db5cbaf33b61e1163c8fa1"],["images/banner_background.png","6f32587e3f56fa350043307fc1a2cb08"],["images/bg_banner.png","ed9c7aa3062ca1e13a71962d3185f13a"],["images/bg_circuitry.png","3c167ad432bcf79ea30538846e05bd5f"],["images/bg_circuitry_small.png","4e02360cb641f01e4bd788ef83ee45dd"],["images/bg_platform.png","f4f51d94968cfda512a837619f9f1a8b"],["images/boxed-bg.jpg","7799dece2c79854f63f09e7dfa528b88"],["images/btn_QQ.png","b844c6e8b27b38dec2f0567cc2daa3e2"],["images/btn_facebook.png","9bd597be67d6db254d11117b4eb72b5a"],["images/btn_google.png","a1743ac5db655b3ea5c74ec75582d1b2"],["images/btn_linkedin.png","314a89bcf4d9bb7b9e9ac4919388ad78"],["images/btn_mol.png","d779609c24ea9737e5d82d5dc24da728"],["images/btn_twitter.png","08c61720ac5a99aa0daac3632049aa3a"],["images/btn_wechat.png","364692c1d8454664b2795ae0c357094f"],["images/btn_weibo.png","6ac3403deb1d532db317599f2841fae8"],["images/icon_circle_loading_animation.svg","80e54923fb0c7fc6c1fc41e6174cc3ee"],["images/icon_circle_loading_animation_blue.svg","f61157827c2d9fb6b568ea47b78598de"],["images/icon_docs.png","4f17a79a333782be908da9b30a6df90a"],["images/icon_download.png","e3f45bc60ca2a266d3027bd7f9bbf940"],["images/icon_faq-gold.png","eabfb6c825a0179721bd44b4438a0413"],["images/icon_faq.png","c4d6cb1c7bcdbfc48cf5009b65cdb95e"],["images/icon_forum.png","68dc705849fd64802ccff6449d7132ac"],["images/icon_forum_p.png","2270dd3029faca6bd714119b21b14636"],["images/icon_getStarted.png","49b3520412535600b90c6a10df042702"],["images/icon_resources.png","21ba1c69de313a104813f53fabdef34f"],["images/icon_resources_b.png","eccc87b74e3a0e8abd73c37f3142c2ca"],["images/img_architecture.png","ef44038bdca3029b7eb41dcf7ea65924"],["images/img_block_diagram_2511.png","433d4b7619fee3b8b2f5f858acb85a08"],["images/img_block_diagram_2523.png","076dd6ae7e681f4243264d7145bb1043"],["images/img_block_diagram_2533.png","b485f3854b486cfe57f2a073e7520cec"],["images/img_block_diagram_3333.png","5e8f17e48bd1c465c7e892d23f214405"],["images/img_block_diagram_5932.png","a4c01cfa227ac9f7304cbfd001877309"],["images/img_block_diagram_7681.png","a75a2049348e4556657ada7d4f3a3588"],["images/img_block_diagram_7682.png","411272f6f9748df542fdd9eb8cd9b077"],["images/img_block_diagram_7686.png","ee367d14bdec8b67449a201a32eeb022"],["images/img_block_diagram_7687.png","19a3dfe7df7fda347b7bed48bb3e45bc"],["images/img_block_diagram_7697.png","ead15778705fbb6b94a890c0480efd8c"],["images/img_breakout_7688.png","dfc5dcdf2591c3e5736483f945929873"],["images/img_breakout_arduino_7688duo.png","fd899828cc90ecefdb8f846a368064a2"],["images/img_breakout_grove_7688duo.png","38d03b7f10e489c76d0be2929397d55d"],["images/img_connectivity.png","41c1b8bb9c05bf4a45a7ccac217901f8"],["images/img_default.png","9fa2e04f51e8b6cc117a42bf82b31c98"],["images/img_default_blog.png","d4f69185ec802e637f7ada7c223b9e56"],["images/img_hdk_2502.png","8048aa25e63bea332329db52b51e6c3c"],["images/img_hdk_2523.png","3800ebf4520fb964659904a43c0e25d8"],["images/img_hdk_2523_front.png","a727585b931bd9a0585744d4e3b91e2e"],["images/img_hdk_7681.png","c4fe3b2b75a4b228c9a8bee88c0f09b3"],["images/img_hdk_7687.png","2358c4fcb33c85f64d1da0dc56a87289"],["images/img_hdk_7687_front.png","f54427067da84fa1e565c599a201998d"],["images/img_hdk_7688.png","351d0b076599f0d8071b26b428461ad5"],["images/img_hdk_7688_duo_get_started.png","2433900c0a9df71691c6e0b5600784c2"],["images/img_hdk_7688_get_started.png","124e1a539e058664b87fb5a795bc59aa"],["images/img_hdk_7688duo.png","d749ad297905763d66405b115e3b5e5c"],["images/img_hdk_7697.png","455e5c51fb31f54654c0b05e87bae0b6"],["images/img_hdk_7697_arduino.png","6bcb14663c20f746a3b5e3d2a723086d"],["images/img_hdk_7697_blockly.png","ff3f7f5cac56a4e115868ecef540efec"],["images/img_hdk_7697_front.png","51daf9368f965441700c6da2133efa49"],["images/img_hdk_7697_gcc.png","3da545c291ccd660dc6ca5f057107483"],["images/img_hdk_aws_starter.png","344c7be96cb41036889498bffe0e98a3"],["images/img_hdk_one.png","51dfa80f6ad6c9a63e3d19b5d14d7f72"],["images/img_hdk_x20.png","54591516941614a5459064f5115d9703"],["images/img_linkit.png","823e9ebfb9463896b678373b09a667d5"],["images/img_linkit_7697_pinout.png","5c5b03df0dc8159fb999f15646202909"],["images/img_linkit_one.png","81f828f01dfc4f99daed3ee673d4b4a9"],["images/img_mcs.png","1e3202e1e5dcfe367aa12819f0a8cfb1"],["images/img_mcs_banner.png","7980304b01e39c13bba7b462728af920"],["images/img_mcs_devices.png","b0e246ad50e688e98ff37abd023b2ed3"],["images/img_mcs_logo.png","cddd1d2ac2d23e2616c39e7c355009dd"],["images/img_mcs_work.png","3eda73064bfb3b701f0ea1152633e602"],["images/img_module_2502.png","302618a91557b510a09a9c35a8073bb5"],["images/img_module_7681.png","7ce8036955e48bbc5425454a4743ba7d"],["images/img_module_ai7687h.jpg","f73e11d45446ad1eb79e0d13a437ae13"],["images/img_module_ai7688h.jpg","58df6ad5990758f80950bdfd976927c6"],["images/img_module_ai7697h.jpg","66299527cb7f688e847db5c7ef82bd6b"],["images/img_module_pt7687.png","0c8810e487a640b3bf5ac9ef76b7d8d2"],["images/img_module_pt7697.png","d68237c0eb5bd4fab226ad9168831912"],["images/img_module_sac_7687.png","c189c8c91450be11820211d361e513eb"],["images/img_module_wrtnode7.png","df104f8499493962af84092be480f63a"],["images/img_overview_2502.png","78a5e3b7f847c13b7cab802af4373608"],["images/img_platform_architecture_diagram.png","75e1dd07422c9ff2df1f306dd380f157"],["images/img_rtos.png","0b431d3b5897f4e465d8a56d94c5f161"],["images/img_sdk_architecture.png","f2411a28ed78020a082abdb1fef25148"],["images/img_slogan.png","69460a091e6eb7319c25a1287ad0cab8"],["images/img_software.png","e0cd060373dff542d122474951bd9e48"],["images/labs_logo_320.png","041f050cab78ad5a094fcfb107a05357"],["images/logo_labs.png","590a4620fda131b8d39fd17bdf55b973"],["images/logo_labs_forum.png","60d7d23ffeaf39fd4f402323f52e1d19"],["images/partner_logo/logo_3g_elec.png","d3ca0b30238f274665ff8f53cf1f528f"],["images/partner_logo/logo_acsip.png","d32a8e1733cccee8f7624de37a71c56f"],["images/partner_logo/logo_archermind.png","75425f8c61dcd26b5302d687feaf64cf"],["images/partner_logo/logo_arrow.jpeg","4915fb4af4c6ab48770f11f608697c22"],["images/partner_logo/logo_broadlink.png","bcc1c91c959d2a753e24ba8d343579e9"],["images/partner_logo/logo_concox.png","736aa2ec8b05fab5a7e670a08b291425"],["images/partner_logo/logo_coretek.png","12b6b9310574fbff8405ba821346bd00"],["images/partner_logo/logo_eqc.png","1c62fe5c6c904b93e21a13fad299aa91"],["images/partner_logo/logo_gilbert_company.png","91f8ff3f0c1c8c49c0d96f5fd69061f9"],["images/partner_logo/logo_goertek.png","fcf59c4c57764b537c02366a0ac10efd"],["images/partner_logo/logo_gomtel.png","ee5813ef5a58bc11e9a814c4551a605b"],["images/partner_logo/logo_gotop.png","a5f6844cb27c5a6900f29ca827942a10"],["images/partner_logo/logo_jaway.png","ed5df0b85fbddfc979d12029d882dea0"],["images/partner_logo/logo_kaga_electronics.png","6062eabef41981ba1736916576d41369"],["images/partner_logo/logo_kct.png","4eb1e5689d7beea052764f74b724def2"],["images/partner_logo/logo_longcos.png","9c76ab52952a2b307cad3af1f81a08ec"],["images/partner_logo/logo_maxwell_guider.png","18fd3e325ee1e032a3e7d74bcc0dd113"],["images/partner_logo/logo_mobiletek.jpg","f0dcddf8cf7dc2b98ea6ad9c5882b9c5"],["images/partner_logo/logo_quectel.png","79daf83fe8934c9a822e19185ed9a86d"],["images/partner_logo/logo_sac.png","c865a9ca6ccaaa878eab65afec01209b"],["images/partner_logo/logo_seeed.jpg","9ed741c466cd304366aa782c4d238b3e"],["images/partner_logo/logo_simcom.png","9443be9ed7e146cae751ad5d72f264d5"],["images/partner_logo/logo_skylab.png","dfb66f339fd9d2d300f975a0ea846b08"],["images/partner_logo/logo_skylab_new.png","dabb1e203d57ad65ee34d29dd131de2c"],["images/partner_logo/logo_symmetry_electronics.png","e3a2476eb94a8f9a2db61ae0fe2ba5b1"],["images/partner_logo/logo_t2t_system.png","1d056fe544f0f3c6eb7206311a2dd8bb"],["images/partner_logo/logo_teltonika.PNG","bfb55ed1e2b58b9631e85ab9153bfde8"]],cacheName="sw-precache-v2-labs-web-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,n){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=n),t.toString()},createCacheKey=function(e,n,t,a){var r=new URL(e);return a&&r.toString().match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(n)+"="+encodeURIComponent(t)),r.toString()},isPathWhitelisted=function(e,n){if(0===e.length)return!0;var t=new URL(n).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return n.every(function(n){return!n.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var n=e[0],t=e[1],a=new URL(n,self.location),r=createCacheKey(a,hashParamName,t,!1);return[a.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t))return e.add(new Request(t,{credentials:"same-origin",redirect:"follow"}))}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!n.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var n,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);n=urlsToCacheKeys.has(t);var a="index.html";!n&&a&&(t=addDirectoryIndex(t,a),n=urlsToCacheKeys.has(t));var r="";!n&&r&&"navigate"===e.request.mode&&isPathWhitelisted([],e.request.url)&&(t=new URL(r,self.location).toString(),n=urlsToCacheKeys.has(t)),n&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(n){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,n),fetch(e.request)}))}}),!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n;n="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,n.toolbox=e()}}(function(){return function e(n,t,a){function r(c,i){if(!t[c]){if(!n[c]){var s="function"==typeof require&&require;if(!i&&s)return s(c,!0);if(o)return o(c,!0);var f=new Error("Cannot find module '"+c+"'");throw f.code="MODULE_NOT_FOUND",f}var d=t[c]={exports:{}};n[c][0].call(d.exports,function(e){var t=n[c][1][e];return r(t?t:e)},d,d.exports,e,n,t,a)}return t[c].exports}for(var o="function"==typeof require&&require,c=0;c<a.length;c++)r(a[c]);return r}({1:[function(e,n,t){function a(e,n){n=n||{};var t=n.debug||p.debug;t&&console.log("[sw-toolbox] "+e)}function r(e){var n;return e&&e.cache&&(n=e.cache.name),n=n||p.cache.name,caches.open(n)}function o(e,n){n=n||{};var t=n.successResponses||p.successResponses;return fetch(e.clone()).then(function(a){return"GET"===e.method&&t.test(a.status)&&r(n).then(function(t){t.put(e,a).then(function(){var a=n.cache||p.cache;(a.maxEntries||a.maxAgeSeconds)&&a.name&&c(e,t,a)})}),a.clone()})}function c(e,n,t){var a=i.bind(null,e,n,t);l=l?l.then(a):a()}function i(e,n,t){var r=e.url,o=t.maxAgeSeconds,c=t.maxEntries,i=t.name,s=Date.now();return a("Updating LRU order for "+r+". Max entries is "+c+", max age is "+o),b.getDb(i).then(function(e){return b.setTimestampForUrl(e,r,s)}).then(function(e){return b.expireEntries(e,c,o,s)}).then(function(e){a("Successfully updated IDB.");var t=e.map(function(e){return n.delete(e)});return Promise.all(t).then(function(){a("Done with cache cleanup.")})}).catch(function(e){a(e)})}function s(e,n,t){return a("Renaming cache: ["+e+"] to ["+n+"]",t),caches.delete(n).then(function(){return Promise.all([caches.open(e),caches.open(n)]).then(function(n){var t=n[0],a=n[1];return t.keys().then(function(e){return Promise.all(e.map(function(e){return t.match(e).then(function(n){return a.put(e,n)})}))}).then(function(){return caches.delete(e)})})})}function f(e,n){return r(n).then(function(n){return n.add(e)})}function d(e,n){return r(n).then(function(n){return n.delete(e)})}function g(e){e instanceof Promise||u(e),p.preCacheItems=p.preCacheItems.concat(e)}function u(e){var n=Array.isArray(e);if(n&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(n=!1)}),!n)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}var l,p=e("./options"),b=e("./idb-cache-expiration");n.exports={debug:a,fetchAndCache:o,openCache:r,renameCache:s,cache:f,uncache:d,precache:g,validatePrecacheInput:u}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,n,t){function a(e){return new Promise(function(n,t){var a=indexedDB.open(f+e,d);a.onupgradeneeded=function(){var e=a.result.createObjectStore(g,{keyPath:u});e.createIndex(l,l,{unique:!1})},a.onsuccess=function(){n(a.result)},a.onerror=function(){t(a.error)}})}function r(e){return e in p||(p[e]=a(e)),p[e]}function o(e,n,t){return new Promise(function(a,r){var o=e.transaction(g,"readwrite"),c=o.objectStore(g);c.put({url:n,timestamp:t}),o.oncomplete=function(){a(e)},o.onabort=function(){r(o.error)}})}function c(e,n,t){return n?new Promise(function(a,r){var o=1e3*n,c=[],i=e.transaction(g,"readwrite"),s=i.objectStore(g),f=s.index(l);f.openCursor().onsuccess=function(e){var n=e.target.result;if(n&&t-o>n.value[l]){var a=n.value[u];c.push(a),s.delete(a),n.continue()}},i.oncomplete=function(){a(c)},i.onabort=r}):Promise.resolve([])}function i(e,n){return n?new Promise(function(t,a){var r=[],o=e.transaction(g,"readwrite"),c=o.objectStore(g),i=c.index(l),s=i.count();i.count().onsuccess=function(){var e=s.result;e>n&&(i.openCursor().onsuccess=function(t){var a=t.target.result;if(a){var o=a.value[u];r.push(o),c.delete(o),e-r.length>n&&a.continue()}})},o.oncomplete=function(){t(r)},o.onabort=a}):Promise.resolve([])}function s(e,n,t,a){return c(e,t,a).then(function(t){return i(e,n).then(function(e){return t.concat(e)})})}var f="sw-toolbox-",d=1,g="store",u="url",l="timestamp",p={};n.exports={getDb:r,setTimestampForUrl:o,expireEntries:s}},{}],3:[function(e,n,t){function a(e){var n=s.match(e.request);n?e.respondWith(n(e.request)):s.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(s.default(e.request))}function r(e){i.debug("activate event fired");var n=f.cache.name+"$$$inactive$$$";e.waitUntil(i.renameCache(n,f.cache.name))}function o(e){return e.reduce(function(e,n){return e.concat(n)},[])}function c(e){var n=f.cache.name+"$$$inactive$$$";i.debug("install event fired"),i.debug("creating cache ["+n+"]"),e.waitUntil(i.openCache({cache:{name:n}}).then(function(e){return Promise.all(f.preCacheItems).then(o).then(i.validatePrecacheInput).then(function(n){return i.debug("preCache list: "+(n.join(", ")||"(none)")),e.addAll(n)})}))}e("serviceworker-cache-polyfill");var i=e("./helpers"),s=e("./router"),f=e("./options");n.exports={fetchListener:a,activateListener:r,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,n,t){var a;a=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,n.exports={cache:{name:"$$$toolbox-cache$$$"+a+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,n,t){var a=new URL("./",self.location),r=a.pathname,o=e("path-to-regexp"),c=function(e,n,t,a){n instanceof RegExp?this.fullUrlRegExp=n:(0!==n.indexOf("/")&&(n=r+n),this.keys=[],this.regexp=o(n,this.keys)),this.method=e,this.options=a,this.handler=t};c.prototype.makeHandler=function(e){var n;if(this.regexp){var t=this.regexp.exec(e);n={},this.keys.forEach(function(e,a){n[e.name]=t[a+1]})}return function(e){return this.handler(e,n,this.options)}.bind(this)},n.exports=c},{"path-to-regexp":15}],6:[function(e,n,t){function a(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var r=e("./route"),o=e("./helpers"),c=function(e,n){for(var t=e.entries(),a=t.next(),r=[];!a.done;){var o=new RegExp(a.value[0]);o.test(n)&&r.push(a.value[1]),a=t.next()}return r},i=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){i.prototype[e]=function(n,t,a){return this.add(e,n,t,a)}}),i.prototype.add=function(e,n,t,c){c=c||{};var i;n instanceof RegExp?i=RegExp:(i=c.origin||self.location.origin,i=i instanceof RegExp?i.source:a(i)),e=e.toLowerCase();var s=new r(e,n,t,c);this.routes.has(i)||this.routes.set(i,new Map);var f=this.routes.get(i);f.has(e)||f.set(e,new Map);var d=f.get(e),g=s.regexp||s.fullUrlRegExp;d.has(g.source)&&o.debug('"'+n+'" resolves to same regex as existing route.'),d.set(g.source,s)},i.prototype.matchMethod=function(e,n){var t=new URL(n),a=t.origin,r=t.pathname;return this._match(e,c(this.routes,a),r)||this._match(e,[this.routes.get(RegExp)],n)},i.prototype._match=function(e,n,t){if(0===n.length)return null;for(var a=0;a<n.length;a++){var r=n[a],o=r&&r.get(e.toLowerCase());if(o){var i=c(o,t);if(i.length>0)return i[0].makeHandler(t)}}return null},i.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},n.exports=new i},{"./helpers":1,"./route":5}],7:[function(e,n,t){function a(e,n,t){return r.debug("Strategy: cache first ["+e.url+"]",t),r.openCache(t).then(function(n){return n.match(e).then(function(n){return n?n:r.fetchAndCache(e,t)})})}var r=e("../helpers");n.exports=a},{"../helpers":1}],8:[function(e,n,t){function a(e,n,t){return r.debug("Strategy: cache only ["+e.url+"]",t),r.openCache(t).then(function(n){return n.match(e)})}var r=e("../helpers");n.exports=a},{"../helpers":1}],9:[function(e,n,t){function a(e,n,t){return r.debug("Strategy: fastest ["+e.url+"]",t),new Promise(function(a,c){var i=!1,s=[],f=function(e){s.push(e.toString()),i?c(new Error('Both cache and network failed: "'+s.join('", "')+'"')):i=!0},d=function(e){e instanceof Response?a(e):f("No result returned")};r.fetchAndCache(e.clone(),t).then(d,f),o(e,n,t).then(d,f)})}var r=e("../helpers"),o=e("./cacheOnly");n.exports=a},{"../helpers":1,"./cacheOnly":8}],10:[function(e,n,t){n.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,n,t){function a(e,n,t){t=t||{};var a=t.successResponses||r.successResponses,c=t.networkTimeoutSeconds||r.networkTimeoutSeconds;return o.debug("Strategy: network first ["+e.url+"]",t),o.openCache(t).then(function(n){var r,i,s=[];if(c){var f=new Promise(function(t){r=setTimeout(function(){n.match(e).then(function(e){e&&t(e)})},1e3*c)});s.push(f)}var d=o.fetchAndCache(e,t).then(function(e){if(r&&clearTimeout(r),a.test(e.status))return e;throw o.debug("Response was an HTTP error: "+e.statusText,t),i=e,new Error("Bad response")}).catch(function(a){return o.debug("Network or response error, fallback to cache ["+e.url+"]",t),n.match(e).then(function(e){if(e)return e;if(i)return i;throw a})});return s.push(d),Promise.race(s)})}var r=e("../options"),o=e("../helpers");n.exports=a},{"../helpers":1,"../options":4}],12:[function(e,n,t){function a(e,n,t){return r.debug("Strategy: network only ["+e.url+"]",t),fetch(e)}var r=e("../helpers");n.exports=a},{"../helpers":1}],13:[function(e,n,t){var a=e("./options"),r=e("./router"),o=e("./helpers"),c=e("./strategies"),i=e("./listeners");o.debug("Service Worker Toolbox is loading"),self.addEventListener("install",i.installListener),self.addEventListener("activate",i.activateListener),self.addEventListener("fetch",i.fetchListener),n.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:r,options:a,cache:o.cache,uncache:o.uncache,precache:o.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,n,t){n.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,n,t){function a(e){for(var n,t=[],a=0,r=0,o="";null!=(n=_.exec(e));){var c=n[0],i=n[1],s=n.index;if(o+=e.slice(r,s),r=s+c.length,i)o+=i[1];else{var d=e[r],g=n[2],u=n[3],l=n[4],p=n[5],b=n[6],m=n[7];o&&(t.push(o),o="");var h=null!=g&&null!=d&&d!==g,v="+"===b||"*"===b,w="?"===b||"*"===b,y=n[2]||"/",x=l||p||(m?".*":"[^"+y+"]+?");t.push({name:u||a++,prefix:g||"",delimiter:y,optional:w,repeat:v,partial:h,asterisk:!!m,pattern:f(x)})}}return r<e.length&&(o+=e.substr(r)),o&&t.push(o),t}function r(e){return i(a(e))}function o(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function i(e){for(var n=new Array(e.length),t=0;t<e.length;t++)"object"==typeof e[t]&&(n[t]=new RegExp("^(?:"+e[t].pattern+")$"));return function(t,a){for(var r="",i=t||{},s=a||{},f=s.pretty?o:encodeURIComponent,d=0;d<e.length;d++){var g=e[d];if("string"!=typeof g){var u,l=i[g.name];if(null==l){if(g.optional){g.partial&&(r+=g.prefix);continue}throw new TypeError('Expected "'+g.name+'" to be defined')}if(h(l)){if(!g.repeat)throw new TypeError('Expected "'+g.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(g.optional)continue;throw new TypeError('Expected "'+g.name+'" to not be empty')}for(var p=0;p<l.length;p++){if(u=f(l[p]),!n[d].test(u))throw new TypeError('Expected all "'+g.name+'" to match "'+g.pattern+'", but received `'+JSON.stringify(u)+"`");r+=(0===p?g.prefix:g.delimiter)+u}}else{if(u=g.asterisk?c(l):f(l),!n[d].test(u))throw new TypeError('Expected "'+g.name+'" to match "'+g.pattern+'", but received "'+u+'"');r+=g.prefix+u}}else r+=g}return r}}function s(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function f(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function d(e,n){return e.keys=n,e}function g(e){return e.sensitive?"":"i"}function u(e,n){var t=e.source.match(/\((?!\?)/g);if(t)for(var a=0;a<t.length;a++)n.push({name:a,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return d(e,n)}function l(e,n,t){for(var a=[],r=0;r<e.length;r++)a.push(m(e[r],n,t).source);var o=new RegExp("(?:"+a.join("|")+")",g(t));return d(o,n)}function p(e,n,t){for(var r=a(e),o=b(r,t),c=0;c<r.length;c++)"string"!=typeof r[c]&&n.push(r[c]);return d(o,n)}function b(e,n){n=n||{};for(var t=n.strict,a=n.end!==!1,r="",o=e[e.length-1],c="string"==typeof o&&/\/$/.test(o),i=0;i<e.length;i++){var f=e[i];if("string"==typeof f)r+=s(f);else{var d=s(f.prefix),u="(?:"+f.pattern+")";f.repeat&&(u+="(?:"+d+u+")*"),u=f.optional?f.partial?d+"("+u+")?":"(?:"+d+"("+u+"))?":d+"("+u+")",r+=u}}return t||(r=(c?r.slice(0,-2):r)+"(?:\\/(?=$))?"),r+=a?"$":t&&c?"":"(?=\\/|$)",new RegExp("^"+r,g(n))}function m(e,n,t){return n=n||[],h(n)?t||(t={}):(t=n,n=[]),e instanceof RegExp?u(e,n):h(e)?l(e,n,t):p(e,n,t)}var h=e("isarray");n.exports=m,n.exports.parse=a,n.exports.compile=r,n.exports.tokensToFunction=i,n.exports.tokensToRegExp=b;var _=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,n,t){!function(){var e=Cache.prototype.addAll,n=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(n)var t=n[1],a=parseInt(n[2]);e&&(!n||"Firefox"===t&&a>=46||"Chrome"===t&&a>=50)||(Cache.prototype.addAll=function(e){function n(e){this.name="NetworkError",this.code=19,this.message=e}var t=this;return n.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var t=new URL(e.url).protocol;if("http:"!==t&&"https:"!==t)throw new n("Invalid scheme");return fetch(e.clone())}))}).then(function(a){if(a.some(function(e){return!e.ok}))throw new n("Incorrect response status");return Promise.all(a.map(function(n,a){return t.put(e[a],n)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)}),toolbox.router.get(/^((?!auth|admin|chrome-extension|img\.mediatek|analytics\.js|addthis|\/v1\/|gstatic|googleapis).)*$/,toolbox.networkFirst,{cache:{name:"labs-web-networkFirst",maxAgeSeconds:604800}}),toolbox.router.get(/.*(?:img\.mediatek|analytics\.js|addthis|\/v1\/|gstatic|googleapis).*/,toolbox.fastest,{cache:{name:"labs-web-fastest",maxAgeSeconds:604800}});