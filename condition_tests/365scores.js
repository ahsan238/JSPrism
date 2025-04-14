var a = {
    isWebKit: "undefined" !== typeof document && "WebkitAppearance" in document.documentElement.style,
    supportsTouch: "undefined" !== typeof window && ("ontouchstart" in window || "maxTouchPoints" in window.navigator && window.navigator.maxTouchPoints > 0 || window.DocumentTouch && document instanceof window.DocumentTouch),
    supportsIePointer: "undefined" !== typeof navigator && navigator.msMaxTouchPoints,
    isChrome: "undefined" !== typeof navigator && /Chrome/i.test(navigator && navigator.userAgent)
}