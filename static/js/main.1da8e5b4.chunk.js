(this.webpackJsonprecipeezy=this.webpackJsonprecipeezy||[]).push([[0],{26:function(e,t,c){},27:function(e,t,c){},28:function(e,t,c){},48:function(e,t,c){"use strict";c.r(t);var n=c(0),i=c(1),s=c.n(i),r=c(16),o=c.n(r),a=(c(22),c(23),c(26),c(27),c(3));c(28);var l=function(e){return Object(i.useEffect)((function(){e.showRecipeStepsIcon(!0)}),[e.showRecipeSteps]),Object(n.jsxs)("div",{className:"container-fluid navdiv",children:[Object(n.jsx)("i",{className:"fi-xnluxl-home icons",onClick:e.resetEverythingButton}),e.showHitListIcon?Object(n.jsx)("i",{className:"fi-xnluxl-link icons",onClick:e.reShowHitListButton}):null,e.showIngredientListIcon?Object(n.jsx)("i",{className:"fi-xnluhl-shopping-cart icons",onClick:e.showIngredientsButton}):null,e.showRecipeStepsIcon?Object(n.jsx)("i",{className:"fi-xnluxl-ordered-list icons",onClick:e.showRecipeStepsButton}):null,Object(n.jsx)("button",{onClick:function(){return console.log("show me, homie "+e.showRecipeStepsIcon)},children:"show me"})]})},j=c(6),u=c.n(j),b=function(e){return Object(n.jsxs)("div",{className:"contentdiv",children:[Object(n.jsx)("button",{onClick:function(){return console.log("show me, homie "+e.showRecipeStepsIcon)},children:"show me"}),Object(n.jsx)("ul",{children:Object.keys(e.recipeSteps).map((function(t){var c=e.recipeSteps[t];return Object(n.jsx)("div",{children:Object(n.jsx)("div",{children:Object(n.jsxs)("div",{children:[Object(n.jsx)("li",{children:c.step}),Object(n.jsx)("hr",{})]})})},c.number)}))})]})};var d=function(e){return Object(n.jsx)("div",{className:"contentdiv",children:Object(n.jsx)("ul",{children:Object.keys(e.recipeIngredients).map((function(t){var c=e.recipeIngredients[t];return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("li",{children:c.originalString},toString(c.index+c.id)),Object(n.jsx)("hr",{})]})}))})})};c(15).config();var h=function(){var e=Object(i.useState)(""),t=Object(a.a)(e,2),c=t[0],s=t[1],r=Object(i.useState)([""]),o=Object(a.a)(r,2),j=o[0],h=o[1],p=Object(i.useState)(""),O=Object(a.a)(p,2),x=O[0],f=O[1],m=Object(i.useState)([""]),v=Object(a.a)(m,2),S=v[0],g=v[1],w=Object(i.useState)([""]),I=Object(a.a)(w,2),k=I[0],N=I[1],y=Object(i.useState)(!0),C=Object(a.a)(y,2),B=C[0],R=C[1],E=Object(i.useState)(!1),L=Object(a.a)(E,2),T=L[0],F=L[1],H=Object(i.useState)(!1),q=Object(a.a)(H,2),z=q[0],G=q[1],J=Object(i.useState)(!1),P=Object(a.a)(J,2),A=P[0],D=P[1],M=Object(i.useState)(!1),U=Object(a.a)(M,2),K=U[0],Q=U[1],V=Object(i.useState)(!1),W=Object(a.a)(V,2),X=W[0],Y=W[1],Z=Object(i.useState)(!1),$=Object(a.a)(Z,2),_=$[0],ee=$[1];Object(i.useEffect)((function(){ne()}),[x]);var te={method:"GET",url:"https://webknox-recipes.p.rapidapi.com/recipes/search",params:{query:c},headers:{"x-rapidapi-key":"95c88ae2bbmsh9f3c0bf207b69b3p176cf9jsne229f6e467a1","x-rapidapi-host":"webknox-recipes.p.rapidapi.com"}},ce={method:"GET",url:"https://webknox-recipes.p.rapidapi.com/recipes/"+x+"/information",headers:{"x-rapidapi-key":"95c88ae2bbmsh9f3c0bf207b69b3p176cf9jsne229f6e467a1","x-rapidapi-host":"webknox-recipes.p.rapidapi.com"}},ne=function(){u.a.request(ce).then((function(e){Y(!0),ee(!0),console.log("in axios call "+_),g(e.data.extendedIngredients),N(e.data.analyzedInstructions[0].steps),F(!1),D(!0),G(!0)})).catch((function(e){console.log(e)}))},ie=function(){u.a.request(te).then((function(e){h(e.data.results)})).catch((function(e){console.error(e)}))};return Object(n.jsxs)("div",{children:[Object(n.jsx)(l,{showHitListIcon:K,showIngredientListIcon:X,showRecipeStepsIcon:_,reShowHitListButton:function(){D(!1),G(!1),F(!0)},showIngredientsButton:function(){F(!1),G(!1),R(!1),D(!0)},showRecipeStepsButton:function(){F(!1),D(!1),R(!1),G(!0)},resetEverythingButton:function(){window.location.reload()}}),T?Object(n.jsx)("div",{className:"contentdiv",children:Object(n.jsx)("ul",{children:Object.keys(j).map((function(e){var t=j[e];return Object(n.jsx)("div",{children:Object(n.jsxs)("li",{onClick:function(){return f(t.id)},children:[t.title,Object(n.jsx)("br",{}),Object(n.jsx)("p",{className:"urltext",children:t.sourceUrl})]})},t.id)}))})}):null,A?Object(n.jsx)(d,{recipeIngredients:S}):null,z?Object(n.jsx)(b,{recipeSteps:k,showRecipeStepsIcon:_}):null,B?Object(n.jsxs)("form",{children:[Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{className:"form-control textinput",placeholder:"Search",onChange:function(e){return s(e.currentTarget.value)},name:"searchterms",id:"searchtermsbox",value:c,"aria-label":"Enter Search Terms Here"})}),Object(n.jsx)("div",{className:"buttondiv",onClick:function(){Q(!0),ie(),R(!1),F(!0)},children:"Search"})]}):null]})};c(15).config();var p=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(h,{})})},O=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,50)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),i(e),s(e),r(e)}))};o.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(p,{})}),document.getElementById("root")),O()}},[[48,1,2]]]);
//# sourceMappingURL=main.1da8e5b4.chunk.js.map