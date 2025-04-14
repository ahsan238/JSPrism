## Case 1.1
#### Description: Plugin API returned false in Mobile; subsequent API calls did not occur in mobile but did so in Desktop
script url: `https://a.kickstarter.com/assets/modules/editorial-user-view.7b239715bc4dcb1d9e8b365253a335030fb60ffe9611b7d752cda56130610ba1.js`

file: `/home/azafar2/VV8_PDG_mapping/additional/data/510623.com/script_agg.json`
```
 g = o.default.memoize(function() {
                        var e, t, n, a, i, r, s, c, l, d, u = (e = ["AdobeReader", "Flash", "Quicktime", "RealPlayer", "Shockwave", "Silverlight", "VLC", "WindowsMediaPlayer"], o.default.chain(e).zip(o.default.map(e, function(e) {
                                try {
                                    return window.PluginDetect.getVersion(e)
                                } catch (e) {
                                    return e.description
                                }
                            })).filter(o.default.last).value()),
                            m = o.default.map(navigator.plugins, function(e) {
                                return [e.name, e.description, e.filename, e.length].join("|")
                            }),
                            p = w(),
                            f = (t = navigator.getGamepads ? navigator.getGamepads() : [], o.default.chain(t).filter(o.default.identity).map(function(e) {
                                return [e.index, e.id].join("|")
                            }).value()),
```
note: Plugin API was observed to be called in Desktop but not in Mobile. The code is supposed to run similarly for both mobile and desktop. But since plugins are returned false in Mobile, the subsequent code will naturally not run in the mobile. 


## Case 1.2
#### Description: Plugin API is checked for its length. If valid, code looks for Flash plugin - only happens in Desktop because mobile doesn't have plugin
script url: `https://www.google-analytics.com/analytics.js`

file: `/home/azafar2/VV8_PDG_mapping/additional/data/wp.com/script_agg.json`
```
if ((e = (e = O.navigator) ? e.plugins : null) && e.length)
            for (g = 0; g < e.length && !l; g++) ca = e[g], -1 < ca.name.indexOf("Shockwave Flash") && (l = ca.description);
```

## Case 2.1
#### Description: Code checks if navigator.platform includes Android and Chrome and later decides to access userAgentData values (platformVersion, model, fullVersionList) using the HighEntropyValues api
script url: `https://connect.facebook.net/signals/config/823166884443641?v=2.9.129&r=stable&domain=wordpress.com`

file: `/home/azafar2/VV8_PDG_mapping/additional/data/wp.com/script_agg.json`
```
function b(a) {
    return a === void 0 ? !1 : a.platform === "Android" && a.brands.map(function(a) {
        return a.brand
    }).join(", ").includes("Chrome")
}

e.exports = new b(function(b, d) {
    b = k(a.navigator.userAgentData, l);
    if (b == null) {
        a.navigator.userAgentData != null && j(new Error("[ClientHint Error] UserAgentData coerce error"));
        return
    } else if (!n(a.navigator.userAgent)) return;
    a.navigator.userAgentData.getHighEntropyValues(["model", "platformVersion", "fullVersionList"]).then(function(a) {
        a = k(a, m);
        if (a == null) {
            j(new Error("[ClientHint Error] getHighEntropyValues returned null from Android Chrome source"));
            return
        }
```

## Case 2.2
#### Description: isMobile is determined through userAgent. Window.screen.width is called only if the device type is 'Mobile'. Logs are empty for Desktop
script url: `https://pl.ea.com/release/4.62.1/elements/ea-local-nav-advanced-ea-local-nav-advanced-js.d6a5c661.9da2d53736a853b961af.chunk.js`

file: `/home/azafar2/VV8_PDG_mapping/additional/data/yimg.com/script_agg.json`
```
function(e, a) {
    window.eacom = window.eacom || {}, window.eacom.EacomDeviceMixin = e => class extends e {
        static get properties() {
            return {
                isMobile: {
                    type: Boolean,
                    value: () => /Mobile|Tablet|Android|BlackBerry/i.test(window.navigator.userAgent),
                    readOnly: !0,
                    reflectToAttribute: !0
                },
                isDesktop: {
                    type: Boolean,
                    reflectToAttribute: !0
                },
                isPhone: {
                    type: Boolean,
                    reflectToAttribute: !0
                },
                isTablet: {
                    type: Boolean,
                    reflectToAttribute: !0
                }
            }
        }
        connectedCallback() {
            super.connectedCallback(), this.isDesktop = !this.isMobile, this.isPhone = this.isMobile && window.screen.width < 768, this.isTablet = this.isMobile && !this.isPhone
        }
    }
}
```

## Case 2.3
#### navigator.maxTouchPoints was a unique occurence in mobile device. However, it makes sense as maxTouchPoints as n.mtp will only be assigned if maxTouchPoints is non null. In desktop, the value is 0. Overall, this script is very significant because it had 142 occurrences in our crawl.
script url: `https://bat.bing.com/bat.js`

file: `/home/azafar2/VV8_PDG_mapping/additional/data/wordpress.com/script_agg.json`
```
    this.addPageData = function(n, t) {
        var i, r, u;
        return t = t === !0, n = this.addPluginData(n), i = window.navigator.userLanguage || window.navigator.language, this.stringExists(i) && (n.lg = i), n = this.addFraudSignals(n), r = window.document.title, this.stringExists(r) && !this.stringExists(n.tl) && (n.tl = encodeURIComponent(r).replace(/%2C/gi, ",")), window.document.head.getElementsByTagName("meta").keywords && (u = window.document.head.getElementsByTagName("meta").keywords.content, this.stringExists(u) && (n.kw = encodeURIComponent(u).replace(/%2C/gi, ","))), t ? this.stringExists(this.previousPage) && !n.hasOwnProperty("r") && (n.r = this.previousPage) : (n = this.addUrlData(n), n = this.addLoadTime(n)), navigator.maxTouchPoints && (n.mtp = navigator.maxTouchPoints), n
    };
```


