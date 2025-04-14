e.getConsentData = function(t) {
    try {
        for (var e = window; e !== window.top;) {
            try {
                if (e.frames.__cmpLocator || e.frames.__tcfapiLocator) break
            } catch (t) {}
            e = e.parent
        }
        if (e === window)
            if (e.__tcfapi) {
                var a = function(n, i) {
                    t(n.tcString, !o(n)), e.__tcfapi("removeEventListener", 2, function() {}, a)
                };
                e.__tcfapi("addEventListener", 2, a)
            } else e.__cmp ? e.__cmp("getConsentData", null, function(e) {
                var a = e.consentData;
                t(a)
            }) : t();
        else {
            r("message", l, !1);
            var s = "usersync_getConsentData_" + Math.random().toString(36).substring(2, 10),
                d = window.setTimeout(function() {
                    h(s)
                }, n);
            i[s] = {
                callback: t,
                timeout: d
            }, e.frames.__tcfapiLocator ? e.postMessage({
                __tcfapiCall: {
                    callId: s,
                    version: 2,
                    command: "addEventListener"
                }
            }, "*") : e.frames.__cmpLocator ? e.postMessage({
                __cmpCall: {
                    callId: s,
                    command: "getConsentData"
                }
            }, "*") : h(s)
        }
    } catch (e) {
        t()
    }
}