(this.webpackJsonprecipeezy=this.webpackJsonprecipeezy||[]).push([[0],{26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(1),s=n.n(i),r=n(16),o=n.n(r),a=(n(22),n(23),n(26),n(27),n(3));n(28);var l=function(e){return Object(c.jsxs)("div",{className:"container-fluid navdiv",children:[console.log("Inside the navbar render statement "+e.showRecipeStepsIcon),Object(c.jsx)("i",{className:"fi-xnluxl-home icons",onClick:e.resetEverythingButton}),Object(c.jsx)("p",{children:"It's true!"}),e.showHitListIcon?Object(c.jsx)("i",{className:"fi-xnluxl-link icons",onClick:e.reShowHitListButton}):null,e.showIngredientListIcon?Object(c.jsx)("i",{className:"fi-xnluhl-shopping-cart icons",onClick:e.showIngredientsButton}):null,e.showRecipeStepsIcon?Object(c.jsx)("i",{className:"fi-xnluxl-ordered-list icons",onClick:e.showRecipeStepsButton}):null,Object(c.jsx)("button",{onClick:function(){return console.log("show me, homie "+e.showRecipeStepsIcon)},children:"show me"})]})},j=n(6),u=n.n(j),b=function(e){return Object(c.jsx)("div",{className:"contentdiv",children:Object(c.jsx)("ul",{children:Object.keys(e.recipeSteps).map((function(t){var n=e.recipeSteps[t];return Object(c.jsx)("div",{children:Object(c.jsx)("div",{children:Object(c.jsxs)("div",{children:[Object(c.jsx)("li",{children:n.step}),Object(c.jsx)("hr",{})]})})},n.number)}))})})};var d=function(e){return Object(c.jsx)("div",{className:"contentdiv",children:Object(c.jsx)("ul",{children:Object.keys(e.recipeIngredients).map((function(t){var n=e.recipeIngredients[t];return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("li",{children:n.originalString},toString(n.index+n.id)),Object(c.jsx)("hr",{})]})}))})})};n(15).config();var h=function(){var e=Object(i.useState)(""),t=Object(a.a)(e,2),n=t[0],s=t[1],r=Object(i.useState)([""]),o=Object(a.a)(r,2),j=o[0],h=o[1],p=Object(i.useState)(""),O=Object(a.a)(p,2),x=O[0],f=O[1],m=Object(i.useState)([""]),v=Object(a.a)(m,2),g=v[0],S=v[1],w=Object(i.useState)([""]),I=Object(a.a)(w,2),k=I[0],N=I[1],y=Object(i.useState)(!0),C=Object(a.a)(y,2),B=C[0],L=C[1],E=Object(i.useState)(!1),R=Object(a.a)(E,2),T=R[0],F=R[1],H=Object(i.useState)(!1),q=Object(a.a)(H,2),z=q[0],G=q[1],J=Object(i.useState)(!1),P=Object(a.a)(J,2),A=P[0],D=P[1],M=Object(i.useState)(!1),U=Object(a.a)(M,2),K=U[0],Q=U[1],V=Object(i.useState)(!1),W=Object(a.a)(V,2),X=W[0],Y=W[1],Z=Object(i.useState)(!1),$=Object(a.a)(Z,2),_=$[0],ee=$[1];Object(i.useEffect)((function(){ce()}),[x]);var te={method:"GET",url:"https://webknox-recipes.p.rapidapi.com/recipes/search",params:{query:n},headers:{"x-rapidapi-key":"95c88ae2bbmsh9f3c0bf207b69b3p176cf9jsne229f6e467a1","x-rapidapi-host":"webknox-recipes.p.rapidapi.com"}},ne={method:"GET",url:"https://webknox-recipes.p.rapidapi.com/recipes/"+x+"/information",headers:{"x-rapidapi-key":"95c88ae2bbmsh9f3c0bf207b69b3p176cf9jsne229f6e467a1","x-rapidapi-host":"webknox-recipes.p.rapidapi.com"}},ce=function(){u.a.request(ne).then((function(e){ee(!0),Y(!0),console.log("in axios call "+X),S(e.data.extendedIngredients),N(e.data.analyzedInstructions[0].steps)})).then((function(){F(!1),D(!0),G(!0)})).catch((function(e){console.log(e)}))},ie=function(){u.a.request(te).then((function(e){h(e.data.results)})).catch((function(e){console.error(e)}))};return Object(c.jsxs)("div",{children:[Object(c.jsx)(l,{showHitListIcon:K,showIngredientListIcon:_,showRecipeStepsIcon:X,reShowHitListButton:function(){D(!1),G(!1),F(!0)},showIngredientsButton:function(){F(!1),G(!1),L(!1),D(!0)},showRecipeStepsButton:function(){F(!1),D(!1),L(!1),G(!0)},resetEverythingButton:function(){window.location.reload()}}),T?Object(c.jsx)("div",{className:"contentdiv",children:Object(c.jsx)("ul",{children:Object.keys(j).map((function(e){var t=j[e];return Object(c.jsx)("div",{children:Object(c.jsxs)("li",{onClick:function(){return f(t.id)},children:[t.title,Object(c.jsx)("br",{}),Object(c.jsx)("p",{className:"urltext",children:t.sourceUrl})]})},t.id)}))})}):null,A?Object(c.jsx)(d,{recipeIngredients:g}):null,z?Object(c.jsx)(b,{recipeSteps:k}):null,B?Object(c.jsxs)("form",{children:[Object(c.jsx)("div",{className:"form-group",children:Object(c.jsx)("input",{className:"form-control textinput",placeholder:"Search",onChange:function(e){return s(e.currentTarget.value)},name:"searchterms",id:"searchtermsbox",value:n,"aria-label":"Enter Search Terms Here"})}),Object(c.jsx)("div",{className:"buttondiv",onClick:function(){Q(!0),ie(),L(!1),F(!0)},children:"Search"})]}):null]})};n(15).config();var p=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(h,{})})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,50)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),s(e),r(e)}))};o.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(p,{})}),document.getElementById("root")),O()}},[[48,1,2]]]);
//# sourceMappingURL=main.434f54e9.chunk.js.map