(this.webpackJsonpshoppingcart=this.webpackJsonpshoppingcart||[]).push([[0],{12:function(e,t,c){},13:function(e,t,c){},35:function(e,t,c){"use strict";c.r(t);var i=c(2),a=c.n(i),n=c(6),s=c.n(n),r=(c(12),c(1)),o=c(3),l=(c(13),c(7)),m=c(0),j=function(e){var t=e.id,c=e.description,a=e.title,n=e.img,s=e.price,r=e.quantity,o=Object(i.useContext)(u),l=o.removeItem,j=o.increment,p=o.decrement;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"items-info",children:[Object(m.jsx)("div",{className:"product-img",children:Object(m.jsx)("img",{src:n,alt:"iamge"})}),Object(m.jsxs)("div",{className:"title",children:[Object(m.jsx)("h2",{children:a}),Object(m.jsx)("p",{children:c})]}),Object(m.jsxs)("div",{className:"add-minus-quantity",children:[Object(m.jsx)("i",{className:"fas fa-minus minus",onClick:function(){return p(t)}}),Object(m.jsx)("input",{type:"text",placeholder:r,disabled:!0}),Object(m.jsx)("i",{className:"fas fa-plus add",onClick:function(){return j(t)}})]}),Object(m.jsx)("div",{className:"price",children:Object(m.jsxs)("h3",{children:["\u20b9 ",s]})}),Object(m.jsx)("div",{className:"remove-item",children:Object(m.jsx)("i",{className:"fas fa-trash-alt remove",onClick:function(){return l(t)}})})]}),Object(m.jsx)("hr",{})]})},p=function(){var e=Object(i.useContext)(u),t=e.item,c=e.totalItem,a=e.totalAmount,n=Object(i.useState)(""),s=Object(o.a)(n,2),p=s[0],d=s[1],b=Object(i.useState)(),h=Object(o.a)(b,2),g=h[0],O=h[1],x=Object(i.useRef)(),y=t.filter((function(e){return e.title.toLowerCase().includes(p.toLowerCase())}));return console.log(y),0===t.length?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("header",{children:[Object(m.jsxs)("div",{className:"continue-shopping",children:[Object(m.jsx)("img",{src:"./images/arrow.png",alt:"arrow",className:"arrow-icon"}),Object(m.jsx)("h3",{children:"continue shopping"})]}),Object(m.jsxs)("div",{className:"cart-icon",children:[Object(m.jsx)("img",{src:"./images/cart.png",alt:"cart"}),Object(m.jsx)("p",{children:c})]})]}),Object(m.jsxs)("section",{className:"main-cart-section",children:[Object(m.jsx)("h1",{children:"shopping Cart"}),Object(m.jsxs)("p",{className:"total-items",children:["Total items : ",Object(m.jsxs)("span",{className:"total-items-count",children:[c," "]})," "]})]})]}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("header",{children:[Object(m.jsxs)("div",{className:"continue-shopping",children:[Object(m.jsx)("img",{src:"./images/arrow.png",alt:"arrow",className:"arrow-icon"}),Object(m.jsx)("h3",{children:"continue shopping"})]}),Object(m.jsxs)("div",{className:"cart-icon",children:[Object(m.jsx)("img",{src:"./images/cart.png",alt:"cart"}),Object(m.jsx)("p",{children:c})]})]}),Object(m.jsxs)("div",{className:"subhead",children:[Object(m.jsxs)("select",{className:"dropdown",name:"mobile",onChange:function(e){return function(e){O(e.target.value)}(e)},children:[Object(m.jsx)("option",{value:"",selected:!0,children:"All"}),Object(m.jsx)("option",{value:"mobile",children:"Mobile"}),Object(m.jsx)("option",{value:"laptop",children:"Laptops"})]}),Object(m.jsx)("input",{className:"searchbar",type:"text",placeholder:"Search",onChange:function(e){return function(e){d(e.target.value)}(e)}})]}),Object(m.jsxs)("section",{className:"main-cart-section",children:[Object(m.jsx)("h1",{children:"shopping Cart"}),Object(m.jsxs)("p",{className:"total-items",children:["Total items : ",Object(m.jsxs)("span",{className:"total-items-count",children:[c," "]})]}),Object(m.jsx)("div",{className:"cart-items",children:Object(m.jsx)("div",{className:"cart-items-container",children:Object(m.jsx)(l.Scrollbars,{children:p?y.map((function(e){return Object(m.jsx)(j,Object(r.a)({},e),e.id)})):g?t.map((function(e){if(e.category.includes(g))return Object(m.jsx)(j,Object(r.a)({},e),e.id)})):t.map((function(e){return Object(m.jsx)(j,Object(r.a)({},e),e.id)}))})})}),Object(m.jsxs)("div",{className:"card-total",ref:x,children:[Object(m.jsxs)("h3",{children:["Cart Total : ",Object(m.jsxs)("span",{children:["\u20b9 ",a]})]}),Object(m.jsx)("button",{onClick:function(){x.current.innerText="Thank you",x.current.style.backgroundColor="#e8edef",x.current.style.color="green",x.current.style.fontSize="4rem",x.current.style.fontWeight="bold",x.current.style.fontStyle="italic"},children:"Proceed to checkout"})]})]})]})},d=function(e,t){if("REMOVE_ITEM"===t.type)return Object(r.a)(Object(r.a)({},e),{},{item:e.item.filter((function(e){return e.id!==t.payload}))});if("INCREMENT"===t.type){var c=e.item.map((function(e){return e.id===t.payload?Object(r.a)(Object(r.a)({},e),{},{quantity:e.quantity+1}):e}));return Object(r.a)(Object(r.a)({},e),{},{item:c})}if("DECREMENT"===t.type){var i=e.item.map((function(e){return e.id===t.payload?Object(r.a)(Object(r.a)({},e),{},{quantity:e.quantity-1}):e})).filter((function(e){return 0!==e.quantity}));return Object(r.a)(Object(r.a)({},e),{},{item:i})}if("GET_TOTAL"===t.type){var a=e.item.reduce((function(e,t){var c=t.price,i=t.quantity,a=c*i;return e.totalAmount+=a,e.totalItem+=i,e}),{totalItem:0,totalAmount:0}),n=a.totalItem,s=a.totalAmount;return Object(r.a)(Object(r.a)({},e),{},{totalItem:n,totalAmount:s})}return e},u=Object(i.createContext)(),b={item:[{id:1,title:"Realme 9 pro",description:"black in color",price:"18000",img:"https://image01.realme.net/general/20220131/1643635150323.png.webp",quantity:1,category:"mobile"},{id:2,title:"Apple Macbook Air",description:"black in color",price:"89000",img:"https://cdn1.smartprix.com/rx-iXMsgRkkm-w1200-h1200/XMsgRkkm.jpg",quantity:1,category:"laptop"},{id:3,title:"Redmi 9",description:"black in color",price:"3500",img:"https://images-na.ssl-images-amazon.com/images/I/71A9Vo1BatL._SL1500_.jpg",quantity:1,category:"mobile"},{id:4,title:"Iphone 12",description:"Best mobile ever",price:"90500",img:"https://images-na.ssl-images-amazon.com/images/I/71hIfcIPyxS._SL1500_.jpg",quantity:1,category:"mobile"},{id:5,title:"Oppo A31",description:"black in color",price:"12000",img:"https://m.media-amazon.com/images/I/71KCwNV6MuL._SL1500_.jpg",quantity:1,category:"mobile"},{id:6,title:"Vivo T1",description:"black in color",price:"15999",img:"https://sathya.in/media/80995/catalog/b194403687afd2212c4cf035d28d8e65.png",quantity:1,category:"mobile"},{id:7,title:"Apple mac Air",description:"black in color",price:"2500",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzzp02FlP70EOyjErZ7jEQgzBeN8FifZ9GKz1wmzPgxBvtzYrgU9xhXwQRmMoeQD-pvz4&usqp=CAU",quantity:1,category:"laptop"},{id:8,title:"Iphone 12",description:"Best mobile ever",price:"90500",img:"https://images-na.ssl-images-amazon.com/images/I/71hIfcIPyxS._SL1500_.jpg",quantity:1,category:"mobile"},{id:9,title:"Samsung S21",description:"black in color",price:"2500",img:"https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",quantity:1,category:"mobile"},{id:10,title:"Hp 15s Ryzen 5",description:"black in color",price:"40000",img:"https://cdn1.smartprix.com/rx-iQKVwv1tK-w1200-h1200/QKVwv1tK.jpg",quantity:1,category:"laptop"},{id:11,title:"Samsung M21",description:"white in color",price:"2300",img:"https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",quantity:1,category:"mobile"},{id:12,title:"Dell Inspiron",description:"Black in color",price:"53000",img:"https://m.media-amazon.com/images/I/51if47n2aPL._AC_SL1000_.jpg",quantity:1,category:"laptop"}],totalAmount:0,totalItem:0},h=function(){var e=Object(i.useReducer)(d,b),t=Object(o.a)(e,2),c=t[0],a=t[1];return Object(i.useEffect)((function(){a({type:"GET_TOTAL"})}),[c.item]),Object(m.jsx)(u.Provider,{value:Object(r.a)(Object(r.a)({},c),{},{removeItem:function(e){return a({type:"REMOVE_ITEM",payload:e})},increment:function(e){return a({type:"INCREMENT",payload:e})},decrement:function(e){return a({type:"DECREMENT",payload:e})}}),children:Object(m.jsx)(p,{})})},g=function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(h,{})})};s.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(g,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.1e304f3e.chunk.js.map