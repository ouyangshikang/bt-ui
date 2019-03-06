module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "26d2");
/******/ })
/************************************************************************/
/******/ ({

/***/ "0524":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("690e")(false);
// imports


// module
exports.push([module.i, ".bt-button{display:inline-block;line-height:1;white-space:nowrap;cursor:pointer;background:#fff;border:1px solid #bfcbd9;color:#1f2d3d;-webkit-appearance:none;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;outline:0;margin:0;border-radius:4px;padding:12px 20px;font-size:14px}.bt-button.is-round{border-radius:20px}.bt-button--size-medium{padding:10px 20px;font-size:14px;border-radius:4px}.bt-button--size-small{padding:9px 15px;font-size:12px;border-radius:3px}.bt-button--default{background:#fff;border:1px solid #bfcbd9;color:#1f2d3d}.bt-button--default:focus,.bt-button--default:hover{background:rgba(63,170,245,.05);border-color:rgba(63,170,245,.08);color:#3faaf5}.bt-button--default:active{background:#fff;outline:0}.bt-button--default:disabled{background:#fff;border:1px solid #3faaf5;color:#1f2d3d;opacity:.3;cursor:not-allowed}.bt-button--default.is-plain{border:1px solid #3faaf5}.bt-button--default.is-plain:focus,.bt-button--default.is-plain:hover{background:#fff;border-color:rgba(63,170,245,.8);color:#3faaf5}.bt-button--default.is-plain:active{background:#fff;outline:0}.bt-button--default.is-plain:disabled{opacity:.3;cursor:not-allowed;background:#fff;border:1px solid #bfcbd9;color:#1f2d3d}.bt-button--primary{background:#3faaf5;border:1px solid #3faaf5;color:#fff}.bt-button--primary:focus,.bt-button--primary:hover{opacity:.7}.bt-button--primary:disabled{opacity:.3;cursor:not-allowed}.bt-button--primary.is-plain{background:rgba(63,170,245,.05);border-color:#3faaf5;color:#3faaf5}.bt-button--primary.is-plain:focus,.bt-button--primary.is-plain:hover{opacity:1;background:#3faaf5;border:1px solid #3faaf5;color:#fff}.bt-button--primary.is-plain:disabled{opacity:.3;cursor:not-allowed;background:rgba(63,170,245,.05);border-color:rgba(63,170,245,.08);color:#3faaf5}.bt-button--success{background:#13ce66;border:1px solid #13ce66;color:#fff}.bt-button--success:focus,.bt-button--success:hover{opacity:.7}.bt-button--success:disabled{opacity:.3;cursor:not-allowed}.bt-button--success.is-plain{background:rgba(19,206,102,.05);border-color:rgba(19,206,102,.8);color:#13ce66}.bt-button--success.is-plain:focus,.bt-button--success.is-plain:hover{opacity:1;background:#13ce66;border:1px solid #13ce66;color:#fff}.bt-button--success.is-plain:disabled{opacity:.3;cursor:not-allowed;background:rgba(63,170,245,.05);border-color:rgba(63,170,245,.08);color:#3faaf5}.bt-button--info{background:#909399;border:1px solid #909399;color:#fff}.bt-button--info:focus,.bt-button--info:hover{opacity:.7}.bt-button--info:disabled{opacity:.3;cursor:not-allowed}.bt-button--info.is-plain{background:#f4f4f5;border-color:#d3d4d6;color:#909399}.bt-button--info.is-plain:focus,.bt-button--info.is-plain:hover{opacity:1;background:#909399;border:1px solid #909399;color:#fff}.bt-button--info.is-plain:disabled{opacity:.3;cursor:not-allowed;background:rgba(80,191,255,.05);border-color:rgba(80,191,255,.08);color:#50bfff}.bt-button--warning{background:#f7ba2a;border:1px solid #f7ba2a;color:#fff}.bt-button--warning:focus,.bt-button--warning:hover{opacity:.7}.bt-button--warning:disabled{opacity:.3;cursor:not-allowed}.bt-button--warning.is-plain{background:rgba(247,186,42,.05);border-color:rgba(247,186,42,.08);color:#f7ba2a}.bt-button--warning.is-plain:focus,.bt-button--warning.is-plain:hover{background:#f7ba2a;border:1px solid #f7ba2a;color:#fff}.bt-button--warning.is-plain:disabled{opacity:.3;cursor:not-allowed;background:rgba(247,186,42,.05);border-color:rgba(247,186,42,.08);color:#f7ba2a}.bt-button--danger{background:#ff4949;border:1px solid #ff4949;color:#fff}.bt-button--danger:focus,.bt-button--danger:hover{opacity:.7}.bt-button--danger:disabled{opacity:.3;cursor:not-allowed}.bt-button--danger.is-plain{background:rgba(255,73,73,.05);border-color:rgba(255,73,73,.08);color:#ff4949}.bt-button--danger.is-plain:focus,.bt-button--danger.is-plain:hover{opacity:1;background:#ff4949;border:1px solid #ff4949;color:#fff}.bt-button--danger.is-plain:disabled{opacity:.3;cursor:not-allowed;background:rgba(255,73,73,.05);border-color:rgba(255,73,73,.08);color:#ff4949}.bt-button--text{color:#409eff;background:0 0;padding-left:0;padding-right:0}.bt-button--text:focus,.bt-button--text:hover{color:#66b1ff;border-color:transparent;background-color:transparent}.bt-button--text:disabled{opacity:.3;cursor:not-allowed;background:rgba(255,73,73,.05);border-color:rgba(255,73,73,.08);color:#ff4949}.bt-button--text:active{color:#3a8ee6;background-color:transparent}.bt-button--text,.bt-button--text.is-disabled,.bt-button--text.is-disabled:focus,.bt-button--text.is-disabled:hover,.bt-button--text:active{border-color:transparent}.bt-button.is-disabled.bt-button--text{background-color:transparent}", ""]);

// exports


/***/ }),

