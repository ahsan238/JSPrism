hello = function(){
    console.log("hello")
}

world = function(){
    console.log("world")
}

requestFetch = function () {
    return (
        "undefined" != typeof hello() && world()
    );
}

var m = !1;
var d = !0;
!0 === d && (m = requestFetch());
