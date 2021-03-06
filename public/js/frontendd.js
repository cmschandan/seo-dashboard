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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 45);
/******/ })
/************************************************************************/
/******/ ({

/***/ 12:
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(46);


/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

if (function (global, factory) {
  "object" == ( false ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = global.document ? factory(global, !0) : function (w) {
    if (!w.document) throw new Error("jQuery requires a window with a document");return factory(w);
  } : factory(global);
}("undefined" != typeof window ? window : this, function (window, noGlobal) {
  function isArraylike(obj) {
    var length = obj.length,
        type = jQuery.type(obj);return "function" === type || jQuery.isWindow(obj) ? !1 : 1 === obj.nodeType && length ? !0 : "array" === type || 0 === length || "number" == typeof length && length > 0 && length - 1 in obj;
  }function winnow(elements, qualifier, not) {
    if (jQuery.isFunction(qualifier)) return jQuery.grep(elements, function (elem, i) {
      return !!qualifier.call(elem, i, elem) !== not;
    });if (qualifier.nodeType) return jQuery.grep(elements, function (elem) {
      return elem === qualifier !== not;
    });if ("string" == typeof qualifier) {
      if (risSimple.test(qualifier)) return jQuery.filter(qualifier, elements, not);qualifier = jQuery.filter(qualifier, elements);
    }return jQuery.grep(elements, function (elem) {
      return indexOf.call(qualifier, elem) >= 0 !== not;
    });
  }function sibling(cur, dir) {
    for (; (cur = cur[dir]) && 1 !== cur.nodeType;) {}return cur;
  }function createOptions(options) {
    var object = optionsCache[options] = {};return jQuery.each(options.match(rnotwhite) || [], function (_, flag) {
      object[flag] = !0;
    }), object;
  }function completed() {
    document.removeEventListener("DOMContentLoaded", completed, !1), window.removeEventListener("load", completed, !1), jQuery.ready();
  }function Data() {
    Object.defineProperty(this.cache = {}, 0, { get: function get() {
        return {};
      } }), this.expando = jQuery.expando + Data.uid++;
  }function dataAttr(elem, key, data) {
    var name;if (void 0 === data && 1 === elem.nodeType) if (name = "data-" + key.replace(rmultiDash, "-$1").toLowerCase(), data = elem.getAttribute(name), "string" == typeof data) {
      try {
        data = "true" === data ? !0 : "false" === data ? !1 : "null" === data ? null : +data + "" === data ? +data : rbrace.test(data) ? jQuery.parseJSON(data) : data;
      } catch (e) {}data_user.set(elem, key, data);
    } else data = void 0;return data;
  }function returnTrue() {
    return !0;
  }function returnFalse() {
    return !1;
  }function safeActiveElement() {
    try {
      return document.activeElement;
    } catch (err) {}
  }function manipulationTarget(elem, content) {
    return jQuery.nodeName(elem, "table") && jQuery.nodeName(11 !== content.nodeType ? content : content.firstChild, "tr") ? elem.getElementsByTagName("tbody")[0] || elem.appendChild(elem.ownerDocument.createElement("tbody")) : elem;
  }function disableScript(elem) {
    return elem.type = (null !== elem.getAttribute("type")) + "/" + elem.type, elem;
  }function restoreScript(elem) {
    var match = rscriptTypeMasked.exec(elem.type);return match ? elem.type = match[1] : elem.removeAttribute("type"), elem;
  }function setGlobalEval(elems, refElements) {
    for (var i = 0, l = elems.length; l > i; i++) {
      data_priv.set(elems[i], "globalEval", !refElements || data_priv.get(refElements[i], "globalEval"));
    }
  }function cloneCopyEvent(src, dest) {
    var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;if (1 === dest.nodeType) {
      if (data_priv.hasData(src) && (pdataOld = data_priv.access(src), pdataCur = data_priv.set(dest, pdataOld), events = pdataOld.events)) {
        delete pdataCur.handle, pdataCur.events = {};for (type in events) {
          for (i = 0, l = events[type].length; l > i; i++) {
            jQuery.event.add(dest, type, events[type][i]);
          }
        }
      }data_user.hasData(src) && (udataOld = data_user.access(src), udataCur = jQuery.extend({}, udataOld), data_user.set(dest, udataCur));
    }
  }function getAll(context, tag) {
    var ret = context.getElementsByTagName ? context.getElementsByTagName(tag || "*") : context.querySelectorAll ? context.querySelectorAll(tag || "*") : [];return void 0 === tag || tag && jQuery.nodeName(context, tag) ? jQuery.merge([context], ret) : ret;
  }function fixInput(src, dest) {
    var nodeName = dest.nodeName.toLowerCase();"input" === nodeName && rcheckableType.test(src.type) ? dest.checked = src.checked : ("input" === nodeName || "textarea" === nodeName) && (dest.defaultValue = src.defaultValue);
  }function actualDisplay(name, doc) {
    var style,
        elem = jQuery(doc.createElement(name)).appendTo(doc.body),
        display = window.getDefaultComputedStyle && (style = window.getDefaultComputedStyle(elem[0])) ? style.display : jQuery.css(elem[0], "display");return elem.detach(), display;
  }function defaultDisplay(nodeName) {
    var doc = document,
        display = elemdisplay[nodeName];return display || (display = actualDisplay(nodeName, doc), "none" !== display && display || (iframe = (iframe || jQuery("<iframe frameborder='0' width='0' height='0'/>")).appendTo(doc.documentElement), doc = iframe[0].contentDocument, doc.write(), doc.close(), display = actualDisplay(nodeName, doc), iframe.detach()), elemdisplay[nodeName] = display), display;
  }function curCSS(elem, name, computed) {
    var width,
        minWidth,
        maxWidth,
        ret,
        style = elem.style;return computed = computed || getStyles(elem), computed && (ret = computed.getPropertyValue(name) || computed[name]), computed && ("" !== ret || jQuery.contains(elem.ownerDocument, elem) || (ret = jQuery.style(elem, name)), rnumnonpx.test(ret) && rmargin.test(name) && (width = style.width, minWidth = style.minWidth, maxWidth = style.maxWidth, style.minWidth = style.maxWidth = style.width = ret, ret = computed.width, style.width = width, style.minWidth = minWidth, style.maxWidth = maxWidth)), void 0 !== ret ? ret + "" : ret;
  }function addGetHookIf(conditionFn, hookFn) {
    return { get: function get() {
        return conditionFn() ? void delete this.get : (this.get = hookFn).apply(this, arguments);
      } };
  }function vendorPropName(style, name) {
    if (name in style) return name;for (var capName = name[0].toUpperCase() + name.slice(1), origName = name, i = cssPrefixes.length; i--;) {
      if (name = cssPrefixes[i] + capName, name in style) return name;
    }return origName;
  }function setPositiveNumber(elem, value, subtract) {
    var matches = rnumsplit.exec(value);return matches ? Math.max(0, matches[1] - (subtract || 0)) + (matches[2] || "px") : value;
  }function augmentWidthOrHeight(elem, name, extra, isBorderBox, styles) {
    for (var i = extra === (isBorderBox ? "border" : "content") ? 4 : "width" === name ? 1 : 0, val = 0; 4 > i; i += 2) {
      "margin" === extra && (val += jQuery.css(elem, extra + cssExpand[i], !0, styles)), isBorderBox ? ("content" === extra && (val -= jQuery.css(elem, "padding" + cssExpand[i], !0, styles)), "margin" !== extra && (val -= jQuery.css(elem, "border" + cssExpand[i] + "Width", !0, styles))) : (val += jQuery.css(elem, "padding" + cssExpand[i], !0, styles), "padding" !== extra && (val += jQuery.css(elem, "border" + cssExpand[i] + "Width", !0, styles)));
    }return val;
  }function getWidthOrHeight(elem, name, extra) {
    var valueIsBorderBox = !0,
        val = "width" === name ? elem.offsetWidth : elem.offsetHeight,
        styles = getStyles(elem),
        isBorderBox = "border-box" === jQuery.css(elem, "boxSizing", !1, styles);if (0 >= val || null == val) {
      if (val = curCSS(elem, name, styles), (0 > val || null == val) && (val = elem.style[name]), rnumnonpx.test(val)) return val;valueIsBorderBox = isBorderBox && (support.boxSizingReliable() || val === elem.style[name]), val = parseFloat(val) || 0;
    }return val + augmentWidthOrHeight(elem, name, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles) + "px";
  }function showHide(elements, show) {
    for (var display, elem, hidden, values = [], index = 0, length = elements.length; length > index; index++) {
      elem = elements[index], elem.style && (values[index] = data_priv.get(elem, "olddisplay"), display = elem.style.display, show ? (values[index] || "none" !== display || (elem.style.display = ""), "" === elem.style.display && isHidden(elem) && (values[index] = data_priv.access(elem, "olddisplay", defaultDisplay(elem.nodeName)))) : (hidden = isHidden(elem), "none" === display && hidden || data_priv.set(elem, "olddisplay", hidden ? display : jQuery.css(elem, "display"))));
    }for (index = 0; length > index; index++) {
      elem = elements[index], elem.style && (show && "none" !== elem.style.display && "" !== elem.style.display || (elem.style.display = show ? values[index] || "" : "none"));
    }return elements;
  }function Tween(elem, options, prop, end, easing) {
    return new Tween.prototype.init(elem, options, prop, end, easing);
  }function createFxNow() {
    return setTimeout(function () {
      fxNow = void 0;
    }), fxNow = jQuery.now();
  }function genFx(type, includeWidth) {
    var which,
        i = 0,
        attrs = { height: type };for (includeWidth = includeWidth ? 1 : 0; 4 > i; i += 2 - includeWidth) {
      which = cssExpand[i], attrs["margin" + which] = attrs["padding" + which] = type;
    }return includeWidth && (attrs.opacity = attrs.width = type), attrs;
  }function createTween(value, prop, animation) {
    for (var tween, collection = (tweeners[prop] || []).concat(tweeners["*"]), index = 0, length = collection.length; length > index; index++) {
      if (tween = collection[index].call(animation, prop, value)) return tween;
    }
  }function defaultPrefilter(elem, props, opts) {
    var prop,
        value,
        toggle,
        tween,
        hooks,
        oldfire,
        display,
        checkDisplay,
        anim = this,
        orig = {},
        style = elem.style,
        hidden = elem.nodeType && isHidden(elem),
        dataShow = data_priv.get(elem, "fxshow");opts.queue || (hooks = jQuery._queueHooks(elem, "fx"), null == hooks.unqueued && (hooks.unqueued = 0, oldfire = hooks.empty.fire, hooks.empty.fire = function () {
      hooks.unqueued || oldfire();
    }), hooks.unqueued++, anim.always(function () {
      anim.always(function () {
        hooks.unqueued--, jQuery.queue(elem, "fx").length || hooks.empty.fire();
      });
    })), 1 === elem.nodeType && ("height" in props || "width" in props) && (opts.overflow = [style.overflow, style.overflowX, style.overflowY], display = jQuery.css(elem, "display"), checkDisplay = "none" === display ? data_priv.get(elem, "olddisplay") || defaultDisplay(elem.nodeName) : display, "inline" === checkDisplay && "none" === jQuery.css(elem, "float") && (style.display = "inline-block")), opts.overflow && (style.overflow = "hidden", anim.always(function () {
      style.overflow = opts.overflow[0], style.overflowX = opts.overflow[1], style.overflowY = opts.overflow[2];
    }));for (prop in props) {
      if (value = props[prop], rfxtypes.exec(value)) {
        if (delete props[prop], toggle = toggle || "toggle" === value, value === (hidden ? "hide" : "show")) {
          if ("show" !== value || !dataShow || void 0 === dataShow[prop]) continue;hidden = !0;
        }orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
      } else display = void 0;
    }if (jQuery.isEmptyObject(orig)) "inline" === ("none" === display ? defaultDisplay(elem.nodeName) : display) && (style.display = display);else {
      dataShow ? "hidden" in dataShow && (hidden = dataShow.hidden) : dataShow = data_priv.access(elem, "fxshow", {}), toggle && (dataShow.hidden = !hidden), hidden ? jQuery(elem).show() : anim.done(function () {
        jQuery(elem).hide();
      }), anim.done(function () {
        var prop;data_priv.remove(elem, "fxshow");for (prop in orig) {
          jQuery.style(elem, prop, orig[prop]);
        }
      });for (prop in orig) {
        tween = createTween(hidden ? dataShow[prop] : 0, prop, anim), prop in dataShow || (dataShow[prop] = tween.start, hidden && (tween.end = tween.start, tween.start = "width" === prop || "height" === prop ? 1 : 0));
      }
    }
  }function propFilter(props, specialEasing) {
    var index, name, easing, value, hooks;for (index in props) {
      if (name = jQuery.camelCase(index), easing = specialEasing[name], value = props[index], jQuery.isArray(value) && (easing = value[1], value = props[index] = value[0]), index !== name && (props[name] = value, delete props[index]), hooks = jQuery.cssHooks[name], hooks && "expand" in hooks) {
        value = hooks.expand(value), delete props[name];for (index in value) {
          index in props || (props[index] = value[index], specialEasing[index] = easing);
        }
      } else specialEasing[name] = easing;
    }
  }function Animation(elem, properties, options) {
    var result,
        stopped,
        index = 0,
        length = animationPrefilters.length,
        deferred = jQuery.Deferred().always(function () {
      delete tick.elem;
    }),
        tick = function tick() {
      if (stopped) return !1;for (var currentTime = fxNow || createFxNow(), remaining = Math.max(0, animation.startTime + animation.duration - currentTime), temp = remaining / animation.duration || 0, percent = 1 - temp, index = 0, length = animation.tweens.length; length > index; index++) {
        animation.tweens[index].run(percent);
      }return deferred.notifyWith(elem, [animation, percent, remaining]), 1 > percent && length ? remaining : (deferred.resolveWith(elem, [animation]), !1);
    },
        animation = deferred.promise({ elem: elem, props: jQuery.extend({}, properties), opts: jQuery.extend(!0, { specialEasing: {} }, options), originalProperties: properties, originalOptions: options, startTime: fxNow || createFxNow(), duration: options.duration, tweens: [], createTween: function createTween(prop, end) {
        var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);return animation.tweens.push(tween), tween;
      }, stop: function stop(gotoEnd) {
        var index = 0,
            length = gotoEnd ? animation.tweens.length : 0;if (stopped) return this;for (stopped = !0; length > index; index++) {
          animation.tweens[index].run(1);
        }return gotoEnd ? deferred.resolveWith(elem, [animation, gotoEnd]) : deferred.rejectWith(elem, [animation, gotoEnd]), this;
      } }),
        props = animation.props;for (propFilter(props, animation.opts.specialEasing); length > index; index++) {
      if (result = animationPrefilters[index].call(animation, elem, props, animation.opts)) return result;
    }return jQuery.map(props, createTween, animation), jQuery.isFunction(animation.opts.start) && animation.opts.start.call(elem, animation), jQuery.fx.timer(jQuery.extend(tick, { elem: elem, anim: animation, queue: animation.opts.queue })), animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
  }function addToPrefiltersOrTransports(structure) {
    return function (dataTypeExpression, func) {
      "string" != typeof dataTypeExpression && (func = dataTypeExpression, dataTypeExpression = "*");var dataType,
          i = 0,
          dataTypes = dataTypeExpression.toLowerCase().match(rnotwhite) || [];if (jQuery.isFunction(func)) for (; dataType = dataTypes[i++];) {
        "+" === dataType[0] ? (dataType = dataType.slice(1) || "*", (structure[dataType] = structure[dataType] || []).unshift(func)) : (structure[dataType] = structure[dataType] || []).push(func);
      }
    };
  }function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
    function inspect(dataType) {
      var selected;return inspected[dataType] = !0, jQuery.each(structure[dataType] || [], function (_, prefilterOrFactory) {
        var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);return "string" != typeof dataTypeOrTransport || seekingTransport || inspected[dataTypeOrTransport] ? seekingTransport ? !(selected = dataTypeOrTransport) : void 0 : (options.dataTypes.unshift(dataTypeOrTransport), inspect(dataTypeOrTransport), !1);
      }), selected;
    }var inspected = {},
        seekingTransport = structure === transports;return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
  }function ajaxExtend(target, src) {
    var key,
        deep,
        flatOptions = jQuery.ajaxSettings.flatOptions || {};for (key in src) {
      void 0 !== src[key] && ((flatOptions[key] ? target : deep || (deep = {}))[key] = src[key]);
    }return deep && jQuery.extend(!0, target, deep), target;
  }function ajaxHandleResponses(s, jqXHR, responses) {
    for (var ct, type, finalDataType, firstDataType, contents = s.contents, dataTypes = s.dataTypes; "*" === dataTypes[0];) {
      dataTypes.shift(), void 0 === ct && (ct = s.mimeType || jqXHR.getResponseHeader("Content-Type"));
    }if (ct) for (type in contents) {
      if (contents[type] && contents[type].test(ct)) {
        dataTypes.unshift(type);break;
      }
    }if (dataTypes[0] in responses) finalDataType = dataTypes[0];else {
      for (type in responses) {
        if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
          finalDataType = type;break;
        }firstDataType || (firstDataType = type);
      }finalDataType = finalDataType || firstDataType;
    }return finalDataType ? (finalDataType !== dataTypes[0] && dataTypes.unshift(finalDataType), responses[finalDataType]) : void 0;
  }function ajaxConvert(s, response, jqXHR, isSuccess) {
    var conv2,
        current,
        conv,
        tmp,
        prev,
        converters = {},
        dataTypes = s.dataTypes.slice();if (dataTypes[1]) for (conv in s.converters) {
      converters[conv.toLowerCase()] = s.converters[conv];
    }for (current = dataTypes.shift(); current;) {
      if (s.responseFields[current] && (jqXHR[s.responseFields[current]] = response), !prev && isSuccess && s.dataFilter && (response = s.dataFilter(response, s.dataType)), prev = current, current = dataTypes.shift()) if ("*" === current) current = prev;else if ("*" !== prev && prev !== current) {
        if (conv = converters[prev + " " + current] || converters["* " + current], !conv) for (conv2 in converters) {
          if (tmp = conv2.split(" "), tmp[1] === current && (conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]])) {
            conv === !0 ? conv = converters[conv2] : converters[conv2] !== !0 && (current = tmp[0], dataTypes.unshift(tmp[1]));break;
          }
        }if (conv !== !0) if (conv && s["throws"]) response = conv(response);else try {
          response = conv(response);
        } catch (e) {
          return { state: "parsererror", error: conv ? e : "No conversion from " + prev + " to " + current };
        }
      }
    }return { state: "success", data: response };
  }function buildParams(prefix, obj, traditional, add) {
    var name;if (jQuery.isArray(obj)) jQuery.each(obj, function (i, v) {
      traditional || rbracket.test(prefix) ? add(prefix, v) : buildParams(prefix + "[" + ("object" == (typeof v === "undefined" ? "undefined" : _typeof(v)) ? i : "") + "]", v, traditional, add);
    });else if (traditional || "object" !== jQuery.type(obj)) add(prefix, obj);else for (name in obj) {
      buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
    }
  }function getWindow(elem) {
    return jQuery.isWindow(elem) ? elem : 9 === elem.nodeType && elem.defaultView;
  }var arr = [],
      _slice = arr.slice,
      concat = arr.concat,
      push = arr.push,
      indexOf = arr.indexOf,
      class2type = {},
      toString = class2type.toString,
      hasOwn = class2type.hasOwnProperty,
      support = {},
      document = window.document,
      version = "2.1.3",
      jQuery = function jQuery(selector, context) {
    return new jQuery.fn.init(selector, context);
  },
      rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      rmsPrefix = /^-ms-/,
      rdashAlpha = /-([\da-z])/gi,
      fcamelCase = function fcamelCase(all, letter) {
    return letter.toUpperCase();
  };jQuery.fn = jQuery.prototype = { jquery: version, constructor: jQuery, selector: "", length: 0, toArray: function toArray() {
      return _slice.call(this);
    }, get: function get(num) {
      return null != num ? 0 > num ? this[num + this.length] : this[num] : _slice.call(this);
    }, pushStack: function pushStack(elems) {
      var ret = jQuery.merge(this.constructor(), elems);return ret.prevObject = this, ret.context = this.context, ret;
    }, each: function each(callback, args) {
      return jQuery.each(this, callback, args);
    }, map: function map(callback) {
      return this.pushStack(jQuery.map(this, function (elem, i) {
        return callback.call(elem, i, elem);
      }));
    }, slice: function slice() {
      return this.pushStack(_slice.apply(this, arguments));
    }, first: function first() {
      return this.eq(0);
    }, last: function last() {
      return this.eq(-1);
    }, eq: function eq(i) {
      var len = this.length,
          j = +i + (0 > i ? len : 0);return this.pushStack(j >= 0 && len > j ? [this[j]] : []);
    }, end: function end() {
      return this.prevObject || this.constructor(null);
    }, push: push, sort: arr.sort, splice: arr.splice }, jQuery.extend = jQuery.fn.extend = function () {
    var options,
        name,
        src,
        copy,
        copyIsArray,
        clone,
        target = arguments[0] || {},
        i = 1,
        length = arguments.length,
        deep = !1;for ("boolean" == typeof target && (deep = target, target = arguments[i] || {}, i++), "object" == (typeof target === "undefined" ? "undefined" : _typeof(target)) || jQuery.isFunction(target) || (target = {}), i === length && (target = this, i--); length > i; i++) {
      if (null != (options = arguments[i])) for (name in options) {
        src = target[name], copy = options[name], target !== copy && (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy))) ? (copyIsArray ? (copyIsArray = !1, clone = src && jQuery.isArray(src) ? src : []) : clone = src && jQuery.isPlainObject(src) ? src : {}, target[name] = jQuery.extend(deep, clone, copy)) : void 0 !== copy && (target[name] = copy));
      }
    }return target;
  }, jQuery.extend({ expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""), isReady: !0, error: function error(msg) {
      throw new Error(msg);
    }, noop: function noop() {}, isFunction: function isFunction(obj) {
      return "function" === jQuery.type(obj);
    }, isArray: Array.isArray, isWindow: function isWindow(obj) {
      return null != obj && obj === obj.window;
    }, isNumeric: function isNumeric(obj) {
      return !jQuery.isArray(obj) && obj - parseFloat(obj) + 1 >= 0;
    }, isPlainObject: function isPlainObject(obj) {
      return "object" !== jQuery.type(obj) || obj.nodeType || jQuery.isWindow(obj) ? !1 : obj.constructor && !hasOwn.call(obj.constructor.prototype, "isPrototypeOf") ? !1 : !0;
    }, isEmptyObject: function isEmptyObject(obj) {
      var name;for (name in obj) {
        return !1;
      }return !0;
    }, type: function type(obj) {
      return null == obj ? obj + "" : "object" == (typeof obj === "undefined" ? "undefined" : _typeof(obj)) || "function" == typeof obj ? class2type[toString.call(obj)] || "object" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
    }, globalEval: function globalEval(code) {
      var script,
          indirect = eval;code = jQuery.trim(code), code && (1 === code.indexOf("use strict") ? (script = document.createElement("script"), script.text = code, document.head.appendChild(script).parentNode.removeChild(script)) : indirect(code));
    }, camelCase: function camelCase(string) {
      return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
    }, nodeName: function nodeName(elem, name) {
      return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
    }, each: function each(obj, callback, args) {
      var value,
          i = 0,
          length = obj.length,
          isArray = isArraylike(obj);if (args) {
        if (isArray) for (; length > i && (value = callback.apply(obj[i], args), value !== !1); i++) {} else for (i in obj) {
          if (value = callback.apply(obj[i], args), value === !1) break;
        }
      } else if (isArray) for (; length > i && (value = callback.call(obj[i], i, obj[i]), value !== !1); i++) {} else for (i in obj) {
        if (value = callback.call(obj[i], i, obj[i]), value === !1) break;
      }return obj;
    }, trim: function trim(text) {
      return null == text ? "" : (text + "").replace(rtrim, "");
    }, makeArray: function makeArray(arr, results) {
      var ret = results || [];return null != arr && (isArraylike(Object(arr)) ? jQuery.merge(ret, "string" == typeof arr ? [arr] : arr) : push.call(ret, arr)), ret;
    }, inArray: function inArray(elem, arr, i) {
      return null == arr ? -1 : indexOf.call(arr, elem, i);
    }, merge: function merge(first, second) {
      for (var len = +second.length, j = 0, i = first.length; len > j; j++) {
        first[i++] = second[j];
      }return first.length = i, first;
    }, grep: function grep(elems, callback, invert) {
      for (var callbackInverse, matches = [], i = 0, length = elems.length, callbackExpect = !invert; length > i; i++) {
        callbackInverse = !callback(elems[i], i), callbackInverse !== callbackExpect && matches.push(elems[i]);
      }return matches;
    }, map: function map(elems, callback, arg) {
      var value,
          i = 0,
          length = elems.length,
          isArray = isArraylike(elems),
          ret = [];if (isArray) for (; length > i; i++) {
        value = callback(elems[i], i, arg), null != value && ret.push(value);
      } else for (i in elems) {
        value = callback(elems[i], i, arg), null != value && ret.push(value);
      }return concat.apply([], ret);
    }, guid: 1, proxy: function proxy(fn, context) {
      var tmp, args, proxy;return "string" == typeof context && (tmp = fn[context], context = fn, fn = tmp), jQuery.isFunction(fn) ? (args = _slice.call(arguments, 2), proxy = function proxy() {
        return fn.apply(context || this, args.concat(_slice.call(arguments)));
      }, proxy.guid = fn.guid = fn.guid || jQuery.guid++, proxy) : void 0;
    }, now: Date.now, support: support }), jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (i, name) {
    class2type["[object " + name + "]"] = name.toLowerCase();
  });var Sizzle = function (window) {
    function Sizzle(selector, context, results, seed) {
      var match, elem, m, nodeType, i, groups, old, nid, newContext, newSelector;if ((context ? context.ownerDocument || context : preferredDoc) !== document && setDocument(context), context = context || document, results = results || [], nodeType = context.nodeType, "string" != typeof selector || !selector || 1 !== nodeType && 9 !== nodeType && 11 !== nodeType) return results;if (!seed && documentIsHTML) {
        if (11 !== nodeType && (match = rquickExpr.exec(selector))) if (m = match[1]) {
          if (9 === nodeType) {
            if (elem = context.getElementById(m), !elem || !elem.parentNode) return results;if (elem.id === m) return results.push(elem), results;
          } else if (context.ownerDocument && (elem = context.ownerDocument.getElementById(m)) && contains(context, elem) && elem.id === m) return results.push(elem), results;
        } else {
          if (match[2]) return push.apply(results, context.getElementsByTagName(selector)), results;if ((m = match[3]) && support.getElementsByClassName) return push.apply(results, context.getElementsByClassName(m)), results;
        }if (support.qsa && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
          if (nid = old = expando, newContext = context, newSelector = 1 !== nodeType && selector, 1 === nodeType && "object" !== context.nodeName.toLowerCase()) {
            for (groups = tokenize(selector), (old = context.getAttribute("id")) ? nid = old.replace(rescape, "\\$&") : context.setAttribute("id", nid), nid = "[id='" + nid + "'] ", i = groups.length; i--;) {
              groups[i] = nid + toSelector(groups[i]);
            }newContext = rsibling.test(selector) && testContext(context.parentNode) || context, newSelector = groups.join(",");
          }if (newSelector) try {
            return push.apply(results, newContext.querySelectorAll(newSelector)), results;
          } catch (qsaError) {} finally {
            old || context.removeAttribute("id");
          }
        }
      }return select(selector.replace(rtrim, "$1"), context, results, seed);
    }function createCache() {
      function cache(key, value) {
        return keys.push(key + " ") > Expr.cacheLength && delete cache[keys.shift()], cache[key + " "] = value;
      }var keys = [];return cache;
    }function markFunction(fn) {
      return fn[expando] = !0, fn;
    }function assert(fn) {
      var div = document.createElement("div");try {
        return !!fn(div);
      } catch (e) {
        return !1;
      } finally {
        div.parentNode && div.parentNode.removeChild(div), div = null;
      }
    }function addHandle(attrs, handler) {
      for (var arr = attrs.split("|"), i = attrs.length; i--;) {
        Expr.attrHandle[arr[i]] = handler;
      }
    }function siblingCheck(a, b) {
      var cur = b && a,
          diff = cur && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || MAX_NEGATIVE) - (~a.sourceIndex || MAX_NEGATIVE);if (diff) return diff;if (cur) for (; cur = cur.nextSibling;) {
        if (cur === b) return -1;
      }return a ? 1 : -1;
    }function createInputPseudo(type) {
      return function (elem) {
        var name = elem.nodeName.toLowerCase();return "input" === name && elem.type === type;
      };
    }function createButtonPseudo(type) {
      return function (elem) {
        var name = elem.nodeName.toLowerCase();return ("input" === name || "button" === name) && elem.type === type;
      };
    }function createPositionalPseudo(fn) {
      return markFunction(function (argument) {
        return argument = +argument, markFunction(function (seed, matches) {
          for (var j, matchIndexes = fn([], seed.length, argument), i = matchIndexes.length; i--;) {
            seed[j = matchIndexes[i]] && (seed[j] = !(matches[j] = seed[j]));
          }
        });
      });
    }function testContext(context) {
      return context && "undefined" != typeof context.getElementsByTagName && context;
    }function setFilters() {}function toSelector(tokens) {
      for (var i = 0, len = tokens.length, selector = ""; len > i; i++) {
        selector += tokens[i].value;
      }return selector;
    }function addCombinator(matcher, combinator, base) {
      var dir = combinator.dir,
          checkNonElements = base && "parentNode" === dir,
          doneName = done++;return combinator.first ? function (elem, context, xml) {
        for (; elem = elem[dir];) {
          if (1 === elem.nodeType || checkNonElements) return matcher(elem, context, xml);
        }
      } : function (elem, context, xml) {
        var oldCache,
            outerCache,
            newCache = [dirruns, doneName];if (xml) {
          for (; elem = elem[dir];) {
            if ((1 === elem.nodeType || checkNonElements) && matcher(elem, context, xml)) return !0;
          }
        } else for (; elem = elem[dir];) {
          if (1 === elem.nodeType || checkNonElements) {
            if (outerCache = elem[expando] || (elem[expando] = {}), (oldCache = outerCache[dir]) && oldCache[0] === dirruns && oldCache[1] === doneName) return newCache[2] = oldCache[2];if (outerCache[dir] = newCache, newCache[2] = matcher(elem, context, xml)) return !0;
          }
        }
      };
    }function elementMatcher(matchers) {
      return matchers.length > 1 ? function (elem, context, xml) {
        for (var i = matchers.length; i--;) {
          if (!matchers[i](elem, context, xml)) return !1;
        }return !0;
      } : matchers[0];
    }function multipleContexts(selector, contexts, results) {
      for (var i = 0, len = contexts.length; len > i; i++) {
        Sizzle(selector, contexts[i], results);
      }return results;
    }function condense(unmatched, map, filter, context, xml) {
      for (var elem, newUnmatched = [], i = 0, len = unmatched.length, mapped = null != map; len > i; i++) {
        (elem = unmatched[i]) && (!filter || filter(elem, context, xml)) && (newUnmatched.push(elem), mapped && map.push(i));
      }return newUnmatched;
    }function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
      return postFilter && !postFilter[expando] && (postFilter = setMatcher(postFilter)), postFinder && !postFinder[expando] && (postFinder = setMatcher(postFinder, postSelector)), markFunction(function (seed, results, context, xml) {
        var temp,
            i,
            elem,
            preMap = [],
            postMap = [],
            preexisting = results.length,
            elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []),
            matcherIn = !preFilter || !seed && selector ? elems : condense(elems, preMap, preFilter, context, xml),
            matcherOut = matcher ? postFinder || (seed ? preFilter : preexisting || postFilter) ? [] : results : matcherIn;if (matcher && matcher(matcherIn, matcherOut, context, xml), postFilter) for (temp = condense(matcherOut, postMap), postFilter(temp, [], context, xml), i = temp.length; i--;) {
          (elem = temp[i]) && (matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem));
        }if (seed) {
          if (postFinder || preFilter) {
            if (postFinder) {
              for (temp = [], i = matcherOut.length; i--;) {
                (elem = matcherOut[i]) && temp.push(matcherIn[i] = elem);
              }postFinder(null, matcherOut = [], temp, xml);
            }for (i = matcherOut.length; i--;) {
              (elem = matcherOut[i]) && (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1 && (seed[temp] = !(results[temp] = elem));
            }
          }
        } else matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut), postFinder ? postFinder(null, results, matcherOut, xml) : push.apply(results, matcherOut);
      });
    }function matcherFromTokens(tokens) {
      for (var checkContext, matcher, j, len = tokens.length, leadingRelative = Expr.relative[tokens[0].type], implicitRelative = leadingRelative || Expr.relative[" "], i = leadingRelative ? 1 : 0, matchContext = addCombinator(function (elem) {
        return elem === checkContext;
      }, implicitRelative, !0), matchAnyContext = addCombinator(function (elem) {
        return indexOf(checkContext, elem) > -1;
      }, implicitRelative, !0), matchers = [function (elem, context, xml) {
        var ret = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));return checkContext = null, ret;
      }]; len > i; i++) {
        if (matcher = Expr.relative[tokens[i].type]) matchers = [addCombinator(elementMatcher(matchers), matcher)];else {
          if (matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches), matcher[expando]) {
            for (j = ++i; len > j && !Expr.relative[tokens[j].type]; j++) {}return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector(tokens.slice(0, i - 1).concat({ value: " " === tokens[i - 2].type ? "*" : "" })).replace(rtrim, "$1"), matcher, j > i && matcherFromTokens(tokens.slice(i, j)), len > j && matcherFromTokens(tokens = tokens.slice(j)), len > j && toSelector(tokens));
          }matchers.push(matcher);
        }
      }return elementMatcher(matchers);
    }function matcherFromGroupMatchers(elementMatchers, setMatchers) {
      var bySet = setMatchers.length > 0,
          byElement = elementMatchers.length > 0,
          superMatcher = function superMatcher(seed, context, xml, results, outermost) {
        var elem,
            j,
            matcher,
            matchedCount = 0,
            i = "0",
            unmatched = seed && [],
            setMatched = [],
            contextBackup = outermostContext,
            elems = seed || byElement && Expr.find.TAG("*", outermost),
            dirrunsUnique = dirruns += null == contextBackup ? 1 : Math.random() || .1,
            len = elems.length;for (outermost && (outermostContext = context !== document && context); i !== len && null != (elem = elems[i]); i++) {
          if (byElement && elem) {
            for (j = 0; matcher = elementMatchers[j++];) {
              if (matcher(elem, context, xml)) {
                results.push(elem);break;
              }
            }outermost && (dirruns = dirrunsUnique);
          }bySet && ((elem = !matcher && elem) && matchedCount--, seed && unmatched.push(elem));
        }if (matchedCount += i, bySet && i !== matchedCount) {
          for (j = 0; matcher = setMatchers[j++];) {
            matcher(unmatched, setMatched, context, xml);
          }if (seed) {
            if (matchedCount > 0) for (; i--;) {
              unmatched[i] || setMatched[i] || (setMatched[i] = pop.call(results));
            }setMatched = condense(setMatched);
          }push.apply(results, setMatched), outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1 && Sizzle.uniqueSort(results);
        }return outermost && (dirruns = dirrunsUnique, outermostContext = contextBackup), unmatched;
      };return bySet ? markFunction(superMatcher) : superMatcher;
    }var i,
        support,
        Expr,
        getText,
        isXML,
        tokenize,
        compile,
        select,
        outermostContext,
        sortInput,
        hasDuplicate,
        setDocument,
        document,
        docElem,
        documentIsHTML,
        rbuggyQSA,
        rbuggyMatches,
        matches,
        contains,
        expando = "sizzle" + 1 * new Date(),
        preferredDoc = window.document,
        dirruns = 0,
        done = 0,
        classCache = createCache(),
        tokenCache = createCache(),
        compilerCache = createCache(),
        sortOrder = function sortOrder(a, b) {
      return a === b && (hasDuplicate = !0), 0;
    },
        MAX_NEGATIVE = 1 << 31,
        hasOwn = {}.hasOwnProperty,
        arr = [],
        pop = arr.pop,
        push_native = arr.push,
        push = arr.push,
        slice = arr.slice,
        indexOf = function indexOf(list, elem) {
      for (var i = 0, len = list.length; len > i; i++) {
        if (list[i] === elem) return i;
      }return -1;
    },
        booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        whitespace = "[\\x20\\t\\r\\n\\f]",
        characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        identifier = characterEncoding.replace("w", "w#"),
        attributes = "\\[" + whitespace + "*(" + characterEncoding + ")(?:" + whitespace + "*([*^$|!~]?=)" + whitespace + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]",
        pseudos = ":(" + characterEncoding + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|.*)\\)|)",
        rwhitespace = new RegExp(whitespace + "+", "g"),
        rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"),
        rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
        rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"),
        rattributeQuotes = new RegExp("=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g"),
        rpseudo = new RegExp(pseudos),
        ridentifier = new RegExp("^" + identifier + "$"),
        matchExpr = { ID: new RegExp("^#(" + characterEncoding + ")"), CLASS: new RegExp("^\\.(" + characterEncoding + ")"), TAG: new RegExp("^(" + characterEncoding.replace("w", "w*") + ")"), ATTR: new RegExp("^" + attributes), PSEUDO: new RegExp("^" + pseudos), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"), bool: new RegExp("^(?:" + booleans + ")$", "i"), needsContext: new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i") },
        rinputs = /^(?:input|select|textarea|button)$/i,
        rheader = /^h\d$/i,
        rnative = /^[^{]+\{\s*\[native \w/,
        rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        rsibling = /[+~]/,
        rescape = /'|\\/g,
        runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig"),
        funescape = function funescape(_, escaped, escapedWhitespace) {
      var high = "0x" + escaped - 65536;
      return high !== high || escapedWhitespace ? escaped : 0 > high ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, 1023 & high | 56320);
    },
        unloadHandler = function unloadHandler() {
      setDocument();
    };try {
      push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes), arr[preferredDoc.childNodes.length].nodeType;
    } catch (e) {
      push = { apply: arr.length ? function (target, els) {
          push_native.apply(target, slice.call(els));
        } : function (target, els) {
          for (var j = target.length, i = 0; target[j++] = els[i++];) {}target.length = j - 1;
        } };
    }support = Sizzle.support = {}, isXML = Sizzle.isXML = function (elem) {
      var documentElement = elem && (elem.ownerDocument || elem).documentElement;return documentElement ? "HTML" !== documentElement.nodeName : !1;
    }, setDocument = Sizzle.setDocument = function (node) {
      var hasCompare,
          parent,
          doc = node ? node.ownerDocument || node : preferredDoc;return doc !== document && 9 === doc.nodeType && doc.documentElement ? (document = doc, docElem = doc.documentElement, parent = doc.defaultView, parent && parent !== parent.top && (parent.addEventListener ? parent.addEventListener("unload", unloadHandler, !1) : parent.attachEvent && parent.attachEvent("onunload", unloadHandler)), documentIsHTML = !isXML(doc), support.attributes = assert(function (div) {
        return div.className = "i", !div.getAttribute("className");
      }), support.getElementsByTagName = assert(function (div) {
        return div.appendChild(doc.createComment("")), !div.getElementsByTagName("*").length;
      }), support.getElementsByClassName = rnative.test(doc.getElementsByClassName), support.getById = assert(function (div) {
        return docElem.appendChild(div).id = expando, !doc.getElementsByName || !doc.getElementsByName(expando).length;
      }), support.getById ? (Expr.find.ID = function (id, context) {
        if ("undefined" != typeof context.getElementById && documentIsHTML) {
          var m = context.getElementById(id);return m && m.parentNode ? [m] : [];
        }
      }, Expr.filter.ID = function (id) {
        var attrId = id.replace(runescape, funescape);return function (elem) {
          return elem.getAttribute("id") === attrId;
        };
      }) : (delete Expr.find.ID, Expr.filter.ID = function (id) {
        var attrId = id.replace(runescape, funescape);return function (elem) {
          var node = "undefined" != typeof elem.getAttributeNode && elem.getAttributeNode("id");return node && node.value === attrId;
        };
      }), Expr.find.TAG = support.getElementsByTagName ? function (tag, context) {
        return "undefined" != typeof context.getElementsByTagName ? context.getElementsByTagName(tag) : support.qsa ? context.querySelectorAll(tag) : void 0;
      } : function (tag, context) {
        var elem,
            tmp = [],
            i = 0,
            results = context.getElementsByTagName(tag);if ("*" === tag) {
          for (; elem = results[i++];) {
            1 === elem.nodeType && tmp.push(elem);
          }return tmp;
        }return results;
      }, Expr.find.CLASS = support.getElementsByClassName && function (className, context) {
        return documentIsHTML ? context.getElementsByClassName(className) : void 0;
      }, rbuggyMatches = [], rbuggyQSA = [], (support.qsa = rnative.test(doc.querySelectorAll)) && (assert(function (div) {
        docElem.appendChild(div).innerHTML = "<a id='" + expando + "'></a><select id='" + expando + "-\f]' msallowcapture=''><option selected=''></option></select>", div.querySelectorAll("[msallowcapture^='']").length && rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")"), div.querySelectorAll("[selected]").length || rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")"), div.querySelectorAll("[id~=" + expando + "-]").length || rbuggyQSA.push("~="), div.querySelectorAll(":checked").length || rbuggyQSA.push(":checked"), div.querySelectorAll("a#" + expando + "+*").length || rbuggyQSA.push(".#.+[+~]");
      }), assert(function (div) {
        var input = doc.createElement("input");input.setAttribute("type", "hidden"), div.appendChild(input).setAttribute("name", "D"), div.querySelectorAll("[name=d]").length && rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?="), div.querySelectorAll(":enabled").length || rbuggyQSA.push(":enabled", ":disabled"), div.querySelectorAll("*,:x"), rbuggyQSA.push(",.*:");
      })), (support.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) && assert(function (div) {
        support.disconnectedMatch = matches.call(div, "div"), matches.call(div, "[s!='']:x"), rbuggyMatches.push("!=", pseudos);
      }), rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|")), rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|")), hasCompare = rnative.test(docElem.compareDocumentPosition), contains = hasCompare || rnative.test(docElem.contains) ? function (a, b) {
        var adown = 9 === a.nodeType ? a.documentElement : a,
            bup = b && b.parentNode;return a === bup || !(!bup || 1 !== bup.nodeType || !(adown.contains ? adown.contains(bup) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(bup)));
      } : function (a, b) {
        if (b) for (; b = b.parentNode;) {
          if (b === a) return !0;
        }return !1;
      }, sortOrder = hasCompare ? function (a, b) {
        if (a === b) return hasDuplicate = !0, 0;var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;return compare ? compare : (compare = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & compare || !support.sortDetached && b.compareDocumentPosition(a) === compare ? a === doc || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ? -1 : b === doc || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0 : 4 & compare ? -1 : 1);
      } : function (a, b) {
        if (a === b) return hasDuplicate = !0, 0;var cur,
            i = 0,
            aup = a.parentNode,
            bup = b.parentNode,
            ap = [a],
            bp = [b];if (!aup || !bup) return a === doc ? -1 : b === doc ? 1 : aup ? -1 : bup ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;if (aup === bup) return siblingCheck(a, b);for (cur = a; cur = cur.parentNode;) {
          ap.unshift(cur);
        }for (cur = b; cur = cur.parentNode;) {
          bp.unshift(cur);
        }for (; ap[i] === bp[i];) {
          i++;
        }return i ? siblingCheck(ap[i], bp[i]) : ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0;
      }, doc) : document;
    }, Sizzle.matches = function (expr, elements) {
      return Sizzle(expr, null, null, elements);
    }, Sizzle.matchesSelector = function (elem, expr) {
      if ((elem.ownerDocument || elem) !== document && setDocument(elem), expr = expr.replace(rattributeQuotes, "='$1']"), !(!support.matchesSelector || !documentIsHTML || rbuggyMatches && rbuggyMatches.test(expr) || rbuggyQSA && rbuggyQSA.test(expr))) try {
        var ret = matches.call(elem, expr);if (ret || support.disconnectedMatch || elem.document && 11 !== elem.document.nodeType) return ret;
      } catch (e) {}return Sizzle(expr, document, null, [elem]).length > 0;
    }, Sizzle.contains = function (context, elem) {
      return (context.ownerDocument || context) !== document && setDocument(context), contains(context, elem);
    }, Sizzle.attr = function (elem, name) {
      (elem.ownerDocument || elem) !== document && setDocument(elem);var fn = Expr.attrHandle[name.toLowerCase()],
          val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : void 0;return void 0 !== val ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
    }, Sizzle.error = function (msg) {
      throw new Error("Syntax error, unrecognized expression: " + msg);
    }, Sizzle.uniqueSort = function (results) {
      var elem,
          duplicates = [],
          j = 0,
          i = 0;if (hasDuplicate = !support.detectDuplicates, sortInput = !support.sortStable && results.slice(0), results.sort(sortOrder), hasDuplicate) {
        for (; elem = results[i++];) {
          elem === results[i] && (j = duplicates.push(i));
        }for (; j--;) {
          results.splice(duplicates[j], 1);
        }
      }return sortInput = null, results;
    }, getText = Sizzle.getText = function (elem) {
      var node,
          ret = "",
          i = 0,
          nodeType = elem.nodeType;if (nodeType) {
        if (1 === nodeType || 9 === nodeType || 11 === nodeType) {
          if ("string" == typeof elem.textContent) return elem.textContent;for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
            ret += getText(elem);
          }
        } else if (3 === nodeType || 4 === nodeType) return elem.nodeValue;
      } else for (; node = elem[i++];) {
        ret += getText(node);
      }return ret;
    }, Expr = Sizzle.selectors = { cacheLength: 50, createPseudo: markFunction, match: matchExpr, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function ATTR(match) {
          return match[1] = match[1].replace(runescape, funescape), match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape), "~=" === match[2] && (match[3] = " " + match[3] + " "), match.slice(0, 4);
        }, CHILD: function CHILD(match) {
          return match[1] = match[1].toLowerCase(), "nth" === match[1].slice(0, 3) ? (match[3] || Sizzle.error(match[0]), match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * ("even" === match[3] || "odd" === match[3])), match[5] = +(match[7] + match[8] || "odd" === match[3])) : match[3] && Sizzle.error(match[0]), match;
        }, PSEUDO: function PSEUDO(match) {
          var excess,
              unquoted = !match[6] && match[2];return matchExpr.CHILD.test(match[0]) ? null : (match[3] ? match[2] = match[4] || match[5] || "" : unquoted && rpseudo.test(unquoted) && (excess = tokenize(unquoted, !0)) && (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length) && (match[0] = match[0].slice(0, excess), match[2] = unquoted.slice(0, excess)), match.slice(0, 3));
        } }, filter: { TAG: function TAG(nodeNameSelector) {
          var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();return "*" === nodeNameSelector ? function () {
            return !0;
          } : function (elem) {
            return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
          };
        }, CLASS: function CLASS(className) {
          var pattern = classCache[className + " "];return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function (elem) {
            return pattern.test("string" == typeof elem.className && elem.className || "undefined" != typeof elem.getAttribute && elem.getAttribute("class") || "");
          });
        }, ATTR: function ATTR(name, operator, check) {
          return function (elem) {
            var result = Sizzle.attr(elem, name);return null == result ? "!=" === operator : operator ? (result += "", "=" === operator ? result === check : "!=" === operator ? result !== check : "^=" === operator ? check && 0 === result.indexOf(check) : "*=" === operator ? check && result.indexOf(check) > -1 : "$=" === operator ? check && result.slice(-check.length) === check : "~=" === operator ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : "|=" === operator ? result === check || result.slice(0, check.length + 1) === check + "-" : !1) : !0;
          };
        }, CHILD: function CHILD(type, what, argument, first, last) {
          var simple = "nth" !== type.slice(0, 3),
              forward = "last" !== type.slice(-4),
              ofType = "of-type" === what;return 1 === first && 0 === last ? function (elem) {
            return !!elem.parentNode;
          } : function (elem, context, xml) {
            var cache,
                outerCache,
                node,
                diff,
                nodeIndex,
                start,
                dir = simple !== forward ? "nextSibling" : "previousSibling",
                parent = elem.parentNode,
                name = ofType && elem.nodeName.toLowerCase(),
                useCache = !xml && !ofType;if (parent) {
              if (simple) {
                for (; dir;) {
                  for (node = elem; node = node[dir];) {
                    if (ofType ? node.nodeName.toLowerCase() === name : 1 === node.nodeType) return !1;
                  }start = dir = "only" === type && !start && "nextSibling";
                }return !0;
              }if (start = [forward ? parent.firstChild : parent.lastChild], forward && useCache) {
                for (outerCache = parent[expando] || (parent[expando] = {}), cache = outerCache[type] || [], nodeIndex = cache[0] === dirruns && cache[1], diff = cache[0] === dirruns && cache[2], node = nodeIndex && parent.childNodes[nodeIndex]; node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop();) {
                  if (1 === node.nodeType && ++diff && node === elem) {
                    outerCache[type] = [dirruns, nodeIndex, diff];break;
                  }
                }
              } else if (useCache && (cache = (elem[expando] || (elem[expando] = {}))[type]) && cache[0] === dirruns) diff = cache[1];else for (; (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) && ((ofType ? node.nodeName.toLowerCase() !== name : 1 !== node.nodeType) || !++diff || (useCache && ((node[expando] || (node[expando] = {}))[type] = [dirruns, diff]), node !== elem));) {}return diff -= last, diff === first || diff % first === 0 && diff / first >= 0;
            }
          };
        }, PSEUDO: function PSEUDO(pseudo, argument) {
          var args,
              fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo);return fn[expando] ? fn(argument) : fn.length > 1 ? (args = [pseudo, pseudo, "", argument], Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function (seed, matches) {
            for (var idx, matched = fn(seed, argument), i = matched.length; i--;) {
              idx = indexOf(seed, matched[i]), seed[idx] = !(matches[idx] = matched[i]);
            }
          }) : function (elem) {
            return fn(elem, 0, args);
          }) : fn;
        } }, pseudos: { not: markFunction(function (selector) {
          var input = [],
              results = [],
              matcher = compile(selector.replace(rtrim, "$1"));return matcher[expando] ? markFunction(function (seed, matches, context, xml) {
            for (var elem, unmatched = matcher(seed, null, xml, []), i = seed.length; i--;) {
              (elem = unmatched[i]) && (seed[i] = !(matches[i] = elem));
            }
          }) : function (elem, context, xml) {
            return input[0] = elem, matcher(input, null, xml, results), input[0] = null, !results.pop();
          };
        }), has: markFunction(function (selector) {
          return function (elem) {
            return Sizzle(selector, elem).length > 0;
          };
        }), contains: markFunction(function (text) {
          return text = text.replace(runescape, funescape), function (elem) {
            return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1;
          };
        }), lang: markFunction(function (lang) {
          return ridentifier.test(lang || "") || Sizzle.error("unsupported lang: " + lang), lang = lang.replace(runescape, funescape).toLowerCase(), function (elem) {
            var elemLang;do {
              if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) return elemLang = elemLang.toLowerCase(), elemLang === lang || 0 === elemLang.indexOf(lang + "-");
            } while ((elem = elem.parentNode) && 1 === elem.nodeType);return !1;
          };
        }), target: function target(elem) {
          var hash = window.location && window.location.hash;return hash && hash.slice(1) === elem.id;
        }, root: function root(elem) {
          return elem === docElem;
        }, focus: function focus(elem) {
          return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
        }, enabled: function enabled(elem) {
          return elem.disabled === !1;
        }, disabled: function disabled(elem) {
          return elem.disabled === !0;
        }, checked: function checked(elem) {
          var nodeName = elem.nodeName.toLowerCase();return "input" === nodeName && !!elem.checked || "option" === nodeName && !!elem.selected;
        }, selected: function selected(elem) {
          return elem.parentNode && elem.parentNode.selectedIndex, elem.selected === !0;
        }, empty: function empty(elem) {
          for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
            if (elem.nodeType < 6) return !1;
          }return !0;
        }, parent: function parent(elem) {
          return !Expr.pseudos.empty(elem);
        }, header: function header(elem) {
          return rheader.test(elem.nodeName);
        }, input: function input(elem) {
          return rinputs.test(elem.nodeName);
        }, button: function button(elem) {
          var name = elem.nodeName.toLowerCase();return "input" === name && "button" === elem.type || "button" === name;
        }, text: function text(elem) {
          var attr;return "input" === elem.nodeName.toLowerCase() && "text" === elem.type && (null == (attr = elem.getAttribute("type")) || "text" === attr.toLowerCase());
        }, first: createPositionalPseudo(function () {
          return [0];
        }), last: createPositionalPseudo(function (matchIndexes, length) {
          return [length - 1];
        }), eq: createPositionalPseudo(function (matchIndexes, length, argument) {
          return [0 > argument ? argument + length : argument];
        }), even: createPositionalPseudo(function (matchIndexes, length) {
          for (var i = 0; length > i; i += 2) {
            matchIndexes.push(i);
          }return matchIndexes;
        }), odd: createPositionalPseudo(function (matchIndexes, length) {
          for (var i = 1; length > i; i += 2) {
            matchIndexes.push(i);
          }return matchIndexes;
        }), lt: createPositionalPseudo(function (matchIndexes, length, argument) {
          for (var i = 0 > argument ? argument + length : argument; --i >= 0;) {
            matchIndexes.push(i);
          }return matchIndexes;
        }), gt: createPositionalPseudo(function (matchIndexes, length, argument) {
          for (var i = 0 > argument ? argument + length : argument; ++i < length;) {
            matchIndexes.push(i);
          }return matchIndexes;
        }) } }, Expr.pseudos.nth = Expr.pseudos.eq;for (i in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) {
      Expr.pseudos[i] = createInputPseudo(i);
    }for (i in { submit: !0, reset: !0 }) {
      Expr.pseudos[i] = createButtonPseudo(i);
    }return setFilters.prototype = Expr.filters = Expr.pseudos, Expr.setFilters = new setFilters(), tokenize = Sizzle.tokenize = function (selector, parseOnly) {
      var matched,
          match,
          tokens,
          type,
          soFar,
          groups,
          preFilters,
          cached = tokenCache[selector + " "];if (cached) return parseOnly ? 0 : cached.slice(0);for (soFar = selector, groups = [], preFilters = Expr.preFilter; soFar;) {
        (!matched || (match = rcomma.exec(soFar))) && (match && (soFar = soFar.slice(match[0].length) || soFar), groups.push(tokens = [])), matched = !1, (match = rcombinators.exec(soFar)) && (matched = match.shift(), tokens.push({ value: matched, type: match[0].replace(rtrim, " ") }), soFar = soFar.slice(matched.length));for (type in Expr.filter) {
          !(match = matchExpr[type].exec(soFar)) || preFilters[type] && !(match = preFilters[type](match)) || (matched = match.shift(), tokens.push({ value: matched, type: type, matches: match }), soFar = soFar.slice(matched.length));
        }if (!matched) break;
      }return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) : tokenCache(selector, groups).slice(0);
    }, compile = Sizzle.compile = function (selector, match) {
      var i,
          setMatchers = [],
          elementMatchers = [],
          cached = compilerCache[selector + " "];if (!cached) {
        for (match || (match = tokenize(selector)), i = match.length; i--;) {
          cached = matcherFromTokens(match[i]), cached[expando] ? setMatchers.push(cached) : elementMatchers.push(cached);
        }cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers)), cached.selector = selector;
      }return cached;
    }, select = Sizzle.select = function (selector, context, results, seed) {
      var i,
          tokens,
          token,
          type,
          find,
          compiled = "function" == typeof selector && selector,
          match = !seed && tokenize(selector = compiled.selector || selector);if (results = results || [], 1 === match.length) {
        if (tokens = match[0] = match[0].slice(0), tokens.length > 2 && "ID" === (token = tokens[0]).type && support.getById && 9 === context.nodeType && documentIsHTML && Expr.relative[tokens[1].type]) {
          if (context = (Expr.find.ID(token.matches[0].replace(runescape, funescape), context) || [])[0], !context) return results;compiled && (context = context.parentNode), selector = selector.slice(tokens.shift().value.length);
        }for (i = matchExpr.needsContext.test(selector) ? 0 : tokens.length; i-- && (token = tokens[i], !Expr.relative[type = token.type]);) {
          if ((find = Expr.find[type]) && (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context))) {
            if (tokens.splice(i, 1), selector = seed.length && toSelector(tokens), !selector) return push.apply(results, seed), results;break;
          }
        }
      }return (compiled || compile(selector, match))(seed, context, !documentIsHTML, results, rsibling.test(selector) && testContext(context.parentNode) || context), results;
    }, support.sortStable = expando.split("").sort(sortOrder).join("") === expando, support.detectDuplicates = !!hasDuplicate, setDocument(), support.sortDetached = assert(function (div1) {
      return 1 & div1.compareDocumentPosition(document.createElement("div"));
    }), assert(function (div) {
      return div.innerHTML = "<a href='#'></a>", "#" === div.firstChild.getAttribute("href");
    }) || addHandle("type|href|height|width", function (elem, name, isXML) {
      return isXML ? void 0 : elem.getAttribute(name, "type" === name.toLowerCase() ? 1 : 2);
    }), support.attributes && assert(function (div) {
      return div.innerHTML = "<input/>", div.firstChild.setAttribute("value", ""), "" === div.firstChild.getAttribute("value");
    }) || addHandle("value", function (elem, name, isXML) {
      return isXML || "input" !== elem.nodeName.toLowerCase() ? void 0 : elem.defaultValue;
    }), assert(function (div) {
      return null == div.getAttribute("disabled");
    }) || addHandle(booleans, function (elem, name, isXML) {
      var val;return isXML ? void 0 : elem[name] === !0 ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
    }), Sizzle;
  }(window);jQuery.find = Sizzle, jQuery.expr = Sizzle.selectors, jQuery.expr[":"] = jQuery.expr.pseudos, jQuery.unique = Sizzle.uniqueSort, jQuery.text = Sizzle.getText, jQuery.isXMLDoc = Sizzle.isXML, jQuery.contains = Sizzle.contains;var rneedsContext = jQuery.expr.match.needsContext,
      rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
      risSimple = /^.[^:#\[\.,]*$/;jQuery.filter = function (expr, elems, not) {
    var elem = elems[0];return not && (expr = ":not(" + expr + ")"), 1 === elems.length && 1 === elem.nodeType ? jQuery.find.matchesSelector(elem, expr) ? [elem] : [] : jQuery.find.matches(expr, jQuery.grep(elems, function (elem) {
      return 1 === elem.nodeType;
    }));
  }, jQuery.fn.extend({ find: function find(selector) {
      var i,
          len = this.length,
          ret = [],
          self = this;if ("string" != typeof selector) return this.pushStack(jQuery(selector).filter(function () {
        for (i = 0; len > i; i++) {
          if (jQuery.contains(self[i], this)) return !0;
        }
      }));for (i = 0; len > i; i++) {
        jQuery.find(selector, self[i], ret);
      }return ret = this.pushStack(len > 1 ? jQuery.unique(ret) : ret), ret.selector = this.selector ? this.selector + " " + selector : selector, ret;
    }, filter: function filter(selector) {
      return this.pushStack(winnow(this, selector || [], !1));
    }, not: function not(selector) {
      return this.pushStack(winnow(this, selector || [], !0));
    }, is: function is(selector) {
      return !!winnow(this, "string" == typeof selector && rneedsContext.test(selector) ? jQuery(selector) : selector || [], !1).length;
    } });var rootjQuery,
      rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
      init = jQuery.fn.init = function (selector, context) {
    var match, elem;if (!selector) return this;if ("string" == typeof selector) {
      if (match = "<" === selector[0] && ">" === selector[selector.length - 1] && selector.length >= 3 ? [null, selector, null] : rquickExpr.exec(selector), !match || !match[1] && context) return !context || context.jquery ? (context || rootjQuery).find(selector) : this.constructor(context).find(selector);if (match[1]) {
        if (context = context instanceof jQuery ? context[0] : context, jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, !0)), rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) for (match in context) {
          jQuery.isFunction(this[match]) ? this[match](context[match]) : this.attr(match, context[match]);
        }return this;
      }return elem = document.getElementById(match[2]), elem && elem.parentNode && (this.length = 1, this[0] = elem), this.context = document, this.selector = selector, this;
    }return selector.nodeType ? (this.context = this[0] = selector, this.length = 1, this) : jQuery.isFunction(selector) ? "undefined" != typeof rootjQuery.ready ? rootjQuery.ready(selector) : selector(jQuery) : (void 0 !== selector.selector && (this.selector = selector.selector, this.context = selector.context), jQuery.makeArray(selector, this));
  };init.prototype = jQuery.fn, rootjQuery = jQuery(document);var rparentsprev = /^(?:parents|prev(?:Until|All))/,
      guaranteedUnique = { children: !0, contents: !0, next: !0, prev: !0 };jQuery.extend({ dir: function dir(elem, _dir, until) {
      for (var matched = [], truncate = void 0 !== until; (elem = elem[_dir]) && 9 !== elem.nodeType;) {
        if (1 === elem.nodeType) {
          if (truncate && jQuery(elem).is(until)) break;matched.push(elem);
        }
      }return matched;
    }, sibling: function sibling(n, elem) {
      for (var matched = []; n; n = n.nextSibling) {
        1 === n.nodeType && n !== elem && matched.push(n);
      }return matched;
    } }), jQuery.fn.extend({ has: function has(target) {
      var targets = jQuery(target, this),
          l = targets.length;return this.filter(function () {
        for (var i = 0; l > i; i++) {
          if (jQuery.contains(this, targets[i])) return !0;
        }
      });
    }, closest: function closest(selectors, context) {
      for (var cur, i = 0, l = this.length, matched = [], pos = rneedsContext.test(selectors) || "string" != typeof selectors ? jQuery(selectors, context || this.context) : 0; l > i; i++) {
        for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
          if (cur.nodeType < 11 && (pos ? pos.index(cur) > -1 : 1 === cur.nodeType && jQuery.find.matchesSelector(cur, selectors))) {
            matched.push(cur);break;
          }
        }
      }return this.pushStack(matched.length > 1 ? jQuery.unique(matched) : matched);
    }, index: function index(elem) {
      return elem ? "string" == typeof elem ? indexOf.call(jQuery(elem), this[0]) : indexOf.call(this, elem.jquery ? elem[0] : elem) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    }, add: function add(selector, context) {
      return this.pushStack(jQuery.unique(jQuery.merge(this.get(), jQuery(selector, context))));
    }, addBack: function addBack(selector) {
      return this.add(null == selector ? this.prevObject : this.prevObject.filter(selector));
    } }), jQuery.each({ parent: function parent(elem) {
      var parent = elem.parentNode;return parent && 11 !== parent.nodeType ? parent : null;
    }, parents: function parents(elem) {
      return jQuery.dir(elem, "parentNode");
    }, parentsUntil: function parentsUntil(elem, i, until) {
      return jQuery.dir(elem, "parentNode", until);
    }, next: function next(elem) {
      return sibling(elem, "nextSibling");
    }, prev: function prev(elem) {
      return sibling(elem, "previousSibling");
    }, nextAll: function nextAll(elem) {
      return jQuery.dir(elem, "nextSibling");
    }, prevAll: function prevAll(elem) {
      return jQuery.dir(elem, "previousSibling");
    }, nextUntil: function nextUntil(elem, i, until) {
      return jQuery.dir(elem, "nextSibling", until);
    }, prevUntil: function prevUntil(elem, i, until) {
      return jQuery.dir(elem, "previousSibling", until);
    }, siblings: function siblings(elem) {
      return jQuery.sibling((elem.parentNode || {}).firstChild, elem);
    }, children: function children(elem) {
      return jQuery.sibling(elem.firstChild);
    }, contents: function contents(elem) {
      return elem.contentDocument || jQuery.merge([], elem.childNodes);
    } }, function (name, fn) {
    jQuery.fn[name] = function (until, selector) {
      var matched = jQuery.map(this, fn, until);return "Until" !== name.slice(-5) && (selector = until), selector && "string" == typeof selector && (matched = jQuery.filter(selector, matched)), this.length > 1 && (guaranteedUnique[name] || jQuery.unique(matched), rparentsprev.test(name) && matched.reverse()), this.pushStack(matched);
    };
  });var rnotwhite = /\S+/g,
      optionsCache = {};jQuery.Callbacks = function (options) {
    options = "string" == typeof options ? optionsCache[options] || createOptions(options) : jQuery.extend({}, options);var memory,
        _fired,
        firing,
        firingStart,
        firingLength,
        firingIndex,
        list = [],
        stack = !options.once && [],
        fire = function fire(data) {
      for (memory = options.memory && data, _fired = !0, firingIndex = firingStart || 0, firingStart = 0, firingLength = list.length, firing = !0; list && firingLength > firingIndex; firingIndex++) {
        if (list[firingIndex].apply(data[0], data[1]) === !1 && options.stopOnFalse) {
          memory = !1;break;
        }
      }firing = !1, list && (stack ? stack.length && fire(stack.shift()) : memory ? list = [] : self.disable());
    },
        self = { add: function add() {
        if (list) {
          var start = list.length;!function add(args) {
            jQuery.each(args, function (_, arg) {
              var type = jQuery.type(arg);"function" === type ? options.unique && self.has(arg) || list.push(arg) : arg && arg.length && "string" !== type && add(arg);
            });
          }(arguments), firing ? firingLength = list.length : memory && (firingStart = start, fire(memory));
        }return this;
      }, remove: function remove() {
        return list && jQuery.each(arguments, function (_, arg) {
          for (var index; (index = jQuery.inArray(arg, list, index)) > -1;) {
            list.splice(index, 1), firing && (firingLength >= index && firingLength--, firingIndex >= index && firingIndex--);
          }
        }), this;
      }, has: function has(fn) {
        return fn ? jQuery.inArray(fn, list) > -1 : !(!list || !list.length);
      }, empty: function empty() {
        return list = [], firingLength = 0, this;
      }, disable: function disable() {
        return list = stack = memory = void 0, this;
      }, disabled: function disabled() {
        return !list;
      }, lock: function lock() {
        return stack = void 0, memory || self.disable(), this;
      }, locked: function locked() {
        return !stack;
      }, fireWith: function fireWith(context, args) {
        return !list || _fired && !stack || (args = args || [], args = [context, args.slice ? args.slice() : args], firing ? stack.push(args) : fire(args)), this;
      }, fire: function fire() {
        return self.fireWith(this, arguments), this;
      }, fired: function fired() {
        return !!_fired;
      } };return self;
  }, jQuery.extend({ Deferred: function Deferred(func) {
      var tuples = [["resolve", "done", jQuery.Callbacks("once memory"), "resolved"], ["reject", "fail", jQuery.Callbacks("once memory"), "rejected"], ["notify", "progress", jQuery.Callbacks("memory")]],
          _state = "pending",
          _promise = { state: function state() {
          return _state;
        }, always: function always() {
          return deferred.done(arguments).fail(arguments), this;
        }, then: function then() {
          var fns = arguments;return jQuery.Deferred(function (newDefer) {
            jQuery.each(tuples, function (i, tuple) {
              var fn = jQuery.isFunction(fns[i]) && fns[i];deferred[tuple[1]](function () {
                var returned = fn && fn.apply(this, arguments);returned && jQuery.isFunction(returned.promise) ? returned.promise().done(newDefer.resolve).fail(newDefer.reject).progress(newDefer.notify) : newDefer[tuple[0] + "With"](this === _promise ? newDefer.promise() : this, fn ? [returned] : arguments);
              });
            }), fns = null;
          }).promise();
        }, promise: function promise(obj) {
          return null != obj ? jQuery.extend(obj, _promise) : _promise;
        } },
          deferred = {};return _promise.pipe = _promise.then, jQuery.each(tuples, function (i, tuple) {
        var list = tuple[2],
            stateString = tuple[3];_promise[tuple[1]] = list.add, stateString && list.add(function () {
          _state = stateString;
        }, tuples[1 ^ i][2].disable, tuples[2][2].lock), deferred[tuple[0]] = function () {
          return deferred[tuple[0] + "With"](this === deferred ? _promise : this, arguments), this;
        }, deferred[tuple[0] + "With"] = list.fireWith;
      }), _promise.promise(deferred), func && func.call(deferred, deferred), deferred;
    }, when: function when(subordinate) {
      var progressValues,
          progressContexts,
          resolveContexts,
          i = 0,
          resolveValues = _slice.call(arguments),
          length = resolveValues.length,
          remaining = 1 !== length || subordinate && jQuery.isFunction(subordinate.promise) ? length : 0,
          deferred = 1 === remaining ? subordinate : jQuery.Deferred(),
          updateFunc = function updateFunc(i, contexts, values) {
        return function (value) {
          contexts[i] = this, values[i] = arguments.length > 1 ? _slice.call(arguments) : value, values === progressValues ? deferred.notifyWith(contexts, values) : --remaining || deferred.resolveWith(contexts, values);
        };
      };if (length > 1) for (progressValues = new Array(length), progressContexts = new Array(length), resolveContexts = new Array(length); length > i; i++) {
        resolveValues[i] && jQuery.isFunction(resolveValues[i].promise) ? resolveValues[i].promise().done(updateFunc(i, resolveContexts, resolveValues)).fail(deferred.reject).progress(updateFunc(i, progressContexts, progressValues)) : --remaining;
      }return remaining || deferred.resolveWith(resolveContexts, resolveValues), deferred.promise();
    } });var readyList;jQuery.fn.ready = function (fn) {
    return jQuery.ready.promise().done(fn), this;
  }, jQuery.extend({ isReady: !1, readyWait: 1, holdReady: function holdReady(hold) {
      hold ? jQuery.readyWait++ : jQuery.ready(!0);
    }, ready: function ready(wait) {
      (wait === !0 ? --jQuery.readyWait : jQuery.isReady) || (jQuery.isReady = !0, wait !== !0 && --jQuery.readyWait > 0 || (readyList.resolveWith(document, [jQuery]), jQuery.fn.triggerHandler && (jQuery(document).triggerHandler("ready"), jQuery(document).off("ready"))));
    } }), jQuery.ready.promise = function (obj) {
    return readyList || (readyList = jQuery.Deferred(), "complete" === document.readyState ? setTimeout(jQuery.ready) : (document.addEventListener("DOMContentLoaded", completed, !1), window.addEventListener("load", completed, !1))), readyList.promise(obj);
  }, jQuery.ready.promise();var access = jQuery.access = function (elems, fn, key, value, chainable, emptyGet, raw) {
    var i = 0,
        len = elems.length,
        bulk = null == key;if ("object" === jQuery.type(key)) {
      chainable = !0;for (i in key) {
        jQuery.access(elems, fn, i, key[i], !0, emptyGet, raw);
      }
    } else if (void 0 !== value && (chainable = !0, jQuery.isFunction(value) || (raw = !0), bulk && (raw ? (fn.call(elems, value), fn = null) : (bulk = fn, fn = function fn(elem, key, value) {
      return bulk.call(jQuery(elem), value);
    })), fn)) for (; len > i; i++) {
      fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
    }return chainable ? elems : bulk ? fn.call(elems) : len ? fn(elems[0], key) : emptyGet;
  };jQuery.acceptData = function (owner) {
    return 1 === owner.nodeType || 9 === owner.nodeType || !+owner.nodeType;
  }, Data.uid = 1, Data.accepts = jQuery.acceptData, Data.prototype = { key: function key(owner) {
      if (!Data.accepts(owner)) return 0;var descriptor = {},
          unlock = owner[this.expando];if (!unlock) {
        unlock = Data.uid++;try {
          descriptor[this.expando] = { value: unlock }, Object.defineProperties(owner, descriptor);
        } catch (e) {
          descriptor[this.expando] = unlock, jQuery.extend(owner, descriptor);
        }
      }return this.cache[unlock] || (this.cache[unlock] = {}), unlock;
    }, set: function set(owner, data, value) {
      var prop,
          unlock = this.key(owner),
          cache = this.cache[unlock];if ("string" == typeof data) cache[data] = value;else if (jQuery.isEmptyObject(cache)) jQuery.extend(this.cache[unlock], data);else for (prop in data) {
        cache[prop] = data[prop];
      }return cache;
    }, get: function get(owner, key) {
      var cache = this.cache[this.key(owner)];return void 0 === key ? cache : cache[key];
    }, access: function access(owner, key, value) {
      var stored;return void 0 === key || key && "string" == typeof key && void 0 === value ? (stored = this.get(owner, key), void 0 !== stored ? stored : this.get(owner, jQuery.camelCase(key))) : (this.set(owner, key, value), void 0 !== value ? value : key);
    }, remove: function remove(owner, key) {
      var i,
          name,
          camel,
          unlock = this.key(owner),
          cache = this.cache[unlock];if (void 0 === key) this.cache[unlock] = {};else {
        jQuery.isArray(key) ? name = key.concat(key.map(jQuery.camelCase)) : (camel = jQuery.camelCase(key), key in cache ? name = [key, camel] : (name = camel, name = name in cache ? [name] : name.match(rnotwhite) || [])), i = name.length;for (; i--;) {
          delete cache[name[i]];
        }
      }
    }, hasData: function hasData(owner) {
      return !jQuery.isEmptyObject(this.cache[owner[this.expando]] || {});
    }, discard: function discard(owner) {
      owner[this.expando] && delete this.cache[owner[this.expando]];
    } };var data_priv = new Data(),
      data_user = new Data(),
      rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      rmultiDash = /([A-Z])/g;jQuery.extend({ hasData: function hasData(elem) {
      return data_user.hasData(elem) || data_priv.hasData(elem);
    }, data: function data(elem, name, _data) {
      return data_user.access(elem, name, _data);
    }, removeData: function removeData(elem, name) {
      data_user.remove(elem, name);
    }, _data: function _data(elem, name, data) {
      return data_priv.access(elem, name, data);
    }, _removeData: function _removeData(elem, name) {
      data_priv.remove(elem, name);
    } }), jQuery.fn.extend({ data: function data(key, value) {
      var i,
          name,
          data,
          elem = this[0],
          attrs = elem && elem.attributes;if (void 0 === key) {
        if (this.length && (data = data_user.get(elem), 1 === elem.nodeType && !data_priv.get(elem, "hasDataAttrs"))) {
          for (i = attrs.length; i--;) {
            attrs[i] && (name = attrs[i].name, 0 === name.indexOf("data-") && (name = jQuery.camelCase(name.slice(5)), dataAttr(elem, name, data[name])));
          }data_priv.set(elem, "hasDataAttrs", !0);
        }return data;
      }return "object" == (typeof key === "undefined" ? "undefined" : _typeof(key)) ? this.each(function () {
        data_user.set(this, key);
      }) : access(this, function (value) {
        var data,
            camelKey = jQuery.camelCase(key);if (elem && void 0 === value) {
          if (data = data_user.get(elem, key), void 0 !== data) return data;
          if (data = data_user.get(elem, camelKey), void 0 !== data) return data;if (data = dataAttr(elem, camelKey, void 0), void 0 !== data) return data;
        } else this.each(function () {
          var data = data_user.get(this, camelKey);data_user.set(this, camelKey, value), -1 !== key.indexOf("-") && void 0 !== data && data_user.set(this, key, value);
        });
      }, null, value, arguments.length > 1, null, !0);
    }, removeData: function removeData(key) {
      return this.each(function () {
        data_user.remove(this, key);
      });
    } }), jQuery.extend({ queue: function queue(elem, type, data) {
      var queue;return elem ? (type = (type || "fx") + "queue", queue = data_priv.get(elem, type), data && (!queue || jQuery.isArray(data) ? queue = data_priv.access(elem, type, jQuery.makeArray(data)) : queue.push(data)), queue || []) : void 0;
    }, dequeue: function dequeue(elem, type) {
      type = type || "fx";var queue = jQuery.queue(elem, type),
          startLength = queue.length,
          fn = queue.shift(),
          hooks = jQuery._queueHooks(elem, type),
          next = function next() {
        jQuery.dequeue(elem, type);
      };"inprogress" === fn && (fn = queue.shift(), startLength--), fn && ("fx" === type && queue.unshift("inprogress"), delete hooks.stop, fn.call(elem, next, hooks)), !startLength && hooks && hooks.empty.fire();
    }, _queueHooks: function _queueHooks(elem, type) {
      var key = type + "queueHooks";return data_priv.get(elem, key) || data_priv.access(elem, key, { empty: jQuery.Callbacks("once memory").add(function () {
          data_priv.remove(elem, [type + "queue", key]);
        }) });
    } }), jQuery.fn.extend({ queue: function queue(type, data) {
      var setter = 2;return "string" != typeof type && (data = type, type = "fx", setter--), arguments.length < setter ? jQuery.queue(this[0], type) : void 0 === data ? this : this.each(function () {
        var queue = jQuery.queue(this, type, data);jQuery._queueHooks(this, type), "fx" === type && "inprogress" !== queue[0] && jQuery.dequeue(this, type);
      });
    }, dequeue: function dequeue(type) {
      return this.each(function () {
        jQuery.dequeue(this, type);
      });
    }, clearQueue: function clearQueue(type) {
      return this.queue(type || "fx", []);
    }, promise: function promise(type, obj) {
      var tmp,
          count = 1,
          defer = jQuery.Deferred(),
          elements = this,
          i = this.length,
          resolve = function resolve() {
        --count || defer.resolveWith(elements, [elements]);
      };for ("string" != typeof type && (obj = type, type = void 0), type = type || "fx"; i--;) {
        tmp = data_priv.get(elements[i], type + "queueHooks"), tmp && tmp.empty && (count++, tmp.empty.add(resolve));
      }return resolve(), defer.promise(obj);
    } });var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      cssExpand = ["Top", "Right", "Bottom", "Left"],
      isHidden = function isHidden(elem, el) {
    return elem = el || elem, "none" === jQuery.css(elem, "display") || !jQuery.contains(elem.ownerDocument, elem);
  },
      rcheckableType = /^(?:checkbox|radio)$/i;!function () {
    var fragment = document.createDocumentFragment(),
        div = fragment.appendChild(document.createElement("div")),
        input = document.createElement("input");input.setAttribute("type", "radio"), input.setAttribute("checked", "checked"), input.setAttribute("name", "t"), div.appendChild(input), support.checkClone = div.cloneNode(!0).cloneNode(!0).lastChild.checked, div.innerHTML = "<textarea>x</textarea>", support.noCloneChecked = !!div.cloneNode(!0).lastChild.defaultValue;
  }();var strundefined = "undefined";support.focusinBubbles = "onfocusin" in window;var rkeyEvent = /^key/,
      rmouseEvent = /^(?:mouse|pointer|contextmenu)|click/,
      rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
      rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;jQuery.event = { global: {}, add: function add(elem, types, handler, data, selector) {
      var handleObjIn,
          eventHandle,
          tmp,
          events,
          t,
          handleObj,
          special,
          handlers,
          type,
          namespaces,
          origType,
          elemData = data_priv.get(elem);if (elemData) for (handler.handler && (handleObjIn = handler, handler = handleObjIn.handler, selector = handleObjIn.selector), handler.guid || (handler.guid = jQuery.guid++), (events = elemData.events) || (events = elemData.events = {}), (eventHandle = elemData.handle) || (eventHandle = elemData.handle = function (e) {
        return (typeof jQuery === "undefined" ? "undefined" : _typeof(jQuery)) !== strundefined && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : void 0;
      }), types = (types || "").match(rnotwhite) || [""], t = types.length; t--;) {
        tmp = rtypenamespace.exec(types[t]) || [], type = origType = tmp[1], namespaces = (tmp[2] || "").split(".").sort(), type && (special = jQuery.event.special[type] || {}, type = (selector ? special.delegateType : special.bindType) || type, special = jQuery.event.special[type] || {}, handleObj = jQuery.extend({ type: type, origType: origType, data: data, handler: handler, guid: handler.guid, selector: selector, needsContext: selector && jQuery.expr.match.needsContext.test(selector), namespace: namespaces.join(".") }, handleObjIn), (handlers = events[type]) || (handlers = events[type] = [], handlers.delegateCount = 0, special.setup && special.setup.call(elem, data, namespaces, eventHandle) !== !1 || elem.addEventListener && elem.addEventListener(type, eventHandle, !1)), special.add && (special.add.call(elem, handleObj), handleObj.handler.guid || (handleObj.handler.guid = handler.guid)), selector ? handlers.splice(handlers.delegateCount++, 0, handleObj) : handlers.push(handleObj), jQuery.event.global[type] = !0);
      }
    }, remove: function remove(elem, types, handler, selector, mappedTypes) {
      var j,
          origCount,
          tmp,
          events,
          t,
          handleObj,
          special,
          handlers,
          type,
          namespaces,
          origType,
          elemData = data_priv.hasData(elem) && data_priv.get(elem);if (elemData && (events = elemData.events)) {
        for (types = (types || "").match(rnotwhite) || [""], t = types.length; t--;) {
          if (tmp = rtypenamespace.exec(types[t]) || [], type = origType = tmp[1], namespaces = (tmp[2] || "").split(".").sort(), type) {
            for (special = jQuery.event.special[type] || {}, type = (selector ? special.delegateType : special.bindType) || type, handlers = events[type] || [], tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)"), origCount = j = handlers.length; j--;) {
              handleObj = handlers[j], !mappedTypes && origType !== handleObj.origType || handler && handler.guid !== handleObj.guid || tmp && !tmp.test(handleObj.namespace) || selector && selector !== handleObj.selector && ("**" !== selector || !handleObj.selector) || (handlers.splice(j, 1), handleObj.selector && handlers.delegateCount--, special.remove && special.remove.call(elem, handleObj));
            }origCount && !handlers.length && (special.teardown && special.teardown.call(elem, namespaces, elemData.handle) !== !1 || jQuery.removeEvent(elem, type, elemData.handle), delete events[type]);
          } else for (type in events) {
            jQuery.event.remove(elem, type + types[t], handler, selector, !0);
          }
        }jQuery.isEmptyObject(events) && (delete elemData.handle, data_priv.remove(elem, "events"));
      }
    }, trigger: function trigger(event, data, elem, onlyHandlers) {
      var i,
          cur,
          tmp,
          bubbleType,
          ontype,
          handle,
          special,
          eventPath = [elem || document],
          type = hasOwn.call(event, "type") ? event.type : event,
          namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];if (cur = tmp = elem = elem || document, 3 !== elem.nodeType && 8 !== elem.nodeType && !rfocusMorph.test(type + jQuery.event.triggered) && (type.indexOf(".") >= 0 && (namespaces = type.split("."), type = namespaces.shift(), namespaces.sort()), ontype = type.indexOf(":") < 0 && "on" + type, event = event[jQuery.expando] ? event : new jQuery.Event(type, "object" == (typeof event === "undefined" ? "undefined" : _typeof(event)) && event), event.isTrigger = onlyHandlers ? 2 : 3, event.namespace = namespaces.join("."), event.namespace_re = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, event.result = void 0, event.target || (event.target = elem), data = null == data ? [event] : jQuery.makeArray(data, [event]), special = jQuery.event.special[type] || {}, onlyHandlers || !special.trigger || special.trigger.apply(elem, data) !== !1)) {
        if (!onlyHandlers && !special.noBubble && !jQuery.isWindow(elem)) {
          for (bubbleType = special.delegateType || type, rfocusMorph.test(bubbleType + type) || (cur = cur.parentNode); cur; cur = cur.parentNode) {
            eventPath.push(cur), tmp = cur;
          }tmp === (elem.ownerDocument || document) && eventPath.push(tmp.defaultView || tmp.parentWindow || window);
        }for (i = 0; (cur = eventPath[i++]) && !event.isPropagationStopped();) {
          event.type = i > 1 ? bubbleType : special.bindType || type, handle = (data_priv.get(cur, "events") || {})[event.type] && data_priv.get(cur, "handle"), handle && handle.apply(cur, data), handle = ontype && cur[ontype], handle && handle.apply && jQuery.acceptData(cur) && (event.result = handle.apply(cur, data), event.result === !1 && event.preventDefault());
        }return event.type = type, onlyHandlers || event.isDefaultPrevented() || special._default && special._default.apply(eventPath.pop(), data) !== !1 || !jQuery.acceptData(elem) || ontype && jQuery.isFunction(elem[type]) && !jQuery.isWindow(elem) && (tmp = elem[ontype], tmp && (elem[ontype] = null), jQuery.event.triggered = type, elem[type](), jQuery.event.triggered = void 0, tmp && (elem[ontype] = tmp)), event.result;
      }
    }, dispatch: function dispatch(event) {
      event = jQuery.event.fix(event);var i,
          j,
          ret,
          matched,
          handleObj,
          handlerQueue = [],
          args = _slice.call(arguments),
          handlers = (data_priv.get(this, "events") || {})[event.type] || [],
          special = jQuery.event.special[event.type] || {};if (args[0] = event, event.delegateTarget = this, !special.preDispatch || special.preDispatch.call(this, event) !== !1) {
        for (handlerQueue = jQuery.event.handlers.call(this, event, handlers), i = 0; (matched = handlerQueue[i++]) && !event.isPropagationStopped();) {
          for (event.currentTarget = matched.elem, j = 0; (handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped();) {
            (!event.namespace_re || event.namespace_re.test(handleObj.namespace)) && (event.handleObj = handleObj, event.data = handleObj.data, ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args), void 0 !== ret && (event.result = ret) === !1 && (event.preventDefault(), event.stopPropagation()));
          }
        }return special.postDispatch && special.postDispatch.call(this, event), event.result;
      }
    }, handlers: function handlers(event, _handlers) {
      var i,
          matches,
          sel,
          handleObj,
          handlerQueue = [],
          delegateCount = _handlers.delegateCount,
          cur = event.target;if (delegateCount && cur.nodeType && (!event.button || "click" !== event.type)) for (; cur !== this; cur = cur.parentNode || this) {
        if (cur.disabled !== !0 || "click" !== event.type) {
          for (matches = [], i = 0; delegateCount > i; i++) {
            handleObj = _handlers[i], sel = handleObj.selector + " ", void 0 === matches[sel] && (matches[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) >= 0 : jQuery.find(sel, this, null, [cur]).length), matches[sel] && matches.push(handleObj);
          }matches.length && handlerQueue.push({ elem: cur, handlers: matches });
        }
      }return delegateCount < _handlers.length && handlerQueue.push({ elem: this, handlers: _handlers.slice(delegateCount) }), handlerQueue;
    }, props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function filter(event, original) {
        return null == event.which && (event.which = null != original.charCode ? original.charCode : original.keyCode), event;
      } }, mouseHooks: { props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function filter(event, original) {
        var eventDoc,
            doc,
            body,
            button = original.button;return null == event.pageX && null != original.clientX && (eventDoc = event.target.ownerDocument || document, doc = eventDoc.documentElement, body = eventDoc.body, event.pageX = original.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0), event.pageY = original.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0)), event.which || void 0 === button || (event.which = 1 & button ? 1 : 2 & button ? 3 : 4 & button ? 2 : 0), event;
      } }, fix: function fix(event) {
      if (event[jQuery.expando]) return event;var i,
          prop,
          copy,
          type = event.type,
          originalEvent = event,
          fixHook = this.fixHooks[type];for (fixHook || (this.fixHooks[type] = fixHook = rmouseEvent.test(type) ? this.mouseHooks : rkeyEvent.test(type) ? this.keyHooks : {}), copy = fixHook.props ? this.props.concat(fixHook.props) : this.props, event = new jQuery.Event(originalEvent), i = copy.length; i--;) {
        prop = copy[i], event[prop] = originalEvent[prop];
      }return event.target || (event.target = document), 3 === event.target.nodeType && (event.target = event.target.parentNode), fixHook.filter ? fixHook.filter(event, originalEvent) : event;
    }, special: { load: { noBubble: !0 }, focus: { trigger: function trigger() {
          return this !== safeActiveElement() && this.focus ? (this.focus(), !1) : void 0;
        }, delegateType: "focusin" }, blur: { trigger: function trigger() {
          return this === safeActiveElement() && this.blur ? (this.blur(), !1) : void 0;
        }, delegateType: "focusout" }, click: { trigger: function trigger() {
          return "checkbox" === this.type && this.click && jQuery.nodeName(this, "input") ? (this.click(), !1) : void 0;
        }, _default: function _default(event) {
          return jQuery.nodeName(event.target, "a");
        } }, beforeunload: { postDispatch: function postDispatch(event) {
          void 0 !== event.result && event.originalEvent && (event.originalEvent.returnValue = event.result);
        } } }, simulate: function simulate(type, elem, event, bubble) {
      var e = jQuery.extend(new jQuery.Event(), event, { type: type, isSimulated: !0, originalEvent: {} });bubble ? jQuery.event.trigger(e, null, elem) : jQuery.event.dispatch.call(elem, e), e.isDefaultPrevented() && event.preventDefault();
    } }, jQuery.removeEvent = function (elem, type, handle) {
    elem.removeEventListener && elem.removeEventListener(type, handle, !1);
  }, jQuery.Event = function (src, props) {
    return this instanceof jQuery.Event ? (src && src.type ? (this.originalEvent = src, this.type = src.type, this.isDefaultPrevented = src.defaultPrevented || void 0 === src.defaultPrevented && src.returnValue === !1 ? returnTrue : returnFalse) : this.type = src, props && jQuery.extend(this, props), this.timeStamp = src && src.timeStamp || jQuery.now(), void (this[jQuery.expando] = !0)) : new jQuery.Event(src, props);
  }, jQuery.Event.prototype = { isDefaultPrevented: returnFalse, isPropagationStopped: returnFalse, isImmediatePropagationStopped: returnFalse, preventDefault: function preventDefault() {
      var e = this.originalEvent;this.isDefaultPrevented = returnTrue, e && e.preventDefault && e.preventDefault();
    }, stopPropagation: function stopPropagation() {
      var e = this.originalEvent;this.isPropagationStopped = returnTrue, e && e.stopPropagation && e.stopPropagation();
    }, stopImmediatePropagation: function stopImmediatePropagation() {
      var e = this.originalEvent;this.isImmediatePropagationStopped = returnTrue, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation();
    } }, jQuery.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (orig, fix) {
    jQuery.event.special[orig] = { delegateType: fix, bindType: fix, handle: function handle(event) {
        var ret,
            target = this,
            related = event.relatedTarget,
            handleObj = event.handleObj;return (!related || related !== target && !jQuery.contains(target, related)) && (event.type = handleObj.origType, ret = handleObj.handler.apply(this, arguments), event.type = fix), ret;
      } };
  }), support.focusinBubbles || jQuery.each({ focus: "focusin", blur: "focusout" }, function (orig, fix) {
    var handler = function handler(event) {
      jQuery.event.simulate(fix, event.target, jQuery.event.fix(event), !0);
    };jQuery.event.special[fix] = { setup: function setup() {
        var doc = this.ownerDocument || this,
            attaches = data_priv.access(doc, fix);attaches || doc.addEventListener(orig, handler, !0), data_priv.access(doc, fix, (attaches || 0) + 1);
      }, teardown: function teardown() {
        var doc = this.ownerDocument || this,
            attaches = data_priv.access(doc, fix) - 1;attaches ? data_priv.access(doc, fix, attaches) : (doc.removeEventListener(orig, handler, !0), data_priv.remove(doc, fix));
      } };
  }), jQuery.fn.extend({ on: function on(types, selector, data, fn, one) {
      var origFn, type;if ("object" == (typeof types === "undefined" ? "undefined" : _typeof(types))) {
        "string" != typeof selector && (data = data || selector, selector = void 0);for (type in types) {
          this.on(type, selector, data, types[type], one);
        }return this;
      }if (null == data && null == fn ? (fn = selector, data = selector = void 0) : null == fn && ("string" == typeof selector ? (fn = data, data = void 0) : (fn = data, data = selector, selector = void 0)), fn === !1) fn = returnFalse;else if (!fn) return this;return 1 === one && (origFn = fn, fn = function fn(event) {
        return jQuery().off(event), origFn.apply(this, arguments);
      }, fn.guid = origFn.guid || (origFn.guid = jQuery.guid++)), this.each(function () {
        jQuery.event.add(this, types, fn, data, selector);
      });
    }, one: function one(types, selector, data, fn) {
      return this.on(types, selector, data, fn, 1);
    }, off: function off(types, selector, fn) {
      var handleObj, type;if (types && types.preventDefault && types.handleObj) return handleObj = types.handleObj, jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler), this;if ("object" == (typeof types === "undefined" ? "undefined" : _typeof(types))) {
        for (type in types) {
          this.off(type, selector, types[type]);
        }return this;
      }return (selector === !1 || "function" == typeof selector) && (fn = selector, selector = void 0), fn === !1 && (fn = returnFalse), this.each(function () {
        jQuery.event.remove(this, types, fn, selector);
      });
    }, trigger: function trigger(type, data) {
      return this.each(function () {
        jQuery.event.trigger(type, data, this);
      });
    }, triggerHandler: function triggerHandler(type, data) {
      var elem = this[0];return elem ? jQuery.event.trigger(type, data, elem, !0) : void 0;
    } });var rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
      rtagName = /<([\w:]+)/,
      rhtml = /<|&#?\w+;/,
      rnoInnerhtml = /<(?:script|style|link)/i,
      rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
      rscriptType = /^$|\/(?:java|ecma)script/i,
      rscriptTypeMasked = /^true\/(.*)/,
      rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
      wrapMap = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };wrapMap.optgroup = wrapMap.option, wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead, wrapMap.th = wrapMap.td, jQuery.extend({ clone: function clone(elem, dataAndEvents, deepDataAndEvents) {
      var i,
          l,
          srcElements,
          destElements,
          clone = elem.cloneNode(!0),
          inPage = jQuery.contains(elem.ownerDocument, elem);if (!(support.noCloneChecked || 1 !== elem.nodeType && 11 !== elem.nodeType || jQuery.isXMLDoc(elem))) for (destElements = getAll(clone), srcElements = getAll(elem), i = 0, l = srcElements.length; l > i; i++) {
        fixInput(srcElements[i], destElements[i]);
      }if (dataAndEvents) if (deepDataAndEvents) for (srcElements = srcElements || getAll(elem), destElements = destElements || getAll(clone), i = 0, l = srcElements.length; l > i; i++) {
        cloneCopyEvent(srcElements[i], destElements[i]);
      } else cloneCopyEvent(elem, clone);return destElements = getAll(clone, "script"), destElements.length > 0 && setGlobalEval(destElements, !inPage && getAll(elem, "script")), clone;
    }, buildFragment: function buildFragment(elems, context, scripts, selection) {
      for (var elem, tmp, tag, wrap, contains, j, fragment = context.createDocumentFragment(), nodes = [], i = 0, l = elems.length; l > i; i++) {
        if (elem = elems[i], elem || 0 === elem) if ("object" === jQuery.type(elem)) jQuery.merge(nodes, elem.nodeType ? [elem] : elem);else if (rhtml.test(elem)) {
          for (tmp = tmp || fragment.appendChild(context.createElement("div")), tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase(), wrap = wrapMap[tag] || wrapMap._default, tmp.innerHTML = wrap[1] + elem.replace(rxhtmlTag, "<$1></$2>") + wrap[2], j = wrap[0]; j--;) {
            tmp = tmp.lastChild;
          }jQuery.merge(nodes, tmp.childNodes), tmp = fragment.firstChild, tmp.textContent = "";
        } else nodes.push(context.createTextNode(elem));
      }for (fragment.textContent = "", i = 0; elem = nodes[i++];) {
        if ((!selection || -1 === jQuery.inArray(elem, selection)) && (contains = jQuery.contains(elem.ownerDocument, elem), tmp = getAll(fragment.appendChild(elem), "script"), contains && setGlobalEval(tmp), scripts)) for (j = 0; elem = tmp[j++];) {
          rscriptType.test(elem.type || "") && scripts.push(elem);
        }
      }return fragment;
    }, cleanData: function cleanData(elems) {
      for (var data, elem, type, key, special = jQuery.event.special, i = 0; void 0 !== (elem = elems[i]); i++) {
        if (jQuery.acceptData(elem) && (key = elem[data_priv.expando], key && (data = data_priv.cache[key]))) {
          if (data.events) for (type in data.events) {
            special[type] ? jQuery.event.remove(elem, type) : jQuery.removeEvent(elem, type, data.handle);
          }data_priv.cache[key] && delete data_priv.cache[key];
        }delete data_user.cache[elem[data_user.expando]];
      }
    } }), jQuery.fn.extend({ text: function text(value) {
      return access(this, function (value) {
        return void 0 === value ? jQuery.text(this) : this.empty().each(function () {
          (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = value);
        });
      }, null, value, arguments.length);
    }, append: function append() {
      return this.domManip(arguments, function (elem) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var target = manipulationTarget(this, elem);target.appendChild(elem);
        }
      });
    }, prepend: function prepend() {
      return this.domManip(arguments, function (elem) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var target = manipulationTarget(this, elem);target.insertBefore(elem, target.firstChild);
        }
      });
    }, before: function before() {
      return this.domManip(arguments, function (elem) {
        this.parentNode && this.parentNode.insertBefore(elem, this);
      });
    }, after: function after() {
      return this.domManip(arguments, function (elem) {
        this.parentNode && this.parentNode.insertBefore(elem, this.nextSibling);
      });
    }, remove: function remove(selector, keepData) {
      for (var elem, elems = selector ? jQuery.filter(selector, this) : this, i = 0; null != (elem = elems[i]); i++) {
        keepData || 1 !== elem.nodeType || jQuery.cleanData(getAll(elem)), elem.parentNode && (keepData && jQuery.contains(elem.ownerDocument, elem) && setGlobalEval(getAll(elem, "script")), elem.parentNode.removeChild(elem));
      }return this;
    }, empty: function empty() {
      for (var elem, i = 0; null != (elem = this[i]); i++) {
        1 === elem.nodeType && (jQuery.cleanData(getAll(elem, !1)), elem.textContent = "");
      }return this;
    }, clone: function clone(dataAndEvents, deepDataAndEvents) {
      return dataAndEvents = null == dataAndEvents ? !1 : dataAndEvents, deepDataAndEvents = null == deepDataAndEvents ? dataAndEvents : deepDataAndEvents, this.map(function () {
        return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
      });
    }, html: function html(value) {
      return access(this, function (value) {
        var elem = this[0] || {},
            i = 0,
            l = this.length;if (void 0 === value && 1 === elem.nodeType) return elem.innerHTML;if ("string" == typeof value && !rnoInnerhtml.test(value) && !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {
          value = value.replace(rxhtmlTag, "<$1></$2>");try {
            for (; l > i; i++) {
              elem = this[i] || {}, 1 === elem.nodeType && (jQuery.cleanData(getAll(elem, !1)), elem.innerHTML = value);
            }elem = 0;
          } catch (e) {}
        }elem && this.empty().append(value);
      }, null, value, arguments.length);
    }, replaceWith: function replaceWith() {
      var arg = arguments[0];return this.domManip(arguments, function (elem) {
        arg = this.parentNode, jQuery.cleanData(getAll(this)), arg && arg.replaceChild(elem, this);
      }), arg && (arg.length || arg.nodeType) ? this : this.remove();
    }, detach: function detach(selector) {
      return this.remove(selector, !0);
    }, domManip: function domManip(args, callback) {
      args = concat.apply([], args);var fragment,
          first,
          scripts,
          hasScripts,
          node,
          doc,
          i = 0,
          l = this.length,
          set = this,
          iNoClone = l - 1,
          value = args[0],
          isFunction = jQuery.isFunction(value);if (isFunction || l > 1 && "string" == typeof value && !support.checkClone && rchecked.test(value)) return this.each(function (index) {
        var self = set.eq(index);isFunction && (args[0] = value.call(this, index, self.html())), self.domManip(args, callback);
      });if (l && (fragment = jQuery.buildFragment(args, this[0].ownerDocument, !1, this), first = fragment.firstChild, 1 === fragment.childNodes.length && (fragment = first), first)) {
        for (scripts = jQuery.map(getAll(fragment, "script"), disableScript), hasScripts = scripts.length; l > i; i++) {
          node = fragment, i !== iNoClone && (node = jQuery.clone(node, !0, !0), hasScripts && jQuery.merge(scripts, getAll(node, "script"))), callback.call(this[i], node, i);
        }if (hasScripts) for (doc = scripts[scripts.length - 1].ownerDocument, jQuery.map(scripts, restoreScript), i = 0; hasScripts > i; i++) {
          node = scripts[i], rscriptType.test(node.type || "") && !data_priv.access(node, "globalEval") && jQuery.contains(doc, node) && (node.src ? jQuery._evalUrl && jQuery._evalUrl(node.src) : jQuery.globalEval(node.textContent.replace(rcleanScript, "")));
        }
      }return this;
    } }), jQuery.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (name, original) {
    jQuery.fn[name] = function (selector) {
      for (var elems, ret = [], insert = jQuery(selector), last = insert.length - 1, i = 0; last >= i; i++) {
        elems = i === last ? this : this.clone(!0), jQuery(insert[i])[original](elems), push.apply(ret, elems.get());
      }return this.pushStack(ret);
    };
  });var iframe,
      elemdisplay = {},
      rmargin = /^margin/,
      rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i"),
      getStyles = function getStyles(elem) {
    return elem.ownerDocument.defaultView.opener ? elem.ownerDocument.defaultView.getComputedStyle(elem, null) : window.getComputedStyle(elem, null);
  };!function () {
    function computePixelPositionAndBoxSizingReliable() {
      div.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", div.innerHTML = "", docElem.appendChild(container);var divStyle = window.getComputedStyle(div, null);pixelPositionVal = "1%" !== divStyle.top, boxSizingReliableVal = "4px" === divStyle.width, docElem.removeChild(container);
    }var pixelPositionVal,
        boxSizingReliableVal,
        docElem = document.documentElement,
        container = document.createElement("div"),
        div = document.createElement("div");div.style && (div.style.backgroundClip = "content-box", div.cloneNode(!0).style.backgroundClip = "", support.clearCloneStyle = "content-box" === div.style.backgroundClip, container.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", container.appendChild(div), window.getComputedStyle && jQuery.extend(support, { pixelPosition: function pixelPosition() {
        return computePixelPositionAndBoxSizingReliable(), pixelPositionVal;
      }, boxSizingReliable: function boxSizingReliable() {
        return null == boxSizingReliableVal && computePixelPositionAndBoxSizingReliable(), boxSizingReliableVal;
      }, reliableMarginRight: function reliableMarginRight() {
        var ret,
            marginDiv = div.appendChild(document.createElement("div"));return marginDiv.style.cssText = div.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", marginDiv.style.marginRight = marginDiv.style.width = "0", div.style.width = "1px", docElem.appendChild(container), ret = !parseFloat(window.getComputedStyle(marginDiv, null).marginRight), docElem.removeChild(container), div.removeChild(marginDiv), ret;
      } }));
  }(), jQuery.swap = function (elem, options, callback, args) {
    var ret,
        name,
        old = {};for (name in options) {
      old[name] = elem.style[name], elem.style[name] = options[name];
    }ret = callback.apply(elem, args || []);for (name in options) {
      elem.style[name] = old[name];
    }return ret;
  };var rdisplayswap = /^(none|table(?!-c[ea]).+)/,
      rnumsplit = new RegExp("^(" + pnum + ")(.*)$", "i"),
      rrelNum = new RegExp("^([+-])=(" + pnum + ")", "i"),
      cssShow = { position: "absolute", visibility: "hidden", display: "block" },
      cssNormalTransform = { letterSpacing: "0", fontWeight: "400" },
      cssPrefixes = ["Webkit", "O", "Moz", "ms"];jQuery.extend({ cssHooks: { opacity: { get: function get(elem, computed) {
          if (computed) {
            var ret = curCSS(elem, "opacity");return "" === ret ? "1" : ret;
          }
        } } }, cssNumber: { columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": "cssFloat" }, style: function style(elem, name, value, extra) {
      if (elem && 3 !== elem.nodeType && 8 !== elem.nodeType && elem.style) {
        var ret,
            type,
            hooks,
            origName = jQuery.camelCase(name),
            style = elem.style;return name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(style, origName)), hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName], void 0 === value ? hooks && "get" in hooks && void 0 !== (ret = hooks.get(elem, !1, extra)) ? ret : style[name] : (type = typeof value === "undefined" ? "undefined" : _typeof(value), "string" === type && (ret = rrelNum.exec(value)) && (value = (ret[1] + 1) * ret[2] + parseFloat(jQuery.css(elem, name)), type = "number"), null != value && value === value && ("number" !== type || jQuery.cssNumber[origName] || (value += "px"), support.clearCloneStyle || "" !== value || 0 !== name.indexOf("background") || (style[name] = "inherit"), hooks && "set" in hooks && void 0 === (value = hooks.set(elem, value, extra)) || (style[name] = value)), void 0);
      }
    }, css: function css(elem, name, extra, styles) {
      var val,
          num,
          hooks,
          origName = jQuery.camelCase(name);return name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(elem.style, origName)), hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName], hooks && "get" in hooks && (val = hooks.get(elem, !0, extra)), void 0 === val && (val = curCSS(elem, name, styles)), "normal" === val && name in cssNormalTransform && (val = cssNormalTransform[name]), "" === extra || extra ? (num = parseFloat(val), extra === !0 || jQuery.isNumeric(num) ? num || 0 : val) : val;
    } }), jQuery.each(["height", "width"], function (i, name) {
    jQuery.cssHooks[name] = { get: function get(elem, computed, extra) {
        return computed ? rdisplayswap.test(jQuery.css(elem, "display")) && 0 === elem.offsetWidth ? jQuery.swap(elem, cssShow, function () {
          return getWidthOrHeight(elem, name, extra);
        }) : getWidthOrHeight(elem, name, extra) : void 0;
      }, set: function set(elem, value, extra) {
        var styles = extra && getStyles(elem);return setPositiveNumber(elem, value, extra ? augmentWidthOrHeight(elem, name, extra, "border-box" === jQuery.css(elem, "boxSizing", !1, styles), styles) : 0);
      } };
  }), jQuery.cssHooks.marginRight = addGetHookIf(support.reliableMarginRight, function (elem, computed) {
    return computed ? jQuery.swap(elem, { display: "inline-block" }, curCSS, [elem, "marginRight"]) : void 0;
  }), jQuery.each({ margin: "", padding: "", border: "Width" }, function (prefix, suffix) {
    jQuery.cssHooks[prefix + suffix] = { expand: function expand(value) {
        for (var i = 0, expanded = {}, parts = "string" == typeof value ? value.split(" ") : [value]; 4 > i; i++) {
          expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
        }return expanded;
      } }, rmargin.test(prefix) || (jQuery.cssHooks[prefix + suffix].set = setPositiveNumber);
  }), jQuery.fn.extend({ css: function css(name, value) {
      return access(this, function (elem, name, value) {
        var styles,
            len,
            map = {},
            i = 0;if (jQuery.isArray(name)) {
          for (styles = getStyles(elem), len = name.length; len > i; i++) {
            map[name[i]] = jQuery.css(elem, name[i], !1, styles);
          }return map;
        }return void 0 !== value ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
      }, name, value, arguments.length > 1);
    }, show: function show() {
      return showHide(this, !0);
    }, hide: function hide() {
      return showHide(this);
    }, toggle: function toggle(state) {
      return "boolean" == typeof state ? state ? this.show() : this.hide() : this.each(function () {
        isHidden(this) ? jQuery(this).show() : jQuery(this).hide();
      });
    } }), jQuery.Tween = Tween, Tween.prototype = { constructor: Tween, init: function init(elem, options, prop, end, easing, unit) {
      this.elem = elem, this.prop = prop, this.easing = easing || "swing", this.options = options, this.start = this.now = this.cur(), this.end = end, this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
    }, cur: function cur() {
      var hooks = Tween.propHooks[this.prop];return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
    }, run: function run(percent) {
      var eased,
          hooks = Tween.propHooks[this.prop];return this.pos = eased = this.options.duration ? jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration) : percent, this.now = (this.end - this.start) * eased + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), hooks && hooks.set ? hooks.set(this) : Tween.propHooks._default.set(this), this;
    } }, Tween.prototype.init.prototype = Tween.prototype, Tween.propHooks = { _default: { get: function get(tween) {
        var result;return null == tween.elem[tween.prop] || tween.elem.style && null != tween.elem.style[tween.prop] ? (result = jQuery.css(tween.elem, tween.prop, ""), result && "auto" !== result ? result : 0) : tween.elem[tween.prop];
      }, set: function set(tween) {
        jQuery.fx.step[tween.prop] ? jQuery.fx.step[tween.prop](tween) : tween.elem.style && (null != tween.elem.style[jQuery.cssProps[tween.prop]] || jQuery.cssHooks[tween.prop]) ? jQuery.style(tween.elem, tween.prop, tween.now + tween.unit) : tween.elem[tween.prop] = tween.now;
      } } }, Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = { set: function set(tween) {
      tween.elem.nodeType && tween.elem.parentNode && (tween.elem[tween.prop] = tween.now);
    } }, jQuery.easing = { linear: function linear(p) {
      return p;
    }, swing: function swing(p) {
      return .5 - Math.cos(p * Math.PI) / 2;
    } }, jQuery.fx = Tween.prototype.init, jQuery.fx.step = {};var fxNow,
      timerId,
      rfxtypes = /^(?:toggle|show|hide)$/,
      rfxnum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i"),
      rrun = /queueHooks$/,
      animationPrefilters = [defaultPrefilter],
      tweeners = { "*": [function (prop, value) {
      var tween = this.createTween(prop, value),
          target = tween.cur(),
          parts = rfxnum.exec(value),
          unit = parts && parts[3] || (jQuery.cssNumber[prop] ? "" : "px"),
          start = (jQuery.cssNumber[prop] || "px" !== unit && +target) && rfxnum.exec(jQuery.css(tween.elem, prop)),
          scale = 1,
          maxIterations = 20;if (start && start[3] !== unit) {
        unit = unit || start[3], parts = parts || [], start = +target || 1;do {
          scale = scale || ".5", start /= scale, jQuery.style(tween.elem, prop, start + unit);
        } while (scale !== (scale = tween.cur() / target) && 1 !== scale && --maxIterations);
      }return parts && (start = tween.start = +start || +target || 0, tween.unit = unit, tween.end = parts[1] ? start + (parts[1] + 1) * parts[2] : +parts[2]), tween;
    }] };jQuery.Animation = jQuery.extend(Animation, { tweener: function tweener(props, callback) {
      jQuery.isFunction(props) ? (callback = props, props = ["*"]) : props = props.split(" ");for (var prop, index = 0, length = props.length; length > index; index++) {
        prop = props[index], tweeners[prop] = tweeners[prop] || [], tweeners[prop].unshift(callback);
      }
    }, prefilter: function prefilter(callback, prepend) {
      prepend ? animationPrefilters.unshift(callback) : animationPrefilters.push(callback);
    } }), jQuery.speed = function (speed, easing, fn) {
    var opt = speed && "object" == (typeof speed === "undefined" ? "undefined" : _typeof(speed)) ? jQuery.extend({}, speed) : { complete: fn || !fn && easing || jQuery.isFunction(speed) && speed, duration: speed, easing: fn && easing || easing && !jQuery.isFunction(easing) && easing };return opt.duration = jQuery.fx.off ? 0 : "number" == typeof opt.duration ? opt.duration : opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[opt.duration] : jQuery.fx.speeds._default, (null == opt.queue || opt.queue === !0) && (opt.queue = "fx"), opt.old = opt.complete, opt.complete = function () {
      jQuery.isFunction(opt.old) && opt.old.call(this), opt.queue && jQuery.dequeue(this, opt.queue);
    }, opt;
  }, jQuery.fn.extend({ fadeTo: function fadeTo(speed, to, easing, callback) {
      return this.filter(isHidden).css("opacity", 0).show().end().animate({ opacity: to }, speed, easing, callback);
    }, animate: function animate(prop, speed, easing, callback) {
      var empty = jQuery.isEmptyObject(prop),
          optall = jQuery.speed(speed, easing, callback),
          doAnimation = function doAnimation() {
        var anim = Animation(this, jQuery.extend({}, prop), optall);(empty || data_priv.get(this, "finish")) && anim.stop(!0);
      };return doAnimation.finish = doAnimation, empty || optall.queue === !1 ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
    }, stop: function stop(type, clearQueue, gotoEnd) {
      var stopQueue = function stopQueue(hooks) {
        var stop = hooks.stop;delete hooks.stop, stop(gotoEnd);
      };return "string" != typeof type && (gotoEnd = clearQueue, clearQueue = type, type = void 0), clearQueue && type !== !1 && this.queue(type || "fx", []), this.each(function () {
        var dequeue = !0,
            index = null != type && type + "queueHooks",
            timers = jQuery.timers,
            data = data_priv.get(this);if (index) data[index] && data[index].stop && stopQueue(data[index]);else for (index in data) {
          data[index] && data[index].stop && rrun.test(index) && stopQueue(data[index]);
        }for (index = timers.length; index--;) {
          timers[index].elem !== this || null != type && timers[index].queue !== type || (timers[index].anim.stop(gotoEnd), dequeue = !1, timers.splice(index, 1));
        }(dequeue || !gotoEnd) && jQuery.dequeue(this, type);
      });
    }, finish: function finish(type) {
      return type !== !1 && (type = type || "fx"), this.each(function () {
        var index,
            data = data_priv.get(this),
            queue = data[type + "queue"],
            hooks = data[type + "queueHooks"],
            timers = jQuery.timers,
            length = queue ? queue.length : 0;for (data.finish = !0, jQuery.queue(this, type, []), hooks && hooks.stop && hooks.stop.call(this, !0), index = timers.length; index--;) {
          timers[index].elem === this && timers[index].queue === type && (timers[index].anim.stop(!0), timers.splice(index, 1));
        }for (index = 0; length > index; index++) {
          queue[index] && queue[index].finish && queue[index].finish.call(this);
        }delete data.finish;
      });
    } }), jQuery.each(["toggle", "show", "hide"], function (i, name) {
    var cssFn = jQuery.fn[name];jQuery.fn[name] = function (speed, easing, callback) {
      return null == speed || "boolean" == typeof speed ? cssFn.apply(this, arguments) : this.animate(genFx(name, !0), speed, easing, callback);
    };
  }), jQuery.each({ slideDown: genFx("show"), slideUp: genFx("hide"), slideToggle: genFx("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (name, props) {
    jQuery.fn[name] = function (speed, easing, callback) {
      return this.animate(props, speed, easing, callback);
    };
  }), jQuery.timers = [], jQuery.fx.tick = function () {
    var timer,
        i = 0,
        timers = jQuery.timers;for (fxNow = jQuery.now(); i < timers.length; i++) {
      timer = timers[i], timer() || timers[i] !== timer || timers.splice(i--, 1);
    }timers.length || jQuery.fx.stop(), fxNow = void 0;
  }, jQuery.fx.timer = function (timer) {
    jQuery.timers.push(timer), timer() ? jQuery.fx.start() : jQuery.timers.pop();
  }, jQuery.fx.interval = 13, jQuery.fx.start = function () {
    timerId || (timerId = setInterval(jQuery.fx.tick, jQuery.fx.interval));
  }, jQuery.fx.stop = function () {
    clearInterval(timerId), timerId = null;
  }, jQuery.fx.speeds = { slow: 600, fast: 200, _default: 400 }, jQuery.fn.delay = function (time, type) {
    return time = jQuery.fx ? jQuery.fx.speeds[time] || time : time, type = type || "fx", this.queue(type, function (next, hooks) {
      var timeout = setTimeout(next, time);hooks.stop = function () {
        clearTimeout(timeout);
      };
    });
  }, function () {
    var input = document.createElement("input"),
        select = document.createElement("select"),
        opt = select.appendChild(document.createElement("option"));input.type = "checkbox", support.checkOn = "" !== input.value, support.optSelected = opt.selected, select.disabled = !0, support.optDisabled = !opt.disabled, input = document.createElement("input"), input.value = "t", input.type = "radio", support.radioValue = "t" === input.value;
  }();var nodeHook,
      boolHook,
      attrHandle = jQuery.expr.attrHandle;jQuery.fn.extend({ attr: function attr(name, value) {
      return access(this, jQuery.attr, name, value, arguments.length > 1);
    }, removeAttr: function removeAttr(name) {
      return this.each(function () {
        jQuery.removeAttr(this, name);
      });
    } }), jQuery.extend({ attr: function attr(elem, name, value) {
      var hooks,
          ret,
          nType = elem.nodeType;if (elem && 3 !== nType && 8 !== nType && 2 !== nType) return _typeof(elem.getAttribute) === strundefined ? jQuery.prop(elem, name, value) : (1 === nType && jQuery.isXMLDoc(elem) || (name = name.toLowerCase(), hooks = jQuery.attrHooks[name] || (jQuery.expr.match.bool.test(name) ? boolHook : nodeHook)), void 0 === value ? hooks && "get" in hooks && null !== (ret = hooks.get(elem, name)) ? ret : (ret = jQuery.find.attr(elem, name), null == ret ? void 0 : ret) : null !== value ? hooks && "set" in hooks && void 0 !== (ret = hooks.set(elem, value, name)) ? ret : (elem.setAttribute(name, value + ""), value) : void jQuery.removeAttr(elem, name));
    }, removeAttr: function removeAttr(elem, value) {
      var name,
          propName,
          i = 0,
          attrNames = value && value.match(rnotwhite);if (attrNames && 1 === elem.nodeType) for (; name = attrNames[i++];) {
        propName = jQuery.propFix[name] || name, jQuery.expr.match.bool.test(name) && (elem[propName] = !1), elem.removeAttribute(name);
      }
    }, attrHooks: { type: { set: function set(elem, value) {
          if (!support.radioValue && "radio" === value && jQuery.nodeName(elem, "input")) {
            var val = elem.value;return elem.setAttribute("type", value), val && (elem.value = val), value;
          }
        } } } }), boolHook = { set: function set(elem, value, name) {
      return value === !1 ? jQuery.removeAttr(elem, name) : elem.setAttribute(name, name), name;
    } }, jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function (i, name) {
    var getter = attrHandle[name] || jQuery.find.attr;attrHandle[name] = function (elem, name, isXML) {
      var ret, handle;return isXML || (handle = attrHandle[name], attrHandle[name] = ret, ret = null != getter(elem, name, isXML) ? name.toLowerCase() : null, attrHandle[name] = handle), ret;
    };
  });var rfocusable = /^(?:input|select|textarea|button)$/i;jQuery.fn.extend({ prop: function prop(name, value) {
      return access(this, jQuery.prop, name, value, arguments.length > 1);
    }, removeProp: function removeProp(name) {
      return this.each(function () {
        delete this[jQuery.propFix[name] || name];
      });
    } }), jQuery.extend({ propFix: { "for": "htmlFor", "class": "className" }, prop: function prop(elem, name, value) {
      var ret,
          hooks,
          notxml,
          nType = elem.nodeType;if (elem && 3 !== nType && 8 !== nType && 2 !== nType) return notxml = 1 !== nType || !jQuery.isXMLDoc(elem), notxml && (name = jQuery.propFix[name] || name, hooks = jQuery.propHooks[name]), void 0 !== value ? hooks && "set" in hooks && void 0 !== (ret = hooks.set(elem, value, name)) ? ret : elem[name] = value : hooks && "get" in hooks && null !== (ret = hooks.get(elem, name)) ? ret : elem[name];
    }, propHooks: { tabIndex: { get: function get(elem) {
          return elem.hasAttribute("tabindex") || rfocusable.test(elem.nodeName) || elem.href ? elem.tabIndex : -1;
        } } } }), support.optSelected || (jQuery.propHooks.selected = { get: function get(elem) {
      var parent = elem.parentNode;return parent && parent.parentNode && parent.parentNode.selectedIndex, null;
    } }), jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    jQuery.propFix[this.toLowerCase()] = this;
  });var rclass = /[\t\r\n\f]/g;jQuery.fn.extend({ addClass: function addClass(value) {
      var classes,
          elem,
          cur,
          clazz,
          j,
          finalValue,
          proceed = "string" == typeof value && value,
          i = 0,
          len = this.length;if (jQuery.isFunction(value)) return this.each(function (j) {
        jQuery(this).addClass(value.call(this, j, this.className));
      });if (proceed) for (classes = (value || "").match(rnotwhite) || []; len > i; i++) {
        if (elem = this[i], cur = 1 === elem.nodeType && (elem.className ? (" " + elem.className + " ").replace(rclass, " ") : " ")) {
          for (j = 0; clazz = classes[j++];) {
            cur.indexOf(" " + clazz + " ") < 0 && (cur += clazz + " ");
          }finalValue = jQuery.trim(cur), elem.className !== finalValue && (elem.className = finalValue);
        }
      }return this;
    }, removeClass: function removeClass(value) {
      var classes,
          elem,
          cur,
          clazz,
          j,
          finalValue,
          proceed = 0 === arguments.length || "string" == typeof value && value,
          i = 0,
          len = this.length;if (jQuery.isFunction(value)) return this.each(function (j) {
        jQuery(this).removeClass(value.call(this, j, this.className));
      });if (proceed) for (classes = (value || "").match(rnotwhite) || []; len > i; i++) {
        if (elem = this[i], cur = 1 === elem.nodeType && (elem.className ? (" " + elem.className + " ").replace(rclass, " ") : "")) {
          for (j = 0; clazz = classes[j++];) {
            for (; cur.indexOf(" " + clazz + " ") >= 0;) {
              cur = cur.replace(" " + clazz + " ", " ");
            }
          }finalValue = value ? jQuery.trim(cur) : "", elem.className !== finalValue && (elem.className = finalValue);
        }
      }return this;
    }, toggleClass: function toggleClass(value, stateVal) {
      var type = typeof value === "undefined" ? "undefined" : _typeof(value);return "boolean" == typeof stateVal && "string" === type ? stateVal ? this.addClass(value) : this.removeClass(value) : this.each(jQuery.isFunction(value) ? function (i) {
        jQuery(this).toggleClass(value.call(this, i, this.className, stateVal), stateVal);
      } : function () {
        if ("string" === type) for (var className, i = 0, self = jQuery(this), classNames = value.match(rnotwhite) || []; className = classNames[i++];) {
          self.hasClass(className) ? self.removeClass(className) : self.addClass(className);
        } else (type === strundefined || "boolean" === type) && (this.className && data_priv.set(this, "__className__", this.className), this.className = this.className || value === !1 ? "" : data_priv.get(this, "__className__") || "");
      });
    }, hasClass: function hasClass(selector) {
      for (var className = " " + selector + " ", i = 0, l = this.length; l > i; i++) {
        if (1 === this[i].nodeType && (" " + this[i].className + " ").replace(rclass, " ").indexOf(className) >= 0) return !0;
      }return !1;
    } });var rreturn = /\r/g;jQuery.fn.extend({ val: function val(value) {
      var hooks,
          ret,
          isFunction,
          elem = this[0];{
        if (arguments.length) return isFunction = jQuery.isFunction(value), this.each(function (i) {
          var val;1 === this.nodeType && (val = isFunction ? value.call(this, i, jQuery(this).val()) : value, null == val ? val = "" : "number" == typeof val ? val += "" : jQuery.isArray(val) && (val = jQuery.map(val, function (value) {
            return null == value ? "" : value + "";
          })), hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()], hooks && "set" in hooks && void 0 !== hooks.set(this, val, "value") || (this.value = val));
        });if (elem) return hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()], hooks && "get" in hooks && void 0 !== (ret = hooks.get(elem, "value")) ? ret : (ret = elem.value, "string" == typeof ret ? ret.replace(rreturn, "") : null == ret ? "" : ret);
      }
    } }), jQuery.extend({ valHooks: { option: { get: function get(elem) {
          var val = jQuery.find.attr(elem, "value");return null != val ? val : jQuery.trim(jQuery.text(elem));
        } }, select: { get: function get(elem) {
          for (var value, option, options = elem.options, index = elem.selectedIndex, one = "select-one" === elem.type || 0 > index, values = one ? null : [], max = one ? index + 1 : options.length, i = 0 > index ? max : one ? index : 0; max > i; i++) {
            if (option = options[i], !(!option.selected && i !== index || (support.optDisabled ? option.disabled : null !== option.getAttribute("disabled")) || option.parentNode.disabled && jQuery.nodeName(option.parentNode, "optgroup"))) {
              if (value = jQuery(option).val(), one) return value;values.push(value);
            }
          }return values;
        }, set: function set(elem, value) {
          for (var optionSet, option, options = elem.options, values = jQuery.makeArray(value), i = options.length; i--;) {
            option = options[i], (option.selected = jQuery.inArray(option.value, values) >= 0) && (optionSet = !0);
          }return optionSet || (elem.selectedIndex = -1), values;
        } } } }), jQuery.each(["radio", "checkbox"], function () {
    jQuery.valHooks[this] = { set: function set(elem, value) {
        return jQuery.isArray(value) ? elem.checked = jQuery.inArray(jQuery(elem).val(), value) >= 0 : void 0;
      } }, support.checkOn || (jQuery.valHooks[this].get = function (elem) {
      return null === elem.getAttribute("value") ? "on" : elem.value;
    });
  }), jQuery.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (i, name) {
    jQuery.fn[name] = function (data, fn) {
      return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
    };
  }), jQuery.fn.extend({ hover: function hover(fnOver, fnOut) {
      return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
    }, bind: function bind(types, data, fn) {
      return this.on(types, null, data, fn);
    }, unbind: function unbind(types, fn) {
      return this.off(types, null, fn);
    }, delegate: function delegate(selector, types, data, fn) {
      return this.on(types, selector, data, fn);
    }, undelegate: function undelegate(selector, types, fn) {
      return 1 === arguments.length ? this.off(selector, "**") : this.off(types, selector || "**", fn);
    } });var nonce = jQuery.now(),
      rquery = /\?/;jQuery.parseJSON = function (data) {
    return JSON.parse(data + "");
  }, jQuery.parseXML = function (data) {
    var xml, tmp;if (!data || "string" != typeof data) return null;try {
      tmp = new DOMParser(), xml = tmp.parseFromString(data, "text/xml");
    } catch (e) {
      xml = void 0;
    }return (!xml || xml.getElementsByTagName("parsererror").length) && jQuery.error("Invalid XML: " + data), xml;
  };var rhash = /#.*$/,
      rts = /([?&])_=[^&]*/,
      rheaders = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      rnoContent = /^(?:GET|HEAD)$/,
      rprotocol = /^\/\//,
      rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
      prefilters = {},
      transports = {},
      allTypes = "*/".concat("*"),
      ajaxLocation = window.location.href,
      ajaxLocParts = rurl.exec(ajaxLocation.toLowerCase()) || [];jQuery.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: ajaxLocation, type: "GET", isLocal: rlocalProtocol.test(ajaxLocParts[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": allTypes, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": jQuery.parseJSON, "text xml": jQuery.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function ajaxSetup(target, settings) {
      return settings ? ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : ajaxExtend(jQuery.ajaxSettings, target);
    }, ajaxPrefilter: addToPrefiltersOrTransports(prefilters), ajaxTransport: addToPrefiltersOrTransports(transports), ajax: function ajax(url, options) {
      function done(status, nativeStatusText, responses, headers) {
        var isSuccess,
            success,
            error,
            response,
            modified,
            statusText = nativeStatusText;2 !== state && (state = 2, timeoutTimer && clearTimeout(timeoutTimer), transport = void 0, responseHeadersString = headers || "", jqXHR.readyState = status > 0 ? 4 : 0, isSuccess = status >= 200 && 300 > status || 304 === status, responses && (response = ajaxHandleResponses(s, jqXHR, responses)), response = ajaxConvert(s, response, jqXHR, isSuccess), isSuccess ? (s.ifModified && (modified = jqXHR.getResponseHeader("Last-Modified"), modified && (jQuery.lastModified[cacheURL] = modified), modified = jqXHR.getResponseHeader("etag"), modified && (jQuery.etag[cacheURL] = modified)), 204 === status || "HEAD" === s.type ? statusText = "nocontent" : 304 === status ? statusText = "notmodified" : (statusText = response.state, success = response.data, error = response.error, isSuccess = !error)) : (error = statusText, (status || !statusText) && (statusText = "error", 0 > status && (status = 0))), jqXHR.status = status, jqXHR.statusText = (nativeStatusText || statusText) + "", isSuccess ? deferred.resolveWith(callbackContext, [success, statusText, jqXHR]) : deferred.rejectWith(callbackContext, [jqXHR, statusText, error]), jqXHR.statusCode(_statusCode), _statusCode = void 0, fireGlobals && globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error]), completeDeferred.fireWith(callbackContext, [jqXHR, statusText]), fireGlobals && (globalEventContext.trigger("ajaxComplete", [jqXHR, s]), --jQuery.active || jQuery.event.trigger("ajaxStop")));
      }"object" == (typeof url === "undefined" ? "undefined" : _typeof(url)) && (options = url, url = void 0), options = options || {};var transport,
          cacheURL,
          responseHeadersString,
          responseHeaders,
          timeoutTimer,
          parts,
          fireGlobals,
          i,
          s = jQuery.ajaxSetup({}, options),
          callbackContext = s.context || s,
          globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event,
          deferred = jQuery.Deferred(),
          completeDeferred = jQuery.Callbacks("once memory"),
          _statusCode = s.statusCode || {},
          requestHeaders = {},
          requestHeadersNames = {},
          state = 0,
          strAbort = "canceled",
          jqXHR = { readyState: 0, getResponseHeader: function getResponseHeader(key) {
          var match;if (2 === state) {
            if (!responseHeaders) for (responseHeaders = {}; match = rheaders.exec(responseHeadersString);) {
              responseHeaders[match[1].toLowerCase()] = match[2];
            }match = responseHeaders[key.toLowerCase()];
          }return null == match ? null : match;
        }, getAllResponseHeaders: function getAllResponseHeaders() {
          return 2 === state ? responseHeadersString : null;
        }, setRequestHeader: function setRequestHeader(name, value) {
          var lname = name.toLowerCase();return state || (name = requestHeadersNames[lname] = requestHeadersNames[lname] || name, requestHeaders[name] = value), this;
        }, overrideMimeType: function overrideMimeType(type) {
          return state || (s.mimeType = type), this;
        }, statusCode: function statusCode(map) {
          var code;if (map) if (2 > state) for (code in map) {
            _statusCode[code] = [_statusCode[code], map[code]];
          } else jqXHR.always(map[jqXHR.status]);return this;
        }, abort: function abort(statusText) {
          var finalText = statusText || strAbort;return transport && transport.abort(finalText), done(0, finalText), this;
        } };if (deferred.promise(jqXHR).complete = completeDeferred.add, jqXHR.success = jqXHR.done, jqXHR.error = jqXHR.fail, s.url = ((url || s.url || ajaxLocation) + "").replace(rhash, "").replace(rprotocol, ajaxLocParts[1] + "//"), s.type = options.method || options.type || s.method || s.type, s.dataTypes = jQuery.trim(s.dataType || "*").toLowerCase().match(rnotwhite) || [""], null == s.crossDomain && (parts = rurl.exec(s.url.toLowerCase()), s.crossDomain = !(!parts || parts[1] === ajaxLocParts[1] && parts[2] === ajaxLocParts[2] && (parts[3] || ("http:" === parts[1] ? "80" : "443")) === (ajaxLocParts[3] || ("http:" === ajaxLocParts[1] ? "80" : "443")))), s.data && s.processData && "string" != typeof s.data && (s.data = jQuery.param(s.data, s.traditional)), inspectPrefiltersOrTransports(prefilters, s, options, jqXHR), 2 === state) return jqXHR;fireGlobals = jQuery.event && s.global, fireGlobals && 0 === jQuery.active++ && jQuery.event.trigger("ajaxStart"), s.type = s.type.toUpperCase(), s.hasContent = !rnoContent.test(s.type), cacheURL = s.url, s.hasContent || (s.data && (cacheURL = s.url += (rquery.test(cacheURL) ? "&" : "?") + s.data, delete s.data), s.cache === !1 && (s.url = rts.test(cacheURL) ? cacheURL.replace(rts, "$1_=" + nonce++) : cacheURL + (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce++)), s.ifModified && (jQuery.lastModified[cacheURL] && jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]), jQuery.etag[cacheURL] && jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL])), (s.data && s.hasContent && s.contentType !== !1 || options.contentType) && jqXHR.setRequestHeader("Content-Type", s.contentType), jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + ("*" !== s.dataTypes[0] ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);for (i in s.headers) {
        jqXHR.setRequestHeader(i, s.headers[i]);
      }if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === !1 || 2 === state)) return jqXHR.abort();strAbort = "abort";for (i in { success: 1, error: 1, complete: 1 }) {
        jqXHR[i](s[i]);
      }if (transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR)) {
        jqXHR.readyState = 1, fireGlobals && globalEventContext.trigger("ajaxSend", [jqXHR, s]), s.async && s.timeout > 0 && (timeoutTimer = setTimeout(function () {
          jqXHR.abort("timeout");
        }, s.timeout));try {
          state = 1, transport.send(requestHeaders, done);
        } catch (e) {
          if (!(2 > state)) throw e;done(-1, e);
        }
      } else done(-1, "No Transport");return jqXHR;
    }, getJSON: function getJSON(url, data, callback) {
      return jQuery.get(url, data, callback, "json");
    }, getScript: function getScript(url, callback) {
      return jQuery.get(url, void 0, callback, "script");
    } }), jQuery.each(["get", "post"], function (i, method) {
    jQuery[method] = function (url, data, callback, type) {
      return jQuery.isFunction(data) && (type = type || callback, callback = data, data = void 0), jQuery.ajax({ url: url, type: method, dataType: type, data: data, success: callback });
    };
  }), jQuery._evalUrl = function (url) {
    return jQuery.ajax({ url: url, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0 });
  }, jQuery.fn.extend({ wrapAll: function wrapAll(html) {
      var wrap;return jQuery.isFunction(html) ? this.each(function (i) {
        jQuery(this).wrapAll(html.call(this, i));
      }) : (this[0] && (wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && wrap.insertBefore(this[0]), wrap.map(function () {
        for (var elem = this; elem.firstElementChild;) {
          elem = elem.firstElementChild;
        }return elem;
      }).append(this)), this);
    }, wrapInner: function wrapInner(html) {
      return this.each(jQuery.isFunction(html) ? function (i) {
        jQuery(this).wrapInner(html.call(this, i));
      } : function () {
        var self = jQuery(this),
            contents = self.contents();contents.length ? contents.wrapAll(html) : self.append(html);
      });
    }, wrap: function wrap(html) {
      var isFunction = jQuery.isFunction(html);return this.each(function (i) {
        jQuery(this).wrapAll(isFunction ? html.call(this, i) : html);
      });
    }, unwrap: function unwrap() {
      return this.parent().each(function () {
        jQuery.nodeName(this, "body") || jQuery(this).replaceWith(this.childNodes);
      }).end();
    } }), jQuery.expr.filters.hidden = function (elem) {
    return elem.offsetWidth <= 0 && elem.offsetHeight <= 0;
  }, jQuery.expr.filters.visible = function (elem) {
    return !jQuery.expr.filters.hidden(elem);
  };var r20 = /%20/g,
      rbracket = /\[\]$/,
      rCRLF = /\r?\n/g,
      rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
      rsubmittable = /^(?:input|select|textarea|keygen)/i;jQuery.param = function (a, traditional) {
    var prefix,
        s = [],
        add = function add(key, value) {
      value = jQuery.isFunction(value) ? value() : null == value ? "" : value, s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value);
    };if (void 0 === traditional && (traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional), jQuery.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) jQuery.each(a, function () {
      add(this.name, this.value);
    });else for (prefix in a) {
      buildParams(prefix, a[prefix], traditional, add);
    }return s.join("&").replace(r20, "+");
  }, jQuery.fn.extend({ serialize: function serialize() {
      return jQuery.param(this.serializeArray());
    }, serializeArray: function serializeArray() {
      return this.map(function () {
        var elements = jQuery.prop(this, "elements");return elements ? jQuery.makeArray(elements) : this;
      }).filter(function () {
        var type = this.type;return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
      }).map(function (i, elem) {
        var val = jQuery(this).val();return null == val ? null : jQuery.isArray(val) ? jQuery.map(val, function (val) {
          return { name: elem.name, value: val.replace(rCRLF, "\r\n") };
        }) : { name: elem.name, value: val.replace(rCRLF, "\r\n") };
      }).get();
    } }), jQuery.ajaxSettings.xhr = function () {
    try {
      return new XMLHttpRequest();
    } catch (e) {}
  };var xhrId = 0,
      xhrCallbacks = {},
      xhrSuccessStatus = { 0: 200, 1223: 204 },
      xhrSupported = jQuery.ajaxSettings.xhr();window.attachEvent && window.attachEvent("onunload", function () {
    for (var key in xhrCallbacks) {
      xhrCallbacks[key]();
    }
  }), support.cors = !!xhrSupported && "withCredentials" in xhrSupported, support.ajax = xhrSupported = !!xhrSupported, jQuery.ajaxTransport(function (options) {
    var _callback;return support.cors || xhrSupported && !options.crossDomain ? { send: function send(headers, complete) {
        var i,
            xhr = options.xhr(),
            id = ++xhrId;if (xhr.open(options.type, options.url, options.async, options.username, options.password), options.xhrFields) for (i in options.xhrFields) {
          xhr[i] = options.xhrFields[i];
        }options.mimeType && xhr.overrideMimeType && xhr.overrideMimeType(options.mimeType), options.crossDomain || headers["X-Requested-With"] || (headers["X-Requested-With"] = "XMLHttpRequest");for (i in headers) {
          xhr.setRequestHeader(i, headers[i]);
        }_callback = function callback(type) {
          return function () {
            _callback && (delete xhrCallbacks[id], _callback = xhr.onload = xhr.onerror = null, "abort" === type ? xhr.abort() : "error" === type ? complete(xhr.status, xhr.statusText) : complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText, "string" == typeof xhr.responseText ? { text: xhr.responseText } : void 0, xhr.getAllResponseHeaders()));
          };
        }, xhr.onload = _callback(), xhr.onerror = _callback("error"), _callback = xhrCallbacks[id] = _callback("abort");try {
          xhr.send(options.hasContent && options.data || null);
        } catch (e) {
          if (_callback) throw e;
        }
      }, abort: function abort() {
        _callback && _callback();
      } } : void 0;
  }), jQuery.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /(?:java|ecma)script/ }, converters: { "text script": function textScript(text) {
        return jQuery.globalEval(text), text;
      } } }), jQuery.ajaxPrefilter("script", function (s) {
    void 0 === s.cache && (s.cache = !1), s.crossDomain && (s.type = "GET");
  }), jQuery.ajaxTransport("script", function (s) {
    if (s.crossDomain) {
      var script, _callback2;return { send: function send(_, complete) {
          script = jQuery("<script>").prop({ async: !0, charset: s.scriptCharset, src: s.url }).on("load error", _callback2 = function callback(evt) {
            script.remove(), _callback2 = null, evt && complete("error" === evt.type ? 404 : 200, evt.type);
          }), document.head.appendChild(script[0]);
        }, abort: function abort() {
          _callback2 && _callback2();
        } };
    }
  });var oldCallbacks = [],
      rjsonp = /(=)\?(?=&|$)|\?\?/;jQuery.ajaxSetup({ jsonp: "callback", jsonpCallback: function jsonpCallback() {
      var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce++;return this[callback] = !0, callback;
    } }), jQuery.ajaxPrefilter("json jsonp", function (s, originalSettings, jqXHR) {
    var callbackName,
        overwritten,
        responseContainer,
        jsonProp = s.jsonp !== !1 && (rjsonp.test(s.url) ? "url" : "string" == typeof s.data && !(s.contentType || "").indexOf("application/x-www-form-urlencoded") && rjsonp.test(s.data) && "data");return jsonProp || "jsonp" === s.dataTypes[0] ? (callbackName = s.jsonpCallback = jQuery.isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback, jsonProp ? s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName) : s.jsonp !== !1 && (s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName), s.converters["script json"] = function () {
      return responseContainer || jQuery.error(callbackName + " was not called"), responseContainer[0];
    }, s.dataTypes[0] = "json", overwritten = window[callbackName], window[callbackName] = function () {
      responseContainer = arguments;
    }, jqXHR.always(function () {
      window[callbackName] = overwritten, s[callbackName] && (s.jsonpCallback = originalSettings.jsonpCallback, oldCallbacks.push(callbackName)), responseContainer && jQuery.isFunction(overwritten) && overwritten(responseContainer[0]), responseContainer = overwritten = void 0;
    }), "script") : void 0;
  }), jQuery.parseHTML = function (data, context, keepScripts) {
    if (!data || "string" != typeof data) return null;"boolean" == typeof context && (keepScripts = context, context = !1), context = context || document;var parsed = rsingleTag.exec(data),
        scripts = !keepScripts && [];return parsed ? [context.createElement(parsed[1])] : (parsed = jQuery.buildFragment([data], context, scripts), scripts && scripts.length && jQuery(scripts).remove(), jQuery.merge([], parsed.childNodes));
  };var _load = jQuery.fn.load;jQuery.fn.load = function (url, params, callback) {
    if ("string" != typeof url && _load) return _load.apply(this, arguments);var selector,
        type,
        response,
        self = this,
        off = url.indexOf(" ");return off >= 0 && (selector = jQuery.trim(url.slice(off)), url = url.slice(0, off)), jQuery.isFunction(params) ? (callback = params, params = void 0) : params && "object" == (typeof params === "undefined" ? "undefined" : _typeof(params)) && (type = "POST"), self.length > 0 && jQuery.ajax({ url: url, type: type, dataType: "html", data: params }).done(function (responseText) {
      response = arguments, self.html(selector ? jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : responseText);
    }).complete(callback && function (jqXHR, status) {
      self.each(callback, response || [jqXHR.responseText, status, jqXHR]);
    }), this;
  }, jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (i, type) {
    jQuery.fn[type] = function (fn) {
      return this.on(type, fn);
    };
  }), jQuery.expr.filters.animated = function (elem) {
    return jQuery.grep(jQuery.timers, function (fn) {
      return elem === fn.elem;
    }).length;
  };var docElem = window.document.documentElement;jQuery.offset = { setOffset: function setOffset(elem, options, i) {
      var curPosition,
          curLeft,
          curCSSTop,
          curTop,
          curOffset,
          curCSSLeft,
          calculatePosition,
          position = jQuery.css(elem, "position"),
          curElem = jQuery(elem),
          props = {};"static" === position && (elem.style.position = "relative"), curOffset = curElem.offset(), curCSSTop = jQuery.css(elem, "top"), curCSSLeft = jQuery.css(elem, "left"), calculatePosition = ("absolute" === position || "fixed" === position) && (curCSSTop + curCSSLeft).indexOf("auto") > -1, calculatePosition ? (curPosition = curElem.position(), curTop = curPosition.top, curLeft = curPosition.left) : (curTop = parseFloat(curCSSTop) || 0, curLeft = parseFloat(curCSSLeft) || 0), jQuery.isFunction(options) && (options = options.call(elem, i, curOffset)), null != options.top && (props.top = options.top - curOffset.top + curTop), null != options.left && (props.left = options.left - curOffset.left + curLeft), "using" in options ? options.using.call(elem, props) : curElem.css(props);
    } }, jQuery.fn.extend({ offset: function offset(options) {
      if (arguments.length) return void 0 === options ? this : this.each(function (i) {
        jQuery.offset.setOffset(this, options, i);
      });var docElem,
          win,
          elem = this[0],
          box = { top: 0, left: 0 },
          doc = elem && elem.ownerDocument;if (doc) return docElem = doc.documentElement, jQuery.contains(docElem, elem) ? (_typeof(elem.getBoundingClientRect) !== strundefined && (box = elem.getBoundingClientRect()), win = getWindow(doc), { top: box.top + win.pageYOffset - docElem.clientTop, left: box.left + win.pageXOffset - docElem.clientLeft }) : box;
    }, position: function position() {
      if (this[0]) {
        var offsetParent,
            offset,
            elem = this[0],
            parentOffset = { top: 0, left: 0 };return "fixed" === jQuery.css(elem, "position") ? offset = elem.getBoundingClientRect() : (offsetParent = this.offsetParent(), offset = this.offset(), jQuery.nodeName(offsetParent[0], "html") || (parentOffset = offsetParent.offset()), parentOffset.top += jQuery.css(offsetParent[0], "borderTopWidth", !0), parentOffset.left += jQuery.css(offsetParent[0], "borderLeftWidth", !0)), { top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", !0), left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", !0) };
      }
    }, offsetParent: function offsetParent() {
      return this.map(function () {
        for (var offsetParent = this.offsetParent || docElem; offsetParent && !jQuery.nodeName(offsetParent, "html") && "static" === jQuery.css(offsetParent, "position");) {
          offsetParent = offsetParent.offsetParent;
        }return offsetParent || docElem;
      });
    } }), jQuery.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (method, prop) {
    var top = "pageYOffset" === prop;jQuery.fn[method] = function (val) {
      return access(this, function (elem, method, val) {
        var win = getWindow(elem);return void 0 === val ? win ? win[prop] : elem[method] : void (win ? win.scrollTo(top ? window.pageXOffset : val, top ? val : window.pageYOffset) : elem[method] = val);
      }, method, val, arguments.length, null);
    };
  }), jQuery.each(["top", "left"], function (i, prop) {
    jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function (elem, computed) {
      return computed ? (computed = curCSS(elem, prop), rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed) : void 0;
    });
  }), jQuery.each({ Height: "height", Width: "width" }, function (name, type) {
    jQuery.each({ padding: "inner" + name, content: type, "": "outer" + name }, function (defaultExtra, funcName) {
      jQuery.fn[funcName] = function (margin, value) {
        var chainable = arguments.length && (defaultExtra || "boolean" != typeof margin),
            extra = defaultExtra || (margin === !0 || value === !0 ? "margin" : "border");return access(this, function (elem, type, value) {
          var doc;return jQuery.isWindow(elem) ? elem.document.documentElement["client" + name] : 9 === elem.nodeType ? (doc = elem.documentElement, Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name])) : void 0 === value ? jQuery.css(elem, type, extra) : jQuery.style(elem, type, value, extra);
        }, type, chainable ? margin : void 0, chainable, null);
      };
    });
  }), jQuery.fn.size = function () {
    return this.length;
  }, jQuery.fn.andSelf = jQuery.fn.addBack, "function" == "function" && __webpack_require__(12) && !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return jQuery;
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));var _jQuery = window.jQuery,
      _$ = window.$;return jQuery.noConflict = function (deep) {
    return window.$ === jQuery && (window.$ = _$), deep && window.jQuery === jQuery && (window.jQuery = _jQuery), jQuery;
  }, (typeof noGlobal === "undefined" ? "undefined" : _typeof(noGlobal)) === strundefined && (window.jQuery = window.$ = jQuery), jQuery;
}), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");+function ($) {
  "use strict";
  var version = $.fn.jquery.split(" ")[0].split(".");if (version[0] < 2 && version[1] < 9 || 1 == version[0] && 9 == version[1] && version[2] < 1) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher");
}(jQuery), +function ($) {
  "use strict";
  function transitionEnd() {
    var el = document.createElement("bootstrap"),
        transEndEventNames = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" };for (var name in transEndEventNames) {
      if (void 0 !== el.style[name]) return { end: transEndEventNames[name] };
    }return !1;
  }$.fn.emulateTransitionEnd = function (duration) {
    var called = !1,
        $el = this;$(this).one("bsTransitionEnd", function () {
      called = !0;
    });var callback = function callback() {
      called || $($el).trigger($.support.transition.end);
    };return setTimeout(callback, duration), this;
  }, $(function () {
    $.support.transition = transitionEnd(), $.support.transition && ($.event.special.bsTransitionEnd = { bindType: $.support.transition.end, delegateType: $.support.transition.end, handle: function handle(e) {
        return $(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0;
      } });
  });
}(jQuery), +function ($) {
  "use strict";
  function Plugin(option) {
    return this.each(function () {
      var $this = $(this),
          data = $this.data("bs.alert");data || $this.data("bs.alert", data = new Alert(this)), "string" == typeof option && data[option].call($this);
    });
  }var dismiss = '[data-dismiss="alert"]',
      Alert = function Alert(el) {
    $(el).on("click", dismiss, this.close);
  };Alert.VERSION = "3.3.2", Alert.TRANSITION_DURATION = 150, Alert.prototype.close = function (e) {
    function removeElement() {
      $parent.detach().trigger("closed.bs.alert").remove();
    }var $this = $(this),
        selector = $this.attr("data-target");selector || (selector = $this.attr("href"), selector = selector && selector.replace(/.*(?=#[^\s]*$)/, ""));var $parent = $(selector);e && e.preventDefault(), $parent.length || ($parent = $this.closest(".alert")), $parent.trigger(e = $.Event("close.bs.alert")), e.isDefaultPrevented() || ($parent.removeClass("in"), $.support.transition && $parent.hasClass("fade") ? $parent.one("bsTransitionEnd", removeElement).emulateTransitionEnd(Alert.TRANSITION_DURATION) : removeElement());
  };var old = $.fn.alert;$.fn.alert = Plugin, $.fn.alert.Constructor = Alert, $.fn.alert.noConflict = function () {
    return $.fn.alert = old, this;
  }, $(document).on("click.bs.alert.data-api", dismiss, Alert.prototype.close);
}(jQuery), +function ($) {
  "use strict";
  function Plugin(option) {
    return this.each(function () {
      var $this = $(this),
          data = $this.data("bs.button"),
          options = "object" == (typeof option === "undefined" ? "undefined" : _typeof(option)) && option;data || $this.data("bs.button", data = new Button(this, options)), "toggle" == option ? data.toggle() : option && data.setState(option);
    });
  }var Button = function Button(element, options) {
    this.$element = $(element), this.options = $.extend({}, Button.DEFAULTS, options), this.isLoading = !1;
  };Button.VERSION = "3.3.2", Button.DEFAULTS = { loadingText: "loading..." }, Button.prototype.setState = function (state) {
    var d = "disabled",
        $el = this.$element,
        val = $el.is("input") ? "val" : "html",
        data = $el.data();state += "Text", null == data.resetText && $el.data("resetText", $el[val]()), setTimeout($.proxy(function () {
      $el[val](null == data[state] ? this.options[state] : data[state]), "loadingText" == state ? (this.isLoading = !0, $el.addClass(d).attr(d, d)) : this.isLoading && (this.isLoading = !1, $el.removeClass(d).removeAttr(d));
    }, this), 0);
  }, Button.prototype.toggle = function () {
    var changed = !0,
        $parent = this.$element.closest('[data-toggle="buttons"]');if ($parent.length) {
      var $input = this.$element.find("input");"radio" == $input.prop("type") && ($input.prop("checked") && this.$element.hasClass("active") ? changed = !1 : $parent.find(".active").removeClass("active")), changed && $input.prop("checked", !this.$element.hasClass("active")).trigger("change");
    } else this.$element.attr("aria-pressed", !this.$element.hasClass("active"));changed && this.$element.toggleClass("active");
  };var old = $.fn.button;$.fn.button = Plugin, $.fn.button.Constructor = Button, $.fn.button.noConflict = function () {
    return $.fn.button = old, this;
  }, $(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (e) {
    var $btn = $(e.target);$btn.hasClass("btn") || ($btn = $btn.closest(".btn")), Plugin.call($btn, "toggle"), e.preventDefault();
  }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (e) {
    $(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type));
  });
}(jQuery), +function ($) {
  "use strict";
  function Plugin(option) {
    return this.each(function () {
      var $this = $(this),
          data = $this.data("bs.carousel"),
          options = $.extend({}, Carousel.DEFAULTS, $this.data(), "object" == (typeof option === "undefined" ? "undefined" : _typeof(option)) && option),
          action = "string" == typeof option ? option : options.slide;data || $this.data("bs.carousel", data = new Carousel(this, options)), "number" == typeof option ? data.to(option) : action ? data[action]() : options.interval && data.pause().cycle();
    });
  }var Carousel = function Carousel(element, options) {
    this.$element = $(element), this.$indicators = this.$element.find(".carousel-indicators"), this.options = options, this.paused = this.sliding = this.interval = this.$active = this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", $.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", $.proxy(this.pause, this)).on("mouseleave.bs.carousel", $.proxy(this.cycle, this));
  };Carousel.VERSION = "3.3.2", Carousel.TRANSITION_DURATION = 600, Carousel.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0, keyboard: !0 }, Carousel.prototype.keydown = function (e) {
    if (!/input|textarea/i.test(e.target.tagName)) {
      switch (e.which) {case 37:
          this.prev();break;case 39:
          this.next();break;default:
          return;}e.preventDefault();
    }
  }, Carousel.prototype.cycle = function (e) {
    return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval($.proxy(this.next, this), this.options.interval)), this;
  }, Carousel.prototype.getItemIndex = function (item) {
    return this.$items = item.parent().children(".item"), this.$items.index(item || this.$active);
  }, Carousel.prototype.getItemForDirection = function (direction, active) {
    var activeIndex = this.getItemIndex(active),
        willWrap = "prev" == direction && 0 === activeIndex || "next" == direction && activeIndex == this.$items.length - 1;if (willWrap && !this.options.wrap) return active;var delta = "prev" == direction ? -1 : 1,
        itemIndex = (activeIndex + delta) % this.$items.length;return this.$items.eq(itemIndex);
  }, Carousel.prototype.to = function (pos) {
    var that = this,
        activeIndex = this.getItemIndex(this.$active = this.$element.find(".item.active"));return pos > this.$items.length - 1 || 0 > pos ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function () {
      that.to(pos);
    }) : activeIndex == pos ? this.pause().cycle() : this.slide(pos > activeIndex ? "next" : "prev", this.$items.eq(pos));
  }, Carousel.prototype.pause = function (e) {
    return e || (this.paused = !0), this.$element.find(".next, .prev").length && $.support.transition && (this.$element.trigger($.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this;
  }, Carousel.prototype.next = function () {
    return this.sliding ? void 0 : this.slide("next");
  }, Carousel.prototype.prev = function () {
    return this.sliding ? void 0 : this.slide("prev");
  }, Carousel.prototype.slide = function (type, next) {
    var $active = this.$element.find(".item.active"),
        $next = next || this.getItemForDirection(type, $active),
        isCycling = this.interval,
        direction = "next" == type ? "left" : "right",
        that = this;if ($next.hasClass("active")) return this.sliding = !1;var relatedTarget = $next[0],
        slideEvent = $.Event("slide.bs.carousel", { relatedTarget: relatedTarget, direction: direction });if (this.$element.trigger(slideEvent), !slideEvent.isDefaultPrevented()) {
      if (this.sliding = !0, isCycling && this.pause(), this.$indicators.length) {
        this.$indicators.find(".active").removeClass("active");var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)]);$nextIndicator && $nextIndicator.addClass("active");
      }var slidEvent = $.Event("slid.bs.carousel", { relatedTarget: relatedTarget, direction: direction });return $.support.transition && this.$element.hasClass("slide") ? ($next.addClass(type), $next[0].offsetWidth, $active.addClass(direction), $next.addClass(direction), $active.one("bsTransitionEnd", function () {
        $next.removeClass([type, direction].join(" ")).addClass("active"), $active.removeClass(["active", direction].join(" ")), that.sliding = !1, setTimeout(function () {
          that.$element.trigger(slidEvent);
        }, 0);
      }).emulateTransitionEnd(Carousel.TRANSITION_DURATION)) : ($active.removeClass("active"), $next.addClass("active"), this.sliding = !1, this.$element.trigger(slidEvent)), isCycling && this.cycle(), this;
    }
  };var old = $.fn.carousel;$.fn.carousel = Plugin, $.fn.carousel.Constructor = Carousel, $.fn.carousel.noConflict = function () {
    return $.fn.carousel = old, this;
  };var clickHandler = function clickHandler(e) {
    var href,
        $this = $(this),
        $target = $($this.attr("data-target") || (href = $this.attr("href")) && href.replace(/.*(?=#[^\s]+$)/, ""));if ($target.hasClass("carousel")) {
      var options = $.extend({}, $target.data(), $this.data()),
          slideIndex = $this.attr("data-slide-to");slideIndex && (options.interval = !1), Plugin.call($target, options), slideIndex && $target.data("bs.carousel").to(slideIndex), e.preventDefault();
    }
  };$(document).on("click.bs.carousel.data-api", "[data-slide]", clickHandler).on("click.bs.carousel.data-api", "[data-slide-to]", clickHandler), $(window).on("load", function () {
    $('[data-ride="carousel"]').each(function () {
      var $carousel = $(this);Plugin.call($carousel, $carousel.data());
    });
  });
}(jQuery), +function ($) {
  "use strict";
  function getTargetFromTrigger($trigger) {
    var href,
        target = $trigger.attr("data-target") || (href = $trigger.attr("href")) && href.replace(/.*(?=#[^\s]+$)/, "");return $(target);
  }function Plugin(option) {
    return this.each(function () {
      var $this = $(this),
          data = $this.data("bs.collapse"),
          options = $.extend({}, Collapse.DEFAULTS, $this.data(), "object" == (typeof option === "undefined" ? "undefined" : _typeof(option)) && option);!data && options.toggle && "show" == option && (options.toggle = !1), data || $this.data("bs.collapse", data = new Collapse(this, options)), "string" == typeof option && data[option]();
    });
  }var Collapse = function Collapse(element, options) {
    this.$element = $(element), this.options = $.extend({}, Collapse.DEFAULTS, options), this.$trigger = $(this.options.trigger).filter('[href="#' + element.id + '"], [data-target="#' + element.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle();
  };Collapse.VERSION = "3.3.2", Collapse.TRANSITION_DURATION = 350, Collapse.DEFAULTS = { toggle: !0, trigger: '[data-toggle="collapse"]' }, Collapse.prototype.dimension = function () {
    var hasWidth = this.$element.hasClass("width");return hasWidth ? "width" : "height";
  }, Collapse.prototype.show = function () {
    if (!this.transitioning && !this.$element.hasClass("in")) {
      var activesData,
          actives = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");if (!(actives && actives.length && (activesData = actives.data("bs.collapse"), activesData && activesData.transitioning))) {
        var startEvent = $.Event("show.bs.collapse");if (this.$element.trigger(startEvent), !startEvent.isDefaultPrevented()) {
          actives && actives.length && (Plugin.call(actives, "hide"), activesData || actives.data("bs.collapse", null));var dimension = this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[dimension](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;var complete = function complete() {
            this.$element.removeClass("collapsing").addClass("collapse in")[dimension](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse");
          };if (!$.support.transition) return complete.call(this);var scrollSize = $.camelCase(["scroll", dimension].join("-"));this.$element.one("bsTransitionEnd", $.proxy(complete, this)).emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize]);
        }
      }
    }
  }, Collapse.prototype.hide = function () {
    if (!this.transitioning && this.$element.hasClass("in")) {
      var startEvent = $.Event("hide.bs.collapse");if (this.$element.trigger(startEvent), !startEvent.isDefaultPrevented()) {
        var dimension = this.dimension();this.$element[dimension](this.$element[dimension]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;var complete = function complete() {
          this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse");
        };return $.support.transition ? void this.$element[dimension](0).one("bsTransitionEnd", $.proxy(complete, this)).emulateTransitionEnd(Collapse.TRANSITION_DURATION) : complete.call(this);
      }
    }
  }, Collapse.prototype.toggle = function () {
    this[this.$element.hasClass("in") ? "hide" : "show"]();
  }, Collapse.prototype.getParent = function () {
    return $(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each($.proxy(function (i, element) {
      var $element = $(element);this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element);
    }, this)).end();
  }, Collapse.prototype.addAriaAndCollapsedClass = function ($element, $trigger) {
    var isOpen = $element.hasClass("in");$element.attr("aria-expanded", isOpen), $trigger.toggleClass("collapsed", !isOpen).attr("aria-expanded", isOpen);
  };var old = $.fn.collapse;$.fn.collapse = Plugin, $.fn.collapse.Constructor = Collapse, $.fn.collapse.noConflict = function () {
    return $.fn.collapse = old, this;
  }, $(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (e) {
    var $this = $(this);$this.attr("data-target") || e.preventDefault();var $target = getTargetFromTrigger($this),
        data = $target.data("bs.collapse"),
        option = data ? "toggle" : $.extend({}, $this.data(), { trigger: this });Plugin.call($target, option);
  });
}(jQuery), +function ($) {
  "use strict";
  function clearMenus(e) {
    e && 3 === e.which || ($(backdrop).remove(), $(toggle).each(function () {
      var $this = $(this),
          $parent = getParent($this),
          relatedTarget = { relatedTarget: this };$parent.hasClass("open") && ($parent.trigger(e = $.Event("hide.bs.dropdown", relatedTarget)), e.isDefaultPrevented() || ($this.attr("aria-expanded", "false"), $parent.removeClass("open").trigger("hidden.bs.dropdown", relatedTarget)));
    }));
  }function getParent($this) {
    var selector = $this.attr("data-target");selector || (selector = $this.attr("href"), selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, ""));var $parent = selector && $(selector);return $parent && $parent.length ? $parent : $this.parent();
  }function Plugin(option) {
    return this.each(function () {
      var $this = $(this),
          data = $this.data("bs.dropdown");data || $this.data("bs.dropdown", data = new Dropdown(this)), "string" == typeof option && data[option].call($this);
    });
  }var backdrop = ".dropdown-backdrop",
      toggle = '[data-toggle="dropdown"]',
      Dropdown = function Dropdown(element) {
    $(element).on("click.bs.dropdown", this.toggle);
  };Dropdown.VERSION = "3.3.2", Dropdown.prototype.toggle = function (e) {
    var $this = $(this);if (!$this.is(".disabled, :disabled")) {
      var $parent = getParent($this),
          isActive = $parent.hasClass("open");if (clearMenus(), !isActive) {
        "ontouchstart" in document.documentElement && !$parent.closest(".navbar-nav").length && $('<div class="dropdown-backdrop"/>').insertAfter($(this)).on("click", clearMenus);var relatedTarget = { relatedTarget: this };if ($parent.trigger(e = $.Event("show.bs.dropdown", relatedTarget)), e.isDefaultPrevented()) return;$this.trigger("focus").attr("aria-expanded", "true"), $parent.toggleClass("open").trigger("shown.bs.dropdown", relatedTarget);
      }return !1;
    }
  }, Dropdown.prototype.keydown = function (e) {
    if (/(38|40|27|32)/.test(e.which) && !/input|textarea/i.test(e.target.tagName)) {
      var $this = $(this);if (e.preventDefault(), e.stopPropagation(), !$this.is(".disabled, :disabled")) {
        var $parent = getParent($this),
            isActive = $parent.hasClass("open");if (!isActive && 27 != e.which || isActive && 27 == e.which) return 27 == e.which && $parent.find(toggle).trigger("focus"), $this.trigger("click");var desc = " li:not(.divider):visible a",
            $items = $parent.find('[role="menu"]' + desc + ', [role="listbox"]' + desc);if ($items.length) {
          var index = $items.index(e.target);38 == e.which && index > 0 && index--, 40 == e.which && index < $items.length - 1 && index++, ~index || (index = 0), $items.eq(index).trigger("focus");
        }
      }
    }
  };var old = $.fn.dropdown;$.fn.dropdown = Plugin, $.fn.dropdown.Constructor = Dropdown, $.fn.dropdown.noConflict = function () {
    return $.fn.dropdown = old, this;
  }, $(document).on("click.bs.dropdown.data-api", clearMenus).on("click.bs.dropdown.data-api", ".dropdown form", function (e) {
    e.stopPropagation();
  }).on("click.bs.dropdown.data-api", toggle, Dropdown.prototype.toggle).on("keydown.bs.dropdown.data-api", toggle, Dropdown.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="menu"]', Dropdown.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="listbox"]', Dropdown.prototype.keydown);
}(jQuery), +function ($) {
  "use strict";
  function Plugin(option, _relatedTarget) {
    return this.each(function () {
      var $this = $(this),
          data = $this.data("bs.modal"),
          options = $.extend({}, Modal.DEFAULTS, $this.data(), "object" == (typeof option === "undefined" ? "undefined" : _typeof(option)) && option);data || $this.data("bs.modal", data = new Modal(this, options)), "string" == typeof option ? data[option](_relatedTarget) : options.show && data.show(_relatedTarget);
    });
  }var Modal = function Modal(element, options) {
    this.options = options, this.$body = $(document.body), this.$element = $(element), this.$backdrop = this.isShown = null, this.scrollbarWidth = 0, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, $.proxy(function () {
      this.$element.trigger("loaded.bs.modal");
    }, this));
  };Modal.VERSION = "3.3.2", Modal.TRANSITION_DURATION = 300, Modal.BACKDROP_TRANSITION_DURATION = 150, Modal.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }, Modal.prototype.toggle = function (_relatedTarget) {
    return this.isShown ? this.hide() : this.show(_relatedTarget);
  }, Modal.prototype.show = function (_relatedTarget) {
    var that = this,
        e = $.Event("show.bs.modal", { relatedTarget: _relatedTarget });this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', $.proxy(this.hide, this)), this.backdrop(function () {
      var transition = $.support.transition && that.$element.hasClass("fade");that.$element.parent().length || that.$element.appendTo(that.$body), that.$element.show().scrollTop(0), that.options.backdrop && that.adjustBackdrop(), that.adjustDialog(), transition && that.$element[0].offsetWidth, that.$element.addClass("in").attr("aria-hidden", !1), that.enforceFocus();var e = $.Event("shown.bs.modal", { relatedTarget: _relatedTarget });transition ? that.$element.find(".modal-dialog").one("bsTransitionEnd", function () {
        that.$element.trigger("focus").trigger(e);
      }).emulateTransitionEnd(Modal.TRANSITION_DURATION) : that.$element.trigger("focus").trigger(e);
    }));
  }, Modal.prototype.hide = function (e) {
    e && e.preventDefault(), e = $.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), $(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), $.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", $.proxy(this.hideModal, this)).emulateTransitionEnd(Modal.TRANSITION_DURATION) : this.hideModal());
  }, Modal.prototype.enforceFocus = function () {
    $(document).off("focusin.bs.modal").on("focusin.bs.modal", $.proxy(function (e) {
      this.$element[0] === e.target || this.$element.has(e.target).length || this.$element.trigger("focus");
    }, this));
  }, Modal.prototype.escape = function () {
    this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", $.proxy(function (e) {
      27 == e.which && this.hide();
    }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal");
  }, Modal.prototype.resize = function () {
    this.isShown ? $(window).on("resize.bs.modal", $.proxy(this.handleUpdate, this)) : $(window).off("resize.bs.modal");
  }, Modal.prototype.hideModal = function () {
    var that = this;this.$element.hide(), this.backdrop(function () {
      that.$body.removeClass("modal-open"), that.resetAdjustments(), that.resetScrollbar(), that.$element.trigger("hidden.bs.modal");
    });
  }, Modal.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove(), this.$backdrop = null;
  }, Modal.prototype.backdrop = function (callback) {
    var that = this,
        animate = this.$element.hasClass("fade") ? "fade" : "";if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate;if (this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />').prependTo(this.$element).on("click.dismiss.bs.modal", $.proxy(function (e) {
        e.target === e.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this));
      }, this)), doAnimate && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !callback) return;doAnimate ? this.$backdrop.one("bsTransitionEnd", callback).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) : callback();
    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass("in");var callbackRemove = function callbackRemove() {
        that.removeBackdrop(), callback && callback();
      };$.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", callbackRemove).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) : callbackRemove();
    } else callback && callback();
  }, Modal.prototype.handleUpdate = function () {
    this.options.backdrop && this.adjustBackdrop(), this.adjustDialog();
  }, Modal.prototype.adjustBackdrop = function () {
    this.$backdrop.css("height", 0).css("height", this.$element[0].scrollHeight);
  }, Modal.prototype.adjustDialog = function () {
    var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight;this.$element.css({ paddingLeft: !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : "", paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : "" });
  }, Modal.prototype.resetAdjustments = function () {
    this.$element.css({ paddingLeft: "", paddingRight: "" });
  }, Modal.prototype.checkScrollbar = function () {
    this.bodyIsOverflowing = document.body.scrollHeight > document.documentElement.clientHeight, this.scrollbarWidth = this.measureScrollbar();
  }, Modal.prototype.setScrollbar = function () {
    var bodyPad = parseInt(this.$body.css("padding-right") || 0, 10);this.bodyIsOverflowing && this.$body.css("padding-right", bodyPad + this.scrollbarWidth);
  }, Modal.prototype.resetScrollbar = function () {
    this.$body.css("padding-right", "");
  }, Modal.prototype.measureScrollbar = function () {
    var scrollDiv = document.createElement("div");scrollDiv.className = "modal-scrollbar-measure", this.$body.append(scrollDiv);var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;return this.$body[0].removeChild(scrollDiv), scrollbarWidth;
  };var old = $.fn.modal;$.fn.modal = Plugin, $.fn.modal.Constructor = Modal, $.fn.modal.noConflict = function () {
    return $.fn.modal = old, this;
  }, $(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (e) {
    var $this = $(this),
        href = $this.attr("href"),
        $target = $($this.attr("data-target") || href && href.replace(/.*(?=#[^\s]+$)/, "")),
        option = $target.data("bs.modal") ? "toggle" : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data());$this.is("a") && e.preventDefault(), $target.one("show.bs.modal", function (showEvent) {
      showEvent.isDefaultPrevented() || $target.one("hidden.bs.modal", function () {
        $this.is(":visible") && $this.trigger("focus");
      });
    }), Plugin.call($target, option, this);
  });
}(jQuery), +function ($) {
  "use strict";
  function Plugin(option) {
    return this.each(function () {
      var $this = $(this),
          data = $this.data("bs.tooltip"),
          options = "object" == (typeof option === "undefined" ? "undefined" : _typeof(option)) && option;(data || "destroy" != option) && (data || $this.data("bs.tooltip", data = new Tooltip(this, options)), "string" == typeof option && data[option]());
    });
  }var Tooltip = function Tooltip(element, options) {
    this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", element, options);
  };Tooltip.VERSION = "3.3.2", Tooltip.TRANSITION_DURATION = 150, Tooltip.DEFAULTS = { animation: !0, placement: "top", selector: !1, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, container: !1, viewport: { selector: "body", padding: 0 } }, Tooltip.prototype.init = function (type, element, options) {
    this.enabled = !0, this.type = type, this.$element = $(element), this.options = this.getOptions(options), this.$viewport = this.options.viewport && $(this.options.viewport.selector || this.options.viewport);for (var triggers = this.options.trigger.split(" "), i = triggers.length; i--;) {
      var trigger = triggers[i];if ("click" == trigger) this.$element.on("click." + this.type, this.options.selector, $.proxy(this.toggle, this));else if ("manual" != trigger) {
        var eventIn = "hover" == trigger ? "mouseenter" : "focusin",
            eventOut = "hover" == trigger ? "mouseleave" : "focusout";this.$element.on(eventIn + "." + this.type, this.options.selector, $.proxy(this.enter, this)), this.$element.on(eventOut + "." + this.type, this.options.selector, $.proxy(this.leave, this));
      }
    }this.options.selector ? this._options = $.extend({}, this.options, { trigger: "manual", selector: "" }) : this.fixTitle();
  }, Tooltip.prototype.getDefaults = function () {
    return Tooltip.DEFAULTS;
  }, Tooltip.prototype.getOptions = function (options) {
    return options = $.extend({}, this.getDefaults(), this.$element.data(), options), options.delay && "number" == typeof options.delay && (options.delay = { show: options.delay, hide: options.delay }), options;
  }, Tooltip.prototype.getDelegateOptions = function () {
    var options = {},
        defaults = this.getDefaults();return this._options && $.each(this._options, function (key, value) {
      defaults[key] != value && (options[key] = value);
    }), options;
  }, Tooltip.prototype.enter = function (obj) {
    var self = obj instanceof this.constructor ? obj : $(obj.currentTarget).data("bs." + this.type);return self && self.$tip && self.$tip.is(":visible") ? void (self.hoverState = "in") : (self || (self = new this.constructor(obj.currentTarget, this.getDelegateOptions()), $(obj.currentTarget).data("bs." + this.type, self)), clearTimeout(self.timeout), self.hoverState = "in", self.options.delay && self.options.delay.show ? void (self.timeout = setTimeout(function () {
      "in" == self.hoverState && self.show();
    }, self.options.delay.show)) : self.show());
  }, Tooltip.prototype.leave = function (obj) {
    var self = obj instanceof this.constructor ? obj : $(obj.currentTarget).data("bs." + this.type);return self || (self = new this.constructor(obj.currentTarget, this.getDelegateOptions()), $(obj.currentTarget).data("bs." + this.type, self)), clearTimeout(self.timeout), self.hoverState = "out", self.options.delay && self.options.delay.hide ? void (self.timeout = setTimeout(function () {
      "out" == self.hoverState && self.hide();
    }, self.options.delay.hide)) : self.hide();
  }, Tooltip.prototype.show = function () {
    var e = $.Event("show.bs." + this.type);if (this.hasContent() && this.enabled) {
      this.$element.trigger(e);var inDom = $.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);if (e.isDefaultPrevented() || !inDom) return;var that = this,
          $tip = this.tip(),
          tipId = this.getUID(this.type);this.setContent(), $tip.attr("id", tipId), this.$element.attr("aria-describedby", tipId), this.options.animation && $tip.addClass("fade");var placement = "function" == typeof this.options.placement ? this.options.placement.call(this, $tip[0], this.$element[0]) : this.options.placement,
          autoToken = /\s?auto?\s?/i,
          autoPlace = autoToken.test(placement);autoPlace && (placement = placement.replace(autoToken, "") || "top"), $tip.detach().css({ top: 0, left: 0, display: "block" }).addClass(placement).data("bs." + this.type, this), this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element);var pos = this.getPosition(),
          actualWidth = $tip[0].offsetWidth,
          actualHeight = $tip[0].offsetHeight;if (autoPlace) {
        var orgPlacement = placement,
            $container = this.options.container ? $(this.options.container) : this.$element.parent(),
            containerDim = this.getPosition($container);placement = "bottom" == placement && pos.bottom + actualHeight > containerDim.bottom ? "top" : "top" == placement && pos.top - actualHeight < containerDim.top ? "bottom" : "right" == placement && pos.right + actualWidth > containerDim.width ? "left" : "left" == placement && pos.left - actualWidth < containerDim.left ? "right" : placement, $tip.removeClass(orgPlacement).addClass(placement);
      }var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight);this.applyPlacement(calculatedOffset, placement);var complete = function complete() {
        var prevHoverState = that.hoverState;that.$element.trigger("shown.bs." + that.type), that.hoverState = null, "out" == prevHoverState && that.leave(that);
      };$.support.transition && this.$tip.hasClass("fade") ? $tip.one("bsTransitionEnd", complete).emulateTransitionEnd(Tooltip.TRANSITION_DURATION) : complete();
    }
  }, Tooltip.prototype.applyPlacement = function (offset, placement) {
    var $tip = this.tip(),
        width = $tip[0].offsetWidth,
        height = $tip[0].offsetHeight,
        marginTop = parseInt($tip.css("margin-top"), 10),
        marginLeft = parseInt($tip.css("margin-left"), 10);isNaN(marginTop) && (marginTop = 0), isNaN(marginLeft) && (marginLeft = 0), offset.top = offset.top + marginTop, offset.left = offset.left + marginLeft, $.offset.setOffset($tip[0], $.extend({ using: function using(props) {
        $tip.css({ top: Math.round(props.top), left: Math.round(props.left) });
      } }, offset), 0), $tip.addClass("in");var actualWidth = $tip[0].offsetWidth,
        actualHeight = $tip[0].offsetHeight;"top" == placement && actualHeight != height && (offset.top = offset.top + height - actualHeight);var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight);delta.left ? offset.left += delta.left : offset.top += delta.top;var isVertical = /top|bottom/.test(placement),
        arrowDelta = isVertical ? 2 * delta.left - width + actualWidth : 2 * delta.top - height + actualHeight,
        arrowOffsetPosition = isVertical ? "offsetWidth" : "offsetHeight";$tip.offset(offset), this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], isVertical);
  }, Tooltip.prototype.replaceArrow = function (delta, dimension, isHorizontal) {
    this.arrow().css(isHorizontal ? "left" : "top", 50 * (1 - delta / dimension) + "%").css(isHorizontal ? "top" : "left", "");
  }, Tooltip.prototype.setContent = function () {
    var $tip = this.tip(),
        title = this.getTitle();$tip.find(".tooltip-inner")[this.options.html ? "html" : "text"](title), $tip.removeClass("fade in top bottom left right");
  }, Tooltip.prototype.hide = function (callback) {
    function complete() {
      "in" != that.hoverState && $tip.detach(), that.$element.removeAttr("aria-describedby").trigger("hidden.bs." + that.type), callback && callback();
    }var that = this,
        $tip = this.tip(),
        e = $.Event("hide.bs." + this.type);return this.$element.trigger(e), e.isDefaultPrevented() ? void 0 : ($tip.removeClass("in"), $.support.transition && this.$tip.hasClass("fade") ? $tip.one("bsTransitionEnd", complete).emulateTransitionEnd(Tooltip.TRANSITION_DURATION) : complete(), this.hoverState = null, this);
  }, Tooltip.prototype.fixTitle = function () {
    var $e = this.$element;($e.attr("title") || "string" != typeof $e.attr("data-original-title")) && $e.attr("data-original-title", $e.attr("title") || "").attr("title", "");
  }, Tooltip.prototype.hasContent = function () {
    return this.getTitle();
  }, Tooltip.prototype.getPosition = function ($element) {
    $element = $element || this.$element;var el = $element[0],
        isBody = "BODY" == el.tagName,
        elRect = el.getBoundingClientRect();null == elRect.width && (elRect = $.extend({}, elRect, { width: elRect.right - elRect.left, height: elRect.bottom - elRect.top }));var elOffset = isBody ? { top: 0, left: 0 } : $element.offset(),
        scroll = { scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop() },
        outerDims = isBody ? { width: $(window).width(), height: $(window).height() } : null;return $.extend({}, elRect, scroll, outerDims, elOffset);
  }, Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
    return "bottom" == placement ? { top: pos.top + pos.height, left: pos.left + pos.width / 2 - actualWidth / 2 } : "top" == placement ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2 } : "left" == placement ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } : { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width };
  }, Tooltip.prototype.getViewportAdjustedDelta = function (placement, pos, actualWidth, actualHeight) {
    var delta = { top: 0, left: 0 };if (!this.$viewport) return delta;var viewportPadding = this.options.viewport && this.options.viewport.padding || 0,
        viewportDimensions = this.getPosition(this.$viewport);if (/right|left/.test(placement)) {
      var topEdgeOffset = pos.top - viewportPadding - viewportDimensions.scroll,
          bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight;topEdgeOffset < viewportDimensions.top ? delta.top = viewportDimensions.top - topEdgeOffset : bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height && (delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset);
    } else {
      var leftEdgeOffset = pos.left - viewportPadding,
          rightEdgeOffset = pos.left + viewportPadding + actualWidth;leftEdgeOffset < viewportDimensions.left ? delta.left = viewportDimensions.left - leftEdgeOffset : rightEdgeOffset > viewportDimensions.width && (delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset);
    }return delta;
  }, Tooltip.prototype.getTitle = function () {
    var title,
        $e = this.$element,
        o = this.options;return title = $e.attr("data-original-title") || ("function" == typeof o.title ? o.title.call($e[0]) : o.title);
  }, Tooltip.prototype.getUID = function (prefix) {
    do {
      prefix += ~~(1e6 * Math.random());
    } while (document.getElementById(prefix));return prefix;
  }, Tooltip.prototype.tip = function () {
    return this.$tip = this.$tip || $(this.options.template);
  }, Tooltip.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow");
  }, Tooltip.prototype.enable = function () {
    this.enabled = !0;
  }, Tooltip.prototype.disable = function () {
    this.enabled = !1;
  }, Tooltip.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled;
  }, Tooltip.prototype.toggle = function (e) {
    var self = this;e && (self = $(e.currentTarget).data("bs." + this.type), self || (self = new this.constructor(e.currentTarget, this.getDelegateOptions()), $(e.currentTarget).data("bs." + this.type, self))), self.tip().hasClass("in") ? self.leave(self) : self.enter(self);
  }, Tooltip.prototype.destroy = function () {
    var that = this;clearTimeout(this.timeout), this.hide(function () {
      that.$element.off("." + that.type).removeData("bs." + that.type);
    });
  };var old = $.fn.tooltip;$.fn.tooltip = Plugin, $.fn.tooltip.Constructor = Tooltip, $.fn.tooltip.noConflict = function () {
    return $.fn.tooltip = old, this;
  };
}(jQuery), +function ($) {
  "use strict";
  function Plugin(option) {
    return this.each(function () {
      var $this = $(this),
          data = $this.data("bs.popover"),
          options = "object" == (typeof option === "undefined" ? "undefined" : _typeof(option)) && option;(data || "destroy" != option) && (data || $this.data("bs.popover", data = new Popover(this, options)), "string" == typeof option && data[option]());
    });
  }var Popover = function Popover(element, options) {
    this.init("popover", element, options);
  };if (!$.fn.tooltip) throw new Error("Popover requires tooltip.js");Popover.VERSION = "3.3.2", Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>' }), Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype), Popover.prototype.constructor = Popover, Popover.prototype.getDefaults = function () {
    return Popover.DEFAULTS;
  }, Popover.prototype.setContent = function () {
    var $tip = this.tip(),
        title = this.getTitle(),
        content = this.getContent();$tip.find(".popover-title")[this.options.html ? "html" : "text"](title), $tip.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof content ? "html" : "append" : "text"](content), $tip.removeClass("fade top bottom left right in"), $tip.find(".popover-title").html() || $tip.find(".popover-title").hide();
  }, Popover.prototype.hasContent = function () {
    return this.getTitle() || this.getContent();
  }, Popover.prototype.getContent = function () {
    var $e = this.$element,
        o = this.options;return $e.attr("data-content") || ("function" == typeof o.content ? o.content.call($e[0]) : o.content);
  }, Popover.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find(".arrow");
  }, Popover.prototype.tip = function () {
    return this.$tip || (this.$tip = $(this.options.template)), this.$tip;
  };var old = $.fn.popover;$.fn.popover = Plugin, $.fn.popover.Constructor = Popover, $.fn.popover.noConflict = function () {
    return $.fn.popover = old, this;
  };
}(jQuery), +function ($) {
  "use strict";
  function ScrollSpy(element, options) {
    var process = $.proxy(this.process, this);this.$body = $("body"), this.$scrollElement = $($(element).is("body") ? window : element), this.options = $.extend({}, ScrollSpy.DEFAULTS, options), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", process), this.refresh(), this.process();
  }function Plugin(option) {
    return this.each(function () {
      var $this = $(this),
          data = $this.data("bs.scrollspy"),
          options = "object" == (typeof option === "undefined" ? "undefined" : _typeof(option)) && option;data || $this.data("bs.scrollspy", data = new ScrollSpy(this, options)), "string" == typeof option && data[option]();
    });
  }ScrollSpy.VERSION = "3.3.2", ScrollSpy.DEFAULTS = { offset: 10 }, ScrollSpy.prototype.getScrollHeight = function () {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight);
  }, ScrollSpy.prototype.refresh = function () {
    var offsetMethod = "offset",
        offsetBase = 0;$.isWindow(this.$scrollElement[0]) || (offsetMethod = "position", offsetBase = this.$scrollElement.scrollTop()), this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight();var self = this;this.$body.find(this.selector).map(function () {
      var $el = $(this),
          href = $el.data("target") || $el.attr("href"),
          $href = /^#./.test(href) && $(href);return $href && $href.length && $href.is(":visible") && [[$href[offsetMethod]().top + offsetBase, href]] || null;
    }).sort(function (a, b) {
      return a[0] - b[0];
    }).each(function () {
      self.offsets.push(this[0]), self.targets.push(this[1]);
    });
  }, ScrollSpy.prototype.process = function () {
    var i,
        scrollTop = this.$scrollElement.scrollTop() + this.options.offset,
        scrollHeight = this.getScrollHeight(),
        maxScroll = this.options.offset + scrollHeight - this.$scrollElement.height(),
        offsets = this.offsets,
        targets = this.targets,
        activeTarget = this.activeTarget;if (this.scrollHeight != scrollHeight && this.refresh(), scrollTop >= maxScroll) return activeTarget != (i = targets[targets.length - 1]) && this.activate(i);if (activeTarget && scrollTop < offsets[0]) return this.activeTarget = null, this.clear();for (i = offsets.length; i--;) {
      activeTarget != targets[i] && scrollTop >= offsets[i] && (!offsets[i + 1] || scrollTop <= offsets[i + 1]) && this.activate(targets[i]);
    }
  }, ScrollSpy.prototype.activate = function (target) {
    this.activeTarget = target, this.clear();var selector = this.selector + '[data-target="' + target + '"],' + this.selector + '[href="' + target + '"]',
        active = $(selector).parents("li").addClass("active");active.parent(".dropdown-menu").length && (active = active.closest("li.dropdown").addClass("active")), active.trigger("activate.bs.scrollspy");
  }, ScrollSpy.prototype.clear = function () {
    $(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
  };var old = $.fn.scrollspy;$.fn.scrollspy = Plugin, $.fn.scrollspy.Constructor = ScrollSpy, $.fn.scrollspy.noConflict = function () {
    return $.fn.scrollspy = old, this;
  }, $(window).on("load.bs.scrollspy.data-api", function () {
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this);Plugin.call($spy, $spy.data());
    });
  });
}(jQuery), +function ($) {
  "use strict";
  function Plugin(option) {
    return this.each(function () {
      var $this = $(this),
          data = $this.data("bs.tab");data || $this.data("bs.tab", data = new Tab(this)), "string" == typeof option && data[option]();
    });
  }var Tab = function Tab(element) {
    this.element = $(element);
  };Tab.VERSION = "3.3.2", Tab.TRANSITION_DURATION = 150, Tab.prototype.show = function () {
    var $this = this.element,
        $ul = $this.closest("ul:not(.dropdown-menu)"),
        selector = $this.data("target");if (selector || (selector = $this.attr("href"), selector = selector && selector.replace(/.*(?=#[^\s]*$)/, "")), !$this.parent("li").hasClass("active")) {
      var $previous = $ul.find(".active:last a"),
          hideEvent = $.Event("hide.bs.tab", { relatedTarget: $this[0] }),
          showEvent = $.Event("show.bs.tab", { relatedTarget: $previous[0] });if ($previous.trigger(hideEvent), $this.trigger(showEvent), !showEvent.isDefaultPrevented() && !hideEvent.isDefaultPrevented()) {
        var $target = $(selector);this.activate($this.closest("li"), $ul), this.activate($target, $target.parent(), function () {
          $previous.trigger({ type: "hidden.bs.tab", relatedTarget: $this[0] }), $this.trigger({ type: "shown.bs.tab", relatedTarget: $previous[0] });
        });
      }
    }
  }, Tab.prototype.activate = function (element, container, callback) {
    function next() {
      $active.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), element.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), transition ? (element[0].offsetWidth, element.addClass("in")) : element.removeClass("fade"), element.parent(".dropdown-menu") && element.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), callback && callback();
    }var $active = container.find("> .active"),
        transition = callback && $.support.transition && ($active.length && $active.hasClass("fade") || !!container.find("> .fade").length);$active.length && transition ? $active.one("bsTransitionEnd", next).emulateTransitionEnd(Tab.TRANSITION_DURATION) : next(), $active.removeClass("in");
  };var old = $.fn.tab;$.fn.tab = Plugin, $.fn.tab.Constructor = Tab, $.fn.tab.noConflict = function () {
    return $.fn.tab = old, this;
  };var clickHandler = function clickHandler(e) {
    e.preventDefault(), Plugin.call($(this), "show");
  };$(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', clickHandler).on("click.bs.tab.data-api", '[data-toggle="pill"]', clickHandler);
}(jQuery), +function ($) {
  "use strict";
  function Plugin(option) {
    return this.each(function () {
      var $this = $(this),
          data = $this.data("bs.affix"),
          options = "object" == (typeof option === "undefined" ? "undefined" : _typeof(option)) && option;data || $this.data("bs.affix", data = new Affix(this, options)), "string" == typeof option && data[option]();
    });
  }var Affix = function Affix(element, options) {
    this.options = $.extend({}, Affix.DEFAULTS, options), this.$target = $(this.options.target).on("scroll.bs.affix.data-api", $.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", $.proxy(this.checkPositionWithEventLoop, this)), this.$element = $(element), this.affixed = this.unpin = this.pinnedOffset = null, this.checkPosition();
  };Affix.VERSION = "3.3.2", Affix.RESET = "affix affix-top affix-bottom", Affix.DEFAULTS = { offset: 0, target: window }, Affix.prototype.getState = function (scrollHeight, height, offsetTop, offsetBottom) {
    var scrollTop = this.$target.scrollTop(),
        position = this.$element.offset(),
        targetHeight = this.$target.height();if (null != offsetTop && "top" == this.affixed) return offsetTop > scrollTop ? "top" : !1;if ("bottom" == this.affixed) return null != offsetTop ? scrollTop + this.unpin <= position.top ? !1 : "bottom" : scrollHeight - offsetBottom >= scrollTop + targetHeight ? !1 : "bottom";var initializing = null == this.affixed,
        colliderTop = initializing ? scrollTop : position.top,
        colliderHeight = initializing ? targetHeight : height;return null != offsetTop && offsetTop >= scrollTop ? "top" : null != offsetBottom && colliderTop + colliderHeight >= scrollHeight - offsetBottom ? "bottom" : !1;
  }, Affix.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset) return this.pinnedOffset;this.$element.removeClass(Affix.RESET).addClass("affix");var scrollTop = this.$target.scrollTop(),
        position = this.$element.offset();return this.pinnedOffset = position.top - scrollTop;
  }, Affix.prototype.checkPositionWithEventLoop = function () {
    setTimeout($.proxy(this.checkPosition, this), 1);
  }, Affix.prototype.checkPosition = function () {
    if (this.$element.is(":visible")) {
      var height = this.$element.height(),
          offset = this.options.offset,
          offsetTop = offset.top,
          offsetBottom = offset.bottom,
          scrollHeight = $("body").height();"object" != (typeof offset === "undefined" ? "undefined" : _typeof(offset)) && (offsetBottom = offsetTop = offset), "function" == typeof offsetTop && (offsetTop = offset.top(this.$element)), "function" == typeof offsetBottom && (offsetBottom = offset.bottom(this.$element));var affix = this.getState(scrollHeight, height, offsetTop, offsetBottom);if (this.affixed != affix) {
        null != this.unpin && this.$element.css("top", "");var affixType = "affix" + (affix ? "-" + affix : ""),
            e = $.Event(affixType + ".bs.affix");if (this.$element.trigger(e), e.isDefaultPrevented()) return;this.affixed = affix, this.unpin = "bottom" == affix ? this.getPinnedOffset() : null, this.$element.removeClass(Affix.RESET).addClass(affixType).trigger(affixType.replace("affix", "affixed") + ".bs.affix");
      }"bottom" == affix && this.$element.offset({ top: scrollHeight - height - offsetBottom });
    }
  };var old = $.fn.affix;$.fn.affix = Plugin, $.fn.affix.Constructor = Affix, $.fn.affix.noConflict = function () {
    return $.fn.affix = old, this;
  }, $(window).on("load", function () {
    $('[data-spy="affix"]').each(function () {
      var $spy = $(this),
          data = $spy.data();data.offset = data.offset || {}, null != data.offsetBottom && (data.offset.bottom = data.offsetBottom), null != data.offsetTop && (data.offset.top = data.offsetTop), Plugin.call($spy, data);
    });
  });
}(jQuery), function () {
  "use strict";
  var root = this,
      previous = root.Chart,
      Chart = function Chart(context) {
    this.canvas = context.canvas, this.ctx = context;this.width = context.canvas.width, this.height = context.canvas.height;return this.aspectRatio = this.width / this.height, helpers.retinaScale(this), this;
  };Chart.defaults = { global: { animation: !0, animationSteps: 60, animationEasing: "easeOutQuart", showScale: !0, scaleOverride: !1, scaleSteps: null, scaleStepWidth: null, scaleStartValue: null, scaleLineColor: "rgba(0,0,0,.1)", scaleLineWidth: 1, scaleShowLabels: !0, scaleLabel: "<%=value%>", scaleIntegersOnly: !0, scaleBeginAtZero: !1, scaleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif", scaleFontSize: 12, scaleFontStyle: "normal", scaleFontColor: "#666", responsive: !1, maintainAspectRatio: !0, showTooltips: !0, customTooltips: !1, tooltipEvents: ["mousemove", "touchstart", "touchmove", "mouseout"], tooltipFillColor: "rgba(0,0,0,0.8)", tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif", tooltipFontSize: 14, tooltipFontStyle: "normal", tooltipFontColor: "#fff", tooltipTitleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif", tooltipTitleFontSize: 14, tooltipTitleFontStyle: "bold", tooltipTitleFontColor: "#fff", tooltipYPadding: 6, tooltipXPadding: 6, tooltipCaretSize: 8, tooltipCornerRadius: 6, tooltipXOffset: 10, tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>", multiTooltipTemplate: "<%= value %>", multiTooltipKeyBackground: "#fff", onAnimationProgress: function onAnimationProgress() {}, onAnimationComplete: function onAnimationComplete() {} } }, Chart.types = {};var helpers = Chart.helpers = {},
      each = helpers.each = function (loopable, callback, self) {
    var additionalArgs = Array.prototype.slice.call(arguments, 3);if (loopable) if (loopable.length === +loopable.length) {
      var i;for (i = 0; i < loopable.length; i++) {
        callback.apply(self, [loopable[i], i].concat(additionalArgs));
      }
    } else for (var item in loopable) {
      callback.apply(self, [loopable[item], item].concat(additionalArgs));
    }
  },
      clone = helpers.clone = function (obj) {
    var objClone = {};return each(obj, function (value, key) {
      obj.hasOwnProperty(key) && (objClone[key] = value);
    }), objClone;
  },
      extend = helpers.extend = function (base) {
    return each(Array.prototype.slice.call(arguments, 1), function (extensionObject) {
      each(extensionObject, function (value, key) {
        extensionObject.hasOwnProperty(key) && (base[key] = value);
      });
    }), base;
  },
      merge = helpers.merge = function () {
    var args = Array.prototype.slice.call(arguments, 0);return args.unshift({}), extend.apply(null, args);
  },
      indexOf = helpers.indexOf = function (arrayToSearch, item) {
    if (Array.prototype.indexOf) return arrayToSearch.indexOf(item);for (var i = 0; i < arrayToSearch.length; i++) {
      if (arrayToSearch[i] === item) return i;
    }return -1;
  },
      inherits = (helpers.where = function (collection, filterCallback) {
    var filtered = [];return helpers.each(collection, function (item) {
      filterCallback(item) && filtered.push(item);
    }), filtered;
  }, helpers.findNextWhere = function (arrayToSearch, filterCallback, startIndex) {
    startIndex || (startIndex = -1);for (var i = startIndex + 1; i < arrayToSearch.length; i++) {
      var currentItem = arrayToSearch[i];if (filterCallback(currentItem)) return currentItem;
    }
  }, helpers.findPreviousWhere = function (arrayToSearch, filterCallback, startIndex) {
    startIndex || (startIndex = arrayToSearch.length);for (var i = startIndex - 1; i >= 0; i--) {
      var currentItem = arrayToSearch[i];if (filterCallback(currentItem)) return currentItem;
    }
  }, helpers.inherits = function (extensions) {
    var parent = this,
        ChartElement = extensions && extensions.hasOwnProperty("constructor") ? extensions.constructor : function () {
      return parent.apply(this, arguments);
    },
        Surrogate = function Surrogate() {
      this.constructor = ChartElement;
    };return Surrogate.prototype = parent.prototype, ChartElement.prototype = new Surrogate(), ChartElement.extend = inherits, extensions && extend(ChartElement.prototype, extensions), ChartElement.__super__ = parent.prototype, ChartElement;
  }),
      noop = helpers.noop = function () {},
      uid = helpers.uid = function () {
    var id = 0;return function () {
      return "chart-" + id++;
    };
  }(),
      warn = helpers.warn = function (str) {
    window.console && "function" == typeof window.console.warn && console.warn(str);
  },
      amd = helpers.amd = "function" == "function" && __webpack_require__(12),
      isNumber = helpers.isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  },
      max = helpers.max = function (array) {
    return Math.max.apply(Math, array);
  },
      min = helpers.min = function (array) {
    return Math.min.apply(Math, array);
  },
      getDecimalPlaces = (helpers.cap = function (valueToCap, maxValue, minValue) {
    if (isNumber(maxValue)) {
      if (valueToCap > maxValue) return maxValue;
    } else if (isNumber(minValue) && minValue > valueToCap) return minValue;return valueToCap;
  }, helpers.getDecimalPlaces = function (num) {
    return num % 1 !== 0 && isNumber(num) ? num.toString().split(".")[1].length : 0;
  }),
      toRadians = helpers.radians = function (degrees) {
    return degrees * (Math.PI / 180);
  },
      aliasPixel = (helpers.getAngleFromPoint = function (centrePoint, anglePoint) {
    var distanceFromXCenter = anglePoint.x - centrePoint.x,
        distanceFromYCenter = anglePoint.y - centrePoint.y,
        radialDistanceFromCenter = Math.sqrt(distanceFromXCenter * distanceFromXCenter + distanceFromYCenter * distanceFromYCenter),
        angle = 2 * Math.PI + Math.atan2(distanceFromYCenter, distanceFromXCenter);return 0 > distanceFromXCenter && 0 > distanceFromYCenter && (angle += 2 * Math.PI), { angle: angle, distance: radialDistanceFromCenter };
  }, helpers.aliasPixel = function (pixelWidth) {
    return pixelWidth % 2 === 0 ? 0 : .5;
  }),
      calculateOrderOfMagnitude = (helpers.splineCurve = function (FirstPoint, MiddlePoint, AfterPoint, t) {
    var d01 = Math.sqrt(Math.pow(MiddlePoint.x - FirstPoint.x, 2) + Math.pow(MiddlePoint.y - FirstPoint.y, 2)),
        d12 = Math.sqrt(Math.pow(AfterPoint.x - MiddlePoint.x, 2) + Math.pow(AfterPoint.y - MiddlePoint.y, 2)),
        fa = t * d01 / (d01 + d12),
        fb = t * d12 / (d01 + d12);return { inner: { x: MiddlePoint.x - fa * (AfterPoint.x - FirstPoint.x), y: MiddlePoint.y - fa * (AfterPoint.y - FirstPoint.y) }, outer: { x: MiddlePoint.x + fb * (AfterPoint.x - FirstPoint.x), y: MiddlePoint.y + fb * (AfterPoint.y - FirstPoint.y) } };
  }, helpers.calculateOrderOfMagnitude = function (val) {
    return Math.floor(Math.log(val) / Math.LN10);
  }),
      template = (helpers.calculateScaleRange = function (valuesArray, drawingSize, textSize, startFromZero, integersOnly) {
    var minSteps = 2,
        maxSteps = Math.floor(drawingSize / (1.5 * textSize)),
        skipFitting = minSteps >= maxSteps,
        maxValue = max(valuesArray),
        minValue = min(valuesArray);maxValue === minValue && (maxValue += .5, minValue >= .5 && !startFromZero ? minValue -= .5 : maxValue += .5);for (var valueRange = Math.abs(maxValue - minValue), rangeOrderOfMagnitude = calculateOrderOfMagnitude(valueRange), graphMax = Math.ceil(maxValue / (1 * Math.pow(10, rangeOrderOfMagnitude))) * Math.pow(10, rangeOrderOfMagnitude), graphMin = startFromZero ? 0 : Math.floor(minValue / (1 * Math.pow(10, rangeOrderOfMagnitude))) * Math.pow(10, rangeOrderOfMagnitude), graphRange = graphMax - graphMin, stepValue = Math.pow(10, rangeOrderOfMagnitude), numberOfSteps = Math.round(graphRange / stepValue); (numberOfSteps > maxSteps || maxSteps > 2 * numberOfSteps) && !skipFitting;) {
      if (numberOfSteps > maxSteps) stepValue *= 2, numberOfSteps = Math.round(graphRange / stepValue), numberOfSteps % 1 !== 0 && (skipFitting = !0);else if (integersOnly && rangeOrderOfMagnitude >= 0) {
        if (stepValue / 2 % 1 !== 0) break;stepValue /= 2, numberOfSteps = Math.round(graphRange / stepValue);
      } else stepValue /= 2, numberOfSteps = Math.round(graphRange / stepValue);
    }return skipFitting && (numberOfSteps = minSteps, stepValue = graphRange / numberOfSteps), { steps: numberOfSteps, stepValue: stepValue, min: graphMin, max: graphMin + numberOfSteps * stepValue };
  }, helpers.template = function (templateString, valuesObject) {
    function tmpl(str, data) {
      var fn = /\W/.test(str) ? new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" + str.replace(/[\r\t\n]/g, " ").split("<%").join("	").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("	").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');") : cache[str] = cache[str];return data ? fn(data) : fn;
    }if (templateString instanceof Function) return templateString(valuesObject);var cache = {};return tmpl(templateString, valuesObject);
  }),
      easingEffects = (helpers.generateLabels = function (templateString, numberOfSteps, graphMin, stepValue) {
    var labelsArray = new Array(numberOfSteps);return labelTemplateString && each(labelsArray, function (val, index) {
      labelsArray[index] = template(templateString, { value: graphMin + stepValue * (index + 1) });
    }), labelsArray;
  }, helpers.easingEffects = { linear: function linear(t) {
      return t;
    }, easeInQuad: function easeInQuad(t) {
      return t * t;
    }, easeOutQuad: function easeOutQuad(t) {
      return -1 * t * (t - 2);
    }, easeInOutQuad: function easeInOutQuad(t) {
      return (t /= .5) < 1 ? .5 * t * t : -0.5 * (--t * (t - 2) - 1);
    }, easeInCubic: function easeInCubic(t) {
      return t * t * t;
    }, easeOutCubic: function easeOutCubic(t) {
      return 1 * ((t = t / 1 - 1) * t * t + 1);
    }, easeInOutCubic: function easeInOutCubic(t) {
      return (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2);
    }, easeInQuart: function easeInQuart(t) {
      return t * t * t * t;
    }, easeOutQuart: function easeOutQuart(t) {
      return -1 * ((t = t / 1 - 1) * t * t * t - 1);
    }, easeInOutQuart: function easeInOutQuart(t) {
      return (t /= .5) < 1 ? .5 * t * t * t * t : -0.5 * ((t -= 2) * t * t * t - 2);
    }, easeInQuint: function easeInQuint(t) {
      return 1 * (t /= 1) * t * t * t * t;
    }, easeOutQuint: function easeOutQuint(t) {
      return 1 * ((t = t / 1 - 1) * t * t * t * t + 1);
    }, easeInOutQuint: function easeInOutQuint(t) {
      return (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2);
    }, easeInSine: function easeInSine(t) {
      return -1 * Math.cos(t / 1 * (Math.PI / 2)) + 1;
    }, easeOutSine: function easeOutSine(t) {
      return 1 * Math.sin(t / 1 * (Math.PI / 2));
    }, easeInOutSine: function easeInOutSine(t) {
      return -0.5 * (Math.cos(Math.PI * t / 1) - 1);
    }, easeInExpo: function easeInExpo(t) {
      return 0 === t ? 1 : 1 * Math.pow(2, 10 * (t / 1 - 1));
    }, easeOutExpo: function easeOutExpo(t) {
      return 1 === t ? 1 : 1 * (-Math.pow(2, -10 * t / 1) + 1);
    }, easeInOutExpo: function easeInOutExpo(t) {
      return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (-Math.pow(2, -10 * --t) + 2);
    }, easeInCirc: function easeInCirc(t) {
      return t >= 1 ? t : -1 * (Math.sqrt(1 - (t /= 1) * t) - 1);
    }, easeOutCirc: function easeOutCirc(t) {
      return 1 * Math.sqrt(1 - (t = t / 1 - 1) * t);
    }, easeInOutCirc: function easeInOutCirc(t) {
      return (t /= .5) < 1 ? -0.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
    }, easeInElastic: function easeInElastic(t) {
      var s = 1.70158,
          p = 0,
          a = 1;return 0 === t ? 0 : 1 == (t /= 1) ? 1 : (p || (p = .3), a < Math.abs(1) ? (a = 1, s = p / 4) : s = p / (2 * Math.PI) * Math.asin(1 / a), -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (1 * t - s) * Math.PI / p)));
    }, easeOutElastic: function easeOutElastic(t) {
      var s = 1.70158,
          p = 0,
          a = 1;return 0 === t ? 0 : 1 == (t /= 1) ? 1 : (p || (p = .3), a < Math.abs(1) ? (a = 1, s = p / 4) : s = p / (2 * Math.PI) * Math.asin(1 / a), a * Math.pow(2, -10 * t) * Math.sin(2 * (1 * t - s) * Math.PI / p) + 1);
    }, easeInOutElastic: function easeInOutElastic(t) {
      var s = 1.70158,
          p = 0,
          a = 1;return 0 === t ? 0 : 2 == (t /= .5) ? 1 : (p || (p = .3 * 1.5), a < Math.abs(1) ? (a = 1, s = p / 4) : s = p / (2 * Math.PI) * Math.asin(1 / a), 1 > t ? -.5 * a * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (1 * t - s) * Math.PI / p) : a * Math.pow(2, -10 * (t -= 1)) * Math.sin(2 * (1 * t - s) * Math.PI / p) * .5 + 1);
    }, easeInBack: function easeInBack(t) {
      var s = 1.70158;return 1 * (t /= 1) * t * ((s + 1) * t - s);
    }, easeOutBack: function easeOutBack(t) {
      var s = 1.70158;return 1 * ((t = t / 1 - 1) * t * ((s + 1) * t + s) + 1);
    }, easeInOutBack: function easeInOutBack(t) {
      var s = 1.70158;return (t /= .5) < 1 ? .5 * t * t * (((s *= 1.525) + 1) * t - s) : .5 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2);
    }, easeInBounce: function easeInBounce(t) {
      return 1 - easingEffects.easeOutBounce(1 - t);
    }, easeOutBounce: function easeOutBounce(t) {
      return (t /= 1) < 1 / 2.75 ? 7.5625 * t * t : 2 / 2.75 > t ? 1 * (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 * (7.5625 * (t -= 2.625 / 2.75) * t + .984375);
    }, easeInOutBounce: function easeInOutBounce(t) {
      return .5 > t ? .5 * easingEffects.easeInBounce(2 * t) : .5 * easingEffects.easeOutBounce(2 * t - 1) + .5;
    } }),
      requestAnimFrame = helpers.requestAnimFrame = function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
      return window.setTimeout(callback, 1e3 / 60);
    };
  }(),
      addEvent = (helpers.cancelAnimFrame = function () {
    return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame || function (callback) {
      return window.clearTimeout(callback, 1e3 / 60);
    };
  }(), helpers.animationLoop = function (callback, totalSteps, easingString, onProgress, onComplete, chartInstance) {
    var currentStep = 0,
        easingFunction = easingEffects[easingString] || easingEffects.linear,
        animationFrame = function animationFrame() {
      currentStep++;var stepDecimal = currentStep / totalSteps,
          easeDecimal = easingFunction(stepDecimal);callback.call(chartInstance, easeDecimal, stepDecimal, currentStep), onProgress.call(chartInstance, easeDecimal, stepDecimal), totalSteps > currentStep ? chartInstance.animationFrame = requestAnimFrame(animationFrame) : onComplete.apply(chartInstance);
    };requestAnimFrame(animationFrame);
  }, helpers.getRelativePosition = function (evt) {
    var mouseX,
        mouseY,
        e = evt.originalEvent || evt,
        canvas = evt.currentTarget || evt.srcElement,
        boundingRect = canvas.getBoundingClientRect();return e.touches ? (mouseX = e.touches[0].clientX - boundingRect.left, mouseY = e.touches[0].clientY - boundingRect.top) : (mouseX = e.clientX - boundingRect.left, mouseY = e.clientY - boundingRect.top), { x: mouseX, y: mouseY };
  }, helpers.addEvent = function (node, eventType, method) {
    node.addEventListener ? node.addEventListener(eventType, method) : node.attachEvent ? node.attachEvent("on" + eventType, method) : node["on" + eventType] = method;
  }),
      removeEvent = helpers.removeEvent = function (node, eventType, handler) {
    node.removeEventListener ? node.removeEventListener(eventType, handler, !1) : node.detachEvent ? node.detachEvent("on" + eventType, handler) : node["on" + eventType] = noop;
  },
      unbindEvents = (helpers.bindEvents = function (chartInstance, arrayOfEvents, handler) {
    chartInstance.events || (chartInstance.events = {}), each(arrayOfEvents, function (eventName) {
      chartInstance.events[eventName] = function () {
        handler.apply(chartInstance, arguments);
      }, addEvent(chartInstance.chart.canvas, eventName, chartInstance.events[eventName]);
    });
  }, helpers.unbindEvents = function (chartInstance, arrayOfEvents) {
    each(arrayOfEvents, function (handler, eventName) {
      removeEvent(chartInstance.chart.canvas, eventName, handler);
    });
  }),
      getMaximumWidth = helpers.getMaximumWidth = function (domNode) {
    var container = domNode.parentNode;return container.clientWidth;
  },
      getMaximumHeight = helpers.getMaximumHeight = function (domNode) {
    var container = domNode.parentNode;return container.clientHeight;
  },
      retinaScale = (helpers.getMaximumSize = helpers.getMaximumWidth, helpers.retinaScale = function (chart) {
    var ctx = chart.ctx,
        width = chart.canvas.width,
        height = chart.canvas.height;window.devicePixelRatio && (ctx.canvas.style.width = width + "px", ctx.canvas.style.height = height + "px", ctx.canvas.height = height * window.devicePixelRatio, ctx.canvas.width = width * window.devicePixelRatio, ctx.scale(window.devicePixelRatio, window.devicePixelRatio));
  }),
      _clear = helpers.clear = function (chart) {
    chart.ctx.clearRect(0, 0, chart.width, chart.height);
  },
      fontString = helpers.fontString = function (pixelSize, fontStyle, fontFamily) {
    return fontStyle + " " + pixelSize + "px " + fontFamily;
  },
      longestText = helpers.longestText = function (ctx, font, arrayOfStrings) {
    ctx.font = font;var longest = 0;return each(arrayOfStrings, function (string) {
      var textWidth = ctx.measureText(string).width;longest = textWidth > longest ? textWidth : longest;
    }), longest;
  },
      drawRoundedRectangle = helpers.drawRoundedRectangle = function (ctx, x, y, width, height, radius) {
    ctx.beginPath(), ctx.moveTo(x + radius, y), ctx.lineTo(x + width - radius, y), ctx.quadraticCurveTo(x + width, y, x + width, y + radius), ctx.lineTo(x + width, y + height - radius), ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height), ctx.lineTo(x + radius, y + height), ctx.quadraticCurveTo(x, y + height, x, y + height - radius), ctx.lineTo(x, y + radius), ctx.quadraticCurveTo(x, y, x + radius, y), ctx.closePath();
  };Chart.instances = {}, Chart.Type = function (data, options, chart) {
    this.options = options, this.chart = chart, this.id = uid(), Chart.instances[this.id] = this, options.responsive && this.resize(), this.initialize.call(this, data);
  }, extend(Chart.Type.prototype, { initialize: function initialize() {
      return this;
    }, clear: function clear() {
      return _clear(this.chart), this;
    }, stop: function stop() {
      return helpers.cancelAnimFrame.call(root, this.animationFrame), this;
    }, resize: function resize(callback) {
      this.stop();var canvas = this.chart.canvas,
          newWidth = getMaximumWidth(this.chart.canvas),
          newHeight = this.options.maintainAspectRatio ? newWidth / this.chart.aspectRatio : getMaximumHeight(this.chart.canvas);return canvas.width = this.chart.width = newWidth, canvas.height = this.chart.height = newHeight, retinaScale(this.chart), "function" == typeof callback && callback.apply(this, Array.prototype.slice.call(arguments, 1)), this;
    }, reflow: noop, render: function render(reflow) {
      return reflow && this.reflow(), this.options.animation && !reflow ? helpers.animationLoop(this.draw, this.options.animationSteps, this.options.animationEasing, this.options.onAnimationProgress, this.options.onAnimationComplete, this) : (this.draw(), this.options.onAnimationComplete.call(this)), this;
    }, generateLegend: function generateLegend() {
      return template(this.options.legendTemplate, this);
    }, destroy: function destroy() {
      this.clear(), unbindEvents(this, this.events);var canvas = this.chart.canvas;canvas.width = this.chart.width, canvas.height = this.chart.height, canvas.style.removeProperty ? (canvas.style.removeProperty("width"), canvas.style.removeProperty("height")) : (canvas.style.removeAttribute("width"), canvas.style.removeAttribute("height")), delete Chart.instances[this.id];
    }, showTooltip: function showTooltip(ChartElements, forceRedraw) {
      "undefined" == typeof this.activeElements && (this.activeElements = []);var isChanged = function (Elements) {
        var changed = !1;return Elements.length !== this.activeElements.length ? changed = !0 : (each(Elements, function (element, index) {
          element !== this.activeElements[index] && (changed = !0);
        }, this), changed);
      }.call(this, ChartElements);if (isChanged || forceRedraw) {
        if (this.activeElements = ChartElements, this.draw(), this.options.customTooltips && this.options.customTooltips(!1), ChartElements.length > 0) if (this.datasets && this.datasets.length > 1) {
          for (var dataArray, dataIndex, i = this.datasets.length - 1; i >= 0 && (dataArray = this.datasets[i].points || this.datasets[i].bars || this.datasets[i].segments, dataIndex = indexOf(dataArray, ChartElements[0]), -1 === dataIndex); i--) {}var tooltipLabels = [],
              tooltipColors = [],
              medianPosition = function () {
            var dataCollection,
                xMax,
                yMax,
                xMin,
                yMin,
                Elements = [],
                xPositions = [],
                yPositions = [];return helpers.each(this.datasets, function (dataset) {
              dataCollection = dataset.points || dataset.bars || dataset.segments, dataCollection[dataIndex] && dataCollection[dataIndex].hasValue() && Elements.push(dataCollection[dataIndex]);
            }), helpers.each(Elements, function (element) {
              xPositions.push(element.x), yPositions.push(element.y), tooltipLabels.push(helpers.template(this.options.multiTooltipTemplate, element)), tooltipColors.push({ fill: element._saved.fillColor || element.fillColor, stroke: element._saved.strokeColor || element.strokeColor });
            }, this), yMin = min(yPositions), yMax = max(yPositions), xMin = min(xPositions), xMax = max(xPositions), { x: xMin > this.chart.width / 2 ? xMin : xMax, y: (yMin + yMax) / 2 };
          }.call(this, dataIndex);new Chart.MultiTooltip({ x: medianPosition.x, y: medianPosition.y, xPadding: this.options.tooltipXPadding, yPadding: this.options.tooltipYPadding, xOffset: this.options.tooltipXOffset, fillColor: this.options.tooltipFillColor, textColor: this.options.tooltipFontColor, fontFamily: this.options.tooltipFontFamily, fontStyle: this.options.tooltipFontStyle, fontSize: this.options.tooltipFontSize, titleTextColor: this.options.tooltipTitleFontColor, titleFontFamily: this.options.tooltipTitleFontFamily, titleFontStyle: this.options.tooltipTitleFontStyle, titleFontSize: this.options.tooltipTitleFontSize, cornerRadius: this.options.tooltipCornerRadius, labels: tooltipLabels, legendColors: tooltipColors, legendColorBackground: this.options.multiTooltipKeyBackground, title: ChartElements[0].label, chart: this.chart, ctx: this.chart.ctx, custom: this.options.customTooltips }).draw();
        } else each(ChartElements, function (Element) {
          var tooltipPosition = Element.tooltipPosition();new Chart.Tooltip({ x: Math.round(tooltipPosition.x), y: Math.round(tooltipPosition.y), xPadding: this.options.tooltipXPadding, yPadding: this.options.tooltipYPadding, fillColor: this.options.tooltipFillColor, textColor: this.options.tooltipFontColor, fontFamily: this.options.tooltipFontFamily, fontStyle: this.options.tooltipFontStyle, fontSize: this.options.tooltipFontSize, caretHeight: this.options.tooltipCaretSize, cornerRadius: this.options.tooltipCornerRadius, text: template(this.options.tooltipTemplate, Element), chart: this.chart, custom: this.options.customTooltips }).draw();
        }, this);return this;
      }
    }, toBase64Image: function toBase64Image() {
      return this.chart.canvas.toDataURL.apply(this.chart.canvas, arguments);
    } }), Chart.Type.extend = function (extensions) {
    var parent = this,
        ChartType = function ChartType() {
      return parent.apply(this, arguments);
    };if (ChartType.prototype = clone(parent.prototype), extend(ChartType.prototype, extensions), ChartType.extend = Chart.Type.extend, extensions.name || parent.prototype.name) {
      var chartName = extensions.name || parent.prototype.name,
          baseDefaults = Chart.defaults[parent.prototype.name] ? clone(Chart.defaults[parent.prototype.name]) : {};Chart.defaults[chartName] = extend(baseDefaults, extensions.defaults), Chart.types[chartName] = ChartType, Chart.prototype[chartName] = function (data, options) {
        var config = merge(Chart.defaults.global, Chart.defaults[chartName], options || {});return new ChartType(data, config, this);
      };
    } else warn("Name not provided for this chart, so it hasn't been registered");return parent;
  }, Chart.Element = function (configuration) {
    extend(this, configuration), this.initialize.apply(this, arguments), this.save();
  }, extend(Chart.Element.prototype, { initialize: function initialize() {}, restore: function restore(props) {
      return props ? each(props, function (key) {
        this[key] = this._saved[key];
      }, this) : extend(this, this._saved), this;
    }, save: function save() {
      return this._saved = clone(this), delete this._saved._saved, this;
    }, update: function update(newProps) {
      return each(newProps, function (value, key) {
        this._saved[key] = this[key], this[key] = value;
      }, this), this;
    }, transition: function transition(props, ease) {
      return each(props, function (value, key) {
        this[key] = (value - this._saved[key]) * ease + this._saved[key];
      }, this), this;
    }, tooltipPosition: function tooltipPosition() {
      return { x: this.x, y: this.y };
    }, hasValue: function hasValue() {
      return isNumber(this.value);
    } }), Chart.Element.extend = inherits, Chart.Point = Chart.Element.extend({ display: !0, inRange: function inRange(chartX, chartY) {
      var hitDetectionRange = this.hitDetectionRadius + this.radius;return Math.pow(chartX - this.x, 2) + Math.pow(chartY - this.y, 2) < Math.pow(hitDetectionRange, 2);
    }, draw: function draw() {
      if (this.display) {
        var ctx = this.ctx;ctx.beginPath(), ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI), ctx.closePath(), ctx.strokeStyle = this.strokeColor, ctx.lineWidth = this.strokeWidth, ctx.fillStyle = this.fillColor, ctx.fill(), ctx.stroke();
      }
    } }), Chart.Arc = Chart.Element.extend({ inRange: function inRange(chartX, chartY) {
      var pointRelativePosition = helpers.getAngleFromPoint(this, { x: chartX, y: chartY }),
          betweenAngles = pointRelativePosition.angle >= this.startAngle && pointRelativePosition.angle <= this.endAngle,
          withinRadius = pointRelativePosition.distance >= this.innerRadius && pointRelativePosition.distance <= this.outerRadius;
      return betweenAngles && withinRadius;
    }, tooltipPosition: function tooltipPosition() {
      var centreAngle = this.startAngle + (this.endAngle - this.startAngle) / 2,
          rangeFromCentre = (this.outerRadius - this.innerRadius) / 2 + this.innerRadius;return { x: this.x + Math.cos(centreAngle) * rangeFromCentre, y: this.y + Math.sin(centreAngle) * rangeFromCentre };
    }, draw: function draw(animationPercent) {
      var ctx = this.ctx;ctx.beginPath(), ctx.arc(this.x, this.y, this.outerRadius, this.startAngle, this.endAngle), ctx.arc(this.x, this.y, this.innerRadius, this.endAngle, this.startAngle, !0), ctx.closePath(), ctx.strokeStyle = this.strokeColor, ctx.lineWidth = this.strokeWidth, ctx.fillStyle = this.fillColor, ctx.fill(), ctx.lineJoin = "bevel", this.showStroke && ctx.stroke();
    } }), Chart.Rectangle = Chart.Element.extend({ draw: function draw() {
      var ctx = this.ctx,
          halfWidth = this.width / 2,
          leftX = this.x - halfWidth,
          rightX = this.x + halfWidth,
          top = this.base - (this.base - this.y),
          halfStroke = this.strokeWidth / 2;this.showStroke && (leftX += halfStroke, rightX -= halfStroke, top += halfStroke), ctx.beginPath(), ctx.fillStyle = this.fillColor, ctx.strokeStyle = this.strokeColor, ctx.lineWidth = this.strokeWidth, ctx.moveTo(leftX, this.base), ctx.lineTo(leftX, top), ctx.lineTo(rightX, top), ctx.lineTo(rightX, this.base), ctx.fill(), this.showStroke && ctx.stroke();
    }, height: function height() {
      return this.base - this.y;
    }, inRange: function inRange(chartX, chartY) {
      return chartX >= this.x - this.width / 2 && chartX <= this.x + this.width / 2 && chartY >= this.y && chartY <= this.base;
    } }), Chart.Tooltip = Chart.Element.extend({ draw: function draw() {
      var ctx = this.chart.ctx;ctx.font = fontString(this.fontSize, this.fontStyle, this.fontFamily), this.xAlign = "center", this.yAlign = "above";var caretPadding = this.caretPadding = 2,
          tooltipWidth = ctx.measureText(this.text).width + 2 * this.xPadding,
          tooltipRectHeight = this.fontSize + 2 * this.yPadding,
          tooltipHeight = tooltipRectHeight + this.caretHeight + caretPadding;this.x + tooltipWidth / 2 > this.chart.width ? this.xAlign = "left" : this.x - tooltipWidth / 2 < 0 && (this.xAlign = "right"), this.y - tooltipHeight < 0 && (this.yAlign = "below");var tooltipX = this.x - tooltipWidth / 2,
          tooltipY = this.y - tooltipHeight;if (ctx.fillStyle = this.fillColor, this.custom) this.custom(this);else {
        switch (this.yAlign) {case "above":
            ctx.beginPath(), ctx.moveTo(this.x, this.y - caretPadding), ctx.lineTo(this.x + this.caretHeight, this.y - (caretPadding + this.caretHeight)), ctx.lineTo(this.x - this.caretHeight, this.y - (caretPadding + this.caretHeight)), ctx.closePath(), ctx.fill();break;case "below":
            tooltipY = this.y + caretPadding + this.caretHeight, ctx.beginPath(), ctx.moveTo(this.x, this.y + caretPadding), ctx.lineTo(this.x + this.caretHeight, this.y + caretPadding + this.caretHeight), ctx.lineTo(this.x - this.caretHeight, this.y + caretPadding + this.caretHeight), ctx.closePath(), ctx.fill();}switch (this.xAlign) {case "left":
            tooltipX = this.x - tooltipWidth + (this.cornerRadius + this.caretHeight);break;case "right":
            tooltipX = this.x - (this.cornerRadius + this.caretHeight);}drawRoundedRectangle(ctx, tooltipX, tooltipY, tooltipWidth, tooltipRectHeight, this.cornerRadius), ctx.fill(), ctx.fillStyle = this.textColor, ctx.textAlign = "center", ctx.textBaseline = "middle", ctx.fillText(this.text, tooltipX + tooltipWidth / 2, tooltipY + tooltipRectHeight / 2);
      }
    } }), Chart.MultiTooltip = Chart.Element.extend({ initialize: function initialize() {
      this.font = fontString(this.fontSize, this.fontStyle, this.fontFamily), this.titleFont = fontString(this.titleFontSize, this.titleFontStyle, this.titleFontFamily), this.height = this.labels.length * this.fontSize + (this.labels.length - 1) * (this.fontSize / 2) + 2 * this.yPadding + 1.5 * this.titleFontSize, this.ctx.font = this.titleFont;var titleWidth = this.ctx.measureText(this.title).width,
          labelWidth = longestText(this.ctx, this.font, this.labels) + this.fontSize + 3,
          longestTextWidth = max([labelWidth, titleWidth]);this.width = longestTextWidth + 2 * this.xPadding;var halfHeight = this.height / 2;this.y - halfHeight < 0 ? this.y = halfHeight : this.y + halfHeight > this.chart.height && (this.y = this.chart.height - halfHeight), this.x > this.chart.width / 2 ? this.x -= this.xOffset + this.width : this.x += this.xOffset;
    }, getLineHeight: function getLineHeight(index) {
      var baseLineHeight = this.y - this.height / 2 + this.yPadding,
          afterTitleIndex = index - 1;return 0 === index ? baseLineHeight + this.titleFontSize / 2 : baseLineHeight + (1.5 * this.fontSize * afterTitleIndex + this.fontSize / 2) + 1.5 * this.titleFontSize;
    }, draw: function draw() {
      if (this.custom) this.custom(this);else {
        drawRoundedRectangle(this.ctx, this.x, this.y - this.height / 2, this.width, this.height, this.cornerRadius);var ctx = this.ctx;ctx.fillStyle = this.fillColor, ctx.fill(), ctx.closePath(), ctx.textAlign = "left", ctx.textBaseline = "middle", ctx.fillStyle = this.titleTextColor, ctx.font = this.titleFont, ctx.fillText(this.title, this.x + this.xPadding, this.getLineHeight(0)), ctx.font = this.font, helpers.each(this.labels, function (label, index) {
          ctx.fillStyle = this.textColor, ctx.fillText(label, this.x + this.xPadding + this.fontSize + 3, this.getLineHeight(index + 1)), ctx.fillStyle = this.legendColorBackground, ctx.fillRect(this.x + this.xPadding, this.getLineHeight(index + 1) - this.fontSize / 2, this.fontSize, this.fontSize), ctx.fillStyle = this.legendColors[index].fill, ctx.fillRect(this.x + this.xPadding, this.getLineHeight(index + 1) - this.fontSize / 2, this.fontSize, this.fontSize);
        }, this);
      }
    } }), Chart.Scale = Chart.Element.extend({ initialize: function initialize() {
      this.fit();
    }, buildYLabels: function buildYLabels() {
      this.yLabels = [];for (var stepDecimalPlaces = getDecimalPlaces(this.stepValue), i = 0; i <= this.steps; i++) {
        this.yLabels.push(template(this.templateString, { value: (this.min + i * this.stepValue).toFixed(stepDecimalPlaces) }));
      }this.yLabelWidth = this.display && this.showLabels ? longestText(this.ctx, this.font, this.yLabels) : 0;
    }, addXLabel: function addXLabel(label) {
      this.xLabels.push(label), this.valuesCount++, this.fit();
    }, removeXLabel: function removeXLabel() {
      this.xLabels.shift(), this.valuesCount--, this.fit();
    }, fit: function fit() {
      this.startPoint = this.display ? this.fontSize : 0, this.endPoint = this.display ? this.height - 1.5 * this.fontSize - 5 : this.height, this.startPoint += this.padding, this.endPoint -= this.padding;var cachedYLabelWidth,
          cachedHeight = this.endPoint - this.startPoint;for (this.calculateYRange(cachedHeight), this.buildYLabels(), this.calculateXLabelRotation(); cachedHeight > this.endPoint - this.startPoint;) {
        cachedHeight = this.endPoint - this.startPoint, cachedYLabelWidth = this.yLabelWidth, this.calculateYRange(cachedHeight), this.buildYLabels(), cachedYLabelWidth < this.yLabelWidth && this.calculateXLabelRotation();
      }
    }, calculateXLabelRotation: function calculateXLabelRotation() {
      this.ctx.font = this.font;var firstRotated,
          lastRotated,
          firstWidth = this.ctx.measureText(this.xLabels[0]).width,
          lastWidth = this.ctx.measureText(this.xLabels[this.xLabels.length - 1]).width;if (this.xScalePaddingRight = lastWidth / 2 + 3, this.xScalePaddingLeft = firstWidth / 2 > this.yLabelWidth + 10 ? firstWidth / 2 : this.yLabelWidth + 10, this.xLabelRotation = 0, this.display) {
        var cosRotation,
            originalLabelWidth = longestText(this.ctx, this.font, this.xLabels);this.xLabelWidth = originalLabelWidth;for (var xGridWidth = Math.floor(this.calculateX(1) - this.calculateX(0)) - 6; this.xLabelWidth > xGridWidth && 0 === this.xLabelRotation || this.xLabelWidth > xGridWidth && this.xLabelRotation <= 90 && this.xLabelRotation > 0;) {
          cosRotation = Math.cos(toRadians(this.xLabelRotation)), firstRotated = cosRotation * firstWidth, lastRotated = cosRotation * lastWidth, firstRotated + this.fontSize / 2 > this.yLabelWidth + 8 && (this.xScalePaddingLeft = firstRotated + this.fontSize / 2), this.xScalePaddingRight = this.fontSize / 2, this.xLabelRotation++, this.xLabelWidth = cosRotation * originalLabelWidth;
        }this.xLabelRotation > 0 && (this.endPoint -= Math.sin(toRadians(this.xLabelRotation)) * originalLabelWidth + 3);
      } else this.xLabelWidth = 0, this.xScalePaddingRight = this.padding, this.xScalePaddingLeft = this.padding;
    }, calculateYRange: noop, drawingArea: function drawingArea() {
      return this.startPoint - this.endPoint;
    }, calculateY: function calculateY(value) {
      var scalingFactor = this.drawingArea() / (this.min - this.max);return this.endPoint - scalingFactor * (value - this.min);
    }, calculateX: function calculateX(index) {
      var innerWidth = (this.xLabelRotation > 0, this.width - (this.xScalePaddingLeft + this.xScalePaddingRight)),
          valueWidth = innerWidth / (this.valuesCount - (this.offsetGridLines ? 0 : 1)),
          valueOffset = valueWidth * index + this.xScalePaddingLeft;return this.offsetGridLines && (valueOffset += valueWidth / 2), Math.round(valueOffset);
    }, update: function update(newProps) {
      helpers.extend(this, newProps), this.fit();
    }, draw: function draw() {
      var ctx = this.ctx,
          yLabelGap = (this.endPoint - this.startPoint) / this.steps,
          xStart = Math.round(this.xScalePaddingLeft);this.display && (ctx.fillStyle = this.textColor, ctx.font = this.font, each(this.yLabels, function (labelString, index) {
        var yLabelCenter = this.endPoint - yLabelGap * index,
            linePositionY = Math.round(yLabelCenter),
            drawHorizontalLine = this.showHorizontalLines;ctx.textAlign = "right", ctx.textBaseline = "middle", this.showLabels && ctx.fillText(labelString, xStart - 10, yLabelCenter), 0 !== index || drawHorizontalLine || (drawHorizontalLine = !0), drawHorizontalLine && ctx.beginPath(), index > 0 ? (ctx.lineWidth = this.gridLineWidth, ctx.strokeStyle = this.gridLineColor) : (ctx.lineWidth = this.lineWidth, ctx.strokeStyle = this.lineColor), linePositionY += helpers.aliasPixel(ctx.lineWidth), drawHorizontalLine && (ctx.moveTo(xStart, linePositionY), ctx.lineTo(this.width, linePositionY), ctx.stroke(), ctx.closePath()), ctx.lineWidth = this.lineWidth, ctx.strokeStyle = this.lineColor, ctx.beginPath(), ctx.moveTo(xStart - 5, linePositionY), ctx.lineTo(xStart, linePositionY), ctx.stroke(), ctx.closePath();
      }, this), each(this.xLabels, function (label, index) {
        var xPos = this.calculateX(index) + aliasPixel(this.lineWidth),
            linePos = this.calculateX(index - (this.offsetGridLines ? .5 : 0)) + aliasPixel(this.lineWidth),
            isRotated = this.xLabelRotation > 0,
            drawVerticalLine = this.showVerticalLines;0 !== index || drawVerticalLine || (drawVerticalLine = !0), drawVerticalLine && ctx.beginPath(), index > 0 ? (ctx.lineWidth = this.gridLineWidth, ctx.strokeStyle = this.gridLineColor) : (ctx.lineWidth = this.lineWidth, ctx.strokeStyle = this.lineColor), drawVerticalLine && (ctx.moveTo(linePos, this.endPoint), ctx.lineTo(linePos, this.startPoint - 3), ctx.stroke(), ctx.closePath()), ctx.lineWidth = this.lineWidth, ctx.strokeStyle = this.lineColor, ctx.beginPath(), ctx.moveTo(linePos, this.endPoint), ctx.lineTo(linePos, this.endPoint + 5), ctx.stroke(), ctx.closePath(), ctx.save(), ctx.translate(xPos, isRotated ? this.endPoint + 12 : this.endPoint + 8), ctx.rotate(-1 * toRadians(this.xLabelRotation)), ctx.font = this.font, ctx.textAlign = isRotated ? "right" : "center", ctx.textBaseline = isRotated ? "middle" : "top", ctx.fillText(label, 0, 0), ctx.restore();
      }, this));
    } }), Chart.RadialScale = Chart.Element.extend({ initialize: function initialize() {
      this.size = min([this.height, this.width]), this.drawingArea = this.display ? this.size / 2 - (this.fontSize / 2 + this.backdropPaddingY) : this.size / 2;
    }, calculateCenterOffset: function calculateCenterOffset(value) {
      var scalingFactor = this.drawingArea / (this.max - this.min);return (value - this.min) * scalingFactor;
    }, update: function update() {
      this.lineArc ? this.drawingArea = this.display ? this.size / 2 - (this.fontSize / 2 + this.backdropPaddingY) : this.size / 2 : this.setScaleSize(), this.buildYLabels();
    }, buildYLabels: function buildYLabels() {
      this.yLabels = [];for (var stepDecimalPlaces = getDecimalPlaces(this.stepValue), i = 0; i <= this.steps; i++) {
        this.yLabels.push(template(this.templateString, { value: (this.min + i * this.stepValue).toFixed(stepDecimalPlaces) }));
      }
    }, getCircumference: function getCircumference() {
      return 2 * Math.PI / this.valuesCount;
    }, setScaleSize: function setScaleSize() {
      var pointPosition,
          i,
          textWidth,
          halfTextWidth,
          furthestRightIndex,
          furthestRightAngle,
          furthestLeftIndex,
          furthestLeftAngle,
          xProtrusionLeft,
          xProtrusionRight,
          radiusReductionRight,
          radiusReductionLeft,
          largestPossibleRadius = min([this.height / 2 - this.pointLabelFontSize - 5, this.width / 2]),
          furthestRight = this.width,
          furthestLeft = 0;for (this.ctx.font = fontString(this.pointLabelFontSize, this.pointLabelFontStyle, this.pointLabelFontFamily), i = 0; i < this.valuesCount; i++) {
        pointPosition = this.getPointPosition(i, largestPossibleRadius), textWidth = this.ctx.measureText(template(this.templateString, { value: this.labels[i] })).width + 5, 0 === i || i === this.valuesCount / 2 ? (halfTextWidth = textWidth / 2, pointPosition.x + halfTextWidth > furthestRight && (furthestRight = pointPosition.x + halfTextWidth, furthestRightIndex = i), pointPosition.x - halfTextWidth < furthestLeft && (furthestLeft = pointPosition.x - halfTextWidth, furthestLeftIndex = i)) : i < this.valuesCount / 2 ? pointPosition.x + textWidth > furthestRight && (furthestRight = pointPosition.x + textWidth, furthestRightIndex = i) : i > this.valuesCount / 2 && pointPosition.x - textWidth < furthestLeft && (furthestLeft = pointPosition.x - textWidth, furthestLeftIndex = i);
      }xProtrusionLeft = furthestLeft, xProtrusionRight = Math.ceil(furthestRight - this.width), furthestRightAngle = this.getIndexAngle(furthestRightIndex), furthestLeftAngle = this.getIndexAngle(furthestLeftIndex), radiusReductionRight = xProtrusionRight / Math.sin(furthestRightAngle + Math.PI / 2), radiusReductionLeft = xProtrusionLeft / Math.sin(furthestLeftAngle + Math.PI / 2), radiusReductionRight = isNumber(radiusReductionRight) ? radiusReductionRight : 0, radiusReductionLeft = isNumber(radiusReductionLeft) ? radiusReductionLeft : 0, this.drawingArea = largestPossibleRadius - (radiusReductionLeft + radiusReductionRight) / 2, this.setCenterPoint(radiusReductionLeft, radiusReductionRight);
    }, setCenterPoint: function setCenterPoint(leftMovement, rightMovement) {
      var maxRight = this.width - rightMovement - this.drawingArea,
          maxLeft = leftMovement + this.drawingArea;this.xCenter = (maxLeft + maxRight) / 2, this.yCenter = this.height / 2;
    }, getIndexAngle: function getIndexAngle(index) {
      var angleMultiplier = 2 * Math.PI / this.valuesCount;return index * angleMultiplier - Math.PI / 2;
    }, getPointPosition: function getPointPosition(index, distanceFromCenter) {
      var thisAngle = this.getIndexAngle(index);return { x: Math.cos(thisAngle) * distanceFromCenter + this.xCenter, y: Math.sin(thisAngle) * distanceFromCenter + this.yCenter };
    }, draw: function draw() {
      if (this.display) {
        var ctx = this.ctx;if (each(this.yLabels, function (label, index) {
          if (index > 0) {
            var pointPosition,
                yCenterOffset = index * (this.drawingArea / this.steps),
                yHeight = this.yCenter - yCenterOffset;if (this.lineWidth > 0) if (ctx.strokeStyle = this.lineColor, ctx.lineWidth = this.lineWidth, this.lineArc) ctx.beginPath(), ctx.arc(this.xCenter, this.yCenter, yCenterOffset, 0, 2 * Math.PI), ctx.closePath(), ctx.stroke();else {
              ctx.beginPath();for (var i = 0; i < this.valuesCount; i++) {
                pointPosition = this.getPointPosition(i, this.calculateCenterOffset(this.min + index * this.stepValue)), 0 === i ? ctx.moveTo(pointPosition.x, pointPosition.y) : ctx.lineTo(pointPosition.x, pointPosition.y);
              }ctx.closePath(), ctx.stroke();
            }if (this.showLabels) {
              if (ctx.font = fontString(this.fontSize, this.fontStyle, this.fontFamily), this.showLabelBackdrop) {
                var labelWidth = ctx.measureText(label).width;ctx.fillStyle = this.backdropColor, ctx.fillRect(this.xCenter - labelWidth / 2 - this.backdropPaddingX, yHeight - this.fontSize / 2 - this.backdropPaddingY, labelWidth + 2 * this.backdropPaddingX, this.fontSize + 2 * this.backdropPaddingY);
              }ctx.textAlign = "center", ctx.textBaseline = "middle", ctx.fillStyle = this.fontColor, ctx.fillText(label, this.xCenter, yHeight);
            }
          }
        }, this), !this.lineArc) {
          ctx.lineWidth = this.angleLineWidth, ctx.strokeStyle = this.angleLineColor;for (var i = this.valuesCount - 1; i >= 0; i--) {
            if (this.angleLineWidth > 0) {
              var outerPosition = this.getPointPosition(i, this.calculateCenterOffset(this.max));ctx.beginPath(), ctx.moveTo(this.xCenter, this.yCenter), ctx.lineTo(outerPosition.x, outerPosition.y), ctx.stroke(), ctx.closePath();
            }var pointLabelPosition = this.getPointPosition(i, this.calculateCenterOffset(this.max) + 5);ctx.font = fontString(this.pointLabelFontSize, this.pointLabelFontStyle, this.pointLabelFontFamily), ctx.fillStyle = this.pointLabelFontColor;var labelsCount = this.labels.length,
                halfLabelsCount = this.labels.length / 2,
                quarterLabelsCount = halfLabelsCount / 2,
                upperHalf = quarterLabelsCount > i || i > labelsCount - quarterLabelsCount,
                exactQuarter = i === quarterLabelsCount || i === labelsCount - quarterLabelsCount;ctx.textAlign = 0 === i ? "center" : i === halfLabelsCount ? "center" : halfLabelsCount > i ? "left" : "right", ctx.textBaseline = exactQuarter ? "middle" : upperHalf ? "bottom" : "top", ctx.fillText(this.labels[i], pointLabelPosition.x, pointLabelPosition.y);
          }
        }
      }
    } }), helpers.addEvent(window, "resize", function () {
    var timeout;return function () {
      clearTimeout(timeout), timeout = setTimeout(function () {
        each(Chart.instances, function (instance) {
          instance.options.responsive && instance.resize(instance.render, !0);
        });
      }, 50);
    };
  }()), amd ? !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return Chart;
  }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == ( false ? "undefined" : _typeof(module)) && module.exports && (module.exports = Chart), root.Chart = Chart, Chart.noConflict = function () {
    return root.Chart = previous, Chart;
  };
}.call(this), function () {
  "use strict";
  var root = this,
      Chart = root.Chart,
      helpers = Chart.helpers,
      defaultConfig = { scaleBeginAtZero: !0, scaleShowGridLines: !0, scaleGridLineColor: "rgba(0,0,0,.05)", scaleGridLineWidth: 1, scaleShowHorizontalLines: !0, scaleShowVerticalLines: !0, barShowStroke: !0, barStrokeWidth: 2, barValueSpacing: 5, barDatasetSpacing: 1, legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].fillColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>' };Chart.Type.extend({ name: "Bar", defaults: defaultConfig, initialize: function initialize(data) {
      var options = this.options;this.ScaleClass = Chart.Scale.extend({ offsetGridLines: !0, calculateBarX: function calculateBarX(datasetCount, datasetIndex, barIndex) {
          var xWidth = this.calculateBaseWidth(),
              xAbsolute = this.calculateX(barIndex) - xWidth / 2,
              barWidth = this.calculateBarWidth(datasetCount);return xAbsolute + barWidth * datasetIndex + datasetIndex * options.barDatasetSpacing + barWidth / 2;
        }, calculateBaseWidth: function calculateBaseWidth() {
          return this.calculateX(1) - this.calculateX(0) - 2 * options.barValueSpacing;
        }, calculateBarWidth: function calculateBarWidth(datasetCount) {
          var baseWidth = this.calculateBaseWidth() - (datasetCount - 1) * options.barDatasetSpacing;return baseWidth / datasetCount;
        } }), this.datasets = [], this.options.showTooltips && helpers.bindEvents(this, this.options.tooltipEvents, function (evt) {
        var activeBars = "mouseout" !== evt.type ? this.getBarsAtEvent(evt) : [];this.eachBars(function (bar) {
          bar.restore(["fillColor", "strokeColor"]);
        }), helpers.each(activeBars, function (activeBar) {
          activeBar.fillColor = activeBar.highlightFill, activeBar.strokeColor = activeBar.highlightStroke;
        }), this.showTooltip(activeBars);
      }), this.BarClass = Chart.Rectangle.extend({ strokeWidth: this.options.barStrokeWidth, showStroke: this.options.barShowStroke, ctx: this.chart.ctx }), helpers.each(data.datasets, function (dataset) {
        var datasetObject = { label: dataset.label || null, fillColor: dataset.fillColor, strokeColor: dataset.strokeColor, bars: [] };this.datasets.push(datasetObject), helpers.each(dataset.data, function (dataPoint, index) {
          datasetObject.bars.push(new this.BarClass({ value: dataPoint, label: data.labels[index], datasetLabel: dataset.label, strokeColor: dataset.strokeColor, fillColor: dataset.fillColor, highlightFill: dataset.highlightFill || dataset.fillColor, highlightStroke: dataset.highlightStroke || dataset.strokeColor }));
        }, this);
      }, this), this.buildScale(data.labels), this.BarClass.prototype.base = this.scale.endPoint, this.eachBars(function (bar, index, datasetIndex) {
        helpers.extend(bar, { width: this.scale.calculateBarWidth(this.datasets.length), x: this.scale.calculateBarX(this.datasets.length, datasetIndex, index), y: this.scale.endPoint }), bar.save();
      }, this), this.render();
    }, update: function update() {
      this.scale.update(), helpers.each(this.activeElements, function (activeElement) {
        activeElement.restore(["fillColor", "strokeColor"]);
      }), this.eachBars(function (bar) {
        bar.save();
      }), this.render();
    }, eachBars: function eachBars(callback) {
      helpers.each(this.datasets, function (dataset, datasetIndex) {
        helpers.each(dataset.bars, callback, this, datasetIndex);
      }, this);
    }, getBarsAtEvent: function getBarsAtEvent(e) {
      for (var barIndex, barsArray = [], eventPosition = helpers.getRelativePosition(e), datasetIterator = function datasetIterator(dataset) {
        barsArray.push(dataset.bars[barIndex]);
      }, datasetIndex = 0; datasetIndex < this.datasets.length; datasetIndex++) {
        for (barIndex = 0; barIndex < this.datasets[datasetIndex].bars.length; barIndex++) {
          if (this.datasets[datasetIndex].bars[barIndex].inRange(eventPosition.x, eventPosition.y)) return helpers.each(this.datasets, datasetIterator), barsArray;
        }
      }return barsArray;
    }, buildScale: function buildScale(labels) {
      var self = this,
          dataTotal = function dataTotal() {
        var values = [];return self.eachBars(function (bar) {
          values.push(bar.value);
        }), values;
      },
          scaleOptions = { templateString: this.options.scaleLabel, height: this.chart.height, width: this.chart.width, ctx: this.chart.ctx, textColor: this.options.scaleFontColor, fontSize: this.options.scaleFontSize, fontStyle: this.options.scaleFontStyle, fontFamily: this.options.scaleFontFamily, valuesCount: labels.length, beginAtZero: this.options.scaleBeginAtZero, integersOnly: this.options.scaleIntegersOnly, calculateYRange: function calculateYRange(currentHeight) {
          var updatedRanges = helpers.calculateScaleRange(dataTotal(), currentHeight, this.fontSize, this.beginAtZero, this.integersOnly);helpers.extend(this, updatedRanges);
        }, xLabels: labels, font: helpers.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily), lineWidth: this.options.scaleLineWidth, lineColor: this.options.scaleLineColor, showHorizontalLines: this.options.scaleShowHorizontalLines, showVerticalLines: this.options.scaleShowVerticalLines, gridLineWidth: this.options.scaleShowGridLines ? this.options.scaleGridLineWidth : 0, gridLineColor: this.options.scaleShowGridLines ? this.options.scaleGridLineColor : "rgba(0,0,0,0)", padding: this.options.showScale ? 0 : this.options.barShowStroke ? this.options.barStrokeWidth : 0, showLabels: this.options.scaleShowLabels, display: this.options.showScale };this.options.scaleOverride && helpers.extend(scaleOptions, { calculateYRange: helpers.noop, steps: this.options.scaleSteps, stepValue: this.options.scaleStepWidth, min: this.options.scaleStartValue, max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth }), this.scale = new this.ScaleClass(scaleOptions);
    }, addData: function addData(valuesArray, label) {
      helpers.each(valuesArray, function (value, datasetIndex) {
        this.datasets[datasetIndex].bars.push(new this.BarClass({ value: value, label: label, x: this.scale.calculateBarX(this.datasets.length, datasetIndex, this.scale.valuesCount + 1), y: this.scale.endPoint, width: this.scale.calculateBarWidth(this.datasets.length), base: this.scale.endPoint, strokeColor: this.datasets[datasetIndex].strokeColor, fillColor: this.datasets[datasetIndex].fillColor }));
      }, this), this.scale.addXLabel(label), this.update();
    }, removeData: function removeData() {
      this.scale.removeXLabel(), helpers.each(this.datasets, function (dataset) {
        dataset.bars.shift();
      }, this), this.update();
    }, reflow: function reflow() {
      helpers.extend(this.BarClass.prototype, { y: this.scale.endPoint, base: this.scale.endPoint });var newScaleProps = helpers.extend({ height: this.chart.height, width: this.chart.width });this.scale.update(newScaleProps);
    }, draw: function draw(ease) {
      var easingDecimal = ease || 1;this.clear();this.chart.ctx;this.scale.draw(easingDecimal), helpers.each(this.datasets, function (dataset, datasetIndex) {
        helpers.each(dataset.bars, function (bar, index) {
          bar.hasValue() && (bar.base = this.scale.endPoint, bar.transition({ x: this.scale.calculateBarX(this.datasets.length, datasetIndex, index), y: this.scale.calculateY(bar.value), width: this.scale.calculateBarWidth(this.datasets.length) }, easingDecimal).draw());
        }, this);
      }, this);
    } });
}.call(this), function () {
  "use strict";
  var root = this,
      Chart = root.Chart,
      helpers = Chart.helpers,
      defaultConfig = { segmentShowStroke: !0, segmentStrokeColor: "#fff", segmentStrokeWidth: 2, percentageInnerCutout: 50, animationSteps: 100, animationEasing: "easeOutBounce", animateRotate: !0, animateScale: !1, legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>' };Chart.Type.extend({ name: "Doughnut", defaults: defaultConfig, initialize: function initialize(data) {
      this.segments = [], this.outerRadius = (helpers.min([this.chart.width, this.chart.height]) - this.options.segmentStrokeWidth / 2) / 2, this.SegmentArc = Chart.Arc.extend({ ctx: this.chart.ctx, x: this.chart.width / 2, y: this.chart.height / 2 }), this.options.showTooltips && helpers.bindEvents(this, this.options.tooltipEvents, function (evt) {
        var activeSegments = "mouseout" !== evt.type ? this.getSegmentsAtEvent(evt) : [];helpers.each(this.segments, function (segment) {
          segment.restore(["fillColor"]);
        }), helpers.each(activeSegments, function (activeSegment) {
          activeSegment.fillColor = activeSegment.highlightColor;
        }), this.showTooltip(activeSegments);
      }), this.calculateTotal(data), helpers.each(data, function (datapoint, index) {
        this.addData(datapoint, index, !0);
      }, this), this.render();
    }, getSegmentsAtEvent: function getSegmentsAtEvent(e) {
      var segmentsArray = [],
          location = helpers.getRelativePosition(e);return helpers.each(this.segments, function (segment) {
        segment.inRange(location.x, location.y) && segmentsArray.push(segment);
      }, this), segmentsArray;
    }, addData: function addData(segment, atIndex, silent) {
      var index = atIndex || this.segments.length;this.segments.splice(index, 0, new this.SegmentArc({ value: segment.value, outerRadius: this.options.animateScale ? 0 : this.outerRadius, innerRadius: this.options.animateScale ? 0 : this.outerRadius / 100 * this.options.percentageInnerCutout, fillColor: segment.color, highlightColor: segment.highlight || segment.color, showStroke: this.options.segmentShowStroke, strokeWidth: this.options.segmentStrokeWidth, strokeColor: this.options.segmentStrokeColor, startAngle: 1.5 * Math.PI, circumference: this.options.animateRotate ? 0 : this.calculateCircumference(segment.value), label: segment.label })), silent || (this.reflow(), this.update());
    }, calculateCircumference: function calculateCircumference(value) {
      return 2 * Math.PI * (value / this.total);
    }, calculateTotal: function calculateTotal(data) {
      this.total = 0, helpers.each(data, function (segment) {
        this.total += segment.value;
      }, this);
    }, update: function update() {
      this.calculateTotal(this.segments), helpers.each(this.activeElements, function (activeElement) {
        activeElement.restore(["fillColor"]);
      }), helpers.each(this.segments, function (segment) {
        segment.save();
      }), this.render();
    }, removeData: function removeData(atIndex) {
      var indexToDelete = helpers.isNumber(atIndex) ? atIndex : this.segments.length - 1;this.segments.splice(indexToDelete, 1), this.reflow(), this.update();
    }, reflow: function reflow() {
      helpers.extend(this.SegmentArc.prototype, { x: this.chart.width / 2, y: this.chart.height / 2 }), this.outerRadius = (helpers.min([this.chart.width, this.chart.height]) - this.options.segmentStrokeWidth / 2) / 2, helpers.each(this.segments, function (segment) {
        segment.update({ outerRadius: this.outerRadius, innerRadius: this.outerRadius / 100 * this.options.percentageInnerCutout });
      }, this);
    }, draw: function draw(easeDecimal) {
      var animDecimal = easeDecimal ? easeDecimal : 1;this.clear(), helpers.each(this.segments, function (segment, index) {
        segment.transition({ circumference: this.calculateCircumference(segment.value), outerRadius: this.outerRadius, innerRadius: this.outerRadius / 100 * this.options.percentageInnerCutout }, animDecimal), segment.endAngle = segment.startAngle + segment.circumference, segment.draw(), 0 === index && (segment.startAngle = 1.5 * Math.PI), index < this.segments.length - 1 && (this.segments[index + 1].startAngle = segment.endAngle);
      }, this);
    } }), Chart.types.Doughnut.extend({ name: "Pie", defaults: helpers.merge(defaultConfig, { percentageInnerCutout: 0 }) });
}.call(this), function () {
  "use strict";
  var root = this,
      Chart = root.Chart,
      helpers = Chart.helpers,
      defaultConfig = { scaleShowGridLines: !0, scaleGridLineColor: "rgba(0,0,0,.05)", scaleGridLineWidth: 1, scaleShowHorizontalLines: !0, scaleShowVerticalLines: !0, bezierCurve: !0, bezierCurveTension: .4, pointDot: !0, pointDotRadius: 4, pointDotStrokeWidth: 1, pointHitDetectionRadius: 20, datasetStroke: !0, datasetStrokeWidth: 2, datasetFill: !0, legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>' };Chart.Type.extend({ name: "Line", defaults: defaultConfig, initialize: function initialize(data) {
      this.PointClass = Chart.Point.extend({ strokeWidth: this.options.pointDotStrokeWidth, radius: this.options.pointDotRadius, display: this.options.pointDot, hitDetectionRadius: this.options.pointHitDetectionRadius, ctx: this.chart.ctx, inRange: function inRange(mouseX) {
          return Math.pow(mouseX - this.x, 2) < Math.pow(this.radius + this.hitDetectionRadius, 2);
        } }), this.datasets = [], this.options.showTooltips && helpers.bindEvents(this, this.options.tooltipEvents, function (evt) {
        var activePoints = "mouseout" !== evt.type ? this.getPointsAtEvent(evt) : [];this.eachPoints(function (point) {
          point.restore(["fillColor", "strokeColor"]);
        }), helpers.each(activePoints, function (activePoint) {
          activePoint.fillColor = activePoint.highlightFill, activePoint.strokeColor = activePoint.highlightStroke;
        }), this.showTooltip(activePoints);
      }), helpers.each(data.datasets, function (dataset) {
        var datasetObject = { label: dataset.label || null, fillColor: dataset.fillColor, strokeColor: dataset.strokeColor, pointColor: dataset.pointColor, pointStrokeColor: dataset.pointStrokeColor, points: [] };this.datasets.push(datasetObject), helpers.each(dataset.data, function (dataPoint, index) {
          datasetObject.points.push(new this.PointClass({ value: dataPoint, label: data.labels[index], datasetLabel: dataset.label, strokeColor: dataset.pointStrokeColor, fillColor: dataset.pointColor, highlightFill: dataset.pointHighlightFill || dataset.pointColor, highlightStroke: dataset.pointHighlightStroke || dataset.pointStrokeColor }));
        }, this), this.buildScale(data.labels), this.eachPoints(function (point, index) {
          helpers.extend(point, { x: this.scale.calculateX(index), y: this.scale.endPoint }), point.save();
        }, this);
      }, this), this.render();
    }, update: function update() {
      this.scale.update(), helpers.each(this.activeElements, function (activeElement) {
        activeElement.restore(["fillColor", "strokeColor"]);
      }), this.eachPoints(function (point) {
        point.save();
      }), this.render();
    }, eachPoints: function eachPoints(callback) {
      helpers.each(this.datasets, function (dataset) {
        helpers.each(dataset.points, callback, this);
      }, this);
    }, getPointsAtEvent: function getPointsAtEvent(e) {
      var pointsArray = [],
          eventPosition = helpers.getRelativePosition(e);return helpers.each(this.datasets, function (dataset) {
        helpers.each(dataset.points, function (point) {
          point.inRange(eventPosition.x, eventPosition.y) && pointsArray.push(point);
        });
      }, this), pointsArray;
    }, buildScale: function buildScale(labels) {
      var self = this,
          dataTotal = function dataTotal() {
        var values = [];return self.eachPoints(function (point) {
          values.push(point.value);
        }), values;
      },
          scaleOptions = { templateString: this.options.scaleLabel, height: this.chart.height, width: this.chart.width, ctx: this.chart.ctx, textColor: this.options.scaleFontColor, fontSize: this.options.scaleFontSize, fontStyle: this.options.scaleFontStyle, fontFamily: this.options.scaleFontFamily, valuesCount: labels.length, beginAtZero: this.options.scaleBeginAtZero, integersOnly: this.options.scaleIntegersOnly, calculateYRange: function calculateYRange(currentHeight) {
          var updatedRanges = helpers.calculateScaleRange(dataTotal(), currentHeight, this.fontSize, this.beginAtZero, this.integersOnly);helpers.extend(this, updatedRanges);
        }, xLabels: labels, font: helpers.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily), lineWidth: this.options.scaleLineWidth, lineColor: this.options.scaleLineColor, showHorizontalLines: this.options.scaleShowHorizontalLines, showVerticalLines: this.options.scaleShowVerticalLines, gridLineWidth: this.options.scaleShowGridLines ? this.options.scaleGridLineWidth : 0, gridLineColor: this.options.scaleShowGridLines ? this.options.scaleGridLineColor : "rgba(0,0,0,0)", padding: this.options.showScale ? 0 : this.options.pointDotRadius + this.options.pointDotStrokeWidth, showLabels: this.options.scaleShowLabels, display: this.options.showScale };this.options.scaleOverride && helpers.extend(scaleOptions, { calculateYRange: helpers.noop, steps: this.options.scaleSteps, stepValue: this.options.scaleStepWidth, min: this.options.scaleStartValue, max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth }), this.scale = new Chart.Scale(scaleOptions);
    }, addData: function addData(valuesArray, label) {
      helpers.each(valuesArray, function (value, datasetIndex) {
        this.datasets[datasetIndex].points.push(new this.PointClass({ value: value, label: label, x: this.scale.calculateX(this.scale.valuesCount + 1), y: this.scale.endPoint, strokeColor: this.datasets[datasetIndex].pointStrokeColor, fillColor: this.datasets[datasetIndex].pointColor }));
      }, this), this.scale.addXLabel(label), this.update();
    }, removeData: function removeData() {
      this.scale.removeXLabel(), helpers.each(this.datasets, function (dataset) {
        dataset.points.shift();
      }, this), this.update();
    }, reflow: function reflow() {
      var newScaleProps = helpers.extend({ height: this.chart.height, width: this.chart.width });this.scale.update(newScaleProps);
    }, draw: function draw(ease) {
      var easingDecimal = ease || 1;this.clear();var ctx = this.chart.ctx,
          hasValue = function hasValue(item) {
        return null !== item.value;
      },
          nextPoint = function nextPoint(point, collection, index) {
        return helpers.findNextWhere(collection, hasValue, index) || point;
      },
          previousPoint = function previousPoint(point, collection, index) {
        return helpers.findPreviousWhere(collection, hasValue, index) || point;
      };this.scale.draw(easingDecimal), helpers.each(this.datasets, function (dataset) {
        var pointsWithValues = helpers.where(dataset.points, hasValue);
        helpers.each(dataset.points, function (point, index) {
          point.hasValue() && point.transition({ y: this.scale.calculateY(point.value), x: this.scale.calculateX(index) }, easingDecimal);
        }, this), this.options.bezierCurve && helpers.each(pointsWithValues, function (point, index) {
          var tension = index > 0 && index < pointsWithValues.length - 1 ? this.options.bezierCurveTension : 0;point.controlPoints = helpers.splineCurve(previousPoint(point, pointsWithValues, index), point, nextPoint(point, pointsWithValues, index), tension), point.controlPoints.outer.y > this.scale.endPoint ? point.controlPoints.outer.y = this.scale.endPoint : point.controlPoints.outer.y < this.scale.startPoint && (point.controlPoints.outer.y = this.scale.startPoint), point.controlPoints.inner.y > this.scale.endPoint ? point.controlPoints.inner.y = this.scale.endPoint : point.controlPoints.inner.y < this.scale.startPoint && (point.controlPoints.inner.y = this.scale.startPoint);
        }, this), ctx.lineWidth = this.options.datasetStrokeWidth, ctx.strokeStyle = dataset.strokeColor, ctx.beginPath(), helpers.each(pointsWithValues, function (point, index) {
          if (0 === index) ctx.moveTo(point.x, point.y);else if (this.options.bezierCurve) {
            var previous = previousPoint(point, pointsWithValues, index);ctx.bezierCurveTo(previous.controlPoints.outer.x, previous.controlPoints.outer.y, point.controlPoints.inner.x, point.controlPoints.inner.y, point.x, point.y);
          } else ctx.lineTo(point.x, point.y);
        }, this), ctx.stroke(), this.options.datasetFill && pointsWithValues.length > 0 && (ctx.lineTo(pointsWithValues[pointsWithValues.length - 1].x, this.scale.endPoint), ctx.lineTo(pointsWithValues[0].x, this.scale.endPoint), ctx.fillStyle = dataset.fillColor, ctx.closePath(), ctx.fill()), helpers.each(pointsWithValues, function (point) {
          point.draw();
        });
      }, this);
    } });
}.call(this), function () {
  "use strict";
  var root = this,
      Chart = root.Chart,
      helpers = Chart.helpers,
      defaultConfig = { scaleShowLabelBackdrop: !0, scaleBackdropColor: "rgba(255,255,255,0.75)", scaleBeginAtZero: !0, scaleBackdropPaddingY: 2, scaleBackdropPaddingX: 2, scaleShowLine: !0, segmentShowStroke: !0, segmentStrokeColor: "#fff", segmentStrokeWidth: 2, animationSteps: 100, animationEasing: "easeOutBounce", animateRotate: !0, animateScale: !1, legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>' };Chart.Type.extend({ name: "PolarArea", defaults: defaultConfig, initialize: function initialize(data) {
      this.segments = [], this.SegmentArc = Chart.Arc.extend({ showStroke: this.options.segmentShowStroke, strokeWidth: this.options.segmentStrokeWidth, strokeColor: this.options.segmentStrokeColor, ctx: this.chart.ctx, innerRadius: 0, x: this.chart.width / 2, y: this.chart.height / 2 }), this.scale = new Chart.RadialScale({ display: this.options.showScale, fontStyle: this.options.scaleFontStyle, fontSize: this.options.scaleFontSize, fontFamily: this.options.scaleFontFamily, fontColor: this.options.scaleFontColor, showLabels: this.options.scaleShowLabels, showLabelBackdrop: this.options.scaleShowLabelBackdrop, backdropColor: this.options.scaleBackdropColor, backdropPaddingY: this.options.scaleBackdropPaddingY, backdropPaddingX: this.options.scaleBackdropPaddingX, lineWidth: this.options.scaleShowLine ? this.options.scaleLineWidth : 0, lineColor: this.options.scaleLineColor, lineArc: !0, width: this.chart.width, height: this.chart.height, xCenter: this.chart.width / 2, yCenter: this.chart.height / 2, ctx: this.chart.ctx, templateString: this.options.scaleLabel, valuesCount: data.length }), this.updateScaleRange(data), this.scale.update(), helpers.each(data, function (segment, index) {
        this.addData(segment, index, !0);
      }, this), this.options.showTooltips && helpers.bindEvents(this, this.options.tooltipEvents, function (evt) {
        var activeSegments = "mouseout" !== evt.type ? this.getSegmentsAtEvent(evt) : [];helpers.each(this.segments, function (segment) {
          segment.restore(["fillColor"]);
        }), helpers.each(activeSegments, function (activeSegment) {
          activeSegment.fillColor = activeSegment.highlightColor;
        }), this.showTooltip(activeSegments);
      }), this.render();
    }, getSegmentsAtEvent: function getSegmentsAtEvent(e) {
      var segmentsArray = [],
          location = helpers.getRelativePosition(e);return helpers.each(this.segments, function (segment) {
        segment.inRange(location.x, location.y) && segmentsArray.push(segment);
      }, this), segmentsArray;
    }, addData: function addData(segment, atIndex, silent) {
      var index = atIndex || this.segments.length;this.segments.splice(index, 0, new this.SegmentArc({ fillColor: segment.color, highlightColor: segment.highlight || segment.color, label: segment.label, value: segment.value, outerRadius: this.options.animateScale ? 0 : this.scale.calculateCenterOffset(segment.value), circumference: this.options.animateRotate ? 0 : this.scale.getCircumference(), startAngle: 1.5 * Math.PI })), silent || (this.reflow(), this.update());
    }, removeData: function removeData(atIndex) {
      var indexToDelete = helpers.isNumber(atIndex) ? atIndex : this.segments.length - 1;this.segments.splice(indexToDelete, 1), this.reflow(), this.update();
    }, calculateTotal: function calculateTotal(data) {
      this.total = 0, helpers.each(data, function (segment) {
        this.total += segment.value;
      }, this), this.scale.valuesCount = this.segments.length;
    }, updateScaleRange: function updateScaleRange(datapoints) {
      var valuesArray = [];helpers.each(datapoints, function (segment) {
        valuesArray.push(segment.value);
      });var scaleSizes = this.options.scaleOverride ? { steps: this.options.scaleSteps, stepValue: this.options.scaleStepWidth, min: this.options.scaleStartValue, max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth } : helpers.calculateScaleRange(valuesArray, helpers.min([this.chart.width, this.chart.height]) / 2, this.options.scaleFontSize, this.options.scaleBeginAtZero, this.options.scaleIntegersOnly);helpers.extend(this.scale, scaleSizes, { size: helpers.min([this.chart.width, this.chart.height]), xCenter: this.chart.width / 2, yCenter: this.chart.height / 2 });
    }, update: function update() {
      this.calculateTotal(this.segments), helpers.each(this.segments, function (segment) {
        segment.save();
      }), this.render();
    }, reflow: function reflow() {
      helpers.extend(this.SegmentArc.prototype, { x: this.chart.width / 2, y: this.chart.height / 2 }), this.updateScaleRange(this.segments), this.scale.update(), helpers.extend(this.scale, { xCenter: this.chart.width / 2, yCenter: this.chart.height / 2 }), helpers.each(this.segments, function (segment) {
        segment.update({ outerRadius: this.scale.calculateCenterOffset(segment.value) });
      }, this);
    }, draw: function draw(ease) {
      var easingDecimal = ease || 1;this.clear(), helpers.each(this.segments, function (segment, index) {
        segment.transition({ circumference: this.scale.getCircumference(), outerRadius: this.scale.calculateCenterOffset(segment.value) }, easingDecimal), segment.endAngle = segment.startAngle + segment.circumference, 0 === index && (segment.startAngle = 1.5 * Math.PI), index < this.segments.length - 1 && (this.segments[index + 1].startAngle = segment.endAngle), segment.draw();
      }, this), this.scale.draw();
    } });
}.call(this), function () {
  "use strict";
  var root = this,
      Chart = root.Chart,
      helpers = Chart.helpers;Chart.Type.extend({ name: "Radar", defaults: { scaleShowLine: !0, angleShowLineOut: !0, scaleShowLabels: !1, scaleBeginAtZero: !0, angleLineColor: "rgba(0,0,0,.1)", angleLineWidth: 1, pointLabelFontFamily: "'Arial'", pointLabelFontStyle: "normal", pointLabelFontSize: 10, pointLabelFontColor: "#666", pointDot: !0, pointDotRadius: 3, pointDotStrokeWidth: 1, pointHitDetectionRadius: 20, datasetStroke: !0, datasetStrokeWidth: 2, datasetFill: !0, legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>' }, initialize: function initialize(data) {
      this.PointClass = Chart.Point.extend({ strokeWidth: this.options.pointDotStrokeWidth, radius: this.options.pointDotRadius, display: this.options.pointDot, hitDetectionRadius: this.options.pointHitDetectionRadius, ctx: this.chart.ctx }), this.datasets = [], this.buildScale(data), this.options.showTooltips && helpers.bindEvents(this, this.options.tooltipEvents, function (evt) {
        var activePointsCollection = "mouseout" !== evt.type ? this.getPointsAtEvent(evt) : [];this.eachPoints(function (point) {
          point.restore(["fillColor", "strokeColor"]);
        }), helpers.each(activePointsCollection, function (activePoint) {
          activePoint.fillColor = activePoint.highlightFill, activePoint.strokeColor = activePoint.highlightStroke;
        }), this.showTooltip(activePointsCollection);
      }), helpers.each(data.datasets, function (dataset) {
        var datasetObject = { label: dataset.label || null, fillColor: dataset.fillColor, strokeColor: dataset.strokeColor, pointColor: dataset.pointColor, pointStrokeColor: dataset.pointStrokeColor, points: [] };this.datasets.push(datasetObject), helpers.each(dataset.data, function (dataPoint, index) {
          var pointPosition;this.scale.animation || (pointPosition = this.scale.getPointPosition(index, this.scale.calculateCenterOffset(dataPoint))), datasetObject.points.push(new this.PointClass({ value: dataPoint, label: data.labels[index], datasetLabel: dataset.label, x: this.options.animation ? this.scale.xCenter : pointPosition.x, y: this.options.animation ? this.scale.yCenter : pointPosition.y, strokeColor: dataset.pointStrokeColor, fillColor: dataset.pointColor, highlightFill: dataset.pointHighlightFill || dataset.pointColor, highlightStroke: dataset.pointHighlightStroke || dataset.pointStrokeColor }));
        }, this);
      }, this), this.render();
    }, eachPoints: function eachPoints(callback) {
      helpers.each(this.datasets, function (dataset) {
        helpers.each(dataset.points, callback, this);
      }, this);
    }, getPointsAtEvent: function getPointsAtEvent(evt) {
      var mousePosition = helpers.getRelativePosition(evt),
          fromCenter = helpers.getAngleFromPoint({ x: this.scale.xCenter, y: this.scale.yCenter }, mousePosition),
          anglePerIndex = 2 * Math.PI / this.scale.valuesCount,
          pointIndex = Math.round((fromCenter.angle - 1.5 * Math.PI) / anglePerIndex),
          activePointsCollection = [];return (pointIndex >= this.scale.valuesCount || 0 > pointIndex) && (pointIndex = 0), fromCenter.distance <= this.scale.drawingArea && helpers.each(this.datasets, function (dataset) {
        activePointsCollection.push(dataset.points[pointIndex]);
      }), activePointsCollection;
    }, buildScale: function buildScale(data) {
      this.scale = new Chart.RadialScale({ display: this.options.showScale, fontStyle: this.options.scaleFontStyle, fontSize: this.options.scaleFontSize, fontFamily: this.options.scaleFontFamily, fontColor: this.options.scaleFontColor, showLabels: this.options.scaleShowLabels, showLabelBackdrop: this.options.scaleShowLabelBackdrop, backdropColor: this.options.scaleBackdropColor, backdropPaddingY: this.options.scaleBackdropPaddingY, backdropPaddingX: this.options.scaleBackdropPaddingX, lineWidth: this.options.scaleShowLine ? this.options.scaleLineWidth : 0, lineColor: this.options.scaleLineColor, angleLineColor: this.options.angleLineColor, angleLineWidth: this.options.angleShowLineOut ? this.options.angleLineWidth : 0, pointLabelFontColor: this.options.pointLabelFontColor, pointLabelFontSize: this.options.pointLabelFontSize, pointLabelFontFamily: this.options.pointLabelFontFamily, pointLabelFontStyle: this.options.pointLabelFontStyle, height: this.chart.height, width: this.chart.width, xCenter: this.chart.width / 2, yCenter: this.chart.height / 2, ctx: this.chart.ctx, templateString: this.options.scaleLabel, labels: data.labels, valuesCount: data.datasets[0].data.length }), this.scale.setScaleSize(), this.updateScaleRange(data.datasets), this.scale.buildYLabels();
    }, updateScaleRange: function updateScaleRange(datasets) {
      var valuesArray = function () {
        var totalDataArray = [];return helpers.each(datasets, function (dataset) {
          dataset.data ? totalDataArray = totalDataArray.concat(dataset.data) : helpers.each(dataset.points, function (point) {
            totalDataArray.push(point.value);
          });
        }), totalDataArray;
      }(),
          scaleSizes = this.options.scaleOverride ? { steps: this.options.scaleSteps, stepValue: this.options.scaleStepWidth, min: this.options.scaleStartValue, max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth } : helpers.calculateScaleRange(valuesArray, helpers.min([this.chart.width, this.chart.height]) / 2, this.options.scaleFontSize, this.options.scaleBeginAtZero, this.options.scaleIntegersOnly);helpers.extend(this.scale, scaleSizes);
    }, addData: function addData(valuesArray, label) {
      this.scale.valuesCount++, helpers.each(valuesArray, function (value, datasetIndex) {
        var pointPosition = this.scale.getPointPosition(this.scale.valuesCount, this.scale.calculateCenterOffset(value));this.datasets[datasetIndex].points.push(new this.PointClass({ value: value, label: label, x: pointPosition.x, y: pointPosition.y, strokeColor: this.datasets[datasetIndex].pointStrokeColor, fillColor: this.datasets[datasetIndex].pointColor }));
      }, this), this.scale.labels.push(label), this.reflow(), this.update();
    }, removeData: function removeData() {
      this.scale.valuesCount--, this.scale.labels.shift(), helpers.each(this.datasets, function (dataset) {
        dataset.points.shift();
      }, this), this.reflow(), this.update();
    }, update: function update() {
      this.eachPoints(function (point) {
        point.save();
      }), this.reflow(), this.render();
    }, reflow: function reflow() {
      helpers.extend(this.scale, { width: this.chart.width, height: this.chart.height, size: helpers.min([this.chart.width, this.chart.height]), xCenter: this.chart.width / 2, yCenter: this.chart.height / 2 }), this.updateScaleRange(this.datasets), this.scale.setScaleSize(), this.scale.buildYLabels();
    }, draw: function draw(ease) {
      var easeDecimal = ease || 1,
          ctx = this.chart.ctx;this.clear(), this.scale.draw(), helpers.each(this.datasets, function (dataset) {
        helpers.each(dataset.points, function (point, index) {
          point.hasValue() && point.transition(this.scale.getPointPosition(index, this.scale.calculateCenterOffset(point.value)), easeDecimal);
        }, this), ctx.lineWidth = this.options.datasetStrokeWidth, ctx.strokeStyle = dataset.strokeColor, ctx.beginPath(), helpers.each(dataset.points, function (point, index) {
          0 === index ? ctx.moveTo(point.x, point.y) : ctx.lineTo(point.x, point.y);
        }, this), ctx.closePath(), ctx.stroke(), ctx.fillStyle = dataset.fillColor, ctx.fill(), helpers.each(dataset.points, function (point) {
          point.hasValue() && point.draw();
        });
      }, this);
    } });
}.call(this), function ($, window, document) {
  function Plugin(element, options) {
    this.element = $(element), this.settings = $.extend({}, defaults, options), this._defaults = defaults, this._name = pluginName, this.init();
  }var pluginName = "metisMenu",
      defaults = { toggle: !0, doubleTapToGo: !1 };Plugin.prototype = { init: function init() {
      var $this = this.element,
          $toggle = this.settings.toggle,
          obj = this;this.isIE() <= 9 ? ($this.find("li.active").has("ul").children("ul").collapse("show"), $this.find("li").not(".active").has("ul").children("ul").collapse("hide")) : ($this.find("li.active").has("ul").children("ul").addClass("collapse in"), $this.find("li").not(".active").has("ul").children("ul").addClass("collapse")), obj.settings.doubleTapToGo && $this.find("li.active").has("ul").children("a").addClass("doubleTapToGo"), $this.find("li").has("ul").children("a").on("click." + pluginName, function (e) {
        return e.preventDefault(), obj.settings.doubleTapToGo && obj.doubleTapToGo($(this)) && "#" !== $(this).attr("href") && "" !== $(this).attr("href") ? (e.stopPropagation(), void (document.location = $(this).attr("href"))) : ($(this).parent("li").toggleClass("active").children("ul").collapse("toggle"), void ($toggle && $(this).parent("li").siblings().removeClass("active").children("ul.in").collapse("hide")));
      });
    }, isIE: function isIE() {
      for (var undef, v = 3, div = document.createElement("div"), all = div.getElementsByTagName("i"); div.innerHTML = "<!--[if gt IE " + ++v + "]><i></i><![endif]-->", all[0];) {
        return v > 4 ? v : undef;
      }
    }, doubleTapToGo: function doubleTapToGo(elem) {
      var $this = this.element;return elem.hasClass("doubleTapToGo") ? (elem.removeClass("doubleTapToGo"), !0) : elem.parent().children("ul").length ? ($this.find(".doubleTapToGo").removeClass("doubleTapToGo"), elem.addClass("doubleTapToGo"), !1) : void 0;
    }, remove: function remove() {
      this.element.off("." + pluginName), this.element.removeData(pluginName);
    } }, $.fn[pluginName] = function (options) {
    return this.each(function () {
      var el = $(this);el.data(pluginName) && el.data(pluginName).remove(), el.data(pluginName, new Plugin(this, options));
    }), this;
  };
}(jQuery, window, document), $(function () {
  $("#side-menu").metisMenu();
}), $(function () {
  $(window).bind("load resize", function () {
    topOffset = 50, width = this.window.innerWidth > 0 ? this.window.innerWidth : this.screen.width, width < 768 ? ($("div.navbar-collapse").addClass("collapse"), topOffset = 100) : $("div.navbar-collapse").removeClass("collapse"), height = (this.window.innerHeight > 0 ? this.window.innerHeight : this.screen.height) - 1, height -= topOffset, height < 1 && (height = 1), height > topOffset && $("#page-wrapper").css("min-height", height + "px");
  });var url = window.location,
      element = $("ul.nav a").filter(function () {
    return this.href == url || 0 == url.href.indexOf(this.href);
  }).addClass("active").parent().parent().addClass("in").parent();element.is("li") && element.addClass("active");
});var lineChartData = { labels: ["January", "February", "March", "April", "May", "June", "July"], datasets: [{ label: "My First dataset", fillColor: "rgba(220,220,220,0.2)", strokeColor: "rgba(220,220,220,1)", pointColor: "rgba(220,220,220,1)", pointStrokeColor: "#fff", pointHighlightFill: "#fff", pointHighlightStroke: "rgba(6, 197, 172, 1)", data: [65, 59, 80, 81, 56, 55, 40] }, { label: "My Second dataset", fillColor: "rgba(151,187,205,0.2)", strokeColor: "rgba(151,187,205,1)", pointColor: "rgba(151,187,205,1)", pointStrokeColor: "#fff", pointHighlightFill: "#fff", pointHighlightStroke: "rgba(244, 204, 11, 1)", data: [28, 48, 40, 19, 86, 27, 90] }] },
    cline = document.getElementById("cline").getContext("2d");new Chart(cline).Line(lineChartData, { responsive: !0 });var pdata = [{ value: 300, color: "#F7464A", highlight: "#FF5A5E", label: "Red" }, { value: 50, color: "#46BFBD", highlight: "#5AD3D1", label: "Green" }, { value: 100, color: "#FDB45C", highlight: "#FFC870", label: "Yellow" }],
    cpie = document.getElementById("cpie").getContext("2d");new Chart(cpie).Pie(pdata, { responsive: !0 });var ddata = [{ value: 50, color: "#F7464A", highlight: "#FF5A5E", label: "Red" }, { value: 300, color: "#46BFBD", highlight: "#5AD3D1", label: "Green" }, { value: 160, color: "#FDB45C", highlight: "#FFC870", label: "Yellow" }],
    cdonut = document.getElementById("cdonut").getContext("2d");new Chart(cdonut).Doughnut(ddata, { responsive: !0 });var bdata = { labels: ["January", "February", "March", "April", "May", "June", "July"], datasets: [{ fillColor: "rgba(220,220,220,0.5)", strokeColor: "rgba(220,220,220,0.8)", highlightFill: "rgba(220,220,220,0.75)", highlightStroke: "rgba(220,220,220,1)", data: [130, 160, 95, 205, 170, 135, 200] }, { fillColor: "rgba(151,187,205,0.5)", strokeColor: "rgba(151,187,205,0.8)", highlightFill: "rgba(151,187,205,0.75)", highlightStroke: "rgba(151,187,205,1)", data: [85, 90, 160, 145, 180, 130, 195] }] },
    cbar = document.getElementById("cbar").getContext("2d");new Chart(cbar).Bar(bdata, { responsive: !0 });var podata = [{ value: 300, color: "#F7464A", highlight: "#FF5A5E", label: "Red" }, { value: 50, color: "#46BFBD", highlight: "#5AD3D1", label: "Green" }, { value: 100, color: "#FDB45C", highlight: "#FFC870", label: "Yellow" }, { value: 40, color: "#949FB1", highlight: "#A8B3C5", label: "Grey" }, { value: 120, color: "#4D5360", highlight: "#616774", label: "Dark Grey" }],
    cpolar = document.getElementById("cpolar").getContext("2d");new Chart(cpolar).PolarArea(podata, { responsive: !0 });
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ })

/******/ });