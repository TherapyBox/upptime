function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function s(t){t.forEach(n)}function o(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let i;function c(t,e){return i||(i=document.createElement("a")),i.href=e,t===i.href}function l(t,n,r,s){return t[1]&&s?e(r.ctx.slice(),t[1](s(n))):r.ctx}function u(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}function d(t){return null==t?"":t}let f,h,p=!1;function m(t,e,n,r){for(;t<e;){const s=t+(e-t>>1);n(s)<=r?t=s+1:e=s}return t}function g(t,e){if(p){for(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if("HEAD"===t.nodeName){const t=[];for(let n=0;n<e.length;n++){const r=e[n];void 0!==r.claim_order&&t.push(r)}e=t}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let s=0;for(let t=0;t<e.length;t++){const o=e[t].claim_order,a=(s>0&&e[n[s]].claim_order<=o?s+1:m(1,s,(t=>e[n[t]].claim_order),o))-1;r[t]=n[a]+1;const i=a+1;n[i]=t,s=Math.max(i,s)}const o=[],a=[];let i=e.length-1;for(let t=n[s]+1;0!=t;t=r[t-1]){for(o.push(e[t-1]);i>=t;i--)a.push(e[i]);i--}for(;i>=0;i--)a.push(e[i]);o.reverse(),a.sort(((t,e)=>t.claim_order-e.claim_order));for(let e=0,n=0;e<a.length;e++){for(;n<o.length&&a[e].claim_order>=o[n].claim_order;)n++;const r=n<o.length?o[n]:null;t.insertBefore(a[e],r)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);null!==t.actual_end_child&&void 0===t.actual_end_child.claim_order;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?void 0===e.claim_order&&e.parentNode===t||t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else e.parentNode===t&&null===e.nextSibling||t.appendChild(e)}function b(t,e,n){t.insertBefore(e,n||null)}function v(t,e,n){p&&!n?g(t,e):e.parentNode===t&&e.nextSibling==n||t.insertBefore(e,n||null)}function y(t){t.parentNode.removeChild(t)}function _(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function $(t){return document.createElement(t)}function w(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function x(t){return document.createTextNode(t)}function E(){return x(" ")}function S(){return x("")}function T(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function A(t){return function(e){return e.preventDefault(),t.call(this,e)}}function P(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function N(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const r in e)null==e[r]?t.removeAttribute(r):"style"===r?t.style.cssText=e[r]:"__value"===r?t.value=t[r]=e[r]:n[r]&&n[r].set?t[r]=e[r]:P(t,r,e[r])}function I(t){return Array.from(t.childNodes)}function k(t){void 0===t.claim_info&&(t.claim_info={last_index:0,total_claimed:0})}function L(t,e,n,r,s=!1){k(t);const o=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const o=t[r];if(e(o)){const e=n(o);return void 0===e?t.splice(r,1):t[r]=e,s||(t.claim_info.last_index=r),o}}for(let r=t.claim_info.last_index-1;r>=0;r--){const o=t[r];if(e(o)){const e=n(o);return void 0===e?t.splice(r,1):t[r]=e,s?void 0===e&&t.claim_info.last_index--:t.claim_info.last_index=r,o}}return r()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function R(t,e,n,r){return L(t,(t=>t.nodeName===e),(t=>{const e=[];for(let r=0;r<t.attributes.length;r++){const s=t.attributes[r];n[s.name]||e.push(s.name)}e.forEach((e=>t.removeAttribute(e)))}),(()=>r(e)))}function C(t,e,n){return R(t,e,n,$)}function O(t,e,n){return R(t,e,n,w)}function H(t,e){return L(t,(t=>3===t.nodeType),(t=>{const n=""+e;if(t.data.startsWith(n)){if(t.data.length!==n.length)return t.splitText(n.length)}else t.data=n}),(()=>x(e)),!0)}function U(t){return H(t," ")}function M(t,e,n){for(let r=n;r<t.length;r+=1){const n=t[r];if(8===n.nodeType&&n.textContent.trim()===e)return r}return t.length}function j(t,e){const n=M(t,"HTML_TAG_START",0),r=M(t,"HTML_TAG_END",n);if(n===r)return new J(void 0,e);k(t);const s=t.splice(n,r-n+1);y(s[0]),y(s[s.length-1]);const o=s.slice(1,s.length-1);for(const e of o)e.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new J(o,e)}function D(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function B(t,e){t.value=null==e?"":e}function G(t,e,n,r){null===n?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function q(){if(void 0===f){f=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(t){f=!0}}return f}function z(t,e){"static"===getComputedStyle(t).position&&(t.style.position="relative");const n=$("iframe");n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1;const r=q();let s;return r?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",s=T(window,"message",(t=>{t.source===n.contentWindow&&e()}))):(n.src="about:blank",n.onload=()=>{s=T(n.contentWindow,"resize",e)}),function(t,e){t.appendChild(e)}(t,n),()=>{(r||s&&n.contentWindow)&&s(),y(n)}}function V(t,e=document.body){return Array.from(e.querySelectorAll(t))}class J extends class{constructor(t=!1){this.is_svg=!1,this.is_svg=t,this.e=this.n=null}c(t){this.h(t)}m(t,e,n=null){this.e||(this.is_svg?this.e=w(e.nodeName):this.e=$(e.nodeName),this.t=e,this.c(t)),this.i(n)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let e=0;e<this.n.length;e+=1)b(this.t,this.n[e],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(y)}}{constructor(t,e=!1){super(e),this.e=this.n=null,this.l=t}c(t){this.l?this.n=this.l:super.c(t)}i(t){for(let e=0;e<this.n.length;e+=1)v(this.t,this.n[e],t)}}function K(t){h=t}function W(){if(!h)throw new Error("Function called outside component initialization");return h}function F(t){W().$$.on_mount.push(t)}function Y(t){W().$$.after_update.push(t)}function Q(t){W().$$.on_destroy.push(t)}const X=[],Z=[],tt=[],et=[],nt=Promise.resolve();let rt=!1;function st(t){tt.push(t)}const ot=new Set;let at=0;function it(){const t=h;do{for(;at<X.length;){const t=X[at];at++,K(t),ct(t.$$)}for(K(null),X.length=0,at=0;Z.length;)Z.pop()();for(let t=0;t<tt.length;t+=1){const e=tt[t];ot.has(e)||(ot.add(e),e())}tt.length=0}while(X.length);for(;et.length;)et.pop()();rt=!1,ot.clear(),K(t)}function ct(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(st)}}const lt=new Set;let ut;function dt(){ut={r:0,c:[],p:ut}}function ft(){ut.r||s(ut.c),ut=ut.p}function ht(t,e){t&&t.i&&(lt.delete(t),t.i(e))}function pt(t,e,n,r){if(t&&t.o){if(lt.has(t))return;lt.add(t),ut.c.push((()=>{lt.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}else r&&r()}function mt(t,e){const n={},r={},s={$$scope:1};let o=t.length;for(;o--;){const a=t[o],i=e[o];if(i){for(const t in a)t in i||(r[t]=1);for(const t in i)s[t]||(n[t]=i[t],s[t]=1);t[o]=i}else for(const t in a)s[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function gt(t){return"object"==typeof t&&null!==t?t:{}}function bt(t){t&&t.c()}function vt(t,e){t&&t.l(e)}function yt(t,e,r,a){const{fragment:i,on_mount:c,on_destroy:l,after_update:u}=t.$$;i&&i.m(e,r),a||st((()=>{const e=c.map(n).filter(o);l?l.push(...e):s(e),t.$$.on_mount=[]})),u.forEach(st)}function _t(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function $t(t,e){-1===t.$$.dirty[0]&&(X.push(t),rt||(rt=!0,nt.then(it)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function wt(e,n,o,a,i,c,l,u=[-1]){const d=h;K(e);const f=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:i,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(d?d.$$.context:[])),callbacks:r(),dirty:u,skip_bound:!1,root:n.target||d.$$.root};l&&l(f.root);let m=!1;if(f.ctx=o?o(e,n.props||{},((t,n,...r)=>{const s=r.length?r[0]:n;return f.ctx&&i(f.ctx[t],f.ctx[t]=s)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](s),m&&$t(e,t)),n})):[],f.update(),m=!0,s(f.before_update),f.fragment=!!a&&a(f.ctx),n.target){if(n.hydrate){p=!0;const t=I(n.target);f.fragment&&f.fragment.l(t),t.forEach(y)}else f.fragment&&f.fragment.c();n.intro&&ht(e.$$.fragment),yt(e,n.target,n.anchor,n.customElement),p=!1,it()}K(d)}class xt{$destroy(){_t(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Et=[];function St(e,n=t){let r;const s=new Set;function o(t){if(a(e,t)&&(e=t,r)){const t=!Et.length;for(const t of s)t[1](),Et.push(t,e);if(t){for(let t=0;t<Et.length;t+=2)Et[t][0](Et[t+1]);Et.length=0}}}return{set:o,update:function(t){o(t(e))},subscribe:function(a,i=t){const c=[a,i];return s.add(c),1===s.size&&(r=n(o)||t),a(e),()=>{s.delete(c),0===s.size&&(r(),r=null)}}}}const Tt={};var At={owner:"TherapyBox",repo:"upptime",sites:[{name:"Therapy Box website",url:"https://therapy-box.co.uk/"},{name:"Therapy Box files",url:"https://therapy-box.com/"},{name:"Therapy Box mail",url:"https://mail.therapy-box.co.uk/"},{name:"VocaQuest frontend staging",url:"http://frontend.staging.voca.therapy-box.co.uk/"},{name:"VocaQuest server staging",url:"https://srv.staging.voca.therapy-box.co.uk/"},{name:"VocaQuest frontend production",url:"https://app.voca-quest.com/"},{name:"VocaQuest server production",url:"https://srv.voca-quest.com/"},{name:"Language Explorer production",url:"https://app.languageexplorerapp.co.uk/"},{name:"Predictable 5 API",url:"https://therapy-box.co.uk/pa_api.php"},{name:"Chatable 5 API",url:"https://therapy-box.co.uk/ca_api.php"},{name:"DCA play production",url:"https://play.languageexplorer.app/"},{name:"DCA webplatform production",url:"https://web-platform.prod.voca.therapy-box.co.uk/"},{name:"VERT web platform production",url:"https://vert-platform.prod.voca.therapy-box.co.uk/"},{name:"Appnocrat",url:"https://www.appnocrat.com/"},{name:"Jira",url:"https://jira.internal.therapy-box.co.uk/"},{name:"Predictable CMS",url:"https://predictable.therapy-box.co.uk/"},{name:"Stream staging CMS",url:"https://stream-cms.internal.therapy-box.co.uk/"},{name:"Stream staging API",url:"https://stream-api.internal.therapy-box.co.uk/get-sync-metadata"}],"status-website":{baseUrl:"/upptime",logoUrl:"https://raw.githubusercontent.com/upptime/upptime.js.org/master/static/img/icon.svg",name:"Therapy box apps uptime",introTitle:"**Upptime** is the open-source uptime monitor and status page, powered entirely by GitHub.",introMessage:"Upptime",navbar:[{title:"Status",href:"/"},{title:"GitHub",href:"https://github.com/$OWNER/$REPO"}]},path:"https://TherapyBox.github.io/upptime",i18n:{activeIncidents:"Active Incidents",allSystemsOperational:"All systems are operational",incidentReport:"Incident #$NUMBER report →",activeIncidentSummary:"Opened at $DATE with $POSTS posts",incidentTitle:"Incident $NUMBER Details",incidentDetails:"Incident Details",incidentFixed:"Fixed",incidentOngoing:"Ongoing",incidentOpenedAt:"Opened at",incidentClosedAt:"Closed at",incidentViewOnGitHub:"View and Subscribe on GitHub",incidentCommentSummary:"Posted at $DATE by $AUTHOR",incidentBack:"← Back to all incidents",pastIncidents:"Past Incidents",pastIncidentsResolved:"Resolved in $MINUTES minutes with $POSTS posts",liveStatus:"Live Status",overallUptime:"Overall uptime: $UPTIME",overallUptimeTitle:"Overall uptime",averageResponseTime:"Average response time: $TIMEms",averageResponseTimeTitle:"Average response",sevelDayResponseTime:"7-day response time",responseTimeMs:"Response time (ms)",up:"Up",down:"Down",degraded:"Degraded",ms:"ms",loading:"Loading",navGitHub:"GitHub",footer:"This page is [open source]($REPO), powered by [Upptime](https://upptime.js.org)",rateLimitExceededTitle:"Rate limit exceeded",rateLimitExceededIntro:"You have exceeded the number of requests you can do in an hour, so you'll have to wait before accessing this website again. Alternately, you can add a GitHub Personal Access Token to continue to use this website.",rateLimitExceededWhatDoesErrorMean:"What does this error mean?",rateLimitExceededErrorMeaning:"This website uses the GitHub API to access real-time data about our websites' status. By default, GitHub allows each IP address 60 requests per hour, which you have consumed.",rateLimitExceededErrorHowCanFix:"How can I fix it?",rateLimitExceededErrorFix:"You can wait for another hour and your IP address' limit will be restored. Alternately, you can add your GitHub Personal Access Token, which gives you an additional 5,000 requests per hour.",rateLimitExceededGeneratePAT:"Learn how to generate a Personal Access Token",rateLimitExceededHasSet:"You have a personal access token set.",rateLimitExceededRemoveToken:"Remove token",rateLimitExceededGitHubPAT:"GitHub Personal Access Token",rateLimitExceededCopyPastePAT:"Copy and paste your token",rateLimitExceededSaveToken:"Save token",errorTitle:"An error occurred",errorIntro:"An error occurred in trying to get the latest status details.",errorText:"You can try again in a few moments.",errorHome:"Go to the homepage",pastScheduledMaintenance:"Past Scheduled Maintenance",scheduledMaintenance:"Scheduled Maintenance",scheduledMaintenanceSummaryStarted:"Started at $DATE for $DURATION minutes",scheduledMaintenanceSummaryStarts:"Starts at $DATE for $DURATION minutes",startedAt:"Started at",startsAt:"Starts at",duration:"Duration",durationMin:"$DURATION minutes",incidentCompleted:"Completed",incidentScheduled:"Scheduled"}};function Pt(t,e,n){const r=t.slice();return r[1]=e[n],r}function Nt(e){let n,r,s,o=At["status-website"]&&!At["status-website"].hideNavLogo&&function(e){let n,r;return{c(){n=$("img"),this.h()},l(t){n=C(t,"IMG",{alt:!0,src:!0,class:!0}),this.h()},h(){P(n,"alt",""),c(n.src,r=At["status-website"].logoUrl)||P(n,"src",r),P(n,"class","svelte-a08hsz")},m(t,e){v(t,n,e)},p:t,d(t){t&&y(n)}}}(),a=At["status-website"]&&!At["status-website"].hideNavTitle&&function(e){let n,r,s=At["status-website"].name+"";return{c(){n=$("div"),r=x(s)},l(t){n=C(t,"DIV",{});var e=I(n);r=H(e,s),e.forEach(y)},m(t,e){v(t,n,e),g(n,r)},p:t,d(t){t&&y(n)}}}();return{c(){n=$("div"),r=$("a"),o&&o.c(),s=E(),a&&a.c(),this.h()},l(t){n=C(t,"DIV",{});var e=I(n);r=C(e,"A",{href:!0,class:!0});var i=I(r);o&&o.l(i),s=U(i),a&&a.l(i),i.forEach(y),e.forEach(y),this.h()},h(){P(r,"href",At["status-website"].logoHref||At.path),P(r,"class","logo svelte-a08hsz")},m(t,e){v(t,n,e),g(n,r),o&&o.m(r,null),g(r,s),a&&a.m(r,null)},p(t,e){At["status-website"]&&!At["status-website"].hideNavLogo&&o.p(t,e),At["status-website"]&&!At["status-website"].hideNavTitle&&a.p(t,e)},d(t){t&&y(n),o&&o.d(),a&&a.d()}}}function It(t){let e,n,r,s,o,a=t[1].title+"";return{c(){e=$("li"),n=$("a"),r=x(a),o=E(),this.h()},l(t){e=C(t,"LI",{});var s=I(e);n=C(s,"A",{"aria-current":!0,href:!0,target:!0,class:!0});var i=I(n);r=H(i,a),i.forEach(y),o=U(s),s.forEach(y),this.h()},h(){P(n,"aria-current",s=t[0]===("/"===t[1].href?void 0:t[1].href)?"page":void 0),P(n,"href",t[1].href.replace("$OWNER",At.owner).replace("$REPO",At.repo)),P(n,"target",t[1].target||"_self"),P(n,"class","svelte-a08hsz")},m(t,s){v(t,e,s),g(e,n),g(n,r),g(e,o)},p(t,e){1&e&&s!==(s=t[0]===("/"===t[1].href?void 0:t[1].href)?"page":void 0)&&P(n,"aria-current",s)},d(t){t&&y(e)}}}function kt(e){let n,r,s,o,a,i=At["status-website"]&&At["status-website"].logoUrl&&Nt(),c=At["status-website"]&&At["status-website"].navbar&&function(t){let e,n=At["status-website"].navbar,r=[];for(let e=0;e<n.length;e+=1)r[e]=It(Pt(t,n,e));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=S()},l(t){for(let e=0;e<r.length;e+=1)r[e].l(t);e=S()},m(t,n){for(let e=0;e<r.length;e+=1)r[e].m(t,n);v(t,e,n)},p(t,s){if(1&s){let o;for(n=At["status-website"].navbar,o=0;o<n.length;o+=1){const a=Pt(t,n,o);r[o]?r[o].p(a,s):(r[o]=It(a),r[o].c(),r[o].m(e.parentNode,e))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(t){_(r,t),t&&y(e)}}}(e),l=At["status-website"]&&At["status-website"].navbarGitHub&&!At["status-website"].navbar&&function(e){let n,r,s,o=At.i18n.navGitHub+"";return{c(){n=$("li"),r=$("a"),s=x(o),this.h()},l(t){n=C(t,"LI",{});var e=I(n);r=C(e,"A",{href:!0,class:!0});var a=I(r);s=H(a,o),a.forEach(y),e.forEach(y),this.h()},h(){P(r,"href",`https://github.com/${At.owner}/${At.repo}`),P(r,"class","svelte-a08hsz")},m(t,e){v(t,n,e),g(n,r),g(r,s)},p:t,d(t){t&&y(n)}}}();return{c(){n=$("nav"),r=$("div"),i&&i.c(),s=E(),o=$("ul"),c&&c.c(),a=E(),l&&l.c(),this.h()},l(t){n=C(t,"NAV",{class:!0});var e=I(n);r=C(e,"DIV",{class:!0});var u=I(r);i&&i.l(u),s=U(u),o=C(u,"UL",{class:!0});var d=I(o);c&&c.l(d),a=U(d),l&&l.l(d),d.forEach(y),u.forEach(y),e.forEach(y),this.h()},h(){P(o,"class","svelte-a08hsz"),P(r,"class","container svelte-a08hsz"),P(n,"class","svelte-a08hsz")},m(t,e){v(t,n,e),g(n,r),i&&i.m(r,null),g(r,s),g(r,o),c&&c.m(o,null),g(o,a),l&&l.m(o,null)},p(t,[e]){At["status-website"]&&At["status-website"].logoUrl&&i.p(t,e),At["status-website"]&&At["status-website"].navbar&&c.p(t,e),At["status-website"]&&At["status-website"].navbarGitHub&&!At["status-website"].navbar&&l.p(t,e)},i:t,o:t,d(t){t&&y(n),i&&i.d(),c&&c.d(),l&&l.d()}}}function Lt(t,e,n){let{segment:r}=e;return t.$$set=t=>{"segment"in t&&n(0,r=t.segment)},[r]}class Rt extends xt{constructor(t){super(),wt(this,t,Lt,kt,a,{segment:0})}}var Ct={"":["<em>","</em>"],_:["<strong>","</strong>"],"*":["<strong>","</strong>"],"~":["<s>","</s>"],"\n":["<br />"]," ":["<br />"],"-":["<hr />"]};function Ot(t){return t.replace(RegExp("^"+(t.match(/^(\t| )+/)||"")[0],"gm"),"")}function Ht(t){return(t+"").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ut(t,e){var n,r,s,o,a,i=/((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm,c=[],l="",u=e||{},d=0;function f(t){var e=Ct[t[1]||""],n=c[c.length-1]==t;return e?e[1]?(n?c.pop():c.push(t),e[0|n]):e[0]:t}function h(){for(var t="";c.length;)t+=f(c[c.length-1]);return t}for(t=t.replace(/^\[(.+?)\]:\s*(.+)$/gm,(function(t,e,n){return u[e.toLowerCase()]=n,""})).replace(/^\n+|\n+$/g,"");s=i.exec(t);)r=t.substring(d,s.index),d=i.lastIndex,n=s[0],r.match(/[^\\](\\\\)*\\$/)||((a=s[3]||s[4])?n='<pre class="code '+(s[4]?"poetry":s[2].toLowerCase())+'"><code'+(s[2]?' class="language-'+s[2].toLowerCase()+'"':"")+">"+Ot(Ht(a).replace(/^\n+|\n+$/g,""))+"</code></pre>":(a=s[6])?(a.match(/\./)&&(s[5]=s[5].replace(/^\d+/gm,"")),o=Ut(Ot(s[5].replace(/^\s*[>*+.-]/gm,""))),">"==a?a="blockquote":(a=a.match(/\./)?"ol":"ul",o=o.replace(/^(.*)(\n|$)/gm,"<li>$1</li>")),n="<"+a+">"+o+"</"+a+">"):s[8]?n='<img src="'+Ht(s[8])+'" alt="'+Ht(s[7])+'">':s[10]?(l=l.replace("<a>",'<a href="'+Ht(s[11]||u[r.toLowerCase()])+'">'),n=h()+"</a>"):s[9]?n="<a>":s[12]||s[14]?n="<"+(a="h"+(s[14]?s[14].length:s[13]>"="?1:2))+">"+Ut(s[12]||s[15],u)+"</"+a+">":s[16]?n="<code>"+Ht(s[16])+"</code>":(s[17]||s[1])&&(n=f(s[17]||"--"))),l+=r,l+=n;return(l+t.substring(d)+h()).replace(/^\n+|\n+$/g,"")}function Mt(t,e,n){const r=t.slice();return r[3]=e[n],r}function jt(t,e,n){const r=t.slice();return r[3]=e[n],r}function Dt(t,e,n){const r=t.slice();return r[8]=e[n],r}function Bt(e){let n;return{c(){n=$("link"),this.h()},l(t){n=C(t,"LINK",{rel:!0,href:!0}),this.h()},h(){P(n,"rel","stylesheet"),P(n,"href",`${At.path}/themes/${(At["status-website"]||{}).theme||"light"}.css`)},m(t,e){v(t,n,e)},p:t,d(t){t&&y(n)}}}function Gt(e){let n;return{c(){n=$("link"),this.h()},l(t){n=C(t,"LINK",{rel:!0,href:!0}),this.h()},h(){P(n,"rel","stylesheet"),P(n,"href",(At["status-website"]||{}).themeUrl)},m(t,e){v(t,n,e)},p:t,d(t){t&&y(n)}}}function qt(e){let n,r;return{c(){n=$("script"),this.h()},l(t){n=C(t,"SCRIPT",{src:!0}),I(n).forEach(y),this.h()},h(){c(n.src,r=e[8].src)||P(n,"src",r),n.async=!!e[8].async,n.defer=!!e[8].async},m(t,e){v(t,n,e)},p:t,d(t){t&&y(n)}}}function zt(e){let n;return{c(){n=$("link"),this.h()},l(t){n=C(t,"LINK",{rel:!0,href:!0,media:!0}),this.h()},h(){P(n,"rel",e[3].rel),P(n,"href",e[3].href),P(n,"media",e[3].media)},m(t,e){v(t,n,e)},p:t,d(t){t&&y(n)}}}function Vt(e){let n;return{c(){n=$("meta"),this.h()},l(t){n=C(t,"META",{name:!0,content:!0}),this.h()},h(){P(n,"name",e[3].name),P(n,"content",e[3].content)},m(t,e){v(t,n,e)},p:t,d(t){t&&y(n)}}}function Jt(e){let n,r,s,o,a,i,c,u,d,f,h,p,m,b,w,x,T,A,N=Ut(At.i18n.footer.replace(/\$REPO/,`https://github.com/${At.owner}/${At.repo}`))+"",k=(At["status-website"]||{}).customHeadHtml&&function(e){let n,r,s=(At["status-website"]||{}).customHeadHtml+"";return{c(){n=new J(!1),r=S(),this.h()},l(t){n=j(t,!1),r=S(),this.h()},h(){n.a=r},m(t,e){n.m(s,t,e),v(t,r,e)},p:t,d(t){t&&y(r),t&&n.d()}}}();let L=((At["status-website"]||{}).themeUrl?Gt:Bt)(e),R=(At["status-website"]||{}).scripts&&function(t){let e,n=(At["status-website"]||{}).scripts,r=[];for(let e=0;e<n.length;e+=1)r[e]=qt(Dt(t,n,e));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=S()},l(t){for(let e=0;e<r.length;e+=1)r[e].l(t);e=S()},m(t,n){for(let e=0;e<r.length;e+=1)r[e].m(t,n);v(t,e,n)},p(t,s){if(0&s){let o;for(n=(At["status-website"]||{}).scripts,o=0;o<n.length;o+=1){const a=Dt(t,n,o);r[o]?r[o].p(a,s):(r[o]=qt(a),r[o].c(),r[o].m(e.parentNode,e))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(t){_(r,t),t&&y(e)}}}(e),O=(At["status-website"]||{}).links&&function(t){let e,n=(At["status-website"]||{}).links,r=[];for(let e=0;e<n.length;e+=1)r[e]=zt(jt(t,n,e));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=S()},l(t){for(let e=0;e<r.length;e+=1)r[e].l(t);e=S()},m(t,n){for(let e=0;e<r.length;e+=1)r[e].m(t,n);v(t,e,n)},p(t,s){if(0&s){let o;for(n=(At["status-website"]||{}).links,o=0;o<n.length;o+=1){const a=jt(t,n,o);r[o]?r[o].p(a,s):(r[o]=zt(a),r[o].c(),r[o].m(e.parentNode,e))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(t){_(r,t),t&&y(e)}}}(e),H=(At["status-website"]||{}).metaTags&&function(t){let e,n=(At["status-website"]||{}).metaTags,r=[];for(let e=0;e<n.length;e+=1)r[e]=Vt(Mt(t,n,e));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=S()},l(t){for(let e=0;e<r.length;e+=1)r[e].l(t);e=S()},m(t,n){for(let e=0;e<r.length;e+=1)r[e].m(t,n);v(t,e,n)},p(t,s){if(0&s){let o;for(n=(At["status-website"]||{}).metaTags,o=0;o<n.length;o+=1){const a=Mt(t,n,o);r[o]?r[o].p(a,s):(r[o]=Vt(a),r[o].c(),r[o].m(e.parentNode,e))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(t){_(r,t),t&&y(e)}}}(e),M=At["status-website"].css&&function(e){let n,r,s=`<style>${At["status-website"].css}</style>`;return{c(){n=new J(!1),r=S(),this.h()},l(t){n=j(t,!1),r=S(),this.h()},h(){n.a=r},m(t,e){n.m(s,t,e),v(t,r,e)},p:t,d(t){t&&y(r),t&&n.d()}}}(),D=At["status-website"].js&&function(e){let n,r,s=`<script>${At["status-website"].js}<\/script>`;return{c(){n=new J(!1),r=S(),this.h()},l(t){n=j(t,!1),r=S(),this.h()},h(){n.a=r},m(t,e){n.m(s,t,e),v(t,r,e)},p:t,d(t){t&&y(r),t&&n.d()}}}(),B=(At["status-website"]||{}).customBodyHtml&&function(e){let n,r,s=(At["status-website"]||{}).customBodyHtml+"";return{c(){n=new J(!1),r=S(),this.h()},l(t){n=j(t,!1),r=S(),this.h()},h(){n.a=r},m(t,e){n.m(s,t,e),v(t,r,e)},p:t,d(t){t&&y(r),t&&n.d()}}}();p=new Rt({props:{segment:e[0]}});const G=e[2].default,q=function(t,e,n,r){if(t){const s=l(t,e,n,r);return t[0](s)}}(G,e,e[1],null);return{c(){k&&k.c(),n=S(),L.c(),r=$("link"),s=$("link"),o=$("link"),R&&R.c(),a=S(),O&&O.c(),i=S(),H&&H.c(),c=S(),M&&M.c(),u=S(),D&&D.c(),d=S(),f=E(),B&&B.c(),h=E(),bt(p.$$.fragment),m=E(),b=$("main"),q&&q.c(),w=E(),x=$("footer"),T=$("p"),this.h()},l(t){const e=V('[data-svelte="svelte-ri9y7q"]',document.head);k&&k.l(e),n=S(),L.l(e),r=C(e,"LINK",{rel:!0,href:!0}),s=C(e,"LINK",{rel:!0,type:!0,href:!0}),o=C(e,"LINK",{rel:!0,type:!0,href:!0}),R&&R.l(e),a=S(),O&&O.l(e),i=S(),H&&H.l(e),c=S(),M&&M.l(e),u=S(),D&&D.l(e),d=S(),e.forEach(y),f=U(t),B&&B.l(t),h=U(t),vt(p.$$.fragment,t),m=U(t),b=C(t,"MAIN",{class:!0});var l=I(b);q&&q.l(l),l.forEach(y),w=U(t),x=C(t,"FOOTER",{class:!0});var g=I(x);T=C(g,"P",{}),I(T).forEach(y),g.forEach(y),this.h()},h(){P(r,"rel","stylesheet"),P(r,"href",`${At.path}/global.css`),P(s,"rel","icon"),P(s,"type","image/svg"),P(s,"href",(At["status-website"]||{}).faviconSvg||(At["status-website"]||{}).favicon||"https://raw.githubusercontent.com/koj-co/upptime/master/assets/icon.svg"),P(o,"rel","icon"),P(o,"type","image/png"),P(o,"href",(At["status-website"]||{}).favicon||"/logo-192.png"),P(b,"class","container"),P(x,"class","svelte-jbr799")},m(t,e){k&&k.m(document.head,null),g(document.head,n),L.m(document.head,null),g(document.head,r),g(document.head,s),g(document.head,o),R&&R.m(document.head,null),g(document.head,a),O&&O.m(document.head,null),g(document.head,i),H&&H.m(document.head,null),g(document.head,c),M&&M.m(document.head,null),g(document.head,u),D&&D.m(document.head,null),g(document.head,d),v(t,f,e),B&&B.m(t,e),v(t,h,e),yt(p,t,e),v(t,m,e),v(t,b,e),q&&q.m(b,null),v(t,w,e),v(t,x,e),g(x,T),T.innerHTML=N,A=!0},p(t,[e]){(At["status-website"]||{}).customHeadHtml&&k.p(t,e),L.p(t,e),(At["status-website"]||{}).scripts&&R.p(t,e),(At["status-website"]||{}).links&&O.p(t,e),(At["status-website"]||{}).metaTags&&H.p(t,e),At["status-website"].css&&M.p(t,e),At["status-website"].js&&D.p(t,e),(At["status-website"]||{}).customBodyHtml&&B.p(t,e);const n={};1&e&&(n.segment=t[0]),p.$set(n),q&&q.p&&(!A||2&e)&&function(t,e,n,r,s,o){if(s){const a=l(e,n,r,o);t.p(a,s)}}(q,G,t,t[1],A?function(t,e,n,r){if(t[2]&&r){const s=t[2](r(n));if(void 0===e.dirty)return s;if("object"==typeof s){const t=[],n=Math.max(e.dirty.length,s.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|s[r];return t}return e.dirty|s}return e.dirty}(G,t[1],e,null):function(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}(t[1]),null)},i(t){A||(ht(p.$$.fragment,t),ht(q,t),A=!0)},o(t){pt(p.$$.fragment,t),pt(q,t),A=!1},d(t){k&&k.d(t),y(n),L.d(t),y(r),y(s),y(o),R&&R.d(t),y(a),O&&O.d(t),y(i),H&&H.d(t),y(c),M&&M.d(t),y(u),D&&D.d(t),y(d),t&&y(f),B&&B.d(t),t&&y(h),_t(p,t),t&&y(m),t&&y(b),q&&q.d(t),t&&y(w),t&&y(x)}}}function Kt(t,e,n){let{$$slots:r={},$$scope:s}=e,{segment:o}=e;return t.$$set=t=>{"segment"in t&&n(0,o=t.segment),"$$scope"in t&&n(1,s=t.$$scope)},[o,s,r]}class Wt extends xt{constructor(t){super(),wt(this,t,Kt,Jt,a,{segment:0})}}function Ft(t){let e,n,r=t[1].stack+"";return{c(){e=$("pre"),n=x(r)},l(t){e=C(t,"PRE",{});var s=I(e);n=H(s,r),s.forEach(y)},m(t,r){v(t,e,r),g(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&D(n,r)},d(t){t&&y(e)}}}function Yt(e){let n,r,s,o,a,i,c,l,u,d=e[1].message+"";document.title=n=e[0];let f=e[2]&&e[1].stack&&Ft(e);return{c(){r=E(),s=$("h1"),o=x(e[0]),a=E(),i=$("p"),c=x(d),l=E(),f&&f.c(),u=S(),this.h()},l(t){V('[data-svelte="svelte-1moakz"]',document.head).forEach(y),r=U(t),s=C(t,"H1",{class:!0});var n=I(s);o=H(n,e[0]),n.forEach(y),a=U(t),i=C(t,"P",{class:!0});var h=I(i);c=H(h,d),h.forEach(y),l=U(t),f&&f.l(t),u=S(),this.h()},h(){P(s,"class","svelte-17w3omn"),P(i,"class","svelte-17w3omn")},m(t,e){v(t,r,e),v(t,s,e),g(s,o),v(t,a,e),v(t,i,e),g(i,c),v(t,l,e),f&&f.m(t,e),v(t,u,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&D(o,t[0]),2&e&&d!==(d=t[1].message+"")&&D(c,d),t[2]&&t[1].stack?f?f.p(t,e):(f=Ft(t),f.c(),f.m(u.parentNode,u)):f&&(f.d(1),f=null)},i:t,o:t,d(t){t&&y(r),t&&y(s),t&&y(a),t&&y(i),t&&y(l),f&&f.d(t),t&&y(u)}}}function Qt(t,e,n){let{status:r}=e,{error:s}=e;return t.$$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,s=t.error)},[r,s,false]}class Xt extends xt{constructor(t){super(),wt(this,t,Qt,Yt,a,{status:0,error:1})}}function Zt(t){let n,r,s;const o=[t[4].props];var a=t[4].component;function i(t){let n={};for(let t=0;t<o.length;t+=1)n=e(n,o[t]);return{props:n}}return a&&(n=new a(i())),{c(){n&&bt(n.$$.fragment),r=S()},l(t){n&&vt(n.$$.fragment,t),r=S()},m(t,e){n&&yt(n,t,e),v(t,r,e),s=!0},p(t,e){const s=16&e?mt(o,[gt(t[4].props)]):{};if(a!==(a=t[4].component)){if(n){dt();const t=n;pt(t.$$.fragment,1,0,(()=>{_t(t,1)})),ft()}a?(n=new a(i()),bt(n.$$.fragment),ht(n.$$.fragment,1),yt(n,r.parentNode,r)):n=null}else a&&n.$set(s)},i(t){s||(n&&ht(n.$$.fragment,t),s=!0)},o(t){n&&pt(n.$$.fragment,t),s=!1},d(t){t&&y(r),n&&_t(n,t)}}}function te(t){let e,n;return e=new Xt({props:{error:t[0],status:t[1]}}),{c(){bt(e.$$.fragment)},l(t){vt(e.$$.fragment,t)},m(t,r){yt(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i(t){n||(ht(e.$$.fragment,t),n=!0)},o(t){pt(e.$$.fragment,t),n=!1},d(t){_t(e,t)}}}function ee(t){let e,n,r,s;const o=[te,Zt],a=[];function i(t,e){return t[0]?0:1}return e=i(t),n=a[e]=o[e](t),{c(){n.c(),r=S()},l(t){n.l(t),r=S()},m(t,n){a[e].m(t,n),v(t,r,n),s=!0},p(t,s){let c=e;e=i(t),e===c?a[e].p(t,s):(dt(),pt(a[c],1,1,(()=>{a[c]=null})),ft(),n=a[e],n?n.p(t,s):(n=a[e]=o[e](t),n.c()),ht(n,1),n.m(r.parentNode,r))},i(t){s||(ht(n),s=!0)},o(t){pt(n),s=!1},d(t){a[e].d(t),t&&y(r)}}}function ne(t){let n,r;const s=[{segment:t[2][0]},t[3].props];let o={$$slots:{default:[ee]},$$scope:{ctx:t}};for(let t=0;t<s.length;t+=1)o=e(o,s[t]);return n=new Wt({props:o}),{c(){bt(n.$$.fragment)},l(t){vt(n.$$.fragment,t)},m(t,e){yt(n,t,e),r=!0},p(t,[e]){const r=12&e?mt(s,[4&e&&{segment:t[2][0]},8&e&&gt(t[3].props)]):{};147&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(ht(n.$$.fragment,t),r=!0)},o(t){pt(n.$$.fragment,t),r=!1},d(t){_t(n,t)}}}function re(t,e,n){let{stores:r}=e,{error:s}=e,{status:o}=e,{segments:a}=e,{level0:i}=e,{level1:c=null}=e,{notify:l}=e;var u,d;return Y(l),u=Tt,d=r,W().$$.context.set(u,d),t.$$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,s=t.error),"status"in t&&n(1,o=t.status),"segments"in t&&n(2,a=t.segments),"level0"in t&&n(3,i=t.level0),"level1"in t&&n(4,c=t.level1),"notify"in t&&n(6,l=t.notify)},[s,o,a,i,c,r,l]}class se extends xt{constructor(t){super(),wt(this,t,re,ne,a,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const oe=[],ae=[{js:()=>Promise.all([import("./index.92d92454.js"),__inject_styles(["client-d6959ee0.css","createOctokit-865318f3.css","index-f7605f9e.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./rate-limit-exceeded.0c39dad3.js"),__inject_styles(["client-d6959ee0.css","rate-limit-exceeded-ec20dc01.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./_number_.0528c222.js"),__inject_styles(["client-d6959ee0.css","createOctokit-865318f3.css","_number_-431b5a8d.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./_number_.6b2d14d7.js"),__inject_styles(["client-d6959ee0.css","createOctokit-865318f3.css","_number_-27f5577c.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./error.041ffa5d.js"),__inject_styles(["client-d6959ee0.css","error-64ad0d96.css"])]).then((function(t){return t[0]}))}],ie=(ce=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/rate-limit-exceeded\/?$/,parts:[{i:1}]},{pattern:/^\/incident\/([^/]+?)\/?$/,parts:[null,{i:2,params:t=>({number:ce(t[1])})}]},{pattern:/^\/history\/([^/]+?)\/?$/,parts:[null,{i:3,params:t=>({number:ce(t[1])})}]},{pattern:/^\/error\/?$/,parts:[{i:4}]}]);var ce;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function le(t,e,n,r){return new(n||(n=Promise))((function(s,o){function a(t){try{c(r.next(t))}catch(t){o(t)}}function i(t){try{c(r.throw(t))}catch(t){o(t)}}function c(t){var e;t.done?s(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,i)}c((r=r.apply(t,e||[])).next())}))}function ue(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}let de,fe=1;const he="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},pe={};let me,ge;function be(t){const e=Object.create(null);return t.length?(t=>"undefined"!=typeof URLSearchParams?[...new URLSearchParams(t).entries()]:t.slice(1).split("&").map((t=>{const[,e,n=""]=/([^=]*)(?:=([\S\s]*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));return[e,n]})))(t).reduce(((t,[e,n])=>("string"==typeof t[e]&&(t[e]=[t[e]]),"object"==typeof t[e]?t[e].push(n):t[e]=n,t)),e):e}function ve(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(me))return null;let e=t.pathname.slice(me.length);if(""===e&&(e="/"),!oe.some((t=>t.test(e))))for(let n=0;n<ie.length;n+=1){const r=ie[n],s=r.pattern.exec(e);if(s){const n=be(t.search),o=r.parts[r.parts.length-1],a=o.params?o.params(s):{},i={host:location.host,path:e,query:n,params:a};return{href:t.href,route:r,match:s,page:i}}}}function ye(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const e=ue(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const s=new URL(r);if(s.pathname===location.pathname&&s.search===location.search)return;const o=ve(s);if(o){we(o,null,e.hasAttribute("sapper:noscroll"),s.hash),t.preventDefault(),he.pushState({id:de},"",s.href)}}function _e(){return{x:pageXOffset,y:pageYOffset}}function $e(t){if(pe[de]=_e(),t.state){const e=ve(new URL(location.href));e?we(e,t.state.id):location.href=location.href}else!function(t){fe=t}(fe+1),function(t){de=t}(fe),he.replaceState({id:de},"",location.href)}function we(t,e,n,r){return le(this,void 0,void 0,(function*(){const s=!!e;if(s)de=e;else{const t=_e();pe[de]=t,de=e=++fe,pe[de]=n?t:{x:0,y:0}}if(yield ge(t),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let t,n=pe[e];r&&(t=document.getElementById(r.slice(1)),t&&(n={x:0,y:t.getBoundingClientRect().top+scrollY})),pe[de]=n,n&&(s||t)?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function xe(t){let e=t.baseURI;if(!e){const n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}let Ee,Se=null;function Te(t){const e=ue(t.target);e&&e.hasAttribute("sapper:prefetch")&&function(t){const e=ve(new URL(t,xe(document)));if(e)Se&&t===Se.href||(Se={href:t,promise:qe(e)}),Se.promise}(e.href)}function Ae(t){clearTimeout(Ee),Ee=setTimeout((()=>{Te(t)}),20)}function Pe(t,e={noscroll:!1,replaceState:!1}){const n=ve(new URL(t,xe(document)));if(n){const r=we(n,null,e.noscroll);return he[e.replaceState?"replaceState":"pushState"]({id:de},"",t),r}return location.href=t,new Promise((()=>{}))}const Ne="undefined"!=typeof __SAPPER__&&__SAPPER__;let Ie,ke,Le,Re=!1,Ce=[],Oe="{}";const He={page:function(t){const e=St(t);let n=!0;return{notify:function(){n=!0,e.update((t=>t))},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe((e=>{(void 0===r||n&&e!==r)&&t(r=e)}))}}}({}),preloading:St(null),session:St(Ne&&Ne.session)};let Ue,Me,je;function De(t,e){const{error:n}=t;return Object.assign({error:n},e)}function Be(t){return le(this,void 0,void 0,(function*(){Ie&&He.preloading.set(!0);const e=function(t){return Se&&Se.href===t.href?Se.promise:qe(t)}(t),n=ke={},r=yield e,{redirect:s}=r;if(n===ke)if(s)yield Pe(s.location,{replaceState:!0});else{const{props:e,branch:n}=r;yield Ge(n,e,De(e,t.page))}}))}function Ge(t,e,n){return le(this,void 0,void 0,(function*(){He.page.set(n),He.preloading.set(!1),Ie?Ie.$set(e):(e.stores={page:{subscribe:He.page.subscribe},preloading:{subscribe:He.preloading.subscribe},session:He.session},e.level0={props:yield Le},e.notify=He.page.notify,Ie=new se({target:je,props:e,hydrate:!0})),Ce=t,Oe=JSON.stringify(n.query),Re=!0,Me=!1}))}function qe(t){return le(this,void 0,void 0,(function*(){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let s=null;const o={error:null,status:200,segments:[r[0]]},a={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(s&&(s.statusCode!==t||s.location!==e))throw new Error("Conflicting redirects");s={statusCode:t,location:e}},error:(t,e)=>{o.error="string"==typeof e?new Error(e):e,o.status=t}};if(!Le){const t=()=>({});Le=Ne.preloaded[0]||t.call(a,{host:n.host,path:n.path,query:n.query,params:{}},Ue)}let i,c=1;try{const s=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;i=yield Promise.all(e.parts.map(((e,i)=>le(this,void 0,void 0,(function*(){const d=r[i];if(function(t,e,n,r){if(r!==Oe)return!0;const s=Ce[t];return!!s&&(e!==s.segment||!(!s.match||JSON.stringify(s.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(i,d,l,s)&&(u=!0),o.segments[c]=r[i+1],!e)return{segment:d};const f=c++;let h;if(Me||u||!Ce[i]||Ce[i].part!==e.i){u=!1;const{default:r,preload:s}=yield ae[e.i].js();let o;o=Re||!Ne.preloaded[i+1]?s?yield s.call(a,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},Ue):{}:Ne.preloaded[i+1],h={component:r,props:o,segment:d,match:l,part:e.i}}else h=Ce[i];return o[`level${f}`]=h})))))}catch(t){o.error=t,o.status=500,i=[]}return{redirect:s,props:o,branch:i}}))}var ze,Ve,Je;He.session.subscribe((t=>le(void 0,void 0,void 0,(function*(){if(Ue=t,!Re)return;Me=!0;const e=ve(new URL(location.href)),n=ke={},{redirect:r,props:s,branch:o}=yield qe(e);n===ke&&(r?yield Pe(r.location,{replaceState:!0}):yield Ge(o,s,De(s,e.page)))})))),ze={target:document.querySelector("#sapper")},Ve=ze.target,je=Ve,Je=Ne.baseUrl,me=Je,ge=Be,"scrollRestoration"in he&&(he.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{he.scrollRestoration="auto"})),addEventListener("load",(()=>{he.scrollRestoration="manual"})),addEventListener("click",ye),addEventListener("popstate",$e),addEventListener("touchstart",Te),addEventListener("mousemove",Ae),Ne.error?Promise.resolve().then((()=>function(){const{host:t,pathname:e,search:n}=location,{session:r,preloaded:s,status:o,error:a}=Ne;Le||(Le=s&&s[0]);const i={error:a,status:o,session:r,level0:{props:Le},level1:{props:{status:o,error:a},component:Xt},segments:s},c=be(n);Ge([],i,{host:t,path:e,query:c,params:{},error:a})}())):Promise.resolve().then((()=>{const{hash:t,href:e}=location;he.replaceState({id:fe},"",e);const n=ve(new URL(location.href));if(n)return we(n,fe,!0,t)}));export{D as A,T as B,s as C,Z as D,j as E,c as F,d as G,J as H,G as I,V as J,Ut as K,w as L,O as M,Pe as N,B as O,A as P,e as Q,N as R,xt as S,mt as T,Y as U,Q as V,u as W,gt as X,st as Y,z as Z,E as a,C as b,U as c,I as d,$ as e,y as f,P as g,v as h,wt as i,dt as j,ft as k,ht as l,x as m,H as n,F as o,g as p,t as q,At as r,a as s,pt as t,S as u,_ as v,bt as w,vt as x,yt as y,_t as z};

import __inject_styles from './inject_styles.803b7e80.js';