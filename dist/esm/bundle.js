import React, { useState } from 'react';

var Button = function Button(_ref) {
  var text = _ref.text,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? '' : _ref$type,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? '' : _ref$value,
      children = _ref.children,
      onClick = _ref.onClick,
      varient = _ref.varient,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled;
  return React.createElement("button", {
    className: "button ".concat(varient || ''),
    type: type,
    value: value,
    onClick: onClick,
    disabled: disabled
  }, children || text);
};

var Submit = function Submit(_ref) {
  var disabled = _ref.disabled,
      _ref$label = _ref.label,
      label = _ref$label === void 0 ? 'Submit' : _ref$label;
  return React.createElement(Button, {
    type: "submit",
    value: "Submit",
    text: label,
    disabled: disabled
  });
};

function hexToRgbA(hex) {
  var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var c;

  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split('');

    if (c.length == 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }

    c = '0x' + c.join('');
    return "rgba(".concat(c >> 16 & 255, ", ").concat(c >> 8 & 255, ", ").concat(c & 255, ", ").concat(opacity, ")");
  }

  throw new Error('Bad Hex');
}

var Chip = function Chip(_ref) {
  var label = _ref.label,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#0080ff' : _ref$color;
  return React.createElement("span", {
    className: "lpx-chip",
    style: {
      backgroundColor: hexToRgbA(color, .2),
      borderColor: hexToRgbA(color)
    }
  }, label);
};

var Tag = function Tag(_ref) {
  var label = _ref.label,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#0080ff' : _ref$color;
  return React.createElement("span", {
    className: "lpx-tag",
    style: {
      backgroundColor: hexToRgbA(color, .1),
      borderColor: hexToRgbA(color),
      color: color
    }
  }, label);
};

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var useInput = function useInput(initialValue) {
  var _useState = useState(initialValue),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  return {
    value: value,
    setValue: setValue,
    reset: function reset() {
      return setValue('');
    },
    bind: {
      value: value,
      onChange: function onChange(event) {
        setValue(event.target.value);
      }
    }
  };
};
var Form = function Form(_ref) {
  var children = _ref.children,
      onSubmit = _ref.onSubmit;
  return React.createElement("form", {
    onSubmit: onSubmit
  }, children);
};
var Verify = function Verify() {
  var _useInput = useInput(''),
      bindFirstName = _useInput.bind,
      resetFirstName = _useInput.reset;

  var _useInput2 = useInput(''),
      bindLastName = _useInput2.bind,
      resetLastName = _useInput2.reset;

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isButtonDisabled = _useState4[0],
      setButtonState = _useState4[1];

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    resetFirstName();
    resetLastName();
    setButtonState(true);
  };

  return React.createElement(Form, {
    onSubmit: handleSubmit
  }, React.createElement(Input, _extends({
    name: "firstName",
    id: "firstName",
    iconName: "fa-user-o",
    placeholder: "Email",
    required: true
  }, bindFirstName)), React.createElement("br", null), React.createElement(Input, _extends({
    name: "lastName",
    id: "lastName",
    placeholder: "Mobile No",
    iconName: "fa-mobile",
    iconSize: "1.4em",
    required: true
  }, bindLastName)), React.createElement("br", null), React.createElement(Submit, {
    disabled: isButtonDisabled
  }));
};

var Icon = function Icon(_ref) {
  var name = _ref.name,
      size = _ref.size;
  return name ? React.createElement("i", {
    className: "fa ".concat(name),
    style: {
      fontSize: size
    }
  }) : null;
};

var Checkbox = function Checkbox(_ref) {
  var _ref$label = _ref.label,
      label = _ref$label === void 0 ? '' : _ref$label,
      checked = _ref.checked,
      name = _ref.name,
      onChange = _ref.onChange,
      required = _ref.required;
  return React.createElement("label", {
    className: "lpx-checkbox"
  }, React.createElement("span", null, label), React.createElement("input", {
    name: name,
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    required: required
  }), React.createElement("span", {
    className: "checkmark"
  }));
};

var Input = function Input(_ref) {
  var _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'text' : _ref$type,
      name = _ref.name,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? '' : _ref$value,
      onChange = _ref.onChange,
      _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === void 0 ? '' : _ref$placeholder,
      iconName = _ref.iconName,
      iconSize = _ref.iconSize,
      _ref$required = _ref.required,
      required = _ref$required === void 0 ? true : _ref$required;
  return React.createElement("div", {
    className: "lpx-input-container"
  }, React.createElement(Icon, {
    name: iconName,
    size: iconSize
  }), React.createElement("div", {
    className: "lpx-input"
  }, React.createElement("input", {
    type: type,
    name: name,
    id: name,
    value: value,
    onChange: onChange,
    required: required
  }), React.createElement("label", {
    htmlFor: name
  }, placeholder)));
};

var Ellipsis = function Ellipsis() {
  return React.createElement("div", {
    className: "lds-ellipsis"
  }, React.createElement("div", {
    className: "shadow"
  }), React.createElement("div", {
    className: "shadow"
  }), React.createElement("div", {
    className: "shadow"
  }), React.createElement("div", {
    className: "shadow"
  }));
};

var Roller = function Roller() {
  return React.createElement("div", {
    className: "lds-roller"
  }, React.createElement("div", null), React.createElement("div", null), React.createElement("div", null), React.createElement("div", null), React.createElement("div", null), React.createElement("div", null), React.createElement("div", null), React.createElement("div", null));
};

var Branch = function Branch(_ref) {
  var children = _ref.children;
  return React.createElement("ul", null, children);
};
var Leaf = function Leaf(_ref2) {
  var children = _ref2.children;
  return React.createElement("li", null, children);
};
var Tree = function Tree(_ref3) {
  var parent = _ref3.parent,
      children = _ref3.children;
  return React.createElement("div", {
    className: "lpx-tree"
  }, React.createElement("div", null, parent), children);
};
var TreeStructure = function TreeStructure() {
  return React.createElement(Tree, null, React.createElement(Branch, null, React.createElement(Leaf, null, "Organic", React.createElement(Branch, null, React.createElement(Leaf, null, "Fruits", React.createElement(Branch, null, React.createElement(Leaf, null, "\uD83C\uDF53"), React.createElement(Leaf, null, "\uD83C\uDF4C"), React.createElement(Leaf, null, "\uD83C\uDF4D"))), React.createElement(Leaf, null, "Vegetables", React.createElement(Branch, null, React.createElement(Leaf, null, "\uD83C\uDF43"), React.createElement(Leaf, null, "\uD83C\uDF3D"))))), React.createElement(Leaf, null, "Junk", React.createElement(Branch, null, React.createElement(Leaf, null, "\uD83C\uDF54"), React.createElement(Leaf, null, "\uD83C\uDF67")))));
};

export { Button, Checkbox, Chip, Ellipsis, Form, Icon, Input, Roller, Submit, Tag, Tree, TreeStructure, Verify };
