if (e.sharedStorage) {
    var h = h === void 0 ? Ja : h;
    h = h.performance;
    h = e.sharedStorage.set("ps_cct", String(h && h.now && h.timing ? Math.floor(h.now() + h.timing.navigationStart) : Date.now()), {
        ignoreIfPresent: !0
    });
    f = A(f, h, 2)
} else f = f.return();