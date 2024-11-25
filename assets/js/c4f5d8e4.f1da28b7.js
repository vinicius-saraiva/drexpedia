"use strict";(self.webpackChunkdrex_guide=self.webpackChunkdrex_guide||[]).push([[634],{192:(e,s,i)=>{i.r(s),i.d(s,{default:()=>u});var a=i(6540),c=i(781),l=i(4586),n=i(6025),o=i(5648),t=i(5183),r=i(4848);const d=()=>(0,r.jsxs)("div",{className:o.A.techBackground,children:[(0,r.jsx)("div",{className:o.A.blockchainContainer,children:(0,r.jsx)("div",{className:o.A.blockchainGrid,children:[...Array(8)].map(((e,s)=>(0,r.jsxs)("div",{className:o.A.blockWrapper,children:[(0,r.jsx)("div",{className:o.A.block,children:(0,r.jsxs)("div",{className:o.A.blockContent,children:[(0,r.jsxs)("div",{className:o.A.blockHeader,children:[(0,r.jsxs)("span",{className:o.A.blockHash,children:["#F",Math.floor(9999*Math.random())]}),(0,r.jsxs)("div",{className:o.A.blockDots,children:[(0,r.jsx)("span",{className:o.A.blockDot}),(0,r.jsx)("span",{className:o.A.blockDot}),(0,r.jsx)("span",{className:o.A.blockDot})]})]}),(0,r.jsxs)("div",{className:o.A.blockBody,children:[(0,r.jsx)("div",{className:o.A.blockLine}),(0,r.jsx)("div",{className:o.A.blockLine}),(0,r.jsx)("div",{className:o.A.blockLine})]})]})}),(0,r.jsx)("div",{className:o.A.connector})]},s)))})}),(0,r.jsxs)("div",{className:o.A.circles,children:[(0,r.jsx)("div",{className:o.A.circle1}),(0,r.jsx)("div",{className:o.A.circle2})]}),(0,r.jsx)("div",{className:o.A.coin,children:"R$"}),(0,r.jsx)("div",{className:o.A.coin2,children:"DRX"})]});function u(){const{siteConfig:e}=(0,l.A)(),[s,i]=(0,a.useState)(""),[u,m]=(0,a.useState)("");return(0,r.jsx)(c.A,{title:`Welcome to ${e.title}`,description:"Your comprehensive guide to Brazil's CBDC",children:(0,r.jsxs)("main",{className:o.A.main,children:[(0,r.jsx)(d,{}),(0,r.jsxs)("div",{className:o.A.hero,children:[(0,r.jsxs)("div",{className:o.A.headerContainer,children:[(0,r.jsxs)("div",{className:o.A.logoTitleGroup,children:[(0,r.jsx)("img",{src:(0,n.Ay)("/img/logo_drexguide.png"),alt:"DREX Guide Logo",className:o.A.logo}),(0,r.jsxs)("div",{className:o.A.titleSubtitleGroup,children:[(0,r.jsx)("h1",{className:o.A.title,children:"The DREX Guide"}),(0,r.jsx)("p",{className:o.A.subtitle,children:"Learn everything about Digital Brazilian Real (CBDC)"})]})]}),(0,r.jsx)("div",{className:o.A.disclaimerBanner,children:(0,r.jsx)("span",{className:o.A.disclaimerText,children:"\u24d8 This is an independent guide and is not affiliated with Banco Central do Brasil"})})]}),(0,r.jsxs)("div",{className:o.A.subscribeSection,children:[(0,r.jsxs)("form",{onSubmit:async a=>{a.preventDefault(),m("sending");try{console.log("Supabase URL:",e.customFields.supabaseUrl),console.log("Supabase Key exists:",!!e.customFields.supabaseAnonKey);const a=(()=>{if("undefined"==typeof window)return null;const s=e.customFields.supabaseUrl,i=e.customFields.supabaseAnonKey;return s&&i?(0,t.UU)(s,i):(console.error("Missing Supabase credentials"),null)})();if(!a)return console.error("Failed to initialize Supabase client"),void m("error");console.log("Attempting to insert email:",s);const{data:c,error:l}=await a.from("subscribers").insert([{email:s}]).select();if(l){if(console.error("Supabase error details:",l),"23505"===l.code)return m("error"),void alert("This email is already subscribed.");throw l}console.log("Success:",c),m("success"),i("")}catch(c){console.error("Full error details:",c),m("error")}},className:o.A.subscribeForm,children:[(0,r.jsx)("input",{type:"email",value:s,onChange:e=>i(e.target.value),placeholder:"Enter your email to stay informed",required:!0,className:o.A.emailInput}),(0,r.jsx)("button",{type:"submit",className:o.A.subscribeButton,children:"Subscribe"})]}),"success"===u&&(0,r.jsx)("p",{className:o.A.successMessage,children:"Thanks for subscribing! Please check your email to confirm."}),"error"===u&&(0,r.jsx)("p",{className:o.A.errorMessage,children:"Something went wrong. Please try again later."})]}),(0,r.jsx)("div",{className:o.A.ctaSection,children:(0,r.jsxs)("a",{href:"/docs/what-is-drex",className:o.A.ctaButton,children:[(0,r.jsx)("span",{className:o.A.ctaText,children:"Explore the Guide"}),(0,r.jsx)("span",{className:o.A.ctaArrow,children:"\u2192"})]})}),(0,r.jsxs)("div",{className:o.A.contentSection,children:[(0,r.jsxs)("div",{className:o.A.textContent,children:[(0,r.jsx)("h2",{className:o.A.sectionTitle,children:"Brazilian Digital Currency Revolution"}),(0,r.jsx)("p",{className:o.A.introText,children:"Brazil continues to revolutionize the global financial landscape, standing firmly at the forefront of digital innovation. Following the remarkable success of PIX - the instant payment system, and the implementation of Open Finance, Brazil is now embarking on its next transformative journey: DREX, the digital version of the Brazilian Real."})]}),(0,r.jsx)("div",{className:o.A.brazilMapContainer,children:(0,r.jsx)("img",{src:(0,n.Ay)("/img/map.png"),alt:"Brazil Map",className:o.A.brazilMap})})]})]})]})})}},5648:(e,s,i)=>{i.d(s,{A:()=>a});const a={heroBanner:"heroBanner_qdFl",buttons:"buttons_AeoN",main:"main_iUjq",hero:"hero_aEcG",headerContainer:"headerContainer_Dcc3",logoTitleGroup:"logoTitleGroup_qGq2",titleSubtitleGroup:"titleSubtitleGroup_VsrO",logo:"logo_Ukns",titleWrapper:"titleWrapper_PWv8",title:"title_GqtP",subtitle:"subtitle_RlPM",description:"description_meEo",subscribeSection:"subscribeSection_qkBE",subscribeForm:"subscribeForm_A7nS",emailInput:"emailInput_wW4s",subscribeButton:"subscribeButton_Behe",successMessage:"successMessage_E2ip",errorMessage:"errorMessage_WMHZ",disclaimerBanner:"disclaimerBanner_ZdyX",introSection:"introSection_cmW6",introText:"introText_PBmw",mainTitle:"mainTitle_PV0d",highlight:"highlight_NNsi",contentSection:"contentSection_pR6N",brazilMapContainer:"brazilMapContainer_bUlw",brazilMap:"brazilMap_IoV_",textContent:"textContent_WO5J",sectionTitle:"sectionTitle_Ut5p",techBackground:"techBackground_Qw1G",blockchainContainer:"blockchainContainer_H6gu",blockchainGrid:"blockchainGrid_o2wX",blockWrapper:"blockWrapper_dro8",block:"block_jbcv",pulse:"pulse_vKli",blockContent:"blockContent_hmyn",blockHeader:"blockHeader_iRfM",blockHash:"blockHash_J6p_",blockDots:"blockDots_iiRy",blockDot:"blockDot_h3Kt",blockBody:"blockBody_xCcg",blockLine:"blockLine_jH1g",connector:"connector_LFU9",circles:"circles_OsU5",circle1:"circle1_uIWk",circle2:"circle2_nWlH",float:"float_x2Lw",dots:"dots_B9Oo",coin:"coin_sQJG",coinFloat:"coinFloat_w_QB",coin2:"coin2_WuN4",coinFloat2:"coinFloat2_M4DB",ctaSection:"ctaSection_bmsv",ctaButton:"ctaButton_g0jw",ctaArrow:"ctaArrow_kCLa",disclaimerText:"disclaimerText_yzWp",darkPulse:"darkPulse__YVn"}}}]);