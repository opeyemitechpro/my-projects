"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["notifications-subscriptions-menu","vendors-node_modules_primer_react_lib-esm_Spinner_Spinner_js-node_modules_github_catalyst_lib-e4675b","vendors-node_modules_primer_react_lib-esm_Link_Link_js-node_modules_primer_react_lib-esm_Spin-d020100","vendors-node_modules_primer_react_lib-esm_Link_Link_js-node_modules_primer_react_lib-esm_Spin-d020101"],{26886:(e,t,r)=>{r.d(t,{A:()=>w});var n=r(96540),a=r(10619),i=r(87330),o=r(42297),s=r(75177),l=r(77393);let c=()=>null;function d(e){var t;return e.tabIndex>=0&&!e.disabled&&!(t=e).hidden&&(!t.type||"hidden"!==t.type)&&(t.offsetWidth>0||t.offsetHeight>0)}var u=r(44999),m=r(52464),p=r(64515),h=r(38621);function f(){return(f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(null,arguments)}let b=()=>null,g=a.Ay.div.withConfig({displayName:"Dialog__DialogBase",componentId:"sc-13rdxb7-0"})(["box-shadow:",";border-radius:",";position:fixed;top:0;left:50%;transform:translateX(-50%);max-height:80vh;z-index:999;margin:10vh auto;background-color:",";width:",";outline:none;@media screen and (max-width:750px){width:100dvw;margin:0;border-radius:0;height:100dvh;}",";"],(0,o.Jt)("shadows.shadow.large"),(0,o.Jt)("radii.2"),(0,o.Jt)("colors.canvas.default"),e=>e.narrow?"320px":e.wide?"640px":"440px",u.A),y=(0,a.Ay)(s.A).withConfig({displayName:"Dialog__DialogHeaderBase",componentId:"sc-13rdxb7-1"})(["border-radius:"," "," 0px 0px;border-bottom:1px solid ",";display:flex;@media screen and (max-width:750px){border-radius:0px;}",";"],(0,o.Jt)("radii.2"),(0,o.Jt)("radii.2"),(0,o.Jt)("colors.border.default"),u.A);function v({theme:e,children:t,backgroundColor:r="canvas.subtle",...a}){return n.Children.toArray(t).every(e=>"string"==typeof e)&&(t=n.createElement(m.A,{fontSize:1,fontWeight:"bold"},t)),n.createElement(y,f({theme:e,p:3,backgroundColor:r},a),t)}v.displayName="DialogHeader";let _=a.Ay.span.withConfig({displayName:"Dialog__Overlay",componentId:"sc-13rdxb7-2"})(["&:before{position:fixed;top:0;right:0;bottom:0;left:0;display:block;cursor:default;content:' ';background:transparent;z-index:99;background:",";}"],(0,o.Jt)("colors.primer.canvas.backdrop")),x=(0,n.forwardRef)(({children:e,onDismiss:t=b,isOpen:r,initialFocusRef:a,returnFocusRef:o,...s},u)=>{let m=(0,n.useRef)(null),y=(0,n.useRef)(null);(0,p.T)(u,y);let v=(0,n.useRef)(null),x=()=>{t(),o&&o.current&&o.current.focus()},{getDialogProps:w}=function({modalRef:e,overlayRef:t,isOpen:r,onDismiss:a=c,initialFocusRef:i,closeButtonRef:o}){let s=(0,n.useCallback)(r=>{e.current&&t.current&&r.target instanceof Node&&!e.current.contains(r.target)&&t.current.contains(r.target)&&a()},[a,e,t]);(0,n.useEffect)(()=>{if(r)return document.addEventListener("click",s),()=>{document.removeEventListener("click",s)}},[r,s]),(0,n.useEffect)(()=>{r&&(i&&i.current?i.current.focus():o&&o.current&&o.current.focus())},[r,i,o]);let u=(0,n.useCallback)((t,r)=>{if(e.current){let n=Array.from(e.current.querySelectorAll("*")).filter(d);if(0===n.length)return;t.preventDefault();let a=document.activeElement;if(!a)return;let i=n.indexOf(a),o=1===r?0:n.length-1;return n[i+r]||n[o]}},[e]),m=(0,n.useCallback)(e=>{let t=e.shiftKey?-1:1,r=u(e,t);r&&r.focus()},[u]),p=(0,n.useCallback)(e=>{"Tab"===e.key&&m(e)},[m]);return(0,l.P)(e=>{r&&(a(),e.preventDefault())},[r,a]),{getDialogProps:()=>({onKeyDown:p})}}({modalRef:y,onDismiss:x,isOpen:r,initialFocusRef:a,closeButtonRef:v,returnFocusRef:o,overlayRef:m});return r?n.createElement(n.Fragment,null,n.createElement(_,{ref:m}),n.createElement(g,f({tabIndex:-1,ref:y,role:"dialog","aria-modal":"true"},s,w()),n.createElement(i.K,{icon:h.XIcon,ref:v,onClick:x,sx:{position:"absolute",top:"8px",right:"16px"},"aria-label":"Close",variant:"invisible"}),e)):null});v.propTypes={...s.A.propTypes},v.displayName="Dialog.Header",x.displayName="Dialog";var w=Object.assign(x,{Header:v})},34614:(e,t,r)=>{r.d(t,{A:()=>b});var n=r(20053),a=r(96540),i=r(10619),o=r(25999),s=r(42297);r(69676);var l=r(64515),c=r(44999),d={Link:"prc-Link-Link-85e08"},u=r(48521),m=r(75177);function p(){return(p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(null,arguments)}let h=(0,o.qU)({hoverColor:{property:"color",scale:"colors"}}),f=i.Ay.a.withConfig({displayName:"Link__StyledLink",componentId:"sc-14289xe-0"})(["color:",";text-decoration:none;text-decoration:",";[data-a11y-link-underlines='true'] &[data-inline='true']{text-decoration:underline;}&:hover{text-decoration:",";",";}&:is(button){display:inline-block;padding:0;font-size:inherit;white-space:nowrap;cursor:pointer;user-select:none;background-color:transparent;border:0;appearance:none;}",";"],e=>e.muted?(0,s.Jt)("colors.fg.muted")(e):(0,s.Jt)("colors.accent.fg")(e),e=>e.underline?"underline":void 0,e=>e.muted?"none":"underline",e=>e.hoverColor?h:e.muted?`color: ${(0,s.Jt)("colors.accent.fg")(e)}`:"",c.A),b=(0,a.forwardRef)(({as:e="a",className:t,inline:r,underline:i,...o},s)=>{let c=(0,u.u)("primer_react_css_modules_ga"),h=a.useRef(null);return((0,l.T)(s,h),c)?o.sx?a.createElement(m.A,p({as:e,className:(0,n.$)(t,d.Link),"data-muted":o.muted,"data-inline":r,"data-underline":i},o,{ref:h})):a.createElement(e,p({className:(0,n.$)(t,d.Link),"data-muted":o.muted,"data-inline":r,"data-underline":i},o,{ref:h})):a.createElement(f,p({as:e,className:t,"data-inline":r,underline:i},o,{ref:h}))});b.displayName="Link"},67269:(e,t,r)=>{r.d(t,{X:()=>y});var n=r(38621),a=r(96540),i=r(85349),o=r(75177),s=r(89035),l=r(84217),c=r(55847),d=r(81425);r(69676);var u=r(35357),m=r(32947),p=r(78373),h=r(48521);function f(){return(f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(null,arguments)}function b(e){return Array.isArray(e)}let g={disabled:!0};function y({open:e,onOpenChange:t,renderAnchor:r=e=>{let{children:t,...r}=e;return a.createElement(c.Q,f({trailingAction:n.TriangleDownIcon},r),t)},anchorRef:y,placeholder:v,placeholderText:_="Filter items",inputLabel:x=_,selected:w,title:C=b(w)?"Select items":"Select an item",subtitle:E,onSelectedChange:S,filterValue:A,onFilterChange:R,items:k,footer:j,textInputProps:N,overlayProps:T,sx:L,...O}){let I=(0,m.B)(),D=(0,m.B)(),[P,$]=(0,u.p)(A,void 0,""),F=(0,a.useCallback)((e,t)=>{R(e,t),$(e)},[R,$]),M=(0,d.L)(y),B=(0,a.useCallback)(e=>t(!0,e),[t]),W=(0,a.useCallback)(e=>{t(!1,e)},[t]),z=(0,a.useMemo)(()=>{if(null===r)return null;let e=Array.isArray(w)?w:[...w?[w]:[]];return t=>r({...t,children:e.length?e.map(e=>e.text).join(", "):v})},[v,r,w]),H=(0,a.useMemo)(()=>k.map(e=>{let t=b(w)?w.includes(e):w===e;return{...e,role:"option",selected:"selected"in e&&void 0===e.selected?void 0:t,onAction:(t,r)=>{var n;if(null===(n=e.onAction)||void 0===n||n.call(e,t,r),!r.defaultPrevented){if(b(w)){let t=w.filter(t=>t!==e);S(w.includes(e)?t:[...t,e]);return}S(e===w?void 0:e),W("selection")}}}}),[W,S,k,w]),q=a.useRef(null),G=(0,a.useMemo)(()=>({sx:{m:2},contrast:!0,leadingVisual:n.SearchIcon,"aria-label":x,...N}),[x,N]),J=(0,h.u)("primer_react_select_panel_with_modern_action_list");return a.createElement(p.L4,null,a.createElement(i.T,{renderAnchor:z,anchorRef:M,open:e,onOpen:B,onClose:W,overlayProps:{role:"dialog","aria-labelledby":I,"aria-describedby":E?D:void 0,...T},focusTrapSettings:{initialFocusRef:q},focusZoneSettings:g},a.createElement(p.ST,null),J?null:a.createElement(p.QB,{value:""===P?"Showing all items":k.length<=0?"No matching items":`${k.length} matching ${1===k.length?"item":"items"}`}),a.createElement(o.A,{sx:{display:"flex",flexDirection:"column",height:"inherit",maxHeight:"inherit"}},a.createElement(o.A,{sx:{pt:2,px:3}},a.createElement(l.A,{as:"h1",id:I,sx:{fontSize:1}},C),E?a.createElement(o.A,{id:D,sx:{fontSize:0,color:"fg.muted"}},E):null),a.createElement(s.u,f({filterValue:P,onFilterChange:F,placeholderText:_},O,{role:"listbox","aria-labelledby":O["aria-label"]?void 0:I,"aria-multiselectable":b(w)?"true":"false",selectionVariant:b(w)?"multiple":"single",items:H,textInputProps:G,inputRef:q,sx:{...L,height:"inherit",maxHeight:"inherit"}})),j&&a.createElement(o.A,{sx:{display:"flex",borderTop:"1px solid",borderColor:"border.default",padding:2}},j))))}y.displayName="SelectPanel",y.displayName="SelectPanel"},38553:(e,t,r)=>{r.d(t,{A:()=>m});var n=r(96540),a=r(10619),i=r(44999),o=r(50508),s=r(75177);r(69676);var l=r(32947);function c(){return(c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(null,arguments)}let d={small:"16px",medium:"32px",large:"64px"};function u({size:e="medium",srText:t="Loading","aria-label":r,...a}){let i=d[e],u=null!==t&&void 0===r,m=(0,l.B)();return n.createElement(s.A,{as:"span",sx:{display:"inline-flex"}},n.createElement("svg",c({height:i,width:i,viewBox:"0 0 16 16",fill:"none","aria-hidden":!0,"aria-label":null!=r?r:void 0,"aria-labelledby":u?m:void 0},a),n.createElement("circle",{cx:"8",cy:"8",r:"7",stroke:"currentColor",strokeOpacity:"0.25",strokeWidth:"2",vectorEffect:"non-scaling-stroke"}),n.createElement("path",{d:"M15 8a7.002 7.002 0 00-7-7",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",vectorEffect:"non-scaling-stroke"})),u?n.createElement(o.s,{id:m},t):null)}u.displayName="Spinner";let m=(0,a.Ay)(u).withConfig({displayName:"Spinner__StyledSpinner",componentId:"sc-1knt686-0"})(["@keyframes rotate-keyframes{100%{transform:rotate(360deg);}}animation:rotate-keyframes 1s linear infinite;",""],i.A);m.displayName="Spinner"},78373:(e,t,r)=>{r.d(t,{L4:()=>s,QB:()=>c,ST:()=>l});var n=r(96540),a=r(50508);let i=n.createContext(null);function o(){let e=n.useContext(i);if(!e)throw Error("useLiveRegion() must be used within a <LiveRegion>");return e}function s({children:e}){let[t,r]=n.useState(""),a=n.useMemo(()=>({announce:r,message:t}),[t]);return n.createElement(i.Provider,{value:a},e)}function l(){let e=o();return n.createElement(a.s,{role:"status","aria-live":"polite","aria-atomic":!0},e.message)}function c({value:e}){let t=o(),r=n.useRef(t),a=n.useRef(!1);return n.useEffect(()=>{r.current=t},[t]),n.useEffect(()=>{if(!0!==a.current)return;let t=setTimeout(()=>{r.current.announce(e)},750);return()=>{clearTimeout(t)}},[e]),n.useEffect(()=>(a.current=!0,()=>{a.current=!1}),[]),null}s.displayName="LiveRegion",l.displayName="LiveRegionOutlet"},50508:(e,t,r)=>{r.d(t,{s:()=>i});var n=r(10619),a=r(44999);let i=n.Ay.span.withConfig({displayName:"VisuallyHidden",componentId:"sc-1sffg7y-0"})(["&:not(:focus):not(:active):not(:focus-within){clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;}",""],a.A)},84923:(e,t,r)=>{let n;var a,i,o=r(72245),s=r(74848),l=r(96540),c=r(89323),d=r(26886),u=r(38621),m=r(28784);let p=(n="/notifications/subscribe",async e=>{try{let t=await (0,m.DI)(n,{method:"POST",body:e});if(t.ok)return t;return Error("Failed to update")}catch(e){return e}});var h=r(16823),f=r(52464);!function(e){e.NONE="none",e.WATCHING="watching",e.IGNORING="ignoring",e.CUSTOM="custom"}(a||(a={}));let b={none:"Participating and @mentions",watching:"All Activity",ignoring:"Ignore",custom:"Custom"},g={...b,none:"Participating"},y={none:"Watch",watching:"Unwatch",ignoring:"Stop ignoring",custom:"Unwatch"},v=[{name:b.none,description:"Only receive notifications from this repository when participating or @mentioned.",subscriptionType:"none"},{name:b.watching,description:"Notified of all notifications on this repository.",subscriptionType:"watching"},{name:b.ignoring,description:"Never be notified.",subscriptionType:"ignoring"},{name:b.custom,description:"Select events you want to be notified of in addition to participating and @mentions.",trailingIcon:(0,l.createElement)(u.ArrowRightIcon),subscriptionType:"custom"}],_=e=>e in y?y[e]:"",x=(e,t)=>{let r=_(e),n=g[e];return"ignoring"===e?`${r} in ${t}`:`${r}: ${n} in ${t}`};function w(e){return(0,s.jsx)(h.l,{selectionVariant:"single",children:v.map((t,r)=>(0,s.jsxs)(l.Fragment,{children:[(0,s.jsxs)(h.l.Item,{selected:t.subscriptionType===e.selected,onSelect:()=>e.onSelect(t.subscriptionType),children:[(0,s.jsx)(f.A,{sx:{fontWeight:"bold"},children:t.name}),(0,s.jsx)(h.l.Description,{variant:"block",children:t.description}),t.trailingIcon?(0,s.jsx)(h.l.TrailingVisual,{children:t.trailingIcon}):null]}),r!==v.length-1?(0,s.jsx)(h.l.Divider,{}):""]},r))})}try{w.displayName||(w.displayName="SubscriptionList")}catch{}var C=r(82560),E=r(47553),S=r(67269),A=r(55847),R=r(94977),k=r(38553);let j={footerContainer:"FooterActions-module__footerContainer--Z9ixI",buttonsContainer:"FooterActions-module__buttonsContainer--lkkwg"};function N(e){let[t,r]=(0,l.useState)(!1),n=(0,l.useCallback)(()=>(e.nextFocusRef?.current?.focus(),!0),[e.nextFocusRef]),a=(0,l.useCallback)(()=>{r(!0)},[]),i=(0,l.useCallback)(()=>{e.onApply(),setTimeout(()=>{e?.checkStatus&&e.checkStatus(a)},600)},[e,a]);return(0,s.jsxs)("div",{className:j.footerContainer,children:[e.showError?(0,s.jsx)(f.A,{sx:{py:3,pl:3,color:"var(--fgColor-muted, var(--color-fg-muted))"},children:"Error. Please try again."}):null,(0,s.jsxs)("div",{className:j.buttonsContainer,style:e.overrideButtonStyles??{padding:"var(--base-size-16)"},children:[!e.showError&&t?(0,s.jsx)(k.A,{size:"small",sx:{mr:2}}):null,(0,s.jsx)(A.Q,{size:"small",onClick:()=>e.onCancel(),onBlur:t=>{e.disabled&&n(t)},children:"Cancel"}),(0,s.jsx)(A.Q,{disabled:e.disabled,variant:"primary",size:"small",onClick:()=>i(),onBlur:n,sx:{ml:2},children:"Apply"})]})]})}try{N.displayName||(N.displayName="FooterActions")}catch{}function T(e){let[t,r]=(0,l.useState)(!1),[n,a]=(0,l.useState)(""),i=e.items.filter(e=>e?.text?.toLowerCase().startsWith(n.toLowerCase())),o=(0,l.useCallback)(()=>{e.applyLabels(),r(!1)},[e]),c=(0,l.useCallback)(()=>{e.resetLabels(),r(!1)},[e]),d=l.memo(L);return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(S.X,{title:"Select labels",renderAnchor:t=>0===e.items.length?(0,s.jsx)(R.A,{text:"Add labels to this repository to filter on them.",direction:"s",children:(0,s.jsx)(d,{anchorProps:t,itemsLength:e.items.length,labelsText:e.labelsText})}):(0,s.jsx)(d,{anchorProps:t,itemsLength:e.items.length,labelsText:e.labelsText}),placeholderText:"Filter labels",open:t,onOpenChange:r,items:i,selected:e.selectedLabels,onSelectedChange:e.onChangeLabels,onFilterChange:a,showItemDividers:!0,overlayProps:{width:"small",height:"medium",maxHeight:"medium"},footer:(0,s.jsx)("div",{style:{width:"100%"},children:(0,s.jsx)(N,{onCancel:c,onApply:o,overrideButtonStyles:{padding:"var(--base-size-8)"}})})})})}let L=({anchorProps:e,itemsLength:t,labelsText:r})=>(0,s.jsx)(A.Q,{leadingVisual:u.TagIcon,trailingAction:u.TriangleDownIcon,...e,"aria-label":"Filter labels","aria-describedby":"select-labels","aria-haspopup":"dialog",size:"small",disabled:0===t,children:0===t?"No labels available":(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("span",{className:"color-fg-muted",children:"Labels: "}),(0,s.jsx)("span",{id:"select-labels",children:r})]})});try{T.displayName||(T.displayName="FilterLabels")}catch{}try{(i=ButtonFilter).displayName||(i.displayName="ButtonFilter")}catch{}let O=e=>{let t=D(e,2);if(e.length>=2){if(2===e.length)return I(e);let r=D(e,3);if(r.length>30)return`${t.slice(0,30)}... +${e.length-2} more`;{let t=e.length>3?` +${e.length-3} more`:"";return`${r}${t}`}}if(1!==e.length)return"All";{let t=e[0]?.text||"";return t.length>30?`${t.slice(0,30)}...`:t}},I=e=>{let t=e[0]?.text||"",r=D(e,2);return r.length>30?t.length>25?`${t.slice(0,25)}... +1 more`:`${r.slice(0,30)}...`:r},D=(e,t)=>e.slice(0,t).map(e=>e.text).join(", "),P=e=>{switch(e){case"PullRequest":return"Pull requests";case"SecurityAlert":return"Security alerts";default:return`${e}s`}},$={filterContainer:"ThreadList-module__filterContainer--eNebD",threadContent:"ThreadList-module__threadContent--Ry8II",threadRow:"ThreadList-module__threadRow--lx6FW"};function F(e){let[t,r]=(0,l.useState)(e.appliedThreads),[n,a]=(0,l.useState)(e.appliedLabels),[i,o]=(0,l.useState)(e.appliedLabels),[c,d]=(0,l.useState)(O(e.appliedLabels));(0,l.useEffect)(()=>{e.appliedLabels.length>0&&!t.includes("Issue")&&r([...t,"Issue"])},[]);let u=(0,l.useCallback)(e=>{t&&t.includes(e)?r(t.filter(t=>t!==e)):r([...t,e])},[t]),m=(0,l.useCallback)(()=>{e.applyThreads(t)},[e,t]),p=(0,l.useCallback)(e=>{o(e),d(O(e))},[]),h=(0,l.useCallback)(()=>{a(i)},[i]),b=(0,l.useCallback)(()=>{o(n),d(O(n))},[n]);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:$.threadContent,children:e.subscribableThreadTypes.map((r,n)=>(0,s.jsxs)("div",{className:$.threadRow,style:n===e.subscribableThreadTypes.length-1?{}:{borderBottom:"1px solid var(--borderColor-default, var(--color-border-default))"},children:[(0,s.jsxs)(C.A,{children:[(0,s.jsx)(E.A,{checked:t.includes(r.name),onChange:()=>u(r.name)}),(0,s.jsx)(C.A.Label,{children:P(r.name)})]}),r.enabled?null:(0,s.jsxs)(f.A,{as:"p",sx:{fontSize:"12px",m:0,color:"var(--fgColor-muted)",ml:"var(--base-size-24)"},children:[P(r.name)," are not enabled for this repository"]}),(0,s.jsx)("div",{"aria-live":"polite",children:"Issue"===r.name&&e.showLabelSubscriptions&&t.includes("Issue")?(0,s.jsx)("div",{className:$.filterContainer,children:(0,s.jsx)(T,{filterAction:m,items:e.repoLabels,labelsText:c,onChangeLabels:p,selectedLabels:i,applyLabels:h,resetLabels:b})}):null})]},n))}),(0,s.jsx)(N,{onCancel:e.cancelMenuCallback,onApply:()=>e.saveThreads(t,i),showError:e.showError,disabled:0===t.length||e.isSavingThreads})]})}try{F.displayName||(F.displayName="ThreadList")}catch{}let M={watchCounter:"NotificationsSubscriptionsMenu-module__watchCounter--nAbhU",watchButton:"NotificationsSubscriptionsMenu-module__watchButton--ifxlS"};function B({repositoryId:e,repositoryName:t,watchersCount:r,subscriptionType:n,subscribableThreadTypes:i,repositoryLabels:o,showLabelSubscriptions:m}){let h=(0,l.useMemo)(()=>o.map(e=>({id:e.id,text:e.name,selected:e.subscribed})),[o]),f=h.filter(e=>e.selected),b=(0,l.useMemo)(()=>i.map(e=>e.subscribed||"Issue"===e.name&&m&&f.length>0?e.name:null).filter(e=>null!==e),[i,m,f]),[g,y]=(0,l.useState)(!1),[v,C]=(0,l.useState)(!1),[E,S]=(0,l.useState)(b.length>0?a.CUSTOM:n),[A,R]=(0,l.useState)(E),[k,j]=(0,l.useState)(b),[N,T]=(0,l.useState)(f),[L,O]=(0,l.useState)(!1),I=(0,l.createRef)(),D=(0,l.useCallback)(()=>{C(!1),S(A)},[A]),P=(0,l.useCallback)(async(t,r)=>{O(!0),j(t),T(r),R(a.CUSTOM);let n=new FormData;n.set("do","custom"),n.set("repository_id",e),t.map(e=>{n.append("thread_types[]",e)}),r.map(e=>{e.id&&n.append("labels[]",e.id.toString())}),(await p(n)).ok?(C(!1),O(!1)):y(!0)},[e]),$=(0,l.useCallback)(async t=>{let r=new FormData;t===a.IGNORING?r.set("do","ignore"):t===a.WATCHING?r.set("do","subscribed"):(t===a.NONE||t===a.CUSTOM&&0===k.length)&&r.set("do","included"),r.append("thread_types[]",""),r.set("repository_id",e),await p(r)},[e,k]),B=(0,l.useCallback)(e=>{e===a.CUSTOM?(C(!0),S(a.CUSTOM)):(S(e),R(e),$(e),j([]))},[S]),W=(0,l.useCallback)(e=>{j(e)},[j]),z=(0,l.useMemo)(()=>x(E,t),[E,t]);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"d-md-none",children:(0,s.jsxs)(c.W,{children:[(0,s.jsx)(c.W.Button,{"data-testid":"notifications-subscriptions-menu-button-desktop",leadingVisual:E===a.IGNORING?u.BellSlashIcon:u.EyeIcon,trailingAction:null,className:M.watchButton,"aria-label":z,children:(0,s.jsx)(s.Fragment,{})}),(0,s.jsx)(c.W.Overlay,{width:"medium",children:(0,s.jsx)(w,{selected:E,onSelect:B})})]})}),(0,s.jsx)("div",{className:"d-none d-md-block",children:(0,s.jsxs)(c.W,{children:[(0,s.jsxs)(c.W.Button,{"data-testid":"notifications-subscriptions-menu-button-mobile",size:"small",leadingVisual:E===a.IGNORING?u.BellSlashIcon:u.EyeIcon,sx:{'&& [data-component="leadingVisual"]':{color:"var(--fgColor-muted, var(--color-fg-muted))"}},"aria-label":z,children:[_(E),(0,s.jsx)("span",{className:`ml-2 Counter rounded-3 ${M.watchCounter}`,children:r})]}),(0,s.jsx)(c.W.Overlay,{width:"medium",children:(0,s.jsx)(w,{selected:E,onSelect:B})})]})}),(0,s.jsx)(d.A,{returnFocusRef:I,isOpen:v,onDismiss:()=>D(),"aria-labelledby":"header",children:(0,s.jsxs)("div",{"data-testid":"inner",children:[(0,s.jsxs)(d.A.Header,{id:"header",children:["Subscribe to events for ",t]}),(0,s.jsx)(F,{subscribableThreadTypes:i,showLabelSubscriptions:m,cancelMenuCallback:D,appliedThreads:k,repoLabels:h,subscribedThreads:b,applyThreads:W,appliedLabels:N,saveThreads:P,showError:g,isSavingThreads:L})]})})]})}try{B.displayName||(B.displayName="NotificationsSubscriptionsMenu")}catch{}(0,o.k)("notifications-subscriptions-menu",{Component:B})},92536:(e,t,r)=>{r.d(t,{R:()=>DeferredRegistry});let DeferredRegistry=class DeferredRegistry{register(e,t){let r=this.registrationEntries[e];r?r.resolve?.(t):this.registrationEntries[e]={promise:Promise.resolve(t)}}getRegistration(e){var t;return(t=this.registrationEntries)[e]||(t[e]=new n),this.registrationEntries[e].promise}constructor(){this.registrationEntries={}}};let n=class Deferred{constructor(){this.promise=new Promise(e=>{this.resolve=e})}}},75014:(e,t,r)=>{r.d(t,{Mm:()=>i,QJ:()=>o,w8:()=>a});var n=r(96540);function a(e){return((0,n.useEffect)(()=>{let t=e?.anchor;t&&("disabled"in t&&(t.disabled=!1),t.classList.remove("cursor-wait"))},[e]),e)?{reactPartialAnchor:{__wrapperElement:e}}:{}}function i(e){let t=(0,n.useRef)(e.__wrapperElement.anchor||null),[r,a]=(0,n.useState)(!1),i=(0,n.useCallback)(()=>{a(!r)},[r,a]);return(0,n.useEffect)(()=>{t.current&&(t.current.setAttribute("aria-expanded",r.toString()),t.current.setAttribute("aria-haspopup","true"))},[t,r]),o(e,i),{ref:t,open:r,setOpen:a}}function o(e,t){let r=(0,n.useRef)(e.__wrapperElement.anchor);(0,n.useEffect)(()=>{let e=r.current;if(e)return e.addEventListener("click",t),()=>e.removeEventListener("click",t)},[r,t])}},72245:(e,t,r)=>{r.d(t,{k:()=>c});let n=new(r(92536)).R;var a=r(74848),i=r(39595),o=r(24508),s=r(23235);let l=class ReactPartialElement extends o.H{async getReactNode(e,t){var r;let{Component:i}=await (r=this.name,n.getRegistration(r)),o=this.closest("react-partial-anchor");return(0,a.jsx)(s.c,{partialName:this.name,embeddedData:e,Component:i,wasServerRendered:this.hasSSRContent,ssrError:this.ssrError,anchorElement:o,onError:t})}constructor(...e){super(...e),this.nameAttribute="partial-name"}};function c(e,t){n.register(e,t)}l=function(e,t,r,n){var a,i=arguments.length,o=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(o=(i<3?a(o):i>3?a(t,r,o):a(t,r))||o);return i>3&&o&&Object.defineProperty(t,r,o),o}([i.p_],l)},23581:(e,t,r)=>{r.d(t,{A:()=>s});let{getItem:n,setItem:a,removeItem:i}=(0,r(74572).A)("localStorage"),o="REACT_PROFILING_ENABLED",s={enable:()=>a(o,"true"),disable:()=>i(o),isEnabled:()=>!!n(o)}},28784:(e,t,r)=>{function n(e,t={}){!function(e){if(new URL(e,window.location.origin).origin!==window.location.origin)throw Error("Can not make cross-origin requests from verifiedFetch")}(e);let r={...t.headers,"GitHub-Verified-Fetch":"true","X-Requested-With":"XMLHttpRequest"};return fetch(e,{...t,headers:r})}function a(e,t){let r={...t?.headers??{},Accept:"application/json","Content-Type":"application/json"},a=t?.body?JSON.stringify(t.body):void 0;return n(e,{...t,body:a,headers:r})}function i(e,t={}){let r={...t.headers,"GitHub-Is-React":"true"};return n(e,{...t,headers:r})}function o(e,t){let r={...t?.headers??{},"GitHub-Is-React":"true"};return a(e,{...t,headers:r})}r.d(t,{DI:()=>n,QJ:()=>i,Sr:()=>o,lS:()=>a})},23235:(e,t,r)=>{r.d(t,{c:()=>f});var n=r(74848),a=r(96540),i=r(86451),o=r(45588),s=r(49107),l=r(47767),c=r(59840);function d({children:e,history:t}){let[r,i]=(0,a.useState)({location:t.location});return(0,c.m)(()=>t.listen(i),[t]),(0,n.jsx)(l.Ix,{location:r.location,navigator:t,children:e})}try{d.displayName||(d.displayName="PartialRouter")}catch{}var u=r(17857),m=r(51261),p=r(75014),h=r(44196);function f({partialName:e,embeddedData:t,Component:r,wasServerRendered:l,ssrError:c,anchorElement:f,onError:b}){let g=a.useRef(),y=globalThis.window;g.current||(g.current=y?(0,m.z)({window:y}):(0,o.sC)({initialEntries:[{pathname:"/"}]}));let v=g.current,_=(0,p.w8)(f);return(0,n.jsx)(i.U,{appName:e,wasServerRendered:l,children:(0,n.jsx)(h.t,{onError:b,children:(0,n.jsx)(s.Q,{history:v,routes:[],children:(0,n.jsxs)(d,{history:v,children:[(0,n.jsx)(r,{...t.props,..._}),(0,n.jsx)(u.h,{ssrError:c})]})})})})}try{f.displayName||(f.displayName="PartialEntry")}catch{}},24508:(e,t,r)=>{r.d(t,{H:()=>ReactBaseElement});var n=r(74848),a=r(39595),i=r(5338),o=r(96540),s=r(23581),l=r(79461),c=r(51528),d=r(23780);function u(e,t,r,n){var a,i=arguments.length,o=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(o=(i<3?a(o):i>3?a(t,r,o):a(t,r))||o);return i>3&&o&&Object.defineProperty(t,r,o),o}let m=RegExp("Minified React error #(?<invariant>\\d+)"),p=["419","421"];let ReactBaseElement=class ReactBaseElement extends HTMLElement{get name(){return this.getAttribute(this.nameAttribute)}get embeddedDataText(){let e=this.embeddedData?.textContent;if(!e)throw Error(`No embedded data provided for react element ${this.name}`);return e}get hasSSRContent(){return"true"===this.getAttribute("data-ssr")}get attemptedSSR(){return"true"===this.getAttribute("attempted-ssr")}connectedCallback(){this.renderReact()}disconnectedCallback(){this.root?.unmount(),this.root=void 0}async renderReact(){if(!this.reactRoot)throw Error("No react root provided");let e={createRoot:i.H,hydrateRoot:i.c};s.A.isEnabled()&&(e=await this.getReactDomWithProfiling());let t=!1,r=JSON.parse(this.embeddedDataText),a=this.ssrError?.textContent,l=await this.getReactNode(r,e=>{t=!0,setTimeout(()=>{(0,d.N7)(e,{critical:!0})})}),u=(0,n.jsx)(o.StrictMode,{children:l});if(a&&this.logSSRError(a),this.hasSSRContent){let r=this.querySelector('style[data-styled="true"]');r&&document.head.appendChild(r),this.root=e.hydrateRoot(this.reactRoot,u,{onRecoverableError:e=>{if(!(e instanceof Error))return;let r=m.exec(e.message),n=String(r?.groups?.invariant);t=!p.includes(n),(0,c.i)({incrementKey:"REACT_HYDRATION_ERROR",incrementTags:{appName:this.name,invariant:n}})}}),r&&requestIdleCallback(()=>{r.parentElement?.removeChild(r)}),(0,c.i)({incrementKey:"REACT_RENDER",incrementTags:{appName:this.name,csr:!1,error:t,ssr:!0,ssrError:!1}})}else this.root=e.createRoot(this.reactRoot),this.root.render(u),(0,c.i)({incrementKey:"REACT_RENDER",incrementTags:{appName:this.name,csr:!0,error:t,ssr:this.attemptedSSR,ssrError:!!this.ssrError}});this.classList.add("loaded")}getReactDomWithProfiling(){return r.e("react-profiling").then(r.t.bind(r,87335,19))}logSSRError(e){if(l.z[e])return console.error("SSR failed with an expected error:",l.z[e]);try{let t=JSON.parse(e),r=function(e){if(!e.stacktrace)return"";let t="\n ";return e.stacktrace.map(e=>{let{function:r,filename:n,lineno:a,colno:i}=e,o=`${t} at ${r} (${n}:${a}:${i})`;return t=" ",o}).join("\n")}(t);console.error("Error During Alloy SSR:",`${t.type}: ${t.value}
`,t,r)}catch{console.error("Error During Alloy SSR:",e,"unable to parse as json")}}};u([a.aC],ReactBaseElement.prototype,"embeddedData",void 0),u([a.aC],ReactBaseElement.prototype,"ssrError",void 0),u([a.aC],ReactBaseElement.prototype,"reactRoot",void 0);try{m.displayName||(m.displayName="REACT_INVARIANT_ERROR_REGEX")}catch{}},39595:(e,t,r)=>{let n;r.d(t,{CF:()=>f,p_:()=>w,FB:()=>u,Se:()=>j,aC:()=>_,zV:()=>x});let a=new WeakSet,i=new WeakMap;function o(e=document){if(i.has(e))return i.get(e);let t=!1,r=new MutationObserver(e=>{for(let t of e)if("attributes"===t.type&&t.target instanceof Element)d(t.target);else if("childList"===t.type&&t.addedNodes.length)for(let e of t.addedNodes)e instanceof Element&&s(e)});r.observe(e,{childList:!0,subtree:!0,attributeFilter:["data-action"]});let n={get closed(){return t},unsubscribe(){t=!0,i.delete(e),r.disconnect()}};return i.set(e,n),n}function s(e){for(let t of e.querySelectorAll("[data-action]"))d(t);e instanceof Element&&e.hasAttribute("data-action")&&d(e)}function l(e){let t=e.currentTarget;for(let r of c(t))if(e.type===r.type){let n=t.closest(r.tag);a.has(n)&&"function"==typeof n[r.method]&&n[r.method](e);let i=t.getRootNode();if(i instanceof ShadowRoot&&a.has(i.host)&&i.host.matches(r.tag)){let t=i.host;"function"==typeof t[r.method]&&t[r.method](e)}}}function*c(e){for(let t of(e.getAttribute("data-action")||"").trim().split(/\s+/)){let e=t.lastIndexOf(":"),r=Math.max(0,t.lastIndexOf("#"))||t.length;yield{type:t.slice(0,e),tag:t.slice(e+1,r),method:t.slice(r+1)||"handleEvent"}}}function d(e){for(let t of c(e))e.addEventListener(t.type,l)}function u(e,t){let r=e.tagName.toLowerCase();if(e.shadowRoot){for(let n of e.shadowRoot.querySelectorAll(`[data-target~="${r}.${t}"]`))if(!n.closest(r))return n}for(let n of e.querySelectorAll(`[data-target~="${r}.${t}"]`))if(n.closest(r)===e)return n}let m=e=>String("symbol"==typeof e?e.description:e).replace(/([A-Z]($|[a-z]))/g,"-$1").replace(/--/g,"-").replace(/^-|-$/,"").toLowerCase(),p=(e,t="property")=>{let r=m(e);if(!r.includes("-"))throw new DOMException(`${t}: ${String(e)} is not a valid ${t} name`,"SyntaxError");return r},h="attr";function f(e,t){v(e,h).add(t)}let b=new WeakSet;function g(e,t){if(b.has(e))return;b.add(e);let r=Object.getPrototypeOf(e),n=r?.constructor?.attrPrefix??"data-";for(let a of(t||(t=v(r,h)),t)){let t=e[a],r=p(`${n}${a}`),i={configurable:!0,get(){return this.getAttribute(r)||""},set(e){this.setAttribute(r,e||"")}};"number"==typeof t?i={configurable:!0,get(){return Number(this.getAttribute(r)||0)},set(e){this.setAttribute(r,e)}}:"boolean"==typeof t&&(i={configurable:!0,get(){return this.hasAttribute(r)},set(e){this.toggleAttribute(r,e)}}),Object.defineProperty(e,a,i),a in e&&!e.hasAttribute(r)&&i.set.call(e,t)}}let y=Symbol.for("catalyst");let CatalystDelegate=class CatalystDelegate{constructor(e){let t=this,r=e.prototype.connectedCallback;e.prototype.connectedCallback=function(){t.connectedCallback(this,r)};let n=e.prototype.disconnectedCallback;e.prototype.disconnectedCallback=function(){t.disconnectedCallback(this,n)};let a=e.prototype.attributeChangedCallback;e.prototype.attributeChangedCallback=function(e,r,n){t.attributeChangedCallback(this,e,r,n,a)};let i=e.observedAttributes||[];Object.defineProperty(e,"observedAttributes",{configurable:!0,get(){return t.observedAttributes(this,i)},set(e){i=e}}),function(e){let t=e.observedAttributes||[],r=e.attrPrefix??"data-",n=e=>p(`${r}${e}`);Object.defineProperty(e,"observedAttributes",{configurable:!0,get:()=>[...v(e.prototype,h)].map(n).concat(t),set(e){t=e}})}(e),function(e){let t=m(e.name).replace(/-element$/,"");try{window.customElements.define(t,e),window[e.name]=customElements.get(t)}catch(e){if(!(e instanceof DOMException&&"NotSupportedError"===e.name))throw e}}(e)}observedAttributes(e,t){return t}connectedCallback(e,t){var r,n;e.toggleAttribute("data-catalyst",!0),customElements.upgrade(e),!function(e){for(let t of e.querySelectorAll("template[data-shadowroot]"))t.parentElement===e&&e.attachShadow({mode:"closed"===t.getAttribute("data-shadowroot")?"closed":"open"}).append(t.content.cloneNode(!0))}(e),g(e),a.add(e),e.shadowRoot&&(s(n=e.shadowRoot),o(n)),s(e),o(e.ownerDocument),t?.call(e),e.shadowRoot&&(s(r=e.shadowRoot),o(r))}disconnectedCallback(e,t){t?.call(e)}attributeChangedCallback(e,t,r,n,a){g(e),"data-catalyst"!==t&&a&&a.call(e,t,r,n)}};function v(e,t){if(!Object.prototype.hasOwnProperty.call(e,y)){let t=e[y],r=e[y]=new Map;if(t)for(let[e,n]of t)r.set(e,new Set(n))}let r=e[y];return r.has(t)||r.set(t,new Set),r.get(t)}function _(e,t){v(e,"target").add(t),Object.defineProperty(e,t,{configurable:!0,get(){return u(this,t)}})}function x(e,t){v(e,"targets").add(t),Object.defineProperty(e,t,{configurable:!0,get(){return function(e,t){let r=e.tagName.toLowerCase(),n=[];if(e.shadowRoot)for(let a of e.shadowRoot.querySelectorAll(`[data-targets~="${r}.${t}"]`))a.closest(r)||n.push(a);for(let a of e.querySelectorAll(`[data-targets~="${r}.${t}"]`))a.closest(r)===e&&n.push(a);return n}(this,t)}})}function w(e){new CatalystDelegate(e)}let C=new Map,E=new Promise(e=>{"loading"!==document.readyState?e():document.addEventListener("readystatechange",()=>e(),{once:!0})}),S=new Promise(e=>{let t=new AbortController;t.signal.addEventListener("abort",()=>e());let r={once:!0,passive:!0,signal:t.signal},n=()=>t.abort();document.addEventListener("mousedown",n,r),document.addEventListener("touchstart",n,r),document.addEventListener("keydown",n,r),document.addEventListener("pointerdown",n,r)}),A={ready:()=>E,firstInteraction:()=>S,visible:e=>new Promise(t=>{let r=new IntersectionObserver(e=>{for(let n of e)if(n.isIntersecting){t(),r.disconnect();return}},{rootMargin:"0px 0px 256px 0px",threshold:.01});for(let t of document.querySelectorAll(e))r.observe(t)})},R=new WeakMap;function k(e){cancelAnimationFrame(R.get(e)||0),R.set(e,requestAnimationFrame(()=>{for(let t of C.keys()){let r=e.matches(t)?e:e.querySelector(t);if(customElements.get(t)||r){let n=r?.getAttribute("data-load-on")||"ready",a=n in A?A[n]:A.ready;for(let e of C.get(t)||[])a(t).then(e);C.delete(t),R.delete(e)}}}))}function j(e,t){C.has(e)||C.set(e,new Set),C.get(e).add(t),k(document.body),n||(n=new MutationObserver(e=>{if(C.size)for(let t of e)for(let e of t.addedNodes)e instanceof Element&&k(e)})).observe(document,{subtree:!0,childList:!0})}}},e=>{var t=t=>e(e.s=t);e.O(0,["primer-react-css","react-lib","vendors-node_modules_primer_behaviors_dist_esm_index_mjs","vendors-node_modules_github_mini-throttle_dist_index_js-node_modules_primer_react_lib-esm_Fea-39267a","vendors-node_modules_primer_react_lib-esm_Button_Button_js","vendors-node_modules_primer_react_lib-esm_TooltipV2_Tooltip_js","vendors-node_modules_primer_react_lib-esm_ActionList_index_js","vendors-node_modules_primer_react_lib-esm_AnchoredOverlay_AnchoredOverlay_js","vendors-node_modules_primer_react_lib-esm_Text_Text_js-node_modules_primer_react_lib-esm_Text-7845da","vendors-node_modules_primer_react_lib-esm_FormControl_FormControl_js","vendors-node_modules_primer_react_lib-esm_ActionMenu_ActionMenu_js","vendors-node_modules_primer_react_lib-esm_FilteredActionList_FilteredActionListEntry_js","ui_packages_failbot_failbot_ts","ui_packages_react-core_create-browser-history_ts-ui_packages_react-core_AppContextProvider_ts-ffb979"],()=>t(84923)),e.O()}]);
//# sourceMappingURL=notifications-subscriptions-menu-cb5802175e7f.js.map