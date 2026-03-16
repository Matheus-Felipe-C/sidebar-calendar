var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// lib/plugin.js
var plugin_exports = {};
__export(plugin_exports, {
  default: () => plugin_default
});
module.exports = __toCommonJS(plugin_exports);

// node_modules/preact/dist/preact.mjs
var n;
var l;
var u;
var t;
var i;
var r;
var o;
var e;
var f;
var c;
var s;
var a;
var h;
var p = {};
var v = [];
var y = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
var d = Array.isArray;
function w(n2, l3) {
  for (var u3 in l3) n2[u3] = l3[u3];
  return n2;
}
function g(n2) {
  n2 && n2.parentNode && n2.parentNode.removeChild(n2);
}
function _(l3, u3, t2) {
  var i3, r3, o3, e2 = {};
  for (o3 in u3) "key" == o3 ? i3 = u3[o3] : "ref" == o3 ? r3 = u3[o3] : e2[o3] = u3[o3];
  if (arguments.length > 2 && (e2.children = arguments.length > 3 ? n.call(arguments, 2) : t2), "function" == typeof l3 && null != l3.defaultProps) for (o3 in l3.defaultProps) void 0 === e2[o3] && (e2[o3] = l3.defaultProps[o3]);
  return m(l3, e2, i3, r3, null);
}
function m(n2, t2, i3, r3, o3) {
  var e2 = { type: n2, props: t2, key: i3, ref: r3, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: null == o3 ? ++u : o3, __i: -1, __u: 0 };
  return null == o3 && null != l.vnode && l.vnode(e2), e2;
}
function k(n2) {
  return n2.children;
}
function x(n2, l3) {
  this.props = n2, this.context = l3;
}
function S(n2, l3) {
  if (null == l3) return n2.__ ? S(n2.__, n2.__i + 1) : null;
  for (var u3; l3 < n2.__k.length; l3++) if (null != (u3 = n2.__k[l3]) && null != u3.__e) return u3.__e;
  return "function" == typeof n2.type ? S(n2) : null;
}
function C(n2) {
  if (n2.__P && n2.__d) {
    var u3 = n2.__v, t2 = u3.__e, i3 = [], r3 = [], o3 = w({}, u3);
    o3.__v = u3.__v + 1, l.vnode && l.vnode(o3), z(n2.__P, o3, u3, n2.__n, n2.__P.namespaceURI, 32 & u3.__u ? [t2] : null, i3, null == t2 ? S(u3) : t2, !!(32 & u3.__u), r3), o3.__v = u3.__v, o3.__.__k[o3.__i] = o3, V(i3, o3, r3), u3.__e = u3.__ = null, o3.__e != t2 && M(o3);
  }
}
function M(n2) {
  if (null != (n2 = n2.__) && null != n2.__c) return n2.__e = n2.__c.base = null, n2.__k.some(function(l3) {
    if (null != l3 && null != l3.__e) return n2.__e = n2.__c.base = l3.__e;
  }), M(n2);
}
function $(n2) {
  (!n2.__d && (n2.__d = true) && i.push(n2) && !I.__r++ || r != l.debounceRendering) && ((r = l.debounceRendering) || o)(I);
}
function I() {
  try {
    for (var n2, l3 = 1; i.length; ) i.length > l3 && i.sort(e), n2 = i.shift(), l3 = i.length, C(n2);
  } finally {
    i.length = I.__r = 0;
  }
}
function P(n2, l3, u3, t2, i3, r3, o3, e2, f3, c3, s3) {
  var a3, h3, y3, d3, w3, g3, _3, m3 = t2 && t2.__k || v, b2 = l3.length;
  for (f3 = A(u3, l3, m3, f3, b2), a3 = 0; a3 < b2; a3++) null != (y3 = u3.__k[a3]) && (h3 = -1 != y3.__i && m3[y3.__i] || p, y3.__i = a3, g3 = z(n2, y3, h3, i3, r3, o3, e2, f3, c3, s3), d3 = y3.__e, y3.ref && h3.ref != y3.ref && (h3.ref && D(h3.ref, null, y3), s3.push(y3.ref, y3.__c || d3, y3)), null == w3 && null != d3 && (w3 = d3), (_3 = !!(4 & y3.__u)) || h3.__k === y3.__k ? f3 = H(y3, f3, n2, _3) : "function" == typeof y3.type && void 0 !== g3 ? f3 = g3 : d3 && (f3 = d3.nextSibling), y3.__u &= -7);
  return u3.__e = w3, f3;
}
function A(n2, l3, u3, t2, i3) {
  var r3, o3, e2, f3, c3, s3 = u3.length, a3 = s3, h3 = 0;
  for (n2.__k = new Array(i3), r3 = 0; r3 < i3; r3++) null != (o3 = l3[r3]) && "boolean" != typeof o3 && "function" != typeof o3 ? ("string" == typeof o3 || "number" == typeof o3 || "bigint" == typeof o3 || o3.constructor == String ? o3 = n2.__k[r3] = m(null, o3, null, null, null) : d(o3) ? o3 = n2.__k[r3] = m(k, { children: o3 }, null, null, null) : void 0 === o3.constructor && o3.__b > 0 ? o3 = n2.__k[r3] = m(o3.type, o3.props, o3.key, o3.ref ? o3.ref : null, o3.__v) : n2.__k[r3] = o3, f3 = r3 + h3, o3.__ = n2, o3.__b = n2.__b + 1, e2 = null, -1 != (c3 = o3.__i = T(o3, u3, f3, a3)) && (a3--, (e2 = u3[c3]) && (e2.__u |= 2)), null == e2 || null == e2.__v ? (-1 == c3 && (i3 > s3 ? h3-- : i3 < s3 && h3++), "function" != typeof o3.type && (o3.__u |= 4)) : c3 != f3 && (c3 == f3 - 1 ? h3-- : c3 == f3 + 1 ? h3++ : (c3 > f3 ? h3-- : h3++, o3.__u |= 4))) : n2.__k[r3] = null;
  if (a3) for (r3 = 0; r3 < s3; r3++) null != (e2 = u3[r3]) && 0 == (2 & e2.__u) && (e2.__e == t2 && (t2 = S(e2)), E(e2, e2));
  return t2;
}
function H(n2, l3, u3, t2) {
  var i3, r3;
  if ("function" == typeof n2.type) {
    for (i3 = n2.__k, r3 = 0; i3 && r3 < i3.length; r3++) i3[r3] && (i3[r3].__ = n2, l3 = H(i3[r3], l3, u3, t2));
    return l3;
  }
  n2.__e != l3 && (t2 && (l3 && n2.type && !l3.parentNode && (l3 = S(n2)), u3.insertBefore(n2.__e, l3 || null)), l3 = n2.__e);
  do {
    l3 = l3 && l3.nextSibling;
  } while (null != l3 && 8 == l3.nodeType);
  return l3;
}
function T(n2, l3, u3, t2) {
  var i3, r3, o3, e2 = n2.key, f3 = n2.type, c3 = l3[u3], s3 = null != c3 && 0 == (2 & c3.__u);
  if (null === c3 && null == e2 || s3 && e2 == c3.key && f3 == c3.type) return u3;
  if (t2 > (s3 ? 1 : 0)) {
    for (i3 = u3 - 1, r3 = u3 + 1; i3 >= 0 || r3 < l3.length; ) if (null != (c3 = l3[o3 = i3 >= 0 ? i3-- : r3++]) && 0 == (2 & c3.__u) && e2 == c3.key && f3 == c3.type) return o3;
  }
  return -1;
}
function j(n2, l3, u3) {
  "-" == l3[0] ? n2.setProperty(l3, null == u3 ? "" : u3) : n2[l3] = null == u3 ? "" : "number" != typeof u3 || y.test(l3) ? u3 : u3 + "px";
}
function F(n2, l3, u3, t2, i3) {
  var r3, o3;
  n: if ("style" == l3) if ("string" == typeof u3) n2.style.cssText = u3;
  else {
    if ("string" == typeof t2 && (n2.style.cssText = t2 = ""), t2) for (l3 in t2) u3 && l3 in u3 || j(n2.style, l3, "");
    if (u3) for (l3 in u3) t2 && u3[l3] == t2[l3] || j(n2.style, l3, u3[l3]);
  }
  else if ("o" == l3[0] && "n" == l3[1]) r3 = l3 != (l3 = l3.replace(f, "$1")), o3 = l3.toLowerCase(), l3 = o3 in n2 || "onFocusOut" == l3 || "onFocusIn" == l3 ? o3.slice(2) : l3.slice(2), n2.l || (n2.l = {}), n2.l[l3 + r3] = u3, u3 ? t2 ? u3.u = t2.u : (u3.u = c, n2.addEventListener(l3, r3 ? a : s, r3)) : n2.removeEventListener(l3, r3 ? a : s, r3);
  else {
    if ("http://www.w3.org/2000/svg" == i3) l3 = l3.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if ("width" != l3 && "height" != l3 && "href" != l3 && "list" != l3 && "form" != l3 && "tabIndex" != l3 && "download" != l3 && "rowSpan" != l3 && "colSpan" != l3 && "role" != l3 && "popover" != l3 && l3 in n2) try {
      n2[l3] = null == u3 ? "" : u3;
      break n;
    } catch (n3) {
    }
    "function" == typeof u3 || (null == u3 || false === u3 && "-" != l3[4] ? n2.removeAttribute(l3) : n2.setAttribute(l3, "popover" == l3 && 1 == u3 ? "" : u3));
  }
}
function O(n2) {
  return function(u3) {
    if (this.l) {
      var t2 = this.l[u3.type + n2];
      if (null == u3.t) u3.t = c++;
      else if (u3.t < t2.u) return;
      return t2(l.event ? l.event(u3) : u3);
    }
  };
}
function z(n2, u3, t2, i3, r3, o3, e2, f3, c3, s3) {
  var a3, h3, p3, y3, _3, m3, b2, S2, C3, M3, $3, I3, A3, H3, L, T2 = u3.type;
  if (void 0 !== u3.constructor) return null;
  128 & t2.__u && (c3 = !!(32 & t2.__u), o3 = [f3 = u3.__e = t2.__e]), (a3 = l.__b) && a3(u3);
  n: if ("function" == typeof T2) try {
    if (S2 = u3.props, C3 = T2.prototype && T2.prototype.render, M3 = (a3 = T2.contextType) && i3[a3.__c], $3 = a3 ? M3 ? M3.props.value : a3.__ : i3, t2.__c ? b2 = (h3 = u3.__c = t2.__c).__ = h3.__E : (C3 ? u3.__c = h3 = new T2(S2, $3) : (u3.__c = h3 = new x(S2, $3), h3.constructor = T2, h3.render = G), M3 && M3.sub(h3), h3.state || (h3.state = {}), h3.__n = i3, p3 = h3.__d = true, h3.__h = [], h3._sb = []), C3 && null == h3.__s && (h3.__s = h3.state), C3 && null != T2.getDerivedStateFromProps && (h3.__s == h3.state && (h3.__s = w({}, h3.__s)), w(h3.__s, T2.getDerivedStateFromProps(S2, h3.__s))), y3 = h3.props, _3 = h3.state, h3.__v = u3, p3) C3 && null == T2.getDerivedStateFromProps && null != h3.componentWillMount && h3.componentWillMount(), C3 && null != h3.componentDidMount && h3.__h.push(h3.componentDidMount);
    else {
      if (C3 && null == T2.getDerivedStateFromProps && S2 !== y3 && null != h3.componentWillReceiveProps && h3.componentWillReceiveProps(S2, $3), u3.__v == t2.__v || !h3.__e && null != h3.shouldComponentUpdate && false === h3.shouldComponentUpdate(S2, h3.__s, $3)) {
        u3.__v != t2.__v && (h3.props = S2, h3.state = h3.__s, h3.__d = false), u3.__e = t2.__e, u3.__k = t2.__k, u3.__k.some(function(n3) {
          n3 && (n3.__ = u3);
        }), v.push.apply(h3.__h, h3._sb), h3._sb = [], h3.__h.length && e2.push(h3);
        break n;
      }
      null != h3.componentWillUpdate && h3.componentWillUpdate(S2, h3.__s, $3), C3 && null != h3.componentDidUpdate && h3.__h.push(function() {
        h3.componentDidUpdate(y3, _3, m3);
      });
    }
    if (h3.context = $3, h3.props = S2, h3.__P = n2, h3.__e = false, I3 = l.__r, A3 = 0, C3) h3.state = h3.__s, h3.__d = false, I3 && I3(u3), a3 = h3.render(h3.props, h3.state, h3.context), v.push.apply(h3.__h, h3._sb), h3._sb = [];
    else do {
      h3.__d = false, I3 && I3(u3), a3 = h3.render(h3.props, h3.state, h3.context), h3.state = h3.__s;
    } while (h3.__d && ++A3 < 25);
    h3.state = h3.__s, null != h3.getChildContext && (i3 = w(w({}, i3), h3.getChildContext())), C3 && !p3 && null != h3.getSnapshotBeforeUpdate && (m3 = h3.getSnapshotBeforeUpdate(y3, _3)), H3 = null != a3 && a3.type === k && null == a3.key ? q(a3.props.children) : a3, f3 = P(n2, d(H3) ? H3 : [H3], u3, t2, i3, r3, o3, e2, f3, c3, s3), h3.base = u3.__e, u3.__u &= -161, h3.__h.length && e2.push(h3), b2 && (h3.__E = h3.__ = null);
  } catch (n3) {
    if (u3.__v = null, c3 || null != o3) if (n3.then) {
      for (u3.__u |= c3 ? 160 : 128; f3 && 8 == f3.nodeType && f3.nextSibling; ) f3 = f3.nextSibling;
      o3[o3.indexOf(f3)] = null, u3.__e = f3;
    } else {
      for (L = o3.length; L--; ) g(o3[L]);
      N(u3);
    }
    else u3.__e = t2.__e, u3.__k = t2.__k, n3.then || N(u3);
    l.__e(n3, u3, t2);
  }
  else null == o3 && u3.__v == t2.__v ? (u3.__k = t2.__k, u3.__e = t2.__e) : f3 = u3.__e = B(t2.__e, u3, t2, i3, r3, o3, e2, c3, s3);
  return (a3 = l.diffed) && a3(u3), 128 & u3.__u ? void 0 : f3;
}
function N(n2) {
  n2 && (n2.__c && (n2.__c.__e = true), n2.__k && n2.__k.some(N));
}
function V(n2, u3, t2) {
  for (var i3 = 0; i3 < t2.length; i3++) D(t2[i3], t2[++i3], t2[++i3]);
  l.__c && l.__c(u3, n2), n2.some(function(u4) {
    try {
      n2 = u4.__h, u4.__h = [], n2.some(function(n3) {
        n3.call(u4);
      });
    } catch (n3) {
      l.__e(n3, u4.__v);
    }
  });
}
function q(n2) {
  return "object" != typeof n2 || null == n2 || n2.__b > 0 ? n2 : d(n2) ? n2.map(q) : w({}, n2);
}
function B(u3, t2, i3, r3, o3, e2, f3, c3, s3) {
  var a3, h3, v3, y3, w3, _3, m3, b2 = i3.props || p, k3 = t2.props, x3 = t2.type;
  if ("svg" == x3 ? o3 = "http://www.w3.org/2000/svg" : "math" == x3 ? o3 = "http://www.w3.org/1998/Math/MathML" : o3 || (o3 = "http://www.w3.org/1999/xhtml"), null != e2) {
    for (a3 = 0; a3 < e2.length; a3++) if ((w3 = e2[a3]) && "setAttribute" in w3 == !!x3 && (x3 ? w3.localName == x3 : 3 == w3.nodeType)) {
      u3 = w3, e2[a3] = null;
      break;
    }
  }
  if (null == u3) {
    if (null == x3) return document.createTextNode(k3);
    u3 = document.createElementNS(o3, x3, k3.is && k3), c3 && (l.__m && l.__m(t2, e2), c3 = false), e2 = null;
  }
  if (null == x3) b2 === k3 || c3 && u3.data == k3 || (u3.data = k3);
  else {
    if (e2 = e2 && n.call(u3.childNodes), !c3 && null != e2) for (b2 = {}, a3 = 0; a3 < u3.attributes.length; a3++) b2[(w3 = u3.attributes[a3]).name] = w3.value;
    for (a3 in b2) w3 = b2[a3], "dangerouslySetInnerHTML" == a3 ? v3 = w3 : "children" == a3 || a3 in k3 || "value" == a3 && "defaultValue" in k3 || "checked" == a3 && "defaultChecked" in k3 || F(u3, a3, null, w3, o3);
    for (a3 in k3) w3 = k3[a3], "children" == a3 ? y3 = w3 : "dangerouslySetInnerHTML" == a3 ? h3 = w3 : "value" == a3 ? _3 = w3 : "checked" == a3 ? m3 = w3 : c3 && "function" != typeof w3 || b2[a3] === w3 || F(u3, a3, w3, b2[a3], o3);
    if (h3) c3 || v3 && (h3.__html == v3.__html || h3.__html == u3.innerHTML) || (u3.innerHTML = h3.__html), t2.__k = [];
    else if (v3 && (u3.innerHTML = ""), P("template" == t2.type ? u3.content : u3, d(y3) ? y3 : [y3], t2, i3, r3, "foreignObject" == x3 ? "http://www.w3.org/1999/xhtml" : o3, e2, f3, e2 ? e2[0] : i3.__k && S(i3, 0), c3, s3), null != e2) for (a3 = e2.length; a3--; ) g(e2[a3]);
    c3 || (a3 = "value", "progress" == x3 && null == _3 ? u3.removeAttribute("value") : null != _3 && (_3 !== u3[a3] || "progress" == x3 && !_3 || "option" == x3 && _3 != b2[a3]) && F(u3, a3, _3, b2[a3], o3), a3 = "checked", null != m3 && m3 != u3[a3] && F(u3, a3, m3, b2[a3], o3));
  }
  return u3;
}
function D(n2, u3, t2) {
  try {
    if ("function" == typeof n2) {
      var i3 = "function" == typeof n2.__u;
      i3 && n2.__u(), i3 && null == u3 || (n2.__u = n2(u3));
    } else n2.current = u3;
  } catch (n3) {
    l.__e(n3, t2);
  }
}
function E(n2, u3, t2) {
  var i3, r3;
  if (l.unmount && l.unmount(n2), (i3 = n2.ref) && (i3.current && i3.current != n2.__e || D(i3, null, u3)), null != (i3 = n2.__c)) {
    if (i3.componentWillUnmount) try {
      i3.componentWillUnmount();
    } catch (n3) {
      l.__e(n3, u3);
    }
    i3.base = i3.__P = null;
  }
  if (i3 = n2.__k) for (r3 = 0; r3 < i3.length; r3++) i3[r3] && E(i3[r3], u3, t2 || "function" != typeof n2.type);
  t2 || g(n2.__e), n2.__c = n2.__ = n2.__e = void 0;
}
function G(n2, l3, u3) {
  return this.constructor(n2, u3);
}
n = v.slice, l = { __e: function(n2, l3, u3, t2) {
  for (var i3, r3, o3; l3 = l3.__; ) if ((i3 = l3.__c) && !i3.__) try {
    if ((r3 = i3.constructor) && null != r3.getDerivedStateFromError && (i3.setState(r3.getDerivedStateFromError(n2)), o3 = i3.__d), null != i3.componentDidCatch && (i3.componentDidCatch(n2, t2 || {}), o3 = i3.__d), o3) return i3.__E = i3;
  } catch (l4) {
    n2 = l4;
  }
  throw n2;
} }, u = 0, t = function(n2) {
  return null != n2 && void 0 === n2.constructor;
}, x.prototype.setState = function(n2, l3) {
  var u3;
  u3 = null != this.__s && this.__s != this.state ? this.__s : this.__s = w({}, this.state), "function" == typeof n2 && (n2 = n2(w({}, u3), this.props)), n2 && w(u3, n2), null != n2 && this.__v && (l3 && this._sb.push(l3), $(this));
}, x.prototype.forceUpdate = function(n2) {
  this.__v && (this.__e = true, n2 && this.__h.push(n2), $(this));
}, x.prototype.render = k, i = [], o = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, e = function(n2, l3) {
  return n2.__v.__b - l3.__v.__b;
}, I.__r = 0, f = /(PointerCapture)$|Capture$/i, c = 0, s = O(false), a = O(true), h = 0;

