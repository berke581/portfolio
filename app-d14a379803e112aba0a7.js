(self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || []).push([[143],{

/***/ 4694:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "api": function() { return /* binding */ api; },
/* harmony export */   "config": function() { return /* binding */ config$1; },
/* harmony export */   "counter": function() { return /* binding */ counter; },
/* harmony export */   "dom": function() { return /* binding */ dom$1; },
/* harmony export */   "findIconDefinition": function() { return /* binding */ findIconDefinition$1; },
/* harmony export */   "icon": function() { return /* binding */ icon; },
/* harmony export */   "layer": function() { return /* binding */ layer; },
/* harmony export */   "library": function() { return /* binding */ library$1; },
/* harmony export */   "noAuto": function() { return /* binding */ noAuto$1; },
/* harmony export */   "parse": function() { return /* binding */ parse$1; },
/* harmony export */   "text": function() { return /* binding */ text; },
/* harmony export */   "toHtml": function() { return /* binding */ toHtml$1; }
/* harmony export */ });
/*!
 * Font Awesome Free 6.0.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

function _wrapRegExp() {
  _wrapRegExp = function _wrapRegExp(re, groups) {
    return new BabelRegExp(re, void 0, groups);
  };

  var _super = RegExp.prototype,
      _groups = new WeakMap();

  function BabelRegExp(re, flags, groups) {
    var _this = new RegExp(re, flags);

    return _groups.set(_this, groups || _groups.get(re)), _setPrototypeOf(_this, BabelRegExp.prototype);
  }

  function buildGroups(result, re) {
    var g = _groups.get(re);

    return Object.keys(g).reduce(function (groups, name) {
      return groups[name] = result[g[name]], groups;
    }, Object.create(null));
  }

  return _inherits(BabelRegExp, RegExp), BabelRegExp.prototype.exec = function (str) {
    var result = _super.exec.call(this, str);

    return result && (result.groups = buildGroups(result, this)), result;
  }, BabelRegExp.prototype[Symbol.replace] = function (str, substitution) {
    if ("string" == typeof substitution) {
      var groups = _groups.get(this);

      return _super[Symbol.replace].call(this, str, substitution.replace(/\$<([^>]+)>/g, function (_, name) {
        return "$" + groups[name];
      }));
    }

    if ("function" == typeof substitution) {
      var _this = this;

      return _super[Symbol.replace].call(this, str, function () {
        var args = arguments;
        return "object" != typeof args[args.length - 1] && (args = [].slice.call(args)).push(buildGroups(args, _this)), substitution.apply(this, args);
      });
    }

    return _super[Symbol.replace].call(this, str, substitution);
  }, _wrapRegExp.apply(this, arguments);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
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

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var noop = function noop() {};

var _WINDOW = {};
var _DOCUMENT = {};
var _MUTATION_OBSERVER = null;
var _PERFORMANCE = {
  mark: noop,
  measure: noop
};

try {
  if (typeof window !== 'undefined') _WINDOW = window;
  if (typeof document !== 'undefined') _DOCUMENT = document;
  if (typeof MutationObserver !== 'undefined') _MUTATION_OBSERVER = MutationObserver;
  if (typeof performance !== 'undefined') _PERFORMANCE = performance;
} catch (e) {}

var _ref = _WINDOW.navigator || {},
    _ref$userAgent = _ref.userAgent,
    userAgent = _ref$userAgent === void 0 ? '' : _ref$userAgent;

var WINDOW = _WINDOW;
var DOCUMENT = _DOCUMENT;
var MUTATION_OBSERVER = _MUTATION_OBSERVER;
var PERFORMANCE = _PERFORMANCE;
var IS_BROWSER = !!WINDOW.document;
var IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === 'function' && typeof DOCUMENT.createElement === 'function';
var IS_IE = ~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/');
var NAMESPACE_IDENTIFIER = '___FONT_AWESOME___';
var UNITS_IN_GRID = 16;
var DEFAULT_FAMILY_PREFIX = 'fa';
var DEFAULT_REPLACEMENT_CLASS = 'svg-inline--fa';
var DATA_FA_I2SVG = 'data-fa-i2svg';
var DATA_FA_PSEUDO_ELEMENT = 'data-fa-pseudo-element';
var DATA_FA_PSEUDO_ELEMENT_PENDING = 'data-fa-pseudo-element-pending';
var DATA_PREFIX = 'data-prefix';
var DATA_ICON = 'data-icon';
var HTML_CLASS_I2SVG_BASE_CLASS = 'fontawesome-i2svg';
var MUTATION_APPROACH_ASYNC = 'async';
var TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS = ['HTML', 'HEAD', 'STYLE', 'SCRIPT'];

var PRODUCTION = function () {
  try {
    return "production" === 'production';
  } catch (e) {
    return false;
  }
}();

var PREFIX_TO_STYLE = {
  'fas': 'solid',
  'fa-solid': 'solid',
  'far': 'regular',
  'fa-regular': 'regular',
  'fal': 'light',
  'fa-light': 'light',
  'fat': 'thin',
  'fa-thin': 'thin',
  'fad': 'duotone',
  'fa-duotone': 'duotone',
  'fab': 'brands',
  'fa-brands': 'brands',
  'fak': 'kit',
  'fa-kit': 'kit',
  'fa': 'solid'
};
var STYLE_TO_PREFIX = {
  'solid': 'fas',
  'regular': 'far',
  'light': 'fal',
  'thin': 'fat',
  'duotone': 'fad',
  'brands': 'fab',
  'kit': 'fak'
};
var PREFIX_TO_LONG_STYLE = {
  'fab': 'fa-brands',
  'fad': 'fa-duotone',
  'fak': 'fa-kit',
  'fal': 'fa-light',
  'far': 'fa-regular',
  'fas': 'fa-solid',
  'fat': 'fa-thin'
};
var LONG_STYLE_TO_PREFIX = {
  'fa-brands': 'fab',
  'fa-duotone': 'fad',
  'fa-kit': 'fak',
  'fa-light': 'fal',
  'fa-regular': 'far',
  'fa-solid': 'fas',
  'fa-thin': 'fat'
};
var ICON_SELECTION_SYNTAX_PATTERN = /fa[srltdbk\-\ ]/; // eslint-disable-line no-useless-escape

var LAYERS_TEXT_CLASSNAME = 'fa-layers-text';
var FONT_FAMILY_PATTERN = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i; // TODO: do we need to handle font-weight for kit SVG pseudo-elements?

var FONT_WEIGHT_TO_PREFIX = {
  '900': 'fas',
  '400': 'far',
  'normal': 'far',
  '300': 'fal',
  '100': 'fat'
};
var oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var oneToTwenty = oneToTen.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
var ATTRIBUTES_WATCHED_FOR_MUTATION = ['class', 'data-prefix', 'data-icon', 'data-fa-transform', 'data-fa-mask'];
var DUOTONE_CLASSES = {
  GROUP: 'duotone-group',
  SWAP_OPACITY: 'swap-opacity',
  PRIMARY: 'primary',
  SECONDARY: 'secondary'
};
var RESERVED_CLASSES = [].concat(_toConsumableArray(Object.keys(STYLE_TO_PREFIX)), ['2xs', 'xs', 'sm', 'lg', 'xl', '2xl', 'beat', 'border', 'fade', 'beat-fade', 'bounce', 'flip-both', 'flip-horizontal', 'flip-vertical', 'flip', 'fw', 'inverse', 'layers-counter', 'layers-text', 'layers', 'li', 'pull-left', 'pull-right', 'pulse', 'rotate-180', 'rotate-270', 'rotate-90', 'rotate-by', 'shake', 'spin-pulse', 'spin-reverse', 'spin', 'stack-1x', 'stack-2x', 'stack', 'ul', DUOTONE_CLASSES.GROUP, DUOTONE_CLASSES.SWAP_OPACITY, DUOTONE_CLASSES.PRIMARY, DUOTONE_CLASSES.SECONDARY]).concat(oneToTen.map(function (n) {
  return "".concat(n, "x");
})).concat(oneToTwenty.map(function (n) {
  return "w-".concat(n);
}));
var initial = WINDOW.FontAwesomeConfig || {};

function getAttrConfig(attr) {
  var element = DOCUMENT.querySelector('script[' + attr + ']');

  if (element) {
    return element.getAttribute(attr);
  }
}

function coerce(val) {
  // Getting an empty string will occur if the attribute is set on the HTML tag but without a value
  // We'll assume that this is an indication that it should be toggled to true
  // For example <script data-search-pseudo-elements src="..."></script>
  if (val === '') return true;
  if (val === 'false') return false;
  if (val === 'true') return true;
  return val;
}

if (DOCUMENT && typeof DOCUMENT.querySelector === 'function') {
  var attrs = [['data-family-prefix', 'familyPrefix'], ['data-style-default', 'styleDefault'], ['data-replacement-class', 'replacementClass'], ['data-auto-replace-svg', 'autoReplaceSvg'], ['data-auto-add-css', 'autoAddCss'], ['data-auto-a11y', 'autoA11y'], ['data-search-pseudo-elements', 'searchPseudoElements'], ['data-observe-mutations', 'observeMutations'], ['data-mutate-approach', 'mutateApproach'], ['data-keep-original-source', 'keepOriginalSource'], ['data-measure-performance', 'measurePerformance'], ['data-show-missing-icons', 'showMissingIcons']];
  attrs.forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        attr = _ref2[0],
        key = _ref2[1];

    var val = coerce(getAttrConfig(attr));

    if (val !== undefined && val !== null) {
      initial[key] = val;
    }
  });
}

var _default = {
  familyPrefix: DEFAULT_FAMILY_PREFIX,
  styleDefault: 'solid',
  replacementClass: DEFAULT_REPLACEMENT_CLASS,
  autoReplaceSvg: true,
  autoAddCss: true,
  autoA11y: true,
  searchPseudoElements: false,
  observeMutations: true,
  mutateApproach: 'async',
  keepOriginalSource: true,
  measurePerformance: false,
  showMissingIcons: true
};

var _config = _objectSpread2(_objectSpread2({}, _default), initial);

if (!_config.autoReplaceSvg) _config.observeMutations = false;
var config = {};
Object.keys(_config).forEach(function (key) {
  Object.defineProperty(config, key, {
    enumerable: true,
    set: function set(val) {
      _config[key] = val;

      _onChangeCb.forEach(function (cb) {
        return cb(config);
      });
    },
    get: function get() {
      return _config[key];
    }
  });
});
WINDOW.FontAwesomeConfig = config;
var _onChangeCb = [];

function onChange(cb) {
  _onChangeCb.push(cb);

  return function () {
    _onChangeCb.splice(_onChangeCb.indexOf(cb), 1);
  };
}

var d = UNITS_IN_GRID;
var meaninglessTransform = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: false,
  flipY: false
};

function insertCss(css) {
  if (!css || !IS_DOM) {
    return;
  }

  var style = DOCUMENT.createElement('style');
  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  var headChildren = DOCUMENT.head.childNodes;
  var beforeChild = null;

  for (var i = headChildren.length - 1; i > -1; i--) {
    var child = headChildren[i];
    var tagName = (child.tagName || '').toUpperCase();

    if (['STYLE', 'LINK'].indexOf(tagName) > -1) {
      beforeChild = child;
    }
  }

  DOCUMENT.head.insertBefore(style, beforeChild);
  return css;
}

var idPool = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

function nextUniqueId() {
  var size = 12;
  var id = '';

  while (size-- > 0) {
    id += idPool[Math.random() * 62 | 0];
  }

  return id;
}

function toArray(obj) {
  var array = [];

  for (var i = (obj || []).length >>> 0; i--;) {
    array[i] = obj[i];
  }

  return array;
}

function classArray(node) {
  if (node.classList) {
    return toArray(node.classList);
  } else {
    return (node.getAttribute('class') || '').split(' ').filter(function (i) {
      return i;
    });
  }
}

function htmlEscape(str) {
  return "".concat(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function joinAttributes(attributes) {
  return Object.keys(attributes || {}).reduce(function (acc, attributeName) {
    return acc + "".concat(attributeName, "=\"").concat(htmlEscape(attributes[attributeName]), "\" ");
  }, '').trim();
}

function joinStyles(styles) {
  return Object.keys(styles || {}).reduce(function (acc, styleName) {
    return acc + "".concat(styleName, ": ").concat(styles[styleName].trim(), ";");
  }, '');
}

function transformIsMeaningful(transform) {
  return transform.size !== meaninglessTransform.size || transform.x !== meaninglessTransform.x || transform.y !== meaninglessTransform.y || transform.rotate !== meaninglessTransform.rotate || transform.flipX || transform.flipY;
}

function transformForSvg(_ref) {
  var transform = _ref.transform,
      containerWidth = _ref.containerWidth,
      iconWidth = _ref.iconWidth;
  var outer = {
    transform: "translate(".concat(containerWidth / 2, " 256)")
  };
  var innerTranslate = "translate(".concat(transform.x * 32, ", ").concat(transform.y * 32, ") ");
  var innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") ");
  var innerRotate = "rotate(".concat(transform.rotate, " 0 0)");
  var inner = {
    transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
  };
  var path = {
    transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
  };
  return {
    outer: outer,
    inner: inner,
    path: path
  };
}

function transformForCss(_ref2) {
  var transform = _ref2.transform,
      _ref2$width = _ref2.width,
      width = _ref2$width === void 0 ? UNITS_IN_GRID : _ref2$width,
      _ref2$height = _ref2.height,
      height = _ref2$height === void 0 ? UNITS_IN_GRID : _ref2$height,
      _ref2$startCentered = _ref2.startCentered,
      startCentered = _ref2$startCentered === void 0 ? false : _ref2$startCentered;
  var val = '';

  if (startCentered && IS_IE) {
    val += "translate(".concat(transform.x / d - width / 2, "em, ").concat(transform.y / d - height / 2, "em) ");
  } else if (startCentered) {
    val += "translate(calc(-50% + ".concat(transform.x / d, "em), calc(-50% + ").concat(transform.y / d, "em)) ");
  } else {
    val += "translate(".concat(transform.x / d, "em, ").concat(transform.y / d, "em) ");
  }

  val += "scale(".concat(transform.size / d * (transform.flipX ? -1 : 1), ", ").concat(transform.size / d * (transform.flipY ? -1 : 1), ") ");
  val += "rotate(".concat(transform.rotate, "deg) ");
  return val;
}

var baseStyles = ":root, :host {\n  --fa-font-solid: normal 900 1em/1 \"Font Awesome 6 Solid\";\n  --fa-font-regular: normal 400 1em/1 \"Font Awesome 6 Regular\";\n  --fa-font-light: normal 300 1em/1 \"Font Awesome 6 Light\";\n  --fa-font-thin: normal 100 1em/1 \"Font Awesome 6 Thin\";\n  --fa-font-duotone: normal 900 1em/1 \"Font Awesome 6 Duotone\";\n  --fa-font-brands: normal 400 1em/1 \"Font Awesome 6 Brands\";\n}\n\nsvg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {\n  overflow: visible;\n  box-sizing: content-box;\n}\n\n.svg-inline--fa {\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285705em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  top: 0.25em;\n}\n.svg-inline--fa.fa-fw {\n  width: var(--fa-fw-width, 1.25em);\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  -webkit-transform: scale(var(--fa-counter-scale, 0.25));\n          transform: scale(var(--fa-counter-scale, 0.25));\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: 0.625em;\n  line-height: 0.1em;\n  vertical-align: 0.225em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n  line-height: 0.0833333337em;\n  vertical-align: 0.125em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n  line-height: 0.0714285718em;\n  vertical-align: 0.0535714295em;\n}\n\n.fa-lg {\n  font-size: 1.25em;\n  line-height: 0.05em;\n  vertical-align: -0.075em;\n}\n\n.fa-xl {\n  font-size: 1.5em;\n  line-height: 0.0416666682em;\n  vertical-align: -0.125em;\n}\n\n.fa-2xl {\n  font-size: 2em;\n  line-height: 0.03125em;\n  vertical-align: -0.1875em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: var(--fa-li-margin, 2.5em);\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: calc(var(--fa-li-width, 2em) * -1);\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.08em);\n  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);\n}\n\n.fa-pull-left {\n  float: left;\n  margin-right: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right {\n  float: right;\n  margin-left: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  -webkit-animation-name: fa-beat;\n          animation-name: fa-beat;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  -webkit-animation-name: fa-bounce;\n          animation-name: fa-bounce;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  -webkit-animation-name: fa-fade;\n          animation-name: fa-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  -webkit-animation-name: fa-beat-fade;\n          animation-name: fa-beat-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  -webkit-animation-name: fa-flip;\n          animation-name: fa-flip;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  -webkit-animation-name: fa-shake;\n          animation-name: fa-shake;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 2s);\n          animation-duration: var(--fa-animation-duration, 2s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));\n          animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n.fa-bounce,\n.fa-fade,\n.fa-beat-fade,\n.fa-flip,\n.fa-pulse,\n.fa-shake,\n.fa-spin,\n.fa-spin-pulse {\n    -webkit-animation-delay: -1ms;\n            animation-delay: -1ms;\n    -webkit-animation-duration: 1ms;\n            animation-duration: 1ms;\n    -webkit-animation-iteration-count: 1;\n            animation-iteration-count: 1;\n    transition-delay: 0s;\n    transition-duration: 0s;\n  }\n}\n@-webkit-keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@-webkit-keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n}\n@-webkit-keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@-webkit-keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@-webkit-keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@-webkit-keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg);\n  }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg);\n  }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n  }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg);\n  }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg);\n  }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg);\n  }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg);\n  }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n  }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg);\n  }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg);\n  }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  -webkit-transform: rotate(var(--fa-rotate-angle, none));\n          transform: rotate(var(--fa-rotate-angle, none));\n}\n\n.fa-stack {\n  display: inline-block;\n  vertical-align: middle;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: var(--fa-stack-z-index, auto);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.sr-only,\n.fa-sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.sr-only-focusable:not(:focus),\n.fa-sr-only-focusable:not(:focus) {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse,\n.fa-duotone.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}";

function css() {
  var dfp = DEFAULT_FAMILY_PREFIX;
  var drc = DEFAULT_REPLACEMENT_CLASS;
  var fp = config.familyPrefix;
  var rc = config.replacementClass;
  var s = baseStyles;

  if (fp !== dfp || rc !== drc) {
    var dPatt = new RegExp("\\.".concat(dfp, "\\-"), 'g');
    var customPropPatt = new RegExp("\\--".concat(dfp, "\\-"), 'g');
    var rPatt = new RegExp("\\.".concat(drc), 'g');
    s = s.replace(dPatt, ".".concat(fp, "-")).replace(customPropPatt, "--".concat(fp, "-")).replace(rPatt, ".".concat(rc));
  }

  return s;
}

var _cssInserted = false;

function ensureCss() {
  if (config.autoAddCss && !_cssInserted) {
    insertCss(css());
    _cssInserted = true;
  }
}

var InjectCSS = {
  mixout: function mixout() {
    return {
      dom: {
        css: css,
        insertCss: ensureCss
      }
    };
  },
  hooks: function hooks() {
    return {
      beforeDOMElementCreation: function beforeDOMElementCreation() {
        ensureCss();
      },
      beforeI2svg: function beforeI2svg() {
        ensureCss();
      }
    };
  }
};
var w = WINDOW || {};
if (!w[NAMESPACE_IDENTIFIER]) w[NAMESPACE_IDENTIFIER] = {};
if (!w[NAMESPACE_IDENTIFIER].styles) w[NAMESPACE_IDENTIFIER].styles = {};
if (!w[NAMESPACE_IDENTIFIER].hooks) w[NAMESPACE_IDENTIFIER].hooks = {};
if (!w[NAMESPACE_IDENTIFIER].shims) w[NAMESPACE_IDENTIFIER].shims = [];
var namespace = w[NAMESPACE_IDENTIFIER];
var functions = [];

var listener = function listener() {
  DOCUMENT.removeEventListener('DOMContentLoaded', listener);
  loaded = 1;
  functions.map(function (fn) {
    return fn();
  });
};

var loaded = false;

if (IS_DOM) {
  loaded = (DOCUMENT.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(DOCUMENT.readyState);
  if (!loaded) DOCUMENT.addEventListener('DOMContentLoaded', listener);
}

function domready(fn) {
  if (!IS_DOM) return;
  loaded ? setTimeout(fn, 0) : functions.push(fn);
}

function toHtml(abstractNodes) {
  var tag = abstractNodes.tag,
      _abstractNodes$attrib = abstractNodes.attributes,
      attributes = _abstractNodes$attrib === void 0 ? {} : _abstractNodes$attrib,
      _abstractNodes$childr = abstractNodes.children,
      children = _abstractNodes$childr === void 0 ? [] : _abstractNodes$childr;

  if (typeof abstractNodes === 'string') {
    return htmlEscape(abstractNodes);
  } else {
    return "<".concat(tag, " ").concat(joinAttributes(attributes), ">").concat(children.map(toHtml).join(''), "</").concat(tag, ">");
  }
}

function iconFromMapping(mapping, prefix, iconName) {
  if (mapping && mapping[prefix] && mapping[prefix][iconName]) {
    return {
      prefix: prefix,
      iconName: iconName,
      icon: mapping[prefix][iconName]
    };
  }
}
/**
 * Internal helper to bind a function known to have 4 arguments
 * to a given context.
 */


var bindInternal4 = function bindInternal4(func, thisContext) {
  return function (a, b, c, d) {
    return func.call(thisContext, a, b, c, d);
  };
};
/**
 * # Reduce
 *
 * A fast object `.reduce()` implementation.
 *
 * @param  {Object}   subject      The object to reduce over.
 * @param  {Function} fn           The reducer function.
 * @param  {mixed}    initialValue The initial value for the reducer, defaults to subject[0].
 * @param  {Object}   thisContext  The context for the reducer.
 * @return {mixed}                 The final result.
 */


var reduce = function fastReduceObject(subject, fn, initialValue, thisContext) {
  var keys = Object.keys(subject),
      length = keys.length,
      iterator = thisContext !== undefined ? bindInternal4(fn, thisContext) : fn,
      i,
      key,
      result;

  if (initialValue === undefined) {
    i = 1;
    result = subject[keys[0]];
  } else {
    i = 0;
    result = initialValue;
  }

  for (; i < length; i++) {
    key = keys[i];
    result = iterator(result, subject[key], key, subject);
  }

  return result;
};
/**
 * ucs2decode() and codePointAt() are both works of Mathias Bynens and licensed under MIT
 *
 * Copyright Mathias Bynens <https://mathiasbynens.be/>

 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:

 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */


function ucs2decode(string) {
  var output = [];
  var counter = 0;
  var length = string.length;

  while (counter < length) {
    var value = string.charCodeAt(counter++);

    if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
      var extra = string.charCodeAt(counter++);

      if ((extra & 0xFC00) == 0xDC00) {
        // eslint-disable-line eqeqeq
        output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
      } else {
        output.push(value);
        counter--;
      }
    } else {
      output.push(value);
    }
  }

  return output;
}

function toHex(unicode) {
  var decoded = ucs2decode(unicode);
  return decoded.length === 1 ? decoded[0].toString(16) : null;
}

function codePointAt(string, index) {
  var size = string.length;
  var first = string.charCodeAt(index);
  var second;

  if (first >= 0xD800 && first <= 0xDBFF && size > index + 1) {
    second = string.charCodeAt(index + 1);

    if (second >= 0xDC00 && second <= 0xDFFF) {
      return (first - 0xD800) * 0x400 + second - 0xDC00 + 0x10000;
    }
  }

  return first;
}

function normalizeIcons(icons) {
  return Object.keys(icons).reduce(function (acc, iconName) {
    var icon = icons[iconName];
    var expanded = !!icon.icon;

    if (expanded) {
      acc[icon.iconName] = icon.icon;
    } else {
      acc[iconName] = icon;
    }

    return acc;
  }, {});
}

function defineIcons(prefix, icons) {
  var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var _params$skipHooks = params.skipHooks,
      skipHooks = _params$skipHooks === void 0 ? false : _params$skipHooks;
  var normalized = normalizeIcons(icons);

  if (typeof namespace.hooks.addPack === 'function' && !skipHooks) {
    namespace.hooks.addPack(prefix, normalizeIcons(icons));
  } else {
    namespace.styles[prefix] = _objectSpread2(_objectSpread2({}, namespace.styles[prefix] || {}), normalized);
  }
  /**
   * Font Awesome 4 used the prefix of `fa` for all icons. With the introduction
   * of new styles we needed to differentiate between them. Prefix `fa` is now an alias
   * for `fas` so we'll ease the upgrade process for our users by automatically defining
   * this as well.
   */


  if (prefix === 'fas') {
    defineIcons('fa', icons);
  }
}

var duotonePathRe = [/*#__PURE__*/_wrapRegExp(/path d="((?:(?!")[\s\S])+)".*path d="((?:(?!")[\s\S])+)"/, {
  d1: 1,
  d2: 2
}), /*#__PURE__*/_wrapRegExp(/path class="((?:(?!")[\s\S])+)".*d="((?:(?!")[\s\S])+)".*path class="((?:(?!")[\s\S])+)".*d="((?:(?!")[\s\S])+)"/, {
  cls1: 1,
  d1: 2,
  cls2: 3,
  d2: 4
}), /*#__PURE__*/_wrapRegExp(/path class="((?:(?!")[\s\S])+)".*d="((?:(?!")[\s\S])+)"/, {
  cls1: 1,
  d1: 2
})];
var styles = namespace.styles,
    shims = namespace.shims;
var LONG_STYLE = Object.values(PREFIX_TO_LONG_STYLE);
var _defaultUsablePrefix = null;
var _byUnicode = {};
var _byLigature = {};
var _byOldName = {};
var _byOldUnicode = {};
var _byAlias = {};
var PREFIXES = Object.keys(PREFIX_TO_STYLE);

function isReserved(name) {
  return ~RESERVED_CLASSES.indexOf(name);
}

function getIconName(familyPrefix, cls) {
  var parts = cls.split('-');
  var prefix = parts[0];
  var iconName = parts.slice(1).join('-');

  if (prefix === familyPrefix && iconName !== '' && !isReserved(iconName)) {
    return iconName;
  } else {
    return null;
  }
}

var build = function build() {
  var lookup = function lookup(reducer) {
    return reduce(styles, function (o, style, prefix) {
      o[prefix] = reduce(style, reducer, {});
      return o;
    }, {});
  };

  _byUnicode = lookup(function (acc, icon, iconName) {
    if (icon[3]) {
      acc[icon[3]] = iconName;
    }

    if (icon[2]) {
      var aliases = icon[2].filter(function (a) {
        return typeof a === 'number';
      });
      aliases.forEach(function (alias) {
        acc[alias.toString(16)] = iconName;
      });
    }

    return acc;
  });
  _byLigature = lookup(function (acc, icon, iconName) {
    acc[iconName] = iconName;

    if (icon[2]) {
      var aliases = icon[2].filter(function (a) {
        return typeof a === 'string';
      });
      aliases.forEach(function (alias) {
        acc[alias] = iconName;
      });
    }

    return acc;
  });
  _byAlias = lookup(function (acc, icon, iconName) {
    var aliases = icon[2];
    acc[iconName] = iconName;
    aliases.forEach(function (alias) {
      acc[alias] = iconName;
    });
    return acc;
  }); // If we have a Kit, we can't determine if regular is available since we
  // could be auto-fetching it. We'll have to assume that it is available.

  var hasRegular = 'far' in styles || config.autoFetchSvg;
  var shimLookups = reduce(shims, function (acc, shim) {
    var maybeNameMaybeUnicode = shim[0];
    var prefix = shim[1];
    var iconName = shim[2];

    if (prefix === 'far' && !hasRegular) {
      prefix = 'fas';
    }

    if (typeof maybeNameMaybeUnicode === 'string') {
      acc.names[maybeNameMaybeUnicode] = {
        prefix: prefix,
        iconName: iconName
      };
    }

    if (typeof maybeNameMaybeUnicode === 'number') {
      acc.unicodes[maybeNameMaybeUnicode.toString(16)] = {
        prefix: prefix,
        iconName: iconName
      };
    }

    return acc;
  }, {
    names: {},
    unicodes: {}
  });
  _byOldName = shimLookups.names;
  _byOldUnicode = shimLookups.unicodes;
  _defaultUsablePrefix = getCanonicalPrefix(config.styleDefault);
};

onChange(function (c) {
  _defaultUsablePrefix = getCanonicalPrefix(c.styleDefault);
});
build();

function byUnicode(prefix, unicode) {
  return (_byUnicode[prefix] || {})[unicode];
}

function byLigature(prefix, ligature) {
  return (_byLigature[prefix] || {})[ligature];
}

function byAlias(prefix, alias) {
  return (_byAlias[prefix] || {})[alias];
}

function byOldName(name) {
  return _byOldName[name] || {
    prefix: null,
    iconName: null
  };
}

function byOldUnicode(unicode) {
  var oldUnicode = _byOldUnicode[unicode];
  var newUnicode = byUnicode('fas', unicode);
  return oldUnicode || (newUnicode ? {
    prefix: 'fas',
    iconName: newUnicode
  } : null) || {
    prefix: null,
    iconName: null
  };
}

function getDefaultUsablePrefix() {
  return _defaultUsablePrefix;
}

var emptyCanonicalIcon = function emptyCanonicalIcon() {
  return {
    prefix: null,
    iconName: null,
    rest: []
  };
};

function getCanonicalPrefix(styleOrPrefix) {
  var style = PREFIX_TO_STYLE[styleOrPrefix];
  var prefix = STYLE_TO_PREFIX[styleOrPrefix] || STYLE_TO_PREFIX[style];
  var defined = styleOrPrefix in namespace.styles ? styleOrPrefix : null;
  return prefix || defined || null;
}

function getCanonicalIcon(values) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$skipLookups = params.skipLookups,
      skipLookups = _params$skipLookups === void 0 ? false : _params$skipLookups;
  var givenPrefix = null;
  var canonical = values.reduce(function (acc, cls) {
    var iconName = getIconName(config.familyPrefix, cls);

    if (styles[cls]) {
      cls = LONG_STYLE.includes(cls) ? LONG_STYLE_TO_PREFIX[cls] : cls;
      givenPrefix = cls;
      acc.prefix = cls;
    } else if (PREFIXES.indexOf(cls) > -1) {
      givenPrefix = cls;
      acc.prefix = getCanonicalPrefix(cls);
    } else if (iconName) {
      acc.iconName = iconName;
    } else if (cls !== config.replacementClass) {
      acc.rest.push(cls);
    }

    if (!skipLookups && acc.prefix && acc.iconName) {
      var shim = givenPrefix === 'fa' ? byOldName(acc.iconName) : {};
      var aliasIconName = byAlias(acc.prefix, acc.iconName);

      if (shim.prefix) {
        givenPrefix = null;
      }

      acc.iconName = shim.iconName || aliasIconName || acc.iconName;
      acc.prefix = shim.prefix || acc.prefix;

      if (acc.prefix === 'far' && !styles['far'] && styles['fas'] && !config.autoFetchSvg) {
        // Allow a fallback from the regular style to solid if regular is not available
        // but only if we aren't auto-fetching SVGs
        acc.prefix = 'fas';
      }
    }

    return acc;
  }, emptyCanonicalIcon());

  if (canonical.prefix === 'fa' || givenPrefix === 'fa') {
    // The fa prefix is not canonical. So if it has made it through until this point
    // we will shift it to the correct prefix.
    canonical.prefix = getDefaultUsablePrefix() || 'fas';
  }

  return canonical;
}

var Library = /*#__PURE__*/function () {
  function Library() {
    _classCallCheck(this, Library);

    this.definitions = {};
  }

  _createClass(Library, [{
    key: "add",
    value: function add() {
      var _this = this;

      for (var _len = arguments.length, definitions = new Array(_len), _key = 0; _key < _len; _key++) {
        definitions[_key] = arguments[_key];
      }

      var additions = definitions.reduce(this._pullDefinitions, {});
      Object.keys(additions).forEach(function (key) {
        _this.definitions[key] = _objectSpread2(_objectSpread2({}, _this.definitions[key] || {}), additions[key]);
        defineIcons(key, additions[key]);
        var longPrefix = PREFIX_TO_LONG_STYLE[key];
        if (longPrefix) defineIcons(longPrefix, additions[key]);
        build();
      });
    }
  }, {
    key: "reset",
    value: function reset() {
      this.definitions = {};
    }
  }, {
    key: "_pullDefinitions",
    value: function _pullDefinitions(additions, definition) {
      var normalized = definition.prefix && definition.iconName && definition.icon ? {
        0: definition
      } : definition;
      Object.keys(normalized).map(function (key) {
        var _normalized$key = normalized[key],
            prefix = _normalized$key.prefix,
            iconName = _normalized$key.iconName,
            icon = _normalized$key.icon;
        var aliases = icon[2];
        if (!additions[prefix]) additions[prefix] = {};

        if (aliases.length > 0) {
          aliases.forEach(function (alias) {
            if (typeof alias === 'string') {
              additions[prefix][alias] = icon;
            }
          });
        }

        additions[prefix][iconName] = icon;
      });
      return additions;
    }
  }]);

  return Library;
}();

var _plugins = [];
var _hooks = {};
var providers = {};
var defaultProviderKeys = Object.keys(providers);

function registerPlugins(nextPlugins, _ref) {
  var obj = _ref.mixoutsTo;
  _plugins = nextPlugins;
  _hooks = {};
  Object.keys(providers).forEach(function (k) {
    if (defaultProviderKeys.indexOf(k) === -1) {
      delete providers[k];
    }
  });

  _plugins.forEach(function (plugin) {
    var mixout = plugin.mixout ? plugin.mixout() : {};
    Object.keys(mixout).forEach(function (tk) {
      if (typeof mixout[tk] === 'function') {
        obj[tk] = mixout[tk];
      }

      if (_typeof(mixout[tk]) === 'object') {
        Object.keys(mixout[tk]).forEach(function (sk) {
          if (!obj[tk]) {
            obj[tk] = {};
          }

          obj[tk][sk] = mixout[tk][sk];
        });
      }
    });

    if (plugin.hooks) {
      var hooks = plugin.hooks();
      Object.keys(hooks).forEach(function (hook) {
        if (!_hooks[hook]) {
          _hooks[hook] = [];
        }

        _hooks[hook].push(hooks[hook]);
      });
    }

    if (plugin.provides) {
      plugin.provides(providers);
    }
  });

  return obj;
}

function chainHooks(hook, accumulator) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  var hookFns = _hooks[hook] || [];
  hookFns.forEach(function (hookFn) {
    accumulator = hookFn.apply(null, [accumulator].concat(args)); // eslint-disable-line no-useless-call
  });
  return accumulator;
}

function callHooks(hook) {
  for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }

  var hookFns = _hooks[hook] || [];
  hookFns.forEach(function (hookFn) {
    hookFn.apply(null, args);
  });
  return undefined;
}

function callProvided() {
  var hook = arguments[0];
  var args = Array.prototype.slice.call(arguments, 1);
  return providers[hook] ? providers[hook].apply(null, args) : undefined;
}

function findIconDefinition(iconLookup) {
  if (iconLookup.prefix === 'fa') {
    iconLookup.prefix = 'fas';
  }

  var iconName = iconLookup.iconName;
  var prefix = iconLookup.prefix || getDefaultUsablePrefix();
  if (!iconName) return;
  iconName = byAlias(prefix, iconName) || iconName;
  return iconFromMapping(library.definitions, prefix, iconName) || iconFromMapping(namespace.styles, prefix, iconName);
}

var library = new Library();

var noAuto = function noAuto() {
  config.autoReplaceSvg = false;
  config.observeMutations = false;
  callHooks('noAuto');
};

var dom = {
  i2svg: function i2svg() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (IS_DOM) {
      callHooks('beforeI2svg', params);
      callProvided('pseudoElements2svg', params);
      return callProvided('i2svg', params);
    } else {
      return Promise.reject('Operation requires a DOM of some kind.');
    }
  },
  watch: function watch() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var autoReplaceSvgRoot = params.autoReplaceSvgRoot;

    if (config.autoReplaceSvg === false) {
      config.autoReplaceSvg = true;
    }

    config.observeMutations = true;
    domready(function () {
      autoReplace({
        autoReplaceSvgRoot: autoReplaceSvgRoot
      });
      callHooks('watch', params);
    });
  }
};
var parse = {
  icon: function icon(_icon) {
    if (_icon === null) {
      return null;
    }

    if (_typeof(_icon) === 'object' && _icon.prefix && _icon.iconName) {
      return {
        prefix: _icon.prefix,
        iconName: byAlias(_icon.prefix, _icon.iconName) || _icon.iconName
      };
    }

    if (Array.isArray(_icon) && _icon.length === 2) {
      var iconName = _icon[1].indexOf('fa-') === 0 ? _icon[1].slice(3) : _icon[1];
      var prefix = getCanonicalPrefix(_icon[0]);
      return {
        prefix: prefix,
        iconName: byAlias(prefix, iconName) || iconName
      };
    }

    if (typeof _icon === 'string' && (_icon.indexOf("".concat(config.familyPrefix, "-")) > -1 || _icon.match(ICON_SELECTION_SYNTAX_PATTERN))) {
      var canonicalIcon = getCanonicalIcon(_icon.split(' '), {
        skipLookups: true
      });
      return {
        prefix: canonicalIcon.prefix || getDefaultUsablePrefix(),
        iconName: byAlias(canonicalIcon.prefix, canonicalIcon.iconName) || canonicalIcon.iconName
      };
    }

    if (typeof _icon === 'string') {
      var _prefix = getDefaultUsablePrefix();

      return {
        prefix: _prefix,
        iconName: byAlias(_prefix, _icon) || _icon
      };
    }
  }
};
var api = {
  noAuto: noAuto,
  config: config,
  dom: dom,
  parse: parse,
  library: library,
  findIconDefinition: findIconDefinition,
  toHtml: toHtml
};

var autoReplace = function autoReplace() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _params$autoReplaceSv = params.autoReplaceSvgRoot,
      autoReplaceSvgRoot = _params$autoReplaceSv === void 0 ? DOCUMENT : _params$autoReplaceSv;
  if ((Object.keys(namespace.styles).length > 0 || config.autoFetchSvg) && IS_DOM && config.autoReplaceSvg) api.dom.i2svg({
    node: autoReplaceSvgRoot
  });
};

function domVariants(val, abstractCreator) {
  Object.defineProperty(val, 'abstract', {
    get: abstractCreator
  });
  Object.defineProperty(val, 'html', {
    get: function get() {
      return val.abstract.map(function (a) {
        return toHtml(a);
      });
    }
  });
  Object.defineProperty(val, 'node', {
    get: function get() {
      if (!IS_DOM) return;
      var container = DOCUMENT.createElement('div');
      container.innerHTML = val.html;
      return container.children;
    }
  });
  return val;
}

function asIcon(_ref) {
  var children = _ref.children,
      main = _ref.main,
      mask = _ref.mask,
      attributes = _ref.attributes,
      styles = _ref.styles,
      transform = _ref.transform;

  if (transformIsMeaningful(transform) && main.found && !mask.found) {
    var width = main.width,
        height = main.height;
    var offset = {
      x: width / height / 2,
      y: 0.5
    };
    attributes['style'] = joinStyles(_objectSpread2(_objectSpread2({}, styles), {}, {
      'transform-origin': "".concat(offset.x + transform.x / 16, "em ").concat(offset.y + transform.y / 16, "em")
    }));
  }

  return [{
    tag: 'svg',
    attributes: attributes,
    children: children
  }];
}

function asSymbol(_ref) {
  var prefix = _ref.prefix,
      iconName = _ref.iconName,
      children = _ref.children,
      attributes = _ref.attributes,
      symbol = _ref.symbol;
  var id = symbol === true ? "".concat(prefix, "-").concat(config.familyPrefix, "-").concat(iconName) : symbol;
  return [{
    tag: 'svg',
    attributes: {
      style: 'display: none;'
    },
    children: [{
      tag: 'symbol',
      attributes: _objectSpread2(_objectSpread2({}, attributes), {}, {
        id: id
      }),
      children: children
    }]
  }];
}

function makeInlineSvgAbstract(params) {
  var _params$icons = params.icons,
      main = _params$icons.main,
      mask = _params$icons.mask,
      prefix = params.prefix,
      iconName = params.iconName,
      transform = params.transform,
      symbol = params.symbol,
      title = params.title,
      maskId = params.maskId,
      titleId = params.titleId,
      extra = params.extra,
      _params$watchable = params.watchable,
      watchable = _params$watchable === void 0 ? false : _params$watchable;

  var _ref = mask.found ? mask : main,
      width = _ref.width,
      height = _ref.height;

  var isUploadedIcon = prefix === 'fak';
  var attrClass = [config.replacementClass, iconName ? "".concat(config.familyPrefix, "-").concat(iconName) : ''].filter(function (c) {
    return extra.classes.indexOf(c) === -1;
  }).filter(function (c) {
    return c !== '' || !!c;
  }).concat(extra.classes).join(' ');
  var content = {
    children: [],
    attributes: _objectSpread2(_objectSpread2({}, extra.attributes), {}, {
      'data-prefix': prefix,
      'data-icon': iconName,
      'class': attrClass,
      'role': extra.attributes.role || 'img',
      'xmlns': 'http://www.w3.org/2000/svg',
      'viewBox': "0 0 ".concat(width, " ").concat(height)
    })
  };
  var uploadedIconWidthStyle = isUploadedIcon && !~extra.classes.indexOf('fa-fw') ? {
    width: "".concat(width / height * 16 * 0.0625, "em")
  } : {};

  if (watchable) {
    content.attributes[DATA_FA_I2SVG] = '';
  }

  if (title) {
    content.children.push({
      tag: 'title',
      attributes: {
        id: content.attributes['aria-labelledby'] || "title-".concat(titleId || nextUniqueId())
      },
      children: [title]
    });
    delete content.attributes.title;
  }

  var args = _objectSpread2(_objectSpread2({}, content), {}, {
    prefix: prefix,
    iconName: iconName,
    main: main,
    mask: mask,
    maskId: maskId,
    transform: transform,
    symbol: symbol,
    styles: _objectSpread2(_objectSpread2({}, uploadedIconWidthStyle), extra.styles)
  });

  var _ref2 = mask.found && main.found ? callProvided('generateAbstractMask', args) || {
    children: [],
    attributes: {}
  } : callProvided('generateAbstractIcon', args) || {
    children: [],
    attributes: {}
  },
      children = _ref2.children,
      attributes = _ref2.attributes;

  args.children = children;
  args.attributes = attributes;

  if (symbol) {
    return asSymbol(args);
  } else {
    return asIcon(args);
  }
}

function makeLayersTextAbstract(params) {
  var content = params.content,
      width = params.width,
      height = params.height,
      transform = params.transform,
      title = params.title,
      extra = params.extra,
      _params$watchable2 = params.watchable,
      watchable = _params$watchable2 === void 0 ? false : _params$watchable2;

  var attributes = _objectSpread2(_objectSpread2(_objectSpread2({}, extra.attributes), title ? {
    'title': title
  } : {}), {}, {
    'class': extra.classes.join(' ')
  });

  if (watchable) {
    attributes[DATA_FA_I2SVG] = '';
  }

  var styles = _objectSpread2({}, extra.styles);

  if (transformIsMeaningful(transform)) {
    styles['transform'] = transformForCss({
      transform: transform,
      startCentered: true,
      width: width,
      height: height
    });
    styles['-webkit-transform'] = styles['transform'];
  }

  var styleString = joinStyles(styles);

  if (styleString.length > 0) {
    attributes['style'] = styleString;
  }

  var val = [];
  val.push({
    tag: 'span',
    attributes: attributes,
    children: [content]
  });

  if (title) {
    val.push({
      tag: 'span',
      attributes: {
        class: 'sr-only'
      },
      children: [title]
    });
  }

  return val;
}

function makeLayersCounterAbstract(params) {
  var content = params.content,
      title = params.title,
      extra = params.extra;

  var attributes = _objectSpread2(_objectSpread2(_objectSpread2({}, extra.attributes), title ? {
    'title': title
  } : {}), {}, {
    'class': extra.classes.join(' ')
  });

  var styleString = joinStyles(extra.styles);

  if (styleString.length > 0) {
    attributes['style'] = styleString;
  }

  var val = [];
  val.push({
    tag: 'span',
    attributes: attributes,
    children: [content]
  });

  if (title) {
    val.push({
      tag: 'span',
      attributes: {
        class: 'sr-only'
      },
      children: [title]
    });
  }

  return val;
}

var styles$1 = namespace.styles;

function asFoundIcon(icon) {
  var width = icon[0];
  var height = icon[1];

  var _icon$slice = icon.slice(4),
      _icon$slice2 = _slicedToArray(_icon$slice, 1),
      vectorData = _icon$slice2[0];

  var element = null;

  if (Array.isArray(vectorData)) {
    element = {
      tag: 'g',
      attributes: {
        class: "".concat(config.familyPrefix, "-").concat(DUOTONE_CLASSES.GROUP)
      },
      children: [{
        tag: 'path',
        attributes: {
          class: "".concat(config.familyPrefix, "-").concat(DUOTONE_CLASSES.SECONDARY),
          fill: 'currentColor',
          d: vectorData[0]
        }
      }, {
        tag: 'path',
        attributes: {
          class: "".concat(config.familyPrefix, "-").concat(DUOTONE_CLASSES.PRIMARY),
          fill: 'currentColor',
          d: vectorData[1]
        }
      }]
    };
  } else {
    element = {
      tag: 'path',
      attributes: {
        fill: 'currentColor',
        d: vectorData
      }
    };
  }

  return {
    found: true,
    width: width,
    height: height,
    icon: element
  };
}

var missingIconResolutionMixin = {
  found: false,
  width: 512,
  height: 512
};

function maybeNotifyMissing(iconName, prefix) {
  if (!PRODUCTION && !config.showMissingIcons && iconName) {
    console.error("Icon with name \"".concat(iconName, "\" and prefix \"").concat(prefix, "\" is missing."));
  }
}

function findIcon(iconName, prefix) {
  var givenPrefix = prefix;

  if (prefix === 'fa' && config.styleDefault !== null) {
    prefix = getDefaultUsablePrefix();
  }

  return new Promise(function (resolve, reject) {
    var val = {
      found: false,
      width: 512,
      height: 512,
      icon: callProvided('missingIconAbstract') || {}
    };

    if (givenPrefix === 'fa') {
      var shim = byOldName(iconName) || {};
      iconName = shim.iconName || iconName;
      prefix = shim.prefix || prefix;
    }

    if (iconName && prefix && styles$1[prefix] && styles$1[prefix][iconName]) {
      var icon = styles$1[prefix][iconName];
      return resolve(asFoundIcon(icon));
    }

    maybeNotifyMissing(iconName, prefix);
    resolve(_objectSpread2(_objectSpread2({}, missingIconResolutionMixin), {}, {
      icon: config.showMissingIcons && iconName ? callProvided('missingIconAbstract') || {} : {}
    }));
  });
}

var noop$1 = function noop() {};

var p = config.measurePerformance && PERFORMANCE && PERFORMANCE.mark && PERFORMANCE.measure ? PERFORMANCE : {
  mark: noop$1,
  measure: noop$1
};
var preamble = "FA \"6.0.0\"";

var begin = function begin(name) {
  p.mark("".concat(preamble, " ").concat(name, " begins"));
  return function () {
    return end(name);
  };
};

var end = function end(name) {
  p.mark("".concat(preamble, " ").concat(name, " ends"));
  p.measure("".concat(preamble, " ").concat(name), "".concat(preamble, " ").concat(name, " begins"), "".concat(preamble, " ").concat(name, " ends"));
};

var perf = {
  begin: begin,
  end: end
};

var noop$2 = function noop() {};

function isWatched(node) {
  var i2svg = node.getAttribute ? node.getAttribute(DATA_FA_I2SVG) : null;
  return typeof i2svg === 'string';
}

function hasPrefixAndIcon(node) {
  var prefix = node.getAttribute ? node.getAttribute(DATA_PREFIX) : null;
  var icon = node.getAttribute ? node.getAttribute(DATA_ICON) : null;
  return prefix && icon;
}

function hasBeenReplaced(node) {
  return node && node.classList && node.classList.contains && node.classList.contains(config.replacementClass);
}

function getMutator() {
  if (config.autoReplaceSvg === true) {
    return mutators.replace;
  }

  var mutator = mutators[config.autoReplaceSvg];
  return mutator || mutators.replace;
}

function createElementNS(tag) {
  return DOCUMENT.createElementNS('http://www.w3.org/2000/svg', tag);
}

function createElement(tag) {
  return DOCUMENT.createElement(tag);
}

function convertSVG(abstractObj) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$ceFn = params.ceFn,
      ceFn = _params$ceFn === void 0 ? abstractObj.tag === 'svg' ? createElementNS : createElement : _params$ceFn;

  if (typeof abstractObj === 'string') {
    return DOCUMENT.createTextNode(abstractObj);
  }

  var tag = ceFn(abstractObj.tag);
  Object.keys(abstractObj.attributes || []).forEach(function (key) {
    tag.setAttribute(key, abstractObj.attributes[key]);
  });
  var children = abstractObj.children || [];
  children.forEach(function (child) {
    tag.appendChild(convertSVG(child, {
      ceFn: ceFn
    }));
  });
  return tag;
}

function nodeAsComment(node) {
  var comment = " ".concat(node.outerHTML, " ");
  /* BEGIN.ATTRIBUTION */

  comment = "".concat(comment, "Font Awesome fontawesome.com ");
  /* END.ATTRIBUTION */

  return comment;
}

var mutators = {
  replace: function replace(mutation) {
    var node = mutation[0];

    if (node.parentNode) {
      mutation[1].forEach(function (abstract) {
        node.parentNode.insertBefore(convertSVG(abstract), node);
      });

      if (node.getAttribute(DATA_FA_I2SVG) === null && config.keepOriginalSource) {
        var comment = DOCUMENT.createComment(nodeAsComment(node));
        node.parentNode.replaceChild(comment, node);
      } else {
        node.remove();
      }
    }
  },
  nest: function nest(mutation) {
    var node = mutation[0];
    var abstract = mutation[1]; // If we already have a replaced node we do not want to continue nesting within it.
    // Short-circuit to the standard replacement

    if (~classArray(node).indexOf(config.replacementClass)) {
      return mutators.replace(mutation);
    }

    var forSvg = new RegExp("".concat(config.familyPrefix, "-.*"));
    delete abstract[0].attributes.id;

    if (abstract[0].attributes.class) {
      var splitClasses = abstract[0].attributes.class.split(' ').reduce(function (acc, cls) {
        if (cls === config.replacementClass || cls.match(forSvg)) {
          acc.toSvg.push(cls);
        } else {
          acc.toNode.push(cls);
        }

        return acc;
      }, {
        toNode: [],
        toSvg: []
      });
      abstract[0].attributes.class = splitClasses.toSvg.join(' ');

      if (splitClasses.toNode.length === 0) {
        node.removeAttribute('class');
      } else {
        node.setAttribute('class', splitClasses.toNode.join(' '));
      }
    }

    var newInnerHTML = abstract.map(function (a) {
      return toHtml(a);
    }).join('\n');
    node.setAttribute(DATA_FA_I2SVG, '');
    node.innerHTML = newInnerHTML;
  }
};

function performOperationSync(op) {
  op();
}

function perform(mutations, callback) {
  var callbackFunction = typeof callback === 'function' ? callback : noop$2;

  if (mutations.length === 0) {
    callbackFunction();
  } else {
    var frame = performOperationSync;

    if (config.mutateApproach === MUTATION_APPROACH_ASYNC) {
      frame = WINDOW.requestAnimationFrame || performOperationSync;
    }

    frame(function () {
      var mutator = getMutator();
      var mark = perf.begin('mutate');
      mutations.map(mutator);
      mark();
      callbackFunction();
    });
  }
}

var disabled = false;

function disableObservation() {
  disabled = true;
}

function enableObservation() {
  disabled = false;
}

var mo = null;

function observe(options) {
  if (!MUTATION_OBSERVER) {
    return;
  }

  if (!config.observeMutations) {
    return;
  }

  var _options$treeCallback = options.treeCallback,
      treeCallback = _options$treeCallback === void 0 ? noop$2 : _options$treeCallback,
      _options$nodeCallback = options.nodeCallback,
      nodeCallback = _options$nodeCallback === void 0 ? noop$2 : _options$nodeCallback,
      _options$pseudoElemen = options.pseudoElementsCallback,
      pseudoElementsCallback = _options$pseudoElemen === void 0 ? noop$2 : _options$pseudoElemen,
      _options$observeMutat = options.observeMutationsRoot,
      observeMutationsRoot = _options$observeMutat === void 0 ? DOCUMENT : _options$observeMutat;
  mo = new MUTATION_OBSERVER(function (objects) {
    if (disabled) return;
    var defaultPrefix = getDefaultUsablePrefix();
    toArray(objects).forEach(function (mutationRecord) {
      if (mutationRecord.type === 'childList' && mutationRecord.addedNodes.length > 0 && !isWatched(mutationRecord.addedNodes[0])) {
        if (config.searchPseudoElements) {
          pseudoElementsCallback(mutationRecord.target);
        }

        treeCallback(mutationRecord.target);
      }

      if (mutationRecord.type === 'attributes' && mutationRecord.target.parentNode && config.searchPseudoElements) {
        pseudoElementsCallback(mutationRecord.target.parentNode);
      }

      if (mutationRecord.type === 'attributes' && isWatched(mutationRecord.target) && ~ATTRIBUTES_WATCHED_FOR_MUTATION.indexOf(mutationRecord.attributeName)) {
        if (mutationRecord.attributeName === 'class' && hasPrefixAndIcon(mutationRecord.target)) {
          var _getCanonicalIcon = getCanonicalIcon(classArray(mutationRecord.target)),
              prefix = _getCanonicalIcon.prefix,
              iconName = _getCanonicalIcon.iconName;

          mutationRecord.target.setAttribute(DATA_PREFIX, prefix || defaultPrefix);
          if (iconName) mutationRecord.target.setAttribute(DATA_ICON, iconName);
        } else if (hasBeenReplaced(mutationRecord.target)) {
          nodeCallback(mutationRecord.target);
        }
      }
    });
  });
  if (!IS_DOM) return;
  mo.observe(observeMutationsRoot, {
    childList: true,
    attributes: true,
    characterData: true,
    subtree: true
  });
}

function disconnect() {
  if (!mo) return;
  mo.disconnect();
}

function styleParser(node) {
  var style = node.getAttribute('style');
  var val = [];

  if (style) {
    val = style.split(';').reduce(function (acc, style) {
      var styles = style.split(':');
      var prop = styles[0];
      var value = styles.slice(1);

      if (prop && value.length > 0) {
        acc[prop] = value.join(':').trim();
      }

      return acc;
    }, {});
  }

  return val;
}

function classParser(node) {
  var existingPrefix = node.getAttribute('data-prefix');
  var existingIconName = node.getAttribute('data-icon');
  var innerText = node.innerText !== undefined ? node.innerText.trim() : '';
  var val = getCanonicalIcon(classArray(node));

  if (!val.prefix) {
    val.prefix = getDefaultUsablePrefix();
  }

  if (existingPrefix && existingIconName) {
    val.prefix = existingPrefix;
    val.iconName = existingIconName;
  }

  if (val.iconName && val.prefix) {
    return val;
  }

  if (val.prefix && innerText.length > 0) {
    val.iconName = byLigature(val.prefix, node.innerText) || byUnicode(val.prefix, toHex(node.innerText));
  }

  return val;
}

function attributesParser(node) {
  var extraAttributes = toArray(node.attributes).reduce(function (acc, attr) {
    if (acc.name !== 'class' && acc.name !== 'style') {
      acc[attr.name] = attr.value;
    }

    return acc;
  }, {});
  var title = node.getAttribute('title');
  var titleId = node.getAttribute('data-fa-title-id');

  if (config.autoA11y) {
    if (title) {
      extraAttributes['aria-labelledby'] = "".concat(config.replacementClass, "-title-").concat(titleId || nextUniqueId());
    } else {
      extraAttributes['aria-hidden'] = 'true';
      extraAttributes['focusable'] = 'false';
    }
  }

  return extraAttributes;
}

function blankMeta() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: meaninglessTransform,
    symbol: false,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    extra: {
      classes: [],
      styles: {},
      attributes: {}
    }
  };
}

function parseMeta(node) {
  var parser = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    styleParser: true
  };

  var _classParser = classParser(node),
      iconName = _classParser.iconName,
      prefix = _classParser.prefix,
      extraClasses = _classParser.rest;

  var extraAttributes = attributesParser(node);
  var pluginMeta = chainHooks('parseNodeAttributes', {}, node);
  var extraStyles = parser.styleParser ? styleParser(node) : [];
  return _objectSpread2({
    iconName: iconName,
    title: node.getAttribute('title'),
    titleId: node.getAttribute('data-fa-title-id'),
    prefix: prefix,
    transform: meaninglessTransform,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    symbol: false,
    extra: {
      classes: extraClasses,
      styles: extraStyles,
      attributes: extraAttributes
    }
  }, pluginMeta);
}

var styles$2 = namespace.styles;

function generateMutation(node) {
  var nodeMeta = config.autoReplaceSvg === 'nest' ? parseMeta(node, {
    styleParser: false
  }) : parseMeta(node);

  if (~nodeMeta.extra.classes.indexOf(LAYERS_TEXT_CLASSNAME)) {
    return callProvided('generateLayersText', node, nodeMeta);
  } else {
    return callProvided('generateSvgReplacementMutation', node, nodeMeta);
  }
}

function onTree(root) {
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  if (!IS_DOM) return Promise.resolve();
  var htmlClassList = DOCUMENT.documentElement.classList;

  var hclAdd = function hclAdd(suffix) {
    return htmlClassList.add("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
  };

  var hclRemove = function hclRemove(suffix) {
    return htmlClassList.remove("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
  };

  var prefixes = config.autoFetchSvg ? Object.keys(PREFIX_TO_STYLE) : Object.keys(styles$2);
  var prefixesDomQuery = [".".concat(LAYERS_TEXT_CLASSNAME, ":not([").concat(DATA_FA_I2SVG, "])")].concat(prefixes.map(function (p) {
    return ".".concat(p, ":not([").concat(DATA_FA_I2SVG, "])");
  })).join(', ');

  if (prefixesDomQuery.length === 0) {
    return Promise.resolve();
  }

  var candidates = [];

  try {
    candidates = toArray(root.querySelectorAll(prefixesDomQuery));
  } catch (e) {// noop
  }

  if (candidates.length > 0) {
    hclAdd('pending');
    hclRemove('complete');
  } else {
    return Promise.resolve();
  }

  var mark = perf.begin('onTree');
  var mutations = candidates.reduce(function (acc, node) {
    try {
      var mutation = generateMutation(node);

      if (mutation) {
        acc.push(mutation);
      }
    } catch (e) {
      if (!PRODUCTION) {
        if (e.name === 'MissingIcon') {
          console.error(e);
        }
      }
    }

    return acc;
  }, []);
  return new Promise(function (resolve, reject) {
    Promise.all(mutations).then(function (resolvedMutations) {
      perform(resolvedMutations, function () {
        hclAdd('active');
        hclAdd('complete');
        hclRemove('pending');
        if (typeof callback === 'function') callback();
        mark();
        resolve();
      });
    }).catch(function (e) {
      mark();
      reject(e);
    });
  });
}

function onNode(node) {
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  generateMutation(node).then(function (mutation) {
    if (mutation) {
      perform([mutation], callback);
    }
  });
}

function resolveIcons(next) {
  return function (maybeIconDefinition) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var iconDefinition = (maybeIconDefinition || {}).icon ? maybeIconDefinition : findIconDefinition(maybeIconDefinition || {});
    var mask = params.mask;

    if (mask) {
      mask = (mask || {}).icon ? mask : findIconDefinition(mask || {});
    }

    return next(iconDefinition, _objectSpread2(_objectSpread2({}, params), {}, {
      mask: mask
    }));
  };
}

var render = function render(iconDefinition) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$transform = params.transform,
      transform = _params$transform === void 0 ? meaninglessTransform : _params$transform,
      _params$symbol = params.symbol,
      symbol = _params$symbol === void 0 ? false : _params$symbol,
      _params$mask = params.mask,
      mask = _params$mask === void 0 ? null : _params$mask,
      _params$maskId = params.maskId,
      maskId = _params$maskId === void 0 ? null : _params$maskId,
      _params$title = params.title,
      title = _params$title === void 0 ? null : _params$title,
      _params$titleId = params.titleId,
      titleId = _params$titleId === void 0 ? null : _params$titleId,
      _params$classes = params.classes,
      classes = _params$classes === void 0 ? [] : _params$classes,
      _params$attributes = params.attributes,
      attributes = _params$attributes === void 0 ? {} : _params$attributes,
      _params$styles = params.styles,
      styles = _params$styles === void 0 ? {} : _params$styles;
  if (!iconDefinition) return;
  var prefix = iconDefinition.prefix,
      iconName = iconDefinition.iconName,
      icon = iconDefinition.icon;
  return domVariants(_objectSpread2({
    type: 'icon'
  }, iconDefinition), function () {
    callHooks('beforeDOMElementCreation', {
      iconDefinition: iconDefinition,
      params: params
    });

    if (config.autoA11y) {
      if (title) {
        attributes['aria-labelledby'] = "".concat(config.replacementClass, "-title-").concat(titleId || nextUniqueId());
      } else {
        attributes['aria-hidden'] = 'true';
        attributes['focusable'] = 'false';
      }
    }

    return makeInlineSvgAbstract({
      icons: {
        main: asFoundIcon(icon),
        mask: mask ? asFoundIcon(mask.icon) : {
          found: false,
          width: null,
          height: null,
          icon: {}
        }
      },
      prefix: prefix,
      iconName: iconName,
      transform: _objectSpread2(_objectSpread2({}, meaninglessTransform), transform),
      symbol: symbol,
      title: title,
      maskId: maskId,
      titleId: titleId,
      extra: {
        attributes: attributes,
        styles: styles,
        classes: classes
      }
    });
  });
};

var ReplaceElements = {
  mixout: function mixout() {
    return {
      icon: resolveIcons(render)
    };
  },
  hooks: function hooks() {
    return {
      mutationObserverCallbacks: function mutationObserverCallbacks(accumulator) {
        accumulator.treeCallback = onTree;
        accumulator.nodeCallback = onNode;
        return accumulator;
      }
    };
  },
  provides: function provides(providers$$1) {
    providers$$1.i2svg = function (params) {
      var _params$node = params.node,
          node = _params$node === void 0 ? DOCUMENT : _params$node,
          _params$callback = params.callback,
          callback = _params$callback === void 0 ? function () {} : _params$callback;
      return onTree(node, callback);
    };

    providers$$1.generateSvgReplacementMutation = function (node, nodeMeta) {
      var iconName = nodeMeta.iconName,
          title = nodeMeta.title,
          titleId = nodeMeta.titleId,
          prefix = nodeMeta.prefix,
          transform = nodeMeta.transform,
          symbol = nodeMeta.symbol,
          mask = nodeMeta.mask,
          maskId = nodeMeta.maskId,
          extra = nodeMeta.extra;
      return new Promise(function (resolve, reject) {
        Promise.all([findIcon(iconName, prefix), mask.iconName ? findIcon(mask.iconName, mask.prefix) : Promise.resolve({
          found: false,
          width: 512,
          height: 512,
          icon: {}
        })]).then(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              main = _ref2[0],
              mask = _ref2[1];

          resolve([node, makeInlineSvgAbstract({
            icons: {
              main: main,
              mask: mask
            },
            prefix: prefix,
            iconName: iconName,
            transform: transform,
            symbol: symbol,
            maskId: maskId,
            title: title,
            titleId: titleId,
            extra: extra,
            watchable: true
          })]);
        }).catch(reject);
      });
    };

    providers$$1.generateAbstractIcon = function (_ref3) {
      var children = _ref3.children,
          attributes = _ref3.attributes,
          main = _ref3.main,
          transform = _ref3.transform,
          styles = _ref3.styles;
      var styleString = joinStyles(styles);

      if (styleString.length > 0) {
        attributes['style'] = styleString;
      }

      var nextChild;

      if (transformIsMeaningful(transform)) {
        nextChild = callProvided('generateAbstractTransformGrouping', {
          main: main,
          transform: transform,
          containerWidth: main.width,
          iconWidth: main.width
        });
      }

      children.push(nextChild || main.icon);
      return {
        children: children,
        attributes: attributes
      };
    };
  }
};
var Layers = {
  mixout: function mixout() {
    return {
      layer: function layer(assembler) {
        var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var _params$classes = params.classes,
            classes = _params$classes === void 0 ? [] : _params$classes;
        return domVariants({
          type: 'layer'
        }, function () {
          callHooks('beforeDOMElementCreation', {
            assembler: assembler,
            params: params
          });
          var children = [];
          assembler(function (args) {
            Array.isArray(args) ? args.map(function (a) {
              children = children.concat(a.abstract);
            }) : children = children.concat(args.abstract);
          });
          return [{
            tag: 'span',
            attributes: {
              class: ["".concat(config.familyPrefix, "-layers")].concat(_toConsumableArray(classes)).join(' ')
            },
            children: children
          }];
        });
      }
    };
  }
};
var LayersCounter = {
  mixout: function mixout() {
    return {
      counter: function counter(content) {
        var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var _params$title = params.title,
            title = _params$title === void 0 ? null : _params$title,
            _params$classes = params.classes,
            classes = _params$classes === void 0 ? [] : _params$classes,
            _params$attributes = params.attributes,
            attributes = _params$attributes === void 0 ? {} : _params$attributes,
            _params$styles = params.styles,
            styles = _params$styles === void 0 ? {} : _params$styles;
        return domVariants({
          type: 'counter',
          content: content
        }, function () {
          callHooks('beforeDOMElementCreation', {
            content: content,
            params: params
          });
          return makeLayersCounterAbstract({
            content: content.toString(),
            title: title,
            extra: {
              attributes: attributes,
              styles: styles,
              classes: ["".concat(config.familyPrefix, "-layers-counter")].concat(_toConsumableArray(classes))
            }
          });
        });
      }
    };
  }
};
var LayersText = {
  mixout: function mixout() {
    return {
      text: function text(content) {
        var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var _params$transform = params.transform,
            transform = _params$transform === void 0 ? meaninglessTransform : _params$transform,
            _params$title = params.title,
            title = _params$title === void 0 ? null : _params$title,
            _params$classes = params.classes,
            classes = _params$classes === void 0 ? [] : _params$classes,
            _params$attributes = params.attributes,
            attributes = _params$attributes === void 0 ? {} : _params$attributes,
            _params$styles = params.styles,
            styles = _params$styles === void 0 ? {} : _params$styles;
        return domVariants({
          type: 'text',
          content: content
        }, function () {
          callHooks('beforeDOMElementCreation', {
            content: content,
            params: params
          });
          return makeLayersTextAbstract({
            content: content,
            transform: _objectSpread2(_objectSpread2({}, meaninglessTransform), transform),
            title: title,
            extra: {
              attributes: attributes,
              styles: styles,
              classes: ["".concat(config.familyPrefix, "-layers-text")].concat(_toConsumableArray(classes))
            }
          });
        });
      }
    };
  },
  provides: function provides(providers$$1) {
    providers$$1.generateLayersText = function (node, nodeMeta) {
      var title = nodeMeta.title,
          transform = nodeMeta.transform,
          extra = nodeMeta.extra;
      var width = null;
      var height = null;

      if (IS_IE) {
        var computedFontSize = parseInt(getComputedStyle(node).fontSize, 10);
        var boundingClientRect = node.getBoundingClientRect();
        width = boundingClientRect.width / computedFontSize;
        height = boundingClientRect.height / computedFontSize;
      }

      if (config.autoA11y && !title) {
        extra.attributes['aria-hidden'] = 'true';
      }

      return Promise.resolve([node, makeLayersTextAbstract({
        content: node.innerHTML,
        width: width,
        height: height,
        transform: transform,
        title: title,
        extra: extra,
        watchable: true
      })]);
    };
  }
};
var CLEAN_CONTENT_PATTERN = new RegExp("\"", 'ug');
var SECONDARY_UNICODE_RANGE = [1105920, 1112319];

function hexValueFromContent(content) {
  var cleaned = content.replace(CLEAN_CONTENT_PATTERN, '');
  var codePoint = codePointAt(cleaned, 0);
  var isPrependTen = codePoint >= SECONDARY_UNICODE_RANGE[0] && codePoint <= SECONDARY_UNICODE_RANGE[1];
  var isDoubled = cleaned.length === 2 ? cleaned[0] === cleaned[1] : false;
  return {
    value: isDoubled ? toHex(cleaned[0]) : toHex(cleaned),
    isSecondary: isPrependTen || isDoubled
  };
}

function replaceForPosition(node, position) {
  var pendingAttribute = "".concat(DATA_FA_PSEUDO_ELEMENT_PENDING).concat(position.replace(':', '-'));
  return new Promise(function (resolve, reject) {
    if (node.getAttribute(pendingAttribute) !== null) {
      // This node is already being processed
      return resolve();
    }

    var children = toArray(node.children);
    var alreadyProcessedPseudoElement = children.filter(function (c) {
      return c.getAttribute(DATA_FA_PSEUDO_ELEMENT) === position;
    })[0];
    var styles = WINDOW.getComputedStyle(node, position);
    var fontFamily = styles.getPropertyValue('font-family').match(FONT_FAMILY_PATTERN);
    var fontWeight = styles.getPropertyValue('font-weight');
    var content = styles.getPropertyValue('content');

    if (alreadyProcessedPseudoElement && !fontFamily) {
      // If we've already processed it but the current computed style does not result in a font-family,
      // that probably means that a class name that was previously present to make the icon has been
      // removed. So we now should delete the icon.
      node.removeChild(alreadyProcessedPseudoElement);
      return resolve();
    } else if (fontFamily && content !== 'none' && content !== '') {
      var _content = styles.getPropertyValue('content');

      var prefix = ~['Solid', 'Regular', 'Light', 'Thin', 'Duotone', 'Brands', 'Kit'].indexOf(fontFamily[2]) ? STYLE_TO_PREFIX[fontFamily[2].toLowerCase()] : FONT_WEIGHT_TO_PREFIX[fontWeight];

      var _hexValueFromContent = hexValueFromContent(_content),
          hexValue = _hexValueFromContent.value,
          isSecondary = _hexValueFromContent.isSecondary;

      var isV4 = fontFamily[0].startsWith('FontAwesome');
      var iconName = byUnicode(prefix, hexValue);
      var iconIdentifier = iconName;

      if (isV4) {
        var iconName4 = byOldUnicode(hexValue);

        if (iconName4.iconName && iconName4.prefix) {
          iconName = iconName4.iconName;
          prefix = iconName4.prefix;
        }
      } // Only convert the pseudo element in this ::before/::after position into an icon if we haven't
      // already done so with the same prefix and iconName


      if (iconName && !isSecondary && (!alreadyProcessedPseudoElement || alreadyProcessedPseudoElement.getAttribute(DATA_PREFIX) !== prefix || alreadyProcessedPseudoElement.getAttribute(DATA_ICON) !== iconIdentifier)) {
        node.setAttribute(pendingAttribute, iconIdentifier);

        if (alreadyProcessedPseudoElement) {
          // Delete the old one, since we're replacing it with a new one
          node.removeChild(alreadyProcessedPseudoElement);
        }

        var meta = blankMeta();
        var extra = meta.extra;
        extra.attributes[DATA_FA_PSEUDO_ELEMENT] = position;
        findIcon(iconName, prefix).then(function (main) {
          var abstract = makeInlineSvgAbstract(_objectSpread2(_objectSpread2({}, meta), {}, {
            icons: {
              main: main,
              mask: emptyCanonicalIcon()
            },
            prefix: prefix,
            iconName: iconIdentifier,
            extra: extra,
            watchable: true
          }));
          var element = DOCUMENT.createElement('svg');

          if (position === '::before') {
            node.insertBefore(element, node.firstChild);
          } else {
            node.appendChild(element);
          }

          element.outerHTML = abstract.map(function (a) {
            return toHtml(a);
          }).join('\n');
          node.removeAttribute(pendingAttribute);
          resolve();
        }).catch(reject);
      } else {
        resolve();
      }
    } else {
      resolve();
    }
  });
}

function replace(node) {
  return Promise.all([replaceForPosition(node, '::before'), replaceForPosition(node, '::after')]);
}

function processable(node) {
  return node.parentNode !== document.head && !~TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS.indexOf(node.tagName.toUpperCase()) && !node.getAttribute(DATA_FA_PSEUDO_ELEMENT) && (!node.parentNode || node.parentNode.tagName !== 'svg');
}

function searchPseudoElements(root) {
  if (!IS_DOM) return;
  return new Promise(function (resolve, reject) {
    var operations = toArray(root.querySelectorAll('*')).filter(processable).map(replace);
    var end = perf.begin('searchPseudoElements');
    disableObservation();
    Promise.all(operations).then(function () {
      end();
      enableObservation();
      resolve();
    }).catch(function () {
      end();
      enableObservation();
      reject();
    });
  });
}

var PseudoElements = {
  hooks: function hooks() {
    return {
      mutationObserverCallbacks: function mutationObserverCallbacks(accumulator) {
        accumulator.pseudoElementsCallback = searchPseudoElements;
        return accumulator;
      }
    };
  },
  provides: function provides(providers$$1) {
    providers$$1.pseudoElements2svg = function (params) {
      var _params$node = params.node,
          node = _params$node === void 0 ? DOCUMENT : _params$node;

      if (config.searchPseudoElements) {
        searchPseudoElements(node);
      }
    };
  }
};
var _unwatched = false;
var MutationObserver$1 = {
  mixout: function mixout() {
    return {
      dom: {
        unwatch: function unwatch() {
          disableObservation();
          _unwatched = true;
        }
      }
    };
  },
  hooks: function hooks() {
    return {
      bootstrap: function bootstrap() {
        observe(chainHooks('mutationObserverCallbacks', {}));
      },
      noAuto: function noAuto() {
        disconnect();
      },
      watch: function watch(params) {
        var observeMutationsRoot = params.observeMutationsRoot;

        if (_unwatched) {
          enableObservation();
        } else {
          observe(chainHooks('mutationObserverCallbacks', {
            observeMutationsRoot: observeMutationsRoot
          }));
        }
      }
    };
  }
};

var parseTransformString = function parseTransformString(transformString) {
  var transform = {
    size: 16,
    x: 0,
    y: 0,
    flipX: false,
    flipY: false,
    rotate: 0
  };
  return transformString.toLowerCase().split(' ').reduce(function (acc, n) {
    var parts = n.toLowerCase().split('-');
    var first = parts[0];
    var rest = parts.slice(1).join('-');

    if (first && rest === 'h') {
      acc.flipX = true;
      return acc;
    }

    if (first && rest === 'v') {
      acc.flipY = true;
      return acc;
    }

    rest = parseFloat(rest);

    if (isNaN(rest)) {
      return acc;
    }

    switch (first) {
      case 'grow':
        acc.size = acc.size + rest;
        break;

      case 'shrink':
        acc.size = acc.size - rest;
        break;

      case 'left':
        acc.x = acc.x - rest;
        break;

      case 'right':
        acc.x = acc.x + rest;
        break;

      case 'up':
        acc.y = acc.y - rest;
        break;

      case 'down':
        acc.y = acc.y + rest;
        break;

      case 'rotate':
        acc.rotate = acc.rotate + rest;
        break;
    }

    return acc;
  }, transform);
};

var PowerTransforms = {
  mixout: function mixout() {
    return {
      parse: {
        transform: function transform(transformString) {
          return parseTransformString(transformString);
        }
      }
    };
  },
  hooks: function hooks() {
    return {
      parseNodeAttributes: function parseNodeAttributes(accumulator, node) {
        var transformString = node.getAttribute('data-fa-transform');

        if (transformString) {
          accumulator.transform = parseTransformString(transformString);
        }

        return accumulator;
      }
    };
  },
  provides: function provides(providers) {
    providers.generateAbstractTransformGrouping = function (_ref) {
      var main = _ref.main,
          transform = _ref.transform,
          containerWidth = _ref.containerWidth,
          iconWidth = _ref.iconWidth;
      var outer = {
        transform: "translate(".concat(containerWidth / 2, " 256)")
      };
      var innerTranslate = "translate(".concat(transform.x * 32, ", ").concat(transform.y * 32, ") ");
      var innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") ");
      var innerRotate = "rotate(".concat(transform.rotate, " 0 0)");
      var inner = {
        transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
      };
      var path = {
        transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
      };
      var operations = {
        outer: outer,
        inner: inner,
        path: path
      };
      return {
        tag: 'g',
        attributes: _objectSpread2({}, operations.outer),
        children: [{
          tag: 'g',
          attributes: _objectSpread2({}, operations.inner),
          children: [{
            tag: main.icon.tag,
            children: main.icon.children,
            attributes: _objectSpread2(_objectSpread2({}, main.icon.attributes), operations.path)
          }]
        }]
      };
    };
  }
};
var ALL_SPACE = {
  x: 0,
  y: 0,
  width: '100%',
  height: '100%'
};

function fillBlack(abstract) {
  var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  if (abstract.attributes && (abstract.attributes.fill || force)) {
    abstract.attributes.fill = 'black';
  }

  return abstract;
}

function deGroup(abstract) {
  if (abstract.tag === 'g') {
    return abstract.children;
  } else {
    return [abstract];
  }
}

var Masks = {
  hooks: function hooks() {
    return {
      parseNodeAttributes: function parseNodeAttributes(accumulator, node) {
        var maskData = node.getAttribute('data-fa-mask');
        var mask = !maskData ? emptyCanonicalIcon() : getCanonicalIcon(maskData.split(' ').map(function (i) {
          return i.trim();
        }));

        if (!mask.prefix) {
          mask.prefix = getDefaultUsablePrefix();
        }

        accumulator.mask = mask;
        accumulator.maskId = node.getAttribute('data-fa-mask-id');
        return accumulator;
      }
    };
  },
  provides: function provides(providers) {
    providers.generateAbstractMask = function (_ref) {
      var children = _ref.children,
          attributes = _ref.attributes,
          main = _ref.main,
          mask = _ref.mask,
          explicitMaskId = _ref.maskId,
          transform = _ref.transform;
      var mainWidth = main.width,
          mainPath = main.icon;
      var maskWidth = mask.width,
          maskPath = mask.icon;
      var trans = transformForSvg({
        transform: transform,
        containerWidth: maskWidth,
        iconWidth: mainWidth
      });
      var maskRect = {
        tag: 'rect',
        attributes: _objectSpread2(_objectSpread2({}, ALL_SPACE), {}, {
          fill: 'white'
        })
      };
      var maskInnerGroupChildrenMixin = mainPath.children ? {
        children: mainPath.children.map(fillBlack)
      } : {};
      var maskInnerGroup = {
        tag: 'g',
        attributes: _objectSpread2({}, trans.inner),
        children: [fillBlack(_objectSpread2({
          tag: mainPath.tag,
          attributes: _objectSpread2(_objectSpread2({}, mainPath.attributes), trans.path)
        }, maskInnerGroupChildrenMixin))]
      };
      var maskOuterGroup = {
        tag: 'g',
        attributes: _objectSpread2({}, trans.outer),
        children: [maskInnerGroup]
      };
      var maskId = "mask-".concat(explicitMaskId || nextUniqueId());
      var clipId = "clip-".concat(explicitMaskId || nextUniqueId());
      var maskTag = {
        tag: 'mask',
        attributes: _objectSpread2(_objectSpread2({}, ALL_SPACE), {}, {
          id: maskId,
          maskUnits: 'userSpaceOnUse',
          maskContentUnits: 'userSpaceOnUse'
        }),
        children: [maskRect, maskOuterGroup]
      };
      var defs = {
        tag: 'defs',
        children: [{
          tag: 'clipPath',
          attributes: {
            id: clipId
          },
          children: deGroup(maskPath)
        }, maskTag]
      };
      children.push(defs, {
        tag: 'rect',
        attributes: _objectSpread2({
          fill: 'currentColor',
          'clip-path': "url(#".concat(clipId, ")"),
          mask: "url(#".concat(maskId, ")")
        }, ALL_SPACE)
      });
      return {
        children: children,
        attributes: attributes
      };
    };
  }
};
var MissingIconIndicator = {
  provides: function provides(providers) {
    var reduceMotion = false;

    if (WINDOW.matchMedia) {
      reduceMotion = WINDOW.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }

    providers.missingIconAbstract = function () {
      var gChildren = [];
      var FILL = {
        fill: 'currentColor'
      };
      var ANIMATION_BASE = {
        attributeType: 'XML',
        repeatCount: 'indefinite',
        dur: '2s'
      }; // Ring

      gChildren.push({
        tag: 'path',
        attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
          d: 'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z'
        })
      });

      var OPACITY_ANIMATE = _objectSpread2(_objectSpread2({}, ANIMATION_BASE), {}, {
        attributeName: 'opacity'
      });

      var dot = {
        tag: 'circle',
        attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
          cx: '256',
          cy: '364',
          r: '28'
        }),
        children: []
      };

      if (!reduceMotion) {
        dot.children.push({
          tag: 'animate',
          attributes: _objectSpread2(_objectSpread2({}, ANIMATION_BASE), {}, {
            attributeName: 'r',
            values: '28;14;28;28;14;28;'
          })
        }, {
          tag: 'animate',
          attributes: _objectSpread2(_objectSpread2({}, OPACITY_ANIMATE), {}, {
            values: '1;0;1;1;0;1;'
          })
        });
      }

      gChildren.push(dot);
      gChildren.push({
        tag: 'path',
        attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
          opacity: '1',
          d: 'M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z'
        }),
        children: reduceMotion ? [] : [{
          tag: 'animate',
          attributes: _objectSpread2(_objectSpread2({}, OPACITY_ANIMATE), {}, {
            values: '1;0;0;0;0;1;'
          })
        }]
      });

      if (!reduceMotion) {
        // Exclamation
        gChildren.push({
          tag: 'path',
          attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
            opacity: '0',
            d: 'M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z'
          }),
          children: [{
            tag: 'animate',
            attributes: _objectSpread2(_objectSpread2({}, OPACITY_ANIMATE), {}, {
              values: '0;0;1;1;0;0;'
            })
          }]
        });
      }

      return {
        tag: 'g',
        attributes: {
          'class': 'missing'
        },
        children: gChildren
      };
    };
  }
};
var SvgSymbols = {
  hooks: function hooks() {
    return {
      parseNodeAttributes: function parseNodeAttributes(accumulator, node) {
        var symbolData = node.getAttribute('data-fa-symbol');
        var symbol = symbolData === null ? false : symbolData === '' ? true : symbolData;
        accumulator['symbol'] = symbol;
        return accumulator;
      }
    };
  }
};
var plugins = [InjectCSS, ReplaceElements, Layers, LayersCounter, LayersText, PseudoElements, MutationObserver$1, PowerTransforms, Masks, MissingIconIndicator, SvgSymbols];
registerPlugins(plugins, {
  mixoutsTo: api
});
var noAuto$1 = api.noAuto;
var config$1 = api.config;
var library$1 = api.library;
var dom$1 = api.dom;
var parse$1 = api.parse;
var findIconDefinition$1 = api.findIconDefinition;
var toHtml$1 = api.toHtml;
var icon = api.icon;
var layer = api.layer;
var text = api.text;
var counter = api.counter;


/***/ }),

/***/ 7606:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": function() { return /* binding */ FontAwesomeIcon; }
/* harmony export */ });
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4694);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7294);




function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
} // Get CSS class list from a props object


function classList(props) {
  var _classes;

  var beat = props.beat,
      fade = props.fade,
      beatFade = props.beatFade,
      bounce = props.bounce,
      shake = props.shake,
      flash = props.flash,
      spin = props.spin,
      spinPulse = props.spinPulse,
      spinReverse = props.spinReverse,
      pulse = props.pulse,
      fixedWidth = props.fixedWidth,
      inverse = props.inverse,
      border = props.border,
      listItem = props.listItem,
      flip = props.flip,
      size = props.size,
      rotation = props.rotation,
      pull = props.pull; // map of CSS class names to properties

  var classes = (_classes = {
    'fa-beat': beat,
    'fa-fade': fade,
    'fa-beat-fade': beatFade,
    'fa-bounce': bounce,
    'fa-shake': shake,
    'fa-flash': flash,
    'fa-spin': spin,
    'fa-spin-reverse': spinReverse,
    'fa-spin-pulse': spinPulse,
    'fa-pulse': pulse,
    'fa-fw': fixedWidth,
    'fa-inverse': inverse,
    'fa-border': border,
    'fa-li': listItem,
    'fa-flip': flip === true,
    'fa-flip-horizontal': flip === 'horizontal' || flip === 'both',
    'fa-flip-vertical': flip === 'vertical' || flip === 'both'
  }, _defineProperty(_classes, "fa-".concat(size), typeof size !== 'undefined' && size !== null), _defineProperty(_classes, "fa-rotate-".concat(rotation), typeof rotation !== 'undefined' && rotation !== null && rotation !== 0), _defineProperty(_classes, "fa-pull-".concat(pull), typeof pull !== 'undefined' && pull !== null), _defineProperty(_classes, 'fa-swap-opacity', props.swapOpacity), _classes); // map over all the keys in the classes object
  // return an array of the keys where the value for the key is not null

  return Object.keys(classes).map(function (key) {
    return classes[key] ? key : null;
  }).filter(function (key) {
    return key;
  });
} // Camelize taken from humps
// humps is copyright © 2012+ Dom Christie
// Released under the MIT license.
// Performant way to determine if object coerces to a number


function _isNumerical(obj) {
  obj = obj - 0; // eslint-disable-next-line no-self-compare

  return obj === obj;
}

function camelize(string) {
  if (_isNumerical(string)) {
    return string;
  } // eslint-disable-next-line no-useless-escape


  string = string.replace(/[\-_\s]+(.)?/g, function (match, chr) {
    return chr ? chr.toUpperCase() : '';
  }); // Ensure 1st char is always lowercase

  return string.substr(0, 1).toLowerCase() + string.substr(1);
}

var _excluded$1 = ["style"];

function capitalize(val) {
  return val.charAt(0).toUpperCase() + val.slice(1);
}

function styleToObject(style) {
  return style.split(';').map(function (s) {
    return s.trim();
  }).filter(function (s) {
    return s;
  }).reduce(function (acc, pair) {
    var i = pair.indexOf(':');
    var prop = camelize(pair.slice(0, i));
    var value = pair.slice(i + 1).trim();
    prop.startsWith('webkit') ? acc[capitalize(prop)] = value : acc[prop] = value;
    return acc;
  }, {});
}

function convert(createElement, element) {
  var extraProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (typeof element === 'string') {
    return element;
  }

  var children = (element.children || []).map(function (child) {
    return convert(createElement, child);
  });
  /* eslint-disable dot-notation */

  var mixins = Object.keys(element.attributes || {}).reduce(function (acc, key) {
    var val = element.attributes[key];

    switch (key) {
      case 'class':
        acc.attrs['className'] = val;
        delete element.attributes['class'];
        break;

      case 'style':
        acc.attrs['style'] = styleToObject(val);
        break;

      default:
        if (key.indexOf('aria-') === 0 || key.indexOf('data-') === 0) {
          acc.attrs[key.toLowerCase()] = val;
        } else {
          acc.attrs[camelize(key)] = val;
        }

    }

    return acc;
  }, {
    attrs: {}
  });

  var _extraProps$style = extraProps.style,
      existingStyle = _extraProps$style === void 0 ? {} : _extraProps$style,
      remaining = _objectWithoutProperties(extraProps, _excluded$1);

  mixins.attrs['style'] = _objectSpread2(_objectSpread2({}, mixins.attrs['style']), existingStyle);
  /* eslint-enable */

  return createElement.apply(void 0, [element.tag, _objectSpread2(_objectSpread2({}, mixins.attrs), remaining)].concat(_toConsumableArray(children)));
}

var PRODUCTION = false;

try {
  PRODUCTION = "production" === 'production';
} catch (e) {}

function log() {
  if (!PRODUCTION && console && typeof console.error === 'function') {
    var _console;

    (_console = console).error.apply(_console, arguments);
  }
}

function normalizeIconArgs(icon) {
  // this has everything that it needs to be rendered which means it was probably imported
  // directly from an icon svg package
  if (icon && _typeof(icon) === 'object' && icon.prefix && icon.iconName && icon.icon) {
    return icon;
  }

  if (_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__.parse.icon) {
    return _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__.parse.icon(icon);
  } // if the icon is null, there's nothing to do


  if (icon === null) {
    return null;
  } // if the icon is an object and has a prefix and an icon name, return it


  if (icon && _typeof(icon) === 'object' && icon.prefix && icon.iconName) {
    return icon;
  } // if it's an array with length of two


  if (Array.isArray(icon) && icon.length === 2) {
    // use the first item as prefix, second as icon name
    return {
      prefix: icon[0],
      iconName: icon[1]
    };
  } // if it's a string, use it as the icon name


  if (typeof icon === 'string') {
    return {
      prefix: 'fas',
      iconName: icon
    };
  }
} // creates an object with a key of key
// and a value of value
// if certain conditions are met


function objectWithKey(key, value) {
  // if the value is a non-empty array
  // or it's not an array but it is truthy
  // then create the object with the key and the value
  // if not, return an empty array
  return Array.isArray(value) && value.length > 0 || !Array.isArray(value) && value ? _defineProperty({}, key, value) : {};
}

var _excluded = ["forwardedRef"];

function FontAwesomeIcon(_ref) {
  var forwardedRef = _ref.forwardedRef,
      props = _objectWithoutProperties(_ref, _excluded);

  var iconArgs = props.icon,
      maskArgs = props.mask,
      symbol = props.symbol,
      className = props.className,
      title = props.title,
      titleId = props.titleId,
      maskId = props.maskId;
  var iconLookup = normalizeIconArgs(iconArgs);
  var classes = objectWithKey('classes', [].concat(_toConsumableArray(classList(props)), _toConsumableArray(className.split(' '))));
  var transform = objectWithKey('transform', typeof props.transform === 'string' ? _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__.parse.transform(props.transform) : props.transform);
  var mask = objectWithKey('mask', normalizeIconArgs(maskArgs));
  var renderedIcon = (0,_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__.icon)(iconLookup, _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, classes), transform), mask), {}, {
    symbol: symbol,
    title: title,
    titleId: titleId,
    maskId: maskId
  }));

  if (!renderedIcon) {
    log('Could not find icon', iconLookup);
    return null;
  }

  var abstract = renderedIcon.abstract;
  var extraProps = {
    ref: forwardedRef
  };
  Object.keys(props).forEach(function (key) {
    // eslint-disable-next-line no-prototype-builtins
    if (!FontAwesomeIcon.defaultProps.hasOwnProperty(key)) {
      extraProps[key] = props[key];
    }
  });
  return convertCurry(abstract[0], extraProps);
}

FontAwesomeIcon.displayName = 'FontAwesomeIcon';
FontAwesomeIcon.propTypes = {
  beat: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  border: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  beatFade: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  bounce: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  fade: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  flash: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  mask: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().array), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)]),
  maskId: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  fixedWidth: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  inverse: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  flip: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf([true, false, 'horizontal', 'vertical', 'both']),
  icon: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().array), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)]),
  listItem: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  pull: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(['right', 'left']),
  pulse: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  rotation: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf([0, 90, 180, 270]),
  shake: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  size: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(['2xs', 'xs', 'sm', 'lg', 'xl', '2xl', '1x', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x']),
  spin: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  spinPulse: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  spinReverse: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  symbol: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)]),
  title: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  titleId: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  transform: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object)]),
  swapOpacity: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool)
};
FontAwesomeIcon.defaultProps = {
  border: false,
  className: '',
  mask: null,
  maskId: null,
  fixedWidth: false,
  inverse: false,
  flip: false,
  icon: null,
  listItem: false,
  pull: null,
  pulse: false,
  rotation: null,
  size: null,
  spin: false,
  spinPulse: false,
  spinReverse: false,
  beat: false,
  fade: false,
  beatFade: false,
  bounce: false,
  shake: false,
  symbol: false,
  title: '',
  titleId: null,
  transform: null,
  swapOpacity: false
};
var convertCurry = convert.bind(null, react__WEBPACK_IMPORTED_MODULE_1__.createElement);


/***/ }),

/***/ 2393:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = true;

var _extends = Object.assign || function (target) {
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

var getLocation = function getLocation(source) {
  var _source$location = source.location,
      search = _source$location.search,
      hash = _source$location.hash,
      href = _source$location.href,
      origin = _source$location.origin,
      protocol = _source$location.protocol,
      host = _source$location.host,
      hostname = _source$location.hostname,
      port = _source$location.port;
  var pathname = source.location.pathname;

  if (!pathname && href && canUseDOM) {
    var url = new URL(href);
    pathname = url.pathname;
  }

  return {
    pathname: encodeURI(decodeURI(pathname)),
    search: search,
    hash: hash,
    href: href,
    origin: origin,
    protocol: protocol,
    host: host,
    hostname: hostname,
    port: port,
    state: source.history.state,
    key: source.history.state && source.history.state.key || "initial"
  };
};

var createHistory = function createHistory(source, options) {
  var listeners = [];
  var location = getLocation(source);
  var transitioning = false;

  var resolveTransition = function resolveTransition() {};

  return {
    get location() {
      return location;
    },

    get transitioning() {
      return transitioning;
    },

    _onTransitionComplete: function _onTransitionComplete() {
      transitioning = false;
      resolveTransition();
    },
    listen: function listen(listener) {
      listeners.push(listener);

      var popstateListener = function popstateListener() {
        location = getLocation(source);
        listener({
          location: location,
          action: "POP"
        });
      };

      source.addEventListener("popstate", popstateListener);
      return function () {
        source.removeEventListener("popstate", popstateListener);
        listeners = listeners.filter(function (fn) {
          return fn !== listener;
        });
      };
    },
    navigate: function navigate(to) {
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          state = _ref.state,
          _ref$replace = _ref.replace,
          replace = _ref$replace === undefined ? false : _ref$replace;

      if (typeof to === "number") {
        source.history.go(to);
      } else {
        state = _extends({}, state, {
          key: Date.now() + ""
        }); // try...catch iOS Safari limits to 100 pushState calls

        try {
          if (transitioning || replace) {
            source.history.replaceState(state, null, to);
          } else {
            source.history.pushState(state, null, to);
          }
        } catch (e) {
          source.location[replace ? "replace" : "assign"](to);
        }
      }

      location = getLocation(source);
      transitioning = true;
      var transition = new Promise(function (res) {
        return resolveTransition = res;
      });
      listeners.forEach(function (listener) {
        return listener({
          location: location,
          action: "PUSH"
        });
      });
      return transition;
    }
  };
}; ////////////////////////////////////////////////////////////////////////////////
// Stores history entries in memory for testing or other platforms like Native


var createMemorySource = function createMemorySource() {
  var initialPath = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "/";
  var searchIndex = initialPath.indexOf("?");
  var initialLocation = {
    pathname: searchIndex > -1 ? initialPath.substr(0, searchIndex) : initialPath,
    search: searchIndex > -1 ? initialPath.substr(searchIndex) : ""
  };
  var index = 0;
  var stack = [initialLocation];
  var states = [null];
  return {
    get location() {
      return stack[index];
    },

    addEventListener: function addEventListener(name, fn) {},
    removeEventListener: function removeEventListener(name, fn) {},
    history: {
      get entries() {
        return stack;
      },

      get index() {
        return index;
      },

      get state() {
        return states[index];
      },

      pushState: function pushState(state, _, uri) {
        var _uri$split = uri.split("?"),
            pathname = _uri$split[0],
            _uri$split$ = _uri$split[1],
            search = _uri$split$ === undefined ? "" : _uri$split$;

        index++;
        stack.push({
          pathname: pathname,
          search: search.length ? "?" + search : search
        });
        states.push(state);
      },
      replaceState: function replaceState(state, _, uri) {
        var _uri$split2 = uri.split("?"),
            pathname = _uri$split2[0],
            _uri$split2$ = _uri$split2[1],
            search = _uri$split2$ === undefined ? "" : _uri$split2$;

        stack[index] = {
          pathname: pathname,
          search: search
        };
        states[index] = state;
      },
      go: function go(to) {
        var newIndex = index + to;

        if (newIndex < 0 || newIndex > states.length - 1) {
          return;
        }

        index = newIndex;
      }
    }
  };
}; ////////////////////////////////////////////////////////////////////////////////
// global history - uses window.history as the source if available, otherwise a
// memory history


var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);

var getSource = function getSource() {
  return canUseDOM ? window : createMemorySource();
};

var globalHistory = createHistory(getSource());
var navigate = globalHistory.navigate; ////////////////////////////////////////////////////////////////////////////////

exports.V5 = globalHistory;
__webpack_unused_export__ = navigate;
__webpack_unused_export__ = createHistory;
__webpack_unused_export__ = createMemorySource;

/***/ }),

/***/ 2098:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.shallowCompare = exports.validateRedirect = exports.insertParams = exports.resolve = exports.match = exports.pick = exports.startsWith = undefined;

var _invariant = __webpack_require__(1143);

var _invariant2 = _interopRequireDefault(_invariant);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} ////////////////////////////////////////////////////////////////////////////////
// startsWith(string, search) - Check if `string` starts with `search`


var startsWith = function startsWith(string, search) {
  return string.substr(0, search.length) === search;
}; ////////////////////////////////////////////////////////////////////////////////
// pick(routes, uri)
//
// Ranks and picks the best route to match. Each segment gets the highest
// amount of points, then the type of segment gets an additional amount of
// points where
//
//     static > dynamic > splat > root
//
// This way we don't have to worry about the order of our routes, let the
// computers do it.
//
// A route looks like this
//
//     { path, default, value }
//
// And a returned match looks like:
//
//     { route, params, uri }
//
// I know, I should use TypeScript not comments for these types.


var pick = function pick(routes, uri) {
  var match = void 0;
  var default_ = void 0;

  var _uri$split = uri.split("?"),
      uriPathname = _uri$split[0];

  var uriSegments = segmentize(uriPathname);
  var isRootUri = uriSegments[0] === "";
  var ranked = rankRoutes(routes);

  for (var i = 0, l = ranked.length; i < l; i++) {
    var missed = false;
    var route = ranked[i].route;

    if (route.default) {
      default_ = {
        route: route,
        params: {},
        uri: uri
      };
      continue;
    }

    var routeSegments = segmentize(route.path);
    var params = {};
    var max = Math.max(uriSegments.length, routeSegments.length);
    var index = 0;

    for (; index < max; index++) {
      var routeSegment = routeSegments[index];
      var uriSegment = uriSegments[index];

      if (isSplat(routeSegment)) {
        // Hit a splat, just grab the rest, and return a match
        // uri:   /files/documents/work
        // route: /files/*
        var param = routeSegment.slice(1) || "*";
        params[param] = uriSegments.slice(index).map(decodeURIComponent).join("/");
        break;
      }

      if (uriSegment === undefined) {
        // URI is shorter than the route, no match
        // uri:   /users
        // route: /users/:userId
        missed = true;
        break;
      }

      var dynamicMatch = paramRe.exec(routeSegment);

      if (dynamicMatch && !isRootUri) {
        var matchIsNotReserved = reservedNames.indexOf(dynamicMatch[1]) === -1;
        !matchIsNotReserved ?  false ? 0 : (0, _invariant2.default)(false) : void 0;
        var value = decodeURIComponent(uriSegment);
        params[dynamicMatch[1]] = value;
      } else if (routeSegment !== uriSegment) {
        // Current segments don't match, not dynamic, not splat, so no match
        // uri:   /users/123/settings
        // route: /users/:id/profile
        missed = true;
        break;
      }
    }

    if (!missed) {
      match = {
        route: route,
        params: params,
        uri: "/" + uriSegments.slice(0, index).join("/")
      };
      break;
    }
  }

  return match || default_ || null;
}; ////////////////////////////////////////////////////////////////////////////////
// match(path, uri) - Matches just one path to a uri, also lol


var match = function match(path, uri) {
  return pick([{
    path: path
  }], uri);
}; ////////////////////////////////////////////////////////////////////////////////
// resolve(to, basepath)
//
// Resolves URIs as though every path is a directory, no files.  Relative URIs
// in the browser can feel awkward because not only can you be "in a directory"
// you can be "at a file", too. For example
//
//     browserSpecResolve('foo', '/bar/') => /bar/foo
//     browserSpecResolve('foo', '/bar') => /foo
//
// But on the command line of a file system, it's not as complicated, you can't
// `cd` from a file, only directories.  This way, links have to know less about
// their current path. To go deeper you can do this:
//
//     <Link to="deeper"/>
//     // instead of
//     <Link to=`{${props.uri}/deeper}`/>
//
// Just like `cd`, if you want to go deeper from the command line, you do this:
//
//     cd deeper
//     # not
//     cd $(pwd)/deeper
//
// By treating every path as a directory, linking to relative paths should
// require less contextual information and (fingers crossed) be more intuitive.


var resolve = function resolve(to, base) {
  // /foo/bar, /baz/qux => /foo/bar
  if (startsWith(to, "/")) {
    return to;
  }

  var _to$split = to.split("?"),
      toPathname = _to$split[0],
      toQuery = _to$split[1];

  var _base$split = base.split("?"),
      basePathname = _base$split[0];

  var toSegments = segmentize(toPathname);
  var baseSegments = segmentize(basePathname); // ?a=b, /users?b=c => /users?a=b

  if (toSegments[0] === "") {
    return addQuery(basePathname, toQuery);
  } // profile, /users/789 => /users/789/profile


  if (!startsWith(toSegments[0], ".")) {
    var pathname = baseSegments.concat(toSegments).join("/");
    return addQuery((basePathname === "/" ? "" : "/") + pathname, toQuery);
  } // ./         /users/123  =>  /users/123
  // ../        /users/123  =>  /users
  // ../..      /users/123  =>  /
  // ../../one  /a/b/c/d    =>  /a/b/one
  // .././one   /a/b/c/d    =>  /a/b/c/one


  var allSegments = baseSegments.concat(toSegments);
  var segments = [];

  for (var i = 0, l = allSegments.length; i < l; i++) {
    var segment = allSegments[i];
    if (segment === "..") segments.pop();else if (segment !== ".") segments.push(segment);
  }

  return addQuery("/" + segments.join("/"), toQuery);
}; ////////////////////////////////////////////////////////////////////////////////
// insertParams(path, params)


var insertParams = function insertParams(path, params) {
  var _path$split = path.split("?"),
      pathBase = _path$split[0],
      _path$split$ = _path$split[1],
      query = _path$split$ === undefined ? "" : _path$split$;

  var segments = segmentize(pathBase);
  var constructedPath = "/" + segments.map(function (segment) {
    var match = paramRe.exec(segment);
    return match ? params[match[1]] : segment;
  }).join("/");
  var _params$location = params.location;
  _params$location = _params$location === undefined ? {} : _params$location;
  var _params$location$sear = _params$location.search,
      search = _params$location$sear === undefined ? "" : _params$location$sear;
  var searchSplit = search.split("?")[1] || "";
  constructedPath = addQuery(constructedPath, query, searchSplit);
  return constructedPath;
};

var validateRedirect = function validateRedirect(from, to) {
  var filter = function filter(segment) {
    return isDynamic(segment);
  };

  var fromString = segmentize(from).filter(filter).sort().join("/");
  var toString = segmentize(to).filter(filter).sort().join("/");
  return fromString === toString;
}; ////////////////////////////////////////////////////////////////////////////////
// Junk


var paramRe = /^:(.+)/;
var SEGMENT_POINTS = 4;
var STATIC_POINTS = 3;
var DYNAMIC_POINTS = 2;
var SPLAT_PENALTY = 1;
var ROOT_POINTS = 1;

var isRootSegment = function isRootSegment(segment) {
  return segment === "";
};

var isDynamic = function isDynamic(segment) {
  return paramRe.test(segment);
};

var isSplat = function isSplat(segment) {
  return segment && segment[0] === "*";
};

var rankRoute = function rankRoute(route, index) {
  var score = route.default ? 0 : segmentize(route.path).reduce(function (score, segment) {
    score += SEGMENT_POINTS;
    if (isRootSegment(segment)) score += ROOT_POINTS;else if (isDynamic(segment)) score += DYNAMIC_POINTS;else if (isSplat(segment)) score -= SEGMENT_POINTS + SPLAT_PENALTY;else score += STATIC_POINTS;
    return score;
  }, 0);
  return {
    route: route,
    score: score,
    index: index
  };
};

var rankRoutes = function rankRoutes(routes) {
  return routes.map(rankRoute).sort(function (a, b) {
    return a.score < b.score ? 1 : a.score > b.score ? -1 : a.index - b.index;
  });
};

var segmentize = function segmentize(uri) {
  return uri // strip starting/ending slashes
  .replace(/(^\/+|\/+$)/g, "").split("/");
};

var addQuery = function addQuery(pathname) {
  for (var _len = arguments.length, query = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    query[_key - 1] = arguments[_key];
  }

  query = query.filter(function (q) {
    return q && q.length > 0;
  });
  return pathname + (query && query.length > 0 ? "?" + query.join("&") : "");
};

var reservedNames = ["uri", "path"];
/**
 * Shallow compares two objects.
 * @param {Object} obj1 The first object to compare.
 * @param {Object} obj2 The second object to compare.
 */

var shallowCompare = function shallowCompare(obj1, obj2) {
  var obj1Keys = Object.keys(obj1);
  return obj1Keys.length === Object.keys(obj2).length && obj1Keys.every(function (key) {
    return obj2.hasOwnProperty(key) && obj1[key] === obj2[key];
  });
}; ////////////////////////////////////////////////////////////////////////////////


exports.startsWith = startsWith;
exports.pick = pick;
exports.match = match;
exports.resolve = resolve;
exports.insertParams = insertParams;
exports.validateRedirect = validateRedirect;
exports.shallowCompare = shallowCompare;

/***/ }),

/***/ 2338:
/***/ (function(module) {

/* The following list is defined in React's core */
var IS_UNITLESS = {
  animationIterationCount: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridRow: true,
  gridColumn: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  // SVG-related properties
  fillOpacity: true,
  stopOpacity: true,
  strokeDashoffset: true,
  strokeOpacity: true,
  strokeWidth: true
};

module.exports = function (name, value) {
  if (typeof value === 'number' && !IS_UNITLESS[name]) {
    return value + 'px';
  } else {
    return value;
  }
};

/***/ }),

/***/ 2471:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var prefix = __webpack_require__(3960);

var toCamelCase = __webpack_require__(3562);

var cache = {
  'float': 'cssFloat'
};

var addPxToStyle = __webpack_require__(2338);

function style(element, property, value) {
  var camel = cache[property];

  if (typeof camel === 'undefined') {
    camel = detect(property);
  } // may be false if CSS prop is unsupported


  if (camel) {
    if (value === undefined) {
      return element.style[camel];
    }

    element.style[camel] = addPxToStyle(camel, value);
  }
}

function each(element, properties) {
  for (var k in properties) {
    if (properties.hasOwnProperty(k)) {
      style(element, k, properties[k]);
    }
  }
}

function detect(cssProp) {
  var camel = toCamelCase(cssProp);
  var result = prefix(camel);
  cache[camel] = cache[cssProp] = cache[result] = result;
  return result;
}

function set() {
  if (arguments.length === 2) {
    if (typeof arguments[1] === 'string') {
      arguments[0].style.cssText = arguments[1];
    } else {
      each(arguments[0], arguments[1]);
    }
  } else {
    style(arguments[0], arguments[1], arguments[2]);
  }
}

module.exports = set;
module.exports.set = set;

module.exports.get = function (element, properties) {
  if (Array.isArray(properties)) {
    return properties.reduce(function (obj, prop) {
      obj[prop] = style(element, prop || '');
      return obj;
    }, {});
  } else {
    return style(element, properties || '');
  }
};

/***/ }),

/***/ 8440:
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.applyTrailingSlashOption = void 0; // TODO(v5): Remove legacy setting and default to "always"

var applyTrailingSlashOption = function applyTrailingSlashOption(input, option) {
  if (option === void 0) {
    option = "legacy";
  }

  var hasHtmlSuffix = input.endsWith(".html");
  var hasXmlSuffix = input.endsWith(".xml");
  var hasPdfSuffix = input.endsWith(".pdf");
  if (input === "/") return input;

  if (hasHtmlSuffix || hasXmlSuffix || hasPdfSuffix) {
    option = "never";
  }

  if (option === "always") {
    return input.endsWith("/") ? input : input + "/";
  }

  if (option === "never") {
    return input.endsWith("/") ? input.slice(0, -1) : input;
  }

  return input;
};

exports.applyTrailingSlashOption = applyTrailingSlashOption;

/***/ }),

/***/ 540:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = __webpack_require__(7153);

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

exports.__esModule = true;
exports.wrapRootElement = void 0;

var _react = _interopRequireWildcard(__webpack_require__(7294));

var _react2 = __webpack_require__(611);

var _gatsbyScript = __webpack_require__(9848);

function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== "function") return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}

function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache(nodeInterop);

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function PartytownProvider(_ref) {
  var children = _ref.children;

  var _ref2 = (0, _react.useState)({
    collectedForwards: new Set(),
    collectedAnyScript: false
  }),
      _ref3 = _slicedToArray(_ref2, 2),
      _ref3$ = _ref3[0],
      collectedForwards = _ref3$.collectedForwards,
      collectedAnyScript = _ref3$.collectedAnyScript,
      setState = _ref3[1];

  return /*#__PURE__*/_react.default.createElement(_gatsbyScript.PartytownContext.Provider, {
    value: {
      collectScript: function collectScript(newScript) {
        var stateShouldChange = false;
        var potentialNewState = {
          collectedAnyScript: collectedAnyScript,
          collectedForwards: collectedForwards
        };

        if (!collectedAnyScript) {
          potentialNewState.collectedAnyScript = true;
          stateShouldChange = true;
        }

        if (newScript !== null && newScript !== void 0 && newScript.forward) {
          if (Array.isArray(newScript.forward)) {
            var _iterator = _createForOfIteratorHelper(newScript.forward),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var singleForward = _step.value;

                if (!potentialNewState.collectedForwards.has(singleForward)) {
                  potentialNewState.collectedForwards.add(singleForward);
                  stateShouldChange = true;
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          } else {
            if (false) {}
          }
        }

        if (stateShouldChange) {
          setState(potentialNewState);
        }
      }
    }
  }, children, collectedAnyScript && /*#__PURE__*/_react.default.createElement(_react2.Partytown, {
    key: "partytown",
    forward: Array.from(collectedForwards)
  }));
}

var wrapRootElement = function wrapRootElement(_ref4) {
  var element = _ref4.element;
  return /*#__PURE__*/_react.default.createElement(PartytownProvider, null, element);
};

exports.wrapRootElement = wrapRootElement;

/***/ }),

/***/ 3186:
/***/ (function(module) {

// Generated by CoffeeScript 1.12.2
(function () {
  var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;

  if (typeof performance !== "undefined" && performance !== null && performance.now) {
    module.exports = function () {
      return performance.now();
    };
  } else if (typeof process !== "undefined" && process !== null && process.hrtime) {
    module.exports = function () {
      return (getNanoSeconds() - nodeLoadTime) / 1e6;
    };

    hrtime = process.hrtime;

    getNanoSeconds = function getNanoSeconds() {
      var hr;
      hr = hrtime();
      return hr[0] * 1e9 + hr[1];
    };

    moduleLoadTime = getNanoSeconds();
    upTime = process.uptime() * 1e9;
    nodeLoadTime = moduleLoadTime - upTime;
  } else if (Date.now) {
    module.exports = function () {
      return Date.now() - loadTime;
    };

    loadTime = Date.now();
  } else {
    module.exports = function () {
      return new Date().getTime() - loadTime;
    };

    loadTime = new Date().getTime();
  }
}).call(this);

/***/ }),

/***/ 677:
/***/ (function(module) {

var x = String;

var create = function create() {
  return {
    isColorSupported: false,
    reset: x,
    bold: x,
    dim: x,
    italic: x,
    underline: x,
    inverse: x,
    hidden: x,
    strikethrough: x,
    black: x,
    red: x,
    green: x,
    yellow: x,
    blue: x,
    magenta: x,
    cyan: x,
    white: x,
    gray: x,
    bgBlack: x,
    bgRed: x,
    bgGreen: x,
    bgYellow: x,
    bgBlue: x,
    bgMagenta: x,
    bgCyan: x,
    bgWhite: x
  };
};

module.exports = create();
module.exports.createColors = create;

/***/ }),

/***/ 3960:
/***/ (function(module) {

var div = null;
var prefixes = ['Webkit', 'Moz', 'O', 'ms'];

module.exports = function prefixStyle(prop) {
  // re-use a dummy div
  if (!div) {
    div = document.createElement('div');
  }

  var style = div.style; // prop exists without prefix

  if (prop in style) {
    return prop;
  } // borderRadius -> BorderRadius


  var titleCase = prop.charAt(0).toUpperCase() + prop.slice(1); // find the vendor-prefixed prop

  for (var i = prefixes.length; i >= 0; i--) {
    var name = prefixes[i] + titleCase; // e.g. WebkitBorderRadius or webkitBorderRadius

    if (name in style) {
      return name;
    }
  }

  return false;
};

/***/ }),

/***/ 8442:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var now = __webpack_require__(3186),
    root = typeof window === 'undefined' ? __webpack_require__.g : window,
    vendors = ['moz', 'webkit'],
    suffix = 'AnimationFrame',
    raf = root['request' + suffix],
    caf = root['cancel' + suffix] || root['cancelRequest' + suffix];

for (var i = 0; !raf && i < vendors.length; i++) {
  raf = root[vendors[i] + 'Request' + suffix];
  caf = root[vendors[i] + 'Cancel' + suffix] || root[vendors[i] + 'CancelRequest' + suffix];
} // Some versions of FF have rAF but not cAF


if (!raf || !caf) {
  var last = 0,
      id = 0,
      queue = [],
      frameDuration = 1000 / 60;

  raf = function raf(callback) {
    if (queue.length === 0) {
      var _now = now(),
          next = Math.max(0, frameDuration - (_now - last));

      last = next + _now;
      setTimeout(function () {
        var cp = queue.slice(0); // Clear queue here to prevent
        // callbacks from appending listeners
        // to the current frame's queue

        queue.length = 0;

        for (var i = 0; i < cp.length; i++) {
          if (!cp[i].cancelled) {
            try {
              cp[i].callback(last);
            } catch (e) {
              setTimeout(function () {
                throw e;
              }, 0);
            }
          }
        }
      }, Math.round(next));
    }

    queue.push({
      handle: ++id,
      callback: callback,
      cancelled: false
    });
    return id;
  };

  caf = function caf(handle) {
    for (var i = 0; i < queue.length; i++) {
      if (queue[i].handle === handle) {
        queue[i].cancelled = true;
      }
    }
  };
}

module.exports = function (fn) {
  // Wrap in a new function to prevent
  // `cancel` potentially being assigned
  // to the native rAF function
  return raf.call(root, fn);
};

module.exports.cancel = function () {
  caf.apply(root, arguments);
};

module.exports.polyfill = function (object) {
  if (!object) {
    object = root;
  }

  object.requestAnimationFrame = raf;
  object.cancelAnimationFrame = caf;
};

/***/ }),

/***/ 8080:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _extends = Object.assign || function (target) {
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

exports.renderViewDefault = renderViewDefault;
exports.renderTrackHorizontalDefault = renderTrackHorizontalDefault;
exports.renderTrackVerticalDefault = renderTrackVerticalDefault;
exports.renderThumbHorizontalDefault = renderThumbHorizontalDefault;
exports.renderThumbVerticalDefault = renderThumbVerticalDefault;

var _react = __webpack_require__(7294);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}
/* eslint-disable react/prop-types */


function renderViewDefault(props) {
  return _react2["default"].createElement('div', props);
}

function renderTrackHorizontalDefault(_ref) {
  var style = _ref.style,
      props = _objectWithoutProperties(_ref, ['style']);

  var finalStyle = _extends({}, style, {
    right: 2,
    bottom: 2,
    left: 2,
    borderRadius: 3
  });

  return _react2["default"].createElement('div', _extends({
    style: finalStyle
  }, props));
}

function renderTrackVerticalDefault(_ref2) {
  var style = _ref2.style,
      props = _objectWithoutProperties(_ref2, ['style']);

  var finalStyle = _extends({}, style, {
    right: 2,
    bottom: 2,
    top: 2,
    borderRadius: 3
  });

  return _react2["default"].createElement('div', _extends({
    style: finalStyle
  }, props));
}

function renderThumbHorizontalDefault(_ref3) {
  var style = _ref3.style,
      props = _objectWithoutProperties(_ref3, ['style']);

  var finalStyle = _extends({}, style, {
    cursor: 'pointer',
    borderRadius: 'inherit',
    backgroundColor: 'rgba(0,0,0,.2)'
  });

  return _react2["default"].createElement('div', _extends({
    style: finalStyle
  }, props));
}

function renderThumbVerticalDefault(_ref4) {
  var style = _ref4.style,
      props = _objectWithoutProperties(_ref4, ['style']);

  var finalStyle = _extends({}, style, {
    cursor: 'pointer',
    borderRadius: 'inherit',
    backgroundColor: 'rgba(0,0,0,.2)'
  });

  return _react2["default"].createElement('div', _extends({
    style: finalStyle
  }, props));
}

/***/ }),

/***/ 9458:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _extends = Object.assign || function (target) {
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

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _raf2 = __webpack_require__(8442);

var _raf3 = _interopRequireDefault(_raf2);

var _domCss = __webpack_require__(2471);

var _domCss2 = _interopRequireDefault(_domCss);

var _react = __webpack_require__(7294);

var _propTypes = __webpack_require__(5697);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _isString = __webpack_require__(978);

var _isString2 = _interopRequireDefault(_isString);

var _getScrollbarWidth = __webpack_require__(9994);

var _getScrollbarWidth2 = _interopRequireDefault(_getScrollbarWidth);

var _returnFalse = __webpack_require__(8516);

var _returnFalse2 = _interopRequireDefault(_returnFalse);

var _getInnerWidth = __webpack_require__(6658);

var _getInnerWidth2 = _interopRequireDefault(_getInnerWidth);

var _getInnerHeight = __webpack_require__(188);

var _getInnerHeight2 = _interopRequireDefault(_getInnerHeight);

var _styles = __webpack_require__(122);

var _defaultRenderElements = __webpack_require__(8080);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Scrollbars = function (_Component) {
  _inherits(Scrollbars, _Component);

  function Scrollbars(props) {
    var _ref;

    _classCallCheck(this, Scrollbars);

    for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      rest[_key - 1] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = Scrollbars.__proto__ || Object.getPrototypeOf(Scrollbars)).call.apply(_ref, [this, props].concat(rest)));

    _this.getScrollLeft = _this.getScrollLeft.bind(_this);
    _this.getScrollTop = _this.getScrollTop.bind(_this);
    _this.getScrollWidth = _this.getScrollWidth.bind(_this);
    _this.getScrollHeight = _this.getScrollHeight.bind(_this);
    _this.getClientWidth = _this.getClientWidth.bind(_this);
    _this.getClientHeight = _this.getClientHeight.bind(_this);
    _this.getValues = _this.getValues.bind(_this);
    _this.getThumbHorizontalWidth = _this.getThumbHorizontalWidth.bind(_this);
    _this.getThumbVerticalHeight = _this.getThumbVerticalHeight.bind(_this);
    _this.getScrollLeftForOffset = _this.getScrollLeftForOffset.bind(_this);
    _this.getScrollTopForOffset = _this.getScrollTopForOffset.bind(_this);
    _this.scrollLeft = _this.scrollLeft.bind(_this);
    _this.scrollTop = _this.scrollTop.bind(_this);
    _this.scrollToLeft = _this.scrollToLeft.bind(_this);
    _this.scrollToTop = _this.scrollToTop.bind(_this);
    _this.scrollToRight = _this.scrollToRight.bind(_this);
    _this.scrollToBottom = _this.scrollToBottom.bind(_this);
    _this.handleTrackMouseEnter = _this.handleTrackMouseEnter.bind(_this);
    _this.handleTrackMouseLeave = _this.handleTrackMouseLeave.bind(_this);
    _this.handleHorizontalTrackMouseDown = _this.handleHorizontalTrackMouseDown.bind(_this);
    _this.handleVerticalTrackMouseDown = _this.handleVerticalTrackMouseDown.bind(_this);
    _this.handleHorizontalThumbMouseDown = _this.handleHorizontalThumbMouseDown.bind(_this);
    _this.handleVerticalThumbMouseDown = _this.handleVerticalThumbMouseDown.bind(_this);
    _this.handleWindowResize = _this.handleWindowResize.bind(_this);
    _this.handleScroll = _this.handleScroll.bind(_this);
    _this.handleDrag = _this.handleDrag.bind(_this);
    _this.handleDragEnd = _this.handleDragEnd.bind(_this);
    _this.state = {
      didMountUniversal: false
    };
    return _this;
  }

  _createClass(Scrollbars, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.addListeners();
      this.update();
      this.componentDidMountUniversal();
    }
  }, {
    key: 'componentDidMountUniversal',
    value: function componentDidMountUniversal() {
      // eslint-disable-line react/sort-comp
      var universal = this.props.universal;
      if (!universal) return;
      this.setState({
        didMountUniversal: true
      });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.update();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.removeListeners();
      (0, _raf2.cancel)(this.requestFrame);
      clearTimeout(this.hideTracksTimeout);
      clearInterval(this.detectScrollingInterval);
    }
  }, {
    key: 'getScrollLeft',
    value: function getScrollLeft() {
      if (!this.view) return 0;
      return this.view.scrollLeft;
    }
  }, {
    key: 'getScrollTop',
    value: function getScrollTop() {
      if (!this.view) return 0;
      return this.view.scrollTop;
    }
  }, {
    key: 'getScrollWidth',
    value: function getScrollWidth() {
      if (!this.view) return 0;
      return this.view.scrollWidth;
    }
  }, {
    key: 'getScrollHeight',
    value: function getScrollHeight() {
      if (!this.view) return 0;
      return this.view.scrollHeight;
    }
  }, {
    key: 'getClientWidth',
    value: function getClientWidth() {
      if (!this.view) return 0;
      return this.view.clientWidth;
    }
  }, {
    key: 'getClientHeight',
    value: function getClientHeight() {
      if (!this.view) return 0;
      return this.view.clientHeight;
    }
  }, {
    key: 'getValues',
    value: function getValues() {
      var _ref2 = this.view || {},
          _ref2$scrollLeft = _ref2.scrollLeft,
          scrollLeft = _ref2$scrollLeft === undefined ? 0 : _ref2$scrollLeft,
          _ref2$scrollTop = _ref2.scrollTop,
          scrollTop = _ref2$scrollTop === undefined ? 0 : _ref2$scrollTop,
          _ref2$scrollWidth = _ref2.scrollWidth,
          scrollWidth = _ref2$scrollWidth === undefined ? 0 : _ref2$scrollWidth,
          _ref2$scrollHeight = _ref2.scrollHeight,
          scrollHeight = _ref2$scrollHeight === undefined ? 0 : _ref2$scrollHeight,
          _ref2$clientWidth = _ref2.clientWidth,
          clientWidth = _ref2$clientWidth === undefined ? 0 : _ref2$clientWidth,
          _ref2$clientHeight = _ref2.clientHeight,
          clientHeight = _ref2$clientHeight === undefined ? 0 : _ref2$clientHeight;

      return {
        left: scrollLeft / (scrollWidth - clientWidth) || 0,
        top: scrollTop / (scrollHeight - clientHeight) || 0,
        scrollLeft: scrollLeft,
        scrollTop: scrollTop,
        scrollWidth: scrollWidth,
        scrollHeight: scrollHeight,
        clientWidth: clientWidth,
        clientHeight: clientHeight
      };
    }
  }, {
    key: 'getThumbHorizontalWidth',
    value: function getThumbHorizontalWidth() {
      var _props = this.props,
          thumbSize = _props.thumbSize,
          thumbMinSize = _props.thumbMinSize;
      var _view = this.view,
          scrollWidth = _view.scrollWidth,
          clientWidth = _view.clientWidth;
      var trackWidth = (0, _getInnerWidth2["default"])(this.trackHorizontal);
      var width = Math.ceil(clientWidth / scrollWidth * trackWidth);
      if (trackWidth === width) return 0;
      if (thumbSize) return thumbSize;
      return Math.max(width, thumbMinSize);
    }
  }, {
    key: 'getThumbVerticalHeight',
    value: function getThumbVerticalHeight() {
      var _props2 = this.props,
          thumbSize = _props2.thumbSize,
          thumbMinSize = _props2.thumbMinSize;
      var _view2 = this.view,
          scrollHeight = _view2.scrollHeight,
          clientHeight = _view2.clientHeight;
      var trackHeight = (0, _getInnerHeight2["default"])(this.trackVertical);
      var height = Math.ceil(clientHeight / scrollHeight * trackHeight);
      if (trackHeight === height) return 0;
      if (thumbSize) return thumbSize;
      return Math.max(height, thumbMinSize);
    }
  }, {
    key: 'getScrollLeftForOffset',
    value: function getScrollLeftForOffset(offset) {
      var _view3 = this.view,
          scrollWidth = _view3.scrollWidth,
          clientWidth = _view3.clientWidth;
      var trackWidth = (0, _getInnerWidth2["default"])(this.trackHorizontal);
      var thumbWidth = this.getThumbHorizontalWidth();
      return offset / (trackWidth - thumbWidth) * (scrollWidth - clientWidth);
    }
  }, {
    key: 'getScrollTopForOffset',
    value: function getScrollTopForOffset(offset) {
      var _view4 = this.view,
          scrollHeight = _view4.scrollHeight,
          clientHeight = _view4.clientHeight;
      var trackHeight = (0, _getInnerHeight2["default"])(this.trackVertical);
      var thumbHeight = this.getThumbVerticalHeight();
      return offset / (trackHeight - thumbHeight) * (scrollHeight - clientHeight);
    }
  }, {
    key: 'scrollLeft',
    value: function scrollLeft() {
      var left = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      if (!this.view) return;
      this.view.scrollLeft = left;
    }
  }, {
    key: 'scrollTop',
    value: function scrollTop() {
      var top = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      if (!this.view) return;
      this.view.scrollTop = top;
    }
  }, {
    key: 'scrollToLeft',
    value: function scrollToLeft() {
      if (!this.view) return;
      this.view.scrollLeft = 0;
    }
  }, {
    key: 'scrollToTop',
    value: function scrollToTop() {
      if (!this.view) return;
      this.view.scrollTop = 0;
    }
  }, {
    key: 'scrollToRight',
    value: function scrollToRight() {
      if (!this.view) return;
      this.view.scrollLeft = this.view.scrollWidth;
    }
  }, {
    key: 'scrollToBottom',
    value: function scrollToBottom() {
      if (!this.view) return;
      this.view.scrollTop = this.view.scrollHeight;
    }
  }, {
    key: 'addListeners',
    value: function addListeners() {
      /* istanbul ignore if */
      if (typeof document === 'undefined' || !this.view) return;
      var view = this.view,
          trackHorizontal = this.trackHorizontal,
          trackVertical = this.trackVertical,
          thumbHorizontal = this.thumbHorizontal,
          thumbVertical = this.thumbVertical;
      view.addEventListener('scroll', this.handleScroll);
      if (!(0, _getScrollbarWidth2["default"])()) return;
      trackHorizontal.addEventListener('mouseenter', this.handleTrackMouseEnter);
      trackHorizontal.addEventListener('mouseleave', this.handleTrackMouseLeave);
      trackHorizontal.addEventListener('mousedown', this.handleHorizontalTrackMouseDown);
      trackVertical.addEventListener('mouseenter', this.handleTrackMouseEnter);
      trackVertical.addEventListener('mouseleave', this.handleTrackMouseLeave);
      trackVertical.addEventListener('mousedown', this.handleVerticalTrackMouseDown);
      thumbHorizontal.addEventListener('mousedown', this.handleHorizontalThumbMouseDown);
      thumbVertical.addEventListener('mousedown', this.handleVerticalThumbMouseDown);
      window.addEventListener('resize', this.handleWindowResize);
    }
  }, {
    key: 'removeListeners',
    value: function removeListeners() {
      /* istanbul ignore if */
      if (typeof document === 'undefined' || !this.view) return;
      var view = this.view,
          trackHorizontal = this.trackHorizontal,
          trackVertical = this.trackVertical,
          thumbHorizontal = this.thumbHorizontal,
          thumbVertical = this.thumbVertical;
      view.removeEventListener('scroll', this.handleScroll);
      if (!(0, _getScrollbarWidth2["default"])()) return;
      trackHorizontal.removeEventListener('mouseenter', this.handleTrackMouseEnter);
      trackHorizontal.removeEventListener('mouseleave', this.handleTrackMouseLeave);
      trackHorizontal.removeEventListener('mousedown', this.handleHorizontalTrackMouseDown);
      trackVertical.removeEventListener('mouseenter', this.handleTrackMouseEnter);
      trackVertical.removeEventListener('mouseleave', this.handleTrackMouseLeave);
      trackVertical.removeEventListener('mousedown', this.handleVerticalTrackMouseDown);
      thumbHorizontal.removeEventListener('mousedown', this.handleHorizontalThumbMouseDown);
      thumbVertical.removeEventListener('mousedown', this.handleVerticalThumbMouseDown);
      window.removeEventListener('resize', this.handleWindowResize); // Possibly setup by `handleDragStart`

      this.teardownDragging();
    }
  }, {
    key: 'handleScroll',
    value: function handleScroll(event) {
      var _this2 = this;

      var _props3 = this.props,
          onScroll = _props3.onScroll,
          onScrollFrame = _props3.onScrollFrame;
      if (onScroll) onScroll(event);
      this.update(function (values) {
        var scrollLeft = values.scrollLeft,
            scrollTop = values.scrollTop;
        _this2.viewScrollLeft = scrollLeft;
        _this2.viewScrollTop = scrollTop;
        if (onScrollFrame) onScrollFrame(values);
      });
      this.detectScrolling();
    }
  }, {
    key: 'handleScrollStart',
    value: function handleScrollStart() {
      var onScrollStart = this.props.onScrollStart;
      if (onScrollStart) onScrollStart();
      this.handleScrollStartAutoHide();
    }
  }, {
    key: 'handleScrollStartAutoHide',
    value: function handleScrollStartAutoHide() {
      var autoHide = this.props.autoHide;
      if (!autoHide) return;
      this.showTracks();
    }
  }, {
    key: 'handleScrollStop',
    value: function handleScrollStop() {
      var onScrollStop = this.props.onScrollStop;
      if (onScrollStop) onScrollStop();
      this.handleScrollStopAutoHide();
    }
  }, {
    key: 'handleScrollStopAutoHide',
    value: function handleScrollStopAutoHide() {
      var autoHide = this.props.autoHide;
      if (!autoHide) return;
      this.hideTracks();
    }
  }, {
    key: 'handleWindowResize',
    value: function handleWindowResize() {
      this.update();
    }
  }, {
    key: 'handleHorizontalTrackMouseDown',
    value: function handleHorizontalTrackMouseDown(event) {
      event.preventDefault();
      var target = event.target,
          clientX = event.clientX;

      var _target$getBoundingCl = target.getBoundingClientRect(),
          targetLeft = _target$getBoundingCl.left;

      var thumbWidth = this.getThumbHorizontalWidth();
      var offset = Math.abs(targetLeft - clientX) - thumbWidth / 2;
      this.view.scrollLeft = this.getScrollLeftForOffset(offset);
    }
  }, {
    key: 'handleVerticalTrackMouseDown',
    value: function handleVerticalTrackMouseDown(event) {
      event.preventDefault();
      var target = event.target,
          clientY = event.clientY;

      var _target$getBoundingCl2 = target.getBoundingClientRect(),
          targetTop = _target$getBoundingCl2.top;

      var thumbHeight = this.getThumbVerticalHeight();
      var offset = Math.abs(targetTop - clientY) - thumbHeight / 2;
      this.view.scrollTop = this.getScrollTopForOffset(offset);
    }
  }, {
    key: 'handleHorizontalThumbMouseDown',
    value: function handleHorizontalThumbMouseDown(event) {
      event.preventDefault();
      this.handleDragStart(event);
      var target = event.target,
          clientX = event.clientX;
      var offsetWidth = target.offsetWidth;

      var _target$getBoundingCl3 = target.getBoundingClientRect(),
          left = _target$getBoundingCl3.left;

      this.prevPageX = offsetWidth - (clientX - left);
    }
  }, {
    key: 'handleVerticalThumbMouseDown',
    value: function handleVerticalThumbMouseDown(event) {
      event.preventDefault();
      this.handleDragStart(event);
      var target = event.target,
          clientY = event.clientY;
      var offsetHeight = target.offsetHeight;

      var _target$getBoundingCl4 = target.getBoundingClientRect(),
          top = _target$getBoundingCl4.top;

      this.prevPageY = offsetHeight - (clientY - top);
    }
  }, {
    key: 'setupDragging',
    value: function setupDragging() {
      (0, _domCss2["default"])(document.body, _styles.disableSelectStyle);
      document.addEventListener('mousemove', this.handleDrag);
      document.addEventListener('mouseup', this.handleDragEnd);
      document.onselectstart = _returnFalse2["default"];
    }
  }, {
    key: 'teardownDragging',
    value: function teardownDragging() {
      (0, _domCss2["default"])(document.body, _styles.disableSelectStyleReset);
      document.removeEventListener('mousemove', this.handleDrag);
      document.removeEventListener('mouseup', this.handleDragEnd);
      document.onselectstart = undefined;
    }
  }, {
    key: 'handleDragStart',
    value: function handleDragStart(event) {
      this.dragging = true;
      event.stopImmediatePropagation();
      this.setupDragging();
    }
  }, {
    key: 'handleDrag',
    value: function handleDrag(event) {
      if (this.prevPageX) {
        var clientX = event.clientX;

        var _trackHorizontal$getB = this.trackHorizontal.getBoundingClientRect(),
            trackLeft = _trackHorizontal$getB.left;

        var thumbWidth = this.getThumbHorizontalWidth();
        var clickPosition = thumbWidth - this.prevPageX;
        var offset = -trackLeft + clientX - clickPosition;
        this.view.scrollLeft = this.getScrollLeftForOffset(offset);
      }

      if (this.prevPageY) {
        var clientY = event.clientY;

        var _trackVertical$getBou = this.trackVertical.getBoundingClientRect(),
            trackTop = _trackVertical$getBou.top;

        var thumbHeight = this.getThumbVerticalHeight();

        var _clickPosition = thumbHeight - this.prevPageY;

        var _offset = -trackTop + clientY - _clickPosition;

        this.view.scrollTop = this.getScrollTopForOffset(_offset);
      }

      return false;
    }
  }, {
    key: 'handleDragEnd',
    value: function handleDragEnd() {
      this.dragging = false;
      this.prevPageX = this.prevPageY = 0;
      this.teardownDragging();
      this.handleDragEndAutoHide();
    }
  }, {
    key: 'handleDragEndAutoHide',
    value: function handleDragEndAutoHide() {
      var autoHide = this.props.autoHide;
      if (!autoHide) return;
      this.hideTracks();
    }
  }, {
    key: 'handleTrackMouseEnter',
    value: function handleTrackMouseEnter() {
      this.trackMouseOver = true;
      this.handleTrackMouseEnterAutoHide();
    }
  }, {
    key: 'handleTrackMouseEnterAutoHide',
    value: function handleTrackMouseEnterAutoHide() {
      var autoHide = this.props.autoHide;
      if (!autoHide) return;
      this.showTracks();
    }
  }, {
    key: 'handleTrackMouseLeave',
    value: function handleTrackMouseLeave() {
      this.trackMouseOver = false;
      this.handleTrackMouseLeaveAutoHide();
    }
  }, {
    key: 'handleTrackMouseLeaveAutoHide',
    value: function handleTrackMouseLeaveAutoHide() {
      var autoHide = this.props.autoHide;
      if (!autoHide) return;
      this.hideTracks();
    }
  }, {
    key: 'showTracks',
    value: function showTracks() {
      clearTimeout(this.hideTracksTimeout);
      (0, _domCss2["default"])(this.trackHorizontal, {
        opacity: 1
      });
      (0, _domCss2["default"])(this.trackVertical, {
        opacity: 1
      });
    }
  }, {
    key: 'hideTracks',
    value: function hideTracks() {
      var _this3 = this;

      if (this.dragging) return;
      if (this.scrolling) return;
      if (this.trackMouseOver) return;
      var autoHideTimeout = this.props.autoHideTimeout;
      clearTimeout(this.hideTracksTimeout);
      this.hideTracksTimeout = setTimeout(function () {
        (0, _domCss2["default"])(_this3.trackHorizontal, {
          opacity: 0
        });
        (0, _domCss2["default"])(_this3.trackVertical, {
          opacity: 0
        });
      }, autoHideTimeout);
    }
  }, {
    key: 'detectScrolling',
    value: function detectScrolling() {
      var _this4 = this;

      if (this.scrolling) return;
      this.scrolling = true;
      this.handleScrollStart();
      this.detectScrollingInterval = setInterval(function () {
        if (_this4.lastViewScrollLeft === _this4.viewScrollLeft && _this4.lastViewScrollTop === _this4.viewScrollTop) {
          clearInterval(_this4.detectScrollingInterval);
          _this4.scrolling = false;

          _this4.handleScrollStop();
        }

        _this4.lastViewScrollLeft = _this4.viewScrollLeft;
        _this4.lastViewScrollTop = _this4.viewScrollTop;
      }, 100);
    }
  }, {
    key: 'raf',
    value: function raf(callback) {
      var _this5 = this;

      if (this.requestFrame) _raf3["default"].cancel(this.requestFrame);
      this.requestFrame = (0, _raf3["default"])(function () {
        _this5.requestFrame = undefined;
        callback();
      });
    }
  }, {
    key: 'update',
    value: function update(callback) {
      var _this6 = this;

      this.raf(function () {
        return _this6._update(callback);
      });
    }
  }, {
    key: '_update',
    value: function _update(callback) {
      var _props4 = this.props,
          onUpdate = _props4.onUpdate,
          hideTracksWhenNotNeeded = _props4.hideTracksWhenNotNeeded;
      var values = this.getValues();

      if ((0, _getScrollbarWidth2["default"])()) {
        var scrollLeft = values.scrollLeft,
            clientWidth = values.clientWidth,
            scrollWidth = values.scrollWidth;
        var trackHorizontalWidth = (0, _getInnerWidth2["default"])(this.trackHorizontal);
        var thumbHorizontalWidth = this.getThumbHorizontalWidth();
        var thumbHorizontalX = scrollLeft / (scrollWidth - clientWidth) * (trackHorizontalWidth - thumbHorizontalWidth);
        var thumbHorizontalStyle = {
          width: thumbHorizontalWidth,
          transform: 'translateX(' + thumbHorizontalX + 'px)'
        };
        var scrollTop = values.scrollTop,
            clientHeight = values.clientHeight,
            scrollHeight = values.scrollHeight;
        var trackVerticalHeight = (0, _getInnerHeight2["default"])(this.trackVertical);
        var thumbVerticalHeight = this.getThumbVerticalHeight();
        var thumbVerticalY = scrollTop / (scrollHeight - clientHeight) * (trackVerticalHeight - thumbVerticalHeight);
        var thumbVerticalStyle = {
          height: thumbVerticalHeight,
          transform: 'translateY(' + thumbVerticalY + 'px)'
        };

        if (hideTracksWhenNotNeeded) {
          var trackHorizontalStyle = {
            visibility: scrollWidth > clientWidth ? 'visible' : 'hidden'
          };
          var trackVerticalStyle = {
            visibility: scrollHeight > clientHeight ? 'visible' : 'hidden'
          };
          (0, _domCss2["default"])(this.trackHorizontal, trackHorizontalStyle);
          (0, _domCss2["default"])(this.trackVertical, trackVerticalStyle);
        }

        (0, _domCss2["default"])(this.thumbHorizontal, thumbHorizontalStyle);
        (0, _domCss2["default"])(this.thumbVertical, thumbVerticalStyle);
      }

      if (onUpdate) onUpdate(values);
      if (typeof callback !== 'function') return;
      callback(values);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this7 = this;

      var scrollbarWidth = (0, _getScrollbarWidth2["default"])();
      /* eslint-disable no-unused-vars */

      var _props5 = this.props,
          onScroll = _props5.onScroll,
          onScrollFrame = _props5.onScrollFrame,
          onScrollStart = _props5.onScrollStart,
          onScrollStop = _props5.onScrollStop,
          onUpdate = _props5.onUpdate,
          renderView = _props5.renderView,
          renderTrackHorizontal = _props5.renderTrackHorizontal,
          renderTrackVertical = _props5.renderTrackVertical,
          renderThumbHorizontal = _props5.renderThumbHorizontal,
          renderThumbVertical = _props5.renderThumbVertical,
          tagName = _props5.tagName,
          hideTracksWhenNotNeeded = _props5.hideTracksWhenNotNeeded,
          autoHide = _props5.autoHide,
          autoHideTimeout = _props5.autoHideTimeout,
          autoHideDuration = _props5.autoHideDuration,
          thumbSize = _props5.thumbSize,
          thumbMinSize = _props5.thumbMinSize,
          universal = _props5.universal,
          autoHeight = _props5.autoHeight,
          autoHeightMin = _props5.autoHeightMin,
          autoHeightMax = _props5.autoHeightMax,
          style = _props5.style,
          children = _props5.children,
          props = _objectWithoutProperties(_props5, ['onScroll', 'onScrollFrame', 'onScrollStart', 'onScrollStop', 'onUpdate', 'renderView', 'renderTrackHorizontal', 'renderTrackVertical', 'renderThumbHorizontal', 'renderThumbVertical', 'tagName', 'hideTracksWhenNotNeeded', 'autoHide', 'autoHideTimeout', 'autoHideDuration', 'thumbSize', 'thumbMinSize', 'universal', 'autoHeight', 'autoHeightMin', 'autoHeightMax', 'style', 'children']);
      /* eslint-enable no-unused-vars */


      var didMountUniversal = this.state.didMountUniversal;

      var containerStyle = _extends({}, _styles.containerStyleDefault, autoHeight && _extends({}, _styles.containerStyleAutoHeight, {
        minHeight: autoHeightMin,
        maxHeight: autoHeightMax
      }), style);

      var viewStyle = _extends({}, _styles.viewStyleDefault, {
        // Hide scrollbars by setting a negative margin
        marginRight: scrollbarWidth ? -scrollbarWidth : 0,
        marginBottom: scrollbarWidth ? -scrollbarWidth : 0
      }, autoHeight && _extends({}, _styles.viewStyleAutoHeight, {
        // Add scrollbarWidth to autoHeight in order to compensate negative margins
        minHeight: (0, _isString2["default"])(autoHeightMin) ? 'calc(' + autoHeightMin + ' + ' + scrollbarWidth + 'px)' : autoHeightMin + scrollbarWidth,
        maxHeight: (0, _isString2["default"])(autoHeightMax) ? 'calc(' + autoHeightMax + ' + ' + scrollbarWidth + 'px)' : autoHeightMax + scrollbarWidth
      }), autoHeight && universal && !didMountUniversal && {
        minHeight: autoHeightMin,
        maxHeight: autoHeightMax
      }, universal && !didMountUniversal && _styles.viewStyleUniversalInitial);

      var trackAutoHeightStyle = {
        transition: 'opacity ' + autoHideDuration + 'ms',
        opacity: 0
      };

      var trackHorizontalStyle = _extends({}, _styles.trackHorizontalStyleDefault, autoHide && trackAutoHeightStyle, (!scrollbarWidth || universal && !didMountUniversal) && {
        display: 'none'
      });

      var trackVerticalStyle = _extends({}, _styles.trackVerticalStyleDefault, autoHide && trackAutoHeightStyle, (!scrollbarWidth || universal && !didMountUniversal) && {
        display: 'none'
      });

      return (0, _react.createElement)(tagName, _extends({}, props, {
        style: containerStyle,
        ref: function ref(_ref3) {
          _this7.container = _ref3;
        }
      }), [(0, _react.cloneElement)(renderView({
        style: viewStyle
      }), {
        key: 'view',
        ref: function ref(_ref4) {
          _this7.view = _ref4;
        }
      }, children), (0, _react.cloneElement)(renderTrackHorizontal({
        style: trackHorizontalStyle
      }), {
        key: 'trackHorizontal',
        ref: function ref(_ref5) {
          _this7.trackHorizontal = _ref5;
        }
      }, (0, _react.cloneElement)(renderThumbHorizontal({
        style: _styles.thumbHorizontalStyleDefault
      }), {
        ref: function ref(_ref6) {
          _this7.thumbHorizontal = _ref6;
        }
      })), (0, _react.cloneElement)(renderTrackVertical({
        style: trackVerticalStyle
      }), {
        key: 'trackVertical',
        ref: function ref(_ref7) {
          _this7.trackVertical = _ref7;
        }
      }, (0, _react.cloneElement)(renderThumbVertical({
        style: _styles.thumbVerticalStyleDefault
      }), {
        ref: function ref(_ref8) {
          _this7.thumbVertical = _ref8;
        }
      }))]);
    }
  }]);

  return Scrollbars;
}(_react.Component);

exports["default"] = Scrollbars;
Scrollbars.propTypes = {
  onScroll: _propTypes2["default"].func,
  onScrollFrame: _propTypes2["default"].func,
  onScrollStart: _propTypes2["default"].func,
  onScrollStop: _propTypes2["default"].func,
  onUpdate: _propTypes2["default"].func,
  renderView: _propTypes2["default"].func,
  renderTrackHorizontal: _propTypes2["default"].func,
  renderTrackVertical: _propTypes2["default"].func,
  renderThumbHorizontal: _propTypes2["default"].func,
  renderThumbVertical: _propTypes2["default"].func,
  tagName: _propTypes2["default"].string,
  thumbSize: _propTypes2["default"].number,
  thumbMinSize: _propTypes2["default"].number,
  hideTracksWhenNotNeeded: _propTypes2["default"].bool,
  autoHide: _propTypes2["default"].bool,
  autoHideTimeout: _propTypes2["default"].number,
  autoHideDuration: _propTypes2["default"].number,
  autoHeight: _propTypes2["default"].bool,
  autoHeightMin: _propTypes2["default"].oneOfType([_propTypes2["default"].number, _propTypes2["default"].string]),
  autoHeightMax: _propTypes2["default"].oneOfType([_propTypes2["default"].number, _propTypes2["default"].string]),
  universal: _propTypes2["default"].bool,
  style: _propTypes2["default"].object,
  children: _propTypes2["default"].node
};
Scrollbars.defaultProps = {
  renderView: _defaultRenderElements.renderViewDefault,
  renderTrackHorizontal: _defaultRenderElements.renderTrackHorizontalDefault,
  renderTrackVertical: _defaultRenderElements.renderTrackVerticalDefault,
  renderThumbHorizontal: _defaultRenderElements.renderThumbHorizontalDefault,
  renderThumbVertical: _defaultRenderElements.renderThumbVerticalDefault,
  tagName: 'div',
  thumbMinSize: 30,
  hideTracksWhenNotNeeded: false,
  autoHide: false,
  autoHideTimeout: 1000,
  autoHideDuration: 200,
  autoHeight: false,
  autoHeightMin: 0,
  autoHeightMax: 200,
  universal: false
};

/***/ }),

/***/ 122:
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var containerStyleDefault = exports.containerStyleDefault = {
  position: 'relative',
  overflow: 'hidden',
  width: '100%',
  height: '100%'
}; // Overrides containerStyleDefault properties

var containerStyleAutoHeight = exports.containerStyleAutoHeight = {
  height: 'auto'
};
var viewStyleDefault = exports.viewStyleDefault = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  overflow: 'scroll',
  WebkitOverflowScrolling: 'touch'
}; // Overrides viewStyleDefault properties

var viewStyleAutoHeight = exports.viewStyleAutoHeight = {
  position: 'relative',
  top: undefined,
  left: undefined,
  right: undefined,
  bottom: undefined
};
var viewStyleUniversalInitial = exports.viewStyleUniversalInitial = {
  overflow: 'hidden',
  marginRight: 0,
  marginBottom: 0
};
var trackHorizontalStyleDefault = exports.trackHorizontalStyleDefault = {
  position: 'absolute',
  height: 6
};
var trackVerticalStyleDefault = exports.trackVerticalStyleDefault = {
  position: 'absolute',
  width: 6
};
var thumbHorizontalStyleDefault = exports.thumbHorizontalStyleDefault = {
  position: 'relative',
  display: 'block',
  height: '100%'
};
var thumbVerticalStyleDefault = exports.thumbVerticalStyleDefault = {
  position: 'relative',
  display: 'block',
  width: '100%'
};
var disableSelectStyle = exports.disableSelectStyle = {
  userSelect: 'none'
};
var disableSelectStyleReset = exports.disableSelectStyleReset = {
  userSelect: ''
};

/***/ }),

/***/ 5464:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
exports.$B = undefined;

var _Scrollbars = __webpack_require__(9458);

var _Scrollbars2 = _interopRequireDefault(_Scrollbars);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

__webpack_unused_export__ = _Scrollbars2["default"];
exports.$B = _Scrollbars2["default"];

/***/ }),

/***/ 188:
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = getInnerHeight;

function getInnerHeight(el) {
  var clientHeight = el.clientHeight;

  var _getComputedStyle = getComputedStyle(el),
      paddingTop = _getComputedStyle.paddingTop,
      paddingBottom = _getComputedStyle.paddingBottom;

  return clientHeight - parseFloat(paddingTop) - parseFloat(paddingBottom);
}

/***/ }),

/***/ 6658:
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = getInnerWidth;

function getInnerWidth(el) {
  var clientWidth = el.clientWidth;

  var _getComputedStyle = getComputedStyle(el),
      paddingLeft = _getComputedStyle.paddingLeft,
      paddingRight = _getComputedStyle.paddingRight;

  return clientWidth - parseFloat(paddingLeft) - parseFloat(paddingRight);
}

/***/ }),

/***/ 9994:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = getScrollbarWidth;

var _domCss = __webpack_require__(2471);

var _domCss2 = _interopRequireDefault(_domCss);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var scrollbarWidth = false;

function getScrollbarWidth() {
  if (scrollbarWidth !== false) return scrollbarWidth;
  /* istanbul ignore else */

  if (typeof document !== 'undefined') {
    var div = document.createElement('div');
    (0, _domCss2["default"])(div, {
      width: 100,
      height: 100,
      position: 'absolute',
      top: -9999,
      overflow: 'scroll',
      MsOverflowStyle: 'scrollbar'
    });
    document.body.appendChild(div);
    scrollbarWidth = div.offsetWidth - div.clientWidth;
    document.body.removeChild(div);
  } else {
    scrollbarWidth = 0;
  }

  return scrollbarWidth || 0;
}

/***/ }),

/***/ 978:
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = isString;

function isString(maybe) {
  return typeof maybe === 'string';
}

/***/ }),

/***/ 8516:
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = returnFalse;

function returnFalse() {
  return false;
}

/***/ }),

/***/ 2993:
/***/ (function(module) {

/* global Map:readonly, Set:readonly, ArrayBuffer:readonly */
var hasElementType = typeof Element !== 'undefined';
var hasMap = typeof Map === 'function';
var hasSet = typeof Set === 'function';
var hasArrayBuffer = typeof ArrayBuffer === 'function' && !!ArrayBuffer.isView; // Note: We **don't** need `envHasBigInt64Array` in fde es6/index.js

function equal(a, b) {
  // START: fast-deep-equal es6/index.js 3.1.1
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;
    var length, i, keys;

    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;

      for (i = length; i-- !== 0;) {
        if (!equal(a[i], b[i])) return false;
      }

      return true;
    } // START: Modifications:
    // 1. Extra `has<Type> &&` helpers in initial condition allow es6 code
    //    to co-exist with es5.
    // 2. Replace `for of` with es5 compliant iteration using `for`.
    //    Basically, take:
    //
    //    ```js
    //    for (i of a.entries())
    //      if (!b.has(i[0])) return false;
    //    ```
    //
    //    ... and convert to:
    //
    //    ```js
    //    it = a.entries();
    //    while (!(i = it.next()).done)
    //      if (!b.has(i.value[0])) return false;
    //    ```
    //
    //    **Note**: `i` access switches to `i.value`.


    var it;

    if (hasMap && a instanceof Map && b instanceof Map) {
      if (a.size !== b.size) return false;
      it = a.entries();

      while (!(i = it.next()).done) {
        if (!b.has(i.value[0])) return false;
      }

      it = a.entries();

      while (!(i = it.next()).done) {
        if (!equal(i.value[1], b.get(i.value[0]))) return false;
      }

      return true;
    }

    if (hasSet && a instanceof Set && b instanceof Set) {
      if (a.size !== b.size) return false;
      it = a.entries();

      while (!(i = it.next()).done) {
        if (!b.has(i.value[0])) return false;
      }

      return true;
    } // END: Modifications


    if (hasArrayBuffer && ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
      length = a.length;
      if (length != b.length) return false;

      for (i = length; i-- !== 0;) {
        if (a[i] !== b[i]) return false;
      }

      return true;
    }

    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();
    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;) {
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
    } // END: fast-deep-equal
    // START: react-fast-compare
    // custom handling for DOM elements


    if (hasElementType && a instanceof Element) return false; // custom handling for React/Preact

    for (i = length; i-- !== 0;) {
      if ((keys[i] === '_owner' || keys[i] === '__v' || keys[i] === '__o') && a.$$typeof) {
        // React-specific: avoid traversing React elements' _owner
        // Preact-specific: avoid traversing Preact elements' __v and __o
        //    __v = $_original / $_vnode
        //    __o = $_owner
        // These properties contain circular references and are not needed when
        // comparing the actual elements (and not their owners)
        // .$$typeof and ._store on just reasonable markers of elements
        continue;
      } // all other properties should be traversed as usual


      if (!equal(a[keys[i]], b[keys[i]])) return false;
    } // END: react-fast-compare
    // START: fast-deep-equal


    return true;
  }

  return a !== a && b !== b;
} // end fast-deep-equal


module.exports = function isEqual(a, b) {
  try {
    return equal(a, b);
  } catch (error) {
    if ((error.message || '').match(/stack|recursion/i)) {
      // warn on circular references, don't crash
      // browsers give this different errors name and messages:
      // chrome/safari: "RangeError", "Maximum call stack size exceeded"
      // firefox: "InternalError", too much recursion"
      // edge: "Error", "Out of stack space"
      console.warn('react-fast-compare cannot handle circular refs');
      return false;
    } // some other error. we should definitely know about these


    throw error;
  }
};

/***/ }),

/***/ 8093:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
  if (true) module.exports = factory(__webpack_require__(7294));else {}
})(this, function (__WEBPACK_EXTERNAL_MODULE_react__) {
  return (
    /******/
    function () {
      // webpackBootstrap

      /******/
      var __webpack_modules__ = {
        /***/
        "./node_modules/css-mediaquery/index.js":
        /*!**********************************************!*\
          !*** ./node_modules/css-mediaquery/index.js ***!
          \**********************************************/

        /***/
        function node_modulesCssMediaqueryIndexJs(__unused_webpack_module, exports) {
          "use strict";
          /*
          Copyright (c) 2014, Yahoo! Inc. All rights reserved.
          Copyrights licensed under the New BSD License.
          See the accompanying LICENSE file for terms.
          */

          exports.match = matchQuery;
          exports.parse = parseQuery; // -----------------------------------------------------------------------------

          var RE_MEDIA_QUERY = /(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,
              RE_MQ_EXPRESSION = /\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,
              RE_MQ_FEATURE = /^(?:(min|max)-)?(.+)/,
              RE_LENGTH_UNIT = /(em|rem|px|cm|mm|in|pt|pc)?$/,
              RE_RESOLUTION_UNIT = /(dpi|dpcm|dppx)?$/;

          function matchQuery(mediaQuery, values) {
            return parseQuery(mediaQuery).some(function (query) {
              var inverse = query.inverse; // Either the parsed or specified `type` is "all", or the types must be
              // equal for a match.

              var typeMatch = query.type === 'all' || values.type === query.type; // Quit early when `type` doesn't match, but take "not" into account.

              if (typeMatch && inverse || !(typeMatch || inverse)) {
                return false;
              }

              var expressionsMatch = query.expressions.every(function (expression) {
                var feature = expression.feature,
                    modifier = expression.modifier,
                    expValue = expression.value,
                    value = values[feature]; // Missing or falsy values don't match.

                if (!value) {
                  return false;
                }

                switch (feature) {
                  case 'orientation':
                  case 'scan':
                    return value.toLowerCase() === expValue.toLowerCase();

                  case 'width':
                  case 'height':
                  case 'device-width':
                  case 'device-height':
                    expValue = toPx(expValue);
                    value = toPx(value);
                    break;

                  case 'resolution':
                    expValue = toDpi(expValue);
                    value = toDpi(value);
                    break;

                  case 'aspect-ratio':
                  case 'device-aspect-ratio':
                  case
                  /* Deprecated */
                  'device-pixel-ratio':
                    expValue = toDecimal(expValue);
                    value = toDecimal(value);
                    break;

                  case 'grid':
                  case 'color':
                  case 'color-index':
                  case 'monochrome':
                    expValue = parseInt(expValue, 10) || 1;
                    value = parseInt(value, 10) || 0;
                    break;
                }

                switch (modifier) {
                  case 'min':
                    return value >= expValue;

                  case 'max':
                    return value <= expValue;

                  default:
                    return value === expValue;
                }
              });
              return expressionsMatch && !inverse || !expressionsMatch && inverse;
            });
          }

          function parseQuery(mediaQuery) {
            return mediaQuery.split(',').map(function (query) {
              query = query.trim();
              var captures = query.match(RE_MEDIA_QUERY),
                  modifier = captures[1],
                  type = captures[2],
                  expressions = captures[3] || '',
                  parsed = {};
              parsed.inverse = !!modifier && modifier.toLowerCase() === 'not';
              parsed.type = type ? type.toLowerCase() : 'all'; // Split expressions into a list.

              expressions = expressions.match(/\([^\)]+\)/g) || [];
              parsed.expressions = expressions.map(function (expression) {
                var captures = expression.match(RE_MQ_EXPRESSION),
                    feature = captures[1].toLowerCase().match(RE_MQ_FEATURE);
                return {
                  modifier: feature[1],
                  feature: feature[2],
                  value: captures[2]
                };
              });
              return parsed;
            });
          } // -- Utilities ----------------------------------------------------------------


          function toDecimal(ratio) {
            var decimal = Number(ratio),
                numbers;

            if (!decimal) {
              numbers = ratio.match(/^(\d+)\s*\/\s*(\d+)$/);
              decimal = numbers[1] / numbers[2];
            }

            return decimal;
          }

          function toDpi(resolution) {
            var value = parseFloat(resolution),
                units = String(resolution).match(RE_RESOLUTION_UNIT)[1];

            switch (units) {
              case 'dpcm':
                return value / 2.54;

              case 'dppx':
                return value * 96;

              default:
                return value;
            }
          }

          function toPx(length) {
            var value = parseFloat(length),
                units = String(length).match(RE_LENGTH_UNIT)[1];

            switch (units) {
              case 'em':
                return value * 16;

              case 'rem':
                return value * 16;

              case 'cm':
                return value * 96 / 2.54;

              case 'mm':
                return value * 96 / 2.54 / 10;

              case 'in':
                return value * 96;

              case 'pt':
                return value * 72;

              case 'pc':
                return value * 72 / 12;

              default:
                return value;
            }
          }
          /***/

        },

        /***/
        "./node_modules/hyphenate-style-name/index.js":
        /*!****************************************************!*\
          !*** ./node_modules/hyphenate-style-name/index.js ***!
          \****************************************************/

        /***/
        function node_modulesHyphenateStyleNameIndexJs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_7146__) {
          "use strict";

          __nested_webpack_require_7146__.r(__webpack_exports__);
          /* harmony export */


          __nested_webpack_require_7146__.d(__webpack_exports__, {
            /* harmony export */
            "default": function _default() {
              return __WEBPACK_DEFAULT_EXPORT__;
            }
            /* harmony export */

          });
          /* eslint-disable no-var, prefer-template */


          var uppercasePattern = /[A-Z]/g;
          var msPattern = /^ms-/;
          var cache = {};

          function toHyphenLower(match) {
            return '-' + match.toLowerCase();
          }

          function hyphenateStyleName(name) {
            if (cache.hasOwnProperty(name)) {
              return cache[name];
            }

            var hName = name.replace(uppercasePattern, toHyphenLower);
            return cache[name] = msPattern.test(hName) ? '-' + hName : hName;
          }
          /* harmony default export */


          var __WEBPACK_DEFAULT_EXPORT__ = hyphenateStyleName;
          /***/
        },

        /***/
        "./node_modules/matchmediaquery/index.js":
        /*!***********************************************!*\
          !*** ./node_modules/matchmediaquery/index.js ***!
          \***********************************************/

        /***/
        function node_modulesMatchmediaqueryIndexJs(module, __unused_webpack_exports, __nested_webpack_require_8569__) {
          "use strict";

          var staticMatch = __nested_webpack_require_8569__(
          /*! css-mediaquery */
          "./node_modules/css-mediaquery/index.js").match;

          var dynamicMatch = typeof window !== 'undefined' ? window.matchMedia : null; // our fake MediaQueryList

          function Mql(query, values, forceStatic) {
            var self = this;

            if (dynamicMatch && !forceStatic) {
              var mql = dynamicMatch.call(window, query);
              this.matches = mql.matches;
              this.media = mql.media; // TODO: is there a time it makes sense to remove this listener?

              mql.addListener(update);
            } else {
              this.matches = staticMatch(query, values);
              this.media = query;
            }

            this.addListener = addListener;
            this.removeListener = removeListener;
            this.dispose = dispose;

            function addListener(listener) {
              if (mql) {
                mql.addListener(listener);
              }
            }

            function removeListener(listener) {
              if (mql) {
                mql.removeListener(listener);
              }
            } // update ourselves!


            function update(evt) {
              self.matches = evt.matches;
              self.media = evt.media;
            }

            function dispose() {
              if (mql) {
                mql.removeListener(update);
              }
            }
          }

          function matchMedia(query, values, forceStatic) {
            return new Mql(query, values, forceStatic);
          }

          module.exports = matchMedia;
          /***/
        },

        /***/
        "./node_modules/object-assign/index.js":
        /*!*********************************************!*\
          !*** ./node_modules/object-assign/index.js ***!
          \*********************************************/

        /***/
        function node_modulesObjectAssignIndexJs(module) {
          "use strict";
          /*
          object-assign
          (c) Sindre Sorhus
          @license MIT
          */

          /* eslint-disable no-unused-vars */

          var getOwnPropertySymbols = Object.getOwnPropertySymbols;
          var hasOwnProperty = Object.prototype.hasOwnProperty;
          var propIsEnumerable = Object.prototype.propertyIsEnumerable;

          function toObject(val) {
            if (val === null || val === undefined) {
              throw new TypeError('Object.assign cannot be called with null or undefined');
            }

            return Object(val);
          }

          function shouldUseNative() {
            try {
              if (!Object.assign) {
                return false;
              } // Detect buggy property enumeration order in older V8 versions.
              // https://bugs.chromium.org/p/v8/issues/detail?id=4118


              var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

              test1[5] = 'de';

              if (Object.getOwnPropertyNames(test1)[0] === '5') {
                return false;
              } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


              var test2 = {};

              for (var i = 0; i < 10; i++) {
                test2['_' + String.fromCharCode(i)] = i;
              }

              var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
                return test2[n];
              });

              if (order2.join('') !== '0123456789') {
                return false;
              } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


              var test3 = {};
              'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
                test3[letter] = letter;
              });

              if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
                return false;
              }

              return true;
            } catch (err) {
              // We don't expect any of the above to throw, but better to be safe.
              return false;
            }
          }

          module.exports = shouldUseNative() ? Object.assign : function (target, source) {
            var from;
            var to = toObject(target);
            var symbols;

            for (var s = 1; s < arguments.length; s++) {
              from = Object(arguments[s]);

              for (var key in from) {
                if (hasOwnProperty.call(from, key)) {
                  to[key] = from[key];
                }
              }

              if (getOwnPropertySymbols) {
                symbols = getOwnPropertySymbols(from);

                for (var i = 0; i < symbols.length; i++) {
                  if (propIsEnumerable.call(from, symbols[i])) {
                    to[symbols[i]] = from[symbols[i]];
                  }
                }
              }
            }

            return to;
          };
          /***/
        },

        /***/
        "./node_modules/prop-types/checkPropTypes.js":
        /*!***************************************************!*\
          !*** ./node_modules/prop-types/checkPropTypes.js ***!
          \***************************************************/

        /***/
        function node_modulesPropTypesCheckPropTypesJs(module, __unused_webpack_exports, __nested_webpack_require_13948__) {
          "use strict";
          /**
           * Copyright (c) 2013-present, Facebook, Inc.
           *
           * This source code is licensed under the MIT license found in the
           * LICENSE file in the root directory of this source tree.
           */

          var printWarning = function printWarning() {};

          if (true) {
            var ReactPropTypesSecret = __nested_webpack_require_13948__(
            /*! ./lib/ReactPropTypesSecret */
            "./node_modules/prop-types/lib/ReactPropTypesSecret.js");

            var loggedTypeFailures = {};

            var has = __nested_webpack_require_13948__(
            /*! ./lib/has */
            "./node_modules/prop-types/lib/has.js");

            printWarning = function printWarning(text) {
              var message = 'Warning: ' + text;

              if (typeof console !== 'undefined') {
                console.error(message);
              }

              try {
                // --- Welcome to debugging React ---
                // This error was thrown as a convenience so that you can use this stack
                // to find the callsite that caused this warning to fire.
                throw new Error(message);
              } catch (x) {
                /**/
              }
            };
          }
          /**
           * Assert that the values match with the type specs.
           * Error messages are memorized and will only be shown once.
           *
           * @param {object} typeSpecs Map of name to a ReactPropType
           * @param {object} values Runtime values that need to be type-checked
           * @param {string} location e.g. "prop", "context", "child context"
           * @param {string} componentName Name of the component for error messages.
           * @param {?Function} getStack Returns the component stack.
           * @private
           */


          function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
            if (true) {
              for (var typeSpecName in typeSpecs) {
                if (has(typeSpecs, typeSpecName)) {
                  var error; // Prop type validation may throw. In case they do, we don't want to
                  // fail the render phase where it didn't fail before. So we log it.
                  // After these have been cleaned up, we'll let them throw.

                  try {
                    // This is intentionally an invariant that gets caught. It's the same
                    // behavior as without this statement except with a better message.
                    if (typeof typeSpecs[typeSpecName] !== 'function') {
                      var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
                      err.name = 'Invariant Violation';
                      throw err;
                    }

                    error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
                  } catch (ex) {
                    error = ex;
                  }

                  if (error && !(error instanceof Error)) {
                    printWarning((componentName || 'React class') + ': type specification of ' + location + ' `' + typeSpecName + '` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a ' + typeof error + '. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).');
                  }

                  if (error instanceof Error && !(error.message in loggedTypeFailures)) {
                    // Only monitor this failure once because there tends to be a lot of the
                    // same error.
                    loggedTypeFailures[error.message] = true;
                    var stack = getStack ? getStack() : '';
                    printWarning('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
                  }
                }
              }
            }
          }
          /**
           * Resets warning cache when testing.
           *
           * @private
           */


          checkPropTypes.resetWarningCache = function () {
            if (true) {
              loggedTypeFailures = {};
            }
          };

          module.exports = checkPropTypes;
          /***/
        },

        /***/
        "./node_modules/prop-types/factoryWithTypeCheckers.js":
        /*!************************************************************!*\
          !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
          \************************************************************/

        /***/
        function node_modulesPropTypesFactoryWithTypeCheckersJs(module, __unused_webpack_exports, __nested_webpack_require_19052__) {
          "use strict";
          /**
           * Copyright (c) 2013-present, Facebook, Inc.
           *
           * This source code is licensed under the MIT license found in the
           * LICENSE file in the root directory of this source tree.
           */

          var ReactIs = __nested_webpack_require_19052__(
          /*! react-is */
          "./node_modules/react-is/index.js");

          var assign = __nested_webpack_require_19052__(
          /*! object-assign */
          "./node_modules/object-assign/index.js");

          var ReactPropTypesSecret = __nested_webpack_require_19052__(
          /*! ./lib/ReactPropTypesSecret */
          "./node_modules/prop-types/lib/ReactPropTypesSecret.js");

          var has = __nested_webpack_require_19052__(
          /*! ./lib/has */
          "./node_modules/prop-types/lib/has.js");

          var checkPropTypes = __nested_webpack_require_19052__(
          /*! ./checkPropTypes */
          "./node_modules/prop-types/checkPropTypes.js");

          var printWarning = function printWarning() {};

          if (true) {
            printWarning = function printWarning(text) {
              var message = 'Warning: ' + text;

              if (typeof console !== 'undefined') {
                console.error(message);
              }

              try {
                // --- Welcome to debugging React ---
                // This error was thrown as a convenience so that you can use this stack
                // to find the callsite that caused this warning to fire.
                throw new Error(message);
              } catch (x) {}
            };
          }

          function emptyFunctionThatReturnsNull() {
            return null;
          }

          module.exports = function (isValidElement, throwOnDirectAccess) {
            /* global Symbol */
            var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
            var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

            /**
             * Returns the iterator method function contained on the iterable object.
             *
             * Be sure to invoke the function with the iterable as context:
             *
             *     var iteratorFn = getIteratorFn(myIterable);
             *     if (iteratorFn) {
             *       var iterator = iteratorFn.call(myIterable);
             *       ...
             *     }
             *
             * @param {?object} maybeIterable
             * @return {?function}
             */

            function getIteratorFn(maybeIterable) {
              var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);

              if (typeof iteratorFn === 'function') {
                return iteratorFn;
              }
            }
            /**
             * Collection of methods that allow declaration and validation of props that are
             * supplied to React components. Example usage:
             *
             *   var Props = require('ReactPropTypes');
             *   var MyArticle = React.createClass({
             *     propTypes: {
             *       // An optional string prop named "description".
             *       description: Props.string,
             *
             *       // A required enum prop named "category".
             *       category: Props.oneOf(['News','Photos']).isRequired,
             *
             *       // A prop named "dialog" that requires an instance of Dialog.
             *       dialog: Props.instanceOf(Dialog).isRequired
             *     },
             *     render: function() { ... }
             *   });
             *
             * A more formal specification of how these methods are used:
             *
             *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
             *   decl := ReactPropTypes.{type}(.isRequired)?
             *
             * Each and every declaration produces a function with the same signature. This
             * allows the creation of custom validation functions. For example:
             *
             *  var MyLink = React.createClass({
             *    propTypes: {
             *      // An optional string or URI prop named "href".
             *      href: function(props, propName, componentName) {
             *        var propValue = props[propName];
             *        if (propValue != null && typeof propValue !== 'string' &&
             *            !(propValue instanceof URI)) {
             *          return new Error(
             *            'Expected a string or an URI for ' + propName + ' in ' +
             *            componentName
             *          );
             *        }
             *      }
             *    },
             *    render: function() {...}
             *  });
             *
             * @internal
             */


            var ANONYMOUS = '<<anonymous>>'; // Important!
            // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.

            var ReactPropTypes = {
              array: createPrimitiveTypeChecker('array'),
              bigint: createPrimitiveTypeChecker('bigint'),
              bool: createPrimitiveTypeChecker('boolean'),
              func: createPrimitiveTypeChecker('function'),
              number: createPrimitiveTypeChecker('number'),
              object: createPrimitiveTypeChecker('object'),
              string: createPrimitiveTypeChecker('string'),
              symbol: createPrimitiveTypeChecker('symbol'),
              any: createAnyTypeChecker(),
              arrayOf: createArrayOfTypeChecker,
              element: createElementTypeChecker(),
              elementType: createElementTypeTypeChecker(),
              instanceOf: createInstanceTypeChecker,
              node: createNodeChecker(),
              objectOf: createObjectOfTypeChecker,
              oneOf: createEnumTypeChecker,
              oneOfType: createUnionTypeChecker,
              shape: createShapeTypeChecker,
              exact: createStrictShapeTypeChecker
            };
            /**
             * inlined Object.is polyfill to avoid requiring consumers ship their own
             * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
             */

            /*eslint-disable no-self-compare*/

            function is(x, y) {
              // SameValue algorithm
              if (x === y) {
                // Steps 1-5, 7-10
                // Steps 6.b-6.e: +0 != -0
                return x !== 0 || 1 / x === 1 / y;
              } else {
                // Step 6.a: NaN == NaN
                return x !== x && y !== y;
              }
            }
            /*eslint-enable no-self-compare*/

            /**
             * We use an Error-like object for backward compatibility as people may call
             * PropTypes directly and inspect their output. However, we don't use real
             * Errors anymore. We don't inspect their stack anyway, and creating them
             * is prohibitively expensive if they are created too often, such as what
             * happens in oneOfType() for any type before the one that matched.
             */


            function PropTypeError(message, data) {
              this.message = message;
              this.data = data && typeof data === 'object' ? data : {};
              this.stack = '';
            } // Make `instanceof Error` still work for returned errors.


            PropTypeError.prototype = Error.prototype;

            function createChainableTypeChecker(validate) {
              if (true) {
                var manualPropTypeCallCache = {};
                var manualPropTypeWarningCount = 0;
              }

              function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
                componentName = componentName || ANONYMOUS;
                propFullName = propFullName || propName;

                if (secret !== ReactPropTypesSecret) {
                  if (throwOnDirectAccess) {
                    // New behavior only for users of `prop-types` package
                    var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
                    err.name = 'Invariant Violation';
                    throw err;
                  } else if ( true && typeof console !== 'undefined') {
                    // Old behavior for people using React.PropTypes
                    var cacheKey = componentName + ':' + propName;

                    if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
                    manualPropTypeWarningCount < 3) {
                      printWarning('You are manually calling a React.PropTypes validation ' + 'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.');
                      manualPropTypeCallCache[cacheKey] = true;
                      manualPropTypeWarningCount++;
                    }
                  }
                }

                if (props[propName] == null) {
                  if (isRequired) {
                    if (props[propName] === null) {
                      return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
                    }

                    return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
                  }

                  return null;
                } else {
                  return validate(props, propName, componentName, location, propFullName);
                }
              }

              var chainedCheckType = checkType.bind(null, false);
              chainedCheckType.isRequired = checkType.bind(null, true);
              return chainedCheckType;
            }

            function createPrimitiveTypeChecker(expectedType) {
              function validate(props, propName, componentName, location, propFullName, secret) {
                var propValue = props[propName];
                var propType = getPropType(propValue);

                if (propType !== expectedType) {
                  // `propValue` being instance of, say, date/regexp, pass the 'object'
                  // check, but we can offer a more precise error message here rather than
                  // 'of type `object`'.
                  var preciseType = getPreciseType(propValue);
                  return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'), {
                    expectedType: expectedType
                  });
                }

                return null;
              }

              return createChainableTypeChecker(validate);
            }

            function createAnyTypeChecker() {
              return createChainableTypeChecker(emptyFunctionThatReturnsNull);
            }

            function createArrayOfTypeChecker(typeChecker) {
              function validate(props, propName, componentName, location, propFullName) {
                if (typeof typeChecker !== 'function') {
                  return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
                }

                var propValue = props[propName];

                if (!Array.isArray(propValue)) {
                  var propType = getPropType(propValue);
                  return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
                }

                for (var i = 0; i < propValue.length; i++) {
                  var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);

                  if (error instanceof Error) {
                    return error;
                  }
                }

                return null;
              }

              return createChainableTypeChecker(validate);
            }

            function createElementTypeChecker() {
              function validate(props, propName, componentName, location, propFullName) {
                var propValue = props[propName];

                if (!isValidElement(propValue)) {
                  var propType = getPropType(propValue);
                  return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
                }

                return null;
              }

              return createChainableTypeChecker(validate);
            }

            function createElementTypeTypeChecker() {
              function validate(props, propName, componentName, location, propFullName) {
                var propValue = props[propName];

                if (!ReactIs.isValidElementType(propValue)) {
                  var propType = getPropType(propValue);
                  return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
                }

                return null;
              }

              return createChainableTypeChecker(validate);
            }

            function createInstanceTypeChecker(expectedClass) {
              function validate(props, propName, componentName, location, propFullName) {
                if (!(props[propName] instanceof expectedClass)) {
                  var expectedClassName = expectedClass.name || ANONYMOUS;
                  var actualClassName = getClassName(props[propName]);
                  return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
                }

                return null;
              }

              return createChainableTypeChecker(validate);
            }

            function createEnumTypeChecker(expectedValues) {
              if (!Array.isArray(expectedValues)) {
                if (true) {
                  if (arguments.length > 1) {
                    printWarning('Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' + 'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).');
                  } else {
                    printWarning('Invalid argument supplied to oneOf, expected an array.');
                  }
                }

                return emptyFunctionThatReturnsNull;
              }

              function validate(props, propName, componentName, location, propFullName) {
                var propValue = props[propName];

                for (var i = 0; i < expectedValues.length; i++) {
                  if (is(propValue, expectedValues[i])) {
                    return null;
                  }
                }

                var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
                  var type = getPreciseType(value);

                  if (type === 'symbol') {
                    return String(value);
                  }

                  return value;
                });
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
              }

              return createChainableTypeChecker(validate);
            }

            function createObjectOfTypeChecker(typeChecker) {
              function validate(props, propName, componentName, location, propFullName) {
                if (typeof typeChecker !== 'function') {
                  return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
                }

                var propValue = props[propName];
                var propType = getPropType(propValue);

                if (propType !== 'object') {
                  return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
                }

                for (var key in propValue) {
                  if (has(propValue, key)) {
                    var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);

                    if (error instanceof Error) {
                      return error;
                    }
                  }
                }

                return null;
              }

              return createChainableTypeChecker(validate);
            }

            function createUnionTypeChecker(arrayOfTypeCheckers) {
              if (!Array.isArray(arrayOfTypeCheckers)) {
                 true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : 0;
                return emptyFunctionThatReturnsNull;
              }

              for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
                var checker = arrayOfTypeCheckers[i];

                if (typeof checker !== 'function') {
                  printWarning('Invalid argument supplied to oneOfType. Expected an array of check functions, but ' + 'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.');
                  return emptyFunctionThatReturnsNull;
                }
              }

              function validate(props, propName, componentName, location, propFullName) {
                var expectedTypes = [];

                for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
                  var checker = arrayOfTypeCheckers[i];
                  var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);

                  if (checkerResult == null) {
                    return null;
                  }

                  if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
                    expectedTypes.push(checkerResult.data.expectedType);
                  }
                }

                var expectedTypesMessage = expectedTypes.length > 0 ? ', expected one of type [' + expectedTypes.join(', ') + ']' : '';
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
              }

              return createChainableTypeChecker(validate);
            }

            function createNodeChecker() {
              function validate(props, propName, componentName, location, propFullName) {
                if (!isNode(props[propName])) {
                  return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
                }

                return null;
              }

              return createChainableTypeChecker(validate);
            }

            function invalidValidatorError(componentName, location, propFullName, key, type) {
              return new PropTypeError((componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + type + '`.');
            }

            function createShapeTypeChecker(shapeTypes) {
              function validate(props, propName, componentName, location, propFullName) {
                var propValue = props[propName];
                var propType = getPropType(propValue);

                if (propType !== 'object') {
                  return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
                }

                for (var key in shapeTypes) {
                  var checker = shapeTypes[key];

                  if (typeof checker !== 'function') {
                    return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
                  }

                  var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);

                  if (error) {
                    return error;
                  }
                }

                return null;
              }

              return createChainableTypeChecker(validate);
            }

            function createStrictShapeTypeChecker(shapeTypes) {
              function validate(props, propName, componentName, location, propFullName) {
                var propValue = props[propName];
                var propType = getPropType(propValue);

                if (propType !== 'object') {
                  return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
                } // We need to check all keys in case some are required but missing from props.


                var allKeys = assign({}, props[propName], shapeTypes);

                for (var key in allKeys) {
                  var checker = shapeTypes[key];

                  if (has(shapeTypes, key) && typeof checker !== 'function') {
                    return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
                  }

                  if (!checker) {
                    return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
                  }

                  var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);

                  if (error) {
                    return error;
                  }
                }

                return null;
              }

              return createChainableTypeChecker(validate);
            }

            function isNode(propValue) {
              switch (typeof propValue) {
                case 'number':
                case 'string':
                case 'undefined':
                  return true;

                case 'boolean':
                  return !propValue;

                case 'object':
                  if (Array.isArray(propValue)) {
                    return propValue.every(isNode);
                  }

                  if (propValue === null || isValidElement(propValue)) {
                    return true;
                  }

                  var iteratorFn = getIteratorFn(propValue);

                  if (iteratorFn) {
                    var iterator = iteratorFn.call(propValue);
                    var step;

                    if (iteratorFn !== propValue.entries) {
                      while (!(step = iterator.next()).done) {
                        if (!isNode(step.value)) {
                          return false;
                        }
                      }
                    } else {
                      // Iterator will provide entry [k,v] tuples rather than values.
                      while (!(step = iterator.next()).done) {
                        var entry = step.value;

                        if (entry) {
                          if (!isNode(entry[1])) {
                            return false;
                          }
                        }
                      }
                    }
                  } else {
                    return false;
                  }

                  return true;

                default:
                  return false;
              }
            }

            function isSymbol(propType, propValue) {
              // Native Symbol.
              if (propType === 'symbol') {
                return true;
              } // falsy value can't be a Symbol


              if (!propValue) {
                return false;
              } // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'


              if (propValue['@@toStringTag'] === 'Symbol') {
                return true;
              } // Fallback for non-spec compliant Symbols which are polyfilled.


              if (typeof Symbol === 'function' && propValue instanceof Symbol) {
                return true;
              }

              return false;
            } // Equivalent of `typeof` but with special handling for array and regexp.


            function getPropType(propValue) {
              var propType = typeof propValue;

              if (Array.isArray(propValue)) {
                return 'array';
              }

              if (propValue instanceof RegExp) {
                // Old webkits (at least until Android 4.0) return 'function' rather than
                // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
                // passes PropTypes.object.
                return 'object';
              }

              if (isSymbol(propType, propValue)) {
                return 'symbol';
              }

              return propType;
            } // This handles more types than `getPropType`. Only used for error messages.
            // See `createPrimitiveTypeChecker`.


            function getPreciseType(propValue) {
              if (typeof propValue === 'undefined' || propValue === null) {
                return '' + propValue;
              }

              var propType = getPropType(propValue);

              if (propType === 'object') {
                if (propValue instanceof Date) {
                  return 'date';
                } else if (propValue instanceof RegExp) {
                  return 'regexp';
                }
              }

              return propType;
            } // Returns a string that is postfixed to a warning about an invalid type.
            // For example, "undefined" or "of type array"


            function getPostfixForTypeWarning(value) {
              var type = getPreciseType(value);

              switch (type) {
                case 'array':
                case 'object':
                  return 'an ' + type;

                case 'boolean':
                case 'date':
                case 'regexp':
                  return 'a ' + type;

                default:
                  return type;
              }
            } // Returns class name of the object, if any.


            function getClassName(propValue) {
              if (!propValue.constructor || !propValue.constructor.name) {
                return ANONYMOUS;
              }

              return propValue.constructor.name;
            }

            ReactPropTypes.checkPropTypes = checkPropTypes;
            ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
            ReactPropTypes.PropTypes = ReactPropTypes;
            return ReactPropTypes;
          };
          /***/

        },

        /***/
        "./node_modules/prop-types/index.js":
        /*!******************************************!*\
          !*** ./node_modules/prop-types/index.js ***!
          \******************************************/

        /***/
        function node_modulesPropTypesIndexJs(module, __unused_webpack_exports, __nested_webpack_require_47371__) {
          /**
           * Copyright (c) 2013-present, Facebook, Inc.
           *
           * This source code is licensed under the MIT license found in the
           * LICENSE file in the root directory of this source tree.
           */
          if (true) {
            var ReactIs = __nested_webpack_require_47371__(
            /*! react-is */
            "./node_modules/react-is/index.js"); // By explicitly using `prop-types` you are opting into new development behavior.
            // http://fb.me/prop-types-in-prod


            var throwOnDirectAccess = true;
            module.exports = __nested_webpack_require_47371__(
            /*! ./factoryWithTypeCheckers */
            "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
          } else {}
          /***/

        },

        /***/
        "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
        /*!*************************************************************!*\
          !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
          \*************************************************************/

        /***/
        function node_modulesPropTypesLibReactPropTypesSecretJs(module) {
          "use strict";
          /**
           * Copyright (c) 2013-present, Facebook, Inc.
           *
           * This source code is licensed under the MIT license found in the
           * LICENSE file in the root directory of this source tree.
           */

          var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
          module.exports = ReactPropTypesSecret;
          /***/
        },

        /***/
        "./node_modules/prop-types/lib/has.js":
        /*!********************************************!*\
          !*** ./node_modules/prop-types/lib/has.js ***!
          \********************************************/

        /***/
        function node_modulesPropTypesLibHasJs(module) {
          module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
          /***/
        },

        /***/
        "./node_modules/react-is/cjs/react-is.development.js":
        /*!***********************************************************!*\
          !*** ./node_modules/react-is/cjs/react-is.development.js ***!
          \***********************************************************/

        /***/
        function node_modulesReactIsCjsReactIsDevelopmentJs(__unused_webpack_module, exports) {
          "use strict";
          /** @license React v16.13.1
           * react-is.development.js
           *
           * Copyright (c) Facebook, Inc. and its affiliates.
           *
           * This source code is licensed under the MIT license found in the
           * LICENSE file in the root directory of this source tree.
           */

          if (true) {
            (function () {
              'use strict'; // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
              // nor polyfill, then a plain number is used for performance.

              var hasSymbol = typeof Symbol === 'function' && Symbol.for;
              var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
              var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
              var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
              var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
              var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
              var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
              var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
              // (unstable) APIs that have been removed. Can we remove the symbols?

              var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
              var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
              var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
              var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
              var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
              var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
              var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
              var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
              var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
              var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
              var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

              function isValidElementType(type) {
                return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
                type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
              }

              function typeOf(object) {
                if (typeof object === 'object' && object !== null) {
                  var $$typeof = object.$$typeof;

                  switch ($$typeof) {
                    case REACT_ELEMENT_TYPE:
                      var type = object.type;

                      switch (type) {
                        case REACT_ASYNC_MODE_TYPE:
                        case REACT_CONCURRENT_MODE_TYPE:
                        case REACT_FRAGMENT_TYPE:
                        case REACT_PROFILER_TYPE:
                        case REACT_STRICT_MODE_TYPE:
                        case REACT_SUSPENSE_TYPE:
                          return type;

                        default:
                          var $$typeofType = type && type.$$typeof;

                          switch ($$typeofType) {
                            case REACT_CONTEXT_TYPE:
                            case REACT_FORWARD_REF_TYPE:
                            case REACT_LAZY_TYPE:
                            case REACT_MEMO_TYPE:
                            case REACT_PROVIDER_TYPE:
                              return $$typeofType;

                            default:
                              return $$typeof;
                          }

                      }

                    case REACT_PORTAL_TYPE:
                      return $$typeof;
                  }
                }

                return undefined;
              } // AsyncMode is deprecated along with isAsyncMode


              var AsyncMode = REACT_ASYNC_MODE_TYPE;
              var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
              var ContextConsumer = REACT_CONTEXT_TYPE;
              var ContextProvider = REACT_PROVIDER_TYPE;
              var Element = REACT_ELEMENT_TYPE;
              var ForwardRef = REACT_FORWARD_REF_TYPE;
              var Fragment = REACT_FRAGMENT_TYPE;
              var Lazy = REACT_LAZY_TYPE;
              var Memo = REACT_MEMO_TYPE;
              var Portal = REACT_PORTAL_TYPE;
              var Profiler = REACT_PROFILER_TYPE;
              var StrictMode = REACT_STRICT_MODE_TYPE;
              var Suspense = REACT_SUSPENSE_TYPE;
              var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

              function isAsyncMode(object) {
                {
                  if (!hasWarnedAboutDeprecatedIsAsyncMode) {
                    hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

                    console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
                  }
                }
                return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
              }

              function isConcurrentMode(object) {
                return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
              }

              function isContextConsumer(object) {
                return typeOf(object) === REACT_CONTEXT_TYPE;
              }

              function isContextProvider(object) {
                return typeOf(object) === REACT_PROVIDER_TYPE;
              }

              function isElement(object) {
                return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
              }

              function isForwardRef(object) {
                return typeOf(object) === REACT_FORWARD_REF_TYPE;
              }

              function isFragment(object) {
                return typeOf(object) === REACT_FRAGMENT_TYPE;
              }

              function isLazy(object) {
                return typeOf(object) === REACT_LAZY_TYPE;
              }

              function isMemo(object) {
                return typeOf(object) === REACT_MEMO_TYPE;
              }

              function isPortal(object) {
                return typeOf(object) === REACT_PORTAL_TYPE;
              }

              function isProfiler(object) {
                return typeOf(object) === REACT_PROFILER_TYPE;
              }

              function isStrictMode(object) {
                return typeOf(object) === REACT_STRICT_MODE_TYPE;
              }

              function isSuspense(object) {
                return typeOf(object) === REACT_SUSPENSE_TYPE;
              }

              exports.AsyncMode = AsyncMode;
              exports.ConcurrentMode = ConcurrentMode;
              exports.ContextConsumer = ContextConsumer;
              exports.ContextProvider = ContextProvider;
              exports.Element = Element;
              exports.ForwardRef = ForwardRef;
              exports.Fragment = Fragment;
              exports.Lazy = Lazy;
              exports.Memo = Memo;
              exports.Portal = Portal;
              exports.Profiler = Profiler;
              exports.StrictMode = StrictMode;
              exports.Suspense = Suspense;
              exports.isAsyncMode = isAsyncMode;
              exports.isConcurrentMode = isConcurrentMode;
              exports.isContextConsumer = isContextConsumer;
              exports.isContextProvider = isContextProvider;
              exports.isElement = isElement;
              exports.isForwardRef = isForwardRef;
              exports.isFragment = isFragment;
              exports.isLazy = isLazy;
              exports.isMemo = isMemo;
              exports.isPortal = isPortal;
              exports.isProfiler = isProfiler;
              exports.isStrictMode = isStrictMode;
              exports.isSuspense = isSuspense;
              exports.isValidElementType = isValidElementType;
              exports.typeOf = typeOf;
            })();
          }
          /***/

        },

        /***/
        "./node_modules/react-is/index.js":
        /*!****************************************!*\
          !*** ./node_modules/react-is/index.js ***!
          \****************************************/

        /***/
        function node_modulesReactIsIndexJs(module, __unused_webpack_exports, __nested_webpack_require_59326__) {
          "use strict";

          if (false) {} else {
            module.exports = __nested_webpack_require_59326__(
            /*! ./cjs/react-is.development.js */
            "./node_modules/react-is/cjs/react-is.development.js");
          }
          /***/

        },

        /***/
        "./node_modules/shallow-equal/dist/index.esm.js":
        /*!******************************************************!*\
          !*** ./node_modules/shallow-equal/dist/index.esm.js ***!
          \******************************************************/

        /***/
        function node_modulesShallowEqualDistIndexEsmJs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_60005__) {
          "use strict";

          __nested_webpack_require_60005__.r(__webpack_exports__);
          /* harmony export */


          __nested_webpack_require_60005__.d(__webpack_exports__, {
            /* harmony export */
            "shallowEqualArrays": function shallowEqualArrays() {
              return (
                /* binding */
                _shallowEqualArrays
              );
            },

            /* harmony export */
            "shallowEqualObjects": function shallowEqualObjects() {
              return (
                /* binding */
                _shallowEqualObjects
              );
            }
            /* harmony export */

          });

          function _shallowEqualObjects(objA, objB) {
            if (objA === objB) {
              return true;
            }

            if (!objA || !objB) {
              return false;
            }

            var aKeys = Object.keys(objA);
            var bKeys = Object.keys(objB);
            var len = aKeys.length;

            if (bKeys.length !== len) {
              return false;
            }

            for (var i = 0; i < len; i++) {
              var key = aKeys[i];

              if (objA[key] !== objB[key] || !Object.prototype.hasOwnProperty.call(objB, key)) {
                return false;
              }
            }

            return true;
          }

          function _shallowEqualArrays(arrA, arrB) {
            if (arrA === arrB) {
              return true;
            }

            if (!arrA || !arrB) {
              return false;
            }

            var len = arrA.length;

            if (arrB.length !== len) {
              return false;
            }

            for (var i = 0; i < len; i++) {
              if (arrA[i] !== arrB[i]) {
                return false;
              }
            }

            return true;
          }
          /***/

        },

        /***/
        "./src/Component.ts":
        /*!**************************!*\
          !*** ./src/Component.ts ***!
          \**************************/

        /***/
        function srcComponentTs(__unused_webpack_module, exports, __nested_webpack_require_62153__) {
          "use strict";

          var __rest = this && this.__rest || function (s, e) {
            var t = {};

            for (var p in s) {
              if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
            }

            if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
              if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
            }
            return t;
          };

          var __importDefault = this && this.__importDefault || function (mod) {
            return mod && mod.__esModule ? mod : {
              "default": mod
            };
          };

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var useMediaQuery_1 = __importDefault(__nested_webpack_require_62153__(
          /*! ./useMediaQuery */
          "./src/useMediaQuery.ts"));

          var MediaQuery = function MediaQuery(_a) {
            var children = _a.children,
                device = _a.device,
                onChange = _a.onChange,
                settings = __rest(_a, ["children", "device", "onChange"]);

            var matches = (0, useMediaQuery_1.default)(settings, device, onChange);

            if (typeof children === 'function') {
              return children(matches);
            }

            return matches ? children : null;
          };

          exports["default"] = MediaQuery;
          /***/
        },

        /***/
        "./src/Context.ts":
        /*!************************!*\
          !*** ./src/Context.ts ***!
          \************************/

        /***/
        function srcContextTs(__unused_webpack_module, exports, __nested_webpack_require_63976__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var react_1 = __nested_webpack_require_63976__(
          /*! react */
          "react");

          var Context = (0, react_1.createContext)(undefined);
          exports["default"] = Context;
          /***/
        },

        /***/
        "./src/index.ts":
        /*!**********************!*\
          !*** ./src/index.ts ***!
          \**********************/

        /***/
        function srcIndexTs(__unused_webpack_module, exports, __nested_webpack_require_64564__) {
          "use strict";

          var __importDefault = this && this.__importDefault || function (mod) {
            return mod && mod.__esModule ? mod : {
              "default": mod
            };
          };

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Context = exports.toQuery = exports.useMediaQuery = exports["default"] = void 0;

          var useMediaQuery_1 = __importDefault(__nested_webpack_require_64564__(
          /*! ./useMediaQuery */
          "./src/useMediaQuery.ts"));

          exports.useMediaQuery = useMediaQuery_1.default;

          var Component_1 = __importDefault(__nested_webpack_require_64564__(
          /*! ./Component */
          "./src/Component.ts"));

          exports["default"] = Component_1.default;

          var toQuery_1 = __importDefault(__nested_webpack_require_64564__(
          /*! ./toQuery */
          "./src/toQuery.ts"));

          exports.toQuery = toQuery_1.default;

          var Context_1 = __importDefault(__nested_webpack_require_64564__(
          /*! ./Context */
          "./src/Context.ts"));

          exports.Context = Context_1.default;
          /***/
        },

        /***/
        "./src/mediaQuery.ts":
        /*!***************************!*\
          !*** ./src/mediaQuery.ts ***!
          \***************************/

        /***/
        function srcMediaQueryTs(__unused_webpack_module, exports, __nested_webpack_require_65998__) {
          "use strict";

          var __assign = this && this.__assign || function () {
            __assign = Object.assign || function (t) {
              for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];

                for (var p in s) {
                  if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
                }
              }

              return t;
            };

            return __assign.apply(this, arguments);
          };

          var __rest = this && this.__rest || function (s, e) {
            var t = {};

            for (var p in s) {
              if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
            }

            if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
              if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
            }
            return t;
          };

          var __importDefault = this && this.__importDefault || function (mod) {
            return mod && mod.__esModule ? mod : {
              "default": mod
            };
          };

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var prop_types_1 = __importDefault(__nested_webpack_require_65998__(
          /*! prop-types */
          "./node_modules/prop-types/index.js"));

          var stringOrNumber = prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]); // media types

          var types = {
            all: prop_types_1.default.bool,
            grid: prop_types_1.default.bool,
            aural: prop_types_1.default.bool,
            braille: prop_types_1.default.bool,
            handheld: prop_types_1.default.bool,
            print: prop_types_1.default.bool,
            projection: prop_types_1.default.bool,
            screen: prop_types_1.default.bool,
            tty: prop_types_1.default.bool,
            tv: prop_types_1.default.bool,
            embossed: prop_types_1.default.bool
          }; // properties that match media queries

          var matchers = {
            orientation: prop_types_1.default.oneOf(['portrait', 'landscape']),
            scan: prop_types_1.default.oneOf(['progressive', 'interlace']),
            aspectRatio: prop_types_1.default.string,
            deviceAspectRatio: prop_types_1.default.string,
            height: stringOrNumber,
            deviceHeight: stringOrNumber,
            width: stringOrNumber,
            deviceWidth: stringOrNumber,
            color: prop_types_1.default.bool,
            colorIndex: prop_types_1.default.bool,
            monochrome: prop_types_1.default.bool,
            resolution: stringOrNumber,
            type: Object.keys(types)
          }; // eslint-disable-next-line @typescript-eslint/no-unused-vars

          var type = matchers.type,
              featureMatchers = __rest(matchers // media features
          , ["type"]); // media features


          var features = __assign({
            minAspectRatio: prop_types_1.default.string,
            maxAspectRatio: prop_types_1.default.string,
            minDeviceAspectRatio: prop_types_1.default.string,
            maxDeviceAspectRatio: prop_types_1.default.string,
            minHeight: stringOrNumber,
            maxHeight: stringOrNumber,
            minDeviceHeight: stringOrNumber,
            maxDeviceHeight: stringOrNumber,
            minWidth: stringOrNumber,
            maxWidth: stringOrNumber,
            minDeviceWidth: stringOrNumber,
            maxDeviceWidth: stringOrNumber,
            minColor: prop_types_1.default.number,
            maxColor: prop_types_1.default.number,
            minColorIndex: prop_types_1.default.number,
            maxColorIndex: prop_types_1.default.number,
            minMonochrome: prop_types_1.default.number,
            maxMonochrome: prop_types_1.default.number,
            minResolution: stringOrNumber,
            maxResolution: stringOrNumber
          }, featureMatchers);

          var all = __assign(__assign({}, types), features);

          exports["default"] = {
            all: all,
            types: types,
            matchers: matchers,
            features: features
          };
          /***/
        },

        /***/
        "./src/toQuery.ts":
        /*!************************!*\
          !*** ./src/toQuery.ts ***!
          \************************/

        /***/
        function srcToQueryTs(__unused_webpack_module, exports, __nested_webpack_require_70659__) {
          "use strict";

          var __importDefault = this && this.__importDefault || function (mod) {
            return mod && mod.__esModule ? mod : {
              "default": mod
            };
          };

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var hyphenate_style_name_1 = __importDefault(__nested_webpack_require_70659__(
          /*! hyphenate-style-name */
          "./node_modules/hyphenate-style-name/index.js"));

          var mediaQuery_1 = __importDefault(__nested_webpack_require_70659__(
          /*! ./mediaQuery */
          "./src/mediaQuery.ts"));

          var negate = function negate(cond) {
            return "not ".concat(cond);
          };

          var keyVal = function keyVal(k, v) {
            var realKey = (0, hyphenate_style_name_1.default)(k); // px shorthand

            if (typeof v === 'number') {
              v = "".concat(v, "px");
            }

            if (v === true) {
              return realKey;
            }

            if (v === false) {
              return negate(realKey);
            }

            return "(".concat(realKey, ": ").concat(v, ")");
          };

          var join = function join(conds) {
            return conds.join(' and ');
          };

          var toQuery = function toQuery(obj) {
            var rules = [];
            Object.keys(mediaQuery_1.default.all).forEach(function (k) {
              var v = obj[k];

              if (v != null) {
                rules.push(keyVal(k, v));
              }
            });
            return join(rules);
          };

          exports["default"] = toQuery;
          /***/
        },

        /***/
        "./src/useMediaQuery.ts":
        /*!******************************!*\
          !*** ./src/useMediaQuery.ts ***!
          \******************************/

        /***/
        function srcUseMediaQueryTs(__unused_webpack_module, exports, __nested_webpack_require_72620__) {
          "use strict";

          var __importDefault = this && this.__importDefault || function (mod) {
            return mod && mod.__esModule ? mod : {
              "default": mod
            };
          };

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var react_1 = __nested_webpack_require_72620__(
          /*! react */
          "react");

          var matchmediaquery_1 = __importDefault(__nested_webpack_require_72620__(
          /*! matchmediaquery */
          "./node_modules/matchmediaquery/index.js"));

          var hyphenate_style_name_1 = __importDefault(__nested_webpack_require_72620__(
          /*! hyphenate-style-name */
          "./node_modules/hyphenate-style-name/index.js"));

          var shallow_equal_1 = __nested_webpack_require_72620__(
          /*! shallow-equal */
          "./node_modules/shallow-equal/dist/index.esm.js");

          var toQuery_1 = __importDefault(__nested_webpack_require_72620__(
          /*! ./toQuery */
          "./src/toQuery.ts"));

          var Context_1 = __importDefault(__nested_webpack_require_72620__(
          /*! ./Context */
          "./src/Context.ts"));

          var makeQuery = function makeQuery(settings) {
            return settings.query || (0, toQuery_1.default)(settings);
          };

          var hyphenateKeys = function hyphenateKeys(obj) {
            if (!obj) return undefined;
            var keys = Object.keys(obj);
            return keys.reduce(function (result, key) {
              result[(0, hyphenate_style_name_1.default)(key)] = obj[key];
              return result;
            }, {});
          };

          var useIsUpdate = function useIsUpdate() {
            var ref = (0, react_1.useRef)(false);
            (0, react_1.useEffect)(function () {
              ref.current = true;
            }, []);
            return ref.current;
          };

          var useDevice = function useDevice(deviceFromProps) {
            var deviceFromContext = (0, react_1.useContext)(Context_1.default);

            var getDevice = function getDevice() {
              return hyphenateKeys(deviceFromProps) || hyphenateKeys(deviceFromContext);
            };

            var _a = (0, react_1.useState)(getDevice),
                device = _a[0],
                setDevice = _a[1];

            (0, react_1.useEffect)(function () {
              var newDevice = getDevice();

              if (!(0, shallow_equal_1.shallowEqualObjects)(device, newDevice)) {
                setDevice(newDevice);
              }
            }, [deviceFromProps, deviceFromContext]);
            return device;
          };

          var useQuery = function useQuery(settings) {
            var getQuery = function getQuery() {
              return makeQuery(settings);
            };

            var _a = (0, react_1.useState)(getQuery),
                query = _a[0],
                setQuery = _a[1];

            (0, react_1.useEffect)(function () {
              var newQuery = getQuery();

              if (query !== newQuery) {
                setQuery(newQuery);
              }
            }, [settings]);
            return query;
          };

          var useMatchMedia = function useMatchMedia(query, device) {
            var getMatchMedia = function getMatchMedia() {
              return (0, matchmediaquery_1.default)(query, device || {}, !!device);
            };

            var _a = (0, react_1.useState)(getMatchMedia),
                mq = _a[0],
                setMq = _a[1];

            var isUpdate = useIsUpdate();
            (0, react_1.useEffect)(function () {
              if (isUpdate) {
                // skip on mounting, it has already been set
                var newMq_1 = getMatchMedia();
                setMq(newMq_1);
                return function () {
                  if (newMq_1) {
                    newMq_1.dispose();
                  }
                };
              }
            }, [query, device]);
            return mq;
          };

          var useMatches = function useMatches(mediaQuery) {
            var _a = (0, react_1.useState)(mediaQuery.matches),
                matches = _a[0],
                setMatches = _a[1];

            (0, react_1.useEffect)(function () {
              var updateMatches = function updateMatches(ev) {
                setMatches(ev.matches);
              };

              mediaQuery.addListener(updateMatches);
              setMatches(mediaQuery.matches);
              return function () {
                mediaQuery.removeListener(updateMatches);
              };
            }, [mediaQuery]);
            return matches;
          };

          var useMediaQuery = function useMediaQuery(settings, device, onChange) {
            var deviceSettings = useDevice(device);
            var query = useQuery(settings);
            if (!query) throw new Error('Invalid or missing MediaQuery!');
            var mq = useMatchMedia(query, deviceSettings);
            var matches = useMatches(mq);
            var isUpdate = useIsUpdate();
            (0, react_1.useEffect)(function () {
              if (isUpdate && onChange) {
                onChange(matches);
              }
            }, [matches]);
            (0, react_1.useEffect)(function () {
              return function () {
                if (mq) {
                  mq.dispose();
                }
              };
            }, []);
            return matches;
          };

          exports["default"] = useMediaQuery;
          /***/
        },

        /***/
        "react":
        /*!**************************************************************************************!*\
          !*** external {"commonjs":"react","commonjs2":"react","amd":"react","root":"React"} ***!
          \**************************************************************************************/

        /***/
        function react(module) {
          "use strict";

          module.exports = __WEBPACK_EXTERNAL_MODULE_react__;
          /***/
        }
        /******/

      };
      /************************************************************************/

      /******/
      // The module cache

      /******/

      var __webpack_module_cache__ = {};
      /******/

      /******/
      // The require function

      /******/

      function __nested_webpack_require_78931__(moduleId) {
        /******/
        // Check if module is in cache

        /******/
        var cachedModule = __webpack_module_cache__[moduleId];
        /******/

        if (cachedModule !== undefined) {
          /******/
          return cachedModule.exports;
          /******/
        }
        /******/
        // Create a new module (and put it into the cache)

        /******/


        var module = __webpack_module_cache__[moduleId] = {
          /******/
          // no module.id needed

          /******/
          // no module.loaded needed

          /******/
          exports: {}
          /******/

        };
        /******/

        /******/
        // Execute the module function

        /******/

        __webpack_modules__[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_78931__);
        /******/

        /******/
        // Return the exports of the module

        /******/


        return module.exports;
        /******/
      }
      /******/

      /************************************************************************/

      /******/

      /* webpack/runtime/define property getters */

      /******/


      (function () {
        /******/
        // define getter functions for harmony exports

        /******/
        __nested_webpack_require_78931__.d = function (exports, definition) {
          /******/
          for (var key in definition) {
            /******/
            if (__nested_webpack_require_78931__.o(definition, key) && !__nested_webpack_require_78931__.o(exports, key)) {
              /******/
              Object.defineProperty(exports, key, {
                enumerable: true,
                get: definition[key]
              });
              /******/
            }
            /******/

          }
          /******/

        };
        /******/

      })();
      /******/

      /******/

      /* webpack/runtime/hasOwnProperty shorthand */

      /******/


      (function () {
        /******/
        __nested_webpack_require_78931__.o = function (obj, prop) {
          return Object.prototype.hasOwnProperty.call(obj, prop);
        };
        /******/

      })();
      /******/

      /******/

      /* webpack/runtime/make namespace object */

      /******/


      (function () {
        /******/
        // define __esModule on exports

        /******/
        __nested_webpack_require_78931__.r = function (exports) {
          /******/
          if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
            /******/
            Object.defineProperty(exports, Symbol.toStringTag, {
              value: 'Module'
            });
            /******/
          }
          /******/


          Object.defineProperty(exports, '__esModule', {
            value: true
          });
          /******/
        };
        /******/

      })();
      /******/

      /************************************************************************/

      /******/

      /******/
      // startup

      /******/
      // Load entry module and return exports

      /******/
      // This entry module is referenced by other modules so it can't be inlined

      /******/


      var __webpack_exports__ = __nested_webpack_require_78931__("./src/index.ts");
      /******/

      /******/


      return __webpack_exports__;
      /******/
    }()
  );
});

/***/ }),

/***/ 8434:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Ix": function() { return /* binding */ A; },
  "Am": function() { return /* binding */ W; }
});

// UNUSED EXPORTS: Bounce, Flip, Icons, Slide, Zoom, collapseToast, cssTransition, useToast, useToastContainer

// EXTERNAL MODULE: ./node_modules/babel-preset-gatsby/node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__(1245);
// EXTERNAL MODULE: ./node_modules/babel-preset-gatsby/node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(5774);
// EXTERNAL MODULE: ./node_modules/babel-preset-gatsby/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__(9784);
// EXTERNAL MODULE: ./node_modules/babel-preset-gatsby/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 3 modules
var toConsumableArray = __webpack_require__(3427);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
;// CONCATENATED MODULE: ./node_modules/clsx/dist/clsx.m.js
function toVal(mix) {
  var k,
      y,
      str = '';

  if (typeof mix === 'string' || typeof mix === 'number') {
    str += mix;
  } else if (typeof mix === 'object') {
    if (Array.isArray(mix)) {
      for (k = 0; k < mix.length; k++) {
        if (mix[k]) {
          if (y = toVal(mix[k])) {
            str && (str += ' ');
            str += y;
          }
        }
      }
    } else {
      for (k in mix) {
        if (mix[k]) {
          str && (str += ' ');
          str += k;
        }
      }
    }
  }

  return str;
}

/* harmony default export */ function clsx_m() {
  var i = 0,
      tmp,
      x,
      str = '';

  while (i < arguments.length) {
    if (tmp = arguments[i++]) {
      if (x = toVal(tmp)) {
        str && (str += ' ');
        str += x;
      }
    }
  }

  return str;
}
;// CONCATENATED MODULE: ./node_modules/react-toastify/dist/react-toastify.esm.mjs




var _excluded = ["theme", "type"],
    _excluded2 = ["delay", "staleId"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }




function u(e) {
  return "number" == typeof e && !isNaN(e);
}

function d(e) {
  return "boolean" == typeof e;
}

function p(e) {
  return "string" == typeof e;
}

function m(e) {
  return "function" == typeof e;
}

function f(e) {
  return p(e) || m(e) ? e : null;
}

function g(e) {
  return 0 === e || e;
}

function y(e) {
  return (0,react.isValidElement)(e) || p(e) || m(e) || u(e);
}

var h = {
  TOP_LEFT: "top-left",
  TOP_RIGHT: "top-right",
  TOP_CENTER: "top-center",
  BOTTOM_LEFT: "bottom-left",
  BOTTOM_RIGHT: "bottom-right",
  BOTTOM_CENTER: "bottom-center"
},
    T = {
  INFO: "info",
  SUCCESS: "success",
  WARNING: "warning",
  ERROR: "error",
  DEFAULT: "default"
};

function v(e, t, n) {
  void 0 === n && (n = 300);
  var o = e.scrollHeight,
      s = e.style;
  requestAnimationFrame(function () {
    s.minHeight = "initial", s.height = o + "px", s.transition = "all " + n + "ms", requestAnimationFrame(function () {
      s.height = "0", s.padding = "0", s.margin = "0", setTimeout(t, n);
    });
  });
}

function E(t) {
  var a = t.enter,
      r = t.exit,
      _t$appendPosition = t.appendPosition,
      i = _t$appendPosition === void 0 ? !1 : _t$appendPosition,
      _t$collapse = t.collapse,
      c = _t$collapse === void 0 ? !0 : _t$collapse,
      _t$collapseDuration = t.collapseDuration,
      l = _t$collapseDuration === void 0 ? 300 : _t$collapseDuration;
  return function (t) {
    var u = t.children,
        d = t.position,
        p = t.preventExitTransition,
        m = t.done,
        f = t.nodeRef,
        g = t.isIn;
    var y = i ? a + "--" + d : a,
        h = i ? r + "--" + d : r,
        T = (0,react.useRef)(),
        E = (0,react.useRef)(0);

    function b(e) {
      if (e.target !== f.current) return;
      var t = f.current;
      t.dispatchEvent(new Event("d")), t.removeEventListener("animationend", b), t.removeEventListener("animationcancel", b), 0 === E.current && "animationcancel" !== e.type && (t.className = T.current);
    }

    function C() {
      var e = f.current;
      e.removeEventListener("animationend", C), c ? v(e, m, l) : m();
    }

    return (0,react.useLayoutEffect)(function () {
      !function () {
        var e = f.current;
        T.current = e.className, e.className += " " + y, e.addEventListener("animationend", b), e.addEventListener("animationcancel", b);
      }();
    }, []), (0,react.useEffect)(function () {
      g || (p ? C() : function () {
        E.current = 1;
        var e = f.current;
        e.className += " " + h, e.addEventListener("animationend", C);
      }());
    }, [g]), react.createElement(react.Fragment, null, u);
  };
}

function b(e, t) {
  return {
    content: e.content,
    containerId: e.props.containerId,
    id: e.props.toastId,
    theme: e.props.theme,
    type: e.props.type,
    data: e.props.data || {},
    isLoading: e.props.isLoading,
    icon: e.props.icon,
    status: t
  };
}

var C = {
  list: new Map(),
  emitQueue: new Map(),
  on: function on(e, t) {
    return this.list.has(e) || this.list.set(e, []), this.list.get(e).push(t), this;
  },
  off: function off(e, t) {
    if (t) {
      var _n = this.list.get(e).filter(function (e) {
        return e !== t;
      });

      return this.list.set(e, _n), this;
    }

    return this.list.delete(e), this;
  },
  cancelEmit: function cancelEmit(e) {
    var t = this.emitQueue.get(e);
    return t && (t.forEach(clearTimeout), this.emitQueue.delete(e)), this;
  },
  emit: function emit(e) {
    var _arguments = arguments,
        _this = this;

    this.list.has(e) && this.list.get(e).forEach(function (t) {
      var n = setTimeout(function () {
        t.apply(void 0, (0,toConsumableArray/* default */.Z)([].slice.call(_arguments, 1)));
      }, 0);
      _this.emitQueue.has(e) || _this.emitQueue.set(e, []), _this.emitQueue.get(e).push(n);
    });
  }
},
    _ = function _(t) {
  var n = t.theme,
      o = t.type,
      s = (0,objectWithoutProperties/* default */.Z)(t, _excluded);

  return react.createElement("svg", _objectSpread({
    viewBox: "0 0 24 24",
    width: "100%",
    height: "100%",
    fill: "colored" === n ? "currentColor" : "var(--toastify-icon-color-" + o + ")"
  }, s));
},
    I = {
  info: function info(t) {
    return react.createElement(_, _objectSpread({}, t), react.createElement("path", {
      d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"
    }));
  },
  warning: function warning(t) {
    return react.createElement(_, _objectSpread({}, t), react.createElement("path", {
      d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"
    }));
  },
  success: function success(t) {
    return react.createElement(_, _objectSpread({}, t), react.createElement("path", {
      d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"
    }));
  },
  error: function error(t) {
    return react.createElement(_, _objectSpread({}, t), react.createElement("path", {
      d: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"
    }));
  },
  spinner: function spinner() {
    return react.createElement("div", {
      className: "Toastify__spinner"
    });
  }
};

function O(e) {
  var _r = (0,react.useReducer)(function (e) {
    return e + 1;
  }, 0),
      _r2 = (0,slicedToArray/* default */.Z)(_r, 2),
      o = _r2[1],
      _i = (0,react.useState)([]),
      _i2 = (0,slicedToArray/* default */.Z)(_i, 2),
      c = _i2[0],
      l = _i2[1],
      h = (0,react.useRef)(null),
      T = (0,react.useRef)(new Map()).current,
      v = function v(e) {
    return -1 !== c.indexOf(e);
  },
      E = (0,react.useRef)({
    toastKey: 1,
    displayedToast: 0,
    count: 0,
    queue: [],
    props: e,
    containerId: null,
    isToastActive: v,
    getToast: function getToast(e) {
      return T.get(e);
    }
  }).current;

  function _(e) {
    var t = e.containerId;
    var n = E.props.limit;
    !n || t && E.containerId !== t || (E.count -= E.queue.length, E.queue = []);
  }

  function O(e) {
    l(function (t) {
      return g(e) ? t.filter(function (t) {
        return t !== e;
      }) : [];
    });
  }

  function L() {
    var _E$queue$shift = E.queue.shift(),
        e = _E$queue$shift.toastContent,
        t = _E$queue$shift.toastProps,
        n = _E$queue$shift.staleId;

    P(e, t, n);
  }

  function N(e, n) {
    var s = n.delay,
        r = n.staleId,
        i = (0,objectWithoutProperties/* default */.Z)(n, _excluded2);

    if (!y(e) || function (e) {
      return !h.current || E.props.enableMultiContainer && e.containerId !== E.props.containerId || T.has(e.toastId) && null == e.updateId;
    }(i)) return;

    var c = i.toastId,
        l = i.updateId,
        v = i.data,
        _ = E.props,
        N = function N() {
      return O(c);
    },
        x = null == l;

    x && E.count++;
    var R = {
      toastId: c,
      updateId: l,
      data: v,
      containerId: i.containerId,
      isLoading: i.isLoading,
      theme: i.theme || _.theme,
      icon: null != i.icon ? i.icon : _.icon,
      isIn: !1,
      key: i.key || E.toastKey++,
      type: i.type,
      closeToast: N,
      closeButton: i.closeButton,
      rtl: _.rtl,
      position: i.position || _.position,
      transition: i.transition || _.transition,
      className: f(i.className || _.toastClassName),
      bodyClassName: f(i.bodyClassName || _.bodyClassName),
      style: i.style || _.toastStyle,
      bodyStyle: i.bodyStyle || _.bodyStyle,
      onClick: i.onClick || _.onClick,
      pauseOnHover: d(i.pauseOnHover) ? i.pauseOnHover : _.pauseOnHover,
      pauseOnFocusLoss: d(i.pauseOnFocusLoss) ? i.pauseOnFocusLoss : _.pauseOnFocusLoss,
      draggable: d(i.draggable) ? i.draggable : _.draggable,
      draggablePercent: i.draggablePercent || _.draggablePercent,
      draggableDirection: i.draggableDirection || _.draggableDirection,
      closeOnClick: d(i.closeOnClick) ? i.closeOnClick : _.closeOnClick,
      progressClassName: f(i.progressClassName || _.progressClassName),
      progressStyle: i.progressStyle || _.progressStyle,
      autoClose: !i.isLoading && (k = i.autoClose, B = _.autoClose, !1 === k || u(k) && k > 0 ? k : B),
      hideProgressBar: d(i.hideProgressBar) ? i.hideProgressBar : _.hideProgressBar,
      progress: i.progress,
      role: i.role || _.role,
      deleteToast: function deleteToast() {
        var e = b(T.get(c), "removed");
        T.delete(c), C.emit(4, e);
        var t = E.queue.length;

        if (E.count = g(c) ? E.count - 1 : E.count - E.displayedToast, E.count < 0 && (E.count = 0), t > 0) {
          var _e = g(c) ? 1 : E.props.limit;

          if (1 === t || 1 === _e) E.displayedToast++, L();else {
            var _n2 = _e > t ? t : _e;

            E.displayedToast = _n2;

            for (var _e2 = 0; _e2 < _n2; _e2++) {
              L();
            }
          }
        } else o();
      }
    };
    var k, B;
    R.iconOut = function (e) {
      var n = e.theme,
          o = e.type,
          s = e.isLoading,
          r = e.icon,
          i = null;
      var c = {
        theme: n,
        type: o
      };
      return !1 === r || (m(r) ? i = r(c) : (0,react.isValidElement)(r) ? i = (0,react.cloneElement)(r, c) : p(r) || u(r) ? i = r : s ? i = I.spinner() : function (e) {
        return e in I;
      }(o) && (i = I[o](c))), i;
    }(R), m(i.onOpen) && (R.onOpen = i.onOpen), m(i.onClose) && (R.onClose = i.onClose), R.closeButton = _.closeButton, !1 === i.closeButton || y(i.closeButton) ? R.closeButton = i.closeButton : !0 === i.closeButton && (R.closeButton = !y(_.closeButton) || _.closeButton);
    var M = e;
    (0,react.isValidElement)(e) && !p(e.type) ? M = (0,react.cloneElement)(e, {
      closeToast: N,
      toastProps: R,
      data: v
    }) : m(e) && (M = e({
      closeToast: N,
      toastProps: R,
      data: v
    })), _.limit && _.limit > 0 && E.count > _.limit && x ? E.queue.push({
      toastContent: M,
      toastProps: R,
      staleId: r
    }) : u(s) ? setTimeout(function () {
      P(M, R, r);
    }, s) : P(M, R, r);
  }

  function P(e, t, n) {
    var o = t.toastId;
    n && T.delete(n);
    var s = {
      content: e,
      props: t
    };
    T.set(o, s), l(function (e) {
      return [].concat((0,toConsumableArray/* default */.Z)(e), [o]).filter(function (e) {
        return e !== n;
      });
    }), C.emit(4, b(s, null == s.props.updateId ? "added" : "updated"));
  }

  return (0,react.useEffect)(function () {
    return E.containerId = e.containerId, C.cancelEmit(3).on(0, N).on(1, function (e) {
      return h.current && O(e);
    }).on(5, _).emit(2, E), function () {
      return C.emit(3, E);
    };
  }, []), (0,react.useEffect)(function () {
    E.props = e, E.isToastActive = v, E.displayedToast = c.length;
  }), {
    getToastToRender: function getToastToRender(t) {
      var n = new Map(),
          o = Array.from(T.values());
      return e.newestOnTop && o.reverse(), o.forEach(function (e) {
        var t = e.props.position;
        n.has(t) || n.set(t, []), n.get(t).push(e);
      }), Array.from(n, function (e) {
        return t(e[0], e[1]);
      });
    },
    containerRef: h,
    isToastActive: v
  };
}

function L(e) {
  return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientX : e.clientX;
}

function N(e) {
  return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientY : e.clientY;
}

function P(e) {
  var _i3 = (0,react.useState)(!1),
      _i4 = (0,slicedToArray/* default */.Z)(_i3, 2),
      o = _i4[0],
      a = _i4[1],
      _i5 = (0,react.useState)(!1),
      _i6 = (0,slicedToArray/* default */.Z)(_i5, 2),
      r = _i6[0],
      c = _i6[1],
      l = (0,react.useRef)(null),
      u = (0,react.useRef)({
    start: 0,
    x: 0,
    y: 0,
    delta: 0,
    removalDistance: 0,
    canCloseOnClick: !0,
    canDrag: !1,
    boundingRect: null,
    didMove: !1
  }).current,
      d = (0,react.useRef)(e),
      p = e.autoClose,
      f = e.pauseOnHover,
      g = e.closeToast,
      y = e.onClick,
      h = e.closeOnClick;

  function T(t) {
    if (e.draggable) {
      u.didMove = !1, document.addEventListener("mousemove", C), document.addEventListener("mouseup", _), document.addEventListener("touchmove", C), document.addEventListener("touchend", _);
      var _n3 = l.current;
      u.canCloseOnClick = !0, u.canDrag = !0, u.boundingRect = _n3.getBoundingClientRect(), _n3.style.transition = "", u.x = L(t.nativeEvent), u.y = N(t.nativeEvent), "x" === e.draggableDirection ? (u.start = u.x, u.removalDistance = _n3.offsetWidth * (e.draggablePercent / 100)) : (u.start = u.y, u.removalDistance = _n3.offsetHeight * (80 === e.draggablePercent ? 1.5 * e.draggablePercent : e.draggablePercent / 100));
    }
  }

  function v() {
    if (u.boundingRect) {
      var _u$boundingRect = u.boundingRect,
          _t = _u$boundingRect.top,
          _n4 = _u$boundingRect.bottom,
          _o = _u$boundingRect.left,
          _s = _u$boundingRect.right;
      e.pauseOnHover && u.x >= _o && u.x <= _s && u.y >= _t && u.y <= _n4 ? b() : E();
    }
  }

  function E() {
    a(!0);
  }

  function b() {
    a(!1);
  }

  function C(t) {
    var n = l.current;
    u.canDrag && n && (u.didMove = !0, o && b(), u.x = L(t), u.y = N(t), u.delta = "x" === e.draggableDirection ? u.x - u.start : u.y - u.start, u.start !== u.x && (u.canCloseOnClick = !1), n.style.transform = "translate" + e.draggableDirection + "(" + u.delta + "px)", n.style.opacity = "" + (1 - Math.abs(u.delta / u.removalDistance)));
  }

  function _() {
    document.removeEventListener("mousemove", C), document.removeEventListener("mouseup", _), document.removeEventListener("touchmove", C), document.removeEventListener("touchend", _);
    var t = l.current;

    if (u.canDrag && u.didMove && t) {
      if (u.canDrag = !1, Math.abs(u.delta) > u.removalDistance) return c(!0), void e.closeToast();
      t.style.transition = "transform 0.2s, opacity 0.2s", t.style.transform = "translate" + e.draggableDirection + "(0)", t.style.opacity = "1";
    }
  }

  (0,react.useEffect)(function () {
    d.current = e;
  }), (0,react.useEffect)(function () {
    return l.current && l.current.addEventListener("d", E, {
      once: !0
    }), m(e.onOpen) && e.onOpen((0,react.isValidElement)(e.children) && e.children.props), function () {
      var e = d.current;
      m(e.onClose) && e.onClose((0,react.isValidElement)(e.children) && e.children.props);
    };
  }, []), (0,react.useEffect)(function () {
    return e.pauseOnFocusLoss && (document.hasFocus() || b(), window.addEventListener("focus", E), window.addEventListener("blur", b)), function () {
      e.pauseOnFocusLoss && (window.removeEventListener("focus", E), window.removeEventListener("blur", b));
    };
  }, [e.pauseOnFocusLoss]);
  var I = {
    onMouseDown: T,
    onTouchStart: T,
    onMouseUp: v,
    onTouchEnd: v
  };
  return p && f && (I.onMouseEnter = b, I.onMouseLeave = E), h && (I.onClick = function (e) {
    y && y(e), u.canCloseOnClick && g();
  }), {
    playToast: E,
    pauseToast: b,
    isRunning: o,
    preventExitTransition: r,
    toastRef: l,
    eventHandlers: I
  };
}

function x(t) {
  var n = t.closeToast,
      o = t.theme,
      _t$ariaLabel = t.ariaLabel,
      s = _t$ariaLabel === void 0 ? "close" : _t$ariaLabel;
  return react.createElement("button", {
    className: "Toastify__close-button Toastify__close-button--" + o,
    type: "button",
    onClick: function onClick(e) {
      e.stopPropagation(), n(e);
    },
    "aria-label": s
  }, react.createElement("svg", {
    "aria-hidden": "true",
    viewBox: "0 0 14 16"
  }, react.createElement("path", {
    fillRule: "evenodd",
    d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"
  })));
}

function R(t) {
  var n = t.delay,
      o = t.isRunning,
      s = t.closeToast,
      a = t.type,
      r = t.hide,
      i = t.className,
      c = t.style,
      u = t.controlledProgress,
      d = t.progress,
      p = t.rtl,
      f = t.isIn,
      g = t.theme;

  var y = _objectSpread(_objectSpread({}, c), {}, {
    animationDuration: n + "ms",
    animationPlayState: o ? "running" : "paused",
    opacity: r ? 0 : 1
  });

  u && (y.transform = "scaleX(" + d + ")");
  var h = clsx_m("Toastify__progress-bar", u ? "Toastify__progress-bar--controlled" : "Toastify__progress-bar--animated", "Toastify__progress-bar-theme--" + g, "Toastify__progress-bar--" + a, {
    "Toastify__progress-bar--rtl": p
  }),
      T = m(i) ? i({
    rtl: p,
    type: a,
    defaultClassName: h
  }) : clsx_m(h, i);
  return react.createElement("div", (0,defineProperty/* default */.Z)({
    role: "progressbar",
    "aria-hidden": r ? "true" : "false",
    "aria-label": "notification timer",
    className: T,
    style: y
  }, u && d >= 1 ? "onTransitionEnd" : "onAnimationEnd", u && d < 1 ? null : function () {
    f && s();
  }));
}

R.defaultProps = {
  type: T.DEFAULT,
  hide: !1
};

var k = function k(t) {
  var _P = P(t),
      n = _P.isRunning,
      o = _P.preventExitTransition,
      s = _P.toastRef,
      a = _P.eventHandlers,
      r = t.closeButton,
      i = t.children,
      c = t.autoClose,
      u = t.onClick,
      d = t.type,
      p = t.hideProgressBar,
      f = t.closeToast,
      g = t.transition,
      y = t.position,
      h = t.className,
      T = t.style,
      v = t.bodyClassName,
      E = t.bodyStyle,
      b = t.progressClassName,
      C = t.progressStyle,
      _ = t.updateId,
      I = t.role,
      O = t.progress,
      L = t.rtl,
      N = t.toastId,
      k = t.deleteToast,
      B = t.isIn,
      M = t.isLoading,
      D = t.iconOut,
      w = t.theme,
      A = clsx_m("Toastify__toast", "Toastify__toast-theme--" + w, "Toastify__toast--" + d, {
    "Toastify__toast--rtl": L
  }),
      F = m(h) ? h({
    rtl: L,
    position: y,
    type: d,
    defaultClassName: A
  }) : clsx_m(A, h),
      S = !!O,
      z = {
    closeToast: f,
    type: d,
    theme: w
  };

  var H = null;
  return !1 === r || (H = m(r) ? r(z) : react.isValidElement(r) ? react.cloneElement(r, z) : x(z)), react.createElement(g, {
    isIn: B,
    done: k,
    position: y,
    preventExitTransition: o,
    nodeRef: s
  }, react.createElement("div", _objectSpread(_objectSpread({
    id: N,
    onClick: u,
    className: F
  }, a), {}, {
    style: T,
    ref: s
  }), react.createElement("div", _objectSpread(_objectSpread({}, B && {
    role: I
  }), {}, {
    className: m(v) ? v({
      type: d
    }) : clsx_m("Toastify__toast-body", v),
    style: E
  }), null != D && react.createElement("div", {
    className: clsx_m("Toastify__toast-icon", {
      "Toastify--animate-icon Toastify__zoom-enter": !M
    })
  }, D), react.createElement("div", null, i)), H, (c || S) && react.createElement(R, _objectSpread(_objectSpread({}, _ && !S ? {
    key: "pb-" + _
  } : {}), {}, {
    rtl: L,
    theme: w,
    delay: c,
    isRunning: n,
    isIn: B,
    closeToast: f,
    hide: p,
    type: d,
    style: C,
    className: b,
    controlledProgress: S,
    progress: O
  }))));
},
    B = E({
  enter: "Toastify--animate Toastify__bounce-enter",
  exit: "Toastify--animate Toastify__bounce-exit",
  appendPosition: !0
}),
    M = E({
  enter: "Toastify--animate Toastify__slide-enter",
  exit: "Toastify--animate Toastify__slide-exit",
  appendPosition: !0
}),
    D = E({
  enter: "Toastify--animate Toastify__zoom-enter",
  exit: "Toastify--animate Toastify__zoom-exit"
}),
    w = E({
  enter: "Toastify--animate Toastify__flip-enter",
  exit: "Toastify--animate Toastify__flip-exit"
}),
    A = (0,react.forwardRef)(function (t, n) {
  var _O = O(t),
      o = _O.getToastToRender,
      a = _O.containerRef,
      r = _O.isToastActive,
      i = t.className,
      c = t.style,
      u = t.rtl,
      d = t.containerId;

  function p(e) {
    var t = clsx_m("Toastify__toast-container", "Toastify__toast-container--" + e, {
      "Toastify__toast-container--rtl": u
    });
    return m(i) ? i({
      position: e,
      rtl: u,
      defaultClassName: t
    }) : clsx_m(t, f(i));
  }

  return (0,react.useEffect)(function () {
    n && (n.current = a.current);
  }, []), react.createElement("div", {
    ref: a,
    className: "Toastify",
    id: d
  }, o(function (t, n) {
    var o = n.length ? _objectSpread({}, c) : _objectSpread(_objectSpread({}, c), {}, {
      pointerEvents: "none"
    });
    return react.createElement("div", {
      className: p(t),
      style: o,
      key: "container-" + t
    }, n.map(function (t, o) {
      var s = t.content,
          a = t.props;
      return react.createElement(k, _objectSpread(_objectSpread({}, a), {}, {
        isIn: r(a.toastId),
        style: _objectSpread(_objectSpread({}, a.style), {}, {
          "--nth": o + 1,
          "--len": n.length
        }),
        key: "toast-" + a.key
      }), s);
    }));
  }));
});

A.displayName = "ToastContainer", A.defaultProps = {
  position: h.TOP_RIGHT,
  transition: B,
  rtl: !1,
  autoClose: 5e3,
  hideProgressBar: !1,
  closeButton: x,
  pauseOnHover: !0,
  pauseOnFocusLoss: !0,
  closeOnClick: !0,
  newestOnTop: !1,
  draggable: !0,
  draggablePercent: 80,
  draggableDirection: "x",
  role: "alert",
  theme: "light"
};
var F,
    S = new Map(),
    z = [];

function H() {
  return Math.random().toString(36).substring(2, 9);
}

function q(e) {
  return e && (p(e.toastId) || u(e.toastId)) ? e.toastId : H();
}

function U(e, t) {
  return S.size > 0 ? C.emit(0, e, t) : z.push({
    content: e,
    options: t
  }), t.toastId;
}

function Q(e, t) {
  return _objectSpread(_objectSpread({}, t), {}, {
    type: t && t.type || e,
    toastId: q(t)
  });
}

function G(e) {
  return function (t, n) {
    return U(t, Q(e, n));
  };
}

function W(e, t) {
  return U(e, Q(T.DEFAULT, t));
}

W.loading = function (e, t) {
  return U(e, Q(T.DEFAULT, _objectSpread({
    isLoading: !0,
    autoClose: !1,
    closeOnClick: !1,
    closeButton: !1,
    draggable: !1
  }, t)));
}, W.promise = function (e, t, n) {
  var o,
      s = t.pending,
      a = t.error,
      r = t.success;
  s && (o = p(s) ? W.loading(s, n) : W.loading(s.render, _objectSpread(_objectSpread({}, n), s)));

  var i = {
    isLoading: null,
    autoClose: null,
    closeOnClick: null,
    closeButton: null,
    draggable: null,
    delay: 100
  },
      c = function c(e, t, s) {
    if (null == t) return void W.dismiss(o);

    var a = _objectSpread(_objectSpread(_objectSpread({
      type: e
    }, i), n), {}, {
      data: s
    }),
        r = p(t) ? {
      render: t
    } : t;

    return o ? W.update(o, _objectSpread(_objectSpread({}, a), r)) : W(r.render, _objectSpread(_objectSpread({}, a), r)), s;
  },
      l = m(e) ? e() : e;

  return l.then(function (e) {
    return c("success", r, e);
  }).catch(function (e) {
    return c("error", a, e);
  }), l;
}, W.success = G(T.SUCCESS), W.info = G(T.INFO), W.error = G(T.ERROR), W.warning = G(T.WARNING), W.warn = W.warning, W.dark = function (e, t) {
  return U(e, Q(T.DEFAULT, _objectSpread({
    theme: "dark"
  }, t)));
}, W.dismiss = function (e) {
  return C.emit(1, e);
}, W.clearWaitingQueue = function (e) {
  return void 0 === e && (e = {}), C.emit(5, e);
}, W.isActive = function (e) {
  var t = !1;
  return S.forEach(function (n) {
    n.isToastActive && n.isToastActive(e) && (t = !0);
  }), t;
}, W.update = function (e, t) {
  void 0 === t && (t = {}), setTimeout(function () {
    var n = function (e, t) {
      var n = t.containerId;
      var o = S.get(n || F);
      return o ? o.getToast(e) : null;
    }(e, t);

    if (n) {
      var _o2 = n.props,
          _s2 = n.content,
          _a = _objectSpread(_objectSpread(_objectSpread({}, _o2), t), {}, {
        toastId: t.toastId || e,
        updateId: H()
      });

      _a.toastId !== e && (_a.staleId = e);

      var _r3 = _a.render || _s2;

      delete _a.render, U(_r3, _a);
    }
  }, 0);
}, W.done = function (e) {
  W.update(e, {
    progress: 1
  });
}, W.onChange = function (e) {
  return C.on(4, e), function () {
    C.off(4, e);
  };
}, W.POSITION = h, W.TYPE = T, C.on(2, function (e) {
  F = e.containerId || e, S.set(F, e), z.forEach(function (e) {
    C.emit(0, e.content, e.options);
  }), z = [];
}).on(3, function (e) {
  S.delete(e.containerId || e), 0 === S.size && C.off(0).off(1).off(5);
});


/***/ }),

/***/ 2244:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

__webpack_require__(5743);

!function (e, t) {
   true ? t(exports) : 0;
}(this, function (e) {
  "use strict";

  function t(e) {
    var o,
        r,
        i = "";
    if ("string" == typeof e || "number" == typeof e) i += e;else if ("object" == typeof e) if (Array.isArray(e)) for (o = 0; o < e.length; o++) {
      e[o] && (r = t(e[o])) && (i && (i += " "), i += r);
    } else for (o in e) {
      e[o] && (i && (i += " "), i += o);
    }
    return i;
  }

  function o() {
    for (var e, o, r = 0, i = ""; r < arguments.length;) {
      (e = arguments[r++]) && (o = t(e)) && (i && (i += " "), i += o);
    }

    return i;
  }

  var r = o,
      i = o,
      a = o,
      n = o,
      l = o,
      d = o,
      s = o,
      c = o,
      g = o,
      p = o,
      f = o,
      u = o,
      b = o,
      h = o,
      y = o,
      k = o,
      m = o,
      x = o,
      S = o,
      C = o,
      w = o,
      v = o,
      O = o,
      R = o,
      W = o,
      A = o,
      B = o,
      D = o,
      I = o,
      T = o,
      j = o,
      P = o,
      z = o,
      F = o,
      H = o,
      M = o,
      E = o,
      G = o,
      L = o,
      N = o,
      U = o,
      V = o,
      _ = o,
      q = o,
      J = o,
      K = o,
      Q = o,
      X = o,
      Y = o,
      Z = o,
      $ = o,
      ee = o,
      te = o,
      oe = o,
      re = o,
      ie = o,
      ae = o,
      ne = o,
      le = o,
      de = o,
      se = o,
      ce = o,
      ge = o,
      pe = o,
      fe = o,
      ue = o,
      be = o,
      he = o,
      ye = o,
      ke = o,
      me = o,
      xe = o,
      Se = o,
      Ce = o,
      we = o,
      ve = o,
      Oe = o,
      Re = o,
      We = o,
      Ae = o,
      Be = o,
      De = o,
      Ie = o,
      Te = o,
      je = o,
      Pe = o,
      ze = o,
      Fe = o,
      He = o,
      Me = o,
      Ee = o,
      Ge = o,
      Le = o,
      Ne = o,
      Ue = o,
      Ve = o,
      _e = o,
      qe = o,
      Je = o,
      Ke = o,
      Qe = o,
      Xe = o,
      Ye = o,
      Ze = o,
      $e = o,
      et = o,
      tt = o,
      ot = o,
      rt = o,
      it = o,
      at = o,
      nt = o,
      lt = o,
      dt = o,
      st = o,
      ct = o,
      gt = o,
      pt = o,
      ft = o,
      ut = o,
      bt = o,
      ht = o,
      yt = o,
      kt = o,
      mt = o,
      xt = o,
      St = o,
      Ct = o,
      wt = o,
      vt = o,
      Ot = o,
      Rt = o,
      Wt = o,
      At = o,
      Bt = o,
      Dt = o,
      It = o,
      Tt = o,
      jt = o,
      Pt = o,
      zt = o,
      Ft = o,
      Ht = o,
      Mt = o,
      Et = o,
      Gt = o,
      Lt = o,
      Nt = o,
      Ut = o,
      Vt = o,
      _t = o,
      qt = o,
      Jt = o,
      Kt = o,
      Qt = o,
      Xt = o,
      Yt = o,
      Zt = o,
      $t = o,
      eo = o,
      to = o,
      oo = o,
      ro = o,
      io = o,
      ao = o,
      no = o,
      lo = o,
      so = {
    screenReaders: r,
    backgroundAttachment: i,
    backgroundClip: a,
    backgroundOrigin: n,
    backgroundRepeat: l,
    backgroundOpacity: d,
    backgroundColor: s,
    backgroundPosition: c,
    backgroundSize: g,
    backgroundImage: p,
    gradientColorStops: f,
    borderStyle: u,
    divideStyle: b,
    outlineStyle: h,
    borderColor: y,
    borderOpacity: k,
    borderRadius: m,
    borderWidth: x,
    divideColor: S,
    divideOpacity: C,
    divideWidth: w,
    ringColor: v,
    ringWidth: O,
    ringOpacity: R,
    ringOffsetColor: W,
    ringOffsetWidth: A,
    outlineOffset: B,
    outlineWidth: D,
    outlineColor: I,
    borderCollapse: T,
    tableLayout: j,
    mixBlendMode: P,
    backgroundBlendMode: z,
    boxShadow: F,
    boxShadowColor: H,
    opacity: M,
    transitionProperty: E,
    transitionDuration: G,
    transitionTimingFunction: L,
    transitionDelay: N,
    animation: U,
    filter: V,
    backdropFilter: _,
    blur: q,
    brightness: J,
    contrast: K,
    dropShadow: Q,
    grayscale: X,
    hueRotate: Y,
    invert: Z,
    saturate: $,
    sepia: ee,
    backdropBlur: te,
    backdropBrightness: oe,
    backdropContrast: re,
    backdropGrayscale: ie,
    backdropHueRotate: ae,
    backdropInvert: ne,
    backdropOpacity: le,
    backdropSaturate: de,
    backdropSepia: se,
    flexDirection: ce,
    flexWrap: ge,
    alignItems: pe,
    alignContent: fe,
    alignSelf: ue,
    placeContent: be,
    placeItems: he,
    placeSelf: ye,
    justifyContent: ke,
    justifyItems: me,
    justifySelf: xe,
    flex: Se,
    flexBasis: Ce,
    flexGrow: we,
    flexShrink: ve,
    order: Oe,
    gridAutoFlow: Re,
    gridTemplateColumns: We,
    gridAutoColumns: Ae,
    gridColumn: Be,
    gridColumnStart: De,
    gridColumnEnd: Ie,
    gridTemplateRows: Te,
    gridAutoRows: je,
    gridRow: Pe,
    gridRowStart: ze,
    gridRowEnd: Fe,
    gap: He,
    padding: Me,
    margin: Ee,
    space: Ge,
    appearance: Le,
    pointerEvents: Ne,
    resize: Ue,
    userSelect: Ve,
    scrollSnap: _e,
    scrollBehavior: qe,
    touchAction: Je,
    cursor: Ke,
    caretColor: Qe,
    willChange: Xe,
    accentColor: Ye,
    scrollPadding: Ze,
    scrollMargin: $e,
    display: et,
    boxDecorationBreak: tt,
    boxSizing: ot,
    container: rt,
    float: it,
    clear: at,
    isolation: nt,
    objectFit: lt,
    overflow: dt,
    overscrollBehavior: st,
    position: ct,
    visibility: gt,
    breakBefore: pt,
    breakInside: ft,
    breakAfter: ut,
    objectPosition: bt,
    inset: ht,
    zIndex: yt,
    aspectRatio: kt,
    columns: mt,
    width: xt,
    minWidth: St,
    maxWidth: Ct,
    height: wt,
    minHeight: vt,
    maxHeight: Ot,
    fill: Rt,
    stroke: Wt,
    strokeWidth: At,
    hardwareAcceleration: Bt,
    scale: Dt,
    rotate: It,
    translate: Tt,
    skew: jt,
    transformOrigin: Pt,
    fontSmoothing: zt,
    fontStyle: Ft,
    fontVariantNumeric: Ht,
    listStylePosition: Mt,
    textAlign: Et,
    textDecoration: Gt,
    textTransform: Lt,
    textOverflow: Nt,
    verticalAlign: Ut,
    whitespace: Vt,
    wordBreak: _t,
    textDecorationStyle: qt,
    fontFamily: Jt,
    fontSize: Kt,
    fontWeight: Qt,
    letterSpacing: Xt,
    lineHeight: Yt,
    listStyleType: Zt,
    placeholderColor: $t,
    placeholderOpacity: eo,
    textColor: to,
    textOpacity: oo,
    content: ro,
    textIndent: io,
    textDecorationColor: ao,
    textDecorationThickness: no,
    textUnderlineOffset: lo
  },
      co = o;
  e.TW = so, e.accentColor = Ye, e.alignContent = fe, e.alignItems = pe, e.alignSelf = ue, e.animation = U, e.appearance = Le, e.aspectRatio = kt, e.backdropBlur = te, e.backdropBrightness = oe, e.backdropContrast = re, e.backdropFilter = _, e.backdropGrayscale = ie, e.backdropHueRotate = ae, e.backdropInvert = ne, e.backdropOpacity = le, e.backdropSaturate = de, e.backdropSepia = se, e.backgroundAttachment = i, e.backgroundBlendMode = z, e.backgroundClip = a, e.backgroundColor = s, e.backgroundImage = p, e.backgroundOpacity = d, e.backgroundOrigin = n, e.backgroundPosition = c, e.backgroundRepeat = l, e.backgroundSize = g, e.blur = q, e.borderCollapse = T, e.borderColor = y, e.borderOpacity = k, e.borderRadius = m, e.borderStyle = u, e.borderWidth = x, e.boxDecorationBreak = tt, e.boxShadow = F, e.boxShadowColor = H, e.boxSizing = ot, e.breakAfter = ut, e.breakBefore = pt, e.breakInside = ft, e.brightness = J, e.caretColor = Qe, e.classnames = co, e.clear = at, e.columns = mt, e.container = rt, e.content = ro, e.contrast = K, e.cursor = Ke, e.default = co, e.display = et, e.divideColor = S, e.divideOpacity = C, e.divideStyle = b, e.divideWidth = w, e.dropShadow = Q, e.fill = Rt, e.filter = V, e.flex = Se, e.flexBasis = Ce, e.flexDirection = ce, e.flexGrow = we, e.flexShrink = ve, e.flexWrap = ge, e.float = it, e.fontFamily = Jt, e.fontSize = Kt, e.fontSmoothing = zt, e.fontStyle = Ft, e.fontVariantNumeric = Ht, e.fontWeight = Qt, e.gap = He, e.gradientColorStops = f, e.grayscale = X, e.gridAutoColumns = Ae, e.gridAutoFlow = Re, e.gridAutoRows = je, e.gridColumn = Be, e.gridColumnEnd = Ie, e.gridColumnStart = De, e.gridRow = Pe, e.gridRowEnd = Fe, e.gridRowStart = ze, e.gridTemplateColumns = We, e.gridTemplateRows = Te, e.hardwareAcceleration = Bt, e.height = wt, e.hueRotate = Y, e.inset = ht, e.invert = Z, e.isolation = nt, e.justifyContent = ke, e.justifyItems = me, e.justifySelf = xe, e.letterSpacing = Xt, e.lineHeight = Yt, e.listStylePosition = Mt, e.listStyleType = Zt, e.margin = Ee, e.maxHeight = Ot, e.maxWidth = Ct, e.minHeight = vt, e.minWidth = St, e.mixBlendMode = P, e.objectFit = lt, e.objectPosition = bt, e.opacity = M, e.order = Oe, e.outlineColor = I, e.outlineOffset = B, e.outlineStyle = h, e.outlineWidth = D, e.overflow = dt, e.overscrollBehavior = st, e.padding = Me, e.placeContent = be, e.placeItems = he, e.placeSelf = ye, e.placeholderColor = $t, e.placeholderOpacity = eo, e.pointerEvents = Ne, e.position = ct, e.resize = Ue, e.ringColor = v, e.ringOffsetColor = W, e.ringOffsetWidth = A, e.ringOpacity = R, e.ringWidth = O, e.rotate = It, e.saturate = $, e.scale = Dt, e.screenReaders = r, e.scrollBehavior = qe, e.scrollMargin = $e, e.scrollPadding = Ze, e.scrollSnap = _e, e.sepia = ee, e.skew = jt, e.space = Ge, e.stroke = Wt, e.strokeWidth = At, e.tableLayout = j, e.textAlign = Et, e.textColor = to, e.textDecoration = Gt, e.textDecorationColor = ao, e.textDecorationStyle = qt, e.textDecorationThickness = no, e.textIndent = io, e.textOpacity = oo, e.textOverflow = Nt, e.textTransform = Lt, e.textUnderlineOffset = lo, e.touchAction = Je, e.transformOrigin = Pt, e.transitionDelay = N, e.transitionDuration = G, e.transitionProperty = E, e.transitionTimingFunction = L, e.translate = Tt, e.userSelect = Ve, e.verticalAlign = Ut, e.visibility = gt, e.whitespace = Vt, e.width = xt, e.willChange = Xe, e.wordBreak = _t, e.zIndex = yt, Object.defineProperty(e, "__esModule", {
    value: !0
  });
});

/***/ }),

/***/ 7663:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var colors = __webpack_require__(9510);

module.exports = (colors.__esModule ? colors : {
  default: colors
}).default;

/***/ }),

/***/ 9510:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _log = _interopRequireDefault(__webpack_require__(1615));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function warn(_ref) {
  var version = _ref.version,
      from = _ref.from,
      to = _ref.to;

  _log.default.warn("".concat(from, "-color-renamed"), ["As of Tailwind CSS ".concat(version, ", `").concat(from, "` has been renamed to `").concat(to, "`."), "Update your configuration file to silence this warning."]);
}

var _default = {
  inherit: "inherit",
  current: "currentColor",
  transparent: "transparent",
  black: "#000",
  white: "#fff",
  slate: {
    50: "#f8fafc",
    100: "#f1f5f9",
    200: "#e2e8f0",
    300: "#cbd5e1",
    400: "#94a3b8",
    500: "#64748b",
    600: "#475569",
    700: "#334155",
    800: "#1e293b",
    900: "#0f172a"
  },
  gray: {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    800: "#1f2937",
    900: "#111827"
  },
  zinc: {
    50: "#fafafa",
    100: "#f4f4f5",
    200: "#e4e4e7",
    300: "#d4d4d8",
    400: "#a1a1aa",
    500: "#71717a",
    600: "#52525b",
    700: "#3f3f46",
    800: "#27272a",
    900: "#18181b"
  },
  neutral: {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#e5e5e5",
    300: "#d4d4d4",
    400: "#a3a3a3",
    500: "#737373",
    600: "#525252",
    700: "#404040",
    800: "#262626",
    900: "#171717"
  },
  stone: {
    50: "#fafaf9",
    100: "#f5f5f4",
    200: "#e7e5e4",
    300: "#d6d3d1",
    400: "#a8a29e",
    500: "#78716c",
    600: "#57534e",
    700: "#44403c",
    800: "#292524",
    900: "#1c1917"
  },
  red: {
    50: "#fef2f2",
    100: "#fee2e2",
    200: "#fecaca",
    300: "#fca5a5",
    400: "#f87171",
    500: "#ef4444",
    600: "#dc2626",
    700: "#b91c1c",
    800: "#991b1b",
    900: "#7f1d1d"
  },
  orange: {
    50: "#fff7ed",
    100: "#ffedd5",
    200: "#fed7aa",
    300: "#fdba74",
    400: "#fb923c",
    500: "#f97316",
    600: "#ea580c",
    700: "#c2410c",
    800: "#9a3412",
    900: "#7c2d12"
  },
  amber: {
    50: "#fffbeb",
    100: "#fef3c7",
    200: "#fde68a",
    300: "#fcd34d",
    400: "#fbbf24",
    500: "#f59e0b",
    600: "#d97706",
    700: "#b45309",
    800: "#92400e",
    900: "#78350f"
  },
  yellow: {
    50: "#fefce8",
    100: "#fef9c3",
    200: "#fef08a",
    300: "#fde047",
    400: "#facc15",
    500: "#eab308",
    600: "#ca8a04",
    700: "#a16207",
    800: "#854d0e",
    900: "#713f12"
  },
  lime: {
    50: "#f7fee7",
    100: "#ecfccb",
    200: "#d9f99d",
    300: "#bef264",
    400: "#a3e635",
    500: "#84cc16",
    600: "#65a30d",
    700: "#4d7c0f",
    800: "#3f6212",
    900: "#365314"
  },
  green: {
    50: "#f0fdf4",
    100: "#dcfce7",
    200: "#bbf7d0",
    300: "#86efac",
    400: "#4ade80",
    500: "#22c55e",
    600: "#16a34a",
    700: "#15803d",
    800: "#166534",
    900: "#14532d"
  },
  emerald: {
    50: "#ecfdf5",
    100: "#d1fae5",
    200: "#a7f3d0",
    300: "#6ee7b7",
    400: "#34d399",
    500: "#10b981",
    600: "#059669",
    700: "#047857",
    800: "#065f46",
    900: "#064e3b"
  },
  teal: {
    50: "#f0fdfa",
    100: "#ccfbf1",
    200: "#99f6e4",
    300: "#5eead4",
    400: "#2dd4bf",
    500: "#14b8a6",
    600: "#0d9488",
    700: "#0f766e",
    800: "#115e59",
    900: "#134e4a"
  },
  cyan: {
    50: "#ecfeff",
    100: "#cffafe",
    200: "#a5f3fc",
    300: "#67e8f9",
    400: "#22d3ee",
    500: "#06b6d4",
    600: "#0891b2",
    700: "#0e7490",
    800: "#155e75",
    900: "#164e63"
  },
  sky: {
    50: "#f0f9ff",
    100: "#e0f2fe",
    200: "#bae6fd",
    300: "#7dd3fc",
    400: "#38bdf8",
    500: "#0ea5e9",
    600: "#0284c7",
    700: "#0369a1",
    800: "#075985",
    900: "#0c4a6e"
  },
  blue: {
    50: "#eff6ff",
    100: "#dbeafe",
    200: "#bfdbfe",
    300: "#93c5fd",
    400: "#60a5fa",
    500: "#3b82f6",
    600: "#2563eb",
    700: "#1d4ed8",
    800: "#1e40af",
    900: "#1e3a8a"
  },
  indigo: {
    50: "#eef2ff",
    100: "#e0e7ff",
    200: "#c7d2fe",
    300: "#a5b4fc",
    400: "#818cf8",
    500: "#6366f1",
    600: "#4f46e5",
    700: "#4338ca",
    800: "#3730a3",
    900: "#312e81"
  },
  violet: {
    50: "#f5f3ff",
    100: "#ede9fe",
    200: "#ddd6fe",
    300: "#c4b5fd",
    400: "#a78bfa",
    500: "#8b5cf6",
    600: "#7c3aed",
    700: "#6d28d9",
    800: "#5b21b6",
    900: "#4c1d95"
  },
  purple: {
    50: "#faf5ff",
    100: "#f3e8ff",
    200: "#e9d5ff",
    300: "#d8b4fe",
    400: "#c084fc",
    500: "#a855f7",
    600: "#9333ea",
    700: "#7e22ce",
    800: "#6b21a8",
    900: "#581c87"
  },
  fuchsia: {
    50: "#fdf4ff",
    100: "#fae8ff",
    200: "#f5d0fe",
    300: "#f0abfc",
    400: "#e879f9",
    500: "#d946ef",
    600: "#c026d3",
    700: "#a21caf",
    800: "#86198f",
    900: "#701a75"
  },
  pink: {
    50: "#fdf2f8",
    100: "#fce7f3",
    200: "#fbcfe8",
    300: "#f9a8d4",
    400: "#f472b6",
    500: "#ec4899",
    600: "#db2777",
    700: "#be185d",
    800: "#9d174d",
    900: "#831843"
  },
  rose: {
    50: "#fff1f2",
    100: "#ffe4e6",
    200: "#fecdd3",
    300: "#fda4af",
    400: "#fb7185",
    500: "#f43f5e",
    600: "#e11d48",
    700: "#be123c",
    800: "#9f1239",
    900: "#881337"
  },

  get lightBlue() {
    warn({
      version: "v2.2",
      from: "lightBlue",
      to: "sky"
    });
    return this.sky;
  },

  get warmGray() {
    warn({
      version: "v3.0",
      from: "warmGray",
      to: "stone"
    });
    return this.stone;
  },

  get trueGray() {
    warn({
      version: "v3.0",
      from: "trueGray",
      to: "neutral"
    });
    return this.neutral;
  },

  get coolGray() {
    warn({
      version: "v3.0",
      from: "coolGray",
      to: "gray"
    });
    return this.gray;
  },

  get blueGray() {
    warn({
      version: "v3.0",
      from: "blueGray",
      to: "slate"
    });
    return this.slate;
  }

};
exports["default"] = _default;

/***/ }),

/***/ 1615:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _toConsumableArray = __webpack_require__(1747);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.dim = dim;
exports["default"] = void 0;

var _picocolors = _interopRequireDefault(__webpack_require__(677));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var alreadyShown = new Set();

function log(type, messages, key) {
  if (typeof process !== "undefined" && ({}).JEST_WORKER_ID) return;
  if (key && alreadyShown.has(key)) return;
  if (key) alreadyShown.add(key);
  console.warn("");
  messages.forEach(function (message) {
    return console.warn(type, "-", message);
  });
}

function dim(input) {
  return _picocolors.default.dim(input);
}

var _default = {
  info: function info(key, messages) {
    log.apply(void 0, [_picocolors.default.bold(_picocolors.default.cyan("info"))].concat(_toConsumableArray(Array.isArray(key) ? [key] : [messages, key])));
  },
  warn: function warn(key, messages) {
    log.apply(void 0, [_picocolors.default.bold(_picocolors.default.yellow("warn"))].concat(_toConsumableArray(Array.isArray(key) ? [key] : [messages, key])));
  },
  risk: function risk(key, messages) {
    log.apply(void 0, [_picocolors.default.bold(_picocolors.default.magenta("risk"))].concat(_toConsumableArray(Array.isArray(key) ? [key] : [messages, key])));
  }
};
exports["default"] = _default;

/***/ }),

/***/ 3562:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var space = __webpack_require__(7369);
/**
 * Export.
 */


module.exports = toCamelCase;
/**
 * Convert a `string` to camel case.
 *
 * @param {String} string
 * @return {String}
 */

function toCamelCase(string) {
  return space(string).replace(/\s(\w)/g, function (matches, letter) {
    return letter.toUpperCase();
  });
}

/***/ }),

/***/ 2807:
/***/ (function(module) {

/**
 * Export.
 */
module.exports = toNoCase;
/**
 * Test whether a string is camel-case.
 */

var hasSpace = /\s/;
var hasSeparator = /(_|-|\.|:)/;
var hasCamel = /([a-z][A-Z]|[A-Z][a-z])/;
/**
 * Remove any starting case from a `string`, like camel or snake, but keep
 * spaces and punctuation that may be important otherwise.
 *
 * @param {String} string
 * @return {String}
 */

function toNoCase(string) {
  if (hasSpace.test(string)) return string.toLowerCase();
  if (hasSeparator.test(string)) return (unseparate(string) || string).toLowerCase();
  if (hasCamel.test(string)) return uncamelize(string).toLowerCase();
  return string.toLowerCase();
}
/**
 * Separator splitter.
 */


var separatorSplitter = /[\W_]+(.|$)/g;
/**
 * Un-separate a `string`.
 *
 * @param {String} string
 * @return {String}
 */

function unseparate(string) {
  return string.replace(separatorSplitter, function (m, next) {
    return next ? ' ' + next : '';
  });
}
/**
 * Camelcase splitter.
 */


var camelSplitter = /(.)([A-Z]+)/g;
/**
 * Un-camelcase a `string`.
 *
 * @param {String} string
 * @return {String}
 */

function uncamelize(string) {
  return string.replace(camelSplitter, function (m, previous, uppers) {
    return previous + ' ' + uppers.toLowerCase().split('').join(' ');
  });
}

/***/ }),

/***/ 7369:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var clean = __webpack_require__(2807);
/**
 * Export.
 */


module.exports = toSpaceCase;
/**
 * Convert a `string` to space case.
 *
 * @param {String} string
 * @return {String}
 */

function toSpaceCase(string) {
  return clean(string).replace(/[\W_]+(.|$)/g, function (matches, match) {
    return match ? ' ' + match : '';
  }).trim();
}

/***/ }),

/***/ 9662:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isCallable = __webpack_require__(614);
var tryToString = __webpack_require__(6330);

var $TypeError = TypeError;

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw $TypeError(tryToString(argument) + ' is not a function');
};


/***/ }),

/***/ 9670:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__(111);

var $String = String;
var $TypeError = TypeError;

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw $TypeError($String(argument) + ' is not an object');
};


/***/ }),

/***/ 1318:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(5656);
var toAbsoluteIndex = __webpack_require__(1400);
var lengthOfArrayLike = __webpack_require__(6244);

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = lengthOfArrayLike(O);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ 4326:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(1702);

var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);

module.exports = function (it) {
  return stringSlice(toString(it), 8, -1);
};


/***/ }),

/***/ 9920:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var hasOwn = __webpack_require__(2597);
var ownKeys = __webpack_require__(3887);
var getOwnPropertyDescriptorModule = __webpack_require__(1236);
var definePropertyModule = __webpack_require__(3070);

module.exports = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};


/***/ }),

/***/ 8880:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(9781);
var definePropertyModule = __webpack_require__(3070);
var createPropertyDescriptor = __webpack_require__(9114);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ 9114:
/***/ (function(module) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ 8052:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isCallable = __webpack_require__(614);
var definePropertyModule = __webpack_require__(3070);
var makeBuiltIn = __webpack_require__(6339);
var defineGlobalProperty = __webpack_require__(3072);

module.exports = function (O, key, value, options) {
  if (!options) options = {};
  var simple = options.enumerable;
  var name = options.name !== undefined ? options.name : key;
  if (isCallable(value)) makeBuiltIn(value, name, options);
  if (options.global) {
    if (simple) O[key] = value;
    else defineGlobalProperty(key, value);
  } else {
    try {
      if (!options.unsafe) delete O[key];
      else if (O[key]) simple = true;
    } catch (error) { /* empty */ }
    if (simple) O[key] = value;
    else definePropertyModule.f(O, key, {
      value: value,
      enumerable: false,
      configurable: !options.nonConfigurable,
      writable: !options.nonWritable
    });
  } return O;
};


/***/ }),

/***/ 3072:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);

// eslint-disable-next-line es-x/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

module.exports = function (key, value) {
  try {
    defineProperty(global, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ 9781:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(7293);

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ 317:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var isObject = __webpack_require__(111);

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ 8113:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(5005);

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ 7392:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var userAgent = __webpack_require__(8113);

var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

module.exports = version;


/***/ }),

/***/ 748:
/***/ (function(module) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ 2109:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var getOwnPropertyDescriptor = (__webpack_require__(1236).f);
var createNonEnumerableProperty = __webpack_require__(8880);
var defineBuiltIn = __webpack_require__(8052);
var defineGlobalProperty = __webpack_require__(3072);
var copyConstructorProperties = __webpack_require__(9920);
var isForced = __webpack_require__(4705);

/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    defineBuiltIn(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ 7293:
/***/ (function(module) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ 4374:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(7293);

module.exports = !fails(function () {
  // eslint-disable-next-line es-x/no-function-prototype-bind -- safe
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});


/***/ }),

/***/ 6916:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var NATIVE_BIND = __webpack_require__(4374);

var call = Function.prototype.call;

module.exports = NATIVE_BIND ? call.bind(call) : function () {
  return call.apply(call, arguments);
};


/***/ }),

/***/ 6530:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(9781);
var hasOwn = __webpack_require__(2597);

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));

module.exports = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};


/***/ }),

/***/ 1702:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var NATIVE_BIND = __webpack_require__(4374);

var FunctionPrototype = Function.prototype;
var bind = FunctionPrototype.bind;
var call = FunctionPrototype.call;
var uncurryThis = NATIVE_BIND && bind.bind(call, call);

module.exports = NATIVE_BIND ? function (fn) {
  return fn && uncurryThis(fn);
} : function (fn) {
  return fn && function () {
    return call.apply(fn, arguments);
  };
};


/***/ }),

/***/ 5005:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var isCallable = __webpack_require__(614);

var aFunction = function (argument) {
  return isCallable(argument) ? argument : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};


/***/ }),

/***/ 8173:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var aCallable = __webpack_require__(9662);

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return func == null ? undefined : aCallable(func);
};


/***/ }),

/***/ 7854:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es-x/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof __webpack_require__.g == 'object' && __webpack_require__.g) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();


/***/ }),

/***/ 2597:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(1702);
var toObject = __webpack_require__(7908);

var hasOwnProperty = uncurryThis({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es-x/no-object-hasown -- safe
module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};


/***/ }),

/***/ 3501:
/***/ (function(module) {

module.exports = {};


/***/ }),

/***/ 4664:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(9781);
var fails = __webpack_require__(7293);
var createElement = __webpack_require__(317);

// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ 8361:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(1702);
var fails = __webpack_require__(7293);
var classof = __webpack_require__(4326);

var $Object = Object;
var split = uncurryThis(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split(it, '') : $Object(it);
} : $Object;


/***/ }),

/***/ 2788:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(1702);
var isCallable = __webpack_require__(614);
var store = __webpack_require__(5465);

var functionToString = uncurryThis(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ 9909:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(8536);
var global = __webpack_require__(7854);
var uncurryThis = __webpack_require__(1702);
var isObject = __webpack_require__(111);
var createNonEnumerableProperty = __webpack_require__(8880);
var hasOwn = __webpack_require__(2597);
var shared = __webpack_require__(5465);
var sharedKey = __webpack_require__(6200);
var hiddenKeys = __webpack_require__(3501);

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError = global.TypeError;
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = uncurryThis(store.get);
  var wmhas = uncurryThis(store.has);
  var wmset = uncurryThis(store.set);
  set = function (it, metadata) {
    if (wmhas(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget(store, it) || {};
  };
  has = function (it) {
    return wmhas(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ 614:
/***/ (function(module) {

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
module.exports = function (argument) {
  return typeof argument == 'function';
};


/***/ }),

/***/ 4705:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(7293);
var isCallable = __webpack_require__(614);

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : isCallable(detection) ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ 111:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isCallable = __webpack_require__(614);

module.exports = function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};


/***/ }),

/***/ 1913:
/***/ (function(module) {

module.exports = false;


/***/ }),

/***/ 2190:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(5005);
var isCallable = __webpack_require__(614);
var isPrototypeOf = __webpack_require__(7976);
var USE_SYMBOL_AS_UID = __webpack_require__(3307);

var $Object = Object;

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};


/***/ }),

/***/ 6244:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toLength = __webpack_require__(7466);

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};


/***/ }),

/***/ 6339:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(7293);
var isCallable = __webpack_require__(614);
var hasOwn = __webpack_require__(2597);
var DESCRIPTORS = __webpack_require__(9781);
var CONFIGURABLE_FUNCTION_NAME = (__webpack_require__(6530).CONFIGURABLE);
var inspectSource = __webpack_require__(2788);
var InternalStateModule = __webpack_require__(9909);

var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
// eslint-disable-next-line es-x/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function () {
  return defineProperty(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
});

var TEMPLATE = String(String).split('String');

var makeBuiltIn = module.exports = function (value, name, options) {
  if (String(name).slice(0, 7) === 'Symbol(') {
    name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwn(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
    if (DESCRIPTORS) defineProperty(value, 'name', { value: name, configurable: true });
    else value.name = name;
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn(options, 'arity') && value.length !== options.arity) {
    defineProperty(value, 'length', { value: options.arity });
  }
  try {
    if (options && hasOwn(options, 'constructor') && options.constructor) {
      if (DESCRIPTORS) defineProperty(value, 'prototype', { writable: false });
    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
    } else if (value.prototype) value.prototype = undefined;
  } catch (error) { /* empty */ }
  var state = enforceInternalState(value);
  if (!hasOwn(state, 'source')) {
    state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
  } return value;
};

// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn(function toString() {
  return isCallable(this) && getInternalState(this).source || inspectSource(this);
}, 'toString');


/***/ }),

/***/ 4758:
/***/ (function(module) {

var ceil = Math.ceil;
var floor = Math.floor;

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es-x/no-math-trunc -- safe
module.exports = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor : ceil)(n);
};


/***/ }),

/***/ 133:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* eslint-disable es-x/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(7392);
var fails = __webpack_require__(7293);

// eslint-disable-next-line es-x/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),

/***/ 8536:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var isCallable = __webpack_require__(614);
var inspectSource = __webpack_require__(2788);

var WeakMap = global.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ 3070:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(9781);
var IE8_DOM_DEFINE = __webpack_require__(4664);
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(3353);
var anObject = __webpack_require__(9670);
var toPropertyKey = __webpack_require__(4948);

var $TypeError = TypeError;
// eslint-disable-next-line es-x/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw $TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ 1236:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(9781);
var call = __webpack_require__(6916);
var propertyIsEnumerableModule = __webpack_require__(5296);
var createPropertyDescriptor = __webpack_require__(9114);
var toIndexedObject = __webpack_require__(5656);
var toPropertyKey = __webpack_require__(4948);
var hasOwn = __webpack_require__(2597);
var IE8_DOM_DEFINE = __webpack_require__(4664);

// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};


/***/ }),

/***/ 8006:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(6324);
var enumBugKeys = __webpack_require__(748);

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es-x/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ 5181:
/***/ (function(__unused_webpack_module, exports) {

// eslint-disable-next-line es-x/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ 7976:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(1702);

module.exports = uncurryThis({}.isPrototypeOf);


/***/ }),

/***/ 6324:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(1702);
var hasOwn = __webpack_require__(2597);
var toIndexedObject = __webpack_require__(5656);
var indexOf = (__webpack_require__(1318).indexOf);
var hiddenKeys = __webpack_require__(3501);

var push = uncurryThis([].push);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn(O, key = names[i++])) {
    ~indexOf(result, key) || push(result, key);
  }
  return result;
};


/***/ }),

/***/ 5296:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),

/***/ 2140:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var call = __webpack_require__(6916);
var isCallable = __webpack_require__(614);
var isObject = __webpack_require__(111);

var $TypeError = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  throw $TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ 3887:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(5005);
var uncurryThis = __webpack_require__(1702);
var getOwnPropertyNamesModule = __webpack_require__(8006);
var getOwnPropertySymbolsModule = __webpack_require__(5181);
var anObject = __webpack_require__(9670);

var concat = uncurryThis([].concat);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ 4488:
/***/ (function(module) {

var $TypeError = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw $TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ 6200:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var shared = __webpack_require__(2309);
var uid = __webpack_require__(9711);

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ 5465:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var defineGlobalProperty = __webpack_require__(3072);

var SHARED = '__core-js_shared__';
var store = global[SHARED] || defineGlobalProperty(SHARED, {});

module.exports = store;


/***/ }),

/***/ 2309:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var IS_PURE = __webpack_require__(1913);
var store = __webpack_require__(5465);

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.23.3',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.23.3/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});


/***/ }),

/***/ 1400:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__(9303);

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toIntegerOrInfinity(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ 5656:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(8361);
var requireObjectCoercible = __webpack_require__(4488);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ 9303:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var trunc = __webpack_require__(4758);

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};


/***/ }),

/***/ 7466:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__(9303);

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ 7908:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(4488);

var $Object = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return $Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ 7593:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var call = __webpack_require__(6916);
var isObject = __webpack_require__(111);
var isSymbol = __webpack_require__(2190);
var getMethod = __webpack_require__(8173);
var ordinaryToPrimitive = __webpack_require__(2140);
var wellKnownSymbol = __webpack_require__(5112);

var $TypeError = TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call(exoticToPrim, input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw $TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};


/***/ }),

/***/ 4948:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toPrimitive = __webpack_require__(7593);
var isSymbol = __webpack_require__(2190);

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};


/***/ }),

/***/ 6330:
/***/ (function(module) {

var $String = String;

module.exports = function (argument) {
  try {
    return $String(argument);
  } catch (error) {
    return 'Object';
  }
};


/***/ }),

/***/ 9711:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(1702);

var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);

module.exports = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};


/***/ }),

/***/ 3307:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* eslint-disable es-x/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(133);

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ 3353:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(9781);
var fails = __webpack_require__(7293);

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function () {
  // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype != 42;
});


/***/ }),

/***/ 5112:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var shared = __webpack_require__(2309);
var hasOwn = __webpack_require__(2597);
var uid = __webpack_require__(9711);
var NATIVE_SYMBOL = __webpack_require__(133);
var USE_SYMBOL_AS_UID = __webpack_require__(3307);

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var symbolFor = Symbol && Symbol['for'];
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!hasOwn(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    var description = 'Symbol.' + name;
    if (NATIVE_SYMBOL && hasOwn(Symbol, name)) {
      WellKnownSymbolsStore[name] = Symbol[name];
    } else if (USE_SYMBOL_AS_UID && symbolFor) {
      WellKnownSymbolsStore[name] = symbolFor(description);
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
    }
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ 5837:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(2109);
var global = __webpack_require__(7854);

// `globalThis` object
// https://tc39.es/ecma262/#sec-globalthis
$({ global: true }, {
  globalThis: global
});


/***/ }),

/***/ 5743:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// TODO: Remove from `core-js@4`
__webpack_require__(5837);


/***/ }),

/***/ 8037:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(2930);

exports.__esModule = true;
exports.navigate = exports["default"] = void 0;
exports.withAssetPrefix = withAssetPrefix;
exports.withPrefix = withPrefix;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(1334));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(2824));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(5648));

var _extends2 = _interopRequireDefault(__webpack_require__(5255));

var _propTypes = _interopRequireDefault(__webpack_require__(5697));

var _react = _interopRequireDefault(__webpack_require__(7294));

var _reachRouter = __webpack_require__(9499);

var _parsePath = __webpack_require__(1752);

exports.parsePath = _parsePath.parsePath;

var _isLocalLink = __webpack_require__(4587);

var _rewriteLinkPath = __webpack_require__(349);

var _excluded = ["to", "getProps", "onClick", "onMouseEnter", "activeClassName", "activeStyle", "innerRef", "partiallyActive", "state", "replace", "_location"];

function withPrefix(path, prefix) {
  var _ref, _prefix;

  if (prefix === void 0) {
    prefix = getGlobalBasePrefix();
  }

  if (!(0, _isLocalLink.isLocalLink)(path)) {
    return path;
  }

  if (path.startsWith("./") || path.startsWith("../")) {
    return path;
  }

  var base = (_ref = (_prefix = prefix) !== null && _prefix !== void 0 ? _prefix : getGlobalPathPrefix()) !== null && _ref !== void 0 ? _ref : "/";
  return "" + (base !== null && base !== void 0 && base.endsWith("/") ? base.slice(0, -1) : base) + (path.startsWith("/") ? path : "/" + path);
} // These global values are wrapped in typeof clauses to ensure the values exist.
// This is especially problematic in unit testing of this component.


var getGlobalPathPrefix = function getGlobalPathPrefix() {
  return  false ? 0 : "";
};

var getGlobalBasePrefix = function getGlobalBasePrefix() {
  return  false ? 0 : "";
};

function withAssetPrefix(path) {
  return withPrefix(path, getGlobalPathPrefix());
}

var NavLinkPropTypes = {
  activeClassName: _propTypes.default.string,
  activeStyle: _propTypes.default.object,
  partiallyActive: _propTypes.default.bool
}; // Set up IntersectionObserver

var createIntersectionObserver = function createIntersectionObserver(el, cb) {
  var io = new window.IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (el === entry.target) {
        // Check if element is within viewport, remove listener, destroy observer, and run link callback.
        // MSEdge doesn't currently support isIntersecting, so also test for  an intersectionRatio > 0
        cb(entry.isIntersecting || entry.intersectionRatio > 0);
      }
    });
  }); // Add element to the observer

  io.observe(el);
  return {
    instance: io,
    el: el
  };
};

function GatsbyLinkLocationWrapper(props) {
  return /*#__PURE__*/_react.default.createElement(_reachRouter.Location, null, function (_ref2) {
    var location = _ref2.location;
    return /*#__PURE__*/_react.default.createElement(GatsbyLink, (0, _extends2.default)({}, props, {
      _location: location
    }));
  });
}

var GatsbyLink = /*#__PURE__*/function (_React$Component) {
  (0, _inheritsLoose2.default)(GatsbyLink, _React$Component);

  function GatsbyLink(props) {
    var _this;

    _this = _React$Component.call(this, props) || this; // Default to no support for IntersectionObserver

    _this.defaultGetProps = function (_ref3) {
      var isPartiallyCurrent = _ref3.isPartiallyCurrent,
          isCurrent = _ref3.isCurrent;

      if (_this.props.partiallyActive ? isPartiallyCurrent : isCurrent) {
        return {
          className: [_this.props.className, _this.props.activeClassName].filter(Boolean).join(" "),
          style: (0, _extends2.default)({}, _this.props.style, _this.props.activeStyle)
        };
      }

      return null;
    };

    var IOSupported = false;

    if (typeof window !== "undefined" && window.IntersectionObserver) {
      IOSupported = true;
    }

    _this.state = {
      IOSupported: IOSupported
    };
    _this.abortPrefetch = null;
    _this.handleRef = _this.handleRef.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  var _proto = GatsbyLink.prototype;

  _proto._prefetch = function _prefetch() {
    var currentPath = window.location.pathname + window.location.search; // reach router should have the correct state

    if (this.props._location && this.props._location.pathname) {
      currentPath = this.props._location.pathname + this.props._location.search;
    }

    var rewrittenPath = (0, _rewriteLinkPath.rewriteLinkPath)(this.props.to, currentPath);
    var parsed = (0, _parsePath.parsePath)(rewrittenPath);
    var newPathName = parsed.pathname + parsed.search; // Prefetch is used to speed up next navigations. When you use it on the current navigation,
    // there could be a race-condition where Chrome uses the stale data instead of waiting for the network to complete

    if (currentPath !== newPathName) {
      return ___loader.enqueue(newPathName);
    }

    return undefined;
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (!this.io) {
      return;
    }

    var _this$io = this.io,
        instance = _this$io.instance,
        el = _this$io.el;

    if (this.abortPrefetch) {
      this.abortPrefetch.abort();
    }

    instance.unobserve(el);
    instance.disconnect();
  };

  _proto.handleRef = function handleRef(ref) {
    var _this2 = this;

    if (this.props.innerRef && Object.prototype.hasOwnProperty.call(this.props.innerRef, "current")) {
      this.props.innerRef.current = ref;
    } else if (this.props.innerRef) {
      this.props.innerRef(ref);
    }

    if (this.state.IOSupported && ref) {
      // If IO supported and element reference found, setup Observer functionality
      this.io = createIntersectionObserver(ref, function (inViewPort) {
        if (inViewPort) {
          _this2.abortPrefetch = _this2._prefetch();
        } else {
          if (_this2.abortPrefetch) {
            _this2.abortPrefetch.abort();
          }
        }
      });
    }
  };

  _proto.render = function render() {
    var _this3 = this;

    var _this$props = this.props,
        to = _this$props.to,
        _this$props$getProps = _this$props.getProps,
        getProps = _this$props$getProps === void 0 ? this.defaultGetProps : _this$props$getProps,
        _onClick = _this$props.onClick,
        _onMouseEnter = _this$props.onMouseEnter,
        $activeClassName = _this$props.activeClassName,
        $activeStyle = _this$props.activeStyle,
        $innerRef = _this$props.innerRef,
        partiallyActive = _this$props.partiallyActive,
        state = _this$props.state,
        replace = _this$props.replace,
        _location = _this$props._location,
        rest = (0, _objectWithoutPropertiesLoose2.default)(_this$props, _excluded);

    if (false) {}

    var prefixedTo = (0, _rewriteLinkPath.rewriteLinkPath)(to, _location.pathname);

    if (!(0, _isLocalLink.isLocalLink)(prefixedTo)) {
      return /*#__PURE__*/_react.default.createElement("a", (0, _extends2.default)({
        href: prefixedTo
      }, rest));
    }

    return /*#__PURE__*/_react.default.createElement(_reachRouter.Link, (0, _extends2.default)({
      to: prefixedTo,
      state: state,
      getProps: getProps,
      innerRef: this.handleRef,
      onMouseEnter: function onMouseEnter(e) {
        if (_onMouseEnter) {
          _onMouseEnter(e);
        }

        var parsed = (0, _parsePath.parsePath)(prefixedTo);

        ___loader.hovering(parsed.pathname + parsed.search);
      },
      onClick: function onClick(e) {
        if (_onClick) {
          _onClick(e);
        }

        if (e.button === 0 && // ignore right clicks
        !_this3.props.target && // let browser handle "target=_blank"
        !e.defaultPrevented && // onClick prevented default
        !e.metaKey && // ignore clicks with modifier keys...
        !e.altKey && !e.ctrlKey && !e.shiftKey) {
          e.preventDefault();
          var shouldReplace = replace;

          var isCurrent = encodeURI(prefixedTo) === _location.pathname;

          if (typeof replace !== "boolean" && isCurrent) {
            shouldReplace = true;
          } // Make sure the necessary scripts and data are
          // loaded before continuing.


          window.___navigate(prefixedTo, {
            state: state,
            replace: shouldReplace
          });
        }

        return true;
      }
    }, rest));
  };

  return GatsbyLink;
}(_react.default.Component);

GatsbyLink.propTypes = (0, _extends2.default)({}, NavLinkPropTypes, {
  onClick: _propTypes.default.func,
  to: _propTypes.default.string.isRequired,
  replace: _propTypes.default.bool,
  state: _propTypes.default.object
});

var _default = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  return /*#__PURE__*/_react.default.createElement(GatsbyLinkLocationWrapper, (0, _extends2.default)({
    innerRef: ref
  }, props));
});

exports["default"] = _default;

var navigate = function navigate(to, options) {
  window.___navigate((0, _rewriteLinkPath.rewriteLinkPath)(to, window.location.pathname), options);
};

exports.navigate = navigate;

/***/ }),

/***/ 4587:
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.isLocalLink = void 0;
// Copied from https://github.com/sindresorhus/is-absolute-url/blob/3ab19cc2e599a03ea691bcb8a4c09fa3ebb5da4f/index.js
var ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;

var isAbsolute = function isAbsolute(path) {
  return ABSOLUTE_URL_REGEX.test(path);
};

var isLocalLink = function isLocalLink(path) {
  if (typeof path !== "string") {
    return undefined; // TODO(v5): Re-Add TypeError
    // throw new TypeError(`Expected a \`string\`, got \`${typeof path}\``)
  }

  return !isAbsolute(path);
};

exports.isLocalLink = isLocalLink;

/***/ }),

/***/ 1752:
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.parsePath = parsePath;

function parsePath(path) {
  var pathname = path || "/";
  var search = "";
  var hash = "";
  var hashIndex = pathname.indexOf("#");

  if (hashIndex !== -1) {
    hash = pathname.slice(hashIndex);
    pathname = pathname.slice(0, hashIndex);
  }

  var searchIndex = pathname.indexOf("?");

  if (searchIndex !== -1) {
    search = pathname.slice(searchIndex);
    pathname = pathname.slice(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === "?" ? "" : search,
    hash: hash === "#" ? "" : hash
  };
}

/***/ }),

/***/ 349:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.rewriteLinkPath = void 0;

var _utils = __webpack_require__(2098);

var _applyTrailingSlashOption = __webpack_require__(8440);

var _parsePath2 = __webpack_require__(1752);

var _isLocalLink = __webpack_require__(4587);

var _ = __webpack_require__(8037);

// Specific import to treeshake Node.js stuff
var isAbsolutePath = function isAbsolutePath(path) {
  return path === null || path === void 0 ? void 0 : path.startsWith("/");
};

var getGlobalTrailingSlash = function getGlobalTrailingSlash() {
  return  true ? "always" : 0;
};

function absolutify(path, current) {
  // If it's already absolute, return as-is
  if (isAbsolutePath(path)) {
    return path;
  }

  var option = getGlobalTrailingSlash();
  var absolutePath = (0, _utils.resolve)(path, current);

  if (option === "always" || option === "never") {
    return (0, _applyTrailingSlashOption.applyTrailingSlashOption)(absolutePath, option);
  }

  return absolutePath;
}

var rewriteLinkPath = function rewriteLinkPath(path, relativeTo) {
  if (typeof path === "number") {
    return path;
  }

  if (!(0, _isLocalLink.isLocalLink)(path)) {
    return path;
  }

  var _parsePath = (0, _parsePath2.parsePath)(path),
      pathname = _parsePath.pathname,
      search = _parsePath.search,
      hash = _parsePath.hash;

  var option = getGlobalTrailingSlash();
  var adjustedPath = path;

  if (option === "always" || option === "never") {
    var output = (0, _applyTrailingSlashOption.applyTrailingSlashOption)(pathname, option);
    adjustedPath = "" + output + search + hash;
  }

  return isAbsolutePath(adjustedPath) ? (0, _.withPrefix)(adjustedPath) : absolutify(adjustedPath, relativeTo);
};

exports.rewriteLinkPath = rewriteLinkPath;

/***/ }),

/***/ 9679:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = true;
__webpack_unused_export__ = exports.$C = void 0;

var _scrollHandler = __webpack_require__(1432);

exports.$C = _scrollHandler.ScrollHandler;

var _useScrollRestoration = __webpack_require__(4855);

__webpack_unused_export__ = _useScrollRestoration.useScrollRestoration;

/***/ }),

/***/ 1432:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(2930);

exports.__esModule = true;
exports.ScrollHandler = exports.ScrollContext = void 0;

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(2824));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(5648));

var React = _interopRequireWildcard(__webpack_require__(7294));

var _propTypes = _interopRequireDefault(__webpack_require__(5697));

var _sessionStorage = __webpack_require__(1142);

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ScrollContext = /*#__PURE__*/React.createContext(new _sessionStorage.SessionStorage());
exports.ScrollContext = ScrollContext;
ScrollContext.displayName = "GatsbyScrollContext";

var ScrollHandler = /*#__PURE__*/function (_React$Component) {
  (0, _inheritsLoose2.default)(ScrollHandler, _React$Component);

  function ScrollHandler() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this._stateStorage = new _sessionStorage.SessionStorage();
    _this._isTicking = false;
    _this._latestKnownScrollY = 0;

    _this.scrollListener = function () {
      _this._latestKnownScrollY = window.scrollY;

      if (!_this._isTicking) {
        _this._isTicking = true;
        requestAnimationFrame(_this._saveScroll.bind((0, _assertThisInitialized2.default)(_this)));
      }
    };

    _this.windowScroll = function (position, prevProps) {
      if (_this.shouldUpdateScroll(prevProps, _this.props)) {
        window.scrollTo(0, position);
      }
    };

    _this.scrollToHash = function (hash, prevProps) {
      var node = document.getElementById(hash.substring(1));

      if (node && _this.shouldUpdateScroll(prevProps, _this.props)) {
        node.scrollIntoView();
      }
    };

    _this.shouldUpdateScroll = function (prevRouterProps, routerProps) {
      var shouldUpdateScroll = _this.props.shouldUpdateScroll;

      if (!shouldUpdateScroll) {
        return true;
      } // Hack to allow accessing this._stateStorage.


      return shouldUpdateScroll.call((0, _assertThisInitialized2.default)(_this), prevRouterProps, routerProps);
    };

    return _this;
  }

  var _proto = ScrollHandler.prototype;

  _proto._saveScroll = function _saveScroll() {
    var key = this.props.location.key || null;

    if (key) {
      this._stateStorage.save(this.props.location, key, this._latestKnownScrollY);
    }

    this._isTicking = false;
  };

  _proto.componentDidMount = function componentDidMount() {
    window.addEventListener("scroll", this.scrollListener);
    var scrollPosition;
    var _this$props$location = this.props.location,
        key = _this$props$location.key,
        hash = _this$props$location.hash;

    if (key) {
      scrollPosition = this._stateStorage.read(this.props.location, key);
    }

    if (scrollPosition) {
      this.windowScroll(scrollPosition, undefined);
    } else if (hash) {
      this.scrollToHash(decodeURI(hash), undefined);
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollListener);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var _this$props$location2 = this.props.location,
        hash = _this$props$location2.hash,
        key = _this$props$location2.key;
    var scrollPosition;

    if (key) {
      scrollPosition = this._stateStorage.read(this.props.location, key);
    }
    /**  There are two pieces of state: the browser url and
     * history state which keeps track of scroll position
     * Native behaviour prescribes that we ought to restore scroll position
     * when a user navigates back in their browser (this is the `POP` action)
     * Currently, reach router has a bug that prevents this at https://github.com/reach/router/issues/228
     * So we _always_ stick to the url as a source of truth — if the url
     * contains a hash, we scroll to it
     */


    if (hash) {
      this.scrollToHash(decodeURI(hash), prevProps);
    } else {
      this.windowScroll(scrollPosition, prevProps);
    }
  };

  _proto.render = function render() {
    return /*#__PURE__*/React.createElement(ScrollContext.Provider, {
      value: this._stateStorage
    }, this.props.children);
  };

  return ScrollHandler;
}(React.Component);

exports.ScrollHandler = ScrollHandler;
ScrollHandler.propTypes = {
  shouldUpdateScroll: _propTypes.default.func,
  children: _propTypes.default.element.isRequired,
  location: _propTypes.default.object.isRequired
};

/***/ }),

/***/ 1142:
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.SessionStorage = void 0;
var STATE_KEY_PREFIX = "@@scroll|";
var GATSBY_ROUTER_SCROLL_STATE = "___GATSBY_REACT_ROUTER_SCROLL";

var SessionStorage = /*#__PURE__*/function () {
  function SessionStorage() {}

  var _proto = SessionStorage.prototype;

  _proto.read = function read(location, key) {
    var stateKey = this.getStateKey(location, key);

    try {
      var value = window.sessionStorage.getItem(stateKey);
      return value ? JSON.parse(value) : 0;
    } catch (e) {
      if (false) {}

      if (window && window[GATSBY_ROUTER_SCROLL_STATE] && window[GATSBY_ROUTER_SCROLL_STATE][stateKey]) {
        return window[GATSBY_ROUTER_SCROLL_STATE][stateKey];
      }

      return 0;
    }
  };

  _proto.save = function save(location, key, value) {
    var stateKey = this.getStateKey(location, key);
    var storedValue = JSON.stringify(value);

    try {
      window.sessionStorage.setItem(stateKey, storedValue);
    } catch (e) {
      if (window && window[GATSBY_ROUTER_SCROLL_STATE]) {
        window[GATSBY_ROUTER_SCROLL_STATE][stateKey] = JSON.parse(storedValue);
      } else {
        window[GATSBY_ROUTER_SCROLL_STATE] = {};
        window[GATSBY_ROUTER_SCROLL_STATE][stateKey] = JSON.parse(storedValue);
      }

      if (false) {}
    }
  };

  _proto.getStateKey = function getStateKey(location, key) {
    var stateKeyBase = "" + STATE_KEY_PREFIX + location.pathname;
    return key === null || typeof key === "undefined" ? stateKeyBase : stateKeyBase + "|" + key;
  };

  return SessionStorage;
}();

exports.SessionStorage = SessionStorage;

/***/ }),

/***/ 4855:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useScrollRestoration = useScrollRestoration;

var _scrollHandler = __webpack_require__(1432);

var _react = __webpack_require__(7294);

var _reachRouter = __webpack_require__(9499);

function useScrollRestoration(identifier) {
  var location = (0, _reachRouter.useLocation)();
  var state = (0, _react.useContext)(_scrollHandler.ScrollContext);
  var ref = (0, _react.useRef)(null);
  (0, _react.useLayoutEffect)(function () {
    if (ref.current) {
      var position = state.read(location, identifier);
      ref.current.scrollTo(0, position || 0);
    }
  }, [location.key]);
  return {
    ref: ref,
    onScroll: function onScroll() {
      if (ref.current) {
        state.save(location, identifier, ref.current.scrollTop);
      }
    }
  };
}

/***/ }),

/***/ 9848:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "PartytownContext": function() { return /* reexport */ PartytownContext; },
  "Script": function() { return /* reexport */ Script; },
  "ScriptStrategy": function() { return /* reexport */ ScriptStrategy; },
  "scriptCache": function() { return /* reexport */ scriptCache; },
  "scriptCallbackCache": function() { return /* reexport */ scriptCallbackCache; }
});

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(5255);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
;// CONCATENATED MODULE: ./node_modules/gatsby-script/dist/partytown-context.js

const PartytownContext = /*#__PURE__*/(0,react.createContext)({});

;// CONCATENATED MODULE: ./node_modules/gatsby-script/dist/request-idle-callback-shim.js
// https://developer.chrome.com/blog/using-requestidlecallback/#checking-for-requestidlecallback
// https://github.com/vercel/next.js/blob/canary/packages/next/client/request-idle-callback.ts
const requestIdleCallback = typeof self !== `undefined` && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function (cb) {
  const start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};
;// CONCATENATED MODULE: ./node_modules/gatsby-script/dist/gatsby-script.js




let ScriptStrategy; // eslint-disable-next-line @typescript-eslint/naming-convention

(function (ScriptStrategy) {
  ScriptStrategy["postHydrate"] = "post-hydrate";
  ScriptStrategy["idle"] = "idle";
  ScriptStrategy["offMainThread"] = "off-main-thread";
})(ScriptStrategy || (ScriptStrategy = {}));

const handledProps = new Set([`src`, `strategy`, `dangerouslySetInnerHTML`, `children`, `onLoad`, `onError`]);
const scriptCache = new Set();
const scriptCallbackCache = new Map();
function Script(props) {
  const {
    id,
    src,
    strategy = ScriptStrategy.postHydrate
  } = props || {};
  const {
    collectScript
  } = (0,react.useContext)(PartytownContext);
  (0,react.useEffect)(() => {
    let details;

    switch (strategy) {
      case ScriptStrategy.postHydrate:
        details = injectScript(props);
        break;

      case ScriptStrategy.idle:
        requestIdleCallback(() => {
          details = injectScript(props);
        });
        break;

      case ScriptStrategy.offMainThread:
        if (collectScript) {
          const attributes = resolveAttributes(props);
          collectScript(attributes);
        }

        break;
    }

    return () => {
      const {
        script,
        loadCallback,
        errorCallback
      } = details || {};

      if (loadCallback) {
        script === null || script === void 0 ? void 0 : script.removeEventListener(`load`, loadCallback);
      }

      if (errorCallback) {
        script === null || script === void 0 ? void 0 : script.removeEventListener(`error`, errorCallback);
      }

      script === null || script === void 0 ? void 0 : script.remove();
    };
  }, []);

  if (strategy === ScriptStrategy.offMainThread) {
    const inlineScript = resolveInlineScript(props);
    const attributes = resolveAttributes(props);

    if (typeof window === `undefined`) {
      if (collectScript) {
        collectScript(attributes);
      } else {
        console.warn(`Unable to collect off-main-thread script '${id || src || `no-id-or-src`}' for configuration with Partytown.\nGatsby script components must be used either as a child of your page, in wrapPageElement, or wrapRootElement.\nSee https://gatsby.dev/gatsby-script for more information.`);
      }
    }

    if (inlineScript) {
      return /*#__PURE__*/react.createElement("script", extends_default()({
        type: "text/partytown",
        "data-strategy": strategy,
        crossOrigin: "anonymous"
      }, attributes, {
        dangerouslySetInnerHTML: {
          __html: resolveInlineScript(props)
        }
      }));
    }

    return /*#__PURE__*/react.createElement("script", extends_default()({
      type: "text/partytown",
      src: proxyPartytownUrl(src),
      "data-strategy": strategy,
      crossOrigin: "anonymous"
    }, attributes));
  }

  return null;
}

function injectScript(props) {
  const {
    id,
    src,
    strategy = ScriptStrategy.postHydrate,
    onLoad,
    onError
  } = props || {};
  const scriptKey = id || src;
  const callbackNames = [`load`, `error`];
  const currentCallbacks = {
    load: onLoad,
    error: onError
  };

  if (scriptKey) {
    /**
     * If a duplicate script is already loaded/errored, we replay load/error callbacks with the original event.
     * If it's not yet loaded/errored, keep track of callbacks so we can call load/error callbacks for each when the event occurs.
     */
    for (const name of callbackNames) {
      if (currentCallbacks !== null && currentCallbacks !== void 0 && currentCallbacks[name]) {
        var _cachedCallbacks$name;

        const cachedCallbacks = scriptCallbackCache.get(scriptKey) || {};
        const {
          callbacks = []
        } = (cachedCallbacks === null || cachedCallbacks === void 0 ? void 0 : cachedCallbacks[name]) || {};
        callbacks.push(currentCallbacks === null || currentCallbacks === void 0 ? void 0 : currentCallbacks[name]);

        if (cachedCallbacks !== null && cachedCallbacks !== void 0 && (_cachedCallbacks$name = cachedCallbacks[name]) !== null && _cachedCallbacks$name !== void 0 && _cachedCallbacks$name.event) {
          var _currentCallbacks$nam, _cachedCallbacks$name2;

          currentCallbacks === null || currentCallbacks === void 0 ? void 0 : (_currentCallbacks$nam = currentCallbacks[name]) === null || _currentCallbacks$nam === void 0 ? void 0 : _currentCallbacks$nam.call(currentCallbacks, cachedCallbacks === null || cachedCallbacks === void 0 ? void 0 : (_cachedCallbacks$name2 = cachedCallbacks[name]) === null || _cachedCallbacks$name2 === void 0 ? void 0 : _cachedCallbacks$name2.event);
        } else {
          scriptCallbackCache.set(scriptKey, extends_default()({}, cachedCallbacks, {
            [name]: {
              callbacks
            }
          }));
        }
      }
    } // Avoid injecting duplicate scripts into the DOM


    if (scriptCache.has(scriptKey)) {
      return null;
    }
  }

  const inlineScript = resolveInlineScript(props);
  const attributes = resolveAttributes(props);
  const script = document.createElement(`script`);

  if (id) {
    script.id = id;
  }

  script.dataset.strategy = strategy;

  for (const [key, value] of Object.entries(attributes)) {
    script.setAttribute(key, value);
  }

  if (inlineScript) {
    script.textContent = inlineScript;
  }

  if (src) {
    script.src = src;
  }

  const wrappedCallbacks = {};

  if (scriptKey) {
    // Add listeners on injected scripts so events are cached for use in de-duplicated script callbacks
    for (const name of callbackNames) {
      const wrappedEventCallback = event => onEventCallback(event, scriptKey, name);

      script.addEventListener(name, wrappedEventCallback);
      wrappedCallbacks[`${name}Callback`] = wrappedEventCallback;
    }

    scriptCache.add(scriptKey);
  }

  document.body.appendChild(script);
  return {
    script,
    loadCallback: wrappedCallbacks.loadCallback,
    errorCallback: wrappedCallbacks.errorCallback
  };
}

function resolveInlineScript(props) {
  const {
    dangerouslySetInnerHTML,
    children = ``
  } = props || {};
  const {
    __html: dangerousHTML = ``
  } = dangerouslySetInnerHTML || {};
  return dangerousHTML || children;
}

function resolveAttributes(props) {
  const attributes = {};

  for (const [key, value] of Object.entries(props)) {
    if (handledProps.has(key)) {
      continue;
    }

    attributes[key] = value;
  }

  return attributes;
}

function proxyPartytownUrl(url) {
  if (!url) {
    return undefined;
  }

  return `/__third-party-proxy?url=${encodeURIComponent(url)}`;
}

function onEventCallback(event, scriptKey, eventName) {
  const cachedCallbacks = scriptCallbackCache.get(scriptKey) || {};

  for (const callback of (cachedCallbacks === null || cachedCallbacks === void 0 ? void 0 : (_cachedCallbacks$even = cachedCallbacks[eventName]) === null || _cachedCallbacks$even === void 0 ? void 0 : _cachedCallbacks$even.callbacks) || []) {
    var _cachedCallbacks$even;

    callback(event);
  }

  scriptCallbackCache.set(scriptKey, {
    [eventName]: {
      event
    }
  });
}
;// CONCATENATED MODULE: ./node_modules/gatsby-script/dist/index.js



/***/ }),

/***/ 5418:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

exports.components={"component---src-pages-404-tsx":function componentSrcPages404Tsx(){return Promise.all(/* import() | component---src-pages-404-tsx */[__webpack_require__.e(351), __webpack_require__.e(218)]).then(__webpack_require__.bind(__webpack_require__, 2224));},"component---src-pages-contact-tsx":function componentSrcPagesContactTsx(){return Promise.all(/* import() | component---src-pages-contact-tsx */[__webpack_require__.e(351), __webpack_require__.e(650)]).then(__webpack_require__.bind(__webpack_require__, 7077));},"component---src-pages-index-tsx":function componentSrcPagesIndexTsx(){return Promise.all(/* import() | component---src-pages-index-tsx */[__webpack_require__.e(351), __webpack_require__.e(691)]).then(__webpack_require__.bind(__webpack_require__, 6854));},"component---src-pages-projects-tsx":function componentSrcPagesProjectsTsx(){return Promise.all(/* import() | component---src-pages-projects-tsx */[__webpack_require__.e(351), __webpack_require__.e(317)]).then(__webpack_require__.bind(__webpack_require__, 8438));}};

/***/ }),

/***/ 4741:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports=[{plugin:__webpack_require__(9603),options:{"plugins":[]}},{plugin:__webpack_require__(1330),options:{"plugins":[]}},{plugin:__webpack_require__(540),options:{"plugins":[]}}];

/***/ }),

/***/ 3092:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var plugins=__webpack_require__(4741);var _require$publicLoader=(__webpack_require__(7649)/* .publicLoader */ .jN),getResourceURLsForPathname=_require$publicLoader.getResourceURLsForPathname,loadPage=_require$publicLoader.loadPage,loadPageSync=_require$publicLoader.loadPageSync;exports.h=function(api,args,defaultReturn,argTransform){if(args===void 0){args={};}// Hooks for gatsby-cypress's API handler
if(false){}var results=plugins.map(function(plugin){if(!plugin.plugin[api]){return undefined;}args.getResourceURLsForPathname=getResourceURLsForPathname;args.loadPage=loadPage;args.loadPageSync=loadPageSync;var result=plugin.plugin[api](args,plugin.options);if(result&&argTransform){args=argTransform({args:args,result:result,plugin:plugin});}return result;});// Filter out undefined results.
results=results.filter(function(result){return typeof result!=="undefined";});if(results.length>0){return results;}else if(defaultReturn){return[defaultReturn];}else{return[];}};exports.I=function(api,args,defaultReturn){return plugins.reduce(function(previous,next){return next.plugin[api]?previous.then(function(){return next.plugin[api](args,next.options);}):previous;},Promise.resolve());};

/***/ }),

/***/ 8299:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ _cache_emitter; }
});

;// CONCATENATED MODULE: ./node_modules/mitt/dist/mitt.es.js
//      
// An event handler can take an optional event argument
// and should not return a value
                                          
                                                               

// An array of all currently registered event handlers for a type
                                            
                                                            
// A map of event types and their corresponding event handlers.
                        
                                 
                                   
  

/** Mitt: Tiny (~200b) functional event emitter / pubsub.
 *  @name mitt
 *  @returns {Mitt}
 */
function mitt(all                 ) {
	all = all || Object.create(null);

	return {
		/**
		 * Register an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to listen for, or `"*"` for all events
		 * @param  {Function} handler Function to call in response to given event
		 * @memberOf mitt
		 */
		on: function on(type        , handler              ) {
			(all[type] || (all[type] = [])).push(handler);
		},

		/**
		 * Remove an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to unregister `handler` from, or `"*"`
		 * @param  {Function} handler Handler function to remove
		 * @memberOf mitt
		 */
		off: function off(type        , handler              ) {
			if (all[type]) {
				all[type].splice(all[type].indexOf(handler) >>> 0, 1);
			}
		},

		/**
		 * Invoke all handlers for the given type.
		 * If present, `"*"` handlers are invoked after type-matched handlers.
		 *
		 * @param {String} type  The event type to invoke
		 * @param {Any} [evt]  Any value (object is recommended and powerful), passed to each handler
		 * @memberOf mitt
		 */
		emit: function emit(type        , evt     ) {
			(all[type] || []).slice().map(function (handler) { handler(evt); });
			(all['*'] || []).slice().map(function (handler) { handler(type, evt); });
		}
	};
}

/* harmony default export */ var mitt_es = (mitt);
//# sourceMappingURL=mitt.es.js.map

;// CONCATENATED MODULE: ./.cache/emitter.js
var emitter=mitt_es();/* harmony default export */ var _cache_emitter = (emitter);

/***/ }),

/***/ 7802:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "UD": function() { return /* binding */ findMatchPath; },
  "Cj": function() { return /* binding */ findPath; },
  "GA": function() { return /* binding */ grabMatchParams; },
  "DS": function() { return /* binding */ setMatchPaths; }
});

// UNUSED EXPORTS: cleanPath

// EXTERNAL MODULE: ./node_modules/@gatsbyjs/reach-router/lib/utils.js
var utils = __webpack_require__(2098);
// EXTERNAL MODULE: ./.cache/strip-prefix.js
var strip_prefix = __webpack_require__(1505);
;// CONCATENATED MODULE: ./.cache/normalize-page-path.js
/* harmony default export */ var normalize_page_path = (function(pathAndSearch){if(pathAndSearch===undefined){return pathAndSearch;}var _pathAndSearch$split=pathAndSearch.split("?"),path=_pathAndSearch$split[0],_pathAndSearch$split$=_pathAndSearch$split[1],search=_pathAndSearch$split$===void 0?"":_pathAndSearch$split$;if(search){search="?"+search;}if(path==="/"){return"/"+search;}if(path.charAt(path.length-1)==="/"){return path.slice(0,-1)+search;}return path+search;});
// EXTERNAL MODULE: ./.cache/redirect-utils.js + 1 modules
var redirect_utils = __webpack_require__(6073);
;// CONCATENATED MODULE: ./.cache/find-path.js
var pathCache=new Map();var matchPaths=[];var trimPathname=function trimPathname(rawPathname){var newRawPathname=rawPathname;var queryIndex=rawPathname.indexOf("?");if(queryIndex!==-1){var _rawPathname$split=rawPathname.split("?"),path=_rawPathname$split[0],qs=_rawPathname$split[1];newRawPathname=path+"?"+encodeURIComponent(qs);}var pathname=decodeURIComponent(newRawPathname);// Remove the pathPrefix from the pathname.
var trimmedPathname=(0,strip_prefix/* default */.Z)(pathname,decodeURIComponent(""))// Remove any hashfragment
.split("#")[0];return trimmedPathname;};function absolutify(path){// If it's already absolute, return as-is
if(path.startsWith("/")||path.startsWith("https://")||path.startsWith("http://")){return path;}// Calculate path relative to current location, adding a trailing slash to
// match behavior of @reach/router
return new URL(path,window.location.href+(window.location.href.endsWith("/")?"":"/")).pathname;}/**
 * Set list of matchPaths
 *
 * @param {Array<{path: string, matchPath: string}>} value collection of matchPaths
 */var setMatchPaths=function setMatchPaths(value){matchPaths=value;};/**
 * Return a matchpath url
 * if `match-paths.json` contains `{ "/foo*": "/page1", ...}`, then
 * `/foo?bar=far` => `/page1`
 *
 * @param {string} rawPathname A raw pathname
 * @return {string|null}
 */var findMatchPath=function findMatchPath(rawPathname){var trimmedPathname=cleanPath(rawPathname);var pickPaths=matchPaths.map(function(_ref){var path=_ref.path,matchPath=_ref.matchPath;return{path:matchPath,originalPath:path};});var path=(0,utils.pick)(pickPaths,trimmedPathname);if(path){return normalize_page_path(path.route.originalPath);}return null;};/**
 * Return a matchpath params from reach/router rules
 * if `match-paths.json` contains `{ ":bar/*foo" }`, and the path is /baz/zaz/zoo
 * then it returns
 *  { bar: baz, foo: zaz/zoo }
 *
 * @param {string} rawPathname A raw pathname
 * @return {object}
 */var grabMatchParams=function grabMatchParams(rawPathname){var trimmedPathname=cleanPath(rawPathname);var pickPaths=matchPaths.map(function(_ref2){var path=_ref2.path,matchPath=_ref2.matchPath;return{path:matchPath,originalPath:path};});var path=(0,utils.pick)(pickPaths,trimmedPathname);if(path){return path.params;}return{};};// Given a raw URL path, returns the cleaned version of it (trim off
// `#` and query params), or if it matches an entry in
// `match-paths.json`, its matched path is returned
//
// E.g. `/foo?bar=far` => `/foo`
//
// Or if `match-paths.json` contains `{ "/foo*": "/page1", ...}`, then
// `/foo?bar=far` => `/page1`
var findPath=function findPath(rawPathname){var trimmedPathname=trimPathname(absolutify(rawPathname));if(pathCache.has(trimmedPathname)){return pathCache.get(trimmedPathname);}var redirect=(0,redirect_utils/* maybeGetBrowserRedirect */.J)(rawPathname);if(redirect){return findPath(redirect.toPath);}var foundPath=findMatchPath(trimmedPathname);if(!foundPath){foundPath=cleanPath(rawPathname);}pathCache.set(trimmedPathname,foundPath);return foundPath;};/**
 * Clean a url and converts /index.html => /
 * E.g. `/foo?bar=far` => `/foo`
 *
 * @param {string} rawPathname A raw pathname
 * @return {string}
 */var cleanPath=function cleanPath(rawPathname){var trimmedPathname=trimPathname(absolutify(rawPathname));var foundPath=trimmedPathname;if(foundPath==="/index.html"){foundPath="/";}foundPath=normalize_page_path(foundPath);return foundPath;};

/***/ }),

/***/ 1597:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B9": function() { return /* binding */ StaticQueryContext; },
/* harmony export */   "rU": function() { return /* reexport safe */ gatsby_link__WEBPACK_IMPORTED_MODULE_1__["default"]; }
/* harmony export */ });
/* unused harmony exports graphql, StaticQuery, useStaticQuery, prefetchPathname */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8037);
/* harmony import */ var gatsby_react_router_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9679);
/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2743);
/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_page_renderer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7649);
/* harmony import */ var gatsby_script__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9848);
var prefetchPathname=_loader__WEBPACK_IMPORTED_MODULE_4__/* ["default"].enqueue */ .ZP.enqueue;var StaticQueryContext=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function StaticQueryDataRenderer(_ref){var staticQueryData=_ref.staticQueryData,data=_ref.data,query=_ref.query,render=_ref.render;var finalData=data?data.data:staticQueryData[query]&&staticQueryData[query].data;return/*#__PURE__*/React.createElement(React.Fragment,null,finalData&&render(finalData),!finalData&&/*#__PURE__*/React.createElement("div",null,"Loading (StaticQuery)"));}var StaticQuery=function StaticQuery(props){var data=props.data,query=props.query,render=props.render,children=props.children;return/*#__PURE__*/React.createElement(StaticQueryContext.Consumer,null,function(staticQueryData){return/*#__PURE__*/React.createElement(StaticQueryDataRenderer,{data:data,query:query,render:render||children,staticQueryData:staticQueryData});});};var useStaticQuery=function useStaticQuery(query){var _context$query;if(typeof React.useContext!=="function"&&"production"==="development"){}var context=React.useContext(StaticQueryContext);// query is a stringified number like `3303882` when wrapped with graphql, If a user forgets
// to wrap the query in a grqphql, then casting it to a Number results in `NaN` allowing us to
// catch the misuse of the API and give proper direction
if(isNaN(Number(query))){throw new Error("useStaticQuery was called with a string but expects to be called using `graphql`. Try this:\n\nimport { useStaticQuery, graphql } from 'gatsby';\n\nuseStaticQuery(graphql`"+query+"`);\n");}if((_context$query=context[query])!==null&&_context$query!==void 0&&_context$query.data){return context[query].data;}else{throw new Error("The result of this StaticQuery could not be fetched.\n\n"+"This is likely a bug in Gatsby and if refreshing the page does not fix it, "+"please open an issue in https://github.com/gatsbyjs/gatsby/issues");}};function graphql(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls "+"are supposed to only be evaluated at compile time, and then compiled away. "+"Unfortunately, something went wrong and the query was left in the compiled code.\n\n"+"Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.");}

/***/ }),

/***/ 7649:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "uQ": function() { return /* binding */ PageResourceStatus; },
  "kL": function() { return /* binding */ ProdLoader; },
  "ZP": function() { return /* binding */ loader; },
  "hs": function() { return /* binding */ getStaticQueryResults; },
  "jN": function() { return /* binding */ publicLoader; },
  "N1": function() { return /* binding */ setLoader; }
});

// UNUSED EXPORTS: BaseLoader

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js + 1 modules
var inheritsLoose = __webpack_require__(5750);
;// CONCATENATED MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}
;// CONCATENATED MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
;// CONCATENATED MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/iterableToArray.js
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
;// CONCATENATED MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
;// CONCATENATED MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
;// CONCATENATED MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js




function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
;// CONCATENATED MODULE: ./.cache/prefetch.js
var support=function support(feature){if(typeof document==="undefined"){return false;}var fakeLink=document.createElement("link");try{if(fakeLink.relList&&typeof fakeLink.relList.supports==="function"){return fakeLink.relList.supports(feature);}}catch(err){return false;}return false;};var linkPrefetchStrategy=function linkPrefetchStrategy(url,options){return new Promise(function(resolve,reject){if(typeof document==="undefined"){reject();return;}var link=document.createElement("link");link.setAttribute("rel","prefetch");link.setAttribute("href",url);Object.keys(options).forEach(function(key){link.setAttribute(key,options[key]);});link.onload=resolve;link.onerror=reject;var parentElement=document.getElementsByTagName("head")[0]||document.getElementsByName("script")[0].parentNode;parentElement.appendChild(link);});};var xhrPrefetchStrategy=function xhrPrefetchStrategy(url){return new Promise(function(resolve,reject){var req=new XMLHttpRequest();req.open("GET",url,true);req.onload=function(){if(req.status===200){resolve();}else{reject();}};req.send(null);});};var supportedPrefetchStrategy=support("prefetch")?linkPrefetchStrategy:xhrPrefetchStrategy;var preFetched={};var prefetch=function prefetch(url,options){return new Promise(function(resolve){if(preFetched[url]){resolve();return;}supportedPrefetchStrategy(url,options).then(function(){resolve();preFetched[url]=true;}).catch(function(){});// 404s are logged to the console anyway
});};/* harmony default export */ var _cache_prefetch = (prefetch);
// EXTERNAL MODULE: ./.cache/emitter.js + 1 modules
var emitter = __webpack_require__(8299);
// EXTERNAL MODULE: ./.cache/find-path.js + 1 modules
var find_path = __webpack_require__(7802);
;// CONCATENATED MODULE: ./.cache/loader.js
/**
 * Available resource loading statuses
 */var PageResourceStatus={/**
   * At least one of critical resources failed to load
   */Error:"error",/**
   * Resources loaded successfully
   */Success:"success"};var preferDefault=function preferDefault(m){return m&&m.default||m;};var stripSurroundingSlashes=function stripSurroundingSlashes(s){s=s[0]==="/"?s.slice(1):s;s=s.endsWith("/")?s.slice(0,-1):s;return s;};var createPageDataUrl=function createPageDataUrl(rawPath){var _rawPath$split=rawPath.split("?"),path=_rawPath$split[0],maybeSearch=_rawPath$split[1];var fixedPath=path==="/"?"index":stripSurroundingSlashes(path);return ""+"/page-data/"+fixedPath+"/page-data.json"+(maybeSearch?"?"+maybeSearch:"");};function doFetch(url,method){if(method===void 0){method="GET";}return new Promise(function(resolve){var req=new XMLHttpRequest();req.open(method,url,true);req.onreadystatechange=function(){if(req.readyState==4){resolve(req);}};req.send(null);});}var doesConnectionSupportPrefetch=function doesConnectionSupportPrefetch(){if("connection"in navigator&&typeof navigator.connection!=="undefined"){if((navigator.connection.effectiveType||"").includes("2g")){return false;}if(navigator.connection.saveData){return false;}}return true;};// Regex that matches common search crawlers
var BOT_REGEX=/bot|crawler|spider|crawling/i;var toPageResources=function toPageResources(pageData,component){if(component===void 0){component=null;}var page={componentChunkName:pageData.componentChunkName,path:pageData.path,webpackCompilationHash:pageData.webpackCompilationHash,matchPath:pageData.matchPath,staticQueryHashes:pageData.staticQueryHashes,getServerDataError:pageData.getServerDataError};return{component:component,json:pageData.result,page:page};};var BaseLoader=/*#__PURE__*/function(){function BaseLoader(loadComponent,matchPaths){this.inFlightNetworkRequests=new Map();// Map of pagePath -> Page. Where Page is an object with: {
//   status: PageResourceStatus.Success || PageResourceStatus.Error,
//   payload: PageResources, // undefined if PageResourceStatus.Error
// }
// PageResources is {
//   component,
//   json: pageData.result,
//   page: {
//     componentChunkName,
//     path,
//     webpackCompilationHash,
//     staticQueryHashes
//   },
//   staticQueryResults
// }
this.pageDb=new Map();this.inFlightDb=new Map();this.staticQueryDb={};this.pageDataDb=new Map();this.isPrefetchQueueRunning=false;this.prefetchQueued=[];this.prefetchTriggered=new Set();this.prefetchCompleted=new Set();this.loadComponent=loadComponent;(0,find_path/* setMatchPaths */.DS)(matchPaths);}var _proto=BaseLoader.prototype;_proto.memoizedGet=function memoizedGet(url){var _this=this;var inFlightPromise=this.inFlightNetworkRequests.get(url);if(!inFlightPromise){inFlightPromise=doFetch(url,"GET");this.inFlightNetworkRequests.set(url,inFlightPromise);}// Prefer duplication with then + catch over .finally to prevent problems in ie11 + firefox
return inFlightPromise.then(function(response){_this.inFlightNetworkRequests.delete(url);return response;}).catch(function(err){_this.inFlightNetworkRequests.delete(url);throw err;});};_proto.setApiRunner=function setApiRunner(apiRunner){this.apiRunner=apiRunner;this.prefetchDisabled=apiRunner("disableCorePrefetching").some(function(a){return a;});};_proto.fetchPageDataJson=function fetchPageDataJson(loadObj){var _this2=this;var pagePath=loadObj.pagePath,_loadObj$retries=loadObj.retries,retries=_loadObj$retries===void 0?0:_loadObj$retries;var url=createPageDataUrl(pagePath);return this.memoizedGet(url).then(function(req){var status=req.status,responseText=req.responseText;// Handle 200
if(status===200){try{var jsonPayload=JSON.parse(responseText);if(jsonPayload.path===undefined){throw new Error("not a valid pageData response");}var maybeSearch=pagePath.split("?")[1];if(maybeSearch&&!jsonPayload.path.includes(maybeSearch)){jsonPayload.path+="?"+maybeSearch;}return Object.assign(loadObj,{status:PageResourceStatus.Success,payload:jsonPayload});}catch(err){// continue regardless of error
}}// Handle 404
if(status===404||status===200){// If the request was for a 404/500 page and it doesn't exist, we're done
if(pagePath==="/404.html"||pagePath==="/500.html"){return Object.assign(loadObj,{status:PageResourceStatus.Error});}// Need some code here to cache the 404 request. In case
// multiple loadPageDataJsons result in 404s
return _this2.fetchPageDataJson(Object.assign(loadObj,{pagePath:"/404.html",notFound:true}));}// handle 500 response (Unrecoverable)
if(status===500){return _this2.fetchPageDataJson(Object.assign(loadObj,{pagePath:"/500.html",internalServerError:true}));}// Handle everything else, including status === 0, and 503s. Should retry
if(retries<3){return _this2.fetchPageDataJson(Object.assign(loadObj,{retries:retries+1}));}// Retried 3 times already, result is an error.
return Object.assign(loadObj,{status:PageResourceStatus.Error});});};_proto.loadPageDataJson=function loadPageDataJson(rawPath){var _this3=this;var pagePath=(0,find_path/* findPath */.Cj)(rawPath);if(this.pageDataDb.has(pagePath)){var pageData=this.pageDataDb.get(pagePath);if(true){return Promise.resolve(pageData);}}return this.fetchPageDataJson({pagePath:pagePath}).then(function(pageData){_this3.pageDataDb.set(pagePath,pageData);return pageData;});};_proto.findMatchPath=function findMatchPath(rawPath){return (0,find_path/* findMatchPath */.UD)(rawPath);}// TODO check all uses of this and whether they use undefined for page resources not exist
;_proto.loadPage=function loadPage(rawPath){var _this4=this;var pagePath=(0,find_path/* findPath */.Cj)(rawPath);if(this.pageDb.has(pagePath)){var page=this.pageDb.get(pagePath);if(true){if(page.error){return{error:page.error,status:page.status};}return Promise.resolve(page.payload);}}if(this.inFlightDb.has(pagePath)){return this.inFlightDb.get(pagePath);}var inFlightPromise=Promise.all([this.loadAppData(),this.loadPageDataJson(pagePath)]).then(function(allData){var result=allData[1];if(result.status===PageResourceStatus.Error){return{status:PageResourceStatus.Error};}var pageData=result.payload;var _pageData=pageData,componentChunkName=_pageData.componentChunkName,_pageData$staticQuery=_pageData.staticQueryHashes,staticQueryHashes=_pageData$staticQuery===void 0?[]:_pageData$staticQuery;var finalResult={};var componentChunkPromise=_this4.loadComponent(componentChunkName).then(function(component){finalResult.createdAt=new Date();var pageResources;if(!component||component instanceof Error){finalResult.status=PageResourceStatus.Error;finalResult.error=component;}else{finalResult.status=PageResourceStatus.Success;if(result.notFound===true){finalResult.notFound=true;}pageData=Object.assign(pageData,{webpackCompilationHash:allData[0]?allData[0].webpackCompilationHash:""});pageResources=toPageResources(pageData,component);}// undefined if final result is an error
return pageResources;});var staticQueryBatchPromise=Promise.all(staticQueryHashes.map(function(staticQueryHash){// Check for cache in case this static query result has already been loaded
if(_this4.staticQueryDb[staticQueryHash]){var jsonPayload=_this4.staticQueryDb[staticQueryHash];return{staticQueryHash:staticQueryHash,jsonPayload:jsonPayload};}return _this4.memoizedGet(""+"/page-data/sq/d/"+staticQueryHash+".json").then(function(req){var jsonPayload=JSON.parse(req.responseText);return{staticQueryHash:staticQueryHash,jsonPayload:jsonPayload};}).catch(function(){throw new Error("We couldn't load \""+""+"/page-data/sq/d/"+staticQueryHash+".json\"");});})).then(function(staticQueryResults){var staticQueryResultsMap={};staticQueryResults.forEach(function(_ref){var staticQueryHash=_ref.staticQueryHash,jsonPayload=_ref.jsonPayload;staticQueryResultsMap[staticQueryHash]=jsonPayload;_this4.staticQueryDb[staticQueryHash]=jsonPayload;});return staticQueryResultsMap;});return Promise.all([componentChunkPromise,staticQueryBatchPromise]).then(function(_ref2){var pageResources=_ref2[0],staticQueryResults=_ref2[1];var payload;if(pageResources){payload=Object.assign({},pageResources,{staticQueryResults:staticQueryResults});finalResult.payload=payload;emitter/* default.emit */.Z.emit("onPostLoadPageResources",{page:payload,pageResources:payload});}_this4.pageDb.set(pagePath,finalResult);if(finalResult.error){return{error:finalResult.error,status:finalResult.status};}return payload;})// when static-query fail to load we throw a better error
.catch(function(err){return{error:err,status:PageResourceStatus.Error};});});inFlightPromise.then(function(){_this4.inFlightDb.delete(pagePath);}).catch(function(error){_this4.inFlightDb.delete(pagePath);throw error;});this.inFlightDb.set(pagePath,inFlightPromise);return inFlightPromise;}// returns undefined if the page does not exists in cache
;_proto.loadPageSync=function loadPageSync(rawPath,options){if(options===void 0){options={};}var pagePath=(0,find_path/* findPath */.Cj)(rawPath);if(this.pageDb.has(pagePath)){var _options;var pageData=this.pageDb.get(pagePath);if(pageData.payload){return pageData.payload;}if((_options=options)!==null&&_options!==void 0&&_options.withErrorDetails){return{error:pageData.error,status:pageData.status};}}return undefined;};_proto.shouldPrefetch=function shouldPrefetch(pagePath){// Skip prefetching if we know user is on slow or constrained connection
if(!doesConnectionSupportPrefetch()){return false;}// Don't prefetch if this is a crawler bot
if(navigator.userAgent&&BOT_REGEX.test(navigator.userAgent)){return false;}// Check if the page exists.
if(this.pageDb.has(pagePath)){return false;}return true;};_proto.prefetch=function prefetch(pagePath){var _this5=this;if(!this.shouldPrefetch(pagePath)){return{then:function then(resolve){return resolve(false);},abort:function abort(){}};}if(this.prefetchTriggered.has(pagePath)){return{then:function then(resolve){return resolve(true);},abort:function abort(){}};}var defer={resolve:null,reject:null,promise:null};defer.promise=new Promise(function(resolve,reject){defer.resolve=resolve;defer.reject=reject;});this.prefetchQueued.push([pagePath,defer]);var abortC=new AbortController();abortC.signal.addEventListener("abort",function(){var index=_this5.prefetchQueued.findIndex(function(_ref3){var p=_ref3[0];return p===pagePath;});// remove from the queue
if(index!==-1){_this5.prefetchQueued.splice(index,1);}});if(!this.isPrefetchQueueRunning){this.isPrefetchQueueRunning=true;setTimeout(function(){_this5._processNextPrefetchBatch();},3000);}return{then:function then(resolve,reject){return defer.promise.then(resolve,reject);},abort:abortC.abort.bind(abortC)};};_proto._processNextPrefetchBatch=function _processNextPrefetchBatch(){var _this6=this;var idleCallback=window.requestIdleCallback||function(cb){return setTimeout(cb,0);};idleCallback(function(){var toPrefetch=_this6.prefetchQueued.splice(0,4);var prefetches=Promise.all(toPrefetch.map(function(_ref4){var pagePath=_ref4[0],dPromise=_ref4[1];// Tell plugins with custom prefetching logic that they should start
// prefetching this path.
if(!_this6.prefetchTriggered.has(pagePath)){_this6.apiRunner("onPrefetchPathname",{pathname:pagePath});_this6.prefetchTriggered.add(pagePath);}// If a plugin has disabled core prefetching, stop now.
if(_this6.prefetchDisabled){return dPromise.resolve(false);}return _this6.doPrefetch((0,find_path/* findPath */.Cj)(pagePath)).then(function(){if(!_this6.prefetchCompleted.has(pagePath)){_this6.apiRunner("onPostPrefetchPathname",{pathname:pagePath});_this6.prefetchCompleted.add(pagePath);}dPromise.resolve(true);});}));if(_this6.prefetchQueued.length){prefetches.then(function(){setTimeout(function(){_this6._processNextPrefetchBatch();},3000);});}else{_this6.isPrefetchQueueRunning=false;}});};_proto.doPrefetch=function doPrefetch(pagePath){var _this7=this;var pageDataUrl=createPageDataUrl(pagePath);return _cache_prefetch(pageDataUrl,{crossOrigin:"anonymous",as:"fetch"}).then(function(){return(// This was just prefetched, so will return a response from
// the cache instead of making another request to the server
_this7.loadPageDataJson(pagePath));});};_proto.hovering=function hovering(rawPath){this.loadPage(rawPath);};_proto.getResourceURLsForPathname=function getResourceURLsForPathname(rawPath){var pagePath=(0,find_path/* findPath */.Cj)(rawPath);var page=this.pageDataDb.get(pagePath);if(page){var pageResources=toPageResources(page.payload);return[].concat(_toConsumableArray(createComponentUrls(pageResources.page.componentChunkName)),[createPageDataUrl(pagePath)]);}else{return null;}};_proto.isPageNotFound=function isPageNotFound(rawPath){var pagePath=(0,find_path/* findPath */.Cj)(rawPath);var page=this.pageDb.get(pagePath);return!page||page.notFound;};_proto.loadAppData=function loadAppData(retries){var _this8=this;if(retries===void 0){retries=0;}return this.memoizedGet(""+"/page-data/app-data.json").then(function(req){var status=req.status,responseText=req.responseText;var appData;if(status!==200&&retries<3){// Retry 3 times incase of non-200 responses
return _this8.loadAppData(retries+1);}// Handle 200
if(status===200){try{var jsonPayload=JSON.parse(responseText);if(jsonPayload.webpackCompilationHash===undefined){throw new Error("not a valid app-data response");}appData=jsonPayload;}catch(err){// continue regardless of error
}}return appData;});};return BaseLoader;}();var createComponentUrls=function createComponentUrls(componentChunkName){return(window.___chunkMapping[componentChunkName]||[]).map(function(chunk){return ""+chunk;});};var ProdLoader=/*#__PURE__*/function(_BaseLoader){(0,inheritsLoose/* default */.Z)(ProdLoader,_BaseLoader);function ProdLoader(asyncRequires,matchPaths,pageData){var _this9;var loadComponent=function loadComponent(chunkName){if(!asyncRequires.components[chunkName]){throw new Error("We couldn't find the correct component chunk with the name "+chunkName);}return asyncRequires.components[chunkName]().then(preferDefault)// loader will handle the case when component is error
.catch(function(err){return err;});};_this9=_BaseLoader.call(this,loadComponent,matchPaths)||this;if(pageData){_this9.pageDataDb.set((0,find_path/* findPath */.Cj)(pageData.path),{pagePath:pageData.path,payload:pageData,status:"success"});}return _this9;}var _proto2=ProdLoader.prototype;_proto2.doPrefetch=function doPrefetch(pagePath){return _BaseLoader.prototype.doPrefetch.call(this,pagePath).then(function(result){if(result.status!==PageResourceStatus.Success){return Promise.resolve();}var pageData=result.payload;var chunkName=pageData.componentChunkName;var componentUrls=createComponentUrls(chunkName);return Promise.all(componentUrls.map(_cache_prefetch)).then(function(){return pageData;});});};_proto2.loadPageDataJson=function loadPageDataJson(rawPath){return _BaseLoader.prototype.loadPageDataJson.call(this,rawPath).then(function(data){if(data.notFound){// check if html file exist using HEAD request:
// if it does we should navigate to it instead of showing 404
return doFetch(rawPath,"HEAD").then(function(req){if(req.status===200){// page (.html file) actually exist (or we asked for 404 )
// returning page resources status as errored to trigger
// regular browser navigation to given page
return{status:PageResourceStatus.Error};}// if HEAD request wasn't 200, return notFound result
// and show 404 page
return data;});}return data;});};return ProdLoader;}(BaseLoader);var instance;var setLoader=function setLoader(_loader){instance=_loader;};var publicLoader={enqueue:function enqueue(rawPath){return instance.prefetch(rawPath);},// Real methods
getResourceURLsForPathname:function getResourceURLsForPathname(rawPath){return instance.getResourceURLsForPathname(rawPath);},loadPage:function loadPage(rawPath){return instance.loadPage(rawPath);},// TODO add deprecation to v4 so people use withErrorDetails and then we can remove in v5 and change default behaviour
loadPageSync:function loadPageSync(rawPath,options){if(options===void 0){options={};}return instance.loadPageSync(rawPath,options);},prefetch:function prefetch(rawPath){return instance.prefetch(rawPath);},isPageNotFound:function isPageNotFound(rawPath){return instance.isPageNotFound(rawPath);},hovering:function hovering(rawPath){return instance.hovering(rawPath);},loadAppData:function loadAppData(){return instance.loadAppData();}};/* harmony default export */ var loader = (publicLoader);function getStaticQueryResults(){if(instance){return instance.staticQueryDb;}else{return{};}}

/***/ }),

/***/ 8522:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5750);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _api_runner_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3092);
/* harmony import */ var _find_path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7802);
// Renders page
var PageRenderer=/*#__PURE__*/function(_React$Component){(0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(PageRenderer,_React$Component);function PageRenderer(){return _React$Component.apply(this,arguments)||this;}var _proto=PageRenderer.prototype;_proto.render=function render(){var props=Object.assign({},this.props,{params:Object.assign({},(0,_find_path__WEBPACK_IMPORTED_MODULE_2__/* .grabMatchParams */ .GA)(this.props.location.pathname),this.props.pageResources.json.pageContext.__params)});var pageElement=/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(this.props.pageResources.component,Object.assign({},props,{key:this.props.path||this.props.pageResources.page.path}));var wrappedPage=(0,_api_runner_browser__WEBPACK_IMPORTED_MODULE_1__/* .apiRunner */ .h)("wrapPageElement",{element:pageElement,props:props},pageElement,function(_ref){var result=_ref.result;return{element:result,props:props};}).pop();return wrappedPage;};return PageRenderer;}(react__WEBPACK_IMPORTED_MODULE_0__.Component);/* harmony default export */ __webpack_exports__["Z"] = (PageRenderer);

/***/ }),

/***/ 5824:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js + 1 modules
var inheritsLoose = __webpack_require__(5750);
// EXTERNAL MODULE: ./.cache/api-runner-browser.js
var api_runner_browser = __webpack_require__(3092);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/@gatsbyjs/reach-router/es/index.js + 2 modules
var es = __webpack_require__(9499);
// EXTERNAL MODULE: ./node_modules/gatsby-react-router-scroll/index.js
var gatsby_react_router_scroll = __webpack_require__(9679);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js
var gatsby_browser_entry = __webpack_require__(1597);
// EXTERNAL MODULE: ./.cache/loader.js + 7 modules
var loader = __webpack_require__(7649);
// EXTERNAL MODULE: ./.cache/redirect-utils.js + 1 modules
var redirect_utils = __webpack_require__(6073);
// EXTERNAL MODULE: ./.cache/emitter.js + 1 modules
var emitter = __webpack_require__(8299);
;// CONCATENATED MODULE: ./.cache/route-announcer-props.js
// This is extracted to separate module because it's shared
// between browser and SSR code
var RouteAnnouncerProps={id:"gatsby-announcer",style:{position:"absolute",top:0,width:1,height:1,padding:0,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",border:0},"aria-live":"assertive","aria-atomic":"true"};
// EXTERNAL MODULE: ./node_modules/@gatsbyjs/reach-router/lib/history.js
var lib_history = __webpack_require__(2393);
// EXTERNAL MODULE: ./node_modules/gatsby-link/index.js
var gatsby_link = __webpack_require__(8037);
;// CONCATENATED MODULE: ./.cache/navigation.js
function maybeRedirect(pathname){var redirect=(0,redirect_utils/* maybeGetBrowserRedirect */.J)(pathname);var _window$location=window.location,hash=_window$location.hash,search=_window$location.search;if(redirect!=null){window.___replace(redirect.toPath+search+hash);return true;}else{return false;}}// Catch unhandled chunk loading errors and force a restart of the app.
var nextRoute="";window.addEventListener("unhandledrejection",function(event){if(/loading chunk \d* failed./i.test(event.reason)){if(nextRoute){window.location.pathname=nextRoute;}}});var onPreRouteUpdate=function onPreRouteUpdate(location,prevLocation){if(!maybeRedirect(location.pathname)){nextRoute=location.pathname;(0,api_runner_browser/* apiRunner */.h)("onPreRouteUpdate",{location:location,prevLocation:prevLocation});}};var onRouteUpdate=function onRouteUpdate(location,prevLocation){if(!maybeRedirect(location.pathname)){(0,api_runner_browser/* apiRunner */.h)("onRouteUpdate",{location:location,prevLocation:prevLocation});if(false){}}};var navigation_navigate=function navigate(to,options){if(options===void 0){options={};}// Support forward/backward navigation with numbers
// navigate(-2) (jumps back 2 history steps)
// navigate(2)  (jumps forward 2 history steps)
if(typeof to==="number"){lib_history/* globalHistory.navigate */.V5.navigate(to);return;}var _parsePath=(0,gatsby_link.parsePath)(to),pathname=_parsePath.pathname,search=_parsePath.search,hash=_parsePath.hash;var redirect=(0,redirect_utils/* maybeGetBrowserRedirect */.J)(pathname);// If we're redirecting, just replace the passed in pathname
// to the one we want to redirect to.
if(redirect){to=redirect.toPath+search+hash;}// If we had a service worker update, no matter the path, reload window and
// reset the pathname whitelist
if(window.___swUpdated){window.location=pathname+search+hash;return;}// Start a timer to wait for a second before transitioning and showing a
// loader in case resources aren't around yet.
var timeoutId=setTimeout(function(){emitter/* default.emit */.Z.emit("onDelayedLoadPageResources",{pathname:pathname});(0,api_runner_browser/* apiRunner */.h)("onRouteUpdateDelayed",{location:window.location});},1000);loader/* default.loadPage */.ZP.loadPage(pathname+search).then(function(pageResources){// If no page resources, then refresh the page
// Do this, rather than simply `window.location.reload()`, so that
// pressing the back/forward buttons work - otherwise when pressing
// back, the browser will just change the URL and expect JS to handle
// the change, which won't always work since it might not be a Gatsby
// page.
if(!pageResources||pageResources.status===loader/* PageResourceStatus.Error */.uQ.Error){window.history.replaceState({},"",location.href);window.location=pathname;clearTimeout(timeoutId);return;}// If the loaded page has a different compilation hash to the
// window, then a rebuild has occurred on the server. Reload.
if( true&&pageResources){if(pageResources.page.webpackCompilationHash!==window.___webpackCompilationHash){// Purge plugin-offline cache
if("serviceWorker"in navigator&&navigator.serviceWorker.controller!==null&&navigator.serviceWorker.controller.state==="activated"){navigator.serviceWorker.controller.postMessage({gatsbyApi:"clearPathResources"});}window.location=pathname+search+hash;}}(0,es.navigate)(to,options);clearTimeout(timeoutId);});};function shouldUpdateScroll(prevRouterProps,_ref){var _this=this;var location=_ref.location;var pathname=location.pathname,hash=location.hash;var results=(0,api_runner_browser/* apiRunner */.h)("shouldUpdateScroll",{prevRouterProps:prevRouterProps,// `pathname` for backwards compatibility
pathname:pathname,routerProps:{location:location},getSavedScrollPosition:function getSavedScrollPosition(args){return[0,// FIXME this is actually a big code smell, we should fix this
// eslint-disable-next-line @babel/no-invalid-this
_this._stateStorage.read(args,args.key)];}});if(results.length>0){// Use the latest registered shouldUpdateScroll result, this allows users to override plugin's configuration
// @see https://github.com/gatsbyjs/gatsby/issues/12038
return results[results.length-1];}if(prevRouterProps){var oldPathname=prevRouterProps.location.pathname;if(oldPathname===pathname){// Scroll to element if it exists, if it doesn't, or no hash is provided,
// scroll to top.
return hash?decodeURI(hash.slice(1)):[0,0];}}return true;}function init(){// The "scroll-behavior" package expects the "action" to be on the location
// object so let's copy it over.
lib_history/* globalHistory.listen */.V5.listen(function(args){args.location.action=args.action;});window.___push=function(to){return navigation_navigate(to,{replace:false});};window.___replace=function(to){return navigation_navigate(to,{replace:true});};window.___navigate=function(to,options){return navigation_navigate(to,options);};}var RouteAnnouncer=/*#__PURE__*/function(_React$Component){(0,inheritsLoose/* default */.Z)(RouteAnnouncer,_React$Component);function RouteAnnouncer(props){var _this2;_this2=_React$Component.call(this,props)||this;_this2.announcementRef=/*#__PURE__*/react.createRef();return _this2;}var _proto=RouteAnnouncer.prototype;_proto.componentDidUpdate=function componentDidUpdate(prevProps,nextProps){var _this3=this;requestAnimationFrame(function(){var pageName="new page at "+_this3.props.location.pathname;if(document.title){pageName=document.title;}var pageHeadings=document.querySelectorAll("#gatsby-focus-wrapper h1");if(pageHeadings&&pageHeadings.length){pageName=pageHeadings[0].textContent;}var newAnnouncement="Navigated to "+pageName;if(_this3.announcementRef.current){var oldAnnouncement=_this3.announcementRef.current.innerText;if(oldAnnouncement!==newAnnouncement){_this3.announcementRef.current.innerText=newAnnouncement;}}});};_proto.render=function render(){return/*#__PURE__*/react.createElement("div",Object.assign({},RouteAnnouncerProps,{ref:this.announcementRef}));};return RouteAnnouncer;}(react.Component);var compareLocationProps=function compareLocationProps(prevLocation,nextLocation){var _prevLocation$state,_nextLocation$state;if(prevLocation.href!==nextLocation.href){return true;}if((prevLocation===null||prevLocation===void 0?void 0:(_prevLocation$state=prevLocation.state)===null||_prevLocation$state===void 0?void 0:_prevLocation$state.key)!==(nextLocation===null||nextLocation===void 0?void 0:(_nextLocation$state=nextLocation.state)===null||_nextLocation$state===void 0?void 0:_nextLocation$state.key)){return true;}return false;};// Fire on(Pre)RouteUpdate APIs
var RouteUpdates=/*#__PURE__*/function(_React$Component2){(0,inheritsLoose/* default */.Z)(RouteUpdates,_React$Component2);function RouteUpdates(props){var _this4;_this4=_React$Component2.call(this,props)||this;onPreRouteUpdate(props.location,null);return _this4;}var _proto2=RouteUpdates.prototype;_proto2.componentDidMount=function componentDidMount(){onRouteUpdate(this.props.location,null);};_proto2.shouldComponentUpdate=function shouldComponentUpdate(prevProps){if(compareLocationProps(prevProps.location,this.props.location)){onPreRouteUpdate(this.props.location,prevProps.location);return true;}return false;};_proto2.componentDidUpdate=function componentDidUpdate(prevProps){if(compareLocationProps(prevProps.location,this.props.location)){onRouteUpdate(this.props.location,prevProps.location);}};_proto2.render=function render(){return/*#__PURE__*/react.createElement(react.Fragment,null,this.props.children,/*#__PURE__*/react.createElement(RouteAnnouncer,{location:location}));};return RouteUpdates;}(react.Component);
// EXTERNAL MODULE: ./.cache/page-renderer.js
var page_renderer = __webpack_require__(8522);
// EXTERNAL MODULE: ./.cache/_this_is_virtual_fs_path_/$virtual/async-requires.js
var async_requires = __webpack_require__(5418);
;// CONCATENATED MODULE: ./node_modules/shallow-compare/es/index.js
// Pulled from react-compat
// https://github.com/developit/preact-compat/blob/7c5de00e7c85e2ffd011bf3af02899b63f699d3a/src/index.js#L349
function shallowDiffers(a, b) {
  for (var i in a) {
    if (!(i in b)) return true;
  }for (var _i in b) {
    if (a[_i] !== b[_i]) return true;
  }return false;
}

/* harmony default export */ var shallow_compare_es = (function (instance, nextProps, nextState) {
  return shallowDiffers(instance.props, nextProps) || shallowDiffers(instance.state, nextState);
});
;// CONCATENATED MODULE: ./.cache/ensure-resources.js
var EnsureResources=/*#__PURE__*/function(_React$Component){(0,inheritsLoose/* default */.Z)(EnsureResources,_React$Component);function EnsureResources(props){var _this;_this=_React$Component.call(this)||this;var location=props.location,pageResources=props.pageResources;_this.state={location:Object.assign({},location),pageResources:pageResources||loader/* default.loadPageSync */.ZP.loadPageSync(location.pathname+location.search,{withErrorDetails:true})};return _this;}EnsureResources.getDerivedStateFromProps=function getDerivedStateFromProps(_ref,prevState){var location=_ref.location;if(prevState.location.href!==location.href){var pageResources=loader/* default.loadPageSync */.ZP.loadPageSync(location.pathname+location.search,{withErrorDetails:true});return{pageResources:pageResources,location:Object.assign({},location)};}return{location:Object.assign({},location)};};var _proto=EnsureResources.prototype;_proto.loadResources=function loadResources(rawPath){var _this2=this;loader/* default.loadPage */.ZP.loadPage(rawPath).then(function(pageResources){if(pageResources&&pageResources.status!==loader/* PageResourceStatus.Error */.uQ.Error){_this2.setState({location:Object.assign({},window.location),pageResources:pageResources});}else{window.history.replaceState({},"",location.href);window.location=rawPath;}});};_proto.shouldComponentUpdate=function shouldComponentUpdate(nextProps,nextState){// Always return false if we're missing resources.
if(!nextState.pageResources){this.loadResources(nextProps.location.pathname+nextProps.location.search);return false;}if(false){}// Check if the component or json have changed.
if(this.state.pageResources!==nextState.pageResources){return true;}if(this.state.pageResources.component!==nextState.pageResources.component){return true;}if(this.state.pageResources.json!==nextState.pageResources.json){return true;}// Check if location has changed on a page using internal routing
// via matchPath configuration.
if(this.state.location.key!==nextState.location.key&&nextState.pageResources.page&&(nextState.pageResources.page.matchPath||nextState.pageResources.page.path)){return true;}return shallow_compare_es(this,nextProps,nextState);};_proto.render=function render(){if(false){ var message, _this$state$pageResou; }return this.props.children(this.state);};return EnsureResources;}(react.Component);/* harmony default export */ var ensure_resources = (EnsureResources);
// EXTERNAL MODULE: ./.cache/strip-prefix.js
var strip_prefix = __webpack_require__(1505);
;// CONCATENATED MODULE: ./.cache/_this_is_virtual_fs_path_/$virtual/match-paths.json
var match_paths_namespaceObject = [];
;// CONCATENATED MODULE: ./.cache/production-app.js
/* global HAS_REACT_18 */// Generated during bootstrap
var production_app_loader=new loader/* ProdLoader */.kL(async_requires,match_paths_namespaceObject,window.pageData);(0,loader/* setLoader */.N1)(production_app_loader);production_app_loader.setApiRunner(api_runner_browser/* apiRunner */.h);var reactHydrate;var reactRender;if(true){var reactDomClient=__webpack_require__(745);reactRender=function reactRender(Component,el){return reactDomClient.createRoot(el).render(Component);};reactHydrate=function reactHydrate(Component,el){return reactDomClient.hydrateRoot(el,Component);};}else{ var _reactDomClient; }window.asyncRequires=async_requires;window.___emitter=emitter/* default */.Z;window.___loader=loader/* publicLoader */.jN;init();var reloadStorageKey="gatsby-reload-compilation-hash-match";(0,api_runner_browser/* apiRunnerAsync */.I)("onClientEntry").then(function(){// Let plugins register a service worker. The plugin just needs
// to return true.
if((0,api_runner_browser/* apiRunner */.h)("registerServiceWorker").filter(Boolean).length>0){__webpack_require__(9939);}// In gatsby v2 if Router is used in page using matchPaths
// paths need to contain full path.
// For example:
//   - page have `/app/*` matchPath
//   - inside template user needs to use `/app/xyz` as path
// Resetting `basepath`/`baseuri` keeps current behaviour
// to not introduce breaking change.
// Remove this in v3
var RouteHandler=function RouteHandler(props){return/*#__PURE__*/react.createElement(es.BaseContext.Provider,{value:{baseuri:"/",basepath:"/"}},/*#__PURE__*/react.createElement(page_renderer/* default */.Z,props));};var DataContext=/*#__PURE__*/react.createContext({});var GatsbyRoot=/*#__PURE__*/function(_React$Component){(0,inheritsLoose/* default */.Z)(GatsbyRoot,_React$Component);function GatsbyRoot(){return _React$Component.apply(this,arguments)||this;}var _proto=GatsbyRoot.prototype;_proto.render=function render(){var children=this.props.children;return/*#__PURE__*/react.createElement(es.Location,null,function(_ref){var location=_ref.location;return/*#__PURE__*/react.createElement(ensure_resources,{location:location},function(_ref2){var pageResources=_ref2.pageResources,location=_ref2.location;var staticQueryResults=(0,loader/* getStaticQueryResults */.hs)();return/*#__PURE__*/react.createElement(gatsby_browser_entry/* StaticQueryContext.Provider */.B9.Provider,{value:staticQueryResults},/*#__PURE__*/react.createElement(DataContext.Provider,{value:{pageResources:pageResources,location:location}},children));});});};return GatsbyRoot;}(react.Component);var LocationHandler=/*#__PURE__*/function(_React$Component2){(0,inheritsLoose/* default */.Z)(LocationHandler,_React$Component2);function LocationHandler(){return _React$Component2.apply(this,arguments)||this;}var _proto2=LocationHandler.prototype;_proto2.render=function render(){var _this=this;return/*#__PURE__*/react.createElement(DataContext.Consumer,null,function(_ref3){var pageResources=_ref3.pageResources,location=_ref3.location;return/*#__PURE__*/react.createElement(RouteUpdates,{location:location},/*#__PURE__*/react.createElement(gatsby_react_router_scroll/* ScrollContext */.$C,{location:location,shouldUpdateScroll:shouldUpdateScroll},/*#__PURE__*/react.createElement(es.Router,{basepath:"",location:location,id:"gatsby-focus-wrapper"},/*#__PURE__*/react.createElement(RouteHandler,Object.assign({path:pageResources.page.path==="/404.html"||pageResources.page.path==="/500.html"?(0,strip_prefix/* default */.Z)(location.pathname,""):encodeURI((pageResources.page.matchPath||pageResources.page.path).split("?")[0])},_this.props,{location:location,pageResources:pageResources},pageResources.json)))));});};return LocationHandler;}(react.Component);var _window=window,pagePath=_window.pagePath,browserLoc=_window.location;// Explicitly call navigate if the canonical path (window.pagePath)
// is different to the browser path (window.location.pathname). SSR
// page paths might include search params, while SSG and DSG won't.
// If page path include search params we also compare query params.
// But only if NONE of the following conditions hold:
//
// - The url matches a client side route (page.matchPath)
// - it's a 404 page
// - it's the offline plugin shell (/offline-plugin-app-shell-fallback/)
if(pagePath&&""+pagePath!==browserLoc.pathname+(pagePath.includes("?")?browserLoc.search:"")&&!(production_app_loader.findMatchPath((0,strip_prefix/* default */.Z)(browserLoc.pathname,""))||pagePath.match(/^\/(404|500)(\/?|.html)$/)||pagePath.match(/^\/offline-plugin-app-shell-fallback\/?$/))){(0,es.navigate)(""+pagePath+(!pagePath.includes("?")?browserLoc.search:"")+browserLoc.hash,{replace:true});}// It's possible that sessionStorage can throw an exception if access is not granted, see https://github.com/gatsbyjs/gatsby/issues/34512
var getSessionStorage=function getSessionStorage(){try{return sessionStorage;}catch(_unused){return null;}};loader/* publicLoader.loadPage */.jN.loadPage(browserLoc.pathname+browserLoc.search).then(function(page){var _page$page;var sessionStorage=getSessionStorage();if(page!==null&&page!==void 0&&(_page$page=page.page)!==null&&_page$page!==void 0&&_page$page.webpackCompilationHash&&page.page.webpackCompilationHash!==window.___webpackCompilationHash){// Purge plugin-offline cache
if("serviceWorker"in navigator&&navigator.serviceWorker.controller!==null&&navigator.serviceWorker.controller.state==="activated"){navigator.serviceWorker.controller.postMessage({gatsbyApi:"clearPathResources"});}// We have not matching html + js (inlined `window.___webpackCompilationHash`)
// with our data (coming from `app-data.json` file). This can cause issues such as
// errors trying to load static queries (as list of static queries is inside `page-data`
// which might not match to currently loaded `.js` scripts).
// We are making attempt to reload if hashes don't match, but we also have to handle case
// when reload doesn't fix it (possibly broken deploy) so we don't end up in infinite reload loop
if(sessionStorage){var isReloaded=sessionStorage.getItem(reloadStorageKey)==="1";if(!isReloaded){sessionStorage.setItem(reloadStorageKey,"1");window.location.reload(true);return;}}}if(sessionStorage){sessionStorage.removeItem(reloadStorageKey);}if(!page||page.status===loader/* PageResourceStatus.Error */.uQ.Error){var message="page resources for "+browserLoc.pathname+" not found. Not rendering React";// if the chunk throws an error we want to capture the real error
// This should help with https://github.com/gatsbyjs/gatsby/issues/19618
if(page&&page.error){console.error(message);throw page.error;}throw new Error(message);}var SiteRoot=(0,api_runner_browser/* apiRunner */.h)("wrapRootElement",{element:/*#__PURE__*/react.createElement(LocationHandler,null)},/*#__PURE__*/react.createElement(LocationHandler,null),function(_ref4){var result=_ref4.result;return{element:result};}).pop();var App=function App(){var onClientEntryRanRef=react.useRef(false);react.useEffect(function(){if(!onClientEntryRanRef.current){onClientEntryRanRef.current=true;if(performance.mark){performance.mark("onInitialClientRender");}(0,api_runner_browser/* apiRunner */.h)("onInitialClientRender");}},[]);return/*#__PURE__*/react.createElement(GatsbyRoot,null,SiteRoot);};var focusEl=document.getElementById("gatsby-focus-wrapper");// Client only pages have any empty body so we just do a normal
// render to avoid React complaining about hydration mis-matches.
var defaultRenderer=reactRender;if(focusEl&&focusEl.children.length){defaultRenderer=reactHydrate;}var renderer=(0,api_runner_browser/* apiRunner */.h)("replaceHydrateFunction",undefined,defaultRenderer)[0];function runRender(){var rootElement=typeof window!=="undefined"?document.getElementById("___gatsby"):null;renderer(/*#__PURE__*/react.createElement(App,null),rootElement);}// https://github.com/madrobby/zepto/blob/b5ed8d607f67724788ec9ff492be297f64d47dfc/src/zepto.js#L439-L450
// TODO remove IE 10 support
var doc=document;if(doc.readyState==="complete"||doc.readyState!=="loading"&&!doc.documentElement.doScroll){setTimeout(function(){runRender();},0);}else{var handler=function handler(){doc.removeEventListener("DOMContentLoaded",handler,false);window.removeEventListener("load",handler,false);runRender();};doc.addEventListener("DOMContentLoaded",handler,false);window.addEventListener("load",handler,false);}});});

/***/ }),

/***/ 224:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7649);
/* harmony import */ var _page_renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8522);
var ProdPageRenderer=function ProdPageRenderer(_ref){var location=_ref.location;var pageResources=_loader__WEBPACK_IMPORTED_MODULE_1__/* ["default"].loadPageSync */ .ZP.loadPageSync(location.pathname);if(!pageResources){return null;}return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_page_renderer__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,Object.assign({location:location,pageResources:pageResources},pageResources.json));};/* harmony default export */ __webpack_exports__["default"] = (ProdPageRenderer);

/***/ }),

/***/ 2743:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var preferDefault=function preferDefault(m){return m&&m.default||m;};if(false){}else if(true){module.exports=preferDefault(__webpack_require__(224));}else{}

/***/ }),

/***/ 9712:
/***/ (function(__unused_webpack_module, exports) {

exports.O=function(Component){return Component;};

/***/ }),

/***/ 6073:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "J": function() { return /* binding */ maybeGetBrowserRedirect; }
});

;// CONCATENATED MODULE: ./.cache/redirects.json
var redirects_namespaceObject = [];
;// CONCATENATED MODULE: ./.cache/redirect-utils.js
// Convert to a map for faster lookup in maybeRedirect()
var redirectMap=new Map();var redirectIgnoreCaseMap=new Map();redirects_namespaceObject.forEach(function(redirect){if(redirect.ignoreCase){redirectIgnoreCaseMap.set(redirect.fromPath,redirect);}else{redirectMap.set(redirect.fromPath,redirect);}});function maybeGetBrowserRedirect(pathname){var redirect=redirectMap.get(pathname);if(!redirect){redirect=redirectIgnoreCaseMap.get(pathname.toLowerCase());}return redirect;}

/***/ }),

/***/ 9939:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_runner_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3092);
if(window.location.protocol!=="https:"&&window.location.hostname!=="localhost"){console.error("Service workers can only be used over HTTPS, or on localhost for development");}else if("serviceWorker"in navigator){navigator.serviceWorker.register(""+"/sw.js").then(function(reg){reg.addEventListener("updatefound",function(){(0,_api_runner_browser__WEBPACK_IMPORTED_MODULE_0__/* .apiRunner */ .h)("onServiceWorkerUpdateFound",{serviceWorker:reg});// The updatefound event implies that reg.installing is set; see
// https://w3c.github.io/ServiceWorker/#service-worker-registration-updatefound-event
var installingWorker=reg.installing;console.log("installingWorker",installingWorker);installingWorker.addEventListener("statechange",function(){switch(installingWorker.state){case"installed":if(navigator.serviceWorker.controller){// At this point, the old content will have been purged and the fresh content will
// have been added to the cache.
// We set a flag so Gatsby Link knows to refresh the page on next navigation attempt
window.___swUpdated=true;// We call the onServiceWorkerUpdateReady API so users can show update prompts.
(0,_api_runner_browser__WEBPACK_IMPORTED_MODULE_0__/* .apiRunner */ .h)("onServiceWorkerUpdateReady",{serviceWorker:reg});// If resources failed for the current page, reload.
if(window.___failedResources){console.log("resources failed, SW updated - reloading");window.location.reload();}}else{// At this point, everything has been precached.
// It's the perfect time to display a "Content is cached for offline use." message.
console.log("Content is now available offline!");// Post to service worker that install is complete.
// Delay to allow time for the event listener to be added --
// otherwise fetch is called too soon and resources aren't cached.
(0,_api_runner_browser__WEBPACK_IMPORTED_MODULE_0__/* .apiRunner */ .h)("onServiceWorkerInstalled",{serviceWorker:reg});}break;case"redundant":console.error("The installing service worker became redundant.");(0,_api_runner_browser__WEBPACK_IMPORTED_MODULE_0__/* .apiRunner */ .h)("onServiceWorkerRedundant",{serviceWorker:reg});break;case"activated":(0,_api_runner_browser__WEBPACK_IMPORTED_MODULE_0__/* .apiRunner */ .h)("onServiceWorkerActive",{serviceWorker:reg});break;}});});}).catch(function(e){console.error("Error during service worker registration:",e);});}

/***/ }),

/***/ 1505:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ stripPrefix; }
/* harmony export */ });
/**
 * Remove a prefix from a string. Return the input string if the given prefix
 * isn't found.
 */function stripPrefix(str,prefix){if(prefix===void 0){prefix="";}if(!prefix){return str;}if(str===prefix){return"/";}if(str.startsWith(prefix+"/")){return str.slice(prefix.length);}return str;}

/***/ }),

/***/ 1330:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "wrapPageElement": function() { return /* binding */ wrapPageElement; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
;// CONCATENATED MODULE: ./node_modules/swr/dist/index.mjs

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
}

var noop = function noop() {}; // Using noop() as the undefined value as undefined can possibly be replaced
// by something else.  Prettier ignore and extra parentheses are necessary here
// to ensure that tsc doesn't remove the __NOINLINE__ comment.
// prettier-ignore


var UNDEFINED =
/*#__NOINLINE__*/
noop();
var OBJECT = Object;

var isUndefined = function isUndefined(v) {
  return v === UNDEFINED;
};

var isFunction = function isFunction(v) {
  return typeof v == 'function';
};

var mergeObjects = function mergeObjects(a, b) {
  return OBJECT.assign({}, a, b);
};

var STR_UNDEFINED = 'undefined'; // NOTE: Use function to guarantee it's re-evaluated between jsdom and node runtime for tests.

var hasWindow = function hasWindow() {
  return typeof window != STR_UNDEFINED;
};

var hasDocument = function hasDocument() {
  return typeof document != STR_UNDEFINED;
};

var hasRequestAnimationFrame = function hasRequestAnimationFrame() {
  return hasWindow() && typeof window['requestAnimationFrame'] != STR_UNDEFINED;
}; // use WeakMap to store the object->key mapping
// so the objects can be garbage collected.
// WeakMap uses a hashtable under the hood, so the lookup
// complexity is almost O(1).


var table = new WeakMap(); // counter of the key

var counter = 0; // A stable hash implementation that supports:
// - Fast and ensures unique hash properties
// - Handles unserializable values
// - Handles object key ordering
// - Generates short results
//
// This is not a serialization function, and the result is not guaranteed to be
// parsible.

var stableHash = function stableHash(arg) {
  var type = typeof arg;
  var constructor = arg && arg.constructor;
  var isDate = constructor == Date;
  var result;
  var index;

  if (OBJECT(arg) === arg && !isDate && constructor != RegExp) {
    // Object/function, not null/date/regexp. Use WeakMap to store the id first.
    // If it's already hashed, directly return the result.
    result = table.get(arg);
    if (result) return result; // Store the hash first for circular reference detection before entering the
    // recursive `stableHash` calls.
    // For other objects like set and map, we use this id directly as the hash.

    result = ++counter + '~';
    table.set(arg, result);

    if (constructor == Array) {
      // Array.
      result = '@';

      for (index = 0; index < arg.length; index++) {
        result += stableHash(arg[index]) + ',';
      }

      table.set(arg, result);
    }

    if (constructor == OBJECT) {
      // Object, sort keys.
      result = '#';
      var keys = OBJECT.keys(arg).sort();

      while (!isUndefined(index = keys.pop())) {
        if (!isUndefined(arg[index])) {
          result += index + ':' + stableHash(arg[index]) + ',';
        }
      }

      table.set(arg, result);
    }
  } else {
    result = isDate ? arg.toJSON() : type == 'symbol' ? arg.toString() : type == 'string' ? JSON.stringify(arg) : '' + arg;
  }

  return result;
};
/**
 * Due to bug https://bugs.chromium.org/p/chromium/issues/detail?id=678075,
 * it's not reliable to detect if the browser is currently online or offline
 * based on `navigator.onLine`.
 * As a work around, we always assume it's online on first load, and change
 * the status upon `online` or `offline` events.
 */


var online = true;

var isOnline = function isOnline() {
  return online;
};

var hasWin = hasWindow();
var hasDoc = hasDocument(); // For node and React Native, `add/removeEventListener` doesn't exist on window.

var onWindowEvent = hasWin && window.addEventListener ? window.addEventListener.bind(window) : noop;
var onDocumentEvent = hasDoc ? document.addEventListener.bind(document) : noop;
var offWindowEvent = hasWin && window.removeEventListener ? window.removeEventListener.bind(window) : noop;
var offDocumentEvent = hasDoc ? document.removeEventListener.bind(document) : noop;

var isVisible = function isVisible() {
  var visibilityState = hasDoc && document.visibilityState;
  return isUndefined(visibilityState) || visibilityState !== 'hidden';
};

var initFocus = function initFocus(callback) {
  // focus revalidate
  onDocumentEvent('visibilitychange', callback);
  onWindowEvent('focus', callback);
  return function () {
    offDocumentEvent('visibilitychange', callback);
    offWindowEvent('focus', callback);
  };
};

var initReconnect = function initReconnect(callback) {
  // revalidate on reconnected
  var onOnline = function onOnline() {
    online = true;
    callback();
  }; // nothing to revalidate, just update the status


  var onOffline = function onOffline() {
    online = false;
  };

  onWindowEvent('online', onOnline);
  onWindowEvent('offline', onOffline);
  return function () {
    offWindowEvent('online', onOnline);
    offWindowEvent('offline', onOffline);
  };
};

var preset = {
  isOnline: isOnline,
  isVisible: isVisible
};
var defaultConfigOptions = {
  initFocus: initFocus,
  initReconnect: initReconnect
};
var IS_SERVER = !hasWindow() || 'Deno' in window; // Polyfill requestAnimationFrame

var rAF = function rAF(f) {
  return hasRequestAnimationFrame() ? window['requestAnimationFrame'](f) : setTimeout(f, 1);
}; // React currently throws a warning when using useLayoutEffect on the server.
// To get around it, we can conditionally useEffect on the server (no-op) and
// useLayoutEffect in the browser.


var useIsomorphicLayoutEffect = IS_SERVER ? react.useEffect : react.useLayoutEffect; // This assignment is to extend the Navigator type to use effectiveType.

var navigatorConnection = typeof navigator !== 'undefined' && navigator.connection; // Adjust the config based on slow connection status (<= 70Kbps).

var slowConnection = !IS_SERVER && navigatorConnection && (['slow-2g', '2g'].includes(navigatorConnection.effectiveType) || navigatorConnection.saveData);

var serialize = function serialize(key) {
  if (isFunction(key)) {
    try {
      key = key();
    } catch (err) {
      // dependencies not ready
      key = '';
    }
  }

  var args = [].concat(key); // If key is not falsy, or not an empty array, hash it.

  key = typeof key == 'string' ? key : (Array.isArray(key) ? key.length : key) ? stableHash(key) : '';
  var infoKey = key ? '$swr$' + key : '';
  return [key, args, infoKey];
}; // Global state used to deduplicate requests and store listeners


var SWRGlobalState = new WeakMap();
var FOCUS_EVENT = 0;
var RECONNECT_EVENT = 1;
var MUTATE_EVENT = 2;

var broadcastState = function broadcastState(cache, key, data, error, isValidating, revalidate, broadcast) {
  if (broadcast === void 0) {
    broadcast = true;
  }

  var _a = SWRGlobalState.get(cache),
      EVENT_REVALIDATORS = _a[0],
      STATE_UPDATERS = _a[1],
      FETCH = _a[3];

  var revalidators = EVENT_REVALIDATORS[key];
  var updaters = STATE_UPDATERS[key]; // Cache was populated, update states of all hooks.

  if (broadcast && updaters) {
    for (var i = 0; i < updaters.length; ++i) {
      updaters[i](data, error, isValidating);
    }
  } // If we also need to revalidate, only do it for the first hook.


  if (revalidate) {
    // Invalidate the key by deleting the concurrent request markers so new
    // requests will not be deduped.
    delete FETCH[key];

    if (revalidators && revalidators[0]) {
      return revalidators[0](MUTATE_EVENT).then(function () {
        return cache.get(key);
      });
    }
  }

  return cache.get(key);
}; // Global timestamp.


var __timestamp = 0;

var getTimestamp = function getTimestamp() {
  return ++__timestamp;
};

var internalMutate = function internalMutate() {
  var args = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }

  return __awaiter(void 0, void 0, void 0, function () {
    var cache, _key, _data, _opts, options, populateCache, revalidate, rollbackOnError, customOptimisticData, _a, key, keyInfo, _b, MUTATION, data, error, beforeMutationTs, hasCustomOptimisticData, rollbackData, optimisticData, res;

    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          cache = args[0], _key = args[1], _data = args[2], _opts = args[3];
          options = typeof _opts === 'boolean' ? {
            revalidate: _opts
          } : _opts || {};
          populateCache = isUndefined(options.populateCache) ? true : options.populateCache;
          revalidate = options.revalidate !== false;
          rollbackOnError = options.rollbackOnError !== false;
          customOptimisticData = options.optimisticData;
          _a = serialize(_key), key = _a[0], keyInfo = _a[2];
          if (!key) return [2
          /*return*/
          ];
          _b = SWRGlobalState.get(cache), MUTATION = _b[2]; // If there is no new data provided, revalidate the key with current state.

          if (args.length < 3) {
            // Revalidate and broadcast state.
            return [2
            /*return*/
            , broadcastState(cache, key, cache.get(key), UNDEFINED, UNDEFINED, revalidate, true)];
          }

          data = _data;
          beforeMutationTs = getTimestamp();
          MUTATION[key] = [beforeMutationTs, 0];
          hasCustomOptimisticData = !isUndefined(customOptimisticData);
          rollbackData = cache.get(key); // Do optimistic data update.

          if (hasCustomOptimisticData) {
            optimisticData = isFunction(customOptimisticData) ? customOptimisticData(rollbackData) : customOptimisticData;
            cache.set(key, optimisticData);
            broadcastState(cache, key, optimisticData);
          }

          if (isFunction(data)) {
            // `data` is a function, call it passing current cache value.
            try {
              data = data(cache.get(key));
            } catch (err) {
              // If it throws an error synchronously, we shouldn't update the cache.
              error = err;
            }
          }

          if (!(data && isFunction(data.then))) return [3
          /*break*/
          , 2];
          return [4
          /*yield*/
          , data.catch(function (err) {
            error = err;
          }) // Check if other mutations have occurred since we've started this mutation.
          // If there's a race we don't update cache or broadcast the change,
          // just return the data.
          ];

        case 1:
          // This means that the mutation is async, we need to check timestamps to
          // avoid race conditions.
          data = _c.sent(); // Check if other mutations have occurred since we've started this mutation.
          // If there's a race we don't update cache or broadcast the change,
          // just return the data.

          if (beforeMutationTs !== MUTATION[key][0]) {
            if (error) throw error;
            return [2
            /*return*/
            , data];
          } else if (error && hasCustomOptimisticData && rollbackOnError) {
            // Rollback. Always populate the cache in this case but without
            // transforming the data.
            populateCache = true;
            data = rollbackData;
            cache.set(key, rollbackData);
          }

          _c.label = 2;

        case 2:
          // If we should write back the cache after request.
          if (populateCache) {
            if (!error) {
              // Transform the result into data.
              if (isFunction(populateCache)) {
                data = populateCache(data, rollbackData);
              } // Only update cached data if there's no error. Data can be `undefined` here.


              cache.set(key, data);
            } // Always update or reset the error.


            cache.set(keyInfo, mergeObjects(cache.get(keyInfo), {
              error: error
            }));
          } // Reset the timestamp to mark the mutation has ended.


          MUTATION[key][1] = getTimestamp();
          return [4
          /*yield*/
          , broadcastState(cache, key, data, error, UNDEFINED, revalidate, !!populateCache) // Throw error or return data
          ];

        case 3:
          res = _c.sent(); // Throw error or return data

          if (error) throw error;
          return [2
          /*return*/
          , populateCache ? res : data];
      }
    });
  });
};

var revalidateAllKeys = function revalidateAllKeys(revalidators, type) {
  for (var key in revalidators) {
    if (revalidators[key][0]) revalidators[key][0](type);
  }
};

var initCache = function initCache(provider, options) {
  // The global state for a specific provider will be used to deduplicate
  // requests and store listeners. As well as a mutate function that bound to
  // the cache.
  // Provider's global state might be already initialized. Let's try to get the
  // global state associated with the provider first.
  if (!SWRGlobalState.has(provider)) {
    var opts = mergeObjects(defaultConfigOptions, options); // If there's no global state bound to the provider, create a new one with the
    // new mutate function.

    var EVENT_REVALIDATORS = {};
    var mutate = internalMutate.bind(UNDEFINED, provider);
    var unmount = noop; // Update the state if it's new, or the provider has been extended.

    SWRGlobalState.set(provider, [EVENT_REVALIDATORS, {}, {}, {}, mutate]); // This is a new provider, we need to initialize it and setup DOM events
    // listeners for `focus` and `reconnect` actions.

    if (!IS_SERVER) {
      // When listening to the native events for auto revalidations,
      // we intentionally put a delay (setTimeout) here to make sure they are
      // fired after immediate JavaScript executions, which can possibly be
      // React's state updates.
      // This avoids some unnecessary revalidations such as
      // https://github.com/vercel/swr/issues/1680.
      var releaseFocus_1 = opts.initFocus(setTimeout.bind(UNDEFINED, revalidateAllKeys.bind(UNDEFINED, EVENT_REVALIDATORS, FOCUS_EVENT)));
      var releaseReconnect_1 = opts.initReconnect(setTimeout.bind(UNDEFINED, revalidateAllKeys.bind(UNDEFINED, EVENT_REVALIDATORS, RECONNECT_EVENT)));

      unmount = function unmount() {
        releaseFocus_1 && releaseFocus_1();
        releaseReconnect_1 && releaseReconnect_1(); // When un-mounting, we need to remove the cache provider from the state
        // storage too because it's a side-effect. Otherwise when re-mounting we
        // will not re-register those event listeners.

        SWRGlobalState.delete(provider);
      };
    } // We might want to inject an extra layer on top of `provider` in the future,
    // such as key serialization, auto GC, etc.
    // For now, it's just a `Map` interface without any modifications.


    return [provider, mutate, unmount];
  }

  return [provider, SWRGlobalState.get(provider)[4]];
}; // error retry


var onErrorRetry = function onErrorRetry(_, __, config, revalidate, opts) {
  var maxRetryCount = config.errorRetryCount;
  var currentRetryCount = opts.retryCount; // Exponential backoff

  var timeout = ~~((Math.random() + 0.5) * (1 << (currentRetryCount < 8 ? currentRetryCount : 8))) * config.errorRetryInterval;

  if (!isUndefined(maxRetryCount) && currentRetryCount > maxRetryCount) {
    return;
  }

  setTimeout(revalidate, timeout, opts);
}; // Default cache provider


var _a = initCache(new Map()),
    cache = _a[0],
    mutate = _a[1]; // Default config


var defaultConfig = mergeObjects({
  // events
  onLoadingSlow: noop,
  onSuccess: noop,
  onError: noop,
  onErrorRetry: onErrorRetry,
  onDiscarded: noop,
  // switches
  revalidateOnFocus: true,
  revalidateOnReconnect: true,
  revalidateIfStale: true,
  shouldRetryOnError: true,
  // timeouts
  errorRetryInterval: slowConnection ? 10000 : 5000,
  focusThrottleInterval: 5 * 1000,
  dedupingInterval: 2 * 1000,
  loadingTimeout: slowConnection ? 5000 : 3000,
  // providers
  compare: function compare(currentData, newData) {
    return stableHash(currentData) == stableHash(newData);
  },
  isPaused: function isPaused() {
    return false;
  },
  cache: cache,
  mutate: mutate,
  fallback: {}
}, // use web preset by default
preset);

var mergeConfigs = function mergeConfigs(a, b) {
  // Need to create a new object to avoid mutating the original here.
  var v = mergeObjects(a, b); // If two configs are provided, merge their `use` and `fallback` options.

  if (b) {
    var u1 = a.use,
        f1 = a.fallback;
    var u2 = b.use,
        f2 = b.fallback;

    if (u1 && u2) {
      v.use = u1.concat(u2);
    }

    if (f1 && f2) {
      v.fallback = mergeObjects(f1, f2);
    }
  }

  return v;
};

var SWRConfigContext = (0,react.createContext)({});

var SWRConfig$1 = function SWRConfig$1(props) {
  var value = props.value; // Extend parent context values and middleware.

  var extendedConfig = mergeConfigs((0,react.useContext)(SWRConfigContext), value); // Should not use the inherited provider.

  var provider = value && value.provider; // Use a lazy initialized state to create the cache on first access.

  var cacheContext = (0,react.useState)(function () {
    return provider ? initCache(provider(extendedConfig.cache || cache), value) : UNDEFINED;
  })[0]; // Override the cache if a new provider is given.

  if (cacheContext) {
    extendedConfig.cache = cacheContext[0];
    extendedConfig.mutate = cacheContext[1];
  } // Unsubscribe events.


  useIsomorphicLayoutEffect(function () {
    return cacheContext ? cacheContext[2] : UNDEFINED;
  }, []);
  return (0,react.createElement)(SWRConfigContext.Provider, mergeObjects(props, {
    value: extendedConfig
  }));
};
/**
 * An implementation of state with dependency-tracking.
 */


var useStateWithDeps = function useStateWithDeps(state, unmountedRef) {
  var rerender = (0,react.useState)({})[1];
  var stateRef = (0,react.useRef)(state); // If a state property (data, error or isValidating) is accessed by the render
  // function, we mark the property as a dependency so if it is updated again
  // in the future, we trigger a rerender.
  // This is also known as dependency-tracking.

  var stateDependenciesRef = (0,react.useRef)({
    data: false,
    error: false,
    isValidating: false
  });
  /**
   * @param payload To change stateRef, pass the values explicitly to setState:
   * @example
   * ```js
   * setState({
   *   isValidating: false
   *   data: newData // set data to newData
   *   error: undefined // set error to undefined
   * })
   *
   * setState({
   *   isValidating: false
   *   data: undefined // set data to undefined
   *   error: err // set error to err
   * })
   * ```
   */

  var setState = (0,react.useCallback)(function (payload) {
    var shouldRerender = false;
    var currentState = stateRef.current;

    for (var _ in payload) {
      var k = _; // If the property has changed, update the state and mark rerender as
      // needed.

      if (currentState[k] !== payload[k]) {
        currentState[k] = payload[k]; // If the property is accessed by the component, a rerender should be
        // triggered.

        if (stateDependenciesRef.current[k]) {
          shouldRerender = true;
        }
      }
    }

    if (shouldRerender && !unmountedRef.current) {
      rerender({});
    }
  }, // config.suspense isn't allowed to change during the lifecycle
  // eslint-disable-next-line react-hooks/exhaustive-deps
  []); // Always update the state reference.

  useIsomorphicLayoutEffect(function () {
    stateRef.current = state;
  });
  return [stateRef, stateDependenciesRef.current, setState];
};

var normalize = function normalize(args) {
  return isFunction(args[1]) ? [args[0], args[1], args[2] || {}] : [args[0], null, (args[1] === null ? args[2] : args[1]) || {}];
};

var useSWRConfig = function useSWRConfig() {
  return mergeObjects(defaultConfig, (0,react.useContext)(SWRConfigContext));
}; // It's tricky to pass generic types as parameters, so we just directly override
// the types here.


var withArgs = function withArgs(hook) {
  return function useSWRArgs() {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    } // Get the default and inherited configuration.


    var fallbackConfig = useSWRConfig(); // Normalize arguments.

    var _a = normalize(args),
        key = _a[0],
        fn = _a[1],
        _config = _a[2]; // Merge configurations.


    var config = mergeConfigs(fallbackConfig, _config); // Apply middleware

    var next = hook;
    var use = config.use;

    if (use) {
      for (var i = use.length; i-- > 0;) {
        next = use[i](next);
      }
    }

    return next(key, fn || config.fetcher, config);
  };
}; // Add a callback function to a list of keyed callback functions and return
// the unsubscribe function.


var subscribeCallback = function subscribeCallback(key, callbacks, callback) {
  var keyedRevalidators = callbacks[key] || (callbacks[key] = []);
  keyedRevalidators.push(callback);
  return function () {
    var index = keyedRevalidators.indexOf(callback);

    if (index >= 0) {
      // O(1): faster than splice
      keyedRevalidators[index] = keyedRevalidators[keyedRevalidators.length - 1];
      keyedRevalidators.pop();
    }
  };
};

var WITH_DEDUPE = {
  dedupe: true
};

var useSWRHandler = function useSWRHandler(_key, fetcher, config) {
  var cache = config.cache,
      compare = config.compare,
      fallbackData = config.fallbackData,
      suspense = config.suspense,
      revalidateOnMount = config.revalidateOnMount,
      refreshInterval = config.refreshInterval,
      refreshWhenHidden = config.refreshWhenHidden,
      refreshWhenOffline = config.refreshWhenOffline;

  var _a = SWRGlobalState.get(cache),
      EVENT_REVALIDATORS = _a[0],
      STATE_UPDATERS = _a[1],
      MUTATION = _a[2],
      FETCH = _a[3]; // `key` is the identifier of the SWR `data` state, `keyInfo` holds extra
  // states such as `error` and `isValidating` inside,
  // all of them are derived from `_key`.
  // `fnArgs` is an array of arguments parsed from the key, which will be passed
  // to the fetcher.


  var _b = serialize(_key),
      key = _b[0],
      fnArgs = _b[1],
      keyInfo = _b[2]; // If it's the initial render of this hook.


  var initialMountedRef = (0,react.useRef)(false); // If the hook is unmounted already. This will be used to prevent some effects
  // to be called after unmounting.

  var unmountedRef = (0,react.useRef)(false); // Refs to keep the key and config.

  var keyRef = (0,react.useRef)(key);
  var fetcherRef = (0,react.useRef)(fetcher);
  var configRef = (0,react.useRef)(config);

  var getConfig = function getConfig() {
    return configRef.current;
  };

  var isActive = function isActive() {
    return getConfig().isVisible() && getConfig().isOnline();
  };

  var patchFetchInfo = function patchFetchInfo(info) {
    return cache.set(keyInfo, mergeObjects(cache.get(keyInfo), info));
  }; // Get the current state that SWR should return.


  var cached = cache.get(key);
  var fallback = isUndefined(fallbackData) ? config.fallback[key] : fallbackData;
  var data = isUndefined(cached) ? fallback : cached;
  var info = cache.get(keyInfo) || {};
  var error = info.error;
  var isInitialMount = !initialMountedRef.current; // - Suspense mode and there's stale data for the initial render.
  // - Not suspense mode and there is no fallback data and `revalidateIfStale` is enabled.
  // - `revalidateIfStale` is enabled but `data` is not defined.

  var shouldRevalidate = function shouldRevalidate() {
    // If `revalidateOnMount` is set, we take the value directly.
    if (isInitialMount && !isUndefined(revalidateOnMount)) return revalidateOnMount; // If it's paused, we skip revalidation.

    if (getConfig().isPaused()) return false; // Under suspense mode, it will always fetch on render if there is no
    // stale data so no need to revalidate immediately on mount again.
    // If data exists, only revalidate if `revalidateIfStale` is true.

    if (suspense) return isUndefined(data) ? false : config.revalidateIfStale; // If there is no stale data, we need to revalidate on mount;
    // If `revalidateIfStale` is set to true, we will always revalidate.

    return isUndefined(data) || config.revalidateIfStale;
  }; // Resolve the current validating state.


  var resolveValidating = function resolveValidating() {
    if (!key || !fetcher) return false;
    if (info.isValidating) return true; // If it's not mounted yet and it should revalidate on mount, revalidate.

    return isInitialMount && shouldRevalidate();
  };

  var isValidating = resolveValidating();

  var _c = useStateWithDeps({
    data: data,
    error: error,
    isValidating: isValidating
  }, unmountedRef),
      stateRef = _c[0],
      stateDependencies = _c[1],
      setState = _c[2]; // The revalidation function is a carefully crafted wrapper of the original
  // `fetcher`, to correctly handle the many edge cases.


  var revalidate = (0,react.useCallback)(function (revalidateOpts) {
    return __awaiter(void 0, void 0, void 0, function () {
      var currentFetcher, newData, startAt, loading, opts, shouldStartNewRequest, isCurrentKeyMounted, cleanupState, newState, finishRequestAndUpdateState, mutationInfo, err_1;

      var _a;

      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            currentFetcher = fetcherRef.current;

            if (!key || !currentFetcher || unmountedRef.current || getConfig().isPaused()) {
              return [2
              /*return*/
              , false];
            }

            loading = true;
            opts = revalidateOpts || {};
            shouldStartNewRequest = !FETCH[key] || !opts.dedupe;

            isCurrentKeyMounted = function isCurrentKeyMounted() {
              return !unmountedRef.current && key === keyRef.current && initialMountedRef.current;
            };

            cleanupState = function cleanupState() {
              // Check if it's still the same request before deleting.
              var requestInfo = FETCH[key];

              if (requestInfo && requestInfo[1] === startAt) {
                delete FETCH[key];
              }
            };

            newState = {
              isValidating: false
            };

            finishRequestAndUpdateState = function finishRequestAndUpdateState() {
              patchFetchInfo({
                isValidating: false
              }); // We can only set state if it's safe (still mounted with the same key).

              if (isCurrentKeyMounted()) {
                setState(newState);
              }
            }; // Start fetching. Change the `isValidating` state, update the cache.


            patchFetchInfo({
              isValidating: true
            });
            setState({
              isValidating: true
            });
            _b.label = 1;

          case 1:
            _b.trys.push([1, 3,, 4]);

            if (shouldStartNewRequest) {
              // Tell all other hooks to change the `isValidating` state.
              broadcastState(cache, key, stateRef.current.data, stateRef.current.error, true); // If no cache being rendered currently (it shows a blank page),
              // we trigger the loading slow event.

              if (config.loadingTimeout && !cache.get(key)) {
                setTimeout(function () {
                  if (loading && isCurrentKeyMounted()) {
                    getConfig().onLoadingSlow(key, config);
                  }
                }, config.loadingTimeout);
              } // Start the request and save the timestamp.


              FETCH[key] = [currentFetcher.apply(void 0, fnArgs), getTimestamp()];
            }

            _a = FETCH[key], newData = _a[0], startAt = _a[1];
            return [4
            /*yield*/
            , newData];

          case 2:
            newData = _b.sent();

            if (shouldStartNewRequest) {
              // If the request isn't interrupted, clean it up after the
              // deduplication interval.
              setTimeout(cleanupState, config.dedupingInterval);
            } // If there're other ongoing request(s), started after the current one,
            // we need to ignore the current one to avoid possible race conditions:
            //   req1------------------>res1        (current one)
            //        req2---------------->res2
            // the request that fired later will always be kept.
            // The timestamp maybe be `undefined` or a number


            if (!FETCH[key] || FETCH[key][1] !== startAt) {
              if (shouldStartNewRequest) {
                if (isCurrentKeyMounted()) {
                  getConfig().onDiscarded(key);
                }
              }

              return [2
              /*return*/
              , false];
            } // Clear error.


            patchFetchInfo({
              error: UNDEFINED
            });
            newState.error = UNDEFINED;
            mutationInfo = MUTATION[key];

            if (!isUndefined(mutationInfo) && ( // case 1
            startAt <= mutationInfo[0] || // case 2
            startAt <= mutationInfo[1] || // case 3
            mutationInfo[1] === 0)) {
              finishRequestAndUpdateState();

              if (shouldStartNewRequest) {
                if (isCurrentKeyMounted()) {
                  getConfig().onDiscarded(key);
                }
              }

              return [2
              /*return*/
              , false];
            } // Deep compare with latest state to avoid extra re-renders.
            // For local state, compare and assign.


            if (!compare(stateRef.current.data, newData)) {
              newState.data = newData;
            } else {
              // data and newData are deeply equal
              // it should be safe to broadcast the stale data
              newState.data = stateRef.current.data; // At the end of this function, `brocastState` invokes the `onStateUpdate` function,
              // which takes care of avoiding the re-render
            } // For global state, it's possible that the key has changed.
            // https://github.com/vercel/swr/pull/1058


            if (!compare(cache.get(key), newData)) {
              cache.set(key, newData);
            } // Trigger the successful callback if it's the original request.


            if (shouldStartNewRequest) {
              if (isCurrentKeyMounted()) {
                getConfig().onSuccess(newData, key, config);
              }
            }

            return [3
            /*break*/
            , 4];

          case 3:
            err_1 = _b.sent();
            cleanupState(); // Not paused, we continue handling the error. Otherwise discard it.

            if (!getConfig().isPaused()) {
              // Get a new error, don't use deep comparison for errors.
              patchFetchInfo({
                error: err_1
              });
              newState.error = err_1; // Error event and retry logic. Only for the actual request, not
              // deduped ones.

              if (shouldStartNewRequest && isCurrentKeyMounted()) {
                getConfig().onError(err_1, key, config);

                if (typeof config.shouldRetryOnError === 'boolean' && config.shouldRetryOnError || isFunction(config.shouldRetryOnError) && config.shouldRetryOnError(err_1)) {
                  // When retrying, dedupe is always enabled
                  if (isActive()) {
                    // If it's active, stop. It will auto revalidate when refocusing
                    // or reconnecting.
                    getConfig().onErrorRetry(err_1, key, config, revalidate, {
                      retryCount: (opts.retryCount || 0) + 1,
                      dedupe: true
                    });
                  }
                }
              }
            }

            return [3
            /*break*/
            , 4];

          case 4:
            // Mark loading as stopped.
            loading = false; // Update the current hook's state.

            finishRequestAndUpdateState(); // Here is the source of the request, need to tell all other hooks to
            // update their states.

            if (isCurrentKeyMounted() && shouldStartNewRequest) {
              broadcastState(cache, key, newState.data, newState.error, false);
            }

            return [2
            /*return*/
            , true];
        }
      });
    });
  }, // `setState` is immutable, and `eventsCallback`, `fnArgs`, `keyInfo`,
  // and `keyValidating` are depending on `key`, so we can exclude them from
  // the deps array.
  //
  // FIXME:
  // `fn` and `config` might be changed during the lifecycle,
  // but they might be changed every render like this.
  // `useSWR('key', () => fetch('/api/'), { suspense: true })`
  // So we omit the values from the deps array
  // even though it might cause unexpected behaviors.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [key]); // Similar to the global mutate, but bound to the current cache and key.
  // `cache` isn't allowed to change during the lifecycle.
  // eslint-disable-next-line react-hooks/exhaustive-deps

  var boundMutate = (0,react.useCallback)( // By using `bind` we don't need to modify the size of the rest arguments.
  // Due to https://github.com/microsoft/TypeScript/issues/37181, we have to
  // cast it to any for now.
  internalMutate.bind(UNDEFINED, cache, function () {
    return keyRef.current;
  }), // eslint-disable-next-line react-hooks/exhaustive-deps
  []); // Always update fetcher and config refs.

  useIsomorphicLayoutEffect(function () {
    fetcherRef.current = fetcher;
    configRef.current = config;
  }); // After mounted or key changed.

  useIsomorphicLayoutEffect(function () {
    if (!key) return;
    var keyChanged = key !== keyRef.current;
    var softRevalidate = revalidate.bind(UNDEFINED, WITH_DEDUPE); // Expose state updater to global event listeners. So we can update hook's
    // internal state from the outside.

    var onStateUpdate = function onStateUpdate(updatedData, updatedError, updatedIsValidating) {
      setState(mergeObjects({
        error: updatedError,
        isValidating: updatedIsValidating
      }, // Since `setState` only shallowly compares states, we do a deep
      // comparison here.
      compare(stateRef.current.data, updatedData) ? UNDEFINED : {
        data: updatedData
      }));
    }; // Expose revalidators to global event listeners. So we can trigger
    // revalidation from the outside.


    var nextFocusRevalidatedAt = 0;

    var onRevalidate = function onRevalidate(type) {
      if (type == FOCUS_EVENT) {
        var now = Date.now();

        if (getConfig().revalidateOnFocus && now > nextFocusRevalidatedAt && isActive()) {
          nextFocusRevalidatedAt = now + getConfig().focusThrottleInterval;
          softRevalidate();
        }
      } else if (type == RECONNECT_EVENT) {
        if (getConfig().revalidateOnReconnect && isActive()) {
          softRevalidate();
        }
      } else if (type == MUTATE_EVENT) {
        return revalidate();
      }

      return;
    };

    var unsubUpdate = subscribeCallback(key, STATE_UPDATERS, onStateUpdate);
    var unsubEvents = subscribeCallback(key, EVENT_REVALIDATORS, onRevalidate); // Mark the component as mounted and update corresponding refs.

    unmountedRef.current = false;
    keyRef.current = key;
    initialMountedRef.current = true; // When `key` updates, reset the state to the initial value
    // and trigger a rerender if necessary.

    if (keyChanged) {
      setState({
        data: data,
        error: error,
        isValidating: isValidating
      });
    } // Trigger a revalidation.


    if (shouldRevalidate()) {
      if (isUndefined(data) || IS_SERVER) {
        // Revalidate immediately.
        softRevalidate();
      } else {
        // Delay the revalidate if we have data to return so we won't block
        // rendering.
        rAF(softRevalidate);
      }
    }

    return function () {
      // Mark it as unmounted.
      unmountedRef.current = true;
      unsubUpdate();
      unsubEvents();
    };
  }, [key, revalidate]); // Polling

  useIsomorphicLayoutEffect(function () {
    var timer;

    function next() {
      // Use the passed interval
      // ...or invoke the function with the updated data to get the interval
      var interval = isFunction(refreshInterval) ? refreshInterval(data) : refreshInterval; // We only start next interval if `refreshInterval` is not 0, and:
      // - `force` is true, which is the start of polling
      // - or `timer` is not 0, which means the effect wasn't canceled

      if (interval && timer !== -1) {
        timer = setTimeout(execute, interval);
      }
    }

    function execute() {
      // Check if it's OK to execute:
      // Only revalidate when the page is visible, online and not errored.
      if (!stateRef.current.error && (refreshWhenHidden || getConfig().isVisible()) && (refreshWhenOffline || getConfig().isOnline())) {
        revalidate(WITH_DEDUPE).then(next);
      } else {
        // Schedule next interval to check again.
        next();
      }
    }

    next();
    return function () {
      if (timer) {
        clearTimeout(timer);
        timer = -1;
      }
    };
  }, [refreshInterval, refreshWhenHidden, refreshWhenOffline, revalidate]); // Display debug info in React DevTools.

  (0,react.useDebugValue)(data); // In Suspense mode, we can't return the empty `data` state.
  // If there is `error`, the `error` needs to be thrown to the error boundary.
  // If there is no `error`, the `revalidation` promise needs to be thrown to
  // the suspense boundary.

  if (suspense && isUndefined(data) && key) {
    // Always update fetcher and config refs even with the Suspense mode.
    fetcherRef.current = fetcher;
    configRef.current = config;
    unmountedRef.current = false;
    throw isUndefined(error) ? revalidate(WITH_DEDUPE) : error;
  }

  return {
    mutate: boundMutate,

    get data() {
      stateDependencies.data = true;
      return data;
    },

    get error() {
      stateDependencies.error = true;
      return error;
    },

    get isValidating() {
      stateDependencies.isValidating = true;
      return isValidating;
    }

  };
};

var SWRConfig = OBJECT.defineProperty(SWRConfig$1, 'default', {
  value: defaultConfig
});

var unstable_serialize = function unstable_serialize(key) {
  return serialize(key)[0];
};

var useSWR = withArgs(useSWRHandler); // useSWR


// EXTERNAL MODULE: ./node_modules/react-custom-scrollbars/lib/index.js
var lib = __webpack_require__(5464);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/react-toastify.esm.mjs + 1 modules
var react_toastify_esm = __webpack_require__(8434);
;// CONCATENATED MODULE: ./node_modules/react-toastify/dist/ReactToastify.min.css
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./src/containers/index.ts + 66 modules
var containers = __webpack_require__(6280);
;// CONCATENATED MODULE: ./gatsby-browser.js
// TODO: try to move layout here
var wrapPageElement=function wrapPageElement(_ref){var element=_ref.element,props=_ref.props;return/*#__PURE__*/react.createElement(lib/* Scrollbars */.$B,{universal:true},element,/*#__PURE__*/react.createElement(react_toastify_esm/* ToastContainer */.Ix,{newestOnTop:true}));};// https://dev.to/crock/gatsby-js-browser-apis-explained-wrappageelement-vs-wraprootelement-n4k
// https://markoskon.com/wrap-root-element-vs-wrap-page-element/
// TODO: look at docs: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/#wrapPageElement
// export const wrapRootElement = ({ element }) => {
//   return (
//     <SWRConfig
//       value={{
//         onError: (error, key) => {
//           // if (error.status !== 403 && error.status !== 404) {
//           //   // We can send the error to Sentry,
//           //   // or show a notification UI.
//           // }
//           console.log('An error has occured: ', error)
//         },
//       }}
//     >
//       <Scrollbars>
//         <Layout>{element}</Layout>
//       </Scrollbars>
//     </SWRConfig>
//   )
// }

/***/ }),

/***/ 9603:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var _require=__webpack_require__(4694),config=_require.config;exports.onClientEntry=function(){/* Prevents fontawesome auto css insertion */config.autoAddCss=false;};

/***/ }),

/***/ 5168:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "zx": function() { return /* reexport */ Button; },
  "Zb": function() { return /* reexport */ Card; },
  "iz": function() { return /* reexport */ Divider; },
  "JO": function() { return /* reexport */ Icon; },
  "oH": function() { return /* reexport */ InputText; },
  "Kx": function() { return /* reexport */ TextArea; }
});

;// CONCATENATED MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js
var gatsby_browser_entry = __webpack_require__(1597);
// EXTERNAL MODULE: ./node_modules/@fortawesome/react-fontawesome/index.es.js
var index_es = __webpack_require__(7606);
;// CONCATENATED MODULE: ./node_modules/react-loader-spinner/dist/esm/loader/Audio.js
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};



var getDefaultStyle = function getDefaultStyle(visible) {
  return {
    display: visible ? 'flex' : 'none'
  };
};

var Audio = function Audio(_a) {
  var _b = _a.height,
      height = _b === void 0 ? '100' : _b,
      _c = _a.width,
      width = _c === void 0 ? '100' : _c,
      _d = _a.color,
      color = _d === void 0 ? 'blue' : _d,
      _e = _a.ariaLabel,
      ariaLabel = _e === void 0 ? 'audio-loading' : _e,
      _f = _a.wrapperStyle,
      wrapperStyle = _f === void 0 ? {} : _f,
      wrapperClass = _a.wrapperClass,
      _g = _a.visible,
      visible = _g === void 0 ? true : _g;
  return React.createElement("div", {
    style: __assign(__assign({}, getDefaultStyle(visible)), wrapperStyle),
    className: wrapperClass,
    "data-testid": "audio-loading"
  }, React.createElement("svg", {
    height: "".concat(height),
    width: "".concat(width),
    fill: color,
    viewBox: "0 0 55 80",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-label": ariaLabel,
    "data-testid": "audio-svg"
  }, React.createElement("g", {
    transform: "matrix(1 0 0 -1 0 80)"
  }, React.createElement("rect", {
    width: "10",
    height: "20",
    rx: "3"
  }, React.createElement("animate", {
    attributeName: "height",
    begin: "0s",
    dur: "4.3s",
    values: "20;45;57;80;64;32;66;45;64;23;66;13;64;56;34;34;2;23;76;79;20",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), React.createElement("rect", {
    x: "15",
    width: "10",
    height: "80",
    rx: "3"
  }, React.createElement("animate", {
    attributeName: "height",
    begin: "0s",
    dur: "2s",
    values: "80;55;33;5;75;23;73;33;12;14;60;80",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), React.createElement("rect", {
    x: "30",
    width: "10",
    height: "50",
    rx: "3"
  }, React.createElement("animate", {
    attributeName: "height",
    begin: "0s",
    dur: "1.4s",
    values: "50;34;78;23;56;23;34;76;80;54;21;50",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), React.createElement("rect", {
    x: "45",
    width: "10",
    height: "30",
    rx: "3"
  }, React.createElement("animate", {
    attributeName: "height",
    begin: "0s",
    dur: "2s",
    values: "30;45;13;80;56;72;45;76;34;23;67;30",
    calcMode: "linear",
    repeatCount: "indefinite"
  })))));
};

/* harmony default export */ var loader_Audio = ((/* unused pure expression or super */ null && (Audio)));
;// CONCATENATED MODULE: ./node_modules/react-loader-spinner/dist/esm/loader/BallTriangle.js
var BallTriangle_assign = undefined && undefined.__assign || function () {
  BallTriangle_assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return BallTriangle_assign.apply(this, arguments);
};



var BallTriangle_getDefaultStyle = function getDefaultStyle(visible) {
  return {
    display: visible ? 'flex' : 'none'
  };
};

var BallTriangle = function BallTriangle(_a) {
  var _b = _a.height,
      height = _b === void 0 ? 100 : _b,
      _c = _a.width,
      width = _c === void 0 ? 100 : _c,
      _d = _a.radius,
      radius = _d === void 0 ? 5 : _d,
      _e = _a.color,
      color = _e === void 0 ? 'blue' : _e,
      _f = _a.ariaLabel,
      ariaLabel = _f === void 0 ? 'ball-triangle-loading' : _f,
      wrapperClass = _a.wrapperClass,
      wrapperStyle = _a.wrapperStyle,
      _g = _a.visible,
      visible = _g === void 0 ? true : _g;
  return React.createElement("div", {
    style: BallTriangle_assign(BallTriangle_assign({}, BallTriangle_getDefaultStyle(visible)), wrapperStyle),
    className: wrapperClass,
    "data-testid": "ball-triangle-loading"
  }, React.createElement("svg", {
    height: height,
    width: width,
    stroke: color,
    viewBox: "0 0 57 57",
    xmlns: "http://www.w3.org/2000/svg",
    "data-testid": "ball-triangle-svg",
    "aria-label": ariaLabel
  }, React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("g", {
    transform: "translate(1 1)",
    strokeWidth: "2"
  }, React.createElement("circle", {
    cx: "5",
    cy: "50",
    r: radius
  }, React.createElement("animate", {
    attributeName: "cy",
    begin: "0s",
    dur: "2.2s",
    values: "50;5;50;50",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), React.createElement("animate", {
    attributeName: "cx",
    begin: "0s",
    dur: "2.2s",
    values: "5;27;49;5",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), React.createElement("circle", {
    cx: "27",
    cy: "5",
    r: radius
  }, React.createElement("animate", {
    attributeName: "cy",
    begin: "0s",
    dur: "2.2s",
    from: "5",
    to: "5",
    values: "5;50;50;5",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), React.createElement("animate", {
    attributeName: "cx",
    begin: "0s",
    dur: "2.2s",
    from: "27",
    to: "27",
    values: "27;49;5;27",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), React.createElement("circle", {
    cx: "49",
    cy: "50",
    r: radius
  }, React.createElement("animate", {
    attributeName: "cy",
    begin: "0s",
    dur: "2.2s",
    values: "50;50;5;50",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), React.createElement("animate", {
    attributeName: "cx",
    from: "49",
    to: "49",
    begin: "0s",
    dur: "2.2s",
    values: "49;5;27;49",
    calcMode: "linear",
    repeatCount: "indefinite"
  }))))));
};

/* harmony default export */ var loader_BallTriangle = ((/* unused pure expression or super */ null && (BallTriangle)));
;// CONCATENATED MODULE: ./node_modules/react-loader-spinner/dist/esm/loader/Bars.js
var Bars_assign = undefined && undefined.__assign || function () {
  Bars_assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return Bars_assign.apply(this, arguments);
};



var Bars_getDefaultStyle = function getDefaultStyle(visible) {
  return {
    display: visible ? 'flex' : 'none'
  };
};

var Bars = function Bars(_a) {
  var _b = _a.height,
      height = _b === void 0 ? 80 : _b,
      _c = _a.width,
      width = _c === void 0 ? 80 : _c,
      _d = _a.color,
      color = _d === void 0 ? 'blue' : _d,
      _e = _a.ariaLabel,
      ariaLabel = _e === void 0 ? 'bars-loading' : _e,
      wrapperStyle = _a.wrapperStyle,
      wrapperClass = _a.wrapperClass,
      _f = _a.visible,
      visible = _f === void 0 ? true : _f;
  return React.createElement("div", {
    style: Bars_assign(Bars_assign({}, Bars_getDefaultStyle(visible)), wrapperStyle),
    className: wrapperClass,
    "data-testid": "bars-loading"
  }, React.createElement("svg", {
    width: width,
    height: height,
    fill: color,
    viewBox: "0 0 135 140",
    xmlns: "http://www.w3.org/2000/svg",
    "data-testid": "bars-svg",
    "aria-label": ariaLabel
  }, React.createElement("rect", {
    y: "10",
    width: "15",
    height: "120",
    rx: "6"
  }, React.createElement("animate", {
    attributeName: "height",
    begin: "0.5s",
    dur: "1s",
    values: "120;110;100;90;80;70;60;50;40;140;120",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), React.createElement("animate", {
    attributeName: "y",
    begin: "0.5s",
    dur: "1s",
    values: "10;15;20;25;30;35;40;45;50;0;10",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), React.createElement("rect", {
    x: "30",
    y: "10",
    width: "15",
    height: "120",
    rx: "6"
  }, React.createElement("animate", {
    attributeName: "height",
    begin: "0.25s",
    dur: "1s",
    values: "120;110;100;90;80;70;60;50;40;140;120",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), React.createElement("animate", {
    attributeName: "y",
    begin: "0.25s",
    dur: "1s",
    values: "10;15;20;25;30;35;40;45;50;0;10",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), React.createElement("rect", {
    x: "60",
    width: "15",
    height: "140",
    rx: "6"
  }, React.createElement("animate", {
    attributeName: "height",
    begin: "0s",
    dur: "1s",
    values: "120;110;100;90;80;70;60;50;40;140;120",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), React.createElement("animate", {
    attributeName: "y",
    begin: "0s",
    dur: "1s",
    values: "10;15;20;25;30;35;40;45;50;0;10",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), React.createElement("rect", {
    x: "90",
    y: "10",
    width: "15",
    height: "120",
    rx: "6"
  }, React.createElement("animate", {
    attributeName: "height",
    begin: "0.25s",
    dur: "1s",
    values: "120;110;100;90;80;70;60;50;40;140;120",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), React.createElement("animate", {
    attributeName: "y",
    begin: "0.25s",
    dur: "1s",
    values: "10;15;20;25;30;35;40;45;50;0;10",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), React.createElement("rect", {
    x: "120",
    y: "10",
    width: "15",
    height: "120",
    rx: "6"
  }, React.createElement("animate", {
    attributeName: "height",
    begin: "0.5s",
    dur: "1s",
    values: "120;110;100;90;80;70;60;50;40;140;120",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), React.createElement("animate", {
    attributeName: "y",
    begin: "0.5s",
    dur: "1s",
    values: "10;15;20;25;30;35;40;45;50;0;10",
    calcMode: "linear",
    repeatCount: "indefinite"
  }))));
};

/* harmony default export */ var loader_Bars = ((/* unused pure expression or super */ null && (Bars)));
;// CONCATENATED MODULE: ./node_modules/react-loader-spinner/dist/esm/loader/Circles.js
var Circles_assign = undefined && undefined.__assign || function () {
  Circles_assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return Circles_assign.apply(this, arguments);
};



var Circles_getDefaultStyle = function getDefaultStyle(visible) {
  return {
    display: visible ? 'flex' : 'none'
  };
};

var Circles = function Circles(_a) {
  var _b = _a.height,
      height = _b === void 0 ? 80 : _b,
      _c = _a.width,
      width = _c === void 0 ? 80 : _c,
      _d = _a.color,
      color = _d === void 0 ? 'green' : _d,
      _e = _a.ariaLabel,
      ariaLabel = _e === void 0 ? 'circles-loading' : _e,
      wrapperStyle = _a.wrapperStyle,
      wrapperClass = _a.wrapperClass,
      _f = _a.visible,
      visible = _f === void 0 ? true : _f;
  return React.createElement("div", {
    style: Circles_assign(Circles_assign({}, Circles_getDefaultStyle(visible)), wrapperStyle),
    className: wrapperClass,
    "data-testid": "circles-loading"
  }, React.createElement("svg", {
    width: width,
    height: height,
    viewBox: "0 0 135 135",
    xmlns: "http://www.w3.org/2000/svg",
    fill: color,
    "aria-label": ariaLabel,
    "data-testid": "circles-svg"
  }, React.createElement("path", {
    d: "M67.447 58c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10zm9.448 9.447c0 5.523 4.477 10 10 10 5.522 0 10-4.477 10-10s-4.478-10-10-10c-5.523 0-10 4.477-10 10zm-9.448 9.448c-5.523 0-10 4.477-10 10 0 5.522 4.477 10 10 10s10-4.478 10-10c0-5.523-4.477-10-10-10zM58 67.447c0-5.523-4.477-10-10-10s-10 4.477-10 10 4.477 10 10 10 10-4.477 10-10z"
  }, React.createElement("animateTransform", {
    attributeName: "transform",
    type: "rotate",
    from: "0 67 67",
    to: "-360 67 67",
    dur: "2.5s",
    repeatCount: "indefinite"
  })), React.createElement("path", {
    d: "M28.19 40.31c6.627 0 12-5.374 12-12 0-6.628-5.373-12-12-12-6.628 0-12 5.372-12 12 0 6.626 5.372 12 12 12zm30.72-19.825c4.686 4.687 12.284 4.687 16.97 0 4.686-4.686 4.686-12.284 0-16.97-4.686-4.687-12.284-4.687-16.97 0-4.687 4.686-4.687 12.284 0 16.97zm35.74 7.705c0 6.627 5.37 12 12 12 6.626 0 12-5.373 12-12 0-6.628-5.374-12-12-12-6.63 0-12 5.372-12 12zm19.822 30.72c-4.686 4.686-4.686 12.284 0 16.97 4.687 4.686 12.285 4.686 16.97 0 4.687-4.686 4.687-12.284 0-16.97-4.685-4.687-12.283-4.687-16.97 0zm-7.704 35.74c-6.627 0-12 5.37-12 12 0 6.626 5.373 12 12 12s12-5.374 12-12c0-6.63-5.373-12-12-12zm-30.72 19.822c-4.686-4.686-12.284-4.686-16.97 0-4.686 4.687-4.686 12.285 0 16.97 4.686 4.687 12.284 4.687 16.97 0 4.687-4.685 4.687-12.283 0-16.97zm-35.74-7.704c0-6.627-5.372-12-12-12-6.626 0-12 5.373-12 12s5.374 12 12 12c6.628 0 12-5.373 12-12zm-19.823-30.72c4.687-4.686 4.687-12.284 0-16.97-4.686-4.686-12.284-4.686-16.97 0-4.687 4.686-4.687 12.284 0 16.97 4.686 4.687 12.284 4.687 16.97 0z"
  }, React.createElement("animateTransform", {
    attributeName: "transform",
    type: "rotate",
    from: "0 67 67",
    to: "360 67 67",
    dur: "8s",
    repeatCount: "indefinite"
  }))));
};

/* harmony default export */ var loader_Circles = ((/* unused pure expression or super */ null && (Circles)));
;// CONCATENATED MODULE: ./node_modules/react-loader-spinner/dist/esm/loader/CirclesWithBar.js
var CirclesWithBar_assign = undefined && undefined.__assign || function () {
  CirclesWithBar_assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return CirclesWithBar_assign.apply(this, arguments);
};



var CirclesWithBar_getDefaultStyle = function getDefaultStyle(visible) {
  return {
    display: visible ? 'flex' : 'none'
  };
};

var CirclesWithBar = function CirclesWithBar(_a) {
  var _b = _a.wrapperStyle,
      wrapperStyle = _b === void 0 ? {} : _b,
      _c = _a.visible,
      visible = _c === void 0 ? true : _c,
      _d = _a.wrapperClass,
      wrapperClass = _d === void 0 ? '' : _d,
      _e = _a.height,
      height = _e === void 0 ? 100 : _e,
      _f = _a.width,
      width = _f === void 0 ? 100 : _f,
      _g = _a.color,
      color = _g === void 0 ? 'red' : _g,
      outerCircleColor = _a.outerCircleColor,
      innerCircleColor = _a.innerCircleColor,
      barColor = _a.barColor;
  return React.createElement("div", {
    style: CirclesWithBar_assign(CirclesWithBar_assign({}, CirclesWithBar_getDefaultStyle(visible)), wrapperStyle),
    className: wrapperClass,
    "data-testid": "circles-with-bar-wrapper"
  }, React.createElement("svg", {
    version: "1.1",
    id: "L1",
    xmlns: "http://www.w3.org/2000/svg",
    x: "0px",
    y: "0px",
    height: "".concat(height),
    width: "".concat(width),
    viewBox: "0 0 100 100",
    enableBackground: "new 0 0 100 100",
    xmlSpace: "preserve",
    "data-testid": "circles-with-bar-svg"
  }, React.createElement("circle", {
    fill: "none",
    stroke: "".concat(outerCircleColor || color),
    strokeWidth: "6",
    strokeMiterlimit: "15",
    strokeDasharray: "14.2472,14.2472",
    cx: "50",
    cy: "50",
    r: "47",
    "data-testid": "circles-with-bar-svg-outer-circle"
  }, React.createElement("animateTransform", {
    attributeName: "transform",
    attributeType: "XML",
    type: "rotate",
    dur: "5s",
    from: "0 50 50",
    to: "360 50 50",
    repeatCount: "indefinite"
  })), React.createElement("circle", {
    fill: "none",
    stroke: "".concat(innerCircleColor || color),
    strokeWidth: "1",
    strokeMiterlimit: "10",
    strokeDasharray: "10,10",
    cx: "50",
    cy: "50",
    r: "39",
    "data-testid": "circles-with-bar-svg-inner-circle"
  }, React.createElement("animateTransform", {
    attributeName: "transform",
    attributeType: "XML",
    type: "rotate",
    dur: "5s",
    from: "0 50 50",
    to: "-360 50 50",
    repeatCount: "indefinite"
  })), React.createElement("g", {
    fill: "".concat(barColor || color),
    "data-testid": "circles-with-bar-svg-bar"
  }, React.createElement("rect", {
    x: "30",
    y: "35",
    width: "5",
    height: "30"
  }, React.createElement("animateTransform", {
    attributeName: "transform",
    dur: "1s",
    type: "translate",
    values: "0 5 ; 0 -5; 0 5",
    repeatCount: "indefinite",
    begin: "0.1"
  })), React.createElement("rect", {
    x: "40",
    y: "35",
    width: "5",
    height: "30"
  }, React.createElement("animateTransform", {
    attributeName: "transform",
    dur: "1s",
    type: "translate",
    values: "0 5 ; 0 -5; 0 5",
    repeatCount: "indefinite",
    begin: "0.2"
  })), React.createElement("rect", {
    x: "50",
    y: "35",
    width: "5",
    height: "30"
  }, React.createElement("animateTransform", {
    attributeName: "transform",
    dur: "1s",
    type: "translate",
    values: "0 5 ; 0 -5; 0 5",
    repeatCount: "indefinite",
    begin: "0.3"
  })), React.createElement("rect", {
    x: "60",
    y: "35",
    width: "5",
    height: "30"
  }, React.createElement("animateTransform", {
    attributeName: "transform",
    dur: "1s",
    type: "translate",
    values: "0 5 ; 0 -5; 0 5",
    repeatCount: "indefinite",
    begin: "0.4"
  })), React.createElement("rect", {
    x: "70",
    y: "35",
    width: "5",
    height: "30"
  }, React.createElement("animateTransform", {
    attributeName: "transform",
    dur: "1s",
    type: "translate",
    values: "0 5 ; 0 -5; 0 5",
    repeatCount: "indefinite",
    begin: "0.5"
  })))));
};

/* harmony default export */ var loader_CirclesWithBar = ((/* unused pure expression or super */ null && (CirclesWithBar)));
;// CONCATENATED MODULE: ./node_modules/react-loader-spinner/dist/esm/loader/CradleLoader.js
var CradleLoader_assign = undefined && undefined.__assign || function () {
  CradleLoader_assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return CradleLoader_assign.apply(this, arguments);
};



var CradleLoader_getDefaultStyle = function getDefaultStyle(visible) {
  return {
    display: visible ? 'flex' : 'none'
  };
};

var CradleLoader = function CradleLoader(_a) {
  var _b = _a.ariaLabel,
      ariaLabel = _b === void 0 ? 'cradle-loading' : _b,
      wrapperStyle = _a.wrapperStyle,
      wrapperClass = _a.wrapperClass,
      _c = _a.visible,
      visible = _c === void 0 ? true : _c;
  return React.createElement("div", {
    "aria-label": ariaLabel,
    role: "presentation",
    style: CradleLoader_assign(CradleLoader_assign({}, CradleLoader_getDefaultStyle(visible)), wrapperStyle),
    className: "container ".concat(wrapperClass),
    "data-testid": "cradle-loading"
  }, React.createElement("div", {
    className: "react-spinner-loader-swing"
  }, React.createElement("div", {
    className: "react-spinner-loader-swing-l"
  }), React.createElement("div", null), React.createElement("div", null), React.createElement("div", null), React.createElement("div", null), React.createElement("div", null), React.createElement("div", {
    className: "react-spinner-loader-swing-r"
  })), React.createElement("div", {
    className: "react-spinner-loader-shadow"
  }, React.createElement("div", {
    className: "react-spinner-loader-shadow-l"
  }), React.createElement("div", null), React.createElement("div", null), React.createElement("div", null), React.createElement("div", null), React.createElement("div", null), React.createElement("div", {
    className: "react-spinner-loader-shadow-r"
  })));
};

/* harmony default export */ var loader_CradleLoader = ((/* unused pure expression or super */ null && (CradleLoader)));
;// CONCATENATED MODULE: ./node_modules/react-loader-spinner/dist/esm/loader/Grid.js
var Grid_assign = undefined && undefined.__assign || function () {
  Grid_assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return Grid_assign.apply(this, arguments);
};



var Grid_getDefaultStyle = function getDefaultStyle(visible) {
  return {
    display: visible ? 'flex' : 'none'
  };
};

var Grid = function Grid(_a) {
  var _b = _a.height,
      height = _b === void 0 ? 80 : _b,
      _c = _a.width,
      width = _c === void 0 ? 80 : _c,
      _d = _a.radius,
      radius = _d === void 0 ? 12.5 : _d,
      _e = _a.color,
      color = _e === void 0 ? 'green' : _e,
      _f = _a.ariaLabel,
      ariaLabel = _f === void 0 ? 'grid-loading' : _f,
      wrapperStyle = _a.wrapperStyle,
      wrapperClass = _a.wrapperClass,
      _g = _a.visible,
      visible = _g === void 0 ? true : _g;
  return React.createElement("div", {
    style: Grid_assign(Grid_assign({}, Grid_getDefaultStyle(visible)), wrapperStyle),
    className: wrapperClass,
    "data-testid": "grid-loading"
  }, React.createElement("svg", {
    width: width,
    height: height,
    viewBox: "0 0 105 105",
    fill: color,
    "aria-label": ariaLabel,
    "data-testid": "grid-svg"
  }, React.createElement("circle", {
    cx: "12.5",
    cy: "12.5",
    r: "".concat(radius)
  }, React.createElement("animate", {
    attributeName: "fill-opacity",
    begin: "0s",
    dur: "1s",
    values: "1;.2;1",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), React.createElement("circle", {
    cx: "12.5",
    cy: "52.5",
    r: "".concat(radius)
  }, React.createElement("animate", {
    attributeName: "fill-opacity",
    begin: "100ms",
    dur: "1s",
    values: "1;.2;1",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), React.createElement("circle", {
    cx: "52.5",
    cy: "12.5",
    r: "".concat(radius)
  }, React.createElement("animate", {
    attributeName: "fill-opacity",
    begin: "300ms",
    dur: "1s",
    values: "1;.2;1",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), React.createElement("circle", {
    cx: "52.5",
    cy: "52.5",
    r: "".concat(radius)
  }, React.createElement("animate", {
    attributeName: "fill-opacity",
    begin: "600ms",
    dur: "1s",
    values: "1;.2;1",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), React.createElement("circle", {
    cx: "92.5",
    cy: "12.5",
    r: "".concat(radius)
  }, React.createElement("animate", {
    attributeName: "fill-opacity",
    begin: "800ms",
    dur: "1s",
    values: "1;.2;1",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), React.createElement("circle", {
    cx: "92.5",
    cy: "52.5",
    r: "".concat(radius)
  }, React.createElement("animate", {
    attributeName: "fill-opacity",
    begin: "400ms",
    dur: "1s",
    values: "1;.2;1",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), React.createElement("circle", {
    cx: "12.5",
    cy: "92.5",
    r: "".concat(radius)
  }, React.createElement("animate", {
    attributeName: "fill-opacity",
    begin: "700ms",
    dur: "1s",
    values: "1;.2;1",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), React.createElement("circle", {
    cx: "52.5",
    cy: "92.5",
    r: "".concat(radius)
  }, React.createElement("animate", {
    attributeName: "fill-opacity",
    begin: "500ms",
    dur: "1s",
    values: "1;.2;1",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), React.createElement("circle", {
    cx: "92.5",
    cy: "92.5",
    r: "".concat(radius)
  }, React.createElement("animate", {
    attributeName: "fill-opacity",
    begin: "200ms",
    dur: "1s",
    values: "1;.2;1",
    calcMode: "linear",
    repeatCount: "indefinite"
  }))));
};
/* harmony default export */ var loader_Grid = ((/* unused pure expression or super */ null && (Grid)));
;// CONCATENATED MODULE: ./node_modules/react-loader-spinner/dist/esm/loader/Hearts.js
var Hearts_assign = undefined && undefined.__assign || function () {
  Hearts_assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return Hearts_assign.apply(this, arguments);
};



var Hearts_getDefaultStyle = function getDefaultStyle(visible) {
  return {
    display: visible ? 'flex' : 'none'
  };
};

var Hearts = function Hearts(_a) {
  var _b = _a.height,
      height = _b === void 0 ? 80 : _b,
      _c = _a.width,
      width = _c === void 0 ? 80 : _c,
      _d = _a.color,
      color = _d === void 0 ? 'green' : _d,
      _e = _a.ariaLabel,
      ariaLabel = _e === void 0 ? 'hearts-loading' : _e,
      wrapperStyle = _a.wrapperStyle,
      wrapperClass = _a.wrapperClass,
      _f = _a.visible,
      visible = _f === void 0 ? true : _f;
  return React.createElement("div", {
    style: Hearts_assign(Hearts_assign({}, Hearts_getDefaultStyle(visible)), wrapperStyle),
    className: wrapperClass,
    "data-testid": "hearts-loading"
  }, React.createElement("svg", {
    width: width,
    height: height,
    viewBox: "0 0 140 64",
    xmlns: "http://www.w3.org/2000/svg",
    fill: color,
    "aria-label": ariaLabel,
    "data-testid": "hearts-svg"
  }, React.createElement("path", {
    d: "M30.262 57.02L7.195 40.723c-5.84-3.976-7.56-12.06-3.842-18.063 3.715-6 11.467-7.65 17.306-3.68l4.52 3.76 2.6-5.274c3.717-6.002 11.47-7.65 17.305-3.68 5.84 3.97 7.56 12.054 3.842 18.062L34.49 56.118c-.897 1.512-2.793 1.915-4.228.9z",
    attributeName: "fill-opacity",
    from: "0",
    to: ".5"
  }, React.createElement("animate", {
    attributeName: "fill-opacity",
    begin: "0s",
    dur: "1.4s",
    values: "0.5;1;0.5",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), React.createElement("path", {
    d: "M105.512 56.12l-14.44-24.272c-3.716-6.008-1.996-14.093 3.843-18.062 5.835-3.97 13.588-2.322 17.306 3.68l2.6 5.274 4.52-3.76c5.84-3.97 13.592-2.32 17.307 3.68 3.718 6.003 1.998 14.088-3.842 18.064L109.74 57.02c-1.434 1.014-3.33.61-4.228-.9z",
    attributeName: "fill-opacity",
    from: "0",
    to: ".5"
  }, React.createElement("animate", {
    attributeName: "fill-opacity",
    begin: "0.7s",
    dur: "1.4s",
    values: "0.5;1;0.5",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), React.createElement("path", {
    d: "M67.408 57.834l-23.01-24.98c-5.864-6.15-5.864-16.108 0-22.248 5.86-6.14 15.37-6.14 21.234 0L70 16.168l4.368-5.562c5.863-6.14 15.375-6.14 21.235 0 5.863 6.14 5.863 16.098 0 22.247l-23.007 24.98c-1.43 1.556-3.757 1.556-5.188 0z"
  })));
};

/* harmony default export */ var loader_Hearts = ((/* unused pure expression or super */ null && (Hearts)));
;// CONCATENATED MODULE: ./node_modules/react-loader-spinner/dist/esm/loader/LineWave.js
var LineWave_assign = undefined && undefined.__assign || function () {
  LineWave_assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return LineWave_assign.apply(this, arguments);
};



var LineWave_getDefaultStyle = function getDefaultStyle(visible) {
  return {
    display: visible ? 'flex' : 'none'
  };
};

var LineWave = function LineWave(_a) {
  var _b = _a.wrapperStyle,
      wrapperStyle = _b === void 0 ? {} : _b,
      _c = _a.visible,
      visible = _c === void 0 ? true : _c,
      _d = _a.wrapperClass,
      wrapperClass = _d === void 0 ? '' : _d,
      _e = _a.height,
      height = _e === void 0 ? 100 : _e,
      _f = _a.width,
      width = _f === void 0 ? 100 : _f,
      _g = _a.color,
      color = _g === void 0 ? 'red' : _g,
      _h = _a.ariaLabel,
      ariaLabel = _h === void 0 ? 'line-wave' : _h,
      firstLineColor = _a.firstLineColor,
      middleLineColor = _a.middleLineColor,
      lastLineColor = _a.lastLineColor;
  return React.createElement("div", {
    style: LineWave_assign(LineWave_assign({}, LineWave_getDefaultStyle(visible)), wrapperStyle),
    className: wrapperClass,
    "data-testid": "line-wave-wrapper"
  }, React.createElement("svg", {
    version: "1.1",
    height: "".concat(height),
    width: "".concat(width),
    xmlns: "http://www.w3.org/2000/svg",
    x: "0px",
    y: "0px",
    viewBox: "0 0 100 100",
    enableBackground: "new 0 0 0 0",
    xmlSpace: "preserve",
    "aria-label": ariaLabel,
    "data-testid": "line-wave-svg"
  }, React.createElement("rect", {
    x: "20",
    y: "50",
    width: "4",
    height: "10",
    fill: firstLineColor || color,
    "data-testid": "line-wave-svg-first-line"
  }, React.createElement("animateTransform", {
    attributeType: "xml",
    attributeName: "transform",
    type: "translate",
    values: "0 0; 0 20; 0 0",
    begin: "0",
    dur: "0.6s",
    repeatCount: "indefinite"
  })), React.createElement("rect", {
    x: "30",
    y: "50",
    width: "4",
    height: "10",
    fill: middleLineColor || color,
    "data-testid": "line-wave-svg-middle-line"
  }, React.createElement("animateTransform", {
    attributeType: "xml",
    attributeName: "transform",
    type: "translate",
    values: "0 0; 0 20; 0 0",
    begin: "0.2s",
    dur: "0.6s",
    repeatCount: "indefinite"
  })), React.createElement("rect", {
    x: "40",
    y: "50",
    width: "4",
    height: "10",
    fill: lastLineColor || color,
    "data-testid": "line-wave-svg-last-line"
  }, React.createElement("animateTransform", {
    attributeType: "xml",
    attributeName: "transform",
    type: "translate",
    values: "0 0; 0 20; 0 0",
    begin: "0.4s",
    dur: "0.6s",
    repeatCount: "indefinite"
  }))));
};

/* harmony default export */ var loader_LineWave = ((/* unused pure expression or super */ null && (LineWave)));
;// CONCATENATED MODULE: ./node_modules/react-loader-spinner/dist/esm/loader/MutatingDots.js
var MutatingDots_assign = undefined && undefined.__assign || function () {
  MutatingDots_assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return MutatingDots_assign.apply(this, arguments);
};



var MutatingDots_getDefaultStyle = function getDefaultStyle(visible) {
  return {
    display: visible ? 'flex' : 'none'
  };
};

var MutatingDots = function MutatingDots(_a) {
  var _b = _a.height,
      height = _b === void 0 ? 90 : _b,
      _c = _a.width,
      width = _c === void 0 ? 80 : _c,
      _d = _a.radius,
      radius = _d === void 0 ? 12.5 : _d,
      _e = _a.color,
      color = _e === void 0 ? 'green' : _e,
      _f = _a.secondaryColor,
      secondaryColor = _f === void 0 ? 'blue' : _f,
      _g = _a.ariaLabel,
      ariaLabel = _g === void 0 ? 'mutating-dots-loading' : _g,
      wrapperStyle = _a.wrapperStyle,
      wrapperClass = _a.wrapperClass,
      _h = _a.visible,
      visible = _h === void 0 ? true : _h;
  return React.createElement("div", {
    style: MutatingDots_assign(MutatingDots_assign({}, MutatingDots_getDefaultStyle(visible)), wrapperStyle),
    className: wrapperClass,
    "data-testid": "mutating-dots-loading"
  }, React.createElement("svg", {
    id: "goo-loader",
    width: width,
    height: height,
    "aria-label": ariaLabel,
    "data-testid": "mutating-dots-svg"
  }, React.createElement("filter", {
    id: "fancy-goo"
  }, React.createElement("feGaussianBlur", {
    in: "SourceGraphic",
    stdDeviation: "6",
    result: "blur"
  }), React.createElement("feColorMatrix", {
    in: "blur",
    mode: "matrix",
    values: "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9",
    result: "goo"
  }), React.createElement("feComposite", {
    in: "SourceGraphic",
    in2: "goo",
    operator: "atop"
  })), React.createElement("g", {
    filter: "url(#fancy-goo)"
  }, React.createElement("animateTransform", {
    id: "mainAnim",
    attributeName: "transform",
    attributeType: "XML",
    type: "rotate",
    from: "0 50 50",
    to: "359 50 50",
    dur: "1.2s",
    repeatCount: "indefinite"
  }), React.createElement("circle", {
    cx: "50%",
    cy: "40",
    r: radius,
    fill: color
  }, React.createElement("animate", {
    id: "cAnim1",
    attributeType: "XML",
    attributeName: "cy",
    dur: "0.6s",
    begin: "0;cAnim1.end+0.2s",
    calcMode: "spline",
    values: "40;20;40",
    keyTimes: "0;0.3;1",
    keySplines: "0.09, 0.45, 0.16, 1;0.09, 0.45, 0.16, 1"
  })), React.createElement("circle", {
    cx: "50%",
    cy: "60",
    r: radius,
    fill: secondaryColor
  }, React.createElement("animate", {
    id: "cAnim2",
    attributeType: "XML",
    attributeName: "cy",
    dur: "0.6s",
    begin: "0.4s;cAnim2.end+0.2s",
    calcMode: "spline",
    values: "60;80;60",
    keyTimes: "0;0.3;1",
    keySplines: "0.09, 0.45, 0.16, 1;0.09, 0.45, 0.16, 1"
  })))));
};

/* harmony default export */ var loader_MutatingDots = ((/* unused pure expression or super */ null && (MutatingDots)));
;// CONCATENATED MODULE: ./node_modules/react-loader-spinner/dist/esm/loader/Oval.js
var Oval_assign = undefined && undefined.__assign || function () {
  Oval_assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return Oval_assign.apply(this, arguments);
};



var Oval_getDefaultStyle = function getDefaultStyle(visible) {
  return {
    display: visible ? 'flex' : 'none'
  };
};

var RADIUS = 20;

var getPath = function getPath(radius) {
  return ['M' + radius + ' 0c0-9.94-8.06', radius, radius, radius].join('-');
};

var getViewBoxSize = function getViewBoxSize(strokeWidth, secondaryStrokeWidth, radius) {
  var maxStrokeWidth = Math.max(strokeWidth, secondaryStrokeWidth);
  var startingPoint = -radius - maxStrokeWidth / 2 + 1;
  var endpoint = radius * 2 + maxStrokeWidth;
  return [startingPoint, startingPoint, endpoint, endpoint].join(' ');
};

var Oval = function Oval(_a) {
  var _b = _a.height,
      height = _b === void 0 ? 80 : _b,
      _c = _a.width,
      width = _c === void 0 ? 80 : _c,
      _d = _a.color,
      color = _d === void 0 ? 'green' : _d,
      _e = _a.secondaryColor,
      secondaryColor = _e === void 0 ? 'green' : _e,
      _f = _a.ariaLabel,
      ariaLabel = _f === void 0 ? 'oval-loading' : _f,
      wrapperStyle = _a.wrapperStyle,
      wrapperClass = _a.wrapperClass,
      _g = _a.visible,
      visible = _g === void 0 ? true : _g,
      _h = _a.strokeWidth,
      strokeWidth = _h === void 0 ? 2 : _h,
      strokeWidthSecondary = _a.strokeWidthSecondary;
  return React.createElement("div", {
    style: Oval_assign(Oval_assign(Oval_assign({}, Oval_getDefaultStyle(visible)), wrapperStyle), {
      padding: 3
    }),
    className: wrapperClass,
    "data-testid": "oval-loading"
  }, React.createElement("svg", {
    width: width,
    height: height,
    viewBox: getViewBoxSize(Number(strokeWidth), Number(strokeWidthSecondary || strokeWidth), RADIUS),
    xmlns: "http://www.w3.org/2000/svg",
    stroke: color,
    "data-testid": "oval-svg",
    "aria-label": ariaLabel
  }, React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("g", {
    transform: "translate(1 1)",
    strokeWidth: Number(strokeWidthSecondary || strokeWidth)
  }, React.createElement("circle", {
    strokeOpacity: ".5",
    cx: "0",
    cy: "0",
    r: RADIUS,
    stroke: secondaryColor,
    strokeWidth: strokeWidth
  }), React.createElement("path", {
    d: getPath(RADIUS)
  }, React.createElement("animateTransform", {
    attributeName: "transform",
    type: "rotate",
    from: "0 0 0",
    to: "360 0 0",
    dur: "1s",
    repeatCount: "indefinite"
  }))))));
};

/* harmony default export */ var loader_Oval = ((/* unused pure expression or super */ null && (Oval)));
;// CONCATENATED MODULE: ./node_modules/react-loader-spinner/dist/esm/loader/Plane.js
var Plane_assign = undefined && undefined.__assign || function () {
  Plane_assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return Plane_assign.apply(this, arguments);
};



var Plane_getDefaultStyle = function getDefaultStyle(visible) {
  return {
    display: visible ? 'flex' : 'none'
  };
};

var Plane = function Plane(_a) {
  var _b = _a.color,
      color = _b === void 0 ? 'green' : _b,
      _c = _a.secondaryColor,
      secondaryColor = _c === void 0 ? 'blue' : _c,
      _d = _a.ariaLabel,
      ariaLabel = _d === void 0 ? 'plane-loading' : _d,
      wrapperStyle = _a.wrapperStyle,
      wrapperClass = _a.wrapperClass,
      _e = _a.visible,
      visible = _e === void 0 ? true : _e;
  return React.createElement("div", {
    style: Plane_assign(Plane_assign({}, Plane_getDefaultStyle(visible)), wrapperStyle),
    className: wrapperClass,
    "data-testid": "plane-loading"
  }, React.createElement("svg", {
    className: "react-spinner-loader-svg-calLoader",
    xmlns: "http://www.w3.org/2000/svg",
    width: "230",
    height: "230",
    "aria-label": ariaLabel,
    "data-testid": "plane-svg"
  }, React.createElement("desc", null, "Plane animation. Loading "), React.createElement("path", {
    className: "react-spinner-loader-cal-loader__path",
    style: {
      stroke: secondaryColor
    },
    d: "M86.429 40c63.616-20.04 101.511 25.08 107.265 61.93 6.487 41.54-18.593 76.99-50.6 87.643-59.46 19.791-101.262-23.577-107.142-62.616C29.398 83.441 59.945 48.343 86.43 40z",
    fill: "none",
    stroke: "#0099cc",
    strokeWidth: "4",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeDasharray: "10 10 10 10 10 10 10 432",
    strokeDashoffset: "77"
  }), React.createElement("path", {
    className: "cal-loader__plane",
    style: {
      fill: color
    },
    d: "M141.493 37.93c-1.087-.927-2.942-2.002-4.32-2.501-2.259-.824-3.252-.955-9.293-1.172-4.017-.146-5.197-.23-5.47-.37-.766-.407-1.526-1.448-7.114-9.773-4.8-7.145-5.344-7.914-6.327-8.976-1.214-1.306-1.396-1.378-3.79-1.473-1.036-.04-2-.043-2.153-.002-.353.1-.87.586-1 .952-.139.399-.076.71.431 2.22.241.72 1.029 3.386 1.742 5.918 1.644 5.844 2.378 8.343 2.863 9.705.206.601.33 1.1.275 1.125-.24.097-10.56 1.066-11.014 1.032a3.532 3.532 0 0 1-1.002-.276l-.487-.246-2.044-2.613c-2.234-2.87-2.228-2.864-3.35-3.309-.717-.287-2.82-.386-3.276-.163-.457.237-.727.644-.737 1.152-.018.39.167.805 1.916 4.373 1.06 2.166 1.964 4.083 1.998 4.27.04.179.004.521-.076.75-.093.228-1.109 2.064-2.269 4.088-1.921 3.34-2.11 3.711-2.123 4.107-.008.25.061.557.168.725.328.512.72.644 1.966.676 1.32.029 2.352-.236 3.05-.762.222-.171 1.275-1.313 2.412-2.611 1.918-2.185 2.048-2.32 2.45-2.505.241-.111.601-.232.82-.271.267-.058 2.213.201 5.912.8 3.036.48 5.525.894 5.518.914 0 .026-.121.306-.27.638-.54 1.198-1.515 3.842-3.35 9.021-1.029 2.913-2.107 5.897-2.4 6.62-.703 1.748-.725 1.833-.594 2.286.137.46.45.833.872 1.012.41.177 3.823.24 4.37.085.852-.25 1.44-.688 2.312-1.724 1.166-1.39 3.169-3.948 6.771-8.661 5.8-7.583 6.561-8.49 7.387-8.702.233-.065 2.828-.056 5.784.011 5.827.138 6.64.09 8.62-.5 2.24-.67 4.035-1.65 5.517-3.016 1.136-1.054 1.135-1.014.207-1.962-.357-.38-.767-.777-.902-.893z",
    fill: "#000033"
  })));
};
/* harmony default export */ var loader_Plane = ((/* unused pure expression or super */ null && (Plane)));
;// CONCATENATED MODULE: ./node_modules/react-loader-spinner/dist/esm/loader/Puff.js
var Puff_assign = undefined && undefined.__assign || function () {
  Puff_assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return Puff_assign.apply(this, arguments);
};



var Puff_getDefaultStyle = function getDefaultStyle(visible) {
  return {
    display: visible ? 'flex' : 'none'
  };
};

var Puff = function Puff(_a) {
  var _b = _a.height,
      height = _b === void 0 ? 80 : _b,
      _c = _a.width,
      width = _c === void 0 ? 80 : _c,
      _d = _a.radius,
      radius = _d === void 0 ? 1 : _d,
      _e = _a.color,
      color = _e === void 0 ? 'green' : _e,
      _f = _a.ariaLabel,
      ariaLabel = _f === void 0 ? 'puff-loading' : _f,
      wrapperStyle = _a.wrapperStyle,
      wrapperClass = _a.wrapperClass,
      _g = _a.visible,
      visible = _g === void 0 ? true : _g;
  return React.createElement("div", {
    style: Puff_assign(Puff_assign({}, Puff_getDefaultStyle(visible)), wrapperStyle),
    className: wrapperClass,
    "data-testid": "puff-loading"
  }, React.createElement("svg", {
    width: width,
    height: height,
    viewBox: "0 0 44 44",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: color,
    "aria-label": ariaLabel,
    "data-testid": "puff-svg"
  }, React.createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    strokeWidth: "2"
  }, React.createElement("circle", {
    cx: "22",
    cy: "22",
    r: radius
  }, React.createElement("animate", {
    attributeName: "r",
    begin: "0s",
    dur: "1.8s",
    values: "1; 20",
    calcMode: "spline",
    keyTimes: "0; 1",
    keySplines: "0.165, 0.84, 0.44, 1",
    repeatCount: "indefinite"
  }), React.createElement("animate", {
    attributeName: "strokeOpacity",
    begin: "0s",
    dur: "1.8s",
    values: "1; 0",
    calcMode: "spline",
    keyTimes: "0; 1",
    keySplines: "0.3, 0.61, 0.355, 1",
    repeatCount: "indefinite"
  })), React.createElement("circle", {
    cx: "22",
    cy: "22",
    r: radius
  }, React.createElement("animate", {
    attributeName: "r",
    begin: "-0.9s",
    dur: "1.8s",
    values: "1; 20",
    calcMode: "spline",
    keyTimes: "0; 1",
    keySplines: "0.165, 0.84, 0.44, 1",
    repeatCount: "indefinite"
  }), React.createElement("animate", {
    attributeName: "strokeOpacity",
    begin: "-0.9s",
    dur: "1.8s",
    values: "1; 0",
    calcMode: "spline",
    keyTimes: "0; 1",
    keySplines: "0.3, 0.61, 0.355, 1",
    repeatCount: "indefinite"
  })))));
};
/* harmony default export */ var loader_Puff = ((/* unused pure expression or super */ null && (Puff)));
;// CONCATENATED MODULE: ./node_modules/react-loader-spinner/dist/esm/loader/RevolvingDot.js
var RevolvingDot_assign = undefined && undefined.__assign || function () {
  RevolvingDot_assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return RevolvingDot_assign.apply(this, arguments);
};



var RevolvingDot_getDefaultStyle = function getDefaultStyle(visible) {
  return {
    display: visible ? 'flex' : 'none'
  };
};

var RevolvingDot = function RevolvingDot(_a) {
  var _b = _a.height,
      height = _b === void 0 ? 80 : _b,
      _c = _a.width,
      width = _c === void 0 ? 80 : _c,
      _d = _a.radius,
      radius = _d === void 0 ? 6 : _d,
      _e = _a.color,
      color = _e === void 0 ? 'green' : _e,
      _f = _a.ariaLabel,
      ariaLabel = _f === void 0 ? 'revolving-dot-loading' : _f,
      wrapperStyle = _a.wrapperStyle,
      wrapperClass = _a.wrapperClass,
      _g = _a.visible,
      visible = _g === void 0 ? true : _g;
  return React.createElement("div", {
    style: RevolvingDot_assign(RevolvingDot_assign({}, RevolvingDot_getDefaultStyle(visible)), wrapperStyle),
    className: wrapperClass,
    "data-testid": "revolving-dot-loading"
  }, React.createElement("svg", {
    version: "1.1",
    width: width,
    height: height,
    xmlns: "http://www.w3.org/2000/svg",
    x: "0px",
    y: "0px",
    "aria-label": ariaLabel,
    "data-testid": "revolving-dot-svg"
  }, React.createElement("circle", {
    fill: "none",
    stroke: color,
    strokeWidth: "4",
    cx: "50",
    cy: "50",
    r: Number("".concat(radius)) + 38,
    style: {
      opacity: 0.5
    }
  }), React.createElement("circle", {
    fill: color,
    stroke: color,
    strokeWidth: "3",
    cx: "8",
    cy: "54",
    r: radius
  }, React.createElement("animateTransform", {
    attributeName: "transform",
    dur: "2s",
    type: "rotate",
    from: "0 50 48",
    to: "360 50 52",
    repeatCount: "indefinite"
  }))));
};

/* harmony default export */ var loader_RevolvingDot = ((/* unused pure expression or super */ null && (RevolvingDot)));
;// CONCATENATED MODULE: ./node_modules/react-loader-spinner/dist/esm/loader/Rings.js
var Rings_assign = undefined && undefined.__assign || function () {
  Rings_assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return Rings_assign.apply(this, arguments);
};



var Rings_getDefaultStyle = function getDefaultStyle(visible) {
  return {
    display: visible ? 'flex' : 'none'
  };
};

var Rings = function Rings(_a) {
  var _b = _a.height,
      height = _b === void 0 ? 80 : _b,
      _c = _a.width,
      width = _c === void 0 ? 80 : _c,
      _d = _a.radius,
      radius = _d === void 0 ? 6 : _d,
      _e = _a.color,
      color = _e === void 0 ? 'green' : _e,
      _f = _a.ariaLabel,
      ariaLabel = _f === void 0 ? 'rings-loading' : _f,
      wrapperStyle = _a.wrapperStyle,
      wrapperClass = _a.wrapperClass,
      _g = _a.visible,
      visible = _g === void 0 ? true : _g;
  return React.createElement("div", {
    style: Rings_assign(Rings_assign({}, Rings_getDefaultStyle(visible)), wrapperStyle),
    className: wrapperClass,
    "data-testid": "rings-loading"
  }, React.createElement("svg", {
    width: width,
    height: height,
    viewBox: "0 0 45 45",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: color,
    "aria-label": ariaLabel,
    "data-testid": "rings-svg"
  }, React.createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    transform: "translate(1 1)",
    strokeWidth: "2"
  }, React.createElement("circle", {
    cx: "22",
    cy: "22",
    r: radius,
    strokeOpacity: "0"
  }, React.createElement("animate", {
    attributeName: "r",
    begin: "1.5s",
    dur: "3s",
    values: "6;22",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), React.createElement("animate", {
    attributeName: "stroke-opacity",
    begin: "1.5s",
    dur: "3s",
    values: "1;0",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), React.createElement("animate", {
    attributeName: "stroke-width",
    begin: "1.5s",
    dur: "3s",
    values: "2;0",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), React.createElement("circle", {
    cx: "22",
    cy: "22",
    r: radius,
    strokeOpacity: "0"
  }, React.createElement("animate", {
    attributeName: "r",
    begin: "3s",
    dur: "3s",
    values: "6;22",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), React.createElement("animate", {
    attributeName: "strokeOpacity",
    begin: "3s",
    dur: "3s",
    values: "1;0",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), React.createElement("animate", {
    attributeName: "strokeWidth",
    begin: "3s",
    dur: "3s",
    values: "2;0",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), React.createElement("circle", {
    cx: "22",
    cy: "22",
    r: Number(radius) + 2
  }, React.createElement("animate", {
    attributeName: "r",
    begin: "0s",
    dur: "1.5s",
    values: "6;1;2;3;4;5;6",
    calcMode: "linear",
    repeatCount: "indefinite"
  })))));
};
/* harmony default export */ var loader_Rings = ((/* unused pure expression or super */ null && (Rings)));
;// CONCATENATED MODULE: ./node_modules/react-loader-spinner/dist/esm/loader/RotatingSquare.js
var RotatingSquare_assign = undefined && undefined.__assign || function () {
  RotatingSquare_assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return RotatingSquare_assign.apply(this, arguments);
};



var RotatingSquare_getDefaultStyle = function getDefaultStyle(visible) {
  return {
    display: visible ? 'flex' : 'none'
  };
};

var RotatingSquare = function RotatingSquare(_a) {
  var _b = _a.style,
      style = _b === void 0 ? {} : _b,
      _c = _a.wrapperClass,
      wrapperClass = _c === void 0 ? '' : _c,
      _d = _a.color,
      color = _d === void 0 ? 'red' : _d,
      number = _a.strokeWidth,
      _e = _a.height,
      height = _e === void 0 ? 100 : _e,
      _f = _a.width,
      width = _f === void 0 ? 100 : _f,
      _g = _a.strokeWidth,
      strokeWidth = _g === void 0 ? 4 : _g,
      _h = _a.ariaLabel,
      ariaLabel = _h === void 0 ? 'rotating-square-loading' : _h,
      _j = _a.wrapperStyle,
      wrapperStyle = _j === void 0 ? {} : _j,
      _k = _a.visible,
      visible = _k === void 0 ? true : _k;
  return React.createElement("div", {
    style: RotatingSquare_assign(RotatingSquare_assign({}, RotatingSquare_getDefaultStyle(visible)), wrapperStyle),
    className: wrapperClass,
    "data-testid": "rotating-square-wrapper"
  }, React.createElement("svg", {
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    x: "0px",
    y: "0px",
    viewBox: "0 0 100 100",
    enableBackground: "new 0 0 100 100",
    height: "".concat(height),
    width: "".concat(width),
    "aria-label": ariaLabel,
    "data-testid": "rotating-square-svg",
    xmlSpace: "preserve"
  }, React.createElement("rect", {
    fill: "none",
    stroke: color,
    strokeWidth: strokeWidth,
    x: "25",
    y: "25",
    width: "50",
    height: "50"
  }, React.createElement("animateTransform", {
    attributeName: "transform",
    dur: "0.5s",
    from: "0 50 50",
    to: "180 50 50",
    type: "rotate",
    id: "strokeBox",
    attributeType: "XML",
    begin: "rectBox.end"
  })), React.createElement("rect", {
    x: "27",
    y: "27",
    fill: color,
    width: "46",
    height: "50"
  }, React.createElement("animate", {
    attributeName: "height",
    dur: "1.3s",
    attributeType: "XML",
    from: "50",
    to: "0",
    id: "rectBox",
    fill: "freeze",
    begin: "0s;strokeBox.end"
  }))));
};

/* harmony default export */ var loader_RotatingSquare = ((/* unused pure expression or super */ null && (RotatingSquare)));
;// CONCATENATED MODULE: ./node_modules/react-loader-spinner/dist/esm/loader/TailSpin.js
var TailSpin_assign = undefined && undefined.__assign || function () {
  TailSpin_assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return TailSpin_assign.apply(this, arguments);
};



var TailSpin_getDefaultStyle = function getDefaultStyle(visible) {
  return {
    display: visible ? 'flex' : 'none'
  };
};

var TailSpin = function TailSpin(_a) {
  var _b = _a.height,
      height = _b === void 0 ? 80 : _b,
      _c = _a.width,
      width = _c === void 0 ? 80 : _c,
      _d = _a.radius,
      radius = _d === void 0 ? 1 : _d,
      _e = _a.color,
      color = _e === void 0 ? 'green' : _e,
      _f = _a.ariaLabel,
      ariaLabel = _f === void 0 ? 'tail-spin-loading' : _f,
      wrapperStyle = _a.wrapperStyle,
      wrapperClass = _a.wrapperClass,
      _g = _a.visible,
      visible = _g === void 0 ? true : _g;
  return react.createElement("div", {
    style: TailSpin_assign(TailSpin_assign({}, TailSpin_getDefaultStyle(visible)), wrapperStyle),
    className: wrapperClass,
    "data-testid": "tail-spin-loading"
  }, react.createElement("svg", {
    width: width,
    height: height,
    viewBox: "0 0 38 38",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-label": ariaLabel,
    "data-testid": "tail-spin-svg"
  }, react.createElement("defs", null, react.createElement("linearGradient", {
    x1: "8.042%",
    y1: "0%",
    x2: "65.682%",
    y2: "23.865%",
    id: "a"
  }, react.createElement("stop", {
    stopColor: color,
    stopOpacity: "0",
    offset: "0%"
  }), react.createElement("stop", {
    stopColor: color,
    stopOpacity: ".631",
    offset: "63.146%"
  }), react.createElement("stop", {
    stopColor: color,
    offset: "100%"
  }))), react.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, react.createElement("g", {
    transform: "translate(1 1)"
  }, react.createElement("path", {
    d: "M36 18c0-9.94-8.06-18-18-18",
    id: "Oval-2",
    stroke: color,
    strokeWidth: "2"
  }, react.createElement("animateTransform", {
    attributeName: "transform",
    type: "rotate",
    from: "0 18 18",
    to: "360 18 18",
    dur: "0.9s",
    repeatCount: "indefinite"
  })), react.createElement("circle", {
    fill: "#fff",
    cx: "36",
    cy: "18",
    r: radius
  }, react.createElement("animateTransform", {
    attributeName: "transform",
    type: "rotate",
    from: "0 18 18",
    to: "360 18 18",
    dur: "0.9s",
    repeatCount: "indefinite"
  }))))));
};
/* harmony default export */ var loader_TailSpin = (TailSpin);
;// CONCATENATED MODULE: ./node_modules/react-loader-spinner/dist/esm/loader/ThreeCircles.js
var ThreeCircles_assign = undefined && undefined.__assign || function () {
  ThreeCircles_assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return ThreeCircles_assign.apply(this, arguments);
};



var ThreeCircles_getDefaultStyle = function getDefaultStyle(visible) {
  return {
    display: visible ? 'flex' : 'none'
  };
};

var ThreeCircles = function ThreeCircles(_a) {
  var _b = _a.wrapperStyle,
      wrapperStyle = _b === void 0 ? {} : _b,
      _c = _a.visible,
      visible = _c === void 0 ? true : _c,
      _d = _a.wrapperClass,
      wrapperClass = _d === void 0 ? '' : _d,
      _e = _a.height,
      height = _e === void 0 ? 100 : _e,
      _f = _a.width,
      width = _f === void 0 ? 100 : _f,
      _g = _a.color,
      color = _g === void 0 ? 'red' : _g,
      _h = _a.ariaLabel,
      ariaLabel = _h === void 0 ? 'rotating-three-circles' : _h,
      outerCircleColor = _a.outerCircleColor,
      innerCircleColor = _a.innerCircleColor,
      middleCircleColor = _a.middleCircleColor;
  return React.createElement("div", {
    style: ThreeCircles_assign(ThreeCircles_assign({}, ThreeCircles_getDefaultStyle(visible)), wrapperStyle),
    className: wrapperClass,
    "data-testid": "three-circles-wrapper"
  }, React.createElement("svg", {
    version: "1.1",
    height: "".concat(height),
    width: "".concat(width),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 100 100",
    enableBackground: "new 0 0 100 100",
    xmlSpace: "preserve",
    "data-testid": "three-circles-svg",
    "aria-label": ariaLabel
  }, React.createElement("path", {
    fill: outerCircleColor || color,
    "data-testid": "three-circles-svg-outer-circle",
    d: "M31.6,3.5C5.9,13.6-6.6,42.7,3.5,68.4c10.1,25.7,39.2,38.3,64.9,28.1l-3.1-7.9c-21.3,8.4-45.4-2-53.8-23.3\n  c-8.4-21.3,2-45.4,23.3-53.8L31.6,3.5z"
  }, React.createElement("animateTransform", {
    attributeName: "transform",
    attributeType: "XML",
    type: "rotate",
    dur: "2s",
    from: "0 50 50",
    to: "360 50 50",
    repeatCount: "indefinite"
  })), React.createElement("path", {
    fill: middleCircleColor || color,
    "data-testid": "three-circles-svg-middle-circle",
    d: "M42.3,39.6c5.7-4.3,13.9-3.1,18.1,2.7c4.3,5.7,3.1,13.9-2.7,18.1l4.1,5.5c8.8-6.5,10.6-19,4.1-27.7\n  c-6.5-8.8-19-10.6-27.7-4.1L42.3,39.6z"
  }, React.createElement("animateTransform", {
    attributeName: "transform",
    attributeType: "XML",
    type: "rotate",
    dur: "1s",
    from: "0 50 50",
    to: "-360 50 50",
    repeatCount: "indefinite"
  })), React.createElement("path", {
    fill: innerCircleColor || color,
    "data-testid": "three-circles-svg-inner-circle",
    d: "M82,35.7C74.1,18,53.4,10.1,35.7,18S10.1,46.6,18,64.3l7.6-3.4c-6-13.5,0-29.3,13.5-35.3s29.3,0,35.3,13.5\n  L82,35.7z"
  }, React.createElement("animateTransform", {
    attributeName: "transform",
    attributeType: "XML",
    type: "rotate",
    dur: "2s",
    from: "0 50 50",
    to: "360 50 50",
    repeatCount: "indefinite"
  }))));
};

/* harmony default export */ var loader_ThreeCircles = ((/* unused pure expression or super */ null && (ThreeCircles)));
;// CONCATENATED MODULE: ./node_modules/react-loader-spinner/dist/esm/loader/ThreeDots.js
var ThreeDots_assign = undefined && undefined.__assign || function () {
  ThreeDots_assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return ThreeDots_assign.apply(this, arguments);
};



var ThreeDots_getDefaultStyle = function getDefaultStyle(visible) {
  return {
    display: visible ? 'flex' : 'none'
  };
};

var ThreeDots = function ThreeDots(_a) {
  var _b = _a.height,
      height = _b === void 0 ? 80 : _b,
      _c = _a.width,
      width = _c === void 0 ? 80 : _c,
      _d = _a.radius,
      radius = _d === void 0 ? 9 : _d,
      _e = _a.color,
      color = _e === void 0 ? 'green' : _e,
      _f = _a.ariaLabel,
      ariaLabel = _f === void 0 ? 'three-dots-loading' : _f,
      wrapperStyle = _a.wrapperStyle,
      wrapperClass = _a.wrapperClass,
      _g = _a.visible,
      visible = _g === void 0 ? true : _g;
  return React.createElement("div", {
    style: ThreeDots_assign(ThreeDots_assign({}, ThreeDots_getDefaultStyle(visible)), wrapperStyle),
    className: wrapperClass,
    "data-testid": "three-dots-loading"
  }, React.createElement("svg", {
    width: width,
    height: height,
    viewBox: "0 0 120 30",
    xmlns: "http://www.w3.org/2000/svg",
    fill: color,
    "aria-label": ariaLabel,
    "data-testid": "three-dots-svg"
  }, React.createElement("circle", {
    cx: "15",
    cy: "15",
    r: Number(radius) + 6
  }, React.createElement("animate", {
    attributeName: "r",
    from: "15",
    to: "15",
    begin: "0s",
    dur: "0.8s",
    values: "15;9;15",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), React.createElement("animate", {
    attributeName: "fill-opacity",
    from: "1",
    to: "1",
    begin: "0s",
    dur: "0.8s",
    values: "1;.5;1",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), React.createElement("circle", {
    cx: "60",
    cy: "15",
    r: radius,
    attributeName: "fill-opacity",
    from: "1",
    to: "0.3"
  }, React.createElement("animate", {
    attributeName: "r",
    from: "9",
    to: "9",
    begin: "0s",
    dur: "0.8s",
    values: "9;15;9",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), React.createElement("animate", {
    attributeName: "fill-opacity",
    from: "0.5",
    to: "0.5",
    begin: "0s",
    dur: "0.8s",
    values: ".5;1;.5",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), React.createElement("circle", {
    cx: "105",
    cy: "15",
    r: Number(radius) + 6
  }, React.createElement("animate", {
    attributeName: "r",
    from: "15",
    to: "15",
    begin: "0s",
    dur: "0.8s",
    values: "15;9;15",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), React.createElement("animate", {
    attributeName: "fill-opacity",
    from: "1",
    to: "1",
    begin: "0s",
    dur: "0.8s",
    values: "1;.5;1",
    calcMode: "linear",
    repeatCount: "indefinite"
  }))));
};

/* harmony default export */ var loader_ThreeDots = ((/* unused pure expression or super */ null && (ThreeDots)));
;// CONCATENATED MODULE: ./node_modules/react-loader-spinner/dist/esm/loader/Triangle.js
var Triangle_assign = undefined && undefined.__assign || function () {
  Triangle_assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return Triangle_assign.apply(this, arguments);
};



var Triangle_getDefaultStyle = function getDefaultStyle(visible) {
  return {
    display: visible ? 'flex' : 'none'
  };
};

var Triangle = function Triangle(_a) {
  var _b = _a.height,
      height = _b === void 0 ? 80 : _b,
      _c = _a.width,
      width = _c === void 0 ? 80 : _c,
      _d = _a.color,
      color = _d === void 0 ? 'green' : _d,
      _e = _a.ariaLabel,
      ariaLabel = _e === void 0 ? 'triangle-loading' : _e,
      wrapperStyle = _a.wrapperStyle,
      wrapperClass = _a.wrapperClass,
      _f = _a.visible,
      visible = _f === void 0 ? true : _f;
  return React.createElement("div", {
    role: "presentation",
    style: Triangle_assign(Triangle_assign({}, Triangle_getDefaultStyle(visible)), wrapperStyle),
    className: "react-spinner-loader-svg ".concat(wrapperClass),
    "data-testid": "triangle-loading"
  }, React.createElement("svg", {
    id: "triangle",
    width: width,
    height: height,
    viewBox: "-3 -4 39 39",
    "aria-label": ariaLabel,
    "data-testid": "triangle-svg"
  }, React.createElement("polygon", {
    fill: "transparent",
    stroke: color,
    strokeWidth: "1",
    points: "16,0 32,32 0,32"
  })));
};

/* harmony default export */ var loader_Triangle = ((/* unused pure expression or super */ null && (Triangle)));
;// CONCATENATED MODULE: ./node_modules/react-loader-spinner/dist/esm/loader/Watch.js
var Watch_assign = undefined && undefined.__assign || function () {
  Watch_assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return Watch_assign.apply(this, arguments);
};



var Watch_getDefaultStyle = function getDefaultStyle(visible) {
  return {
    display: visible ? 'flex' : 'none'
  };
};

var Watch = function Watch(_a) {
  var _b = _a.height,
      height = _b === void 0 ? 80 : _b,
      _c = _a.width,
      width = _c === void 0 ? 80 : _c,
      _d = _a.radius,
      radius = _d === void 0 ? 48 : _d,
      _e = _a.color,
      color = _e === void 0 ? 'green' : _e,
      _f = _a.ariaLabel,
      ariaLabel = _f === void 0 ? 'watch-loading' : _f,
      wrapperStyle = _a.wrapperStyle,
      wrapperClass = _a.wrapperClass,
      _g = _a.visible,
      visible = _g === void 0 ? true : _g;
  return React.createElement("div", {
    style: Watch_assign(Watch_assign({}, Watch_getDefaultStyle(visible)), wrapperStyle),
    className: wrapperClass,
    "data-testid": "watch-loading"
  }, React.createElement("svg", {
    width: width,
    height: height,
    version: "1.1",
    id: "L2",
    xmlns: "http://www.w3.org/2000/svg",
    x: "0px",
    y: "0px",
    viewBox: "0 0 100 100",
    enableBackground: "new 0 0 100 100",
    xmlSpace: "preserve",
    "aria-label": ariaLabel,
    "data-testid": "watch-svg"
  }, React.createElement("circle", {
    fill: "none",
    stroke: color,
    strokeWidth: "4",
    strokeMiterlimit: "10",
    cx: "50",
    cy: "50",
    r: radius
  }), React.createElement("line", {
    fill: "none",
    strokeLinecap: "round",
    stroke: color,
    strokeWidth: "4",
    strokeMiterlimit: "10",
    x1: "50",
    y1: "50",
    x2: "85",
    y2: "50.5"
  }, React.createElement("animateTransform", {
    attributeName: "transform",
    dur: "2s",
    type: "rotate",
    from: "0 50 50",
    to: "360 50 50",
    repeatCount: "indefinite"
  })), React.createElement("line", {
    fill: "none",
    strokeLinecap: "round",
    stroke: color,
    strokeWidth: "4",
    strokeMiterlimit: "10",
    x1: "50",
    y1: "50",
    x2: "49.5",
    y2: "74"
  }, React.createElement("animateTransform", {
    attributeName: "transform",
    dur: "15s",
    type: "rotate",
    from: "0 50 50",
    to: "360 50 50",
    repeatCount: "indefinite"
  }))));
};

/* harmony default export */ var loader_Watch = ((/* unused pure expression or super */ null && (Watch)));
;// CONCATENATED MODULE: ./node_modules/react-loader-spinner/dist/esm/index.js






















// EXTERNAL MODULE: ./node_modules/tailwindcss/colors.js
var colors = __webpack_require__(7663);
var colors_default = /*#__PURE__*/__webpack_require__.n(colors);
// EXTERNAL MODULE: ./node_modules/tailwindcss-classnames/dist/bundle.js
var bundle = __webpack_require__(2244);
;// CONCATENATED MODULE: ./src/components/Button/styles.ts
var buttonBase=(0,bundle.classnames)((0,bundle.padding)('px-4','py-1'),(0,bundle.margin)('m-2'),(0,bundle.display)('inline-block'),(0,bundle.fontSize)('text-lg'),(0,bundle.fontWeight)('font-semibold'),(0,bundle.borderRadius)('rounded-lg'),(0,bundle.borderWidth)('border-2'));var buttonPrimary=(0,bundle.classnames)((0,bundle.textColor)('text-gray-800','hover:text-gray-200','disabled:text-gray-800'),(0,bundle.borderColor)('border-gray-200','hover:border-gray-800','disabled:border-gray-300'),(0,bundle.backgroundColor)('hover:bg-gray-800','disabled:bg-gray-200'));var buttonPrimaryActive=(0,bundle.classnames)((0,bundle.textColor)('text-gray-200'),(0,bundle.backgroundColor)('bg-gray-800'),(0,bundle.borderColor)('border-gray-800'));var buttonDanger=(0,bundle.classnames)((0,bundle.textColor)('text-white','hover:text-blue-200'),(0,bundle.borderColor)('border-red-400','hover:border-red-600'),(0,bundle.backgroundColor)('bg-red-600'));var buttonInnerBase=(0,bundle.classnames)((0,bundle.display)('flex'),(0,bundle.justifyContent)('justify-center'),(0,bundle.alignItems)('items-center'),(0,bundle.gap)('gap-2'));var buttonInnerRight=(0,bundle.classnames)((0,bundle.flexDirection)('flex-row-reverse'));
;// CONCATENATED MODULE: ./src/components/Button/Button.tsx
var _excluded=["children","to","href","icon","isLoading","variant"];var isActive=function isActive(args){return args.isCurrent?{className:(0,bundle.classnames)(buttonBase,buttonPrimaryActive)}:{};};var Button=/*#__PURE__*/react.forwardRef(function(_ref,ref){var children=_ref.children,to=_ref.to,href=_ref.href,icon=_ref.icon,isLoading=_ref.isLoading,_ref$variant=_ref.variant,variant=_ref$variant===void 0?'primary':_ref$variant,rest=_objectWithoutPropertiesLoose(_ref,_excluded);var buttonStyle=(0,react.useMemo)(function(){return variant==='primary'?(0,bundle.classnames)(buttonBase,buttonPrimary):(0,bundle.classnames)(buttonBase,buttonDanger);},[variant]);// TODO: finish here, it doesn't work properly now
var buttonInnerStyle=(0,react.useMemo)(function(){return!(icon!==null&&icon!==void 0&&icon.placement)?(0,bundle.classnames)(buttonInnerBase):(0,bundle.classnames)(buttonInnerBase,buttonInnerRight);},[icon]);var InnerButton=(0,react.useCallback)(function(){return/*#__PURE__*/react.createElement("div",{className:buttonInnerStyle},icon&&/*#__PURE__*/react.createElement(index_es/* FontAwesomeIcon */.G,{icon:icon.name}),children,isLoading&&/*#__PURE__*/react.createElement(loader_TailSpin,{width:30,height:30,color:(colors_default()).gray[600]}));},[buttonStyle,buttonInnerStyle,icon,children,isLoading]);return to?/*#__PURE__*/ // TODO: fix "any" usage here
react.createElement(gatsby_browser_entry/* Link */.rU,{to:to,className:buttonStyle,getProps:isActive,ref:ref},/*#__PURE__*/react.createElement(InnerButton,null)):href?/*#__PURE__*/ // TODO: pass ref here
react.createElement("a",{href:href,className:buttonStyle,target:"_blank",rel:"noreferrer"},/*#__PURE__*/react.createElement(InnerButton,null)):/*#__PURE__*/react.createElement("button",Object.assign({className:buttonStyle,ref:ref},rest),/*#__PURE__*/react.createElement(InnerButton,null));});Button.displayName='Button';/* harmony default export */ var Button_Button = ((/* unused pure expression or super */ null && (Button)));
;// CONCATENATED MODULE: ./src/components/Button/index.ts

;// CONCATENATED MODULE: ./src/components/Card.tsx
var Card=function Card(_ref){var header=_ref.header,contentTop=_ref.contentTop,footer=_ref.footer,_ref$enlargeOnHover=_ref.enlargeOnHover,enlargeOnHover=_ref$enlargeOnHover===void 0?false:_ref$enlargeOnHover,_ref$shadowOnHover=_ref.shadowOnHover,shadowOnHover=_ref$shadowOnHover===void 0?false:_ref$shadowOnHover;var baseStyle=(0,bundle.classnames)((0,bundle.margin)('m-2'),(0,bundle.padding)('p-2'),(0,bundle.borderRadius)('rounded-md'),(0,bundle.boxShadow)('shadow-md'),(0,bundle.textColor)('text-gray-600'),(0,bundle.backgroundColor)('bg-gray-100'),(0,bundle.flex)('flex-auto'),(0,bundle.height)('min-h-[280px]'));var enlargeOnHoverStyle=(0,bundle.classnames)((0,bundle.scale)('hover:scale-105'),(0,bundle.transitionProperty)('transition-transform'));var shadowOnHoverStyle=(0,bundle.classnames)((0,bundle.boxShadow)('hover:shadow-lg'),(0,bundle.transitionProperty)('transition-shadow'));var style=(0,bundle.classnames)(baseStyle,enlargeOnHover?enlargeOnHoverStyle:undefined,shadowOnHover?shadowOnHoverStyle:undefined);return/*#__PURE__*/react.createElement("div",{className:style},/*#__PURE__*/react.createElement("div",{className:"min-h-[70%] flex flex-col justify-start"},header&&/*#__PURE__*/react.createElement("div",{className:"m-1 p-1 border-gray-300 border-b-2 font-bold"},header),/*#__PURE__*/react.createElement("div",{className:"m-1 p-1"},contentTop)),footer&&/*#__PURE__*/react.createElement("div",{className:"m-1 p-1 rounded-md text-gray-600"},footer));};/* harmony default export */ var components_Card = ((/* unused pure expression or super */ null && (Card)));
;// CONCATENATED MODULE: ./src/components/Divider.tsx
var Divider=function Divider(_ref){var direction=_ref.direction,children=_ref.children;var ContainerElement=direction==='vertical'?'span':'div';var dividerStyle=(0,react.useMemo)(function(){return direction==='vertical'?(0,bundle.classnames)((0,bundle.height)('h-full'),(0,bundle.borderWidth)('border-r-2'),(0,bundle.width)('w-0'),(0,bundle.margin)('mx-2'),(0,bundle.borderColor)('border-gray-400')):(0,bundle.classnames)((0,bundle.width)('w-full'),(0,bundle.borderWidth)('border-b-2'),(0,bundle.height)('h-0'),(0,bundle.margin)('my-2'),(0,bundle.borderColor)('border-gray-400'));},[direction]);return/*#__PURE__*/react.createElement(ContainerElement,{className:dividerStyle},children);};/* harmony default export */ var components_Divider = ((/* unused pure expression or super */ null && (Divider)));
;// CONCATENATED MODULE: ./src/components/Icon.tsx
var Icon_excluded=["to","href","className"];var Icon=function Icon(_ref){var to=_ref.to,href=_ref.href,className=_ref.className,rest=_objectWithoutPropertiesLoose(_ref,Icon_excluded);return to?/*#__PURE__*/react.createElement(gatsby_browser_entry/* Link */.rU,{className:className,to:to},/*#__PURE__*/react.createElement(index_es/* FontAwesomeIcon */.G,rest)):href?/*#__PURE__*/react.createElement("a",{className:className,href:href},/*#__PURE__*/react.createElement(index_es/* FontAwesomeIcon */.G,rest)):/*#__PURE__*/react.createElement(index_es/* FontAwesomeIcon */.G,Object.assign({className:className},rest));};/* harmony default export */ var components_Icon = ((/* unused pure expression or super */ null && (Icon)));
;// CONCATENATED MODULE: ./src/components/InputText.tsx
var InputText_excluded=["label","placeholder","isRequired","isError","errorText","id"];var inputContainerStyle=(0,bundle.classnames)((0,bundle.display)('flex'),(0,bundle.flexDirection)('flex-col'));var inputTextBase=(0,bundle.classnames)((0,bundle.borderWidth)('border-2'),(0,bundle.borderRadius)('rounded-md'),(0,bundle.backgroundColor)('bg-white'),(0,bundle.padding)('p-1'));var inputTextNormal=(0,bundle.classnames)((0,bundle.borderColor)('border-gray-300'));var inputTextError=(0,bundle.classnames)((0,bundle.borderColor)('border-red-600'));var InputText=/*#__PURE__*/react.forwardRef(function(_ref,ref){var label=_ref.label,placeholder=_ref.placeholder,isRequired=_ref.isRequired,isError=_ref.isError,errorText=_ref.errorText,id=_ref.id,rest=_objectWithoutPropertiesLoose(_ref,InputText_excluded);var inputTextStyle=(0,bundle.classnames)(inputTextBase,isError?inputTextError:inputTextNormal);var inputTextLabelStyle=(0,bundle.classnames)((0,bundle.textColor)(isError?'text-red-600':'text-gray-600'));return/*#__PURE__*/react.createElement("div",{className:inputContainerStyle},label&&/*#__PURE__*/react.createElement("span",null,/*#__PURE__*/react.createElement("label",{className:"text-gray-600",htmlFor:id},label),isRequired&&/*#__PURE__*/react.createElement(react.Fragment,null,"\xA0",/*#__PURE__*/react.createElement("span",{className:"text-red-600"},"*"))),/*#__PURE__*/react.createElement("input",Object.assign({className:inputTextStyle,placeholder:placeholder,type:"text",id:id,name:id,ref:ref},rest)),errorText&&/*#__PURE__*/react.createElement("span",{className:inputTextLabelStyle},errorText));});InputText.displayName='InputText';/* harmony default export */ var components_InputText = ((/* unused pure expression or super */ null && (InputText)));
;// CONCATENATED MODULE: ./src/components/TextArea.tsx
var TextArea_excluded=["label","placeholder","isRequired","isError","errorText","id"];// TODO: maybe combine input related
// common styles into one style file
var textAreaContainerStyle=(0,bundle.classnames)((0,bundle.display)('flex'),(0,bundle.flexDirection)('flex-col'));var textAreaBase=(0,bundle.classnames)((0,bundle.width)('w-full'),(0,bundle.minHeight)('min-h-[300px]'),(0,bundle.borderWidth)('border-2'),(0,bundle.borderRadius)('rounded-md'),(0,bundle.backgroundColor)('bg-white'),(0,bundle.padding)('p-1'),(0,bundle.resize)('resize-none'));var textAreaNormal=(0,bundle.classnames)((0,bundle.borderColor)('border-gray-300'));var textAreaError=(0,bundle.classnames)((0,bundle.borderColor)('border-red-600'));var TextArea=/*#__PURE__*/react.forwardRef(function(_ref,ref){var label=_ref.label,placeholder=_ref.placeholder,isRequired=_ref.isRequired,isError=_ref.isError,errorText=_ref.errorText,id=_ref.id,rest=_objectWithoutPropertiesLoose(_ref,TextArea_excluded);var textAreaStyle=(0,bundle.classnames)(textAreaBase,isError?textAreaError:textAreaNormal);var textAreaLabelStyle=(0,bundle.classnames)((0,bundle.textColor)(isError?'text-red-600':'text-gray-600'));return/*#__PURE__*/react.createElement("div",{className:textAreaContainerStyle},label&&/*#__PURE__*/react.createElement("span",null,/*#__PURE__*/react.createElement("label",{className:"text-gray-600",htmlFor:id},label),isRequired&&/*#__PURE__*/react.createElement(react.Fragment,null,"\xA0",/*#__PURE__*/react.createElement("span",{className:"text-red-600"},"*"))),/*#__PURE__*/react.createElement("textarea",Object.assign({className:textAreaStyle,placeholder:placeholder,id:id,name:id,ref:ref},rest)),errorText&&/*#__PURE__*/react.createElement("span",{className:textAreaLabelStyle},errorText));});TextArea.displayName='TextArea';/* harmony default export */ var components_TextArea = ((/* unused pure expression or super */ null && (TextArea)));
;// CONCATENATED MODULE: ./src/components/index.ts


/***/ }),

/***/ 6280:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "A": function() { return /* reexport */ Layout; },
  "v": function() { return /* reexport */ Menu; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/@fortawesome/free-brands-svg-icons/index.es.js
var index_es = __webpack_require__(7190);
// EXTERNAL MODULE: ./src/components/index.ts + 31 modules
var components = __webpack_require__(5168);
// EXTERNAL MODULE: ./src/utils/useDeviceType.ts
var useDeviceType = __webpack_require__(5103);
// EXTERNAL MODULE: ./node_modules/tailwindcss-classnames/dist/bundle.js
var bundle = __webpack_require__(2244);
;// CONCATENATED MODULE: ./src/containers/Layout/styles.ts
var colors={gitHub:'#333333',linkedIn:'#2867b2',medium:'#000000',mapMarker:'#e5e7eb'};// Layout
var outerWrapper=(0,bundle.classnames)((0,bundle.minHeight)('min-h-full'),(0,bundle.position)('relative'));var contentArea=(0,bundle.classnames)((0,bundle.margin)('mx-2','tablet:mx-4','laptop:mx-24','desktop:mx-60'),(0,bundle.padding)('py-20','px-2','px-4','tablet:px-8'));// Header
var headerFlex=(0,bundle.classnames)((0,bundle.display)('flex'),(0,bundle.justifyContent)('justify-between'),(0,bundle.height)('h-8'),(0,bundle.alignItems)('items-end'),(0,bundle.borderWidth)('border-b-2'),(0,bundle.borderColor)('border-gray-400'),(0,bundle.margin)('mb-4'));var headerInnerFlex=(0,bundle.classnames)((0,bundle.display)('flex'),(0,bundle.flexDirection)('flex-col','laptop:flex-row'),(0,bundle.alignItems)('laptop:items-center'),(0,bundle.height)('laptop:h-full'),(0,bundle.fontSize)('text-lg'),(0,bundle.fontWeight)('font-semibold'),(0,bundle.margin)('m-2'),(0,bundle.textColor)('text-gray-800'));var iconFlex=(0,bundle.classnames)((0,bundle.display)('flex'),(0,bundle.gap)('gap-1'));// Footer
var styles_link=(0,bundle.classnames)((0,bundle.textColor)('text-pink-500'),(0,bundle.textDecoration)('hover:underline'));var footerFlex=(0,bundle.classnames)((0,bundle.display)('flex'),(0,bundle.justifyContent)('justify-end','tablet:justify-between'),(0,bundle.gap)('gap-8'),(0,bundle.alignItems)('items-center'),(0,bundle.textColor)('text-violet-400'),(0,bundle.fontWeight)('font-bold'),(0,bundle.backgroundColor)('bg-gray-600'),(0,bundle.padding)('py-2','px-4'),(0,bundle.position)('absolute'),(0,bundle.inset)('bottom-0','left-0','right-0'),(0,bundle.height)('h-14'));var footerInnerFlex=(0,bundle.classnames)((0,bundle.display)('flex'),(0,bundle.alignItems)('items-center'),(0,bundle.height)('h-full'));var footerLocationFlex=(0,bundle.classnames)((0,bundle.display)('flex'),(0,bundle.alignItems)('items-center'),(0,bundle.gap)('gap-1'));var mapMarker=(0,bundle.classnames)((0,bundle.margin)('mx-1'));
;// CONCATENATED MODULE: ./src/containers/Layout/Header.tsx
var Header=function Header(){var deviceType=(0,useDeviceType/* useDeviceType */.h)();var showDivider=(0,react.useMemo)(function(){return deviceType===useDeviceType/* DeviceType.LAPTOP */.Y.LAPTOP||deviceType===useDeviceType/* DeviceType.DESKTOP */.Y.DESKTOP;},[deviceType]);var isHamburger=(0,react.useMemo)(function(){return deviceType===useDeviceType/* DeviceType.MOBILE */.Y.MOBILE;},[deviceType]);return/*#__PURE__*/react.createElement("header",{className:headerFlex},/*#__PURE__*/react.createElement("div",{className:headerInnerFlex},"Berke YONCACI",showDivider&&/*#__PURE__*/react.createElement(components/* Divider */.iz,{direction:"vertical"}),/*#__PURE__*/react.createElement("div",{className:iconFlex},/*#__PURE__*/react.createElement(components/* Icon */.JO,{href:"https://www.linkedin.com/in/berkeyoncaci",icon:index_es/* faLinkedin */.D9H,size:"lg",color:colors.linkedIn}),/*#__PURE__*/react.createElement(components/* Icon */.JO,{href:"https://github.com/berke581",icon:index_es/* faGithub */.zhw,size:"lg",color:colors.gitHub}),/*#__PURE__*/react.createElement(components/* Icon */.JO,{href:"https://medium.com/@berkeyoncaci",icon:index_es/* faMedium */.$tD,size:"lg",color:colors.medium}))),/*#__PURE__*/react.createElement("div",null,/*#__PURE__*/react.createElement(Menu,{isHamburger:isHamburger})));};/* harmony default export */ var Layout_Header = ((/* unused pure expression or super */ null && (Header)));
// EXTERNAL MODULE: ./node_modules/@fortawesome/free-solid-svg-icons/index.es.js
var free_solid_svg_icons_index_es = __webpack_require__(8014);
;// CONCATENATED MODULE: ./src/containers/Layout/Footer.tsx
// TODO: maybe create HyperLink component
var Footer=function Footer(){var deviceType=(0,useDeviceType/* useDeviceType */.h)();return/*#__PURE__*/react.createElement("footer",{className:footerFlex},deviceType!==useDeviceType/* DeviceType.MOBILE */.Y.MOBILE&&/*#__PURE__*/react.createElement("div",null,"Created by Berke using\xA0",/*#__PURE__*/react.createElement("a",{href:"https://www.gatsbyjs.com/",className:styles_link},"Gatsby"),"\xA0and\xA0",/*#__PURE__*/react.createElement("a",{href:"https://tailwindcss.com/",className:styles_link},"Tailwind CSS"),"."),/*#__PURE__*/react.createElement("div",{className:footerInnerFlex},/*#__PURE__*/react.createElement("a",{href:"mailto:berkeyoncaci@gmail.com",className:styles_link},"Contact"),/*#__PURE__*/react.createElement(components/* Divider */.iz,{direction:"vertical"}),/*#__PURE__*/react.createElement("div",{className:footerLocationFlex},/*#__PURE__*/react.createElement(components/* Icon */.JO,{className:mapMarker,icon:free_solid_svg_icons_index_es/* faMapMarkerAlt */.FGq,size:"lg",color:colors.mapMarker}),/*#__PURE__*/react.createElement("div",null,"Ankara, Turkey"))));};/* harmony default export */ var Layout_Footer = ((/* unused pure expression or super */ null && (Footer)));
;// CONCATENATED MODULE: ./src/containers/Layout/Layout.tsx
var Layout=function Layout(_ref){var children=_ref.children;return/*#__PURE__*/react.createElement("div",{className:outerWrapper},/*#__PURE__*/react.createElement("div",{className:contentArea},/*#__PURE__*/react.createElement(Header,null),children),/*#__PURE__*/react.createElement(Footer,null));};/* harmony default export */ var Layout_Layout = ((/* unused pure expression or super */ null && (Layout)));
;// CONCATENATED MODULE: ./src/containers/Layout/index.ts

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(3935);
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getWindow.js
function getWindow(node) {
  if (node == null) {
    return window;
  }

  if (node.toString() !== '[object Window]') {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }

  return node;
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js


function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}

function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}

function isShadowRoot(node) {
  // IE 11 has no ShadowRoot
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }

  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}


;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/math.js
var math_max = Math.max;
var math_min = Math.min;
var round = Math.round;
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js


function getBoundingClientRect(element, includeScale) {
  if (includeScale === void 0) {
    includeScale = false;
  }

  var rect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;

  if (isHTMLElement(element) && includeScale) {
    var offsetHeight = element.offsetHeight;
    var offsetWidth = element.offsetWidth; // Do not attempt to divide by 0, otherwise we get `Infinity` as scale
    // Fallback to 1 in case both values are `0`

    if (offsetWidth > 0) {
      scaleX = round(rect.width) / offsetWidth || 1;
    }

    if (offsetHeight > 0) {
      scaleY = round(rect.height) / offsetHeight || 1;
    }
  }

  return {
    width: rect.width / scaleX,
    height: rect.height / scaleY,
    top: rect.top / scaleY,
    right: rect.right / scaleX,
    bottom: rect.bottom / scaleY,
    left: rect.left / scaleX,
    x: rect.left / scaleX,
    y: rect.top / scaleY
  };
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js

function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft: scrollLeft,
    scrollTop: scrollTop
  };
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js




function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js
function getNodeName(element) {
  return element ? (element.nodeName || '').toLowerCase() : null;
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js

function getDocumentElement(element) {
  // $FlowFixMe[incompatible-return]: assume body is always available
  return ((isElement(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
  element.document) || window.document).documentElement;
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js



function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  // Popper 1 is broken in this case and never had a bug report so let's assume
  // it's not an issue. I don't think anyone ever specifies width on <html>
  // anyway.
  // Browsers where the left scrollbar doesn't cause an issue report `0` for
  // this (e.g. Edge 2019, IE11, Safari)
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js

function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js

function isScrollParent(element) {
  // Firefox wants us to check `-x` and `-y` variations as well
  var _getComputedStyle = getComputedStyle(element),
      overflow = _getComputedStyle.overflow,
      overflowX = _getComputedStyle.overflowX,
      overflowY = _getComputedStyle.overflowY;

  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js









function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = round(rect.width) / element.offsetWidth || 1;
  var scaleY = round(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
} // Returns the composite rect of an element relative to its offsetParent.
// Composite means it takes into account transforms as well as layout.


function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }

  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };

  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }

    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }

  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js
 // Returns the layout rect of an element relative to its offsetParent. Layout
// means it doesn't take into account transforms.

function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element); // Use the clientRect sizes if it's not been transformed.
  // Fixes https://github.com/popperjs/popper-core/issues/1223

  var width = element.offsetWidth;
  var height = element.offsetHeight;

  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }

  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }

  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width: width,
    height: height
  };
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js



function getParentNode(element) {
  if (getNodeName(element) === 'html') {
    return element;
  }

  return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || ( // DOM Element detected
    isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element) // fallback

  );
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js




function getScrollParent(node) {
  if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
  }

  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }

  return getScrollParent(getParentNode(node));
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js




/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the
reference element's position.
*/

function listScrollParents(element, list) {
  var _element$ownerDocumen;

  if (list === void 0) {
    list = [];
  }

  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
  updatedList.concat(listScrollParents(getParentNode(target)));
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/isTableElement.js

function isTableElement(element) {
  return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js







function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle(element).position === 'fixed') {
    return null;
  }

  return element.offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block


function getContainingBlock(element) {
  var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') !== -1;
  var isIE = navigator.userAgent.indexOf('Trident') !== -1;

  if (isIE && isHTMLElement(element)) {
    // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
    var elementCss = getComputedStyle(element);

    if (elementCss.position === 'fixed') {
      return null;
    }
  }

  var currentNode = getParentNode(element);

  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }

  while (isHTMLElement(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle(currentNode); // This is non-exhaustive but covers the most common CSS properties that
    // create a containing block.
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

    if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }

  return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.


function getOffsetParent(element) {
  var window = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);

  while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent);
  }

  if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle(offsetParent).position === 'static')) {
    return window;
  }

  return offsetParent || getContainingBlock(element) || window;
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/enums.js
var enums_top = 'top';
var bottom = 'bottom';
var right = 'right';
var left = 'left';
var auto = 'auto';
var basePlacements = [enums_top, bottom, right, left];
var start = 'start';
var end = 'end';
var clippingParents = 'clippingParents';
var viewport = 'viewport';
var popper = 'popper';
var reference = 'reference';
var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var enums_placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []); // modifiers that need to read the DOM

var beforeRead = 'beforeRead';
var read = 'read';
var afterRead = 'afterRead'; // pure-logic modifiers

var beforeMain = 'beforeMain';
var main = 'main';
var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

var beforeWrite = 'beforeWrite';
var write = 'write';
var afterWrite = 'afterWrite';
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/orderModifiers.js
 // source: https://stackoverflow.com/questions/49875255

function order(modifiers) {
  var map = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function (modifier) {
    map.set(modifier.name, modifier);
  }); // On visiting object, check for its dependencies and visit them recursively

  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function (dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);

        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }

  modifiers.forEach(function (modifier) {
    if (!visited.has(modifier.name)) {
      // check for visited object
      sort(modifier);
    }
  });
  return result;
}

function orderModifiers(modifiers) {
  // order based on dependencies
  var orderedModifiers = order(modifiers); // order based on phase

  return modifierPhases.reduce(function (acc, phase) {
    return acc.concat(orderedModifiers.filter(function (modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/debounce.js
function debounce(fn) {
  var pending;
  return function () {
    if (!pending) {
      pending = new Promise(function (resolve) {
        Promise.resolve().then(function () {
          pending = undefined;
          resolve(fn());
        });
      });
    }

    return pending;
  };
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/mergeByName.js
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function (merged, current) {
    var existing = merged[current.name];
    merged[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged;
  }, {}); // IE11 does not support Object.values

  return Object.keys(merged).map(function (key) {
    return merged[key];
  });
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/createPopper.js














var INVALID_ELEMENT_ERROR = 'Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.';
var INFINITE_LOOP_ERROR = 'Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.';
var DEFAULT_OPTIONS = {
  placement: 'bottom',
  modifiers: [],
  strategy: 'absolute'
};

function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return !args.some(function (element) {
    return !(element && typeof element.getBoundingClientRect === 'function');
  });
}

function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }

  var _generatorOptions = generatorOptions,
      _generatorOptions$def = _generatorOptions.defaultModifiers,
      defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
      _generatorOptions$def2 = _generatorOptions.defaultOptions,
      defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper(reference, popper, options) {
    if (options === void 0) {
      options = defaultOptions;
    }

    var state = {
      placement: 'bottom',
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference,
        popper: popper
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state: state,
      setOptions: function setOptions(setOptionsAction) {
        var options = typeof setOptionsAction === 'function' ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options);
        state.scrollParents = {
          reference: isElement(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
          popper: listScrollParents(popper)
        }; // Orders the modifiers based on their dependencies and `phase`
        // properties

        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

        state.orderedModifiers = orderedModifiers.filter(function (m) {
          return m.enabled;
        }); // Validate the provided modifiers so that the consumer will get warned
        // if one of the modifiers is invalid for any reason

        if (false) { var _getComputedStyle, marginTop, marginRight, marginBottom, marginLeft, flipModifier, modifiers; }

        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }

        var _state$elements = state.elements,
            reference = _state$elements.reference,
            popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
        // anymore

        if (!areValidElements(reference, popper)) {
          if (false) {}

          return;
        } // Store the reference and popper rects to be read by modifiers


        state.rects = {
          reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === 'fixed'),
          popper: getLayoutRect(popper)
        }; // Modifiers have the ability to reset the current update cycle. The
        // most common use case for this is the `flip` modifier changing the
        // placement, which then needs to re-run all the modifiers, because the
        // logic was previously ran for the previous placement and is therefore
        // stale/incorrect

        state.reset = false;
        state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
        // is filled with the initial data specified by the modifier. This means
        // it doesn't persist and is fresh on each update.
        // To ensure persistent data, use `${name}#persistent`

        state.orderedModifiers.forEach(function (modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        var __debug_loops__ = 0;

        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (false) {}

          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }

          var _state$orderedModifie = state.orderedModifiers[index],
              fn = _state$orderedModifie.fn,
              _state$orderedModifie2 = _state$orderedModifie.options,
              _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
              name = _state$orderedModifie.name;

          if (typeof fn === 'function') {
            state = fn({
              state: state,
              options: _options,
              name: name,
              instance: instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce(function () {
        return new Promise(function (resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };

    if (!areValidElements(reference, popper)) {
      if (false) {}

      return instance;
    }

    instance.setOptions(options).then(function (state) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state);
      }
    }); // Modifiers have the ability to execute arbitrary code before the first
    // update cycle runs. They will be executed in the same order as the update
    // cycle. This is useful when a modifier adds some persistent data that
    // other modifiers need to use, but the modifier is run after the dependent
    // one.

    function runModifierEffects() {
      state.orderedModifiers.forEach(function (_ref3) {
        var name = _ref3.name,
            _ref3$options = _ref3.options,
            options = _ref3$options === void 0 ? {} : _ref3$options,
            effect = _ref3.effect;

        if (typeof effect === 'function') {
          var cleanupFn = effect({
            state: state,
            name: name,
            instance: instance,
            options: options
          });

          var noopFn = function noopFn() {};

          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }

    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function (fn) {
        return fn();
      });
      effectCleanupFns = [];
    }

    return instance;
  };
}
var createPopper = /*#__PURE__*/(/* unused pure expression or super */ null && (popperGenerator())); // eslint-disable-next-line import/no-unused-modules


;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/eventListeners.js
 // eslint-disable-next-line import/no-unused-modules

var passive = {
  passive: true
};

function effect(_ref) {
  var state = _ref.state,
      instance = _ref.instance,
      options = _ref.options;
  var _options$scroll = options.scroll,
      scroll = _options$scroll === void 0 ? true : _options$scroll,
      _options$resize = options.resize,
      resize = _options$resize === void 0 ? true : _options$resize;
  var window = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

  if (scroll) {
    scrollParents.forEach(function (scrollParent) {
      scrollParent.addEventListener('scroll', instance.update, passive);
    });
  }

  if (resize) {
    window.addEventListener('resize', instance.update, passive);
  }

  return function () {
    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.removeEventListener('scroll', instance.update, passive);
      });
    }

    if (resize) {
      window.removeEventListener('resize', instance.update, passive);
    }
  };
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ var eventListeners = ({
  name: 'eventListeners',
  enabled: true,
  phase: 'write',
  fn: function fn() {},
  effect: effect,
  data: {}
});
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getBasePlacement.js

function getBasePlacement(placement) {
  return placement.split('-')[0];
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getVariation.js
function getVariation(placement) {
  return placement.split('-')[1];
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js
function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/computeOffsets.js




function computeOffsets(_ref) {
  var reference = _ref.reference,
      element = _ref.element,
      placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference.x + reference.width / 2 - element.width / 2;
  var commonY = reference.y + reference.height / 2 - element.height / 2;
  var offsets;

  switch (basePlacement) {
    case enums_top:
      offsets = {
        x: commonX,
        y: reference.y - element.height
      };
      break;

    case bottom:
      offsets = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;

    case right:
      offsets = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;

    case left:
      offsets = {
        x: reference.x - element.width,
        y: commonY
      };
      break;

    default:
      offsets = {
        x: reference.x,
        y: reference.y
      };
  }

  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;

  if (mainAxis != null) {
    var len = mainAxis === 'y' ? 'height' : 'width';

    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
        break;

      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
        break;

      default:
    }
  }

  return offsets;
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js


function popperOffsets(_ref) {
  var state = _ref.state,
      name = _ref.name; // Offsets are the actual position the popper needs to have to be
  // properly positioned near its reference element
  // This is the most basic placement, and will be adjusted by
  // the modifiers in the next step

  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: 'absolute',
    placement: state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ var modifiers_popperOffsets = ({
  name: 'popperOffsets',
  enabled: true,
  phase: 'read',
  fn: popperOffsets,
  data: {}
});
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/computeStyles.js







 // eslint-disable-next-line import/no-unused-modules

var unsetSides = {
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto'
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.

function roundOffsetsByDPR(_ref) {
  var x = _ref.x,
      y = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(x * dpr) / dpr || 0,
    y: round(y * dpr) / dpr || 0
  };
}

function mapToStyles(_ref2) {
  var _Object$assign2;

  var popper = _ref2.popper,
      popperRect = _ref2.popperRect,
      placement = _ref2.placement,
      variation = _ref2.variation,
      offsets = _ref2.offsets,
      position = _ref2.position,
      gpuAcceleration = _ref2.gpuAcceleration,
      adaptive = _ref2.adaptive,
      roundOffsets = _ref2.roundOffsets,
      isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x,
      x = _offsets$x === void 0 ? 0 : _offsets$x,
      _offsets$y = offsets.y,
      y = _offsets$y === void 0 ? 0 : _offsets$y;

  var _ref3 = typeof roundOffsets === 'function' ? roundOffsets({
    x: x,
    y: y
  }) : {
    x: x,
    y: y
  };

  x = _ref3.x;
  y = _ref3.y;
  var hasX = offsets.hasOwnProperty('x');
  var hasY = offsets.hasOwnProperty('y');
  var sideX = left;
  var sideY = enums_top;
  var win = window;

  if (adaptive) {
    var offsetParent = getOffsetParent(popper);
    var heightProp = 'clientHeight';
    var widthProp = 'clientWidth';

    if (offsetParent === getWindow(popper)) {
      offsetParent = getDocumentElement(popper);

      if (getComputedStyle(offsetParent).position !== 'static' && position === 'absolute') {
        heightProp = 'scrollHeight';
        widthProp = 'scrollWidth';
      }
    } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it


    offsetParent = offsetParent;

    if (placement === enums_top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : // $FlowFixMe[prop-missing]
      offsetParent[heightProp];
      y -= offsetY - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }

    if (placement === left || (placement === enums_top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : // $FlowFixMe[prop-missing]
      offsetParent[widthProp];
      x -= offsetX - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }

  var commonStyles = Object.assign({
    position: position
  }, adaptive && unsetSides);

  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x: x,
    y: y
  }) : {
    x: x,
    y: y
  };

  x = _ref4.x;
  y = _ref4.y;

  if (gpuAcceleration) {
    var _Object$assign;

    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }

  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}

function computeStyles(_ref5) {
  var state = _ref5.state,
      options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration,
      gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
      _options$adaptive = options.adaptive,
      adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
      _options$roundOffsets = options.roundOffsets,
      roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;

  if (false) { var transitionProperty; }

  var commonStyles = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration: gpuAcceleration,
    isFixed: state.options.strategy === 'fixed'
  };

  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive: adaptive,
      roundOffsets: roundOffsets
    })));
  }

  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: 'absolute',
      adaptive: false,
      roundOffsets: roundOffsets
    })));
  }

  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-placement': state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ var modifiers_computeStyles = ({
  name: 'computeStyles',
  enabled: true,
  phase: 'beforeWrite',
  fn: computeStyles,
  data: {}
});
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/applyStyles.js

 // This modifier takes the styles prepared by the `computeStyles` modifier
// and applies them to the HTMLElements such as popper and arrow

function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function (name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name]; // arrow is optional + virtual elements

    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    } // Flow doesn't support to extend this property, but it's the most
    // effective way to apply styles to an HTMLElement
    // $FlowFixMe[cannot-write]


    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function (name) {
      var value = attributes[name];

      if (value === false) {
        element.removeAttribute(name);
      } else {
        element.setAttribute(name, value === true ? '' : value);
      }
    });
  });
}

function applyStyles_effect(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: '0',
      top: '0',
      margin: '0'
    },
    arrow: {
      position: 'absolute'
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;

  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }

  return function () {
    Object.keys(state.elements).forEach(function (name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

      var style = styleProperties.reduce(function (style, property) {
        style[property] = '';
        return style;
      }, {}); // arrow is optional + virtual elements

      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }

      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ var modifiers_applyStyles = ({
  name: 'applyStyles',
  enabled: true,
  phase: 'write',
  fn: applyStyles,
  effect: applyStyles_effect,
  requires: ['computeStyles']
});
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/offset.js

 // eslint-disable-next-line import/no-unused-modules

function distanceAndSkiddingToXY(placement, rects, offset) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, enums_top].indexOf(basePlacement) >= 0 ? -1 : 1;

  var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
    placement: placement
  })) : offset,
      skidding = _ref[0],
      distance = _ref[1];

  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}

function offset(_ref2) {
  var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
  var _options$offset = options.offset,
      offset = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = enums_placements.reduce(function (acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement],
      x = _data$state$placement.x,
      y = _data$state$placement.y;

  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ var modifiers_offset = ({
  name: 'offset',
  enabled: true,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: offset
});
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getOppositePlacement.js
var hash = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js
var getOppositeVariationPlacement_hash = {
  start: 'end',
  end: 'start'
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function (matched) {
    return getOppositeVariationPlacement_hash[matched];
  });
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js



function getViewportRect(element) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0; // NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
  // can be obscured underneath it.
  // Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
  // if it isn't open, so if this isn't available, the popper will be detected
  // to overflow the bottom of the screen too early.

  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height; // Uses Layout Viewport (like Chrome; Safari does not currently)
    // In Chrome, it returns a value very close to 0 (+/-) but contains rounding
    // errors due to floating point numbers, so we need to check precision.
    // Safari returns a number <= 0, usually < -1 when pinch-zoomed
    // Feature detection fails in mobile emulation mode in Chrome.
    // Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
    // 0.001
    // Fallback here: "Not Safari" userAgent

    if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }

  return {
    width: width,
    height: height,
    x: x + getWindowScrollBarX(element),
    y: y
  };
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js




 // Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable

function getDocumentRect(element) {
  var _element$ownerDocumen;

  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = math_max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = math_max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;

  if (getComputedStyle(body || html).direction === 'rtl') {
    x += math_max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }

  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/contains.js

function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

  if (parent.contains(child)) {
    return true;
  } // then fallback to custom implementation with Shadow DOM support
  else if (rootNode && isShadowRoot(rootNode)) {
    var next = child;

    do {
      if (next && parent.isSameNode(next)) {
        return true;
      } // $FlowFixMe[prop-missing]: need a better way to handle this...


      next = next.parentNode || next.host;
    } while (next);
  } // Give up, the result is false


  return false;
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/rectToClientRect.js
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js















function getInnerBoundingClientRect(element) {
  var rect = getBoundingClientRect(element);
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}

function getClientRectFromMixedType(element, clippingParent) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`


function getClippingParents(element) {
  var clippingParents = listScrollParents(getParentNode(element));
  var canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;

  if (!isElement(clipperElement)) {
    return [];
  } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414


  return clippingParents.filter(function (clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== 'body';
  });
} // Gets the maximum area that the element is visible in due to any number of
// clipping parents


function getClippingRect(element, boundary, rootBoundary) {
  var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents[0];
  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent);
    accRect.top = math_max(rect.top, accRect.top);
    accRect.right = math_min(rect.right, accRect.right);
    accRect.bottom = math_min(rect.bottom, accRect.bottom);
    accRect.left = math_max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getFreshSideObject.js
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/mergePaddingObject.js

function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/expandToHashMap.js
function expandToHashMap(value, keys) {
  return keys.reduce(function (hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/detectOverflow.js








 // eslint-disable-next-line import/no-unused-modules

function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$placement = _options.placement,
      placement = _options$placement === void 0 ? state.placement : _options$placement,
      _options$boundary = _options.boundary,
      boundary = _options$boundary === void 0 ? clippingParents : _options$boundary,
      _options$rootBoundary = _options.rootBoundary,
      rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary,
      _options$elementConte = _options.elementContext,
      elementContext = _options$elementConte === void 0 ? popper : _options$elementConte,
      _options$altBoundary = _options.altBoundary,
      altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
      _options$padding = _options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: 'absolute',
    placement: placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
  // 0 or negative = within the clipping rect

  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

  if (elementContext === popper && offsetData) {
    var offset = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function (key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [enums_top, bottom].indexOf(key) >= 0 ? 'y' : 'x';
      overflowOffsets[key] += offset[axis] * multiply;
    });
  }

  return overflowOffsets;
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js




function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      placement = _options.placement,
      boundary = _options.boundary,
      rootBoundary = _options.rootBoundary,
      padding = _options.padding,
      flipVariations = _options.flipVariations,
      _options$allowedAutoP = _options.allowedAutoPlacements,
      allowedAutoPlacements = _options$allowedAutoP === void 0 ? enums_placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function (placement) {
    return getVariation(placement) === variation;
  }) : basePlacements;
  var allowedPlacements = placements.filter(function (placement) {
    return allowedAutoPlacements.indexOf(placement) >= 0;
  });

  if (allowedPlacements.length === 0) {
    allowedPlacements = placements;

    if (false) {}
  } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...


  var overflows = allowedPlacements.reduce(function (acc, placement) {
    acc[placement] = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding
    })[getBasePlacement(placement)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function (a, b) {
    return overflows[a] - overflows[b];
  });
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/flip.js






 // eslint-disable-next-line import/no-unused-modules

function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }

  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}

function flip(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;

  if (state.modifiersData[name]._skip) {
    return;
  }

  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
      specifiedFallbackPlacements = options.fallbackPlacements,
      padding = options.padding,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      _options$flipVariatio = options.flipVariations,
      flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
      allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
    return acc.concat(getBasePlacement(placement) === auto ? computeAutoPlacement(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      flipVariations: flipVariations,
      allowedAutoPlacements: allowedAutoPlacements
    }) : placement);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements[0];

  for (var i = 0; i < placements.length; i++) {
    var placement = placements[i];

    var _basePlacement = getBasePlacement(placement);

    var isStartVariation = getVariation(placement) === start;
    var isVertical = [enums_top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? 'width' : 'height';
    var overflow = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      altBoundary: altBoundary,
      padding: padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : enums_top;

    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }

    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];

    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }

    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }

    if (checks.every(function (check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }

    checksMap.set(placement, checks);
  }

  if (makeFallbackChecks) {
    // `2` may be desired in some cases – research later
    var numberOfChecks = flipVariations ? 3 : 1;

    var _loop = function _loop(_i) {
      var fittingPlacement = placements.find(function (placement) {
        var checks = checksMap.get(placement);

        if (checks) {
          return checks.slice(0, _i).every(function (check) {
            return check;
          });
        }
      });

      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };

    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);

      if (_ret === "break") break;
    }
  }

  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ var modifiers_flip = ({
  name: 'flip',
  enabled: true,
  phase: 'main',
  fn: flip,
  requiresIfExists: ['offset'],
  data: {
    _skip: false
  }
});
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getAltAxis.js
function getAltAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/within.js

function within(min, value, max) {
  return math_max(min, math_min(value, max));
}
function withinMaxClamp(min, value, max) {
  var v = within(min, value, max);
  return v > max ? max : v;
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/preventOverflow.js












function preventOverflow(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;
  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      padding = options.padding,
      _options$tether = options.tether,
      tether = _options$tether === void 0 ? true : _options$tether,
      _options$tetherOffset = options.tetherOffset,
      tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary: boundary,
    rootBoundary: rootBoundary,
    padding: padding,
    altBoundary: altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === 'number' ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data = {
    x: 0,
    y: 0
  };

  if (!popperOffsets) {
    return;
  }

  if (checkMainAxis) {
    var _offsetModifierState$;

    var mainSide = mainAxis === 'y' ? enums_top : left;
    var altSide = mainAxis === 'y' ? bottom : right;
    var len = mainAxis === 'y' ? 'height' : 'width';
    var offset = popperOffsets[mainAxis];
    var min = offset + overflow[mainSide];
    var max = offset - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
    // outside the reference bounds

    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
    // to include its full size in the calculation. If the reference is small
    // and near the edge of a boundary, the popper can overflow even if the
    // reference is not overflowing as well (e.g. virtual elements with no
    // width or height)

    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? math_min(min, tetherMin) : min, offset, tether ? math_max(max, tetherMax) : max);
    popperOffsets[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset;
  }

  if (checkAltAxis) {
    var _offsetModifierState$2;

    var _mainSide = mainAxis === 'x' ? enums_top : left;

    var _altSide = mainAxis === 'x' ? bottom : right;

    var _offset = popperOffsets[altAxis];

    var _len = altAxis === 'y' ? 'height' : 'width';

    var _min = _offset + overflow[_mainSide];

    var _max = _offset - overflow[_altSide];

    var isOriginSide = [enums_top, left].indexOf(basePlacement) !== -1;

    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;

    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;

    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;

    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);

    popperOffsets[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ var modifiers_preventOverflow = ({
  name: 'preventOverflow',
  enabled: true,
  phase: 'main',
  fn: preventOverflow,
  requiresIfExists: ['offset']
});
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/arrow.js









 // eslint-disable-next-line import/no-unused-modules

var toPaddingObject = function toPaddingObject(padding, state) {
  padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
};

function arrow(_ref) {
  var _state$modifiersData$;

  var state = _ref.state,
      name = _ref.name,
      options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? 'height' : 'width';

  if (!arrowElement || !popperOffsets) {
    return;
  }

  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === 'y' ? enums_top : left;
  var maxProp = axis === 'y' ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
  var startDiff = popperOffsets[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
  // outside of the popper bounds

  var min = paddingObject[minProp];
  var max = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset = within(min, center, max); // Prevents breaking syntax highlighting...

  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}

function arrow_effect(_ref2) {
  var state = _ref2.state,
      options = _ref2.options;
  var _options$element = options.element,
      arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;

  if (arrowElement == null) {
    return;
  } // CSS selector


  if (typeof arrowElement === 'string') {
    arrowElement = state.elements.popper.querySelector(arrowElement);

    if (!arrowElement) {
      return;
    }
  }

  if (false) {}

  if (!contains(state.elements.popper, arrowElement)) {
    if (false) {}

    return;
  }

  state.elements.arrow = arrowElement;
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ var modifiers_arrow = ({
  name: 'arrow',
  enabled: true,
  phase: 'main',
  fn: arrow,
  effect: arrow_effect,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow']
});
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/hide.js



function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }

  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}

function isAnySideFullyClipped(overflow) {
  return [enums_top, right, bottom, left].some(function (side) {
    return overflow[side] >= 0;
  });
}

function hide(_ref) {
  var state = _ref.state,
      name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: 'reference'
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets: referenceClippingOffsets,
    popperEscapeOffsets: popperEscapeOffsets,
    isReferenceHidden: isReferenceHidden,
    hasPopperEscaped: hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-reference-hidden': isReferenceHidden,
    'data-popper-escaped': hasPopperEscaped
  });
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ var modifiers_hide = ({
  name: 'hide',
  enabled: true,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: hide
});
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/popper.js










var defaultModifiers = [eventListeners, modifiers_popperOffsets, modifiers_computeStyles, modifiers_applyStyles, modifiers_offset, modifiers_flip, modifiers_preventOverflow, modifiers_arrow, modifiers_hide];
var popper_createPopper = /*#__PURE__*/popperGenerator({
  defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

 // eslint-disable-next-line import/no-unused-modules

 // eslint-disable-next-line import/no-unused-modules


// EXTERNAL MODULE: ./node_modules/react-fast-compare/index.js
var react_fast_compare = __webpack_require__(2993);
var react_fast_compare_default = /*#__PURE__*/__webpack_require__.n(react_fast_compare);
;// CONCATENATED MODULE: ./node_modules/react-popper/lib/esm/utils.js

/**
 * Takes an argument and if it's an array, returns the first item in the array,
 * otherwise returns the argument. Used for Preact compatibility.
 */

var unwrapArray = function unwrapArray(arg) {
  return Array.isArray(arg) ? arg[0] : arg;
};
/**
 * Takes a maybe-undefined function and arbitrary args and invokes the function
 * only if it is defined.
 */

var safeInvoke = function safeInvoke(fn) {
  if (typeof fn === 'function') {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return fn.apply(void 0, args);
  }
};
/**
 * Sets a ref using either a ref callback or a ref object
 */

var setRef = function setRef(ref, node) {
  // if its a function call it
  if (typeof ref === 'function') {
    return safeInvoke(ref, node);
  } // otherwise we should treat it as a ref object
  else if (ref != null) {
    ref.current = node;
  }
};
/**
 * Simple ponyfill for Object.fromEntries
 */

var fromEntries = function fromEntries(entries) {
  return entries.reduce(function (acc, _ref) {
    var key = _ref[0],
        value = _ref[1];
    acc[key] = value;
    return acc;
  }, {});
};
/**
 * Small wrapper around `useLayoutEffect` to get rid of the warning on SSR envs
 */

var useIsomorphicLayoutEffect = typeof window !== 'undefined' && window.document && window.document.createElement ? react.useLayoutEffect : react.useEffect;
;// CONCATENATED MODULE: ./node_modules/react-popper/lib/esm/usePopper.js





var EMPTY_MODIFIERS = [];
var usePopper = function usePopper(referenceElement, popperElement, options) {
  if (options === void 0) {
    options = {};
  }

  var prevOptions = react.useRef(null);
  var optionsWithDefaults = {
    onFirstUpdate: options.onFirstUpdate,
    placement: options.placement || 'bottom',
    strategy: options.strategy || 'absolute',
    modifiers: options.modifiers || EMPTY_MODIFIERS
  };

  var _React$useState = react.useState({
    styles: {
      popper: {
        position: optionsWithDefaults.strategy,
        left: '0',
        top: '0'
      },
      arrow: {
        position: 'absolute'
      }
    },
    attributes: {}
  }),
      state = _React$useState[0],
      setState = _React$useState[1];

  var updateStateModifier = react.useMemo(function () {
    return {
      name: 'updateState',
      enabled: true,
      phase: 'write',
      fn: function fn(_ref) {
        var state = _ref.state;
        var elements = Object.keys(state.elements);
        react_dom.flushSync(function () {
          setState({
            styles: fromEntries(elements.map(function (element) {
              return [element, state.styles[element] || {}];
            })),
            attributes: fromEntries(elements.map(function (element) {
              return [element, state.attributes[element]];
            }))
          });
        });
      },
      requires: ['computeStyles']
    };
  }, []);
  var popperOptions = react.useMemo(function () {
    var newOptions = {
      onFirstUpdate: optionsWithDefaults.onFirstUpdate,
      placement: optionsWithDefaults.placement,
      strategy: optionsWithDefaults.strategy,
      modifiers: [].concat(optionsWithDefaults.modifiers, [updateStateModifier, {
        name: 'applyStyles',
        enabled: false
      }])
    };

    if (react_fast_compare_default()(prevOptions.current, newOptions)) {
      return prevOptions.current || newOptions;
    } else {
      prevOptions.current = newOptions;
      return newOptions;
    }
  }, [optionsWithDefaults.onFirstUpdate, optionsWithDefaults.placement, optionsWithDefaults.strategy, optionsWithDefaults.modifiers, updateStateModifier]);
  var popperInstanceRef = react.useRef();
  useIsomorphicLayoutEffect(function () {
    if (popperInstanceRef.current) {
      popperInstanceRef.current.setOptions(popperOptions);
    }
  }, [popperOptions]);
  useIsomorphicLayoutEffect(function () {
    if (referenceElement == null || popperElement == null) {
      return;
    }

    var createPopper = options.createPopper || popper_createPopper;
    var popperInstance = createPopper(referenceElement, popperElement, popperOptions);
    popperInstanceRef.current = popperInstance;
    return function () {
      popperInstance.destroy();
      popperInstanceRef.current = null;
    };
  }, [referenceElement, popperElement, options.createPopper]);
  return {
    state: popperInstanceRef.current ? popperInstanceRef.current.state : null,
    styles: state.styles,
    attributes: state.attributes,
    update: popperInstanceRef.current ? popperInstanceRef.current.update : null,
    forceUpdate: popperInstanceRef.current ? popperInstanceRef.current.forceUpdate : null
  };
};
;// CONCATENATED MODULE: ./src/containers/Menu/MenuContainer.tsx
var MenuContainer=/*#__PURE__*/react.forwardRef(function(_ref,ref){var styles=_ref.styles,attributes=_ref.attributes,children=_ref.children;return/*#__PURE__*/react.createElement("div",Object.assign({className:"fixed z-[1000] border-2 border-gray-300 bg-gray-600 rounded-md flex flex-col p-1 min-w-[120px]",ref:ref,style:styles.popper},attributes.popper),children);});MenuContainer.displayName='MenuContainer';
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js
var gatsby_browser_entry = __webpack_require__(1597);
;// CONCATENATED MODULE: ./src/containers/Menu/styles.ts
var menuItemBase=(0,bundle.classnames)((0,bundle.textColor)('text-gray-200'),(0,bundle.borderRadius)('rounded-sm'),(0,bundle.backgroundColor)('bg-gray-600','hover:bg-gray-700'),(0,bundle.padding)('p-2'));var menuItemActive=(0,bundle.classnames)((0,bundle.backgroundColor)('bg-gray-700'));
;// CONCATENATED MODULE: ./src/containers/Menu/MenuItem.tsx
var isActive=function isActive(args){return args.isCurrent?{className:(0,bundle.classnames)(menuItemBase,menuItemActive)}:{};};var MenuItem=function MenuItem(_ref){var to=_ref.to,children=_ref.children;return/*#__PURE__*/react.createElement(gatsby_browser_entry/* Link */.rU,{to:to,className:menuItemBase,getProps:isActive},children);};
;// CONCATENATED MODULE: ./src/utils/useHandleClickOutside.ts
var useHandleClickOutside=function useHandleClickOutside(ref,callback){// Call the callback function when clicked outside
var handleClickOutside=function handleClickOutside(event){// TODO: handle any
if(ref.current&&!ref.current.contains(event.target)){callback();}};(0,react.useEffect)(function(){// Bind the event listener
document.addEventListener('mouseup',handleClickOutside);return function(){// Unbind the event listener on clean up
document.removeEventListener('mouseup',handleClickOutside);};});};
;// CONCATENATED MODULE: ./src/containers/Menu/HamburgerMenu.tsx
// TODO: unify menus
var HamburgerMenu=function HamburgerMenu(){var _useState=(0,react.useState)(null),referenceElement=_useState[0],setReferenceElement=_useState[1];var _useState2=(0,react.useState)(null),popperElement=_useState2[0],setPopperElement=_useState2[1];var containerElementRef=(0,react.useRef)(null);var _useState3=(0,react.useState)(false),isVisible=_useState3[0],setIsVisible=_useState3[1];var _usePopper=usePopper(referenceElement,popperElement,{placement:'bottom-start',modifiers:[{name:'offset',options:{offset:[0,4]}}]}),styles=_usePopper.styles,attributes=_usePopper.attributes;var handleClickOutside=function handleClickOutside(){setIsVisible(false);};useHandleClickOutside(containerElementRef,handleClickOutside);return/*#__PURE__*/react.createElement("span",{ref:containerElementRef},/*#__PURE__*/react.createElement(components/* Button */.zx,{icon:{name:free_solid_svg_icons_index_es/* faBars */.xiG},ref:setReferenceElement,onClick:function onClick(){return setIsVisible(function(prev){return!prev;});}}),isVisible&&/*#__PURE__*/react.createElement(MenuContainer,{styles:styles,attributes:attributes,ref:setPopperElement},/*#__PURE__*/react.createElement(MenuItem,{to:"/"},"Home"),/*#__PURE__*/react.createElement(components/* Divider */.iz,{direction:"horizontal"}),/*#__PURE__*/react.createElement(MenuItem,{to:"/projects/"},"Projects"),/*#__PURE__*/react.createElement(components/* Divider */.iz,{direction:"horizontal"}),/*#__PURE__*/react.createElement(MenuItem,{to:"/contact/"},"Contact")));};
;// CONCATENATED MODULE: ./src/containers/Menu/Menu.tsx
// TODO: unify menus
var Menu=function Menu(_ref){var _ref$isHamburger=_ref.isHamburger,isHamburger=_ref$isHamburger===void 0?false:_ref$isHamburger;return!isHamburger?/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement(components/* Button */.zx,{to:"/"},"Home"),/*#__PURE__*/react.createElement(components/* Button */.zx,{to:"/projects/"},"Projects"),/*#__PURE__*/react.createElement(components/* Button */.zx,{to:"/contact/"},"Contact")):/*#__PURE__*/react.createElement(HamburgerMenu,null);};
;// CONCATENATED MODULE: ./src/containers/Menu/index.tsx

;// CONCATENATED MODULE: ./src/containers/index.ts


/***/ }),

/***/ 5103:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": function() { return /* binding */ DeviceType; },
/* harmony export */   "h": function() { return /* binding */ useDeviceType; }
/* harmony export */ });
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8093);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_0__);
var DeviceType;(function(DeviceType){DeviceType[DeviceType["MOBILE"]=0]="MOBILE";DeviceType[DeviceType["TABLET"]=1]="TABLET";DeviceType[DeviceType["LAPTOP"]=2]="LAPTOP";DeviceType[DeviceType["DESKTOP"]=3]="DESKTOP";})(DeviceType||(DeviceType={}));var useDeviceType=function useDeviceType(){// const isMobile = useMediaQuery({
//   minWidth: 320,
// })
var isTablet=(0,react_responsive__WEBPACK_IMPORTED_MODULE_0__.useMediaQuery)({minWidth:640});var isLaptop=(0,react_responsive__WEBPACK_IMPORTED_MODULE_0__.useMediaQuery)({minWidth:1024});var isDesktop=(0,react_responsive__WEBPACK_IMPORTED_MODULE_0__.useMediaQuery)({minWidth:1280});return isDesktop?DeviceType.DESKTOP:isLaptop?DeviceType.LAPTOP:isTablet?DeviceType.TABLET:DeviceType.MOBILE;};

/***/ }),

/***/ 9499:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "BaseContext": function() { return /* binding */ BaseContext; },
  "Link": function() { return /* binding */ Link; },
  "Location": function() { return /* binding */ Location; },
  "LocationProvider": function() { return /* binding */ LocationProvider; },
  "Match": function() { return /* binding */ Match; },
  "Redirect": function() { return /* binding */ Redirect; },
  "Router": function() { return /* binding */ Router; },
  "ServerLocation": function() { return /* binding */ ServerLocation; },
  "createHistory": function() { return /* reexport */ createHistory; },
  "createMemorySource": function() { return /* reexport */ createMemorySource; },
  "globalHistory": function() { return /* reexport */ globalHistory; },
  "isRedirect": function() { return /* binding */ isRedirect; },
  "matchPath": function() { return /* reexport */ match; },
  "navigate": function() { return /* reexport */ history_navigate; },
  "redirectTo": function() { return /* binding */ redirectTo; },
  "useLocation": function() { return /* binding */ useLocation; },
  "useMatch": function() { return /* binding */ useMatch; },
  "useNavigate": function() { return /* binding */ useNavigate; },
  "useParams": function() { return /* binding */ useParams; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/invariant/browser.js
var browser = __webpack_require__(1143);
var browser_default = /*#__PURE__*/__webpack_require__.n(browser);
// EXTERNAL MODULE: ./.cache/react-lifecycles-compat.js
var react_lifecycles_compat = __webpack_require__(9712);
;// CONCATENATED MODULE: ./node_modules/@gatsbyjs/reach-router/es/lib/utils.js
 ////////////////////////////////////////////////////////////////////////////////
// startsWith(string, search) - Check if `string` starts with `search`

var startsWith = function startsWith(string, search) {
  return string.substr(0, search.length) === search;
}; ////////////////////////////////////////////////////////////////////////////////
// pick(routes, uri)
//
// Ranks and picks the best route to match. Each segment gets the highest
// amount of points, then the type of segment gets an additional amount of
// points where
//
//     static > dynamic > splat > root
//
// This way we don't have to worry about the order of our routes, let the
// computers do it.
//
// A route looks like this
//
//     { path, default, value }
//
// And a returned match looks like:
//
//     { route, params, uri }
//
// I know, I should use TypeScript not comments for these types.


var pick = function pick(routes, uri) {
  var match = void 0;
  var default_ = void 0;

  var _uri$split = uri.split("?"),
      uriPathname = _uri$split[0];

  var uriSegments = segmentize(uriPathname);
  var isRootUri = uriSegments[0] === "";
  var ranked = rankRoutes(routes);

  for (var i = 0, l = ranked.length; i < l; i++) {
    var missed = false;
    var route = ranked[i].route;

    if (route.default) {
      default_ = {
        route: route,
        params: {},
        uri: uri
      };
      continue;
    }

    var routeSegments = segmentize(route.path);
    var params = {};
    var max = Math.max(uriSegments.length, routeSegments.length);
    var index = 0;

    for (; index < max; index++) {
      var routeSegment = routeSegments[index];
      var uriSegment = uriSegments[index];

      if (isSplat(routeSegment)) {
        // Hit a splat, just grab the rest, and return a match
        // uri:   /files/documents/work
        // route: /files/*
        var param = routeSegment.slice(1) || "*";
        params[param] = uriSegments.slice(index).map(decodeURIComponent).join("/");
        break;
      }

      if (uriSegment === undefined) {
        // URI is shorter than the route, no match
        // uri:   /users
        // route: /users/:userId
        missed = true;
        break;
      }

      var dynamicMatch = paramRe.exec(routeSegment);

      if (dynamicMatch && !isRootUri) {
        var matchIsNotReserved = reservedNames.indexOf(dynamicMatch[1]) === -1;
        !matchIsNotReserved ?  false ? 0 : browser_default()(false) : void 0;
        var value = decodeURIComponent(uriSegment);
        params[dynamicMatch[1]] = value;
      } else if (routeSegment !== uriSegment) {
        // Current segments don't match, not dynamic, not splat, so no match
        // uri:   /users/123/settings
        // route: /users/:id/profile
        missed = true;
        break;
      }
    }

    if (!missed) {
      match = {
        route: route,
        params: params,
        uri: "/" + uriSegments.slice(0, index).join("/")
      };
      break;
    }
  }

  return match || default_ || null;
}; ////////////////////////////////////////////////////////////////////////////////
// match(path, uri) - Matches just one path to a uri, also lol


var match = function match(path, uri) {
  return pick([{
    path: path
  }], uri);
}; ////////////////////////////////////////////////////////////////////////////////
// resolve(to, basepath)
//
// Resolves URIs as though every path is a directory, no files.  Relative URIs
// in the browser can feel awkward because not only can you be "in a directory"
// you can be "at a file", too. For example
//
//     browserSpecResolve('foo', '/bar/') => /bar/foo
//     browserSpecResolve('foo', '/bar') => /foo
//
// But on the command line of a file system, it's not as complicated, you can't
// `cd` from a file, only directories.  This way, links have to know less about
// their current path. To go deeper you can do this:
//
//     <Link to="deeper"/>
//     // instead of
//     <Link to=`{${props.uri}/deeper}`/>
//
// Just like `cd`, if you want to go deeper from the command line, you do this:
//
//     cd deeper
//     # not
//     cd $(pwd)/deeper
//
// By treating every path as a directory, linking to relative paths should
// require less contextual information and (fingers crossed) be more intuitive.


var resolve = function resolve(to, base) {
  // /foo/bar, /baz/qux => /foo/bar
  if (startsWith(to, "/")) {
    return to;
  }

  var _to$split = to.split("?"),
      toPathname = _to$split[0],
      toQuery = _to$split[1];

  var _base$split = base.split("?"),
      basePathname = _base$split[0];

  var toSegments = segmentize(toPathname);
  var baseSegments = segmentize(basePathname); // ?a=b, /users?b=c => /users?a=b

  if (toSegments[0] === "") {
    return addQuery(basePathname, toQuery);
  } // profile, /users/789 => /users/789/profile


  if (!startsWith(toSegments[0], ".")) {
    var pathname = baseSegments.concat(toSegments).join("/");
    return addQuery((basePathname === "/" ? "" : "/") + pathname, toQuery);
  } // ./         /users/123  =>  /users/123
  // ../        /users/123  =>  /users
  // ../..      /users/123  =>  /
  // ../../one  /a/b/c/d    =>  /a/b/one
  // .././one   /a/b/c/d    =>  /a/b/c/one


  var allSegments = baseSegments.concat(toSegments);
  var segments = [];

  for (var i = 0, l = allSegments.length; i < l; i++) {
    var segment = allSegments[i];
    if (segment === "..") segments.pop();else if (segment !== ".") segments.push(segment);
  }

  return addQuery("/" + segments.join("/"), toQuery);
}; ////////////////////////////////////////////////////////////////////////////////
// insertParams(path, params)


var insertParams = function insertParams(path, params) {
  var _path$split = path.split("?"),
      pathBase = _path$split[0],
      _path$split$ = _path$split[1],
      query = _path$split$ === undefined ? "" : _path$split$;

  var segments = segmentize(pathBase);
  var constructedPath = "/" + segments.map(function (segment) {
    var match = paramRe.exec(segment);
    return match ? params[match[1]] : segment;
  }).join("/");
  var _params$location = params.location;
  _params$location = _params$location === undefined ? {} : _params$location;
  var _params$location$sear = _params$location.search,
      search = _params$location$sear === undefined ? "" : _params$location$sear;
  var searchSplit = search.split("?")[1] || "";
  constructedPath = addQuery(constructedPath, query, searchSplit);
  return constructedPath;
};

var validateRedirect = function validateRedirect(from, to) {
  var filter = function filter(segment) {
    return isDynamic(segment);
  };

  var fromString = segmentize(from).filter(filter).sort().join("/");
  var toString = segmentize(to).filter(filter).sort().join("/");
  return fromString === toString;
}; ////////////////////////////////////////////////////////////////////////////////
// Junk


var paramRe = /^:(.+)/;
var SEGMENT_POINTS = 4;
var STATIC_POINTS = 3;
var DYNAMIC_POINTS = 2;
var SPLAT_PENALTY = 1;
var ROOT_POINTS = 1;

var isRootSegment = function isRootSegment(segment) {
  return segment === "";
};

var isDynamic = function isDynamic(segment) {
  return paramRe.test(segment);
};

var isSplat = function isSplat(segment) {
  return segment && segment[0] === "*";
};

var rankRoute = function rankRoute(route, index) {
  var score = route.default ? 0 : segmentize(route.path).reduce(function (score, segment) {
    score += SEGMENT_POINTS;
    if (isRootSegment(segment)) score += ROOT_POINTS;else if (isDynamic(segment)) score += DYNAMIC_POINTS;else if (isSplat(segment)) score -= SEGMENT_POINTS + SPLAT_PENALTY;else score += STATIC_POINTS;
    return score;
  }, 0);
  return {
    route: route,
    score: score,
    index: index
  };
};

var rankRoutes = function rankRoutes(routes) {
  return routes.map(rankRoute).sort(function (a, b) {
    return a.score < b.score ? 1 : a.score > b.score ? -1 : a.index - b.index;
  });
};

var segmentize = function segmentize(uri) {
  return uri // strip starting/ending slashes
  .replace(/(^\/+|\/+$)/g, "").split("/");
};

var addQuery = function addQuery(pathname) {
  for (var _len = arguments.length, query = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    query[_key - 1] = arguments[_key];
  }

  query = query.filter(function (q) {
    return q && q.length > 0;
  });
  return pathname + (query && query.length > 0 ? "?" + query.join("&") : "");
};

var reservedNames = ["uri", "path"];
/**
 * Shallow compares two objects.
 * @param {Object} obj1 The first object to compare.
 * @param {Object} obj2 The second object to compare.
 */

var shallowCompare = function shallowCompare(obj1, obj2) {
  var obj1Keys = Object.keys(obj1);
  return obj1Keys.length === Object.keys(obj2).length && obj1Keys.every(function (key) {
    return obj2.hasOwnProperty(key) && obj1[key] === obj2[key];
  });
}; ////////////////////////////////////////////////////////////////////////////////



;// CONCATENATED MODULE: ./node_modules/@gatsbyjs/reach-router/es/lib/history.js
var _extends = Object.assign || function (target) {
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

var getLocation = function getLocation(source) {
  var _source$location = source.location,
      search = _source$location.search,
      hash = _source$location.hash,
      href = _source$location.href,
      origin = _source$location.origin,
      protocol = _source$location.protocol,
      host = _source$location.host,
      hostname = _source$location.hostname,
      port = _source$location.port;
  var pathname = source.location.pathname;

  if (!pathname && href && canUseDOM) {
    var url = new URL(href);
    pathname = url.pathname;
  }

  return {
    pathname: encodeURI(decodeURI(pathname)),
    search: search,
    hash: hash,
    href: href,
    origin: origin,
    protocol: protocol,
    host: host,
    hostname: hostname,
    port: port,
    state: source.history.state,
    key: source.history.state && source.history.state.key || "initial"
  };
};

var createHistory = function createHistory(source, options) {
  var listeners = [];
  var location = getLocation(source);
  var transitioning = false;

  var resolveTransition = function resolveTransition() {};

  return {
    get location() {
      return location;
    },

    get transitioning() {
      return transitioning;
    },

    _onTransitionComplete: function _onTransitionComplete() {
      transitioning = false;
      resolveTransition();
    },
    listen: function listen(listener) {
      listeners.push(listener);

      var popstateListener = function popstateListener() {
        location = getLocation(source);
        listener({
          location: location,
          action: "POP"
        });
      };

      source.addEventListener("popstate", popstateListener);
      return function () {
        source.removeEventListener("popstate", popstateListener);
        listeners = listeners.filter(function (fn) {
          return fn !== listener;
        });
      };
    },
    navigate: function navigate(to) {
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          state = _ref.state,
          _ref$replace = _ref.replace,
          replace = _ref$replace === undefined ? false : _ref$replace;

      if (typeof to === "number") {
        source.history.go(to);
      } else {
        state = _extends({}, state, {
          key: Date.now() + ""
        }); // try...catch iOS Safari limits to 100 pushState calls

        try {
          if (transitioning || replace) {
            source.history.replaceState(state, null, to);
          } else {
            source.history.pushState(state, null, to);
          }
        } catch (e) {
          source.location[replace ? "replace" : "assign"](to);
        }
      }

      location = getLocation(source);
      transitioning = true;
      var transition = new Promise(function (res) {
        return resolveTransition = res;
      });
      listeners.forEach(function (listener) {
        return listener({
          location: location,
          action: "PUSH"
        });
      });
      return transition;
    }
  };
}; ////////////////////////////////////////////////////////////////////////////////
// Stores history entries in memory for testing or other platforms like Native


var createMemorySource = function createMemorySource() {
  var initialPath = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "/";
  var searchIndex = initialPath.indexOf("?");
  var initialLocation = {
    pathname: searchIndex > -1 ? initialPath.substr(0, searchIndex) : initialPath,
    search: searchIndex > -1 ? initialPath.substr(searchIndex) : ""
  };
  var index = 0;
  var stack = [initialLocation];
  var states = [null];
  return {
    get location() {
      return stack[index];
    },

    addEventListener: function addEventListener(name, fn) {},
    removeEventListener: function removeEventListener(name, fn) {},
    history: {
      get entries() {
        return stack;
      },

      get index() {
        return index;
      },

      get state() {
        return states[index];
      },

      pushState: function pushState(state, _, uri) {
        var _uri$split = uri.split("?"),
            pathname = _uri$split[0],
            _uri$split$ = _uri$split[1],
            search = _uri$split$ === undefined ? "" : _uri$split$;

        index++;
        stack.push({
          pathname: pathname,
          search: search.length ? "?" + search : search
        });
        states.push(state);
      },
      replaceState: function replaceState(state, _, uri) {
        var _uri$split2 = uri.split("?"),
            pathname = _uri$split2[0],
            _uri$split2$ = _uri$split2[1],
            search = _uri$split2$ === undefined ? "" : _uri$split2$;

        stack[index] = {
          pathname: pathname,
          search: search
        };
        states[index] = state;
      },
      go: function go(to) {
        var newIndex = index + to;

        if (newIndex < 0 || newIndex > states.length - 1) {
          return;
        }

        index = newIndex;
      }
    }
  };
}; ////////////////////////////////////////////////////////////////////////////////
// global history - uses window.history as the source if available, otherwise a
// memory history


var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);

var getSource = function getSource() {
  return canUseDOM ? window : createMemorySource();
};

var globalHistory = createHistory(getSource());
var history_navigate = globalHistory.navigate; ////////////////////////////////////////////////////////////////////////////////


;// CONCATENATED MODULE: ./node_modules/@gatsbyjs/reach-router/es/index.js
var es_extends = Object.assign || function (target) {
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

function _objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
/* eslint-disable jsx-a11y/anchor-has-content */






 ////////////////////////////////////////////////////////////////////////////////

var createNamedContext = function createNamedContext(name, defaultValue) {
  var Ctx = (0,react.createContext)(defaultValue);
  Ctx.displayName = name;
  return Ctx;
}; ////////////////////////////////////////////////////////////////////////////////
// Location Context/Provider


var LocationContext = createNamedContext("Location"); // sets up a listener if there isn't one already so apps don't need to be
// wrapped in some top level provider

var Location = function Location(_ref) {
  var children = _ref.children;
  return react.createElement(LocationContext.Consumer, null, function (context) {
    return context ? children(context) : react.createElement(LocationProvider, null, children);
  });
};

var LocationProvider = function (_React$Component) {
  _inherits(LocationProvider, _React$Component);

  function LocationProvider() {
    var _temp, _this, _ret;

    _classCallCheck(this, LocationProvider);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      context: _this.getContext(),
      refs: {
        unlisten: null
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  LocationProvider.prototype.getContext = function getContext() {
    var _props$history = this.props.history,
        navigate = _props$history.navigate,
        location = _props$history.location;
    return {
      navigate: navigate,
      location: location
    };
  };

  LocationProvider.prototype.componentDidCatch = function componentDidCatch(error, info) {
    if (isRedirect(error)) {
      var _navigate = this.props.history.navigate;

      _navigate(error.uri, {
        replace: true
      });
    } else {
      throw error;
    }
  };

  LocationProvider.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    if (prevState.context.location !== this.state.context.location) {
      this.props.history._onTransitionComplete();
    }
  };

  LocationProvider.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    var refs = this.state.refs,
        history = this.props.history;

    history._onTransitionComplete();

    refs.unlisten = history.listen(function () {
      Promise.resolve().then(function () {
        // TODO: replace rAF with react deferred update API when it's ready https://github.com/facebook/react/issues/13306
        requestAnimationFrame(function () {
          if (!_this2.unmounted) {
            _this2.setState(function () {
              return {
                context: _this2.getContext()
              };
            });
          }
        });
      });
    });
  };

  LocationProvider.prototype.componentWillUnmount = function componentWillUnmount() {
    var refs = this.state.refs;
    this.unmounted = true;
    refs.unlisten();
  };

  LocationProvider.prototype.render = function render() {
    var context = this.state.context,
        children = this.props.children;
    return react.createElement(LocationContext.Provider, {
      value: context
    }, typeof children === "function" ? children(context) : children || null);
  };

  return LocationProvider;
}(react.Component); ////////////////////////////////////////////////////////////////////////////////


LocationProvider.defaultProps = {
  history: globalHistory
};
 false ? 0 : void 0;

var ServerLocation = function ServerLocation(_ref2) {
  var url = _ref2.url,
      children = _ref2.children;
  var searchIndex = url.indexOf("?");
  var searchExists = searchIndex > -1;
  var pathname = void 0;
  var search = "";
  var hash = "";

  if (searchExists) {
    pathname = url.substring(0, searchIndex);
    search = url.substring(searchIndex);
  } else {
    pathname = url;
  }

  return react.createElement(LocationContext.Provider, {
    value: {
      location: {
        pathname: pathname,
        search: search,
        hash: hash
      },
      navigate: function navigate() {
        throw new Error("You can't call navigate on the server.");
      }
    }
  }, children);
}; ////////////////////////////////////////////////////////////////////////////////
// Sets baseuri and basepath for nested routers and links


var BaseContext = createNamedContext("Base", {
  baseuri: "/",
  basepath: "/",
  navigate: globalHistory.navigate
}); ////////////////////////////////////////////////////////////////////////////////
// The main event, welcome to the show everybody.

var Router = function Router(props) {
  return react.createElement(BaseContext.Consumer, null, function (baseContext) {
    return react.createElement(Location, null, function (locationContext) {
      return react.createElement(RouterImpl, es_extends({}, baseContext, locationContext, props));
    });
  });
};

var RouterImpl = function (_React$PureComponent) {
  _inherits(RouterImpl, _React$PureComponent);

  function RouterImpl() {
    _classCallCheck(this, RouterImpl);

    return _possibleConstructorReturn(this, _React$PureComponent.apply(this, arguments));
  }

  RouterImpl.prototype.render = function render() {
    var _props = this.props,
        location = _props.location,
        _navigate2 = _props.navigate,
        basepath = _props.basepath,
        primary = _props.primary,
        children = _props.children,
        baseuri = _props.baseuri,
        _props$component = _props.component,
        component = _props$component === undefined ? "div" : _props$component,
        domProps = _objectWithoutProperties(_props, ["location", "navigate", "basepath", "primary", "children", "baseuri", "component"]);

    var routes = react.Children.toArray(children).reduce(function (array, child) {
      var routes = createRoute(basepath)(child);
      return array.concat(routes);
    }, []);
    var pathname = location.pathname;
    var match = pick(routes, pathname);

    if (match) {
      var params = match.params,
          uri = match.uri,
          route = match.route,
          element = match.route.value; // remove the /* from the end for child routes relative paths

      basepath = route.default ? basepath : route.path.replace(/\*$/, "");

      var props = es_extends({}, params, {
        uri: uri,
        location: location,
        navigate: function navigate(to, options) {
          return _navigate2(resolve(to, uri), options);
        }
      });

      var clone = react.cloneElement(element, props, element.props.children ? react.createElement(Router, {
        location: location,
        primary: primary
      }, element.props.children) : undefined); // using 'div' for < 16.3 support

      var FocusWrapper = primary ? FocusHandler : component; // don't pass any props to 'div'

      var wrapperProps = primary ? es_extends({
        uri: uri,
        location: location,
        component: component
      }, domProps) : domProps;
      return react.createElement(BaseContext.Provider, {
        value: {
          baseuri: uri,
          basepath: basepath,
          navigate: props.navigate
        }
      }, react.createElement(FocusWrapper, wrapperProps, clone));
    } else {
      // Not sure if we want this, would require index routes at every level
      // warning(
      //   false,
      //   `<Router basepath="${basepath}">\n\nNothing matched:\n\t${
      //     location.pathname
      //   }\n\nPaths checked: \n\t${routes
      //     .map(route => route.path)
      //     .join(
      //       "\n\t"
      //     )}\n\nTo get rid of this warning, add a default NotFound component as child of Router:
      //   \n\tlet NotFound = () => <div>Not Found!</div>
      //   \n\t<Router>\n\t  <NotFound default/>\n\t  {/* ... */}\n\t</Router>`
      // );
      return null;
    }
  };

  return RouterImpl;
}(react.PureComponent);

RouterImpl.defaultProps = {
  primary: true
};
var FocusContext = createNamedContext("Focus");

var FocusHandler = function FocusHandler(_ref3) {
  var uri = _ref3.uri,
      location = _ref3.location,
      component = _ref3.component,
      domProps = _objectWithoutProperties(_ref3, ["uri", "location", "component"]);

  return react.createElement(FocusContext.Consumer, null, function (requestFocus) {
    return react.createElement(FocusHandlerImpl, es_extends({}, domProps, {
      component: component,
      requestFocus: requestFocus,
      uri: uri,
      location: location
    }));
  });
}; // don't focus on initial render


var initialRender = true;
var focusHandlerCount = 0;

var FocusHandlerImpl = function (_React$Component2) {
  _inherits(FocusHandlerImpl, _React$Component2);

  function FocusHandlerImpl() {
    var _temp2, _this4, _ret2;

    _classCallCheck(this, FocusHandlerImpl);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _ret2 = (_temp2 = (_this4 = _possibleConstructorReturn(this, _React$Component2.call.apply(_React$Component2, [this].concat(args))), _this4), _this4.state = {}, _this4.requestFocus = function (node) {
      if (!_this4.state.shouldFocus && node) {
        node.focus();
      }
    }, _temp2), _possibleConstructorReturn(_this4, _ret2);
  }

  FocusHandlerImpl.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    var initial = prevState.uri == null;

    if (initial) {
      return es_extends({
        shouldFocus: true
      }, nextProps);
    } else {
      var myURIChanged = nextProps.uri !== prevState.uri;
      var navigatedUpToMe = prevState.location.pathname !== nextProps.location.pathname && nextProps.location.pathname === nextProps.uri;
      return es_extends({
        shouldFocus: myURIChanged || navigatedUpToMe
      }, nextProps);
    }
  };

  FocusHandlerImpl.prototype.componentDidMount = function componentDidMount() {
    focusHandlerCount++;
    this.focus();
  };

  FocusHandlerImpl.prototype.componentWillUnmount = function componentWillUnmount() {
    focusHandlerCount--;

    if (focusHandlerCount === 0) {
      initialRender = true;
    }
  };

  FocusHandlerImpl.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    if (prevProps.location !== this.props.location && this.state.shouldFocus) {
      this.focus();
    }
  };

  FocusHandlerImpl.prototype.focus = function focus() {
    if (false) {}

    var requestFocus = this.props.requestFocus;

    if (requestFocus) {
      requestFocus(this.node);
    } else {
      if (initialRender) {
        initialRender = false;
      } else if (this.node) {
        // React polyfills [autofocus] and it fires earlier than cDM,
        // so we were stealing focus away, this line prevents that.
        if (!this.node.contains(document.activeElement)) {
          this.node.focus();
        }
      }
    }
  };

  FocusHandlerImpl.prototype.render = function render() {
    var _this5 = this;

    var _props2 = this.props,
        children = _props2.children,
        style = _props2.style,
        requestFocus = _props2.requestFocus,
        _props2$component = _props2.component,
        Comp = _props2$component === undefined ? "div" : _props2$component,
        uri = _props2.uri,
        location = _props2.location,
        domProps = _objectWithoutProperties(_props2, ["children", "style", "requestFocus", "component", "uri", "location"]);

    return react.createElement(Comp, es_extends({
      style: es_extends({
        outline: "none"
      }, style),
      tabIndex: "-1",
      ref: function ref(n) {
        return _this5.node = n;
      }
    }, domProps), react.createElement(FocusContext.Provider, {
      value: this.requestFocus
    }, this.props.children));
  };

  return FocusHandlerImpl;
}(react.Component);

(0,react_lifecycles_compat/* polyfill */.O)(FocusHandlerImpl);

var k = function k() {}; ////////////////////////////////////////////////////////////////////////////////


var forwardRef = react.forwardRef;

if (typeof forwardRef === "undefined") {
  forwardRef = function forwardRef(C) {
    return C;
  };
}

var Link = forwardRef(function (_ref4, ref) {
  var innerRef = _ref4.innerRef,
      props = _objectWithoutProperties(_ref4, ["innerRef"]);

  return react.createElement(BaseContext.Consumer, null, function (_ref5) {
    var basepath = _ref5.basepath,
        baseuri = _ref5.baseuri;
    return react.createElement(Location, null, function (_ref6) {
      var location = _ref6.location,
          navigate = _ref6.navigate;

      var to = props.to,
          state = props.state,
          replace = props.replace,
          _props$getProps = props.getProps,
          getProps = _props$getProps === undefined ? k : _props$getProps,
          anchorProps = _objectWithoutProperties(props, ["to", "state", "replace", "getProps"]);

      var href = resolve(to, baseuri);
      var encodedHref = encodeURI(href);
      var isCurrent = location.pathname === encodedHref;
      var isPartiallyCurrent = startsWith(location.pathname, encodedHref);
      return react.createElement("a", es_extends({
        ref: ref || innerRef,
        "aria-current": isCurrent ? "page" : undefined
      }, anchorProps, getProps({
        isCurrent: isCurrent,
        isPartiallyCurrent: isPartiallyCurrent,
        href: href,
        location: location
      }), {
        href: href,
        onClick: function onClick(event) {
          if (anchorProps.onClick) anchorProps.onClick(event);

          if (shouldNavigate(event)) {
            event.preventDefault();
            var shouldReplace = replace;

            if (typeof replace !== "boolean" && isCurrent) {
              var _location$state = es_extends({}, location.state),
                  key = _location$state.key,
                  restState = _objectWithoutProperties(_location$state, ["key"]);

              shouldReplace = shallowCompare(es_extends({}, state), restState);
            }

            navigate(href, {
              state: state,
              replace: shouldReplace
            });
          }
        }
      }));
    });
  });
});
Link.displayName = "Link";
 false ? 0 : void 0; ////////////////////////////////////////////////////////////////////////////////

function RedirectRequest(uri) {
  this.uri = uri;
}

var isRedirect = function isRedirect(o) {
  return o instanceof RedirectRequest;
};

var redirectTo = function redirectTo(to) {
  throw new RedirectRequest(to);
};

var RedirectImpl = function (_React$Component3) {
  _inherits(RedirectImpl, _React$Component3);

  function RedirectImpl() {
    _classCallCheck(this, RedirectImpl);

    return _possibleConstructorReturn(this, _React$Component3.apply(this, arguments));
  } // Support React < 16 with this hook


  RedirectImpl.prototype.componentDidMount = function componentDidMount() {
    var _props3 = this.props,
        navigate = _props3.navigate,
        to = _props3.to,
        from = _props3.from,
        _props3$replace = _props3.replace,
        replace = _props3$replace === undefined ? true : _props3$replace,
        state = _props3.state,
        noThrow = _props3.noThrow,
        baseuri = _props3.baseuri,
        props = _objectWithoutProperties(_props3, ["navigate", "to", "from", "replace", "state", "noThrow", "baseuri"]);

    Promise.resolve().then(function () {
      var resolvedTo = resolve(to, baseuri);
      navigate(insertParams(resolvedTo, props), {
        replace: replace,
        state: state
      });
    });
  };

  RedirectImpl.prototype.render = function render() {
    var _props4 = this.props,
        navigate = _props4.navigate,
        to = _props4.to,
        from = _props4.from,
        replace = _props4.replace,
        state = _props4.state,
        noThrow = _props4.noThrow,
        baseuri = _props4.baseuri,
        props = _objectWithoutProperties(_props4, ["navigate", "to", "from", "replace", "state", "noThrow", "baseuri"]);

    var resolvedTo = resolve(to, baseuri);
    if (!noThrow) redirectTo(insertParams(resolvedTo, props));
    return null;
  };

  return RedirectImpl;
}(react.Component);

var Redirect = function Redirect(props) {
  return react.createElement(BaseContext.Consumer, null, function (_ref7) {
    var baseuri = _ref7.baseuri;
    return react.createElement(Location, null, function (locationContext) {
      return react.createElement(RedirectImpl, es_extends({}, locationContext, {
        baseuri: baseuri
      }, props));
    });
  });
};

 false ? 0 : void 0; ////////////////////////////////////////////////////////////////////////////////

var Match = function Match(_ref8) {
  var path = _ref8.path,
      children = _ref8.children;
  return react.createElement(BaseContext.Consumer, null, function (_ref9) {
    var baseuri = _ref9.baseuri;
    return react.createElement(Location, null, function (_ref10) {
      var navigate = _ref10.navigate,
          location = _ref10.location;
      var resolvedPath = resolve(path, baseuri);
      var result = match(resolvedPath, location.pathname);
      return children({
        navigate: navigate,
        location: location,
        match: result ? es_extends({}, result.params, {
          uri: result.uri,
          path: path
        }) : null
      });
    });
  });
}; ////////////////////////////////////////////////////////////////////////////////
// Hooks


var useLocation = function useLocation() {
  var context = (0,react.useContext)(LocationContext);

  if (!context) {
    throw new Error("useLocation hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router");
  }

  return context.location;
};

var useNavigate = function useNavigate() {
  var context = (0,react.useContext)(BaseContext);

  if (!context) {
    throw new Error("useNavigate hook was used but a BaseContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router");
  }

  return context.navigate;
};

var useParams = function useParams() {
  var context = (0,react.useContext)(BaseContext);

  if (!context) {
    throw new Error("useParams hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router");
  }

  var location = useLocation();
  var results = match(context.basepath, location.pathname);
  return results ? results.params : null;
};

var useMatch = function useMatch(path) {
  if (!path) {
    throw new Error("useMatch(path: string) requires an argument of a string to match against");
  }

  var context = (0,react.useContext)(BaseContext);

  if (!context) {
    throw new Error("useMatch hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router");
  }

  var location = useLocation();
  var resolvedPath = resolve(path, context.baseuri);
  var result = match(resolvedPath, location.pathname);
  return result ? es_extends({}, result.params, {
    uri: result.uri,
    path: path
  }) : null;
}; ////////////////////////////////////////////////////////////////////////////////
// Junk


var stripSlashes = function stripSlashes(str) {
  return str.replace(/(^\/+|\/+$)/g, "");
};

var createRoute = function createRoute(basepath) {
  return function (element) {
    if (!element) {
      return null;
    }

    if (element.type === react.Fragment && element.props.children) {
      return react.Children.map(element.props.children, createRoute(basepath));
    }

    !(element.props.path || element.props.default || element.type === Redirect) ?  false ? 0 : browser_default()(false) : void 0;
    !!(element.type === Redirect && (!element.props.from || !element.props.to)) ?  false ? 0 : browser_default()(false) : void 0;
    !!(element.type === Redirect && !validateRedirect(element.props.from, element.props.to)) ?  false ? 0 : browser_default()(false) : void 0;

    if (element.props.default) {
      return {
        value: element,
        default: true
      };
    }

    var elementPath = element.type === Redirect ? element.props.from : element.props.path;
    var path = elementPath === "/" ? basepath : stripSlashes(basepath) + "/" + stripSlashes(elementPath);
    return {
      value: element,
      default: element.props.default,
      path: element.props.children ? stripSlashes(path) + "/*" : path
    };
  };
};

var shouldNavigate = function shouldNavigate(event) {
  return !event.defaultPrevented && event.button === 0 && !(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}; ////////////////////////////////////////////////////////////////////////




/***/ }),

/***/ 1143:
/***/ (function(module) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (false) {}

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),

/***/ 2911:
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

const PartytownSnippet = "/* Partytown 0.5.4 - MIT builder.io */\n!function(t,e,n,i,r,o,a,d,s,c,p,l){function u(){l||(l=1,\"/\"==(a=(o.lib||\"/~partytown/\")+(o.debug?\"debug/\":\"\"))[0]&&(s=e.querySelectorAll('script[type=\"text/partytown\"]'),i!=t?i.dispatchEvent(new CustomEvent(\"pt1\",{detail:t})):(d=setTimeout(w,1e4),e.addEventListener(\"pt0\",f),r?h(1):n.serviceWorker?n.serviceWorker.register(a+(o.swPath||\"partytown-sw.js\"),{scope:a}).then((function(t){t.active?h():t.installing&&t.installing.addEventListener(\"statechange\",(function(t){\"activated\"==t.target.state&&h()}))}),console.error):w())))}function h(t){c=e.createElement(t?\"script\":\"iframe\"),t||(c.setAttribute(\"style\",\"display:block;width:0;height:0;border:0;visibility:hidden\"),c.setAttribute(\"aria-hidden\",!0)),c.src=a+\"partytown-\"+(t?\"atomics.js?v=0.5.4\":\"sandbox-sw.html?\"+Date.now()),e.body.appendChild(c)}function w(t,n){for(f(),t=0;t<s.length;t++)(n=e.createElement(\"script\")).innerHTML=s[t].innerHTML,e.head.appendChild(n);c&&c.parentNode.removeChild(c)}function f(){clearTimeout(d)}o=t.partytown||{},i==t&&(o.forward||[]).map((function(e){p=t,e.split(\".\").map((function(e,n,i){p=p[i[n]]=n+1<i.length?\"push\"==i[n+1]?[]:p[i[n]]||{}:function(){(t._ptf=t._ptf||[]).push(i,arguments)}}))})),\"complete\"==e.readyState?u():(t.addEventListener(\"DOMContentLoaded\",u),t.addEventListener(\"load\",u))}(window,document,navigator,top,window.crossOriginIsolated);";

const createSnippet = (config, snippetCode) => {
    const { forward = [], ...filteredConfig } = config || {};
    const configStr = JSON.stringify(filteredConfig, (k, v) => {
        if (typeof v === 'function') {
            v = String(v);
            if (v.startsWith(k + '(')) {
                v = 'function ' + v;
            }
        }
        return v;
    });
    return [
        `!(function(w,p,f,c){`,
        Object.keys(filteredConfig).length > 0
            ? `c=w[p]=Object.assign(w[p]||{},${configStr});`
            : `c=w[p]=w[p]||{};`,
        `c[f]=(c[f]||[])`,
        forward.length > 0 ? `.concat(${JSON.stringify(forward)})` : ``,
        `})(window,'partytown','forward');`,
        snippetCode,
    ].join('');
};

/**
 * The `type` attribute for Partytown scripts, which does two things:
 *
 * 1. Prevents the `<script>` from executing on the main thread.
 * 2. Is used as a selector so the Partytown library can find all scripts to execute in a web worker.
 *
 * @public
 */
const SCRIPT_TYPE = `text/partytown`;

/**
 * Function that returns the Partytown snippet as a string, which can be
 * used as the innerHTML of the inlined Partytown script in the head.
 *
 * @public
 */
const partytownSnippet = (config) => createSnippet(config, PartytownSnippet);

exports.SCRIPT_TYPE = SCRIPT_TYPE;
exports.partytownSnippet = partytownSnippet;


/***/ }),

/***/ 611:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var React = __webpack_require__(7294);
var index_cjs = __webpack_require__(2911);

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

/**
 * The React `<Partytown/>` component should be placed within the `<head>`
 * of the document. This component should work for SSR/SSG only HTML
 * (static HTML without javascript), clientside javascript only
 * (entire React app is build with clientside javascript),
 * and both SSR/SSG HTML that's then hydrated by the client.
 *
 * @public
 */
const Partytown = (props = {}) => {
    // purposely not using useState() or useEffect() so this component
    // can also work as a React Server Component
    // this check is only be done on the client, and skipped over on the server
    if (typeof document !== 'undefined' && !document._partytown) {
        if (!document.querySelector('script[data-partytown]')) {
            // the append script to document code should only run on the client
            // and only if the SSR'd script doesn't already exist within the document.
            // If the SSR'd script isn't found in the document, then this
            // must be a clientside only render. Append the partytown script
            // to the <head>.
            const scriptElm = document.createElement('script');
            scriptElm.dataset.partytown = '';
            scriptElm.innerHTML = index_cjs.partytownSnippet(props);
            document.head.appendChild(scriptElm);
        }
        // should only append this script once per document, and is not dynamic
        document._partytown = true;
    }
    // `dangerouslySetInnerHTML` only works for scripts rendered as HTML from SSR.
    // The added code will set the [type="data-pt-script"] attribute to the SSR rendered
    // <script>. If this code renders as SSR HTML, then on the client it'll execute
    // and add the attribute which will tell the Client JS of the component to NOT
    // add the same script to the <head>.
    const innerHTML = index_cjs.partytownSnippet(props) + 'document.currentScript.dataset.partytown="";';
    return React__default["default"].createElement("script", { suppressHydrationWarning: true, dangerouslySetInnerHTML: { __html: innerHTML } });
};

exports.Partytown = Partytown;


/***/ }),

/***/ 6141:
/***/ (function(module) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 1765:
/***/ (function(module) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 7371:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(6141);

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 8426:
/***/ (function(module) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 59:
/***/ (function(module) {

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
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

module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 2523:
/***/ (function(module) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 5885:
/***/ (function(module) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 7153:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(1765);

var iterableToArrayLimit = __webpack_require__(59);

var unsupportedIterableToArray = __webpack_require__(4578);

var nonIterableRest = __webpack_require__(2523);

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 1747:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(7371);

var iterableToArray = __webpack_require__(8426);

var unsupportedIterableToArray = __webpack_require__(4578);

var nonIterableSpread = __webpack_require__(5885);

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 4578:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(6141);

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 2824:
/***/ (function(module) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 5255:
/***/ (function(module) {

function _extends() {
  module.exports = _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _extends.apply(this, arguments);
}

module.exports = _extends, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 5648:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(6893);

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  setPrototypeOf(subClass, superClass);
}

module.exports = _inheritsLoose, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 2930:
/***/ (function(module) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 1334:
/***/ (function(module) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 6893:
/***/ (function(module) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 4610:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ _arrayLikeToArray; }
/* harmony export */ });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ 5774:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ 9784:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ _objectWithoutProperties; }
});

;// CONCATENATED MODULE: ./node_modules/babel-preset-gatsby/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}
;// CONCATENATED MODULE: ./node_modules/babel-preset-gatsby/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ 1245:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ _slicedToArray; }
});

;// CONCATENATED MODULE: ./node_modules/babel-preset-gatsby/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
;// CONCATENATED MODULE: ./node_modules/babel-preset-gatsby/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
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
// EXTERNAL MODULE: ./node_modules/babel-preset-gatsby/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
var unsupportedIterableToArray = __webpack_require__(9719);
;// CONCATENATED MODULE: ./node_modules/babel-preset-gatsby/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
;// CONCATENATED MODULE: ./node_modules/babel-preset-gatsby/node_modules/@babel/runtime/helpers/esm/slicedToArray.js




function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || (0,unsupportedIterableToArray/* default */.Z)(arr, i) || _nonIterableRest();
}

/***/ }),

/***/ 3427:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ _toConsumableArray; }
});

// EXTERNAL MODULE: ./node_modules/babel-preset-gatsby/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
var arrayLikeToArray = __webpack_require__(4610);
;// CONCATENATED MODULE: ./node_modules/babel-preset-gatsby/node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return (0,arrayLikeToArray/* default */.Z)(arr);
}
;// CONCATENATED MODULE: ./node_modules/babel-preset-gatsby/node_modules/@babel/runtime/helpers/esm/iterableToArray.js
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
// EXTERNAL MODULE: ./node_modules/babel-preset-gatsby/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
var unsupportedIterableToArray = __webpack_require__(9719);
;// CONCATENATED MODULE: ./node_modules/babel-preset-gatsby/node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
;// CONCATENATED MODULE: ./node_modules/babel-preset-gatsby/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js




function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || (0,unsupportedIterableToArray/* default */.Z)(arr) || _nonIterableSpread();
}

/***/ }),

/***/ 9719:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ _unsupportedIterableToArray; }
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4610);

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(o, minLen);
}

/***/ }),

/***/ 5750:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ _inheritsLoose; }
});

;// CONCATENATED MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
;// CONCATENATED MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [774,532,523,112], function() { return __webpack_exec__(5824); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=app-d14a379803e112aba0a7.js.map