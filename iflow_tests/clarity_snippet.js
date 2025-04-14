function aa(t) {
    var e = "",
        n = null;
    try {
        n = t ? t.cssRules : []
    } catch (t) {
        if (kr(1, 1, t ? t.name : null), t && "SecurityError" !== t.name) throw t
    }
    if (null !== n)
        for (var a = 0; a < n.length; a++) e += n[a].cssText;
    return e
}
