"use strict";function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(exports,"__esModule",{value:!0});var React=_interopDefault(require("react")),Input=function(e){var t=e.type,l=void 0===t?"text":t,n=e.name,a=e.value,c=void 0===a?"":a,r=e.onChange,i=e.placeholder,u=void 0===i?"":i;return React.createElement("div",{className:"lpx-input"},React.createElement("input",{type:l,name:n,value:c,placeholder:u,onChange:r}))},Ellipsis=function(){return React.createElement("div",{className:"lds-ellipsis"},React.createElement("div",null),React.createElement("div",null),React.createElement("div",null),React.createElement("div",null))},Roller=function(){return React.createElement("div",{className:"lds-roller"},React.createElement("div",null),React.createElement("div",null),React.createElement("div",null),React.createElement("div",null),React.createElement("div",null),React.createElement("div",null),React.createElement("div",null),React.createElement("div",null))},Spinner=function(){return React.createElement("div",{className:"lds-spinner"},React.createElement("div",null),React.createElement("div",null),React.createElement("div",null),React.createElement("div",null),React.createElement("div",null),React.createElement("div",null),React.createElement("div",null),React.createElement("div",null),React.createElement("div",null),React.createElement("div",null),React.createElement("div",null),React.createElement("div",null))};exports.Ellipsis=Ellipsis,exports.Input=Input,exports.Roller=Roller,exports.Spinner=Spinner;
