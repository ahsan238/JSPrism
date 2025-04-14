var a = 1
var b = 10
b = b + a + 4

function collectSignals() {
    var c = {};
    var ft = init(c);
    c.d = b;
    c.f = ft.One(c.d)
    return c
}
function init(r) {
    var ft = {};
    ft.One = function(m) {
        if (m > 0) {
            return a
        }
    };
    return ft
}