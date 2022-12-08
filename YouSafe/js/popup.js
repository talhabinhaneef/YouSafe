(() => {
    "use strict";
    (() => {
        let e, t = chrome;

        function n(n, o = null, s = []) {
            e.get(o, (c => {
                t.runtime.lastError ? (e = t.storage.local, e.get(o, (e => {
                    n(e, ...s)
                }))) : n(c, ...s)
            }))
        }

        function o(n) {
            e.set(n, (() => {
                t.runtime.lastError && (e = t.storage.local, e.set(n))
            }))
        }
        "object" == typeof browser && "object" == typeof browser.runtime && (t = browser), e = t.storage.local, "object" == typeof t.storage.sync && (e = t.storage.sync);
        const s = document.documentElement;

        function c(e) {
            const t = e.getElementsByClassName("check"),
                n = t[0];
            if (n.checked) return;
            let o = !1;
            for (let e = 1; !o && e < t.length; e += 1)(t[e].checked || t[e].indeterminate) && (o = !0);
            o && (n.indeterminate = !0)
        }

        function d(e, t) {
            const n = document.getElementById("hide_redirect_home").parentNode;
            !e || t ? n.classList.add("hidden") : n.classList.remove("hidden")
        }

        function a(e) {
            Object.keys(e).forEach((t => {
                if ("boolean" == typeof e[t]) {
                    const n = document.getElementById(t);
                    n && (n.checked = e[t]), "yt_on" === t && s.setAttribute(t, e[t])
                } else Object.keys(e[t]).forEach((n => {
                    const o = document.getElementById(n);
                    if (o && (o.checked = e[t][n]), "dark_mode" === n || "yt_on" === n) s.setAttribute(n, e[t][n]);
                    else {
                        const o = document.getElementById(n).parentNode.parentNode.parentNode.getElementsByTagName("ul")[0];
                        e[t][n] ? o.classList.add("hidden") : o.classList.remove("hidden")
                    }
                }))
            })), d(e.hide_feed, e.hide_subs);
            const t = document.getElementById("options").getElementsByTagName("ul");
            for (let e = 1; e < t.length; e += 1) c(t[e].parentNode)
        }

        function i(e, t, n) {
            const s = e.popup_settings;
            s[t] = n, o({
                popup_settings: s
            })
        }

        function r() {
            const e = this.checked,
                t = this.id;
            if (n(i, ["popup_settings"], [t, e]), "dark_mode" === t) s.setAttribute(t, e);
            else {
                const t = this.parentNode.parentNode.parentNode.getElementsByTagName("ul")[0];
                e ? t.classList.add("hidden") : t.classList.remove("hidden")
            }
        }
        document.addEventListener("DOMContentLoaded", (function () {
            n(a)
        }));
        const l = document.getElementsByClassName("yt-setting");
        for (let e = 0; e < l.length; e += 1) l[e].addEventListener("change", r);

        function m(e, t) {
            const n = e,
                o = n.getElementsByClassName("check")[0];
            !1 === t ? (o.indeterminate = !1, o.checked = !1, c(n)) : o.indeterminate = !0;
            const s = n.parentNode.parentNode;
            "LI" === s.tagName && m(s, t)
        }

        function h(e) {
            const t = {};
            Object.keys(e).forEach((n => {
                if ("boolean" == typeof e[n]) {
                    const o = document.getElementById(n).checked;
                    e[n] !== o && (t[n] = o)
                }
            })), Object.prototype.hasOwnProperty.call(t, "hide_feed") ? d(t.hide_feed, e.hide_subs) : Object.prototype.hasOwnProperty.call(t, "hide_subs") && d(e.hide_feed, t.hide_subs), o(t)
        }

        function u() {
            const e = this.checked,
                t = this.parentNode.parentNode;
            if (t.classList.contains("check-tree")) {
                const n = t.parentNode.getElementsByClassName("check");
                for (let t = 1; t < n.length; t += 1) n[t].checked = e
            } else "UL" === t.tagName && "LI" === t.parentNode.tagName && m(t.parentNode, e);
            n(h)
        }
        const g = document.getElementsByClassName("check");
        for (let e = 0; e < g.length; e += 1) g[e].addEventListener("change", u);

        function f(e) {
            s.setAttribute("yt_on", e), o({
                yt_on: e
            })
        }
        document.getElementById("yt_on").addEventListener("change", (function () {
            this.checked ? f(!0) : f(!1)
        }))
    })()
})();