/***/ "26d2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_@vue_cli-service@3.1.2@@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./packages/theme-default/index.scss
var theme_default = __webpack_require__("794a");

// CONCATENATED MODULE: ./node_modules/_cache-loader@1.2.2@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1708cf6e-vue-loader-template"}!./node_modules/_vue-loader@15.4.2@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@1.2.2@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.4.2@vue-loader/lib??vue-loader-options!./packages/button/button.vue?vue&type=template&id=5422a8e4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"bt-button",class:[
		_vm.type ? 'bt-button--' + _vm.type : '',
		_vm.size ? 'bt-button--size-' + _vm.size : '',
		{
			'is-disabled': _vm.disabled,
			'is-plain': _vm.plain,
			'is-round': _vm.round,
		}
	],attrs:{"disabled":_vm.disabled,"type":_vm.nativeType},on:{"click":_vm.handleClick}},[(_vm.icon!= '')?_c('i',{class:_vm.icon}):_vm._e(),_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/button/button.vue?vue&type=template&id=5422a8e4&

// CONCATENATED MODULE: ./node_modules/_cache-loader@1.2.2@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.4.2@vue-loader/lib??vue-loader-options!./packages/button/button.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var buttonvue_type_script_lang_js_ = ({
    name: 'btButton',
    props: {
        type: {
            type: String,
            default: 'default'
        },
        size: {
            type: String,
            default: 'default'
        },
        icon: {
            type: String,
            default: ''
        },
        nativeType: {
            type: String,
            default: 'button' // 'button/submit/reset'
        },
        disabled: Boolean,
        plain: Boolean,
        round: Boolean
    },
    methods: {
        handleClick(evt) {
            this.$emit('click', evt);
        }
    }
});

// CONCATENATED MODULE: ./packages/button/button.vue?vue&type=script&lang=js&
 /* harmony default export */ var button_buttonvue_type_script_lang_js_ = (buttonvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.4.2@vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./packages/button/button.vue





/* normalize component */

var component = normalizeComponent(
  button_buttonvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "button.vue"
/* harmony default export */ var button_button = (component.exports);
// CONCATENATED MODULE: ./packages/button/index.js


button_button.install = function(Vue) {
    Vue.component(button_button.name, button_button);
};

/* harmony default export */ var packages_button = (button_button);
// CONCATENATED MODULE: ./packages/index.js
// styles



const components = [
    packages_button
];

// 定义install方法,接受Vue作为参数,use注册组件时所有组件都将被注册
const install = function(Vue) {
    if(install.installed) {
        return;
    }
    components.map(component => Vue.component(component.name, component));
};

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

/* harmony default export */ var packages_0 = ({
    install,
    btButton: packages_button
});
// CONCATENATED MODULE: ./node_modules/_@vue_cli-service@3.1.2@@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ }),

/***/ "690e":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "794a":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("0524");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("85cb").default
var update = add("a0cb96ec", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "85cb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-style-loader@4.1.2@vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/_vue-style-loader@4.1.2@vue-style-loader/lib/addStylesClient.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesClient; });
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ })

/******/ });
//# sourceMappingURL=bt-ui.common.js.map