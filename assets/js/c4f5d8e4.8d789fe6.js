"use strict";(self.webpackChunkdrexpedia=self.webpackChunkdrexpedia||[]).push([[634],{192:(e,s,t)=>{t.r(s),t.d(s,{default:()=>o});var a=t(6540),i=t(781),r=t(4586),n=t(6025),c=t(5648),l=t(4848);function o(){const{siteConfig:e}=(0,r.A)(),[s,t]=(0,a.useState)(""),[o,u]=(0,a.useState)("");return(0,l.jsx)(i.A,{title:e.title,description:"The Complete DREX Knowledge Base",children:(0,l.jsx)("main",{className:c.A.main,children:(0,l.jsxs)("div",{className:c.A.hero,children:[(0,l.jsxs)("div",{className:c.A.headerContainer,children:[(0,l.jsx)("img",{src:(0,n.Ay)("/img/newlogo.png"),alt:"DREXpedia Logo",className:c.A.logo}),(0,l.jsxs)("div",{className:c.A.titleWrapper,children:[(0,l.jsx)("h1",{className:c.A.title,children:"DREXpedia"}),(0,l.jsx)("p",{className:c.A.subtitle,children:"Your Gateway to DREX Knowledge"})]})]}),(0,l.jsxs)("div",{className:c.A.subscribeSection,children:[(0,l.jsxs)("form",{onSubmit:async e=>{e.preventDefault(),u("sending");try{(await fetch("YOUR_MAILCHIMP_FORM_URL",{method:"POST",body:JSON.stringify({email:s}),headers:{"Content-Type":"application/json"}})).ok?(u("success"),t("")):u("error")}catch(a){u("error")}},className:c.A.subscribeForm,children:[(0,l.jsx)("input",{type:"email",value:s,onChange:e=>t(e.target.value),placeholder:"Enter your email to stay informed",required:!0,className:c.A.emailInput}),(0,l.jsx)("button",{type:"submit",className:c.A.subscribeButton,children:"Subscribe"})]}),"success"===o&&(0,l.jsx)("p",{className:c.A.successMessage,children:"Thanks for subscribing! Please check your email to confirm."}),"error"===o&&(0,l.jsx)("p",{className:c.A.errorMessage,children:"Something went wrong. Please try again later."})]}),(0,l.jsx)("p",{className:c.A.description,children:"Stay updated with the latest developments in Brazil's Digital Real project, including new use cases, regulatory updates, and technical implementations."})]})})})}},5648:(e,s,t)=>{t.d(s,{A:()=>a});const a={heroBanner:"heroBanner_qdFl",buttons:"buttons_AeoN",main:"main_iUjq",hero:"hero_aEcG",headerContainer:"headerContainer_Dcc3",logo:"logo_Ukns",titleWrapper:"titleWrapper_PWv8",title:"title_GqtP",subtitle:"subtitle_RlPM",description:"description_meEo",subscribeSection:"subscribeSection_qkBE",subscribeForm:"subscribeForm_A7nS",emailInput:"emailInput_wW4s",subscribeButton:"subscribeButton_Behe",successMessage:"successMessage_E2ip",errorMessage:"errorMessage_WMHZ"}}}]);