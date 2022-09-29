import{u as c,o as l,c as d,w as g,a as t,m,v as x,M as p,h as o,e as _,f as u}from"./app.b9cad0e8.js";import{_ as h}from"./FrontLayout.3835c309.js";import"./_plugin-vue_export-helper.cdc0426e.js";const k={class:"bg-white dark:bg-gray-900"},f={class:"grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28"},b={class:"mr-auto place-self-center lg:col-span-7"},w=t("h1",{class:"max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white"},"Know where your goods are",-1),y=t("p",{class:"max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"},"Use your tracking code or ID to find out where your goods and services are in realtime.",-1),v={class:"space-y-4 sm:flex sm:space-y-0 sm:space-x-4"},T=t("button",{class:"text-white bg-red-600 rounded-r-xl p-4 font-bold text-lg"},"Track Shipment",-1),B={key:0,class:"text-sm text-red-400"},D=t("div",{class:"hidden lg:mt-0 lg:col-span-5 lg:flex"},[t("img",{src:"images/hero.svg",alt:"hero image"})],-1),E={__name:"Track",props:{shipment:Object},setup(M){const e=c({tracking_no:""});let a=!1;const i=r=>{e.get(route("track.shipment",{tracking_no:r}),{onError:function(){a=!0}})};return(r,s)=>(l(),d(h,{title:"Tracking"},{default:g(()=>[t("section",k,[t("div",f,[t("div",b,[w,y,t("div",v,[t("form",{onSubmit:s[1]||(s[1]=m(n=>i(o(e).tracking_no),["prevent"]))},[x(t("input",{type:"text",name:"tracking","onUpdate:modelValue":s[0]||(s[0]=n=>o(e).tracking_no=n),id:"",placeholder:"Tracking ID",class:"border-gray-300 p-4 rounded-l-xl"},null,512),[[p,o(e).tracking_no]]),T],32),o(a)?(l(),_("small",B," Tracking Number does not exist. ")):u("",!0)])]),D])])]),_:1}))}};export{E as default};