// node_modules/preact-render-to-string/dist/index.mjs
var r2 = "diffed";
var o2 = "__c";
var i2 = "__s";
var a2 = "__c";
var c2 = "__k";
var u2 = "__d";
var s2 = "__s";
var l2 = /[\s\n\\/='"\0<>]/;
var f2 = /^(xlink|xmlns|xml)([A-Z])/;
var p2 = /^(?:accessK|auto[A-Z]|cell|ch|col|cont|cross|dateT|encT|form[A-Z]|frame|hrefL|inputM|maxL|minL|noV|playsI|popoverT|readO|rowS|src[A-Z]|tabI|useM|item[A-Z])/;
var h2 = /^ac|^ali|arabic|basel|cap|clipPath$|clipRule$|color|dominant|enable|fill|flood|font|glyph[^R]|horiz|image|letter|lighting|marker[^WUH]|overline|panose|pointe|paint|rendering|shape|stop|strikethrough|stroke|text[^L]|transform|underline|unicode|units|^v[^i]|^w|^xH/;
var d2 = /* @__PURE__ */ new Set(["draggable", "spellcheck"]);
function v2(e2) {
  void 0 !== e2.__g ? e2.__g |= 8 : e2[u2] = true;
}
function m2(e2) {
  void 0 !== e2.__g ? e2.__g &= -9 : e2[u2] = false;
}
function y2(e2) {
  return void 0 !== e2.__g ? !!(8 & e2.__g) : true === e2[u2];
}
var _2 = /["&<]/;
function g2(e2) {
  if (0 === e2.length || false === _2.test(e2)) return e2;
  for (var t2 = 0, n2 = 0, r3 = "", o3 = ""; n2 < e2.length; n2++) {
    switch (e2.charCodeAt(n2)) {
      case 34:
        o3 = "&quot;";
        break;
      case 38:
        o3 = "&amp;";
        break;
      case 60:
        o3 = "&lt;";
        break;
      default:
        continue;
    }
    n2 !== t2 && (r3 += e2.slice(t2, n2)), r3 += o3, t2 = n2 + 1;
  }
  return n2 !== t2 && (r3 += e2.slice(t2, n2)), r3;
}
var b = {};
var x2 = /* @__PURE__ */ new Set(["animation-iteration-count", "border-image-outset", "border-image-slice", "border-image-width", "box-flex", "box-flex-group", "box-ordinal-group", "column-count", "fill-opacity", "flex", "flex-grow", "flex-negative", "flex-order", "flex-positive", "flex-shrink", "flood-opacity", "font-weight", "grid-column", "grid-row", "line-clamp", "line-height", "opacity", "order", "orphans", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-miterlimit", "stroke-opacity", "stroke-width", "tab-size", "widows", "z-index", "zoom"]);
var k2 = /[A-Z]/g;
function w2(e2) {
  var t2 = "";
  for (var n2 in e2) {
    var r3 = e2[n2];
    if (null != r3 && "" !== r3) {
      var o3 = "-" == n2[0] ? n2 : b[n2] || (b[n2] = n2.replace(k2, "-$&").toLowerCase()), i3 = ";";
      "number" != typeof r3 || o3.startsWith("--") || x2.has(o3) || (i3 = "px;"), t2 = t2 + o3 + ":" + r3 + i3;
    }
  }
  return t2 || void 0;
}
function C2() {
  this.__d = true;
}
function A2(e2, t2) {
  return { __v: e2, context: t2, props: e2.props, setState: C2, forceUpdate: C2, __d: true, __h: new Array(0) };
}
var D2;
var P2;
var $2;
var U;
var F2 = {};
var M2 = [];
var W = Array.isArray;
var z2 = Object.assign;
var H2 = "";
var N2 = "<!--$s-->";
var q2 = "<!--/$s-->";
function B2(a3, u3, s3) {
  var l3 = l[i2];
  l[i2] = true, D2 = l.__b, P2 = l[r2], $2 = l.__r, U = l.unmount;
  var f3 = _(k, null);
  f3[c2] = [a3];
  try {
    var p3 = O2(a3, u3 || F2, false, void 0, f3, false, s3);
    return W(p3) ? p3.join(H2) : p3;
  } catch (e2) {
    if (e2.then) throw new Error('Use "renderToStringAsync" for suspenseful rendering.');
    throw e2;
  } finally {
    l[o2] && l[o2](a3, M2), l[i2] = l3, M2.length = 0;
  }
}
function I2(e2, t2) {
  var n2, r3 = e2.type, o3 = true;
  return e2[a2] ? (o3 = false, (n2 = e2[a2]).state = n2[s2]) : n2 = new r3(e2.props, t2), e2[a2] = n2, n2.__v = e2, n2.props = e2.props, n2.context = t2, v2(n2), null == n2.state && (n2.state = F2), null == n2[s2] && (n2[s2] = n2.state), r3.getDerivedStateFromProps ? n2.state = z2({}, n2.state, r3.getDerivedStateFromProps(n2.props, n2.state)) : o3 && n2.componentWillMount ? (n2.componentWillMount(), n2.state = n2[s2] !== n2.state ? n2[s2] : n2.state) : !o3 && n2.componentWillUpdate && n2.componentWillUpdate(), $2 && $2(e2), n2.render(n2.props, n2.state, t2);
}
function O2(t2, r3, o3, i3, u3, _3, b2) {
  if (null == t2 || true === t2 || false === t2 || t2 === H2) return H2;
  var x3 = typeof t2;
  if ("object" != x3) return "function" == x3 ? H2 : "string" == x3 ? g2(t2) : t2 + H2;
  if (W(t2)) {
    var k3, C3 = H2;
    u3[c2] = t2;
    for (var S2 = t2.length, L = 0; L < S2; L++) {
      var E2 = t2[L];
      if (null != E2 && "boolean" != typeof E2) {
        var j2, T2 = O2(E2, r3, o3, i3, u3, _3, b2);
        "string" == typeof T2 ? C3 += T2 : (k3 || (k3 = new Array(S2)), C3 && k3.push(C3), C3 = H2, W(T2) ? (j2 = k3).push.apply(j2, T2) : k3.push(T2));
      }
    }
    return k3 ? (C3 && k3.push(C3), k3) : C3;
  }
  if (void 0 !== t2.constructor) return H2;
  t2.__ = u3, D2 && D2(t2);
  var Z = t2.type, M3 = t2.props;
  if ("function" == typeof Z) {
    var B3, V2, K, J = r3;
    if (Z === k) {
      if ("tpl" in M3) {
        for (var Q = H2, X = 0; X < M3.tpl.length; X++) if (Q += M3.tpl[X], M3.exprs && X < M3.exprs.length) {
          var Y = M3.exprs[X];
          if (null == Y) continue;
          "object" != typeof Y || void 0 !== Y.constructor && !W(Y) ? Q += Y : Q += O2(Y, r3, o3, i3, t2, _3, b2);
        }
        return Q;
      }
      if ("UNSTABLE_comment" in M3) return "<!--" + g2(M3.UNSTABLE_comment) + "-->";
      V2 = M3.children;
    } else {
      if (null != (B3 = Z.contextType)) {
        var ee = r3[B3.__c];
        J = ee ? ee.props.value : B3.__;
      }
      var te = Z.prototype && "function" == typeof Z.prototype.render;
      if (te) V2 = /**#__NOINLINE__**/
      I2(t2, J), K = t2[a2];
      else {
        t2[a2] = K = /**#__NOINLINE__**/
        A2(t2, J);
        for (var ne = 0; y2(K) && ne++ < 25; ) {
          m2(K), $2 && $2(t2);
          try {
            V2 = Z.call(K, M3, J);
          } catch (e2) {
            throw _3 && e2 && "function" == typeof e2.then && (t2._suspended = true), e2;
          }
        }
        v2(K);
      }
      if (null != K.getChildContext && (r3 = z2({}, r3, K.getChildContext())), te && l.errorBoundaries && (Z.getDerivedStateFromError || K.componentDidCatch)) {
        V2 = null != V2 && V2.type === k && null == V2.key && null == V2.props.tpl ? V2.props.children : V2;
        try {
          return O2(V2, r3, o3, i3, t2, _3, false);
        } catch (e2) {
          return Z.getDerivedStateFromError && (K[s2] = Z.getDerivedStateFromError(e2)), K.componentDidCatch && K.componentDidCatch(e2, F2), y2(K) ? (V2 = I2(t2, r3), null != (K = t2[a2]).getChildContext && (r3 = z2({}, r3, K.getChildContext())), O2(V2 = null != V2 && V2.type === k && null == V2.key && null == V2.props.tpl ? V2.props.children : V2, r3, o3, i3, t2, _3, b2)) : H2;
        } finally {
          P2 && P2(t2), U && U(t2);
        }
      }
    }
    V2 = null != V2 && V2.type === k && null == V2.key && null == V2.props.tpl ? V2.props.children : V2;
    try {
      var re = O2(V2, r3, o3, i3, t2, _3, b2);
      return P2 && P2(t2), l.unmount && l.unmount(t2), t2._suspended ? "string" == typeof re ? N2 + re + q2 : W(re) ? (re.unshift(N2), re.push(q2), re) : re.then(function(e2) {
        return N2 + e2 + q2;
      }) : re;
    } catch (n2) {
      if (!_3 && b2 && b2.onError) {
        var oe = (function e2(n3) {
          return b2.onError(n3, t2, function(t3, n4) {
            try {
              return O2(t3, r3, o3, i3, n4, _3, b2);
            } catch (t4) {
              return e2(t4);
            }
          });
        })(n2);
        if (void 0 !== oe) return oe;
        var ie = l.__e;
        return ie && ie(n2, t2), H2;
      }
      if (!_3) throw n2;
      if (!n2 || "function" != typeof n2.then) throw n2;
      return n2.then(function e2() {
        try {
          var n3 = O2(V2, r3, o3, i3, t2, _3, b2);
          return t2._suspended ? N2 + n3 + q2 : n3;
        } catch (t3) {
          if (!t3 || "function" != typeof t3.then) throw t3;
          return t3.then(e2);
        }
      });
    }
  }
  var ae, ce = "<" + Z, ue = H2;
  for (var se in M3) {
    var le = M3[se];
    if ("function" != typeof (le = G2(le) ? le.value : le) || "class" === se || "className" === se) {
      switch (se) {
        case "children":
          ae = le;
          continue;
        case "key":
        case "ref":
        case "__self":
        case "__source":
          continue;
        case "htmlFor":
          if ("for" in M3) continue;
          se = "for";
          break;
        case "className":
          if ("class" in M3) continue;
          se = "class";
          break;
        case "defaultChecked":
          se = "checked";
          break;
        case "defaultSelected":
          se = "selected";
          break;
        case "defaultValue":
        case "value":
          switch (se = "value", Z) {
            case "textarea":
              ae = le;
              continue;
            case "select":
              i3 = le;
              continue;
            case "option":
              i3 != le || "selected" in M3 || (ce += " selected");
          }
          break;
        case "dangerouslySetInnerHTML":
          ue = le && le.__html;
          continue;
        case "style":
          "object" == typeof le && (le = w2(le));
          break;
        case "acceptCharset":
          se = "accept-charset";
          break;
        case "httpEquiv":
          se = "http-equiv";
          break;
        default:
          if (f2.test(se)) se = se.replace(f2, "$1:$2").toLowerCase();
          else {
            if (l2.test(se)) continue;
            "-" !== se[4] && !d2.has(se) || null == le ? o3 ? h2.test(se) && (se = "panose1" === se ? "panose-1" : se.replace(/([A-Z])/g, "-$1").toLowerCase()) : p2.test(se) && (se = se.toLowerCase()) : le += H2;
          }
      }
      null != le && false !== le && (ce = true === le || le === H2 ? ce + " " + se : ce + " " + se + '="' + ("string" == typeof le ? g2(le) : le + H2) + '"');
    }
  }
  if (l2.test(Z)) throw new Error(Z + " is not a valid HTML tag name in " + ce + ">");
  if (ue || ("string" == typeof ae ? ue = g2(ae) : null != ae && false !== ae && true !== ae && (ue = O2(ae, r3, "svg" === Z || "foreignObject" !== Z && o3, i3, t2, _3, b2))), P2 && P2(t2), U && U(t2), !ue && R.has(Z)) return ce + "/>";
  var fe = "</" + Z + ">", pe = ce + ">";
  return W(ue) ? [pe].concat(ue, [fe]) : "string" != typeof ue ? [pe, ue, fe] : pe + ue + fe;
}
var R = /* @__PURE__ */ new Set(["area", "base", "br", "col", "command", "embed", "hr", "img", "input", "keygen", "link", "meta", "param", "source", "track", "wbr"]);
function G2(e2) {
  return null !== e2 && "object" == typeof e2 && "function" == typeof e2.peek && "value" in e2;
}

// lib/renderEmbed.jsx
function SidebarRoot(props) {
  const { title, openedAt } = props;
  return /* @__PURE__ */ _(
    "div",
    {
      class: "sidebar-calendar-root",
      style: "background-color: #fff; font-family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif; padding: 12px;"
    },
    /* @__PURE__ */ _(
      "h1",
      {
        style: "font-size: 1.2rem; margin: 0 0 8px; color: inherit;"
      },
      title
    ),
    /* @__PURE__ */ _("p", { style: "margin: 0 0 12px; opacity: 0.8;" }, "Opened at: ", /* @__PURE__ */ _("code", null, openedAt)),
    /* @__PURE__ */ _(
      "div",
      {
        class: "sidebar-calendar-content",
        style: "font-size: 0.9rem; line-height: 1.4; color: inherit;"
      },
      /* @__PURE__ */ _("p", { style: "margin: 0 0 8px;" }, "This is your custom sidebar embed, now rendered with Preact."),
      /* @__PURE__ */ _("ul", { style: "padding-left: 1.2rem; margin: 0;" }, /* @__PURE__ */ _("li", null, "Start turning this into a calendar UI."), /* @__PURE__ */ _("li", null, "Next step: add views & interactions via components."))
    )
  );
}
function renderEmbedContent(args) {
  const { title, openedAt } = args || {};
  const effectiveTitle = title || "Sidebar Calendar";
  const effectiveOpenedAt = openedAt || (/* @__PURE__ */ new Date()).toISOString();
  return B2(
    /* @__PURE__ */ _(SidebarRoot, { title: effectiveTitle, openedAt: effectiveOpenedAt })
  );
}

// lib/plugin.js
var plugin = {
  // Shown in Quick Open as "Open Sidebar"
  async appOption(app) {
    const aspectRatio = parseFloat(app.settings["Sidebar aspect ratio"] || "1.3");
    const title = app.settings["Sidebar title"] || "Sidebar Calendar";
    await app.openSidebarEmbed({
      id: "sidebar-calendar-main",
      aspectRatio,
      title,
      openedAt: (/* @__PURE__ */ new Date()).toISOString()
    });
  },
  // Called whenever the sidebar embed should render/re-render
  renderEmbed(app, args) {
    return renderEmbedContent(args);
  }
};
var plugin_default = plugin;
