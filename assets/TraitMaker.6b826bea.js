import{d as u,r as X,o as l,c,a as t,w as p,v as m,b as h,t as v,e as f,f as _}from"./index.65ac846f.js";const y=["onSubmit"],b={class:"flex justify-center items-center gap-2"},x=t("span",null,"Enter your code: ",-1),g=t("button",{class:"p-2 bg-black rounded text-white hover:bg-opacity-80 transition-all w-1/3 mx-auto"}," Submit ",-1),w={id:"result",class:"whitespace-pre-line flex justify-center mt-2"},A={key:0,class:"bg-black text-white px-4 py-1 rounded"},E={key:1},j=u({setup(k){const o=X("[&DQkJGwMZRT3cEdwR1BEGEgYSKxIrEtQRyhHKEQcCAgMGEisS1BEAAAAAAAA=]"),a=X(""),r=X(!1);async function d(){r.value=!0;const i=[];console.log("Treating build",o.value);const e=await _(o.value);console.log("Corrected build",e),e.specializations.forEach(s=>{i.push(`data-armory-${s.id}-traits="${s.traits.join(",")}"`)});const n=e.specializations.map(s=>s.id).join(",");a.value=`<div
  data-armory-embed="specializations"
  data-armory-ids="${n}"
  ${i.join(`
`)}
  ></div>`}return(i,e)=>(l(),c("div",null,[t("form",{class:"flex flex-col gap-4 justify-center",onSubmit:h(d,["prevent"])},[t("div",b,[x,p(t("input",{type:"text",class:"p-1 rounded w-[37rem]","onUpdate:modelValue":e[0]||(e[0]=n=>o.value=n),placeholder:"[&XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX=]"},null,512),[[m,o.value]])]),g],40,y),t("div",w,[a.value?(l(),c("code",A,v(a.value),1)):r.value?(l(),c("h2",E,"Chargement...")):f("",!0)])]))}});export{j as default};
