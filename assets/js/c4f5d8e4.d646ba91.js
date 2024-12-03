"use strict";(self.webpackChunkdrex_guide=self.webpackChunkdrex_guide||[]).push([[2634],{192:(e,s,i)=>{i.r(s),i.d(s,{default:()=>m});var a=i(6540),c=i(8244),o=i(4586),n=i(6025),l=i(5648),t=i(5183),r=i(5476),d=i(4848);const u=()=>(0,d.jsxs)("div",{className:l.A.techBackground,children:[(0,d.jsx)("div",{className:l.A.blockchainContainer,children:(0,d.jsx)("div",{className:l.A.blockchainGrid,children:[...Array(8)].map(((e,s)=>(0,d.jsxs)("div",{className:l.A.blockWrapper,children:[(0,d.jsx)("div",{className:l.A.block,children:(0,d.jsxs)("div",{className:l.A.blockContent,children:[(0,d.jsxs)("div",{className:l.A.blockHeader,children:[(0,d.jsxs)("span",{className:l.A.blockHash,children:["#F",Math.floor(9999*Math.random())]}),(0,d.jsxs)("div",{className:l.A.blockDots,children:[(0,d.jsx)("span",{className:l.A.blockDot}),(0,d.jsx)("span",{className:l.A.blockDot}),(0,d.jsx)("span",{className:l.A.blockDot})]})]}),(0,d.jsxs)("div",{className:l.A.blockBody,children:[(0,d.jsx)("div",{className:l.A.blockLine}),(0,d.jsx)("div",{className:l.A.blockLine}),(0,d.jsx)("div",{className:l.A.blockLine})]})]})}),(0,d.jsx)("div",{className:l.A.connector})]},s)))})}),(0,d.jsxs)("div",{className:l.A.circles,children:[(0,d.jsx)("div",{className:l.A.circle1}),(0,d.jsx)("div",{className:l.A.circle2})]}),(0,d.jsx)("div",{className:l.A.coin,children:"R$"}),(0,d.jsx)("div",{className:l.A.coin2,children:"DRX"})]});function m(){const{siteConfig:e}=(0,o.A)(),[s,i]=(0,a.useState)(""),[m,b]=(0,a.useState)("");(0,a.useEffect)((()=>{"undefined"!=typeof window&&r.Ay.init("phc_CzCsR8kLTf58Wbn9QMIGvHzlXMfZJJHocnHoPwwTrac",{api_host:"https://eu.i.posthog.com",person_profiles:"identified_only",capture_pageview:!1})}),[]);return(0,d.jsx)(c.A,{title:`Welcome to ${e.title}`,description:"Your comprehensive guide to Brazil's CBDC",children:(0,d.jsxs)("main",{className:l.A.main,children:[(0,d.jsx)(u,{}),(0,d.jsxs)("div",{className:l.A.hero,children:[(0,d.jsxs)("div",{className:l.A.headerContainer,children:[(0,d.jsxs)("div",{className:l.A.logoTitleGroup,children:[(0,d.jsx)("img",{src:(0,n.Ay)("/img/logo_drexguide.png"),alt:"DREX Guide Logo",className:l.A.logo}),(0,d.jsxs)("div",{className:l.A.titleSubtitleGroup,children:[(0,d.jsx)("h1",{className:l.A.title,children:"The DREX Guide"}),(0,d.jsx)("p",{className:l.A.subtitle,children:"Learn everything about Digital Brazilian Real (CBDC)"})]})]}),(0,d.jsx)("div",{className:l.A.disclaimerBanner,children:(0,d.jsx)("span",{className:l.A.disclaimerText,children:"\u24d8 This is an independent guide and is not affiliated with Banco Central do Brasil"})})]}),(0,d.jsxs)("div",{className:l.A.subscribeSection,children:[(0,d.jsxs)("form",{onSubmit:async a=>{a.preventDefault(),b("sending"),r.Ay.capture("subscribe_button_clicked",{location:"home_page",email:s});try{console.log("Supabase URL:",e.customFields.supabaseUrl),console.log("Supabase Key exists:",!!e.customFields.supabaseAnonKey);const a=(()=>{if("undefined"==typeof window)return null;const s=e.customFields.supabaseUrl,i=e.customFields.supabaseAnonKey;return s&&i?(0,t.UU)(s,i):(console.error("Missing Supabase credentials"),null)})();if(!a)return console.error("Failed to initialize Supabase client"),void b("error");console.log("Attempting to insert email:",s);const{data:c,error:o}=await a.from("subscribers").insert([{email:s}]).select();if(o){if(console.error("Supabase error details:",o),"23505"===o.code)return b("error"),void alert("This email is already subscribed.");throw o}console.log("Success:",c),b("success"),i("")}catch(c){console.error("Full error details:",c),b("error")}},className:l.A.subscribeForm,children:[(0,d.jsx)("input",{type:"email",value:s,onChange:e=>i(e.target.value),placeholder:"Enter your email to stay informed",required:!0,className:l.A.emailInput}),(0,d.jsx)("button",{type:"submit",className:l.A.subscribeButton,children:"Subscribe"})]}),"success"===m&&(0,d.jsx)("p",{className:l.A.successMessage,children:"Thanks for subscribing!"}),"error"===m&&(0,d.jsx)("p",{className:l.A.errorMessage,children:"Something went wrong. Please try again later."})]}),(0,d.jsx)("div",{className:l.A.ctaSection,children:(0,d.jsxs)("a",{href:"/docs/intro",className:l.A.ctaButton,children:[(0,d.jsx)("span",{className:l.A.ctaText,children:"Explore the Guide"}),(0,d.jsx)("span",{className:l.A.ctaArrow,children:"\u2192"})]})}),(0,d.jsxs)("div",{className:l.A.contentSection,children:[(0,d.jsxs)("div",{className:l.A.textContent,children:[(0,d.jsx)("h2",{className:l.A.sectionTitle,children:"Brazilian Digital Currency Revolution"}),(0,d.jsx)("p",{className:l.A.introText,children:"Brazil continues to revolutionize the global financial landscape, standing firmly at the forefront of digital innovation. Following the remarkable success of PIX - the instant payment system, and the implementation of Open Finance, Brazil is now embarking on its next transformative journey: DREX, the digital version of the Brazilian Real."})]}),(0,d.jsx)("div",{className:l.A.brazilMapContainer,children:(0,d.jsx)("img",{src:(0,n.Ay)("/img/map.png"),alt:"Brazil Map",className:l.A.brazilMap})})]})]})]})})}},5648:(e,s,i)=>{i.d(s,{A:()=>a});const a={heroBanner:"heroBanner_qdFl",buttons:"buttons_AeoN",main:"main_iUjq",hero:"hero_aEcG",headerContainer:"headerContainer_Dcc3",logoTitleGroup:"logoTitleGroup_qGq2",titleSubtitleGroup:"titleSubtitleGroup_VsrO",logo:"logo_Ukns",titleWrapper:"titleWrapper_PWv8",title:"title_GqtP",subtitle:"subtitle_RlPM",description:"description_meEo",subscribeSection:"subscribeSection_qkBE",subscribeForm:"subscribeForm_A7nS",emailInput:"emailInput_wW4s",subscribeButton:"subscribeButton_Behe",successMessage:"successMessage_E2ip",errorMessage:"errorMessage_WMHZ",disclaimerBanner:"disclaimerBanner_ZdyX",introSection:"introSection_cmW6",introText:"introText_PBmw",mainTitle:"mainTitle_PV0d",highlight:"highlight_NNsi",contentSection:"contentSection_pR6N",brazilMapContainer:"brazilMapContainer_bUlw",brazilMap:"brazilMap_IoV_",textContent:"textContent_WO5J",sectionTitle:"sectionTitle_Ut5p",techBackground:"techBackground_Qw1G",blockchainContainer:"blockchainContainer_H6gu",blockchainGrid:"blockchainGrid_o2wX",blockWrapper:"blockWrapper_dro8",block:"block_jbcv",pulse:"pulse_vKli",blockContent:"blockContent_hmyn",blockHeader:"blockHeader_iRfM",blockHash:"blockHash_J6p_",blockDots:"blockDots_iiRy",blockDot:"blockDot_h3Kt",blockBody:"blockBody_xCcg",blockLine:"blockLine_jH1g",connector:"connector_LFU9",circles:"circles_OsU5",circle1:"circle1_uIWk",circle2:"circle2_nWlH",float:"float_x2Lw",dots:"dots_B9Oo",coin:"coin_sQJG",coinFloat:"coinFloat_w_QB",coin2:"coin2_WuN4",coinFloat2:"coinFloat2_M4DB",ctaSection:"ctaSection_bmsv",ctaButton:"ctaButton_g0jw",ctaArrow:"ctaArrow_kCLa",disclaimerText:"disclaimerText_yzWp",darkPulse:"darkPulse__YVn"}}}]);