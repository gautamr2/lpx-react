(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{146:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return Input});__webpack_require__(55);var react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),Input=function(_ref){var _ref$type=_ref.type,type=void 0===_ref$type?"text":_ref$type,name=_ref.name,_ref$value=_ref.value,value=void 0===_ref$value?"":_ref$value,onChange=_ref.onChange,_ref$placeholder=_ref.placeholder,placeholder=void 0===_ref$placeholder?"":_ref$placeholder,_ref$required=_ref.required;return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"lpx-input"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input",{type:type,name:name,id:name,value:value,onChange:onChange,required:!(void 0!==_ref$required)||_ref$required}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label",{htmlFor:name},placeholder))};Input.displayName="Input",Input.__docgenInfo={description:"",methods:[],displayName:"Input",props:{type:{defaultValue:{value:"'text'",computed:!1},required:!1},value:{defaultValue:{value:"''",computed:!1},required:!1},placeholder:{defaultValue:{value:"''",computed:!1},required:!1},required:{defaultValue:{value:"true",computed:!1},required:!1}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/input-text/Input.js"]={name:"Input",docgenInfo:Input.__docgenInfo,path:"src/components/input/input-text/Input.js"})},147:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return Submit});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_button_Button__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(58),Submit=function(_ref){var disabled=_ref.disabled;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_button_Button__WEBPACK_IMPORTED_MODULE_1__.a,{type:"submit",value:"Submit",text:"Submit",disabled:disabled})};Submit.displayName="Submit",Submit.__docgenInfo={description:"",methods:[],displayName:"Submit"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/buttons/submit/Submit.js"]={name:"Submit",docgenInfo:Submit.__docgenInfo,path:"src/components/buttons/submit/Submit.js"})},148:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return Tag});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_utility_utility__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(57),Tag=function(_ref){var label=_ref.label,_ref$color=_ref.color,color=void 0===_ref$color?"#0080ff":_ref$color;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:"lpx-tag",style:{backgroundColor:Object(_utility_utility__WEBPACK_IMPORTED_MODULE_1__.a)(color,.1),borderColor:Object(_utility_utility__WEBPACK_IMPORTED_MODULE_1__.a)(color),color:color}},label)};Tag.displayName="Tag",Tag.__docgenInfo={description:"",methods:[],displayName:"Tag",props:{color:{defaultValue:{value:"'#0080ff'",computed:!1},required:!1}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/tags/Tag.js"]={name:"Tag",docgenInfo:Tag.__docgenInfo,path:"src/components/tags/Tag.js"})},238:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__.a='# lpx-react\n\n[![Build Status](https://travis-ci.org/gautamr2/lpx-react.svg?branch=master)](https://travis-ci.org/gautamr2/lpx-react)\n[![Coverage Status](https://coveralls.io/repos/github/gautamr2/lpx-react/badge.svg?branch=master)](https://coveralls.io/github/gautamr2/lpx-react?branch=master)\n[![npm version](https://badge.fury.io/js/lpx-react.svg)](https://badge.fury.io/js/lpx-react)\n\nA React component library\n\n## Demo\n\nBrowse components and explore their props with [Storybook](https://gautamr2.github.io/lpx-react).\n\n## Quick Start\n\nInstall the package with `npm`\n\n```sh\nnpm i lpx-react\n```\n\nor `yarn` - whichever you prefer\n\n```sh\nyarn add lpx-react\n```\n\nImport any spinner you like\n\n```js\nimport { Ellipsis } from "lpx-react";\n```\n\nand then it\'s business as usual\n\n```js\nconst Loader = props => <Ellipsis />;\n```\n\n## Prerequisites\n\nThis library imports its styles through JavaScript. To make it work, you may need to tweak your config.\n'},240:function(module,exports,__webpack_require__){__webpack_require__(241),__webpack_require__(343),module.exports=__webpack_require__(344)},344:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__(345);var _storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(23);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.addParameters)({options:{name:"Look-box",url:"https://github.com/gautamr2/lpx-react",isFullscreen:!1,showPanel:!0}}),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.configure)(function loadStories(){__webpack_require__(525)},module)}.call(this,__webpack_require__(179)(module))},345:function(module,exports,__webpack_require__){var content=__webpack_require__(346);"string"==typeof content&&(content=[[module.i,content,""]]);var options={hmr:!0,transform:void 0,insertInto:void 0};__webpack_require__(355)(content,options);content.locals&&(module.exports=content.locals)},346:function(module,exports,__webpack_require__){exports=module.exports=__webpack_require__(347)(!1);var getUrl=__webpack_require__(348),___CSS_LOADER_URL___0___=getUrl(__webpack_require__(349)),___CSS_LOADER_URL___1___=getUrl(__webpack_require__(350)+"?#iefix&v=4.7.0"),___CSS_LOADER_URL___2___=getUrl(__webpack_require__(351)),___CSS_LOADER_URL___3___=getUrl(__webpack_require__(352)),___CSS_LOADER_URL___4___=getUrl(__webpack_require__(353)),___CSS_LOADER_URL___5___=getUrl(__webpack_require__(354)+"#fontawesomeregular");exports.push([module.i,"*{font-family:sans-serif}:focus{outline:none}html{font-size:14px}\n\n/*!\n *  Font Awesome 4.7.0 by @davegandy - http://fontawesome.io - @fontawesome\n *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)\n */@font-face{font-family:FontAwesome;src:url("+___CSS_LOADER_URL___0___+");src:url("+___CSS_LOADER_URL___1___+') format("embedded-opentype"),url('+___CSS_LOADER_URL___2___+') format("woff2"),url('+___CSS_LOADER_URL___3___+') format("woff"),url('+___CSS_LOADER_URL___4___+') format("truetype"),url('+___CSS_LOADER_URL___5___+') format("svg");font-weight:400;font-style:normal}.fa{display:inline-block;font:normal normal normal 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.fa-lg{font-size:1.33333333rem;line-height:.75em;vertical-align:-15%}.fa-2x{font-size:2rem}.fa-3x{font-size:3rem}.fa-4x{font-size:4rem}.fa-5x{font-size:5rem}.fa-arrow-circle-left:before{content:"\\f0a8"}.fa-arrow-circle-right:before{content:"\\f0a9"}.fa-whatsapp:before{content:"\\f232"}.fa-minus-circle:before{content:"\\f056"}.fa-check-circle:before{content:"\\f058"}.fa-circle-o:before{content:"\\f10c"}.fa-circle:before{content:"\\f111"}.fa-trash:before{content:"\\f1f8"}.fa-pencil-square-o:before{content:"\\f044"}.fa-inr:before{content:"\\f156"}.fa-shopping-cart:before{content:"\\f07a"}.fa-times-circle-o:before{content:"\\f05c"}.fa-facebook:before{content:"\\f09a"}.fa-twitter:before{content:"\\f099"}.fa-pinterest:before{content:"\\f0d2"}.fa-instagram:before{content:"\\f16d"}.fa-google-plus:before{content:"\\f0d5"}.fa-copyright:before{content:"\\f1f9"}.fa-ellipsis-v:before{content:"\\f142"}.fa-phone:before{content:"\\f095"}.fa-user-o:before{content:"\\f2c0"}.fa-mobile:before{content:"\\f10b"}.fa-link:before{content:"\\f0c1"}.fa-plus-circle:before{content:"\\f055"}.fa-shield:before{content:"\\f132"}.fa-briefcase:before{content:"\\f0b1"}.fa-heartbeat:before{content:"\\f21e"}.fa-info-circle:before{content:"\\f05a"}.fa-comments-o:before{content:"\\f0e6"}.fa-exclamation-triangle:before{content:"\\f071"}.fa-exclamation-circle:before{content:"\\f06a"}.fa-clock-o:before{content:"\\f017"}.fa-angle-left:before{content:"\\f104"}.fa-angle-right:before{content:"\\f105"}.fa-user-circle:before{content:"\\f2bd"}.fa-camera-retro:before{content:"\\f083"}.fa-home:before{content:"\\f015"}.fa-money:before{content:"\\f0d6"}.fa-hand-peace-o:before{content:"\\f25b"}.fa-long-arrow-left:before{content:"\\f177"}.fa-opencart:before{content:"\\f23d"}.fa-telegram:before{content:"\\f2c6"}.button{padding:10px;background-color:#3f5efb;color:#fff;min-width:260px;font-size:1rem;border-radius:3px}.button.small{min-width:120px}.button:disabled{background-color:#b3bffd}.button:disabled:hover{opacity:1;cursor:not-allowed}.button:hover{opacity:.9;cursor:pointer}.lpx-chip{border:1px solid;padding:4px 10px;border-radius:5px;color:#555}.lpx-chip,.lpx-tag{font-size:12px;font-weight:500}.lpx-tag{border:1px solid;padding:2px 5px;border-radius:10px}.fa{font-size:14px}.lpx-checkbox{display:block;position:relative;padding-left:25px;cursor:pointer;font-size:1.1rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:flex;align-items:center}.lpx-checkbox input{position:absolute;opacity:0;cursor:pointer;height:0;width:0}.lpx-checkbox .checkmark{position:absolute;top:0;left:0;height:16px;width:16px;border:2px solid #3f5efb;border-radius:3px;background-color:#fff}.lpx-checkbox .checkmark:after{content:"";position:absolute;display:none;left:4px;top:0;width:5px;height:10px;border:solid #fff;border-width:0 2px 2px 0;transform:rotate(45deg)}.lpx-checkbox:hover input~.checkmark{background-color:#eee}.lpx-checkbox input:checked~.checkmark{background-color:#3f5efb}.lpx-checkbox input:checked~.checkmark:after{display:block}.lpx-input{position:relative;width:260px;height:44px;line-height:44px}.lpx-input input{width:100%;border:0;outline:0;padding:.3rem 0;border-bottom:2px solid #d3d3d3;box-shadow:none;color:#111;font-size:1rem}.lpx-input input:invalid{outline:0}.lpx-input input:focus,.lpx-input input:valid{border-color:#3f5efb}.lpx-input input:focus~label,.lpx-input input:valid~label{font-size:.8rem;top:-18px;color:#3f5efb}.lpx-input label{position:absolute;top:0;left:0;width:100%;color:#888;transition:all .1s ease-in;cursor:text}.lds-ellipsis{display:inline-block;position:relative;width:64px;height:64px}.lds-ellipsis div{position:absolute;top:27px;width:11px;height:11px;border-radius:50%;background:#3f5efb;-webkit-animation-timing-function:cubic-bezier(0,1,1,0);animation-timing-function:cubic-bezier(0,1,1,0)}.lds-ellipsis div:first-child{left:6px;-webkit-animation:lds-ellipsis1 .6s infinite;animation:lds-ellipsis1 .6s infinite}.lds-ellipsis div:nth-child(2){left:6px}.lds-ellipsis div:nth-child(2),.lds-ellipsis div:nth-child(3){-webkit-animation:lds-ellipsis2 .6s infinite;animation:lds-ellipsis2 .6s infinite}.lds-ellipsis div:nth-child(3){left:26px}.lds-ellipsis div:nth-child(4){left:45px;-webkit-animation:lds-ellipsis3 .6s infinite;animation:lds-ellipsis3 .6s infinite}@-webkit-keyframes lds-ellipsis1{0%{transform:scale(0)}to{transform:scale(1)}}@keyframes lds-ellipsis1{0%{transform:scale(0)}to{transform:scale(1)}}@-webkit-keyframes lds-ellipsis3{0%{transform:scale(1)}to{transform:scale(0)}}@keyframes lds-ellipsis3{0%{transform:scale(1)}to{transform:scale(0)}}@-webkit-keyframes lds-ellipsis2{0%{transform:translate(0)}to{transform:translate(19px)}}@keyframes lds-ellipsis2{0%{transform:translate(0)}to{transform:translate(19px)}}.lds-roller{display:inline-block;position:relative;width:64px;height:64px}.lds-roller div{-webkit-animation:lds-roller 1.2s cubic-bezier(.5,0,.5,1) infinite;animation:lds-roller 1.2s cubic-bezier(.5,0,.5,1) infinite;transform-origin:32px 32px}.lds-roller div:after{content:" ";display:block;position:absolute;width:6px;height:6px;border-radius:50%;background:#3f5efb;margin:-3px 0 0 -3px}.lds-roller div:first-child{-webkit-animation-delay:-36ms;animation-delay:-36ms}.lds-roller div:first-child:after{top:50px;left:50px}.lds-roller div:nth-child(2){-webkit-animation-delay:-72ms;animation-delay:-72ms}.lds-roller div:nth-child(2):after{top:54px;left:45px}.lds-roller div:nth-child(3){-webkit-animation-delay:-.108s;animation-delay:-.108s}.lds-roller div:nth-child(3):after{top:57px;left:39px}.lds-roller div:nth-child(4){-webkit-animation-delay:-.144s;animation-delay:-.144s}.lds-roller div:nth-child(4):after{top:58px;left:32px}.lds-roller div:nth-child(5){-webkit-animation-delay:-.18s;animation-delay:-.18s}.lds-roller div:nth-child(5):after{top:57px;left:25px}.lds-roller div:nth-child(6){-webkit-animation-delay:-.216s;animation-delay:-.216s}.lds-roller div:nth-child(6):after{top:54px;left:19px}.lds-roller div:nth-child(7){-webkit-animation-delay:-.252s;animation-delay:-.252s}.lds-roller div:nth-child(7):after{top:50px;left:14px}.lds-roller div:nth-child(8){-webkit-animation-delay:-.288s;animation-delay:-.288s}.lds-roller div:nth-child(8):after{top:45px;left:10px}@-webkit-keyframes lds-roller{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes lds-roller{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.lds-spinner{color:official;display:inline-block;position:relative;width:64px;height:64px}.lds-spinner div{transform-origin:32px 32px;-webkit-animation:lds-spinner 1.2s linear infinite;animation:lds-spinner 1.2s linear infinite}.lds-spinner div:after{content:" ";display:block;position:absolute;top:3px;left:29px;width:5px;height:14px;border-radius:20%;background:#3f5efb}.lds-spinner div:first-child{transform:rotate(0deg);-webkit-animation-delay:-1.1s;animation-delay:-1.1s}.lds-spinner div:nth-child(2){transform:rotate(30deg);-webkit-animation-delay:-1s;animation-delay:-1s}.lds-spinner div:nth-child(3){transform:rotate(60deg);-webkit-animation-delay:-.9s;animation-delay:-.9s}.lds-spinner div:nth-child(4){transform:rotate(90deg);-webkit-animation-delay:-.8s;animation-delay:-.8s}.lds-spinner div:nth-child(5){transform:rotate(120deg);-webkit-animation-delay:-.7s;animation-delay:-.7s}.lds-spinner div:nth-child(6){transform:rotate(150deg);-webkit-animation-delay:-.6s;animation-delay:-.6s}.lds-spinner div:nth-child(7){transform:rotate(180deg);-webkit-animation-delay:-.5s;animation-delay:-.5s}.lds-spinner div:nth-child(8){transform:rotate(210deg);-webkit-animation-delay:-.4s;animation-delay:-.4s}.lds-spinner div:nth-child(9){transform:rotate(240deg);-webkit-animation-delay:-.3s;animation-delay:-.3s}.lds-spinner div:nth-child(10){transform:rotate(270deg);-webkit-animation-delay:-.2s;animation-delay:-.2s}.lds-spinner div:nth-child(11){transform:rotate(300deg);-webkit-animation-delay:-.1s;animation-delay:-.1s}.lds-spinner div:nth-child(12){transform:rotate(330deg);-webkit-animation-delay:0s;animation-delay:0s}@-webkit-keyframes lds-spinner{0%{opacity:1}to{opacity:0}}@keyframes lds-spinner{0%{opacity:1}to{opacity:0}}.lpx-tree li,.lpx-tree ul{position:relative}.lpx-tree ul{list-style:none}.lpx-tree ul>li:last-child:after{height:1rem}.lpx-tree li:after,.lpx-tree li:before{content:"";position:absolute;left:-.8rem}.lpx-tree li:before{border-top:1px solid #ccc;top:1.1rem;width:.6rem;height:0}.lpx-tree li:after{border-left:1px solid #ccc;height:100%;width:0;top:.2rem}',""])},349:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/fontawesome-webfont.674f50d2.eot"},350:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/fontawesome-webfont.674f50d2.eot"},351:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/fontawesome-webfont.af7ae505.woff2"},352:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/fontawesome-webfont.fee66e71.woff"},353:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/fontawesome-webfont.b06871f2.ttf"},354:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/fontawesome-webfont.912ec66d.svg"},525:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(23),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_README_md__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(238),_src_components_chips_Chip__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(79),_src_index__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(528),_src_index__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(529),_src_index__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(530),_src_index__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(531),_src_index__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(146),_src_index__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(532),_src_index__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(147),_src_index__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(58),_src_index__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(533),_src_index__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(148),_ref=react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_index__WEBPACK_IMPORTED_MODULE_4__.a,null),_ref2=react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_index__WEBPACK_IMPORTED_MODULE_5__.a,null),_ref3=react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_index__WEBPACK_IMPORTED_MODULE_6__.a,null);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("Loaders",module).add("Ellipsis",function(){return _ref}).add("Spinner",function(){return _ref2}).add("Roller",function(){return _ref3});var _ref4=react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_index__WEBPACK_IMPORTED_MODULE_7__.a,{label:"One"});Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("Input",module).add("Input",function(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_index__WEBPACK_IMPORTED_MODULE_8__.a,{name:"name",placeholder:"Enter your name",id:"name",onChange:function onChange(){}})}).add("Checkbox",function(){return _ref4});var _ref5=react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_index__WEBPACK_IMPORTED_MODULE_9__.a,null);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("Forms",module).add("Forms",function(){return _ref5},{notes:{markdown:_README_md__WEBPACK_IMPORTED_MODULE_2__.a}});var _ref6=react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_index__WEBPACK_IMPORTED_MODULE_10__.a,null),_ref7=react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_index__WEBPACK_IMPORTED_MODULE_10__.a,{disabled:!0});Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("Buttons",module).add("Button",function(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_index__WEBPACK_IMPORTED_MODULE_11__.a,{text:"Reset",onClick:function onClick(){console.log("Hello")}}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{style:{height:30}}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_index__WEBPACK_IMPORTED_MODULE_11__.a,{text:"Disabled",onClick:function onClick(){console.log("Hello")},disabled:!0}))}).add("Button props{small}",function(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_index__WEBPACK_IMPORTED_MODULE_11__.a,{varient:"small",text:"Reset",onClick:function onClick(){console.log("Hello")}}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{style:{height:30}}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_index__WEBPACK_IMPORTED_MODULE_11__.a,{varient:"small",text:"Disabled",onClick:function onClick(){console.log("Hello")},disabled:!0}))}).add("Submit",function(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,null,_ref6,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{style:{height:30}}),_ref7)});var _ref8=react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_index__WEBPACK_IMPORTED_MODULE_12__.a,null);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("Tree",module).add("Tree",function(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{style:{fontSize:"2rem"}},_ref8)});var _ref9=react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_components_chips_Chip__WEBPACK_IMPORTED_MODULE_3__.a,{label:"EC2",color:"#FFB6BE"}),_ref10=react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_components_chips_Chip__WEBPACK_IMPORTED_MODULE_3__.a,{label:"m4.medium (r)",color:"#00f"}),_ref11=react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_components_chips_Chip__WEBPACK_IMPORTED_MODULE_3__.a,{label:"us east 1",color:"#BAC8FF"}),_ref12=react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_components_chips_Chip__WEBPACK_IMPORTED_MODULE_3__.a,{label:"EUW3-DataTransfer-Out-Bytes",color:"#12b886"});Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("Chips",module).add("Chip",function(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{style:{padding:"160px"}},_ref9,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{style:{marginTop:15}}),_ref10,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{style:{marginTop:15}}),_ref11,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{style:{marginTop:15}}),_ref12)});var _ref13=react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_index__WEBPACK_IMPORTED_MODULE_13__.a,{label:"Not Verified",color:"#f03e3e"}),_ref14=react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_index__WEBPACK_IMPORTED_MODULE_13__.a,{label:"Auto Discovered",color:"#99cfe0"}),_ref15=react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_index__WEBPACK_IMPORTED_MODULE_13__.a,{label:"Verified",color:"#12b886"});Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("Tags",module).add("Tag",function(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{style:{padding:"160px"}},_ref13,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{style:{marginTop:15}}),_ref14,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{style:{marginTop:15}}),_ref15)},{notes:"<Tag label='Verified' color='#ade6bb' />"})}.call(this,__webpack_require__(179)(module))},528:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return Ellipsis});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_ref=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"lds-ellipsis"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null)),Ellipsis=function(){return _ref};Ellipsis.displayName="Ellipsis",Ellipsis.__docgenInfo={description:"",methods:[],displayName:"Ellipsis"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/loaders/ellipsis/Ellipsis.js"]={name:"Ellipsis",docgenInfo:Ellipsis.__docgenInfo,path:"src/components/loaders/ellipsis/Ellipsis.js"})},529:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return Spinner});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_ref=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"lds-spinner"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null)),Spinner=function(){return _ref};Spinner.displayName="Spinner",Spinner.__docgenInfo={description:"",methods:[],displayName:"Spinner"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/loaders/spinner/Spinner.js"]={name:"Spinner",docgenInfo:Spinner.__docgenInfo,path:"src/components/loaders/spinner/Spinner.js"})},530:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return Roller});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_ref=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"lds-roller"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null)),Roller=function(){return _ref};Roller.displayName="Roller",Roller.__docgenInfo={description:"",methods:[],displayName:"Roller"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/loaders/roller/Roller.js"]={name:"Roller",docgenInfo:Roller.__docgenInfo,path:"src/components/loaders/roller/Roller.js"})},531:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return Checkbox});__webpack_require__(55);var react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_ref2=react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",{className:"checkmark"}),Checkbox=function(_ref){var _ref$label=_ref.label,label=void 0===_ref$label?"":_ref$label,checked=_ref.checked,name=_ref.name,onChange=_ref.onChange,required=_ref.required;return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label",{className:"lpx-checkbox"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",null,label),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input",{name:name,type:"checkbox",checked:checked,onChange:onChange,required:required}),_ref2)};Checkbox.displayName="Checkbox",Checkbox.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{label:{defaultValue:{value:"''",computed:!1},required:!1}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/checkbox/Checkbox.js"]={name:"Checkbox",docgenInfo:Checkbox.__docgenInfo,path:"src/components/input/checkbox/Checkbox.js"})},532:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return Verify});__webpack_require__(20),__webpack_require__(27),__webpack_require__(28),__webpack_require__(35),__webpack_require__(21),__webpack_require__(145),__webpack_require__(46),__webpack_require__(16),__webpack_require__(31),__webpack_require__(32);var react__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__),___WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(146),___WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(147);function _extends(){return(_extends=Object.assign||function(target){for(var source,i=1;i<arguments.length;i++)for(var key in source=arguments[i])Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key]);return target}).apply(this,arguments)}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var useInput=function(initialValue){var _useState2=_slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_10__.useState)(initialValue),2),value=_useState2[0],setValue=_useState2[1];return{value:value,setValue:setValue,reset:function reset(){return setValue("")},bind:{value:value,onChange:function onChange(event){setValue(event.target.value)}}}},Form=function(_ref){var children=_ref.children,onSubmit=_ref.onSubmit;return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("form",{onSubmit:onSubmit},children)};Form.displayName="Form";var _ref2=react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br",null),_ref3=react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br",null),Verify=function(){var _useInput=useInput(""),bindFirstName=_useInput.bind,resetFirstName=_useInput.reset,_useInput2=useInput(""),bindLastName=_useInput2.bind,resetLastName=_useInput2.reset,_useState4=_slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_10__.useState)(!1),2),isButtonDisabled=_useState4[0],setButtonState=_useState4[1];return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(Form,{onSubmit:function handleSubmit(e){e.preventDefault(),resetFirstName(),resetLastName(),setButtonState(!0)}},react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(___WEBPACK_IMPORTED_MODULE_11__.a,_extends({name:"firstName",id:"firstName",placeholder:"Enter first name",required:!0},bindFirstName)),_ref2,react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(___WEBPACK_IMPORTED_MODULE_11__.a,_extends({name:"lastName",id:"lastName",placeholder:"Enter last name",required:!0},bindLastName)),_ref3,react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(___WEBPACK_IMPORTED_MODULE_12__.a,{disabled:isButtonDisabled}))};Verify.displayName="Verify",Form.__docgenInfo={description:"",methods:[],displayName:"Form"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/forms/Form.js"]={name:"Form",docgenInfo:Form.__docgenInfo,path:"src/components/forms/Form.js"}),Verify.__docgenInfo={description:"",methods:[],displayName:"Verify"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/forms/Form.js"]={name:"Verify",docgenInfo:Verify.__docgenInfo,path:"src/components/forms/Form.js"})},533:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return TreeStructure});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),Branch=function(_ref){var children=_ref.children;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul",null,children)};Branch.displayName="Branch";var Leaf=function(_ref2){var children=_ref2.children;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,children)};Leaf.displayName="Leaf";var Tree=function(_ref3){var parent=_ref3.parent,children=_ref3.children;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"lpx-tree"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,parent),children)};Tree.displayName="Tree";var _ref4=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tree,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Branch,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Leaf,null,"Organic",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Branch,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Leaf,null,"Fruits",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Branch,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Leaf,null,"🍓"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Leaf,null,"🍌"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Leaf,null,"🍍"))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Leaf,null,"Vegetables",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Branch,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Leaf,null,"🍃"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Leaf,null,"🌽"))))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Leaf,null,"Junk",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Branch,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Leaf,null,"🍔"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Leaf,null,"🍧"))))),TreeStructure=function(){return _ref4};TreeStructure.displayName="TreeStructure",Branch.__docgenInfo={description:"",methods:[],displayName:"Branch"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/tree/tree/Tree.js"]={name:"Branch",docgenInfo:Branch.__docgenInfo,path:"src/components/tree/tree/Tree.js"}),Leaf.__docgenInfo={description:"",methods:[],displayName:"Leaf"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/tree/tree/Tree.js"]={name:"Leaf",docgenInfo:Leaf.__docgenInfo,path:"src/components/tree/tree/Tree.js"}),Tree.__docgenInfo={description:"",methods:[],displayName:"Tree"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/tree/tree/Tree.js"]={name:"Tree",docgenInfo:Tree.__docgenInfo,path:"src/components/tree/tree/Tree.js"}),TreeStructure.__docgenInfo={description:"",methods:[],displayName:"TreeStructure"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/tree/tree/Tree.js"]={name:"TreeStructure",docgenInfo:TreeStructure.__docgenInfo,path:"src/components/tree/tree/Tree.js"})},57:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return hexToRgbA});__webpack_require__(15),__webpack_require__(526),__webpack_require__(39),__webpack_require__(133);function hexToRgbA(hex){var c,opacity=1<arguments.length&&void 0!==arguments[1]?arguments[1]:1;if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex))return 3==(c=hex.substring(1).split("")).length&&(c=[c[0],c[0],c[1],c[1],c[2],c[2]]),c="0x"+c.join(""),"rgba(".concat(255&c>>16,", ").concat(255&c>>8,", ").concat(255&c,", ").concat(opacity,")");throw new Error("Bad Hex")}},58:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return Button});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),Button=function(_ref){var text=_ref.text,_ref$type=_ref.type,type=void 0===_ref$type?"":_ref$type,_ref$value=_ref.value,value=void 0===_ref$value?"":_ref$value,children=_ref.children,onClick=_ref.onClick,varient=_ref.varient,_ref$disabled=_ref.disabled;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button",{className:"button ".concat(varient),type:type,value:value,onClick:onClick,disabled:void 0!==_ref$disabled&&_ref$disabled},children||text)};Button.displayName="Button",Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{type:{defaultValue:{value:"''",computed:!1},required:!1},value:{defaultValue:{value:"''",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/buttons/button/Button.js"]={name:"Button",docgenInfo:Button.__docgenInfo,path:"src/components/buttons/button/Button.js"})},79:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return Chip});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_utility_utility__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(57),Chip=function(_ref){var label=_ref.label,_ref$color=_ref.color,color=void 0===_ref$color?"#0080ff":_ref$color;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:"lpx-chip",style:{backgroundColor:Object(_utility_utility__WEBPACK_IMPORTED_MODULE_1__.a)(color,.2),borderColor:Object(_utility_utility__WEBPACK_IMPORTED_MODULE_1__.a)(color)}},label)};Chip.displayName="Chip",Chip.__docgenInfo={description:"",methods:[],displayName:"Chip",props:{color:{defaultValue:{value:"'#0080ff'",computed:!1},required:!1}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/chips/Chip.js"]={name:"Chip",docgenInfo:Chip.__docgenInfo,path:"src/components/chips/Chip.js"})}},[[240,1,2]]]);
//# sourceMappingURL=main.778061d443226b0dc1f2.bundle.js.map