import{aL as b,aM as F,aI as E,ar as de,aN as _,aO as h,aP as Oe,j as De,d as ze,aQ as Re,aR as Ge,aS as Be}from"./index-CBr6Ha6q.js";import{l as We}from"./loadPackagePreview-CbztJvbg.js";function n(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function P(e,r=""){var o,a;return e?((a=(o=e.versionHistory)==null?void 0:o[e.versionHistory.length-1])==null?void 0:a.text)??e.yourVersion??e.originalText??r:r}function v(e,r,i,o){return o[e]?P(i,r):r}function pe(e,r,i){const o=typeof i=="number"?i:Number(i);if(Number.isFinite(o)){const a=e.versionAttributes[o];return(a==null?void 0:a.originalText)!=null?a.originalText:r.marketing.versionAttributes[o-1]??""}return""}function q(e){var r,i;return e?((i=(r=e.versionHistory)==null?void 0:r[e.versionHistory.length-1])==null?void 0:i.url)??e.currentUrl??"":""}function K(e){var r,i;return e?((i=(r=e.versionHistory)==null?void 0:r[0])==null?void 0:i.url)??e.currentUrl??"":""}function G(e,r,i,o){return(e.some(m=>o[m])?q(r):K(r))||i}function O(e){return/(?:^|[-_])(?:new|added|\d{10,})(?:$|[-_])/i.test(String(e))}function A(e){return e?!String(e.originalText??"").trim()&&!!P(e).trim():!1}function H(e){return e?" pdp-new-content":""}function N(e){return e?'<span class="pdp-new-badge">New</span>':""}function S(e){return e?" pdp-moved-content":""}function M(e){return e?'<span class="pdp-moved-badge">Moved</span>':""}function Le(e,r,i){const o=i.featureTitles[e],a=i.features[e],p=i.featureGlossaries[e],m=P(o,(r==null?void 0:r.title)??"").trim(),c=P(a,(r==null?void 0:r.description)??"").trim(),s=P(p,(r==null?void 0:r.glossary)??"").trim();return!r||O(e)||A(o)||A(a)||qe(e)&&(Ue(i.featureImages[e])||/^Feature\s+PBTFEA\d+$/i.test(m)||!c&&!s)}function j(e,r,i){return!!((e.sectionOrderChanges??[]).some(o=>o.kind===r&&o.rowId===i)||r==="specification"&&(e.specificationOrderChanges??[]).some(o=>o.rowId===i))}function B(e,r){return(e.sectionRemovalLog??[]).filter(i=>i.kind===r)}function J(e){return`<div class="pdp-removed-placeholder" ${b("removed")} ${F(e.rowId)}><span class="pdp-removed-badge">Removed</span><strong>${n(e.label)}</strong></div>`}function $(e){return typeof CSS<"u"&&typeof CSS.escape=="function"?CSS.escape(e):e.replace(/["\\#.:,[\]>+~*'=|^$(){}!]/g,"\\$&")}function Ue(e){return!String(q(e)||K(e)||(e==null?void 0:e.currentUrl)||"").trim()}function qe(e){return/^PBTFEA\d+$/i.test(e)}function Ve(e,r){var i,o,a,p;if(typeof DOMParser>"u")return e;try{const c=new DOMParser().parseFromString(e,"text/html");if(!c.documentElement)return e;Je(c);const{formData:s,template:g}=r;return u(c,E("brand-concept"),((i=s.headerBrandConcept)==null?void 0:i.originalText)??`${s.marketingBrand||"Philips"} · ${s.marketingConcept||g.concept}`.trim(),s.headerBrandConcept),u(c,E("descriptor"),((o=s.headerDescriptor)==null?void 0:o.originalText)??(s.marketingDescriptor||g.descriptor),s.headerDescriptor),u(c,E("code-ctn"),((a=s.headerCtn)==null?void 0:a.originalText)??(s.marketingCtn||g.ctn),s.headerCtn),u(c,E("alphanumeric"),((p=s.headerAlphanumeric)==null?void 0:p.originalText)??(s.marketingAlphanumeric||g.alphanumeric||g.ctn),s.headerAlphanumeric),u(c,E("wow"),g.marketing.wow,s.marketingWow),u(c,E("subwow"),g.marketing.subWow,s.marketingSubWow),u(c,E("marketing-text"),g.marketing.marketingText,s.marketingText),Object.entries(s.versionAttributes).forEach(([d,x])=>{u(c,`#${$(`version-attr-${d}`)}`,pe(s,g,d),x)}),g.features.forEach(d=>{u(c,`#feature-title-${$(d.id)}`,d.title,s.featureTitles[d.id]),u(c,`#feature-text-${$(d.id)}`,d.description,s.features[d.id]),u(c,`#feature-glossary-${$(d.id)}`,d.glossary??"",s.featureGlossaries[d.id])}),Object.entries(s.featureTitles).forEach(([d,x])=>{const T=W(d,"feature-title-");u(c,`#feature-title-${$(T)}`,x.originalText??"",x)}),Object.entries(s.features).forEach(([d,x])=>{const T=W(d,"feature-text-");u(c,`#feature-text-${$(T)}`,x.originalText??"",x)}),Object.entries(s.featureGlossaries).forEach(([d,x])=>{const T=W(d,"feature-glossary-");u(c,`#feature-glossary-${$(T)}`,x.originalText??"",x)}),r.specItems.forEach(d=>{u(c,`#spec-title-${$(d.id)}`,d.name,s.specificationTitles[d.id]),d.kind!=="subsection"&&u(c,`#spec-text-${$(d.id)}`,d.value,s.specifications[d.id])}),Object.entries(s.specificationTitles).forEach(([d,x])=>{const T=W(d,"spec-title-");u(c,`#spec-title-${$(T)}`,x.originalText??"",x)}),Object.entries(s.specifications).forEach(([d,x])=>{const T=W(d,"spec-text-");u(c,`#spec-text-${$(T)}`,x.originalText??"",x)}),r.accessoryItems.forEach(d=>{u(c,`#accessory-title-${$(d.id)}`,d.name,s.accessoryConceptTitles[d.id]),u(c,`#accessory-text-${$(d.id)}`,d.value,s.accessories[d.id])}),r.awardItems.forEach(d=>{u(c,`#award-text-${$(d.id)}`,d.value,s.awards[d.id])}),r.disclaimerItems.forEach(d=>{u(c,`#disclaimer-${$(String(d.id))}`,d.text,s.disclaimers[d.id])}),_e(c,r),`<!doctype html>
${c.documentElement.outerHTML}`}catch{return e}}function Je(e){const r=e.createElement("style");r.textContent=`
    .pdp-redline-new {
      display: inline;
      border-radius: 3px;
      padding: 0 3px;
      margin: 0 1px;
      box-decoration-break: clone;
      -webkit-box-decoration-break: clone;
    }
    .pdp-redline-new {
      background: #dcfce7;
      color: #14532d;
      box-shadow: inset 0 -2px 0 #86efac;
      font-weight: 700;
    }
    .pdp-copy-removed-final {
      color: #64748b;
      font-weight: 800;
    }
    .pdp-change-marker {
      --pdp-change-accent: #0E4194;
      --pdp-change-outline: rgba(14,65,148,0.72);
      --pdp-change-bg: linear-gradient(90deg, rgba(243,248,255,0.98), rgba(255,255,255,0.94));
      --pdp-change-shadow: rgba(14,65,148,0.68);
      --pdp-change-badge-border: rgba(14,65,148,0.28);
      --pdp-change-badge-bg: #F3F8FF;
      --pdp-change-badge-color: #0E4194;
      position: relative;
      outline: 2px solid var(--pdp-change-outline);
      outline-offset: 2px;
      border-radius: 7px;
      background: var(--pdp-change-bg);
      padding: 7px 10px 7px 16px;
      box-sizing: border-box;
      box-decoration-break: clone;
      -webkit-box-decoration-break: clone;
      box-shadow: inset 4px 0 0 var(--pdp-change-accent), 0 10px 24px -20px var(--pdp-change-shadow);
    }
    .pdp-change-marker::before {
      content: attr(data-pdp-change-label);
      display: inline-flex;
      align-items: center;
      width: fit-content;
      margin: 0 6px 6px 0;
      border: 1px solid var(--pdp-change-badge-border);
      border-radius: 999px;
      background: var(--pdp-change-badge-bg);
      color: var(--pdp-change-badge-color);
      padding: 2px 7px;
      font-size: 11px;
      font-weight: 800;
      letter-spacing: 0.02em;
      text-transform: uppercase;
      vertical-align: middle;
    }
    .pdp-change-marker--mixed {
      --pdp-change-accent: #0E4194;
      --pdp-change-outline: rgba(14,65,148,0.72);
      --pdp-change-bg: linear-gradient(90deg, rgba(243,248,255,0.98), rgba(255,255,255,0.94));
      --pdp-change-shadow: rgba(14,65,148,0.68);
      --pdp-change-badge-border: rgba(14,65,148,0.28);
      --pdp-change-badge-bg: #F3F8FF;
      --pdp-change-badge-color: #0E4194;
    }
    .pdp-image-change {
      position: relative;
      --pdp-image-change-accent: #0E4194;
      --pdp-image-change-bg: #F3F8FF;
      --pdp-image-change-shadow: rgba(14,65,148,0.8);
      --pdp-image-change-pill-border: rgba(14,65,148,0.22);
      --pdp-image-change-pill-bg: #fff;
      --pdp-image-change-pill-color: #0E4194;
      outline: 2px solid var(--pdp-image-change-accent);
      outline-offset: 3px;
      border-radius: 9px;
      background: var(--pdp-image-change-bg) !important;
      box-shadow: 0 12px 30px -24px var(--pdp-image-change-shadow);
    }
    .pdp-image-change--brief {
      --pdp-image-change-accent: #d97706;
      --pdp-image-change-bg: #fffbeb;
      --pdp-image-change-shadow: rgba(217,119,6,0.72);
      --pdp-image-change-pill-border: #fbbf24;
      --pdp-image-change-pill-bg: #fef3c7;
      --pdp-image-change-pill-color: #92400e;
    }
    .pdp-image-change--new {
      --pdp-image-change-accent: #003478;
      --pdp-image-change-bg: #EAF2FF;
      --pdp-image-change-shadow: rgba(0,52,120,0.82);
      --pdp-image-change-pill-border: rgba(0,52,120,0.34);
      --pdp-image-change-pill-bg: #DCEBFF;
      --pdp-image-change-pill-color: #003478;
    }
    .pdp-image-change--new-brief {
      --pdp-image-change-accent: #0072CE;
      --pdp-image-change-bg: #E6F6FF;
      --pdp-image-change-shadow: rgba(0,114,206,0.72);
      --pdp-image-change-pill-border: #7DD3FC;
      --pdp-image-change-pill-bg: #D7F0FF;
      --pdp-image-change-pill-color: #075985;
    }
    .pdp-removal-pin {
      position: absolute;
      transform: translate(-50%, -50%);
      z-index: 6;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 28px;
      height: 28px;
      border: 2px solid #fff;
      border-radius: 999px;
      background: #dc2626;
      color: #fff;
      font-size: 12px;
      font-weight: 800;
      box-shadow: 0 8px 18px -10px rgba(127,29,29,0.95);
    }
    .pdp-moved-content {
      position: relative;
      outline: 2px solid #d97706;
      outline-offset: 2px;
      background: #fffbeb !important;
    }
    .pdp-moved-badge {
      display: inline-flex; align-items: center; width: fit-content; margin: 0 6px 6px 0;
      border: 1px solid #f59e0b; border-radius: 999px; background: #fef3c7; color: #92400e;
      padding: 2px 7px; font-size: 11px; font-weight: 800; letter-spacing: 0.02em; text-transform: uppercase;
    }
    .pdp-removed-placeholder,
    .pdp-removed-content {
      border: 1px dashed #94a3b8;
      border-radius: 7px;
      background: #f8fafc !important;
      color: #475569;
      padding: 10px;
      margin-top: 10px;
    }
    .pdp-removed-badge {
      display: inline-flex; margin: 0 8px 0 0; border-radius: 999px; background: #64748b; color: #fff;
      padding: 2px 7px; font-size: 11px; font-weight: 800; letter-spacing: 0.02em; text-transform: uppercase;
    }
  `,e.head.appendChild(r)}function u(e,r,i,o){const a=P(o,i);if(!o||a===i)return;const p=Ye(i,a);Array.from(e.querySelectorAll(r)).forEach(c=>{var g,d;const s=(d=(g=c.querySelector(".tooltiptext"))==null?void 0:g.textContent)==null?void 0:d.trim();c.classList.add("pdp-change-marker","pdp-change-marker--mixed"),c.setAttribute("data-pdp-change-label","Changed"),c.innerHTML=s?`<span class="textwithtooltip">${p}<span class="tooltiptext">${n(s)}</span></span>`:p})}function W(e,r){return e.startsWith(r)?e.slice(r.length):e}function _e(e,r){Object.entries(r.heroAssets??{}).forEach(([i,o])=>{i==="0"&&L(e,"#hero-block",o),L(e,`#hero-thumb-${Number(i)}`,o)}),Object.entries(r.formData.featureImages??{}).forEach(([i,o])=>{L(e,`#feature-${$(i)}`,o)}),Object.entries(r.formData.accessoryImages??{}).forEach(([i,o])=>{L(e,`#accessory-${$(i)}`,o)}),Object.entries(r.formData.awardImages??{}).forEach(([i,o])=>{L(e,`#award-${$(i)}`,o)})}function L(e,r,i,o){if(!i||!Ke(i))return;const a=e.querySelector(r);if(!a||a.querySelector(".pdp-image-change-note"))return;const p=q(i),m=a.matches("img")?a:a.querySelector("img");p&&m instanceof HTMLImageElement&&(m.src=p);const c=Qe(i);a.classList.add("pdp-image-change",`pdp-image-change--${c.className}`),a.setAttribute("data-pdp-image-request-kind",c.key),Xe(a,i)}function Ke(e){var r;return e.status==="amended"||e.versionHistory.length>1||e.thread.length>0||(((r=e.removalPins)==null?void 0:r.length)??0)>0}function Qe(e){const r=e.versionHistory.length>1||!!(K(e)&&q(e)&&K(e)!==q(e)),i=e.thread.some(o=>{var a,p;return!!((a=o.message)!=null&&a.trim())&&!((p=o.assetUrl)!=null&&p.trim())});return r&&i?{key:"new-image-brief",className:"new-brief"}:r?{key:"new-image",className:"new"}:{key:"brief-only",className:"brief"}}function Xe(e,r){const i=de(r.removalPins??[]);!i.length||e.querySelector("[data-pdp-removal-pin]")||i.forEach(o=>{const a=e.ownerDocument.createElement("span");a.className="pdp-removal-pin",a.dataset.pdpRemovalPin=o.label,a.textContent=o.label,a.title=`Removal marker ${o.label}`,a.setAttribute("style",`left:${_(o.x)*100}%;top:${_(o.y)*100}%;`),e.appendChild(a)})}function Ye(e,r){return r.trim()?Ze(e,r):'<span class="pdp-copy-removed-final">Copy removed from preview</span>'}function Ze(e,r){const i=et(e),o=r.split(/(\s+)/),a=o.filter(c=>c.trim()),p=tt(i,a);let m=-1;return o.map(c=>!c.trim()||(m+=1,p.has(m))?n(c):`<span class="pdp-redline-new">${n(c)}</span>`).join("")}function et(e){return String(e??"").match(/\S+/g)??[]}function tt(e,r){const i=e.map(se),o=r.map(se),a=Array.from({length:i.length+1},()=>Array(o.length+1).fill(0));for(let s=i.length-1;s>=0;s-=1)for(let g=o.length-1;g>=0;g-=1)a[s][g]=i[s]===o[g]?a[s+1][g+1]+1:Math.max(a[s+1][g],a[s][g+1]);const p=new Set;let m=0,c=0;for(;m<i.length&&c<o.length;)i[m]===o[c]?(p.add(c),m+=1,c+=1):a[m+1][c]>=a[m][c+1]?m+=1:c+=1;return p}function se(e){return e.toLowerCase().replace(/^[^\p{L}\p{N}]+|[^\p{L}\p{N}]+$/gu,"")}function Y(e){var ae,re,ie,oe,ne;const{ctn:r,pdpName:i,derivativeType:o,formData:a,template:p,heroAssets:m,approvedImages:c,approvedTextItems:s,specItems:g,accessoryItems:d,awardItems:x,disclaimerItems:T,includeTooltipMarkup:Q=!1,includeChangeMarkers:f=!1}=e,w=(t,l)=>Q?`<span class="textwithtooltip">${t}<span class="tooltiptext">${n(l)}</span></span>`:t,le=Array.from(new Set([...p.heroImages.map((t,l)=>l),...Object.keys(m).map(t=>Number(t)).filter(t=>Number.isFinite(t))])).sort((t,l)=>t-l),ee=G(["hero-0"],m[0],p.heroImages[0]??"",c),me=le.map(t=>{const l=G([`hero-${t}`],m[t],p.heroImages[t]??"",c),y=`Carousel image ${t+1}`,k=f?ce(m[t],!0):"";return`<div class="hero-thumb" id="hero-thumb-${t}" ${b("hero-image")} ${F(t)}>
        ${l?`<div class="hero-thumb-image"><img src="${n(l)}" alt="${n(y)}" />${k}</div>`:'<div class="hero-thumb-placeholder">Image pending</div>'}
        <span>${n(y)}</span>
      </div>`}).join(`
`),ge=B(a,"hero").map(t=>`<div class="hero-thumb pdp-removed-content" id="hero-removed-${n(t.rowId)}" ${b("removed-hero")} ${F(t.rowId)}><div class="hero-thumb-placeholder">Removed</div><span>${n(t.label)}</span></div>`).join(`
`),he=((ae=a.headerBrandConcept)==null?void 0:ae.originalText)??`${a.marketingBrand||"Philips"} · ${a.marketingConcept||p.concept}`.trim(),ue=v("brand-concept",he,a.headerBrandConcept,s),fe=((re=a.headerDescriptor)==null?void 0:re.originalText)??(a.marketingDescriptor||p.descriptor),be=v("marketing-descriptor",fe,a.headerDescriptor,s),xe=((ie=a.headerCtn)==null?void 0:ie.originalText)??(a.marketingCtn||p.ctn),ve=v("marketing-ctn",xe,a.headerCtn,s),$e=((oe=a.headerAlphanumeric)==null?void 0:oe.originalText)??(a.marketingAlphanumeric||p.alphanumeric||p.ctn),we=v("marketing-alphanumeric",$e,a.headerAlphanumeric,s),te=v("wow",p.marketing.wow,a.marketingWow,s),ye=v("subwow",p.marketing.subWow,a.marketingSubWow,s),ke=v("marketing",p.marketing.marketingText,a.marketingText,s),Te=Object.keys(a.versionAttributes).map(t=>Number(t)).filter(t=>Number.isFinite(t)).sort((t,l)=>t-l).map(t=>{const l=pe(a,p,t);return{id:t,value:v(`version-attr-${t}`,l,a.versionAttributes[t],s),isNew:f&&A(a.versionAttributes[t])}}),Ie=(((ne=a.featureOrder)==null?void 0:ne.length)>0?a.featureOrder:p.features.map(t=>t.id)).map(t=>{const l=p.features.find(je=>je.id===t),y=(l==null?void 0:l.title)??"New feature",k=(l==null?void 0:l.description)??"",I=(l==null?void 0:l.glossary)??"",C=l?v(`feature-title-${t}`,y,a.featureTitles[t],s):P(a.featureTitles[t],y),X=l?v(`feature-text-${t}`,k,a.features[t],s):P(a.features[t],k),D=l?v(`feature-glossary-${t}`,I,a.featureGlossaries[t],s):P(a.featureGlossaries[t],I),z=G([`feature-${t}`,`feature-image-${t}`],a.featureImages[t],(l==null?void 0:l.imageUrl)??"",c),R=f&&Le(t,l,a),V=f&&j(a,"feature",t);return`
        <article class="card${H(R)}${S(V)}" id="feature-${n(t)}" ${b("feature")} ${F(t)}>
          ${N(R)}${M(V)}
          ${z?`<img class="feature-img" id="feature-image-${n(t)}" ${h("feature-image")} src="${n(z)}" alt="${n(C)}" />`:`<div class="feature-img feature-img-placeholder" id="feature-image-${n(t)}" ${h("feature-image")}>Image pending</div>`}
          <h4 id="feature-title-${n(t)}" ${h("feature-title")}>${w(n(C),"PH-FEA-Description")}</h4>
          <p id="feature-text-${n(t)}" ${h("feature-text")}>${w(n(X),"PH-FEA-Description")}</p>
          ${D.trim()?`<p id="feature-glossary-${n(t)}" ${h("feature-glossary")}>${w(n(D),"PH-FEA-Glossary")}</p>`:""}
        </article>
      `}).join(`
`),Ae=g.map(t=>{if(t.kind==="subsection"){const D=v(`spec-title-${t.id}`,t.name,a.specificationTitles[t.id],s),z=f&&(O(t.id)||A(a.specificationTitles[t.id])),R=f&&j(a,"specification",t.id),V=t.titleTooltip?`<span class="textwithtooltip">${n(D)}<span class="tooltiptext">${n(t.titleTooltip)}</span></span>`:n(D);return`<tr id="spec-row-${n(t.id)}" class="spec-subsection${H(z)}${S(R)}" ${b("spec-subsection")}><th colspan="2" scope="colgroup">${N(z)}${M(R)}${V}</th></tr>`}const l=v(`spec-title-${t.id}`,t.name,a.specificationTitles[t.id],s),y=v(t.id,t.value,a.specifications[t.id],s),k=f&&(O(t.id)||A(a.specificationTitles[t.id])||A(a.specifications[t.id])),I=f&&j(a,"specification",t.id),C=t.attributeTooltip&&Q?`<span class="textwithtooltip">${n(l)}<span class="tooltiptext">${n(t.attributeTooltip)}</span></span>`:n(l),X=t.valueTooltip&&Q?`<span class="textwithtooltip">${n(y)}<span class="tooltiptext">${n(t.valueTooltip)}</span></span>`:n(y);return`<tr id="spec-row-${n(t.id)}" class="${`${H(k)}${S(I)}`.trim()}" ${b("specification")} ${F(t.id)}><th id="spec-title-${n(t.id)}" ${h("spec-title")}>${N(k)}${M(I)}${C}</th><td id="spec-text-${n(t.id)}" ${h("spec-text")}>${X}</td></tr>`}).join(`
`),Fe=d.map(t=>{const l=v(`accessory-title-${t.id}`,t.name,a.accessoryConceptTitles[t.id],s),y=v(`accessory-text-${t.id}`,t.value,a.accessories[t.id],s),k=G([`accessory-${t.id}`,t.id],a.accessoryImages[t.id],"",c),I=f&&(O(t.id)||A(a.accessoryConceptTitles[t.id])||A(a.accessories[t.id])),C=f&&j(a,"accessory",t.id);return`
        <article class="card${H(I)}${S(C)}" id="accessory-${n(t.id)}" ${b("accessory")} ${F(t.id)}>
          ${N(I)}${M(C)}
          ${k?`<img class="feature-img" id="accessory-image-${n(t.id)}" ${h("accessory-image")} src="${n(k)}" alt="${n(l)}" />`:`<div class="feature-img feature-img-placeholder" id="accessory-image-${n(t.id)}" ${h("accessory-image")}>Image pending</div>`}
          <h4 id="accessory-title-${n(t.id)}" ${h("accessory-title")}>${w(n(l),"PH-MT-Concept")}</h4>
          <p id="accessory-text-${n(t.id)}" ${h("accessory-text")}>${w(n(y),"Name")}</p>
        </article>
      `}).join(`
`),Pe=x.map(t=>{const l=v(`award-text-${t.id}`,t.value,a.awards[t.id],s),y=G([`award-${t.id}`,t.id],a.awardImages[t.id],"",c),k=f&&(O(t.id)||A(a.awards[t.id])),I=f&&j(a,"award",t.id);return`
        <article class="card${H(k)}${S(I)}" id="award-${n(t.id)}" ${b("award")} ${F(t.id)}>
          ${N(k)}${M(I)}
          ${y?`<img class="feature-img" id="award-image-${n(t.id)}" ${h("award-image")} src="${n(y)}" alt="${n(t.name)}" />`:`<div class="feature-img feature-img-placeholder" id="award-image-${n(t.id)}" ${h("award-image")}>Image pending</div>`}
          <h4 id="award-title-${n(t.id)}" ${h("award-title")}>${w(n(t.name),"PH-FEA-Description")}</h4>
          <p id="award-text-${n(t.id)}" ${h("award-text")}>${w(n(l),"PH-FEA-Description")}</p>
        </article>
      `}).join(`
`),Ce=T.map(t=>{const l=v(`disclaimer-${t.id}`,t.text,a.disclaimers[t.id],s),y=f&&(O(t.id)||A(a.disclaimers[t.id])),k=f&&j(a,"disclaimer",String(t.id));return`<li id="disclaimer-${String(t.id)}" class="${`${H(y)}${S(k)}`.trim()}" ${b("disclaimer")} ${F(t.id)}>${N(y)}${M(k)}${w(n(l),"Disclaimer")}</li>`}).join(`
`),Ee=f?ce(m[0],!1):"",He=f?B(a,"specification").map(J).join(`
`):"",Ne=f?B(a,"accessory").map(J).join(`
`):"",Se=f?B(a,"award").map(J).join(`
`):"",Me=f?B(a,"disclaimer").map(J).join(`
`):"";return`<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${n(i)} - Approved Export</title>
  <style>
    body { margin:0; font-family: Arial, Helvetica, sans-serif; color:#1f2937; background:#fff; }
    .container { max-width: 1080px; margin: 20px auto 40px; padding: 0 12px; }
    .meta { font-size: 12px; color:#6b7280; margin-bottom: 12px; }
    .grid-2 { display:grid; grid-template-columns: 1fr 1fr; gap:24px; align-items:start; }
    .hero-stage { width:100%; height:360px; display:flex; align-items:center; justify-content:center; background:#f5f5f5; border-radius:6px; }
    .hero-stage-image { position:relative; display:inline-flex; max-width:100%; max-height:100%; align-items:center; justify-content:center; }
    .hero { display:block; max-width:100%; max-height:360px; width:auto; height:auto; object-fit:contain; border-radius:6px; }
    .hero-carousel { display:flex; flex-direction:column; gap:10px; }
    .hero-thumbs { display:grid; grid-template-columns: repeat(auto-fill,minmax(92px,1fr)); gap:8px; }
    .hero-thumb { min-height:84px; border:1px solid #e5e7eb; border-radius:7px; padding:6px; background:#fff; font-size:11px; font-weight:700; color:#4b5563; display:flex; flex-direction:column; gap:5px; }
    .hero-thumb-image, .hero-thumb-placeholder { position:relative; width:100%; height:50px; border-radius:5px; background:#f3f4f6; display:flex; align-items:center; justify-content:center; color:#6b7280; overflow:hidden; }
    .hero-thumb-image img { max-width:100%; max-height:50px; object-fit:contain; }
    .hero-thumb span { line-height:1.15; }
    .pdp-removal-pin {
      position:absolute; transform:translate(-50%,-50%); z-index:4; display:inline-flex; align-items:center; justify-content:center;
      width:28px; height:28px; border:2px solid #fff; border-radius:999px; background:#dc2626; color:#fff;
      font-size:12px; font-weight:800; box-shadow:0 8px 18px -10px rgba(127,29,29,0.95);
    }
    .hero-thumb .pdp-removal-pin { width:18px; height:18px; font-size:10px; border-width:1px; }
    .stack > div { margin-bottom: 10px; }
    .label { font-size:12px; color:#666; margin:0; }
    .value { font-size:14px; font-weight:600; margin:2px 0 0; line-height:1.2; }
    .wow { font-size:28px; line-height:1.2; font-weight:700; margin:0; }
    .subwow { font-size:20px; line-height:1.25; font-weight:700; margin:0; }
    .marketing-headlines { display:grid; grid-template-columns: 1fr; gap:12px; margin-top: 22px; }
    .marketing-headline-block { padding-top:0; }
    .text { font-size:15px; line-height:1.5; margin:0; }
    .section { margin-top: 28px; }
    .section h3 { font-size:18px; margin:0 0 12px; }
    .cards { display:grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap:16px; align-items:stretch; }
    .card { border:1px solid #e5e7eb; border-radius:8px; padding:12px; background:#fff; min-height:292px; display:flex; flex-direction:column; }
    .card h4 { margin:8px 0 6px; font-size:16px; }
    .card p { margin:0; font-size:14px; line-height:1.45; }
    .feature-img { width:100%; height:173px; object-fit:cover; border-radius:6px; background:#f3f4f6; }
    .feature-img-placeholder { display:flex; align-items:center; justify-content:center; color:#6b7280; font-size:12px; font-weight:700; border:1px dashed #cbd5e1; }
    .textwithtooltip { position: relative; display: inline-block; }
    .textwithtooltip .tooltiptext {
      visibility: hidden;
      opacity: 0;
      position: absolute;
      z-index: 20;
      bottom: calc(100% + 6px);
      left: 50%;
      transform: translateX(-50%);
      min-width: max-content;
      max-width: 240px;
      background: #111827;
      color: #fff;
      text-align: center;
      border-radius: 4px;
      padding: 6px 8px;
      font-size: 11px;
      font-weight: 500;
      line-height: 1.2;
      pointer-events: none;
      transition: opacity 120ms ease;
      white-space: nowrap;
    }
    .textwithtooltip:hover .tooltiptext {
      visibility: visible;
      opacity: 1;
    }
    ul.bullets { margin: 0; padding-left: 18px; list-style: disc outside; }
    ul.bullets li { margin: 4px 0; }
    ul.version-bullets {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 8px 28px;
      align-items: start;
      padding-left: 20px;
    }
    ul.version-bullets li {
      margin: 0;
      padding-right: 10px;
      min-width: 0;
    }
    @media (max-width: 760px) {
      ul.version-bullets { grid-template-columns: 1fr; }
    }
    table.spec { width:100%; border-collapse:collapse; font-size:14px; }
    table.spec th, table.spec td { border:1px solid #e5e7eb; text-align:left; padding:8px; vertical-align:top; }
    table.spec th { width:34%; font-weight:600; background:#f9fafb; }
    table.spec tr.spec-subsection th { background:#e6edf8; color:#662046; font-size:16px; padding-top:14px; padding-bottom:14px; border-top:2px solid #0E4194; }
    .pdp-new-content { position: relative; outline: 2px solid #2563eb; outline-offset: 2px; background: #eff6ff !important; }
    .pdp-new-badge {
      display: inline-flex; align-items: center; width: fit-content; margin: 0 6px 6px 0;
      border: 1px solid #93c5fd; border-radius: 999px; background: #dbeafe; color: #1d4ed8;
      padding: 2px 7px; font-size: 11px; font-weight: 800; letter-spacing: 0.02em; text-transform: uppercase;
    }
    .pdp-moved-content { position: relative; outline: 2px solid #d97706; outline-offset: 2px; background:#fffbeb !important; }
    .pdp-moved-badge {
      display:inline-flex; align-items:center; width:fit-content; margin:0 6px 6px 0;
      border:1px solid #f59e0b; border-radius:999px; background:#fef3c7; color:#92400e;
      padding:2px 7px; font-size:11px; font-weight:800; letter-spacing:0.02em; text-transform:uppercase;
    }
    .pdp-removed-placeholder, .pdp-removed-content {
      border:1px dashed #94a3b8; border-radius:7px; background:#f8fafc; color:#475569; padding:10px; margin-top:10px;
    }
    .pdp-removed-badge {
      display:inline-flex; margin:0 8px 0 0; border-radius:999px; background:#64748b; color:#fff;
      padding:2px 7px; font-size:11px; font-weight:800; letter-spacing:0.02em; text-transform:uppercase;
    }
  </style>
</head>
<body>
  <main class="container" id="approved-export-root" data-export-root="true">
    <div class="meta" id="export-meta">CTN: ${n(r)} | ${n(o)} | Approved export</div>

    <section class="grid-2" id="header-grid" ${b("header-grid")}>
      <div id="hero-block" class="hero-carousel">
        <div class="hero-stage">
          ${ee?`<div class="hero-stage-image"><img class="hero" id="hero-image-0" ${h("hero-image")} src="${n(ee)}" alt="${n(r)} hero" />${Ee}</div>`:`<div class="hero" id="hero-image-0" ${h("hero-image")}>Image pending</div>`}
        </div>
        <div class="hero-thumbs" ${b("hero-carousel")}>${me}${ge}</div>
      </div>
      <div class="stack" id="header-text-column">
        <div id="brand-concept"><p class="label">Brand + PH-MT-Concept</p><p class="value" ${h("brand-concept")}>${w(n(ue),"Brand + PH-MT-Concept")}</p></div>
        <div id="descriptor"><p class="label">PH-MT-Descriptor</p><p class="value" ${h("descriptor")}>${w(n(be),"PH-MT-Descriptor")}</p></div>
        <div id="code-ctn"><p class="label">PH-Code-CTN</p><p class="value" ${h("code-ctn")}>${w(n(ve),"PH-Code-CTN")}</p></div>
        <div id="alphanumeric"><p class="label">PH-MT-Alphanumeric</p><p class="value" ${h("alphanumeric")}>${w(n(we),"PH-MT-Alphanumeric")}</p></div>
        <div id="header-wow" class="header-wow-block"><h1 class="wow" ${h("wow")}>${w(n(te),"PH-MT-WOW")}</h1></div>
        <div id="marketing"><p class="text" ${h("marketing-text")}>${w(n(ke),"PH-MT-MarketingText")}</p></div>
      </div>
    </section>

    <section class="marketing-headlines" id="marketing-headlines" ${b("marketing-headlines")}>
      <div id="wow" class="marketing-headline-block">
        <h1 class="wow" ${h("wow")}>${w(n(te),"PH-MT-WOW")}</h1>
      </div>
      <div id="subwow" class="marketing-headline-block">
        <p class="subwow" ${h("subwow")}>${w(n(ye),"PH-MT-SUBWOW")}</p>
      </div>
    </section>

    <section class="section" id="version-elements" ${b("version-elements")}>
      <ul class="bullets version-bullets">
        ${Te.map(t=>`<li id="version-attr-${t.id}" class="${H(t.isNew).trim()}" ${b("version-attr")} ${F(t.id)}>${N(t.isNew)}${w(n(t.value),`PH-MT-Version${t.id}`)}</li>`).join(`
`)}
      </ul>
    </section>

    <section class="section" id="features" ${b("features")}>
      <h3>Features</h3>
      <div class="cards">${Ie}</div>
    </section>

    <section class="section" id="specifications" ${b("specifications")}>
      <h3>Specifications</h3>
      <table class="spec"><tbody>${Ae}</tbody></table>
      ${He}
    </section>

    <section class="section" id="accessories" ${b("accessories")}>
      <h3>Included Accessories</h3>
      <div class="cards">${Fe}</div>
      ${Ne}
    </section>

    <section class="section" id="awards" ${b("awards")}>
      <h3>Awards</h3>
      <div class="cards">${Pe}</div>
      ${Se}
    </section>

    <section class="section" id="disclaimers" ${b("disclaimers")}>
      <h3>Disclaimers</h3>
      <ul class="bullets">${Ce}</ul>
      ${Me}
    </section>
  </main>
</body>
</html>`}function ce(e,r){const i=de((e==null?void 0:e.removalPins)??[]);return i.length?i.map(o=>{const a=_(o.x)*100,p=_(o.y)*100,m=o.label||"?";return`<span class="pdp-removal-pin${r?" pdp-removal-pin--compact":""}" data-pdp-removal-pin="${n(m)}" style="left:${a}%;top:${p}%;" title="Removal marker ${n(m)}">${n(m)}</span>`}).join(""):""}async function dt(e){var m,c;const r=await Oe({mode:"load",derivativeType:e.derivativeType,ctn:e.ctn,changelogVersion:e.versionNumber,pdpName:e.pdpName,asanaTaskGid:e.taskGid,templateRegistryTaskGid:null,v3Manifest:(m=e.sourceRow)==null?void 0:m.v3Manifest,activeV3PackageId:((c=e.sourceRow)==null?void 0:c.v3PackageId)??null}),i=await We(e.taskGid,e.sourceRow),o={ctn:e.ctn,pdpName:e.pdpName,derivativeType:e.derivativeType,formData:r.formData,template:r.syntheticTemplate,heroAssets:r.heroAssets,approvedImages:r.approvedImages,approvedTextItems:r.approvedTextItems,specItems:r.specItems,accessoryItems:r.accessoryItems,awardItems:r.awardItems,disclaimerItems:r.disclaimerItems,includeTooltipMarkup:e.includeTooltipMarkup,includeChangeMarkers:!0},a=Ve(Y(o),o),p=await at(e,r.extensions);return{htmlPreview:a,baselinePreview:(p==null?void 0:p.html)??Y({ctn:e.ctn,pdpName:e.pdpName,derivativeType:e.derivativeType,formData:r.formData,template:r.syntheticTemplate,heroAssets:r.heroAssets,approvedImages:{},approvedTextItems:{},specItems:r.specItems,accessoryItems:r.accessoryItems,awardItems:r.awardItems,disclaimerItems:r.disclaimerItems,includeTooltipMarkup:e.includeTooltipMarkup}),baselineLabel:(p==null?void 0:p.label)??"See Original - Reconstructed from saved source data",changeSummaryRows:i.changeSummaryRows,details:i}}async function at(e,r){var a,p;const i=rt(r),o=Be();if(!i||!o)return null;try{const m=await De(i),c=ze(m),s=(p=(a=c.get(o))==null?void 0:a.text_value)==null?void 0:p.trim();if(!s)return null;const g=Re(JSON.parse(s),{derivativeType:e.derivativeType,ctn:it(c,Ge())||e.ctn,changelogVersion:e.versionNumber});return{label:"See Original - Derivative HTML Registry JSON",html:Y({ctn:e.ctn,pdpName:e.pdpName,derivativeType:e.derivativeType,formData:g.formData,template:g.syntheticTemplate,heroAssets:g.heroAssets,approvedImages:{},approvedTextItems:{},specItems:g.specItems,accessoryItems:g.accessoryItems,awardItems:g.awardItems,disclaimerItems:g.disclaimerItems,includeTooltipMarkup:e.includeTooltipMarkup})}}catch{return null}}function rt(e){const r=Z(e==null?void 0:e.htmlDelta),i=Z(r==null?void 0:r.source);return U(i,["templateTaskGid"])||U(r,["templateTaskGid"])||U(e==null?void 0:e.htmlRegistrySource,["templateTaskGid"])||U(e==null?void 0:e.htmlImport,["templateTaskGid"])||U(e==null?void 0:e.asana,["templateTaskGid"])}function it(e,r){var o,a;return((a=(o=e.get(r))==null?void 0:o.text_value)==null?void 0:a.trim())||null}function U(e,r){const i=Z(e);if(!i)return null;for(const o of r){const a=typeof i[o]=="string"||typeof i[o]=="number"?String(i[o]).trim():"";if(a)return a}return null}function Z(e){return e&&typeof e=="object"&&!Array.isArray(e)?e:null}export{dt as buildLoadPackagePreview};
