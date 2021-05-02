(self.webpackChunkreact_native_dropdown_picker_docs=self.webpackChunkreact_native_dropdown_picker_docs||[]).push([[4827],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return d},kt:function(){return c}});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),s=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=s(a),c=l,k=u["".concat(o,".").concat(c)]||u[c]||m[c]||r;return a?n.createElement(k,i(i({ref:t},d),{},{components:a})):n.createElement(k,i({ref:t},d))}));function c(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=u;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:l,i[1]=p;for(var s=2;s<r;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5644:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return o},default:function(){return d}});var n=a(2122),l=a(9756),r=(a(7294),a(3905)),i={id:"usage",title:"Usage"},p={unversionedId:"usage",id:"usage",isDocsHomePage:!1,title:"Usage",description:"Examples",source:"@site/docs/usage.md",sourceDirName:".",slug:"/usage",permalink:"/react-native-dropdown-picker-website/docs/next/usage",editUrl:"https://github.com/hossein-zare/react-native-dropdown-picker-website/edit/main/docs/usage.md",version:"current",frontMatter:{id:"usage",title:"Usage"},sidebar:"someSidebar",previous:{title:"Rules",permalink:"/react-native-dropdown-picker-website/docs/next/rules"},next:{title:"Item Schema",permalink:"/react-native-dropdown-picker-website/docs/next/item-schema"}},o=[{value:"Examples",id:"examples",children:[{value:"Single item",id:"single-item",children:[]},{value:"Multiple items",id:"multiple-items",children:[]}]},{value:"Props",id:"props",children:[{value:"<strong><code>items</code></strong>",id:"items",children:[]},{value:"<strong><code>value</code></strong>",id:"value",children:[]},{value:"<strong><code>open</code></strong>",id:"open",children:[]},{value:"<code>containerProps</code>",id:"containerprops",children:[]},{value:"<code>labelProps</code>",id:"labelprops",children:[]},{value:"<code>min</code>",id:"min",children:[]},{value:"<code>max</code>",id:"max",children:[]},{value:"<code>disabled</code>",id:"disabled",children:[]},{value:"<code>maxHeight</code>",id:"maxheight",children:[]},{value:"<code>disableBorderRadius</code>",id:"disableborderradius",children:[]},{value:"<code>zIndex</code>",id:"zindex",children:[]},{value:"<code>zIndexInverse</code>",id:"zindexinverse",children:[]}]},{value:"Callbacks",id:"callbacks",children:[{value:"<strong><code>setOpen</code></strong>",id:"setopen",children:[]},{value:"<strong><code>setItems</code></strong>",id:"setitems",children:[]},{value:"<strong><code>setValue</code></strong>",id:"setvalue",children:[]},{value:"<code>onPress</code>",id:"onpress",children:[]},{value:"<code>onOpen</code>",id:"onopen",children:[]},{value:"<code>onClose</code>",id:"onclose",children:[]}]},{value:"Styling",id:"styling",children:[{value:"<code>style</code>",id:"style",children:[]},{value:"<code>containerStyle</code>",id:"containerstyle",children:[]},{value:"<code>disabledStyle</code>",id:"disabledstyle",children:[]},{value:"<code>textStyle</code>",id:"textstyle",children:[]},{value:"<code>labelStyle</code>",id:"labelstyle",children:[]}]}],s={toc:o};function d(e){var t=e.components,a=(0,l.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("h3",{id:"single-item"},"Single item"),(0,r.kt)("p",null,"In the following example you can select only one item."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import DropDownPicker from 'react-native-dropdown-picker';\n\nfunction App() {\n  const [open, setOpen] = useState(false);\n  const [value, setValue] = useState(null);\n  const [items, setItems] = useState([\n    {label: 'Apple', value: 'apple'},\n    {label: 'Banana', value: 'banana'}\n  ]);\n\n  return (\n    <DropDownPicker\n      open={open}\n      value={value}\n      items={items}\n      setValue={setValue}\n      setItems={setItems}\n      setOpen={setOpen}\n    />\n  );\n}\n")),(0,r.kt)("h3",{id:"multiple-items"},"Multiple items"),(0,r.kt)("p",null,"In the following example you can select multiple items."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const [value, setValue] = useState([]);\n\n<DropDownPicker\n  multiple={true}\n  min={0}\n  max={5}\n  ...\n/>\n")),(0,r.kt)("h2",{id:"props"},"Props"),(0,r.kt)("h3",{id:"items"},(0,r.kt)("strong",{parentName:"h3"},(0,r.kt)("inlineCode",{parentName:"strong"},"items"))),(0,r.kt)("p",null,"State variable that holds the items."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"items={items}\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"true"))))),(0,r.kt)("h3",{id:"value"},(0,r.kt)("strong",{parentName:"h3"},(0,r.kt)("inlineCode",{parentName:"strong"},"value"))),(0,r.kt)("p",null,"State variable that specifies the value of the selected item. It's an array of values for multiple item pickers."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"value={value}\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"string, number, object"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"true"))))),(0,r.kt)("h3",{id:"open"},(0,r.kt)("strong",{parentName:"h3"},(0,r.kt)("inlineCode",{parentName:"strong"},"open"))),(0,r.kt)("p",null,"State variable that specifies whether the picker is open."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"open={open}\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"true"))))),(0,r.kt)("h3",{id:"containerprops"},(0,r.kt)("inlineCode",{parentName:"h3"},"containerProps")),(0,r.kt)("p",null,"Adds native props for the container."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"containerProps={{\n  //\n}}\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://reactnative.dev/docs/view#props"},"ViewProps"))))),(0,r.kt)("h3",{id:"labelprops"},(0,r.kt)("inlineCode",{parentName:"h3"},"labelProps")),(0,r.kt)("p",null,"Adds native props for the ",(0,r.kt)("inlineCode",{parentName:"p"},"Text")," element of the selected item."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"labelProps={{\n  numberOfLines: 1\n}}\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://reactnative.dev/docs/text#props"},"TextProps"))))),(0,r.kt)("h3",{id:"min"},(0,r.kt)("inlineCode",{parentName:"h3"},"min")),(0,r.kt)("p",null,"Specifies the minimum number of items."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"min={0}\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This only works with multiple item pickers."))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"null")))),(0,r.kt)("h3",{id:"max"},(0,r.kt)("inlineCode",{parentName:"h3"},"max")),(0,r.kt)("p",null,"Specifies the maximum number of items."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"max={10}\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This only works with multiple item pickers."))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"null")))),(0,r.kt)("h3",{id:"disabled"},(0,r.kt)("inlineCode",{parentName:"h3"},"disabled")),(0,r.kt)("p",null,"Disables the picker."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"disabled={true}\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"false")))),(0,r.kt)("h3",{id:"maxheight"},(0,r.kt)("inlineCode",{parentName:"h3"},"maxHeight")),(0,r.kt)("p",null,"Max height of the drop-down box."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"maxHeight={200}\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"200")))),(0,r.kt)("h3",{id:"disableborderradius"},(0,r.kt)("inlineCode",{parentName:"h3"},"disableBorderRadius")),(0,r.kt)("p",null,"Disables changing the border radius when opening."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"disableBorderRadius={true}\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"false")))),(0,r.kt)("h3",{id:"zindex"},(0,r.kt)("inlineCode",{parentName:"h3"},"zIndex")),(0,r.kt)("p",null,"Specifies the stack order."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"zIndex={1000}\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"5000")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"See: ",(0,r.kt)("a",{parentName:"strong",href:"tutorials/multiple-pickers"},"Multiple Pickers")))),(0,r.kt)("h3",{id:"zindexinverse"},(0,r.kt)("inlineCode",{parentName:"h3"},"zIndexInverse")),(0,r.kt)("p",null,"Specifies the inverse stack order."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"zIndexInverse={1000}\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"6000")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"See: ",(0,r.kt)("a",{parentName:"strong",href:"tutorials/multiple-pickers"},"Multiple Pickers")))),(0,r.kt)("h2",{id:"callbacks"},"Callbacks"),(0,r.kt)("h3",{id:"setopen"},(0,r.kt)("strong",{parentName:"h3"},(0,r.kt)("inlineCode",{parentName:"strong"},"setOpen"))),(0,r.kt)("p",null,"State callback that is called when the user presses the picker."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"setOpen={setOpen}\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"function"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"true"))))),(0,r.kt)("h3",{id:"setitems"},(0,r.kt)("strong",{parentName:"h3"},(0,r.kt)("inlineCode",{parentName:"strong"},"setItems"))),(0,r.kt)("p",null,"State callback that is called to modify or add new items."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"setItems={setItems}\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"function"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"true"))))),(0,r.kt)("h3",{id:"setvalue"},(0,r.kt)("strong",{parentName:"h3"},(0,r.kt)("inlineCode",{parentName:"strong"},"setValue"))),(0,r.kt)("p",null,"State callback that is called when the ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," changes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"setValue={setValue}\n")),(0,r.kt)("h3",{id:"onpress"},(0,r.kt)("inlineCode",{parentName:"h3"},"onPress")),(0,r.kt)("p",null,"Callback that is called as soon as the user presses the picker."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"onPress={(open) => console.log('was the picker open?', open)}\n")),(0,r.kt)("h3",{id:"onopen"},(0,r.kt)("inlineCode",{parentName:"h3"},"onOpen")),(0,r.kt)("p",null,"Callback that is called when the user opens the picker."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"onOpen={() => console.log('hi!')}\n")),(0,r.kt)("h3",{id:"onclose"},(0,r.kt)("inlineCode",{parentName:"h3"},"onClose")),(0,r.kt)("p",null,"Callback that is called when the user closes the picker."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"onClose={() => console.log('bye!')}\n")),(0,r.kt)("h2",{id:"styling"},"Styling"),(0,r.kt)("h3",{id:"style"},(0,r.kt)("inlineCode",{parentName:"h3"},"style")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'style={{\n  backgroundColor: "crimson"\n}}\n')),(0,r.kt)("h3",{id:"containerstyle"},(0,r.kt)("inlineCode",{parentName:"h3"},"containerStyle")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"containerStyle={{\n\n}}\n")),(0,r.kt)("h3",{id:"disabledstyle"},(0,r.kt)("inlineCode",{parentName:"h3"},"disabledStyle")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"disabledStyle={{\n  opacity: 0.5\n}}\n")),(0,r.kt)("h3",{id:"textstyle"},(0,r.kt)("inlineCode",{parentName:"h3"},"textStyle")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"textStyle={{\n  fontSize: 15\n}}\n")),(0,r.kt)("h3",{id:"labelstyle"},(0,r.kt)("inlineCode",{parentName:"h3"},"labelStyle")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'labelStyle={{\n  fontWeight: "bold"\n}}\n')))}d.isMDXComponent=!0}}]);