## Case 3
#### Two things of concern are happening here:
1. Duck Typing : "ontouchstart" in n is most likely to return true in a mobile device
2. Determining if the userAgent is a mobile device using regex

We cannot catch the first part in vv8 because obviously no API is called but we can check the second part and determine data dependencies of these variables that carry the device information. But if you think about it, for desktop user, their userAgent is never checked. There are no significant consequences of this but it shows that trackers are not solely relying on userAgent information and may inconspicously use duck typing to match decisions on how to treat mobile users differently. It would be important for us to check if that is happening predominantly in our dataset but there is no way we can do this with the vv8.


script url: `https://dxt983tp420wz.cloudfront.net/scripts/vendor-c5754ac010526262b6a2.js`

file: `/home/azafar2/VV8_PDG_mapping/additional/data/xvideos.com/script_agg.json`
```
    var B = "ontouchstart" in n,
    z = P(n, "PointerEvent") !== s,
    L = B && /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),
    D = 25,
    F = 1,
    N = 2,
    U = 4,
    q = 8,
    Z = 1,
    Y = 2,
    W = 4,
    H = 8,
    G = 16,
    V = Y | W,
    K = H | G,
    X = V | K,
    J = ["x", "y"],
    Q = ["clientX", "clientY"];
```

Given that this ifnormation is gathered, we need to find where this is being used

```
function ee(t, e) {
    var r;
    this.options = u({}, te.defaults, e || {}), this.options.inputTarget = this.options.inputTarget || t, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = t, this.input = new((r = this).options.inputClass || (z ? mt : L ? Mt : B ? St : ct))(r, et), this.touchAction = new Bt(this, this.options.touchAction), re(this, !0), g(this.options.recognizers, function(t) {
        var e = this.add(new t[0](t[1]));
        t[2] && e.recognizeWith(t[2]), t[3] && e.requireFailure(t[3])
    }, this)
}
```

'n' in this example is an important node as its profile tells us that it is probably being used by the script to inspect the touch capability of the device
```
Ct = function() {
    if (!Tt) return !1;
    var t = {},
        e = n.CSS && n.CSS.supports;
    return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function(r) {
        t[r] = !e || n.CSS.supports("touch-action", r)
    }), t
}();
```

## Case 4
#### This is an example that I am still not sure about. I am not sure how the values are propagated or they just being written to the localsStorage (cookies) and then being used elsewhere. This will be an interesting catch if that is the case
script url: `https://www.clarity.ms/s/0.7.10/clarity.js`

file: `/home/azafar2/VV8_PDG_mapping/additional/data/wired.com/script_agg.json`
```
function wr() {
        yr = null;
        var t, e = navigator && "userAgent" in navigator ? navigator.userAgent : "",
            n = document && document.title ? document.title : "",
            a = e.indexOf("Electron") > 0 ? 1 : 0,
            r = function() {
                var t = {
                        session: _r(),
                        ts: Math.round(Date.now()),
                        count: 1,
                        upgrade: null,
                        upload: ""
                    },
                    e = Cr("_clsk");
                if (e) {
                    var n = e.split("|");
                    n.length >= 5 && t.ts - Ir(n[1]) < 18e5 && (t.session = n[0], t.count = Ir(n[2]) + 1, t.upgrade = Ir(n[3]), t.upload = n.length >= 6 ? "".concat("https://").concat(n[5], "/").concat(n[4]) : "".concat("https://").concat(n[4]))
                }
                return t
            }(),
            i = Dr(),
            u = o.projectId || d(location.host);
        mr = {
            projectId: u,
            userId: i.id,
            sessionId: r.session,
            pageNum: r.count
        }, o.lean = o.track && null !== r.upgrade ? 0 === r.upgrade : o.lean, o.upload = o.track && "string" == typeof o.upload && r.upload && r.upload.length > "https://".length ? r.upload : o.upload, pr(0, e), pr(3, n), pr(1, b(location.href, !!a)), pr(2, document.referrer), pr(15, function() {
            var t = _r();
            if (o.track && Nr(window, "sessionStorage")) {
                var e = sessionStorage.getItem("_cltk");
                t = e || t, sessionStorage.setItem("_cltk", t)
            }
            return t
        }()), pr(16, document.documentElement.lang), pr(17, document.dir), pr(26, "".concat(window.devicePixelRatio)), pr(28, i.dob.toString()), pr(29, i.version.toString()), W(0, r.ts), W(1, 0), W(35, a), navigator && (pr(9, navigator.language), W(33, navigator.hardwareConcurrency), W(32, navigator.maxTouchPoints), W(34, Math.round(navigator.deviceMemory)), (t = navigator.userAgentData) && t.getHighEntropyValues ? t.getHighEntropyValues(["model", "platform", "platformVersion", "uaFullVersion"]).then((function(t) {
            var e;
            pr(22, t.platform), pr(23, t.platformVersion), null === (e = t.brands) || void 0 === e || e.forEach((function(t) {
                pr(24, t.name + "~" + t.version)
            })), pr(25, t.model), W(27, t.mobile ? 1 : 0)
        })) : pr(22, navigator.platform)), screen && (W(14, Math.round(screen.width)), W(15, Math.round(screen.height)), W(16, Math.round(screen.colorDepth)));
        for (var c = 0, s = o.cookies; c < s.length; c++) {
            var l = s[c],
                f = Cr(l);
            f && ot(l, f)
        }
        Tr(i)
    }
```

if 'language' in navigator