/*! markmap-autoloader v0.1.1 | MIT License */ ! function () {
    "use strict";

    function t() {
        return (t = Object.assign || function (t) {
            for (var n = 1; n < arguments.length; n++) {
                var r = arguments[n];
                for (var e in r) Object.prototype.hasOwnProperty.call(r, e) && (t[e] = r[e])
            }
            return t
        }).apply(this, arguments)
    }
    /*! markmap-common v0.1.2 | MIT License */
    Math.random().toString(36).slice(2, 8);

    function n(t, n, r) {
        const e = document.createElement(t);
        return n && Object.entries(n).forEach((([t, n]) => {
            e[t] = n
        })), r && Object.entries(r).forEach((([t, n]) => {
            e.setAttribute(t, n)
        })), e
    }
    const r = function (t) {
        const n = {};
        return function (...r) {
            const e = `${r[0]}`;
            let a = n[e];
            return a || (a = {
                value: t(...r)
            }, n[e] = a), a.value
        }
    }((t => {
        document.head.append(n("link", {
            rel: "preload",
            as: "script",
            href: t
        }))
    }));

    function e(r, e) {
        if ("script" === r.type) return new Promise(((e, a) => {
            var o;
            document.head.append(n("script", t({}, r.data, {
                onload: e,
                onerror: a
            }))), null != (o = r.data) && o.src || e()
        }));
        if ("iife" === r.type) {
            const {
                fn: t,
                getParams: n
            } = r.data;
            t(...(null == n ? void 0 : n(e)) || [])
        }
    }
    const a = {};

    function o(t) {
        const {
            Transformer: n,
            Markmap: r
        } = window.markmap, e = t.textContent.split("\n");
        let o = 1 / 0;
        e.forEach((t => {
            const n = t.match(/^\s*/)[0].length;
            n < t.length && (o = Math.min(o, n))
        }));
        const c = e.map((t => t.slice(o))).join("\n"),
            s = new n;
        t.innerHTML = "<svg></svg>";
        const i = t.firstChild,
            p = r.create(i),
            l = () => {
                const t = function (t, n) {
                    const {
                        root: r,
                        features: e
                    } = t.transform(n), o = Object.keys(e).filter((t => !a[t]));
                    o.forEach((t => {
                        a[t] = !0
                    }));
                    const {
                        styles: c,
                        scripts: s
                    } = t.getAssets(o), {
                        loadJS: i,
                        loadCSS: p
                    } = window.markmap;
                    return c && p(c), s && i(s), r
                }(s, c);
                p.setData(t), p.fit()
            };
        s.hooks.retransform.tap(l), l()
    }!async function () {
        await async function (n, a) {
            const o = n.filter((t => {
                var n;
                return "script" === t.type && (null == (n = t.data) ? void 0 : n.src)
            }));
            o.length > 1 && o.forEach((t => r(t.data.src))), a = t({
                getMarkmap: () => window.markmap
            }, a);
            for (const t of n) await e(t, a)
        }([{
            type: "script",
            data: {
                src: "./d3@6.3.0.js"
            }
        }, {
            type: "script",
            data: {
                src: "./markmap-lib@0.11.1.js"
            }
        },{
            type: "script",
            data: {
                src: "./markmap-view@0.2.1.js"
            }
        }]), document.querySelectorAll(".markmap").forEach(o)
    }()
}();