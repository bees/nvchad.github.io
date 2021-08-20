"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[365],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),f=p(r),m=o,d=f["".concat(c,".").concat(m)]||f[m]||s[m]||i;return r?n.createElement(d,a(a({ref:t},l),{},{components:r})):n.createElement(d,a({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8944:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return f}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],u={},c=void 0,p={unversionedId:"Support",id:"Support",isDocsHomePage:!1,title:"Support",description:"- Basic debugging",source:"@site/docs/Support.md",sourceDirName:".",slug:"/Support",permalink:"/docs/Support",version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Features",permalink:"/docs/Features"},next:{title:"Contribute",permalink:"/docs/Contribute"}},l=[],s={toc:l};function f(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Basic debugging\n-- Check the Packer log")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"less ~/.cache/nvim/packer.nvim.log\n")),(0,i.kt)("p",null,"-- Remove your compiled Packer plugins with"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"rm -r ~/.config/nvim/plugin`\n")),(0,i.kt)("p",null,"Then in NeoVim run ",(0,i.kt)("inlineCode",{parentName:"p"},":PackerSync")," and ",(0,i.kt)("strong",{parentName:"p"},"restart NeoVim")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Before logging an issue:\n-- ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/NvChad/NvChad/issues?q=is%3Aissue"},"Search the GitHub issue list"),"\n-- Then ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/NvChad/NvChad/issues/new/choose"},"log an issue, be sure to provide ",(0,i.kt)("strong",{parentName:"a"},"all prompted information")))))}f.isMDXComponent=!0}}]);