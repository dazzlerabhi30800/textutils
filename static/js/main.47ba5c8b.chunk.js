(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(4),o=a.n(s),l=(a(9),a(2)),r=(a(10),a(0));function i(e){return Object(r.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(r.jsxs)("div",{className:"container-fluid",children:[Object(r.jsx)("a",{className:"navbar-brand",href:"#",children:e.title}),Object(r.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(r.jsx)("span",{className:"navbar-toggler-icon"})}),Object(r.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(r.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)("a",{className:"nav-link",href:"#",children:e.aboutText})})]}),Object(r.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(r.jsx)("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),Object(r.jsxs)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:[e.text," Dark Mode"]})]})]})]})})}function b(e){var t=Object(n.useState)("Enter text here"),a=Object(l.a)(t,2),c=a[0],s=a[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:"container",style:{color:"dark"===e.mode?"white":"#4f16df"},children:[Object(r.jsx)("h1",{children:e.heading}),Object(r.jsx)("div",{className:"mb-3",children:Object(r.jsx)("textarea",{className:"form-control",style:{backgroundColor:"dark"===e.mode?"#130a29":"white",color:"dark"===e.mode?"white":"black"},onChange:function(e){console.log("On change!"),s(e.target.value)},value:c,id:"exampleFormControlTextarea1",rows:"7"})}),Object(r.jsx)("button",{className:"btn btn-info mx-2",onClick:function(){console.log("Uppercase was clicked!"+c);var t=c.toUpperCase();s(t),e.showAlert("Converted to Uppercase","info")},children:"Convert to Uppercase"}),Object(r.jsx)("button",{className:"btn btn-warning mx-1",onClick:function(){console.log("LowerCase was clicked!"+c);var t=c.toLowerCase();s(t),e.showAlert("Converted to Lowercase","warning")},children:"Convert to Lowercase"}),Object(r.jsx)("button",{className:"btn btn-danger mx-2",onClick:function(){console.log("LowerCase was clicked!"+c);s(""),e.showAlert("Textbox has been cleared","danger")},children:"Click to Clear Text"}),Object(r.jsx)("button",{className:"btn btn-secondary mx-2",onClick:function(){console.log("I am copy");var t=document.getElementById("exampleFormControlTextarea1");t.select(),t.setSelectionRange(0,9999),navigator.clipboard.writeText(t.value),e.showAlert("Text has been copied to clipboard","secondary")},children:"Click to Copy Text to clipboard"}),Object(r.jsx)("button",{className:"btn btn-success mx-2",onClick:function(){var t=c.split(/[ ]+/);s(t.join(" ")),e.showAlert("Extra spaces has been removed","success")},children:"Click to Remove Extra Spaces."})]}),Object(r.jsxs)("div",{className:"className my-3",style:{color:"dark"===e.mode?"white":"#130a29"},children:[Object(r.jsx)("h1",{children:"Your text summary"}),Object(r.jsxs)("p",{children:[c.split(" ").length," words and ",c.length," characters"]}),Object(r.jsxs)("p",{children:[.008*c.split(" ").length," minutes to read."]}),Object(r.jsx)("h2",{children:"Preview"}),Object(r.jsx)("p",{children:c.length>0?c:"Enter something in the textbox above to preview it here."})]})]})}function d(e){return e.alert&&Object(r.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(r.jsx)("strong",{children:function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)}),": ",e.alert.msg,Object(r.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"alert","aria-label":"Close"})]})}i.defaultProps={title:"Set title here",aboutText:"Set about text here"};var h=function(){var e=Object(n.useState)("light"),t=Object(l.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)("Enable"),o=Object(l.a)(s,2),h=o[0],j=o[1],m=Object(n.useState)(null),u=Object(l.a)(m,2),x=u[0],g=u[1],p=function(e,t){g({msg:e,type:t}),setTimeout((function(){g(null)}),2e3)};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(i,{title:"TextUtils",text:h,toggleMode:function(){"light"===a?(c("dark"),j("Disable"),document.body.style.backgroundColor="#130a29",p("Dark mode has been enabled","success"),document.title="TextUtils - Dark Mode",setInterval((function(){document.title="TextUtils is Amazing Mode"}),3500),setInterval((function(){document.title="Install TextUtils Now"}),1500)):(c("light"),j("Enable"),document.body.style.backgroundColor="white",p("Light mode has been enabled","success"),document.title="TextUtils - Light Mode")},aboutText:"About-us",mode:a}),Object(r.jsx)(d,{alert:x}),Object(r.jsx)("div",{className:"container my-3",children:Object(r.jsx)(b,{showAlert:p,heading:"Enter the text to analyze below",mode:a})})]})},j=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,13)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;a(e),n(e),c(e),s(e),o(e)}))};o.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(h,{})}),document.getElementById("root")),j()},9:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.47ba5c8b.chunk.js.map