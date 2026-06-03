import{a4 as u,a5 as I,a6 as C,a7 as h,a8 as Pe,h as De,b as je,a9 as Oe,aa as ze,ab as We}from"./index-a7kgjkNn.js";import{l as Re}from"./loadPackagePreview-YOQJbPJk.js";function o(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function A(e,r=""){var n,a;return e?((a=(n=e.versionHistory)==null?void 0:n[e.versionHistory.length-1])==null?void 0:a.text)??e.yourVersion??e.originalText??r:r}function f(e,r,i,n){return n[e]?A(i,r):r}function se(e,r,i){const n=typeof i=="number"?i:Number(i);if(Number.isFinite(n)){const a=e.versionAttributes[n];return(a==null?void 0:a.originalText)!=null?a.originalText:r.marketing.versionAttributes[n-1]??""}return""}function U(e){var r,i;return e?((i=(r=e.versionHistory)==null?void 0:r[e.versionHistory.length-1])==null?void 0:i.url)??e.currentUrl??"":""}function V(e){var r,i;return e?((i=(r=e.versionHistory)==null?void 0:r[0])==null?void 0:i.url)??e.currentUrl??"":""}function W(e,r,i,n){return(e.some(m=>n[m])?U(r):V(r))||i}function D(e){return/(?:^|[-_])(?:new|added|\d{10,})(?:$|[-_])/i.test(String(e))}function T(e){return e?!String(e.originalText??"").trim()&&!!A(e).trim():!1}function F(e){return e?" pdp-new-content":""}function N(e){return e?'<span class="pdp-new-badge">New</span>':""}function E(e){return e?" pdp-moved-content":""}function M(e){return e?'<span class="pdp-moved-badge">Moved</span>':""}function Ge(e,r,i){const n=i.featureTitles[e],a=i.features[e],c=i.featureGlossaries[e],m=A(n,(r==null?void 0:r.title)??"").trim(),d=A(a,(r==null?void 0:r.description)??"").trim(),s=A(c,(r==null?void 0:r.glossary)??"").trim();return!r||D(e)||T(n)||T(a)||Ue(e)&&(Be(i.featureImages[e])||/^Feature\s+PBTFEA\d+$/i.test(m)||!d&&!s)}function P(e,r,i){return!!((e.sectionOrderChanges??[]).some(n=>n.kind===r&&n.rowId===i)||r==="specification"&&(e.specificationOrderChanges??[]).some(n=>n.rowId===i))}function R(e,r){return(e.sectionRemovalLog??[]).filter(i=>i.kind===r)}function q(e){return`<div class="pdp-removed-placeholder" ${u("removed")} ${I(e.rowId)}><span class="pdp-removed-badge">Removed</span><strong>${o(e.label)}</strong></div>`}function y(e){return typeof CSS<"u"&&typeof CSS.escape=="function"?CSS.escape(e):e.replace(/["\\#.:,[\]>+~*'=|^$(){}!]/g,"\\$&")}function Be(e){return!String(U(e)||V(e)||(e==null?void 0:e.currentUrl)||"").trim()}function Ue(e){return/^PBTFEA\d+$/i.test(e)}function Le(e,r){var i,n,a,c;if(typeof DOMParser>"u")return e;try{const d=new DOMParser().parseFromString(e,"text/html");if(!d.documentElement)return e;qe(d);const{formData:s,template:g}=r;return $(d,C("brand-concept"),((i=s.headerBrandConcept)==null?void 0:i.originalText)??`${s.marketingBrand||"Philips"} · ${s.marketingConcept||g.concept}`.trim(),s.headerBrandConcept),$(d,C("descriptor"),((n=s.headerDescriptor)==null?void 0:n.originalText)??(s.marketingDescriptor||g.descriptor),s.headerDescriptor),$(d,C("code-ctn"),((a=s.headerCtn)==null?void 0:a.originalText)??(s.marketingCtn||g.ctn),s.headerCtn),$(d,C("alphanumeric"),((c=s.headerAlphanumeric)==null?void 0:c.originalText)??(s.marketingAlphanumeric||g.alphanumeric||g.ctn),s.headerAlphanumeric),$(d,C("wow"),g.marketing.wow,s.marketingWow),$(d,C("subwow"),g.marketing.subWow,s.marketingSubWow),$(d,C("marketing-text"),g.marketing.marketingText,s.marketingText),Object.entries(s.versionAttributes).forEach(([p,S])=>{$(d,`#${y(`version-attr-${p}`)}`,se(s,g,p),S)}),g.features.forEach(p=>{$(d,`#feature-title-${y(p.id)}`,p.title,s.featureTitles[p.id]),$(d,`#feature-text-${y(p.id)}`,p.description,s.features[p.id]),$(d,`#feature-glossary-${y(p.id)}`,p.glossary??"",s.featureGlossaries[p.id])}),r.specItems.forEach(p=>{$(d,`#spec-title-${y(p.id)}`,p.name,s.specificationTitles[p.id]),p.kind!=="subsection"&&$(d,`#spec-text-${y(p.id)}`,p.value,s.specifications[p.id])}),r.accessoryItems.forEach(p=>{$(d,`#accessory-title-${y(p.id)}`,p.name,s.accessoryConceptTitles[p.id]),$(d,`#accessory-text-${y(p.id)}`,p.value,s.accessories[p.id])}),r.awardItems.forEach(p=>{$(d,`#award-text-${y(p.id)}`,p.value,s.awards[p.id])}),r.disclaimerItems.forEach(p=>{$(d,`#disclaimer-${y(String(p.id))}`,p.text,s.disclaimers[p.id])}),Ve(d,r),`<!doctype html>
${d.documentElement.outerHTML}`}catch{return e}}function qe(e){const r=e.createElement("style");r.textContent=`
    .pdp-redline-old,
    .pdp-redline-new {
      display: inline;
      border-radius: 3px;
      padding: 0 3px;
      margin: 0 1px;
      box-decoration-break: clone;
      -webkit-box-decoration-break: clone;
    }
    .pdp-redline-old {
      background: #f1f5f9;
      color: #475569;
      box-shadow: inset 0 0 0 1px #cbd5e1;
      font-weight: 700;
      text-decoration: line-through;
      text-decoration-thickness: 1px;
      text-decoration-color: #64748b;
    }
    .pdp-redline-new {
      background: #dcfce7;
      color: #14532d;
      box-shadow: inset 0 -2px 0 #86efac;
      font-weight: 700;
    }
    .pdp-copy-change-summary {
      display: inline-flex;
      align-items: center;
      width: fit-content;
      margin: 6px 0 0 8px;
      border: 1px solid rgba(14,65,148,0.22);
      border-radius: 999px;
      background: #fff;
      color: #0E4194;
      padding: 2px 7px;
      font-size: 11px;
      font-weight: 800;
      line-height: 1.2;
      vertical-align: middle;
    }
    .pdp-copy-change-details {
      margin: 8px 0 0;
      border: 1px solid #e2e8f0;
      border-radius: 7px;
      background: #f8fafc;
      color: #475569;
      padding: 8px 10px;
      font-size: 12px;
      line-height: 1.45;
    }
    .pdp-copy-change-details summary {
      cursor: pointer;
      color: #0E4194;
      font-weight: 800;
    }
    .pdp-copy-change-details div {
      margin-top: 6px;
      white-space: pre-wrap;
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
    .pdp-change-marker--added {
      --pdp-change-accent: #16a34a;
      --pdp-change-outline: #22c55e;
      --pdp-change-bg: linear-gradient(90deg, rgba(240,253,244,0.98), rgba(255,255,255,0.94));
      --pdp-change-shadow: rgba(22,163,74,0.65);
      --pdp-change-badge-border: #86efac;
      --pdp-change-badge-bg: #f0fdf4;
      --pdp-change-badge-color: #166534;
    }
    .pdp-change-marker--removed {
      --pdp-change-accent: #dc2626;
      --pdp-change-outline: #ef4444;
      --pdp-change-bg: linear-gradient(90deg, rgba(254,242,242,0.98), rgba(255,255,255,0.94));
      --pdp-change-shadow: rgba(220,38,38,0.62);
      --pdp-change-badge-border: #fca5a5;
      --pdp-change-badge-bg: #fef2f2;
      --pdp-change-badge-color: #991b1b;
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
  `,e.head.appendChild(r)}function $(e,r,i,n){const a=A(n,i);if(!n||a===i)return;const c=Ze(i,a),m=Ke(i,a,c);Array.from(e.querySelectorAll(r)).forEach(s=>{var p,S;const g=(S=(p=s.querySelector(".tooltiptext"))==null?void 0:p.textContent)==null?void 0:S.trim();s.classList.add("pdp-change-marker",`pdp-change-marker--${c}`),s.setAttribute("data-pdp-change-label",c==="added"?"Added":c==="removed"?"Removed":"Changed"),s.innerHTML=g?`<span class="textwithtooltip">${m.finalHtml}<span class="tooltiptext">${o(g)}</span></span>${m.summaryHtml}`:`${m.finalHtml}${m.summaryHtml}`,m.detailsHtml&&s.insertAdjacentHTML("afterend",m.detailsHtml)})}function Ve(e,r){Object.entries(r.heroAssets??{}).forEach(([i,n])=>{i==="0"&&G(e,"#hero-block",n),G(e,`#hero-thumb-${Number(i)}`,n)}),Object.entries(r.formData.featureImages??{}).forEach(([i,n])=>{G(e,`#feature-${y(i)}`,n)}),Object.entries(r.formData.accessoryImages??{}).forEach(([i,n])=>{G(e,`#accessory-${y(i)}`,n)}),Object.entries(r.formData.awardImages??{}).forEach(([i,n])=>{G(e,`#award-${y(i)}`,n)})}function G(e,r,i,n){if(!i||!Je(i))return;const a=e.querySelector(r);if(!a||a.querySelector(".pdp-image-change-note"))return;const c=U(i),m=a.matches("img")?a:a.querySelector("img");c&&m instanceof HTMLImageElement&&(m.src=c);const d=_e(i);a.classList.add("pdp-image-change",`pdp-image-change--${d.className}`),a.setAttribute("data-pdp-image-request-kind",d.key)}function Je(e){return e.status==="amended"||e.versionHistory.length>1||e.thread.length>0}function _e(e){const r=e.versionHistory.length>1||!!(V(e)&&U(e)&&V(e)!==U(e)),i=e.thread.some(n=>{var a,c;return!!((a=n.message)!=null&&a.trim())&&!((c=n.assetUrl)!=null&&c.trim())});return r&&i?{key:"new-image-brief",className:"new-brief"}:r?{key:"new-image",className:"new"}:{key:"brief-only",className:"brief"}}function Ke(e,r,i){const n=J(e),c=J(r)-n,m=i==="added"?`Added copy · +${c} words`:i==="removed"?`Removed copy · ${c} words`:`Copy changed · ${c>=0?"+":""}${c} words`,d=Xe(e,r),s=r.trim()?d?o(r):Qe(e,r):'<span class="pdp-copy-removed-final">Copy removed from preview</span>',g=d||i==="removed"||c<0;return{finalHtml:s,summaryHtml:`<span class="pdp-copy-change-summary">${o(m)}</span>`,detailsHtml:g&&e.trim()?`<details class="pdp-copy-change-details"><summary>Original copy</summary><div>${o(e)}</div></details>`:""}}function Xe(e,r){const i=J(e),n=J(r);if(i>=18&&Math.abs(n-i)>=8)return!0;const a=Ye(e,r),c=Math.max(i,n)-a;return i>=18&&c/Math.max(i,n,1)>.35}function Qe(e,r){const i=_(e),n=r.split(/(\s+)/),a=n.filter(d=>d.trim()),c=de(i,a);let m=-1;return n.map(d=>!d.trim()||(m+=1,c.has(m))?o(d):`<span class="pdp-redline-new">${o(d)}</span>`).join("")}function J(e){return _(e).length}function _(e){return String(e??"").match(/\S+/g)??[]}function Ye(e,r){return de(_(e),_(r)).size}function de(e,r){const i=e.map(ne),n=r.map(ne),a=Array.from({length:i.length+1},()=>Array(n.length+1).fill(0));for(let s=i.length-1;s>=0;s-=1)for(let g=n.length-1;g>=0;g-=1)a[s][g]=i[s]===n[g]?a[s+1][g+1]+1:Math.max(a[s+1][g],a[s][g+1]);const c=new Set;let m=0,d=0;for(;m<i.length&&d<n.length;)i[m]===n[d]?(c.add(d),m+=1,d+=1):a[m+1][d]>=a[m][d+1]?m+=1:d+=1;return c}function ne(e){return e.toLowerCase().replace(/^[^\p{L}\p{N}]+|[^\p{L}\p{N}]+$/gu,"")}function Ze(e,r){const i=e.split(/(\s+)/),n=r.split(/(\s+)/),a=Math.max(i.length,n.length);let c=!1,m=!1;for(let d=0;d<a;d+=1){const s=i[d]||"",g=n[d]||"";s!==g&&(s.trim()&&(m=!0),g.trim()&&(c=!0))}return c&&!m?"added":m&&!c?"removed":"mixed"}function Q(e){var te,ae,re,ie,oe;const{ctn:r,pdpName:i,derivativeType:n,formData:a,template:c,heroAssets:m,approvedImages:d,approvedTextItems:s,specItems:g,accessoryItems:p,awardItems:S,disclaimerItems:ce,includeTooltipMarkup:K=!1,includeChangeMarkers:b=!1}=e,x=(t,l)=>K?`<span class="textwithtooltip">${t}<span class="tooltiptext">${o(l)}</span></span>`:t,pe=Array.from(new Set([...c.heroImages.map((t,l)=>l),...Object.keys(m).map(t=>Number(t)).filter(t=>Number.isFinite(t))])).sort((t,l)=>t-l),Z=W(["hero-0"],m[0],c.heroImages[0]??"",d),le=pe.map(t=>{const l=W([`hero-${t}`],m[t],c.heroImages[t]??"",d),v=`Carousel image ${t+1}`;return`<div class="hero-thumb" id="hero-thumb-${t}" ${u("hero-image")} ${I(t)}>
        ${l?`<img src="${o(l)}" alt="${o(v)}" />`:'<div class="hero-thumb-placeholder">Image pending</div>'}
        <span>${o(v)}</span>
      </div>`}).join(`
`),me=R(a,"hero").map(t=>`<div class="hero-thumb pdp-removed-content" id="hero-removed-${o(t.rowId)}" ${u("removed-hero")} ${I(t.rowId)}><div class="hero-thumb-placeholder">Removed</div><span>${o(t.label)}</span></div>`).join(`
`),ge=((te=a.headerBrandConcept)==null?void 0:te.originalText)??`${a.marketingBrand||"Philips"} · ${a.marketingConcept||c.concept}`.trim(),he=f("brand-concept",ge,a.headerBrandConcept,s),ue=((ae=a.headerDescriptor)==null?void 0:ae.originalText)??(a.marketingDescriptor||c.descriptor),fe=f("marketing-descriptor",ue,a.headerDescriptor,s),be=((re=a.headerCtn)==null?void 0:re.originalText)??(a.marketingCtn||c.ctn),xe=f("marketing-ctn",be,a.headerCtn,s),$e=((ie=a.headerAlphanumeric)==null?void 0:ie.originalText)??(a.marketingAlphanumeric||c.alphanumeric||c.ctn),ve=f("marketing-alphanumeric",$e,a.headerAlphanumeric,s),ee=f("wow",c.marketing.wow,a.marketingWow,s),we=f("subwow",c.marketing.subWow,a.marketingSubWow,s),ye=f("marketing",c.marketing.marketingText,a.marketingText,s),ke=Object.keys(a.versionAttributes).map(t=>Number(t)).filter(t=>Number.isFinite(t)).sort((t,l)=>t-l).map(t=>{const l=se(a,c,t);return{id:t,value:f(`version-attr-${t}`,l,a.versionAttributes[t],s),isNew:b&&T(a.versionAttributes[t])}}),Te=(((oe=a.featureOrder)==null?void 0:oe.length)>0?a.featureOrder:c.features.map(t=>t.id)).map(t=>{const l=c.features.find(Me=>Me.id===t),v=(l==null?void 0:l.title)??"New feature",w=(l==null?void 0:l.description)??"",k=(l==null?void 0:l.glossary)??"",H=l?f(`feature-title-${t}`,v,a.featureTitles[t],s):A(a.featureTitles[t],v),X=l?f(`feature-text-${t}`,w,a.features[t],s):A(a.features[t],w),j=l?f(`feature-glossary-${t}`,k,a.featureGlossaries[t],s):A(a.featureGlossaries[t],k),O=W([`feature-${t}`,`feature-image-${t}`],a.featureImages[t],(l==null?void 0:l.imageUrl)??"",d),z=b&&Ge(t,l,a),L=b&&P(a,"feature",t);return`
        <article class="card${F(z)}${E(L)}" id="feature-${o(t)}" ${u("feature")} ${I(t)}>
          ${N(z)}${M(L)}
          ${O?`<img class="feature-img" id="feature-image-${o(t)}" ${h("feature-image")} src="${o(O)}" alt="${o(H)}" />`:`<div class="feature-img feature-img-placeholder" id="feature-image-${o(t)}" ${h("feature-image")}>Image pending</div>`}
          <h4 id="feature-title-${o(t)}" ${h("feature-title")}>${x(o(H),"PH-FEA-Description")}</h4>
          <p id="feature-text-${o(t)}" ${h("feature-text")}>${x(o(X),"PH-FEA-Description")}</p>
          ${j.trim()?`<p id="feature-glossary-${o(t)}" ${h("feature-glossary")}>${x(o(j),"PH-FEA-Glossary")}</p>`:""}
        </article>
      `}).join(`
`),Ie=g.map(t=>{if(t.kind==="subsection"){const j=f(`spec-title-${t.id}`,t.name,a.specificationTitles[t.id],s),O=b&&(D(t.id)||T(a.specificationTitles[t.id])),z=b&&P(a,"specification",t.id),L=t.titleTooltip?`<span class="textwithtooltip">${o(j)}<span class="tooltiptext">${o(t.titleTooltip)}</span></span>`:o(j);return`<tr id="spec-row-${o(t.id)}" class="spec-subsection${F(O)}${E(z)}" ${u("spec-subsection")}><th colspan="2" scope="colgroup">${N(O)}${M(z)}${L}</th></tr>`}const l=f(`spec-title-${t.id}`,t.name,a.specificationTitles[t.id],s),v=f(t.id,t.value,a.specifications[t.id],s),w=b&&(D(t.id)||T(a.specificationTitles[t.id])||T(a.specifications[t.id])),k=b&&P(a,"specification",t.id),H=t.attributeTooltip&&K?`<span class="textwithtooltip">${o(l)}<span class="tooltiptext">${o(t.attributeTooltip)}</span></span>`:o(l),X=t.valueTooltip&&K?`<span class="textwithtooltip">${o(v)}<span class="tooltiptext">${o(t.valueTooltip)}</span></span>`:o(v);return`<tr id="spec-row-${o(t.id)}" class="${`${F(w)}${E(k)}`.trim()}" ${u("specification")} ${I(t.id)}><th id="spec-title-${o(t.id)}" ${h("spec-title")}>${N(w)}${M(k)}${H}</th><td id="spec-text-${o(t.id)}" ${h("spec-text")}>${X}</td></tr>`}).join(`
`),Ae=p.map(t=>{const l=f(`accessory-title-${t.id}`,t.name,a.accessoryConceptTitles[t.id],s),v=f(`accessory-text-${t.id}`,t.value,a.accessories[t.id],s),w=W([`accessory-${t.id}`,t.id],a.accessoryImages[t.id],"",d),k=b&&(D(t.id)||T(a.accessoryConceptTitles[t.id])||T(a.accessories[t.id])),H=b&&P(a,"accessory",t.id);return`
        <article class="card${F(k)}${E(H)}" id="accessory-${o(t.id)}" ${u("accessory")} ${I(t.id)}>
          ${N(k)}${M(H)}
          ${w?`<img class="feature-img" id="accessory-image-${o(t.id)}" ${h("accessory-image")} src="${o(w)}" alt="${o(l)}" />`:`<div class="feature-img feature-img-placeholder" id="accessory-image-${o(t.id)}" ${h("accessory-image")}>Image pending</div>`}
          <h4 id="accessory-title-${o(t.id)}" ${h("accessory-title")}>${x(o(l),"PH-MT-Concept")}</h4>
          <p id="accessory-text-${o(t.id)}" ${h("accessory-text")}>${x(o(v),"Name")}</p>
        </article>
      `}).join(`
`),He=S.map(t=>{const l=f(`award-text-${t.id}`,t.value,a.awards[t.id],s),v=W([`award-${t.id}`,t.id],a.awardImages[t.id],"",d),w=b&&(D(t.id)||T(a.awards[t.id])),k=b&&P(a,"award",t.id);return`
        <article class="card${F(w)}${E(k)}" id="award-${o(t.id)}" ${u("award")} ${I(t.id)}>
          ${N(w)}${M(k)}
          ${v?`<img class="feature-img" id="award-image-${o(t.id)}" ${h("award-image")} src="${o(v)}" alt="${o(t.name)}" />`:`<div class="feature-img feature-img-placeholder" id="award-image-${o(t.id)}" ${h("award-image")}>Image pending</div>`}
          <h4 id="award-title-${o(t.id)}" ${h("award-title")}>${x(o(t.name),"PH-FEA-Description")}</h4>
          <p id="award-text-${o(t.id)}" ${h("award-text")}>${x(o(l),"PH-FEA-Description")}</p>
        </article>
      `}).join(`
`),Ce=ce.map(t=>{const l=f(`disclaimer-${t.id}`,t.text,a.disclaimers[t.id],s),v=b&&(D(t.id)||T(a.disclaimers[t.id])),w=b&&P(a,"disclaimer",String(t.id));return`<li id="disclaimer-${String(t.id)}" class="${`${F(v)}${E(w)}`.trim()}" ${u("disclaimer")} ${I(t.id)}>${N(v)}${M(w)}${x(o(l),"Disclaimer")}</li>`}).join(`
`),Fe=b?R(a,"specification").map(q).join(`
`):"",Ne=b?R(a,"accessory").map(q).join(`
`):"",Se=b?R(a,"award").map(q).join(`
`):"",Ee=b?R(a,"disclaimer").map(q).join(`
`):"";return`<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${o(i)} - Approved Export</title>
  <style>
    body { margin:0; font-family: Arial, Helvetica, sans-serif; color:#1f2937; background:#fff; }
    .container { max-width: 1080px; margin: 20px auto 40px; padding: 0 12px; }
    .meta { font-size: 12px; color:#6b7280; margin-bottom: 12px; }
    .grid-2 { display:grid; grid-template-columns: 1fr 1fr; gap:24px; align-items:start; }
    .hero { width:100%; height:360px; object-fit:contain; background:#f5f5f5; border-radius:6px; }
    .hero-carousel { display:flex; flex-direction:column; gap:10px; }
    .hero-thumbs { display:grid; grid-template-columns: repeat(auto-fill,minmax(92px,1fr)); gap:8px; }
    .hero-thumb { min-height:84px; border:1px solid #e5e7eb; border-radius:7px; padding:6px; background:#fff; font-size:11px; font-weight:700; color:#4b5563; display:flex; flex-direction:column; gap:5px; }
    .hero-thumb img, .hero-thumb-placeholder { width:100%; height:50px; border-radius:5px; background:#f3f4f6; object-fit:contain; display:flex; align-items:center; justify-content:center; color:#6b7280; }
    .hero-thumb span { line-height:1.15; }
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
    <div class="meta" id="export-meta">CTN: ${o(r)} | ${o(n)} | Approved export</div>

    <section class="grid-2" id="header-grid" ${u("header-grid")}>
      <div id="hero-block" class="hero-carousel">
        ${Z?`<img class="hero" id="hero-image-0" ${h("hero-image")} src="${o(Z)}" alt="${o(r)} hero" />`:`<div class="hero" id="hero-image-0" ${h("hero-image")}>Image pending</div>`}
        <div class="hero-thumbs" ${u("hero-carousel")}>${le}${me}</div>
      </div>
      <div class="stack" id="header-text-column">
        <div id="brand-concept"><p class="label">Brand + PH-MT-Concept</p><p class="value" ${h("brand-concept")}>${x(o(he),"Brand + PH-MT-Concept")}</p></div>
        <div id="descriptor"><p class="label">PH-MT-Descriptor</p><p class="value" ${h("descriptor")}>${x(o(fe),"PH-MT-Descriptor")}</p></div>
        <div id="code-ctn"><p class="label">PH-Code-CTN</p><p class="value" ${h("code-ctn")}>${x(o(xe),"PH-Code-CTN")}</p></div>
        <div id="alphanumeric"><p class="label">PH-MT-Alphanumeric</p><p class="value" ${h("alphanumeric")}>${x(o(ve),"PH-MT-Alphanumeric")}</p></div>
        <div id="header-wow" class="header-wow-block"><h1 class="wow" ${h("wow")}>${x(o(ee),"PH-MT-WOW")}</h1></div>
        <div id="marketing"><p class="text" ${h("marketing-text")}>${x(o(ye),"PH-MT-MarketingText")}</p></div>
      </div>
    </section>

    <section class="marketing-headlines" id="marketing-headlines" ${u("marketing-headlines")}>
      <div id="wow" class="marketing-headline-block">
        <h1 class="wow" ${h("wow")}>${x(o(ee),"PH-MT-WOW")}</h1>
      </div>
      <div id="subwow" class="marketing-headline-block">
        <p class="subwow" ${h("subwow")}>${x(o(we),"PH-MT-SUBWOW")}</p>
      </div>
    </section>

    <section class="section" id="version-elements" ${u("version-elements")}>
      <ul class="bullets version-bullets">
        ${ke.map(t=>`<li id="version-attr-${t.id}" class="${F(t.isNew).trim()}" ${u("version-attr")} ${I(t.id)}>${N(t.isNew)}${x(o(t.value),`PH-MT-Version${t.id}`)}</li>`).join(`
`)}
      </ul>
    </section>

    <section class="section" id="features" ${u("features")}>
      <h3>Features</h3>
      <div class="cards">${Te}</div>
    </section>

    <section class="section" id="specifications" ${u("specifications")}>
      <h3>Specifications</h3>
      <table class="spec"><tbody>${Ie}</tbody></table>
      ${Fe}
    </section>

    <section class="section" id="accessories" ${u("accessories")}>
      <h3>Included Accessories</h3>
      <div class="cards">${Ae}</div>
      ${Ne}
    </section>

    <section class="section" id="awards" ${u("awards")}>
      <h3>Awards</h3>
      <div class="cards">${He}</div>
      ${Se}
    </section>

    <section class="section" id="disclaimers" ${u("disclaimers")}>
      <h3>Disclaimers</h3>
      <ul class="bullets">${Ce}</ul>
      ${Ee}
    </section>
  </main>
</body>
</html>`}async function st(e){const r=await Pe({mode:"load",derivativeType:e.derivativeType,ctn:e.ctn,changelogVersion:e.versionNumber,pdpName:e.pdpName,asanaTaskGid:e.taskGid,templateRegistryTaskGid:null}),i=await Re(e.taskGid,e.sourceRow),n={ctn:e.ctn,pdpName:e.pdpName,derivativeType:e.derivativeType,formData:r.formData,template:r.syntheticTemplate,heroAssets:r.heroAssets,approvedImages:r.approvedImages,approvedTextItems:r.approvedTextItems,specItems:r.specItems,accessoryItems:r.accessoryItems,awardItems:r.awardItems,disclaimerItems:r.disclaimerItems,includeTooltipMarkup:e.includeTooltipMarkup,includeChangeMarkers:!0},a=Le(Q(n),n),c=await et(e,r.extensions);return{htmlPreview:a,baselinePreview:(c==null?void 0:c.html)??Q({ctn:e.ctn,pdpName:e.pdpName,derivativeType:e.derivativeType,formData:r.formData,template:r.syntheticTemplate,heroAssets:r.heroAssets,approvedImages:{},approvedTextItems:{},specItems:r.specItems,accessoryItems:r.accessoryItems,awardItems:r.awardItems,disclaimerItems:r.disclaimerItems,includeTooltipMarkup:e.includeTooltipMarkup}),baselineLabel:(c==null?void 0:c.label)??"See Original - Reconstructed from saved source data",changeSummaryRows:i.changeSummaryRows,details:i}}async function et(e,r){var a,c;const i=tt(r),n=We();if(!i||!n)return null;try{const m=await De(i),d=je(m),s=(c=(a=d.get(n))==null?void 0:a.text_value)==null?void 0:c.trim();if(!s)return null;const g=Oe(JSON.parse(s),{derivativeType:e.derivativeType,ctn:at(d,ze())||e.ctn,changelogVersion:e.versionNumber});return{label:"See Original - Template Registry JSON",html:Q({ctn:e.ctn,pdpName:e.pdpName,derivativeType:e.derivativeType,formData:g.formData,template:g.syntheticTemplate,heroAssets:g.heroAssets,approvedImages:{},approvedTextItems:{},specItems:g.specItems,accessoryItems:g.accessoryItems,awardItems:g.awardItems,disclaimerItems:g.disclaimerItems,includeTooltipMarkup:e.includeTooltipMarkup})}}catch{return null}}function tt(e){const r=Y(e==null?void 0:e.htmlDelta),i=Y(r==null?void 0:r.source);return B(i,["templateTaskGid"])||B(r,["templateTaskGid"])||B(e==null?void 0:e.htmlRegistrySource,["templateTaskGid"])||B(e==null?void 0:e.htmlImport,["templateTaskGid"])||B(e==null?void 0:e.asana,["templateTaskGid"])}function at(e,r){var n,a;return((a=(n=e.get(r))==null?void 0:n.text_value)==null?void 0:a.trim())||null}function B(e,r){const i=Y(e);if(!i)return null;for(const n of r){const a=typeof i[n]=="string"||typeof i[n]=="number"?String(i[n]).trim():"";if(a)return a}return null}function Y(e){return e&&typeof e=="object"&&!Array.isArray(e)?e:null}export{st as buildLoadPackagePreview};
