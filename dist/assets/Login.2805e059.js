import{d as e,u as a,a as s,r as l,b as r,o as t,c as o,e as d,f as u,g as i,h as n,i as m,w as p,_ as g,j as c,k as f,E as y,l as h,m as b}from"./index.b6704809.js";import{E as v,a as w}from"./el-form-item.781d531d.js";/* empty css                 */const x={class:"login-container"},_=i("video",{poster:"/assets/1.a9926957.jpg",loop:"",autoplay:"",muted:""},[i("source",{src:"/assets/Particles.388b395c.mp4"})],-1),k={class:"login-form"},V=i("header",null,[i("img",{src:g}),i("h3",null,"vue3-admin")],-1),C={style:{"margin-left":"10px",display:"inline-block",height:"40px"}},j=["src"],S=f(" 登录 "),q=e({setup(e){const g=a();s();const f=l(),q=r({username:"",password:"",uuid:"",verifyCode:""}),U=r({username:[{required:!0,message:"不能为空,请输入username",trigger:"blur"},{pattern:/^[a-zA_Z0-9]{2,10}$/,message:"请输入2到10的字母或者数字",trigger:"blur"},{min:3,max:15,message:"请输入3到15的字母或者数字",trigger:"blur"}],password:[{required:!0,message:"不能为空,请输入密码",trigger:"blur"},{min:3,max:15,message:"请输入3到15的字母或者数字",trigger:"blur"}],verifyCode:[{required:!0,message:"不能为空",trigger:"blur"},{whitespace:!0,message:"不能为空格"}]}),E=()=>{c().then((e=>{f.value=e.data.image,q.uuid=e.data.uuid}))};t((()=>{E(),z()}));const z=()=>{const e=localStorage.getItem("token");null!=e&&g.dispatch("authStore/loginByToken",e)},A=()=>{g.dispatch("authStore/login",q),g.dispatch("menuStore/generateSystemMenus",q)};return(e,a)=>{const s=o("user"),l=y,r=h,t=v,g=o("lock"),c=b,z=w;return d(),u("div",x,[_,i("div",k,[V,n(z,{model:m(q),rules:m(U)},{default:p((()=>[n(t,{prop:"username"},{default:p((()=>[n(l,null,{default:p((()=>[n(s)])),_:1}),n(r,{placeholder:"username",modelValue:m(q).username,"onUpdate:modelValue":a[0]||(a[0]=e=>m(q).username=e),type:"text"},null,8,["modelValue"])])),_:1}),n(t,{prop:"password"},{default:p((()=>[n(l,null,{default:p((()=>[n(g)])),_:1}),n(r,{placeholder:"password",modelValue:m(q).password,"onUpdate:modelValue":a[1]||(a[1]=e=>m(q).password=e),type:"password"},null,8,["modelValue"])])),_:1}),n(t,{prop:"verifyCode",class:"verify-item"},{default:p((()=>[n(r,{placeholder:"verifyCode",modelValue:m(q).verifyCode,"onUpdate:modelValue":a[2]||(a[2]=e=>m(q).verifyCode=e),type:"text",style:{width:"40%",display:"inline-block",border:"1px solid rgba(255, 255, 255, 0.1)"}},null,8,["modelValue"]),i("div",C,[i("img",{src:f.value,onClick:E,style:{"margin-bottom":"-12px",width:"100%",height:"100%","object-fit":"cover"}},null,8,j)])])),_:1}),n(t,{style:{border:"none",background:"none"}},{default:p((()=>[n(c,{type:"primary",style:{width:"100%"},onClick:A},{default:p((()=>[S])),_:1})])),_:1})])),_:1},8,["model","rules"])])])}}});export{q as default};