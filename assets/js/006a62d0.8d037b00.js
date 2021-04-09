(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{104:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return b}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=n.a.createContext({}),p=function(e){var t=n.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},f=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(a),f=r,b=d["".concat(s,".").concat(f)]||d[f]||u[f]||o;return a?n.a.createElement(b,i(i({ref:t},c),{},{components:a})):n.a.createElement(b,i({ref:t},c))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=a[c];return n.a.createElement.apply(null,s)}return n.a.createElement.apply(null,a)}f.displayName="MDXCreateElement"},115:function(e,t,a){"use strict";var r=a(0),n=a.n(r);t.a=function(e){var t=e.relativeSize,a=e.src,r=e.alt;return n.a.createElement("img",{src:a,alt:r,style:{width:t,height:t,padding:"1.2rem",display:"block",marginLeft:"auto",marginRight:"auto"}})}},66:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return d}));var r=a(3),n=a(7),o=(a(0),a(104)),s=a(115),i={id:"gnosis-safe-tutorial",title:"Gnosis Safe as Wallet",slug:"/developers/tutorials/gnosis-safe-as-wallet"},l={unversionedId:"developers/tutorials/gnosis-safe-tutorial",id:"developers/tutorials/gnosis-safe-tutorial",isDocsHomePage:!1,title:"Gnosis Safe as Wallet",description:"Circles comes with circles.garden as a web wallet for Circles (CRC Tokens). Internally, during the setup, a smart contract is deployed as a multisignature wallet. This smart contract is a Gnosis Safe contract, therefore the Gnosis Safe web wallet can be used to access the Circles wallet.",source:"@site/docs/developers/tutorials/gnosis-safe-as-wallet.mdx",slug:"/developers/tutorials/gnosis-safe-as-wallet",permalink:"/docs/developers/tutorials/gnosis-safe-as-wallet",editUrl:"https://github.com/CirclesUBI/circles-handbook/edit/main/docs/developers/tutorials/gnosis-safe-as-wallet.mdx",version:"current"},c=[{value:"Open Gnosis Safe in read-only mode",id:"open-gnosis-safe-in-read-only-mode",children:[]},{value:"Import wallet address for write access",id:"import-wallet-address-for-write-access",children:[]}],p={toc:c};function d(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Circles comes with circles.garden as a web wallet for Circles (CRC Tokens). Internally, during the setup, a smart contract is deployed as a multisignature wallet. This smart contract is a ",Object(o.b)("a",{parentName:"p",href:"https://gnosis-safe.io/"},"Gnosis Safe")," contract, therefore the Gnosis Safe web wallet can be used to access the Circles wallet."),Object(o.b)("h2",{id:"open-gnosis-safe-in-read-only-mode"},"Open Gnosis Safe in read-only mode"),Object(o.b)("p",null,"This step-by-step-guide shows how to reuse the Gnosis Safe web wallet for Circles."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Login to ",Object(o.b)("a",{parentName:"li",href:"https://circles.garden/profile"},"circles.garden/profile"),', click on "Show Profile"')),Object(o.b)(s.a,{relativeSize:"50%",src:"../assets/gnosis-safe-1.png",alt:"Screenshot show profile",mdxType:"FormattedImage"}),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"Note down the address shown in the URL of your browser, eg. ",Object(o.b)("a",{parentName:"li",href:"https://circles.garden/profile/YOUR_PROFILE_ADDRESS"},"https://circles.garden/profile/YOUR_PROFILE_ADDRESS"),' it starts with "0x"')),Object(o.b)(s.a,{relativeSize:"60%",src:"../assets/gnosis-safe-2.png",alt:"Screenshot profile address",mdxType:"FormattedImage"}),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},"Go to ",Object(o.b)("a",{parentName:"li",href:"https://xdai.gnosis-safe.io/app/#/safes/YOUR_PROFILE_ADDRESS/balances"},"https://xdai.gnosis-safe.io/app/#/safes/YOUR_PROFILE_ADDRESS/balances"))),Object(o.b)("p",null,"So are now in read-only mode, but can see the current balances of your (and other) CRCs, but also xDai and other Tokens."),Object(o.b)("h2",{id:"import-wallet-address-for-write-access"},"Import wallet address for write access"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Note: For write access you need xDai on your account, a small amount like $0.1 already allows for some dozen transactions. You can try ",Object(o.b)("a",{parentName:"em",href:"https://xdai-faucet.top/"},"https://xdai-faucet.top/")," - if it doesn't work, ask someone for sending $0.1 to your wallet address.")),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Visit circles.garden in Google Chrome, open developer tools with Ctrl+Shift+I"),Object(o.b)("li",{parentName:"ol"},"Go to Storage/Local Storage/",Object(o.b)("a",{parentName:"li",href:"https://circles.garden"},"https://circles.garden")),Object(o.b)("li",{parentName:"ol"},"Copy private key (circles-production-mainnet-privateKey)")),Object(o.b)(s.a,{relativeSize:"60%",src:"../assets/gnosis-safe-3.jpeg",alt:"Screenshot local storage",mdxType:"FormattedImage"}),Object(o.b)("ol",{start:4},Object(o.b)("li",{parentName:"ol"},"Install ",Object(o.b)("a",{parentName:"li",href:"https://www.poa.network/for-users/nifty-wallet"},"Nifty Wallet")," or ",Object(o.b)("a",{parentName:"li",href:"https://metamask.io/"},"MetaMask")," in Chrome"),Object(o.b)("li",{parentName:"ol"},"Import Account with copied private key")),Object(o.b)(s.a,{relativeSize:"30%",src:"../assets/gnosis-safe-4.jpeg",alt:"Screenshot wallet",mdxType:"FormattedImage"}),Object(o.b)("p",null,'Now you have "write-access" and can also send Tokens as the one Owner of the multisig Gnosis Safe is imported to the browser wallet. You can now add new multisig users, but be aware that this might conflict with the original garden wallet.'))}d.isMDXComponent=!0}}]);