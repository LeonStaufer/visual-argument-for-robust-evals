"use strict";
(() => {
    var L0 = Object.create;
    var no = Object.defineProperty;
    var R0 = Object.getOwnPropertyDescriptor;
    var N0 = Object.getOwnPropertyNames;
    var A0 = Object.getPrototypeOf,
        _0 = Object.prototype.hasOwnProperty;
    var M0 = (e, t, n) =>
        t in e
            ? no(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
            : (e[t] = n);
    var Qt = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
        yf = (e, t) => {
            for (var n in t) no(e, n, { get: t[n], enumerable: !0 });
        },
        G0 = (e, t, n, r) => {
            if ((t && typeof t == "object") || typeof t == "function")
                for (let i of N0(t))
                    !_0.call(e, i) &&
                        i !== n &&
                        no(e, i, { get: () => t[i], enumerable: !(r = R0(t, i)) || r.enumerable });
            return e;
        };
    var R = (e, t, n) => (
        (n = e != null ? L0(A0(e)) : {}),
        G0(t || !e || !e.__esModule ? no(n, "default", { value: e, enumerable: !0 }) : n, e)
    );
    var Xt = (e, t, n) => (M0(e, typeof t != "symbol" ? t + "" : t, n), n);
    var Af = Qt((G) => {
        "use strict";
        var Vr = Symbol.for("react.element"),
            B0 = Symbol.for("react.portal"),
            V0 = Symbol.for("react.fragment"),
            U0 = Symbol.for("react.strict_mode"),
            j0 = Symbol.for("react.profiler"),
            W0 = Symbol.for("react.provider"),
            z0 = Symbol.for("react.context"),
            H0 = Symbol.for("react.forward_ref"),
            Q0 = Symbol.for("react.suspense"),
            X0 = Symbol.for("react.memo"),
            Z0 = Symbol.for("react.lazy"),
            If = Symbol.iterator;
        function Y0(e) {
            return e === null || typeof e != "object"
                ? null
                : ((e = (If && e[If]) || e["@@iterator"]), typeof e == "function" ? e : null);
        }
        var Cf = {
                isMounted: function () {
                    return !1;
                },
                enqueueForceUpdate: function () {},
                enqueueReplaceState: function () {},
                enqueueSetState: function () {},
            },
            Tf = Object.assign,
            bf = {};
        function $n(e, t, n) {
            (this.props = e), (this.context = t), (this.refs = bf), (this.updater = n || Cf);
        }
        $n.prototype.isReactComponent = {};
        $n.prototype.setState = function (e, t) {
            if (typeof e != "object" && typeof e != "function" && e != null)
                throw Error(
                    "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
                );
            this.updater.enqueueSetState(this, e, t, "setState");
        };
        $n.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
        };
        function Of() {}
        Of.prototype = $n.prototype;
        function Tl(e, t, n) {
            (this.props = e), (this.context = t), (this.refs = bf), (this.updater = n || Cf);
        }
        var bl = (Tl.prototype = new Of());
        bl.constructor = Tl;
        Tf(bl, $n.prototype);
        bl.isPureReactComponent = !0;
        var xf = Array.isArray,
            kf = Object.prototype.hasOwnProperty,
            Ol = { current: null },
            Lf = { key: !0, ref: !0, __self: !0, __source: !0 };
        function Rf(e, t, n) {
            var r,
                i = {},
                o = null,
                s = null;
            if (t != null)
                for (r in (t.ref !== void 0 && (s = t.ref),
                t.key !== void 0 && (o = "" + t.key),
                t))
                    kf.call(t, r) && !Lf.hasOwnProperty(r) && (i[r] = t[r]);
            var l = arguments.length - 2;
            if (l === 1) i.children = n;
            else if (1 < l) {
                for (var u = Array(l), a = 0; a < l; a++) u[a] = arguments[a + 2];
                i.children = u;
            }
            if (e && e.defaultProps)
                for (r in ((l = e.defaultProps), l)) i[r] === void 0 && (i[r] = l[r]);
            return { $$typeof: Vr, type: e, key: o, ref: s, props: i, _owner: Ol.current };
        }
        function $0(e, t) {
            return {
                $$typeof: Vr,
                type: e.type,
                key: t,
                ref: e.ref,
                props: e.props,
                _owner: e._owner,
            };
        }
        function kl(e) {
            return typeof e == "object" && e !== null && e.$$typeof === Vr;
        }
        function K0(e) {
            var t = { "=": "=0", ":": "=2" };
            return (
                "$" +
                e.replace(/[=:]/g, function (n) {
                    return t[n];
                })
            );
        }
        var Sf = /\/+/g;
        function Cl(e, t) {
            return typeof e == "object" && e !== null && e.key != null
                ? K0("" + e.key)
                : t.toString(36);
        }
        function io(e, t, n, r, i) {
            var o = typeof e;
            (o === "undefined" || o === "boolean") && (e = null);
            var s = !1;
            if (e === null) s = !0;
            else
                switch (o) {
                    case "string":
                    case "number":
                        s = !0;
                        break;
                    case "object":
                        switch (e.$$typeof) {
                            case Vr:
                            case B0:
                                s = !0;
                        }
                }
            if (s)
                return (
                    (s = e),
                    (i = i(s)),
                    (e = r === "" ? "." + Cl(s, 0) : r),
                    xf(i)
                        ? ((n = ""),
                          e != null && (n = e.replace(Sf, "$&/") + "/"),
                          io(i, t, n, "", function (a) {
                              return a;
                          }))
                        : i != null &&
                          (kl(i) &&
                              (i = $0(
                                  i,
                                  n +
                                      (!i.key || (s && s.key === i.key)
                                          ? ""
                                          : ("" + i.key).replace(Sf, "$&/") + "/") +
                                      e
                              )),
                          t.push(i)),
                    1
                );
            if (((s = 0), (r = r === "" ? "." : r + ":"), xf(e)))
                for (var l = 0; l < e.length; l++) {
                    o = e[l];
                    var u = r + Cl(o, l);
                    s += io(o, t, n, u, i);
                }
            else if (((u = Y0(e)), typeof u == "function"))
                for (e = u.call(e), l = 0; !(o = e.next()).done; )
                    (o = o.value), (u = r + Cl(o, l++)), (s += io(o, t, n, u, i));
            else if (o === "object")
                throw (
                    ((t = String(e)),
                    Error(
                        "Objects are not valid as a React child (found: " +
                            (t === "[object Object]"
                                ? "object with keys {" + Object.keys(e).join(", ") + "}"
                                : t) +
                            "). If you meant to render a collection of children, use an array instead."
                    ))
                );
            return s;
        }
        function ro(e, t, n) {
            if (e == null) return e;
            var r = [],
                i = 0;
            return (
                io(e, r, "", "", function (o) {
                    return t.call(n, o, i++);
                }),
                r
            );
        }
        function J0(e) {
            if (e._status === -1) {
                var t = e._result;
                (t = t()),
                    t.then(
                        function (n) {
                            (e._status === 0 || e._status === -1) &&
                                ((e._status = 1), (e._result = n));
                        },
                        function (n) {
                            (e._status === 0 || e._status === -1) &&
                                ((e._status = 2), (e._result = n));
                        }
                    ),
                    e._status === -1 && ((e._status = 0), (e._result = t));
            }
            if (e._status === 1) return e._result.default;
            throw e._result;
        }
        var be = { current: null },
            oo = { transition: null },
            q0 = { ReactCurrentDispatcher: be, ReactCurrentBatchConfig: oo, ReactCurrentOwner: Ol };
        function Nf() {
            throw Error("act(...) is not supported in production builds of React.");
        }
        G.Children = {
            map: ro,
            forEach: function (e, t, n) {
                ro(
                    e,
                    function () {
                        t.apply(this, arguments);
                    },
                    n
                );
            },
            count: function (e) {
                var t = 0;
                return (
                    ro(e, function () {
                        t++;
                    }),
                    t
                );
            },
            toArray: function (e) {
                return (
                    ro(e, function (t) {
                        return t;
                    }) || []
                );
            },
            only: function (e) {
                if (!kl(e))
                    throw Error(
                        "React.Children.only expected to receive a single React element child."
                    );
                return e;
            },
        };
        G.Component = $n;
        G.Fragment = V0;
        G.Profiler = j0;
        G.PureComponent = Tl;
        G.StrictMode = U0;
        G.Suspense = Q0;
        G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = q0;
        G.act = Nf;
        G.cloneElement = function (e, t, n) {
            if (e == null)
                throw Error(
                    "React.cloneElement(...): The argument must be a React element, but you passed " +
                        e +
                        "."
                );
            var r = Tf({}, e.props),
                i = e.key,
                o = e.ref,
                s = e._owner;
            if (t != null) {
                if (
                    (t.ref !== void 0 && ((o = t.ref), (s = Ol.current)),
                    t.key !== void 0 && (i = "" + t.key),
                    e.type && e.type.defaultProps)
                )
                    var l = e.type.defaultProps;
                for (u in t)
                    kf.call(t, u) &&
                        !Lf.hasOwnProperty(u) &&
                        (r[u] = t[u] === void 0 && l !== void 0 ? l[u] : t[u]);
            }
            var u = arguments.length - 2;
            if (u === 1) r.children = n;
            else if (1 < u) {
                l = Array(u);
                for (var a = 0; a < u; a++) l[a] = arguments[a + 2];
                r.children = l;
            }
            return { $$typeof: Vr, type: e.type, key: i, ref: o, props: r, _owner: s };
        };
        G.createContext = function (e) {
            return (
                (e = {
                    $$typeof: z0,
                    _currentValue: e,
                    _currentValue2: e,
                    _threadCount: 0,
                    Provider: null,
                    Consumer: null,
                    _defaultValue: null,
                    _globalName: null,
                }),
                (e.Provider = { $$typeof: W0, _context: e }),
                (e.Consumer = e)
            );
        };
        G.createElement = Rf;
        G.createFactory = function (e) {
            var t = Rf.bind(null, e);
            return (t.type = e), t;
        };
        G.createRef = function () {
            return { current: null };
        };
        G.forwardRef = function (e) {
            return { $$typeof: H0, render: e };
        };
        G.isValidElement = kl;
        G.lazy = function (e) {
            return { $$typeof: Z0, _payload: { _status: -1, _result: e }, _init: J0 };
        };
        G.memo = function (e, t) {
            return { $$typeof: X0, type: e, compare: t === void 0 ? null : t };
        };
        G.startTransition = function (e) {
            var t = oo.transition;
            oo.transition = {};
            try {
                e();
            } finally {
                oo.transition = t;
            }
        };
        G.unstable_act = Nf;
        G.useCallback = function (e, t) {
            return be.current.useCallback(e, t);
        };
        G.useContext = function (e) {
            return be.current.useContext(e);
        };
        G.useDebugValue = function () {};
        G.useDeferredValue = function (e) {
            return be.current.useDeferredValue(e);
        };
        G.useEffect = function (e, t) {
            return be.current.useEffect(e, t);
        };
        G.useId = function () {
            return be.current.useId();
        };
        G.useImperativeHandle = function (e, t, n) {
            return be.current.useImperativeHandle(e, t, n);
        };
        G.useInsertionEffect = function (e, t) {
            return be.current.useInsertionEffect(e, t);
        };
        G.useLayoutEffect = function (e, t) {
            return be.current.useLayoutEffect(e, t);
        };
        G.useMemo = function (e, t) {
            return be.current.useMemo(e, t);
        };
        G.useReducer = function (e, t, n) {
            return be.current.useReducer(e, t, n);
        };
        G.useRef = function (e) {
            return be.current.useRef(e);
        };
        G.useState = function (e) {
            return be.current.useState(e);
        };
        G.useSyncExternalStore = function (e, t, n) {
            return be.current.useSyncExternalStore(e, t, n);
        };
        G.useTransition = function () {
            return be.current.useTransition();
        };
        G.version = "18.3.1";
    });
    var N = Qt((pC, _f) => {
        "use strict";
        _f.exports = Af();
    });
    var Wf = Qt((j) => {
        "use strict";
        function Al(e, t) {
            var n = e.length;
            e.push(t);
            e: for (; 0 < n; ) {
                var r = (n - 1) >>> 1,
                    i = e[r];
                if (0 < so(i, t)) (e[r] = t), (e[n] = i), (n = r);
                else break e;
            }
        }
        function rt(e) {
            return e.length === 0 ? null : e[0];
        }
        function uo(e) {
            if (e.length === 0) return null;
            var t = e[0],
                n = e.pop();
            if (n !== t) {
                e[0] = n;
                e: for (var r = 0, i = e.length, o = i >>> 1; r < o; ) {
                    var s = 2 * (r + 1) - 1,
                        l = e[s],
                        u = s + 1,
                        a = e[u];
                    if (0 > so(l, n))
                        u < i && 0 > so(a, l)
                            ? ((e[r] = a), (e[u] = n), (r = u))
                            : ((e[r] = l), (e[s] = n), (r = s));
                    else if (u < i && 0 > so(a, n)) (e[r] = a), (e[u] = n), (r = u);
                    else break e;
                }
            }
            return t;
        }
        function so(e, t) {
            var n = e.sortIndex - t.sortIndex;
            return n !== 0 ? n : e.id - t.id;
        }
        typeof performance == "object" && typeof performance.now == "function"
            ? ((Mf = performance),
              (j.unstable_now = function () {
                  return Mf.now();
              }))
            : ((Ll = Date),
              (Gf = Ll.now()),
              (j.unstable_now = function () {
                  return Ll.now() - Gf;
              }));
        var Mf,
            Ll,
            Gf,
            xt = [],
            Zt = [],
            ey = 1,
            Ye = null,
            Ee = 3,
            ao = !1,
            Cn = !1,
            jr = !1,
            Ff = typeof setTimeout == "function" ? setTimeout : null,
            Bf = typeof clearTimeout == "function" ? clearTimeout : null,
            Pf = typeof setImmediate != "undefined" ? setImmediate : null;
        typeof navigator != "undefined" &&
            navigator.scheduling !== void 0 &&
            navigator.scheduling.isInputPending !== void 0 &&
            navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function _l(e) {
            for (var t = rt(Zt); t !== null; ) {
                if (t.callback === null) uo(Zt);
                else if (t.startTime <= e) uo(Zt), (t.sortIndex = t.expirationTime), Al(xt, t);
                else break;
                t = rt(Zt);
            }
        }
        function Ml(e) {
            if (((jr = !1), _l(e), !Cn))
                if (rt(xt) !== null) (Cn = !0), Pl(Gl);
                else {
                    var t = rt(Zt);
                    t !== null && Dl(Ml, t.startTime - e);
                }
        }
        function Gl(e, t) {
            (Cn = !1), jr && ((jr = !1), Bf(Wr), (Wr = -1)), (ao = !0);
            var n = Ee;
            try {
                for (
                    _l(t), Ye = rt(xt);
                    Ye !== null && (!(Ye.expirationTime > t) || (e && !jf()));

                ) {
                    var r = Ye.callback;
                    if (typeof r == "function") {
                        (Ye.callback = null), (Ee = Ye.priorityLevel);
                        var i = r(Ye.expirationTime <= t);
                        (t = j.unstable_now()),
                            typeof i == "function" ? (Ye.callback = i) : Ye === rt(xt) && uo(xt),
                            _l(t);
                    } else uo(xt);
                    Ye = rt(xt);
                }
                if (Ye !== null) var o = !0;
                else {
                    var s = rt(Zt);
                    s !== null && Dl(Ml, s.startTime - t), (o = !1);
                }
                return o;
            } finally {
                (Ye = null), (Ee = n), (ao = !1);
            }
        }
        var co = !1,
            lo = null,
            Wr = -1,
            Vf = 5,
            Uf = -1;
        function jf() {
            return !(j.unstable_now() - Uf < Vf);
        }
        function Rl() {
            if (lo !== null) {
                var e = j.unstable_now();
                Uf = e;
                var t = !0;
                try {
                    t = lo(!0, e);
                } finally {
                    t ? Ur() : ((co = !1), (lo = null));
                }
            } else co = !1;
        }
        var Ur;
        typeof Pf == "function"
            ? (Ur = function () {
                  Pf(Rl);
              })
            : typeof MessageChannel != "undefined"
            ? ((Nl = new MessageChannel()),
              (Df = Nl.port2),
              (Nl.port1.onmessage = Rl),
              (Ur = function () {
                  Df.postMessage(null);
              }))
            : (Ur = function () {
                  Ff(Rl, 0);
              });
        var Nl, Df;
        function Pl(e) {
            (lo = e), co || ((co = !0), Ur());
        }
        function Dl(e, t) {
            Wr = Ff(function () {
                e(j.unstable_now());
            }, t);
        }
        j.unstable_IdlePriority = 5;
        j.unstable_ImmediatePriority = 1;
        j.unstable_LowPriority = 4;
        j.unstable_NormalPriority = 3;
        j.unstable_Profiling = null;
        j.unstable_UserBlockingPriority = 2;
        j.unstable_cancelCallback = function (e) {
            e.callback = null;
        };
        j.unstable_continueExecution = function () {
            Cn || ao || ((Cn = !0), Pl(Gl));
        };
        j.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
                ? console.error(
                      "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                  )
                : (Vf = 0 < e ? Math.floor(1e3 / e) : 5);
        };
        j.unstable_getCurrentPriorityLevel = function () {
            return Ee;
        };
        j.unstable_getFirstCallbackNode = function () {
            return rt(xt);
        };
        j.unstable_next = function (e) {
            switch (Ee) {
                case 1:
                case 2:
                case 3:
                    var t = 3;
                    break;
                default:
                    t = Ee;
            }
            var n = Ee;
            Ee = t;
            try {
                return e();
            } finally {
                Ee = n;
            }
        };
        j.unstable_pauseExecution = function () {};
        j.unstable_requestPaint = function () {};
        j.unstable_runWithPriority = function (e, t) {
            switch (e) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    e = 3;
            }
            var n = Ee;
            Ee = e;
            try {
                return t();
            } finally {
                Ee = n;
            }
        };
        j.unstable_scheduleCallback = function (e, t, n) {
            var r = j.unstable_now();
            switch (
                (typeof n == "object" && n !== null
                    ? ((n = n.delay), (n = typeof n == "number" && 0 < n ? r + n : r))
                    : (n = r),
                e)
            ) {
                case 1:
                    var i = -1;
                    break;
                case 2:
                    i = 250;
                    break;
                case 5:
                    i = 1073741823;
                    break;
                case 4:
                    i = 1e4;
                    break;
                default:
                    i = 5e3;
            }
            return (
                (i = n + i),
                (e = {
                    id: ey++,
                    callback: t,
                    priorityLevel: e,
                    startTime: n,
                    expirationTime: i,
                    sortIndex: -1,
                }),
                n > r
                    ? ((e.sortIndex = n),
                      Al(Zt, e),
                      rt(xt) === null &&
                          e === rt(Zt) &&
                          (jr ? (Bf(Wr), (Wr = -1)) : (jr = !0), Dl(Ml, n - r)))
                    : ((e.sortIndex = i), Al(xt, e), Cn || ao || ((Cn = !0), Pl(Gl))),
                e
            );
        };
        j.unstable_shouldYield = jf;
        j.unstable_wrapCallback = function (e) {
            var t = Ee;
            return function () {
                var n = Ee;
                Ee = t;
                try {
                    return e.apply(this, arguments);
                } finally {
                    Ee = n;
                }
            };
        };
    });
    var Hf = Qt((hC, zf) => {
        "use strict";
        zf.exports = Wf();
    });
    var Ym = Qt((He) => {
        "use strict";
        var ty = N(),
            We = Hf();
        function S(e) {
            for (
                var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
                n < arguments.length;
                n++
            )
                t += "&args[]=" + encodeURIComponent(arguments[n]);
            return (
                "Minified React error #" +
                e +
                "; visit " +
                t +
                " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
            );
        }
        var Jd = new Set(),
            fi = {};
        function Dn(e, t) {
            vr(e, t), vr(e + "Capture", t);
        }
        function vr(e, t) {
            for (fi[e] = t, e = 0; e < t.length; e++) Jd.add(t[e]);
        }
        var Bt = !(
                typeof window == "undefined" ||
                typeof window.document == "undefined" ||
                typeof window.document.createElement == "undefined"
            ),
            su = Object.prototype.hasOwnProperty,
            ny =
                /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
            Qf = {},
            Xf = {};
        function ry(e) {
            return su.call(Xf, e)
                ? !0
                : su.call(Qf, e)
                ? !1
                : ny.test(e)
                ? (Xf[e] = !0)
                : ((Qf[e] = !0), !1);
        }
        function iy(e, t, n, r) {
            if (n !== null && n.type === 0) return !1;
            switch (typeof t) {
                case "function":
                case "symbol":
                    return !0;
                case "boolean":
                    return r
                        ? !1
                        : n !== null
                        ? !n.acceptsBooleans
                        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
                default:
                    return !1;
            }
        }
        function oy(e, t, n, r) {
            if (t === null || typeof t == "undefined" || iy(e, t, n, r)) return !0;
            if (r) return !1;
            if (n !== null)
                switch (n.type) {
                    case 3:
                        return !t;
                    case 4:
                        return t === !1;
                    case 5:
                        return isNaN(t);
                    case 6:
                        return isNaN(t) || 1 > t;
                }
            return !1;
        }
        function Le(e, t, n, r, i, o, s) {
            (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
                (this.attributeName = r),
                (this.attributeNamespace = i),
                (this.mustUseProperty = n),
                (this.propertyName = e),
                (this.type = t),
                (this.sanitizeURL = o),
                (this.removeEmptyString = s);
        }
        var me = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
            .split(" ")
            .forEach(function (e) {
                me[e] = new Le(e, 0, !1, e, null, !1, !1);
            });
        [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
        ].forEach(function (e) {
            var t = e[0];
            me[t] = new Le(t, 1, !1, e[1], null, !1, !1);
        });
        ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
            me[e] = new Le(e, 2, !1, e.toLowerCase(), null, !1, !1);
        });
        ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(
            function (e) {
                me[e] = new Le(e, 2, !1, e, null, !1, !1);
            }
        );
        "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
                me[e] = new Le(e, 3, !1, e.toLowerCase(), null, !1, !1);
            });
        ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            me[e] = new Le(e, 3, !0, e, null, !1, !1);
        });
        ["capture", "download"].forEach(function (e) {
            me[e] = new Le(e, 4, !1, e, null, !1, !1);
        });
        ["cols", "rows", "size", "span"].forEach(function (e) {
            me[e] = new Le(e, 6, !1, e, null, !1, !1);
        });
        ["rowSpan", "start"].forEach(function (e) {
            me[e] = new Le(e, 5, !1, e.toLowerCase(), null, !1, !1);
        });
        var Ju = /[\-:]([a-z])/g;
        function qu(e) {
            return e[1].toUpperCase();
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
            .split(" ")
            .forEach(function (e) {
                var t = e.replace(Ju, qu);
                me[t] = new Le(t, 1, !1, e, null, !1, !1);
            });
        "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
                var t = e.replace(Ju, qu);
                me[t] = new Le(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            });
        ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(Ju, qu);
            me[t] = new Le(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
        });
        ["tabIndex", "crossOrigin"].forEach(function (e) {
            me[e] = new Le(e, 1, !1, e.toLowerCase(), null, !1, !1);
        });
        me.xlinkHref = new Le(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1
        );
        ["src", "href", "action", "formAction"].forEach(function (e) {
            me[e] = new Le(e, 1, !1, e.toLowerCase(), null, !0, !0);
        });
        function ea(e, t, n, r) {
            var i = me.hasOwnProperty(t) ? me[t] : null;
            (i !== null
                ? i.type !== 0
                : r ||
                  !(2 < t.length) ||
                  (t[0] !== "o" && t[0] !== "O") ||
                  (t[1] !== "n" && t[1] !== "N")) &&
                (oy(t, n, i, r) && (n = null),
                r || i === null
                    ? ry(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
                    : i.mustUseProperty
                    ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
                    : ((t = i.attributeName),
                      (r = i.attributeNamespace),
                      n === null
                          ? e.removeAttribute(t)
                          : ((i = i.type),
                            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
                            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        var Wt = ty.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
            fo = Symbol.for("react.element"),
            qn = Symbol.for("react.portal"),
            er = Symbol.for("react.fragment"),
            ta = Symbol.for("react.strict_mode"),
            lu = Symbol.for("react.profiler"),
            qd = Symbol.for("react.provider"),
            ep = Symbol.for("react.context"),
            na = Symbol.for("react.forward_ref"),
            uu = Symbol.for("react.suspense"),
            au = Symbol.for("react.suspense_list"),
            ra = Symbol.for("react.memo"),
            $t = Symbol.for("react.lazy");
        Symbol.for("react.scope");
        Symbol.for("react.debug_trace_mode");
        var tp = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden");
        Symbol.for("react.cache");
        Symbol.for("react.tracing_marker");
        var Zf = Symbol.iterator;
        function zr(e) {
            return e === null || typeof e != "object"
                ? null
                : ((e = (Zf && e[Zf]) || e["@@iterator"]), typeof e == "function" ? e : null);
        }
        var J = Object.assign,
            Fl;
        function Jr(e) {
            if (Fl === void 0)
                try {
                    throw Error();
                } catch (n) {
                    var t = n.stack.trim().match(/\n( *(at )?)/);
                    Fl = (t && t[1]) || "";
                }
            return (
                `
` +
                Fl +
                e
            );
        }
        var Bl = !1;
        function Vl(e, t) {
            if (!e || Bl) return "";
            Bl = !0;
            var n = Error.prepareStackTrace;
            Error.prepareStackTrace = void 0;
            try {
                if (t)
                    if (
                        ((t = function () {
                            throw Error();
                        }),
                        Object.defineProperty(t.prototype, "props", {
                            set: function () {
                                throw Error();
                            },
                        }),
                        typeof Reflect == "object" && Reflect.construct)
                    ) {
                        try {
                            Reflect.construct(t, []);
                        } catch (a) {
                            var r = a;
                        }
                        Reflect.construct(e, [], t);
                    } else {
                        try {
                            t.call();
                        } catch (a) {
                            r = a;
                        }
                        e.call(t.prototype);
                    }
                else {
                    try {
                        throw Error();
                    } catch (a) {
                        r = a;
                    }
                    e();
                }
            } catch (a) {
                if (a && r && typeof a.stack == "string") {
                    for (
                        var i = a.stack.split(`
`),
                            o = r.stack.split(`
`),
                            s = i.length - 1,
                            l = o.length - 1;
                        1 <= s && 0 <= l && i[s] !== o[l];

                    )
                        l--;
                    for (; 1 <= s && 0 <= l; s--, l--)
                        if (i[s] !== o[l]) {
                            if (s !== 1 || l !== 1)
                                do
                                    if ((s--, l--, 0 > l || i[s] !== o[l])) {
                                        var u =
                                            `
` + i[s].replace(" at new ", " at ");
                                        return (
                                            e.displayName &&
                                                u.includes("<anonymous>") &&
                                                (u = u.replace("<anonymous>", e.displayName)),
                                            u
                                        );
                                    }
                                while (1 <= s && 0 <= l);
                            break;
                        }
                }
            } finally {
                (Bl = !1), (Error.prepareStackTrace = n);
            }
            return (e = e ? e.displayName || e.name : "") ? Jr(e) : "";
        }
        function sy(e) {
            switch (e.tag) {
                case 5:
                    return Jr(e.type);
                case 16:
                    return Jr("Lazy");
                case 13:
                    return Jr("Suspense");
                case 19:
                    return Jr("SuspenseList");
                case 0:
                case 2:
                case 15:
                    return (e = Vl(e.type, !1)), e;
                case 11:
                    return (e = Vl(e.type.render, !1)), e;
                case 1:
                    return (e = Vl(e.type, !0)), e;
                default:
                    return "";
            }
        }
        function cu(e) {
            if (e == null) return null;
            if (typeof e == "function") return e.displayName || e.name || null;
            if (typeof e == "string") return e;
            switch (e) {
                case er:
                    return "Fragment";
                case qn:
                    return "Portal";
                case lu:
                    return "Profiler";
                case ta:
                    return "StrictMode";
                case uu:
                    return "Suspense";
                case au:
                    return "SuspenseList";
            }
            if (typeof e == "object")
                switch (e.$$typeof) {
                    case ep:
                        return (e.displayName || "Context") + ".Consumer";
                    case qd:
                        return (e._context.displayName || "Context") + ".Provider";
                    case na:
                        var t = e.render;
                        return (
                            (e = e.displayName),
                            e ||
                                ((e = t.displayName || t.name || ""),
                                (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
                            e
                        );
                    case ra:
                        return (t = e.displayName || null), t !== null ? t : cu(e.type) || "Memo";
                    case $t:
                        (t = e._payload), (e = e._init);
                        try {
                            return cu(e(t));
                        } catch (n) {}
                }
            return null;
        }
        function ly(e) {
            var t = e.type;
            switch (e.tag) {
                case 24:
                    return "Cache";
                case 9:
                    return (t.displayName || "Context") + ".Consumer";
                case 10:
                    return (t._context.displayName || "Context") + ".Provider";
                case 18:
                    return "DehydratedFragment";
                case 11:
                    return (
                        (e = t.render),
                        (e = e.displayName || e.name || ""),
                        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
                    );
                case 7:
                    return "Fragment";
                case 5:
                    return t;
                case 4:
                    return "Portal";
                case 3:
                    return "Root";
                case 6:
                    return "Text";
                case 16:
                    return cu(t);
                case 8:
                    return t === ta ? "StrictMode" : "Mode";
                case 22:
                    return "Offscreen";
                case 12:
                    return "Profiler";
                case 21:
                    return "Scope";
                case 13:
                    return "Suspense";
                case 19:
                    return "SuspenseList";
                case 25:
                    return "TracingMarker";
                case 1:
                case 0:
                case 17:
                case 2:
                case 14:
                case 15:
                    if (typeof t == "function") return t.displayName || t.name || null;
                    if (typeof t == "string") return t;
            }
            return null;
        }
        function fn(e) {
            switch (typeof e) {
                case "boolean":
                case "number":
                case "string":
                case "undefined":
                    return e;
                case "object":
                    return e;
                default:
                    return "";
            }
        }
        function np(e) {
            var t = e.type;
            return (
                (e = e.nodeName) &&
                e.toLowerCase() === "input" &&
                (t === "checkbox" || t === "radio")
            );
        }
        function uy(e) {
            var t = np(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
            if (
                !e.hasOwnProperty(t) &&
                typeof n != "undefined" &&
                typeof n.get == "function" &&
                typeof n.set == "function"
            ) {
                var i = n.get,
                    o = n.set;
                return (
                    Object.defineProperty(e, t, {
                        configurable: !0,
                        get: function () {
                            return i.call(this);
                        },
                        set: function (s) {
                            (r = "" + s), o.call(this, s);
                        },
                    }),
                    Object.defineProperty(e, t, { enumerable: n.enumerable }),
                    {
                        getValue: function () {
                            return r;
                        },
                        setValue: function (s) {
                            r = "" + s;
                        },
                        stopTracking: function () {
                            (e._valueTracker = null), delete e[t];
                        },
                    }
                );
            }
        }
        function po(e) {
            e._valueTracker || (e._valueTracker = uy(e));
        }
        function rp(e) {
            if (!e) return !1;
            var t = e._valueTracker;
            if (!t) return !0;
            var n = t.getValue(),
                r = "";
            return (
                e && (r = np(e) ? (e.checked ? "true" : "false") : e.value),
                (e = r),
                e !== n ? (t.setValue(e), !0) : !1
            );
        }
        function Uo(e) {
            if (
                ((e = e || (typeof document != "undefined" ? document : void 0)),
                typeof e == "undefined")
            )
                return null;
            try {
                return e.activeElement || e.body;
            } catch (t) {
                return e.body;
            }
        }
        function fu(e, t) {
            var n = t.checked;
            return J({}, t, {
                defaultChecked: void 0,
                defaultValue: void 0,
                value: void 0,
                checked: n != null ? n : e._wrapperState.initialChecked,
            });
        }
        function Yf(e, t) {
            var n = t.defaultValue == null ? "" : t.defaultValue,
                r = t.checked != null ? t.checked : t.defaultChecked;
            (n = fn(t.value != null ? t.value : n)),
                (e._wrapperState = {
                    initialChecked: r,
                    initialValue: n,
                    controlled:
                        t.type === "checkbox" || t.type === "radio"
                            ? t.checked != null
                            : t.value != null,
                });
        }
        function ip(e, t) {
            (t = t.checked), t != null && ea(e, "checked", t, !1);
        }
        function du(e, t) {
            ip(e, t);
            var n = fn(t.value),
                r = t.type;
            if (n != null)
                r === "number"
                    ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
                    : e.value !== "" + n && (e.value = "" + n);
            else if (r === "submit" || r === "reset") {
                e.removeAttribute("value");
                return;
            }
            t.hasOwnProperty("value")
                ? pu(e, t.type, n)
                : t.hasOwnProperty("defaultValue") && pu(e, t.type, fn(t.defaultValue)),
                t.checked == null &&
                    t.defaultChecked != null &&
                    (e.defaultChecked = !!t.defaultChecked);
        }
        function $f(e, t, n) {
            if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
                var r = t.type;
                if (
                    !((r !== "submit" && r !== "reset") || (t.value !== void 0 && t.value !== null))
                )
                    return;
                (t = "" + e._wrapperState.initialValue),
                    n || t === e.value || (e.value = t),
                    (e.defaultValue = t);
            }
            (n = e.name),
                n !== "" && (e.name = ""),
                (e.defaultChecked = !!e._wrapperState.initialChecked),
                n !== "" && (e.name = n);
        }
        function pu(e, t, n) {
            (t !== "number" || Uo(e.ownerDocument) !== e) &&
                (n == null
                    ? (e.defaultValue = "" + e._wrapperState.initialValue)
                    : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        var qr = Array.isArray;
        function fr(e, t, n, r) {
            if (((e = e.options), t)) {
                t = {};
                for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
                for (n = 0; n < e.length; n++)
                    (i = t.hasOwnProperty("$" + e[n].value)),
                        e[n].selected !== i && (e[n].selected = i),
                        i && r && (e[n].defaultSelected = !0);
            } else {
                for (n = "" + fn(n), t = null, i = 0; i < e.length; i++) {
                    if (e[i].value === n) {
                        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
                        return;
                    }
                    t !== null || e[i].disabled || (t = e[i]);
                }
                t !== null && (t.selected = !0);
            }
        }
        function mu(e, t) {
            if (t.dangerouslySetInnerHTML != null) throw Error(S(91));
            return J({}, t, {
                value: void 0,
                defaultValue: void 0,
                children: "" + e._wrapperState.initialValue,
            });
        }
        function Kf(e, t) {
            var n = t.value;
            if (n == null) {
                if (((n = t.children), (t = t.defaultValue), n != null)) {
                    if (t != null) throw Error(S(92));
                    if (qr(n)) {
                        if (1 < n.length) throw Error(S(93));
                        n = n[0];
                    }
                    t = n;
                }
                t == null && (t = ""), (n = t);
            }
            e._wrapperState = { initialValue: fn(n) };
        }
        function op(e, t) {
            var n = fn(t.value),
                r = fn(t.defaultValue);
            n != null &&
                ((n = "" + n),
                n !== e.value && (e.value = n),
                t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
                r != null && (e.defaultValue = "" + r);
        }
        function Jf(e) {
            var t = e.textContent;
            t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
        }
        function sp(e) {
            switch (e) {
                case "svg":
                    return "http://www.w3.org/2000/svg";
                case "math":
                    return "http://www.w3.org/1998/Math/MathML";
                default:
                    return "http://www.w3.org/1999/xhtml";
            }
        }
        function hu(e, t) {
            return e == null || e === "http://www.w3.org/1999/xhtml"
                ? sp(t)
                : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
                ? "http://www.w3.org/1999/xhtml"
                : e;
        }
        var mo,
            lp = (function (e) {
                return typeof MSApp != "undefined" && MSApp.execUnsafeLocalFunction
                    ? function (t, n, r, i) {
                          MSApp.execUnsafeLocalFunction(function () {
                              return e(t, n, r, i);
                          });
                      }
                    : e;
            })(function (e, t) {
                if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
                    e.innerHTML = t;
                else {
                    for (
                        mo = mo || document.createElement("div"),
                            mo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
                            t = mo.firstChild;
                        e.firstChild;

                    )
                        e.removeChild(e.firstChild);
                    for (; t.firstChild; ) e.appendChild(t.firstChild);
                }
            });
        function di(e, t) {
            if (t) {
                var n = e.firstChild;
                if (n && n === e.lastChild && n.nodeType === 3) {
                    n.nodeValue = t;
                    return;
                }
            }
            e.textContent = t;
        }
        var ni = {
                animationIterationCount: !0,
                aspectRatio: !0,
                borderImageOutset: !0,
                borderImageSlice: !0,
                borderImageWidth: !0,
                boxFlex: !0,
                boxFlexGroup: !0,
                boxOrdinalGroup: !0,
                columnCount: !0,
                columns: !0,
                flex: !0,
                flexGrow: !0,
                flexPositive: !0,
                flexShrink: !0,
                flexNegative: !0,
                flexOrder: !0,
                gridArea: !0,
                gridRow: !0,
                gridRowEnd: !0,
                gridRowSpan: !0,
                gridRowStart: !0,
                gridColumn: !0,
                gridColumnEnd: !0,
                gridColumnSpan: !0,
                gridColumnStart: !0,
                fontWeight: !0,
                lineClamp: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                tabSize: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0,
                fillOpacity: !0,
                floodOpacity: !0,
                stopOpacity: !0,
                strokeDasharray: !0,
                strokeDashoffset: !0,
                strokeMiterlimit: !0,
                strokeOpacity: !0,
                strokeWidth: !0,
            },
            ay = ["Webkit", "ms", "Moz", "O"];
        Object.keys(ni).forEach(function (e) {
            ay.forEach(function (t) {
                (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ni[t] = ni[e]);
            });
        });
        function up(e, t, n) {
            return t == null || typeof t == "boolean" || t === ""
                ? ""
                : n || typeof t != "number" || t === 0 || (ni.hasOwnProperty(e) && ni[e])
                ? ("" + t).trim()
                : t + "px";
        }
        function ap(e, t) {
            e = e.style;
            for (var n in t)
                if (t.hasOwnProperty(n)) {
                    var r = n.indexOf("--") === 0,
                        i = up(n, t[n], r);
                    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
                }
        }
        var cy = J(
            { menuitem: !0 },
            {
                area: !0,
                base: !0,
                br: !0,
                col: !0,
                embed: !0,
                hr: !0,
                img: !0,
                input: !0,
                keygen: !0,
                link: !0,
                meta: !0,
                param: !0,
                source: !0,
                track: !0,
                wbr: !0,
            }
        );
        function gu(e, t) {
            if (t) {
                if (cy[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
                    throw Error(S(137, e));
                if (t.dangerouslySetInnerHTML != null) {
                    if (t.children != null) throw Error(S(60));
                    if (
                        typeof t.dangerouslySetInnerHTML != "object" ||
                        !("__html" in t.dangerouslySetInnerHTML)
                    )
                        throw Error(S(61));
                }
                if (t.style != null && typeof t.style != "object") throw Error(S(62));
            }
        }
        function vu(e, t) {
            if (e.indexOf("-") === -1) return typeof t.is == "string";
            switch (e) {
                case "annotation-xml":
                case "color-profile":
                case "font-face":
                case "font-face-src":
                case "font-face-uri":
                case "font-face-format":
                case "font-face-name":
                case "missing-glyph":
                    return !1;
                default:
                    return !0;
            }
        }
        var yu = null;
        function ia(e) {
            return (
                (e = e.target || e.srcElement || window),
                e.correspondingUseElement && (e = e.correspondingUseElement),
                e.nodeType === 3 ? e.parentNode : e
            );
        }
        var wu = null,
            dr = null,
            pr = null;
        function qf(e) {
            if ((e = Ri(e))) {
                if (typeof wu != "function") throw Error(S(280));
                var t = e.stateNode;
                t && ((t = hs(t)), wu(e.stateNode, e.type, t));
            }
        }
        function cp(e) {
            dr ? (pr ? pr.push(e) : (pr = [e])) : (dr = e);
        }
        function fp() {
            if (dr) {
                var e = dr,
                    t = pr;
                if (((pr = dr = null), qf(e), t)) for (e = 0; e < t.length; e++) qf(t[e]);
            }
        }
        function dp(e, t) {
            return e(t);
        }
        function pp() {}
        var Ul = !1;
        function mp(e, t, n) {
            if (Ul) return e(t, n);
            Ul = !0;
            try {
                return dp(e, t, n);
            } finally {
                (Ul = !1), (dr !== null || pr !== null) && (pp(), fp());
            }
        }
        function pi(e, t) {
            var n = e.stateNode;
            if (n === null) return null;
            var r = hs(n);
            if (r === null) return null;
            n = r[t];
            e: switch (t) {
                case "onClick":
                case "onClickCapture":
                case "onDoubleClick":
                case "onDoubleClickCapture":
                case "onMouseDown":
                case "onMouseDownCapture":
                case "onMouseMove":
                case "onMouseMoveCapture":
                case "onMouseUp":
                case "onMouseUpCapture":
                case "onMouseEnter":
                    (r = !r.disabled) ||
                        ((e = e.type),
                        (r = !(
                            e === "button" ||
                            e === "input" ||
                            e === "select" ||
                            e === "textarea"
                        ))),
                        (e = !r);
                    break e;
                default:
                    e = !1;
            }
            if (e) return null;
            if (n && typeof n != "function") throw Error(S(231, t, typeof n));
            return n;
        }
        var Eu = !1;
        if (Bt)
            try {
                (Kn = {}),
                    Object.defineProperty(Kn, "passive", {
                        get: function () {
                            Eu = !0;
                        },
                    }),
                    window.addEventListener("test", Kn, Kn),
                    window.removeEventListener("test", Kn, Kn);
            } catch (e) {
                Eu = !1;
            }
        var Kn;
        function fy(e, t, n, r, i, o, s, l, u) {
            var a = Array.prototype.slice.call(arguments, 3);
            try {
                t.apply(n, a);
            } catch (f) {
                this.onError(f);
            }
        }
        var ri = !1,
            jo = null,
            Wo = !1,
            Iu = null,
            dy = {
                onError: function (e) {
                    (ri = !0), (jo = e);
                },
            };
        function py(e, t, n, r, i, o, s, l, u) {
            (ri = !1), (jo = null), fy.apply(dy, arguments);
        }
        function my(e, t, n, r, i, o, s, l, u) {
            if ((py.apply(this, arguments), ri)) {
                if (ri) {
                    var a = jo;
                    (ri = !1), (jo = null);
                } else throw Error(S(198));
                Wo || ((Wo = !0), (Iu = a));
            }
        }
        function Fn(e) {
            var t = e,
                n = e;
            if (e.alternate) for (; t.return; ) t = t.return;
            else {
                e = t;
                do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
                while (e);
            }
            return t.tag === 3 ? n : null;
        }
        function hp(e) {
            if (e.tag === 13) {
                var t = e.memoizedState;
                if (
                    (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
                    t !== null)
                )
                    return t.dehydrated;
            }
            return null;
        }
        function ed(e) {
            if (Fn(e) !== e) throw Error(S(188));
        }
        function hy(e) {
            var t = e.alternate;
            if (!t) {
                if (((t = Fn(e)), t === null)) throw Error(S(188));
                return t !== e ? null : e;
            }
            for (var n = e, r = t; ; ) {
                var i = n.return;
                if (i === null) break;
                var o = i.alternate;
                if (o === null) {
                    if (((r = i.return), r !== null)) {
                        n = r;
                        continue;
                    }
                    break;
                }
                if (i.child === o.child) {
                    for (o = i.child; o; ) {
                        if (o === n) return ed(i), e;
                        if (o === r) return ed(i), t;
                        o = o.sibling;
                    }
                    throw Error(S(188));
                }
                if (n.return !== r.return) (n = i), (r = o);
                else {
                    for (var s = !1, l = i.child; l; ) {
                        if (l === n) {
                            (s = !0), (n = i), (r = o);
                            break;
                        }
                        if (l === r) {
                            (s = !0), (r = i), (n = o);
                            break;
                        }
                        l = l.sibling;
                    }
                    if (!s) {
                        for (l = o.child; l; ) {
                            if (l === n) {
                                (s = !0), (n = o), (r = i);
                                break;
                            }
                            if (l === r) {
                                (s = !0), (r = o), (n = i);
                                break;
                            }
                            l = l.sibling;
                        }
                        if (!s) throw Error(S(189));
                    }
                }
                if (n.alternate !== r) throw Error(S(190));
            }
            if (n.tag !== 3) throw Error(S(188));
            return n.stateNode.current === n ? e : t;
        }
        function gp(e) {
            return (e = hy(e)), e !== null ? vp(e) : null;
        }
        function vp(e) {
            if (e.tag === 5 || e.tag === 6) return e;
            for (e = e.child; e !== null; ) {
                var t = vp(e);
                if (t !== null) return t;
                e = e.sibling;
            }
            return null;
        }
        var yp = We.unstable_scheduleCallback,
            td = We.unstable_cancelCallback,
            gy = We.unstable_shouldYield,
            vy = We.unstable_requestPaint,
            ne = We.unstable_now,
            yy = We.unstable_getCurrentPriorityLevel,
            oa = We.unstable_ImmediatePriority,
            wp = We.unstable_UserBlockingPriority,
            zo = We.unstable_NormalPriority,
            wy = We.unstable_LowPriority,
            Ep = We.unstable_IdlePriority,
            fs = null,
            bt = null;
        function Ey(e) {
            if (bt && typeof bt.onCommitFiberRoot == "function")
                try {
                    bt.onCommitFiberRoot(fs, e, void 0, (e.current.flags & 128) === 128);
                } catch (t) {}
        }
        var ut = Math.clz32 ? Math.clz32 : Sy,
            Iy = Math.log,
            xy = Math.LN2;
        function Sy(e) {
            return (e >>>= 0), e === 0 ? 32 : (31 - ((Iy(e) / xy) | 0)) | 0;
        }
        var ho = 64,
            go = 4194304;
        function ei(e) {
            switch (e & -e) {
                case 1:
                    return 1;
                case 2:
                    return 2;
                case 4:
                    return 4;
                case 8:
                    return 8;
                case 16:
                    return 16;
                case 32:
                    return 32;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                    return e & 4194240;
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    return e & 130023424;
                case 134217728:
                    return 134217728;
                case 268435456:
                    return 268435456;
                case 536870912:
                    return 536870912;
                case 1073741824:
                    return 1073741824;
                default:
                    return e;
            }
        }
        function Ho(e, t) {
            var n = e.pendingLanes;
            if (n === 0) return 0;
            var r = 0,
                i = e.suspendedLanes,
                o = e.pingedLanes,
                s = n & 268435455;
            if (s !== 0) {
                var l = s & ~i;
                l !== 0 ? (r = ei(l)) : ((o &= s), o !== 0 && (r = ei(o)));
            } else (s = n & ~i), s !== 0 ? (r = ei(s)) : o !== 0 && (r = ei(o));
            if (r === 0) return 0;
            if (
                t !== 0 &&
                t !== r &&
                !(t & i) &&
                ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
            )
                return t;
            if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
                for (e = e.entanglements, t &= r; 0 < t; )
                    (n = 31 - ut(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
            return r;
        }
        function Cy(e, t) {
            switch (e) {
                case 1:
                case 2:
                case 4:
                    return t + 250;
                case 8:
                case 16:
                case 32:
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                    return t + 5e3;
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    return -1;
                case 134217728:
                case 268435456:
                case 536870912:
                case 1073741824:
                    return -1;
                default:
                    return -1;
            }
        }
        function Ty(e, t) {
            for (
                var n = e.suspendedLanes,
                    r = e.pingedLanes,
                    i = e.expirationTimes,
                    o = e.pendingLanes;
                0 < o;

            ) {
                var s = 31 - ut(o),
                    l = 1 << s,
                    u = i[s];
                u === -1
                    ? (!(l & n) || l & r) && (i[s] = Cy(l, t))
                    : u <= t && (e.expiredLanes |= l),
                    (o &= ~l);
            }
        }
        function xu(e) {
            return (
                (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
            );
        }
        function Ip() {
            var e = ho;
            return (ho <<= 1), !(ho & 4194240) && (ho = 64), e;
        }
        function jl(e) {
            for (var t = [], n = 0; 31 > n; n++) t.push(e);
            return t;
        }
        function ki(e, t, n) {
            (e.pendingLanes |= t),
                t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
                (e = e.eventTimes),
                (t = 31 - ut(t)),
                (e[t] = n);
        }
        function by(e, t) {
            var n = e.pendingLanes & ~t;
            (e.pendingLanes = t),
                (e.suspendedLanes = 0),
                (e.pingedLanes = 0),
                (e.expiredLanes &= t),
                (e.mutableReadLanes &= t),
                (e.entangledLanes &= t),
                (t = e.entanglements);
            var r = e.eventTimes;
            for (e = e.expirationTimes; 0 < n; ) {
                var i = 31 - ut(n),
                    o = 1 << i;
                (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
            }
        }
        function sa(e, t) {
            var n = (e.entangledLanes |= t);
            for (e = e.entanglements; n; ) {
                var r = 31 - ut(n),
                    i = 1 << r;
                (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
            }
        }
        var B = 0;
        function xp(e) {
            return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
        }
        var Sp,
            la,
            Cp,
            Tp,
            bp,
            Su = !1,
            vo = [],
            nn = null,
            rn = null,
            on = null,
            mi = new Map(),
            hi = new Map(),
            Jt = [],
            Oy =
                "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
                    " "
                );
        function nd(e, t) {
            switch (e) {
                case "focusin":
                case "focusout":
                    nn = null;
                    break;
                case "dragenter":
                case "dragleave":
                    rn = null;
                    break;
                case "mouseover":
                case "mouseout":
                    on = null;
                    break;
                case "pointerover":
                case "pointerout":
                    mi.delete(t.pointerId);
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                    hi.delete(t.pointerId);
            }
        }
        function Hr(e, t, n, r, i, o) {
            return e === null || e.nativeEvent !== o
                ? ((e = {
                      blockedOn: t,
                      domEventName: n,
                      eventSystemFlags: r,
                      nativeEvent: o,
                      targetContainers: [i],
                  }),
                  t !== null && ((t = Ri(t)), t !== null && la(t)),
                  e)
                : ((e.eventSystemFlags |= r),
                  (t = e.targetContainers),
                  i !== null && t.indexOf(i) === -1 && t.push(i),
                  e);
        }
        function ky(e, t, n, r, i) {
            switch (t) {
                case "focusin":
                    return (nn = Hr(nn, e, t, n, r, i)), !0;
                case "dragenter":
                    return (rn = Hr(rn, e, t, n, r, i)), !0;
                case "mouseover":
                    return (on = Hr(on, e, t, n, r, i)), !0;
                case "pointerover":
                    var o = i.pointerId;
                    return mi.set(o, Hr(mi.get(o) || null, e, t, n, r, i)), !0;
                case "gotpointercapture":
                    return (o = i.pointerId), hi.set(o, Hr(hi.get(o) || null, e, t, n, r, i)), !0;
            }
            return !1;
        }
        function Op(e) {
            var t = On(e.target);
            if (t !== null) {
                var n = Fn(t);
                if (n !== null) {
                    if (((t = n.tag), t === 13)) {
                        if (((t = hp(n)), t !== null)) {
                            (e.blockedOn = t),
                                bp(e.priority, function () {
                                    Cp(n);
                                });
                            return;
                        }
                    } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                        return;
                    }
                }
            }
            e.blockedOn = null;
        }
        function No(e) {
            if (e.blockedOn !== null) return !1;
            for (var t = e.targetContainers; 0 < t.length; ) {
                var n = Cu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
                if (n === null) {
                    n = e.nativeEvent;
                    var r = new n.constructor(n.type, n);
                    (yu = r), n.target.dispatchEvent(r), (yu = null);
                } else return (t = Ri(n)), t !== null && la(t), (e.blockedOn = n), !1;
                t.shift();
            }
            return !0;
        }
        function rd(e, t, n) {
            No(e) && n.delete(t);
        }
        function Ly() {
            (Su = !1),
                nn !== null && No(nn) && (nn = null),
                rn !== null && No(rn) && (rn = null),
                on !== null && No(on) && (on = null),
                mi.forEach(rd),
                hi.forEach(rd);
        }
        function Qr(e, t) {
            e.blockedOn === t &&
                ((e.blockedOn = null),
                Su || ((Su = !0), We.unstable_scheduleCallback(We.unstable_NormalPriority, Ly)));
        }
        function gi(e) {
            function t(i) {
                return Qr(i, e);
            }
            if (0 < vo.length) {
                Qr(vo[0], e);
                for (var n = 1; n < vo.length; n++) {
                    var r = vo[n];
                    r.blockedOn === e && (r.blockedOn = null);
                }
            }
            for (
                nn !== null && Qr(nn, e),
                    rn !== null && Qr(rn, e),
                    on !== null && Qr(on, e),
                    mi.forEach(t),
                    hi.forEach(t),
                    n = 0;
                n < Jt.length;
                n++
            )
                (r = Jt[n]), r.blockedOn === e && (r.blockedOn = null);
            for (; 0 < Jt.length && ((n = Jt[0]), n.blockedOn === null); )
                Op(n), n.blockedOn === null && Jt.shift();
        }
        var mr = Wt.ReactCurrentBatchConfig,
            Qo = !0;
        function Ry(e, t, n, r) {
            var i = B,
                o = mr.transition;
            mr.transition = null;
            try {
                (B = 1), ua(e, t, n, r);
            } finally {
                (B = i), (mr.transition = o);
            }
        }
        function Ny(e, t, n, r) {
            var i = B,
                o = mr.transition;
            mr.transition = null;
            try {
                (B = 4), ua(e, t, n, r);
            } finally {
                (B = i), (mr.transition = o);
            }
        }
        function ua(e, t, n, r) {
            if (Qo) {
                var i = Cu(e, t, n, r);
                if (i === null) Yl(e, t, r, Xo, n), nd(e, r);
                else if (ky(i, e, t, n, r)) r.stopPropagation();
                else if ((nd(e, r), t & 4 && -1 < Oy.indexOf(e))) {
                    for (; i !== null; ) {
                        var o = Ri(i);
                        if (
                            (o !== null && Sp(o),
                            (o = Cu(e, t, n, r)),
                            o === null && Yl(e, t, r, Xo, n),
                            o === i)
                        )
                            break;
                        i = o;
                    }
                    i !== null && r.stopPropagation();
                } else Yl(e, t, r, null, n);
            }
        }
        var Xo = null;
        function Cu(e, t, n, r) {
            if (((Xo = null), (e = ia(r)), (e = On(e)), e !== null))
                if (((t = Fn(e)), t === null)) e = null;
                else if (((n = t.tag), n === 13)) {
                    if (((e = hp(t)), e !== null)) return e;
                    e = null;
                } else if (n === 3) {
                    if (t.stateNode.current.memoizedState.isDehydrated)
                        return t.tag === 3 ? t.stateNode.containerInfo : null;
                    e = null;
                } else t !== e && (e = null);
            return (Xo = e), null;
        }
        function kp(e) {
            switch (e) {
                case "cancel":
                case "click":
                case "close":
                case "contextmenu":
                case "copy":
                case "cut":
                case "auxclick":
                case "dblclick":
                case "dragend":
                case "dragstart":
                case "drop":
                case "focusin":
                case "focusout":
                case "input":
                case "invalid":
                case "keydown":
                case "keypress":
                case "keyup":
                case "mousedown":
                case "mouseup":
                case "paste":
                case "pause":
                case "play":
                case "pointercancel":
                case "pointerdown":
                case "pointerup":
                case "ratechange":
                case "reset":
                case "resize":
                case "seeked":
                case "submit":
                case "touchcancel":
                case "touchend":
                case "touchstart":
                case "volumechange":
                case "change":
                case "selectionchange":
                case "textInput":
                case "compositionstart":
                case "compositionend":
                case "compositionupdate":
                case "beforeblur":
                case "afterblur":
                case "beforeinput":
                case "blur":
                case "fullscreenchange":
                case "focus":
                case "hashchange":
                case "popstate":
                case "select":
                case "selectstart":
                    return 1;
                case "drag":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "mousemove":
                case "mouseout":
                case "mouseover":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "scroll":
                case "toggle":
                case "touchmove":
                case "wheel":
                case "mouseenter":
                case "mouseleave":
                case "pointerenter":
                case "pointerleave":
                    return 4;
                case "message":
                    switch (yy()) {
                        case oa:
                            return 1;
                        case wp:
                            return 4;
                        case zo:
                        case wy:
                            return 16;
                        case Ep:
                            return 536870912;
                        default:
                            return 16;
                    }
                default:
                    return 16;
            }
        }
        var en = null,
            aa = null,
            Ao = null;
        function Lp() {
            if (Ao) return Ao;
            var e,
                t = aa,
                n = t.length,
                r,
                i = "value" in en ? en.value : en.textContent,
                o = i.length;
            for (e = 0; e < n && t[e] === i[e]; e++);
            var s = n - e;
            for (r = 1; r <= s && t[n - r] === i[o - r]; r++);
            return (Ao = i.slice(e, 1 < r ? 1 - r : void 0));
        }
        function _o(e) {
            var t = e.keyCode;
            return (
                "charCode" in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
                e === 10 && (e = 13),
                32 <= e || e === 13 ? e : 0
            );
        }
        function yo() {
            return !0;
        }
        function id() {
            return !1;
        }
        function ze(e) {
            function t(n, r, i, o, s) {
                (this._reactName = n),
                    (this._targetInst = i),
                    (this.type = r),
                    (this.nativeEvent = o),
                    (this.target = s),
                    (this.currentTarget = null);
                for (var l in e) e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(o) : o[l]));
                return (
                    (this.isDefaultPrevented = (
                        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
                    )
                        ? yo
                        : id),
                    (this.isPropagationStopped = id),
                    this
                );
            }
            return (
                J(t.prototype, {
                    preventDefault: function () {
                        this.defaultPrevented = !0;
                        var n = this.nativeEvent;
                        n &&
                            (n.preventDefault
                                ? n.preventDefault()
                                : typeof n.returnValue != "unknown" && (n.returnValue = !1),
                            (this.isDefaultPrevented = yo));
                    },
                    stopPropagation: function () {
                        var n = this.nativeEvent;
                        n &&
                            (n.stopPropagation
                                ? n.stopPropagation()
                                : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
                            (this.isPropagationStopped = yo));
                    },
                    persist: function () {},
                    isPersistent: yo,
                }),
                t
            );
        }
        var Cr = {
                eventPhase: 0,
                bubbles: 0,
                cancelable: 0,
                timeStamp: function (e) {
                    return e.timeStamp || Date.now();
                },
                defaultPrevented: 0,
                isTrusted: 0,
            },
            ca = ze(Cr),
            Li = J({}, Cr, { view: 0, detail: 0 }),
            Ay = ze(Li),
            Wl,
            zl,
            Xr,
            ds = J({}, Li, {
                screenX: 0,
                screenY: 0,
                clientX: 0,
                clientY: 0,
                pageX: 0,
                pageY: 0,
                ctrlKey: 0,
                shiftKey: 0,
                altKey: 0,
                metaKey: 0,
                getModifierState: fa,
                button: 0,
                buttons: 0,
                relatedTarget: function (e) {
                    return e.relatedTarget === void 0
                        ? e.fromElement === e.srcElement
                            ? e.toElement
                            : e.fromElement
                        : e.relatedTarget;
                },
                movementX: function (e) {
                    return "movementX" in e
                        ? e.movementX
                        : (e !== Xr &&
                              (Xr && e.type === "mousemove"
                                  ? ((Wl = e.screenX - Xr.screenX), (zl = e.screenY - Xr.screenY))
                                  : (zl = Wl = 0),
                              (Xr = e)),
                          Wl);
                },
                movementY: function (e) {
                    return "movementY" in e ? e.movementY : zl;
                },
            }),
            od = ze(ds),
            _y = J({}, ds, { dataTransfer: 0 }),
            My = ze(_y),
            Gy = J({}, Li, { relatedTarget: 0 }),
            Hl = ze(Gy),
            Py = J({}, Cr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
            Dy = ze(Py),
            Fy = J({}, Cr, {
                clipboardData: function (e) {
                    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
                },
            }),
            By = ze(Fy),
            Vy = J({}, Cr, { data: 0 }),
            sd = ze(Vy),
            Uy = {
                Esc: "Escape",
                Spacebar: " ",
                Left: "ArrowLeft",
                Up: "ArrowUp",
                Right: "ArrowRight",
                Down: "ArrowDown",
                Del: "Delete",
                Win: "OS",
                Menu: "ContextMenu",
                Apps: "ContextMenu",
                Scroll: "ScrollLock",
                MozPrintableKey: "Unidentified",
            },
            jy = {
                8: "Backspace",
                9: "Tab",
                12: "Clear",
                13: "Enter",
                16: "Shift",
                17: "Control",
                18: "Alt",
                19: "Pause",
                20: "CapsLock",
                27: "Escape",
                32: " ",
                33: "PageUp",
                34: "PageDown",
                35: "End",
                36: "Home",
                37: "ArrowLeft",
                38: "ArrowUp",
                39: "ArrowRight",
                40: "ArrowDown",
                45: "Insert",
                46: "Delete",
                112: "F1",
                113: "F2",
                114: "F3",
                115: "F4",
                116: "F5",
                117: "F6",
                118: "F7",
                119: "F8",
                120: "F9",
                121: "F10",
                122: "F11",
                123: "F12",
                144: "NumLock",
                145: "ScrollLock",
                224: "Meta",
            },
            Wy = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
        function zy(e) {
            var t = this.nativeEvent;
            return t.getModifierState ? t.getModifierState(e) : (e = Wy[e]) ? !!t[e] : !1;
        }
        function fa() {
            return zy;
        }
        var Hy = J({}, Li, {
                key: function (e) {
                    if (e.key) {
                        var t = Uy[e.key] || e.key;
                        if (t !== "Unidentified") return t;
                    }
                    return e.type === "keypress"
                        ? ((e = _o(e)), e === 13 ? "Enter" : String.fromCharCode(e))
                        : e.type === "keydown" || e.type === "keyup"
                        ? jy[e.keyCode] || "Unidentified"
                        : "";
                },
                code: 0,
                location: 0,
                ctrlKey: 0,
                shiftKey: 0,
                altKey: 0,
                metaKey: 0,
                repeat: 0,
                locale: 0,
                getModifierState: fa,
                charCode: function (e) {
                    return e.type === "keypress" ? _o(e) : 0;
                },
                keyCode: function (e) {
                    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
                },
                which: function (e) {
                    return e.type === "keypress"
                        ? _o(e)
                        : e.type === "keydown" || e.type === "keyup"
                        ? e.keyCode
                        : 0;
                },
            }),
            Qy = ze(Hy),
            Xy = J({}, ds, {
                pointerId: 0,
                width: 0,
                height: 0,
                pressure: 0,
                tangentialPressure: 0,
                tiltX: 0,
                tiltY: 0,
                twist: 0,
                pointerType: 0,
                isPrimary: 0,
            }),
            ld = ze(Xy),
            Zy = J({}, Li, {
                touches: 0,
                targetTouches: 0,
                changedTouches: 0,
                altKey: 0,
                metaKey: 0,
                ctrlKey: 0,
                shiftKey: 0,
                getModifierState: fa,
            }),
            Yy = ze(Zy),
            $y = J({}, Cr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
            Ky = ze($y),
            Jy = J({}, ds, {
                deltaX: function (e) {
                    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
                },
                deltaY: function (e) {
                    return "deltaY" in e
                        ? e.deltaY
                        : "wheelDeltaY" in e
                        ? -e.wheelDeltaY
                        : "wheelDelta" in e
                        ? -e.wheelDelta
                        : 0;
                },
                deltaZ: 0,
                deltaMode: 0,
            }),
            qy = ze(Jy),
            e1 = [9, 13, 27, 32],
            da = Bt && "CompositionEvent" in window,
            ii = null;
        Bt && "documentMode" in document && (ii = document.documentMode);
        var t1 = Bt && "TextEvent" in window && !ii,
            Rp = Bt && (!da || (ii && 8 < ii && 11 >= ii)),
            ud = " ",
            ad = !1;
        function Np(e, t) {
            switch (e) {
                case "keyup":
                    return e1.indexOf(t.keyCode) !== -1;
                case "keydown":
                    return t.keyCode !== 229;
                case "keypress":
                case "mousedown":
                case "focusout":
                    return !0;
                default:
                    return !1;
            }
        }
        function Ap(e) {
            return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
        }
        var tr = !1;
        function n1(e, t) {
            switch (e) {
                case "compositionend":
                    return Ap(t);
                case "keypress":
                    return t.which !== 32 ? null : ((ad = !0), ud);
                case "textInput":
                    return (e = t.data), e === ud && ad ? null : e;
                default:
                    return null;
            }
        }
        function r1(e, t) {
            if (tr)
                return e === "compositionend" || (!da && Np(e, t))
                    ? ((e = Lp()), (Ao = aa = en = null), (tr = !1), e)
                    : null;
            switch (e) {
                case "paste":
                    return null;
                case "keypress":
                    if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
                        if (t.char && 1 < t.char.length) return t.char;
                        if (t.which) return String.fromCharCode(t.which);
                    }
                    return null;
                case "compositionend":
                    return Rp && t.locale !== "ko" ? null : t.data;
                default:
                    return null;
            }
        }
        var i1 = {
            color: !0,
            date: !0,
            datetime: !0,
            "datetime-local": !0,
            email: !0,
            month: !0,
            number: !0,
            password: !0,
            range: !0,
            search: !0,
            tel: !0,
            text: !0,
            time: !0,
            url: !0,
            week: !0,
        };
        function cd(e) {
            var t = e && e.nodeName && e.nodeName.toLowerCase();
            return t === "input" ? !!i1[e.type] : t === "textarea";
        }
        function _p(e, t, n, r) {
            cp(r),
                (t = Zo(t, "onChange")),
                0 < t.length &&
                    ((n = new ca("onChange", "change", null, n, r)),
                    e.push({ event: n, listeners: t }));
        }
        var oi = null,
            vi = null;
        function o1(e) {
            zp(e, 0);
        }
        function ps(e) {
            var t = ir(e);
            if (rp(t)) return e;
        }
        function s1(e, t) {
            if (e === "change") return t;
        }
        var Mp = !1;
        Bt &&
            (Bt
                ? ((Eo = "oninput" in document),
                  Eo ||
                      ((Ql = document.createElement("div")),
                      Ql.setAttribute("oninput", "return;"),
                      (Eo = typeof Ql.oninput == "function")),
                  (wo = Eo))
                : (wo = !1),
            (Mp = wo && (!document.documentMode || 9 < document.documentMode)));
        var wo, Eo, Ql;
        function fd() {
            oi && (oi.detachEvent("onpropertychange", Gp), (vi = oi = null));
        }
        function Gp(e) {
            if (e.propertyName === "value" && ps(vi)) {
                var t = [];
                _p(t, vi, e, ia(e)), mp(o1, t);
            }
        }
        function l1(e, t, n) {
            e === "focusin"
                ? (fd(), (oi = t), (vi = n), oi.attachEvent("onpropertychange", Gp))
                : e === "focusout" && fd();
        }
        function u1(e) {
            if (e === "selectionchange" || e === "keyup" || e === "keydown") return ps(vi);
        }
        function a1(e, t) {
            if (e === "click") return ps(t);
        }
        function c1(e, t) {
            if (e === "input" || e === "change") return ps(t);
        }
        function f1(e, t) {
            return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
        }
        var ct = typeof Object.is == "function" ? Object.is : f1;
        function yi(e, t) {
            if (ct(e, t)) return !0;
            if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
            var n = Object.keys(e),
                r = Object.keys(t);
            if (n.length !== r.length) return !1;
            for (r = 0; r < n.length; r++) {
                var i = n[r];
                if (!su.call(t, i) || !ct(e[i], t[i])) return !1;
            }
            return !0;
        }
        function dd(e) {
            for (; e && e.firstChild; ) e = e.firstChild;
            return e;
        }
        function pd(e, t) {
            var n = dd(e);
            e = 0;
            for (var r; n; ) {
                if (n.nodeType === 3) {
                    if (((r = e + n.textContent.length), e <= t && r >= t))
                        return { node: n, offset: t - e };
                    e = r;
                }
                e: {
                    for (; n; ) {
                        if (n.nextSibling) {
                            n = n.nextSibling;
                            break e;
                        }
                        n = n.parentNode;
                    }
                    n = void 0;
                }
                n = dd(n);
            }
        }
        function Pp(e, t) {
            return e && t
                ? e === t
                    ? !0
                    : e && e.nodeType === 3
                    ? !1
                    : t && t.nodeType === 3
                    ? Pp(e, t.parentNode)
                    : "contains" in e
                    ? e.contains(t)
                    : e.compareDocumentPosition
                    ? !!(e.compareDocumentPosition(t) & 16)
                    : !1
                : !1;
        }
        function Dp() {
            for (var e = window, t = Uo(); t instanceof e.HTMLIFrameElement; ) {
                try {
                    var n = typeof t.contentWindow.location.href == "string";
                } catch (r) {
                    n = !1;
                }
                if (n) e = t.contentWindow;
                else break;
                t = Uo(e.document);
            }
            return t;
        }
        function pa(e) {
            var t = e && e.nodeName && e.nodeName.toLowerCase();
            return (
                t &&
                ((t === "input" &&
                    (e.type === "text" ||
                        e.type === "search" ||
                        e.type === "tel" ||
                        e.type === "url" ||
                        e.type === "password")) ||
                    t === "textarea" ||
                    e.contentEditable === "true")
            );
        }
        function d1(e) {
            var t = Dp(),
                n = e.focusedElem,
                r = e.selectionRange;
            if (t !== n && n && n.ownerDocument && Pp(n.ownerDocument.documentElement, n)) {
                if (r !== null && pa(n)) {
                    if (
                        ((t = r.start), (e = r.end), e === void 0 && (e = t), "selectionStart" in n)
                    )
                        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
                    else if (
                        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
                        e.getSelection)
                    ) {
                        e = e.getSelection();
                        var i = n.textContent.length,
                            o = Math.min(r.start, i);
                        (r = r.end === void 0 ? o : Math.min(r.end, i)),
                            !e.extend && o > r && ((i = r), (r = o), (o = i)),
                            (i = pd(n, o));
                        var s = pd(n, r);
                        i &&
                            s &&
                            (e.rangeCount !== 1 ||
                                e.anchorNode !== i.node ||
                                e.anchorOffset !== i.offset ||
                                e.focusNode !== s.node ||
                                e.focusOffset !== s.offset) &&
                            ((t = t.createRange()),
                            t.setStart(i.node, i.offset),
                            e.removeAllRanges(),
                            o > r
                                ? (e.addRange(t), e.extend(s.node, s.offset))
                                : (t.setEnd(s.node, s.offset), e.addRange(t)));
                    }
                }
                for (t = [], e = n; (e = e.parentNode); )
                    e.nodeType === 1 &&
                        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
                for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
                    (e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top);
            }
        }
        var p1 = Bt && "documentMode" in document && 11 >= document.documentMode,
            nr = null,
            Tu = null,
            si = null,
            bu = !1;
        function md(e, t, n) {
            var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
            bu ||
                nr == null ||
                nr !== Uo(r) ||
                ((r = nr),
                "selectionStart" in r && pa(r)
                    ? (r = { start: r.selectionStart, end: r.selectionEnd })
                    : ((r = (
                          (r.ownerDocument && r.ownerDocument.defaultView) ||
                          window
                      ).getSelection()),
                      (r = {
                          anchorNode: r.anchorNode,
                          anchorOffset: r.anchorOffset,
                          focusNode: r.focusNode,
                          focusOffset: r.focusOffset,
                      })),
                (si && yi(si, r)) ||
                    ((si = r),
                    (r = Zo(Tu, "onSelect")),
                    0 < r.length &&
                        ((t = new ca("onSelect", "select", null, t, n)),
                        e.push({ event: t, listeners: r }),
                        (t.target = nr))));
        }
        function Io(e, t) {
            var n = {};
            return (
                (n[e.toLowerCase()] = t.toLowerCase()),
                (n["Webkit" + e] = "webkit" + t),
                (n["Moz" + e] = "moz" + t),
                n
            );
        }
        var rr = {
                animationend: Io("Animation", "AnimationEnd"),
                animationiteration: Io("Animation", "AnimationIteration"),
                animationstart: Io("Animation", "AnimationStart"),
                transitionend: Io("Transition", "TransitionEnd"),
            },
            Xl = {},
            Fp = {};
        Bt &&
            ((Fp = document.createElement("div").style),
            "AnimationEvent" in window ||
                (delete rr.animationend.animation,
                delete rr.animationiteration.animation,
                delete rr.animationstart.animation),
            "TransitionEvent" in window || delete rr.transitionend.transition);
        function ms(e) {
            if (Xl[e]) return Xl[e];
            if (!rr[e]) return e;
            var t = rr[e],
                n;
            for (n in t) if (t.hasOwnProperty(n) && n in Fp) return (Xl[e] = t[n]);
            return e;
        }
        var Bp = ms("animationend"),
            Vp = ms("animationiteration"),
            Up = ms("animationstart"),
            jp = ms("transitionend"),
            Wp = new Map(),
            hd =
                "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
                    " "
                );
        function pn(e, t) {
            Wp.set(e, t), Dn(t, [e]);
        }
        for (xo = 0; xo < hd.length; xo++)
            (So = hd[xo]),
                (gd = So.toLowerCase()),
                (vd = So[0].toUpperCase() + So.slice(1)),
                pn(gd, "on" + vd);
        var So, gd, vd, xo;
        pn(Bp, "onAnimationEnd");
        pn(Vp, "onAnimationIteration");
        pn(Up, "onAnimationStart");
        pn("dblclick", "onDoubleClick");
        pn("focusin", "onFocus");
        pn("focusout", "onBlur");
        pn(jp, "onTransitionEnd");
        vr("onMouseEnter", ["mouseout", "mouseover"]);
        vr("onMouseLeave", ["mouseout", "mouseover"]);
        vr("onPointerEnter", ["pointerout", "pointerover"]);
        vr("onPointerLeave", ["pointerout", "pointerover"]);
        Dn(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(" ")
        );
        Dn(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
                " "
            )
        );
        Dn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
        Dn(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(" ")
        );
        Dn(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(" ")
        );
        Dn(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
        );
        var ti =
                "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
                    " "
                ),
            m1 = new Set("cancel close invalid load scroll toggle".split(" ").concat(ti));
        function yd(e, t, n) {
            var r = e.type || "unknown-event";
            (e.currentTarget = n), my(r, t, void 0, e), (e.currentTarget = null);
        }
        function zp(e, t) {
            t = (t & 4) !== 0;
            for (var n = 0; n < e.length; n++) {
                var r = e[n],
                    i = r.event;
                r = r.listeners;
                e: {
                    var o = void 0;
                    if (t)
                        for (var s = r.length - 1; 0 <= s; s--) {
                            var l = r[s],
                                u = l.instance,
                                a = l.currentTarget;
                            if (((l = l.listener), u !== o && i.isPropagationStopped())) break e;
                            yd(i, l, a), (o = u);
                        }
                    else
                        for (s = 0; s < r.length; s++) {
                            if (
                                ((l = r[s]),
                                (u = l.instance),
                                (a = l.currentTarget),
                                (l = l.listener),
                                u !== o && i.isPropagationStopped())
                            )
                                break e;
                            yd(i, l, a), (o = u);
                        }
                }
            }
            if (Wo) throw ((e = Iu), (Wo = !1), (Iu = null), e);
        }
        function z(e, t) {
            var n = t[Nu];
            n === void 0 && (n = t[Nu] = new Set());
            var r = e + "__bubble";
            n.has(r) || (Hp(t, e, 2, !1), n.add(r));
        }
        function Zl(e, t, n) {
            var r = 0;
            t && (r |= 4), Hp(n, e, r, t);
        }
        var Co = "_reactListening" + Math.random().toString(36).slice(2);
        function wi(e) {
            if (!e[Co]) {
                (e[Co] = !0),
                    Jd.forEach(function (n) {
                        n !== "selectionchange" && (m1.has(n) || Zl(n, !1, e), Zl(n, !0, e));
                    });
                var t = e.nodeType === 9 ? e : e.ownerDocument;
                t === null || t[Co] || ((t[Co] = !0), Zl("selectionchange", !1, t));
            }
        }
        function Hp(e, t, n, r) {
            switch (kp(t)) {
                case 1:
                    var i = Ry;
                    break;
                case 4:
                    i = Ny;
                    break;
                default:
                    i = ua;
            }
            (n = i.bind(null, t, n, e)),
                (i = void 0),
                !Eu || (t !== "touchstart" && t !== "touchmove" && t !== "wheel") || (i = !0),
                r
                    ? i !== void 0
                        ? e.addEventListener(t, n, { capture: !0, passive: i })
                        : e.addEventListener(t, n, !0)
                    : i !== void 0
                    ? e.addEventListener(t, n, { passive: i })
                    : e.addEventListener(t, n, !1);
        }
        function Yl(e, t, n, r, i) {
            var o = r;
            if (!(t & 1) && !(t & 2) && r !== null)
                e: for (;;) {
                    if (r === null) return;
                    var s = r.tag;
                    if (s === 3 || s === 4) {
                        var l = r.stateNode.containerInfo;
                        if (l === i || (l.nodeType === 8 && l.parentNode === i)) break;
                        if (s === 4)
                            for (s = r.return; s !== null; ) {
                                var u = s.tag;
                                if (
                                    (u === 3 || u === 4) &&
                                    ((u = s.stateNode.containerInfo),
                                    u === i || (u.nodeType === 8 && u.parentNode === i))
                                )
                                    return;
                                s = s.return;
                            }
                        for (; l !== null; ) {
                            if (((s = On(l)), s === null)) return;
                            if (((u = s.tag), u === 5 || u === 6)) {
                                r = o = s;
                                continue e;
                            }
                            l = l.parentNode;
                        }
                    }
                    r = r.return;
                }
            mp(function () {
                var a = o,
                    f = ia(n),
                    d = [];
                e: {
                    var p = Wp.get(e);
                    if (p !== void 0) {
                        var v = ca,
                            y = e;
                        switch (e) {
                            case "keypress":
                                if (_o(n) === 0) break e;
                            case "keydown":
                            case "keyup":
                                v = Qy;
                                break;
                            case "focusin":
                                (y = "focus"), (v = Hl);
                                break;
                            case "focusout":
                                (y = "blur"), (v = Hl);
                                break;
                            case "beforeblur":
                            case "afterblur":
                                v = Hl;
                                break;
                            case "click":
                                if (n.button === 2) break e;
                            case "auxclick":
                            case "dblclick":
                            case "mousedown":
                            case "mousemove":
                            case "mouseup":
                            case "mouseout":
                            case "mouseover":
                            case "contextmenu":
                                v = od;
                                break;
                            case "drag":
                            case "dragend":
                            case "dragenter":
                            case "dragexit":
                            case "dragleave":
                            case "dragover":
                            case "dragstart":
                            case "drop":
                                v = My;
                                break;
                            case "touchcancel":
                            case "touchend":
                            case "touchmove":
                            case "touchstart":
                                v = Yy;
                                break;
                            case Bp:
                            case Vp:
                            case Up:
                                v = Dy;
                                break;
                            case jp:
                                v = Ky;
                                break;
                            case "scroll":
                                v = Ay;
                                break;
                            case "wheel":
                                v = qy;
                                break;
                            case "copy":
                            case "cut":
                            case "paste":
                                v = By;
                                break;
                            case "gotpointercapture":
                            case "lostpointercapture":
                            case "pointercancel":
                            case "pointerdown":
                            case "pointermove":
                            case "pointerout":
                            case "pointerover":
                            case "pointerup":
                                v = ld;
                        }
                        var g = (t & 4) !== 0,
                            E = !g && e === "scroll",
                            h = g ? (p !== null ? p + "Capture" : null) : p;
                        g = [];
                        for (var c = a, m; c !== null; ) {
                            m = c;
                            var w = m.stateNode;
                            if (
                                (m.tag === 5 &&
                                    w !== null &&
                                    ((m = w),
                                    h !== null &&
                                        ((w = pi(c, h)), w != null && g.push(Ei(c, w, m)))),
                                E)
                            )
                                break;
                            c = c.return;
                        }
                        0 < g.length &&
                            ((p = new v(p, y, null, n, f)), d.push({ event: p, listeners: g }));
                    }
                }
                if (!(t & 7)) {
                    e: {
                        if (
                            ((p = e === "mouseover" || e === "pointerover"),
                            (v = e === "mouseout" || e === "pointerout"),
                            p &&
                                n !== yu &&
                                (y = n.relatedTarget || n.fromElement) &&
                                (On(y) || y[Vt]))
                        )
                            break e;
                        if (
                            (v || p) &&
                            ((p =
                                f.window === f
                                    ? f
                                    : (p = f.ownerDocument)
                                    ? p.defaultView || p.parentWindow
                                    : window),
                            v
                                ? ((y = n.relatedTarget || n.toElement),
                                  (v = a),
                                  (y = y ? On(y) : null),
                                  y !== null &&
                                      ((E = Fn(y)), y !== E || (y.tag !== 5 && y.tag !== 6)) &&
                                      (y = null))
                                : ((v = null), (y = a)),
                            v !== y)
                        ) {
                            if (
                                ((g = od),
                                (w = "onMouseLeave"),
                                (h = "onMouseEnter"),
                                (c = "mouse"),
                                (e === "pointerout" || e === "pointerover") &&
                                    ((g = ld),
                                    (w = "onPointerLeave"),
                                    (h = "onPointerEnter"),
                                    (c = "pointer")),
                                (E = v == null ? p : ir(v)),
                                (m = y == null ? p : ir(y)),
                                (p = new g(w, c + "leave", v, n, f)),
                                (p.target = E),
                                (p.relatedTarget = m),
                                (w = null),
                                On(f) === a &&
                                    ((g = new g(h, c + "enter", y, n, f)),
                                    (g.target = m),
                                    (g.relatedTarget = E),
                                    (w = g)),
                                (E = w),
                                v && y)
                            )
                                t: {
                                    for (g = v, h = y, c = 0, m = g; m; m = Jn(m)) c++;
                                    for (m = 0, w = h; w; w = Jn(w)) m++;
                                    for (; 0 < c - m; ) (g = Jn(g)), c--;
                                    for (; 0 < m - c; ) (h = Jn(h)), m--;
                                    for (; c--; ) {
                                        if (g === h || (h !== null && g === h.alternate)) break t;
                                        (g = Jn(g)), (h = Jn(h));
                                    }
                                    g = null;
                                }
                            else g = null;
                            v !== null && wd(d, p, v, g, !1),
                                y !== null && E !== null && wd(d, E, y, g, !0);
                        }
                    }
                    e: {
                        if (
                            ((p = a ? ir(a) : window),
                            (v = p.nodeName && p.nodeName.toLowerCase()),
                            v === "select" || (v === "input" && p.type === "file"))
                        )
                            var I = s1;
                        else if (cd(p))
                            if (Mp) I = c1;
                            else {
                                I = u1;
                                var T = l1;
                            }
                        else
                            (v = p.nodeName) &&
                                v.toLowerCase() === "input" &&
                                (p.type === "checkbox" || p.type === "radio") &&
                                (I = a1);
                        if (I && (I = I(e, a))) {
                            _p(d, I, n, f);
                            break e;
                        }
                        T && T(e, p, a),
                            e === "focusout" &&
                                (T = p._wrapperState) &&
                                T.controlled &&
                                p.type === "number" &&
                                pu(p, "number", p.value);
                    }
                    switch (((T = a ? ir(a) : window), e)) {
                        case "focusin":
                            (cd(T) || T.contentEditable === "true") &&
                                ((nr = T), (Tu = a), (si = null));
                            break;
                        case "focusout":
                            si = Tu = nr = null;
                            break;
                        case "mousedown":
                            bu = !0;
                            break;
                        case "contextmenu":
                        case "mouseup":
                        case "dragend":
                            (bu = !1), md(d, n, f);
                            break;
                        case "selectionchange":
                            if (p1) break;
                        case "keydown":
                        case "keyup":
                            md(d, n, f);
                    }
                    var x;
                    if (da)
                        e: {
                            switch (e) {
                                case "compositionstart":
                                    var C = "onCompositionStart";
                                    break e;
                                case "compositionend":
                                    C = "onCompositionEnd";
                                    break e;
                                case "compositionupdate":
                                    C = "onCompositionUpdate";
                                    break e;
                            }
                            C = void 0;
                        }
                    else
                        tr
                            ? Np(e, n) && (C = "onCompositionEnd")
                            : e === "keydown" && n.keyCode === 229 && (C = "onCompositionStart");
                    C &&
                        (Rp &&
                            n.locale !== "ko" &&
                            (tr || C !== "onCompositionStart"
                                ? C === "onCompositionEnd" && tr && (x = Lp())
                                : ((en = f),
                                  (aa = "value" in en ? en.value : en.textContent),
                                  (tr = !0))),
                        (T = Zo(a, C)),
                        0 < T.length &&
                            ((C = new sd(C, e, null, n, f)),
                            d.push({ event: C, listeners: T }),
                            x ? (C.data = x) : ((x = Ap(n)), x !== null && (C.data = x)))),
                        (x = t1 ? n1(e, n) : r1(e, n)) &&
                            ((a = Zo(a, "onBeforeInput")),
                            0 < a.length &&
                                ((f = new sd("onBeforeInput", "beforeinput", null, n, f)),
                                d.push({ event: f, listeners: a }),
                                (f.data = x)));
                }
                zp(d, t);
            });
        }
        function Ei(e, t, n) {
            return { instance: e, listener: t, currentTarget: n };
        }
        function Zo(e, t) {
            for (var n = t + "Capture", r = []; e !== null; ) {
                var i = e,
                    o = i.stateNode;
                i.tag === 5 &&
                    o !== null &&
                    ((i = o),
                    (o = pi(e, n)),
                    o != null && r.unshift(Ei(e, o, i)),
                    (o = pi(e, t)),
                    o != null && r.push(Ei(e, o, i))),
                    (e = e.return);
            }
            return r;
        }
        function Jn(e) {
            if (e === null) return null;
            do e = e.return;
            while (e && e.tag !== 5);
            return e || null;
        }
        function wd(e, t, n, r, i) {
            for (var o = t._reactName, s = []; n !== null && n !== r; ) {
                var l = n,
                    u = l.alternate,
                    a = l.stateNode;
                if (u !== null && u === r) break;
                l.tag === 5 &&
                    a !== null &&
                    ((l = a),
                    i
                        ? ((u = pi(n, o)), u != null && s.unshift(Ei(n, u, l)))
                        : i || ((u = pi(n, o)), u != null && s.push(Ei(n, u, l)))),
                    (n = n.return);
            }
            s.length !== 0 && e.push({ event: t, listeners: s });
        }
        var h1 = /\r\n?/g,
            g1 = /\u0000|\uFFFD/g;
        function Ed(e) {
            return (typeof e == "string" ? e : "" + e)
                .replace(
                    h1,
                    `
`
                )
                .replace(g1, "");
        }
        function To(e, t, n) {
            if (((t = Ed(t)), Ed(e) !== t && n)) throw Error(S(425));
        }
        function Yo() {}
        var Ou = null,
            ku = null;
        function Lu(e, t) {
            return (
                e === "textarea" ||
                e === "noscript" ||
                typeof t.children == "string" ||
                typeof t.children == "number" ||
                (typeof t.dangerouslySetInnerHTML == "object" &&
                    t.dangerouslySetInnerHTML !== null &&
                    t.dangerouslySetInnerHTML.__html != null)
            );
        }
        var Ru = typeof setTimeout == "function" ? setTimeout : void 0,
            v1 = typeof clearTimeout == "function" ? clearTimeout : void 0,
            Id = typeof Promise == "function" ? Promise : void 0,
            y1 =
                typeof queueMicrotask == "function"
                    ? queueMicrotask
                    : typeof Id != "undefined"
                    ? function (e) {
                          return Id.resolve(null).then(e).catch(w1);
                      }
                    : Ru;
        function w1(e) {
            setTimeout(function () {
                throw e;
            });
        }
        function $l(e, t) {
            var n = t,
                r = 0;
            do {
                var i = n.nextSibling;
                if ((e.removeChild(n), i && i.nodeType === 8))
                    if (((n = i.data), n === "/$")) {
                        if (r === 0) {
                            e.removeChild(i), gi(t);
                            return;
                        }
                        r--;
                    } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
                n = i;
            } while (n);
            gi(t);
        }
        function sn(e) {
            for (; e != null; e = e.nextSibling) {
                var t = e.nodeType;
                if (t === 1 || t === 3) break;
                if (t === 8) {
                    if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
                    if (t === "/$") return null;
                }
            }
            return e;
        }
        function xd(e) {
            e = e.previousSibling;
            for (var t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "$" || n === "$!" || n === "$?") {
                        if (t === 0) return e;
                        t--;
                    } else n === "/$" && t++;
                }
                e = e.previousSibling;
            }
            return null;
        }
        var Tr = Math.random().toString(36).slice(2),
            Tt = "__reactFiber$" + Tr,
            Ii = "__reactProps$" + Tr,
            Vt = "__reactContainer$" + Tr,
            Nu = "__reactEvents$" + Tr,
            E1 = "__reactListeners$" + Tr,
            I1 = "__reactHandles$" + Tr;
        function On(e) {
            var t = e[Tt];
            if (t) return t;
            for (var n = e.parentNode; n; ) {
                if ((t = n[Vt] || n[Tt])) {
                    if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
                        for (e = xd(e); e !== null; ) {
                            if ((n = e[Tt])) return n;
                            e = xd(e);
                        }
                    return t;
                }
                (e = n), (n = e.parentNode);
            }
            return null;
        }
        function Ri(e) {
            return (
                (e = e[Tt] || e[Vt]),
                !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
            );
        }
        function ir(e) {
            if (e.tag === 5 || e.tag === 6) return e.stateNode;
            throw Error(S(33));
        }
        function hs(e) {
            return e[Ii] || null;
        }
        var Au = [],
            or = -1;
        function mn(e) {
            return { current: e };
        }
        function H(e) {
            0 > or || ((e.current = Au[or]), (Au[or] = null), or--);
        }
        function W(e, t) {
            or++, (Au[or] = e.current), (e.current = t);
        }
        var dn = {},
            Ce = mn(dn),
            Ge = mn(!1),
            An = dn;
        function yr(e, t) {
            var n = e.type.contextTypes;
            if (!n) return dn;
            var r = e.stateNode;
            if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
                return r.__reactInternalMemoizedMaskedChildContext;
            var i = {},
                o;
            for (o in n) i[o] = t[o];
            return (
                r &&
                    ((e = e.stateNode),
                    (e.__reactInternalMemoizedUnmaskedChildContext = t),
                    (e.__reactInternalMemoizedMaskedChildContext = i)),
                i
            );
        }
        function Pe(e) {
            return (e = e.childContextTypes), e != null;
        }
        function $o() {
            H(Ge), H(Ce);
        }
        function Sd(e, t, n) {
            if (Ce.current !== dn) throw Error(S(168));
            W(Ce, t), W(Ge, n);
        }
        function Qp(e, t, n) {
            var r = e.stateNode;
            if (((t = t.childContextTypes), typeof r.getChildContext != "function")) return n;
            r = r.getChildContext();
            for (var i in r) if (!(i in t)) throw Error(S(108, ly(e) || "Unknown", i));
            return J({}, n, r);
        }
        function Ko(e) {
            return (
                (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || dn),
                (An = Ce.current),
                W(Ce, e),
                W(Ge, Ge.current),
                !0
            );
        }
        function Cd(e, t, n) {
            var r = e.stateNode;
            if (!r) throw Error(S(169));
            n
                ? ((e = Qp(e, t, An)),
                  (r.__reactInternalMemoizedMergedChildContext = e),
                  H(Ge),
                  H(Ce),
                  W(Ce, e))
                : H(Ge),
                W(Ge, n);
        }
        var Gt = null,
            gs = !1,
            Kl = !1;
        function Xp(e) {
            Gt === null ? (Gt = [e]) : Gt.push(e);
        }
        function x1(e) {
            (gs = !0), Xp(e);
        }
        function hn() {
            if (!Kl && Gt !== null) {
                Kl = !0;
                var e = 0,
                    t = B;
                try {
                    var n = Gt;
                    for (B = 1; e < n.length; e++) {
                        var r = n[e];
                        do r = r(!0);
                        while (r !== null);
                    }
                    (Gt = null), (gs = !1);
                } catch (i) {
                    throw (Gt !== null && (Gt = Gt.slice(e + 1)), yp(oa, hn), i);
                } finally {
                    (B = t), (Kl = !1);
                }
            }
            return null;
        }
        var sr = [],
            lr = 0,
            Jo = null,
            qo = 0,
            $e = [],
            Ke = 0,
            _n = null,
            Pt = 1,
            Dt = "";
        function Tn(e, t) {
            (sr[lr++] = qo), (sr[lr++] = Jo), (Jo = e), (qo = t);
        }
        function Zp(e, t, n) {
            ($e[Ke++] = Pt), ($e[Ke++] = Dt), ($e[Ke++] = _n), (_n = e);
            var r = Pt;
            e = Dt;
            var i = 32 - ut(r) - 1;
            (r &= ~(1 << i)), (n += 1);
            var o = 32 - ut(t) + i;
            if (30 < o) {
                var s = i - (i % 5);
                (o = (r & ((1 << s) - 1)).toString(32)),
                    (r >>= s),
                    (i -= s),
                    (Pt = (1 << (32 - ut(t) + i)) | (n << i) | r),
                    (Dt = o + e);
            } else (Pt = (1 << o) | (n << i) | r), (Dt = e);
        }
        function ma(e) {
            e.return !== null && (Tn(e, 1), Zp(e, 1, 0));
        }
        function ha(e) {
            for (; e === Jo; ) (Jo = sr[--lr]), (sr[lr] = null), (qo = sr[--lr]), (sr[lr] = null);
            for (; e === _n; )
                (_n = $e[--Ke]),
                    ($e[Ke] = null),
                    (Dt = $e[--Ke]),
                    ($e[Ke] = null),
                    (Pt = $e[--Ke]),
                    ($e[Ke] = null);
        }
        var je = null,
            Ue = null,
            X = !1,
            lt = null;
        function Yp(e, t) {
            var n = Je(5, null, null, 0);
            (n.elementType = "DELETED"),
                (n.stateNode = t),
                (n.return = e),
                (t = e.deletions),
                t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
        }
        function Td(e, t) {
            switch (e.tag) {
                case 5:
                    var n = e.type;
                    return (
                        (t =
                            t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
                                ? null
                                : t),
                        t !== null ? ((e.stateNode = t), (je = e), (Ue = sn(t.firstChild)), !0) : !1
                    );
                case 6:
                    return (
                        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
                        t !== null ? ((e.stateNode = t), (je = e), (Ue = null), !0) : !1
                    );
                case 13:
                    return (
                        (t = t.nodeType !== 8 ? null : t),
                        t !== null
                            ? ((n = _n !== null ? { id: Pt, overflow: Dt } : null),
                              (e.memoizedState = {
                                  dehydrated: t,
                                  treeContext: n,
                                  retryLane: 1073741824,
                              }),
                              (n = Je(18, null, null, 0)),
                              (n.stateNode = t),
                              (n.return = e),
                              (e.child = n),
                              (je = e),
                              (Ue = null),
                              !0)
                            : !1
                    );
                default:
                    return !1;
            }
        }
        function _u(e) {
            return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
        }
        function Mu(e) {
            if (X) {
                var t = Ue;
                if (t) {
                    var n = t;
                    if (!Td(e, t)) {
                        if (_u(e)) throw Error(S(418));
                        t = sn(n.nextSibling);
                        var r = je;
                        t && Td(e, t)
                            ? Yp(r, n)
                            : ((e.flags = (e.flags & -4097) | 2), (X = !1), (je = e));
                    }
                } else {
                    if (_u(e)) throw Error(S(418));
                    (e.flags = (e.flags & -4097) | 2), (X = !1), (je = e);
                }
            }
        }
        function bd(e) {
            for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
                e = e.return;
            je = e;
        }
        function bo(e) {
            if (e !== je) return !1;
            if (!X) return bd(e), (X = !0), !1;
            var t;
            if (
                ((t = e.tag !== 3) &&
                    !(t = e.tag !== 5) &&
                    ((t = e.type),
                    (t = t !== "head" && t !== "body" && !Lu(e.type, e.memoizedProps))),
                t && (t = Ue))
            ) {
                if (_u(e)) throw ($p(), Error(S(418)));
                for (; t; ) Yp(e, t), (t = sn(t.nextSibling));
            }
            if ((bd(e), e.tag === 13)) {
                if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
                    throw Error(S(317));
                e: {
                    for (e = e.nextSibling, t = 0; e; ) {
                        if (e.nodeType === 8) {
                            var n = e.data;
                            if (n === "/$") {
                                if (t === 0) {
                                    Ue = sn(e.nextSibling);
                                    break e;
                                }
                                t--;
                            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
                        }
                        e = e.nextSibling;
                    }
                    Ue = null;
                }
            } else Ue = je ? sn(e.stateNode.nextSibling) : null;
            return !0;
        }
        function $p() {
            for (var e = Ue; e; ) e = sn(e.nextSibling);
        }
        function wr() {
            (Ue = je = null), (X = !1);
        }
        function va(e) {
            lt === null ? (lt = [e]) : lt.push(e);
        }
        var S1 = Wt.ReactCurrentBatchConfig;
        function Zr(e, t, n) {
            if (((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")) {
                if (n._owner) {
                    if (((n = n._owner), n)) {
                        if (n.tag !== 1) throw Error(S(309));
                        var r = n.stateNode;
                    }
                    if (!r) throw Error(S(147, e));
                    var i = r,
                        o = "" + e;
                    return t !== null &&
                        t.ref !== null &&
                        typeof t.ref == "function" &&
                        t.ref._stringRef === o
                        ? t.ref
                        : ((t = function (s) {
                              var l = i.refs;
                              s === null ? delete l[o] : (l[o] = s);
                          }),
                          (t._stringRef = o),
                          t);
                }
                if (typeof e != "string") throw Error(S(284));
                if (!n._owner) throw Error(S(290, e));
            }
            return e;
        }
        function Oo(e, t) {
            throw (
                ((e = Object.prototype.toString.call(t)),
                Error(
                    S(
                        31,
                        e === "[object Object]"
                            ? "object with keys {" + Object.keys(t).join(", ") + "}"
                            : e
                    )
                ))
            );
        }
        function Od(e) {
            var t = e._init;
            return t(e._payload);
        }
        function Kp(e) {
            function t(h, c) {
                if (e) {
                    var m = h.deletions;
                    m === null ? ((h.deletions = [c]), (h.flags |= 16)) : m.push(c);
                }
            }
            function n(h, c) {
                if (!e) return null;
                for (; c !== null; ) t(h, c), (c = c.sibling);
                return null;
            }
            function r(h, c) {
                for (h = new Map(); c !== null; )
                    c.key !== null ? h.set(c.key, c) : h.set(c.index, c), (c = c.sibling);
                return h;
            }
            function i(h, c) {
                return (h = cn(h, c)), (h.index = 0), (h.sibling = null), h;
            }
            function o(h, c, m) {
                return (
                    (h.index = m),
                    e
                        ? ((m = h.alternate),
                          m !== null
                              ? ((m = m.index), m < c ? ((h.flags |= 2), c) : m)
                              : ((h.flags |= 2), c))
                        : ((h.flags |= 1048576), c)
                );
            }
            function s(h) {
                return e && h.alternate === null && (h.flags |= 2), h;
            }
            function l(h, c, m, w) {
                return c === null || c.tag !== 6
                    ? ((c = iu(m, h.mode, w)), (c.return = h), c)
                    : ((c = i(c, m)), (c.return = h), c);
            }
            function u(h, c, m, w) {
                var I = m.type;
                return I === er
                    ? f(h, c, m.props.children, w, m.key)
                    : c !== null &&
                      (c.elementType === I ||
                          (typeof I == "object" &&
                              I !== null &&
                              I.$$typeof === $t &&
                              Od(I) === c.type))
                    ? ((w = i(c, m.props)), (w.ref = Zr(h, c, m)), (w.return = h), w)
                    : ((w = Vo(m.type, m.key, m.props, null, h.mode, w)),
                      (w.ref = Zr(h, c, m)),
                      (w.return = h),
                      w);
            }
            function a(h, c, m, w) {
                return c === null ||
                    c.tag !== 4 ||
                    c.stateNode.containerInfo !== m.containerInfo ||
                    c.stateNode.implementation !== m.implementation
                    ? ((c = ou(m, h.mode, w)), (c.return = h), c)
                    : ((c = i(c, m.children || [])), (c.return = h), c);
            }
            function f(h, c, m, w, I) {
                return c === null || c.tag !== 7
                    ? ((c = Nn(m, h.mode, w, I)), (c.return = h), c)
                    : ((c = i(c, m)), (c.return = h), c);
            }
            function d(h, c, m) {
                if ((typeof c == "string" && c !== "") || typeof c == "number")
                    return (c = iu("" + c, h.mode, m)), (c.return = h), c;
                if (typeof c == "object" && c !== null) {
                    switch (c.$$typeof) {
                        case fo:
                            return (
                                (m = Vo(c.type, c.key, c.props, null, h.mode, m)),
                                (m.ref = Zr(h, null, c)),
                                (m.return = h),
                                m
                            );
                        case qn:
                            return (c = ou(c, h.mode, m)), (c.return = h), c;
                        case $t:
                            var w = c._init;
                            return d(h, w(c._payload), m);
                    }
                    if (qr(c) || zr(c)) return (c = Nn(c, h.mode, m, null)), (c.return = h), c;
                    Oo(h, c);
                }
                return null;
            }
            function p(h, c, m, w) {
                var I = c !== null ? c.key : null;
                if ((typeof m == "string" && m !== "") || typeof m == "number")
                    return I !== null ? null : l(h, c, "" + m, w);
                if (typeof m == "object" && m !== null) {
                    switch (m.$$typeof) {
                        case fo:
                            return m.key === I ? u(h, c, m, w) : null;
                        case qn:
                            return m.key === I ? a(h, c, m, w) : null;
                        case $t:
                            return (I = m._init), p(h, c, I(m._payload), w);
                    }
                    if (qr(m) || zr(m)) return I !== null ? null : f(h, c, m, w, null);
                    Oo(h, m);
                }
                return null;
            }
            function v(h, c, m, w, I) {
                if ((typeof w == "string" && w !== "") || typeof w == "number")
                    return (h = h.get(m) || null), l(c, h, "" + w, I);
                if (typeof w == "object" && w !== null) {
                    switch (w.$$typeof) {
                        case fo:
                            return (h = h.get(w.key === null ? m : w.key) || null), u(c, h, w, I);
                        case qn:
                            return (h = h.get(w.key === null ? m : w.key) || null), a(c, h, w, I);
                        case $t:
                            var T = w._init;
                            return v(h, c, m, T(w._payload), I);
                    }
                    if (qr(w) || zr(w)) return (h = h.get(m) || null), f(c, h, w, I, null);
                    Oo(c, w);
                }
                return null;
            }
            function y(h, c, m, w) {
                for (
                    var I = null, T = null, x = c, C = (c = 0), M = null;
                    x !== null && C < m.length;
                    C++
                ) {
                    x.index > C ? ((M = x), (x = null)) : (M = x.sibling);
                    var O = p(h, x, m[C], w);
                    if (O === null) {
                        x === null && (x = M);
                        break;
                    }
                    e && x && O.alternate === null && t(h, x),
                        (c = o(O, c, C)),
                        T === null ? (I = O) : (T.sibling = O),
                        (T = O),
                        (x = M);
                }
                if (C === m.length) return n(h, x), X && Tn(h, C), I;
                if (x === null) {
                    for (; C < m.length; C++)
                        (x = d(h, m[C], w)),
                            x !== null &&
                                ((c = o(x, c, C)), T === null ? (I = x) : (T.sibling = x), (T = x));
                    return X && Tn(h, C), I;
                }
                for (x = r(h, x); C < m.length; C++)
                    (M = v(x, h, C, m[C], w)),
                        M !== null &&
                            (e && M.alternate !== null && x.delete(M.key === null ? C : M.key),
                            (c = o(M, c, C)),
                            T === null ? (I = M) : (T.sibling = M),
                            (T = M));
                return (
                    e &&
                        x.forEach(function (_) {
                            return t(h, _);
                        }),
                    X && Tn(h, C),
                    I
                );
            }
            function g(h, c, m, w) {
                var I = zr(m);
                if (typeof I != "function") throw Error(S(150));
                if (((m = I.call(m)), m == null)) throw Error(S(151));
                for (
                    var T = (I = null), x = c, C = (c = 0), M = null, O = m.next();
                    x !== null && !O.done;
                    C++, O = m.next()
                ) {
                    x.index > C ? ((M = x), (x = null)) : (M = x.sibling);
                    var _ = p(h, x, O.value, w);
                    if (_ === null) {
                        x === null && (x = M);
                        break;
                    }
                    e && x && _.alternate === null && t(h, x),
                        (c = o(_, c, C)),
                        T === null ? (I = _) : (T.sibling = _),
                        (T = _),
                        (x = M);
                }
                if (O.done) return n(h, x), X && Tn(h, C), I;
                if (x === null) {
                    for (; !O.done; C++, O = m.next())
                        (O = d(h, O.value, w)),
                            O !== null &&
                                ((c = o(O, c, C)), T === null ? (I = O) : (T.sibling = O), (T = O));
                    return X && Tn(h, C), I;
                }
                for (x = r(h, x); !O.done; C++, O = m.next())
                    (O = v(x, h, C, O.value, w)),
                        O !== null &&
                            (e && O.alternate !== null && x.delete(O.key === null ? C : O.key),
                            (c = o(O, c, C)),
                            T === null ? (I = O) : (T.sibling = O),
                            (T = O));
                return (
                    e &&
                        x.forEach(function (V) {
                            return t(h, V);
                        }),
                    X && Tn(h, C),
                    I
                );
            }
            function E(h, c, m, w) {
                if (
                    (typeof m == "object" &&
                        m !== null &&
                        m.type === er &&
                        m.key === null &&
                        (m = m.props.children),
                    typeof m == "object" && m !== null)
                ) {
                    switch (m.$$typeof) {
                        case fo:
                            e: {
                                for (var I = m.key, T = c; T !== null; ) {
                                    if (T.key === I) {
                                        if (((I = m.type), I === er)) {
                                            if (T.tag === 7) {
                                                n(h, T.sibling),
                                                    (c = i(T, m.props.children)),
                                                    (c.return = h),
                                                    (h = c);
                                                break e;
                                            }
                                        } else if (
                                            T.elementType === I ||
                                            (typeof I == "object" &&
                                                I !== null &&
                                                I.$$typeof === $t &&
                                                Od(I) === T.type)
                                        ) {
                                            n(h, T.sibling),
                                                (c = i(T, m.props)),
                                                (c.ref = Zr(h, T, m)),
                                                (c.return = h),
                                                (h = c);
                                            break e;
                                        }
                                        n(h, T);
                                        break;
                                    } else t(h, T);
                                    T = T.sibling;
                                }
                                m.type === er
                                    ? ((c = Nn(m.props.children, h.mode, w, m.key)),
                                      (c.return = h),
                                      (h = c))
                                    : ((w = Vo(m.type, m.key, m.props, null, h.mode, w)),
                                      (w.ref = Zr(h, c, m)),
                                      (w.return = h),
                                      (h = w));
                            }
                            return s(h);
                        case qn:
                            e: {
                                for (T = m.key; c !== null; ) {
                                    if (c.key === T)
                                        if (
                                            c.tag === 4 &&
                                            c.stateNode.containerInfo === m.containerInfo &&
                                            c.stateNode.implementation === m.implementation
                                        ) {
                                            n(h, c.sibling),
                                                (c = i(c, m.children || [])),
                                                (c.return = h),
                                                (h = c);
                                            break e;
                                        } else {
                                            n(h, c);
                                            break;
                                        }
                                    else t(h, c);
                                    c = c.sibling;
                                }
                                (c = ou(m, h.mode, w)), (c.return = h), (h = c);
                            }
                            return s(h);
                        case $t:
                            return (T = m._init), E(h, c, T(m._payload), w);
                    }
                    if (qr(m)) return y(h, c, m, w);
                    if (zr(m)) return g(h, c, m, w);
                    Oo(h, m);
                }
                return (typeof m == "string" && m !== "") || typeof m == "number"
                    ? ((m = "" + m),
                      c !== null && c.tag === 6
                          ? (n(h, c.sibling), (c = i(c, m)), (c.return = h), (h = c))
                          : (n(h, c), (c = iu(m, h.mode, w)), (c.return = h), (h = c)),
                      s(h))
                    : n(h, c);
            }
            return E;
        }
        var Er = Kp(!0),
            Jp = Kp(!1),
            es = mn(null),
            ts = null,
            ur = null,
            ya = null;
        function wa() {
            ya = ur = ts = null;
        }
        function Ea(e) {
            var t = es.current;
            H(es), (e._currentValue = t);
        }
        function Gu(e, t, n) {
            for (; e !== null; ) {
                var r = e.alternate;
                if (
                    ((e.childLanes & t) !== t
                        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
                        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
                    e === n)
                )
                    break;
                e = e.return;
            }
        }
        function hr(e, t) {
            (ts = e),
                (ya = ur = null),
                (e = e.dependencies),
                e !== null &&
                    e.firstContext !== null &&
                    (e.lanes & t && (Me = !0), (e.firstContext = null));
        }
        function et(e) {
            var t = e._currentValue;
            if (ya !== e)
                if (((e = { context: e, memoizedValue: t, next: null }), ur === null)) {
                    if (ts === null) throw Error(S(308));
                    (ur = e), (ts.dependencies = { lanes: 0, firstContext: e });
                } else ur = ur.next = e;
            return t;
        }
        var kn = null;
        function Ia(e) {
            kn === null ? (kn = [e]) : kn.push(e);
        }
        function qp(e, t, n, r) {
            var i = t.interleaved;
            return (
                i === null ? ((n.next = n), Ia(t)) : ((n.next = i.next), (i.next = n)),
                (t.interleaved = n),
                Ut(e, r)
            );
        }
        function Ut(e, t) {
            e.lanes |= t;
            var n = e.alternate;
            for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
                (e.childLanes |= t),
                    (n = e.alternate),
                    n !== null && (n.childLanes |= t),
                    (n = e),
                    (e = e.return);
            return n.tag === 3 ? n.stateNode : null;
        }
        var Kt = !1;
        function xa(e) {
            e.updateQueue = {
                baseState: e.memoizedState,
                firstBaseUpdate: null,
                lastBaseUpdate: null,
                shared: { pending: null, interleaved: null, lanes: 0 },
                effects: null,
            };
        }
        function em(e, t) {
            (e = e.updateQueue),
                t.updateQueue === e &&
                    (t.updateQueue = {
                        baseState: e.baseState,
                        firstBaseUpdate: e.firstBaseUpdate,
                        lastBaseUpdate: e.lastBaseUpdate,
                        shared: e.shared,
                        effects: e.effects,
                    });
        }
        function Ft(e, t) {
            return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
        }
        function ln(e, t, n) {
            var r = e.updateQueue;
            if (r === null) return null;
            if (((r = r.shared), P & 2)) {
                var i = r.pending;
                return (
                    i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
                    (r.pending = t),
                    Ut(e, n)
                );
            }
            return (
                (i = r.interleaved),
                i === null ? ((t.next = t), Ia(r)) : ((t.next = i.next), (i.next = t)),
                (r.interleaved = t),
                Ut(e, n)
            );
        }
        function Mo(e, t, n) {
            if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
                var r = t.lanes;
                (r &= e.pendingLanes), (n |= r), (t.lanes = n), sa(e, n);
            }
        }
        function kd(e, t) {
            var n = e.updateQueue,
                r = e.alternate;
            if (r !== null && ((r = r.updateQueue), n === r)) {
                var i = null,
                    o = null;
                if (((n = n.firstBaseUpdate), n !== null)) {
                    do {
                        var s = {
                            eventTime: n.eventTime,
                            lane: n.lane,
                            tag: n.tag,
                            payload: n.payload,
                            callback: n.callback,
                            next: null,
                        };
                        o === null ? (i = o = s) : (o = o.next = s), (n = n.next);
                    } while (n !== null);
                    o === null ? (i = o = t) : (o = o.next = t);
                } else i = o = t;
                (n = {
                    baseState: r.baseState,
                    firstBaseUpdate: i,
                    lastBaseUpdate: o,
                    shared: r.shared,
                    effects: r.effects,
                }),
                    (e.updateQueue = n);
                return;
            }
            (e = n.lastBaseUpdate),
                e === null ? (n.firstBaseUpdate = t) : (e.next = t),
                (n.lastBaseUpdate = t);
        }
        function ns(e, t, n, r) {
            var i = e.updateQueue;
            Kt = !1;
            var o = i.firstBaseUpdate,
                s = i.lastBaseUpdate,
                l = i.shared.pending;
            if (l !== null) {
                i.shared.pending = null;
                var u = l,
                    a = u.next;
                (u.next = null), s === null ? (o = a) : (s.next = a), (s = u);
                var f = e.alternate;
                f !== null &&
                    ((f = f.updateQueue),
                    (l = f.lastBaseUpdate),
                    l !== s &&
                        (l === null ? (f.firstBaseUpdate = a) : (l.next = a),
                        (f.lastBaseUpdate = u)));
            }
            if (o !== null) {
                var d = i.baseState;
                (s = 0), (f = a = u = null), (l = o);
                do {
                    var p = l.lane,
                        v = l.eventTime;
                    if ((r & p) === p) {
                        f !== null &&
                            (f = f.next =
                                {
                                    eventTime: v,
                                    lane: 0,
                                    tag: l.tag,
                                    payload: l.payload,
                                    callback: l.callback,
                                    next: null,
                                });
                        e: {
                            var y = e,
                                g = l;
                            switch (((p = t), (v = n), g.tag)) {
                                case 1:
                                    if (((y = g.payload), typeof y == "function")) {
                                        d = y.call(v, d, p);
                                        break e;
                                    }
                                    d = y;
                                    break e;
                                case 3:
                                    y.flags = (y.flags & -65537) | 128;
                                case 0:
                                    if (
                                        ((y = g.payload),
                                        (p = typeof y == "function" ? y.call(v, d, p) : y),
                                        p == null)
                                    )
                                        break e;
                                    d = J({}, d, p);
                                    break e;
                                case 2:
                                    Kt = !0;
                            }
                        }
                        l.callback !== null &&
                            l.lane !== 0 &&
                            ((e.flags |= 64),
                            (p = i.effects),
                            p === null ? (i.effects = [l]) : p.push(l));
                    } else
                        (v = {
                            eventTime: v,
                            lane: p,
                            tag: l.tag,
                            payload: l.payload,
                            callback: l.callback,
                            next: null,
                        }),
                            f === null ? ((a = f = v), (u = d)) : (f = f.next = v),
                            (s |= p);
                    if (((l = l.next), l === null)) {
                        if (((l = i.shared.pending), l === null)) break;
                        (p = l),
                            (l = p.next),
                            (p.next = null),
                            (i.lastBaseUpdate = p),
                            (i.shared.pending = null);
                    }
                } while (!0);
                if (
                    (f === null && (u = d),
                    (i.baseState = u),
                    (i.firstBaseUpdate = a),
                    (i.lastBaseUpdate = f),
                    (t = i.shared.interleaved),
                    t !== null)
                ) {
                    i = t;
                    do (s |= i.lane), (i = i.next);
                    while (i !== t);
                } else o === null && (i.shared.lanes = 0);
                (Gn |= s), (e.lanes = s), (e.memoizedState = d);
            }
        }
        function Ld(e, t, n) {
            if (((e = t.effects), (t.effects = null), e !== null))
                for (t = 0; t < e.length; t++) {
                    var r = e[t],
                        i = r.callback;
                    if (i !== null) {
                        if (((r.callback = null), (r = n), typeof i != "function"))
                            throw Error(S(191, i));
                        i.call(r);
                    }
                }
        }
        var Ni = {},
            Ot = mn(Ni),
            xi = mn(Ni),
            Si = mn(Ni);
        function Ln(e) {
            if (e === Ni) throw Error(S(174));
            return e;
        }
        function Sa(e, t) {
            switch ((W(Si, t), W(xi, e), W(Ot, Ni), (e = t.nodeType), e)) {
                case 9:
                case 11:
                    t = (t = t.documentElement) ? t.namespaceURI : hu(null, "");
                    break;
                default:
                    (e = e === 8 ? t.parentNode : t),
                        (t = e.namespaceURI || null),
                        (e = e.tagName),
                        (t = hu(t, e));
            }
            H(Ot), W(Ot, t);
        }
        function Ir() {
            H(Ot), H(xi), H(Si);
        }
        function tm(e) {
            Ln(Si.current);
            var t = Ln(Ot.current),
                n = hu(t, e.type);
            t !== n && (W(xi, e), W(Ot, n));
        }
        function Ca(e) {
            xi.current === e && (H(Ot), H(xi));
        }
        var $ = mn(0);
        function rs(e) {
            for (var t = e; t !== null; ) {
                if (t.tag === 13) {
                    var n = t.memoizedState;
                    if (
                        n !== null &&
                        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
                    )
                        return t;
                } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
                    if (t.flags & 128) return t;
                } else if (t.child !== null) {
                    (t.child.return = t), (t = t.child);
                    continue;
                }
                if (t === e) break;
                for (; t.sibling === null; ) {
                    if (t.return === null || t.return === e) return null;
                    t = t.return;
                }
                (t.sibling.return = t.return), (t = t.sibling);
            }
            return null;
        }
        var Jl = [];
        function Ta() {
            for (var e = 0; e < Jl.length; e++) Jl[e]._workInProgressVersionPrimary = null;
            Jl.length = 0;
        }
        var Go = Wt.ReactCurrentDispatcher,
            ql = Wt.ReactCurrentBatchConfig,
            Mn = 0,
            K = null,
            oe = null,
            ce = null,
            is = !1,
            li = !1,
            Ci = 0,
            C1 = 0;
        function Ie() {
            throw Error(S(321));
        }
        function ba(e, t) {
            if (t === null) return !1;
            for (var n = 0; n < t.length && n < e.length; n++) if (!ct(e[n], t[n])) return !1;
            return !0;
        }
        function Oa(e, t, n, r, i, o) {
            if (
                ((Mn = o),
                (K = t),
                (t.memoizedState = null),
                (t.updateQueue = null),
                (t.lanes = 0),
                (Go.current = e === null || e.memoizedState === null ? k1 : L1),
                (e = n(r, i)),
                li)
            ) {
                o = 0;
                do {
                    if (((li = !1), (Ci = 0), 25 <= o)) throw Error(S(301));
                    (o += 1),
                        (ce = oe = null),
                        (t.updateQueue = null),
                        (Go.current = R1),
                        (e = n(r, i));
                } while (li);
            }
            if (
                ((Go.current = os),
                (t = oe !== null && oe.next !== null),
                (Mn = 0),
                (ce = oe = K = null),
                (is = !1),
                t)
            )
                throw Error(S(300));
            return e;
        }
        function ka() {
            var e = Ci !== 0;
            return (Ci = 0), e;
        }
        function Ct() {
            var e = {
                memoizedState: null,
                baseState: null,
                baseQueue: null,
                queue: null,
                next: null,
            };
            return ce === null ? (K.memoizedState = ce = e) : (ce = ce.next = e), ce;
        }
        function tt() {
            if (oe === null) {
                var e = K.alternate;
                e = e !== null ? e.memoizedState : null;
            } else e = oe.next;
            var t = ce === null ? K.memoizedState : ce.next;
            if (t !== null) (ce = t), (oe = e);
            else {
                if (e === null) throw Error(S(310));
                (oe = e),
                    (e = {
                        memoizedState: oe.memoizedState,
                        baseState: oe.baseState,
                        baseQueue: oe.baseQueue,
                        queue: oe.queue,
                        next: null,
                    }),
                    ce === null ? (K.memoizedState = ce = e) : (ce = ce.next = e);
            }
            return ce;
        }
        function Ti(e, t) {
            return typeof t == "function" ? t(e) : t;
        }
        function eu(e) {
            var t = tt(),
                n = t.queue;
            if (n === null) throw Error(S(311));
            n.lastRenderedReducer = e;
            var r = oe,
                i = r.baseQueue,
                o = n.pending;
            if (o !== null) {
                if (i !== null) {
                    var s = i.next;
                    (i.next = o.next), (o.next = s);
                }
                (r.baseQueue = i = o), (n.pending = null);
            }
            if (i !== null) {
                (o = i.next), (r = r.baseState);
                var l = (s = null),
                    u = null,
                    a = o;
                do {
                    var f = a.lane;
                    if ((Mn & f) === f)
                        u !== null &&
                            (u = u.next =
                                {
                                    lane: 0,
                                    action: a.action,
                                    hasEagerState: a.hasEagerState,
                                    eagerState: a.eagerState,
                                    next: null,
                                }),
                            (r = a.hasEagerState ? a.eagerState : e(r, a.action));
                    else {
                        var d = {
                            lane: f,
                            action: a.action,
                            hasEagerState: a.hasEagerState,
                            eagerState: a.eagerState,
                            next: null,
                        };
                        u === null ? ((l = u = d), (s = r)) : (u = u.next = d),
                            (K.lanes |= f),
                            (Gn |= f);
                    }
                    a = a.next;
                } while (a !== null && a !== o);
                u === null ? (s = r) : (u.next = l),
                    ct(r, t.memoizedState) || (Me = !0),
                    (t.memoizedState = r),
                    (t.baseState = s),
                    (t.baseQueue = u),
                    (n.lastRenderedState = r);
            }
            if (((e = n.interleaved), e !== null)) {
                i = e;
                do (o = i.lane), (K.lanes |= o), (Gn |= o), (i = i.next);
                while (i !== e);
            } else i === null && (n.lanes = 0);
            return [t.memoizedState, n.dispatch];
        }
        function tu(e) {
            var t = tt(),
                n = t.queue;
            if (n === null) throw Error(S(311));
            n.lastRenderedReducer = e;
            var r = n.dispatch,
                i = n.pending,
                o = t.memoizedState;
            if (i !== null) {
                n.pending = null;
                var s = (i = i.next);
                do (o = e(o, s.action)), (s = s.next);
                while (s !== i);
                ct(o, t.memoizedState) || (Me = !0),
                    (t.memoizedState = o),
                    t.baseQueue === null && (t.baseState = o),
                    (n.lastRenderedState = o);
            }
            return [o, r];
        }
        function nm() {}
        function rm(e, t) {
            var n = K,
                r = tt(),
                i = t(),
                o = !ct(r.memoizedState, i);
            if (
                (o && ((r.memoizedState = i), (Me = !0)),
                (r = r.queue),
                La(sm.bind(null, n, r, e), [e]),
                r.getSnapshot !== t || o || (ce !== null && ce.memoizedState.tag & 1))
            ) {
                if (
                    ((n.flags |= 2048), bi(9, om.bind(null, n, r, i, t), void 0, null), fe === null)
                )
                    throw Error(S(349));
                Mn & 30 || im(n, t, i);
            }
            return i;
        }
        function im(e, t, n) {
            (e.flags |= 16384),
                (e = { getSnapshot: t, value: n }),
                (t = K.updateQueue),
                t === null
                    ? ((t = { lastEffect: null, stores: null }),
                      (K.updateQueue = t),
                      (t.stores = [e]))
                    : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
        }
        function om(e, t, n, r) {
            (t.value = n), (t.getSnapshot = r), lm(t) && um(e);
        }
        function sm(e, t, n) {
            return n(function () {
                lm(t) && um(e);
            });
        }
        function lm(e) {
            var t = e.getSnapshot;
            e = e.value;
            try {
                var n = t();
                return !ct(e, n);
            } catch (r) {
                return !0;
            }
        }
        function um(e) {
            var t = Ut(e, 1);
            t !== null && at(t, e, 1, -1);
        }
        function Rd(e) {
            var t = Ct();
            return (
                typeof e == "function" && (e = e()),
                (t.memoizedState = t.baseState = e),
                (e = {
                    pending: null,
                    interleaved: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: Ti,
                    lastRenderedState: e,
                }),
                (t.queue = e),
                (e = e.dispatch = O1.bind(null, K, e)),
                [t.memoizedState, e]
            );
        }
        function bi(e, t, n, r) {
            return (
                (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
                (t = K.updateQueue),
                t === null
                    ? ((t = { lastEffect: null, stores: null }),
                      (K.updateQueue = t),
                      (t.lastEffect = e.next = e))
                    : ((n = t.lastEffect),
                      n === null
                          ? (t.lastEffect = e.next = e)
                          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
                e
            );
        }
        function am() {
            return tt().memoizedState;
        }
        function Po(e, t, n, r) {
            var i = Ct();
            (K.flags |= e), (i.memoizedState = bi(1 | t, n, void 0, r === void 0 ? null : r));
        }
        function vs(e, t, n, r) {
            var i = tt();
            r = r === void 0 ? null : r;
            var o = void 0;
            if (oe !== null) {
                var s = oe.memoizedState;
                if (((o = s.destroy), r !== null && ba(r, s.deps))) {
                    i.memoizedState = bi(t, n, o, r);
                    return;
                }
            }
            (K.flags |= e), (i.memoizedState = bi(1 | t, n, o, r));
        }
        function Nd(e, t) {
            return Po(8390656, 8, e, t);
        }
        function La(e, t) {
            return vs(2048, 8, e, t);
        }
        function cm(e, t) {
            return vs(4, 2, e, t);
        }
        function fm(e, t) {
            return vs(4, 4, e, t);
        }
        function dm(e, t) {
            if (typeof t == "function")
                return (
                    (e = e()),
                    t(e),
                    function () {
                        t(null);
                    }
                );
            if (t != null)
                return (
                    (e = e()),
                    (t.current = e),
                    function () {
                        t.current = null;
                    }
                );
        }
        function pm(e, t, n) {
            return (n = n != null ? n.concat([e]) : null), vs(4, 4, dm.bind(null, t, e), n);
        }
        function Ra() {}
        function mm(e, t) {
            var n = tt();
            t = t === void 0 ? null : t;
            var r = n.memoizedState;
            return r !== null && t !== null && ba(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
        }
        function hm(e, t) {
            var n = tt();
            t = t === void 0 ? null : t;
            var r = n.memoizedState;
            return r !== null && t !== null && ba(t, r[1])
                ? r[0]
                : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function gm(e, t, n) {
            return Mn & 21
                ? (ct(n, t) || ((n = Ip()), (K.lanes |= n), (Gn |= n), (e.baseState = !0)), t)
                : (e.baseState && ((e.baseState = !1), (Me = !0)), (e.memoizedState = n));
        }
        function T1(e, t) {
            var n = B;
            (B = n !== 0 && 4 > n ? n : 4), e(!0);
            var r = ql.transition;
            ql.transition = {};
            try {
                e(!1), t();
            } finally {
                (B = n), (ql.transition = r);
            }
        }
        function vm() {
            return tt().memoizedState;
        }
        function b1(e, t, n) {
            var r = an(e);
            if (
                ((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }),
                ym(e))
            )
                wm(t, n);
            else if (((n = qp(e, t, n, r)), n !== null)) {
                var i = ke();
                at(n, e, r, i), Em(n, t, r);
            }
        }
        function O1(e, t, n) {
            var r = an(e),
                i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
            if (ym(e)) wm(t, i);
            else {
                var o = e.alternate;
                if (
                    e.lanes === 0 &&
                    (o === null || o.lanes === 0) &&
                    ((o = t.lastRenderedReducer), o !== null)
                )
                    try {
                        var s = t.lastRenderedState,
                            l = o(s, n);
                        if (((i.hasEagerState = !0), (i.eagerState = l), ct(l, s))) {
                            var u = t.interleaved;
                            u === null ? ((i.next = i), Ia(t)) : ((i.next = u.next), (u.next = i)),
                                (t.interleaved = i);
                            return;
                        }
                    } catch (a) {
                    } finally {
                    }
                (n = qp(e, t, i, r)), n !== null && ((i = ke()), at(n, e, r, i), Em(n, t, r));
            }
        }
        function ym(e) {
            var t = e.alternate;
            return e === K || (t !== null && t === K);
        }
        function wm(e, t) {
            li = is = !0;
            var n = e.pending;
            n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
        }
        function Em(e, t, n) {
            if (n & 4194240) {
                var r = t.lanes;
                (r &= e.pendingLanes), (n |= r), (t.lanes = n), sa(e, n);
            }
        }
        var os = {
                readContext: et,
                useCallback: Ie,
                useContext: Ie,
                useEffect: Ie,
                useImperativeHandle: Ie,
                useInsertionEffect: Ie,
                useLayoutEffect: Ie,
                useMemo: Ie,
                useReducer: Ie,
                useRef: Ie,
                useState: Ie,
                useDebugValue: Ie,
                useDeferredValue: Ie,
                useTransition: Ie,
                useMutableSource: Ie,
                useSyncExternalStore: Ie,
                useId: Ie,
                unstable_isNewReconciler: !1,
            },
            k1 = {
                readContext: et,
                useCallback: function (e, t) {
                    return (Ct().memoizedState = [e, t === void 0 ? null : t]), e;
                },
                useContext: et,
                useEffect: Nd,
                useImperativeHandle: function (e, t, n) {
                    return (
                        (n = n != null ? n.concat([e]) : null),
                        Po(4194308, 4, dm.bind(null, t, e), n)
                    );
                },
                useLayoutEffect: function (e, t) {
                    return Po(4194308, 4, e, t);
                },
                useInsertionEffect: function (e, t) {
                    return Po(4, 2, e, t);
                },
                useMemo: function (e, t) {
                    var n = Ct();
                    return (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
                },
                useReducer: function (e, t, n) {
                    var r = Ct();
                    return (
                        (t = n !== void 0 ? n(t) : t),
                        (r.memoizedState = r.baseState = t),
                        (e = {
                            pending: null,
                            interleaved: null,
                            lanes: 0,
                            dispatch: null,
                            lastRenderedReducer: e,
                            lastRenderedState: t,
                        }),
                        (r.queue = e),
                        (e = e.dispatch = b1.bind(null, K, e)),
                        [r.memoizedState, e]
                    );
                },
                useRef: function (e) {
                    var t = Ct();
                    return (e = { current: e }), (t.memoizedState = e);
                },
                useState: Rd,
                useDebugValue: Ra,
                useDeferredValue: function (e) {
                    return (Ct().memoizedState = e);
                },
                useTransition: function () {
                    var e = Rd(!1),
                        t = e[0];
                    return (e = T1.bind(null, e[1])), (Ct().memoizedState = e), [t, e];
                },
                useMutableSource: function () {},
                useSyncExternalStore: function (e, t, n) {
                    var r = K,
                        i = Ct();
                    if (X) {
                        if (n === void 0) throw Error(S(407));
                        n = n();
                    } else {
                        if (((n = t()), fe === null)) throw Error(S(349));
                        Mn & 30 || im(r, t, n);
                    }
                    i.memoizedState = n;
                    var o = { value: n, getSnapshot: t };
                    return (
                        (i.queue = o),
                        Nd(sm.bind(null, r, o, e), [e]),
                        (r.flags |= 2048),
                        bi(9, om.bind(null, r, o, n, t), void 0, null),
                        n
                    );
                },
                useId: function () {
                    var e = Ct(),
                        t = fe.identifierPrefix;
                    if (X) {
                        var n = Dt,
                            r = Pt;
                        (n = (r & ~(1 << (32 - ut(r) - 1))).toString(32) + n),
                            (t = ":" + t + "R" + n),
                            (n = Ci++),
                            0 < n && (t += "H" + n.toString(32)),
                            (t += ":");
                    } else (n = C1++), (t = ":" + t + "r" + n.toString(32) + ":");
                    return (e.memoizedState = t);
                },
                unstable_isNewReconciler: !1,
            },
            L1 = {
                readContext: et,
                useCallback: mm,
                useContext: et,
                useEffect: La,
                useImperativeHandle: pm,
                useInsertionEffect: cm,
                useLayoutEffect: fm,
                useMemo: hm,
                useReducer: eu,
                useRef: am,
                useState: function () {
                    return eu(Ti);
                },
                useDebugValue: Ra,
                useDeferredValue: function (e) {
                    var t = tt();
                    return gm(t, oe.memoizedState, e);
                },
                useTransition: function () {
                    var e = eu(Ti)[0],
                        t = tt().memoizedState;
                    return [e, t];
                },
                useMutableSource: nm,
                useSyncExternalStore: rm,
                useId: vm,
                unstable_isNewReconciler: !1,
            },
            R1 = {
                readContext: et,
                useCallback: mm,
                useContext: et,
                useEffect: La,
                useImperativeHandle: pm,
                useInsertionEffect: cm,
                useLayoutEffect: fm,
                useMemo: hm,
                useReducer: tu,
                useRef: am,
                useState: function () {
                    return tu(Ti);
                },
                useDebugValue: Ra,
                useDeferredValue: function (e) {
                    var t = tt();
                    return oe === null ? (t.memoizedState = e) : gm(t, oe.memoizedState, e);
                },
                useTransition: function () {
                    var e = tu(Ti)[0],
                        t = tt().memoizedState;
                    return [e, t];
                },
                useMutableSource: nm,
                useSyncExternalStore: rm,
                useId: vm,
                unstable_isNewReconciler: !1,
            };
        function ot(e, t) {
            if (e && e.defaultProps) {
                (t = J({}, t)), (e = e.defaultProps);
                for (var n in e) t[n] === void 0 && (t[n] = e[n]);
                return t;
            }
            return t;
        }
        function Pu(e, t, n, r) {
            (t = e.memoizedState),
                (n = n(r, t)),
                (n = n == null ? t : J({}, t, n)),
                (e.memoizedState = n),
                e.lanes === 0 && (e.updateQueue.baseState = n);
        }
        var ys = {
            isMounted: function (e) {
                return (e = e._reactInternals) ? Fn(e) === e : !1;
            },
            enqueueSetState: function (e, t, n) {
                e = e._reactInternals;
                var r = ke(),
                    i = an(e),
                    o = Ft(r, i);
                (o.payload = t),
                    n != null && (o.callback = n),
                    (t = ln(e, o, i)),
                    t !== null && (at(t, e, i, r), Mo(t, e, i));
            },
            enqueueReplaceState: function (e, t, n) {
                e = e._reactInternals;
                var r = ke(),
                    i = an(e),
                    o = Ft(r, i);
                (o.tag = 1),
                    (o.payload = t),
                    n != null && (o.callback = n),
                    (t = ln(e, o, i)),
                    t !== null && (at(t, e, i, r), Mo(t, e, i));
            },
            enqueueForceUpdate: function (e, t) {
                e = e._reactInternals;
                var n = ke(),
                    r = an(e),
                    i = Ft(n, r);
                (i.tag = 2),
                    t != null && (i.callback = t),
                    (t = ln(e, i, r)),
                    t !== null && (at(t, e, r, n), Mo(t, e, r));
            },
        };
        function Ad(e, t, n, r, i, o, s) {
            return (
                (e = e.stateNode),
                typeof e.shouldComponentUpdate == "function"
                    ? e.shouldComponentUpdate(r, o, s)
                    : t.prototype && t.prototype.isPureReactComponent
                    ? !yi(n, r) || !yi(i, o)
                    : !0
            );
        }
        function Im(e, t, n) {
            var r = !1,
                i = dn,
                o = t.contextType;
            return (
                typeof o == "object" && o !== null
                    ? (o = et(o))
                    : ((i = Pe(t) ? An : Ce.current),
                      (r = t.contextTypes),
                      (o = (r = r != null) ? yr(e, i) : dn)),
                (t = new t(n, o)),
                (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
                (t.updater = ys),
                (e.stateNode = t),
                (t._reactInternals = e),
                r &&
                    ((e = e.stateNode),
                    (e.__reactInternalMemoizedUnmaskedChildContext = i),
                    (e.__reactInternalMemoizedMaskedChildContext = o)),
                t
            );
        }
        function _d(e, t, n, r) {
            (e = t.state),
                typeof t.componentWillReceiveProps == "function" &&
                    t.componentWillReceiveProps(n, r),
                typeof t.UNSAFE_componentWillReceiveProps == "function" &&
                    t.UNSAFE_componentWillReceiveProps(n, r),
                t.state !== e && ys.enqueueReplaceState(t, t.state, null);
        }
        function Du(e, t, n, r) {
            var i = e.stateNode;
            (i.props = n), (i.state = e.memoizedState), (i.refs = {}), xa(e);
            var o = t.contextType;
            typeof o == "object" && o !== null
                ? (i.context = et(o))
                : ((o = Pe(t) ? An : Ce.current), (i.context = yr(e, o))),
                (i.state = e.memoizedState),
                (o = t.getDerivedStateFromProps),
                typeof o == "function" && (Pu(e, t, o, n), (i.state = e.memoizedState)),
                typeof t.getDerivedStateFromProps == "function" ||
                    typeof i.getSnapshotBeforeUpdate == "function" ||
                    (typeof i.UNSAFE_componentWillMount != "function" &&
                        typeof i.componentWillMount != "function") ||
                    ((t = i.state),
                    typeof i.componentWillMount == "function" && i.componentWillMount(),
                    typeof i.UNSAFE_componentWillMount == "function" &&
                        i.UNSAFE_componentWillMount(),
                    t !== i.state && ys.enqueueReplaceState(i, i.state, null),
                    ns(e, n, i, r),
                    (i.state = e.memoizedState)),
                typeof i.componentDidMount == "function" && (e.flags |= 4194308);
        }
        function xr(e, t) {
            try {
                var n = "",
                    r = t;
                do (n += sy(r)), (r = r.return);
                while (r);
                var i = n;
            } catch (o) {
                i =
                    `
Error generating stack: ` +
                    o.message +
                    `
` +
                    o.stack;
            }
            return { value: e, source: t, stack: i, digest: null };
        }
        function nu(e, t, n) {
            return {
                value: e,
                source: null,
                stack: n != null ? n : null,
                digest: t != null ? t : null,
            };
        }
        function Fu(e, t) {
            try {
                console.error(t.value);
            } catch (n) {
                setTimeout(function () {
                    throw n;
                });
            }
        }
        var N1 = typeof WeakMap == "function" ? WeakMap : Map;
        function xm(e, t, n) {
            (n = Ft(-1, n)), (n.tag = 3), (n.payload = { element: null });
            var r = t.value;
            return (
                (n.callback = function () {
                    ls || ((ls = !0), (Zu = r)), Fu(e, t);
                }),
                n
            );
        }
        function Sm(e, t, n) {
            (n = Ft(-1, n)), (n.tag = 3);
            var r = e.type.getDerivedStateFromError;
            if (typeof r == "function") {
                var i = t.value;
                (n.payload = function () {
                    return r(i);
                }),
                    (n.callback = function () {
                        Fu(e, t);
                    });
            }
            var o = e.stateNode;
            return (
                o !== null &&
                    typeof o.componentDidCatch == "function" &&
                    (n.callback = function () {
                        Fu(e, t),
                            typeof r != "function" &&
                                (un === null ? (un = new Set([this])) : un.add(this));
                        var s = t.stack;
                        this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" });
                    }),
                n
            );
        }
        function Md(e, t, n) {
            var r = e.pingCache;
            if (r === null) {
                r = e.pingCache = new N1();
                var i = new Set();
                r.set(t, i);
            } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
            i.has(n) || (i.add(n), (e = H1.bind(null, e, t, n)), t.then(e, e));
        }
        function Gd(e) {
            do {
                var t;
                if (
                    ((t = e.tag === 13) &&
                        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
                    t)
                )
                    return e;
                e = e.return;
            } while (e !== null);
            return null;
        }
        function Pd(e, t, n, r, i) {
            return e.mode & 1
                ? ((e.flags |= 65536), (e.lanes = i), e)
                : (e === t
                      ? (e.flags |= 65536)
                      : ((e.flags |= 128),
                        (n.flags |= 131072),
                        (n.flags &= -52805),
                        n.tag === 1 &&
                            (n.alternate === null
                                ? (n.tag = 17)
                                : ((t = Ft(-1, 1)), (t.tag = 2), ln(n, t, 1))),
                        (n.lanes |= 1)),
                  e);
        }
        var A1 = Wt.ReactCurrentOwner,
            Me = !1;
        function Oe(e, t, n, r) {
            t.child = e === null ? Jp(t, null, n, r) : Er(t, e.child, n, r);
        }
        function Dd(e, t, n, r, i) {
            n = n.render;
            var o = t.ref;
            return (
                hr(t, i),
                (r = Oa(e, t, n, r, o, i)),
                (n = ka()),
                e !== null && !Me
                    ? ((t.updateQueue = e.updateQueue),
                      (t.flags &= -2053),
                      (e.lanes &= ~i),
                      jt(e, t, i))
                    : (X && n && ma(t), (t.flags |= 1), Oe(e, t, r, i), t.child)
            );
        }
        function Fd(e, t, n, r, i) {
            if (e === null) {
                var o = n.type;
                return typeof o == "function" &&
                    !Fa(o) &&
                    o.defaultProps === void 0 &&
                    n.compare === null &&
                    n.defaultProps === void 0
                    ? ((t.tag = 15), (t.type = o), Cm(e, t, o, r, i))
                    : ((e = Vo(n.type, null, r, t, t.mode, i)),
                      (e.ref = t.ref),
                      (e.return = t),
                      (t.child = e));
            }
            if (((o = e.child), !(e.lanes & i))) {
                var s = o.memoizedProps;
                if (((n = n.compare), (n = n !== null ? n : yi), n(s, r) && e.ref === t.ref))
                    return jt(e, t, i);
            }
            return (t.flags |= 1), (e = cn(o, r)), (e.ref = t.ref), (e.return = t), (t.child = e);
        }
        function Cm(e, t, n, r, i) {
            if (e !== null) {
                var o = e.memoizedProps;
                if (yi(o, r) && e.ref === t.ref)
                    if (((Me = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
                        e.flags & 131072 && (Me = !0);
                    else return (t.lanes = e.lanes), jt(e, t, i);
            }
            return Bu(e, t, n, r, i);
        }
        function Tm(e, t, n) {
            var r = t.pendingProps,
                i = r.children,
                o = e !== null ? e.memoizedState : null;
            if (r.mode === "hidden")
                if (!(t.mode & 1))
                    (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
                        W(cr, Ve),
                        (Ve |= n);
                else {
                    if (!(n & 1073741824))
                        return (
                            (e = o !== null ? o.baseLanes | n : n),
                            (t.lanes = t.childLanes = 1073741824),
                            (t.memoizedState = {
                                baseLanes: e,
                                cachePool: null,
                                transitions: null,
                            }),
                            (t.updateQueue = null),
                            W(cr, Ve),
                            (Ve |= e),
                            null
                        );
                    (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
                        (r = o !== null ? o.baseLanes : n),
                        W(cr, Ve),
                        (Ve |= r);
                }
            else
                o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
                    W(cr, Ve),
                    (Ve |= r);
            return Oe(e, t, i, n), t.child;
        }
        function bm(e, t) {
            var n = t.ref;
            ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
                ((t.flags |= 512), (t.flags |= 2097152));
        }
        function Bu(e, t, n, r, i) {
            var o = Pe(n) ? An : Ce.current;
            return (
                (o = yr(t, o)),
                hr(t, i),
                (n = Oa(e, t, n, r, o, i)),
                (r = ka()),
                e !== null && !Me
                    ? ((t.updateQueue = e.updateQueue),
                      (t.flags &= -2053),
                      (e.lanes &= ~i),
                      jt(e, t, i))
                    : (X && r && ma(t), (t.flags |= 1), Oe(e, t, n, i), t.child)
            );
        }
        function Bd(e, t, n, r, i) {
            if (Pe(n)) {
                var o = !0;
                Ko(t);
            } else o = !1;
            if ((hr(t, i), t.stateNode === null)) Do(e, t), Im(t, n, r), Du(t, n, r, i), (r = !0);
            else if (e === null) {
                var s = t.stateNode,
                    l = t.memoizedProps;
                s.props = l;
                var u = s.context,
                    a = n.contextType;
                typeof a == "object" && a !== null
                    ? (a = et(a))
                    : ((a = Pe(n) ? An : Ce.current), (a = yr(t, a)));
                var f = n.getDerivedStateFromProps,
                    d = typeof f == "function" || typeof s.getSnapshotBeforeUpdate == "function";
                d ||
                    (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
                        typeof s.componentWillReceiveProps != "function") ||
                    ((l !== r || u !== a) && _d(t, s, r, a)),
                    (Kt = !1);
                var p = t.memoizedState;
                (s.state = p),
                    ns(t, r, s, i),
                    (u = t.memoizedState),
                    l !== r || p !== u || Ge.current || Kt
                        ? (typeof f == "function" && (Pu(t, n, f, r), (u = t.memoizedState)),
                          (l = Kt || Ad(t, n, l, r, p, u, a))
                              ? (d ||
                                    (typeof s.UNSAFE_componentWillMount != "function" &&
                                        typeof s.componentWillMount != "function") ||
                                    (typeof s.componentWillMount == "function" &&
                                        s.componentWillMount(),
                                    typeof s.UNSAFE_componentWillMount == "function" &&
                                        s.UNSAFE_componentWillMount()),
                                typeof s.componentDidMount == "function" && (t.flags |= 4194308))
                              : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
                                (t.memoizedProps = r),
                                (t.memoizedState = u)),
                          (s.props = r),
                          (s.state = u),
                          (s.context = a),
                          (r = l))
                        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
                          (r = !1));
            } else {
                (s = t.stateNode),
                    em(e, t),
                    (l = t.memoizedProps),
                    (a = t.type === t.elementType ? l : ot(t.type, l)),
                    (s.props = a),
                    (d = t.pendingProps),
                    (p = s.context),
                    (u = n.contextType),
                    typeof u == "object" && u !== null
                        ? (u = et(u))
                        : ((u = Pe(n) ? An : Ce.current), (u = yr(t, u)));
                var v = n.getDerivedStateFromProps;
                (f = typeof v == "function" || typeof s.getSnapshotBeforeUpdate == "function") ||
                    (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
                        typeof s.componentWillReceiveProps != "function") ||
                    ((l !== d || p !== u) && _d(t, s, r, u)),
                    (Kt = !1),
                    (p = t.memoizedState),
                    (s.state = p),
                    ns(t, r, s, i);
                var y = t.memoizedState;
                l !== d || p !== y || Ge.current || Kt
                    ? (typeof v == "function" && (Pu(t, n, v, r), (y = t.memoizedState)),
                      (a = Kt || Ad(t, n, a, r, p, y, u) || !1)
                          ? (f ||
                                (typeof s.UNSAFE_componentWillUpdate != "function" &&
                                    typeof s.componentWillUpdate != "function") ||
                                (typeof s.componentWillUpdate == "function" &&
                                    s.componentWillUpdate(r, y, u),
                                typeof s.UNSAFE_componentWillUpdate == "function" &&
                                    s.UNSAFE_componentWillUpdate(r, y, u)),
                            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
                            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
                          : (typeof s.componentDidUpdate != "function" ||
                                (l === e.memoizedProps && p === e.memoizedState) ||
                                (t.flags |= 4),
                            typeof s.getSnapshotBeforeUpdate != "function" ||
                                (l === e.memoizedProps && p === e.memoizedState) ||
                                (t.flags |= 1024),
                            (t.memoizedProps = r),
                            (t.memoizedState = y)),
                      (s.props = r),
                      (s.state = y),
                      (s.context = u),
                      (r = a))
                    : (typeof s.componentDidUpdate != "function" ||
                          (l === e.memoizedProps && p === e.memoizedState) ||
                          (t.flags |= 4),
                      typeof s.getSnapshotBeforeUpdate != "function" ||
                          (l === e.memoizedProps && p === e.memoizedState) ||
                          (t.flags |= 1024),
                      (r = !1));
            }
            return Vu(e, t, n, r, o, i);
        }
        function Vu(e, t, n, r, i, o) {
            bm(e, t);
            var s = (t.flags & 128) !== 0;
            if (!r && !s) return i && Cd(t, n, !1), jt(e, t, o);
            (r = t.stateNode), (A1.current = t);
            var l = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
            return (
                (t.flags |= 1),
                e !== null && s
                    ? ((t.child = Er(t, e.child, null, o)), (t.child = Er(t, null, l, o)))
                    : Oe(e, t, l, o),
                (t.memoizedState = r.state),
                i && Cd(t, n, !0),
                t.child
            );
        }
        function Om(e) {
            var t = e.stateNode;
            t.pendingContext
                ? Sd(e, t.pendingContext, t.pendingContext !== t.context)
                : t.context && Sd(e, t.context, !1),
                Sa(e, t.containerInfo);
        }
        function Vd(e, t, n, r, i) {
            return wr(), va(i), (t.flags |= 256), Oe(e, t, n, r), t.child;
        }
        var Uu = { dehydrated: null, treeContext: null, retryLane: 0 };
        function ju(e) {
            return { baseLanes: e, cachePool: null, transitions: null };
        }
        function km(e, t, n) {
            var r = t.pendingProps,
                i = $.current,
                o = !1,
                s = (t.flags & 128) !== 0,
                l;
            if (
                ((l = s) || (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
                l
                    ? ((o = !0), (t.flags &= -129))
                    : (e === null || e.memoizedState !== null) && (i |= 1),
                W($, i & 1),
                e === null)
            )
                return (
                    Mu(t),
                    (e = t.memoizedState),
                    e !== null && ((e = e.dehydrated), e !== null)
                        ? (t.mode & 1
                              ? e.data === "$!"
                                  ? (t.lanes = 8)
                                  : (t.lanes = 1073741824)
                              : (t.lanes = 1),
                          null)
                        : ((s = r.children),
                          (e = r.fallback),
                          o
                              ? ((r = t.mode),
                                (o = t.child),
                                (s = { mode: "hidden", children: s }),
                                !(r & 1) && o !== null
                                    ? ((o.childLanes = 0), (o.pendingProps = s))
                                    : (o = Is(s, r, 0, null)),
                                (e = Nn(e, r, n, null)),
                                (o.return = t),
                                (e.return = t),
                                (o.sibling = e),
                                (t.child = o),
                                (t.child.memoizedState = ju(n)),
                                (t.memoizedState = Uu),
                                e)
                              : Na(t, s))
                );
            if (((i = e.memoizedState), i !== null && ((l = i.dehydrated), l !== null)))
                return _1(e, t, s, r, l, i, n);
            if (o) {
                (o = r.fallback), (s = t.mode), (i = e.child), (l = i.sibling);
                var u = { mode: "hidden", children: r.children };
                return (
                    !(s & 1) && t.child !== i
                        ? ((r = t.child),
                          (r.childLanes = 0),
                          (r.pendingProps = u),
                          (t.deletions = null))
                        : ((r = cn(i, u)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
                    l !== null ? (o = cn(l, o)) : ((o = Nn(o, s, n, null)), (o.flags |= 2)),
                    (o.return = t),
                    (r.return = t),
                    (r.sibling = o),
                    (t.child = r),
                    (r = o),
                    (o = t.child),
                    (s = e.child.memoizedState),
                    (s =
                        s === null
                            ? ju(n)
                            : {
                                  baseLanes: s.baseLanes | n,
                                  cachePool: null,
                                  transitions: s.transitions,
                              }),
                    (o.memoizedState = s),
                    (o.childLanes = e.childLanes & ~n),
                    (t.memoizedState = Uu),
                    r
                );
            }
            return (
                (o = e.child),
                (e = o.sibling),
                (r = cn(o, { mode: "visible", children: r.children })),
                !(t.mode & 1) && (r.lanes = n),
                (r.return = t),
                (r.sibling = null),
                e !== null &&
                    ((n = t.deletions),
                    n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
                (t.child = r),
                (t.memoizedState = null),
                r
            );
        }
        function Na(e, t) {
            return (
                (t = Is({ mode: "visible", children: t }, e.mode, 0, null)),
                (t.return = e),
                (e.child = t)
            );
        }
        function ko(e, t, n, r) {
            return (
                r !== null && va(r),
                Er(t, e.child, null, n),
                (e = Na(t, t.pendingProps.children)),
                (e.flags |= 2),
                (t.memoizedState = null),
                e
            );
        }
        function _1(e, t, n, r, i, o, s) {
            if (n)
                return t.flags & 256
                    ? ((t.flags &= -257), (r = nu(Error(S(422)))), ko(e, t, s, r))
                    : t.memoizedState !== null
                    ? ((t.child = e.child), (t.flags |= 128), null)
                    : ((o = r.fallback),
                      (i = t.mode),
                      (r = Is({ mode: "visible", children: r.children }, i, 0, null)),
                      (o = Nn(o, i, s, null)),
                      (o.flags |= 2),
                      (r.return = t),
                      (o.return = t),
                      (r.sibling = o),
                      (t.child = r),
                      t.mode & 1 && Er(t, e.child, null, s),
                      (t.child.memoizedState = ju(s)),
                      (t.memoizedState = Uu),
                      o);
            if (!(t.mode & 1)) return ko(e, t, s, null);
            if (i.data === "$!") {
                if (((r = i.nextSibling && i.nextSibling.dataset), r)) var l = r.dgst;
                return (r = l), (o = Error(S(419))), (r = nu(o, r, void 0)), ko(e, t, s, r);
            }
            if (((l = (s & e.childLanes) !== 0), Me || l)) {
                if (((r = fe), r !== null)) {
                    switch (s & -s) {
                        case 4:
                            i = 2;
                            break;
                        case 16:
                            i = 8;
                            break;
                        case 64:
                        case 128:
                        case 256:
                        case 512:
                        case 1024:
                        case 2048:
                        case 4096:
                        case 8192:
                        case 16384:
                        case 32768:
                        case 65536:
                        case 131072:
                        case 262144:
                        case 524288:
                        case 1048576:
                        case 2097152:
                        case 4194304:
                        case 8388608:
                        case 16777216:
                        case 33554432:
                        case 67108864:
                            i = 32;
                            break;
                        case 536870912:
                            i = 268435456;
                            break;
                        default:
                            i = 0;
                    }
                    (i = i & (r.suspendedLanes | s) ? 0 : i),
                        i !== 0 &&
                            i !== o.retryLane &&
                            ((o.retryLane = i), Ut(e, i), at(r, e, i, -1));
                }
                return Da(), (r = nu(Error(S(421)))), ko(e, t, s, r);
            }
            return i.data === "$?"
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = Q1.bind(null, e)),
                  (i._reactRetry = t),
                  null)
                : ((e = o.treeContext),
                  (Ue = sn(i.nextSibling)),
                  (je = t),
                  (X = !0),
                  (lt = null),
                  e !== null &&
                      (($e[Ke++] = Pt),
                      ($e[Ke++] = Dt),
                      ($e[Ke++] = _n),
                      (Pt = e.id),
                      (Dt = e.overflow),
                      (_n = t)),
                  (t = Na(t, r.children)),
                  (t.flags |= 4096),
                  t);
        }
        function Ud(e, t, n) {
            e.lanes |= t;
            var r = e.alternate;
            r !== null && (r.lanes |= t), Gu(e.return, t, n);
        }
        function ru(e, t, n, r, i) {
            var o = e.memoizedState;
            o === null
                ? (e.memoizedState = {
                      isBackwards: t,
                      rendering: null,
                      renderingStartTime: 0,
                      last: r,
                      tail: n,
                      tailMode: i,
                  })
                : ((o.isBackwards = t),
                  (o.rendering = null),
                  (o.renderingStartTime = 0),
                  (o.last = r),
                  (o.tail = n),
                  (o.tailMode = i));
        }
        function Lm(e, t, n) {
            var r = t.pendingProps,
                i = r.revealOrder,
                o = r.tail;
            if ((Oe(e, t, r.children, n), (r = $.current), r & 2))
                (r = (r & 1) | 2), (t.flags |= 128);
            else {
                if (e !== null && e.flags & 128)
                    e: for (e = t.child; e !== null; ) {
                        if (e.tag === 13) e.memoizedState !== null && Ud(e, n, t);
                        else if (e.tag === 19) Ud(e, n, t);
                        else if (e.child !== null) {
                            (e.child.return = e), (e = e.child);
                            continue;
                        }
                        if (e === t) break e;
                        for (; e.sibling === null; ) {
                            if (e.return === null || e.return === t) break e;
                            e = e.return;
                        }
                        (e.sibling.return = e.return), (e = e.sibling);
                    }
                r &= 1;
            }
            if ((W($, r), !(t.mode & 1))) t.memoizedState = null;
            else
                switch (i) {
                    case "forwards":
                        for (n = t.child, i = null; n !== null; )
                            (e = n.alternate),
                                e !== null && rs(e) === null && (i = n),
                                (n = n.sibling);
                        (n = i),
                            n === null
                                ? ((i = t.child), (t.child = null))
                                : ((i = n.sibling), (n.sibling = null)),
                            ru(t, !1, i, n, o);
                        break;
                    case "backwards":
                        for (n = null, i = t.child, t.child = null; i !== null; ) {
                            if (((e = i.alternate), e !== null && rs(e) === null)) {
                                t.child = i;
                                break;
                            }
                            (e = i.sibling), (i.sibling = n), (n = i), (i = e);
                        }
                        ru(t, !0, n, null, o);
                        break;
                    case "together":
                        ru(t, !1, null, null, void 0);
                        break;
                    default:
                        t.memoizedState = null;
                }
            return t.child;
        }
        function Do(e, t) {
            !(t.mode & 1) &&
                e !== null &&
                ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
        }
        function jt(e, t, n) {
            if (
                (e !== null && (t.dependencies = e.dependencies),
                (Gn |= t.lanes),
                !(n & t.childLanes))
            )
                return null;
            if (e !== null && t.child !== e.child) throw Error(S(153));
            if (t.child !== null) {
                for (
                    e = t.child, n = cn(e, e.pendingProps), t.child = n, n.return = t;
                    e.sibling !== null;

                )
                    (e = e.sibling), (n = n.sibling = cn(e, e.pendingProps)), (n.return = t);
                n.sibling = null;
            }
            return t.child;
        }
        function M1(e, t, n) {
            switch (t.tag) {
                case 3:
                    Om(t), wr();
                    break;
                case 5:
                    tm(t);
                    break;
                case 1:
                    Pe(t.type) && Ko(t);
                    break;
                case 4:
                    Sa(t, t.stateNode.containerInfo);
                    break;
                case 10:
                    var r = t.type._context,
                        i = t.memoizedProps.value;
                    W(es, r._currentValue), (r._currentValue = i);
                    break;
                case 13:
                    if (((r = t.memoizedState), r !== null))
                        return r.dehydrated !== null
                            ? (W($, $.current & 1), (t.flags |= 128), null)
                            : n & t.child.childLanes
                            ? km(e, t, n)
                            : (W($, $.current & 1),
                              (e = jt(e, t, n)),
                              e !== null ? e.sibling : null);
                    W($, $.current & 1);
                    break;
                case 19:
                    if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
                        if (r) return Lm(e, t, n);
                        t.flags |= 128;
                    }
                    if (
                        ((i = t.memoizedState),
                        i !== null &&
                            ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
                        W($, $.current),
                        r)
                    )
                        break;
                    return null;
                case 22:
                case 23:
                    return (t.lanes = 0), Tm(e, t, n);
            }
            return jt(e, t, n);
        }
        var Rm, Wu, Nm, Am;
        Rm = function (e, t) {
            for (var n = t.child; n !== null; ) {
                if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
                else if (n.tag !== 4 && n.child !== null) {
                    (n.child.return = n), (n = n.child);
                    continue;
                }
                if (n === t) break;
                for (; n.sibling === null; ) {
                    if (n.return === null || n.return === t) return;
                    n = n.return;
                }
                (n.sibling.return = n.return), (n = n.sibling);
            }
        };
        Wu = function () {};
        Nm = function (e, t, n, r) {
            var i = e.memoizedProps;
            if (i !== r) {
                (e = t.stateNode), Ln(Ot.current);
                var o = null;
                switch (n) {
                    case "input":
                        (i = fu(e, i)), (r = fu(e, r)), (o = []);
                        break;
                    case "select":
                        (i = J({}, i, { value: void 0 })),
                            (r = J({}, r, { value: void 0 })),
                            (o = []);
                        break;
                    case "textarea":
                        (i = mu(e, i)), (r = mu(e, r)), (o = []);
                        break;
                    default:
                        typeof i.onClick != "function" &&
                            typeof r.onClick == "function" &&
                            (e.onclick = Yo);
                }
                gu(n, r);
                var s;
                n = null;
                for (a in i)
                    if (!r.hasOwnProperty(a) && i.hasOwnProperty(a) && i[a] != null)
                        if (a === "style") {
                            var l = i[a];
                            for (s in l) l.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
                        } else
                            a !== "dangerouslySetInnerHTML" &&
                                a !== "children" &&
                                a !== "suppressContentEditableWarning" &&
                                a !== "suppressHydrationWarning" &&
                                a !== "autoFocus" &&
                                (fi.hasOwnProperty(a)
                                    ? o || (o = [])
                                    : (o = o || []).push(a, null));
                for (a in r) {
                    var u = r[a];
                    if (
                        ((l = i != null ? i[a] : void 0),
                        r.hasOwnProperty(a) && u !== l && (u != null || l != null))
                    )
                        if (a === "style")
                            if (l) {
                                for (s in l)
                                    !l.hasOwnProperty(s) ||
                                        (u && u.hasOwnProperty(s)) ||
                                        (n || (n = {}), (n[s] = ""));
                                for (s in u)
                                    u.hasOwnProperty(s) &&
                                        l[s] !== u[s] &&
                                        (n || (n = {}), (n[s] = u[s]));
                            } else n || (o || (o = []), o.push(a, n)), (n = u);
                        else
                            a === "dangerouslySetInnerHTML"
                                ? ((u = u ? u.__html : void 0),
                                  (l = l ? l.__html : void 0),
                                  u != null && l !== u && (o = o || []).push(a, u))
                                : a === "children"
                                ? (typeof u != "string" && typeof u != "number") ||
                                  (o = o || []).push(a, "" + u)
                                : a !== "suppressContentEditableWarning" &&
                                  a !== "suppressHydrationWarning" &&
                                  (fi.hasOwnProperty(a)
                                      ? (u != null && a === "onScroll" && z("scroll", e),
                                        o || l === u || (o = []))
                                      : (o = o || []).push(a, u));
                }
                n && (o = o || []).push("style", n);
                var a = o;
                (t.updateQueue = a) && (t.flags |= 4);
            }
        };
        Am = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
        };
        function Yr(e, t) {
            if (!X)
                switch (e.tailMode) {
                    case "hidden":
                        t = e.tail;
                        for (var n = null; t !== null; )
                            t.alternate !== null && (n = t), (t = t.sibling);
                        n === null ? (e.tail = null) : (n.sibling = null);
                        break;
                    case "collapsed":
                        n = e.tail;
                        for (var r = null; n !== null; )
                            n.alternate !== null && (r = n), (n = n.sibling);
                        r === null
                            ? t || e.tail === null
                                ? (e.tail = null)
                                : (e.tail.sibling = null)
                            : (r.sibling = null);
                }
        }
        function xe(e) {
            var t = e.alternate !== null && e.alternate.child === e.child,
                n = 0,
                r = 0;
            if (t)
                for (var i = e.child; i !== null; )
                    (n |= i.lanes | i.childLanes),
                        (r |= i.subtreeFlags & 14680064),
                        (r |= i.flags & 14680064),
                        (i.return = e),
                        (i = i.sibling);
            else
                for (i = e.child; i !== null; )
                    (n |= i.lanes | i.childLanes),
                        (r |= i.subtreeFlags),
                        (r |= i.flags),
                        (i.return = e),
                        (i = i.sibling);
            return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        function G1(e, t, n) {
            var r = t.pendingProps;
            switch ((ha(t), t.tag)) {
                case 2:
                case 16:
                case 15:
                case 0:
                case 11:
                case 7:
                case 8:
                case 12:
                case 9:
                case 14:
                    return xe(t), null;
                case 1:
                    return Pe(t.type) && $o(), xe(t), null;
                case 3:
                    return (
                        (r = t.stateNode),
                        Ir(),
                        H(Ge),
                        H(Ce),
                        Ta(),
                        r.pendingContext &&
                            ((r.context = r.pendingContext), (r.pendingContext = null)),
                        (e === null || e.child === null) &&
                            (bo(t)
                                ? (t.flags |= 4)
                                : e === null ||
                                  (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                                  ((t.flags |= 1024), lt !== null && (Ku(lt), (lt = null)))),
                        Wu(e, t),
                        xe(t),
                        null
                    );
                case 5:
                    Ca(t);
                    var i = Ln(Si.current);
                    if (((n = t.type), e !== null && t.stateNode != null))
                        Nm(e, t, n, r, i),
                            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
                    else {
                        if (!r) {
                            if (t.stateNode === null) throw Error(S(166));
                            return xe(t), null;
                        }
                        if (((e = Ln(Ot.current)), bo(t))) {
                            (r = t.stateNode), (n = t.type);
                            var o = t.memoizedProps;
                            switch (((r[Tt] = t), (r[Ii] = o), (e = (t.mode & 1) !== 0), n)) {
                                case "dialog":
                                    z("cancel", r), z("close", r);
                                    break;
                                case "iframe":
                                case "object":
                                case "embed":
                                    z("load", r);
                                    break;
                                case "video":
                                case "audio":
                                    for (i = 0; i < ti.length; i++) z(ti[i], r);
                                    break;
                                case "source":
                                    z("error", r);
                                    break;
                                case "img":
                                case "image":
                                case "link":
                                    z("error", r), z("load", r);
                                    break;
                                case "details":
                                    z("toggle", r);
                                    break;
                                case "input":
                                    Yf(r, o), z("invalid", r);
                                    break;
                                case "select":
                                    (r._wrapperState = { wasMultiple: !!o.multiple }),
                                        z("invalid", r);
                                    break;
                                case "textarea":
                                    Kf(r, o), z("invalid", r);
                            }
                            gu(n, o), (i = null);
                            for (var s in o)
                                if (o.hasOwnProperty(s)) {
                                    var l = o[s];
                                    s === "children"
                                        ? typeof l == "string"
                                            ? r.textContent !== l &&
                                              (o.suppressHydrationWarning !== !0 &&
                                                  To(r.textContent, l, e),
                                              (i = ["children", l]))
                                            : typeof l == "number" &&
                                              r.textContent !== "" + l &&
                                              (o.suppressHydrationWarning !== !0 &&
                                                  To(r.textContent, l, e),
                                              (i = ["children", "" + l]))
                                        : fi.hasOwnProperty(s) &&
                                          l != null &&
                                          s === "onScroll" &&
                                          z("scroll", r);
                                }
                            switch (n) {
                                case "input":
                                    po(r), $f(r, o, !0);
                                    break;
                                case "textarea":
                                    po(r), Jf(r);
                                    break;
                                case "select":
                                case "option":
                                    break;
                                default:
                                    typeof o.onClick == "function" && (r.onclick = Yo);
                            }
                            (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
                        } else {
                            (s = i.nodeType === 9 ? i : i.ownerDocument),
                                e === "http://www.w3.org/1999/xhtml" && (e = sp(n)),
                                e === "http://www.w3.org/1999/xhtml"
                                    ? n === "script"
                                        ? ((e = s.createElement("div")),
                                          (e.innerHTML = "<script></script>"),
                                          (e = e.removeChild(e.firstChild)))
                                        : typeof r.is == "string"
                                        ? (e = s.createElement(n, { is: r.is }))
                                        : ((e = s.createElement(n)),
                                          n === "select" &&
                                              ((s = e),
                                              r.multiple
                                                  ? (s.multiple = !0)
                                                  : r.size && (s.size = r.size)))
                                    : (e = s.createElementNS(e, n)),
                                (e[Tt] = t),
                                (e[Ii] = r),
                                Rm(e, t, !1, !1),
                                (t.stateNode = e);
                            e: {
                                switch (((s = vu(n, r)), n)) {
                                    case "dialog":
                                        z("cancel", e), z("close", e), (i = r);
                                        break;
                                    case "iframe":
                                    case "object":
                                    case "embed":
                                        z("load", e), (i = r);
                                        break;
                                    case "video":
                                    case "audio":
                                        for (i = 0; i < ti.length; i++) z(ti[i], e);
                                        i = r;
                                        break;
                                    case "source":
                                        z("error", e), (i = r);
                                        break;
                                    case "img":
                                    case "image":
                                    case "link":
                                        z("error", e), z("load", e), (i = r);
                                        break;
                                    case "details":
                                        z("toggle", e), (i = r);
                                        break;
                                    case "input":
                                        Yf(e, r), (i = fu(e, r)), z("invalid", e);
                                        break;
                                    case "option":
                                        i = r;
                                        break;
                                    case "select":
                                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                                            (i = J({}, r, { value: void 0 })),
                                            z("invalid", e);
                                        break;
                                    case "textarea":
                                        Kf(e, r), (i = mu(e, r)), z("invalid", e);
                                        break;
                                    default:
                                        i = r;
                                }
                                gu(n, i), (l = i);
                                for (o in l)
                                    if (l.hasOwnProperty(o)) {
                                        var u = l[o];
                                        o === "style"
                                            ? ap(e, u)
                                            : o === "dangerouslySetInnerHTML"
                                            ? ((u = u ? u.__html : void 0), u != null && lp(e, u))
                                            : o === "children"
                                            ? typeof u == "string"
                                                ? (n !== "textarea" || u !== "") && di(e, u)
                                                : typeof u == "number" && di(e, "" + u)
                                            : o !== "suppressContentEditableWarning" &&
                                              o !== "suppressHydrationWarning" &&
                                              o !== "autoFocus" &&
                                              (fi.hasOwnProperty(o)
                                                  ? u != null && o === "onScroll" && z("scroll", e)
                                                  : u != null && ea(e, o, u, s));
                                    }
                                switch (n) {
                                    case "input":
                                        po(e), $f(e, r, !1);
                                        break;
                                    case "textarea":
                                        po(e), Jf(e);
                                        break;
                                    case "option":
                                        r.value != null &&
                                            e.setAttribute("value", "" + fn(r.value));
                                        break;
                                    case "select":
                                        (e.multiple = !!r.multiple),
                                            (o = r.value),
                                            o != null
                                                ? fr(e, !!r.multiple, o, !1)
                                                : r.defaultValue != null &&
                                                  fr(e, !!r.multiple, r.defaultValue, !0);
                                        break;
                                    default:
                                        typeof i.onClick == "function" && (e.onclick = Yo);
                                }
                                switch (n) {
                                    case "button":
                                    case "input":
                                    case "select":
                                    case "textarea":
                                        r = !!r.autoFocus;
                                        break e;
                                    case "img":
                                        r = !0;
                                        break e;
                                    default:
                                        r = !1;
                                }
                            }
                            r && (t.flags |= 4);
                        }
                        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
                    }
                    return xe(t), null;
                case 6:
                    if (e && t.stateNode != null) Am(e, t, e.memoizedProps, r);
                    else {
                        if (typeof r != "string" && t.stateNode === null) throw Error(S(166));
                        if (((n = Ln(Si.current)), Ln(Ot.current), bo(t))) {
                            if (
                                ((r = t.stateNode),
                                (n = t.memoizedProps),
                                (r[Tt] = t),
                                (o = r.nodeValue !== n) && ((e = je), e !== null))
                            )
                                switch (e.tag) {
                                    case 3:
                                        To(r.nodeValue, n, (e.mode & 1) !== 0);
                                        break;
                                    case 5:
                                        e.memoizedProps.suppressHydrationWarning !== !0 &&
                                            To(r.nodeValue, n, (e.mode & 1) !== 0);
                                }
                            o && (t.flags |= 4);
                        } else
                            (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
                                (r[Tt] = t),
                                (t.stateNode = r);
                    }
                    return xe(t), null;
                case 13:
                    if (
                        (H($),
                        (r = t.memoizedState),
                        e === null ||
                            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
                    ) {
                        if (X && Ue !== null && t.mode & 1 && !(t.flags & 128))
                            $p(), wr(), (t.flags |= 98560), (o = !1);
                        else if (((o = bo(t)), r !== null && r.dehydrated !== null)) {
                            if (e === null) {
                                if (!o) throw Error(S(318));
                                if (
                                    ((o = t.memoizedState),
                                    (o = o !== null ? o.dehydrated : null),
                                    !o)
                                )
                                    throw Error(S(317));
                                o[Tt] = t;
                            } else
                                wr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
                            xe(t), (o = !1);
                        } else lt !== null && (Ku(lt), (lt = null)), (o = !0);
                        if (!o) return t.flags & 65536 ? t : null;
                    }
                    return t.flags & 128
                        ? ((t.lanes = n), t)
                        : ((r = r !== null),
                          r !== (e !== null && e.memoizedState !== null) &&
                              r &&
                              ((t.child.flags |= 8192),
                              t.mode & 1 &&
                                  (e === null || $.current & 1 ? se === 0 && (se = 3) : Da())),
                          t.updateQueue !== null && (t.flags |= 4),
                          xe(t),
                          null);
                case 4:
                    return Ir(), Wu(e, t), e === null && wi(t.stateNode.containerInfo), xe(t), null;
                case 10:
                    return Ea(t.type._context), xe(t), null;
                case 17:
                    return Pe(t.type) && $o(), xe(t), null;
                case 19:
                    if ((H($), (o = t.memoizedState), o === null)) return xe(t), null;
                    if (((r = (t.flags & 128) !== 0), (s = o.rendering), s === null))
                        if (r) Yr(o, !1);
                        else {
                            if (se !== 0 || (e !== null && e.flags & 128))
                                for (e = t.child; e !== null; ) {
                                    if (((s = rs(e)), s !== null)) {
                                        for (
                                            t.flags |= 128,
                                                Yr(o, !1),
                                                r = s.updateQueue,
                                                r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                                                t.subtreeFlags = 0,
                                                r = n,
                                                n = t.child;
                                            n !== null;

                                        )
                                            (o = n),
                                                (e = r),
                                                (o.flags &= 14680066),
                                                (s = o.alternate),
                                                s === null
                                                    ? ((o.childLanes = 0),
                                                      (o.lanes = e),
                                                      (o.child = null),
                                                      (o.subtreeFlags = 0),
                                                      (o.memoizedProps = null),
                                                      (o.memoizedState = null),
                                                      (o.updateQueue = null),
                                                      (o.dependencies = null),
                                                      (o.stateNode = null))
                                                    : ((o.childLanes = s.childLanes),
                                                      (o.lanes = s.lanes),
                                                      (o.child = s.child),
                                                      (o.subtreeFlags = 0),
                                                      (o.deletions = null),
                                                      (o.memoizedProps = s.memoizedProps),
                                                      (o.memoizedState = s.memoizedState),
                                                      (o.updateQueue = s.updateQueue),
                                                      (o.type = s.type),
                                                      (e = s.dependencies),
                                                      (o.dependencies =
                                                          e === null
                                                              ? null
                                                              : {
                                                                    lanes: e.lanes,
                                                                    firstContext: e.firstContext,
                                                                })),
                                                (n = n.sibling);
                                        return W($, ($.current & 1) | 2), t.child;
                                    }
                                    e = e.sibling;
                                }
                            o.tail !== null &&
                                ne() > Sr &&
                                ((t.flags |= 128), (r = !0), Yr(o, !1), (t.lanes = 4194304));
                        }
                    else {
                        if (!r)
                            if (((e = rs(s)), e !== null)) {
                                if (
                                    ((t.flags |= 128),
                                    (r = !0),
                                    (n = e.updateQueue),
                                    n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                                    Yr(o, !0),
                                    o.tail === null &&
                                        o.tailMode === "hidden" &&
                                        !s.alternate &&
                                        !X)
                                )
                                    return xe(t), null;
                            } else
                                2 * ne() - o.renderingStartTime > Sr &&
                                    n !== 1073741824 &&
                                    ((t.flags |= 128), (r = !0), Yr(o, !1), (t.lanes = 4194304));
                        o.isBackwards
                            ? ((s.sibling = t.child), (t.child = s))
                            : ((n = o.last),
                              n !== null ? (n.sibling = s) : (t.child = s),
                              (o.last = s));
                    }
                    return o.tail !== null
                        ? ((t = o.tail),
                          (o.rendering = t),
                          (o.tail = t.sibling),
                          (o.renderingStartTime = ne()),
                          (t.sibling = null),
                          (n = $.current),
                          W($, r ? (n & 1) | 2 : n & 1),
                          t)
                        : (xe(t), null);
                case 22:
                case 23:
                    return (
                        Pa(),
                        (r = t.memoizedState !== null),
                        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
                        r && t.mode & 1
                            ? Ve & 1073741824 && (xe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
                            : xe(t),
                        null
                    );
                case 24:
                    return null;
                case 25:
                    return null;
            }
            throw Error(S(156, t.tag));
        }
        function P1(e, t) {
            switch ((ha(t), t.tag)) {
                case 1:
                    return (
                        Pe(t.type) && $o(),
                        (e = t.flags),
                        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
                    );
                case 3:
                    return (
                        Ir(),
                        H(Ge),
                        H(Ce),
                        Ta(),
                        (e = t.flags),
                        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
                    );
                case 5:
                    return Ca(t), null;
                case 13:
                    if ((H($), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
                        if (t.alternate === null) throw Error(S(340));
                        wr();
                    }
                    return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
                case 19:
                    return H($), null;
                case 4:
                    return Ir(), null;
                case 10:
                    return Ea(t.type._context), null;
                case 22:
                case 23:
                    return Pa(), null;
                case 24:
                    return null;
                default:
                    return null;
            }
        }
        var Lo = !1,
            Se = !1,
            D1 = typeof WeakSet == "function" ? WeakSet : Set,
            b = null;
        function ar(e, t) {
            var n = e.ref;
            if (n !== null)
                if (typeof n == "function")
                    try {
                        n(null);
                    } catch (r) {
                        ee(e, t, r);
                    }
                else n.current = null;
        }
        function zu(e, t, n) {
            try {
                n();
            } catch (r) {
                ee(e, t, r);
            }
        }
        var jd = !1;
        function F1(e, t) {
            if (((Ou = Qo), (e = Dp()), pa(e))) {
                if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
                else
                    e: {
                        n = ((n = e.ownerDocument) && n.defaultView) || window;
                        var r = n.getSelection && n.getSelection();
                        if (r && r.rangeCount !== 0) {
                            n = r.anchorNode;
                            var i = r.anchorOffset,
                                o = r.focusNode;
                            r = r.focusOffset;
                            try {
                                n.nodeType, o.nodeType;
                            } catch (w) {
                                n = null;
                                break e;
                            }
                            var s = 0,
                                l = -1,
                                u = -1,
                                a = 0,
                                f = 0,
                                d = e,
                                p = null;
                            t: for (;;) {
                                for (
                                    var v;
                                    d !== n || (i !== 0 && d.nodeType !== 3) || (l = s + i),
                                        d !== o || (r !== 0 && d.nodeType !== 3) || (u = s + r),
                                        d.nodeType === 3 && (s += d.nodeValue.length),
                                        (v = d.firstChild) !== null;

                                )
                                    (p = d), (d = v);
                                for (;;) {
                                    if (d === e) break t;
                                    if (
                                        (p === n && ++a === i && (l = s),
                                        p === o && ++f === r && (u = s),
                                        (v = d.nextSibling) !== null)
                                    )
                                        break;
                                    (d = p), (p = d.parentNode);
                                }
                                d = v;
                            }
                            n = l === -1 || u === -1 ? null : { start: l, end: u };
                        } else n = null;
                    }
                n = n || { start: 0, end: 0 };
            } else n = null;
            for (ku = { focusedElem: e, selectionRange: n }, Qo = !1, b = t; b !== null; )
                if (((t = b), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
                    (e.return = t), (b = e);
                else
                    for (; b !== null; ) {
                        t = b;
                        try {
                            var y = t.alternate;
                            if (t.flags & 1024)
                                switch (t.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        break;
                                    case 1:
                                        if (y !== null) {
                                            var g = y.memoizedProps,
                                                E = y.memoizedState,
                                                h = t.stateNode,
                                                c = h.getSnapshotBeforeUpdate(
                                                    t.elementType === t.type ? g : ot(t.type, g),
                                                    E
                                                );
                                            h.__reactInternalSnapshotBeforeUpdate = c;
                                        }
                                        break;
                                    case 3:
                                        var m = t.stateNode.containerInfo;
                                        m.nodeType === 1
                                            ? (m.textContent = "")
                                            : m.nodeType === 9 &&
                                              m.documentElement &&
                                              m.removeChild(m.documentElement);
                                        break;
                                    case 5:
                                    case 6:
                                    case 4:
                                    case 17:
                                        break;
                                    default:
                                        throw Error(S(163));
                                }
                        } catch (w) {
                            ee(t, t.return, w);
                        }
                        if (((e = t.sibling), e !== null)) {
                            (e.return = t.return), (b = e);
                            break;
                        }
                        b = t.return;
                    }
            return (y = jd), (jd = !1), y;
        }
        function ui(e, t, n) {
            var r = t.updateQueue;
            if (((r = r !== null ? r.lastEffect : null), r !== null)) {
                var i = (r = r.next);
                do {
                    if ((i.tag & e) === e) {
                        var o = i.destroy;
                        (i.destroy = void 0), o !== void 0 && zu(t, n, o);
                    }
                    i = i.next;
                } while (i !== r);
            }
        }
        function ws(e, t) {
            if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
                var n = (t = t.next);
                do {
                    if ((n.tag & e) === e) {
                        var r = n.create;
                        n.destroy = r();
                    }
                    n = n.next;
                } while (n !== t);
            }
        }
        function Hu(e) {
            var t = e.ref;
            if (t !== null) {
                var n = e.stateNode;
                switch (e.tag) {
                    case 5:
                        e = n;
                        break;
                    default:
                        e = n;
                }
                typeof t == "function" ? t(e) : (t.current = e);
            }
        }
        function _m(e) {
            var t = e.alternate;
            t !== null && ((e.alternate = null), _m(t)),
                (e.child = null),
                (e.deletions = null),
                (e.sibling = null),
                e.tag === 5 &&
                    ((t = e.stateNode),
                    t !== null &&
                        (delete t[Tt], delete t[Ii], delete t[Nu], delete t[E1], delete t[I1])),
                (e.stateNode = null),
                (e.return = null),
                (e.dependencies = null),
                (e.memoizedProps = null),
                (e.memoizedState = null),
                (e.pendingProps = null),
                (e.stateNode = null),
                (e.updateQueue = null);
        }
        function Mm(e) {
            return e.tag === 5 || e.tag === 3 || e.tag === 4;
        }
        function Wd(e) {
            e: for (;;) {
                for (; e.sibling === null; ) {
                    if (e.return === null || Mm(e.return)) return null;
                    e = e.return;
                }
                for (
                    e.sibling.return = e.return, e = e.sibling;
                    e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

                ) {
                    if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
                    (e.child.return = e), (e = e.child);
                }
                if (!(e.flags & 2)) return e.stateNode;
            }
        }
        function Qu(e, t, n) {
            var r = e.tag;
            if (r === 5 || r === 6)
                (e = e.stateNode),
                    t
                        ? n.nodeType === 8
                            ? n.parentNode.insertBefore(e, t)
                            : n.insertBefore(e, t)
                        : (n.nodeType === 8
                              ? ((t = n.parentNode), t.insertBefore(e, n))
                              : ((t = n), t.appendChild(e)),
                          (n = n._reactRootContainer),
                          n != null || t.onclick !== null || (t.onclick = Yo));
            else if (r !== 4 && ((e = e.child), e !== null))
                for (Qu(e, t, n), e = e.sibling; e !== null; ) Qu(e, t, n), (e = e.sibling);
        }
        function Xu(e, t, n) {
            var r = e.tag;
            if (r === 5 || r === 6) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
            else if (r !== 4 && ((e = e.child), e !== null))
                for (Xu(e, t, n), e = e.sibling; e !== null; ) Xu(e, t, n), (e = e.sibling);
        }
        var de = null,
            st = !1;
        function Yt(e, t, n) {
            for (n = n.child; n !== null; ) Gm(e, t, n), (n = n.sibling);
        }
        function Gm(e, t, n) {
            if (bt && typeof bt.onCommitFiberUnmount == "function")
                try {
                    bt.onCommitFiberUnmount(fs, n);
                } catch (l) {}
            switch (n.tag) {
                case 5:
                    Se || ar(n, t);
                case 6:
                    var r = de,
                        i = st;
                    (de = null),
                        Yt(e, t, n),
                        (de = r),
                        (st = i),
                        de !== null &&
                            (st
                                ? ((e = de),
                                  (n = n.stateNode),
                                  e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
                                : de.removeChild(n.stateNode));
                    break;
                case 18:
                    de !== null &&
                        (st
                            ? ((e = de),
                              (n = n.stateNode),
                              e.nodeType === 8 ? $l(e.parentNode, n) : e.nodeType === 1 && $l(e, n),
                              gi(e))
                            : $l(de, n.stateNode));
                    break;
                case 4:
                    (r = de),
                        (i = st),
                        (de = n.stateNode.containerInfo),
                        (st = !0),
                        Yt(e, t, n),
                        (de = r),
                        (st = i);
                    break;
                case 0:
                case 11:
                case 14:
                case 15:
                    if (
                        !Se &&
                        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
                    ) {
                        i = r = r.next;
                        do {
                            var o = i,
                                s = o.destroy;
                            (o = o.tag),
                                s !== void 0 && (o & 2 || o & 4) && zu(n, t, s),
                                (i = i.next);
                        } while (i !== r);
                    }
                    Yt(e, t, n);
                    break;
                case 1:
                    if (
                        !Se &&
                        (ar(n, t), (r = n.stateNode), typeof r.componentWillUnmount == "function")
                    )
                        try {
                            (r.props = n.memoizedProps),
                                (r.state = n.memoizedState),
                                r.componentWillUnmount();
                        } catch (l) {
                            ee(n, t, l);
                        }
                    Yt(e, t, n);
                    break;
                case 21:
                    Yt(e, t, n);
                    break;
                case 22:
                    n.mode & 1
                        ? ((Se = (r = Se) || n.memoizedState !== null), Yt(e, t, n), (Se = r))
                        : Yt(e, t, n);
                    break;
                default:
                    Yt(e, t, n);
            }
        }
        function zd(e) {
            var t = e.updateQueue;
            if (t !== null) {
                e.updateQueue = null;
                var n = e.stateNode;
                n === null && (n = e.stateNode = new D1()),
                    t.forEach(function (r) {
                        var i = X1.bind(null, e, r);
                        n.has(r) || (n.add(r), r.then(i, i));
                    });
            }
        }
        function it(e, t) {
            var n = t.deletions;
            if (n !== null)
                for (var r = 0; r < n.length; r++) {
                    var i = n[r];
                    try {
                        var o = e,
                            s = t,
                            l = s;
                        e: for (; l !== null; ) {
                            switch (l.tag) {
                                case 5:
                                    (de = l.stateNode), (st = !1);
                                    break e;
                                case 3:
                                    (de = l.stateNode.containerInfo), (st = !0);
                                    break e;
                                case 4:
                                    (de = l.stateNode.containerInfo), (st = !0);
                                    break e;
                            }
                            l = l.return;
                        }
                        if (de === null) throw Error(S(160));
                        Gm(o, s, i), (de = null), (st = !1);
                        var u = i.alternate;
                        u !== null && (u.return = null), (i.return = null);
                    } catch (a) {
                        ee(i, t, a);
                    }
                }
            if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Pm(t, e), (t = t.sibling);
        }
        function Pm(e, t) {
            var n = e.alternate,
                r = e.flags;
            switch (e.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                    if ((it(t, e), St(e), r & 4)) {
                        try {
                            ui(3, e, e.return), ws(3, e);
                        } catch (g) {
                            ee(e, e.return, g);
                        }
                        try {
                            ui(5, e, e.return);
                        } catch (g) {
                            ee(e, e.return, g);
                        }
                    }
                    break;
                case 1:
                    it(t, e), St(e), r & 512 && n !== null && ar(n, n.return);
                    break;
                case 5:
                    if ((it(t, e), St(e), r & 512 && n !== null && ar(n, n.return), e.flags & 32)) {
                        var i = e.stateNode;
                        try {
                            di(i, "");
                        } catch (g) {
                            ee(e, e.return, g);
                        }
                    }
                    if (r & 4 && ((i = e.stateNode), i != null)) {
                        var o = e.memoizedProps,
                            s = n !== null ? n.memoizedProps : o,
                            l = e.type,
                            u = e.updateQueue;
                        if (((e.updateQueue = null), u !== null))
                            try {
                                l === "input" && o.type === "radio" && o.name != null && ip(i, o),
                                    vu(l, s);
                                var a = vu(l, o);
                                for (s = 0; s < u.length; s += 2) {
                                    var f = u[s],
                                        d = u[s + 1];
                                    f === "style"
                                        ? ap(i, d)
                                        : f === "dangerouslySetInnerHTML"
                                        ? lp(i, d)
                                        : f === "children"
                                        ? di(i, d)
                                        : ea(i, f, d, a);
                                }
                                switch (l) {
                                    case "input":
                                        du(i, o);
                                        break;
                                    case "textarea":
                                        op(i, o);
                                        break;
                                    case "select":
                                        var p = i._wrapperState.wasMultiple;
                                        i._wrapperState.wasMultiple = !!o.multiple;
                                        var v = o.value;
                                        v != null
                                            ? fr(i, !!o.multiple, v, !1)
                                            : p !== !!o.multiple &&
                                              (o.defaultValue != null
                                                  ? fr(i, !!o.multiple, o.defaultValue, !0)
                                                  : fr(i, !!o.multiple, o.multiple ? [] : "", !1));
                                }
                                i[Ii] = o;
                            } catch (g) {
                                ee(e, e.return, g);
                            }
                    }
                    break;
                case 6:
                    if ((it(t, e), St(e), r & 4)) {
                        if (e.stateNode === null) throw Error(S(162));
                        (i = e.stateNode), (o = e.memoizedProps);
                        try {
                            i.nodeValue = o;
                        } catch (g) {
                            ee(e, e.return, g);
                        }
                    }
                    break;
                case 3:
                    if ((it(t, e), St(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
                        try {
                            gi(t.containerInfo);
                        } catch (g) {
                            ee(e, e.return, g);
                        }
                    break;
                case 4:
                    it(t, e), St(e);
                    break;
                case 13:
                    it(t, e),
                        St(e),
                        (i = e.child),
                        i.flags & 8192 &&
                            ((o = i.memoizedState !== null),
                            (i.stateNode.isHidden = o),
                            !o ||
                                (i.alternate !== null && i.alternate.memoizedState !== null) ||
                                (Ma = ne())),
                        r & 4 && zd(e);
                    break;
                case 22:
                    if (
                        ((f = n !== null && n.memoizedState !== null),
                        e.mode & 1 ? ((Se = (a = Se) || f), it(t, e), (Se = a)) : it(t, e),
                        St(e),
                        r & 8192)
                    ) {
                        if (
                            ((a = e.memoizedState !== null),
                            (e.stateNode.isHidden = a) && !f && e.mode & 1)
                        )
                            for (b = e, f = e.child; f !== null; ) {
                                for (d = b = f; b !== null; ) {
                                    switch (((p = b), (v = p.child), p.tag)) {
                                        case 0:
                                        case 11:
                                        case 14:
                                        case 15:
                                            ui(4, p, p.return);
                                            break;
                                        case 1:
                                            ar(p, p.return);
                                            var y = p.stateNode;
                                            if (typeof y.componentWillUnmount == "function") {
                                                (r = p), (n = p.return);
                                                try {
                                                    (t = r),
                                                        (y.props = t.memoizedProps),
                                                        (y.state = t.memoizedState),
                                                        y.componentWillUnmount();
                                                } catch (g) {
                                                    ee(r, n, g);
                                                }
                                            }
                                            break;
                                        case 5:
                                            ar(p, p.return);
                                            break;
                                        case 22:
                                            if (p.memoizedState !== null) {
                                                Qd(d);
                                                continue;
                                            }
                                    }
                                    v !== null ? ((v.return = p), (b = v)) : Qd(d);
                                }
                                f = f.sibling;
                            }
                        e: for (f = null, d = e; ; ) {
                            if (d.tag === 5) {
                                if (f === null) {
                                    f = d;
                                    try {
                                        (i = d.stateNode),
                                            a
                                                ? ((o = i.style),
                                                  typeof o.setProperty == "function"
                                                      ? o.setProperty(
                                                            "display",
                                                            "none",
                                                            "important"
                                                        )
                                                      : (o.display = "none"))
                                                : ((l = d.stateNode),
                                                  (u = d.memoizedProps.style),
                                                  (s =
                                                      u != null && u.hasOwnProperty("display")
                                                          ? u.display
                                                          : null),
                                                  (l.style.display = up("display", s)));
                                    } catch (g) {
                                        ee(e, e.return, g);
                                    }
                                }
                            } else if (d.tag === 6) {
                                if (f === null)
                                    try {
                                        d.stateNode.nodeValue = a ? "" : d.memoizedProps;
                                    } catch (g) {
                                        ee(e, e.return, g);
                                    }
                            } else if (
                                ((d.tag !== 22 && d.tag !== 23) ||
                                    d.memoizedState === null ||
                                    d === e) &&
                                d.child !== null
                            ) {
                                (d.child.return = d), (d = d.child);
                                continue;
                            }
                            if (d === e) break e;
                            for (; d.sibling === null; ) {
                                if (d.return === null || d.return === e) break e;
                                f === d && (f = null), (d = d.return);
                            }
                            f === d && (f = null), (d.sibling.return = d.return), (d = d.sibling);
                        }
                    }
                    break;
                case 19:
                    it(t, e), St(e), r & 4 && zd(e);
                    break;
                case 21:
                    break;
                default:
                    it(t, e), St(e);
            }
        }
        function St(e) {
            var t = e.flags;
            if (t & 2) {
                try {
                    e: {
                        for (var n = e.return; n !== null; ) {
                            if (Mm(n)) {
                                var r = n;
                                break e;
                            }
                            n = n.return;
                        }
                        throw Error(S(160));
                    }
                    switch (r.tag) {
                        case 5:
                            var i = r.stateNode;
                            r.flags & 32 && (di(i, ""), (r.flags &= -33));
                            var o = Wd(e);
                            Xu(e, o, i);
                            break;
                        case 3:
                        case 4:
                            var s = r.stateNode.containerInfo,
                                l = Wd(e);
                            Qu(e, l, s);
                            break;
                        default:
                            throw Error(S(161));
                    }
                } catch (u) {
                    ee(e, e.return, u);
                }
                e.flags &= -3;
            }
            t & 4096 && (e.flags &= -4097);
        }
        function B1(e, t, n) {
            (b = e), Dm(e, t, n);
        }
        function Dm(e, t, n) {
            for (var r = (e.mode & 1) !== 0; b !== null; ) {
                var i = b,
                    o = i.child;
                if (i.tag === 22 && r) {
                    var s = i.memoizedState !== null || Lo;
                    if (!s) {
                        var l = i.alternate,
                            u = (l !== null && l.memoizedState !== null) || Se;
                        l = Lo;
                        var a = Se;
                        if (((Lo = s), (Se = u) && !a))
                            for (b = i; b !== null; )
                                (s = b),
                                    (u = s.child),
                                    s.tag === 22 && s.memoizedState !== null
                                        ? Xd(i)
                                        : u !== null
                                        ? ((u.return = s), (b = u))
                                        : Xd(i);
                        for (; o !== null; ) (b = o), Dm(o, t, n), (o = o.sibling);
                        (b = i), (Lo = l), (Se = a);
                    }
                    Hd(e, t, n);
                } else
                    i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (b = o)) : Hd(e, t, n);
            }
        }
        function Hd(e) {
            for (; b !== null; ) {
                var t = b;
                if (t.flags & 8772) {
                    var n = t.alternate;
                    try {
                        if (t.flags & 8772)
                            switch (t.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Se || ws(5, t);
                                    break;
                                case 1:
                                    var r = t.stateNode;
                                    if (t.flags & 4 && !Se)
                                        if (n === null) r.componentDidMount();
                                        else {
                                            var i =
                                                t.elementType === t.type
                                                    ? n.memoizedProps
                                                    : ot(t.type, n.memoizedProps);
                                            r.componentDidUpdate(
                                                i,
                                                n.memoizedState,
                                                r.__reactInternalSnapshotBeforeUpdate
                                            );
                                        }
                                    var o = t.updateQueue;
                                    o !== null && Ld(t, o, r);
                                    break;
                                case 3:
                                    var s = t.updateQueue;
                                    if (s !== null) {
                                        if (((n = null), t.child !== null))
                                            switch (t.child.tag) {
                                                case 5:
                                                    n = t.child.stateNode;
                                                    break;
                                                case 1:
                                                    n = t.child.stateNode;
                                            }
                                        Ld(t, s, n);
                                    }
                                    break;
                                case 5:
                                    var l = t.stateNode;
                                    if (n === null && t.flags & 4) {
                                        n = l;
                                        var u = t.memoizedProps;
                                        switch (t.type) {
                                            case "button":
                                            case "input":
                                            case "select":
                                            case "textarea":
                                                u.autoFocus && n.focus();
                                                break;
                                            case "img":
                                                u.src && (n.src = u.src);
                                        }
                                    }
                                    break;
                                case 6:
                                    break;
                                case 4:
                                    break;
                                case 12:
                                    break;
                                case 13:
                                    if (t.memoizedState === null) {
                                        var a = t.alternate;
                                        if (a !== null) {
                                            var f = a.memoizedState;
                                            if (f !== null) {
                                                var d = f.dehydrated;
                                                d !== null && gi(d);
                                            }
                                        }
                                    }
                                    break;
                                case 19:
                                case 17:
                                case 21:
                                case 22:
                                case 23:
                                case 25:
                                    break;
                                default:
                                    throw Error(S(163));
                            }
                        Se || (t.flags & 512 && Hu(t));
                    } catch (p) {
                        ee(t, t.return, p);
                    }
                }
                if (t === e) {
                    b = null;
                    break;
                }
                if (((n = t.sibling), n !== null)) {
                    (n.return = t.return), (b = n);
                    break;
                }
                b = t.return;
            }
        }
        function Qd(e) {
            for (; b !== null; ) {
                var t = b;
                if (t === e) {
                    b = null;
                    break;
                }
                var n = t.sibling;
                if (n !== null) {
                    (n.return = t.return), (b = n);
                    break;
                }
                b = t.return;
            }
        }
        function Xd(e) {
            for (; b !== null; ) {
                var t = b;
                try {
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            var n = t.return;
                            try {
                                ws(4, t);
                            } catch (u) {
                                ee(t, n, u);
                            }
                            break;
                        case 1:
                            var r = t.stateNode;
                            if (typeof r.componentDidMount == "function") {
                                var i = t.return;
                                try {
                                    r.componentDidMount();
                                } catch (u) {
                                    ee(t, i, u);
                                }
                            }
                            var o = t.return;
                            try {
                                Hu(t);
                            } catch (u) {
                                ee(t, o, u);
                            }
                            break;
                        case 5:
                            var s = t.return;
                            try {
                                Hu(t);
                            } catch (u) {
                                ee(t, s, u);
                            }
                    }
                } catch (u) {
                    ee(t, t.return, u);
                }
                if (t === e) {
                    b = null;
                    break;
                }
                var l = t.sibling;
                if (l !== null) {
                    (l.return = t.return), (b = l);
                    break;
                }
                b = t.return;
            }
        }
        var V1 = Math.ceil,
            ss = Wt.ReactCurrentDispatcher,
            Aa = Wt.ReactCurrentOwner,
            qe = Wt.ReactCurrentBatchConfig,
            P = 0,
            fe = null,
            re = null,
            pe = 0,
            Ve = 0,
            cr = mn(0),
            se = 0,
            Oi = null,
            Gn = 0,
            Es = 0,
            _a = 0,
            ai = null,
            _e = null,
            Ma = 0,
            Sr = 1 / 0,
            Mt = null,
            ls = !1,
            Zu = null,
            un = null,
            Ro = !1,
            tn = null,
            us = 0,
            ci = 0,
            Yu = null,
            Fo = -1,
            Bo = 0;
        function ke() {
            return P & 6 ? ne() : Fo !== -1 ? Fo : (Fo = ne());
        }
        function an(e) {
            return e.mode & 1
                ? P & 2 && pe !== 0
                    ? pe & -pe
                    : S1.transition !== null
                    ? (Bo === 0 && (Bo = Ip()), Bo)
                    : ((e = B),
                      e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : kp(e.type))),
                      e)
                : 1;
        }
        function at(e, t, n, r) {
            if (50 < ci) throw ((ci = 0), (Yu = null), Error(S(185)));
            ki(e, n, r),
                (!(P & 2) || e !== fe) &&
                    (e === fe && (!(P & 2) && (Es |= n), se === 4 && qt(e, pe)),
                    De(e, r),
                    n === 1 && P === 0 && !(t.mode & 1) && ((Sr = ne() + 500), gs && hn()));
        }
        function De(e, t) {
            var n = e.callbackNode;
            Ty(e, t);
            var r = Ho(e, e === fe ? pe : 0);
            if (r === 0) n !== null && td(n), (e.callbackNode = null), (e.callbackPriority = 0);
            else if (((t = r & -r), e.callbackPriority !== t)) {
                if ((n != null && td(n), t === 1))
                    e.tag === 0 ? x1(Zd.bind(null, e)) : Xp(Zd.bind(null, e)),
                        y1(function () {
                            !(P & 6) && hn();
                        }),
                        (n = null);
                else {
                    switch (xp(r)) {
                        case 1:
                            n = oa;
                            break;
                        case 4:
                            n = wp;
                            break;
                        case 16:
                            n = zo;
                            break;
                        case 536870912:
                            n = Ep;
                            break;
                        default:
                            n = zo;
                    }
                    n = Hm(n, Fm.bind(null, e));
                }
                (e.callbackPriority = t), (e.callbackNode = n);
            }
        }
        function Fm(e, t) {
            if (((Fo = -1), (Bo = 0), P & 6)) throw Error(S(327));
            var n = e.callbackNode;
            if (gr() && e.callbackNode !== n) return null;
            var r = Ho(e, e === fe ? pe : 0);
            if (r === 0) return null;
            if (r & 30 || r & e.expiredLanes || t) t = as(e, r);
            else {
                t = r;
                var i = P;
                P |= 2;
                var o = Vm();
                (fe !== e || pe !== t) && ((Mt = null), (Sr = ne() + 500), Rn(e, t));
                do
                    try {
                        W1();
                        break;
                    } catch (l) {
                        Bm(e, l);
                    }
                while (!0);
                wa(),
                    (ss.current = o),
                    (P = i),
                    re !== null ? (t = 0) : ((fe = null), (pe = 0), (t = se));
            }
            if (t !== 0) {
                if ((t === 2 && ((i = xu(e)), i !== 0 && ((r = i), (t = $u(e, i)))), t === 1))
                    throw ((n = Oi), Rn(e, 0), qt(e, r), De(e, ne()), n);
                if (t === 6) qt(e, r);
                else {
                    if (
                        ((i = e.current.alternate),
                        !(r & 30) &&
                            !U1(i) &&
                            ((t = as(e, r)),
                            t === 2 && ((o = xu(e)), o !== 0 && ((r = o), (t = $u(e, o)))),
                            t === 1))
                    )
                        throw ((n = Oi), Rn(e, 0), qt(e, r), De(e, ne()), n);
                    switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
                        case 0:
                        case 1:
                            throw Error(S(345));
                        case 2:
                            bn(e, _e, Mt);
                            break;
                        case 3:
                            if (
                                (qt(e, r), (r & 130023424) === r && ((t = Ma + 500 - ne()), 10 < t))
                            ) {
                                if (Ho(e, 0) !== 0) break;
                                if (((i = e.suspendedLanes), (i & r) !== r)) {
                                    ke(), (e.pingedLanes |= e.suspendedLanes & i);
                                    break;
                                }
                                e.timeoutHandle = Ru(bn.bind(null, e, _e, Mt), t);
                                break;
                            }
                            bn(e, _e, Mt);
                            break;
                        case 4:
                            if ((qt(e, r), (r & 4194240) === r)) break;
                            for (t = e.eventTimes, i = -1; 0 < r; ) {
                                var s = 31 - ut(r);
                                (o = 1 << s), (s = t[s]), s > i && (i = s), (r &= ~o);
                            }
                            if (
                                ((r = i),
                                (r = ne() - r),
                                (r =
                                    (120 > r
                                        ? 120
                                        : 480 > r
                                        ? 480
                                        : 1080 > r
                                        ? 1080
                                        : 1920 > r
                                        ? 1920
                                        : 3e3 > r
                                        ? 3e3
                                        : 4320 > r
                                        ? 4320
                                        : 1960 * V1(r / 1960)) - r),
                                10 < r)
                            ) {
                                e.timeoutHandle = Ru(bn.bind(null, e, _e, Mt), r);
                                break;
                            }
                            bn(e, _e, Mt);
                            break;
                        case 5:
                            bn(e, _e, Mt);
                            break;
                        default:
                            throw Error(S(329));
                    }
                }
            }
            return De(e, ne()), e.callbackNode === n ? Fm.bind(null, e) : null;
        }
        function $u(e, t) {
            var n = ai;
            return (
                e.current.memoizedState.isDehydrated && (Rn(e, t).flags |= 256),
                (e = as(e, t)),
                e !== 2 && ((t = _e), (_e = n), t !== null && Ku(t)),
                e
            );
        }
        function Ku(e) {
            _e === null ? (_e = e) : _e.push.apply(_e, e);
        }
        function U1(e) {
            for (var t = e; ; ) {
                if (t.flags & 16384) {
                    var n = t.updateQueue;
                    if (n !== null && ((n = n.stores), n !== null))
                        for (var r = 0; r < n.length; r++) {
                            var i = n[r],
                                o = i.getSnapshot;
                            i = i.value;
                            try {
                                if (!ct(o(), i)) return !1;
                            } catch (s) {
                                return !1;
                            }
                        }
                }
                if (((n = t.child), t.subtreeFlags & 16384 && n !== null)) (n.return = t), (t = n);
                else {
                    if (t === e) break;
                    for (; t.sibling === null; ) {
                        if (t.return === null || t.return === e) return !0;
                        t = t.return;
                    }
                    (t.sibling.return = t.return), (t = t.sibling);
                }
            }
            return !0;
        }
        function qt(e, t) {
            for (
                t &= ~_a,
                    t &= ~Es,
                    e.suspendedLanes |= t,
                    e.pingedLanes &= ~t,
                    e = e.expirationTimes;
                0 < t;

            ) {
                var n = 31 - ut(t),
                    r = 1 << n;
                (e[n] = -1), (t &= ~r);
            }
        }
        function Zd(e) {
            if (P & 6) throw Error(S(327));
            gr();
            var t = Ho(e, 0);
            if (!(t & 1)) return De(e, ne()), null;
            var n = as(e, t);
            if (e.tag !== 0 && n === 2) {
                var r = xu(e);
                r !== 0 && ((t = r), (n = $u(e, r)));
            }
            if (n === 1) throw ((n = Oi), Rn(e, 0), qt(e, t), De(e, ne()), n);
            if (n === 6) throw Error(S(345));
            return (
                (e.finishedWork = e.current.alternate),
                (e.finishedLanes = t),
                bn(e, _e, Mt),
                De(e, ne()),
                null
            );
        }
        function Ga(e, t) {
            var n = P;
            P |= 1;
            try {
                return e(t);
            } finally {
                (P = n), P === 0 && ((Sr = ne() + 500), gs && hn());
            }
        }
        function Pn(e) {
            tn !== null && tn.tag === 0 && !(P & 6) && gr();
            var t = P;
            P |= 1;
            var n = qe.transition,
                r = B;
            try {
                if (((qe.transition = null), (B = 1), e)) return e();
            } finally {
                (B = r), (qe.transition = n), (P = t), !(P & 6) && hn();
            }
        }
        function Pa() {
            (Ve = cr.current), H(cr);
        }
        function Rn(e, t) {
            (e.finishedWork = null), (e.finishedLanes = 0);
            var n = e.timeoutHandle;
            if ((n !== -1 && ((e.timeoutHandle = -1), v1(n)), re !== null))
                for (n = re.return; n !== null; ) {
                    var r = n;
                    switch ((ha(r), r.tag)) {
                        case 1:
                            (r = r.type.childContextTypes), r != null && $o();
                            break;
                        case 3:
                            Ir(), H(Ge), H(Ce), Ta();
                            break;
                        case 5:
                            Ca(r);
                            break;
                        case 4:
                            Ir();
                            break;
                        case 13:
                            H($);
                            break;
                        case 19:
                            H($);
                            break;
                        case 10:
                            Ea(r.type._context);
                            break;
                        case 22:
                        case 23:
                            Pa();
                    }
                    n = n.return;
                }
            if (
                ((fe = e),
                (re = e = cn(e.current, null)),
                (pe = Ve = t),
                (se = 0),
                (Oi = null),
                (_a = Es = Gn = 0),
                (_e = ai = null),
                kn !== null)
            ) {
                for (t = 0; t < kn.length; t++)
                    if (((n = kn[t]), (r = n.interleaved), r !== null)) {
                        n.interleaved = null;
                        var i = r.next,
                            o = n.pending;
                        if (o !== null) {
                            var s = o.next;
                            (o.next = i), (r.next = s);
                        }
                        n.pending = r;
                    }
                kn = null;
            }
            return e;
        }
        function Bm(e, t) {
            do {
                var n = re;
                try {
                    if ((wa(), (Go.current = os), is)) {
                        for (var r = K.memoizedState; r !== null; ) {
                            var i = r.queue;
                            i !== null && (i.pending = null), (r = r.next);
                        }
                        is = !1;
                    }
                    if (
                        ((Mn = 0),
                        (ce = oe = K = null),
                        (li = !1),
                        (Ci = 0),
                        (Aa.current = null),
                        n === null || n.return === null)
                    ) {
                        (se = 1), (Oi = t), (re = null);
                        break;
                    }
                    e: {
                        var o = e,
                            s = n.return,
                            l = n,
                            u = t;
                        if (
                            ((t = pe),
                            (l.flags |= 32768),
                            u !== null && typeof u == "object" && typeof u.then == "function")
                        ) {
                            var a = u,
                                f = l,
                                d = f.tag;
                            if (!(f.mode & 1) && (d === 0 || d === 11 || d === 15)) {
                                var p = f.alternate;
                                p
                                    ? ((f.updateQueue = p.updateQueue),
                                      (f.memoizedState = p.memoizedState),
                                      (f.lanes = p.lanes))
                                    : ((f.updateQueue = null), (f.memoizedState = null));
                            }
                            var v = Gd(s);
                            if (v !== null) {
                                (v.flags &= -257),
                                    Pd(v, s, l, o, t),
                                    v.mode & 1 && Md(o, a, t),
                                    (t = v),
                                    (u = a);
                                var y = t.updateQueue;
                                if (y === null) {
                                    var g = new Set();
                                    g.add(u), (t.updateQueue = g);
                                } else y.add(u);
                                break e;
                            } else {
                                if (!(t & 1)) {
                                    Md(o, a, t), Da();
                                    break e;
                                }
                                u = Error(S(426));
                            }
                        } else if (X && l.mode & 1) {
                            var E = Gd(s);
                            if (E !== null) {
                                !(E.flags & 65536) && (E.flags |= 256),
                                    Pd(E, s, l, o, t),
                                    va(xr(u, l));
                                break e;
                            }
                        }
                        (o = u = xr(u, l)),
                            se !== 4 && (se = 2),
                            ai === null ? (ai = [o]) : ai.push(o),
                            (o = s);
                        do {
                            switch (o.tag) {
                                case 3:
                                    (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                                    var h = xm(o, u, t);
                                    kd(o, h);
                                    break e;
                                case 1:
                                    l = u;
                                    var c = o.type,
                                        m = o.stateNode;
                                    if (
                                        !(o.flags & 128) &&
                                        (typeof c.getDerivedStateFromError == "function" ||
                                            (m !== null &&
                                                typeof m.componentDidCatch == "function" &&
                                                (un === null || !un.has(m))))
                                    ) {
                                        (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                                        var w = Sm(o, l, t);
                                        kd(o, w);
                                        break e;
                                    }
                            }
                            o = o.return;
                        } while (o !== null);
                    }
                    jm(n);
                } catch (I) {
                    (t = I), re === n && n !== null && (re = n = n.return);
                    continue;
                }
                break;
            } while (!0);
        }
        function Vm() {
            var e = ss.current;
            return (ss.current = os), e === null ? os : e;
        }
        function Da() {
            (se === 0 || se === 3 || se === 2) && (se = 4),
                fe === null || (!(Gn & 268435455) && !(Es & 268435455)) || qt(fe, pe);
        }
        function as(e, t) {
            var n = P;
            P |= 2;
            var r = Vm();
            (fe !== e || pe !== t) && ((Mt = null), Rn(e, t));
            do
                try {
                    j1();
                    break;
                } catch (i) {
                    Bm(e, i);
                }
            while (!0);
            if ((wa(), (P = n), (ss.current = r), re !== null)) throw Error(S(261));
            return (fe = null), (pe = 0), se;
        }
        function j1() {
            for (; re !== null; ) Um(re);
        }
        function W1() {
            for (; re !== null && !gy(); ) Um(re);
        }
        function Um(e) {
            var t = zm(e.alternate, e, Ve);
            (e.memoizedProps = e.pendingProps), t === null ? jm(e) : (re = t), (Aa.current = null);
        }
        function jm(e) {
            var t = e;
            do {
                var n = t.alternate;
                if (((e = t.return), t.flags & 32768)) {
                    if (((n = P1(n, t)), n !== null)) {
                        (n.flags &= 32767), (re = n);
                        return;
                    }
                    if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
                    else {
                        (se = 6), (re = null);
                        return;
                    }
                } else if (((n = G1(n, t, Ve)), n !== null)) {
                    re = n;
                    return;
                }
                if (((t = t.sibling), t !== null)) {
                    re = t;
                    return;
                }
                re = t = e;
            } while (t !== null);
            se === 0 && (se = 5);
        }
        function bn(e, t, n) {
            var r = B,
                i = qe.transition;
            try {
                (qe.transition = null), (B = 1), z1(e, t, n, r);
            } finally {
                (qe.transition = i), (B = r);
            }
            return null;
        }
        function z1(e, t, n, r) {
            do gr();
            while (tn !== null);
            if (P & 6) throw Error(S(327));
            n = e.finishedWork;
            var i = e.finishedLanes;
            if (n === null) return null;
            if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
                throw Error(S(177));
            (e.callbackNode = null), (e.callbackPriority = 0);
            var o = n.lanes | n.childLanes;
            if (
                (by(e, o),
                e === fe && ((re = fe = null), (pe = 0)),
                (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
                    Ro ||
                    ((Ro = !0),
                    Hm(zo, function () {
                        return gr(), null;
                    })),
                (o = (n.flags & 15990) !== 0),
                n.subtreeFlags & 15990 || o)
            ) {
                (o = qe.transition), (qe.transition = null);
                var s = B;
                B = 1;
                var l = P;
                (P |= 4),
                    (Aa.current = null),
                    F1(e, n),
                    Pm(n, e),
                    d1(ku),
                    (Qo = !!Ou),
                    (ku = Ou = null),
                    (e.current = n),
                    B1(n, e, i),
                    vy(),
                    (P = l),
                    (B = s),
                    (qe.transition = o);
            } else e.current = n;
            if (
                (Ro && ((Ro = !1), (tn = e), (us = i)),
                (o = e.pendingLanes),
                o === 0 && (un = null),
                Ey(n.stateNode, r),
                De(e, ne()),
                t !== null)
            )
                for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
            if (ls) throw ((ls = !1), (e = Zu), (Zu = null), e);
            return (
                us & 1 && e.tag !== 0 && gr(),
                (o = e.pendingLanes),
                o & 1 ? (e === Yu ? ci++ : ((ci = 0), (Yu = e))) : (ci = 0),
                hn(),
                null
            );
        }
        function gr() {
            if (tn !== null) {
                var e = xp(us),
                    t = qe.transition,
                    n = B;
                try {
                    if (((qe.transition = null), (B = 16 > e ? 16 : e), tn === null)) var r = !1;
                    else {
                        if (((e = tn), (tn = null), (us = 0), P & 6)) throw Error(S(331));
                        var i = P;
                        for (P |= 4, b = e.current; b !== null; ) {
                            var o = b,
                                s = o.child;
                            if (b.flags & 16) {
                                var l = o.deletions;
                                if (l !== null) {
                                    for (var u = 0; u < l.length; u++) {
                                        var a = l[u];
                                        for (b = a; b !== null; ) {
                                            var f = b;
                                            switch (f.tag) {
                                                case 0:
                                                case 11:
                                                case 15:
                                                    ui(8, f, o);
                                            }
                                            var d = f.child;
                                            if (d !== null) (d.return = f), (b = d);
                                            else
                                                for (; b !== null; ) {
                                                    f = b;
                                                    var p = f.sibling,
                                                        v = f.return;
                                                    if ((_m(f), f === a)) {
                                                        b = null;
                                                        break;
                                                    }
                                                    if (p !== null) {
                                                        (p.return = v), (b = p);
                                                        break;
                                                    }
                                                    b = v;
                                                }
                                        }
                                    }
                                    var y = o.alternate;
                                    if (y !== null) {
                                        var g = y.child;
                                        if (g !== null) {
                                            y.child = null;
                                            do {
                                                var E = g.sibling;
                                                (g.sibling = null), (g = E);
                                            } while (g !== null);
                                        }
                                    }
                                    b = o;
                                }
                            }
                            if (o.subtreeFlags & 2064 && s !== null) (s.return = o), (b = s);
                            else
                                e: for (; b !== null; ) {
                                    if (((o = b), o.flags & 2048))
                                        switch (o.tag) {
                                            case 0:
                                            case 11:
                                            case 15:
                                                ui(9, o, o.return);
                                        }
                                    var h = o.sibling;
                                    if (h !== null) {
                                        (h.return = o.return), (b = h);
                                        break e;
                                    }
                                    b = o.return;
                                }
                        }
                        var c = e.current;
                        for (b = c; b !== null; ) {
                            s = b;
                            var m = s.child;
                            if (s.subtreeFlags & 2064 && m !== null) (m.return = s), (b = m);
                            else
                                e: for (s = c; b !== null; ) {
                                    if (((l = b), l.flags & 2048))
                                        try {
                                            switch (l.tag) {
                                                case 0:
                                                case 11:
                                                case 15:
                                                    ws(9, l);
                                            }
                                        } catch (I) {
                                            ee(l, l.return, I);
                                        }
                                    if (l === s) {
                                        b = null;
                                        break e;
                                    }
                                    var w = l.sibling;
                                    if (w !== null) {
                                        (w.return = l.return), (b = w);
                                        break e;
                                    }
                                    b = l.return;
                                }
                        }
                        if (((P = i), hn(), bt && typeof bt.onPostCommitFiberRoot == "function"))
                            try {
                                bt.onPostCommitFiberRoot(fs, e);
                            } catch (I) {}
                        r = !0;
                    }
                    return r;
                } finally {
                    (B = n), (qe.transition = t);
                }
            }
            return !1;
        }
        function Yd(e, t, n) {
            (t = xr(n, t)),
                (t = xm(e, t, 1)),
                (e = ln(e, t, 1)),
                (t = ke()),
                e !== null && (ki(e, 1, t), De(e, t));
        }
        function ee(e, t, n) {
            if (e.tag === 3) Yd(e, e, n);
            else
                for (; t !== null; ) {
                    if (t.tag === 3) {
                        Yd(t, e, n);
                        break;
                    } else if (t.tag === 1) {
                        var r = t.stateNode;
                        if (
                            typeof t.type.getDerivedStateFromError == "function" ||
                            (typeof r.componentDidCatch == "function" &&
                                (un === null || !un.has(r)))
                        ) {
                            (e = xr(n, e)),
                                (e = Sm(t, e, 1)),
                                (t = ln(t, e, 1)),
                                (e = ke()),
                                t !== null && (ki(t, 1, e), De(t, e));
                            break;
                        }
                    }
                    t = t.return;
                }
        }
        function H1(e, t, n) {
            var r = e.pingCache;
            r !== null && r.delete(t),
                (t = ke()),
                (e.pingedLanes |= e.suspendedLanes & n),
                fe === e &&
                    (pe & n) === n &&
                    (se === 4 || (se === 3 && (pe & 130023424) === pe && 500 > ne() - Ma)
                        ? Rn(e, 0)
                        : (_a |= n)),
                De(e, t);
        }
        function Wm(e, t) {
            t === 0 &&
                (e.mode & 1
                    ? ((t = go), (go <<= 1), !(go & 130023424) && (go = 4194304))
                    : (t = 1));
            var n = ke();
            (e = Ut(e, t)), e !== null && (ki(e, t, n), De(e, n));
        }
        function Q1(e) {
            var t = e.memoizedState,
                n = 0;
            t !== null && (n = t.retryLane), Wm(e, n);
        }
        function X1(e, t) {
            var n = 0;
            switch (e.tag) {
                case 13:
                    var r = e.stateNode,
                        i = e.memoizedState;
                    i !== null && (n = i.retryLane);
                    break;
                case 19:
                    r = e.stateNode;
                    break;
                default:
                    throw Error(S(314));
            }
            r !== null && r.delete(t), Wm(e, n);
        }
        var zm;
        zm = function (e, t, n) {
            if (e !== null)
                if (e.memoizedProps !== t.pendingProps || Ge.current) Me = !0;
                else {
                    if (!(e.lanes & n) && !(t.flags & 128)) return (Me = !1), M1(e, t, n);
                    Me = !!(e.flags & 131072);
                }
            else (Me = !1), X && t.flags & 1048576 && Zp(t, qo, t.index);
            switch (((t.lanes = 0), t.tag)) {
                case 2:
                    var r = t.type;
                    Do(e, t), (e = t.pendingProps);
                    var i = yr(t, Ce.current);
                    hr(t, n), (i = Oa(null, t, r, e, i, n));
                    var o = ka();
                    return (
                        (t.flags |= 1),
                        typeof i == "object" &&
                        i !== null &&
                        typeof i.render == "function" &&
                        i.$$typeof === void 0
                            ? ((t.tag = 1),
                              (t.memoizedState = null),
                              (t.updateQueue = null),
                              Pe(r) ? ((o = !0), Ko(t)) : (o = !1),
                              (t.memoizedState =
                                  i.state !== null && i.state !== void 0 ? i.state : null),
                              xa(t),
                              (i.updater = ys),
                              (t.stateNode = i),
                              (i._reactInternals = t),
                              Du(t, r, e, n),
                              (t = Vu(null, t, r, !0, o, n)))
                            : ((t.tag = 0), X && o && ma(t), Oe(null, t, i, n), (t = t.child)),
                        t
                    );
                case 16:
                    r = t.elementType;
                    e: {
                        switch (
                            (Do(e, t),
                            (e = t.pendingProps),
                            (i = r._init),
                            (r = i(r._payload)),
                            (t.type = r),
                            (i = t.tag = Y1(r)),
                            (e = ot(r, e)),
                            i)
                        ) {
                            case 0:
                                t = Bu(null, t, r, e, n);
                                break e;
                            case 1:
                                t = Bd(null, t, r, e, n);
                                break e;
                            case 11:
                                t = Dd(null, t, r, e, n);
                                break e;
                            case 14:
                                t = Fd(null, t, r, ot(r.type, e), n);
                                break e;
                        }
                        throw Error(S(306, r, ""));
                    }
                    return t;
                case 0:
                    return (
                        (r = t.type),
                        (i = t.pendingProps),
                        (i = t.elementType === r ? i : ot(r, i)),
                        Bu(e, t, r, i, n)
                    );
                case 1:
                    return (
                        (r = t.type),
                        (i = t.pendingProps),
                        (i = t.elementType === r ? i : ot(r, i)),
                        Bd(e, t, r, i, n)
                    );
                case 3:
                    e: {
                        if ((Om(t), e === null)) throw Error(S(387));
                        (r = t.pendingProps),
                            (o = t.memoizedState),
                            (i = o.element),
                            em(e, t),
                            ns(t, r, null, n);
                        var s = t.memoizedState;
                        if (((r = s.element), o.isDehydrated))
                            if (
                                ((o = {
                                    element: r,
                                    isDehydrated: !1,
                                    cache: s.cache,
                                    pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                                    transitions: s.transitions,
                                }),
                                (t.updateQueue.baseState = o),
                                (t.memoizedState = o),
                                t.flags & 256)
                            ) {
                                (i = xr(Error(S(423)), t)), (t = Vd(e, t, r, n, i));
                                break e;
                            } else if (r !== i) {
                                (i = xr(Error(S(424)), t)), (t = Vd(e, t, r, n, i));
                                break e;
                            } else
                                for (
                                    Ue = sn(t.stateNode.containerInfo.firstChild),
                                        je = t,
                                        X = !0,
                                        lt = null,
                                        n = Jp(t, null, r, n),
                                        t.child = n;
                                    n;

                                )
                                    (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
                        else {
                            if ((wr(), r === i)) {
                                t = jt(e, t, n);
                                break e;
                            }
                            Oe(e, t, r, n);
                        }
                        t = t.child;
                    }
                    return t;
                case 5:
                    return (
                        tm(t),
                        e === null && Mu(t),
                        (r = t.type),
                        (i = t.pendingProps),
                        (o = e !== null ? e.memoizedProps : null),
                        (s = i.children),
                        Lu(r, i) ? (s = null) : o !== null && Lu(r, o) && (t.flags |= 32),
                        bm(e, t),
                        Oe(e, t, s, n),
                        t.child
                    );
                case 6:
                    return e === null && Mu(t), null;
                case 13:
                    return km(e, t, n);
                case 4:
                    return (
                        Sa(t, t.stateNode.containerInfo),
                        (r = t.pendingProps),
                        e === null ? (t.child = Er(t, null, r, n)) : Oe(e, t, r, n),
                        t.child
                    );
                case 11:
                    return (
                        (r = t.type),
                        (i = t.pendingProps),
                        (i = t.elementType === r ? i : ot(r, i)),
                        Dd(e, t, r, i, n)
                    );
                case 7:
                    return Oe(e, t, t.pendingProps, n), t.child;
                case 8:
                    return Oe(e, t, t.pendingProps.children, n), t.child;
                case 12:
                    return Oe(e, t, t.pendingProps.children, n), t.child;
                case 10:
                    e: {
                        if (
                            ((r = t.type._context),
                            (i = t.pendingProps),
                            (o = t.memoizedProps),
                            (s = i.value),
                            W(es, r._currentValue),
                            (r._currentValue = s),
                            o !== null)
                        )
                            if (ct(o.value, s)) {
                                if (o.children === i.children && !Ge.current) {
                                    t = jt(e, t, n);
                                    break e;
                                }
                            } else
                                for (o = t.child, o !== null && (o.return = t); o !== null; ) {
                                    var l = o.dependencies;
                                    if (l !== null) {
                                        s = o.child;
                                        for (var u = l.firstContext; u !== null; ) {
                                            if (u.context === r) {
                                                if (o.tag === 1) {
                                                    (u = Ft(-1, n & -n)), (u.tag = 2);
                                                    var a = o.updateQueue;
                                                    if (a !== null) {
                                                        a = a.shared;
                                                        var f = a.pending;
                                                        f === null
                                                            ? (u.next = u)
                                                            : ((u.next = f.next), (f.next = u)),
                                                            (a.pending = u);
                                                    }
                                                }
                                                (o.lanes |= n),
                                                    (u = o.alternate),
                                                    u !== null && (u.lanes |= n),
                                                    Gu(o.return, n, t),
                                                    (l.lanes |= n);
                                                break;
                                            }
                                            u = u.next;
                                        }
                                    } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
                                    else if (o.tag === 18) {
                                        if (((s = o.return), s === null)) throw Error(S(341));
                                        (s.lanes |= n),
                                            (l = s.alternate),
                                            l !== null && (l.lanes |= n),
                                            Gu(s, n, t),
                                            (s = o.sibling);
                                    } else s = o.child;
                                    if (s !== null) s.return = o;
                                    else
                                        for (s = o; s !== null; ) {
                                            if (s === t) {
                                                s = null;
                                                break;
                                            }
                                            if (((o = s.sibling), o !== null)) {
                                                (o.return = s.return), (s = o);
                                                break;
                                            }
                                            s = s.return;
                                        }
                                    o = s;
                                }
                        Oe(e, t, i.children, n), (t = t.child);
                    }
                    return t;
                case 9:
                    return (
                        (i = t.type),
                        (r = t.pendingProps.children),
                        hr(t, n),
                        (i = et(i)),
                        (r = r(i)),
                        (t.flags |= 1),
                        Oe(e, t, r, n),
                        t.child
                    );
                case 14:
                    return (
                        (r = t.type),
                        (i = ot(r, t.pendingProps)),
                        (i = ot(r.type, i)),
                        Fd(e, t, r, i, n)
                    );
                case 15:
                    return Cm(e, t, t.type, t.pendingProps, n);
                case 17:
                    return (
                        (r = t.type),
                        (i = t.pendingProps),
                        (i = t.elementType === r ? i : ot(r, i)),
                        Do(e, t),
                        (t.tag = 1),
                        Pe(r) ? ((e = !0), Ko(t)) : (e = !1),
                        hr(t, n),
                        Im(t, r, i),
                        Du(t, r, i, n),
                        Vu(null, t, r, !0, e, n)
                    );
                case 19:
                    return Lm(e, t, n);
                case 22:
                    return Tm(e, t, n);
            }
            throw Error(S(156, t.tag));
        };
        function Hm(e, t) {
            return yp(e, t);
        }
        function Z1(e, t, n, r) {
            (this.tag = e),
                (this.key = n),
                (this.sibling =
                    this.child =
                    this.return =
                    this.stateNode =
                    this.type =
                    this.elementType =
                        null),
                (this.index = 0),
                (this.ref = null),
                (this.pendingProps = t),
                (this.dependencies =
                    this.memoizedState =
                    this.updateQueue =
                    this.memoizedProps =
                        null),
                (this.mode = r),
                (this.subtreeFlags = this.flags = 0),
                (this.deletions = null),
                (this.childLanes = this.lanes = 0),
                (this.alternate = null);
        }
        function Je(e, t, n, r) {
            return new Z1(e, t, n, r);
        }
        function Fa(e) {
            return (e = e.prototype), !(!e || !e.isReactComponent);
        }
        function Y1(e) {
            if (typeof e == "function") return Fa(e) ? 1 : 0;
            if (e != null) {
                if (((e = e.$$typeof), e === na)) return 11;
                if (e === ra) return 14;
            }
            return 2;
        }
        function cn(e, t) {
            var n = e.alternate;
            return (
                n === null
                    ? ((n = Je(e.tag, t, e.key, e.mode)),
                      (n.elementType = e.elementType),
                      (n.type = e.type),
                      (n.stateNode = e.stateNode),
                      (n.alternate = e),
                      (e.alternate = n))
                    : ((n.pendingProps = t),
                      (n.type = e.type),
                      (n.flags = 0),
                      (n.subtreeFlags = 0),
                      (n.deletions = null)),
                (n.flags = e.flags & 14680064),
                (n.childLanes = e.childLanes),
                (n.lanes = e.lanes),
                (n.child = e.child),
                (n.memoizedProps = e.memoizedProps),
                (n.memoizedState = e.memoizedState),
                (n.updateQueue = e.updateQueue),
                (t = e.dependencies),
                (n.dependencies =
                    t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
                (n.sibling = e.sibling),
                (n.index = e.index),
                (n.ref = e.ref),
                n
            );
        }
        function Vo(e, t, n, r, i, o) {
            var s = 2;
            if (((r = e), typeof e == "function")) Fa(e) && (s = 1);
            else if (typeof e == "string") s = 5;
            else
                e: switch (e) {
                    case er:
                        return Nn(n.children, i, o, t);
                    case ta:
                        (s = 8), (i |= 8);
                        break;
                    case lu:
                        return (e = Je(12, n, t, i | 2)), (e.elementType = lu), (e.lanes = o), e;
                    case uu:
                        return (e = Je(13, n, t, i)), (e.elementType = uu), (e.lanes = o), e;
                    case au:
                        return (e = Je(19, n, t, i)), (e.elementType = au), (e.lanes = o), e;
                    case tp:
                        return Is(n, i, o, t);
                    default:
                        if (typeof e == "object" && e !== null)
                            switch (e.$$typeof) {
                                case qd:
                                    s = 10;
                                    break e;
                                case ep:
                                    s = 9;
                                    break e;
                                case na:
                                    s = 11;
                                    break e;
                                case ra:
                                    s = 14;
                                    break e;
                                case $t:
                                    (s = 16), (r = null);
                                    break e;
                            }
                        throw Error(S(130, e == null ? e : typeof e, ""));
                }
            return (t = Je(s, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t;
        }
        function Nn(e, t, n, r) {
            return (e = Je(7, e, r, t)), (e.lanes = n), e;
        }
        function Is(e, t, n, r) {
            return (
                (e = Je(22, e, r, t)),
                (e.elementType = tp),
                (e.lanes = n),
                (e.stateNode = { isHidden: !1 }),
                e
            );
        }
        function iu(e, t, n) {
            return (e = Je(6, e, null, t)), (e.lanes = n), e;
        }
        function ou(e, t, n) {
            return (
                (t = Je(4, e.children !== null ? e.children : [], e.key, t)),
                (t.lanes = n),
                (t.stateNode = {
                    containerInfo: e.containerInfo,
                    pendingChildren: null,
                    implementation: e.implementation,
                }),
                t
            );
        }
        function $1(e, t, n, r, i) {
            (this.tag = t),
                (this.containerInfo = e),
                (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
                (this.timeoutHandle = -1),
                (this.callbackNode = this.pendingContext = this.context = null),
                (this.callbackPriority = 0),
                (this.eventTimes = jl(0)),
                (this.expirationTimes = jl(-1)),
                (this.entangledLanes =
                    this.finishedLanes =
                    this.mutableReadLanes =
                    this.expiredLanes =
                    this.pingedLanes =
                    this.suspendedLanes =
                    this.pendingLanes =
                        0),
                (this.entanglements = jl(0)),
                (this.identifierPrefix = r),
                (this.onRecoverableError = i),
                (this.mutableSourceEagerHydrationData = null);
        }
        function Ba(e, t, n, r, i, o, s, l, u) {
            return (
                (e = new $1(e, t, n, l, u)),
                t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
                (o = Je(3, null, null, t)),
                (e.current = o),
                (o.stateNode = e),
                (o.memoizedState = {
                    element: r,
                    isDehydrated: n,
                    cache: null,
                    transitions: null,
                    pendingSuspenseBoundaries: null,
                }),
                xa(o),
                e
            );
        }
        function K1(e, t, n) {
            var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
            return {
                $$typeof: qn,
                key: r == null ? null : "" + r,
                children: e,
                containerInfo: t,
                implementation: n,
            };
        }
        function Qm(e) {
            if (!e) return dn;
            e = e._reactInternals;
            e: {
                if (Fn(e) !== e || e.tag !== 1) throw Error(S(170));
                var t = e;
                do {
                    switch (t.tag) {
                        case 3:
                            t = t.stateNode.context;
                            break e;
                        case 1:
                            if (Pe(t.type)) {
                                t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                                break e;
                            }
                    }
                    t = t.return;
                } while (t !== null);
                throw Error(S(171));
            }
            if (e.tag === 1) {
                var n = e.type;
                if (Pe(n)) return Qp(e, n, t);
            }
            return t;
        }
        function Xm(e, t, n, r, i, o, s, l, u) {
            return (
                (e = Ba(n, r, !0, e, i, o, s, l, u)),
                (e.context = Qm(null)),
                (n = e.current),
                (r = ke()),
                (i = an(n)),
                (o = Ft(r, i)),
                (o.callback = t != null ? t : null),
                ln(n, o, i),
                (e.current.lanes = i),
                ki(e, i, r),
                De(e, r),
                e
            );
        }
        function xs(e, t, n, r) {
            var i = t.current,
                o = ke(),
                s = an(i);
            return (
                (n = Qm(n)),
                t.context === null ? (t.context = n) : (t.pendingContext = n),
                (t = Ft(o, s)),
                (t.payload = { element: e }),
                (r = r === void 0 ? null : r),
                r !== null && (t.callback = r),
                (e = ln(i, t, s)),
                e !== null && (at(e, i, s, o), Mo(e, i, s)),
                s
            );
        }
        function cs(e) {
            if (((e = e.current), !e.child)) return null;
            switch (e.child.tag) {
                case 5:
                    return e.child.stateNode;
                default:
                    return e.child.stateNode;
            }
        }
        function $d(e, t) {
            if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
                var n = e.retryLane;
                e.retryLane = n !== 0 && n < t ? n : t;
            }
        }
        function Va(e, t) {
            $d(e, t), (e = e.alternate) && $d(e, t);
        }
        function J1() {
            return null;
        }
        var Zm =
            typeof reportError == "function"
                ? reportError
                : function (e) {
                      console.error(e);
                  };
        function Ua(e) {
            this._internalRoot = e;
        }
        Ss.prototype.render = Ua.prototype.render = function (e) {
            var t = this._internalRoot;
            if (t === null) throw Error(S(409));
            xs(e, t, null, null);
        };
        Ss.prototype.unmount = Ua.prototype.unmount = function () {
            var e = this._internalRoot;
            if (e !== null) {
                this._internalRoot = null;
                var t = e.containerInfo;
                Pn(function () {
                    xs(null, e, null, null);
                }),
                    (t[Vt] = null);
            }
        };
        function Ss(e) {
            this._internalRoot = e;
        }
        Ss.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
                var t = Tp();
                e = { blockedOn: null, target: e, priority: t };
                for (var n = 0; n < Jt.length && t !== 0 && t < Jt[n].priority; n++);
                Jt.splice(n, 0, e), n === 0 && Op(e);
            }
        };
        function ja(e) {
            return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
        }
        function Cs(e) {
            return !(
                !e ||
                (e.nodeType !== 1 &&
                    e.nodeType !== 9 &&
                    e.nodeType !== 11 &&
                    (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
            );
        }
        function Kd() {}
        function q1(e, t, n, r, i) {
            if (i) {
                if (typeof r == "function") {
                    var o = r;
                    r = function () {
                        var a = cs(s);
                        o.call(a);
                    };
                }
                var s = Xm(t, r, e, 0, null, !1, !1, "", Kd);
                return (
                    (e._reactRootContainer = s),
                    (e[Vt] = s.current),
                    wi(e.nodeType === 8 ? e.parentNode : e),
                    Pn(),
                    s
                );
            }
            for (; (i = e.lastChild); ) e.removeChild(i);
            if (typeof r == "function") {
                var l = r;
                r = function () {
                    var a = cs(u);
                    l.call(a);
                };
            }
            var u = Ba(e, 0, !1, null, null, !1, !1, "", Kd);
            return (
                (e._reactRootContainer = u),
                (e[Vt] = u.current),
                wi(e.nodeType === 8 ? e.parentNode : e),
                Pn(function () {
                    xs(t, u, n, r);
                }),
                u
            );
        }
        function Ts(e, t, n, r, i) {
            var o = n._reactRootContainer;
            if (o) {
                var s = o;
                if (typeof i == "function") {
                    var l = i;
                    i = function () {
                        var u = cs(s);
                        l.call(u);
                    };
                }
                xs(t, s, e, i);
            } else s = q1(n, t, e, i, r);
            return cs(s);
        }
        Sp = function (e) {
            switch (e.tag) {
                case 3:
                    var t = e.stateNode;
                    if (t.current.memoizedState.isDehydrated) {
                        var n = ei(t.pendingLanes);
                        n !== 0 &&
                            (sa(t, n | 1), De(t, ne()), !(P & 6) && ((Sr = ne() + 500), hn()));
                    }
                    break;
                case 13:
                    Pn(function () {
                        var r = Ut(e, 1);
                        if (r !== null) {
                            var i = ke();
                            at(r, e, 1, i);
                        }
                    }),
                        Va(e, 1);
            }
        };
        la = function (e) {
            if (e.tag === 13) {
                var t = Ut(e, 134217728);
                if (t !== null) {
                    var n = ke();
                    at(t, e, 134217728, n);
                }
                Va(e, 134217728);
            }
        };
        Cp = function (e) {
            if (e.tag === 13) {
                var t = an(e),
                    n = Ut(e, t);
                if (n !== null) {
                    var r = ke();
                    at(n, e, t, r);
                }
                Va(e, t);
            }
        };
        Tp = function () {
            return B;
        };
        bp = function (e, t) {
            var n = B;
            try {
                return (B = e), t();
            } finally {
                B = n;
            }
        };
        wu = function (e, t, n) {
            switch (t) {
                case "input":
                    if ((du(e, n), (t = n.name), n.type === "radio" && t != null)) {
                        for (n = e; n.parentNode; ) n = n.parentNode;
                        for (
                            n = n.querySelectorAll(
                                "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                            ),
                                t = 0;
                            t < n.length;
                            t++
                        ) {
                            var r = n[t];
                            if (r !== e && r.form === e.form) {
                                var i = hs(r);
                                if (!i) throw Error(S(90));
                                rp(r), du(r, i);
                            }
                        }
                    }
                    break;
                case "textarea":
                    op(e, n);
                    break;
                case "select":
                    (t = n.value), t != null && fr(e, !!n.multiple, t, !1);
            }
        };
        dp = Ga;
        pp = Pn;
        var ew = { usingClientEntryPoint: !1, Events: [Ri, ir, hs, cp, fp, Ga] },
            $r = {
                findFiberByHostInstance: On,
                bundleType: 0,
                version: "18.3.1",
                rendererPackageName: "react-dom",
            },
            tw = {
                bundleType: $r.bundleType,
                version: $r.version,
                rendererPackageName: $r.rendererPackageName,
                rendererConfig: $r.rendererConfig,
                overrideHookState: null,
                overrideHookStateDeletePath: null,
                overrideHookStateRenamePath: null,
                overrideProps: null,
                overridePropsDeletePath: null,
                overridePropsRenamePath: null,
                setErrorHandler: null,
                setSuspenseHandler: null,
                scheduleUpdate: null,
                currentDispatcherRef: Wt.ReactCurrentDispatcher,
                findHostInstanceByFiber: function (e) {
                    return (e = gp(e)), e === null ? null : e.stateNode;
                },
                findFiberByHostInstance: $r.findFiberByHostInstance || J1,
                findHostInstancesForRefresh: null,
                scheduleRefresh: null,
                scheduleRoot: null,
                setRefreshHandler: null,
                getCurrentFiber: null,
                reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
            };
        if (
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined" &&
            ((Kr = __REACT_DEVTOOLS_GLOBAL_HOOK__), !Kr.isDisabled && Kr.supportsFiber)
        )
            try {
                (fs = Kr.inject(tw)), (bt = Kr);
            } catch (e) {}
        var Kr;
        He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ew;
        He.createPortal = function (e, t) {
            var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
            if (!ja(t)) throw Error(S(200));
            return K1(e, t, null, n);
        };
        He.createRoot = function (e, t) {
            if (!ja(e)) throw Error(S(299));
            var n = !1,
                r = "",
                i = Zm;
            return (
                t != null &&
                    (t.unstable_strictMode === !0 && (n = !0),
                    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
                    t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
                (t = Ba(e, 1, !1, null, null, n, !1, r, i)),
                (e[Vt] = t.current),
                wi(e.nodeType === 8 ? e.parentNode : e),
                new Ua(t)
            );
        };
        He.findDOMNode = function (e) {
            if (e == null) return null;
            if (e.nodeType === 1) return e;
            var t = e._reactInternals;
            if (t === void 0)
                throw typeof e.render == "function"
                    ? Error(S(188))
                    : ((e = Object.keys(e).join(",")), Error(S(268, e)));
            return (e = gp(t)), (e = e === null ? null : e.stateNode), e;
        };
        He.flushSync = function (e) {
            return Pn(e);
        };
        He.hydrate = function (e, t, n) {
            if (!Cs(t)) throw Error(S(200));
            return Ts(null, e, t, !0, n);
        };
        He.hydrateRoot = function (e, t, n) {
            if (!ja(e)) throw Error(S(405));
            var r = (n != null && n.hydratedSources) || null,
                i = !1,
                o = "",
                s = Zm;
            if (
                (n != null &&
                    (n.unstable_strictMode === !0 && (i = !0),
                    n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
                    n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
                (t = Xm(t, null, e, 1, n != null ? n : null, i, !1, o, s)),
                (e[Vt] = t.current),
                wi(e),
                r)
            )
                for (e = 0; e < r.length; e++)
                    (n = r[e]),
                        (i = n._getVersion),
                        (i = i(n._source)),
                        t.mutableSourceEagerHydrationData == null
                            ? (t.mutableSourceEagerHydrationData = [n, i])
                            : t.mutableSourceEagerHydrationData.push(n, i);
            return new Ss(t);
        };
        He.render = function (e, t, n) {
            if (!Cs(t)) throw Error(S(200));
            return Ts(null, e, t, !1, n);
        };
        He.unmountComponentAtNode = function (e) {
            if (!Cs(e)) throw Error(S(40));
            return e._reactRootContainer
                ? (Pn(function () {
                      Ts(null, null, e, !1, function () {
                          (e._reactRootContainer = null), (e[Vt] = null);
                      });
                  }),
                  !0)
                : !1;
        };
        He.unstable_batchedUpdates = Ga;
        He.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!Cs(n)) throw Error(S(200));
            if (e == null || e._reactInternals === void 0) throw Error(S(38));
            return Ts(e, t, n, !1, r);
        };
        He.version = "18.3.1-next-f1338f8080-20240426";
    });
    var Ai = Qt((vC, Km) => {
        "use strict";
        function $m() {
            if (
                !(
                    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ == "undefined" ||
                    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
                )
            )
                try {
                    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($m);
                } catch (e) {
                    console.error(e);
                }
        }
        $m(), (Km.exports = Ym());
    });
    var bs = Qt((Wa) => {
        "use strict";
        var Jm = Ai();
        (Wa.createRoot = Jm.createRoot), (Wa.hydrateRoot = Jm.hydrateRoot);
        var yC;
    });
    var af = Qt((Vk, uf) => {
        "use strict";
        var Fr = typeof Reflect == "object" ? Reflect : null,
            Vv =
                Fr && typeof Fr.apply == "function"
                    ? Fr.apply
                    : function (t, n, r) {
                          return Function.prototype.apply.call(t, n, r);
                      },
            hl;
        Fr && typeof Fr.ownKeys == "function"
            ? (hl = Fr.ownKeys)
            : Object.getOwnPropertySymbols
            ? (hl = function (t) {
                  return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t));
              })
            : (hl = function (t) {
                  return Object.getOwnPropertyNames(t);
              });
        function AS(e) {
            console && console.warn && console.warn(e);
        }
        var jv =
            Number.isNaN ||
            function (t) {
                return t !== t;
            };
        function U() {
            U.init.call(this);
        }
        uf.exports = U;
        uf.exports.once = PS;
        U.EventEmitter = U;
        U.prototype._events = void 0;
        U.prototype._eventsCount = 0;
        U.prototype._maxListeners = void 0;
        var Uv = 10;
        function gl(e) {
            if (typeof e != "function")
                throw new TypeError(
                    'The "listener" argument must be of type Function. Received type ' + typeof e
                );
        }
        Object.defineProperty(U, "defaultMaxListeners", {
            enumerable: !0,
            get: function () {
                return Uv;
            },
            set: function (e) {
                if (typeof e != "number" || e < 0 || jv(e))
                    throw new RangeError(
                        'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
                            e +
                            "."
                    );
                Uv = e;
            },
        });
        U.init = function () {
            (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) &&
                ((this._events = Object.create(null)), (this._eventsCount = 0)),
                (this._maxListeners = this._maxListeners || void 0);
        };
        U.prototype.setMaxListeners = function (t) {
            if (typeof t != "number" || t < 0 || jv(t))
                throw new RangeError(
                    'The value of "n" is out of range. It must be a non-negative number. Received ' +
                        t +
                        "."
                );
            return (this._maxListeners = t), this;
        };
        function Wv(e) {
            return e._maxListeners === void 0 ? U.defaultMaxListeners : e._maxListeners;
        }
        U.prototype.getMaxListeners = function () {
            return Wv(this);
        };
        U.prototype.emit = function (t) {
            for (var n = [], r = 1; r < arguments.length; r++) n.push(arguments[r]);
            var i = t === "error",
                o = this._events;
            if (o !== void 0) i = i && o.error === void 0;
            else if (!i) return !1;
            if (i) {
                var s;
                if ((n.length > 0 && (s = n[0]), s instanceof Error)) throw s;
                var l = new Error("Unhandled error." + (s ? " (" + s.message + ")" : ""));
                throw ((l.context = s), l);
            }
            var u = o[t];
            if (u === void 0) return !1;
            if (typeof u == "function") Vv(u, this, n);
            else for (var a = u.length, f = Zv(u, a), r = 0; r < a; ++r) Vv(f[r], this, n);
            return !0;
        };
        function zv(e, t, n, r) {
            var i, o, s;
            if (
                (gl(n),
                (o = e._events),
                o === void 0
                    ? ((o = e._events = Object.create(null)), (e._eventsCount = 0))
                    : (o.newListener !== void 0 &&
                          (e.emit("newListener", t, n.listener ? n.listener : n), (o = e._events)),
                      (s = o[t])),
                s === void 0)
            )
                (s = o[t] = n), ++e._eventsCount;
            else if (
                (typeof s == "function"
                    ? (s = o[t] = r ? [n, s] : [s, n])
                    : r
                    ? s.unshift(n)
                    : s.push(n),
                (i = Wv(e)),
                i > 0 && s.length > i && !s.warned)
            ) {
                s.warned = !0;
                var l = new Error(
                    "Possible EventEmitter memory leak detected. " +
                        s.length +
                        " " +
                        String(t) +
                        " listeners added. Use emitter.setMaxListeners() to increase limit"
                );
                (l.name = "MaxListenersExceededWarning"),
                    (l.emitter = e),
                    (l.type = t),
                    (l.count = s.length),
                    AS(l);
            }
            return e;
        }
        U.prototype.addListener = function (t, n) {
            return zv(this, t, n, !1);
        };
        U.prototype.on = U.prototype.addListener;
        U.prototype.prependListener = function (t, n) {
            return zv(this, t, n, !0);
        };
        function _S() {
            if (!this.fired)
                return (
                    this.target.removeListener(this.type, this.wrapFn),
                    (this.fired = !0),
                    arguments.length === 0
                        ? this.listener.call(this.target)
                        : this.listener.apply(this.target, arguments)
                );
        }
        function Hv(e, t, n) {
            var r = { fired: !1, wrapFn: void 0, target: e, type: t, listener: n },
                i = _S.bind(r);
            return (i.listener = n), (r.wrapFn = i), i;
        }
        U.prototype.once = function (t, n) {
            return gl(n), this.on(t, Hv(this, t, n)), this;
        };
        U.prototype.prependOnceListener = function (t, n) {
            return gl(n), this.prependListener(t, Hv(this, t, n)), this;
        };
        U.prototype.removeListener = function (t, n) {
            var r, i, o, s, l;
            if ((gl(n), (i = this._events), i === void 0)) return this;
            if (((r = i[t]), r === void 0)) return this;
            if (r === n || r.listener === n)
                --this._eventsCount === 0
                    ? (this._events = Object.create(null))
                    : (delete i[t],
                      i.removeListener && this.emit("removeListener", t, r.listener || n));
            else if (typeof r != "function") {
                for (o = -1, s = r.length - 1; s >= 0; s--)
                    if (r[s] === n || r[s].listener === n) {
                        (l = r[s].listener), (o = s);
                        break;
                    }
                if (o < 0) return this;
                o === 0 ? r.shift() : MS(r, o),
                    r.length === 1 && (i[t] = r[0]),
                    i.removeListener !== void 0 && this.emit("removeListener", t, l || n);
            }
            return this;
        };
        U.prototype.off = U.prototype.removeListener;
        U.prototype.removeAllListeners = function (t) {
            var n, r, i;
            if (((r = this._events), r === void 0)) return this;
            if (r.removeListener === void 0)
                return (
                    arguments.length === 0
                        ? ((this._events = Object.create(null)), (this._eventsCount = 0))
                        : r[t] !== void 0 &&
                          (--this._eventsCount === 0
                              ? (this._events = Object.create(null))
                              : delete r[t]),
                    this
                );
            if (arguments.length === 0) {
                var o = Object.keys(r),
                    s;
                for (i = 0; i < o.length; ++i)
                    (s = o[i]), s !== "removeListener" && this.removeAllListeners(s);
                return (
                    this.removeAllListeners("removeListener"),
                    (this._events = Object.create(null)),
                    (this._eventsCount = 0),
                    this
                );
            }
            if (((n = r[t]), typeof n == "function")) this.removeListener(t, n);
            else if (n !== void 0) for (i = n.length - 1; i >= 0; i--) this.removeListener(t, n[i]);
            return this;
        };
        function Qv(e, t, n) {
            var r = e._events;
            if (r === void 0) return [];
            var i = r[t];
            return i === void 0
                ? []
                : typeof i == "function"
                ? n
                    ? [i.listener || i]
                    : [i]
                : n
                ? GS(i)
                : Zv(i, i.length);
        }
        U.prototype.listeners = function (t) {
            return Qv(this, t, !0);
        };
        U.prototype.rawListeners = function (t) {
            return Qv(this, t, !1);
        };
        U.listenerCount = function (e, t) {
            return typeof e.listenerCount == "function" ? e.listenerCount(t) : Xv.call(e, t);
        };
        U.prototype.listenerCount = Xv;
        function Xv(e) {
            var t = this._events;
            if (t !== void 0) {
                var n = t[e];
                if (typeof n == "function") return 1;
                if (n !== void 0) return n.length;
            }
            return 0;
        }
        U.prototype.eventNames = function () {
            return this._eventsCount > 0 ? hl(this._events) : [];
        };
        function Zv(e, t) {
            for (var n = new Array(t), r = 0; r < t; ++r) n[r] = e[r];
            return n;
        }
        function MS(e, t) {
            for (; t + 1 < e.length; t++) e[t] = e[t + 1];
            e.pop();
        }
        function GS(e) {
            for (var t = new Array(e.length), n = 0; n < t.length; ++n)
                t[n] = e[n].listener || e[n];
            return t;
        }
        function PS(e, t) {
            return new Promise(function (n, r) {
                function i(s) {
                    e.removeListener(t, o), r(s);
                }
                function o() {
                    typeof e.removeListener == "function" && e.removeListener("error", i),
                        n([].slice.call(arguments));
                }
                Yv(e, t, o, { once: !0 }), t !== "error" && DS(e, i, { once: !0 });
            });
        }
        function DS(e, t, n) {
            typeof e.on == "function" && Yv(e, "error", t, n);
        }
        function Yv(e, t, n, r) {
            if (typeof e.on == "function") r.once ? e.once(t, n) : e.on(t, n);
            else if (typeof e.addEventListener == "function")
                e.addEventListener(t, function i(o) {
                    r.once && e.removeEventListener(t, i), n(o);
                });
            else
                throw new TypeError(
                    'The "emitter" argument must be of type EventEmitter. Received type ' + typeof e
                );
        }
    });
    function ie(e) {
        return typeof e == "string";
    }
    function Ze(e) {
        return e === void 0;
    }
    function El(e) {
        return typeof e == "function";
    }
    function Il(e) {
        return typeof e == "number";
    }
    function P0(e) {
        return "value" in e && "type" in e && e.type === 1;
    }
    function D0(e) {
        return typeof e == "object" && "url" in e;
    }
    var wf = (e) =>
            Il(e) ? e * -1 + "px" : e ? (e.charAt(0) === "-" ? e.substr(1) : "-" + e) : "0px",
        F0 = (e) => {
            if (!e) return;
            typeof e == "number" && (e = { steps: e });
            let { offsetTop: t, offsetBottom: n, steps: r, threshold: i } = e,
                o = {};
            if (((t || n) && ((o.rootMargin = `${wf(t)} 0px ${wf(n)} 0px`), (o.root = null)), r)) {
                o.threshold = [];
                for (let s = 0; s <= r; s++) o.threshold.push(s / r);
            } else i && (o.threshold = i);
        },
        xl = class {
            constructor(t, n) {
                this.element = t;
                this.options = n;
                this.listeners = [];
            }
            update() {
                this.listeners.length
                    ? this.observer ||
                      ((this.observer = new IntersectionObserver(([t]) => {
                          this.listeners.forEach((n) => n(t)), (this.prevEvent = t);
                      }, this.options)),
                      this.observer.observe(this.element))
                    : this.observer && (this.observer.disconnect(), delete this.observer);
            }
            listen(t) {
                return (
                    this.listeners.push(t),
                    this.update(),
                    this.prevEvent && t(this.prevEvent),
                    () => {
                        let n = this.listeners.indexOf(t);
                        n > -1 && (this.listeners.splice(n, 1), this.update());
                    }
                );
            }
        },
        Sl = class {
            constructor() {
                this.observers = [];
                this.observed = [];
            }
            add(t, n, r) {
                let i = F0(r);
                return this.getOrCreateObserver(t, i).listen(n);
            }
            getOrCreateObserver(t, n) {
                let r = this.observers.find((o) => o.element === t);
                if (r) return r;
                let i = new xl(t, n);
                return this.observers.push(i), i;
            }
        },
        Ef = new Sl();
    var qm = R(bs()),
        Bn = typeof window != "undefined",
        le = Bn ? self : {},
        F = Bn ? document : {},
        eh = F.documentElement,
        ft = F.body,
        Os = eh || F.scrollingElement || ft;
    function nw(e, ...t) {
        for (let n of t) n && e.classList.add(n);
    }
    function rw(e, ...t) {
        for (let n of t) n && e.classList.remove(n);
    }
    function _i(e, t) {
        return t ? t.querySelector("#" + e) : F.getElementById(e);
    }
    function iw(e, t) {
        typeof t == "string" && (t = [t]);
        for (let n = 0; n < t.length; n++) if (e.hasAttribute(t[n])) return n;
        return -1;
    }
    function br(e) {
        e.parentNode && e.parentNode.removeChild(e);
    }
    function ow(e) {
        qm.createRoot(e).unmount(), br(e);
    }
    function ks(e, t, n = 15) {
        let r = t;
        for (; r && n--; ) {
            if ((r.nodeName || r.tagName) === e) return r;
            r = r.parentNode;
        }
        return null;
    }
    function Mi() {
        var e;
        return F.compatMode === "BackCompat" && F.body
            ? F.body.clientHeight
            : (e = F.documentElement) == null
            ? void 0
            : e.clientHeight;
    }
    function Gi() {
        var e;
        return F.compatMode === "BackCompat" && F.body
            ? F.body.clientWidth
            : (e = F.documentElement) == null
            ? void 0
            : e.clientWidth;
    }
    function Vn() {
        return (F.documentElement || F.scrollingElement || ft).scrollHeight;
    }
    function Un() {
        let e = F.documentElement || F.scrollingElement || ft;
        return le.pageYOffset || (e == null ? void 0 : e.scrollTop);
    }
    var sw = {};
    function lw(e, t, n, r = ft) {
        let i;
        return (
            r &&
                ((i = sw[`${e}:${t}`] =
                    (o) => {
                        let s = ks(e.toUpperCase(), o.target || o.srcElement);
                        s && n(o, s);
                    }),
                r.addEventListener(t, i)),
            () => {
                i && r.removeEventListener(t, i);
            }
        );
    }
    function uw(e) {
        let t = e.toLowerCase();
        return ["onClick", "onMouseEnter", "onMouseLeave", "onDoubleClick"]
            .map((r) => r.toLowerCase())
            .includes(t);
    }
    var sh = {
            update: null,
            begin: null,
            loopBegin: null,
            changeBegin: null,
            change: null,
            changeComplete: null,
            loopComplete: null,
            complete: null,
            loop: 1,
            direction: "normal",
            autoplay: !0,
            timelineOffset: 0,
        },
        Xa = { duration: 1e3, delay: 0, endDelay: 0, easing: "easeOutElastic(1, .5)", round: 0 },
        aw = [
            "translateX",
            "translateY",
            "translateZ",
            "rotate",
            "rotateX",
            "rotateY",
            "rotateZ",
            "scale",
            "scaleX",
            "scaleY",
            "scaleZ",
            "skew",
            "skewX",
            "skewY",
            "perspective",
            "matrix",
            "matrix3d",
        ],
        Ls = { CSS: {}, springs: {} };
    function kt(e, t, n) {
        return Math.min(Math.max(e, t), n);
    }
    function Pi(e, t) {
        return e.indexOf(t) > -1;
    }
    function za(e, t) {
        return e.apply(null, t);
    }
    var L = {
        arr: function (e) {
            return Array.isArray(e);
        },
        obj: function (e) {
            return Pi(Object.prototype.toString.call(e), "Object");
        },
        pth: function (e) {
            return L.obj(e) && e.hasOwnProperty("totalLength");
        },
        svg: function (e) {
            return e instanceof SVGElement;
        },
        inp: function (e) {
            return e instanceof HTMLInputElement;
        },
        dom: function (e) {
            return e.nodeType || L.svg(e);
        },
        str: function (e) {
            return typeof e == "string";
        },
        fnc: function (e) {
            return typeof e == "function";
        },
        und: function (e) {
            return typeof e == "undefined";
        },
        nil: function (e) {
            return L.und(e) || e === null;
        },
        hex: function (e) {
            return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e);
        },
        rgb: function (e) {
            return /^rgb/.test(e);
        },
        hsl: function (e) {
            return /^hsl/.test(e);
        },
        col: function (e) {
            return L.hex(e) || L.rgb(e) || L.hsl(e);
        },
        key: function (e) {
            return (
                !sh.hasOwnProperty(e) &&
                !Xa.hasOwnProperty(e) &&
                e !== "targets" &&
                e !== "keyframes"
            );
        },
    };
    function lh(e) {
        var t = /\(([^)]+)\)/.exec(e);
        return t
            ? t[1].split(",").map(function (n) {
                  return parseFloat(n);
              })
            : [];
    }
    function uh(e, t) {
        var n = lh(e),
            r = kt(L.und(n[0]) ? 1 : n[0], 0.1, 100),
            i = kt(L.und(n[1]) ? 100 : n[1], 0.1, 100),
            o = kt(L.und(n[2]) ? 10 : n[2], 0.1, 100),
            s = kt(L.und(n[3]) ? 0 : n[3], 0.1, 100),
            l = Math.sqrt(i / r),
            u = o / (2 * Math.sqrt(i * r)),
            a = u < 1 ? l * Math.sqrt(1 - u * u) : 0,
            f = 1,
            d = u < 1 ? (u * l + -s) / a : -s + l;
        function p(y) {
            var g = t ? (t * y) / 1e3 : y;
            return (
                u < 1
                    ? (g = Math.exp(-g * u * l) * (f * Math.cos(a * g) + d * Math.sin(a * g)))
                    : (g = (f + d * g) * Math.exp(-g * l)),
                y === 0 || y === 1 ? y : 1 - g
            );
        }
        function v() {
            var y = Ls.springs[e];
            if (y) return y;
            for (var g = 1 / 6, E = 0, h = 0; ; )
                if (((E += g), p(E) === 1)) {
                    if ((h++, h >= 16)) break;
                } else h = 0;
            var c = E * g * 1e3;
            return (Ls.springs[e] = c), c;
        }
        return t ? p : v;
    }
    function cw(e) {
        return (
            e === void 0 && (e = 10),
            function (t) {
                return Math.ceil(kt(t, 1e-6, 1) * e) * (1 / e);
            }
        );
    }
    var fw = (function () {
            var e = 11,
                t = 1 / (e - 1);
            function n(f, d) {
                return 1 - 3 * d + 3 * f;
            }
            function r(f, d) {
                return 3 * d - 6 * f;
            }
            function i(f) {
                return 3 * f;
            }
            function o(f, d, p) {
                return ((n(d, p) * f + r(d, p)) * f + i(d)) * f;
            }
            function s(f, d, p) {
                return 3 * n(d, p) * f * f + 2 * r(d, p) * f + i(d);
            }
            function l(f, d, p, v, y) {
                var g,
                    E,
                    h = 0;
                do (E = d + (p - d) / 2), (g = o(E, v, y) - f), g > 0 ? (p = E) : (d = E);
                while (Math.abs(g) > 1e-7 && ++h < 10);
                return E;
            }
            function u(f, d, p, v) {
                for (var y = 0; y < 4; ++y) {
                    var g = s(d, p, v);
                    if (g === 0) return d;
                    var E = o(d, p, v) - f;
                    d -= E / g;
                }
                return d;
            }
            function a(f, d, p, v) {
                if (!(0 <= f && f <= 1 && 0 <= p && p <= 1)) return;
                var y = new Float32Array(e);
                if (f !== d || p !== v) for (var g = 0; g < e; ++g) y[g] = o(g * t, f, p);
                function E(h) {
                    for (var c = 0, m = 1, w = e - 1; m !== w && y[m] <= h; ++m) c += t;
                    --m;
                    var I = (h - y[m]) / (y[m + 1] - y[m]),
                        T = c + I * t,
                        x = s(T, f, p);
                    return x >= 0.001 ? u(h, T, f, p) : x === 0 ? T : l(h, c, c + t, f, p);
                }
                return function (h) {
                    return (f === d && p === v) || h === 0 || h === 1 ? h : o(E(h), d, v);
                };
            }
            return a;
        })(),
        ah = (function () {
            var e = {
                    linear: function () {
                        return function (r) {
                            return r;
                        };
                    },
                },
                t = {
                    Sine: function () {
                        return function (r) {
                            return 1 - Math.cos((r * Math.PI) / 2);
                        };
                    },
                    Expo: function () {
                        return function (r) {
                            return r ? Math.pow(2, 10 * r - 10) : 0;
                        };
                    },
                    Circ: function () {
                        return function (r) {
                            return 1 - Math.sqrt(1 - r * r);
                        };
                    },
                    Back: function () {
                        return function (r) {
                            return r * r * (3 * r - 2);
                        };
                    },
                    Bounce: function () {
                        return function (r) {
                            for (var i, o = 4; r < ((i = Math.pow(2, --o)) - 1) / 11; );
                            return (
                                1 / Math.pow(4, 3 - o) - 7.5625 * Math.pow((i * 3 - 2) / 22 - r, 2)
                            );
                        };
                    },
                    Elastic: function (r, i) {
                        r === void 0 && (r = 1), i === void 0 && (i = 0.5);
                        var o = kt(r, 1, 10),
                            s = kt(i, 0.1, 2);
                        return function (l) {
                            return l === 0 || l === 1
                                ? l
                                : -o *
                                      Math.pow(2, 10 * (l - 1)) *
                                      Math.sin(
                                          ((l - 1 - (s / (Math.PI * 2)) * Math.asin(1 / o)) *
                                              (Math.PI * 2)) /
                                              s
                                      );
                        };
                    },
                },
                n = ["Quad", "Cubic", "Quart", "Quint"];
            return (
                n.forEach(function (r, i) {
                    t[r] = function () {
                        return function (o) {
                            return Math.pow(o, i + 2);
                        };
                    };
                }),
                Object.keys(t).forEach(function (r) {
                    var i = t[r];
                    (e["easeIn" + r] = i),
                        (e["easeOut" + r] = function (o, s) {
                            return function (l) {
                                return 1 - i(o, s)(1 - l);
                            };
                        }),
                        (e["easeInOut" + r] = function (o, s) {
                            return function (l) {
                                return l < 0.5 ? i(o, s)(l * 2) / 2 : 1 - i(o, s)(l * -2 + 2) / 2;
                            };
                        }),
                        (e["easeOutIn" + r] = function (o, s) {
                            return function (l) {
                                return l < 0.5
                                    ? (1 - i(o, s)(1 - l * 2)) / 2
                                    : (i(o, s)(l * 2 - 1) + 1) / 2;
                            };
                        });
                }),
                e
            );
        })();
    function Za(e, t) {
        if (L.fnc(e)) return e;
        var n = e.split("(")[0],
            r = ah[n],
            i = lh(e);
        switch (n) {
            case "spring":
                return uh(e, t);
            case "cubicBezier":
                return za(fw, i);
            case "steps":
                return za(cw, i);
            default:
                return za(r, i);
        }
    }
    function ch(e) {
        try {
            var t = document.querySelectorAll(e);
            return t;
        } catch (n) {
            return;
        }
    }
    function Rs(e, t) {
        for (
            var n = e.length, r = arguments.length >= 2 ? arguments[1] : void 0, i = [], o = 0;
            o < n;
            o++
        )
            if (o in e) {
                var s = e[o];
                t.call(r, s, o, e) && i.push(s);
            }
        return i;
    }
    function Ns(e) {
        return e.reduce(function (t, n) {
            return t.concat(L.arr(n) ? Ns(n) : n);
        }, []);
    }
    function th(e) {
        return L.arr(e)
            ? e
            : (L.str(e) && (e = ch(e) || e),
              e instanceof NodeList || e instanceof HTMLCollection ? [].slice.call(e) : [e]);
    }
    function Ya(e, t) {
        return e.some(function (n) {
            return n === t;
        });
    }
    function $a(e) {
        var t = {};
        for (var n in e) t[n] = e[n];
        return t;
    }
    function Ha(e, t) {
        var n = $a(e);
        for (var r in e) n[r] = t.hasOwnProperty(r) ? t[r] : e[r];
        return n;
    }
    function As(e, t) {
        var n = $a(e);
        for (var r in t) n[r] = L.und(e[r]) ? t[r] : e[r];
        return n;
    }
    function dw(e) {
        var t = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(e);
        return t ? "rgba(" + t[1] + ",1)" : e;
    }
    function pw(e) {
        var t = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
            n = e.replace(t, function (l, u, a, f) {
                return u + u + a + a + f + f;
            }),
            r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n),
            i = parseInt(r[1], 16),
            o = parseInt(r[2], 16),
            s = parseInt(r[3], 16);
        return "rgba(" + i + "," + o + "," + s + ",1)";
    }
    function mw(e) {
        var t =
                /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e) ||
                /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e),
            n = parseInt(t[1], 10) / 360,
            r = parseInt(t[2], 10) / 100,
            i = parseInt(t[3], 10) / 100,
            o = t[4] || 1;
        function s(p, v, y) {
            return (
                y < 0 && (y += 1),
                y > 1 && (y -= 1),
                y < 1 / 6
                    ? p + (v - p) * 6 * y
                    : y < 1 / 2
                    ? v
                    : y < 2 / 3
                    ? p + (v - p) * (2 / 3 - y) * 6
                    : p
            );
        }
        var l, u, a;
        if (r == 0) l = u = a = i;
        else {
            var f = i < 0.5 ? i * (1 + r) : i + r - i * r,
                d = 2 * i - f;
            (l = s(d, f, n + 1 / 3)), (u = s(d, f, n)), (a = s(d, f, n - 1 / 3));
        }
        return "rgba(" + l * 255 + "," + u * 255 + "," + a * 255 + "," + o + ")";
    }
    function hw(e) {
        if (L.rgb(e)) return dw(e);
        if (L.hex(e)) return pw(e);
        if (L.hsl(e)) return mw(e);
    }
    function zt(e) {
        var t =
            /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(
                e
            );
        if (t) return t[1];
    }
    function gw(e) {
        if (Pi(e, "translate") || e === "perspective") return "px";
        if (Pi(e, "rotate") || Pi(e, "skew")) return "deg";
    }
    function Qa(e, t) {
        return L.fnc(e) ? e(t.target, t.id, t.total) : e;
    }
    function Lt(e, t) {
        return e.getAttribute(t);
    }
    function Ka(e, t, n) {
        var r = zt(t);
        if (Ya([n, "deg", "rad", "turn"], r)) return t;
        var i = Ls.CSS[t + n];
        if (!L.und(i)) return i;
        var o = 100,
            s = document.createElement(e.tagName),
            l = e.parentNode && e.parentNode !== document ? e.parentNode : document.body;
        l.appendChild(s), (s.style.position = "absolute"), (s.style.width = o + n);
        var u = o / s.offsetWidth;
        l.removeChild(s);
        var a = u * parseFloat(t);
        return (Ls.CSS[t + n] = a), a;
    }
    function fh(e, t, n) {
        if (t in e.style) {
            var r = t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
                i = e.style[t] || getComputedStyle(e).getPropertyValue(r) || "0";
            return n ? Ka(e, i, n) : i;
        }
    }
    function Ja(e, t) {
        if (L.dom(e) && !L.inp(e) && (!L.nil(Lt(e, t)) || (L.svg(e) && e[t]))) return "attribute";
        if (L.dom(e) && Ya(aw, t)) return "transform";
        if (L.dom(e) && t !== "transform" && fh(e, t)) return "css";
        if (e[t] != null) return "object";
    }
    function dh(e) {
        if (L.dom(e)) {
            for (
                var t = e.style.transform || "", n = /(\w+)\(([^)]*)\)/g, r = new Map(), i;
                (i = n.exec(t));

            )
                r.set(i[1], i[2]);
            return r;
        }
    }
    function vw(e, t, n, r) {
        var i = Pi(t, "scale") ? 1 : 0 + gw(t),
            o = dh(e).get(t) || i;
        return n && (n.transforms.list.set(t, o), (n.transforms.last = t)), r ? Ka(e, o, r) : o;
    }
    function qa(e, t, n, r) {
        switch (Ja(e, t)) {
            case "transform":
                return vw(e, t, r, n);
            case "css":
                return fh(e, t, n);
            case "attribute":
                return Lt(e, t);
            default:
                return e[t] || 0;
        }
    }
    function ec(e, t) {
        var n = /^(\*=|\+=|-=)/.exec(e);
        if (!n) return e;
        var r = zt(e) || 0,
            i = parseFloat(t),
            o = parseFloat(e.replace(n[0], ""));
        switch (n[0][0]) {
            case "+":
                return i + o + r;
            case "-":
                return i - o + r;
            case "*":
                return i * o + r;
        }
    }
    function ph(e, t) {
        if (L.col(e)) return hw(e);
        if (/\s/g.test(e)) return e;
        var n = zt(e),
            r = n ? e.substr(0, e.length - n.length) : e;
        return t ? r + t : r;
    }
    function tc(e, t) {
        return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
    }
    function yw(e) {
        return Math.PI * 2 * Lt(e, "r");
    }
    function ww(e) {
        return Lt(e, "width") * 2 + Lt(e, "height") * 2;
    }
    function Ew(e) {
        return tc({ x: Lt(e, "x1"), y: Lt(e, "y1") }, { x: Lt(e, "x2"), y: Lt(e, "y2") });
    }
    function mh(e) {
        for (var t = e.points, n = 0, r, i = 0; i < t.numberOfItems; i++) {
            var o = t.getItem(i);
            i > 0 && (n += tc(r, o)), (r = o);
        }
        return n;
    }
    function Iw(e) {
        var t = e.points;
        return mh(e) + tc(t.getItem(t.numberOfItems - 1), t.getItem(0));
    }
    function hh(e) {
        if (e.getTotalLength) return e.getTotalLength();
        switch (e.tagName.toLowerCase()) {
            case "circle":
                return yw(e);
            case "rect":
                return ww(e);
            case "line":
                return Ew(e);
            case "polyline":
                return mh(e);
            case "polygon":
                return Iw(e);
        }
    }
    function xw(e) {
        var t = hh(e);
        return e.setAttribute("stroke-dasharray", t), t;
    }
    function Sw(e) {
        for (var t = e.parentNode; L.svg(t) && L.svg(t.parentNode); ) t = t.parentNode;
        return t;
    }
    function gh(e, t) {
        var n = t || {},
            r = n.el || Sw(e),
            i = r.getBoundingClientRect(),
            o = Lt(r, "viewBox"),
            s = i.width,
            l = i.height,
            u = n.viewBox || (o ? o.split(" ") : [0, 0, s, l]);
        return { el: r, viewBox: u, x: u[0] / 1, y: u[1] / 1, w: s, h: l, vW: u[2], vH: u[3] };
    }
    function Cw(e, t) {
        var n = L.str(e) ? ch(e)[0] : e,
            r = t || 100;
        return function (i) {
            return { property: i, el: n, svg: gh(n), totalLength: hh(n) * (r / 100) };
        };
    }
    function Tw(e, t, n) {
        function r(f) {
            f === void 0 && (f = 0);
            var d = t + f >= 1 ? t + f : 0;
            return e.el.getPointAtLength(d);
        }
        var i = gh(e.el, e.svg),
            o = r(),
            s = r(-1),
            l = r(1),
            u = n ? 1 : i.w / i.vW,
            a = n ? 1 : i.h / i.vH;
        switch (e.property) {
            case "x":
                return (o.x - i.x) * u;
            case "y":
                return (o.y - i.y) * a;
            case "angle":
                return (Math.atan2(l.y - s.y, l.x - s.x) * 180) / Math.PI;
        }
    }
    function nh(e, t) {
        var n = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,
            r = ph(L.pth(e) ? e.totalLength : e, t) + "";
        return {
            original: r,
            numbers: r.match(n) ? r.match(n).map(Number) : [0],
            strings: L.str(e) || t ? r.split(n) : [],
        };
    }
    function nc(e) {
        var t = e ? Ns(L.arr(e) ? e.map(th) : th(e)) : [];
        return Rs(t, function (n, r, i) {
            return i.indexOf(n) === r;
        });
    }
    function vh(e) {
        var t = nc(e);
        return t.map(function (n, r) {
            return { target: n, id: r, total: t.length, transforms: { list: dh(n) } };
        });
    }
    function bw(e, t) {
        var n = $a(t);
        if ((/^spring/.test(n.easing) && (n.duration = uh(n.easing)), L.arr(e))) {
            var r = e.length,
                i = r === 2 && !L.obj(e[0]);
            i ? (e = { value: e }) : L.fnc(t.duration) || (n.duration = t.duration / r);
        }
        var o = L.arr(e) ? e : [e];
        return o
            .map(function (s, l) {
                var u = L.obj(s) && !L.pth(s) ? s : { value: s };
                return (
                    L.und(u.delay) && (u.delay = l ? 0 : t.delay),
                    L.und(u.endDelay) && (u.endDelay = l === o.length - 1 ? t.endDelay : 0),
                    u
                );
            })
            .map(function (s) {
                return As(s, n);
            });
    }
    function Ow(e) {
        for (
            var t = Rs(
                    Ns(
                        e.map(function (o) {
                            return Object.keys(o);
                        })
                    ),
                    function (o) {
                        return L.key(o);
                    }
                ).reduce(function (o, s) {
                    return o.indexOf(s) < 0 && o.push(s), o;
                }, []),
                n = {},
                r = function (o) {
                    var s = t[o];
                    n[s] = e.map(function (l) {
                        var u = {};
                        for (var a in l) L.key(a) ? a == s && (u.value = l[a]) : (u[a] = l[a]);
                        return u;
                    });
                },
                i = 0;
            i < t.length;
            i++
        )
            r(i);
        return n;
    }
    function kw(e, t) {
        var n = [],
            r = t.keyframes;
        r && (t = As(Ow(r), t));
        for (var i in t) L.key(i) && n.push({ name: i, tweens: bw(t[i], e) });
        return n;
    }
    function Lw(e, t) {
        var n = {};
        for (var r in e) {
            var i = Qa(e[r], t);
            L.arr(i) &&
                ((i = i.map(function (o) {
                    return Qa(o, t);
                })),
                i.length === 1 && (i = i[0])),
                (n[r] = i);
        }
        return (n.duration = parseFloat(n.duration)), (n.delay = parseFloat(n.delay)), n;
    }
    function Rw(e, t) {
        var n;
        return e.tweens.map(function (r) {
            var i = Lw(r, t),
                o = i.value,
                s = L.arr(o) ? o[1] : o,
                l = zt(s),
                u = qa(t.target, e.name, l, t),
                a = n ? n.to.original : u,
                f = L.arr(o) ? o[0] : a,
                d = zt(f) || zt(u),
                p = l || d;
            return (
                L.und(s) && (s = a),
                (i.from = nh(f, p)),
                (i.to = nh(ec(s, f), p)),
                (i.start = n ? n.end : 0),
                (i.end = i.start + i.delay + i.duration + i.endDelay),
                (i.easing = Za(i.easing, i.duration)),
                (i.isPath = L.pth(o)),
                (i.isPathTargetInsideSVG = i.isPath && L.svg(t.target)),
                (i.isColor = L.col(i.from.original)),
                i.isColor && (i.round = 1),
                (n = i),
                i
            );
        });
    }
    var yh = {
        css: function (e, t, n) {
            return (e.style[t] = n);
        },
        attribute: function (e, t, n) {
            return e.setAttribute(t, n);
        },
        object: function (e, t, n) {
            return (e[t] = n);
        },
        transform: function (e, t, n, r, i) {
            if ((r.list.set(t, n), t === r.last || i)) {
                var o = "";
                r.list.forEach(function (s, l) {
                    o += l + "(" + s + ") ";
                }),
                    (e.style.transform = o);
            }
        },
    };
    function wh(e, t) {
        var n = vh(e);
        n.forEach(function (r) {
            for (var i in t) {
                var o = Qa(t[i], r),
                    s = r.target,
                    l = zt(o),
                    u = qa(s, i, l, r),
                    a = l || zt(u),
                    f = ec(ph(o, a), u),
                    d = Ja(s, i);
                yh[d](s, i, f, r.transforms, !0);
            }
        });
    }
    function Nw(e, t) {
        var n = Ja(e.target, t.name);
        if (n) {
            var r = Rw(t, e),
                i = r[r.length - 1];
            return {
                type: n,
                property: t.name,
                animatable: e,
                tweens: r,
                duration: i.end,
                delay: r[0].delay,
                endDelay: i.endDelay,
            };
        }
    }
    function Aw(e, t) {
        return Rs(
            Ns(
                e.map(function (n) {
                    return t.map(function (r) {
                        return Nw(n, r);
                    });
                })
            ),
            function (n) {
                return !L.und(n);
            }
        );
    }
    function Eh(e, t) {
        var n = e.length,
            r = function (o) {
                return o.timelineOffset ? o.timelineOffset : 0;
            },
            i = {};
        return (
            (i.duration = n
                ? Math.max.apply(
                      Math,
                      e.map(function (o) {
                          return r(o) + o.duration;
                      })
                  )
                : t.duration),
            (i.delay = n
                ? Math.min.apply(
                      Math,
                      e.map(function (o) {
                          return r(o) + o.delay;
                      })
                  )
                : t.delay),
            (i.endDelay = n
                ? i.duration -
                  Math.max.apply(
                      Math,
                      e.map(function (o) {
                          return r(o) + o.duration - o.endDelay;
                      })
                  )
                : t.endDelay),
            i
        );
    }
    var rh = 0;
    function _w(e) {
        var t = Ha(sh, e),
            n = Ha(Xa, e),
            r = kw(n, e),
            i = vh(e.targets),
            o = Aw(i, r),
            s = Eh(o, n),
            l = rh;
        return (
            rh++,
            As(t, {
                id: l,
                children: [],
                animatables: i,
                animations: o,
                duration: s.duration,
                delay: s.delay,
                endDelay: s.endDelay,
            })
        );
    }
    var dt = [],
        Ih = (function () {
            var e;
            function t() {
                !e &&
                    (!ih() || !te.suspendWhenDocumentHidden) &&
                    dt.length > 0 &&
                    (e = requestAnimationFrame(n));
            }
            function n(i) {
                for (var o = dt.length, s = 0; s < o; ) {
                    var l = dt[s];
                    l.paused ? (dt.splice(s, 1), o--) : (l.tick(i), s++);
                }
                e = s > 0 ? requestAnimationFrame(n) : void 0;
            }
            function r() {
                te.suspendWhenDocumentHidden &&
                    (ih()
                        ? (e = cancelAnimationFrame(e))
                        : (dt.forEach(function (i) {
                              return i._onDocumentVisibility();
                          }),
                          Ih()));
            }
            return (
                typeof document != "undefined" && document.addEventListener("visibilitychange", r),
                t
            );
        })();
    function ih() {
        return !!document && document.hidden;
    }
    function te(e) {
        e === void 0 && (e = {});
        var t = 0,
            n = 0,
            r = 0,
            i,
            o = 0,
            s = null;
        function l(m) {
            var w =
                window.Promise &&
                new Promise(function (I) {
                    return (s = I);
                });
            return (m.finished = w), w;
        }
        var u = _w(e),
            a = l(u);
        function f() {
            var m = u.direction;
            m !== "alternate" && (u.direction = m !== "normal" ? "normal" : "reverse"),
                (u.reversed = !u.reversed),
                i.forEach(function (w) {
                    return (w.reversed = u.reversed);
                });
        }
        function d(m) {
            return u.reversed ? u.duration - m : m;
        }
        function p() {
            (t = 0), (n = d(u.currentTime) * (1 / te.speed));
        }
        function v(m, w) {
            w && w.seek(m - w.timelineOffset);
        }
        function y(m) {
            if (u.reversePlayback) for (var I = o; I--; ) v(m, i[I]);
            else for (var w = 0; w < o; w++) v(m, i[w]);
        }
        function g(m) {
            for (var w = 0, I = u.animations, T = I.length; w < T; ) {
                var x = I[w],
                    C = x.animatable,
                    M = x.tweens,
                    O = M.length - 1,
                    _ = M[O];
                O &&
                    (_ =
                        Rs(M, function (k0) {
                            return m < k0.end;
                        })[0] || _);
                for (
                    var V = kt(m - _.start - _.delay, 0, _.duration) / _.duration,
                        k = isNaN(V) ? 1 : _.easing(V),
                        D = _.to.strings,
                        gt = _.round,
                        vt = [],
                        _t = _.to.numbers.length,
                        Ae = void 0,
                        yt = 0;
                    yt < _t;
                    yt++
                ) {
                    var wt = void 0,
                        Te = _.to.numbers[yt],
                        ae = _.from.numbers[yt] || 0;
                    _.isPath
                        ? (wt = Tw(_.value, k * Te, _.isPathTargetInsideSVG))
                        : (wt = ae + k * (Te - ae)),
                        gt && ((_.isColor && yt > 2) || (wt = Math.round(wt * gt) / gt)),
                        vt.push(wt);
                }
                var Xe = D.length;
                if (!Xe) Ae = vt[0];
                else {
                    Ae = D[0];
                    for (var Ht = 0; Ht < Xe; Ht++) {
                        var O0 = D[Ht],
                            Et = D[Ht + 1],
                            It = vt[Ht];
                        isNaN(It) || (Et ? (Ae += It + Et) : (Ae += It + " "));
                    }
                }
                yh[x.type](C.target, x.property, Ae, C.transforms), (x.currentValue = Ae), w++;
            }
        }
        function E(m) {
            u[m] && !u.passThrough && u[m](u);
        }
        function h() {
            u.remaining && u.remaining !== !0 && u.remaining--;
        }
        function c(m) {
            var w = u.duration,
                I = u.delay,
                T = w - u.endDelay,
                x = d(m);
            (u.progress = kt((x / w) * 100, 0, 100)),
                (u.reversePlayback = x < u.currentTime),
                i && y(x),
                !u.began && u.currentTime > 0 && ((u.began = !0), E("begin")),
                !u.loopBegan && u.currentTime > 0 && ((u.loopBegan = !0), E("loopBegin")),
                x <= I && u.currentTime !== 0 && g(0),
                ((x >= T && u.currentTime !== w) || !w) && g(w),
                x > I && x < T
                    ? (u.changeBegan ||
                          ((u.changeBegan = !0), (u.changeCompleted = !1), E("changeBegin")),
                      E("change"),
                      g(x))
                    : u.changeBegan &&
                      ((u.changeCompleted = !0), (u.changeBegan = !1), E("changeComplete")),
                (u.currentTime = kt(x, 0, w)),
                u.began && E("update"),
                m >= w &&
                    ((n = 0),
                    h(),
                    u.remaining
                        ? ((t = r),
                          E("loopComplete"),
                          (u.loopBegan = !1),
                          u.direction === "alternate" && f())
                        : ((u.paused = !0),
                          u.completed ||
                              ((u.completed = !0),
                              E("loopComplete"),
                              E("complete"),
                              !u.passThrough && "Promise" in window && (s(), (a = l(u))))));
        }
        return (
            (u.reset = function () {
                var m = u.direction;
                (u.passThrough = !1),
                    (u.currentTime = 0),
                    (u.progress = 0),
                    (u.paused = !0),
                    (u.began = !1),
                    (u.loopBegan = !1),
                    (u.changeBegan = !1),
                    (u.completed = !1),
                    (u.changeCompleted = !1),
                    (u.reversePlayback = !1),
                    (u.reversed = m === "reverse"),
                    (u.remaining = u.loop),
                    (i = u.children),
                    (o = i.length);
                for (var w = o; w--; ) u.children[w].reset();
                ((u.reversed && u.loop !== !0) || (m === "alternate" && u.loop === 1)) &&
                    u.remaining++,
                    g(u.reversed ? u.duration : 0);
            }),
            (u._onDocumentVisibility = p),
            (u.set = function (m, w) {
                return wh(m, w), u;
            }),
            (u.tick = function (m) {
                (r = m), t || (t = r), c((r + (n - t)) * te.speed);
            }),
            (u.seek = function (m) {
                c(d(m));
            }),
            (u.pause = function () {
                (u.paused = !0), p();
            }),
            (u.play = function () {
                u.paused && (u.completed && u.reset(), (u.paused = !1), dt.push(u), p(), Ih());
            }),
            (u.reverse = function () {
                f(), (u.completed = !u.reversed), p();
            }),
            (u.restart = function () {
                u.reset(), u.play();
            }),
            (u.remove = function (m) {
                var w = nc(m);
                xh(w, u);
            }),
            u.reset(),
            u.autoplay && u.play(),
            u
        );
    }
    function oh(e, t) {
        for (var n = t.length; n--; ) Ya(e, t[n].animatable.target) && t.splice(n, 1);
    }
    function xh(e, t) {
        var n = t.animations,
            r = t.children;
        oh(e, n);
        for (var i = r.length; i--; ) {
            var o = r[i],
                s = o.animations;
            oh(e, s), !s.length && !o.children.length && r.splice(i, 1);
        }
        !n.length && !r.length && t.pause();
    }
    function Mw(e) {
        for (var t = nc(e), n = dt.length; n--; ) {
            var r = dt[n];
            xh(t, r);
        }
    }
    function Gw(e, t) {
        t === void 0 && (t = {});
        var n = t.direction || "normal",
            r = t.easing ? Za(t.easing) : null,
            i = t.grid,
            o = t.axis,
            s = t.from || 0,
            l = s === "first",
            u = s === "center",
            a = s === "last",
            f = L.arr(e),
            d = parseFloat(f ? e[0] : e),
            p = f ? parseFloat(e[1]) : 0,
            v = zt(f ? e[1] : e) || 0,
            y = t.start || 0 + (f ? d : 0),
            g = [],
            E = 0;
        return function (h, c, m) {
            if ((l && (s = 0), u && (s = (m - 1) / 2), a && (s = m - 1), !g.length)) {
                for (var w = 0; w < m; w++) {
                    if (!i) g.push(Math.abs(s - w));
                    else {
                        var I = u ? (i[0] - 1) / 2 : s % i[0],
                            T = u ? (i[1] - 1) / 2 : Math.floor(s / i[0]),
                            x = w % i[0],
                            C = Math.floor(w / i[0]),
                            M = I - x,
                            O = T - C,
                            _ = Math.sqrt(M * M + O * O);
                        o === "x" && (_ = -M), o === "y" && (_ = -O), g.push(_);
                    }
                    E = Math.max.apply(Math, g);
                }
                r &&
                    (g = g.map(function (k) {
                        return r(k / E) * E;
                    })),
                    n === "reverse" &&
                        (g = g.map(function (k) {
                            return o ? (k < 0 ? k * -1 : -k) : Math.abs(E - k);
                        }));
            }
            var V = f ? (p - d) / E : d;
            return y + V * (Math.round(g[c] * 100) / 100) + v;
        };
    }
    function Pw(e) {
        e === void 0 && (e = {});
        var t = te(e);
        return (
            (t.duration = 0),
            (t.add = function (n, r) {
                var i = dt.indexOf(t),
                    o = t.children;
                i > -1 && dt.splice(i, 1);
                function s(p) {
                    p.passThrough = !0;
                }
                for (var l = 0; l < o.length; l++) s(o[l]);
                var u = As(n, Ha(Xa, e));
                u.targets = u.targets || e.targets;
                var a = t.duration;
                (u.autoplay = !1),
                    (u.direction = t.direction),
                    (u.timelineOffset = L.und(r) ? a : ec(r, a)),
                    s(t),
                    t.seek(u.timelineOffset);
                var f = te(u);
                s(f), o.push(f);
                var d = Eh(o, e);
                return (
                    (t.delay = d.delay),
                    (t.endDelay = d.endDelay),
                    (t.duration = d.duration),
                    t.seek(0),
                    t.reset(),
                    t.autoplay && t.play(),
                    t
                );
            }),
            t
        );
    }
    te.version = "3.2.1";
    te.speed = 1;
    te.suspendWhenDocumentHidden = !0;
    te.running = dt;
    te.remove = Mw;
    te.get = qa;
    te.set = wh;
    te.convertPx = Ka;
    te.path = Cw;
    te.setDashoffset = xw;
    te.stagger = Gw;
    te.timeline = Pw;
    te.easing = Za;
    te.penner = ah;
    te.random = function (e, t) {
        return Math.floor(Math.random() * (t - e + 1)) + e;
    };
    var he = te;
    function _s(e, t = "fade", n = !1, r) {
        if (
            (ie(t) && (t = Or(t)),
            t.targets || (t.targets = e),
            r && (t.complete = r),
            Ze(t.easing) && (t.easing = "easeOutSine"),
            Ze(t.duration) && (t.duration = 400),
            Ze(t.opacity) && (t.opacity = [0, 1]),
            n)
        )
            for (let i in t) Array.isArray(t[i]) && t[i].reverse();
        return he(t);
    }
    function Dw(e, t, n) {
        return he({ targets: e, complete: n, ...Or(t) });
    }
    function Fw(e, t, n) {
        return he({ targets: e, complete: n, ...Or(t, !0) });
    }
    function Or(e = "fade", t) {
        let [n, r] = e.split("-"),
            i = { opacity: [0, 1], duration: 400, easing: "easeOutSine" };
        if (n === "slide") {
            let o = /(left|right)/.test(r) ? "translateX" : "translateY";
            i[o] = [/(down|right)/.test(r) ? "-30%" : "30%", 0];
        } else n === "scale" && (i.scale = [r === "up" ? 0.8 : 1.2, 0]);
        if (t) for (let o in i) Array.isArray(i[o]) && i[o].reverse();
        return i;
    }
    var $h = R(N()),
        Bw = ((e) => (
            (e[(e.emoji = 0)] = "emoji"),
            (e[(e.icon = 1)] = "icon"),
            (e[(e.upload = 2)] = "upload"),
            e
        ))(Bw || {}),
        Vw = ((e) => (
            (e[(e.auto = 0)] = "auto"),
            (e[(e.value = 1)] = "value"),
            (e[(e.preferAuto = 2)] = "preferAuto"),
            (e[(e.preferValue = 3)] = "preferValue"),
            e
        ))(Vw || {});
    var Uw = ((e) => ((e.ASSET_SOURCE = "asset-source"), e))(Uw || {}),
        jw = ((e) => (
            (e[(e.PAGE = 0)] = "PAGE"),
            (e[(e.WIDGET = 1)] = "WIDGET"),
            (e[(e.EXTERNAL = 2)] = "EXTERNAL"),
            (e[(e.EMAIL = 3)] = "EMAIL"),
            (e[(e.PHONE = 4)] = "PHONE"),
            (e[(e.FILE = 5)] = "FILE"),
            e
        ))(jw || {});
    var TC = String.fromCharCode;
    var Ww =
            (e, t = 21) =>
            (n = t) => {
                let r = "",
                    i = n;
                for (; i--; ) r += e[(Math.random() * e.length) | 0];
                return r;
            },
        zw = 10,
        bC = Ww("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz-", zw);
    var { toString: Hw } = Object.prototype;
    function Qw(e) {
        return e === null ? (e === void 0 ? "[object Undefined]" : "[object Null]") : Hw.call(e);
    }
    var Xw = Qw;
    function Zw(e) {
        let t = typeof e;
        return (
            t === "string" ||
            (t === "object" && e !== null && !Array.isArray(e) && Xw(e) === "[object String]")
        );
    }
    var Ms = Zw;
    function Yw(e, t, n) {
        let r = e === null ? 0 : e.length;
        if (!r) return [];
        (t = t === null ? 0 : t),
            (n = n === void 0 ? r : n),
            t < 0 && (t = -t > r ? 0 : r + t),
            (n = n > r ? r : n),
            n < 0 && (n += r),
            (r = t > n ? 0 : (n - t) >>> 0),
            (t >>>= 0);
        let i = -1,
            o = new Array(r);
        for (; ++i < r; ) o[i] = e[i + t];
        return o;
    }
    var $w = Yw;
    function Kw(e, t, n) {
        let { length: r } = e;
        return (n = n === void 0 ? r : n), !t && n >= r ? e : $w(e, t, n);
    }
    var Jw = Kw,
        qw = "\\ud800-\\udfff",
        eE = "\\u0300-\\u036f",
        tE = "\\ufe20-\\ufe2f",
        nE = "\\u20d0-\\u20ff",
        rE = "\\u1ab0-\\u1aff",
        iE = "\\u1dc0-\\u1dff",
        oE = eE + tE + nE + rE + iE,
        sE = "\\ufe0e\\ufe0f",
        lE = "\\u200d",
        uE = RegExp(`[${lE + qw + oE + sE}]`);
    function aE(e) {
        return uE.test(e);
    }
    var kh = aE;
    function cE(e) {
        return e.split("");
    }
    var fE = cE,
        Lh = "\\ud800-\\udfff",
        dE = "\\u0300-\\u036f",
        pE = "\\ufe20-\\ufe2f",
        mE = "\\u20d0-\\u20ff",
        hE = "\\u1ab0-\\u1aff",
        gE = "\\u1dc0-\\u1dff",
        vE = dE + pE + mE + hE + gE,
        yE = "\\ufe0e\\ufe0f",
        wE = `[${Lh}]`,
        ic = `[${vE}]`,
        rc = "\\ud83c[\\udffb-\\udfff]",
        EE = `(?:${ic}|${rc})`,
        Rh = `[^${Lh}]`,
        Nh = "(?:\\ud83c[\\udde6-\\uddff]){2}",
        Ah = "[\\ud800-\\udbff][\\udc00-\\udfff]",
        IE = "\\u200d",
        _h = `${EE}?`,
        Mh = `[${yE}]?`,
        xE = `(?:${IE}(?:${[Rh, Nh, Ah].join("|")})${Mh + _h})*`,
        SE = Mh + _h + xE,
        CE = `${Rh}${ic}?`,
        TE = `(?:${[CE, ic, Nh, Ah, wE].join("|")})`,
        bE = RegExp(`${rc}(?=${rc})|${TE + SE}`, "g");
    function OE(e) {
        return e.match(bE) || [];
    }
    var kE = OE;
    function LE(e) {
        return kh(e) ? kE(e) : fE(e);
    }
    var RE = LE;
    function NE(e) {
        return (t) => {
            if (!t) return "";
            let n = kh(t) ? RE(t) : void 0,
                r = n ? n[0] : t[0],
                i = n ? Jw(n, 1, void 0).join("") : t.slice(1);
            return r[e]() + i;
        };
    }
    var AE = NE,
        _E = AE("toUpperCase"),
        ME = _E,
        Gh = "\\ud800-\\udfff",
        GE = "\\u0300-\\u036f",
        PE = "\\ufe20-\\ufe2f",
        DE = "\\u20d0-\\u20ff",
        FE = "\\u1ab0-\\u1aff",
        BE = "\\u1dc0-\\u1dff",
        VE = GE + PE + DE + FE + BE,
        Ph = "\\u2700-\\u27bf",
        Dh = "a-z\\xdf-\\xf6\\xf8-\\xff",
        UE = "\\xac\\xb1\\xd7\\xf7",
        jE = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",
        WE = "\\u2000-\\u206f",
        zE =
            " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
        Fh = "A-Z\\xc0-\\xd6\\xd8-\\xde",
        HE = "\\ufe0e\\ufe0f",
        Bh = UE + jE + WE + zE,
        Vh = "['\u2019]",
        Sh = `[${Bh}]`,
        QE = `[${VE}]`,
        Uh = "\\d",
        XE = `[${Ph}]`,
        jh = `[${Dh}]`,
        Wh = `[^${Gh}${Bh + Uh + Ph + Dh + Fh}]`,
        ZE = "\\ud83c[\\udffb-\\udfff]",
        YE = `(?:${QE}|${ZE})`,
        $E = `[^${Gh}]`,
        zh = "(?:\\ud83c[\\udde6-\\uddff]){2}",
        Hh = "[\\ud800-\\udbff][\\udc00-\\udfff]",
        kr = `[${Fh}]`,
        KE = "\\u200d",
        Ch = `(?:${jh}|${Wh})`,
        JE = `(?:${kr}|${Wh})`,
        Th = `(?:${Vh}(?:d|ll|m|re|s|t|ve))?`,
        bh = `(?:${Vh}(?:D|LL|M|RE|S|T|VE))?`,
        Qh = `${YE}?`,
        Xh = `[${HE}]?`,
        qE = `(?:${KE}(?:${[$E, zh, Hh].join("|")})${Xh + Qh})*`,
        eI = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
        tI = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
        nI = Xh + Qh + qE,
        rI = `(?:${[XE, zh, Hh].join("|")})${nI}`,
        iI = RegExp(
            [
                `${kr}?${jh}+${Th}(?=${[Sh, kr, "$"].join("|")})`,
                `${JE}+${bh}(?=${[Sh, kr + Ch, "$"].join("|")})`,
                `${kr}?${Ch}+${Th}`,
                `${kr}+${bh}`,
                tI,
                eI,
                `${Uh}+`,
                rI,
            ].join("|"),
            "g"
        );
    function oI(e) {
        return e.match(iI);
    }
    var sI = oI,
        lI = RegExp.prototype.test.bind(
            /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/
        ),
        uI = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
    function aI(e) {
        return e.match(uI);
    }
    function cI(e, t) {
        return t === void 0 ? (lI(e) ? sI(e) : aI(e)) || [] : e.match(t) || [];
    }
    var fI = cI,
        dI = (e) =>
            fI(`${e}`.replace(/['\u2019]/g, ""), void 0).reduce(
                (t, n, r) => t + (r ? " " : "") + ME(n),
                ""
            ),
        pI = dI,
        Zh = /^{{(.*?)}}$/;
    var mI = class {
            constructor() {
                (this.pageX = 0),
                    (this.pageY = 0),
                    (this.pageDownX = -1),
                    (this.pageDownY = -1),
                    (this.pageUpX = -1),
                    (this.pageUpY = -1),
                    (this.moveX = -1),
                    (this.moveY = -1),
                    (this.timestampDown = 0),
                    (this.timestampUp = 0),
                    (this.downRect = [0, 0, 0, 0]),
                    (this.downCanvasPos = [0, 0]),
                    (this.button = -1),
                    (this.shiftKey = !1),
                    (this.altKey = !1),
                    (this.metaKey = !1),
                    (this.listeners = {
                        mousemove: [],
                        mouseup: [],
                        mousedown: [],
                        mouseleave: [],
                    }),
                    (this.emit = (e, t) => {
                        let n = this.listeners[e];
                        for (let r = 0; r < n.length; r++) if (n[r](t) === !1) return;
                    }),
                    (this.handleMouseLeave = (e) => {
                        this.emit("mouseleave", e), this.isMouseDown() && this.handleMouseUp(e);
                    }),
                    (this.handleMouseMove = (e) => {
                        (this.moveX = e.pageX - this.pageX),
                            (this.moveY = e.pageY - this.pageY),
                            (this.pageX = e.pageX),
                            (this.pageY = e.pageY),
                            (this.altKey = e.altKey),
                            (this.metaKey = e.metaKey),
                            (this.shiftKey = e.shiftKey),
                            this.emit("mousemove", e);
                    }),
                    (this.handleMouseDown = (e) => {
                        (this.timestampDown = e.timeStamp),
                            (this.button = e.button),
                            (this.pageDownX = e.pageX),
                            (this.pageX = e.pageX),
                            (this.pageDownY = e.pageY),
                            (this.pageY = e.pageY),
                            this.emit("mousedown", e);
                    }),
                    (this.handleMouseUp = (e) => {
                        (this.timestampUp = e.timeStamp),
                            (this.pageUpX = e.pageX),
                            (this.pageX = e.pageX),
                            (this.pageUpY = e.pageY),
                            (this.pageY = e.pageY),
                            this.emit("mouseup", e);
                    }),
                    typeof document < "u" &&
                        (document.addEventListener("mousemove", this.handleMouseMove),
                        document.addEventListener("mousedown", this.handleMouseDown),
                        document.addEventListener("mouseup", this.handleMouseUp),
                        document.addEventListener("mouseleave", this.handleMouseLeave));
            }
            on(e, t, n) {
                let r = this.listeners[e];
                (t.__priority = n || 0),
                    r.indexOf(t) === -1 && r.push(t),
                    r.sort((i, o) => (o.__priority || 0) - (i.__priority || 0));
            }
            off(e, t) {
                let n = this.listeners[e];
                if (!t) n.length = 0;
                else {
                    let r = n.indexOf(t);
                    r !== -1 && n.splice(r, 1);
                }
            }
            isMouseDown() {
                return this.timestampDown > this.timestampUp;
            }
            isMouseCenterDown() {
                return this.isMouseDown() && this.button === 1;
            }
            isMouseLeftDown() {
                return this.isMouseDown() && this.button === 0;
            }
            isMouseRightDown() {
                return this.isMouseDown() && this.button === 2;
            }
            isInside(e, t) {
                let n = e.target;
                for (; n; ) {
                    if (n === t) return !0;
                    n = n.parentElement;
                }
                return !1;
            }
            isInsideRole(e, t) {
                let n = e.target;
                for (Ms(t) && (t = new RegExp("^" + t + "$", "i")); n; ) {
                    let r = n.getAttribute && n.getAttribute("role");
                    if (r && t.test(r)) return !0;
                    n = n.parentElement;
                }
                return !1;
            }
            getDownRect(e, t = 1) {
                let { pageX: n, pageY: r, pageDownX: i, pageDownY: o } = this,
                    s = this.downRect;
                if (
                    ((s[0] = Math.min(n, i)),
                    (s[1] = Math.min(r, o)),
                    (s[2] = (Math.max(n, i) - s[0]) * t),
                    (s[3] = (Math.max(r, o) - s[1]) * t),
                    e)
                ) {
                    let l = Math.max(s[2], s[3]);
                    n < i && (s[0] += s[2] - l),
                        r < o && (s[1] += s[3] - l),
                        (s[2] = l),
                        (s[3] = l);
                }
                return s;
            }
            mouseDownFor(e) {
                return this.timestampUp - this.timestampDown > e;
            }
            getDownDist() {
                return Math.sqrt(this.getDownDistX() ** 2 + this.getDownDistY() ** 2);
            }
            getDownDistX() {
                return this.pageX - this.pageDownX;
            }
            getDownDistY() {
                return this.pageY - this.pageDownY;
            }
        },
        OC = new mI(),
        Lr = typeof navigator < "u" && navigator.userAgent.indexOf("Mac OS X") !== -1,
        hI = ((e) => ((e.skip = "skip"), (e.basic = "basic"), (e.advanced = "advanced"), e))(
            hI || {}
        ),
        Oh = [
            { reg: /^Super/i, val: Lr ? "keyboard.command" : "Ctrl" },
            { reg: /Alt/i, val: Lr ? "keyboard.option" : "Alt" },
            { reg: /Shift/i, val: Lr ? "keyboard.shift" : "Shift" },
            { reg: /Delete/i, val: "del" },
            { reg: /Backspace/i, val: "keyboard.backspace" },
            { reg: /Enter/i, val: "keyboard.enter" },
            { reg: /Escape/i, val: "esc" },
            { reg: /ArrowUp/i, val: "arrow.up" },
            { reg: /ArrowDown/i, val: "arrow.down" },
            { reg: /ArrowLeft/i, val: "arrow.left" },
            { reg: /ArrowRight/i, val: "arrow.right" },
        ],
        gI = { INPUT: !0, TEXTAREA: !0 },
        vI = { textbox: !0, formbutton: !0 };
    function yI() {
        return window.location !== window.parent.location;
    }
    function wI() {
        let { activeElement: e } = document;
        return e
            ? e.tagName === "INPUT" || e.tagName === "TEXTAREA" || e.contentEditable === "true"
            : !1;
    }
    var EI = class {
        constructor() {
            (this.altDown = !1),
                (this.ctrlDown = !1),
                (this.shiftDown = !1),
                (this.metaDown = !1),
                (this.superDown = !1),
                (this.spaceDown = !1),
                (this.zDown = !1),
                (this.keymap = {}),
                (this.listeners = {}),
                (this.upListeners = {}),
                (this.anyKeyListeners = []),
                (this.isEnabled = !1),
                (this.list = []),
                (this.shortcuts = {}),
                (this.handleKeyDown = (e) => {
                    if (yI()) return;
                    e.which === 18 && !Lr && e.preventDefault(),
                        (this.altDown = e.altKey),
                        (this.ctrlDown = e.ctrlKey),
                        (this.shiftDown = e.shiftKey),
                        (this.metaDown = e.metaKey),
                        wI() ||
                            (e.code === "Space" && (this.spaceDown = !0),
                            e.code === "KeyZ" && !this.metaDown && (this.zDown = !0)),
                        this.anyKeyListeners.forEach((i) => i(this));
                    let t = this.getEventId(e),
                        n = this.keymap[t],
                        r = this.shortcuts[n];
                    if (
                        (this.emit("unrestrictedkey:" + t, e, t),
                        !e.defaultPrevented &&
                            (r &&
                                r.unrestricted &&
                                (r.default && e.preventDefault(), this.emit(n, e, r)),
                            !this.isRestricted(e)))
                    ) {
                        if ((this.emit("key:" + t, e, t), e.defaultPrevented)) return;
                        n && (r.default && e.preventDefault(), this.emit(n, e, r, n));
                    }
                }),
                (this.handleBlur = () => {
                    (this.altDown = !1),
                        (this.ctrlDown = !1),
                        (this.shiftDown = !1),
                        (this.metaDown = !1),
                        (this.spaceDown = !1),
                        (this.zDown = !1),
                        this.anyKeyListeners.forEach((e) => e(this));
                }),
                (this.handleKeyUp = (e) => {
                    (this.altDown = e.altKey),
                        (this.ctrlDown = e.ctrlKey),
                        (this.shiftDown = e.shiftKey),
                        (this.metaDown = e.metaKey),
                        e.code === "Space" && (this.spaceDown = !1),
                        e.code === "KeyZ" && (this.zDown = !1),
                        this.anyKeyListeners.forEach((r) => r(this));
                    let t = this.getEventId(e);
                    if (e.defaultPrevented) return;
                    let n = this.upListeners[t];
                    n && n.forEach((r) => r(e));
                });
        }
        register(e) {
            this.shortcuts = e;
            for (let t in e) {
                let n = e[t];
                this.list.push(n);
                for (let r of n.keys) this.keymap[r] = t;
            }
        }
        disable() {
            document.removeEventListener("keydown", this.handleKeyDown),
                document.removeEventListener("keyup", this.handleKeyUp),
                window.removeEventListener("blur", this.handleBlur),
                (this.isEnabled = !1);
        }
        enable(e) {
            e && this.register(e),
                this.isEnabled ||
                    (document.addEventListener("keydown", this.handleKeyDown),
                    document.addEventListener("keyup", this.handleKeyUp),
                    window.addEventListener("blur", this.handleBlur),
                    (this.isEnabled = !0));
        }
        getEventId(e) {
            let t = e.code || "",
                n = e.key;
            return (
                (t.includes("Digit") || t.includes("Key")) &&
                    (n = t.slice(t.length - 1).toLowerCase()),
                e.shiftKey && (n = "Shift+" + n),
                e.altKey && (n = "Alt+" + n),
                ((Lr && e.metaKey) || (!Lr && e.ctrlKey)) && (n = "Super+" + n),
                n
            );
        }
        getModifierKey(e) {
            switch (e) {
                case "Alt":
                    return "altDown";
                case "Control":
                    return "ctrlDown";
                case "Meta":
                    return "metaDown";
                case "Shift":
                    return "shiftDown";
                case "Super":
                    return "superDown";
                case "z":
                    return "zDown";
                default:
                    return "spaceDown";
            }
        }
        getFormatted(e) {
            Ms(e) && (e = [e]);
            let t = [];
            for (let n of e) {
                let r = n.toUpperCase();
                for (let i of Oh)
                    r = r
                        .replace(i.reg, i.val)
                        .split("+")
                        .map((o) => (o.match(/^a-Z/) ? pI(o) : o))
                        .join(" ");
                t.push(r);
            }
            return t;
        }
        getList() {
            return this.list;
        }
        keysToString(e) {
            for (let t of Oh) e = e.replace(t.reg, t.val).replace(/\+/g, " + ");
            return e;
        }
        onKey(e, t, n) {
            Ms(e) && (e = [e]);
            for (let r of e) this.on((n ? "unrestrictedkey:" : "key:") + r, t);
        }
        isRestricted({ target: e }) {
            let { activeElement: t } = e.ownerDocument || document;
            return t ? gI[t.tagName] || vI[t.getAttribute("role") || ""] || Yh(t) : !1;
        }
        onUp(e, t) {
            (this.upListeners[e] || (this.upListeners[e] = [])).push(t);
        }
        offUp(e, t) {
            let n = this.upListeners[e];
            if (n) {
                let r = n.indexOf(t);
                r !== -1 && n.splice(r, 1);
            }
        }
        on(e, t) {
            (this.listeners[e] || (this.listeners[e] = [])).push(t);
        }
        onShortcut(e, t) {
            (this.listeners[e] || (this.listeners[e] = [])).push(t);
        }
        offShortcut(e, t) {
            let n = this.listeners[e];
            if (n) {
                let r = n.indexOf(t);
                r !== -1 && n.splice(r, 1);
            }
        }
        off(e, t) {
            let n = this.listeners[e];
            if (n) {
                let r = n.indexOf(t);
                r !== -1 && n.splice(r, 1);
            }
        }
        offKey(e, t) {
            Ms(e) && (e = [e]);
            for (let n of e) this.off("key:" + n, t), this.off("unrestrictedkey:" + n, t);
        }
        onAny(e) {
            this.anyKeyListeners.indexOf(e) === -1 && this.anyKeyListeners.push(e);
        }
        offAny(e) {
            let t = this.anyKeyListeners.indexOf(e);
            t !== -1 && this.anyKeyListeners.splice(t, 1);
        }
        emit(e, ...t) {
            let n = this.listeners[e];
            if (n) for (let r of n) r.apply(this, t);
        }
    };
    function Yh(e) {
        return e.tagName === "FORM" ? !0 : e.parentElement ? Yh(e.parentElement) : !1;
    }
    var kC = new EI();
    function sc(e, t) {
        return !t || !Object.keys(t).length ? [e, !1] : oc(e, t);
    }
    function oc(e, t) {
        let n = !1;
        if (typeof e == "string")
            e = e.replace(Zh, (r, i) => ((i = i.trim()), i in t ? ((n = !0), t[i]) : r));
        else if (Array.isArray(e))
            e = e.map((r) => {
                let [i, o] = oc(r, t);
                return o && (n = !0), i;
            });
        else if (typeof e == "object" && e !== null) {
            let r = e;
            e = {};
            for (let i in r) {
                let [o, s] = oc(r[i], t);
                s && (n = !0), (e[i] = o);
            }
        }
        return [e, n];
    }
    function lc() {
        return Date.now().toString(36) + "-" + Math.round(Math.random() * 1e4).toString(36);
    }
    var we = {};
    yf(we, {
        App: () => Dr,
        DEFAULT_APP_STATE: () => qs,
        Fixed: () => ll,
        Gesture: () => Mv,
        Icon: () => gv,
        Image: () => wv,
        Intersection: () => Ef,
        Link: () => pv,
        Page: () => $i,
        Portal: () => Fv,
        Router: () => jS,
        StateContext: () => Rr,
        StateProvider: () => Xi,
        Timeline: () => jn,
        Tracking: () => fl,
        Transition: () => ml,
        View: () => Z,
        VirtualModelContext: () => Qx,
        WidgetNode: () => xn,
        addClass: () => nw,
        applyVariables: () => sc,
        createAnimation: () => _s,
        createUID: () => lc,
        doc: () => F,
        docEl: () => eh,
        emitRefs: () => Fc,
        enterAnime: () => Dw,
        extendAppState: () => Bc,
        findParent: () => ks,
        getById: () => _i,
        getScrollHeight: () => Vn,
        getScrollTop: () => Un,
        getState: () => Bi,
        getViewHeight: () => Mi,
        getViewWidth: () => Gi,
        global: () => le,
        h: () => Kv.createElement,
        hasAttrs: () => iw,
        isBrowser: () => Bn,
        isDOMEvent: () => uw,
        isEmojiIcon: () => P0,
        isFunction: () => El,
        isImage: () => D0,
        isNumber: () => Il,
        isString: () => ie,
        isUndefined: () => Ze,
        leaveAnime: () => Fw,
        onLiveEvent: () => lw,
        raf: () => gg,
        registerGlobalReducer: () => el,
        registerReducer: () => Zx,
        removeClass: () => rw,
        removeEl: () => br,
        root: () => ft,
        s: () => ge,
        scrollEl: () => Os,
        simpleAnime: () => Or,
        states: () => ve,
        store: () => Jx,
        unmountContent: () => ow,
        useCallbackRef: () => Nr,
        useDevice: () => NI,
        useDispatchVevEvent: () => HI,
        useEditorState: () => Vi,
        useFrame: () => MI,
        useGlobalState: () => QI,
        useGlobalStateRef: () => ue,
        useGlobalStore: () => A,
        useHover: () => GI,
        useIcon: () => vc,
        useImage: () => yc,
        useIntersection: () => yg,
        useInterval: () => mc,
        useIsIndexPage: () => Ic,
        useLiveEvent: () => wc,
        useMainDevice: () => AI,
        useMenu: () => ZI,
        useModel: () => Fe,
        useOutsideClick: () => UI,
        usePage: () => Ec,
        usePages: () => YI,
        usePreloadPage: () => $I,
        useRegisterHostRef: () => gc,
        useRoute: () => KI,
        useScrollTop: () => xc,
        useSize: () => hc,
        useStore: () => RI,
        useSwipe: () => zI,
        useTracking: () => Hi,
        useVevEvent: () => Xs,
        useViewport: () => JI,
        useVisible: () => pc,
        useWidget: () => Wi,
        useZoom: () => ix,
    });
    var Kv = R(N());
    var Kh = 1,
        II = [
            "linear",
            "easeInQuad",
            "easeOutQuad",
            "easeInOutQuad",
            "easeInElastic()",
            "easeOutElastic()",
            "easeInOutElastic()",
            "spring()",
            "spring()",
            "spring()",
            "easeInBack",
            "easeOutBack",
            "easeInOutBack",
        ],
        jn = class {
            constructor(t, n) {
                this.scale = {};
                this.replace = { x: "translateX", y: "translateY" };
                this.format = {};
                this.instance = he.timeline({ autoplay: !1, complete: t, begin: n });
            }
            play() {
                this.instance.play();
            }
            reverse() {
                this.instance.reverse(), (this.instance.completed = !1), this.instance.play();
            }
            remove(t) {
                he.remove(t), (t.style.transform = "none");
            }
            reset() {
                this.instance.pause(),
                    (this.instance = he.timeline({
                        autoplay: !1,
                        complete: this.instance.complete,
                        begin: this.instance.begin,
                    })),
                    this.instance.pause();
            }
            scaling(t) {
                this.scale = t;
            }
            addReplace(t, n) {
                this.replace[t] = n;
            }
            addFormat(t, n) {
                this.format[t] = n;
            }
            toValues(t, n, r) {
                if (!n || !t) return;
                Array.isArray(n) || (n = [n]), (r = { ...r });
                let i = n.reduce((s, l) => s + (l.time || 1), 0),
                    o = n.length;
                for (; o--; ) {
                    let s = n[o],
                        l = s.time || Kh;
                    i -= l;
                    for (let u in s)
                        if (u !== "time") {
                            let [a, f, d, p] = s[u];
                            this.addTween(t, u, a, r[u], f, d * l + i, p * l + i), (r[u] = a);
                        }
                }
            }
            fromValues(t, n, r) {
                if (!n || !t) return;
                n instanceof Array || (n = [n]), (r = { ...r });
                let i = 0;
                for (let o of n) {
                    let s = o.time || Kh;
                    for (let l in o)
                        if (l !== "time") {
                            let [u, a, f, d] = o[l];
                            this.addTween(t, l, r[l], u, a, f * s + i, d * s + i), (r[l] = u);
                        }
                    i += s;
                }
            }
            addTween(t, n, r, i, o, s, l) {
                var u, a;
                this.format[n] && ((r = this.format[n](r)), (i = this.format[n](i))),
                    n in this.scale &&
                        ((r *= (u = this.scale[n]) != null ? u : 0),
                        (i *= (a = this.scale[n]) != null ? a : 0)),
                    this.instance.add(
                        {
                            targets: t,
                            delay: s * 1e3,
                            duration: (l - s) * 1e3,
                            easing: typeof o == "string" ? o : II[o],
                            [this.replace[n] || n]: [r, i],
                        },
                        0
                    );
            }
        };
    var Jh = F.head || ft,
        xI = Object.freeze(Object.create(null)),
        qh = null;
    function eg() {
        return qh;
    }
    function tg(e) {
        return (
            /\/\//.test(e) || (e = "https://cdn.jsdelivr.net/npm/" + e),
            new Promise((t, n) => {
                let r = F.createElement("script");
                (r.charset = "utf-8"),
                    (r.async = !0),
                    (r.onerror = () => n(new Error("Error loading " + e))),
                    (r.onload = () => t()),
                    (r.src = e),
                    Jh.appendChild(r);
            })
        );
    }
    function ng(e) {
        let t = document.createElement("link");
        return (t.href = e), (t.type = "text/css"), (t.rel = "stylesheet"), Jh.appendChild(t), t;
    }
    async function rg(e) {
        return (e.C = ig(e, {}).then(() => og(e, {}))), await e.C, e.n;
    }
    async function ig(e, t) {
        t[e.id] ||
            ((t[e.id] = !0),
            e.L && (await e.L),
            e.d && (await Promise.all(e.d.map((n) => ig(n, t)))));
    }
    async function og(e, t) {
        if (t[e.id]) return;
        if (((t[e.id] = !0), !e.e)) {
            if (e.eE) throw e.eE;
            return e.E ? e.E : void 0;
        }
        let n;
        if (e.d)
            for (let i of e.d) {
                let o = og(i, t);
                o && (n = n || []).push(o);
            }
        if (n) e.E = Promise.all(n).then(r);
        else return r();
        function r() {
            try {
                qh = e;
                let i = e.e && e.e.call(xI);
                if (i)
                    return (
                        i.then(() => {
                            e.E = null;
                        }),
                        i.catch(() => {}),
                        (e.E = e.E || i)
                    );
            } catch (i) {
                throw ((e.eE = i), i);
            } finally {
                (e.L = e.I = void 0), (e.e = null);
            }
        }
    }
    var SI = /\\/g;
    function sg(e, t) {
        if ((e.indexOf("\\") !== -1 && (e = e.replace(SI, "/")), e[0] === "/" && e[1] === "/"))
            return t.slice(0, t.indexOf(":") + 1) + e;
        if (
            (e[0] === "." &&
                (e[1] === "/" ||
                    (e[1] === "." && (e[2] === "/" || (e.length === 2 && (e += "/")))) ||
                    (e.length === 1 && (e += "/")))) ||
            e[0] === "/"
        ) {
            let n = t.slice(0, t.indexOf(":") + 1),
                r;
            if (
                (t[n.length + 1] === "/"
                    ? ((r = t.slice(n.length + 2)), (r = r.slice(r.indexOf("/") + 1)))
                    : (r = t.slice(n.length + (t[n.length] === "/" ? 0 : 1))),
                e[0] === "/")
            )
                return t.slice(0, t.length - r.length - 1) + e;
            let i = r.slice(0, r.lastIndexOf("/") + 1) + e,
                o = [],
                s = -1;
            for (let l = 0; l < i.length; l++)
                s !== -1
                    ? i[l] === "/" && (o.push(i.slice(s, l + 1)), (s = -1))
                    : i[l] === "."
                    ? i[l + 1] === "." && (i[l + 2] === "/" || l + 2 === i.length)
                        ? (o.pop(), (l += 2))
                        : i[l + 1] === "/" || l + 1 === i.length
                        ? (l += 1)
                        : (s = l)
                    : (s = l);
            return s !== -1 && o.push(i.slice(s)), t.slice(0, t.length - r.length) + o.join("");
        }
        return e;
    }
    var pt = (le.register = { vev: { id: "vev", n: le.vev, i: [] } });
    function CI() {
        return {};
    }
    var Wn = (le.registerRegistry = {}),
        Gs = {},
        TI = {},
        Di,
        Ps = typeof location != "undefined" ? location.href.split("#")[0].split("?")[0] : "",
        lg = Ps.lastIndexOf("/");
    lg !== -1 && (Ps = Ps.slice(0, lg + 1));
    var uc = class {
            constructor() {
                this.r = pt;
                this.rr = Wn;
                this.re = TI;
            }
            ls() {
                console.log("r", this.r), console.log("rr", this.rr);
            }
            get(t) {
                let n = pt[t] || pt[this.resolve(t)];
                if (n && n.e === null && !n.E) return n.eE ? void 0 : n;
            }
            waitForRegister(t) {
                return new Promise((n, r) => {
                    let i = !1,
                        o = t.length,
                        s = 0,
                        l = 0,
                        u = () => {
                            Di
                                ? ((i = !1), r("Some widgets failed to load"))
                                : (s++,
                                  s > 15 && r("No widgets loaded"),
                                  (l = self.setTimeout(u, 1e3)));
                        };
                    l = self.setTimeout(u, 2e3);
                    for (let a of t) {
                        let f = this.watch(a, () => {
                            f(), o--, !o && !i && (clearTimeout(l), n());
                        });
                    }
                });
            }
            delete(t) {
                delete Wn[t], delete pt[t];
                let n = this.get(t);
                n && n.t && br(n.t);
            }
            register(t, n, r) {
                ie(t) ? ((Di = Wn[t] = [n, r]), this.emitWatchers(t)) : (Di = [t, n]);
            }
            resolve(t, n) {
                return pt[t] || Wn[t] ? t : sg(t, n || Ps);
            }
            async instantiate(t) {
                if (Wn[t]) return Wn[t];
                await this.fetch(t);
                let n = Di;
                return (Di = void 0), n || [[], CI];
            }
            async emitWatchers(t) {
                let n = await this.import(t, !0),
                    r = Gs[t] || [];
                for (let i of r) i(n);
            }
            watch(t, n) {
                let r = Gs[t] || (Gs[t] = []);
                r.indexOf(n) === -1 && r.push(n);
                let i = this.syncImport(t);
                return i && setTimeout(() => n(i), 1), () => r.splice(r.indexOf(n), 1);
            }
            unwatch(t, n) {
                let r = Gs[t],
                    i;
                r && (i = r.indexOf(n)) !== -1 && r.splice(i, 1);
            }
            syncImport(t) {
                if (pt[t]) return ac(this.resolve(t)).n;
            }
            async import(t, n) {
                if (t === "react") return self.React;
                if (t === "react-dom") return self.ReactDOM;
                if (n && !Wn[t]) return Promise.resolve({});
                let r = ac(this.resolve(t));
                return await (r.C || rg(r)), r.n;
            }
            fetch(t) {
                return tg(t);
            }
            add(t) {
                for (let n in t) pt[n] = { id: n, n: t[n], i: [], C: Promise.resolve() };
            }
        },
        cc = new uc();
    function ac(e) {
        if (pt[e]) return pt[e];
        if (/\.css$/i.test(e))
            return (pt[e] = { id: e, C: Promise.resolve(), n: {}, i: [], t: ng(e) });
        let t = (pt[e] = { id: e, i: [], n: {}, h: !1, d: [], e: null, eE: void 0, E: void 0 });
        return (
            (t.I = bI(t)),
            (t.L = t.I.then(async ([n, r]) => {
                t.d = await OI(e, n, r);
            })),
            t
        );
    }
    async function bI(e) {
        let { n: t, i: n } = e,
            r = await cc.instantiate(e.id);
        if (!r) throw new Error("Module " + e.id + " did not instantiate");
        function i(s, l) {
            e.h = !0;
            let u = !1;
            if ((s === "default" && typeof l == "object" && (s = l), typeof s != "object"))
                (!(s in t) || t[s] !== l) && ((t[s] = l), (u = !0));
            else
                for (let a in s) {
                    let f = s[a];
                    (!(a in t) || t[a] !== f) && ((t[a] = f), (u = !0));
                }
            if (u) for (let a = 0; a < n.length; a++) n[a](t);
            return l;
        }
        let o = r[1](i);
        return (e.e = o.execute || function () {}), [r[0], o.setters || []];
    }
    async function OI(e, t, n) {
        return Promise.all(
            t.map(async (r, i) => {
                let o = n[i],
                    s = ac(cc.resolve(r, e));
                return await s.I, o && (s.i.push(o), (s.h || !s.I) && o(s.n)), s;
            })
        );
    }
    var ge = cc;
    var Ne = R(N());
    var Q = R(N());
    function ug(e) {
        let t = {};
        return (
            e.forEach((n) => {
                t[n.key] = n;
            }),
            t
        );
    }
    function Fi(e) {
        if (!e) return !0;
        for (let t in e) if (Object.hasOwn(e, t)) return !1;
        return !0;
    }
    function Ds(e) {
        var n;
        let t = {};
        for (let r of e)
            if (r && !Fi(r))
                for (let i in r)
                    if (kI(i)) Object.assign(t, { [i]: { ...t[i], ...r[i] } });
                    else if (i === "childContent") {
                        let o = {};
                        for (let s in r.childContent)
                            o[s] = Ds([
                                (n = t.childContent) == null ? void 0 : n[s],
                                r.childContent[s],
                            ]);
                        Object.assign(t, { childContent: o });
                    } else Object.assign(t, { [i]: r[i] });
        return t;
    }
    function kI(e) {
        return ["attrs", "content"].includes(e);
    }
    var In = R(N());
    var Bg = R(N());
    var gn = R(N());
    function LI(e, t, n) {
        if (Array.isArray(e) && Array.isArray(t)) {
            if (e.length !== t.length) return !0;
            let r = e.length;
            for (; r--; )
                if (e[r] !== t[r]) return n && console.log(`#${n}: change to array index ${r}`), !0;
            return !1;
        }
        return n && t !== e && n && console.log(`#${n}: change to value`), t !== e;
    }
    function A(e, t, n) {
        let r = (0, gn.useRef)(),
            [i, o, s] = (0, gn.useContext)(Rr);
        r.current || (r.current = e(Bi(s), o));
        let [, l] = (0, gn.useState)();
        return (
            (0, gn.useEffect)(
                () =>
                    i((u) => {
                        let a = e(u, o);
                        LI(r.current, a, n) && ((r.current = a), l(Date.now()));
                    }),
                t || []
            ),
            r.current
        );
    }
    function RI(e, t) {
        let n = Re(),
            r = n && n.type;
        return A((i, o) => {
            let s = (r && i.pkg[r]) || r,
                l = (s && i.pkgStores[s]) || {};
            return e(l, (u, a) => o(u, a, s || void 0));
        }, t);
    }
    function NI() {
        return A((e) => e.device, []);
    }
    function AI() {
        return A((e) => e.masterMode, []);
    }
    var ag = R(N());
    function Vi() {
        let e = Re(),
            [t, n] = A((a) => [a.editor, a.rightPanelTab], []),
            r = !1,
            i = "host",
            o = !1,
            s = !1,
            l = !1,
            u;
        if (
            t &&
            e &&
            (((t.selection && t.selection.indexOf(e.key) !== -1) ||
                t.action === e.key ||
                t.action === e.fromModel ||
                t.action === e.virtualKey) &&
                ((r = !0), (i = t.rule), t.disabled && n === "schema" && (s = !0)),
            (o = t.disabled),
            o && t != null && t.activeContentFrame)
        ) {
            let { parent: a, child: f } = t.activeContentFrame;
            (l = a === e.key || a === e.virtualKey), l && (u = f == null ? void 0 : f.slice(0, 11));
        }
        return (0, ag.useMemo)(
            () => ({
                selected: r,
                disabled: o,
                rule: i,
                schemaOpen: s,
                activeContentFrame: l,
                activeContentChild: u,
            }),
            [r, i, o, s, u, l]
        );
    }
    var pg = R(N(), 1),
        mg = R(N(), 1),
        vg = R(N(), 1),
        Ws = R(N(), 1),
        wg = R(N(), 1),
        zs = R(N(), 1),
        Ar = R(N(), 1),
        Hs = R(N(), 1);
    function Nr(e) {
        let t = (0, pg.useRef)(e);
        return (t.current = e), t;
    }
    var Vs = new Set(),
        fc = new Set(),
        dc = !1;
    function _I(e) {
        for (let t of Vs) t(e);
        for (let t of fc) t(e);
        Vs.size && Vs.clear(), fc.size ? hg() : (dc = !1);
    }
    function hg() {
        dc = requestAnimationFrame(_I);
    }
    function gg(e, t = !1) {
        let n = t ? fc : Vs;
        return (
            n.add(e),
            dc || hg(),
            () => {
                n.delete(e);
            }
        );
    }
    function MI(e, t) {
        (0, mg.useLayoutEffect)(() => {
            if (e !== !1) return e(performance.now()), gg(e, !0);
        }, t);
    }
    function GI() {
        let [e, t] = (0, vg.useState)(!1);
        return [e, { onMouseEnter: () => t(!0), onMouseLeave: () => t(!1) }];
    }
    var Fs = new Map();
    function PI(e) {
        return e ? `${e.offsetTop}-${e.offsetBottom}-${e.threshold || e.steps || 0}` : "0";
    }
    function DI(e, t, n) {
        let r = PI(n);
        Fs.has(r) ||
            Fs.set(r, {
                observer: new IntersectionObserver((l) => {
                    l.forEach((u) => {
                        var d;
                        let { target: a } = u,
                            f = (d = Fs.get(r)) == null ? void 0 : d.listeners.get(a);
                        f && f.forEach((p) => p(u));
                    });
                }, FI(n)),
                listeners: new Map(),
            });
        let { observer: i, listeners: o } = Fs.get(r);
        o.has(e) || (o.set(e, new Set()), i.observe(e));
        let s = o.get(e);
        return (
            s.add(t),
            () => {
                s.delete(t), s.size || (o.delete(e), i.unobserve(e));
            }
        );
    }
    var cg = (e) =>
        typeof e == "number"
            ? e * -1 + "px"
            : e
            ? e.charAt(0) === "-"
                ? e.substring(1)
                : "-" + e
            : "0px";
    function FI(e) {
        if (!e) return;
        typeof e == "number" && (e = { steps: e });
        let { offsetTop: t, offsetBottom: n, steps: r, threshold: i } = e,
            o = {};
        if (((t || n) && ((o.rootMargin = `${cg(t)} 0px ${cg(n)} 0px`), (o.root = null)), r)) {
            o.threshold = [];
            for (let s = 0; s <= r; s++) o.threshold.push(s / r);
        } else i && (o.threshold = i);
    }
    function yg(e, t) {
        let [n, r] = (0, Ws.useState)(!1);
        return (
            (0, Ws.useEffect)(() => {
                if (!e) return;
                let i = e.current;
                if (i) return DI(i, r, t);
            }, [e, JSON.stringify(t)]),
            n
        );
    }
    function pc(e, t) {
        let n = yg(e, t);
        return n && n.isIntersecting;
    }
    function mc(e, t) {
        let n = Nr(e);
        (0, wg.useEffect)(() => {
            if (typeof t == "number") {
                let r = setInterval(() => n.current(), t);
                return () => clearInterval(r);
            }
        }, [t, n]);
    }
    var Us;
    function BI(e) {
        for (let t of Us) t(e);
    }
    function VI(e) {
        return (
            Us || ((Us = new Set()), document.addEventListener("click", BI, { passive: !0 })),
            () => {
                Us.delete(e);
            }
        );
    }
    function UI(e, t) {
        let n = (0, zs.useRef)(),
            r = Nr(e);
        return (
            (0, zs.useEffect)(
                () =>
                    VI((i) => {
                        let o = n.current;
                        o && !o.contains(i.target) && r.current(i);
                    }),
                t
            ),
            n
        );
    }
    var Ui = new Map(),
        Bs;
    function jI(e, t) {
        Bs ||
            (Bs = new ResizeObserver((r) => {
                for (let { target: i, contentRect: o } of r) {
                    let s = { width: o.width, height: o.height },
                        l = Ui.get(i);
                    if (l) for (let u of l) u(s);
                }
            })),
            Ui.has(e) || (Ui.set(e, new Set()), Bs.observe(e));
        let n = Ui.get(e);
        return (
            n.add(t),
            () => {
                n.delete(t), n.size || (Ui.delete(e), Bs.unobserve(e));
            }
        );
    }
    function hc(e, t) {
        let [n, r] = (0, Ar.useState)(() => {
                let o = e.current;
                return { width: o ? o.clientWidth : 0, height: o ? o.clientHeight : 0 };
            }),
            i = (0, Ar.useRef)(t);
        if (
            ((i.current = t),
            (0, Ar.useEffect)(() => {
                let o = e.current;
                if (o)
                    return jI(o, (s) => {
                        let l = i.current;
                        l ? l == null || l(s) : r(s);
                    });
            }, [e.current]),
            !t)
        )
            return n;
    }
    var WI = () => "ontouchstart" in window;
    function fg(e, t) {
        let n = t.clientX,
            r = t.clientY;
        if (e != null && e.current) {
            let { top: i, left: o } = e.current.getBoundingClientRect();
            (n -= o), (r -= i);
        }
        return { x: n, y: r };
    }
    function dg([e, t], [n, r]) {
        let i = n - e,
            o = r - t,
            s = Math.abs(i),
            l = Math.abs(o);
        return s > 30 || l > 30 ? (s > l ? (i > 0 ? "right" : "left") : o > 0 ? "down" : "up") : !1;
    }
    function zI(e, t, n) {
        let [r, i] = (0, Hs.useState)([0, 0]),
            o = Nr(n);
        (0, Hs.useEffect)(() => {
            function s(d) {
                i([d.changedTouches[0].clientX, d.changedTouches[0].clientY]);
            }
            function l(d) {
                var p;
                if (d.changedTouches && d.changedTouches.length > 0) {
                    let v = dg(r, [d.changedTouches[0].clientX, d.changedTouches[0].clientY]);
                    v && ((p = o.current) == null || p.call(o, v, d));
                }
                i([0, 0]);
            }
            function u(d) {
                let { x: p, y: v } = fg(e, d);
                i([p, v]);
            }
            function a(d) {
                var g;
                let { x: p, y: v } = fg(e, d),
                    y = dg(r, [p, v]);
                y && ((g = o.current) == null || g.call(o, y, d)), i([0, 0]);
            }
            let f = e == null ? void 0 : e.current;
            if (f && t) {
                let d = (v, y) => (
                        f == null || f.addEventListener(v, y),
                        () => (f == null ? void 0 : f.removeEventListener(v, y))
                    ),
                    p = WI()
                        ? [d("touchstart", s), d("touchend", l)]
                        : [d("mousedown", u), d("mouseup", a)];
                return () => {
                    p.forEach((v) => v());
                };
            }
        }, [e, o, t, r]);
    }
    var ji = R(N());
    var Qs = new Map();
    function gc(e, t) {
        Qs.set(e, t),
            (0, ji.useEffect)(
                () => () => {
                    Qs.delete(e);
                },
                [e]
            );
    }
    var Xs = (e, t, n) => {
            var l;
            let r = Re(),
                i = Nr(t),
                o = (r == null ? void 0 : r.virtualKey) || (r == null ? void 0 : r.key),
                s =
                    (n == null ? void 0 : n.current) ||
                    ((l = Qs.get(o || "")) == null ? void 0 : l.current);
            (0, ji.useEffect)(() => {
                if (s) {
                    let u = (a) => {
                        var f;
                        (f = i.current) == null || f.call(i, a.detail);
                    };
                    return (
                        s.addEventListener(e, u),
                        () => {
                            s.removeEventListener(e, u);
                        }
                    );
                }
            }, [s, i, e]);
        },
        HI = () => {
            let e = Re(),
                t = (e == null ? void 0 : e.virtualKey) || (e == null ? void 0 : e.key);
            return (0, ji.useCallback)(
                (n, r) => {
                    var o;
                    if (!t) return;
                    let i = (o = Qs.get(t)) == null ? void 0 : o.current;
                    i && i.dispatchEvent(new CustomEvent(n, { detail: { ...r, key: t } }));
                },
                [t]
            );
        };
    var zn = R(N());
    var QI = (e, t) => {
        let n = (0, zn.useRef)(),
            r = Re(),
            i = `${t || (r == null ? void 0 : r.type)}__${e || (r == null ? void 0 : r.key)}`;
        return A((o, s) => {
            var l;
            return (
                n.current || (n.current = (u) => s("widget-state", u, i)),
                [(l = o == null ? void 0 : o.widgetState) == null ? void 0 : l[i], n.current]
            );
        });
    };
    function ue() {
        let [e, t, n] = (0, zn.useContext)(Rr),
            r = (0, zn.useRef)(Bi(n));
        return (0, zn.useEffect)(() => e((i) => (r.current = i)), []), [r, t];
    }
    function vc(e) {
        let t = Re(),
            n = A((r) => r.shapes);
        return ie(e)
            ? t != null && t.icons
                ? t.icons[e]
                : n != null && n[e]
                ? n[e]
                : [
                      128,
                      128,
                      "M103 38.8L84 89.2h-8.6l-19-50.5h8l12.2 32.1 2.8 10.9h.5l2.8-10.9 12.2-32.1 8.1.1zM44 68.4H28v20.8h16.4V85H32.9v-4.5h10.3v-4.2H32.9v-3.5H44v-4.4zm-7.9-12.7l-1.2-4.5-4.4-12.5H25l7.5 20.8h7.3l7.5-20.8h-5.5l-4.4 12.5-1.2 4.5h-.1z",
                  ]
            : e;
    }
    function yc(e) {
        return A((n) => n.images)[e];
    }
    var Eg = R(N());
    function wc(e, t, n = ft, r, i) {
        (0, Eg.useEffect)(() => {
            let o = n instanceof Element ? n : n.current,
                s = (l) => {
                    let u = ks(e.toUpperCase(), l.target || l.srcElement);
                    u && r(l, u);
                };
            return (
                o && o.addEventListener(t, s),
                () => {
                    o && o.removeEventListener(t, s);
                }
            );
        }, i || []);
    }
    var XI = { children: [], title: "" };
    function ZI(e) {
        return A(
            ({ menus: t, primaryMenu: n }) => {
                let r = e || n;
                return (t && r && t[r]) || XI;
            },
            [e]
        );
    }
    function YI() {
        return A((e) => [e.pages, e.dir]);
    }
    function Ec(e) {
        return A((t) => t.pages).find((t) => t.key === e);
    }
    function Ic() {
        return A((e) => {
            var r;
            let t = (r = e == null ? void 0 : e.route) == null ? void 0 : r.pageKey,
                n = e.pages.find((i) => i.key === t);
            return (n == null ? void 0 : n.index) === !0;
        });
    }
    var Ig = R(N());
    function $I(e) {
        let [t, n] = ue();
        (0, Ig.useEffect)(() => {
            e &&
                (Array.isArray(e)
                    ? e.forEach((r) => {
                          Hn(r, t.current, n);
                      })
                    : Hn(e, t.current, n));
        }, [n, e, t]);
    }
    function KI() {
        return A((e) => e.route, []);
    }
    function xc(e) {
        return A(
            ({ scrollTop: t, viewport: n }) =>
                e
                    ? n.scrollHeight <= n.height
                        ? 1
                        : Math.max(0, t / (n.scrollHeight - n.height))
                    : t,
            [e]
        );
    }
    function JI() {
        return A((e) => e.viewport, []);
    }
    var vn = R(N());
    var Sc = R(N()),
        qI =
            'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>',
        ex = ({ children: e }) =>
            e ||
            Sc.default.createElement(
                "div",
                {
                    className: "fill column v-center h-center",
                    style: { position: "absolute", color: "white", background: "#222" },
                },
                Sc.default.createElement("img", { key: "img", width: "40%", src: qI })
            ),
        xg = ex;
    var Cc = R(N()),
        Sg = (e) => {
            let t = e == null ? void 0 : e.text;
            return e != null && e.html
                ? Cc.default.createElement("div", { dangerouslySetInnerHTML: { __html: t } })
                : Cc.default.createElement(e.tag, null, t);
        };
    var tx = () => {
            let [, e] = (0, vn.useState)();
            return (0, vn.useCallback)(() => e(performance.now()), []);
        },
        Tc,
        Zs = [];
    function nx(e) {
        Zs.indexOf(e) === -1 && Zs.push(e), Tc || (Tc = self.setTimeout(rx, 10));
    }
    function rx() {
        Tc = 0;
        for (let e of Zs) e();
        Zs.length = 0;
    }
    function Wi(e, t) {
        let n = A((u) => (e && u.pkg[e]) || e, [e]),
            r = tx(),
            i = (0, vn.useRef)();
        (0, vn.useEffect)(() => (n ? ge.watch(n, () => nx(r)) : () => {}), [n]);
        let o = n && ge.syncImport(n);
        o && (i.current = (e && o[e]) || o.default);
        let s = i.current;
        return s && !s.displayName && (s.displayName = e), e === "text" && t ? Sg : s || xg;
    }
    function ix() {
        return A(({ zoom: e }) => e, []);
    }
    function ox(e, t, n) {
        if (!t || !e) return new Animation();
        let r = t == null ? void 0 : t.keyframes.map((a) => ux(a, n)),
            i = lx({ ...n, id: e.id }, t == null ? void 0 : t.type, e),
            o = e.tagName === "VEV" ? e.children[0] : e,
            s = o.getAnimations(),
            l = document.querySelector(`#${e.id}c`);
        l &&
            l.classList.forEach((a) => {
                a.startsWith("init_animation") && l.classList.remove(a);
            });
        for (let a of s)
            (((t == null ? void 0 : t.type) === "in" && (a == null ? void 0 : a.id) === "out") ||
                a.playState === "finished") &&
                a.cancel();
        let u = o.animate(r, i);
        return (
            (u.id = (t == null ? void 0 : t.type) || "custom"),
            o.dispatchEvent(new CustomEvent("animationstart")),
            (u.onfinish = () => {
                o.dispatchEvent(
                    new CustomEvent("animationend", { detail: { animationType: t.type } })
                );
            }),
            u
        );
    }
    function sx(e) {
        switch (e) {
            case "in":
                return "backwards";
            case "out":
                return "forwards";
            case "highlight":
                return;
        }
    }
    var lx = (e, t, n) => {
            let r = (s) => ({
                    timeline: new window.ViewTimeline({ axis: "block", subject: n }),
                    rangeStart: {
                        rangeName: "cover",
                        offset: CSS.percent(s["animation-range-start"] || 0),
                    },
                    rangeEnd: {
                        rangeName: "cover",
                        offset: CSS.percent(s["animation-range-end"] || 100),
                    },
                }),
                i =
                    e != null && e.duration
                        ? Math.max(0, +(e == null ? void 0 : e.duration) * 1e3)
                        : 1e3,
                o = e != null && e.delay ? +(e == null ? void 0 : e.delay) * 1e3 : 0;
            return e.scroll
                ? { id: e.id, fill: "both", ...r(e) }
                : {
                      id: e.id,
                      duration: i,
                      delay: o,
                      easing: (e == null ? void 0 : e.easing) || "ease",
                      fill: sx(t),
                      iterations: e != null && e.loop ? 1 / 0 : 1,
                      direction: e != null && e.alternate ? "alternate" : "normal",
                  };
        },
        ux = (e, t) => {
            let n = Object.keys(t || {}).filter((o) => o.startsWith("--")),
                r = JSON.stringify(e),
                i = 0;
            for (; r.includes("var(") && !(i > 100); ) {
                i++;
                for (let o of n) r = r.replace(new RegExp(`var\\(${o}\\)`, "g"), t[o]);
            }
            return JSON.parse(r);
        },
        ax = ((e) => (
            (e.ON_CLICK = "onClick"),
            (e.ON_MOUSE_ENTER = "onMouseEnter"),
            (e.ON_MOUSE_LEAVE = "onMouseLeave"),
            (e.ON_MOUSE_DOWN = "onMouseDown"),
            (e.ON_MOUSE_UP = "onMouseUp"),
            (e.ON_DOUBLE_CLICK = "onDoubleClick"),
            (e.ON_TOUCH_START = "onTouchStart"),
            (e.ON_TOUCH_END = "onTouchEnd"),
            (e.ON_ANIMATION_START = "onAnimationStart"),
            (e.ON_ANIMATION_END = "onAnimationEnd"),
            e
        ))(ax || {}),
        cx = ((e) => (
            (e.ON_VISIBLE = "onVisible"), (e.ON_LEAVE = "onLeave"), (e.ON_SWIPE = "onSwipe"), e
        ))(cx || {}),
        fx = ((e) => (
            (e.ON_SCROLL = "onScroll"),
            (e.ON_TIMER = "onTimer"),
            (e.ON_KEY_DOWN = "onKeyDown"),
            (e.ON_KEY_UP = "onKeyUp"),
            (e.ON_VARIABLE_CHANGE = "onVariableChange"),
            e
        ))(fx || {}),
        dx = ((e) => (
            (e.SHOW = "SHOW"),
            (e.HIDE = "HIDE"),
            (e.STICK = "STICK"),
            (e.UNSTICK = "UNSTICK"),
            (e.TOGGLE = "TOGGLE_VISIBILITY"),
            (e.SCROLL_TO_ELEMENT = "SCROLL_TO_ELEMENT"),
            (e.OPEN_PAGE = "OPEN_PAGE"),
            (e.OPEN_URL = "OPEN_URL"),
            (e.DOWNLOAD_FILE = "DOWNLOAD_FILE"),
            (e.SEND_EMAIL = "SEND_EMAIL"),
            (e.CALL_PHONE = "CALL_PHONE"),
            (e.SEND_SMS = "SEND_SMS"),
            (e.SET_VARIABLE = "SET_VARIABLE"),
            (e.RESET_VARIABLE = "RESET_VARIABLE"),
            (e.TRACK = "TRACK"),
            (e.SHARE = "SHARE"),
            (e.ANIMATE = "ANIMATE"),
            (e.CHANGE_VARIANT = "CHANGE_VARIANT"),
            (e.TOGGLE_VARIANT = "TOGGLE_VARIANT"),
            e
        ))(dx || {}),
        px = ((e) => (
            (e.POINTER_EVENT = "pointer-event"),
            (e.SCROLL = "scroll"),
            (e.GLOBAL = "global"),
            (e.KEYBOARD = "keyboard"),
            e
        ))(px || {});
    var mx = ((e) => (
            (e.ELEMENT = "element"),
            (e.INSTANCE = "instance"),
            (e.PAGE = "page"),
            (e.EXTERNAL = "external"),
            (e.VARIABLE = "variable"),
            (e.TRACKING = "tracking"),
            e
        ))(mx || {}),
        Ys = {
            element: [
                "SHOW",
                "HIDE",
                "STICK",
                "UNSTICK",
                "TOGGLE_VISIBILITY",
                "SCROLL_TO_ELEMENT",
                "ANIMATE",
            ],
            page: [
                "OPEN_PAGE",
                "OPEN_URL",
                "DOWNLOAD_FILE",
                "SEND_EMAIL",
                "CALL_PHONE",
                "SEND_SMS",
            ],
            external: ["OPEN_URL", "SEND_EMAIL", "SHARE"],
            variable: ["SET_VARIABLE", "RESET_VARIABLE"],
            tracking: ["TRACK"],
            instance: ["CHANGE_VARIANT", "TOGGLE_VARIANT"],
        };
    var _g = (e) => {
        switch (e) {
            case "onDoubleClick":
                return "dblclick";
        }
        return e.slice(2).toLowerCase();
    };
    function hx(e, t, n, r) {
        return `${r ? r + "." : ""}${e}.${t}${n ? "|" + gx(n) : ""}`;
    }
    function gx(e = {}) {
        return Object.keys(e)
            .map((t) => `${t}:${e[t]}`)
            .join("|");
    }
    function vx(e) {
        return e
            ? Ys.page.includes(e) ||
                  Ys.external.includes(e) ||
                  Ys.tracking.includes(e) ||
                  Ys.variable.includes(e)
            : !1;
    }
    function Ac(e, t) {
        let n = e.classList,
            r = n.contains("__hide"),
            i = e.clientWidth === 0 && e.clientHeight === 0;
        switch (t) {
            case "SHOW":
                n.remove("__hide"), n.add("__show");
                return;
            case "HIDE":
                n.remove("__show"), n.add("__hide");
                return;
            case "TOGGLE_VISIBILITY":
                Ac(e, r || i ? "SHOW" : "HIDE");
                return;
            default:
        }
    }
    function Mg(e) {
        e.classList.remove("__show", "__hide");
    }
    function Cg(e, t, n) {
        let r = e == null ? void 0 : e.classList;
        switch (t) {
            case "STICK":
                r == null || r.add("__sticky"), (e.style.top = `${n || 0}px`);
                return;
            case "UNSTICK":
                r == null || r.remove("__sticky"), e.style.removeProperty("top");
                return;
            default:
        }
    }
    var _r = [],
        bc;
    function wn(...e) {
        window.__vevInteractionDebug && console.log(...e);
    }
    function Gg(e, ...t) {
        window.__vevInteractionDebug &&
            (_r.push(t),
            bc && clearTimeout(bc),
            (bc = self.setTimeout(() => {
                if (_r.length !== 0) {
                    if (_r.length === 1) return console.log(..._r[0]);
                    console.groupCollapsed(e),
                        _r.forEach((n) => console.log(...n)),
                        console.groupEnd(),
                        (_r.length = 0);
                }
            }, 100)));
    }
    var Lc = 10,
        Pg = new Map(),
        Dg = new Map(),
        zi;
    function yx(e, t, n) {
        let r = Math.floor(Math.max(e, Lc) / Lc),
            i = t ? Dg : Pg,
            o = i.get(r);
        return (
            o || ((o = new Set()), i.set(r, o), zi || wx()),
            o.add(n),
            () => {
                o.delete(n),
                    wn(
                        `\u{1F570}\uFE0F Removed callback from timeslot:${r} remaining in slot:${o.size}`
                    ),
                    o.size === 0 && i.delete(r),
                    i.size === 0 && Ex();
            }
        );
    }
    function wx() {
        wn("\u23F0 Starting timer!");
        let e = 1;
        zi = self.setInterval(() => {
            Tg(e, Dg, !0), Tg(e, Pg), e++;
        }, Lc);
    }
    function Tg(e, t, n = !1) {
        t.forEach((r, i) => {
            if (e % i === 0) {
                for (let o of r) o();
                n && t.delete(i);
            }
        });
    }
    function Ex() {
        zi && (wn("\u23F0 Stopping timer!"), clearInterval(zi), (zi = void 0));
    }
    var Ix = {
        "==": (e, t) => e == t,
        "!=": (e, t) => e != t,
        ">": (e, t) => e > t,
        "<": (e, t) => e < t,
        ">=": (e, t) => e >= t,
        "<=": (e, t) => e <= t,
        IN: (e, t) => t.includes(e),
        "NOT IN": (e, t) => !t.includes(e),
        LIKE: (e, t) => new RegExp(t).test(e),
        "NOT LIKE": (e, t) => !new RegExp(t).test(e),
        BETWEEN: (e, t) => e >= t[0] && e <= t[1],
        "NOT BETWEEN": (e, t) => e < t[0] || e > t[1],
        "IS NULL": (e) => e === null,
        "IS NOT NULL": (e) => e !== null,
    };
    function xx(e, t, n) {
        let r = [],
            i;
        for (let o = 0; o < e.length; o++) {
            let s = e[o];
            if (s === "AND" || s === "OR") i = s;
            else {
                let l = Sx([e[o], e[o + 1], e[o + 2]], t, n);
                if (i === "AND") {
                    let u = r.pop();
                    u !== void 0 && r.push(u && l);
                } else r.push(l);
                o = o + 2;
            }
        }
        return r.reduce((o, s) => o || s);
    }
    function Sx(e, t, n) {
        let r = Rc(e[0], t, n),
            i = Rc(e[2], t, n);
        return Ix[e[1]](r, i);
    }
    function Rc(e, t, n) {
        var r, i, o;
        if (typeof e == "string") {
            if (t[e] !== void 0) return t[e];
            let s = (r = n == null ? void 0 : n.systemVariables) == null ? void 0 : r[e];
            if (s !== void 0) return s;
            if (e.startsWith("{{")) {
                let u = e.substring(2, e.length - 2);
                return (o =
                    (i = n == null ? void 0 : n.requestVariable) == null ? void 0 : i.call(n, u)) !=
                    null
                    ? o
                    : "";
            }
            let l = parseFloat(e.replace('"', ""));
            if (l) return l;
        }
        return Array.isArray(e) ? e.flatMap((s) => Rc(s, t, n)) : e;
    }
    var Cx = class {
        constructor(e, t) {
            Xt(this, "nodeCache", new Map());
            Xt(this, "observer");
            Xt(this, "listeners", new Map());
            (this.rootNode = e), (this.vevNodeSelector = t);
        }
        getInScope(e, t, n) {
            var i;
            if (t) {
                let o = `#${e}, ${this.vevNodeSelector}.${e}`;
                if (n) {
                    let l = t.closest(this.vevNodeSelector + "." + n);
                    if (l) {
                        if (l.matches(o)) return l;
                        let u = l.querySelector(o);
                        if (u instanceof HTMLElement) return u;
                    }
                    return;
                }
                let s = t.closest(o);
                if (s instanceof HTMLElement) return s;
                for (; t; ) {
                    let l = t.querySelector(o);
                    if (l instanceof HTMLElement) return l;
                    t = (i = t.parentElement) == null ? void 0 : i.closest(this.vevNodeSelector);
                }
            }
            let r = this.root.querySelector("#" + e);
            if (r instanceof HTMLElement) return r;
        }
        watch(e, t) {
            let n = this.getCache(e);
            n != null && n.size && n.forEach((i) => t(i, !1));
            let r = this.listeners.get(e);
            return (
                r || ((r = new Set()), this.listeners.set(e, r)),
                r.add(t),
                this.observer || this.init(),
                () => {
                    r == null || r.delete(t),
                        (r == null ? void 0 : r.size) === 0 &&
                            (this.listeners.delete(e), this.nodeCache.delete(e));
                }
            );
        }
        destroy() {
            var e;
            (e = this.observer) == null || e.disconnect(),
                delete this.observer,
                this.nodeCache.clear(),
                this.listeners.clear();
        }
        getCache(e) {
            let t = this.nodeCache.get(e);
            return t || ((t = this.find(e)), this.nodeCache.set(e, t)), t;
        }
        get root() {
            return this.rootNode.getRootNode();
        }
        emit(e, t, n) {
            let r = this.listeners.get(e);
            if (r != null && r.size) for (let i of r) i(t, n);
        }
        init() {
            (this.observer = new MutationObserver((e) => {
                for (let { addedNodes: t, removedNodes: n, type: r } of e)
                    if (t.length > 0 || n.length > 0 || r === "attributes")
                        return this.updateCache();
            })),
                this.observer.observe(this.rootNode, {
                    childList: !0,
                    subtree: !0,
                    attributeFilter: ["class"],
                });
        }
        updateCache() {
            for (let [e, t] of this.nodeCache) this.update(e, t);
        }
        update(e, t) {
            let n = this.find(e);
            for (let r of t) n.has(r) || (t.delete(r), this.emit(e, r, !0));
            for (let r of n) t.has(r) || (t.add(r), this.emit(e, r, !1));
            return t;
        }
        find(e, t) {
            let n = t ? `.${t} ` : "";
            e = `${n}#${e}, ${n}${this.vevNodeSelector}.${e}`;
            let r = this.root.querySelectorAll(e),
                i = new Set();
            return (
                r.forEach((o) => {
                    o instanceof HTMLElement && i.add(o);
                }),
                i
            );
        }
    };
    function En(e, t) {
        wn("\u{1F525} " + e, t), window.dispatchEvent(new CustomEvent("@@vev." + e, { detail: t }));
    }
    var bg = (e, t, n, r) => {
            if (!r) return () => {};
            let i = r.tagName === "VEV" ? r.children[0] : r,
                o = _g(t),
                s = (l) => {
                    En(e, {
                        type: l.type,
                        target: l.target,
                        animationType: l.detail.animationType,
                        currentTarget: l.currentTarget,
                    });
                };
            return i.addEventListener(o, s), () => i.removeEventListener(o, s);
        },
        Tx = (e, t, n, r) => {
            let i = (s) => {
                    var u, a;
                    let l = !0;
                    if (n)
                        for (let f in n) {
                            let d = n[f],
                                p =
                                    (a = (u = s.detail[f]) == null ? void 0 : u.toString) == null
                                        ? void 0
                                        : a.call(u);
                            if (d !== p) {
                                l = !1;
                                break;
                            }
                        }
                    l && En(e, { ...s.detail, currentTarget: r });
                },
                o = r || window;
            return o.addEventListener(t, i), () => o.removeEventListener(t, i);
        },
        bx = {
            ShiftLeft: "Shift",
            ShiftRight: "Shift",
            ControlLeft: "Control",
            ControlRight: "Control",
            AltLeft: "Alt",
            AltRight: "Alt",
        },
        Og = (e, t, n) => {
            let r = t === "onKeyDown" ? "keydown" : "keyup",
                i = (o) => {
                    En(e, { type: o.type, key: bx[o.code] || o.code });
                };
            return (
                window.addEventListener(r, i, { passive: !0 }),
                () => window.removeEventListener(r, i)
            );
        },
        yn = (e, t, n, r) => {
            if (!r) return () => {};
            let i = r.tagName === "VEV" ? r.children[0] : r,
                o = _g(t),
                s = (l) => {
                    En(e, { type: l.type, target: l.target, currentTarget: l.currentTarget });
                };
            return i.addEventListener(o, s), () => i.removeEventListener(o, s);
        },
        Ox = (e) => {
            let t = () => {
                let n = Math.trunc(
                    ((window.scrollY + window.innerHeight) / document.body.scrollHeight) * 100
                );
                En(e, {
                    type: "onScroll",
                    args: {
                        scrollTop: window.scrollY,
                        scrollHeight: document.body.scrollHeight,
                        height: window.innerHeight,
                        percentage: n,
                    },
                });
            };
            return (
                window.addEventListener("scroll", t, { passive: !0 }),
                () => window.removeEventListener("scroll", t)
            );
        },
        kx = () => (
            console.warn("TODO createSwipeTrigger \u{1FAE1}"),
            () => {
                console.log("UNsubscribe swipe trigger");
            }
        ),
        Lx = (e, t, n) => {
            let r = (n == null ? void 0 : n.delay) || 0,
                i = (n == null ? void 0 : n.runOnce) || !1;
            return yx(r, i, () => En(e, n));
        },
        Rx = (e, t, n, r) => {
            if (!r) return () => {};
            let i = (o) => {
                var a;
                let { key: s, value: l, prevValue: u } = o.detail;
                (((a = n == null ? void 0 : n.variable) != null && a.includes(s)) ||
                    !(n != null && n.variable)) &&
                    En(e, { variable: s, value: l, prevValue: u });
            };
            return (
                r.addEventListener("vev.variable.change", i),
                () => r.removeEventListener("vev.variable.change", i)
            );
        },
        $s = new Map();
    function Nx(e) {
        return e ? `${e.offsetTop}-${e.offsetBottom}-${e.threshold || e.steps || 0}` : "0";
    }
    function Ax(e, t, n) {
        let r = Nx(n);
        $s.has(r) ||
            $s.set(r, {
                observer: new IntersectionObserver((l) => {
                    l.forEach((u) => {
                        var d;
                        let { target: a } = u,
                            f = (d = $s.get(r)) == null ? void 0 : d.listeners.get(a);
                        f && f.forEach((p) => p(u));
                    });
                }, _x(n)),
                listeners: new Map(),
            });
        let { observer: i, listeners: o } = $s.get(r);
        o.has(e) || (o.set(e, new Set()), i.observe(e));
        let s = o.get(e);
        return (
            s.add(t),
            () => {
                s.delete(t), s.size || (o.delete(e), i.unobserve(e));
            }
        );
    }
    var kg = (e) =>
        typeof e == "number"
            ? e * -1 + "px"
            : e
            ? e.charAt(0) === "-"
                ? e.substring(1)
                : "-" + e
            : "0px";
    function _x(e) {
        if (!e) return;
        typeof e == "number" && (e = { steps: e });
        let { offsetTop: t, offsetBottom: n, steps: r, threshold: i } = e,
            o = {};
        if (((t || n) && ((o.rootMargin = `${kg(t)} 0px ${kg(n)} 0px`), (o.root = null)), r)) {
            o.threshold = [];
            for (let s = 0; s <= r; s++) o.threshold.push(s / r);
        } else i && (o.threshold = i.map((s) => Math.min(s, 1)));
        return o;
    }
    var Lg = (e, t, n, r) => {
            if (!r) return () => {};
            let i = !1,
                o = Ax(
                    r,
                    (s) => {
                        let l = s.isIntersecting ? "onVisible" : "onLeave";
                        (!i && !s.isIntersecting) ||
                            ((i = !0),
                            t === l &&
                                (En(e, { currentTarget: r }), n != null && n.runOnce && o()));
                    },
                    { threshold: n != null && n.threshold ? [n.threshold] : void 0 }
                );
            return o;
        },
        Mx = {
            onClick: yn,
            onMouseEnter: yn,
            onMouseLeave: yn,
            onMouseDown: yn,
            onMouseUp: yn,
            onDoubleClick: yn,
            onTouchStart: yn,
            onTouchEnd: yn,
            onAnimationStart: bg,
            onAnimationEnd: bg,
            onLeave: Lg,
            onVisible: Lg,
            onSwipe: kx,
            onKeyDown: Og,
            onKeyUp: Og,
            onScroll: Ox,
            onTimer: Lx,
            onVariableChange: Rx,
        };
    function Rg(e, t, n, r) {
        var o;
        let i =
            ((o = n == null ? void 0 : n.map) == null
                ? void 0
                : o.call(n, ([s, l, u]) => Gx(e, t, s, u, r, l))) || [];
        return () => i.forEach((s) => s());
    }
    function Gx(e, t, n, r, i, o) {
        let s = Mx[n] || Tx,
            l = `${e}.${hx(t, n, r, o)}`;
        return (
            Gg("\u{1F477}\u200D\u2640\uFE0F Init triggers", `\u{1F52B} setting up trigger ${l}`),
            s(l, n, r, i)
        );
    }
    var Px = /^{{(.*?)}}$/;
    function Dx(e) {
        return (
            e instanceof Element ||
            e instanceof Node ||
            e instanceof HTMLElement ||
            e instanceof Document ||
            e instanceof DocumentFragment
        );
    }
    function Nc(e, t) {
        let { requestVariable: n } = t;
        if (!n || Dx(e)) return e;
        if (typeof e == "string")
            e = e.replace(Px, (r, i) => {
                i = i.trim();
                let o = n(i);
                return o !== void 0 ? o : r;
            });
        else if (Array.isArray(e)) e = e.map((r) => Nc(r, t));
        else if (typeof e == "object" && e !== null) {
            let r = e;
            e = {};
            for (let i in r) e[i] = Nc(r[i], t);
        }
        return e;
    }
    var Fx = ({ args: e }, { animations: t }, n) => {
            if (!e || !n) return () => {};
            let r = t == null ? void 0 : t[e.animation],
                i;
            return (
                r
                    ? (i = ox(n, r, e))
                    : console.log(`Missing animation ${e == null ? void 0 : e.animation}`),
                Ac(n, "SHOW"),
                () => {
                    var o;
                    (o = i == null ? void 0 : i.cancel) == null || o.call(i), Mg(n);
                }
            );
        },
        Qn = ({ type: e, args: t, node: n }, r, i, o) => {
            var l, u, a;
            if (
                (o == null ? void 0 : o.tagName) === "A" ||
                ((u = (l = o == null ? void 0 : o.children) == null ? void 0 : l[0]) == null
                    ? void 0
                    : u.tagName) === "A"
            )
                return () => {};
            let s = Bx(e, n, t);
            return (
                s &&
                    (s != null && s.download && s.href
                        ? window.location.assign(s.href)
                        : s.href
                        ? window.open(
                              s.href,
                              s.target || "_self",
                              (a = s.rel) == null ? void 0 : a.join(",")
                          )
                        : (s.pageKey || s.widgetKey) &&
                          window.dispatchEvent(
                              new CustomEvent("vev.navigate.internal", { detail: s })
                          )),
                () => {}
            );
        };
    function Bx(e, t, n) {
        var r, i;
        switch (e) {
            case "CALL_PHONE":
                return { href: `tel:${n == null ? void 0 : n.number}` };
            case "SEND_SMS":
                return { href: `sms:${n == null ? void 0 : n.number}` };
            case "SEND_EMAIL":
                return {
                    href: `mailto:${n == null ? void 0 : n.email}${
                        n != null && n.subject ? `?subject=${n.subject}` : ""
                    }`,
                };
            case "DOWNLOAD_FILE": {
                if (!((r = n == null ? void 0 : n.file) != null && r.url)) return;
                let o = { href: (i = n == null ? void 0 : n.file) == null ? void 0 : i.url };
                return (
                    n != null && n.fileName && (o.download = n.fileName),
                    (n == null ? void 0 : n.action) === "newTab" && (o.target = "_blank"),
                    (n == null ? void 0 : n.action) === "newTab" &&
                        (o.rel = ["noopener", "noreferrer"]),
                    o
                );
            }
            case "SCROLL_TO_ELEMENT":
                return { widgetKey: t };
            case "OPEN_PAGE":
                return { pageKey: t, target: n != null && n.newTab ? "_blank" : "_self" };
            case "OPEN_URL": {
                let o = {
                    href: n == null ? void 0 : n.url,
                    target:
                        n != null && n.targetTop
                            ? "_top"
                            : n != null && n.newTab
                            ? "_blank"
                            : "_self",
                };
                n != null && n.queryParams && (o.queryParams = !0);
                let s = [];
                return (
                    n != null && n.safelink && s.push("noopener", "noreferrer"),
                    s.length && (o.rel = s),
                    o
                );
            }
        }
        return { href: "#" };
    }
    var Vx = ({ type: e, args: t }) => (
        Ux({
            title: (t == null ? void 0 : t.title) || document.title,
            text: (t == null ? void 0 : t.text) || document.title,
            url: (t == null ? void 0 : t.url) || window.location.href,
        }),
        () => {}
    );
    async function Ux(e) {
        try {
            wn("\u{1F680} Sharing", e), await navigator.share(e);
        } catch (t) {
            await navigator.clipboard.writeText(e.url);
        }
    }
    var Ng = ({ type: e, args: t }, n, r) =>
            r
                ? (Cg(r, e, (t == null ? void 0 : t.offset) || 0),
                  () => {
                      Cg(r, "UNSTICK");
                  })
                : () => {},
        Gr = ((e) => (
            (e.projectLoad = "VEV_PROJECT_LOAD"),
            (e.pageLoad = "VEV_PAGE_LOAD"),
            (e.linkClick = "VEV_LINK_CLICK"),
            (e.videoPlay = "VEV_VIDEO_PLAY"),
            (e.videoStop = "VEV_VIDEO_STOP"),
            (e.videoProgress = "VEV_VIDEO_PROGRESS"),
            e
        ))(Gr || {}),
        _c = (e, t, n) => {
            window.dispatchEvent(
                new CustomEvent("vev.track", { detail: { type: e, data: t, metaData: n } })
            );
        },
        jx = ({ args: e = {}, type: t }, { page: n, project: r }, i, o) => {
            let { event: s } = e || {};
            return (
                s &&
                    _c(t, e, {
                        projectKey: r,
                        pageKey: n,
                        timestamp: Date.now(),
                        contentKey: o == null ? void 0 : o.id,
                    }),
                () => {}
            );
        },
        Ag = ({ type: e, args: t, node: n }, r) => (
            r.rootNode.dispatchEvent(
                new CustomEvent("vev.variable.set", { detail: { ...t, key: n } })
            ),
            () => {}
        ),
        Oc = ({ type: e }, t, n) => (n ? (Ac(n, e), () => Mg(n)) : () => {}),
        Wx = {
            SHOW: Oc,
            HIDE: Oc,
            TOGGLE_VISIBILITY: Oc,
            STICK: Ng,
            UNSTICK: Ng,
            SCROLL_TO_ELEMENT: Qn,
            OPEN_PAGE: Qn,
            OPEN_URL: Qn,
            DOWNLOAD_FILE: Qn,
            SEND_EMAIL: Qn,
            CALL_PHONE: Qn,
            SEND_SMS: Qn,
            SET_VARIABLE: Ag,
            RESET_VARIABLE: Ag,
            TRACK: jx,
            SHARE: Vx,
            ANIMATE: Fx,
            CHANGE_VARIANT: void 0,
            TOGGLE_VARIANT: void 0,
        };
    function Fg(e, t, n, r, i) {
        let { type: o, condition: s } = e,
            l = Wx[o],
            u = Nc({ ...i, ...e.args }, t),
            a = (s == null ? void 0 : s.expression) && xx(s.expression, i || {}, t);
        return s != null && s.expression && !a
            ? s.else
                ? Fg(s.else, t, n, r, u)
                : () => {}
            : l
            ? l({ ...e, args: u }, t, n, r)
            : (n &&
                  (wn(`\u{1F578}\uFE0F Custom event:${e.type} \u{1F525} on node`, n, u),
                  n.dispatchEvent(new CustomEvent(e.type, { detail: u }))),
              () => {});
    }
    var zx = typeof window < "u" && window.__vevInitInteractionsNode,
        kc = new Map(),
        Mc =
            zx ||
            ((e) => {
                e.debug && (window.__vevInteractionDebug = e.debug),
                    wn(
                        "\u2139\uFE0F Disable interaction debugging by setting window.__vevInteractionDebug = false"
                    );
                let t = kc.get(e.rootNode);
                return (
                    t && t.destroy(),
                    (t = new Hx(e)),
                    kc.set(e.rootNode, t),
                    wn("\u{1F680} Interaction scope initialized", t),
                    window.__vevInteractionScopes || (window.__vevInteractionScopes = []),
                    window.__vevInteractionScopes.push(t),
                    () => {
                        t == null || t.destroy(), kc.delete(e.rootNode);
                    }
                );
            });
    typeof window < "u" && (window.__vevInitInteractionsNode = Mc);
    var Mr,
        Hx =
            ((Mr = class {
                constructor(t) {
                    Xt(this, "subscriptions", new Set());
                    Xt(this, "scopeId", Mr.nextScopeId);
                    Xt(this, "domScope");
                    (this.scope = t),
                        (this.domScope = new Cx(t.rootNode, t.vevNodeSelector || "vev")),
                        Object.entries(t.interactions.trigger).forEach(this.initTrigger.bind(this)),
                        Object.entries(t.interactions.event).forEach(this.initTarget.bind(this)),
                        this.scope.systemVariableSub &&
                            this.scope.systemVariableSub(this.updateSystemVariables.bind(this));
                }
                destroy() {
                    this.domScope.destroy(), this.subscriptions.forEach((t) => t());
                }
                updateSystemVariables(t) {
                    this.scope.systemVariables = t;
                }
                initTrigger([t, n]) {
                    if (t === "global")
                        this.subscriptions.add(Rg(this.scopeId, t, n, this.scope.rootNode));
                    else {
                        let r = new Map(),
                            i = this.domScope.watch(t, (o, s) => {
                                let l = r.get(o);
                                if ((l && l(), !s)) {
                                    let u = Rg(this.scopeId, t, n, o);
                                    r.set(o, u), this.subscriptions.add(u);
                                }
                            });
                        this.subscriptions.add(i);
                    }
                }
                initTarget([t, n]) {
                    let r = `@@vev.${this.scopeId}.${t}`,
                        i = (o) => {
                            var l, u, a;
                            let s;
                            ((l = o.detail) == null ? void 0 : l.currentTarget) instanceof
                                HTMLElement &&
                                (s = (u = o.detail) == null ? void 0 : u.currentTarget);
                            for (let f of n) {
                                let d = vx(f.type),
                                    p = d ? void 0 : this.domScope.getInScope(f.node, s, f.scope);
                                (p || d) &&
                                    this.subscriptions.add(
                                        Fg(
                                            f,
                                            this.scope,
                                            p,
                                            (a = o.detail) == null ? void 0 : a.currentTarget,
                                            o.detail
                                        )
                                    );
                            }
                        };
                    Gg("\u{1F3AF} Init target", `Adding listener ${t}`),
                        window.addEventListener(r, i),
                        this.subscriptions.add(() => window.removeEventListener(r, i));
                }
            }),
            Xt(Mr, "nextScopeId", 1),
            Mr);
    function Hi(e = !1) {
        let [t] = ue();
        return (n, r = {}) => {
            if (!n || e) return;
            let i = {
                projectKey: t.current.project || "no-project",
                pageKey: t.current.route.pageKey,
                timestamp: Date.now(),
            };
            _c(n, r, i);
        };
    }
    var Qx = (0, Bg.createContext)(void 0),
        Fe = Re;
    var Ks = (0, In.createContext)(null);
    function Vg({ variantKey: e, children: t }) {
        let n = (0, In.useContext)(Ks),
            r = Fe(e || ""),
            i = (0, In.useMemo)(() => {
                let o = { ...(n || {}), ...((r == null ? void 0 : r.overrides) || {}) };
                for (let s in o)
                    (n || {})[s] && (o[s] = { ...(n == null ? void 0 : n[s]), ...o[s] });
                return o;
            }, [n, r]);
        return In.default.createElement(Ks.Provider, { value: i }, t);
    }
    var Ug = (0, Q.createContext)(null),
        Gc = (0, Q.createContext)({ key: "" }),
        Pc = (0, Q.createContext)(null),
        Dc = (0, Q.createContext)({}),
        Qi = ({ value: e, children: t }) => {
            let n = e.master;
            return ie(n)
                ? Q.default.createElement(
                      Vg,
                      { variantKey: e.variant },
                      Q.default.createElement(
                          Gc.Provider,
                          { value: e },
                          Q.default.createElement(
                              Xx,
                              { overrides: e.childContent || {}, instanceKey: e.key, masterKey: n },
                              t
                          )
                      )
                  )
                : Q.default.createElement(Gc.Provider, { value: e }, t);
        };
    function jg({ models: e, children: t }) {
        let n = (0, Q.useMemo)(() => ug(e), [e]);
        return Q.default.createElement(Ug.Provider, { value: n }, t);
    }
    function Xx({ overrides: e, masterKey: t, instanceKey: n, children: r }) {
        let i = (0, Q.useContext)(Pc),
            o = (0, Q.useMemo)(() => {
                let s = (i == null ? void 0 : i.instanceKeyChain.slice()) || [];
                s.unshift(n);
                let l = (i == null ? void 0 : i.overrides) || {},
                    u = { ...e };
                for (let a in l) u[a] ? (u[a] = { ...u[a], ...l[a] }) : (u[a] = l[a]);
                return { masterKey: t, instanceKey: n, instanceKeyChain: s, overrides: u };
            }, [t, n, i, e]);
        return Q.default.createElement(Pc.Provider, { value: o }, r);
    }
    function Re(e, t) {
        var y;
        let n = (0, Q.useContext)(Ug),
            r = (0, Q.useContext)(Gc),
            i = (0, Q.useContext)(Pc),
            o = n == null ? void 0 : n[e || ""],
            s =
                n == null
                    ? void 0
                    : n[
                          ((y = o == null ? void 0 : o.master) == null ? void 0 : y.toString()) ||
                              ""
                      ],
            l = e || (r == null ? void 0 : r.key) || "",
            u = i == null ? void 0 : i.instanceKeyChain,
            a = (0, Q.useContext)(Ks),
            f = (0, Q.useContext)(Dc),
            d = (0, Q.useMemo)(
                () => (!(u != null && u.length) || !e || u.includes(e) ? e : `${e}-${u.join("-")}`),
                [e, u]
            ),
            p = n == null ? void 0 : n[t || (o == null ? void 0 : o.variant) || ""],
            v = (0, Q.useMemo)(() => {
                var g;
                return (g = p == null ? void 0 : p.overrides) == null
                    ? void 0
                    : g[(s == null ? void 0 : s.key) || l];
            }, [s, p, l]);
        return (0, Q.useMemo)(() => {
            var I, T, x, C, M, O, _;
            if (!e) return { ...r };
            let g = (i == null ? void 0 : i.instanceKeyChain) || [],
                E = [i == null ? void 0 : i.overrides[e]],
                h = [
                    v,
                    a == null ? void 0 : a[(s == null ? void 0 : s.key) || ""],
                    a == null ? void 0 : a[e],
                ];
            s != null && s.key && ((I = h[1]) == null || delete I.children);
            for (let V = 0; V < g.length - 1; V++) {
                let k = `${e}-${g.slice(0, V + 1).join("-")}`;
                i != null &&
                    i.overrides[k] &&
                    E.push((T = i == null ? void 0 : i.overrides) == null ? void 0 : T[k]);
            }
            let c = Ds(h.concat(E));
            if (s || !Fi(c)) {
                let V = [];
                if (
                    (c != null && c.type ? V.push(c.type) : o != null && o.type && V.push(o.type),
                    c != null && c.master ? V.push(c.master) : s && V.push(s.key),
                    c != null && c.preset
                        ? V.push(c.preset)
                        : o != null && o.preset && V.push(o.preset),
                    !Fi(c == null ? void 0 : c.childContent) &&
                        !Fi(o == null ? void 0 : o.childContent))
                )
                    for (let _t in c.childContent)
                        c.childContent[_t] = Ds([
                            (x = o == null ? void 0 : o.childContent) == null ? void 0 : x[_t],
                            c.childContent[_t],
                        ]);
                t && (c.variant = t === "default" ? void 0 : t);
                let k = (c == null ? void 0 : c.actions) || (o == null ? void 0 : o.actions),
                    D =
                        (c == null ? void 0 : c.children) ||
                        (s == null ? void 0 : s.children) ||
                        (o == null ? void 0 : o.children) ||
                        [],
                    gt = {
                        ...(s == null ? void 0 : s.content),
                        ...(o == null ? void 0 : o.content),
                        ...(c == null ? void 0 : c.content),
                        children:
                            ((C = c == null ? void 0 : c.content) == null ? void 0 : C.children) ||
                            ((M = o == null ? void 0 : o.content) == null ? void 0 : M.children) ||
                            [],
                    },
                    vt = {
                        ...(s == null ? void 0 : s.attrs),
                        ...(o == null ? void 0 : o.attrs),
                        ...(c == null ? void 0 : c.attrs),
                    };
                return {
                    ...s,
                    ...o,
                    ...c,
                    attrs: vt,
                    children: D,
                    content: gt,
                    virtualKey: d,
                    fromModel: e,
                    cl: V.join(" "),
                    actions: k != null && k.length ? k : void 0,
                };
            } else if (i)
                return {
                    ...o,
                    fromModel: e,
                    key: d,
                    actions:
                        (O = o == null ? void 0 : o.actions) != null && O.length
                            ? o == null
                                ? void 0
                                : o.actions
                            : void 0,
                };
            let [m, w] = sc(o == null ? void 0 : o.content, f);
            return (
                o && {
                    ...o,
                    content: m,
                    variablesApplied: w,
                    actions:
                        (_ = o == null ? void 0 : o.actions) != null && _.length
                            ? o == null
                                ? void 0
                                : o.actions
                            : void 0,
                }
            );
        }, [e, o, i, r, s, a, v, d, f, t]);
    }
    var ve = {},
        Fc = {},
        Wg = [];
    le.vevStates = ve;
    le.dispatch = {};
    var qs = {
        project: void 0,
        root: null,
        scaling: !1,
        embed: !1,
        scrollTop: Un(),
        device: "desktop",
        masterMode: "desktop",
        zoom: 1,
        viewport: { width: le.innerWidth, height: le.innerHeight, scrollHeight: 0 },
        images: {},
        shapes: {},
        models: [],
        pages: [],
        interactions: { event: {}, trigger: {} },
        animations: {},
        variables: [],
        overrideVariables: {},
        pkg: {},
        menus: {},
        primaryMenu: void 0,
        pkgStores: {},
        route: { pageKey: "" },
        widgetStorage: {},
        rightPanelTab: void 0,
        settings: {
            devices: [
                { mode: "desktop", columnSize: 1024, canvasSize: [1440, 900] },
                { mode: "tablet", columnSize: 768, canvasSize: [768, 1024] },
                { mode: "mobile", columnSize: 320, canvasSize: [375, 667] },
            ],
        },
    };
    function Zx(e) {
        var n;
        let t = (n = eg()) == null ? void 0 : n.id;
        el((r, i, o, s) => {
            if (s === t) {
                let l = s ? r.pkgStores[s] || {} : {},
                    u = e(l, i, o);
                return l !== u && s ? { ...r, pkgStores: { ...r.pkgStores, [s]: u } } : r;
            }
            return r;
        });
    }
    function el(e) {
        Wg.push(e);
    }
    function Bi(e) {
        return e ? ve[e] : ve[Object.keys(ve)[0]];
    }
    function Bc(e) {
        var t, n;
        for (let r in ve) {
            let i = ve[r];
            i.project === e.project &&
                (Object.assign(i, {
                    models: qx(i.models, e.models),
                    images: { ...i.images, ...e.images },
                    shapes: { ...i.shapes, ...e.shapes },
                    pkg: { ...i.pkg, ...e.pkg },
                    interactions: eS(i.interactions, e.interactions),
                }),
                (n = (t = Fc[r]).current) == null || n.call(t));
        }
    }
    var Rr = (0, Ne.createContext)([() => () => {}, () => {}, ""]);
    function Xi({ state: e, children: t }) {
        let n = (0, Ne.useRef)(),
            r = (0, Ne.useRef)([]),
            i = (0, Ne.useRef)(),
            o = (0, Ne.useRef)(() => {
                i.current ||
                    (i.current = self.setTimeout(() => {
                        var s;
                        i.current = 0;
                        for (let l of r.current) {
                            let u = (s = n.current) == null ? void 0 : s[2];
                            u && l(ve[u]);
                        }
                    }, 1));
            });
        if (!n.current) {
            let s = lc();
            (r.current = [Kx]),
                (ve[s] = { ...qs, ...e }),
                (Fc[s] = o),
                (n.current = [
                    (l) => (
                        r.current.indexOf(l) === -1 && r.current.push(l),
                        l(ve[s]),
                        () => {
                            let a = r.current.indexOf(l);
                            a !== -1 && r.current.splice(a, 1);
                        }
                    ),
                    (l, u, a) => {
                        if (typeof l == "object") (ve[s] = { ...ve[s], ...l }), o.current();
                        else
                            for (let f of Wg) {
                                let d = ve[s],
                                    p = f(d, l, u, a);
                                p && d !== p && ((ve[s] = p), o.current());
                            }
                    },
                    s,
                ]),
                (le.dispatch[s] = n.current[1]);
        }
        return Ne.default.createElement(
            Rr.Provider,
            { value: n.current },
            Ne.default.createElement($x, null, Ne.default.createElement(Yx, null, t))
        );
    }
    function Yx({ children: e }) {
        let t = A((n) => n.models);
        return Ne.default.createElement(jg, { models: t }, e);
    }
    function $x({ children: e }) {
        let [t, n] = A((i) => [i.variables, i.overrideVariables]),
            r = (0, Ne.useMemo)(
                () => ({ ...t.reduce((i, o) => ((i[o.key] = o.value), i), {}), ...n }),
                [t, n]
            );
        return Ne.default.createElement(Dc.Provider, { value: r }, e);
    }
    var Js = [];
    function Kx(e) {
        for (let t of Js) t(e);
    }
    function Jx(e, t) {
        if ((console.warn("The store function is deprecated"), t && El(t))) {
            let n = Object.keys(ve)[0],
                r = n && ve[n][e];
            t(r);
            let i = (o) => {
                n || (n = Object.keys(ve)[0]);
                let s = o[e];
                s !== r && ((r = s), t(s));
            };
            return (
                Js.push(i),
                () => {
                    let o = Js.indexOf(i);
                    Js.splice(o, 1);
                }
            );
        }
    }
    function qx(e, t) {
        let n = {};
        for (let r of e) n[r.key] = r;
        for (let r of t) n[r.key] = r;
        return Object.values(n);
    }
    function eS(e, t) {
        let n = { event: {}, trigger: {}, ...e };
        return (
            t != null && t.event && (n.event = { ...n.event, ...t.event }),
            t != null && t.trigger && (n.trigger = { ...n.trigger, ...t.trigger }),
            n
        );
    }
    var tS = /\/{2,}/g,
        Vc = /\/$/,
        zg = /^\//,
        Uc = {},
        Pr = {},
        tl = {};
    Bn && Yg();
    function Xg(e) {
        Uc[e] = !0;
    }
    var Zg = (e, t) => {
        t
            ? (document.body.appendChild(e), t.insertAdjacentElement("afterend", e.cloneNode(!0)))
            : document.body.appendChild(e);
    };
    function jc(e, t, n) {
        let r = n.find((s) => s.key === t);
        r != null && r.is404 && (r.path = "404");
        let i = ((r == null ? void 0 : r.path) || "").replace("/index.html", "");
        return e
            .replace(new RegExp(`(${i}|${encodeURIComponent(i)})/?(index.html)?$`), "")
            .replace(/(^\/|\/$)/g, "");
    }
    function nl(e = "", t, n) {
        (e = e.replace(new RegExp(`^\\/?${mt(n || "")}?`), "")), (e = Hg(mt(e)));
        let r = t.find((i) => i.index) || t[0];
        if (!e || e === mt(n || "")) return r.key;
        for (let i of t) {
            if (e.replace(/^\//, "") === i.key) return i.key;
            let o = e.indexOf(i.path),
                s = Hg(i.path || "");
            if ((o !== -1 && e === s) || Qg(i.path) === Qg(e)) return i.key;
        }
    }
    var Hg = (e) => e.replace(/(^\/)|(\/$)/g, ""),
        Qg = (e) => e.replace(/^\/|\/$/g, ""),
        nS = (...e) => {
            let t = "/" + e[0].replace(zg, "").replace(Vc, "");
            for (let n = 1; n < e.length; n++) t += "/" + e[n].replace(zg, "").replace(Vc, "");
            return (t = t.replace(Vc, "")), t.endsWith(".html") || (t += "/"), t;
        };
    function mt(e) {
        let t = e
            ? e
                  .replace(/^\./, "")
                  .replace(/(\?|#).*$/, "")
                  .replace(tS, "/")
                  .replace(/(?!^\/)\/$/, "")
            : "";
        return /\.\w+$/.test(t) || t.endsWith("/") ? t : t + "/";
    }
    function Xn(e, t, n) {
        let r = t.find((i) => i.key === e) || rS(t);
        return r ? mt(nS("/", mt(n), r.path || "")) : "";
    }
    function rS(e) {
        return e.find((t) => t.is404);
    }
    async function Hn(e, t, n) {
        if (!e) return;
        if (t.editor) return n("load-page", e);
        if (Uc[e] || t.models.find((i) => i.key === e)) return;
        Uc[e] = !0;
        let r;
        if (t.pageApiUrl)
            ({ state: r } = await iS(
                `https://${t.pageApiUrl}/${t.project}/${e}?type=json`,
                t.root
            ));
        else {
            let { host: i, dir: o } = t,
                s = (i || o || "").replace(/\/+$/, "") + Xn(e, t.pages);
            !s.startsWith("/") && !t.resolveIndex && (s = "/" + s),
                t.resolveIndex && !s.endsWith(".html") && (s = s + "index.html");
            let l;
            t.replaceAssetsPaths && (l = ((t == null ? void 0 : t.host) || "") + "assets/"),
                t.localAssets &&
                    !t.replaceAssetsPaths &&
                    !t.customAssetPath &&
                    (l =
                        (!o || o === "/" ? "" : o != null && o.startsWith("/") ? o : `/${o}`) +
                        "/assets/"),
                t.customAssetPath &&
                    (t.replaceAssetsPaths &&
                        console.warn("Don't mix customAssetPath with replaceAssetsPaths!"),
                    (l = void 0)),
                ({ state: r } = await Wc(
                    s,
                    l,
                    t.root,
                    s === (t == null ? void 0 : t.host) + "index.html"
                ));
        }
        r && Bc(r);
    }
    async function Wc(e, t, n, r) {
        if (
            (!/\.[a-z]+$/i.test(e) && !e.endsWith("/") && !e.endsWith("index.html") && (e += "/"),
            !Pr[e])
        ) {
            let i = e;
            location.search && (i += location.search),
                (Pr[e] = fetch(i).then(async (o) => {
                    var E, h;
                    let s = await o.text(),
                        l = document.createElement("div");
                    l.innerHTML = s;
                    let u = l.querySelector("vevroot"),
                        a = l.querySelector(".vev-style"),
                        f =
                            (E = l.querySelector('script[type="text/vev"]')) == null
                                ? void 0
                                : E.textContent,
                        d = [],
                        p = l.querySelectorAll(".vev-dep");
                    Yg(e, l),
                        e === location.pathname &&
                            document.title !== ((h = tl[mt(e)]) == null ? void 0 : h.title) &&
                            rl(e);
                    for (let c = 0; c < p.length; c++) {
                        let m = p.item(c),
                            w = sS(m) && m.getAttribute("src");
                        w && !w.endsWith("/vev.js") && d.push(w);
                    }
                    let v = (c) => {
                            if (r) return c.replaceAll("assets/", t || "");
                            let m = /\.?\.?(\/\.\.)*\/?assets\//g;
                            return c.replace(m, t || "");
                        },
                        y = f ? JSON.parse(t ? v(f) : f) : null;
                    a && (t && (a.innerText = v(a.innerText)), Zg(a, n));
                    let g = y == null ? void 0 : y.project;
                    return (
                        document.querySelectorAll(`.p${g}`).forEach((c) => {
                            c.shadowRoot && c.shadowRoot.appendChild(a.cloneNode(!0));
                        }),
                        {
                            html: (u == null ? void 0 : u.innerHTML) || "",
                            state: y,
                            scripts: d,
                            style: a,
                        }
                    );
                }));
        }
        return Pr[e];
    }
    async function iS(e, t) {
        return (
            Pr[e] ||
                (Pr[e] = fetch(e).then(async (n) => {
                    let r = await n.json();
                    oS(e, r.title);
                    let i = document.createElement("style");
                    return (
                        r.css && ((i.innerText = r.css), document.body.appendChild(i)),
                        Zg(i, t),
                        { html: r.html, state: r.json, scripts: r.scripts, style: r.css }
                    );
                })),
            Pr[e]
        );
    }
    function Yg(e = location.pathname, t = document.head) {
        var n;
        tl[mt(e)] = {
            title: ((n = t.querySelector("title")) == null ? void 0 : n.innerText) || "",
            meta: t.querySelectorAll("meta"),
        };
    }
    function oS(e = location.pathname, t) {
        tl[mt(e)] = { title: t, meta: document.head.querySelectorAll("meta") };
    }
    function rl(e = location.pathname) {
        let t = tl[mt(e)];
        if (t) {
            document.title = t.title;
            let n = document.head.querySelectorAll("meta");
            for (let r = 0; r < t.meta.length; r++) document.head.appendChild(t.meta.item(r));
            for (let r = 0; r < n.length; r++) n.item(r).remove();
        }
    }
    function sS(e) {
        return e.tagName === "SCRIPT";
    }
    function lS(e) {
        return Object.prototype.hasOwnProperty.call(qs, e);
    }
    el((e, t, n, r) => {
        if (t === "set-route-path") {
            let i = nl(n, e.pages, e.dir);
            if (i) return { ...e, route: { pageKey: i } };
        }
        return t === "set-root"
            ? { ...e, root: n }
            : t === "update-viewport"
            ? { ...e, viewport: { height: Mi(), width: Gi(), scrollHeight: Vn() } }
            : t === "widget-state"
            ? { ...e, widgetState: { ...(e == null ? void 0 : e.widgetState), [r]: n } }
            : t === "widget-content"
            ? {
                  ...e,
                  models: e.models.map((i) =>
                      i.key !== n.modelKey ? i : { ...i, content: { ...i.content, ...n.content } }
                  ),
              }
            : t === "reset-overrides"
            ? { ...e, tmpOverrides: {} }
            : lS(t) && e[t] !== n
            ? { ...e, [t]: n }
            : e;
    });
    var q = R(N());
    var Hc = R(N());
    var uS = 800,
        aS = F.documentElement || F.scrollingElement || ft || {},
        $g = typeof navigator != "undefined" ? navigator.userAgent.toLowerCase() : "",
        Zn = (e) => $g.indexOf(e) > -1,
        cS,
        zc = class {
            constructor() {
                this.width = le.innerWidth;
                this.height = le.innerHeight;
                this.autoMode = !0;
                this.mode = "desktop";
                this.scrollTop = 0;
                this.scrollHeight = 0;
                this.scrollDir = 1;
                this.rootNodeOffsetTop = 0;
                this.zoom = 1;
                this.isIOS = /ipad|iphone|ipod/i.test($g) && !le.MSStream;
                this.isAndroid = Zn("android");
                this.isFirefox = Zn("firefox");
                this.isEdge = Zn("edge");
                this.isIE = Zn("msie ") || Zn("trident/");
                this.isChrome = Zn("chrome") && !this.isEdge;
                this.isSafari = Zn("safari/") && !this.isChrome;
                this.isOpera = typeof le.opr != "undefined";
                this.root = F.body;
                this.scrollEl = aS;
                this.updateSize = () => {
                    (this.height = Mi()),
                        (this.width = Gi()),
                        (this.scrollHeight = Vn()),
                        (cS = self.setTimeout(this.updateSize, 600));
                };
                this.updateOffsetTop = (t) => {
                    this.rootNodeOffsetTop = t;
                };
                this.handleScroll = () => {
                    let t = Un();
                    t !== this.scrollTop &&
                        ((this.scrollDir = t < this.scrollTop ? -1 : 1), (this.scrollTop = t));
                };
                this.handleResize = () => {
                    this.updateSize();
                };
                "createElement" in F &&
                    ((this.scrollTop = this.scrollEl.scrollTop),
                    this.updateSize(),
                    le.addEventListener("resize", this.handleResize, { passive: !0 }),
                    le.addEventListener("scroll", this.handleScroll, { passive: !0 }));
            }
            get percentY() {
                return this.scrollTop / (this.scrollHeight - this.height);
            }
            get isMobile() {
                return this.mode === "mobile";
            }
            get isTablet() {
                return this.mode === "tablet";
            }
            get isDesktop() {
                return this.mode === "desktop";
            }
            setScrollTop(t) {
                window.scrollTo(0, t);
            }
            setMode(t) {
                this.mode !== t && (this.mode = t);
            }
            update() {
                this.updateSize();
            }
            getElCenteringPos(t, n) {
                if ((typeof t == "string" && (t = _i(t, n)), !t)) return 0;
                let { top: r, height: i } = t.getBoundingClientRect();
                return r - Math.max(0, this.height / 2 - i / 2);
            }
            scrollTo(t, n, r, i) {
                if (ie(t)) return this.scrollToWidget(t, i, n);
                he.remove("html, body");
                let o = Math.abs(t - this.scrollTop);
                return !r && n
                    ? (this.setScrollTop(t), Promise.resolve())
                    : he({
                          targets: "html, body",
                          scrollTop: [this.scrollTop, t],
                          easing: "easeOutQuart",
                          duration: (r || 0) * 1e3 || Math.min((o / uS) * 1e3, 1e3),
                      }).finished;
            }
            async scrollToWidget(t, n, r = !1, i = 20) {
                let o = _i(t, n);
                if (!o) {
                    for (
                        let l = 0;
                        l < i &&
                        ((o = await new Promise((u) => setTimeout(() => u(_i(t, n)), 25))), !o);
                        l++
                    );
                    if (!o) return;
                }
                let s = o.classList.contains("__s") || o.classList.contains("__p");
                o.scrollIntoView({
                    behavior: r ? "instant" : "smooth",
                    block: s ? "start" : "center",
                });
            }
        },
        Z = new zc();
    var il = R(N());
    function Kg() {
        let e = (0, il.useRef)(() => {});
        return (
            A((t) => {
                e.current({
                    "vev/width": t.viewport.width,
                    "vev/height": t.viewport.height,
                    "vev/device": t.device,
                    "vev/scrollPixelsY": t.scrollTop,
                    "vev/scrollPercentageY": Math.trunc(
                        ((t.scrollTop + t.viewport.height) / t.viewport.scrollHeight) * 100
                    ),
                });
            }),
            (0, il.useCallback)((t) => {
                e.current = t;
            }, [])
        );
    }
    function Jg(e, t, n = !1) {
        let r = Kg(),
            [i, o] = ue(),
            [s, l] = A((d) => {
                var p;
                return [d.route.pageKey, (p = d.editor) == null ? void 0 : p.disabled];
            }, []),
            a = !!Re(s),
            f = i.current.project;
        (0, Hc.useEffect)(() => {
            let d = e.current;
            if (a && d && f && !l) {
                let { interactions: p, animations: v, route: y } = i.current;
                return Mc({
                    interactions: p,
                    page: y.pageKey,
                    project: f,
                    animations: v,
                    rootNode: d,
                    requestVariable(g) {
                        return t.get(g);
                    },
                    debug: n,
                    systemVariableSub: r,
                });
            }
        }, [s, i, a, f, l, e, n, t, r]),
            (0, Hc.useEffect)(() => {
                window.addEventListener("vev.navigate.internal", (d) => {
                    let { pageKey: p, widgetKey: v } = d.detail;
                    p && o("route", { pageKey: p }), v && Z.scrollTo(v);
                });
            });
    }
    var qg = (e, { target: t, rel: n } = {}, r) => {
        if (!location.host && !r) return null;
        let i,
            o = window.location.search;
        if ((e.includes("?") && (o = o.replace("?", "&")), e.includes("#"))) {
            let [l, u] = e.split("#");
            i = l + o + "#" + u;
        } else i = e + o;
        let s = (n || "")
            .split(" ")
            .filter((l) => !["external", "sponsored", "nofollow"].includes(l))
            .join(",");
        return window.open(i, t || "_self", s);
    };
    var sl = R(N());
    var Y = R(N());
    var Rt = R(N());
    function fS({ id: e, children: t, hostRef: n }) {
        let r = Fe(e),
            i = Wi(r == null ? void 0 : r.type);
        if (!r || !r.type || !i || r.deleted) return Rt.default.createElement(Rt.Fragment, null, t);
        let o = "__a " + r.type;
        return (
            r.cl && (o += " " + r.cl),
            Rt.default.createElement(
                Qi,
                { value: r },
                Rt.default.createElement(
                    i,
                    { ...r.content, className: o, id: r.key, hostRef: n },
                    t
                )
            )
        );
    }
    function ol({ addons: e, hostRef: t, children: n }) {
        return !e || !e.length
            ? Rt.default.createElement(Rt.Fragment, null, n)
            : Rt.default.createElement(
                  fS,
                  { id: e[0], hostRef: t },
                  Rt.default.createElement(ol, { addons: e.slice(1), hostRef: t }, n)
              );
    }
    var Zi = R(N()),
        Yi = class extends Zi.PureComponent {
            constructor() {
                super(...arguments);
                this.state = { error: !1 };
            }
            static getDerivedStateFromError(n) {
                return { error: n, errorTime: Date.now() };
            }
            static getDerivedStateFromProps(n, { errorTime: r }) {
                return Date.now() - (r != null ? r : 0) > 3e3 ? { error: !1 } : !1;
            }
            render() {
                let { error: n } = this.state;
                return n
                    ? Zi.default.createElement(
                          "div",
                          { className: "row v-center h-center __err" },
                          "Error: ",
                          Zi.default.createElement("b", null, n.message)
                      )
                    : this.props.children;
            }
        };
    function Qc({ id: e, section: t, fixed: n, className: r }) {
        var h, c, m, w, I, T, x;
        let [i, o] = (0, Y.useState)(),
            { disabled: s } = Vi(),
            l = Fe(e, i),
            u = Wi(l == null ? void 0 : l.type, l == null ? void 0 : l.variablesApplied),
            a = Y.default.useRef(null),
            f = (l == null ? void 0 : l.virtualKey) || (l == null ? void 0 : l.key) || e,
            d = i || (l == null ? void 0 : l.variant);
        if (
            ((0, Y.useEffect)(() => {
                s && i && o(void 0);
            }, [s, i]),
            gc(f, a),
            Xs("CHANGE_VARIANT", ({ variant: C }) => o(C || "default"), a),
            Xs(
                "TOGGLE_VARIANT",
                ({ variant: C }) => {
                    o(d === C ? "default" : C);
                },
                a
            ),
            !l || !l.type)
        )
            return null;
        let p = "__" + l.type + (r ? " " + r : ""),
            v = l.type;
        l.cl && (v += " " + l.cl), s && (v += " __disabled");
        let y = "__c",
            g = { id: f + "c", className: v };
        if (
            (ie(l.master)
                ? ((p += ` ${l.master}`), (g.className += ` ${l.master}`))
                : l.master && (p += ` ${f}`),
            d && d !== "default" && ((g.className += ` ${d}`), (p += ` ${d}`)),
            l.fromModel && ((g.className += ` ${l.fromModel}`), (p += ` ${l.fromModel}`)),
            n && (p += " __f"),
            t ? ((p += " __s"), (y += " __sc")) : (l.html || (u && u.static)) && (p += " __pre"),
            l.html && (g.dangerouslySetInnerHTML = { __html: "" }),
            l.type === "frame" && !t)
        )
            return (
                (g.className += " __wc __c"),
                Y.default.createElement(
                    Qi,
                    { value: l },
                    Y.default.createElement(
                        "vev",
                        { id: f, className: p, ref: a },
                        Y.default.createElement(
                            ol,
                            { addons: l.actions, hostRef: a },
                            Y.default.createElement(
                                ((h = l.attrs) == null ? void 0 : h.tag) || "div",
                                {
                                    ...g,
                                    ...(l.attrs || {}),
                                    tabIndex:
                                        ((c = l.attrs) == null ? void 0 : c.tabIndex) !== void 0
                                            ? l.attrs.tabIndex
                                            : l.hasFocusedState
                                            ? 0
                                            : void 0,
                                },
                                Y.default.createElement(
                                    Y.default.Fragment,
                                    null,
                                    (m = l.children) == null
                                        ? void 0
                                        : m.map((C) =>
                                              Y.default.createElement(Qc, { key: C, id: C })
                                          )
                                )
                            )
                        )
                    )
                )
            );
        let E = Y.default.createElement(
            "w",
            g,
            l.html || !u
                ? void 0
                : Y.default.createElement(u, { section: t, ...l.content, hostRef: a })
        );
        return Y.default.createElement(
            "vev",
            {
                id: f,
                className: p,
                ref: a,
                key: f + ((w = l.actions) == null ? void 0 : w.join()) || "",
            },
            Y.default.createElement(
                Yi,
                null,
                Y.default.createElement(
                    ((I = l.attrs) == null ? void 0 : I.tag) || "div",
                    { className: "__wc", ...(l.attrs || {}) },
                    Y.default.createElement(
                        ol,
                        { addons: l.actions, hostRef: a },
                        Y.default.createElement(
                            Qi,
                            { value: l },
                            E && (l.pin ? Y.default.createElement(dS, { hostRef: a }, E) : E),
                            (t || (((T = l.children) == null ? void 0 : T.length) || 0) > 0) &&
                                Y.default.createElement(
                                    "div",
                                    { className: y },
                                    (x = l.children) == null
                                        ? void 0
                                        : x.map((C) =>
                                              Y.default.createElement(Qc, { key: C, id: C })
                                          )
                                )
                        )
                    )
                )
            )
        );
    }
    var xn = Qc;
    function dS({ hostRef: e, children: t }) {
        let n = pc(e);
        return Y.default.createElement("div", { className: n ? "__pc" : "__pre__pc" }, t);
    }
    function pS({ pageKey: e }) {
        let t = Fe("fixed") || {};
        if (!e || !t) return null;
        let { children: n = [], visibility: r = {} } = t;
        return sl.default.createElement(
            "div",
            { className: "fixed" },
            n
                .filter((i) => {
                    let o = r[i] || !0;
                    return typeof o == "object" ? o[e] === !0 : o === !0;
                })
                .map((i) => sl.default.createElement(xn, { key: i, id: i, fixed: !0 }))
        );
    }
    var ll = sl.default.memo(pS);
    var Qe = R(N());
    var ev = R(N());
    var Xc = (e, t) => {
        if (e) {
            let { body: n, documentElement: r } = e.ownerDocument;
            t
                ? ((n.style["scroll-snap-type"] = "y mandatory"),
                  (n.style["scroll-behavior"] = "smooth"),
                  (n.style.height = "100%"),
                  (n.style.overflow = "auto"),
                  (r.style.height = "100%"),
                  (r.style.overflow = "clip"))
                : ((n.style["scroll-snap-type"] = "unset"),
                  (n.style["scroll-behavior"] = "unset"),
                  (n.style.height = "unset"),
                  (n.style.overflow = "unset"),
                  (r.style.height = "unset"),
                  (r.style.overflow = "unset"));
        }
    };
    function tv(e) {
        let { disabled: t } = Vi();
        (0, ev.useEffect)(() => {
            if (t) return Xc(document.scrollingElement, !1);
            Xc(document.scrollingElement, e);
        }, [e, t]);
    }
    function nv(e, t, n, r = "header") {
        return !t || !n
            ? []
            : t.filter((i) => {
                  let o = n[i] || {};
                  return (typeof o == "string" && o === r) || (typeof o == "object" && o[e] === r);
              });
    }
    function mS({ id: e, className: t, active: n, ...r }, i) {
        var y;
        let o = Fe(e),
            s = Ec(e),
            l = Hi(),
            u = Fe("fixed") || {},
            a = nv(e, u.children, u.visibility, "header"),
            f = nv(e, u.children, u.visibility, "footer"),
            [d, p] = ue(),
            v = s == null ? void 0 : s.scrollSnap;
        return (
            tv(!!v),
            (0, Qe.useEffect)(() => {
                o || Hn(e, d.current, p);
            }, [o, e, d, p, l]),
            (0, Qe.useEffect)(() => {
                var g;
                l(Gr.pageLoad, {
                    pageKey: e,
                    pageName:
                        (g = d.current.pages.find((E) => E.key === e)) == null ? void 0 : g.title,
                    projectKey: d.current.project,
                    breakpoint: d.current.device,
                });
            }, []),
            Qe.default.createElement(
                "div",
                { className: "__p" + (t ? " " + t : ""), id: e, ref: i },
                a.length > 0 &&
                    Qe.default.createElement(
                        "header",
                        null,
                        a == null
                            ? void 0
                            : a.map((g, E) =>
                                  Qe.default.createElement(xn, {
                                      key: E,
                                      id: g,
                                      section: !0,
                                      className: v ? "__snap" : "",
                                  })
                              )
                    ),
                Qe.default.createElement(
                    "main",
                    null,
                    (y = o == null ? void 0 : o.children) == null
                        ? void 0
                        : y.map((g, E) =>
                              Qe.default.createElement(xn, {
                                  key: E,
                                  id: g,
                                  section: !0,
                                  className: v ? "__snap" : "",
                              })
                          )
                ),
                f.length > 0 &&
                    Qe.default.createElement(
                        "footer",
                        null,
                        f.map((g, E) =>
                            Qe.default.createElement(xn, {
                                key: E,
                                id: g,
                                section: !0,
                                className: v ? "__snap" : "",
                            })
                        )
                    )
            )
        );
    }
    var $i = Qe.default.memo(Qe.default.forwardRef(mS));
    var nt = R(N());
    function hS(e, t) {
        return e.find((n, r, i) => t >= n.columnSize || r === i.length - 1) || e[0];
    }
    function gS({ children: e, style: t }, n) {
        let r = (0, nt.useRef)(document.body),
            [i, o, s, l, u, a] = A((g) => [
                g.project,
                g.editor,
                g.settings,
                g.device,
                g.variables,
                g.models,
            ]),
            [f, d] = ue(),
            p = (0, nt.useRef)(-1);
        p.current === -1 && (p.current = Os.scrollHeight);
        let v = (0, nt.useRef)(-1);
        v.current === -1 && (v.current = Os.scrollTop);
        let y = () => {
            let g = Vn();
            g !== p.current && ((p.current = g), (Z.scrollHeight = g), d("update-viewport"));
        };
        return (
            hc(r, y),
            mc(y, 500),
            (0, nt.useEffect)(() => {
                let g = () => d("update-viewport"),
                    E = () => {
                        let h = Un();
                        d("scrollTop", h);
                    };
                return (
                    g(),
                    self.addEventListener("resize", g, { passive: !0 }),
                    self.addEventListener("scroll", E, { passive: !0 }),
                    () => {
                        self.removeEventListener("resize", g),
                            self.removeEventListener("scroll", E);
                    }
                );
            }, [s]),
            (0, nt.useEffect)(() => {
                if (!i || (o != null && o.disabled) || (o != null && o.preRender)) return;
                let g;
                function E() {
                    var m;
                    if (!g) {
                        g = document.createElement("style");
                        let w = (m = n.current) == null ? void 0 : m.getRootNode();
                        w instanceof ShadowRoot ? w.appendChild(g) : document.body.appendChild(g);
                    }
                    return g;
                }
                let h,
                    c = new ResizeObserver((m) => {
                        let { width: w } = m[0] && m[0].contentRect,
                            { settings: I, device: T, editor: x } = f.current;
                        if ((x != null && x.disabled) || (x != null && x.preRender)) return;
                        let C = hS(I.devices, w);
                        C.mode !== T && d("device", C.mode);
                        let M = C.columnSize,
                            O = C.scaling,
                            _ = C.gutter || 0,
                            V = M + _ * 2,
                            k = Math.round((w / V) * 100) / 100;
                        if ((!O && k > 1 && (k = 1), h === k)) return;
                        (Z.zoom = h = k), d("zoom", k);
                        let D = `${Math.round((k === 1 ? 0.99 : k) * 100)}%`;
                        E().innerText =
                            `.p${i} .__p,.p${i} .__f{-webkit-text-size-adjust: ${D};-ms-text-size-adjust: ${D};-moz-text-size-adjust: ${D};text-size-adjust: ${D};` +
                            (k !== 1 ? `zoom: ${k};` : "") +
                            (k !== 1 ? `-moz-transform: scale(${k});` : "") +
                            "}";
                    });
                return (
                    n.current && c.observe(n.current),
                    () => {
                        c.disconnect(), g.remove();
                    }
                );
            }, [i, o == null ? void 0 : o.disabled]),
            (0, nt.useLayoutEffect)(() => {
                var E;
                let g = ["__vev", "p" + i, l];
                Z.isIOS && g.push("ios"),
                    Z.isAndroid && g.push("android"),
                    Z.isIE && g.push("ie"),
                    Z.isChrome && g.push("chrome"),
                    Z.isFirefox && g.push("firefox"),
                    Z.isOpera && g.push("opera"),
                    Z.isEdge ? g.push("edge") : Z.isSafari && g.push("safari"),
                    (E = n.current) == null || E.setAttribute("class", g.join(" "));
            }, [i, l]),
            nt.default.createElement("div", { className: "p" + i + " __vev", style: t, ref: n }, e)
        );
    }
    var Zc = nt.default.forwardRef(gS);
    function ul(e) {
        return [
            "sqrt",
            "sin",
            "cos",
            "acos",
            "asin",
            "tan",
            "atan",
            "random",
            "log",
            "round",
        ].includes(e);
    }
    function Yc(e) {
        if (!e) return !1;
        let t = e.charCodeAt(0);
        return t >= 48 && t <= 57;
    }
    function rv(e) {
        if (!e) return !1;
        let t = e.charCodeAt(0);
        return (t >= 65 && t <= 90) || (t >= 97 && t <= 122) || e === "_" || e === "-";
    }
    function iv(e) {
        return ["+", "-", "*", "/", "^"].includes(e);
    }
    function ov(e) {
        return e === "(" || e === ")";
    }
    var vS = class {
            constructor() {
                (this.expression = ""), (this.currentIndex = 0), (this.variableScope = {});
            }
            init(e, t) {
                (this.expression = e), (this.currentIndex = 0), (this.variableScope = t);
            }
            prev() {
                return this.expression[this.currentIndex - 1];
            }
            curr() {
                return this.expression[this.currentIndex];
            }
            peekNext() {
                return this.expression[this.currentIndex + 1];
            }
            next() {
                return (this.currentIndex += 1), this.expression[this.currentIndex - 1];
            }
            *[Symbol.iterator]() {
                for (; !this.done(); )
                    if (this.curr() === " ") this.next();
                    else if (Yc(this.curr())) yield { type: 0, value: this.handleNumber() };
                    else if (iv(this.curr()))
                        this.curr() === "-" &&
                        (this.currentIndex === 0 || iv(this.prev()) || ov(this.prev()))
                            ? yield { type: 0, value: this.handleNumber() }
                            : yield { type: 1, value: this.next() };
                    else if (rv(this.curr())) yield this.handleString();
                    else if (ov(this.curr())) yield { type: 2, value: this.next() };
                    else throw Error(`Unknown symbol ${this.curr()}`);
            }
            done() {
                return this.currentIndex === this.expression.length;
            }
            handleNumber() {
                let e = "";
                for (; Yc(this.curr()) || this.curr() === "." || this.curr() === "-"; )
                    e += this.next();
                return parseFloat(e);
            }
            handleString() {
                let e = "";
                for (
                    ;
                    (rv(this.curr()) || Yc(this.curr())) &&
                    ((e += this.next()), !this.variableScope[e]);

                );
                if (ul(e)) return { type: 3, value: e };
                if (this.variableScope[e] === void 0) throw new Error(`No variable ${e}`);
                return { type: 0, value: this.variableScope[e] };
            }
        },
        yS = {
            "+": (e, t) => e + t,
            "-": (e, t) => e - t,
            "*": (e, t) => e * t,
            "/": (e, t) => e / t,
            "^": (e, t) => Math.pow(e, t),
        },
        wS = {
            sqrt: Math.sqrt,
            sin: Math.sin,
            cos: Math.cos,
            acos: Math.acos,
            asin: Math.asin,
            tan: Math.tan,
            atan: Math.atan,
            log: Math.log,
            round: Math.round,
        },
        al = { "+": 1, "-": 1, "*": 2, "/": 2, "^": 3 },
        ES = { "+": 0, "-": 0, "*": 0, "/": 0, "^": 1 };
    function Ki(e) {
        return ["+", "-", "*", "/", "^"].includes(e);
    }
    function IS(e, t) {
        if (!Ki(e)) throw new Error();
        if (!Ki(t)) throw new Error();
        return al[e] > al[t];
    }
    function xS(e, t) {
        if (!Ki(e)) throw new Error();
        if (!Ki(t)) throw new Error();
        return al[e] === al[t];
    }
    function SS(e) {
        if (!Ki(e)) throw new Error();
        return ES[e];
    }
    function $c(e, t) {
        let n = e.pop(),
            r = t.pop(),
            i = t.pop();
        if (!i && r && n === "-") {
            t.push(r * -1);
            return;
        }
        if (!n || r === void 0 || i === void 0) throw new Error("Invalid expression");
        t.push(yS[n](i, r));
    }
    function Kc(e, t) {
        let n = e.pop();
        if (!n) throw new Error("Invalid function");
        if (n === "random") {
            t.push(Math.random());
            return;
        }
        let r = wS[n],
            i = t.pop();
        if (!i) throw new Error("No function call value");
        t.push(r(i));
    }
    var sv = new vS();
    function CS(e, t) {
        sv.init(e, t);
        let n = [],
            r = [];
        for (let i of sv)
            switch (i.type) {
                case 0:
                    r.push(i.value);
                    break;
                case 3:
                    n.push(i.value);
                    break;
                case 1:
                    for (
                        ;
                        n.length &&
                        n[n.length - 1] !== "(" &&
                        (IS(n[n.length - 1], i.value) ||
                            (xS(n[n.length - 1], i.value) && SS(i.value) === 0));

                    )
                        $c(n, r);
                    n.push(i.value);
                    break;
                case 2:
                    if (i.value === "(") n.push(i.value);
                    else if (i.value === ")") {
                        for (; n[n.length - 1] !== "("; ) ul(n[n.length - 1]) ? Kc(n, r) : $c(n, r);
                        n.pop(), ul(n[n.length - 1]) && Kc(n, r);
                    }
                    break;
            }
        for (; n.length; ) ul(n[n.length - 1]) ? Kc(n, r) : $c(n, r);
        if (r.length !== 1) throw new Error("Invalid expression");
        return r[0];
    }
    var lv = class {
        constructor(e = {}) {
            (this.initialVars = {}),
                (this.values = {}),
                (this.handleEventSet = (t) => {
                    let { key: n, value: r, unit: i } = t.detail;
                    r === void 0 ? this.resetVariable(n) : this.set(n, r, i);
                }),
                (this.values = e),
                this.log("Initialized VariableManager");
        }
        setRoot(e) {
            this.destroy(),
                (this.rootNode = e),
                e.addEventListener("vev.variable.set", this.handleEventSet);
        }
        destroy() {
            var e;
            (e = this.rootNode) == null ||
                e.removeEventListener("vev.variable.set", this.handleEventSet);
        }
        resetVariable(e) {
            var r;
            delete this.values[e];
            let { value: t, unit: n } = this.initialVars[e];
            (this.values[e] = t),
                this.initialVars[e].type !== "text" &&
                    ((r = this.rootNode) == null ||
                        r.style.setProperty(
                            `--vev-${e}`,
                            t !== void 0 || t !== null ? `${t}${n || ""}` : ""
                        ));
        }
        reset() {
            for (let e in this.values) delete this.values[e];
            for (let e in this.initialVars) this.resetVariable(e);
        }
        setInitialVars(e) {
            (this.initialVars = e.reduce((t, n) => ((t[n.key] = n), t), {})), this.reset();
        }
        set(e, t, n) {
            var s;
            let r = this.initialVars[e];
            if (!r) return;
            r.type === "number" && (t = t === void 0 ? r.value : CS(t, this.values));
            let i = n || r.unit;
            this.log(`\u270F\uFE0F set variable ${e}:${JSON.stringify(`${t}${i || ""}`)}`);
            let o = this.values[e];
            o !== t &&
                ((this.values[e] = t),
                r.type !== "text" &&
                    ((s = this.rootNode) == null ||
                        s.style.setProperty(
                            `--vev-${e}`,
                            t !== void 0 || t !== null ? `${t}${i || ""}` : ""
                        )),
                this.emit({ ...r, value: t, prevValue: o }));
        }
        get(e) {
            return this.values[e];
        }
        emit(e) {
            var t;
            (t = this.rootNode) == null ||
                t.dispatchEvent(new CustomEvent("vev.variable.change", { detail: e }));
        }
        log(...e) {
            window.vevVariableDebug && console.log("\u{1F7E2} VariableManager | ", ...e);
        }
    };
    var cl = R(N());
    function uv(e, t = !1) {
        let [n] = ue(),
            r = (0, cl.useMemo)(() => new lv(), []),
            [i, o, s] = A((l, u) => {
                var a;
                return [l.variables, (a = l.editor) == null ? void 0 : a.disabled, u];
            }, []);
        return (
            (0, cl.useEffect)(() => {
                let l = e.current;
                if (l && i.length) {
                    r.setRoot(l), (window.vevVariableDebug = t), r.setInitialVars(i);
                    let u = {},
                        a = (f) => {
                            let { key: d, value: p } = f.detail;
                            (u = { ...u, [d]: p }), s("overrideVariables", u);
                        };
                    return (
                        l.addEventListener("vev.variable.change", a),
                        () => {
                            l.removeEventListener("vev.variable.change", a),
                                r.destroy(),
                                s("overrideVariables", {});
                        }
                    );
                }
            }, [i, o, e, t, n, s, r]),
            r
        );
    }
    var av = { x: 0, y: 0, opacity: 1, scale: 1 };
    function TS() {
        let [e, t] = (0, q.useState)(0),
            [n, r] = ue(),
            [i, o] = A((c) => [c.route, c.viewport], []),
            s = (0, q.useRef)(null),
            l = (0, q.useRef)(null),
            u = (0, q.useRef)(null),
            a = (0, q.useRef)(),
            f = (0, q.useRef)(""),
            d = (0, q.useRef)(!1),
            { pageKey: p, widgetKey: v, transition: y } = i || {},
            g = y ? y.toPageKey : p,
            E = uv(s);
        Jg(s, E);
        let h = Hi();
        return (
            (0, q.useLayoutEffect)(() => {
                var c;
                r("set-root", (c = s.current) != null ? c : null);
            }, [r, n, h]),
            (0, q.useEffect)(() => {
                var c;
                h(Gr.projectLoad, {
                    projectKey: n.current.project,
                    breakpoint: (c = n.current) == null ? void 0 : c.device,
                });
            }, []),
            (0, q.useEffect)(() => {
                let c = (m) => {
                    (a.current = !0), r("set-route-path", location.pathname), rl(location.pathname);
                };
                return (
                    window.addEventListener("popstate", c),
                    () => window.removeEventListener("popstate", c)
                );
            }, []),
            wc(
                "a",
                "click",
                s,
                (c, m) => {
                    var yt, wt, Te;
                    let w = m.getAttribute("data-forward-query-params");
                    if (c.button && !w) return;
                    let I = m.getAttribute("href") || "";
                    if (!I) return;
                    if (I === "./") return (window.location.href = "/");
                    let {
                            route: T,
                            pages: x,
                            dir: C,
                            embed: M,
                            root: O,
                            localAssets: _,
                        } = n.current,
                        [V, k] = I.split("#"),
                        D = nl(V, x, C),
                        gt = !!D && m.getAttribute("target") !== "_blank",
                        vt = /^mailto/i.test(I),
                        _t = /^tel/i.test(I),
                        Ae;
                    if (gt && (!location.host || !(c.ctrlKey || c.metaKey))) {
                        c.preventDefault();
                        let ae;
                        if (m.dataset.tween && m.dataset.tween !== "{}")
                            try {
                                (ae = JSON.parse(m.dataset.tween.replaceAll("&quot;", '"'))),
                                    !ae.tweenIn && !ae.tweenOut && (ae = void 0);
                            } catch (Et) {
                                console.error("Failed to parse tween", Et);
                            }
                        else {
                            let Et = m.getAttribute("tween");
                            if (Et)
                                try {
                                    let It = JSON.parse(decodeURIComponent(Et));
                                    It && ((ae = It), !ae.tweenIn && !ae.tweenOut && (ae = void 0));
                                } catch (It) {
                                    console.error("Failed to parse tween", It);
                                }
                        }
                        f.current = k ? `#${k}` : "";
                        let [Xe] = (k || "").split("?"),
                            Ht = (T.transition && T.transition.toPageKey) || T.pageKey;
                        if (I.startsWith("#") || Ht === D) {
                            (c.target.href = `${Xn(D, x, C)}#${Xe}`),
                                Xe && Z.scrollTo(Xe, void 0, void 0, s.current || void 0);
                            return;
                        }
                        if (
                            (r(
                                "route",
                                ae
                                    ? {
                                          pageKey: Ht,
                                          transition: { toPageKey: D, tween: ae, toWidgetKey: Xe },
                                      }
                                    : { pageKey: D, widgetKey: Xe }
                            ),
                            !ae && !M)
                        )
                            d.current = !0;
                        else if (M) {
                            let Et =
                                (wt =
                                    (yt = s.current) == null
                                        ? void 0
                                        : yt.getBoundingClientRect()) == null
                                    ? void 0
                                    : wt.top;
                            if (Et && Et < 0) {
                                let It = M && O ? O : void 0;
                                Z.scrollToWidget(D, It);
                            }
                        }
                        Ae = "Internal";
                    } else if (vt) Ae = "Email";
                    else if (_t) Ae = "Phone";
                    else if (((Ae = "Outbound"), h(Gr.linkClick, { url: I }), w)) {
                        c.preventDefault();
                        let ae = m.getAttribute("target"),
                            Xe = m.getAttribute("rel");
                        qg(
                            I,
                            { target: ae, rel: Xe },
                            (Te = n == null ? void 0 : n.current) == null ? void 0 : Te.embed
                        );
                    }
                    fl.send("link", Ae + " Link", "click", I);
                },
                []
            ),
            (0, q.useLayoutEffect)(() => {
                let { pages: c, embed: m, dir: w } = n.current;
                if (!g) return;
                let I = Xn(g, c, w);
                if (!m && !a.current && location.host && I !== mt(location.pathname)) {
                    let T = location.pathname;
                    history.pushState(
                        { pageKey: g, scrollTop: 0 },
                        document.title,
                        I + location.search + f.current
                    ),
                        rl(I),
                        n.current.localAssets && t((x) => x + 1);
                } else a.current && (a.current = !1);
            }, [g]),
            (0, q.useLayoutEffect)(() => {
                if (d.current)
                    if (((d.current = !1), v)) {
                        let { embed: c, root: m } = n.current,
                            w = c && m ? m : void 0;
                        Z.scrollToWidget(v, w), r("route", { pageKey: p });
                    } else Z.setScrollTop(0);
            }, [v, r, p]),
            (0, q.useLayoutEffect)(() => {
                var c;
                if (y) {
                    let { scrollTop: m, embed: w } = n.current,
                        { toPageKey: I, toWidgetKey: T, tween: x } = y;
                    T && Z.scrollTo(T);
                    let { current: C } = l,
                        M = u.current,
                        O = new jn(() => {
                            n.current.embed || Z.setScrollTop(0), r("route", { pageKey: I });
                        });
                    (c = u.current) == null || c.removeAttribute("style"),
                        l.current &&
                            (l.current.removeAttribute("style"), (l.current.scrollTop = m));
                    let { width: _, height: V } = o || {};
                    return (
                        O.scaling({ x: _, y: V }),
                        u.current && x.tweenIn && O.toValues(u.current, x.tweenIn, av),
                        l.current && x.tweenOut && O.fromValues(l.current, x.tweenOut, av),
                        O.play(),
                        w || r("scrollTop", 0),
                        () => {
                            C && O.remove(C),
                                M && O.remove(M),
                                O.reset(),
                                C && C.removeAttribute("style");
                        }
                    );
                }
            }, [y]),
            q.default.createElement(
                Zc,
                { ref: s },
                p && q.default.createElement(ll, { pageKey: p }),
                q.default.createElement($i, {
                    key: (p || "") + e,
                    className: y && (y.tween.inFront ? "pin" : "front pin"),
                    id: p || "",
                    active: !0,
                    ref: l,
                }),
                y &&
                    q.default.createElement($i, {
                        key: (y.toPageKey || "") + e,
                        className: "pin",
                        id: y.toPageKey,
                        ref: u,
                    })
            )
        );
    }
    var Dr = q.default.memo(TS);
    var Be = R(N());
    function cv(e, t) {
        var r, i, o;
        if (!e) return "#";
        let n = e;
        if (e.mode === 2 && (n == null ? void 0 : n.href) === "./") return "./";
        switch (e.mode) {
            case 0: {
                let s = e.page;
                return Xn(s, t.pages, t.dir);
            }
            case 1:
                if (e.widget) {
                    let { page: s, key: l } = e.widget;
                    return `${Xn(s, t.pages, t.dir)}#${l}`;
                }
                return "";
            case 3: {
                let { email: s, subject: l } = e || {};
                return "mailto:" + s + (l ? `?subject=${l}` : "");
            }
            case 4:
                return "tel:" + e.phone;
            case 5:
                return (r = e == null ? void 0 : e.file) == null ? void 0 : r.url;
            default:
                return n != null && n.href
                    ? n &&
                      !((i = n == null ? void 0 : n.href) != null && i.startsWith("http")) &&
                      !((o = n == null ? void 0 : n.href) != null && o.startsWith("/"))
                        ? "http://" + n.href
                        : n.href
                    : "#";
        }
    }
    function fv(e) {
        return (e.mode <= 1 && e.tweenIn) || e.tweenOut
            ? JSON.stringify({ inFront: e.inFront, tweenIn: e.tweenIn, tweenOut: e.tweenOut })
            : !1;
    }
    function bS({ to: e, children: t, ...n }, r) {
        let i = A((g) => e && cv(e, g), [e]),
            [o, s] = ue(),
            l = (0, Be.useRef)(null),
            u = e ? fv(e) : !1,
            a = e == null ? void 0 : e.page,
            [f, d] = (0, Be.useState)(!1),
            p = (0, Be.useCallback)(() => {
                a && Hn(a, o.current, s);
            }, [a, s, o]);
        (0, Be.useEffect)(() => {
            let g = l.current;
            if (!g) return;
            let E = () => {
                a && !f && p(), d(!0);
            };
            return (
                g.addEventListener("mouseenter", E), () => g.removeEventListener("mouseenter", E)
            );
        }, [f, a, p]),
            (0, Be.useEffect)(() => {
                e && l.current && (l.current.href = i);
            });
        let v = [];
        e && e.nofollow && v.push("nofollow"), e && e.sponsored && v.push("sponsored");
        let y = { href: i };
        if ((e == null ? void 0 : e.mode) === 5) {
            let { download: g, target: E } = e || {};
            (!E || E === "download") && (y.download = g || !0),
                (E === "blank" || !E || E === "download") &&
                    ((y.target = "_blank"), v.push("nofollow"));
        } else
            (e == null ? void 0 : e.mode) === 3 || (e != null && e.target)
                ? (y.target = "_blank")
                : e != null && e.targetTop && (y.target = "_top");
        return (
            e != null && e.queryParams && (y["data-forward-query-params"] = "true"),
            v.length && (y.rel = v.join(" ")),
            Be.default.createElement("a", { key: i, ref: l, "data-tween": u, ...n, ...y }, t)
        );
    }
    var dv = Be.default.memo((0, Be.forwardRef)(bS));
    var pv = dv;
    var ht = R(N());
    var OS = [100, 100, ["M50 0 L100 100  L0 100 Z"]],
        mv = (0, ht.forwardRef)(({ stretch: e, d: t, ...n }, r) => {
            let i = vc(t || "default");
            if (!i) return null;
            if (typeof i == "string")
                return ht.default.createElement("img", { "data-icon": !0, src: i, ref: r, ...n });
            if ("url" in i)
                return ht.default.createElement("img", {
                    "data-icon": !0,
                    src: i.url,
                    ref: r,
                    ...n,
                });
            if (Array.isArray(i)) {
                let [o, s, ...l] = i || OS;
                return ht.default.createElement(
                    "svg",
                    {
                        ref: r,
                        "data-icon": !0,
                        ...n,
                        preserveAspectRatio: e ? "none" : "xMidYMid",
                        viewBox: `0 0 ${o} ${s}`,
                    },
                    ht.default.createElement(
                        ht.default.Fragment,
                        null,
                        typeof l == "string"
                            ? ht.default.createElement("path", { d: l })
                            : l.map((u, a) => ht.default.createElement("path", { key: a, d: u }))
                    )
                );
            }
            return ht.default.createElement("img", {
                "data-icon": !0,
                src: i.value.url,
                ref: r,
                ...n,
            });
        });
    mv.displayName = "Icon";
    var hv = mv;
    var gv = hv;
    var dl = R(N());
    function kS(e) {
        return ((n = "") => n.replace(/\n/g, ""))(e || "");
    }
    function LS([e, t]) {
        return `(max-width: ${e}px) ${t}px`;
    }
    function RS(e, t) {
        return e[0] - t[0];
    }
    var vv = (0, dl.forwardRef)(({ src: e, sizes: t, style: n, className: r }, i) => {
        let o = yc(e ? e.key || e : ""),
            s = Ic();
        function l(p) {
            return p.replace(new RegExp("\\.\\.\\/", "g"), "/");
        }
        let u, a, f;
        if (o) {
            if (t) {
                t.sort(RS), (a = "");
                let p = t.length - 1;
                for (let v = 0; v < p; v++) a += LS(t[v]) + " ";
                a += t[p][1] + "px";
            }
            (u = o.srcset.map((p) => `${p[0]} ${p[1]}w`).join(",")),
                (e = o.src || o.url),
                s && (u = l(u)),
                !e && o.srcset[o.srcset.length - 1] && (e = o.srcset[o.srcset.length - 1][0]),
                (f = o.meta && o.meta.description);
        }
        ie(e) && /^\/\//.test(e) && (e = "https:" + e);
        let d = s && ie(e) ? l(e) : e;
        return dl.default.createElement("img", {
            style: n,
            loading: "lazy",
            className: r,
            src: ie(d) ? d : "",
            srcSet: u,
            sizes: a,
            alt: kS(f),
            ref: i,
        });
    });
    vv.displayName = "Image";
    var yv = vv;
    var wv = yv;
    var Yn = R(N());
    var Ev = { time: 251 },
        Jc = { threshold: 10, velocity: 0.3 };
    function qc(e, t) {
        return Math.sqrt(e * e + t * t);
    }
    function ef(e, t) {
        let n = Math.atan2(t, e);
        return 180 / (Math.PI / n);
    }
    function pl(e) {
        if (e && e.length >= 2) {
            let { x: t, y: n } = e[0],
                { x: r, y: i } = e[1],
                o = r - t,
                s = i - n;
            return (
                console.log("CALCEULATE TOUCH", { x: o, y: s, z: qc(o, s), angle: ef(o, s) }),
                { x: o, y: s, z: qc(o, s), angle: ef(o, s) }
            );
        }
    }
    function bv(e, t, n) {
        let { x: r, y: i } = e[0],
            { x: o, y: s } = t[0],
            l = o - r,
            u = s - i,
            a = qc(l, u);
        return { x: l, y: u, z: a, time: n, velocity: a / n, angle: ef(l, u) };
    }
    function Ov(e, t) {
        let { angle: n } = e,
            { angle: r } = t;
        return r - n;
    }
    function tf(e, t) {
        return e + t[0].toUpperCase() + t.slice(1);
    }
    function kv(e, t) {
        return Math.abs(e) >= Jc.threshold && Math.abs(t) > Jc.velocity;
    }
    function Lv(e, t) {
        return !!(t & e);
    }
    function Rv(e, t) {
        let { x: n, y: r } = e,
            { x: i, y: o } = t,
            s = i - n,
            l = o - r;
        return s === 0 && l === 0
            ? 1
            : Math.abs(s) >= Math.abs(l)
            ? s < 0
                ? 2
                : 4
            : l < 0
            ? 8
            : 16;
    }
    function nf(e) {
        let t;
        switch (e) {
            case 1:
                break;
            case 2:
                t = "left";
                break;
            case 4:
                t = "right";
                break;
            case 8:
                t = "up";
                break;
            case 16:
                t = "down";
                break;
            default:
        }
        return t;
    }
    var rf = class {
            constructor() {
                this.layers = [];
            }
            add(t) {
                this.layers.push(t);
            }
            send(t, n, r, i, o, s) {
                for (let l of this.layers) l.apply(l, arguments);
            }
        },
        of = new rf();
    of.add((e, t, n, r, i) => {
        typeof dataLayer != "undefined" &&
            dataLayer.push({
                event: e,
                eventCategory: t,
                eventAction: n,
                eventLabel: r,
                eventValue: i,
            });
    });
    of.add((e, t, n, r, i, o) => {
        if (typeof ga != "undefined") {
            let s = {
                eventCategory: t,
                eventAction: n,
                eventLabel: r,
                eventValue: i,
                transport: "beacon",
            };
            o && (s.nonInteractive = o), ga("send", "event", s);
        }
    });
    var fl = of;
    var sf = class {
            constructor() {
                this.pageX = 0;
                this.pageY = 0;
                this.pageDownX = 0;
                this.pageDownY = 0;
                this.pageUpX = 0;
                this.pageUpY = 0;
                this.moveX = 0;
                this.moveY = 0;
                this.timestampDown = 0;
                this.timestampUp = 0;
                this.downRect = [0, 0, 0, 0];
                this.button = 0;
                this.shiftKey = !1;
                this.altKey = !1;
                this.metaKey = !1;
                this.listeners = { mousemove: [], mouseup: [], mousedown: [], mouseleave: [] };
                this.emit = (t, n) => {
                    let r = this.listeners[t];
                    for (let i = 0; i < r.length; i++) if (r[i](n) === !1) return;
                };
                this.handleLeave = (t) => {
                    this.emit("mouseleave", t), this.isMouseDown() && this.handleUp(t);
                };
                this.handleMove = (t) => {
                    (this.moveX = t.pageX - this.pageX),
                        (this.moveY = t.pageY - this.pageY),
                        (this.pageX = t.pageX),
                        (this.pageY = t.pageY),
                        (this.altKey = t.altKey),
                        (this.metaKey = t.metaKey),
                        (this.shiftKey = t.shiftKey),
                        this.emit("mousemove", t);
                };
                this.handleDown = (t) => {
                    (this.timestampDown = t.timeStamp),
                        (this.button = t.button),
                        (this.pageDownX = this.pageX = t.pageX),
                        (this.pageDownY = this.pageY = t.pageY),
                        this.emit("mousedown", t);
                };
                this.handleUp = (t) => {
                    (this.timestampUp = t.timeStamp),
                        (this.pageUpX = this.pageX = t.pageX),
                        (this.pageUpY = this.pageY = t.pageY),
                        this.emit("mouseup", t);
                };
                Bn &&
                    (F.addEventListener("mousemove", this.handleMove),
                    F.addEventListener("mousedown", this.handleDown),
                    F.addEventListener("mouseup", this.handleUp),
                    F.addEventListener("mouseleave", this.handleLeave));
            }
            get dist() {
                let [t, n] = this.distVec;
                return Math.sqrt(t ** 2 + n ** 2);
            }
            get distVec() {
                return [this.pageX - this.pageDownX, this.pageY - this.pageDownY];
            }
            on(t, n, r) {
                let i = this.listeners[t];
                (n.__priority = r || 0),
                    i.indexOf(n) === -1 && i.push(n),
                    i.sort((o, s) => {
                        var l, u;
                        return (
                            ((l = s.__priority) != null ? l : 0) -
                            ((u = o.__priority) != null ? u : 0)
                        );
                    });
            }
            off(t, n) {
                let r = this.listeners[t];
                if (!n) r.length = 0;
                else {
                    let i = r.indexOf(n);
                    i !== -1 && r.splice(i, 1);
                }
            }
            isMouseDown() {
                return this.timestampDown > this.timestampUp;
            }
            isCenterDown() {
                return this.isMouseDown() && this.button === 1;
            }
            isRightDown() {
                return this.isMouseDown() && this.button === 2;
            }
            isInside(t, n) {
                return !!this.findParent(t.target, (r) => r === n);
            }
            isInsideRole(t, n) {
                let r = typeof n == "string" ? new RegExp("^" + n + "$", "i") : n;
                return !!this.findParent(t.target, (i) => r.test(i.getAttribute("role") || ""));
            }
            findParent(t, n) {
                if (t) return n(t) ? t : this.findParent(t.parentElement, n);
            }
        },
        Nt = new sf();
    var NS = { all: 30, vertical: 24, horizontal: 6 },
        Ji = class extends Yn.PureComponent {
            constructor(n) {
                super(n);
                this.state = {};
                this.emit = (n, ...r) => {
                    let i = this.props[n];
                    if (typeof i == "function") {
                        let { gesture: o } = this;
                        i(o && { ...o }, ...r);
                    }
                };
                this.triggerCombineEvent = (n, r, ...i) => {
                    this.emit(n, ...i), this.triggerSubEvent(n, r, ...i);
                };
                this.triggerSubEvent = (n, r, ...i) => {
                    if (r) {
                        let o = tf(n, r);
                        this.emit(o, ...i);
                    }
                };
                this.triggerPinchEvent = (n, r, ...i) => {
                    let { scale: o } = this.gesture;
                    r === "move" &&
                        typeof o == "number" &&
                        (o > 1 && this.emit("onPinchOut"), o < 1 && this.emit("onPinchIn")),
                        this.triggerCombineEvent(n, r, ...i);
                };
                this.initTimer = () => {
                    this.clearTimer(),
                        (this.pressTimer = window.setTimeout(() => {
                            this.setGestureState({ press: !0 }), this.emit("onPress");
                        }, Ev.time));
                };
                this.clearTimer = () => clearTimeout(this.pressTimer);
                this.cleanGestureState = () => {
                    delete this.gesture;
                };
                this.triggerUserCb = (n, r) => {
                    let i = tf("onTouch", n);
                    if (i in this.props) {
                        let o = this.props[i];
                        typeof o == "function" && o(r);
                    }
                };
                this.mouseDown = (n) => {
                    this.start(n), Nt.on("mousemove", this.move), Nt.on("mouseup", this.mouseUp);
                };
                this.mouseUp = (n) => {
                    Nt.off("mousemove", this.move), Nt.off("mouseup", this.mouseUp), this.end(n);
                };
                this.start = (n) => {
                    this.triggerUserCb("start", n),
                        (this.event = n),
                        "touches" in n && n.touches.length > 1 && n.preventDefault(),
                        this.initStatus(n),
                        this.initTimer(),
                        this.checkIfMultiTouchStart();
                };
                this.initStatus = (n) => {
                    this.cleanGestureState();
                    let r = this.getTouches(n),
                        i = Date.now(),
                        o = pl(r);
                    this.setGestureState({
                        startTime: i,
                        startTouches: r,
                        startMultiFingerStatus: o,
                        time: i,
                        touches: r,
                        multiFingerStatus: o,
                        srcEvent: this.event,
                    });
                };
                this.checkIfMultiTouchStart = () => {
                    let { hasPinch: n, hasRotate: r } = this,
                        { touches: i } = this.gesture;
                    if (i.length > 1 && (n || r)) {
                        if (n) {
                            let o = pl(i);
                            this.setGestureState({
                                startMultiFingerStatus: o,
                                pinch: !0,
                                scale: 1,
                            }),
                                this.triggerCombineEvent("onPinch", "start");
                        }
                        r &&
                            (this.setGestureState({ rotate: !0, rotation: 0 }),
                            this.triggerCombineEvent("onRotate", "start"));
                    }
                };
                this.move = (n) => {
                    this.triggerUserCb("move", n),
                        (this.event = n),
                        this.gesture &&
                            (this.clearTimer(),
                            this.updateGestureStatus(n),
                            this.checkIfSingleTouchMove(),
                            this.checkIfMultiTouchMove());
                };
                this.checkIfMultiTouchMove = () => {
                    let {
                        pinch: n,
                        rotate: r,
                        touches: i,
                        startMultiFingerStatus: o,
                        multiFingerStatus: s,
                    } = this.gesture;
                    if (!(!n && !r)) {
                        if (i.length < 2)
                            this.setGestureState({ pinch: !1, rotate: !1 }),
                                n && this.triggerCombineEvent("onPinch", "cancel"),
                                r && this.triggerCombineEvent("onRotate", "cancel");
                        else if (s && o) {
                            if (n) {
                                let l = s.z / o.z;
                                this.setGestureState({ scale: l }),
                                    this.triggerPinchEvent("onPinch", "move");
                            }
                            if (r) {
                                let l = Ov(o, s);
                                this.setGestureState({ rotation: l }),
                                    this.triggerCombineEvent("onRotate", "move");
                            }
                        }
                    }
                };
                this.checkIfSingleTouchMove = () => {
                    let {
                        pan: n,
                        touches: r,
                        moveStatus: i,
                        preTouches: o,
                        availablePan: s = !0,
                    } = this.gesture;
                    if (r.length > 1) {
                        this.setGestureState({ pan: !1 }),
                            n && this.triggerCombineEvent("onPan", "cancel");
                        return;
                    }
                    if (i && s) {
                        let l = Rv(o[0], r[0]);
                        this.setGestureState({ direction: l });
                        let u = nf(l);
                        if (!this.allowGesture()) {
                            n || this.setGestureState({ availablePan: !1 });
                            return;
                        }
                        n
                            ? (this.triggerCombineEvent("onPan", u),
                              this.triggerSubEvent("onPan", "move"))
                            : (this.triggerCombineEvent("onPan", "start"),
                              this.setGestureState({ pan: !0, availablePan: !0 }));
                    }
                };
                this.checkIfMultiTouchEnd = (n) => {
                    let { pinch: r, rotate: i } = this.gesture;
                    r && this.triggerCombineEvent("onPinch", n),
                        i && this.triggerCombineEvent("onRotate", n);
                };
                this.updateGestureStatus = (n, r = this.getTouches(n)) => {
                    let i = Date.now();
                    this.setGestureState({ time: i });
                    let {
                            startTime: o,
                            startTouches: s,
                            pinch: l,
                            rotate: u,
                            startMultiFingerStatus: a,
                        } = this.gesture,
                        f = bv(s, r, i - o),
                        d;
                    (l || u) && (d = pl(r)),
                        this.setGestureState({
                            startMultiFingerStatus: a || d,
                            touches: r,
                            multiFingerStatus: d,
                            moveStatus: f,
                        });
                };
                this.end = (n) => {
                    this.triggerUserCb("end", n),
                        (this.event = n),
                        this.gesture &&
                            (this.clearTimer(),
                            this.updateGestureStatus(n, this.gesture.touches),
                            this.doSingleTouchEnd("end"),
                            this.checkIfMultiTouchEnd("end"));
                };
                this.cancel = (n) => {
                    this.triggerUserCb("cancel", n),
                        (this.event = n),
                        this.gesture &&
                            (this.clearTimer(),
                            this.updateGestureStatus(n),
                            this.doSingleTouchEnd("cancel"),
                            this.checkIfMultiTouchEnd("cancel"));
                };
                this.triggerAllowEvent = (n, r) => {
                    this.allowGesture()
                        ? this.triggerCombineEvent(n, r)
                        : this.triggerSubEvent(n, r);
                };
                this.doSingleTouchEnd = (n) => {
                    let {
                        moveStatus: r,
                        pinch: i,
                        rotate: o,
                        press: s,
                        pan: l,
                        direction: u,
                    } = this.gesture;
                    if (!(i || o)) {
                        if (r) {
                            let { z: a, velocity: f } = r,
                                d = kv(a, f);
                            if (
                                (this.setGestureState({ swipe: d }),
                                l && this.triggerAllowEvent("onPan", n),
                                d && u !== void 0)
                            ) {
                                let p = nf(u);
                                p && this.triggerAllowEvent("onSwipe", p);
                                return;
                            }
                        }
                        if (s) {
                            this.emit("onPressUp");
                            return;
                        }
                        this.emit("onTap");
                    }
                };
                (this.directionSetting = NS[n.direction || "all"]),
                    (this.events = {
                        onTouchStart: this.start,
                        onTouchMove: this.move,
                        onTouchCancel: this.cancel,
                        onTouchEnd: this.end,
                    }),
                    Z.isIOS || (this.events.onMouseDown = this.mouseDown);
            }
            get hasPinch() {
                return !!(
                    this.props.onPinch ||
                    this.props.onPinchMove ||
                    this.props.onPinchIn ||
                    this.props.onPinchOut
                );
            }
            get hasRotate() {
                return !!(this.props.onRotate || this.props.onRotateMove);
            }
            componentWillUnmount() {
                this.clearTimer();
            }
            setGestureState(n) {
                let r = this.gesture || (this.gesture = {});
                r.touches && (r.preTouches = r.touches), Object.assign(r, { ...n });
            }
            getTouches(n) {
                return "touches" in n
                    ? Array.prototype.slice
                          .call(n.touches)
                          .map((r) => ({ x: r.screenX, y: r.screenY }))
                    : [{ x: n.pageX, y: n.pageY }];
            }
            allowGesture() {
                return (
                    this.gesture &&
                    this.gesture.direction !== void 0 &&
                    Lv(this.gesture.direction, this.directionSetting)
                );
            }
            render() {
                let { children: n } = this.props,
                    { directionSetting: r } = this,
                    i = Yn.default.Children.only(n);
                if (!Yn.default.isValidElement(i) || typeof i.type != "string")
                    return Yn.default.createElement(
                        "div",
                        null,
                        "Need 1 native html element as child"
                    );
                let o = "auto";
                this.hasPinch || this.hasRotate || r === 30
                    ? (o = "pan-x pan-y")
                    : r === 24
                    ? (o = "pan-x")
                    : r === 6 && (o = "pan-y");
                let { style: s } = i.props;
                return Yn.default.cloneElement(i, {
                    ...this.events,
                    style: { touchAction: o, ...s },
                });
            }
        };
    var Mv = Ji;
    var ye = R(N()),
        Dv = R(Ai());
    var Gv = { top: 0, center: 0.5, bottom: 1, left: 0, right: 1 };
    function Pv(e) {
        let [t, n] = e.split("-");
        return [Gv[n] || 0, Gv[t] || 0];
    }
    function lf({
        className: e,
        back: t,
        hide: n,
        style: r,
        animation: i,
        children: o,
        anchor: s,
        anchorOrigin: l,
        portalOrigin: u,
        dock: a,
        offsetX: f,
        offsetY: d,
        noInherit: p,
        closeTrigger: v,
        onRequestClose: y,
    }) {
        let g = s && "current" in s ? s.current : s,
            E = Fe(),
            [h] = ue(),
            c = (0, ye.useRef)(!1),
            [m] = (0, ye.useState)(() => new ResizeObserver(() => setTimeout(V, 0))),
            w = xc(),
            [I] = (0, ye.useState)(() => {
                let k = document.createElement("div"),
                    D = "vev-portal";
                return (
                    t && (D += " back"),
                    (k.className = D),
                    !p &&
                        E &&
                        ((k.id = E.key + "c"),
                        (k.className += " " + E.type),
                        E.cl && (k.className += " " + E.cl)),
                    k
                );
            }),
            [T, x] = (0, ye.useState)(!1);
        (0, ye.useEffect)(() => {
            x(!0);
        }, []),
            (0, ye.useLayoutEffect)(() => V(), [w]),
            (0, ye.useEffect)(
                () => (
                    m.observe(I),
                    () => {
                        I.removeEventListener("mouseleave", _),
                            Nt.off("mousedown", _),
                            m.disconnect(),
                            C();
                    }
                ),
                []
            ),
            (0, ye.useEffect)(() => {
                g && m.observe(g);
            }, [g]),
            (0, ye.useEffect)(() => {
                i
                    ? !n && !c.current
                        ? (M(), _s(I, i))
                        : n && c.current === "enter" && ((c.current = "leave"), _s(I, i, !0, C))
                    : n
                    ? C()
                    : M();
            });
        let C = () => {
                (c.current = !1), br(I);
            },
            M = () => {
                (c.current = "enter"), (h.current.root || document.body).appendChild(I), O(), V();
            },
            O = () => {
                if (y)
                    switch (v) {
                        case "mouseleave":
                            I.removeEventListener("mouseleave", _),
                                I.addEventListener("mouseleave", _);
                            break;
                        case "click":
                            Nt.on("mousedown", _);
                            break;
                    }
            },
            _ = (0, ye.useCallback)((k) => {
                y &&
                    (k.type !== "mousedown" ||
                        (!Nt.isInside(k, I) && (!g || !Nt.isInside(k, g)))) &&
                    y(k);
            }, []),
            V = () => {
                if (n) return;
                let k = "auto",
                    D = "auto",
                    gt = "auto",
                    vt = "auto",
                    _t = "auto",
                    Ae = "auto";
                if (a)
                    /(top|left|bottom)/i.test(a) && (D = 0),
                        /(top|bottom|right)/i.test(a) && (gt = 0),
                        /(top|left|right)/i.test(a) && (k = 0),
                        /(bottom|left|right)/i.test(a) && (vt = 0);
                else {
                    if (((D = k = 0), g)) {
                        let [yt, wt] = Pv(l || "bottom-left"),
                            Te = g.getBoundingClientRect();
                        (k = Te.top + (d || 0) + Te.height * wt),
                            (D = Te.left + (f || 0) + Te.width * yt),
                            (Te = I.getBoundingClientRect());
                        let [ae, Xe] = Pv(u || "top-left");
                        (D -= Te.width * ae),
                            (k -= Te.height * Xe),
                            (k = Math.max(0, Math.min(k, window.innerHeight - Te.height))),
                            (D = Math.max(0, Math.min(D, window.innerWidth - Te.width)));
                    } else (k += f || 0), (D += d || 0);
                    (k = k + "px"), (D = D + "px");
                }
                Object.assign(I.style, {
                    top: k,
                    bottom: vt,
                    left: D,
                    right: gt,
                    width: _t,
                    height: Ae,
                });
            };
        return T
            ? Dv.default.createPortal(
                  ye.default.createElement("div", { style: r, className: e }, o),
                  I
              )
            : null;
    }
    var Fv = lf;
    var Sn = R(N());
    function Bv(e = "fade", t, n) {
        return (
            ie(e) && (e = Or(e, n)),
            e.targets || (e.targets = t),
            Ze(e.easing) && (e.easing = "easeOutSine"),
            Ze(e.duration) && (e.duration = 500),
            he(e)
        );
    }
    function ml({
        children: e,
        show: t = !0,
        enter: n,
        exit: r,
        loop: i,
        onEnter: o,
        onEntered: s,
        onExit: l,
        onExited: u,
        noUnmount: a,
        ...f
    }) {
        let d = Sn.default.useRef(null),
            [p, v] = Sn.default.useState(null),
            y = !a && !t && (!p || p === "exited");
        if (
            (Sn.default.useLayoutEffect(() => {
                let E,
                    h = d.current;
                if (!(y || !h))
                    return (
                        t
                            ? ((E = (o && o(h)) || Bv(n, h)),
                              (E.complete = () => {
                                  s && s(h), v("entered");
                              }),
                              v("entering"))
                            : ((E = (l && l(h)) || Bv(r, h, !0)),
                              (E.complete = () => {
                                  u && u(h), v("exited");
                              }),
                              p ? v("exiting") : E.pause()),
                        () => E.pause()
                    );
            }, [t]),
            Sn.default.useLayoutEffect(() => {
                if (p === "entered" && i) {
                    let E = { targets: d.current, ...i };
                    E.loop || (E.loop = !0),
                        Ze(E.easing) && (E.easing = "easeInOutSine"),
                        Ze(E.duration) && (E.duration = 400),
                        Ze(E.direction) && (E.direction = "alternate");
                    let h = he(E);
                    return () => h.pause();
                }
            }, [p]),
            y)
        )
            return null;
        f.ref = d;
        let g = Sn.default.Children.only(e);
        if (!g || !Sn.default.isValidElement(g))
            throw new Error("Transition must have child of type element");
        return Sn.default.cloneElement(g, f);
    }
    var $v = R(N());
    var VS = R(N());
    var FS = R(af()),
        cf = R(N()),
        BS = R(bs()),
        Qk = R(Ai());
    var jS = {};
    function qi() {
        let e = [];
        return (
            "fetch" in window ||
                e.push(
                    ge.fetch("https://cdn.jsdelivr.net/npm/whatwg-fetch@3.0.0/dist/fetch.umd.js")
                ),
            "IntersectionObserver" in window ||
                e.push(
                    ge.import("https://unpkg.com/intersection-observer@0.5.1/intersection-observer")
                ),
            "ResizeObserver" in window ||
                e.push(
                    ge.import(
                        "https://cdn.jsdelivr.net/npm/resize-observer-polyfill@1.5.1/dist/ResizeObserver.min.js"
                    )
                ),
            "ScrollTimeline" in window ||
                e.push(
                    ge.import("https://cdn.vev.design/v/scrolling-timeline/scroll-timeline-lite.js")
                ),
            Promise.all(e)
        );
    }
    var to = R(N()),
        At = R(bs());
    var YL;
    function Jv() {
        console.log("\u{1F4E1} Trying to connect Vev CLI");
        let devServerURL = "http://localhost:9876",
            fetchFromDevServer = async (e) => (await fetch(devServerURL + e)).text(),
            cssElement = null,
            addCSS = (e) => {
                cssElement ||
                    ((cssElement = document.createElement("style")),
                    document.head.appendChild(cssElement)),
                    (cssElement.innerHTML = e);
            },
            addJS = (js) => {
                let match = js.match(/System\.register\("([^"]*)"/);
                match &&
                    (ge.delete(match[1]),
                    eval(`vevr.push((vev,System,React) =>{
        ${js}
      })`));
            },
            loadLocalWidgets = async () => {
                try {
                    await Promise.all([
                        fetchFromDevServer("/develop/bundle.css").then(addCSS),
                        fetchFromDevServer("/develop/bundle.js").then(addJS),
                    ]),
                        console.log("\u{1F917} Hot reload from Vev CLI done");
                } catch (e) {
                    console.error("\u{1F6D1} Failed to fetch from local cli"), console.error(e);
                }
            },
            listen = async () => {
                let e = new EventSource(devServerURL + "/events");
                (e.onmessage = async (t) => {
                    console.log("got update", t.data), loadLocalWidgets();
                }),
                    (e.onopen = (t) => {
                        console.log("\u{1F7E2} Vev CLI connected");
                    });
            };
        listen();
    }
    var pf = {};
    yf(pf, {
        __addDisposableResource: () => w0,
        __assign: () => vl,
        __asyncDelegator: () => f0,
        __asyncGenerator: () => c0,
        __asyncValues: () => d0,
        __await: () => Br,
        __awaiter: () => i0,
        __classPrivateFieldGet: () => g0,
        __classPrivateFieldIn: () => y0,
        __classPrivateFieldSet: () => v0,
        __createBinding: () => wl,
        __decorate: () => t0,
        __disposeResources: () => E0,
        __esDecorate: () => WS,
        __exportStar: () => s0,
        __extends: () => qv,
        __generator: () => o0,
        __importDefault: () => h0,
        __importStar: () => m0,
        __makeTemplateObject: () => p0,
        __metadata: () => r0,
        __param: () => n0,
        __propKey: () => HS,
        __read: () => df,
        __rest: () => e0,
        __runInitializers: () => zS,
        __setFunctionName: () => QS,
        __spread: () => l0,
        __spreadArray: () => a0,
        __spreadArrays: () => u0,
        __values: () => yl,
        default: () => YS,
    });
    var ff = function (e, t) {
        return (
            (ff =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                    function (n, r) {
                        n.__proto__ = r;
                    }) ||
                function (n, r) {
                    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
                }),
            ff(e, t)
        );
    };
    function qv(e, t) {
        if (typeof t != "function" && t !== null)
            throw new TypeError(
                "Class extends value " + String(t) + " is not a constructor or null"
            );
        ff(e, t);
        function n() {
            this.constructor = e;
        }
        e.prototype = t === null ? Object.create(t) : ((n.prototype = t.prototype), new n());
    }
    var vl = function () {
        return (
            (vl =
                Object.assign ||
                function (t) {
                    for (var n, r = 1, i = arguments.length; r < i; r++) {
                        n = arguments[r];
                        for (var o in n)
                            Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
                    }
                    return t;
                }),
            vl.apply(this, arguments)
        );
    };
    function e0(e, t) {
        var n = {};
        for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (e != null && typeof Object.getOwnPropertySymbols == "function")
            for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
                t.indexOf(r[i]) < 0 &&
                    Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
                    (n[r[i]] = e[r[i]]);
        return n;
    }
    function t0(e, t, n, r) {
        var i = arguments.length,
            o = i < 3 ? t : r === null ? (r = Object.getOwnPropertyDescriptor(t, n)) : r,
            s;
        if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
            o = Reflect.decorate(e, t, n, r);
        else
            for (var l = e.length - 1; l >= 0; l--)
                (s = e[l]) && (o = (i < 3 ? s(o) : i > 3 ? s(t, n, o) : s(t, n)) || o);
        return i > 3 && o && Object.defineProperty(t, n, o), o;
    }
    function n0(e, t) {
        return function (n, r) {
            t(n, r, e);
        };
    }
    function WS(e, t, n, r, i, o) {
        function s(h) {
            if (h !== void 0 && typeof h != "function") throw new TypeError("Function expected");
            return h;
        }
        for (
            var l = r.kind,
                u = l === "getter" ? "get" : l === "setter" ? "set" : "value",
                a = !t && e ? (r.static ? e : e.prototype) : null,
                f = t || (a ? Object.getOwnPropertyDescriptor(a, r.name) : {}),
                d,
                p = !1,
                v = n.length - 1;
            v >= 0;
            v--
        ) {
            var y = {};
            for (var g in r) y[g] = g === "access" ? {} : r[g];
            for (var g in r.access) y.access[g] = r.access[g];
            y.addInitializer = function (h) {
                if (p)
                    throw new TypeError("Cannot add initializers after decoration has completed");
                o.push(s(h || null));
            };
            var E = (0, n[v])(l === "accessor" ? { get: f.get, set: f.set } : f[u], y);
            if (l === "accessor") {
                if (E === void 0) continue;
                if (E === null || typeof E != "object") throw new TypeError("Object expected");
                (d = s(E.get)) && (f.get = d),
                    (d = s(E.set)) && (f.set = d),
                    (d = s(E.init)) && i.unshift(d);
            } else (d = s(E)) && (l === "field" ? i.unshift(d) : (f[u] = d));
        }
        a && Object.defineProperty(a, r.name, f), (p = !0);
    }
    function zS(e, t, n) {
        for (var r = arguments.length > 2, i = 0; i < t.length; i++)
            n = r ? t[i].call(e, n) : t[i].call(e);
        return r ? n : void 0;
    }
    function HS(e) {
        return typeof e == "symbol" ? e : "".concat(e);
    }
    function QS(e, t, n) {
        return (
            typeof t == "symbol" && (t = t.description ? "[".concat(t.description, "]") : ""),
            Object.defineProperty(e, "name", {
                configurable: !0,
                value: n ? "".concat(n, " ", t) : t,
            })
        );
    }
    function r0(e, t) {
        if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
            return Reflect.metadata(e, t);
    }
    function i0(e, t, n, r) {
        function i(o) {
            return o instanceof n
                ? o
                : new n(function (s) {
                      s(o);
                  });
        }
        return new (n || (n = Promise))(function (o, s) {
            function l(f) {
                try {
                    a(r.next(f));
                } catch (d) {
                    s(d);
                }
            }
            function u(f) {
                try {
                    a(r.throw(f));
                } catch (d) {
                    s(d);
                }
            }
            function a(f) {
                f.done ? o(f.value) : i(f.value).then(l, u);
            }
            a((r = r.apply(e, t || [])).next());
        });
    }
    function o0(e, t) {
        var n = {
                label: 0,
                sent: function () {
                    if (o[0] & 1) throw o[1];
                    return o[1];
                },
                trys: [],
                ops: [],
            },
            r,
            i,
            o,
            s = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
        return (
            (s.next = l(0)),
            (s.throw = l(1)),
            (s.return = l(2)),
            typeof Symbol == "function" &&
                (s[Symbol.iterator] = function () {
                    return this;
                }),
            s
        );
        function l(a) {
            return function (f) {
                return u([a, f]);
            };
        }
        function u(a) {
            if (r) throw new TypeError("Generator is already executing.");
            for (; s && ((s = 0), a[0] && (n = 0)), n; )
                try {
                    if (
                        ((r = 1),
                        i &&
                            (o =
                                a[0] & 2
                                    ? i.return
                                    : a[0]
                                    ? i.throw || ((o = i.return) && o.call(i), 0)
                                    : i.next) &&
                            !(o = o.call(i, a[1])).done)
                    )
                        return o;
                    switch (((i = 0), o && (a = [a[0] & 2, o.value]), a[0])) {
                        case 0:
                        case 1:
                            o = a;
                            break;
                        case 4:
                            return n.label++, { value: a[1], done: !1 };
                        case 5:
                            n.label++, (i = a[1]), (a = [0]);
                            continue;
                        case 7:
                            (a = n.ops.pop()), n.trys.pop();
                            continue;
                        default:
                            if (
                                ((o = n.trys),
                                !(o = o.length > 0 && o[o.length - 1]) &&
                                    (a[0] === 6 || a[0] === 2))
                            ) {
                                n = 0;
                                continue;
                            }
                            if (a[0] === 3 && (!o || (a[1] > o[0] && a[1] < o[3]))) {
                                n.label = a[1];
                                break;
                            }
                            if (a[0] === 6 && n.label < o[1]) {
                                (n.label = o[1]), (o = a);
                                break;
                            }
                            if (o && n.label < o[2]) {
                                (n.label = o[2]), n.ops.push(a);
                                break;
                            }
                            o[2] && n.ops.pop(), n.trys.pop();
                            continue;
                    }
                    a = t.call(e, n);
                } catch (f) {
                    (a = [6, f]), (i = 0);
                } finally {
                    r = o = 0;
                }
            if (a[0] & 5) throw a[1];
            return { value: a[0] ? a[1] : void 0, done: !0 };
        }
    }
    var wl = Object.create
        ? function (e, t, n, r) {
              r === void 0 && (r = n);
              var i = Object.getOwnPropertyDescriptor(t, n);
              (!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) &&
                  (i = {
                      enumerable: !0,
                      get: function () {
                          return t[n];
                      },
                  }),
                  Object.defineProperty(e, r, i);
          }
        : function (e, t, n, r) {
              r === void 0 && (r = n), (e[r] = t[n]);
          };
    function s0(e, t) {
        for (var n in e)
            n !== "default" && !Object.prototype.hasOwnProperty.call(t, n) && wl(t, e, n);
    }
    function yl(e) {
        var t = typeof Symbol == "function" && Symbol.iterator,
            n = t && e[t],
            r = 0;
        if (n) return n.call(e);
        if (e && typeof e.length == "number")
            return {
                next: function () {
                    return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e };
                },
            };
        throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function df(e, t) {
        var n = typeof Symbol == "function" && e[Symbol.iterator];
        if (!n) return e;
        var r = n.call(e),
            i,
            o = [],
            s;
        try {
            for (; (t === void 0 || t-- > 0) && !(i = r.next()).done; ) o.push(i.value);
        } catch (l) {
            s = { error: l };
        } finally {
            try {
                i && !i.done && (n = r.return) && n.call(r);
            } finally {
                if (s) throw s.error;
            }
        }
        return o;
    }
    function l0() {
        for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(df(arguments[t]));
        return e;
    }
    function u0() {
        for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
        for (var r = Array(e), i = 0, t = 0; t < n; t++)
            for (var o = arguments[t], s = 0, l = o.length; s < l; s++, i++) r[i] = o[s];
        return r;
    }
    function a0(e, t, n) {
        if (n || arguments.length === 2)
            for (var r = 0, i = t.length, o; r < i; r++)
                (o || !(r in t)) && (o || (o = Array.prototype.slice.call(t, 0, r)), (o[r] = t[r]));
        return e.concat(o || Array.prototype.slice.call(t));
    }
    function Br(e) {
        return this instanceof Br ? ((this.v = e), this) : new Br(e);
    }
    function c0(e, t, n) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var r = n.apply(e, t || []),
            i,
            o = [];
        return (
            (i = Object.create(
                (typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype
            )),
            l("next"),
            l("throw"),
            l("return", s),
            (i[Symbol.asyncIterator] = function () {
                return this;
            }),
            i
        );
        function s(v) {
            return function (y) {
                return Promise.resolve(y).then(v, d);
            };
        }
        function l(v, y) {
            r[v] &&
                ((i[v] = function (g) {
                    return new Promise(function (E, h) {
                        o.push([v, g, E, h]) > 1 || u(v, g);
                    });
                }),
                y && (i[v] = y(i[v])));
        }
        function u(v, y) {
            try {
                a(r[v](y));
            } catch (g) {
                p(o[0][3], g);
            }
        }
        function a(v) {
            v.value instanceof Br ? Promise.resolve(v.value.v).then(f, d) : p(o[0][2], v);
        }
        function f(v) {
            u("next", v);
        }
        function d(v) {
            u("throw", v);
        }
        function p(v, y) {
            v(y), o.shift(), o.length && u(o[0][0], o[0][1]);
        }
    }
    function f0(e) {
        var t, n;
        return (
            (t = {}),
            r("next"),
            r("throw", function (i) {
                throw i;
            }),
            r("return"),
            (t[Symbol.iterator] = function () {
                return this;
            }),
            t
        );
        function r(i, o) {
            t[i] = e[i]
                ? function (s) {
                      return (n = !n) ? { value: Br(e[i](s)), done: !1 } : o ? o(s) : s;
                  }
                : o;
        }
    }
    function d0(e) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var t = e[Symbol.asyncIterator],
            n;
        return t
            ? t.call(e)
            : ((e = typeof yl == "function" ? yl(e) : e[Symbol.iterator]()),
              (n = {}),
              r("next"),
              r("throw"),
              r("return"),
              (n[Symbol.asyncIterator] = function () {
                  return this;
              }),
              n);
        function r(o) {
            n[o] =
                e[o] &&
                function (s) {
                    return new Promise(function (l, u) {
                        (s = e[o](s)), i(l, u, s.done, s.value);
                    });
                };
        }
        function i(o, s, l, u) {
            Promise.resolve(u).then(function (a) {
                o({ value: a, done: l });
            }, s);
        }
    }
    function p0(e, t) {
        return (
            Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : (e.raw = t), e
        );
    }
    var XS = Object.create
        ? function (e, t) {
              Object.defineProperty(e, "default", { enumerable: !0, value: t });
          }
        : function (e, t) {
              e.default = t;
          };
    function m0(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (e != null)
            for (var n in e)
                n !== "default" && Object.prototype.hasOwnProperty.call(e, n) && wl(t, e, n);
        return XS(t, e), t;
    }
    function h0(e) {
        return e && e.__esModule ? e : { default: e };
    }
    function g0(e, t, n, r) {
        if (n === "a" && !r) throw new TypeError("Private accessor was defined without a getter");
        if (typeof t == "function" ? e !== t || !r : !t.has(e))
            throw new TypeError(
                "Cannot read private member from an object whose class did not declare it"
            );
        return n === "m" ? r : n === "a" ? r.call(e) : r ? r.value : t.get(e);
    }
    function v0(e, t, n, r, i) {
        if (r === "m") throw new TypeError("Private method is not writable");
        if (r === "a" && !i) throw new TypeError("Private accessor was defined without a setter");
        if (typeof t == "function" ? e !== t || !i : !t.has(e))
            throw new TypeError(
                "Cannot write private member to an object whose class did not declare it"
            );
        return r === "a" ? i.call(e, n) : i ? (i.value = n) : t.set(e, n), n;
    }
    function y0(e, t) {
        if (t === null || (typeof t != "object" && typeof t != "function"))
            throw new TypeError("Cannot use 'in' operator on non-object");
        return typeof e == "function" ? t === e : e.has(t);
    }
    function w0(e, t, n) {
        if (t != null) {
            if (typeof t != "object" && typeof t != "function")
                throw new TypeError("Object expected.");
            var r, i;
            if (n) {
                if (!Symbol.asyncDispose)
                    throw new TypeError("Symbol.asyncDispose is not defined.");
                r = t[Symbol.asyncDispose];
            }
            if (r === void 0) {
                if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
                (r = t[Symbol.dispose]), n && (i = r);
            }
            if (typeof r != "function") throw new TypeError("Object not disposable.");
            i &&
                (r = function () {
                    try {
                        i.call(this);
                    } catch (o) {
                        return Promise.reject(o);
                    }
                }),
                e.stack.push({ value: t, dispose: r, async: n });
        } else n && e.stack.push({ async: !0 });
        return t;
    }
    var ZS =
        typeof SuppressedError == "function"
            ? SuppressedError
            : function (e, t, n) {
                  var r = new Error(n);
                  return (r.name = "SuppressedError"), (r.error = e), (r.suppressed = t), r;
              };
    function E0(e) {
        function t(o) {
            (e.error = e.hasError
                ? new ZS(o, e.error, "An error was suppressed during disposal.")
                : o),
                (e.hasError = !0);
        }
        var n,
            r = 0;
        function i() {
            for (; (n = e.stack.pop()); )
                try {
                    if (!n.async && r === 1)
                        return (r = 0), e.stack.push(n), Promise.resolve().then(i);
                    if (n.dispose) {
                        var o = n.dispose.call(n.value);
                        if (n.async)
                            return (
                                (r |= 2),
                                Promise.resolve(o).then(i, function (s) {
                                    return t(s), i();
                                })
                            );
                    } else r |= 1;
                } catch (s) {
                    t(s);
                }
            if (r === 1) return e.hasError ? Promise.reject(e.error) : Promise.resolve();
            if (e.hasError) throw e.error;
        }
        return i();
    }
    var YS = {
        __extends: qv,
        __assign: vl,
        __rest: e0,
        __decorate: t0,
        __param: n0,
        __metadata: r0,
        __awaiter: i0,
        __generator: o0,
        __createBinding: wl,
        __exportStar: s0,
        __values: yl,
        __read: df,
        __spread: l0,
        __spreadArrays: u0,
        __spreadArray: a0,
        __await: Br,
        __asyncGenerator: c0,
        __asyncDelegator: f0,
        __asyncValues: d0,
        __makeTemplateObject: p0,
        __importStar: m0,
        __importDefault: h0,
        __classPrivateFieldGet: g0,
        __classPrivateFieldSet: v0,
        __classPrivateFieldIn: y0,
        __addDisposableResource: w0,
        __disposeResources: E0,
    };
    var mf = R(N()),
        hf = R(Ai());
    var I0 = R(af());
    "remove" in Element.prototype ||
        (Element.prototype.remove = function () {
            this.parentNode && this.parentNode.removeChild(this);
        });
    ge.add({
        vev: we,
        react: { default: mf.default, ...mf.default },
        "react-dom": { default: hf.default, ...hf.default },
        animejs: { default: he },
        events: { default: I0.default },
    });
    Object.assign(window, pf);
    function x0(e) {
        let t = (n) => {
            let { hash: r } = window.location,
                i = e.querySelector(r);
            if (i) {
                let o = i.clientHeight >= window.innerHeight * 0.8;
                i.scrollIntoView({ behavior: n, inline: o ? "start" : "center" });
            }
        };
        window.addEventListener("hashchange", () => t("auto")),
            window.location.hash && (t("instant"), setTimeout(() => t("instant"), 200));
    }
    window.vevs || (window.vevs = {});
    var eo = window.vevs,
        vf = "vevd",
        S0 = [],
        C0 = /^(https?:)?\/\//,
        gf = oC();
    gf && !window.vevLocal
        ? (gf === "local.preact" && lC(), gf === "local.https" ? sC() : b0())
        : window.vev
        ? console.warn("Multiple vev scripts loaded")
        : ((window.vev = we), iC(), qi().then(() => we.raf($S)));
    function $S() {
        we.View.updateSize();
        let e = window.vevr;
        if (e) for (let r = 0; r < e.length; r++) e[r](we, we.s, to.default);
        (window.vevr = { push: (r) => r(we, we.s, to.default) }),
            document.addEventListener("animationstart", KS, !1);
        let t = [".vev"],
            n = document.createElement("style");
        (n.innerHTML = `@keyframes ${vf}{from{ opacity: 0.99}to{ opacity: 1}}${t.join(
            ","
        )}{animation-duration: 0.001s;animation-name: ${vf}}`),
            document.head.appendChild(n);
    }
    function KS(e) {
        e.animationName === vf && JS(e.target);
    }
    async function JS(e) {
        var o;
        if (S0.indexOf(e) !== -1) return;
        T0(document.querySelectorAll("noscript.vev-defer"), eC),
            T0(document.querySelectorAll('script[type="text/vev"]'), tC),
            e.shadowRoot && (e = e.shadowRoot.children[0]),
            S0.push(e),
            e.getBoundingClientRect().top !== null &&
                we.View.updateOffsetTop(e.getBoundingClientRect().top + window.scrollY);
        let t = (e.dataset.path || "").replace(C0, "").replace(/\/$/, ""),
            n = e.hasAttribute("shadow") ? document.createElement("div") : void 0;
        function r() {
            var s;
            n &&
                (n.setAttribute("class", `p${eo[t].project}`),
                n.attachShadow({ mode: "open" }),
                e.insertAdjacentElement("afterend", n),
                (s = n.shadowRoot) == null || s.appendChild(e));
        }
        if (!eo[t] && t.split("/")[0].split(".").length > 1) {
            let [s, ...l] = t.split("/"),
                { state: u, html: a, scripts: f, style: d } = await Wc("https://" + t);
            (eo[t] = u),
                (u.host = "//" + s + "/" + jc(l.join("/"), u.route.pageKey, u.pages)),
                (u.embed = !e.dataset.router),
                r(),
                n && d && ((o = n.shadowRoot) == null || o.appendChild(d.cloneNode(!0))),
                (e.innerHTML = a),
                await qS(f.map((p) => (C0.test(p) ? p : "https://" + s + p)));
        } else
            n &&
                (r(),
                Array.from(document.getElementsByClassName("vev-style")).forEach((s) => {
                    var l;
                    (l = n == null ? void 0 : n.shadowRoot) == null ||
                        l.appendChild(s.cloneNode(!0));
                }));
        let i = eo[t];
        i &&
            (Xg(i.route.pageKey),
            (i.dir = jc(location.pathname, i.route.pageKey, i.pages)),
            rC(i, e));
    }
    function qS(e) {
        return Promise.all(e.map((t) => we.s.fetch(t)));
    }
    function eC(e) {
        if (e.textContent) {
            let t = document.createElement("div");
            (t.innerHTML = e.textContent || ""), document.body.appendChild(t);
        }
        e.remove();
    }
    function tC(e) {
        let t = e.textContent;
        if (t) {
            let n = JSON.parse(t);
            (eo[n.project + "/" + n.route.pageKey] = n), e.remove();
        }
    }
    function T0(e, t) {
        for (let n = 0; n < e.length; n++) t(e[n]);
    }
    async function nC(e) {
        let t = {};
        for (let { type: n } of e.models) n !== void 0 && e.pkg[n] && (t[e.pkg[n]] = !0);
        try {
            await we.s.waitForRegister(Object.keys(t));
        } catch (n) {
            console.error("Failed to load all widgets", n);
        }
    }
    async function rC(e, t = document.getElementById(e.project || "")) {
        if (!t) return console.error("Failed to render vev, missing root node");
        await Promise.all([nC(e), qi()]);
        let n = to.default.createElement(Xi, { state: e }, to.default.createElement(Dr, null));
        t.innerHTML.length > 3
            ? At.hydrateRoot
                ? At.hydrateRoot(t, n)
                : At.hydrate(n, t)
            : At.createRoot
            ? At.createRoot(t).render(n)
            : At.render(n, t),
            t.getRootNode() instanceof DocumentFragment && x0(t);
    }
    function iC() {
        setTimeout(() => location.search.includes("cli=true") && Jv(), 3e3);
    }
    function oC() {
        let e = location.search.match(/viewer=(local|local\.preact|local\.https)(?=(&|$))/i);
        if (e) return e[1];
    }
    function b0(e = "http://localhost:8080") {
        (window.vevLocal = !0), console.info("Running viewer from local server");
        let t = e + "/vev.js",
            n = document.createElement("script");
        (n.src = t), document.body.appendChild(n);
        let r = document.createElement("link");
        (r.rel = "stylesheet"), (r.href = e + "/vev.css"), document.body.appendChild(r);
    }
    function sC() {
        b0("https://localhost:8080");
    }
    function lC() {
        let e = "https://cdn.vev.design/v/preact/vev.js";
        console.info("Running preact viewer from CDN");
        let t = document.createElement("script");
        (t.src = e), document.body.appendChild(t);
    }
})();
/*! For license information please see vev.js.LEGAL.txt */
//# sourceMappingURL=vev.js.map
