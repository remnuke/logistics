import{_ as c}from"./AppLayout.31f7f884.js";import p from"./DeleteUserForm.757ff389.js";import l from"./LogoutOtherBrowserSessionsForm.2ffeb02c.js";import{S as s}from"./SectionBorder.ac859ba6.js";import f from"./TwoFactorAuthenticationForm.2cbfb9e0.js";import u from"./UpdatePasswordForm.03684cd5.js";import _ from"./UpdateProfileInformationForm.862438c8.js";import{o,c as d,w as n,a as i,e as r,b as t,f as a,F as h}from"./app.acaa951e.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./DialogModal.22084d9e.js";import"./SectionTitle.c87bd3b5.js";import"./DangerButton.b7a5a9d9.js";import"./TextInput.af59e14b.js";import"./SecondaryButton.a3c0d3f4.js";import"./ActionMessage.17d8ea37.js";import"./PrimaryButton.e3a3c7eb.js";import"./InputLabel.c84163a8.js";import"./FormSection.f366a11e.js";const g=i("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Profile ",-1),$={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},w={key:0},k={key:1},y={key:2},z={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(e,x)=>(o(),d(c,{title:"Profile"},{header:n(()=>[g]),default:n(()=>[i("div",null,[i("div",$,[e.$page.props.jetstream.canUpdateProfileInformation?(o(),r("div",w,[t(_,{user:e.$page.props.user},null,8,["user"]),t(s)])):a("",!0),e.$page.props.jetstream.canUpdatePassword?(o(),r("div",k,[t(u,{class:"mt-10 sm:mt-0"}),t(s)])):a("",!0),e.$page.props.jetstream.canManageTwoFactorAuthentication?(o(),r("div",y,[t(f,{"requires-confirmation":m.confirmsTwoFactorAuthentication,class:"mt-10 sm:mt-0"},null,8,["requires-confirmation"]),t(s)])):a("",!0),t(l,{sessions:m.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"]),e.$page.props.jetstream.hasAccountDeletionFeatures?(o(),r(h,{key:3},[t(s),t(p,{class:"mt-10 sm:mt-0"})],64)):a("",!0)])])]),_:1}))}};export{z as default};
