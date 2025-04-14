The report describes in detail some of the issues with the condition algorithm along with test cases. This is obviously not a complete list and highlights the issues which are discovered on the go. Fixing them one by one to achieve maximum coverage on our conditional discovery approach...

Note: This should be made as part of milestones

### Finding the code
additional/condition_test.py already has a method to retrieve the code content and the executedApis. Just run the code using the scriptname provided in these examples, then use the base/condition.py to reprodude the errors

Also note that the prefix of the divergent node is the node_id from the PDG and not the character offset. additional/condition_test.py will return exec'd apis whose prefixes are character offset. At this point you might have to manually compare the two information bits to find the best match. A permanent fix for this is to modify the graph labelling algorithm that generates the PDG graph along with the exec'd nodes to ensure that the character offset is also kept. Another neat way of doing this is to record the character offset ranges that are a property of every node object to reach the exact node. Either way, this is a work item that will eventually have to be fixed.


1. Infinite Loop
Example: `https://afcs.dellcdn.com/gbx/prod/GBX_6.6.108.js`
Divergent Node: `57770_Window.matchMedia`

# Failures


## Case 1

script url: `https://px.spiceworks.com/px.js`
```
getRegularPlugins: function() {
            var a = [];
            if (void 0 === navigator.plugins) return a;
            for (var c = 0, b = navigator.plugins.length; c < b; c++) a.push(navigator.plugins[c]);
            this.pluginsShouldBeSorted() && (a = a.sort(function(f, d) {
                return f.name > d.name ? 1 : f.name < d.name ? -1 : 0
            }));
            return this.map(a, function(f) {
                var d = this.map(f, function(e) {
                    return [e.type, e.suffixes].join("~")
                }).join(",");
                return [f.name, f.description, d].join("::")
            }, this)
        },
```
API: "1527_MimeType.suffixes"


## Case 2

script url: `https://yandex.ru/ads/system/context.js`
```
6780: function(e, t) {
                "use strict";
                t.H = void 0, t.H = function(e) {
                    return function(e) {
                        return Boolean(e.PointerEvent)
                    }(e) && function(e) {
                        return (e.navigator || {}).maxTouchPoints || 0
                    }(e) > 0
                }
            },
```
API: 22604_Navigator.maxTouchPoints"


## Case 3

script url: `https://assets.targetimg1.com/webui/top-of-funnel/_next/static/chunks/smudge.c8c28d8d3978e938.js`
```
getAvailableScreenResolution: function(e) {
    var t;
    return window.screen.availWidth && window.screen.availHeight && (t = this.options.detectScreenOrientation ? window.screen.availHeight > window.screen.availWidth ? [window.screen.availHeight, window.screen.availWidth] : [window.screen.availWidth, window.screen.availHeight] : [window.screen.availHeight, window.screen.availWidth]), void 0 !== t && e.addPreprocessedComponent({
        key: "available_resolution",
        value: t
    }), e
},
```
API: "1104_Screen.availWidth"


## Case 4
script_url: `https://ak.sail-horizon.com/spm/spm.v1.min.js`
```
r.getDeviceSmallerSide = function() {
                                return window.screen.width < window.screen.height ? window.screen.width : window.screen.height
                            }
```
API: "2226_Window.screen"


## Case 5
script_url: `https://tube.buzzoola.com/api_iframe.html`
```
3995: function(t, e, r) {
                "use strict";
                var n, o, i, a, u, s, c, l, f, p, d;
                c = r(9106), u = r(6696), a = r(1702), i = r(3768), o = r(1441), p = (f = a()).site, d = f.techUrl, n = {
                    localtime: u(),
                    site: p,
                    techUrl: d
                }, "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1 && (n.rwDevice = "ipad");
                try {
                    l = navigator.connection.effectiveType, n.netEfType = null != l ? l : ""
                } catch (t) {}
                o("getRequestData", s = function(t) {
                    return null == t && (t = {}), c().then((function(e) {
                        var r, o, a;
                        for (r in o = i({}, n, t), e) null != (a = e[r]) && (o[r] = a);
                        return o
                    }))
                }), t.exports = s
            },
```
API: "25819_Navigator.platform"


## Case 6
script_url: `https://www.googletagmanager.com/gtag/js?id=AW-11089669558`
```
var aq = function() {
            var a = z.screen;
            return {
                width: a ? a.width : 0,
                height: a ? a.height : 0
            }
        },
```
API: "45978_Screen.height"

# Successes


## Case 1

script url: `https://www.aliexpress.us/?gatewayAdapt=glo2usa&_randl_shipto=US`
```
}, "setRequestHeader" in v && Object.keys(l).forEach((function(e) {
                    v.setRequestHeader(e, l[e])
                })), d && (v.withCredentials = !0), v.send(), g = window.setTimeout((function() {
                    window.clearTimeout(g), w({
                        costTime: 1e4,
                        response: null,
                        msg: "response timeout 10S"
                    }), v.abort()
                }), 1e4)
```
API: "1081_Window.setTimeout"


## Case 2

script url: `https://z.moatads.com/financialtimesprebidheader859796398452/moatheader.js`
```
(function() {
            a.h = a.h || {};
            a.h.d = function(a, m) {};
            a.h.e = function(a) {
                try {
                    var m = typeof a.location.toString;
                    if ("undefined" === m || "unknown" === m) return !0;
                    var n = typeof a.document;
                    if ("undefined" === n || "unknown" === n) return !0;
                    var r = a.innerWidth || a.document.documentElement.clientWidth || a.document.body.clientWidth || 0;
                    return "number" !== typeof(a.screenX || a.screenLeft || 0) || "number" !==
                        typeof r ? !0 : !1
                } catch (d) {
                    return !0
                }
            }
        })();
```
API: "80633_Window.screenX"


## Case 3

script url: `https://www.lowescdn.com/visualsearchplugin/1.1.131/index.backyard.min.js`
```
i.portrait = function() {
        return screen.orientation && Object.prototype.hasOwnProperty.call(window, "onorientationchange") ? u(screen.orientation.type, "portrait") : i.ios() && Object.prototype.hasOwnProperty.call(window, "orientation") ? 90 !== Math.abs(Number(window.orientation)) : window.innerHeight / window.innerWidth > 1
    }, i.landscape = function() {
        return screen.orientation && Object.prototype.hasOwnProperty.call(window, "onorientationchange") ? u(screen.orientation.type, "landscape") : i.ios() && Object.prototype.hasOwnProperty.call(window, "orientation") ? 90 === Math.abs(Number(window.orientation)) : window.innerHeight / window.innerWidth < 1
    }, i.noConflict = function() {
        return window.device = o, this
    }, i.onChangeOrientation = function(e) {
        "function" == typeof e && a.push(e)
    };
```
API: "10319_Screen.orientation"


