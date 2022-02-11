"undefined"!=typeof window&&function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Hls=e():t.Hls=e()}(this,(function(){return function(t){var e={};function r(i){if(e[i])return e[i].exports;var n=e[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=t,r.c=e,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(i,n,function(e){return t[e]}.bind(null,n));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/dist/",r(r.s=20)}([function(t,e,r){"use strict";var i;r.d(e,"a",(function(){return i})),function(t){t.MEDIA_ATTACHING="hlsMediaAttaching",t.MEDIA_ATTACHED="hlsMediaAttached",t.MEDIA_DETACHING="hlsMediaDetaching",t.MEDIA_DETACHED="hlsMediaDetached",t.BUFFER_RESET="hlsBufferReset",t.BUFFER_CODECS="hlsBufferCodecs",t.BUFFER_CREATED="hlsBufferCreated",t.BUFFER_APPENDING="hlsBufferAppending",t.BUFFER_APPENDED="hlsBufferAppended",t.BUFFER_EOS="hlsBufferEos",t.BUFFER_FLUSHING="hlsBufferFlushing",t.BUFFER_FLUSHED="hlsBufferFlushed",t.MANIFEST_LOADING="hlsManifestLoading",t.MANIFEST_LOADED="hlsManifestLoaded",t.MANIFEST_PARSED="hlsManifestParsed",t.LEVEL_SWITCHING="hlsLevelSwitching",t.LEVEL_SWITCHED="hlsLevelSwitched",t.LEVEL_LOADING="hlsLevelLoading",t.LEVEL_LOADED="hlsLevelLoaded",t.LEVEL_UPDATED="hlsLevelUpdated",t.LEVEL_PTS_UPDATED="hlsLevelPtsUpdated",t.LEVELS_UPDATED="hlsLevelsUpdated",t.AUDIO_TRACKS_UPDATED="hlsAudioTracksUpdated",t.AUDIO_TRACK_SWITCHING="hlsAudioTrackSwitching",t.AUDIO_TRACK_SWITCHED="hlsAudioTrackSwitched",t.AUDIO_TRACK_LOADING="hlsAudioTrackLoading",t.AUDIO_TRACK_LOADED="hlsAudioTrackLoaded",t.SUBTITLE_TRACKS_UPDATED="hlsSubtitleTracksUpdated",t.SUBTITLE_TRACKS_CLEARED="hlsSubtitleTracksCleared",t.SUBTITLE_TRACK_SWITCH="hlsSubtitleTrackSwitch",t.SUBTITLE_TRACK_LOADING="hlsSubtitleTrackLoading",t.SUBTITLE_TRACK_LOADED="hlsSubtitleTrackLoaded",t.SUBTITLE_FRAG_PROCESSED="hlsSubtitleFragProcessed",t.CUES_PARSED="hlsCuesParsed",t.NON_NATIVE_TEXT_TRACKS_FOUND="hlsNonNativeTextTracksFound",t.INIT_PTS_FOUND="hlsInitPtsFound",t.FRAG_LOADING="hlsFragLoading",t.FRAG_LOAD_EMERGENCY_ABORTED="hlsFragLoadEmergencyAborted",t.FRAG_LOADED="hlsFragLoaded",t.FRAG_DECRYPTED="hlsFragDecrypted",t.FRAG_PARSING_INIT_SEGMENT="hlsFragParsingInitSegment",t.FRAG_PARSING_USERDATA="hlsFragParsingUserdata",t.FRAG_PARSING_METADATA="hlsFragParsingMetadata",t.FRAG_PARSED="hlsFragParsed",t.FRAG_BUFFERED="hlsFragBuffered",t.FRAG_CHANGED="hlsFragChanged",t.FPS_DROP="hlsFpsDrop",t.FPS_DROP_LEVEL_CAPPING="hlsFpsDropLevelCapping",t.ERROR="hlsError",t.DESTROYING="hlsDestroying",t.KEY_LOADING="hlsKeyLoading",t.KEY_LOADED="hlsKeyLoaded",t.LIVE_BACK_BUFFER_REACHED="hlsLiveBackBufferReached",t.BACK_BUFFER_REACHED="hlsBackBufferReached"}(i||(i={}))},function(t,e,r){"use strict";r.d(e,"a",(function(){return o})),r.d(e,"b",(function(){return l}));var i=function(){},n={trace:i,debug:i,log:i,warn:i,info:i,error:i},a=n;function s(t){var e=self.console[t];return e?e.bind(self.console,"["+t+"] >"):i}function o(t){if(self.console&&!0===t||"object"==typeof t){!function(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),i=1;i<e;i++)r[i-1]=arguments[i];r.forEach((function(e){a[e]=t[e]?t[e].bind(t):s(e)}))}(t,"debug","log","info","warn","error");try{a.log()}catch(t){a=n}}else a=n}var l=n},function(t,e,r){"use strict";var i,n;r.d(e,"b",(function(){return i})),r.d(e,"a",(function(){return n})),function(t){t.NETWORK_ERROR="networkError",t.MEDIA_ERROR="mediaError",t.KEY_SYSTEM_ERROR="keySystemError",t.MUX_ERROR="muxError",t.OTHER_ERROR="otherError"}(i||(i={})),function(t){t.KEY_SYSTEM_NO_KEYS="keySystemNoKeys",t.KEY_SYSTEM_NO_ACCESS="keySystemNoAccess",t.KEY_SYSTEM_NO_SESSION="keySystemNoSession",t.KEY_SYSTEM_LICENSE_REQUEST_FAILED="keySystemLicenseRequestFailed",t.KEY_SYSTEM_NO_INIT_DATA="keySystemNoInitData",t.MANIFEST_LOAD_ERROR="manifestLoadError",t.MANIFEST_LOAD_TIMEOUT="manifestLoadTimeOut",t.MANIFEST_PARSING_ERROR="manifestParsingError",t.MANIFEST_INCOMPATIBLE_CODECS_ERROR="manifestIncompatibleCodecsError",t.LEVEL_EMPTY_ERROR="levelEmptyError",t.LEVEL_LOAD_ERROR="levelLoadError",t.LEVEL_LOAD_TIMEOUT="levelLoadTimeOut",t.LEVEL_SWITCH_ERROR="levelSwitchError",t.AUDIO_TRACK_LOAD_ERROR="audioTrackLoadError",t.AUDIO_TRACK_LOAD_TIMEOUT="audioTrackLoadTimeOut",t.SUBTITLE_LOAD_ERROR="subtitleTrackLoadError",t.SUBTITLE_TRACK_LOAD_TIMEOUT="subtitleTrackLoadTimeOut",t.FRAG_LOAD_ERROR="fragLoadError",t.FRAG_LOAD_TIMEOUT="fragLoadTimeOut",t.FRAG_DECRYPT_ERROR="fragDecryptError",t.FRAG_PARSING_ERROR="fragParsingError",t.REMUX_ALLOC_ERROR="remuxAllocError",t.KEY_LOAD_ERROR="keyLoadError",t.KEY_LOAD_TIMEOUT="keyLoadTimeOut",t.BUFFER_ADD_CODEC_ERROR="bufferAddCodecError",t.BUFFER_INCOMPATIBLE_CODECS_ERROR="bufferIncompatibleCodecsError",t.BUFFER_APPEND_ERROR="bufferAppendError",t.BUFFER_APPENDING_ERROR="bufferAppendingError",t.BUFFER_STALLED_ERROR="bufferStalledError",t.BUFFER_FULL_ERROR="bufferFullError",t.BUFFER_SEEK_OVER_HOLE="bufferSeekOverHole",t.BUFFER_NUDGE_ON_STALL="bufferNudgeOnStall",t.INTERNAL_EXCEPTION="internalException",t.INTERNAL_ABORTED="aborted",t.UNKNOWN="unknown"}(n||(n={}))},function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var i=Number.isFinite||function(t){return"number"==typeof t&&isFinite(t)};Number.MAX_SAFE_INTEGER},function(t,e,r){"use strict";var i,n;r.d(e,"a",(function(){return i})),r.d(e,"b",(function(){return n})),function(t){t.MANIFEST="manifest",t.LEVEL="level",t.AUDIO_TRACK="audioTrack",t.SUBTITLE_TRACK="subtitleTrack"}(i||(i={})),function(t){t.MAIN="main",t.AUDIO="audio",t.SUBTITLE="subtitle"}(n||(n={}))},function(t,e,r){"use strict";r.d(e,"a",(function(){return i})),r.d(e,"b",(function(){return g})),r.d(e,"c",(function(){return v}));var i,n=r(3),a=r(11),s=r(1),o=r(17),l=r(12);function u(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,h(t,e)}function h(t,e){return(h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function d(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function c(t,e,r){return e&&d(t.prototype,e),r&&d(t,r),t}!function(t){t.AUDIO="audio",t.VIDEO="video",t.AUDIOVIDEO="audiovideo"}(i||(i={}));var f=function(){function t(t){var e;this._byteRange=null,this._url=null,this.baseurl=void 0,this.relurl=void 0,this.elementaryStreams=((e={})[i.AUDIO]=null,e[i.VIDEO]=null,e[i.AUDIOVIDEO]=null,e),this.baseurl=t}return t.prototype.setByteRange=function(t,e){var r=t.split("@",2),i=[];1===r.length?i[0]=e?e.byteRangeEndOffset:0:i[0]=parseInt(r[1]),i[1]=parseInt(r[0])+i[0],this._byteRange=i},c(t,[{key:"byteRange",get:function(){return this._byteRange?this._byteRange:[]}},{key:"byteRangeStartOffset",get:function(){return this.byteRange[0]}},{key:"byteRangeEndOffset",get:function(){return this.byteRange[1]}},{key:"url",get:function(){return!this._url&&this.baseurl&&this.relurl&&(this._url=Object(a.buildAbsoluteURL)(this.baseurl,this.relurl,{alwaysNormalize:!0})),this._url||""},set:function(t){this._url=t}}]),t}(),g=function(t){function e(e,r){var i;return(i=t.call(this,r)||this)._decryptdata=null,i.rawProgramDateTime=null,i.programDateTime=null,i.tagList=[],i.duration=0,i.sn=0,i.levelkey=void 0,i.type=void 0,i.loader=null,i.level=-1,i.cc=0,i.startPTS=void 0,i.endPTS=void 0,i.appendedPTS=void 0,i.startDTS=void 0,i.endDTS=void 0,i.start=0,i.deltaPTS=void 0,i.maxStartPTS=void 0,i.minEndPTS=void 0,i.stats=new l.a,i.urlId=0,i.data=void 0,i.bitrateTest=!1,i.title=null,i.initSegment=null,i.type=e,i}u(e,t);var r=e.prototype;return r.createInitializationVector=function(t){for(var e=new Uint8Array(16),r=12;r<16;r++)e[r]=t>>8*(15-r)&255;return e},r.setDecryptDataFromLevelKey=function(t,e){var r=t;return"AES-128"===(null==t?void 0:t.method)&&t.uri&&!t.iv&&((r=o.a.fromURI(t.uri)).method=t.method,r.iv=this.createInitializationVector(e),r.keyFormat="identity"),r},r.setElementaryStreamInfo=function(t,e,r,i,n,a){void 0===a&&(a=!1);var s=this.elementaryStreams,o=s[t];o?(o.startPTS=Math.min(o.startPTS,e),o.endPTS=Math.max(o.endPTS,r),o.startDTS=Math.min(o.startDTS,i),o.endDTS=Math.max(o.endDTS,n)):s[t]={startPTS:e,endPTS:r,startDTS:i,endDTS:n,partial:a}},r.clearElementaryStreamInfo=function(){var t=this.elementaryStreams;t[i.AUDIO]=null,t[i.VIDEO]=null,t[i.AUDIOVIDEO]=null},c(e,[{key:"decryptdata",get:function(){if(!this.levelkey&&!this._decryptdata)return null;if(!this._decryptdata&&this.levelkey){var t=this.sn;"number"!=typeof t&&(this.levelkey&&"AES-128"===this.levelkey.method&&!this.levelkey.iv&&s.b.warn('missing IV for initialization segment with method="'+this.levelkey.method+'" - compliance issue'),t=0),this._decryptdata=this.setDecryptDataFromLevelKey(this.levelkey,t)}return this._decryptdata}},{key:"end",get:function(){return this.start+this.duration}},{key:"endProgramDateTime",get:function(){if(null===this.programDateTime)return null;if(!Object(n.a)(this.programDateTime))return null;var t=Object(n.a)(this.duration)?this.duration:0;return this.programDateTime+1e3*t}},{key:"encrypted",get:function(){var t;return!(null===(t=this.decryptdata)||void 0===t||!t.keyFormat||!this.decryptdata.uri)}}]),e}(f),v=function(t){function e(e,r,i,n,a){var s;(s=t.call(this,i)||this).fragOffset=0,s.duration=0,s.gap=!1,s.independent=!1,s.relurl=void 0,s.fragment=void 0,s.index=void 0,s.stats=new l.a,s.duration=e.decimalFloatingPoint("DURATION"),s.gap=e.bool("GAP"),s.independent=e.bool("INDEPENDENT"),s.relurl=e.enumeratedString("URI"),s.fragment=r,s.index=n;var o=e.enumeratedString("BYTERANGE");return o&&s.setByteRange(o,a),a&&(s.fragOffset=a.fragOffset+a.duration),s}return u(e,t),c(e,[{key:"start",get:function(){return this.fragment.start+this.fragOffset}},{key:"end",get:function(){return this.start+this.duration}},{key:"loaded",get:function(){var t=this.elementaryStreams;return!!(t.audio||t.video||t.audiovideo)}}]),e}(f)},function(t,e,r){"use strict";r.d(e,"b",(function(){return h})),r.d(e,"g",(function(){return d})),r.d(e,"f",(function(){return c})),r.d(e,"d",(function(){return f})),r.d(e,"c",(function(){return g})),r.d(e,"e",(function(){return p})),r.d(e,"h",(function(){return m})),r.d(e,"a",(function(){return y}));var i=r(9),n=r(5),a=Math.pow(2,32)-1,s=[].push;function o(t){return String.fromCharCode.apply(null,t)}function l(t,e){"data"in t&&(e+=t.start,t=t.data);var r=t[e]<<24|t[e+1]<<16|t[e+2]<<8|t[e+3];return r<0?4294967296+r:r}function u(t,e,r){"data"in t&&(e+=t.start,t=t.data),t[e]=r>>24,t[e+1]=r>>16&255,t[e+2]=r>>8&255,t[e+3]=255&r}function h(t,e){var r,i,n,a=[];if(!e.length)return a;"data"in t?(r=t.data,i=t.start,n=t.end):(i=0,n=(r=t).byteLength);for(var u=i;u<n;){var d=l(r,u),c=d>1?u+d:n;if(o(r.subarray(u+4,u+8))===e[0])if(1===e.length)a.push({data:r,start:u+8,end:c});else{var f=h({data:r,start:u+8,end:c},e.slice(1));f.length&&s.apply(a,f)}u=c}return a}function d(t){var e=h(t,["moov"])[0],r=e?e.end:null,i=h(t,["sidx"]);if(!i||!i[0])return null;var n=[],a=i[0],s=a.data[0],o=0===s?8:16,u=l(a,o);o+=4;o+=0===s?8:16,o+=2;var d=a.end+0,c=function(t,e){"data"in t&&(e+=t.start,t=t.data);var r=t[e]<<8|t[e+1];return r<0?65536+r:r}(a,o);o+=2;for(var f=0;f<c;f++){var g=o,v=l(a,g);g+=4;var p=2147483647&v;if(1===(2147483648&v)>>>31)return console.warn("SIDX has hierarchical references (not supported)"),null;var m=l(a,g);g+=4,n.push({referenceSize:p,subsegmentDuration:m,info:{duration:m/u,start:d,end:d+p-1}}),d+=p,o=g+=4}return{earliestPresentationTime:0,timescale:u,version:s,referencesCount:c,references:n,moovEndOffset:r}}function c(t){for(var e=[],r=h(t,["moov","trak"]),i=0;i<r.length;i++){var a=r[i],s=h(a,["tkhd"])[0];if(s){var u=s.data[s.start],d=0===u?12:20,c=l(s,d),f=h(a,["mdia","mdhd"])[0];if(f){var g=l(f,d=0===(u=f.data[f.start])?12:20),v=h(a,["mdia","hdlr"])[0];if(v){var p=o(v.data.subarray(v.start+8,v.start+12)),m={soun:n.a.AUDIO,vide:n.a.VIDEO}[p];if(m){var y=h(a,["mdia","minf","stbl","stsd"])[0],T=void 0;y&&(T=o(y.data.subarray(y.start+12,y.start+16))),e[c]={timescale:g,type:m},e[m]={timescale:g,id:c,codec:T}}}}}}return h(t,["moov","mvex","trex"]).forEach((function(t){var r=l(t,4),i=e[r];i&&(i.default={duration:l(t,12),flags:l(t,20)})})),e}function f(t,e){return h(e,["moof","traf"]).reduce((function(e,r){var i=h(r,["tfdt"])[0],n=i.data[i.start],a=h(r,["tfhd"]).reduce((function(e,r){var a=l(r,4),s=t[a];if(s){var o=l(i,4);1===n&&(o*=Math.pow(2,32),o+=l(i,8));var u=o/(s.timescale||9e4);if(isFinite(u)&&(null===e||u<e))return u}return e}),null);return null!==a&&isFinite(a)&&(null===e||a<e)?a:e}),null)||0}function g(t,e){for(var r=0,i=0,a=0,s=h(t,["moof","traf"]),o=0;o<s.length;o++){var u=s[o],c=h(u,["tfhd"])[0],f=e[l(c,4)];if(f){var g=f.default,p=l(c,0)|(null==g?void 0:g.flags),m=null==g?void 0:g.duration;8&p&&(m=l(c,2&p?12:8));for(var y=f.timescale||9e4,T=h(u,["trun"]),b=0;b<T.length;b++){if(!(r=v(T[b]))&&m)r=m*l(T[b],4);f.type===n.a.VIDEO?i+=r/y:f.type===n.a.AUDIO&&(a+=r/y)}}}if(0===i&&0===a){var E=d(t);if(null!=E&&E.references)return E.references.reduce((function(t,e){return t+e.info.duration||0}),0)}return i||a}function v(t){var e=l(t,0),r=8;1&e&&(r+=4),4&e&&(r+=4);for(var i=0,n=l(t,4),a=0;a<n;a++){if(256&e)i+=l(t,r),r+=4;512&e&&(r+=4),1024&e&&(r+=4),2048&e&&(r+=4)}return i}function p(t,e,r){h(e,["moof","traf"]).forEach((function(e){h(e,["tfhd"]).forEach((function(i){var n=l(i,4),s=t[n];if(s){var o=s.timescale||9e4;h(e,["tfdt"]).forEach((function(t){var e=t.data[t.start],i=l(t,4);if(0===e)u(t,4,i-r*o);else{i*=Math.pow(2,32),i+=l(t,8),i-=r*o,i=Math.max(i,0);var n=Math.floor(i/(a+1)),s=Math.floor(i%(a+1));u(t,4,n),u(t,8,s)}}))}}))}))}function m(t){var e={valid:null,remainder:null},r=h(t,["moof"]);if(!r)return e;if(r.length<2)return e.remainder=t,e;var n=r[r.length-1];return e.valid=Object(i.a)(t,0,n.start-8),e.remainder=Object(i.a)(t,n.start-8),e}function y(t,e){var r=new Uint8Array(t.length+e.length);return r.set(t),r.set(e,t.length),r}},function(t,e,r){"use strict";r.d(e,"b",(function(){return s})),r.d(e,"a",(function(){return l})),r.d(e,"d",(function(){return u})),r.d(e,"e",(function(){return h})),r.d(e,"c",(function(){return c})),r.d(e,"f",(function(){return y}));var i,n=function(t,e){return e+10<=t.length&&73===t[e]&&68===t[e+1]&&51===t[e+2]&&t[e+3]<255&&t[e+4]<255&&t[e+6]<128&&t[e+7]<128&&t[e+8]<128&&t[e+9]<128},a=function(t,e){return e+10<=t.length&&51===t[e]&&68===t[e+1]&&73===t[e+2]&&t[e+3]<255&&t[e+4]<255&&t[e+6]<128&&t[e+7]<128&&t[e+8]<128&&t[e+9]<128},s=function(t,e){for(var r=e,i=0;n(t,e);){i+=10,i+=o(t,e+6),a(t,e+10)&&(i+=10),e+=i}if(i>0)return t.subarray(r,r+i)},o=function(t,e){var r=0;return r=(127&t[e])<<21,r|=(127&t[e+1])<<14,r|=(127&t[e+2])<<7,r|=127&t[e+3]},l=function(t,e){return n(t,e)&&o(t,e+6)+10<=t.length-e},u=function(t){for(var e=c(t),r=0;r<e.length;r++){var i=e[r];if(h(i))return m(i)}},h=function(t){return t&&"PRIV"===t.key&&"com.apple.streaming.transportStreamTimestamp"===t.info},d=function(t){var e=String.fromCharCode(t[0],t[1],t[2],t[3]),r=o(t,4);return{type:e,size:r,data:t.subarray(10,10+r)}},c=function(t){for(var e=0,r=[];n(t,e);){for(var i=o(t,e+6),s=(e+=10)+i;e+8<s;){var l=d(t.subarray(e)),u=f(l);u&&r.push(u),e+=l.size+10}a(t,e)&&(e+=10)}return r},f=function(t){return"PRIV"===t.type?g(t):"W"===t.type[0]?p(t):v(t)},g=function(t){if(!(t.size<2)){var e=y(t.data,!0),r=new Uint8Array(t.data.subarray(e.length+1));return{key:t.type,info:e,data:r.buffer}}},v=function(t){if(!(t.size<2)){if("TXXX"===t.type){var e=1,r=y(t.data.subarray(e),!0);e+=r.length+1;var i=y(t.data.subarray(e));return{key:t.type,info:r,data:i}}var n=y(t.data.subarray(1));return{key:t.type,data:n}}},p=function(t){if("WXXX"===t.type){if(t.size<2)return;var e=1,r=y(t.data.subarray(e),!0);e+=r.length+1;var i=y(t.data.subarray(e));return{key:t.type,info:r,data:i}}var n=y(t.data);return{key:t.type,data:n}},m=function(t){if(8===t.data.byteLength){var e=new Uint8Array(t.data),r=1&e[3],i=(e[4]<<23)+(e[5]<<15)+(e[6]<<7)+e[7];return i/=45,r&&(i+=47721858.84),Math.round(i)}},y=function(t,e){void 0===e&&(e=!1);var r=T();if(r){var i=r.decode(t);if(e){var n=i.indexOf("\0");return-1!==n?i.substring(0,n):i}return i.replace(/\0/g,"")}for(var a,s,o,l=t.length,u="",h=0;h<l;){if(0===(a=t[h++])&&e)return u;if(0!==a&&3!==a)switch(a>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:u+=String.fromCharCode(a);break;case 12:case 13:s=t[h++],u+=String.fromCharCode((31&a)<<6|63&s);break;case 14:s=t[h++],o=t[h++],u+=String.fromCharCode((15&a)<<12|(63&s)<<6|(63&o)<<0)}}return u};function T(){return i||void 0===self.TextDecoder||(i=new self.TextDecoder("utf-8")),i}},function(t,e,r){"use strict";r.d(e,"c",(function(){return n})),r.d(e,"b",(function(){return a})),r.d(e,"a",(function(){return s}));function i(t,e,r,i){void 0===r&&(r=1),void 0===i&&(i=!1);var n=t*e*r;return i?Math.round(n):n}function n(t,e,r,n){return void 0===r&&(r=1),void 0===n&&(n=!1),i(t,e,1/r,n)}function a(t,e){return void 0===e&&(e=!1),i(t,1e3,1/9e4,e)}function s(t,e){return void 0===e&&(e=1),i(t,9e4,1/e)}},function(t,e,r){"use strict";function i(t,e,r){return Uint8Array.prototype.slice?t.slice(e,r):new Uint8Array(Array.prototype.slice.call(t,e,r))}r.d(e,"a",(function(){return i}))},function(t,e,r){"use strict";r.d(e,"c",(function(){return lt})),r.d(e,"d",(function(){return ht})),r.d(e,"a",(function(){return dt})),r.d(e,"b",(function(){return ct}));var i=r(0),n=r(2),a=r(15),s=r(3),o=r(7);var l=r(6),u=r(9),h=function(){function t(){this._audioTrack=void 0,this._id3Track=void 0,this.frameIndex=0,this.cachedData=null,this.initPTS=null}var e=t.prototype;return e.resetInitSegment=function(t,e,r){this._id3Track={type:"id3",id:3,pid:-1,inputTimeScale:9e4,sequenceNumber:0,samples:[],dropped:0}},e.resetTimeStamp=function(){},e.resetContiguity=function(){},e.canParse=function(t,e){return!1},e.appendFrame=function(t,e,r){},e.demux=function(t,e){this.cachedData&&(t=Object(l.a)(this.cachedData,t),this.cachedData=null);var r,i,n=o.b(t,0),a=n?n.length:0,s=this._audioTrack,h=this._id3Track,c=n?o.d(n):void 0,f=t.length;for(0!==this.frameIndex&&null!==this.initPTS||(this.initPTS=d(c,e)),n&&n.length>0&&h.samples.push({pts:this.initPTS,dts:this.initPTS,data:n}),i=this.initPTS;a<f;){if(this.canParse(t,a)){var g=this.appendFrame(s,t,a);g?(this.frameIndex++,i=g.sample.pts,r=a+=g.length):a=f}else o.a(t,a)?(n=o.b(t,a),h.samples.push({pts:i,dts:i,data:n}),r=a+=n.length):a++;if(a===f&&r!==f){var v=Object(u.a)(t,r);this.cachedData?this.cachedData=Object(l.a)(this.cachedData,v):this.cachedData=v}}return{audioTrack:s,avcTrack:{type:"",id:-1,pid:-1,inputTimeScale:9e4,sequenceNumber:-1,samples:[],dropped:0},id3Track:h,textTrack:{type:"",id:-1,pid:-1,inputTimeScale:9e4,sequenceNumber:-1,samples:[],dropped:0}}},e.demuxSampleAes=function(t,e,r){return Promise.reject(new Error("["+this+"] This demuxer does not support Sample-AES decryption"))},e.flush=function(t){var e=this.cachedData;return e&&(this.cachedData=null,this.demux(e,0)),this.frameIndex=0,{audioTrack:this._audioTrack,avcTrack:{type:"",id:-1,pid:-1,inputTimeScale:9e4,sequenceNumber:-1,samples:[],dropped:0},id3Track:this._id3Track,textTrack:{type:"",id:-1,pid:-1,inputTimeScale:9e4,sequenceNumber:-1,samples:[],dropped:0}}},e.destroy=function(){},t}(),d=function(t,e){return Object(s.a)(t)?90*t:9e4*e},c=h,f=r(1);function g(t,e){return 255===t[e]&&240==(246&t[e+1])}function v(t,e){return 1&t[e+1]?7:9}function p(t,e){return(3&t[e+3])<<11|t[e+4]<<3|(224&t[e+5])>>>5}function m(t,e){return e+1<t.length&&g(t,e)}function y(t,e){if(m(t,e)){var r=v(t,e);if(e+r>=t.length)return!1;var i=p(t,e);if(i<=r)return!1;var n=e+i;return n===t.length||m(t,n)}return!1}function T(t,e,r,a,s){if(!t.samplerate){var o=function(t,e,r,a){var s,o,l,u,h=navigator.userAgent.toLowerCase(),d=a,c=[96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350];s=1+((192&e[r+2])>>>6);var g=(60&e[r+2])>>>2;if(!(g>c.length-1))return l=(1&e[r+2])<<2,l|=(192&e[r+3])>>>6,f.b.log("manifest codec:"+a+", ADTS type:"+s+", samplingIndex:"+g),/firefox/i.test(h)?g>=6?(s=5,u=new Array(4),o=g-3):(s=2,u=new Array(2),o=g):-1!==h.indexOf("android")?(s=2,u=new Array(2),o=g):(s=5,u=new Array(4),a&&(-1!==a.indexOf("mp4a.40.29")||-1!==a.indexOf("mp4a.40.5"))||!a&&g>=6?o=g-3:((a&&-1!==a.indexOf("mp4a.40.2")&&(g>=6&&1===l||/vivaldi/i.test(h))||!a&&1===l)&&(s=2,u=new Array(2)),o=g)),u[0]=s<<3,u[0]|=(14&g)>>1,u[1]|=(1&g)<<7,u[1]|=l<<3,5===s&&(u[1]|=(14&o)>>1,u[2]=(1&o)<<7,u[2]|=8,u[3]=0),{config:u,samplerate:c[g],channelCount:l,codec:"mp4a.40."+s,manifestCodec:d};t.trigger(i.a.ERROR,{type:n.b.MEDIA_ERROR,details:n.a.FRAG_PARSING_ERROR,fatal:!0,reason:"invalid ADTS sampling index:"+g})}(e,r,a,s);if(!o)return;t.config=o.config,t.samplerate=o.samplerate,t.channelCount=o.channelCount,t.codec=o.codec,t.manifestCodec=o.manifestCodec,f.b.log("parsed codec:"+t.codec+", rate:"+o.samplerate+", channels:"+o.channelCount)}}function b(t){return 9216e4/t}function E(t,e,r,i,n){var a=function(t,e,r,i,n){var a=v(t,e),s=p(t,e);if((s-=a)>0)return{headerLength:a,frameLength:s,stamp:r+i*n}}(e,r,i,n,b(t.samplerate));if(a){var s,o=a.frameLength,l=a.headerLength,u=a.stamp,h=l+o,d=Math.max(0,r+h-e.length);d?(s=new Uint8Array(h-l)).set(e.subarray(r+l,e.length),0):s=e.subarray(r+l,r+h);var c={unit:s,pts:u};return d||t.samples.push(c),{sample:c,length:h,missing:d}}}function S(t,e){return(S=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var L=function(t){var e,r;function i(e,r){var i;return(i=t.call(this)||this).observer=void 0,i.config=void 0,i.observer=e,i.config=r,i}r=t,(e=i).prototype=Object.create(r.prototype),e.prototype.constructor=e,S(e,r);var n=i.prototype;return n.resetInitSegment=function(e,r,i){t.prototype.resetInitSegment.call(this,e,r,i),this._audioTrack={container:"audio/adts",type:"audio",id:2,pid:-1,sequenceNumber:0,isAAC:!0,samples:[],manifestCodec:e,duration:i,inputTimeScale:9e4,dropped:0}},i.probe=function(t){if(!t)return!1;for(var e=(o.b(t,0)||[]).length,r=t.length;e<r;e++)if(y(t,e))return f.b.log("ADTS sync word found !"),!0;return!1},n.canParse=function(t,e){return function(t,e){return function(t,e){return e+5<t.length}(t,e)&&g(t,e)&&p(t,e)<=t.length-e}(t,e)},n.appendFrame=function(t,e,r){T(t,this.observer,e,r,t.manifestCodec);var i=E(t,e,r,this.initPTS,this.frameIndex);if(i&&0===i.missing)return i},i}(c);L.minProbeByteLength=9;var A=L,R=function(){function t(t,e){this.remainderData=null,this.config=void 0,this.config=e}var e=t.prototype;return e.resetTimeStamp=function(){},e.resetInitSegment=function(){},e.resetContiguity=function(){},t.probe=function(t){return Object(l.b)({data:t,start:0,end:Math.min(t.length,16384)},["moof"]).length>0},e.demux=function(t){var e=t,r={type:"",id:-1,pid:-1,inputTimeScale:9e4,sequenceNumber:-1,samples:[],dropped:0};if(this.config.progressive){this.remainderData&&(e=Object(l.a)(this.remainderData,t));var i=Object(l.h)(e);this.remainderData=i.remainder,r.samples=i.valid||new Uint8Array}else r.samples=e;return{audioTrack:{type:"",id:-1,pid:-1,inputTimeScale:9e4,sequenceNumber:-1,samples:[],dropped:0},avcTrack:r,id3Track:{type:"",id:-1,pid:-1,inputTimeScale:9e4,sequenceNumber:-1,samples:[],dropped:0},textTrack:{type:"",id:-1,pid:-1,inputTimeScale:9e4,sequenceNumber:-1,samples:[],dropped:0}}},e.flush=function(){var t={type:"",id:-1,pid:-1,inputTimeScale:9e4,sequenceNumber:-1,samples:[],dropped:0};return t.samples=this.remainderData||new Uint8Array,this.remainderData=null,{audioTrack:{type:"",id:-1,pid:-1,inputTimeScale:9e4,sequenceNumber:-1,samples:[],dropped:0},avcTrack:t,id3Track:{type:"",id:-1,pid:-1,inputTimeScale:9e4,sequenceNumber:-1,samples:[],dropped:0},textTrack:{type:"",id:-1,pid:-1,inputTimeScale:9e4,sequenceNumber:-1,samples:[],dropped:0}}},e.demuxSampleAes=function(t,e,r){return Promise.reject(new Error("The MP4 demuxer does not support SAMPLE-AES decryption"))},e.destroy=function(){},t}();R.minProbeByteLength=1024;var D=R,k=null,_=[32,64,96,128,160,192,224,256,288,320,352,384,416,448,32,48,56,64,80,96,112,128,160,192,224,256,320,384,32,40,48,56,64,80,96,112,128,160,192,224,256,320,32,48,56,64,80,96,112,128,144,160,176,192,224,256,8,16,24,32,40,48,56,64,80,96,112,128,144,160],I=[44100,48e3,32e3,22050,24e3,16e3,11025,12e3,8e3],C=[[0,72,144,12],[0,0,0,0],[0,72,144,12],[0,144,144,12]],w=[0,1,1,4];function O(t,e,r,i,n){if(!(r+24>e.length)){var a=x(e,r);if(a&&r+a.frameLength<=e.length){var s=i+n*(9e4*a.samplesPerFrame/a.sampleRate),o={unit:e.subarray(r,r+a.frameLength),pts:s,dts:s};return t.config=[],t.channelCount=a.channelCount,t.samplerate=a.sampleRate,t.samples.push(o),{sample:o,length:a.frameLength,missing:0}}}}function x(t,e){var r=t[e+1]>>3&3,i=t[e+1]>>1&3,n=t[e+2]>>4&15,a=t[e+2]>>2&3;if(1!==r&&0!==n&&15!==n&&3!==a){var s=t[e+2]>>1&1,o=t[e+3]>>6,l=1e3*_[14*(3===r?3-i:3===i?3:4)+n-1],u=I[3*(3===r?0:2===r?1:2)+a],h=3===o?1:2,d=C[r][i],c=w[i],f=8*d*c,g=Math.floor(d*l/u+s)*c;if(null===k){var v=(navigator.userAgent||"").match(/Chrome\/(\d+)/i);k=v?parseInt(v[1]):0}return!!k&&k<=87&&2===i&&l>=224e3&&0===o&&(t[e+3]=128|t[e+3]),{sampleRate:u,channelCount:h,frameLength:g,samplesPerFrame:f}}}function P(t,e){return 255===t[e]&&224==(224&t[e+1])&&0!=(6&t[e+1])}function M(t,e){return e+1<t.length&&P(t,e)}function F(t,e){if(e+1<t.length&&P(t,e)){var r=x(t,e),i=4;null!=r&&r.frameLength&&(i=r.frameLength);var n=e+i;return n===t.length||M(t,n)}return!1}var N=function(){function t(t){this.data=void 0,this.bytesAvailable=void 0,this.word=void 0,this.bitsAvailable=void 0,this.data=t,this.bytesAvailable=t.byteLength,this.word=0,this.bitsAvailable=0}var e=t.prototype;return e.loadWord=function(){var t=this.data,e=this.bytesAvailable,r=t.byteLength-e,i=new Uint8Array(4),n=Math.min(4,e);if(0===n)throw new Error("no bytes available");i.set(t.subarray(r,r+n)),this.word=new DataView(i.buffer).getUint32(0),this.bitsAvailable=8*n,this.bytesAvailable-=n},e.skipBits=function(t){var e;this.bitsAvailable>t?(this.word<<=t,this.bitsAvailable-=t):(t-=this.bitsAvailable,t-=(e=t>>3)>>3,this.bytesAvailable-=e,this.loadWord(),this.word<<=t,this.bitsAvailable-=t)},e.readBits=function(t){var e=Math.min(this.bitsAvailable,t),r=this.word>>>32-e;return t>32&&f.b.error("Cannot read more than 32 bits at a time"),this.bitsAvailable-=e,this.bitsAvailable>0?this.word<<=e:this.bytesAvailable>0&&this.loadWord(),(e=t-e)>0&&this.bitsAvailable?r<<e|this.readBits(e):r},e.skipLZ=function(){var t;for(t=0;t<this.bitsAvailable;++t)if(0!=(this.word&2147483648>>>t))return this.word<<=t,this.bitsAvailable-=t,t;return this.loadWord(),t+this.skipLZ()},e.skipUEG=function(){this.skipBits(1+this.skipLZ())},e.skipEG=function(){this.skipBits(1+this.skipLZ())},e.readUEG=function(){var t=this.skipLZ();return this.readBits(t+1)-1},e.readEG=function(){var t=this.readUEG();return 1&t?1+t>>>1:-1*(t>>>1)},e.readBoolean=function(){return 1===this.readBits(1)},e.readUByte=function(){return this.readBits(8)},e.readUShort=function(){return this.readBits(16)},e.readUInt=function(){return this.readBits(32)},e.skipScalingList=function(t){for(var e=8,r=8,i=0;i<t;i++)0!==r&&(r=(e+this.readEG()+256)%256),e=0===r?e:r},e.readSPS=function(){var t,e,r,i=0,n=0,a=0,s=0,o=this.readUByte.bind(this),l=this.readBits.bind(this),u=this.readUEG.bind(this),h=this.readBoolean.bind(this),d=this.skipBits.bind(this),c=this.skipEG.bind(this),f=this.skipUEG.bind(this),g=this.skipScalingList.bind(this);o();var v=o();if(l(5),d(3),o(),f(),100===v||110===v||122===v||244===v||44===v||83===v||86===v||118===v||128===v){var p=u();if(3===p&&d(1),f(),f(),d(1),h())for(e=3!==p?8:12,r=0;r<e;r++)h()&&g(r<6?16:64)}f();var m=u();if(0===m)u();else if(1===m)for(d(1),c(),c(),t=u(),r=0;r<t;r++)c();f(),d(1);var y=u(),T=u(),b=l(1);0===b&&d(1),d(1),h()&&(i=u(),n=u(),a=u(),s=u());var E=[1,1];if(h()&&h())switch(o()){case 1:E=[1,1];break;case 2:E=[12,11];break;case 3:E=[10,11];break;case 4:E=[16,11];break;case 5:E=[40,33];break;case 6:E=[24,11];break;case 7:E=[20,11];break;case 8:E=[32,11];break;case 9:E=[80,33];break;case 10:E=[18,11];break;case 11:E=[15,11];break;case 12:E=[64,33];break;case 13:E=[160,99];break;case 14:E=[4,3];break;case 15:E=[3,2];break;case 16:E=[2,1];break;case 255:E=[o()<<8|o(),o()<<8|o()]}return{width:Math.ceil(16*(y+1)-2*i-2*n),height:(2-b)*(T+1)*16-(b?2:4)*(a+s),pixelRatio:E}},e.readSliceType=function(){return this.readUByte(),this.readUEG(),this.readUEG()},t}(),U=function(){function t(t,e,r){this.keyData=void 0,this.decrypter=void 0,this.keyData=r,this.decrypter=new a.a(t,e,{removePKCS7Padding:!1})}var e=t.prototype;return e.decryptBuffer=function(t,e){this.decrypter.decrypt(t,this.keyData.key.buffer,this.keyData.iv.buffer,e)},e.decryptAacSample=function(t,e,r,i){var n=t[e].unit,a=n.subarray(16,n.length-n.length%16),s=a.buffer.slice(a.byteOffset,a.byteOffset+a.length),o=this;this.decryptBuffer(s,(function(a){var s=new Uint8Array(a);n.set(s,16),i||o.decryptAacSamples(t,e+1,r)}))},e.decryptAacSamples=function(t,e,r){for(;;e++){if(e>=t.length)return void r();if(!(t[e].unit.length<32)){var i=this.decrypter.isSync();if(this.decryptAacSample(t,e,r,i),!i)return}}},e.getAvcEncryptedData=function(t){for(var e=16*Math.floor((t.length-48)/160)+16,r=new Int8Array(e),i=0,n=32;n<t.length-16;n+=160,i+=16)r.set(t.subarray(n,n+16),i);return r},e.getAvcDecryptedUnit=function(t,e){for(var r=new Uint8Array(e),i=0,n=32;n<t.length-16;n+=160,i+=16)t.set(r.subarray(i,i+16),n);return t},e.decryptAvcSample=function(t,e,r,i,n,a){var s=q(n.data),o=this.getAvcEncryptedData(s),l=this;this.decryptBuffer(o.buffer,(function(o){n.data=l.getAvcDecryptedUnit(s,o),a||l.decryptAvcSamples(t,e,r+1,i)}))},e.decryptAvcSamples=function(t,e,r,i){if(t instanceof Uint8Array)throw new Error("Cannot decrypt samples of type Uint8Array");for(;;e++,r=0){if(e>=t.length)return void i();for(var n=t[e].units;!(r>=n.length);r++){var a=n[r];if(!(a.data.length<=48||1!==a.type&&5!==a.type)){var s=this.decrypter.isSync();if(this.decryptAvcSample(t,e,r,i,a,s),!s)return}}}},t}(),B={video:1,audio:2,id3:3,text:4},G=function(){function t(t,e,r){this.observer=void 0,this.config=void 0,this.typeSupported=void 0,this.sampleAes=null,this.pmtParsed=!1,this.audioCodec=void 0,this.videoCodec=void 0,this._duration=0,this.aacLastPTS=null,this._initPTS=null,this._initDTS=null,this._pmtId=-1,this._avcTrack=void 0,this._audioTrack=void 0,this._id3Track=void 0,this._txtTrack=void 0,this.aacOverFlow=null,this.avcSample=null,this.remainderData=null,this.observer=t,this.config=e,this.typeSupported=r}t.probe=function(e){var r=t.syncOffset(e);return!(r<0)&&(r&&f.b.warn("MPEG2-TS detected but first sync word found @ offset "+r+", junk ahead ?"),!0)},t.syncOffset=function(t){for(var e=Math.min(1e3,t.length-564),r=0;r<e;){if(71===t[r]&&71===t[r+188]&&71===t[r+376])return r;r++}return-1},t.createTrack=function(t,e){return{container:"video"===t||"audio"===t?"video/mp2t":void 0,type:t,id:B[t],pid:-1,inputTimeScale:9e4,sequenceNumber:0,samples:[],dropped:0,duration:"audio"===t?e:void 0}};var e=t.prototype;return e.resetInitSegment=function(e,r,i){this.pmtParsed=!1,this._pmtId=-1,this._avcTrack=t.createTrack("video",i),this._audioTrack=t.createTrack("audio",i),this._id3Track=t.createTrack("id3",i),this._txtTrack=t.createTrack("text",i),this._audioTrack.isAAC=!0,this.aacOverFlow=null,this.aacLastPTS=null,this.avcSample=null,this.audioCodec=e,this.videoCodec=r,this._duration=i},e.resetTimeStamp=function(){},e.resetContiguity=function(){var t=this._audioTrack,e=this._avcTrack,r=this._id3Track;t&&(t.pesData=null),e&&(e.pesData=null),r&&(r.pesData=null),this.aacOverFlow=null,this.aacLastPTS=null},e.demux=function(e,r,a,s){var o;void 0===a&&(a=!1),void 0===s&&(s=!1),a||(this.sampleAes=null);var u=this._avcTrack,h=this._audioTrack,d=this._id3Track,c=u.pid,g=u.pesData,v=h.pid,p=d.pid,m=h.pesData,y=d.pesData,T=!1,b=this.pmtParsed,E=this._pmtId,S=e.length;if(this.remainderData&&(S=(e=Object(l.a)(this.remainderData,e)).length,this.remainderData=null),S<188&&!s)return this.remainderData=e,{audioTrack:h,avcTrack:u,id3Track:d,textTrack:this._txtTrack};var L=Math.max(0,t.syncOffset(e));(S-=(S+L)%188)<e.byteLength&&!s&&(this.remainderData=new Uint8Array(e.buffer,S,e.buffer.byteLength-S));for(var A=0,R=L;R<S;R+=188)if(71===e[R]){var D=!!(64&e[R+1]),k=((31&e[R+1])<<8)+e[R+2],_=void 0;if((48&e[R+3])>>4>1){if((_=R+5+e[R+4])===R+188)continue}else _=R+4;switch(k){case c:D&&(g&&(o=V(g))&&this.parseAVCPES(o,!1),g={data:[],size:0}),g&&(g.data.push(e.subarray(_,R+188)),g.size+=R+188-_);break;case v:D&&(m&&(o=V(m))&&(h.isAAC?this.parseAACPES(o):this.parseMPEGPES(o)),m={data:[],size:0}),m&&(m.data.push(e.subarray(_,R+188)),m.size+=R+188-_);break;case p:D&&(y&&(o=V(y))&&this.parseID3PES(o),y={data:[],size:0}),y&&(y.data.push(e.subarray(_,R+188)),y.size+=R+188-_);break;case 0:D&&(_+=e[_]+1),E=this._pmtId=j(e,_);break;case E:D&&(_+=e[_]+1);var I=H(e,_,!0===this.typeSupported.mpeg||!0===this.typeSupported.mp3,a);(c=I.avc)>0&&(u.pid=c),(v=I.audio)>0&&(h.pid=v,h.isAAC=I.isAAC),(p=I.id3)>0&&(d.pid=p),T&&!b&&(f.b.log("reparse from beginning"),T=!1,R=L-188),b=this.pmtParsed=!0;break;case 17:case 8191:break;default:T=!0}}else A++;A>0&&this.observer.emit(i.a.ERROR,i.a.ERROR,{type:n.b.MEDIA_ERROR,details:n.a.FRAG_PARSING_ERROR,fatal:!1,reason:"Found "+A+" TS packet/s that do not start with 0x47"}),u.pesData=g,h.pesData=m,d.pesData=y;var C={audioTrack:h,avcTrack:u,id3Track:d,textTrack:this._txtTrack};return s&&this.extractRemainingSamples(C),C},e.flush=function(){var t,e=this.remainderData;return this.remainderData=null,t=e?this.demux(e,-1,!1,!0):{audioTrack:this._audioTrack,avcTrack:this._avcTrack,textTrack:this._txtTrack,id3Track:this._id3Track},this.extractRemainingSamples(t),this.sampleAes?this.decrypt(t,this.sampleAes):t},e.extractRemainingSamples=function(t){var e,r=t.audioTrack,i=t.avcTrack,n=t.id3Track,a=i.pesData,s=r.pesData,o=n.pesData;a&&(e=V(a))?(this.parseAVCPES(e,!0),i.pesData=null):i.pesData=a,s&&(e=V(s))?(r.isAAC?this.parseAACPES(e):this.parseMPEGPES(e),r.pesData=null):(null!=s&&s.size&&f.b.log("last AAC PES packet truncated,might overlap between fragments"),r.pesData=s),o&&(e=V(o))?(this.parseID3PES(e),n.pesData=null):n.pesData=o},e.demuxSampleAes=function(t,e,r){var i=this.demux(t,r,!0,!this.config.progressive),n=this.sampleAes=new U(this.observer,this.config,e);return this.decrypt(i,n)},e.decrypt=function(t,e){return new Promise((function(r){var i=t.audioTrack,n=t.avcTrack;i.samples&&i.isAAC?e.decryptAacSamples(i.samples,0,(function(){n.samples?e.decryptAvcSamples(n.samples,0,0,(function(){r(t)})):r(t)})):n.samples&&e.decryptAvcSamples(n.samples,0,0,(function(){r(t)}))}))},e.destroy=function(){this._initPTS=this._initDTS=null,this._duration=0},e.parseAVCPES=function(t,e){var r,i=this,n=this._avcTrack,a=this.parseAVCNALu(t.data),s=this.avcSample,l=!1;t.data=null,s&&a.length&&!n.audFound&&(W(s,n),s=this.avcSample=K(!1,t.pts,t.dts,"")),a.forEach((function(e){switch(e.type){case 1:r=!0,s||(s=i.avcSample=K(!0,t.pts,t.dts,"")),s.frame=!0;var a=e.data;if(l&&a.length>4){var u=new N(a).readSliceType();2!==u&&4!==u&&7!==u&&9!==u||(s.key=!0)}break;case 5:r=!0,s||(s=i.avcSample=K(!0,t.pts,t.dts,"")),s.key=!0,s.frame=!0;break;case 6:r=!0;var h=new N(q(e.data));h.readUByte();for(var d=0,c=0,f=!1,g=0;!f&&h.bytesAvailable>1;){d=0;do{d+=g=h.readUByte()}while(255===g);c=0;do{c+=g=h.readUByte()}while(255===g);if(4===d&&0!==h.bytesAvailable){if(f=!0,181===h.readUByte())if(49===h.readUShort())if(1195456820===h.readUInt())if(3===h.readUByte()){for(var v=h.readUByte(),p=31&v,m=[v,h.readUByte()],y=0;y<p;y++)m.push(h.readUByte()),m.push(h.readUByte()),m.push(h.readUByte());Y(i._txtTrack.samples,{type:3,pts:t.pts,bytes:m})}}else if(5===d&&0!==h.bytesAvailable){if(f=!0,c>16){for(var T=[],b=0;b<16;b++)T.push(h.readUByte().toString(16)),3!==b&&5!==b&&7!==b&&9!==b||T.push("-");for(var E=c-16,S=new Uint8Array(E),L=0;L<E;L++)S[L]=h.readUByte();Y(i._txtTrack.samples,{pts:t.pts,payloadType:d,uuid:T.join(""),userData:Object(o.f)(S),userDataBytes:S})}}else if(c<h.bytesAvailable)for(var A=0;A<c;A++)h.readUByte()}break;case 7:if(r=!0,l=!0,!n.sps){var R=new N(e.data).readSPS();n.width=R.width,n.height=R.height,n.pixelRatio=R.pixelRatio,n.sps=[e.data],n.duration=i._duration;for(var D=e.data.subarray(1,4),k="avc1.",_=0;_<3;_++){var I=D[_].toString(16);I.length<2&&(I="0"+I),k+=I}n.codec=k}break;case 8:r=!0,n.pps||(n.pps=[e.data]);break;case 9:r=!1,n.audFound=!0,s&&W(s,n),s=i.avcSample=K(!1,t.pts,t.dts,"");break;case 12:r=!1;break;default:r=!1,s&&(s.debug+="unknown NAL "+e.type+" ")}s&&r&&s.units.push(e)})),e&&s&&(W(s,n),this.avcSample=null)},e.getLastNalUnit=function(){var t,e,r=this.avcSample;if(!r||0===r.units.length){var i=this._avcTrack.samples;r=i[i.length-1]}if(null!==(t=r)&&void 0!==t&&t.units){var n=r.units;e=n[n.length-1]}return e},e.parseAVCNALu=function(t){var e,r,i=t.byteLength,n=this._avcTrack,a=n.naluState||0,s=a,o=[],l=0,u=-1,h=0;for(-1===a&&(u=0,h=31&t[0],a=0,l=1);l<i;)if(e=t[l++],a)if(1!==a)if(e)if(1===e){if(u>=0){var d={data:t.subarray(u,l-a-1),type:h};o.push(d)}else{var c=this.getLastNalUnit();if(c&&(s&&l<=4-s&&c.state&&(c.data=c.data.subarray(0,c.data.byteLength-s)),(r=l-a-1)>0)){var f=new Uint8Array(c.data.byteLength+r);f.set(c.data,0),f.set(t.subarray(0,r),c.data.byteLength),c.data=f,c.state=0}}l<i?(u=l,h=31&t[l],a=0):a=-1}else a=0;else a=3;else a=e?0:2;else a=e?0:1;if(u>=0&&a>=0){var g={data:t.subarray(u,i),type:h,state:a};o.push(g)}if(0===o.length){var v=this.getLastNalUnit();if(v){var p=new Uint8Array(v.data.byteLength+t.byteLength);p.set(v.data,0),p.set(t,v.data.byteLength),v.data=p}}return n.naluState=a,o},e.parseAACPES=function(t){var e,r,a,s,o,l=0,u=this._audioTrack,h=this.aacOverFlow,d=t.data;if(h){this.aacOverFlow=null;var c=h.sample.unit.byteLength,g=Math.min(h.missing,c),v=c-g;h.sample.unit.set(d.subarray(0,g),v),u.samples.push(h.sample),l=h.missing}for(e=l,r=d.length;e<r-1&&!m(d,e);e++);if(e!==l&&(e<r-1?(a="AAC PES did not start with ADTS header,offset:"+e,s=!1):(a="no ADTS header found in AAC PES",s=!0),f.b.warn("parsing error:"+a),this.observer.emit(i.a.ERROR,i.a.ERROR,{type:n.b.MEDIA_ERROR,details:n.a.FRAG_PARSING_ERROR,fatal:s,reason:a}),s))return;if(T(u,this.observer,d,e,this.audioCodec),void 0!==t.pts)o=t.pts;else{if(!h)return void f.b.warn("[tsdemuxer]: AAC PES unknown PTS");var p=b(u.samplerate);o=h.sample.pts+p}for(var y=0;e<r;){if(m(d,e)){if(e+5<r){var S=E(u,d,e,o,y);if(S){if(!S.missing){e+=S.length,y++;continue}this.aacOverFlow=S}}break}e++}},e.parseMPEGPES=function(t){var e=t.data,r=e.length,i=0,n=0,a=t.pts;if(void 0!==a)for(;n<r;)if(M(e,n)){var s=O(this._audioTrack,e,n,a,i);if(!s)break;n+=s.length,i++}else n++;else f.b.warn("[tsdemuxer]: MPEG PES unknown PTS")},e.parseID3PES=function(t){void 0!==t.pts?this._id3Track.samples.push(t):f.b.warn("[tsdemuxer]: ID3 PES unknown PTS")},t}();function K(t,e,r,i){return{key:t,frame:!1,pts:e,dts:r,units:[],debug:i,length:0}}function j(t,e){return(31&t[e+10])<<8|t[e+11]}function H(t,e,r,i){var n={audio:-1,avc:-1,id3:-1,isAAC:!0},a=e+3+((15&t[e+1])<<8|t[e+2])-4;for(e+=12+((15&t[e+10])<<8|t[e+11]);e<a;){var s=(31&t[e+1])<<8|t[e+2];switch(t[e]){case 207:if(!i){f.b.log("ADTS AAC with AES-128-CBC frame encryption found in unencrypted stream");break}case 15:-1===n.audio&&(n.audio=s);break;case 21:-1===n.id3&&(n.id3=s);break;case 219:if(!i){f.b.log("H.264 with AES-128-CBC slice encryption found in unencrypted stream");break}case 27:-1===n.avc&&(n.avc=s);break;case 3:case 4:r?-1===n.audio&&(n.audio=s,n.isAAC=!1):f.b.log("MPEG audio found, not supported in this browser");break;case 36:f.b.warn("Unsupported HEVC stream type found")}e+=5+((15&t[e+3])<<8|t[e+4])}return n}function V(t){var e,r,i,n,a,s=0,o=t.data;if(!t||0===t.size)return null;for(;o[0].length<19&&o.length>1;){var l=new Uint8Array(o[0].length+o[1].length);l.set(o[0]),l.set(o[1],o[0].length),o[0]=l,o.splice(1,1)}if(1===((e=o[0])[0]<<16)+(e[1]<<8)+e[2]){if((r=(e[4]<<8)+e[5])&&r>t.size-6)return null;var u=e[7];192&u&&(n=536870912*(14&e[9])+4194304*(255&e[10])+16384*(254&e[11])+128*(255&e[12])+(254&e[13])/2,64&u?n-(a=536870912*(14&e[14])+4194304*(255&e[15])+16384*(254&e[16])+128*(255&e[17])+(254&e[18])/2)>54e5&&(f.b.warn(Math.round((n-a)/9e4)+"s delta between PTS and DTS, align them"),n=a):a=n);var h=(i=e[8])+9;if(t.size<=h)return null;t.size-=h;for(var d=new Uint8Array(t.size),c=0,g=o.length;c<g;c++){var v=(e=o[c]).byteLength;if(h){if(h>v){h-=v;continue}e=e.subarray(h),v-=h,h=0}d.set(e,s),s+=v}return r&&(r-=i+3),{data:d,pts:n,dts:a,len:r}}return null}function W(t,e){if(t.units.length&&t.frame){if(void 0===t.pts){var r=e.samples,i=r.length;if(!i)return void e.dropped++;var n=r[i-1];t.pts=n.pts,t.dts=n.dts}e.samples.push(t)}t.debug.length&&f.b.log(t.pts+"/"+t.dts+":"+t.debug)}function Y(t,e){var r=t.length;if(r>0){if(e.pts>=t[r-1].pts)t.push(e);else for(var i=r-1;i>=0;i--)if(e.pts<t[i].pts){t.splice(i,0,e);break}}else t.push(e)}function q(t){for(var e=t.byteLength,r=[],i=1;i<e-2;)0===t[i]&&0===t[i+1]&&3===t[i+2]?(r.push(i+2),i+=2):i++;if(0===r.length)return t;var n=e-r.length,a=new Uint8Array(n),s=0;for(i=0;i<n;s++,i++)s===r[0]&&(s++,r.shift()),a[i]=t[s];return a}G.minProbeByteLength=188;var X=G;function z(t,e){return(z=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var Q=function(t){var e,r;function i(){return t.apply(this,arguments)||this}r=t,(e=i).prototype=Object.create(r.prototype),e.prototype.constructor=e,z(e,r);var n=i.prototype;return n.resetInitSegment=function(e,r,i){t.prototype.resetInitSegment.call(this,e,r,i),this._audioTrack={container:"audio/mpeg",type:"audio",id:2,pid:-1,sequenceNumber:0,isAAC:!1,samples:[],manifestCodec:e,duration:i,inputTimeScale:9e4,dropped:0}},i.probe=function(t){if(!t)return!1;for(var e=(o.b(t,0)||[]).length,r=t.length;e<r;e++)if(F(t,e))return f.b.log("MPEG Audio sync word found !"),!0;return!1},n.canParse=function(t,e){return function(t,e){return P(t,e)&&4<=t.length-e}(t,e)},n.appendFrame=function(t,e,r){if(null!==this.initPTS)return O(t,e,r,this.initPTS,this.frameIndex)},i}(c);Q.minProbeByteLength=4;var $=Q,J=r(16),Z=r(5),tt=function(){function t(){this.emitInitSegment=!1,this.audioCodec=void 0,this.videoCodec=void 0,this.initData=void 0,this.initPTS=void 0,this.initTracks=void 0,this.lastEndDTS=null}var e=t.prototype;return e.destroy=function(){},e.resetTimeStamp=function(t){this.initPTS=t,this.lastEndDTS=null},e.resetNextTimestamp=function(){this.lastEndDTS=null},e.resetInitSegment=function(t,e,r){this.audioCodec=e,this.videoCodec=r,this.generateInitSegment(t),this.emitInitSegment=!0},e.generateInitSegment=function(t){var e=this.audioCodec,r=this.videoCodec;if(!t||!t.byteLength)return this.initTracks=void 0,void(this.initData=void 0);var i=this.initData=Object(l.f)(t);e||(e=rt(i.audio,Z.a.AUDIO)),r||(r=rt(i.video,Z.a.VIDEO));var n={};i.audio&&i.video?n.audiovideo={container:"video/mp4",codec:e+","+r,initSegment:t,id:"main"}:i.audio?n.audio={container:"audio/mp4",codec:e,initSegment:t,id:"audio"}:i.video?n.video={container:"video/mp4",codec:r,initSegment:t,id:"main"}:f.b.warn("[passthrough-remuxer.ts]: initSegment does not contain moov or trak boxes."),this.initTracks=n},e.remux=function(t,e,r,i,n){var a=this.initPTS,o=this.lastEndDTS,u={audio:void 0,video:void 0,text:i,id3:r,initSegment:void 0};Object(s.a)(o)||(o=this.lastEndDTS=n||0);var h=e.samples;if(!h||!h.length)return u;var d={initPTS:void 0,timescale:1},c=this.initData;if(c&&c.length||(this.generateInitSegment(h),c=this.initData),!c||!c.length)return f.b.warn("[passthrough-remuxer.ts]: Failed to generate initSegment."),u;this.emitInitSegment&&(d.tracks=this.initTracks,this.emitInitSegment=!1),Object(s.a)(a)||(this.initPTS=d.initPTS=a=et(c,h,o));var g=Object(l.c)(h,c),v=o,p=g+v;Object(l.e)(c,h,a),g>0?this.lastEndDTS=p:(f.b.warn("Duration parsed from mp4 should be greater than zero"),this.resetNextTimestamp());var m=!!c.audio,y=!!c.video,T="";m&&(T+="audio"),y&&(T+="video");var b={data1:h,startPTS:v,startDTS:v,endPTS:p,endDTS:p,type:T,hasAudio:m,hasVideo:y,nb:1,dropped:0};return u.audio="audio"===b.type?b:void 0,u.video="audio"!==b.type?b:void 0,u.text=i,u.id3=r,u.initSegment=d,u},t}(),et=function(t,e,r){return Object(l.d)(t,e)-r};function rt(t,e){var r=null==t?void 0:t.codec;return r&&r.length>4?r:"hvc1"===r?"hvc1.1.c.L120.90":"av01"===r?"av01.0.04M.08":"avc1"===r||e===Z.a.VIDEO?"avc1.42e01e":"mp4a.40.5"}var it,nt=tt,at=r(13);try{it=self.performance.now.bind(self.performance)}catch(t){f.b.debug("Unable to use Performance API on this environment"),it=self.Date.now}var st=[{demux:X,remux:J.a},{demux:D,remux:nt},{demux:A,remux:J.a},{demux:$,remux:J.a}],ot=1024;st.forEach((function(t){var e=t.demux;ot=Math.max(ot,e.minProbeByteLength)}));var lt=function(){function t(t,e,r,i,n){this.observer=void 0,this.typeSupported=void 0,this.config=void 0,this.vendor=void 0,this.id=void 0,this.demuxer=void 0,this.remuxer=void 0,this.decrypter=void 0,this.probe=void 0,this.decryptionPromise=null,this.transmuxConfig=void 0,this.currentTransmuxState=void 0,this.cache=new at.a,this.observer=t,this.typeSupported=e,this.config=r,this.vendor=i,this.id=n}var e=t.prototype;return e.configure=function(t){this.transmuxConfig=t,this.decrypter&&this.decrypter.reset()},e.push=function(t,e,r,i){var n=this,a=r.transmuxing;a.executeStart=it();var s=new Uint8Array(t),o=this.cache,u=this.config,h=this.currentTransmuxState,d=this.transmuxConfig;i&&(this.currentTransmuxState=i);var c=function(t,e){var r=null;t.byteLength>0&&null!=e&&null!=e.key&&null!==e.iv&&null!=e.method&&(r=e);return r}(s,e);if(c&&"AES-128"===c.method){var f=this.getDecrypter();if(!u.enableSoftwareAES)return this.decryptionPromise=f.webCryptoDecrypt(s,c.key.buffer,c.iv.buffer).then((function(t){var e=n.push(t,null,r);return n.decryptionPromise=null,e})),this.decryptionPromise;var g=f.softwareDecrypt(s,c.key.buffer,c.iv.buffer);if(!g)return a.executeEnd=it(),ut(r);s=new Uint8Array(g)}var v=i||h,p=v.contiguous,m=v.discontinuity,y=v.trackSwitch,T=v.accurateTimeOffset,b=v.timeOffset,E=v.initSegmentChange,S=d.audioCodec,L=d.videoCodec,A=d.defaultInitPts,R=d.duration,D=d.initSegmentData;if((m||y||E)&&this.resetInitSegment(D,S,L,R),(m||E)&&this.resetInitialTimestamp(A),p||this.resetContiguity(),this.needsProbing(s,m,y)){if(o.dataLength){var k=o.flush();s=Object(l.a)(k,s)}this.configureTransmuxer(s,d)}var _=this.transmux(s,c,b,T,r),I=this.currentTransmuxState;return I.contiguous=!0,I.discontinuity=!1,I.trackSwitch=!1,a.executeEnd=it(),_},e.flush=function(t){var e=this,r=t.transmuxing;r.executeStart=it();var a=this.decrypter,s=this.cache,o=this.currentTransmuxState,l=this.decryptionPromise;if(l)return l.then((function(){return e.flush(t)}));var u=[],h=o.timeOffset;if(a){var d=a.flush();d&&u.push(this.push(d,null,t))}var c=s.dataLength;s.reset();var f=this.demuxer,g=this.remuxer;if(!f||!g)return c>=ot&&this.observer.emit(i.a.ERROR,i.a.ERROR,{type:n.b.MEDIA_ERROR,details:n.a.FRAG_PARSING_ERROR,fatal:!0,reason:"no demux matching with content found"}),r.executeEnd=it(),[ut(t)];var v=f.flush(h);return ht(v)?v.then((function(r){return e.flushRemux(u,r,t),u})):(this.flushRemux(u,v,t),u)},e.flushRemux=function(t,e,r){var i=e.audioTrack,n=e.avcTrack,a=e.id3Track,s=e.textTrack,o=this.currentTransmuxState,l=o.accurateTimeOffset,u=o.timeOffset;f.b.log("[transmuxer.ts]: Flushed fragment "+r.sn+(r.part>-1?" p: "+r.part:"")+" of level "+r.level);var h=this.remuxer.remux(i,n,a,s,u,l,!0,this.id);t.push({remuxResult:h,chunkMeta:r}),r.transmuxing.executeEnd=it()},e.resetInitialTimestamp=function(t){var e=this.demuxer,r=this.remuxer;e&&r&&(e.resetTimeStamp(t),r.resetTimeStamp(t))},e.resetContiguity=function(){var t=this.demuxer,e=this.remuxer;t&&e&&(t.resetContiguity(),e.resetNextTimestamp())},e.resetInitSegment=function(t,e,r,i){var n=this.demuxer,a=this.remuxer;n&&a&&(n.resetInitSegment(e,r,i),a.resetInitSegment(t,e,r))},e.destroy=function(){this.demuxer&&(this.demuxer.destroy(),this.demuxer=void 0),this.remuxer&&(this.remuxer.destroy(),this.remuxer=void 0)},e.transmux=function(t,e,r,i,n){return e&&"SAMPLE-AES"===e.method?this.transmuxSampleAes(t,e,r,i,n):this.transmuxUnencrypted(t,r,i,n)},e.transmuxUnencrypted=function(t,e,r,i){var n=this.demuxer.demux(t,e,!1,!this.config.progressive),a=n.audioTrack,s=n.avcTrack,o=n.id3Track,l=n.textTrack;return{remuxResult:this.remuxer.remux(a,s,o,l,e,r,!1,this.id),chunkMeta:i}},e.transmuxSampleAes=function(t,e,r,i,n){var a=this;return this.demuxer.demuxSampleAes(t,e,r).then((function(t){return{remuxResult:a.remuxer.remux(t.audioTrack,t.avcTrack,t.id3Track,t.textTrack,r,i,!1,a.id),chunkMeta:n}}))},e.configureTransmuxer=function(t,e){for(var r,i=this.config,n=this.observer,a=this.typeSupported,s=this.vendor,o=e.audioCodec,l=e.defaultInitPts,u=e.duration,h=e.initSegmentData,d=e.videoCodec,c=0,g=st.length;c<g;c++)if(st[c].demux.probe(t)){r=st[c];break}r||(f.b.warn("Failed to find demuxer by probing frag, treating as mp4 passthrough"),r={demux:D,remux:nt});var v=this.demuxer,p=this.remuxer,m=r.remux,y=r.demux;p&&p instanceof m||(this.remuxer=new m(n,i,a,s)),v&&v instanceof y||(this.demuxer=new y(n,i,a),this.probe=y.probe),this.resetInitSegment(h,o,d,u),this.resetInitialTimestamp(l)},e.needsProbing=function(t,e,r){return!this.demuxer||!this.remuxer||e||r},e.getDecrypter=function(){var t=this.decrypter;return t||(t=this.decrypter=new a.a(this.observer,this.config)),t},t}();var ut=function(t){return{remuxResult:{},chunkMeta:t}};function ht(t){return"then"in t&&t.then instanceof Function}var dt=function(t,e,r,i,n){this.audioCodec=void 0,this.videoCodec=void 0,this.initSegmentData=void 0,this.duration=void 0,this.defaultInitPts=void 0,this.audioCodec=t,this.videoCodec=e,this.initSegmentData=r,this.duration=i,this.defaultInitPts=n},ct=function(t,e,r,i,n,a){this.discontinuity=void 0,this.contiguous=void 0,this.accurateTimeOffset=void 0,this.trackSwitch=void 0,this.timeOffset=void 0,this.initSegmentChange=void 0,this.discontinuity=t,this.contiguous=e,this.accurateTimeOffset=r,this.trackSwitch=i,this.timeOffset=n,this.initSegmentChange=a}},function(t,e,r){var i,n,a,s,o;i=/^((?:[a-zA-Z0-9+\-.]+:)?)(\/\/[^\/?#]*)?((?:[^\/?#]*\/)*[^;?#]*)?(;[^?#]*)?(\?[^#]*)?(#[^]*)?$/,n=/^([^\/?#]*)([^]*)$/,a=/(?:\/|^)\.(?=\/)/g,s=/(?:\/|^)\.\.\/(?!\.\.\/)[^\/]*(?=\/)/g,o={buildAbsoluteURL:function(t,e,r){if(r=r||{},t=t.trim(),!(e=e.trim())){if(!r.alwaysNormalize)return t;var i=o.parseURL(t);if(!i)throw new Error("Error trying to parse base URL.");return i.path=o.normalizePath(i.path),o.buildURLFromParts(i)}var a=o.parseURL(e);if(!a)throw new Error("Error trying to parse relative URL.");if(a.scheme)return r.alwaysNormalize?(a.path=o.normalizePath(a.path),o.buildURLFromParts(a)):e;var s=o.parseURL(t);if(!s)throw new Error("Error trying to parse base URL.");if(!s.netLoc&&s.path&&"/"!==s.path[0]){var l=n.exec(s.path);s.netLoc=l[1],s.path=l[2]}s.netLoc&&!s.path&&(s.path="/");var u={scheme:s.scheme,netLoc:a.netLoc,path:null,params:a.params,query:a.query,fragment:a.fragment};if(!a.netLoc&&(u.netLoc=s.netLoc,"/"!==a.path[0]))if(a.path){var h=s.path,d=h.substring(0,h.lastIndexOf("/")+1)+a.path;u.path=o.normalizePath(d)}else u.path=s.path,a.params||(u.params=s.params,a.query||(u.query=s.query));return null===u.path&&(u.path=r.alwaysNormalize?o.normalizePath(a.path):a.path),o.buildURLFromParts(u)},parseURL:function(t){var e=i.exec(t);return e?{scheme:e[1]||"",netLoc:e[2]||"",path:e[3]||"",params:e[4]||"",query:e[5]||"",fragment:e[6]||""}:null},normalizePath:function(t){for(t=t.split("").reverse().join("").replace(a,"");t.length!==(t=t.replace(s,"")).length;);return t.split("").reverse().join("")},buildURLFromParts:function(t){return t.scheme+t.netLoc+t.path+t.params+t.query+t.fragment}},t.exports=o},function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var i=function(){this.aborted=!1,this.loaded=0,this.retry=0,this.total=0,this.chunkCount=0,this.bwEstimate=0,this.loading={start:0,first:0,end:0},this.parsing={start:0,end:0},this.buffering={start:0,first:0,end:0}}},function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var i=function(){function t(){this.chunks=[],this.dataLength=0}var e=t.prototype;return e.push=function(t){this.chunks.push(t),this.dataLength+=t.length},e.flush=function(){var t,e=this.chunks,r=this.dataLength;return e.length?(t=1===e.length?e[0]:function(t,e){for(var r=new Uint8Array(e),i=0,n=0;n<t.length;n++){var a=t[n];r.set(a,i),i+=a.length}return r}(e,r),this.reset(),t):new Uint8Array(0)},e.reset=function(){this.chunks.length=0,this.dataLength=0},t}()},function(t,e,r){"use strict";var i=Object.prototype.hasOwnProperty,n="~";function a(){}function s(t,e,r){this.fn=t,this.context=e,this.once=r||!1}function o(t,e,r,i,a){if("function"!=typeof r)throw new TypeError("The listener must be a function");var o=new s(r,i||t,a),l=n?n+e:e;return t._events[l]?t._events[l].fn?t._events[l]=[t._events[l],o]:t._events[l].push(o):(t._events[l]=o,t._eventsCount++),t}function l(t,e){0==--t._eventsCount?t._events=new a:delete t._events[e]}function u(){this._events=new a,this._eventsCount=0}Object.create&&(a.prototype=Object.create(null),(new a).__proto__||(n=!1)),u.prototype.eventNames=function(){var t,e,r=[];if(0===this._eventsCount)return r;for(e in t=this._events)i.call(t,e)&&r.push(n?e.slice(1):e);return Object.getOwnPropertySymbols?r.concat(Object.getOwnPropertySymbols(t)):r},u.prototype.listeners=function(t){var e=n?n+t:t,r=this._events[e];if(!r)return[];if(r.fn)return[r.fn];for(var i=0,a=r.length,s=new Array(a);i<a;i++)s[i]=r[i].fn;return s},u.prototype.listenerCount=function(t){var e=n?n+t:t,r=this._events[e];return r?r.fn?1:r.length:0},u.prototype.emit=function(t,e,r,i,a,s){var o=n?n+t:t;if(!this._events[o])return!1;var l,u,h=this._events[o],d=arguments.length;if(h.fn){switch(h.once&&this.removeListener(t,h.fn,void 0,!0),d){case 1:return h.fn.call(h.context),!0;case 2:return h.fn.call(h.context,e),!0;case 3:return h.fn.call(h.context,e,r),!0;case 4:return h.fn.call(h.context,e,r,i),!0;case 5:return h.fn.call(h.context,e,r,i,a),!0;case 6:return h.fn.call(h.context,e,r,i,a,s),!0}for(u=1,l=new Array(d-1);u<d;u++)l[u-1]=arguments[u];h.fn.apply(h.context,l)}else{var c,f=h.length;for(u=0;u<f;u++)switch(h[u].once&&this.removeListener(t,h[u].fn,void 0,!0),d){case 1:h[u].fn.call(h[u].context);break;case 2:h[u].fn.call(h[u].context,e);break;case 3:h[u].fn.call(h[u].context,e,r);break;case 4:h[u].fn.call(h[u].context,e,r,i);break;default:if(!l)for(c=1,l=new Array(d-1);c<d;c++)l[c-1]=arguments[c];h[u].fn.apply(h[u].context,l)}}return!0},u.prototype.on=function(t,e,r){return o(this,t,e,r,!1)},u.prototype.once=function(t,e,r){return o(this,t,e,r,!0)},u.prototype.removeListener=function(t,e,r,i){var a=n?n+t:t;if(!this._events[a])return this;if(!e)return l(this,a),this;var s=this._events[a];if(s.fn)s.fn!==e||i&&!s.once||r&&s.context!==r||l(this,a);else{for(var o=0,u=[],h=s.length;o<h;o++)(s[o].fn!==e||i&&!s[o].once||r&&s[o].context!==r)&&u.push(s[o]);u.length?this._events[a]=1===u.length?u[0]:u:l(this,a)}return this},u.prototype.removeAllListeners=function(t){var e;return t?(e=n?n+t:t,this._events[e]&&l(this,e)):(this._events=new a,this._eventsCount=0),this},u.prototype.off=u.prototype.removeListener,u.prototype.addListener=u.prototype.on,u.prefixed=n,u.EventEmitter=u,t.exports=u},function(t,e,r){"use strict";r.d(e,"a",(function(){return u}));var i=function(){function t(t,e){this.subtle=void 0,this.aesIV=void 0,this.subtle=t,this.aesIV=e}return t.prototype.decrypt=function(t,e){return this.subtle.decrypt({name:"AES-CBC",iv:this.aesIV},e,t)},t}(),n=function(){function t(t,e){this.subtle=void 0,this.key=void 0,this.subtle=t,this.key=e}return t.prototype.expandKey=function(){return this.subtle.importKey("raw",this.key,{name:"AES-CBC"},!1,["encrypt","decrypt"])},t}(),a=r(9);var s=function(){function t(){this.rcon=[0,1,2,4,8,16,32,64,128,27,54],this.subMix=[new Uint32Array(256),new Uint32Array(256),new Uint32Array(256),new Uint32Array(256)],this.invSubMix=[new Uint32Array(256),new Uint32Array(256),new Uint32Array(256),new Uint32Array(256)],this.sBox=new Uint32Array(256),this.invSBox=new Uint32Array(256),this.key=new Uint32Array(0),this.ksRows=0,this.keySize=0,this.keySchedule=void 0,this.invKeySchedule=void 0,this.initTable()}var e=t.prototype;return e.uint8ArrayToUint32Array_=function(t){for(var e=new DataView(t),r=new Uint32Array(4),i=0;i<4;i++)r[i]=e.getUint32(4*i);return r},e.initTable=function(){var t=this.sBox,e=this.invSBox,r=this.subMix,i=r[0],n=r[1],a=r[2],s=r[3],o=this.invSubMix,l=o[0],u=o[1],h=o[2],d=o[3],c=new Uint32Array(256),f=0,g=0,v=0;for(v=0;v<256;v++)c[v]=v<128?v<<1:v<<1^283;for(v=0;v<256;v++){var p=g^g<<1^g<<2^g<<3^g<<4;p=p>>>8^255&p^99,t[f]=p,e[p]=f;var m=c[f],y=c[m],T=c[y],b=257*c[p]^16843008*p;i[f]=b<<24|b>>>8,n[f]=b<<16|b>>>16,a[f]=b<<8|b>>>24,s[f]=b,b=16843009*T^65537*y^257*m^16843008*f,l[p]=b<<24|b>>>8,u[p]=b<<16|b>>>16,h[p]=b<<8|b>>>24,d[p]=b,f?(f=m^c[c[c[T^m]]],g^=c[c[g]]):f=g=1}},e.expandKey=function(t){for(var e=this.uint8ArrayToUint32Array_(t),r=!0,i=0;i<e.length&&r;)r=e[i]===this.key[i],i++;if(!r){this.key=e;var n=this.keySize=e.length;if(4!==n&&6!==n&&8!==n)throw new Error("Invalid aes key size="+n);var a,s,o,l,u=this.ksRows=4*(n+6+1),h=this.keySchedule=new Uint32Array(u),d=this.invKeySchedule=new Uint32Array(u),c=this.sBox,f=this.rcon,g=this.invSubMix,v=g[0],p=g[1],m=g[2],y=g[3];for(a=0;a<u;a++)a<n?o=h[a]=e[a]:(l=o,a%n==0?(l=c[(l=l<<8|l>>>24)>>>24]<<24|c[l>>>16&255]<<16|c[l>>>8&255]<<8|c[255&l],l^=f[a/n|0]<<24):n>6&&a%n==4&&(l=c[l>>>24]<<24|c[l>>>16&255]<<16|c[l>>>8&255]<<8|c[255&l]),h[a]=o=(h[a-n]^l)>>>0);for(s=0;s<u;s++)a=u-s,l=3&s?h[a]:h[a-4],d[s]=s<4||a<=4?l:v[c[l>>>24]]^p[c[l>>>16&255]]^m[c[l>>>8&255]]^y[c[255&l]],d[s]=d[s]>>>0}},e.networkToHostOrderSwap=function(t){return t<<24|(65280&t)<<8|(16711680&t)>>8|t>>>24},e.decrypt=function(t,e,r){for(var i,n,a,s,o,l,u,h,d,c,f,g,v,p,m=this.keySize+6,y=this.invKeySchedule,T=this.invSBox,b=this.invSubMix,E=b[0],S=b[1],L=b[2],A=b[3],R=this.uint8ArrayToUint32Array_(r),D=R[0],k=R[1],_=R[2],I=R[3],C=new Int32Array(t),w=new Int32Array(C.length),O=this.networkToHostOrderSwap;e<C.length;){for(d=O(C[e]),c=O(C[e+1]),f=O(C[e+2]),g=O(C[e+3]),o=d^y[0],l=g^y[1],u=f^y[2],h=c^y[3],v=4,p=1;p<m;p++)i=E[o>>>24]^S[l>>16&255]^L[u>>8&255]^A[255&h]^y[v],n=E[l>>>24]^S[u>>16&255]^L[h>>8&255]^A[255&o]^y[v+1],a=E[u>>>24]^S[h>>16&255]^L[o>>8&255]^A[255&l]^y[v+2],s=E[h>>>24]^S[o>>16&255]^L[l>>8&255]^A[255&u]^y[v+3],o=i,l=n,u=a,h=s,v+=4;i=T[o>>>24]<<24^T[l>>16&255]<<16^T[u>>8&255]<<8^T[255&h]^y[v],n=T[l>>>24]<<24^T[u>>16&255]<<16^T[h>>8&255]<<8^T[255&o]^y[v+1],a=T[u>>>24]<<24^T[h>>16&255]<<16^T[o>>8&255]<<8^T[255&l]^y[v+2],s=T[h>>>24]<<24^T[o>>16&255]<<16^T[l>>8&255]<<8^T[255&u]^y[v+3],w[e]=O(i^D),w[e+1]=O(s^k),w[e+2]=O(a^_),w[e+3]=O(n^I),D=d,k=c,_=f,I=g,e+=4}return w.buffer},t}(),o=r(1),l=r(6),u=function(){function t(t,e,r){var i=(void 0===r?{}:r).removePKCS7Padding,n=void 0===i||i;if(this.logEnabled=!0,this.observer=void 0,this.config=void 0,this.removePKCS7Padding=void 0,this.subtle=null,this.softwareDecrypter=null,this.key=null,this.fastAesKey=null,this.remainderData=null,this.currentIV=null,this.currentResult=null,this.observer=t,this.config=e,this.removePKCS7Padding=n,n)try{var a=self.crypto;a&&(this.subtle=a.subtle||a.webkitSubtle)}catch(t){}null===this.subtle&&(this.config.enableSoftwareAES=!0)}var e=t.prototype;return e.destroy=function(){this.observer=null},e.isSync=function(){return this.config.enableSoftwareAES},e.flush=function(){var t=this.currentResult;if(t){var e,r,i,n=new Uint8Array(t);return this.reset(),this.removePKCS7Padding?(r=(e=n).byteLength,(i=r&&new DataView(e.buffer).getUint8(r-1))?Object(a.a)(e,0,r-i):e):n}this.reset()},e.reset=function(){this.currentResult=null,this.currentIV=null,this.remainderData=null,this.softwareDecrypter&&(this.softwareDecrypter=null)},e.decrypt=function(t,e,r,i){if(this.config.enableSoftwareAES){this.softwareDecrypt(new Uint8Array(t),e,r);var n=this.flush();n&&i(n.buffer)}else this.webCryptoDecrypt(new Uint8Array(t),e,r).then(i)},e.softwareDecrypt=function(t,e,r){var i=this.currentIV,n=this.currentResult,o=this.remainderData;this.logOnce("JS AES decrypt"),o&&(t=Object(l.a)(o,t),this.remainderData=null);var u=this.getValidChunk(t);if(!u.length)return null;i&&(r=i);var h=this.softwareDecrypter;h||(h=this.softwareDecrypter=new s),h.expandKey(e);var d=n;return this.currentResult=h.decrypt(u.buffer,0,r),this.currentIV=Object(a.a)(u,-16).buffer,d||null},e.webCryptoDecrypt=function(t,e,r){var a=this,s=this.subtle;return this.key===e&&this.fastAesKey||(this.key=e,this.fastAesKey=new n(s,e)),this.fastAesKey.expandKey().then((function(e){return s?new i(s,r).decrypt(t.buffer,e):Promise.reject(new Error("web crypto not initialized"))})).catch((function(i){return a.onWebCryptoError(i,t,e,r)}))},e.onWebCryptoError=function(t,e,r,i){return o.b.warn("[decrypter.ts]: WebCrypto Error, disable WebCrypto API:",t),this.config.enableSoftwareAES=!0,this.logEnabled=!0,this.softwareDecrypt(e,r,i)},e.getValidChunk=function(t){var e=t,r=t.length-t.length%16;return r!==t.length&&(e=Object(a.a)(t,0,r),this.remainderData=Object(a.a)(t,r)),e},e.logOnce=function(t){this.logEnabled&&(o.b.log("[decrypter.ts]: "+t),this.logEnabled=!1)},t}()},function(t,e,r){"use strict";r.d(e,"a",(function(){return m})),r.d(e,"b",(function(){return y}));var i=r(3),n=function(){function t(){}return t.getSilentFrame=function(t,e){switch(t){case"mp4a.40.2":if(1===e)return new Uint8Array([0,200,0,128,35,128]);if(2===e)return new Uint8Array([33,0,73,144,2,25,0,35,128]);if(3===e)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,142]);if(4===e)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,128,44,128,8,2,56]);if(5===e)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,130,48,4,153,0,33,144,2,56]);if(6===e)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,130,48,4,153,0,33,144,2,0,178,0,32,8,224]);break;default:if(1===e)return new Uint8Array([1,64,34,128,163,78,230,128,186,8,0,0,0,28,6,241,193,10,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,94]);if(2===e)return new Uint8Array([1,64,34,128,163,94,230,128,186,8,0,0,0,0,149,0,6,241,161,10,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,94]);if(3===e)return new Uint8Array([1,64,34,128,163,94,230,128,186,8,0,0,0,0,149,0,6,241,161,10,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,94])}},t}(),a=Math.pow(2,32)-1,s=function(){function t(){}return t.init=function(){var e;for(e in t.types={avc1:[],avcC:[],btrt:[],dinf:[],dref:[],esds:[],ftyp:[],hdlr:[],mdat:[],mdhd:[],mdia:[],mfhd:[],minf:[],moof:[],moov:[],mp4a:[],".mp3":[],mvex:[],mvhd:[],pasp:[],sdtp:[],stbl:[],stco:[],stsc:[],stsd:[],stsz:[],stts:[],tfdt:[],tfhd:[],traf:[],trak:[],trun:[],trex:[],tkhd:[],vmhd:[],smhd:[]},t.types)t.types.hasOwnProperty(e)&&(t.types[e]=[e.charCodeAt(0),e.charCodeAt(1),e.charCodeAt(2),e.charCodeAt(3)]);var r=new Uint8Array([0,0,0,0,0,0,0,0,118,105,100,101,0,0,0,0,0,0,0,0,0,0,0,0,86,105,100,101,111,72,97,110,100,108,101,114,0]),i=new Uint8Array([0,0,0,0,0,0,0,0,115,111,117,110,0,0,0,0,0,0,0,0,0,0,0,0,83,111,117,110,100,72,97,110,100,108,101,114,0]);t.HDLR_TYPES={video:r,audio:i};var n=new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,12,117,114,108,32,0,0,0,1]),a=new Uint8Array([0,0,0,0,0,0,0,0]);t.STTS=t.STSC=t.STCO=a,t.STSZ=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0]),t.VMHD=new Uint8Array([0,0,0,1,0,0,0,0,0,0,0,0]),t.SMHD=new Uint8Array([0,0,0,0,0,0,0,0]),t.STSD=new Uint8Array([0,0,0,0,0,0,0,1]);var s=new Uint8Array([105,115,111,109]),o=new Uint8Array([97,118,99,49]),l=new Uint8Array([0,0,0,1]);t.FTYP=t.box(t.types.ftyp,s,l,s,o),t.DINF=t.box(t.types.dinf,t.box(t.types.dref,n))},t.box=function(t){for(var e=8,r=arguments.length,i=new Array(r>1?r-1:0),n=1;n<r;n++)i[n-1]=arguments[n];for(var a=i.length,s=a;a--;)e+=i[a].byteLength;var o=new Uint8Array(e);for(o[0]=e>>24&255,o[1]=e>>16&255,o[2]=e>>8&255,o[3]=255&e,o.set(t,4),a=0,e=8;a<s;a++)o.set(i[a],e),e+=i[a].byteLength;return o},t.hdlr=function(e){return t.box(t.types.hdlr,t.HDLR_TYPES[e])},t.mdat=function(e){return t.box(t.types.mdat,e)},t.mdhd=function(e,r){r*=e;var i=Math.floor(r/(a+1)),n=Math.floor(r%(a+1));return t.box(t.types.mdhd,new Uint8Array([1,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,3,e>>24&255,e>>16&255,e>>8&255,255&e,i>>24,i>>16&255,i>>8&255,255&i,n>>24,n>>16&255,n>>8&255,255&n,85,196,0,0]))},t.mdia=function(e){return t.box(t.types.mdia,t.mdhd(e.timescale,e.duration),t.hdlr(e.type),t.minf(e))},t.mfhd=function(e){return t.box(t.types.mfhd,new Uint8Array([0,0,0,0,e>>24,e>>16&255,e>>8&255,255&e]))},t.minf=function(e){return"audio"===e.type?t.box(t.types.minf,t.box(t.types.smhd,t.SMHD),t.DINF,t.stbl(e)):t.box(t.types.minf,t.box(t.types.vmhd,t.VMHD),t.DINF,t.stbl(e))},t.moof=function(e,r,i){return t.box(t.types.moof,t.mfhd(e),t.traf(i,r))},t.moov=function(e){for(var r=e.length,i=[];r--;)i[r]=t.trak(e[r]);return t.box.apply(null,[t.types.moov,t.mvhd(e[0].timescale,e[0].duration)].concat(i).concat(t.mvex(e)))},t.mvex=function(e){for(var r=e.length,i=[];r--;)i[r]=t.trex(e[r]);return t.box.apply(null,[t.types.mvex].concat(i))},t.mvhd=function(e,r){r*=e;var i=Math.floor(r/(a+1)),n=Math.floor(r%(a+1)),s=new Uint8Array([1,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,3,e>>24&255,e>>16&255,e>>8&255,255&e,i>>24,i>>16&255,i>>8&255,255&i,n>>24,n>>16&255,n>>8&255,255&n,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,255,255,255,255]);return t.box(t.types.mvhd,s)},t.sdtp=function(e){var r,i,n=e.samples||[],a=new Uint8Array(4+n.length);for(r=0;r<n.length;r++)i=n[r].flags,a[r+4]=i.dependsOn<<4|i.isDependedOn<<2|i.hasRedundancy;return t.box(t.types.sdtp,a)},t.stbl=function(e){return t.box(t.types.stbl,t.stsd(e),t.box(t.types.stts,t.STTS),t.box(t.types.stsc,t.STSC),t.box(t.types.stsz,t.STSZ),t.box(t.types.stco,t.STCO))},t.avc1=function(e){var r,i,n,a=[],s=[];for(r=0;r<e.sps.length;r++)n=(i=e.sps[r]).byteLength,a.push(n>>>8&255),a.push(255&n),a=a.concat(Array.prototype.slice.call(i));for(r=0;r<e.pps.length;r++)n=(i=e.pps[r]).byteLength,s.push(n>>>8&255),s.push(255&n),s=s.concat(Array.prototype.slice.call(i));var o=t.box(t.types.avcC,new Uint8Array([1,a[3],a[4],a[5],255,224|e.sps.length].concat(a).concat([e.pps.length]).concat(s))),l=e.width,u=e.height,h=e.pixelRatio[0],d=e.pixelRatio[1];return t.box(t.types.avc1,new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,l>>8&255,255&l,u>>8&255,255&u,0,72,0,0,0,72,0,0,0,0,0,0,0,1,18,100,97,105,108,121,109,111,116,105,111,110,47,104,108,115,46,106,115,0,0,0,0,0,0,0,0,0,0,0,0,0,0,24,17,17]),o,t.box(t.types.btrt,new Uint8Array([0,28,156,128,0,45,198,192,0,45,198,192])),t.box(t.types.pasp,new Uint8Array([h>>24,h>>16&255,h>>8&255,255&h,d>>24,d>>16&255,d>>8&255,255&d])))},t.esds=function(t){var e=t.config.length;return new Uint8Array([0,0,0,0,3,23+e,0,1,0,4,15+e,64,21,0,0,0,0,0,0,0,0,0,0,0,5].concat([e]).concat(t.config).concat([6,1,2]))},t.mp4a=function(e){var r=e.samplerate;return t.box(t.types.mp4a,new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,e.channelCount,0,16,0,0,0,0,r>>8&255,255&r,0,0]),t.box(t.types.esds,t.esds(e)))},t.mp3=function(e){var r=e.samplerate;return t.box(t.types[".mp3"],new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,e.channelCount,0,16,0,0,0,0,r>>8&255,255&r,0,0]))},t.stsd=function(e){return"audio"===e.type?e.isAAC||"mp3"!==e.codec?t.box(t.types.stsd,t.STSD,t.mp4a(e)):t.box(t.types.stsd,t.STSD,t.mp3(e)):t.box(t.types.stsd,t.STSD,t.avc1(e))},t.tkhd=function(e){var r=e.id,i=e.duration*e.timescale,n=e.width,s=e.height,o=Math.floor(i/(a+1)),l=Math.floor(i%(a+1));return t.box(t.types.tkhd,new Uint8Array([1,0,0,7,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,3,r>>24&255,r>>16&255,r>>8&255,255&r,0,0,0,0,o>>24,o>>16&255,o>>8&255,255&o,l>>24,l>>16&255,l>>8&255,255&l,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,n>>8&255,255&n,0,0,s>>8&255,255&s,0,0]))},t.traf=function(e,r){var i=t.sdtp(e),n=e.id,s=Math.floor(r/(a+1)),o=Math.floor(r%(a+1));return t.box(t.types.traf,t.box(t.types.tfhd,new Uint8Array([0,0,0,0,n>>24,n>>16&255,n>>8&255,255&n])),t.box(t.types.tfdt,new Uint8Array([1,0,0,0,s>>24,s>>16&255,s>>8&255,255&s,o>>24,o>>16&255,o>>8&255,255&o])),t.trun(e,i.length+16+20+8+16+8+8),i)},t.trak=function(e){return e.duration=e.duration||4294967295,t.box(t.types.trak,t.tkhd(e),t.mdia(e))},t.trex=function(e){var r=e.id;return t.box(t.types.trex,new Uint8Array([0,0,0,0,r>>24,r>>16&255,r>>8&255,255&r,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1]))},t.trun=function(e,r){var i,n,a,s,o,l,u=e.samples||[],h=u.length,d=12+16*h,c=new Uint8Array(d);for(r+=8+d,c.set([0,0,15,1,h>>>24&255,h>>>16&255,h>>>8&255,255&h,r>>>24&255,r>>>16&255,r>>>8&255,255&r],0),i=0;i<h;i++)a=(n=u[i]).duration,s=n.size,o=n.flags,l=n.cts,c.set([a>>>24&255,a>>>16&255,a>>>8&255,255&a,s>>>24&255,s>>>16&255,s>>>8&255,255&s,o.isLeading<<2|o.dependsOn,o.isDependedOn<<6|o.hasRedundancy<<4|o.paddingValue<<1|o.isNonSync,61440&o.degradPrio,15&o.degradPrio,l>>>24&255,l>>>16&255,l>>>8&255,255&l],12+16*i);return t.box(t.types.trun,c)},t.initSegment=function(e){t.types||t.init();var r=t.moov(e),i=new Uint8Array(t.FTYP.byteLength+r.byteLength);return i.set(t.FTYP),i.set(r,t.FTYP.byteLength),i},t}();s.types=void 0,s.HDLR_TYPES=void 0,s.STTS=void 0,s.STSC=void 0,s.STCO=void 0,s.STSZ=void 0,s.VMHD=void 0,s.SMHD=void 0,s.STSD=void 0,s.FTYP=void 0,s.DINF=void 0;var o=s,l=r(0),u=r(2),h=r(1),d=r(4),c=r(8);function f(){return(f=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t}).apply(this,arguments)}var g=null,v=null,p=!1,m=function(){function t(t,e,r,i){if(void 0===i&&(i=""),this.observer=void 0,this.config=void 0,this.typeSupported=void 0,this.ISGenerated=!1,this._initPTS=void 0,this._initDTS=void 0,this.nextAvcDts=null,this.nextAudioPts=null,this.isAudioContiguous=!1,this.isVideoContiguous=!1,this.observer=t,this.config=e,this.typeSupported=r,this.ISGenerated=!1,null===g){var n=(navigator.userAgent||"").match(/Chrome\/(\d+)/i);g=n?parseInt(n[1]):0}if(null===v){var a=navigator.userAgent.match(/Safari\/(\d+)/i);v=a?parseInt(a[1]):0}p=!!g&&g<75||!!v&&v<600}var e=t.prototype;return e.destroy=function(){},e.resetTimeStamp=function(t){h.b.log("[mp4-remuxer]: initPTS & initDTS reset"),this._initPTS=this._initDTS=t},e.resetNextTimestamp=function(){h.b.log("[mp4-remuxer]: reset next timestamp"),this.isVideoContiguous=!1,this.isAudioContiguous=!1},e.resetInitSegment=function(){h.b.log("[mp4-remuxer]: ISGenerated flag reset"),this.ISGenerated=!1},e.getVideoStartPts=function(t){var e=!1,r=t.reduce((function(t,r){var i=r.pts-t;return i<-4294967296?(e=!0,y(t,r.pts)):i>0?t:r.pts}),t[0].pts);return e&&h.b.debug("PTS rollover detected"),r},e.remux=function(t,e,r,i,n,a,s,o){var l,u,c,f,g,v,p=n,m=n,T=t.pid>-1,b=e.pid>-1,E=e.samples.length,S=t.samples.length>0,L=E>1;if((!T||S)&&(!b||L)||this.ISGenerated||s){this.ISGenerated||(c=this.generateIS(t,e,n));var A=this.isVideoContiguous,R=-1;if(L&&(R=function(t){for(var e=0;e<t.length;e++)if(t[e].key)return e;return-1}(e.samples),!A&&this.config.forceKeyFrameOnDiscontinuity))if(v=!0,R>0){h.b.warn("[mp4-remuxer]: Dropped "+R+" out of "+E+" video samples due to a missing keyframe");var D=this.getVideoStartPts(e.samples);e.samples=e.samples.slice(R),e.dropped+=R,m+=(e.samples[0].pts-D)/(e.timescale||9e4)}else-1===R&&(h.b.warn("[mp4-remuxer]: No keyframe found out of "+E+" video samples"),v=!1);if(this.ISGenerated){if(S&&L){var k=this.getVideoStartPts(e.samples),_=(y(t.samples[0].pts,k)-k)/e.inputTimeScale;p+=Math.max(0,_),m+=Math.max(0,-_)}if(S){if(t.samplerate||(h.b.warn("[mp4-remuxer]: regenerate InitSegment as audio detected"),c=this.generateIS(t,e,n)),u=this.remuxAudio(t,p,this.isAudioContiguous,a,b||L||o===d.b.AUDIO?m:void 0),L){var I=u?u.endPTS-u.startPTS:0;e.inputTimeScale||(h.b.warn("[mp4-remuxer]: regenerate InitSegment as video detected"),c=this.generateIS(t,e,n)),l=this.remuxVideo(e,m,A,I)}}else L&&(l=this.remuxVideo(e,m,A,0));l&&(l.firstKeyFrame=R,l.independent=-1!==R)}}return this.ISGenerated&&(r.samples.length&&(g=this.remuxID3(r,n)),i.samples.length&&(f=this.remuxText(i,n))),{audio:u,video:l,initSegment:c,independent:v,text:f,id3:g}},e.generateIS=function(t,e,r){var n,a,s,l=t.samples,u=e.samples,h=this.typeSupported,d={},c=!Object(i.a)(this._initPTS),f="audio/mp4";if(c&&(n=a=1/0),t.config&&l.length&&(t.timescale=t.samplerate,t.isAAC||(h.mpeg?(f="audio/mpeg",t.codec=""):h.mp3&&(t.codec="mp3")),d.audio={id:"audio",container:f,codec:t.codec,initSegment:!t.isAAC&&h.mpeg?new Uint8Array(0):o.initSegment([t]),metadata:{channelCount:t.channelCount}},c&&(s=t.inputTimeScale,n=a=l[0].pts-Math.round(s*r))),e.sps&&e.pps&&u.length&&(e.timescale=e.inputTimeScale,d.video={id:"main",container:"video/mp4",codec:e.codec,initSegment:o.initSegment([e]),metadata:{width:e.width,height:e.height}},c)){s=e.inputTimeScale;var g=this.getVideoStartPts(u),v=Math.round(s*r);a=Math.min(a,y(u[0].dts,g)-v),n=Math.min(n,g-v)}if(Object.keys(d).length)return this.ISGenerated=!0,c&&(this._initPTS=n,this._initDTS=a),{tracks:d,initPTS:n,timescale:s}},e.remuxVideo=function(t,e,r,i){var n,a,s,d=t.inputTimeScale,v=t.samples,m=[],b=v.length,E=this._initPTS,S=this.nextAvcDts,L=8,A=Number.POSITIVE_INFINITY,R=Number.NEGATIVE_INFINITY,D=0,k=!1;r&&null!==S||(S=e*d-(v[0].pts-y(v[0].dts,v[0].pts)));for(var _=0;_<b;_++){var I=v[_];if(I.pts=y(I.pts-E,S),I.dts=y(I.dts-E,S),I.dts>I.pts){D=Math.max(Math.min(D,I.pts-I.dts),-18e3)}I.dts<v[_>0?_-1:_].dts&&(k=!0)}k&&v.sort((function(t,e){var r=t.dts-e.dts,i=t.pts-e.pts;return r||i})),a=v[0].dts,s=v[v.length-1].dts;var C=Math.round((s-a)/(b-1));if(D<0){if(D<-2*C){h.b.warn("PTS < DTS detected in video samples, offsetting DTS from PTS by "+Object(c.b)(-C,!0)+" ms");for(var w=D,O=0;O<b;O++)v[O].dts=w=Math.max(w,v[O].pts-C),v[O].pts=Math.max(w,v[O].pts)}else{h.b.warn("PTS < DTS detected in video samples, shifting DTS by "+Object(c.b)(D,!0)+" ms to overcome this issue");for(var x=0;x<b;x++)v[x].dts=v[x].dts+D}a=v[0].dts}if(r){var P=a-S,M=P>C;if(M||P<-1){M?h.b.warn("AVC: "+Object(c.b)(P,!0)+" ms ("+P+"dts) hole between fragments detected, filling it"):h.b.warn("AVC: "+Object(c.b)(-P,!0)+" ms ("+P+"dts) overlapping between fragments detected"),a=S;var F=v[0].pts-P;v[0].dts=a,v[0].pts=F,h.b.log("Video: First PTS/DTS adjusted: "+Object(c.b)(F,!0)+"/"+Object(c.b)(a,!0)+", delta: "+Object(c.b)(P,!0)+" ms")}}p&&(a=Math.max(0,a));for(var N=0,U=0,B=0;B<b;B++){for(var G=v[B],K=G.units,j=K.length,H=0,V=0;V<j;V++)H+=K[V].data.length;U+=H,N+=j,G.length=H,G.dts=Math.max(G.dts,a),G.pts=Math.max(G.pts,G.dts,0),A=Math.min(G.pts,A),R=Math.max(G.pts,R)}s=v[b-1].dts;var W,Y=U+4*N+8;try{W=new Uint8Array(Y)}catch(t){return void this.observer.emit(l.a.ERROR,l.a.ERROR,{type:u.b.MUX_ERROR,details:u.a.REMUX_ALLOC_ERROR,fatal:!1,bytes:Y,reason:"fail allocating video mdat "+Y})}var q=new DataView(W.buffer);q.setUint32(0,Y),W.set(o.types.mdat,4);for(var X=0;X<b;X++){for(var z=v[X],Q=z.units,$=0,J=0,Z=Q.length;J<Z;J++){var tt=Q[J],et=tt.data,rt=tt.data.byteLength;q.setUint32(L,rt),L+=4,W.set(et,L),L+=rt,$+=4+rt}if(X<b-1)n=v[X+1].dts-z.dts;else{var it=this.config,nt=z.dts-v[X>0?X-1:X].dts;if(it.stretchShortVideoTrack&&null!==this.nextAudioPts){var at=Math.floor(it.maxBufferHole*d),st=(i?A+i*d:this.nextAudioPts)-z.pts;st>at?((n=st-nt)<0&&(n=nt),h.b.log("[mp4-remuxer]: It is approximately "+st/90+" ms to the next segment; using duration "+n/90+" ms for the last video frame.")):n=nt}else n=nt}var ot=Math.round(z.pts-z.dts);m.push(new T(z.key,n,$,ot))}if(m.length&&g&&g<70){var lt=m[0].flags;lt.dependsOn=2,lt.isNonSync=0}this.nextAvcDts=S=s+n,this.isVideoContiguous=!0;var ut={data1:o.moof(t.sequenceNumber++,a,f({},t,{samples:m})),data2:W,startPTS:A/d,endPTS:(R+n)/d,startDTS:a/d,endDTS:S/d,type:"video",hasAudio:!1,hasVideo:!0,nb:m.length,dropped:t.dropped};return t.samples=[],t.dropped=0,ut},e.remuxAudio=function(t,e,r,i,a){var s=t.inputTimeScale,d=s/(t.samplerate?t.samplerate:s),c=t.isAAC?1024:1152,g=c*d,v=this._initPTS,p=!t.isAAC&&this.typeSupported.mpeg,m=[],b=t.samples,E=p?0:8,S=this.nextAudioPts||-1,L=e*s;if(this.isAudioContiguous=r=r||b.length&&S>0&&(i&&Math.abs(L-S)<9e3||Math.abs(y(b[0].pts-v,L)-S)<20*g),b.forEach((function(t){t.pts=y(t.pts-v,L)})),!r||S<0){if(!(b=b.filter((function(t){return t.pts>=0}))).length)return;S=0===a?0:i?Math.max(0,L):b[0].pts}if(t.isAAC)for(var A=void 0!==a,R=this.config.maxAudioFramesDrift,D=0,k=S;D<b.length;D++){var _=b[D],I=_.pts,C=I-k,w=Math.abs(1e3*C/s);if(C<=-R*g&&A)0===D&&(h.b.warn("Audio frame @ "+(I/s).toFixed(3)+"s overlaps nextAudioPts by "+Math.round(1e3*C/s)+" ms."),this.nextAudioPts=S=k=I);else if(C>=R*g&&w<1e4&&A){var O=Math.round(C/g);(k=I-O*g)<0&&(O--,k+=g),0===D&&(this.nextAudioPts=S=k),h.b.warn("[mp4-remuxer]: Injecting "+O+" audio frame @ "+(k/s).toFixed(3)+"s due to "+Math.round(1e3*C/s)+" ms gap.");for(var x=0;x<O;x++){var P=Math.max(k,0),M=n.getSilentFrame(t.manifestCodec||t.codec,t.channelCount);M||(h.b.log("[mp4-remuxer]: Unable to get silent frame for given audio codec; duplicating last frame instead."),M=_.unit.subarray()),b.splice(D,0,{unit:M,pts:P}),k+=g,D++}}_.pts=k,k+=g}for(var F,N=null,U=null,B=0,G=b.length;G--;)B+=b[G].unit.byteLength;for(var K=0,j=b.length;K<j;K++){var H=b[K],V=H.unit,W=H.pts;if(null!==U){m[K-1].duration=Math.round((W-U)/d)}else{if(r&&t.isAAC&&(W=S),N=W,!(B>0))return;B+=E;try{F=new Uint8Array(B)}catch(t){return void this.observer.emit(l.a.ERROR,l.a.ERROR,{type:u.b.MUX_ERROR,details:u.a.REMUX_ALLOC_ERROR,fatal:!1,bytes:B,reason:"fail allocating audio mdat "+B})}p||(new DataView(F.buffer).setUint32(0,B),F.set(o.types.mdat,4))}F.set(V,E);var Y=V.byteLength;E+=Y,m.push(new T(!0,c,Y,0)),U=W}var q=m.length;if(q){var X=m[m.length-1];this.nextAudioPts=S=U+d*X.duration;var z=p?new Uint8Array(0):o.moof(t.sequenceNumber++,N/d,f({},t,{samples:m}));t.samples=[];var Q=N/s,$=S/s,J={data1:z,data2:F,startPTS:Q,endPTS:$,startDTS:Q,endDTS:$,type:"audio",hasAudio:!0,hasVideo:!1,nb:q};return this.isAudioContiguous=!0,J}},e.remuxEmptyAudio=function(t,e,r,i){var a=t.inputTimeScale,s=a/(t.samplerate?t.samplerate:a),o=this.nextAudioPts,l=(null!==o?o:i.startDTS*a)+this._initDTS,u=i.endDTS*a+this._initDTS,d=1024*s,c=Math.ceil((u-l)/d),f=n.getSilentFrame(t.manifestCodec||t.codec,t.channelCount);if(h.b.warn("[mp4-remuxer]: remux empty Audio"),f){for(var g=[],v=0;v<c;v++){var p=l+v*d;g.push({unit:f,pts:p,dts:p})}return t.samples=g,this.remuxAudio(t,e,r,!1)}h.b.trace("[mp4-remuxer]: Unable to remuxEmptyAudio since we were unable to get a silent frame for given audio codec")},e.remuxID3=function(t,e){var r=t.samples.length;if(r){for(var i=t.inputTimeScale,n=this._initPTS,a=this._initDTS,s=0;s<r;s++){var o=t.samples[s];o.pts=y(o.pts-n,e*i)/i,o.dts=y(o.dts-a,e*i)/i}var l=t.samples;return t.samples=[],{samples:l}}},e.remuxText=function(t,e){var r=t.samples.length;if(r){for(var i=t.inputTimeScale,n=this._initPTS,a=0;a<r;a++){var s=t.samples[a];s.pts=y(s.pts-n,e*i)/i}t.samples.sort((function(t,e){return t.pts-e.pts}));var o=t.samples;return t.samples=[],{samples:o}}},t}();function y(t,e){var r;if(null===e)return t;for(r=e<t?-8589934592:8589934592;Math.abs(t-e)>4294967296;)t+=r;return t}var T=function(t,e,r,i){this.size=void 0,this.duration=void 0,this.cts=void 0,this.flags=void 0,this.duration=e,this.size=r,this.cts=i,this.flags=new b(t)},b=function(t){this.isLeading=0,this.isDependedOn=0,this.hasRedundancy=0,this.degradPrio=0,this.dependsOn=1,this.isNonSync=1,this.dependsOn=t?2:1,this.isNonSync=t?0:1}},function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));var i=r(11);function n(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var a=function(){function t(t,e){this._uri=null,this.method=null,this.keyFormat=null,this.keyFormatVersions=null,this.keyID=null,this.key=null,this.iv=null,this._uri=e?Object(i.buildAbsoluteURL)(t,e,{alwaysNormalize:!0}):t}var e,r,a;return t.fromURL=function(e,r){return new t(e,r)},t.fromURI=function(e){return new t(e)},e=t,(r=[{key:"uri",get:function(){return this._uri}}])&&n(e.prototype,r),a&&n(e,a),t}()},function(t,e,r){function i(t){var e={};function r(i){if(e[i])return e[i].exports;var n=e[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=e,r.i=function(t){return t},r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:i})},r.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r.oe=function(t){throw console.error(t),t};var i=r(r.s=ENTRY_MODULE);return i.default||i}function n(t){return(t+"").replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}function a(t,e,i){var a={};a[i]=[];var s=e.toString(),o=s.match(/^function\s?\w*\(\w+,\s*\w+,\s*(\w+)\)/);if(!o)return a;for(var l,u=o[1],h=new RegExp("(\\\\n|\\W)"+n(u)+"\\(\\s*(/\\*.*?\\*/)?\\s*.*?([\\.|\\-|\\+|\\w|/|@]+).*?\\)","g");l=h.exec(s);)"dll-reference"!==l[3]&&a[i].push(l[3]);for(h=new RegExp("\\("+n(u)+'\\("(dll-reference\\s([\\.|\\-|\\+|\\w|/|@]+))"\\)\\)\\(\\s*(/\\*.*?\\*/)?\\s*.*?([\\.|\\-|\\+|\\w|/|@]+).*?\\)',"g");l=h.exec(s);)t[l[2]]||(a[i].push(l[1]),t[l[2]]=r(l[1]).m),a[l[2]]=a[l[2]]||[],a[l[2]].push(l[4]);for(var d,c=Object.keys(a),f=0;f<c.length;f++)for(var g=0;g<a[c[f]].length;g++)d=a[c[f]][g],isNaN(1*d)||(a[c[f]][g]=1*a[c[f]][g]);return a}function s(t){return Object.keys(t).reduce((function(e,r){return e||t[r].length>0}),!1)}t.exports=function(t,e){e=e||{};var n={main:r.m},o=e.all?{main:Object.keys(n.main)}:function(t,e){for(var r={main:[e]},i={main:[]},n={main:{}};s(r);)for(var o=Object.keys(r),l=0;l<o.length;l++){var u=o[l],h=r[u].pop();if(n[u]=n[u]||{},!n[u][h]&&t[u][h]){n[u][h]=!0,i[u]=i[u]||[],i[u].push(h);for(var d=a(t,t[u][h],u),c=Object.keys(d),f=0;f<c.length;f++)r[c[f]]=r[c[f]]||[],r[c[f]]=r[c[f]].concat(d[c[f]])}}return i}(n,t),l="";Object.keys(o).filter((function(t){return"main"!==t})).forEach((function(t){for(var e=0;o[t][e];)e++;o[t].push(e),n[t][e]="(function(module, exports, __webpack_require__) { module.exports = __webpack_require__; })",l=l+"var "+t+" = ("+i.toString().replace("ENTRY_MODULE",JSON.stringify(e))+")({"+o[t].map((function(e){return JSON.stringify(e)+": "+n[t][e].toString()})).join(",")+"});\n"})),l=l+"new (("+i.toString().replace("ENTRY_MODULE",JSON.stringify(t))+")({"+o.main.map((function(t){return JSON.stringify(t)+": "+n.main[t].toString()})).join(",")+"}))(self);";var u=new window.Blob([l],{type:"text/javascript"});if(e.bare)return u;var h=(window.URL||window.webkitURL||window.mozURL||window.msURL).createObjectURL(u),d=new window.Worker(h);return d.objectURL=h,d}},function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return o}));var i=r(10),n=r(0),a=r(1),s=r(14);function o(t){var e=new s.EventEmitter,r=function(e,r){t.postMessage({event:e,data:r})};e.on(n.a.FRAG_DECRYPTED,r),e.on(n.a.ERROR,r),t.addEventListener("message",(function(n){var s=n.data;switch(s.cmd){case"init":var o=JSON.parse(s.config);t.transmuxer=new i.c(e,s.typeSupported,o,s.vendor,s.id),Object(a.a)(o.debug),r("init",null);break;case"configure":t.transmuxer.configure(s.config);break;case"demux":var u=t.transmuxer.push(s.data,s.decryptdata,s.chunkMeta,s.state);Object(i.d)(u)?u.then((function(e){l(t,e)})):l(t,u);break;case"flush":var d=s.chunkMeta,c=t.transmuxer.flush(d);Object(i.d)(c)?c.then((function(e){h(t,e,d)})):h(t,c,d)}}))}function l(t,e){if((r=e.remuxResult).audio||r.video||r.text||r.id3||r.initSegment){var r,i=[],n=e.remuxResult,a=n.audio,s=n.video;a&&u(i,a),s&&u(i,s),t.postMessage({event:"transmuxComplete",data:e},i)}}function u(t,e){e.data1&&t.push(e.data1.buffer),e.data2&&t.push(e.data2.buffer)}function h(t,e,r){e.forEach((function(e){l(t,e)})),t.postMessage({event:"flush",data:r})}},function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return ri}));var i=r(11),n=r(3),a=r(0),s=r(2),o=r(1),l=r(6),u=r(5);function h(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var d=function(){function t(t){this.PTSKnown=!1,this.alignedSliding=!1,this.averagetargetduration=void 0,this.endCC=0,this.endSN=0,this.fragments=void 0,this.fragmentHint=void 0,this.partList=null,this.live=!0,this.ageHeader=0,this.advancedDateTime=void 0,this.updated=!0,this.advanced=!0,this.availabilityDelay=void 0,this.misses=0,this.needSidxRanges=!1,this.startCC=0,this.startSN=0,this.startTimeOffset=null,this.targetduration=0,this.totalduration=0,this.type=null,this.url=void 0,this.m3u8="",this.version=null,this.canBlockReload=!1,this.canSkipUntil=0,this.canSkipDateRanges=!1,this.skippedSegments=0,this.recentlyRemovedDateranges=void 0,this.partHoldBack=0,this.holdBack=0,this.partTarget=0,this.preloadHint=void 0,this.renditionReports=void 0,this.tuneInGoal=0,this.deltaUpdateFailed=void 0,this.driftStartTime=0,this.driftEndTime=0,this.driftStart=0,this.driftEnd=0,this.fragments=[],this.url=t}var e,r,i;return t.prototype.reloaded=function(t){if(!t)return this.advanced=!0,void(this.updated=!0);var e=this.lastPartSn-t.lastPartSn,r=this.lastPartIndex-t.lastPartIndex;this.updated=this.endSN!==t.endSN||!!r||!!e,this.advanced=this.endSN>t.endSN||e>0||0===e&&r>0,this.updated||this.advanced?this.misses=Math.floor(.6*t.misses):this.misses=t.misses+1,this.availabilityDelay=t.availabilityDelay},e=t,(r=[{key:"hasProgramDateTime",get:function(){return!!this.fragments.length&&Object(n.a)(this.fragments[this.fragments.length-1].programDateTime)}},{key:"levelTargetDuration",get:function(){return this.averagetargetduration||this.targetduration||10}},{key:"drift",get:function(){var t=this.driftEndTime-this.driftStartTime;return t>0?1e3*(this.driftEnd-this.driftStart)/t:1}},{key:"edge",get:function(){return this.partEnd||this.fragmentEnd}},{key:"partEnd",get:function(){var t;return null!==(t=this.partList)&&void 0!==t&&t.length?this.partList[this.partList.length-1].end:this.fragmentEnd}},{key:"fragmentEnd",get:function(){var t;return null!==(t=this.fragments)&&void 0!==t&&t.length?this.fragments[this.fragments.length-1].end:0}},{key:"age",get:function(){return this.advancedDateTime?Math.max(Date.now()-this.advancedDateTime,0)/1e3:0}},{key:"lastPartIndex",get:function(){var t;return null!==(t=this.partList)&&void 0!==t&&t.length?this.partList[this.partList.length-1].index:-1}},{key:"lastPartSn",get:function(){var t;return null!==(t=this.partList)&&void 0!==t&&t.length?this.partList[this.partList.length-1].fragment.sn:this.endSN}}])&&h(e.prototype,r),i&&h(e,i),t}(),c=r(17),f=/^(\d+)x(\d+)$/,g=/\s*(.+?)\s*=((?:\".*?\")|.*?)(?:,|$)/g,v=function(){function t(e){for(var r in"string"==typeof e&&(e=t.parseAttrList(e)),e)e.hasOwnProperty(r)&&(this[r]=e[r])}var e=t.prototype;return e.decimalInteger=function(t){var e=parseInt(this[t],10);return e>Number.MAX_SAFE_INTEGER?1/0:e},e.hexadecimalInteger=function(t){if(this[t]){var e=(this[t]||"0x").slice(2);e=(1&e.length?"0":"")+e;for(var r=new Uint8Array(e.length/2),i=0;i<e.length/2;i++)r[i]=parseInt(e.slice(2*i,2*i+2),16);return r}return null},e.hexadecimalIntegerAsNumber=function(t){var e=parseInt(this[t],16);return e>Number.MAX_SAFE_INTEGER?1/0:e},e.decimalFloatingPoint=function(t){return parseFloat(this[t])},e.optionalFloat=function(t,e){var r=this[t];return r?parseFloat(r):e},e.enumeratedString=function(t){return this[t]},e.bool=function(t){return"YES"===this[t]},e.decimalResolution=function(t){var e=f.exec(this[t]);if(null!==e)return{width:parseInt(e[1],10),height:parseInt(e[2],10)}},t.parseAttrList=function(t){var e,r={};for(g.lastIndex=0;null!==(e=g.exec(t));){var i=e[2];0===i.indexOf('"')&&i.lastIndexOf('"')===i.length-1&&(i=i.slice(1,-1)),r[e[1]]=i}return r},t}(),p={audio:{a3ds:!0,"ac-3":!0,"ac-4":!0,alac:!0,alaw:!0,dra1:!0,"dts+":!0,"dts-":!0,dtsc:!0,dtse:!0,dtsh:!0,"ec-3":!0,enca:!0,g719:!0,g726:!0,m4ae:!0,mha1:!0,mha2:!0,mhm1:!0,mhm2:!0,mlpa:!0,mp4a:!0,"raw ":!0,Opus:!0,samr:!0,sawb:!0,sawp:!0,sevc:!0,sqcp:!0,ssmv:!0,twos:!0,ulaw:!0},video:{avc1:!0,avc2:!0,avc3:!0,avc4:!0,avcp:!0,av01:!0,drac:!0,dvav:!0,dvhe:!0,encv:!0,hev1:!0,hvc1:!0,mjp2:!0,mp4v:!0,mvc1:!0,mvc2:!0,mvc3:!0,mvc4:!0,resv:!0,rv60:!0,s263:!0,svc1:!0,svc2:!0,"vc-1":!0,vp08:!0,vp09:!0},text:{stpp:!0,wvtt:!0}};function m(t,e){return MediaSource.isTypeSupported((e||"video")+'/mp4;codecs="'+t+'"')}var y=/#EXT-X-STREAM-INF:([^\r\n]*)(?:[\r\n](?:#[^\r\n]*)?)*([^\r\n]+)|#EXT-X-SESSION-DATA:([^\r\n]*)[\r\n]+/g,T=/#EXT-X-MEDIA:(.*)/g,b=new RegExp([/#EXTINF:\s*(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source,/(?!#) *(\S[\S ]*)/.source,/#EXT-X-BYTERANGE:*(.+)/.source,/#EXT-X-PROGRAM-DATE-TIME:(.+)/.source,/#.*/.source].join("|"),"g"),E=new RegExp([/#(EXTM3U)/.source,/#EXT-X-(PLAYLIST-TYPE):(.+)/.source,/#EXT-X-(MEDIA-SEQUENCE): *(\d+)/.source,/#EXT-X-(SKIP):(.+)/.source,/#EXT-X-(TARGETDURATION): *(\d+)/.source,/#EXT-X-(KEY):(.+)/.source,/#EXT-X-(START):(.+)/.source,/#EXT-X-(ENDLIST)/.source,/#EXT-X-(DISCONTINUITY-SEQ)UENCE: *(\d+)/.source,/#EXT-X-(DIS)CONTINUITY/.source,/#EXT-X-(VERSION):(\d+)/.source,/#EXT-X-(MAP):(.+)/.source,/#EXT-X-(SERVER-CONTROL):(.+)/.source,/#EXT-X-(PART-INF):(.+)/.source,/#EXT-X-(GAP)/.source,/#EXT-X-(BITRATE):\s*(\d+)/.source,/#EXT-X-(PART):(.+)/.source,/#EXT-X-(PRELOAD-HINT):(.+)/.source,/#EXT-X-(RENDITION-REPORT):(.+)/.source,/(#)([^:]*):(.*)/.source,/(#)(.*)(?:.*)\r?\n?/.source].join("|")),S=/\.(mp4|m4s|m4v|m4a)$/i;var L=function(){function t(){}return t.findGroup=function(t,e){for(var r=0;r<t.length;r++){var i=t[r];if(i.id===e)return i}},t.convertAVC1ToAVCOTI=function(t){var e=t.split(".");if(e.length>2){var r=e.shift()+".";return r+=parseInt(e.shift()).toString(16),r+=("000"+parseInt(e.shift()).toString(16)).substr(-4)}return t},t.resolve=function(t,e){return i.buildAbsoluteURL(e,t,{alwaysNormalize:!0})},t.parseMasterPlaylist=function(e,r){var i,n=[],a={},s=!1;for(y.lastIndex=0;null!=(i=y.exec(e));)if(i[1]){var o=new v(i[1]),l={attrs:o,bitrate:o.decimalInteger("AVERAGE-BANDWIDTH")||o.decimalInteger("BANDWIDTH"),name:o.NAME,url:t.resolve(i[2],r)},u=o.decimalResolution("RESOLUTION");u&&(l.width=u.width,l.height=u.height),A((o.CODECS||"").split(/[ ,]+/).filter((function(t){return t})),l),l.videoCodec&&-1!==l.videoCodec.indexOf("avc1")&&(l.videoCodec=t.convertAVC1ToAVCOTI(l.videoCodec)),n.push(l)}else if(i[3]){var h=new v(i[3]);h["DATA-ID"]&&(s=!0,a[h["DATA-ID"]]=h)}return{levels:n,sessionData:s?a:null}},t.parseMasterPlaylistMedia=function(e,r,i,n){var a;void 0===n&&(n=[]);var s=[],o=0;for(T.lastIndex=0;null!==(a=T.exec(e));){var l=new v(a[1]);if(l.TYPE===i){var u={attrs:l,bitrate:0,id:o++,groupId:l["GROUP-ID"],instreamId:l["INSTREAM-ID"],name:l.NAME||l.LANGUAGE||"",type:i,default:l.bool("DEFAULT"),autoselect:l.bool("AUTOSELECT"),forced:l.bool("FORCED"),lang:l.LANGUAGE,url:l.URI?t.resolve(l.URI,r):""};if(n.length){var h=t.findGroup(n,u.groupId)||n[0];R(u,h,"audioCodec"),R(u,h,"textCodec")}s.push(u)}}return s},t.parseLevelPlaylist=function(t,e,r,a,s){var l,h,f,g=new d(e),p=g.fragments,m=null,y=0,T=0,L=0,A=0,R=null,k=new u.b(a,e),_=-1,I=!1;for(b.lastIndex=0,g.m3u8=t;null!==(l=b.exec(t));){I&&(I=!1,(k=new u.b(a,e)).start=L,k.sn=y,k.cc=A,k.level=r,m&&(k.initSegment=m,k.rawProgramDateTime=m.rawProgramDateTime));var C=l[1];if(C){k.duration=parseFloat(C);var w=(" "+l[2]).slice(1);k.title=w||null,k.tagList.push(w?["INF",C,w]:["INF",C])}else if(l[3])Object(n.a)(k.duration)&&(k.start=L,f&&(k.levelkey=f),k.sn=y,k.level=r,k.cc=A,k.urlId=s,p.push(k),k.relurl=(" "+l[3]).slice(1),D(k,R),R=k,L+=k.duration,y++,T=0,I=!0);else if(l[4]){var O=(" "+l[4]).slice(1);R?k.setByteRange(O,R):k.setByteRange(O)}else if(l[5])k.rawProgramDateTime=(" "+l[5]).slice(1),k.tagList.push(["PROGRAM-DATE-TIME",k.rawProgramDateTime]),-1===_&&(_=p.length);else{if(!(l=l[0].match(E))){o.b.warn("No matches on slow regex match for level playlist!");continue}for(h=1;h<l.length&&void 0===l[h];h++);var x=(" "+l[h]).slice(1),P=(" "+l[h+1]).slice(1),M=l[h+2]?(" "+l[h+2]).slice(1):"";switch(x){case"PLAYLIST-TYPE":g.type=P.toUpperCase();break;case"MEDIA-SEQUENCE":y=g.startSN=parseInt(P);break;case"SKIP":var F=new v(P),N=F.decimalInteger("SKIPPED-SEGMENTS");if(Object(n.a)(N)){g.skippedSegments=N;for(var U=N;U--;)p.unshift(null);y+=N}var B=F.enumeratedString("RECENTLY-REMOVED-DATERANGES");B&&(g.recentlyRemovedDateranges=B.split("\t"));break;case"TARGETDURATION":g.targetduration=parseFloat(P);break;case"VERSION":g.version=parseInt(P);break;case"EXTM3U":break;case"ENDLIST":g.live=!1;break;case"#":(P||M)&&k.tagList.push(M?[P,M]:[P]);break;case"DIS":A++;case"GAP":k.tagList.push([x]);break;case"BITRATE":k.tagList.push([x,P]);break;case"DISCONTINUITY-SEQ":A=parseInt(P);break;case"KEY":var G,K=new v(P),j=K.enumeratedString("METHOD"),H=K.URI,V=K.hexadecimalInteger("IV"),W=K.enumeratedString("KEYFORMATVERSIONS"),Y=K.enumeratedString("KEYID"),q=null!=(G=K.enumeratedString("KEYFORMAT"))?G:"identity";if(["com.apple.streamingkeydelivery","com.microsoft.playready","urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed","com.widevine"].indexOf(q)>-1){o.b.warn("Keyformat "+q+" is not supported from the manifest");continue}if("identity"!==q)continue;j&&(f=c.a.fromURL(e,H),H&&["AES-128","SAMPLE-AES","SAMPLE-AES-CENC"].indexOf(j)>=0&&(f.method=j,f.keyFormat=q,Y&&(f.keyID=Y),W&&(f.keyFormatVersions=W),f.iv=V));break;case"START":var X=new v(P).decimalFloatingPoint("TIME-OFFSET");Object(n.a)(X)&&(g.startTimeOffset=X);break;case"MAP":var z=new v(P);k.relurl=z.URI,z.BYTERANGE&&k.setByteRange(z.BYTERANGE),k.level=r,k.sn="initSegment",f&&(k.levelkey=f),k.initSegment=null,m=k,I=!0;break;case"SERVER-CONTROL":var Q=new v(P);g.canBlockReload=Q.bool("CAN-BLOCK-RELOAD"),g.canSkipUntil=Q.optionalFloat("CAN-SKIP-UNTIL",0),g.canSkipDateRanges=g.canSkipUntil>0&&Q.bool("CAN-SKIP-DATERANGES"),g.partHoldBack=Q.optionalFloat("PART-HOLD-BACK",0),g.holdBack=Q.optionalFloat("HOLD-BACK",0);break;case"PART-INF":var $=new v(P);g.partTarget=$.decimalFloatingPoint("PART-TARGET");break;case"PART":var J=g.partList;J||(J=g.partList=[]);var Z=T>0?J[J.length-1]:void 0,tt=T++,et=new u.c(new v(P),k,e,tt,Z);J.push(et),k.duration+=et.duration;break;case"PRELOAD-HINT":var rt=new v(P);g.preloadHint=rt;break;case"RENDITION-REPORT":var it=new v(P);g.renditionReports=g.renditionReports||[],g.renditionReports.push(it);break;default:o.b.warn("line parsed but not handled: "+l)}}}R&&!R.relurl?(p.pop(),L-=R.duration,g.partList&&(g.fragmentHint=R)):g.partList&&(D(k,R),k.cc=A,g.fragmentHint=k);var nt=p.length,at=p[0],st=p[nt-1];if((L+=g.skippedSegments*g.targetduration)>0&&nt&&st){g.averagetargetduration=L/nt;var ot=st.sn;g.endSN="initSegment"!==ot?ot:0,at&&(g.startCC=at.cc,at.initSegment||g.fragments.every((function(t){return t.relurl&&(e=t.relurl,S.test(null!=(r=null===(n=i.parseURL(e))||void 0===n?void 0:n.path)?r:""));var e,r,n}))&&(o.b.warn("MP4 fragments found but no init segment (probably no MAP, incomplete M3U8), trying to fetch SIDX"),(k=new u.b(a,e)).relurl=st.relurl,k.level=r,k.sn="initSegment",at.initSegment=k,g.needSidxRanges=!0))}else g.endSN=0,g.startCC=0;return g.fragmentHint&&(L+=g.fragmentHint.duration),g.totalduration=L,g.endCC=A,_>0&&function(t,e){for(var r=t[e],i=e;i--;){var n=t[i];if(!n)return;n.programDateTime=r.programDateTime-1e3*n.duration,r=n}}(p,_),g},t}();function A(t,e){["video","audio","text"].forEach((function(r){var i=t.filter((function(t){return function(t,e){var r=p[e];return!!r&&!0===r[t.slice(0,4)]}(t,r)}));if(i.length){var n=i.filter((function(t){return 0===t.lastIndexOf("avc1",0)||0===t.lastIndexOf("mp4a",0)}));e[r+"Codec"]=n.length>0?n[0]:i[0],t=t.filter((function(t){return-1===i.indexOf(t)}))}})),e.unknownCodecs=t}function R(t,e,r){var i=e[r];i&&(t[r]=i)}function D(t,e){t.rawProgramDateTime?t.programDateTime=Date.parse(t.rawProgramDateTime):null!=e&&e.programDateTime&&(t.programDateTime=e.endProgramDateTime),Object(n.a)(t.programDateTime)||(t.programDateTime=null,t.rawProgramDateTime=null)}var k=r(4);function _(t,e){var r=t.url;return void 0!==r&&0!==r.indexOf("data:")||(r=e.url),r}var I=function(){function t(t){this.hls=void 0,this.loaders=Object.create(null),this.hls=t,this.registerListeners()}var e=t.prototype;return e.registerListeners=function(){var t=this.hls;t.on(a.a.MANIFEST_LOADING,this.onManifestLoading,this),t.on(a.a.LEVEL_LOADING,this.onLevelLoading,this),t.on(a.a.AUDIO_TRACK_LOADING,this.onAudioTrackLoading,this),t.on(a.a.SUBTITLE_TRACK_LOADING,this.onSubtitleTrackLoading,this)},e.unregisterListeners=function(){var t=this.hls;t.off(a.a.MANIFEST_LOADING,this.onManifestLoading,this),t.off(a.a.LEVEL_LOADING,this.onLevelLoading,this),t.off(a.a.AUDIO_TRACK_LOADING,this.onAudioTrackLoading,this),t.off(a.a.SUBTITLE_TRACK_LOADING,this.onSubtitleTrackLoading,this)},e.createInternalLoader=function(t){var e=this.hls.config,r=e.pLoader,i=e.loader,n=new(r||i)(e);return t.loader=n,this.loaders[t.type]=n,n},e.getInternalLoader=function(t){return this.loaders[t.type]},e.resetInternalLoader=function(t){this.loaders[t]&&delete this.loaders[t]},e.destroyInternalLoaders=function(){for(var t in this.loaders){var e=this.loaders[t];e&&e.destroy(),this.resetInternalLoader(t)}},e.destroy=function(){this.unregisterListeners(),this.destroyInternalLoaders()},e.onManifestLoading=function(t,e){var r=e.url;this.load({id:null,groupId:null,level:0,responseType:"text",type:k.a.MANIFEST,url:r,deliveryDirectives:null})},e.onLevelLoading=function(t,e){var r=e.id,i=e.level,n=e.url,a=e.deliveryDirectives;this.load({id:r,groupId:null,level:i,responseType:"text",type:k.a.LEVEL,url:n,deliveryDirectives:a})},e.onAudioTrackLoading=function(t,e){var r=e.id,i=e.groupId,n=e.url,a=e.deliveryDirectives;this.load({id:r,groupId:i,level:null,responseType:"text",type:k.a.AUDIO_TRACK,url:n,deliveryDirectives:a})},e.onSubtitleTrackLoading=function(t,e){var r=e.id,i=e.groupId,n=e.url,a=e.deliveryDirectives;this.load({id:r,groupId:i,level:null,responseType:"text",type:k.a.SUBTITLE_TRACK,url:n,deliveryDirectives:a})},e.load=function(t){var e,r,i,n,a,s,l=this.hls.config,u=this.getInternalLoader(t);if(u){var h=u.context;if(h&&h.url===t.url)return void o.b.trace("[playlist-loader]: playlist request ongoing");o.b.log("[playlist-loader]: aborting previous loader for type: "+t.type),u.abort()}switch(t.type){case k.a.MANIFEST:r=l.manifestLoadingMaxRetry,i=l.manifestLoadingTimeOut,n=l.manifestLoadingRetryDelay,a=l.manifestLoadingMaxRetryTimeout;break;case k.a.LEVEL:case k.a.AUDIO_TRACK:case k.a.SUBTITLE_TRACK:r=0,i=l.levelLoadingTimeOut;break;default:r=l.levelLoadingMaxRetry,i=l.levelLoadingTimeOut,n=l.levelLoadingRetryDelay,a=l.levelLoadingMaxRetryTimeout}if((u=this.createInternalLoader(t),null!==(e=t.deliveryDirectives)&&void 0!==e&&e.part)&&(t.type===k.a.LEVEL&&null!==t.level?s=this.hls.levels[t.level].details:t.type===k.a.AUDIO_TRACK&&null!==t.id?s=this.hls.audioTracks[t.id].details:t.type===k.a.SUBTITLE_TRACK&&null!==t.id&&(s=this.hls.subtitleTracks[t.id].details),s)){var d=s.partTarget,c=s.targetduration;d&&c&&(i=Math.min(1e3*Math.max(3*d,.8*c),i))}var f={timeout:i,maxRetry:r,retryDelay:n,maxRetryDelay:a,highWaterMark:0},g={onSuccess:this.loadsuccess.bind(this),onError:this.loaderror.bind(this),onTimeout:this.loadtimeout.bind(this)};u.load(t,f,g)},e.loadsuccess=function(t,e,r,i){if(void 0===i&&(i=null),r.isSidxRequest)return this.handleSidxRequest(t,r),void this.handlePlaylistLoaded(t,e,r,i);this.resetInternalLoader(r.type);var n=t.data;0===n.indexOf("#EXTM3U")?(e.parsing.start=performance.now(),n.indexOf("#EXTINF:")>0||n.indexOf("#EXT-X-TARGETDURATION:")>0?this.handleTrackOrLevelPlaylist(t,e,r,i):this.handleMasterPlaylist(t,e,r,i)):this.handleManifestParsingError(t,r,"no EXTM3U delimiter",i)},e.loaderror=function(t,e,r){void 0===r&&(r=null),this.handleNetworkError(e,r,!1,t)},e.loadtimeout=function(t,e,r){void 0===r&&(r=null),this.handleNetworkError(e,r,!0)},e.handleMasterPlaylist=function(t,e,r,i){var n=this.hls,s=t.data,l=_(t,r),u=L.parseMasterPlaylist(s,l),h=u.levels,d=u.sessionData;if(h.length){var c=h.map((function(t){return{id:t.attrs.AUDIO,audioCodec:t.audioCodec}})),f=h.map((function(t){return{id:t.attrs.SUBTITLES,textCodec:t.textCodec}})),g=L.parseMasterPlaylistMedia(s,l,"AUDIO",c),p=L.parseMasterPlaylistMedia(s,l,"SUBTITLES",f),m=L.parseMasterPlaylistMedia(s,l,"CLOSED-CAPTIONS");if(g.length)g.some((function(t){return!t.url}))||!h[0].audioCodec||h[0].attrs.AUDIO||(o.b.log("[playlist-loader]: audio codec signaled in quality level, but no embedded audio track signaled, create one"),g.unshift({type:"main",name:"main",default:!1,autoselect:!1,forced:!1,id:-1,attrs:new v({}),bitrate:0,url:""}));n.trigger(a.a.MANIFEST_LOADED,{levels:h,audioTracks:g,subtitles:p,captions:m,url:l,stats:e,networkDetails:i,sessionData:d})}else this.handleManifestParsingError(t,r,"no level found in manifest",i)},e.handleTrackOrLevelPlaylist=function(t,e,r,i){var o=this.hls,l=r.id,u=r.level,h=r.type,d=_(t,r),c=Object(n.a)(l)?l:0,f=Object(n.a)(u)?u:c,g=function(t){switch(t.type){case k.a.AUDIO_TRACK:return k.b.AUDIO;case k.a.SUBTITLE_TRACK:return k.b.SUBTITLE;default:return k.b.MAIN}}(r),p=L.parseLevelPlaylist(t.data,d,f,g,c);if(p.fragments.length){if(h===k.a.MANIFEST){var m={attrs:new v({}),bitrate:0,details:p,name:"",url:d};o.trigger(a.a.MANIFEST_LOADED,{levels:[m],audioTracks:[],url:d,stats:e,networkDetails:i,sessionData:null})}if(e.parsing.end=performance.now(),p.needSidxRanges){var y,T=null===(y=p.fragments[0].initSegment)||void 0===y?void 0:y.url;this.load({url:T,isSidxRequest:!0,type:h,level:u,levelDetails:p,id:l,groupId:null,rangeStart:0,rangeEnd:2048,responseType:"arraybuffer",deliveryDirectives:null})}else r.levelDetails=p,this.handlePlaylistLoaded(t,e,r,i)}else o.trigger(a.a.ERROR,{type:s.b.NETWORK_ERROR,details:s.a.LEVEL_EMPTY_ERROR,fatal:!1,url:d,reason:"no fragments found in level",level:"number"==typeof r.level?r.level:void 0})},e.handleSidxRequest=function(t,e){var r=Object(l.g)(new Uint8Array(t.data));if(r){var i=r.references,n=e.levelDetails;i.forEach((function(t,e){var i=t.info,a=n.fragments[e];0===a.byteRange.length&&a.setByteRange(String(1+i.end-i.start)+"@"+String(i.start)),a.initSegment&&a.initSegment.setByteRange(String(r.moovEndOffset)+"@0")}))}},e.handleManifestParsingError=function(t,e,r,i){this.hls.trigger(a.a.ERROR,{type:s.b.NETWORK_ERROR,details:s.a.MANIFEST_PARSING_ERROR,fatal:e.type===k.a.MANIFEST,url:t.url,reason:r,response:t,context:e,networkDetails:i})},e.handleNetworkError=function(t,e,r,i){void 0===r&&(r=!1),o.b.warn("[playlist-loader]: A network "+(r?"timeout":"error")+" occurred while loading "+t.type+" level: "+t.level+" id: "+t.id+' group-id: "'+t.groupId+'"');var n=s.a.UNKNOWN,l=!1,u=this.getInternalLoader(t);switch(t.type){case k.a.MANIFEST:n=r?s.a.MANIFEST_LOAD_TIMEOUT:s.a.MANIFEST_LOAD_ERROR,l=!0;break;case k.a.LEVEL:n=r?s.a.LEVEL_LOAD_TIMEOUT:s.a.LEVEL_LOAD_ERROR,l=!1;break;case k.a.AUDIO_TRACK:n=r?s.a.AUDIO_TRACK_LOAD_TIMEOUT:s.a.AUDIO_TRACK_LOAD_ERROR,l=!1;break;case k.a.SUBTITLE_TRACK:n=r?s.a.SUBTITLE_TRACK_LOAD_TIMEOUT:s.a.SUBTITLE_LOAD_ERROR,l=!1}u&&this.resetInternalLoader(t.type);var h={type:s.b.NETWORK_ERROR,details:n,fatal:l,url:t.url,loader:u,context:t,networkDetails:e};i&&(h.response=i),this.hls.trigger(a.a.ERROR,h)},e.handlePlaylistLoaded=function(t,e,r,i){var n=r.type,s=r.level,o=r.id,l=r.groupId,u=r.loader,h=r.levelDetails,d=r.deliveryDirectives;if(null!=h&&h.targetduration){if(u)switch(h.live&&(u.getCacheAge&&(h.ageHeader=u.getCacheAge()||0),u.getCacheAge&&!isNaN(h.ageHeader)||(h.ageHeader=0)),n){case k.a.MANIFEST:case k.a.LEVEL:this.hls.trigger(a.a.LEVEL_LOADED,{details:h,level:s||0,id:o||0,stats:e,networkDetails:i,deliveryDirectives:d});break;case k.a.AUDIO_TRACK:this.hls.trigger(a.a.AUDIO_TRACK_LOADED,{details:h,id:o||0,groupId:l||"",stats:e,networkDetails:i,deliveryDirectives:d});break;case k.a.SUBTITLE_TRACK:this.hls.trigger(a.a.SUBTITLE_TRACK_LOADED,{details:h,id:o||0,groupId:l||"",stats:e,networkDetails:i,deliveryDirectives:d})}}else this.handleManifestParsingError(t,r,"invalid target duration",i)},t}(),C=function(){function t(t){this.hls=void 0,this.loaders={},this.decryptkey=null,this.decrypturl=null,this.hls=t,this._registerListeners()}var e=t.prototype;return e._registerListeners=function(){this.hls.on(a.a.KEY_LOADING,this.onKeyLoading,this)},e._unregisterListeners=function(){this.hls.off(a.a.KEY_LOADING,this.onKeyLoading)},e.destroy=function(){for(var t in this._unregisterListeners(),this.loaders){var e=this.loaders[t];e&&e.destroy()}this.loaders={}},e.onKeyLoading=function(t,e){var r=e.frag,i=r.type,n=this.loaders[i];if(r.decryptdata){var s=r.decryptdata.uri;if(s!==this.decrypturl||null===this.decryptkey){var l=this.hls.config;if(n&&(o.b.warn("abort previous key loader for type:"+i),n.abort()),!s)return void o.b.warn("key uri is falsy");var u=l.loader,h=r.loader=this.loaders[i]=new u(l);this.decrypturl=s,this.decryptkey=null;var d={url:s,frag:r,responseType:"arraybuffer"},c={timeout:l.fragLoadingTimeOut,maxRetry:0,retryDelay:l.fragLoadingRetryDelay,maxRetryDelay:l.fragLoadingMaxRetryTimeout,highWaterMark:0},f={onSuccess:this.loadsuccess.bind(this),onError:this.loaderror.bind(this),onTimeout:this.loadtimeout.bind(this)};h.load(d,c,f)}else this.decryptkey&&(r.decryptdata.key=this.decryptkey,this.hls.trigger(a.a.KEY_LOADED,{frag:r}))}else o.b.warn("Missing decryption data on fragment in onKeyLoading")},e.loadsuccess=function(t,e,r){var i=r.frag;i.decryptdata?(this.decryptkey=i.decryptdata.key=new Uint8Array(t.data),i.loader=null,delete this.loaders[i.type],this.hls.trigger(a.a.KEY_LOADED,{frag:i})):o.b.error("after key load, decryptdata unset")},e.loaderror=function(t,e){var r=e.frag,i=r.loader;i&&i.abort(),delete this.loaders[r.type],this.hls.trigger(a.a.ERROR,{type:s.b.NETWORK_ERROR,details:s.a.KEY_LOAD_ERROR,fatal:!1,frag:r,response:t})},e.loadtimeout=function(t,e){var r=e.frag,i=r.loader;i&&i.abort(),delete this.loaders[r.type],this.hls.trigger(a.a.ERROR,{type:s.b.NETWORK_ERROR,details:s.a.KEY_LOAD_TIMEOUT,fatal:!1,frag:r})},t}();function w(t,e){var r;try{r=new Event("addtrack")}catch(t){(r=document.createEvent("Event")).initEvent("addtrack",!1,!1)}r.track=t,e.dispatchEvent(r)}function O(t,e){var r=t.mode;if("disabled"===r&&(t.mode="hidden"),t.cues&&!t.cues.getCueById(e.id))try{if(t.addCue(e),!t.cues.getCueById(e.id))throw new Error("addCue is failed for: "+e)}catch(r){o.b.debug("[texttrack-utils]: "+r);var i=new self.TextTrackCue(e.startTime,e.endTime,e.text);i.id=e.id,t.addCue(i)}"disabled"===r&&(t.mode=r)}function x(t){var e=t.mode;if("disabled"===e&&(t.mode="hidden"),t.cues)for(var r=t.cues.length;r--;)t.removeCue(t.cues[r]);"disabled"===e&&(t.mode=e)}function P(t,e,r){var i=t.mode;if("disabled"===i&&(t.mode="hidden"),t.cues&&t.cues.length>0)for(var n=function(t,e,r){var i=[],n=function(t,e){if(e<t[0].startTime)return 0;var r=t.length-1;if(e>t[r].endTime)return-1;var i=0,n=r;for(;i<=n;){var a=Math.floor((n+i)/2);if(e<t[a].startTime)n=a-1;else{if(!(e>t[a].startTime&&i<r))return a;i=a+1}}return t[i].startTime-e<e-t[n].startTime?i:n}(t,e);if(n>-1)for(var a=n,s=t.length;a<s;a++){var o=t[a];if(o.startTime>=e&&o.endTime<=r)i.push(o);else if(o.startTime>r)return i}return i}(t.cues,e,r),a=0;a<n.length;a++)t.removeCue(n[a]);"disabled"===i&&(t.mode=i)}var M=r(7),F=function(){function t(t){this.hls=void 0,this.id3Track=null,this.media=null,this.hls=t,this._registerListeners()}var e=t.prototype;return e.destroy=function(){this._unregisterListeners()},e._registerListeners=function(){var t=this.hls;t.on(a.a.MEDIA_ATTACHED,this.onMediaAttached,this),t.on(a.a.MEDIA_DETACHING,this.onMediaDetaching,this),t.on(a.a.FRAG_PARSING_METADATA,this.onFragParsingMetadata,this),t.on(a.a.BUFFER_FLUSHING,this.onBufferFlushing,this)},e._unregisterListeners=function(){var t=this.hls;t.off(a.a.MEDIA_ATTACHED,this.onMediaAttached,this),t.off(a.a.MEDIA_DETACHING,this.onMediaDetaching,this),t.off(a.a.FRAG_PARSING_METADATA,this.onFragParsingMetadata,this),t.off(a.a.BUFFER_FLUSHING,this.onBufferFlushing,this)},e.onMediaAttached=function(t,e){this.media=e.media},e.onMediaDetaching=function(){this.id3Track&&(x(this.id3Track),this.id3Track=null,this.media=null)},e.getID3Track=function(t){if(this.media){for(var e=0;e<t.length;e++){var r=t[e];if("metadata"===r.kind&&"id3"===r.label)return w(r,this.media),r}return this.media.addTextTrack("metadata","id3")}},e.onFragParsingMetadata=function(t,e){if(this.media){var r=e.frag,i=e.samples;this.id3Track||(this.id3Track=this.getID3Track(this.media.textTracks),this.id3Track.mode="hidden");for(var n=self.WebKitDataCue||self.VTTCue||self.TextTrackCue,a=0;a<i.length;a++){var s=M.c(i[a].data);if(s){var o=i[a].pts,l=a<i.length-1?i[a+1].pts:r.end;l-o<=0&&(l=o+.25);for(var u=0;u<s.length;u++){var h=s[u];if(!M.e(h)){var d=new n(o,l,"");d.value=h,this.id3Track.addCue(d)}}}}}},e.onBufferFlushing=function(t,e){var r=e.startOffset,i=e.endOffset,n=e.type;if(!n||"audio"===n){var a=this.id3Track;a&&P(a,r,i)}},t}();function N(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var U,B=function(){function t(t){var e=this;this.hls=void 0,this.config=void 0,this.media=null,this.levelDetails=null,this.currentTime=0,this.stallCount=0,this._latency=null,this.timeupdateHandler=function(){return e.timeupdate()},this.hls=t,this.config=t.config,this.registerListeners()}var e,r,i,n=t.prototype;return n.destroy=function(){this.unregisterListeners(),this.onMediaDetaching(),this.levelDetails=null,this.hls=this.timeupdateHandler=null},n.registerListeners=function(){this.hls.on(a.a.MEDIA_ATTACHED,this.onMediaAttached,this),this.hls.on(a.a.MEDIA_DETACHING,this.onMediaDetaching,this),this.hls.on(a.a.MANIFEST_LOADING,this.onManifestLoading,this),this.hls.on(a.a.LEVEL_UPDATED,this.onLevelUpdated,this),this.hls.on(a.a.ERROR,this.onError,this)},n.unregisterListeners=function(){this.hls.off(a.a.MEDIA_ATTACHED,this.onMediaAttached),this.hls.off(a.a.MEDIA_DETACHING,this.onMediaDetaching),this.hls.off(a.a.MANIFEST_LOADING,this.onManifestLoading),this.hls.off(a.a.LEVEL_UPDATED,this.onLevelUpdated),this.hls.off(a.a.ERROR,this.onError)},n.onMediaAttached=function(t,e){this.media=e.media,this.media.addEventListener("timeupdate",this.timeupdateHandler)},n.onMediaDetaching=function(){this.media&&(this.media.removeEventListener("timeupdate",this.timeupdateHandler),this.media=null)},n.onManifestLoading=function(){this.levelDetails=null,this._latency=null,this.stallCount=0},n.onLevelUpdated=function(t,e){var r=e.details;this.levelDetails=r,r.advanced&&this.timeupdate(),!r.live&&this.media&&this.media.removeEventListener("timeupdate",this.timeupdateHandler)},n.onError=function(t,e){e.details===s.a.BUFFER_STALLED_ERROR&&(this.stallCount++,o.b.warn("[playback-rate-controller]: Stall detected, adjusting target latency"))},n.timeupdate=function(){var t=this.media,e=this.levelDetails;if(t&&e){this.currentTime=t.currentTime;var r=this.computeLatency();if(null!==r){this._latency=r;var i=this.config,n=i.lowLatencyMode,a=i.maxLiveSyncPlaybackRate;if(n&&1!==a){var s=this.targetLatency;if(null!==s){var o=r-s,l=o<Math.min(this.maxLatency,s+e.targetduration);if(e.live&&l&&o>.05&&this.forwardBufferLength>1){var u=Math.min(2,Math.max(1,a)),h=Math.round(2/(1+Math.exp(-.75*o-this.edgeStalled))*20)/20;t.playbackRate=Math.min(u,Math.max(1,h))}else 1!==t.playbackRate&&0!==t.playbackRate&&(t.playbackRate=1)}}}}},n.estimateLiveEdge=function(){var t=this.levelDetails;return null===t?null:t.edge+t.age},n.computeLatency=function(){var t=this.estimateLiveEdge();return null===t?null:t-this.currentTime},e=t,(r=[{key:"latency",get:function(){return this._latency||0}},{key:"maxLatency",get:function(){var t=this.config,e=this.levelDetails;return void 0!==t.liveMaxLatencyDuration?t.liveMaxLatencyDuration:e?t.liveMaxLatencyDurationCount*e.targetduration:0}},{key:"targetLatency",get:function(){var t=this.levelDetails;if(null===t)return null;var e=t.holdBack,r=t.partHoldBack,i=t.targetduration,n=this.config,a=n.liveSyncDuration,s=n.liveSyncDurationCount,o=n.lowLatencyMode,l=this.hls.userConfig,u=o&&r||e;(l.liveSyncDuration||l.liveSyncDurationCount||0===u)&&(u=void 0!==a?a:s*i);var h=i;return u+Math.min(1*this.stallCount,h)}},{key:"liveSyncPosition",get:function(){var t=this.estimateLiveEdge(),e=this.targetLatency,r=this.levelDetails;if(null===t||null===e||null===r)return null;var i=r.edge,n=t-e-this.edgeStalled,a=i-r.totalduration,s=i-(this.config.lowLatencyMode&&r.partTarget||r.targetduration);return Math.min(Math.max(a,n),s)}},{key:"drift",get:function(){var t=this.levelDetails;return null===t?1:t.drift}},{key:"edgeStalled",get:function(){var t=this.levelDetails;if(null===t)return 0;var e=3*(this.config.lowLatencyMode&&t.partTarget||t.targetduration);return Math.max(t.age-e,0)}},{key:"forwardBufferLength",get:function(){var t=this.media,e=this.levelDetails;if(!t||!e)return 0;var r=t.buffered.length;return r?t.buffered.end(r-1):e.edge-this.currentTime}}])&&N(e.prototype,r),i&&N(e,i),t}();function G(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}!function(t){t.No="",t.Yes="YES",t.v2="v2"}(U||(U={}));var K=function(){function t(t,e,r){this.msn=void 0,this.part=void 0,this.skip=void 0,this.msn=t,this.part=e,this.skip=r}return t.prototype.addDirectives=function(t){var e=new self.URL(t);return void 0!==this.msn&&e.searchParams.set("_HLS_msn",this.msn.toString()),void 0!==this.part&&e.searchParams.set("_HLS_part",this.part.toString()),this.skip&&e.searchParams.set("_HLS_skip",this.skip),e.toString()},t}(),j=function(){function t(t){this.attrs=void 0,this.audioCodec=void 0,this.bitrate=void 0,this.codecSet=void 0,this.height=void 0,this.id=void 0,this.name=void 0,this.videoCodec=void 0,this.width=void 0,this.unknownCodecs=void 0,this.audioGroupIds=void 0,this.details=void 0,this.fragmentError=0,this.loadError=0,this.loaded=void 0,this.realBitrate=0,this.textGroupIds=void 0,this.url=void 0,this._urlId=0,this.url=[t.url],this.attrs=t.attrs,this.bitrate=t.bitrate,t.details&&(this.details=t.details),this.id=t.id||0,this.name=t.name,this.width=t.width||0,this.height=t.height||0,this.audioCodec=t.audioCodec,this.videoCodec=t.videoCodec,this.unknownCodecs=t.unknownCodecs,this.codecSet=[t.videoCodec,t.audioCodec].filter((function(t){return t})).join(",").replace(/\.[^.,]+/g,"")}var e,r,i;return e=t,(r=[{key:"maxBitrate",get:function(){return Math.max(this.realBitrate,this.bitrate)}},{key:"uri",get:function(){return this.url[this._urlId]||""}},{key:"urlId",get:function(){return this._urlId},set:function(t){var e=t%this.url.length;this._urlId!==e&&(this.details=void 0,this._urlId=e)}}])&&G(e.prototype,r),i&&G(e,i),t}();function H(t,e,r){switch(e){case"audio":t.audioGroupIds||(t.audioGroupIds=[]),t.audioGroupIds.push(r);break;case"text":t.textGroupIds||(t.textGroupIds=[]),t.textGroupIds.push(r)}}function V(t){var e={};t.forEach((function(t){var r=t.groupId||"";t.id=e[r]=e[r]||0,e[r]++}))}function W(t,e){var r=e.startPTS;if(Object(n.a)(r)){var i,a=0;e.sn>t.sn?(a=r-t.start,i=t):(a=t.start-r,i=e),i.duration!==a&&(i.duration=a)}else if(e.sn>t.sn){t.cc===e.cc&&t.minEndPTS?e.start=t.start+(t.minEndPTS-t.start):e.start=t.start+t.duration}else e.start=Math.max(t.start-e.duration,0)}function Y(t,e,r,i,a,s){i-r<=0&&(o.b.warn("Fragment should have a positive duration",e),i=r+e.duration,s=a+e.duration);var l=r,u=i,h=e.startPTS,d=e.endPTS;if(Object(n.a)(h)){var c=Math.abs(h-r);Object(n.a)(e.deltaPTS)?e.deltaPTS=Math.max(c,e.deltaPTS):e.deltaPTS=c,l=Math.max(r,h),r=Math.min(r,h),a=Math.min(a,e.startDTS),u=Math.min(i,d),i=Math.max(i,d),s=Math.max(s,e.endDTS)}e.duration=i-r;var f=r-e.start;e.appendedPTS=i,e.start=e.startPTS=r,e.maxStartPTS=l,e.startDTS=a,e.endPTS=i,e.minEndPTS=u,e.endDTS=s;var g,v=e.sn;if(!t||v<t.startSN||v>t.endSN)return 0;var p=v-t.startSN,m=t.fragments;for(m[p]=e,g=p;g>0;g--)W(m[g],m[g-1]);for(g=p;g<m.length-1;g++)W(m[g],m[g+1]);return t.fragmentHint&&W(m[m.length-1],t.fragmentHint),t.PTSKnown=t.alignedSliding=!0,f}function q(t,e){for(var r=null,i=t.fragments,a=i.length-1;a>=0;a--){var s=i[a].initSegment;if(s){r=s;break}}t.fragmentHint&&delete t.fragmentHint.endPTS;var l,u=0;(function(t,e,r){for(var i=e.skippedSegments,n=Math.max(t.startSN,e.startSN)-e.startSN,a=(t.fragmentHint?1:0)+(i?e.endSN:Math.min(t.endSN,e.endSN))-e.startSN,s=e.startSN-t.startSN,o=e.fragmentHint?e.fragments.concat(e.fragmentHint):e.fragments,l=t.fragmentHint?t.fragments.concat(t.fragmentHint):t.fragments,u=n;u<=a;u++){var h=l[s+u],d=o[u];i&&!d&&u<i&&(d=e.fragments[u]=h),h&&d&&r(h,d)}}(t,e,(function(t,i){t.relurl&&(u=t.cc-i.cc),Object(n.a)(t.startPTS)&&Object(n.a)(t.endPTS)&&(i.start=i.startPTS=t.startPTS,i.startDTS=t.startDTS,i.appendedPTS=t.appendedPTS,i.maxStartPTS=t.maxStartPTS,i.endPTS=t.endPTS,i.endDTS=t.endDTS,i.minEndPTS=t.minEndPTS,i.duration=t.endPTS-t.startPTS,i.duration&&(l=i),e.PTSKnown=e.alignedSliding=!0),i.elementaryStreams=t.elementaryStreams,i.loader=t.loader,i.stats=t.stats,i.urlId=t.urlId,t.initSegment&&(i.initSegment=t.initSegment,r=t.initSegment)})),r)&&(e.fragmentHint?e.fragments.concat(e.fragmentHint):e.fragments).forEach((function(t){var e;t.initSegment&&t.initSegment.relurl!==(null===(e=r)||void 0===e?void 0:e.relurl)||(t.initSegment=r)}));if(e.skippedSegments&&(e.deltaUpdateFailed=e.fragments.some((function(t){return!t})),e.deltaUpdateFailed)){o.b.warn("[level-helper] Previous playlist missing segments skipped in delta playlist");for(var h=e.skippedSegments;h--;)e.fragments.shift();e.startSN=e.fragments[0].sn,e.startCC=e.fragments[0].cc}var d=e.fragments;if(u){o.b.warn("discontinuity sliding from playlist, take drift into account");for(var c=0;c<d.length;c++)d[c].cc+=u}e.skippedSegments&&(e.startCC=e.fragments[0].cc),function(t,e,r){if(t&&e)for(var i=0,n=0,a=t.length;n<=a;n++){var s=t[n],o=e[n+i];s&&o&&s.index===o.index&&s.fragment.sn===o.fragment.sn?r(s,o):i--}}(t.partList,e.partList,(function(t,e){e.elementaryStreams=t.elementaryStreams,e.stats=t.stats})),l?Y(e,l,l.startPTS,l.endPTS,l.startDTS,l.endDTS):X(t,e),d.length&&(e.totalduration=e.edge-d[0].start),e.driftStartTime=t.driftStartTime,e.driftStart=t.driftStart;var f=e.advancedDateTime;if(e.advanced&&f){var g=e.edge;e.driftStart||(e.driftStartTime=f,e.driftStart=g),e.driftEndTime=f,e.driftEnd=g}else e.driftEndTime=t.driftEndTime,e.driftEnd=t.driftEnd,e.advancedDateTime=t.advancedDateTime}function X(t,e){var r=e.startSN+e.skippedSegments-t.startSN,i=t.fragments;r<0||r>=i.length||z(e,i[r].start)}function z(t,e){if(e){for(var r=t.fragments,i=t.skippedSegments;i<r.length;i++)r[i].start+=e;t.fragmentHint&&(t.fragmentHint.start+=e)}}var Q=function(){function t(t,e){this.hls=void 0,this.timer=-1,this.canLoad=!1,this.retryCount=0,this.log=void 0,this.warn=void 0,this.log=o.b.log.bind(o.b,e+":"),this.warn=o.b.warn.bind(o.b,e+":"),this.hls=t}var e=t.prototype;return e.destroy=function(){this.clearTimer(),this.hls=this.log=this.warn=null},e.onError=function(t,e){e.fatal&&e.type===s.b.NETWORK_ERROR&&this.clearTimer()},e.clearTimer=function(){clearTimeout(this.timer),this.timer=-1},e.startLoad=function(){this.canLoad=!0,this.retryCount=0,this.loadPlaylist()},e.stopLoad=function(){this.canLoad=!1,this.clearTimer()},e.switchParams=function(t,e){var r=null==e?void 0:e.renditionReports;if(r)for(var i=0;i<r.length;i++){var a=r[i],s=""+a.URI;if(s===t.substr(-s.length)){var o=parseInt(a["LAST-MSN"]),l=parseInt(a["LAST-PART"]);if(e&&this.hls.config.lowLatencyMode){var u=Math.min(e.age-e.partTarget,e.targetduration);void 0!==l&&u>e.partTarget&&(l+=1)}if(Object(n.a)(o))return new K(o,Object(n.a)(l)?l:void 0,U.No)}}},e.loadPlaylist=function(t){},e.shouldLoadTrack=function(t){return this.canLoad&&t&&!!t.url&&(!t.details||t.details.live)},e.playlistLoaded=function(t,e,r){var i=this,n=e.details,a=e.stats,s=a.loading.end?Math.max(0,self.performance.now()-a.loading.end):0;if(n.advancedDateTime=Date.now()-s,n.live||null!=r&&r.live){if(n.reloaded(r),r&&this.log("live playlist "+t+" "+(n.advanced?"REFRESHED "+n.lastPartSn+"-"+n.lastPartIndex:"MISSED")),r&&n.fragments.length>0&&q(r,n),!this.canLoad||!n.live)return;var o,l=void 0,u=void 0;if(n.canBlockReload&&n.endSN&&n.advanced){var h=this.hls.config.lowLatencyMode,d=n.lastPartSn,c=n.endSN,f=n.lastPartIndex,g=d===c;-1!==f?(l=g?c+1:d,u=g?h?0:f:f+1):l=c+1;var v=n.age,p=v+n.ageHeader,m=Math.min(p-n.partTarget,1.5*n.targetduration);if(m>0){if(r&&m>r.tuneInGoal)this.warn("CDN Tune-in goal increased from: "+r.tuneInGoal+" to: "+m+" with playlist age: "+n.age),m=0;else{var y=Math.floor(m/n.targetduration);if(l+=y,void 0!==u)u+=Math.round(m%n.targetduration/n.partTarget);this.log("CDN Tune-in age: "+n.ageHeader+"s last advanced "+v.toFixed(2)+"s goal: "+m+" skip sn "+y+" to part "+u)}n.tuneInGoal=m}if(o=this.getDeliveryDirectives(n,e.deliveryDirectives,l,u),h||!g)return void this.loadPlaylist(o)}else o=this.getDeliveryDirectives(n,e.deliveryDirectives,l,u);var T=function(t,e){var r,i=1e3*t.levelTargetDuration,n=i/2,a=t.age,s=a>0&&a<3*i,o=e.loading.end-e.loading.start,l=t.availabilityDelay;if(!1===t.updated)if(s){var u=333*t.misses;r=Math.max(Math.min(n,2*o),u),t.availabilityDelay=(t.availabilityDelay||0)+r}else r=n;else s?(l=Math.min(l||i/2,a),t.availabilityDelay=l,r=l+i-a):r=i-o;return Math.round(r)}(n,a);void 0!==l&&n.canBlockReload&&(T-=n.partTarget||1),this.log("reload live playlist "+t+" in "+Math.round(T)+" ms"),this.timer=self.setTimeout((function(){return i.loadPlaylist(o)}),T)}else this.clearTimer()},e.getDeliveryDirectives=function(t,e,r,i){var n=function(t,e){var r=t.canSkipUntil,i=t.canSkipDateRanges,n=t.endSN;return r&&(void 0!==e?e-n:0)<r?i?U.v2:U.Yes:U.No}(t,r);return null!=e&&e.skip&&t.deltaUpdateFailed&&(r=e.msn,i=e.part,n=U.No),new K(r,i,n)},e.retryLoadingOrFail=function(t){var e,r=this,i=this.hls.config,n=this.retryCount<i.levelLoadingMaxRetry;if(n)if(this.retryCount++,t.details.indexOf("LoadTimeOut")>-1&&null!==(e=t.context)&&void 0!==e&&e.deliveryDirectives)this.warn("retry playlist loading #"+this.retryCount+' after "'+t.details+'"'),this.loadPlaylist();else{var a=Math.min(Math.pow(2,this.retryCount)*i.levelLoadingRetryDelay,i.levelLoadingMaxRetryTimeout);this.timer=self.setTimeout((function(){return r.loadPlaylist()}),a),this.warn("retry playlist loading #"+this.retryCount+" in "+a+' ms after "'+t.details+'"')}else this.warn('cannot recover from error "'+t.details+'"'),this.clearTimer(),t.fatal=!0;return n},t}();function $(){return($=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t}).apply(this,arguments)}function J(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function Z(t,e){return(Z=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var tt,et=/chrome|firefox/.test(navigator.userAgent.toLowerCase()),rt=function(t){var e,r;function i(e){var r;return(r=t.call(this,e,"[level-controller]")||this)._levels=[],r._firstLevel=-1,r._startLevel=void 0,r.currentLevelIndex=-1,r.manualLevelIndex=-1,r.onParsedComplete=void 0,r._registerListeners(),r}r=t,(e=i).prototype=Object.create(r.prototype),e.prototype.constructor=e,Z(e,r);var n,o,l,u=i.prototype;return u._registerListeners=function(){var t=this.hls;t.on(a.a.MANIFEST_LOADED,this.onManifestLoaded,this),t.on(a.a.LEVEL_LOADED,this.onLevelLoaded,this),t.on(a.a.AUDIO_TRACK_SWITCHED,this.onAudioTrackSwitched,this),t.on(a.a.FRAG_LOADED,this.onFragLoaded,this),t.on(a.a.ERROR,this.onError,this)},u._unregisterListeners=function(){var t=this.hls;t.off(a.a.MANIFEST_LOADED,this.onManifestLoaded,this),t.off(a.a.LEVEL_LOADED,this.onLevelLoaded,this),t.off(a.a.AUDIO_TRACK_SWITCHED,this.onAudioTrackSwitched,this),t.off(a.a.FRAG_LOADED,this.onFragLoaded,this),t.off(a.a.ERROR,this.onError,this)},u.destroy=function(){this._unregisterListeners(),this.manualLevelIndex=-1,this._levels.length=0,t.prototype.destroy.call(this)},u.startLoad=function(){this._levels.forEach((function(t){t.loadError=0})),t.prototype.startLoad.call(this)},u.onManifestLoaded=function(t,e){var r,i,n=[],o=[],l=[],u={},h=!1,d=!1,c=!1;if(e.levels.forEach((function(t){var e=t.attrs;h=h||!(!t.width||!t.height),d=d||!!t.videoCodec,c=c||!!t.audioCodec,et&&t.audioCodec&&-1!==t.audioCodec.indexOf("mp4a.40.34")&&(t.audioCodec=void 0);var r=t.bitrate+"-"+t.attrs.RESOLUTION+"-"+t.attrs.CODECS;(i=u[r])?i.url.push(t.url):(i=new j(t),u[r]=i,n.push(i)),e&&(e.AUDIO&&H(i,"audio",e.AUDIO),e.SUBTITLES&&H(i,"text",e.SUBTITLES))})),(h||d)&&c&&(n=n.filter((function(t){var e=t.videoCodec,r=t.width,i=t.height;return!!e||!(!r||!i)}))),n=n.filter((function(t){var e=t.audioCodec,r=t.videoCodec;return(!e||m(e,"audio"))&&(!r||m(r,"video"))})),e.audioTracks&&V(o=e.audioTracks.filter((function(t){return!t.audioCodec||m(t.audioCodec,"audio")}))),e.subtitles&&V(l=e.subtitles),n.length>0){r=n[0].bitrate,n.sort((function(t,e){return t.bitrate-e.bitrate})),this._levels=n;for(var f=0;f<n.length;f++)if(n[f].bitrate===r){this._firstLevel=f,this.log("manifest loaded, "+n.length+" level(s) found, first bitrate: "+r);break}var g=c&&!d,v={levels:n,audioTracks:o,subtitleTracks:l,firstLevel:this._firstLevel,stats:e.stats,audio:c,video:d,altAudio:!g&&o.some((function(t){return!!t.url}))};this.hls.trigger(a.a.MANIFEST_PARSED,v),(this.hls.config.autoStartLoad||this.hls.forceStartLoad)&&this.hls.startLoad(this.hls.config.startPosition)}else this.hls.trigger(a.a.ERROR,{type:s.b.MEDIA_ERROR,details:s.a.MANIFEST_INCOMPATIBLE_CODECS_ERROR,fatal:!0,url:e.url,reason:"no level with compatible codecs found in manifest"})},u.onError=function(e,r){if(t.prototype.onError.call(this,e,r),!r.fatal){var i=r.context,n=this._levels[this.currentLevelIndex];if(i&&(i.type===k.a.AUDIO_TRACK&&n.audioGroupIds&&i.groupId===n.audioGroupIds[n.urlId]||i.type===k.a.SUBTITLE_TRACK&&n.textGroupIds&&i.groupId===n.textGroupIds[n.urlId]))this.redundantFailover(this.currentLevelIndex);else{var a,o=!1,l=!0;switch(r.details){case s.a.FRAG_LOAD_ERROR:case s.a.FRAG_LOAD_TIMEOUT:case s.a.KEY_LOAD_ERROR:case s.a.KEY_LOAD_TIMEOUT:if(r.frag){var u=this._levels[r.frag.level];u?(u.fragmentError++,u.fragmentError>this.hls.config.fragLoadingMaxRetry&&(a=r.frag.level)):a=r.frag.level}break;case s.a.LEVEL_LOAD_ERROR:case s.a.LEVEL_LOAD_TIMEOUT:i&&(i.deliveryDirectives&&(l=!1),a=i.level),o=!0;break;case s.a.REMUX_ALLOC_ERROR:a=r.level,o=!0}void 0!==a&&this.recoverLevel(r,a,o,l)}}},u.recoverLevel=function(t,e,r,i){var n=t.details,a=this._levels[e];if(a.loadError++,r){if(!this.retryLoadingOrFail(t))return void(this.currentLevelIndex=-1);t.levelRetry=!0}if(i){var s=a.url.length;if(s>1&&a.loadError<s)t.levelRetry=!0,this.redundantFailover(e);else if(-1===this.manualLevelIndex){var o=0===e?this._levels.length-1:e-1;this.currentLevelIndex!==o&&0===this._levels[o].loadError&&(this.warn(n+": switch to "+o),t.levelRetry=!0,this.hls.nextAutoLevel=o)}}},u.redundantFailover=function(t){var e=this._levels[t],r=e.url.length;if(r>1){var i=(e.urlId+1)%r;this.warn("Switching to redundant URL-id "+i),this._levels.forEach((function(t){t.urlId=i})),this.level=t}},u.onFragLoaded=function(t,e){var r=e.frag;if(void 0!==r&&r.type===k.b.MAIN){var i=this._levels[r.level];void 0!==i&&(i.fragmentError=0,i.loadError=0)}},u.onLevelLoaded=function(t,e){var r,i,n=e.level,a=e.details,s=this._levels[n];if(!s)return this.warn("Invalid level index "+n),void(null!==(i=e.deliveryDirectives)&&void 0!==i&&i.skip&&(a.deltaUpdateFailed=!0));n===this.currentLevelIndex?(0===s.fragmentError&&(s.loadError=0,this.retryCount=0),this.playlistLoaded(n,e,s.details)):null!==(r=e.deliveryDirectives)&&void 0!==r&&r.skip&&(a.deltaUpdateFailed=!0)},u.onAudioTrackSwitched=function(t,e){var r=this.hls.levels[this.currentLevelIndex];if(r&&r.audioGroupIds){for(var i=-1,n=this.hls.audioTracks[e.id].groupId,a=0;a<r.audioGroupIds.length;a++)if(r.audioGroupIds[a]===n){i=a;break}i!==r.urlId&&(r.urlId=i,this.startLoad())}},u.loadPlaylist=function(t){var e=this.currentLevelIndex,r=this._levels[e];if(this.canLoad&&r&&r.url.length>0){var i=r.urlId,n=r.url[i];if(t)try{n=t.addDirectives(n)}catch(t){this.warn("Could not construct new URL with HLS Delivery Directives: "+t)}this.log("Attempt loading level index "+e+(t?" at sn "+t.msn+" part "+t.part:"")+" with URL-id "+i+" "+n),this.clearTimer(),this.hls.trigger(a.a.LEVEL_LOADING,{url:n,level:e,id:i,deliveryDirectives:t||null})}},u.removeLevel=function(t,e){var r=function(t,r){return r!==e},i=this._levels.filter((function(i,n){return n!==t||i.url.length>1&&void 0!==e&&(i.url=i.url.filter(r),i.audioGroupIds&&(i.audioGroupIds=i.audioGroupIds.filter(r)),i.textGroupIds&&(i.textGroupIds=i.textGroupIds.filter(r)),i.urlId=0,!0)})).map((function(t,e){var r=t.details;return null!=r&&r.fragments&&r.fragments.forEach((function(t){t.level=e})),t}));this._levels=i,this.hls.trigger(a.a.LEVELS_UPDATED,{levels:i})},n=i,(o=[{key:"levels",get:function(){return 0===this._levels.length?null:this._levels}},{key:"level",get:function(){return this.currentLevelIndex},set:function(t){var e,r=this._levels;if(0!==r.length&&(this.currentLevelIndex!==t||null===(e=r[t])||void 0===e||!e.details)){if(t<0||t>=r.length){var i=t<0;if(this.hls.trigger(a.a.ERROR,{type:s.b.OTHER_ERROR,details:s.a.LEVEL_SWITCH_ERROR,level:t,fatal:i,reason:"invalid level idx"}),i)return;t=Math.min(t,r.length-1)}this.clearTimer();var n=this.currentLevelIndex,o=r[n],l=r[t];this.log("switching to level "+t+" from "+n),this.currentLevelIndex=t;var u=$({},l,{level:t,maxBitrate:l.maxBitrate,uri:l.uri,urlId:l.urlId});delete u._urlId,this.hls.trigger(a.a.LEVEL_SWITCHING,u);var h=l.details;if(!h||h.live){var d=this.switchParams(l.uri,null==o?void 0:o.details);this.loadPlaylist(d)}}}},{key:"manualLevel",get:function(){return this.manualLevelIndex},set:function(t){this.manualLevelIndex=t,void 0===this._startLevel&&(this._startLevel=t),-1!==t&&(this.level=t)}},{key:"firstLevel",get:function(){return this._firstLevel},set:function(t){this._firstLevel=t}},{key:"startLevel",get:function(){if(void 0===this._startLevel){var t=this.hls.config.startLevel;return void 0!==t?t:this._firstLevel}return this._startLevel},set:function(t){this._startLevel=t}},{key:"nextLoadLevel",get:function(){return-1!==this.manualLevelIndex?this.manualLevelIndex:this.hls.nextAutoLevel},set:function(t){this.level=t,-1===this.manualLevelIndex&&(this.hls.nextAutoLevel=t)}}])&&J(n.prototype,o),l&&J(n,l),i}(Q);!function(t){t.NOT_LOADED="NOT_LOADED",t.BACKTRACKED="BACKTRACKED",t.APPENDING="APPENDING",t.PARTIAL="PARTIAL",t.OK="OK"}(tt||(tt={}));var it=function(){function t(t){this.activeFragment=null,this.activeParts=null,this.fragments=Object.create(null),this.timeRanges=Object.create(null),this.bufferPadding=.2,this.hls=void 0,this.hls=t,this._registerListeners()}var e=t.prototype;return e._registerListeners=function(){var t=this.hls;t.on(a.a.BUFFER_APPENDED,this.onBufferAppended,this),t.on(a.a.FRAG_BUFFERED,this.onFragBuffered,this),t.on(a.a.FRAG_LOADED,this.onFragLoaded,this)},e._unregisterListeners=function(){var t=this.hls;t.off(a.a.BUFFER_APPENDED,this.onBufferAppended,this),t.off(a.a.FRAG_BUFFERED,this.onFragBuffered,this),t.off(a.a.FRAG_LOADED,this.onFragLoaded,this)},e.destroy=function(){this._unregisterListeners(),this.fragments=this.timeRanges=null},e.getAppendedFrag=function(t,e){if(e===k.b.MAIN){var r=this.activeFragment,i=this.activeParts;if(!r)return null;if(i)for(var n=i.length;n--;){var a=i[n],s=a?a.end:r.appendedPTS;if(a.start<=t&&void 0!==s&&t<=s)return n>9&&(this.activeParts=i.slice(n-9)),a}else if(r.start<=t&&void 0!==r.appendedPTS&&t<=r.appendedPTS)return r}return this.getBufferedFrag(t,e)},e.getBufferedFrag=function(t,e){for(var r=this.fragments,i=Object.keys(r),n=i.length;n--;){var a=r[i[n]];if((null==a?void 0:a.body.type)===e&&a.buffered){var s=a.body;if(s.start<=t&&t<=s.end)return s}}return null},e.detectEvictedFragments=function(t,e,r){var i=this;Object.keys(this.fragments).forEach((function(n){var a=i.fragments[n];if(a)if(a.buffered){var s=a.range[t];s&&s.time.some((function(t){var r=!i.isTimeBuffered(t.startPTS,t.endPTS,e);return r&&i.removeFragment(a.body),r}))}else a.body.type===r&&i.removeFragment(a.body)}))},e.detectPartialFragments=function(t){var e=this,r=this.timeRanges,i=t.frag,n=t.part;if(r&&"initSegment"!==i.sn){var a=at(i),s=this.fragments[a];s&&(Object.keys(r).forEach((function(t){var a=i.elementaryStreams[t];if(a){var o=r[t],l=null!==n||!0===a.partial;s.range[t]=e.getBufferedTimes(i,n,l,o)}})),s.backtrack=s.loaded=null,Object.keys(s.range).length?s.buffered=!0:this.removeFragment(s.body))}},e.fragBuffered=function(t){var e=at(t),r=this.fragments[e];r&&(r.backtrack=r.loaded=null,r.buffered=!0)},e.getBufferedTimes=function(t,e,r,i){for(var n={time:[],partial:r},a=e?e.start:t.start,s=e?e.end:t.end,o=t.minEndPTS||s,l=t.maxStartPTS||a,u=0;u<i.length;u++){var h=i.start(u)-this.bufferPadding,d=i.end(u)+this.bufferPadding;if(l>=h&&o<=d){n.time.push({startPTS:Math.max(a,i.start(u)),endPTS:Math.min(s,i.end(u))});break}if(a<d&&s>h)n.partial=!0,n.time.push({startPTS:Math.max(a,i.start(u)),endPTS:Math.min(s,i.end(u))});else if(s<=h)break}return n},e.getPartialFragment=function(t){var e,r,i,n=null,a=0,s=this.bufferPadding,o=this.fragments;return Object.keys(o).forEach((function(l){var u=o[l];u&&nt(u)&&(r=u.body.start-s,i=u.body.end+s,t>=r&&t<=i&&(e=Math.min(t-r,i-t),a<=e&&(n=u.body,a=e)))})),n},e.getState=function(t){var e=at(t),r=this.fragments[e];return r?r.buffered?nt(r)?tt.PARTIAL:tt.OK:r.backtrack?tt.BACKTRACKED:tt.APPENDING:tt.NOT_LOADED},e.backtrack=function(t,e){var r=at(t),i=this.fragments[r];if(!i||i.backtrack)return null;var n=i.backtrack=e||i.loaded;return i.loaded=null,n},e.getBacktrackData=function(t){var e=at(t),r=this.fragments[e];if(r){var i,n=r.backtrack;if(null!=n&&null!==(i=n.payload)&&void 0!==i&&i.byteLength)return n;this.removeFragment(t)}return null},e.isTimeBuffered=function(t,e,r){for(var i,n,a=0;a<r.length;a++){if(i=r.start(a)-this.bufferPadding,n=r.end(a)+this.bufferPadding,t>=i&&e<=n)return!0;if(e<=i)return!1}return!1},e.onFragLoaded=function(t,e){var r=e.frag,i=e.part;if("initSegment"!==r.sn&&!r.bitrateTest&&!i){var n=at(r);this.fragments[n]={body:r,loaded:e,backtrack:null,buffered:!1,range:Object.create(null)}}},e.onBufferAppended=function(t,e){var r=this,i=e.frag,n=e.part,a=e.timeRanges;if(i.type===k.b.MAIN)if(this.activeFragment=i,n){var s=this.activeParts;s||(this.activeParts=s=[]),s.push(n)}else this.activeParts=null;this.timeRanges=a,Object.keys(a).forEach((function(t){var e=a[t];if(r.detectEvictedFragments(t,e),!n)for(var s=0;s<e.length;s++)i.appendedPTS=Math.max(e.end(s),i.appendedPTS||0)}))},e.onFragBuffered=function(t,e){this.detectPartialFragments(e)},e.hasFragment=function(t){var e=at(t);return!!this.fragments[e]},e.removeFragmentsInRange=function(t,e,r){var i=this;Object.keys(this.fragments).forEach((function(n){var a=i.fragments[n];if(a&&a.buffered){var s=a.body;s.type===r&&s.start<e&&s.end>t&&i.removeFragment(s)}}))},e.removeFragment=function(t){var e=at(t);t.stats.loaded=0,t.clearElementaryStreamInfo(),delete this.fragments[e]},e.removeAllFragments=function(){this.fragments=Object.create(null),this.activeFragment=null,this.activeParts=null},t}();function nt(t){var e,r;return t.buffered&&((null===(e=t.range.video)||void 0===e?void 0:e.partial)||(null===(r=t.range.audio)||void 0===r?void 0:r.partial))}function at(t){return t.type+"_"+t.level+"_"+t.urlId+"_"+t.sn}var st=function(){function t(){this._boundTick=void 0,this._tickTimer=null,this._tickInterval=null,this._tickCallCount=0,this._boundTick=this.tick.bind(this)}var e=t.prototype;return e.destroy=function(){this.onHandlerDestroying(),this.onHandlerDestroyed()},e.onHandlerDestroying=function(){this.clearNextTick(),this.clearInterval()},e.onHandlerDestroyed=function(){},e.hasInterval=function(){return!!this._tickInterval},e.hasNextTick=function(){return!!this._tickTimer},e.setInterval=function(t){return!this._tickInterval&&(this._tickInterval=self.setInterval(this._boundTick,t),!0)},e.clearInterval=function(){return!!this._tickInterval&&(self.clearInterval(this._tickInterval),this._tickInterval=null,!0)},e.clearNextTick=function(){return!!this._tickTimer&&(self.clearTimeout(this._tickTimer),this._tickTimer=null,!0)},e.tick=function(){this._tickCallCount++,1===this._tickCallCount&&(this.doTick(),this._tickCallCount>1&&this.tickImmediate(),this._tickCallCount=0)},e.tickImmediate=function(){this.clearNextTick(),this._tickTimer=self.setTimeout(this._boundTick,0)},e.doTick=function(){},t}(),ot={length:0,start:function(){return 0},end:function(){return 0}},lt=function(){function t(){}return t.isBuffered=function(e,r){try{if(e)for(var i=t.getBuffered(e),n=0;n<i.length;n++)if(r>=i.start(n)&&r<=i.end(n))return!0}catch(t){}return!1},t.bufferInfo=function(e,r,i){try{if(e){var n,a=t.getBuffered(e),s=[];for(n=0;n<a.length;n++)s.push({start:a.start(n),end:a.end(n)});return this.bufferedInfo(s,r,i)}}catch(t){}return{len:0,start:r,end:r,nextStart:void 0}},t.bufferedInfo=function(t,e,r){e=Math.max(0,e),t.sort((function(t,e){var r=t.start-e.start;return r||e.end-t.end}));var i=[];if(r)for(var n=0;n<t.length;n++){var a=i.length;if(a){var s=i[a-1].end;t[n].start-s<r?t[n].end>s&&(i[a-1].end=t[n].end):i.push(t[n])}else i.push(t[n])}else i=t;for(var o,l=0,u=e,h=e,d=0;d<i.length;d++){var c=i[d].start,f=i[d].end;if(e+r>=c&&e<f)u=c,l=(h=f)-e;else if(e+r<c){o=c;break}}return{len:l,start:u||0,end:h||0,nextStart:o}},t.getBuffered=function(t){try{return t.buffered}catch(t){return o.b.log("failed to get media.buffered",t),ot}},t}(),ut=function(t,e,r,i,n,a){void 0===i&&(i=0),void 0===n&&(n=-1),void 0===a&&(a=!1),this.level=void 0,this.sn=void 0,this.part=void 0,this.id=void 0,this.size=void 0,this.partial=void 0,this.transmuxing={start:0,executeStart:0,executeEnd:0,end:0},this.buffering={audio:{start:0,executeStart:0,executeEnd:0,end:0},video:{start:0,executeStart:0,executeEnd:0,end:0},audiovideo:{start:0,executeStart:0,executeEnd:0,end:0}},this.level=t,this.sn=e,this.id=r,this.size=i,this.part=n,this.partial=a};function ht(t,e){if(t){var r=t.start+e;t.start=t.startPTS=r,t.endPTS=r+t.duration}}function dt(t,e){for(var r=e.fragments,i=0,n=r.length;i<n;i++)ht(r[i],t);e.fragmentHint&&ht(e.fragmentHint,t),e.alignedSliding=!0}function ct(t,e,r){e&&(!function(t,e,r){if(function(t,e,r){return!(!e.details||!(r.endCC>r.startCC||t&&t.cc<r.startCC))}(t,r,e)){var i=function(t,e){var r=t.fragments,i=e.fragments;if(i.length&&r.length){var n=function(t,e){for(var r=null,i=0,n=t.length;i<n;i++){var a=t[i];if(a&&a.cc===e){r=a;break}}return r}(r,i[0].cc);if(n&&(!n||n.startPTS))return n;o.b.log("No frag in previous level to align on")}else o.b.log("No fragments to align")}(r.details,e);i&&Object(n.a)(i.start)&&(o.b.log("Adjusting PTS using last level due to CC increase within current level "+e.url),dt(i.start,e))}}(t,r,e),!r.alignedSliding&&e.details&&function(t,e){if(!e.fragments.length||!t.hasProgramDateTime||!e.hasProgramDateTime)return;var r=e.fragments[0].programDateTime,i=t.fragments[0].programDateTime,a=(i-r)/1e3+e.fragments[0].start;a&&Object(n.a)(a)&&(o.b.log("Adjusting PTS using programDateTime delta "+(i-r)+"ms, sliding:"+a.toFixed(3)+" "+t.url+" "),dt(a,t))}(r,e.details),r.alignedSliding||!e.details||r.skippedSegments||X(e.details,r))}function ft(t,e){var r=t.programDateTime;if(r){var i=(r-e)/1e3;t.start=t.startPTS=i,t.endPTS=i+t.duration}}function gt(t,e){if(e.fragments.length&&t.hasProgramDateTime&&e.hasProgramDateTime){var r=e.fragments[0].programDateTime-1e3*e.fragments[0].start;t.fragments.forEach((function(t){ft(t,r)})),t.fragmentHint&&ft(t.fragmentHint,r),t.alignedSliding=!0}}var vt={search:function(t,e){for(var r=0,i=t.length-1,n=null,a=null;r<=i;){var s=e(a=t[n=(r+i)/2|0]);if(s>0)r=n+1;else{if(!(s<0))return a;i=n-1}}return null}};function pt(t,e,r,i){void 0===r&&(r=0),void 0===i&&(i=0);var n=null;if(t?n=e[t.sn-e[0].sn+1]||null:0===r&&0===e[0].start&&(n=e[0]),n&&0===mt(r,i,n))return n;var a=vt.search(e,mt.bind(null,r,i));return a||n}function mt(t,e,r){void 0===t&&(t=0),void 0===e&&(e=0);var i=Math.min(e,r.duration+(r.deltaPTS?r.deltaPTS:0));return r.start+r.duration-i<=t?1:r.start-i>t&&r.start?-1:0}function yt(t,e,r){var i=1e3*Math.min(e,r.duration+(r.deltaPTS?r.deltaPTS:0));return(r.endProgramDateTime||0)-i>t}function Tt(t){var e="function"==typeof Map?new Map:void 0;return(Tt=function(t){if(null===t||(r=t,-1===Function.toString.call(r).indexOf("[native code]")))return t;var r;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,i)}function i(){return bt(t,arguments,Lt(this).constructor)}return i.prototype=Object.create(t.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),St(i,t)})(t)}function bt(t,e,r){return(bt=Et()?Reflect.construct:function(t,e,r){var i=[null];i.push.apply(i,e);var n=new(Function.bind.apply(t,i));return r&&St(n,r.prototype),n}).apply(null,arguments)}function Et(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function St(t,e){return(St=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function Lt(t){return(Lt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var At=Math.pow(2,17),Rt=function(){function t(t){this.config=void 0,this.loader=null,this.partLoadTimeout=-1,this.config=t}var e=t.prototype;return e.destroy=function(){this.loader&&(this.loader.destroy(),this.loader=null)},e.abort=function(){this.loader&&this.loader.abort()},e.load=function(t,e){var r=this,i=t.url;if(!i)return Promise.reject(new kt({type:s.b.NETWORK_ERROR,details:s.a.FRAG_LOAD_ERROR,fatal:!1,frag:t,networkDetails:null},"Fragment does not have a "+(i?"part list":"url")));this.abort();var n=this.config,a=n.fLoader,o=n.loader;return new Promise((function(i,l){r.loader&&r.loader.destroy();var u=r.loader=t.loader=a?new a(n):new o(n),h=Dt(t),d={timeout:n.fragLoadingTimeOut,maxRetry:0,retryDelay:0,maxRetryDelay:n.fragLoadingMaxRetryTimeout,highWaterMark:At};t.stats=u.stats,u.load(h,d,{onSuccess:function(e,n,a,s){r.resetLoader(t,u),i({frag:t,part:null,payload:e.data,networkDetails:s})},onError:function(e,i,n){r.resetLoader(t,u),l(new kt({type:s.b.NETWORK_ERROR,details:s.a.FRAG_LOAD_ERROR,fatal:!1,frag:t,response:e,networkDetails:n}))},onAbort:function(e,i,n){r.resetLoader(t,u),l(new kt({type:s.b.NETWORK_ERROR,details:s.a.INTERNAL_ABORTED,fatal:!1,frag:t,networkDetails:n}))},onTimeout:function(e,i,n){r.resetLoader(t,u),l(new kt({type:s.b.NETWORK_ERROR,details:s.a.FRAG_LOAD_TIMEOUT,fatal:!1,frag:t,networkDetails:n}))},onProgress:function(r,i,n,a){e&&e({frag:t,part:null,payload:n,networkDetails:a})}})}))},e.loadPart=function(t,e,r){var i=this;this.abort();var n=this.config,a=n.fLoader,o=n.loader;return new Promise((function(l,u){i.loader&&i.loader.destroy();var h=i.loader=t.loader=a?new a(n):new o(n),d=Dt(t,e),c={timeout:n.fragLoadingTimeOut,maxRetry:0,retryDelay:0,maxRetryDelay:n.fragLoadingMaxRetryTimeout,highWaterMark:At};e.stats=h.stats,h.load(d,c,{onSuccess:function(n,a,s,o){i.resetLoader(t,h),i.updateStatsFromPart(t,e);var u={frag:t,part:e,payload:n.data,networkDetails:o};r(u),l(u)},onError:function(r,n,a){i.resetLoader(t,h),u(new kt({type:s.b.NETWORK_ERROR,details:s.a.FRAG_LOAD_ERROR,fatal:!1,frag:t,part:e,response:r,networkDetails:a}))},onAbort:function(r,n,a){t.stats.aborted=e.stats.aborted,i.resetLoader(t,h),u(new kt({type:s.b.NETWORK_ERROR,details:s.a.INTERNAL_ABORTED,fatal:!1,frag:t,part:e,networkDetails:a}))},onTimeout:function(r,n,a){i.resetLoader(t,h),u(new kt({type:s.b.NETWORK_ERROR,details:s.a.FRAG_LOAD_TIMEOUT,fatal:!1,frag:t,part:e,networkDetails:a}))}})}))},e.updateStatsFromPart=function(t,e){var r=t.stats,i=e.stats,n=i.total;if(r.loaded+=i.loaded,n){var a=Math.round(t.duration/e.duration),s=Math.min(Math.round(r.loaded/n),a),o=(a-s)*Math.round(r.loaded/s);r.total=r.loaded+o}else r.total=Math.max(r.loaded,r.total);var l=r.loading,u=i.loading;l.start?l.first+=u.first-u.start:(l.start=u.start,l.first=u.first),l.end=u.end},e.resetLoader=function(t,e){t.loader=null,this.loader===e&&(self.clearTimeout(this.partLoadTimeout),this.loader=null),e.destroy()},t}();function Dt(t,e){void 0===e&&(e=null);var r=e||t,i={frag:t,part:e,responseType:"arraybuffer",url:r.url,headers:{},rangeStart:0,rangeEnd:0},a=r.byteRangeStartOffset,s=r.byteRangeEndOffset;return Object(n.a)(a)&&Object(n.a)(s)&&(i.rangeStart=a,i.rangeEnd=s),i}var kt=function(t){var e,r;function i(e){for(var r,i=arguments.length,n=new Array(i>1?i-1:0),a=1;a<i;a++)n[a-1]=arguments[a];return(r=t.call.apply(t,[this].concat(n))||this).data=void 0,r.data=e,r}return r=t,(e=i).prototype=Object.create(r.prototype),e.prototype.constructor=e,St(e,r),i}(Tt(Error)),_t=r(15),It={toString:function(t){for(var e="",r=t.length,i=0;i<r;i++)e+="["+t.start(i).toFixed(3)+","+t.end(i).toFixed(3)+"]";return e}};function Ct(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function wt(t,e){return(wt=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var Ot="STOPPED",xt="IDLE",Pt="KEY_LOADING",Mt="FRAG_LOADING",Ft="FRAG_LOADING_WAITING_RETRY",Nt="WAITING_TRACK",Ut="PARSING",Bt="PARSED",Gt="BACKTRACKING",Kt="ENDED",jt="ERROR",Ht="WAITING_INIT_PTS",Vt="WAITING_LEVEL",Wt=function(t){var e,r;function i(e,r,i){var n;return(n=t.call(this)||this).hls=void 0,n.fragPrevious=null,n.fragCurrent=null,n.fragmentTracker=void 0,n.transmuxer=null,n._state=Ot,n.media=void 0,n.mediaBuffer=void 0,n.config=void 0,n.bitrateTest=!1,n.lastCurrentTime=0,n.nextLoadPosition=0,n.startPosition=0,n.loadedmetadata=!1,n.fragLoadError=0,n.retryDate=0,n.levels=null,n.fragmentLoader=void 0,n.levelLastLoaded=null,n.startFragRequested=!1,n.decrypter=void 0,n.initPTS=[],n.onvseeking=null,n.onvended=null,n.logPrefix="",n.log=void 0,n.warn=void 0,n.logPrefix=i,n.log=o.b.log.bind(o.b,i+":"),n.warn=o.b.warn.bind(o.b,i+":"),n.hls=e,n.fragmentLoader=new Rt(e.config),n.fragmentTracker=r,n.config=e.config,n.decrypter=new _t.a(e,e.config),e.on(a.a.KEY_LOADED,n.onKeyLoaded,function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(n)),n}r=t,(e=i).prototype=Object.create(r.prototype),e.prototype.constructor=e,wt(e,r);var u,h,d,c=i.prototype;return c.doTick=function(){this.onTickEnd()},c.onTickEnd=function(){},c.startLoad=function(t){},c.stopLoad=function(){this.fragmentLoader.abort();var t=this.fragCurrent;t&&this.fragmentTracker.removeFragment(t),this.resetTransmuxer(),this.fragCurrent=null,this.fragPrevious=null,this.clearInterval(),this.clearNextTick(),this.state=Ot},c._streamEnded=function(t,e){var r=this.fragCurrent,i=this.fragmentTracker;if(!e.live&&r&&r.sn===e.endSN&&!t.nextStart){var n=i.getState(r);return n===tt.PARTIAL||n===tt.OK}return!1},c.onMediaAttached=function(t,e){var r=this.media=this.mediaBuffer=e.media;this.onvseeking=this.onMediaSeeking.bind(this),this.onvended=this.onMediaEnded.bind(this),r.addEventListener("seeking",this.onvseeking),r.addEventListener("ended",this.onvended);var i=this.config;this.levels&&i.autoStartLoad&&this.state===Ot&&this.startLoad(i.startPosition)},c.onMediaDetaching=function(){var t=this.media;null!=t&&t.ended&&(this.log("MSE detaching and video ended, reset startPosition"),this.startPosition=this.lastCurrentTime=0),t&&(t.removeEventListener("seeking",this.onvseeking),t.removeEventListener("ended",this.onvended),this.onvseeking=this.onvended=null),this.media=this.mediaBuffer=null,this.loadedmetadata=!1,this.fragmentTracker.removeAllFragments(),this.stopLoad()},c.onMediaSeeking=function(){var t=this.config,e=this.fragCurrent,r=this.media,i=this.mediaBuffer,a=this.state,s=r?r.currentTime:0,o=lt.bufferInfo(i||r,s,t.maxBufferHole);if(this.log("media seeking to "+(Object(n.a)(s)?s.toFixed(3):s)+", state: "+a),a===Kt)this.resetLoadingState();else if(e&&!o.len){var l=t.maxFragLookUpTolerance,u=e.start-l,h=s>e.start+e.duration+l;(s<u||h)&&(h&&e.loader&&(this.log("seeking outside of buffer while fragment load in progress, cancel fragment load"),e.loader.abort()),this.resetLoadingState())}r&&(this.lastCurrentTime=s),this.loadedmetadata||o.len||(this.nextLoadPosition=this.startPosition=s),this.tickImmediate()},c.onMediaEnded=function(){this.startPosition=this.lastCurrentTime=0},c.onKeyLoaded=function(t,e){if(this.state===Pt&&e.frag===this.fragCurrent&&this.levels){this.state=xt;var r=this.levels[e.frag.level].details;r&&this.loadFragment(e.frag,r,e.frag.start)}},c.onHandlerDestroying=function(){this.stopLoad(),t.prototype.onHandlerDestroying.call(this)},c.onHandlerDestroyed=function(){this.state=Ot,this.hls.off(a.a.KEY_LOADED,this.onKeyLoaded,this),this.fragmentLoader&&this.fragmentLoader.destroy(),this.decrypter&&this.decrypter.destroy(),this.hls=this.log=this.warn=this.decrypter=this.fragmentLoader=this.fragmentTracker=null,t.prototype.onHandlerDestroyed.call(this)},c.loadKey=function(t,e){this.log("Loading key for "+t.sn+" of ["+e.startSN+"-"+e.endSN+"], "+("[stream-controller]"===this.logPrefix?"level":"track")+" "+t.level),this.state=Pt,this.fragCurrent=t,this.hls.trigger(a.a.KEY_LOADING,{frag:t})},c.loadFragment=function(t,e,r){this._loadFragForPlayback(t,e,r)},c._loadFragForPlayback=function(t,e,r){var i=this;this._doFragLoad(t,e,r,(function(e){if(i.fragContextChanged(t))return i.warn("Fragment "+t.sn+(e.part?" p: "+e.part.index:"")+" of level "+t.level+" was dropped during download."),void i.fragmentTracker.removeFragment(t);t.stats.chunkCount++,i._handleFragmentLoadProgress(e)})).then((function(e){if(e){i.fragLoadError=0;var r=i.state;if(!i.fragContextChanged(t))return"payload"in e&&(i.log("Loaded fragment "+t.sn+" of level "+t.level),i.hls.trigger(a.a.FRAG_LOADED,e),i.state===Gt)?(i.fragmentTracker.backtrack(t,e),void i.resetFragmentLoading(t)):void i._handleFragmentLoadComplete(e);(r===Mt||r===Gt||!i.fragCurrent&&r===Ut)&&(i.fragmentTracker.removeFragment(t),i.state=xt)}})).catch((function(e){i.warn(e),i.resetFragmentLoading(t)}))},c.flushMainBuffer=function(t,e,r){if(void 0===r&&(r=null),t-e){var i={startOffset:t,endOffset:e,type:r};this.fragLoadError=0,this.hls.trigger(a.a.BUFFER_FLUSHING,i)}},c._loadInitSegment=function(t){var e=this;this._doFragLoad(t).then((function(r){if(!r||e.fragContextChanged(t)||!e.levels)throw new Error("init load aborted");return r})).then((function(r){var i=e.hls,n=r.payload,s=t.decryptdata;if(n&&n.byteLength>0&&s&&s.key&&s.iv&&"AES-128"===s.method){var o=self.performance.now();return e.decrypter.webCryptoDecrypt(new Uint8Array(n),s.key.buffer,s.iv.buffer).then((function(e){var n=self.performance.now();return i.trigger(a.a.FRAG_DECRYPTED,{frag:t,payload:e,stats:{tstart:o,tdecrypt:n}}),r.payload=e,r}))}return r})).then((function(r){var i=e.fragCurrent,n=e.hls,s=e.levels;if(!s)throw new Error("init load aborted, missing levels");s[t.level].details;var o=t.stats;e.state=xt,e.fragLoadError=0,t.data=new Uint8Array(r.payload),o.parsing.start=o.buffering.start=self.performance.now(),o.parsing.end=o.buffering.end=self.performance.now(),r.frag===i&&n.trigger(a.a.FRAG_BUFFERED,{stats:o,frag:i,part:null,id:t.type}),e.tick()})).catch((function(r){e.warn(r),e.resetFragmentLoading(t)}))},c.fragContextChanged=function(t){var e=this.fragCurrent;return!t||!e||t.level!==e.level||t.sn!==e.sn||t.urlId!==e.urlId},c.fragBufferedComplete=function(t,e){var r=this.mediaBuffer?this.mediaBuffer:this.media;this.log("Buffered "+t.type+" sn: "+t.sn+(e?" part: "+e.index:"")+" of "+("[stream-controller]"===this.logPrefix?"level":"track")+" "+t.level+" "+It.toString(lt.getBuffered(r))),this.state=xt,this.tick()},c._handleFragmentLoadComplete=function(t){var e=this.transmuxer;if(e){var r=t.frag,i=t.part,n=t.partsLoaded,a=!n||0===n.length||n.some((function(t){return!t})),s=new ut(r.level,r.sn,r.stats.chunkCount+1,0,i?i.index:-1,!a);e.flush(s)}},c._handleFragmentLoadProgress=function(t){},c._doFragLoad=function(t,e,r,i){var s=this;if(void 0===r&&(r=null),!this.levels)throw new Error("frag load aborted, missing levels");if(r=Math.max(t.start,r||0),this.config.lowLatencyMode&&e){var o=e.partList;if(o&&i){r>t.end&&e.fragmentHint&&(t=e.fragmentHint);var l=this.getNextPart(o,t,r);if(l>-1){var u=o[l];return this.log("Loading part sn: "+t.sn+" p: "+u.index+" cc: "+t.cc+" of playlist ["+e.startSN+"-"+e.endSN+"] parts [0-"+l+"-"+(o.length-1)+"] "+("[stream-controller]"===this.logPrefix?"level":"track")+": "+t.level+", target: "+parseFloat(r.toFixed(3))),this.nextLoadPosition=u.start+u.duration,this.state=Mt,this.hls.trigger(a.a.FRAG_LOADING,{frag:t,part:o[l],targetBufferTime:r}),this.doFragPartsLoad(t,o,l,i).catch((function(t){return s.handleFragLoadError(t)}))}if(!t.url||this.loadedEndOfParts(o,r))return Promise.resolve(null)}}return this.log("Loading fragment "+t.sn+" cc: "+t.cc+" "+(e?"of ["+e.startSN+"-"+e.endSN+"] ":"")+("[stream-controller]"===this.logPrefix?"level":"track")+": "+t.level+", target: "+parseFloat(r.toFixed(3))),Object(n.a)(t.sn)&&!this.bitrateTest&&(this.nextLoadPosition=t.start+t.duration),this.state=Mt,this.hls.trigger(a.a.FRAG_LOADING,{frag:t,targetBufferTime:r}),this.fragmentLoader.load(t,i).catch((function(t){return s.handleFragLoadError(t)}))},c.doFragPartsLoad=function(t,e,r,i){var n=this;return new Promise((function(s,o){var l=[];!function r(u){var h=e[u];n.fragmentLoader.loadPart(t,h,i).then((function(i){l[h.index]=i;var o=i.part;n.hls.trigger(a.a.FRAG_LOADED,i);var d=e[u+1];if(!d||d.fragment!==t)return s({frag:t,part:o,partsLoaded:l});r(u+1)})).catch(o)}(r)}))},c.handleFragLoadError=function(t){var e=t.data;return e&&e.details===s.a.INTERNAL_ABORTED?this.handleFragLoadAborted(e.frag,e.part):this.hls.trigger(a.a.ERROR,e),null},c._handleTransmuxerFlush=function(t){var e=this.getCurrentContext(t);if(e&&this.state===Ut){var r=e.frag,i=e.part,n=e.level,a=self.performance.now();r.stats.parsing.end=a,i&&(i.stats.parsing.end=a),this.updateLevelTiming(r,i,n,t.partial)}else this.fragCurrent||(this.state=xt)},c.getCurrentContext=function(t){var e=this.levels,r=t.level,i=t.sn,n=t.part;if(!e||!e[r])return this.warn("Levels object was unset while buffering fragment "+i+" of level "+r+". The current chunk will not be buffered."),null;var a=e[r],s=n>-1?function(t,e,r){if(!t||!t.details)return null;var i=t.details.partList;if(i)for(var n=i.length;n--;){var a=i[n];if(a.index===r&&a.fragment.sn===e)return a}return null}(a,i,n):null,o=s?s.fragment:function(t,e,r){if(!t||!t.details)return null;var i=t.details,n=i.fragments[e-i.startSN];return n||((n=i.fragmentHint)&&n.sn===e?n:e<i.startSN&&r&&r.sn===e?r:null)}(a,i,this.fragCurrent);return o?{frag:o,part:s,level:a}:null},c.bufferFragmentData=function(t,e,r,i){if(t&&this.state===Ut){var n=t.data1,s=t.data2,o=n;if(n&&s&&(o=Object(l.a)(n,s)),o&&o.length){var u={type:t.type,frag:e,part:r,chunkMeta:i,parent:e.type,data:o};this.hls.trigger(a.a.BUFFER_APPENDING,u),t.dropped&&t.independent&&!r&&this.flushBufferGap(e)}}},c.flushBufferGap=function(t){var e=this.media;if(e)if(lt.isBuffered(e,e.currentTime)){var r=e.currentTime,i=lt.bufferInfo(e,r,0),n=t.duration,a=Math.min(2*this.config.maxFragLookUpTolerance,.25*n),s=Math.max(Math.min(t.start-a,i.end-a),r+a);t.start-s>a&&this.flushMainBuffer(s,t.start)}else this.flushMainBuffer(0,t.start)},c.getFwdBufferInfo=function(t,e){var r=this.config,i=this.getLoadPosition();if(!Object(n.a)(i))return null;var a=lt.bufferInfo(t,i,r.maxBufferHole);if(0===a.len&&void 0!==a.nextStart){var s=this.fragmentTracker.getBufferedFrag(i,e);if(s&&a.nextStart<s.end)return lt.bufferInfo(t,i,Math.max(a.nextStart,r.maxBufferHole))}return a},c.getMaxBufferLength=function(t){var e,r=this.config;return e=t?Math.max(8*r.maxBufferSize/t,r.maxBufferLength):r.maxBufferLength,Math.min(e,r.maxMaxBufferLength)},c.reduceMaxBufferLength=function(t){var e=this.config,r=t||e.maxBufferLength;return e.maxMaxBufferLength>=r&&(e.maxMaxBufferLength/=2,this.warn("Reduce max buffer length to "+e.maxMaxBufferLength+"s"),!0)},c.getNextFragment=function(t,e){var r,i,n=e.fragments,a=n.length;if(!a)return null;var s,o=this.config,l=n[0].start;if(e.live){var u=o.initialLiveManifestSize;if(a<u)return this.warn("Not enough fragments to start playback (have: "+a+", need: "+u+")"),null;e.PTSKnown||this.startFragRequested||-1!==this.startPosition||(s=this.getInitialLiveFragment(e,n),this.startPosition=s?this.hls.liveSyncPosition||s.start:t)}else t<=l&&(s=n[0]);if(!s){var h=o.lowLatencyMode?e.partEnd:e.fragmentEnd;s=this.getFragmentAtPosition(t,h,e)}return null===(r=s)||void 0===r||!r.initSegment||null!==(i=s)&&void 0!==i&&i.initSegment.data||this.bitrateTest||(s=s.initSegment),s},c.getNextPart=function(t,e,r){for(var i=-1,n=!1,a=!0,s=0,o=t.length;s<o;s++){var l=t[s];if(a=a&&!l.independent,i>-1&&r<l.start)break;var u=l.loaded;!u&&(n||l.independent||a)&&l.fragment===e&&(i=s),n=u}return i},c.loadedEndOfParts=function(t,e){var r=t[t.length-1];return r&&e>r.start&&r.loaded},c.getInitialLiveFragment=function(t,e){var r=this.fragPrevious,i=null;if(r){if(t.hasProgramDateTime&&(this.log("Live playlist, switching playlist, load frag with same PDT: "+r.programDateTime),i=function(t,e,r){if(null===e||!Array.isArray(t)||!t.length||!Object(n.a)(e))return null;if(e<(t[0].programDateTime||0))return null;if(e>=(t[t.length-1].endProgramDateTime||0))return null;r=r||0;for(var i=0;i<t.length;++i){var a=t[i];if(yt(e,r,a))return a}return null}(e,r.endProgramDateTime,this.config.maxFragLookUpTolerance)),!i){var a=r.sn+1;if(a>=t.startSN&&a<=t.endSN){var s=e[a-t.startSN];r.cc===s.cc&&(i=s,this.log("Live playlist, switching playlist, load frag with next SN: "+i.sn))}i||(i=function(t,e){return vt.search(t,(function(t){return t.cc<e?1:t.cc>e?-1:0}))}(e,r.cc))&&this.log("Live playlist, switching playlist, load frag with same CC: "+i.sn)}}else{var o=this.hls.liveSyncPosition;null!==o&&(i=this.getFragmentAtPosition(o,this.bitrateTest?t.fragmentEnd:t.edge,t))}return i},c.getFragmentAtPosition=function(t,e,r){var i,n=this.config,a=this.fragPrevious,s=r.fragments,o=r.endSN,l=r.fragmentHint,u=n.maxFragLookUpTolerance,h=!!(n.lowLatencyMode&&r.partList&&l);(h&&l&&!this.bitrateTest&&(s=s.concat(l),o=l.sn),t<e)?i=pt(a,s,t,t>e-u?0:u):i=s[s.length-1];if(i){var d=i.sn-r.startSN,c=a&&i.level===a.level,f=s[d+1];if(this.fragmentTracker.getState(i)===tt.BACKTRACKED){i=null;for(var g=d;s[g]&&this.fragmentTracker.getState(s[g])===tt.BACKTRACKED;)i=a?s[g--]:s[--g];i||(i=f)}else a&&i.sn===a.sn&&!h&&c&&(i.sn<o&&this.fragmentTracker.getState(f)!==tt.OK?(this.log("SN "+i.sn+" just loaded, load next one: "+f.sn),i=f):i=null)}return i},c.synchronizeToLiveEdge=function(t){var e=this.config,r=this.media;if(r){var i=this.hls.liveSyncPosition,n=r.currentTime,a=t.fragments[0].start,s=t.edge,o=n>=a-e.maxFragLookUpTolerance&&n<=s;if(null!==i&&r.duration>i&&(n<i||!o)){var l=void 0!==e.liveMaxLatencyDuration?e.liveMaxLatencyDuration:e.liveMaxLatencyDurationCount*t.targetduration;(!o&&r.readyState<4||n<s-l)&&(this.loadedmetadata||(this.nextLoadPosition=i),r.readyState&&(this.warn("Playback: "+n.toFixed(3)+" is located too far from the end of live sliding playlist: "+s+", reset currentTime to : "+i.toFixed(3)),r.currentTime=i))}}},c.alignPlaylists=function(t,e){var r=this.levels,i=this.levelLastLoaded,a=this.fragPrevious,s=null!==i?r[i]:null,o=t.fragments.length;if(!o)return this.warn("No fragments in live playlist"),0;var l=t.fragments[0].start,u=!e,h=t.alignedSliding&&Object(n.a)(l);if(u||!h&&!l){ct(a,s,t);var d=t.fragments[0].start;return this.log("Live playlist sliding: "+d.toFixed(2)+" start-sn: "+(e?e.startSN:"na")+"->"+t.startSN+" prev-sn: "+(a?a.sn:"na")+" fragments: "+o),d}return l},c.waitForCdnTuneIn=function(t){return t.live&&t.canBlockReload&&t.tuneInGoal>Math.max(t.partHoldBack,3*t.partTarget)},c.setStartPosition=function(t,e){var r=this.startPosition;if(r<e&&(r=-1),-1===r||-1===this.lastCurrentTime){var i=t.startTimeOffset;Object(n.a)(i)?(r=e+i,i<0&&(r+=t.totalduration),r=Math.min(Math.max(e,r),e+t.totalduration),this.log("Start time offset "+i+" found in playlist, adjust startPosition to "+r),this.startPosition=r):t.live?r=this.hls.liveSyncPosition||e:this.startPosition=r=0,this.lastCurrentTime=r}this.nextLoadPosition=r},c.getLoadPosition=function(){var t=this.media,e=0;return this.loadedmetadata&&t?e=t.currentTime:this.nextLoadPosition&&(e=this.nextLoadPosition),e},c.handleFragLoadAborted=function(t,e){this.transmuxer&&"initSegment"!==t.sn&&t.stats.aborted&&(this.warn("Fragment "+t.sn+(e?" part"+e.index:"")+" of level "+t.level+" was aborted"),this.resetFragmentLoading(t))},c.resetFragmentLoading=function(t){this.fragCurrent&&this.fragContextChanged(t)||(this.state=xt)},c.onFragmentOrKeyLoadError=function(t,e){if(!e.fatal){var r=e.frag;if(r&&r.type===t){this.fragCurrent;var i=this.config;if(this.fragLoadError+1<=i.fragLoadingMaxRetry){if(this.resetLiveStartWhenNotLoaded(r.level))return;var n=Math.min(Math.pow(2,this.fragLoadError)*i.fragLoadingRetryDelay,i.fragLoadingMaxRetryTimeout);this.warn("Fragment "+r.sn+" of "+t+" "+r.level+" failed to load, retrying in "+n+"ms"),this.retryDate=self.performance.now()+n,this.fragLoadError++,this.state=Ft}else e.levelRetry?(t===k.b.AUDIO&&(this.fragCurrent=null),this.fragLoadError=0,this.state=xt):(o.b.error(e.details+" reaches max retry, redispatch as fatal ..."),e.fatal=!0,this.hls.stopLoad(),this.state=jt)}}},c.afterBufferFlushed=function(t,e,r){if(t){var i=lt.getBuffered(t);this.fragmentTracker.detectEvictedFragments(e,i,r),this.state===Kt&&this.resetLoadingState()}},c.resetLoadingState=function(){this.fragCurrent=null,this.fragPrevious=null,this.state=xt},c.resetLiveStartWhenNotLoaded=function(t){if(!this.loadedmetadata){this.startFragRequested=!1;var e=this.levels?this.levels[t].details:null;if(null!=e&&e.live)return this.startPosition=-1,this.setStartPosition(e,0),this.resetLoadingState(),!0;this.nextLoadPosition=this.startPosition}return!1},c.updateLevelTiming=function(t,e,r,i){var n=this,s=r.details;Object.keys(t.elementaryStreams).reduce((function(e,o){var l=t.elementaryStreams[o];if(l){var u=l.endPTS-l.startPTS;if(u<=0)return n.warn("Could not parse fragment "+t.sn+" "+o+" duration reliably ("+u+") resetting transmuxer to fallback to playlist timing"),n.resetTransmuxer(),e||!1;var h=i?0:Y(s,t,l.startPTS,l.endPTS,l.startDTS,l.endDTS);return n.hls.trigger(a.a.LEVEL_PTS_UPDATED,{details:s,level:r,drift:h,type:o,frag:t,start:l.startPTS,end:l.endPTS}),!0}return e}),!1)?(this.state=Bt,this.hls.trigger(a.a.FRAG_PARSED,{frag:t,part:e})):this.resetLoadingState()},c.resetTransmuxer=function(){this.transmuxer&&(this.transmuxer.destroy(),this.transmuxer=null)},u=i,(h=[{key:"state",get:function(){return this._state},set:function(t){var e=this._state;e!==t&&(this._state=t,this.log(e+"->"+t))}}])&&Ct(u.prototype,h),d&&Ct(u,d),i}(st);function Yt(){return self.MediaSource||self.WebKitMediaSource}function qt(){return self.SourceBuffer||self.WebKitSourceBuffer}var Xt=r(18),zt=r(10),Qt=r(14),$t=Yt()||{isTypeSupported:function(){return!1}},Jt=function(){function t(t,e,r,i){var n=this;this.hls=void 0,this.id=void 0,this.observer=void 0,this.frag=null,this.part=null,this.worker=void 0,this.onwmsg=void 0,this.transmuxer=null,this.onTransmuxComplete=void 0,this.onFlush=void 0,this.hls=t,this.id=e,this.onTransmuxComplete=r,this.onFlush=i;var l=t.config,u=function(e,r){(r=r||{}).frag=n.frag,r.id=n.id,t.trigger(e,r)};this.observer=new Qt.EventEmitter,this.observer.on(a.a.FRAG_DECRYPTED,u),this.observer.on(a.a.ERROR,u);var h={mp4:$t.isTypeSupported("video/mp4"),mpeg:$t.isTypeSupported("audio/mpeg"),mp3:$t.isTypeSupported('audio/mp4; codecs="mp3"')},d=navigator.vendor;if(l.enableWorker&&"undefined"!=typeof Worker){var c;o.b.log("demuxing in webworker");try{c=this.worker=Xt(19),this.onwmsg=this.onWorkerMessage.bind(this),c.addEventListener("message",this.onwmsg),c.onerror=function(e){t.trigger(a.a.ERROR,{type:s.b.OTHER_ERROR,details:s.a.INTERNAL_EXCEPTION,fatal:!0,event:"demuxerWorker",error:new Error(e.message+"  ("+e.filename+":"+e.lineno+")")})},c.postMessage({cmd:"init",typeSupported:h,vendor:d,id:e,config:JSON.stringify(l)})}catch(t){o.b.warn("Error in worker:",t),o.b.error("Error while initializing DemuxerWorker, fallback to inline"),c&&self.URL.revokeObjectURL(c.objectURL),this.transmuxer=new zt.c(this.observer,h,l,d,e),this.worker=null}}else this.transmuxer=new zt.c(this.observer,h,l,d,e)}var e=t.prototype;return e.destroy=function(){var t=this.worker;if(t)t.removeEventListener("message",this.onwmsg),t.terminate(),this.worker=null;else{var e=this.transmuxer;e&&(e.destroy(),this.transmuxer=null)}var r=this.observer;r&&r.removeAllListeners(),this.observer=null},e.push=function(t,e,r,i,n,a,s,l,u,h){var d,c,f=this;u.transmuxing.start=self.performance.now();var g=this.transmuxer,v=this.worker,p=a?a.start:n.start,m=n.decryptdata,y=this.frag,T=!(y&&n.cc===y.cc),b=!(y&&u.level===y.level),E=y?u.sn-y.sn:-1,S=this.part?u.part-this.part.index:1,L=!b&&(1===E||0===E&&1===S),A=self.performance.now();(b||E||0===n.stats.parsing.start)&&(n.stats.parsing.start=A),!a||!S&&L||(a.stats.parsing.start=A);var R=!(y&&(null===(d=n.initSegment)||void 0===d?void 0:d.url)===(null===(c=y.initSegment)||void 0===c?void 0:c.url)),D=new zt.b(T,L,l,b,p,R);if(!L||T||R){o.b.log("[transmuxer-interface, "+n.type+"]: Starting new transmux session for sn: "+u.sn+" p: "+u.part+" level: "+u.level+" id: "+u.id+"\n        discontinuity: "+T+"\n        trackSwitch: "+b+"\n        contiguous: "+L+"\n        accurateTimeOffset: "+l+"\n        timeOffset: "+p+"\n        initSegmentChange: "+R);var k=new zt.a(r,i,e,s,h);this.configureTransmuxer(k)}if(this.frag=n,this.part=a,v)v.postMessage({cmd:"demux",data:t,decryptdata:m,chunkMeta:u,state:D},t instanceof ArrayBuffer?[t]:[]);else if(g){var _=g.push(t,m,u,D);Object(zt.d)(_)?_.then((function(t){f.handleTransmuxComplete(t)})):this.handleTransmuxComplete(_)}},e.flush=function(t){var e=this;t.transmuxing.start=self.performance.now();var r=this.transmuxer,i=this.worker;if(i)i.postMessage({cmd:"flush",chunkMeta:t});else if(r){var n=r.flush(t);Object(zt.d)(n)?n.then((function(r){e.handleFlushResult(r,t)})):this.handleFlushResult(n,t)}},e.handleFlushResult=function(t,e){var r=this;t.forEach((function(t){r.handleTransmuxComplete(t)})),this.onFlush(e)},e.onWorkerMessage=function(t){var e=t.data,r=this.hls;switch(e.event){case"init":self.URL.revokeObjectURL(this.worker.objectURL);break;case"transmuxComplete":this.handleTransmuxComplete(e.data);break;case"flush":this.onFlush(e.data);break;default:e.data=e.data||{},e.data.frag=this.frag,e.data.id=this.id,r.trigger(e.event,e.data)}},e.configureTransmuxer=function(t){var e=this.worker,r=this.transmuxer;e?e.postMessage({cmd:"configure",config:t}):r&&r.configure(t)},e.handleTransmuxComplete=function(t){t.chunkMeta.transmuxing.end=self.performance.now(),this.onTransmuxComplete(t)},t}(),Zt=function(){function t(t,e,r,i){this.config=void 0,this.media=void 0,this.fragmentTracker=void 0,this.hls=void 0,this.nudgeRetry=0,this.stallReported=!1,this.stalled=null,this.moved=!1,this.seeking=!1,this.config=t,this.media=e,this.fragmentTracker=r,this.hls=i}var e=t.prototype;return e.destroy=function(){this.hls=this.fragmentTracker=this.media=null},e.poll=function(t){var e=this.config,r=this.media,i=this.stalled,n=r.currentTime,a=r.seeking,s=this.seeking&&!a,l=!this.seeking&&a;if(this.seeking=a,n===t){if((l||s)&&(this.stalled=null),!r.paused&&!r.ended&&0!==r.playbackRate&&lt.getBuffered(r).length){var u=lt.bufferInfo(r,n,0),h=u.len>0,d=u.nextStart||0;if(h||d){if(a){var c=u.len>2,f=!d||d-n>2&&!this.fragmentTracker.getPartialFragment(n);if(c||f)return;this.moved=!1}if(!this.moved&&null!==this.stalled){var g,v=Math.max(d,u.start||0)-n,p=this.hls.levels?this.hls.levels[this.hls.currentLevel]:null,m=(null==p||null===(g=p.details)||void 0===g?void 0:g.live)?2*p.details.targetduration:2;if(v>0&&v<=m)return void this._trySkipBufferHole(null)}var y=self.performance.now();if(null!==i){var T=y-i;!a&&T>=250&&this._reportStall(u.len);var b=lt.bufferInfo(r,n,e.maxBufferHole);this._tryFixBufferStall(b,T)}else this.stalled=y}}}else if(this.moved=!0,null!==i){if(this.stallReported){var E=self.performance.now()-i;o.b.warn("playback not stuck anymore @"+n+", after "+Math.round(E)+"ms"),this.stallReported=!1}this.stalled=null,this.nudgeRetry=0}},e._tryFixBufferStall=function(t,e){var r=this.config,i=this.fragmentTracker,n=this.media.currentTime,a=i.getPartialFragment(n);if(a&&this._trySkipBufferHole(a))return;t.len>r.maxBufferHole&&e>1e3*r.highBufferWatchdogPeriod&&(o.b.warn("Trying to nudge playhead over buffer-hole"),this.stalled=null,this._tryNudgeBuffer())},e._reportStall=function(t){var e=this.hls,r=this.media;this.stallReported||(this.stallReported=!0,o.b.warn("Playback stalling at @"+r.currentTime+" due to low buffer (buffer="+t+")"),e.trigger(a.a.ERROR,{type:s.b.MEDIA_ERROR,details:s.a.BUFFER_STALLED_ERROR,fatal:!1,buffer:t}))},e._trySkipBufferHole=function(t){for(var e=this.config,r=this.hls,i=this.media,n=i.currentTime,l=0,u=lt.getBuffered(i),h=0;h<u.length;h++){var d=u.start(h);if(n+e.maxBufferHole>=l&&n<d){var c=Math.max(d+.05,i.currentTime+.1);return o.b.warn("skipping hole, adjusting currentTime from "+n+" to "+c),this.moved=!0,this.stalled=null,i.currentTime=c,t&&r.trigger(a.a.ERROR,{type:s.b.MEDIA_ERROR,details:s.a.BUFFER_SEEK_OVER_HOLE,fatal:!1,reason:"fragment loaded with buffer holes, seeking from "+n+" to "+c,frag:t}),c}l=u.end(h)}return 0},e._tryNudgeBuffer=function(){var t=this.config,e=this.hls,r=this.media,i=r.currentTime,n=(this.nudgeRetry||0)+1;if(this.nudgeRetry=n,n<t.nudgeMaxRetry){var l=i+n*t.nudgeOffset;o.b.warn("Nudging 'currentTime' from "+i+" to "+l),r.currentTime=l,e.trigger(a.a.ERROR,{type:s.b.MEDIA_ERROR,details:s.a.BUFFER_NUDGE_ON_STALL,fatal:!1})}else o.b.error("Playhead still not moving while enough data buffered @"+i+" after "+t.nudgeMaxRetry+" nudges"),e.trigger(a.a.ERROR,{type:s.b.MEDIA_ERROR,details:s.a.BUFFER_STALLED_ERROR,fatal:!0})},t}();function te(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function ee(t,e){return(ee=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var re=function(t){var e,r;function i(e,r){var i;return(i=t.call(this,e,r,"[stream-controller]")||this).audioCodecSwap=!1,i.gapController=null,i.level=-1,i._forceStartLoad=!1,i.altAudio=!1,i.audioOnly=!1,i.fragPlaying=null,i.onvplaying=null,i.onvseeked=null,i.fragLastKbps=0,i.stalled=!1,i.couldBacktrack=!1,i.audioCodecSwitch=!1,i.videoBuffer=null,i._registerListeners(),i}r=t,(e=i).prototype=Object.create(r.prototype),e.prototype.constructor=e,ee(e,r);var l,h,d,c=i.prototype;return c._registerListeners=function(){var t=this.hls;t.on(a.a.MEDIA_ATTACHED,this.onMediaAttached,this),t.on(a.a.MEDIA_DETACHING,this.onMediaDetaching,this),t.on(a.a.MANIFEST_LOADING,this.onManifestLoading,this),t.on(a.a.MANIFEST_PARSED,this.onManifestParsed,this),t.on(a.a.LEVEL_LOADING,this.onLevelLoading,this),t.on(a.a.LEVEL_LOADED,this.onLevelLoaded,this),t.on(a.a.FRAG_LOAD_EMERGENCY_ABORTED,this.onFragLoadEmergencyAborted,this),t.on(a.a.ERROR,this.onError,this),t.on(a.a.AUDIO_TRACK_SWITCHING,this.onAudioTrackSwitching,this),t.on(a.a.AUDIO_TRACK_SWITCHED,this.onAudioTrackSwitched,this),t.on(a.a.BUFFER_CREATED,this.onBufferCreated,this),t.on(a.a.BUFFER_FLUSHED,this.onBufferFlushed,this),t.on(a.a.LEVELS_UPDATED,this.onLevelsUpdated,this),t.on(a.a.FRAG_BUFFERED,this.onFragBuffered,this)},c._unregisterListeners=function(){var t=this.hls;t.off(a.a.MEDIA_ATTACHED,this.onMediaAttached,this),t.off(a.a.MEDIA_DETACHING,this.onMediaDetaching,this),t.off(a.a.MANIFEST_LOADING,this.onManifestLoading,this),t.off(a.a.MANIFEST_PARSED,this.onManifestParsed,this),t.off(a.a.LEVEL_LOADED,this.onLevelLoaded,this),t.off(a.a.FRAG_LOAD_EMERGENCY_ABORTED,this.onFragLoadEmergencyAborted,this),t.off(a.a.ERROR,this.onError,this),t.off(a.a.AUDIO_TRACK_SWITCHING,this.onAudioTrackSwitching,this),t.off(a.a.AUDIO_TRACK_SWITCHED,this.onAudioTrackSwitched,this),t.off(a.a.BUFFER_CREATED,this.onBufferCreated,this),t.off(a.a.BUFFER_FLUSHED,this.onBufferFlushed,this),t.off(a.a.LEVELS_UPDATED,this.onLevelsUpdated,this),t.off(a.a.FRAG_BUFFERED,this.onFragBuffered,this)},c.onHandlerDestroying=function(){this._unregisterListeners(),this.onMediaDetaching()},c.startLoad=function(t){if(this.levels){var e=this.lastCurrentTime,r=this.hls;if(this.stopLoad(),this.setInterval(100),this.level=-1,this.fragLoadError=0,!this.startFragRequested){var i=r.startLevel;-1===i&&(r.config.testBandwidth?(i=0,this.bitrateTest=!0):i=r.nextAutoLevel),this.level=r.nextLoadLevel=i,this.loadedmetadata=!1}e>0&&-1===t&&(this.log("Override startPosition with lastCurrentTime @"+e.toFixed(3)),t=e),this.state=xt,this.nextLoadPosition=this.startPosition=this.lastCurrentTime=t,this.tick()}else this._forceStartLoad=!0,this.state=Ot},c.stopLoad=function(){this._forceStartLoad=!1,t.prototype.stopLoad.call(this)},c.doTick=function(){switch(this.state){case xt:this.doTickIdle();break;case Vt:var t,e=this.levels,r=this.level,i=null==e||null===(t=e[r])||void 0===t?void 0:t.details;if(i&&(!i.live||this.levelLastLoaded===this.level)){if(this.waitForCdnTuneIn(i))break;this.state=xt;break}break;case Ft:var n,a=self.performance.now(),s=this.retryDate;(!s||a>=s||null!==(n=this.media)&&void 0!==n&&n.seeking)&&(this.log("retryDate reached, switch back to IDLE state"),this.state=xt)}this.onTickEnd()},c.onTickEnd=function(){t.prototype.onTickEnd.call(this),this.checkBuffer(),this.checkFragmentChanged()},c.doTickIdle=function(){var t,e,r=this.hls,i=this.levelLastLoaded,n=this.levels,s=this.media,o=r.config,l=r.nextLoadLevel;if(null!==i&&(s||!this.startFragRequested&&o.startFragPrefetch)&&(!this.altAudio||!this.audioOnly)&&n&&n[l]){var h=n[l];this.level=r.nextLoadLevel=l;var d=h.details;if(!d||this.state===Vt||d.live&&this.levelLastLoaded!==l)this.state=Vt;else{var c=this.getFwdBufferInfo(this.mediaBuffer?this.mediaBuffer:s,k.b.MAIN);if(null!==c)if(!(c.len>=this.getMaxBufferLength(h.maxBitrate))){if(this._streamEnded(c,d)){var f={};return this.altAudio&&(f.type="video"),this.hls.trigger(a.a.BUFFER_EOS,f),void(this.state=Kt)}var g=c.end,v=this.getNextFragment(g,d);if(this.couldBacktrack&&!this.fragPrevious&&v&&"initSegment"!==v.sn){var p=v.sn-d.startSN;p>1&&(v=d.fragments[p-1],this.fragmentTracker.removeFragment(v))}if(v&&this.fragmentTracker.getState(v)===tt.OK&&this.nextLoadPosition>g){var m=this.audioOnly&&!this.altAudio?u.a.AUDIO:u.a.VIDEO;this.afterBufferFlushed(s,m,k.b.MAIN),v=this.getNextFragment(this.nextLoadPosition,d)}v&&(!v.initSegment||v.initSegment.data||this.bitrateTest||(v=v.initSegment),"identity"!==(null===(t=v.decryptdata)||void 0===t?void 0:t.keyFormat)||null!==(e=v.decryptdata)&&void 0!==e&&e.key?this.loadFragment(v,d,g):this.loadKey(v,d))}}}},c.loadFragment=function(e,r,i){var n,a=this.fragmentTracker.getState(e);if(this.fragCurrent=e,a===tt.BACKTRACKED){var s=this.fragmentTracker.getBacktrackData(e);if(s)return this._handleFragmentLoadProgress(s),void this._handleFragmentLoadComplete(s);a=tt.NOT_LOADED}a===tt.NOT_LOADED||a===tt.PARTIAL?"initSegment"===e.sn?this._loadInitSegment(e):this.bitrateTest?(e.bitrateTest=!0,this.log("Fragment "+e.sn+" of level "+e.level+" is being downloaded to test bitrate and will not be buffered"),this._loadBitrateTestFrag(e)):(this.startFragRequested=!0,t.prototype.loadFragment.call(this,e,r,i)):a===tt.APPENDING?this.reduceMaxBufferLength(e.duration)&&this.fragmentTracker.removeFragment(e):0===(null===(n=this.media)||void 0===n?void 0:n.buffered.length)&&this.fragmentTracker.removeAllFragments()},c.getAppendedFrag=function(t){var e=this.fragmentTracker.getAppendedFrag(t,k.b.MAIN);return e&&"fragment"in e?e.fragment:e},c.getBufferedFrag=function(t){return this.fragmentTracker.getBufferedFrag(t,k.b.MAIN)},c.followingBufferedFrag=function(t){return t?this.getBufferedFrag(t.end+.5):null},c.immediateLevelSwitch=function(){this.abortCurrentFrag(),this.flushMainBuffer(0,Number.POSITIVE_INFINITY)},c.nextLevelSwitch=function(){var t=this.levels,e=this.media;if(null!=e&&e.readyState){var r,i=this.getAppendedFrag(e.currentTime);if(i&&i.start>1&&this.flushMainBuffer(0,i.start-1),!e.paused&&t){var n=t[this.hls.nextLoadLevel],a=this.fragLastKbps;r=a&&this.fragCurrent?this.fragCurrent.duration*n.maxBitrate/(1e3*a)+1:0}else r=0;var s=this.getBufferedFrag(e.currentTime+r);if(s){var o=this.followingBufferedFrag(s);if(o){this.abortCurrentFrag();var l=o.maxStartPTS?o.maxStartPTS:o.start,u=o.duration,h=Math.max(s.end,l+Math.min(Math.max(u-this.config.maxFragLookUpTolerance,.5*u),.75*u));this.flushMainBuffer(h,Number.POSITIVE_INFINITY)}}}},c.abortCurrentFrag=function(){var t=this.fragCurrent;this.fragCurrent=null,null!=t&&t.loader&&t.loader.abort(),this.state===Pt&&(this.state=xt),this.nextLoadPosition=this.getLoadPosition()},c.flushMainBuffer=function(e,r){t.prototype.flushMainBuffer.call(this,e,r,this.altAudio?"video":null)},c.onMediaAttached=function(e,r){t.prototype.onMediaAttached.call(this,e,r);var i=r.media;this.onvplaying=this.onMediaPlaying.bind(this),this.onvseeked=this.onMediaSeeked.bind(this),i.addEventListener("playing",this.onvplaying),i.addEventListener("seeked",this.onvseeked),this.gapController=new Zt(this.config,i,this.fragmentTracker,this.hls)},c.onMediaDetaching=function(){var e=this.media;e&&(e.removeEventListener("playing",this.onvplaying),e.removeEventListener("seeked",this.onvseeked),this.onvplaying=this.onvseeked=null,this.videoBuffer=null),this.fragPlaying=null,this.gapController&&(this.gapController.destroy(),this.gapController=null),t.prototype.onMediaDetaching.call(this)},c.onMediaPlaying=function(){this.tick()},c.onMediaSeeked=function(){var t=this.media,e=t?t.currentTime:null;Object(n.a)(e)&&this.log("Media seeked to "+e.toFixed(3)),this.tick()},c.onManifestLoading=function(){this.log("Trigger BUFFER_RESET"),this.hls.trigger(a.a.BUFFER_RESET,void 0),this.fragmentTracker.removeAllFragments(),this.couldBacktrack=this.stalled=!1,this.startPosition=this.lastCurrentTime=0,this.fragPlaying=null},c.onManifestParsed=function(t,e){var r,i,n,a=!1,s=!1;e.levels.forEach((function(t){(r=t.audioCodec)&&(-1!==r.indexOf("mp4a.40.2")&&(a=!0),-1!==r.indexOf("mp4a.40.5")&&(s=!0))})),this.audioCodecSwitch=a&&s&&!("function"==typeof(null==(n=qt())||null===(i=n.prototype)||void 0===i?void 0:i.changeType)),this.audioCodecSwitch&&this.log("Both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC"),this.levels=e.levels,this.startFragRequested=!1},c.onLevelLoading=function(t,e){var r=this.levels;if(r&&this.state===xt){var i=r[e.level];(!i.details||i.details.live&&this.levelLastLoaded!==e.level||this.waitForCdnTuneIn(i.details))&&(this.state=Vt)}},c.onLevelLoaded=function(t,e){var r,i=this.levels,n=e.level,s=e.details,o=s.totalduration;if(i){this.log("Level "+n+" loaded ["+s.startSN+","+s.endSN+"], cc ["+s.startCC+", "+s.endCC+"] duration:"+o);var l=this.fragCurrent;!l||this.state!==Mt&&this.state!==Ft||l.level!==e.level&&l.loader&&(this.state=xt,l.loader.abort());var u=i[n],h=0;if(s.live||null!==(r=u.details)&&void 0!==r&&r.live){if(s.fragments[0]||(s.deltaUpdateFailed=!0),s.deltaUpdateFailed)return;h=this.alignPlaylists(s,u.details)}if(u.details=s,this.levelLastLoaded=n,this.hls.trigger(a.a.LEVEL_UPDATED,{details:s,level:n}),this.state===Vt){if(this.waitForCdnTuneIn(s))return;this.state=xt}this.startFragRequested?s.live&&this.synchronizeToLiveEdge(s):this.setStartPosition(s,h),this.tick()}else this.warn("Levels were reset while loading level "+n)},c._handleFragmentLoadProgress=function(t){var e,r=t.frag,i=t.part,n=t.payload,a=this.levels;if(a){var s=a[r.level],o=s.details;if(o){var l=s.videoCodec,u=o.PTSKnown||!o.live,h=null===(e=r.initSegment)||void 0===e?void 0:e.data,d=this._getAudioCodec(s),c=this.transmuxer=this.transmuxer||new Jt(this.hls,k.b.MAIN,this._handleTransmuxComplete.bind(this),this._handleTransmuxerFlush.bind(this)),f=i?i.index:-1,g=-1!==f,v=new ut(r.level,r.sn,r.stats.chunkCount,n.byteLength,f,g),p=this.initPTS[r.cc];c.push(n,h,d,l,r,i,o.totalduration,u,v,p)}else this.warn("Dropping fragment "+r.sn+" of level "+r.level+" after level details were reset")}else this.warn("Levels were reset while fragment load was in progress. Fragment "+r.sn+" of level "+r.level+" will not be buffered")},c.onAudioTrackSwitching=function(t,e){var r=this.altAudio,i=!!e.url,n=e.id;if(!i){if(this.mediaBuffer!==this.media){this.log("Switching on main audio, use media.buffered to schedule main fragment loading"),this.mediaBuffer=this.media;var s=this.fragCurrent;null!=s&&s.loader&&(this.log("Switching to main audio track, cancel main fragment load"),s.loader.abort()),this.resetTransmuxer(),this.resetLoadingState()}else this.audioOnly&&this.resetTransmuxer();var o=this.hls;r&&o.trigger(a.a.BUFFER_FLUSHING,{startOffset:0,endOffset:Number.POSITIVE_INFINITY,type:"audio"}),o.trigger(a.a.AUDIO_TRACK_SWITCHED,{id:n})}},c.onAudioTrackSwitched=function(t,e){var r=e.id,i=!!this.hls.audioTracks[r].url;if(i){var n=this.videoBuffer;n&&this.mediaBuffer!==n&&(this.log("Switching on alternate audio, use video.buffered to schedule main fragment loading"),this.mediaBuffer=n)}this.altAudio=i,this.tick()},c.onBufferCreated=function(t,e){var r,i,n=e.tracks,a=!1;for(var s in n){var o=n[s];if("main"===o.id){if(i=s,r=o,"video"===s){var l=n[s];l&&(this.videoBuffer=l.buffer)}}else a=!0}a&&r?(this.log("Alternate track found, use "+i+".buffered to schedule main fragment loading"),this.mediaBuffer=r.buffer):this.mediaBuffer=this.media},c.onFragBuffered=function(t,e){var r=e.frag,i=e.part;if(!r||r.type===k.b.MAIN){if(this.fragContextChanged(r))return this.warn("Fragment "+r.sn+(i?" p: "+i.index:"")+" of level "+r.level+" finished buffering, but was aborted. state: "+this.state),void(this.state===Bt&&(this.state=xt));var n=i?i.stats:r.stats;this.fragLastKbps=Math.round(8*n.total/(n.buffering.end-n.loading.first)),"initSegment"!==r.sn&&(this.fragPrevious=r),this.fragBufferedComplete(r,i)}},c.onError=function(t,e){switch(e.details){case s.a.FRAG_LOAD_ERROR:case s.a.FRAG_LOAD_TIMEOUT:case s.a.KEY_LOAD_ERROR:case s.a.KEY_LOAD_TIMEOUT:this.onFragmentOrKeyLoadError(k.b.MAIN,e);break;case s.a.LEVEL_LOAD_ERROR:case s.a.LEVEL_LOAD_TIMEOUT:this.state!==jt&&(e.fatal?(this.warn(""+e.details),this.state=jt):e.levelRetry||this.state!==Vt||(this.state=xt));break;case s.a.BUFFER_FULL_ERROR:if("main"===e.parent&&(this.state===Ut||this.state===Bt)){var r=!0,i=this.getFwdBufferInfo(this.media,k.b.MAIN);i&&i.len>.5&&(r=!this.reduceMaxBufferLength(i.len)),r&&(this.warn("buffer full error also media.currentTime is not buffered, flush main"),this.immediateLevelSwitch()),this.resetLoadingState()}}},c.checkBuffer=function(){var t=this.media,e=this.gapController;if(t&&e&&t.readyState){var r=lt.getBuffered(t);!this.loadedmetadata&&r.length?(this.loadedmetadata=!0,this.seekToStartPos()):e.poll(this.lastCurrentTime),this.lastCurrentTime=t.currentTime}},c.onFragLoadEmergencyAborted=function(){this.state=xt,this.loadedmetadata||(this.startFragRequested=!1,this.nextLoadPosition=this.startPosition),this.tickImmediate()},c.onBufferFlushed=function(t,e){var r=e.type;if(r!==u.a.AUDIO||this.audioOnly&&!this.altAudio){var i=(r===u.a.VIDEO?this.videoBuffer:this.mediaBuffer)||this.media;this.afterBufferFlushed(i,r,k.b.MAIN)}},c.onLevelsUpdated=function(t,e){this.levels=e.levels},c.swapAudioCodec=function(){this.audioCodecSwap=!this.audioCodecSwap},c.seekToStartPos=function(){var t=this.media,e=t.currentTime,r=this.startPosition;if(r>=0&&e<r){if(t.seeking)return void o.b.log("could not seek to "+r+", already seeking at "+e);var i=lt.getBuffered(t),n=(i.length?i.start(0):0)-r;n>0&&(n<this.config.maxBufferHole||n<this.config.maxFragLookUpTolerance)&&(o.b.log("adjusting start position by "+n+" to match buffer start"),r+=n,this.startPosition=r),this.log("seek to target start position "+r+" from current time "+e),t.currentTime=r}},c._getAudioCodec=function(t){var e=this.config.defaultAudioCodec||t.audioCodec;return this.audioCodecSwap&&e&&(this.log("Swapping audio codec"),e=-1!==e.indexOf("mp4a.40.5")?"mp4a.40.2":"mp4a.40.5"),e},c._loadBitrateTestFrag=function(t){var e=this;this._doFragLoad(t).then((function(r){var i=e.hls;if(r&&!i.nextLoadLevel&&!e.fragContextChanged(t)){e.fragLoadError=0,e.state=xt,e.startFragRequested=!1,e.bitrateTest=!1;var n=t.stats;n.parsing.start=n.parsing.end=n.buffering.start=n.buffering.end=self.performance.now(),i.trigger(a.a.FRAG_LOADED,r)}}))},c._handleTransmuxComplete=function(t){var e,r="main",i=this.hls,s=t.remuxResult,o=t.chunkMeta,l=this.getCurrentContext(o);if(!l)return this.warn("The loading context changed while buffering fragment "+o.sn+" of level "+o.level+". This chunk will not be buffered."),void this.resetLiveStartWhenNotLoaded(o.level);var h=l.frag,d=l.part,c=l.level,f=s.video,g=s.text,v=s.id3,p=s.initSegment,m=this.altAudio?void 0:s.audio;if(!this.fragContextChanged(h)){if(this.state=Ut,p){p.tracks&&(this._bufferInitSegment(c,p.tracks,h,o),i.trigger(a.a.FRAG_PARSING_INIT_SEGMENT,{frag:h,id:r,tracks:p.tracks}));var y=p.initPTS,T=p.timescale;Object(n.a)(y)&&(this.initPTS[h.cc]=y,i.trigger(a.a.INIT_PTS_FOUND,{frag:h,id:r,initPTS:y,timescale:T}))}if(f&&!1!==s.independent){if(c.details){var b=f.startPTS,E=f.endPTS,S=f.startDTS,L=f.endDTS;if(d)d.elementaryStreams[f.type]={startPTS:b,endPTS:E,startDTS:S,endDTS:L};else if(f.firstKeyFrame&&f.independent&&(this.couldBacktrack=!0),f.dropped&&f.independent){if(this.getLoadPosition()+this.config.maxBufferHole<b)return void this.backtrack(h);h.setElementaryStreamInfo(f.type,h.start,E,h.start,L,!0)}h.setElementaryStreamInfo(f.type,b,E,S,L),this.bufferFragmentData(f,h,d,o)}}else if(!1===s.independent)return void this.backtrack(h);if(m){var A=m.startPTS,R=m.endPTS,D=m.startDTS,k=m.endDTS;d&&(d.elementaryStreams[u.a.AUDIO]={startPTS:A,endPTS:R,startDTS:D,endDTS:k}),h.setElementaryStreamInfo(u.a.AUDIO,A,R,D,k),this.bufferFragmentData(m,h,d,o)}if(null!=v&&null!==(e=v.samples)&&void 0!==e&&e.length){var _={frag:h,id:r,samples:v.samples};i.trigger(a.a.FRAG_PARSING_METADATA,_)}if(g){var I={frag:h,id:r,samples:g.samples};i.trigger(a.a.FRAG_PARSING_USERDATA,I)}}},c._bufferInitSegment=function(t,e,r,i){var n=this;if(this.state===Ut){this.audioOnly=!!e.audio&&!e.video,this.altAudio&&!this.audioOnly&&delete e.audio;var s=e.audio,o=e.video,l=e.audiovideo;if(s){var u=t.audioCodec,h=navigator.userAgent.toLowerCase();this.audioCodecSwitch&&(u&&(u=-1!==u.indexOf("mp4a.40.5")?"mp4a.40.2":"mp4a.40.5"),1!==s.metadata.channelCount&&-1===h.indexOf("firefox")&&(u="mp4a.40.5")),-1!==h.indexOf("android")&&"audio/mpeg"!==s.container&&(u="mp4a.40.2",this.log("Android: force audio codec to "+u)),t.audioCodec&&t.audioCodec!==u&&this.log('Swapping manifest audio codec "'+t.audioCodec+'" for "'+u+'"'),s.levelCodec=u,s.id="main",this.log("Init audio buffer, container:"+s.container+", codecs[selected/level/parsed]=["+(u||"")+"/"+(t.audioCodec||"")+"/"+s.codec+"]")}o&&(o.levelCodec=t.videoCodec,o.id="main",this.log("Init video buffer, container:"+o.container+", codecs[level/parsed]=["+(t.videoCodec||"")+"/"+o.codec+"]")),l&&this.log("Init audiovideo buffer, container:"+l.container+", codecs[level/parsed]=["+(t.attrs.CODECS||"")+"/"+l.codec+"]"),this.hls.trigger(a.a.BUFFER_CODECS,e),Object.keys(e).forEach((function(t){var s=e[t].initSegment;null!=s&&s.byteLength&&n.hls.trigger(a.a.BUFFER_APPENDING,{type:t,data:s,frag:r,part:null,chunkMeta:i,parent:r.type})})),this.tick()}},c.backtrack=function(t){this.couldBacktrack=!0,this.resetTransmuxer(),this.flushBufferGap(t);var e=this.fragmentTracker.backtrack(t);this.fragPrevious=null,this.nextLoadPosition=t.start,e?this.resetFragmentLoading(t):this.state=Gt},c.checkFragmentChanged=function(){var t=this.media,e=null;if(t&&t.readyState>1&&!1===t.seeking){var r=t.currentTime;if(lt.isBuffered(t,r)?e=this.getAppendedFrag(r):lt.isBuffered(t,r+.1)&&(e=this.getAppendedFrag(r+.1)),e){var i=this.fragPlaying,n=e.level;i&&e.sn===i.sn&&i.level===n&&e.urlId===i.urlId||(this.hls.trigger(a.a.FRAG_CHANGED,{frag:e}),i&&i.level===n||this.hls.trigger(a.a.LEVEL_SWITCHED,{level:n}),this.fragPlaying=e)}}},l=i,(h=[{key:"nextLevel",get:function(){var t=this.nextBufferedFrag;return t?t.level:-1}},{key:"currentLevel",get:function(){var t=this.media;if(t){var e=this.getAppendedFrag(t.currentTime);if(e)return e.level}return-1}},{key:"nextBufferedFrag",get:function(){var t=this.media;if(t){var e=this.getAppendedFrag(t.currentTime);return this.followingBufferedFrag(e)}return null}},{key:"forceStartLoad",get:function(){return this._forceStartLoad}}])&&te(l.prototype,h),d&&te(l,d),i}(Wt),ie=function(){function t(t,e,r){void 0===e&&(e=0),void 0===r&&(r=0),this.halfLife=void 0,this.alpha_=void 0,this.estimate_=void 0,this.totalWeight_=void 0,this.halfLife=t,this.alpha_=t?Math.exp(Math.log(.5)/t):0,this.estimate_=e,this.totalWeight_=r}var e=t.prototype;return e.sample=function(t,e){var r=Math.pow(this.alpha_,t);this.estimate_=e*(1-r)+r*this.estimate_,this.totalWeight_+=t},e.getTotalWeight=function(){return this.totalWeight_},e.getEstimate=function(){if(this.alpha_){var t=1-Math.pow(this.alpha_,this.totalWeight_);if(t)return this.estimate_/t}return this.estimate_},t}(),ne=function(){function t(t,e,r){this.defaultEstimate_=void 0,this.minWeight_=void 0,this.minDelayMs_=void 0,this.slow_=void 0,this.fast_=void 0,this.defaultEstimate_=r,this.minWeight_=.001,this.minDelayMs_=50,this.slow_=new ie(t),this.fast_=new ie(e)}var e=t.prototype;return e.update=function(t,e){var r=this.slow_,i=this.fast_;this.slow_.halfLife!==t&&(this.slow_=new ie(t,r.getEstimate(),r.getTotalWeight())),this.fast_.halfLife!==e&&(this.fast_=new ie(e,i.getEstimate(),i.getTotalWeight()))},e.sample=function(t,e){var r=(t=Math.max(t,this.minDelayMs_))/1e3,i=8*e/r;this.fast_.sample(r,i),this.slow_.sample(r,i)},e.canEstimate=function(){var t=this.fast_;return t&&t.getTotalWeight()>=this.minWeight_},e.getEstimate=function(){return this.canEstimate()?Math.min(this.fast_.getEstimate(),this.slow_.getEstimate()):this.defaultEstimate_},e.destroy=function(){},t}();function ae(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var se=function(){function t(t){this.hls=void 0,this.lastLoadedFragLevel=0,this._nextAutoLevel=-1,this.timer=void 0,this.onCheck=this._abandonRulesCheck.bind(this),this.fragCurrent=null,this.partCurrent=null,this.bitrateTestDelay=0,this.bwEstimator=void 0,this.hls=t;var e=t.config;this.bwEstimator=new ne(e.abrEwmaSlowVoD,e.abrEwmaFastVoD,e.abrEwmaDefaultEstimate),this.registerListeners()}var e,r,i,l=t.prototype;return l.registerListeners=function(){var t=this.hls;t.on(a.a.FRAG_LOADING,this.onFragLoading,this),t.on(a.a.FRAG_LOADED,this.onFragLoaded,this),t.on(a.a.FRAG_BUFFERED,this.onFragBuffered,this),t.on(a.a.LEVEL_LOADED,this.onLevelLoaded,this),t.on(a.a.ERROR,this.onError,this)},l.unregisterListeners=function(){var t=this.hls;t.off(a.a.FRAG_LOADING,this.onFragLoading,this),t.off(a.a.FRAG_LOADED,this.onFragLoaded,this),t.off(a.a.FRAG_BUFFERED,this.onFragBuffered,this),t.off(a.a.LEVEL_LOADED,this.onLevelLoaded,this),t.off(a.a.ERROR,this.onError,this)},l.destroy=function(){this.unregisterListeners(),this.clearTimer(),this.hls=this.onCheck=null,this.fragCurrent=this.partCurrent=null},l.onFragLoading=function(t,e){var r,i=e.frag;i.type===k.b.MAIN&&(this.timer||(this.fragCurrent=i,this.partCurrent=null!=(r=e.part)?r:null,this.timer=self.setInterval(this.onCheck,100)))},l.onLevelLoaded=function(t,e){var r=this.hls.config;e.details.live?this.bwEstimator.update(r.abrEwmaSlowLive,r.abrEwmaFastLive):this.bwEstimator.update(r.abrEwmaSlowVoD,r.abrEwmaFastVoD)},l._abandonRulesCheck=function(){var t=this.fragCurrent,e=this.partCurrent,r=this.hls,i=r.autoLevelEnabled,s=r.config,l=r.media;if(t&&l){var u=e?e.stats:t.stats,h=e?e.duration:t.duration;if(u.aborted)return o.b.warn("frag loader destroy or aborted, disarm abandonRules"),this.clearTimer(),void(this._nextAutoLevel=-1);if(i&&!l.paused&&l.playbackRate&&l.readyState){var d=performance.now()-u.loading.start,c=Math.abs(l.playbackRate);if(!(d<=500*h/c)){var f=r.levels,g=r.minAutoLevel,v=f[t.level],p=u.total||Math.max(u.loaded,Math.round(h*v.maxBitrate/8)),m=Math.max(1,u.bwEstimate?u.bwEstimate/8:1e3*u.loaded/d),y=(p-u.loaded)/m,T=l.currentTime,b=(lt.bufferInfo(l,T,s.maxBufferHole).end-T)/c;if(!(b>=2*h/c||y<=b)){var E,S=Number.POSITIVE_INFINITY;for(E=t.level-1;E>g;E--){if((S=h*f[E].maxBitrate/(6.4*m))<b)break}if(!(S>=y)){var L=this.bwEstimator.getEstimate();o.b.warn("Fragment "+t.sn+(e?" part "+e.index:"")+" of level "+t.level+" is loading too slowly and will cause an underbuffer; aborting and switching to level "+E+"\n      Current BW estimate: "+(Object(n.a)(L)?(L/1024).toFixed(3):"Unknown")+" Kb/s\n      Estimated load time for current fragment: "+y.toFixed(3)+" s\n      Estimated load time for the next fragment: "+S.toFixed(3)+" s\n      Time to underbuffer: "+b.toFixed(3)+" s"),r.nextLoadLevel=E,this.bwEstimator.sample(d,u.loaded),this.clearTimer(),t.loader&&(this.fragCurrent=this.partCurrent=null,t.loader.abort()),r.trigger(a.a.FRAG_LOAD_EMERGENCY_ABORTED,{frag:t,part:e,stats:u})}}}}}},l.onFragLoaded=function(t,e){var r=e.frag,i=e.part;if(r.type===k.b.MAIN&&Object(n.a)(r.sn)){var s=i?i.stats:r.stats,o=i?i.duration:r.duration;if(this.clearTimer(),this.lastLoadedFragLevel=r.level,this._nextAutoLevel=-1,this.hls.config.abrMaxWithRealBitrate){var l=this.hls.levels[r.level],u=(l.loaded?l.loaded.bytes:0)+s.loaded,h=(l.loaded?l.loaded.duration:0)+o;l.loaded={bytes:u,duration:h},l.realBitrate=Math.round(8*u/h)}if(r.bitrateTest){var d={stats:s,frag:r,part:i,id:r.type};this.onFragBuffered(a.a.FRAG_BUFFERED,d),r.bitrateTest=!1}}},l.onFragBuffered=function(t,e){var r=e.frag,i=e.part,n=i?i.stats:r.stats;if(!n.aborted&&r.type===k.b.MAIN&&"initSegment"!==r.sn){var a=n.parsing.end-n.loading.start;this.bwEstimator.sample(a,n.loaded),n.bwEstimate=this.bwEstimator.getEstimate(),r.bitrateTest?this.bitrateTestDelay=a/1e3:this.bitrateTestDelay=0}},l.onError=function(t,e){switch(e.details){case s.a.FRAG_LOAD_ERROR:case s.a.FRAG_LOAD_TIMEOUT:this.clearTimer()}},l.clearTimer=function(){self.clearInterval(this.timer),this.timer=void 0},l.getNextABRAutoLevel=function(){var t=this.fragCurrent,e=this.partCurrent,r=this.hls,i=r.maxAutoLevel,n=r.config,a=r.minAutoLevel,s=r.media,l=e?e.duration:t?t.duration:0,u=s?s.currentTime:0,h=s&&0!==s.playbackRate?Math.abs(s.playbackRate):1,d=this.bwEstimator?this.bwEstimator.getEstimate():n.abrEwmaDefaultEstimate,c=(lt.bufferInfo(s,u,n.maxBufferHole).end-u)/h,f=this.findBestLevel(d,a,i,c,n.abrBandWidthFactor,n.abrBandWidthUpFactor);if(f>=0)return f;o.b.trace((c?"rebuffering expected":"buffer is empty")+", finding optimal quality level");var g=l?Math.min(l,n.maxStarvationDelay):n.maxStarvationDelay,v=n.abrBandWidthFactor,p=n.abrBandWidthUpFactor;if(!c){var m=this.bitrateTestDelay;if(m)g=(l?Math.min(l,n.maxLoadingDelay):n.maxLoadingDelay)-m,o.b.trace("bitrate test took "+Math.round(1e3*m)+"ms, set first fragment max fetchDuration to "+Math.round(1e3*g)+" ms"),v=p=1}return f=this.findBestLevel(d,a,i,c+g,v,p),Math.max(f,0)},l.findBestLevel=function(t,e,r,i,n,a){for(var s,l=this.fragCurrent,u=this.partCurrent,h=this.lastLoadedFragLevel,d=this.hls.levels,c=d[h],f=!(null==c||null===(s=c.details)||void 0===s||!s.live),g=null==c?void 0:c.codecSet,v=u?u.duration:l?l.duration:0,p=r;p>=e;p--){var m=d[p];if(m&&(!g||m.codecSet===g)){var y=m.details,T=(u?null==y?void 0:y.partTarget:null==y?void 0:y.averagetargetduration)||v,b=void 0;b=p<=h?n*t:a*t;var E=d[p].maxBitrate,S=E*T/b;if(o.b.trace("level/adjustedbw/bitrate/avgDuration/maxFetchDuration/fetchDuration: "+p+"/"+Math.round(b)+"/"+E+"/"+T+"/"+i+"/"+S),b>E&&(!S||f&&!this.bitrateTestDelay||S<i))return p}}return-1},e=t,(r=[{key:"nextAutoLevel",get:function(){var t=this._nextAutoLevel,e=this.bwEstimator;if(!(-1===t||e&&e.canEstimate()))return t;var r=this.getNextABRAutoLevel();return-1!==t&&(r=Math.min(t,r)),r},set:function(t){this._nextAutoLevel=t}}])&&ae(e.prototype,r),i&&ae(e,i),t}(),oe=r(13);function le(){return(le=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t}).apply(this,arguments)}function ue(t,e){return(ue=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var he=function(t){var e,r;function i(e,r){var i;return(i=t.call(this,e,r,"[audio-stream-controller]")||this).videoBuffer=null,i.videoTrackCC=-1,i.waitingVideoCC=-1,i.audioSwitch=!1,i.trackId=-1,i.waitingData=null,i.mainDetails=null,i.bufferFlushed=!1,i._registerListeners(),i}r=t,(e=i).prototype=Object.create(r.prototype),e.prototype.constructor=e,ue(e,r);var l=i.prototype;return l.onHandlerDestroying=function(){this._unregisterListeners(),this.mainDetails=null},l._registerListeners=function(){var t=this.hls;t.on(a.a.MEDIA_ATTACHED,this.onMediaAttached,this),t.on(a.a.MEDIA_DETACHING,this.onMediaDetaching,this),t.on(a.a.MANIFEST_LOADING,this.onManifestLoading,this),t.on(a.a.LEVEL_LOADED,this.onLevelLoaded,this),t.on(a.a.AUDIO_TRACKS_UPDATED,this.onAudioTracksUpdated,this),t.on(a.a.AUDIO_TRACK_SWITCHING,this.onAudioTrackSwitching,this),t.on(a.a.AUDIO_TRACK_LOADED,this.onAudioTrackLoaded,this),t.on(a.a.ERROR,this.onError,this),t.on(a.a.BUFFER_RESET,this.onBufferReset,this),t.on(a.a.BUFFER_CREATED,this.onBufferCreated,this),t.on(a.a.BUFFER_FLUSHED,this.onBufferFlushed,this),t.on(a.a.INIT_PTS_FOUND,this.onInitPtsFound,this),t.on(a.a.FRAG_BUFFERED,this.onFragBuffered,this)},l._unregisterListeners=function(){var t=this.hls;t.off(a.a.MEDIA_ATTACHED,this.onMediaAttached,this),t.off(a.a.MEDIA_DETACHING,this.onMediaDetaching,this),t.off(a.a.MANIFEST_LOADING,this.onManifestLoading,this),t.off(a.a.LEVEL_LOADED,this.onLevelLoaded,this),t.off(a.a.AUDIO_TRACKS_UPDATED,this.onAudioTracksUpdated,this),t.off(a.a.AUDIO_TRACK_SWITCHING,this.onAudioTrackSwitching,this),t.off(a.a.AUDIO_TRACK_LOADED,this.onAudioTrackLoaded,this),t.off(a.a.ERROR,this.onError,this),t.off(a.a.BUFFER_RESET,this.onBufferReset,this),t.off(a.a.BUFFER_CREATED,this.onBufferCreated,this),t.off(a.a.BUFFER_FLUSHED,this.onBufferFlushed,this),t.off(a.a.INIT_PTS_FOUND,this.onInitPtsFound,this),t.off(a.a.FRAG_BUFFERED,this.onFragBuffered,this)},l.onInitPtsFound=function(t,e){var r=e.frag,i=e.id,n=e.initPTS;if("main"===i){var a=r.cc;this.initPTS[r.cc]=n,this.log("InitPTS for cc: "+a+" found from main: "+n),this.videoTrackCC=a,this.state===Ht&&this.tick()}},l.startLoad=function(t){if(!this.levels)return this.startPosition=t,void(this.state=Ot);var e=this.lastCurrentTime;this.stopLoad(),this.setInterval(100),this.fragLoadError=0,e>0&&-1===t?(this.log("Override startPosition with lastCurrentTime @"+e.toFixed(3)),this.state=xt):(this.loadedmetadata=!1,this.state=Nt),this.nextLoadPosition=this.startPosition=this.lastCurrentTime=t,this.tick()},l.doTick=function(){switch(this.state){case xt:this.doTickIdle();break;case Nt:var e,r=this.levels,i=this.trackId,n=null==r||null===(e=r[i])||void 0===e?void 0:e.details;if(n){if(this.waitForCdnTuneIn(n))break;this.state=Ht}break;case Ft:var a,s=performance.now(),l=this.retryDate;(!l||s>=l||null!==(a=this.media)&&void 0!==a&&a.seeking)&&(this.log("RetryDate reached, switch back to IDLE state"),this.state=xt);break;case Ht:var u=this.waitingData;if(u){var h=u.frag,d=u.part,c=u.cache,f=u.complete;if(void 0!==this.initPTS[h.cc]){this.waitingData=null,this.waitingVideoCC=-1,this.state=Mt;var g={frag:h,part:d,payload:c.flush(),networkDetails:null};this._handleFragmentLoadProgress(g),f&&t.prototype._handleFragmentLoadComplete.call(this,g)}else if(this.videoTrackCC!==this.waitingVideoCC)o.b.log("Waiting fragment cc ("+h.cc+") cancelled because video is at cc "+this.videoTrackCC),this.clearWaitingFragment();else{var v=this.getLoadPosition(),p=lt.bufferInfo(this.mediaBuffer,v,this.config.maxBufferHole);mt(p.end,this.config.maxFragLookUpTolerance,h)<0&&(o.b.log("Waiting fragment cc ("+h.cc+") @ "+h.start+" cancelled because another fragment at "+p.end+" is needed"),this.clearWaitingFragment())}}else this.state=xt}this.onTickEnd()},l.clearWaitingFragment=function(){var t=this.waitingData;t&&(this.fragmentTracker.removeFragment(t.frag),this.waitingData=null,this.waitingVideoCC=-1,this.state=xt)},l.onTickEnd=function(){var t=this.media;if(t&&t.readyState){var e=(this.mediaBuffer?this.mediaBuffer:t).buffered;!this.loadedmetadata&&e.length&&(this.loadedmetadata=!0),this.lastCurrentTime=t.currentTime}},l.doTickIdle=function(){var t,e,r=this.hls,i=this.levels,n=this.media,s=this.trackId,o=r.config;if(i&&i[s]&&(n||!this.startFragRequested&&o.startFragPrefetch)){var l=i[s].details;if(!l||l.live&&this.levelLastLoaded!==s||this.waitForCdnTuneIn(l))this.state=Nt;else{this.bufferFlushed&&(this.bufferFlushed=!1,this.afterBufferFlushed(this.mediaBuffer?this.mediaBuffer:this.media,u.a.AUDIO,k.b.AUDIO));var h=this.getFwdBufferInfo(this.mediaBuffer?this.mediaBuffer:this.media,k.b.AUDIO);if(null!==h){var d=h.len,c=this.getMaxBufferLength(),f=this.audioSwitch;if(!(d>=c)||f){if(!f&&this._streamEnded(h,l))return r.trigger(a.a.BUFFER_EOS,{type:"audio"}),void(this.state=Kt);var g=l.fragments[0].start,v=h.end;if(f){var p=this.getLoadPosition();v=p,l.PTSKnown&&p<g&&(h.end>g||h.nextStart)&&(this.log("Alt audio track ahead of main track, seek to start of alt audio track"),n.currentTime=g+.05)}var m=this.getNextFragment(v,l);m?"identity"!==(null===(t=m.decryptdata)||void 0===t?void 0:t.keyFormat)||null!==(e=m.decryptdata)&&void 0!==e&&e.key?this.loadFragment(m,l,v):this.loadKey(m,l):this.bufferFlushed=!0}}}}},l.getMaxBufferLength=function(){var e=t.prototype.getMaxBufferLength.call(this),r=this.getFwdBufferInfo(this.videoBuffer?this.videoBuffer:this.media,k.b.MAIN);return null===r?e:Math.max(e,r.len)},l.onMediaDetaching=function(){this.videoBuffer=null,t.prototype.onMediaDetaching.call(this)},l.onAudioTracksUpdated=function(t,e){var r=e.audioTracks;this.resetTransmuxer(),this.levels=r.map((function(t){return new j(t)}))},l.onAudioTrackSwitching=function(t,e){var r=!!e.url;this.trackId=e.id;var i=this.fragCurrent;null!=i&&i.loader&&i.loader.abort(),this.fragCurrent=null,this.clearWaitingFragment(),r?this.setInterval(100):this.resetTransmuxer(),r?(this.audioSwitch=!0,this.state=xt):this.state=Ot,this.tick()},l.onManifestLoading=function(){this.mainDetails=null,this.fragmentTracker.removeAllFragments(),this.startPosition=this.lastCurrentTime=0,this.bufferFlushed=!1},l.onLevelLoaded=function(t,e){this.mainDetails=e.details},l.onAudioTrackLoaded=function(t,e){var r,i=this.levels,n=e.details,a=e.id;if(i){this.log("Track "+a+" loaded ["+n.startSN+","+n.endSN+"],duration:"+n.totalduration);var s=i[a],o=0;if(n.live||null!==(r=s.details)&&void 0!==r&&r.live){var l=this.mainDetails;if(n.fragments[0]||(n.deltaUpdateFailed=!0),n.deltaUpdateFailed||!l)return;!s.details&&n.hasProgramDateTime&&l.hasProgramDateTime?(gt(n,l),o=n.fragments[0].start):o=this.alignPlaylists(n,s.details)}s.details=n,this.levelLastLoaded=a,this.startFragRequested||!this.mainDetails&&n.live||this.setStartPosition(s.details,o),this.state!==Nt||this.waitForCdnTuneIn(n)||(this.state=xt),this.tick()}else this.warn("Audio tracks were reset while loading level "+a)},l._handleFragmentLoadProgress=function(t){var e,r=t.frag,i=t.part,n=t.payload,a=this.config,s=this.trackId,l=this.levels;if(l){var u=l[s],h=u.details,d=a.defaultAudioCodec||u.audioCodec||"mp4a.40.2",c=this.transmuxer;c||(c=this.transmuxer=new Jt(this.hls,k.b.AUDIO,this._handleTransmuxComplete.bind(this),this._handleTransmuxerFlush.bind(this)));var f=this.initPTS[r.cc],g=null===(e=r.initSegment)||void 0===e?void 0:e.data;if(void 0!==f){var v=i?i.index:-1,p=-1!==v,m=new ut(r.level,r.sn,r.stats.chunkCount,n.byteLength,v,p);c.push(n,g,d,"",r,i,h.totalduration,!1,m,f)}else{o.b.log("Unknown video PTS for cc "+r.cc+", waiting for video PTS before demuxing audio frag "+r.sn+" of ["+h.startSN+" ,"+h.endSN+"],track "+s),(this.waitingData=this.waitingData||{frag:r,part:i,cache:new oe.a,complete:!1}).cache.push(new Uint8Array(n)),this.waitingVideoCC=this.videoTrackCC,this.state=Ht}}else this.warn("Audio tracks were reset while fragment load was in progress. Fragment "+r.sn+" of level "+r.level+" will not be buffered")},l._handleFragmentLoadComplete=function(e){this.waitingData?this.waitingData.complete=!0:t.prototype._handleFragmentLoadComplete.call(this,e)},l.onBufferReset=function(){this.mediaBuffer=this.videoBuffer=null,this.loadedmetadata=!1},l.onBufferCreated=function(t,e){var r=e.tracks.audio;r&&(this.mediaBuffer=r.buffer),e.tracks.video&&(this.videoBuffer=e.tracks.video.buffer)},l.onFragBuffered=function(t,e){var r=e.frag,i=e.part;r.type===k.b.AUDIO&&(this.fragContextChanged(r)?this.warn("Fragment "+r.sn+(i?" p: "+i.index:"")+" of level "+r.level+" finished buffering, but was aborted. state: "+this.state+", audioSwitch: "+this.audioSwitch):("initSegment"!==r.sn&&(this.fragPrevious=r,this.audioSwitch&&(this.audioSwitch=!1,this.hls.trigger(a.a.AUDIO_TRACK_SWITCHED,{id:this.trackId}))),this.fragBufferedComplete(r,i)))},l.onError=function(e,r){switch(r.details){case s.a.FRAG_LOAD_ERROR:case s.a.FRAG_LOAD_TIMEOUT:case s.a.KEY_LOAD_ERROR:case s.a.KEY_LOAD_TIMEOUT:this.onFragmentOrKeyLoadError(k.b.AUDIO,r);break;case s.a.AUDIO_TRACK_LOAD_ERROR:case s.a.AUDIO_TRACK_LOAD_TIMEOUT:this.state!==jt&&this.state!==Ot&&(this.state=r.fatal?jt:xt,this.warn(r.details+" while loading frag, switching to "+this.state+" state"));break;case s.a.BUFFER_FULL_ERROR:if("audio"===r.parent&&(this.state===Ut||this.state===Bt)){var i=!0,n=this.getFwdBufferInfo(this.mediaBuffer,k.b.AUDIO);n&&n.len>.5&&(i=!this.reduceMaxBufferLength(n.len)),i&&(this.warn("Buffer full error also media.currentTime is not buffered, flush audio buffer"),this.fragCurrent=null,t.prototype.flushMainBuffer.call(this,0,Number.POSITIVE_INFINITY,"audio")),this.resetLoadingState()}}},l.onBufferFlushed=function(t,e){e.type===u.a.AUDIO&&(this.bufferFlushed=!0)},l._handleTransmuxComplete=function(t){var e,r="audio",i=this.hls,n=t.remuxResult,s=t.chunkMeta,o=this.getCurrentContext(s);if(!o)return this.warn("The loading context changed while buffering fragment "+s.sn+" of level "+s.level+". This chunk will not be buffered."),void this.resetLiveStartWhenNotLoaded(s.level);var l=o.frag,h=o.part,d=n.audio,c=n.text,f=n.id3,g=n.initSegment;if(!this.fragContextChanged(l)){if(this.state=Ut,this.audioSwitch&&d&&this.completeAudioSwitch(),null!=g&&g.tracks&&(this._bufferInitSegment(g.tracks,l,s),i.trigger(a.a.FRAG_PARSING_INIT_SEGMENT,{frag:l,id:r,tracks:g.tracks})),d){var v=d.startPTS,p=d.endPTS,m=d.startDTS,y=d.endDTS;h&&(h.elementaryStreams[u.a.AUDIO]={startPTS:v,endPTS:p,startDTS:m,endDTS:y}),l.setElementaryStreamInfo(u.a.AUDIO,v,p,m,y),this.bufferFragmentData(d,l,h,s)}if(null!=f&&null!==(e=f.samples)&&void 0!==e&&e.length){var T=le({frag:l,id:r},f);i.trigger(a.a.FRAG_PARSING_METADATA,T)}if(c){var b=le({frag:l,id:r},c);i.trigger(a.a.FRAG_PARSING_USERDATA,b)}}},l._bufferInitSegment=function(t,e,r){if(this.state===Ut){t.video&&delete t.video;var i=t.audio;if(i){i.levelCodec=i.codec,i.id="audio",this.log("Init audio buffer, container:"+i.container+", codecs[parsed]=["+i.codec+"]"),this.hls.trigger(a.a.BUFFER_CODECS,t);var n=i.initSegment;if(null!=n&&n.byteLength){var s={type:"audio",frag:e,part:null,chunkMeta:r,parent:e.type,data:n};this.hls.trigger(a.a.BUFFER_APPENDING,s)}this.tick()}}},l.loadFragment=function(e,r,i){var a=this.fragmentTracker.getState(e);this.fragCurrent=e,(this.audioSwitch||a===tt.NOT_LOADED||a===tt.PARTIAL)&&("initSegment"===e.sn?this._loadInitSegment(e):r.live&&!Object(n.a)(this.initPTS[e.cc])?(this.log("Waiting for video PTS in continuity counter "+e.cc+" of live stream before loading audio fragment "+e.sn+" of level "+this.trackId),this.state=Ht):(this.startFragRequested=!0,t.prototype.loadFragment.call(this,e,r,i)))},l.completeAudioSwitch=function(){var e=this.hls,r=this.media,i=this.trackId;r&&(this.log("Switching audio track : flushing all audio"),t.prototype.flushMainBuffer.call(this,0,Number.POSITIVE_INFINITY,"audio")),this.audioSwitch=!1,e.trigger(a.a.AUDIO_TRACK_SWITCHED,{id:i})},i}(Wt);function de(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function ce(t,e){return(ce=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var fe=function(t){var e,r;function i(e){var r;return(r=t.call(this,e,"[audio-track-controller]")||this).tracks=[],r.groupId=null,r.tracksInGroup=[],r.trackId=-1,r.trackName="",r.selectDefaultTrack=!0,r.registerListeners(),r}r=t,(e=i).prototype=Object.create(r.prototype),e.prototype.constructor=e,ce(e,r);var n,o,l,u=i.prototype;return u.registerListeners=function(){var t=this.hls;t.on(a.a.MANIFEST_LOADING,this.onManifestLoading,this),t.on(a.a.MANIFEST_PARSED,this.onManifestParsed,this),t.on(a.a.LEVEL_LOADING,this.onLevelLoading,this),t.on(a.a.LEVEL_SWITCHING,this.onLevelSwitching,this),t.on(a.a.AUDIO_TRACK_LOADED,this.onAudioTrackLoaded,this),t.on(a.a.ERROR,this.onError,this)},u.unregisterListeners=function(){var t=this.hls;t.off(a.a.MANIFEST_LOADING,this.onManifestLoading,this),t.off(a.a.MANIFEST_PARSED,this.onManifestParsed,this),t.off(a.a.LEVEL_LOADING,this.onLevelLoading,this),t.off(a.a.LEVEL_SWITCHING,this.onLevelSwitching,this),t.off(a.a.AUDIO_TRACK_LOADED,this.onAudioTrackLoaded,this),t.off(a.a.ERROR,this.onError,this)},u.destroy=function(){this.unregisterListeners(),this.tracks.length=0,this.tracksInGroup.length=0,t.prototype.destroy.call(this)},u.onManifestLoading=function(){this.tracks=[],this.groupId=null,this.tracksInGroup=[],this.trackId=-1,this.trackName="",this.selectDefaultTrack=!0},u.onManifestParsed=function(t,e){this.tracks=e.audioTracks||[]},u.onAudioTrackLoaded=function(t,e){var r=e.id,i=e.details,n=this.tracksInGroup[r];if(n){var a=n.details;n.details=e.details,this.log("audioTrack "+r+" loaded ["+i.startSN+"-"+i.endSN+"]"),r===this.trackId&&(this.retryCount=0,this.playlistLoaded(r,e,a))}else this.warn("Invalid audio track id "+r)},u.onLevelLoading=function(t,e){this.switchLevel(e.level)},u.onLevelSwitching=function(t,e){this.switchLevel(e.level)},u.switchLevel=function(t){var e=this.hls.levels[t];if(null!=e&&e.audioGroupIds){var r=e.audioGroupIds[e.urlId];if(this.groupId!==r){this.groupId=r;var i=this.tracks.filter((function(t){return!r||t.groupId===r}));this.selectDefaultTrack&&!i.some((function(t){return t.default}))&&(this.selectDefaultTrack=!1),this.tracksInGroup=i;var n={audioTracks:i};this.log("Updating audio tracks, "+i.length+' track(s) found in "'+r+'" group-id'),this.hls.trigger(a.a.AUDIO_TRACKS_UPDATED,n),this.selectInitialTrack()}}},u.onError=function(e,r){t.prototype.onError.call(this,e,r),!r.fatal&&r.context&&r.context.type===k.a.AUDIO_TRACK&&r.context.id===this.trackId&&r.context.groupId===this.groupId&&this.retryLoadingOrFail(r)},u.setAudioTrack=function(t){var e=this.tracksInGroup;if(t<0||t>=e.length)this.warn("Invalid id passed to audio-track controller");else{this.clearTimer();var r=e[this.trackId];this.log("Now switching to audio-track index "+t);var i=e[t],n=i.id,s=i.groupId,o=void 0===s?"":s,l=i.name,u=i.type,h=i.url;if(this.trackId=t,this.trackName=l,this.selectDefaultTrack=!1,this.hls.trigger(a.a.AUDIO_TRACK_SWITCHING,{id:n,groupId:o,name:l,type:u,url:h}),!i.details||i.details.live){var d=this.switchParams(i.url,null==r?void 0:r.details);this.loadPlaylist(d)}}},u.selectInitialTrack=function(){this.tracksInGroup;var t=this.trackName,e=this.findTrackId(t)||this.findTrackId();-1!==e?this.setAudioTrack(e):(this.warn("No track found for running audio group-ID: "+this.groupId),this.hls.trigger(a.a.ERROR,{type:s.b.MEDIA_ERROR,details:s.a.AUDIO_TRACK_LOAD_ERROR,fatal:!0}))},u.findTrackId=function(t){for(var e=this.tracksInGroup,r=0;r<e.length;r++){var i=e[r];if((!this.selectDefaultTrack||i.default)&&(!t||t===i.name))return i.id}return-1},u.loadPlaylist=function(t){var e=this.tracksInGroup[this.trackId];if(this.shouldLoadTrack(e)){var r=e.id,i=e.groupId,n=e.url;if(t)try{n=t.addDirectives(n)}catch(t){this.warn("Could not construct new URL with HLS Delivery Directives: "+t)}this.log("loading audio-track playlist for id: "+r),this.clearTimer(),this.hls.trigger(a.a.AUDIO_TRACK_LOADING,{url:n,id:r,groupId:i,deliveryDirectives:t||null})}},n=i,(o=[{key:"audioTracks",get:function(){return this.tracksInGroup}},{key:"audioTrack",get:function(){return this.trackId},set:function(t){this.selectDefaultTrack=!1,this.setAudioTrack(t)}}])&&de(n.prototype,o),l&&de(n,l),i}(Q);function ge(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function ve(t,e){return(ve=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var pe=function(t){var e,r;function i(e,r){var i;return(i=t.call(this,e,r,"[subtitle-stream-controller]")||this).levels=[],i.currentTrackId=-1,i.tracksBuffered=[],i.mainDetails=null,i._registerListeners(),i}r=t,(e=i).prototype=Object.create(r.prototype),e.prototype.constructor=e,ve(e,r);var n,s,o,l=i.prototype;return l.onHandlerDestroying=function(){this._unregisterListeners(),this.mainDetails=null},l._registerListeners=function(){var t=this.hls;t.on(a.a.MEDIA_ATTACHED,this.onMediaAttached,this),t.on(a.a.MEDIA_DETACHING,this.onMediaDetaching,this),t.on(a.a.MANIFEST_LOADING,this.onManifestLoading,this),t.on(a.a.LEVEL_LOADED,this.onLevelLoaded,this),t.on(a.a.ERROR,this.onError,this),t.on(a.a.SUBTITLE_TRACKS_UPDATED,this.onSubtitleTracksUpdated,this),t.on(a.a.SUBTITLE_TRACK_SWITCH,this.onSubtitleTrackSwitch,this),t.on(a.a.SUBTITLE_TRACK_LOADED,this.onSubtitleTrackLoaded,this),t.on(a.a.SUBTITLE_FRAG_PROCESSED,this.onSubtitleFragProcessed,this),t.on(a.a.BUFFER_FLUSHING,this.onBufferFlushing,this)},l._unregisterListeners=function(){var t=this.hls;t.off(a.a.MEDIA_ATTACHED,this.onMediaAttached,this),t.off(a.a.MEDIA_DETACHING,this.onMediaDetaching,this),t.off(a.a.MANIFEST_LOADING,this.onManifestLoading,this),t.off(a.a.LEVEL_LOADED,this.onLevelLoaded,this),t.off(a.a.ERROR,this.onError,this),t.off(a.a.SUBTITLE_TRACKS_UPDATED,this.onSubtitleTracksUpdated,this),t.off(a.a.SUBTITLE_TRACK_SWITCH,this.onSubtitleTrackSwitch,this),t.off(a.a.SUBTITLE_TRACK_LOADED,this.onSubtitleTrackLoaded,this),t.off(a.a.SUBTITLE_FRAG_PROCESSED,this.onSubtitleFragProcessed,this),t.off(a.a.BUFFER_FLUSHING,this.onBufferFlushing,this)},l.startLoad=function(){this.stopLoad(),this.state=xt,this.setInterval(500),this.tick()},l.onManifestLoading=function(){this.mainDetails=null,this.fragmentTracker.removeAllFragments()},l.onLevelLoaded=function(t,e){this.mainDetails=e.details},l.onSubtitleFragProcessed=function(t,e){var r=e.frag,i=e.success;if(this.fragPrevious=r,this.state=xt,i){var n=this.tracksBuffered[this.currentTrackId];if(n){for(var a,s=r.start,o=0;o<n.length;o++)if(s>=n[o].start&&s<=n[o].end){a=n[o];break}var l=r.start+r.duration;a?a.end=l:(a={start:s,end:l},n.push(a)),this.fragmentTracker.fragBuffered(r)}}},l.onBufferFlushing=function(t,e){var r=e.startOffset,i=e.endOffset;if(0===r&&i!==Number.POSITIVE_INFINITY){var n=this.currentTrackId,a=this.levels;if(!a.length||!a[n]||!a[n].details)return;var s=i-a[n].details.targetduration;if(s<=0)return;e.endOffsetSubtitles=Math.max(0,s),this.tracksBuffered.forEach((function(t){for(var e=0;e<t.length;)if(t[e].end<=s)t.shift();else{if(!(t[e].start<s))break;t[e].start=s,e++}})),this.fragmentTracker.removeFragmentsInRange(r,s,k.b.SUBTITLE)}},l.onError=function(t,e){var r,i=e.frag;i&&i.type===k.b.SUBTITLE&&(null!==(r=this.fragCurrent)&&void 0!==r&&r.loader&&this.fragCurrent.loader.abort(),this.state=xt)},l.onSubtitleTracksUpdated=function(t,e){var r=this,i=e.subtitleTracks;this.tracksBuffered=[],this.levels=i.map((function(t){return new j(t)})),this.fragmentTracker.removeAllFragments(),this.fragPrevious=null,this.levels.forEach((function(t){r.tracksBuffered[t.id]=[]})),this.mediaBuffer=null},l.onSubtitleTrackSwitch=function(t,e){if(this.currentTrackId=e.id,this.levels.length&&-1!==this.currentTrackId){var r=this.levels[this.currentTrackId];null!=r&&r.details?this.mediaBuffer=this.mediaBufferTimeRanges:this.mediaBuffer=null,r&&this.setInterval(500)}else this.clearInterval()},l.onSubtitleTrackLoaded=function(t,e){var r,i=e.details,n=e.id,a=this.currentTrackId,s=this.levels;if(s.length){var o=s[a];if(!(n>=s.length||n!==a)&&o){if(this.mediaBuffer=this.mediaBufferTimeRanges,i.live||null!==(r=o.details)&&void 0!==r&&r.live){var l=this.mainDetails;if(i.deltaUpdateFailed||!l)return;var u=l.fragments[0];if(o.details)0===this.alignPlaylists(i,o.details)&&u&&z(i,u.start);else i.hasProgramDateTime&&l.hasProgramDateTime?gt(i,l):u&&z(i,u.start)}if(o.details=i,this.levelLastLoaded=n,this.tick(),i.live&&!this.fragCurrent&&this.media&&this.state===xt)pt(null,i.fragments,this.media.currentTime,0)||(this.warn("Subtitle playlist not aligned with playback"),o.details=void 0)}}},l._handleFragmentLoadComplete=function(t){var e=t.frag,r=t.payload,i=e.decryptdata,n=this.hls;if(!this.fragContextChanged(e)&&r&&r.byteLength>0&&i&&i.key&&i.iv&&"AES-128"===i.method){var s=performance.now();this.decrypter.webCryptoDecrypt(new Uint8Array(r),i.key.buffer,i.iv.buffer).then((function(t){var r=performance.now();n.trigger(a.a.FRAG_DECRYPTED,{frag:e,payload:t,stats:{tstart:s,tdecrypt:r}})}))}},l.doTick=function(){if(this.media){if(this.state===xt){var t,e=this.currentTrackId,r=this.levels;if(!r.length||!r[e]||!r[e].details)return;var i=r[e].details,n=i.targetduration,a=this.config,s=this.media,o=lt.bufferedInfo(this.mediaBufferTimeRanges,s.currentTime-n,a.maxBufferHole),l=o.end;if(o.len>this.getMaxBufferLength()+n)return;var u,h=i.fragments,d=h.length,c=i.edge,f=this.fragPrevious;if(l<c)!(u=pt(f,h,l,a.maxFragLookUpTolerance))&&f&&f.start<h[0].start&&(u=h[0]);else u=h[d-1];null!==(t=u)&&void 0!==t&&t.encrypted?this.loadKey(u,i):u&&this.fragmentTracker.getState(u)===tt.NOT_LOADED&&this.loadFragment(u,i,l)}}else this.state=xt},l.loadFragment=function(e,r,i){this.fragCurrent=e,t.prototype.loadFragment.call(this,e,r,i)},n=i,(s=[{key:"mediaBufferTimeRanges",get:function(){return this.tracksBuffered[this.currentTrackId]||[]}}])&&ge(n.prototype,s),o&&ge(n,o),i}(Wt);function me(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function ye(t,e){return(ye=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function Te(t){for(var e=[],r=0;r<t.length;r++){var i=t[r];"subtitles"===i.kind&&i.label&&e.push(t[r])}return e}var be,Ee=function(t){var e,r;function i(e){var r;return(r=t.call(this,e,"[subtitle-track-controller]")||this).media=null,r.tracks=[],r.groupId=null,r.tracksInGroup=[],r.trackId=-1,r.selectDefaultTrack=!0,r.queuedDefaultTrack=-1,r.trackChangeListener=function(){return r.onTextTracksChanged()},r.asyncPollTrackChange=function(){return r.pollTrackChange(0)},r.useTextTrackPolling=!1,r.subtitlePollingInterval=-1,r.subtitleDisplay=!0,r.registerListeners(),r}r=t,(e=i).prototype=Object.create(r.prototype),e.prototype.constructor=e,ye(e,r);var n,s,o,l=i.prototype;return l.destroy=function(){this.unregisterListeners(),this.tracks.length=0,this.tracksInGroup.length=0,this.trackChangeListener=this.asyncPollTrackChange=null,t.prototype.destroy.call(this)},l.registerListeners=function(){var t=this.hls;t.on(a.a.MEDIA_ATTACHED,this.onMediaAttached,this),t.on(a.a.MEDIA_DETACHING,this.onMediaDetaching,this),t.on(a.a.MANIFEST_LOADING,this.onManifestLoading,this),t.on(a.a.MANIFEST_PARSED,this.onManifestParsed,this),t.on(a.a.LEVEL_LOADING,this.onLevelLoading,this),t.on(a.a.LEVEL_SWITCHING,this.onLevelSwitching,this),t.on(a.a.SUBTITLE_TRACK_LOADED,this.onSubtitleTrackLoaded,this),t.on(a.a.ERROR,this.onError,this)},l.unregisterListeners=function(){var t=this.hls;t.off(a.a.MEDIA_ATTACHED,this.onMediaAttached,this),t.off(a.a.MEDIA_DETACHING,this.onMediaDetaching,this),t.off(a.a.MANIFEST_LOADING,this.onManifestLoading,this),t.off(a.a.MANIFEST_PARSED,this.onManifestParsed,this),t.off(a.a.LEVEL_LOADING,this.onLevelLoading,this),t.off(a.a.LEVEL_SWITCHING,this.onLevelSwitching,this),t.off(a.a.SUBTITLE_TRACK_LOADED,this.onSubtitleTrackLoaded,this),t.off(a.a.ERROR,this.onError,this)},l.onMediaAttached=function(t,e){this.media=e.media,this.media&&(this.queuedDefaultTrack>-1&&(this.subtitleTrack=this.queuedDefaultTrack,this.queuedDefaultTrack=-1),this.useTextTrackPolling=!(this.media.textTracks&&"onchange"in this.media.textTracks),this.useTextTrackPolling?this.pollTrackChange(500):this.media.textTracks.addEventListener("change",this.asyncPollTrackChange))},l.pollTrackChange=function(t){self.clearInterval(this.subtitlePollingInterval),this.subtitlePollingInterval=self.setInterval(this.trackChangeListener,t)},l.onMediaDetaching=function(){this.media&&(self.clearInterval(this.subtitlePollingInterval),this.useTextTrackPolling||this.media.textTracks.removeEventListener("change",this.asyncPollTrackChange),this.trackId>-1&&(this.queuedDefaultTrack=this.trackId),Te(this.media.textTracks).forEach((function(t){x(t)})),this.subtitleTrack=-1,this.media=null)},l.onManifestLoading=function(){this.tracks=[],this.groupId=null,this.tracksInGroup=[],this.trackId=-1,this.selectDefaultTrack=!0},l.onManifestParsed=function(t,e){this.tracks=e.subtitleTracks},l.onSubtitleTrackLoaded=function(t,e){var r=e.id,i=e.details,n=this.trackId,a=this.tracksInGroup[n];if(a){var s=a.details;a.details=e.details,this.log("subtitle track "+r+" loaded ["+i.startSN+"-"+i.endSN+"]"),r===this.trackId&&(this.retryCount=0,this.playlistLoaded(r,e,s))}else this.warn("Invalid subtitle track id "+r)},l.onLevelLoading=function(t,e){this.switchLevel(e.level)},l.onLevelSwitching=function(t,e){this.switchLevel(e.level)},l.switchLevel=function(t){var e=this.hls.levels[t];if(null!=e&&e.textGroupIds){var r=e.textGroupIds[e.urlId];if(this.groupId!==r){var i=this.tracksInGroup?this.tracksInGroup[this.trackId]:void 0,n=this.tracks.filter((function(t){return!r||t.groupId===r}));this.tracksInGroup=n;var s=this.findTrackId(null==i?void 0:i.name)||this.findTrackId();this.groupId=r;var o={subtitleTracks:n};this.log("Updating subtitle tracks, "+n.length+' track(s) found in "'+r+'" group-id'),this.hls.trigger(a.a.SUBTITLE_TRACKS_UPDATED,o),-1!==s&&this.setSubtitleTrack(s,i)}}},l.findTrackId=function(t){for(var e=this.tracksInGroup,r=0;r<e.length;r++){var i=e[r];if((!this.selectDefaultTrack||i.default)&&(!t||t===i.name))return i.id}return-1},l.onError=function(e,r){t.prototype.onError.call(this,e,r),!r.fatal&&r.context&&r.context.type===k.a.SUBTITLE_TRACK&&r.context.id===this.trackId&&r.context.groupId===this.groupId&&this.retryLoadingOrFail(r)},l.loadPlaylist=function(t){var e=this.tracksInGroup[this.trackId];if(this.shouldLoadTrack(e)){var r=e.id,i=e.groupId,n=e.url;if(t)try{n=t.addDirectives(n)}catch(t){this.warn("Could not construct new URL with HLS Delivery Directives: "+t)}this.log("Loading subtitle playlist for id "+r),this.hls.trigger(a.a.SUBTITLE_TRACK_LOADING,{url:n,id:r,groupId:i,deliveryDirectives:t||null})}},l.toggleTrackModes=function(t){var e=this,r=this.media,i=this.subtitleDisplay,n=this.trackId;if(r){var a=Te(r.textTracks),s=a.filter((function(t){return t.groupId===e.groupId}));if(-1===t)[].slice.call(a).forEach((function(t){t.mode="disabled"}));else{var o=s[n];o&&(o.mode="disabled")}var l=s[t];l&&(l.mode=i?"showing":"hidden")}},l.setSubtitleTrack=function(t,e){var r,i=this.tracksInGroup;if(this.media){if(this.trackId!==t&&this.toggleTrackModes(t),!(this.trackId===t&&(-1===t||null!==(r=i[t])&&void 0!==r&&r.details)||t<-1||t>=i.length)){this.clearTimer();var n=i[t];if(this.log("Switching to subtitle track "+t),this.trackId=t,n){var s=n.id,o=n.groupId,l=void 0===o?"":o,u=n.name,h=n.type,d=n.url;this.hls.trigger(a.a.SUBTITLE_TRACK_SWITCH,{id:s,groupId:l,name:u,type:h,url:d});var c=this.switchParams(n.url,null==e?void 0:e.details);this.loadPlaylist(c)}else this.hls.trigger(a.a.SUBTITLE_TRACK_SWITCH,{id:t})}}else this.queuedDefaultTrack=t},l.onTextTracksChanged=function(){if(this.useTextTrackPolling||self.clearInterval(this.subtitlePollingInterval),this.media&&this.hls.config.renderTextTracksNatively){for(var t=-1,e=Te(this.media.textTracks),r=0;r<e.length;r++)if("hidden"===e[r].mode)t=r;else if("showing"===e[r].mode){t=r;break}this.subtitleTrack!==t&&(this.subtitleTrack=t)}},n=i,(s=[{key:"subtitleTracks",get:function(){return this.tracksInGroup}},{key:"subtitleTrack",get:function(){return this.trackId},set:function(t){this.selectDefaultTrack=!1;var e=this.tracksInGroup?this.tracksInGroup[this.trackId]:void 0;this.setSubtitleTrack(t,e)}}])&&me(n.prototype,s),o&&me(n,o),i}(Q),Se=function(){function t(t){this.buffers=void 0,this.queues={video:[],audio:[],audiovideo:[]},this.buffers=t}var e=t.prototype;return e.append=function(t,e){var r=this.queues[e];r.push(t),1===r.length&&this.buffers[e]&&this.executeNext(e)},e.insertAbort=function(t,e){this.queues[e].unshift(t),this.executeNext(e)},e.appendBlocker=function(t){var e,r=new Promise((function(t){e=t})),i={execute:e,onStart:function(){},onComplete:function(){},onError:function(){}};return this.append(i,t),r},e.executeNext=function(t){var e=this.buffers,r=this.queues,i=e[t],n=r[t];if(n.length){var a=n[0];try{a.execute()}catch(e){o.b.warn("[buffer-operation-queue]: Unhandled exception executing the current operation"),a.onError(e),i&&i.updating||(n.shift(),this.executeNext(t))}}},e.shiftAndExecuteNext=function(t){this.queues[t].shift(),this.executeNext(t)},e.current=function(t){return this.queues[t][0]},t}(),Le=Yt(),Ae=/([ha]vc.)(?:\.[^.,]+)+/,Re=function(){function t(t){var e=this;this.details=null,this._objectUrl=null,this.operationQueue=void 0,this.listeners=void 0,this.hls=void 0,this.bufferCodecEventsExpected=0,this._bufferCodecEventsTotal=0,this.media=null,this.mediaSource=null,this.appendError=0,this.tracks={},this.pendingTracks={},this.sourceBuffer=void 0,this._onMediaSourceOpen=function(){var t=e.hls,r=e.media,i=e.mediaSource;o.b.log("[buffer-controller]: Media source opened"),r&&(e.updateMediaElementDuration(),t.trigger(a.a.MEDIA_ATTACHED,{media:r})),i&&i.removeEventListener("sourceopen",e._onMediaSourceOpen),e.checkPendingTracks()},this._onMediaSourceClose=function(){o.b.log("[buffer-controller]: Media source closed")},this._onMediaSourceEnded=function(){o.b.log("[buffer-controller]: Media source ended")},this.hls=t,this._initSourceBuffer(),this.registerListeners()}var e=t.prototype;return e.hasSourceTypes=function(){return this.getSourceBufferTypes().length>0||Object.keys(this.pendingTracks).length>0},e.destroy=function(){this.unregisterListeners(),this.details=null},e.registerListeners=function(){var t=this.hls;t.on(a.a.MEDIA_ATTACHING,this.onMediaAttaching,this),t.on(a.a.MEDIA_DETACHING,this.onMediaDetaching,this),t.on(a.a.MANIFEST_PARSED,this.onManifestParsed,this),t.on(a.a.BUFFER_RESET,this.onBufferReset,this),t.on(a.a.BUFFER_APPENDING,this.onBufferAppending,this),t.on(a.a.BUFFER_CODECS,this.onBufferCodecs,this),t.on(a.a.BUFFER_EOS,this.onBufferEos,this),t.on(a.a.BUFFER_FLUSHING,this.onBufferFlushing,this),t.on(a.a.LEVEL_UPDATED,this.onLevelUpdated,this),t.on(a.a.FRAG_PARSED,this.onFragParsed,this),t.on(a.a.FRAG_CHANGED,this.onFragChanged,this)},e.unregisterListeners=function(){var t=this.hls;t.off(a.a.MEDIA_ATTACHING,this.onMediaAttaching,this),t.off(a.a.MEDIA_DETACHING,this.onMediaDetaching,this),t.off(a.a.MANIFEST_PARSED,this.onManifestParsed,this),t.off(a.a.BUFFER_RESET,this.onBufferReset,this),t.off(a.a.BUFFER_APPENDING,this.onBufferAppending,this),t.off(a.a.BUFFER_CODECS,this.onBufferCodecs,this),t.off(a.a.BUFFER_EOS,this.onBufferEos,this),t.off(a.a.BUFFER_FLUSHING,this.onBufferFlushing,this),t.off(a.a.LEVEL_UPDATED,this.onLevelUpdated,this),t.off(a.a.FRAG_PARSED,this.onFragParsed,this),t.off(a.a.FRAG_CHANGED,this.onFragChanged,this)},e._initSourceBuffer=function(){this.sourceBuffer={},this.operationQueue=new Se(this.sourceBuffer),this.listeners={audio:[],video:[],audiovideo:[]}},e.onManifestParsed=function(t,e){var r=2;(e.audio&&!e.video||!e.altAudio)&&(r=1),this.bufferCodecEventsExpected=this._bufferCodecEventsTotal=r,this.details=null,o.b.log(this.bufferCodecEventsExpected+" bufferCodec event(s) expected")},e.onMediaAttaching=function(t,e){var r=this.media=e.media;if(r&&Le){var i=this.mediaSource=new Le;i.addEventListener("sourceopen",this._onMediaSourceOpen),i.addEventListener("sourceended",this._onMediaSourceEnded),i.addEventListener("sourceclose",this._onMediaSourceClose),r.src=self.URL.createObjectURL(i),this._objectUrl=r.src}},e.onMediaDetaching=function(){var t=this.media,e=this.mediaSource,r=this._objectUrl;if(e){if(o.b.log("[buffer-controller]: media source detaching"),"open"===e.readyState)try{e.endOfStream()}catch(t){o.b.warn("[buffer-controller]: onMediaDetaching: "+t.message+" while calling endOfStream")}this.onBufferReset(),e.removeEventListener("sourceopen",this._onMediaSourceOpen),e.removeEventListener("sourceended",this._onMediaSourceEnded),e.removeEventListener("sourceclose",this._onMediaSourceClose),t&&(r&&self.URL.revokeObjectURL(r),t.src===r?(t.removeAttribute("src"),t.load()):o.b.warn("[buffer-controller]: media.src was changed by a third party - skip cleanup")),this.mediaSource=null,this.media=null,this._objectUrl=null,this.bufferCodecEventsExpected=this._bufferCodecEventsTotal,this.pendingTracks={},this.tracks={}}this.hls.trigger(a.a.MEDIA_DETACHED,void 0)},e.onBufferReset=function(){var t=this;this.getSourceBufferTypes().forEach((function(e){var r=t.sourceBuffer[e];try{r&&(t.removeBufferListeners(e),t.mediaSource&&t.mediaSource.removeSourceBuffer(r),t.sourceBuffer[e]=void 0)}catch(t){o.b.warn("[buffer-controller]: Failed to reset the "+e+" buffer",t)}})),this._initSourceBuffer()},e.onBufferCodecs=function(t,e){var r=this,i=this.getSourceBufferTypes().length;Object.keys(e).forEach((function(t){if(i){var n=r.tracks[t];if(n&&"function"==typeof n.buffer.changeType){var a=e[t],s=a.codec,o=a.levelCodec,l=a.container;if((n.levelCodec||n.codec).replace(Ae,"$1")!==(o||s).replace(Ae,"$1")){var u=l+";codecs="+(o||s);r.appendChangeType(t,u)}}}else r.pendingTracks[t]=e[t]})),i||(this.bufferCodecEventsExpected=Math.max(this.bufferCodecEventsExpected-1,0),this.mediaSource&&"open"===this.mediaSource.readyState&&this.checkPendingTracks())},e.appendChangeType=function(t,e){var r=this,i=this.operationQueue,n={execute:function(){var n=r.sourceBuffer[t];n&&(o.b.log("[buffer-controller]: changing "+t+" sourceBuffer type to "+e),n.changeType(e)),i.shiftAndExecuteNext(t)},onStart:function(){},onComplete:function(){},onError:function(e){o.b.warn("[buffer-controller]: Failed to change "+t+" SourceBuffer type",e)}};i.append(n,t)},e.onBufferAppending=function(t,e){var r=this,i=this.hls,n=this.operationQueue,l=this.tracks,u=e.data,h=e.type,d=e.frag,c=e.part,f=e.chunkMeta,g=f.buffering[h],v=self.performance.now();g.start=v;var p=d.stats.buffering,m=c?c.stats.buffering:null;0===p.start&&(p.start=v),m&&0===m.start&&(m.start=v);var y=l.audio,T="audio"===h&&1===f.id&&"audio/mpeg"===(null==y?void 0:y.container),b={execute:function(){if(g.executeStart=self.performance.now(),T){var t=r.sourceBuffer[h];if(t){var e=d.start-t.timestampOffset;Math.abs(e)>=.1&&(o.b.log("[buffer-controller]: Updating audio SourceBuffer timestampOffset to "+d.start+" (delta: "+e+") sn: "+d.sn+")"),t.timestampOffset=d.start)}}r.appendExecutor(u,h)},onStart:function(){},onComplete:function(){var t=self.performance.now();g.executeEnd=g.end=t,0===p.first&&(p.first=t),m&&0===m.first&&(m.first=t);var e=r.sourceBuffer,i={};for(var n in e)i[n]=lt.getBuffered(e[n]);r.appendError=0,r.hls.trigger(a.a.BUFFER_APPENDED,{type:h,frag:d,part:c,chunkMeta:f,parent:d.type,timeRanges:i})},onError:function(t){o.b.error("[buffer-controller]: Error encountered while trying to append to the "+h+" SourceBuffer",t);var e={type:s.b.MEDIA_ERROR,parent:d.type,details:s.a.BUFFER_APPEND_ERROR,err:t,fatal:!1};t.code===DOMException.QUOTA_EXCEEDED_ERR?e.details=s.a.BUFFER_FULL_ERROR:(r.appendError++,e.details=s.a.BUFFER_APPEND_ERROR,r.appendError>i.config.appendErrorMaxRetry&&(o.b.error("[buffer-controller]: Failed "+i.config.appendErrorMaxRetry+" times to append segment in sourceBuffer"),e.fatal=!0)),i.trigger(a.a.ERROR,e)}};n.append(b,h)},e.onBufferFlushing=function(t,e){var r=this,i=this.operationQueue,n=function(t){return{execute:r.removeExecutor.bind(r,t,e.startOffset,e.endOffset),onStart:function(){},onComplete:function(){r.hls.trigger(a.a.BUFFER_FLUSHED,{type:t})},onError:function(e){o.b.warn("[buffer-controller]: Failed to remove from "+t+" SourceBuffer",e)}}};e.type?i.append(n(e.type),e.type):this.getSourceBufferTypes().forEach((function(t){i.append(n(t),t)}))},e.onFragParsed=function(t,e){var r=this,i=e.frag,n=e.part,s=[],l=n?n.elementaryStreams:i.elementaryStreams;l[u.a.AUDIOVIDEO]?s.push("audiovideo"):(l[u.a.AUDIO]&&s.push("audio"),l[u.a.VIDEO]&&s.push("video"));0===s.length&&o.b.warn("Fragments must have at least one ElementaryStreamType set. type: "+i.type+" level: "+i.level+" sn: "+i.sn),this.blockBuffers((function(){var t=self.performance.now();i.stats.buffering.end=t,n&&(n.stats.buffering.end=t);var e=n?n.stats:i.stats;r.hls.trigger(a.a.FRAG_BUFFERED,{frag:i,part:n,stats:e,id:i.type})}),s)},e.onFragChanged=function(t,e){this.flushBackBuffer()},e.onBufferEos=function(t,e){var r=this;this.getSourceBufferTypes().reduce((function(t,i){var n=r.sourceBuffer[i];return e.type&&e.type!==i||n&&!n.ended&&(n.ended=!0,o.b.log("[buffer-controller]: "+i+" sourceBuffer now EOS")),t&&!(n&&!n.ended)}),!0)&&this.blockBuffers((function(){var t=r.mediaSource;t&&"open"===t.readyState&&t.endOfStream()}))},e.onLevelUpdated=function(t,e){var r=e.details;r.fragments.length&&(this.details=r,this.getSourceBufferTypes().length?this.blockBuffers(this.updateMediaElementDuration.bind(this)):this.updateMediaElementDuration())},e.flushBackBuffer=function(){var t=this.hls,e=this.details,r=this.media,i=this.sourceBuffer;if(r&&null!==e){var s=this.getSourceBufferTypes();if(s.length){var o=e.live&&null!==t.config.liveBackBufferLength?t.config.liveBackBufferLength:t.config.backBufferLength;if(Object(n.a)(o)&&!(o<0)){var l=r.currentTime,u=e.levelTargetDuration,h=Math.max(o,u),d=Math.floor(l/u)*u-h;s.forEach((function(r){var n=i[r];if(n){var s=lt.getBuffered(n);s.length>0&&d>s.start(0)&&(t.trigger(a.a.BACK_BUFFER_REACHED,{bufferEnd:d}),e.live&&t.trigger(a.a.LIVE_BACK_BUFFER_REACHED,{bufferEnd:d}),t.trigger(a.a.BUFFER_FLUSHING,{startOffset:0,endOffset:d,type:r}))}}))}}}},e.updateMediaElementDuration=function(){if(this.details&&this.media&&this.mediaSource&&"open"===this.mediaSource.readyState){var t=this.details,e=this.hls,r=this.media,i=this.mediaSource,a=t.fragments[0].start+t.totalduration,s=r.duration,l=Object(n.a)(i.duration)?i.duration:0;t.live&&e.config.liveDurationInfinity?(o.b.log("[buffer-controller]: Media Source duration is set to Infinity"),i.duration=1/0,this.updateSeekableRange(t)):(a>l&&a>s||!Object(n.a)(s))&&(o.b.log("[buffer-controller]: Updating Media Source duration to "+a.toFixed(3)),i.duration=a)}},e.updateSeekableRange=function(t){var e=this.mediaSource,r=t.fragments;if(r.length&&t.live&&null!=e&&e.setLiveSeekableRange){var i=Math.max(0,r[0].start),n=Math.max(i,i+t.totalduration);e.setLiveSeekableRange(i,n)}},e.checkPendingTracks=function(){var t=this.bufferCodecEventsExpected,e=this.operationQueue,r=this.pendingTracks,i=Object.keys(r).length;if(i&&!t||2===i){this.createSourceBuffers(r),this.pendingTracks={};var n=this.getSourceBufferTypes();if(0===n.length)return void this.hls.trigger(a.a.ERROR,{type:s.b.MEDIA_ERROR,details:s.a.BUFFER_INCOMPATIBLE_CODECS_ERROR,fatal:!0,reason:"could not create source buffer for media codec(s)"});n.forEach((function(t){e.executeNext(t)}))}},e.createSourceBuffers=function(t){var e=this.sourceBuffer,r=this.mediaSource;if(!r)throw Error("createSourceBuffers called when mediaSource was null");var i=0;for(var n in t)if(!e[n]){var l=t[n];if(!l)throw Error("source buffer exists for track "+n+", however track does not");var u=l.levelCodec||l.codec,h=l.container+";codecs="+u;o.b.log("[buffer-controller]: creating sourceBuffer("+h+")");try{var d=e[n]=r.addSourceBuffer(h),c=n;this.addBufferListener(c,"updatestart",this._onSBUpdateStart),this.addBufferListener(c,"updateend",this._onSBUpdateEnd),this.addBufferListener(c,"error",this._onSBUpdateError),this.tracks[n]={buffer:d,codec:u,container:l.container,levelCodec:l.levelCodec,id:l.id},i++}catch(t){o.b.error("[buffer-controller]: error while trying to add sourceBuffer: "+t.message),this.hls.trigger(a.a.ERROR,{type:s.b.MEDIA_ERROR,details:s.a.BUFFER_ADD_CODEC_ERROR,fatal:!1,error:t,mimeType:h})}}i&&this.hls.trigger(a.a.BUFFER_CREATED,{tracks:this.tracks})},e._onSBUpdateStart=function(t){this.operationQueue.current(t).onStart()},e._onSBUpdateEnd=function(t){var e=this.operationQueue;e.current(t).onComplete(),e.shiftAndExecuteNext(t)},e._onSBUpdateError=function(t,e){o.b.error("[buffer-controller]: "+t+" SourceBuffer error",e),this.hls.trigger(a.a.ERROR,{type:s.b.MEDIA_ERROR,details:s.a.BUFFER_APPENDING_ERROR,fatal:!1});var r=this.operationQueue.current(t);r&&r.onError(e)},e.removeExecutor=function(t,e,r){var i=this.media,a=this.mediaSource,s=this.operationQueue,l=this.sourceBuffer[t];if(!i||!a||!l)return o.b.warn("[buffer-controller]: Attempting to remove from the "+t+" SourceBuffer, but it does not exist"),void s.shiftAndExecuteNext(t);var u=Object(n.a)(i.duration)?i.duration:1/0,h=Object(n.a)(a.duration)?a.duration:1/0,d=Math.max(0,e),c=Math.min(r,u,h);c>d?(o.b.log("[buffer-controller]: Removing ["+d+","+c+"] from the "+t+" SourceBuffer"),l.remove(d,c)):s.shiftAndExecuteNext(t)},e.appendExecutor=function(t,e){var r=this.operationQueue,i=this.sourceBuffer[e];if(!i)return o.b.warn("[buffer-controller]: Attempting to append to the "+e+" SourceBuffer, but it does not exist"),void r.shiftAndExecuteNext(e);i.ended=!1,i.appendBuffer(t)},e.blockBuffers=function(t,e){var r=this;if(void 0===e&&(e=this.getSourceBufferTypes()),!e.length)return o.b.log("[buffer-controller]: Blocking operation requested, but no SourceBuffers exist"),void Promise.resolve(t);var i=this.operationQueue,n=e.map((function(t){return i.appendBlocker(t)}));Promise.all(n).then((function(){t(),e.forEach((function(t){var e=r.sourceBuffer[t];e&&e.updating||i.shiftAndExecuteNext(t)}))}))},e.getSourceBufferTypes=function(){return Object.keys(this.sourceBuffer)},e.addBufferListener=function(t,e,r){var i=this.sourceBuffer[t];if(i){var n=r.bind(this,t);this.listeners[t].push({event:e,listener:n}),i.addEventListener(e,n)}},e.removeBufferListeners=function(t){var e=this.sourceBuffer[t];e&&this.listeners[t].forEach((function(t){e.removeEventListener(t.event,t.listener)}))},t}(),De={42:225,92:233,94:237,95:243,96:250,123:231,124:247,125:209,126:241,127:9608,128:174,129:176,130:189,131:191,132:8482,133:162,134:163,135:9834,136:224,137:32,138:232,139:226,140:234,141:238,142:244,143:251,144:193,145:201,146:211,147:218,148:220,149:252,150:8216,151:161,152:42,153:8217,154:9473,155:169,156:8480,157:8226,158:8220,159:8221,160:192,161:194,162:199,163:200,164:202,165:203,166:235,167:206,168:207,169:239,170:212,171:217,172:249,173:219,174:171,175:187,176:195,177:227,178:205,179:204,180:236,181:210,182:242,183:213,184:245,185:123,186:125,187:92,188:94,189:95,190:124,191:8764,192:196,193:228,194:214,195:246,196:223,197:165,198:164,199:9475,200:197,201:229,202:216,203:248,204:9487,205:9491,206:9495,207:9499},ke=function(t){var e=t;return De.hasOwnProperty(t)&&(e=De[t]),String.fromCharCode(e)},_e={17:1,18:3,21:5,22:7,23:9,16:11,19:12,20:14},Ie={17:2,18:4,21:6,22:8,23:10,19:13,20:15},Ce={25:1,26:3,29:5,30:7,31:9,24:11,27:12,28:14},we={25:2,26:4,29:6,30:8,31:10,27:13,28:15},Oe=["white","green","blue","cyan","red","yellow","magenta","black","transparent"];!function(t){t[t.ERROR=0]="ERROR",t[t.TEXT=1]="TEXT",t[t.WARNING=2]="WARNING",t[t.INFO=2]="INFO",t[t.DEBUG=3]="DEBUG",t[t.DATA=3]="DATA"}(be||(be={}));var xe=function(){function t(){this.time=null,this.verboseLevel=be.ERROR}return t.prototype.log=function(t,e){this.verboseLevel>=t&&o.b.log(this.time+" ["+t+"] "+e)},t}(),Pe=function(t){for(var e=[],r=0;r<t.length;r++)e.push(t[r].toString(16));return e},Me=function(){function t(t,e,r,i,n){this.foreground=void 0,this.underline=void 0,this.italics=void 0,this.background=void 0,this.flash=void 0,this.foreground=t||"white",this.underline=e||!1,this.italics=r||!1,this.background=i||"black",this.flash=n||!1}var e=t.prototype;return e.reset=function(){this.foreground="white",this.underline=!1,this.italics=!1,this.background="black",this.flash=!1},e.setStyles=function(t){for(var e=["foreground","underline","italics","background","flash"],r=0;r<e.length;r++){var i=e[r];t.hasOwnProperty(i)&&(this[i]=t[i])}},e.isDefault=function(){return"white"===this.foreground&&!this.underline&&!this.italics&&"black"===this.background&&!this.flash},e.equals=function(t){return this.foreground===t.foreground&&this.underline===t.underline&&this.italics===t.italics&&this.background===t.background&&this.flash===t.flash},e.copy=function(t){this.foreground=t.foreground,this.underline=t.underline,this.italics=t.italics,this.background=t.background,this.flash=t.flash},e.toString=function(){return"color="+this.foreground+", underline="+this.underline+", italics="+this.italics+", background="+this.background+", flash="+this.flash},t}(),Fe=function(){function t(t,e,r,i,n,a){this.uchar=void 0,this.penState=void 0,this.uchar=t||" ",this.penState=new Me(e,r,i,n,a)}var e=t.prototype;return e.reset=function(){this.uchar=" ",this.penState.reset()},e.setChar=function(t,e){this.uchar=t,this.penState.copy(e)},e.setPenState=function(t){this.penState.copy(t)},e.equals=function(t){return this.uchar===t.uchar&&this.penState.equals(t.penState)},e.copy=function(t){this.uchar=t.uchar,this.penState.copy(t.penState)},e.isEmpty=function(){return" "===this.uchar&&this.penState.isDefault()},t}(),Ne=function(){function t(t){this.chars=void 0,this.pos=void 0,this.currPenState=void 0,this.cueStartTime=void 0,this.logger=void 0,this.chars=[];for(var e=0;e<100;e++)this.chars.push(new Fe);this.logger=t,this.pos=0,this.currPenState=new Me}var e=t.prototype;return e.equals=function(t){for(var e=!0,r=0;r<100;r++)if(!this.chars[r].equals(t.chars[r])){e=!1;break}return e},e.copy=function(t){for(var e=0;e<100;e++)this.chars[e].copy(t.chars[e])},e.isEmpty=function(){for(var t=!0,e=0;e<100;e++)if(!this.chars[e].isEmpty()){t=!1;break}return t},e.setCursor=function(t){this.pos!==t&&(this.pos=t),this.pos<0?(this.logger.log(be.DEBUG,"Negative cursor position "+this.pos),this.pos=0):this.pos>100&&(this.logger.log(be.DEBUG,"Too large cursor position "+this.pos),this.pos=100)},e.moveCursor=function(t){var e=this.pos+t;if(t>1)for(var r=this.pos+1;r<e+1;r++)this.chars[r].setPenState(this.currPenState);this.setCursor(e)},e.backSpace=function(){this.moveCursor(-1),this.chars[this.pos].setChar(" ",this.currPenState)},e.insertChar=function(t){t>=144&&this.backSpace();var e=ke(t);this.pos>=100?this.logger.log(be.ERROR,"Cannot insert "+t.toString(16)+" ("+e+") at position "+this.pos+". Skipping it!"):(this.chars[this.pos].setChar(e,this.currPenState),this.moveCursor(1))},e.clearFromPos=function(t){var e;for(e=t;e<100;e++)this.chars[e].reset()},e.clear=function(){this.clearFromPos(0),this.pos=0,this.currPenState.reset()},e.clearToEndOfRow=function(){this.clearFromPos(this.pos)},e.getTextString=function(){for(var t=[],e=!0,r=0;r<100;r++){var i=this.chars[r].uchar;" "!==i&&(e=!1),t.push(i)}return e?"":t.join("")},e.setPenStyles=function(t){this.currPenState.setStyles(t),this.chars[this.pos].setPenState(this.currPenState)},t}(),Ue=function(){function t(t){this.rows=void 0,this.currRow=void 0,this.nrRollUpRows=void 0,this.lastOutputScreen=void 0,this.logger=void 0,this.rows=[];for(var e=0;e<15;e++)this.rows.push(new Ne(t));this.logger=t,this.currRow=14,this.nrRollUpRows=null,this.lastOutputScreen=null,this.reset()}var e=t.prototype;return e.reset=function(){for(var t=0;t<15;t++)this.rows[t].clear();this.currRow=14},e.equals=function(t){for(var e=!0,r=0;r<15;r++)if(!this.rows[r].equals(t.rows[r])){e=!1;break}return e},e.copy=function(t){for(var e=0;e<15;e++)this.rows[e].copy(t.rows[e])},e.isEmpty=function(){for(var t=!0,e=0;e<15;e++)if(!this.rows[e].isEmpty()){t=!1;break}return t},e.backSpace=function(){this.rows[this.currRow].backSpace()},e.clearToEndOfRow=function(){this.rows[this.currRow].clearToEndOfRow()},e.insertChar=function(t){this.rows[this.currRow].insertChar(t)},e.setPen=function(t){this.rows[this.currRow].setPenStyles(t)},e.moveCursor=function(t){this.rows[this.currRow].moveCursor(t)},e.setCursor=function(t){this.logger.log(be.INFO,"setCursor: "+t),this.rows[this.currRow].setCursor(t)},e.setPAC=function(t){this.logger.log(be.INFO,"pacData = "+JSON.stringify(t));var e=t.row-1;if(this.nrRollUpRows&&e<this.nrRollUpRows-1&&(e=this.nrRollUpRows-1),this.nrRollUpRows&&this.currRow!==e){for(var r=0;r<15;r++)this.rows[r].clear();var i=this.currRow+1-this.nrRollUpRows,n=this.lastOutputScreen;if(n){var a=n.rows[i].cueStartTime,s=this.logger.time;if(a&&null!==s&&a<s)for(var o=0;o<this.nrRollUpRows;o++)this.rows[e-this.nrRollUpRows+o+1].copy(n.rows[i+o])}}this.currRow=e;var l=this.rows[this.currRow];if(null!==t.indent){var u=t.indent,h=Math.max(u-1,0);l.setCursor(t.indent),t.color=l.chars[h].penState.foreground}var d={foreground:t.color,underline:t.underline,italics:t.italics,background:"black",flash:!1};this.setPen(d)},e.setBkgData=function(t){this.logger.log(be.INFO,"bkgData = "+JSON.stringify(t)),this.backSpace(),this.setPen(t),this.insertChar(32)},e.setRollUpRows=function(t){this.nrRollUpRows=t},e.rollUp=function(){if(null!==this.nrRollUpRows){this.logger.log(be.TEXT,this.getDisplayText());var t=this.currRow+1-this.nrRollUpRows,e=this.rows.splice(t,1)[0];e.clear(),this.rows.splice(this.currRow,0,e),this.logger.log(be.INFO,"Rolling up")}else this.logger.log(be.DEBUG,"roll_up but nrRollUpRows not set yet")},e.getDisplayText=function(t){t=t||!1;for(var e=[],r="",i=-1,n=0;n<15;n++){var a=this.rows[n].getTextString();a&&(i=n+1,t?e.push("Row "+i+": '"+a+"'"):e.push(a.trim()))}return e.length>0&&(r=t?"["+e.join(" | ")+"]":e.join("\n")),r},e.getTextAndFormat=function(){return this.rows},t}(),Be=function(){function t(t,e,r){this.chNr=void 0,this.outputFilter=void 0,this.mode=void 0,this.verbose=void 0,this.displayedMemory=void 0,this.nonDisplayedMemory=void 0,this.lastOutputScreen=void 0,this.currRollUpRow=void 0,this.writeScreen=void 0,this.cueStartTime=void 0,this.logger=void 0,this.chNr=t,this.outputFilter=e,this.mode=null,this.verbose=0,this.displayedMemory=new Ue(r),this.nonDisplayedMemory=new Ue(r),this.lastOutputScreen=new Ue(r),this.currRollUpRow=this.displayedMemory.rows[14],this.writeScreen=this.displayedMemory,this.mode=null,this.cueStartTime=null,this.logger=r}var e=t.prototype;return e.reset=function(){this.mode=null,this.displayedMemory.reset(),this.nonDisplayedMemory.reset(),this.lastOutputScreen.reset(),this.outputFilter.reset(),this.currRollUpRow=this.displayedMemory.rows[14],this.writeScreen=this.displayedMemory,this.mode=null,this.cueStartTime=null},e.getHandler=function(){return this.outputFilter},e.setHandler=function(t){this.outputFilter=t},e.setPAC=function(t){this.writeScreen.setPAC(t)},e.setBkgData=function(t){this.writeScreen.setBkgData(t)},e.setMode=function(t){t!==this.mode&&(this.mode=t,this.logger.log(be.INFO,"MODE="+t),"MODE_POP-ON"===this.mode?this.writeScreen=this.nonDisplayedMemory:(this.writeScreen=this.displayedMemory,this.writeScreen.reset()),"MODE_ROLL-UP"!==this.mode&&(this.displayedMemory.nrRollUpRows=null,this.nonDisplayedMemory.nrRollUpRows=null),this.mode=t)},e.insertChars=function(t){for(var e=0;e<t.length;e++)this.writeScreen.insertChar(t[e]);var r=this.writeScreen===this.displayedMemory?"DISP":"NON_DISP";this.logger.log(be.INFO,r+": "+this.writeScreen.getDisplayText(!0)),"MODE_PAINT-ON"!==this.mode&&"MODE_ROLL-UP"!==this.mode||(this.logger.log(be.TEXT,"DISPLAYED: "+this.displayedMemory.getDisplayText(!0)),this.outputDataUpdate())},e.ccRCL=function(){this.logger.log(be.INFO,"RCL - Resume Caption Loading"),this.setMode("MODE_POP-ON")},e.ccBS=function(){this.logger.log(be.INFO,"BS - BackSpace"),"MODE_TEXT"!==this.mode&&(this.writeScreen.backSpace(),this.writeScreen===this.displayedMemory&&this.outputDataUpdate())},e.ccAOF=function(){},e.ccAON=function(){},e.ccDER=function(){this.logger.log(be.INFO,"DER- Delete to End of Row"),this.writeScreen.clearToEndOfRow(),this.outputDataUpdate()},e.ccRU=function(t){this.logger.log(be.INFO,"RU("+t+") - Roll Up"),this.writeScreen=this.displayedMemory,this.setMode("MODE_ROLL-UP"),this.writeScreen.setRollUpRows(t)},e.ccFON=function(){this.logger.log(be.INFO,"FON - Flash On"),this.writeScreen.setPen({flash:!0})},e.ccRDC=function(){this.logger.log(be.INFO,"RDC - Resume Direct Captioning"),this.setMode("MODE_PAINT-ON")},e.ccTR=function(){this.logger.log(be.INFO,"TR"),this.setMode("MODE_TEXT")},e.ccRTD=function(){this.logger.log(be.INFO,"RTD"),this.setMode("MODE_TEXT")},e.ccEDM=function(){this.logger.log(be.INFO,"EDM - Erase Displayed Memory"),this.displayedMemory.reset(),this.outputDataUpdate(!0)},e.ccCR=function(){this.logger.log(be.INFO,"CR - Carriage Return"),this.writeScreen.rollUp(),this.outputDataUpdate(!0)},e.ccENM=function(){this.logger.log(be.INFO,"ENM - Erase Non-displayed Memory"),this.nonDisplayedMemory.reset()},e.ccEOC=function(){if(this.logger.log(be.INFO,"EOC - End Of Caption"),"MODE_POP-ON"===this.mode){var t=this.displayedMemory;this.displayedMemory=this.nonDisplayedMemory,this.nonDisplayedMemory=t,this.writeScreen=this.nonDisplayedMemory,this.logger.log(be.TEXT,"DISP: "+this.displayedMemory.getDisplayText())}this.outputDataUpdate(!0)},e.ccTO=function(t){this.logger.log(be.INFO,"TO("+t+") - Tab Offset"),this.writeScreen.moveCursor(t)},e.ccMIDROW=function(t){var e={flash:!1};if(e.underline=t%2==1,e.italics=t>=46,e.italics)e.foreground="white";else{var r=Math.floor(t/2)-16;e.foreground=["white","green","blue","cyan","red","yellow","magenta"][r]}this.logger.log(be.INFO,"MIDROW: "+JSON.stringify(e)),this.writeScreen.setPen(e)},e.outputDataUpdate=function(t){void 0===t&&(t=!1);var e=this.logger.time;null!==e&&this.outputFilter&&(null!==this.cueStartTime||this.displayedMemory.isEmpty()?this.displayedMemory.equals(this.lastOutputScreen)||(this.outputFilter.newCue(this.cueStartTime,e,this.lastOutputScreen),t&&this.outputFilter.dispatchCue&&this.outputFilter.dispatchCue(),this.cueStartTime=this.displayedMemory.isEmpty()?null:e):this.cueStartTime=e,this.lastOutputScreen.copy(this.displayedMemory))},e.cueSplitAtTime=function(t){this.outputFilter&&(this.displayedMemory.isEmpty()||(this.outputFilter.newCue&&this.outputFilter.newCue(this.cueStartTime,t,this.displayedMemory),this.cueStartTime=t))},t}();function Ge(t,e,r){r.a=t,r.b=e}function Ke(t,e,r){return r.a===t&&r.b===e}var je=function(){function t(t,e,r){this.channels=void 0,this.currentChannel=0,this.cmdHistory=void 0,this.logger=void 0;var i=new xe;this.channels=[null,new Be(t,e,i),new Be(t+1,r,i)],this.cmdHistory={a:null,b:null},this.logger=i}var e=t.prototype;return e.getHandler=function(t){return this.channels[t].getHandler()},e.setHandler=function(t,e){this.channels[t].setHandler(e)},e.addData=function(t,e){var r,i,n,a=!1;this.logger.time=t;for(var s=0;s<e.length;s+=2)if(i=127&e[s],n=127&e[s+1],0!==i||0!==n){if(this.logger.log(be.DATA,"["+Pe([e[s],e[s+1]])+"] -> ("+Pe([i,n])+")"),(r=this.parseCmd(i,n))||(r=this.parseMidrow(i,n)),r||(r=this.parsePAC(i,n)),r||(r=this.parseBackgroundAttributes(i,n)),!r&&(a=this.parseChars(i,n))){var o=this.currentChannel;if(o&&o>0)this.channels[o].insertChars(a);else this.logger.log(be.WARNING,"No channel found yet. TEXT-MODE?")}r||a||this.logger.log(be.WARNING,"Couldn't parse cleaned data "+Pe([i,n])+" orig: "+Pe([e[s],e[s+1]]))}},e.parseCmd=function(t,e){var r=this.cmdHistory;if(!((20===t||28===t||21===t||29===t)&&e>=32&&e<=47)&&!((23===t||31===t)&&e>=33&&e<=35))return!1;if(Ke(t,e,r))return Ge(null,null,r),this.logger.log(be.DEBUG,"Repeated command ("+Pe([t,e])+") is dropped"),!0;var i=20===t||21===t||23===t?1:2,n=this.channels[i];return 20===t||21===t||28===t||29===t?32===e?n.ccRCL():33===e?n.ccBS():34===e?n.ccAOF():35===e?n.ccAON():36===e?n.ccDER():37===e?n.ccRU(2):38===e?n.ccRU(3):39===e?n.ccRU(4):40===e?n.ccFON():41===e?n.ccRDC():42===e?n.ccTR():43===e?n.ccRTD():44===e?n.ccEDM():45===e?n.ccCR():46===e?n.ccENM():47===e&&n.ccEOC():n.ccTO(e-32),Ge(t,e,r),this.currentChannel=i,!0},e.parseMidrow=function(t,e){var r=0;if((17===t||25===t)&&e>=32&&e<=47){if((r=17===t?1:2)!==this.currentChannel)return this.logger.log(be.ERROR,"Mismatch channel in midrow parsing"),!1;var i=this.channels[r];return!!i&&(i.ccMIDROW(e),this.logger.log(be.DEBUG,"MIDROW ("+Pe([t,e])+")"),!0)}return!1},e.parsePAC=function(t,e){var r,i=this.cmdHistory;if(!((t>=17&&t<=23||t>=25&&t<=31)&&e>=64&&e<=127)&&!((16===t||24===t)&&e>=64&&e<=95))return!1;if(Ke(t,e,i))return Ge(null,null,i),!0;var n=t<=23?1:2;r=e>=64&&e<=95?1===n?_e[t]:Ce[t]:1===n?Ie[t]:we[t];var a=this.channels[n];return!!a&&(a.setPAC(this.interpretPAC(r,e)),Ge(t,e,i),this.currentChannel=n,!0)},e.interpretPAC=function(t,e){var r,i={color:null,italics:!1,indent:null,underline:!1,row:t};return r=e>95?e-96:e-64,i.underline=1==(1&r),r<=13?i.color=["white","green","blue","cyan","red","yellow","magenta","white"][Math.floor(r/2)]:r<=15?(i.italics=!0,i.color="white"):i.indent=4*Math.floor((r-16)/2),i},e.parseChars=function(t,e){var r,i,n=null,a=null;(t>=25?(r=2,a=t-8):(r=1,a=t),a>=17&&a<=19)?(i=17===a?e+80:18===a?e+112:e+144,this.logger.log(be.INFO,"Special char '"+ke(i)+"' in channel "+r),n=[i]):t>=32&&t<=127&&(n=0===e?[t]:[t,e]);if(n){var s=Pe(n);this.logger.log(be.DEBUG,"Char codes =  "+s.join(",")),Ge(t,e,this.cmdHistory)}return n},e.parseBackgroundAttributes=function(t,e){var r;if(!((16===t||24===t)&&e>=32&&e<=47)&&!((23===t||31===t)&&e>=45&&e<=47))return!1;var i={};16===t||24===t?(r=Math.floor((e-32)/2),i.background=Oe[r],e%2==1&&(i.background=i.background+"_semi")):45===e?i.background="transparent":(i.foreground="black",47===e&&(i.underline=!0));var n=t<=23?1:2;return this.channels[n].setBkgData(i),Ge(t,e,this.cmdHistory),!0},e.reset=function(){for(var t=0;t<Object.keys(this.channels).length;t++){var e=this.channels[t];e&&e.reset()}this.cmdHistory={a:null,b:null}},e.cueSplitAtTime=function(t){for(var e=0;e<this.channels.length;e++){var r=this.channels[e];r&&r.cueSplitAtTime(t)}},t}(),He=function(){function t(t,e){this.timelineController=void 0,this.cueRanges=[],this.trackName=void 0,this.startTime=null,this.endTime=null,this.screen=null,this.timelineController=t,this.trackName=e}var e=t.prototype;return e.dispatchCue=function(){null!==this.startTime&&(this.timelineController.addCues(this.trackName,this.startTime,this.endTime,this.screen,this.cueRanges),this.startTime=null)},e.newCue=function(t,e,r){(null===this.startTime||this.startTime>t)&&(this.startTime=t),this.endTime=e,this.screen=r,this.timelineController.createCaptionsTrack(this.trackName)},e.reset=function(){this.cueRanges=[],this.startTime=null},t}(),Ve=function(){if("undefined"!=typeof self&&self.VTTCue)return self.VTTCue;var t=["","lr","rl"],e=["start","middle","end","left","right"];function r(t,e){if("string"!=typeof e)return!1;if(!Array.isArray(t))return!1;var r=e.toLowerCase();return!!~t.indexOf(r)&&r}function i(t){return r(e,t)}function n(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),i=1;i<e;i++)r[i-1]=arguments[i];for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var s in a)t[s]=a[s]}return t}function a(e,a,s){var o=this,l={enumerable:!0};o.hasBeenReset=!1;var u="",h=!1,d=e,c=a,f=s,g=null,v="",p=!0,m="auto",y="start",T=50,b="middle",E=50,S="middle";Object.defineProperty(o,"id",n({},l,{get:function(){return u},set:function(t){u=""+t}})),Object.defineProperty(o,"pauseOnExit",n({},l,{get:function(){return h},set:function(t){h=!!t}})),Object.defineProperty(o,"startTime",n({},l,{get:function(){return d},set:function(t){if("number"!=typeof t)throw new TypeError("Start time must be set to a number.");d=t,this.hasBeenReset=!0}})),Object.defineProperty(o,"endTime",n({},l,{get:function(){return c},set:function(t){if("number"!=typeof t)throw new TypeError("End time must be set to a number.");c=t,this.hasBeenReset=!0}})),Object.defineProperty(o,"text",n({},l,{get:function(){return f},set:function(t){f=""+t,this.hasBeenReset=!0}})),Object.defineProperty(o,"region",n({},l,{get:function(){return g},set:function(t){g=t,this.hasBeenReset=!0}})),Object.defineProperty(o,"vertical",n({},l,{get:function(){return v},set:function(e){var i=function(e){return r(t,e)}(e);if(!1===i)throw new SyntaxError("An invalid or illegal string was specified.");v=i,this.hasBeenReset=!0}})),Object.defineProperty(o,"snapToLines",n({},l,{get:function(){return p},set:function(t){p=!!t,this.hasBeenReset=!0}})),Object.defineProperty(o,"line",n({},l,{get:function(){return m},set:function(t){if("number"!=typeof t&&"auto"!==t)throw new SyntaxError("An invalid number or illegal string was specified.");m=t,this.hasBeenReset=!0}})),Object.defineProperty(o,"lineAlign",n({},l,{get:function(){return y},set:function(t){var e=i(t);if(!e)throw new SyntaxError("An invalid or illegal string was specified.");y=e,this.hasBeenReset=!0}})),Object.defineProperty(o,"position",n({},l,{get:function(){return T},set:function(t){if(t<0||t>100)throw new Error("Position must be between 0 and 100.");T=t,this.hasBeenReset=!0}})),Object.defineProperty(o,"positionAlign",n({},l,{get:function(){return b},set:function(t){var e=i(t);if(!e)throw new SyntaxError("An invalid or illegal string was specified.");b=e,this.hasBeenReset=!0}})),Object.defineProperty(o,"size",n({},l,{get:function(){return E},set:function(t){if(t<0||t>100)throw new Error("Size must be between 0 and 100.");E=t,this.hasBeenReset=!0}})),Object.defineProperty(o,"align",n({},l,{get:function(){return S},set:function(t){var e=i(t);if(!e)throw new SyntaxError("An invalid or illegal string was specified.");S=e,this.hasBeenReset=!0}})),o.displayState=void 0}return a.prototype.getCueAsHTML=function(){return self.WebVTT.convertCueToDOMTree(self,this.text)},a}(),We=function(){function t(){}return t.prototype.decode=function(t,e){if(!t)return"";if("string"!=typeof t)throw new Error("Error - expected string data.");return decodeURIComponent(encodeURIComponent(t))},t}();function Ye(t){function e(t,e,r,i){return 3600*(0|t)+60*(0|e)+(0|r)+parseFloat(i||0)}var r=t.match(/^(?:(\d+):)?(\d{2}):(\d{2})(\.\d+)?/);return r?parseFloat(r[2])>59?e(r[2],r[3],0,r[4]):e(r[1],r[2],r[3],r[4]):null}var qe=function(){function t(){this.values=Object.create(null)}var e=t.prototype;return e.set=function(t,e){this.get(t)||""===e||(this.values[t]=e)},e.get=function(t,e,r){return r?this.has(t)?this.values[t]:e[r]:this.has(t)?this.values[t]:e},e.has=function(t){return t in this.values},e.alt=function(t,e,r){for(var i=0;i<r.length;++i)if(e===r[i]){this.set(t,e);break}},e.integer=function(t,e){/^-?\d+$/.test(e)&&this.set(t,parseInt(e,10))},e.percent=function(t,e){if(/^([\d]{1,3})(\.[\d]*)?%$/.test(e)){var r=parseFloat(e);if(r>=0&&r<=100)return this.set(t,r),!0}return!1},t}();function Xe(t,e,r,i){var n=i?t.split(i):[t];for(var a in n)if("string"==typeof n[a]){var s=n[a].split(r);if(2===s.length)e(s[0],s[1])}}var ze=new Ve(0,0,""),Qe="middle"===ze.align?"middle":"center";function $e(t,e,r){var i=t;function n(){var e=Ye(t);if(null===e)throw new Error("Malformed timestamp: "+i);return t=t.replace(/^[^\sa-zA-Z-]+/,""),e}function a(){t=t.replace(/^\s+/,"")}if(a(),e.startTime=n(),a(),"--\x3e"!==t.substr(0,3))throw new Error("Malformed time stamp (time stamps must be separated by '--\x3e'): "+i);t=t.substr(3),a(),e.endTime=n(),a(),function(t,e){var i=new qe;Xe(t,(function(t,e){var n;switch(t){case"region":for(var a=r.length-1;a>=0;a--)if(r[a].id===e){i.set(t,r[a].region);break}break;case"vertical":i.alt(t,e,["rl","lr"]);break;case"line":n=e.split(","),i.integer(t,n[0]),i.percent(t,n[0])&&i.set("snapToLines",!1),i.alt(t,n[0],["auto"]),2===n.length&&i.alt("lineAlign",n[1],["start",Qe,"end"]);break;case"position":n=e.split(","),i.percent(t,n[0]),2===n.length&&i.alt("positionAlign",n[1],["start",Qe,"end","line-left","line-right","auto"]);break;case"size":i.percent(t,e);break;case"align":i.alt(t,e,["start",Qe,"end","left","right"])}}),/:/,/\s/),e.region=i.get("region",null),e.vertical=i.get("vertical","");var n=i.get("line","auto");"auto"===n&&-1===ze.line&&(n=-1),e.line=n,e.lineAlign=i.get("lineAlign","start"),e.snapToLines=i.get("snapToLines",!0),e.size=i.get("size",100),e.align=i.get("align",Qe);var a=i.get("position","auto");"auto"===a&&50===ze.position&&(a="start"===e.align||"left"===e.align?0:"end"===e.align||"right"===e.align?100:50),e.position=a}(t,e)}function Je(t){return t.replace(/<br(?: \/)?>/gi,"\n")}var Ze=function(){function t(){this.state="INITIAL",this.buffer="",this.decoder=new We,this.regionList=[],this.cue=null,this.oncue=void 0,this.onparsingerror=void 0,this.onflush=void 0}var e=t.prototype;return e.parse=function(t){var e=this;function r(){var t=e.buffer,r=0;for(t=Je(t);r<t.length&&"\r"!==t[r]&&"\n"!==t[r];)++r;var i=t.substr(0,r);return"\r"===t[r]&&++r,"\n"===t[r]&&++r,e.buffer=t.substr(r),i}t&&(e.buffer+=e.decoder.decode(t,{stream:!0}));try{var i="";if("INITIAL"===e.state){if(!/\r\n|\n/.test(e.buffer))return this;var n=(i=r()).match(/^(ï»¿)?WEBVTT([ \t].*)?$/);if(!n||!n[0])throw new Error("Malformed WebVTT signature.");e.state="HEADER"}for(var a=!1;e.buffer;){if(!/\r\n|\n/.test(e.buffer))return this;switch(a?a=!1:i=r(),e.state){case"HEADER":/:/.test(i)?Xe(i,(function(t,e){}),/:/):i||(e.state="ID");continue;case"NOTE":i||(e.state="ID");continue;case"ID":if(/^NOTE($|[ \t])/.test(i)){e.state="NOTE";break}if(!i)continue;if(e.cue=new Ve(0,0,""),e.state="CUE",-1===i.indexOf("--\x3e")){e.cue.id=i;continue}case"CUE":if(!e.cue){e.state="BADCUE";continue}try{$e(i,e.cue,e.regionList)}catch(t){e.cue=null,e.state="BADCUE";continue}e.state="CUETEXT";continue;case"CUETEXT":var s=-1!==i.indexOf("--\x3e");if(!i||s&&(a=!0)){e.oncue&&e.cue&&e.oncue(e.cue),e.cue=null,e.state="ID";continue}if(null===e.cue)continue;e.cue.text&&(e.cue.text+="\n"),e.cue.text+=i;continue;case"BADCUE":i||(e.state="ID")}}}catch(t){"CUETEXT"===e.state&&e.cue&&e.oncue&&e.oncue(e.cue),e.cue=null,e.state="INITIAL"===e.state?"BADWEBVTT":"BADCUE"}return this},e.flush=function(){try{if((this.cue||"HEADER"===this.state)&&(this.buffer+="\n\n",this.parse()),"INITIAL"===this.state||"BADWEBVTT"===this.state)throw new Error("Malformed WebVTT signature.")}catch(t){this.onparsingerror&&this.onparsingerror(t)}return this.onflush&&this.onflush(),this},t}(),tr=r(8),er=r(16),rr=/\r\n|\n\r|\n|\r/g,ir=function(t,e,r){return void 0===r&&(r=0),t.substr(r,e.length)===e},nr=function(t){for(var e=5381,r=t.length;r;)e=33*e^t.charCodeAt(--r);return(e>>>0).toString()};function ar(t,e,r){return nr(t.toString())+nr(e.toString())+nr(r)}function sr(t,e,r,i,a,s,o,l){var u,h=new Ze,d=Object(M.f)(new Uint8Array(t)).trim().replace(rr,"\n").split("\n"),c=[],f=Object(tr.a)(e,r),g="00:00.000",v=0,p=0,m=!0,y=!1;h.oncue=function(t){var e=i[a],r=i.ccOffset,n=(v-f)/9e4;if(null!=e&&e.new&&(void 0!==p?r=i.ccOffset=e.start:function(t,e,r){var i=t[e],n=t[i.prevCC];if(!n||!n.new&&i.new)return t.ccOffset=t.presentationOffset=i.start,void(i.new=!1);for(;null!==(a=n)&&void 0!==a&&a.new;){var a;t.ccOffset+=i.start-n.start,i.new=!1,n=t[(i=n).prevCC]}t.presentationOffset=r}(i,a,n)),n&&(r=n-i.presentationOffset),y){var o=t.endTime-t.startTime,l=Object(er.b)(9e4*(t.startTime+r-p),9e4*s)/9e4;t.startTime=l,t.endTime=l+o}var u=t.text.trim();t.text=decodeURIComponent(encodeURIComponent(u)),t.id||(t.id=ar(t.startTime,t.endTime,u)),t.endTime>0&&c.push(t)},h.onparsingerror=function(t){u=t},h.onflush=function(){u?l(u):o(c)},d.forEach((function(t){if(m){if(ir(t,"X-TIMESTAMP-MAP=")){m=!1,y=!0,t.substr(16).split(",").forEach((function(t){ir(t,"LOCAL:")?g=t.substr(6):ir(t,"MPEGTS:")&&(v=parseInt(t.substr(7)))}));try{p=function(t){var e=parseInt(t.substr(-3)),r=parseInt(t.substr(-6,2)),i=parseInt(t.substr(-9,2)),a=t.length>9?parseInt(t.substr(0,t.indexOf(":"))):0;if(!(Object(n.a)(e)&&Object(n.a)(r)&&Object(n.a)(i)&&Object(n.a)(a)))throw Error("Malformed X-TIMESTAMP-MAP: Local:"+t);return e+=1e3*r,e+=6e4*i,e+=36e5*a}(g)/1e3}catch(t){y=!1,u=t}return}""===t&&(m=!1)}h.parse(t+"\n")})),h.flush()}function or(){return(or=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t}).apply(this,arguments)}var lr=/^(\d{2,}):(\d{2}):(\d{2}):(\d{2})\.?(\d+)?$/,ur=/^(\d*(?:\.\d*)?)(h|m|s|ms|f|t)$/,hr={left:"start",center:"center",right:"end",start:"start",end:"end"};function dr(t,e,r,i,n){var a=Object(l.b)(new Uint8Array(t),["mdat"]);if(0!==a.length){var s=a[0],o=Object(M.f)(new Uint8Array(t,s.start,s.end-s.start)),u=Object(tr.c)(e,1,r);try{i(function(t,e){var r=(new DOMParser).parseFromString(t,"text/xml").getElementsByTagName("tt")[0];if(!r)throw new Error("Invalid ttml");var i={frameRate:30,subFrameRate:1,frameRateMultiplier:0,tickRate:0},n=Object.keys(i).reduce((function(t,e){return t[e]=r.getAttribute("ttp:"+e)||i[e],t}),{}),a="preserve"!==r.getAttribute("xml:space"),s=fr(cr(r,"styling","style")),o=fr(cr(r,"layout","region")),l=cr(r,"body","[begin]");return[].map.call(l,(function(t){var r=function t(e,r){return[].slice.call(e.childNodes).reduce((function(e,i,n){var a;return"br"===i.nodeName&&n?e+"\n":null!==(a=i.childNodes)&&void 0!==a&&a.length?t(i,r):r?e+i.textContent.trim().replace(/\s+/g," "):e+i.textContent}),"")}(t,a);if(!r||!t.hasAttribute("begin"))return null;var i=pr(t.getAttribute("begin"),n),l=pr(t.getAttribute("dur"),n),u=pr(t.getAttribute("end"),n);if(null===i)throw vr(t);if(null===u){if(null===l)throw vr(t);u=i+l}var h=new Ve(i-e,u-e,r);h.id=ar(h.startTime,h.endTime,h.text);var d=o[t.getAttribute("region")],c=s[t.getAttribute("style")];h.position=10,h.size=80;var f=function(t,e){var r="http://www.w3.org/ns/ttml#styling";return["displayAlign","textAlign","color","backgroundColor","fontSize","fontFamily"].reduce((function(i,n){var a=gr(e,r,n)||gr(t,r,n);return a&&(i[n]=a),i}),{})}(d,c),g=f.textAlign;if(g){var v=hr[g];v&&(h.lineAlign=v),h.align=g}return or(h,f),h})).filter((function(t){return null!==t}))}(o,u))}catch(t){n(t)}}else n(new Error("Could not parse IMSC1 mdat"))}function cr(t,e,r){var i=t.getElementsByTagName(e)[0];return i?[].slice.call(i.querySelectorAll(r)):[]}function fr(t){return t.reduce((function(t,e){var r=e.getAttribute("xml:id");return r&&(t[r]=e),t}),{})}function gr(t,e,r){return t.hasAttributeNS(e,r)?t.getAttributeNS(e,r):null}function vr(t){return new Error("Could not parse ttml timestamp "+t)}function pr(t,e){if(!t)return null;var r=Ye(t);return null===r&&(lr.test(t)?r=function(t,e){var r=lr.exec(t),i=(0|r[4])+(0|r[5])/e.subFrameRate;return 3600*(0|r[1])+60*(0|r[2])+(0|r[3])+i/e.frameRate}(t,e):ur.test(t)&&(r=function(t,e){var r=ur.exec(t),i=Number(r[1]);switch(r[2]){case"h":return 3600*i;case"m":return 60*i;case"ms":return 1e3*i;case"f":return i/e.frameRate;case"t":return i/e.tickRate}return i}(t,e))),r}var mr=function(){function t(t){if(this.hls=void 0,this.media=null,this.config=void 0,this.enabled=!0,this.Cues=void 0,this.textTracks=[],this.tracks=[],this.initPTS=[],this.timescale=[],this.unparsedVttFrags=[],this.captionsTracks={},this.nonNativeCaptionsTracks={},this.cea608Parser1=void 0,this.cea608Parser2=void 0,this.lastSn=-1,this.lastPartIndex=-1,this.prevCC=-1,this.vttCCs={ccOffset:0,presentationOffset:0,0:{start:0,prevCC:-1,new:!1}},this.captionsProperties=void 0,this.hls=t,this.config=t.config,this.Cues=t.config.cueHandler,this.captionsProperties={textTrack1:{label:this.config.captionsTextTrack1Label,languageCode:this.config.captionsTextTrack1LanguageCode},textTrack2:{label:this.config.captionsTextTrack2Label,languageCode:this.config.captionsTextTrack2LanguageCode},textTrack3:{label:this.config.captionsTextTrack3Label,languageCode:this.config.captionsTextTrack3LanguageCode},textTrack4:{label:this.config.captionsTextTrack4Label,languageCode:this.config.captionsTextTrack4LanguageCode}},this.config.enableCEA708Captions){var e=new He(this,"textTrack1"),r=new He(this,"textTrack2"),i=new He(this,"textTrack3"),n=new He(this,"textTrack4");this.cea608Parser1=new je(1,e,r),this.cea608Parser2=new je(3,i,n)}t.on(a.a.MEDIA_ATTACHING,this.onMediaAttaching,this),t.on(a.a.MEDIA_DETACHING,this.onMediaDetaching,this),t.on(a.a.MANIFEST_LOADING,this.onManifestLoading,this),t.on(a.a.MANIFEST_LOADED,this.onManifestLoaded,this),t.on(a.a.SUBTITLE_TRACKS_UPDATED,this.onSubtitleTracksUpdated,this),t.on(a.a.FRAG_LOADING,this.onFragLoading,this),t.on(a.a.FRAG_LOADED,this.onFragLoaded,this),t.on(a.a.FRAG_PARSING_USERDATA,this.onFragParsingUserdata,this),t.on(a.a.FRAG_DECRYPTED,this.onFragDecrypted,this),t.on(a.a.INIT_PTS_FOUND,this.onInitPtsFound,this),t.on(a.a.SUBTITLE_TRACKS_CLEARED,this.onSubtitleTracksCleared,this),t.on(a.a.BUFFER_FLUSHING,this.onBufferFlushing,this)}var e=t.prototype;return e.destroy=function(){var t=this.hls;t.off(a.a.MEDIA_ATTACHING,this.onMediaAttaching,this),t.off(a.a.MEDIA_DETACHING,this.onMediaDetaching,this),t.off(a.a.MANIFEST_LOADING,this.onManifestLoading,this),t.off(a.a.MANIFEST_LOADED,this.onManifestLoaded,this),t.off(a.a.SUBTITLE_TRACKS_UPDATED,this.onSubtitleTracksUpdated,this),t.off(a.a.FRAG_LOADING,this.onFragLoading,this),t.off(a.a.FRAG_LOADED,this.onFragLoaded,this),t.off(a.a.FRAG_PARSING_USERDATA,this.onFragParsingUserdata,this),t.off(a.a.FRAG_DECRYPTED,this.onFragDecrypted,this),t.off(a.a.INIT_PTS_FOUND,this.onInitPtsFound,this),t.off(a.a.SUBTITLE_TRACKS_CLEARED,this.onSubtitleTracksCleared,this),t.off(a.a.BUFFER_FLUSHING,this.onBufferFlushing,this),this.hls=this.config=this.cea608Parser1=this.cea608Parser2=null},e.addCues=function(t,e,r,i,n){for(var s,o,l,u,h=!1,d=n.length;d--;){var c=n[d],f=(s=c[0],o=c[1],l=e,u=r,Math.min(o,u)-Math.max(s,l));if(f>=0&&(c[0]=Math.min(c[0],e),c[1]=Math.max(c[1],r),h=!0,f/(r-e)>.5))return}if(h||n.push([e,r]),this.config.renderTextTracksNatively){var g=this.captionsTracks[t];this.Cues.newCue(g,e,r,i)}else{var v=this.Cues.newCue(null,e,r,i);this.hls.trigger(a.a.CUES_PARSED,{type:"captions",cues:v,track:t})}},e.onInitPtsFound=function(t,e){var r=this,i=e.frag,n=e.id,s=e.initPTS,o=e.timescale,l=this.unparsedVttFrags;"main"===n&&(this.initPTS[i.cc]=s,this.timescale[i.cc]=o),l.length&&(this.unparsedVttFrags=[],l.forEach((function(t){r.onFragLoaded(a.a.FRAG_LOADED,t)})))},e.getExistingTrack=function(t){var e=this.media;if(e)for(var r=0;r<e.textTracks.length;r++){var i=e.textTracks[r];if(i[t])return i}return null},e.createCaptionsTrack=function(t){this.config.renderTextTracksNatively?this.createNativeTrack(t):this.createNonNativeTrack(t)},e.createNativeTrack=function(t){if(!this.captionsTracks[t]){var e=this.captionsProperties,r=this.captionsTracks,i=this.media,n=e[t],a=n.label,s=n.languageCode,o=this.getExistingTrack(t);if(o)r[t]=o,x(r[t]),w(r[t],i);else{var l=this.createTextTrack("captions",a,s);l&&(l[t]=!0,r[t]=l)}}},e.createNonNativeTrack=function(t){if(!this.nonNativeCaptionsTracks[t]){var e=this.captionsProperties[t];if(e){var r={_id:t,label:e.label,kind:"captions",default:!!e.media&&!!e.media.default,closedCaptions:e.media};this.nonNativeCaptionsTracks[t]=r,this.hls.trigger(a.a.NON_NATIVE_TEXT_TRACKS_FOUND,{tracks:[r]})}}},e.createTextTrack=function(t,e,r){var i=this.media;if(i)return i.addTextTrack(t,e,r)},e.onMediaAttaching=function(t,e){this.media=e.media,this._cleanTracks()},e.onMediaDetaching=function(){var t=this.captionsTracks;Object.keys(t).forEach((function(e){x(t[e]),delete t[e]})),this.nonNativeCaptionsTracks={}},e.onManifestLoading=function(){this.lastSn=-1,this.lastPartIndex=-1,this.prevCC=-1,this.vttCCs={ccOffset:0,presentationOffset:0,0:{start:0,prevCC:-1,new:!1}},this._cleanTracks(),this.tracks=[],this.captionsTracks={},this.nonNativeCaptionsTracks={},this.textTracks=[],this.unparsedVttFrags=this.unparsedVttFrags||[],this.initPTS=[],this.timescale=[],this.cea608Parser1&&this.cea608Parser2&&(this.cea608Parser1.reset(),this.cea608Parser2.reset())},e._cleanTracks=function(){var t=this.media;if(t){var e=t.textTracks;if(e)for(var r=0;r<e.length;r++)x(e[r])}},e.onSubtitleTracksUpdated=function(t,e){var r=this;this.textTracks=[];var i=e.subtitleTracks||[],n=i.some((function(t){return"stpp.ttml.im1t"===t.textCodec}));if(this.config.enableWebVTT||n&&this.config.enableIMSC1){var s=this.tracks&&i&&this.tracks.length===i.length;if(this.tracks=i||[],this.config.renderTextTracksNatively){var o=this.media?this.media.textTracks:[];this.tracks.forEach((function(t,e){var i;if(e<o.length){for(var n=null,a=0;a<o.length;a++)if(yr(o[a],t)){n=o[a];break}n&&(i=n)}i?x(i):(i=r.createTextTrack("subtitles",t.name,t.lang))&&(i.mode="disabled"),i&&(i.groupId=t.groupId,r.textTracks.push(i))}))}else if(!s&&this.tracks&&this.tracks.length){var l=this.tracks.map((function(t){return{label:t.name,kind:t.type.toLowerCase(),default:t.default,subtitleTrack:t}}));this.hls.trigger(a.a.NON_NATIVE_TEXT_TRACKS_FOUND,{tracks:l})}}},e.onManifestLoaded=function(t,e){var r=this;this.config.enableCEA708Captions&&e.captions&&e.captions.forEach((function(t){var e=/(?:CC|SERVICE)([1-4])/.exec(t.instreamId);if(e){var i="textTrack"+e[1],n=r.captionsProperties[i];n&&(n.label=t.name,t.lang&&(n.languageCode=t.lang),n.media=t)}}))},e.onFragLoading=function(t,e){var r=this.cea608Parser1,i=this.cea608Parser2,n=this.lastSn,a=this.lastPartIndex;if(this.enabled&&r&&i&&e.frag.type===k.b.MAIN){var s,o,l=e.frag.sn,u=null!=(s=null==e||null===(o=e.part)||void 0===o?void 0:o.index)?s:-1;l===n+1||l===n&&u===a+1||(r.reset(),i.reset()),this.lastSn=l,this.lastPartIndex=u}},e.onFragLoaded=function(t,e){var r=e.frag,i=e.payload,s=this.initPTS,o=this.unparsedVttFrags;if(r.type===k.b.SUBTITLE)if(i.byteLength){if(!Object(n.a)(s[r.cc]))return o.push(e),void(s.length&&this.hls.trigger(a.a.SUBTITLE_FRAG_PROCESSED,{success:!1,frag:r,error:new Error("Missing initial subtitle PTS")}));var l=r.decryptdata,u="stats"in e;if(null==l||null==l.key||"AES-128"!==l.method||u){var h=this.tracks[r.level],d=this.vttCCs;d[r.cc]||(d[r.cc]={start:r.start,prevCC:this.prevCC,new:!0},this.prevCC=r.cc),h&&"stpp.ttml.im1t"===h.textCodec?this._parseIMSC1(r,i):this._parseVTTs(r,i,d)}}else this.hls.trigger(a.a.SUBTITLE_FRAG_PROCESSED,{success:!1,frag:r,error:new Error("Empty subtitle payload")})},e._parseIMSC1=function(t,e){var r=this,i=this.hls;dr(e,this.initPTS[t.cc],this.timescale[t.cc],(function(e){r._appendCues(e,t.level),i.trigger(a.a.SUBTITLE_FRAG_PROCESSED,{success:!0,frag:t})}),(function(e){o.b.log("Failed to parse IMSC1: "+e),i.trigger(a.a.SUBTITLE_FRAG_PROCESSED,{success:!1,frag:t,error:e})}))},e._parseVTTs=function(t,e,r){var i=this,n=this.hls;sr(e,this.initPTS[t.cc],this.timescale[t.cc],r,t.cc,t.start,(function(e){i._appendCues(e,t.level),n.trigger(a.a.SUBTITLE_FRAG_PROCESSED,{success:!0,frag:t})}),(function(r){i._fallbackToIMSC1(t,e),o.b.log("Failed to parse VTT cue: "+r),n.trigger(a.a.SUBTITLE_FRAG_PROCESSED,{success:!1,frag:t,error:r})}))},e._fallbackToIMSC1=function(t,e){var r=this,i=this.tracks[t.level];i.textCodec||dr(e,this.initPTS[t.cc],this.timescale[t.cc],(function(){i.textCodec="stpp.ttml.im1t",r._parseIMSC1(t,e)}),(function(){i.textCodec="wvtt"}))},e._appendCues=function(t,e){var r=this.hls;if(this.config.renderTextTracksNatively){var i=this.textTracks[e];if("disabled"===i.mode)return;t.forEach((function(t){return O(i,t)}))}else{var n=this.tracks[e].default?"default":"subtitles"+e;r.trigger(a.a.CUES_PARSED,{type:"subtitles",cues:t,track:n})}},e.onFragDecrypted=function(t,e){var r=e.frag;if(r.type===k.b.SUBTITLE){if(!Object(n.a)(this.initPTS[r.cc]))return void this.unparsedVttFrags.push(e);this.onFragLoaded(a.a.FRAG_LOADED,e)}},e.onSubtitleTracksCleared=function(){this.tracks=[],this.captionsTracks={}},e.onFragParsingUserdata=function(t,e){var r=this.cea608Parser1,i=this.cea608Parser2;if(this.enabled&&r&&i)for(var n=0;n<e.samples.length;n++){var a=e.samples[n].bytes;if(a){var s=this.extractCea608Data(a);r.addData(e.samples[n].pts,s[0]),i.addData(e.samples[n].pts,s[1])}}},e.onBufferFlushing=function(t,e){var r=e.startOffset,i=e.endOffset,n=e.endOffsetSubtitles,a=e.type,s=this.media;if(s&&!(s.currentTime<i)){if(!a||"video"===a){var o=this.captionsTracks;Object.keys(o).forEach((function(t){return P(o[t],r,i)}))}if(this.config.renderTextTracksNatively&&0===r&&void 0!==n){var l=this.textTracks;Object.keys(l).forEach((function(t){return P(l[t],r,n)}))}}},e.extractCea608Data=function(t){for(var e=31&t[0],r=2,i=[[],[]],n=0;n<e;n++){var a=t[r++],s=127&t[r++],o=127&t[r++],l=3&a;0===s&&0===o||0!=(4&a)&&(0!==l&&1!==l||(i[l].push(s),i[l].push(o)))}return i},t}();function yr(t,e){return t&&t.label===e.name&&!(t.textTrack1||t.textTrack2)}function Tr(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var br,Er=function(){function t(t){this.autoLevelCapping=void 0,this.firstLevel=void 0,this.media=void 0,this.restrictedLevels=void 0,this.timer=void 0,this.hls=void 0,this.streamController=void 0,this.clientRect=void 0,this.hls=t,this.autoLevelCapping=Number.POSITIVE_INFINITY,this.firstLevel=-1,this.media=null,this.restrictedLevels=[],this.timer=void 0,this.clientRect=null,this.registerListeners()}var e,r,i,n=t.prototype;return n.setStreamController=function(t){this.streamController=t},n.destroy=function(){this.unregisterListener(),this.hls.config.capLevelToPlayerSize&&this.stopCapping(),this.media=null,this.clientRect=null,this.hls=this.streamController=null},n.registerListeners=function(){var t=this.hls;t.on(a.a.FPS_DROP_LEVEL_CAPPING,this.onFpsDropLevelCapping,this),t.on(a.a.MEDIA_ATTACHING,this.onMediaAttaching,this),t.on(a.a.MANIFEST_PARSED,this.onManifestParsed,this),t.on(a.a.BUFFER_CODECS,this.onBufferCodecs,this),t.on(a.a.MEDIA_DETACHING,this.onMediaDetaching,this)},n.unregisterListener=function(){var t=this.hls;t.off(a.a.FPS_DROP_LEVEL_CAPPING,this.onFpsDropLevelCapping,this),t.off(a.a.MEDIA_ATTACHING,this.onMediaAttaching,this),t.off(a.a.MANIFEST_PARSED,this.onManifestParsed,this),t.off(a.a.BUFFER_CODECS,this.onBufferCodecs,this),t.off(a.a.MEDIA_DETACHING,this.onMediaDetaching,this)},n.onFpsDropLevelCapping=function(e,r){t.isLevelAllowed(r.droppedLevel,this.restrictedLevels)&&this.restrictedLevels.push(r.droppedLevel)},n.onMediaAttaching=function(t,e){this.media=e.media instanceof HTMLVideoElement?e.media:null},n.onManifestParsed=function(t,e){var r=this.hls;this.restrictedLevels=[],this.firstLevel=e.firstLevel,r.config.capLevelToPlayerSize&&e.video&&this.startCapping()},n.onBufferCodecs=function(t,e){this.hls.config.capLevelToPlayerSize&&e.video&&this.startCapping()},n.onMediaDetaching=function(){this.stopCapping()},n.detectPlayerSize=function(){if(this.media&&this.mediaHeight>0&&this.mediaWidth>0){var t=this.hls.levels;if(t.length){var e=this.hls;e.autoLevelCapping=this.getMaxLevel(t.length-1),e.autoLevelCapping>this.autoLevelCapping&&this.streamController&&this.streamController.nextLevelSwitch(),this.autoLevelCapping=e.autoLevelCapping}}},n.getMaxLevel=function(e){var r=this,i=this.hls.levels;if(!i.length)return-1;var n=i.filter((function(i,n){return t.isLevelAllowed(n,r.restrictedLevels)&&n<=e}));return this.clientRect=null,t.getMaxLevelByMediaSize(n,this.mediaWidth,this.mediaHeight)},n.startCapping=function(){this.timer||(this.autoLevelCapping=Number.POSITIVE_INFINITY,this.hls.firstLevel=this.getMaxLevel(this.firstLevel),self.clearInterval(this.timer),this.timer=self.setInterval(this.detectPlayerSize.bind(this),1e3),this.detectPlayerSize())},n.stopCapping=function(){this.restrictedLevels=[],this.firstLevel=-1,this.autoLevelCapping=Number.POSITIVE_INFINITY,this.timer&&(self.clearInterval(this.timer),this.timer=void 0)},n.getDimensions=function(){if(this.clientRect)return this.clientRect;var t=this.media,e={width:0,height:0};if(t){var r=t.getBoundingClientRect();e.width=r.width,e.height=r.height,e.width||e.height||(e.width=r.right-r.left||t.width||0,e.height=r.bottom-r.top||t.height||0)}return this.clientRect=e,e},t.isLevelAllowed=function(t,e){return void 0===e&&(e=[]),-1===e.indexOf(t)},t.getMaxLevelByMediaSize=function(t,e,r){if(!t||!t.length)return-1;for(var i,n,a=t.length-1,s=0;s<t.length;s+=1){var o=t[s];if((o.width>=e||o.height>=r)&&(i=o,!(n=t[s+1])||i.width!==n.width||i.height!==n.height)){a=s;break}}return a},e=t,i=[{key:"contentScaleFactor",get:function(){var t=1;try{t=self.devicePixelRatio}catch(t){}return t}}],(r=[{key:"mediaWidth",get:function(){return this.getDimensions().width*t.contentScaleFactor}},{key:"mediaHeight",get:function(){return this.getDimensions().height*t.contentScaleFactor}}])&&Tr(e.prototype,r),i&&Tr(e,i),t}(),Sr=function(){function t(t){this.hls=void 0,this.isVideoPlaybackQualityAvailable=!1,this.timer=void 0,this.media=null,this.lastTime=void 0,this.lastDroppedFrames=0,this.lastDecodedFrames=0,this.streamController=void 0,this.hls=t,this.registerListeners()}var e=t.prototype;return e.setStreamController=function(t){this.streamController=t},e.registerListeners=function(){this.hls.on(a.a.MEDIA_ATTACHING,this.onMediaAttaching,this)},e.unregisterListeners=function(){this.hls.off(a.a.MEDIA_ATTACHING,this.onMediaAttaching)},e.destroy=function(){this.timer&&clearInterval(this.timer),this.unregisterListeners(),this.isVideoPlaybackQualityAvailable=!1,this.media=null},e.onMediaAttaching=function(t,e){var r=this.hls.config;if(r.capLevelOnFPSDrop){var i=e.media instanceof self.HTMLVideoElement?e.media:null;this.media=i,i&&"function"==typeof i.getVideoPlaybackQuality&&(this.isVideoPlaybackQualityAvailable=!0),self.clearInterval(this.timer),this.timer=self.setInterval(this.checkFPSInterval.bind(this),r.fpsDroppedMonitoringPeriod)}},e.checkFPS=function(t,e,r){var i=performance.now();if(e){if(this.lastTime){var n=i-this.lastTime,s=r-this.lastDroppedFrames,l=e-this.lastDecodedFrames,u=1e3*s/n,h=this.hls;if(h.trigger(a.a.FPS_DROP,{currentDropped:s,currentDecoded:l,totalDroppedFrames:r}),u>0&&s>h.config.fpsDroppedMonitoringThreshold*l){var d=h.currentLevel;o.b.warn("drop FPS ratio greater than max allowed value for currentLevel: "+d),d>0&&(-1===h.autoLevelCapping||h.autoLevelCapping>=d)&&(d-=1,h.trigger(a.a.FPS_DROP_LEVEL_CAPPING,{level:d,droppedLevel:h.currentLevel}),h.autoLevelCapping=d,this.streamController.nextLevelSwitch())}}this.lastTime=i,this.lastDroppedFrames=r,this.lastDecodedFrames=e}},e.checkFPSInterval=function(){var t=this.media;if(t)if(this.isVideoPlaybackQualityAvailable){var e=t.getVideoPlaybackQuality();this.checkFPS(t,e.totalVideoFrames,e.droppedVideoFrames)}else this.checkFPS(t,t.webkitDecodedFrameCount,t.webkitDroppedFrameCount)},t}();!function(t){t.WIDEVINE="com.widevine.alpha",t.PLAYREADY="com.microsoft.playready"}(br||(br={}));var Lr="undefined"!=typeof self&&self.navigator&&self.navigator.requestMediaKeySystemAccess?self.navigator.requestMediaKeySystemAccess.bind(self.navigator):null;function Ar(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var Rr,Dr,kr,_r=function(){function t(t){this.hls=void 0,this._widevineLicenseUrl=void 0,this._licenseXhrSetup=void 0,this._licenseResponseCallback=void 0,this._emeEnabled=void 0,this._requestMediaKeySystemAccess=void 0,this._drmSystemOptions=void 0,this._config=void 0,this._mediaKeysList=[],this._media=null,this._hasSetMediaKeys=!1,this._requestLicenseFailureCount=0,this.mediaKeysPromise=null,this._onMediaEncrypted=this.onMediaEncrypted.bind(this),this.hls=t,this._config=t.config,this._widevineLicenseUrl=this._config.widevineLicenseUrl,this._licenseXhrSetup=this._config.licenseXhrSetup,this._licenseResponseCallback=this._config.licenseResponseCallback,this._emeEnabled=this._config.emeEnabled,this._requestMediaKeySystemAccess=this._config.requestMediaKeySystemAccessFunc,this._drmSystemOptions=this._config.drmSystemOptions,this._registerListeners()}var e,r,i,n=t.prototype;return n.destroy=function(){this._unregisterListeners(),this.hls=this._onMediaEncrypted=null,this._requestMediaKeySystemAccess=null},n._registerListeners=function(){this.hls.on(a.a.MEDIA_ATTACHED,this.onMediaAttached,this),this.hls.on(a.a.MEDIA_DETACHED,this.onMediaDetached,this),this.hls.on(a.a.MANIFEST_PARSED,this.onManifestParsed,this)},n._unregisterListeners=function(){this.hls.off(a.a.MEDIA_ATTACHED,this.onMediaAttached,this),this.hls.off(a.a.MEDIA_DETACHED,this.onMediaDetached,this),this.hls.off(a.a.MANIFEST_PARSED,this.onManifestParsed,this)},n.getLicenseServerUrl=function(t){switch(t){case br.WIDEVINE:if(!this._widevineLicenseUrl)break;return this._widevineLicenseUrl}throw new Error('no license server URL configured for key-system "'+t+'"')},n._attemptKeySystemAccess=function(t,e,r){var i=this,n=function(t,e,r,i){switch(t){case br.WIDEVINE:return function(t,e,r){var i={audioCapabilities:[],videoCapabilities:[]};return t.forEach((function(t){i.audioCapabilities.push({contentType:'audio/mp4; codecs="'+t+'"',robustness:r.audioRobustness||""})})),e.forEach((function(t){i.videoCapabilities.push({contentType:'video/mp4; codecs="'+t+'"',robustness:r.videoRobustness||""})})),[i]}(e,r,i);default:throw new Error("Unknown key-system: "+t)}}(t,e,r,this._drmSystemOptions);o.b.log("Requesting encrypted media key-system access");var a=this.requestMediaKeySystemAccess(t,n);this.mediaKeysPromise=a.then((function(e){return i._onMediaKeySystemAccessObtained(t,e)})),a.catch((function(e){o.b.error('Failed to obtain key-system "'+t+'" access:',e)}))},n._onMediaKeySystemAccessObtained=function(t,e){var r=this;o.b.log('Access for key-system "'+t+'" obtained');var i={mediaKeysSessionInitialized:!1,mediaKeySystemAccess:e,mediaKeySystemDomain:t};this._mediaKeysList.push(i);var n=Promise.resolve().then((function(){return e.createMediaKeys()})).then((function(e){return i.mediaKeys=e,o.b.log('Media-keys created for key-system "'+t+'"'),r._onMediaKeysCreated(),e}));return n.catch((function(t){o.b.error("Failed to create media-keys:",t)})),n},n._onMediaKeysCreated=function(){var t=this;this._mediaKeysList.forEach((function(e){e.mediaKeysSession||(e.mediaKeysSession=e.mediaKeys.createSession(),t._onNewMediaKeySession(e.mediaKeysSession))}))},n._onNewMediaKeySession=function(t){var e=this;o.b.log("New key-system session "+t.sessionId),t.addEventListener("message",(function(r){e._onKeySessionMessage(t,r.message)}),!1)},n._onKeySessionMessage=function(t,e){o.b.log("Got EME message event, creating license request"),this._requestLicense(e,(function(e){o.b.log("Received license data (length: "+(e?e.byteLength:e)+"), updating key-session"),t.update(e)}))},n.onMediaEncrypted=function(t){var e=this;if(o.b.log('Media is encrypted using "'+t.initDataType+'" init data type'),!this.mediaKeysPromise)return o.b.error("Fatal: Media is encrypted but no CDM access or no keys have been requested"),void this.hls.trigger(a.a.ERROR,{type:s.b.KEY_SYSTEM_ERROR,details:s.a.KEY_SYSTEM_NO_KEYS,fatal:!0});var r=function(r){e._media&&(e._attemptSetMediaKeys(r),e._generateRequestWithPreferredKeySession(t.initDataType,t.initData))};this.mediaKeysPromise.then(r).catch(r)},n._attemptSetMediaKeys=function(t){if(!this._media)throw new Error("Attempted to set mediaKeys without first attaching a media element");if(!this._hasSetMediaKeys){var e=this._mediaKeysList[0];if(!e||!e.mediaKeys)return o.b.error("Fatal: Media is encrypted but no CDM access or no keys have been obtained yet"),void this.hls.trigger(a.a.ERROR,{type:s.b.KEY_SYSTEM_ERROR,details:s.a.KEY_SYSTEM_NO_KEYS,fatal:!0});o.b.log("Setting keys for encrypted media"),this._media.setMediaKeys(e.mediaKeys),this._hasSetMediaKeys=!0}},n._generateRequestWithPreferredKeySession=function(t,e){var r=this,i=this._mediaKeysList[0];if(!i)return o.b.error("Fatal: Media is encrypted but not any key-system access has been obtained yet"),void this.hls.trigger(a.a.ERROR,{type:s.b.KEY_SYSTEM_ERROR,details:s.a.KEY_SYSTEM_NO_ACCESS,fatal:!0});if(i.mediaKeysSessionInitialized)o.b.warn("Key-Session already initialized but requested again");else{var n=i.mediaKeysSession;if(!n)return o.b.error("Fatal: Media is encrypted but no key-session existing"),void this.hls.trigger(a.a.ERROR,{type:s.b.KEY_SYSTEM_ERROR,details:s.a.KEY_SYSTEM_NO_SESSION,fatal:!0});if(!e)return o.b.warn("Fatal: initData required for generating a key session is null"),void this.hls.trigger(a.a.ERROR,{type:s.b.KEY_SYSTEM_ERROR,details:s.a.KEY_SYSTEM_NO_INIT_DATA,fatal:!0});o.b.log('Generating key-session request for "'+t+'" init data type'),i.mediaKeysSessionInitialized=!0,n.generateRequest(t,e).then((function(){o.b.debug("Key-session generation succeeded")})).catch((function(t){o.b.error("Error generating key-session request:",t),r.hls.trigger(a.a.ERROR,{type:s.b.KEY_SYSTEM_ERROR,details:s.a.KEY_SYSTEM_NO_SESSION,fatal:!1})}))}},n._createLicenseXhr=function(t,e,r){var i=new XMLHttpRequest;i.responseType="arraybuffer",i.onreadystatechange=this._onLicenseRequestReadyStageChange.bind(this,i,t,e,r);var n=this._licenseXhrSetup;if(n)try{n.call(this.hls,i,t),n=void 0}catch(t){o.b.error(t)}try{i.readyState||i.open("POST",t,!0),n&&n.call(this.hls,i,t)}catch(t){throw new Error("issue setting up KeySystem license XHR "+t)}return i},n._onLicenseRequestReadyStageChange=function(t,e,r,i){switch(t.readyState){case 4:if(200===t.status){this._requestLicenseFailureCount=0,o.b.log("License request succeeded");var n=t.response,l=this._licenseResponseCallback;if(l)try{n=l.call(this.hls,t,e)}catch(t){o.b.error(t)}i(n)}else{if(o.b.error("License Request XHR failed ("+e+"). Status: "+t.status+" ("+t.statusText+")"),this._requestLicenseFailureCount++,this._requestLicenseFailureCount>3)return void this.hls.trigger(a.a.ERROR,{type:s.b.KEY_SYSTEM_ERROR,details:s.a.KEY_SYSTEM_LICENSE_REQUEST_FAILED,fatal:!0});var u=3-this._requestLicenseFailureCount+1;o.b.warn("Retrying license request, "+u+" attempts left"),this._requestLicense(r,i)}}},n._generateLicenseRequestChallenge=function(t,e){switch(t.mediaKeySystemDomain){case br.WIDEVINE:return e}throw new Error("unsupported key-system: "+t.mediaKeySystemDomain)},n._requestLicense=function(t,e){o.b.log("Requesting content license for key-system");var r=this._mediaKeysList[0];if(!r)return o.b.error("Fatal error: Media is encrypted but no key-system access has been obtained yet"),void this.hls.trigger(a.a.ERROR,{type:s.b.KEY_SYSTEM_ERROR,details:s.a.KEY_SYSTEM_NO_ACCESS,fatal:!0});try{var i=this.getLicenseServerUrl(r.mediaKeySystemDomain),n=this._createLicenseXhr(i,t,e);o.b.log("Sending license request to URL: "+i);var l=this._generateLicenseRequestChallenge(r,t);n.send(l)}catch(t){o.b.error("Failure requesting DRM license: "+t),this.hls.trigger(a.a.ERROR,{type:s.b.KEY_SYSTEM_ERROR,details:s.a.KEY_SYSTEM_LICENSE_REQUEST_FAILED,fatal:!0})}},n.onMediaAttached=function(t,e){if(this._emeEnabled){var r=e.media;this._media=r,r.addEventListener("encrypted",this._onMediaEncrypted)}},n.onMediaDetached=function(){var t=this._media,e=this._mediaKeysList;t&&(t.removeEventListener("encrypted",this._onMediaEncrypted),this._media=null,this._mediaKeysList=[],Promise.all(e.map((function(t){if(t.mediaKeysSession)return t.mediaKeysSession.close().catch((function(){}))}))).then((function(){return t.setMediaKeys(null)})).catch((function(){})))},n.onManifestParsed=function(t,e){if(this._emeEnabled){var r=e.levels.map((function(t){return t.audioCodec})).filter((function(t){return!!t})),i=e.levels.map((function(t){return t.videoCodec})).filter((function(t){return!!t}));this._attemptKeySystemAccess(br.WIDEVINE,r,i)}},e=t,(r=[{key:"requestMediaKeySystemAccess",get:function(){if(!this._requestMediaKeySystemAccess)throw new Error("No requestMediaKeySystemAccess function configured");return this._requestMediaKeySystemAccess}}])&&Ar(e.prototype,r),i&&Ar(e,i),t}();function Ir(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function Cr(t,e,r){return e&&Ir(t.prototype,e),r&&Ir(t,r),t}function wr(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(r)return(r=r.call(t)).next.bind(r);if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return Or(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Or(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0;return function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function Or(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,i=new Array(e);r<e;r++)i[r]=t[r];return i}function xr(){return(xr=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t}).apply(this,arguments)}!function(t){t.MANIFEST="m",t.AUDIO="a",t.VIDEO="v",t.MUXED="av",t.INIT="i",t.CAPTION="c",t.TIMED_TEXT="tt",t.KEY="k",t.OTHER="o"}(Rr||(Rr={})),function(t){t.DASH="d",t.HLS="h",t.SMOOTH="s",t.OTHER="o"}(Dr||(Dr={})),function(t){t.VOD="v",t.LIVE="l"}(kr||(kr={}));var Pr=function(){function t(e){var r=this;this.hls=void 0,this.config=void 0,this.media=void 0,this.sid=void 0,this.cid=void 0,this.useHeaders=!1,this.initialized=!1,this.starved=!1,this.buffering=!0,this.audioBuffer=void 0,this.videoBuffer=void 0,this.onWaiting=function(){r.initialized&&(r.starved=!0),r.buffering=!0},this.onPlaying=function(){r.initialized||(r.initialized=!0),r.buffering=!1},this.applyPlaylistData=function(t){try{r.apply(t,{ot:Rr.MANIFEST,su:!r.initialized})}catch(t){o.b.warn("Could not generate manifest CMCD data.",t)}},this.applyFragmentData=function(t){try{var e=t.frag,i=r.hls.levels[e.level],n=r.getObjectType(e),a={d:1e3*e.duration,ot:n};n!==Rr.VIDEO&&n!==Rr.AUDIO&&n!=Rr.MUXED||(a.br=i.bitrate/1e3,a.tb=r.getTopBandwidth(n)/1e3,a.bl=r.getBufferLength(n)),r.apply(t,a)}catch(t){o.b.warn("Could not generate segment CMCD data.",t)}},this.hls=e;var i=this.config=e.config,n=i.cmcd;null!=n&&(i.pLoader=this.createPlaylistLoader(),i.fLoader=this.createFragmentLoader(),this.sid=n.sessionId||t.uuid(),this.cid=n.contentId,this.useHeaders=!0===n.useHeaders,this.registerListeners())}var e=t.prototype;return e.registerListeners=function(){var t=this.hls;t.on(a.a.MEDIA_ATTACHED,this.onMediaAttached,this),t.on(a.a.MEDIA_DETACHED,this.onMediaDetached,this),t.on(a.a.BUFFER_CREATED,this.onBufferCreated,this)},e.unregisterListeners=function(){var t=this.hls;t.off(a.a.MEDIA_ATTACHED,this.onMediaAttached,this),t.off(a.a.MEDIA_DETACHED,this.onMediaDetached,this),t.off(a.a.BUFFER_CREATED,this.onBufferCreated,this),this.onMediaDetached()},e.destroy=function(){this.unregisterListeners(),this.hls=this.config=this.audioBuffer=this.videoBuffer=null},e.onMediaAttached=function(t,e){this.media=e.media,this.media.addEventListener("waiting",this.onWaiting),this.media.addEventListener("playing",this.onPlaying)},e.onMediaDetached=function(){this.media&&(this.media.removeEventListener("waiting",this.onWaiting),this.media.removeEventListener("playing",this.onPlaying),this.media=null)},e.onBufferCreated=function(t,e){var r,i;this.audioBuffer=null===(r=e.tracks.audio)||void 0===r?void 0:r.buffer,this.videoBuffer=null===(i=e.tracks.video)||void 0===i?void 0:i.buffer},e.createData=function(){var t;return{v:1,sf:Dr.HLS,sid:this.sid,cid:this.cid,pr:null===(t=this.media)||void 0===t?void 0:t.playbackRate,mtp:this.hls.bandwidthEstimate/1e3}},e.apply=function(e,r){void 0===r&&(r={}),xr(r,this.createData());var i=r.ot===Rr.INIT||r.ot===Rr.VIDEO||r.ot===Rr.MUXED;if(this.starved&&i&&(r.bs=!0,r.su=!0,this.starved=!1),null==r.su&&(r.su=this.buffering),this.useHeaders){var n=t.toHeaders(r);if(!Object.keys(n).length)return;e.headers||(e.headers={}),xr(e.headers,n)}else{var a=t.toQuery(r);if(!a)return;e.url=t.appendQueryToUri(e.url,a)}},e.getObjectType=function(t){var e=t.type;return"subtitle"===e?Rr.TIMED_TEXT:"initSegment"===t.sn?Rr.INIT:"audio"===e?Rr.AUDIO:"main"===e?this.hls.audioTracks.length?Rr.VIDEO:Rr.MUXED:void 0},e.getTopBandwidth=function(t){var e,r=0,i=this.hls;if(t===Rr.AUDIO)e=i.audioTracks;else{var n=i.maxAutoLevel,a=n>-1?n+1:i.levels.length;e=i.levels.slice(0,a)}for(var s,o=wr(e);!(s=o()).done;){var l=s.value;l.bitrate>r&&(r=l.bitrate)}return r>0?r:NaN},e.getBufferLength=function(t){var e=this.hls.media,r=t===Rr.AUDIO?this.audioBuffer:this.videoBuffer;return r&&e?1e3*lt.bufferInfo(r,e.currentTime,this.config.maxBufferHole).len:NaN},e.createPlaylistLoader=function(){var t=this.config.pLoader,e=this.applyPlaylistData,r=t||this.config.loader;return function(){function t(t){this.loader=void 0,this.loader=new r(t)}var i=t.prototype;return i.destroy=function(){this.loader.destroy()},i.abort=function(){this.loader.abort()},i.load=function(t,r,i){e(t),this.loader.load(t,r,i)},Cr(t,[{key:"stats",get:function(){return this.loader.stats}},{key:"context",get:function(){return this.loader.context}}]),t}()},e.createFragmentLoader=function(){var t=this.config.fLoader,e=this.applyFragmentData,r=t||this.config.loader;return function(){function t(t){this.loader=void 0,this.loader=new r(t)}var i=t.prototype;return i.destroy=function(){this.loader.destroy()},i.abort=function(){this.loader.abort()},i.load=function(t,r,i){e(t),this.loader.load(t,r,i)},Cr(t,[{key:"stats",get:function(){return this.loader.stats}},{key:"context",get:function(){return this.loader.context}}]),t}()},t.uuid=function(){var t=URL.createObjectURL(new Blob),e=t.toString();return URL.revokeObjectURL(t),e.substr(e.lastIndexOf("/")+1)},t.serialize=function(t){for(var e,r=[],i=function(t){return!Number.isNaN(t)&&null!=t&&""!==t&&!1!==t},n=function(t){return Math.round(t)},a=function(t){return 100*n(t/100)},s={br:n,d:n,bl:a,dl:a,mtp:a,nor:function(t){return encodeURIComponent(t)},rtp:a,tb:n},o=wr(Object.keys(t||{}).sort());!(e=o()).done;){var l=e.value,u=t[l];if(i(u)&&!("v"===l&&1===u||"pr"==l&&1===u)){var h=s[l];h&&(u=h(u));var d=typeof u,c=void 0;c="ot"===l||"sf"===l||"st"===l?l+"="+u:"boolean"===d?l:"number"===d?l+"="+u:l+"="+JSON.stringify(u),r.push(c)}}return r.join(",")},t.toHeaders=function(e){for(var r={},i=["Object","Request","Session","Status"],n=[{},{},{},{}],a={br:0,d:0,ot:0,tb:0,bl:1,dl:1,mtp:1,nor:1,nrr:1,su:1,cid:2,pr:2,sf:2,sid:2,st:2,v:2,bs:3,rtp:3},s=0,o=Object.keys(e);s<o.length;s++){var l=o[s];n[null!=a[l]?a[l]:1][l]=e[l]}for(var u=0;u<n.length;u++){var h=t.serialize(n[u]);h&&(r["CMCD-"+i[u]]=h)}return r},t.toQuery=function(e){return"CMCD="+encodeURIComponent(t.serialize(e))},t.appendQueryToUri=function(t,e){if(!e)return t;var r=t.includes("?")?"&":"?";return""+t+r+e},t}(),Mr=r(12),Fr=/^age:\s*[\d.]+\s*$/m,Nr=function(){function t(t){this.xhrSetup=void 0,this.requestTimeout=void 0,this.retryTimeout=void 0,this.retryDelay=void 0,this.config=null,this.callbacks=null,this.context=void 0,this.loader=null,this.stats=void 0,this.xhrSetup=t?t.xhrSetup:null,this.stats=new Mr.a,this.retryDelay=0}var e=t.prototype;return e.destroy=function(){this.callbacks=null,this.abortInternal(),this.loader=null,this.config=null},e.abortInternal=function(){var t=this.loader;self.clearTimeout(this.requestTimeout),self.clearTimeout(this.retryTimeout),t&&(t.onreadystatechange=null,t.onprogress=null,4!==t.readyState&&(this.stats.aborted=!0,t.abort()))},e.abort=function(){var t;this.abortInternal(),null!==(t=this.callbacks)&&void 0!==t&&t.onAbort&&this.callbacks.onAbort(this.stats,this.context,this.loader)},e.load=function(t,e,r){if(this.stats.loading.start)throw new Error("Loader can only be used once.");this.stats.loading.start=self.performance.now(),this.context=t,this.config=e,this.callbacks=r,this.retryDelay=e.retryDelay,this.loadInternal()},e.loadInternal=function(){var t=this.config,e=this.context;if(t){var r=this.loader=new self.XMLHttpRequest,i=this.stats;i.loading.first=0,i.loaded=0;var n=this.xhrSetup;try{if(n)try{n(r,e.url)}catch(t){r.open("GET",e.url,!0),n(r,e.url)}r.readyState||r.open("GET",e.url,!0);var a=this.context.headers;if(a)for(var s in a)r.setRequestHeader(s,a[s])}catch(t){return void this.callbacks.onError({code:r.status,text:t.message},e,r)}e.rangeEnd&&r.setRequestHeader("Range","bytes="+e.rangeStart+"-"+(e.rangeEnd-1)),r.onreadystatechange=this.readystatechange.bind(this),r.onprogress=this.loadprogress.bind(this),r.responseType=e.responseType,self.clearTimeout(this.requestTimeout),this.requestTimeout=self.setTimeout(this.loadtimeout.bind(this),t.timeout),r.send()}},e.readystatechange=function(){var t=this.context,e=this.loader,r=this.stats;if(t&&e){var i=e.readyState,n=this.config;if(!r.aborted&&i>=2)if(self.clearTimeout(this.requestTimeout),0===r.loading.first&&(r.loading.first=Math.max(self.performance.now(),r.loading.start)),4===i){e.onreadystatechange=null,e.onprogress=null;var a=e.status;if(a>=200&&a<300){var s,l;if(r.loading.end=Math.max(self.performance.now(),r.loading.first),l="arraybuffer"===t.responseType?(s=e.response).byteLength:(s=e.responseText).length,r.loaded=r.total=l,!this.callbacks)return;var u=this.callbacks.onProgress;if(u&&u(r,t,s,e),!this.callbacks)return;var h={url:e.responseURL,data:s};this.callbacks.onSuccess(h,r,t,e)}else r.retry>=n.maxRetry||a>=400&&a<499?(o.b.error(a+" while loading "+t.url),this.callbacks.onError({code:a,text:e.statusText},t,e)):(o.b.warn(a+" while loading "+t.url+", retrying in "+this.retryDelay+"..."),this.abortInternal(),this.loader=null,self.clearTimeout(this.retryTimeout),this.retryTimeout=self.setTimeout(this.loadInternal.bind(this),this.retryDelay),this.retryDelay=Math.min(2*this.retryDelay,n.maxRetryDelay),r.retry++)}else self.clearTimeout(this.requestTimeout),this.requestTimeout=self.setTimeout(this.loadtimeout.bind(this),n.timeout)}},e.loadtimeout=function(){o.b.warn("timeout while loading "+this.context.url);var t=this.callbacks;t&&(this.abortInternal(),t.onTimeout(this.stats,this.context,this.loader))},e.loadprogress=function(t){var e=this.stats;e.loaded=t.loaded,t.lengthComputable&&(e.total=t.total)},e.getCacheAge=function(){var t=null;if(this.loader&&Fr.test(this.loader.getAllResponseHeaders())){var e=this.loader.getResponseHeader("age");t=e?parseFloat(e):null}return t},t}();function Ur(t){var e="function"==typeof Map?new Map:void 0;return(Ur=function(t){if(null===t||(r=t,-1===Function.toString.call(r).indexOf("[native code]")))return t;var r;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,i)}function i(){return Br(t,arguments,jr(this).constructor)}return i.prototype=Object.create(t.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),Kr(i,t)})(t)}function Br(t,e,r){return(Br=Gr()?Reflect.construct:function(t,e,r){var i=[null];i.push.apply(i,e);var n=new(Function.bind.apply(t,i));return r&&Kr(n,r.prototype),n}).apply(null,arguments)}function Gr(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function Kr(t,e){return(Kr=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function jr(t){return(jr=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function Hr(){return(Hr=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t}).apply(this,arguments)}var Vr=function(){function t(t){this.fetchSetup=void 0,this.requestTimeout=void 0,this.request=void 0,this.response=void 0,this.controller=void 0,this.context=void 0,this.config=null,this.callbacks=null,this.stats=void 0,this.loader=null,this.fetchSetup=t.fetchSetup||Wr,this.controller=new self.AbortController,this.stats=new Mr.a}var e=t.prototype;return e.destroy=function(){this.loader=this.callbacks=null,this.abortInternal()},e.abortInternal=function(){var t=this.response;t&&t.ok||(this.stats.aborted=!0,this.controller.abort())},e.abort=function(){var t;this.abortInternal(),null!==(t=this.callbacks)&&void 0!==t&&t.onAbort&&this.callbacks.onAbort(this.stats,this.context,this.response)},e.load=function(t,e,r){var i=this,a=this.stats;if(a.loading.start)throw new Error("Loader can only be used once.");a.loading.start=self.performance.now();var s=function(t,e){var r={method:"GET",mode:"cors",credentials:"same-origin",signal:e,headers:new self.Headers(Hr({},t.headers))};t.rangeEnd&&r.headers.set("Range","bytes="+t.rangeStart+"-"+String(t.rangeEnd-1));return r}(t,this.controller.signal),o=r.onProgress,l="arraybuffer"===t.responseType,u=l?"byteLength":"length";this.context=t,this.config=e,this.callbacks=r,this.request=this.fetchSetup(t,s),self.clearTimeout(this.requestTimeout),this.requestTimeout=self.setTimeout((function(){i.abortInternal(),r.onTimeout(a,t,i.response)}),e.timeout),self.fetch(this.request).then((function(r){if(i.response=i.loader=r,!r.ok){var s=r.status,u=r.statusText;throw new Yr(u||"fetch, bad network response",s,r)}return a.loading.first=Math.max(self.performance.now(),a.loading.start),a.total=parseInt(r.headers.get("Content-Length")||"0"),o&&Object(n.a)(e.highWaterMark)?i.loadProgressively(r,a,t,e.highWaterMark,o):l?r.arrayBuffer():r.text()})).then((function(s){var l=i.response;self.clearTimeout(i.requestTimeout),a.loading.end=Math.max(self.performance.now(),a.loading.first),a.loaded=a.total=s[u];var h={url:l.url,data:s};o&&!Object(n.a)(e.highWaterMark)&&o(a,t,s,l),r.onSuccess(h,a,t,l)})).catch((function(e){if(self.clearTimeout(i.requestTimeout),!a.aborted){var n=e.code||0;r.onError({code:n,text:e.message},t,e.details)}}))},e.getCacheAge=function(){var t=null;if(this.response){var e=this.response.headers.get("age");t=e?parseFloat(e):null}return t},e.loadProgressively=function(t,e,r,i,n){void 0===i&&(i=0);var a=new oe.a,s=t.body.getReader();return function o(){return s.read().then((function(s){if(s.done)return a.dataLength&&n(e,r,a.flush(),t),Promise.resolve(new ArrayBuffer(0));var l=s.value,u=l.length;return e.loaded+=u,u<i||a.dataLength?(a.push(l),a.dataLength>=i&&n(e,r,a.flush(),t)):n(e,r,l,t),o()})).catch((function(){return Promise.reject()}))}()},t}();function Wr(t,e){return new self.Request(t.url,e)}var Yr=function(t){var e,r;function i(e,r,i){var n;return(n=t.call(this,e)||this).code=void 0,n.details=void 0,n.code=r,n.details=i,n}return r=t,(e=i).prototype=Object.create(r.prototype),e.prototype.constructor=e,Kr(e,r),i}(Ur(Error)),qr=Vr,Xr=/\s/;function zr(){return(zr=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t}).apply(this,arguments)}function Qr(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}function $r(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?Qr(Object(r),!0).forEach((function(e){Jr(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Qr(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function Jr(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var Zr=$r($r({autoStartLoad:!0,startPosition:-1,defaultAudioCodec:void 0,debug:!1,capLevelOnFPSDrop:!1,capLevelToPlayerSize:!1,initialLiveManifestSize:1,maxBufferLength:30,backBufferLength:1/0,maxBufferSize:6e7,maxBufferHole:.1,highBufferWatchdogPeriod:2,nudgeOffset:.1,nudgeMaxRetry:3,maxFragLookUpTolerance:.25,liveSyncDurationCount:3,liveMaxLatencyDurationCount:1/0,liveSyncDuration:void 0,liveMaxLatencyDuration:void 0,maxLiveSyncPlaybackRate:1,liveDurationInfinity:!1,liveBackBufferLength:null,maxMaxBufferLength:600,enableWorker:!0,enableSoftwareAES:!0,manifestLoadingTimeOut:1e4,manifestLoadingMaxRetry:1,manifestLoadingRetryDelay:1e3,manifestLoadingMaxRetryTimeout:64e3,startLevel:void 0,levelLoadingTimeOut:1e4,levelLoadingMaxRetry:4,levelLoadingRetryDelay:1e3,levelLoadingMaxRetryTimeout:64e3,fragLoadingTimeOut:2e4,fragLoadingMaxRetry:6,fragLoadingRetryDelay:1e3,fragLoadingMaxRetryTimeout:64e3,startFragPrefetch:!1,fpsDroppedMonitoringPeriod:5e3,fpsDroppedMonitoringThreshold:.2,appendErrorMaxRetry:3,loader:Nr,fLoader:void 0,pLoader:void 0,xhrSetup:void 0,licenseXhrSetup:void 0,licenseResponseCallback:void 0,abrController:se,bufferController:Re,capLevelController:Er,fpsController:Sr,stretchShortVideoTrack:!1,maxAudioFramesDrift:1,forceKeyFrameOnDiscontinuity:!0,abrEwmaFastLive:3,abrEwmaSlowLive:9,abrEwmaFastVoD:3,abrEwmaSlowVoD:9,abrEwmaDefaultEstimate:5e5,abrBandWidthFactor:.95,abrBandWidthUpFactor:.7,abrMaxWithRealBitrate:!1,maxStarvationDelay:4,maxLoadingDelay:4,minAutoBitrate:0,emeEnabled:!1,widevineLicenseUrl:void 0,drmSystemOptions:{},requestMediaKeySystemAccessFunc:Lr,testBandwidth:!0,progressive:!1,lowLatencyMode:!0,cmcd:void 0},{cueHandler:{newCue:function(t,e,r,i){for(var n,a,s,o,l,u=[],h=self.VTTCue||self.TextTrackCue,d=0;d<i.rows.length;d++)if(s=!0,o=0,l="",!(n=i.rows[d]).isEmpty()){for(var c=0;c<n.chars.length;c++)Xr.test(n.chars[c].uchar)&&s?o++:(l+=n.chars[c].uchar,s=!1);n.cueStartTime=e,e===r&&(r+=1e-4),o>=16?o--:o++;var f=Je(l.trim()),g=ar(e,r,f);t&&t.cues&&t.cues.getCueById(g)||((a=new h(e,r,f)).id=g,a.line=d+1,a.align="left",a.position=10+Math.min(80,10*Math.floor(8*o/32)),u.push(a))}return t&&u.length&&(u.sort((function(t,e){return"auto"===t.line||"auto"===e.line?0:t.line>8&&e.line>8?e.line-t.line:t.line-e.line})),u.forEach((function(e){return O(t,e)}))),u}},enableCEA708Captions:!0,enableWebVTT:!0,enableIMSC1:!0,captionsTextTrack1Label:"English",captionsTextTrack1LanguageCode:"en",captionsTextTrack2Label:"Spanish",captionsTextTrack2LanguageCode:"es",captionsTextTrack3Label:"Unknown CC",captionsTextTrack3LanguageCode:"",captionsTextTrack4Label:"Unknown CC",captionsTextTrack4LanguageCode:"",renderTextTracksNatively:!0}),{},{subtitleStreamController:pe,subtitleTrackController:Ee,timelineController:mr,audioStreamController:he,audioTrackController:fe,emeController:_r,cmcdController:Pr});function ti(t){var e=t.loader;e!==qr&&e!==Nr?(o.b.log("[config]: Custom loader detected, cannot enable progressive streaming"),t.progressive=!1):function(){if(self.fetch&&self.AbortController&&self.ReadableStream&&self.Request)try{return new self.ReadableStream({}),!0}catch(t){}return!1}()&&(t.loader=qr,t.progressive=!0,t.enableSoftwareAES=!0,o.b.log("[config]: Progressive streaming enabled, using FetchLoader"))}function ei(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var ri=function(){function t(e){void 0===e&&(e={}),this.config=void 0,this.userConfig=void 0,this.coreComponents=void 0,this.networkControllers=void 0,this._emitter=new Qt.EventEmitter,this._autoLevelCapping=void 0,this.abrController=void 0,this.bufferController=void 0,this.capLevelController=void 0,this.latencyController=void 0,this.levelController=void 0,this.streamController=void 0,this.audioTrackController=void 0,this.subtitleTrackController=void 0,this.emeController=void 0,this.cmcdController=void 0,this._media=null,this.url=null;var r=this.config=function(t,e){if((e.liveSyncDurationCount||e.liveMaxLatencyDurationCount)&&(e.liveSyncDuration||e.liveMaxLatencyDuration))throw new Error("Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration");if(void 0!==e.liveMaxLatencyDurationCount&&(void 0===e.liveSyncDurationCount||e.liveMaxLatencyDurationCount<=e.liveSyncDurationCount))throw new Error('Illegal hls.js config: "liveMaxLatencyDurationCount" must be greater than "liveSyncDurationCount"');if(void 0!==e.liveMaxLatencyDuration&&(void 0===e.liveSyncDuration||e.liveMaxLatencyDuration<=e.liveSyncDuration))throw new Error('Illegal hls.js config: "liveMaxLatencyDuration" must be greater than "liveSyncDuration"');return zr({},t,e)}(t.DefaultConfig,e);this.userConfig=e,Object(o.a)(r.debug),this._autoLevelCapping=-1,r.progressive&&ti(r);var i=r.abrController,n=r.bufferController,a=r.capLevelController,s=r.fpsController,l=this.abrController=new i(this),u=this.bufferController=new n(this),h=this.capLevelController=new a(this),d=new s(this),c=new I(this),f=new C(this),g=new F(this),v=this.levelController=new rt(this),p=new it(this),m=this.streamController=new re(this,p);h.setStreamController(m),d.setStreamController(m);var y=[v,m];this.networkControllers=y;var T=[c,f,l,u,h,d,g,p];this.audioTrackController=this.createController(r.audioTrackController,null,y),this.createController(r.audioStreamController,p,y),this.subtitleTrackController=this.createController(r.subtitleTrackController,null,y),this.createController(r.subtitleStreamController,p,y),this.createController(r.timelineController,null,T),this.emeController=this.createController(r.emeController,null,T),this.cmcdController=this.createController(r.cmcdController,null,T),this.latencyController=this.createController(B,null,T),this.coreComponents=T}t.isSupported=function(){return function(){var t=Yt();if(!t)return!1;var e=qt(),r=t&&"function"==typeof t.isTypeSupported&&t.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"'),i=!e||e.prototype&&"function"==typeof e.prototype.appendBuffer&&"function"==typeof e.prototype.remove;return!!r&&!!i}()};var e,r,n,l=t.prototype;return l.createController=function(t,e,r){if(t){var i=e?new t(this,e):new t(this);return r&&r.push(i),i}return null},l.on=function(t,e,r){void 0===r&&(r=this),this._emitter.on(t,e,r)},l.once=function(t,e,r){void 0===r&&(r=this),this._emitter.once(t,e,r)},l.removeAllListeners=function(t){this._emitter.removeAllListeners(t)},l.off=function(t,e,r,i){void 0===r&&(r=this),this._emitter.off(t,e,r,i)},l.listeners=function(t){return this._emitter.listeners(t)},l.emit=function(t,e,r){return this._emitter.emit(t,e,r)},l.trigger=function(t,e){if(this.config.debug)return this.emit(t,t,e);try{return this.emit(t,t,e)}catch(e){o.b.error("An internal error happened while handling event "+t+'. Error message: "'+e.message+'". Here is a stacktrace:',e),this.trigger(a.a.ERROR,{type:s.b.OTHER_ERROR,details:s.a.INTERNAL_EXCEPTION,fatal:!1,event:t,error:e})}return!1},l.listenerCount=function(t){return this._emitter.listenerCount(t)},l.destroy=function(){o.b.log("destroy"),this.trigger(a.a.DESTROYING,void 0),this.detachMedia(),this.removeAllListeners(),this._autoLevelCapping=-1,this.url=null,this.networkControllers.forEach((function(t){return t.destroy()})),this.networkControllers.length=0,this.coreComponents.forEach((function(t){return t.destroy()})),this.coreComponents.length=0},l.attachMedia=function(t){o.b.log("attachMedia"),this._media=t,this.trigger(a.a.MEDIA_ATTACHING,{media:t})},l.detachMedia=function(){o.b.log("detachMedia"),this.trigger(a.a.MEDIA_DETACHING,void 0),this._media=null},l.loadSource=function(t){this.stopLoad();var e=this.media,r=this.url,n=this.url=i.buildAbsoluteURL(self.location.href,t,{alwaysNormalize:!0});o.b.log("loadSource:"+n),e&&r&&r!==n&&this.bufferController.hasSourceTypes()&&(this.detachMedia(),this.attachMedia(e)),this.trigger(a.a.MANIFEST_LOADING,{url:t})},l.startLoad=function(t){void 0===t&&(t=-1),o.b.log("startLoad("+t+")"),this.networkControllers.forEach((function(e){e.startLoad(t)}))},l.stopLoad=function(){o.b.log("stopLoad"),this.networkControllers.forEach((function(t){t.stopLoad()}))},l.swapAudioCodec=function(){o.b.log("swapAudioCodec"),this.streamController.swapAudioCodec()},l.recoverMediaError=function(){o.b.log("recoverMediaError");var t=this._media;this.detachMedia(),t&&this.attachMedia(t)},l.removeLevel=function(t,e){void 0===e&&(e=0),this.levelController.removeLevel(t,e)},e=t,n=[{key:"version",get:function(){return"1.1.4"}},{key:"Events",get:function(){return a.a}},{key:"ErrorTypes",get:function(){return s.b}},{key:"ErrorDetails",get:function(){return s.a}},{key:"DefaultConfig",get:function(){return t.defaultConfig?t.defaultConfig:Zr},set:function(e){t.defaultConfig=e}}],(r=[{key:"levels",get:function(){var t=this.levelController.levels;return t||[]}},{key:"currentLevel",get:function(){return this.streamController.currentLevel},set:function(t){o.b.log("set currentLevel:"+t),this.loadLevel=t,this.abrController.clearTimer(),this.streamController.immediateLevelSwitch()}},{key:"nextLevel",get:function(){return this.streamController.nextLevel},set:function(t){o.b.log("set nextLevel:"+t),this.levelController.manualLevel=t,this.streamController.nextLevelSwitch()}},{key:"loadLevel",get:function(){return this.levelController.level},set:function(t){o.b.log("set loadLevel:"+t),this.levelController.manualLevel=t}},{key:"nextLoadLevel",get:function(){return this.levelController.nextLoadLevel},set:function(t){this.levelController.nextLoadLevel=t}},{key:"firstLevel",get:function(){return Math.max(this.levelController.firstLevel,this.minAutoLevel)},set:function(t){o.b.log("set firstLevel:"+t),this.levelController.firstLevel=t}},{key:"startLevel",get:function(){return this.levelController.startLevel},set:function(t){o.b.log("set startLevel:"+t),-1!==t&&(t=Math.max(t,this.minAutoLevel)),this.levelController.startLevel=t}},{key:"capLevelToPlayerSize",get:function(){return this.config.capLevelToPlayerSize},set:function(t){var e=!!t;e!==this.config.capLevelToPlayerSize&&(e?this.capLevelController.startCapping():(this.capLevelController.stopCapping(),this.autoLevelCapping=-1,this.streamController.nextLevelSwitch()),this.config.capLevelToPlayerSize=e)}},{key:"autoLevelCapping",get:function(){return this._autoLevelCapping},set:function(t){this._autoLevelCapping!==t&&(o.b.log("set autoLevelCapping:"+t),this._autoLevelCapping=t)}},{key:"bandwidthEstimate",get:function(){var t=this.abrController.bwEstimator;return t?t.getEstimate():NaN}},{key:"autoLevelEnabled",get:function(){return-1===this.levelController.manualLevel}},{key:"manualLevel",get:function(){return this.levelController.manualLevel}},{key:"minAutoLevel",get:function(){var t=this.levels,e=this.config.minAutoBitrate;if(!t)return 0;for(var r=t.length,i=0;i<r;i++)if(t[i].maxBitrate>e)return i;return 0}},{key:"maxAutoLevel",get:function(){var t=this.levels,e=this.autoLevelCapping;return-1===e&&t&&t.length?t.length-1:e}},{key:"nextAutoLevel",get:function(){return Math.min(Math.max(this.abrController.nextAutoLevel,this.minAutoLevel),this.maxAutoLevel)},set:function(t){this.abrController.nextAutoLevel=Math.max(this.minAutoLevel,t)}},{key:"audioTracks",get:function(){var t=this.audioTrackController;return t?t.audioTracks:[]}},{key:"audioTrack",get:function(){var t=this.audioTrackController;return t?t.audioTrack:-1},set:function(t){var e=this.audioTrackController;e&&(e.audioTrack=t)}},{key:"subtitleTracks",get:function(){var t=this.subtitleTrackController;return t?t.subtitleTracks:[]}},{key:"subtitleTrack",get:function(){var t=this.subtitleTrackController;return t?t.subtitleTrack:-1},set:function(t){var e=this.subtitleTrackController;e&&(e.subtitleTrack=t)}},{key:"media",get:function(){return this._media}},{key:"subtitleDisplay",get:function(){var t=this.subtitleTrackController;return!!t&&t.subtitleDisplay},set:function(t){var e=this.subtitleTrackController;e&&(e.subtitleDisplay=t)}},{key:"lowLatencyMode",get:function(){return this.config.lowLatencyMode},set:function(t){this.config.lowLatencyMode=t}},{key:"liveSyncPosition",get:function(){return this.latencyController.liveSyncPosition}},{key:"latency",get:function(){return this.latencyController.latency}},{key:"maxLatency",get:function(){return this.latencyController.maxLatency}},{key:"targetLatency",get:function(){return this.latencyController.targetLatency}},{key:"drift",get:function(){return this.latencyController.drift}},{key:"forceStartLoad",get:function(){return this.streamController.forceStartLoad}}])&&ei(e.prototype,r),n&&ei(e,n),t}();ri.defaultConfig=void 0}]).default}));
//# sourceMappingURL=hls.min.js.map
(function(scope){
'use strict';

function F(arity, fun, wrapper) {
  wrapper.a = arity;
  wrapper.f = fun;
  return wrapper;
}

function F2(fun) {
  return F(2, fun, function(a) { return function(b) { return fun(a,b); }; })
}
function F3(fun) {
  return F(3, fun, function(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  });
}
function F4(fun) {
  return F(4, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  });
}
function F5(fun) {
  return F(5, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  });
}
function F6(fun) {
  return F(6, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  });
}
function F7(fun) {
  return F(7, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  });
}
function F8(fun) {
  return F(8, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  });
}
function F9(fun) {
  return F(9, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  });
}

function A2(fun, a, b) {
  return fun.a === 2 ? fun.f(a, b) : fun(a)(b);
}
function A3(fun, a, b, c) {
  return fun.a === 3 ? fun.f(a, b, c) : fun(a)(b)(c);
}
function A4(fun, a, b, c, d) {
  return fun.a === 4 ? fun.f(a, b, c, d) : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e) {
  return fun.a === 5 ? fun.f(a, b, c, d, e) : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f) {
  return fun.a === 6 ? fun.f(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g) {
  return fun.a === 7 ? fun.f(a, b, c, d, e, f, g) : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h) {
  return fun.a === 8 ? fun.f(a, b, c, d, e, f, g, h) : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i) {
  return fun.a === 9 ? fun.f(a, b, c, d, e, f, g, h, i) : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}

console.warn('Compiled in DEV mode. Follow the advice at https://elm-lang.org/0.19.1/optimize for better performance and smaller assets.');


// EQUALITY

function _Utils_eq(x, y)
{
	for (
		var pair, stack = [], isEqual = _Utils_eqHelp(x, y, 0, stack);
		isEqual && (pair = stack.pop());
		isEqual = _Utils_eqHelp(pair.a, pair.b, 0, stack)
		)
	{}

	return isEqual;
}

function _Utils_eqHelp(x, y, depth, stack)
{
	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object' || x === null || y === null)
	{
		typeof x === 'function' && _Debug_crash(5);
		return false;
	}

	if (depth > 100)
	{
		stack.push(_Utils_Tuple2(x,y));
		return true;
	}

	/**/
	if (x.$ === 'Set_elm_builtin')
	{
		x = $elm$core$Set$toList(x);
		y = $elm$core$Set$toList(y);
	}
	if (x.$ === 'RBNode_elm_builtin' || x.$ === 'RBEmpty_elm_builtin')
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	/**_UNUSED/
	if (x.$ < 0)
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	for (var key in x)
	{
		if (!_Utils_eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

var _Utils_equal = F2(_Utils_eq);
var _Utils_notEqual = F2(function(a, b) { return !_Utils_eq(a,b); });



// COMPARISONS

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

function _Utils_cmp(x, y, ord)
{
	if (typeof x !== 'object')
	{
		return x === y ? /*EQ*/ 0 : x < y ? /*LT*/ -1 : /*GT*/ 1;
	}

	/**/
	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? 0 : a < b ? -1 : 1;
	}
	//*/

	/**_UNUSED/
	if (typeof x.$ === 'undefined')
	//*/
	/**/
	if (x.$[0] === '#')
	//*/
	{
		return (ord = _Utils_cmp(x.a, y.a))
			? ord
			: (ord = _Utils_cmp(x.b, y.b))
				? ord
				: _Utils_cmp(x.c, y.c);
	}

	// traverse conses until end of a list or a mismatch
	for (; x.b && y.b && !(ord = _Utils_cmp(x.a, y.a)); x = x.b, y = y.b) {} // WHILE_CONSES
	return ord || (x.b ? /*GT*/ 1 : y.b ? /*LT*/ -1 : /*EQ*/ 0);
}

var _Utils_lt = F2(function(a, b) { return _Utils_cmp(a, b) < 0; });
var _Utils_le = F2(function(a, b) { return _Utils_cmp(a, b) < 1; });
var _Utils_gt = F2(function(a, b) { return _Utils_cmp(a, b) > 0; });
var _Utils_ge = F2(function(a, b) { return _Utils_cmp(a, b) >= 0; });

var _Utils_compare = F2(function(x, y)
{
	var n = _Utils_cmp(x, y);
	return n < 0 ? $elm$core$Basics$LT : n ? $elm$core$Basics$GT : $elm$core$Basics$EQ;
});


// COMMON VALUES

var _Utils_Tuple0_UNUSED = 0;
var _Utils_Tuple0 = { $: '#0' };

function _Utils_Tuple2_UNUSED(a, b) { return { a: a, b: b }; }
function _Utils_Tuple2(a, b) { return { $: '#2', a: a, b: b }; }

function _Utils_Tuple3_UNUSED(a, b, c) { return { a: a, b: b, c: c }; }
function _Utils_Tuple3(a, b, c) { return { $: '#3', a: a, b: b, c: c }; }

function _Utils_chr_UNUSED(c) { return c; }
function _Utils_chr(c) { return new String(c); }


// RECORDS

function _Utils_update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}


// APPEND

var _Utils_append = F2(_Utils_ap);

function _Utils_ap(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (!xs.b)
	{
		return ys;
	}
	var root = _List_Cons(xs.a, ys);
	xs = xs.b
	for (var curr = root; xs.b; xs = xs.b) // WHILE_CONS
	{
		curr = curr.b = _List_Cons(xs.a, ys);
	}
	return root;
}



var _List_Nil_UNUSED = { $: 0 };
var _List_Nil = { $: '[]' };

function _List_Cons_UNUSED(hd, tl) { return { $: 1, a: hd, b: tl }; }
function _List_Cons(hd, tl) { return { $: '::', a: hd, b: tl }; }


var _List_cons = F2(_List_Cons);

function _List_fromArray(arr)
{
	var out = _List_Nil;
	for (var i = arr.length; i--; )
	{
		out = _List_Cons(arr[i], out);
	}
	return out;
}

function _List_toArray(xs)
{
	for (var out = []; xs.b; xs = xs.b) // WHILE_CONS
	{
		out.push(xs.a);
	}
	return out;
}

var _List_map2 = F3(function(f, xs, ys)
{
	for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) // WHILE_CONSES
	{
		arr.push(A2(f, xs.a, ys.a));
	}
	return _List_fromArray(arr);
});

var _List_map3 = F4(function(f, xs, ys, zs)
{
	for (var arr = []; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A3(f, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map4 = F5(function(f, ws, xs, ys, zs)
{
	for (var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A4(f, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map5 = F6(function(f, vs, ws, xs, ys, zs)
{
	for (var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_sortBy = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		return _Utils_cmp(f(a), f(b));
	}));
});

var _List_sortWith = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		var ord = A2(f, a, b);
		return ord === $elm$core$Basics$EQ ? 0 : ord === $elm$core$Basics$LT ? -1 : 1;
	}));
});



var _JsArray_empty = [];

function _JsArray_singleton(value)
{
    return [value];
}

function _JsArray_length(array)
{
    return array.length;
}

var _JsArray_initialize = F3(function(size, offset, func)
{
    var result = new Array(size);

    for (var i = 0; i < size; i++)
    {
        result[i] = func(offset + i);
    }

    return result;
});

var _JsArray_initializeFromList = F2(function (max, ls)
{
    var result = new Array(max);

    for (var i = 0; i < max && ls.b; i++)
    {
        result[i] = ls.a;
        ls = ls.b;
    }

    result.length = i;
    return _Utils_Tuple2(result, ls);
});

var _JsArray_unsafeGet = F2(function(index, array)
{
    return array[index];
});

var _JsArray_unsafeSet = F3(function(index, value, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[index] = value;
    return result;
});

var _JsArray_push = F2(function(value, array)
{
    var length = array.length;
    var result = new Array(length + 1);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[length] = value;
    return result;
});

var _JsArray_foldl = F3(function(func, acc, array)
{
    var length = array.length;

    for (var i = 0; i < length; i++)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_foldr = F3(function(func, acc, array)
{
    for (var i = array.length - 1; i >= 0; i--)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_map = F2(function(func, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = func(array[i]);
    }

    return result;
});

var _JsArray_indexedMap = F3(function(func, offset, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = A2(func, offset + i, array[i]);
    }

    return result;
});

var _JsArray_slice = F3(function(from, to, array)
{
    return array.slice(from, to);
});

var _JsArray_appendN = F3(function(n, dest, source)
{
    var destLen = dest.length;
    var itemsToCopy = n - destLen;

    if (itemsToCopy > source.length)
    {
        itemsToCopy = source.length;
    }

    var size = destLen + itemsToCopy;
    var result = new Array(size);

    for (var i = 0; i < destLen; i++)
    {
        result[i] = dest[i];
    }

    for (var i = 0; i < itemsToCopy; i++)
    {
        result[i + destLen] = source[i];
    }

    return result;
});



// LOG

var _Debug_log_UNUSED = F2(function(tag, value)
{
	return value;
});

var _Debug_log = F2(function(tag, value)
{
	console.log(tag + ': ' + _Debug_toString(value));
	return value;
});


// TODOS

function _Debug_todo(moduleName, region)
{
	return function(message) {
		_Debug_crash(8, moduleName, region, message);
	};
}

function _Debug_todoCase(moduleName, region, value)
{
	return function(message) {
		_Debug_crash(9, moduleName, region, value, message);
	};
}


// TO STRING

function _Debug_toString_UNUSED(value)
{
	return '<internals>';
}

function _Debug_toString(value)
{
	return _Debug_toAnsiString(false, value);
}

function _Debug_toAnsiString(ansi, value)
{
	if (typeof value === 'function')
	{
		return _Debug_internalColor(ansi, '<function>');
	}

	if (typeof value === 'boolean')
	{
		return _Debug_ctorColor(ansi, value ? 'True' : 'False');
	}

	if (typeof value === 'number')
	{
		return _Debug_numberColor(ansi, value + '');
	}

	if (value instanceof String)
	{
		return _Debug_charColor(ansi, "'" + _Debug_addSlashes(value, true) + "'");
	}

	if (typeof value === 'string')
	{
		return _Debug_stringColor(ansi, '"' + _Debug_addSlashes(value, false) + '"');
	}

	if (typeof value === 'object' && '$' in value)
	{
		var tag = value.$;

		if (typeof tag === 'number')
		{
			return _Debug_internalColor(ansi, '<internals>');
		}

		if (tag[0] === '#')
		{
			var output = [];
			for (var k in value)
			{
				if (k === '$') continue;
				output.push(_Debug_toAnsiString(ansi, value[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (tag === 'Set_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Set')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Set$toList(value));
		}

		if (tag === 'RBNode_elm_builtin' || tag === 'RBEmpty_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Dict')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Dict$toList(value));
		}

		if (tag === 'Array_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Array')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Array$toList(value));
		}

		if (tag === '::' || tag === '[]')
		{
			var output = '[';

			value.b && (output += _Debug_toAnsiString(ansi, value.a), value = value.b)

			for (; value.b; value = value.b) // WHILE_CONS
			{
				output += ',' + _Debug_toAnsiString(ansi, value.a);
			}
			return output + ']';
		}

		var output = '';
		for (var i in value)
		{
			if (i === '$') continue;
			var str = _Debug_toAnsiString(ansi, value[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '[' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return _Debug_ctorColor(ansi, tag) + output;
	}

	if (typeof DataView === 'function' && value instanceof DataView)
	{
		return _Debug_stringColor(ansi, '<' + value.byteLength + ' bytes>');
	}

	if (typeof File !== 'undefined' && value instanceof File)
	{
		return _Debug_internalColor(ansi, '<' + value.name + '>');
	}

	if (typeof value === 'object')
	{
		var output = [];
		for (var key in value)
		{
			var field = key[0] === '_' ? key.slice(1) : key;
			output.push(_Debug_fadeColor(ansi, field) + ' = ' + _Debug_toAnsiString(ansi, value[key]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return _Debug_internalColor(ansi, '<internals>');
}

function _Debug_addSlashes(str, isChar)
{
	var s = str
		.replace(/\\/g, '\\\\')
		.replace(/\n/g, '\\n')
		.replace(/\t/g, '\\t')
		.replace(/\r/g, '\\r')
		.replace(/\v/g, '\\v')
		.replace(/\0/g, '\\0');

	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}

function _Debug_ctorColor(ansi, string)
{
	return ansi ? '\x1b[96m' + string + '\x1b[0m' : string;
}

function _Debug_numberColor(ansi, string)
{
	return ansi ? '\x1b[95m' + string + '\x1b[0m' : string;
}

function _Debug_stringColor(ansi, string)
{
	return ansi ? '\x1b[93m' + string + '\x1b[0m' : string;
}

function _Debug_charColor(ansi, string)
{
	return ansi ? '\x1b[92m' + string + '\x1b[0m' : string;
}

function _Debug_fadeColor(ansi, string)
{
	return ansi ? '\x1b[37m' + string + '\x1b[0m' : string;
}

function _Debug_internalColor(ansi, string)
{
	return ansi ? '\x1b[36m' + string + '\x1b[0m' : string;
}

function _Debug_toHexDigit(n)
{
	return String.fromCharCode(n < 10 ? 48 + n : 55 + n);
}


// CRASH


function _Debug_crash_UNUSED(identifier)
{
	throw new Error('https://github.com/elm/core/blob/1.0.0/hints/' + identifier + '.md');
}


function _Debug_crash(identifier, fact1, fact2, fact3, fact4)
{
	switch(identifier)
	{
		case 0:
			throw new Error('What node should I take over? In JavaScript I need something like:\n\n    Elm.Main.init({\n        node: document.getElementById("elm-node")\n    })\n\nYou need to do this with any Browser.sandbox or Browser.element program.');

		case 1:
			throw new Error('Browser.application programs cannot handle URLs like this:\n\n    ' + document.location.href + '\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.');

		case 2:
			var jsonErrorString = fact1;
			throw new Error('Problem with the flags given to your Elm program on initialization.\n\n' + jsonErrorString);

		case 3:
			var portName = fact1;
			throw new Error('There can only be one port named `' + portName + '`, but your program has multiple.');

		case 4:
			var portName = fact1;
			var problem = fact2;
			throw new Error('Trying to send an unexpected type of value through port `' + portName + '`:\n' + problem);

		case 5:
			throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');

		case 6:
			var moduleName = fact1;
			throw new Error('Your page is loading multiple Elm scripts with a module named ' + moduleName + '. Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!');

		case 8:
			var moduleName = fact1;
			var region = fact2;
			var message = fact3;
			throw new Error('TODO in module `' + moduleName + '` ' + _Debug_regionToString(region) + '\n\n' + message);

		case 9:
			var moduleName = fact1;
			var region = fact2;
			var value = fact3;
			var message = fact4;
			throw new Error(
				'TODO in module `' + moduleName + '` from the `case` expression '
				+ _Debug_regionToString(region) + '\n\nIt received the following value:\n\n    '
				+ _Debug_toString(value).replace('\n', '\n    ')
				+ '\n\nBut the branch that handles it says:\n\n    ' + message.replace('\n', '\n    ')
			);

		case 10:
			throw new Error('Bug in https://github.com/elm/virtual-dom/issues');

		case 11:
			throw new Error('Cannot perform mod 0. Division by zero error.');
	}
}

function _Debug_regionToString(region)
{
	if (region.start.line === region.end.line)
	{
		return 'on line ' + region.start.line;
	}
	return 'on lines ' + region.start.line + ' through ' + region.end.line;
}



// MATH

var _Basics_add = F2(function(a, b) { return a + b; });
var _Basics_sub = F2(function(a, b) { return a - b; });
var _Basics_mul = F2(function(a, b) { return a * b; });
var _Basics_fdiv = F2(function(a, b) { return a / b; });
var _Basics_idiv = F2(function(a, b) { return (a / b) | 0; });
var _Basics_pow = F2(Math.pow);

var _Basics_remainderBy = F2(function(b, a) { return a % b; });

// https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/divmodnote-letter.pdf
var _Basics_modBy = F2(function(modulus, x)
{
	var answer = x % modulus;
	return modulus === 0
		? _Debug_crash(11)
		:
	((answer > 0 && modulus < 0) || (answer < 0 && modulus > 0))
		? answer + modulus
		: answer;
});


// TRIGONOMETRY

var _Basics_pi = Math.PI;
var _Basics_e = Math.E;
var _Basics_cos = Math.cos;
var _Basics_sin = Math.sin;
var _Basics_tan = Math.tan;
var _Basics_acos = Math.acos;
var _Basics_asin = Math.asin;
var _Basics_atan = Math.atan;
var _Basics_atan2 = F2(Math.atan2);


// MORE MATH

function _Basics_toFloat(x) { return x; }
function _Basics_truncate(n) { return n | 0; }
function _Basics_isInfinite(n) { return n === Infinity || n === -Infinity; }

var _Basics_ceiling = Math.ceil;
var _Basics_floor = Math.floor;
var _Basics_round = Math.round;
var _Basics_sqrt = Math.sqrt;
var _Basics_log = Math.log;
var _Basics_isNaN = isNaN;


// BOOLEANS

function _Basics_not(bool) { return !bool; }
var _Basics_and = F2(function(a, b) { return a && b; });
var _Basics_or  = F2(function(a, b) { return a || b; });
var _Basics_xor = F2(function(a, b) { return a !== b; });



var _String_cons = F2(function(chr, str)
{
	return chr + str;
});

function _String_uncons(string)
{
	var word = string.charCodeAt(0);
	return !isNaN(word)
		? $elm$core$Maybe$Just(
			0xD800 <= word && word <= 0xDBFF
				? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2))
				: _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1))
		)
		: $elm$core$Maybe$Nothing;
}

var _String_append = F2(function(a, b)
{
	return a + b;
});

function _String_length(str)
{
	return str.length;
}

var _String_map = F2(function(func, string)
{
	var len = string.length;
	var array = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = string.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			array[i] = func(_Utils_chr(string[i] + string[i+1]));
			i += 2;
			continue;
		}
		array[i] = func(_Utils_chr(string[i]));
		i++;
	}
	return array.join('');
});

var _String_filter = F2(function(isGood, str)
{
	var arr = [];
	var len = str.length;
	var i = 0;
	while (i < len)
	{
		var char = str[i];
		var word = str.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += str[i];
			i++;
		}

		if (isGood(_Utils_chr(char)))
		{
			arr.push(char);
		}
	}
	return arr.join('');
});

function _String_reverse(str)
{
	var len = str.length;
	var arr = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = str.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			arr[len - i] = str[i + 1];
			i++;
			arr[len - i] = str[i - 1];
			i++;
		}
		else
		{
			arr[len - i] = str[i];
			i++;
		}
	}
	return arr.join('');
}

var _String_foldl = F3(function(func, state, string)
{
	var len = string.length;
	var i = 0;
	while (i < len)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += string[i];
			i++;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_foldr = F3(function(func, state, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_split = F2(function(sep, str)
{
	return str.split(sep);
});

var _String_join = F2(function(sep, strs)
{
	return strs.join(sep);
});

var _String_slice = F3(function(start, end, str) {
	return str.slice(start, end);
});

function _String_trim(str)
{
	return str.trim();
}

function _String_trimLeft(str)
{
	return str.replace(/^\s+/, '');
}

function _String_trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function _String_words(str)
{
	return _List_fromArray(str.trim().split(/\s+/g));
}

function _String_lines(str)
{
	return _List_fromArray(str.split(/\r\n|\r|\n/g));
}

function _String_toUpper(str)
{
	return str.toUpperCase();
}

function _String_toLower(str)
{
	return str.toLowerCase();
}

var _String_any = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (isGood(_Utils_chr(char)))
		{
			return true;
		}
	}
	return false;
});

var _String_all = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (!isGood(_Utils_chr(char)))
		{
			return false;
		}
	}
	return true;
});

var _String_contains = F2(function(sub, str)
{
	return str.indexOf(sub) > -1;
});

var _String_startsWith = F2(function(sub, str)
{
	return str.indexOf(sub) === 0;
});

var _String_endsWith = F2(function(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
});

var _String_indexes = F2(function(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _List_Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _List_fromArray(is);
});


// TO STRING

function _String_fromNumber(number)
{
	return number + '';
}


// INT CONVERSIONS

function _String_toInt(str)
{
	var total = 0;
	var code0 = str.charCodeAt(0);
	var start = code0 == 0x2B /* + */ || code0 == 0x2D /* - */ ? 1 : 0;

	for (var i = start; i < str.length; ++i)
	{
		var code = str.charCodeAt(i);
		if (code < 0x30 || 0x39 < code)
		{
			return $elm$core$Maybe$Nothing;
		}
		total = 10 * total + code - 0x30;
	}

	return i == start
		? $elm$core$Maybe$Nothing
		: $elm$core$Maybe$Just(code0 == 0x2D ? -total : total);
}


// FLOAT CONVERSIONS

function _String_toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return $elm$core$Maybe$Nothing;
	}
	var n = +s;
	// faster isNaN check
	return n === n ? $elm$core$Maybe$Just(n) : $elm$core$Maybe$Nothing;
}

function _String_fromList(chars)
{
	return _List_toArray(chars).join('');
}




function _Char_toCode(char)
{
	var code = char.charCodeAt(0);
	if (0xD800 <= code && code <= 0xDBFF)
	{
		return (code - 0xD800) * 0x400 + char.charCodeAt(1) - 0xDC00 + 0x10000
	}
	return code;
}

function _Char_fromCode(code)
{
	return _Utils_chr(
		(code < 0 || 0x10FFFF < code)
			? '\uFFFD'
			:
		(code <= 0xFFFF)
			? String.fromCharCode(code)
			:
		(code -= 0x10000,
			String.fromCharCode(Math.floor(code / 0x400) + 0xD800, code % 0x400 + 0xDC00)
		)
	);
}

function _Char_toUpper(char)
{
	return _Utils_chr(char.toUpperCase());
}

function _Char_toLower(char)
{
	return _Utils_chr(char.toLowerCase());
}

function _Char_toLocaleUpper(char)
{
	return _Utils_chr(char.toLocaleUpperCase());
}

function _Char_toLocaleLower(char)
{
	return _Utils_chr(char.toLocaleLowerCase());
}



/**/
function _Json_errorToString(error)
{
	return $elm$json$Json$Decode$errorToString(error);
}
//*/


// CORE DECODERS

function _Json_succeed(msg)
{
	return {
		$: 0,
		a: msg
	};
}

function _Json_fail(msg)
{
	return {
		$: 1,
		a: msg
	};
}

function _Json_decodePrim(decoder)
{
	return { $: 2, b: decoder };
}

var _Json_decodeInt = _Json_decodePrim(function(value) {
	return (typeof value !== 'number')
		? _Json_expecting('an INT', value)
		:
	(-2147483647 < value && value < 2147483647 && (value | 0) === value)
		? $elm$core$Result$Ok(value)
		:
	(isFinite(value) && !(value % 1))
		? $elm$core$Result$Ok(value)
		: _Json_expecting('an INT', value);
});

var _Json_decodeBool = _Json_decodePrim(function(value) {
	return (typeof value === 'boolean')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a BOOL', value);
});

var _Json_decodeFloat = _Json_decodePrim(function(value) {
	return (typeof value === 'number')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a FLOAT', value);
});

var _Json_decodeValue = _Json_decodePrim(function(value) {
	return $elm$core$Result$Ok(_Json_wrap(value));
});

var _Json_decodeString = _Json_decodePrim(function(value) {
	return (typeof value === 'string')
		? $elm$core$Result$Ok(value)
		: (value instanceof String)
			? $elm$core$Result$Ok(value + '')
			: _Json_expecting('a STRING', value);
});

function _Json_decodeList(decoder) { return { $: 3, b: decoder }; }
function _Json_decodeArray(decoder) { return { $: 4, b: decoder }; }

function _Json_decodeNull(value) { return { $: 5, c: value }; }

var _Json_decodeField = F2(function(field, decoder)
{
	return {
		$: 6,
		d: field,
		b: decoder
	};
});

var _Json_decodeIndex = F2(function(index, decoder)
{
	return {
		$: 7,
		e: index,
		b: decoder
	};
});

function _Json_decodeKeyValuePairs(decoder)
{
	return {
		$: 8,
		b: decoder
	};
}

function _Json_mapMany(f, decoders)
{
	return {
		$: 9,
		f: f,
		g: decoders
	};
}

var _Json_andThen = F2(function(callback, decoder)
{
	return {
		$: 10,
		b: decoder,
		h: callback
	};
});

function _Json_oneOf(decoders)
{
	return {
		$: 11,
		g: decoders
	};
}


// DECODING OBJECTS

var _Json_map1 = F2(function(f, d1)
{
	return _Json_mapMany(f, [d1]);
});

var _Json_map2 = F3(function(f, d1, d2)
{
	return _Json_mapMany(f, [d1, d2]);
});

var _Json_map3 = F4(function(f, d1, d2, d3)
{
	return _Json_mapMany(f, [d1, d2, d3]);
});

var _Json_map4 = F5(function(f, d1, d2, d3, d4)
{
	return _Json_mapMany(f, [d1, d2, d3, d4]);
});

var _Json_map5 = F6(function(f, d1, d2, d3, d4, d5)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5]);
});

var _Json_map6 = F7(function(f, d1, d2, d3, d4, d5, d6)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6]);
});

var _Json_map7 = F8(function(f, d1, d2, d3, d4, d5, d6, d7)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
});

var _Json_map8 = F9(function(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
});


// DECODE

var _Json_runOnString = F2(function(decoder, string)
{
	try
	{
		var value = JSON.parse(string);
		return _Json_runHelp(decoder, value);
	}
	catch (e)
	{
		return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'This is not valid JSON! ' + e.message, _Json_wrap(string)));
	}
});

var _Json_run = F2(function(decoder, value)
{
	return _Json_runHelp(decoder, _Json_unwrap(value));
});

function _Json_runHelp(decoder, value)
{
	switch (decoder.$)
	{
		case 2:
			return decoder.b(value);

		case 5:
			return (value === null)
				? $elm$core$Result$Ok(decoder.c)
				: _Json_expecting('null', value);

		case 3:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('a LIST', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);

		case 4:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);

		case 6:
			var field = decoder.d;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return _Json_expecting('an OBJECT with a field named `' + field + '`', value);
			}
			var result = _Json_runHelp(decoder.b, value[field]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, field, result.a));

		case 7:
			var index = decoder.e;
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			if (index >= value.length)
			{
				return _Json_expecting('a LONGER array. Need index ' + index + ' but only see ' + value.length + ' entries', value);
			}
			var result = _Json_runHelp(decoder.b, value[index]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, index, result.a));

		case 8:
			if (typeof value !== 'object' || value === null || _Json_isArray(value))
			{
				return _Json_expecting('an OBJECT', value);
			}

			var keyValuePairs = _List_Nil;
			// TODO test perf of Object.keys and switch when support is good enough
			for (var key in value)
			{
				if (value.hasOwnProperty(key))
				{
					var result = _Json_runHelp(decoder.b, value[key]);
					if (!$elm$core$Result$isOk(result))
					{
						return $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, key, result.a));
					}
					keyValuePairs = _List_Cons(_Utils_Tuple2(key, result.a), keyValuePairs);
				}
			}
			return $elm$core$Result$Ok($elm$core$List$reverse(keyValuePairs));

		case 9:
			var answer = decoder.f;
			var decoders = decoder.g;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = _Json_runHelp(decoders[i], value);
				if (!$elm$core$Result$isOk(result))
				{
					return result;
				}
				answer = answer(result.a);
			}
			return $elm$core$Result$Ok(answer);

		case 10:
			var result = _Json_runHelp(decoder.b, value);
			return (!$elm$core$Result$isOk(result))
				? result
				: _Json_runHelp(decoder.h(result.a), value);

		case 11:
			var errors = _List_Nil;
			for (var temp = decoder.g; temp.b; temp = temp.b) // WHILE_CONS
			{
				var result = _Json_runHelp(temp.a, value);
				if ($elm$core$Result$isOk(result))
				{
					return result;
				}
				errors = _List_Cons(result.a, errors);
			}
			return $elm$core$Result$Err($elm$json$Json$Decode$OneOf($elm$core$List$reverse(errors)));

		case 1:
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, decoder.a, _Json_wrap(value)));

		case 0:
			return $elm$core$Result$Ok(decoder.a);
	}
}

function _Json_runArrayDecoder(decoder, value, toElmValue)
{
	var len = value.length;
	var array = new Array(len);
	for (var i = 0; i < len; i++)
	{
		var result = _Json_runHelp(decoder, value[i]);
		if (!$elm$core$Result$isOk(result))
		{
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, i, result.a));
		}
		array[i] = result.a;
	}
	return $elm$core$Result$Ok(toElmValue(array));
}

function _Json_isArray(value)
{
	return Array.isArray(value) || (typeof FileList !== 'undefined' && value instanceof FileList);
}

function _Json_toElmArray(array)
{
	return A2($elm$core$Array$initialize, array.length, function(i) { return array[i]; });
}

function _Json_expecting(type, value)
{
	return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'Expecting ' + type, _Json_wrap(value)));
}


// EQUALITY

function _Json_equality(x, y)
{
	if (x === y)
	{
		return true;
	}

	if (x.$ !== y.$)
	{
		return false;
	}

	switch (x.$)
	{
		case 0:
		case 1:
			return x.a === y.a;

		case 2:
			return x.b === y.b;

		case 5:
			return x.c === y.c;

		case 3:
		case 4:
		case 8:
			return _Json_equality(x.b, y.b);

		case 6:
			return x.d === y.d && _Json_equality(x.b, y.b);

		case 7:
			return x.e === y.e && _Json_equality(x.b, y.b);

		case 9:
			return x.f === y.f && _Json_listEquality(x.g, y.g);

		case 10:
			return x.h === y.h && _Json_equality(x.b, y.b);

		case 11:
			return _Json_listEquality(x.g, y.g);
	}
}

function _Json_listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!_Json_equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

var _Json_encode = F2(function(indentLevel, value)
{
	return JSON.stringify(_Json_unwrap(value), null, indentLevel) + '';
});

function _Json_wrap(value) { return { $: 0, a: value }; }
function _Json_unwrap(value) { return value.a; }

function _Json_wrap_UNUSED(value) { return value; }
function _Json_unwrap_UNUSED(value) { return value; }

function _Json_emptyArray() { return []; }
function _Json_emptyObject() { return {}; }

var _Json_addField = F3(function(key, value, object)
{
	object[key] = _Json_unwrap(value);
	return object;
});

function _Json_addEntry(func)
{
	return F2(function(entry, array)
	{
		array.push(_Json_unwrap(func(entry)));
		return array;
	});
}

var _Json_encodeNull = _Json_wrap(null);



// TASKS

function _Scheduler_succeed(value)
{
	return {
		$: 0,
		a: value
	};
}

function _Scheduler_fail(error)
{
	return {
		$: 1,
		a: error
	};
}

function _Scheduler_binding(callback)
{
	return {
		$: 2,
		b: callback,
		c: null
	};
}

var _Scheduler_andThen = F2(function(callback, task)
{
	return {
		$: 3,
		b: callback,
		d: task
	};
});

var _Scheduler_onError = F2(function(callback, task)
{
	return {
		$: 4,
		b: callback,
		d: task
	};
});

function _Scheduler_receive(callback)
{
	return {
		$: 5,
		b: callback
	};
}


// PROCESSES

var _Scheduler_guid = 0;

function _Scheduler_rawSpawn(task)
{
	var proc = {
		$: 0,
		e: _Scheduler_guid++,
		f: task,
		g: null,
		h: []
	};

	_Scheduler_enqueue(proc);

	return proc;
}

function _Scheduler_spawn(task)
{
	return _Scheduler_binding(function(callback) {
		callback(_Scheduler_succeed(_Scheduler_rawSpawn(task)));
	});
}

function _Scheduler_rawSend(proc, msg)
{
	proc.h.push(msg);
	_Scheduler_enqueue(proc);
}

var _Scheduler_send = F2(function(proc, msg)
{
	return _Scheduler_binding(function(callback) {
		_Scheduler_rawSend(proc, msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});

function _Scheduler_kill(proc)
{
	return _Scheduler_binding(function(callback) {
		var task = proc.f;
		if (task.$ === 2 && task.c)
		{
			task.c();
		}

		proc.f = null;

		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
}


/* STEP PROCESSES

type alias Process =
  { $ : tag
  , id : unique_id
  , root : Task
  , stack : null | { $: SUCCEED | FAIL, a: callback, b: stack }
  , mailbox : [msg]
  }

*/


var _Scheduler_working = false;
var _Scheduler_queue = [];


function _Scheduler_enqueue(proc)
{
	_Scheduler_queue.push(proc);
	if (_Scheduler_working)
	{
		return;
	}
	_Scheduler_working = true;
	while (proc = _Scheduler_queue.shift())
	{
		_Scheduler_step(proc);
	}
	_Scheduler_working = false;
}


function _Scheduler_step(proc)
{
	while (proc.f)
	{
		var rootTag = proc.f.$;
		if (rootTag === 0 || rootTag === 1)
		{
			while (proc.g && proc.g.$ !== rootTag)
			{
				proc.g = proc.g.i;
			}
			if (!proc.g)
			{
				return;
			}
			proc.f = proc.g.b(proc.f.a);
			proc.g = proc.g.i;
		}
		else if (rootTag === 2)
		{
			proc.f.c = proc.f.b(function(newRoot) {
				proc.f = newRoot;
				_Scheduler_enqueue(proc);
			});
			return;
		}
		else if (rootTag === 5)
		{
			if (proc.h.length === 0)
			{
				return;
			}
			proc.f = proc.f.b(proc.h.shift());
		}
		else // if (rootTag === 3 || rootTag === 4)
		{
			proc.g = {
				$: rootTag === 3 ? 0 : 1,
				b: proc.f.b,
				i: proc.g
			};
			proc.f = proc.f.d;
		}
	}
}



function _Process_sleep(time)
{
	return _Scheduler_binding(function(callback) {
		var id = setTimeout(function() {
			callback(_Scheduler_succeed(_Utils_Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}




// PROGRAMS


var _Platform_worker = F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function() { return function() {} }
	);
});



// INITIALIZE A PROGRAM


function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder)
{
	var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args['flags'] : undefined));
	$elm$core$Result$isOk(result) || _Debug_crash(2 /**/, _Json_errorToString(result.a) /**/);
	var managers = {};
	var initPair = init(result.a);
	var model = initPair.a;
	var stepper = stepperBuilder(sendToApp, model);
	var ports = _Platform_setupEffects(managers, sendToApp);

	function sendToApp(msg, viewMetadata)
	{
		var pair = A2(update, msg, model);
		stepper(model = pair.a, viewMetadata);
		_Platform_enqueueEffects(managers, pair.b, subscriptions(model));
	}

	_Platform_enqueueEffects(managers, initPair.b, subscriptions(model));

	return ports ? { ports: ports } : {};
}



// TRACK PRELOADS
//
// This is used by code in elm/browser and elm/http
// to register any HTTP requests that are triggered by init.
//


var _Platform_preload;


function _Platform_registerPreload(url)
{
	_Platform_preload.add(url);
}



// EFFECT MANAGERS


var _Platform_effectManagers = {};


function _Platform_setupEffects(managers, sendToApp)
{
	var ports;

	// setup all necessary effect managers
	for (var key in _Platform_effectManagers)
	{
		var manager = _Platform_effectManagers[key];

		if (manager.a)
		{
			ports = ports || {};
			ports[key] = manager.a(key, sendToApp);
		}

		managers[key] = _Platform_instantiateManager(manager, sendToApp);
	}

	return ports;
}


function _Platform_createManager(init, onEffects, onSelfMsg, cmdMap, subMap)
{
	return {
		b: init,
		c: onEffects,
		d: onSelfMsg,
		e: cmdMap,
		f: subMap
	};
}


function _Platform_instantiateManager(info, sendToApp)
{
	var router = {
		g: sendToApp,
		h: undefined
	};

	var onEffects = info.c;
	var onSelfMsg = info.d;
	var cmdMap = info.e;
	var subMap = info.f;

	function loop(state)
	{
		return A2(_Scheduler_andThen, loop, _Scheduler_receive(function(msg)
		{
			var value = msg.a;

			if (msg.$ === 0)
			{
				return A3(onSelfMsg, router, value, state);
			}

			return cmdMap && subMap
				? A4(onEffects, router, value.i, value.j, state)
				: A3(onEffects, router, cmdMap ? value.i : value.j, state);
		}));
	}

	return router.h = _Scheduler_rawSpawn(A2(_Scheduler_andThen, loop, info.b));
}



// ROUTING


var _Platform_sendToApp = F2(function(router, msg)
{
	return _Scheduler_binding(function(callback)
	{
		router.g(msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});


var _Platform_sendToSelf = F2(function(router, msg)
{
	return A2(_Scheduler_send, router.h, {
		$: 0,
		a: msg
	});
});



// BAGS


function _Platform_leaf(home)
{
	return function(value)
	{
		return {
			$: 1,
			k: home,
			l: value
		};
	};
}


function _Platform_batch(list)
{
	return {
		$: 2,
		m: list
	};
}


var _Platform_map = F2(function(tagger, bag)
{
	return {
		$: 3,
		n: tagger,
		o: bag
	}
});



// PIPE BAGS INTO EFFECT MANAGERS
//
// Effects must be queued!
//
// Say your init contains a synchronous command, like Time.now or Time.here
//
//   - This will produce a batch of effects (FX_1)
//   - The synchronous task triggers the subsequent `update` call
//   - This will produce a batch of effects (FX_2)
//
// If we just start dispatching FX_2, subscriptions from FX_2 can be processed
// before subscriptions from FX_1. No good! Earlier versions of this code had
// this problem, leading to these reports:
//
//   https://github.com/elm/core/issues/980
//   https://github.com/elm/core/pull/981
//   https://github.com/elm/compiler/issues/1776
//
// The queue is necessary to avoid ordering issues for synchronous commands.


// Why use true/false here? Why not just check the length of the queue?
// The goal is to detect "are we currently dispatching effects?" If we
// are, we need to bail and let the ongoing while loop handle things.
//
// Now say the queue has 1 element. When we dequeue the final element,
// the queue will be empty, but we are still actively dispatching effects.
// So you could get queue jumping in a really tricky category of cases.
//
var _Platform_effectsQueue = [];
var _Platform_effectsActive = false;


function _Platform_enqueueEffects(managers, cmdBag, subBag)
{
	_Platform_effectsQueue.push({ p: managers, q: cmdBag, r: subBag });

	if (_Platform_effectsActive) return;

	_Platform_effectsActive = true;
	for (var fx; fx = _Platform_effectsQueue.shift(); )
	{
		_Platform_dispatchEffects(fx.p, fx.q, fx.r);
	}
	_Platform_effectsActive = false;
}


function _Platform_dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	_Platform_gatherEffects(true, cmdBag, effectsDict, null);
	_Platform_gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		_Scheduler_rawSend(managers[home], {
			$: 'fx',
			a: effectsDict[home] || { i: _List_Nil, j: _List_Nil }
		});
	}
}


function _Platform_gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.$)
	{
		case 1:
			var home = bag.k;
			var effect = _Platform_toEffect(isCmd, home, taggers, bag.l);
			effectsDict[home] = _Platform_insert(isCmd, effect, effectsDict[home]);
			return;

		case 2:
			for (var list = bag.m; list.b; list = list.b) // WHILE_CONS
			{
				_Platform_gatherEffects(isCmd, list.a, effectsDict, taggers);
			}
			return;

		case 3:
			_Platform_gatherEffects(isCmd, bag.o, effectsDict, {
				s: bag.n,
				t: taggers
			});
			return;
	}
}


function _Platform_toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		for (var temp = taggers; temp; temp = temp.t)
		{
			x = temp.s(x);
		}
		return x;
	}

	var map = isCmd
		? _Platform_effectManagers[home].e
		: _Platform_effectManagers[home].f;

	return A2(map, applyTaggers, value)
}


function _Platform_insert(isCmd, newEffect, effects)
{
	effects = effects || { i: _List_Nil, j: _List_Nil };

	isCmd
		? (effects.i = _List_Cons(newEffect, effects.i))
		: (effects.j = _List_Cons(newEffect, effects.j));

	return effects;
}



// PORTS


function _Platform_checkPortName(name)
{
	if (_Platform_effectManagers[name])
	{
		_Debug_crash(3, name)
	}
}



// OUTGOING PORTS


function _Platform_outgoingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		e: _Platform_outgoingPortMap,
		u: converter,
		a: _Platform_setupOutgoingPort
	};
	return _Platform_leaf(name);
}


var _Platform_outgoingPortMap = F2(function(tagger, value) { return value; });


function _Platform_setupOutgoingPort(name)
{
	var subs = [];
	var converter = _Platform_effectManagers[name].u;

	// CREATE MANAGER

	var init = _Process_sleep(0);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, cmdList, state)
	{
		for ( ; cmdList.b; cmdList = cmdList.b) // WHILE_CONS
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = _Json_unwrap(converter(cmdList.a));
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
		}
		return init;
	});

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		// copy subs into a new array in case unsubscribe is called within a
		// subscribed callback
		subs = subs.slice();
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}



// INCOMING PORTS


function _Platform_incomingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		f: _Platform_incomingPortMap,
		u: converter,
		a: _Platform_setupIncomingPort
	};
	return _Platform_leaf(name);
}


var _Platform_incomingPortMap = F2(function(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});


function _Platform_setupIncomingPort(name, sendToApp)
{
	var subs = _List_Nil;
	var converter = _Platform_effectManagers[name].u;

	// CREATE MANAGER

	var init = _Scheduler_succeed(null);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, subList, state)
	{
		subs = subList;
		return init;
	});

	// PUBLIC API

	function send(incomingValue)
	{
		var result = A2(_Json_run, converter, _Json_wrap(incomingValue));

		$elm$core$Result$isOk(result) || _Debug_crash(4, name, result.a);

		var value = result.a;
		for (var temp = subs; temp.b; temp = temp.b) // WHILE_CONS
		{
			sendToApp(temp.a(value));
		}
	}

	return { send: send };
}



// EXPORT ELM MODULES
//
// Have DEBUG and PROD versions so that we can (1) give nicer errors in
// debug mode and (2) not pay for the bits needed for that in prod mode.
//


function _Platform_export_UNUSED(exports)
{
	scope['Elm']
		? _Platform_mergeExportsProd(scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsProd(obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6)
				: _Platform_mergeExportsProd(obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}


function _Platform_export(exports)
{
	scope['Elm']
		? _Platform_mergeExportsDebug('Elm', scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsDebug(moduleName, obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6, moduleName)
				: _Platform_mergeExportsDebug(moduleName + '.' + name, obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}




// HELPERS


var _VirtualDom_divertHrefToApp;

var _VirtualDom_doc = typeof document !== 'undefined' ? document : {};


function _VirtualDom_appendChild(parent, child)
{
	parent.appendChild(child);
}

var _VirtualDom_init = F4(function(virtualNode, flagDecoder, debugMetadata, args)
{
	// NOTE: this function needs _Platform_export available to work

	/**_UNUSED/
	var node = args['node'];
	//*/
	/**/
	var node = args && args['node'] ? args['node'] : _Debug_crash(0);
	//*/

	node.parentNode.replaceChild(
		_VirtualDom_render(virtualNode, function() {}),
		node
	);

	return {};
});



// TEXT


function _VirtualDom_text(string)
{
	return {
		$: 0,
		a: string
	};
}



// NODE


var _VirtualDom_nodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 1,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_node = _VirtualDom_nodeNS(undefined);



// KEYED NODE


var _VirtualDom_keyedNodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 2,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_keyedNode = _VirtualDom_keyedNodeNS(undefined);



// CUSTOM


function _VirtualDom_custom(factList, model, render, diff)
{
	return {
		$: 3,
		d: _VirtualDom_organizeFacts(factList),
		g: model,
		h: render,
		i: diff
	};
}



// MAP


var _VirtualDom_map = F2(function(tagger, node)
{
	return {
		$: 4,
		j: tagger,
		k: node,
		b: 1 + (node.b || 0)
	};
});



// LAZY


function _VirtualDom_thunk(refs, thunk)
{
	return {
		$: 5,
		l: refs,
		m: thunk,
		k: undefined
	};
}

var _VirtualDom_lazy = F2(function(func, a)
{
	return _VirtualDom_thunk([func, a], function() {
		return func(a);
	});
});

var _VirtualDom_lazy2 = F3(function(func, a, b)
{
	return _VirtualDom_thunk([func, a, b], function() {
		return A2(func, a, b);
	});
});

var _VirtualDom_lazy3 = F4(function(func, a, b, c)
{
	return _VirtualDom_thunk([func, a, b, c], function() {
		return A3(func, a, b, c);
	});
});

var _VirtualDom_lazy4 = F5(function(func, a, b, c, d)
{
	return _VirtualDom_thunk([func, a, b, c, d], function() {
		return A4(func, a, b, c, d);
	});
});

var _VirtualDom_lazy5 = F6(function(func, a, b, c, d, e)
{
	return _VirtualDom_thunk([func, a, b, c, d, e], function() {
		return A5(func, a, b, c, d, e);
	});
});

var _VirtualDom_lazy6 = F7(function(func, a, b, c, d, e, f)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f], function() {
		return A6(func, a, b, c, d, e, f);
	});
});

var _VirtualDom_lazy7 = F8(function(func, a, b, c, d, e, f, g)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g], function() {
		return A7(func, a, b, c, d, e, f, g);
	});
});

var _VirtualDom_lazy8 = F9(function(func, a, b, c, d, e, f, g, h)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g, h], function() {
		return A8(func, a, b, c, d, e, f, g, h);
	});
});



// FACTS


var _VirtualDom_on = F2(function(key, handler)
{
	return {
		$: 'a0',
		n: key,
		o: handler
	};
});
var _VirtualDom_style = F2(function(key, value)
{
	return {
		$: 'a1',
		n: key,
		o: value
	};
});
var _VirtualDom_property = F2(function(key, value)
{
	return {
		$: 'a2',
		n: key,
		o: value
	};
});
var _VirtualDom_attribute = F2(function(key, value)
{
	return {
		$: 'a3',
		n: key,
		o: value
	};
});
var _VirtualDom_attributeNS = F3(function(namespace, key, value)
{
	return {
		$: 'a4',
		n: key,
		o: { f: namespace, o: value }
	};
});



// XSS ATTACK VECTOR CHECKS


function _VirtualDom_noScript(tag)
{
	return tag == 'script' ? 'p' : tag;
}

function _VirtualDom_noOnOrFormAction(key)
{
	return /^(on|formAction$)/i.test(key) ? 'data-' + key : key;
}

function _VirtualDom_noInnerHtmlOrFormAction(key)
{
	return key == 'innerHTML' || key == 'formAction' ? 'data-' + key : key;
}

function _VirtualDom_noJavaScriptUri_UNUSED(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,'')) ? '' : value;
}

function _VirtualDom_noJavaScriptUri(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,''))
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}

function _VirtualDom_noJavaScriptOrHtmlUri_UNUSED(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value) ? '' : value;
}

function _VirtualDom_noJavaScriptOrHtmlUri(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value)
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}



// MAP FACTS


var _VirtualDom_mapAttribute = F2(function(func, attr)
{
	return (attr.$ === 'a0')
		? A2(_VirtualDom_on, attr.n, _VirtualDom_mapHandler(func, attr.o))
		: attr;
});

function _VirtualDom_mapHandler(func, handler)
{
	var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);

	// 0 = Normal
	// 1 = MayStopPropagation
	// 2 = MayPreventDefault
	// 3 = Custom

	return {
		$: handler.$,
		a:
			!tag
				? A2($elm$json$Json$Decode$map, func, handler.a)
				:
			A3($elm$json$Json$Decode$map2,
				tag < 3
					? _VirtualDom_mapEventTuple
					: _VirtualDom_mapEventRecord,
				$elm$json$Json$Decode$succeed(func),
				handler.a
			)
	};
}

var _VirtualDom_mapEventTuple = F2(function(func, tuple)
{
	return _Utils_Tuple2(func(tuple.a), tuple.b);
});

var _VirtualDom_mapEventRecord = F2(function(func, record)
{
	return {
		message: func(record.message),
		stopPropagation: record.stopPropagation,
		preventDefault: record.preventDefault
	}
});



// ORGANIZE FACTS


function _VirtualDom_organizeFacts(factList)
{
	for (var facts = {}; factList.b; factList = factList.b) // WHILE_CONS
	{
		var entry = factList.a;

		var tag = entry.$;
		var key = entry.n;
		var value = entry.o;

		if (tag === 'a2')
		{
			(key === 'className')
				? _VirtualDom_addClass(facts, key, _Json_unwrap(value))
				: facts[key] = _Json_unwrap(value);

			continue;
		}

		var subFacts = facts[tag] || (facts[tag] = {});
		(tag === 'a3' && key === 'class')
			? _VirtualDom_addClass(subFacts, key, value)
			: subFacts[key] = value;
	}

	return facts;
}

function _VirtualDom_addClass(object, key, newClass)
{
	var classes = object[key];
	object[key] = classes ? classes + ' ' + newClass : newClass;
}



// RENDER


function _VirtualDom_render(vNode, eventNode)
{
	var tag = vNode.$;

	if (tag === 5)
	{
		return _VirtualDom_render(vNode.k || (vNode.k = vNode.m()), eventNode);
	}

	if (tag === 0)
	{
		return _VirtualDom_doc.createTextNode(vNode.a);
	}

	if (tag === 4)
	{
		var subNode = vNode.k;
		var tagger = vNode.j;

		while (subNode.$ === 4)
		{
			typeof tagger !== 'object'
				? tagger = [tagger, subNode.j]
				: tagger.push(subNode.j);

			subNode = subNode.k;
		}

		var subEventRoot = { j: tagger, p: eventNode };
		var domNode = _VirtualDom_render(subNode, subEventRoot);
		domNode.elm_event_node_ref = subEventRoot;
		return domNode;
	}

	if (tag === 3)
	{
		var domNode = vNode.h(vNode.g);
		_VirtualDom_applyFacts(domNode, eventNode, vNode.d);
		return domNode;
	}

	// at this point `tag` must be 1 or 2

	var domNode = vNode.f
		? _VirtualDom_doc.createElementNS(vNode.f, vNode.c)
		: _VirtualDom_doc.createElement(vNode.c);

	if (_VirtualDom_divertHrefToApp && vNode.c == 'a')
	{
		domNode.addEventListener('click', _VirtualDom_divertHrefToApp(domNode));
	}

	_VirtualDom_applyFacts(domNode, eventNode, vNode.d);

	for (var kids = vNode.e, i = 0; i < kids.length; i++)
	{
		_VirtualDom_appendChild(domNode, _VirtualDom_render(tag === 1 ? kids[i] : kids[i].b, eventNode));
	}

	return domNode;
}



// APPLY FACTS


function _VirtualDom_applyFacts(domNode, eventNode, facts)
{
	for (var key in facts)
	{
		var value = facts[key];

		key === 'a1'
			? _VirtualDom_applyStyles(domNode, value)
			:
		key === 'a0'
			? _VirtualDom_applyEvents(domNode, eventNode, value)
			:
		key === 'a3'
			? _VirtualDom_applyAttrs(domNode, value)
			:
		key === 'a4'
			? _VirtualDom_applyAttrsNS(domNode, value)
			:
		((key !== 'value' && key !== 'checked') || domNode[key] !== value) && (domNode[key] = value);
	}
}



// APPLY STYLES


function _VirtualDom_applyStyles(domNode, styles)
{
	var domNodeStyle = domNode.style;

	for (var key in styles)
	{
		domNodeStyle[key] = styles[key];
	}
}



// APPLY ATTRS


function _VirtualDom_applyAttrs(domNode, attrs)
{
	for (var key in attrs)
	{
		var value = attrs[key];
		typeof value !== 'undefined'
			? domNode.setAttribute(key, value)
			: domNode.removeAttribute(key);
	}
}



// APPLY NAMESPACED ATTRS


function _VirtualDom_applyAttrsNS(domNode, nsAttrs)
{
	for (var key in nsAttrs)
	{
		var pair = nsAttrs[key];
		var namespace = pair.f;
		var value = pair.o;

		typeof value !== 'undefined'
			? domNode.setAttributeNS(namespace, key, value)
			: domNode.removeAttributeNS(namespace, key);
	}
}



// APPLY EVENTS


function _VirtualDom_applyEvents(domNode, eventNode, events)
{
	var allCallbacks = domNode.elmFs || (domNode.elmFs = {});

	for (var key in events)
	{
		var newHandler = events[key];
		var oldCallback = allCallbacks[key];

		if (!newHandler)
		{
			domNode.removeEventListener(key, oldCallback);
			allCallbacks[key] = undefined;
			continue;
		}

		if (oldCallback)
		{
			var oldHandler = oldCallback.q;
			if (oldHandler.$ === newHandler.$)
			{
				oldCallback.q = newHandler;
				continue;
			}
			domNode.removeEventListener(key, oldCallback);
		}

		oldCallback = _VirtualDom_makeCallback(eventNode, newHandler);
		domNode.addEventListener(key, oldCallback,
			_VirtualDom_passiveSupported
			&& { passive: $elm$virtual_dom$VirtualDom$toHandlerInt(newHandler) < 2 }
		);
		allCallbacks[key] = oldCallback;
	}
}



// PASSIVE EVENTS


var _VirtualDom_passiveSupported;

try
{
	window.addEventListener('t', null, Object.defineProperty({}, 'passive', {
		get: function() { _VirtualDom_passiveSupported = true; }
	}));
}
catch(e) {}



// EVENT HANDLERS


function _VirtualDom_makeCallback(eventNode, initialHandler)
{
	function callback(event)
	{
		var handler = callback.q;
		var result = _Json_runHelp(handler.a, event);

		if (!$elm$core$Result$isOk(result))
		{
			return;
		}

		var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);

		// 0 = Normal
		// 1 = MayStopPropagation
		// 2 = MayPreventDefault
		// 3 = Custom

		var value = result.a;
		var message = !tag ? value : tag < 3 ? value.a : value.message;
		var stopPropagation = tag == 1 ? value.b : tag == 3 && value.stopPropagation;
		var currentEventNode = (
			stopPropagation && event.stopPropagation(),
			(tag == 2 ? value.b : tag == 3 && value.preventDefault) && event.preventDefault(),
			eventNode
		);
		var tagger;
		var i;
		while (tagger = currentEventNode.j)
		{
			if (typeof tagger == 'function')
			{
				message = tagger(message);
			}
			else
			{
				for (var i = tagger.length; i--; )
				{
					message = tagger[i](message);
				}
			}
			currentEventNode = currentEventNode.p;
		}
		currentEventNode(message, stopPropagation); // stopPropagation implies isSync
	}

	callback.q = initialHandler;

	return callback;
}

function _VirtualDom_equalEvents(x, y)
{
	return x.$ == y.$ && _Json_equality(x.a, y.a);
}



// DIFF


// TODO: Should we do patches like in iOS?
//
// type Patch
//   = At Int Patch
//   | Batch (List Patch)
//   | Change ...
//
// How could it not be better?
//
function _VirtualDom_diff(x, y)
{
	var patches = [];
	_VirtualDom_diffHelp(x, y, patches, 0);
	return patches;
}


function _VirtualDom_pushPatch(patches, type, index, data)
{
	var patch = {
		$: type,
		r: index,
		s: data,
		t: undefined,
		u: undefined
	};
	patches.push(patch);
	return patch;
}


function _VirtualDom_diffHelp(x, y, patches, index)
{
	if (x === y)
	{
		return;
	}

	var xType = x.$;
	var yType = y.$;

	// Bail if you run into different types of nodes. Implies that the
	// structure has changed significantly and it's not worth a diff.
	if (xType !== yType)
	{
		if (xType === 1 && yType === 2)
		{
			y = _VirtualDom_dekey(y);
			yType = 1;
		}
		else
		{
			_VirtualDom_pushPatch(patches, 0, index, y);
			return;
		}
	}

	// Now we know that both nodes are the same $.
	switch (yType)
	{
		case 5:
			var xRefs = x.l;
			var yRefs = y.l;
			var i = xRefs.length;
			var same = i === yRefs.length;
			while (same && i--)
			{
				same = xRefs[i] === yRefs[i];
			}
			if (same)
			{
				y.k = x.k;
				return;
			}
			y.k = y.m();
			var subPatches = [];
			_VirtualDom_diffHelp(x.k, y.k, subPatches, 0);
			subPatches.length > 0 && _VirtualDom_pushPatch(patches, 1, index, subPatches);
			return;

		case 4:
			// gather nested taggers
			var xTaggers = x.j;
			var yTaggers = y.j;
			var nesting = false;

			var xSubNode = x.k;
			while (xSubNode.$ === 4)
			{
				nesting = true;

				typeof xTaggers !== 'object'
					? xTaggers = [xTaggers, xSubNode.j]
					: xTaggers.push(xSubNode.j);

				xSubNode = xSubNode.k;
			}

			var ySubNode = y.k;
			while (ySubNode.$ === 4)
			{
				nesting = true;

				typeof yTaggers !== 'object'
					? yTaggers = [yTaggers, ySubNode.j]
					: yTaggers.push(ySubNode.j);

				ySubNode = ySubNode.k;
			}

			// Just bail if different numbers of taggers. This implies the
			// structure of the virtual DOM has changed.
			if (nesting && xTaggers.length !== yTaggers.length)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			// check if taggers are "the same"
			if (nesting ? !_VirtualDom_pairwiseRefEqual(xTaggers, yTaggers) : xTaggers !== yTaggers)
			{
				_VirtualDom_pushPatch(patches, 2, index, yTaggers);
			}

			// diff everything below the taggers
			_VirtualDom_diffHelp(xSubNode, ySubNode, patches, index + 1);
			return;

		case 0:
			if (x.a !== y.a)
			{
				_VirtualDom_pushPatch(patches, 3, index, y.a);
			}
			return;

		case 1:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKids);
			return;

		case 2:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKeyedKids);
			return;

		case 3:
			if (x.h !== y.h)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
			factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

			var patch = y.i(x.g, y.g);
			patch && _VirtualDom_pushPatch(patches, 5, index, patch);

			return;
	}
}

// assumes the incoming arrays are the same length
function _VirtualDom_pairwiseRefEqual(as, bs)
{
	for (var i = 0; i < as.length; i++)
	{
		if (as[i] !== bs[i])
		{
			return false;
		}
	}

	return true;
}

function _VirtualDom_diffNodes(x, y, patches, index, diffKids)
{
	// Bail if obvious indicators have changed. Implies more serious
	// structural changes such that it's not worth it to diff.
	if (x.c !== y.c || x.f !== y.f)
	{
		_VirtualDom_pushPatch(patches, 0, index, y);
		return;
	}

	var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
	factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

	diffKids(x, y, patches, index);
}



// DIFF FACTS


// TODO Instead of creating a new diff object, it's possible to just test if
// there *is* a diff. During the actual patch, do the diff again and make the
// modifications directly. This way, there's no new allocations. Worth it?
function _VirtualDom_diffFacts(x, y, category)
{
	var diff;

	// look for changes and removals
	for (var xKey in x)
	{
		if (xKey === 'a1' || xKey === 'a0' || xKey === 'a3' || xKey === 'a4')
		{
			var subDiff = _VirtualDom_diffFacts(x[xKey], y[xKey] || {}, xKey);
			if (subDiff)
			{
				diff = diff || {};
				diff[xKey] = subDiff;
			}
			continue;
		}

		// remove if not in the new facts
		if (!(xKey in y))
		{
			diff = diff || {};
			diff[xKey] =
				!category
					? (typeof x[xKey] === 'string' ? '' : null)
					:
				(category === 'a1')
					? ''
					:
				(category === 'a0' || category === 'a3')
					? undefined
					:
				{ f: x[xKey].f, o: undefined };

			continue;
		}

		var xValue = x[xKey];
		var yValue = y[xKey];

		// reference equal, so don't worry about it
		if (xValue === yValue && xKey !== 'value' && xKey !== 'checked'
			|| category === 'a0' && _VirtualDom_equalEvents(xValue, yValue))
		{
			continue;
		}

		diff = diff || {};
		diff[xKey] = yValue;
	}

	// add new stuff
	for (var yKey in y)
	{
		if (!(yKey in x))
		{
			diff = diff || {};
			diff[yKey] = y[yKey];
		}
	}

	return diff;
}



// DIFF KIDS


function _VirtualDom_diffKids(xParent, yParent, patches, index)
{
	var xKids = xParent.e;
	var yKids = yParent.e;

	var xLen = xKids.length;
	var yLen = yKids.length;

	// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

	if (xLen > yLen)
	{
		_VirtualDom_pushPatch(patches, 6, index, {
			v: yLen,
			i: xLen - yLen
		});
	}
	else if (xLen < yLen)
	{
		_VirtualDom_pushPatch(patches, 7, index, {
			v: xLen,
			e: yKids
		});
	}

	// PAIRWISE DIFF EVERYTHING ELSE

	for (var minLen = xLen < yLen ? xLen : yLen, i = 0; i < minLen; i++)
	{
		var xKid = xKids[i];
		_VirtualDom_diffHelp(xKid, yKids[i], patches, ++index);
		index += xKid.b || 0;
	}
}



// KEYED DIFF


function _VirtualDom_diffKeyedKids(xParent, yParent, patches, rootIndex)
{
	var localPatches = [];

	var changes = {}; // Dict String Entry
	var inserts = []; // Array { index : Int, entry : Entry }
	// type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

	var xKids = xParent.e;
	var yKids = yParent.e;
	var xLen = xKids.length;
	var yLen = yKids.length;
	var xIndex = 0;
	var yIndex = 0;

	var index = rootIndex;

	while (xIndex < xLen && yIndex < yLen)
	{
		var x = xKids[xIndex];
		var y = yKids[yIndex];

		var xKey = x.a;
		var yKey = y.a;
		var xNode = x.b;
		var yNode = y.b;

		var newMatch = undefined;
		var oldMatch = undefined;

		// check if keys match

		if (xKey === yKey)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNode, localPatches, index);
			index += xNode.b || 0;

			xIndex++;
			yIndex++;
			continue;
		}

		// look ahead 1 to detect insertions and removals.

		var xNext = xKids[xIndex + 1];
		var yNext = yKids[yIndex + 1];

		if (xNext)
		{
			var xNextKey = xNext.a;
			var xNextNode = xNext.b;
			oldMatch = yKey === xNextKey;
		}

		if (yNext)
		{
			var yNextKey = yNext.a;
			var yNextNode = yNext.b;
			newMatch = xKey === yNextKey;
		}


		// swap x and y
		if (newMatch && oldMatch)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			_VirtualDom_insertNode(changes, localPatches, xKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNextNode, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		// insert y
		if (newMatch)
		{
			index++;
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			index += xNode.b || 0;

			xIndex += 1;
			yIndex += 2;
			continue;
		}

		// remove x
		if (oldMatch)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 1;
			continue;
		}

		// remove x, insert y
		if (xNext && xNextKey === yNextKey)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNextNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		break;
	}

	// eat up any remaining nodes with removeNode and insertNode

	while (xIndex < xLen)
	{
		index++;
		var x = xKids[xIndex];
		var xNode = x.b;
		_VirtualDom_removeNode(changes, localPatches, x.a, xNode, index);
		index += xNode.b || 0;
		xIndex++;
	}

	while (yIndex < yLen)
	{
		var endInserts = endInserts || [];
		var y = yKids[yIndex];
		_VirtualDom_insertNode(changes, localPatches, y.a, y.b, undefined, endInserts);
		yIndex++;
	}

	if (localPatches.length > 0 || inserts.length > 0 || endInserts)
	{
		_VirtualDom_pushPatch(patches, 8, rootIndex, {
			w: localPatches,
			x: inserts,
			y: endInserts
		});
	}
}



// CHANGES FROM KEYED DIFF


var _VirtualDom_POSTFIX = '_elmW6BL';


function _VirtualDom_insertNode(changes, localPatches, key, vnode, yIndex, inserts)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		entry = {
			c: 0,
			z: vnode,
			r: yIndex,
			s: undefined
		};

		inserts.push({ r: yIndex, A: entry });
		changes[key] = entry;

		return;
	}

	// this key was removed earlier, a match!
	if (entry.c === 1)
	{
		inserts.push({ r: yIndex, A: entry });

		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(entry.z, vnode, subPatches, entry.r);
		entry.r = yIndex;
		entry.s.s = {
			w: subPatches,
			A: entry
		};

		return;
	}

	// this key has already been inserted or moved, a duplicate!
	_VirtualDom_insertNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, yIndex, inserts);
}


function _VirtualDom_removeNode(changes, localPatches, key, vnode, index)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		var patch = _VirtualDom_pushPatch(localPatches, 9, index, undefined);

		changes[key] = {
			c: 1,
			z: vnode,
			r: index,
			s: patch
		};

		return;
	}

	// this key was inserted earlier, a match!
	if (entry.c === 0)
	{
		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(vnode, entry.z, subPatches, index);

		_VirtualDom_pushPatch(localPatches, 9, index, {
			w: subPatches,
			A: entry
		});

		return;
	}

	// this key has already been removed or moved, a duplicate!
	_VirtualDom_removeNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, index);
}



// ADD DOM NODES
//
// Each DOM node has an "index" assigned in order of traversal. It is important
// to minimize our crawl over the actual DOM, so these indexes (along with the
// descendantsCount of virtual nodes) let us skip touching entire subtrees of
// the DOM if we know there are no patches there.


function _VirtualDom_addDomNodes(domNode, vNode, patches, eventNode)
{
	_VirtualDom_addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.b, eventNode);
}


// assumes `patches` is non-empty and indexes increase monotonically.
function _VirtualDom_addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
{
	var patch = patches[i];
	var index = patch.r;

	while (index === low)
	{
		var patchType = patch.$;

		if (patchType === 1)
		{
			_VirtualDom_addDomNodes(domNode, vNode.k, patch.s, eventNode);
		}
		else if (patchType === 8)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var subPatches = patch.s.w;
			if (subPatches.length > 0)
			{
				_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
			}
		}
		else if (patchType === 9)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var data = patch.s;
			if (data)
			{
				data.A.s = domNode;
				var subPatches = data.w;
				if (subPatches.length > 0)
				{
					_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			}
		}
		else
		{
			patch.t = domNode;
			patch.u = eventNode;
		}

		i++;

		if (!(patch = patches[i]) || (index = patch.r) > high)
		{
			return i;
		}
	}

	var tag = vNode.$;

	if (tag === 4)
	{
		var subNode = vNode.k;

		while (subNode.$ === 4)
		{
			subNode = subNode.k;
		}

		return _VirtualDom_addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);
	}

	// tag must be 1 or 2 at this point

	var vKids = vNode.e;
	var childNodes = domNode.childNodes;
	for (var j = 0; j < vKids.length; j++)
	{
		low++;
		var vKid = tag === 1 ? vKids[j] : vKids[j].b;
		var nextLow = low + (vKid.b || 0);
		if (low <= index && index <= nextLow)
		{
			i = _VirtualDom_addDomNodesHelp(childNodes[j], vKid, patches, i, low, nextLow, eventNode);
			if (!(patch = patches[i]) || (index = patch.r) > high)
			{
				return i;
			}
		}
		low = nextLow;
	}
	return i;
}



// APPLY PATCHES


function _VirtualDom_applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
{
	if (patches.length === 0)
	{
		return rootDomNode;
	}

	_VirtualDom_addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
	return _VirtualDom_applyPatchesHelp(rootDomNode, patches);
}

function _VirtualDom_applyPatchesHelp(rootDomNode, patches)
{
	for (var i = 0; i < patches.length; i++)
	{
		var patch = patches[i];
		var localDomNode = patch.t
		var newNode = _VirtualDom_applyPatch(localDomNode, patch);
		if (localDomNode === rootDomNode)
		{
			rootDomNode = newNode;
		}
	}
	return rootDomNode;
}

function _VirtualDom_applyPatch(domNode, patch)
{
	switch (patch.$)
	{
		case 0:
			return _VirtualDom_applyPatchRedraw(domNode, patch.s, patch.u);

		case 4:
			_VirtualDom_applyFacts(domNode, patch.u, patch.s);
			return domNode;

		case 3:
			domNode.replaceData(0, domNode.length, patch.s);
			return domNode;

		case 1:
			return _VirtualDom_applyPatchesHelp(domNode, patch.s);

		case 2:
			if (domNode.elm_event_node_ref)
			{
				domNode.elm_event_node_ref.j = patch.s;
			}
			else
			{
				domNode.elm_event_node_ref = { j: patch.s, p: patch.u };
			}
			return domNode;

		case 6:
			var data = patch.s;
			for (var i = 0; i < data.i; i++)
			{
				domNode.removeChild(domNode.childNodes[data.v]);
			}
			return domNode;

		case 7:
			var data = patch.s;
			var kids = data.e;
			var i = data.v;
			var theEnd = domNode.childNodes[i];
			for (; i < kids.length; i++)
			{
				domNode.insertBefore(_VirtualDom_render(kids[i], patch.u), theEnd);
			}
			return domNode;

		case 9:
			var data = patch.s;
			if (!data)
			{
				domNode.parentNode.removeChild(domNode);
				return domNode;
			}
			var entry = data.A;
			if (typeof entry.r !== 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
			}
			entry.s = _VirtualDom_applyPatchesHelp(domNode, data.w);
			return domNode;

		case 8:
			return _VirtualDom_applyPatchReorder(domNode, patch);

		case 5:
			return patch.s(domNode);

		default:
			_Debug_crash(10); // 'Ran into an unknown patch!'
	}
}


function _VirtualDom_applyPatchRedraw(domNode, vNode, eventNode)
{
	var parentNode = domNode.parentNode;
	var newNode = _VirtualDom_render(vNode, eventNode);

	if (!newNode.elm_event_node_ref)
	{
		newNode.elm_event_node_ref = domNode.elm_event_node_ref;
	}

	if (parentNode && newNode !== domNode)
	{
		parentNode.replaceChild(newNode, domNode);
	}
	return newNode;
}


function _VirtualDom_applyPatchReorder(domNode, patch)
{
	var data = patch.s;

	// remove end inserts
	var frag = _VirtualDom_applyPatchReorderEndInsertsHelp(data.y, patch);

	// removals
	domNode = _VirtualDom_applyPatchesHelp(domNode, data.w);

	// inserts
	var inserts = data.x;
	for (var i = 0; i < inserts.length; i++)
	{
		var insert = inserts[i];
		var entry = insert.A;
		var node = entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u);
		domNode.insertBefore(node, domNode.childNodes[insert.r]);
	}

	// add end inserts
	if (frag)
	{
		_VirtualDom_appendChild(domNode, frag);
	}

	return domNode;
}


function _VirtualDom_applyPatchReorderEndInsertsHelp(endInserts, patch)
{
	if (!endInserts)
	{
		return;
	}

	var frag = _VirtualDom_doc.createDocumentFragment();
	for (var i = 0; i < endInserts.length; i++)
	{
		var insert = endInserts[i];
		var entry = insert.A;
		_VirtualDom_appendChild(frag, entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u)
		);
	}
	return frag;
}


function _VirtualDom_virtualize(node)
{
	// TEXT NODES

	if (node.nodeType === 3)
	{
		return _VirtualDom_text(node.textContent);
	}


	// WEIRD NODES

	if (node.nodeType !== 1)
	{
		return _VirtualDom_text('');
	}


	// ELEMENT NODES

	var attrList = _List_Nil;
	var attrs = node.attributes;
	for (var i = attrs.length; i--; )
	{
		var attr = attrs[i];
		var name = attr.name;
		var value = attr.value;
		attrList = _List_Cons( A2(_VirtualDom_attribute, name, value), attrList );
	}

	var tag = node.tagName.toLowerCase();
	var kidList = _List_Nil;
	var kids = node.childNodes;

	for (var i = kids.length; i--; )
	{
		kidList = _List_Cons(_VirtualDom_virtualize(kids[i]), kidList);
	}
	return A3(_VirtualDom_node, tag, attrList, kidList);
}

function _VirtualDom_dekey(keyedNode)
{
	var keyedKids = keyedNode.e;
	var len = keyedKids.length;
	var kids = new Array(len);
	for (var i = 0; i < len; i++)
	{
		kids[i] = keyedKids[i].b;
	}

	return {
		$: 1,
		c: keyedNode.c,
		d: keyedNode.d,
		e: kids,
		f: keyedNode.f,
		b: keyedNode.b
	};
}




// ELEMENT


var _Debugger_element;

var _Browser_element = _Debugger_element || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function(sendToApp, initialModel) {
			var view = impl.view;
			/**_UNUSED/
			var domNode = args['node'];
			//*/
			/**/
			var domNode = args && args['node'] ? args['node'] : _Debug_crash(0);
			//*/
			var currNode = _VirtualDom_virtualize(domNode);

			return _Browser_makeAnimator(initialModel, function(model)
			{
				var nextNode = view(model);
				var patches = _VirtualDom_diff(currNode, nextNode);
				domNode = _VirtualDom_applyPatches(domNode, currNode, patches, sendToApp);
				currNode = nextNode;
			});
		}
	);
});



// DOCUMENT


var _Debugger_document;

var _Browser_document = _Debugger_document || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function(sendToApp, initialModel) {
			var divertHrefToApp = impl.setup && impl.setup(sendToApp)
			var view = impl.view;
			var title = _VirtualDom_doc.title;
			var bodyNode = _VirtualDom_doc.body;
			var currNode = _VirtualDom_virtualize(bodyNode);
			return _Browser_makeAnimator(initialModel, function(model)
			{
				_VirtualDom_divertHrefToApp = divertHrefToApp;
				var doc = view(model);
				var nextNode = _VirtualDom_node('body')(_List_Nil)(doc.body);
				var patches = _VirtualDom_diff(currNode, nextNode);
				bodyNode = _VirtualDom_applyPatches(bodyNode, currNode, patches, sendToApp);
				currNode = nextNode;
				_VirtualDom_divertHrefToApp = 0;
				(title !== doc.title) && (_VirtualDom_doc.title = title = doc.title);
			});
		}
	);
});



// ANIMATION


var _Browser_cancelAnimationFrame =
	typeof cancelAnimationFrame !== 'undefined'
		? cancelAnimationFrame
		: function(id) { clearTimeout(id); };

var _Browser_requestAnimationFrame =
	typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(callback) { return setTimeout(callback, 1000 / 60); };


function _Browser_makeAnimator(model, draw)
{
	draw(model);

	var state = 0;

	function updateIfNeeded()
	{
		state = state === 1
			? 0
			: ( _Browser_requestAnimationFrame(updateIfNeeded), draw(model), 1 );
	}

	return function(nextModel, isSync)
	{
		model = nextModel;

		isSync
			? ( draw(model),
				state === 2 && (state = 1)
				)
			: ( state === 0 && _Browser_requestAnimationFrame(updateIfNeeded),
				state = 2
				);
	};
}



// APPLICATION


function _Browser_application(impl)
{
	var onUrlChange = impl.onUrlChange;
	var onUrlRequest = impl.onUrlRequest;
	var key = function() { key.a(onUrlChange(_Browser_getUrl())); };

	return _Browser_document({
		setup: function(sendToApp)
		{
			key.a = sendToApp;
			_Browser_window.addEventListener('popstate', key);
			_Browser_window.navigator.userAgent.indexOf('Trident') < 0 || _Browser_window.addEventListener('hashchange', key);

			return F2(function(domNode, event)
			{
				if (!event.ctrlKey && !event.metaKey && !event.shiftKey && event.button < 1 && !domNode.target && !domNode.hasAttribute('download'))
				{
					event.preventDefault();
					var href = domNode.href;
					var curr = _Browser_getUrl();
					var next = $elm$url$Url$fromString(href).a;
					sendToApp(onUrlRequest(
						(next
							&& curr.protocol === next.protocol
							&& curr.host === next.host
							&& curr.port_.a === next.port_.a
						)
							? $elm$browser$Browser$Internal(next)
							: $elm$browser$Browser$External(href)
					));
				}
			});
		},
		init: function(flags)
		{
			return A3(impl.init, flags, _Browser_getUrl(), key);
		},
		view: impl.view,
		update: impl.update,
		subscriptions: impl.subscriptions
	});
}

function _Browser_getUrl()
{
	return $elm$url$Url$fromString(_VirtualDom_doc.location.href).a || _Debug_crash(1);
}

var _Browser_go = F2(function(key, n)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		n && history.go(n);
		key();
	}));
});

var _Browser_pushUrl = F2(function(key, url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		history.pushState({}, '', url);
		key();
	}));
});

var _Browser_replaceUrl = F2(function(key, url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		history.replaceState({}, '', url);
		key();
	}));
});



// GLOBAL EVENTS


var _Browser_fakeNode = { addEventListener: function() {}, removeEventListener: function() {} };
var _Browser_doc = typeof document !== 'undefined' ? document : _Browser_fakeNode;
var _Browser_window = typeof window !== 'undefined' ? window : _Browser_fakeNode;

var _Browser_on = F3(function(node, eventName, sendToSelf)
{
	return _Scheduler_spawn(_Scheduler_binding(function(callback)
	{
		function handler(event)	{ _Scheduler_rawSpawn(sendToSelf(event)); }
		node.addEventListener(eventName, handler, _VirtualDom_passiveSupported && { passive: true });
		return function() { node.removeEventListener(eventName, handler); };
	}));
});

var _Browser_decodeEvent = F2(function(decoder, event)
{
	var result = _Json_runHelp(decoder, event);
	return $elm$core$Result$isOk(result) ? $elm$core$Maybe$Just(result.a) : $elm$core$Maybe$Nothing;
});



// PAGE VISIBILITY


function _Browser_visibilityInfo()
{
	return (typeof _VirtualDom_doc.hidden !== 'undefined')
		? { hidden: 'hidden', change: 'visibilitychange' }
		:
	(typeof _VirtualDom_doc.mozHidden !== 'undefined')
		? { hidden: 'mozHidden', change: 'mozvisibilitychange' }
		:
	(typeof _VirtualDom_doc.msHidden !== 'undefined')
		? { hidden: 'msHidden', change: 'msvisibilitychange' }
		:
	(typeof _VirtualDom_doc.webkitHidden !== 'undefined')
		? { hidden: 'webkitHidden', change: 'webkitvisibilitychange' }
		: { hidden: 'hidden', change: 'visibilitychange' };
}



// ANIMATION FRAMES


function _Browser_rAF()
{
	return _Scheduler_binding(function(callback)
	{
		var id = _Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(Date.now()));
		});

		return function() {
			_Browser_cancelAnimationFrame(id);
		};
	});
}


function _Browser_now()
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(Date.now()));
	});
}



// DOM STUFF


function _Browser_withNode(id, doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			var node = document.getElementById(id);
			callback(node
				? _Scheduler_succeed(doStuff(node))
				: _Scheduler_fail($elm$browser$Browser$Dom$NotFound(id))
			);
		});
	});
}


function _Browser_withWindow(doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(doStuff()));
		});
	});
}


// FOCUS and BLUR


var _Browser_call = F2(function(functionName, id)
{
	return _Browser_withNode(id, function(node) {
		node[functionName]();
		return _Utils_Tuple0;
	});
});



// WINDOW VIEWPORT


function _Browser_getViewport()
{
	return {
		scene: _Browser_getScene(),
		viewport: {
			x: _Browser_window.pageXOffset,
			y: _Browser_window.pageYOffset,
			width: _Browser_doc.documentElement.clientWidth,
			height: _Browser_doc.documentElement.clientHeight
		}
	};
}

function _Browser_getScene()
{
	var body = _Browser_doc.body;
	var elem = _Browser_doc.documentElement;
	return {
		width: Math.max(body.scrollWidth, body.offsetWidth, elem.scrollWidth, elem.offsetWidth, elem.clientWidth),
		height: Math.max(body.scrollHeight, body.offsetHeight, elem.scrollHeight, elem.offsetHeight, elem.clientHeight)
	};
}

var _Browser_setViewport = F2(function(x, y)
{
	return _Browser_withWindow(function()
	{
		_Browser_window.scroll(x, y);
		return _Utils_Tuple0;
	});
});



// ELEMENT VIEWPORT


function _Browser_getViewportOf(id)
{
	return _Browser_withNode(id, function(node)
	{
		return {
			scene: {
				width: node.scrollWidth,
				height: node.scrollHeight
			},
			viewport: {
				x: node.scrollLeft,
				y: node.scrollTop,
				width: node.clientWidth,
				height: node.clientHeight
			}
		};
	});
}


var _Browser_setViewportOf = F3(function(id, x, y)
{
	return _Browser_withNode(id, function(node)
	{
		node.scrollLeft = x;
		node.scrollTop = y;
		return _Utils_Tuple0;
	});
});



// ELEMENT


function _Browser_getElement(id)
{
	return _Browser_withNode(id, function(node)
	{
		var rect = node.getBoundingClientRect();
		var x = _Browser_window.pageXOffset;
		var y = _Browser_window.pageYOffset;
		return {
			scene: _Browser_getScene(),
			viewport: {
				x: x,
				y: y,
				width: _Browser_doc.documentElement.clientWidth,
				height: _Browser_doc.documentElement.clientHeight
			},
			element: {
				x: x + rect.left,
				y: y + rect.top,
				width: rect.width,
				height: rect.height
			}
		};
	});
}



// LOAD and RELOAD


function _Browser_reload(skipCache)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		_VirtualDom_doc.location.reload(skipCache);
	}));
}

function _Browser_load(url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		try
		{
			_Browser_window.location = url;
		}
		catch(err)
		{
			// Only Firefox can throw a NS_ERROR_MALFORMED_URI exception here.
			// Other browsers reload the page, so let's be consistent about that.
			_VirtualDom_doc.location.reload(false);
		}
	}));
}



var _Bitwise_and = F2(function(a, b)
{
	return a & b;
});

var _Bitwise_or = F2(function(a, b)
{
	return a | b;
});

var _Bitwise_xor = F2(function(a, b)
{
	return a ^ b;
});

function _Bitwise_complement(a)
{
	return ~a;
};

var _Bitwise_shiftLeftBy = F2(function(offset, a)
{
	return a << offset;
});

var _Bitwise_shiftRightBy = F2(function(offset, a)
{
	return a >> offset;
});

var _Bitwise_shiftRightZfBy = F2(function(offset, a)
{
	return a >>> offset;
});
var $elm$core$Basics$EQ = {$: 'EQ'};
var $elm$core$Basics$GT = {$: 'GT'};
var $elm$core$Basics$LT = {$: 'LT'};
var $elm$core$List$cons = _List_cons;
var $elm$core$Dict$foldr = F3(
	function (func, acc, t) {
		foldr:
		while (true) {
			if (t.$ === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var key = t.b;
				var value = t.c;
				var left = t.d;
				var right = t.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3($elm$core$Dict$foldr, func, acc, right)),
					$temp$t = left;
				func = $temp$func;
				acc = $temp$acc;
				t = $temp$t;
				continue foldr;
			}
		}
	});
var $elm$core$Dict$toList = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return A2(
					$elm$core$List$cons,
					_Utils_Tuple2(key, value),
					list);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Dict$keys = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return A2($elm$core$List$cons, key, keyList);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Set$toList = function (_v0) {
	var dict = _v0.a;
	return $elm$core$Dict$keys(dict);
};
var $elm$core$Elm$JsArray$foldr = _JsArray_foldr;
var $elm$core$Array$foldr = F3(
	function (func, baseCase, _v0) {
		var tree = _v0.c;
		var tail = _v0.d;
		var helper = F2(
			function (node, acc) {
				if (node.$ === 'SubTree') {
					var subTree = node.a;
					return A3($elm$core$Elm$JsArray$foldr, helper, acc, subTree);
				} else {
					var values = node.a;
					return A3($elm$core$Elm$JsArray$foldr, func, acc, values);
				}
			});
		return A3(
			$elm$core$Elm$JsArray$foldr,
			helper,
			A3($elm$core$Elm$JsArray$foldr, func, baseCase, tail),
			tree);
	});
var $elm$core$Array$toList = function (array) {
	return A3($elm$core$Array$foldr, $elm$core$List$cons, _List_Nil, array);
};
var $elm$core$Result$Err = function (a) {
	return {$: 'Err', a: a};
};
var $elm$json$Json$Decode$Failure = F2(
	function (a, b) {
		return {$: 'Failure', a: a, b: b};
	});
var $elm$json$Json$Decode$Field = F2(
	function (a, b) {
		return {$: 'Field', a: a, b: b};
	});
var $elm$json$Json$Decode$Index = F2(
	function (a, b) {
		return {$: 'Index', a: a, b: b};
	});
var $elm$core$Result$Ok = function (a) {
	return {$: 'Ok', a: a};
};
var $elm$json$Json$Decode$OneOf = function (a) {
	return {$: 'OneOf', a: a};
};
var $elm$core$Basics$False = {$: 'False'};
var $elm$core$Basics$add = _Basics_add;
var $elm$core$Maybe$Just = function (a) {
	return {$: 'Just', a: a};
};
var $elm$core$Maybe$Nothing = {$: 'Nothing'};
var $elm$core$String$all = _String_all;
var $elm$core$Basics$and = _Basics_and;
var $elm$core$Basics$append = _Utils_append;
var $elm$json$Json$Encode$encode = _Json_encode;
var $elm$core$String$fromInt = _String_fromNumber;
var $elm$core$String$join = F2(
	function (sep, chunks) {
		return A2(
			_String_join,
			sep,
			_List_toArray(chunks));
	});
var $elm$core$String$split = F2(
	function (sep, string) {
		return _List_fromArray(
			A2(_String_split, sep, string));
	});
var $elm$json$Json$Decode$indent = function (str) {
	return A2(
		$elm$core$String$join,
		'\n    ',
		A2($elm$core$String$split, '\n', str));
};
var $elm$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			if (!list.b) {
				return acc;
			} else {
				var x = list.a;
				var xs = list.b;
				var $temp$func = func,
					$temp$acc = A2(func, x, acc),
					$temp$list = xs;
				func = $temp$func;
				acc = $temp$acc;
				list = $temp$list;
				continue foldl;
			}
		}
	});
var $elm$core$List$length = function (xs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, i) {
				return i + 1;
			}),
		0,
		xs);
};
var $elm$core$List$map2 = _List_map2;
var $elm$core$Basics$le = _Utils_le;
var $elm$core$Basics$sub = _Basics_sub;
var $elm$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_Utils_cmp(lo, hi) < 1) {
				var $temp$lo = lo,
					$temp$hi = hi - 1,
					$temp$list = A2($elm$core$List$cons, hi, list);
				lo = $temp$lo;
				hi = $temp$hi;
				list = $temp$list;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var $elm$core$List$range = F2(
	function (lo, hi) {
		return A3($elm$core$List$rangeHelp, lo, hi, _List_Nil);
	});
var $elm$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$map2,
			f,
			A2(
				$elm$core$List$range,
				0,
				$elm$core$List$length(xs) - 1),
			xs);
	});
var $elm$core$Char$toCode = _Char_toCode;
var $elm$core$Char$isLower = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (97 <= code) && (code <= 122);
};
var $elm$core$Char$isUpper = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 90) && (65 <= code);
};
var $elm$core$Basics$or = _Basics_or;
var $elm$core$Char$isAlpha = function (_char) {
	return $elm$core$Char$isLower(_char) || $elm$core$Char$isUpper(_char);
};
var $elm$core$Char$isDigit = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 57) && (48 <= code);
};
var $elm$core$Char$isAlphaNum = function (_char) {
	return $elm$core$Char$isLower(_char) || ($elm$core$Char$isUpper(_char) || $elm$core$Char$isDigit(_char));
};
var $elm$core$List$reverse = function (list) {
	return A3($elm$core$List$foldl, $elm$core$List$cons, _List_Nil, list);
};
var $elm$core$String$uncons = _String_uncons;
var $elm$json$Json$Decode$errorOneOf = F2(
	function (i, error) {
		return '\n\n(' + ($elm$core$String$fromInt(i + 1) + (') ' + $elm$json$Json$Decode$indent(
			$elm$json$Json$Decode$errorToString(error))));
	});
var $elm$json$Json$Decode$errorToString = function (error) {
	return A2($elm$json$Json$Decode$errorToStringHelp, error, _List_Nil);
};
var $elm$json$Json$Decode$errorToStringHelp = F2(
	function (error, context) {
		errorToStringHelp:
		while (true) {
			switch (error.$) {
				case 'Field':
					var f = error.a;
					var err = error.b;
					var isSimple = function () {
						var _v1 = $elm$core$String$uncons(f);
						if (_v1.$ === 'Nothing') {
							return false;
						} else {
							var _v2 = _v1.a;
							var _char = _v2.a;
							var rest = _v2.b;
							return $elm$core$Char$isAlpha(_char) && A2($elm$core$String$all, $elm$core$Char$isAlphaNum, rest);
						}
					}();
					var fieldName = isSimple ? ('.' + f) : ('[\'' + (f + '\']'));
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, fieldName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'Index':
					var i = error.a;
					var err = error.b;
					var indexName = '[' + ($elm$core$String$fromInt(i) + ']');
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, indexName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'OneOf':
					var errors = error.a;
					if (!errors.b) {
						return 'Ran into a Json.Decode.oneOf with no possibilities' + function () {
							if (!context.b) {
								return '!';
							} else {
								return ' at json' + A2(
									$elm$core$String$join,
									'',
									$elm$core$List$reverse(context));
							}
						}();
					} else {
						if (!errors.b.b) {
							var err = errors.a;
							var $temp$error = err,
								$temp$context = context;
							error = $temp$error;
							context = $temp$context;
							continue errorToStringHelp;
						} else {
							var starter = function () {
								if (!context.b) {
									return 'Json.Decode.oneOf';
								} else {
									return 'The Json.Decode.oneOf at json' + A2(
										$elm$core$String$join,
										'',
										$elm$core$List$reverse(context));
								}
							}();
							var introduction = starter + (' failed in the following ' + ($elm$core$String$fromInt(
								$elm$core$List$length(errors)) + ' ways:'));
							return A2(
								$elm$core$String$join,
								'\n\n',
								A2(
									$elm$core$List$cons,
									introduction,
									A2($elm$core$List$indexedMap, $elm$json$Json$Decode$errorOneOf, errors)));
						}
					}
				default:
					var msg = error.a;
					var json = error.b;
					var introduction = function () {
						if (!context.b) {
							return 'Problem with the given value:\n\n';
						} else {
							return 'Problem with the value at json' + (A2(
								$elm$core$String$join,
								'',
								$elm$core$List$reverse(context)) + ':\n\n    ');
						}
					}();
					return introduction + ($elm$json$Json$Decode$indent(
						A2($elm$json$Json$Encode$encode, 4, json)) + ('\n\n' + msg));
			}
		}
	});
var $elm$core$Array$branchFactor = 32;
var $elm$core$Array$Array_elm_builtin = F4(
	function (a, b, c, d) {
		return {$: 'Array_elm_builtin', a: a, b: b, c: c, d: d};
	});
var $elm$core$Elm$JsArray$empty = _JsArray_empty;
var $elm$core$Basics$ceiling = _Basics_ceiling;
var $elm$core$Basics$fdiv = _Basics_fdiv;
var $elm$core$Basics$logBase = F2(
	function (base, number) {
		return _Basics_log(number) / _Basics_log(base);
	});
var $elm$core$Basics$toFloat = _Basics_toFloat;
var $elm$core$Array$shiftStep = $elm$core$Basics$ceiling(
	A2($elm$core$Basics$logBase, 2, $elm$core$Array$branchFactor));
var $elm$core$Array$empty = A4($elm$core$Array$Array_elm_builtin, 0, $elm$core$Array$shiftStep, $elm$core$Elm$JsArray$empty, $elm$core$Elm$JsArray$empty);
var $elm$core$Elm$JsArray$initialize = _JsArray_initialize;
var $elm$core$Array$Leaf = function (a) {
	return {$: 'Leaf', a: a};
};
var $elm$core$Basics$apL = F2(
	function (f, x) {
		return f(x);
	});
var $elm$core$Basics$apR = F2(
	function (x, f) {
		return f(x);
	});
var $elm$core$Basics$eq = _Utils_equal;
var $elm$core$Basics$floor = _Basics_floor;
var $elm$core$Elm$JsArray$length = _JsArray_length;
var $elm$core$Basics$gt = _Utils_gt;
var $elm$core$Basics$max = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) > 0) ? x : y;
	});
var $elm$core$Basics$mul = _Basics_mul;
var $elm$core$Array$SubTree = function (a) {
	return {$: 'SubTree', a: a};
};
var $elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
var $elm$core$Array$compressNodes = F2(
	function (nodes, acc) {
		compressNodes:
		while (true) {
			var _v0 = A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodes);
			var node = _v0.a;
			var remainingNodes = _v0.b;
			var newAcc = A2(
				$elm$core$List$cons,
				$elm$core$Array$SubTree(node),
				acc);
			if (!remainingNodes.b) {
				return $elm$core$List$reverse(newAcc);
			} else {
				var $temp$nodes = remainingNodes,
					$temp$acc = newAcc;
				nodes = $temp$nodes;
				acc = $temp$acc;
				continue compressNodes;
			}
		}
	});
var $elm$core$Tuple$first = function (_v0) {
	var x = _v0.a;
	return x;
};
var $elm$core$Array$treeFromBuilder = F2(
	function (nodeList, nodeListSize) {
		treeFromBuilder:
		while (true) {
			var newNodeSize = $elm$core$Basics$ceiling(nodeListSize / $elm$core$Array$branchFactor);
			if (newNodeSize === 1) {
				return A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodeList).a;
			} else {
				var $temp$nodeList = A2($elm$core$Array$compressNodes, nodeList, _List_Nil),
					$temp$nodeListSize = newNodeSize;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue treeFromBuilder;
			}
		}
	});
var $elm$core$Array$builderToArray = F2(
	function (reverseNodeList, builder) {
		if (!builder.nodeListSize) {
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.tail),
				$elm$core$Array$shiftStep,
				$elm$core$Elm$JsArray$empty,
				builder.tail);
		} else {
			var treeLen = builder.nodeListSize * $elm$core$Array$branchFactor;
			var depth = $elm$core$Basics$floor(
				A2($elm$core$Basics$logBase, $elm$core$Array$branchFactor, treeLen - 1));
			var correctNodeList = reverseNodeList ? $elm$core$List$reverse(builder.nodeList) : builder.nodeList;
			var tree = A2($elm$core$Array$treeFromBuilder, correctNodeList, builder.nodeListSize);
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.tail) + treeLen,
				A2($elm$core$Basics$max, 5, depth * $elm$core$Array$shiftStep),
				tree,
				builder.tail);
		}
	});
var $elm$core$Basics$idiv = _Basics_idiv;
var $elm$core$Basics$lt = _Utils_lt;
var $elm$core$Array$initializeHelp = F5(
	function (fn, fromIndex, len, nodeList, tail) {
		initializeHelp:
		while (true) {
			if (fromIndex < 0) {
				return A2(
					$elm$core$Array$builderToArray,
					false,
					{nodeList: nodeList, nodeListSize: (len / $elm$core$Array$branchFactor) | 0, tail: tail});
			} else {
				var leaf = $elm$core$Array$Leaf(
					A3($elm$core$Elm$JsArray$initialize, $elm$core$Array$branchFactor, fromIndex, fn));
				var $temp$fn = fn,
					$temp$fromIndex = fromIndex - $elm$core$Array$branchFactor,
					$temp$len = len,
					$temp$nodeList = A2($elm$core$List$cons, leaf, nodeList),
					$temp$tail = tail;
				fn = $temp$fn;
				fromIndex = $temp$fromIndex;
				len = $temp$len;
				nodeList = $temp$nodeList;
				tail = $temp$tail;
				continue initializeHelp;
			}
		}
	});
var $elm$core$Basics$remainderBy = _Basics_remainderBy;
var $elm$core$Array$initialize = F2(
	function (len, fn) {
		if (len <= 0) {
			return $elm$core$Array$empty;
		} else {
			var tailLen = len % $elm$core$Array$branchFactor;
			var tail = A3($elm$core$Elm$JsArray$initialize, tailLen, len - tailLen, fn);
			var initialFromIndex = (len - tailLen) - $elm$core$Array$branchFactor;
			return A5($elm$core$Array$initializeHelp, fn, initialFromIndex, len, _List_Nil, tail);
		}
	});
var $elm$core$Basics$True = {$: 'True'};
var $elm$core$Result$isOk = function (result) {
	if (result.$ === 'Ok') {
		return true;
	} else {
		return false;
	}
};
var $elm$json$Json$Decode$map = _Json_map1;
var $elm$json$Json$Decode$map2 = _Json_map2;
var $elm$json$Json$Decode$succeed = _Json_succeed;
var $elm$virtual_dom$VirtualDom$toHandlerInt = function (handler) {
	switch (handler.$) {
		case 'Normal':
			return 0;
		case 'MayStopPropagation':
			return 1;
		case 'MayPreventDefault':
			return 2;
		default:
			return 3;
	}
};
var $elm$browser$Browser$External = function (a) {
	return {$: 'External', a: a};
};
var $elm$browser$Browser$Internal = function (a) {
	return {$: 'Internal', a: a};
};
var $elm$core$Basics$identity = function (x) {
	return x;
};
var $elm$browser$Browser$Dom$NotFound = function (a) {
	return {$: 'NotFound', a: a};
};
var $elm$url$Url$Http = {$: 'Http'};
var $elm$url$Url$Https = {$: 'Https'};
var $elm$url$Url$Url = F6(
	function (protocol, host, port_, path, query, fragment) {
		return {fragment: fragment, host: host, path: path, port_: port_, protocol: protocol, query: query};
	});
var $elm$core$String$contains = _String_contains;
var $elm$core$String$length = _String_length;
var $elm$core$String$slice = _String_slice;
var $elm$core$String$dropLeft = F2(
	function (n, string) {
		return (n < 1) ? string : A3(
			$elm$core$String$slice,
			n,
			$elm$core$String$length(string),
			string);
	});
var $elm$core$String$indexes = _String_indexes;
var $elm$core$String$isEmpty = function (string) {
	return string === '';
};
var $elm$core$String$left = F2(
	function (n, string) {
		return (n < 1) ? '' : A3($elm$core$String$slice, 0, n, string);
	});
var $elm$core$String$toInt = _String_toInt;
var $elm$url$Url$chompBeforePath = F5(
	function (protocol, path, params, frag, str) {
		if ($elm$core$String$isEmpty(str) || A2($elm$core$String$contains, '@', str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, ':', str);
			if (!_v0.b) {
				return $elm$core$Maybe$Just(
					A6($elm$url$Url$Url, protocol, str, $elm$core$Maybe$Nothing, path, params, frag));
			} else {
				if (!_v0.b.b) {
					var i = _v0.a;
					var _v1 = $elm$core$String$toInt(
						A2($elm$core$String$dropLeft, i + 1, str));
					if (_v1.$ === 'Nothing') {
						return $elm$core$Maybe$Nothing;
					} else {
						var port_ = _v1;
						return $elm$core$Maybe$Just(
							A6(
								$elm$url$Url$Url,
								protocol,
								A2($elm$core$String$left, i, str),
								port_,
								path,
								params,
								frag));
					}
				} else {
					return $elm$core$Maybe$Nothing;
				}
			}
		}
	});
var $elm$url$Url$chompBeforeQuery = F4(
	function (protocol, params, frag, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '/', str);
			if (!_v0.b) {
				return A5($elm$url$Url$chompBeforePath, protocol, '/', params, frag, str);
			} else {
				var i = _v0.a;
				return A5(
					$elm$url$Url$chompBeforePath,
					protocol,
					A2($elm$core$String$dropLeft, i, str),
					params,
					frag,
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$url$Url$chompBeforeFragment = F3(
	function (protocol, frag, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '?', str);
			if (!_v0.b) {
				return A4($elm$url$Url$chompBeforeQuery, protocol, $elm$core$Maybe$Nothing, frag, str);
			} else {
				var i = _v0.a;
				return A4(
					$elm$url$Url$chompBeforeQuery,
					protocol,
					$elm$core$Maybe$Just(
						A2($elm$core$String$dropLeft, i + 1, str)),
					frag,
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$url$Url$chompAfterProtocol = F2(
	function (protocol, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '#', str);
			if (!_v0.b) {
				return A3($elm$url$Url$chompBeforeFragment, protocol, $elm$core$Maybe$Nothing, str);
			} else {
				var i = _v0.a;
				return A3(
					$elm$url$Url$chompBeforeFragment,
					protocol,
					$elm$core$Maybe$Just(
						A2($elm$core$String$dropLeft, i + 1, str)),
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$core$String$startsWith = _String_startsWith;
var $elm$url$Url$fromString = function (str) {
	return A2($elm$core$String$startsWith, 'http://', str) ? A2(
		$elm$url$Url$chompAfterProtocol,
		$elm$url$Url$Http,
		A2($elm$core$String$dropLeft, 7, str)) : (A2($elm$core$String$startsWith, 'https://', str) ? A2(
		$elm$url$Url$chompAfterProtocol,
		$elm$url$Url$Https,
		A2($elm$core$String$dropLeft, 8, str)) : $elm$core$Maybe$Nothing);
};
var $elm$core$Basics$never = function (_v0) {
	never:
	while (true) {
		var nvr = _v0.a;
		var $temp$_v0 = nvr;
		_v0 = $temp$_v0;
		continue never;
	}
};
var $elm$core$Task$Perform = function (a) {
	return {$: 'Perform', a: a};
};
var $elm$core$Task$succeed = _Scheduler_succeed;
var $elm$core$Task$init = $elm$core$Task$succeed(_Utils_Tuple0);
var $elm$core$List$foldrHelper = F4(
	function (fn, acc, ctr, ls) {
		if (!ls.b) {
			return acc;
		} else {
			var a = ls.a;
			var r1 = ls.b;
			if (!r1.b) {
				return A2(fn, a, acc);
			} else {
				var b = r1.a;
				var r2 = r1.b;
				if (!r2.b) {
					return A2(
						fn,
						a,
						A2(fn, b, acc));
				} else {
					var c = r2.a;
					var r3 = r2.b;
					if (!r3.b) {
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(fn, c, acc)));
					} else {
						var d = r3.a;
						var r4 = r3.b;
						var res = (ctr > 500) ? A3(
							$elm$core$List$foldl,
							fn,
							acc,
							$elm$core$List$reverse(r4)) : A4($elm$core$List$foldrHelper, fn, acc, ctr + 1, r4);
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(
									fn,
									c,
									A2(fn, d, res))));
					}
				}
			}
		}
	});
var $elm$core$List$foldr = F3(
	function (fn, acc, ls) {
		return A4($elm$core$List$foldrHelper, fn, acc, 0, ls);
	});
var $elm$core$List$map = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, acc) {
					return A2(
						$elm$core$List$cons,
						f(x),
						acc);
				}),
			_List_Nil,
			xs);
	});
var $elm$core$Task$andThen = _Scheduler_andThen;
var $elm$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return $elm$core$Task$succeed(
					func(a));
			},
			taskA);
	});
var $elm$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return A2(
					$elm$core$Task$andThen,
					function (b) {
						return $elm$core$Task$succeed(
							A2(func, a, b));
					},
					taskB);
			},
			taskA);
	});
var $elm$core$Task$sequence = function (tasks) {
	return A3(
		$elm$core$List$foldr,
		$elm$core$Task$map2($elm$core$List$cons),
		$elm$core$Task$succeed(_List_Nil),
		tasks);
};
var $elm$core$Platform$sendToApp = _Platform_sendToApp;
var $elm$core$Task$spawnCmd = F2(
	function (router, _v0) {
		var task = _v0.a;
		return _Scheduler_spawn(
			A2(
				$elm$core$Task$andThen,
				$elm$core$Platform$sendToApp(router),
				task));
	});
var $elm$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			$elm$core$Task$map,
			function (_v0) {
				return _Utils_Tuple0;
			},
			$elm$core$Task$sequence(
				A2(
					$elm$core$List$map,
					$elm$core$Task$spawnCmd(router),
					commands)));
	});
var $elm$core$Task$onSelfMsg = F3(
	function (_v0, _v1, _v2) {
		return $elm$core$Task$succeed(_Utils_Tuple0);
	});
var $elm$core$Task$cmdMap = F2(
	function (tagger, _v0) {
		var task = _v0.a;
		return $elm$core$Task$Perform(
			A2($elm$core$Task$map, tagger, task));
	});
_Platform_effectManagers['Task'] = _Platform_createManager($elm$core$Task$init, $elm$core$Task$onEffects, $elm$core$Task$onSelfMsg, $elm$core$Task$cmdMap);
var $elm$core$Task$command = _Platform_leaf('Task');
var $elm$core$Task$perform = F2(
	function (toMessage, task) {
		return $elm$core$Task$command(
			$elm$core$Task$Perform(
				A2($elm$core$Task$map, toMessage, task)));
	});
var $elm$browser$Browser$element = _Browser_element;
var $elm$json$Json$Decode$bool = _Json_decodeBool;
var $elm$json$Json$Decode$decodeValue = _Json_run;
var $elm$json$Json$Decode$field = _Json_decodeField;
var $elm$core$Maybe$andThen = F2(
	function (callback, maybeValue) {
		if (maybeValue.$ === 'Just') {
			var value = maybeValue.a;
			return callback(value);
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $elm$json$Json$Encode$bool = _Json_wrap;
var $elm$core$Maybe$destruct = F3(
	function (_default, func, maybe) {
		if (maybe.$ === 'Just') {
			var a = maybe.a;
			return func(a);
		} else {
			return _default;
		}
	});
var $elm$json$Json$Encode$float = _Json_wrap;
var $elm$json$Json$Encode$null = _Json_encodeNull;
var $elm$json$Json$Encode$object = function (pairs) {
	return _Json_wrap(
		A3(
			$elm$core$List$foldl,
			F2(
				function (_v0, obj) {
					var k = _v0.a;
					var v = _v0.b;
					return A3(_Json_addField, k, v, obj);
				}),
			_Json_emptyObject(_Utils_Tuple0),
			pairs));
};
var $elm$json$Json$Encode$string = _Json_wrap;
var $author$project$Video$polymnyVideoInit = _Platform_outgoingPort(
	'polymnyVideoInit',
	function ($) {
		return $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'autoplay',
					$elm$json$Json$Encode$bool($.autoplay)),
					_Utils_Tuple2(
					'id',
					$elm$json$Json$Encode$string($.id)),
					_Utils_Tuple2(
					'startTime',
					function ($) {
						return A3($elm$core$Maybe$destruct, $elm$json$Json$Encode$null, $elm$json$Json$Encode$float, $);
					}($.startTime)),
					_Utils_Tuple2(
					'url',
					$elm$json$Json$Encode$string($.url))
				]));
	});
var $author$project$Video$init = function (attr) {
	return $author$project$Video$polymnyVideoInit(attr);
};
var $elm$core$String$toFloat = _String_toFloat;
var $author$project$Video$parseTime = function (time) {
	var _v0 = $elm$core$String$toFloat(time);
	if (_v0.$ === 'Just') {
		var t = _v0.a;
		return $elm$core$Maybe$Just(t);
	} else {
		var splitH = A2($elm$core$String$split, 'h', time);
		var _v1 = function () {
			_v2$2:
			while (true) {
				if (splitH.b) {
					if (!splitH.b.b) {
						var rest = splitH.a;
						return _Utils_Tuple2(
							$elm$core$Maybe$Just(0),
							rest);
					} else {
						if (!splitH.b.b.b) {
							var h = splitH.a;
							var _v3 = splitH.b;
							var rest = _v3.a;
							return _Utils_Tuple2(
								$elm$core$String$toFloat(h),
								rest);
						} else {
							break _v2$2;
						}
					}
				} else {
					break _v2$2;
				}
			}
			return _Utils_Tuple2($elm$core$Maybe$Nothing, '');
		}();
		var hours = _v1.a;
		var restH = _v1.b;
		var splitM = A2($elm$core$String$split, 'm', restH);
		var _v4 = function () {
			_v5$2:
			while (true) {
				if (splitM.b) {
					if (!splitM.b.b) {
						var rest = splitM.a;
						return A2($elm$core$String$contains, 's', rest) ? _Utils_Tuple2(
							$elm$core$Maybe$Just(0),
							rest) : ((rest === '') ? _Utils_Tuple2(
							$elm$core$Maybe$Just(0),
							'') : _Utils_Tuple2(
							$elm$core$String$toFloat(rest),
							''));
					} else {
						if (!splitM.b.b.b) {
							var m = splitM.a;
							var _v6 = splitM.b;
							var rest = _v6.a;
							return _Utils_Tuple2(
								$elm$core$String$toFloat(m),
								rest);
						} else {
							break _v5$2;
						}
					}
				} else {
					break _v5$2;
				}
			}
			return _Utils_Tuple2($elm$core$Maybe$Nothing, '');
		}();
		var minutes = _v4.a;
		var restM = _v4.b;
		var splitS = A2($elm$core$String$split, 's', restM);
		var _v7 = function () {
			_v8$3:
			while (true) {
				if (splitS.b) {
					if (!splitS.b.b) {
						if (splitS.a === '') {
							return _Utils_Tuple2(
								minutes,
								$elm$core$Maybe$Just(0));
						} else {
							var rest = splitS.a;
							return _Utils_Tuple2(
								$elm$core$String$toFloat(rest),
								$elm$core$Maybe$Just(0));
						}
					} else {
						if ((splitS.b.a === '') && (!splitS.b.b.b)) {
							var s = splitS.a;
							var _v9 = splitS.b;
							return _Utils_Tuple2(
								minutes,
								$elm$core$String$toFloat(s));
						} else {
							break _v8$3;
						}
					}
				} else {
					break _v8$3;
				}
			}
			return _Utils_Tuple2($elm$core$Maybe$Nothing, $elm$core$Maybe$Nothing);
		}();
		var realMinutes = _v7.a;
		var seconds = _v7.b;
		var _v10 = _Utils_Tuple3(hours, realMinutes, seconds);
		if (((_v10.a.$ === 'Just') && (_v10.b.$ === 'Just')) && (_v10.c.$ === 'Just')) {
			var h = _v10.a.a;
			var m = _v10.b.a;
			var s = _v10.c.a;
			return $elm$core$Maybe$Just(((3600 * h) + (60 * m)) + s);
		} else {
			return $elm$core$Maybe$Nothing;
		}
	}
};
var $elm$svg$Svg$Attributes$d = _VirtualDom_attribute('d');
var $elm$svg$Svg$Attributes$fill = _VirtualDom_attribute('fill');
var $icidasset$elm_material_icons$Material$Icons$Internal$f = $elm$svg$Svg$Attributes$fill;
var $elm$svg$Svg$trustedNode = _VirtualDom_nodeNS('http://www.w3.org/2000/svg');
var $elm$svg$Svg$g = $elm$svg$Svg$trustedNode('g');
var $elm$svg$Svg$Attributes$height = _VirtualDom_attribute('height');
var $elm$svg$Svg$svg = $elm$svg$Svg$trustedNode('svg');
var $elm$core$String$concat = function (strings) {
	return A2($elm$core$String$join, '', strings);
};
var $elm$core$String$fromFloat = _String_fromNumber;
var $elm$core$Basics$round = _Basics_round;
var $avh4$elm_color$Color$toCssString = function (_v0) {
	var r = _v0.a;
	var g = _v0.b;
	var b = _v0.c;
	var a = _v0.d;
	var roundTo = function (x) {
		return $elm$core$Basics$round(x * 1000) / 1000;
	};
	var pct = function (x) {
		return $elm$core$Basics$round(x * 10000) / 100;
	};
	return $elm$core$String$concat(
		_List_fromArray(
			[
				'rgba(',
				$elm$core$String$fromFloat(
				pct(r)),
				'%,',
				$elm$core$String$fromFloat(
				pct(g)),
				'%,',
				$elm$core$String$fromFloat(
				pct(b)),
				'%,',
				$elm$core$String$fromFloat(
				roundTo(a)),
				')'
			]));
};
var $elm$svg$Svg$Attributes$width = _VirtualDom_attribute('width');
var $icidasset$elm_material_icons$Material$Icons$Internal$icon = F4(
	function (attributes, nodes, size, coloring) {
		var sizeAsString = $elm$core$String$fromInt(size);
		return A2(
			$elm$svg$Svg$svg,
			_Utils_ap(
				attributes,
				_List_fromArray(
					[
						$elm$svg$Svg$Attributes$height(sizeAsString),
						$elm$svg$Svg$Attributes$width(sizeAsString)
					])),
			_List_fromArray(
				[
					A2(
					$elm$svg$Svg$g,
					_List_fromArray(
						[
							function () {
							if (coloring.$ === 'Color') {
								var color = coloring.a;
								return $elm$svg$Svg$Attributes$fill(
									$avh4$elm_color$Color$toCssString(color));
							} else {
								return $elm$svg$Svg$Attributes$fill('currentColor');
							}
						}()
						]),
					nodes)
				]));
	});
var $elm$svg$Svg$path = $elm$svg$Svg$trustedNode('path');
var $icidasset$elm_material_icons$Material$Icons$Internal$p = $elm$svg$Svg$path;
var $elm$svg$Svg$Attributes$viewBox = _VirtualDom_attribute('viewBox');
var $icidasset$elm_material_icons$Material$Icons$Internal$v = $elm$svg$Svg$Attributes$viewBox;
var $icidasset$elm_material_icons$Material$Icons$play_arrow = A2(
	$icidasset$elm_material_icons$Material$Icons$Internal$icon,
	_List_fromArray(
		[
			$icidasset$elm_material_icons$Material$Icons$Internal$v('0 0 24 24')
		]),
	_List_fromArray(
		[
			A2(
			$icidasset$elm_material_icons$Material$Icons$Internal$p,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$d('M0 0h24v24H0z'),
					$icidasset$elm_material_icons$Material$Icons$Internal$f('none')
				]),
			_List_Nil),
			A2(
			$icidasset$elm_material_icons$Material$Icons$Internal$p,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$d('M8 5v14l11-7z')
				]),
			_List_Nil)
		]));
var $author$project$Video$fromConfig = function (config) {
	var startTime = A2($elm$core$Maybe$andThen, $author$project$Video$parseTime, config.startTime);
	return _Utils_Tuple2(
		{
			animationFrame: 0,
			duration: 0,
			enableMiniatures: config.enableMiniatures,
			hasStarted: false,
			holdingSeek: false,
			holdingVolume: false,
			icon: _Utils_Tuple2(0, $icidasset$elm_material_icons$Material$Icons$play_arrow),
			id: config.id,
			isFullscreen: false,
			loaded: _List_Nil,
			mobile: false,
			muted: false,
			overlayTimer: 0,
			playbackRate: 1,
			playerSize: _Utils_Tuple2(0, 0),
			playing: false,
			position: 0,
			qualities: _List_Nil,
			quality: $elm$core$Maybe$Nothing,
			ready: false,
			screenSize: _Utils_Tuple2(0, 0),
			settings: $elm$core$Maybe$Nothing,
			showMiniature: $elm$core$Maybe$Nothing,
			size: _Utils_Tuple2(0, 0),
			startTime: startTime,
			subtitleTrack: $elm$core$Maybe$Nothing,
			subtitles: _List_Nil,
			url: config.url,
			volume: 1
		},
		$author$project$Video$init(
			{autoplay: config.autoplay, id: config.id, startTime: startTime, url: config.url}));
};
var $elm$json$Json$Decode$string = _Json_decodeString;
var $elm$core$Result$toMaybe = function (result) {
	if (result.$ === 'Ok') {
		var v = result.a;
		return $elm$core$Maybe$Just(v);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $elm$core$Result$withDefault = F2(
	function (def, result) {
		if (result.$ === 'Ok') {
			var a = result.a;
			return a;
		} else {
			return def;
		}
	});
var $author$project$Video$fromValue = function (flags) {
	var url = A2(
		$elm$core$Result$withDefault,
		'manifest.m3u8',
		A2(
			$elm$json$Json$Decode$decodeValue,
			A2($elm$json$Json$Decode$field, 'url', $elm$json$Json$Decode$string),
			flags));
	var startTime = $elm$core$Result$toMaybe(
		A2(
			$elm$json$Json$Decode$decodeValue,
			A2($elm$json$Json$Decode$field, 'startTime', $elm$json$Json$Decode$string),
			flags));
	var id = A2(
		$elm$core$Result$withDefault,
		'polymnyVideo',
		A2(
			$elm$json$Json$Decode$decodeValue,
			A2($elm$json$Json$Decode$field, 'id', $elm$json$Json$Decode$string),
			flags));
	var enableMiniatures = A2(
		$elm$core$Result$withDefault,
		false,
		A2(
			$elm$json$Json$Decode$decodeValue,
			A2($elm$json$Json$Decode$field, 'enableMiniatures', $elm$json$Json$Decode$bool),
			flags));
	var autoplay = A2(
		$elm$core$Result$withDefault,
		false,
		A2(
			$elm$json$Json$Decode$decodeValue,
			A2($elm$json$Json$Decode$field, 'autoplay', $elm$json$Json$Decode$bool),
			flags));
	return $author$project$Video$fromConfig(
		{autoplay: autoplay, enableMiniatures: enableMiniatures, id: id, startTime: startTime, url: url});
};
var $mdgriffith$elm_ui$Internal$Model$Colored = F3(
	function (a, b, c) {
		return {$: 'Colored', a: a, b: b, c: c};
	});
var $mdgriffith$elm_ui$Internal$Model$StyleClass = F2(
	function (a, b) {
		return {$: 'StyleClass', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Flag$Flag = function (a) {
	return {$: 'Flag', a: a};
};
var $mdgriffith$elm_ui$Internal$Flag$Second = function (a) {
	return {$: 'Second', a: a};
};
var $elm$core$Bitwise$shiftLeftBy = _Bitwise_shiftLeftBy;
var $mdgriffith$elm_ui$Internal$Flag$flag = function (i) {
	return (i > 31) ? $mdgriffith$elm_ui$Internal$Flag$Second(1 << (i - 32)) : $mdgriffith$elm_ui$Internal$Flag$Flag(1 << i);
};
var $mdgriffith$elm_ui$Internal$Flag$bgColor = $mdgriffith$elm_ui$Internal$Flag$flag(8);
var $mdgriffith$elm_ui$Internal$Model$floatClass = function (x) {
	return $elm$core$String$fromInt(
		$elm$core$Basics$round(x * 255));
};
var $mdgriffith$elm_ui$Internal$Model$formatColorClass = function (_v0) {
	var red = _v0.a;
	var green = _v0.b;
	var blue = _v0.c;
	var alpha = _v0.d;
	return $mdgriffith$elm_ui$Internal$Model$floatClass(red) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(green) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(blue) + ('-' + $mdgriffith$elm_ui$Internal$Model$floatClass(alpha))))));
};
var $mdgriffith$elm_ui$Element$Background$color = function (clr) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$bgColor,
		A3(
			$mdgriffith$elm_ui$Internal$Model$Colored,
			'bg-' + $mdgriffith$elm_ui$Internal$Model$formatColorClass(clr),
			'background-color',
			clr));
};
var $mdgriffith$elm_ui$Internal$Model$Unkeyed = function (a) {
	return {$: 'Unkeyed', a: a};
};
var $mdgriffith$elm_ui$Internal$Model$AsEl = {$: 'AsEl'};
var $mdgriffith$elm_ui$Internal$Model$asEl = $mdgriffith$elm_ui$Internal$Model$AsEl;
var $mdgriffith$elm_ui$Internal$Model$Generic = {$: 'Generic'};
var $mdgriffith$elm_ui$Internal$Model$div = $mdgriffith$elm_ui$Internal$Model$Generic;
var $mdgriffith$elm_ui$Internal$Model$NoNearbyChildren = {$: 'NoNearbyChildren'};
var $mdgriffith$elm_ui$Internal$Style$classes = {above: 'a', active: 'atv', alignBottom: 'ab', alignCenterX: 'cx', alignCenterY: 'cy', alignContainerBottom: 'acb', alignContainerCenterX: 'accx', alignContainerCenterY: 'accy', alignContainerRight: 'acr', alignLeft: 'al', alignRight: 'ar', alignTop: 'at', alignedHorizontally: 'ah', alignedVertically: 'av', any: 's', behind: 'bh', below: 'b', bold: 'w7', borderDashed: 'bd', borderDotted: 'bdt', borderNone: 'bn', borderSolid: 'bs', capturePointerEvents: 'cpe', clip: 'cp', clipX: 'cpx', clipY: 'cpy', column: 'c', container: 'ctr', contentBottom: 'cb', contentCenterX: 'ccx', contentCenterY: 'ccy', contentLeft: 'cl', contentRight: 'cr', contentTop: 'ct', cursorPointer: 'cptr', cursorText: 'ctxt', focus: 'fcs', focusedWithin: 'focus-within', fullSize: 'fs', grid: 'g', hasBehind: 'hbh', heightContent: 'hc', heightExact: 'he', heightFill: 'hf', heightFillPortion: 'hfp', hover: 'hv', imageContainer: 'ic', inFront: 'fr', inputLabel: 'lbl', inputMultiline: 'iml', inputMultilineFiller: 'imlf', inputMultilineParent: 'imlp', inputMultilineWrapper: 'implw', inputText: 'it', italic: 'i', link: 'lnk', nearby: 'nb', noTextSelection: 'notxt', onLeft: 'ol', onRight: 'or', opaque: 'oq', overflowHidden: 'oh', page: 'pg', paragraph: 'p', passPointerEvents: 'ppe', root: 'ui', row: 'r', scrollbars: 'sb', scrollbarsX: 'sbx', scrollbarsY: 'sby', seButton: 'sbt', single: 'e', sizeByCapital: 'cap', spaceEvenly: 'sev', strike: 'sk', text: 't', textCenter: 'tc', textExtraBold: 'w8', textExtraLight: 'w2', textHeavy: 'w9', textJustify: 'tj', textJustifyAll: 'tja', textLeft: 'tl', textLight: 'w3', textMedium: 'w5', textNormalWeight: 'w4', textRight: 'tr', textSemiBold: 'w6', textThin: 'w1', textUnitalicized: 'tun', transition: 'ts', transparent: 'clr', underline: 'u', widthContent: 'wc', widthExact: 'we', widthFill: 'wf', widthFillPortion: 'wfp', wrapped: 'wrp'};
var $mdgriffith$elm_ui$Internal$Model$columnClass = $mdgriffith$elm_ui$Internal$Style$classes.any + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.column);
var $mdgriffith$elm_ui$Internal$Model$gridClass = $mdgriffith$elm_ui$Internal$Style$classes.any + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.grid);
var $mdgriffith$elm_ui$Internal$Model$pageClass = $mdgriffith$elm_ui$Internal$Style$classes.any + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.page);
var $mdgriffith$elm_ui$Internal$Model$paragraphClass = $mdgriffith$elm_ui$Internal$Style$classes.any + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.paragraph);
var $mdgriffith$elm_ui$Internal$Model$rowClass = $mdgriffith$elm_ui$Internal$Style$classes.any + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.row);
var $mdgriffith$elm_ui$Internal$Model$singleClass = $mdgriffith$elm_ui$Internal$Style$classes.any + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.single);
var $mdgriffith$elm_ui$Internal$Model$contextClasses = function (context) {
	switch (context.$) {
		case 'AsRow':
			return $mdgriffith$elm_ui$Internal$Model$rowClass;
		case 'AsColumn':
			return $mdgriffith$elm_ui$Internal$Model$columnClass;
		case 'AsEl':
			return $mdgriffith$elm_ui$Internal$Model$singleClass;
		case 'AsGrid':
			return $mdgriffith$elm_ui$Internal$Model$gridClass;
		case 'AsParagraph':
			return $mdgriffith$elm_ui$Internal$Model$paragraphClass;
		default:
			return $mdgriffith$elm_ui$Internal$Model$pageClass;
	}
};
var $mdgriffith$elm_ui$Internal$Model$Keyed = function (a) {
	return {$: 'Keyed', a: a};
};
var $mdgriffith$elm_ui$Internal$Model$NoStyleSheet = {$: 'NoStyleSheet'};
var $mdgriffith$elm_ui$Internal$Model$Styled = function (a) {
	return {$: 'Styled', a: a};
};
var $mdgriffith$elm_ui$Internal$Model$Unstyled = function (a) {
	return {$: 'Unstyled', a: a};
};
var $mdgriffith$elm_ui$Internal$Model$addChildren = F2(
	function (existing, nearbyChildren) {
		switch (nearbyChildren.$) {
			case 'NoNearbyChildren':
				return existing;
			case 'ChildrenBehind':
				var behind = nearbyChildren.a;
				return _Utils_ap(behind, existing);
			case 'ChildrenInFront':
				var inFront = nearbyChildren.a;
				return _Utils_ap(existing, inFront);
			default:
				var behind = nearbyChildren.a;
				var inFront = nearbyChildren.b;
				return _Utils_ap(
					behind,
					_Utils_ap(existing, inFront));
		}
	});
var $mdgriffith$elm_ui$Internal$Model$addKeyedChildren = F3(
	function (key, existing, nearbyChildren) {
		switch (nearbyChildren.$) {
			case 'NoNearbyChildren':
				return existing;
			case 'ChildrenBehind':
				var behind = nearbyChildren.a;
				return _Utils_ap(
					A2(
						$elm$core$List$map,
						function (x) {
							return _Utils_Tuple2(key, x);
						},
						behind),
					existing);
			case 'ChildrenInFront':
				var inFront = nearbyChildren.a;
				return _Utils_ap(
					existing,
					A2(
						$elm$core$List$map,
						function (x) {
							return _Utils_Tuple2(key, x);
						},
						inFront));
			default:
				var behind = nearbyChildren.a;
				var inFront = nearbyChildren.b;
				return _Utils_ap(
					A2(
						$elm$core$List$map,
						function (x) {
							return _Utils_Tuple2(key, x);
						},
						behind),
					_Utils_ap(
						existing,
						A2(
							$elm$core$List$map,
							function (x) {
								return _Utils_Tuple2(key, x);
							},
							inFront)));
		}
	});
var $mdgriffith$elm_ui$Internal$Model$AsParagraph = {$: 'AsParagraph'};
var $mdgriffith$elm_ui$Internal$Model$asParagraph = $mdgriffith$elm_ui$Internal$Model$AsParagraph;
var $mdgriffith$elm_ui$Internal$Flag$alignBottom = $mdgriffith$elm_ui$Internal$Flag$flag(41);
var $mdgriffith$elm_ui$Internal$Flag$alignRight = $mdgriffith$elm_ui$Internal$Flag$flag(40);
var $mdgriffith$elm_ui$Internal$Flag$centerX = $mdgriffith$elm_ui$Internal$Flag$flag(42);
var $mdgriffith$elm_ui$Internal$Flag$centerY = $mdgriffith$elm_ui$Internal$Flag$flag(43);
var $elm$html$Html$Attributes$stringProperty = F2(
	function (key, string) {
		return A2(
			_VirtualDom_property,
			key,
			$elm$json$Json$Encode$string(string));
	});
var $elm$html$Html$Attributes$class = $elm$html$Html$Attributes$stringProperty('className');
var $elm$html$Html$div = _VirtualDom_node('div');
var $elm$core$Set$Set_elm_builtin = function (a) {
	return {$: 'Set_elm_builtin', a: a};
};
var $elm$core$Dict$RBEmpty_elm_builtin = {$: 'RBEmpty_elm_builtin'};
var $elm$core$Dict$empty = $elm$core$Dict$RBEmpty_elm_builtin;
var $elm$core$Set$empty = $elm$core$Set$Set_elm_builtin($elm$core$Dict$empty);
var $mdgriffith$elm_ui$Internal$Model$lengthClassName = function (x) {
	switch (x.$) {
		case 'Px':
			var px = x.a;
			return $elm$core$String$fromInt(px) + 'px';
		case 'Content':
			return 'auto';
		case 'Fill':
			var i = x.a;
			return $elm$core$String$fromInt(i) + 'fr';
		case 'Min':
			var min = x.a;
			var len = x.b;
			return 'min' + ($elm$core$String$fromInt(min) + $mdgriffith$elm_ui$Internal$Model$lengthClassName(len));
		default:
			var max = x.a;
			var len = x.b;
			return 'max' + ($elm$core$String$fromInt(max) + $mdgriffith$elm_ui$Internal$Model$lengthClassName(len));
	}
};
var $elm$core$Tuple$second = function (_v0) {
	var y = _v0.b;
	return y;
};
var $mdgriffith$elm_ui$Internal$Model$transformClass = function (transform) {
	switch (transform.$) {
		case 'Untransformed':
			return $elm$core$Maybe$Nothing;
		case 'Moved':
			var _v1 = transform.a;
			var x = _v1.a;
			var y = _v1.b;
			var z = _v1.c;
			return $elm$core$Maybe$Just(
				'mv-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(x) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(y) + ('-' + $mdgriffith$elm_ui$Internal$Model$floatClass(z))))));
		default:
			var _v2 = transform.a;
			var tx = _v2.a;
			var ty = _v2.b;
			var tz = _v2.c;
			var _v3 = transform.b;
			var sx = _v3.a;
			var sy = _v3.b;
			var sz = _v3.c;
			var _v4 = transform.c;
			var ox = _v4.a;
			var oy = _v4.b;
			var oz = _v4.c;
			var angle = transform.d;
			return $elm$core$Maybe$Just(
				'tfrm-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(tx) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(ty) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(tz) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(sx) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(sy) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(sz) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(ox) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(oy) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(oz) + ('-' + $mdgriffith$elm_ui$Internal$Model$floatClass(angle))))))))))))))))))));
	}
};
var $elm$core$Maybe$withDefault = F2(
	function (_default, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return value;
		} else {
			return _default;
		}
	});
var $mdgriffith$elm_ui$Internal$Model$getStyleName = function (style) {
	switch (style.$) {
		case 'Shadows':
			var name = style.a;
			return name;
		case 'Transparency':
			var name = style.a;
			var o = style.b;
			return name;
		case 'Style':
			var _class = style.a;
			return _class;
		case 'FontFamily':
			var name = style.a;
			return name;
		case 'FontSize':
			var i = style.a;
			return 'font-size-' + $elm$core$String$fromInt(i);
		case 'Single':
			var _class = style.a;
			return _class;
		case 'Colored':
			var _class = style.a;
			return _class;
		case 'SpacingStyle':
			var cls = style.a;
			var x = style.b;
			var y = style.c;
			return cls;
		case 'PaddingStyle':
			var cls = style.a;
			var top = style.b;
			var right = style.c;
			var bottom = style.d;
			var left = style.e;
			return cls;
		case 'BorderWidth':
			var cls = style.a;
			var top = style.b;
			var right = style.c;
			var bottom = style.d;
			var left = style.e;
			return cls;
		case 'GridTemplateStyle':
			var template = style.a;
			return 'grid-rows-' + (A2(
				$elm$core$String$join,
				'-',
				A2($elm$core$List$map, $mdgriffith$elm_ui$Internal$Model$lengthClassName, template.rows)) + ('-cols-' + (A2(
				$elm$core$String$join,
				'-',
				A2($elm$core$List$map, $mdgriffith$elm_ui$Internal$Model$lengthClassName, template.columns)) + ('-space-x-' + ($mdgriffith$elm_ui$Internal$Model$lengthClassName(template.spacing.a) + ('-space-y-' + $mdgriffith$elm_ui$Internal$Model$lengthClassName(template.spacing.b)))))));
		case 'GridPosition':
			var pos = style.a;
			return 'gp grid-pos-' + ($elm$core$String$fromInt(pos.row) + ('-' + ($elm$core$String$fromInt(pos.col) + ('-' + ($elm$core$String$fromInt(pos.width) + ('-' + $elm$core$String$fromInt(pos.height)))))));
		case 'PseudoSelector':
			var selector = style.a;
			var subStyle = style.b;
			var name = function () {
				switch (selector.$) {
					case 'Focus':
						return 'fs';
					case 'Hover':
						return 'hv';
					default:
						return 'act';
				}
			}();
			return A2(
				$elm$core$String$join,
				' ',
				A2(
					$elm$core$List$map,
					function (sty) {
						var _v1 = $mdgriffith$elm_ui$Internal$Model$getStyleName(sty);
						if (_v1 === '') {
							return '';
						} else {
							var styleName = _v1;
							return styleName + ('-' + name);
						}
					},
					subStyle));
		default:
			var x = style.a;
			return A2(
				$elm$core$Maybe$withDefault,
				'',
				$mdgriffith$elm_ui$Internal$Model$transformClass(x));
	}
};
var $elm$core$Dict$Black = {$: 'Black'};
var $elm$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {$: 'RBNode_elm_builtin', a: a, b: b, c: c, d: d, e: e};
	});
var $elm$core$Dict$Red = {$: 'Red'};
var $elm$core$Dict$balance = F5(
	function (color, key, value, left, right) {
		if ((right.$ === 'RBNode_elm_builtin') && (right.a.$ === 'Red')) {
			var _v1 = right.a;
			var rK = right.b;
			var rV = right.c;
			var rLeft = right.d;
			var rRight = right.e;
			if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) {
				var _v3 = left.a;
				var lK = left.b;
				var lV = left.c;
				var lLeft = left.d;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Red,
					key,
					value,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					rK,
					rV,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, left, rLeft),
					rRight);
			}
		} else {
			if ((((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) && (left.d.$ === 'RBNode_elm_builtin')) && (left.d.a.$ === 'Red')) {
				var _v5 = left.a;
				var lK = left.b;
				var lV = left.c;
				var _v6 = left.d;
				var _v7 = _v6.a;
				var llK = _v6.b;
				var llV = _v6.c;
				var llLeft = _v6.d;
				var llRight = _v6.e;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Red,
					lK,
					lV,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, llK, llV, llLeft, llRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, key, value, lRight, right));
			} else {
				return A5($elm$core$Dict$RBNode_elm_builtin, color, key, value, left, right);
			}
		}
	});
var $elm$core$Basics$compare = _Utils_compare;
var $elm$core$Dict$insertHelp = F3(
	function (key, value, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, $elm$core$Dict$RBEmpty_elm_builtin, $elm$core$Dict$RBEmpty_elm_builtin);
		} else {
			var nColor = dict.a;
			var nKey = dict.b;
			var nValue = dict.c;
			var nLeft = dict.d;
			var nRight = dict.e;
			var _v1 = A2($elm$core$Basics$compare, key, nKey);
			switch (_v1.$) {
				case 'LT':
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						A3($elm$core$Dict$insertHelp, key, value, nLeft),
						nRight);
				case 'EQ':
					return A5($elm$core$Dict$RBNode_elm_builtin, nColor, nKey, value, nLeft, nRight);
				default:
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						nLeft,
						A3($elm$core$Dict$insertHelp, key, value, nRight));
			}
		}
	});
var $elm$core$Dict$insert = F3(
	function (key, value, dict) {
		var _v0 = A3($elm$core$Dict$insertHelp, key, value, dict);
		if ((_v0.$ === 'RBNode_elm_builtin') && (_v0.a.$ === 'Red')) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $elm$core$Set$insert = F2(
	function (key, _v0) {
		var dict = _v0.a;
		return $elm$core$Set$Set_elm_builtin(
			A3($elm$core$Dict$insert, key, _Utils_Tuple0, dict));
	});
var $elm$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return $elm$core$Maybe$Nothing;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var _v1 = A2($elm$core$Basics$compare, targetKey, key);
				switch (_v1.$) {
					case 'LT':
						var $temp$targetKey = targetKey,
							$temp$dict = left;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
					case 'EQ':
						return $elm$core$Maybe$Just(value);
					default:
						var $temp$targetKey = targetKey,
							$temp$dict = right;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
				}
			}
		}
	});
var $elm$core$Dict$member = F2(
	function (key, dict) {
		var _v0 = A2($elm$core$Dict$get, key, dict);
		if (_v0.$ === 'Just') {
			return true;
		} else {
			return false;
		}
	});
var $elm$core$Set$member = F2(
	function (key, _v0) {
		var dict = _v0.a;
		return A2($elm$core$Dict$member, key, dict);
	});
var $mdgriffith$elm_ui$Internal$Model$reduceStyles = F2(
	function (style, nevermind) {
		var cache = nevermind.a;
		var existing = nevermind.b;
		var styleName = $mdgriffith$elm_ui$Internal$Model$getStyleName(style);
		return A2($elm$core$Set$member, styleName, cache) ? nevermind : _Utils_Tuple2(
			A2($elm$core$Set$insert, styleName, cache),
			A2($elm$core$List$cons, style, existing));
	});
var $mdgriffith$elm_ui$Internal$Model$Property = F2(
	function (a, b) {
		return {$: 'Property', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Model$Style = F2(
	function (a, b) {
		return {$: 'Style', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Style$dot = function (c) {
	return '.' + c;
};
var $elm$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _v0 = f(mx);
		if (_v0.$ === 'Just') {
			var x = _v0.a;
			return A2($elm$core$List$cons, x, xs);
		} else {
			return xs;
		}
	});
var $elm$core$List$filterMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			$elm$core$List$maybeCons(f),
			_List_Nil,
			xs);
	});
var $mdgriffith$elm_ui$Internal$Model$formatColor = function (_v0) {
	var red = _v0.a;
	var green = _v0.b;
	var blue = _v0.c;
	var alpha = _v0.d;
	return 'rgba(' + ($elm$core$String$fromInt(
		$elm$core$Basics$round(red * 255)) + ((',' + $elm$core$String$fromInt(
		$elm$core$Basics$round(green * 255))) + ((',' + $elm$core$String$fromInt(
		$elm$core$Basics$round(blue * 255))) + (',' + ($elm$core$String$fromFloat(alpha) + ')')))));
};
var $mdgriffith$elm_ui$Internal$Model$formatBoxShadow = function (shadow) {
	return A2(
		$elm$core$String$join,
		' ',
		A2(
			$elm$core$List$filterMap,
			$elm$core$Basics$identity,
			_List_fromArray(
				[
					shadow.inset ? $elm$core$Maybe$Just('inset') : $elm$core$Maybe$Nothing,
					$elm$core$Maybe$Just(
					$elm$core$String$fromFloat(shadow.offset.a) + 'px'),
					$elm$core$Maybe$Just(
					$elm$core$String$fromFloat(shadow.offset.b) + 'px'),
					$elm$core$Maybe$Just(
					$elm$core$String$fromFloat(shadow.blur) + 'px'),
					$elm$core$Maybe$Just(
					$elm$core$String$fromFloat(shadow.size) + 'px'),
					$elm$core$Maybe$Just(
					$mdgriffith$elm_ui$Internal$Model$formatColor(shadow.color))
				])));
};
var $elm$core$Maybe$map = F2(
	function (f, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return $elm$core$Maybe$Just(
				f(value));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $elm$core$Tuple$mapFirst = F2(
	function (func, _v0) {
		var x = _v0.a;
		var y = _v0.b;
		return _Utils_Tuple2(
			func(x),
			y);
	});
var $elm$core$Tuple$mapSecond = F2(
	function (func, _v0) {
		var x = _v0.a;
		var y = _v0.b;
		return _Utils_Tuple2(
			x,
			func(y));
	});
var $mdgriffith$elm_ui$Internal$Model$renderFocusStyle = function (focus) {
	return _List_fromArray(
		[
			A2(
			$mdgriffith$elm_ui$Internal$Model$Style,
			$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.focusedWithin) + ':focus-within',
			A2(
				$elm$core$List$filterMap,
				$elm$core$Basics$identity,
				_List_fromArray(
					[
						A2(
						$elm$core$Maybe$map,
						function (color) {
							return A2(
								$mdgriffith$elm_ui$Internal$Model$Property,
								'border-color',
								$mdgriffith$elm_ui$Internal$Model$formatColor(color));
						},
						focus.borderColor),
						A2(
						$elm$core$Maybe$map,
						function (color) {
							return A2(
								$mdgriffith$elm_ui$Internal$Model$Property,
								'background-color',
								$mdgriffith$elm_ui$Internal$Model$formatColor(color));
						},
						focus.backgroundColor),
						A2(
						$elm$core$Maybe$map,
						function (shadow) {
							return A2(
								$mdgriffith$elm_ui$Internal$Model$Property,
								'box-shadow',
								$mdgriffith$elm_ui$Internal$Model$formatBoxShadow(
									{
										blur: shadow.blur,
										color: shadow.color,
										inset: false,
										offset: A2(
											$elm$core$Tuple$mapSecond,
											$elm$core$Basics$toFloat,
											A2($elm$core$Tuple$mapFirst, $elm$core$Basics$toFloat, shadow.offset)),
										size: shadow.size
									}));
						},
						focus.shadow),
						$elm$core$Maybe$Just(
						A2($mdgriffith$elm_ui$Internal$Model$Property, 'outline', 'none'))
					]))),
			A2(
			$mdgriffith$elm_ui$Internal$Model$Style,
			($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any) + ':focus .focusable, ') + (($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any) + '.focusable:focus, ') + ('.ui-slide-bar:focus + ' + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any) + ' .focusable-thumb'))),
			A2(
				$elm$core$List$filterMap,
				$elm$core$Basics$identity,
				_List_fromArray(
					[
						A2(
						$elm$core$Maybe$map,
						function (color) {
							return A2(
								$mdgriffith$elm_ui$Internal$Model$Property,
								'border-color',
								$mdgriffith$elm_ui$Internal$Model$formatColor(color));
						},
						focus.borderColor),
						A2(
						$elm$core$Maybe$map,
						function (color) {
							return A2(
								$mdgriffith$elm_ui$Internal$Model$Property,
								'background-color',
								$mdgriffith$elm_ui$Internal$Model$formatColor(color));
						},
						focus.backgroundColor),
						A2(
						$elm$core$Maybe$map,
						function (shadow) {
							return A2(
								$mdgriffith$elm_ui$Internal$Model$Property,
								'box-shadow',
								$mdgriffith$elm_ui$Internal$Model$formatBoxShadow(
									{
										blur: shadow.blur,
										color: shadow.color,
										inset: false,
										offset: A2(
											$elm$core$Tuple$mapSecond,
											$elm$core$Basics$toFloat,
											A2($elm$core$Tuple$mapFirst, $elm$core$Basics$toFloat, shadow.offset)),
										size: shadow.size
									}));
						},
						focus.shadow),
						$elm$core$Maybe$Just(
						A2($mdgriffith$elm_ui$Internal$Model$Property, 'outline', 'none'))
					])))
		]);
};
var $elm$virtual_dom$VirtualDom$node = function (tag) {
	return _VirtualDom_node(
		_VirtualDom_noScript(tag));
};
var $elm$virtual_dom$VirtualDom$property = F2(
	function (key, value) {
		return A2(
			_VirtualDom_property,
			_VirtualDom_noInnerHtmlOrFormAction(key),
			_VirtualDom_noJavaScriptOrHtmlUri(value));
	});
var $mdgriffith$elm_ui$Internal$Style$AllChildren = F2(
	function (a, b) {
		return {$: 'AllChildren', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Style$Batch = function (a) {
	return {$: 'Batch', a: a};
};
var $mdgriffith$elm_ui$Internal$Style$Child = F2(
	function (a, b) {
		return {$: 'Child', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Style$Class = F2(
	function (a, b) {
		return {$: 'Class', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Style$Descriptor = F2(
	function (a, b) {
		return {$: 'Descriptor', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Style$Left = {$: 'Left'};
var $mdgriffith$elm_ui$Internal$Style$Prop = F2(
	function (a, b) {
		return {$: 'Prop', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Style$Right = {$: 'Right'};
var $mdgriffith$elm_ui$Internal$Style$Self = function (a) {
	return {$: 'Self', a: a};
};
var $mdgriffith$elm_ui$Internal$Style$Supports = F2(
	function (a, b) {
		return {$: 'Supports', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Style$Content = function (a) {
	return {$: 'Content', a: a};
};
var $mdgriffith$elm_ui$Internal$Style$Bottom = {$: 'Bottom'};
var $mdgriffith$elm_ui$Internal$Style$CenterX = {$: 'CenterX'};
var $mdgriffith$elm_ui$Internal$Style$CenterY = {$: 'CenterY'};
var $mdgriffith$elm_ui$Internal$Style$Top = {$: 'Top'};
var $mdgriffith$elm_ui$Internal$Style$alignments = _List_fromArray(
	[$mdgriffith$elm_ui$Internal$Style$Top, $mdgriffith$elm_ui$Internal$Style$Bottom, $mdgriffith$elm_ui$Internal$Style$Right, $mdgriffith$elm_ui$Internal$Style$Left, $mdgriffith$elm_ui$Internal$Style$CenterX, $mdgriffith$elm_ui$Internal$Style$CenterY]);
var $elm$core$List$append = F2(
	function (xs, ys) {
		if (!ys.b) {
			return xs;
		} else {
			return A3($elm$core$List$foldr, $elm$core$List$cons, ys, xs);
		}
	});
var $elm$core$List$concat = function (lists) {
	return A3($elm$core$List$foldr, $elm$core$List$append, _List_Nil, lists);
};
var $elm$core$List$concatMap = F2(
	function (f, list) {
		return $elm$core$List$concat(
			A2($elm$core$List$map, f, list));
	});
var $mdgriffith$elm_ui$Internal$Style$contentName = function (desc) {
	switch (desc.a.$) {
		case 'Top':
			var _v1 = desc.a;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.contentTop);
		case 'Bottom':
			var _v2 = desc.a;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.contentBottom);
		case 'Right':
			var _v3 = desc.a;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.contentRight);
		case 'Left':
			var _v4 = desc.a;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.contentLeft);
		case 'CenterX':
			var _v5 = desc.a;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.contentCenterX);
		default:
			var _v6 = desc.a;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.contentCenterY);
	}
};
var $mdgriffith$elm_ui$Internal$Style$selfName = function (desc) {
	switch (desc.a.$) {
		case 'Top':
			var _v1 = desc.a;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.alignTop);
		case 'Bottom':
			var _v2 = desc.a;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.alignBottom);
		case 'Right':
			var _v3 = desc.a;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.alignRight);
		case 'Left':
			var _v4 = desc.a;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.alignLeft);
		case 'CenterX':
			var _v5 = desc.a;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.alignCenterX);
		default:
			var _v6 = desc.a;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.alignCenterY);
	}
};
var $mdgriffith$elm_ui$Internal$Style$describeAlignment = function (values) {
	var createDescription = function (alignment) {
		var _v0 = values(alignment);
		var content = _v0.a;
		var indiv = _v0.b;
		return _List_fromArray(
			[
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$contentName(
					$mdgriffith$elm_ui$Internal$Style$Content(alignment)),
				content),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Child,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$selfName(
							$mdgriffith$elm_ui$Internal$Style$Self(alignment)),
						indiv)
					]))
			]);
	};
	return $mdgriffith$elm_ui$Internal$Style$Batch(
		A2($elm$core$List$concatMap, createDescription, $mdgriffith$elm_ui$Internal$Style$alignments));
};
var $mdgriffith$elm_ui$Internal$Style$elDescription = _List_fromArray(
	[
		A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex'),
		A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-direction', 'column'),
		A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'pre'),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Descriptor,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.hasBehind),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '0'),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Child,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.behind),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '-1')
					]))
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Descriptor,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.seButton),
		_List_fromArray(
			[
				A2(
				$mdgriffith$elm_ui$Internal$Style$Child,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.text),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.heightFill),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthFill),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'auto !important')
							]))
					]))
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Child,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.heightContent),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', 'auto')
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Child,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.heightFill),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '100000')
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Child,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthFill),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%')
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Child,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthFillPortion),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%')
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Child,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthContent),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-start')
			])),
		$mdgriffith$elm_ui$Internal$Style$describeAlignment(
		function (alignment) {
			switch (alignment.$) {
				case 'Top':
					return _Utils_Tuple2(
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-start')
							]),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', 'auto !important'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', '0 !important')
							]));
				case 'Bottom':
					return _Utils_Tuple2(
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-end')
							]),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', 'auto !important'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', '0 !important')
							]));
				case 'Right':
					return _Utils_Tuple2(
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-end')
							]),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-end')
							]));
				case 'Left':
					return _Utils_Tuple2(
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-start')
							]),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-start')
							]));
				case 'CenterX':
					return _Utils_Tuple2(
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'center')
							]),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'center')
							]));
				default:
					return _Utils_Tuple2(
						_List_fromArray(
							[
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', 'auto'),
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', 'auto')
									]))
							]),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', 'auto !important'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', 'auto !important')
							]));
			}
		})
	]);
var $mdgriffith$elm_ui$Internal$Style$gridAlignments = function (values) {
	var createDescription = function (alignment) {
		return _List_fromArray(
			[
				A2(
				$mdgriffith$elm_ui$Internal$Style$Child,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$selfName(
							$mdgriffith$elm_ui$Internal$Style$Self(alignment)),
						values(alignment))
					]))
			]);
	};
	return $mdgriffith$elm_ui$Internal$Style$Batch(
		A2($elm$core$List$concatMap, createDescription, $mdgriffith$elm_ui$Internal$Style$alignments));
};
var $mdgriffith$elm_ui$Internal$Style$Above = {$: 'Above'};
var $mdgriffith$elm_ui$Internal$Style$Behind = {$: 'Behind'};
var $mdgriffith$elm_ui$Internal$Style$Below = {$: 'Below'};
var $mdgriffith$elm_ui$Internal$Style$OnLeft = {$: 'OnLeft'};
var $mdgriffith$elm_ui$Internal$Style$OnRight = {$: 'OnRight'};
var $mdgriffith$elm_ui$Internal$Style$Within = {$: 'Within'};
var $mdgriffith$elm_ui$Internal$Style$locations = function () {
	var loc = $mdgriffith$elm_ui$Internal$Style$Above;
	var _v0 = function () {
		switch (loc.$) {
			case 'Above':
				return _Utils_Tuple0;
			case 'Below':
				return _Utils_Tuple0;
			case 'OnRight':
				return _Utils_Tuple0;
			case 'OnLeft':
				return _Utils_Tuple0;
			case 'Within':
				return _Utils_Tuple0;
			default:
				return _Utils_Tuple0;
		}
	}();
	return _List_fromArray(
		[$mdgriffith$elm_ui$Internal$Style$Above, $mdgriffith$elm_ui$Internal$Style$Below, $mdgriffith$elm_ui$Internal$Style$OnRight, $mdgriffith$elm_ui$Internal$Style$OnLeft, $mdgriffith$elm_ui$Internal$Style$Within, $mdgriffith$elm_ui$Internal$Style$Behind]);
}();
var $mdgriffith$elm_ui$Internal$Style$baseSheet = _List_fromArray(
	[
		A2(
		$mdgriffith$elm_ui$Internal$Style$Class,
		'html,body',
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'padding', '0'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0')
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Class,
		_Utils_ap(
			$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any),
			_Utils_ap(
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.single),
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.imageContainer))),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'block'),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.heightFill),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						'img',
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'max-height', '100%'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'object-fit', 'cover')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthFill),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						'img',
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'max-width', '100%'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'object-fit', 'cover')
							]))
					]))
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Class,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any) + ':focus',
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'outline', 'none')
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Class,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.root),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', 'auto'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'min-height', '100%'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '0'),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				_Utils_ap(
					$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any),
					$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.heightFill)),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.heightFill),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Child,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.inFront),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.nearby),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'fixed'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '20')
							]))
					]))
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Class,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.nearby),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'relative'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border', 'none'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-direction', 'row'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto'),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.single),
				$mdgriffith$elm_ui$Internal$Style$elDescription),
				$mdgriffith$elm_ui$Internal$Style$Batch(
				function (fn) {
					return A2($elm$core$List$map, fn, $mdgriffith$elm_ui$Internal$Style$locations);
				}(
					function (loc) {
						switch (loc.$) {
							case 'Above':
								return A2(
									$mdgriffith$elm_ui$Internal$Style$Descriptor,
									$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.above),
									_List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'absolute'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'bottom', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'left', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '20'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important'),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.heightFill),
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', 'auto')
												])),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthFill),
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%')
												])),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none'),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											'*',
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'auto')
												]))
										]));
							case 'Below':
								return A2(
									$mdgriffith$elm_ui$Internal$Style$Descriptor,
									$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.below),
									_List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'absolute'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'bottom', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'left', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '20'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none'),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											'*',
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'auto')
												])),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.heightFill),
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', 'auto')
												]))
										]));
							case 'OnRight':
								return A2(
									$mdgriffith$elm_ui$Internal$Style$Descriptor,
									$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.onRight),
									_List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'absolute'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'left', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'top', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '20'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none'),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											'*',
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'auto')
												]))
										]));
							case 'OnLeft':
								return A2(
									$mdgriffith$elm_ui$Internal$Style$Descriptor,
									$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.onLeft),
									_List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'absolute'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'right', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'top', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '20'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none'),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											'*',
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'auto')
												]))
										]));
							case 'Within':
								return A2(
									$mdgriffith$elm_ui$Internal$Style$Descriptor,
									$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.inFront),
									_List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'absolute'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'left', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'top', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none'),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											'*',
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'auto')
												]))
										]));
							default:
								return A2(
									$mdgriffith$elm_ui$Internal$Style$Descriptor,
									$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.behind),
									_List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'absolute'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'left', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'top', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none'),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											'*',
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'auto')
												]))
										]));
						}
					}))
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Class,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'relative'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border', 'none'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-shrink', '0'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-direction', 'row'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'resize', 'none'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-feature-settings', 'inherit'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'box-sizing', 'border-box'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'padding', '0'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border-width', '0'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border-style', 'solid'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-size', 'inherit'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'color', 'inherit'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-family', 'inherit'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'line-height', '1'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', 'inherit'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration', 'none'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-style', 'inherit'),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.wrapped),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-wrap', 'wrap')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.noTextSelection),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, '-moz-user-select', 'none'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, '-webkit-user-select', 'none'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, '-ms-user-select', 'none'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'user-select', 'none')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cursorPointer),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'cursor', 'pointer')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cursorText),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'cursor', 'text')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.passPointerEvents),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none !important')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.capturePointerEvents),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'auto !important')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.transparent),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '0')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.opaque),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '1')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot(
					_Utils_ap($mdgriffith$elm_ui$Internal$Style$classes.hover, $mdgriffith$elm_ui$Internal$Style$classes.transparent)) + ':hover',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '0')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot(
					_Utils_ap($mdgriffith$elm_ui$Internal$Style$classes.hover, $mdgriffith$elm_ui$Internal$Style$classes.opaque)) + ':hover',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '1')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot(
					_Utils_ap($mdgriffith$elm_ui$Internal$Style$classes.focus, $mdgriffith$elm_ui$Internal$Style$classes.transparent)) + ':focus',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '0')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot(
					_Utils_ap($mdgriffith$elm_ui$Internal$Style$classes.focus, $mdgriffith$elm_ui$Internal$Style$classes.opaque)) + ':focus',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '1')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot(
					_Utils_ap($mdgriffith$elm_ui$Internal$Style$classes.active, $mdgriffith$elm_ui$Internal$Style$classes.transparent)) + ':active',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '0')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot(
					_Utils_ap($mdgriffith$elm_ui$Internal$Style$classes.active, $mdgriffith$elm_ui$Internal$Style$classes.opaque)) + ':active',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '1')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.transition),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Prop,
						'transition',
						A2(
							$elm$core$String$join,
							', ',
							A2(
								$elm$core$List$map,
								function (x) {
									return x + ' 160ms';
								},
								_List_fromArray(
									['transform', 'opacity', 'filter', 'background-color', 'color', 'font-size']))))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.scrollbars),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'overflow', 'auto'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-shrink', '1')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.scrollbarsX),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'overflow-x', 'auto'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.row),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-shrink', '1')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.scrollbarsY),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'overflow-y', 'auto'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.column),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-shrink', '1')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.single),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-shrink', '1')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.clip),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'overflow', 'hidden')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.clipX),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'overflow-x', 'hidden')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.clipY),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'overflow-y', 'hidden')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthContent),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', 'auto')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.borderNone),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border-width', '0')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.borderDashed),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border-style', 'dashed')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.borderDotted),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border-style', 'dotted')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.borderSolid),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border-style', 'solid')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.text),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'pre'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline-block')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.inputText),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'line-height', '1.05'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'background', 'transparent'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-align', 'inherit')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.single),
				$mdgriffith$elm_ui$Internal$Style$elDescription),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.row),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-direction', 'row'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', '0%'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthExact),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.link),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.heightFill),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'stretch !important')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.heightFillPortion),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'stretch !important')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthFill),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '100000')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.container),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'stretch')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						'u:first-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.alignContainerRight,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:first-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterX,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.alignCenterX),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-left', 'auto !important')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:last-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterX,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.alignCenterX),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-right', 'auto !important')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:only-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterX,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.alignCenterY),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', 'auto !important'),
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', 'auto !important')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:last-of-type.' + ($mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterX + ' ~ u'),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						'u:first-of-type.' + ($mdgriffith$elm_ui$Internal$Style$classes.alignContainerRight + (' ~ s.' + $mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterX)),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0')
							])),
						$mdgriffith$elm_ui$Internal$Style$describeAlignment(
						function (alignment) {
							switch (alignment.$) {
								case 'Top':
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-start')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-start')
											]));
								case 'Bottom':
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-end')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-end')
											]));
								case 'Right':
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-end')
											]),
										_List_Nil);
								case 'Left':
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-start')
											]),
										_List_Nil);
								case 'CenterX':
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'center')
											]),
										_List_Nil);
								default:
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'center')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'center')
											]));
							}
						}),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.spaceEvenly),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'space-between')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.inputLabel),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'baseline')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.column),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-direction', 'column'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', '0px'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'min-height', 'min-content'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.heightExact),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.heightFill),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '100000')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthFill),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthFillPortion),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthContent),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-start')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						'u:first-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.alignContainerBottom,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:first-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterY,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.alignCenterY),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', 'auto !important'),
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', '0 !important')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:last-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterY,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.alignCenterY),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', 'auto !important'),
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', '0 !important')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:only-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterY,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.alignCenterY),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', 'auto !important'),
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', 'auto !important')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:last-of-type.' + ($mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterY + ' ~ u'),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						'u:first-of-type.' + ($mdgriffith$elm_ui$Internal$Style$classes.alignContainerBottom + (' ~ s.' + $mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterY)),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0')
							])),
						$mdgriffith$elm_ui$Internal$Style$describeAlignment(
						function (alignment) {
							switch (alignment.$) {
								case 'Top':
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-start')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', 'auto')
											]));
								case 'Bottom':
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-end')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', 'auto')
											]));
								case 'Right':
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-end')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-end')
											]));
								case 'Left':
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-start')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-start')
											]));
								case 'CenterX':
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'center')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'center')
											]));
								default:
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'center')
											]),
										_List_Nil);
							}
						}),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.container),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'stretch !important')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.spaceEvenly),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'space-between')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.grid),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', '-ms-grid'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						'.gp',
						_List_fromArray(
							[
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Supports,
						_Utils_Tuple2('display', 'grid'),
						_List_fromArray(
							[
								_Utils_Tuple2('display', 'grid')
							])),
						$mdgriffith$elm_ui$Internal$Style$gridAlignments(
						function (alignment) {
							switch (alignment.$) {
								case 'Top':
									return _List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-start')
										]);
								case 'Bottom':
									return _List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-end')
										]);
								case 'Right':
									return _List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-end')
										]);
								case 'Left':
									return _List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-start')
										]);
								case 'CenterX':
									return _List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'center')
										]);
								default:
									return _List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'center')
										]);
							}
						})
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.page),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'block'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any + ':first-child'),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot(
							$mdgriffith$elm_ui$Internal$Style$classes.any + ($mdgriffith$elm_ui$Internal$Style$selfName(
								$mdgriffith$elm_ui$Internal$Style$Self($mdgriffith$elm_ui$Internal$Style$Left)) + (':first-child + .' + $mdgriffith$elm_ui$Internal$Style$classes.any))),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot(
							$mdgriffith$elm_ui$Internal$Style$classes.any + ($mdgriffith$elm_ui$Internal$Style$selfName(
								$mdgriffith$elm_ui$Internal$Style$Self($mdgriffith$elm_ui$Internal$Style$Right)) + (':first-child + .' + $mdgriffith$elm_ui$Internal$Style$classes.any))),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important')
							])),
						$mdgriffith$elm_ui$Internal$Style$describeAlignment(
						function (alignment) {
							switch (alignment.$) {
								case 'Top':
									return _Utils_Tuple2(_List_Nil, _List_Nil);
								case 'Bottom':
									return _Utils_Tuple2(_List_Nil, _List_Nil);
								case 'Right':
									return _Utils_Tuple2(
										_List_Nil,
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'float', 'right'),
												A2(
												$mdgriffith$elm_ui$Internal$Style$Descriptor,
												'::after',
												_List_fromArray(
													[
														A2($mdgriffith$elm_ui$Internal$Style$Prop, 'content', '\"\"'),
														A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'table'),
														A2($mdgriffith$elm_ui$Internal$Style$Prop, 'clear', 'both')
													]))
											]));
								case 'Left':
									return _Utils_Tuple2(
										_List_Nil,
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'float', 'left'),
												A2(
												$mdgriffith$elm_ui$Internal$Style$Descriptor,
												'::after',
												_List_fromArray(
													[
														A2($mdgriffith$elm_ui$Internal$Style$Prop, 'content', '\"\"'),
														A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'table'),
														A2($mdgriffith$elm_ui$Internal$Style$Prop, 'clear', 'both')
													]))
											]));
								case 'CenterX':
									return _Utils_Tuple2(_List_Nil, _List_Nil);
								default:
									return _Utils_Tuple2(_List_Nil, _List_Nil);
							}
						})
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.inputMultiline),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'pre-wrap !important'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'background-color', 'transparent')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.inputMultilineWrapper),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.single),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.inputMultilineParent),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'pre-wrap !important'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'cursor', 'text'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.inputMultilineFiller),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'pre-wrap !important'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'color', 'transparent')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.paragraph),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'block'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'normal'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'overflow-wrap', 'break-word'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.hasBehind),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '0'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.behind),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '-1')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$AllChildren,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.text),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'normal')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$AllChildren,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.paragraph),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								'::after',
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'content', 'none')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								'::before',
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'content', 'none')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$AllChildren,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.single),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'normal'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthExact),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline-block')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.inFront),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.behind),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.above),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.below),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.onRight),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.onLeft),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.text),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline'),
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'normal')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.row),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.column),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline-flex')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.grid),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline-grid')
							])),
						$mdgriffith$elm_ui$Internal$Style$describeAlignment(
						function (alignment) {
							switch (alignment.$) {
								case 'Top':
									return _Utils_Tuple2(_List_Nil, _List_Nil);
								case 'Bottom':
									return _Utils_Tuple2(_List_Nil, _List_Nil);
								case 'Right':
									return _Utils_Tuple2(
										_List_Nil,
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'float', 'right')
											]));
								case 'Left':
									return _Utils_Tuple2(
										_List_Nil,
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'float', 'left')
											]));
								case 'CenterX':
									return _Utils_Tuple2(_List_Nil, _List_Nil);
								default:
									return _Utils_Tuple2(_List_Nil, _List_Nil);
							}
						})
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				'.hidden',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'none')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textThin),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '100')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textExtraLight),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '200')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textLight),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '300')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textNormalWeight),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '400')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textMedium),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '500')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textSemiBold),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '600')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bold),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '700')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textExtraBold),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '800')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textHeavy),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '900')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.italic),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-style', 'italic')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.strike),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration', 'line-through')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.underline),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration', 'underline'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration-skip-ink', 'auto'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration-skip', 'ink')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				_Utils_ap(
					$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.underline),
					$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.strike)),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration', 'line-through underline'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration-skip-ink', 'auto'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration-skip', 'ink')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textUnitalicized),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-style', 'normal')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textJustify),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-align', 'justify')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textJustifyAll),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-align', 'justify-all')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textCenter),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-align', 'center')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textRight),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-align', 'right')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textLeft),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-align', 'left')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				'.modal',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'fixed'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'left', '0'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'top', '0'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none')
					]))
			]))
	]);
var $mdgriffith$elm_ui$Internal$Style$fontVariant = function (_var) {
	return _List_fromArray(
		[
			A2(
			$mdgriffith$elm_ui$Internal$Style$Class,
			'.v-' + _var,
			_List_fromArray(
				[
					A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-feature-settings', '\"' + (_var + '\"'))
				])),
			A2(
			$mdgriffith$elm_ui$Internal$Style$Class,
			'.v-' + (_var + '-off'),
			_List_fromArray(
				[
					A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-feature-settings', '\"' + (_var + '\" 0'))
				]))
		]);
};
var $mdgriffith$elm_ui$Internal$Style$commonValues = $elm$core$List$concat(
	_List_fromArray(
		[
			A2(
			$elm$core$List$map,
			function (x) {
				return A2(
					$mdgriffith$elm_ui$Internal$Style$Class,
					'.border-' + $elm$core$String$fromInt(x),
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Internal$Style$Prop,
							'border-width',
							$elm$core$String$fromInt(x) + 'px')
						]));
			},
			A2($elm$core$List$range, 0, 6)),
			A2(
			$elm$core$List$map,
			function (i) {
				return A2(
					$mdgriffith$elm_ui$Internal$Style$Class,
					'.font-size-' + $elm$core$String$fromInt(i),
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Internal$Style$Prop,
							'font-size',
							$elm$core$String$fromInt(i) + 'px')
						]));
			},
			A2($elm$core$List$range, 8, 32)),
			A2(
			$elm$core$List$map,
			function (i) {
				return A2(
					$mdgriffith$elm_ui$Internal$Style$Class,
					'.p-' + $elm$core$String$fromInt(i),
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Internal$Style$Prop,
							'padding',
							$elm$core$String$fromInt(i) + 'px')
						]));
			},
			A2($elm$core$List$range, 0, 24)),
			_List_fromArray(
			[
				A2(
				$mdgriffith$elm_ui$Internal$Style$Class,
				'.v-smcp',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-variant', 'small-caps')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Class,
				'.v-smcp-off',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-variant', 'normal')
					]))
			]),
			$mdgriffith$elm_ui$Internal$Style$fontVariant('zero'),
			$mdgriffith$elm_ui$Internal$Style$fontVariant('onum'),
			$mdgriffith$elm_ui$Internal$Style$fontVariant('liga'),
			$mdgriffith$elm_ui$Internal$Style$fontVariant('dlig'),
			$mdgriffith$elm_ui$Internal$Style$fontVariant('ordn'),
			$mdgriffith$elm_ui$Internal$Style$fontVariant('tnum'),
			$mdgriffith$elm_ui$Internal$Style$fontVariant('afrc'),
			$mdgriffith$elm_ui$Internal$Style$fontVariant('frac')
		]));
var $mdgriffith$elm_ui$Internal$Style$explainer = '\n.explain {\n    border: 6px solid rgb(174, 121, 15) !important;\n}\n.explain > .' + ($mdgriffith$elm_ui$Internal$Style$classes.any + (' {\n    border: 4px dashed rgb(0, 151, 167) !important;\n}\n\n.ctr {\n    border: none !important;\n}\n.explain > .ctr > .' + ($mdgriffith$elm_ui$Internal$Style$classes.any + ' {\n    border: 4px dashed rgb(0, 151, 167) !important;\n}\n\n')));
var $mdgriffith$elm_ui$Internal$Style$inputTextReset = '\ninput[type="search"],\ninput[type="search"]::-webkit-search-decoration,\ninput[type="search"]::-webkit-search-cancel-button,\ninput[type="search"]::-webkit-search-results-button,\ninput[type="search"]::-webkit-search-results-decoration {\n  -webkit-appearance:none;\n}\n';
var $mdgriffith$elm_ui$Internal$Style$sliderReset = '\ninput[type=range] {\n  -webkit-appearance: none; \n  background: transparent;\n  position:absolute;\n  left:0;\n  top:0;\n  z-index:10;\n  width: 100%;\n  outline: dashed 1px;\n  height: 100%;\n  opacity: 0;\n}\n';
var $mdgriffith$elm_ui$Internal$Style$thumbReset = '\ninput[type=range]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    opacity: 0.5;\n    width: 80px;\n    height: 80px;\n    background-color: black;\n    border:none;\n    border-radius: 5px;\n}\ninput[type=range]::-moz-range-thumb {\n    opacity: 0.5;\n    width: 80px;\n    height: 80px;\n    background-color: black;\n    border:none;\n    border-radius: 5px;\n}\ninput[type=range]::-ms-thumb {\n    opacity: 0.5;\n    width: 80px;\n    height: 80px;\n    background-color: black;\n    border:none;\n    border-radius: 5px;\n}\ninput[type=range][orient=vertical]{\n    writing-mode: bt-lr; /* IE */\n    -webkit-appearance: slider-vertical;  /* WebKit */\n}\n';
var $mdgriffith$elm_ui$Internal$Style$trackReset = '\ninput[type=range]::-moz-range-track {\n    background: transparent;\n    cursor: pointer;\n}\ninput[type=range]::-ms-track {\n    background: transparent;\n    cursor: pointer;\n}\ninput[type=range]::-webkit-slider-runnable-track {\n    background: transparent;\n    cursor: pointer;\n}\n';
var $mdgriffith$elm_ui$Internal$Style$overrides = '@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {' + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any) + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.row) + (' > ' + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any) + (' { flex-basis: auto !important; } ' + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any) + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.row) + (' > ' + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any) + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.container) + (' { flex-basis: auto !important; }}' + ($mdgriffith$elm_ui$Internal$Style$inputTextReset + ($mdgriffith$elm_ui$Internal$Style$sliderReset + ($mdgriffith$elm_ui$Internal$Style$trackReset + ($mdgriffith$elm_ui$Internal$Style$thumbReset + $mdgriffith$elm_ui$Internal$Style$explainer)))))))))))))));
var $mdgriffith$elm_ui$Internal$Style$Intermediate = function (a) {
	return {$: 'Intermediate', a: a};
};
var $mdgriffith$elm_ui$Internal$Style$emptyIntermediate = F2(
	function (selector, closing) {
		return $mdgriffith$elm_ui$Internal$Style$Intermediate(
			{closing: closing, others: _List_Nil, props: _List_Nil, selector: selector});
	});
var $mdgriffith$elm_ui$Internal$Style$renderRules = F2(
	function (_v0, rulesToRender) {
		var parent = _v0.a;
		var generateIntermediates = F2(
			function (rule, rendered) {
				switch (rule.$) {
					case 'Prop':
						var name = rule.a;
						var val = rule.b;
						return _Utils_update(
							rendered,
							{
								props: A2(
									$elm$core$List$cons,
									_Utils_Tuple2(name, val),
									rendered.props)
							});
					case 'Supports':
						var _v2 = rule.a;
						var prop = _v2.a;
						var value = _v2.b;
						var props = rule.b;
						return _Utils_update(
							rendered,
							{
								others: A2(
									$elm$core$List$cons,
									$mdgriffith$elm_ui$Internal$Style$Intermediate(
										{closing: '\n}', others: _List_Nil, props: props, selector: '@supports (' + (prop + (':' + (value + (') {' + parent.selector))))}),
									rendered.others)
							});
					case 'Adjacent':
						var selector = rule.a;
						var adjRules = rule.b;
						return _Utils_update(
							rendered,
							{
								others: A2(
									$elm$core$List$cons,
									A2(
										$mdgriffith$elm_ui$Internal$Style$renderRules,
										A2($mdgriffith$elm_ui$Internal$Style$emptyIntermediate, parent.selector + (' + ' + selector), ''),
										adjRules),
									rendered.others)
							});
					case 'Child':
						var child = rule.a;
						var childRules = rule.b;
						return _Utils_update(
							rendered,
							{
								others: A2(
									$elm$core$List$cons,
									A2(
										$mdgriffith$elm_ui$Internal$Style$renderRules,
										A2($mdgriffith$elm_ui$Internal$Style$emptyIntermediate, parent.selector + (' > ' + child), ''),
										childRules),
									rendered.others)
							});
					case 'AllChildren':
						var child = rule.a;
						var childRules = rule.b;
						return _Utils_update(
							rendered,
							{
								others: A2(
									$elm$core$List$cons,
									A2(
										$mdgriffith$elm_ui$Internal$Style$renderRules,
										A2($mdgriffith$elm_ui$Internal$Style$emptyIntermediate, parent.selector + (' ' + child), ''),
										childRules),
									rendered.others)
							});
					case 'Descriptor':
						var descriptor = rule.a;
						var descriptorRules = rule.b;
						return _Utils_update(
							rendered,
							{
								others: A2(
									$elm$core$List$cons,
									A2(
										$mdgriffith$elm_ui$Internal$Style$renderRules,
										A2(
											$mdgriffith$elm_ui$Internal$Style$emptyIntermediate,
											_Utils_ap(parent.selector, descriptor),
											''),
										descriptorRules),
									rendered.others)
							});
					default:
						var batched = rule.a;
						return _Utils_update(
							rendered,
							{
								others: A2(
									$elm$core$List$cons,
									A2(
										$mdgriffith$elm_ui$Internal$Style$renderRules,
										A2($mdgriffith$elm_ui$Internal$Style$emptyIntermediate, parent.selector, ''),
										batched),
									rendered.others)
							});
				}
			});
		return $mdgriffith$elm_ui$Internal$Style$Intermediate(
			A3($elm$core$List$foldr, generateIntermediates, parent, rulesToRender));
	});
var $mdgriffith$elm_ui$Internal$Style$renderCompact = function (styleClasses) {
	var renderValues = function (values) {
		return $elm$core$String$concat(
			A2(
				$elm$core$List$map,
				function (_v3) {
					var x = _v3.a;
					var y = _v3.b;
					return x + (':' + (y + ';'));
				},
				values));
	};
	var renderClass = function (rule) {
		var _v2 = rule.props;
		if (!_v2.b) {
			return '';
		} else {
			return rule.selector + ('{' + (renderValues(rule.props) + (rule.closing + '}')));
		}
	};
	var renderIntermediate = function (_v0) {
		var rule = _v0.a;
		return _Utils_ap(
			renderClass(rule),
			$elm$core$String$concat(
				A2($elm$core$List$map, renderIntermediate, rule.others)));
	};
	return $elm$core$String$concat(
		A2(
			$elm$core$List$map,
			renderIntermediate,
			A3(
				$elm$core$List$foldr,
				F2(
					function (_v1, existing) {
						var name = _v1.a;
						var styleRules = _v1.b;
						return A2(
							$elm$core$List$cons,
							A2(
								$mdgriffith$elm_ui$Internal$Style$renderRules,
								A2($mdgriffith$elm_ui$Internal$Style$emptyIntermediate, name, ''),
								styleRules),
							existing);
					}),
				_List_Nil,
				styleClasses)));
};
var $mdgriffith$elm_ui$Internal$Style$rules = _Utils_ap(
	$mdgriffith$elm_ui$Internal$Style$overrides,
	$mdgriffith$elm_ui$Internal$Style$renderCompact(
		_Utils_ap($mdgriffith$elm_ui$Internal$Style$baseSheet, $mdgriffith$elm_ui$Internal$Style$commonValues)));
var $elm$virtual_dom$VirtualDom$text = _VirtualDom_text;
var $mdgriffith$elm_ui$Internal$Model$staticRoot = function (opts) {
	var _v0 = opts.mode;
	switch (_v0.$) {
		case 'Layout':
			return A3(
				$elm$virtual_dom$VirtualDom$node,
				'div',
				_List_Nil,
				_List_fromArray(
					[
						A3(
						$elm$virtual_dom$VirtualDom$node,
						'style',
						_List_Nil,
						_List_fromArray(
							[
								$elm$virtual_dom$VirtualDom$text($mdgriffith$elm_ui$Internal$Style$rules)
							]))
					]));
		case 'NoStaticStyleSheet':
			return $elm$virtual_dom$VirtualDom$text('');
		default:
			return A3(
				$elm$virtual_dom$VirtualDom$node,
				'elm-ui-static-rules',
				_List_fromArray(
					[
						A2(
						$elm$virtual_dom$VirtualDom$property,
						'rules',
						$elm$json$Json$Encode$string($mdgriffith$elm_ui$Internal$Style$rules))
					]),
				_List_Nil);
	}
};
var $elm$json$Json$Encode$list = F2(
	function (func, entries) {
		return _Json_wrap(
			A3(
				$elm$core$List$foldl,
				_Json_addEntry(func),
				_Json_emptyArray(_Utils_Tuple0),
				entries));
	});
var $elm$core$List$any = F2(
	function (isOkay, list) {
		any:
		while (true) {
			if (!list.b) {
				return false;
			} else {
				var x = list.a;
				var xs = list.b;
				if (isOkay(x)) {
					return true;
				} else {
					var $temp$isOkay = isOkay,
						$temp$list = xs;
					isOkay = $temp$isOkay;
					list = $temp$list;
					continue any;
				}
			}
		}
	});
var $mdgriffith$elm_ui$Internal$Model$fontName = function (font) {
	switch (font.$) {
		case 'Serif':
			return 'serif';
		case 'SansSerif':
			return 'sans-serif';
		case 'Monospace':
			return 'monospace';
		case 'Typeface':
			var name = font.a;
			return '\"' + (name + '\"');
		case 'ImportFont':
			var name = font.a;
			var url = font.b;
			return '\"' + (name + '\"');
		default:
			var name = font.a.name;
			return '\"' + (name + '\"');
	}
};
var $mdgriffith$elm_ui$Internal$Model$isSmallCaps = function (_var) {
	switch (_var.$) {
		case 'VariantActive':
			var name = _var.a;
			return name === 'smcp';
		case 'VariantOff':
			var name = _var.a;
			return false;
		default:
			var name = _var.a;
			var index = _var.b;
			return (name === 'smcp') && (index === 1);
	}
};
var $mdgriffith$elm_ui$Internal$Model$hasSmallCaps = function (typeface) {
	if (typeface.$ === 'FontWith') {
		var font = typeface.a;
		return A2($elm$core$List$any, $mdgriffith$elm_ui$Internal$Model$isSmallCaps, font.variants);
	} else {
		return false;
	}
};
var $elm$core$Basics$min = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) < 0) ? x : y;
	});
var $elm$core$Basics$negate = function (n) {
	return -n;
};
var $mdgriffith$elm_ui$Internal$Model$renderProps = F3(
	function (force, _v0, existing) {
		var key = _v0.a;
		var val = _v0.b;
		return force ? (existing + ('\n  ' + (key + (': ' + (val + ' !important;'))))) : (existing + ('\n  ' + (key + (': ' + (val + ';')))));
	});
var $mdgriffith$elm_ui$Internal$Model$renderStyle = F4(
	function (options, maybePseudo, selector, props) {
		if (maybePseudo.$ === 'Nothing') {
			return _List_fromArray(
				[
					selector + ('{' + (A3(
					$elm$core$List$foldl,
					$mdgriffith$elm_ui$Internal$Model$renderProps(false),
					'',
					props) + '\n}'))
				]);
		} else {
			var pseudo = maybePseudo.a;
			switch (pseudo.$) {
				case 'Hover':
					var _v2 = options.hover;
					switch (_v2.$) {
						case 'NoHover':
							return _List_Nil;
						case 'ForceHover':
							return _List_fromArray(
								[
									selector + ('-hv {' + (A3(
									$elm$core$List$foldl,
									$mdgriffith$elm_ui$Internal$Model$renderProps(true),
									'',
									props) + '\n}'))
								]);
						default:
							return _List_fromArray(
								[
									selector + ('-hv:hover {' + (A3(
									$elm$core$List$foldl,
									$mdgriffith$elm_ui$Internal$Model$renderProps(false),
									'',
									props) + '\n}'))
								]);
					}
				case 'Focus':
					var renderedProps = A3(
						$elm$core$List$foldl,
						$mdgriffith$elm_ui$Internal$Model$renderProps(false),
						'',
						props);
					return _List_fromArray(
						[
							selector + ('-fs:focus {' + (renderedProps + '\n}')),
							('.' + ($mdgriffith$elm_ui$Internal$Style$classes.any + (':focus ' + (selector + '-fs  {')))) + (renderedProps + '\n}'),
							(selector + '-fs:focus-within {') + (renderedProps + '\n}'),
							('.ui-slide-bar:focus + ' + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any) + (' .focusable-thumb' + (selector + '-fs {')))) + (renderedProps + '\n}')
						]);
				default:
					return _List_fromArray(
						[
							selector + ('-act:active {' + (A3(
							$elm$core$List$foldl,
							$mdgriffith$elm_ui$Internal$Model$renderProps(false),
							'',
							props) + '\n}'))
						]);
			}
		}
	});
var $mdgriffith$elm_ui$Internal$Model$renderVariant = function (_var) {
	switch (_var.$) {
		case 'VariantActive':
			var name = _var.a;
			return '\"' + (name + '\"');
		case 'VariantOff':
			var name = _var.a;
			return '\"' + (name + '\" 0');
		default:
			var name = _var.a;
			var index = _var.b;
			return '\"' + (name + ('\" ' + $elm$core$String$fromInt(index)));
	}
};
var $mdgriffith$elm_ui$Internal$Model$renderVariants = function (typeface) {
	if (typeface.$ === 'FontWith') {
		var font = typeface.a;
		return $elm$core$Maybe$Just(
			A2(
				$elm$core$String$join,
				', ',
				A2($elm$core$List$map, $mdgriffith$elm_ui$Internal$Model$renderVariant, font.variants)));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $mdgriffith$elm_ui$Internal$Model$transformValue = function (transform) {
	switch (transform.$) {
		case 'Untransformed':
			return $elm$core$Maybe$Nothing;
		case 'Moved':
			var _v1 = transform.a;
			var x = _v1.a;
			var y = _v1.b;
			var z = _v1.c;
			return $elm$core$Maybe$Just(
				'translate3d(' + ($elm$core$String$fromFloat(x) + ('px, ' + ($elm$core$String$fromFloat(y) + ('px, ' + ($elm$core$String$fromFloat(z) + 'px)'))))));
		default:
			var _v2 = transform.a;
			var tx = _v2.a;
			var ty = _v2.b;
			var tz = _v2.c;
			var _v3 = transform.b;
			var sx = _v3.a;
			var sy = _v3.b;
			var sz = _v3.c;
			var _v4 = transform.c;
			var ox = _v4.a;
			var oy = _v4.b;
			var oz = _v4.c;
			var angle = transform.d;
			var translate = 'translate3d(' + ($elm$core$String$fromFloat(tx) + ('px, ' + ($elm$core$String$fromFloat(ty) + ('px, ' + ($elm$core$String$fromFloat(tz) + 'px)')))));
			var scale = 'scale3d(' + ($elm$core$String$fromFloat(sx) + (', ' + ($elm$core$String$fromFloat(sy) + (', ' + ($elm$core$String$fromFloat(sz) + ')')))));
			var rotate = 'rotate3d(' + ($elm$core$String$fromFloat(ox) + (', ' + ($elm$core$String$fromFloat(oy) + (', ' + ($elm$core$String$fromFloat(oz) + (', ' + ($elm$core$String$fromFloat(angle) + 'rad)')))))));
			return $elm$core$Maybe$Just(translate + (' ' + (scale + (' ' + rotate))));
	}
};
var $mdgriffith$elm_ui$Internal$Model$renderStyleRule = F3(
	function (options, rule, maybePseudo) {
		switch (rule.$) {
			case 'Style':
				var selector = rule.a;
				var props = rule.b;
				return A4($mdgriffith$elm_ui$Internal$Model$renderStyle, options, maybePseudo, selector, props);
			case 'Shadows':
				var name = rule.a;
				var prop = rule.b;
				return A4(
					$mdgriffith$elm_ui$Internal$Model$renderStyle,
					options,
					maybePseudo,
					'.' + name,
					_List_fromArray(
						[
							A2($mdgriffith$elm_ui$Internal$Model$Property, 'box-shadow', prop)
						]));
			case 'Transparency':
				var name = rule.a;
				var transparency = rule.b;
				var opacity = A2(
					$elm$core$Basics$max,
					0,
					A2($elm$core$Basics$min, 1, 1 - transparency));
				return A4(
					$mdgriffith$elm_ui$Internal$Model$renderStyle,
					options,
					maybePseudo,
					'.' + name,
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Internal$Model$Property,
							'opacity',
							$elm$core$String$fromFloat(opacity))
						]));
			case 'FontSize':
				var i = rule.a;
				return A4(
					$mdgriffith$elm_ui$Internal$Model$renderStyle,
					options,
					maybePseudo,
					'.font-size-' + $elm$core$String$fromInt(i),
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Internal$Model$Property,
							'font-size',
							$elm$core$String$fromInt(i) + 'px')
						]));
			case 'FontFamily':
				var name = rule.a;
				var typefaces = rule.b;
				var features = A2(
					$elm$core$String$join,
					', ',
					A2($elm$core$List$filterMap, $mdgriffith$elm_ui$Internal$Model$renderVariants, typefaces));
				var families = _List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Model$Property,
						'font-family',
						A2(
							$elm$core$String$join,
							', ',
							A2($elm$core$List$map, $mdgriffith$elm_ui$Internal$Model$fontName, typefaces))),
						A2($mdgriffith$elm_ui$Internal$Model$Property, 'font-feature-settings', features),
						A2(
						$mdgriffith$elm_ui$Internal$Model$Property,
						'font-variant',
						A2($elm$core$List$any, $mdgriffith$elm_ui$Internal$Model$hasSmallCaps, typefaces) ? 'small-caps' : 'normal')
					]);
				return A4($mdgriffith$elm_ui$Internal$Model$renderStyle, options, maybePseudo, '.' + name, families);
			case 'Single':
				var _class = rule.a;
				var prop = rule.b;
				var val = rule.c;
				return A4(
					$mdgriffith$elm_ui$Internal$Model$renderStyle,
					options,
					maybePseudo,
					'.' + _class,
					_List_fromArray(
						[
							A2($mdgriffith$elm_ui$Internal$Model$Property, prop, val)
						]));
			case 'Colored':
				var _class = rule.a;
				var prop = rule.b;
				var color = rule.c;
				return A4(
					$mdgriffith$elm_ui$Internal$Model$renderStyle,
					options,
					maybePseudo,
					'.' + _class,
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Internal$Model$Property,
							prop,
							$mdgriffith$elm_ui$Internal$Model$formatColor(color))
						]));
			case 'SpacingStyle':
				var cls = rule.a;
				var x = rule.b;
				var y = rule.c;
				var yPx = $elm$core$String$fromInt(y) + 'px';
				var xPx = $elm$core$String$fromInt(x) + 'px';
				var single = '.' + $mdgriffith$elm_ui$Internal$Style$classes.single;
				var row = '.' + $mdgriffith$elm_ui$Internal$Style$classes.row;
				var wrappedRow = '.' + ($mdgriffith$elm_ui$Internal$Style$classes.wrapped + row);
				var right = '.' + $mdgriffith$elm_ui$Internal$Style$classes.alignRight;
				var paragraph = '.' + $mdgriffith$elm_ui$Internal$Style$classes.paragraph;
				var page = '.' + $mdgriffith$elm_ui$Internal$Style$classes.page;
				var left = '.' + $mdgriffith$elm_ui$Internal$Style$classes.alignLeft;
				var halfY = $elm$core$String$fromFloat(y / 2) + 'px';
				var halfX = $elm$core$String$fromFloat(x / 2) + 'px';
				var column = '.' + $mdgriffith$elm_ui$Internal$Style$classes.column;
				var _class = '.' + cls;
				var any = '.' + $mdgriffith$elm_ui$Internal$Style$classes.any;
				return $elm$core$List$concat(
					_List_fromArray(
						[
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (row + (' > ' + (any + (' + ' + any)))),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'margin-left', xPx)
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (wrappedRow + (' > ' + any)),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'margin', halfY + (' ' + halfX))
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (column + (' > ' + (any + (' + ' + any)))),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'margin-top', yPx)
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (page + (' > ' + (any + (' + ' + any)))),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'margin-top', yPx)
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (page + (' > ' + left)),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'margin-right', xPx)
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (page + (' > ' + right)),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'margin-left', xPx)
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_Utils_ap(_class, paragraph),
							_List_fromArray(
								[
									A2(
									$mdgriffith$elm_ui$Internal$Model$Property,
									'line-height',
									'calc(1em + ' + ($elm$core$String$fromInt(y) + 'px)'))
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							'textarea' + (any + _class),
							_List_fromArray(
								[
									A2(
									$mdgriffith$elm_ui$Internal$Model$Property,
									'line-height',
									'calc(1em + ' + ($elm$core$String$fromInt(y) + 'px)')),
									A2(
									$mdgriffith$elm_ui$Internal$Model$Property,
									'height',
									'calc(100% + ' + ($elm$core$String$fromInt(y) + 'px)'))
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (paragraph + (' > ' + left)),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'margin-right', xPx)
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (paragraph + (' > ' + right)),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'margin-left', xPx)
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (paragraph + '::after'),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'content', '\'\''),
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'display', 'block'),
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'height', '0'),
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'width', '0'),
									A2(
									$mdgriffith$elm_ui$Internal$Model$Property,
									'margin-top',
									$elm$core$String$fromInt((-1) * ((y / 2) | 0)) + 'px')
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (paragraph + '::before'),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'content', '\'\''),
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'display', 'block'),
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'height', '0'),
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'width', '0'),
									A2(
									$mdgriffith$elm_ui$Internal$Model$Property,
									'margin-bottom',
									$elm$core$String$fromInt((-1) * ((y / 2) | 0)) + 'px')
								]))
						]));
			case 'PaddingStyle':
				var cls = rule.a;
				var top = rule.b;
				var right = rule.c;
				var bottom = rule.d;
				var left = rule.e;
				var _class = '.' + cls;
				return A4(
					$mdgriffith$elm_ui$Internal$Model$renderStyle,
					options,
					maybePseudo,
					_class,
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Internal$Model$Property,
							'padding',
							$elm$core$String$fromFloat(top) + ('px ' + ($elm$core$String$fromFloat(right) + ('px ' + ($elm$core$String$fromFloat(bottom) + ('px ' + ($elm$core$String$fromFloat(left) + 'px')))))))
						]));
			case 'BorderWidth':
				var cls = rule.a;
				var top = rule.b;
				var right = rule.c;
				var bottom = rule.d;
				var left = rule.e;
				var _class = '.' + cls;
				return A4(
					$mdgriffith$elm_ui$Internal$Model$renderStyle,
					options,
					maybePseudo,
					_class,
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Internal$Model$Property,
							'border-width',
							$elm$core$String$fromInt(top) + ('px ' + ($elm$core$String$fromInt(right) + ('px ' + ($elm$core$String$fromInt(bottom) + ('px ' + ($elm$core$String$fromInt(left) + 'px')))))))
						]));
			case 'GridTemplateStyle':
				var template = rule.a;
				var toGridLengthHelper = F3(
					function (minimum, maximum, x) {
						toGridLengthHelper:
						while (true) {
							switch (x.$) {
								case 'Px':
									var px = x.a;
									return $elm$core$String$fromInt(px) + 'px';
								case 'Content':
									var _v2 = _Utils_Tuple2(minimum, maximum);
									if (_v2.a.$ === 'Nothing') {
										if (_v2.b.$ === 'Nothing') {
											var _v3 = _v2.a;
											var _v4 = _v2.b;
											return 'max-content';
										} else {
											var _v6 = _v2.a;
											var maxSize = _v2.b.a;
											return 'minmax(max-content, ' + ($elm$core$String$fromInt(maxSize) + 'px)');
										}
									} else {
										if (_v2.b.$ === 'Nothing') {
											var minSize = _v2.a.a;
											var _v5 = _v2.b;
											return 'minmax(' + ($elm$core$String$fromInt(minSize) + ('px, ' + 'max-content)'));
										} else {
											var minSize = _v2.a.a;
											var maxSize = _v2.b.a;
											return 'minmax(' + ($elm$core$String$fromInt(minSize) + ('px, ' + ($elm$core$String$fromInt(maxSize) + 'px)')));
										}
									}
								case 'Fill':
									var i = x.a;
									var _v7 = _Utils_Tuple2(minimum, maximum);
									if (_v7.a.$ === 'Nothing') {
										if (_v7.b.$ === 'Nothing') {
											var _v8 = _v7.a;
											var _v9 = _v7.b;
											return $elm$core$String$fromInt(i) + 'fr';
										} else {
											var _v11 = _v7.a;
											var maxSize = _v7.b.a;
											return 'minmax(max-content, ' + ($elm$core$String$fromInt(maxSize) + 'px)');
										}
									} else {
										if (_v7.b.$ === 'Nothing') {
											var minSize = _v7.a.a;
											var _v10 = _v7.b;
											return 'minmax(' + ($elm$core$String$fromInt(minSize) + ('px, ' + ($elm$core$String$fromInt(i) + ('fr' + 'fr)'))));
										} else {
											var minSize = _v7.a.a;
											var maxSize = _v7.b.a;
											return 'minmax(' + ($elm$core$String$fromInt(minSize) + ('px, ' + ($elm$core$String$fromInt(maxSize) + 'px)')));
										}
									}
								case 'Min':
									var m = x.a;
									var len = x.b;
									var $temp$minimum = $elm$core$Maybe$Just(m),
										$temp$maximum = maximum,
										$temp$x = len;
									minimum = $temp$minimum;
									maximum = $temp$maximum;
									x = $temp$x;
									continue toGridLengthHelper;
								default:
									var m = x.a;
									var len = x.b;
									var $temp$minimum = minimum,
										$temp$maximum = $elm$core$Maybe$Just(m),
										$temp$x = len;
									minimum = $temp$minimum;
									maximum = $temp$maximum;
									x = $temp$x;
									continue toGridLengthHelper;
							}
						}
					});
				var toGridLength = function (x) {
					return A3(toGridLengthHelper, $elm$core$Maybe$Nothing, $elm$core$Maybe$Nothing, x);
				};
				var xSpacing = toGridLength(template.spacing.a);
				var ySpacing = toGridLength(template.spacing.b);
				var rows = function (x) {
					return 'grid-template-rows: ' + (x + ';');
				}(
					A2(
						$elm$core$String$join,
						' ',
						A2($elm$core$List$map, toGridLength, template.rows)));
				var msRows = function (x) {
					return '-ms-grid-rows: ' + (x + ';');
				}(
					A2(
						$elm$core$String$join,
						ySpacing,
						A2($elm$core$List$map, toGridLength, template.columns)));
				var msColumns = function (x) {
					return '-ms-grid-columns: ' + (x + ';');
				}(
					A2(
						$elm$core$String$join,
						ySpacing,
						A2($elm$core$List$map, toGridLength, template.columns)));
				var gapY = 'grid-row-gap:' + (toGridLength(template.spacing.b) + ';');
				var gapX = 'grid-column-gap:' + (toGridLength(template.spacing.a) + ';');
				var columns = function (x) {
					return 'grid-template-columns: ' + (x + ';');
				}(
					A2(
						$elm$core$String$join,
						' ',
						A2($elm$core$List$map, toGridLength, template.columns)));
				var _class = '.grid-rows-' + (A2(
					$elm$core$String$join,
					'-',
					A2($elm$core$List$map, $mdgriffith$elm_ui$Internal$Model$lengthClassName, template.rows)) + ('-cols-' + (A2(
					$elm$core$String$join,
					'-',
					A2($elm$core$List$map, $mdgriffith$elm_ui$Internal$Model$lengthClassName, template.columns)) + ('-space-x-' + ($mdgriffith$elm_ui$Internal$Model$lengthClassName(template.spacing.a) + ('-space-y-' + $mdgriffith$elm_ui$Internal$Model$lengthClassName(template.spacing.b)))))));
				var modernGrid = _class + ('{' + (columns + (rows + (gapX + (gapY + '}')))));
				var supports = '@supports (display:grid) {' + (modernGrid + '}');
				var base = _class + ('{' + (msColumns + (msRows + '}')));
				return _List_fromArray(
					[base, supports]);
			case 'GridPosition':
				var position = rule.a;
				var msPosition = A2(
					$elm$core$String$join,
					' ',
					_List_fromArray(
						[
							'-ms-grid-row: ' + ($elm$core$String$fromInt(position.row) + ';'),
							'-ms-grid-row-span: ' + ($elm$core$String$fromInt(position.height) + ';'),
							'-ms-grid-column: ' + ($elm$core$String$fromInt(position.col) + ';'),
							'-ms-grid-column-span: ' + ($elm$core$String$fromInt(position.width) + ';')
						]));
				var modernPosition = A2(
					$elm$core$String$join,
					' ',
					_List_fromArray(
						[
							'grid-row: ' + ($elm$core$String$fromInt(position.row) + (' / ' + ($elm$core$String$fromInt(position.row + position.height) + ';'))),
							'grid-column: ' + ($elm$core$String$fromInt(position.col) + (' / ' + ($elm$core$String$fromInt(position.col + position.width) + ';')))
						]));
				var _class = '.grid-pos-' + ($elm$core$String$fromInt(position.row) + ('-' + ($elm$core$String$fromInt(position.col) + ('-' + ($elm$core$String$fromInt(position.width) + ('-' + $elm$core$String$fromInt(position.height)))))));
				var modernGrid = _class + ('{' + (modernPosition + '}'));
				var supports = '@supports (display:grid) {' + (modernGrid + '}');
				var base = _class + ('{' + (msPosition + '}'));
				return _List_fromArray(
					[base, supports]);
			case 'PseudoSelector':
				var _class = rule.a;
				var styles = rule.b;
				var renderPseudoRule = function (style) {
					return A3(
						$mdgriffith$elm_ui$Internal$Model$renderStyleRule,
						options,
						style,
						$elm$core$Maybe$Just(_class));
				};
				return A2($elm$core$List$concatMap, renderPseudoRule, styles);
			default:
				var transform = rule.a;
				var val = $mdgriffith$elm_ui$Internal$Model$transformValue(transform);
				var _class = $mdgriffith$elm_ui$Internal$Model$transformClass(transform);
				var _v12 = _Utils_Tuple2(_class, val);
				if ((_v12.a.$ === 'Just') && (_v12.b.$ === 'Just')) {
					var cls = _v12.a.a;
					var v = _v12.b.a;
					return A4(
						$mdgriffith$elm_ui$Internal$Model$renderStyle,
						options,
						maybePseudo,
						'.' + cls,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Model$Property, 'transform', v)
							]));
				} else {
					return _List_Nil;
				}
		}
	});
var $mdgriffith$elm_ui$Internal$Model$encodeStyles = F2(
	function (options, stylesheet) {
		return $elm$json$Json$Encode$object(
			A2(
				$elm$core$List$map,
				function (style) {
					var styled = A3($mdgriffith$elm_ui$Internal$Model$renderStyleRule, options, style, $elm$core$Maybe$Nothing);
					return _Utils_Tuple2(
						$mdgriffith$elm_ui$Internal$Model$getStyleName(style),
						A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, styled));
				},
				stylesheet));
	});
var $mdgriffith$elm_ui$Internal$Model$bracket = F2(
	function (selector, rules) {
		var renderPair = function (_v0) {
			var name = _v0.a;
			var val = _v0.b;
			return name + (': ' + (val + ';'));
		};
		return selector + (' {' + (A2(
			$elm$core$String$join,
			'',
			A2($elm$core$List$map, renderPair, rules)) + '}'));
	});
var $mdgriffith$elm_ui$Internal$Model$fontRule = F3(
	function (name, modifier, _v0) {
		var parentAdj = _v0.a;
		var textAdjustment = _v0.b;
		return _List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Model$bracket, '.' + (name + ('.' + (modifier + (', ' + ('.' + (name + (' .' + modifier))))))), parentAdj),
				A2($mdgriffith$elm_ui$Internal$Model$bracket, '.' + (name + ('.' + (modifier + ('> .' + ($mdgriffith$elm_ui$Internal$Style$classes.text + (', .' + (name + (' .' + (modifier + (' > .' + $mdgriffith$elm_ui$Internal$Style$classes.text)))))))))), textAdjustment)
			]);
	});
var $mdgriffith$elm_ui$Internal$Model$renderFontAdjustmentRule = F3(
	function (fontToAdjust, _v0, otherFontName) {
		var full = _v0.a;
		var capital = _v0.b;
		var name = _Utils_eq(fontToAdjust, otherFontName) ? fontToAdjust : (otherFontName + (' .' + fontToAdjust));
		return A2(
			$elm$core$String$join,
			' ',
			_Utils_ap(
				A3($mdgriffith$elm_ui$Internal$Model$fontRule, name, $mdgriffith$elm_ui$Internal$Style$classes.sizeByCapital, capital),
				A3($mdgriffith$elm_ui$Internal$Model$fontRule, name, $mdgriffith$elm_ui$Internal$Style$classes.fullSize, full)));
	});
var $mdgriffith$elm_ui$Internal$Model$renderNullAdjustmentRule = F2(
	function (fontToAdjust, otherFontName) {
		var name = _Utils_eq(fontToAdjust, otherFontName) ? fontToAdjust : (otherFontName + (' .' + fontToAdjust));
		return A2(
			$elm$core$String$join,
			' ',
			_List_fromArray(
				[
					A2(
					$mdgriffith$elm_ui$Internal$Model$bracket,
					'.' + (name + ('.' + ($mdgriffith$elm_ui$Internal$Style$classes.sizeByCapital + (', ' + ('.' + (name + (' .' + $mdgriffith$elm_ui$Internal$Style$classes.sizeByCapital))))))),
					_List_fromArray(
						[
							_Utils_Tuple2('line-height', '1')
						])),
					A2(
					$mdgriffith$elm_ui$Internal$Model$bracket,
					'.' + (name + ('.' + ($mdgriffith$elm_ui$Internal$Style$classes.sizeByCapital + ('> .' + ($mdgriffith$elm_ui$Internal$Style$classes.text + (', .' + (name + (' .' + ($mdgriffith$elm_ui$Internal$Style$classes.sizeByCapital + (' > .' + $mdgriffith$elm_ui$Internal$Style$classes.text)))))))))),
					_List_fromArray(
						[
							_Utils_Tuple2('vertical-align', '0'),
							_Utils_Tuple2('line-height', '1')
						]))
				]));
	});
var $mdgriffith$elm_ui$Internal$Model$adjust = F3(
	function (size, height, vertical) {
		return {height: height / size, size: size, vertical: vertical};
	});
var $elm$core$List$filter = F2(
	function (isGood, list) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, xs) {
					return isGood(x) ? A2($elm$core$List$cons, x, xs) : xs;
				}),
			_List_Nil,
			list);
	});
var $elm$core$List$maximum = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(
			A3($elm$core$List$foldl, $elm$core$Basics$max, x, xs));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $elm$core$List$minimum = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(
			A3($elm$core$List$foldl, $elm$core$Basics$min, x, xs));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $elm$core$Basics$neq = _Utils_notEqual;
var $mdgriffith$elm_ui$Internal$Model$convertAdjustment = function (adjustment) {
	var lines = _List_fromArray(
		[adjustment.capital, adjustment.baseline, adjustment.descender, adjustment.lowercase]);
	var lineHeight = 1.5;
	var normalDescender = (lineHeight - 1) / 2;
	var oldMiddle = lineHeight / 2;
	var descender = A2(
		$elm$core$Maybe$withDefault,
		adjustment.descender,
		$elm$core$List$minimum(lines));
	var newBaseline = A2(
		$elm$core$Maybe$withDefault,
		adjustment.baseline,
		$elm$core$List$minimum(
			A2(
				$elm$core$List$filter,
				function (x) {
					return !_Utils_eq(x, descender);
				},
				lines)));
	var base = lineHeight;
	var ascender = A2(
		$elm$core$Maybe$withDefault,
		adjustment.capital,
		$elm$core$List$maximum(lines));
	var capitalSize = 1 / (ascender - newBaseline);
	var capitalVertical = 1 - ascender;
	var fullSize = 1 / (ascender - descender);
	var fullVertical = 1 - ascender;
	var newCapitalMiddle = ((ascender - newBaseline) / 2) + newBaseline;
	var newFullMiddle = ((ascender - descender) / 2) + descender;
	return {
		capital: A3($mdgriffith$elm_ui$Internal$Model$adjust, capitalSize, ascender - newBaseline, capitalVertical),
		full: A3($mdgriffith$elm_ui$Internal$Model$adjust, fullSize, ascender - descender, fullVertical)
	};
};
var $mdgriffith$elm_ui$Internal$Model$fontAdjustmentRules = function (converted) {
	return _Utils_Tuple2(
		_List_fromArray(
			[
				_Utils_Tuple2('display', 'block')
			]),
		_List_fromArray(
			[
				_Utils_Tuple2('display', 'inline-block'),
				_Utils_Tuple2(
				'line-height',
				$elm$core$String$fromFloat(converted.height)),
				_Utils_Tuple2(
				'vertical-align',
				$elm$core$String$fromFloat(converted.vertical) + 'em'),
				_Utils_Tuple2(
				'font-size',
				$elm$core$String$fromFloat(converted.size) + 'em')
			]));
};
var $mdgriffith$elm_ui$Internal$Model$typefaceAdjustment = function (typefaces) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (face, found) {
				if (found.$ === 'Nothing') {
					if (face.$ === 'FontWith') {
						var _with = face.a;
						var _v2 = _with.adjustment;
						if (_v2.$ === 'Nothing') {
							return found;
						} else {
							var adjustment = _v2.a;
							return $elm$core$Maybe$Just(
								_Utils_Tuple2(
									$mdgriffith$elm_ui$Internal$Model$fontAdjustmentRules(
										function ($) {
											return $.full;
										}(
											$mdgriffith$elm_ui$Internal$Model$convertAdjustment(adjustment))),
									$mdgriffith$elm_ui$Internal$Model$fontAdjustmentRules(
										function ($) {
											return $.capital;
										}(
											$mdgriffith$elm_ui$Internal$Model$convertAdjustment(adjustment)))));
						}
					} else {
						return found;
					}
				} else {
					return found;
				}
			}),
		$elm$core$Maybe$Nothing,
		typefaces);
};
var $mdgriffith$elm_ui$Internal$Model$renderTopLevelValues = function (rules) {
	var withImport = function (font) {
		if (font.$ === 'ImportFont') {
			var url = font.b;
			return $elm$core$Maybe$Just('@import url(\'' + (url + '\');'));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	};
	var fontImports = function (_v2) {
		var name = _v2.a;
		var typefaces = _v2.b;
		var imports = A2(
			$elm$core$String$join,
			'\n',
			A2($elm$core$List$filterMap, withImport, typefaces));
		return imports;
	};
	var allNames = A2($elm$core$List$map, $elm$core$Tuple$first, rules);
	var fontAdjustments = function (_v1) {
		var name = _v1.a;
		var typefaces = _v1.b;
		var _v0 = $mdgriffith$elm_ui$Internal$Model$typefaceAdjustment(typefaces);
		if (_v0.$ === 'Nothing') {
			return A2(
				$elm$core$String$join,
				'',
				A2(
					$elm$core$List$map,
					$mdgriffith$elm_ui$Internal$Model$renderNullAdjustmentRule(name),
					allNames));
		} else {
			var adjustment = _v0.a;
			return A2(
				$elm$core$String$join,
				'',
				A2(
					$elm$core$List$map,
					A2($mdgriffith$elm_ui$Internal$Model$renderFontAdjustmentRule, name, adjustment),
					allNames));
		}
	};
	return _Utils_ap(
		A2(
			$elm$core$String$join,
			'\n',
			A2($elm$core$List$map, fontImports, rules)),
		A2(
			$elm$core$String$join,
			'\n',
			A2($elm$core$List$map, fontAdjustments, rules)));
};
var $mdgriffith$elm_ui$Internal$Model$topLevelValue = function (rule) {
	if (rule.$ === 'FontFamily') {
		var name = rule.a;
		var typefaces = rule.b;
		return $elm$core$Maybe$Just(
			_Utils_Tuple2(name, typefaces));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $mdgriffith$elm_ui$Internal$Model$toStyleSheetString = F2(
	function (options, stylesheet) {
		var combine = F2(
			function (style, rendered) {
				return {
					rules: _Utils_ap(
						rendered.rules,
						A3($mdgriffith$elm_ui$Internal$Model$renderStyleRule, options, style, $elm$core$Maybe$Nothing)),
					topLevel: function () {
						var _v1 = $mdgriffith$elm_ui$Internal$Model$topLevelValue(style);
						if (_v1.$ === 'Nothing') {
							return rendered.topLevel;
						} else {
							var topLevel = _v1.a;
							return A2($elm$core$List$cons, topLevel, rendered.topLevel);
						}
					}()
				};
			});
		var _v0 = A3(
			$elm$core$List$foldl,
			combine,
			{rules: _List_Nil, topLevel: _List_Nil},
			stylesheet);
		var topLevel = _v0.topLevel;
		var rules = _v0.rules;
		return _Utils_ap(
			$mdgriffith$elm_ui$Internal$Model$renderTopLevelValues(topLevel),
			$elm$core$String$concat(rules));
	});
var $mdgriffith$elm_ui$Internal$Model$toStyleSheet = F2(
	function (options, styleSheet) {
		var _v0 = options.mode;
		switch (_v0.$) {
			case 'Layout':
				return A3(
					$elm$virtual_dom$VirtualDom$node,
					'div',
					_List_Nil,
					_List_fromArray(
						[
							A3(
							$elm$virtual_dom$VirtualDom$node,
							'style',
							_List_Nil,
							_List_fromArray(
								[
									$elm$virtual_dom$VirtualDom$text(
									A2($mdgriffith$elm_ui$Internal$Model$toStyleSheetString, options, styleSheet))
								]))
						]));
			case 'NoStaticStyleSheet':
				return A3(
					$elm$virtual_dom$VirtualDom$node,
					'div',
					_List_Nil,
					_List_fromArray(
						[
							A3(
							$elm$virtual_dom$VirtualDom$node,
							'style',
							_List_Nil,
							_List_fromArray(
								[
									$elm$virtual_dom$VirtualDom$text(
									A2($mdgriffith$elm_ui$Internal$Model$toStyleSheetString, options, styleSheet))
								]))
						]));
			default:
				return A3(
					$elm$virtual_dom$VirtualDom$node,
					'elm-ui-rules',
					_List_fromArray(
						[
							A2(
							$elm$virtual_dom$VirtualDom$property,
							'rules',
							A2($mdgriffith$elm_ui$Internal$Model$encodeStyles, options, styleSheet))
						]),
					_List_Nil);
		}
	});
var $mdgriffith$elm_ui$Internal$Model$embedKeyed = F4(
	function (_static, opts, styles, children) {
		var dynamicStyleSheet = A2(
			$mdgriffith$elm_ui$Internal$Model$toStyleSheet,
			opts,
			A3(
				$elm$core$List$foldl,
				$mdgriffith$elm_ui$Internal$Model$reduceStyles,
				_Utils_Tuple2(
					$elm$core$Set$empty,
					$mdgriffith$elm_ui$Internal$Model$renderFocusStyle(opts.focus)),
				styles).b);
		return _static ? A2(
			$elm$core$List$cons,
			_Utils_Tuple2(
				'static-stylesheet',
				$mdgriffith$elm_ui$Internal$Model$staticRoot(opts)),
			A2(
				$elm$core$List$cons,
				_Utils_Tuple2('dynamic-stylesheet', dynamicStyleSheet),
				children)) : A2(
			$elm$core$List$cons,
			_Utils_Tuple2('dynamic-stylesheet', dynamicStyleSheet),
			children);
	});
var $mdgriffith$elm_ui$Internal$Model$embedWith = F4(
	function (_static, opts, styles, children) {
		var dynamicStyleSheet = A2(
			$mdgriffith$elm_ui$Internal$Model$toStyleSheet,
			opts,
			A3(
				$elm$core$List$foldl,
				$mdgriffith$elm_ui$Internal$Model$reduceStyles,
				_Utils_Tuple2(
					$elm$core$Set$empty,
					$mdgriffith$elm_ui$Internal$Model$renderFocusStyle(opts.focus)),
				styles).b);
		return _static ? A2(
			$elm$core$List$cons,
			$mdgriffith$elm_ui$Internal$Model$staticRoot(opts),
			A2($elm$core$List$cons, dynamicStyleSheet, children)) : A2($elm$core$List$cons, dynamicStyleSheet, children);
	});
var $mdgriffith$elm_ui$Internal$Flag$heightBetween = $mdgriffith$elm_ui$Internal$Flag$flag(45);
var $mdgriffith$elm_ui$Internal$Flag$heightFill = $mdgriffith$elm_ui$Internal$Flag$flag(37);
var $elm$virtual_dom$VirtualDom$keyedNode = function (tag) {
	return _VirtualDom_keyedNode(
		_VirtualDom_noScript(tag));
};
var $elm$core$Basics$not = _Basics_not;
var $elm$html$Html$p = _VirtualDom_node('p');
var $elm$core$Bitwise$and = _Bitwise_and;
var $mdgriffith$elm_ui$Internal$Flag$present = F2(
	function (myFlag, _v0) {
		var fieldOne = _v0.a;
		var fieldTwo = _v0.b;
		if (myFlag.$ === 'Flag') {
			var first = myFlag.a;
			return _Utils_eq(first & fieldOne, first);
		} else {
			var second = myFlag.a;
			return _Utils_eq(second & fieldTwo, second);
		}
	});
var $elm$html$Html$s = _VirtualDom_node('s');
var $elm$html$Html$u = _VirtualDom_node('u');
var $mdgriffith$elm_ui$Internal$Flag$widthBetween = $mdgriffith$elm_ui$Internal$Flag$flag(44);
var $mdgriffith$elm_ui$Internal$Flag$widthFill = $mdgriffith$elm_ui$Internal$Flag$flag(39);
var $mdgriffith$elm_ui$Internal$Model$finalizeNode = F6(
	function (has, node, attributes, children, embedMode, parentContext) {
		var createNode = F2(
			function (nodeName, attrs) {
				if (children.$ === 'Keyed') {
					var keyed = children.a;
					return A3(
						$elm$virtual_dom$VirtualDom$keyedNode,
						nodeName,
						attrs,
						function () {
							switch (embedMode.$) {
								case 'NoStyleSheet':
									return keyed;
								case 'OnlyDynamic':
									var opts = embedMode.a;
									var styles = embedMode.b;
									return A4($mdgriffith$elm_ui$Internal$Model$embedKeyed, false, opts, styles, keyed);
								default:
									var opts = embedMode.a;
									var styles = embedMode.b;
									return A4($mdgriffith$elm_ui$Internal$Model$embedKeyed, true, opts, styles, keyed);
							}
						}());
				} else {
					var unkeyed = children.a;
					return A2(
						function () {
							switch (nodeName) {
								case 'div':
									return $elm$html$Html$div;
								case 'p':
									return $elm$html$Html$p;
								default:
									return $elm$virtual_dom$VirtualDom$node(nodeName);
							}
						}(),
						attrs,
						function () {
							switch (embedMode.$) {
								case 'NoStyleSheet':
									return unkeyed;
								case 'OnlyDynamic':
									var opts = embedMode.a;
									var styles = embedMode.b;
									return A4($mdgriffith$elm_ui$Internal$Model$embedWith, false, opts, styles, unkeyed);
								default:
									var opts = embedMode.a;
									var styles = embedMode.b;
									return A4($mdgriffith$elm_ui$Internal$Model$embedWith, true, opts, styles, unkeyed);
							}
						}());
				}
			});
		var html = function () {
			switch (node.$) {
				case 'Generic':
					return A2(createNode, 'div', attributes);
				case 'NodeName':
					var nodeName = node.a;
					return A2(createNode, nodeName, attributes);
				default:
					var nodeName = node.a;
					var internal = node.b;
					return A3(
						$elm$virtual_dom$VirtualDom$node,
						nodeName,
						attributes,
						_List_fromArray(
							[
								A2(
								createNode,
								internal,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class($mdgriffith$elm_ui$Internal$Style$classes.any + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.single))
									]))
							]));
			}
		}();
		switch (parentContext.$) {
			case 'AsRow':
				return (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$widthFill, has) && (!A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$widthBetween, has))) ? html : (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$alignRight, has) ? A2(
					$elm$html$Html$u,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class(
							A2(
								$elm$core$String$join,
								' ',
								_List_fromArray(
									[$mdgriffith$elm_ui$Internal$Style$classes.any, $mdgriffith$elm_ui$Internal$Style$classes.single, $mdgriffith$elm_ui$Internal$Style$classes.container, $mdgriffith$elm_ui$Internal$Style$classes.contentCenterY, $mdgriffith$elm_ui$Internal$Style$classes.alignContainerRight])))
						]),
					_List_fromArray(
						[html])) : (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$centerX, has) ? A2(
					$elm$html$Html$s,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class(
							A2(
								$elm$core$String$join,
								' ',
								_List_fromArray(
									[$mdgriffith$elm_ui$Internal$Style$classes.any, $mdgriffith$elm_ui$Internal$Style$classes.single, $mdgriffith$elm_ui$Internal$Style$classes.container, $mdgriffith$elm_ui$Internal$Style$classes.contentCenterY, $mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterX])))
						]),
					_List_fromArray(
						[html])) : html));
			case 'AsColumn':
				return (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$heightFill, has) && (!A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$heightBetween, has))) ? html : (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$centerY, has) ? A2(
					$elm$html$Html$s,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class(
							A2(
								$elm$core$String$join,
								' ',
								_List_fromArray(
									[$mdgriffith$elm_ui$Internal$Style$classes.any, $mdgriffith$elm_ui$Internal$Style$classes.single, $mdgriffith$elm_ui$Internal$Style$classes.container, $mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterY])))
						]),
					_List_fromArray(
						[html])) : (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$alignBottom, has) ? A2(
					$elm$html$Html$u,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class(
							A2(
								$elm$core$String$join,
								' ',
								_List_fromArray(
									[$mdgriffith$elm_ui$Internal$Style$classes.any, $mdgriffith$elm_ui$Internal$Style$classes.single, $mdgriffith$elm_ui$Internal$Style$classes.container, $mdgriffith$elm_ui$Internal$Style$classes.alignContainerBottom])))
						]),
					_List_fromArray(
						[html])) : html));
			default:
				return html;
		}
	});
var $elm$core$List$isEmpty = function (xs) {
	if (!xs.b) {
		return true;
	} else {
		return false;
	}
};
var $elm$html$Html$text = $elm$virtual_dom$VirtualDom$text;
var $mdgriffith$elm_ui$Internal$Model$textElementClasses = $mdgriffith$elm_ui$Internal$Style$classes.any + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.text + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.widthContent + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.heightContent)))));
var $mdgriffith$elm_ui$Internal$Model$textElement = function (str) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class($mdgriffith$elm_ui$Internal$Model$textElementClasses)
			]),
		_List_fromArray(
			[
				$elm$html$Html$text(str)
			]));
};
var $mdgriffith$elm_ui$Internal$Model$textElementFillClasses = $mdgriffith$elm_ui$Internal$Style$classes.any + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.text + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.widthFill + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.heightFill)))));
var $mdgriffith$elm_ui$Internal$Model$textElementFill = function (str) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class($mdgriffith$elm_ui$Internal$Model$textElementFillClasses)
			]),
		_List_fromArray(
			[
				$elm$html$Html$text(str)
			]));
};
var $mdgriffith$elm_ui$Internal$Model$createElement = F3(
	function (context, children, rendered) {
		var gatherKeyed = F2(
			function (_v8, _v9) {
				var key = _v8.a;
				var child = _v8.b;
				var htmls = _v9.a;
				var existingStyles = _v9.b;
				switch (child.$) {
					case 'Unstyled':
						var html = child.a;
						return _Utils_eq(context, $mdgriffith$elm_ui$Internal$Model$asParagraph) ? _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								_Utils_Tuple2(
									key,
									html(context)),
								htmls),
							existingStyles) : _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								_Utils_Tuple2(
									key,
									html(context)),
								htmls),
							existingStyles);
					case 'Styled':
						var styled = child.a;
						return _Utils_eq(context, $mdgriffith$elm_ui$Internal$Model$asParagraph) ? _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								_Utils_Tuple2(
									key,
									A2(styled.html, $mdgriffith$elm_ui$Internal$Model$NoStyleSheet, context)),
								htmls),
							$elm$core$List$isEmpty(existingStyles) ? styled.styles : _Utils_ap(styled.styles, existingStyles)) : _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								_Utils_Tuple2(
									key,
									A2(styled.html, $mdgriffith$elm_ui$Internal$Model$NoStyleSheet, context)),
								htmls),
							$elm$core$List$isEmpty(existingStyles) ? styled.styles : _Utils_ap(styled.styles, existingStyles));
					case 'Text':
						var str = child.a;
						return _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								_Utils_Tuple2(
									key,
									_Utils_eq(context, $mdgriffith$elm_ui$Internal$Model$asEl) ? $mdgriffith$elm_ui$Internal$Model$textElementFill(str) : $mdgriffith$elm_ui$Internal$Model$textElement(str)),
								htmls),
							existingStyles);
					default:
						return _Utils_Tuple2(htmls, existingStyles);
				}
			});
		var gather = F2(
			function (child, _v6) {
				var htmls = _v6.a;
				var existingStyles = _v6.b;
				switch (child.$) {
					case 'Unstyled':
						var html = child.a;
						return _Utils_eq(context, $mdgriffith$elm_ui$Internal$Model$asParagraph) ? _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								html(context),
								htmls),
							existingStyles) : _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								html(context),
								htmls),
							existingStyles);
					case 'Styled':
						var styled = child.a;
						return _Utils_eq(context, $mdgriffith$elm_ui$Internal$Model$asParagraph) ? _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								A2(styled.html, $mdgriffith$elm_ui$Internal$Model$NoStyleSheet, context),
								htmls),
							$elm$core$List$isEmpty(existingStyles) ? styled.styles : _Utils_ap(styled.styles, existingStyles)) : _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								A2(styled.html, $mdgriffith$elm_ui$Internal$Model$NoStyleSheet, context),
								htmls),
							$elm$core$List$isEmpty(existingStyles) ? styled.styles : _Utils_ap(styled.styles, existingStyles));
					case 'Text':
						var str = child.a;
						return _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								_Utils_eq(context, $mdgriffith$elm_ui$Internal$Model$asEl) ? $mdgriffith$elm_ui$Internal$Model$textElementFill(str) : $mdgriffith$elm_ui$Internal$Model$textElement(str),
								htmls),
							existingStyles);
					default:
						return _Utils_Tuple2(htmls, existingStyles);
				}
			});
		if (children.$ === 'Keyed') {
			var keyedChildren = children.a;
			var _v1 = A3(
				$elm$core$List$foldr,
				gatherKeyed,
				_Utils_Tuple2(_List_Nil, _List_Nil),
				keyedChildren);
			var keyed = _v1.a;
			var styles = _v1.b;
			var newStyles = $elm$core$List$isEmpty(styles) ? rendered.styles : _Utils_ap(rendered.styles, styles);
			if (!newStyles.b) {
				return $mdgriffith$elm_ui$Internal$Model$Unstyled(
					A5(
						$mdgriffith$elm_ui$Internal$Model$finalizeNode,
						rendered.has,
						rendered.node,
						rendered.attributes,
						$mdgriffith$elm_ui$Internal$Model$Keyed(
							A3($mdgriffith$elm_ui$Internal$Model$addKeyedChildren, 'nearby-element-pls', keyed, rendered.children)),
						$mdgriffith$elm_ui$Internal$Model$NoStyleSheet));
			} else {
				var allStyles = newStyles;
				return $mdgriffith$elm_ui$Internal$Model$Styled(
					{
						html: A4(
							$mdgriffith$elm_ui$Internal$Model$finalizeNode,
							rendered.has,
							rendered.node,
							rendered.attributes,
							$mdgriffith$elm_ui$Internal$Model$Keyed(
								A3($mdgriffith$elm_ui$Internal$Model$addKeyedChildren, 'nearby-element-pls', keyed, rendered.children))),
						styles: allStyles
					});
			}
		} else {
			var unkeyedChildren = children.a;
			var _v3 = A3(
				$elm$core$List$foldr,
				gather,
				_Utils_Tuple2(_List_Nil, _List_Nil),
				unkeyedChildren);
			var unkeyed = _v3.a;
			var styles = _v3.b;
			var newStyles = $elm$core$List$isEmpty(styles) ? rendered.styles : _Utils_ap(rendered.styles, styles);
			if (!newStyles.b) {
				return $mdgriffith$elm_ui$Internal$Model$Unstyled(
					A5(
						$mdgriffith$elm_ui$Internal$Model$finalizeNode,
						rendered.has,
						rendered.node,
						rendered.attributes,
						$mdgriffith$elm_ui$Internal$Model$Unkeyed(
							A2($mdgriffith$elm_ui$Internal$Model$addChildren, unkeyed, rendered.children)),
						$mdgriffith$elm_ui$Internal$Model$NoStyleSheet));
			} else {
				var allStyles = newStyles;
				return $mdgriffith$elm_ui$Internal$Model$Styled(
					{
						html: A4(
							$mdgriffith$elm_ui$Internal$Model$finalizeNode,
							rendered.has,
							rendered.node,
							rendered.attributes,
							$mdgriffith$elm_ui$Internal$Model$Unkeyed(
								A2($mdgriffith$elm_ui$Internal$Model$addChildren, unkeyed, rendered.children))),
						styles: allStyles
					});
			}
		}
	});
var $mdgriffith$elm_ui$Internal$Model$Single = F3(
	function (a, b, c) {
		return {$: 'Single', a: a, b: b, c: c};
	});
var $mdgriffith$elm_ui$Internal$Model$Transform = function (a) {
	return {$: 'Transform', a: a};
};
var $mdgriffith$elm_ui$Internal$Flag$Field = F2(
	function (a, b) {
		return {$: 'Field', a: a, b: b};
	});
var $elm$core$Bitwise$or = _Bitwise_or;
var $mdgriffith$elm_ui$Internal$Flag$add = F2(
	function (myFlag, _v0) {
		var one = _v0.a;
		var two = _v0.b;
		if (myFlag.$ === 'Flag') {
			var first = myFlag.a;
			return A2($mdgriffith$elm_ui$Internal$Flag$Field, first | one, two);
		} else {
			var second = myFlag.a;
			return A2($mdgriffith$elm_ui$Internal$Flag$Field, one, second | two);
		}
	});
var $mdgriffith$elm_ui$Internal$Model$ChildrenBehind = function (a) {
	return {$: 'ChildrenBehind', a: a};
};
var $mdgriffith$elm_ui$Internal$Model$ChildrenBehindAndInFront = F2(
	function (a, b) {
		return {$: 'ChildrenBehindAndInFront', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Model$ChildrenInFront = function (a) {
	return {$: 'ChildrenInFront', a: a};
};
var $mdgriffith$elm_ui$Internal$Model$nearbyElement = F2(
	function (location, elem) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class(
					function () {
						switch (location.$) {
							case 'Above':
								return A2(
									$elm$core$String$join,
									' ',
									_List_fromArray(
										[$mdgriffith$elm_ui$Internal$Style$classes.nearby, $mdgriffith$elm_ui$Internal$Style$classes.single, $mdgriffith$elm_ui$Internal$Style$classes.above]));
							case 'Below':
								return A2(
									$elm$core$String$join,
									' ',
									_List_fromArray(
										[$mdgriffith$elm_ui$Internal$Style$classes.nearby, $mdgriffith$elm_ui$Internal$Style$classes.single, $mdgriffith$elm_ui$Internal$Style$classes.below]));
							case 'OnRight':
								return A2(
									$elm$core$String$join,
									' ',
									_List_fromArray(
										[$mdgriffith$elm_ui$Internal$Style$classes.nearby, $mdgriffith$elm_ui$Internal$Style$classes.single, $mdgriffith$elm_ui$Internal$Style$classes.onRight]));
							case 'OnLeft':
								return A2(
									$elm$core$String$join,
									' ',
									_List_fromArray(
										[$mdgriffith$elm_ui$Internal$Style$classes.nearby, $mdgriffith$elm_ui$Internal$Style$classes.single, $mdgriffith$elm_ui$Internal$Style$classes.onLeft]));
							case 'InFront':
								return A2(
									$elm$core$String$join,
									' ',
									_List_fromArray(
										[$mdgriffith$elm_ui$Internal$Style$classes.nearby, $mdgriffith$elm_ui$Internal$Style$classes.single, $mdgriffith$elm_ui$Internal$Style$classes.inFront]));
							default:
								return A2(
									$elm$core$String$join,
									' ',
									_List_fromArray(
										[$mdgriffith$elm_ui$Internal$Style$classes.nearby, $mdgriffith$elm_ui$Internal$Style$classes.single, $mdgriffith$elm_ui$Internal$Style$classes.behind]));
						}
					}())
				]),
			_List_fromArray(
				[
					function () {
					switch (elem.$) {
						case 'Empty':
							return $elm$virtual_dom$VirtualDom$text('');
						case 'Text':
							var str = elem.a;
							return $mdgriffith$elm_ui$Internal$Model$textElement(str);
						case 'Unstyled':
							var html = elem.a;
							return html($mdgriffith$elm_ui$Internal$Model$asEl);
						default:
							var styled = elem.a;
							return A2(styled.html, $mdgriffith$elm_ui$Internal$Model$NoStyleSheet, $mdgriffith$elm_ui$Internal$Model$asEl);
					}
				}()
				]));
	});
var $mdgriffith$elm_ui$Internal$Model$addNearbyElement = F3(
	function (location, elem, existing) {
		var nearby = A2($mdgriffith$elm_ui$Internal$Model$nearbyElement, location, elem);
		switch (existing.$) {
			case 'NoNearbyChildren':
				if (location.$ === 'Behind') {
					return $mdgriffith$elm_ui$Internal$Model$ChildrenBehind(
						_List_fromArray(
							[nearby]));
				} else {
					return $mdgriffith$elm_ui$Internal$Model$ChildrenInFront(
						_List_fromArray(
							[nearby]));
				}
			case 'ChildrenBehind':
				var existingBehind = existing.a;
				if (location.$ === 'Behind') {
					return $mdgriffith$elm_ui$Internal$Model$ChildrenBehind(
						A2($elm$core$List$cons, nearby, existingBehind));
				} else {
					return A2(
						$mdgriffith$elm_ui$Internal$Model$ChildrenBehindAndInFront,
						existingBehind,
						_List_fromArray(
							[nearby]));
				}
			case 'ChildrenInFront':
				var existingInFront = existing.a;
				if (location.$ === 'Behind') {
					return A2(
						$mdgriffith$elm_ui$Internal$Model$ChildrenBehindAndInFront,
						_List_fromArray(
							[nearby]),
						existingInFront);
				} else {
					return $mdgriffith$elm_ui$Internal$Model$ChildrenInFront(
						A2($elm$core$List$cons, nearby, existingInFront));
				}
			default:
				var existingBehind = existing.a;
				var existingInFront = existing.b;
				if (location.$ === 'Behind') {
					return A2(
						$mdgriffith$elm_ui$Internal$Model$ChildrenBehindAndInFront,
						A2($elm$core$List$cons, nearby, existingBehind),
						existingInFront);
				} else {
					return A2(
						$mdgriffith$elm_ui$Internal$Model$ChildrenBehindAndInFront,
						existingBehind,
						A2($elm$core$List$cons, nearby, existingInFront));
				}
		}
	});
var $mdgriffith$elm_ui$Internal$Model$Embedded = F2(
	function (a, b) {
		return {$: 'Embedded', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Model$NodeName = function (a) {
	return {$: 'NodeName', a: a};
};
var $mdgriffith$elm_ui$Internal$Model$addNodeName = F2(
	function (newNode, old) {
		switch (old.$) {
			case 'Generic':
				return $mdgriffith$elm_ui$Internal$Model$NodeName(newNode);
			case 'NodeName':
				var name = old.a;
				return A2($mdgriffith$elm_ui$Internal$Model$Embedded, name, newNode);
			default:
				var x = old.a;
				var y = old.b;
				return A2($mdgriffith$elm_ui$Internal$Model$Embedded, x, y);
		}
	});
var $mdgriffith$elm_ui$Internal$Model$alignXName = function (align) {
	switch (align.$) {
		case 'Left':
			return $mdgriffith$elm_ui$Internal$Style$classes.alignedHorizontally + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.alignLeft);
		case 'Right':
			return $mdgriffith$elm_ui$Internal$Style$classes.alignedHorizontally + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.alignRight);
		default:
			return $mdgriffith$elm_ui$Internal$Style$classes.alignedHorizontally + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.alignCenterX);
	}
};
var $mdgriffith$elm_ui$Internal$Model$alignYName = function (align) {
	switch (align.$) {
		case 'Top':
			return $mdgriffith$elm_ui$Internal$Style$classes.alignedVertically + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.alignTop);
		case 'Bottom':
			return $mdgriffith$elm_ui$Internal$Style$classes.alignedVertically + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.alignBottom);
		default:
			return $mdgriffith$elm_ui$Internal$Style$classes.alignedVertically + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.alignCenterY);
	}
};
var $elm$virtual_dom$VirtualDom$attribute = F2(
	function (key, value) {
		return A2(
			_VirtualDom_attribute,
			_VirtualDom_noOnOrFormAction(key),
			_VirtualDom_noJavaScriptOrHtmlUri(value));
	});
var $mdgriffith$elm_ui$Internal$Model$FullTransform = F4(
	function (a, b, c, d) {
		return {$: 'FullTransform', a: a, b: b, c: c, d: d};
	});
var $mdgriffith$elm_ui$Internal$Model$Moved = function (a) {
	return {$: 'Moved', a: a};
};
var $mdgriffith$elm_ui$Internal$Model$composeTransformation = F2(
	function (transform, component) {
		switch (transform.$) {
			case 'Untransformed':
				switch (component.$) {
					case 'MoveX':
						var x = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(
							_Utils_Tuple3(x, 0, 0));
					case 'MoveY':
						var y = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(
							_Utils_Tuple3(0, y, 0));
					case 'MoveZ':
						var z = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(
							_Utils_Tuple3(0, 0, z));
					case 'MoveXYZ':
						var xyz = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(xyz);
					case 'Rotate':
						var xyz = component.a;
						var angle = component.b;
						return A4(
							$mdgriffith$elm_ui$Internal$Model$FullTransform,
							_Utils_Tuple3(0, 0, 0),
							_Utils_Tuple3(1, 1, 1),
							xyz,
							angle);
					default:
						var xyz = component.a;
						return A4(
							$mdgriffith$elm_ui$Internal$Model$FullTransform,
							_Utils_Tuple3(0, 0, 0),
							xyz,
							_Utils_Tuple3(0, 0, 1),
							0);
				}
			case 'Moved':
				var moved = transform.a;
				var x = moved.a;
				var y = moved.b;
				var z = moved.c;
				switch (component.$) {
					case 'MoveX':
						var newX = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(
							_Utils_Tuple3(newX, y, z));
					case 'MoveY':
						var newY = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(
							_Utils_Tuple3(x, newY, z));
					case 'MoveZ':
						var newZ = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(
							_Utils_Tuple3(x, y, newZ));
					case 'MoveXYZ':
						var xyz = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(xyz);
					case 'Rotate':
						var xyz = component.a;
						var angle = component.b;
						return A4(
							$mdgriffith$elm_ui$Internal$Model$FullTransform,
							moved,
							_Utils_Tuple3(1, 1, 1),
							xyz,
							angle);
					default:
						var scale = component.a;
						return A4(
							$mdgriffith$elm_ui$Internal$Model$FullTransform,
							moved,
							scale,
							_Utils_Tuple3(0, 0, 1),
							0);
				}
			default:
				var moved = transform.a;
				var x = moved.a;
				var y = moved.b;
				var z = moved.c;
				var scaled = transform.b;
				var origin = transform.c;
				var angle = transform.d;
				switch (component.$) {
					case 'MoveX':
						var newX = component.a;
						return A4(
							$mdgriffith$elm_ui$Internal$Model$FullTransform,
							_Utils_Tuple3(newX, y, z),
							scaled,
							origin,
							angle);
					case 'MoveY':
						var newY = component.a;
						return A4(
							$mdgriffith$elm_ui$Internal$Model$FullTransform,
							_Utils_Tuple3(x, newY, z),
							scaled,
							origin,
							angle);
					case 'MoveZ':
						var newZ = component.a;
						return A4(
							$mdgriffith$elm_ui$Internal$Model$FullTransform,
							_Utils_Tuple3(x, y, newZ),
							scaled,
							origin,
							angle);
					case 'MoveXYZ':
						var newMove = component.a;
						return A4($mdgriffith$elm_ui$Internal$Model$FullTransform, newMove, scaled, origin, angle);
					case 'Rotate':
						var newOrigin = component.a;
						var newAngle = component.b;
						return A4($mdgriffith$elm_ui$Internal$Model$FullTransform, moved, scaled, newOrigin, newAngle);
					default:
						var newScale = component.a;
						return A4($mdgriffith$elm_ui$Internal$Model$FullTransform, moved, newScale, origin, angle);
				}
		}
	});
var $mdgriffith$elm_ui$Internal$Flag$height = $mdgriffith$elm_ui$Internal$Flag$flag(7);
var $mdgriffith$elm_ui$Internal$Flag$heightContent = $mdgriffith$elm_ui$Internal$Flag$flag(36);
var $mdgriffith$elm_ui$Internal$Flag$merge = F2(
	function (_v0, _v1) {
		var one = _v0.a;
		var two = _v0.b;
		var three = _v1.a;
		var four = _v1.b;
		return A2($mdgriffith$elm_ui$Internal$Flag$Field, one | three, two | four);
	});
var $mdgriffith$elm_ui$Internal$Flag$none = A2($mdgriffith$elm_ui$Internal$Flag$Field, 0, 0);
var $mdgriffith$elm_ui$Internal$Model$renderHeight = function (h) {
	switch (h.$) {
		case 'Px':
			var px = h.a;
			var val = $elm$core$String$fromInt(px);
			var name = 'height-px-' + val;
			return _Utils_Tuple3(
				$mdgriffith$elm_ui$Internal$Flag$none,
				$mdgriffith$elm_ui$Internal$Style$classes.heightExact + (' ' + name),
				_List_fromArray(
					[
						A3($mdgriffith$elm_ui$Internal$Model$Single, name, 'height', val + 'px')
					]));
		case 'Content':
			return _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$heightContent, $mdgriffith$elm_ui$Internal$Flag$none),
				$mdgriffith$elm_ui$Internal$Style$classes.heightContent,
				_List_Nil);
		case 'Fill':
			var portion = h.a;
			return (portion === 1) ? _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$heightFill, $mdgriffith$elm_ui$Internal$Flag$none),
				$mdgriffith$elm_ui$Internal$Style$classes.heightFill,
				_List_Nil) : _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$heightFill, $mdgriffith$elm_ui$Internal$Flag$none),
				$mdgriffith$elm_ui$Internal$Style$classes.heightFillPortion + (' height-fill-' + $elm$core$String$fromInt(portion)),
				_List_fromArray(
					[
						A3(
						$mdgriffith$elm_ui$Internal$Model$Single,
						$mdgriffith$elm_ui$Internal$Style$classes.any + ('.' + ($mdgriffith$elm_ui$Internal$Style$classes.column + (' > ' + $mdgriffith$elm_ui$Internal$Style$dot(
							'height-fill-' + $elm$core$String$fromInt(portion))))),
						'flex-grow',
						$elm$core$String$fromInt(portion * 100000))
					]));
		case 'Min':
			var minSize = h.a;
			var len = h.b;
			var cls = 'min-height-' + $elm$core$String$fromInt(minSize);
			var style = A3(
				$mdgriffith$elm_ui$Internal$Model$Single,
				cls,
				'min-height',
				$elm$core$String$fromInt(minSize) + 'px !important');
			var _v1 = $mdgriffith$elm_ui$Internal$Model$renderHeight(len);
			var newFlag = _v1.a;
			var newAttrs = _v1.b;
			var newStyle = _v1.c;
			return _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$heightBetween, newFlag),
				cls + (' ' + newAttrs),
				A2($elm$core$List$cons, style, newStyle));
		default:
			var maxSize = h.a;
			var len = h.b;
			var cls = 'max-height-' + $elm$core$String$fromInt(maxSize);
			var style = A3(
				$mdgriffith$elm_ui$Internal$Model$Single,
				cls,
				'max-height',
				$elm$core$String$fromInt(maxSize) + 'px');
			var _v2 = $mdgriffith$elm_ui$Internal$Model$renderHeight(len);
			var newFlag = _v2.a;
			var newAttrs = _v2.b;
			var newStyle = _v2.c;
			return _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$heightBetween, newFlag),
				cls + (' ' + newAttrs),
				A2($elm$core$List$cons, style, newStyle));
	}
};
var $mdgriffith$elm_ui$Internal$Flag$widthContent = $mdgriffith$elm_ui$Internal$Flag$flag(38);
var $mdgriffith$elm_ui$Internal$Model$renderWidth = function (w) {
	switch (w.$) {
		case 'Px':
			var px = w.a;
			return _Utils_Tuple3(
				$mdgriffith$elm_ui$Internal$Flag$none,
				$mdgriffith$elm_ui$Internal$Style$classes.widthExact + (' width-px-' + $elm$core$String$fromInt(px)),
				_List_fromArray(
					[
						A3(
						$mdgriffith$elm_ui$Internal$Model$Single,
						'width-px-' + $elm$core$String$fromInt(px),
						'width',
						$elm$core$String$fromInt(px) + 'px')
					]));
		case 'Content':
			return _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$widthContent, $mdgriffith$elm_ui$Internal$Flag$none),
				$mdgriffith$elm_ui$Internal$Style$classes.widthContent,
				_List_Nil);
		case 'Fill':
			var portion = w.a;
			return (portion === 1) ? _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$widthFill, $mdgriffith$elm_ui$Internal$Flag$none),
				$mdgriffith$elm_ui$Internal$Style$classes.widthFill,
				_List_Nil) : _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$widthFill, $mdgriffith$elm_ui$Internal$Flag$none),
				$mdgriffith$elm_ui$Internal$Style$classes.widthFillPortion + (' width-fill-' + $elm$core$String$fromInt(portion)),
				_List_fromArray(
					[
						A3(
						$mdgriffith$elm_ui$Internal$Model$Single,
						$mdgriffith$elm_ui$Internal$Style$classes.any + ('.' + ($mdgriffith$elm_ui$Internal$Style$classes.row + (' > ' + $mdgriffith$elm_ui$Internal$Style$dot(
							'width-fill-' + $elm$core$String$fromInt(portion))))),
						'flex-grow',
						$elm$core$String$fromInt(portion * 100000))
					]));
		case 'Min':
			var minSize = w.a;
			var len = w.b;
			var cls = 'min-width-' + $elm$core$String$fromInt(minSize);
			var style = A3(
				$mdgriffith$elm_ui$Internal$Model$Single,
				cls,
				'min-width',
				$elm$core$String$fromInt(minSize) + 'px');
			var _v1 = $mdgriffith$elm_ui$Internal$Model$renderWidth(len);
			var newFlag = _v1.a;
			var newAttrs = _v1.b;
			var newStyle = _v1.c;
			return _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$widthBetween, newFlag),
				cls + (' ' + newAttrs),
				A2($elm$core$List$cons, style, newStyle));
		default:
			var maxSize = w.a;
			var len = w.b;
			var cls = 'max-width-' + $elm$core$String$fromInt(maxSize);
			var style = A3(
				$mdgriffith$elm_ui$Internal$Model$Single,
				cls,
				'max-width',
				$elm$core$String$fromInt(maxSize) + 'px');
			var _v2 = $mdgriffith$elm_ui$Internal$Model$renderWidth(len);
			var newFlag = _v2.a;
			var newAttrs = _v2.b;
			var newStyle = _v2.c;
			return _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$widthBetween, newFlag),
				cls + (' ' + newAttrs),
				A2($elm$core$List$cons, style, newStyle));
	}
};
var $mdgriffith$elm_ui$Internal$Flag$borderWidth = $mdgriffith$elm_ui$Internal$Flag$flag(27);
var $elm$core$Basics$ge = _Utils_ge;
var $mdgriffith$elm_ui$Internal$Model$skippable = F2(
	function (flag, style) {
		if (_Utils_eq(flag, $mdgriffith$elm_ui$Internal$Flag$borderWidth)) {
			if (style.$ === 'Single') {
				var val = style.c;
				switch (val) {
					case '0px':
						return true;
					case '1px':
						return true;
					case '2px':
						return true;
					case '3px':
						return true;
					case '4px':
						return true;
					case '5px':
						return true;
					case '6px':
						return true;
					default:
						return false;
				}
			} else {
				return false;
			}
		} else {
			switch (style.$) {
				case 'FontSize':
					var i = style.a;
					return (i >= 8) && (i <= 32);
				case 'PaddingStyle':
					var name = style.a;
					var t = style.b;
					var r = style.c;
					var b = style.d;
					var l = style.e;
					return _Utils_eq(t, b) && (_Utils_eq(t, r) && (_Utils_eq(t, l) && ((t >= 0) && (t <= 24))));
				default:
					return false;
			}
		}
	});
var $mdgriffith$elm_ui$Internal$Flag$width = $mdgriffith$elm_ui$Internal$Flag$flag(6);
var $mdgriffith$elm_ui$Internal$Flag$xAlign = $mdgriffith$elm_ui$Internal$Flag$flag(30);
var $mdgriffith$elm_ui$Internal$Flag$yAlign = $mdgriffith$elm_ui$Internal$Flag$flag(29);
var $mdgriffith$elm_ui$Internal$Model$gatherAttrRecursive = F8(
	function (classes, node, has, transform, styles, attrs, children, elementAttrs) {
		gatherAttrRecursive:
		while (true) {
			if (!elementAttrs.b) {
				var _v1 = $mdgriffith$elm_ui$Internal$Model$transformClass(transform);
				if (_v1.$ === 'Nothing') {
					return {
						attributes: A2(
							$elm$core$List$cons,
							$elm$html$Html$Attributes$class(classes),
							attrs),
						children: children,
						has: has,
						node: node,
						styles: styles
					};
				} else {
					var _class = _v1.a;
					return {
						attributes: A2(
							$elm$core$List$cons,
							$elm$html$Html$Attributes$class(classes + (' ' + _class)),
							attrs),
						children: children,
						has: has,
						node: node,
						styles: A2(
							$elm$core$List$cons,
							$mdgriffith$elm_ui$Internal$Model$Transform(transform),
							styles)
					};
				}
			} else {
				var attribute = elementAttrs.a;
				var remaining = elementAttrs.b;
				switch (attribute.$) {
					case 'NoAttribute':
						var $temp$classes = classes,
							$temp$node = node,
							$temp$has = has,
							$temp$transform = transform,
							$temp$styles = styles,
							$temp$attrs = attrs,
							$temp$children = children,
							$temp$elementAttrs = remaining;
						classes = $temp$classes;
						node = $temp$node;
						has = $temp$has;
						transform = $temp$transform;
						styles = $temp$styles;
						attrs = $temp$attrs;
						children = $temp$children;
						elementAttrs = $temp$elementAttrs;
						continue gatherAttrRecursive;
					case 'Class':
						var flag = attribute.a;
						var exactClassName = attribute.b;
						if (A2($mdgriffith$elm_ui$Internal$Flag$present, flag, has)) {
							var $temp$classes = classes,
								$temp$node = node,
								$temp$has = has,
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						} else {
							var $temp$classes = exactClassName + (' ' + classes),
								$temp$node = node,
								$temp$has = A2($mdgriffith$elm_ui$Internal$Flag$add, flag, has),
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						}
					case 'Attr':
						var actualAttribute = attribute.a;
						var $temp$classes = classes,
							$temp$node = node,
							$temp$has = has,
							$temp$transform = transform,
							$temp$styles = styles,
							$temp$attrs = A2($elm$core$List$cons, actualAttribute, attrs),
							$temp$children = children,
							$temp$elementAttrs = remaining;
						classes = $temp$classes;
						node = $temp$node;
						has = $temp$has;
						transform = $temp$transform;
						styles = $temp$styles;
						attrs = $temp$attrs;
						children = $temp$children;
						elementAttrs = $temp$elementAttrs;
						continue gatherAttrRecursive;
					case 'StyleClass':
						var flag = attribute.a;
						var style = attribute.b;
						if (A2($mdgriffith$elm_ui$Internal$Flag$present, flag, has)) {
							var $temp$classes = classes,
								$temp$node = node,
								$temp$has = has,
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						} else {
							if (A2($mdgriffith$elm_ui$Internal$Model$skippable, flag, style)) {
								var $temp$classes = $mdgriffith$elm_ui$Internal$Model$getStyleName(style) + (' ' + classes),
									$temp$node = node,
									$temp$has = A2($mdgriffith$elm_ui$Internal$Flag$add, flag, has),
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = attrs,
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							} else {
								var $temp$classes = $mdgriffith$elm_ui$Internal$Model$getStyleName(style) + (' ' + classes),
									$temp$node = node,
									$temp$has = A2($mdgriffith$elm_ui$Internal$Flag$add, flag, has),
									$temp$transform = transform,
									$temp$styles = A2($elm$core$List$cons, style, styles),
									$temp$attrs = attrs,
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							}
						}
					case 'TransformComponent':
						var flag = attribute.a;
						var component = attribute.b;
						var $temp$classes = classes,
							$temp$node = node,
							$temp$has = A2($mdgriffith$elm_ui$Internal$Flag$add, flag, has),
							$temp$transform = A2($mdgriffith$elm_ui$Internal$Model$composeTransformation, transform, component),
							$temp$styles = styles,
							$temp$attrs = attrs,
							$temp$children = children,
							$temp$elementAttrs = remaining;
						classes = $temp$classes;
						node = $temp$node;
						has = $temp$has;
						transform = $temp$transform;
						styles = $temp$styles;
						attrs = $temp$attrs;
						children = $temp$children;
						elementAttrs = $temp$elementAttrs;
						continue gatherAttrRecursive;
					case 'Width':
						var width = attribute.a;
						if (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$width, has)) {
							var $temp$classes = classes,
								$temp$node = node,
								$temp$has = has,
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						} else {
							switch (width.$) {
								case 'Px':
									var px = width.a;
									var $temp$classes = ($mdgriffith$elm_ui$Internal$Style$classes.widthExact + (' width-px-' + $elm$core$String$fromInt(px))) + (' ' + classes),
										$temp$node = node,
										$temp$has = A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$width, has),
										$temp$transform = transform,
										$temp$styles = A2(
										$elm$core$List$cons,
										A3(
											$mdgriffith$elm_ui$Internal$Model$Single,
											'width-px-' + $elm$core$String$fromInt(px),
											'width',
											$elm$core$String$fromInt(px) + 'px'),
										styles),
										$temp$attrs = attrs,
										$temp$children = children,
										$temp$elementAttrs = remaining;
									classes = $temp$classes;
									node = $temp$node;
									has = $temp$has;
									transform = $temp$transform;
									styles = $temp$styles;
									attrs = $temp$attrs;
									children = $temp$children;
									elementAttrs = $temp$elementAttrs;
									continue gatherAttrRecursive;
								case 'Content':
									var $temp$classes = classes + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.widthContent),
										$temp$node = node,
										$temp$has = A2(
										$mdgriffith$elm_ui$Internal$Flag$add,
										$mdgriffith$elm_ui$Internal$Flag$widthContent,
										A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$width, has)),
										$temp$transform = transform,
										$temp$styles = styles,
										$temp$attrs = attrs,
										$temp$children = children,
										$temp$elementAttrs = remaining;
									classes = $temp$classes;
									node = $temp$node;
									has = $temp$has;
									transform = $temp$transform;
									styles = $temp$styles;
									attrs = $temp$attrs;
									children = $temp$children;
									elementAttrs = $temp$elementAttrs;
									continue gatherAttrRecursive;
								case 'Fill':
									var portion = width.a;
									if (portion === 1) {
										var $temp$classes = classes + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.widthFill),
											$temp$node = node,
											$temp$has = A2(
											$mdgriffith$elm_ui$Internal$Flag$add,
											$mdgriffith$elm_ui$Internal$Flag$widthFill,
											A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$width, has)),
											$temp$transform = transform,
											$temp$styles = styles,
											$temp$attrs = attrs,
											$temp$children = children,
											$temp$elementAttrs = remaining;
										classes = $temp$classes;
										node = $temp$node;
										has = $temp$has;
										transform = $temp$transform;
										styles = $temp$styles;
										attrs = $temp$attrs;
										children = $temp$children;
										elementAttrs = $temp$elementAttrs;
										continue gatherAttrRecursive;
									} else {
										var $temp$classes = classes + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.widthFillPortion + (' width-fill-' + $elm$core$String$fromInt(portion)))),
											$temp$node = node,
											$temp$has = A2(
											$mdgriffith$elm_ui$Internal$Flag$add,
											$mdgriffith$elm_ui$Internal$Flag$widthFill,
											A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$width, has)),
											$temp$transform = transform,
											$temp$styles = A2(
											$elm$core$List$cons,
											A3(
												$mdgriffith$elm_ui$Internal$Model$Single,
												$mdgriffith$elm_ui$Internal$Style$classes.any + ('.' + ($mdgriffith$elm_ui$Internal$Style$classes.row + (' > ' + $mdgriffith$elm_ui$Internal$Style$dot(
													'width-fill-' + $elm$core$String$fromInt(portion))))),
												'flex-grow',
												$elm$core$String$fromInt(portion * 100000)),
											styles),
											$temp$attrs = attrs,
											$temp$children = children,
											$temp$elementAttrs = remaining;
										classes = $temp$classes;
										node = $temp$node;
										has = $temp$has;
										transform = $temp$transform;
										styles = $temp$styles;
										attrs = $temp$attrs;
										children = $temp$children;
										elementAttrs = $temp$elementAttrs;
										continue gatherAttrRecursive;
									}
								default:
									var _v4 = $mdgriffith$elm_ui$Internal$Model$renderWidth(width);
									var addToFlags = _v4.a;
									var newClass = _v4.b;
									var newStyles = _v4.c;
									var $temp$classes = classes + (' ' + newClass),
										$temp$node = node,
										$temp$has = A2(
										$mdgriffith$elm_ui$Internal$Flag$merge,
										addToFlags,
										A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$width, has)),
										$temp$transform = transform,
										$temp$styles = _Utils_ap(newStyles, styles),
										$temp$attrs = attrs,
										$temp$children = children,
										$temp$elementAttrs = remaining;
									classes = $temp$classes;
									node = $temp$node;
									has = $temp$has;
									transform = $temp$transform;
									styles = $temp$styles;
									attrs = $temp$attrs;
									children = $temp$children;
									elementAttrs = $temp$elementAttrs;
									continue gatherAttrRecursive;
							}
						}
					case 'Height':
						var height = attribute.a;
						if (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$height, has)) {
							var $temp$classes = classes,
								$temp$node = node,
								$temp$has = has,
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						} else {
							switch (height.$) {
								case 'Px':
									var px = height.a;
									var val = $elm$core$String$fromInt(px) + 'px';
									var name = 'height-px-' + val;
									var $temp$classes = $mdgriffith$elm_ui$Internal$Style$classes.heightExact + (' ' + (name + (' ' + classes))),
										$temp$node = node,
										$temp$has = A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$height, has),
										$temp$transform = transform,
										$temp$styles = A2(
										$elm$core$List$cons,
										A3($mdgriffith$elm_ui$Internal$Model$Single, name, 'height ', val),
										styles),
										$temp$attrs = attrs,
										$temp$children = children,
										$temp$elementAttrs = remaining;
									classes = $temp$classes;
									node = $temp$node;
									has = $temp$has;
									transform = $temp$transform;
									styles = $temp$styles;
									attrs = $temp$attrs;
									children = $temp$children;
									elementAttrs = $temp$elementAttrs;
									continue gatherAttrRecursive;
								case 'Content':
									var $temp$classes = $mdgriffith$elm_ui$Internal$Style$classes.heightContent + (' ' + classes),
										$temp$node = node,
										$temp$has = A2(
										$mdgriffith$elm_ui$Internal$Flag$add,
										$mdgriffith$elm_ui$Internal$Flag$heightContent,
										A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$height, has)),
										$temp$transform = transform,
										$temp$styles = styles,
										$temp$attrs = attrs,
										$temp$children = children,
										$temp$elementAttrs = remaining;
									classes = $temp$classes;
									node = $temp$node;
									has = $temp$has;
									transform = $temp$transform;
									styles = $temp$styles;
									attrs = $temp$attrs;
									children = $temp$children;
									elementAttrs = $temp$elementAttrs;
									continue gatherAttrRecursive;
								case 'Fill':
									var portion = height.a;
									if (portion === 1) {
										var $temp$classes = $mdgriffith$elm_ui$Internal$Style$classes.heightFill + (' ' + classes),
											$temp$node = node,
											$temp$has = A2(
											$mdgriffith$elm_ui$Internal$Flag$add,
											$mdgriffith$elm_ui$Internal$Flag$heightFill,
											A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$height, has)),
											$temp$transform = transform,
											$temp$styles = styles,
											$temp$attrs = attrs,
											$temp$children = children,
											$temp$elementAttrs = remaining;
										classes = $temp$classes;
										node = $temp$node;
										has = $temp$has;
										transform = $temp$transform;
										styles = $temp$styles;
										attrs = $temp$attrs;
										children = $temp$children;
										elementAttrs = $temp$elementAttrs;
										continue gatherAttrRecursive;
									} else {
										var $temp$classes = classes + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.heightFillPortion + (' height-fill-' + $elm$core$String$fromInt(portion)))),
											$temp$node = node,
											$temp$has = A2(
											$mdgriffith$elm_ui$Internal$Flag$add,
											$mdgriffith$elm_ui$Internal$Flag$heightFill,
											A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$height, has)),
											$temp$transform = transform,
											$temp$styles = A2(
											$elm$core$List$cons,
											A3(
												$mdgriffith$elm_ui$Internal$Model$Single,
												$mdgriffith$elm_ui$Internal$Style$classes.any + ('.' + ($mdgriffith$elm_ui$Internal$Style$classes.column + (' > ' + $mdgriffith$elm_ui$Internal$Style$dot(
													'height-fill-' + $elm$core$String$fromInt(portion))))),
												'flex-grow',
												$elm$core$String$fromInt(portion * 100000)),
											styles),
											$temp$attrs = attrs,
											$temp$children = children,
											$temp$elementAttrs = remaining;
										classes = $temp$classes;
										node = $temp$node;
										has = $temp$has;
										transform = $temp$transform;
										styles = $temp$styles;
										attrs = $temp$attrs;
										children = $temp$children;
										elementAttrs = $temp$elementAttrs;
										continue gatherAttrRecursive;
									}
								default:
									var _v6 = $mdgriffith$elm_ui$Internal$Model$renderHeight(height);
									var addToFlags = _v6.a;
									var newClass = _v6.b;
									var newStyles = _v6.c;
									var $temp$classes = classes + (' ' + newClass),
										$temp$node = node,
										$temp$has = A2(
										$mdgriffith$elm_ui$Internal$Flag$merge,
										addToFlags,
										A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$height, has)),
										$temp$transform = transform,
										$temp$styles = _Utils_ap(newStyles, styles),
										$temp$attrs = attrs,
										$temp$children = children,
										$temp$elementAttrs = remaining;
									classes = $temp$classes;
									node = $temp$node;
									has = $temp$has;
									transform = $temp$transform;
									styles = $temp$styles;
									attrs = $temp$attrs;
									children = $temp$children;
									elementAttrs = $temp$elementAttrs;
									continue gatherAttrRecursive;
							}
						}
					case 'Describe':
						var description = attribute.a;
						switch (description.$) {
							case 'Main':
								var $temp$classes = classes,
									$temp$node = A2($mdgriffith$elm_ui$Internal$Model$addNodeName, 'main', node),
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = attrs,
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							case 'Navigation':
								var $temp$classes = classes,
									$temp$node = A2($mdgriffith$elm_ui$Internal$Model$addNodeName, 'nav', node),
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = attrs,
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							case 'ContentInfo':
								var $temp$classes = classes,
									$temp$node = A2($mdgriffith$elm_ui$Internal$Model$addNodeName, 'footer', node),
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = attrs,
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							case 'Complementary':
								var $temp$classes = classes,
									$temp$node = A2($mdgriffith$elm_ui$Internal$Model$addNodeName, 'aside', node),
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = attrs,
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							case 'Heading':
								var i = description.a;
								if (i <= 1) {
									var $temp$classes = classes,
										$temp$node = A2($mdgriffith$elm_ui$Internal$Model$addNodeName, 'h1', node),
										$temp$has = has,
										$temp$transform = transform,
										$temp$styles = styles,
										$temp$attrs = attrs,
										$temp$children = children,
										$temp$elementAttrs = remaining;
									classes = $temp$classes;
									node = $temp$node;
									has = $temp$has;
									transform = $temp$transform;
									styles = $temp$styles;
									attrs = $temp$attrs;
									children = $temp$children;
									elementAttrs = $temp$elementAttrs;
									continue gatherAttrRecursive;
								} else {
									if (i < 7) {
										var $temp$classes = classes,
											$temp$node = A2(
											$mdgriffith$elm_ui$Internal$Model$addNodeName,
											'h' + $elm$core$String$fromInt(i),
											node),
											$temp$has = has,
											$temp$transform = transform,
											$temp$styles = styles,
											$temp$attrs = attrs,
											$temp$children = children,
											$temp$elementAttrs = remaining;
										classes = $temp$classes;
										node = $temp$node;
										has = $temp$has;
										transform = $temp$transform;
										styles = $temp$styles;
										attrs = $temp$attrs;
										children = $temp$children;
										elementAttrs = $temp$elementAttrs;
										continue gatherAttrRecursive;
									} else {
										var $temp$classes = classes,
											$temp$node = A2($mdgriffith$elm_ui$Internal$Model$addNodeName, 'h6', node),
											$temp$has = has,
											$temp$transform = transform,
											$temp$styles = styles,
											$temp$attrs = attrs,
											$temp$children = children,
											$temp$elementAttrs = remaining;
										classes = $temp$classes;
										node = $temp$node;
										has = $temp$has;
										transform = $temp$transform;
										styles = $temp$styles;
										attrs = $temp$attrs;
										children = $temp$children;
										elementAttrs = $temp$elementAttrs;
										continue gatherAttrRecursive;
									}
								}
							case 'Paragraph':
								var $temp$classes = classes,
									$temp$node = node,
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = attrs,
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							case 'Button':
								var $temp$classes = classes,
									$temp$node = node,
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = A2(
									$elm$core$List$cons,
									A2($elm$virtual_dom$VirtualDom$attribute, 'role', 'button'),
									attrs),
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							case 'Label':
								var label = description.a;
								var $temp$classes = classes,
									$temp$node = node,
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = A2(
									$elm$core$List$cons,
									A2($elm$virtual_dom$VirtualDom$attribute, 'aria-label', label),
									attrs),
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							case 'LivePolite':
								var $temp$classes = classes,
									$temp$node = node,
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = A2(
									$elm$core$List$cons,
									A2($elm$virtual_dom$VirtualDom$attribute, 'aria-live', 'polite'),
									attrs),
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							default:
								var $temp$classes = classes,
									$temp$node = node,
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = A2(
									$elm$core$List$cons,
									A2($elm$virtual_dom$VirtualDom$attribute, 'aria-live', 'assertive'),
									attrs),
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
						}
					case 'Nearby':
						var location = attribute.a;
						var elem = attribute.b;
						var newStyles = function () {
							switch (elem.$) {
								case 'Empty':
									return styles;
								case 'Text':
									var str = elem.a;
									return styles;
								case 'Unstyled':
									var html = elem.a;
									return styles;
								default:
									var styled = elem.a;
									return _Utils_ap(styles, styled.styles);
							}
						}();
						var $temp$classes = classes,
							$temp$node = node,
							$temp$has = has,
							$temp$transform = transform,
							$temp$styles = newStyles,
							$temp$attrs = attrs,
							$temp$children = A3($mdgriffith$elm_ui$Internal$Model$addNearbyElement, location, elem, children),
							$temp$elementAttrs = remaining;
						classes = $temp$classes;
						node = $temp$node;
						has = $temp$has;
						transform = $temp$transform;
						styles = $temp$styles;
						attrs = $temp$attrs;
						children = $temp$children;
						elementAttrs = $temp$elementAttrs;
						continue gatherAttrRecursive;
					case 'AlignX':
						var x = attribute.a;
						if (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$xAlign, has)) {
							var $temp$classes = classes,
								$temp$node = node,
								$temp$has = has,
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						} else {
							var $temp$classes = $mdgriffith$elm_ui$Internal$Model$alignXName(x) + (' ' + classes),
								$temp$node = node,
								$temp$has = function (flags) {
								switch (x.$) {
									case 'CenterX':
										return A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$centerX, flags);
									case 'Right':
										return A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$alignRight, flags);
									default:
										return flags;
								}
							}(
								A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$xAlign, has)),
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						}
					default:
						var y = attribute.a;
						if (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$yAlign, has)) {
							var $temp$classes = classes,
								$temp$node = node,
								$temp$has = has,
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						} else {
							var $temp$classes = $mdgriffith$elm_ui$Internal$Model$alignYName(y) + (' ' + classes),
								$temp$node = node,
								$temp$has = function (flags) {
								switch (y.$) {
									case 'CenterY':
										return A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$centerY, flags);
									case 'Bottom':
										return A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$alignBottom, flags);
									default:
										return flags;
								}
							}(
								A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$yAlign, has)),
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						}
				}
			}
		}
	});
var $mdgriffith$elm_ui$Internal$Model$Untransformed = {$: 'Untransformed'};
var $mdgriffith$elm_ui$Internal$Model$untransformed = $mdgriffith$elm_ui$Internal$Model$Untransformed;
var $mdgriffith$elm_ui$Internal$Model$element = F4(
	function (context, node, attributes, children) {
		return A3(
			$mdgriffith$elm_ui$Internal$Model$createElement,
			context,
			children,
			A8(
				$mdgriffith$elm_ui$Internal$Model$gatherAttrRecursive,
				$mdgriffith$elm_ui$Internal$Model$contextClasses(context),
				node,
				$mdgriffith$elm_ui$Internal$Flag$none,
				$mdgriffith$elm_ui$Internal$Model$untransformed,
				_List_Nil,
				_List_Nil,
				$mdgriffith$elm_ui$Internal$Model$NoNearbyChildren,
				$elm$core$List$reverse(attributes)));
	});
var $mdgriffith$elm_ui$Internal$Model$Height = function (a) {
	return {$: 'Height', a: a};
};
var $mdgriffith$elm_ui$Element$height = $mdgriffith$elm_ui$Internal$Model$Height;
var $mdgriffith$elm_ui$Internal$Model$Content = {$: 'Content'};
var $mdgriffith$elm_ui$Element$shrink = $mdgriffith$elm_ui$Internal$Model$Content;
var $mdgriffith$elm_ui$Internal$Model$Width = function (a) {
	return {$: 'Width', a: a};
};
var $mdgriffith$elm_ui$Element$width = $mdgriffith$elm_ui$Internal$Model$Width;
var $mdgriffith$elm_ui$Element$el = F2(
	function (attrs, child) {
		return A4(
			$mdgriffith$elm_ui$Internal$Model$element,
			$mdgriffith$elm_ui$Internal$Model$asEl,
			$mdgriffith$elm_ui$Internal$Model$div,
			A2(
				$elm$core$List$cons,
				$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$shrink),
				A2(
					$elm$core$List$cons,
					$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$shrink),
					attrs)),
			$mdgriffith$elm_ui$Internal$Model$Unkeyed(
				_List_fromArray(
					[child])));
	});
var $mdgriffith$elm_ui$Internal$Model$Fill = function (a) {
	return {$: 'Fill', a: a};
};
var $mdgriffith$elm_ui$Element$fill = $mdgriffith$elm_ui$Internal$Model$Fill(1);
var $elm$html$Html$Attributes$height = function (n) {
	return A2(
		_VirtualDom_attribute,
		'height',
		$elm$core$String$fromInt(n));
};
var $elm$core$Basics$always = F2(
	function (a, _v0) {
		return a;
	});
var $elm$core$Basics$composeL = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var $mdgriffith$elm_ui$Internal$Model$unstyled = A2($elm$core$Basics$composeL, $mdgriffith$elm_ui$Internal$Model$Unstyled, $elm$core$Basics$always);
var $mdgriffith$elm_ui$Element$html = $mdgriffith$elm_ui$Internal$Model$unstyled;
var $mdgriffith$elm_ui$Internal$Model$Attr = function (a) {
	return {$: 'Attr', a: a};
};
var $mdgriffith$elm_ui$Element$htmlAttribute = $mdgriffith$elm_ui$Internal$Model$Attr;
var $elm$html$Html$Attributes$id = $elm$html$Html$Attributes$stringProperty('id');
var $mdgriffith$elm_ui$Internal$Model$InFront = {$: 'InFront'};
var $mdgriffith$elm_ui$Internal$Model$Nearby = F2(
	function (a, b) {
		return {$: 'Nearby', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Model$NoAttribute = {$: 'NoAttribute'};
var $mdgriffith$elm_ui$Element$createNearby = F2(
	function (loc, element) {
		if (element.$ === 'Empty') {
			return $mdgriffith$elm_ui$Internal$Model$NoAttribute;
		} else {
			return A2($mdgriffith$elm_ui$Internal$Model$Nearby, loc, element);
		}
	});
var $mdgriffith$elm_ui$Element$inFront = function (element) {
	return A2($mdgriffith$elm_ui$Element$createNearby, $mdgriffith$elm_ui$Internal$Model$InFront, element);
};
var $mdgriffith$elm_ui$Internal$Model$AlignY = function (a) {
	return {$: 'AlignY', a: a};
};
var $mdgriffith$elm_ui$Internal$Model$Bottom = {$: 'Bottom'};
var $mdgriffith$elm_ui$Element$alignBottom = $mdgriffith$elm_ui$Internal$Model$AlignY($mdgriffith$elm_ui$Internal$Model$Bottom);
var $mdgriffith$elm_ui$Internal$Model$Behind = {$: 'Behind'};
var $mdgriffith$elm_ui$Element$behindContent = function (element) {
	return A2($mdgriffith$elm_ui$Element$createNearby, $mdgriffith$elm_ui$Internal$Model$Behind, element);
};
var $elm$core$Basics$composeR = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var $andrewMacmurray$elm_simple_animation$Internal$Animation$joinWith = function (f) {
	return A2(
		$elm$core$Basics$composeR,
		$elm$core$List$map(f),
		$elm$core$String$concat);
};
var $elm$core$Set$fromList = function (list) {
	return A3($elm$core$List$foldl, $elm$core$Set$insert, $elm$core$Set$empty, list);
};
var $andrewMacmurray$elm_simple_animation$Internal$Animation$Property$escapedChars_ = $elm$core$Set$fromList(
	_List_fromArray(
		[
			_Utils_chr('.'),
			_Utils_chr(' '),
			_Utils_chr(','),
			_Utils_chr('#'),
			_Utils_chr('$'),
			_Utils_chr('%'),
			_Utils_chr('('),
			_Utils_chr(')'),
			_Utils_chr('&'),
			_Utils_chr(';'),
			_Utils_chr(':'),
			_Utils_chr('\"'),
			_Utils_chr('\''),
			_Utils_chr('*'),
			_Utils_chr('~'),
			_Utils_chr('!'),
			_Utils_chr('@'),
			_Utils_chr('^'),
			_Utils_chr('+'),
			_Utils_chr('='),
			_Utils_chr('/'),
			_Utils_chr('?'),
			_Utils_chr('>'),
			_Utils_chr('<'),
			_Utils_chr('['),
			_Utils_chr(']'),
			_Utils_chr('{'),
			_Utils_chr('}'),
			_Utils_chr('|'),
			_Utils_chr('`')
		]));
var $andrewMacmurray$elm_simple_animation$Internal$Animation$Property$escapedChars = function (c) {
	return !A2($elm$core$Set$member, c, $andrewMacmurray$elm_simple_animation$Internal$Animation$Property$escapedChars_);
};
var $elm$core$String$filter = _String_filter;
var $andrewMacmurray$elm_simple_animation$Internal$Animation$Property$escape = $elm$core$String$filter($andrewMacmurray$elm_simple_animation$Internal$Animation$Property$escapedChars);
var $andrewMacmurray$elm_simple_animation$Internal$Transform$rounded = F2(
	function (n, val) {
		return $elm$core$String$fromInt(
			$elm$core$Basics$round(val) * n);
	});
var $andrewMacmurray$elm_simple_animation$Internal$Transform$name = function (t) {
	switch (t.$) {
		case 'Translate':
			switch (t.a.$) {
				case 'Y':
					var y_ = t.a.a;
					return 'y' + A2($andrewMacmurray$elm_simple_animation$Internal$Transform$rounded, 1, y_);
				case 'X':
					var x_ = t.a.a;
					return 'x' + A2($andrewMacmurray$elm_simple_animation$Internal$Transform$rounded, 1, x_);
				default:
					var _v1 = t.a;
					var x_ = _v1.a;
					var y_ = _v1.b;
					return 'x' + (A2($andrewMacmurray$elm_simple_animation$Internal$Transform$rounded, 1, x_) + ('y' + A2($andrewMacmurray$elm_simple_animation$Internal$Transform$rounded, 1, y_)));
			}
		case 'Rotate':
			var r_ = t.a;
			return 'r' + A2($andrewMacmurray$elm_simple_animation$Internal$Transform$rounded, 1, r_);
		default:
			var x_ = t.a;
			var y_ = t.b;
			return 'sx' + (A2($andrewMacmurray$elm_simple_animation$Internal$Transform$rounded, 100, x_) + ('sy' + A2($andrewMacmurray$elm_simple_animation$Internal$Transform$rounded, 100, y_)));
	}
};
var $andrewMacmurray$elm_simple_animation$Internal$Animation$Property$rounded = F2(
	function (n, val) {
		return $elm$core$String$fromInt(
			$elm$core$Basics$round(val * n));
	});
var $andrewMacmurray$elm_simple_animation$Internal$Animation$Property$name = function (prop) {
	switch (prop.$) {
		case 'Opacity':
			var n = prop.a;
			return 'o' + A2($andrewMacmurray$elm_simple_animation$Internal$Animation$Property$rounded, 100, n);
		case 'Transform':
			var t = prop.a;
			return $andrewMacmurray$elm_simple_animation$Internal$Transform$name(t);
		default:
			var n = prop.a;
			var p = prop.b;
			return _Utils_ap(
				$andrewMacmurray$elm_simple_animation$Internal$Animation$Property$escape(n),
				$andrewMacmurray$elm_simple_animation$Internal$Animation$Property$escape(p));
	}
};
var $andrewMacmurray$elm_simple_animation$Internal$Animation$frameName = function (_v0) {
	var dur = _v0.a;
	var props = _v0.b;
	return 'f' + ($elm$core$String$fromInt(
		$elm$core$Basics$round(dur)) + A2($andrewMacmurray$elm_simple_animation$Internal$Animation$joinWith, $andrewMacmurray$elm_simple_animation$Internal$Animation$Property$name, props));
};
var $andrewMacmurray$elm_simple_animation$Internal$Animation$framesNames = $andrewMacmurray$elm_simple_animation$Internal$Animation$joinWith($andrewMacmurray$elm_simple_animation$Internal$Animation$frameName);
var $andrewMacmurray$elm_simple_animation$Internal$Animation$iterationName = function (i) {
	if (i.$ === 'Loop') {
		return 'infinite';
	} else {
		var count = i.a;
		return 'count-' + $elm$core$String$fromInt(count);
	}
};
var $andrewMacmurray$elm_simple_animation$Internal$Ease$toString = function (e) {
	switch (e.$) {
		case 'Cubic':
			var a = e.a;
			var b = e.b;
			var c = e.c;
			var d = e.d;
			return 'cubic-bezier(' + (A2(
				$elm$core$String$join,
				',',
				_List_fromArray(
					[
						$elm$core$String$fromFloat(a),
						$elm$core$String$fromFloat(b),
						$elm$core$String$fromFloat(c),
						$elm$core$String$fromFloat(d)
					])) + ')');
		case 'Linear':
			return 'linear';
		case 'Ease':
			return 'ease';
		case 'EaseIn':
			return 'ease-in';
		case 'EaseOut':
			return 'ease-out';
		default:
			return 'ease-in-out';
	}
};
var $andrewMacmurray$elm_simple_animation$Internal$Animation$optionName = function (o) {
	switch (o.$) {
		case 'Delay':
			var n = o.a;
			return 'd' + $elm$core$String$fromInt(n);
		case 'Ease':
			var ease = o.a;
			return $andrewMacmurray$elm_simple_animation$Internal$Animation$Property$escape(
				$andrewMacmurray$elm_simple_animation$Internal$Ease$toString(ease));
		case 'Iteration':
			var i = o.a;
			return $andrewMacmurray$elm_simple_animation$Internal$Animation$iterationName(i);
		case 'Yoyo':
			return 'yoyo';
		default:
			return 'rev';
	}
};
var $andrewMacmurray$elm_simple_animation$Internal$Animation$optionNames = $andrewMacmurray$elm_simple_animation$Internal$Animation$joinWith($andrewMacmurray$elm_simple_animation$Internal$Animation$optionName);
var $andrewMacmurray$elm_simple_animation$Internal$Animation$name_ = function (_v0) {
	var d = _v0.a;
	var options = _v0.b;
	var frames = _v0.c;
	return 'anim-' + ($elm$core$String$fromInt(d) + ($andrewMacmurray$elm_simple_animation$Internal$Animation$optionNames(options) + $andrewMacmurray$elm_simple_animation$Internal$Animation$framesNames(frames)));
};
var $elm$html$Html$node = $elm$virtual_dom$VirtualDom$node;
var $andrewMacmurray$elm_simple_animation$Internal$Animation$duration_ = function (_v0) {
	var d = _v0.a;
	return d;
};
var $andrewMacmurray$elm_simple_animation$Internal$Unit$ms = function (n) {
	return $elm$core$String$fromInt(n) + 'ms';
};
var $andrewMacmurray$elm_simple_animation$Internal$Animation$animationDuration = function (anim) {
	return $andrewMacmurray$elm_simple_animation$Internal$Unit$ms(
		$andrewMacmurray$elm_simple_animation$Internal$Animation$duration_(anim));
};
var $andrewMacmurray$elm_simple_animation$Internal$Animation$collectOption = F2(
	function (o, opts) {
		switch (o.$) {
			case 'Delay':
				var ms = o.a;
				return _Utils_update(
					opts,
					{
						delay: $elm$core$Maybe$Just(ms)
					});
			case 'Iteration':
				var i = o.a;
				return _Utils_update(
					opts,
					{
						iteration: $elm$core$Maybe$Just(i)
					});
			case 'Ease':
				var e = o.a;
				return _Utils_update(
					opts,
					{
						timingFunction: $elm$core$Maybe$Just(e)
					});
			case 'Yoyo':
				return _Utils_update(
					opts,
					{isYoyo: true});
			default:
				return _Utils_update(
					opts,
					{reversed: true});
		}
	});
var $andrewMacmurray$elm_simple_animation$Internal$Animation$defaults = {delay: $elm$core$Maybe$Nothing, isYoyo: false, iteration: $elm$core$Maybe$Nothing, reversed: false, timingFunction: $elm$core$Maybe$Nothing};
var $andrewMacmurray$elm_simple_animation$Internal$Animation$Count = function (a) {
	return {$: 'Count', a: a};
};
var $andrewMacmurray$elm_simple_animation$Internal$Animation$Loop = {$: 'Loop'};
var $andrewMacmurray$elm_simple_animation$Internal$Animation$iterationForYoyo = function (opts) {
	var _v0 = opts.iteration;
	if (_v0.$ === 'Just') {
		if (_v0.a.$ === 'Loop') {
			var _v1 = _v0.a;
			return $andrewMacmurray$elm_simple_animation$Internal$Animation$Loop;
		} else {
			var n = _v0.a.a;
			return $andrewMacmurray$elm_simple_animation$Internal$Animation$Count(n * 2);
		}
	} else {
		return $andrewMacmurray$elm_simple_animation$Internal$Animation$Count(2);
	}
};
var $andrewMacmurray$elm_simple_animation$Internal$Animation$normalise = function (opts) {
	return opts.isYoyo ? _Utils_update(
		opts,
		{
			iteration: $elm$core$Maybe$Just(
				$andrewMacmurray$elm_simple_animation$Internal$Animation$iterationForYoyo(opts))
		}) : opts;
};
var $andrewMacmurray$elm_simple_animation$Internal$Animation$rawOptions_ = function (_v0) {
	var o = _v0.b;
	return o;
};
var $andrewMacmurray$elm_simple_animation$Internal$Animation$options_ = A2(
	$elm$core$Basics$composeR,
	$andrewMacmurray$elm_simple_animation$Internal$Animation$rawOptions_,
	A2(
		$elm$core$Basics$composeR,
		A2($elm$core$List$foldl, $andrewMacmurray$elm_simple_animation$Internal$Animation$collectOption, $andrewMacmurray$elm_simple_animation$Internal$Animation$defaults),
		$andrewMacmurray$elm_simple_animation$Internal$Animation$normalise));
var $andrewMacmurray$elm_simple_animation$Internal$Animation$renderDirection = function (d) {
	switch (d.$) {
		case 'Alternate_':
			return 'alternate';
		case 'Reverse_':
			return 'reverse';
		default:
			return 'alternate-reverse';
	}
};
var $andrewMacmurray$elm_simple_animation$Internal$Animation$renderIteration = function (i) {
	if (i.$ === 'Loop') {
		return 'infinite';
	} else {
		var count = i.a;
		return $elm$core$String$fromInt(count);
	}
};
var $andrewMacmurray$elm_simple_animation$Internal$Animation$renderOption = F2(
	function (name, toProp) {
		return $elm$core$Maybe$map(
			function (x) {
				return name + (': ' + toProp(x));
			});
	});
var $andrewMacmurray$elm_simple_animation$Internal$Animation$AlternateReverse_ = {$: 'AlternateReverse_'};
var $andrewMacmurray$elm_simple_animation$Internal$Animation$Alternate_ = {$: 'Alternate_'};
var $andrewMacmurray$elm_simple_animation$Internal$Animation$Reverse_ = {$: 'Reverse_'};
var $andrewMacmurray$elm_simple_animation$Internal$Animation$toDirection = function (opts) {
	return (opts.isYoyo && opts.reversed) ? $elm$core$Maybe$Just($andrewMacmurray$elm_simple_animation$Internal$Animation$AlternateReverse_) : (opts.reversed ? $elm$core$Maybe$Just($andrewMacmurray$elm_simple_animation$Internal$Animation$Reverse_) : (opts.isYoyo ? $elm$core$Maybe$Just($andrewMacmurray$elm_simple_animation$Internal$Animation$Alternate_) : $elm$core$Maybe$Nothing));
};
var $andrewMacmurray$elm_simple_animation$Internal$Animation$renderOptions_ = function (opts) {
	return _List_fromArray(
		[
			A3($andrewMacmurray$elm_simple_animation$Internal$Animation$renderOption, 'animation-delay', $andrewMacmurray$elm_simple_animation$Internal$Unit$ms, opts.delay),
			A3($andrewMacmurray$elm_simple_animation$Internal$Animation$renderOption, 'animation-timing-function', $andrewMacmurray$elm_simple_animation$Internal$Ease$toString, opts.timingFunction),
			A3($andrewMacmurray$elm_simple_animation$Internal$Animation$renderOption, 'animation-iteration-count', $andrewMacmurray$elm_simple_animation$Internal$Animation$renderIteration, opts.iteration),
			A3(
			$andrewMacmurray$elm_simple_animation$Internal$Animation$renderOption,
			'animation-direction',
			$andrewMacmurray$elm_simple_animation$Internal$Animation$renderDirection,
			$andrewMacmurray$elm_simple_animation$Internal$Animation$toDirection(opts))
		]);
};
var $andrewMacmurray$elm_simple_animation$Internal$Animation$renderOptions = A2(
	$elm$core$Basics$composeR,
	$andrewMacmurray$elm_simple_animation$Internal$Animation$options_,
	A2(
		$elm$core$Basics$composeR,
		$andrewMacmurray$elm_simple_animation$Internal$Animation$renderOptions_,
		$elm$core$List$filterMap($elm$core$Basics$identity)));
var $andrewMacmurray$elm_simple_animation$Internal$Animation$classProperties = function (anim) {
	return A2(
		$elm$core$String$join,
		';\n',
		A2(
			$elm$core$List$append,
			_List_fromArray(
				[
					'animation-name: ' + $andrewMacmurray$elm_simple_animation$Internal$Animation$name_(anim),
					'animation-duration: ' + $andrewMacmurray$elm_simple_animation$Internal$Animation$animationDuration(anim),
					'animation-fill-mode: both'
				]),
			$andrewMacmurray$elm_simple_animation$Internal$Animation$renderOptions(anim)));
};
var $andrewMacmurray$elm_simple_animation$Internal$Animation$classDefinition_ = function (anim) {
	return '.' + ($andrewMacmurray$elm_simple_animation$Internal$Animation$name_(anim) + ('{\n' + ($andrewMacmurray$elm_simple_animation$Internal$Animation$classProperties(anim) + '\n};')));
};
var $andrewMacmurray$elm_simple_animation$Internal$Animation$frames_ = function (_v0) {
	var f = _v0.c;
	return f;
};
var $andrewMacmurray$elm_simple_animation$Internal$Unit$pc = function (n) {
	return $elm$core$String$fromFloat(n) + '%';
};
var $andrewMacmurray$elm_simple_animation$Internal$Animation$Property$filterMaybes = $elm$core$List$filterMap($elm$core$Basics$identity);
var $elm$core$List$head = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(x);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $andrewMacmurray$elm_simple_animation$Internal$Animation$Property$getProp = function (f) {
	return A2(
		$elm$core$Basics$composeR,
		$elm$core$List$filterMap(f),
		$elm$core$List$head);
};
var $andrewMacmurray$elm_simple_animation$Internal$Animation$Property$opacity_ = function (p) {
	if (p.$ === 'Opacity') {
		var n = p.a;
		return $elm$core$Maybe$Just(
			'opacity:' + $elm$core$String$fromFloat(n));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $andrewMacmurray$elm_simple_animation$Internal$Animation$Property$raw_ = function (p) {
	if (p.$ === 'Raw') {
		var k = p.a;
		var v = p.b;
		return $elm$core$Maybe$Just(k + (':' + v));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $andrewMacmurray$elm_simple_animation$Internal$Animation$Property$collectTransforms = A2(
	$elm$core$List$foldl,
	F2(
		function (val, acc) {
			if (val.$ === 'Transform') {
				var t = val.a;
				return A2($elm$core$List$cons, t, acc);
			} else {
				return acc;
			}
		}),
	_List_Nil);
var $andrewMacmurray$elm_simple_animation$Internal$Transform$combine = F2(
	function (transform, combined) {
		switch (transform.$) {
			case 'Rotate':
				var n = transform.a;
				return _Utils_update(
					combined,
					{
						rotate: $elm$core$Maybe$Just(n)
					});
			case 'ScaleXY':
				var x_ = transform.a;
				var y_ = transform.b;
				return _Utils_update(
					combined,
					{
						scale: $elm$core$Maybe$Just(
							_Utils_Tuple2(x_, y_))
					});
			default:
				switch (transform.a.$) {
					case 'XY':
						var _v1 = transform.a;
						var x_ = _v1.a;
						var y_ = _v1.b;
						return _Utils_update(
							combined,
							{
								xy: $elm$core$Maybe$Just(
									_Utils_Tuple2(x_, y_))
							});
					case 'X':
						var n = transform.a.a;
						return _Utils_update(
							combined,
							{
								x: $elm$core$Maybe$Just(n)
							});
					default:
						var n = transform.a.a;
						return _Utils_update(
							combined,
							{
								y: $elm$core$Maybe$Just(n)
							});
				}
		}
	});
var $andrewMacmurray$elm_simple_animation$Internal$Transform$empty = {rotate: $elm$core$Maybe$Nothing, scale: $elm$core$Maybe$Nothing, x: $elm$core$Maybe$Nothing, xy: $elm$core$Maybe$Nothing, y: $elm$core$Maybe$Nothing};
var $andrewMacmurray$elm_simple_animation$Internal$Transform$render_ = function (f) {
	return A2(
		$elm$core$Basics$composeR,
		$elm$core$Maybe$map(f),
		$elm$core$Maybe$withDefault(''));
};
var $andrewMacmurray$elm_simple_animation$Internal$Transform$deg = function (n) {
	return $elm$core$String$fromFloat(n) + 'deg';
};
var $andrewMacmurray$elm_simple_animation$Internal$Transform$join = $elm$core$String$join('');
var $andrewMacmurray$elm_simple_animation$Internal$Transform$rotate_ = function (n) {
	return $andrewMacmurray$elm_simple_animation$Internal$Transform$join(
		_List_fromArray(
			[
				'rotate(',
				$andrewMacmurray$elm_simple_animation$Internal$Transform$deg(n),
				')'
			]));
};
var $andrewMacmurray$elm_simple_animation$Internal$Transform$scale_ = function (_v0) {
	var x_ = _v0.a;
	var y_ = _v0.b;
	return $andrewMacmurray$elm_simple_animation$Internal$Transform$join(
		_List_fromArray(
			[
				'scale(',
				$elm$core$String$fromFloat(x_),
				',',
				$elm$core$String$fromFloat(y_),
				')'
			]));
};
var $andrewMacmurray$elm_simple_animation$Internal$Transform$px = function (n) {
	return $elm$core$String$fromFloat(n) + 'px';
};
var $andrewMacmurray$elm_simple_animation$Internal$Transform$translateX_ = function (n) {
	return $andrewMacmurray$elm_simple_animation$Internal$Transform$join(
		_List_fromArray(
			[
				'translateX(',
				$andrewMacmurray$elm_simple_animation$Internal$Transform$px(n),
				')'
			]));
};
var $andrewMacmurray$elm_simple_animation$Internal$Transform$translateY_ = function (n) {
	return $andrewMacmurray$elm_simple_animation$Internal$Transform$join(
		_List_fromArray(
			[
				'translateY(',
				$andrewMacmurray$elm_simple_animation$Internal$Transform$px(n),
				')'
			]));
};
var $andrewMacmurray$elm_simple_animation$Internal$Transform$translate_ = function (_v0) {
	var x_ = _v0.a;
	var y_ = _v0.b;
	return $andrewMacmurray$elm_simple_animation$Internal$Transform$join(
		_List_fromArray(
			[
				'translate(',
				$andrewMacmurray$elm_simple_animation$Internal$Transform$px(x_),
				',',
				$andrewMacmurray$elm_simple_animation$Internal$Transform$px(y_),
				')'
			]));
};
var $andrewMacmurray$elm_simple_animation$Internal$Transform$render = function (combined) {
	return A2(
		$elm$core$String$join,
		' ',
		A2(
			$elm$core$List$filter,
			A2($elm$core$Basics$composeR, $elm$core$String$isEmpty, $elm$core$Basics$not),
			_List_fromArray(
				[
					A2($andrewMacmurray$elm_simple_animation$Internal$Transform$render_, $andrewMacmurray$elm_simple_animation$Internal$Transform$translate_, combined.xy),
					A2($andrewMacmurray$elm_simple_animation$Internal$Transform$render_, $andrewMacmurray$elm_simple_animation$Internal$Transform$translateX_, combined.x),
					A2($andrewMacmurray$elm_simple_animation$Internal$Transform$render_, $andrewMacmurray$elm_simple_animation$Internal$Transform$translateY_, combined.y),
					A2($andrewMacmurray$elm_simple_animation$Internal$Transform$render_, $andrewMacmurray$elm_simple_animation$Internal$Transform$scale_, combined.scale),
					A2($andrewMacmurray$elm_simple_animation$Internal$Transform$render_, $andrewMacmurray$elm_simple_animation$Internal$Transform$rotate_, combined.rotate)
				])));
};
var $andrewMacmurray$elm_simple_animation$Internal$Transform$toString = A2(
	$elm$core$Basics$composeR,
	A2($elm$core$List$foldl, $andrewMacmurray$elm_simple_animation$Internal$Transform$combine, $andrewMacmurray$elm_simple_animation$Internal$Transform$empty),
	$andrewMacmurray$elm_simple_animation$Internal$Transform$render);
var $andrewMacmurray$elm_simple_animation$Internal$Animation$Property$transform_ = function (props) {
	var _v0 = $andrewMacmurray$elm_simple_animation$Internal$Animation$Property$collectTransforms(props);
	if (!_v0.b) {
		return $elm$core$Maybe$Nothing;
	} else {
		var transforms = _v0;
		return $elm$core$Maybe$Just(
			'transform:' + $andrewMacmurray$elm_simple_animation$Internal$Transform$toString(transforms));
	}
};
var $andrewMacmurray$elm_simple_animation$Internal$Animation$Property$render = function (props) {
	return A2(
		$elm$core$String$join,
		';',
		$andrewMacmurray$elm_simple_animation$Internal$Animation$Property$filterMaybes(
			$elm$core$List$concat(
				_List_fromArray(
					[
						A2($elm$core$List$map, $andrewMacmurray$elm_simple_animation$Internal$Animation$Property$raw_, props),
						_List_fromArray(
						[
							A2($andrewMacmurray$elm_simple_animation$Internal$Animation$Property$getProp, $andrewMacmurray$elm_simple_animation$Internal$Animation$Property$opacity_, props),
							$andrewMacmurray$elm_simple_animation$Internal$Animation$Property$transform_(props)
						])
					]))));
};
var $andrewMacmurray$elm_simple_animation$Internal$Animation$renderFrame = function (_v0) {
	var percent = _v0.a;
	var properties = _v0.b;
	return $andrewMacmurray$elm_simple_animation$Internal$Unit$pc(percent) + ('{' + ($andrewMacmurray$elm_simple_animation$Internal$Animation$Property$render(properties) + ';}'));
};
var $andrewMacmurray$elm_simple_animation$Internal$Animation$keyframes_ = A2(
	$elm$core$Basics$composeR,
	$andrewMacmurray$elm_simple_animation$Internal$Animation$frames_,
	A2(
		$elm$core$Basics$composeR,
		$elm$core$List$map($andrewMacmurray$elm_simple_animation$Internal$Animation$renderFrame),
		$elm$core$String$join('\n')));
var $andrewMacmurray$elm_simple_animation$Internal$Animation$keyframesAnimation_ = function (anim) {
	return '@keyframes ' + ($andrewMacmurray$elm_simple_animation$Internal$Animation$name_(anim) + ('{' + ($andrewMacmurray$elm_simple_animation$Internal$Animation$keyframes_(anim) + '}')));
};
var $andrewMacmurray$elm_simple_animation$Internal$Animation$stylesheet_ = function (anim) {
	return $andrewMacmurray$elm_simple_animation$Internal$Animation$keyframesAnimation_(anim) + ('\n' + $andrewMacmurray$elm_simple_animation$Internal$Animation$classDefinition_(anim));
};
var $andrewMacmurray$elm_simple_animation$Simple$Animation$Animated$toStylesheet_ = function (anim) {
	return A3(
		$elm$html$Html$node,
		'style',
		_List_Nil,
		_List_fromArray(
			[
				$elm$html$Html$text(
				$andrewMacmurray$elm_simple_animation$Internal$Animation$stylesheet_(anim))
			]));
};
var $andrewMacmurray$elm_simple_animation$Simple$Animation$Animated$ui = F5(
	function (options, node_, anim, attrs, els) {
		return A2(
			node_,
			A2(
				$elm$core$List$append,
				_List_fromArray(
					[
						options.behindContent(
						options.html(
							$andrewMacmurray$elm_simple_animation$Simple$Animation$Animated$toStylesheet_(anim))),
						options.htmlAttribute(
						$elm$html$Html$Attributes$class(
							$andrewMacmurray$elm_simple_animation$Internal$Animation$name_(anim)))
					]),
				attrs),
			els);
	});
var $author$project$Video$Views$animatedUi = $andrewMacmurray$elm_simple_animation$Simple$Animation$Animated$ui(
	{behindContent: $mdgriffith$elm_ui$Element$behindContent, html: $mdgriffith$elm_ui$Element$html, htmlAttribute: $mdgriffith$elm_ui$Element$htmlAttribute});
var $author$project$Video$Views$animatedEl = $author$project$Video$Views$animatedUi($mdgriffith$elm_ui$Element$el);
var $mdgriffith$elm_ui$Internal$Model$AlignX = function (a) {
	return {$: 'AlignX', a: a};
};
var $mdgriffith$elm_ui$Internal$Model$CenterX = {$: 'CenterX'};
var $mdgriffith$elm_ui$Element$centerX = $mdgriffith$elm_ui$Internal$Model$AlignX($mdgriffith$elm_ui$Internal$Model$CenterX);
var $mdgriffith$elm_ui$Internal$Model$CenterY = {$: 'CenterY'};
var $mdgriffith$elm_ui$Element$centerY = $mdgriffith$elm_ui$Internal$Model$AlignY($mdgriffith$elm_ui$Internal$Model$CenterY);
var $icidasset$elm_material_icons$Material$Icons$Types$Inherit = {$: 'Inherit'};
var $author$project$Video$Icons$icon = F2(
	function (size, material) {
		return $mdgriffith$elm_ui$Element$html(
			A2(material, size, $icidasset$elm_material_icons$Material$Icons$Types$Inherit));
	});
var $mdgriffith$elm_ui$Internal$Model$PaddingStyle = F5(
	function (a, b, c, d, e) {
		return {$: 'PaddingStyle', a: a, b: b, c: c, d: d, e: e};
	});
var $mdgriffith$elm_ui$Internal$Flag$padding = $mdgriffith$elm_ui$Internal$Flag$flag(2);
var $mdgriffith$elm_ui$Element$padding = function (x) {
	var f = x;
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$padding,
		A5(
			$mdgriffith$elm_ui$Internal$Model$PaddingStyle,
			'p-' + $elm$core$String$fromInt(x),
			f,
			f,
			f,
			f));
};
var $mdgriffith$elm_ui$Internal$Model$Rgba = F4(
	function (a, b, c, d) {
		return {$: 'Rgba', a: a, b: b, c: c, d: d};
	});
var $mdgriffith$elm_ui$Element$rgb = F3(
	function (r, g, b) {
		return A4($mdgriffith$elm_ui$Internal$Model$Rgba, r, g, b, 1);
	});
var $mdgriffith$elm_ui$Internal$Flag$borderRound = $mdgriffith$elm_ui$Internal$Flag$flag(17);
var $mdgriffith$elm_ui$Element$Border$rounded = function (radius) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$borderRound,
		A3(
			$mdgriffith$elm_ui$Internal$Model$Single,
			'br-' + $elm$core$String$fromInt(radius),
			'border-radius',
			$elm$core$String$fromInt(radius) + 'px'));
};
var $author$project$Video$Views$scale = 15;
var $author$project$Video$Views$circledIcon = F2(
	function (model, i) {
		var size = A2($elm$core$Basics$min, ((model.playerSize.a * 9) / 16) | 0, model.playerSize.b);
		return A2(
			$mdgriffith$elm_ui$Element$el,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$padding((size / ($author$project$Video$Views$scale * 4)) | 0),
					$mdgriffith$elm_ui$Element$Background$color(
					A3($mdgriffith$elm_ui$Element$rgb, 0, 0, 0)),
					$mdgriffith$elm_ui$Element$Border$rounded(10000)
				]),
			A2($author$project$Video$Icons$icon, (size / $author$project$Video$Views$scale) | 0, i));
	});
var $mdgriffith$elm_ui$Internal$Flag$fontColor = $mdgriffith$elm_ui$Internal$Flag$flag(14);
var $mdgriffith$elm_ui$Element$Font$color = function (fontColor) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$fontColor,
		A3(
			$mdgriffith$elm_ui$Internal$Model$Colored,
			'fc-' + $mdgriffith$elm_ui$Internal$Model$formatColorClass(fontColor),
			'color',
			fontColor));
};
var $mdgriffith$elm_ui$Internal$Model$AsColumn = {$: 'AsColumn'};
var $mdgriffith$elm_ui$Internal$Model$asColumn = $mdgriffith$elm_ui$Internal$Model$AsColumn;
var $mdgriffith$elm_ui$Internal$Model$htmlClass = function (cls) {
	return $mdgriffith$elm_ui$Internal$Model$Attr(
		$elm$html$Html$Attributes$class(cls));
};
var $mdgriffith$elm_ui$Element$column = F2(
	function (attrs, children) {
		return A4(
			$mdgriffith$elm_ui$Internal$Model$element,
			$mdgriffith$elm_ui$Internal$Model$asColumn,
			$mdgriffith$elm_ui$Internal$Model$div,
			A2(
				$elm$core$List$cons,
				$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.contentTop + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.contentLeft)),
				A2(
					$elm$core$List$cons,
					$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$shrink),
					A2(
						$elm$core$List$cons,
						$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$shrink),
						attrs))),
			$mdgriffith$elm_ui$Internal$Model$Unkeyed(children));
	});
var $mdgriffith$elm_ui$Internal$Model$Left = {$: 'Left'};
var $mdgriffith$elm_ui$Element$alignLeft = $mdgriffith$elm_ui$Internal$Model$AlignX($mdgriffith$elm_ui$Internal$Model$Left);
var $mdgriffith$elm_ui$Internal$Model$Right = {$: 'Right'};
var $mdgriffith$elm_ui$Element$alignRight = $mdgriffith$elm_ui$Internal$Model$AlignX($mdgriffith$elm_ui$Internal$Model$Right);
var $elm$core$Basics$modBy = _Basics_modBy;
var $author$project$Video$Views$formatTime = function (s) {
	var seconds = $elm$core$Basics$round(s);
	var secs = A2($elm$core$Basics$modBy, 60, seconds);
	var secsString = (secs < 10) ? ('0' + $elm$core$String$fromInt(secs)) : $elm$core$String$fromInt(secs);
	var minutes = A2($elm$core$Basics$modBy, 60, (seconds / 60) | 0);
	var hours = (seconds / 3600) | 0;
	var hoursString = (!hours) ? '' : ($elm$core$String$fromInt(hours) + ':');
	var minutesString = ((minutes < 10) && (hours > 0)) ? ('0' + $elm$core$String$fromInt(minutes)) : $elm$core$String$fromInt(minutes);
	return hoursString + (minutesString + (':' + secsString));
};
var $author$project$Video$ExitFullscreen = {$: 'ExitFullscreen'};
var $author$project$Video$RequestFullscreen = {$: 'RequestFullscreen'};
var $elm$virtual_dom$VirtualDom$style = _VirtualDom_style;
var $elm$html$Html$Attributes$style = $elm$virtual_dom$VirtualDom$style;
var $author$project$Video$Views$boxShadowNone = $mdgriffith$elm_ui$Element$htmlAttribute(
	A2($elm$html$Html$Attributes$style, 'box-shadow', 'none'));
var $mdgriffith$elm_ui$Internal$Model$Button = {$: 'Button'};
var $mdgriffith$elm_ui$Internal$Model$Describe = function (a) {
	return {$: 'Describe', a: a};
};
var $elm$html$Html$Attributes$boolProperty = F2(
	function (key, bool) {
		return A2(
			_VirtualDom_property,
			key,
			$elm$json$Json$Encode$bool(bool));
	});
var $elm$html$Html$Attributes$disabled = $elm$html$Html$Attributes$boolProperty('disabled');
var $mdgriffith$elm_ui$Element$Input$enter = 'Enter';
var $mdgriffith$elm_ui$Element$Input$hasFocusStyle = function (attr) {
	if (((attr.$ === 'StyleClass') && (attr.b.$ === 'PseudoSelector')) && (attr.b.a.$ === 'Focus')) {
		var _v1 = attr.b;
		var _v2 = _v1.a;
		return true;
	} else {
		return false;
	}
};
var $mdgriffith$elm_ui$Element$Input$focusDefault = function (attrs) {
	return A2($elm$core$List$any, $mdgriffith$elm_ui$Element$Input$hasFocusStyle, attrs) ? $mdgriffith$elm_ui$Internal$Model$NoAttribute : $mdgriffith$elm_ui$Internal$Model$htmlClass('focusable');
};
var $elm$virtual_dom$VirtualDom$Normal = function (a) {
	return {$: 'Normal', a: a};
};
var $elm$virtual_dom$VirtualDom$on = _VirtualDom_on;
var $elm$html$Html$Events$on = F2(
	function (event, decoder) {
		return A2(
			$elm$virtual_dom$VirtualDom$on,
			event,
			$elm$virtual_dom$VirtualDom$Normal(decoder));
	});
var $elm$html$Html$Events$onClick = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'click',
		$elm$json$Json$Decode$succeed(msg));
};
var $mdgriffith$elm_ui$Element$Events$onClick = A2($elm$core$Basics$composeL, $mdgriffith$elm_ui$Internal$Model$Attr, $elm$html$Html$Events$onClick);
var $elm$json$Json$Decode$andThen = _Json_andThen;
var $elm$json$Json$Decode$fail = _Json_fail;
var $elm$virtual_dom$VirtualDom$MayPreventDefault = function (a) {
	return {$: 'MayPreventDefault', a: a};
};
var $elm$html$Html$Events$preventDefaultOn = F2(
	function (event, decoder) {
		return A2(
			$elm$virtual_dom$VirtualDom$on,
			event,
			$elm$virtual_dom$VirtualDom$MayPreventDefault(decoder));
	});
var $mdgriffith$elm_ui$Element$Input$onKeyLookup = function (lookup) {
	var decode = function (code) {
		var _v0 = lookup(code);
		if (_v0.$ === 'Nothing') {
			return $elm$json$Json$Decode$fail('No key matched');
		} else {
			var msg = _v0.a;
			return $elm$json$Json$Decode$succeed(msg);
		}
	};
	var isKey = A2(
		$elm$json$Json$Decode$andThen,
		decode,
		A2($elm$json$Json$Decode$field, 'key', $elm$json$Json$Decode$string));
	return $mdgriffith$elm_ui$Internal$Model$Attr(
		A2(
			$elm$html$Html$Events$preventDefaultOn,
			'keydown',
			A2(
				$elm$json$Json$Decode$map,
				function (fired) {
					return _Utils_Tuple2(fired, true);
				},
				isKey)));
};
var $mdgriffith$elm_ui$Internal$Model$Class = F2(
	function (a, b) {
		return {$: 'Class', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Flag$cursor = $mdgriffith$elm_ui$Internal$Flag$flag(21);
var $mdgriffith$elm_ui$Element$pointer = A2($mdgriffith$elm_ui$Internal$Model$Class, $mdgriffith$elm_ui$Internal$Flag$cursor, $mdgriffith$elm_ui$Internal$Style$classes.cursorPointer);
var $mdgriffith$elm_ui$Element$Input$space = ' ';
var $elm$html$Html$Attributes$tabindex = function (n) {
	return A2(
		_VirtualDom_attribute,
		'tabIndex',
		$elm$core$String$fromInt(n));
};
var $mdgriffith$elm_ui$Element$Input$button = F2(
	function (attrs, _v0) {
		var onPress = _v0.onPress;
		var label = _v0.label;
		return A4(
			$mdgriffith$elm_ui$Internal$Model$element,
			$mdgriffith$elm_ui$Internal$Model$asEl,
			$mdgriffith$elm_ui$Internal$Model$div,
			A2(
				$elm$core$List$cons,
				$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$shrink),
				A2(
					$elm$core$List$cons,
					$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$shrink),
					A2(
						$elm$core$List$cons,
						$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.contentCenterX + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.contentCenterY + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.seButton + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.noTextSelection)))))),
						A2(
							$elm$core$List$cons,
							$mdgriffith$elm_ui$Element$pointer,
							A2(
								$elm$core$List$cons,
								$mdgriffith$elm_ui$Element$Input$focusDefault(attrs),
								A2(
									$elm$core$List$cons,
									$mdgriffith$elm_ui$Internal$Model$Describe($mdgriffith$elm_ui$Internal$Model$Button),
									A2(
										$elm$core$List$cons,
										$mdgriffith$elm_ui$Internal$Model$Attr(
											$elm$html$Html$Attributes$tabindex(0)),
										function () {
											if (onPress.$ === 'Nothing') {
												return A2(
													$elm$core$List$cons,
													$mdgriffith$elm_ui$Internal$Model$Attr(
														$elm$html$Html$Attributes$disabled(true)),
													attrs);
											} else {
												var msg = onPress.a;
												return A2(
													$elm$core$List$cons,
													$mdgriffith$elm_ui$Element$Events$onClick(msg),
													A2(
														$elm$core$List$cons,
														$mdgriffith$elm_ui$Element$Input$onKeyLookup(
															function (code) {
																return _Utils_eq(code, $mdgriffith$elm_ui$Element$Input$enter) ? $elm$core$Maybe$Just(msg) : (_Utils_eq(code, $mdgriffith$elm_ui$Element$Input$space) ? $elm$core$Maybe$Just(msg) : $elm$core$Maybe$Nothing);
															}),
														attrs));
											}
										}()))))))),
			$mdgriffith$elm_ui$Internal$Model$Unkeyed(
				_List_fromArray(
					[label])));
	});
var $icidasset$elm_material_icons$Material$Icons$fullscreen = A2(
	$icidasset$elm_material_icons$Material$Icons$Internal$icon,
	_List_fromArray(
		[
			$icidasset$elm_material_icons$Material$Icons$Internal$v('0 0 24 24')
		]),
	_List_fromArray(
		[
			A2(
			$icidasset$elm_material_icons$Material$Icons$Internal$p,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$d('M0 0h24v24H0z'),
					$icidasset$elm_material_icons$Material$Icons$Internal$f('none')
				]),
			_List_Nil),
			A2(
			$icidasset$elm_material_icons$Material$Icons$Internal$p,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$d('M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z')
				]),
			_List_Nil)
		]));
var $icidasset$elm_material_icons$Material$Icons$fullscreen_exit = A2(
	$icidasset$elm_material_icons$Material$Icons$Internal$icon,
	_List_fromArray(
		[
			$icidasset$elm_material_icons$Material$Icons$Internal$v('0 0 24 24')
		]),
	_List_fromArray(
		[
			A2(
			$icidasset$elm_material_icons$Material$Icons$Internal$p,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$d('M0 0h24v24H0z'),
					$icidasset$elm_material_icons$Material$Icons$Internal$f('none')
				]),
			_List_Nil),
			A2(
			$icidasset$elm_material_icons$Material$Icons$Internal$p,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$d('M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z')
				]),
			_List_Nil)
		]));
var $author$project$Video$Views$icon = F2(
	function (model, i) {
		var size = A2($elm$core$Basics$min, ((model.playerSize.a * 9) / 16) | 0, model.playerSize.b);
		return A2(
			$mdgriffith$elm_ui$Element$el,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$padding((size / ($author$project$Video$Views$scale * 4)) | 0)
				]),
			A2($author$project$Video$Icons$icon, (size / $author$project$Video$Views$scale) | 0, i));
	});
var $author$project$Video$Views$fullscreenButton = function (model) {
	return A2(
		$mdgriffith$elm_ui$Element$Input$button,
		_List_fromArray(
			[$author$project$Video$Views$boxShadowNone]),
		model.isFullscreen ? {
			label: A2($author$project$Video$Views$icon, model, $icidasset$elm_material_icons$Material$Icons$fullscreen_exit),
			onPress: $elm$core$Maybe$Just($author$project$Video$ExitFullscreen)
		} : {
			label: A2($author$project$Video$Views$icon, model, $icidasset$elm_material_icons$Material$Icons$fullscreen),
			onPress: $elm$core$Maybe$Just($author$project$Video$RequestFullscreen)
		});
};
var $mdgriffith$elm_ui$Internal$Model$MoveY = function (a) {
	return {$: 'MoveY', a: a};
};
var $mdgriffith$elm_ui$Internal$Model$TransformComponent = F2(
	function (a, b) {
		return {$: 'TransformComponent', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Flag$moveY = $mdgriffith$elm_ui$Internal$Flag$flag(26);
var $mdgriffith$elm_ui$Element$moveDown = function (y) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$TransformComponent,
		$mdgriffith$elm_ui$Internal$Flag$moveY,
		$mdgriffith$elm_ui$Internal$Model$MoveY(y));
};
var $mdgriffith$elm_ui$Internal$Model$paddingName = F4(
	function (top, right, bottom, left) {
		return 'pad-' + ($elm$core$String$fromInt(top) + ('-' + ($elm$core$String$fromInt(right) + ('-' + ($elm$core$String$fromInt(bottom) + ('-' + $elm$core$String$fromInt(left)))))));
	});
var $mdgriffith$elm_ui$Element$paddingEach = function (_v0) {
	var top = _v0.top;
	var right = _v0.right;
	var bottom = _v0.bottom;
	var left = _v0.left;
	if (_Utils_eq(top, right) && (_Utils_eq(top, bottom) && _Utils_eq(top, left))) {
		var topFloat = top;
		return A2(
			$mdgriffith$elm_ui$Internal$Model$StyleClass,
			$mdgriffith$elm_ui$Internal$Flag$padding,
			A5(
				$mdgriffith$elm_ui$Internal$Model$PaddingStyle,
				'p-' + $elm$core$String$fromInt(top),
				topFloat,
				topFloat,
				topFloat,
				topFloat));
	} else {
		return A2(
			$mdgriffith$elm_ui$Internal$Model$StyleClass,
			$mdgriffith$elm_ui$Internal$Flag$padding,
			A5(
				$mdgriffith$elm_ui$Internal$Model$PaddingStyle,
				A4($mdgriffith$elm_ui$Internal$Model$paddingName, top, right, bottom, left),
				top,
				right,
				bottom,
				left));
	}
};
var $author$project$Video$PlayPause = {$: 'PlayPause'};
var $icidasset$elm_material_icons$Material$Icons$pause = A2(
	$icidasset$elm_material_icons$Material$Icons$Internal$icon,
	_List_fromArray(
		[
			$icidasset$elm_material_icons$Material$Icons$Internal$v('0 0 24 24')
		]),
	_List_fromArray(
		[
			A2(
			$icidasset$elm_material_icons$Material$Icons$Internal$p,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$d('M0 0h24v24H0z'),
					$icidasset$elm_material_icons$Material$Icons$Internal$f('none')
				]),
			_List_Nil),
			A2(
			$icidasset$elm_material_icons$Material$Icons$Internal$p,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$d('M6 19h4V5H6v14zm8-14v14h4V5h-4z')
				]),
			_List_Nil)
		]));
var $author$project$Video$Views$playPauseButton = function (model) {
	var i = model.playing ? A2($author$project$Video$Views$icon, model, $icidasset$elm_material_icons$Material$Icons$pause) : A2($author$project$Video$Views$icon, model, $icidasset$elm_material_icons$Material$Icons$play_arrow);
	return A2(
		$mdgriffith$elm_ui$Element$Input$button,
		_List_fromArray(
			[$author$project$Video$Views$boxShadowNone]),
		{
			label: i,
			onPress: $elm$core$Maybe$Just($author$project$Video$PlayPause)
		});
};
var $author$project$Video$Quality = {$: 'Quality'};
var $author$project$Video$ToggleSettings = function (a) {
	return {$: 'ToggleSettings', a: a};
};
var $mdgriffith$elm_ui$Internal$Model$Empty = {$: 'Empty'};
var $mdgriffith$elm_ui$Element$none = $mdgriffith$elm_ui$Internal$Model$Empty;
var $elm$svg$Svg$Attributes$enableBackground = _VirtualDom_attribute('enable-background');
var $icidasset$elm_material_icons$Material$Icons$Internal$b = $elm$svg$Svg$Attributes$enableBackground;
var $icidasset$elm_material_icons$Material$Icons$settings = A2(
	$icidasset$elm_material_icons$Material$Icons$Internal$icon,
	_List_fromArray(
		[
			$icidasset$elm_material_icons$Material$Icons$Internal$b('new 0 0 24 24'),
			$icidasset$elm_material_icons$Material$Icons$Internal$v('0 0 24 24')
		]),
	_List_fromArray(
		[
			A2(
			$elm$svg$Svg$g,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$icidasset$elm_material_icons$Material$Icons$Internal$p,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$d('M0,0h24v24H0V0z'),
							$icidasset$elm_material_icons$Material$Icons$Internal$f('none')
						]),
					_List_Nil),
					A2(
					$icidasset$elm_material_icons$Material$Icons$Internal$p,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$d('M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z')
						]),
					_List_Nil)
				]))
		]));
var $author$project$Video$Views$qualityButton = function (model) {
	return ($elm$core$List$length(model.qualities) > 1) ? A2(
		$mdgriffith$elm_ui$Element$Input$button,
		_List_fromArray(
			[$author$project$Video$Views$boxShadowNone]),
		{
			label: A2($author$project$Video$Views$icon, model, $icidasset$elm_material_icons$Material$Icons$settings),
			onPress: $elm$core$Maybe$Just(
				$author$project$Video$ToggleSettings($author$project$Video$Quality))
		}) : $mdgriffith$elm_ui$Element$none;
};
var $mdgriffith$elm_ui$Internal$Model$AsRow = {$: 'AsRow'};
var $mdgriffith$elm_ui$Internal$Model$asRow = $mdgriffith$elm_ui$Internal$Model$AsRow;
var $mdgriffith$elm_ui$Element$row = F2(
	function (attrs, children) {
		return A4(
			$mdgriffith$elm_ui$Internal$Model$element,
			$mdgriffith$elm_ui$Internal$Model$asRow,
			$mdgriffith$elm_ui$Internal$Model$div,
			A2(
				$elm$core$List$cons,
				$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.contentLeft + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.contentCenterY)),
				A2(
					$elm$core$List$cons,
					$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$shrink),
					A2(
						$elm$core$List$cons,
						$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$shrink),
						attrs))),
			$mdgriffith$elm_ui$Internal$Model$Unkeyed(children));
	});
var $mdgriffith$elm_ui$Internal$Model$SpacingStyle = F3(
	function (a, b, c) {
		return {$: 'SpacingStyle', a: a, b: b, c: c};
	});
var $mdgriffith$elm_ui$Internal$Flag$spacing = $mdgriffith$elm_ui$Internal$Flag$flag(3);
var $mdgriffith$elm_ui$Internal$Model$spacingName = F2(
	function (x, y) {
		return 'spacing-' + ($elm$core$String$fromInt(x) + ('-' + $elm$core$String$fromInt(y)));
	});
var $mdgriffith$elm_ui$Element$spacing = function (x) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$spacing,
		A3(
			$mdgriffith$elm_ui$Internal$Model$SpacingStyle,
			A2($mdgriffith$elm_ui$Internal$Model$spacingName, x, x),
			x,
			x));
};
var $author$project$Video$Speed = {$: 'Speed'};
var $icidasset$elm_material_icons$Material$Icons$speed = A2(
	$icidasset$elm_material_icons$Material$Icons$Internal$icon,
	_List_fromArray(
		[
			$icidasset$elm_material_icons$Material$Icons$Internal$v('0 0 24 24')
		]),
	_List_fromArray(
		[
			A2(
			$icidasset$elm_material_icons$Material$Icons$Internal$p,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$d('M0 0h24v24H0z'),
					$icidasset$elm_material_icons$Material$Icons$Internal$f('none')
				]),
			_List_Nil),
			A2(
			$icidasset$elm_material_icons$Material$Icons$Internal$p,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$d('M20.38 8.57l-1.23 1.85a8 8 0 0 1-.22 7.58H5.07A8 8 0 0 1 15.58 6.85l1.85-1.23A10 10 0 0 0 3.35 19a2 2 0 0 0 1.72 1h13.85a2 2 0 0 0 1.74-1 10 10 0 0 0-.27-10.44zm-9.79 6.84a2 2 0 0 0 2.83 0l5.66-8.49-8.49 5.66a2 2 0 0 0 0 2.83z')
				]),
			_List_Nil)
		]));
var $author$project$Video$Views$speedButton = function (model) {
	return A2(
		$mdgriffith$elm_ui$Element$Input$button,
		_List_fromArray(
			[$author$project$Video$Views$boxShadowNone]),
		{
			label: A2($author$project$Video$Views$icon, model, $icidasset$elm_material_icons$Material$Icons$speed),
			onPress: $elm$core$Maybe$Just(
				$author$project$Video$ToggleSettings($author$project$Video$Speed))
		});
};
var $author$project$Video$Subtitles = {$: 'Subtitles'};
var $icidasset$elm_material_icons$Material$Icons$subtitles = A2(
	$icidasset$elm_material_icons$Material$Icons$Internal$icon,
	_List_fromArray(
		[
			$icidasset$elm_material_icons$Material$Icons$Internal$v('0 0 24 24')
		]),
	_List_fromArray(
		[
			A2(
			$icidasset$elm_material_icons$Material$Icons$Internal$p,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$d('M0 0h24v24H0z'),
					$icidasset$elm_material_icons$Material$Icons$Internal$f('none')
				]),
			_List_Nil),
			A2(
			$icidasset$elm_material_icons$Material$Icons$Internal$p,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$d('M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM4 12h4v2H4v-2zm10 6H4v-2h10v2zm6 0h-4v-2h4v2zm0-4H10v-2h10v2z')
				]),
			_List_Nil)
		]));
var $elm$svg$Svg$rect = $elm$svg$Svg$trustedNode('rect');
var $icidasset$elm_material_icons$Material$Icons$subtitles_off = A2(
	$icidasset$elm_material_icons$Material$Icons$Internal$icon,
	_List_fromArray(
		[
			$icidasset$elm_material_icons$Material$Icons$Internal$b('new 0 0 24 24'),
			$icidasset$elm_material_icons$Material$Icons$Internal$v('0 0 24 24')
		]),
	_List_fromArray(
		[
			A2(
			$elm$svg$Svg$g,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$elm$svg$Svg$rect,
					_List_fromArray(
						[
							$icidasset$elm_material_icons$Material$Icons$Internal$f('none')
						]),
					_List_Nil)
				])),
			A2(
			$elm$svg$Svg$g,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$elm$svg$Svg$g,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$icidasset$elm_material_icons$Material$Icons$Internal$p,
							_List_fromArray(
								[
									$elm$svg$Svg$Attributes$d('M20,4H6.83l8,8H20v2h-3.17l4.93,4.93C21.91,18.65,22,18.34,22,18V6C22,4.9,21.1,4,20,4z')
								]),
							_List_Nil),
							A2(
							$icidasset$elm_material_icons$Material$Icons$Internal$p,
							_List_fromArray(
								[
									$elm$svg$Svg$Attributes$d('M1.04,3.87l1.2,1.2C2.09,5.35,2,5.66,2,6v12c0,1.1,0.9,2,2,2h13.17l2.96,2.96l1.41-1.41L2.45,2.45L1.04,3.87z M8,12v2H4 v-2H8z M14,16.83V18H4v-2h9.17L14,16.83z')
								]),
							_List_Nil)
						]))
				]))
		]));
var $author$project$Video$Views$subtitlesButton = function (model) {
	return (!$elm$core$List$isEmpty(model.subtitles)) ? A2(
		$mdgriffith$elm_ui$Element$Input$button,
		_List_fromArray(
			[$author$project$Video$Views$boxShadowNone]),
		{
			label: A2(
				$author$project$Video$Views$icon,
				model,
				(!_Utils_eq(model.subtitleTrack, $elm$core$Maybe$Nothing)) ? $icidasset$elm_material_icons$Material$Icons$subtitles : $icidasset$elm_material_icons$Material$Icons$subtitles_off),
			onPress: $elm$core$Maybe$Just(
				$author$project$Video$ToggleSettings($author$project$Video$Subtitles))
		}) : $mdgriffith$elm_ui$Element$none;
};
var $mdgriffith$elm_ui$Internal$Model$Text = function (a) {
	return {$: 'Text', a: a};
};
var $mdgriffith$elm_ui$Element$text = function (content) {
	return $mdgriffith$elm_ui$Internal$Model$Text(content);
};
var $mdgriffith$elm_ui$Element$fillPortion = $mdgriffith$elm_ui$Internal$Model$Fill;
var $mdgriffith$elm_ui$Internal$Model$Px = function (a) {
	return {$: 'Px', a: a};
};
var $mdgriffith$elm_ui$Element$px = $mdgriffith$elm_ui$Internal$Model$Px;
var $author$project$Video$UnsetVolume = function (a) {
	return {$: 'UnsetVolume', a: a};
};
var $elm$json$Json$Decode$value = _Json_decodeValue;
var $author$project$Video$Events$decodeUnsetVolume = A2(
	$elm$json$Json$Decode$map,
	$author$project$Video$UnsetVolume,
	A2($elm$json$Json$Decode$field, 'pointerId', $elm$json$Json$Decode$value));
var $author$project$Video$SetVolume = F3(
	function (a, b, c) {
		return {$: 'SetVolume', a: a, b: b, c: c};
	});
var $elm$json$Json$Decode$int = _Json_decodeInt;
var $elm$json$Json$Decode$map3 = _Json_map3;
var $author$project$Video$Events$decodeVolumeBar = A4(
	$elm$json$Json$Decode$map3,
	F3(
		function (x, y, z) {
			return A3($author$project$Video$SetVolume, x / y, false, z);
		}),
	A2($elm$json$Json$Decode$field, 'layerX', $elm$json$Json$Decode$int),
	A2(
		$elm$json$Json$Decode$field,
		'target',
		A2($elm$json$Json$Decode$field, 'offsetWidth', $elm$json$Json$Decode$int)),
	A2(
		$elm$json$Json$Decode$map,
		$elm$core$Maybe$Just,
		A2($elm$json$Json$Decode$field, 'pointerId', $elm$json$Json$Decode$value)));
var $author$project$Video$Noop = {$: 'Noop'};
var $author$project$Video$Events$decodeVolumeMove = function (model) {
	return model.holdingVolume ? A4(
		$elm$json$Json$Decode$map3,
		F3(
			function (x, y, z) {
				return A3($author$project$Video$SetVolume, x / y, false, z);
			}),
		A2($elm$json$Json$Decode$field, 'layerX', $elm$json$Json$Decode$int),
		A2(
			$elm$json$Json$Decode$field,
			'target',
			A2($elm$json$Json$Decode$field, 'offsetWidth', $elm$json$Json$Decode$int)),
		A2(
			$elm$json$Json$Decode$map,
			$elm$core$Maybe$Just,
			A2($elm$json$Json$Decode$field, 'pointerId', $elm$json$Json$Decode$value))) : $elm$json$Json$Decode$succeed($author$project$Video$Noop);
};
var $author$project$Video$Events$volumeBar = function (model) {
	return A2(
		$elm$core$List$map,
		$mdgriffith$elm_ui$Element$htmlAttribute,
		_List_fromArray(
			[
				A2($elm$html$Html$Events$on, 'pointerdown', $author$project$Video$Events$decodeVolumeBar),
				A2($elm$html$Html$Events$on, 'pointerup', $author$project$Video$Events$decodeUnsetVolume),
				A2($elm$html$Html$Events$on, 'pointerout', $author$project$Video$Events$decodeUnsetVolume),
				A2($elm$html$Html$Events$on, 'pointerdown', $author$project$Video$Events$decodeVolumeBar),
				A2(
				$elm$html$Html$Events$on,
				'pointermove',
				$author$project$Video$Events$decodeVolumeMove(model))
			]));
};
var $author$project$Video$Views$volumeBar = function (model) {
	var volume = $elm$core$Basics$round(100 * model.volume);
	var size = A2($elm$core$Basics$min, ((model.playerSize.a * 9) / 16) | 0, model.playerSize.b);
	return A2(
		$mdgriffith$elm_ui$Element$el,
		_List_fromArray(
			[
				$mdgriffith$elm_ui$Element$width(
				$mdgriffith$elm_ui$Element$px(((2 * size) / $author$project$Video$Views$scale) | 0)),
				$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill),
				$mdgriffith$elm_ui$Element$pointer,
				$mdgriffith$elm_ui$Element$behindContent(
				A2(
					$mdgriffith$elm_ui$Element$row,
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
							$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill)
						]),
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Element$el,
							_List_fromArray(
								[
									$mdgriffith$elm_ui$Element$width(
									$mdgriffith$elm_ui$Element$fillPortion(volume)),
									$mdgriffith$elm_ui$Element$height(
									$mdgriffith$elm_ui$Element$px(5)),
									$mdgriffith$elm_ui$Element$centerY,
									$mdgriffith$elm_ui$Element$Background$color(
									A3($mdgriffith$elm_ui$Element$rgb, 1, 1, 1))
								]),
							$mdgriffith$elm_ui$Element$none),
							A2(
							$mdgriffith$elm_ui$Element$el,
							_List_fromArray(
								[
									$mdgriffith$elm_ui$Element$width(
									$mdgriffith$elm_ui$Element$fillPortion(100 - volume)),
									$mdgriffith$elm_ui$Element$height(
									$mdgriffith$elm_ui$Element$px(5)),
									$mdgriffith$elm_ui$Element$centerY,
									$mdgriffith$elm_ui$Element$Background$color(
									A3($mdgriffith$elm_ui$Element$rgb, 0.5, 0.5, 0.5))
								]),
							$mdgriffith$elm_ui$Element$none)
						]))),
				$mdgriffith$elm_ui$Element$inFront(
				A2(
					$mdgriffith$elm_ui$Element$el,
					A2(
						$elm$core$List$cons,
						$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
						A2(
							$elm$core$List$cons,
							$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill),
							A2(
								$elm$core$List$cons,
								$mdgriffith$elm_ui$Element$htmlAttribute(
									$elm$html$Html$Attributes$id(model.id + '-volumebar')),
								$author$project$Video$Events$volumeBar(model)))),
					$mdgriffith$elm_ui$Element$none))
			]),
		$mdgriffith$elm_ui$Element$none);
};
var $icidasset$elm_material_icons$Material$Icons$volume_down = A2(
	$icidasset$elm_material_icons$Material$Icons$Internal$icon,
	_List_fromArray(
		[
			$icidasset$elm_material_icons$Material$Icons$Internal$v('0 0 24 24')
		]),
	_List_fromArray(
		[
			A2(
			$icidasset$elm_material_icons$Material$Icons$Internal$p,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$d('M0 0h24v24H0z'),
					$icidasset$elm_material_icons$Material$Icons$Internal$f('none')
				]),
			_List_Nil),
			A2(
			$icidasset$elm_material_icons$Material$Icons$Internal$p,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$d('M18.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5z')
				]),
			_List_Nil)
		]));
var $icidasset$elm_material_icons$Material$Icons$volume_mute = A2(
	$icidasset$elm_material_icons$Material$Icons$Internal$icon,
	_List_fromArray(
		[
			$icidasset$elm_material_icons$Material$Icons$Internal$v('0 0 24 24')
		]),
	_List_fromArray(
		[
			A2(
			$icidasset$elm_material_icons$Material$Icons$Internal$p,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$d('M0 0h24v24H0z'),
					$icidasset$elm_material_icons$Material$Icons$Internal$f('none')
				]),
			_List_Nil),
			A2(
			$icidasset$elm_material_icons$Material$Icons$Internal$p,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$d('M7 9v6h4l5 5V4l-5 5H7z')
				]),
			_List_Nil)
		]));
var $icidasset$elm_material_icons$Material$Icons$volume_off = A2(
	$icidasset$elm_material_icons$Material$Icons$Internal$icon,
	_List_fromArray(
		[
			$icidasset$elm_material_icons$Material$Icons$Internal$v('0 0 24 24')
		]),
	_List_fromArray(
		[
			A2(
			$icidasset$elm_material_icons$Material$Icons$Internal$p,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$d('M0 0h24v24H0z'),
					$icidasset$elm_material_icons$Material$Icons$Internal$f('none')
				]),
			_List_Nil),
			A2(
			$icidasset$elm_material_icons$Material$Icons$Internal$p,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$d('M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z')
				]),
			_List_Nil)
		]));
var $icidasset$elm_material_icons$Material$Icons$volume_up = A2(
	$icidasset$elm_material_icons$Material$Icons$Internal$icon,
	_List_fromArray(
		[
			$icidasset$elm_material_icons$Material$Icons$Internal$v('0 0 24 24')
		]),
	_List_fromArray(
		[
			A2(
			$icidasset$elm_material_icons$Material$Icons$Internal$p,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$d('M0 0h24v24H0z'),
					$icidasset$elm_material_icons$Material$Icons$Internal$f('none')
				]),
			_List_Nil),
			A2(
			$icidasset$elm_material_icons$Material$Icons$Internal$p,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$d('M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z')
				]),
			_List_Nil)
		]));
var $author$project$Video$Views$volumeButton = function (model) {
	var i = model.muted ? A2($author$project$Video$Views$icon, model, $icidasset$elm_material_icons$Material$Icons$volume_off) : ((model.volume < 0.3) ? A2($author$project$Video$Views$icon, model, $icidasset$elm_material_icons$Material$Icons$volume_mute) : ((model.volume < 0.6) ? A2($author$project$Video$Views$icon, model, $icidasset$elm_material_icons$Material$Icons$volume_down) : A2($author$project$Video$Views$icon, model, $icidasset$elm_material_icons$Material$Icons$volume_up)));
	return A2(
		$mdgriffith$elm_ui$Element$Input$button,
		_List_fromArray(
			[$author$project$Video$Views$boxShadowNone]),
		{
			label: i,
			onPress: $elm$core$Maybe$Just(
				A3($author$project$Video$SetVolume, model.volume, !model.muted, $elm$core$Maybe$Nothing))
		});
};
var $author$project$Video$Views$buttonBar = function (model) {
	return A2(
		$mdgriffith$elm_ui$Element$row,
		_List_fromArray(
			[
				$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill)
			]),
		_List_fromArray(
			[
				A2(
				$mdgriffith$elm_ui$Element$row,
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$alignLeft,
						$mdgriffith$elm_ui$Element$spacing(10)
					]),
				_List_fromArray(
					[
						$author$project$Video$Views$playPauseButton(model),
						$author$project$Video$Views$volumeButton(model),
						$author$project$Video$Views$volumeBar(model),
						A2(
						$mdgriffith$elm_ui$Element$el,
						_List_fromArray(
							[
								$mdgriffith$elm_ui$Element$moveDown(2.5),
								$mdgriffith$elm_ui$Element$centerY,
								$mdgriffith$elm_ui$Element$paddingEach(
								{bottom: 0, left: 10, right: 0, top: 0})
							]),
						$mdgriffith$elm_ui$Element$text(
							$author$project$Video$Views$formatTime(model.position) + (' / ' + $author$project$Video$Views$formatTime(model.duration))))
					])),
				A2(
				$mdgriffith$elm_ui$Element$row,
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$alignRight,
						$mdgriffith$elm_ui$Element$spacing(10)
					]),
				_List_fromArray(
					[
						$author$project$Video$Views$subtitlesButton(model),
						$author$project$Video$Views$speedButton(model),
						$author$project$Video$Views$qualityButton(model),
						$author$project$Video$Views$fullscreenButton(model)
					]))
			]));
};
var $andrewMacmurray$elm_simple_animation$Simple$Animation$Stepped = function (a) {
	return {$: 'Stepped', a: a};
};
var $andrewMacmurray$elm_simple_animation$Simple$Animation$Step = F2(
	function (a, b) {
		return {$: 'Step', a: a, b: b};
	});
var $andrewMacmurray$elm_simple_animation$Simple$Animation$step = $andrewMacmurray$elm_simple_animation$Simple$Animation$Step;
var $andrewMacmurray$elm_simple_animation$Internal$Animation$Animation = F3(
	function (a, b, c) {
		return {$: 'Animation', a: a, b: b, c: c};
	});
var $andrewMacmurray$elm_simple_animation$Internal$Animation$Frame = F2(
	function (a, b) {
		return {$: 'Frame', a: a, b: b};
	});
var $andrewMacmurray$elm_simple_animation$Simple$Animation$duration = $andrewMacmurray$elm_simple_animation$Internal$Animation$duration_;
var $andrewMacmurray$elm_simple_animation$Simple$Animation$adjustCompleteWait = F2(
	function (anim, timePassed) {
		var duration_ = $andrewMacmurray$elm_simple_animation$Simple$Animation$duration(anim);
		return ((duration_ - timePassed) >= 1) ? duration_ : (timePassed + 1);
	});
var $andrewMacmurray$elm_simple_animation$Simple$Animation$frameProps = function (_v0) {
	var props = _v0.b;
	return props;
};
var $andrewMacmurray$elm_simple_animation$Simple$Animation$accumDuration = F2(
	function (step_, curr) {
		switch (step_.$) {
			case 'Step':
				var d = step_.a;
				return d + curr;
			case 'Wait':
				var d = step_.a;
				return d + curr;
			default:
				var anim = step_.a;
				return A2($andrewMacmurray$elm_simple_animation$Simple$Animation$adjustCompleteWait, anim, curr);
		}
	});
var $andrewMacmurray$elm_simple_animation$Simple$Animation$totalDuration = A2($elm$core$List$foldl, $andrewMacmurray$elm_simple_animation$Simple$Animation$accumDuration, 0);
var $andrewMacmurray$elm_simple_animation$Simple$Animation$toFrames = F2(
	function (firstFrame, steps_) {
		var percentPerMs = 100 / $andrewMacmurray$elm_simple_animation$Simple$Animation$totalDuration(steps_);
		var getFrame = F2(
			function (f, _v2) {
				var n = _v2.a;
				var xs = _v2.b;
				var cur = _v2.c;
				switch (f.$) {
					case 'Step':
						var d = f.a;
						var props = f.b;
						return _Utils_Tuple3(
							n + d,
							_Utils_ap(
								xs,
								_List_fromArray(
									[cur])),
							A2($andrewMacmurray$elm_simple_animation$Internal$Animation$Frame, percentPerMs * (n + d), props));
					case 'Wait':
						var d = f.a;
						return _Utils_Tuple3(
							n + d,
							_Utils_ap(
								xs,
								_List_fromArray(
									[cur])),
							A2(
								$andrewMacmurray$elm_simple_animation$Internal$Animation$Frame,
								percentPerMs * (n + d),
								$andrewMacmurray$elm_simple_animation$Simple$Animation$frameProps(cur)));
					default:
						var d = f.a;
						var dur = A2($andrewMacmurray$elm_simple_animation$Simple$Animation$adjustCompleteWait, d, n);
						return _Utils_Tuple3(
							dur,
							_Utils_ap(
								xs,
								_List_fromArray(
									[cur])),
							A2(
								$andrewMacmurray$elm_simple_animation$Internal$Animation$Frame,
								percentPerMs * dur,
								$andrewMacmurray$elm_simple_animation$Simple$Animation$frameProps(cur)));
				}
			});
		return function (_v0) {
			var xs = _v0.b;
			var curr = _v0.c;
			return _Utils_ap(
				xs,
				_List_fromArray(
					[curr]));
		}(
			A3(
				$elm$core$List$foldl,
				getFrame,
				_Utils_Tuple3(
					0,
					_List_Nil,
					A2($andrewMacmurray$elm_simple_animation$Internal$Animation$Frame, 0, firstFrame)),
				steps_));
	});
var $andrewMacmurray$elm_simple_animation$Simple$Animation$toAnimation = function (_v0) {
	var s = _v0.a;
	return A3(
		$andrewMacmurray$elm_simple_animation$Internal$Animation$Animation,
		$andrewMacmurray$elm_simple_animation$Simple$Animation$totalDuration(s.steps),
		s.options,
		A2($andrewMacmurray$elm_simple_animation$Simple$Animation$toFrames, s.startAt, s.steps));
};
var $andrewMacmurray$elm_simple_animation$Simple$Animation$fromTo = F3(
	function (o, from_, to_) {
		return $andrewMacmurray$elm_simple_animation$Simple$Animation$toAnimation(
			$andrewMacmurray$elm_simple_animation$Simple$Animation$Stepped(
				{
					options: o.options,
					startAt: from_,
					steps: _List_fromArray(
						[
							A2($andrewMacmurray$elm_simple_animation$Simple$Animation$step, o.duration, to_)
						])
				}));
	});
var $andrewMacmurray$elm_simple_animation$Internal$Animation$Property$Opacity = function (a) {
	return {$: 'Opacity', a: a};
};
var $andrewMacmurray$elm_simple_animation$Simple$Animation$Property$opacity = $andrewMacmurray$elm_simple_animation$Internal$Animation$Property$Opacity;
var $author$project$Video$Views$fadeIn = A3(
	$andrewMacmurray$elm_simple_animation$Simple$Animation$fromTo,
	{duration: 500, options: _List_Nil},
	_List_fromArray(
		[
			$andrewMacmurray$elm_simple_animation$Simple$Animation$Property$opacity(0)
		]),
	_List_fromArray(
		[
			$andrewMacmurray$elm_simple_animation$Simple$Animation$Property$opacity(1)
		]));
var $author$project$Video$Views$fadeOut = A3(
	$andrewMacmurray$elm_simple_animation$Simple$Animation$fromTo,
	{duration: 500, options: _List_Nil},
	_List_fromArray(
		[
			$andrewMacmurray$elm_simple_animation$Simple$Animation$Property$opacity(1)
		]),
	_List_fromArray(
		[
			$andrewMacmurray$elm_simple_animation$Simple$Animation$Property$opacity(0)
		]));
var $author$project$Video$Views$fadeElement = F4(
	function (fadeTimer, current, attr, el) {
		return (_Utils_cmp(current, fadeTimer.disappear) > 0) ? $mdgriffith$elm_ui$Element$none : A3(
			$author$project$Video$Views$animatedEl,
			(_Utils_cmp(current, fadeTimer.fade) > 0) ? $author$project$Video$Views$fadeOut : $author$project$Video$Views$fadeIn,
			attr,
			el);
	});
var $author$project$Video$fadeTimerOverlay = {disappear: 3500, fade: 3000};
var $mdgriffith$elm_ui$Internal$Flag$bgGradient = $mdgriffith$elm_ui$Internal$Flag$flag(10);
var $mdgriffith$elm_ui$Element$Background$gradient = function (_v0) {
	var angle = _v0.angle;
	var steps = _v0.steps;
	if (!steps.b) {
		return $mdgriffith$elm_ui$Internal$Model$NoAttribute;
	} else {
		if (!steps.b.b) {
			var clr = steps.a;
			return A2(
				$mdgriffith$elm_ui$Internal$Model$StyleClass,
				$mdgriffith$elm_ui$Internal$Flag$bgColor,
				A3(
					$mdgriffith$elm_ui$Internal$Model$Colored,
					'bg-' + $mdgriffith$elm_ui$Internal$Model$formatColorClass(clr),
					'background-color',
					clr));
		} else {
			return A2(
				$mdgriffith$elm_ui$Internal$Model$StyleClass,
				$mdgriffith$elm_ui$Internal$Flag$bgGradient,
				A3(
					$mdgriffith$elm_ui$Internal$Model$Single,
					'bg-grad-' + A2(
						$elm$core$String$join,
						'-',
						A2(
							$elm$core$List$cons,
							$mdgriffith$elm_ui$Internal$Model$floatClass(angle),
							A2($elm$core$List$map, $mdgriffith$elm_ui$Internal$Model$formatColorClass, steps))),
					'background-image',
					'linear-gradient(' + (A2(
						$elm$core$String$join,
						', ',
						A2(
							$elm$core$List$cons,
							$elm$core$String$fromFloat(angle) + 'rad',
							A2($elm$core$List$map, $mdgriffith$elm_ui$Internal$Model$formatColor, steps))) + ')')));
		}
	}
};
var $mdgriffith$elm_ui$Element$rgba = $mdgriffith$elm_ui$Internal$Model$Rgba;
var $mdgriffith$elm_ui$Internal$Model$Above = {$: 'Above'};
var $mdgriffith$elm_ui$Element$above = function (element) {
	return A2($mdgriffith$elm_ui$Element$createNearby, $mdgriffith$elm_ui$Internal$Model$Above, element);
};
var $author$project$Video$Views$everyAux = F4(
	function (duration, currentTime, currentState, input) {
		everyAux:
		while (true) {
			if (!input.b) {
				return A2(
					$elm$core$List$cons,
					_Utils_Tuple3(currentTime, duration, false),
					currentState);
			} else {
				if (!input.b.b) {
					var _v1 = input.a;
					var start = _v1.a;
					var end = _v1.b;
					return A2(
						$elm$core$List$cons,
						_Utils_Tuple3(end, duration, false),
						A2(
							$elm$core$List$cons,
							_Utils_Tuple3(start, end, true),
							A2(
								$elm$core$List$cons,
								_Utils_Tuple3(currentTime, start, false),
								currentState)));
				} else {
					var _v2 = input.a;
					var start = _v2.a;
					var end = _v2.b;
					var t = input.b;
					var $temp$duration = duration,
						$temp$currentTime = end,
						$temp$currentState = A2(
						$elm$core$List$cons,
						_Utils_Tuple3(start, end, true),
						A2(
							$elm$core$List$cons,
							_Utils_Tuple3(currentTime, start, false),
							currentState)),
						$temp$input = t;
					duration = $temp$duration;
					currentTime = $temp$currentTime;
					currentState = $temp$currentState;
					input = $temp$input;
					continue everyAux;
				}
			}
		}
	});
var $author$project$Video$Views$every = F2(
	function (duration, input) {
		return A2(
			$elm$core$List$filter,
			function (_v0) {
				var x = _v0.a;
				var y = _v0.b;
				return !_Utils_eq(x, y);
			},
			$elm$core$List$reverse(
				A4($author$project$Video$Views$everyAux, duration, 0.0, _List_Nil, input)));
	});
var $elm$core$List$drop = F2(
	function (n, list) {
		drop:
		while (true) {
			if (n <= 0) {
				return list;
			} else {
				if (!list.b) {
					return list;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs;
					n = $temp$n;
					list = $temp$list;
					continue drop;
				}
			}
		}
	});
var $elm$html$Html$img = _VirtualDom_node('img');
var $mdgriffith$elm_ui$Internal$Model$MoveX = function (a) {
	return {$: 'MoveX', a: a};
};
var $mdgriffith$elm_ui$Internal$Flag$moveX = $mdgriffith$elm_ui$Internal$Flag$flag(25);
var $mdgriffith$elm_ui$Element$moveRight = function (x) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$TransformComponent,
		$mdgriffith$elm_ui$Internal$Flag$moveX,
		$mdgriffith$elm_ui$Internal$Model$MoveX(x));
};
var $elm$core$String$cons = _String_cons;
var $elm$core$String$fromChar = function (_char) {
	return A2($elm$core$String$cons, _char, '');
};
var $elm$core$Bitwise$shiftRightBy = _Bitwise_shiftRightBy;
var $elm$core$String$repeatHelp = F3(
	function (n, chunk, result) {
		return (n <= 0) ? result : A3(
			$elm$core$String$repeatHelp,
			n >> 1,
			_Utils_ap(chunk, chunk),
			(!(n & 1)) ? result : _Utils_ap(result, chunk));
	});
var $elm$core$String$repeat = F2(
	function (n, chunk) {
		return A3($elm$core$String$repeatHelp, n, chunk, '');
	});
var $elm$core$String$padLeft = F3(
	function (n, _char, string) {
		return _Utils_ap(
			A2(
				$elm$core$String$repeat,
				n - $elm$core$String$length(string),
				$elm$core$String$fromChar(_char)),
			string);
	});
var $mdgriffith$elm_ui$Internal$Model$formatTextShadow = function (shadow) {
	return A2(
		$elm$core$String$join,
		' ',
		_List_fromArray(
			[
				$elm$core$String$fromFloat(shadow.offset.a) + 'px',
				$elm$core$String$fromFloat(shadow.offset.b) + 'px',
				$elm$core$String$fromFloat(shadow.blur) + 'px',
				$mdgriffith$elm_ui$Internal$Model$formatColor(shadow.color)
			]));
};
var $mdgriffith$elm_ui$Internal$Model$textShadowClass = function (shadow) {
	return $elm$core$String$concat(
		_List_fromArray(
			[
				'txt',
				$mdgriffith$elm_ui$Internal$Model$floatClass(shadow.offset.a) + 'px',
				$mdgriffith$elm_ui$Internal$Model$floatClass(shadow.offset.b) + 'px',
				$mdgriffith$elm_ui$Internal$Model$floatClass(shadow.blur) + 'px',
				$mdgriffith$elm_ui$Internal$Model$formatColorClass(shadow.color)
			]));
};
var $mdgriffith$elm_ui$Internal$Flag$txtShadows = $mdgriffith$elm_ui$Internal$Flag$flag(18);
var $mdgriffith$elm_ui$Element$Font$shadow = function (shade) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$txtShadows,
		A3(
			$mdgriffith$elm_ui$Internal$Model$Single,
			$mdgriffith$elm_ui$Internal$Model$textShadowClass(shade),
			'text-shadow',
			$mdgriffith$elm_ui$Internal$Model$formatTextShadow(shade)));
};
var $elm$html$Html$Attributes$src = function (url) {
	return A2(
		$elm$html$Html$Attributes$stringProperty,
		'src',
		_VirtualDom_noJavaScriptOrHtmlUri(url));
};
var $author$project$Video$Views$miniature = function (model) {
	var _v0 = _Utils_Tuple3(model.enableMiniatures, model.mobile, model.showMiniature);
	if ((_v0.a && (!_v0.b)) && (_v0.c.$ === 'Just')) {
		var _v1 = _v0.c.a;
		var position = _v1.a;
		var size = _v1.b;
		var width = $elm$core$Basics$round(model.playerSize.a / 5);
		var relativePosition = position / size;
		var miniatureId = $elm$core$Basics$round(relativePosition * 100);
		var miniatureIdString = 'miniature-' + (A3(
			$elm$core$String$padLeft,
			3,
			_Utils_chr('0'),
			$elm$core$String$fromInt(miniatureId)) + '.png');
		var miniatureUrl = A2(
			$elm$core$String$join,
			'/',
			$elm$core$List$reverse(
				function (list) {
					return A2($elm$core$List$cons, miniatureIdString, list);
				}(
					A2(
						$elm$core$List$drop,
						1,
						$elm$core$List$reverse(
							A2($elm$core$String$split, '/', model.url))))));
		var border = 2;
		var rightPosition = A2(
			$elm$core$Basics$min,
			size - width,
			A2($elm$core$Basics$max, 0, position - (((width + border) / 2) | 0)));
		return A2(
			$mdgriffith$elm_ui$Element$column,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$moveRight(rightPosition),
					$mdgriffith$elm_ui$Element$spacing(10),
					$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$shrink)
				]),
			_List_fromArray(
				[
					A2(
					$mdgriffith$elm_ui$Element$el,
					_List_Nil,
					$mdgriffith$elm_ui$Element$html(
						A2(
							$elm$html$Html$img,
							_List_fromArray(
								[
									A2($elm$html$Html$Attributes$style, 'border-style', 'solid'),
									A2($elm$html$Html$Attributes$style, 'border-width', '2px'),
									A2($elm$html$Html$Attributes$style, 'border-color', 'white'),
									A2(
									$elm$html$Html$Attributes$style,
									'width',
									$elm$core$String$fromInt(width) + 'px'),
									$elm$html$Html$Attributes$src(miniatureUrl)
								]),
							_List_Nil))),
					A2(
					$mdgriffith$elm_ui$Element$el,
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$centerX,
							$mdgriffith$elm_ui$Element$Font$shadow(
							{
								blur: 4,
								color: A3($mdgriffith$elm_ui$Element$rgb, 0, 0, 0),
								offset: _Utils_Tuple2(0, 0)
							})
						]),
					$mdgriffith$elm_ui$Element$text(
						$author$project$Video$Views$formatTime(relativePosition * model.duration)))
				]));
	} else {
		return $mdgriffith$elm_ui$Element$none;
	}
};
var $mdgriffith$elm_ui$Element$Border$roundEach = function (_v0) {
	var topLeft = _v0.topLeft;
	var topRight = _v0.topRight;
	var bottomLeft = _v0.bottomLeft;
	var bottomRight = _v0.bottomRight;
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$borderRound,
		A3(
			$mdgriffith$elm_ui$Internal$Model$Single,
			'br-' + ($elm$core$String$fromInt(topLeft) + ('-' + ($elm$core$String$fromInt(topRight) + ($elm$core$String$fromInt(bottomLeft) + ('-' + $elm$core$String$fromInt(bottomRight)))))),
			'border-radius',
			$elm$core$String$fromInt(topLeft) + ('px ' + ($elm$core$String$fromInt(topRight) + ('px ' + ($elm$core$String$fromInt(bottomRight) + ('px ' + ($elm$core$String$fromInt(bottomLeft) + 'px'))))))));
};
var $author$project$Video$NowHasMiniature = function (a) {
	return {$: 'NowHasMiniature', a: a};
};
var $author$project$Video$Events$decodeMouseEnter = A3(
	$elm$json$Json$Decode$map2,
	F2(
		function (x, y) {
			return $author$project$Video$NowHasMiniature(
				$elm$core$Maybe$Just(
					_Utils_Tuple2(x, y)));
		}),
	A2($elm$json$Json$Decode$field, 'offsetX', $elm$json$Json$Decode$int),
	A2(
		$elm$json$Json$Decode$field,
		'target',
		A2($elm$json$Json$Decode$field, 'offsetWidth', $elm$json$Json$Decode$int)));
var $author$project$Video$Events$decodeMouseLeave = $elm$json$Json$Decode$succeed(
	$author$project$Video$NowHasMiniature($elm$core$Maybe$Nothing));
var $author$project$Video$Seek = F2(
	function (a, b) {
		return {$: 'Seek', a: a, b: b};
	});
var $author$project$Video$Events$decodeSeek = function (model) {
	return A4(
		$elm$json$Json$Decode$map3,
		F2(
			function (x, y) {
				return $author$project$Video$Seek((x / y) * model.duration);
			}),
		A2($elm$json$Json$Decode$field, 'layerX', $elm$json$Json$Decode$int),
		A2(
			$elm$json$Json$Decode$field,
			'target',
			A2($elm$json$Json$Decode$field, 'offsetWidth', $elm$json$Json$Decode$int)),
		A2(
			$elm$json$Json$Decode$map,
			$elm$core$Maybe$Just,
			A2($elm$json$Json$Decode$field, 'pointerId', $elm$json$Json$Decode$value)));
};
var $author$project$Video$Events$decodeSeekMove = function (model) {
	return model.holdingSeek ? A4(
		$elm$json$Json$Decode$map3,
		F2(
			function (x, y) {
				return $author$project$Video$Seek((x / y) * model.duration);
			}),
		A2($elm$json$Json$Decode$field, 'layerX', $elm$json$Json$Decode$int),
		A2(
			$elm$json$Json$Decode$field,
			'target',
			A2($elm$json$Json$Decode$field, 'offsetWidth', $elm$json$Json$Decode$int)),
		$elm$json$Json$Decode$succeed($elm$core$Maybe$Nothing)) : $elm$json$Json$Decode$succeed($author$project$Video$Noop);
};
var $author$project$Video$Unseek = function (a) {
	return {$: 'Unseek', a: a};
};
var $author$project$Video$Events$decodeUnseek = A2(
	$elm$json$Json$Decode$map,
	$author$project$Video$Unseek,
	A2($elm$json$Json$Decode$field, 'pointerId', $elm$json$Json$Decode$value));
var $author$project$Video$Events$seekBar = function (model) {
	return A2(
		$elm$core$List$map,
		$mdgriffith$elm_ui$Element$htmlAttribute,
		_List_fromArray(
			[
				A2(
				$elm$html$Html$Events$on,
				'pointerdown',
				$author$project$Video$Events$decodeSeek(model)),
				A2($elm$html$Html$Events$on, 'pointerup', $author$project$Video$Events$decodeUnseek),
				A2($elm$html$Html$Events$on, 'pointerout', $author$project$Video$Events$decodeUnseek),
				A2(
				$elm$html$Html$Events$on,
				'pointermove',
				$author$project$Video$Events$decodeSeekMove(model)),
				A2($elm$html$Html$Events$on, 'mouseenter', $author$project$Video$Events$decodeMouseEnter),
				A2($elm$html$Html$Events$on, 'mouseleave', $author$project$Video$Events$decodeMouseLeave),
				A2($elm$html$Html$Events$on, 'mousemove', $author$project$Video$Events$decodeMouseEnter)
			]));
};
var $author$project$Video$Views$seekbar = function (model) {
	var showRange = function (_v1) {
		var start = _v1.a;
		var end = _v1.b;
		var isLoaded = _v1.c;
		var portion = $elm$core$Basics$round(1000 * (end - start));
		return A2(
			$mdgriffith$elm_ui$Element$el,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$width(
					$mdgriffith$elm_ui$Element$fillPortion(portion)),
					$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill),
					isLoaded ? $mdgriffith$elm_ui$Element$Background$color(
					A4($mdgriffith$elm_ui$Element$rgba, 1, 1, 1, 0.5)) : $mdgriffith$elm_ui$Element$Background$color(
					A4($mdgriffith$elm_ui$Element$rgba, 1, 1, 1, 0))
				]),
			$mdgriffith$elm_ui$Element$none);
	};
	var seen = $elm$core$Basics$round(model.position * 1000);
	var remaining = $elm$core$Basics$round((model.duration - model.position) * 1000);
	var loaded = A2(
		$elm$core$List$filter,
		function (_v0) {
			var start = _v0.a;
			return _Utils_cmp(start, model.position) < 0;
		},
		model.loaded);
	var loadedToShow = A2($author$project$Video$Views$every, model.duration, loaded);
	var loadedElement = A2(
		$mdgriffith$elm_ui$Element$row,
		_List_fromArray(
			[
				$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
				$mdgriffith$elm_ui$Element$height(
				$mdgriffith$elm_ui$Element$px(5)),
				$mdgriffith$elm_ui$Element$centerY,
				$mdgriffith$elm_ui$Element$Border$rounded(5)
			]),
		A2($elm$core$List$map, showRange, loadedToShow));
	return A2(
		$mdgriffith$elm_ui$Element$row,
		_List_fromArray(
			[
				$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
				$mdgriffith$elm_ui$Element$height(
				$mdgriffith$elm_ui$Element$px(30)),
				$mdgriffith$elm_ui$Element$Border$rounded(5),
				$mdgriffith$elm_ui$Element$behindContent(
				A2(
					$mdgriffith$elm_ui$Element$el,
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$Background$color(
							A4($mdgriffith$elm_ui$Element$rgba, 1, 1, 1, 0.25)),
							$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
							$mdgriffith$elm_ui$Element$height(
							$mdgriffith$elm_ui$Element$px(5)),
							$mdgriffith$elm_ui$Element$centerY,
							$mdgriffith$elm_ui$Element$Border$rounded(5)
						]),
					$mdgriffith$elm_ui$Element$none)),
				$mdgriffith$elm_ui$Element$behindContent(loadedElement),
				$mdgriffith$elm_ui$Element$inFront(
				A2(
					$mdgriffith$elm_ui$Element$el,
					A2(
						$elm$core$List$cons,
						$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
						A2(
							$elm$core$List$cons,
							$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill),
							A2(
								$elm$core$List$cons,
								$mdgriffith$elm_ui$Element$pointer,
								A2(
									$elm$core$List$cons,
									$mdgriffith$elm_ui$Element$htmlAttribute(
										$elm$html$Html$Attributes$id(model.id + '-seekbar')),
									$author$project$Video$Events$seekBar(model))))),
					$mdgriffith$elm_ui$Element$none)),
				$mdgriffith$elm_ui$Element$above(
				$author$project$Video$Views$miniature(model))
			]),
		_List_fromArray(
			[
				A2(
				$mdgriffith$elm_ui$Element$el,
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$Background$color(
						A4($mdgriffith$elm_ui$Element$rgba, 1, 0, 0, 0.75)),
						$mdgriffith$elm_ui$Element$width(
						$mdgriffith$elm_ui$Element$fillPortion(seen)),
						$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill),
						$mdgriffith$elm_ui$Element$Border$roundEach(
						{bottomLeft: 5, bottomRight: 0, topLeft: 5, topRight: 0}),
						$mdgriffith$elm_ui$Element$height(
						$mdgriffith$elm_ui$Element$px(5)),
						$mdgriffith$elm_ui$Element$centerY
					]),
				$mdgriffith$elm_ui$Element$none),
				A2(
				$mdgriffith$elm_ui$Element$el,
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$width(
						$mdgriffith$elm_ui$Element$fillPortion(remaining))
					]),
				$mdgriffith$elm_ui$Element$none)
			]));
};
var $author$project$Video$Views$controls = function (model) {
	return A4(
		$author$project$Video$Views$fadeElement,
		$author$project$Video$fadeTimerOverlay,
		model.animationFrame - model.overlayTimer,
		_List_fromArray(
			[
				$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
				$mdgriffith$elm_ui$Element$padding(10),
				model.mobile ? $mdgriffith$elm_ui$Element$Background$color(
				A4($mdgriffith$elm_ui$Element$rgba, 0, 0, 0, 0)) : $mdgriffith$elm_ui$Element$Background$gradient(
				{
					angle: 0,
					steps: _List_fromArray(
						[
							A4($mdgriffith$elm_ui$Element$rgba, 0, 0, 0, 0.75),
							A4($mdgriffith$elm_ui$Element$rgba, 0, 0, 0, 0)
						])
				})
			]),
		A2(
			$mdgriffith$elm_ui$Element$column,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill)
				]),
			_List_fromArray(
				[
					$author$project$Video$Views$seekbar(model),
					$author$project$Video$Views$buttonBar(model)
				])));
};
var $mdgriffith$elm_ui$Element$Keyed$el = F2(
	function (attrs, child) {
		return A4(
			$mdgriffith$elm_ui$Internal$Model$element,
			$mdgriffith$elm_ui$Internal$Model$asEl,
			$mdgriffith$elm_ui$Internal$Model$div,
			A2(
				$elm$core$List$cons,
				$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$shrink),
				A2(
					$elm$core$List$cons,
					$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$shrink),
					attrs)),
			$mdgriffith$elm_ui$Internal$Model$Keyed(
				_List_fromArray(
					[child])));
	});
var $andrewMacmurray$elm_simple_animation$Internal$Animation$Property$Transform = function (a) {
	return {$: 'Transform', a: a};
};
var $andrewMacmurray$elm_simple_animation$Internal$Transform$ScaleXY = F2(
	function (a, b) {
		return {$: 'ScaleXY', a: a, b: b};
	});
var $andrewMacmurray$elm_simple_animation$Internal$Transform$scaleXY = $andrewMacmurray$elm_simple_animation$Internal$Transform$ScaleXY;
var $andrewMacmurray$elm_simple_animation$Simple$Animation$Property$scale = function (n) {
	return $andrewMacmurray$elm_simple_animation$Internal$Animation$Property$Transform(
		A2($andrewMacmurray$elm_simple_animation$Internal$Transform$scaleXY, n, n));
};
var $author$project$Video$Views$fadeOutZoom = A3(
	$andrewMacmurray$elm_simple_animation$Simple$Animation$fromTo,
	{duration: 500, options: _List_Nil},
	_List_fromArray(
		[
			$andrewMacmurray$elm_simple_animation$Simple$Animation$Property$opacity(1),
			$andrewMacmurray$elm_simple_animation$Simple$Animation$Property$scale(1)
		]),
	_List_fromArray(
		[
			$andrewMacmurray$elm_simple_animation$Simple$Animation$Property$opacity(0),
			$andrewMacmurray$elm_simple_animation$Simple$Animation$Property$scale(5)
		]));
var $author$project$Video$Views$fadeOutZoomElement = F4(
	function (fadeTimer, current, attr, el) {
		return (_Utils_cmp(current, fadeTimer.disappear) > 0) ? $mdgriffith$elm_ui$Element$none : A3($author$project$Video$Views$animatedEl, $author$project$Video$Views$fadeOutZoom, attr, el);
	});
var $author$project$Video$fadeTimerIcon = {disappear: 500, fade: 0};
var $author$project$Video$Views$hideCursor = $mdgriffith$elm_ui$Element$htmlAttribute(
	A2($elm$html$Html$Attributes$style, 'cursor', 'none'));
var $icidasset$elm_material_icons$Material$Icons$fast_forward = A2(
	$icidasset$elm_material_icons$Material$Icons$Internal$icon,
	_List_fromArray(
		[
			$icidasset$elm_material_icons$Material$Icons$Internal$v('0 0 24 24')
		]),
	_List_fromArray(
		[
			A2(
			$icidasset$elm_material_icons$Material$Icons$Internal$p,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$d('M0 0h24v24H0z'),
					$icidasset$elm_material_icons$Material$Icons$Internal$f('none')
				]),
			_List_Nil),
			A2(
			$icidasset$elm_material_icons$Material$Icons$Internal$p,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$d('M4 18l8.5-6L4 6v12zm9-12v12l8.5-6L13 6z')
				]),
			_List_Nil)
		]));
var $author$project$Video$Views$fastForwardButton = function (model) {
	return A2(
		$mdgriffith$elm_ui$Element$Input$button,
		_List_fromArray(
			[$author$project$Video$Views$boxShadowNone]),
		{
			label: A2($author$project$Video$Views$icon, model, $icidasset$elm_material_icons$Material$Icons$fast_forward),
			onPress: $elm$core$Maybe$Just(
				A2($author$project$Video$Seek, model.position + 10, $elm$core$Maybe$Nothing))
		});
};
var $icidasset$elm_material_icons$Material$Icons$fast_rewind = A2(
	$icidasset$elm_material_icons$Material$Icons$Internal$icon,
	_List_fromArray(
		[
			$icidasset$elm_material_icons$Material$Icons$Internal$v('0 0 24 24')
		]),
	_List_fromArray(
		[
			A2(
			$icidasset$elm_material_icons$Material$Icons$Internal$p,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$d('M0 0h24v24H0z'),
					$icidasset$elm_material_icons$Material$Icons$Internal$f('none')
				]),
			_List_Nil),
			A2(
			$icidasset$elm_material_icons$Material$Icons$Internal$p,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$d('M11 18V6l-8.5 6 8.5 6zm.5-6l8.5 6V6l-8.5 6z')
				]),
			_List_Nil)
		]));
var $author$project$Video$Views$rewindButton = function (model) {
	return A2(
		$mdgriffith$elm_ui$Element$Input$button,
		_List_fromArray(
			[$author$project$Video$Views$boxShadowNone]),
		{
			label: A2($author$project$Video$Views$icon, model, $icidasset$elm_material_icons$Material$Icons$fast_rewind),
			onPress: $elm$core$Maybe$Just(
				A2($author$project$Video$Seek, model.position - 10, $elm$core$Maybe$Nothing))
		});
};
var $mdgriffith$elm_ui$Internal$Model$Scale = function (a) {
	return {$: 'Scale', a: a};
};
var $mdgriffith$elm_ui$Internal$Flag$scale = $mdgriffith$elm_ui$Internal$Flag$flag(23);
var $mdgriffith$elm_ui$Element$scale = function (n) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$TransformComponent,
		$mdgriffith$elm_ui$Internal$Flag$scale,
		$mdgriffith$elm_ui$Internal$Model$Scale(
			_Utils_Tuple3(n, n, 1)));
};
var $author$project$Video$Views$mobileOverlay = function (model) {
	return model.mobile ? A4(
		$author$project$Video$Views$fadeElement,
		$author$project$Video$fadeTimerOverlay,
		model.animationFrame - model.overlayTimer,
		_List_fromArray(
			[
				$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
				$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill)
			]),
		A2(
			$mdgriffith$elm_ui$Element$row,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$Background$color(
					A4($mdgriffith$elm_ui$Element$rgba, 0, 0, 0, 0.5)),
					$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
					$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill)
				]),
			_List_fromArray(
				[
					A2(
					$mdgriffith$elm_ui$Element$el,
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
							$mdgriffith$elm_ui$Element$centerY
						]),
					A2(
						$mdgriffith$elm_ui$Element$el,
						_List_fromArray(
							[
								$mdgriffith$elm_ui$Element$centerX,
								$mdgriffith$elm_ui$Element$scale(2)
							]),
						$author$project$Video$Views$rewindButton(model))),
					A2(
					$mdgriffith$elm_ui$Element$el,
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
							$mdgriffith$elm_ui$Element$centerY
						]),
					A2(
						$mdgriffith$elm_ui$Element$el,
						_List_fromArray(
							[
								$mdgriffith$elm_ui$Element$centerX,
								$mdgriffith$elm_ui$Element$scale(4)
							]),
						$author$project$Video$Views$playPauseButton(model))),
					A2(
					$mdgriffith$elm_ui$Element$el,
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
							$mdgriffith$elm_ui$Element$centerY
						]),
					A2(
						$mdgriffith$elm_ui$Element$el,
						_List_fromArray(
							[
								$mdgriffith$elm_ui$Element$centerX,
								$mdgriffith$elm_ui$Element$scale(2)
							]),
						$author$project$Video$Views$fastForwardButton(model)))
				]))) : $mdgriffith$elm_ui$Element$none;
};
var $author$project$Video$ResetTimer = {$: 'ResetTimer'};
var $author$project$Video$Events$overlay = function (model) {
	return model.mobile ? _List_fromArray(
		[
			$mdgriffith$elm_ui$Element$htmlAttribute(
			A2(
				$elm$html$Html$Events$on,
				'click',
				$elm$json$Json$Decode$succeed($author$project$Video$ResetTimer)))
		]) : _List_fromArray(
		[
			$mdgriffith$elm_ui$Element$htmlAttribute(
			A2(
				$elm$html$Html$Events$on,
				'click',
				$elm$json$Json$Decode$succeed($author$project$Video$PlayPause)))
		]);
};
var $author$project$Video$Events$decodeKeyDown = F2(
	function (focusonly, model) {
		return A2(
			$elm$json$Json$Decode$andThen,
			function (x) {
				var _v0 = _Utils_Tuple2(focusonly, x);
				_v0$30:
				while (true) {
					if (_v0.a) {
						switch (_v0.b) {
							case 'Space':
								return $elm$json$Json$Decode$succeed($author$project$Video$PlayPause);
							case 'ArrowLeft':
								return $elm$json$Json$Decode$succeed(
									A2(
										$author$project$Video$Seek,
										A2($elm$core$Basics$max, 0, model.position - 5),
										$elm$core$Maybe$Nothing));
							case 'ArrowRight':
								return $elm$json$Json$Decode$succeed(
									A2(
										$author$project$Video$Seek,
										A2($elm$core$Basics$min, model.duration, model.position + 5),
										$elm$core$Maybe$Nothing));
							case 'ArrowDown':
								return $elm$json$Json$Decode$succeed(
									A3(
										$author$project$Video$SetVolume,
										A2($elm$core$Basics$max, 0, model.volume - 0.1),
										model.muted,
										$elm$core$Maybe$Nothing));
							case 'ArrowUp':
								return $elm$json$Json$Decode$succeed(
									A3(
										$author$project$Video$SetVolume,
										A2($elm$core$Basics$min, 1, model.volume + 0.1),
										model.muted,
										$elm$core$Maybe$Nothing));
							default:
								break _v0$30;
						}
					} else {
						switch (_v0.b) {
							case 'KeyJ':
								return $elm$json$Json$Decode$succeed(
									A2(
										$author$project$Video$Seek,
										A2($elm$core$Basics$max, 0, model.position - 10),
										$elm$core$Maybe$Nothing));
							case 'KeyL':
								return $elm$json$Json$Decode$succeed(
									A2(
										$author$project$Video$Seek,
										A2($elm$core$Basics$min, model.duration, model.position + 10),
										$elm$core$Maybe$Nothing));
							case 'KeyK':
								return $elm$json$Json$Decode$succeed($author$project$Video$PlayPause);
							case 'KeyM':
								return $elm$json$Json$Decode$succeed(
									A3($author$project$Video$SetVolume, model.volume, !model.muted, $elm$core$Maybe$Nothing));
							case 'KeyF':
								return $elm$json$Json$Decode$succeed(
									model.isFullscreen ? $author$project$Video$ExitFullscreen : $author$project$Video$RequestFullscreen);
							case 'Digit0':
								return $elm$json$Json$Decode$succeed(
									A2($author$project$Video$Seek, 0, $elm$core$Maybe$Nothing));
							case 'Numpad0':
								return $elm$json$Json$Decode$succeed(
									A2($author$project$Video$Seek, 0, $elm$core$Maybe$Nothing));
							case 'Digit1':
								return $elm$json$Json$Decode$succeed(
									A2($author$project$Video$Seek, 0.1 * model.duration, $elm$core$Maybe$Nothing));
							case 'Numpad1':
								return $elm$json$Json$Decode$succeed(
									A2($author$project$Video$Seek, 0.1 * model.duration, $elm$core$Maybe$Nothing));
							case 'Digit2':
								return $elm$json$Json$Decode$succeed(
									A2($author$project$Video$Seek, 0.2 * model.duration, $elm$core$Maybe$Nothing));
							case 'Numpad2':
								return $elm$json$Json$Decode$succeed(
									A2($author$project$Video$Seek, 0.2 * model.duration, $elm$core$Maybe$Nothing));
							case 'Digit3':
								return $elm$json$Json$Decode$succeed(
									A2($author$project$Video$Seek, 0.3 * model.duration, $elm$core$Maybe$Nothing));
							case 'Numpad3':
								return $elm$json$Json$Decode$succeed(
									A2($author$project$Video$Seek, 0.3 * model.duration, $elm$core$Maybe$Nothing));
							case 'Digit4':
								return $elm$json$Json$Decode$succeed(
									A2($author$project$Video$Seek, 0.4 * model.duration, $elm$core$Maybe$Nothing));
							case 'Numpad4':
								return $elm$json$Json$Decode$succeed(
									A2($author$project$Video$Seek, 0.4 * model.duration, $elm$core$Maybe$Nothing));
							case 'Digit5':
								return $elm$json$Json$Decode$succeed(
									A2($author$project$Video$Seek, 0.5 * model.duration, $elm$core$Maybe$Nothing));
							case 'Numpad5':
								return $elm$json$Json$Decode$succeed(
									A2($author$project$Video$Seek, 0.5 * model.duration, $elm$core$Maybe$Nothing));
							case 'Digit6':
								return $elm$json$Json$Decode$succeed(
									A2($author$project$Video$Seek, 0.6 * model.duration, $elm$core$Maybe$Nothing));
							case 'Numpad6':
								return $elm$json$Json$Decode$succeed(
									A2($author$project$Video$Seek, 0.6 * model.duration, $elm$core$Maybe$Nothing));
							case 'Digit7':
								return $elm$json$Json$Decode$succeed(
									A2($author$project$Video$Seek, 0.7 * model.duration, $elm$core$Maybe$Nothing));
							case 'Numpad7':
								return $elm$json$Json$Decode$succeed(
									A2($author$project$Video$Seek, 0.7 * model.duration, $elm$core$Maybe$Nothing));
							case 'Digit8':
								return $elm$json$Json$Decode$succeed(
									A2($author$project$Video$Seek, 0.8 * model.duration, $elm$core$Maybe$Nothing));
							case 'Numpad8':
								return $elm$json$Json$Decode$succeed(
									A2($author$project$Video$Seek, 0.8 * model.duration, $elm$core$Maybe$Nothing));
							case 'Digit10':
								return $elm$json$Json$Decode$succeed(
									A2($author$project$Video$Seek, 0.9 * model.duration, $elm$core$Maybe$Nothing));
							case 'Numpad9':
								return $elm$json$Json$Decode$succeed(
									A2($author$project$Video$Seek, 0.9 * model.duration, $elm$core$Maybe$Nothing));
							default:
								break _v0$30;
						}
					}
				}
				return $elm$json$Json$Decode$fail('no shortcut for code ' + x);
			},
			A2($elm$json$Json$Decode$field, 'code', $elm$json$Json$Decode$string));
	});
var $author$project$Video$Events$overlayKey = function (model) {
	return $mdgriffith$elm_ui$Element$htmlAttribute(
		A2(
			$elm$html$Html$Events$preventDefaultOn,
			'keydown',
			A2(
				$elm$json$Json$Decode$map,
				function (x) {
					return _Utils_Tuple2(x, true);
				},
				A2($author$project$Video$Events$decodeKeyDown, true, model))));
};
var $icidasset$elm_material_icons$Material$Icons$play_circle_outline = A2(
	$icidasset$elm_material_icons$Material$Icons$Internal$icon,
	_List_fromArray(
		[
			$icidasset$elm_material_icons$Material$Icons$Internal$v('0 0 24 24')
		]),
	_List_fromArray(
		[
			A2(
			$icidasset$elm_material_icons$Material$Icons$Internal$p,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$d('M0 0h24v24H0z'),
					$icidasset$elm_material_icons$Material$Icons$Internal$f('none')
				]),
			_List_Nil),
			A2(
			$icidasset$elm_material_icons$Material$Icons$Internal$p,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$d('M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z')
				]),
			_List_Nil)
		]));
var $author$project$Video$Views$pointerEventsNone = $mdgriffith$elm_ui$Element$htmlAttribute(
	A2($elm$html$Html$Attributes$style, 'pointer-events', 'none'));
var $andrewMacmurray$elm_simple_animation$Internal$Animation$Ease = function (a) {
	return {$: 'Ease', a: a};
};
var $andrewMacmurray$elm_simple_animation$Internal$Ease$Linear = {$: 'Linear'};
var $andrewMacmurray$elm_simple_animation$Simple$Animation$linear = $andrewMacmurray$elm_simple_animation$Internal$Animation$Ease($andrewMacmurray$elm_simple_animation$Internal$Ease$Linear);
var $andrewMacmurray$elm_simple_animation$Internal$Animation$Iteration = function (a) {
	return {$: 'Iteration', a: a};
};
var $andrewMacmurray$elm_simple_animation$Simple$Animation$loop = $andrewMacmurray$elm_simple_animation$Internal$Animation$Iteration($andrewMacmurray$elm_simple_animation$Internal$Animation$Loop);
var $andrewMacmurray$elm_simple_animation$Internal$Transform$Rotate = function (a) {
	return {$: 'Rotate', a: a};
};
var $andrewMacmurray$elm_simple_animation$Internal$Transform$rotate = $andrewMacmurray$elm_simple_animation$Internal$Transform$Rotate;
var $andrewMacmurray$elm_simple_animation$Simple$Animation$Property$rotate = A2($elm$core$Basics$composeL, $andrewMacmurray$elm_simple_animation$Internal$Animation$Property$Transform, $andrewMacmurray$elm_simple_animation$Internal$Transform$rotate);
var $author$project$Video$Views$rotate = A3(
	$andrewMacmurray$elm_simple_animation$Simple$Animation$fromTo,
	{
		duration: 1000,
		options: _List_fromArray(
			[$andrewMacmurray$elm_simple_animation$Simple$Animation$loop, $andrewMacmurray$elm_simple_animation$Simple$Animation$linear])
	},
	_List_fromArray(
		[
			$andrewMacmurray$elm_simple_animation$Simple$Animation$Property$rotate(0)
		]),
	_List_fromArray(
		[
			$andrewMacmurray$elm_simple_animation$Simple$Animation$Property$rotate(360)
		]));
var $author$project$Video$SetPlaybackRate = function (a) {
	return {$: 'SetPlaybackRate', a: a};
};
var $author$project$Video$SetQuality = function (a) {
	return {$: 'SetQuality', a: a};
};
var $author$project$Video$SetSubtitleTrack = function (a) {
	return {$: 'SetSubtitleTrack', a: a};
};
var $mdgriffith$elm_ui$Internal$Flag$fontWeight = $mdgriffith$elm_ui$Internal$Flag$flag(13);
var $mdgriffith$elm_ui$Element$Font$bold = A2($mdgriffith$elm_ui$Internal$Model$Class, $mdgriffith$elm_ui$Internal$Flag$fontWeight, $mdgriffith$elm_ui$Internal$Style$classes.bold);
var $icidasset$elm_material_icons$Material$Icons$check = A2(
	$icidasset$elm_material_icons$Material$Icons$Internal$icon,
	_List_fromArray(
		[
			$icidasset$elm_material_icons$Material$Icons$Internal$v('0 0 24 24')
		]),
	_List_fromArray(
		[
			A2(
			$icidasset$elm_material_icons$Material$Icons$Internal$p,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$d('M0 0h24v24H0z'),
					$icidasset$elm_material_icons$Material$Icons$Internal$f('none')
				]),
			_List_Nil),
			A2(
			$icidasset$elm_material_icons$Material$Icons$Internal$p,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$d('M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z')
				]),
			_List_Nil)
		]));
var $mdgriffith$elm_ui$Internal$Flag$borderColor = $mdgriffith$elm_ui$Internal$Flag$flag(28);
var $mdgriffith$elm_ui$Element$Border$color = function (clr) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$borderColor,
		A3(
			$mdgriffith$elm_ui$Internal$Model$Colored,
			'bc-' + $mdgriffith$elm_ui$Internal$Model$formatColorClass(clr),
			'border-color',
			clr));
};
var $author$project$Video$Quality$autoHeight = function (_v0) {
	var auto = _v0.auto;
	var height = _v0.height;
	return auto ? 0 : height;
};
var $author$project$Video$Quality$isSameOption = F2(
	function (quality1, quality2) {
		var _v0 = _Utils_Tuple2(quality1, quality2);
		_v0$2:
		while (true) {
			if (_v0.a.$ === 'Just') {
				if (_v0.b.$ === 'Just') {
					var q1 = _v0.a.a;
					var q2 = _v0.b.a;
					return _Utils_eq(
						$author$project$Video$Quality$autoHeight(q1),
						$author$project$Video$Quality$autoHeight(q2));
				} else {
					break _v0$2;
				}
			} else {
				if (_v0.b.$ === 'Nothing') {
					var _v1 = _v0.a;
					var _v2 = _v0.b;
					return true;
				} else {
					break _v0$2;
				}
			}
		}
		return false;
	});
var $icidasset$elm_material_icons$Material$Icons$radio_button_checked = A2(
	$icidasset$elm_material_icons$Material$Icons$Internal$icon,
	_List_fromArray(
		[
			$icidasset$elm_material_icons$Material$Icons$Internal$v('0 0 24 24')
		]),
	_List_fromArray(
		[
			A2(
			$icidasset$elm_material_icons$Material$Icons$Internal$p,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$d('M0 0h24v24H0z'),
					$icidasset$elm_material_icons$Material$Icons$Internal$f('none')
				]),
			_List_Nil),
			A2(
			$icidasset$elm_material_icons$Material$Icons$Internal$p,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$d('M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z')
				]),
			_List_Nil)
		]));
var $icidasset$elm_material_icons$Material$Icons$radio_button_unchecked = A2(
	$icidasset$elm_material_icons$Material$Icons$Internal$icon,
	_List_fromArray(
		[
			$icidasset$elm_material_icons$Material$Icons$Internal$v('0 0 24 24')
		]),
	_List_fromArray(
		[
			A2(
			$icidasset$elm_material_icons$Material$Icons$Internal$p,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$d('M0 0h24v24H0z'),
					$icidasset$elm_material_icons$Material$Icons$Internal$f('none')
				]),
			_List_Nil),
			A2(
			$icidasset$elm_material_icons$Material$Icons$Internal$p,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$d('M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z')
				]),
			_List_Nil)
		]));
var $author$project$Video$Quality$toString = function (_v0) {
	var auto = _v0.auto;
	var height = _v0.height;
	return (!height) ? 'Auto' : (auto ? ('Auto (' + ($elm$core$String$fromInt(height) + 'p)')) : ($elm$core$String$fromInt(height) + 'p'));
};
var $mdgriffith$elm_ui$Internal$Model$BorderWidth = F5(
	function (a, b, c, d, e) {
		return {$: 'BorderWidth', a: a, b: b, c: c, d: d, e: e};
	});
var $mdgriffith$elm_ui$Element$Border$width = function (v) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$borderWidth,
		A5(
			$mdgriffith$elm_ui$Internal$Model$BorderWidth,
			'b-' + $elm$core$String$fromInt(v),
			v,
			v,
			v,
			v));
};
var $author$project$Video$Views$settings = function (model) {
	var _v0 = model.settings;
	if (_v0.$ === 'Nothing') {
		return $mdgriffith$elm_ui$Element$none;
	} else {
		var a = _v0.a;
		var _v1 = function () {
			switch (a.$) {
				case 'Speed':
					var playbackRateOption = function (x) {
						return A2(
							$mdgriffith$elm_ui$Element$Input$button,
							_Utils_eq(x, model.playbackRate) ? _List_fromArray(
								[
									$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
									$mdgriffith$elm_ui$Element$Font$bold,
									$author$project$Video$Views$boxShadowNone
								]) : _List_fromArray(
								[
									$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
									$author$project$Video$Views$boxShadowNone
								]),
							{
								label: A2(
									$mdgriffith$elm_ui$Element$column,
									_List_fromArray(
										[
											$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill)
										]),
									_List_fromArray(
										[
											A2(
											$mdgriffith$elm_ui$Element$el,
											_List_fromArray(
												[$mdgriffith$elm_ui$Element$centerX]),
											A2(
												$author$project$Video$Views$icon,
												model,
												_Utils_eq(x, model.playbackRate) ? $icidasset$elm_material_icons$Material$Icons$radio_button_checked : $icidasset$elm_material_icons$Material$Icons$radio_button_unchecked)),
											A2(
											$mdgriffith$elm_ui$Element$el,
											_List_fromArray(
												[$mdgriffith$elm_ui$Element$centerX]),
											$mdgriffith$elm_ui$Element$text(
												$elm$core$String$fromFloat(x) + 'x'))
										])),
								onPress: $elm$core$Maybe$Just(
									$author$project$Video$SetPlaybackRate(x))
							});
					};
					var options = A2(
						$mdgriffith$elm_ui$Element$row,
						_List_fromArray(
							[
								$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill)
							]),
						A2(
							$elm$core$List$map,
							playbackRateOption,
							_List_fromArray(
								[0.25, 0.5, 0.75, 1, 1.25, 1.5, 2])));
					return _Utils_Tuple3(
						'Playback rate',
						options,
						$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill));
				case 'Quality':
					var qualityOption = function (x) {
						return A2(
							$mdgriffith$elm_ui$Element$Input$button,
							_List_fromArray(
								[$author$project$Video$Views$boxShadowNone]),
							{
								label: A2(
									$mdgriffith$elm_ui$Element$row,
									_List_Nil,
									_List_fromArray(
										[
											A2(
											$author$project$Video$Quality$isSameOption,
											$elm$core$Maybe$Just(
												{auto: false, height: x}),
											model.quality) ? A2(
											$mdgriffith$elm_ui$Element$el,
											_List_Nil,
											A2($author$project$Video$Views$icon, model, $icidasset$elm_material_icons$Material$Icons$check)) : A2(
											$mdgriffith$elm_ui$Element$el,
											_List_fromArray(
												[
													$mdgriffith$elm_ui$Element$Font$color(
													A4($mdgriffith$elm_ui$Element$rgba, 0, 0, 0, 0))
												]),
											A2($author$project$Video$Views$icon, model, $icidasset$elm_material_icons$Material$Icons$check)),
											$mdgriffith$elm_ui$Element$text(
											$author$project$Video$Quality$toString(
												{auto: false, height: x}))
										])),
								onPress: $elm$core$Maybe$Just(
									$author$project$Video$SetQuality(
										{auto: !x, height: x}))
							});
					};
					var options = A2(
						$mdgriffith$elm_ui$Element$column,
						_List_Nil,
						A2($elm$core$List$map, qualityOption, model.qualities));
					return _Utils_Tuple3('Quality', options, $mdgriffith$elm_ui$Element$alignRight);
				default:
					var subtitlesOption = function (_v3) {
						var id = _v3.a;
						var track = _v3.b;
						return A2(
							$mdgriffith$elm_ui$Element$Input$button,
							_List_fromArray(
								[$author$project$Video$Views$boxShadowNone]),
							{
								label: A2(
									$mdgriffith$elm_ui$Element$row,
									_List_Nil,
									_List_fromArray(
										[
											_Utils_eq(track, model.subtitleTrack) ? A2(
											$mdgriffith$elm_ui$Element$el,
											_List_Nil,
											A2($author$project$Video$Views$icon, model, $icidasset$elm_material_icons$Material$Icons$check)) : A2(
											$mdgriffith$elm_ui$Element$el,
											_List_fromArray(
												[
													$mdgriffith$elm_ui$Element$Font$color(
													A4($mdgriffith$elm_ui$Element$rgba, 0, 0, 0, 0))
												]),
											A2($author$project$Video$Views$icon, model, $icidasset$elm_material_icons$Material$Icons$check)),
											$mdgriffith$elm_ui$Element$text(
											A2(
												$elm$core$Maybe$withDefault,
												'Disabled',
												A2(
													$elm$core$Maybe$map,
													function ($) {
														return $.name;
													},
													track)))
										])),
								onPress: $elm$core$Maybe$Just(
									$author$project$Video$SetSubtitleTrack(id))
							});
					};
					var options = A2(
						$mdgriffith$elm_ui$Element$column,
						_List_Nil,
						A2(
							$elm$core$List$map,
							subtitlesOption,
							A2(
								$elm$core$List$cons,
								_Utils_Tuple2(-1, $elm$core$Maybe$Nothing),
								A2(
									$elm$core$List$indexedMap,
									F2(
										function (id, x) {
											return _Utils_Tuple2(
												id,
												$elm$core$Maybe$Just(x));
										}),
									model.subtitles))));
					return _Utils_Tuple3('Subtitles', options, $mdgriffith$elm_ui$Element$alignRight);
			}
		}();
		var title = _v1.a;
		var element = _v1.b;
		var size = _v1.c;
		return A4(
			$author$project$Video$Views$fadeElement,
			$author$project$Video$fadeTimerOverlay,
			model.animationFrame - model.overlayTimer,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$padding(20),
					size
				]),
			A2(
				$mdgriffith$elm_ui$Element$column,
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
						$mdgriffith$elm_ui$Element$padding(20),
						$mdgriffith$elm_ui$Element$Border$rounded(10),
						$mdgriffith$elm_ui$Element$Border$width(1),
						$mdgriffith$elm_ui$Element$Border$color(
						A4($mdgriffith$elm_ui$Element$rgba, 0.75, 0.75, 0.75, 0.75)),
						$mdgriffith$elm_ui$Element$Background$color(
						A4($mdgriffith$elm_ui$Element$rgba, 0, 0, 0, 0.75))
					]),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Element$el,
						_List_fromArray(
							[$mdgriffith$elm_ui$Element$Font$bold]),
						$mdgriffith$elm_ui$Element$text(title)),
						element
					])));
	}
};
var $mdgriffith$elm_ui$Internal$Model$FontSize = function (a) {
	return {$: 'FontSize', a: a};
};
var $mdgriffith$elm_ui$Internal$Flag$fontSize = $mdgriffith$elm_ui$Internal$Flag$flag(4);
var $mdgriffith$elm_ui$Element$Font$size = function (i) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$fontSize,
		$mdgriffith$elm_ui$Internal$Model$FontSize(i));
};
var $author$project$Video$Icons$makeIcon = F4(
	function (attributes, nodes, size, _v0) {
		var sizeAsString = $elm$core$String$fromInt(size);
		return A2(
			$elm$svg$Svg$svg,
			_Utils_ap(
				attributes,
				_List_fromArray(
					[
						$elm$svg$Svg$Attributes$height(sizeAsString),
						$elm$svg$Svg$Attributes$width(sizeAsString)
					])),
			_List_fromArray(
				[
					A2(
					$elm$svg$Svg$g,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$fill('currentColor')
						]),
					nodes)
				]));
	});
var $elm$svg$Svg$Attributes$stroke = _VirtualDom_attribute('stroke');
var $elm$svg$Svg$Attributes$strokeWidth = _VirtualDom_attribute('stroke-width');
var $author$project$Video$Icons$spinner = A2(
	$author$project$Video$Icons$makeIcon,
	_List_fromArray(
		[
			$elm$svg$Svg$Attributes$viewBox('0 0 24 24')
		]),
	_List_fromArray(
		[
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$d('M0 0h24v24H0z'),
					$elm$svg$Svg$Attributes$fill('none')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$d('M2 12A 10 10 10 1 1 12 22'),
					$elm$svg$Svg$Attributes$fill('none'),
					$elm$svg$Svg$Attributes$stroke('currentColor'),
					$elm$svg$Svg$Attributes$strokeWidth('2')
				]),
			_List_Nil)
		]));
var $author$project$Video$Events$startOverlay = $mdgriffith$elm_ui$Element$htmlAttribute(
	A2(
		$elm$html$Html$Events$on,
		'click',
		$elm$json$Json$Decode$succeed($author$project$Video$PlayPause)));
var $author$project$Video$Views$overlay = function (model) {
	var size = A2($elm$core$Basics$min, ((model.playerSize.a * 9) / 16) | 0, model.playerSize.b);
	var attr = _List_fromArray(
		[
			$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
			$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill),
			$mdgriffith$elm_ui$Element$Font$color(
			A3($mdgriffith$elm_ui$Element$rgb, 1, 1, 1)),
			$mdgriffith$elm_ui$Element$Font$size(
			(size / $elm$core$Basics$round(1.5 * $author$project$Video$Views$scale)) | 0),
			$mdgriffith$elm_ui$Element$htmlAttribute(
			$elm$html$Html$Attributes$tabindex(-1)),
			$author$project$Video$Events$overlayKey(model)
		]);
	var attrWithHideCursor = A2($elm$core$List$cons, $author$project$Video$Views$hideCursor, attr);
	return A2(
		$mdgriffith$elm_ui$Element$el,
		(_Utils_cmp(model.animationFrame, model.overlayTimer + $author$project$Video$fadeTimerOverlay.disappear) > 0) ? attrWithHideCursor : attr,
		(!model.ready) ? A2(
			$mdgriffith$elm_ui$Element$el,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$scale(5),
					$mdgriffith$elm_ui$Element$centerX,
					$mdgriffith$elm_ui$Element$centerY
				]),
			A3(
				$author$project$Video$Views$animatedEl,
				$author$project$Video$Views$rotate,
				_List_Nil,
				A2($author$project$Video$Views$icon, model, $author$project$Video$Icons$spinner))) : ((!model.hasStarted) ? A2(
			$mdgriffith$elm_ui$Element$el,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
					$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill),
					$mdgriffith$elm_ui$Element$Background$color(
					A4($mdgriffith$elm_ui$Element$rgba, 0, 0, 0, 0.25)),
					$author$project$Video$Events$startOverlay
				]),
			A2(
				$mdgriffith$elm_ui$Element$el,
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$scale(5),
						$mdgriffith$elm_ui$Element$centerX,
						$mdgriffith$elm_ui$Element$centerY
					]),
				A2($author$project$Video$Views$icon, model, $icidasset$elm_material_icons$Material$Icons$play_circle_outline))) : A2(
			$mdgriffith$elm_ui$Element$el,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
					$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill),
					$mdgriffith$elm_ui$Element$inFront(
					A2(
						$mdgriffith$elm_ui$Element$Keyed$el,
						_List_fromArray(
							[$mdgriffith$elm_ui$Element$centerX, $mdgriffith$elm_ui$Element$centerY, $author$project$Video$Views$pointerEventsNone]),
						_Utils_Tuple2(
							$elm$core$String$fromFloat(model.icon.a),
							A4(
								$author$project$Video$Views$fadeOutZoomElement,
								$author$project$Video$fadeTimerIcon,
								model.animationFrame - model.icon.a,
								_List_Nil,
								A2($author$project$Video$Views$circledIcon, model, model.icon.b))))),
					$mdgriffith$elm_ui$Element$behindContent(
					A2(
						$mdgriffith$elm_ui$Element$el,
						A2(
							$elm$core$List$cons,
							$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
							A2(
								$elm$core$List$cons,
								$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill),
								$author$project$Video$Events$overlay(model))),
						$author$project$Video$Views$mobileOverlay(model))),
					$author$project$Video$Views$pointerEventsNone,
					$mdgriffith$elm_ui$Element$inFront(
					A2(
						$mdgriffith$elm_ui$Element$column,
						_List_fromArray(
							[
								$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
								$mdgriffith$elm_ui$Element$alignBottom
							]),
						_List_fromArray(
							[
								A2(
								$mdgriffith$elm_ui$Element$row,
								_List_fromArray(
									[
										$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill)
									]),
								_List_fromArray(
									[
										A2(
										$mdgriffith$elm_ui$Element$el,
										A2(
											$elm$core$List$cons,
											$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
											A2(
												$elm$core$List$cons,
												$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill),
												$author$project$Video$Events$overlay(model))),
										$mdgriffith$elm_ui$Element$none),
										$author$project$Video$Views$settings(model)
									])),
								$author$project$Video$Views$controls(model)
							])))
				]),
			$mdgriffith$elm_ui$Element$none)));
};
var $author$project$Video$MouseMove = {$: 'MouseMove'};
var $author$project$Video$NowIsFullscreen = function (a) {
	return {$: 'NowIsFullscreen', a: a};
};
var $elm$json$Json$Decode$null = _Json_decodeNull;
var $elm$json$Json$Decode$oneOf = _Json_oneOf;
var $elm$json$Json$Decode$nullable = function (decoder) {
	return $elm$json$Json$Decode$oneOf(
		_List_fromArray(
			[
				$elm$json$Json$Decode$null($elm$core$Maybe$Nothing),
				A2($elm$json$Json$Decode$map, $elm$core$Maybe$Just, decoder)
			]));
};
var $author$project$Video$Events$decodeFullscreenChange = A2(
	$elm$json$Json$Decode$map,
	function (x) {
		return $author$project$Video$NowIsFullscreen(
			!_Utils_eq(x, $elm$core$Maybe$Nothing));
	},
	A2(
		$elm$json$Json$Decode$field,
		'target',
		A2(
			$elm$json$Json$Decode$field,
			'polymnyVideoFullscreenElement',
			$elm$json$Json$Decode$nullable($elm$json$Json$Decode$value))));
var $author$project$Video$Events$player = A2(
	$elm$core$List$map,
	$mdgriffith$elm_ui$Element$htmlAttribute,
	_List_fromArray(
		[
			A2($elm$html$Html$Events$on, 'fullscreenchange', $author$project$Video$Events$decodeFullscreenChange),
			A2($elm$html$Html$Events$on, 'webkitfullscreenchange', $author$project$Video$Events$decodeFullscreenChange),
			A2(
			$elm$html$Html$Events$on,
			'mousemove',
			$elm$json$Json$Decode$succeed($author$project$Video$MouseMove))
		]));
var $elm$html$Html$video = _VirtualDom_node('video');
var $author$project$Video$NowPaused = {$: 'NowPaused'};
var $author$project$Video$NowPlaying = {$: 'NowPlaying'};
var $author$project$Video$NowHasDuration = function (a) {
	return {$: 'NowHasDuration', a: a};
};
var $elm$json$Json$Decode$float = _Json_decodeFloat;
var $author$project$Video$Events$decodeDurationChanged = A2(
	$elm$json$Json$Decode$field,
	'target',
	A2(
		$elm$json$Json$Decode$map,
		$author$project$Video$NowHasDuration,
		A2($elm$json$Json$Decode$field, 'duration', $elm$json$Json$Decode$float)));
var $author$project$Video$NowHasPlaybackRate = function (a) {
	return {$: 'NowHasPlaybackRate', a: a};
};
var $author$project$Video$Events$decodePlaybackRateChange = A2(
	$elm$json$Json$Decode$field,
	'target',
	A2(
		$elm$json$Json$Decode$map,
		$author$project$Video$NowHasPlaybackRate,
		A2($elm$json$Json$Decode$field, 'playbackRate', $elm$json$Json$Decode$float)));
var $author$project$Video$NowAtPosition = function (a) {
	return {$: 'NowAtPosition', a: a};
};
var $author$project$Video$Events$decodePosition = A2(
	$elm$json$Json$Decode$field,
	'target',
	A2(
		$elm$json$Json$Decode$map,
		$author$project$Video$NowAtPosition,
		A2($elm$json$Json$Decode$field, 'currentTime', $elm$json$Json$Decode$float)));
var $author$project$Video$NowLoaded = function (a) {
	return {$: 'NowLoaded', a: a};
};
var $elm$core$Tuple$pair = F2(
	function (a, b) {
		return _Utils_Tuple2(a, b);
	});
var $author$project$Video$Events$decodeTimeRange = A3(
	$elm$json$Json$Decode$map2,
	$elm$core$Tuple$pair,
	A2($elm$json$Json$Decode$field, 'start', $elm$json$Json$Decode$float),
	A2($elm$json$Json$Decode$field, 'end', $elm$json$Json$Decode$float));
var $elm$json$Json$Decode$list = _Json_decodeList;
var $author$project$Video$Events$decodeTimeRanges = $elm$json$Json$Decode$list($author$project$Video$Events$decodeTimeRange);
var $author$project$Video$Events$decodeProgress = A2(
	$elm$json$Json$Decode$map,
	$author$project$Video$NowLoaded,
	A2(
		$elm$json$Json$Decode$field,
		'target',
		A2(
			$elm$json$Json$Decode$field,
			'buffered',
			A2($elm$json$Json$Decode$field, 'polymnyVideoAsArray', $author$project$Video$Events$decodeTimeRanges))));
var $author$project$Video$NowHasSize = function (a) {
	return {$: 'NowHasSize', a: a};
};
var $author$project$Video$Events$decodeVideoResize = A2(
	$elm$json$Json$Decode$field,
	'target',
	A3(
		$elm$json$Json$Decode$map2,
		F2(
			function (x, y) {
				return $author$project$Video$NowHasSize(
					_Utils_Tuple2(x, y));
			}),
		A2($elm$json$Json$Decode$field, 'videoWidth', $elm$json$Json$Decode$int),
		A2($elm$json$Json$Decode$field, 'videoHeight', $elm$json$Json$Decode$int)));
var $author$project$Video$NowAtVolume = F2(
	function (a, b) {
		return {$: 'NowAtVolume', a: a, b: b};
	});
var $author$project$Video$Events$decodeVolumeChange = A2(
	$elm$json$Json$Decode$field,
	'target',
	A3(
		$elm$json$Json$Decode$map2,
		$author$project$Video$NowAtVolume,
		A2($elm$json$Json$Decode$field, 'volume', $elm$json$Json$Decode$float),
		A2($elm$json$Json$Decode$field, 'muted', $elm$json$Json$Decode$bool)));
var $author$project$Video$Events$video = function (model) {
	return _List_fromArray(
		[
			$elm$html$Html$Attributes$id(model.id),
			A2(
			$elm$html$Html$Events$on,
			'playing',
			$elm$json$Json$Decode$succeed($author$project$Video$NowPlaying)),
			A2(
			$elm$html$Html$Events$on,
			'pause',
			$elm$json$Json$Decode$succeed($author$project$Video$NowPaused)),
			A2($elm$html$Html$Events$on, 'durationchange', $author$project$Video$Events$decodeDurationChanged),
			A2($elm$html$Html$Events$on, 'timeupdate', $author$project$Video$Events$decodePosition),
			A2($elm$html$Html$Events$on, 'volumechange', $author$project$Video$Events$decodeVolumeChange),
			A2($elm$html$Html$Events$on, 'progress', $author$project$Video$Events$decodeProgress),
			A2($elm$html$Html$Events$on, 'resize', $author$project$Video$Events$decodeVideoResize),
			A2($elm$html$Html$Events$on, 'ratechange', $author$project$Video$Events$decodePlaybackRateChange)
		]);
};
var $elm$html$Html$Attributes$width = function (n) {
	return A2(
		_VirtualDom_attribute,
		'width',
		$elm$core$String$fromInt(n));
};
var $author$project$Video$Views$fullpageElement = function (model) {
	var videoAspectRatio = model.size.a / model.size.b;
	var screenAspectRatio = model.screenSize.a / model.screenSize.b;
	var _v0 = function () {
		if (_Utils_cmp(videoAspectRatio, screenAspectRatio) > 0) {
			var videoHeight = ((model.screenSize.a * model.size.b) / model.size.a) | 0;
			return _Utils_Tuple2(
				_Utils_Tuple2(0, ((model.screenSize.b - videoHeight) / 2) | 0),
				_Utils_Tuple2(model.screenSize.a, videoHeight));
		} else {
			var videoWidth = ((model.screenSize.b * model.size.a) / model.size.b) | 0;
			return _Utils_Tuple2(
				_Utils_Tuple2(((model.screenSize.a - videoWidth) / 2) | 0, 0),
				_Utils_Tuple2(videoWidth, model.screenSize.b));
		}
	}();
	var _v1 = _v0.a;
	var x = _v1.a;
	var y = _v1.b;
	var _v2 = _v0.b;
	var w = _v2.a;
	var h = _v2.b;
	return A2(
		$mdgriffith$elm_ui$Element$el,
		A2(
			$elm$core$List$cons,
			$mdgriffith$elm_ui$Element$inFront(
				$author$project$Video$Views$overlay(
					_Utils_update(
						model,
						{playerSize: model.screenSize}))),
			A2(
				$elm$core$List$cons,
				$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
				A2(
					$elm$core$List$cons,
					$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill),
					A2(
						$elm$core$List$cons,
						$mdgriffith$elm_ui$Element$Background$color(
							A3($mdgriffith$elm_ui$Element$rgb, 0, 0, 0)),
						A2(
							$elm$core$List$cons,
							$mdgriffith$elm_ui$Element$htmlAttribute(
								$elm$html$Html$Attributes$id(model.id + '-full')),
							$author$project$Video$Events$player))))),
		$mdgriffith$elm_ui$Element$html(
			A2(
				$elm$html$Html$video,
				A2(
					$elm$core$List$cons,
					A2($elm$html$Html$Attributes$style, 'position', 'absolute'),
					A2(
						$elm$core$List$cons,
						$elm$html$Html$Attributes$width(w),
						A2(
							$elm$core$List$cons,
							$elm$html$Html$Attributes$height(h),
							A2(
								$elm$core$List$cons,
								A2(
									$elm$html$Html$Attributes$style,
									'top',
									$elm$core$String$fromInt(y) + 'px'),
								A2(
									$elm$core$List$cons,
									A2(
										$elm$html$Html$Attributes$style,
										'left',
										$elm$core$String$fromInt(x) + 'px'),
									$author$project$Video$Events$video(model)))))),
				_List_Nil)));
};
var $mdgriffith$elm_ui$Internal$Model$OnlyDynamic = F2(
	function (a, b) {
		return {$: 'OnlyDynamic', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Model$StaticRootAndDynamic = F2(
	function (a, b) {
		return {$: 'StaticRootAndDynamic', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Model$AllowHover = {$: 'AllowHover'};
var $mdgriffith$elm_ui$Internal$Model$Layout = {$: 'Layout'};
var $mdgriffith$elm_ui$Internal$Model$focusDefaultStyle = {
	backgroundColor: $elm$core$Maybe$Nothing,
	borderColor: $elm$core$Maybe$Nothing,
	shadow: $elm$core$Maybe$Just(
		{
			blur: 0,
			color: A4($mdgriffith$elm_ui$Internal$Model$Rgba, 155 / 255, 203 / 255, 1, 1),
			offset: _Utils_Tuple2(0, 0),
			size: 3
		})
};
var $mdgriffith$elm_ui$Internal$Model$optionsToRecord = function (options) {
	var combine = F2(
		function (opt, record) {
			switch (opt.$) {
				case 'HoverOption':
					var hoverable = opt.a;
					var _v4 = record.hover;
					if (_v4.$ === 'Nothing') {
						return _Utils_update(
							record,
							{
								hover: $elm$core$Maybe$Just(hoverable)
							});
					} else {
						return record;
					}
				case 'FocusStyleOption':
					var focusStyle = opt.a;
					var _v5 = record.focus;
					if (_v5.$ === 'Nothing') {
						return _Utils_update(
							record,
							{
								focus: $elm$core$Maybe$Just(focusStyle)
							});
					} else {
						return record;
					}
				default:
					var renderMode = opt.a;
					var _v6 = record.mode;
					if (_v6.$ === 'Nothing') {
						return _Utils_update(
							record,
							{
								mode: $elm$core$Maybe$Just(renderMode)
							});
					} else {
						return record;
					}
			}
		});
	var andFinally = function (record) {
		return {
			focus: function () {
				var _v0 = record.focus;
				if (_v0.$ === 'Nothing') {
					return $mdgriffith$elm_ui$Internal$Model$focusDefaultStyle;
				} else {
					var focusable = _v0.a;
					return focusable;
				}
			}(),
			hover: function () {
				var _v1 = record.hover;
				if (_v1.$ === 'Nothing') {
					return $mdgriffith$elm_ui$Internal$Model$AllowHover;
				} else {
					var hoverable = _v1.a;
					return hoverable;
				}
			}(),
			mode: function () {
				var _v2 = record.mode;
				if (_v2.$ === 'Nothing') {
					return $mdgriffith$elm_ui$Internal$Model$Layout;
				} else {
					var actualMode = _v2.a;
					return actualMode;
				}
			}()
		};
	};
	return andFinally(
		A3(
			$elm$core$List$foldr,
			combine,
			{focus: $elm$core$Maybe$Nothing, hover: $elm$core$Maybe$Nothing, mode: $elm$core$Maybe$Nothing},
			options));
};
var $mdgriffith$elm_ui$Internal$Model$toHtml = F2(
	function (mode, el) {
		switch (el.$) {
			case 'Unstyled':
				var html = el.a;
				return html($mdgriffith$elm_ui$Internal$Model$asEl);
			case 'Styled':
				var styles = el.a.styles;
				var html = el.a.html;
				return A2(
					html,
					mode(styles),
					$mdgriffith$elm_ui$Internal$Model$asEl);
			case 'Text':
				var text = el.a;
				return $mdgriffith$elm_ui$Internal$Model$textElement(text);
			default:
				return $mdgriffith$elm_ui$Internal$Model$textElement('');
		}
	});
var $mdgriffith$elm_ui$Internal$Model$renderRoot = F3(
	function (optionList, attributes, child) {
		var options = $mdgriffith$elm_ui$Internal$Model$optionsToRecord(optionList);
		var embedStyle = function () {
			var _v0 = options.mode;
			if (_v0.$ === 'NoStaticStyleSheet') {
				return $mdgriffith$elm_ui$Internal$Model$OnlyDynamic(options);
			} else {
				return $mdgriffith$elm_ui$Internal$Model$StaticRootAndDynamic(options);
			}
		}();
		return A2(
			$mdgriffith$elm_ui$Internal$Model$toHtml,
			embedStyle,
			A4(
				$mdgriffith$elm_ui$Internal$Model$element,
				$mdgriffith$elm_ui$Internal$Model$asEl,
				$mdgriffith$elm_ui$Internal$Model$div,
				attributes,
				$mdgriffith$elm_ui$Internal$Model$Unkeyed(
					_List_fromArray(
						[child]))));
	});
var $mdgriffith$elm_ui$Internal$Model$FontFamily = F2(
	function (a, b) {
		return {$: 'FontFamily', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Model$SansSerif = {$: 'SansSerif'};
var $mdgriffith$elm_ui$Internal$Model$Typeface = function (a) {
	return {$: 'Typeface', a: a};
};
var $mdgriffith$elm_ui$Internal$Flag$fontFamily = $mdgriffith$elm_ui$Internal$Flag$flag(5);
var $elm$core$String$toLower = _String_toLower;
var $elm$core$String$words = _String_words;
var $mdgriffith$elm_ui$Internal$Model$renderFontClassName = F2(
	function (font, current) {
		return _Utils_ap(
			current,
			function () {
				switch (font.$) {
					case 'Serif':
						return 'serif';
					case 'SansSerif':
						return 'sans-serif';
					case 'Monospace':
						return 'monospace';
					case 'Typeface':
						var name = font.a;
						return A2(
							$elm$core$String$join,
							'-',
							$elm$core$String$words(
								$elm$core$String$toLower(name)));
					case 'ImportFont':
						var name = font.a;
						var url = font.b;
						return A2(
							$elm$core$String$join,
							'-',
							$elm$core$String$words(
								$elm$core$String$toLower(name)));
					default:
						var name = font.a.name;
						return A2(
							$elm$core$String$join,
							'-',
							$elm$core$String$words(
								$elm$core$String$toLower(name)));
				}
			}());
	});
var $mdgriffith$elm_ui$Internal$Model$rootStyle = function () {
	var families = _List_fromArray(
		[
			$mdgriffith$elm_ui$Internal$Model$Typeface('Open Sans'),
			$mdgriffith$elm_ui$Internal$Model$Typeface('Helvetica'),
			$mdgriffith$elm_ui$Internal$Model$Typeface('Verdana'),
			$mdgriffith$elm_ui$Internal$Model$SansSerif
		]);
	return _List_fromArray(
		[
			A2(
			$mdgriffith$elm_ui$Internal$Model$StyleClass,
			$mdgriffith$elm_ui$Internal$Flag$bgColor,
			A3(
				$mdgriffith$elm_ui$Internal$Model$Colored,
				'bg-' + $mdgriffith$elm_ui$Internal$Model$formatColorClass(
					A4($mdgriffith$elm_ui$Internal$Model$Rgba, 1, 1, 1, 0)),
				'background-color',
				A4($mdgriffith$elm_ui$Internal$Model$Rgba, 1, 1, 1, 0))),
			A2(
			$mdgriffith$elm_ui$Internal$Model$StyleClass,
			$mdgriffith$elm_ui$Internal$Flag$fontColor,
			A3(
				$mdgriffith$elm_ui$Internal$Model$Colored,
				'fc-' + $mdgriffith$elm_ui$Internal$Model$formatColorClass(
					A4($mdgriffith$elm_ui$Internal$Model$Rgba, 0, 0, 0, 1)),
				'color',
				A4($mdgriffith$elm_ui$Internal$Model$Rgba, 0, 0, 0, 1))),
			A2(
			$mdgriffith$elm_ui$Internal$Model$StyleClass,
			$mdgriffith$elm_ui$Internal$Flag$fontSize,
			$mdgriffith$elm_ui$Internal$Model$FontSize(20)),
			A2(
			$mdgriffith$elm_ui$Internal$Model$StyleClass,
			$mdgriffith$elm_ui$Internal$Flag$fontFamily,
			A2(
				$mdgriffith$elm_ui$Internal$Model$FontFamily,
				A3($elm$core$List$foldl, $mdgriffith$elm_ui$Internal$Model$renderFontClassName, 'font-', families),
				families))
		]);
}();
var $mdgriffith$elm_ui$Element$layoutWith = F3(
	function (_v0, attrs, child) {
		var options = _v0.options;
		return A3(
			$mdgriffith$elm_ui$Internal$Model$renderRoot,
			options,
			A2(
				$elm$core$List$cons,
				$mdgriffith$elm_ui$Internal$Model$htmlClass(
					A2(
						$elm$core$String$join,
						' ',
						_List_fromArray(
							[$mdgriffith$elm_ui$Internal$Style$classes.root, $mdgriffith$elm_ui$Internal$Style$classes.any, $mdgriffith$elm_ui$Internal$Style$classes.single]))),
				_Utils_ap($mdgriffith$elm_ui$Internal$Model$rootStyle, attrs)),
			child);
	});
var $mdgriffith$elm_ui$Element$layout = $mdgriffith$elm_ui$Element$layoutWith(
	{options: _List_Nil});
var $author$project$Video$Views$fullpage = function (model) {
	return A2(
		$mdgriffith$elm_ui$Element$layout,
		_List_Nil,
		$author$project$Video$Views$fullpageElement(model));
};
var $author$project$Video$AnimationFrameDelta = function (a) {
	return {$: 'AnimationFrameDelta', a: a};
};
var $author$project$Video$AutoplayRefused = {$: 'AutoplayRefused'};
var $author$project$Video$IsMobile = function (a) {
	return {$: 'IsMobile', a: a};
};
var $author$project$Video$NowHasPlayerSize = function (a) {
	return {$: 'NowHasPlayerSize', a: a};
};
var $author$project$Video$NowHasQualities = function (a) {
	return {$: 'NowHasQualities', a: a};
};
var $author$project$Video$NowHasQuality = function (a) {
	return {$: 'NowHasQuality', a: a};
};
var $author$project$Video$NowHasScreenSize = function (a) {
	return {$: 'NowHasScreenSize', a: a};
};
var $author$project$Video$NowHasSubtitleTrack = function (a) {
	return {$: 'NowHasSubtitleTrack', a: a};
};
var $author$project$Video$NowHasSubtitles = function (a) {
	return {$: 'NowHasSubtitles', a: a};
};
var $author$project$Video$polymnyVideoAutoplayRefused = _Platform_incomingPort(
	'polymnyVideoAutoplayRefused',
	$elm$json$Json$Decode$null(_Utils_Tuple0));
var $author$project$Video$autoplayRefused = function (msg) {
	return $author$project$Video$polymnyVideoAutoplayRefused(
		function (_v0) {
			return msg;
		});
};
var $elm$core$Platform$Sub$batch = _Platform_batch;
var $author$project$Video$Quality$Quality = F2(
	function (auto, height) {
		return {auto: auto, height: height};
	});
var $author$project$Video$Quality$decode = A3(
	$elm$json$Json$Decode$map2,
	$author$project$Video$Quality$Quality,
	A2($elm$json$Json$Decode$field, 'auto', $elm$json$Json$Decode$bool),
	A2($elm$json$Json$Decode$field, 'height', $elm$json$Json$Decode$int));
var $author$project$Video$SubtitleTrack = F6(
	function (name, groupdId, ty, autoselect, _default, forced) {
		return {autoselect: autoselect, _default: _default, forced: forced, groupdId: groupdId, name: name, ty: ty};
	});
var $elm$json$Json$Decode$map6 = _Json_map6;
var $author$project$Video$Events$decodeSubtitleTrack = A7(
	$elm$json$Json$Decode$map6,
	$author$project$Video$SubtitleTrack,
	A2($elm$json$Json$Decode$field, 'name', $elm$json$Json$Decode$string),
	A2($elm$json$Json$Decode$field, 'groupId', $elm$json$Json$Decode$string),
	A2($elm$json$Json$Decode$field, 'type', $elm$json$Json$Decode$string),
	A2($elm$json$Json$Decode$field, 'autoselect', $elm$json$Json$Decode$bool),
	A2($elm$json$Json$Decode$field, 'default', $elm$json$Json$Decode$bool),
	A2($elm$json$Json$Decode$field, 'forced', $elm$json$Json$Decode$bool));
var $author$project$Video$Events$decodeMaybeSubtitleTrack = $elm$json$Json$Decode$nullable($author$project$Video$Events$decodeSubtitleTrack);
var $author$project$Video$Events$decodeSubtitles = $elm$json$Json$Decode$list($author$project$Video$Events$decodeSubtitleTrack);
var $author$project$Video$polymnyVideoIsMobile = _Platform_incomingPort('polymnyVideoIsMobile', $elm$json$Json$Decode$bool);
var $author$project$Video$isMobile = $author$project$Video$polymnyVideoIsMobile;
var $elm$json$Json$Decode$index = _Json_decodeIndex;
var $author$project$Video$polymnyVideoNowHasPlayerSize = _Platform_incomingPort(
	'polymnyVideoNowHasPlayerSize',
	A2(
		$elm$json$Json$Decode$andThen,
		function (_v0) {
			return A2(
				$elm$json$Json$Decode$andThen,
				function (_v1) {
					return $elm$json$Json$Decode$succeed(
						_Utils_Tuple2(_v0, _v1));
				},
				A2($elm$json$Json$Decode$index, 1, $elm$json$Json$Decode$int));
		},
		A2($elm$json$Json$Decode$index, 0, $elm$json$Json$Decode$int)));
var $author$project$Video$nowHasPlayerSize = $author$project$Video$polymnyVideoNowHasPlayerSize;
var $author$project$Video$polymnyVideoNowHasQualities = _Platform_incomingPort(
	'polymnyVideoNowHasQualities',
	$elm$json$Json$Decode$list($elm$json$Json$Decode$int));
var $author$project$Video$nowHasQualities = $author$project$Video$polymnyVideoNowHasQualities;
var $author$project$Video$polymnyVideoNowHasQuality = _Platform_incomingPort('polymnyVideoNowHasQuality', $elm$json$Json$Decode$value);
var $author$project$Video$nowHasQuality = $author$project$Video$polymnyVideoNowHasQuality;
var $author$project$Video$polymnyVideoNowHasScreenSize = _Platform_incomingPort(
	'polymnyVideoNowHasScreenSize',
	A2(
		$elm$json$Json$Decode$andThen,
		function (_v0) {
			return A2(
				$elm$json$Json$Decode$andThen,
				function (_v1) {
					return $elm$json$Json$Decode$succeed(
						_Utils_Tuple2(_v0, _v1));
				},
				A2($elm$json$Json$Decode$index, 1, $elm$json$Json$Decode$int));
		},
		A2($elm$json$Json$Decode$index, 0, $elm$json$Json$Decode$int)));
var $author$project$Video$nowHasScreenSize = $author$project$Video$polymnyVideoNowHasScreenSize;
var $author$project$Video$polymnyVideoNowHasSubtitleTrack = _Platform_incomingPort('polymnyVideoNowHasSubtitleTrack', $elm$json$Json$Decode$value);
var $author$project$Video$nowHasSubtitleTrack = $author$project$Video$polymnyVideoNowHasSubtitleTrack;
var $author$project$Video$polymnyVideoNowHasSubtitles = _Platform_incomingPort('polymnyVideoNowHasSubtitles', $elm$json$Json$Decode$value);
var $author$project$Video$nowHasSubtitles = $author$project$Video$polymnyVideoNowHasSubtitles;
var $elm$browser$Browser$AnimationManager$Delta = function (a) {
	return {$: 'Delta', a: a};
};
var $elm$browser$Browser$AnimationManager$State = F3(
	function (subs, request, oldTime) {
		return {oldTime: oldTime, request: request, subs: subs};
	});
var $elm$browser$Browser$AnimationManager$init = $elm$core$Task$succeed(
	A3($elm$browser$Browser$AnimationManager$State, _List_Nil, $elm$core$Maybe$Nothing, 0));
var $elm$core$Process$kill = _Scheduler_kill;
var $elm$browser$Browser$AnimationManager$now = _Browser_now(_Utils_Tuple0);
var $elm$browser$Browser$AnimationManager$rAF = _Browser_rAF(_Utils_Tuple0);
var $elm$core$Platform$sendToSelf = _Platform_sendToSelf;
var $elm$core$Process$spawn = _Scheduler_spawn;
var $elm$browser$Browser$AnimationManager$onEffects = F3(
	function (router, subs, _v0) {
		var request = _v0.request;
		var oldTime = _v0.oldTime;
		var _v1 = _Utils_Tuple2(request, subs);
		if (_v1.a.$ === 'Nothing') {
			if (!_v1.b.b) {
				var _v2 = _v1.a;
				return $elm$browser$Browser$AnimationManager$init;
			} else {
				var _v4 = _v1.a;
				return A2(
					$elm$core$Task$andThen,
					function (pid) {
						return A2(
							$elm$core$Task$andThen,
							function (time) {
								return $elm$core$Task$succeed(
									A3(
										$elm$browser$Browser$AnimationManager$State,
										subs,
										$elm$core$Maybe$Just(pid),
										time));
							},
							$elm$browser$Browser$AnimationManager$now);
					},
					$elm$core$Process$spawn(
						A2(
							$elm$core$Task$andThen,
							$elm$core$Platform$sendToSelf(router),
							$elm$browser$Browser$AnimationManager$rAF)));
			}
		} else {
			if (!_v1.b.b) {
				var pid = _v1.a.a;
				return A2(
					$elm$core$Task$andThen,
					function (_v3) {
						return $elm$browser$Browser$AnimationManager$init;
					},
					$elm$core$Process$kill(pid));
			} else {
				return $elm$core$Task$succeed(
					A3($elm$browser$Browser$AnimationManager$State, subs, request, oldTime));
			}
		}
	});
var $elm$time$Time$Posix = function (a) {
	return {$: 'Posix', a: a};
};
var $elm$time$Time$millisToPosix = $elm$time$Time$Posix;
var $elm$browser$Browser$AnimationManager$onSelfMsg = F3(
	function (router, newTime, _v0) {
		var subs = _v0.subs;
		var oldTime = _v0.oldTime;
		var send = function (sub) {
			if (sub.$ === 'Time') {
				var tagger = sub.a;
				return A2(
					$elm$core$Platform$sendToApp,
					router,
					tagger(
						$elm$time$Time$millisToPosix(newTime)));
			} else {
				var tagger = sub.a;
				return A2(
					$elm$core$Platform$sendToApp,
					router,
					tagger(newTime - oldTime));
			}
		};
		return A2(
			$elm$core$Task$andThen,
			function (pid) {
				return A2(
					$elm$core$Task$andThen,
					function (_v1) {
						return $elm$core$Task$succeed(
							A3(
								$elm$browser$Browser$AnimationManager$State,
								subs,
								$elm$core$Maybe$Just(pid),
								newTime));
					},
					$elm$core$Task$sequence(
						A2($elm$core$List$map, send, subs)));
			},
			$elm$core$Process$spawn(
				A2(
					$elm$core$Task$andThen,
					$elm$core$Platform$sendToSelf(router),
					$elm$browser$Browser$AnimationManager$rAF)));
	});
var $elm$browser$Browser$AnimationManager$Time = function (a) {
	return {$: 'Time', a: a};
};
var $elm$browser$Browser$AnimationManager$subMap = F2(
	function (func, sub) {
		if (sub.$ === 'Time') {
			var tagger = sub.a;
			return $elm$browser$Browser$AnimationManager$Time(
				A2($elm$core$Basics$composeL, func, tagger));
		} else {
			var tagger = sub.a;
			return $elm$browser$Browser$AnimationManager$Delta(
				A2($elm$core$Basics$composeL, func, tagger));
		}
	});
_Platform_effectManagers['Browser.AnimationManager'] = _Platform_createManager($elm$browser$Browser$AnimationManager$init, $elm$browser$Browser$AnimationManager$onEffects, $elm$browser$Browser$AnimationManager$onSelfMsg, 0, $elm$browser$Browser$AnimationManager$subMap);
var $elm$browser$Browser$AnimationManager$subscription = _Platform_leaf('Browser.AnimationManager');
var $elm$browser$Browser$AnimationManager$onAnimationFrameDelta = function (tagger) {
	return $elm$browser$Browser$AnimationManager$subscription(
		$elm$browser$Browser$AnimationManager$Delta(tagger));
};
var $elm$browser$Browser$Events$onAnimationFrameDelta = $elm$browser$Browser$AnimationManager$onAnimationFrameDelta;
var $elm$browser$Browser$Events$Document = {$: 'Document'};
var $elm$browser$Browser$Events$MySub = F3(
	function (a, b, c) {
		return {$: 'MySub', a: a, b: b, c: c};
	});
var $elm$browser$Browser$Events$State = F2(
	function (subs, pids) {
		return {pids: pids, subs: subs};
	});
var $elm$browser$Browser$Events$init = $elm$core$Task$succeed(
	A2($elm$browser$Browser$Events$State, _List_Nil, $elm$core$Dict$empty));
var $elm$browser$Browser$Events$nodeToKey = function (node) {
	if (node.$ === 'Document') {
		return 'd_';
	} else {
		return 'w_';
	}
};
var $elm$browser$Browser$Events$addKey = function (sub) {
	var node = sub.a;
	var name = sub.b;
	return _Utils_Tuple2(
		_Utils_ap(
			$elm$browser$Browser$Events$nodeToKey(node),
			name),
		sub);
};
var $elm$core$Dict$fromList = function (assocs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, dict) {
				var key = _v0.a;
				var value = _v0.b;
				return A3($elm$core$Dict$insert, key, value, dict);
			}),
		$elm$core$Dict$empty,
		assocs);
};
var $elm$core$Dict$foldl = F3(
	function (func, acc, dict) {
		foldl:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3($elm$core$Dict$foldl, func, acc, left)),
					$temp$dict = right;
				func = $temp$func;
				acc = $temp$acc;
				dict = $temp$dict;
				continue foldl;
			}
		}
	});
var $elm$core$Dict$merge = F6(
	function (leftStep, bothStep, rightStep, leftDict, rightDict, initialResult) {
		var stepState = F3(
			function (rKey, rValue, _v0) {
				stepState:
				while (true) {
					var list = _v0.a;
					var result = _v0.b;
					if (!list.b) {
						return _Utils_Tuple2(
							list,
							A3(rightStep, rKey, rValue, result));
					} else {
						var _v2 = list.a;
						var lKey = _v2.a;
						var lValue = _v2.b;
						var rest = list.b;
						if (_Utils_cmp(lKey, rKey) < 0) {
							var $temp$rKey = rKey,
								$temp$rValue = rValue,
								$temp$_v0 = _Utils_Tuple2(
								rest,
								A3(leftStep, lKey, lValue, result));
							rKey = $temp$rKey;
							rValue = $temp$rValue;
							_v0 = $temp$_v0;
							continue stepState;
						} else {
							if (_Utils_cmp(lKey, rKey) > 0) {
								return _Utils_Tuple2(
									list,
									A3(rightStep, rKey, rValue, result));
							} else {
								return _Utils_Tuple2(
									rest,
									A4(bothStep, lKey, lValue, rValue, result));
							}
						}
					}
				}
			});
		var _v3 = A3(
			$elm$core$Dict$foldl,
			stepState,
			_Utils_Tuple2(
				$elm$core$Dict$toList(leftDict),
				initialResult),
			rightDict);
		var leftovers = _v3.a;
		var intermediateResult = _v3.b;
		return A3(
			$elm$core$List$foldl,
			F2(
				function (_v4, result) {
					var k = _v4.a;
					var v = _v4.b;
					return A3(leftStep, k, v, result);
				}),
			intermediateResult,
			leftovers);
	});
var $elm$browser$Browser$Events$Event = F2(
	function (key, event) {
		return {event: event, key: key};
	});
var $elm$browser$Browser$Events$spawn = F3(
	function (router, key, _v0) {
		var node = _v0.a;
		var name = _v0.b;
		var actualNode = function () {
			if (node.$ === 'Document') {
				return _Browser_doc;
			} else {
				return _Browser_window;
			}
		}();
		return A2(
			$elm$core$Task$map,
			function (value) {
				return _Utils_Tuple2(key, value);
			},
			A3(
				_Browser_on,
				actualNode,
				name,
				function (event) {
					return A2(
						$elm$core$Platform$sendToSelf,
						router,
						A2($elm$browser$Browser$Events$Event, key, event));
				}));
	});
var $elm$core$Dict$union = F2(
	function (t1, t2) {
		return A3($elm$core$Dict$foldl, $elm$core$Dict$insert, t2, t1);
	});
var $elm$browser$Browser$Events$onEffects = F3(
	function (router, subs, state) {
		var stepRight = F3(
			function (key, sub, _v6) {
				var deads = _v6.a;
				var lives = _v6.b;
				var news = _v6.c;
				return _Utils_Tuple3(
					deads,
					lives,
					A2(
						$elm$core$List$cons,
						A3($elm$browser$Browser$Events$spawn, router, key, sub),
						news));
			});
		var stepLeft = F3(
			function (_v4, pid, _v5) {
				var deads = _v5.a;
				var lives = _v5.b;
				var news = _v5.c;
				return _Utils_Tuple3(
					A2($elm$core$List$cons, pid, deads),
					lives,
					news);
			});
		var stepBoth = F4(
			function (key, pid, _v2, _v3) {
				var deads = _v3.a;
				var lives = _v3.b;
				var news = _v3.c;
				return _Utils_Tuple3(
					deads,
					A3($elm$core$Dict$insert, key, pid, lives),
					news);
			});
		var newSubs = A2($elm$core$List$map, $elm$browser$Browser$Events$addKey, subs);
		var _v0 = A6(
			$elm$core$Dict$merge,
			stepLeft,
			stepBoth,
			stepRight,
			state.pids,
			$elm$core$Dict$fromList(newSubs),
			_Utils_Tuple3(_List_Nil, $elm$core$Dict$empty, _List_Nil));
		var deadPids = _v0.a;
		var livePids = _v0.b;
		var makeNewPids = _v0.c;
		return A2(
			$elm$core$Task$andThen,
			function (pids) {
				return $elm$core$Task$succeed(
					A2(
						$elm$browser$Browser$Events$State,
						newSubs,
						A2(
							$elm$core$Dict$union,
							livePids,
							$elm$core$Dict$fromList(pids))));
			},
			A2(
				$elm$core$Task$andThen,
				function (_v1) {
					return $elm$core$Task$sequence(makeNewPids);
				},
				$elm$core$Task$sequence(
					A2($elm$core$List$map, $elm$core$Process$kill, deadPids))));
	});
var $elm$browser$Browser$Events$onSelfMsg = F3(
	function (router, _v0, state) {
		var key = _v0.key;
		var event = _v0.event;
		var toMessage = function (_v2) {
			var subKey = _v2.a;
			var _v3 = _v2.b;
			var node = _v3.a;
			var name = _v3.b;
			var decoder = _v3.c;
			return _Utils_eq(subKey, key) ? A2(_Browser_decodeEvent, decoder, event) : $elm$core$Maybe$Nothing;
		};
		var messages = A2($elm$core$List$filterMap, toMessage, state.subs);
		return A2(
			$elm$core$Task$andThen,
			function (_v1) {
				return $elm$core$Task$succeed(state);
			},
			$elm$core$Task$sequence(
				A2(
					$elm$core$List$map,
					$elm$core$Platform$sendToApp(router),
					messages)));
	});
var $elm$browser$Browser$Events$subMap = F2(
	function (func, _v0) {
		var node = _v0.a;
		var name = _v0.b;
		var decoder = _v0.c;
		return A3(
			$elm$browser$Browser$Events$MySub,
			node,
			name,
			A2($elm$json$Json$Decode$map, func, decoder));
	});
_Platform_effectManagers['Browser.Events'] = _Platform_createManager($elm$browser$Browser$Events$init, $elm$browser$Browser$Events$onEffects, $elm$browser$Browser$Events$onSelfMsg, 0, $elm$browser$Browser$Events$subMap);
var $elm$browser$Browser$Events$subscription = _Platform_leaf('Browser.Events');
var $elm$browser$Browser$Events$on = F3(
	function (node, name, decoder) {
		return $elm$browser$Browser$Events$subscription(
			A3($elm$browser$Browser$Events$MySub, node, name, decoder));
	});
var $elm$browser$Browser$Events$onKeyDown = A2($elm$browser$Browser$Events$on, $elm$browser$Browser$Events$Document, 'keydown');
var $elm$browser$Browser$Events$Window = {$: 'Window'};
var $elm$browser$Browser$Events$onResize = function (func) {
	return A3(
		$elm$browser$Browser$Events$on,
		$elm$browser$Browser$Events$Window,
		'resize',
		A2(
			$elm$json$Json$Decode$field,
			'target',
			A3(
				$elm$json$Json$Decode$map2,
				func,
				A2($elm$json$Json$Decode$field, 'innerWidth', $elm$json$Json$Decode$int),
				A2($elm$json$Json$Decode$field, 'innerHeight', $elm$json$Json$Decode$int))));
};
var $author$project$Video$Events$subs = function (model) {
	return $elm$core$Platform$Sub$batch(
		_List_fromArray(
			[
				$author$project$Video$nowHasQualities($author$project$Video$NowHasQualities),
				$author$project$Video$nowHasQuality(
				function (x) {
					var _v0 = A2($elm$json$Json$Decode$decodeValue, $author$project$Video$Quality$decode, x);
					if (_v0.$ === 'Ok') {
						var s = _v0.a;
						return $author$project$Video$NowHasQuality(s);
					} else {
						return $author$project$Video$Noop;
					}
				}),
				$author$project$Video$nowHasSubtitles(
				function (x) {
					var _v1 = A2($elm$json$Json$Decode$decodeValue, $author$project$Video$Events$decodeSubtitles, x);
					if (_v1.$ === 'Ok') {
						var s = _v1.a;
						return $author$project$Video$NowHasSubtitles(s);
					} else {
						return $author$project$Video$Noop;
					}
				}),
				$author$project$Video$nowHasSubtitleTrack(
				function (x) {
					var _v2 = A2($elm$json$Json$Decode$decodeValue, $author$project$Video$Events$decodeMaybeSubtitleTrack, x);
					if (_v2.$ === 'Ok') {
						var t = _v2.a;
						return $author$project$Video$NowHasSubtitleTrack(t);
					} else {
						return $author$project$Video$Noop;
					}
				}),
				$author$project$Video$nowHasScreenSize($author$project$Video$NowHasScreenSize),
				$author$project$Video$nowHasPlayerSize($author$project$Video$NowHasPlayerSize),
				$author$project$Video$autoplayRefused($author$project$Video$AutoplayRefused),
				$author$project$Video$isMobile(
				function (x) {
					return $author$project$Video$IsMobile(x);
				}),
				$elm$browser$Browser$Events$onResize(
				F2(
					function (x, y) {
						return $author$project$Video$NowHasScreenSize(
							_Utils_Tuple2(x, y));
					})),
				$elm$browser$Browser$Events$onAnimationFrameDelta($author$project$Video$AnimationFrameDelta),
				$elm$browser$Browser$Events$onKeyDown(
				A2($author$project$Video$Events$decodeKeyDown, false, model))
			]));
};
var $elm$core$Platform$Cmd$batch = _Platform_batch;
var $author$project$Video$polymnyVideoExitFullscreen = _Platform_outgoingPort('polymnyVideoExitFullscreen', $elm$json$Json$Encode$string);
var $author$project$Video$exitFullscreen = $author$project$Video$polymnyVideoExitFullscreen;
var $elm$core$Platform$Cmd$none = $elm$core$Platform$Cmd$batch(_List_Nil);
var $author$project$Video$polymnyVideoPlayPause = _Platform_outgoingPort('polymnyVideoPlayPause', $elm$json$Json$Encode$string);
var $author$project$Video$playPause = $author$project$Video$polymnyVideoPlayPause;
var $author$project$Video$polymnyVideoReleaseSeekbarCapture = _Platform_outgoingPort(
	'polymnyVideoReleaseSeekbarCapture',
	function ($) {
		var a = $.a;
		var b = $.b;
		return A2(
			$elm$json$Json$Encode$list,
			$elm$core$Basics$identity,
			_List_fromArray(
				[
					$elm$json$Json$Encode$string(a),
					$elm$core$Basics$identity(b)
				]));
	});
var $author$project$Video$releaseSeekbarCapture = F2(
	function (model, pointerId) {
		return $author$project$Video$polymnyVideoReleaseSeekbarCapture(
			_Utils_Tuple2(model.id, pointerId));
	});
var $author$project$Video$polymnyVideoReleaseVolumeBarCapture = _Platform_outgoingPort(
	'polymnyVideoReleaseVolumeBarCapture',
	function ($) {
		var a = $.a;
		var b = $.b;
		return A2(
			$elm$json$Json$Encode$list,
			$elm$core$Basics$identity,
			_List_fromArray(
				[
					$elm$json$Json$Encode$string(a),
					$elm$core$Basics$identity(b)
				]));
	});
var $author$project$Video$releaseVolumeBarCapture = F2(
	function (model, pointerId) {
		return $author$project$Video$polymnyVideoReleaseVolumeBarCapture(
			_Utils_Tuple2(model.id, pointerId));
	});
var $author$project$Video$polymnyVideoRequestFullscreen = _Platform_outgoingPort('polymnyVideoRequestFullscreen', $elm$json$Json$Encode$string);
var $author$project$Video$requestFullscreen = $author$project$Video$polymnyVideoRequestFullscreen;
var $author$project$Video$polymnyVideoSeek = _Platform_outgoingPort(
	'polymnyVideoSeek',
	function ($) {
		var a = $.a;
		var b = $.b;
		return A2(
			$elm$json$Json$Encode$list,
			$elm$core$Basics$identity,
			_List_fromArray(
				[
					$elm$json$Json$Encode$string(a),
					$elm$json$Json$Encode$float(b)
				]));
	});
var $author$project$Video$seek = F2(
	function (id, s) {
		return $author$project$Video$polymnyVideoSeek(
			_Utils_Tuple2(id, s));
	});
var $author$project$Video$polymnyVideoSetPlaybackRate = _Platform_outgoingPort(
	'polymnyVideoSetPlaybackRate',
	function ($) {
		var a = $.a;
		var b = $.b;
		return A2(
			$elm$json$Json$Encode$list,
			$elm$core$Basics$identity,
			_List_fromArray(
				[
					$elm$json$Json$Encode$string(a),
					$elm$json$Json$Encode$float(b)
				]));
	});
var $author$project$Video$setPlaybackRate = F2(
	function (id, playbackRate) {
		return $author$project$Video$polymnyVideoSetPlaybackRate(
			_Utils_Tuple2(id, playbackRate));
	});
var $elm$json$Json$Encode$int = _Json_wrap;
var $author$project$Video$polymnyVideoSetQuality = _Platform_outgoingPort(
	'polymnyVideoSetQuality',
	function ($) {
		var a = $.a;
		var b = $.b;
		return A2(
			$elm$json$Json$Encode$list,
			$elm$core$Basics$identity,
			_List_fromArray(
				[
					$elm$json$Json$Encode$string(a),
					function ($) {
					return $elm$json$Json$Encode$object(
						_List_fromArray(
							[
								_Utils_Tuple2(
								'auto',
								$elm$json$Json$Encode$bool($.auto)),
								_Utils_Tuple2(
								'height',
								$elm$json$Json$Encode$int($.height))
							]));
				}(b)
				]));
	});
var $author$project$Video$setQuality = F2(
	function (id, quality) {
		return $author$project$Video$polymnyVideoSetQuality(
			_Utils_Tuple2(id, quality));
	});
var $author$project$Video$polymnyVideoSetSeekbarCapture = _Platform_outgoingPort(
	'polymnyVideoSetSeekbarCapture',
	function ($) {
		var a = $.a;
		var b = $.b;
		return A2(
			$elm$json$Json$Encode$list,
			$elm$core$Basics$identity,
			_List_fromArray(
				[
					$elm$json$Json$Encode$string(a),
					$elm$core$Basics$identity(b)
				]));
	});
var $author$project$Video$setSeekbarCapture = F2(
	function (model, pointerId) {
		return $author$project$Video$polymnyVideoSetSeekbarCapture(
			_Utils_Tuple2(model.id, pointerId));
	});
var $author$project$Video$polymnyVideoSetSubtitleTrack = _Platform_outgoingPort(
	'polymnyVideoSetSubtitleTrack',
	function ($) {
		var a = $.a;
		var b = $.b;
		return A2(
			$elm$json$Json$Encode$list,
			$elm$core$Basics$identity,
			_List_fromArray(
				[
					$elm$json$Json$Encode$string(a),
					$elm$json$Json$Encode$int(b)
				]));
	});
var $author$project$Video$setSubtitleTrack = F2(
	function (id, track) {
		return $author$project$Video$polymnyVideoSetSubtitleTrack(
			_Utils_Tuple2(id, track));
	});
var $author$project$Video$polymnyVideoSetVolume = _Platform_outgoingPort(
	'polymnyVideoSetVolume',
	function ($) {
		var a = $.a;
		var b = $.b;
		return A2(
			$elm$json$Json$Encode$list,
			$elm$core$Basics$identity,
			_List_fromArray(
				[
					$elm$json$Json$Encode$string(a),
					function ($) {
					return $elm$json$Json$Encode$object(
						_List_fromArray(
							[
								_Utils_Tuple2(
								'muted',
								$elm$json$Json$Encode$bool($.muted)),
								_Utils_Tuple2(
								'volume',
								$elm$json$Json$Encode$float($.volume))
							]));
				}(b)
				]));
	});
var $author$project$Video$setVolume = F2(
	function (id, volume) {
		return $author$project$Video$polymnyVideoSetVolume(
			_Utils_Tuple2(id, volume));
	});
var $author$project$Video$polymnyVideoSetVolumeBarCapture = _Platform_outgoingPort(
	'polymnyVideoSetVolumeBarCapture',
	function ($) {
		var a = $.a;
		var b = $.b;
		return A2(
			$elm$json$Json$Encode$list,
			$elm$core$Basics$identity,
			_List_fromArray(
				[
					$elm$json$Json$Encode$string(a),
					$elm$core$Basics$identity(b)
				]));
	});
var $author$project$Video$setVolumeBarCapture = F2(
	function (model, pointerId) {
		return $author$project$Video$polymnyVideoSetVolumeBarCapture(
			_Utils_Tuple2(model.id, pointerId));
	});
var $author$project$Video$update = F2(
	function (msg, model) {
		var modelResetTimer = _Utils_update(
			model,
			{overlayTimer: model.animationFrame});
		switch (msg.$) {
			case 'Noop':
				return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
			case 'ResetTimer':
				return _Utils_Tuple2(modelResetTimer, $elm$core$Platform$Cmd$none);
			case 'PlayPause':
				var icon = model.playing ? $icidasset$elm_material_icons$Material$Icons$pause : $icidasset$elm_material_icons$Material$Icons$play_arrow;
				return _Utils_Tuple2(
					_Utils_update(
						modelResetTimer,
						{
							icon: _Utils_Tuple2(model.animationFrame, icon)
						}),
					$author$project$Video$playPause(modelResetTimer.id));
			case 'Seek':
				var t = msg.a;
				var pointerId = msg.b;
				var time = A2(
					$elm$core$Basics$max,
					A2($elm$core$Basics$min, t, model.duration),
					0);
				var i = model.holdingSeek ? model.icon : ((_Utils_cmp(time, model.position) > 0) ? _Utils_Tuple2(model.animationFrame, $icidasset$elm_material_icons$Material$Icons$fast_forward) : ((_Utils_cmp(time, model.position) < 0) ? _Utils_Tuple2(model.animationFrame, $icidasset$elm_material_icons$Material$Icons$fast_rewind) : model.icon));
				if (pointerId.$ === 'Nothing') {
					return _Utils_Tuple2(
						_Utils_update(
							modelResetTimer,
							{icon: i}),
						A2($author$project$Video$seek, modelResetTimer.id, time));
				} else {
					var p = pointerId.a;
					return _Utils_Tuple2(
						_Utils_update(
							modelResetTimer,
							{holdingSeek: true}),
						$elm$core$Platform$Cmd$batch(
							_List_fromArray(
								[
									A2($author$project$Video$seek, modelResetTimer.id, time),
									A2($author$project$Video$setSeekbarCapture, model, p)
								])));
				}
			case 'Unseek':
				var pointerId = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{holdingSeek: false}),
					A2($author$project$Video$releaseSeekbarCapture, model, pointerId));
			case 'SetPlaybackRate':
				var rate = msg.a;
				return _Utils_Tuple2(
					modelResetTimer,
					A2($author$project$Video$setPlaybackRate, modelResetTimer.id, rate));
			case 'ToggleSettings':
				var s = msg.a;
				var newSettings = function () {
					var _v2 = modelResetTimer.settings;
					if (_v2.$ === 'Nothing') {
						return $elm$core$Maybe$Just(s);
					} else {
						var a = _v2.a;
						return _Utils_eq(s, a) ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(s);
					}
				}();
				return _Utils_Tuple2(
					_Utils_update(
						modelResetTimer,
						{overlayTimer: modelResetTimer.animationFrame, settings: newSettings}),
					$elm$core$Platform$Cmd$none);
			case 'RequestFullscreen':
				return _Utils_Tuple2(
					modelResetTimer,
					$author$project$Video$requestFullscreen(modelResetTimer.id));
			case 'ExitFullscreen':
				return _Utils_Tuple2(
					modelResetTimer,
					$author$project$Video$exitFullscreen(modelResetTimer.id));
			case 'SetQuality':
				var q = msg.a;
				return _Utils_Tuple2(
					modelResetTimer,
					A2($author$project$Video$setQuality, modelResetTimer.id, q));
			case 'SetSubtitleTrack':
				var t = msg.a;
				return _Utils_Tuple2(
					modelResetTimer,
					A2($author$project$Video$setSubtitleTrack, modelResetTimer.id, t));
			case 'SetVolume':
				var v = msg.a;
				var m = msg.b;
				var pointerId = msg.c;
				var i = model.holdingVolume ? model.icon : ((m && (!model.muted)) ? _Utils_Tuple2(model.animationFrame, $icidasset$elm_material_icons$Material$Icons$volume_off) : (((!m) && model.muted) ? _Utils_Tuple2(model.animationFrame, $icidasset$elm_material_icons$Material$Icons$volume_up) : ((_Utils_cmp(model.volume, v) > 0) ? _Utils_Tuple2(model.animationFrame, $icidasset$elm_material_icons$Material$Icons$volume_down) : ((_Utils_cmp(model.volume, v) < 0) ? _Utils_Tuple2(model.animationFrame, $icidasset$elm_material_icons$Material$Icons$volume_up) : model.icon))));
				if (pointerId.$ === 'Nothing') {
					return _Utils_Tuple2(
						_Utils_update(
							modelResetTimer,
							{icon: i}),
						A2(
							$author$project$Video$setVolume,
							modelResetTimer.id,
							{muted: m, volume: v}));
				} else {
					var p = pointerId.a;
					return _Utils_Tuple2(
						_Utils_update(
							modelResetTimer,
							{holdingVolume: true}),
						$elm$core$Platform$Cmd$batch(
							_List_fromArray(
								[
									A2(
									$author$project$Video$setVolume,
									modelResetTimer.id,
									{muted: m, volume: v}),
									A2($author$project$Video$setVolumeBarCapture, model, p)
								])));
				}
			case 'UnsetVolume':
				var pointerId = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{holdingVolume: false}),
					A2($author$project$Video$releaseVolumeBarCapture, model, pointerId));
			case 'AnimationFrameDelta':
				var delta = msg.a;
				var animationFrame = model.animationFrame + delta;
				var settings = (_Utils_cmp(animationFrame - model.overlayTimer, $author$project$Video$fadeTimerOverlay.disappear) > 0) ? $elm$core$Maybe$Nothing : model.settings;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{animationFrame: animationFrame, settings: settings}),
					$elm$core$Platform$Cmd$none);
			case 'MouseMove':
				return _Utils_Tuple2(modelResetTimer, $elm$core$Platform$Cmd$none);
			case 'NowPlaying':
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{hasStarted: true, playing: true}),
					$elm$core$Platform$Cmd$none);
			case 'NowPaused':
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{playing: false}),
					$elm$core$Platform$Cmd$none);
			case 'NowHasDuration':
				var duration = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{duration: duration}),
					$elm$core$Platform$Cmd$none);
			case 'NowAtPosition':
				var position = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{position: position}),
					$elm$core$Platform$Cmd$none);
			case 'NowAtVolume':
				var volume = msg.a;
				var muted = msg.b;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{muted: muted, volume: volume}),
					$elm$core$Platform$Cmd$none);
			case 'NowLoaded':
				var loaded = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{loaded: loaded}),
					$elm$core$Platform$Cmd$none);
			case 'NowIsFullscreen':
				var fullscreen = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{isFullscreen: fullscreen}),
					$elm$core$Platform$Cmd$none);
			case 'NowHasQualities':
				var qualities = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{qualities: qualities, ready: true}),
					$elm$core$Platform$Cmd$none);
			case 'NowHasQuality':
				var quality = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							quality: $elm$core$Maybe$Just(quality)
						}),
					$elm$core$Platform$Cmd$none);
			case 'NowHasSize':
				var size = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{size: size}),
					$elm$core$Platform$Cmd$none);
			case 'NowHasScreenSize':
				var size = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{screenSize: size}),
					$elm$core$Platform$Cmd$none);
			case 'NowHasPlayerSize':
				var size = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{playerSize: size}),
					$elm$core$Platform$Cmd$none);
			case 'NowHasPlaybackRate':
				var rate = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{playbackRate: rate}),
					$elm$core$Platform$Cmd$none);
			case 'NowHasSubtitles':
				var tracks = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{subtitles: tracks}),
					$elm$core$Platform$Cmd$none);
			case 'NowHasSubtitleTrack':
				var track = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{subtitleTrack: track}),
					$elm$core$Platform$Cmd$none);
			case 'NowHasMiniature':
				var miniature = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{showMiniature: miniature}),
					$elm$core$Platform$Cmd$none);
			case 'AutoplayRefused':
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{hasStarted: false}),
					$elm$core$Platform$Cmd$none);
			default:
				var x = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{mobile: x}),
					$elm$core$Platform$Cmd$none);
		}
	});
var $author$project$Main$Fullpage$main = $elm$browser$Browser$element(
	{init: $author$project$Video$fromValue, subscriptions: $author$project$Video$Events$subs, update: $author$project$Video$update, view: $author$project$Video$Views$fullpage});
var $author$project$Video$Views$embedElement = function (model) {
	return model.isFullscreen ? $author$project$Video$Views$fullpageElement(model) : A2(
		$mdgriffith$elm_ui$Element$el,
		A2(
			$elm$core$List$cons,
			$mdgriffith$elm_ui$Element$inFront(
				$author$project$Video$Views$overlay(model)),
			A2(
				$elm$core$List$cons,
				$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
				A2(
					$elm$core$List$cons,
					$mdgriffith$elm_ui$Element$Background$color(
						A3($mdgriffith$elm_ui$Element$rgb, 0, 0, 0)),
					A2(
						$elm$core$List$cons,
						$mdgriffith$elm_ui$Element$htmlAttribute(
							$elm$html$Html$Attributes$id(model.id + '-full')),
						$author$project$Video$Events$player)))),
		$mdgriffith$elm_ui$Element$html(
			A2(
				$elm$html$Html$video,
				A2(
					$elm$core$List$cons,
					$elm$html$Html$Attributes$class('wf'),
					$author$project$Video$Events$video(model)),
				_List_Nil)));
};
var $author$project$Video$Views$embed = function (model) {
	return A2(
		$mdgriffith$elm_ui$Element$layout,
		_List_Nil,
		$author$project$Video$Views$embedElement(model));
};
var $author$project$Main$Embed$main = $elm$browser$Browser$element(
	{init: $author$project$Video$fromValue, subscriptions: $author$project$Video$Events$subs, update: $author$project$Video$update, view: $author$project$Video$Views$embed});
_Platform_export({'Main':{'Embed':{'init':$author$project$Main$Embed$main($elm$json$Json$Decode$value)(0)},'Fullpage':{'init':$author$project$Main$Fullpage$main($elm$json$Json$Decode$value)(0)}}});}(this));Object.defineProperty(TimeRanges.prototype, "polymnyVideoAsArray", {
    get: function() {
        var ret = [];
        for (var i = 0; i < this.length; i++) {
            ret.push({start: this.start(i), end: this.end(i)});
        }
        return ret;
    }
});

Object.defineProperty(HTMLElement.prototype, "polymnyVideoFullscreenElement", {
    get: function() {
        return document.fullscreenElement || document.webkitFullscreenElement || null;
    }
});

const PolymnyVideo = (function() {

    function parseQueryString(query) {
        var vars = query.split("&");
        var queryString = {};
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            var key = decodeURIComponent(pair[0]);
            var value = decodeURIComponent(pair[1]);
            // If first entry with this name
            if (typeof queryString[key] === "undefined") {
                queryString[key] = decodeURIComponent(value);
                // If second entry with this name
            } else if (typeof queryString[key] === "string") {
                var arr = [queryString[key], decodeURIComponent(value)];
                queryString[key] = arr;
                // If third or later entry with this name
            } else {
                queryString[key].push(decodeURIComponent(value));
            }
        }
        return queryString;
    }

    function isDeviceMobile() {
        var check = false;
        (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
        return check;
    }

    const PolymnyVideo = {};
    PolymnyVideo.idCounter = 0;

    function main(construct) {
        return function(options) {
            if (!(options.node instanceof HTMLElement)) {
                throw new Error("options.node must be an HTMLElement");
            }

            if (typeof options.url !== "string" && ! (options.url instanceof String)) {
                throw new Error("options.url must be a string");
            }

            options.id = "polymnyVideoId" + PolymnyVideo.idCounter++;

            const app = construct({
                node: options.node,
                flags: options
            });

            PolymnyVideo.setup(app);
            return app;
        };
    }

    function initHls(arg, app, video) {
        if (Hls.isSupported()) {
            let hls = new Hls();
            hls.startLevel = -1;
            hls.loadSource(arg.url);

            hls.on(Hls.Events.MANIFEST_PARSED, function() {
                const availableQualities = hls.levels.map((l) => l.height);
                availableQualities.unshift(0);
                app.ports.polymnyVideoNowHasQualities.send(availableQualities);
            });

            hls.on(Hls.Events.LEVEL_SWITCHED, function(_, data) {
                app.ports.polymnyVideoNowHasQuality.send({
                    auto: hls.autoLevelEnabled,
                    height: hls.levels[data.level].height
                });
            })

            hls.on(Hls.Events.SUBTITLE_TRACKS_UPDATED, function(_, data) {
                app.ports.polymnyVideoNowHasSubtitles.send(data.subtitleTracks);
            });

            hls.on(Hls.Events.SUBTITLE_TRACK_SWITCH, function(_, data) {
                app.ports.polymnyVideoNowHasSubtitleTrack.send(data.id === -1 ? null : hls.subtitleTracks[data.id]);
            });

            hls.attachMedia(video);
            return hls;
        } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
            initVideo(arg, video);
        }

    }

    function initVideo(arg, app, video) {
        video.addEventListener('loadedmetadata', () => {
            app.ports.polymnyVideoNowHasQualities.send([0]);
        });

        video.src = arg.url;
    }

    if (typeof Elm !== "undefined") {
        if (typeof Elm.Main !== "undefined") {
            if (typeof Elm.Main.Fullpage !== "undefined") {
                PolymnyVideo.fullpage = main(Elm.Main.Fullpage.init);
            }
            if (typeof Elm.Main.Embed !== "undefined") {
                PolymnyVideo.embed = main(Elm.Main.Embed.init);
            }
        }
    }

    PolymnyVideo.setup = function(app) {
        let hls;

        app.ports.polymnyVideoInit.subscribe(function(arg) {
            requestAnimationFrame(function() {
                const video = document.getElementById(arg.id);

                let resizeObserver = new ResizeObserver(_ => {
                    app.ports.polymnyVideoNowHasPlayerSize.send([video.offsetWidth, video.offsetHeight]);
                });
                resizeObserver.observe(video);

                if (arg.url.endsWith('.m3u8')) {
                    hls = initHls(arg, app, video);
                } else {
                    initVideo(arg, app, video);
                }

                if (arg.startTime !== null) {
                    video.currentTime = arg.startTime;
                }

                if (arg.autoplay) {
                    let promise = video.play();
                    if (promise !== undefined) {
                        promise.catch(() => requestAnimationFrame(() => app.ports.polymnyVideoAutoplayRefused.send(null)));
                    }
                }
            });
        });

        app.ports.polymnyVideoPlayPause.subscribe(function(arg) {
            const video = document.getElementById(arg);
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
        });

        app.ports.polymnyVideoSeek.subscribe(function(arg) {
            const video = document.getElementById(arg[0]);
            video.currentTime = arg[1];
        });

        app.ports.polymnyVideoRequestFullscreen.subscribe(function(arg) {
            let element = document.getElementById(arg + '-full');
            if (typeof element.requestFullscreen === 'function') {
                element.requestFullscreen();
            } else if (typeof element.webkitRequestFullscreen === 'function') {
                element.webkitRequestFullscreen();
            }
        });

        app.ports.polymnyVideoExitFullscreen.subscribe(function() {
            if (typeof document.exitFullscreen === 'function') {
                document.exitFullscreen();
            } else if (typeof document.webkitExitFullscreen === 'function') {
                document.webkitExitFullscreen();
            }
        });

        app.ports.polymnyVideoSetPlaybackRate.subscribe(function(arg) {
            const video = document.getElementById(arg[0]);
            video.playbackRate = arg[1];
        });

        app.ports.polymnyVideoSetQuality.subscribe(function(arg) {
            const old = hls.currentLevel;
            if (arg[1].auto) {
                hls.currentLevel = -1;
            } else {
                hls.levels.forEach((level, levelIndex) => {
                    if (level.height === arg[1].height) {
                        hls.currentLevel = levelIndex;
                    }
                });
            }
            if (old === hls.currentLevel) {
                app.ports.polymnyVideoNowHasQuality.send({
                    auto: hls.autoLevelEnabled,
                    height: hls.currentLevel === -1 ? 0 : hls.levels[hls.currentLevel].height
                });
            }
        });

        app.ports.polymnyVideoSetVolume.subscribe(function(arg) {
            const video = document.getElementById(arg[0]);
            video.volume = arg[1].volume;
            video.muted = arg[1].muted;
        });

        app.ports.polymnyVideoSetSubtitleTrack.subscribe(function(arg) {
            hls.subtitleDisplay = arg[1] !== -1;
            hls.subtitleTrack = arg[1];
        });

        app.ports.polymnyVideoSetSeekbarCapture.subscribe(function(arg) {
            const seekbar = document.getElementById(arg[0] + '-seekbar');
            seekbar.setPointerCapture(arg[1]);
        });

        app.ports.polymnyVideoReleaseSeekbarCapture.subscribe(function(arg) {
            const seekbar = document.getElementById(arg[0] + '-seekbar');
            seekbar.releasePointerCapture(arg[1]);
        });

        app.ports.polymnyVideoSetVolumeBarCapture.subscribe(function(arg) {
            const volumebar = document.getElementById(arg[0] + '-volumebar');
            volumebar.setPointerCapture(arg[1]);
        });

        app.ports.polymnyVideoReleaseVolumeBarCapture.subscribe(function(arg) {
            const volumebar = document.getElementById(arg[0] + '-volumebar');
            volumebar.releasePointerCapture(arg[1]);
        });

        app.ports.polymnyVideoNowHasScreenSize.send([window.innerWidth, window.innerHeight]);
        app.ports.polymnyVideoIsMobile.send(isDeviceMobile());
    };

    PolymnyVideo.getArgumentFromUrl = function(key) {
        const args = parseQueryString(location.search.slice(1));
        return args[key] || null;
    };

    return PolymnyVideo;
})();
