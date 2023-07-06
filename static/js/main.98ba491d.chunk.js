(this["webpackJsonpreact_product-categories-practice"]=this["webpackJsonpreact_product-categories-practice"]||[]).push([[0],{15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a(7),r=a.n(s),n=(a(13),a(14),a(6)),i=a(8),l=(a(15),[{id:1,name:"Roma",sex:"m"},{id:2,name:"Anna",sex:"f"},{id:3,name:"Max",sex:"m"},{id:4,name:"John",sex:"m"}]),d=[{id:1,title:"Grocery",icon:"\ud83c\udf5e",ownerId:2},{id:2,title:"Drinks",icon:"\ud83c\udf7a",ownerId:1},{id:3,title:"Fruits",icon:"\ud83c\udf4f",ownerId:2},{id:4,title:"Electronics",icon:"\ud83d\udcbb",ownerId:1},{id:5,title:"Clothes",icon:"\ud83d\udc5a",ownerId:3}],o=a(0),j=function(e){var t=e.category,a=t.title,c=t.icon;return Object(o.jsxs)("td",{"data-cy":"ProductCategory",children:[Object(o.jsx)("span",{role:"img","aria-label":"",children:c})," - ".concat(a)]})},u=a(2),h=a.n(u),b=function(e){var t=e.user,a=t.name,c=t.sex;return Object(o.jsx)("td",{"data-cy":"ProductUser",className:h()({"has-text-link":"m"===c,"has-text-danger":"f"===c}),children:a})},x=function(e){var t=e.product,a=t.id,c=t.name,s=t.category,r=t.user;return Object(o.jsxs)("tr",{"data-cy":"Product",children:[Object(o.jsx)("td",{className:"has-text-weight-bold","data-cy":"ProductId",children:a}),Object(o.jsx)("td",{"data-cy":"ProductName",children:c}),Object(o.jsx)(j,{category:s}),Object(o.jsx)(b,{user:r})]})},m=function(e){var t=e.products;return Object(o.jsxs)("table",{"data-cy":"ProductTable",className:"table is-striped is-narrow is-fullwidth",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:Object(o.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["ID",Object(o.jsx)("a",{href:"#/",children:Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort"})})})]})}),Object(o.jsx)("th",{children:Object(o.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Product",Object(o.jsx)("a",{href:"#/",children:Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort-down"})})})]})}),Object(o.jsx)("th",{children:Object(o.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Category",Object(o.jsx)("a",{href:"#/",children:Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort-up"})})})]})}),Object(o.jsx)("th",{children:Object(o.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["User",Object(o.jsx)("a",{href:"#/",children:Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort"})})})]})})]})}),Object(o.jsx)("tbody",{children:t.map((function(e){return Object(o.jsx)(x,{product:e},e.id)}))})]})},f=function(e){var t=e.user,a=e.userFilter,c=e.changeUserFilter,s=t.name;return Object(o.jsx)("a",{"data-cy":"FilterUser",href:"#/",className:h()({"is-active":s===a}),onClick:function(){return c(s)},children:s})},O=function(e){var t=e.users,a=e.userFilter,c=e.changeUserFilter;return Object(o.jsxs)("p",{className:"panel-tabs has-text-weight-bold",children:[Object(o.jsx)("a",{"data-cy":"FilterAllUsers",href:"#/",className:h()({"is-active":"all"===a}),onClick:function(){return c("all")},children:"All"}),t.map((function(e){return Object(o.jsx)(f,{user:e,userFilter:a,changeUserFilter:function(e){return c(e)}},e.id)}))]})},p=[{id:1,name:"Milk",categoryId:2},{id:2,name:"Bread",categoryId:1},{id:3,name:"Eggs",categoryId:1},{id:4,name:"Jacket",categoryId:5},{id:5,name:"Sugar",categoryId:1},{id:6,name:"Banana",categoryId:3},{id:7,name:"Beer",categoryId:2},{id:8,name:"Socks",categoryId:5},{id:9,name:"Apples",categoryId:3}].map((function(e){var t=d.find((function(t){return e.categoryId===t.id})),a=l.find((function(e){return t.ownerId===e.id}));return{id:e.id,name:e.name,category:t,user:a}}));var y=function(){var e=Object(c.useState)("all"),t=Object(n.a)(e,2),a=t[0],s=t[1],r=Object(c.useState)(""),d=Object(n.a)(r,2),j=d[0],u=d[1],h=function(e,t){var a=t.userFilter,c=t.query,s=Object(i.a)(e);if("all"!==a&&(s=s.filter((function(e){return e.user.name===a}))),c){var r=c.toLowerCase();s=s.filter((function(e){return e.name.toLowerCase().includes(r)}))}return s}(p,{userFilter:a,query:j}),b=Object(o.jsx)("span",{className:"icon is-right",children:Object(o.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete",onClick:function(){return u("")}})}),x=Object(o.jsx)("p",{"data-cy":"NoMatchingMessage",children:"No products matching selected criteria"});return Object(o.jsx)("div",{className:"section",children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("h1",{className:"title",children:"Product Categories"}),Object(o.jsx)("div",{className:"block",children:Object(o.jsxs)("nav",{className:"panel",children:[Object(o.jsx)("p",{className:"panel-heading",children:"Filters"}),Object(o.jsx)(O,{users:l,userFilter:a,changeUserFilter:function(e){return s(e)}}),Object(o.jsx)("div",{className:"panel-block",children:Object(o.jsxs)("p",{className:"control has-icons-left has-icons-right",children:[Object(o.jsx)("input",{"data-cy":"SearchField",type:"text",className:"input",placeholder:"Search",value:j,onChange:function(e){return u(e.currentTarget.value)}}),Object(o.jsx)("span",{className:"icon is-left",children:Object(o.jsx)("i",{className:"fas fa-search","aria-hidden":"true"})}),j&&b]})}),Object(o.jsxs)("div",{className:"panel-block is-flex-wrap-wrap",children:[Object(o.jsx)("a",{href:"#/","data-cy":"AllCategories",className:"button is-success mr-6 is-outlined",children:"All"}),Object(o.jsx)("a",{"data-cy":"Category",className:"button mr-2 my-1 is-info",href:"#/",children:"Category 1"}),Object(o.jsx)("a",{"data-cy":"Category",className:"button mr-2 my-1",href:"#/",children:"Category 2"}),Object(o.jsx)("a",{"data-cy":"Category",className:"button mr-2 my-1 is-info",href:"#/",children:"Category 3"}),Object(o.jsx)("a",{"data-cy":"Category",className:"button mr-2 my-1",href:"#/",children:"Category 4"})]}),Object(o.jsx)("div",{className:"panel-block",children:Object(o.jsx)("a",{"data-cy":"ResetAllButton",href:"#/",className:"button is-link is-outlined is-fullwidth",onClick:function(){s("all"),u("")},children:"Reset all filters"})})]})}),Object(o.jsx)("div",{className:"box table-container",children:0===h.length?x:Object(o.jsx)(m,{products:h})})]})})};r.a.render(Object(o.jsx)(y,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.98ba491d.chunk.js.map