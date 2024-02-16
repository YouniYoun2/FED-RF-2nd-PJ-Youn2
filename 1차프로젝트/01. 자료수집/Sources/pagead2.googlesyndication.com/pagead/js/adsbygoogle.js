(function(sttc) {
    'use strict';
    var aa = {};
    /* 
 
 Copyright The Closure Library Authors. 
 SPDX-License-Identifier: Apache-2.0 
*/
    var p = this || self;
    function ba(a) {
        a = a.split(".");
        for (var b = p, c = 0; c < a.length; c++)
            if (b = b[a[c]],
            null == b)
                return null;
        return b
    }
    function ca(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }
    function da(a) {
        return Object.prototype.hasOwnProperty.call(a, ea) && a[ea] || (a[ea] = ++fa)
    }
    var ea = "closure_uid_" + (1E9 * Math.random() >>> 0)
      , fa = 0;
    function ha(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }
    function ia(a, b, c) {
        if (!a)
            throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }
    function ja(a, b, c) {
        ja = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ha : ia;
        return ja.apply(null, arguments)
    }
    function la(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }
    function ma(a, b, c) {
        a = a.split(".");
        c = c || p;
        a[0]in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift()); )
            a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    }
    function na(a) {
        return a
    }
    ;let oa = (new Date).getTime();
    function pa(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }
    function qa(a, b) {
        let c = 0;
        a = pa(String(a)).split(".");
        b = pa(String(b)).split(".");
        const d = Math.max(a.length, b.length);
        for (let g = 0; 0 == c && g < d; g++) {
            var e = a[g] || ""
              , f = b[g] || "";
            do {
                e = /(\d*)(\D*)(.*)/.exec(e) || ["", "", "", ""];
                f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                if (0 == e[0].length && 0 == f[0].length)
                    break;
                c = ra(0 == e[1].length ? 0 : parseInt(e[1], 10), 0 == f[1].length ? 0 : parseInt(f[1], 10)) || ra(0 == e[2].length, 0 == f[2].length) || ra(e[2], f[2]);
                e = e[3];
                f = f[3]
            } while (0 == c)
        }
        return c
    }
    function ra(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    }
    ;var sa, ua = ba("CLOSURE_FLAGS"), va = ua && ua[610401301];
    sa = null != va ? va : !1;
    function wa() {
        var a = p.navigator;
        return a && (a = a.userAgent) ? a : ""
    }
    var xa;
    const ya = p.navigator;
    xa = ya ? ya.userAgentData || null : null;
    function za(a) {
        return sa ? xa ? xa.brands.some(({brand: b})=>b && -1 != b.indexOf(a)) : !1 : !1
    }
    function q(a) {
        return -1 != wa().indexOf(a)
    }
    ;function Aa() {
        return sa ? !!xa && 0 < xa.brands.length : !1
    }
    function Ba() {
        return Aa() ? !1 : q("Trident") || q("MSIE")
    }
    function Ca() {
        return Aa() ? za("Microsoft Edge") : q("Edg/")
    }
    function Da() {
        !q("Safari") || Ea() || (Aa() ? 0 : q("Coast")) || (Aa() ? 0 : q("Opera")) || (Aa() ? 0 : q("Edge")) || Ca() || Aa() && za("Opera")
    }
    function Ea() {
        return Aa() ? za("Chromium") : (q("Chrome") || q("CriOS")) && !(Aa() ? 0 : q("Edge")) || q("Silk")
    }
    function Fa(a) {
        const b = {};
        a.forEach(c=>{
            b[c[0]] = c[1]
        }
        );
        return c=>b[c.find(d=>d in b)] || ""
    }
    function Ga() {
        var a = wa();
        if (Ba()) {
            var b = /rv: *([\d\.]*)/.exec(a);
            if (b && b[1])
                a = b[1];
            else {
                b = "";
                var c = /MSIE +([\d\.]+)/.exec(a);
                if (c && c[1])
                    if (a = /Trident\/(\d.\d)/.exec(a),
                    "7.0" == c[1])
                        if (a && a[1])
                            switch (a[1]) {
                            case "4.0":
                                b = "8.0";
                                break;
                            case "5.0":
                                b = "9.0";
                                break;
                            case "6.0":
                                b = "10.0";
                                break;
                            case "7.0":
                                b = "11.0"
                            }
                        else
                            b = "7.0";
                    else
                        b = c[1];
                a = b
            }
            return a
        }
        c = RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?", "g");
        b = [];
        let d;
        for (; d = c.exec(a); )
            b.push([d[1], d[2], d[3] || void 0]);
        a = Fa(b);
        return (Aa() ? 0 : q("Opera")) ? a(["Version", "Opera"]) : (Aa() ? 0 : q("Edge")) ? a(["Edge"]) : Ca() ? a(["Edg"]) : q("Silk") ? a(["Silk"]) : Ea() ? a(["Chrome", "CriOS", "HeadlessChrome"]) : (a = b[2]) && a[1] || ""
    }
    ;function Ha(a, b) {
        if ("string" === typeof a)
            return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (let c = 0; c < a.length; c++)
            if (c in a && a[c] === b)
                return c;
        return -1
    }
    function Ia(a, b) {
        const c = a.length
          , d = "string" === typeof a ? a.split("") : a;
        for (let e = 0; e < c; e++)
            e in d && b.call(void 0, d[e], e, a)
    }
    function Ja(a, b) {
        const c = a.length
          , d = [];
        let e = 0;
        const f = "string" === typeof a ? a.split("") : a;
        for (let g = 0; g < c; g++)
            if (g in f) {
                const h = f[g];
                b.call(void 0, h, g, a) && (d[e++] = h)
            }
        return d
    }
    function Ka(a, b) {
        const c = a.length
          , d = Array(c)
          , e = "string" === typeof a ? a.split("") : a;
        for (let f = 0; f < c; f++)
            f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    }
    function La(a, b) {
        const c = a.length
          , d = "string" === typeof a ? a.split("") : a;
        for (let e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a))
                return !0;
        return !1
    }
    function Ma(a, b) {
        a: {
            var c = a.length;
            const d = "string" === typeof a ? a.split("") : a;
            for (--c; 0 <= c; c--)
                if (c in d && b.call(void 0, d[c], c, a)) {
                    b = c;
                    break a
                }
            b = -1
        }
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    }
    function Na(a, b) {
        return 0 <= Ha(a, b)
    }
    function Oa(a) {
        const b = a.length;
        if (0 < b) {
            const c = Array(b);
            for (let d = 0; d < b; d++)
                c[d] = a[d];
            return c
        }
        return []
    }
    ;function Pa(a) {
        Pa[" "](a);
        return a
    }
    Pa[" "] = function() {}
    ;
    var Qa = Ba();
    !q("Android") || Ea();
    Ea();
    Da();
    var Ra = null;
    function Sa(a) {
        var b = [];
        Ua(a, function(c) {
            b.push(c)
        });
        return b
    }
    function Ua(a, b) {
        function c(k) {
            for (; d < a.length; ) {
                var m = a.charAt(d++)
                  , l = Ra[m];
                if (null != l)
                    return l;
                if (!/^[\s\xa0]*$/.test(m))
                    throw Error("Unknown base64 encoding at char: " + m);
            }
            return k
        }
        Va();
        for (var d = 0; ; ) {
            var e = c(-1)
              , f = c(0)
              , g = c(64)
              , h = c(64);
            if (64 === h && -1 === e)
                break;
            b(e << 2 | f >> 4);
            64 != g && (b(f << 4 & 240 | g >> 2),
            64 != h && b(g << 6 & 192 | h))
        }
    }
    function Va() {
        if (!Ra) {
            Ra = {};
            for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++)
                for (var d = a.concat(b[c].split("")), e = 0; e < d.length; e++) {
                    var f = d[e];
                    void 0 === Ra[f] && (Ra[f] = e)
                }
        }
    }
    ;var Wa = "undefined" != typeof structuredClone;
    let Xa = 0
      , Ya = 0;
    function Za(a) {
        var b = 0 > a;
        a = Math.abs(a);
        var c = a >>> 0;
        a = Math.floor((a - c) / 4294967296);
        if (b) {
            b = c;
            c = ~a;
            b ? b = ~b + 1 : c += 1;
            const [d,e] = [b, c];
            a = e;
            c = d
        }
        Xa = c >>> 0;
        Ya = a >>> 0
    }
    function $a() {
        var a = Xa
          , b = Ya;
        if (b & 2147483648)
            var c = "" + (BigInt(b | 0) << BigInt(32) | BigInt(a >>> 0));
        else
            b >>>= 0,
            a >>>= 0,
            2097151 >= b ? c = "" + (4294967296 * b + a) : c = "" + (BigInt(b) << BigInt(32) | BigInt(a));
        return c
    }
    ;function ab(a) {
        return Array.prototype.slice.call(a)
    }
    ;var t = Symbol()
      , bb = Symbol();
    function u(a, b, c) {
        return c ? a | b : a & ~b
    }
    var x = (a,b)=>{
        a[t] = b;
        return a
    }
    ;
    function cb(a) {
        a[t] |= 32;
        return a
    }
    function db(a, b) {
        x(b, (a | 0) & -14591)
    }
    function eb(a, b) {
        x(b, (a | 34) & -14557)
    }
    function fb(a) {
        a = a >> 14 & 1023;
        return 0 === a ? 536870912 : a
    }
    ;var gb = {}
      , hb = {};
    function ib(a) {
        return !(!a || "object" !== typeof a || a.g !== hb)
    }
    function jb(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    }
    let kb;
    function lb(a, b, c) {
        if (!Array.isArray(a) || a.length)
            return !1;
        const d = a[t] | 0;
        if (d & 1)
            return !0;
        if (!(b && (Array.isArray(b) ? b.includes(c) : b.has(c))))
            return !1;
        x(a, d | 1);
        return !0
    }
    var mb;
    const nb = [];
    x(nb, 55);
    mb = Object.freeze(nb);
    function ob(a) {
        if (a & 2)
            throw Error();
    }
    class pb {
    }
    class qb {
    }
    Object.freeze(new pb);
    Object.freeze(new qb);
    let rb;
    function sb(a) {
        if (rb)
            throw Error("");
        rb = a
    }
    function tb(a) {
        a = Error(a);
        a.__closure__error__context__984382 || (a.__closure__error__context__984382 = {});
        a.__closure__error__context__984382.severity = "warning";
        if (rb)
            try {
                rb(a)
            } catch (b) {
                throw b.cause = a,
                b;
            }
        return a
    }
    ;function ub(a) {
        if (null != a && "boolean" !== typeof a) {
            var b = typeof a;
            throw Error(`Expected boolean but got ${"object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null"}: ${a}`);
        }
        return a
    }
    const vb = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;
    function wb(a) {
        const b = typeof a;
        return "number" === b ? Number.isFinite(a) : "string" !== b ? !1 : vb.test(a)
    }
    function xb(a) {
        if (null != a) {
            if (!Number.isFinite(a))
                throw tb("enum");
            a |= 0
        }
        return a
    }
    function yb(a) {
        return null == a ? a : Number.isFinite(a) ? a | 0 : void 0
    }
    function zb(a) {
        if ("number" !== typeof a)
            throw tb("int32");
        if (!Number.isFinite(a))
            throw tb("int32");
        return a | 0
    }
    function Ab(a) {
        return null == a ? a : zb(a)
    }
    function Bb(a) {
        if (null == a)
            return a;
        if ("string" === typeof a) {
            if (!a)
                return;
            a = +a
        }
        if ("number" === typeof a)
            return Number.isFinite(a) ? a | 0 : void 0
    }
    function Cb(a) {
        if (null == a)
            return a;
        if ("string" === typeof a) {
            if (!a)
                return;
            a = +a
        }
        if ("number" === typeof a)
            return Number.isFinite(a) ? a >>> 0 : void 0
    }
    function Db(a) {
        return "-" === a[0] ? 20 > a.length ? !0 : 20 === a.length && -922337 < Number(a.substring(0, 7)) : 19 > a.length ? !0 : 19 === a.length && 922337 > Number(a.substring(0, 6))
    }
    function Eb(a) {
        a = Math.trunc(a);
        if (!Number.isSafeInteger(a)) {
            Za(a);
            var b = Xa
              , c = Ya;
            if (a = c & 2147483648)
                b = ~b + 1 >>> 0,
                c = ~c >>> 0,
                0 == b && (c = c + 1 >>> 0);
            b = 4294967296 * c + (b >>> 0);
            a = a ? -b : b
        }
        return a
    }
    function Fb(a) {
        var b = Math.trunc(Number(a));
        if (Number.isSafeInteger(b))
            return String(b);
        b = a.indexOf(".");
        -1 !== b && (a = a.substring(0, b));
        Db(a) || (16 > a.length ? Za(Number(a)) : (a = BigInt(a),
        Xa = Number(a & BigInt(4294967295)) >>> 0,
        Ya = Number(a >> BigInt(32) & BigInt(4294967295))),
        a = $a());
        return a
    }
    function Gb(a) {
        if ("string" !== typeof a)
            throw Error();
        return a
    }
    function Hb(a) {
        if (null != a && "string" !== typeof a)
            throw Error();
        return a
    }
    function Ib(a) {
        return null == a || "string" === typeof a ? a : void 0
    }
    function Jb(a, b, c, d) {
        if (null != a && "object" === typeof a && a.ma === gb)
            return a;
        if (!Array.isArray(a))
            return c ? d & 2 ? (a = b[bb]) ? b = a : (a = new b,
            d = a.B,
            d[t] |= 34,
            b = b[bb] = a) : b = new b : b = void 0,
            b;
        let e = c = a[t] | 0;
        0 === e && (e |= d & 32);
        e |= d & 2;
        e !== c && x(a, e);
        return new b(a)
    }
    ;let Kb;
    function Lb(a, b) {
        Kb = b;
        a = new a(b);
        Kb = void 0;
        return a
    }
    ;function Mb(a, b) {
        return Nb(b)
    }
    function Nb(a) {
        switch (typeof a) {
        case "number":
            return isFinite(a) ? a : String(a);
        case "boolean":
            return a ? 1 : 0;
        case "object":
            if (a)
                if (Array.isArray(a)) {
                    if (lb(a, void 0, 0))
                        return
                } else if (null != a && a instanceof Uint8Array) {
                    let b = ""
                      , c = 0;
                    const d = a.length - 10240;
                    for (; c < d; )
                        b += String.fromCharCode.apply(null, a.subarray(c, c += 10240));
                    b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
                    return btoa(b)
                }
        }
        return a
    }
    ;function Ob(a, b, c) {
        a = ab(a);
        var d = a.length;
        const e = b & 256 ? a[d - 1] : void 0;
        d += e ? -1 : 0;
        for (b = b & 512 ? 1 : 0; b < d; b++)
            a[b] = c(a[b]);
        if (e) {
            b = a[b] = {};
            for (const f in e)
                Object.prototype.hasOwnProperty.call(e, f) && (b[f] = c(e[f]))
        }
        return a
    }
    function Pb(a, b, c, d, e) {
        if (null != a) {
            if (Array.isArray(a))
                a = lb(a, void 0, 0) ? void 0 : e && (a[t] | 0) & 2 ? a : Qb(a, b, c, void 0 !== d, e);
            else if (jb(a)) {
                const f = {};
                for (let g in a)
                    Object.prototype.hasOwnProperty.call(a, g) && (f[g] = Pb(a[g], b, c, d, e));
                a = f
            } else
                a = b(a, d);
            return a
        }
    }
    function Qb(a, b, c, d, e) {
        const f = d || c ? a[t] | 0 : 0;
        d = d ? !!(f & 32) : void 0;
        a = ab(a);
        for (let g = 0; g < a.length; g++)
            a[g] = Pb(a[g], b, c, d, e);
        c && c(f, a);
        return a
    }
    function Rb(a) {
        return a.ma === gb ? Sb(a, Qb(a.B, Rb, void 0, void 0, !1), !0) : null != a && a instanceof Uint8Array ? new Uint8Array(a) : a
    }
    function Tb(a) {
        return a.ma === gb ? a.toJSON() : Nb(a)
    }
    var Ub = Wa ? structuredClone : a=>Qb(a, Rb, void 0, void 0, !1);
    function Vb(a, b, c=eb) {
        if (null != a) {
            if (a instanceof Uint8Array)
                return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
                var d = a[t] | 0;
                if (d & 2)
                    return a;
                b && (b = 0 === d || !!(d & 32) && !(d & 64 || !(d & 16)));
                return b ? x(a, (d | 34) & -12293) : Qb(a, Vb, d & 4 ? eb : c, !0, !0)
            }
            a.ma === gb && (c = a.B,
            d = c[t],
            a = d & 2 ? a : Lb(a.constructor, Wb(c, d, !0)));
            return a
        }
    }
    function Wb(a, b, c) {
        const d = c || b & 2 ? eb : db
          , e = !!(b & 32);
        a = Ob(a, b, f=>Vb(f, e, d));
        a[t] = a[t] | 32 | (c ? 2 : 0);
        return a
    }
    function Xb(a) {
        const b = a.B
          , c = b[t];
        return c & 2 ? Lb(a.constructor, Wb(b, c, !1)) : a
    }
    ;function Yb(a, b) {
        a = a.B;
        return Zb(a, a[t], b)
    }
    function Zb(a, b, c, d) {
        if (-1 === c)
            return null;
        if (c >= fb(b)) {
            if (b & 256)
                return a[a.length - 1][c]
        } else {
            var e = a.length;
            if (d && b & 256 && (d = a[e - 1][c],
            null != d))
                return d;
            b = c + (+!!(b & 512) - 1);
            if (b < e)
                return a[b]
        }
    }
    function y(a, b, c) {
        const d = a.B;
        let e = d[t];
        ob(e);
        B(d, e, b, c);
        return a
    }
    function B(a, b, c, d, e) {
        const f = fb(b);
        if (c >= f || e) {
            let g = b;
            if (b & 256)
                e = a[a.length - 1];
            else {
                if (null == d)
                    return g;
                e = a[f + (+!!(b & 512) - 1)] = {};
                g |= 256
            }
            e[c] = d;
            c < f && (a[c + (+!!(b & 512) - 1)] = void 0);
            g !== b && x(a, g);
            return g
        }
        a[c + (+!!(b & 512) - 1)] = d;
        b & 256 && (a = a[a.length - 1],
        c in a && delete a[c]);
        return b
    }
    function $b(a, b, c) {
        return void 0 !== ac(a, b, c, !1)
    }
    function bc(a, b) {
        a = Yb(a, b);
        return null == a || "boolean" === typeof a ? a : "number" === typeof a ? !!a : void 0
    }
    function cc(a, b, c) {
        a = a.B;
        let d = a[t];
        const e = 2 & d ? 1 : 2;
        let f = dc(a, d, b);
        var g = f[t] | 0;
        if (!(4 & g)) {
            if (4 & g || Object.isFrozen(f))
                f = ab(f),
                g = ec(g, d, !1),
                d = B(a, d, b, f);
            var h = 0;
            let k = 0;
            for (; h < f.length; h++) {
                const m = c(f[h]);
                null != m && (f[k++] = m)
            }
            k < h && (f.length = k);
            g = fc(g, d);
            g = u(g, 20, !0);
            g = u(g, 4096, !1);
            g = u(g, 8192, !1);
            x(f, g);
            2 & g && Object.freeze(f)
        }
        gc(g) || (c = g,
        (h = 1 === e) ? g = u(g, 2, !0) : g = u(g, 32, !1),
        g !== c && x(f, g),
        h && Object.freeze(f));
        2 === e && gc(g) && (f = ab(f),
        g = ec(g, d, !1),
        x(f, g),
        B(a, d, b, f));
        return f
    }
    function dc(a, b, c) {
        a = Zb(a, b, c);
        return Array.isArray(a) ? a : mb
    }
    function fc(a, b) {
        var c = !1;
        0 === a && (a = ec(a, b, c));
        return a = u(a, 1, !0)
    }
    function gc(a) {
        return !!(2 & a) && !!(4 & a) || !!(2048 & a)
    }
    function hc(a, b, c, d) {
        const e = a.B;
        let f = e[t];
        ob(f);
        if (null == c)
            return B(e, f, b),
            a;
        let g = c[t] | 0
          , h = g;
        var k = !!(2 & g) || Object.isFrozen(c);
        const m = !k && !1;
        if (!(4 & g))
            for (g = 21,
            k && (c = ab(c),
            h = 0,
            g = ec(g, f, !0)),
            k = 0; k < c.length; k++)
                c[k] = d(c[k]);
        m && (c = ab(c),
        h = 0,
        g = ec(g, f, !0));
        g !== h && x(c, g);
        B(e, f, b, c);
        return a
    }
    function C(a, b, c, d) {
        const e = a.B;
        let f = e[t];
        ob(f);
        B(e, f, b, ("0" === d ? 0 === Number(c) : c === d) ? void 0 : c);
        return a
    }
    function ic(a, b, c, d) {
        const e = a.B;
        let f = e[t];
        ob(f);
        (c = jc(e, f, c)) && c !== b && null != d && (f = B(e, f, c));
        B(e, f, b, d);
        return a
    }
    function kc(a, b, c) {
        a = a.B;
        return jc(a, a[t], b) === c ? c : -1
    }
    function lc(a, b) {
        a = a.B;
        return jc(a, a[t], b)
    }
    function jc(a, b, c) {
        let d = 0;
        for (let e = 0; e < c.length; e++) {
            const f = c[e];
            null != Zb(a, b, f) && (0 !== d && (b = B(a, b, d)),
            d = f)
        }
        return d
    }
    function mc(a) {
        var b = nc;
        a = a.B;
        let c = a[t];
        ob(c);
        const d = Zb(a, c, 3);
        b = Xb(Jb(d, b, !0, c));
        d !== b && B(a, c, 3, b);
        return b
    }
    function ac(a, b, c, d) {
        a = a.B;
        let e = a[t];
        const f = Zb(a, e, c, d);
        b = Jb(f, b, !1, e);
        b !== f && null != b && B(a, e, c, b, d);
        return b
    }
    function D(a, b, c) {
        b = ac(a, b, c, !1);
        if (null == b)
            return b;
        a = a.B;
        let d = a[t];
        if (!(d & 2)) {
            const e = Xb(b);
            e !== b && (b = e,
            B(a, d, c, b, !1))
        }
        return b
    }
    function E(a, b, c) {
        a = a.B;
        var d = a[t]
          , e = d
          , f = !(2 & d)
          , g = !!(2 & e)
          , h = g ? 1 : 2;
        d = 1 === h;
        h = 2 === h;
        f && (f = !g);
        g = dc(a, e, c);
        var k = g[t] | 0;
        const m = !!(4 & k);
        if (!m) {
            k = fc(k, e);
            var l = g
              , n = e;
            const r = !!(2 & k);
            r && (n = u(n, 2, !0));
            let v = !r
              , w = !0
              , A = 0
              , z = 0;
            for (; A < l.length; A++) {
                const G = Jb(l[A], b, !1, n);
                if (G instanceof b) {
                    if (!r) {
                        const K = !!((G.B[t] | 0) & 2);
                        v && (v = !K);
                        w && (w = K)
                    }
                    l[z++] = G
                }
            }
            z < A && (l.length = z);
            k = u(k, 4, !0);
            k = u(k, 16, w);
            k = u(k, 8, v);
            x(l, k);
            r && Object.freeze(l)
        }
        b = !!(8 & k) || d && !g.length;
        if (f && !b) {
            gc(k) && (g = ab(g),
            k = ec(k, e, !1),
            e = B(a, e, c, g));
            b = g;
            f = k;
            for (l = 0; l < b.length; l++)
                k = b[l],
                n = Xb(k),
                k !== n && (b[l] = n);
            f = u(f, 8, !0);
            f = u(f, 16, !b.length);
            x(b, f);
            k = f
        }
        gc(k) || (b = k,
        d ? k = u(k, !g.length || 16 & k && (!m || 32 & k) ? 2 : 2048, !0) : k = u(k, 32, !1),
        k !== b && x(g, k),
        d && Object.freeze(g));
        h && gc(k) && (g = ab(g),
        k = ec(k, e, !1),
        x(g, k),
        B(a, e, c, g));
        return g
    }
    function oc(a, b, c) {
        null == c && (c = void 0);
        return y(a, b, c)
    }
    function pc(a, b, c, d) {
        null == d && (d = void 0);
        return ic(a, b, c, d)
    }
    function qc(a, b, c) {
        const d = a.B;
        let e = d[t];
        ob(e);
        if (null == c)
            return B(d, e, b),
            a;
        let f = c[t] | 0
          , g = f;
        const h = !!(2 & f) || !!(2048 & f)
          , k = h || Object.isFrozen(c);
        let m = !0
          , l = !0;
        for (let r = 0; r < c.length; r++) {
            var n = c[r];
            h || (n = !!((n.B[t] | 0) & 2),
            m && (m = !n),
            l && (l = n))
        }
        h || (f = u(f, 5, !0),
        f = u(f, 8, m),
        f = u(f, 16, l));
        k && f !== g && (c = ab(c),
        g = 0,
        f = ec(f, e, !0));
        f !== g && x(c, f);
        B(d, e, b, c);
        return a
    }
    function ec(a, b, c) {
        a = u(a, 2, !!(2 & b));
        a = u(a, 32, !!(32 & b) && c);
        return a = u(a, 2048, !1)
    }
    function F(a, b) {
        return Bb(Yb(a, b))
    }
    function rc(a, b) {
        a = Yb(a, b);
        var c;
        null == a ? c = a : wb(a) ? "number" === typeof a ? c = Eb(a) : c = Fb(a) : c = void 0;
        return c
    }
    function H(a, b) {
        return Ib(Yb(a, b))
    }
    function I(a, b) {
        return yb(Yb(a, b))
    }
    function sc(a) {
        return a ?? 0
    }
    function J(a, b, c=!1) {
        return bc(a, b) ?? c
    }
    function tc(a, b) {
        return sc(rc(a, b))
    }
    function uc(a, b) {
        a = a.B;
        let c = a[t];
        const d = Zb(a, c, b);
        var e = null == d || "number" === typeof d ? d : "NaN" === d || "Infinity" === d || "-Infinity" === d ? Number(d) : void 0;
        null != e && e !== d && B(a, c, b, e);
        return e ?? 0
    }
    function L(a, b) {
        return H(a, b) ?? ""
    }
    function M(a, b) {
        return sc(I(a, b))
    }
    function vc(a, b, c, d) {
        return D(a, b, kc(a, d, c))
    }
    function wc(a, b, c) {
        if (null != c) {
            var d = !!d;
            if (!wb(c))
                throw tb("int64");
            "string" === typeof c ? c = Fb(c) : d ? (c = Math.trunc(c),
            Number.isSafeInteger(c) ? c = String(c) : (d = String(c),
            Db(d) ? c = d : (Za(c),
            c = $a()))) : c = Eb(c)
        }
        return C(a, b, c, "0")
    }
    function xc(a, b) {
        var c = performance.now();
        if (null != c && "number" !== typeof c)
            throw Error(`Value of float/double field must be a number, found ${typeof c}: ${c}`);
        C(a, b, c, 0)
    }
    function yc(a, b, c) {
        return C(a, b, Hb(c), "")
    }
    ;var N = class {
        constructor(a) {
            a: {
                null == a && (a = Kb);
                Kb = void 0;
                if (null == a) {
                    var b = 96;
                    a = []
                } else {
                    if (!Array.isArray(a))
                        throw Error();
                    b = a[t] | 0;
                    if (b & 64)
                        break a;
                    var c = a;
                    b |= 64;
                    var d = c.length;
                    if (d && (--d,
                    jb(c[d]))) {
                        b |= 256;
                        c = d - (+!!(b & 512) - 1);
                        if (1024 <= c)
                            throw Error();
                        b = b & -16760833 | (c & 1023) << 14
                    }
                }
                x(a, b)
            }
            this.B = a
        }
        toJSON() {
            return kb ? Sb(this, this.B, !1) : Sb(this, Qb(this.B, Tb, void 0, void 0, !1), !0)
        }
    }
    ;
    N.prototype.ma = gb;
    function Sb(a, b, c) {
        const d = a.constructor.u
          , e = (c ? a.B : b)[t];
        a = b.length;
        if (!a)
            return b;
        let f, g;
        if (jb(c = b[a - 1])) {
            a: {
                var h = c;
                let l = {}
                  , n = !1;
                for (var k in h) {
                    if (!Object.prototype.hasOwnProperty.call(h, k))
                        continue;
                    let r = h[k];
                    if (Array.isArray(r)) {
                        let v = r;
                        if (lb(r, d, +k) || ib(r) && 0 === r.size)
                            r = null;
                        r != v && (n = !0)
                    }
                    null != r ? l[k] = r : n = !0
                }
                if (n) {
                    for (var m in l) {
                        h = l;
                        break a
                    }
                    h = null
                }
            }
            h != c && (f = !0);
            a--
        }
        for (k = +!!(e & 512) - 1; 0 < a; a--) {
            m = a - 1;
            c = b[m];
            m -= k;
            if (!(null == c || lb(c, d, m) || ib(c) && 0 === c.size))
                break;
            g = !0
        }
        if (!f && !g)
            return b;
        b = Array.prototype.slice.call(b, 0, a);
        h && b.push(h);
        return b
    }
    function zc(a, b) {
        if (null == b)
            return new a;
        if (!Array.isArray(b))
            throw Error("must be an array");
        if (Object.isFrozen(b) || Object.isSealed(b) || !Object.isExtensible(b))
            throw Error("arrays passed to jspb constructors must be mutable");
        b[t] |= 128;
        return Lb(a, cb(b))
    }
    ;function Ac(a, b) {
        const c = Bc;
        Bc = void 0;
        if (!b(a))
            throw b = c ? c() + "\n" : "",
            Error(b + String(a));
    }
    const Cc = a=>null !== a && void 0 !== a;
    let Bc = void 0;
    function Ec(a) {
        return b=>{
            if (null == b || "" == b)
                b = new a;
            else {
                b = JSON.parse(b);
                if (!Array.isArray(b))
                    throw Error(void 0);
                b = Lb(a, cb(b))
            }
            return b
        }
    }
    ;var Fc = class extends N {
    }
    ;
    var Gc = class extends N {
    }
    ;
    Gc.u = [2, 3, 4];
    var O = class {
        constructor(a, b=!1) {
            this.g = a;
            this.defaultValue = b
        }
    }
      , Hc = class {
        constructor(a, b=0) {
            this.g = a;
            this.defaultValue = b
        }
    }
      , Ic = class {
        constructor(a) {
            this.g = a;
            this.defaultValue = ""
        }
    }
      , Jc = class {
        constructor(a, b=[]) {
            this.g = a;
            this.defaultValue = b
        }
    }
    ;
    var Kc = new O(203);
    function Lc(a) {
        return function() {
            return !a.apply(this, arguments)
        }
    }
    function Mc(a) {
        let b = !1, c;
        return function() {
            b || (c = a(),
            b = !0);
            return c
        }
    }
    function Nc(a) {
        let b = a;
        return function() {
            if (b) {
                const c = b;
                b = null;
                c()
            }
        }
    }
    ;function Oc(a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1)
    }
    function Pc(a, b, c) {
        return a.removeEventListener ? (a.removeEventListener(b, c, !1),
        !0) : !1
    }
    ;var P = a=>{
        var b = "Aa";
        if (a.Aa && a.hasOwnProperty(b))
            return a.Aa;
        b = new a;
        return a.Aa = b
    }
    ;
    var Qc = class {
        constructor() {
            const a = {};
            this.i = (b,c)=>null != a[b] ? a[b] : c;
            this.j = (b,c)=>null != a[b] ? a[b] : c;
            this.g = (b,c)=>null != a[b] ? a[b] : c;
            this.h = (b,c)=>null != a[b] ? a[b] : c;
            this.s = ()=>{}
        }
    }
    ;
    function Q(a) {
        return P(Qc).i(a.g, a.defaultValue)
    }
    function Rc(a) {
        return P(Qc).j(a.g, a.defaultValue)
    }
    ;function Sc(a, b) {
        const c = {};
        for (const d in a)
            b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    }
    function Tc(a, b) {
        for (const c in a)
            if (b.call(void 0, a[c], c, a))
                return !0;
        return !1
    }
    function Uc(a) {
        const b = [];
        let c = 0;
        for (const d in a)
            b[c++] = a[d];
        return b
    }
    function Vc(a) {
        const b = {};
        for (const c in a)
            b[c] = a[c];
        return b
    }
    ;var Wc;
    var Xc = class {
        constructor(a) {
            this.h = a
        }
        toString() {
            return this.h + ""
        }
    }
    ;
    function Yc(a, b) {
        a = Zc.exec($c(a).toString());
        var c = a[3] || "";
        return ad(a[1] + bd("?", a[2] || "", b) + bd("#", c))
    }
    function $c(a) {
        return a instanceof Xc && a.constructor === Xc ? a.h : "type_error:TrustedResourceUrl"
    }
    var Zc = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/
      , cd = {};
    function ad(a) {
        if (void 0 === Wc) {
            var b = null;
            var c = p.trustedTypes;
            if (c && c.createPolicy) {
                try {
                    b = c.createPolicy("goog#html", {
                        createHTML: na,
                        createScript: na,
                        createScriptURL: na
                    })
                } catch (d) {
                    p.console && p.console.error(d.message)
                }
                Wc = b
            } else
                Wc = b
        }
        a = (b = Wc) ? b.createScriptURL(a) : a;
        return new Xc(a,cd)
    }
    function bd(a, b, c) {
        if (null == c)
            return b;
        if ("string" === typeof c)
            return c ? a + encodeURIComponent(c) : "";
        for (var d in c)
            if (Object.prototype.hasOwnProperty.call(c, d)) {
                var e = c[d];
                e = Array.isArray(e) ? e : [e];
                for (var f = 0; f < e.length; f++) {
                    var g = e[f];
                    null != g && (b || (b = a),
                    b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(g)))
                }
            }
        return b
    }
    ;var dd = class {
        constructor(a) {
            this.g = a
        }
        toString() {
            return this.g.toString()
        }
    }
    ;
    function ed(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    }
    ;function fd(a, b) {
        b = String(b);
        "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
        return a.createElement(b)
    }
    function gd(a) {
        this.g = a || p.document || document
    }
    gd.prototype.contains = function(a, b) {
        if (!a || !b)
            return !1;
        if (a.contains && 1 == b.nodeType)
            return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition)
            return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b; )
            b = b.parentNode;
        return b == a
    }
    ;
    function hd() {
        return sa && xa ? xa.mobile : !id() && (q("iPod") || q("iPhone") || q("Android") || q("IEMobile"))
    }
    function id() {
        return sa && xa ? !xa.mobile && (q("iPad") || q("Android") || q("Silk")) : q("iPad") || q("Android") && !q("Mobile") || q("Silk")
    }
    ;var jd = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$")
      , kd = /#|$/;
    function ld(a, b) {
        var c = a.search(kd);
        a: {
            var d = 0;
            for (var e = b.length; 0 <= (d = a.indexOf(b, d)) && d < c; ) {
                var f = a.charCodeAt(d - 1);
                if (38 == f || 63 == f)
                    if (f = a.charCodeAt(d + e),
                    !f || 61 == f || 38 == f || 35 == f)
                        break a;
                d += e + 1
            }
            d = -1
        }
        if (0 > d)
            return null;
        e = a.indexOf("&", d);
        if (0 > e || e > c)
            e = c;
        d += b.length + 1;
        return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " "))
    }
    ;function md(a, b=`unexpected value ${a}!`) {
        throw Error(b);
    }
    ;/* 
 
 SPDX-License-Identifier: Apache-2.0 
*/
    const nd = "alternate author bookmark canonical cite help icon license modulepreload next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" ");
    function od(a) {
        try {
            var b;
            if (b = !!a && null != a.location.href)
                a: {
                    try {
                        Pa(a.foo);
                        b = !0;
                        break a
                    } catch (c) {}
                    b = !1
                }
            return b
        } catch {
            return !1
        }
    }
    function pd(a) {
        return od(a.top) ? a.top : null
    }
    function qd(a, b) {
        const c = rd("SCRIPT", a);
        c.src = $c(b);
        (void 0)?.tc || (b = (b = (c.ownerDocument && c.ownerDocument.defaultView || window).document.querySelector?.("script[nonce]")) ? b.nonce || b.getAttribute("nonce") || "" : "") && c.setAttribute("nonce", b);
        return (a = a.getElementsByTagName("script")[0]) && a.parentNode ? (a.parentNode.insertBefore(c, a),
        c) : null
    }
    function sd(a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    }
    function td() {
        if (!globalThis.crypto)
            return Math.random();
        try {
            const a = new Uint32Array(1);
            globalThis.crypto.getRandomValues(a);
            return a[0] / 65536 / 65536
        } catch {
            return Math.random()
        }
    }
    function ud(a, b) {
        if (a)
            for (const c in a)
                Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }
    function vd(a) {
        const b = a.length;
        if (0 == b)
            return 0;
        let c = 305419896;
        for (let d = 0; d < b; d++)
            c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return 0 < c ? c : 4294967296 + c
    }
    var wd = /^([0-9.]+)px$/
      , xd = /^(-?[0-9.]{1,30})$/;
    function yd(a) {
        if (!xd.test(a))
            return null;
        a = Number(a);
        return isNaN(a) ? null : a
    }
    function R(a) {
        return (a = wd.exec(a)) ? +a[1] : null
    }
    var zd = (a,b)=>{
        for (let e = 0; 50 > e; ++e) {
            try {
                var c = !(!a.frames || !a.frames[b])
            } catch {
                c = !1
            }
            if (c)
                return a;
            a: {
                try {
                    const f = a.parent;
                    if (f && f != a) {
                        var d = f;
                        break a
                    }
                } catch {}
                d = null
            }
            if (!(a = d))
                break
        }
        return null
    }
      , Ad = Mc(()=>hd() ? 2 : id() ? 1 : 0)
      , Bd = a=>{
        ud({
            display: "none"
        }, (b,c)=>{
            a.style.setProperty(c, b, "important")
        }
        )
    }
    ;
    let Cd = [];
    const Dd = ()=>{
        const a = Cd;
        Cd = [];
        for (const b of a)
            try {
                b()
            } catch {}
    }
    ;
    function Ed() {
        var a = P(Qc).h(Fd.g, Fd.defaultValue)
          , b = S.document;
        if (a.length && b.head)
            for (const c of a)
                c && b.head && (a = rd("META"),
                b.head.appendChild(a),
                a.httpEquiv = "origin-trial",
                a.content = c)
    }
    var Gd = ()=>{
        var a = Math.random;
        return Math.floor(a() * 2 ** 52)
    }
      , Hd = a=>{
        if ("number" !== typeof a.goog_pvsid)
            try {
                Object.defineProperty(a, "goog_pvsid", {
                    value: Gd(),
                    configurable: !1
                })
            } catch (b) {}
        return Number(a.goog_pvsid) || -1
    }
      , Jd = a=>{
        var b = Id;
        "complete" === b.readyState || "interactive" === b.readyState ? (Cd.push(a),
        1 == Cd.length && (window.Promise ? Promise.resolve().then(Dd) : window.setImmediate ? setImmediate(Dd) : setTimeout(Dd, 0))) : b.addEventListener("DOMContentLoaded", a)
    }
    ;
    function rd(a, b=document) {
        return b.createElement(String(a).toLowerCase())
    }
    ;function Kd(a, b, c=null, d=!1, e=!1) {
        Ld(a, b, c, d, e)
    }
    function Ld(a, b, c, d, e=!1) {
        a.google_image_requests || (a.google_image_requests = []);
        const f = rd("IMG", a.document);
        if (c || d) {
            const g = h=>{
                c && c(h);
                if (d) {
                    h = a.google_image_requests;
                    const k = Ha(h, f);
                    0 <= k && Array.prototype.splice.call(h, k, 1)
                }
                Pc(f, "load", g);
                Pc(f, "error", g)
            }
            ;
            Oc(f, "load", g);
            Oc(f, "error", g)
        }
        e && (f.attributionSrc = "");
        f.src = b;
        a.google_image_requests.push(f)
    }
    var Od = (a,b)=>{
        let c = `https://${"pagead2.googlesyndication.com"}/pagead/gen_204?id=${b}`;
        ud(a, (d,e)=>{
            if (d || 0 === d)
                c += `&${e}=${encodeURIComponent("" + d)}`
        }
        );
        Md(c)
    }
      , Md = a=>{
        var b = window;
        b.fetch ? b.fetch(a, {
            keepalive: !0,
            credentials: "include",
            redirect: "follow",
            method: "get",
            mode: "no-cors"
        }) : Kd(b, a, void 0, !1, !1)
    }
    ;
    let Pd = null;
    var Id = document
      , S = window;
    function Qd(a) {
        this.g = a || {
            cookie: ""
        }
    }
    Qd.prototype.set = function(a, b, c) {
        let d, e, f, g = !1, h;
        "object" === typeof c && (h = c.uc,
        g = c.wc || !1,
        f = c.domain || void 0,
        e = c.path || void 0,
        d = c.Ab);
        if (/[;=\s]/.test(a))
            throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b))
            throw Error('Invalid cookie value "' + b + '"');
        void 0 === d && (d = -1);
        this.g.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (e ? ";path=" + e : "") + (0 > d ? "" : 0 == d ? ";expires=" + (new Date(1970,1,1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * d)).toUTCString()) + (g ? ";secure" : "") + (null != h ? ";samesite=" + h : "")
    }
    ;
    Qd.prototype.get = function(a, b) {
        const c = a + "="
          , d = (this.g.cookie || "").split(";");
        for (let e = 0, f; e < d.length; e++) {
            f = pa(d[e]);
            if (0 == f.lastIndexOf(c, 0))
                return f.slice(c.length);
            if (f == a)
                return ""
        }
        return b
    }
    ;
    Qd.prototype.isEmpty = function() {
        return !this.g.cookie
    }
    ;
    Qd.prototype.clear = function() {
        var a = (this.g.cookie || "").split(";");
        const b = [];
        var c = [];
        let d, e;
        for (let f = 0; f < a.length; f++)
            e = pa(a[f]),
            d = e.indexOf("="),
            -1 == d ? (b.push(""),
            c.push(e)) : (b.push(e.substring(0, d)),
            c.push(e.substring(d + 1)));
        for (c = b.length - 1; 0 <= c; c--)
            a = b[c],
            this.get(a),
            this.set(a, "", {
                Ab: 0,
                path: void 0,
                domain: void 0
            })
    }
    ;
    function Rd(a, b=window) {
        if (J(a, 5))
            try {
                return b.localStorage
            } catch {}
        return null
    }
    function Sd(a=window) {
        try {
            return a.localStorage
        } catch {
            return null
        }
    }
    ;function Td(a, ...b) {
        if (0 === b.length)
            return ad(a[0]);
        let c = a[0];
        for (let d = 0; d < b.length; d++)
            c += encodeURIComponent(b[d]) + a[d + 1];
        return ad(c)
    }
    ;let Ud = null;
    var Vd = (a,b=[])=>{
        let c = !1;
        p.google_logging_queue || (c = !0,
        p.google_logging_queue = []);
        p.google_logging_queue.push([a, b]);
        if (a = c) {
            if (null == Ud) {
                Ud = !1;
                try {
                    const d = pd(p);
                    d && -1 !== d.location.hash.indexOf("google_logging") && (Ud = !0);
                    Sd(p)?.getItem("google_logging") && (Ud = !0)
                } catch (d) {}
            }
            a = Ud
        }
        a && qd(p.document, Td`https://pagead2.googlesyndication.com/pagead/js/logging_library.js`)
    }
    ;
    function Wd(a=p) {
        let b = a.context || a.AMP_CONTEXT_DATA;
        if (!b)
            try {
                b = a.parent.context || a.parent.AMP_CONTEXT_DATA
            } catch {}
        return b?.pageViewId && b?.canonicalUrl ? b : null
    }
    function Xd(a=Wd()) {
        return a ? od(a.master) ? a.master : null : null
    }
    ;var Yd = a=>{
        a = Xd(Wd(a)) || a;
        a.google_unique_id = (a.google_unique_id || 0) + 1;
        return a.google_unique_id
    }
      , Zd = a=>{
        a = a.google_unique_id;
        return "number" === typeof a ? a : 0
    }
      , $d = ()=>{
        if (!S)
            return !1;
        try {
            return !(!S.navigator.standalone && !S.top.navigator.standalone)
        } catch (a) {
            return !1
        }
    }
      , ae = a=>{
        if (!a)
            return "";
        a = a.toLowerCase();
        "ca-" != a.substring(0, 3) && (a = "ca-" + a);
        return a
    }
    ;
    class be {
        constructor(a, b) {
            this.error = a;
            this.context = b.context;
            this.msg = b.message || "";
            this.id = b.id || "jserror";
            this.meta = {}
        }
    }
    var ce = a=>!!(a.error && a.meta && a.id);
    const de = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");
    var ee = class {
        constructor(a, b) {
            this.g = a;
            this.h = b
        }
    }
      , fe = class {
        constructor(a, b, c) {
            this.url = a;
            this.l = b;
            this.Za = !!c;
            this.depth = null
        }
    }
    ;
    let ge = null;
    function he() {
        if (null === ge) {
            ge = "";
            try {
                let a = "";
                try {
                    a = p.top.location.hash
                } catch (b) {
                    a = p.location.hash
                }
                if (a) {
                    const b = a.match(/\bdeid=([\d,]+)/);
                    ge = b ? b[1] : ""
                }
            } catch (a) {}
        }
        return ge
    }
    ;function ie() {
        const a = p.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    }
    function je() {
        const a = p.performance;
        return a && a.now ? a.now() : null
    }
    ;var ke = class {
        constructor(a, b) {
            var c = je() || ie();
            this.label = a;
            this.type = b;
            this.value = c;
            this.duration = 0;
            this.taskId = this.slotId = void 0;
            this.uniqueId = Math.random()
        }
    }
    ;
    const le = p.performance
      , me = !!(le && le.mark && le.measure && le.clearMarks)
      , ne = Mc(()=>{
        var a;
        if (a = me)
            a = he(),
            a = !!a.indexOf && 0 <= a.indexOf("1337");
        return a
    }
    );
    function oe(a) {
        a && le && ne() && (le.clearMarks(`goog_${a.label}_${a.uniqueId}_start`),
        le.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))
    }
    function pe(a) {
        a.g = !1;
        a.h != a.i.google_js_reporting_queue && (ne() && Ia(a.h, oe),
        a.h.length = 0)
    }
    class qe {
        constructor(a) {
            this.h = [];
            this.i = a || p;
            let b = null;
            a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [],
            this.h = a.google_js_reporting_queue,
            b = a.google_measure_js_timing);
            this.g = ne() || (null != b ? b : 1 > Math.random())
        }
        start(a, b) {
            if (!this.g)
                return null;
            a = new ke(a,b);
            b = `goog_${a.label}_${a.uniqueId}_start`;
            le && ne() && le.mark(b);
            return a
        }
        end(a) {
            if (this.g && "number" === typeof a.value) {
                a.duration = (je() || ie()) - a.value;
                var b = `goog_${a.label}_${a.uniqueId}_end`;
                le && ne() && le.mark(b);
                !this.g || 2048 < this.h.length || this.h.push(a)
            }
        }
    }
    ;function re(a, b) {
        const c = {};
        c[a] = b;
        return [c]
    }
    function se(a, b, c, d, e) {
        const f = [];
        ud(a, function(g, h) {
            (g = te(g, b, c, d, e)) && f.push(h + "=" + g)
        });
        return f.join(b)
    }
    function te(a, b, c, d, e) {
        if (null == a)
            return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0,
            d < c.length) {
                const f = [];
                for (let g = 0; g < a.length; g++)
                    f.push(te(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a)
            return e = e || 0,
            2 > e ? encodeURIComponent(se(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }
    function ue(a) {
        let b = 1;
        for (const c in a.h)
            b = c.length > b ? c.length : b;
        return 3997 - b - a.i.length - 1
    }
    function ve(a, b) {
        let c = "https://pagead2.googlesyndication.com" + b
          , d = ue(a) - b.length;
        if (0 > d)
            return "";
        a.g.sort(function(f, g) {
            return f - g
        });
        b = null;
        let e = "";
        for (let f = 0; f < a.g.length; f++) {
            const g = a.g[f]
              , h = a.h[g];
            for (let k = 0; k < h.length; k++) {
                if (!d) {
                    b = null == b ? g : b;
                    break
                }
                let m = se(h[k], a.i, ",$");
                if (m) {
                    m = e + m;
                    if (d >= m.length) {
                        d -= m.length;
                        c += m;
                        e = a.i;
                        break
                    }
                    b = null == b ? g : b
                }
            }
        }
        a = "";
        null != b && (a = e + "trn=" + b);
        return c + a
    }
    class we {
        constructor() {
            this.i = "&";
            this.h = {};
            this.j = 0;
            this.g = []
        }
    }
    ;function xe(a) {
        let b = a.toString();
        a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
        a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
        if (a.stack) {
            a = a.stack;
            var c = b;
            try {
                -1 == a.indexOf(c) && (a = c + "\n" + a);
                let d;
                for (; a != d; )
                    d = a,
                    a = a.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"), "$1");
                b = a.replace(RegExp("\n *", "g"), "\n")
            } catch (d) {
                b = c
            }
        }
        return b
    }
    var ze = class {
        constructor(a, b, c=null) {
            this.A = a;
            this.C = b;
            this.h = c;
            this.g = null;
            this.i = !1;
            this.s = this.J
        }
        hb(a) {
            this.s = a
        }
        Da(a) {
            this.g = a
        }
        j(a) {
            this.i = a
        }
        ea(a, b, c) {
            let d, e;
            try {
                this.h && this.h.g ? (e = this.h.start(a.toString(), 3),
                d = b(),
                this.h.end(e)) : d = b()
            } catch (f) {
                b = this.C;
                try {
                    oe(e),
                    b = this.s(a, new be(f,{
                        message: xe(f)
                    }), void 0, c)
                } catch (g) {
                    this.J(217, g)
                }
                if (b)
                    window.console?.error?.(f);
                else
                    throw f;
            }
            return d
        }
        oa(a, b) {
            return (...c)=>this.ea(a, ()=>b.apply(void 0, c))
        }
        J(a, b, c, d, e) {
            e = e || "jserror";
            let f;
            try {
                const Ta = new we;
                var g = Ta;
                g.g.push(1);
                g.h[1] = re("context", a);
                ce(b) || (b = new be(b,{
                    message: xe(b)
                }));
                if (b.msg) {
                    let ka = b.msg;
                    null == ka.substring && (ka = `b/320546888 ${typeof ka} ${ka}`);
                    g = Ta;
                    var h = ka.substring(0, 512);
                    g.g.push(2);
                    g.h[2] = re("msg", h)
                }
                var k = b.meta || {};
                b = k;
                if (this.g)
                    try {
                        this.g(b)
                    } catch (ka) {}
                if (d)
                    try {
                        d(b)
                    } catch (ka) {}
                d = Ta;
                k = [k];
                d.g.push(3);
                d.h[3] = k;
                d = p;
                k = [];
                b = null;
                do {
                    var m = d;
                    if (od(m)) {
                        var l = m.location.href;
                        b = m.document && m.document.referrer || null
                    } else
                        l = b,
                        b = null;
                    k.push(new fe(l || "",m));
                    try {
                        d = m.parent
                    } catch (ka) {
                        d = null
                    }
                } while (d && m != d);
                for (let ka = 0, Yf = k.length - 1; ka <= Yf; ++ka)
                    k[ka].depth = Yf - ka;
                m = p;
                if (m.location && m.location.ancestorOrigins && m.location.ancestorOrigins.length == k.length - 1)
                    for (l = 1; l < k.length; ++l) {
                        var n = k[l];
                        n.url || (n.url = m.location.ancestorOrigins[l - 1] || "",
                        n.Za = !0)
                    }
                var r = k;
                let Dc = new fe(p.location.href,p,!1);
                m = null;
                const Nd = r.length - 1;
                for (n = Nd; 0 <= n; --n) {
                    var v = r[n];
                    !m && de.test(v.url) && (m = v);
                    if (v.url && !v.Za) {
                        Dc = v;
                        break
                    }
                }
                v = null;
                const Xj = r.length && r[Nd].url;
                0 != Dc.depth && Xj && (v = r[Nd]);
                f = new ee(Dc,v);
                if (f.h) {
                    r = Ta;
                    var w = f.h.url || "";
                    r.g.push(4);
                    r.h[4] = re("top", w)
                }
                var A = {
                    url: f.g.url || ""
                };
                if (f.g.url) {
                    var z = f.g.url.match(jd)
                      , G = z[1]
                      , K = z[3]
                      , ta = z[4];
                    w = "";
                    G && (w += G + ":");
                    K && (w += "//",
                    w += K,
                    ta && (w += ":" + ta));
                    var Zf = w
                } else
                    Zf = "";
                G = Ta;
                A = [A, {
                    url: Zf
                }];
                G.g.push(5);
                G.h[5] = A;
                ye(this.A, e, Ta, this.i, c)
            } catch (Ta) {
                try {
                    ye(this.A, e, {
                        context: "ecmserr",
                        rctx: a,
                        msg: xe(Ta),
                        url: f && f.g.url
                    }, this.i, c)
                } catch (Dc) {}
            }
            return this.C
        }
        Y(a, b) {
            b.catch(c=>{
                c = c ? c : "unknown rejection";
                this.J(a, c instanceof Error ? c : Error(c), void 0, this.g || void 0)
            }
            )
        }
    }
    ;
    var Ae = a=>"string" === typeof a
      , Be = a=>void 0 === a;
    var Ce = class extends N {
    }
    ;
    Ce.u = [2, 8];
    var De = [3, 4, 5]
      , Ee = [6, 7];
    function Fe(a) {
        return null != a ? !a : a
    }
    function Ge(a, b) {
        let c = !1;
        for (let d = 0; d < a.length; d++) {
            const e = a[d]();
            if (e === b)
                return e;
            null == e && (c = !0)
        }
        if (!c)
            return !b
    }
    function He(a, b) {
        var c = E(a, Ce, 2);
        if (!c.length)
            return Ie(a, b);
        a = M(a, 1);
        if (1 === a)
            return Fe(He(c[0], b));
        c = Ka(c, d=>()=>He(d, b));
        switch (a) {
        case 2:
            return Ge(c, !1);
        case 3:
            return Ge(c, !0)
        }
    }
    function Ie(a, b) {
        const c = lc(a, De);
        a: {
            switch (c) {
            case 3:
                var d = M(a, kc(a, De, 3));
                break a;
            case 4:
                d = M(a, kc(a, De, 4));
                break a;
            case 5:
                d = M(a, kc(a, De, 5));
                break a
            }
            d = void 0
        }
        if (d && (b = (b = b[c]) && b[d])) {
            try {
                var e = cc(a, 8, Ib);
                var f = b(...e)
            } catch (g) {
                return
            }
            e = M(a, 1);
            if (4 === e)
                return !!f;
            if (5 === e)
                return null != f;
            if (12 === e)
                a = L(a, kc(a, Ee, 7));
            else
                a: {
                    switch (c) {
                    case 4:
                        a = uc(a, kc(a, Ee, 6));
                        break a;
                    case 5:
                        a = L(a, kc(a, Ee, 7));
                        break a
                    }
                    a = void 0
                }
            if (null != a) {
                if (6 === e)
                    return f === a;
                if (9 === e)
                    return null != f && 0 === qa(String(f), a);
                if (null != f)
                    switch (e) {
                    case 7:
                        return f < a;
                    case 8:
                        return f > a;
                    case 12:
                        return Ae(a) && Ae(f) && (new RegExp(a)).test(f);
                    case 10:
                        return null != f && -1 === qa(String(f), a);
                    case 11:
                        return null != f && 1 === qa(String(f), a)
                    }
            }
        }
    }
    function Je(a, b) {
        return !a || !(!b || !He(a, b))
    }
    ;var Ke = class extends N {
    }
    ;
    Ke.u = [4];
    var Le = class extends N {
        getValue() {
            return D(this, Ke, 2)
        }
    }
    ;
    var Me = class extends N {
    }
      , Ne = Ec(Me);
    Me.u = [5];
    var Oe = [1, 2, 3, 6, 7];
    var Pe = class extends N {
        constructor() {
            super()
        }
    }
    ;
    function Qe(a, b) {
        try {
            const c = d=>[{
                [d.Ea]: d.Ba
            }];
            return JSON.stringify([a.filter(d=>d.la).map(c), b.toJSON(), a.filter(d=>!d.la).map(c)])
        } catch (c) {
            return Re(c, b),
            ""
        }
    }
    function Re(a, b) {
        try {
            Od({
                m: xe(a instanceof Error ? a : Error(String(a))),
                b: M(b, 1) || null,
                v: L(b, 2) || null
            }, "rcs_internal")
        } catch (c) {}
    }
    var Se = class {
        constructor(a, b) {
            var c = new Pe;
            a = C(c, 1, xb(a), 0);
            b = yc(a, 2, b);
            a = b.B;
            c = a[t];
            this.i = c & 2 ? b : Lb(b.constructor, Wb(a, c, !0))
        }
    }
    ;
    var Te = class extends N {
        constructor() {
            super()
        }
    }
    ;
    Te.u = [2];
    var Ue = class extends N {
        constructor() {
            super()
        }
        getValue() {
            return M(this, 1)
        }
    }
    ;
    var Ve = class extends N {
        constructor() {
            super()
        }
        getWidth() {
            return tc(this, 1)
        }
        getHeight() {
            return tc(this, 2)
        }
    }
    ;
    var We = class extends N {
        constructor() {
            super()
        }
        getContentUrl() {
            return L(this, 4)
        }
    }
    ;
    var nc = class extends N {
    }
    ;
    var Xe = class extends N {
    }
    ;
    var Ye = class extends N {
        constructor() {
            super()
        }
        getContentUrl() {
            return L(this, 1)
        }
    }
    ;
    var Ze = class extends N {
    }
    ;
    function $e(a) {
        var b = new af;
        return C(b, 1, xb(a), 0)
    }
    var af = class extends N {
        constructor() {
            super()
        }
    }
    ;
    var bf = class extends N {
        constructor() {
            super()
        }
    }
      , cf = [4, 5, 6, 8, 9, 10, 11, 12];
    var df = class extends N {
        constructor() {
            super()
        }
    }
    ;
    function ef(a, b) {
        return C(a, 1, xb(b), 0)
    }
    function ff(a, b) {
        return C(a, 2, xb(b), 0)
    }
    var gf = class extends N {
        constructor() {
            super()
        }
    }
    ;
    var hf = class extends N {
        constructor() {
            super()
        }
    }
      , jf = [1, 2];
    function kf(a, b) {
        return oc(a, 1, b)
    }
    function lf(a, b) {
        return qc(a, 2, b)
    }
    function mf(a, b) {
        return hc(a, 4, b, zb)
    }
    function nf(a, b) {
        return qc(a, 5, b)
    }
    function of(a, b) {
        return C(a, 6, xb(b), 0)
    }
    var pf = class extends N {
        constructor() {
            super()
        }
    }
    ;
    pf.u = [2, 4, 5];
    var qf = class extends N {
        constructor() {
            super()
        }
    }
    ;
    qf.u = [5];
    var rf = [1, 2, 3, 4];
    var sf = class extends N {
        constructor() {
            super()
        }
    }
    ;
    sf.u = [2, 3];
    function tf(a) {
        var b = new uf;
        return pc(b, 4, vf, a)
    }
    var uf = class extends N {
        constructor() {
            super()
        }
        getTagSessionCorrelator() {
            return tc(this, 2)
        }
    }
      , vf = [4, 5, 7, 8];
    var wf = class extends N {
        constructor() {
            super()
        }
    }
    ;
    var xf = class extends N {
        constructor() {
            super()
        }
    }
    ;
    xf.u = [4, 5];
    var yf = class extends N {
        constructor() {
            super()
        }
        getTagSessionCorrelator() {
            return tc(this, 1)
        }
    }
    ;
    yf.u = [2];
    var zf = class extends N {
        constructor() {
            super()
        }
    }
      , Af = [4, 6];
    class Bf extends Se {
        constructor() {
            super(...arguments)
        }
    }
    function Cf(a, ...b) {
        Df(a, ...b.map(c=>({
            la: !0,
            Ea: 3,
            Ba: c.toJSON()
        })))
    }
    function Ef(a, ...b) {
        Df(a, ...b.map(c=>({
            la: !0,
            Ea: 4,
            Ba: c.toJSON()
        })))
    }
    function Ff(a, ...b) {
        Df(a, ...b.map(c=>({
            la: !0,
            Ea: 7,
            Ba: c.toJSON()
        })))
    }
    var Gf = class extends Bf {
    }
    ;
    var Hf = (a,b)=>{
        globalThis.fetch(a, {
            method: "POST",
            body: b,
            keepalive: 65536 > b.length,
            credentials: "omit",
            mode: "no-cors",
            redirect: "follow"
        }).catch(()=>{}
        )
    }
    ;
    function Df(a, ...b) {
        try {
            a.C && 65536 <= Qe(a.g.concat(b), a.i).length && If(a),
            a.j && !a.s && (a.s = !0,
            Jf(a.j, ()=>{
                If(a)
            }
            )),
            a.g.push(...b),
            a.g.length >= a.A && If(a),
            a.g.length && null === a.h && (a.h = setTimeout(()=>{
                If(a)
            }
            , a.H))
        } catch (c) {
            Re(c, a.i)
        }
    }
    function If(a) {
        null !== a.h && (clearTimeout(a.h),
        a.h = null);
        if (a.g.length) {
            var b = Qe(a.g, a.i);
            a.D("https://pagead2.googlesyndication.com/pagead/ping?e=1", b);
            a.g = []
        }
    }
    var Kf = class extends Gf {
        constructor(a, b, c, d, e, f) {
            super(a, b);
            this.D = Hf;
            this.H = c;
            this.A = d;
            this.C = e;
            this.j = f;
            this.g = [];
            this.h = null;
            this.s = !1
        }
    }
      , Lf = class extends Kf {
        constructor(a, b, c=1E3, d=100, e=!1, f) {
            super(a, b, c, d, e && !0, f)
        }
    }
    ;
    function Mf(a, b) {
        var c = Date.now();
        c = Number.isFinite(c) ? Math.round(c) : 0;
        b = wc(b, 1, c);
        c = Hd(window);
        b = wc(b, 2, c);
        return wc(b, 6, a.s)
    }
    function Nf(a, b, c, d, e, f) {
        if (a.i) {
            var g = ff(ef(new gf, b), c);
            b = of(lf(kf(nf(mf(new pf, d), e), g), a.g.slice()), f);
            b = tf(b);
            Ef(a.h, Mf(a, b));
            if (1 === f || 3 === f || 4 === f && !a.g.some(h=>M(h, 1) === M(g, 1) && M(h, 2) === c))
                a.g.push(g),
                100 < a.g.length && a.g.shift()
        }
    }
    function Of(a, b, c, d) {
        if (a.i && a.j) {
            var e = new sf;
            b = qc(e, 2, b);
            c = qc(b, 3, c);
            d && C(c, 1, Ab(d), 0);
            d = new uf;
            d = pc(d, 7, vf, c);
            Ef(a.h, Mf(a, d))
        }
    }
    function Pf(a, b, c, d) {
        if (a.i) {
            var e = new df;
            b = y(e, 1, Ab(b));
            c = y(b, 2, Ab(c));
            d = y(c, 3, xb(d));
            c = new uf;
            d = pc(c, 8, vf, d);
            Ef(a.h, Mf(a, d))
        }
    }
    var Qf = class {
        constructor(a, b, c, d=new Lf(6,"unknown",b)) {
            this.s = a;
            this.j = c;
            this.h = d;
            this.g = [];
            this.i = 0 < a && td() < 1 / a
        }
    }
    ;
    var Rf = class {
        constructor() {
            this.I = {
                [3]: {},
                [4]: {},
                [5]: {}
            }
        }
    }
    ;
    var Sf = /^true$/.test("false");
    function Tf(a, b) {
        switch (b) {
        case 1:
            return M(a, kc(a, Oe, 1));
        case 2:
            return M(a, kc(a, Oe, 2));
        case 3:
            return M(a, kc(a, Oe, 3));
        case 6:
            return M(a, kc(a, Oe, 6));
        default:
            return null
        }
    }
    function Uf(a, b) {
        if (!a)
            return null;
        switch (b) {
        case 1:
            return J(a, 1);
        case 7:
            return L(a, 3);
        case 2:
            return uc(a, 2);
        case 3:
            return L(a, 3);
        case 6:
            return cc(a, 4, Ib);
        default:
            return null
        }
    }
    const Vf = Mc(()=>{
        if (!Sf)
            return {};
        try {
            var a = window;
            try {
                var b = a.sessionStorage
            } catch {
                b = null
            }
            if (b = b?.getItem("GGDFSSK"))
                return JSON.parse(b)
        } catch {}
        return {}
    }
    );
    function Wf(a, b, c, d=0) {
        P(Xf).i[d] = P(Xf).i[d]?.add(b) ?? (new Set).add(b);
        const e = Vf();
        if (null != e[b])
            return e[b];
        b = $f(d)[b];
        if (!b)
            return c;
        b = Ne(JSON.stringify(b));
        b = ag(b);
        a = Uf(b, a);
        return null != a ? a : c
    }
    function ag(a) {
        const b = P(Rf).I;
        if (b) {
            const c = Ma(E(a, Le, 5), d=>Je(D(d, Ce, 1), b));
            if (c)
                return c.getValue() ?? null
        }
        return D(a, Ke, 4) ?? null
    }
    class Xf {
        constructor() {
            this.h = {};
            this.j = [];
            this.i = {};
            this.g = new Map
        }
    }
    function bg(a, b=!1, c) {
        return !!Wf(1, a, b, c)
    }
    function cg(a, b=0, c) {
        a = Number(Wf(2, a, b, c));
        return isNaN(a) ? b : a
    }
    function dg(a, b="", c) {
        a = Wf(3, a, b, c);
        return "string" === typeof a ? a : b
    }
    function eg(a, b=[], c) {
        a = Wf(6, a, b, c);
        return Array.isArray(a) ? a : b
    }
    function $f(a) {
        return P(Xf).h[a] || (P(Xf).h[a] = {})
    }
    function fg(a, b) {
        const c = $f(b);
        ud(a, (d,e)=>c[e] = d)
    }
    function gg(a, b, c, d, e=!1) {
        const f = []
          , g = [];
        Ia(b, h=>{
            const k = $f(h);
            Ia(a, m=>{
                var l = lc(m, Oe);
                const n = Tf(m, l);
                if (n) {
                    var r = P(Xf).g.get(h)?.get(n)?.slice(0) ?? [];
                    a: {
                        const v = new qf;
                        switch (l) {
                        case 1:
                            ic(v, 1, rf, xb(n));
                            break;
                        case 2:
                            ic(v, 2, rf, xb(n));
                            break;
                        case 3:
                            ic(v, 3, rf, xb(n));
                            break;
                        case 6:
                            ic(v, 4, rf, xb(n));
                            break;
                        default:
                            l = void 0;
                            break a
                        }
                        hc(v, 5, r, zb);
                        l = v
                    }
                    if (r = l)
                        r = !!P(Xf).i[h]?.has(n);
                    r && f.push(l);
                    if (r = l)
                        r = !!P(Xf).g.get(h)?.has(n);
                    r && g.push(l);
                    e || (l = P(Xf),
                    l.g.has(h) || l.g.set(h, new Map),
                    l.g.get(h).has(n) || l.g.get(h).set(n, []),
                    d && l.g.get(h).get(n).push(d));
                    k[n] = m.toJSON()
                }
            }
            )
        }
        );
        (f.length || g.length) && Of(c, f, g, d ?? void 0)
    }
    function hg(a, b) {
        const c = $f(b);
        Ia(a, d=>{
            var e = Ne(JSON.stringify(d));
            const f = lc(e, Oe);
            (e = Tf(e, f)) && (c[e] || (c[e] = d))
        }
        )
    }
    function ig() {
        return Ka(Object.keys(P(Xf).h), a=>Number(a))
    }
    function jg(a) {
        Na(P(Xf).j, a) || fg($f(4), a)
    }
    ;function T(a, b, c) {
        c.hasOwnProperty(a) || Object.defineProperty(c, String(a), {
            value: b
        })
    }
    function kg(a, b, c) {
        return b[a] || c
    }
    function lg(a) {
        T(5, bg, a);
        T(6, cg, a);
        T(7, dg, a);
        T(8, eg, a);
        T(13, hg, a);
        T(15, jg, a)
    }
    function mg(a) {
        T(4, b=>{
            P(Rf).I = b
        }
        , a);
        T(9, (b,c)=>{
            var d = P(Rf);
            null == d.I[3][b] && (d.I[3][b] = c)
        }
        , a);
        T(10, (b,c)=>{
            var d = P(Rf);
            null == d.I[4][b] && (d.I[4][b] = c)
        }
        , a);
        T(11, (b,c)=>{
            var d = P(Rf);
            null == d.I[5][b] && (d.I[5][b] = c)
        }
        , a);
        T(14, b=>{
            var c = P(Rf);
            for (const d of [3, 4, 5])
                Object.assign(c.I[d], b[d])
        }
        , a)
    }
    function ng(a) {
        a.hasOwnProperty("init-done") || Object.defineProperty(a, "init-done", {
            value: !0
        })
    }
    ;function og(a, b, c) {
        a.i = kg(1, b, ()=>{}
        );
        a.j = (d,e)=>kg(2, b, ()=>[])(d, c, e);
        a.g = ()=>kg(3, b, ()=>[])(c);
        a.h = d=>{
            kg(16, b, ()=>{}
            )(d, c)
        }
    }
    class pg {
        i() {}
        h() {}
        j() {
            return []
        }
        g() {
            return []
        }
    }
    ;function ye(a, b, c, d=!1, e) {
        if ((d ? a.g : Math.random()) < (e || .01))
            try {
                let f;
                c instanceof we ? f = c : (f = new we,
                ud(c, (h,k)=>{
                    var m = f;
                    const l = m.j++;
                    h = re(k, h);
                    m.g.push(l);
                    m.h[l] = h
                }
                ));
                const g = ve(f, "/pagead/gen_204?id=" + b + "&");
                g && Kd(p, g)
            } catch (f) {}
    }
    function qg(a, b) {
        0 <= b && 1 >= b && (a.g = b)
    }
    class rg {
        constructor() {
            this.g = Math.random()
        }
    }
    ;let sg, tg;
    const ug = new qe(window);
    (a=>{
        sg = a ?? new rg;
        "number" !== typeof window.google_srt && (window.google_srt = Math.random());
        qg(sg, window.google_srt);
        tg = new ze(sg,!0,ug);
        tg.Da(()=>{}
        );
        tg.j(!0);
        "complete" == window.document.readyState ? window.google_measure_js_timing || pe(ug) : ug.g && Oc(window, "load", ()=>{
            window.google_measure_js_timing || pe(ug)
        }
        )
    }
    )();
    var vg = {
        Zb: 0,
        Yb: 1,
        Vb: 2,
        Qb: 3,
        Wb: 4,
        Rb: 5,
        Xb: 6,
        Tb: 7,
        Ub: 8,
        Pb: 9,
        Sb: 10,
        ac: 11
    };
    var wg = {
        dc: 0,
        ec: 1,
        bc: 2
    };
    function xg(a) {
        if (0 != a.g)
            throw Error("Already resolved/rejected.");
    }
    var Ag = class {
        constructor() {
            this.h = new yg(this);
            this.g = 0
        }
        resolve(a) {
            xg(this);
            this.g = 1;
            this.j = a;
            zg(this.h)
        }
    }
    ;
    function zg(a) {
        switch (a.g.g) {
        case 0:
            break;
        case 1:
            a.h && a.h(a.g.j);
            break;
        case 2:
            a.i && a.i(a.g.i);
            break;
        default:
            throw Error("Unhandled deferred state.");
        }
    }
    var yg = class {
        constructor(a) {
            this.g = a
        }
        then(a, b) {
            if (this.h)
                throw Error("Then functions already set.");
            this.h = a;
            this.i = b;
            zg(this)
        }
    }
    ;
    const Bg = class {
        constructor(a) {
            this.g = a.slice(0)
        }
        forEach(a) {
            this.g.forEach((b,c)=>void a(b, c, this))
        }
        filter(a) {
            return new Bg(Ja(this.g, a))
        }
        apply(a) {
            return new Bg(a(this.g.slice(0)))
        }
        get(a) {
            return this.g[a]
        }
        add(a) {
            const b = this.g.slice(0);
            b.push(a);
            return new Bg(b)
        }
    }
    ;
    function Cg(a, b) {
        for (var c = [], d = a.length, e = 0; e < d; e++)
            c.push(a[e]);
        c.forEach(b, void 0)
    }
    ;const Eg = class {
        constructor() {
            this.g = {};
            this.h = {}
        }
        set(a, b) {
            const c = Dg(a);
            this.g[c] = b;
            this.h[c] = a
        }
        get(a, b) {
            a = Dg(a);
            return void 0 !== this.g[a] ? this.g[a] : b
        }
        clear() {
            this.g = {};
            this.h = {}
        }
    }
    ;
    function Dg(a) {
        return a instanceof Object ? String(da(a)) : a + ""
    }
    ;function Fg(a) {
        return new Gg({
            value: a
        },null)
    }
    function Hg(a) {
        return new Gg(null,a)
    }
    function Ig(a) {
        try {
            return Fg(a())
        } catch (b) {
            return Hg(b)
        }
    }
    function Jg(a) {
        return null != a.g ? a.getValue() : null
    }
    function Kg(a, b) {
        null != a.g && b(a.getValue());
        return a
    }
    function Lg(a, b) {
        null != a.g || b(a.h);
        return a
    }
    class Gg {
        constructor(a, b) {
            this.g = a;
            this.h = b
        }
        getValue() {
            return this.g.value
        }
        map(a) {
            return null != this.g ? (a = a(this.getValue()),
            a instanceof Gg ? a : Fg(a)) : this
        }
    }
    ;const Mg = class {
        constructor(a) {
            this.g = new Eg;
            if (a)
                for (var b = 0; b < a.length; ++b)
                    this.add(a[b])
        }
        add(a) {
            this.g.set(a, !0)
        }
        contains(a) {
            return void 0 !== this.g.g[Dg(a)]
        }
    }
    ;
    class Ng {
        constructor() {
            this.g = new Eg
        }
        set(a, b) {
            let c = this.g.get(a);
            c || (c = new Mg,
            this.g.set(a, c));
            c.add(b)
        }
    }
    ;var U = class extends N {
        getId() {
            return H(this, 3)
        }
    }
    ;
    U.u = [4];
    class Og {
        constructor({mb: a, hc: b, sc: c, Eb: d}) {
            this.g = b;
            this.j = new Bg(a || []);
            this.i = d;
            this.h = c
        }
    }
    ;const Qg = a=>{
        const b = []
          , c = a.j;
        c && c.g.length && b.push({
            V: "a",
            da: Pg(c)
        });
        null != a.g && b.push({
            V: "as",
            da: a.g
        });
        null != a.h && b.push({
            V: "i",
            da: String(a.h)
        });
        null != a.i && b.push({
            V: "rp",
            da: String(a.i)
        });
        b.sort(function(d, e) {
            return d.V.localeCompare(e.V)
        });
        b.unshift({
            V: "t",
            da: "aa"
        });
        return b
    }
      , Pg = a=>{
        a = a.g.slice(0).map(Rg);
        a = JSON.stringify(a);
        return vd(a)
    }
      , Rg = a=>{
        const b = {};
        null != H(a, 7) && (b.q = H(a, 7));
        null != F(a, 2) && (b.o = F(a, 2));
        null != F(a, 5) && (b.p = F(a, 5));
        return b
    }
    ;
    var Sg = class extends N {
        setLocation(a) {
            return y(this, 1, xb(a))
        }
    }
    ;
    function Tg(a) {
        const b = [].slice.call(arguments).filter(Lc(e=>null === e));
        if (!b.length)
            return null;
        let c = []
          , d = {};
        b.forEach(e=>{
            c = c.concat(e.Wa || []);
            d = Object.assign(d, e.gb)
        }
        );
        return new Ug(c,d)
    }
    function Vg(a) {
        switch (a) {
        case 1:
            return new Ug(null,{
                google_ad_semantic_area: "mc"
            });
        case 2:
            return new Ug(null,{
                google_ad_semantic_area: "h"
            });
        case 3:
            return new Ug(null,{
                google_ad_semantic_area: "f"
            });
        case 4:
            return new Ug(null,{
                google_ad_semantic_area: "s"
            });
        default:
            return null
        }
    }
    function Wg(a) {
        if (null == a)
            var b = null;
        else {
            var c = Qg(a);
            a = [];
            for (b of c)
                c = String(b.da),
                a.push(b.V + "." + (20 >= c.length ? c : c.slice(0, 19) + "_"));
            b = new Ug(null,{
                google_placement_id: a.join("~")
            })
        }
        return b
    }
    class Ug {
        constructor(a, b) {
            this.Wa = a;
            this.gb = b
        }
    }
    ;const Xg = new Ug(["google-auto-placed"],{
        google_reactive_ad_format: 40,
        google_tag_origin: "qs"
    });
    var Yg = Ec(class extends N {
    }
    );
    var Zg = class extends N {
    }
    ;
    var $g = class extends N {
    }
    ;
    var ah = class extends N {
    }
    ;
    ah.u = [6, 7, 9, 10, 11];
    var bh = class extends N {
    }
    ;
    var ch = class extends N {
        constructor() {
            super()
        }
    }
    ;
    ch.u = [1];
    function dh(a) {
        if (1 != a.nodeType)
            var b = !1;
        else if (b = "INS" == a.tagName)
            a: {
                b = ["adsbygoogle-placeholder"];
                a = a.className ? a.className.split(/\s+/) : [];
                for (var c = {}, d = 0; d < a.length; ++d)
                    c[a[d]] = !0;
                for (d = 0; d < b.length; ++d)
                    if (!c[b[d]]) {
                        b = !1;
                        break a
                    }
                b = !0
            }
        return b
    }
    ;var eh = new O(1271)
      , fh = new O(1308,!0)
      , gh = new O(1316)
      , hh = new Hc(1130,100)
      , ih = new Ic(14)
      , jh = new O(1247,!0)
      , kh = new O(1317)
      , lh = new O(1319)
      , mh = new O(1272)
      , nh = new O(316)
      , oh = new O(1207,!0)
      , ph = new O(313)
      , qh = new O(369)
      , rh = new O(1289)
      , sh = new O(1315)
      , th = new O(1302)
      , uh = new O(1318)
      , vh = new O(217)
      , wh = new Ic(1307)
      , xh = new Hc(572636916,25)
      , yh = new Hc(579884443)
      , zh = new Jc(556791602,["1", "2", "4", "6"])
      , Ah = new O(579884441)
      , Bh = new Hc(572636915,150)
      , Ch = new Hc(579884442)
      , Dh = new O(561639567)
      , Eh = new O(561639564)
      , Fh = new O(600847635)
      , Gh = new O(600719280)
      , Hh = new O(506914611)
      , Ih = new O(506852289)
      , Jh = new O(1120)
      , Kh = new O(567362967,!0)
      , Lh = new O(45615403,!0)
      , Mh = new Hc(1079,5)
      , Nh = new O(10009,!0)
      , Fd = new Jc(1934,["As0hBNJ8h++fNYlkq8cTye2qDLyom8NddByiVytXGGD0YVE+2CEuTCpqXMDxdhOMILKoaiaYifwEvCRlJ/9GcQ8AAAB8eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3MTk1MzI3OTksImlzU3ViZG9tYWluIjp0cnVlfQ==", "AgRYsXo24ypxC89CJanC+JgEmraCCBebKl8ZmG7Tj5oJNx0cmH0NtNRZs3NB5ubhpbX/bIt7l2zJOSyO64NGmwMAAACCeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3MTk1MzI3OTksImlzU3ViZG9tYWluIjp0cnVlfQ==", "A/ERL66fN363FkXxgDc6F1+ucRUkAhjEca9W3la6xaLnD2Y1lABsqmdaJmPNaUKPKVBRpyMKEhXYl7rSvrQw+AkAAACNeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiRmxlZGdlQmlkZGluZ0FuZEF1Y3Rpb25TZXJ2ZXIiLCJleHBpcnkiOjE3MTkzNTk5OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9", "A6OdGH3fVf4eKRDbXb4thXA4InNqDJDRhZ8U533U/roYjp4Yau0T3YSuc63vmAs/8ga1cD0E3A7LEq6AXk1uXgsAAACTeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiRmxlZGdlQmlkZGluZ0FuZEF1Y3Rpb25TZXJ2ZXIiLCJleHBpcnkiOjE3MTkzNTk5OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9"])
      , Oh = new O(84);
    function Ph(a, b, c) {
        switch (c) {
        case 0:
            b.parentNode && b.parentNode.insertBefore(a, b);
            break;
        case 3:
            if (c = b.parentNode) {
                var d = b.nextSibling;
                if (d && d.parentNode != c)
                    for (; d && 8 == d.nodeType; )
                        d = d.nextSibling;
                c.insertBefore(a, d)
            }
            break;
        case 1:
            b.insertBefore(a, b.firstChild);
            break;
        case 2:
            b.appendChild(a)
        }
        dh(b) && (b.setAttribute("data-init-display", b.style.display),
        b.style.display = "block")
    }
    ;function Qh(a, b) {
        const c = e=>{
            e = Rh(e);
            return null == e ? !1 : 0 < e
        }
          , d = e=>{
            e = Rh(e);
            return null == e ? !1 : 0 > e
        }
        ;
        switch (b) {
        case 0:
            return {
                init: Sh(a.previousSibling, c),
                ha: e=>Sh(e.previousSibling, c),
                na: 0
            };
        case 2:
            return {
                init: Sh(a.lastChild, c),
                ha: e=>Sh(e.previousSibling, c),
                na: 0
            };
        case 3:
            return {
                init: Sh(a.nextSibling, d),
                ha: e=>Sh(e.nextSibling, d),
                na: 3
            };
        case 1:
            return {
                init: Sh(a.firstChild, d),
                ha: e=>Sh(e.nextSibling, d),
                na: 3
            }
        }
        throw Error("Un-handled RelativePosition: " + b);
    }
    function Rh(a) {
        return a.hasOwnProperty("google-ama-order-assurance") ? a["google-ama-order-assurance"] : null
    }
    function Sh(a, b) {
        return a && b(a) ? a : null
    }
    ;var Th = {
        rectangle: 1,
        horizontal: 2,
        vertical: 4
    };
    var Uh = {
        overlays: 1,
        interstitials: 2,
        vignettes: 2,
        inserts: 3,
        immersives: 4,
        list_view: 5,
        full_page: 6,
        side_rails: 7
    };
    function Vh(a) {
        a = a.document;
        let b = {};
        a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
        return b || {}
    }
    function Wh(a) {
        return Vh(a).clientWidth
    }
    ;function Xh(a, b) {
        do {
            const c = sd(a, b);
            if (c && "fixed" == c.position)
                return !1
        } while (a = a.parentElement);
        return !0
    }
    ;function Yh(a, b) {
        var c = ["width", "height"];
        for (let e = 0; e < c.length; e++) {
            const f = "google_ad_" + c[e];
            if (!b.hasOwnProperty(f)) {
                var d = R(a[c[e]]);
                d = null === d ? null : Math.round(d);
                null != d && (b[f] = d)
            }
        }
    }
    function Zh(a, b) {
        return !((xd.test(b.google_ad_width) || wd.test(a.style.width)) && (xd.test(b.google_ad_height) || wd.test(a.style.height)))
    }
    function $h(a, b) {
        return (a = ai(a, b)) ? a.y : 0
    }
    function ai(a, b) {
        try {
            const c = b.document.documentElement.getBoundingClientRect()
              , d = a.getBoundingClientRect();
            return {
                x: d.left - c.left,
                y: d.top - c.top
            }
        } catch (c) {
            return null
        }
    }
    function bi(a, b, c, d, e) {
        if (a !== a.top)
            return pd(a) ? 3 : 16;
        if (!(488 > Wh(a)))
            return 4;
        if (!(a.innerHeight >= a.innerWidth))
            return 5;
        const f = Wh(a);
        if (!f || (f - c) / f > d)
            a = 6;
        else {
            if (c = "true" !== e.google_full_width_responsive)
                a: {
                    c = b.parentElement;
                    for (b = Wh(a); c; c = c.parentElement)
                        if ((d = sd(c, a)) && (e = R(d.width)) && !(e >= b) && "visible" !== d.overflow) {
                            c = !0;
                            break a
                        }
                    c = !1
                }
            a = c ? 7 : !0
        }
        return a
    }
    function ci(a, b, c, d) {
        const e = bi(b, c, a, .3, d);
        !0 !== e ? a = e : "true" === d.google_full_width_responsive || Xh(c, b) ? (b = Wh(b),
        a = b - a,
        a = b && 0 <= a ? !0 : b ? -10 > a ? 11 : 0 > a ? 14 : 12 : 10) : a = 9;
        return a
    }
    function di(a, b, c) {
        a = a.style;
        "rtl" === b ? a.marginRight = c : a.marginLeft = c
    }
    function ei(a, b) {
        if (3 == b.nodeType)
            return /\S/.test(b.data);
        if (1 == b.nodeType) {
            if (/^(script|style)$/i.test(b.nodeName))
                return !1;
            let c;
            try {
                c = sd(b, a)
            } catch (d) {}
            return !c || "none" !== c.display && !("absolute" === c.position && ("hidden" === c.visibility || "collapse" === c.visibility))
        }
        return !1
    }
    function fi(a, b, c) {
        a = ai(b, a);
        return "rtl" === c ? -a.x : a.x
    }
    function gi(a, b) {
        var c;
        c = (c = b.parentElement) ? (c = sd(c, a)) ? c.direction : "" : "";
        if (c) {
            var d = b.style;
            d.border = d.borderStyle = d.outline = d.outlineStyle = d.transition = "none";
            d.borderSpacing = d.padding = "0";
            di(b, c, "0px");
            d.width = `${Wh(a)}px`;
            if (0 !== fi(a, b, c)) {
                di(b, c, "0px");
                var e = fi(a, b, c);
                di(b, c, `${-1 * e}px`);
                a = fi(a, b, c);
                0 !== a && a !== e && di(b, c, `${e / (a - e) * e}px`)
            }
            d.zIndex = "30"
        }
    }
    ;var hi = class {
        constructor(a, b) {
            this.U = a;
            this.i = b
        }
        height() {
            return this.i
        }
        g(a) {
            return 300 < a && 300 < this.i ? this.U : Math.min(1200, Math.round(a))
        }
        h() {}
    }
    ;
    var ii = (a,b,c,d=e=>e)=>{
        let e;
        return a.style && a.style[c] && d(a.style[c]) || (e = sd(a, b)) && e[c] && d(e[c]) || null
    }
      , ji = a=>b=>b.U <= a
      , mi = (a,b,c,d)=>{
        const e = a && ki(c, b)
          , f = li(b, d);
        return g=>!(e && g.height() >= f)
    }
      , ni = a=>b=>b.height() <= a
      , ki = (a,b)=>$h(a, b) < Vh(b).clientHeight - 100
      , oi = (a,b)=>{
        var c = ii(b, a, "height", R);
        if (c)
            return c;
        var d = b.style.height;
        b.style.height = "inherit";
        c = ii(b, a, "height", R);
        b.style.height = d;
        if (c)
            return c;
        c = Infinity;
        do
            (d = b.style && R(b.style.height)) && (c = Math.min(c, d)),
            (d = ii(b, a, "maxHeight", R)) && (c = Math.min(c, d));
        while ((b = b.parentElement) && "HTML" != b.tagName);
        return c
    }
    ;
    const li = (a,b)=>{
        const c = 0 == Zd(a);
        return b && c ? Math.max(250, 2 * Vh(a).clientHeight / 3) : 250
    }
    ;
    var pi = {
        google_ad_channel: !0,
        google_ad_client: !0,
        google_ad_host: !0,
        google_ad_host_channel: !0,
        google_adtest: !0,
        google_tag_for_child_directed_treatment: !0,
        google_tag_for_under_age_of_consent: !0,
        google_tag_partner: !0,
        google_restrict_data_processing: !0,
        google_page_url: !0,
        google_debug_params: !0,
        google_shadow_mode: !0,
        google_adbreak_test: !0,
        google_ad_frequency_hint: !0,
        google_admob_interstitial_slot: !0,
        google_admob_rewarded_slot: !0,
        google_admob_ads_only: !0,
        google_ad_start_delay_hint: !0,
        google_max_ad_content_rating: !0,
        google_traffic_source: !0,
        google_overlays: !0,
        google_privacy_treatments: !0,
        google_xz: !0
    };
    const qi = RegExp("(^| )adsbygoogle($| )");
    function ri(a, b) {
        for (let c = 0; c < b.length; c++) {
            const d = b[c]
              , e = ed(d.property);
            a[e] = d.value
        }
    }
    ;var si = class extends N {
    }
    ;
    var ti = class extends N {
    }
    ;
    var ui = class extends N {
        g() {
            return bc(this, 23)
        }
    }
    ;
    var vi = class extends N {
    }
    ;
    var wi = class extends N {
    }
    ;
    var xi = class extends N {
    }
    ;
    var yi = class extends N {
    }
    ;
    var zi = class extends N {
    }
    ;
    var Ai = class extends N {
        getName() {
            return H(this, 4)
        }
    }
      , Bi = [1, 2, 3];
    var Ci = class extends N {
    }
    ;
    Ci.u = [2, 5, 6, 11];
    var Di = class extends N {
    }
    ;
    var Fi = class extends N {
        g() {
            return vc(this, Di, 2, Ei)
        }
    }
      , Ei = [1, 2];
    var Gi = class extends N {
        g() {
            return D(this, Fi, 3)
        }
    }
    ;
    Gi.u = [1, 4];
    var Hi = class extends N {
    }
      , Ii = Ec(Hi);
    Hi.u = [1, 2, 5, 7];
    function Ji(a) {
        var b = [];
        Cg(a.getElementsByTagName("p"), function(c) {
            100 <= Ki(c) && b.push(c)
        });
        return b
    }
    function Ki(a) {
        if (3 == a.nodeType)
            return a.length;
        if (1 != a.nodeType || "SCRIPT" == a.tagName)
            return 0;
        var b = 0;
        Cg(a.childNodes, function(c) {
            b += Ki(c)
        });
        return b
    }
    function Li(a) {
        return 0 == a.length || isNaN(a[0]) ? a : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1)
    }
    function Mi(a, b) {
        if (null == a.g)
            return b;
        switch (a.g) {
        case 1:
            return b.slice(1);
        case 2:
            return b.slice(0, b.length - 1);
        case 3:
            return b.slice(1, b.length - 1);
        case 0:
            return b;
        default:
            throw Error("Unknown ignore mode: " + a.g);
        }
    }
    const Ni = class {
        constructor(a, b, c, d) {
            this.j = a;
            this.h = b;
            this.i = c;
            this.g = d
        }
        query(a) {
            var b = [];
            try {
                b = a.querySelectorAll(this.j)
            } catch (f) {}
            if (!b.length)
                return [];
            a = Oa(b);
            a = Mi(this, a);
            "number" === typeof this.h && (b = this.h,
            0 > b && (b += a.length),
            a = 0 <= b && b < a.length ? [a[b]] : []);
            if ("number" === typeof this.i) {
                b = [];
                for (var c = 0; c < a.length; c++) {
                    var d = Ji(a[c])
                      , e = this.i;
                    0 > e && (e += d.length);
                    0 <= e && e < d.length && b.push(d[e])
                }
                a = b
            }
            return a
        }
        toString() {
            return JSON.stringify({
                nativeQuery: this.j,
                occurrenceIndex: this.h,
                paragraphIndex: this.i,
                ignoreMode: this.g
            })
        }
    }
    ;
    class Oi {
        constructor() {
            var a = Td`https://pagead2.googlesyndication.com/pagead/js/err_rep.js`;
            this.g = null;
            this.i = !1;
            this.s = Math.random();
            this.h = this.J;
            this.A = a
        }
        Da(a) {
            this.g = a
        }
        j(a) {
            this.i = a
        }
        hb(a) {
            this.h = a
        }
        J(a, b, c=.01, d, e="jserror") {
            if ((this.i ? this.s : Math.random()) > c)
                return !1;
            ce(b) || (b = new be(b,{
                context: a,
                id: e
            }));
            if (d || this.g)
                b.meta = {},
                this.g && this.g(b.meta),
                d && d(b.meta);
            p.google_js_errors = p.google_js_errors || [];
            p.google_js_errors.push(b);
            p.error_rep_loaded || (qd(p.document, this.A),
            p.error_rep_loaded = !0);
            return !1
        }
        ea(a, b, c) {
            try {
                return b()
            } catch (d) {
                if (!this.h(a, d, .01, c, "jserror"))
                    throw d;
            }
        }
        oa(a, b) {
            return (...c)=>this.ea(a, ()=>b.apply(void 0, c))
        }
        Y(a, b) {
            b.catch(c=>{
                c = c ? c : "unknown rejection";
                this.J(a, c instanceof Error ? c : Error(c), void 0, this.g || void 0)
            }
            )
        }
    }
    ;const Pi = (a,b)=>{
        b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
        2048 > b.length && b.push(a)
    }
    ;
    var Qi = (a,b,c,d,e=!1)=>{
        const f = d || window
          , g = "undefined" !== typeof queueMicrotask;
        return function() {
            e && g && queueMicrotask(()=>{
                f.google_rum_task_id_counter = f.google_rum_task_id_counter || 1;
                f.google_rum_task_id_counter += 1
            }
            );
            const h = je();
            let k, m = 3;
            try {
                k = b.apply(this, arguments)
            } catch (l) {
                m = 13;
                if (!c)
                    throw l;
                c(a, l)
            } finally {
                f.google_measure_js_timing && h && Pi({
                    label: a.toString(),
                    value: h,
                    duration: (je() || 0) - h,
                    type: m,
                    ...(e && g && {
                        taskId: f.google_rum_task_id_counter = f.google_rum_task_id_counter || 1
                    })
                }, f)
            }
            return k
        }
    }
      , Ri = (a,b)=>Qi(a, b, (c,d)=>{
        (new Oi).J(c, d)
    }
    , void 0, !1);
    function Si(a, b, c) {
        return Qi(a, b, void 0, c, !0).apply()
    }
    function Ti(a) {
        if (!a)
            return null;
        var b = H(a, 7);
        if (H(a, 1) || a.getId() || 0 < cc(a, 4, Ib).length) {
            var c = H(a, 3)
              , d = H(a, 1)
              , e = cc(a, 4, Ib);
            b = F(a, 2);
            var f = F(a, 5);
            a = Ui(I(a, 6));
            var g = "";
            d && (g += d);
            c && (g += "#" + Li(c));
            if (e)
                for (c = 0; c < e.length; c++)
                    g += "." + Li(e[c]);
            b = (e = g) ? new Ni(e,b,f,a) : null
        } else
            b = b ? new Ni(b,F(a, 2),F(a, 5),Ui(I(a, 6))) : null;
        return b
    }
    var Vi = {
        1: 1,
        2: 2,
        3: 3,
        0: 0
    };
    function Ui(a) {
        return null == a ? a : Vi[a]
    }
    var Wi = {
        1: 0,
        2: 1,
        3: 2,
        4: 3
    };
    function Xi(a) {
        return a.google_ama_state = a.google_ama_state || {}
    }
    function Yi(a) {
        a = Xi(a);
        return a.optimization = a.optimization || {}
    }
    ;var Zi = a=>{
        switch (I(a, 8)) {
        case 1:
        case 2:
            if (null == a)
                var b = null;
            else
                b = D(a, U, 1),
                null == b ? b = null : (a = I(a, 2),
                b = null == a ? null : new Og({
                    mb: [b],
                    Eb: a
                }));
            return null != b ? Fg(b) : Hg(Error("Missing dimension when creating placement id"));
        case 3:
            return Hg(Error("Missing dimension when creating placement id"));
        default:
            return Hg(Error("Invalid type: " + I(a, 8)))
        }
    }
    ;
    var $i = (a,b)=>{
        const c = [];
        let d = a;
        for (a = ()=>{
            c.push({
                anchor: d.anchor,
                position: d.position
            });
            return d.anchor == b.anchor && d.position == b.position
        }
        ; d; ) {
            switch (d.position) {
            case 1:
                if (a())
                    return c;
                d.position = 2;
            case 2:
                if (a())
                    return c;
                if (d.anchor.firstChild) {
                    d = {
                        anchor: d.anchor.firstChild,
                        position: 1
                    };
                    continue
                } else
                    d.position = 3;
            case 3:
                if (a())
                    return c;
                d.position = 4;
            case 4:
                if (a())
                    return c
            }
            for (; d && !d.anchor.nextSibling && d.anchor.parentNode != d.anchor.ownerDocument.body; ) {
                d = {
                    anchor: d.anchor.parentNode,
                    position: 3
                };
                if (a())
                    return c;
                d.position = 4;
                if (a())
                    return c
            }
            d && d.anchor.nextSibling ? d = {
                anchor: d.anchor.nextSibling,
                position: 1
            } : d = null
        }
        return c
    }
    ;
    function aj(a, b) {
        const c = new Ng
          , d = new Mg;
        b.forEach(e=>{
            if (vc(e, yi, 1, Bi)) {
                e = vc(e, yi, 1, Bi);
                if (D(e, Zg, 1) && D(D(e, Zg, 1), U, 1) && D(e, Zg, 2) && D(D(e, Zg, 2), U, 1)) {
                    const g = bj(a, D(D(e, Zg, 1), U, 1))
                      , h = bj(a, D(D(e, Zg, 2), U, 1));
                    if (g && h)
                        for (var f of $i({
                            anchor: g,
                            position: I(D(e, Zg, 1), 2)
                        }, {
                            anchor: h,
                            position: I(D(e, Zg, 2), 2)
                        }))
                            c.set(da(f.anchor), f.position)
                }
                D(e, Zg, 3) && D(D(e, Zg, 3), U, 1) && (f = bj(a, D(D(e, Zg, 3), U, 1))) && c.set(da(f), I(D(e, Zg, 3), 2))
            } else
                vc(e, zi, 2, Bi) ? cj(a, vc(e, zi, 2, Bi), c) : vc(e, xi, 3, Bi) && dj(a, vc(e, xi, 3, Bi), d)
        }
        );
        return new ej(c,d)
    }
    class ej {
        constructor(a, b) {
            this.h = a;
            this.g = b
        }
    }
    const cj = (a,b,c)=>{
        D(b, Zg, 2) ? (b = D(b, Zg, 2),
        (a = bj(a, D(b, U, 1))) && c.set(da(a), I(b, 2))) : D(b, U, 1) && (a = fj(a, D(b, U, 1))) && a.forEach(d=>{
            d = da(d);
            c.set(d, 1);
            c.set(d, 4);
            c.set(d, 2);
            c.set(d, 3)
        }
        )
    }
      , dj = (a,b,c)=>{
        D(b, U, 1) && (a = fj(a, D(b, U, 1))) && a.forEach(d=>{
            c.add(da(d))
        }
        )
    }
      , bj = (a,b)=>(a = fj(a, b)) && 0 < a.length ? a[0] : null
      , fj = (a,b)=>(b = Ti(b)) ? b.query(a) : null;
    class V extends Error {
        constructor(a="") {
            super();
            this.name = "TagError";
            this.message = a ? "adsbygoogle.push() error: " + a : "";
            Error.captureStackTrace ? Error.captureStackTrace(this, V) : this.stack = Error().stack || ""
        }
    }
    ;let gj, W;
    const hj = new qe(p);
    var ij = a=>{
        null != a && (p.google_measure_js_timing = a);
        p.google_measure_js_timing || pe(hj)
    }
    ;
    ((a,b=!0)=>{
        gj = a || new rg;
        "number" !== typeof p.google_srt && (p.google_srt = Math.random());
        qg(gj, p.google_srt);
        W = new ze(gj,b,hj);
        W.j(!0);
        "complete" == p.document.readyState ? ij() : hj.g && Oc(p, "load", ()=>{
            ij()
        }
        )
    }
    )();
    var jj = (a,b,c)=>W.ea(a, b, c)
      , kj = (a,b,c)=>{
        const d = P(pg).g();
        !b.eid && d.length && (b.eid = d.toString());
        ye(gj, a, b, !0, c)
    }
      , lj = (a,b)=>{
        W.Y(a, b)
    }
      , mj = (a,b,c,d)=>{
        let e;
        ce(b) ? e = b.msg || xe(b.error) : e = xe(b);
        return 0 == e.indexOf("TagError") ? ((b instanceof be ? b.error : b).pbr = !0,
        !1) : W.J(a, b, c, d)
    }
    ;
    var nj = class {
        constructor() {
            this.g = Gd();
            this.h = 0
        }
    }
    ;
    function oj(a, b, c) {
        switch (c) {
        case 2:
        case 3:
            break;
        case 1:
        case 4:
            b = b.parentElement;
            break;
        default:
            throw Error("Unknown RelativePosition: " + c);
        }
        for (c = []; b; ) {
            if (pj(b))
                return !0;
            if (a.g.has(b))
                break;
            c.push(b);
            b = b.parentElement
        }
        c.forEach(d=>a.g.add(d));
        return !1
    }
    function qj(a) {
        a = rj(a);
        return a.has("all") || a.has("after")
    }
    function sj(a) {
        a = rj(a);
        return a.has("all") || a.has("before")
    }
    function rj(a) {
        return (a = a && a.getAttribute("data-no-auto-ads")) ? new Set(a.split("|")) : new Set
    }
    function pj(a) {
        const b = rj(a);
        return a && ("AUTO-ADS-EXCLUSION-AREA" === a.tagName || b.has("inside") || b.has("all"))
    }
    var tj = class {
        constructor() {
            this.g = new Set;
            this.h = new nj
        }
    }
    ;
    function uj(a, b) {
        if (!a)
            return !1;
        a = sd(a, b);
        if (!a)
            return !1;
        a = a.cssFloat || a.styleFloat;
        return "left" == a || "right" == a
    }
    function vj(a) {
        for (a = a.previousSibling; a && 1 != a.nodeType; )
            a = a.previousSibling;
        return a ? a : null
    }
    function wj(a) {
        return !!a.nextSibling || !!a.parentNode && wj(a.parentNode)
    }
    ;function xj(a=null) {
        ({googletag: a} = a ?? window);
        return a?.apiReady ? a : void 0
    }
    ;const yj = a=>{
        const b = xj(a);
        return b ? Ja(Ka(b.pubads().getSlots(), c=>a.document.getElementById(c.getSlotElementId())), c=>null != c) : null
    }
    ;
    var zj = a=>{
        const b = [];
        for (const c of a) {
            a = !0;
            for (let d = 0; d < b.length; d++) {
                const e = b[d];
                if (e.contains(c)) {
                    a = !1;
                    break
                }
                if (c.contains(e)) {
                    a = !1;
                    b[d] = c;
                    break
                }
            }
            a && b.push(c)
        }
        return b
    }
    ;
    function Aj(a, b) {
        if (a.j)
            return !0;
        a.j = !0;
        const c = E(a.i, ah, 1);
        a.h = 0;
        const d = Bj(a.D);
        var e = a.g;
        var f;
        try {
            var g = (f = e.localStorage.getItem("google_ama_settings")) ? Yg(f) : null
        } catch (n) {
            g = null
        }
        f = null !== g && J(g, 2, !1);
        g = Xi(e);
        f && (g.eatf = !0,
        Vd(7, [!0, 0, !1]));
        b: {
            var h = {
                ub: !1,
                vb: !1
            }
              , k = Oa(e.document.querySelectorAll(".google-auto-placed"));
            const n = Oa(e.document.querySelectorAll("ins.adsbygoogle[data-anchor-status]"))
              , r = Oa(e.document.querySelectorAll("ins.adsbygoogle[data-ad-format=autorelaxed]"));
            var m = (yj(e) || Oa(e.document.querySelectorAll("div[id^=div-gpt-ad]"))).concat(Oa(e.document.querySelectorAll("iframe[id^=google_ads_iframe]")));
            const v = Oa(e.document.querySelectorAll("div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]"))
              , w = Oa(e.document.querySelectorAll("ins.adsbygoogle-ablated-ad-slot"))
              , A = Oa(e.document.querySelectorAll("div.googlepublisherpluginad"))
              , z = Oa(e.document.querySelectorAll("html > ins.adsbygoogle"));
            let G = [].concat(Oa(e.document.querySelectorAll("iframe[id^=aswift_],iframe[id^=google_ads_frame]")), Oa(e.document.querySelectorAll("body ins.adsbygoogle")));
            f = [];
            for (const [K,ta] of [[h.mc, k], [h.ub, n], [h.qc, r], [h.nc, m], [h.rc, v], [h.lc, w], [h.oc, A], [h.vb, z]])
                !1 === K ? f = f.concat(ta) : G = G.concat(ta);
            h = zj(G);
            f = zj(f);
            h = h.slice(0);
            for (l of f)
                for (f = 0; f < h.length; f++)
                    (l.contains(h[f]) || h[f].contains(l)) && h.splice(f, 1);
            var l = h;
            e = Vh(e).clientHeight;
            for (f = 0; f < l.length; f++)
                if (!(l[f].getBoundingClientRect().top > e)) {
                    e = !0;
                    break b
                }
            e = !1
        }
        e = e ? g.eatfAbg = !0 : !1;
        if (e)
            return !0;
        e = new Mg([2]);
        for (g = 0; g < c.length; g++) {
            l = a;
            h = c[g];
            f = g;
            m = b;
            if (D(h, Sg, 4) && e.contains(I(D(h, Sg, 4), 1)) && 1 === I(h, 8) && Cj(h, d)) {
                l.h++;
                if (m = Dj(l, h, m, d))
                    k = Xi(l.g),
                    k.numAutoAdsPlaced || (k.numAutoAdsPlaced = 0),
                    D(h, U, 1) && null != F(D(h, U, 1), 5) && (k.numPostPlacementsPlaced ? k.numPostPlacementsPlaced++ : k.numPostPlacementsPlaced = 1),
                    null == k.placed && (k.placed = []),
                    k.numAutoAdsPlaced++,
                    k.placed.push({
                        index: f,
                        element: m.ga
                    }),
                    Vd(7, [!1, l.h, !0]);
                l = m
            } else
                l = null;
            if (l)
                return !0
        }
        Vd(7, [!1, a.h, !1]);
        return !1
    }
    function Dj(a, b, c, d) {
        if (!Cj(b, d) || 1 != I(b, 8))
            return null;
        d = D(b, U, 1);
        if (!d)
            return null;
        d = Ti(d);
        if (!d)
            return null;
        d = d.query(a.g.document);
        if (0 == d.length)
            return null;
        d = d[0];
        var e = I(b, 2);
        e = Wi[e];
        e = void 0 === e ? null : e;
        var f;
        if (!(f = null == e)) {
            a: {
                f = a.g;
                switch (e) {
                case 0:
                    f = uj(vj(d), f);
                    break a;
                case 3:
                    f = uj(d, f);
                    break a;
                case 2:
                    var g = d.lastChild;
                    f = uj(g ? 1 == g.nodeType ? g : vj(g) : null, f);
                    break a
                }
                f = !1
            }
            if (c = !f && !(!c && 2 == e && !wj(d)))
                c = 1 == e || 2 == e ? d : d.parentNode,
                c = !(c && !dh(c) && 0 >= c.offsetWidth);
            f = !c
        }
        if (!(c = f)) {
            c = a.A;
            f = I(b, 2);
            g = c.h;
            var h = da(d);
            g = g.g.get(h);
            if (!(g = g ? g.contains(f) : !1))
                a: {
                    if (c.g.contains(da(d)))
                        switch (f) {
                        case 2:
                        case 3:
                            g = !0;
                            break a;
                        default:
                            g = !1;
                            break a
                        }
                    for (f = d.parentElement; f; ) {
                        if (c.g.contains(da(f))) {
                            g = !0;
                            break a
                        }
                        f = f.parentElement
                    }
                    g = !1
                }
            c = g
        }
        if (!c) {
            c = a.C;
            g = I(b, 2);
            a: switch (g) {
            case 1:
                f = qj(d.previousElementSibling) || sj(d);
                break a;
            case 4:
                f = qj(d) || sj(d.nextElementSibling);
                break a;
            case 2:
                f = sj(d.firstElementChild);
                break a;
            case 3:
                f = qj(d.lastElementChild);
                break a;
            default:
                throw Error("Unknown RelativePosition: " + g);
            }
            g = oj(c, d, g);
            c = c.h;
            kj("ama_exclusion_zone", {
                typ: f ? g ? "siuex" : "siex" : g ? "suex" : "noex",
                cor: c.g,
                num: c.h++,
                dvc: Ad()
            }, .1);
            c = f || g
        }
        if (c)
            return null;
        f = D(b, $g, 3);
        c = {};
        f && (c.jb = H(f, 1),
        c.Ua = H(f, 2),
        c.pb = !!bc(f, 3));
        f = D(b, Sg, 4) && I(D(b, Sg, 4), 2) ? I(D(b, Sg, 4), 2) : null;
        f = Vg(f);
        g = null != F(b, 12) ? F(b, 12) : null;
        g = null == g ? null : new Ug(null,{
            google_ml_rank: g
        });
        b = Ej(a, b);
        b = Tg(a.s, f, g, b);
        f = a.g;
        a = a.H;
        h = f.document;
        var k = c.pb || !1;
        g = fd((new gd(h)).g, "DIV");
        const m = g.style;
        m.width = "100%";
        m.height = "auto";
        m.clear = k ? "both" : "none";
        k = g.style;
        k.textAlign = "center";
        c.Db && ri(k, c.Db);
        h = fd((new gd(h)).g, "INS");
        k = h.style;
        k.display = "block";
        k.margin = "auto";
        k.backgroundColor = "transparent";
        c.jb && (k.marginTop = c.jb);
        c.Ua && (k.marginBottom = c.Ua);
        c.lb && ri(k, c.lb);
        g.appendChild(h);
        c = {
            ya: g,
            ga: h
        };
        c.ga.setAttribute("data-ad-format", "auto");
        g = [];
        if (h = b && b.Wa)
            c.ya.className = h.join(" ");
        h = c.ga;
        h.className = "adsbygoogle";
        h.setAttribute("data-ad-client", a);
        g.length && h.setAttribute("data-ad-channel", g.join("+"));
        a: {
            try {
                var l = c.ya;
                if (Q(ph)) {
                    {
                        const A = Qh(d, e);
                        if (A.init) {
                            var n = A.init;
                            for (d = n; d = A.ha(d); )
                                n = d;
                            var r = {
                                anchor: n,
                                position: A.na
                            }
                        } else
                            r = {
                                anchor: d,
                                position: e
                            }
                    }
                    l["google-ama-order-assurance"] = 0;
                    Ph(l, r.anchor, r.position)
                } else
                    Ph(l, d, e);
                b: {
                    var v = c.ga;
                    v.dataset.adsbygoogleStatus = "reserved";
                    v.className += " adsbygoogle-noablate";
                    l = {
                        element: v
                    };
                    var w = b && b.gb;
                    if (v.hasAttribute("data-pub-vars")) {
                        try {
                            w = JSON.parse(v.getAttribute("data-pub-vars"))
                        } catch (A) {
                            break b
                        }
                        v.removeAttribute("data-pub-vars")
                    }
                    w && (l.params = w);
                    (f.adsbygoogle = f.adsbygoogle || []).push(l)
                }
            } catch (A) {
                (v = c.ya) && v.parentNode && (w = v.parentNode,
                w.removeChild(v),
                dh(w) && (w.style.display = w.getAttribute("data-init-display") || "none"));
                v = !1;
                break a
            }
            v = !0
        }
        return v ? c : null
    }
    function Ej(a, b) {
        return Jg(Lg(Zi(b).map(Wg), c=>{
            Xi(a.g).exception = c
        }
        ))
    }
    const Fj = class {
        constructor(a, b, c, d, e) {
            this.g = a;
            this.H = b;
            this.i = c;
            this.s = e || null;
            (this.D = d) ? (a = a.document,
            d = E(d, Ai, 5),
            d = aj(a, d)) : d = aj(a.document, []);
            this.A = d;
            this.C = new tj;
            this.h = 0;
            this.j = !1
        }
    }
    ;
    function Bj(a) {
        const b = {};
        a && cc(a, 6, yb).forEach(c=>{
            b[c] = !0
        }
        );
        return b
    }
    function Cj(a, b) {
        return a && $b(a, Sg, 4) && b[I(D(a, Sg, 4), 2)] ? !1 : !0
    }
    ;var Gj = Ec(class extends N {
    }
    );
    function Hj(a) {
        try {
            var b = a.localStorage.getItem("google_auto_fc_cmp_setting") || null
        } catch (d) {
            b = null
        }
        const c = b;
        return c ? Ig(()=>Gj(c)) : Fg(null)
    }
    ;function Ij() {
        if (Jj)
            return Jj;
        var a = Xd() || window;
        const b = a.google_persistent_state_async;
        return null != b && "object" == typeof b && null != b.S && "object" == typeof b.S ? Jj = b : a.google_persistent_state_async = Jj = new Kj
    }
    function Lj(a, b, c) {
        b = Mj[b] || `google_ps_${b}`;
        a = a.S;
        const d = a[b];
        return void 0 === d ? (a[b] = c(),
        a[b]) : d
    }
    function Nj(a, b, c) {
        return Lj(a, b, ()=>c)
    }
    function Oj(a, b, c) {
        a.S[Mj[b] || `google_ps_${b}`] = c
    }
    function Pj(a, b) {
        Oj(a, 38, b)
    }
    var Kj = class {
        constructor() {
            this.S = {}
        }
    }
      , Jj = null;
    const Mj = {
        [8]: "google_prev_ad_formats_by_region",
        [9]: "google_prev_ad_slotnames_by_region"
    };
    function Qj(a) {
        var b = new Rj;
        return y(b, 5, ub(a))
    }
    var Rj = class extends N {
        constructor() {
            super()
        }
    }
    ;
    Rj.u = [10];
    function Sj() {
        this.s = this.s;
        this.i = this.i
    }
    Sj.prototype.s = !1;
    function Tj(a, b) {
        a.s ? b() : (a.i || (a.i = []),
        a.i.push(b))
    }
    ;const Uj = a=>{
        void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
        void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
        return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
    }
    ;
    function Vj(a) {
        if (!1 === a.gdprApplies)
            return !0;
        void 0 === a.internalErrorState && (a.internalErrorState = Uj(a));
        return "error" === a.cmpStatus || 0 !== a.internalErrorState ? a.internalBlockOnErrors ? (Od({
            e: String(a.internalErrorState)
        }, "tcfe"),
        !1) : !0 : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0
    }
    function Wj(a) {
        if (a.g)
            return a.g;
        a.g = zd(a.h, "__tcfapiLocator");
        return a.g
    }
    function Yj(a) {
        return "function" === typeof a.h.__tcfapi || null != Wj(a)
    }
    function Zj(a, b, c, d) {
        c || (c = ()=>{}
        );
        if ("function" === typeof a.h.__tcfapi)
            a = a.h.__tcfapi,
            a(b, 2, c, d);
        else if (Wj(a)) {
            ak(a);
            const e = ++a.H;
            a.C[e] = c;
            a.g && a.g.postMessage({
                __tcfapiCall: {
                    command: b,
                    version: 2,
                    callId: e,
                    parameter: d
                }
            }, "*")
        } else
            c({}, !1)
    }
    function ak(a) {
        a.j || (a.j = b=>{
            try {
                var c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                a.C[c.callId](c.returnValue, c.success)
            } catch (d) {}
        }
        ,
        Oc(a.h, "message", a.j))
    }
    class bk extends Sj {
        constructor(a) {
            var b = {};
            super();
            this.h = a;
            this.g = null;
            this.C = {};
            this.H = 0;
            this.D = b.timeoutMs ?? 500;
            this.A = b.ic ?? !1;
            this.j = null
        }
        addEventListener(a) {
            let b = {
                internalBlockOnErrors: this.A
            };
            const c = Nc(()=>a(b));
            let d = 0;
            -1 !== this.D && (d = setTimeout(()=>{
                b.tcString = "tcunavailable";
                b.internalErrorState = 1;
                c()
            }
            , this.D));
            const e = (f,g)=>{
                clearTimeout(d);
                f ? (b = f,
                b.internalErrorState = Uj(b),
                b.internalBlockOnErrors = this.A,
                g && 0 === b.internalErrorState || (b.tcString = "tcunavailable",
                g || (b.internalErrorState = 3))) : (b.tcString = "tcunavailable",
                b.internalErrorState = 3);
                a(b)
            }
            ;
            try {
                Zj(this, "addEventListener", e)
            } catch (f) {
                b.tcString = "tcunavailable",
                b.internalErrorState = 3,
                d && (clearTimeout(d),
                d = 0),
                c()
            }
        }
        removeEventListener(a) {
            a && a.listenerId && Zj(this, "removeEventListener", null, a.listenerId)
        }
    }
    ;var gk = ({l: a, R: b, timeoutMs: c, ca: d, ia: e=!1, ja: f=!1})=>{
        b = ck({
            l: a,
            R: b,
            ia: e,
            ja: f
        });
        null != b.g || "tcunav" != b.h.message ? d(b) : dk(a, c).then(g=>g.map(ek)).then(g=>g.map(h=>fk(a, h))).then(d)
    }
      , ck = ({l: a, R: b, ia: c=!1, ja: d=!1})=>{
        if (!hk({
            l: a,
            R: b,
            ia: c,
            ja: d
        }))
            return fk(a, Qj(!0));
        b = Ij();
        return (b = Nj(b, 24)) ? fk(a, ek(b)) : Hg(Error("tcunav"))
    }
    ;
    function hk({l: a, R: b, ia: c, ja: d}) {
        if (!(d = !d && Yj(new bk(a)))) {
            if (c = !c) {
                if (b) {
                    a = Hj(a);
                    if (null != a.g)
                        if ((a = a.getValue()) && null != I(a, 1))
                            b: switch (a = I(a, 1),
                            a) {
                            case 1:
                                a = !0;
                                break b;
                            default:
                                throw Error("Unhandled AutoGdprFeatureStatus: " + a);
                            }
                        else
                            a = !1;
                    else
                        W.J(806, a.h, void 0, void 0),
                        a = !1;
                    b = !a
                }
                c = b
            }
            d = c
        }
        return d ? !0 : !1
    }
    function dk(a, b) {
        return Promise.race([ik(), jk(a, b)])
    }
    function ik() {
        return (new Promise(a=>{
            var b = Ij();
            a = {
                resolve: a
            };
            const c = Nj(b, 25, []);
            c.push(a);
            Oj(b, 25, c)
        }
        )).then(kk)
    }
    function jk(a, b) {
        return new Promise(c=>{
            a.setTimeout(c, b, Hg(Error("tcto")))
        }
        )
    }
    function kk(a) {
        return a ? Fg(a) : Hg(Error("tcnull"))
    }
    function ek(a) {
        var b = {};
        if (Vj(a))
            if (!1 === a.gdprApplies)
                a = !0;
            else if ("tcunavailable" === a.tcString || void 0 === a.gdprApplies && !b.jc || "string" !== typeof a.tcString || !a.tcString.length)
                a = !b.kc;
            else {
                b: {
                    if (a.publisher && a.publisher.restrictions && (b = a.publisher.restrictions["1"],
                    void 0 !== b)) {
                        b = b["755"];
                        break b
                    }
                    b = void 0
                }
                0 === b ? a = !1 : a.purpose && a.vendor ? (b = a.vendor.consents,
                (b = !(!b || !b["755"])) && a.purposeOneTreatment && "CH" === a.publisherCC ? a = !0 : (b && (a = a.purpose.consents,
                b = !(!a || !a["1"])),
                a = b)) : a = !0
            }
        else
            a = !1;
        return Qj(a)
    }
    function fk(a, b) {
        return (a = Rd(b, a)) ? Fg(a) : Hg(Error("unav"))
    }
    ;var lk = class extends N {
    }
    ;
    lk.u = [1, 2, 3];
    var mk = class extends N {
    }
    ;
    mk.u = [1, 2, 3];
    var nk = class extends N {
        g() {
            return D(this, lk, 2)
        }
        h() {
            return D(this, mk, 3)
        }
    }
    ;
    const ok = class {
        constructor(a) {
            this.exception = a
        }
    }
    ;
    function pk(a, b) {
        try {
            var c = a.h
              , d = c.resolve
              , e = a.g;
            Xi(e.g);
            E(e.i, ah, 1);
            d.call(c, new ok(b))
        } catch (f) {
            a = a.h,
            b = f,
            xg(a),
            a.g = 2,
            a.i = b,
            zg(a.h)
        }
    }
    var qk = class {
        constructor(a, b, c) {
            this.i = a;
            this.g = b;
            this.h = c
        }
        start() {
            this.j()
        }
        j() {
            try {
                switch (this.i.document.readyState) {
                case "complete":
                case "interactive":
                    Aj(this.g, !0);
                    pk(this);
                    break;
                default:
                    Aj(this.g, !1) ? pk(this) : this.i.setTimeout(ja(this.j, this), 100)
                }
            } catch (a) {
                pk(this, a)
            }
        }
    }
    ;
    var rk = class extends N {
        constructor() {
            super()
        }
        getVersion() {
            return sc(F(this, 2))
        }
    }
    ;
    rk.u = [3];
    function sk(a) {
        return Sa(0 !== a.length % 4 ? a + "A" : a).map(b=>b.toString(2).padStart(8, "0")).join("")
    }
    function tk(a) {
        if (!/^[0-1]+$/.test(a))
            throw Error(`Invalid input [${a}] not a bit string.`);
        return parseInt(a, 2)
    }
    function uk(a) {
        if (!/^[0-1]+$/.test(a))
            throw Error(`Invalid input [${a}] not a bit string.`);
        const b = [1, 2, 3, 5];
        let c = 0;
        for (let d = 0; d < a.length - 1; d++)
            b.length <= d && b.push(b[d - 1] + b[d - 2]),
            c += parseInt(a[d], 2) * b[d];
        return c
    }
    ;function vk(a) {
        var b = sk(a)
          , c = tk(b.slice(0, 6));
        a = tk(b.slice(6, 12));
        var d = new rk;
        c = C(d, 1, Ab(c), 0);
        a = C(c, 2, Ab(a), 0);
        b = b.slice(12);
        c = tk(b.slice(0, 12));
        d = [];
        let e = b.slice(12).replace(/0+$/, "");
        for (let k = 0; k < c; k++) {
            if (0 === e.length)
                throw Error(`Found ${k} of ${c} sections [${d}] but reached end of input [${b}]`);
            var f = 0 === tk(e[0]);
            e = e.slice(1);
            var g = wk(e, b)
              , h = 0 === d.length ? 0 : d[d.length - 1];
            h = uk(g) + h;
            e = e.slice(g.length);
            if (f)
                d.push(h);
            else {
                f = wk(e, b);
                g = uk(f);
                for (let m = 0; m <= g; m++)
                    d.push(h + m);
                e = e.slice(f.length)
            }
        }
        if (0 < e.length)
            throw Error(`Found ${c} sections [${d}] but has remaining input [${e}], entire input [${b}]`);
        return hc(a, 3, d, zb)
    }
    function wk(a, b) {
        const c = a.indexOf("11");
        if (-1 === c)
            throw Error(`Expected section bitstring but not found in [${a}] part of [${b}]`);
        return a.slice(0, c + 2)
    }
    ;var xk = "a".charCodeAt()
      , yk = Uc(vg)
      , zk = Uc(wg);
    function Ak() {
        var a = new Bk;
        return wc(a, 1, 0)
    }
    function Ck(a) {
        const b = tc(a, 1);
        a = sc(F(a, 2));
        return new Date(1E3 * b + a / 1E6)
    }
    var Bk = class extends N {
    }
    ;
    function Dk(a, b) {
        if (a.g + b > a.h.length)
            throw Error("Requested length " + b + " is past end of string.");
        const c = a.h.substring(a.g, a.g + b);
        a.g += b;
        return parseInt(c, 2)
    }
    function Ek(a) {
        let b = Dk(a, 12);
        const c = [];
        for (; b--; ) {
            var d = !0 === !!Dk(a, 1)
              , e = Dk(a, 16);
            if (d)
                for (d = Dk(a, 16); e <= d; e++)
                    c.push(e);
            else
                c.push(e)
        }
        c.sort((f,g)=>f - g);
        return c
    }
    function Fk(a, b, c) {
        const d = [];
        for (let e = 0; e < b; e++)
            if (Dk(a, 1)) {
                const f = e + 1;
                if (c && -1 === c.indexOf(f))
                    throw Error(`ID: ${f} is outside of allowed values!`);
                d.push(f)
            }
        return d
    }
    function Gk(a) {
        const b = Dk(a, 16);
        return !0 === !!Dk(a, 1) ? (a = Ek(a),
        a.forEach(c=>{
            if (c > b)
                throw Error(`ID ${c} is past MaxVendorId ${b}!`);
        }
        ),
        a) : Fk(a, b)
    }
    class Hk {
        constructor(a) {
            if (/[^01]/.test(a))
                throw Error(`Input bitstring ${a} is malformed!`);
            this.h = a;
            this.g = 0
        }
        skip(a) {
            this.g += a
        }
    }
    ;var Jk = (a,b)=>{
        try {
            var c = Sa(a.split(".")[0]).map(e=>e.toString(2).padStart(8, "0")).join("");
            const d = new Hk(c);
            c = {};
            c.tcString = a;
            c.gdprApplies = !0;
            d.skip(78);
            c.cmpId = Dk(d, 12);
            c.cmpVersion = Dk(d, 12);
            d.skip(30);
            c.tcfPolicyVersion = Dk(d, 6);
            c.isServiceSpecific = !!Dk(d, 1);
            c.useNonStandardStacks = !!Dk(d, 1);
            c.specialFeatureOptins = Ik(Fk(d, 12, zk), zk);
            c.purpose = {
                consents: Ik(Fk(d, 24, yk), yk),
                legitimateInterests: Ik(Fk(d, 24, yk), yk)
            };
            c.purposeOneTreatment = !!Dk(d, 1);
            c.publisherCC = String.fromCharCode(xk + Dk(d, 6)) + String.fromCharCode(xk + Dk(d, 6));
            c.vendor = {
                consents: Ik(Gk(d), b),
                legitimateInterests: Ik(Gk(d), b)
            };
            return c
        } catch (d) {
            return null
        }
    }
    ;
    const Ik = (a,b)=>{
        const c = {};
        if (Array.isArray(b) && 0 !== b.length)
            for (const d of b)
                c[d] = -1 !== a.indexOf(d);
        else
            for (const d of a)
                c[d] = !0;
        delete c[0];
        return c
    }
    ;
    var Kk = class extends N {
        g() {
            return null != H(this, 2)
        }
    }
    ;
    var Lk = class extends N {
        g() {
            return null != H(this, 2)
        }
    }
    ;
    var Mk = class extends N {
    }
    ;
    var Nk = class extends N {
    }
      , Ok = Ec(Nk);
    Nk.u = [7];
    function Pk(a) {
        a = Qk(a);
        try {
            var b = a ? Ok(a) : null
        } catch (c) {
            b = null
        }
        return b ? D(b, Mk, 4) || null : null
    }
    function Qk(a) {
        a = (new Qd(a)).get("FCCDCF", "");
        if (a)
            if (a.startsWith("%"))
                try {
                    var b = decodeURIComponent(a)
                } catch (c) {
                    b = null
                }
            else
                b = a;
        else
            b = null;
        return b
    }
    ;function Rk(a) {
        a.__uspapiPostMessageReady || Sk(new Tk(a))
    }
    function Sk(a) {
        a.g = b=>{
            const c = "string" === typeof b.data;
            let d;
            try {
                d = c ? JSON.parse(b.data) : b.data
            } catch (f) {
                return
            }
            const e = d.__uspapiCall;
            e && "getUSPData" === e.command && a.l.__uspapi(e.command, e.version, (f,g)=>{
                const h = {};
                h.__uspapiReturn = {
                    returnValue: f,
                    success: g,
                    callId: e.callId
                };
                f = c ? JSON.stringify(h) : h;
                b.source && "function" === typeof b.source.postMessage && b.source.postMessage(f, b.origin);
                return f
            }
            )
        }
        ;
        a.l.addEventListener("message", a.g);
        a.l.__uspapiPostMessageReady = !0
    }
    var Tk = class {
        constructor(a) {
            this.l = a;
            this.g = null
        }
    }
    ;
    Uc(vg).map(a=>Number(a));
    Uc(wg).map(a=>Number(a));
    function Uk(a) {
        a.__tcfapiPostMessageReady || Vk(new Wk(a))
    }
    function Vk(a) {
        a.h = b=>{
            const c = "string" == typeof b.data;
            let d;
            try {
                d = c ? JSON.parse(b.data) : b.data
            } catch (f) {
                return
            }
            const e = d.__tcfapiCall;
            !e || "ping" !== e.command && "addEventListener" !== e.command && "removeEventListener" !== e.command || a.g.__tcfapi(e.command, e.version, (f,g)=>{
                const h = {};
                h.__tcfapiReturn = "removeEventListener" === e.command ? {
                    success: f,
                    callId: e.callId
                } : {
                    returnValue: f,
                    success: g,
                    callId: e.callId
                };
                f = c ? JSON.stringify(h) : h;
                b.source && "function" === typeof b.source.postMessage && b.source.postMessage(f, b.origin);
                return f
            }
            , e.parameter)
        }
        ;
        a.g.addEventListener("message", a.h);
        a.g.__tcfapiPostMessageReady = !0
    }
    var Wk = class {
        constructor(a) {
            this.g = a;
            this.h = null
        }
    }
    ;
    var Xk = class extends N {
    }
    ;
    var Yk = class extends N {
        g() {
            return null != H(this, 1)
        }
    }
      , Zk = Ec(Yk);
    Yk.u = [2];
    function $k(a, b, c) {
        function d(l) {
            if (10 > l.length)
                return null;
            var n = g(l.slice(0, 4));
            n = h(n);
            l = g(l.slice(6, 10));
            l = k(l);
            return "1" + n + l + "N"
        }
        function e(l) {
            if (10 > l.length)
                return null;
            var n = g(l.slice(0, 6));
            n = h(n);
            l = g(l.slice(6, 10));
            l = k(l);
            return "1" + n + l + "N"
        }
        function f(l) {
            if (12 > l.length)
                return null;
            var n = g(l.slice(0, 6));
            n = h(n);
            l = g(l.slice(8, 12));
            l = k(l);
            return "1" + n + l + "N"
        }
        function g(l) {
            const n = [];
            let r = 0;
            for (let v = 0; v < l.length / 2; v++)
                n.push(tk(l.slice(r, r + 2))),
                r += 2;
            return n
        }
        function h(l) {
            return l.every(n=>1 === n) ? "Y" : "N"
        }
        function k(l) {
            return l.some(n=>1 === n) ? "Y" : "N"
        }
        if (0 === a.length)
            return null;
        a = a.split(".");
        if (2 < a.length)
            return null;
        a = sk(a[0]);
        const m = tk(a.slice(0, 6));
        a = a.slice(6);
        if (1 !== m)
            return null;
        switch (b) {
        case 8:
            return d(a);
        case 10:
        case 12:
        case 9:
            return e(a);
        case 11:
            return c ? f(a) : null;
        default:
            return null
        }
    }
    ;var al = (a,b)=>{
        const c = a.document
          , d = ()=>{
            if (!a.frames[b])
                if (c.body) {
                    const e = rd("IFRAME", c);
                    e.style.display = "none";
                    e.style.width = "0px";
                    e.style.height = "0px";
                    e.style.border = "none";
                    e.style.zIndex = "-1000";
                    e.style.left = "-1000px";
                    e.style.top = "-1000px";
                    e.name = b;
                    c.body.appendChild(e)
                } else
                    a.setTimeout(d, 5)
        }
        ;
        d()
    }
    ;
    function bl() {
        var a = Q(fh)
          , b = Q(gh);
        S !== S.top || S.__uspapi || S.frames.__uspapiLocator || (a = new cl(a,b),
        dl(a),
        el(a))
    }
    function dl(a) {
        !a.s || a.g.__uspapi || a.g.frames.__uspapiLocator || (a.g.__uspapiManager = "fc",
        al(a.g, "__uspapiLocator"),
        ma("__uspapi", (...b)=>fl(a, ...b), a.g),
        Rk(a.g))
    }
    function el(a) {
        !a.i || a.g.__tcfapi || a.g.frames.__tcfapiLocator || (a.g.__tcfapiManager = "fc",
        al(a.g, "__tcfapiLocator"),
        a.g.__tcfapiEventListeners = a.g.__tcfapiEventListeners || [],
        ma("__tcfapi", (...b)=>gl(a, ...b), a.g),
        Uk(a.g))
    }
    function fl(a, b, c, d) {
        "function" === typeof d && "getUSPData" === b && d({
            version: 1,
            uspString: a.s
        }, !0)
    }
    function hl(a, b) {
        if (!b?.g() || 0 === L(b, 1).length || 0 == E(b, Xk, 2).length)
            return null;
        const c = L(b, 1);
        let d;
        try {
            var e = vk(c.split("~")[0]);
            d = c.includes("~") ? c.split("~").slice(1) : []
        } catch (f) {
            return null
        }
        b = E(b, Xk, 2).reduce((f,g)=>tc(il(f), 1) > tc(il(g), 1) ? f : g);
        e = cc(e, 3, Bb).indexOf(sc(F(b, 1)));
        return -1 === e || e >= d.length ? null : {
            uspString: $k(d[e], sc(F(b, 1)), a.A),
            xa: Ck(il(b))
        }
    }
    function jl(a) {
        a = a.find(b=>13 === M(b, 1));
        if (a?.g())
            try {
                return Zk(L(a, 2))
            } catch (b) {}
        return null
    }
    function il(a) {
        return $b(a, Bk, 2) ? D(a, Bk, 2) : Ak()
    }
    function gl(a, b, c, d, e=null) {
        if ("function" === typeof d) {
            var f = a.h ? 2.2 : 2.1;
            if (c && (c > f || 1 >= c))
                d(null, !1);
            else
                switch (c = a.g.__tcfapiEventListeners,
                b) {
                case "getTCData":
                    a.h || e && (!Array.isArray(e) || !e.every(g=>"number" === typeof g)) ? d(null, !1) : d(kl(a, e, null), !0);
                    break;
                case "ping":
                    d({
                        gdprApplies: !0,
                        cmpLoaded: !0,
                        cmpStatus: "loaded",
                        displayStatus: "disabled",
                        apiVersion: a.h ? "2.2" : "2.1",
                        cmpVersion: 2,
                        cmpId: 300
                    });
                    break;
                case "addEventListener":
                    b = c.push(d);
                    d(kl(a, null, b - 1), !0);
                    break;
                case "removeEventListener":
                    c[e] ? (c[e] = null,
                    d(!0)) : d(!1);
                    break;
                case "getInAppTCData":
                case "getVendorList":
                    d(null, !1)
                }
        }
    }
    function kl(a, b, c) {
        if (!a.i)
            return null;
        b = Jk(a.i, b);
        b.addtlConsent = null != a.j ? a.j : void 0;
        b.cmpStatus = "loaded";
        b.eventStatus = "tcloaded";
        null != c && (b.listenerId = c);
        return b
    }
    class cl {
        constructor(a, b) {
            var c = S;
            this.g = c;
            this.A = a;
            this.h = b;
            a = Qk(this.g.document);
            try {
                var d = a ? Ok(a) : null
            } catch (e) {
                d = null
            }
            (a = d) ? (d = D(a, Lk, 5) || null,
            a = E(a, Kk, 7),
            a = jl(a ?? []),
            d = {
                Va: d,
                Ya: a
            }) : d = {
                Va: null,
                Ya: null
            };
            a = d;
            d = hl(this, a.Ya);
            a = a.Va;
            a?.g() && 0 !== L(a, 2).length ? (b = $b(a, Bk, 1) ? D(a, Bk, 1) : Ak(),
            a = {
                uspString: L(a, 2),
                xa: Ck(b)
            }) : a = null;
            this.s = a && d ? d.xa > a.xa ? d.uspString : a.uspString : a ? a.uspString : d ? d.uspString : null;
            this.i = (d = Pk(c.document)) && null != H(d, 1) ? L(d, 1) : null;
            this.j = (c = Pk(c.document)) && null != H(c, 2) ? L(c, 2) : null
        }
    }
    ;const ll = {
        google_ad_channel: !0,
        google_ad_host: !0
    };
    function ml(a, b) {
        a.location.href && a.location.href.substring && (b.url = a.location.href.substring(0, 200));
        kj("ama", b, .01)
    }
    function nl(a) {
        const b = {};
        ud(ll, (c,d)=>{
            d in a && (b[d] = a[d])
        }
        );
        return b
    }
    ;function ol(a) {
        const b = /[a-zA-Z0-9._~-]/
          , c = /%[89a-zA-Z]./;
        return a.replace(/(%[a-zA-Z0-9]{2})/g, d=>{
            if (!d.match(c)) {
                const e = decodeURIComponent(d);
                if (e.match(b))
                    return e
            }
            return d.toUpperCase()
        }
        )
    }
    function pl(a) {
        let b = "";
        const c = /[/%?&=]/;
        for (let d = 0; d < a.length; ++d) {
            const e = a[d];
            b = e.match(c) ? b + e : b + encodeURIComponent(e)
        }
        return b
    }
    ;function ql(a) {
        a = cc(a, 2, yb);
        if (!a)
            return !1;
        for (let b = 0; b < a.length; b++)
            if (1 == a[b])
                return !0;
        return !1
    }
    function rl(a, b) {
        a = pl(ol(a.location.pathname)).replace(/(^\/)|(\/$)/g, "");
        const c = vd(a)
          , d = sl(a);
        return b.find(e=>{
            if ($b(e, wi, 7)) {
                var f = D(e, wi, 7);
                f = Cb(Yb(f, 1))
            } else
                f = Cb(Yb(e, 1));
            e = $b(e, wi, 7) ? I(D(e, wi, 7), 2) : 2;
            if ("number" !== typeof f)
                return !1;
            switch (e) {
            case 1:
                return f == c;
            case 2:
                return d[f] || !1
            }
            return !1
        }
        ) || null
    }
    function sl(a) {
        const b = {};
        for (; ; ) {
            b[vd(a)] = !0;
            if (!a)
                return b;
            a = a.substring(0, a.lastIndexOf("/"))
        }
    }
    ;var tl = a=>{
        a = D(a, vi, 3);
        return !a || rc(a, 1) <= Date.now() ? !1 : !0
    }
    ;
    function ul(a) {
        if (Q(nh))
            var b = null;
        else
            try {
                b = a.getItem("google_ama_config")
            } catch (d) {
                b = null
            }
        try {
            var c = b ? Ii(b) : null
        } catch (d) {
            c = null
        }
        return c
    }
    ;var vl = class extends N {
        g() {
            return D(this, nk, 2)
        }
        h() {
            return J(this, 3)
        }
    }
    ;
    var wl = class extends N {
        g() {
            return cc(this, 1, Ib)
        }
        h() {
            return D(this, vl, 2)
        }
    }
    ;
    wl.u = [1];
    var xl = class extends N {
        getId() {
            return sc(F(this, 1))
        }
    }
    ;
    xl.u = [2];
    var yl = class extends N {
    }
    ;
    yl.u = [2];
    var zl = class extends N {
    }
    ;
    zl.u = [2];
    var Al = class extends N {
        g() {
            return tc(this, 2)
        }
        h() {
            return tc(this, 4)
        }
        i() {
            return J(this, 3)
        }
    }
    ;
    var Bl = class extends N {
    }
    ;
    Bl.u = [1, 4, 2, 3];
    var Dl = class extends N {
        h() {
            return vc(this, vl, 13, Cl)
        }
        j() {
            return void 0 !== ac(this, vl, kc(this, Cl, 13))
        }
        g() {
            return vc(this, wl, 14, Cl)
        }
        i() {
            return void 0 !== ac(this, wl, kc(this, Cl, 14))
        }
    }
    ;
    Dl.u = [19];
    var Cl = [13, 14];
    let El = void 0;
    function Fl(a) {
        Ac(El, Be);
        El = a
    }
    ;function X(a) {
        return a.google_ad_modifications = a.google_ad_modifications || {}
    }
    function Gl(a) {
        a = X(a);
        const b = a.space_collapsing || "none";
        return a.remove_ads_by_default ? {
            Sa: !0,
            Jb: b,
            ua: a.ablation_viewport_offset
        } : null
    }
    function Hl(a, b) {
        a = X(a);
        a.had_ads_ablation = !0;
        a.remove_ads_by_default = !0;
        a.space_collapsing = "slot";
        a.ablation_viewport_offset = b
    }
    function Il(a) {
        X(S).allow_second_reactive_tag = a
    }
    function Jl() {
        const a = X(window);
        a.afg_slotcar_vars || (a.afg_slotcar_vars = {});
        return a.afg_slotcar_vars
    }
    ;function Kl(a) {
        return X(a)?.head_tag_slot_vars?.google_ad_host ?? Ll(a)
    }
    function Ll(a) {
        return a.document?.querySelector('meta[name="google-adsense-platform-account"]')?.getAttribute("content") ?? null
    }
    ;const Ml = [2, 7, 1];
    var Pl = (a,b,c="",d=null)=>1 === b && Nl(c, d) ? !0 : Ol(a, c, e=>La(E(e, Fc, 2), f=>I(f, 1) === b))
      , Nl = (a,b)=>b ? b.j() ? J(b.h(), 1) : b.i() && "" !== a && 1 === b.g().g().length && b.g().g()[0] === a ? J(b.g().h(), 1) : !1 : !1
      , Ql = (a,b)=>{
        b = sc(F(b, 18));
        -1 !== b && (a.tmod = b)
    }
      , Sl = a=>{
        const b = pd(S) || S;
        return Rl(b, a) ? !0 : Ol(S, "", c=>La(cc(c, 3, yb), d=>d === a))
    }
    ;
    function Rl(a, b) {
        a = (a = (a = a.location && a.location.hash) && a.match(/forced_clientside_labs=([\d,]+)/)) && a[1];
        return !!a && Na(a.split(","), b.toString())
    }
    function Ol(a, b, c) {
        a = pd(a) || a;
        const d = Tl(a);
        b && (b = ae(String(b)));
        return Tc(d, (e,f)=>Object.prototype.hasOwnProperty.call(d, f) && (!b || b === f) && c(e))
    }
    function Tl(a) {
        a = Ul(a);
        const b = {};
        ud(a, (c,d)=>{
            try {
                const e = new Gc(c);
                b[d] = e
            } catch (e) {}
        }
        );
        return b
    }
    var Ul = a=>{
        Ac(El, Cc);
        a = ck({
            l: a,
            R: El
        });
        return null != a.g ? Vl(a.getValue()) : {}
    }
    ;
    function Vl(a) {
        try {
            const b = a.getItem("google_adsense_settings");
            if (!b)
                return {};
            const c = JSON.parse(b);
            return c !== Object(c) ? {} : Sc(c, (d,e)=>Object.prototype.hasOwnProperty.call(c, e) && "string" === typeof e && Array.isArray(d))
        } catch (b) {
            return {}
        }
    }
    function Wl(a) {
        kj("atf_ad_settings_from_ppabg", {
            p_s: a
        }, .01)
    }
    const Xl = a=>{
        kj("overlay_settings_from_ppabg", {
            p_s: a
        }, .01)
    }
      , Yl = (a,b)=>{
        if (Kl(p))
            return Ml;
        if (b?.j()) {
            var c = L(b.h(), 9);
            b = b?.h()?.g()?.h();
            if (!a || c != a || !b)
                return Ml;
            Xl(!1);
            return cc(b, 3, yb)
        }
        if (b?.i()) {
            c = b?.g()?.g();
            if (!c || 1 !== c.length || !a || c[0] !== a || L(b, 17) != p.location.host)
                return Ml;
            a = b?.g()?.h()?.g()?.h();
            if (!a)
                return Ml;
            Xl(!0);
            return cc(a, 3, yb)
        }
        return Ml
    }
    ;
    var Zl = (a,b)=>{
        const c = [];
        a = Yl(a, b);
        a.includes(1) || c.push(1);
        a.includes(2) || c.push(2);
        a.includes(7) || c.push(7);
        return c
    }
    ;
    function $l(a, b, c, d) {
        am(new bm(a,b,c,d))
    }
    function am(a) {
        Lg(Kg(ck({
            l: a.l,
            R: J(a.g, 6)
        }), b=>{
            cm(a, b, !0)
        }
        ), ()=>{
            dm(a)
        }
        )
    }
    function cm(a, b, c) {
        Lg(Kg(em(b), d=>{
            fm("ok");
            a.h(d, {
                fromLocalStorage: !0
            })
        }
        ), ()=>{
            var d = a.l;
            try {
                b.removeItem("google_ama_config")
            } catch (e) {
                ml(d, {
                    lserr: 1
                })
            }
            c ? dm(a) : a.h(null, null)
        }
        )
    }
    function dm(a) {
        Lg(Kg(gm(a), b=>{
            a.h(b, {
                fromPABGSettings: !0
            })
        }
        ), ()=>{
            hm(a)
        }
        )
    }
    function em(a) {
        return (a = (a = ul(a)) ? tl(a) ? a : null : null) ? Fg(a) : Hg(Error("invlocst"))
    }
    function gm(a) {
        if (Kl(a.l) && !J(a.g, 22))
            return Hg(Error("invtag"));
        a: {
            var b = a.l;
            var c = a.i;
            a = a.g;
            if (a?.j())
                (b = a?.h()?.g()?.g()) && (0 < E(b, ah, 1).length || Q(oh) && 0 < E(b, bh, 3).length) ? Wl(!1) : b = null;
            else {
                if (a?.i()) {
                    const d = a?.g()?.g()
                      , e = a?.g()?.h()?.g()?.g();
                    if (d && 1 === d.length && d[0] === c && e && (0 < E(e, ah, 1).length || Q(oh) && 0 < E(e, bh, 3).length) && L(a, 17) === b.location.host) {
                        Wl(!0);
                        b = e;
                        break a
                    }
                }
                b = null
            }
        }
        b ? (c = new Hi,
        a = E(b, ah, 1),
        c = qc(c, 1, a),
        a = E(b, Ci, 2),
        c = qc(c, 7, a),
        Q(oh) && 0 < E(b, bh, 3).length && (a = new ch,
        b = E(b, bh, 3),
        b = qc(a, 1, b),
        oc(c, 6, b)),
        b = Fg(c)) : b = Hg(Error("invtag"));
        return b
    }
    function hm(a) {
        gk({
            l: a.l,
            R: J(a.g, 6),
            timeoutMs: 50,
            ca: b=>{
                im(a, b)
            }
        })
    }
    function im(a, b) {
        Lg(Kg(b, c=>{
            cm(a, c, !1)
        }
        ), c=>{
            fm(c.message);
            a.h(null, null)
        }
        )
    }
    function fm(a) {
        kj("abg::amalserr", {
            status: a,
            guarding: "true",
            timeout: 50,
            rate: .01
        }, .01)
    }
    class bm {
        constructor(a, b, c, d) {
            this.l = a;
            this.g = b;
            this.i = c;
            this.h = d
        }
    }
    ;var lm = (a,b,c,d)=>{
        try {
            const e = rl(a, E(c, Ci, 7));
            if (e && ql(e)) {
                H(e, 4) && (d = Tg(d, new Ug(null,{
                    google_package: H(e, 4)
                })));
                const f = new Fj(a,b,c,e,d);
                Si(1E3, ()=>{
                    var g = new Ag;
                    (new qk(a,f,g)).start();
                    return g.h
                }
                , a).then(la(jm, a), la(km, a))
            }
        } catch (e) {
            ml(a, {
                atf: -1
            })
        }
    }
    ;
    const jm = a=>{
        ml(a, {
            atf: 1
        })
    }
      , km = (a,b)=>{
        (a.google_ama_state = a.google_ama_state || {}).exception = b;
        ml(a, {
            atf: 0
        })
    }
    ;
    function mm(a) {
        a.easpi = Q(Jh);
        Q(Dh) || (a.asla = .4,
        a.asaa = -1);
        Q(Gh) || (a.sedf = !1);
        a.asro = Q(Hh);
        Q(Eh) || (a.sefa = !0);
        Q(Ih) && (a.sugawps = !0);
        const b = P(Qc).h(zh.g, zh.defaultValue);
        b.length && (a.seiel = b.join("~"));
        Q(Fh) || (a.slcwct = Rc(Bh),
        a.sacwct = Rc(xh));
        Q(Ah) && (a.slmct = Rc(Ch),
        a.samct = Rc(yh))
    }
    ;function nm(a, b) {
        if (!a)
            return !1;
        a = a.hash;
        if (!a || !a.indexOf)
            return !1;
        if (-1 != a.indexOf(b))
            return !0;
        b = om(b);
        return "go" != b && -1 != a.indexOf(b) ? !0 : !1
    }
    function om(a) {
        let b = "";
        ud(a.split("_"), c=>{
            b += c.substr(0, 2)
        }
        );
        return b
    }
    ;Qa || Da();
    class pm {
        constructor() {
            this.promise = new Promise(a=>{
                this.resolve = a
            }
            )
        }
    }
    ;function qm() {
        const {promise: a, resolve: b} = new pm;
        return {
            promise: a,
            resolve: b
        }
    }
    ;function rm(a, b, c=()=>{}
    ) {
        b.google_llp || (b.google_llp = {});
        b = b.google_llp;
        let d = b[a];
        if (d)
            return d;
        d = qm();
        b[a] = d;
        c();
        return d
    }
    function sm(a, b, c) {
        return rm(a, b, ()=>{
            qd(b.document, c)
        }
        ).promise
    }
    ;function tm() {
        const a = {};
        P(Qc).g(ih.g, ih.defaultValue) && (a.bust = P(Qc).g(ih.g, ih.defaultValue));
        var b = Ij();
        b = Nj(b, 38, "");
        "" !== b && (a.sbust = b);
        return a
    }
    const um = new Map([[2, 7], [3, 1], [4, 3], [5, 12]]);
    function vm(a, b, c) {
        c = Yc(c, tm());
        if (1 === a)
            return {
                vc: qd(b.document, c),
                Ta: new Promise(()=>{}
                )
            };
        if (um.has(a))
            return {
                Ta: sm(um.get(a), b, c)
            };
        throw Error(`Unexpected chunkId: ${a}`);
    }
    ;function wm(a) {
        a.google_reactive_ads_global_state ? (null == a.google_reactive_ads_global_state.sideRailProcessedFixedElements && (a.google_reactive_ads_global_state.sideRailProcessedFixedElements = new Set),
        null == a.google_reactive_ads_global_state.sideRailAvailableSpace && (a.google_reactive_ads_global_state.sideRailAvailableSpace = new Map),
        null == a.google_reactive_ads_global_state.sideRailPlasParam && (a.google_reactive_ads_global_state.sideRailPlasParam = new Map)) : a.google_reactive_ads_global_state = new xm;
        return a.google_reactive_ads_global_state
    }
    class xm {
        constructor() {
            this.wasPlaTagProcessed = !1;
            this.wasReactiveAdConfigReceived = {};
            this.adCount = {};
            this.wasReactiveAdVisible = {};
            this.stateForType = {};
            this.reactiveTypeEnabledInAsfe = {};
            this.wasReactiveTagRequestSent = !1;
            this.reactiveTypeDisabledByPublisher = {};
            this.tagSpecificState = {};
            this.messageValidationEnabled = !1;
            this.floatingAdsStacking = new ym;
            this.sideRailProcessedFixedElements = new Set;
            this.sideRailAvailableSpace = new Map;
            this.sideRailPlasParam = new Map
        }
    }
    var ym = class {
        constructor() {
            this.maxZIndexRestrictions = {};
            this.nextRestrictionId = 0;
            this.maxZIndexListeners = []
        }
    }
    ;
    var Am = a=>{
        if (p.google_apltlad)
            return null;
        var b = zm(a) && 1 === (p.top == p ? 0 : od(p.top) ? 1 : 2);
        if (p !== p.top && !b || !a.google_ad_client)
            return null;
        p.google_apltlad = !0;
        b = {
            enable_page_level_ads: {
                pltais: !0
            },
            google_ad_client: a.google_ad_client
        };
        const c = b.enable_page_level_ads;
        ud(a, (d,e)=>{
            pi[e] && "google_ad_client" !== e && (c[e] = d)
        }
        );
        c.google_pgb_reactive = 7;
        mm(c);
        if ("google_ad_section"in a || "google_ad_region"in a)
            c.google_ad_section = a.google_ad_section || a.google_ad_region;
        return b
    }
    ;
    function zm(a) {
        let b = Q(th);
        "aa" === a.google_loader_used && (b || (b = Q(uh)));
        return b
    }
    ;function Bm(a, b) {
        X(S).ama_ran_on_page || Si(1001, ()=>{
            Cm(new Dm(a,b))
        }
        , p)
    }
    function Cm(a) {
        $l(a.l, a.h, a.g.google_ad_client || "", (b,c)=>{
            var d = a.l
              , e = a.g;
            X(S).ama_ran_on_page || b && Em(d, e, b, c)
        }
        )
    }
    class Dm {
        constructor(a, b) {
            this.l = p;
            this.g = a;
            this.h = b
        }
    }
    function Em(a, b, c, d) {
        d && (Xi(a).configSourceInAbg = d);
        $b(c, Gi, 24) && (d = Yi(a),
        d.availableAbg = !0,
        d.ablationFromStorage = !!D(c, Gi, 24)?.g()?.g());
        if (ca(b.enable_page_level_ads) && 7 === b.enable_page_level_ads.google_pgb_reactive) {
            if (!rl(a, E(c, Ci, 7))) {
                kj("amaait", {
                    value: "true"
                });
                return
            }
            kj("amaait", {
                value: "false"
            })
        }
        X(S).ama_ran_on_page = !0;
        D(c, ui, 15)?.g() && (X(a).enable_overlap_observer = !0);
        var e = D(c, ti, 13);
        e && 1 === I(e, 1) ? (d = 0,
        (e = D(e, si, 6)) && F(e, 3) && (d = F(e, 3) || 0),
        Hl(a, d)) : D(c, Gi, 24)?.g()?.g() && (Yi(a).ablatingThisPageview = !0,
        Hl(a, 1));
        Vd(3, [c.toJSON()]);
        const f = b.google_ad_client || "";
        b = nl(ca(b.enable_page_level_ads) ? b.enable_page_level_ads : {});
        const g = Tg(Xg, new Ug(null,b));
        jj(782, ()=>{
            lm(a, f, c, g)
        }
        )
    }
    ;function Fm(a, b) {
        a = a.document;
        for (var c = void 0, d = 0; !c || a.getElementById(c + "_host"); )
            c = "aswift_" + d++;
        a = c;
        c = Number(b.google_ad_width || 0);
        b = Number(b.google_ad_height || 0);
        d = document.createElement("div");
        d.id = a + "_host";
        const e = d.style;
        e.border = "none";
        e.height = `${b}px`;
        e.width = `${c}px`;
        e.margin = "0px";
        e.padding = "0px";
        e.position = "relative";
        e.visibility = "visible";
        e.backgroundColor = "transparent";
        e.display = "inline-block";
        return {
            tb: a,
            Lb: d
        }
    }
    ;function Gm({va: a, Ca: b}) {
        return a || ("dev" === b ? "dev" : "")
    }
    ;var Hm = {
        google_analytics_domain_name: !0,
        google_analytics_uacct: !0,
        google_pause_ad_requests: !0,
        google_user_agent_client_hint: !0
    }
      , Im = a=>(a = a.innerText || a.innerHTML) && (a = a.replace(/^\s+/, "").split(/\r?\n/, 1)[0].match(/^\x3c!--+(.*?)(?:--+>)?\s*$/)) && RegExp("google_ad_client").test(a[1]) ? a[1] : null
      , Jm = a=>{
        if (a = a.innerText || a.innerHTML)
            if (a = a.replace(/^\s+|\s+$/g, "").replace(/\s*(\r?\n)+\s*/g, ";"),
            (a = a.match(/^\x3c!--+(.*?)(?:--+>)?$/) || a.match(/^\/*\s*<!\[CDATA\[(.*?)(?:\/*\s*\]\]>)?$/i)) && RegExp("google_ad_client").test(a[1]))
                return a[1];
        return null
    }
      , Km = a=>{
        switch (a) {
        case "true":
            return !0;
        case "false":
            return !1;
        case "null":
            return null;
        case "undefined":
            break;
        default:
            try {
                const b = a.match(/^(?:'(.*)'|"(.*)")$/);
                if (b)
                    return b[1] || b[2] || "";
                if (/^[-+]?\d*(\.\d+)?$/.test(a)) {
                    const c = parseFloat(a);
                    return c === c ? c : void 0
                }
            } catch (b) {}
        }
    }
    ;
    function Lm(a) {
        if (a.google_ad_client)
            var b = String(a.google_ad_client);
        else {
            if (null == (b = X(a).head_tag_slot_vars?.google_ad_client ?? a.document.querySelector(".adsbygoogle[data-ad-client]")?.getAttribute("data-ad-client"))) {
                b: {
                    b = a.document.getElementsByTagName("script");
                    a = a.navigator && a.navigator.userAgent || "";
                    a = RegExp("appbankapppuzdradb|daumapps|fban|fbios|fbav|fb_iab|gsa/|messengerforios|naver|niftyappmobile|nonavigation|pinterest|twitter|ucbrowser|yjnewsapp|youtube", "i").test(a) || /i(phone|pad|pod)/i.test(a) && /applewebkit/i.test(a) && !/version|safari/i.test(a) && !$d() ? Im : Jm;
                    for (var c = b.length - 1; 0 <= c; c--) {
                        var d = b[c];
                        if (!d.google_parsed_script_for_pub_code && (d.google_parsed_script_for_pub_code = !0,
                        d = a(d))) {
                            b = d;
                            break b
                        }
                    }
                    b = null
                }
                if (b) {
                    a = /(google_\w+) *= *(['"]?[\w.-]+['"]?) *(?:;|$)/gm;
                    for (c = {}; d = a.exec(b); )
                        c[d[1]] = Km(d[2]);
                    b = c;
                    b = b.google_ad_client ? b.google_ad_client : ""
                } else
                    b = ""
            }
            b = b ?? ""
        }
        return b
    }
    ;var Mm = {
        "120x90": !0,
        "160x90": !0,
        "180x90": !0,
        "200x90": !0,
        "468x15": !0,
        "728x15": !0
    };
    function Nm(a, b) {
        if (15 == b) {
            if (728 <= a)
                return 728;
            if (468 <= a)
                return 468
        } else if (90 == b) {
            if (200 <= a)
                return 200;
            if (180 <= a)
                return 180;
            if (160 <= a)
                return 160;
            if (120 <= a)
                return 120
        }
        return null
    }
    ;var Om = class extends N {
        constructor() {
            super()
        }
        getVersion() {
            return L(this, 2)
        }
    }
    ;
    function Pm(a, b) {
        return y(a, 2, Hb(b))
    }
    function Qm(a, b) {
        return y(a, 3, Hb(b))
    }
    function Rm(a, b) {
        return y(a, 4, Hb(b))
    }
    function Sm(a, b) {
        return y(a, 5, Hb(b))
    }
    function Tm(a, b) {
        return y(a, 9, Hb(b))
    }
    function Um(a, b) {
        return qc(a, 10, b)
    }
    function Vm(a, b) {
        return y(a, 11, ub(b))
    }
    function Wm(a, b) {
        return y(a, 1, Hb(b))
    }
    function Xm(a, b) {
        return y(a, 7, ub(b))
    }
    var Ym = class extends N {
        constructor() {
            super()
        }
    }
    ;
    Ym.u = [10, 6];
    const Zm = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");
    function $m() {
        var a = S;
        if ("function" !== typeof a.navigator?.userAgentData?.getHighEntropyValues)
            return null;
        const b = a.google_tag_data ?? (a.google_tag_data = {});
        if (b.uach_promise)
            return b.uach_promise;
        a = a.navigator.userAgentData.getHighEntropyValues(Zm).then(c=>{
            b.uach ?? (b.uach = c);
            return c
        }
        );
        return b.uach_promise = a
    }
    function an(a) {
        return Vm(Um(Sm(Pm(Wm(Rm(Xm(Tm(Qm(new Ym, a.architecture || ""), a.bitness || ""), a.mobile || !1), a.model || ""), a.platform || ""), a.platformVersion || ""), a.uaFullVersion || ""), a.fullVersionList?.map(b=>{
            var c = new Om;
            c = y(c, 1, Hb(b.brand));
            return y(c, 2, Hb(b.version))
        }
        ) || []), a.wow64 || !1)
    }
    function bn() {
        return $m()?.then(a=>an(a)) ?? null
    }
    ;function cn(a, b) {
        b.google_ad_host || (a = Ll(a)) && (b.google_ad_host = a)
    }
    function dn(a, b, c="") {
        S.google_sa_queue || (S.google_sa_queue = [],
        S.google_process_slots = W.oa(215, ()=>{
            en(S.google_sa_queue)
        }
        ),
        a = fn(c, a, b),
        vm(1, S, a))
    }
    function en(a) {
        const b = a.shift();
        "function" === typeof b && W.ea(216, b);
        a.length && p.setTimeout(W.oa(215, ()=>{
            en(a)
        }
        ), 0)
    }
    function gn(a, b) {
        a.google_sa_queue = a.google_sa_queue || [];
        a.google_sa_impl ? b() : a.google_sa_queue.push(b)
    }
    function fn(a, b, c) {
        var d = S;
        b = J(c, 4) ? b.Fb : b.Gb;
        a: {
            if (J(c, 4)) {
                if (a = a || Lm(d)) {
                    d = Q(Lh) ? {
                        client: a,
                        plah: d.location.host,
                        aplac: Q(Lh).toString()
                    } : {
                        client: a,
                        plah: d.location.host
                    };
                    break a
                }
                throw Error("PublisherCodeNotFoundForAma");
            }
            d = {}
        }
        return Yc(b, d)
    }
    function hn(a) {
        a: {
            var b = [p.top];
            var c = [];
            let e = 0, f;
            for (; f = b[e++]; ) {
                c.push(f);
                try {
                    if (f.frames)
                        for (let g = 0; g < f.frames.length && 1024 > b.length; ++g)
                            b.push(f.frames[g])
                } catch {}
            }
            b = c;
            for (c = 0; c < b.length; c++)
                try {
                    var d = b[c].frames.google_esf;
                    if (d) {
                        Pd = d;
                        break a
                    }
                } catch (g) {}
            Pd = null
        }
        if (Pd)
            return null;
        d = rd("IFRAME");
        d.id = "google_esf";
        d.name = "google_esf";
        b = a.Ob;
        c = P(Qc).g(wh.g, wh.defaultValue);
        "inhead" === c ? b = a.Mb : "nohtml" === c && (b = a.Nb);
        Q(rh) && (b = Yc(b, {
            hello: "world"
        }));
        d.src = $c(b).toString();
        d.style.display = "none";
        return d
    }
    function jn(a, b, c, d) {
        const {tb: e, Lb: f} = Fm(a, b);
        c.appendChild(f);
        kn(a, c, b);
        c = b.google_start_time ?? oa;
        const g = (new Date).getTime();
        b.google_lrv = Gm({
            va: "m202402080301",
            Ca: L(d, 2)
        });
        b.google_async_iframe_id = e;
        b.google_start_time = c;
        b.google_bpp = g > c ? g - c : 1;
        a.google_sv_map = a.google_sv_map || {};
        a.google_sv_map[e] = b;
        gn(a, ()=>{
            var h = f;
            if (!h || !h.isConnected)
                if (h = a.document.getElementById(String(b.google_async_iframe_id) + "_host"),
                null == h)
                    throw Error("no_div");
            (h = a.google_sa_impl({
                pubWin: a,
                vars: b,
                innerInsElement: h
            })) && W.Y(911, h)
        }
        )
    }
    function kn(a, b, c) {
        var d = c.google_ad_output
          , e = c.google_ad_format
          , f = c.google_ad_width || 0
          , g = c.google_ad_height || 0;
        e || "html" !== d && null != d || (e = f + "x" + g);
        d = !c.google_ad_slot || c.google_override_format || !Mm[c.google_ad_width + "x" + c.google_ad_height] && "aa" === c.google_loader_used;
        e && d ? e = e.toLowerCase() : e = "";
        c.google_ad_format = e;
        if ("number" !== typeof c.google_reactive_sra_index || !c.google_ad_unit_key) {
            e = [c.google_ad_slot, c.google_orig_ad_format || c.google_ad_format, c.google_ad_type, c.google_orig_ad_width || c.google_ad_width, c.google_orig_ad_height || c.google_ad_height];
            d = [];
            f = 0;
            for (g = b; g && 25 > f; g = g.parentNode,
            ++f)
                9 === g.nodeType ? d.push("") : d.push(g.id);
            (d = d.join()) && e.push(d);
            c.google_ad_unit_key = vd(e.join(":")).toString();
            e = [];
            for (d = 0; b && 25 > d; ++d) {
                f = (f = 9 !== b.nodeType && b.id) ? "/" + f : "";
                a: {
                    if (b && b.nodeName && b.parentElement) {
                        g = b.nodeName.toString().toLowerCase();
                        const h = b.parentElement.childNodes;
                        let k = 0;
                        for (let m = 0; m < h.length; ++m) {
                            const l = h[m];
                            if (l.nodeName && l.nodeName.toString().toLowerCase() === g) {
                                if (b === l) {
                                    g = "." + k;
                                    break a
                                }
                                ++k
                            }
                        }
                    }
                    g = ""
                }
                e.push((b.nodeName && b.nodeName.toString().toLowerCase()) + f + g);
                b = b.parentElement
            }
            b = e.join() + ":";
            e = [];
            if (a)
                try {
                    let h = a.parent;
                    for (d = 0; h && h !== a && 25 > d; ++d) {
                        const k = h.frames;
                        for (f = 0; f < k.length; ++f)
                            if (a === k[f]) {
                                e.push(f);
                                break
                            }
                        a = h;
                        h = a.parent
                    }
                } catch (h) {}
            c.google_ad_dom_fingerprint = vd(b + e.join()).toString()
        }
    }
    function ln() {
        var a = pd(p);
        a && (a = wm(a),
        a.tagSpecificState[1] || (a.tagSpecificState[1] = {
            debugCard: null,
            debugCardRequested: !1
        }))
    }
    function mn() {
        const a = bn();
        null != a && a.then(b=>{
            a: {
                kb = !0;
                try {
                    var c = JSON.stringify(b.toJSON(), Mb);
                    break a
                } finally {
                    kb = !1
                }
                c = void 0
            }
            S.google_user_agent_client_hint = c
        }
        );
        Ed()
    }
    ;function nn(a) {
        return b=>!!(b.fa & a)
    }
    class Y extends hi {
        constructor(a, b, c, d=!1) {
            super(a, b);
            this.fa = c;
            this.xb = d
        }
        pa() {
            return this.fa
        }
        h(a, b, c) {
            c.style.height = this.height() + "px";
            b.rpe = !0
        }
    }
    ;const on = {
        image_stacked: 1 / 1.91,
        image_sidebyside: 1 / 3.82,
        mobile_banner_image_sidebyside: 1 / 3.82,
        pub_control_image_stacked: 1 / 1.91,
        pub_control_image_sidebyside: 1 / 3.82,
        pub_control_image_card_stacked: 1 / 1.91,
        pub_control_image_card_sidebyside: 1 / 3.74,
        pub_control_text: 0,
        pub_control_text_card: 0
    }
      , pn = {
        image_stacked: 80,
        image_sidebyside: 0,
        mobile_banner_image_sidebyside: 0,
        pub_control_image_stacked: 80,
        pub_control_image_sidebyside: 0,
        pub_control_image_card_stacked: 85,
        pub_control_image_card_sidebyside: 0,
        pub_control_text: 80,
        pub_control_text_card: 80
    }
      , qn = {
        pub_control_image_stacked: 100,
        pub_control_image_sidebyside: 200,
        pub_control_image_card_stacked: 150,
        pub_control_image_card_sidebyside: 250,
        pub_control_text: 100,
        pub_control_text_card: 150
    };
    function rn(a) {
        var b = 0;
        a.P && b++;
        a.K && b++;
        a.L && b++;
        if (3 > b)
            return {
                N: "Tags data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num should be set together."
            };
        b = a.P.split(",");
        const c = a.L.split(",");
        a = a.K.split(",");
        if (b.length !== c.length || b.length !== a.length)
            return {
                N: 'Lengths of parameters data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num must match. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside"'
            };
        if (2 < b.length)
            return {
                N: "The parameter length of attribute data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num is too long. At most 2 parameters for each attribute are needed: one for mobile and one for desktop, while " + `you are providing ${b.length} parameters. Example: ${'\n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside"'}.`
            };
        const d = []
          , e = [];
        for (let g = 0; g < b.length; g++) {
            var f = Number(c[g]);
            if (Number.isNaN(f) || 0 === f)
                return {
                    N: `Wrong value '${c[g]}' for ${"data-matched-content-rows-num"}.`
                };
            d.push(f);
            f = Number(a[g]);
            if (Number.isNaN(f) || 0 === f)
                return {
                    N: `Wrong value '${a[g]}' for ${"data-matched-content-columns-num"}.`
                };
            e.push(f)
        }
        return {
            L: d,
            K: e,
            bb: b
        }
    }
    function sn(a) {
        return 1200 <= a ? {
            width: 1200,
            height: 600
        } : 850 <= a ? {
            width: a,
            height: Math.floor(.5 * a)
        } : 550 <= a ? {
            width: a,
            height: Math.floor(.6 * a)
        } : 468 <= a ? {
            width: a,
            height: Math.floor(.7 * a)
        } : {
            width: a,
            height: Math.floor(3.44 * a)
        }
    }
    ;const tn = Pa("script");
    class un {
        constructor(a, b, c=null, d=null, e=null, f=null, g=null, h=null, k=null, m=null, l=null, n=null) {
            this.A = a;
            this.ba = b;
            this.fa = c;
            this.g = d;
            this.X = e;
            this.h = f;
            this.i = g;
            this.C = h;
            this.D = k;
            this.j = m;
            this.s = l;
            this.H = n
        }
        size() {
            return this.ba
        }
    }
    ;const vn = ["google_content_recommendation_ui_type", "google_content_recommendation_columns_num", "google_content_recommendation_rows_num"];
    var wn = class extends hi {
        g(a) {
            return Math.min(1200, Math.max(this.U, Math.round(a)))
        }
    }
    ;
    function xn(a, b) {
        yn(a, b);
        if ("pedestal" === b.google_content_recommendation_ui_type)
            return new un(9,new wn(a,Math.floor(a * b.google_phwr)));
        var c = hd();
        468 > a ? c ? (c = a - 8 - 8,
        c = Math.floor(c / 1.91 + 70) + Math.floor(11 * (c * on.mobile_banner_image_sidebyside + pn.mobile_banner_image_sidebyside) + 96),
        a = {
            aa: a,
            Z: c,
            K: 1,
            L: 12,
            P: "mobile_banner_image_sidebyside"
        }) : (a = sn(a),
        a = {
            aa: a.width,
            Z: a.height,
            K: 1,
            L: 13,
            P: "image_sidebyside"
        }) : (a = sn(a),
        a = {
            aa: a.width,
            Z: a.height,
            K: 4,
            L: 2,
            P: "image_stacked"
        });
        zn(b, a);
        return new un(9,new wn(a.aa,a.Z))
    }
    function An(a, b) {
        yn(a, b);
        var c = rn({
            L: b.google_content_recommendation_rows_num,
            K: b.google_content_recommendation_columns_num,
            P: b.google_content_recommendation_ui_type
        });
        if (c.N)
            a = {
                aa: 0,
                Z: 0,
                K: 0,
                L: 0,
                P: "image_stacked",
                N: c.N
            };
        else {
            var d = 2 === c.bb.length && 468 <= a ? 1 : 0;
            var e = c.bb[d];
            e = 0 === e.indexOf("pub_control_") ? e : "pub_control_" + e;
            var f = qn[e];
            let g = c.K[d];
            for (; a / g < f && 1 < g; )
                g--;
            f = g;
            d = c.L[d];
            c = Math.floor(((a - 8 * f - 8) / f * on[e] + pn[e]) * d + 8 * d + 8);
            a = 1500 < a ? {
                width: 0,
                height: 0,
                Hb: `Calculated slot width is too large: ${a}`
            } : 1500 < c ? {
                width: 0,
                height: 0,
                Hb: `Calculated slot height is too large: ${c}`
            } : {
                width: a,
                height: c
            };
            a = {
                aa: a.width,
                Z: a.height,
                K: f,
                L: d,
                P: e
            }
        }
        if (a.N)
            throw new V(a.N);
        zn(b, a);
        return new un(9,new wn(a.aa,a.Z))
    }
    function yn(a, b) {
        if (0 >= a)
            throw new V(`Invalid responsive width from Matched Content slot ${b.google_ad_slot}: ${a}. Please ensure to put this Matched Content slot into a non-zero width div container.`);
    }
    function zn(a, b) {
        a.google_content_recommendation_ui_type = b.P;
        a.google_content_recommendation_columns_num = b.K;
        a.google_content_recommendation_rows_num = b.L
    }
    ;class Bn extends hi {
        g() {
            return this.U
        }
        h(a, b, c) {
            gi(a, c);
            c.style.height = this.height() + "px";
            b.rpe = !0
        }
    }
    ;const Cn = {
        "image-top": a=>600 >= a ? 284 + .414 * (a - 250) : 429,
        "image-middle": a=>500 >= a ? 196 - .13 * (a - 250) : 164 + .2 * (a - 500),
        "image-side": a=>500 >= a ? 205 - .28 * (a - 250) : 134 + .21 * (a - 500),
        "text-only": a=>500 >= a ? 187 - .228 * (a - 250) : 130,
        "in-article": a=>420 >= a ? a / 1.2 : 460 >= a ? a / 1.91 + 130 : 800 >= a ? a / 4 : 200
    };
    var Dn = class extends hi {
        g() {
            return Math.min(1200, this.U)
        }
    }
      , En = (a,b,c,d,e)=>{
        var f = e.google_ad_layout || "image-top";
        if ("in-article" == f) {
            var g = a;
            if ("false" == e.google_full_width_responsive)
                a = g;
            else if (a = bi(b, c, g, .2, e),
            !0 !== a)
                e.gfwrnwer = a,
                a = g;
            else if (a = Wh(b))
                if (e.google_full_width_responsive_allowed = !0,
                c.parentElement) {
                    b: {
                        g = c;
                        for (let h = 0; 100 > h && g.parentElement; ++h) {
                            const k = g.parentElement.childNodes;
                            for (let m = 0; m < k.length; ++m) {
                                const l = k[m];
                                if (l !== g && ei(b, l))
                                    break b
                            }
                            g = g.parentElement;
                            g.style.width = "100%";
                            g.style.height = "auto"
                        }
                    }
                    gi(b, c)
                } else
                    a = g;
            else
                a = g
        }
        if (250 > a)
            throw new V("Fluid responsive ads must be at least 250px wide: availableWidth=" + a);
        a = Math.min(1200, Math.floor(a));
        if (d && "in-article" != f) {
            f = Math.ceil(d);
            if (50 > f)
                throw new V("Fluid responsive ads must be at least 50px tall: height=" + f);
            return new un(11,new hi(a,f))
        }
        if ("in-article" != f && (d = e.google_ad_layout_key)) {
            f = "" + d;
            c = Math.pow(10, 3);
            if (e = (d = f.match(/([+-][0-9a-z]+)/g)) && d.length)
                for (b = [],
                g = 0; g < e; g++)
                    b.push(parseInt(d[g], 36) / c);
            else
                b = null;
            if (!b)
                throw new V("Invalid data-ad-layout-key value: " + f);
            f = (a + -725) / 1E3;
            c = 0;
            d = 1;
            e = b.length;
            for (g = 0; g < e; g++)
                c += b[g] * d,
                d *= f;
            f = Math.ceil(1E3 * c - -725 + 10);
            if (isNaN(f))
                throw new V("Invalid height: height=" + f);
            if (50 > f)
                throw new V("Fluid responsive ads must be at least 50px tall: height=" + f);
            if (1200 < f)
                throw new V("Fluid responsive ads must be at most 1200px tall: height=" + f);
            return new un(11,new hi(a,f))
        }
        d = Cn[f];
        if (!d)
            throw new V("Invalid data-ad-layout value: " + f);
        c = ki(c, b);
        b = Wh(b);
        b = "in-article" !== f || c || a !== b ? Math.ceil(d(a)) : Math.ceil(1.25 * d(a));
        return new un(11,"in-article" == f ? new Dn(a,b) : new hi(a,b))
    }
    ;
    function Fn(a) {
        return b=>{
            for (let c = a.length - 1; 0 <= c; --c)
                if (!a[c](b))
                    return !1;
            return !0
        }
    }
    function Gn(a, b) {
        var c = Hn.slice(0);
        const d = c.length;
        let e = null;
        for (let f = 0; f < d; ++f) {
            const g = c[f];
            if (a(g)) {
                if (null == b || b(g))
                    return g;
                null === e && (e = g)
            }
        }
        return e
    }
    ;var Z = [new Y(970,90,2), new Y(728,90,2), new Y(468,60,2), new Y(336,280,1), new Y(320,100,2), new Y(320,50,2), new Y(300,600,4), new Y(300,250,1), new Y(250,250,1), new Y(234,60,2), new Y(200,200,1), new Y(180,150,1), new Y(160,600,4), new Y(125,125,1), new Y(120,600,4), new Y(120,240,4), new Y(120,120,1,!0)]
      , Hn = [Z[6], Z[12], Z[3], Z[0], Z[7], Z[14], Z[1], Z[8], Z[10], Z[4], Z[15], Z[2], Z[11], Z[5], Z[13], Z[9], Z[16]];
    var Jn = (a,b,c,d,e)=>{
        "false" == e.google_full_width_responsive ? c = {
            F: a,
            G: 1
        } : "autorelaxed" === b && e.google_full_width_responsive || In(b) || e.google_ad_resize ? (b = ci(a, c, d, e),
        c = !0 !== b ? {
            F: a,
            G: b
        } : {
            F: Wh(c) || a,
            G: !0
        }) : c = {
            F: a,
            G: 2
        };
        const {F: f, G: g} = c;
        return !0 !== g ? {
            F: a,
            G: g
        } : d.parentElement ? {
            F: f,
            G: g
        } : {
            F: a,
            G: g
        }
    }
      , Mn = (a,b,c,d,e)=>{
        const {F: f, G: g} = jj(247, ()=>Jn(a, b, c, d, e));
        var h = !0 === g;
        const k = R(d.style.width)
          , m = R(d.style.height)
          , {W: l, T: n, pa: r, ab: v} = Kn(f, b, c, d, e, h);
        h = Ln(b, r);
        var w;
        const A = (w = ii(d, c, "marginLeft", R)) ? w + "px" : ""
          , z = (w = ii(d, c, "marginRight", R)) ? w + "px" : "";
        w = ii(d, c, "zIndex") || "";
        return new un(h,l,r,null,v,g,n,A,z,m,k,w)
    }
      , In = a=>"auto" == a || /^((^|,) *(horizontal|vertical|rectangle) *)+$/.test(a)
      , Kn = (a,b,c,d,e,f)=>{
        b = Nn(c, a, b);
        let g;
        var h = !1;
        let k = !1;
        var m = 488 > Wh(c);
        if (m) {
            g = Xh(d, c);
            var l = ki(d, c);
            h = !l && g;
            k = l && g
        }
        l = [ji(a), nn(b)];
        l.push(mi(m, c, d, k));
        null != e.google_max_responsive_height && l.push(ni(e.google_max_responsive_height));
        m = [w=>!w.xb];
        if (h || k)
            h = oi(c, d),
            m.push(ni(h));
        let n = Gn(Fn(l), Fn(m));
        if (!n)
            throw new V("No slot size for availableWidth=" + a);
        const {W: r, T: v} = jj(248, ()=>{
            var w;
            a: if (f) {
                if (e.gfwrnh && (w = R(e.gfwrnh))) {
                    w = {
                        W: new Bn(a,w),
                        T: !0
                    };
                    break a
                }
                w = a / 1.2;
                var A = Math;
                var z = A.min;
                if (e.google_resizing_allowed || "true" == e.google_full_width_responsive)
                    var G = Infinity;
                else {
                    G = d;
                    let ta = Infinity;
                    do {
                        var K = ii(G, c, "height", R);
                        K && (ta = Math.min(ta, K));
                        (K = ii(G, c, "maxHeight", R)) && (ta = Math.min(ta, K))
                    } while ((G = G.parentElement) && "HTML" != G.tagName);
                    G = ta
                }
                A = z.call(A, w, G);
                if (A < .5 * w || 100 > A)
                    A = w;
                w = {
                    W: new Bn(a,Math.floor(A)),
                    T: A < w ? 102 : !0
                }
            } else
                w = {
                    W: n,
                    T: 100
                };
            return w
        }
        );
        return "in-article" === e.google_ad_layout && c.location && "#hffwroe2etoq" == c.location.hash ? {
            W: On(a, c, d, r, e),
            T: !1,
            pa: b,
            ab: g
        } : {
            W: r,
            T: v,
            pa: b,
            ab: g
        }
    }
    ;
    const Ln = (a,b)=>{
        if ("auto" == a)
            return 1;
        switch (b) {
        case 2:
            return 2;
        case 1:
            return 3;
        case 4:
            return 4;
        case 3:
            return 5;
        case 6:
            return 6;
        case 5:
            return 7;
        case 7:
            return 8
        }
        throw Error("bad mask");
    }
      , Nn = (a,b,c)=>{
        if ("auto" == c)
            c = Math.min(1200, Wh(a)),
            b = .25 >= b / c ? 4 : 3;
        else {
            b = 0;
            for (const d in Th)
                -1 !== c.indexOf(d) && (b |= Th[d])
        }
        return b
    }
      , On = (a,b,c,d,e)=>{
        const f = e.google_ad_height || ii(c, b, "height", R);
        b = En(a, b, c, f, e).size();
        return b.U * b.height() > a * d.height() ? new Y(b.U,b.height(),1) : d
    }
    ;
    var Pn = (a,b,c,d,e)=>{
        var f;
        (f = Wh(b)) ? 488 > Wh(b) ? b.innerHeight >= b.innerWidth ? (e.google_full_width_responsive_allowed = !0,
        gi(b, c),
        f = {
            F: f,
            G: !0
        }) : f = {
            F: a,
            G: 5
        } : f = {
            F: a,
            G: 4
        } : f = {
            F: a,
            G: 10
        };
        const {F: g, G: h} = f;
        if (!0 !== h || a == g)
            return new un(12,new hi(a,d),null,null,!0,h,100);
        const {W: k, T: m, pa: l} = Kn(g, "auto", b, c, e, !0);
        return new un(1,k,l,2,!0,h,m)
    }
    ;
    var Rn = (a,b)=>{
        const c = b.google_ad_format;
        if ("autorelaxed" === c) {
            a: {
                if ("pedestal" !== b.google_content_recommendation_ui_type)
                    for (const d of vn)
                        if (null != b[d]) {
                            a = !0;
                            break a
                        }
                a = !1
            }
            return a ? 9 : 5
        }
        if (In(c))
            return 1;
        if ("link" === c)
            return 4;
        if ("fluid" == c)
            return "in-article" !== b.google_ad_layout || !a.location || "#hffwroe2etop" != a.location.hash && "#hffwroe2etoq" != a.location.hash ? 8 : (Qn(b),
            1);
        if (27 === b.google_reactive_ad_format)
            return Qn(b),
            1
    }
      , Tn = (a,b,c,d,e=!1)=>{
        var f = b.offsetWidth || (c.google_ad_resize || e) && ii(b, d, "width", R) || c.google_ad_width || 0;
        4 === a && (c.google_ad_format = "auto",
        a = 1);
        e = (e = Sn(a, f, b, c, d)) ? e : Mn(f, c.google_ad_format, d, b, c);
        e.size().h(d, c, b);
        null != e.fa && (c.google_responsive_formats = e.fa);
        null != e.X && (c.google_safe_for_responsive_override = e.X);
        null != e.h && (!0 === e.h ? c.google_full_width_responsive_allowed = !0 : (c.google_full_width_responsive_allowed = !1,
        c.gfwrnwer = e.h));
        null != e.i && !0 !== e.i && (c.gfwrnher = e.i);
        d = e.s || c.google_ad_width;
        null != d && (c.google_resizing_width = d);
        d = e.j || c.google_ad_height;
        null != d && (c.google_resizing_height = d);
        d = e.size().g(f);
        const g = e.size().height();
        c.google_ad_width = d;
        c.google_ad_height = g;
        var h = e.size();
        f = h.g(f) + "x" + h.height();
        c.google_ad_format = f;
        c.google_responsive_auto_format = e.A;
        null != e.g && (c.armr = e.g);
        c.google_ad_resizable = !0;
        c.google_override_format = 1;
        c.google_loader_features_used = 128;
        !0 === e.h && (c.gfwrnh = e.size().height() + "px");
        null != e.C && (c.gfwroml = e.C);
        null != e.D && (c.gfwromr = e.D);
        null != e.j && (c.gfwroh = e.j);
        null != e.s && (c.gfwrow = e.s);
        null != e.H && (c.gfwroz = e.H);
        f = pd(window) || window;
        nm(f.location, "google_responsive_dummy_ad") && (Na([1, 2, 3, 4, 5, 6, 7, 8], e.A) || 1 === e.g) && 2 !== e.g && (f = JSON.stringify({
            googMsgType: "adpnt",
            key_value: [{
                key: "qid",
                value: "DUMMY_AD"
            }]
        }),
        c.dash = `<${tn}>window.top.postMessage('${f}', '*'); 
          </${tn}> 
          <div id="dummyAd" style="width:${d}px;height:${g}px; 
            background:#ddd;border:3px solid #f00;box-sizing:border-box; 
            color:#000;"> 
            <p>Requested size:${d}x${g}</p> 
            <p>Rendered size:${d}x${g}</p> 
          </div>`);
        1 != a && (a = e.size().height(),
        b.style.height = a + "px")
    }
    ;
    const Sn = (a,b,c,d,e)=>{
        const f = d.google_ad_height || ii(c, e, "height", R);
        switch (a) {
        case 5:
            const {F: g, G: h} = jj(247, ()=>Jn(b, d.google_ad_format, e, c, d));
            !0 === h && b != g && gi(e, c);
            !0 === h ? d.google_full_width_responsive_allowed = !0 : (d.google_full_width_responsive_allowed = !1,
            d.gfwrnwer = h);
            return xn(g, d);
        case 9:
            return An(b, d);
        case 8:
            return En(b, e, c, f, d);
        case 10:
            return Pn(b, e, c, f, d)
        }
    }
      , Qn = a=>{
        a.google_ad_format = "auto";
        a.armr = 3
    }
    ;
    function Un(a, b) {
        a.google_resizing_allowed = !0;
        a.ovlp = !0;
        a.google_ad_format = "auto";
        a.iaaso = !0;
        a.armr = b
    }
    ;function Vn(a, b) {
        var c = pd(b);
        if (c) {
            c = Wh(c);
            const d = sd(a, b) || {}
              , e = d.direction;
            if ("0px" === d.width && "none" !== d.cssFloat)
                return -1;
            if ("ltr" === e && c)
                return Math.floor(Math.min(1200, c - a.getBoundingClientRect().left));
            if ("rtl" === e && c)
                return a = b.document.body.getBoundingClientRect().right - a.getBoundingClientRect().right,
                Math.floor(Math.min(1200, c - a - Math.floor((c - b.document.body.clientWidth) / 2)))
        }
        return -1
    }
    ;function Wn(a, b) {
        switch (a) {
        case "google_reactive_ad_format":
            return a = parseInt(b, 10),
            isNaN(a) ? 0 : a;
        default:
            return b
        }
    }
    function Xn(a, b) {
        if (a.getAttribute("src")) {
            var c = a.getAttribute("src") || ""
              , d = ld(c, "client");
            d && (b.google_ad_client = Wn("google_ad_client", d));
            (c = ld(c, "host")) && (b.google_ad_host = Wn("google_ad_host", c))
        }
        a = a.attributes;
        c = a.length;
        for (d = 0; d < c; d++) {
            var e = a[d];
            if (/data-/.test(e.name)) {
                const f = pa(e.name.replace("data-matched-content", "google_content_recommendation").replace("data", "google").replace(/-/g, "_"));
                b.hasOwnProperty(f) || (e = Wn(f, e.value),
                null !== e && (b[f] = e))
            }
        }
    }
    function Yn(a) {
        if (a = Wd(a))
            switch (a.data && a.data.autoFormat) {
            case "rspv":
                return 13;
            case "mcrspv":
                return 15;
            default:
                return 14
            }
        else
            return 12
    }
    function Zn(a, b, c, d) {
        Xn(a, b);
        if (c.document && c.document.body && !Rn(c, b) && !b.google_reactive_ad_format) {
            var e = parseInt(a.style.width, 10)
              , f = Vn(a, c);
            if (0 < f && e > f) {
                var g = parseInt(a.style.height, 10);
                e = !!Mm[e + "x" + g];
                let h = f;
                if (e) {
                    const k = Nm(f, g);
                    if (k)
                        h = k,
                        b.google_ad_format = k + "x" + g + "_0ads_al";
                    else
                        throw new V("No slot size for availableWidth=" + f);
                }
                b.google_ad_resize = !0;
                b.google_ad_width = h;
                e || (b.google_ad_format = null,
                b.google_override_format = !0);
                f = h;
                a.style.width = `${f}px`;
                Un(b, 4)
            }
        }
        if (488 > Wh(c)) {
            f = pd(c) || c;
            (g = a.offsetWidth) || (g = ii(a, c, "width", R));
            g = g || b.google_ad_width || 0;
            e = b.google_ad_client;
            if (d = nm(f.location, "google_responsive_slot_preview") || Q(vh) || Pl(f, 1, e, d))
                b: if (b.google_reactive_ad_format || b.google_ad_resize || Rn(c, b) || Zh(a, b))
                    d = !1;
                else {
                    for (d = a; d; d = d.parentElement) {
                        f = sd(d, c);
                        if (!f) {
                            b.gfwrnwer = 18;
                            d = !1;
                            break b
                        }
                        if (!Na(["static", "relative"], f.position)) {
                            b.gfwrnwer = 17;
                            d = !1;
                            break b
                        }
                    }
                    d = bi(c, a, g, .3, b);
                    !0 !== d ? (b.gfwrnwer = d,
                    d = !1) : d = c === c.top ? !0 : !1
                }
            d ? (Un(b, 1),
            d = !0) : d = !1
        } else
            d = !1;
        if (g = Rn(c, b))
            Tn(g, a, b, c, d);
        else {
            if (Zh(a, b)) {
                if (d = sd(a, c))
                    a.style.width = d.width,
                    a.style.height = d.height,
                    Yh(d, b);
                b.google_ad_width || (b.google_ad_width = a.offsetWidth);
                b.google_ad_height || (b.google_ad_height = a.offsetHeight);
                b.google_loader_features_used = 256;
                b.google_responsive_auto_format = Yn(c)
            } else
                Yh(a.style, b);
            c.location && "#gfwmrp" == c.location.hash || 12 == b.google_responsive_auto_format && "true" == b.google_full_width_responsive ? Tn(10, a, b, c, !1) : .01 > Math.random() && 12 === b.google_responsive_auto_format && (a = ci(a.offsetWidth || parseInt(a.style.width, 10) || b.google_ad_width, c, a, b),
            !0 !== a ? (b.efwr = !1,
            b.gfwrnwer = a) : b.efwr = !0)
        }
    }
    ;function $n(a) {
        if (a === a.top)
            return 0;
        for (let b = a; b && b !== b.top && od(b); b = b.parent) {
            if (a.sf_)
                return 2;
            if (a.$sf)
                return 3;
            if (a.inGptIF)
                return 4;
            if (a.inDapIF)
                return 5
        }
        return 1
    }
    ;function Jf(a, b, c=0) {
        0 < a.g.size || ao(a);
        c = Math.min(Math.max(0, c), 9);
        const d = a.g.get(c);
        d ? d.push(b) : a.g.set(c, [b])
    }
    function bo(a, b, c, d) {
        Oc(b, c, d);
        Tj(a, ()=>Pc(b, c, d))
    }
    function co(a, b) {
        1 !== a.h && (a.h = 1,
        0 < a.g.size && eo(a, b))
    }
    function ao(a) {
        a.l.document.visibilityState ? bo(a, a.l.document, "visibilitychange", b=>{
            "hidden" === a.l.document.visibilityState && co(a, b);
            "visible" === a.l.document.visibilityState && (a.h = 0)
        }
        ) : "onpagehide"in a.l ? (bo(a, a.l, "pagehide", b=>{
            co(a, b)
        }
        ),
        bo(a, a.l, "pageshow", ()=>{
            a.h = 0
        }
        )) : bo(a, a.l, "beforeunload", b=>{
            co(a, b)
        }
        )
    }
    function eo(a, b) {
        for (let c = 9; 0 <= c; c--)
            a.g.get(c)?.forEach(d=>{
                d(b)
            }
            )
    }
    var fo = class extends Sj {
        constructor(a) {
            super();
            this.l = a;
            this.h = 0;
            this.g = new Map
        }
    }
    ;
    async function go(a, b) {
        var c = 10;
        return 0 >= c ? Promise.reject(Error(`wfc bad input ${c} ${200}`)) : b() ? Promise.resolve() : new Promise((d,e)=>{
            const f = a.setInterval(()=>{
                --c ? b() && (a.clearInterval(f),
                d()) : (a.clearInterval(f),
                e(Error(`wfc timed out ${c}`)))
            }
            , 200)
        }
        )
    }
    ;function ho(a) {
        const b = a.g.pc;
        return null !== b && 0 !== b ? b : a.g.pc = Hd(a.l)
    }
    function io(a) {
        const b = a.g.wpc;
        return null !== b && "" !== b ? b : a.g.wpc = Lm(a.l)
    }
    function jo(a, b) {
        var c = new bf;
        var d = ho(a);
        c = wc(c, 1, d);
        d = io(a);
        c = yc(c, 2, d);
        c = wc(c, 3, a.g.sd);
        return wc(c, 7, Math.round(b || a.l.performance.now()))
    }
    async function ko(a) {
        await go(a.l, ()=>!(!ho(a) || !io(a)))
    }
    function lo(a) {
        var b = P(mo);
        if (b.i) {
            var c = b.A;
            a(c);
            b.g.psi = c.toJSON()
        }
    }
    function no(a) {
        Q(lh) && Jf(a.j, ()=>{
            var b = jo(a);
            b = pc(b, 12, cf, a.C);
            a.i && !a.g.le.includes(3) && (a.g.le.push(3),
            Ff(a.h, b))
        }
        , 9)
    }
    function oo(a) {
        const b = new Ye;
        Q(jh) ? yc(b, 1, a.s) : yc(b, 1, a.l?.document?.URL);
        Jf(a.j, ()=>{
            oc(b, 2, a.A);
            Q(kh) && wc(b, 3, a.g.tar);
            var c = a.h;
            var d = jo(a);
            d = pc(d, 8, cf, b);
            Ff(c, d)
        }
        , 9)
    }
    async function po(a) {
        var b = P(mo);
        if (b.i && !b.g.le.includes(1)) {
            b.g.le.push(1);
            var c = b.l.performance.now();
            await ko(b);
            var d = new We;
            a = C(d, 5, ub(a), !1);
            d = new Ve;
            d = wc(d, 1, Vh(b.l).scrollWidth);
            d = wc(d, 2, Vh(b.l).scrollHeight);
            a = oc(a, 2, d);
            d = new Ve;
            var e = Wh(b.l);
            d = wc(d, 1, e);
            d = wc(d, 2, Vh(b.l).clientHeight);
            a = oc(a, 1, d);
            Q(jh) ? yc(a, 4, b.s) : yc(a, 4, b.l?.document?.URL);
            d = $n(b.l);
            0 !== d && (e = new Ue,
            d = y(e, 1, xb(d)),
            oc(a, 3, d));
            d = b.h;
            c = jo(b, c);
            c = pc(c, 4, cf, a);
            Ff(d, c);
            no(b);
            oo(b)
        }
    }
    async function qo(a, b, c) {
        if (a.i && c.length && !a.g.lgdp.includes(Number(b))) {
            a.g.lgdp.push(Number(b));
            var d = a.l.performance.now();
            await ko(a);
            var e = a.h;
            a = jo(a, d);
            d = new Te;
            b = C(d, 1, xb(b), 0);
            c = hc(b, 2, c, zb);
            c = pc(a, 9, cf, c);
            Ff(e, c)
        }
    }
    async function ro(a, b) {
        await ko(a);
        var c = a.h;
        a = jo(a);
        a = wc(a, 3, 1);
        b = pc(a, 10, cf, b);
        Ff(c, b)
    }
    var mo = class {
        constructor(a, b) {
            this.l = Xd() || window;
            this.j = b ?? new fo(this.l);
            this.h = a ?? new Lf(2,"m202402080301",100,100,!0,this.j);
            this.g = Lj(Ij(), 33, ()=>{
                const c = Rc(hh);
                return {
                    sd: c,
                    ssp: 0 < c && td() < 1 / c,
                    pc: null,
                    wpc: null,
                    cu: null,
                    le: [],
                    lgdp: [],
                    psi: null,
                    tar: 0,
                    cc: null
                }
            }
            )
        }
        get i() {
            return this.g.ssp
        }
        get s() {
            return this.g.cu
        }
        set s(a) {
            this.g.cu = a
        }
        get A() {
            return jj(1178, ()=>zc(Xe, Ub(this.g.psi || []))) || new Xe
        }
        get C() {
            return jj(1227, ()=>zc(Ze, Ub(this.g.cc || []))) || new Ze
        }
    }
    ;
    function so() {
        var a = window;
        return "on" === p.google_adtest || "on" === p.google_adbreak_test || a.location.host.endsWith("h5games.usercontent.goog") ? a.document.querySelector('meta[name="h5-games-eids"]')?.getAttribute("content")?.split(",").map(b=>Math.floor(Number(b))).filter(b=>!isNaN(b) && 0 < b) || [] : []
    }
    ;function to(a, b) {
        return a instanceof HTMLScriptElement && b.test(a.src) ? 0 : 1
    }
    function uo(a) {
        var b = S.document;
        if (b.currentScript)
            return to(b.currentScript, a);
        for (const c of b.scripts)
            if (0 === to(c, a))
                return 0;
        return 1
    }
    ;function vo(a, b) {
        return {
            [3]: {
                [55]: ()=>0 === a,
                [23]: c=>Pl(S, Number(c)),
                [24]: c=>Sl(Number(c)),
                [61]: ()=>J(b, 6),
                [63]: ()=>J(b, 6) || ".google.ch" === L(b, 8)
            },
            [4]: {},
            [5]: {
                [6]: ()=>L(b, 15)
            }
        }
    }
    ;function wo(a=p) {
        return a.ggeac || (a.ggeac = {})
    }
    ;function xo(a, b=document) {
        return !!b.featurePolicy?.features().includes(a)
    }
    function yo(a, b=document) {
        return !!b.featurePolicy?.allowedFeatures().includes(a)
    }
    ;function zo(a, b) {
        try {
            const d = a.split(".");
            a = p;
            let e = 0, f;
            for (; null != a && e < d.length; e++)
                f = a,
                a = a[d[e]],
                "function" === typeof a && (a = f[d[e]]());
            var c = a;
            if (typeof c === b)
                return c
        } catch {}
    }
    var Ao = {
        [3]: {
            [8]: a=>{
                try {
                    return null != ba(a)
                } catch {}
            }
            ,
            [9]: a=>{
                try {
                    var b = ba(a)
                } catch {
                    return
                }
                if (a = "function" === typeof b)
                    b = b && b.toString && b.toString(),
                    a = "string" === typeof b && -1 != b.indexOf("[native code]");
                return a
            }
            ,
            [10]: ()=>window === window.top,
            [6]: a=>Na(P(pg).g(), Number(a)),
            [27]: a=>{
                a = zo(a, "boolean");
                return void 0 !== a ? a : void 0
            }
            ,
            [60]: a=>{
                try {
                    return !!p.document.querySelector(a)
                } catch {}
            }
            ,
            [69]: a=>xo(a, p.document),
            [70]: a=>yo(a, p.document)
        },
        [4]: {
            [3]: ()=>Ad(),
            [6]: a=>{
                a = zo(a, "number");
                return void 0 !== a ? a : void 0
            }
        },
        [5]: {
            [2]: ()=>window.location.href,
            [3]: ()=>{
                try {
                    return window.top.location.hash
                } catch {
                    return ""
                }
            }
            ,
            [4]: a=>{
                a = zo(a, "string");
                return void 0 !== a ? a : void 0
            }
        }
    };
    function Bo(a, b) {
        const c = new Map;
        for (const [f,g] of a[1].entries()) {
            var d = f
              , e = g;
            const {ib: h, eb: k, fb: m} = e[e.length - 1];
            c.set(d, h + k * m)
        }
        for (const f of b)
            for (const g of E(f, yl, 2))
                if (0 !== E(g, xl, 2).length) {
                    b = sc(Cb(Yb(g, 8)));
                    M(g, 4) && !M(g, 13) && (b = c.get(M(g, 4)) ?? 0,
                    d = sc(Cb(Yb(g, 1))) * E(g, xl, 2).length,
                    c.set(M(g, 4), b + d));
                    d = [];
                    for (e = 0; e < E(g, xl, 2).length; e++) {
                        const h = {
                            ib: b,
                            eb: sc(Cb(Yb(g, 1))),
                            fb: E(g, xl, 2).length,
                            Bb: e,
                            Xa: M(f, 1),
                            qa: g,
                            O: E(g, xl, 2)[e]
                        };
                        d.push(h)
                    }
                    Co(a[2], M(g, 10), d) || Co(a[1], M(g, 4), d) || Co(a[0], E(g, xl, 2)[0].getId(), d)
                }
        return a
    }
    function Co(a, b, c) {
        if (!b)
            return !1;
        a.has(b) || a.set(b, []);
        a.get(b).push(...c);
        return !0
    }
    ;function Do(a=td()) {
        return b=>vd(`${b} + ${a}`) % 1E3
    }
    ;const Eo = [12, 13, 20];
    function Fo(a, b, c) {
        a.g[c] || (a.g[c] = []);
        a = a.g[c];
        a.includes(b) || a.push(b)
    }
    function Go(a, b, c, d) {
        const e = [];
        var f;
        if (f = 9 !== b)
            a.j[b] ? f = !0 : (a.j[b] = !0,
            f = !1);
        if (f)
            return Nf(a.M, b, c, e, [], 4),
            e;
        f = Eo.includes(b);
        const g = []
          , h = P(Rf).I
          , k = [];
        for (const r of [0, 1, 2])
            for (const [v,w] of a.ka[r].entries()) {
                var m = v
                  , l = w;
                const A = new hf;
                var n = l.filter(z=>z.Xa === b && !!a.h[z.O.getId()] && Je(D(z.qa, Ce, 3), h) && Je(D(z.O, Ce, 3), h));
                if (n.length)
                    for (const z of n)
                        k.push(z.O);
                else if (!a.za && (2 === r ? (n = d[1],
                ic(A, 2, jf, xb(m))) : n = d[0],
                m = n?.(String(m)) ?? (2 === r && 1 === M(l[0].qa, 11) ? void 0 : d[0](String(m))),
                void 0 !== m)) {
                    for (const z of l)
                        if (z.Xa === b) {
                            l = m - z.ib;
                            n = z.eb;
                            const G = z.fb
                              , K = z.Bb;
                            0 <= l && l < n * G && l % G === K && Je(D(z.qa, Ce, 3), h) && Je(D(z.O, Ce, 3), h) && (l = M(z.qa, 13),
                            0 !== l && void 0 !== l && (n = a.i[String(l)],
                            void 0 !== n && n !== z.O.getId() ? Pf(a.M, a.i[String(l)], z.O.getId(), l) : a.i[String(l)] = z.O.getId()),
                            k.push(z.O))
                        }
                    0 !== lc(A, jf) && (C(A, 3, Ab(m), 0),
                    g.push(A))
                }
            }
        for (const r of k)
            d = r.getId(),
            e.push(d),
            Fo(a, d, f ? 4 : c),
            gg(E(r, Me, 2), f ? ig() : [c], a.M, d);
        Nf(a.M, b, c, e, g, 1);
        return e
    }
    function Ho(a, b) {
        b = b.map(c=>new zl(c)).filter(c=>!Eo.includes(M(c, 1)));
        a.ka = Bo(a.ka, b)
    }
    function Io(a, b) {
        T(1, c=>{
            a.h[c] = !0
        }
        , b);
        T(2, (c,d,e)=>Go(a, c, d, e), b);
        T(3, c=>(a.g[c] || []).concat(a.g[4]), b);
        T(12, c=>void Ho(a, c), b);
        T(16, (c,d)=>void Fo(a, c, d), b)
    }
    var Jo = class {
        constructor(a, b, c, {za: d=!1, xc: e=[]}={}) {
            this.ka = a;
            this.M = c;
            this.j = {};
            this.za = d;
            this.g = {
                [b]: [],
                [4]: []
            };
            this.h = {};
            this.i = {};
            if (a = he()) {
                a = a.split(",") || [];
                for (const f of a)
                    (a = Number(f)) && (this.h[a] = !0)
            }
            for (const f of e)
                this.h[f] = !0
        }
    }
    ;
    function Ko(a, b) {
        a.g = kg(14, b, ()=>{}
        )
    }
    class Lo {
        constructor() {
            this.g = ()=>{}
        }
    }
    function Mo(a) {
        P(Lo).g(a)
    }
    ;function No({sb: a, I: b, config: c, nb: d=wo(), ob: e=0, M: f=new Qf(D(a, Al, 5)?.g() ?? 0,D(a, Al, 5)?.h() ?? 0,D(a, Al, 5)?.i() ?? !1), ka: g=Bo({
        [0]: new Map,
        [1]: new Map,
        [2]: new Map
    }, E(a, zl, 2))}) {
        d.hasOwnProperty("init-done") ? (kg(12, d, ()=>{}
        )(E(a, zl, 2).map(h=>h.toJSON())),
        kg(13, d, ()=>{}
        )(E(a, Me, 1).map(h=>h.toJSON()), e),
        b && kg(14, d, ()=>{}
        )(b),
        Oo(e, d)) : (Io(new Jo(g,e,f,c), d),
        lg(d),
        mg(d),
        ng(d),
        Oo(e, d),
        gg(E(a, Me, 1), [e], f, void 0, !0),
        Sf = Sf || !(!c || !c.wb),
        Mo(Ao),
        b && Mo(b))
    }
    function Oo(a, b=wo()) {
        og(P(pg), b, a);
        Po(b, a);
        Ko(P(Lo), b);
        P(Qc).s()
    }
    function Po(a, b) {
        const c = P(Qc);
        c.i = (d,e)=>kg(5, a, ()=>!1)(d, e, b);
        c.j = (d,e)=>kg(6, a, ()=>0)(d, e, b);
        c.g = (d,e)=>kg(7, a, ()=>"")(d, e, b);
        c.h = (d,e)=>kg(8, a, ()=>[])(d, e, b);
        c.s = ()=>{
            kg(15, a, ()=>{}
            )(b)
        }
    }
    ;function Qo(a, b) {
        b = {
            [0]: Do(Hd(b).toString())
        };
        b = P(pg).j(a, b);
        tg.Y(1085, qo(P(mo), a, b))
    }
    function Ro(a, b, c) {
        var d = X(a);
        if (d.plle)
            Oo(1, wo(a));
        else {
            d.plle = !0;
            d = D(b, Bl, 12);
            var e = J(b, 9);
            No({
                sb: d,
                I: vo(c, b),
                config: {
                    za: e && !!a.google_disable_experiments,
                    wb: e
                },
                nb: wo(a),
                ob: 1
            });
            if (c = L(b, 15))
                c = Number(c),
                P(pg).i(c);
            for (const f of cc(b, 19, Bb))
                P(pg).h(f);
            Qo(12, a);
            Qo(10, a);
            a = pd(a) || a;
            nm(a.location, "google_mc_lab") && P(pg).h(44738307);
            nm(a.location, "google_auto_storify_swipeable") && P(pg).h(44773747);
            nm(a.location, "google_auto_storify_scrollable") && P(pg).h(44773746)
        }
    }
    ;function So(a) {
        W.Da(b=>{
            b.shv = String(a);
            b.mjsv = Gm({
                va: "m202402080301",
                Ca: a
            });
            const c = P(pg).g()
              , d = so();
            b.eid = c.concat(d).join(",")
        }
        )
    }
    ;function To(a) {
        var b = W;
        try {
            return Ac(a, Ae),
            new Dl(JSON.parse(a))
        } catch (c) {
            b.J(838, c instanceof Error ? c : Error(String(c)), void 0, d=>{
                d.jspb = String(a)
            }
            )
        }
        return new Dl
    }
    ;function Uo(a) {
        if (a.g)
            return a.g;
        a.A && a.A(a.h) ? a.g = a.h : a.g = zd(a.h, a.D);
        return a.g ?? null
    }
    var Vo = class extends Sj {
        constructor(a, b, c) {
            super();
            this.D = b;
            this.A = c;
            this.C = new Map;
            this.j = new Map;
            this.h = a
        }
    }
    ;
    const Wo = (a,b)=>{
        (0,
        a.__uspapi)("getUSPData", 1, (c,d)=>{
            b.ca({
                wa: c ?? void 0,
                rb: d ? void 0 : 2
            })
        }
        )
    }
      , Xo = {
        yb: a=>a.ca,
        zb: (a,b)=>({
            __uspapiCall: {
                callId: b,
                command: "getUSPData",
                version: 1
            }
        }),
        Cb: (a,b)=>{
            b = b.__uspapiReturn;
            a({
                wa: b.returnValue ?? void 0,
                rb: b.success ? void 0 : 2
            })
        }
    };
    var Yo = class extends Sj {
        constructor() {
            var a = S;
            super();
            this.timeoutMs = {}.timeoutMs ?? 500;
            this.caller = new Vo(a,"__uspapiLocator",b=>"function" === typeof b.__uspapi);
            this.caller.C.set("getDataWithCallback", Wo);
            this.caller.j.set("getDataWithCallback", Xo)
        }
    }
    ;
    var Zo = Ec(class extends N {
    }
    );
    const $o = (a,b)=>{
        const c = {
            cb: d=>{
                d = Zo(d);
                b.ca({
                    wa: d
                })
            }
        };
        b.spsp && (c.spsp = b.spsp);
        a = a.googlefc || (a.googlefc = {});
        a.__fci = a.__fci || [];
        a.__fci.push(b.command, c)
    }
      , ap = {
        yb: a=>a.ca,
        zb: (a,b)=>({
            __fciCall: {
                callId: b,
                command: a.command,
                spsp: a.spsp || void 0
            }
        }),
        Cb: (a,b)=>{
            a({
                wa: b
            })
        }
    };
    var bp = class extends Sj {
        constructor() {
            var a = S;
            super();
            this.g = this.h = !1;
            this.caller = new Vo(a,"googlefcPresent");
            this.caller.C.set("getDataWithCallback", $o);
            this.caller.j.set("getDataWithCallback", ap)
        }
    }
    ;
    var cp = a=>{
        Oc(window, "message", b=>{
            let c;
            try {
                c = JSON.parse(b.data)
            } catch (d) {
                return
            }
            !c || "sc-cnf" !== c.googMsgType || a(c, b)
        }
        )
    }
    ;
    function dp(a, b) {
        return null == b ? `&${a}=null` : `&${a}=${Math.floor(b)}`
    }
    function ep(a, b) {
        return `&${a}=${b.toFixed(3)}`
    }
    function fp() {
        const a = new Set
          , b = xj();
        try {
            if (!b)
                return a;
            const c = b.pubads();
            for (const d of c.getSlots())
                a.add(d.getSlotId().getDomId())
        } catch {}
        return a
    }
    function gp(a) {
        a = a.id;
        return null != a && (fp().has(a) || a.startsWith("google_ads_iframe_") || a.startsWith("aswift"))
    }
    function hp(a, b, c) {
        if (!a.sources)
            return !1;
        switch (ip(a)) {
        case 2:
            const d = jp(a);
            if (d)
                return c.some(f=>kp(d, f));
            break;
        case 1:
            const e = lp(a);
            if (e)
                return b.some(f=>kp(e, f))
        }
        return !1
    }
    function ip(a) {
        if (!a.sources)
            return 0;
        a = a.sources.filter(b=>b.previousRect && b.currentRect);
        if (1 <= a.length) {
            a = a[0];
            if (a.previousRect.top < a.currentRect.top)
                return 2;
            if (a.previousRect.top > a.currentRect.top)
                return 1
        }
        return 0
    }
    function lp(a) {
        return mp(a, b=>b.currentRect)
    }
    function jp(a) {
        return mp(a, b=>b.previousRect)
    }
    function mp(a, b) {
        return a.sources.reduce((c,d)=>{
            d = b(d);
            return c ? d && 0 !== d.width * d.height ? d.top < c.top ? d : c : c : d
        }
        , null)
    }
    function kp(a, b) {
        const c = Math.min(a.right, b.right) - Math.max(a.left, b.left);
        a = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
        return 0 >= c || 0 >= a ? !1 : 50 <= 100 * c * a / ((b.right - b.left) * (b.bottom - b.top))
    }
    function np() {
        const a = Array.from(document.getElementsByTagName("iframe")).filter(gp)
          , b = [...fp()].map(c=>document.getElementById(c)).filter(c=>null !== c);
        op = window.scrollX;
        pp = window.scrollY;
        return qp = [...a, ...b].map(c=>c.getBoundingClientRect())
    }
    function rp() {
        var a = new sp;
        if (Q(Kc)) {
            var b = window;
            if (!b.google_plmetrics && window.PerformanceObserver) {
                b.google_plmetrics = !0;
                b = ["layout-shift", "largest-contentful-paint", "first-input", "longtask"];
                a.kb.qb && b.push("event");
                for (const c of b)
                    b = {
                        type: c,
                        buffered: !0
                    },
                    "event" === c && (b.durationThreshold = 40),
                    tp(a).observe(b);
                up(a)
            }
        }
    }
    function vp(a, b) {
        const c = op !== window.scrollX || pp !== window.scrollY ? [] : qp
          , d = np();
        for (const e of b.getEntries())
            switch (b = e.entryType,
            b) {
            case "layout-shift":
                wp(a, e, c, d);
                break;
            case "largest-contentful-paint":
                b = e;
                a.Ka = Math.floor(b.renderTime || b.loadTime);
                a.Ja = b.size;
                break;
            case "first-input":
                b = e;
                a.Ga = Number((b.processingStart - b.startTime).toFixed(3));
                a.Ha = !0;
                a.g.some(f=>f.entries.some(g=>e.duration === g.duration && e.startTime === g.startTime)) || xp(a, e);
                break;
            case "longtask":
                b = Math.max(0, e.duration - 50);
                a.A += b;
                a.H = Math.max(a.H, b);
                a.sa += 1;
                break;
            case "event":
                xp(a, e);
                break;
            default:
                md(b, void 0)
            }
    }
    function tp(a) {
        a.M || (a.M = new PerformanceObserver(Ri(640, b=>{
            vp(a, b)
        }
        )));
        return a.M
    }
    function up(a) {
        const b = Ri(641, ()=>{
            var d = document;
            2 === (d.prerendering ? 3 : {
                visible: 1,
                hidden: 2,
                prerender: 3,
                preview: 4,
                unloaded: 5
            }[d.visibilityState || d.webkitVisibilityState || d.mozVisibilityState || ""] || 0) && yp(a)
        }
        )
          , c = Ri(641, ()=>void yp(a));
        document.addEventListener("visibilitychange", b);
        document.addEventListener("pagehide", c);
        a.Fa = ()=>{
            document.removeEventListener("visibilitychange", b);
            document.removeEventListener("pagehide", c);
            tp(a).disconnect()
        }
    }
    function yp(a) {
        if (!a.Na) {
            a.Na = !0;
            tp(a).takeRecords();
            var b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=plmetrics";
            window.LayoutShift && (b += ep("cls", a.C),
            b += ep("mls", a.X),
            b += dp("nls", a.ra),
            window.LayoutShiftAttribution && (b += ep("cas", a.s),
            b += dp("nas", a.Ma),
            b += ep("was", a.Ra)),
            b += ep("wls", a.ta),
            b += ep("tls", a.Qa));
            window.LargestContentfulPaint && (b += dp("lcp", a.Ka),
            b += dp("lcps", a.Ja));
            window.PerformanceEventTiming && a.Ha && (b += dp("fid", a.Ga));
            window.PerformanceLongTaskTiming && (b += dp("cbt", a.A),
            b += dp("mbt", a.H),
            b += dp("nlt", a.sa));
            let d = 0;
            for (var c of document.getElementsByTagName("iframe"))
                gp(c) && d++;
            b += dp("nif", d);
            b += dp("ifi", Zd(window));
            c = P(pg).g();
            b += `&${"eid"}=${encodeURIComponent(c.join())}`;
            b += `&${"top"}=${p === p.top ? 1 : 0}`;
            b += a.Pa ? `&${"qqid"}=${encodeURIComponent(a.Pa)}` : dp("pvsid", Hd(p));
            window.googletag && (b += "&gpt=1");
            c = Math.min(a.g.length - 1, Math.floor((a.M ? a.Ia : performance.interactionCount || 0) / 50));
            0 <= c && (c = a.g[c].latency,
            0 <= c && (b += dp("inp", c)));
            window.fetch(b, {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            });
            a.Fa()
        }
    }
    function wp(a, b, c, d) {
        if (!b.hadRecentInput) {
            a.C += Number(b.value);
            Number(b.value) > a.X && (a.X = Number(b.value));
            a.ra += 1;
            if (c = hp(b, c, d))
                a.s += b.value,
                a.Ma++;
            if (5E3 < b.startTime - a.La || 1E3 < b.startTime - a.Oa)
                a.La = b.startTime,
                a.h = 0,
                a.i = 0;
            a.Oa = b.startTime;
            a.h += b.value;
            c && (a.i += b.value);
            a.h > a.ta && (a.ta = a.h,
            a.Ra = a.i,
            a.Qa = b.startTime + b.duration)
        }
    }
    function xp(a, b) {
        zp(a, b);
        const c = a.g[a.g.length - 1]
          , d = a.D[b.interactionId];
        if (d || 10 > a.g.length || b.duration > c.latency)
            d ? (d.entries.push(b),
            d.latency = Math.max(d.latency, b.duration)) : (b = {
                id: b.interactionId,
                latency: b.duration,
                entries: [b]
            },
            a.D[b.id] = b,
            a.g.push(b)),
            a.g.sort((e,f)=>f.latency - e.latency),
            a.g.splice(10).forEach(e=>{
                delete a.D[e.id]
            }
            )
    }
    function zp(a, b) {
        b.interactionId && (a.ba = Math.min(a.ba, b.interactionId),
        a.j = Math.max(a.j, b.interactionId),
        a.Ia = a.j ? (a.j - a.ba) / 7 + 1 : 0)
    }
    var sp = class {
        constructor() {
            var a = {
                qb: Q(Kh)
            };
            this.i = this.h = this.ra = this.X = this.C = 0;
            this.Oa = this.La = Number.NEGATIVE_INFINITY;
            this.g = [];
            this.D = {};
            this.Ia = 0;
            this.ba = Infinity;
            this.Ga = this.Ja = this.Ka = this.Ma = this.Ra = this.s = this.Qa = this.ta = this.j = 0;
            this.Ha = !1;
            this.sa = this.H = this.A = 0;
            this.M = null;
            this.Na = !1;
            this.Fa = ()=>{}
            ;
            const b = document.querySelector("[data-google-query-id]");
            this.Pa = b ? b.getAttribute("data-google-query-id") : null;
            this.kb = a
        }
    }
    , op, pp, qp = [];
    let Ap = null;
    const Bp = []
      , Cp = new Map;
    let Dp = -1;
    function Ep(a) {
        return qi.test(a.className) && "done" !== a.dataset.adsbygoogleStatus
    }
    function Fp(a, b, c) {
        a.dataset.adsbygoogleStatus = "done";
        Gp(a, b, c)
    }
    function Gp(a, b, c) {
        var d = window;
        d.google_spfd || (d.google_spfd = Zn);
        var e = b.google_reactive_ads_config;
        e || Zn(a, b, d, c);
        cn(d, b);
        if (!Hp(a, b, d)) {
            if (e) {
                e = e.page_level_pubvars || {};
                if (X(S).page_contains_reactive_tag && !X(S).allow_second_reactive_tag) {
                    if (e.pltais) {
                        Il(!1);
                        return
                    }
                    throw new V("Only one 'enable_page_level_ads' allowed per page.");
                }
                X(S).page_contains_reactive_tag = !0;
                Il(7 === e.google_pgb_reactive)
            }
            b.google_unique_id = Yd(d);
            ud(Hm, (f,g)=>{
                b[g] = b[g] || d[g]
            }
            );
            "sd" !== b.google_loader_used && (b.google_loader_used = "aa");
            b.google_reactive_tag_first = 1 === (X(S).first_tag_on_page || 0);
            jj(164, ()=>{
                jn(d, b, a, c)
            }
            )
        }
    }
    function Hp(a, b, c) {
        var d = b.google_reactive_ads_config
          , e = "string" === typeof a.className && RegExp("(\\W|^)adsbygoogle-noablate(\\W|$)").test(a.className)
          , f = Gl(c);
        if (f && f.Sa && "on" !== b.google_adtest && !e) {
            e = $h(a, c);
            const g = Vh(c).clientHeight;
            e = 0 == g ? null : e / g;
            if (!f.ua || f.ua && (e || 0) >= f.ua)
                return a.className += " adsbygoogle-ablated-ad-slot",
                c = c.google_sv_map = c.google_sv_map || {},
                d = da(a),
                b.google_element_uid = d,
                c[b.google_element_uid] = b,
                a.setAttribute("google_element_uid", String(d)),
                "slot" === f.Jb && (null !== yd(a.getAttribute("width")) && a.setAttribute("width", "0"),
                null !== yd(a.getAttribute("height")) && a.setAttribute("height", "0"),
                a.style.width = "0px",
                a.style.height = "0px"),
                !0
        }
        if ((f = sd(a, c)) && "none" === f.display && !("on" === b.google_adtest || 0 < b.google_reactive_ad_format || d))
            return c.document.createComment && a.appendChild(c.document.createComment("No ad requested because of display:none on the adsbygoogle tag")),
            !0;
        a = null == b.google_pgb_reactive || 3 === b.google_pgb_reactive;
        return 1 !== b.google_reactive_ad_format && 8 !== b.google_reactive_ad_format || !a ? !1 : (p.console && p.console.warn("Adsbygoogle tag with data-reactive-ad-format=" + String(b.google_reactive_ad_format) + " is deprecated. Check out page-level ads at https://www.google.com/adsense"),
        !0)
    }
    function Ip(a) {
        var b = document.getElementsByTagName("INS");
        for (let d = 0, e = b[d]; d < b.length; e = b[++d]) {
            var c = e;
            if (Ep(c) && "reserved" !== c.dataset.adsbygoogleStatus && (!a || e.id === a))
                return e
        }
        return null
    }
    function Jp(a, b, c) {
        if (a && "shift"in a) {
            lo(e=>{
                uc(mc(e), 2) || (e = mc(e),
                xc(e, 2))
            }
            );
            for (var d = 20; 0 < a.length && 0 < d; ) {
                try {
                    Kp(a.shift(), b, c)
                } catch (e) {
                    setTimeout(()=>{
                        throw e;
                    }
                    )
                }
                --d
            }
        }
    }
    function Lp() {
        const a = rd("INS");
        a.className = "adsbygoogle";
        a.className += " adsbygoogle-noablate";
        Bd(a);
        return a
    }
    function Mp(a, b) {
        const c = {}
          , d = Zl(a.google_ad_client, b);
        ud(Uh, (g,h)=>{
            !1 === a.enable_page_level_ads ? c[h] = !1 : a.hasOwnProperty(h) ? c[h] = a[h] : d.includes(g) && (c[h] = !1)
        }
        );
        ca(a.enable_page_level_ads) && (c.page_level_pubvars = a.enable_page_level_ads);
        const e = Lp();
        Id.body.appendChild(e);
        const f = {
            google_reactive_ads_config: c,
            google_ad_client: a.google_ad_client
        };
        f.google_pause_ad_requests = !!X(S).pause_ad_requests;
        Fp(e, f, b);
        lo(g=>{
            uc(mc(g), 6) || (g = mc(g),
            xc(g, 6))
        }
        )
    }
    function Np(a, b) {
        wm(p).wasPlaTagProcessed = !0;
        const c = ()=>{
            Mp(a, b)
        }
          , d = p.document;
        if (d.body || "complete" === d.readyState || "interactive" === d.readyState)
            Mp(a, b);
        else {
            const e = Nc(W.oa(191, c));
            Oc(d, "DOMContentLoaded", e);
            Q(sh) && null == p.MutationObserver || (new p.MutationObserver((f,g)=>{
                d.body && (e(),
                g.disconnect())
            }
            )).observe(d, {
                childList: !0,
                subtree: !0
            })
        }
    }
    function Kp(a, b, c) {
        const d = {};
        jj(165, ()=>{
            Op(a, d, b, c)
        }
        , e=>{
            e.client = e.client || d.google_ad_client || a.google_ad_client;
            e.slotname = e.slotname || d.google_ad_slot;
            e.tag_origin = e.tag_origin || d.google_tag_origin
        }
        )
    }
    function Pp(a) {
        delete a.google_checked_head;
        ud(a, (b,c)=>{
            pi[c] || (delete a[c],
            b = c.replace("google", "data").replace(/_/g, "-"),
            p.console.warn(`AdSense head tag doesn't support ${b} attribute.`))
        }
        )
    }
    function Qp(a, b) {
        var c = S.document.querySelector('script[src*="/pagead/js/adsbygoogle.js?client="]:not([data-checked-head])') || S.document.querySelector('script[src*="/pagead/js/adsbygoogle.js"][data-ad-client]:not([data-checked-head])');
        if (c) {
            c.setAttribute("data-checked-head", "true");
            var d = X(window);
            if (d.head_tag_slot_vars)
                Rp(c);
            else {
                lo(g=>{
                    g = mc(g);
                    C(g, 7, ub(!0), !1)
                }
                );
                var e = {};
                Xn(c, e);
                Pp(e);
                var f = Vc(e);
                d.head_tag_slot_vars = f;
                c = {
                    google_ad_client: e.google_ad_client,
                    enable_page_level_ads: e
                };
                "bottom" === e.google_overlays && (c.overlays = {
                    bottom: !0
                });
                delete e.google_overlays;
                S.adsbygoogle || (S.adsbygoogle = []);
                d = S.adsbygoogle;
                d.loaded ? d.push(c) : d.splice && d.splice(0, 0, c);
                e.google_adbreak_test || b.h()?.h() ? Sp(f, a) : cp(()=>{
                    Sp(f, a)
                }
                )
            }
        }
    }
    function Rp(a) {
        const b = X(window).head_tag_slot_vars
          , c = a.getAttribute("src") || "";
        if ((a = ld(c, "client") || a.getAttribute("data-ad-client") || "") && a !== b.google_ad_client)
            throw new V("Warning: Do not add multiple property codes with AdSense tag to avoid seeing unexpected behavior. These codes were found on the page " + a + ", " + b.google_ad_client);
    }
    function Tp(a) {
        if ("object" === typeof a && null != a) {
            if ("string" === typeof a.type)
                return 2;
            if ("string" === typeof a.sound || "string" === typeof a.preloadAdBreaks)
                return 3
        }
        return 0
    }
    function Op(a, b, c, d) {
        if (null == a)
            throw new V("push() called with no parameters.");
        lo(f=>{
            uc(mc(f), 3) || (f = mc(f),
            xc(f, 3))
        }
        );
        d.i() && Up(a, d.g().g(), L(d, 2));
        var e = Tp(a);
        if (0 !== e)
            if (d = Jl(),
            d.first_slotcar_request_processing_time || (d.first_slotcar_request_processing_time = Date.now(),
            d.adsbygoogle_execution_start_time = oa),
            null == Ap)
                Vp(a),
                Bp.push(a);
            else if (3 === e) {
                const f = Ap;
                jj(787, ()=>{
                    f.handleAdConfig(a)
                }
                )
            } else
                lj(730, Ap.handleAdBreak(a));
        else {
            oa = (new Date).getTime();
            dn(c, d, Wp(a));
            Xp();
            a: {
                if (void 0 != a.enable_page_level_ads) {
                    if ("string" === typeof a.google_ad_client) {
                        e = !0;
                        break a
                    }
                    throw new V("'google_ad_client' is missing from the tag config.");
                }
                e = !1
            }
            if (e)
                lo(f=>{
                    uc(mc(f), 4) || (f = mc(f),
                    xc(f, 4))
                }
                ),
                Yp(a, d);
            else if ((e = a.params) && ud(e, (f,g)=>{
                b[g] = f
            }
            ),
            "js" === b.google_ad_output)
                console.warn("Ads with google_ad_output='js' have been deprecated and no longer work. Contact your AdSense account manager or switch to standard AdSense ads.");
            else {
                e = Zp(a.element);
                Xn(e, b);
                c = X(p).head_tag_slot_vars || {};
                ud(c, (f,g)=>{
                    b.hasOwnProperty(g) || (b[g] = f)
                }
                );
                if (e.hasAttribute("data-require-head") && !X(p).head_tag_slot_vars)
                    throw new V("AdSense head tag is missing. AdSense body tags don't work without the head tag. You can copy the head tag from your account on https://adsense.com.");
                if (!b.google_ad_client)
                    throw new V("Ad client is missing from the slot.");
                if (c = 0 === (X(S).first_tag_on_page || 0) && Am(b))
                    lo(f=>{
                        uc(mc(f), 5) || (f = mc(f),
                        xc(f, 5))
                    }
                    ),
                    $p(c);
                0 === (X(S).first_tag_on_page || 0) && (X(S).first_tag_on_page = 2);
                b.google_pause_ad_requests = !!X(S).pause_ad_requests;
                Fp(e, b, d)
            }
        }
    }
    let aq = !1;
    function Up(a, b, c) {
        aq || (aq = !0,
        a = Wp(a) || Lm(S),
        kj("predictive_abg", {
            a_c: a,
            p_c: b.join(),
            b_v: c
        }, .01))
    }
    function Wp(a) {
        return a.google_ad_client ? a.google_ad_client : (a = a.params) && a.google_ad_client ? a.google_ad_client : ""
    }
    function Xp() {
        if (Q(qh)) {
            var a = Gl(S);
            if (!(a = a && a.Sa)) {
                a = S;
                try {
                    var b = a.localStorage
                } catch (c) {
                    b = null
                }
                b = b ? ul(b) : null;
                a = !(b && tl(b) && b)
            }
            a || Hl(S, 1)
        }
    }
    function $p(a) {
        Jd(()=>{
            wm(p).wasPlaTagProcessed || p.adsbygoogle && p.adsbygoogle.push(a)
        }
        )
    }
    function Yp(a, b) {
        0 === (X(S).first_tag_on_page || 0) && (X(S).first_tag_on_page = 1);
        if (a.tag_partner) {
            var c = a.tag_partner;
            const d = X(p);
            d.tag_partners = d.tag_partners || [];
            d.tag_partners.push(c)
        }
        Bm(a, b);
        Np(a, b)
    }
    function Zp(a) {
        if (a) {
            if (!Ep(a) && (a.id ? a = Ip(a.id) : a = null,
            !a))
                throw new V("'element' has already been filled.");
            if (!("innerHTML"in a))
                throw new V("'element' is not a good DOM element.");
        } else if (a = Ip(),
        !a)
            throw new V("All 'ins' elements in the DOM with class=adsbygoogle already have ads in them.");
        return a
    }
    function bq() {
        var a = new bk(S)
          , b = new Yo
          , c = new bp
          , d = S.__cmp ? 1 : 0;
        a = Yj(a) ? 1 : 0;
        b = Uo(b.caller) ? 1 : 0;
        c.h || (c.g = !!Uo(c.caller),
        c.h = !0);
        c = c.g;
        kj("cmpMet", {
            tcfv1: d,
            tcfv2: a,
            usp: b,
            fc: c ? 1 : 0,
            ptt: 9
        }, .001)
    }
    function cq(a) {
        var b = Ij();
        Oj(b, 26, !!Number(a))
    }
    function dq(a) {
        Number(a) ? X(S).pause_ad_requests = !0 : (X(S).pause_ad_requests = !1,
        a = ()=>{
            if (!X(S).pause_ad_requests) {
                var b = {};
                let c;
                "function" === typeof window.CustomEvent ? c = new CustomEvent("adsbygoogle-pub-unpause-ad-requests-event",b) : (c = document.createEvent("CustomEvent"),
                c.initCustomEvent("adsbygoogle-pub-unpause-ad-requests-event", !!b.bubbles, !!b.cancelable, b.detail));
                S.dispatchEvent(c)
            }
        }
        ,
        p.setTimeout(a, 0),
        p.setTimeout(a, 1E3))
    }
    function eq(a) {
        a && a.call && "function" === typeof a && window.setTimeout(a, 0)
    }
    function Sp(a, b) {
        b = vm(2, p, b.Ib).Ta.then(c=>{
            null == Ap && (c.init(a),
            Ap = c,
            fq(c))
        }
        );
        W.Y(723, b);
        b.finally(()=>{
            Bp.length = 0;
            kj("slotcar", {
                event: "api_ld",
                time: Date.now() - oa,
                time_pr: Date.now() - Dp
            });
            Q(Nh) && ro(P(mo), $e(23))
        }
        )
    }
    function fq(a) {
        for (const [c,d] of Cp) {
            var b = c;
            const e = d;
            -1 !== e && (p.clearTimeout(e),
            Cp.delete(b))
        }
        for (b = 0; b < Bp.length; b++) {
            if (Cp.has(b))
                continue;
            const c = Bp[b]
              , d = Tp(c);
            jj(723, ()=>{
                if (3 === d)
                    a.handleAdConfig(c);
                else if (2 === d) {
                    var e = a.handleAdBreakBeforeReady(c);
                    W.Y(730, e)
                }
            }
            )
        }
    }
    function Vp(a) {
        var b = Bp.length;
        if (2 === Tp(a) && "preroll" === a.type && null != a.adBreakDone) {
            var c = a.adBreakDone;
            -1 === Dp && (Dp = Date.now());
            var d = p.setTimeout(()=>{
                try {
                    c({
                        breakType: "preroll",
                        breakName: a.name,
                        breakFormat: "preroll",
                        breakStatus: "timeout"
                    }),
                    Cp.set(b, -1),
                    kj("slotcar", {
                        event: "pr_to",
                        source: "adsbygoogle"
                    }),
                    Q(Nh) && ro(P(mo), $e(22))
                } catch (e) {
                    console.error("[Ad Placement API] adBreakDone callback threw an error:", e instanceof Error ? e : Error(String(e)))
                }
            }
            , 1E3 * Rc(Mh));
            Cp.set(b, d)
        }
    }
    function gq() {
        var a = S.document
          , b = Td`https://googleads.g.doubleclick.net`;
        const c = a.createElement("LINK");
        c.crossOrigin = "";
        a: {
            if (b instanceof Xc)
                c.href = $c(b).toString();
            else {
                if (-1 === nd.indexOf("preconnect"))
                    throw Error('TrustedResourceUrl href attribute required with rel="preconnect"');
                if (b instanceof dd)
                    b = b instanceof dd && b.constructor === dd ? b.g : "type_error:SafeUrl";
                else {
                    c: {
                        try {
                            var d = new URL(b)
                        } catch (e) {
                            d = "https:";
                            break c
                        }
                        d = d.protocol
                    }
                    b = "javascript:" !== d ? b : void 0
                }
                if (void 0 === b)
                    break a;
                c.href = b
            }
            c.rel = "preconnect"
        }
        a.head.appendChild(c)
    }
    ;(function(a, b, c, d=()=>{}
    ) {
        W.hb(mj);
        jj(166, ()=>{
            const e = new Lf(2,a);
            try {
                sb(n=>{
                    var r = new zf;
                    var v = new yf;
                    try {
                        var w = Hd(window);
                        wc(v, 1, w)
                    } catch (K) {}
                    try {
                        var A = P(pg).g();
                        hc(v, 2, A, zb)
                    } catch (K) {}
                    try {
                        yc(v, 3, window.document.URL)
                    } catch (K) {}
                    r = oc(r, 2, v);
                    v = new xf;
                    v = C(v, 1, xb(1191), 0);
                    try {
                        var z = Ae(n?.name) ? n.name : "Unknown error";
                        yc(v, 2, z)
                    } catch (K) {}
                    try {
                        var G = Ae(n?.message) ? n.message : `Caught ${n}`;
                        yc(v, 3, G)
                    } catch (K) {}
                    try {
                        const K = Ae(n?.stack) ? n.stack : Error().stack;
                        K && hc(v, 4, K.split(/\n\s*/), Gb)
                    } catch (K) {}
                    n = oc(r, 1, v);
                    z = new wf;
                    try {
                        yc(z, 1, "m202402080301")
                    } catch {}
                    pc(n, 6, Af, z);
                    wc(n, 5, 1);
                    Cf(e, n)
                }
                )
            } catch (n) {}
            const f = To(b);
            So(L(f, 2));
            Fl(J(f, 6));
            Pj(Ij(), L(f, 24));
            d();
            Vd(16, [1, f.toJSON()]);
            var g = Xd(Wd(S)) || S;
            const h = c(Gm({
                va: a,
                Ca: L(f, 2)
            }), f);
            var k = null === S.document.currentScript ? 1 : uo(h.Kb);
            Ql(g, f);
            Ro(g, f, k);
            Q(eh) && gq();
            lo(n=>{
                var r = sc(F(n, 1)) + 1;
                C(n, 1, Ab(r), 0);
                S.top === S && (r = sc(F(n, 2)) + 1,
                C(n, 2, Ab(r), 0));
                uc(mc(n), 1) || (n = mc(n),
                xc(n, 1))
            }
            );
            lj(1086, po(0 === k));
            if (!Ba() || 0 <= qa(Ga(), 11)) {
                ij(Q(Oh));
                mn();
                bl();
                try {
                    rp()
                } catch {}
                ln();
                Qp(h, f);
                g = window;
                k = g.adsbygoogle;
                if (!k || !k.loaded) {
                    kj("new_abg_tag", {
                        value: `${J(f, 16)}`,
                        host_v: `${J(f, 22)}`,
                        frequency: .01
                    }, .01);
                    bq();
                    var m = {
                        push: n=>{
                            Kp(n, h, f)
                        }
                        ,
                        loaded: !0
                    };
                    try {
                        Object.defineProperty(m, "requestNonPersonalizedAds", {
                            set: cq
                        }),
                        Object.defineProperty(m, "pauseAdRequests", {
                            set: dq
                        }),
                        Object.defineProperty(m, "onload", {
                            set: eq
                        })
                    } catch {}
                    if (k)
                        for (var l of ["requestNonPersonalizedAds", "pauseAdRequests"])
                            void 0 !== k[l] && (m[l] = k[l]);
                    Jp(k, h, f);
                    g.adsbygoogle = m;
                    k && (m.onload = k.onload);
                    Q(mh) || (l = hn(h)) && document.documentElement.appendChild(l)
                }
            }
        }
        )
    }
    )("m202402080301", "undefined" === typeof sttc ? void 0 : sttc, function(a, b) {
        const c = 2012 < sc(F(b, 1)) ? `_fy${sc(F(b, 1))}` : ""
          , d = L(b, 3);
        b = L(b, 2);
        Td`data:text/javascript,//show_ads_impl_preview.js`;
        return {
            Ib: Td`https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/${""}slotcar_library${c}.js`,
            Gb: Td`https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/${""}show_ads_impl${c}.js`,
            Fb: Td`https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/${""}show_ads_impl_with_ama${c}.js`,
            Ob: Td`https://googleads.g.doubleclick.net/pagead/html/${b}/${d}/zrt_lookup${c}.html`,
            Mb: Td`https://googleads.g.doubleclick.net/pagead/html/${b}/${d}/zrt_lookup_inhead${c}.html`,
            Nb: Td`https://googleads.g.doubleclick.net/pagead/html/${b}/${d}/zrt_lookup_nohtml${c}.html`,
            Kb: /^(?:https?:)?\/\/(?:pagead2\.googlesyndication\.com|securepubads\.g\.doubleclick\.net)\/pagead\/(?:js\/)?(?:show_ads|adsbygoogle)\.js(?:[?#].*)?$/
        }
    });
}
).call(this, "[2021,\"r20240214\",\"r20190131\",null,null,null,null,\".google.co.kr\",null,null,null,[[[1310,null,null,[1]],[1277,null,null,[1]],[1308,null,null,[1]],[1316,null,null,[1]],[1275,null,null,[1]],[1311,null,null,[1]],[null,1130,null,[null,100]],[1270,null,null,[1]],[null,1032,null,[null,200],[[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[null,500]]]],[1247,null,null,[1]],[1317,null,null,[1]],[null,1224,null,[null,0.01]],[1312,null,null,[1]],[1207,null,null,[1]],[null,1263,null,[null,-1]],[null,1265,null,[null,-1]],[null,1264,null,[null,-1]],[1267,null,null,[1]],[1268,null,null,[1]],[null,66,null,[null,-1]],[null,65,null,[null,-1]],[1241,null,null,[1]],[1285,null,null,[1]],[1300,null,null,[1]],[null,null,null,[null,null,null,[\"en\",\"de\"]],null,1273],[1223,null,null,[1]],[null,null,null,[null,null,null,[\"44786015\",\"44786016\"]],null,1261],[1315,null,null,[1]],[null,1072,null,[null,0.75]],[null,572636916,null,[null,25]],[null,595730437,null,[null,800]],[null,566560958,null,[null,30000]],[null,508040914,null,[null,100]],[null,547455356,null,[null,49]],[null,null,null,[null,null,null,[\"1\",\"2\",\"4\",\"6\",\"8\",\"16\"]],null,556791602],[561639568,null,null,[1]],[null,572636915,null,[null,150]],[null,595645509,null,[null,0.3]],[561639564,null,null,[1]],[600847635,null,null,[1]],[null,561668774,null,[null,0.1]],[600719280,null,null,[1]],[null,469675170,null,[null,30000]],[160889229,null,null,[1]],[586386407,null,null,[1]],[573506525,null,null,[1]],[573506524,null,null,[1]],[586643641,null,null,[1]],[567362967,null,null,[1]],[570863962,null,null,[1]],[null,null,570879859,[null,null,\"control_1\\\\.\\\\d\"]],[null,570863961,null,[null,50]],[570879858,null,null,[1]],[45615403,null,null,[1]],[null,1085,null,[null,5]],[null,63,null,[null,30]],[null,1080,null,[null,5]],[10010,null,null,[1]],[null,1027,null,[null,10]],[null,57,null,[null,120]],[null,1079,null,[null,5]],[10009,null,null,[1]],[null,1050,null,[null,30]],[null,58,null,[null,120]],[10005,null,null,[1]],[555237685,null,null,[1]],[45460956,null,null,[]],[45414947,null,null,[1]],[null,472785970,null,[null,500]],[null,550718588,null,[null,250]],[588918521,null,null,[1]],[null,null,null,[null,null,null,[\"As0hBNJ8h++fNYlkq8cTye2qDLyom8NddByiVytXGGD0YVE+2CEuTCpqXMDxdhOMILKoaiaYifwEvCRlJ\/9GcQ8AAAB8eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3MTk1MzI3OTksImlzU3ViZG9tYWluIjp0cnVlfQ==\",\"AgRYsXo24ypxC89CJanC+JgEmraCCBebKl8ZmG7Tj5oJNx0cmH0NtNRZs3NB5ubhpbX\/bIt7l2zJOSyO64NGmwMAAACCeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3MTk1MzI3OTksImlzU3ViZG9tYWluIjp0cnVlfQ==\",\"A\/ERL66fN363FkXxgDc6F1+ucRUkAhjEca9W3la6xaLnD2Y1lABsqmdaJmPNaUKPKVBRpyMKEhXYl7rSvrQw+AkAAACNeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiRmxlZGdlQmlkZGluZ0FuZEF1Y3Rpb25TZXJ2ZXIiLCJleHBpcnkiOjE3MTkzNTk5OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9\",\"A6OdGH3fVf4eKRDbXb4thXA4InNqDJDRhZ8U533U\/roYjp4Yau0T3YSuc63vmAs\/8ga1cD0E3A7LEq6AXk1uXgsAAACTeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiRmxlZGdlQmlkZGluZ0FuZEF1Y3Rpb25TZXJ2ZXIiLCJleHBpcnkiOjE3MTkzNTk5OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9\"]],null,1934],[485990406,null,null,[]]],[[12,[[40,[[21065724],[21065725,[[203,null,null,[1]]]]],[4,null,9,null,null,null,null,[\"LayoutShift\"]],71],[10,[[31061690],[31061691,[[83,null,null,[1]],[84,null,null,[1]]]]],null,61]]],[13,[[500,[[31061692],[31061693,[[77,null,null,[1]],[78,null,null,[1]],[85,null,null,[1]],[80,null,null,[1]],[76,null,null,[1]]]]],[4,null,6,null,null,null,null,[\"31061691\"]]]]],[10,[[50,[[31067422],[31067423,[[null,1032,null,[]]]],[44776369],[44792510],[44804781],[44806359]],[3,[[4,null,8,null,null,null,null,[\"gmaSdk.getQueryInfo\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaQueryInfo.postMessage\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaSig.postMessage\"]]]],69],[1,[[31078995],[31078996,[[45545710,null,null,[1]],[45459826,null,null,[1]],[531007060,null,null,[1]],[45545724,null,null,[1]],[45430975,null,null,[1]],[531582260,null,null,[1]]]]]],[10,[[31079964],[31079965]]],[50,[[31080649],[31080650,[[null,592337179,null,[null,1]]]]]],[200,[[31081034],[31081035,[[1319,null,null,[1]]]]]],[1000,[[31081078,[[null,null,14,[null,null,\"31081078\"]]],[6,null,null,null,6,null,\"31081078\"]]],[4,null,55],63,null,null,null,null,null,null,null,null,2],[1000,[[31081079,[[null,null,14,[null,null,\"31081079\"]]],[6,null,null,null,6,null,\"31081079\"]]],[4,null,55],63,null,null,null,null,null,null,null,null,2],[10,[[31081080],[31081081,[[596652146,null,null,[1]]]],[31081082,[[596652146,null,null,[1]],[603378945,null,null,[1]]]]]],[200,[[31081106],[31081107,[[600455847,null,null,[1]]]]]],[1000,[[31081134,[[null,null,14,[null,null,\"31081134\"]]],[6,null,null,null,6,null,\"31081134\"]]],[4,null,55],63,null,null,null,null,null,null,null,null,2],[1000,[[31081135,[[null,null,14,[null,null,\"31081135\"]]],[6,null,null,null,6,null,\"31081135\"]]],[4,null,55],63,null,null,null,null,null,null,null,null,2],[10,[[31081136],[31081137,[[555237685,null,null,[]]]]]],[100,[[31081140],[31081141,[[561639567,null,null,[1]]]]]],[10,[[31081142],[31081143,[[1290,null,null,[1]]]]]],[10,[[31081152],[31081153,[[1282,null,null,[1]]]]]],[1000,[[31081168,[[null,null,14,[null,null,\"31081168\"]]],[6,null,null,null,6,null,\"31081168\"]]],[4,null,55],63,null,null,null,null,null,null,null,null,2],[1000,[[31081169,[[null,null,14,[null,null,\"31081169\"]]],[6,null,null,null,6,null,\"31081169\"]]],[4,null,55],63,null,null,null,null,null,null,null,null,2],[100,[[31081186],[31081187,[[603359027,null,null,[1]]]]]],[100,[[31081188],[31081189,[[10012,null,null,[1]]]]]],[1000,[[31081219,[[null,null,14,[null,null,\"31081219\"]]],[6,null,null,null,6,null,\"31081219\"]]],[4,null,55],63,null,null,null,null,null,null,null,null,2],[1000,[[31081220,[[null,null,14,[null,null,\"31081220\"]]],[6,null,null,null,6,null,\"31081220\"]]],[4,null,55],63,null,null,null,null,null,null,null,null,2],[10,[[31081221],[31081222,[[10013,null,null,[1]]]]]],[10,[[31081223],[31081224,[[598633105,null,null,[1]]]]]],[1000,[[31081233,[[null,null,14,[null,null,\"31081233\"]]],[6,null,null,null,6,null,\"31081233\"]]],[4,null,55],63,null,null,null,null,null,null,null,null,2],[1000,[[31081234,[[null,null,14,[null,null,\"31081234\"]]],[6,null,null,null,6,null,\"31081234\"]]],[4,null,55],63,null,null,null,null,null,null,null,null,2],[1,[[42531513],[42531514,[[316,null,null,[1]]]]]],[1,[[42531644],[42531645,[[368,null,null,[1]]]],[42531646,[[369,null,null,[1]],[368,null,null,[1]]]]]],[50,[[42531705],[42531706]]],[1,[[42532242],[42532243,[[1256,null,null,[1]],[290,null,null,[1]]]]]],[1,[[42532262],[42532263,[[null,1263,null,[null,16]]]],[42532264,[[null,1263,null,[null,4294967296]]]],[42532265,[[null,1265,null,[null,60]],[null,1264,null,[null,0.2]],[1266,null,null,[1]]]],[42532266,[[null,1263,null,[null,4294967296]],[null,1265,null,[null,60]],[null,1264,null,[null,0.2]],[1266,null,null,[1]]]],[42532267,[[null,1263,null,[null,16]],[null,1265,null,[null,60]],[null,1264,null,[null,0.2]],[1266,null,null,[1]]]],[42532268,[[1266,null,null,[1]]]]]],[1,[[42532360],[42532361,[[1260,null,null,[1]],[1291,null,null,[1]]]]],null,90],[1,[[42532362],[42532363]]],[50,[[42532523],[42532524,[[1300,null,null,[]]]]]],[null,[[42532525],[42532526]]],[1,[[44719338],[44719339,[[334,null,null,[1]],[null,54,null,[null,100]],[null,66,null,[null,10]],[null,65,null,[null,1000]]]]]],[10,[[44776368],[44779257]],[3,[[4,null,8,null,null,null,null,[\"gmaSdk.getQueryInfo\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaQueryInfo.postMessage\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaSig.postMessage\"]]]],69],[10,[[44785292],[44785293,[[1239,null,null,[1]]]]]],[10,[[44785294],[44785295]]],[1,[[44795552],[44795553,[[1260,null,null,[1]]]]],null,90],[1,[[44795554],[44795555]]],[200,[[44795921],[44795922,[[1222,null,null,[1]]]],[44798934,[[1222,null,null,[1]]]]]],[1,[[44801778],[44801779,[[506914611,null,null,[1]]]]],[4,null,55]],[1000,[[44802674,[[506852289,null,null,[1]]],[12,null,null,null,2,null,\"smitmehta\\\\.com\/\"]]],[4,null,55]],[50,[[44809003,[[1289,null,null,[1]]]],[44809004,[[1289,null,null,[1]],[null,null,1307,[null,null,\"inhead\"]]]],[44809005,[[1289,null,null,[1]],[null,null,1307,[null,null,\"nohtml\"]]]]]],[50,[[95320376,[[1309,null,null,[1]]]],[95320377,[[null,null,null,[null,null,null,[\"en\",\"de\",\"fr\"]],null,1273],[1309,null,null,[1]]]],[95320378,[[null,null,null,[null,null,null,[\"en\",\"de\",\"ja\"]],null,1273],[1309,null,null,[1]]]]],null,75],[50,[[95321957,[[null,null,null,[null,null,null,[\"en\",\"de\",\"es\"]],null,1273],[1309,null,null,[1]]]],[95321958,[[null,null,null,[null,null,null,[\"en\",\"de\",\"vi\"]],null,1273],[1309,null,null,[1]]]],[95321963,[[1309,null,null,[1]]]]],null,75],[50,[[95322180,[[null,null,null,[null,null,null,[\"en\",\"de\",\"pt\"]],null,1273],[1309,null,null,[1]]]],[95322181,[[null,null,null,[null,null,null,[\"en\",\"de\",\"ar\"]],null,1273],[1309,null,null,[1]]]],[95322182,[[null,null,null,[null,null,null,[\"en\",\"de\",\"hi\"]],null,1273],[1309,null,null,[1]]]],[95322183,[[null,null,null,[null,null,null,[\"en\",\"de\",\"it\"]],null,1273],[1309,null,null,[1]]]],[95322184,[[null,null,null,[null,null,null,[\"en\",\"de\",\"pl\"]],null,1273],[1309,null,null,[1]]]],[95322195,[[null,null,null,[null,null,null,[\"en\",\"de\",\"ko\"]],null,1273],[1309,null,null,[1]]]],[95322329,[[1309,null,null,[1]]]]],null,75],[100,[[95322433],[95322434]]],[50,[[95322745],[95322746,[[1271,null,null,[1]]]],[95322747,[[1272,null,null,[1]]]],[95322748,[[1271,null,null,[1]],[1272,null,null,[1]]]]]],[50,[[95323739],[95323740,[[1302,null,null,[1]]]],[95323741,[[1318,null,null,[1]]]]]],[50,[[95323760,[[1309,null,null,[1]]]],[95323761,[[null,null,null,[null,null,null,[\"en\",\"de\",\"nl\"]],null,1273],[1309,null,null,[1]]]]],null,75],[1,[[95324297],[95324298]]],[500,[[95324580],[95324581,[[null,561668774,null,[]]]]],[2,[[4,null,55],[1,[[12,null,null,null,4,null,\"Firefox|FxiOS\",[\"navigator.userAgent\"]]]]]]],[250,[[95325066],[95325067,[[null,547455356,null,[null,20]]]],[95325068,[[null,547455356,null,[null,30]]]],[95325069,[[null,547455356,null,[null,40]]]]],[4,null,55]]]],[17,[[10,[[31080990],[31080991,[[595827158,null,null,[1]]]]],null,null,null,null,null,null,null,149],[100,[[95320868],[95320869,[[597181299,null,null,[1]],[1120,null,null,[1]]]],[95320870,[[1120,null,null,[1]]]]],[4,null,55],null,null,null,null,null,null,133],[50,[[95321865],[95321866,[[566279275,null,null,[1]]]],[95321867,[[566279276,null,null,[1]]]],[95321868,[[566279275,null,null,[1]],[566279276,null,null,[1]]]]],[4,null,55],null,null,null,null,null,null,145],[3,[[95322388,null,[2,[[5,null,8,null,null,null,null,[\"localStorage\"]],[4,null,8,null,null,null,null,[\"localStorage\"]]]]],[95322389,null,[2,[[5,null,8,null,null,null,null,[\"localStorage\"]],[4,null,8,null,null,null,null,[\"localStorage\"]]]]],[95322390,null,[2,[[5,null,8,null,null,null,null,[\"localStorage\"]],[4,null,8,null,null,null,null,[\"localStorage\"]]]]],[95322391,null,[2,[[5,null,8,null,null,null,null,[\"localStorage\"]],[4,null,8,null,null,null,null,[\"localStorage\"]]]]]],null,null,null,null,null,null,null,144],[1,[[95322397],[95322398,[[null,595645509,null,[null,0.2]]]],[95322399,[[null,595645509,null,[null,0.4]]]]],[4,null,55],null,null,null,null,null,null,140],[10,[[95322897],[95322898]],null,null,null,null,32,null,null,142,1],[500,[[95324154],[95324155,[[null,null,589752731,[null,null,\"#FFFFFF\"]],[null,null,589752730,[null,null,\"#1A73E8\"]]]]],[4,null,55],null,null,null,null,null,null,147],[500,[[95324160],[95324161,[[595118932,null,null,[1]]]]],[4,null,55],null,null,null,null,null,null,148],[1,[[95324429],[95324430,[[null,null,null,[null,null,null,[\"1\",\"2\",\"4\",\"6\",\"7\"]],null,556791602]]],[95324431,[[null,null,null,[null,null,null,[\"1\",\"2\",\"4\",\"6\",\"7\"]],null,556791602]]],[95324432,[[null,null,null,[null,null,null,[\"1\",\"2\",\"4\",\"6\",\"7\"]],null,556791602]]],[95324433,[[null,null,null,[null,null,null,[\"1\",\"2\",\"4\",\"6\",\"7\"]],null,556791602]]],[95324434,[[null,null,null,[null,null,null,[\"1\",\"2\",\"4\",\"6\",\"7\"]],null,556791602]]],[95324435,[[null,null,null,[null,null,null,[\"1\",\"2\",\"4\",\"6\",\"7\"]],null,556791602]]]],[4,null,55],null,null,null,null,500,null,146],[100,[[95325076],[95325077,[[null,null,null,[null,null,null,[\"1\",\"2\",\"4\",\"6\",\"8\",\"16\",\"9\",\"10\",\"11\",\"12\",\"13\",\"14\",\"15\",\"17\"]],null,556791602]]],[95325078,[[null,null,null,[null,null,null,[\"1\",\"2\",\"4\",\"6\",\"8\",\"16\",\"18\"]],null,556791602]]],[95325079,[[null,null,null,[null,null,null,[\"1\",\"2\",\"4\",\"6\",\"8\",\"16\",\"19\"]],null,556791602]]],[95325080,[[null,null,null,[null,null,null,[\"1\",\"2\",\"4\",\"6\",\"8\",\"16\",\"20\"]],null,556791602]]]],[4,null,55],null,null,null,null,null,null,146]]],[11,[[1000,[[31081083,null,[4,null,6,null,null,null,null,[\"31081080\"]]]],[4,null,61],107,null,null,null,null,null,null,null,null,18],[1000,[[31081084,null,[4,null,6,null,null,null,null,[\"31081081\"]]]],[4,null,61],107,null,null,null,null,null,null,null,null,18],[1000,[[31081085,null,[4,null,6,null,null,null,null,[\"31081082\"]]]],[4,null,61],107,null,null,null,null,null,null,null,null,18]]]],null,null,[null,1000,1,1000]],[null,[null,null,[]],null,null,null,null,null,null,\"ca-pub-8200891696255326\"],null,\"31081079\",1,\"eugenes.co.kr\",379775959,[44759875,44759926,44759837,44808398]]");
