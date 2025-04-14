JH = function() {
    if ("ontouchstart" in window || navigator.maxTouchPoints || window.DocumentTouch && document instanceof DocumentTouch) var d = !0;
    else d = ["(", " -webkit- -moz- -o- -ms- ".split(" ").join("touch-enabled),("), "heartz)"].join(""), d = window.matchMedia && window.matchMedia(d).matches;
    return d
};