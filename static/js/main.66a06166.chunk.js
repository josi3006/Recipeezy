(this.webpackJsonprecipeezy=this.webpackJsonprecipeezy||[]).push([[0],{26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(1),s=n.n(i),r=n(16),o=n.n(r),a=(n(22),n(23),n(26),n(27),n(2));n(28);var j=function(e){return Object(c.jsxs)("div",{className:"container-fluid navdiv",children:[console.log("Inside the navbar render statement "+e.showRecipeStepsIcon),Object(c.jsx)("i",{className:"fi-xnluxl-home icons",onClick:e.resetEverythingButton}),e.testVar?Object(c.jsx)("p",{children:"It's true!"}):Object(c.jsx)("p",{children:"It not is true."}),e.showHitListIcon?Object(c.jsx)("i",{className:"fi-xnluxl-link icons",onClick:e.reShowHitListButton}):null,e.showIngredientListIcon?Object(c.jsx)("i",{className:"fi-xnluhl-shopping-cart icons",onClick:e.showIngredientsButton}):null,e.showRecipeStepsIcon?Object(c.jsx)("p",{children:"Steps Icon YES!"}):Object(c.jsx)("p",{children:"NO steps icon."}),Object(c.jsx)("button",{onClick:function(){return console.log("show me, homie "+e.showRecipeStepsIcon)},children:"show me"})]})},l=n(6),u=n.n(l),b=function(e){return Object(c.jsx)("div",{className:"contentdiv",children:Object(c.jsx)("ul",{children:Object.keys(e.recipeSteps).map((function(t){var n=e.recipeSteps[t];return Object(c.jsx)("div",{children:Object(c.jsx)("div",{children:Object(c.jsxs)("div",{children:[Object(c.jsx)("li",{children:n.step}),Object(c.jsx)("hr",{})]})})},n.number)}))})})};var d=function(e){return Object(c.jsx)("div",{className:"contentdiv",children:Object(c.jsx)("ul",{children:Object.keys(e.recipeIngredients).map((function(t){var n=e.recipeIngredients[t];return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("li",{children:n.originalString},toString(n.index+n.id)),Object(c.jsx)("hr",{})]})}))})})};n(15).config();var h=function(){var e=Object(i.useState)(""),t=Object(a.a)(e,2),n=t[0],s=t[1],r=Object(i.useState)([""]),o=Object(a.a)(r,2),l=o[0],h=o[1],p=Object(i.useState)(""),O=Object(a.a)(p,2),x=O[0],f=O[1],m=Object(i.useState)([""]),v=Object(a.a)(m,2),S=v[0],g=v[1],w=Object(i.useState)([""]),I=Object(a.a)(w,2),k=I[0],N=I[1],y=Object(i.useState)(!0),C=Object(a.a)(y,2),B=C[0],E=C[1],L=Object(i.useState)(!1),T=Object(a.a)(L,2),F=T[0],H=T[1],R=Object(i.useState)(!1),q=Object(a.a)(R,2),z=q[0],G=q[1],J=Object(i.useState)(!1),P=Object(a.a)(J,2),V=P[0],A=P[1],D=Object(i.useState)(!1),M=Object(a.a)(D,2),U=M[0],Y=M[1],K=Object(i.useState)(!1),Q=Object(a.a)(K,2),W=Q[0],X=Q[1],Z=Object(i.useState)(!1),$=Object(a.a)(Z,2),_=$[0],ee=$[1],te=Object(i.useState)(!1),ne=Object(a.a)(te,2),ce=ne[0],ie=ne[1];Object(i.useEffect)((function(){oe()}),[x]);var se={method:"GET",url:"https://webknox-recipes.p.rapidapi.com/recipes/search",params:{query:n},headers:{"x-rapidapi-key":"95c88ae2bbmsh9f3c0bf207b69b3p176cf9jsne229f6e467a1","x-rapidapi-host":"webknox-recipes.p.rapidapi.com"}},re={method:"GET",url:"https://webknox-recipes.p.rapidapi.com/recipes/"+x+"/information",headers:{"x-rapidapi-key":"95c88ae2bbmsh9f3c0bf207b69b3p176cf9jsne229f6e467a1","x-rapidapi-host":"webknox-recipes.p.rapidapi.com"}},oe=function(){u.a.request(re).then((function(e){ee(!0),X(!0),ie(!0),console.log("in axios call "+W),g(e.data.extendedIngredients),N(e.data.analyzedInstructions[0].steps)})).then((function(){H(!1),A(!0),G(!0)})).catch((function(e){console.log(e)}))},ae=function(){u.a.request(se).then((function(e){h(e.data.results)})).catch((function(e){console.error(e)}))};return Object(c.jsxs)("div",{children:[Object(c.jsx)(j,{showHitListIcon:U,showIngredientListIcon:_,showRecipeStepsIcon:W,reShowHitListButton:function(){A(!1),G(!1),H(!0)},showIngredientsButton:function(){H(!1),G(!1),E(!1),A(!0)},showRecipeStepsButton:function(){H(!1),A(!1),E(!1),G(!0)},resetEverythingButton:function(){window.location.reload()},testVar:ce}),F?Object(c.jsx)("div",{className:"contentdiv",children:Object(c.jsx)("ul",{children:Object.keys(l).map((function(e){var t=l[e];return Object(c.jsx)("div",{children:Object(c.jsxs)("li",{onClick:function(){return f(t.id)},children:[t.title,Object(c.jsx)("br",{}),Object(c.jsx)("p",{className:"urltext",children:t.sourceUrl})]})},t.id)}))})}):null,V?Object(c.jsx)(d,{recipeIngredients:S}):null,z?Object(c.jsx)(b,{recipeSteps:k}):null,B?Object(c.jsxs)("form",{children:[Object(c.jsx)("div",{className:"form-group",children:Object(c.jsx)("input",{className:"form-control textinput",placeholder:"Search",onChange:function(e){return s(e.currentTarget.value)},name:"searchterms",id:"searchtermsbox",value:n,"aria-label":"Enter Search Terms Here"})}),Object(c.jsx)("div",{className:"buttondiv",onClick:function(){Y(!0),ae(),E(!1),H(!0)},children:"Search"})]}):null]})};n(15).config();var p=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(h,{})})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,50)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),s(e),r(e)}))};o.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(p,{})}),document.getElementById("root")),O()}},[[48,1,2]]]);
//# sourceMappingURL=main.66a06166.chunk.js.map