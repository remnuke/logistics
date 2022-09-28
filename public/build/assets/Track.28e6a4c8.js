import{u as d,o as i,c as g,w as m,a as t,m as p,v as x,M as h,h as o,e as u,f as _,g as e}from"./app.acaa951e.js";import{_ as f}from"./FrontLayout.449618b5.js";import"./_plugin-vue_export-helper.cdc0426e.js";const b={class:"bg-white dark:bg-gray-900"},k={class:"grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28"},w={class:"mr-auto place-self-center lg:col-span-7"},v=t("h1",{class:"max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white"},[e("Building digital "),t("br"),e("products & brands.")],-1),y=t("p",{class:"max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"},[e("This free and open-source landing page template was built using the utility classes from "),t("a",{href:"https://tailwindcss.com",class:"hover:underline"},"Tailwind CSS"),e(" and based on the components from the "),t("a",{href:"https://flowbite.com/docs/getting-started/introduction/",class:"hover:underline"},"Flowbite Library"),e(" and the "),t("a",{href:"https://flowbite.com/blocks/",class:"hover:underline"},"Blocks System"),e(".")],-1),T={class:"space-y-4 sm:flex sm:space-y-0 sm:space-x-4"},B=t("button",{class:"text-white bg-red-600 rounded-r-xl p-4 font-bold text-lg"},"Track Shipment",-1),S={key:0,class:"text-sm text-red-400"},N=t("div",{class:"hidden lg:mt-0 lg:col-span-5 lg:flex"},[t("img",{src:"images/hero.svg",alt:"hero image"})],-1),E={__name:"Track",props:{shipment:Object},setup(V){const s=d({tracking_no:""});let r=!1;const c=n=>{s.get(route("track.shipment",{tracking_no:n}),{onError:function(){r=!0}})};return(n,a)=>(i(),g(f,{title:"Tracking"},{default:m(()=>[t("section",b,[t("div",k,[t("div",w,[v,y,t("div",T,[t("form",{onSubmit:a[1]||(a[1]=p(l=>c(o(s).tracking_no),["prevent"]))},[x(t("input",{type:"text",name:"tracking","onUpdate:modelValue":a[0]||(a[0]=l=>o(s).tracking_no=l),id:"",placeholder:"Tracking ID",class:"border-gray-300 p-4 rounded-l-xl"},null,512),[[h,o(s).tracking_no]]),B],32),o(r)?(i(),u("small",S," Tracking Number does not exist. ")):_("",!0)])]),N])])]),_:1}))}};export{E as default};