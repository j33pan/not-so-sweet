(this["webpackJsonpnot-so-sweet"]=this["webpackJsonpnot-so-sweet"]||[]).push([[0],{115:function(e,t,n){},205:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(10),s=n.n(r),o=(n(115),n(62)),i=n(13),l=n(26),u=n(241),j=n(244),b=n(245),d=n(105),p=n(246),h=n(97),O=n.n(h),m=n(263),x=n(103),f=n(247),g=n(5),v=Object(u.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},menuItem:{color:e.palette.common.white}}})),k=Object(i.f)((function(e){var t=e.history,n=v(),c=a.a.useState(null),r=Object(l.a)(c,2),s=r[0],o=r[1],i=Boolean(s),u=function(e){t.push(e),o(null)};return Object(g.jsxs)("div",{className:n.root,children:[Object(g.jsx)(j.a,{position:"fixed",elevation:0,children:Object(g.jsxs)(b.a,{children:[Object(g.jsx)(d.a,{variant:"h6",className:n.title,children:"NOT SO SWEET"}),Object(g.jsxs)("div",{className:"mobile",children:[Object(g.jsx)(p.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){o(e.currentTarget)},color:"inherit",children:Object(g.jsx)(O.a,{})}),Object(g.jsxs)(x.a,{id:"menu-appbar",anchorEl:s,anchorOrigin:{vertical:"top",horizontal:"center"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:i,onClose:function(){return o(null)},children:[Object(g.jsx)(m.a,{className:n.menuItem,dense:!0,onClick:function(){return u("/")},children:"HOME"}),Object(g.jsx)(m.a,{className:n.menuItem,dense:!0,onClick:function(){return u("/nssreceipe")},children:"NSS RECEIPE"}),Object(g.jsx)(m.a,{className:n.menuItem,dense:!0,onClick:function(){return u("/outsourcereceipe")},children:"RECEIPE"}),Object(g.jsx)(m.a,{className:n.menuItem,dense:!0,onClick:function(){return u("/lesson")},children:"LESSON"}),Object(g.jsx)(f.a,{}),Object(g.jsx)(m.a,{className:n.menuItem,dense:!0,children:"ORDER"}),Object(g.jsx)(f.a,{}),Object(g.jsx)(m.a,{className:n.menuItem,dense:!0,children:"LOG IN"})]})]})]})}),Object(g.jsx)(b.a,{style:{marginBottom:"20px"}})]})})),y=function(){return Object(g.jsx)("div",{})},w=function(){return Object(g.jsx)("h1",{children:"lesson"})},C=n(98),E=n(28),N=n(248),I=n(249),S=n(250),R=n(251),B=n(99),L=n.n(B)()({projectId:"tqsysxk8",dataset:"production"}),P=Object(u.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden"},gridList:Object(C.a)({width:"100%"},e.breakpoints.up("sm"),{width:"50%"})}})),T=function(){var e=a.a.useState([]),t=Object(l.a)(e,2),n=t[0],c=t[1];a.a.useEffect((function(){L.fetch('*[_type == "nssreceipe"] {\n    name, \n    image {\n      asset-> {\n        _id,\n        url\n      },\n      alt\n    }}').then((function(e){return c(e)})).catch(console.error)}),[]),console.log(n);var r=P(),s=Object(E.a)();return Object(g.jsx)("div",{className:r.root,children:Object(g.jsx)(N.a,{cellHeight:Object(I.a)(s.breakpoints.up("lg"))?450:300,cols:1,spacing:7,className:r.gridList,children:n.map((function(e){return Object(g.jsxs)(S.a,{cols:1,children:[Object(g.jsx)("img",{src:e.image.asset.url,alt:e.name}),Object(g.jsx)(R.a,{title:e.name})]})}))})})},G=n.p+"static/media/egg.1ed17743.jpg",_=n(102),q=n(257),z=n(258),H=n(259),M=n(65),W=n.n(M),D=n(100),J=n(57),A=n.n(J),K=n(260),F=n(101),Q=n.n(F),U=n(262),V=n(252),X=n(253),Y=n(254),Z=n(255),$=n(256),ee=function(e){var t=e.open,n=e.onClose,c=e.ingredients;console.log(t),console.log(c);var a=Object(E.a)();return Object(g.jsx)("div",{children:Object(g.jsxs)(U.a,{open:t,PaperProps:{style:{height:"50vh",backgroundColor:a.palette.common.white}},children:[Object(g.jsx)(V.a,{children:"Ingredients"}),Object(g.jsx)(X.a,{children:null===c||void 0===c?void 0:c.map((function(e){return Object(g.jsx)(Y.a,{style:{margin:0},children:e},A()())}))}),Object(g.jsx)(Z.a,{children:Object(g.jsx)($.a,{onClick:function(){n()},children:"Close"})})]})})},te=function(){var e=Object(c.useState)("chiffon"),t=Object(l.a)(e,2),n=t[0],r=t[1],s={method:"GET",url:"https://api.edamam.com/search",params:{q:n,to:20,app_id:"91c5bf0e",app_key:"92ad0d234662a6c6f9b2bdc527df3ecc"}},o=a.a.useState([]),i=Object(l.a)(o,2),u=i[0],j=i[1],b=function(){var e=Object(D.a)(W.a.mark((function e(){var t;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q.a.request(s);case 2:t=e.sent,j(t.data.hits);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=a.a.useState([]),p=Object(l.a)(d,2),h=p[0],O=p[1];a.a.useEffect((function(){b()}),[]);var m=a.a.useState(!1),x=Object(l.a)(m,2),f=x[0],v=x[1],k=Object(E.a)(),y=1;return Object(I.a)(k.breakpoints.up("sm"))&&(y=3),Object(I.a)(k.breakpoints.up("lg"))&&(y=4),Object(g.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden"},children:[Object(g.jsx)(ee,{open:f,onClose:function(){v(!1)},ingredients:h}),Object(g.jsxs)(N.a,{cols:y,cellHeight:240,spacing:10,style:{padding:20},children:[Object(g.jsx)(S.a,{cols:y,style:{height:"auto"},children:Object(g.jsx)(K.a,{label:"Explore receipes",onChange:function(e){return r(e.target.value)},onKeyDown:function(e){return"Enter"===e.key&&b()},style:{width:"100%"}})},"Subheader"),u.map((function(e){return Object(g.jsxs)(S.a,{onClick:function(){return t=e.recipe.ingredientLines,O(t),void v(!0);var t},children:[Object(g.jsx)("img",{src:e.recipe.image,alt:"logo"}),Object(g.jsx)(R.a,{title:e.recipe.label,subtitle:"source: "+e.recipe.source})]},A()())}))]})]})},ne=Object(_.a)({overrides:{MuiCssBaseline:{"@global":{body:{backgroundImage:"url(".concat(G,")"),backgroundPosition:"bottom",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundColor:"rgb(188, 143, 143, 0.7)",backgroundAttachment:"fixed",height:"100vh"}}}},palette:{primary:{main:"rgb(188, 143, 143, 0.7)",contrastText:"floralwhite"},background:{paper:"rgb(188, 143, 143, 0.3)"},common:{white:"floralwhite"},text:{primary:"#603939"}}});var ce=function(){return Object(g.jsxs)(q.a,{theme:ne,children:[Object(g.jsx)(z.a,{}),Object(g.jsxs)(o.a,{children:[Object(g.jsx)(k,{}),Object(g.jsx)(H.a,{children:Object(g.jsxs)(i.c,{children:[Object(g.jsx)(i.a,{component:y,path:"/",exact:!0}),Object(g.jsx)(i.a,{component:te,path:"/outsourcereceipe"}),Object(g.jsx)(i.a,{component:w,path:"/lesson"}),Object(g.jsx)(i.a,{component:T,path:"/nssreceipe"})]})})]})]})};s.a.render(Object(g.jsx)(ce,{}),document.getElementById("root"))}},[[205,1,2]]]);
//# sourceMappingURL=main.f6fa6b06.chunk.js.map