
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"160",
  
  "macros":[{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"embed\"===document.querySelector(\"body\").getAttribute(\"data-analytics-class\")})();"]
    },{
      "function":"__aev",
      "vtp_varType":"ELEMENT"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",1],8,16],".getAttribute(\"data-analytics-link\")||void 0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",1],8,16],".getAttribute(\"data-analytics-class\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",1],8,16],";if(a=a.parentElement)return a.getAttribute(\"data-analytics-class\")||a.getAttribute(\"data-analytics-action\")||void 0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",1],8,16],".getAttribute(\"data-analytics-social\")||void 0})();"]
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_name":"GA CrossDomains",
      "vtp_dataLayerVersion":2
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=",["escape",["macro",1],8,16],".hostname||\"\";if(!b||b==document.domain)return!1;for(var c=(",["escape",["macro",6],8,16],"||\"\").split(\",\"),a=0;a\u003Cc.length;a++)if(c[a]\u0026\u00260\u003C=b.indexOf(c[a]))return!1;return!0})();"]
    },{
      "function":"__v",
      "vtp_name":"Breakpoint",
      "vtp_dataLayerVersion":2
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",8],8,16],"||\"\";if(\"string\"===typeof a\u0026\u0026a.match(\/small\/)\u0026\u0026!a.match(\/medium\/))return!0;a=document.documentElement;return 600\u003E=(window.innerWidth||a\u0026\u0026a.clientWidth||document.body.clientWidth)})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return document.title.replace(\/\\s*-\\s+TODO-UnisonDomain\\.com$\/,\"\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(){if(window.history.replaceState){var a=window.location.search.replace(\/(_ga|utm_)[^\u0026]+\u0026?\/g,\"\").replace(\/\u0026$\/,\"\").replace(\/^\\?$\/,\"\");window.history.replaceState({},document.title,window.location.pathname+a+window.location.hash)}return null}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var a=",["escape",["macro",1],8,16],";a\u0026\u0026a.getAttribute;){var b=a.getAttribute(\"data-analytics-placement\");if(b)return\":\"+b;a=a.parentNode}return\"\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var a=",["escape",["macro",1],8,16],";a\u0026\u0026a.getAttribute;){var b=a.getAttribute(\"data-analytics-action\");if(b)return b;a=a.parentNode}return\"share\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var a=",["escape",["macro",1],8,16],";a\u0026\u0026a.getAttribute;){var b=a.getAttribute(\"data-analytics-placement\");if(b)return b;a=a.parentNode}return\"main\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=",["escape",["macro",1],8,16],",a=b.querySelectorAll(\"h1,h2,h3,h4,h5,h6\");return a.length?(a=Array.prototype.slice.call(a),a.sort(function(a,b){return a.tagName.localeCompare(b.tagName)}),a[0].innerText):b.innerText})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",1],8,16],",b=a.getAttribute(\"data-analytics-link\"),c=b.replace(\/([^:]+).*\/,\"$1\"),d=function(a){var b=a.querySelectorAll(\"h1,h2,h3,h4,h5,h6\");return b.length?(b=[].slice.call(b).sort(function(a,b){return a.tagName.localeCompare(b.tagName)}),b[0].innerText):a.innerText};if(b!==c){for(b='[data-analytics-link\\x3d\"'+c+'\"]';(a=a.parentNode)\u0026\u0026a.querySelector;)if(c=a.querySelector(b))return d(c);return ",["escape",["macro",1],8,16],".getAttribute(\"href\")}return d(a)})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",1],8,16],".getAttribute(\"data-analytics-viewport\")||void 0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=!0!==window.adblockJsFile;if(void 0!==navigator.doNotTrack)var a=navigator.doNotTrack;else void 0!==window.doNotTrack?a=window.doNotTrack:void 0!==navigator.msDoNotTrack\u0026\u0026(a=navigator.msDoNotTrack);a=void 0!==a?\/1|yes|true\/.test(String(a).toLowerCase())?\"true\":\"false\":\"undefined\";return\"adblock-\"+b+\":dnt-\"+a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return Array.isArray(window.chorusSDK)})();"]
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",1],8,16],".getAttribute(\"data-analytics-label\")||",["escape",["macro",20],8,16],"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",1],8,16],".getAttribute(\"data-analytics-campaign\")||void 0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",1],8,16],".getAttribute(\"value\")})();"]
    },{
      "function":"__e"
    },{
      "function":"__aev",
      "vtp_varType":"URL"
    },{
      "function":"__c",
      "vtp_value":"auto"
    },{
      "function":"__v",
      "vtp_name":"Content ID",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"Content Type",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"Author",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"All Chorus Categories",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"Publish Date",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"Entry Groups",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"Community",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"Network",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"GA Primary ID"
    },{
      "function":"__v",
      "vtp_name":"socialNetwork",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"socialAction",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"socialTarget",
      "vtp_dataLayerVersion":2
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_name":"Hour of Publish",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"Advertiser",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"Campaign",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"Pagination Tracking",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"Program",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"Topic",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"Super Groups",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"Additional Placements",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"Demand Post",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"Hour of Day",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"Day of Week",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"Hour of Update",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"Logged in Status",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"Last Time Updated",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"Page Layout Version"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"Hermano Records"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"iFrame Tracking"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"Hidden Groups"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"Story Word Count"
    },{
      "function":"__j",
      "vtp_name":"navigator.userAgent"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ScrollSubscription"
    },{
      "function":"__c",
      "vtp_value":"no value set"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"Piano Logged In Status"
    },{
      "function":"__v",
      "vtp_name":"virtualPagePath",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"Embed Host",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"virtualPageTitle",
      "vtp_dataLayerVersion":2
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=[\"newsletter\"],a=",["escape",["macro",1],8,16],".className.split(\" \").filter(function(a){return b.includes(a)})[0];return a?a:",["escape",["macro",3],8,16],"})();"]
    },{
      "function":"__v",
      "vtp_name":"eventNonInt",
      "vtp_dataLayerVersion":2
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a={newsletter:\"email\"}[",["escape",["macro",66],8,16],"];return a?a:",["escape",["macro",22],8,16],"||",["escape",["macro",28],8,16],"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",9],8,16],"?\"mobile\":\"desktop\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"GA Secondary ID"
    },{
      "function":"__c",
      "vtp_value":"unison"
    },{
      "function":"__aev",
      "vtp_varType":"CLASSES"
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_stripWww":true,
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_name":"eventCategory",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"eventAction",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"eventLabel",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"eventValue",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"Video ID"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"Video Content Type"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"Producer"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"Video Publish Date"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"Tags"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"Primary Brand"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"Series"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"Format"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"Sub-format"
    },{
      "function":"__r"
    },{
      "function":"__c",
      "vtp_value":"2724"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"chartbeat_domain"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"chartbeat_authors"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"chartbeat_zone"
    },{
      "function":"__v",
      "vtp_name":"errorType",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"placement",
      "vtp_dataLayerVersion":2
    },{
      "function":"__aev",
      "vtp_varType":"ID"
    },{
      "function":"__aev",
      "vtp_varType":"TARGET"
    },{
      "function":"__e"
    },{
      "function":"__f"
    },{
      "function":"__f",
      "vtp_component":"HOST",
      "vtp_stripWww":false
    },{
      "function":"__f",
      "vtp_component":"PATH"
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"lazyLoadedAdsEnabled"
    },{
      "function":"__aev",
      "vtp_setDefaultValue":true,
      "vtp_varType":"CLASSES",
      "vtp_defaultValue":"more"
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    }],
  "tags":[{
      "function":"__ua",
      "priority":5,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":["macro",67],
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":["macro",68],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["template",["macro",28],":",["macro",66],["macro",12]],
      "vtp_eventLabel":["macro",39],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","anonymizeIp","value","false"],["map","fieldName","cookieDomain","value",["macro",26]]],
      "vtp_enableLinkId":true,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",35],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":81
    },{
      "function":"__ua",
      "priority":5,
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"comment",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["template",["macro",28],":comment:",["macro",23]],
      "vtp_eventLabel":["macro",39],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","anonymizeIp","value","false"],["map","fieldName","cookieDomain","value",["macro",26]]],
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",27]],["map","index","4","dimension",["macro",29]],["map","index","20","dimension",["macro",30]],["map","index","2","dimension",["macro",28]],["map","index","3","dimension",["macro",52]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",35],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":111
    },{
      "function":"__ua",
      "priority":3,
      "vtp_trackingId":["macro",35],
      "vtp_trackType":"TRACK_SOCIAL",
      "vtp_dimension":["list",["map","index","1","dimension",["macro",27]],["map","index","4","dimension",["macro",29]],["map","index","20","dimension",["macro",30]]],
      "vtp_useDebugVersion":false,
      "vtp_enableLinkId":true,
      "vtp_doubleClick":true,
      "vtp_advertisingFeaturesType":"DISPLAY_FEATURES",
      "vtp_socialNetwork":["macro",36],
      "vtp_socialAction":["macro",37],
      "vtp_socialActionTarget":["macro",38],
      "vtp_fieldsToSet":["list",["map","fieldName","anonymizeIp","value","false"],["map","fieldName","cookieDomain","value",["macro",26]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsSocial":true,
      "tag_id":73
    },{
      "function":"__ua",
      "priority":3,
      "vtp_trackingId":["macro",35],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_dimension":["list",["map","index","1","dimension",["macro",27]],["map","index","27","dimension",["macro",43]],["map","index","2","dimension",["macro",28]],["map","index","33","dimension",["macro",64]]],
      "vtp_useDebugVersion":false,
      "vtp_autoLinkDomains":["macro",6],
      "vtp_enableLinkId":true,
      "vtp_decorateFormsAutoLink":true,
      "vtp_doubleClick":true,
      "vtp_advertisingFeaturesType":"DISPLAY_FEATURES",
      "vtp_useHashAutoLink":false,
      "vtp_enableEcommerce":false,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","true"],["map","fieldName","anonymizeIp","value","false"],["map","fieldName","cookieDomain","value",["macro",26]],["map","fieldName","page","value",["macro",63]],["map","fieldName","title","value",["macro",65]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":78
    },{
      "function":"__ua",
      "priority":3,
      "once_per_event":true,
      "vtp_nonInteraction":["macro",67],
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"social",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["template",["macro",13],":",["macro",28],":",["macro",69],":",["macro",14]],
      "vtp_eventLabel":["template",["macro",13],":",["macro",5],":",["macro",28],":",["macro",69],":",["macro",14]],
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","anonymizeIp","value","false"],["map","fieldName","cookieDomain","value",["macro",26]]],
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",27]],["map","index","4","dimension",["macro",29]],["map","index","20","dimension",["macro",30]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",35],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":84
    },{
      "function":"__ua",
      "priority":3,
      "once_per_event":true,
      "vtp_nonInteraction":["macro",67],
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"social",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["template",["macro",69],":more"],
      "vtp_eventLabel":["macro",39],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","anonymizeIp","value","false"],["map","fieldName","cookieDomain","value",["macro",26]]],
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",27]],["map","index","4","dimension",["macro",29]],["map","index","20","dimension",["macro",30]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",35],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":104
    },{
      "function":"__ua",
      "priority":3,
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"rss",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["template","click:rss:",["macro",74]],
      "vtp_eventLabel":["macro",39],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","anonymizeIp","value","false"],["map","fieldName","cookieDomain","value",["macro",26]]],
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",27]],["map","index","4","dimension",["macro",29]],["map","index","20","dimension",["macro",30]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",35],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":106
    },{
      "function":"__ua",
      "priority":3,
      "once_per_event":true,
      "vtp_nonInteraction":["macro",67],
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":["macro",28],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"feature:bottom:promotion",
      "vtp_eventLabel":["macro",39],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","anonymizeIp","value","false"],["map","fieldName","cookieDomain","value",["macro",26]]],
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",27]],["map","index","4","dimension",["macro",29]],["map","index","20","dimension",["macro",30]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",35],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":121
    },{
      "function":"__ua",
      "priority":3,
      "once_per_event":true,
      "vtp_nonInteraction":["macro",67],
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"poll",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"click:poll:vote",
      "vtp_eventLabel":["macro",39],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","anonymizeIp","value","false"],["map","fieldName","cookieDomain","value",["macro",26]]],
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",27]],["map","index","4","dimension",["macro",29]],["map","index","20","dimension",["macro",30]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",35],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":123
    },{
      "function":"__ua",
      "priority":3,
      "once_per_event":true,
      "vtp_nonInteraction":["macro",67],
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"poll",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"click:poll:return",
      "vtp_eventLabel":["macro",39],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","anonymizeIp","value","false"],["map","fieldName","cookieDomain","value",["macro",26]]],
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",27]],["map","index","4","dimension",["macro",29]],["map","index","2","dimension",["macro",28]],["map","index","20","dimension",["macro",30]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",35],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":124
    },{
      "function":"__ua",
      "priority":3,
      "once_per_event":true,
      "vtp_nonInteraction":["macro",67],
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"poll",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"click:poll:view",
      "vtp_eventLabel":["macro",39],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","anonymizeIp","value","false"],["map","fieldName","cookieDomain","value",["macro",26]]],
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",27]],["map","index","2","dimension",["macro",28]],["map","index","4","dimension",["macro",29]],["map","index","20","dimension",["macro",30]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",35],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":125
    },{
      "function":"__ua",
      "priority":3,
      "once_per_event":true,
      "vtp_nonInteraction":["macro",67],
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":["macro",28],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"click:citybox",
      "vtp_eventLabel":["macro",74],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","anonymizeIp","value","false"],["map","fieldName","cookieDomain","value",["macro",26]]],
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",27]],["map","index","4","dimension",["macro",29]],["map","index","20","dimension",["macro",30]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",35],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":148
    },{
      "function":"__ua",
      "priority":3,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":["macro",67],
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":["macro",76],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["macro",77],
      "vtp_eventLabel":["macro",78],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_eventValue":["macro",79],
      "vtp_fieldsToSet":["list",["map","fieldName","anonymizeIp","value","false"],["map","fieldName","cookieDomain","value",["macro",26]]],
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",27]],["map","index","2","dimension",["macro",28]],["map","index","27","dimension",["macro",43]],["map","index","33","dimension",["macro",64]],["map","index","20","dimension",["macro",30]],["map","index","4","dimension",["macro",29]],["map","index","5","dimension",["macro",31]],["map","index","10","dimension",["macro",32]],["map","index","11","dimension",["macro",33]],["map","index","12","dimension",["macro",34]],["map","index","16","dimension",["macro",44]],["map","index","17","dimension",["macro",45]],["map","index","41","dimension",["macro",80]],["map","index","42","dimension",["macro",81]],["map","index","43","dimension",["macro",82]],["map","index","44","dimension",["macro",83]],["map","index","45","dimension",["macro",84]],["map","index","46","dimension",["macro",85]],["map","index","47","dimension",["macro",86]],["map","index","48","dimension",["macro",87]],["map","index","49","dimension",["macro",88]],["map","index","53","dimension",["macro",58]],["map","index","24","dimension",["macro",79]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",35],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":149
    },{
      "function":"__ua",
      "priority":2,
      "once_per_event":true,
      "vtp_nonInteraction":["macro",67],
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",26]]],
      "vtp_eventCategory":["macro",28],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":true,
      "vtp_eventAction":["template","link:",["macro",2],["macro",12]],
      "vtp_eventLabel":["macro",16],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",35],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":85
    },{
      "function":"__ua",
      "priority":2,
      "once_per_event":true,
      "vtp_nonInteraction":["macro",67],
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",26]]],
      "vtp_eventCategory":["macro",17],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":true,
      "vtp_eventAction":["template","click:",["macro",2],["macro",12]],
      "vtp_eventLabel":["macro",16],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",35],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":92
    },{
      "function":"__ua",
      "priority":1,
      "once_per_event":true,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_autoLinkDomains":["macro",6],
      "vtp_decorateFormsAutoLink":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","true"],["map","fieldName","anonymizeIp","value","false"],["map","fieldName","cookieDomain","value",["macro",26]],["map","fieldName","hitCallback","value",["macro",11]],["map","fieldName","campaignMedium","value","social"],["map","fieldName","campaignSource","value","facebook"],["map","fieldName","title","value",["macro",65]]],
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","20","dimension",["macro",30]],["map","index","26","dimension",["macro",40]],["map","index","18","dimension",["macro",41]],["map","index","19","dimension",["macro",42]],["map","index","27","dimension",["macro",43]],["map","index","16","dimension",["macro",44]],["map","index","17","dimension",["macro",45]],["map","index","12","dimension",["macro",34]],["map","index","13","dimension",["macro",46]],["map","index","14","dimension",["macro",47]],["map","index","15","dimension",["macro",48]],["map","index","2","dimension",["macro",28]],["map","index","22","dimension",["macro",49]],["map","index","21","dimension",["macro",50]],["map","index","11","dimension",["macro",33]],["map","index","9","dimension",["macro",51]],["map","index","3","dimension",["macro",52]],["map","index","4","dimension",["macro",29]],["map","index","6","dimension",["macro",18]],["map","index","5","dimension",["macro",31]],["map","index","8","dimension",["macro",53]],["map","index","1","dimension",["macro",27]],["map","index","10","dimension",["macro",32]],["map","index","7","dimension",["macro",8]],["map","index","29","dimension",["macro",71]],["map","index","34","dimension",["macro",55]],["map","index","25","dimension",["macro",56]],["map","index","53","dimension",["macro",58]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",35],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":100
    },{
      "function":"__ua",
      "priority":0,
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"outbound",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["macro",25],
      "vtp_eventLabel":["macro",20],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","anonymizeIp","value","false"],["map","fieldName","cookieDomain","value",["macro",26]]],
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",27]],["map","index","2","dimension",["macro",28]],["map","index","4","dimension",["macro",29]],["map","index","20","dimension",["macro",30]],["map","index","5","dimension",["macro",31]],["map","index","10","dimension",["macro",32]],["map","index","11","dimension",["macro",33]],["map","index","12","dimension",["macro",34]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",35],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":72
    },{
      "function":"__fsl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "tag_id":75
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"100",
      "tag_id":76
    },{
      "function":"__ua",
      "priority":0,
      "once_per_event":true,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_autoLinkDomains":["macro",6],
      "vtp_decorateFormsAutoLink":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","true"],["map","fieldName","anonymizeIp","value","false"],["map","fieldName","cookieDomain","value",["macro",26]],["map","fieldName","hitCallback","value",["macro",11]],["map","fieldName","useAmpClientId","value","true"]],
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","20","dimension",["macro",30]],["map","index","26","dimension",["macro",40]],["map","index","18","dimension",["macro",41]],["map","index","19","dimension",["macro",42]],["map","index","27","dimension",["macro",43]],["map","index","16","dimension",["macro",44]],["map","index","17","dimension",["macro",45]],["map","index","12","dimension",["macro",34]],["map","index","13","dimension",["macro",46]],["map","index","14","dimension",["macro",47]],["map","index","15","dimension",["macro",48]],["map","index","2","dimension",["macro",28]],["map","index","22","dimension",["macro",49]],["map","index","21","dimension",["macro",50]],["map","index","11","dimension",["macro",33]],["map","index","9","dimension",["macro",51]],["map","index","3","dimension",["macro",52]],["map","index","4","dimension",["macro",29]],["map","index","6","dimension",["macro",18]],["map","index","5","dimension",["macro",31]],["map","index","8","dimension",["macro",53]],["map","index","1","dimension",["macro",27]],["map","index","10","dimension",["macro",32]],["map","index","7","dimension",["macro",8]],["map","index","29","dimension",["macro",54]],["map","index","34","dimension",["macro",55]],["map","index","25","dimension",["macro",56]],["map","index","50","dimension",["macro",57]],["map","index","53","dimension",["macro",58]],["map","index","54","dimension",["macro",59]],["map","index","23","dimension",["macro",60]],["map","index","33","dimension",["macro",61]],["map","index","24","dimension",["macro",62]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",35],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":77
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":["macro",28],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":["macro",4],
      "vtp_eventLabel":["macro",25],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",35],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":83
    },{
      "function":"__ua",
      "priority":0,
      "once_per_event":true,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_autoLinkDomains":["macro",6],
      "vtp_decorateFormsAutoLink":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","true"],["map","fieldName","anonymizeIp","value","false"],["map","fieldName","cookieDomain","value",["macro",26]],["map","fieldName","useAmpClientId","value","true"]],
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","20","dimension",["macro",30]],["map","index","26","dimension",["macro",40]],["map","index","18","dimension",["macro",41]],["map","index","19","dimension",["macro",42]],["map","index","27","dimension",["macro",43]],["map","index","16","dimension",["macro",44]],["map","index","17","dimension",["macro",45]],["map","index","12","dimension",["macro",34]],["map","index","13","dimension",["macro",46]],["map","index","14","dimension",["macro",47]],["map","index","15","dimension",["macro",48]],["map","index","2","dimension",["macro",28]],["map","index","22","dimension",["macro",49]],["map","index","21","dimension",["macro",50]],["map","index","11","dimension",["macro",33]],["map","index","9","dimension",["macro",51]],["map","index","3","dimension",["macro",52]],["map","index","4","dimension",["macro",29]],["map","index","6","dimension",["macro",18]],["map","index","5","dimension",["macro",31]],["map","index","8","dimension",["macro",53]],["map","index","1","dimension",["macro",27]],["map","index","10","dimension",["macro",32]],["map","index","7","dimension",["macro",8]],["map","index","34","dimension",["macro",55]],["map","index","25","dimension",["macro",56]],["map","index","53","dimension",["macro",58]],["map","index","54","dimension",["macro",59]],["map","index","23","dimension",["macro",60]],["map","index","33","dimension",["macro",61]],["map","index","24","dimension",["macro",62]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",70],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":89
    },{
      "function":"__ua",
      "priority":0,
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","anonymizeIp","value","false"],["map","fieldName","cookieDomain","value",["macro",26]]],
      "vtp_eventCategory":["macro",22],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":true,
      "vtp_eventAction":["template","click:",["macro",22]],
      "vtp_eventLabel":["macro",21],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",35],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":99
    },{
      "function":"__twitter_website_tag",
      "once_per_event":true,
      "vtp_event_type":"PageView",
      "vtp_twitter_pixel_id":"nz4et",
      "tag_id":108
    },{
      "function":"__opt",
      "setup_tags":["list",["tag",21,0]],
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","true"],["map","fieldName","anonymizeIp","value","false"],["map","fieldName","cookieDomain","value",["macro",26]],["map","fieldName","hitCallback","value",["macro",11]],["map","fieldName","useAmpClientId","value","true"]],
      "vtp_useDebugVersion":false,
      "vtp_optimizeContainerId":"GTM-M6PXKL3",
      "vtp_trackingId":"UA-189494-73",
      "tag_id":109
    },{
      "function":"__opt",
      "setup_tags":["list",["tag",21,0]],
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","true"],["map","fieldName","anonymizeIp","value","false"],["map","fieldName","cookieDomain","value",["macro",26]],["map","fieldName","hitCallback","value",["macro",11]],["map","fieldName","useAmpClientId","value","true"]],
      "vtp_useDebugVersion":false,
      "vtp_optimizeContainerId":"GTM-54FC4VZ",
      "vtp_trackingId":"UA-26533115-1",
      "tag_id":110
    },{
      "function":"__gcs",
      "setup_tags":["list",["tag",21,0]],
      "once_per_load":true,
      "vtp_siteId":"pryr5r37zzkmeutts55nszygji",
      "tag_id":118
    },{
      "function":"__opt",
      "setup_tags":["list",["tag",21,0]],
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","true"],["map","fieldName","anonymizeIp","value","false"],["map","fieldName","cookieDomain","value",["macro",26]],["map","fieldName","hitCallback","value",["macro",11]],["map","fieldName","useAmpClientId","value","true"]],
      "vtp_useDebugVersion":false,
      "vtp_optimizeContainerId":"GTM-NDNNL7Q",
      "vtp_trackingId":"UA-189494-74",
      "tag_id":137
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/www.facebook.com\/tr?id=146698685967099\u0026ev=PageView\u0026noscript=1",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",89],
      "tag_id":155
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":158
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":161
    },{
      "function":"__zone",
      "once_per_event":true,
      "vtp_childContainers":["list",["map","publicId","GTM-K3TK52L","nickname","Deseret zone"]],
      "vtp_boundaries":["list",["zb","_re",["macro",75],"deseret",false,true]],
      "vtp_enableTypeRestrictions":true,
      "vtp_whitelistedTypes":["list",["map","typeId","awct"],["map","typeId","gcs"],["map","typeId","awcc"],["map","typeId","ac360"],["map","typeId","flc"],["map","typeId","sp"],["map","typeId","fls"],["map","typeId","ts"],["map","typeId","ua"],["map","typeId","gfct"],["map","typeId","adm"],["map","typeId","opt"],["map","typeId","gclidw"],["map","typeId","ga"],["map","typeId","ecl"],["map","typeId","ctv"],["map","typeId","c"],["map","typeId","d"],["map","typeId","e"],["map","typeId","f"],["map","typeId","j"],["map","typeId","k"],["map","typeId","r"],["map","typeId","u"],["map","typeId","v"],["map","typeId","uv"],["map","typeId","aev"],["map","typeId","gas"],["map","typeId","m6d"],["map","typeId","scp"],["map","typeId","veip"],["map","typeId","mpr"],["map","typeId","qpx"],["map","typeId","placedPixel"],["map","typeId","vdc"],["map","typeId","sfr"],["map","typeId","img"],["map","typeId","tdlc"],["map","typeId","tpdpx"],["map","typeId","tdsc"],["map","typeId","crto"],["map","typeId","k50Init"],["map","typeId","sca"],["map","typeId","bzi"],["map","typeId","uspt"],["map","typeId","okt"],["map","typeId","yieldify"],["map","typeId","dstag"],["map","typeId","cts"],["map","typeId","mpm"],["map","typeId","baut"],["map","typeId","bsa"],["map","typeId","pijs"],["map","typeId","bb"],["map","typeId","omc"],["map","typeId","nudge"],["map","typeId","abtGeneric"],["map","typeId","ta"],["map","typeId","tc"],["map","typeId","sfc"],["map","typeId","svw"],["map","typeId","xpsh"],["map","typeId","sfl"],["map","typeId","infinity"],["map","typeId","asp"],["map","typeId","ll"],["map","typeId","messagemate"],["map","typeId","qca"],["map","typeId","uslt"],["map","typeId","twitter_website_tag"],["map","typeId","ndcr"],["map","typeId","mf"],["map","typeId","qcm"],["map","typeId","html"],["map","typeId","ela"],["map","typeId","vei"],["map","typeId","ms"],["map","typeId","scjs"],["map","typeId","ljs"],["map","typeId","hjtc"],["map","typeId","pntr"],["map","typeId","fxm"],["map","typeId","awc"],["map","typeId","cegg"],["map","typeId","pa"],["map","typeId","shareaholic"],["map","typeId","tdc"],["map","typeId","pc"],["map","typeId","awj"],["map","typeId","csm"]],
      "tag_id":162
    },{
      "function":"__zone",
      "once_per_event":true,
      "vtp_childContainers":["list",["map","publicId","GTM-TWPZVJD","nickname","Schema zone"]],
      "vtp_boundaries":["list",["zb","_re",["macro",75],"vox|theverge|sbnation|eater|curbed|polygon",false,true]],
      "vtp_enableTypeRestrictions":true,
      "vtp_whitelistedTypes":["list",["map","typeId","gaawc"],["map","typeId","awct"],["map","typeId","gaawe"],["map","typeId","gcs"],["map","typeId","awcc"],["map","typeId","ac360"],["map","typeId","flc"],["map","typeId","sp"],["map","typeId","fls"],["map","typeId","ts"],["map","typeId","ua"],["map","typeId","gfct"],["map","typeId","adm"],["map","typeId","opt"],["map","typeId","gclidw"],["map","typeId","ga"],["map","typeId","hl"],["map","typeId","sdl"],["map","typeId","fsl"],["map","typeId","cl"],["map","typeId","tg"],["map","typeId","tl"],["map","typeId","ecl"],["map","typeId","jel"],["map","typeId","ytl"],["map","typeId","lcl"],["map","typeId","evl"],["map","typeId","vis"],["map","typeId","ctv"],["map","typeId","remm"],["map","typeId","smm"],["map","typeId","c"],["map","typeId","d"],["map","typeId","e"],["map","typeId","f"],["map","typeId","j"],["map","typeId","k"],["map","typeId","r"],["map","typeId","u"],["map","typeId","v"],["map","typeId","uv"],["map","typeId","dbg"],["map","typeId","ev"],["map","typeId","cid"],["map","typeId","aev"],["map","typeId","gas"],["map","typeId","html"]],
      "tag_id":163
    },{
      "function":"__zone",
      "once_per_event":true,
      "vtp_childContainers":["list",["map","publicId","GTM-PKS6VGF","nickname","REVOLT zone"]],
      "vtp_boundaries":["list",["zb","_re",["macro",75],"revolt\\.tv|revoltdev\\.chorus\\.build",false,false]],
      "vtp_enableTypeRestrictions":false,
      "tag_id":164
    },{
      "function":"__zone",
      "once_per_event":true,
      "vtp_childContainers":["list",["map","publicId","GTM-M7SB6S3","nickname","Chicago Sun Times zone"]],
      "vtp_boundaries":["list",["zb","_re",["macro",75],"chicago\\.suntimes\\.com",false,true]],
      "vtp_enableTypeRestrictions":true,
      "vtp_whitelistedTypes":["list",["map","typeId","awct"],["map","typeId","gcs"],["map","typeId","awcc"],["map","typeId","ac360"],["map","typeId","flc"],["map","typeId","sp"],["map","typeId","fls"],["map","typeId","ts"],["map","typeId","ua"],["map","typeId","gfct"],["map","typeId","adm"],["map","typeId","opt"],["map","typeId","gclidw"],["map","typeId","ga"],["map","typeId","hl"],["map","typeId","sdl"],["map","typeId","fsl"],["map","typeId","cl"],["map","typeId","tg"],["map","typeId","tl"],["map","typeId","ecl"],["map","typeId","jel"],["map","typeId","ytl"],["map","typeId","evl"],["map","typeId","vis"],["map","typeId","ctv"],["map","typeId","remm"],["map","typeId","smm"],["map","typeId","c"],["map","typeId","d"],["map","typeId","e"],["map","typeId","f"],["map","typeId","j"],["map","typeId","k"],["map","typeId","r"],["map","typeId","u"],["map","typeId","v"],["map","typeId","uv"],["map","typeId","dbg"],["map","typeId","ev"],["map","typeId","cid"],["map","typeId","aev"],["map","typeId","gas"],["map","typeId","crto"],["map","typeId","k50Init"],["map","typeId","sca"],["map","typeId","bzi"],["map","typeId","uspt"],["map","typeId","okt"],["map","typeId","yieldify"],["map","typeId","dstag"],["map","typeId","cts"],["map","typeId","mpm"],["map","typeId","baut"],["map","typeId","bsa"],["map","typeId","pijs"],["map","typeId","bb"],["map","typeId","omc"],["map","typeId","nudge"],["map","typeId","abtGeneric"],["map","typeId","ta"],["map","typeId","tc"],["map","typeId","sfc"],["map","typeId","svw"],["map","typeId","xpsh"],["map","typeId","sfl"],["map","typeId","infinity"],["map","typeId","asp"],["map","typeId","ll"],["map","typeId","messagemate"],["map","typeId","qca"],["map","typeId","uslt"],["map","typeId","twitter_website_tag"],["map","typeId","ndcr"],["map","typeId","mf"],["map","typeId","qcm"],["map","typeId","ela"],["map","typeId","vei"],["map","typeId","ms"],["map","typeId","scjs"],["map","typeId","ljs"],["map","typeId","hjtc"],["map","typeId","pntr"],["map","typeId","fxm"],["map","typeId","awc"],["map","typeId","cegg"],["map","typeId","pa"],["map","typeId","shareaholic"],["map","typeId","tdc"],["map","typeId","pc"],["map","typeId","awj"],["map","typeId","csm"],["map","typeId","m6d"],["map","typeId","scp"],["map","typeId","veip"],["map","typeId","mpr"],["map","typeId","qpx"],["map","typeId","placedPixel"],["map","typeId","vdc"],["map","typeId","sfr"],["map","typeId","img"],["map","typeId","tdlc"],["map","typeId","tpdpx"],["map","typeId","tdsc"]],
      "tag_id":165
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"1434782_127",
      "tag_id":166
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"1434782_130",
      "tag_id":167
    },{
      "function":"__cl",
      "tag_id":168
    },{
      "function":"__cl",
      "tag_id":169
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=window._fbq||(window._fbq=[]);if(!a.loaded){var b=document.createElement(\"script\");b.async=!0;b.src=\"https:\/\/connect.facebook.net\/en_US\/fbds.js\";var c=document.getElementsByTagName(\"script\")[0];c.parentNode.insertBefore(b,c);a.loaded=!0}a.push([\"addPixelId\",\"594981607301768\"])})();window._fbq=window._fbq||[];window._fbq.push([\"track\",\"PixelInitialized\",{}]);window._fbq.push([\"track\",\"6026192431231\",{value:\"1.00\",currency:\"USD\"}]);\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" alt=\"\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=594981607301768\u0026amp;ev=PixelInitialized\"\u003E\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":67
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript id=\"analytics-chartbeat\" type=\"text\/gtmscript\"\u003Evar _sf_async_config={};_sf_async_config.uid=",["escape",["macro",90],8,16],";_sf_async_config.domain=",["escape",["macro",91],8,16],";_sf_async_config.useCanonical=!0;_sf_async_config.authors=",["escape",["macro",92],8,16],";_sf_async_config.zone=",["escape",["macro",93],8,16],";(function(){window._sf_endpt=(new Date).getTime();var a=document.createElement(\"script\");a.setAttribute(\"language\",\"javascript\");a.setAttribute(\"type\",\"text\/javascript\");a.setAttribute(\"src\",\"https:\/\/static.chartbeat.com\/js\/chartbeat.js\");document.body.appendChild(a)})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":68
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar _comscore=_comscore||[];_comscore.push({c1:\"2\",c2:\"7976662\"});(function(){var a=document.createElement(\"script\"),b=document.getElementsByTagName(\"script\")[0];a.async=!0;a.src=\"https:\/\/sb.scorecardresearch.com\/beacon.js\";b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E\n\u003Cnoscript\u003E\n  \u003Cimg src=\"https:\/\/sb.scorecardresearch.com\/p?c1=2\u0026amp;c2=7976662\u0026amp;cv=2.0\u0026amp;cj=1\"\u003E\n\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":70
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript data-gtmsrc=\"https:\/\/cdn0.vox-cdn.com\/packs\/chorus_sdk-789f86740edd88f79bfa.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(b){var c=window[b]||[],d=window.Chorus_SDK||{},e=window[b]={push:function(a){\"function\"===typeof a\u0026\u0026a(d)}};c.forEach(function(a){e.push(a)})})(\"chorusSDK\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":98
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"nzjqi\");twq(\"track\",\"PageView\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":112
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"nzjql\");twq(\"track\",\"PageView\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":113
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"nzjqm\");twq(\"track\",\"PageView\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":114
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"nzjqo\");twq(\"track\",\"PageView\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":115
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(){var a=window.SambaTV=window.SambaTV||[];if(!a.track){if(a.invoked)return void(window.console\u0026\u0026window.console.error\u0026\u0026window.console.error(\"Samba Metrics snippet included twice.\"));a.invoked=!0;a.methods=\"track Impression Purchase Register Click Login Register\".split(\" \");a.factory=function(e){return function(){var b=Array.prototype.slice.call(arguments);return b.unshift(e),a.push(b),a}};for(var c=0;c\u003Ca.methods.length;c++){var d=a.methods[c];a[d]=a.factory(d)}a.load=function(a){var b=document.createElement(\"script\");\nb.type=\"text\/javascript\";b.async=!0;b.src=(\"https:\"===document.location.protocol?\"https:\/\/\":\"http:\/\/\")+\"tag.mtrcs.samba.tv\/v3\/tag\/\"+a+\"\/sambaTag.js\";a=document.getElementsByTagName(\"script\")[0];a.parentNode.insertBefore(b,a)};a.attrs||(a.attrs={});a.SNIPPET_VERSION=\"1.0.1\";a.load(\"vox\/vox-curbed\")}}();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":129
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(){var a=window.SambaTV=window.SambaTV||[];if(!a.track){if(a.invoked)return void(window.console\u0026\u0026window.console.error\u0026\u0026window.console.error(\"Samba Metrics snippet included twice.\"));a.invoked=!0;a.methods=\"track Impression Purchase Register Click Login Register\".split(\" \");a.factory=function(e){return function(){var b=Array.prototype.slice.call(arguments);return b.unshift(e),a.push(b),a}};for(var c=0;c\u003Ca.methods.length;c++){var d=a.methods[c];a[d]=a.factory(d)}a.load=function(a){var b=document.createElement(\"script\");\nb.type=\"text\/javascript\";b.async=!0;b.src=(\"https:\"===document.location.protocol?\"https:\/\/\":\"http:\/\/\")+\"tag.mtrcs.samba.tv\/v3\/tag\/\"+a+\"\/sambaTag.js\";a=document.getElementsByTagName(\"script\")[0];a.parentNode.insertBefore(b,a)};a.attrs||(a.attrs={});a.SNIPPET_VERSION=\"1.0.1\";a.load(\"vox\/vox-eater\")}}();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":130
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(){var a=window.SambaTV=window.SambaTV||[];if(!a.track){if(a.invoked)return void(window.console\u0026\u0026window.console.error\u0026\u0026window.console.error(\"Samba Metrics snippet included twice.\"));a.invoked=!0;a.methods=\"track Impression Purchase Register Click Login Register\".split(\" \");a.factory=function(e){return function(){var b=Array.prototype.slice.call(arguments);return b.unshift(e),a.push(b),a}};for(var c=0;c\u003Ca.methods.length;c++){var d=a.methods[c];a[d]=a.factory(d)}a.load=function(a){var b=document.createElement(\"script\");\nb.type=\"text\/javascript\";b.async=!0;b.src=(\"https:\"===document.location.protocol?\"https:\/\/\":\"http:\/\/\")+\"tag.mtrcs.samba.tv\/v3\/tag\/\"+a+\"\/sambaTag.js\";a=document.getElementsByTagName(\"script\")[0];a.parentNode.insertBefore(b,a)};a.attrs||(a.attrs={});a.SNIPPET_VERSION=\"1.0.1\";a.load(\"vox\/vox-vox\")}}();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":131
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(){var a=window.SambaTV=window.SambaTV||[];if(!a.track){if(a.invoked)return void(window.console\u0026\u0026window.console.error\u0026\u0026window.console.error(\"Samba Metrics snippet included twice.\"));a.invoked=!0;a.methods=\"track Impression Purchase Register Click Login Register\".split(\" \");a.factory=function(e){return function(){var b=Array.prototype.slice.call(arguments);return b.unshift(e),a.push(b),a}};for(var c=0;c\u003Ca.methods.length;c++){var d=a.methods[c];a[d]=a.factory(d)}a.load=function(a){var b=document.createElement(\"script\");\nb.type=\"text\/javascript\";b.async=!0;b.src=(\"https:\"===document.location.protocol?\"https:\/\/\":\"http:\/\/\")+\"tag.mtrcs.samba.tv\/v3\/tag\/\"+a+\"\/sambaTag.js\";a=document.getElementsByTagName(\"script\")[0];a.parentNode.insertBefore(b,a)};a.attrs||(a.attrs={});a.SNIPPET_VERSION=\"1.0.1\";a.load(\"vox\/vox-polygon\")}}();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":133
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(){var a=window.SambaTV=window.SambaTV||[];if(!a.track){if(a.invoked)return void(window.console\u0026\u0026window.console.error\u0026\u0026window.console.error(\"Samba Metrics snippet included twice.\"));a.invoked=!0;a.methods=\"track Impression Purchase Register Click Login Register\".split(\" \");a.factory=function(e){return function(){var b=Array.prototype.slice.call(arguments);return b.unshift(e),a.push(b),a}};for(var c=0;c\u003Ca.methods.length;c++){var d=a.methods[c];a[d]=a.factory(d)}a.load=function(a){var b=document.createElement(\"script\");\nb.type=\"text\/javascript\";b.async=!0;b.src=(\"https:\"===document.location.protocol?\"https:\/\/\":\"http:\/\/\")+\"tag.mtrcs.samba.tv\/v3\/tag\/\"+a+\"\/sambaTag.js\";a=document.getElementsByTagName(\"script\")[0];a.parentNode.insertBefore(b,a)};a.attrs||(a.attrs={});a.SNIPPET_VERSION=\"1.0.1\";a.load(\"vox\/vox-recode\")}}();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":134
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(){var a=window.SambaTV=window.SambaTV||[];if(!a.track){if(a.invoked)return void(window.console\u0026\u0026window.console.error\u0026\u0026window.console.error(\"Samba Metrics snippet included twice.\"));a.invoked=!0;a.methods=\"track Impression Purchase Register Click Login Register\".split(\" \");a.factory=function(e){return function(){var b=Array.prototype.slice.call(arguments);return b.unshift(e),a.push(b),a}};for(var c=0;c\u003Ca.methods.length;c++){var d=a.methods[c];a[d]=a.factory(d)}a.load=function(a){var b=document.createElement(\"script\");\nb.type=\"text\/javascript\";b.async=!0;b.src=(\"https:\"===document.location.protocol?\"https:\/\/\":\"http:\/\/\")+\"tag.mtrcs.samba.tv\/v3\/tag\/\"+a+\"\/sambaTag.js\";a=document.getElementsByTagName(\"script\")[0];a.parentNode.insertBefore(b,a)};a.attrs||(a.attrs={});a.SNIPPET_VERSION=\"1.0.1\";a.load(\"vox\/vox-sbNation\")}}();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":135
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(){var a=window.SambaTV=window.SambaTV||[];if(!a.track){if(a.invoked)return void(window.console\u0026\u0026window.console.error\u0026\u0026window.console.error(\"Samba Metrics snippet included twice.\"));a.invoked=!0;a.methods=\"track Impression Purchase Register Click Login Register\".split(\" \");a.factory=function(e){return function(){var b=Array.prototype.slice.call(arguments);return b.unshift(e),a.push(b),a}};for(var c=0;c\u003Ca.methods.length;c++){var d=a.methods[c];a[d]=a.factory(d)}a.load=function(a){var b=document.createElement(\"script\");\nb.type=\"text\/javascript\";b.async=!0;b.src=(\"https:\"===document.location.protocol?\"https:\/\/\":\"http:\/\/\")+\"tag.mtrcs.samba.tv\/v3\/tag\/\"+a+\"\/sambaTag.js\";a=document.getElementsByTagName(\"script\")[0];a.parentNode.insertBefore(b,a)};a.attrs||(a.attrs={});a.SNIPPET_VERSION=\"1.0.1\";a.load(\"vox\/vox-theRinger\")}}();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":136
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(){var a=window.SambaTV=window.SambaTV||[];if(!a.track){if(a.invoked)return void(window.console\u0026\u0026window.console.error\u0026\u0026window.console.error(\"Samba Metrics snippet included twice.\"));a.invoked=!0;a.methods=\"track Impression Purchase Register Click Login Register\".split(\" \");a.factory=function(e){return function(){var b=Array.prototype.slice.call(arguments);return b.unshift(e),a.push(b),a}};for(var c=0;c\u003Ca.methods.length;c++){var d=a.methods[c];a[d]=a.factory(d)}a.load=function(a){var b=document.createElement(\"script\");\nb.type=\"text\/javascript\";b.async=!0;b.src=(\"https:\"===document.location.protocol?\"https:\/\/\":\"http:\/\/\")+\"tag.mtrcs.samba.tv\/v3\/tag\/\"+a+\"\/sambaTag.js\";a=document.getElementsByTagName(\"script\")[0];a.parentNode.insertBefore(b,a)};a.attrs||(a.attrs={});a.SNIPPET_VERSION=\"1.0.1\";a.load(\"vox\/vox-theVerge\")}}();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":138
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(){var a=window.SambaTV=window.SambaTV||[];if(!a.track){if(a.invoked)return void(window.console\u0026\u0026window.console.error\u0026\u0026window.console.error(\"Samba Metrics snippet included twice.\"));a.invoked=!0;a.methods=\"track Impression Purchase Register Click Login Register\".split(\" \");a.factory=function(e){return function(){var b=Array.prototype.slice.call(arguments);return b.unshift(e),a.push(b),a}};for(var c=0;c\u003Ca.methods.length;c++){var d=a.methods[c];a[d]=a.factory(d)}a.load=function(a){var b=document.createElement(\"script\");\nb.type=\"text\/javascript\";b.async=!0;b.src=(\"https:\"===document.location.protocol?\"https:\/\/\":\"http:\/\/\")+\"tag.mtrcs.samba.tv\/v3\/tag\/\"+a+\"\/sambaTag.js\";a=document.getElementsByTagName(\"script\")[0];a.parentNode.insertBefore(b,a)};a.attrs||(a.attrs={});a.SNIPPET_VERSION=\"1.0.1\";a.load(\"vox\/vox-voxSubSection\")}}();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":139
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=window._sf_async_config=window._sf_async_config||{};a.uid=38241;a.domain=\"chicago.suntimes.com\";a.useCanonical=!0;a.useCanonicalDomain=!0;a.sections=",["escape",["macro",93],8,16],";a.authors=",["escape",["macro",92],8,16],";a=window._cbv||(window._cbv=[]);a.push([\"autoDetectYouTubeIframes\"]);a=document.createElement(\"script\");var b=document.getElementsByTagName(\"script\")[0];a.type=\"text\/javascript\";a.async=!0;a.src=\"\/\/static.chartbeat.com\/js\/chartbeat_video.js\";b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E\n\n\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":150
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript data-gtmsrc=\"https:\/\/ak.sail-horizon.com\/spm\/spm.v1.min.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003ESailthru.init({customerId:\"cb2dcb87070aeb54eddb31b0362745ed\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":152
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"146698685967099\");fbq(\"set\",\"agent\",\"tmgoogletagmanager\",\"146698685967099\");fbq(\"track\",\"PageView\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":154
    },{
      "function":"__html",
      "setup_tags":["list",["tag",56,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efunction loadChartbeatABTesting(){var a=document.createElement(\"script\");document.getElementsByTagName(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"\/\/static.chartbeat.com\/js\/chartbeat_mab.js\";document.body.appendChild(a)}loadChartbeatABTesting();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":160
    }],
  "predicates":[{
      "function":"_eq",
      "arg0":["macro",7],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",24],
      "arg1":"gtm.linkClick"
    },{
      "function":"_eq",
      "arg0":["macro",5],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",17],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",36],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",37],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",38],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",24],
      "arg1":"social"
    },{
      "function":"_eq",
      "arg0":["macro",24],
      "arg1":"gtm.js"
    },{
      "function":"_re",
      "arg0":["macro",39],
      "arg1":".*"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"true"
    },{
      "function":"_cn",
      "arg0":["macro",39],
      "arg1":"apps.voxmedia.com\/"
    },{
      "function":"_eq",
      "arg0":["macro",63],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",24],
      "arg1":"virtualPageView"
    },{
      "function":"_eq",
      "arg0":["macro",66],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",24],
      "arg1":"gtm.formSubmit"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"link:related"
    },{
      "function":"_eq",
      "arg0":["macro",70],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",22],
      "arg1":"undefined"
    },{
      "function":"_cn",
      "arg0":["macro",64],
      "arg1":"facebook"
    },{
      "function":"_eq",
      "arg0":["macro",60],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",72],
      "arg1":"social-buttons__more"
    },{
      "function":"_re",
      "arg0":["macro",72],
      "arg1":"c-entry-update-bar__follow|rss"
    },{
      "function":"_re",
      "arg0":["macro",73],
      "arg1":"(^$|((^|,)1434782_130($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",75],
      "arg1":"recode|eater|verge|polygon"
    },{
      "function":"_cn",
      "arg0":["macro",39],
      "arg1":"sports-bar-chain-to-pay-6-8m-over-tip-skimming-and-wage-violations"
    },{
      "function":"_re",
      "arg0":["macro",75],
      "arg1":"theverge"
    },{
      "function":"_re",
      "arg0":["macro",23],
      "arg1":"Post|Preview"
    },{
      "function":"_eq",
      "arg0":["macro",24],
      "arg1":"gtm.click"
    },{
      "function":"_re",
      "arg0":["macro",39],
      "arg1":"la.curbed.com\/maps\/things-to-do-kids-los-angeles"
    },{
      "function":"_re",
      "arg0":["macro",72],
      "arg1":"recirc-module__link"
    },{
      "function":"_re",
      "arg0":["macro",72],
      "arg1":"css-vote-button"
    },{
      "function":"_re",
      "arg0":["macro",72],
      "arg1":"pds-return-poll"
    },{
      "function":"_re",
      "arg0":["macro",72],
      "arg1":"css-view-results"
    },{
      "function":"_re",
      "arg0":["macro",75],
      "arg1":"curbed"
    },{
      "function":"_re",
      "arg0":["macro",72],
      "arg1":"city-boxes|city-title",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",76],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",77],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",24],
      "arg1":"analyticsEvent"
    },{
      "function":"_eq",
      "arg0":["macro",24],
      "arg1":"GAEvent"
    },{
      "function":"_re",
      "arg0":["macro",75],
      "arg1":"chicago\\.suntimes\\.com"
    },{
      "function":"_re",
      "arg0":["macro",39],
      "arg1":"vox--com.sbn.sb13.k8s.sbndev.net",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",75],
      "arg1":"deseret",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",24],
      "arg1":"embedPageView"
    },{
      "function":"_cn",
      "arg0":["macro",39],
      "arg1":"apps.voxmedia.com"
    },{
      "function":"_cn",
      "arg0":["macro",39],
      "arg1":"suntimes.chorus.build"
    },{
      "function":"_eq",
      "arg0":["macro",24],
      "arg1":"gtm.load"
    },{
      "function":"_cn",
      "arg0":["macro",39],
      "arg1":"\/ad\/"
    },{
      "function":"_re",
      "arg0":["macro",75],
      "arg1":"chicago\\.suntimes\\.com",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",75],
      "arg1":"revolt\\.tv",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",75],
      "arg1":"revolt\\.tv"
    },{
      "function":"_eq",
      "arg0":["macro",19],
      "arg1":"true"
    },{
      "function":"_cn",
      "arg0":["macro",75],
      "arg1":"eater"
    },{
      "function":"_cn",
      "arg0":["macro",75],
      "arg1":"polygon"
    },{
      "function":"_cn",
      "arg0":["macro",75],
      "arg1":"verge"
    },{
      "function":"_cn",
      "arg0":["macro",75],
      "arg1":"recode"
    },{
      "function":"_eq",
      "arg0":["macro",28],
      "arg1":"homepage"
    },{
      "function":"_re",
      "arg0":["macro",75],
      "arg1":"eater"
    },{
      "function":"_re",
      "arg0":["macro",75],
      "arg1":"vox"
    },{
      "function":"_re",
      "arg0":["macro",39],
      "arg1":"www.vox.com\/$|vox--com.sbn.sb8.k8s.sbndev.net\/|vox--com.sbn.sb8.k8s.sbndev.net\/culture\/2019\/1\/6\/18171367\/golden-globes-2019-regina-king-acceptance-speech|www.vox.com\/2014\/12\/31\/7474935\/best-movies-2014",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",75],
      "arg1":"polygon"
    },{
      "function":"_re",
      "arg0":["macro",75],
      "arg1":"recode"
    },{
      "function":"_re",
      "arg0":["macro",75],
      "arg1":"sbnation"
    },{
      "function":"_re",
      "arg0":["macro",75],
      "arg1":"theringer"
    },{
      "function":"_re",
      "arg0":["macro",39],
      "arg1":"www.vox.com\/culture",
      "ignore_case":true
    }],
  "rules":[
    [["if",0,1],["add",16]],
    [["if",8],["unless",5,6,7],["add",2]],
    [["if",9],["add",17,18,31,32,33,34,35,36,37,38]],
    [["if",9,10],["unless",11,12],["add",19,21,39,41]],
    [["if",14],["unless",13],["add",3,41]],
    [["if",16],["unless",15],["add",0]],
    [["if",1,17],["add",20]],
    [["if",1],["unless",2],["add",4],["block",16]],
    [["if",1],["unless",3],["add",13],["block",16]],
    [["if",1],["unless",3,4],["add",14],["block",16,13]],
    [["if",1],["unless",19],["add",22]],
    [["if",9,10,20],["unless",11],["add",15],["block",41]],
    [["if",1,22],["add",5]],
    [["if",1,23,24],["add",6]],
    [["if",9],["unless",11,25],["add",23]],
    [["if",9,26],["add",24]],
    [["if",9,27],["add",25]],
    [["if",28,29],["add",1]],
    [["if",9,30],["add",26]],
    [["if",1,31],["add",7]],
    [["if",1,32],["add",8]],
    [["if",1,33],["add",9]],
    [["if",1,34],["add",10]],
    [["if",9,35],["add",27]],
    [["if",29,36],["add",11]],
    [["if",39],["unless",37,38],["add",12]],
    [["if",40],["add",12]],
    [["if",9,41],["add",28,56,57,58,59],["block",39]],
    [["if",9,42],["add",29]],
    [["if",9,43],["add",30],["block",39,41]],
    [["if",44],["add",39]],
    [["if",47],["unless",11,45,46],["add",40]],
    [["if",47,52],["add",42]],
    [["if",9,53],["unless",11],["add",43]],
    [["if",9,54],["unless",11],["add",44]],
    [["if",9,55],["unless",11],["add",45]],
    [["if",9,56],["unless",11],["add",46]],
    [["if",9,35,57],["add",47]],
    [["if",9,57,58],["add",48]],
    [["if",9,59,60],["add",49]],
    [["if",9,57,61],["add",50]],
    [["if",9,57,62],["add",51]],
    [["if",9,57,63],["add",52]],
    [["if",9,57,64],["add",53]],
    [["if",9,27,57],["add",54]],
    [["if",9,59,65],["add",55]],
    [["if",9,18],["block",21]],
    [["if",9,21],["block",15,39,58]],
    [["if",47,48],["block",40]],
    [["if",47,49],["block",40]],
    [["if",43,47],["block",40]],
    [["if",47,50],["block",40]],
    [["if",9,51],["block",41]]]
},
"runtime":[
[],[]
]



};
var aa,da=this||self,ea=function(a){return"boolean"==typeof a},fa=/^[\w+/_-]+[=]{0,2}$/,ha=null;var ia=function(){},ja=function(a){return"function"==typeof a},ka=function(a){return"string"==typeof a},la=function(a){return"number"==typeof a&&!isNaN(a)},ma=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},oa=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},pa=function(a,b){if(a&&ma(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},qa=function(a,b){if(!la(a)||
!la(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},sa=function(a,b){for(var c=new ra,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},ta=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},ua=function(a){return Math.round(Number(a))||0},va=function(a){return"false"==String(a).toLowerCase()?!1:!!a},wa=function(a){var b=[];if(ma(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},xa=function(a){return a?
a.replace(/^\s+|\s+$/g,""):""},ya=function(){return(new Date).getTime()},ra=function(){this.prefix="gtm.";this.values={}};ra.prototype.set=function(a,b){this.values[this.prefix+a]=b};ra.prototype.get=function(a){return this.values[this.prefix+a]};ra.prototype.contains=function(a){return void 0!==this.get(a)};
var za=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Aa=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},Da=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Ea=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Fa=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Ga=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Ha=function(a){if(null==a)return String(a);var b=Ga.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Ia=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Ja=function(a){if(!a||"object"!=Ha(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Ia(a,"constructor")&&!Ia(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Ia(a,b)},f=function(a,b){var c=b||("array"==Ha(a)?[]:{}),d;for(d in a)if(Ia(a,d)){var e=a[d];"array"==Ha(e)?("array"!=Ha(c[d])&&(c[d]=[]),c[d]=f(e,c[d])):Ja(e)?(Ja(c[d])||(c[d]={}),c[d]=f(e,c[d])):c[d]=e}return c};
var Ka=[],La={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},Ma=function(a){return La[a]},Na=/[\x00\x22\x26\x27\x3c\x3e]/g;var Ua=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,Va={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},Wa=function(a){return Va[a]};
Ka[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(Ua,Wa)+"'"}};var db=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,eb={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},fb=function(a){return eb[a]};Ka[16]=function(a){return a};var ib=[],jb=[],kb=[],lb=[],mb=[],ob={},pb,qb,rb,sb=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},tb=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=!!ob[c],e={},g;for(g in a)a.hasOwnProperty(g)&&0===g.indexOf("vtp_")&&(e[d?g:g.substr(4)]=a[g]);return d?ob[c](e):(void 0)(c,e,b)},vb=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=ub(a[e],b,c));return d},
wb=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=ob[b];return c?c.priorityOverride||0:0},ub=function(a,b,c){if(ma(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(ub(a[e],b,c));return d;case "macro":var g=a[1];if(c[g])return;var h=ib[g];if(!h||b.Bc(h))return;c[g]=!0;try{var k=vb(h,b,c);k.vtp_gtmEventId=b.id;d=tb(k,b);rb&&(d=rb.Ff(d,k))}catch(w){b.be&&b.be(w,Number(g)),d=!1}c[g]=!1;return d;
case "map":d={};for(var l=1;l<a.length;l+=2)d[ub(a[l],b,c)]=ub(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,n=1;n<a.length;n++){var q=ub(a[n],b,c);qb&&(m=m||q===qb.xb);d.push(q)}return qb&&m?qb.If(d):d.join("");case "escape":d=ub(a[1],b,c);if(qb&&ma(a[1])&&"macro"===a[1][0]&&qb.jg(a))return qb.vg(d);d=String(d);for(var t=2;t<a.length;t++)Ka[a[t]]&&(d=Ka[a[t]](d));return d;case "tag":var p=a[1];if(!lb[p])throw Error("Unable to resolve tag reference "+p+".");return d={Od:a[2],index:p};case "zb":var r=
{arg0:a[2],arg1:a[3],ignore_case:a[5]};r["function"]=a[1];var v=xb(r,b,c);a[4]&&(v=!v);return v;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},xb=function(a,b,c){try{return pb(vb(a,b,c))}catch(d){JSON.stringify(a)}return null};var yb=function(){var a=function(b){return{toString:function(){return b}}};return{ed:a("convert_case_to"),fd:a("convert_false_to"),gd:a("convert_null_to"),hd:a("convert_true_to"),jd:a("convert_undefined_to"),dh:a("debug_mode_metadata"),la:a("function"),Te:a("instance_name"),Ue:a("live_only"),Ve:a("malware_disabled"),We:a("metadata"),fh:a("original_vendor_template_id"),Xe:a("once_per_event"),Cd:a("once_per_load"),Dd:a("setup_tags"),Ed:a("tag_id"),Fd:a("teardown_tags")}}();var zb=null,Cb=function(a){function b(q){for(var t=0;t<q.length;t++)d[q[t]]=!0}var c=[],d=[];zb=Ab(a);for(var e=0;e<jb.length;e++){var g=jb[e],h=Bb(g);if(h){for(var k=g.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(g.block||[])}else null===h&&b(g.block||[])}for(var m=[],n=0;n<lb.length;n++)c[n]&&!d[n]&&(m[n]=!0);return m},Bb=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=zb(b[c]);if(!d)return null===d?null:!1}for(var e=a.unless||[],g=0;g<e.length;g++){var h=zb(e[g]);if(null===h)return null;
if(h)return!1}return!0},Ab=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=xb(kb[c],a));return b[c]}};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
for(var Fb="floor ceil round max min abs pow sqrt".split(" "),Gb=0;Gb<Fb.length;Gb++)Math.hasOwnProperty(Fb[Gb]);var u=window,C=document,Hb=navigator,Ib=C.currentScript&&C.currentScript.src,Jb=function(a,b){var c=u[a];u[a]=void 0===c?b:c;return u[a]},Kb=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},Lb=function(a,b,c){var d=C.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;Kb(d,b);c&&(d.onerror=c);var e;if(null===ha)b:{var g=da.document,h=g.querySelector&&g.querySelector("script[nonce]");
if(h){var k=h.nonce||h.getAttribute("nonce");if(k&&fa.test(k)){ha=k;break b}}ha=""}e=ha;e&&d.setAttribute("nonce",e);var l=C.getElementsByTagName("script")[0]||C.body||C.head;l.parentNode.insertBefore(d,l);return d},Mb=function(){if(Ib){var a=Ib.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},Nb=function(a,b){var c=C.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=C.body&&C.body.lastChild||
C.body||C.head;d.parentNode.insertBefore(c,d);Kb(c,b);void 0!==a&&(c.src=a);return c},Ob=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},D=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},Pb=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},G=function(a){u.setTimeout(a,0)},Qb=function(a,b){return a&&
b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},Rb=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},Sb=function(a){var b=C.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},Tb=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var g=a,h=0;g&&h<=c;h++){if(d[String(g.tagName).toLowerCase()])return g;
g=g.parentElement}return null},Ub=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var H={$b:"event_callback",Na:"event_timeout",W:"gtag.config",P:"allow_ad_personalization_signals",S:"cookie_expires",Ma:"cookie_update",xa:"session_duration"};var ic=/[A-Z]+/,jc=/\s/,kc=function(a){if(ka(a)&&(a=xa(a),!jc.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(ic.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],N:d}}}}},mc=function(a){for(var b={},c=0;c<a.length;++c){var d=kc(a[c]);d&&(b[d.id]=d)}lc(b);var e=[];ta(b,function(g,h){e.push(h)});return e};
function lc(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.N[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var nc={},oc=null,pc=Math.random();nc.i="GTM-W8JKW6";nc.Bb="941";var qc={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0,__paused:!0},rc="www.googletagmanager.com/gtm.js";var sc=rc,tc=null,uc=null,vc=null,wc="//www.googletagmanager.com/a?id="+nc.i+"&cv=160",xc={},zc={},Ac=function(){var a=oc.sequence||0;oc.sequence=a+1;return a};var Bc={},Cc=function(a,b){Bc[a]=Bc[a]||[];Bc[a][b]=!0},Dc=function(a){for(var b=[],c=Bc[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};
var Ec=function(){return"&tc="+lb.filter(function(a){return a}).length},Nc=function(){Fc&&(u.clearTimeout(Fc),Fc=void 0);void 0===Gc||Hc[Gc]&&!Ic||(Jc[Gc]||Kc.lg()||0>=Lc--?(Cc("GTM",1),Jc[Gc]=!0):(Kc.Gg(),Ob(Mc()),Hc[Gc]=!0,Ic=""))},Mc=function(){var a=Gc;if(void 0===a)return"";var b=Dc("GTM"),c=Dc("TAGGING");return[Oc,Hc[a]?"":"&es=1",Pc[a],b?"&u="+b:"",c?"&ut="+c:"",Ec(),Ic,"&z=0"].join("")},Qc=function(){return[wc,"&v=3&t=t","&pid="+qa(),"&rv="+nc.Bb].join("")},Rc="0.005000">
Math.random(),Oc=Qc(),Sc=function(){Oc=Qc()},Hc={},Ic="",Gc=void 0,Pc={},Jc={},Fc=void 0,Kc=function(a,b){var c=0,d=0;return{lg:function(){if(c<a)return!1;ya()-d>=b&&(c=0);return c>=a},Gg:function(){ya()-d>=b&&(c=0);c++;d=ya()}}}(2,1E3),Lc=1E3,Tc=function(a,b){if(Rc&&!Jc[a]&&Gc!==a){Nc();Gc=a;Ic="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):"*";Pc[a]="&e="+c+"&eid="+a;Fc||(Fc=u.setTimeout(Nc,500))}},Uc=function(a,b,c){if(Rc&&!Jc[a]&&b){a!==Gc&&(Nc(),Gc=a);var d=String(b[yb.la]||"").replace(/_/g,
"");0===d.indexOf("cvt")&&(d="cvt");var e=c+d;Ic=Ic?Ic+"."+e:"&tr="+e;Fc||(Fc=u.setTimeout(Nc,500));2022<=Mc().length&&Nc()}};var Vc={},Wc=new ra,Xc={},Yc={},bd={name:"dataLayer",set:function(a,b){f(Zc(a,b),Xc);$c()},get:function(a){return ad(a,2)},reset:function(){Wc=new ra;Xc={};$c()}},ad=function(a,b){if(2!=b){var c=Wc.get(a);if(Rc){var d=cd(a);c!==d&&Cc("GTM",5)}return c}return cd(a)},cd=function(a,b,c){var d=a.split("."),e=!1,g=void 0;return e?g:ed(d)},ed=function(a){for(var b=Xc,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var hd=function(a,b){Yc.hasOwnProperty(a)||(Wc.set(a,b),f(Zc(a,b),Xc),$c())},Zc=function(a,b){for(var c={},d=c,e=a.split("."),g=0;g<e.length-1;g++)d=d[e[g]]={};d[e[e.length-1]]=b;return c},$c=function(a){ta(Yc,function(b,c){Wc.set(b,c);f(Zc(b,void 0),Xc);f(Zc(b,c),Xc);a&&delete Yc[b]})},id=function(a,b,c){Vc[a]=Vc[a]||{};var d=1!==c?cd(b):Wc.get(b);"array"===Ha(d)||"object"===Ha(d)?Vc[a][b]=f(d):Vc[a][b]=d},jd=function(a,b){if(Vc[a])return Vc[a][b]};var kd=function(){var a=!1;return a};var J=function(a,b,c,d){return(2===ld()||d||"http:"!=u.location.protocol?a:b)+c},ld=function(){var a=Mb(),b;if(1===a)a:{var c=sc;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,g=1,h=C.getElementsByTagName("script"),k=0;k<h.length&&100>k;k++){var l=h[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===g&&0===l.indexOf(d)&&(g=2)}}b=g}else b=a;return b};var zd=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),Ad={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},Bd={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},Cd="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var Ed=function(a){var b=ad("gtm.whitelist");b&&Cc("GTM",9);var c=b&&Fa(wa(b),Ad),d=ad("gtm.blacklist");d||(d=ad("tagTypeBlacklist"))&&Cc("GTM",3);
d?Cc("GTM",8):d=[];Dd()&&(d=wa(d),d.push("nonGooglePixels","nonGoogleScripts"));0<=oa(wa(d),"google")&&Cc("GTM",2);var e=d&&Fa(wa(d),Bd),g={};return function(h){var k=h&&h[yb.la];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==g[k])return g[k];var l=zc[k]||[],m=a(k,l);if(b){var n;if(n=m)a:{if(0>oa(c,k))if(l&&0<l.length)for(var q=0;q<l.length;q++){if(0>
oa(c,l[q])){Cc("GTM",11);n=!1;break a}}else{n=!1;break a}n=!0}m=n}var t=!1;if(d){var p=0<=oa(e,k);if(p)t=p;else{var r=sa(e,l||[]);r&&Cc("GTM",10);t=r}}var v=!m||t;v||!(0<=oa(l,"sandboxedScripts"))||c&&-1!==oa(c,"sandboxedScripts")||(v=sa(e,Cd));return g[k]=v}},Dd=function(){return zd.test(u.location&&u.location.hostname)};var Fd={Ff:function(a,b){b[yb.ed]&&"string"===typeof a&&(a=1==b[yb.ed]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(yb.gd)&&null===a&&(a=b[yb.gd]);b.hasOwnProperty(yb.jd)&&void 0===a&&(a=b[yb.jd]);b.hasOwnProperty(yb.hd)&&!0===a&&(a=b[yb.hd]);b.hasOwnProperty(yb.fd)&&!1===a&&(a=b[yb.fd]);return a}};var Gd={active:!0,isWhitelisted:function(){return!0}},Hd=function(a){var b=oc.zones;!b&&a&&(b=oc.zones=a());return b};var Id=!1,Jd=0,Kd=[];function Ld(a){if(!Id){var b=C.createEventObject,c="complete"==C.readyState,d="interactive"==C.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){Id=!0;for(var e=0;e<Kd.length;e++)G(Kd[e])}Kd.push=function(){for(var g=0;g<arguments.length;g++)G(arguments[g]);return 0}}}function Md(){if(!Id&&140>Jd){Jd++;try{C.documentElement.doScroll("left"),Ld()}catch(a){u.setTimeout(Md,50)}}}var Nd=function(a){Id?a():Kd.push(a)};var Od={},Pd={},Qd=function(a,b,c,d){if(!Pd[a]||qc[b]||"__zone"===b)return-1;var e={};Ja(d)&&(e=f(d,e));e.id=c;e.status="timeout";return Pd[a].tags.push(e)-1},Rd=function(a,b,c,d){if(Pd[a]){var e=Pd[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function Sd(a){for(var b=Od[a]||[],c=0;c<b.length;c++)b[c]();Od[a]={push:function(d){d(nc.i,Pd[a])}}}
var Vd=function(a,b,c){Pd[a]={tags:[]};ja(b)&&Td(a,b);c&&u.setTimeout(function(){return Sd(a)},Number(c));return Ud(a)},Td=function(a,b){Od[a]=Od[a]||[];Od[a].push(Aa(function(){return G(function(){b(nc.i,Pd[a])})}))};function Ud(a){var b=0,c=0,d=!1;return{add:function(){c++;return Aa(function(){b++;d&&b>=c&&Sd(a)})},pf:function(){d=!0;b>=c&&Sd(a)}}};var Wd=function(){function a(d){return!la(d)||0>d?0:d}if(!oc._li&&u.performance&&u.performance.timing){var b=u.performance.timing.navigationStart,c=la(bd.get("gtm.start"))?bd.get("gtm.start"):0;oc._li={cst:a(c-b),cbt:a(uc-b)}}};var $d=!1,ae=function(){return u.GoogleAnalyticsObject&&u[u.GoogleAnalyticsObject]},be=!1;
var ce=function(a){u.GoogleAnalyticsObject||(u.GoogleAnalyticsObject=a||"ga");var b=u.GoogleAnalyticsObject;if(u[b])u.hasOwnProperty(b)||Cc("GTM",12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);u[b]=c}Wd();return u[b]},de=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=ae();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var fe=function(){},ee=function(){return u.GoogleAnalyticsObject||"ga"};var he=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var ie=/:[0-9]+$/,je=function(a,b,c){for(var d=a.split("&"),e=0;e<d.length;e++){var g=d[e].split("=");if(decodeURIComponent(g[0]).replace(/\+/g," ")===b){var h=g.slice(1).join("=");return c?h:decodeURIComponent(h).replace(/\+/g," ")}}},me=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=ke(a.protocol)||ke(u.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:u.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&
(a.hostname=(a.hostname||u.location.hostname).replace(ie,"").toLowerCase());var g=b,h,k=ke(a.protocol);g&&(g=String(g).toLowerCase());switch(g){case "url_no_fragment":h=le(a);break;case "protocol":h=k;break;case "host":h=a.hostname.replace(ie,"").toLowerCase();if(c){var l=/^www\d*\./.exec(h);l&&l[0]&&(h=h.substr(l[0].length))}break;case "port":h=String(Number(a.port)||("http"==k?80:"https"==k?443:""));break;case "path":a.pathname||a.hostname||Cc("TAGGING",1);h="/"==a.pathname.substr(0,1)?a.pathname:
"/"+a.pathname;var m=h.split("/");0<=oa(d||[],m[m.length-1])&&(m[m.length-1]="");h=m.join("/");break;case "query":h=a.search.replace("?","");e&&(h=je(h,e,void 0));break;case "extension":var n=a.pathname.split(".");h=1<n.length?n[n.length-1]:"";h=h.split("/")[0];break;case "fragment":h=a.hash.replace("#","");break;default:h=a&&a.href}return h},ke=function(a){return a?a.replace(":","").toLowerCase():""},le=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},
ne=function(a){var b=C.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||Cc("TAGGING",1),c="/"+c);var d=b.hostname.replace(ie,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}};var te=function(a){};function se(a,b){a.containerId=nc.i;var c={type:"GENERIC",value:a};b.length&&(c.trace=b);return c};function ue(a,b,c,d){var e=lb[a],g=ve(a,b,c,d);if(!g)return null;var h=ub(e[yb.Dd],c,[]);if(h&&h.length){var k=h[0];g=ue(k.index,{J:g,U:1===k.Od?b.terminate:g,terminate:b.terminate},c,d)}return g}
function ve(a,b,c,d){function e(){if(g[yb.Ve])k();else{var w=vb(g,c,[]),x=Qd(c.id,String(g[yb.la]),Number(g[yb.Ed]),w[yb.We]),y=!1;w.vtp_gtmOnSuccess=function(){if(!y){y=!0;var B=ya()-z;Uc(c.id,lb[a],"5");Rd(c.id,x,"success",B);h()}};w.vtp_gtmOnFailure=function(){if(!y){y=!0;var B=ya()-z;Uc(c.id,lb[a],"6");Rd(c.id,x,"failure",B);k()}};w.vtp_gtmTagId=g.tag_id;
w.vtp_gtmEventId=c.id;Uc(c.id,g,"1");var A=function(B){var E=ya()-z;te(B);Uc(c.id,g,"7");Rd(c.id,x,"exception",E);y||(y=!0,k())};var z=ya();try{tb(w,c)}catch(B){A(B)}}}var g=lb[a],h=b.J,k=b.U,l=b.terminate;if(c.Bc(g))return null;var m=ub(g[yb.Fd],c,[]);if(m&&m.length){var n=m[0],q=ue(n.index,{J:h,U:k,terminate:l},c,d);if(!q)return null;h=q;k=2===n.Od?l:q}if(g[yb.Cd]||g[yb.Xe]){var t=g[yb.Cd]?mb:c.Qg,p=h,r=k;if(!t[a]){e=Aa(e);var v=we(a,t,e);h=v.J;k=v.U}return function(){t[a](p,r)}}return e}
function we(a,b,c){var d=[],e=[];b[a]=xe(d,e,c);return{J:function(){b[a]=ye;for(var g=0;g<d.length;g++)d[g]()},U:function(){b[a]=ze;for(var g=0;g<e.length;g++)e[g]()}}}function xe(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function ye(a){a()}function ze(a,b){b()};var Ce=function(a,b){for(var c=[],d=0;d<lb.length;d++)if(a.cb[d]){var e=lb[d];var g=b.add();try{var h=ue(d,{J:g,U:g,terminate:g},a,d);h?c.push({te:d,ie:wb(e),Qf:h}):(Ae(d,a),g())}catch(l){g()}}b.pf();c.sort(Be);for(var k=0;k<c.length;k++)c[k].Qf();return 0<c.length};function Be(a,b){var c,d=b.ie,e=a.ie;c=d>e?1:d<e?-1:0;var g;if(0!==c)g=c;else{var h=a.te,k=b.te;g=h>k?1:h<k?-1:0}return g}
function Ae(a,b){if(!Rc)return;var c=function(d){var e=b.Bc(lb[d])?"3":"4",g=ub(lb[d][yb.Dd],b,[]);g&&g.length&&c(g[0].index);Uc(b.id,lb[d],e);var h=ub(lb[d][yb.Fd],b,[]);h&&h.length&&c(h[0].index)};c(a);}
var De=!1,Ee=function(a,b,c,d,e){if("gtm.js"==b){if(De)return!1;De=!0}Tc(a,b);var g=Vd(a,d,e);id(a,"event",1);id(a,"ecommerce",1);id(a,"gtm");var h={id:a,name:b,Bc:Ed(c),cb:[],Qg:[],be:function(n){Cc("GTM",6);te(n)}};h.cb=Cb(h);var k=Ce(h,g);"gtm.js"!==b&&"gtm.sync"!==b||fe();if(!k)return k;for(var l=0;l<h.cb.length;l++)if(h.cb[l]){var m=
lb[l];if(m&&!qc[String(m[yb.la])])return!0}return!1};var Ge=function(a,b,c,d){var e=this;this.eventModel=a;this.containerConfig=c||{};this.targetConfig=b||{};this.globalConfig=d||{};this.getWithConfig=function(g){if(e.eventModel.hasOwnProperty(g))return e.eventModel[g];if(e.targetConfig.hasOwnProperty(g))return e.targetConfig[g];if(e.containerConfig.hasOwnProperty(g))return e.containerConfig[g];if(e.globalConfig.hasOwnProperty(g))return e.globalConfig[g]}};function He(){var a=oc;return a.gcq=a.gcq||new Ie}
var Je=function(a,b){He().register(a,b)},Ke=function(a,b,c,d){He().push("event",[b,a],c,d)},Le=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.je=null;this.Yd=!1},Me=function(a,b,c,d,e){this.type=a;this.Vg=b;this.O=c||"";this.Eb=d;this.defer=e},Ie=function(){this.Kd={};this.Td={};this.Xa=[]},Ne=function(a,b){var c=kc(b);return a.Kd[c.containerId]=a.Kd[c.containerId]||new Le},Oe=function(a,b,c,d){if(d.O){var e=Ne(a,d.O),g=e.je;if(g){var h=f(c),k=f(e.targetConfig[d.O]),l=
f(e.containerConfig),m=f(a.Td),n=new Ge(h,k,l,m);try{g(b,d.Vg,n)}catch(q){}}}};Ie.prototype.register=function(a,b){3!==Ne(this,a).status&&(Ne(this,a).je=b,Ne(this,a).status=3,this.flush())};
Ie.prototype.push=function(a,b,c,d){var e=Math.floor(ya()/1E3);if(c){var g=kc(c);if(g&&1===Ne(this,c).status&&(Ne(this,c).status=2,this.push("require",[],g.containerId),!kd())){var h=encodeURIComponent(g.containerId);Lb(("http:"!=u.location.protocol?"https:":"http:")+("//www.googletagmanager.com/gtag/js?id="+h+"&l=dataLayer&cx=c"))}}this.Xa.push(new Me(a,e,c,b,d));d||this.flush()};
Ie.prototype.flush=function(a){for(var b=this;this.Xa.length;){var c=this.Xa[0];if(c.defer)c.defer=!1,this.Xa.push(c);else switch(c.type){case "require":if(3!==Ne(this,c.O).status&&!a)return;break;case "set":ta(c.Eb[0],function(l,m){b.Td[l]=m});break;case "config":var d=c.Eb[0],e=!!d[H.vb];delete d[H.vb];var g=Ne(this,c.O),h=kc(c.O),k=h.containerId===h.id;e||(k?g.containerConfig={}:g.targetConfig[c.O]={});g.Yd&&e||Oe(this,H.W,d,c);g.Yd=!0;k?f(d,g.containerConfig):f(d,g.targetConfig[c.O]);break;case "event":Oe(this,
c.Eb[1],c.Eb[0],c)}this.Xa.shift()}};var Pe=function(a,b,c){for(var d=[],e=String(b||document.cookie).split(";"),g=0;g<e.length;g++){var h=e[g].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d},Se=function(a,b,c,d){var e=Qe(a,d);if(1===e.length)return e[0].id;if(0!==e.length){e=Re(e,function(g){return g.Jb},b);if(1===e.length)return e[0].id;e=Re(e,function(g){return g.eb},c);return e[0]?e[0].id:void 0}};
function Te(a,b,c){var d=document.cookie;document.cookie=a;var e=document.cookie;return d!=e||void 0!=c&&0<=Pe(b,e).indexOf(c)}
var Xe=function(a,b,c,d,e,g){d=d||"auto";var h={path:c||"/"};e&&(h.expires=e);"none"!==d&&(h.domain=d);var k;a:{var l=b,m;if(void 0==l)m=a+"=deleted; expires="+(new Date(0)).toUTCString();else{g&&(l=encodeURIComponent(l));var n=l;n&&1200<n.length&&(n=n.substring(0,1200));l=n;m=a+"="+l}var q=void 0,t=void 0,p;for(p in h)if(h.hasOwnProperty(p)){var r=h[p];if(null!=r)switch(p){case "secure":r&&(m+="; secure");break;case "domain":q=r;break;default:"path"==p&&(t=r),"expires"==p&&r instanceof Date&&(r=
r.toUTCString()),m+="; "+p+"="+r}}if("auto"===q){for(var v=Ue(),w=0;w<v.length;++w){var x="none"!=v[w]?v[w]:void 0;if(!We(x,t)&&Te(m+(x?"; domain="+x:""),a,l)){k=!0;break a}}k=!1}else q&&"none"!=q&&(m+="; domain="+q),k=!We(q,t)&&Te(m,a,l)}return k};function Re(a,b,c){for(var d=[],e=[],g,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===g||l<g?(e=[k],g=l):l===g&&e.push(k)}return 0<d.length?d:e}
function Qe(a,b){for(var c=[],d=Pe(a),e=0;e<d.length;e++){var g=d[e].split("."),h=g.shift();if(!b||-1!==b.indexOf(h)){var k=g.shift();k&&(k=k.split("-"),c.push({id:g.join("."),Jb:1*k[0]||1,eb:1*k[1]||1}))}}return c}
var Ye=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,Ze=/(^|\.)doubleclick\.net$/i,We=function(a,b){return Ze.test(document.location.hostname)||"/"===b&&Ye.test(a)},Ue=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;Ze.test(e)||Ye.test(e)||a.push("none");return a};var $e=new function(){this.Nc={}};var af=null,bf={},cf={},df,ef=function(a,b){var c={event:a};b&&(c.eventModel=f(b),b[H.$b]&&(c.eventCallback=b[H.$b]),b[H.Na]&&(c.eventTimeout=b[H.Na]));return c};
var lf={config:function(a){},event:function(a){var b=a[1];if(ka(b)&&!(3<a.length)){var c;
if(2<a.length){if(!Ja(a[2]))return;c=a[2]}var d=ef(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){if(3===a.length){var b=a[1],c=a[2];$e.Nc[b]?$e.Nc[b].push(c):$e.Nc[b]=[c]}},set:function(a){var b;2==a.length&&Ja(a[1])?b=f(a[1]):3==a.length&&ka(a[1])&&(b={},b[a[1]]=a[2]);if(b){
b._clear=!0;return b}}},mf={policy:!0};var of=function(a){return nf?C.querySelectorAll(a):null},pf=function(a,b){if(!nf)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!C.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},qf=!1;if(C.querySelectorAll)try{var rf=C.querySelectorAll(":root");rf&&1==rf.length&&rf[0]==C.documentElement&&(qf=!0)}catch(a){}var nf=qf;var yf=function(a){if(xf(a))return a;this.Yg=a};yf.prototype.Xf=function(){return this.Yg};var xf=function(a){return!a||"object"!==Ha(a)||Ja(a)?!1:"getUntrustedUpdateValue"in a};yf.prototype.getUntrustedUpdateValue=yf.prototype.Xf;var zf=!1,Af=[];function Bf(){if(!zf){zf=!0;for(var a=0;a<Af.length;a++)G(Af[a])}}var Cf=function(a){zf?G(a):Af.push(a)};var Df=[],Ef=!1,Ff=function(a){return u["dataLayer"].push(a)},Gf=function(a){var b=oc["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}},If=function(a){var b=a._clear;ta(a,function(g,h){"_clear"!==g&&(b&&hd(g,void 0),hd(g,h))});tc||(tc=a["gtm.start"]);var c=a.event;if(!c)return!1;var d=a["gtm.uniqueEventId"];d||(d=Ac(),a["gtm.uniqueEventId"]=d,hd("gtm.uniqueEventId",d));vc=c;var e=Hf(a);
vc=null;switch(c){case "gtm.init":Cc("GTM",19),e&&Cc("GTM",20)}return e};function Hf(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=oc.zones;d=e?e.checkState(nc.i,c):Gd;return d.active?Ee(c,b,d.isWhitelisted,a.eventCallback,a.eventTimeout)?!0:!1:!1}
var Jf=function(){for(var a=!1;!Ef&&0<Df.length;){Ef=!0;delete Xc.eventModel;$c();var b=Df.shift();if(null!=b){var c=xf(b);if(c){var d=b;b=xf(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],g=0;g<e.length;g++){var h=e[g],k=ad(h,1);if(ma(k)||Ja(k))k=f(k);Yc[h]=k}}try{if(ja(b))try{b.call(bd)}catch(v){}else if(ma(b)){var l=b;if(ka(l[0])){var m=
l[0].split("."),n=m.pop(),q=l.slice(1),t=ad(m.join("."),2);if(void 0!==t&&null!==t)try{t[n].apply(t,q)}catch(v){}}}else{var p=b;if(p&&("[object Arguments]"==Object.prototype.toString.call(p)||Object.prototype.hasOwnProperty.call(p,"callee"))){a:{if(b.length&&ka(b[0])){var r=lf[b[0]];if(r&&(!c||!mf[b[0]])){b=r(b);break a}}b=void 0}if(!b){Ef=!1;continue}}a=If(b)||a}}finally{c&&$c(!0)}}Ef=!1}
return!a},Kf=function(){var a=Jf();try{var b=nc.i,c=u["dataLayer"].hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}}catch(g){}return a},Lf=function(){var a=Jb("dataLayer",[]),b=Jb("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};Nd(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});Cf(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||
0)+1;var c=a.push;a.push=function(){var d;if(0<oc.SANDBOXED_JS_SEMAPHORE){d=[];for(var e=0;e<arguments.length;e++)d[e]=new yf(arguments[e])}else d=[].slice.call(arguments,0);var g=c.apply(a,d);Df.push.apply(Df,d);if(300<this.length)for(Cc("GTM",4);300<this.length;)this.shift();var h="boolean"!==typeof g||g;return Jf()&&h};Df.push.apply(Df,a.slice(0));G(Kf)};var Mf;var hg={};hg.xb=new String("undefined");
var ig=function(a){this.resolve=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===hg.xb?b:a[d]);return c.join("")}};ig.prototype.toString=function(){return this.resolve("undefined")};ig.prototype.valueOf=ig.prototype.toString;hg.Ze=ig;hg.kc={};hg.If=function(a){return new ig(a)};var jg={};hg.Hg=function(a,b){var c=Ac();jg[c]=[a,b];return c};hg.Ld=function(a){var b=a?0:1;return function(c){var d=jg[c];if(d&&"function"===typeof d[b])d[b]();jg[c]=void 0}};hg.jg=function(a){for(var b=!1,c=!1,
d=2;d<a.length;d++)b=b||8===a[d],c=c||16===a[d];return b&&c};hg.vg=function(a){if(a===hg.xb)return a;var b=Ac();hg.kc[b]=a;return'google_tag_manager["'+nc.i+'"].macro('+b+")"};hg.ng=function(a,b,c){a instanceof hg.Ze&&(a=a.resolve(hg.Hg(b,c)),b=ia);return{zc:a,J:b}};var kg=function(a,b,c){function d(g,h){var k=g[h];return k}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||Qb(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},lg=function(a){oc.hasOwnProperty("autoEventsSettings")||(oc.autoEventsSettings={});var b=oc.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},mg=function(a,b,c){lg(a)[b]=c},ng=function(a,b,c,d){var e=lg(a),g=za(e,b,d);e[b]=c(g)},og=function(a,b,c){var d=lg(a);return za(d,b,c)};var pg=function(){for(var a=Hb.userAgent+(C.cookie||"")+(C.referrer||""),b=a.length,c=u.history.length;0<c;)a+=c--^b++;var d=1,e,g,h;if(a)for(d=0,g=a.length-1;0<=g;g--)h=a.charCodeAt(g),d=(d<<6&268435455)+h+(h<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(ya()/1E3)].join(".")},sg=function(a,b,c,d){var e=qg(b);return Se(a,e,rg(c),d)},tg=function(a,b,c,d){var e=""+qg(c),g=rg(d);1<g&&(e+="-"+g);return[b,e,a].join(".")},qg=function(a){if(!a)return 1;
a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},rg=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};var ug=["1"],vg={},zg=function(a,b,c,d){var e=wg(a);vg[e]||xg(e,b,c)||(yg(e,pg(),b,c,d),xg(e,b,c))};function yg(a,b,c,d,e){var g=tg(b,"1",d,c);Xe(a,g,c,d,0==e?void 0:new Date(ya()+1E3*(void 0==e?7776E3:e)))}function xg(a,b,c){var d=sg(a,b,c,ug);d&&(vg[a]=d);return d}function wg(a){return(a||"_gcl")+"_au"};var Ag=function(){for(var a=[],b=C.cookie.split(";"),c=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,d=0;d<b.length;d++){var e=b[d].match(c);e&&a.push({Yc:e[1],value:e[2]})}var g={};if(!a||!a.length)return g;for(var h=0;h<a.length;h++){var k=a[h].value.split(".");"1"==k[0]&&3==k.length&&k[1]&&(g[a[h].Yc]||(g[a[h].Yc]=[]),g[a[h].Yc].push({timestamp:k[1],Uf:k[2]}))}return g};function Bg(){for(var a=Cg,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function Dg(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}
var Cg,Eg,Fg=function(a){Cg=Cg||Dg();Eg=Eg||Bg();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,g=a.charCodeAt(c),h=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=g>>2,m=(g&3)<<4|h>>4,n=(h&15)<<2|k>>6,q=k&63;e||(q=64,d||(n=64));b.push(Cg[l],Cg[m],Cg[n],Cg[q])}return b.join("")},Gg=function(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),n=Eg[m];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}Cg=Cg||Dg();Eg=Eg||
Bg();for(var c="",d=0;;){var e=b(-1),g=b(0),h=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|g>>4);64!=h&&(c+=String.fromCharCode(g<<4&240|h>>2),64!=k&&(c+=String.fromCharCode(h<<6&192|k)))}};var Hg;function Ig(a,b){if(!a||b===C.location.hostname)return!1;for(var c=0;c<a.length;c++)if(a[c]instanceof RegExp){if(a[c].test(b))return!0}else if(0<=b.indexOf(a[c]))return!0;return!1}
var Mg=function(){var a=Jg,b=Kg,c=Lg(),d=function(h){a(h.target||h.srcElement||{})},e=function(h){b(h.target||h.srcElement||{})};if(!c.init){D(C,"mousedown",d);D(C,"keyup",d);D(C,"submit",e);var g=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);g.call(this)};c.init=!0}},Lg=function(){var a=Jb("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var Ng=/(.*?)\*(.*?)\*(.*)/,Og=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,Pg=/^(?:www\.|m\.|amp\.)+/,Qg=/([^?#]+)(\?[^#]*)?(#.*)?/,Rg=/(.*?)(^|&)_gl=([^&]*)&?(.*)/,Tg=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(Fg(String(d))))}var e=b.join("*");return["1",Sg(e),e].join("*")},Sg=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||
window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=Hg)){for(var e=Array(256),g=0;256>g;g++){for(var h=g,k=0;8>k;k++)h=h&1?h>>>1^3988292384:h>>>1;e[g]=h}d=e}Hg=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^Hg[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},Vg=function(){return function(a){var b=ne(u.location.href),c=b.search.replace("?",""),d=je(c,"_gl",!0)||"";a.query=Ug(d)||{};var e=me(b,"fragment").match(Rg);a.fragment=Ug(e&&e[3]||
"")||{}}},Wg=function(){var a=Vg(),b=Lg();b.data||(b.data={query:{},fragment:{}},a(b.data));var c={},d=b.data;d&&(Da(c,d.query),Da(c,d.fragment));return c},Ug=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var g=Ng.exec(d);if(g){c=g;break a}d=decodeURIComponent(d)}c=void 0}var h=c;if(h&&"1"===h[1]){var k=h[3],l;a:{for(var m=h[2],n=0;n<b;++n)if(m===Sg(k,n)){l=!0;break a}l=!1}if(l){for(var q={},t=k?k.split("*"):[],p=0;p<t.length;p+=2)q[t[p]]=Gg(t[p+1]);return q}}}}catch(r){}};
function Xg(a,b,c){function d(m){var n=m,q=Rg.exec(n),t=n;if(q){var p=q[2],r=q[4];t=q[1];r&&(t=t+p+r)}m=t;var v=m.charAt(m.length-1);m&&"&"!==v&&(m+="&");return m+l}c=void 0===c?!1:c;var e=Qg.exec(b);if(!e)return"";var g=e[1],h=e[2]||"",k=e[3]||"",l="_gl="+a;c?k="#"+d(k.substring(1)):h="?"+d(h.substring(1));return""+g+h+k}
function Yg(a,b,c){for(var d={},e={},g=Lg().decorators,h=0;h<g.length;++h){var k=g[h];(!c||k.forms)&&Ig(k.domains,b)&&(k.fragment?Da(e,k.callback()):Da(d,k.callback()))}if(Ea(d)){var l=Tg(d);if(c){if(a&&a.action){var m=(a.method||"").toLowerCase();if("get"===m){for(var n=a.childNodes||[],q=!1,t=0;t<n.length;t++){var p=n[t];if("_gl"===p.name){p.setAttribute("value",l);q=!0;break}}if(!q){var r=C.createElement("input");r.setAttribute("type","hidden");r.setAttribute("name","_gl");r.setAttribute("value",
l);a.appendChild(r)}}else if("post"===m){var v=Xg(l,a.action);he.test(v)&&(a.action=v)}}}else Zg(l,a,!1)}if(!c&&Ea(e)){var w=Tg(e);Zg(w,a,!0)}}function Zg(a,b,c){if(b.href){var d=Xg(a,b.href,void 0===c?!1:c);he.test(d)&&(b.href=d)}}
var Jg=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var g=e.protocol;"http:"!==g&&"https:"!==g||Yg(e,e.hostname,!1)}}catch(h){}},Kg=function(a){try{if(a.action){var b=me(ne(a.action),"host");Yg(a,b,!0)}}catch(c){}},$g=function(a,b,c,d){Mg();var e={callback:a,domains:b,fragment:"fragment"===c,forms:!!d};Lg().decorators.push(e)},ah=function(){var a=C.location.hostname,b=Og.exec(C.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var g=c.split("/"),h=g[1];e="s"===h?decodeURIComponent(g[2]):decodeURIComponent(h)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var k=a.replace(Pg,""),l=e.replace(Pg,""),m;if(!(m=k===l)){var n="."+l;m=k.substring(k.length-n.length,k.length)===n}return m},bh=function(a,b){return!1===a?!1:a||b||ah()};var ch={};var dh=/^\w+$/,eh=/^[\w-]+$/,fh=/^~?[\w-]+$/,gh={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha"};function hh(a){return a&&"string"==typeof a&&a.match(dh)?a:"_gcl"}var jh=function(){var a=ne(u.location.href),b=me(a,"query",!1,void 0,"gclid"),c=me(a,"query",!1,void 0,"gclsrc"),d=me(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||je(e,"gclid",void 0);c=c||je(e,"gclsrc",void 0)}return ih(b,c,d)};
function ih(a,b,c){var d={},e=function(g,h){d[h]||(d[h]=[]);d[h].push(g)};if(void 0!==a&&a.match(eh))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":(void 0==ch.gtm_3pds?0:ch.gtm_3pds)&&e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha")}c&&e(c,"dc");return d}var lh=function(a){var b=jh();kh(b,a)};
function kh(a,b,c){function d(q,t){var p=mh(q,e);p&&Xe(p,t,h,g,l,!0)}b=b||{};var e=hh(b.prefix),g=b.domain||"auto",h=b.path||"/",k=void 0==b.Ic?7776E3:b.Ic;c=c||ya();var l=0==k?void 0:new Date(c+1E3*k),m=Math.round(c/1E3),n=function(q){return["GCL",m,q].join(".")};a.aw&&(!0===b.Ch?d("aw",n("~"+a.aw[0])):d("aw",n(a.aw[0])));a.dc&&d("dc",n(a.dc[0]));a.gf&&d("gf",n(a.gf[0]));a.ha&&d("ha",n(a.ha[0]))}
var oh=function(a,b,c,d,e){for(var g=Wg(),h=hh(b),k=0;k<a.length;++k){var l=a[k];if(void 0!==gh[l]){var m=mh(l,h),n=g[m];if(n){var q=Math.min(nh(n),ya()),t;b:{for(var p=q,r=Pe(m,C.cookie),v=0;v<r.length;++v)if(nh(r[v])>p){t=!0;break b}t=!1}t||Xe(m,n,c,d,0==e?void 0:new Date(q+1E3*(null==e?7776E3:e)),!0)}}}var w={prefix:b,path:c,domain:d};kh(ih(g.gclid,g.gclsrc),w)},mh=function(a,b){var c=gh[a];if(void 0!==c)return b+c},nh=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)};function ph(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var qh=function(a,b,c,d,e){if(ma(b)){var g=hh(e);$g(function(){for(var h={},k=0;k<a.length;++k){var l=mh(a[k],g);if(l){var m=Pe(l,C.cookie);m.length&&(h[l]=m.sort()[m.length-1])}}return h},b,c,d)}},rh=function(a){return a.filter(function(b){return fh.test(b)})},sh=function(a){for(var b=["aw","dc"],c=hh(a&&a.prefix),d={},e=0;e<b.length;e++)gh[b[e]]&&(d[b[e]]=gh[b[e]]);ta(d,function(g,h){var k=Pe(c+h,C.cookie);if(k.length){var l=k[0],m=nh(l),n={};n[g]=[ph(l)];kh(n,a,m)}})};var th=/^\d+\.fls\.doubleclick\.net$/;function uh(a){var b=ne(u.location.href),c=me(b,"host",!1);if(c&&c.match(th)){var d=me(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function vh(a,b){if("aw"==a||"dc"==a){var c=uh("gcl"+a);if(c)return c.split(".")}var d=hh(b);if("_gcl"==d){var e;e=jh()[a]||[];if(0<e.length)return e}var g=mh(a,d),h;if(g){var k=[];if(C.cookie){var l=Pe(g,C.cookie);if(l&&0!=l.length){for(var m=0;m<l.length;m++){var n=ph(l[m]);n&&-1===oa(k,n)&&k.push(n)}h=rh(k)}else h=k}else h=k}else h=[];return h}
var wh=function(){var a=uh("gac");if(a)return decodeURIComponent(a);var b=Ag(),c=[];ta(b,function(d,e){for(var g=[],h=0;h<e.length;h++)g.push(e[h].Uf);g=rh(g);g.length&&c.push(d+":"+g.join(","))});return c.join(";")},xh=function(a,b,c,d,e){zg(b,c,d,e);var g=vg[wg(b)],h=jh().dc||[],k=!1;if(g&&0<h.length){var l=oc.joined_au=oc.joined_au||{},m=b||"_gcl";if(!l[m])for(var n=0;n<h.length;n++){var q="https://adservice.google.com/ddm/regclk",t=q=q+"?gclid="+h[n]+"&auiddc="+g;Hb.sendBeacon&&Hb.sendBeacon(t)||Ob(t);k=l[m]=
!0}}null==a&&(a=k);if(a&&g){var p=wg(b),r=vg[p];r&&yg(p,r,c,d,e)}};var yh;if(3===nc.Bb.length)yh="g";else{var zh="G";yh=zh}
var Ah={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:yh,OPT:"o"},Bh=function(a){var b=nc.i.split("-"),c=b[0].toUpperCase(),d=Ah[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",g;if(3===nc.Bb.length){var h=void 0;g="2"+(h||"w")}else g=
"";return g+d+nc.Bb+e};var Hh=["input","select","textarea"],Ih=["button","hidden","image","reset","submit"],Jh=function(a){var b=a.tagName.toLowerCase();return!pa(Hh,function(c){return c===b})||"input"===b&&pa(Ih,function(c){return c===a.type.toLowerCase()})?!1:!0},Kh=function(a){return a.form?a.form.tagName?a.form:C.getElementById(a.form):Tb(a,["form"],100)},Lh=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,g=1;e<a.elements.length;e++){var h=a.elements[e];if(Jh(h)){if(h.getAttribute(c)===d)return g;
g++}}return 0};var Oh=!!u.MutationObserver,Ph=void 0,Qh=function(a){if(!Ph){var b=function(){var c=C.body;if(c)if(Oh)(new MutationObserver(function(){for(var e=0;e<Ph.length;e++)G(Ph[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;D(c,"DOMNodeInserted",function(){d||(d=!0,G(function(){d=!1;for(var e=0;e<Ph.length;e++)G(Ph[e])}))})}};Ph=[];C.body?b():G(b)}Ph.push(a)};var ri=u.clearTimeout,si=u.setTimeout,K=function(a,b,c){if(kd()){b&&G(b)}else return Lb(a,b,c)},ti=function(){return u.location.href},ui=function(a){return me(ne(a),"fragment")},vi=function(a){return le(ne(a))},wi=null;
var xi=function(a,b){return ad(a,b||2)},yi=function(a,b,c){b&&(a.eventCallback=b,c&&(a.eventTimeout=c));return Ff(a)},zi=function(a,b){u[a]=b},W=function(a,b,c){b&&(void 0===u[a]||c&&!u[a])&&(u[a]=b);return u[a]},Ai=function(a,b,c){return Pe(a,b,void 0===c?!0:!!c)},Bi=function(a,b,c,d){var e={prefix:a,path:b,domain:c,Ic:d};lh(e);sh(e)},Ci=function(a,b,c,d,e){oh(a,b,c,d,e);},Di=function(a,b,c,d,e){
qh(a,b,c,d,e);},Ei=function(a,b){if(kd()){b&&G(b)}else Nb(a,b)},Fi=function(a){return!!og(a,"init",!1)},Gi=function(a){mg(a,"init",!0)},Hi=function(a,b,c){var d=(void 0===c?0:c)?"www.googletagmanager.com/gtag/js":sc;d+="?id="+encodeURIComponent(a)+"&l=dataLayer";b&&ta(b,function(e,g){g&&(d+="&"+e+"="+encodeURIComponent(g))});K(J("https://","http://",d))},Ii=function(a,b){var c=a[b];
return c};
var Ki=hg.ng;var Li=new ra,Mi=function(a,b){function c(h){var k=ne(h),l=me(k,"protocol"),m=me(k,"host",!0),n=me(k,"port"),q=me(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==n||"https"==l&&"443"==n)l="web",n="default";return[l,m,n,q]}for(var d=c(String(a)),e=c(String(b)),g=0;g<d.length;g++)if(d[g]!==e[g])return!1;return!0},Ni=function(a){var b=a.arg0,c=a.arg1;if(a.any_of&&ma(c)){for(var d=0;d<c.length;d++)if(Ni({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=
String(b).indexOf(String(c));case "_css":var e;a:{if(b){var g=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<g.length;h++)if(b[g[h]]){e=b[g[h]](c);break a}}catch(v){}}e=!1}return e;case "_ew":var k,l;k=String(b);l=String(c);var m=k.length-l.length;return 0<=m&&k.indexOf(l,m)==m;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var n;n=String(b).split(",");
return 0<=oa(n,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var q;var t=a.ignore_case?"i":void 0;try{var p=String(c)+t,r=Li.get(p);r||(r=new RegExp(c,t),Li.set(p,r));q=r.test(b)}catch(v){q=!1}return q;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return Mi(b,c)}return!1};var Pi={},Qi=function(){if(u._gtmexpgrp&&u._gtmexpgrp.hasOwnProperty(1))return u._gtmexpgrp[1];void 0===Pi[1]&&(Pi[1]=Math.floor(2*Math.random()));return Pi[1]};var Ri=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var Si={},Ti=encodeURI,Y=encodeURIComponent,Ui=Ob;var Vi=function(a,b){if(!a)return!1;var c=me(ne(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var g=c.length-e.length;0<g&&"."!=e.charAt(0)&&(g--,e="."+e);if(0<=g&&c.indexOf(e,g)==g)return!0}}return!1};
var Wi=function(a,b,c){for(var d={},e=!1,g=0;a&&g<a.length;g++)a[g]&&a[g].hasOwnProperty(b)&&a[g].hasOwnProperty(c)&&(d[a[g][b]]=a[g][c],e=!0);return e?d:null};Si.kg=function(){var a=!1;return a};var vj=function(){var a=u.gaGlobal=u.gaGlobal||{};a.hid=a.hid||qa();return a.hid};var ek=window,fk=document,gk=function(a){var b=ek._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===ek["ga-disable-"+a])return!0;try{var c=ek.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(g){}for(var d=Pe("AMP_TOKEN",fk.cookie,!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return fk.getElementById("__gaOptOutExtension")?!0:!1};var lk=function(a,b,c){Ke(b,c,a)},mk=function(a,b,c){Ke(b,c,a,!0)},ok=function(a,b){},nk=function(a,b){},
pk=function(a){return"_"===a.charAt(0)},qk=function(a){ta(a,function(c){pk(c)&&delete a[c]});var b=a[H.wb]||{};ta(b,function(c){pk(c)&&delete b[c]})};var Z={a:{}};


Z.a.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.b="jsm";Z.__jsm.g=!0;Z.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=W("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();Z.a.c=["google"],function(){(function(a){Z.__c=a;Z.__c.b="c";Z.__c.g=!0;Z.__c.priorityOverride=0})(function(a){return a.vtp_value})}();

Z.a.e=["google"],function(){(function(a){Z.__e=a;Z.__e.b="e";Z.__e.g=!0;Z.__e.priorityOverride=0})(function(a){return String(jd(a.vtp_gtmEventId,"event"))})}();
Z.a.f=["google"],function(){(function(a){Z.__f=a;Z.__f.b="f";Z.__f.g=!0;Z.__f.priorityOverride=0})(function(a){var b=xi("gtm.referrer",1)||C.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?me(ne(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):vi(String(b)):String(b)})}();
Z.a.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=kg(c,"gtm.click");yi(d)}}(function(b){Z.__cl=b;Z.__cl.b="cl";Z.__cl.g=!0;Z.__cl.priorityOverride=0})(function(b){if(!Fi("cl")){var c=W("document");D(c,"click",a,!0);Gi("cl")}G(b.vtp_gtmOnSuccess)})}();
Z.a.j=["google"],function(){(function(a){Z.__j=a;Z.__j.b="j";Z.__j.g=!0;Z.__j.priorityOverride=0})(function(a){for(var b=String(a.vtp_name).split("."),c=W(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];return c})}();
Z.a.r=["google"],function(){(function(a){Z.__r=a;Z.__r.b="r";Z.__r.g=!0;Z.__r.priorityOverride=0})(function(a){return qa(a.vtp_min,a.vtp_max)})}();
Z.a.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Z.__u=b;Z.__u.b="u";Z.__u.g=!0;Z.__u.priorityOverride=0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:xi("gtm.url",1))||ti();var d=b[a("vtp_component")];if(!d||"URL"==d)return vi(String(c));var e=ne(String(c)),g;if("QUERY"===d)a:{var h=b[a("vtp_multiQueryKeys").toString()],k=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;m=h?ma(k)?k:String(k).replace(/\s+/g,
"").split(","):[String(k)];for(var n=0;n<m.length;n++){var q=me(e,"QUERY",void 0,void 0,m[n]);if(void 0!=q&&(!l||""!==q)){g=q;break a}}g=void 0}else g=me(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return g})}();
Z.a.v=["google"],function(){(function(a){Z.__v=a;Z.__v.b="v";Z.__v.g=!0;Z.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=xi(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();
Z.a.ua=["google"],function(){var a,b={},c=function(d){var e={},g={},h={},k={},l={},m=void 0;if(d.vtp_gaSettings){var n=d.vtp_gaSettings;f(Wi(n.vtp_fieldsToSet,"fieldName","value"),g);f(Wi(n.vtp_contentGroup,"index","group"),h);f(Wi(n.vtp_dimension,"index","dimension"),k);f(Wi(n.vtp_metric,"index","metric"),l);d.vtp_gaSettings=null;n.vtp_fieldsToSet=void 0;n.vtp_contentGroup=void 0;n.vtp_dimension=void 0;n.vtp_metric=void 0;var q=f(n);d=f(d,q)}f(Wi(d.vtp_fieldsToSet,"fieldName","value"),g);f(Wi(d.vtp_contentGroup,
"index","group"),h);f(Wi(d.vtp_dimension,"index","dimension"),k);f(Wi(d.vtp_metric,"index","metric"),l);var t=ce(d.vtp_functionName);if(ja(t)){var p="",r="";d.vtp_setTrackerName&&"string"==typeof d.vtp_trackerName?""!==d.vtp_trackerName&&(r=d.vtp_trackerName,p=r+"."):(r="gtm"+Ac(),p=r+".");var v={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,legacyCookieDomain:!0,
legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},w={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0},x=function(T){var O=[].slice.call(arguments,0);O[0]=p+O[0];t.apply(window,O)},y=function(T,O){return void 0===O?O:T(O)},A=function(T,O){if(O)for(var na in O)O.hasOwnProperty(na)&&x("set",T+na,O[na])},z=function(){},B=function(T,O,na){var Ra=0;if(T)for(var Ba in T)if(T.hasOwnProperty(Ba)&&(na&&v[Ba]||!na&&void 0===v[Ba])){var Sa=w[Ba]?va(T[Ba]):T[Ba];"anonymizeIp"!=Ba||Sa||(Sa=void 0);O[Ba]=Sa;Ra++}return Ra},E={name:r};B(g,E,!0);t("create",d.vtp_trackingId||e.trackingId,E);x("set","&gtm",Bh(!0));d.vtp_enableRecaptcha&&x("require","recaptcha","recaptcha.js");(function(T,O){void 0!==d[O]&&x("set",T,d[O])})("nonInteraction","vtp_nonInteraction");A("contentGroup",h);A("dimension",k);A("metric",l);var F={};B(g,F,!1)&&x("set",F);var M;
d.vtp_enableLinkId&&x("require","linkid","linkid.js");x("set","hitCallback",function(){var T=g&&g.hitCallback;ja(T)&&T();d.vtp_gtmOnSuccess()});if("TRACK_EVENT"==d.vtp_trackType){d.vtp_enableEcommerce&&(x("require","ec","ec.js"),z());var Q={hitType:"event",eventCategory:String(d.vtp_eventCategory||e.category),eventAction:String(d.vtp_eventAction||e.action),eventLabel:y(String,d.vtp_eventLabel||e.label),eventValue:y(ua,d.vtp_eventValue||
e.value)};B(M,Q,!1);x("send",Q);}else if("TRACK_SOCIAL"==d.vtp_trackType){var S={hitType:"social",socialNetwork:String(d.vtp_socialNetwork),socialAction:String(d.vtp_socialAction),socialTarget:String(d.vtp_socialActionTarget)};B(M,S,!1);x("send",S);}else if("TRACK_TRANSACTION"==d.vtp_trackType){}else if("TRACK_TIMING"==
d.vtp_trackType){}else if("DECORATE_LINK"==d.vtp_trackType){}else if("DECORATE_FORM"==d.vtp_trackType){}else if("TRACK_DATA"==d.vtp_trackType){}else{d.vtp_enableEcommerce&&(x("require","ec","ec.js"),z());if(d.vtp_doubleClick||"DISPLAY_FEATURES"==d.vtp_advertisingFeaturesType){var X=
"_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");x("require","displayfeatures",void 0,{cookieName:X})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==d.vtp_advertisingFeaturesType){var ba="_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");x("require","adfeatures",{cookieName:ba})}M?x("send","pageview",M):x("send","pageview");d.vtp_autoLinkDomains&&de(p,d.vtp_autoLinkDomains,!!d.vtp_useHashAutoLink,!!d.vtp_decorateFormsAutoLink);
}if(!a){var ca=d.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";d.vtp_useInternalVersion&&!d.vtp_useDebugVersion&&(ca="internal/"+ca);a=!0;var Ca=J("https:","http:","//www.google-analytics.com/"+ca,g&&g.forceSSL);K(Ca,function(){var T=ae();T&&T.loaded||d.vtp_gtmOnFailure();},d.vtp_gtmOnFailure)}}else G(d.vtp_gtmOnFailure)};Z.__ua=c;Z.__ua.b="ua";Z.__ua.g=!0;Z.__ua.priorityOverride=0}();



Z.a.opt=["google"],function(){var a,b=function(c){var d={};if(c.vtp_gaSettings){var e=c.vtp_gaSettings;f(Wi(e.vtp_fieldsToSet,"fieldName","value"),d);c.vtp_gaSettings=null;e.vtp_fieldsToSet=void 0;var g=f(e);c=f(c,g)||{}}f(Wi(c.vtp_fieldsToSet,"fieldName","value"),d);var h=ce(c.vtp_functionName);if(ja(h)){h.r=!0;var k="",l="";c.vtp_setTrackerName&&"string"===typeof c.vtp_trackerName?""!==c.vtp_trackerName&&(l=c.vtp_trackerName,k=l+"."):(l="gtm"+Ac(),k=l+".");var m={name:!0,clientId:!0,sampleRate:!0,
siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},n={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0},q=function(x,y,A){var z=0,B;for(B in x)if(x.hasOwnProperty(B)&&
(A&&m[B]||!A&&void 0===m[B])){var E=n[B]?va(x[B]):x[B];"anonymizeIp"!==B||E||(E=void 0);y[B]=E;z++}return z},t={name:l};q(d,t,!0);var p={"&gtm":Bh(!0)};q(d,p,!1);var r=encodeURI(J("https:","http:","//www.google-analytics.com/"+(c.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js"),!!d.forceSSL));h("create",c.vtp_trackingId,t);h(k+"set",p);h(k+"require",c.vtp_optimizeContainerId,{dataLayer:"dataLayer"});h(c.vtp_gtmOnSuccess);h(k+"require","render");a||(a=!0,K(r,function(){return ae().loaded||
c.vtp_gtmOnFailure()},c.vtp_gtmOnFailure));var v=W("dataLayer"),w=v&&v.hide;w&&w.end&&(w[c.vtp_optimizeContainerId]=!0)}else G(c.vtp_gtmOnFailure)};Z.__opt=b;Z.__opt.b="opt";Z.__opt.g=!0;Z.__opt.priorityOverride=0}();

Z.a.aev=["google"],function(){function a(p,r){var v=jd(p,"gtm");if(v)return v[r]}function b(p,r,v,w){w||(w="element");var x=p+"."+r,y;if(n.hasOwnProperty(x))y=n[x];else{var A=a(p,w);if(A&&(y=v(A),n[x]=y,q.push(x),35<q.length)){var z=q.shift();delete n[z]}}return y}function c(p,r,v){var w=a(p,t[r]);return void 0!==w?w:v}function d(p,r){if(!p)return!1;var v=e(ti());ma(r)||(r=String(r||"").replace(/\s+/g,"").split(","));for(var w=[v],x=0;x<r.length;x++)if(r[x]instanceof RegExp){if(r[x].test(p))return!1}else{var y=
r[x];if(0!=y.length){if(0<=e(p).indexOf(y))return!1;w.push(e(y))}}return!Vi(p,w)}function e(p){m.test(p)||(p="http://"+p);return me(ne(p),"HOST",!0)}function g(p,r,v){switch(p){case "SUBMIT_TEXT":return b(r,"FORM."+p,h,"formSubmitElement")||v;case "LENGTH":var w=b(r,"FORM."+p,k);return void 0===w?v:w;case "INTERACTED_FIELD_ID":return l(r,"id",v);case "INTERACTED_FIELD_NAME":return l(r,"name",v);case "INTERACTED_FIELD_TYPE":return l(r,"type",v);case "INTERACTED_FIELD_POSITION":var x=a(r,"interactedFormFieldPosition");
return void 0===x?v:x;case "INTERACT_SEQUENCE_NUMBER":var y=a(r,"interactSequenceNumber");return void 0===y?v:y;default:return v}}function h(p){switch(p.tagName.toLowerCase()){case "input":return Qb(p,"value");case "button":return Rb(p);default:return null}}function k(p){if("form"===p.tagName.toLowerCase()&&p.elements){for(var r=0,v=0;v<p.elements.length;v++)Jh(p.elements[v])&&r++;return r}}function l(p,r,v){var w=a(p,"interactedFormField");return w&&Qb(w,r)||v}var m=/^https?:\/\//i,n={},q=[],t={ATTRIBUTE:"elementAttribute",
CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(p){Z.__aev=p;Z.__aev.b="aev";Z.__aev.g=!0;Z.__aev.priorityOverride=0})(function(p){var r=p.vtp_gtmEventId,v=p.vtp_defaultValue,w=p.vtp_varType;switch(w){case "TAG_NAME":var x=a(r,"element");return x&&x.tagName||
v;case "TEXT":return b(r,w,Rb)||v;case "URL":var y;a:{var A=String(a(r,"elementUrl")||v||""),z=ne(A),B=String(p.vtp_component||"URL");switch(B){case "URL":y=A;break a;case "IS_OUTBOUND":y=d(A,p.vtp_affiliatedDomains);break a;default:y=me(z,B,p.vtp_stripWww,p.vtp_defaultPages,p.vtp_queryKey)}}return y;case "ATTRIBUTE":var E;if(void 0===p.vtp_attribute)E=c(r,w,v);else{var F=p.vtp_attribute,M=a(r,"element");E=M&&Qb(M,F)||v||""}return E;case "MD":var Q=p.vtp_mdValue,S=b(r,"MD",di);return Q&&S?gi(S,Q)||
v:S||v;case "FORM":return g(String(p.vtp_component||"SUBMIT_TEXT"),r,v);default:return c(r,w,v)}})}();

Z.a.gcs=["google"],function(){(function(a){Z.__gcs=a;Z.__gcs.b="gcs";Z.__gcs.g=!0;Z.__gcs.priorityOverride=0})(function(a){try{var b=a.vtp_siteId;if(!W("_gtmgcs")){u._gtmgcs={};var c=J("https:","http:","//survey.g.doubleclick.net/async_survey?site="+Y(b));K(c)}a.vtp_gtmOnSuccess()}catch(d){G(a.vtp_gtmOnFailure)}})}();
Z.a.fsl=[],function(){function a(){var e=W("document"),g=c(),h=HTMLFormElement.prototype.submit;D(e,"click",function(k){var l=k.target;if(l&&(l=Tb(l,["button","input"],100))&&("submit"==l.type||"image"==l.type)&&l.name&&Qb(l,"value")){var m;(m=l.form?l.form.tagName?l.form:C.getElementById(l.form):Tb(l,["form"],100))&&g.store(m,l)}},!1);D(e,"submit",function(k){var l=k.target;if(!l)return k.returnValue;var m=k.defaultPrevented||!1===k.returnValue,n=b(l)&&!m,q=g.get(l),t=!0;if(d(l,function(){if(t){var p;
q&&(p=e.createElement("input"),p.type="hidden",p.name=q.name,p.value=q.value,l.appendChild(p));h.call(l);p&&l.removeChild(p)}},m,n,q))t=!1;else return m||(k.preventDefault&&k.preventDefault(),k.returnValue=!1),!1;return k.returnValue},!1);HTMLFormElement.prototype.submit=function(){var k=this,l=b(k),m=!0;d(k,function(){m&&h.call(k)},!1,l)&&(h.call(k),m=!1)}}function b(e){var g=e.target;return g&&"_self"!==g&&"_parent"!==g&&"_top"!==g?!1:!0}function c(){var e=[],g=function(h){return pa(e,function(k){return k.form===
h})};return{store:function(h,k){var l=g(h);l?l.button=k:e.push({form:h,button:k})},get:function(h){var k=g(h);return k?k.button:null}}}function d(e,g,h,k,l){var m=og("fsl",h?"nv.mwt":"mwt",0),n;n=h?og("fsl","nv.ids",[]):og("fsl","ids",[]);if(!n.length)return!0;var q=kg(e,"gtm.formSubmit",n),t=e.action;t&&t.tagName&&(t=e.cloneNode(!1).action);q["gtm.elementUrl"]=t;l&&(q["gtm.formSubmitElement"]=l);if(k&&m){if(!yi(q,Gf(g),m))return!1}else yi(q,function(){},m||2E3);return!0}(function(e){Z.__fsl=e;Z.__fsl.b=
"fsl";Z.__fsl.g=!0;Z.__fsl.priorityOverride=0})(function(e){var g=e.vtp_waitForTags,h=e.vtp_checkValidation,k=Number(e.vtp_waitForTagsTimeout);if(!k||0>=k)k=2E3;var l=e.vtp_uniqueTriggerId||"0";if(g){var m=function(q){return Math.max(k,q)};ng("fsl","mwt",m,0);h||ng("fsl","nv.mwt",m,0)}var n=function(q){q.push(l);return q};ng("fsl","ids",n,[]);h||ng("fsl","nv.ids",n,[]);Fi("fsl")||(a(),Gi("fsl"));G(e.vtp_gtmOnSuccess)})}();




Z.a.paused=[],function(){(function(a){Z.__paused=a;Z.__paused.b="paused";Z.__paused.g=!0;Z.__paused.priorityOverride=0})(function(a){G(a.vtp_gtmOnFailure)})}();
Z.a.twitter_website_tag=["nonGoogleScripts"],function(){(function(a){Z.__twitter_website_tag=a;Z.__twitter_website_tag.b="twitter_website_tag";Z.__twitter_website_tag.g=!0;Z.__twitter_website_tag.priorityOverride=0})(function(a){(function(c,d){c.twq||(d=c.twq=function(){d.exe?d.exe.apply(d,arguments):d.queue.push(arguments)},d.version="1",d.queue=[],K("//static.ads-twitter.com/uwt.js"))})(window,void 0);window.twq("init",String(a.vtp_twitter_pixel_id));var b=Wi(a.vtp_event_parameters,"param_table_key_column",
"param_table_value_column");b&&void 0!==b.content_ids&&(b.content_ids=JSON.parse(b.content_ids.replace(/'/g,'"')));window.twq("track",String(a.vtp_event_type),b);G(a.vtp_gtmOnSuccess)})}();
Z.a.zone=[],function(){function a(q){for(var t=q.vtp_boundaries||[],p=0;p<t.length;p++)if(!t[p])return!1;return!0}function b(q){var t=nc.i,p=t+":"+q.vtp_gtmTagId,r=xi("gtm.uniqueEventId")||0,v=Hd(function(){return new k}),w=a(q),x=q.vtp_enableTypeRestrictions?q.vtp_whitelistedTypes.map(function(M){return M.typeId}):null;x=x&&Fa(x,h);if(v.registerZone(p,r,w,x))for(var y=q.vtp_childContainers.map(function(M){return M.publicId}),A=0;A<y.length;A++){var z=String(y[A]);if(v.registerChild(z,t,p)){var B=
0!==z.indexOf("GTM-"),E=0===z.indexOf("SB-")?c():void 0;if(B){var F=function(M,Q){yi(arguments)};F("js",new Date);F("config",z);m||Hi(z,E,B)}else Hi(z,E,B)}}}function c(){var q=Ai("_oid")[0];if(q)return{oid:q,namespace:"cookie"}}var d={active:!1,isWhitelisted:function(){return!1}},e={active:!0,isWhitelisted:function(){return!0}},g={zone:!0,cn:!0,css:!0,ew:!0,eq:!0,ge:!0,gt:!0,lc:!0,le:!0,lt:!0,re:!0,sw:!0,um:!0},h={cl:["ecl"],ecl:["cl"],ehl:["hl"],hl:["ehl"]},k=function(){this.Fb={};this.cd={}};k.prototype.checkState=
function(q,t){var p=this.Fb[q];if(!p)return e;var r=this.checkState(p.fe,t);if(!r.active)return d;for(var v=[],w=0;w<p.bd.length;w++){var x=this.cd[p.bd[w]];x.ab(t)&&v.push(x)}return v.length?{active:!0,isWhitelisted:function(y,A){A=A||[];if(!r.isWhitelisted(y,A))return!1;for(var z=0;z<v.length;++z)if(v[z].isWhitelisted(y,A))return!0;return!1}}:d};k.prototype.unregisterChild=function(q){delete this.Fb[q]};k.prototype.registerZone=function(q,t,p,r){var v=this.cd[q];if(v)return v.Fg(t,p),!1;if(!p)return!1;
this.cd[q]=new l(t,r);return!0};k.prototype.registerChild=function(q,t,p){var r=this.Fb[q];if(!r&&oc[q]||r&&r.fe!==t)return!1;if(r)return r.bd.push(p),!1;this.Fb[q]={fe:t,bd:[p]};return!0};var l=function(q,t){this.ca=[{eventId:q,ab:!0}];this.kb=null;if(t){this.kb={};for(var p=0;p<t.length;p++)this.kb[t[p]]=!0}};l.prototype.Fg=function(q,t){var p=this.ca[this.ca.length-1];q<=p.eventId||p.ab!=t&&this.ca.push({eventId:q,ab:t})};l.prototype.ab=function(q){if(!this.ca||0==this.ca.length)return!1;for(var t=
this.ca.length-1;0<=t;t--)if(this.ca[t].eventId<=q)return this.ca[t].ab;return!1};l.prototype.isWhitelisted=function(q,t){t=t||[];if(!this.kb||g[q]||this.kb[q])return!0;for(var p=0;p<t.length;++p)if(this.kb[t[p]])return!0;return!1};var m=!1;var n=function(q){b(q);G(q.vtp_gtmOnSuccess)};
Z.__zone=n;Z.__zone.b="zone";Z.__zone.g=!0;Z.__zone.priorityOverride=0}();
Z.a.html=["customScripts"],function(){function a(d,e,g,h){return function(){try{if(0<e.length){var k=e.shift(),l=a(d,e,g,h);if("SCRIPT"==String(k.nodeName).toUpperCase()&&"text/gtmscript"==k.type){var m=C.createElement("script");m.async=!1;m.type="text/javascript";m.id=k.id;m.text=k.text||k.textContent||k.innerHTML||"";k.charset&&(m.charset=k.charset);var n=k.getAttribute("data-gtmsrc");n&&(m.src=n,Kb(m,l));d.insertBefore(m,null);n||l()}else if(k.innerHTML&&0<=k.innerHTML.toLowerCase().indexOf("<script")){for(var q=
[];k.firstChild;)q.push(k.removeChild(k.firstChild));d.insertBefore(k,null);a(k,q,l,h)()}else d.insertBefore(k,null),l()}else g()}catch(t){G(h)}}}var c=function(d){if(C.body){var e=
d.vtp_gtmOnFailure,g=Ki(d.vtp_html,d.vtp_gtmOnSuccess,e),h=g.zc,k=g.J;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(C.body,Sb(h),k,e)()}else si(function(){c(d)},
200)};Z.__html=c;Z.__html.b="html";Z.__html.g=!0;Z.__html.priorityOverride=0}();




Z.a.img=["customPixels"],function(){(function(a){Z.__img=a;Z.__img.b="img";Z.__img.g=!0;Z.__img.priorityOverride=0})(function(a){var b=Sb('<a href="'+a.vtp_url+'"></a>')[0].href,c=a.vtp_cacheBusterQueryParam;if(a.vtp_useCacheBuster){c||(c="gtmcb");var d=b.charAt(b.length-1),e=0<=b.indexOf("?")?"?"==d||"&"==d?"":"&":"?";b+=e+c+"="+a.vtp_randomNumber}Ui(b,a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)})}();


Z.a.lcl=[],function(){function a(){var c=W("document"),d=0,e=function(g){var h=g.target;if(h&&3!==g.which&&(!g.timeStamp||g.timeStamp!==d)){d=g.timeStamp;h=Tb(h,["a","area"],100);if(!h)return g.returnValue;var k=g.defaultPrevented||!1===g.returnValue,l=og("lcl",k?"nv.mwt":"mwt",0),m;m=k?og("lcl","nv.ids",[]):og("lcl","ids",[]);if(m.length){var n=kg(h,"gtm.linkClick",m);if(b(g,h,c)&&!k&&l&&h.href){var q=W((Ii(h,"target")||"_self").substring(1)),t=!0;if(yi(n,Gf(function(){t&&q&&(q.location.href=Ii(h,
"href"))}),l))t=!1;else return g.preventDefault&&g.preventDefault(),g.returnValue=!1}else yi(n,function(){},l||2E3);return!0}}};D(c,"click",e,!1);D(c,"auxclick",e,!1)}function b(c,d,e){if(2===c.which||c.ctrlKey||c.shiftKey||c.altKey||c.metaKey)return!1;var g=Ii(d,"href"),h=g.indexOf("#"),k=Ii(d,"target");if(k&&"_self"!==k&&"_parent"!==k&&"_top"!==k||0===h)return!1;if(0<h){var l=vi(g),m=vi(e.location);return l!==m}return!0}(function(c){Z.__lcl=c;Z.__lcl.b="lcl";Z.__lcl.g=!0;Z.__lcl.priorityOverride=
0})(function(c){var d=void 0===c.vtp_waitForTags?!0:c.vtp_waitForTags,e=void 0===c.vtp_checkValidation?!0:c.vtp_checkValidation,g=Number(c.vtp_waitForTagsTimeout);if(!g||0>=g)g=2E3;var h=c.vtp_uniqueTriggerId||"0";if(d){var k=function(m){return Math.max(g,m)};ng("lcl","mwt",k,0);e||ng("lcl","nv.mwt",k,0)}var l=function(m){m.push(h);return m};ng("lcl","ids",l,[]);e||ng("lcl","nv.ids",l,[]);Fi("lcl")||(a(),Gi("lcl"));G(c.vtp_gtmOnSuccess)})}();

var zk={};zk.macro=function(a){if(hg.kc.hasOwnProperty(a))return hg.kc[a]},zk.onHtmlSuccess=hg.Ld(!0),zk.onHtmlFailure=hg.Ld(!1);zk.dataLayer=bd;zk.callback=function(a){xc.hasOwnProperty(a)&&ja(xc[a])&&xc[a]();delete xc[a]};zk.uf=function(){oc[nc.i]=zk;Da(zc,Z.a);qb=qb||hg;rb=Fd};
zk.fg=function(){ch.gtm_3pds=!0;oc=u.google_tag_manager=u.google_tag_manager||{};if(oc[nc.i]){var a=oc.zones;a&&a.unregisterChild(nc.i)}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)ib.push(c[d]);for(var e=b.tags||[],g=0;g<e.length;g++)lb.push(e[g]);for(var h=b.predicates||[],
k=0;k<h.length;k++)kb.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],q={},t=0;t<n.length;t++)q[n[t][0]]=Array.prototype.slice.call(n[t],1);jb.push(q)}ob=Z;pb=Ni;zk.uf();Lf();Id=!1;Jd=0;if("interactive"==C.readyState&&!C.createEventObject||"complete"==C.readyState)Ld();else{D(C,"DOMContentLoaded",Ld);D(C,"readystatechange",Ld);if(C.createEventObject&&C.documentElement.doScroll){var p=!0;try{p=!u.frameElement}catch(x){}p&&Md()}D(u,"load",Ld)}zf=!1;"complete"===C.readyState?Bf():
D(u,"load",Bf);a:{if(!Rc)break a;u.setInterval(Sc,864E5);}
uc=(new Date).getTime();}};(0,zk.fg)();

})()
