(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],[,,,,,,function(t,e,n){t.exports={form:"FormAddContacts_form__2MdXG",label:"FormAddContacts_label__2GkhV",button:"FormAddContacts_button__2dp95"}},,,,,,,,function(t,e,n){t.exports={listItem:"ContactItem_listItem__ZX0Xm",button:"ContactItem_button__1siMh"}},function(t,e,n){t.exports={label:"Filter_label__3DcZT"}},,,,,,,,,function(t,e,n){},function(t,e,n){},,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),r=n.n(c),o=n(4),i=n.n(o),s=(n(24),n(16)),l=n(7),u=n(8),d=n(11),m=n(10),h=n(34),b=n(6),j=n.n(b),f=function(t){Object(d.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChangeName=function(e){t.setState({name:e})},t.handleChangeNumber=function(e){t.setState({number:e})},t.handleClearForm=function(){t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this,e=this.state,n=e.name,c=e.number,r=this.props.addContact,o=this.state.name,i=this.state.number;return Object(a.jsxs)("form",{className:j.a.form,onSubmit:function(e){return t.handleClearForm(),r(e,o,i)},children:[Object(a.jsxs)("label",{className:j.a.label,children:["Name",Object(a.jsx)("input",{type:"text",placeholder:"Name Surname",value:n,onChange:function(e){return t.handleChangeName(e.target.value)}})]}),Object(a.jsxs)("label",{className:j.a.label,children:["Number",Object(a.jsx)("input",{type:"number",placeholder:"Phone",value:c,onChange:function(e){return t.handleChangeNumber(e.target.value)}})]}),Object(a.jsx)("button",{className:j.a.button,type:"submit",children:"Add Contact"})]})}}]),n}(c.Component),p=n(15),O=n.n(p),C=function(t){var e=t.value,n=t.onChange;return Object(a.jsxs)("label",{className:O.a.label,children:["Find Contacts",Object(a.jsx)("input",{type:"text",placeholder:"name",value:e,onChange:function(t){return n(t.target.value)}})]})};C.defaultProps={};var x=C,v=n(14),g=n.n(v),N=function(t){var e=t.el,n=t.handleDelete,c=e.name,r=e.number,o=e.id;return Object(a.jsxs)("li",{className:g.a.listItem,children:[Object(a.jsxs)("span",{children:[c,":"]})," ",Object(a.jsx)("span",{children:r}),Object(a.jsx)("button",{className:g.a.button,type:"button",onClick:function(){return n(o)},children:"Delete"})]})},S=n(35),_=n(33),y=(n(25),function(t){var e=t.visibleContact,n=t.handleDelete;return Object(a.jsx)(S.a,{component:"ul",className:"contact-list",children:e.map((function(t){return Object(a.jsx)(_.a,{timeout:500,classNames:"item",children:Object(a.jsx)(N,{el:t,handleDelete:n})},t.id)}))})}),F=(n(28),function(t){return Object(a.jsx)("div",{className:"AlertWrapper",children:"Contact already exist"})}),A=(n(29),function(t){var e=t.children;return Object(a.jsx)("div",{className:"ContainerWrapper",children:e})}),D=(n(30),[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}]),k=function(t){Object(d.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:"",isAdded:!1},t.addContact=function(e,n,a){if(e.preventDefault(),t.state.contacts.forEach((function(e){if(e.name===n)return t.setState({isAdded:!0}),void setTimeout((function(){t.setState({isAdded:!1})}),1e3)})),!t.state.isAdded){var c={id:Object(h.a)(),name:n,number:a};t.setState((function(t){return{contacts:[].concat(Object(s.a)(t.contacts),[c]),name:"",number:""}}))}},t.handleChangeFilter=function(e){var n=e.value;t.setState({filter:n})},t.handleFindContact=function(e){t.setState({filter:e})},t.getFiteredContact=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t.handleDelete=function(e){return t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=JSON.parse(localStorage.getItem("contacts"))||D;t&&this.setState({contacts:t})}},{key:"componentDidUpdate",value:function(t,e){if(e.contacts!==this.state.contacts){var n=JSON.stringify(this.state.contacts);localStorage.setItem("contacts",n)}}},{key:"render",value:function(){var t=this.state,e=t.filter,n=t.isAdded,c=t.contacts,r=this.getFiteredContact();return Object(a.jsxs)(A,{children:[Object(a.jsxs)("section",{children:[Object(a.jsx)(_.a,{in:!0,appear:!0,timeout:500,classNames:"fade-logo",unmountOnExit:!0,children:Object(a.jsx)("h2",{className:"logo",children:"Phonebook"})}),Object(a.jsx)(f,{addContact:this.addContact})]}),Object(a.jsxs)("section",{children:[Object(a.jsx)("h2",{children:"Contacts"}),Object(a.jsx)(_.a,{in:c.length>1,timeout:500,classNames:"fade-filter",unmountOnExit:!0,children:Object(a.jsx)(x,{value:e,onChange:this.handleFindContact})}),Object(a.jsx)(y,{visibleContact:r,handleDelete:this.handleDelete}),Object(a.jsx)(_.a,{in:n,timeout:500,classNames:"fade-alert",unmountOnExit:!0,children:Object(a.jsx)(F,{})})]})]})}}]),n}(c.Component),I=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,36)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,o=e.getTTFB;n(t),a(t),c(t),r(t),o(t)}))};i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(k,{})}),document.getElementById("root")),I()}],[[31,1,2]]]);
//# sourceMappingURL=main.59e3f1f4.chunk.js.map