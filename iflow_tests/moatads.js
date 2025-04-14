/*Copyright (c) 2011, 2023, Oracle and/or its affiliates.  All rights reserved.*/
try {
  (function (D, x) {
    function Fa(b) {
      if (a.b.x())
        return AB_SCAFFOLD.sampling.onReady(function () {
          Ga(b);
        });
      Ga(b);
    }
    function Ga(b, t) {
      a.n.a.sxaz("trackingReady", { callback: Fa });
      if (
        !a.b.x() ||
        !AB_SCAFFOLD.sampling.tagShouldNotTrack()
      ) {
        fa = C.h;
        C.h++;
        C.i[fa] = !1;
        "undefined" === typeof b &&
          (b = a.t.f && a.t.f(N, "display"));
        var p = b && a.ad.b(null, b, {}, null, !0);
        p &&
          p.qs &&
          p.qs.d &&
          "string" === typeof p.qs.d &&
          (a.j = p.qs.d.split(":")[0]);
        p = null;
        p = !1;
        Ha &&
          (delete a.d._sprg,
          delete a.d._sdrc,
          (ba = !1),
          (a.d.ef = !0),
          (a.d.ee = !0));
        if (
          (p = a.b.x()
            ? !AB_SCAFFOLD.sampling.isEnabled()
            : a.d.x().isInApp && !a.d.cj())
        )
          delete a.d._sprg,
            delete a.d._sdrc,
            (ba = !1),
            (a.d.ef = !0),
            (a.d.ee = !0);
        a.h = 4;
        a.i = 2;
        a.d._sprg &&
          void 0 !== a.d._sprg[a.j] &&
          ((a.h = a.d._sprg[a.j]),
          (a.i = parseInt(a.h / 2)));
        a.b.x() &&
          (AB_SCAFFOLD.sampling.isActiveSampling()
            ? (a.h = 1)
            : (delete a.h, delete a.i));
        Ha && (delete a.h, delete a.i);
        p && (delete a.h, delete a.i);
        a.h && (ba = !0);
        a.ac.k();
        a.d.at.c ||
          ((a.d.at.c = !0),
          C.dcsx.ynds(
            window,
            "unload",
            "unload-" + a.d.at.a,
            "unloadFn" + a.d.at.a
          ),
          C.dcsx.ynds(
            window,
            "beforeunload",
            "unload-" + a.d.at.a,
            "beforeunloadFn" + a.d.at.a
          ));
        C.swde.azsx("unload-" + a.d.at.a, Ia, { once: !0 });
        a.ai.c(b.adNum);
        a.n.a.azsx(
          "allLocalAdsKilled",
          function () {
            C.swde.sxaz("unload-" + a.d.at.a, {
              callback: Ia,
            });
          },
          { once: !0 }
        );
        a.o.d(a.m.f, 100);
        a.b.en() && a.o.e(ca, 3e5);
        "undefined" === typeof b && (b = a.t.f(N));
        if (a.b.z()) {
          var p = "number" === typeof a.h,
            u = 1;
          ba &&
            (p
              ? ((u = a.b.y(a.h, a.i)),
                (u = u.sample ? u.multiplier : 0))
              : (u = "undefined" === typeof Ja ? 1 : Ja));
          AB_SCAFFOLD.sampling.set({
            enabled: ba,
            multiplier: u,
            active: p,
          });
        }
        p = N.parentNode;
        if (null === p)
          throw {
            message: "parentNode of thisScript is null",
            stack: "error in startMoatTracking()",
            name: "error",
          };
        "undefined" === typeof b && (b = {});
        a.s.h(a.d.at.a, a.d.av);
        a.aj.e(b, 1e4);
        a.f.y(b);
        a.ad.b(17, b);
        a.aj.f(p, b);
      }
    }
    var O;
    O =
      "undefined" === typeof AB_SCAFFOLD
        ? 0
        : AB_SCAFFOLD.type;
    var a = {},
      L = "HEARSTMAGAZINES2";
    x.floor(x.random() * x.pow(10, 12));
    (function () {
      function b(a) {
        return "function" !== typeof a
          ? function () {
              return a;
            }
          : a;
      }
      function t(a) {
        return {
          get: function (c, d) {
            if (
              c &&
              c._MoatProxySet &&
              "undefined" !== typeof c._MoatProxySet[d]
            )
              return c._MoatProxySet[d];
            if ("string" === typeof d && a)
              for (var e = 0; e < a.length; e++) {
                var f = a[e],
                  l = b(f.func);
                if (
                  (f.exp.constructor === RegExp &&
                    f.exp.test(d)) ||
                  (f.exp.constructor === String &&
                    f.exp == d)
                )
                  return (
                    (e = l(c, d)), (c._MoatProxySet[d] = e)
                  );
              }
            return null;
          },
          getPrototypeOf: function (a) {
            return null;
          },
          set: function (a, b, c) {
            return (a._MoatProxySet[b] = c);
          },
        };
      }
      function p(a, b, c, d) {
        if (!a[b]) {
          var e;
          try {
            e = new Proxy(
              { _MoatProxySet: { _MoatProxyOf: b } },
              t(c)
            );
          } catch (f) {
            throw (
              ((f.message =
                "ES6 proxy not found when proxying " + b),
              f)
            );
          }
          d && (d[b] = e);
          return e;
        }
        return a[b];
      }
      function u(a, b) {
        this.exp = a;
        this.func = b;
      }
      function k() {
        return function () {
          return 0;
        };
      }
      function n(a) {
        return {
          style: {},
          _MoatProxyOf: "HTMLElement",
          tagName: a,
          ownerDocument: document,
          appendChild: function () {},
          removeChild: function () {},
          addEventListener: function () {},
          getElementsByTagName: function (a) {
            return [];
          },
        };
      }
      function m() {
        return p(GLOBAL_VAR || c, "navigator", [v], window);
      }
      function h(a) {
        return a && a._MoatProxyOf;
      }
      function g(a) {
        return (a = (GLOBAL_VAR || c)[a]) && !h(a);
      }
      var c = new Function("return this;")(),
        e = new u(/^get[A-Z]/m, 0),
        f = new u(/^getElements*[A-Z]/m, function () {
          return function () {
            return [];
          };
        }),
        d = new u(/^create[A-Z]/m, k),
        z = new u(
          /^(?!(MoatSuper|Math|MmJsBridge))[A-Z][a-z].*/m,
          k
        ),
        l = new u("valueOf", 0),
        B = new u(/^MoatMAK/m, 0),
        v = new u(/.*/m, ""),
        A = new u(/.*/m, 0),
        q = new u(/.*/m, function (a, b) {
          var d = GLOBAL_VAR || c;
          return d && "undefined" !== typeof d[b]
            ? d[b]
            : 0;
        }),
        r,
        y = !g("window") && !g("document");
      a.a = a.a || {};
      a.a.a = y;
      a.a.b = h;
      a.a.c = function (a) {
        h(m) && (m.userAgent = a);
      };
      a.a.d = function () {
        return r;
      };
      a.a.e = function (a, b, c, d) {
        d = d || window;
        setTimeout = c ? a.bind(c) : a;
        clearTimeout = c ? b.bind(c) : b;
        setTimeout._MoatProxyOf = "setTimeout";
        clearTimeout._MoatProxyOf = "clearTimeout";
        d.setTimeout = setTimeout;
        d.clearTimeout = clearTimeout;
      };
      a.a.f = function (a, b, c, d) {
        d = d || window;
        setInterval = c ? a.bind(c) : a;
        clearInterval = c ? b.bind(c) : b;
        setInterval._MoatProxyOf = "setInterval";
        clearInterval._MoatProxyOf = "clearInterval";
        d.setInterval = setInterval;
        d.clearInterval = clearInterval;
      };
      a.a.createWindow = function () {
        var a = p(
          GLOBAL_VAR || c,
          "window",
          [e, B, z, d, l, q],
          null
        );
        h(a) &&
          ((a.window = a),
          (a.parent = a),
          (a.top = a),
          (a.Function = Function),
          (a.setTimeout = k()),
          (a.clearTimeout = k()),
          (a.clearInterval = k()),
          (a.setInterval = k()),
          (a.history = []));
        return (r = a);
      };
      a.a.navigator = m;
      a.a.createDocument = function () {
        var a = p(
          GLOBAL_VAR || c,
          "document",
          [f, e],
          window
        );
        h(a) &&
          ((a.documentElement = n("HTML")),
          (a.createElement = n),
          (a.defaultView = window),
          (a.body = {
            appendChild: function (a) {
              return a;
            },
            removeChild: function () {},
          }),
          (a.scripts = []));
        return a;
      };
      a.a.location = function () {
        return p(GLOBAL_VAR || c, "location", [v], window);
      };
      a.a.screen = function () {
        return p(GLOBAL_VAR || c, "screen", [A], window);
      };
    })();
    a.a.a &&
      ((this.__moatBPM = a.a),
      eval(
        "var window = this.__moatBPM.createWindow();var navigator = this.__moatBPM.navigator();var document = this.__moatBPM.createDocument();var location = this.__moatBPM.location();var screen = this.__moatBPM.screen();var setTimeout = window['setTimeout'];var clearTimeout = window['clearTimeout'];var setInterval = window['setInterval'];var clearInterval = window['clearInterval'];"
      ),
      (this.__moatBPM = void 0));
    var Da,
      fa = 0,
      Ea = {},
      W = {},
      I = {},
      wa = [],
      F = {},
      xa = !1,
      Ka = { 15: "", 12: "", 6: "", 7: "" },
      La = function () {
        for (var b in W)
          W.hasOwnProperty &&
            W.hasOwnProperty(b) &&
            W[b] &&
            a.b.a(W[b]);
        for (b = 0; b < wa.length; b++) a.b.b(wa[b]);
        for (var t in I)
          I.hasOwnProperty &&
            I.hasOwnProperty(t) &&
            I[t] &&
            (a.b.a(I[t].tid), (I[t] = !1));
        W = {};
        wa = [];
        N = null;
        a.c = null;
        a.d.a = null;
      },
      ca = function () {
        a.e.a(null, 0) || a.e.b();
        a.f && a.f.a();
        La();
      };
    a.g = ca;
    a.h = null;
    a.i = null;
    a.j = "";
    (function () {
      function b(a) {
        return (
          (a = e.toString.call(a)) &&
          ("[object Array]" === a ||
            "[object Array Iterator]" === a)
        );
      }
      function t(b) {
        return !!(
          b &&
          b.document &&
          b.location &&
          b[a.f.b([26, 37, 30, 43, 45])] &&
          b[
            a.f.b([
              44, 30, 45, 8, 39, 45, 30, 43, 47, 26, 37,
            ])
          ]
        );
      }
      function p(a) {
        if (null == a || t(a)) return !1;
        var c = a.length;
        return 1 === a.nodeType && c
          ? !0
          : "string" === typeof a ||
              b(a) ||
              0 === c ||
              ("number" === typeof c &&
                0 < c &&
                c - 1 in a);
      }
      function u(a, b, c, d) {
        var e,
          f = typeof a;
        if (a)
          if ("function" === f)
            for (e in a) {
              if (
                "prototype" != e &&
                "length" != e &&
                "name" != e &&
                (d ||
                  !a.hasOwnProperty ||
                  a.hasOwnProperty(e)) &&
                ((f = b.call(c, a[e], e)),
                "boolean" === typeof f && !f)
              )
                break;
            }
          else if ("number" === f)
            for (
              e = 0;
              e < a &&
              ((f = b.call(c, a, e)),
              "boolean" !== typeof f || f);
              e++
            );
          else if ("function" === typeof a.every)
            a.every(function (a, d, e) {
              a = b.call(c, a, d);
              return !("boolean" === typeof a && !a);
            });
          else if (p(a))
            for (
              e = 0;
              e < a.length &&
              ((f = b.call(c, a[e], e)),
              "boolean" !== typeof f || f);
              e++
            );
          else
            for (e in a)
              if (d || a.hasOwnProperty(e))
                if (
                  ((f = b.call(c, a[e], e)),
                  "boolean" === typeof f && !f)
                )
                  break;
        return a;
      }
      function k() {
        try {
          return navigator.userAgent;
        } catch (a) {
          return "";
        }
      }
      function n(a) {
        a = a || k();
        return !!/Android/.exec(a);
      }
      function m(a, b) {
        var c = b || document;
        return !!(/Macintosh/.exec(a) && "ontouchend" in c);
      }
      function h(a) {
        if ("boolean" === typeof q) return q;
        var b = a || k();
        q = l.test(b);
        if (!q) return q;
        if (g(b)) return (q = !0);
        a =
          navigator &&
          navigator.userAgentData &&
          !!navigator.userAgentData.brands;
        return (q =
          (b = B.exec(b)) &&
          b[1] &&
          90 <= parseInt(b[1]) &&
          !a);
      }
      function g(a) {
        return "boolean" === typeof z ? z : (z = d.test(a));
      }
      function c() {
        if (!navigator) return null;
        var a;
        a = k();
        return "Microsoft Internet Explorer" ==
          navigator.appName
          ? parseInt(
              a.replace(/^.*MSIE (\d+).*$/, "$1"),
              10
            )
          : "Netscape" == navigator.appName &&
            (a = a.match(/(?:Trident\/.*rv:|MSIE )(\d+)/))
          ? parseInt(a[1], 10)
          : null;
      }
      var e = {},
        f = void 0,
        d = /WebView/,
        z,
        l = /Chrome/,
        B = /Chrome\/(\d+)/,
        v = /Windows/,
        A = /Edg/,
        q,
        r = [
          [1, 25],
          [7, 1],
          [1, 25],
          [-74, 1],
          [1, 9],
          [-24, 1],
          [2, 1],
          [1, 3],
          [2, 1],
          [1, 4],
          [2, 1],
          [1, 1],
          [11, 1],
          [1, 6],
          [27, 1],
          [2, 1],
          [1, 3],
          [27, 1],
          [1, 3],
          [-92, 1],
        ],
        y = 65,
        w = "";
      (function () {
        q = z = q = f = void 0;
        for (var a = 0; a < r.length; a++)
          for (var b = 0; b < r[a][1]; b++)
            (w += String.fromCharCode(y)), (y += r[a][0]);
        w += String.fromCharCode(y);
      })();
      a.b = a.b || {};
      a.b.c = e;
      a.b.d = w;
      a.b.e = function (a) {
        for (var b = "", c = 0; c < a.length; c++)
          a.hasOwnProperty(c) && (b += w[a[c]]);
        return b;
      };
      a.b.f = b;
      a.b.g = t;
      a.b.h = p;
      a.b.forEach = u;
      a.b.i = function (a) {
        if (!a) return !1;
        var b;
        if (a !== Object(a)) b = a;
        else if (p(a)) {
          b = [];
          for (var c = 0, d = a.length; c < d; c++)
            b[c] = a[c];
        } else for (c in ((b = {}), a)) b[c] = a[c];
        return b;
      };
      a.b.j = function (b, c) {
        if (!b || "function" !== typeof b) return !1;
        var d = !1;
        0 <= String(b).indexOf("[native code]")
          ? (d = !0)
          : a.d.b() ||
            b === Function.prototype.toString ||
            (d = !0);
        d &&
          c &&
          (d =
            b.toString &&
            b.toString === Function.prototype.toString);
        return d;
      };
      a.b.k = k;
      a.b.l = function (a) {
        a = a || k();
        return !(
          !/iPad|iPhone|iPod|Silk|Kindle|Android|BlackBerry|PlayBook|BB10|Windows Phone|SpreadTrum|MAUI/.exec(
            a
          ) && !m(a)
        );
      };
      a.b.m = n;
      a.b.n = m;
      a.b.o = function (a) {
        a = a || k();
        var b = /Safari|CriOS/i;
        return !(
          (!/iPhone|iPod|iPad/.exec(a) && !m(a)) ||
          b.exec(a)
        );
      };
      a.b.p = function (a) {
        a = a || k();
        return n(a) ? !!/Version/.exec(a) : !1;
      };
      a.b.q = function (a) {
        if ("boolean" === typeof f) return f;
        var b = a || k();
        u(
          ".*(AFT).*,.*(sony).hbb(tv).tv.[0-9]{4}(HE).*,.*(SHIELD Android TV).*,.*(BRAVIA).*,.*(MStar Android TV).*,.*(NEO-U1).*,.*(R-TV BOX MINI).*,.*(OneBoxTV).*,.*(MIBOX3).*,.*(TX3 Mini).*,.*(Beelink).*,.*(Leelbox).*,.*(KM8PRO).*,.*(NEXBOX).*,.*(Dolamee_D5).*,.*(MXQPRO).*,.*(MXQ Pro).*,.*(H96).*(Build).*,.*(T95UPRO).*,.*(x96 Build/MHC19J).*,.*(A95X-R1).*,.*(TX5 Build).*,.*(TX5 Pro).*,.*(T95ZPLUS Build).*,.*(HTV BOX HTV3 Build).*,.*(SmartTV Build).*,.*(S905X_MXQPRO).*,.*(GeekTV Build).*,.*(Andr0id).*SmartTvA.*,.*(M9)[A-Z] (Max).*,.*; (A1)d Build/.*,.*(HiSmart).*,.*(AT&T TV Build).*,.*(Smart TV).*(Build).*,.*(BeyondTV).*(Build).*,.*(TVision).*(Build).*,.*(MiTV).*(Build).*,.*(sti6140d360 Build).*,.*(PHILIPS 4K TV Build).*,.*(Onn).*(TV).*(Build).*,.*(HAT4KDTV Build).*,.*(MIBOX4 Build).*,.*(SWTV-20NA Build).*,.*(Jetstream).*(Build).*,.*(Dynalink TV Box Build).*,.*(KONKA 4K Android TV Build).*,.*(AiPlus4K).*(Build).*,.*(LEAP-S1 Build).*,.*(PHILIPS 4k TV Build).*,.*(T98 PRO Build).*,.*(SuperBOX).*(Build).*,.*(X4-55 Build).*,.*(Stream TV Build).*,.*(KSTB2020 Build).*,.*(KM6 Build).*,.*(X96).*(Build).*,.*(AirTV Player Build).*,.*(Pyxis).*(Build).*,.*(Nexus Player Build).*,.*(HK1 MINI Build).*,.*(Chromecast).*,.*(TiVo).*,.*(AI PONT).*,.*(UnionTV).*,.*(Foxtel Now box Build).*,.*(SWTV).*(Build).*,.*(Vodafone TV Build).*,.*(Percee TV Build).*,.*(Hitachi).*(Android TV Build).*,.*(Kogan TV Build).*,.*(EKO).*(Android TV Build).*,.*(BLAUPUNKT).*(Android TV Build).*,.*(Kogan SmarterTV).*(Build).*,.*(BAUHN).*(Android TV).*(Build).*,.*(Ayonz Android TV Build).*,.*(SV10 Build).*,.*(JVC EU).*(Android TV Build).*,.*(globe Build).*,.*(AGT419 Build).*,.*(Tempo Android TV Build).*,.*(Android ).*(TV).*,.*(Android).*(decoder).*,.*(Orange TV Box).*,.*(A95X).*(Build).*,.*(ABOX).*(Build).*,.*(AQUOS).*(Build).*,.*(ATV R1 Build).*,.*(Android TV Build).*,.*(C70W Build).*,.*(CVTE_MSD338_512M Build).*,.*(Cyber 9 Pro Build).*,.*(DQ6 Build).*,.*(Dolamee D5 Build).*,.*(GTKing).*(Build).*,.*(H40 Build).*,.*(HK1).*(Build).*,.*(HYUNDAI).*(Android TV Build).*,.*(Hi3798CV200 Build).*,.*(I7 Build).*,.*(KII PRO Build).*,.*(KJD Android TV Build).*,.*(KM3 Build).*,.*(KM9PRO Build).*,.*(Kingbox Build).*,.*(M10 Build).*,.*(M2012K11AG Build).*,.*(M8S).*(Build).*,.*(M9C Pro Build).*,.*(MBOX Build).*,.*(MINI).*(Build).*,.*(MX10).*(Build).*,.*(MX9 Build).*,.*(MXIII-G Build).*,.*(MXQ).*(Build).*,.*(N5NOVA Build).*,.*(NEO).*(Build).*,.*(PLAY NOW TV BOX 2 Build).*,.*(QBELL Android TV Build).*,.*(QBell).*(Android TV Build).*,.*(QM).*(Build).*,.*(QPLOVE Q19 Build).*,.*(QUAD-CORE Build).*,.*(Qbell FHD Android TV Build).*,.*(R-TV BOX S10 Build).*,.*(RealtekATV Build).*,.*(S912 Build).*,.*(SMART TV Build).*,.*(SMART_TV Build).*,.*(Strong).*(Android TV Build).*,.*(T11 Build).*,.*(T8-PLUS Build).*,.*(T95).*(Build).*,.*(T96 MARS Build).*,.*(TIM_BOX Build).*,.*(TPM).*(Build).*,.*(TR99 MINI  Build).*,.*(TV BOX Build).*,.*(TV-BOX Build).*,.*(Tv Box Build).*,.*(TvBox Build).*,.*(TVBOX Build).*,.*(TVBOX-5G Build).*,.*(TX).*(Build).*,.*(Transpeed_H616 Build).*,.*(UGOOS-AM6 Build).*,.*(V88 Build).*,.*(VONTAR X3 Build).*,.*(VORKE).*(Build).*,.*(W95 Build).*,.*(X6 PRO Build).*,.*(X88).*(Build).*,.*(X92).*(Build).*,.*(XQ-BT52 Build).*,.*(Yagala Build).*,.*(ZIDOO).*(Build).*,.*(Zephir).*(Android TV Build).*,.*(globmall X4 Build).*,.*(hx322x_box Build).*,.*(m8s  Build).*,.*(mxqpro Build).*,.*(p212 Build).*,.*(p281 Build).*,.*(rk3).*(Build).*,.*(skipper Build).*,.*(TADAAM Box).*,.*(ANVSDK).*(MIBOX).*,.*(ANVSDK).*(TPM).*,.*(Nokia Streaming Box).*,.*(ANVSDK).*(Android).*(TV).*,.*(Cosmos Build).*,.*(GTV Build).*,.*(ANVSDK).*(Cosmos).*,.*(ANVSDK).*(BeyondTV).*,.*(ANVSDK).*(QM).*,.*(ANVSDK).*(AQUOS).*,.*(ANVSDK).*(Smart TV).*,.*(ANVSDK).*(AGT419).*,.*(ANVSDK).*(Formuler).*,.*(ANVSDK).*(KM9PRO).*,.*(ANVSDK).*(SWTV).*,.*(ANVSDK).*(GTV).*,.*(ANVSDK).*(STI6110).*,.*(ANVSDK).*(AiPlus4K).*,.*(ANVSDK).*(MBOX).*,.*(MiProj).*(Build).*,.*(Formuler).*(Build).*,.*(STI6110).*(Build).*,.*(ANVSDK).*(MiProj).*,.*(ANVSDK).*(Percee TV).*,.*(ANVSDK).*(HCH03).*,.*(ANVSDK).*(LEAP-S1).*,.*(XK03H Build).*,.*(MAG425A Build).*,.*(WZONE Build).*,.*(NeoViu).*(Build).*,.*(YOU-BOX Build).*,.*(Box Q Build).*,.*(Mbox Build).*,.*(Mbox Build).*,.*(i7 Build).*".split(
            ","
          ),
          function (a) {
            f = new RegExp(a).test(b);
            return !f;
          }
        );
        return f;
      };
      a.b.r = function (a) {
        a = a || k();
        var b = window && !!window.mraid;
        return v.test(a) && A.exec(a)
          ? b || g(a)
            ? !0
            : h(a)
          : !1;
      };
      a.b.s = function (a) {
        if (!navigator) return null;
        a = a || k();
        return a
          ? (a = a.match(
              /(Edg|Edge|EdgA|EdgiOS)\/(\d{1,}(.\d{1,})?)/
            ))
            ? parseFloat(a[2])
            : null
          : null;
      };
      a.b.t = c;
      a.b.u = function () {
        return null != c();
      };
      a.b.v = function (a, b) {
        function c(a, b) {
          if (b >= d || a !== Object(a)) return !1;
          "function" === typeof a.toString && a.toString();
          var e = Object.getPrototypeOf(a);
          e &&
            "function" === typeof e.toString &&
            e.toString();
          b < d &&
            u(a, function (a) {
              c(a, b + 1);
            });
          return !1;
        }
        var d = x.min(10, b || 2);
        try {
          return c(a, 0);
        } catch (e) {
          return !0;
        }
      };
    })();
    (function () {
      function b(a) {
        var b =
            /(http(s?):\/\/)?(www.)?google.((com(.(af|ag|ai|ar|au|bd|bh|bn|bo|br|bz|co|cu|cy|do|ec|eg|et|fj|gh|gi|gt|hk|jm|kh|kw|lb|ly|mm|mt|mx|my|na|nf|ng|ni|np|om|pa|pe|pg|ph|pk|pr|py|qa|sa|sb|sg|sl|sv|tj|tr|tw|ua|uy|vc|vn))?)|(co(.(ao|bw|ck|cr|id|il|in|jp|ke|kr|ls|ma|mz|nz|th|tz|ug|uk|uz|ve|vi|za|zm|zw))?)|(ad|ae|al|am|as|at|az|ba|be|bf|bg|bi|bj|bs|bt|by|ca|cd|cf|cg|ch|ci|cl|cm|cn|cv|cz|de|dj|dk|dm|dz|ee|es|fi|fm|fr|ga|ge|gg|gl|gm|gp|gr|gy|hn|hr|ht|hu|ie|im|iq|is|it|je|jo|ki|kg|kz|la|li|lk|lt|lu|lv|md|me|mg|mk|ml|mn|ms|mu|mv|mw|ne|nl|no|nr|nu|pl|pn|ps|pt|ro|ru|rw|sc|se|sh|si|sk|sn|so|sm|sr|st|td|tg|tk|tl|tm|tn|to|tt|vg|vu|ws|rs|cat)?)(\/?)/,
          c = location && location.ancestorOrigins;
        if (!c || !c.length) return a;
        var d = c[c.length - 1];
        if ("string" !== typeof d) return a;
        if (1 < c.length && b.test(d)) {
          b = c[c.length - 2];
          if ("string" !== typeof b) return a;
          if (Ba.test(b)) return b;
        } else if (Ba.test(d)) return d;
        return a;
      }
      function t(a) {
        return a && "string" === typeof a && Ba.test(a)
          ? a.split(".")[0].split("-").join(".")
          : !1;
      }
      function p(a) {
        if ("string" === typeof a) {
          var b =
            /^([a-z]+:\/\/|:?\/?\/)?((?:www\.)?(?:[^\/:]*))?/i;
          return (
            (a = a.match && a.match(b)) &&
            1 < a.length &&
            a.slice &&
            a.slice(1)
          );
        }
      }
      function u() {
        var b,
          c = a.b.w(),
          d = c && c.split("."),
          e = d && d.length;
        3 <= e
          ? (b =
              "co" === d[e - 2] || "com" === d[e - 2]
                ? d[e - 3] + "." + d[e - 2] + "." + d[e - 1]
                : d[e - 2] + "." + d[e - 1])
          : 2 == e && (b = d[e - 2] + "." + d[e - 1]);
        return (
          (b && decodeURIComponent(b)) ||
          decodeURIComponent(c)
        );
      }
      function k(a, b) {
        for (var c = [a], d = 1; d <= b; d++)
          c.push(a + d), c.push(a - d);
        c = c[x.floor(x.random() * c.length)];
        d = x.floor(x.random() * c);
        return { multiplier: c, sample: 0 == d };
      }
      function n(b, c) {
        a.b.y = function () {
          return { multiplier: b, sample: c };
        };
        a.b.z() &&
          AB_SCAFFOLD.sampling.set({
            multiplier: c ? b : 0,
            isActive: !!a.h,
          });
      }
      function m(a, b) {
        return -1 !== q(a, b);
      }
      function h(a) {
        var b = new RegExp("(^| )" + a + "($| )");
        return function (a) {
          return a && a.className && a.className.match(b);
        };
      }
      function g(a, b, c) {
        if (
          ("undefined" === typeof c || !c) &&
          a &&
          ((c = T(a)), !c)
        )
          return;
        if (a && a.nodeType)
          if ("undefined" === typeof Node) {
            if (1 != a.nodeType) return;
          } else if (a.nodeType != Node.ELEMENT_NODE)
            return;
        if (c.getComputedStyle)
          return (
            c.getComputedStyle(a, "") &&
            c.getComputedStyle(a, "")[b]
          );
        for (c = b.indexOf("-"); -1 < c; )
          (b =
            c == b.length - 1
              ? b.substr(0, c)
              : b.substr(0, c) +
                b.charAt(c + 1).toUpperCase() +
                b.substr(c + 2)),
            (c = b.indexOf("-"));
        if (a.currentStyle) return a.currentStyle[b];
        if (a.style) return a.style[b];
      }
      function c(b, c, d) {
        if (!b) return [];
        var f = "boolean" === typeof d ? d : !1,
          w = [b],
          l = !1;
        a.b.forEach(
          "number" === typeof c ? c : 50,
          function () {
            if ((l = e(b)) && 1 == l.nodeType) {
              if (
                ((b = l),
                w.push(b),
                l &&
                  11 == l.nodeType &&
                  "function" === typeof l.getRootNode)
              ) {
                var c = l.getRootNode({ composed: !0 });
                c && ((b = c.body), w.push(b));
              }
            } else if (f && l && 9 == l.nodeType)
              if ((l = a.l.b(b)) && 1 == l.nodeType)
                (b = l), w.push(b);
              else return !1;
            else return !1;
          }
        );
        return w;
      }
      function e(a) {
        return a.parentNode || a.parentElement || !1;
      }
      function f(a) {
        if (!a || "IFRAME" !== a.nodeName) return !1;
        var b = a.offsetHeight;
        return isNaN(b) ||
          15 < b ||
          "google_conversion_frame" !== a.name
          ? !1
          : !0;
      }
      function d(a) {
        return a
          .replace(/:/g, "%3A")
          .replace(/=/g, "%3D")
          .replace(/,/g, "%2C");
      }
      function z(b) {
        var d = b.offsetWidth,
          e = b.offsetHeight;
        if (
          ("function" === typeof a.b.ac && !a.b.ac(d, e)) ||
          (a.b.ad && e < a.b.ad) ||
          (a.b.ae && d < a.b.ae)
        )
          return !1;
        a.b.forEach(c(b, 3), function (a) {
          var b, c;
          b = a.style && a.style.width;
          c = a.style && a.style.height;
          a &&
            a.style &&
            "hidden" == a.style.overflow &&
            ("" != b || "" != c) &&
            ((a = parseFloat(b)),
            (c = parseFloat(c)),
            (d = !isNaN(a) && a < d ? a : d),
            (e = !isNaN(c) && c < e ? c : e));
        });
        (b = l(b)) &&
          b.width * b.height < U &&
          ((d = b.width < d ? b.width : d),
          (e = b.height < e ? b.height : e));
        return d * e >= U;
      }
      function l(b) {
        if (
          !b ||
          !b.nodeName ||
          "IMG" == !b.nodeName ||
          !b.complete
        )
          return !1;
        var c = b.getAttribute("src");
        if (!c) return !1;
        if (C[c]) return C[c];
        try {
          if (
            "undefined" !== typeof b.naturalHeight &&
            "undefined" !== typeof b.naturalWidth
          ) {
            var d = {
              width: b.naturalWidth,
              height: b.naturalHeight,
            };
            return (C[b.src] = d);
          }
        } catch (e) {}
        return a.d.a && ((a.d.a.src = c), a.d.a.a)
          ? ((d = {
              width: parseInt(a.d.a.b),
              height: parseInt(a.d.a.c),
            }),
            (C[c] = d))
          : !1;
      }
      function B(a, b) {
        for (var c in b)
          Object.prototype.hasOwnProperty.call(b, c) &&
            (a[c] = b[c]);
      }
      function v(a, b) {
        for (var c = [], d = 0; d < a.length; d++)
          b(a[d]) && c.push(a[d]);
        return c;
      }
      function A(a, b) {
        for (var c = [], d = 0; d < b.length; d++) {
          var e = a(b[d]);
          null != e && c.push(e);
        }
        return c;
      }
      function q(b, c) {
        if (!b) return -1;
        if (a.b.f(b)) {
          for (var d = 0, e = b.length; d < e; d++)
            if (b[d] === c) return d;
          return -1;
        }
        return "string" === typeof b
          ? c || "string" !== typeof c
            ? b.indexOf(c)
            : -1
          : -1;
      }
      function r(a, b) {
        if (!a || !b) return !1;
        var c = w(b);
        if (!c) return !1;
        if (y(c)) {
          var d =
            c.childNodes[
              x.max(0, c.childNodes.length - 1)
            ] || null;
          c.insertBefore(a, d);
        } else c.appendChild(a);
        return c;
      }
      function y(a) {
        return a && a.childNodes && 0 < a.childNodes.length;
      }
      function w(b) {
        if (!b) return !1;
        if (
          "OBJECT" !== b.nodeName &&
          "EMBED" !== b.nodeName
        )
          return b;
        b = c(b);
        var d = !1;
        a.b.forEach(b, function (a) {
          if (
            a &&
            "OBJECT" !== a.nodeName &&
            "EMBED" !== a.nodeName
          )
            return (d = a), !1;
        });
        return d;
      }
      function E(a, b) {
        if ("undefined" === typeof a) return !1;
        for (var c = 0, d = b.length; c < d; c++)
          if ("string" == typeof b[c]) {
            try {
              a = a[b[c]];
            } catch (e) {}
            if ("undefined" === typeof a) return !1;
          }
        return a;
      }
      function J(a) {
        return F && "undefined" !== typeof a && F[a]
          ? F[a]
          : !1;
      }
      function H(a) {
        return a.backgroundColor
          ? ((a = a.backgroundColor),
            "transparent" === a
              ? 0
              : -1 !== a.indexOf("rgb")
              ? 4 > a.split(",").length
                ? 1
                : parseFloat(a.split(",")[3].split(")")[0])
              : 1)
          : -1;
      }
      function G(b, c) {
        var d = -1;
        if (a.d.e().getComputedStyle) {
          var e = a.d.e().getComputedStyle(b);
          if (!e) return d;
          if (
            (c && "hidden" === e.visibility) ||
            "collapse" === e.visibility ||
            (c && 0 === H(e))
          )
            return 0;
          d = parseFloat(e.opacity);
        }
        return d;
      }
      function T(a) {
        try {
          var b = a && a.ownerDocument;
          return b && (b.defaultView || b.parentWindow);
        } catch (c) {
          return !1;
        }
      }
      function K(a) {
        a = x.max(4, a);
        return (((1 + x.random()) * x.pow(16, a)) | 0)
          .toString(16)
          .substring(0, a);
      }
      function ga(b, c) {
        if (a.b.j(c.toString)) return c.toString();
        if (a.b.j(b && b.Function.prototype.toString))
          return (
            (c.toString = b.Function.prototype.toString),
            c.toString()
          );
        var d =
          a.d.e() !== b &&
          a.d.e() &&
          a.d.e().Function.prototype.toString;
        if (a.b.j(d)) return (c.toString = d), c.toString();
        if (a.d.h() && 8 >= a.b.t()) return c.toString();
        var d = b || window,
          e = d.document.createElement("IFRAME");
        e.style.display = "none";
        e.style.width = "0px";
        e.style.height = "0px";
        e.width = "0";
        e.height = "0";
        r(e, d.document.documentElement);
        e.contentWindow &&
          (c.toString =
            e.contentWindow.Function.prototype.toString);
        var f = c.toString();
        d.document.documentElement.removeChild(e);
        return f;
      }
      function X(b, c, d, e) {
        function f(a, b) {
          try {
            return e(b[a]);
          } catch (c) {}
        }
        var w, l;
        if ("string" !== typeof b) return !1;
        "function" !== typeof e &&
          (e = function (a) {
            return a;
          });
        w = window;
        l = f(b, w);
        if (!l) {
          c = a.l.c(w, "number" === typeof c ? c : 20);
          if (!c) return !1;
          for (
            var r = 0, z = c.length;
            r < z &&
            ((w = c[r]),
            (l = f(b, w)),
            "undefined" === typeof l);
            r++
          );
        }
        return d ? [l, w] : l;
      }
      function S(a) {
        if ("object" === typeof a) {
          if (Object.keys) return Object.keys(a);
          var b = [],
            c;
          for (c in a) b.push(c);
          return b;
        }
      }
      function P(a, b) {
        if (
          "object" !== typeof a ||
          !a ||
          "function" !== typeof b
        )
          return !1;
        for (var c in a)
          if (a.hasOwnProperty(c) && !0 !== b(a[c]))
            return !1;
        return !0;
      }
      function Q(a) {
        return "number" === typeof a && !isNaN(a);
      }
      function Aa(a, b) {
        if (
          !a ||
          "object" !== typeof a ||
          "string" !== typeof b
        )
          return !0;
        var c = a[b.toLowerCase()],
          d = a.all;
        return "undefined" !== typeof c
          ? !1 !== c
          : "undefined" !== typeof d && !1 !== d;
      }
      function Na(a) {
        return (a && a._AD_FORMAT) || null;
      }
      function Oa() {
        return a.b.aj() && 1 === O;
      }
      function Ca(a) {
        var b = "undefined" !== typeof a.x ? a.x : a.left;
        if ("number" === typeof b) {
          var c = "undefined" !== typeof a.y ? a.y : a.top;
          if ("number" === typeof c) {
            var d, e, f, w;
            d = a.w || a.width;
            if ("number" === typeof d && 0 != d) f = b + d;
            else if (
              ((f =
                "undefined" !== typeof a.r ? a.r : a.right),
              "number" === typeof f && f > b)
            )
              d = f - b;
            else return;
            e = a.h || a.height;
            if ("number" === typeof e && 0 != e) w = c + e;
            else if (
              ((w =
                "undefined" !== typeof a.b
                  ? a.b
                  : a.bottom),
              "number" === typeof w && c < w)
            )
              e = w - c;
            else return;
            B(a, { x: b, y: c, w: d, h: e, r: f, b: w });
            return a;
          }
        }
      }
      var U,
        Pa,
        Ba,
        C = {},
        Ua =
          /rect\((\d+)px,? ?(\d+)px,? ?(\d+)px,? ?(\d+)px\)/,
        Qa,
        da,
        I,
        ha;
      U = 2500;
      Pa = (function () {
        var b = /Firefox\/(\d+)/.exec(a.b.k());
        return b
          ? ((b = parseInt(b[1], 10)), 21 > b && 14 < b)
          : !1;
      })();
      Ba = /cdn.ampproject.org$/;
      Qa = (function () {
        var b = {};
        return function (c) {
          if ("undefined" !== typeof b[c]) return b[c];
          b[c] = null;
          var d;
          d = (function () {
            var b = a.b.e([5, 1]),
              c = a.b.e([19, 48, 34, 45, 45, 30, 43]),
              d = a.b.e([
                15, 34, 39, 45, 30, 43, 30, 44, 45,
              ]),
              e = a.b.e([
                0, 41, 41, 37, 30, 13, 30, 48, 44,
              ]),
              f = a.b.e([
                8, 39, 44, 45, 26, 32, 43, 26, 38,
              ]),
              w = a.b.e([24, 30, 37, 41]),
              l = a.b.e([18, 39, 26, 41, 28, 33, 26, 45]);
            return {
              FB: "\\[" + b,
              Twitter: c,
              Pinterest: d,
              AppleNews: e,
              Instagram: f,
              Yelp: w,
              Snapchat: l,
            };
          })();
          a.b.forEach(S(d), function (a) {
            if (new RegExp(d[a]).test(c))
              return (b[c] = a), !1;
          });
          return b[c];
        };
      })();
      da = (function () {
        var b;
        return function () {
          if ("undefined" !== typeof b) return b;
          b = {
            results: {
              article: !1,
              page_height: !1,
              meta_properties: !1,
              favicon: !1,
            },
            meta_data: {
              num_articles: 0,
              page_height_ratio: null,
              meta_property_matches: [],
            },
          };
          var c = a.d.e() && a.d.e().document,
            d = (c && c.getElementsByTagName("article"))
              .length;
          0 < d &&
            ((b.results.article = !0),
            (b.meta_data.num_articles = d));
          var d = a.d.f(),
            e = a.d.e() && a.d.e().innerHeight,
            d = d && e && d / e;
          1.5 <= d &&
            ((b.results.page_height = !0),
            (b.meta_data.page_height_ratio = d));
          var d = c && c.getElementsByTagName("meta"),
            f = {
              "fb:app_id": 1,
              "og:site_name": 1,
              "og:type": 1,
              "fb:page_id": 1,
              "twitter:account_id": 1,
              "twitter:site": 1,
            };
          a.b.forEach(d, function (a) {
            if (
              (a = a.getAttribute("property")) &&
              f.hasOwnProperty(a)
            )
              return (
                (b.results.meta_properties = !0),
                b.meta_data.meta_property_matches.push(a),
                !1
              );
          });
          c = c && c.getElementsByTagName("link");
          a.b.forEach(c, function (a) {
            if (
              "icon" === a.getAttribute("rel") &&
              /favicon\./.test(a.getAttribute("href"))
            )
              return (b.results.favicon = !0), !1;
          });
          return b;
        };
      })();
      I = (function () {
        var b;
        return function () {
          if ("undefined" === typeof b) {
            var c = u();
            if (!c) return !1;
            var d = [
              a.f.b([39, 34, 28, 36, 72, 28, 40, 38]),
              a.f.b([
                39, 34, 28, 36, 35, 43, 72, 28, 40, 38,
              ]),
            ];
            b = m(d, c);
          }
          return b;
        };
      })();
      ha = (function () {
        var a = (function () {
          var a = window.pageXOffset
              ? window.pageXOffset + window.innerWidth - 1
              : 0,
            b = window.pageYOffset
              ? window.pageYOffset + window.innerHeight - 1
              : 0;
          return a || b
            ? !document.elementFromPoint(a, b)
            : !0;
        })();
        return function (b, c, d) {
          if (!a) {
            var e =
              d.defaultView || d.parentWindow || window;
            b += e.pageXOffset;
            c += e.pageYOffset;
          }
          return d.elementFromPoint(b, c);
        };
      })();
      a.b = a.b || {};
      a.b.ak = Aa;
      a.b.al = function (a) {};
      a.b.am = function (a, b, c) {
        "undefined" !== typeof c && (a[b] = c);
      };
      a.b.ab = function (b) {
        if (!(!b || (b && b.CLIPCHECKINGTARGET))) {
          var d = c(b, 3),
            e;
          d &&
            0 < d.length &&
            (a.b.forEach(d, function (a) {
              if (a && a.style && a.style.clip)
                return (e = a), !1;
            }),
            !e && b.style && b.style.clip && (e = b),
            e && (b.CLIPCHECKINGTARGET = e));
        }
      };
      a.b.an = function (a) {};
      a.b.ao = G;
      a.b.ap = function (b, c) {
        if ("string" !== typeof b || "string" !== typeof c)
          return b;
        if (!b.match(c)) {
          var d = b.lastIndexOf("_BETA");
          a.b.x() &&
            0 < d &&
            ((b = b.slice(0, d)), (c += "_BETA"));
          b += c;
        }
        return b;
      };
      a.b.aq = Qa;
      a.b.indexOf = q;
      a.b.ar = function (b, c) {
        if (!a.b.f(b)) return Aa(b, c);
        var d = !1;
        a.b.forEach(b, function (a) {
          if (Aa(a, c)) return (d = !0), !1;
        });
        return d;
      };
      a.b.as = function (a) {};
      a.b.at = H;
      a.b.au = function (a, b) {};
      a.b.av = function (a) {
        for (var b = [], c = 0; c < a.length; c++)
          b.push(a[c]);
        return b;
      };
      a.b.aw = function (a, b) {};
      a.b.ax = t;
      a.b.ay = S;
      a.b.az = function () {
        var a = X("context");
        if (a && E(a, ["observeIntersection"])) return a;
        a = X("AMP_CONTEXT_DATA");
        if (E(a, ["initialIntersection"])) return a;
      };
      a.b.ba = function () {
        if (!a.d.g) {
          var b = a.d,
            c;
          a: if (
            document &&
            document.currentScript &&
            "object" == typeof document.currentScript &&
            "undefined" !== typeof HTMLScriptElement &&
            document.currentScript.constructor ===
              HTMLScriptElement &&
            !document.currentScript[M]
          )
            (c = document.currentScript), (c[M] = !0);
          else {
            for (
              var d =
                  document.getElementsByTagName("script"),
                e = d.length - 1;
              -1 < e;
              e--
            ) {
              var f = (c = d[e]),
                w = new RegExp(
                  "hearstmagazines203491224419(/|%2F)" +
                    "moatad.js".replace(/\./, "\\.")
                );
              if (
                f &&
                f.src &&
                w.test(f.src) &&
                ("undefined" === typeof c[M] || !0 !== c[M])
              ) {
                c[M] = !0;
                break a;
              }
            }
            c = void 0;
          }
          b.g = c;
        }
        return a.d.g ? ((a.d.g[M] = !0), a.d.g) : null;
      };
      a.b.bb = function () {
        if (!a.d.k()) return !1;
        var b = a.b.k(),
          c = b && "string" === typeof b,
          d = /Version\/(\d*)/,
          e = /CPU.*OS\s(\d*)_/,
          d =
            (d = c && b.match(d)) && 1 < d.length
              ? parseInt(d[1], 10)
              : !1;
        "number" !== typeof d &&
          (d =
            (d = c && b.match(e)) && 1 < d.length
              ? parseInt(d[1], 10)
              : !1);
        return d;
      };
      a.b.bc = function (a, b) {};
      a.b.bd = function (a, b) {};
      a.b.be = function (b, c, d) {
        if ("number" !== typeof c || 0 >= c || isNaN(c))
          c = b.length;
        if ("number" !== typeof d || 0 >= d || isNaN(d))
          d = x.min(b.length, 50);
        b = A(Ca, b);
        b.sort(function (a, b) {
          return b.w * b.h - a.w * a.h;
        });
        b = b.slice(0, d);
        var e = [];
        a.b.forEach(b, function (b) {
          var d = b.x,
            f = b.y,
            w = b.r,
            l = b.b,
            r = !0;
          a.b.forEach(
            e,
            function (a) {
              var b = a.y,
                c = a.r,
                e = a.b;
              d >= a.x &&
                f >= b &&
                w <= c &&
                l <= e &&
                (r = !1);
              return r;
            },
            e
          );
          r && e.push(b);
          return e.length < c;
        });
        return e;
      };
      a.b.bf = function (b) {
        return a.b.f(b) ? 0 === b.length : !0;
      };
      a.b.bg = function (a, b) {
        for (var d = c(a, 50, !0), e = 0; e < d.length; e++)
          if (d[e] === b) return !0;
        return !1;
      };
      a.b.bh = function (a) {};
      a.b.bi = u;
      a.b.previousElementSibling = function (a) {
        if (a) {
          if (a.previousElementSibling)
            return a.previousElementSibling;
          for (
            var b = 0;
            (a = a.previousSibling) && 1e3 > b;

          )
            if ((b++, a && 1 === a.nodeType)) return a;
        }
      };
      a.b.bj = function (b, c) {
        if (!a.b.f(b)) return Aa(b, c);
        if (!b.length) return !1;
        var d = !0;
        a.b.forEach(b, function (a) {
          if (!Aa(a, c)) return (d = !1);
        });
        return d;
      };
      a.b.bk = function (a, b) {
        var c = Na(b);
        return !c || m(a, c);
      };
      a.b.bl = E;
      a.b.bm = Ca;
      a.b.getAttribute = function (a, b) {
        return a[b] || a.getAttribute(b);
      };
      a.b.af = function (a, b) {
        for (var c = [], d = 0; d < b.length; d++)
          c.push(a(b[d]));
        return c;
      };
      a.b.ag = function (a) {
        var b = 0;
        if (1 > a.length) return b;
        for (var c = 0; c < a.length; c++)
          var d = a.charCodeAt(c),
            b = (b << 5) - b + d,
            b = b & b;
        return x.abs(b);
      };
      a.b.bn = d;
      a.b.toString = function (b, c) {
        c = c || a.d.e();
        var d;
        try {
          d = ga(c, b);
        } catch (e) {
          d = b.toString();
        }
        return d;
      };
      a.b.bo = function (a) {
        var b = {};
        if ("string" != typeof a || "{" != a.charAt(0))
          return !1;
        a = a.slice(1, -1).split(",");
        for (var c = 0; c < a.length; c++) {
          var d = a[c].split(":");
          d[1] = unescape(d[1]);
          "true" == d[1]
            ? (d[1] = !0)
            : "false" == d[1]
            ? (d[1] = !1)
            : '"' == d[1].charAt(0)
            ? (d[1] = d[1].slice(1, -1))
            : (d[1] =
                "undefined" == d[1]
                  ? void 0
                  : "null" == d[1]
                  ? null
                  : "NaN" == d[1]
                  ? NaN
                  : parseFloat(d[1]));
          b[unescape(d[0])] = d[1];
        }
        return b;
      };
      a.b.bp = function (b, c, d) {
        a.m.a(c);
        !0 === d &&
          c.aa &&
          ((c.aa[R] = void 0), (c.aa[M] = void 0));
        !c.hasIframeListener &&
          b.tagName &&
          "iframe" === b.tagName.toLowerCase() &&
          (c.hasIframeListener = !0);
        c.components && c.components.splice(0, 1, b);
        c.aa = b;
        a.n.a.zaxs("adElementUpdate");
        a.b.ab(c.aa);
        a.m.b(c);
        c.periscopeManager &&
          c.periscopeManager.rebuildPixelTargets(
            b,
            b.parentNode
          );
      };
      a.b.bq = function (b) {
        b = b || a.b.k();
        return !(!/iPad/.exec(b) && !a.b.n(b));
      };
      a.b.br = function (a) {};
      a.b.bs = function (a) {
        return new D() - a.de;
      };
      a.b.bt = B;
      a.b.bu = function (a) {
        try {
          return (
            -1 !==
            (a.src || a.getAttribute("src")).indexOf(
              "psd=1"
            )
          );
        } catch (b) {
          return !1;
        }
      };
      a.b.bv = J;
      a.b.every = P;
      a.b.bw = function (a) {};
      a.b.bx = k;
      a.b.by = function (a) {};
      a.b.bz = h;
      a.b.aa = da;
      a.b.bind = function (a, b) {};
      a.b.ca = r;
      a.b.lastIndexOf = function (b, c) {
        if (!b) return -1;
        if (a.b.f(b)) {
          for (var d = b.length - 1; 0 <= d; d--)
            if (b[d] === c) return d;
          return -1;
        }
        return "string" === typeof b
          ? "" === c
            ? -1
            : b.lastIndexOf(c)
          : -1;
      };
      a.b.cb = function () {};
      a.b.cc = b;
      a.b.cd = function (a, b, c) {
        if ("string" != typeof a || !b || !document)
          return !1;
        c = c || document.createElement("script");
        c.type = "text/javascript";
        b = r(c, b);
        if (!b) return !1;
        c.src = a;
        return b;
      };
      a.b.ce = m;
      a.b.cf = function (a, b) {
        return Object.prototype.hasOwnProperty.call(a, b);
      };
      a.b.cg = X;
      a.b.ch = U;
      a.b.ci = function (a) {
        var b,
          c = /https:/i;
        if (a)
          b = c.test(a.src || a.href || "http:")
            ? "https:"
            : "http:";
        else
          try {
            b = window.location.protocol;
          } catch (d) {
            (a = document.createElement("a")),
              (a.href = ""),
              (b = a.protocol);
          }
        return "https:" === b ? "https:" : "http:";
      };
      a.b.cj = function (a, b, c) {};
      a.b.ck = function () {
        var b = a.d.e().screen;
        if (a.b.o()) {
          var c;
          "undefined" !== typeof window.orientation
            ? 0 === window.orientation ||
              180 === window.orientation
              ? ((c = b.width), (b = b.height))
              : ((c = b.height), (b = b.width))
            : (c = b = 0);
          return { w: c, h: b };
        }
        if (a.b.p()) {
          c = a.d.e().devicePixelRatio;
          var d = 1,
            e = b.width / a.d.e().innerWidth;
          0.05 > x.abs(e - c) && (d = c);
          return { w: b.width / d, h: b.height / d };
        }
        return { w: b.width, h: b.height };
      };
      a.b.cl = n;
      a.b.cm = function (a, b) {
        if (a && "object" === typeof a) {
          "string" !== typeof b && (b = "all");
          var c = a[b];
          return "undefined" !== typeof c ? c : a.all;
        }
      };
      a.b.cn = function (a, b) {};
      a.b.ae = !1;
      a.b.co = function (a, b) {};
      a.b.cp = function (a) {};
      a.b.cq = A;
      a.b.cr = function (a) {};
      a.b.cs = function (a, b) {};
      a.b.y = function (b, c) {
        if (a.b.x()) {
          var d = AB_SCAFFOLD.sampling.getMultiplier(),
            e = AB_SCAFFOLD.sampling.inSample();
          n(d, e);
          return { multiplier: d, sample: e };
        }
        d = k(b, c);
        n(d.multiplier, d.sample);
        return d;
      };
      a.b.ct = function (a, b, c) {};
      a.b.cu = function (a, b) {};
      a.b.cv = function (a, b, c) {};
      a.b.cw = void 0;
      a.b.cx = function () {};
      a.b.cy = function (a) {
        if ("string" !== typeof a) return "";
        var b = a.match(/^([^:]{2,}:\/\/[^\/]*)/);
        b && b[1] && (a = b[1]);
        return a;
      };
      a.b.b = function (a) {
        window &&
          window.clearInterval &&
          window.clearInterval(a);
      };
      a.b.cz = function (a, b, c) {};
      a.b.hasChildNodes = y;
      a.b.da = function () {};
      a.b.getElementsByClassName = function (a, b, c) {
        b = b || "*";
        c = c || document;
        if (c.getElementsByClassName) {
          var d = [],
            e = c.getElementsByClassName(a);
          if ("*" !== b) {
            a = 0;
            for (c = e.length; a < c; a++) {
              var f = e[a];
              f.tagName === b && d.push(f);
            }
            return d;
          }
          return e;
        }
        e = [];
        b = c.getElementsByTagName(b);
        c = h(a);
        f = b.length;
        for (a = 0; a < f; a++)
          (d = b[a]), c(d) && e.push(d);
        return e;
      };
      a.b.db = z;
      a.b.dc = function (b, c) {
        if (!a.b.f(c)) return !1;
        var d = 0;
        a.b.forEach(c, function (a) {
          a === b && d++;
        });
        return d;
      };
      a.b.dd = function (a, b) {};
      a.b.de = w;
      a.b.w = function () {
        var b,
          c =
            /^(?:[a-z]+:\/\/|:?\/?\/)?(?:www\.)?([^\/:]*)/i;
        a.d.c() ||
          ((b = a.k.a()), !b && a.d.d && (b = a.d.d));
        b || (b = a.d.e().location.hostname);
        return (
          ((b = b && b.match && b.match(c)) && b[1]) ||
          a.d.e().location.hostname
        );
      };
      a.b.getElementsByTagName = function (a, b) {};
      a.b.df = e;
      a.b.dg = g;
      a.b.dh = I;
      a.b.di = function (a, b) {
        var c = a.toString();
        b && (c = "(" + c + "(" + b + "))");
        return (
          "(function(){try{return(" +
          c +
          ")()}catch(e){return false}})()"
        );
      };
      a.b.dj = function (a) {
        return void 0 === a ||
          null === a ||
          !1 === a ||
          "" === a
          ? !0
          : !1;
      };
      a.b.ah = function (b) {
        if (!b || !b.style || !b.style.filter) return !1;
        b = b.style.filter.split(" ");
        var c = !1,
          d;
        a.b.forEach(b, function (a) {
          var b = a.match(/\d+/);
          a.search(/opacity/) &&
            b &&
            0 < b.length &&
            ((d = parseFloat(b.join(""))),
            !1 === c || d < c) &&
            (c = d);
        });
        return c;
      };
      a.b.dk = void 0;
      a.b.dl = function (a, b, c) {
        return function () {
          b.apply(
            c || null,
            a.concat(a.slice.call(arguments))
          );
        };
      };
      a.b.dm = function () {
        return K(4) + "-" + K(4) + "-" + K(4) + "-" + K(4);
      };
      a.b.some = function (a, b) {
        if (
          "object" !== typeof a ||
          !a ||
          "function" !== typeof b
        )
          return !1;
        for (var c in a)
          if (a.hasOwnProperty(c) && !0 === b(a[c]))
            return !0;
        return !1;
      };
      a.b.dn = ha;
      a.b["do"] = function (b, d, e) {
        if (!b || !b.aa) return !1;
        "undefined" === typeof b.parentNodeTree &&
          ((b.parentNodeTree = c(
            b.aa.parentElement,
            50,
            !0
          )),
          d && b.parentNodeTree.push(b.aa));
        var f = 100,
          w,
          l;
        a.b.forEach(b.parentNodeTree, function (b) {
          w = a.b.ai(b, e);
          0 === w &&
            ((l = G(b, e)), Q(l) && l >= w && (w = l));
          w < f && (f = w);
          if (0 === f) return !1;
        });
        return f;
      };
      a.b.dp = Pa;
      a.b.dq = l;
      a.b.dr = Na;
      a.b.ds = function (a, b, c) {};
      a.b.dt = K;
      a.b.du = function () {};
      a.b.dv = function (a, b) {
        var d = c(a);
        return d && -1 !== q(d, b);
      };
      a.b.dw = function () {
        var a = function (a) {
            if (!a) return "";
            a = a.match(/[\d]+/g);
            a.length = 3;
            return a.join(".");
          },
          b = !1,
          c = "";
        if (navigator.plugins && navigator.plugins.length) {
          var d = navigator.plugins["Shockwave Flash"];
          d &&
            ((b = !0),
            d.description && (c = a(d.description)));
          navigator.plugins["Shockwave Flash 2.0"] &&
            ((b = !0), (c = "2.0.0.11"));
        } else if (
          navigator.mimeTypes &&
          navigator.mimeTypes.length
        )
          (b =
            (d =
              navigator.mimeTypes[
                "application/x-shockwave-flash"
              ]) &&
            d.enabledPlugin &&
            d.enabledPlugin.description) &&
            (c = a(d.enabledPlugin.description));
        else
          try {
            (d = new ActiveXObject(
              "ShockwaveFlash.ShockwaveFlash.7"
            )),
              (b = !0),
              (c = a(d.GetVariable("$version")));
          } catch (e) {
            try {
              (d = new ActiveXObject(
                "ShockwaveFlash.ShockwaveFlash.6"
              )),
                (b = !0),
                (c = "6.0.21");
            } catch (f) {
              try {
                (d = new ActiveXObject(
                  "ShockwaveFlash.ShockwaveFlash"
                )),
                  (b = !0),
                  (c = a(d.GetVariable("$version")));
              } catch (w) {}
            }
          }
        return b ? c : "0";
      };
      a.b.dx = function (b, c, d) {
        b = a.b.toString(b, d);
        if (a.d.i()) d.eval("(" + b + ")(" + c + ")");
        else if (a.d.j(d))
          new d.Function("(" + b + ")(" + c + ")")();
        else {
          var e = d.document.createElement("script");
          e.type = "text/javascript";
          e.text = "(" + b + ")(" + c + ")";
          r(e, d.document.body);
        }
      };
      a.b.a = function (a) {
        window &&
          window.clearTimeout &&
          window.clearTimeout(a);
      };
      a.b.dy = function () {
        var a = null;
        "string" === typeof navigator.doNotTrack
          ? (a = navigator.doNotTrack)
          : "string" === typeof navigator.msDoNotTrack
          ? (a = navigator.msDoNotTrack)
          : "string" === typeof window.doNotTrack &&
            (a = window.doNotTrack);
        return !a || ("1" !== a[0] && "yes" !== a)
          ? !1
          : !0;
      };
      a.b.dz = function (a) {
        if (!a) return !1;
        var b = g(a, "background-image");
        b || (b = g(a, "backgroundImage"));
        var c;
        b &&
          (c =
            (c = b.match("url\\((.*)\\)")) &&
            c[1].replace(/\x22/g, ""));
        return c;
      };
      a.b.ea = function () {
        return a.b.y(a.h, a.i).sample;
      };
      a.b.eb = function (b) {
        var c = [];
        a.b.forEach(
          b,
          function (a, b) {
            var e = typeof a;
            "number" == e
              ? c.push(d(b) + ":" + d(a + ""))
              : "string" == e
              ? c.push(d(b) + ":" + d('"' + a + '"'))
              : "undefined" == e
              ? c.push(d(b) + ":" + d("undefined"))
              : "boolean" == e
              ? c.push(d(b) + ":" + d(a ? "true" : "false"))
              : null === a
              ? c.push(d(b) + ":" + d("null"))
              : ("object" != e && "function" != e) ||
                !a.toString ||
                c.push(
                  d(b) + ":" + d('"' + a.toString() + '"')
                );
          },
          null,
          !0
        );
        c.sort();
        return "{" + c.join(",") + "}";
      };
      a.b.ec = function (a, b) {
        if (!a || !b) return !1;
        var c = new RegExp("(^| )" + b + "($| )");
        return a.className && a.className.match(c);
      };
      a.b.ed = function (a) {};
      a.b.ee = function (a) {
        try {
          for (var b in a)
            if (a.hasOwnProperty(b)) return !1;
          return JSON.stringify(a) === JSON.stringify({});
        } catch (c) {
          return !1;
        }
      };
      a.b.reduce = function (b, c, d) {
        if (!a.b.h(b) || "function" !== typeof c) return !1;
        d = d ? c(d, b[0]) : b[0];
        for (var e = 1; e < b.length; e++) d = c(d, b[e]);
        return d;
      };
      a.b.ad = !1;
      a.b.ef = function (a) {
        return "string" !== typeof a
          ? !1
          : /^(?:https?:\/\/)?[^.:\/]+(?:\.[^.:\/]+)/.test(
              a
            );
      };
      a.b.eg = function () {
        var b = a.b.aa().results,
          c;
        for (c in b)
          if (b.hasOwnProperty(c) && b[c]) return !0;
        return !1;
      };
      a.b.filter = v;
      a.b.eh = function (a) {
        if (!a || !a.aa) return !1;
        if ("number" !== typeof a.ADAREA) {
          var b, c;
          if (
            a.isCompositeAd &&
            a.components &&
            1 < a.components.length
          )
            for (
              b = a.ADAREA = 0;
              b < a.components.length;
              b++
            )
              a.ADAREA +=
                a.components[b].offsetWidth *
                a.components[b].offsetHeight;
          else
            a.elementRect
              ? ((b =
                  a.elementRect.right - a.elementRect.left),
                (c =
                  a.elementRect.bottom - a.elementRect.top),
                (a.ADAREA = b * c))
              : (a.ADAREA =
                  a.aa.offsetWidth * a.aa.offsetHeight);
        }
        return a.ADAREA;
      };
      a.b.ei = function (b, c) {
        var d = new D(),
          d = [
            d.getFullYear(),
            ("0" + (d.getMonth() + 1)).slice(-2),
            ("0" + d.getDate()).slice(-2),
          ].join("-");
        return a.b.ag(b + (c + d));
      };
      a.b.ej = T;
      a.b.z = Oa;
      a.b.ek = function (a) {
        a = b(a);
        return t(a);
      };
      a.b.el = function (a, b) {
        b = b || {
          width: "1px",
          height: "1px",
          style: {
            left: "-9999px",
            top: "-9999px",
            position: "absolute",
          },
        };
        for (var c in b)
          if (b.hasOwnProperty(c))
            if ("style" === c)
              if ("string" === typeof b[c])
                a.setAttribute(c, b[c]);
              else
                for (var d in b[c])
                  b[c].hasOwnProperty(d) &&
                    (a[c][d] = b[c][d]);
            else a[c] = b[c];
      };
      a.b.em = function () {
        for (
          var b = [
              103, 46, 100, 111, 117, 98, 108, 101, 99, 108,
              105, 99, 107, 46, 110, 101, 116,
            ],
            c = "",
            d = 0,
            e = b.length;
          d < e;
          d++
        )
          c += String.fromCharCode(b[d]);
        return new RegExp("^[^.]+." + c).test(a.b.w());
      };
      a.b.ai = function (b, c) {
        var d;
        if (!b) return 100;
        if (c && b.style && "hidden" === b.style.visibility)
          return 0;
        d =
          b.style && b.style.opacity
            ? parseFloat(b.style.opacity)
            : a.b.ah(b);
        return Q(d) ? d : 100;
      };
      a.b.en = function () {
        var b = a.b.t();
        return 5 === b || 6 === b || 7 === b;
      };
      a.b.eo = function (a) {
        return a
          .replace(/^http:/, "")
          .replace(/^\/\//, "")
          .replace(/^www[^.]*\./, "")
          .split("/")[0];
      };
      a.b.ep = function (b) {
        b = b || a.b.k();
        return !!/iPhone|iPod/.exec(b);
      };
      a.b.eq = function (a, b) {
        return P(a, function (a) {
          return m(a.values, b[a.lookup] || "");
        });
      };
      a.b.er = function (a, b) {
        if (
          "string" === typeof a &&
          "string" === typeof b &&
          a.indexOf &&
          0 == a.indexOf(b)
        ) {
          var c = p(b)[0] || "",
            d = p(t(b))[1],
            d = a.indexOf(d, b.length);
          if (0 < d) return c + a.substr(d);
        }
      };
      a.b.es = function (a, b) {};
      a.b.et = function (a) {};
      a.b.nextElementSibling = function (a) {
        if (a.nextElementSibling)
          return a.nextElementSibling;
        for (; (a = a.nextSibling); )
          if (1 === a.nodeType) return a;
      };
      a.b.eu = function (a, b) {
        var c = [f];
        return "undefined" === typeof a ||
          null === a ||
          !1 === a ||
          !z(a) ||
          (a.nodeName &&
            "IMG" == a.nodeName &&
            !a.complete) ||
          v(c, function (b) {
            return b(a);
          }).length ||
          !0 === a[M]
          ? !1
          : !0;
      };
      a.b.ev = function (b) {
        b = b.match(Ua);
        var c = !1;
        b &&
          ((b = a.b.af(function (a) {
            return parseInt(a, 10);
          }, b)),
          (c = {
            top: b[1],
            right: b[2],
            bottom: b[3],
            left: b[4],
          }));
        return c;
      };
      a.b.ew = c;
      a.b.ex = void 0;
      a.b.ey = function (a, b) {};
      a.b.ez = function () {
        var b;
        a.d.c()
          ? (b = 2)
          : ((b = a.l.a()),
            (b =
              b.parent === window.top
                ? 2
                : location && location.ancestorOrigins
                ? 1
                : 0));
        return b;
      };
      a.b.fa = function (b, c, d) {
        if (!b || !c) return !1;
        var e = [];
        "number" !== typeof d && (d = 50);
        for (var f = 0; f < d; f++)
          if (c != c.parent) {
            if ((b = a.l.b(b, c))) e.push(b);
            else break;
            c = c.parent;
          } else break;
        return e;
      };
      a.b.aj = function () {
        return "undefined" === typeof AB_SCAFFOLD
          ? !1
          : 0 !== O;
      };
      a.b.z = Oa;
      a.b.x = function () {
        return a.b.aj() && 2 === O;
      };
      a.b.fb = function () {
        return "undefined" !== typeof O && 2 === O;
      };
      a.b.fc = function () {
        return "undefined" === typeof AB_SCAFFOLD
          ? !0
          : 1 === O || 0 === O;
      };
      a.b.fd = function (a, b, c) {};
      a.b.fe = function (a, b, c) {
        return Q(a) && Q(b) && Q(c)
          ? x.abs(a - b) <= c
          : !1;
      };
      a.b.ff = function (a) {
        if (
          !a ||
          "object" !== typeof a ||
          "number" !== typeof a.zr
        )
          return !1;
        var b = J(a.zr);
        return b && b === a;
      };
      a.b.fg = function () {};
      a.b.fh = Q;
      a.b.fi = function (a, b) {};
    })();
    (function () {
      a.l = a.l || {};
      a.l.d = function (a, t) {};
      a.l.e = function (a) {
        try {
          var t = typeof a.location.toString;
          if ("undefined" === t || "unknown" === t)
            return !0;
          var p = typeof a.document;
          if ("undefined" === p || "unknown" === p)
            return !0;
          var u =
            a.innerWidth ||
            a.document.documentElement.clientWidth ||
            a.document.body.clientWidth ||
            0;
          return "number" !==
            typeof (a.screenX || a.screenLeft || 0) ||
            "number" !== typeof u
            ? !0
            : !1;
        } catch (k) {
          return !0;
        }
      };
    })();
    (function () {
      function b(b, m) {
        m = m || a.b.ej(b);
        try {
          return m && m.frameElement;
        } catch (h) {
          return !1;
        }
      }
      function t(b, m) {
        if (!b) return !1;
        var h = 0,
          g = [b],
          c;
        for (m = m || 10; h < m; ) {
          h++;
          try {
            if (
              ((b = (c = b.frameElement) && a.b.ej(c)),
              c && b && !a.l.e(b))
            )
              g.push(b);
            else return g;
          } catch (e) {
            break;
          }
        }
        return g;
      }
      function p(a, b, h) {
        function g(a, b, f) {
          var d = [];
          a && d.push(a);
          f = f || 0;
          if (10 < f || !a || !a.frames) return d;
          var z;
          try {
            z = isNaN(a.frames.length)
              ? 100
              : a.frames.length;
          } catch (h) {
            z = 100;
          }
          for (var l = 0; l < z; l++)
            try {
              try {
                if (void 0 == a.frames[l]) break;
              } catch (h) {
                break;
              }
              b && !u(a.frames[l])
                ? d.push(a.frames[l])
                : (d = d.concat(g(a.frames[l], b, f + 1)));
            } catch (h) {
              break;
            }
          return d;
        }
        return g(a, b, h);
      }
      function u(a) {
        for (var b, h = 0, g = k.length; h < g; h++)
          k[h].win == a && (b = k[h]);
        if (!b) {
          b = { win: a, friendly: !1 };
          try {
            a.document && (b.friendly = !0);
          } catch (c) {}
        }
        return b.friendly;
      }
      var k = [];
      a.l = a.l || {};
      a.l.f = u;
      a.l.c = t;
      a.l.g = function (b, m) {
        var h;
        a.b.forEach(
          b.getElementsByTagName("iframe"),
          function (a) {
            if (
              a &&
              a.contentWindow &&
              a.contentWindow == m
            )
              return (h = a), !1;
          }
        );
        return h;
      };
      a.l.h = function (b, m, h) {
        b = t(b).pop();
        b = p(b, !0);
        for (var g = 0, c = b.length; g < c; g++)
          if (b[g] == m) {
            if (h && m.parent && a.l.e(m.parent)) break;
            return !0;
          }
        return !1;
      };
      a.l.b = b;
      a.l.i = function (a, b) {
        b = "number" == typeof b && 0 < b ? b : 15;
        var h = [],
          g;
        try {
          if (a) {
            g = a.top;
            for (var c = 0; c < b; c++)
              if ((a = a.parent) && a != a.top) h.push(a);
              else break;
            h.push(g);
          }
        } catch (e) {
          return [];
        }
        return h;
      };
      a.l.a = function () {
        if (a.d.c()) return window.top;
        for (var b = 0, m = window; 50 > b; ) {
          b++;
          if (m === window.top || a.l.e(m.parent)) break;
          m = m.parent;
        }
        return m;
      };
      a.l.j = function (a) {
        if ((a = b(a)))
          try {
            return a.parentNode;
          } catch (m) {}
        return null;
      };
      a.l.k = p;
      a.l.l = function (a, m) {
        if (!a) return !1;
        var h = 0,
          g = [];
        for (m = m || 10; h < m; )
          if ((h++, (a = b(a)))) g.push(a);
          else return g;
      };
      a.l.m = function (a) {};
      a.l.n = function (b) {
        if (!b) return null;
        try {
          if (b.moatHostileIframe) return null;
          var m = b.getAttribute("src");
          if (
            m &&
            m.slice &&
            "http" === m.slice(0, 4) &&
            a.b.eo(m) != a.b.eo(Ra.location.toString())
          )
            return (b.moatHostileIframe = !0), null;
          var h =
            b &&
            (b.contentDocument ||
              (b.contentWindow &&
                b.contentWindow.document));
          if (
            h &&
            "string" === typeof h.location.toString()
          )
            return h;
          b.moatHostileIframe = !0;
          return null;
        } catch (g) {
          return (b.moatHostileIframe = !0), null;
        }
      };
    })();
    (function () {
      function b(m, h) {
        return (function () {
          var g = !1;
          return function (c) {
            try {
              return m && m.apply
                ? m.apply(null, arguments)
                : m(c);
            } catch (w) {
              if (!g) {
                g = !0;
                var e = new D().getTime();
                this.MoatETS || (this.MoatETS = e);
                this.MoatEMC || (this.MoatEMC = 0);
                var f = 36e5 <= e - this.MoatETS,
                  d = "";
                try {
                  d = m.toString();
                } catch (E) {
                  d = "failed";
                }
                d =
                  w.name +
                  " in closure (cb): " +
                  w.message +
                  ", stack=" +
                  w.stack +
                  ", \ncb=" +
                  d +
                  "\n";
                if (!f && 10 > this.MoatEMC) {
                  this["Moat#EMC"]++;
                  try {
                    var z = "px.moatads.com",
                      l =
                        "undefined" !== typeof omidNative &&
                        ("undefined" === typeof Image ||
                          (Image && Image._MoatProxyOf)),
                      B = l ? "" : document.referrer,
                      v =
                        "undefined" !==
                          typeof AB_SCAFFOLD &&
                        2 === AB_SCAFFOLD.type,
                      k =
                        "undefined" === typeof L
                          ? v
                            ? "HEARSTMAGAZINES2_BETA"
                            : "HEARSTMAGAZINES2"
                          : L,
                      q =
                        "undefined" !== typeof a &&
                        a.d &&
                        a.d.l
                          ? a.d.l
                          : "",
                      r =
                        "https://" +
                        z +
                        "/pixel.gif?e=24&d=data%3Adata%3Adata%3Adata&i=" +
                        escape(k) +
                        "&k=" +
                        escape(d) +
                        "&ar=" +
                        escape("fde231f50fe-clean") +
                        "&iw=" +
                        escape("4a7adaa") +
                        "&bq=" +
                        escape(q) +
                        "&j=" +
                        escape(B) +
                        "&cs=" +
                        new D().getTime();
                    if (l) omidNative.sendUrl(r);
                    else {
                      var y = new Image(1, 1);
                      y.src = r;
                    }
                  } catch (E) {}
                } else if (f) {
                  this.MoatEMC = 1;
                  this["Moat#ETS"] = e;
                  try {
                    (z = "px.moatads.com"),
                      (B = (l =
                        "undefined" !== typeof omidNative &&
                        ("undefined" === typeof Image ||
                          (Image && Image._MoatProxyOf)))
                        ? ""
                        : document.referrer),
                      (v =
                        "undefined" !==
                          typeof AB_SCAFFOLD &&
                        2 === AB_SCAFFOLD.type),
                      (k =
                        "undefined" === typeof L
                          ? v
                            ? "HEARSTMAGAZINES2_BETA"
                            : "HEARSTMAGAZINES2"
                          : L),
                      (q =
                        "undefined" !== typeof a &&
                        a.d &&
                        a.d.l
                          ? a.d.l
                          : ""),
                      (r =
                        "https://" +
                        z +
                        "/pixel.gif?e=24&d=data%3Adata%3Adata%3Adata&i=" +
                        escape(k) +
                        "&k=" +
                        escape(d) +
                        "&ar=" +
                        escape("fde231f50fe-clean") +
                        "&iw=" +
                        escape("4a7adaa") +
                        "&bq=" +
                        escape(q) +
                        "&j=" +
                        escape(B) +
                        "&cs=" +
                        new D().getTime()),
                      l
                        ? omidNative.sendUrl(r)
                        : ((y = new Image(1, 1)),
                          (y.src = r));
                  } catch (E) {}
                }
              }
              h &&
                b(function () {
                  h(w);
                })();
            }
          };
        })();
      }
      function t(b, h) {
        if (
          !b ||
          "string" !== typeof h ||
          !b[h] ||
          b == window
        )
          return !1;
        if (
          "string" === typeof b.nodeName &&
          ("OBJECT" === b.nodeName ||
            "EMBED" === b.nodeName)
        ) {
          var g = a && a.c && a.c[h];
          if (g && g !== b[h]) return g;
        }
        return !1;
      }
      function p(m, h) {
        var g,
          c = b(function (a) {
            delete W[g];
            return m && m.apply
              ? m.apply(null, arguments)
              : m(a);
          });
        window &&
          window.setTimeout &&
          ((g = window.setTimeout(c, h)),
          1 == g &&
            (a.b.a(g), (g = window.setTimeout(c, h))),
          (W[g] = !0));
        return g;
      }
      function u(b) {
        return function () {
          if (!I || !I[b]) return !1;
          var h = I[b].callback(I[b].params);
          if ("boolean" === typeof h && !1 === h)
            return a.b.a(I[b].tid), (I[b] = !1);
          I[b].tid = p(u(b), I[b].interval);
        };
      }
      var k = {},
        n = {};
      a.o = a.o || {};
      a.o.a = function (m, h, g, c) {
        var e,
          f,
          d = !1;
        "touchstart" === h &&
          a.d.m &&
          (d = { passive: !0 });
        c
          ? k[h + c]
            ? (g = k[h + c])
            : ((g = b(g)), (k[h + c] = g))
          : (g = b(g));
        if (m.addEventListener)
          (c = "addEventListener"), (e = "");
        else if (m.attachEvent)
          (c = "attachEvent"), (e = "on");
        else return !1;
        if ((f = t(m, c)))
          try {
            f.call(m, e + h, g, d);
          } catch (z) {
            m[c](e + h, g, d);
          }
        else if (m && c && m[c])
          try {
            m[c](e + h, g, d);
          } catch (z) {
            return !1;
          }
      };
      a.o.b = t;
      a.o.c = function (a, b, g, c) {
        var e = 0,
          f = function () {
            e += 1;
            !0 !== a() &&
              (e < b
                ? p(f, g)
                : "function" === typeof c && c());
          };
        f();
      };
      a.o.d = function (m, h) {
        m = b(m);
        var g;
        window &&
          window.setInterval &&
          ((g = window.setInterval(m, h)),
          1 == g &&
            (a.b.b(g), (g = window.setInterval(m, h))),
          wa.push(g));
        return g;
      };
      a.o.e = p;
      a.o.f = function (a) {
        return p(a, 0);
      };
      a.o.g = function (b) {
        I[b] && (a.b.a(I[b].tid), (I[b] = !1));
      };
      a.o.h = function () {
        return I;
      };
      a.o.i = function (a, b, g, c) {
        var e, f;
        g = c ? k[b + c] : g;
        delete k[b + c];
        if (!a) return !1;
        if (a.removeEventListener)
          (c = "removeEventListener"), (e = "");
        else if (a.detachEvent)
          (c = "detachEvent"), (e = "on");
        else return !1;
        if ((f = t(a, c)))
          try {
            f.call(a, e + b, g, !1);
          } catch (d) {
            a[c](e + b, g, !1);
          }
        else
          try {
            a[c](e + b, g, !1);
          } catch (d) {}
      };
      a.o.j = b;
      a.o.k = k;
      a.o.l = function (b, h) {
        n[b] &&
          n[b][h] &&
          (delete n[b][h], a.b.ee(n[b]) && delete n[b]);
      };
      a.o.m = function (b, h, g, c) {
        n[b] || (n[b] = {});
        if (n[b][h]) {
          b =
            "adNum " +
            b +
            " cannot set duplicate timeout: " +
            h;
          try {
            var e =
                "undefined" !== typeof omidNative &&
                ("undefined" === typeof Image ||
                  (Image && Image._MoatProxyOf)),
              f = e ? "" : document.referrer,
              d =
                "undefined" !== typeof AB_SCAFFOLD &&
                2 === AB_SCAFFOLD.type,
              z =
                "undefined" !== typeof a && a.d && a.d.l
                  ? a.d.l
                  : "",
              l =
                "https://px.moatads.com/pixel.gif?e=24&d=data%3Adata%3Adata%3Adata&i=" +
                escape(
                  "undefined" === typeof L
                    ? d
                      ? "HEARSTMAGAZINES2_BETA"
                      : "HEARSTMAGAZINES2"
                    : L
                ) +
                "&k=" +
                escape(b) +
                "&ar=" +
                escape("fde231f50fe-clean") +
                "&iw=" +
                escape("4a7adaa") +
                "&bq=" +
                escape(z) +
                "&j=" +
                escape(f) +
                "&cs=" +
                new D().getTime();
            e
              ? omidNative.sendUrl(l)
              : (new Image(1, 1).src = l);
          } catch (v) {}
        } else if (
          ((n[b][h] = {}),
          (n[b][h].id = g),
          c && "object" === typeof c)
        )
          for (var B in c) n[b][h][B] = c[B];
      };
      a.o.n = u;
      a.o.o = function (m, h, g, c) {
        if (!c) return !1;
        c += "";
        I[c] && a.b.a(I[c].tid);
        I[c] = {};
        I[c].callback = b(m);
        I[c].params = h;
        I[c].interval = g;
        I[c].tid = p(u(c), g);
      };
      a.o.p = function (a, b) {
        var g = n[a];
        if (g) return g[b];
      };
    })();
    (function () {
      function b() {
        a.d.n(10);
        return { url: "", isCorrect: !1 };
      }
      function t(b) {
        if (!a.d.c()) return !1;
        if (
          (b =
            (b = b || window) &&
            b.top &&
            b.top.location &&
            b.top.location.href)
        )
          return a.d.n(4), { url: b, isCorrect: !0 };
      }
      function p(b, f) {
        var d = f || window;
        b = b || c(d);
        if (!b) return !1;
        a.d.n(2);
        return { url: b, isCorrect: !1 };
      }
      function u(b) {
        b = b && b.document && b.document.referrer;
        if (!b) return !1;
        a.d.n(3);
        return { url: b, isCorrect: !1 };
      }
      function k(b, c, d) {
        b = h(b);
        if (!b) return !1;
        b.parentIsTop ? a.d.n(3) : a.d.n(9);
        c = !0;
        try {
          var z;
          URL &&
          URL.constructor &&
          URL.constructor.name &&
          "Function" === URL.constructor.name
            ? (z = new URL(b.url))
            : ((z = document.createElement("a")),
              (z.href = b.url));
          c = "" === z.pathname || "/" === z.pathname;
        } catch (l) {}
        return { url: b.url, isCorrect: !c };
      }
      function n(b, f) {
        f = f || c(b);
        if (!f) return !1;
        var d = g(b, f);
        if (a.b.ef(d))
          return a.d.n(6), { url: d, isCorrect: !1 };
      }
      function m(b, c, d) {
        var z = "",
          l = !1;
        c = (c = c || a.b.az()) && c.sourceUrl;
        d = d || a.b.cc();
        if (c || d)
          c
            ? ((z = c), (l = !0), a.d.n(7))
            : ((z = (b = a.b.er(b.document.referrer, d))
                ? b
                : a.b.ax(d) || d),
              a.d.n(8));
        return { url: z, isCorrect: l };
      }
      function h(b, c, d, z) {
        c = a.d.c();
        if (!b || c) return !1;
        c = b.document && b.document.referrer;
        if (!c || !a.b.ef(c)) return !1;
        if (b.parent === b.top)
          return { url: c, parentIsTop: !0 };
        b = location && location.ancestorOrigins;
        d = location && location.origin;
        if (!b || 0 === b.length || !d) return !1;
        z = !1;
        for (var l, h = 0; h < b.length; h++)
          if (((l = b[h]), d !== l)) {
            if (z) return !1;
            z = !0;
            d = l;
          }
        return z && 0 === c.search(b[b.length - 1])
          ? { url: c, parentIsTop: !1 }
          : !1;
      }
      function g(a, b) {
        var c;
        c = a && a.location && a.location.hostname;
        c =
          "string" !== typeof c
            ? !1
            : c.match(
                /^([^\.]+\.)*(googlesyndication\.com|doubleclick\.net|adnxs\.com)$/
              ) && a.location.href;
        if (!c || !b) return !1;
        var z = encodeURIComponent(b).replace(
          /[.*+^${}()|[\]\\]/g,
          "\\$&"
        );
        return (c = c.match(
          new RegExp(
            "[?&](?:url|referrer)=(" + z + "(?:%2F[^&]*|$))"
          )
        ))
          ? decodeURIComponent(c[1])
          : !1;
      }
      function c(a) {
        a = a || window;
        return (a =
          a.location && a.location.ancestorOrigins)
          ? 0 === a.length
            ? !1
            : a[a.length - 1]
          : !1;
      }
      a.k = a.k || {};
      a.k.b = function (e) {
        e = e || window;
        var f = t(e);
        if (f && f.url) return f;
        var f = a.l.a(),
          d = m(f);
        if (d && d.url) return d;
        var d = c(e),
          z = n(f, d);
        return (z && z.url) || ((z = k(f)) && z.url)
          ? z
          : (e = p(d, e)) && e.url
          ? e
          : (e = u(f))
          ? e
          : b();
      };
      a.k.c = b;
      a.k.d = t;
      a.k.e = p;
      a.k.f = function (b, c) {
        var d = c || window;
        if (!b || b.parent !== d.top) return !1;
        d = b.document && b.document.referrer;
        if (!d) return !1;
        a.d.n(3);
        return { url: d, isCorrect: !1 };
      };
      a.k.g = u;
      a.k.h = k;
      a.k.i = n;
      a.k.j = m;
      a.k.k = h;
      a.k.l = g;
      a.k.m = function (b) {
        b = b || window;
        if ("string" === typeof a.d.o) return a.d.o;
        var c = !1,
          d,
          z = /^https?:\/\/(.*?)\/([^?#]*)/;
        a.d.c()
          ? ((c = b.location.hostname.replace("www.", "")),
            (c += b.location.pathname))
          : ((d = a.l.a()),
            d.parent === b.top &&
              (c = d.document.referrer) &&
              (b = z.exec(c)) &&
              (c = b[1].replace("www.", "") + "/" + b[2]));
        "string" === typeof c &&
          "/" === c.charAt(c.length - 1) &&
          (c = c.substr(0, c.length - 1));
        return c;
      };
      a.k.a = c;
    })();
    (function () {
      function b(a) {
        var b,
          c,
          d,
          e = 0,
          w = 0;
        try {
          ((b = a.document),
          (c = b.documentElement),
          (d = b.body),
          "undefined" !== typeof a.innerWidth)
            ? ((e = a.innerWidth), (w = a.innerHeight))
            : ("CSS1Compat" === b.compatMode &&
                5 !== b.documentMode) ||
              !d ||
              "undefined" === typeof d.clientWidth
            ? c &&
              "undefined" !== typeof c.clientWidth &&
              ((e = c.clientWidth), (w = c.clientHeight))
            : ((e = d.clientWidth), (w = d.clientHeight));
        } catch (f) {}
        return {
          width: e,
          height: w,
          left: 0,
          right: e,
          top: 0,
          bottom: w,
        };
      }
      function t() {
        if (!m || !m.screen) return null;
        var a = m.screen;
        return {
          width: a.width,
          height: a.height,
          availWidth: a.availWidth,
          availHeight: a.availHeight,
        };
      }
      function p() {
        var a = m;
        if (!a) return !1;
        try {
          var w = a.document && a.document.body,
            r = a.document && a.document.documentElement;
        } catch (h) {}
        try {
          var g = t();
          g &&
            ((c = g.availWidth),
            (e = g.availHeight),
            (f = g.width),
            (d = g.height));
        } catch (h) {
          (c = c || 0),
            (e = e || 0),
            (f = f || 0),
            (d = d || 0);
        }
        g = b(a);
        z = g.width;
        l = g.height;
        try {
          (B =
            a.outerWidth ||
            (a.document &&
              a.document.body &&
              a.document.body.offsetWidth) ||
            0),
            (v =
              a.outerHeight ||
              (a.document &&
                a.document.body &&
                a.document.body.offsetHeight) ||
              0);
        } catch (h) {
          v = B = 0;
        }
        w &&
          r &&
          ((A = x.max(
            w.scrollHeight,
            w.offsetHeight,
            r.clientHeight,
            r.scrollHeight,
            r.offsetHeight
          )),
          (q =
            w.scrollTop ||
            r.scrollTop ||
            a.pageYOffset ||
            0));
      }
      function u() {
        if ("number" === typeof a.b.s()) return !1;
        var b = a.b.k();
        return (b =
          b && b.match(/Chrom(e|ium)\/([0-9]+)\./))
          ? parseInt(b[2], 10)
          : !1;
      }
      var k,
        n,
        m,
        h = window != window.parent,
        g = h && !k,
        c = 0,
        e = 0,
        f = 0,
        d = 0,
        z = 0,
        l = 0,
        B = 0,
        v = 0,
        A = 0,
        q = 0,
        r =
          0 <=
          String(Function.prototype.toString).indexOf(
            "[native code]"
          ),
        y,
        w,
        E,
        J,
        H,
        G,
        T,
        K,
        ga,
        X,
        S = (function () {
          var b;
          return function () {
            if ("undefined" !== typeof b) return b;
            b = { isInApp: 0, env: "Not app" };
            a.b.o()
              ? ((b.isInApp = 1), (b.env = "iOS"))
              : a.b.p() &&
                ((b.isInApp = 1), (b.env = "Android"));
            return b;
          };
        })();
      a.d = a.d || {};
      a.d.c = function () {
        return n;
      };
      a.d.r = function () {
        n = a.d.p() || a.d.q();
      };
      a.d.e = function () {
        return m;
      };
      a.d.s = function () {
        return h;
      };
      a.d.t = function () {
        return g;
      };
      a.d.u = function () {
        if (a.f.c() !== a.f.e.toString()) return !1;
        var b = a.f.b([26, 37, 30, 43, 45]),
          c = a.f.b([28, 40, 39, 31, 34, 43, 38]),
          d = a.f.b([41, 43, 40, 38, 41, 45]);
        return (
          !S().isInApp &&
          ga &&
          r &&
          !a.b.j(window[b], !0) &&
          !a.b.j(window[c], !0) &&
          !a.b.j(window[d], !0)
        );
      };
      a.d.v = function () {
        if (a.f.c() !== a.f.d.toString()) return !1;
        var b = a.f.b([48, 30, 27, 29, 43, 34, 47, 30, 43]);
        return (
          window && window.navigator && window.navigator[b]
        );
      };
      a.d.w = function () {
        if (!X) return !1;
        var b = a.f.b([48, 30, 27, 29, 43, 34, 47, 30, 43]);
        if (navigator && navigator[b]) return !0;
        if (66 > u()) {
          var b = a.f.b([28, 33, 43, 40, 38, 30]),
            c = a.f.b([43, 46, 39, 45, 34, 38, 30]),
            d = a.f.b([28, 40, 39, 39, 30, 28, 45]);
          return (
            "undefined" !== typeof window[b] &&
            !(window[b] && window[b][c] && window[b][c][d])
          );
        }
        return !1;
      };
      a.d.x = S;
      a.d.y = p;
      a.d.z = t;
      a.d.aa = b;
      a.d.ab = function () {
        return c;
      };
      a.d.ac = function () {
        return e;
      };
      a.d.ad = function () {
        return f;
      };
      a.d.ae = function () {
        return d;
      };
      a.d.af = function () {
        return z;
      };
      a.d.ag = function () {
        return l;
      };
      a.d.ah = function () {
        return B;
      };
      a.d.ai = function () {
        return v;
      };
      a.d.f = function () {
        return A;
      };
      a.d.aj = function () {
        return q;
      };
      a.d.b = function () {
        return r;
      };
      a.d.ak = function () {
        return y;
      };
      a.d.h = function () {
        return w;
      };
      a.d.al = function () {
        return G;
      };
      a.d.am = function () {
        return T;
      };
      a.d.an = function () {
        return K;
      };
      a.d.k = function () {
        return ga;
      };
      a.d.ao = u;
      k = a.l.e(window.parent);
      g = (h = window != window.parent) && !k;
      y = y =
        -1 !== a.b.k().toLowerCase().indexOf("firefox");
      w = a.b.u();
      E = !!window.chrome && a.b.j(window.chrome.csi, !0);
      J = !!(
        "opr" in window &&
        "addons" in window.opr &&
        a.b.j(window.DetachedViewControlEvent)
      );
      H =
        !E &&
        Error.propertyIsEnumerable("captureStackTrace") &&
        void 0 !== window.onorientationchange;
      G = J || H;
      J =
        E &&
        ((!!window.Atomics && !!window.Atomics.notify) ||
          !!window.EnterPictureInPictureEvent ||
          !!window.chrome.webstore);
      E = E && !G && void 0 !== window.onorientationchange;
      T = J || E;
      K =
        (navigator &&
          navigator.appVersion &&
          -1 <
            navigator.appVersion.search(/Edge\/\d*.\d*/) &&
          !document.documentMode &&
          !!window.StyleMedia) ||
        !!a.b.s();
      ga =
        0 <
          Object.prototype.toString
            .call(window.HTMLElement)
            .indexOf("Constructor") ||
        (window.HTMLVideoElement &&
          window.HTMLVideoElement.prototype &&
          "webkitWirelessVideoPlaybackDisabled" in
            window.HTMLVideoElement.prototype);
      X = J && 40 <= u();
      m = (n = k ? !1 : !a.l.e(window.top))
        ? window.top
        : g
        ? window.parent
        : window;
      p();
    })();
    (function () {
      function b(a) {
        for (
          var b = "", c = 0, e = 0, h, g, q, r = 0;
          r < a.length;
          ++r
        )
          for (
            q = a.charCodeAt(r), g = 255 < q ? 0 : 1;
            2 > g;
            ++g
          )
            (c =
              0 === g
                ? c | (((q & 65280) / 256) << e)
                : c | ((q & 255) << e)),
              (e += 8),
              13 < e &&
                ((h = c & 8191),
                88 < h
                  ? ((c >>= 13), (e -= 13))
                  : ((h = c & 16383),
                    (c >>= 14),
                    (e -= 14)),
                (b += f.charAt(h % 91)),
                (b += f.charAt((h / 91) | 0)));
        0 < e &&
          ((b += f.charAt(c % 91)), 7 < e || 90 < c) &&
          (b += f.charAt((c / 91) | 0));
        return b;
      }
      function t(a) {
        var b = [];
        if ("undefined" === typeof a) return b;
        for (var c = 0; c < a.length; c++) {
          var e = a.charCodeAt(c);
          128 > e
            ? b.push(e)
            : 2048 > e
            ? b.push(192 | (e >> 6), 128 | (e & 63))
            : 55296 > e || 57344 <= e
            ? b.push(
                224 | (e >> 12),
                128 | ((e >> 6) & 63),
                128 | (e & 63)
              )
            : c < a.length - 1 &&
              (c++,
              (e =
                65536 +
                (((e & 1023) << 10) |
                  (a.charCodeAt(c) & 1023))),
              b.push(
                240 | (e >> 18),
                128 | ((e >> 12) & 63),
                128 | ((e >> 6) & 63),
                128 | (e & 63)
              ));
        }
        return b;
      }
      function p(a) {
        if ("function" !== typeof window.btoa) return "";
        for (var b = [], c = 0; c < a.length; c++)
          b.push(String.fromCharCode(a[c]));
        return btoa(b.join(""));
      }
      function u() {
        var a = (19).toString(2).length - 1,
          b = 1;
        return function () {
          b <<= 1;
          0 != b >> a && (b ^= 19);
          return b;
        };
      }
      function k(a, b) {
        return 0 === b
          ? a
          : 126 < a + b
          ? 30 + (b - (126 - a) - 1)
          : 30 > a + b
          ? 126 + (b + (a - 30) + 1)
          : a + b;
      }
      function n(a, b) {
        return 0 === b
          ? a
          : 30 > a - b
          ? 126 - (b - (a - 30) - 1)
          : 126 < a - b
          ? 30 - (b + (126 - a) + 1)
          : a - b;
      }
      function m(a) {
        return 9 === a ? 30 : 10 === a ? 31 : a;
      }
      function h(a) {
        return 30 === a ? 9 : 31 === a ? 10 : a;
      }
      function g(a) {
        return String(a)
          .split("&")
          .join("%26")
          .split("=")
          .join("%3D");
      }
      function c() {
        var b =
            (document &&
              document.documentElement &&
              document.documentElement.style) ||
            {},
          c = !!window.opera,
          e =
            "undefined" !== typeof InstallTrigger ||
            "MozAppearance" in b,
          f = a.d.k();
        return [
          !0 ===
          (!!window.chrome &&
            ((!!window.Atomics &&
              !!window.Atomics.notify) ||
              !!window.EnterPictureInPictureEvent ||
              !!window.chrome.webstore))
            ? 1
            : 0,
          !0 === e ? 1 : 0,
          !0 === c ? 1 : 0,
          !0 === f ? 1 : 0,
          !0 ===
          (!!document.documentMode ||
            !!window.ActiveXObject ||
            ("-ms-scroll-limit" in b &&
              "-ms-ime-align" in b))
            ? 1
            : 0,
        ];
      }
      function e() {
        for (var a = c(), b = !1, e = 0; e < a.length; e++)
          if (1 === a[e]) {
            b = e;
            break;
          }
        if (!1 !== b) var f = b;
        return f;
      }
      var f;
      f = a.b.d;
      a.f = a.f || {};
      a.f.f = 0;
      a.f.d = 1;
      a.f.g = 2;
      a.f.e = 3;
      a.f.h = 4;
      a.f.i = b;
      a.f.j = t;
      a.f.k = p;
      a.f.l = function (a) {
        for (var c = "", e = 0; e < a.length; e++)
          var f = a.charCodeAt(e) ^ 85,
            c = c + String.fromCharCode(f);
        return b(c);
      };
      a.f.m = function (a) {
        a = "string" === typeof a ? t(a) : a;
        for (
          var b = x.floor(1e3 * x.random()) % 251,
            c = [(40 * b) % 251],
            e = 0;
          e < a.length;
          e++
        )
          (b = (b * b + (e + 1)) % 251), c.push(a[e] ^ b);
        return p(c);
      };
      a.f.n = u;
      a.f.o = k;
      a.f.p = n;
      a.f.q = m;
      a.f.r = h;
      a.f.s = function (a) {
        for (var b = "", c = u(), e = 0; e < a.length; e++)
          var f = k(
              m(a.charCodeAt(e)),
              0 === e % 2 ? c() : -1 * c()
            ),
            f = h(f),
            b = b + String.fromCharCode(f);
        return b;
      };
      a.f.t = function (a) {
        for (var b = "", c = u(), e = 0; e < a.length; e++)
          var f = c(),
            f = h(
              n(
                m(a[e].charCodeAt(0)),
                0 === e % 2 ? f : -1 * f
              )
            ),
            b = b + String.fromCharCode(f);
        return b;
      };
      a.f.u = g;
      a.f.v = function (b, c) {
        var e = [];
        a.b.forEach(
          b,
          function (a, b) {
            if (
              void 0 !== a &&
              ("string" === typeof (c ? a[c] : a) ||
                "number" === typeof (c ? a[c] : a) ||
                "boolean" === typeof (c ? a[c] : a))
            ) {
              var d = g(c ? a[c] : a);
              e.push(
                ("number" === typeof b ? "" : b + "=") + d
              );
            }
          },
          null,
          !0
        );
        e.sort();
        return e.join("&");
      };
      a.f.b = function (a) {
        for (var b = "", c = 0; c < a.length; c++)
          a.hasOwnProperty(c) && (b += f[a[c]]);
        return b;
      };
      a.f.w = c;
      a.f.x = e;
      a.f.c = e;
    })();
    (function (a) {
      function t() {
        return !1;
      }
      function p() {
        var h = a.d.ay,
          g = 53 <= a.d.ao();
        return g ? g : h && -1 < h.search("Spotify");
      }
      a.d.ap = "26";
      a.b.fb() && (a.d.ap += "_beta");
      a.d.aq = "MoatSuperV";
      a.d.ar = "-";
      a.d.n = function (h) {
        "string" !== typeof a.d.o && (a.d.ar = h);
      };
      a.d._sdrc = 4;
      a.d._sprg = { 4506183092: 32 };
      a.d.as = a.d.aq + a.d.ap;
      a.d.l = 0;
      a.d.at = (window && window["Moat#G" + a.d.ap]) || {};
      a.d.au = "Moat#G" + a.d.ap;
      window[a.d.au] = a.d.at;
      a.d.at.a ||
        (a.d.at.a = x.floor(x.random() * x.pow(10, 12)));
      a.d.av = x.floor(x.random() * x.pow(10, 12));
      var u = a.k.b();
      a.d.aw = u.url;
      a.d.ax = u.isCorrect;
      u = a.o.j(function () {
        return navigator.userAgent;
      });
      a.d.ay = u();
      "string" !== typeof a.d.ay && (a.d.ay = "");
      a.d.az = function () {
        return a.a.a;
      };
      a.d.ba = (function () {
        return function () {};
      })();
      a.d.bb = function () {
        return (
          !!window.omid3p &&
          "undefined" !== typeof window.omid3p.customNative
        );
      };
      a.d.bc = function () {
        return !1;
      };
      a.d.bd = (function () {
        var h = a.d.bc() || a.d.bb();
        return function () {
          return h;
        };
      })();
      a.d.be = new D().getTime();
      a.d.bf = !0;
      a.d.bg = !0;
      a.d.bh = !1;
      a.d.bh = !0;
      a.d.bi = function (a, b) {
        a = a.split(".");
        b = b.split(".");
        for (var c = 0; 3 > c; c++) {
          var e = parseInt(a[c]),
            f = parseInt(b[c]);
          if (e && isNaN(f)) return 1;
          if (f && isNaN(e)) return 0;
          if (e > f) return 1;
          if (f > e) return 0;
        }
        return 2;
      };
      a.d.bj = t;
      a.d.bk = t;
      a.d.bl = t;
      a.d.bm = t;
      a.d.bn = t;
      a.d.bo = t;
      a.d.bp = t;
      a.d.bq = t;
      var k = function () {
        var h = function (c) {
            if (a.d.x().isInApp) return !1;
            var e = a.p && a.p.a();
            if (a.d.br || e || a.d.bs())
              return a.d.br || e || a.d.bs(), !1;
            c = a.b.bl(c, ["$sf"]);
            if (!c) return !1;
            var f = c.ext;
            c = f && f.geom;
            var e = [
                ["exp", "b", "t", "l", "r"],
                "self b t l r h w xiv yiv".split(" "),
              ],
              h,
              g = !1;
            if (f && c && "function" === typeof c)
              try {
                if ((c = c()) && c.win) {
                  if (
                    (a.b.forEach(c.win, function (a) {
                      if (
                        a &&
                        ("number" === typeof a ||
                          "string" === typeof a) &&
                        0 !== parseFloat(a, 10)
                      )
                        return (g = !0), !1;
                    }),
                    !g)
                  )
                    return !1;
                } else return !1;
                if (c.par) return !0;
                for (var f = 0, m = e.length; f < m; f++) {
                  h = e[f][0];
                  for (
                    var q = 1, r = e[f].length;
                    q < r;
                    q++
                  )
                    if (
                      "undefined" === typeof c[h][e[f][q]]
                    )
                      return !1;
                }
                return !0;
              } catch (y) {}
            return !1;
          },
          g,
          c,
          e,
          f;
        a.d.bt = function () {
          if (f) return !0;
          g = window;
          c = document;
          f = h(g);
          e = !(!f && !g.$sf);
          if (!f && a.d.t())
            for (var d = 0; 20 > d && !f; d++) {
              var z = a.l.b(c.body);
              if (!1 !== z && !z) break;
              c = (g = a.b.ej(z)) && g.document;
              f = f || h(g);
              e = e || f || g.$sf;
            }
          return f;
        };
        a.d.bu = function () {
          return a.d.bt() && g;
        };
        a.d.bv = function () {
          "undefined" === typeof f && a.d.bt();
          return e;
        };
      };
      a.d.bw = !1;
      a.d.bx = !1;
      a.d.by = null;
      a.d.bu = function () {
        k();
        return a.d.bu();
      };
      a.d.bv = function () {
        k();
        return a.d.bv();
      };
      a.d.bt = function () {
        k();
        return a.d.bt();
      };
      var n = function () {
        var h = function (c) {
            return a.d.q()
              ? !1
              : a.b.bl(c, [
                  "context",
                  "observeIntersection",
                ])
              ? !0
              : !1;
          },
          g = window,
          c = document,
          e = h(g),
          f = !(!e && !g.context);
        if (!e && a.d.t())
          for (var d = 0; 20 > d && !e; d++) {
            c = a.l.b(c.body);
            if (!1 !== c && !c) break;
            c = (g = a.b.ej(c)) && g.document;
            e = e || h(g);
            f = f || e || g.context;
          }
        a.d.bz = function () {
          return e && g;
        };
        a.d.ca = function (a) {
          "boolean" === typeof a && (e = a);
          return e;
        };
        a.d.cb = function () {
          return f;
        };
      };
      a.d.bz = function () {
        n();
        return a.d.bz();
      };
      a.d.cb = function () {
        n();
        return a.d.cb();
      };
      a.d.ca = function () {
        n();
        return a.d.ca();
      };
      var m = function () {
        var h,
          g = function (c) {
            return (h = a.b.bl(c, [
              "amazonmobileadsviewablebridge",
            ])) &&
              "function" === typeof h.addEventListener &&
              "function" === typeof h.getVersion
              ? !0
              : (h = !1);
          },
          c = document,
          e = window,
          f = g(e),
          d = h && 1.1 <= h.getVersion();
        if (!f && a.d.t())
          for (var z = 0; 20 > z && !f; z++) {
            c = a.l.b(c.body);
            if (!1 !== c && !c) break;
            c = (e = a.b.ej(c)) && e.document;
            f = f || g(e);
            d = d || (h && 1.1 <= h.getVersion());
          }
        a.d.cc = function () {
          return f && e;
        };
        a.d.cd = function () {
          return f;
        };
        a.d.ce = function () {
          return d;
        };
        a.d.cf = function () {
          return h;
        };
      };
      a.d.cc = function () {
        m();
        return a.d.cc();
      };
      a.d.cd = function () {
        m();
        return a.d.cd();
      };
      a.d.ce = function () {
        m();
        return a.d.ce();
      };
      a.d.cf = function () {
        m();
        return a.d.cf();
      };
      a.d.cg = function () {
        return a.d.cd() && a.d.ce();
      };
      a.d.m = (function () {
        var a = !1;
        try {
          var b = Object.defineProperty({}, "passive", {
            get: function () {
              a = !0;
            },
          });
          window.addEventListener("test", null, b);
          window.removeEventListener("test", null, b);
        } catch (c) {}
        return a;
      })();
      a.d.ch = (function () {
        var h;
        return function () {
          if ("undefined" !== typeof h) return h;
          var g = a.d.e(),
            c = a.b.ck();
          var e = c.w,
            c = c.h,
            f = g.innerWidth,
            g = g.innerHeight;
          a.d.e().navigator.standalone
            ? (h = !0)
            : ((e = f / e),
              (c = g / c),
              (e =
                !isNaN(e) &&
                isFinite(e) &&
                0.9 <= e &&
                1.1 >= e),
              (c =
                !isNaN(c) &&
                isFinite(c) &&
                0.75 <= c &&
                1.1 >= c),
              (h = e && c));
          a.d.e().MoatMAK
            ? a.d.e().MoatMAK.namespace && (h = !1)
            : (e = a.d.e()) &&
              e.imraid &&
              "function" ===
                typeof e.imraid.getVendorName &&
              "inmobi" === e.imraid.getVendorName() &&
              (h = !1);
          return h;
        };
      })();
      a.d.ci = function () {
        var h = a.d.x().isInApp ? 0 : void 0;
        a.d.q() ? (h = 3) : a.d.cj() && (h = 1);
        return h;
      };
      a.d.cj = function () {
        var h = a.d.ch(),
          g = a.b.bi(),
          c = a.d.bj(),
          e =
            window.location &&
            ("applewebdata:" === window.location.protocol ||
              "data:" === window.location.protocol);
        if (
          "-" === g ||
          "" === g.replace(/^\s+|\s+$/gm, "") ||
          c ||
          e
        )
          return !1;
        if (h || a.b.aq(a.d.ay)) return !0;
        h = a.b.cy(a.d.d);
        return a.d.ck(h) ? !0 : !1;
      };
      a.d.ck = function (h) {
        var g = !1;
        if (h) {
          var c = [
            a.f.b([
              48, 48, 48, 72, 48, 26, 37, 38, 26, 43, 45,
              72, 28, 40, 38,
            ]),
            a.f.b([
              48, 48, 48, 72, 50, 26, 33, 40, 40, 72, 28,
              40, 38,
            ]),
            a.f.b([
              48, 48, 48, 72, 31, 40, 49, 39, 30, 48, 44,
              72, 28, 40, 38,
            ]),
            a.f.b([
              38, 26, 34, 37, 72, 50, 26, 33, 40, 40, 72,
              28, 40, 38,
            ]),
            a.f.b([
              48, 48, 48, 72, 28, 33, 30, 44, 44, 72, 28,
              40, 38,
            ]),
            a.f.b([
              48, 48, 48, 72, 41, 28, 33, 72, 28, 40, 38,
            ]),
            a.f.b([
              48, 48, 48, 72, 28, 40, 40, 37, 38, 26, 45,
              33, 32, 26, 38, 30, 44, 72, 28, 40, 38,
            ]),
            a.f.b([
              48, 48, 48, 72, 32, 37, 40, 27, 40, 72, 28,
              40, 38,
            ]),
            a.f.b([
              48, 48, 48, 72, 28, 26, 43, 32, 46, 43, 46,
              44, 72, 28, 40, 38,
            ]),
            a.f.b([
              38, 26, 34, 37, 72, 26, 40, 37, 72, 28, 40,
              38,
            ]),
            a.f.b([
              48, 48, 48, 72, 28, 39, 39, 72, 28, 40, 38,
            ]),
            a.f.b([
              54, 56, 59, 44, 41, 40, 43, 45, 44, 72, 28,
              40, 38,
            ]),
            a.f.b([41, 30, 40, 41, 37, 30, 72, 28, 40, 38]),
            a.f.b([
              48, 48, 48, 72, 45, 33, 30, 29, 30, 37, 34,
              45, 30, 72, 28, 40, 38,
            ]),
            a.f.b([
              48, 48, 48, 72, 33, 46, 37, 46, 72, 28, 40,
              38,
            ]),
            a.f.b([48, 48, 48, 72, 33, 37, 39, 72, 27, 30]),
            a.f.b([
              48, 48, 48, 72, 44, 41, 26, 43, 36, 39, 40,
              45, 30, 44, 72, 28, 40, 38,
            ]),
            a.f.b([
              37, 40, 45, 45, 40, 72, 41, 28, 33, 72, 28,
              40, 38,
            ]),
            a.f.b([
              48, 48, 48, 72, 28, 39, 30, 45, 72, 28, 40,
              38,
            ]),
            a.f.b([
              48, 48, 48, 72, 26, 37, 37, 43, 30, 28, 34,
              41, 30, 44, 72, 28, 40, 38,
            ]),
          ];
          a.b.forEach(c, function (a) {
            if (
              0 == h.indexOf(a) ||
              0 == h.indexOf("https://" + a)
            )
              return (g = !0), !1;
          });
        }
        return g;
      };
      a.d.q = (function () {
        var h;
        return function () {
          if ("undefined" !== typeof h) return h;
          var g = a.b.p() || a.b.o();
          return (h = a.d.cl() ? !0 : a.d.cj() ? !1 : g);
        };
      })();
      a.d.cm = function () {
        return (
          a.d.e().webkit &&
          a.d.e().webkit.messageHandlers &&
          a.d.e().webkit.messageHandlers.__z_moat_bridge__
        );
      };
      a.d.cl = function () {
        return !1;
      };
      a.d.cn = function (h) {
        return a.q && a.q.a(h);
      };
      a.d.co = function () {
        return !1;
      };
      a.d.cp = function () {
        return !1;
      };
      a.d.cq = function () {
        return !1;
      };
      a.d.p = function () {
        if (a.d.cq()) return !0;
        var h = !1;
        return a.d.c() || a.d.bx
          ? (h =
              h ||
              a.d.bx ||
              a.d.cj() ||
              a.d.bm() ||
              a.d.cg())
          : h;
      };
      a.d.protocol = a.b.ci();
      a.d.cr = a.b.l();
      a.d.cs = !a.d.c();
      a.d.ct = function (h) {
        var g = 0;
        h = h || window;
        try {
          if (!a.d.c()) {
            var c;
            for (c = 0; 20 > c && h != window.top; c++)
              h = h.parent;
            g = c;
          }
        } catch (e) {}
        return g;
      };
      a.d.c() || a.k.a() || 1 == a.d.ct(a.l.a())
        ? (a.d.cu = 1)
        : (a.d.cu = 0);
      a.d.e()[a.d.au] ||
        (a.d.e()[a.d.au] = new a.d.e().Object());
      a.d.x().isInApp && a.d.c() && a.d.r();
      a.d.cv = function () {
        return !1;
      };
      a.d.cw = function () {
        return !1;
      };
      a.d.d = a.d.e().document.referrer || "";
      try {
        a.d.cx = a.d.e().history && a.d.e().history.length;
      } catch (h) {}
      a.d.cy = function () {
        if (F)
          for (var a in F)
            if (F.hasOwnProperty(a)) return !0;
        return !1;
      };
      a.d.cz = function (h) {
        var g = !0;
        a.b.forEach(
          h && h.parentNode && h.parentNode.childNodes,
          function (c) {
            if (
              a.b.ce(
                ["DIV", "IFRAME", "A", "EMBED", "OBJECT"],
                c.nodeName
              )
            )
              return (g = !1);
          }
        );
        return g;
      };
      a.d.da = function () {
        for (var a in F)
          if (F.hasOwnProperty(a)) {
            var b = F[a];
            if (b && b.aa && b.aa[M]) return !0;
          }
        return !1;
      };
      a.d.db = function () {
        return a.d.x().isInApp
          ? a.d.cj()
            ? a.d.c()
            : a.d.p()
          : a.d.c();
      };
      a.d.bs = function () {
        return a.d.dc && a.d.dc();
      };
      a.d.dd = function () {
        return a.d.bw;
      };
      a.d.de = function () {
        return a.d.bt && a.d.bt();
      };
      a.d.df = function () {
        return a.d.ca && a.d.ca();
      };
      a.d.dg = function () {
        return a.p && a.p.a();
      };
      a.d.dh = function (h) {
        var g = !1;
        a.r &&
          a.r.a() &&
          (h && h.periscopeManager
            ? h.periscopeManager.measurable && (g = !0)
            : (g = !0));
        return g;
      };
      a.d.di = function (h) {
        return a.d.dg() || a.d.dh(h);
      };
      a.d.dj = function (h, g) {
        if (!h) return !1;
        var c;
        a.d.di(h) && (c = !0);
        return a.d.db() || a.d.dk() || c;
      };
      a.d.dl = function (h) {
        if (!h) return !1;
        var g = !1;
        a.p && a.p.a()
          ? (g = !0)
          : a.r &&
            a.r.a() &&
            h.periscopeManager &&
            h.periscopeManager.fullyMeasurable &&
            h.ao &&
            1 != h.ao.skin &&
            (g = !0);
        return a.d.db() || a.d.dk() || g;
      };
      a.d.dm = function () {
        a.d.bf = !1;
        a.d.bg = !0;
        a.d.bh = !0;
      };
      a.d.dn = !0;
      a.d["do"] = !0;
      "mlb.com" === a.b.bi() &&
        (a.b.ep() || a.b.bq()) &&
        (a.d["do"] = !1);
      a.d.dp = function () {
        return !1;
      };
      a.d.dq = function () {
        a.d.q();
        return !1;
      };
      a.d.dr = function () {
        return !1;
      };
      a.d.ds = function () {
        return !1;
      };
      a.d.dt = function () {
        var h = a.d.ay;
        return (h = h && h.match(/Firefox\/([0-9]+)\./))
          ? parseInt(h[1], 10)
          : !1;
      };
      (function () {
        var h = a.b.bl(window, ["IntersectionObserver"]),
          g =
            p() ||
            57 <= a.d.dt() ||
            17 <= a.b.s() ||
            13 <= a.b.bb(),
          c = a.d.q(),
          e = a.d.bd(),
          f =
            g &&
            h &&
            "function" === typeof h &&
            (!c || (e && a.d.cs));
        a.d.dc = function (a) {
          "boolean" === typeof a && (f = a);
          return f;
        };
        a.d.du = function () {
          return f && h;
        };
      })();
      a.d.bg = p();
      a.d.br = (function () {
        if (a.d.bs()) return !1;
        var h = a.b.bb(),
          g = a.d.q();
        return !(
          !(
            9 <= h &&
            12 >= h &&
            window &&
            window.requestAnimationFrame
          ) || g
        );
      })();
      a.d.dv = (function () {
        if (a.d.c() || a.d.bs()) return !1;
        var h =
          a.d.h() || (a.d.an() && 15.16199 <= a.b.s());
        if (!h) return !1;
        var g = a.b.t();
        if (a.d.h() && 8 >= g) return !1;
        var c = 1 === a.d.x().isInApp,
          e,
          f = "function";
        a.d.h()
          ? (8 === g && (f = "object"),
            (e =
              document &&
              typeof document[
                10 > g
                  ? "elementFromPoint"
                  : "msElementsFromPoint"
              ] === f))
          : a.d.an() &&
            (e = typeof window.requestAnimationFrame === f);
        return h && !c && e;
      })();
      u = a.d.e();
      a.d.a = new u.Image();
      a.d.i = function () {
        if ("undefined" !== typeof a.d.e()["Moat#EVA"])
          return !0;
        try {
          if (
            "undefined" !== typeof a.d.e().eval &&
            (a.d
              .e()
              .eval(
                "(function(win){ win['Moat#EVA'] = true; })(window)"
              ),
            "undefined" !== typeof a.d.e()["Moat#EVA"])
          )
            return !0;
        } catch (h) {}
        return !1;
      };
      a.d.j = function (a) {
        try {
          return new a.Function(""), !0;
        } catch (b) {
          return !1;
        }
      };
      a.d.dw = function () {
        var a =
          navigator &&
          navigator.appVersion &&
          navigator.appVersion.match(
            /Windows NT (\d\d{0,1}\.\d)/
          );
        return a ? parseFloat(a[1]) : -1;
      };
      a.d.dx = function () {
        return 6.1 === a.d.dw();
      };
      a.d.dy = function () {
        var h = a.d.e();
        return (
          h.navigator &&
          "function" === typeof h.navigator.getBattery
        );
      };
      a.d.dk = function () {
        return !!a.d.dz();
      };
      a.d.dz = function () {
        return a.d.dc()
          ? { measurableFn: a.d.bs }
          : a.d.bw
          ? { measurableFn: a.d.dd }
          : !1;
      };
      a.d.ea = a.b.dy();
      a.d.eb = function (h) {
        return (h = (h = a.d.ea) || a.b.dh());
      };
    })(a);
    (function () {
      function b(a, b, k) {
        function n(a, b) {
          for (var c in a)
            a.hasOwnProperty(c) && b.call(null, a[c], c);
        }
        function m(a) {
          var b = [];
          n(a, function (a, e) {
            b.push(e);
          });
          return b;
        }
        a = b[a];
        (a && a.xa.sode) ||
          ((a.xa.sode = function () {
            this.desw = {};
            this.xfgf = [];
            this.publishing_ = !1;
            this.xkcd = {};
            this.edws = [];
          }),
          (a.xa.sode.prototype.uxin = (function () {
            var a = function (a) {
              a = k.max(4, a);
              return (((1 + k.random()) * k.pow(16, a)) | 0)
                .toString(16)
                .substring(0, a);
            };
            return function (b) {
              return (
                a(4) + "-" + a(4) + "-" + a(4) + "-" + a(4)
              );
            };
          })()),
          (a.xa.sode.prototype.xsza = function (a) {
            this.desw[a] || (this.desw[a] = {});
            return this.desw[a];
          }),
          (a.xa.sode.prototype.esgf = function (a, b) {
            this.publishing_
              ? this.xfgf.push(arguments)
              : this.zaxs.apply(this, arguments);
          }),
          (a.xa.sode.prototype.kswa = function (a, b) {
            for (
              var c = this.xkcd[a] || [],
                e = c && c.length,
                f = 0;
              f < e;
              f++
            )
              if (c[f] === b) return !1;
            c.push(b);
            c.sort(function (a, b) {
              return a - b;
            });
            this.xkcd[a] = c;
          }),
          (a.xa.sode.prototype.aksw = function (a, b) {
            if (!this.xkcd[a]) return !1;
            for (
              var c = this.xkcd[a],
                e = -1,
                f = c && c.length,
                d = 0;
              d < f;
              d++
            )
              if (c[d] === b) {
                e = d;
                break;
              }
            -1 != e && c.splice(e, 1);
            this.xkcd[a] = c;
          }),
          (a.xa.sode.prototype._getEventPriorities_ =
            function (a) {
              return this.xkcd[a] || [];
            }),
          (a.xa.sode.prototype.azsx = function (a, b, c) {
            c = c || {};
            var e = c.id || this.uxin(),
              f;
            f = c.priority;
            f =
              !isNaN(f) && isFinite(f)
                ? parseInt(f, 10)
                : 10;
            for (
              var d = this.xsza(a), z = 0;
              d[e] && !c.id && 10 > z;

            )
              z++, (e = this.uxin());
            d[f] || (d[f] = {});
            this.kswa(a, f);
            c.priority = f;
            d[f][e] = { cb: b, options: c };
            return e;
          }),
          (a.xa.sode.prototype.zaxs = function (a, b) {
            if (!this.desw[a]) return !1;
            this.publishing_ = !0;
            for (
              var c = this.edws.slice.call(arguments, 1),
                e = this._getEventPriorities_(a).slice(0),
                f = 0,
                d = e.length;
              f < d;
              f++
            ) {
              var z = this.desw[a][e[f]],
                l;
              for (l in z)
                if (z.hasOwnProperty(l)) {
                  var B = z[l];
                  if (B) {
                    var v;
                    v =
                      B.options && B.options.includeId
                        ? [l].concat(c)
                        : c;
                    if (
                      !B.options ||
                      !B.options.condition ||
                      (B.options.condition &&
                        B.options.condition.apply(null, v))
                    )
                      B.options &&
                        B.options.once &&
                        "undefined" !==
                          typeof B.options.priority &&
                        this.sxaz(a, {
                          id: l,
                          priority: B.options.priority,
                        }),
                        B.cb.apply(null, v);
                  }
                }
            }
            this.publishing_ = !1;
            for (
              c = 0;
              0 < this.xfgf.length && 500 > c;
              c++
            )
              this.zaxs.apply(this, this.xfgf.pop());
          }),
          (a.xa.sode.prototype.swaq = function (a, b, c) {
            var e = !1;
            if (this.desw[a] && this.desw[a][c])
              try {
                delete this.desw[a][c][b], (e = !0);
              } catch (f) {}
            0 === m(this.desw[a][c]).length &&
              this.aksw(a, c);
            return e;
          }),
          (a.xa.sode.prototype.sxaz = function (a, b) {
            if (!b || "object" != typeof b || !this.desw[a])
              return !1;
            if (b.id && void 0 !== b.priority)
              return this.swaq(a, b.id, b.priority);
            if (b.id || b.callback)
              for (
                var c = this._getEventPriorities_(a),
                  e = 0,
                  f = c.length;
                e < f;
                e++
              ) {
                var d = c[e];
                if (b.id && b.callback) {
                  if (
                    this.desw[a][d][b.id] &&
                    this.desw[a][d][b.id].cb == b.callback
                  )
                    return this.swaq(a, b.id, d);
                } else if (b.id) {
                  if (this.desw[a][d][b.id])
                    return this.swaq(a, b.id, d);
                } else
                  for (var z in this.desw[a][d])
                    if (
                      this.desw[a][d][z] &&
                      this.desw[a][d][z].cb == b.callback
                    )
                      return this.swaq(a, z, d);
              }
            return !1;
          }),
          (a.xa.sode.prototype.ugin = function (a) {
            if ("string" === typeof a)
              if (this.desw[a]) delete this.desw[a];
              else return !1;
            else this.desw = {};
            return !0;
          }));
      }
      var t;
      a.n = a.n || {};
      a.n.b = function (p) {
        p.xa.sode ||
          (p.xb == window
            ? b(a.d.as, window, x)
            : a.b.dx(
                b,
                "'" + a.d.as + "',window, Math",
                p.xb
              ));
        t = new p.xa.sode();
      };
      a.n.c = function () {
        return t;
      };
    })();
    (function () {
      function b(b, e) {
        function f(a) {
          var b = h.xb.Math.pow,
            c = h.xb.Math.random;
          a = (0, h.xb.Math.max)(4, a);
          return (((1 + c()) * b(16, a)) | 0)
            .toString(16)
            .substring(0, a);
        }
        function d(a) {
          return function (b) {
            return a(b);
          };
        }
        function g(a, b) {
          if (
            !a ||
            "string" !== typeof b ||
            !a[b] ||
            a == l
          )
            return !1;
          if (
            "string" === typeof a.nodeName &&
            ("OBJECT" === a.nodeName ||
              "EMBED" === a.nodeName)
          ) {
            var c =
              document && document.body && document.body[b];
            if (c && c !== a[b]) return c;
          }
          return !1;
        }
        var l;
        l =
          "object" === typeof a &&
          a &&
          a.a &&
          a.a.d &&
          a.a.d()
            ? a.a.d()
            : new Function("return this.window;")();
        var h;
        e[b] = e[b] || {
          zs: !1,
          zr: 0,
          yf: {},
          h: 0,
          m: 0,
          i: {},
          xa: {},
          xb: e,
          xc: {},
          xyds: {},
        };
        h = e[b];
        var v = {},
          m = (function () {
            var a = !1;
            try {
              var b = Object.defineProperty({}, "passive", {
                get: function () {
                  a = !0;
                },
              });
              l.addEventListener("test", null, b);
              l.removeEventListener("test", null, b);
            } catch (c) {}
            return a;
          })();
        h.xc.dowg = function (a, b) {
          h &&
            (h.xyds || (h.xyds = {}),
            h &&
              h.xyds &&
              (h.xyds[b]
                ? h.xyds[b].push(a)
                : (h.xyds[b] = [a])));
        };
        h.xc.hsxk = function () {
          h.dcsx && h.dcsx.dcwn();
          "undefined" !== typeof a && a && h.xc.esde(a);
          var a;
          h.xc.exde(h.xc.hsxk, 1e3);
        };
        h.xc.esde = function (a) {
          l && l.clearTimeout && l.clearTimeout(a);
        };
        h.xc.ynds = function (a, b, c, e) {
          var f,
            l,
            h = !1;
          "touchstart" === b && m && (h = { passive: !0 });
          e
            ? v[b + e]
              ? (c = v[b + e])
              : ((c = d(c)), (v[b + e] = c))
            : (c = d(c));
          if (a.addEventListener)
            (e = "addEventListener"), (f = "");
          else if (a.attachEvent)
            (e = "attachEvent"), (f = "on");
          else return !1;
          if ((l = g(a, e)))
            try {
              l.call(a, f + b, c, h);
            } catch (k) {
              a[e](f + b, c, h);
            }
          else if (a && e && a[e])
            try {
              a[e](f + b, c, h);
            } catch (k) {
              return !1;
            }
        };
        h.xc.engn = function (a, b, c, d) {
          var e,
            f = b + d,
            l;
          if (!a) return delete v[f], !1;
          c = !1 !== d ? v[f] : c;
          if (a.removeEventListener)
            (d = "removeEventListener"), (e = "");
          else if (a.detachEvent)
            (d = "detachEvent"), (e = "on");
          else return delete v[f], !1;
          if ((l = g(a, d)))
            try {
              l.call(a, e + b, c, !1);
            } catch (h) {
              a[d](e + b, c, !1);
            }
          else
            try {
              a[d](e + b, c, !1);
            } catch (h) {}
          delete v[f];
        };
        h.xc.exde = function (a, b) {
          a = d(a);
          var c;
          l && l.setTimeout && (c = l.setTimeout(a, b));
          return c;
        };
        h.xc.exae = function (a, b, c) {
          return function () {
            b.apply(
              c || null,
              a.concat(a.slice.call(arguments))
            );
          };
        };
        h.xc.uxin = function () {
          return (
            f(4) + "-" + f(4) + "-" + f(4) + "-" + f(4)
          );
        };
        h.xc.twer = function (a, b) {
          h &&
            (h.yf || (h.yf = {}),
            h &&
              h.yf &&
              (h.yf[b]
                ? h.yf[b].push(a)
                : (h.yf[b] = [a])));
        };
        h.xc.pagehideSupported_ = function () {
          return "object" === typeof l && "onpagehide" in l;
        };
      }
      function t() {
        a.n.a.sxaz("adKilled", { callback: p });
        u(C);
      }
      function p(b) {
        a.d.g = null;
        if (C) {
          try {
            var e = C.yf[a.d.at.a];
            if (e) {
              var f = a.b.indexOf(e, b.yg);
              -1 < f && e.splice(f, 1);
            }
            g(a.d.at.a, b.TAGID);
          } catch (d) {}
          u(C);
        }
      }
      function u(b) {
        var e = !1,
          f = !1,
          d = 0,
          h = 0;
        try {
          b.yf[a.d.at.a] &&
            (f = 0 === b.yf[a.d.at.a].length),
            a.b.forEach(b.yf, function (a) {
              0 < a.length && d++;
            }),
            g(a.d.at.a, a.d.av),
            a.b.forEach(b.xyds, function (a) {
              0 < a.length && (h += a.length);
            }),
            (b.xyds[a.d.at.a] &&
              0 != b.xyds[a.d.at.a].length) ||
              (f = !0),
            0 === h && 0 === d && (e = !0);
        } catch (l) {}
        f && b.swde.esgf("allAdsInWindowKilled", a.d.at.a);
        e &&
          (a.n.a.sxaz("adKilled", { callback: p }),
          a.n.a.sxaz("allLocalAdsKilled", { callback: t }),
          b.swde.esgf("allAdsKilled"));
      }
      function k(c) {
        c == window
          ? b(a.d.as, window)
          : a.b.dx(b, "'" + a.d.as + "',window", c);
        return n(c);
      }
      function n(b) {
        try {
          return (b = b || a.d.e()), b[a.d.as];
        } catch (e) {
          return null;
        }
      }
      function m(b) {
        try {
          var e = [];
          b = b || a.d.e();
          if (!b) return !1;
          var f = a.d.aq;
          if (!f) return !1;
          var d = new RegExp("^" + f);
          if (!d) return !1;
          a.b.forEach(b, function (a, b) {
            -1 < b.search(d) &&
              a &&
              "number" === typeof a.zr &&
              e.push(a);
          });
          return e;
        } catch (h) {
          return !1;
        }
      }
      var h,
        g = function (b, e) {
          var f = C.xyds[b];
          if (f) {
            var d = a.b.indexOf(f, e);
            -1 < d && f.splice(d, 1);
          }
        };
      a.s = a.s || {};
      a.s.a = m;
      a.s.b = function (b) {
        try {
          var e = [];
          b = b || a.d.e();
          return b
            ? (e = m(b))
              ? 0 < e.length
                ? !0
                : !1
              : !1
            : !1;
        } catch (f) {
          return !1;
        }
      };
      a.s.c = g;
      a.s.d = p;
      a.s.e = function (a) {
        var b = n();
        b && (b.i[a] = !0);
      };
      a.s.f = function () {
        return h;
      };
      a.s.g = function (b, e) {
        var f;
        (f = n(a.d.e())) && f.xc.twer(b, e);
      };
      a.s.h = function (b, e) {
        var f;
        (f = n(a.d.e())) && f.xc.dowg(e, b);
      };
      a.s.i = t;
      a.s.j = n;
      a.s.k = function (b) {
        var e = n(b),
          f = !1;
        e ||
          ((e = k(b)), (f = !0), e.xc.exde(e.xc.hsxk, 1e3));
        window[a.d.as] = e;
        a.n.b(e);
        a.n.a = a.n.c();
        f && (e.swde = new e.xa.sode());
        a.n.a.azsx("adKilled", p);
        a.n.a.azsx("allLocalAdsKilled", t, { once: !0 });
        return (h = e);
      };
      a.s.l = u;
      a.s.m = k;
    })();
    (function (a) {
      function t(p, u, k, n) {
        var m = {};
        p = p
          .replace(/&amp;/g, "&")
          .replace(/(^\s+|\s+$)/g, "");
        for (
          var h = p.split("&"), g = 0;
          g < h.length;
          g++
        ) {
          var c = h[g].split("=");
          if ("string" === typeof c[1]) {
            c[0] &&
              c[0].match("moatClient") &&
              (m["rawM" + c[0].slice(1)] = c[1]);
            var e = c,
              f,
              d = (f = c[1]);
            try {
              for (
                var z = 0;
                100 > z &&
                ((f = decodeURIComponent(f)), d != f) &&
                !f.match(/^http(s)?\:/);
                z++
              )
                d = f;
            } catch (l) {}
            f = f.replace(/(^\s+|\s+$)/g, "");
            e[1] = f;
          } else c[1] = "";
          m[c[0]] = c[1];
        }
        (h = a.k.m()) && (m.zMoatCURL = h);
        "undefined" !== typeof k &&
          (m.clientZone = "undefined" !== k ? k : "");
        a.n.a.zaxs(
          "getAdIdentifiersFromQueryString",
          m,
          p,
          u,
          k,
          n
        );
        return (m = a.t.i(m));
      }
      a.t = {};
      a.t.a = {};
      a.t.a.a = [];
      a.t.b = function (p, u) {
        if (!p) return !1;
        if ("undefined" === typeof p.startTime || u)
          p.startTime = a.d.be;
        if ("undefined" === typeof p.rand || u)
          p.rand = x.floor(x.random() * x.pow(10, 12));
        "undefined" === typeof p.adNum &&
          ((p.adNum = C.zr), C.zr++);
      };
      a.t.c = function (p, u) {
        if (!p) return !1;
        var k = a.b.w();
        a.b.bi();
        decodeURIComponent(k);
        return p;
      };
      a.t.d = function (p, u, k) {
        var n = [{}, {}, {}, { all: "0,1" }, { all: !0 }];
        u && n.push({});
        k && n.push({});
        return a.b.ar(n, p);
      };
      a.t.e = function (a) {
        if (!a) return !1;
        a.zMoatOrigSlicer1 = a.moatClientSlicer1 || "N/A";
        a.zMoatOrigSlicer2 = a.moatClientSlicer2 || "N/A";
        return a;
      };
      a.t.f = function (p, u) {
        var k = a.t.g(p, u);
        k && (k._AD_FORMAT = u);
        k && a.t.d(u, !0, !0) && a.t.e(k);
        k &&
          a.b.forEach(a.t.a.a, function (a) {
            a(k);
          });
        a.n.a.zaxs("getIds", k, p, u);
        return k;
      };
      a.t.g = function (a, b) {
        try {
          var k = a.className,
            n = a.getAttribute("src");
          k.split("\n").join(" ");
          if (-1 !== k.indexOf("moatfooter")) return !1;
          var m = n.split("?"),
            h = n.split("#"),
            k = !1;
          1 < m.length &&
            1 < h.length &&
            m[1].length < h[1].length &&
            (k = !0);
          if (1 == m.length || k) m = h;
          return 1 < m.length
            ? t(m[1], b, "undefined")
            : !1;
        } catch (g) {
          return !1;
        }
      };
      a.t.h = function (p, u) {
        if (!p) return !1;
        var k = {};
        try {
          var n =
            p &&
            p.className.replace("amp;", "").split("?")[1];
          (k = n && t(n, u)) && a.t.d(u, !0) && a.t.e(k);
          k && (k._AD_FORMAT = u);
          return k;
        } catch (m) {
          return !1;
        }
      };
      a.t.i = function (a) {
        if (a) {
          for (var b in a)
            a.hasOwnProperty(b) &&
              b &&
              b.match("moatClientLevel") &&
              "string" === typeof a[b] &&
              (a[b] = a[b]
                .replace(/\:/g, "_")
                .replace(/%3A/gi, "_"));
          return a;
        }
      };
      a.t.j = function (a, b) {
        return b || {};
      };
      a.t.k = function (a) {
        a = decodeURIComponent(decodeURIComponent(a));
        -1 < a.indexOf("anonymous.google") &&
          (a = "anonymous.google");
        var b = a.match(
          /^(?:[^:]{1,}:\/\/)?(?::*\/?\/?)?(?:www\.)?([^\/:]*)/
        );
        b && b[1] && (a = b[1]);
        return a.split("/")[0];
      };
      a.t.l = function (p) {
        a.t.b(p);
        a.t.m(p);
        p = a.t.i(p);
        a.t.n && a.t.n(p);
        return p;
      };
    })(a);
    a.b.fb() && (L += "_BETA");
    var C = a.s.k(a.d.e());
    a.d.s();
    a.d.t();
    var Sa = a.d.c(),
      ea = a.b.l(),
      aa = a.d.be,
      Ra = a.d.e(),
      M = "moatFound" + L,
      R = "__moat__" + L;
    a.b.aj() &&
      2 === O &&
      ((M = "moatFound" + L + "BETA"),
      (R = "__moat__" + L + "BETA"));
    (function () {
      function b(b, u) {
        function k(a, b) {
          a.evt === b &&
            a.target &&
            a.target.closed &&
            this.kdmw(a);
        }
        var n = u[b];
        (n && n.xa.txae) ||
          ((n.xa.txae = function (a, b) {
            this.sxdc = n.xc.uxin();
            this.cdxs = a;
            this.xscd = {};
            this.swde = b;
            var g = this,
              c = this.swde.azsx(
                "allAdsInWindowKilled",
                function (a) {
                  n.dcsx.engn({
                    listenerName: "unloadFn" + a,
                  });
                  n.dcsx.engn({
                    listenerName: "beforeunloadFn" + a,
                  });
                }
              );
            this.swde.azsx(
              "allAdsKilled",
              function () {
                g.swde.sxaz("allAdsInWindowKilled", {
                  id: c,
                });
                n.dcsx &&
                  (n.dcsx.aqsw(),
                  (n.zs = !1),
                  (n.xz = !1),
                  (n.dcsx = !1));
              },
              { once: !0 }
            );
          }),
          (n.xa.txae.prototype.wsed = function (
            a,
            b,
            g,
            c,
            e
          ) {
            this.xscd[c] || (this.xscd[c] = {});
            this.xscd[c].evt = b;
            this.xscd[c].target = a;
            this.xscd[c].periodic = !0;
            var f;
            f = n.xc.exae([this], function (d, z) {
              n.xc.engn(a, b, null, c);
              if (d.xscd[c]) {
                d.xscd[c].tid && n.xc.esde(d.xscd[c].tid);
                d.xscd[c].tid = n.xc.exde(function () {
                  d.xscd[c].tid = null;
                  n.xc.ynds(a, b, f, c);
                }, e);
                try {
                  d.swde.zaxs(g, z);
                } catch (l) {}
              }
            });
            n.xc.ynds(a, b, f, c);
          }),
          (n.xa.txae.prototype.wsqa = function (a) {
            this.xscd[a] &&
              (n.xc.esde(this.xscd[a].tid),
              n.xc.engn(
                this.xscd[a].target,
                this.xscd[a].evt,
                null,
                a
              ),
              delete this.xscd[a]);
          }),
          (n.xa.txae.prototype.qaws = function () {
            if (
              !(
                "object" === typeof a &&
                a &&
                a.d &&
                a.d.az &&
                a.d.az()
              )
            ) {
              this.wsed(
                this.cdxs,
                "scroll",
                "scroll",
                "globalScrollevent" + this.sxdc,
                1e3
              );
              var b = this.cdxs.document.documentElement;
              this.wsed(
                b,
                "mousedown",
                "mouseEvent",
                "globalMouseDown" + this.sxdc,
                1e3
              );
              this.wsed(
                b,
                "mouseover",
                "mouseEvent",
                "globalMouseOver" + this.sxdc,
                1e3
              );
              this.wsed(
                b,
                "mousemove",
                "mouseEvent",
                "globalMouseMove" + this.sxdc,
                5e3
              );
              this.wsed(
                this.cdxs,
                "mousewheel",
                "mouseEvent",
                "globalMouseWheel" + this.sxdc,
                5e3
              );
              this.wsed(
                this.cdxs,
                "DOMMouseScroll",
                "mouseEvent",
                "globalMouseScroll" + this.sxdc,
                5e3
              );
              this.wsed(
                b,
                "touchstart",
                "mouseEvent",
                "globalTouchStartEvent" + this.sxdc,
                1e3
              );
              this.wsed(
                b,
                "keydown",
                "keyboardEvent",
                "globalKeyboardEvent" + this.sxdc,
                1e3
              );
            }
          }),
          (n.xa.txae.prototype.aqsw = function () {
            for (var a in this.xscd)
              this.engn({ listenerName: a });
          }),
          (n.xa.txae.prototype.ynds = function (
            a,
            b,
            g,
            c
          ) {
            if (!this.xscd[c]) {
              this.xscd[c] = {};
              this.xscd[c].evt = b;
              this.xscd[c].target = a;
              this.xscd[c].publishEvt = g;
              var e;
              e = n.xc.exae([this], function (a, b) {
                a.xscd[c] && a.swde.zaxs(g, b);
              });
              n.xc.ynds(a, b, e, c);
            }
          }),
          (n.xa.txae.prototype.engn = function (a) {
            function b(a, c) {
              a.xscd[c].periodic
                ? a.wsqa(c)
                : (n.xc.engn(
                    a.xscd[c].target,
                    a.xscd[c].evt,
                    null,
                    c
                  ),
                  delete a.xscd[c]);
            }
            var g = a.target && a.evt,
              c = a.target && !a.evt,
              e = a.all;
            if (a.listenerName)
              this.xscd[a.listenerName] &&
                b(this, a.listenerName);
            else if (g)
              for (var f in this.xscd)
                (g = this.xscd[f]) &&
                  g.evt == a.evt &&
                  g.target == a.target &&
                  b(this, f);
            else if (c)
              for (f in this.xscd)
                (g = this.xscd[f]) &&
                  g.target == a.target &&
                  b(this, f);
            else if (e)
              for (f in this.xscd)
                (g = this.xscd[f]) && b(this, f);
          }),
          (n.xa.txae.prototype.kdmw = function (a) {
            n.swde.esgf(a.publishEvt);
          }),
          (n.xa.txae.prototype.dcwn = function () {
            var a = this.xscd,
              b;
            for (b in a) k(a[b], "unload");
          }));
      }
      function t(p) {
        p &&
          (p.xa.txae ||
            (p.xb == window
              ? b(a.d.as, window)
              : a.b.dx(
                  b,
                  "'" + a.d.as + "',window, Math",
                  p.xb
                )),
          p.zs ||
            ((p.dcsx = new p.xa.txae(a.d.e(), p.swde)),
            (p.zs = !0)));
      }
      (function () {
        a.n.a.azsx("modulesReady", t, { once: !0 });
        a.n.a.azsx("startAdTracking", function () {
          C &&
            C.zs &&
            !C.xz &&
            (C.dcsx ? ((C.xz = !0), C.dcsx.qaws()) : t(C),
            a.focus.setFocusListeners());
        });
      })();
      a.u = a.u || {};
    })();
    (function () {
      function b(b, c) {
        b.viewabilityMethod.strict ||
          (b.viewabilityMethod.strict = 1);
        var d, e;
        if (b.isCompositeAd)
          if (
            b.isCompositeAd &&
            b.components &&
            1 < b.components.length
          ) {
            d = {
              area: 0,
              visibleArea: 0,
              percv: 0,
              visibleRect: !1,
              cumulRect: !1,
              yMinMax: !1,
              elGeo: !1,
              rect: !1,
              componentResults: [],
            };
            for (var f = 0; f < b.components.length; f++)
              (e = n(b.components[f], c)),
                (d.area += e.area),
                (d.visibleArea += e.visibleArea),
                d.componentResults.push(e);
            d.percv = d.visibleArea / d.area;
            b.compositeAdAreaPx = d.area;
            (e = z(d.componentResults)) &&
              "strict" === a.v.a(b.zr) &&
              a.n.a.zaxs(
                "rectsAvailable",
                b.zr,
                e.elRect,
                e.visibleRect
              );
          } else d = n(b, c);
        else d = n(b, c);
        "strict" === a.v.a(b.zr) &&
          a.d.c() &&
          !a.d.q() &&
          a.n.a.zaxs(
            "rectsAvailable",
            b.zr,
            d.cumulRect,
            d.visibleRect
          );
        f = t(d, b);
        e = H;
        d.isVisible = d.percv >= f;
        d.isFullyVisible = d.percv >= e;
        d.elGeo && (d.elGeo.threshold = f);
        b.videoIsFullscreen &&
          0 < d.percv &&
          (d.isVisible = !0);
        0.8 <= d.percv && (d.isDentsuVisible = !0);
        G ? d.percv > G && (G = d.percv) : (G = d.percv);
        b.AD_RECT = d && d.rect;
        return d;
      }
      function t(b, c) {
        return a.w.a(b.area)
          ? (c.viewstats || (c.viewstats = {}),
            (c.viewstats.isBigAd = !0),
            0.3)
          : 0.5;
      }
      function p() {
        this.height =
          this.width =
          this.absTop =
          this.absLeft =
            0;
        this.update = function (a) {
          var b = d("left", a.win),
            c = d("top", a.win);
          !1 !== b &&
            !1 !== c &&
            ((this.absLeft = a.left + b),
            (this.absTop = a.top + c),
            (this.width = a.width),
            (this.height = a.height));
        };
      }
      function u(a, b) {
        var c = a.zr;
        J.hasOwnProperty(c) || (J[c] = new p());
        var d = b || new m(a.aa);
        J[c].update(d);
      }
      function k(a, b, c) {
        return c ? new m(a.parentNode, b) : new m(a, b);
      }
      function n(a, b) {
        if (!a) return !1;
        var c = "number" == typeof a.zr,
          d,
          e;
        c
          ? ((d = a.aa), (e = a._calcVideoBasedOnContainer))
          : (d = a);
        d = k(d, b, e);
        e = d.height;
        var f = d.width;
        c && (a.AD_RECT = d);
        var w = d.calcArea();
        if (0 === w)
          return { area: w, visibleArea: 0, percv: 0 };
        var l = g(d),
          r = l.visibleRect.calcArea(),
          h = r / w,
          E;
        a: {
          var q = l.cumulRect,
            v = l.cumulRect.getViewportRect();
          if (0 > q.top && 0 < q.bottom) E = -q.top;
          else if (0 <= q.top && q.top <= v.height) E = 0;
          else {
            E = { yMin: -1, yMax: -1 };
            break a;
          }
          if (0 <= q.bottom && q.bottom <= v.height)
            q = q.height;
          else if (q.bottom > v.height && q.top < v.height)
            q = q.height - (q.bottom - v.height);
          else {
            E = { yMin: -1, yMax: -1 };
            break a;
          }
          E = { yMin: E, yMax: q };
        }
        c && u(a, d);
        return {
          area: w,
          visibleArea: r,
          visibleRect: l.visibleRect,
          cumulRect: l.cumulRect,
          percv: h,
          yMinMax: E,
          elGeo: {
            elHeight: e,
            elWidth: f,
            foldTop: l.cumulRect.top,
            totalArea: l.parentArea,
          },
          rect: d.rect,
        };
      }
      function m(b, c, d, e) {
        try {
          this.rect =
            d ||
            (b.getBoundingClientRect &&
              b.getBoundingClientRect()) ||
            {};
        } catch (f) {
          this.rect =
            d ||
            (b && {
              top: b.offsetTop,
              left: b.offsetLeft,
              width: b.offsetWidth,
              height: b.offsetHeight,
              bottom: b.offsetTop + b.offsetHeight,
              right: b.offsetLeft + b.offsetWidth,
            }) ||
            {};
        }
        d = "left right top bottom width height".split(" ");
        for (e = 0; e < d.length; e++) {
          var w = d[e];
          this[w] = this.rect[w];
        }
        b &&
          b.CLIPCHECKINGTARGET &&
          b.CLIPCHECKINGTARGET.style &&
          "absolute" ===
            b.CLIPCHECKINGTARGET.style.position &&
          (d = a.b.ev(b.CLIPCHECKINGTARGET.style.clip)) &&
          ((this.right = this.left + d.right),
          (this.left += d.left),
          (this.bottom = this.top + d.bottom),
          (this.top += d.top));
        this.width = this.right - this.left;
        this.height = this.bottom - this.top;
        this.el = b;
        this.win = c || (b && a.b.ej(b));
        this.changeReferenceFrame = function (a) {
          this.left += a.left;
          this.right += a.left;
          this.top += a.top;
          this.bottom += a.top;
        };
        this.calcArea = function () {
          return (
            (this.right - this.left) *
            (this.bottom - this.top)
          );
        };
        this.getViewportRect = function (b) {
          var c;
          c = a.d.aa(this.win);
          b &&
            (b.width < c.width &&
              ((c.width = b.width),
              (c.right = c.left + c.width)),
            b.height < c.height &&
              ((c.height = b.height),
              (c.bottom = c.top + c.height)));
          return c;
        };
      }
      function h(a, b) {
        for (var c = [], d = 0; d < b.length; d++)
          c.push(a(b[d]));
        return c;
      }
      function g(b) {
        var c,
          d = [],
          e = a.b.fa(
            b.el,
            b.win,
            b && b.el && b.el._moatParentCount
          );
        e &&
          (d = h(function (a) {
            return new m(a);
          }, e));
        d.unshift(b);
        e = d.length;
        b = new m(b.el, a.d.e());
        for (var w = 0; w < e; w++) {
          var l = d[w];
          0 === w
            ? (c = l)
            : (c.changeReferenceFrame(l),
              b.changeReferenceFrame(l));
          l = l.getViewportRect(w < e - 1 ? d[w + 1] : !1);
          c = f(c, l);
        }
        return {
          visibleRect: c,
          cumulRect: b,
          parentArea: d[d.length - 1].calcArea(),
        };
      }
      function c(a, b, c, d) {
        a = x.max(a, c);
        b = x.min(b, d);
        return b > a ? [a, b] : [0, 0];
      }
      function e(a, b, c) {
        return "undefined" === typeof a
          ? !1
          : {
              left: Number(b) + Number(a.left),
              right: Number(b) + Number(a.right),
              top: Number(c) + Number(a.top),
              bottom: Number(c) + Number(a.bottom),
            };
      }
      function f(a, b) {
        if (
          "undefined" === typeof a ||
          "undefined" === typeof b
        )
          return !1;
        var d = c(a.left, a.right, b.left, b.right),
          e = c(a.top, a.bottom, b.top, b.bottom);
        return new m(void 0, void 0, {
          left: d[0],
          right: d[1],
          top: e[0],
          bottom: e[1],
        });
      }
      function d(a, b) {
        b || (b = window);
        try {
          var c = b.document.documentElement,
            d = b.document.body;
          return "left" === a
            ? b.pageXOffset ||
                (c && c.scrollLeft) ||
                (d && d.scrollLeft)
            : b.pageYOffset ||
                (c && c.scrollTop) ||
                (d && d.scrollTop);
        } catch (e) {
          return !1;
        }
      }
      function z(b) {
        function c(a, b) {
          return {
            top: x.max(a.top, b.top),
            right: x.max(a.right, b.right),
            bottom: x.min(a.bottom, b.bottom),
            left: x.min(a.left, b.left),
          };
        }
        var d, e, f;
        d = [];
        e = [];
        if (!a.b.f(b) || 0 === b.length) return !1;
        a.b.forEach(b, function (a) {
          a.cumulRect &&
            a.visibleRect &&
            (e.push(a.cumulRect), d.push(a.visibleRect));
        });
        b = a.b.reduce(e, c);
        f = a.b.reduce(d, c);
        return { elRect: b, visibleRect: f };
      }
      function l(b) {
        return b &&
          b.nodeName &&
          "map" === b.nodeName.toLowerCase()
          ? !0
          : (b = a.b.dq(b)) &&
            (1 >= b.width || 1 >= b.height)
          ? !0
          : !1;
      }
      function B(b) {
        return b
          ? 0 === a.b["do"]({ aa: b }, !0, !0)
            ? !0
            : 0 === a.b.ao(b, !0)
          : !1;
      }
      function v(b, c, d, e, f) {
        function r(a) {
          return (a = a.cumulRect)
            ? 100 <= a.width && 50 <= a.height
            : !1;
        }
        var h = {
            IFRAME: !0,
            VIDEO: !0,
            OBJECT: !0,
            EMBED: !0,
            IMG: !0,
          },
          E = n(b);
        if (B(b) || !r(E)) return !1;
        var q = [],
          g = F[f];
        d.elementsFromPoint && !g.elementsFromPointCache
          ? ((c =
              d.elementsFromPoint(c.m[0], c.m[1]) || []),
            (g.elementsFromPointCache = c),
            (q = q.concat(Array.prototype.slice.call(c))))
          : ((c = a.b.dn(c.m[0], c.m[1], d)),
            g.elementsFromPointCache &&
              (q = q.concat(
                Array.prototype.slice.call(
                  g.elementsFromPointCache
                )
              )),
            c && (q = [c].concat(q)));
        g = q.indexOf(b);
        if (-1 == g) return !1;
        q = q.slice(0, g);
        for (g = 0; g < q.length; g++)
          if (
            (d =
              (c = q[g]) &&
              c !== e &&
              c[R] !== f &&
              h[c.nodeName] &&
              !a.b.bg(c, b) &&
              !a.b.bg(b, c) &&
              !l(c) &&
              !B(c)) &&
            (c = n(c)) &&
            r(c) &&
            E &&
            c &&
            0.5 <= w(E.cumulRect, c.cumulRect)
          )
            return !0;
        return !1;
      }
      function A(a) {
        var b = 0.01 * a.width,
          c = 0.01 * a.height;
        return {
          tl: [a.left + b, a.top + c],
          m: [
            a.left + (a.right - a.left) / 2,
            a.top + (a.bottom - a.top) / 2,
          ],
          br: [a.right - b, a.bottom - c],
        };
      }
      function q(b, c) {
        var d = [],
          e = a.l.l(b);
        e &&
          (d = h(function (a) {
            var c = g(new m(b)).visibleRect;
            new m(a);
            return {
              rect: c,
              frame: a,
              doc: a.ownerDocument,
            };
          }, e));
        d.unshift({
          rect: g(new m(b)).visibleRect,
          frame: b,
          doc: b.ownerDocument,
        });
        for (e = 0; e < d.length; e++) {
          var f = A(d[e].rect),
            w = !1;
          if (
            0 != f.tl[0] ||
            0 != f.tl[1] ||
            0 != f.br[0] ||
            0 != f.br[1]
          )
            w = !0;
          if (w && v(b, f, d[e].doc, d[e].frame, c))
            return !0;
        }
        return !1;
      }
      function r(a) {
        return a
          ? (a.right - a.left) * (a.bottom - a.top)
          : !1;
      }
      function y(b) {
        function c(b) {
          return a.b.fh(b) || "string" === typeof b;
        }
        return "object" === typeof b &&
          c(b.left) &&
          c(b.right) &&
          c(b.top) &&
          c(b.bottom)
          ? !0
          : !1;
      }
      function w(a, b) {
        if (!y(a) || !y(b)) return !1;
        var c = f(a, b);
        if (!c) return !1;
        var d = r(a);
        return c.calcArea() / d;
      }
      var E,
        J = {},
        H,
        G = void 0,
        T;
      E = a.d.c();
      H = 0.98;
      T = a.d.aa;
      a.n.a.azsx("adKilled", function (a) {
        a && !a.ep && delete J[a.zr];
      });
      a.x = a.x || {};
      a.x.a = function (a, b, c, d) {
        if (!a || !b || !c) return !1;
        a = n(a);
        if (!a) return !1;
        c = d || f(b, c);
        if (!c) return !1;
        d = e(a.visibleRect, b.left, b.top);
        return d
          ? (c = f(d, c))
            ? {
                elementRect: e(a.cumulRect, b.left, b.top),
                visibleRect: c,
                area: a.area,
                calcVisiblePercv: function () {
                  return (
                    ((this.visibleRect.right -
                      this.visibleRect.left) *
                      (this.visibleRect.bottom -
                        this.visibleRect.top)) /
                    this.area
                  );
                },
              }
            : !1
          : !1;
      };
      a.x.b = t;
      a.x.c = function (a, b) {
        (E && J.hasOwnProperty(b)) || u(a);
        return J[b];
      };
      a.x.d = e;
      a.x.e = k;
      a.x.f = d;
      a.x.g = w;
      a.x.h = function (a, c) {
        c = c || !1;
        return function (d, e) {
          var f = d.ao.skin ? b(d, e) : n(d, e);
          f.isVisible = c ? f.percv > a : f.percv >= a;
          f.elGeo && (f.elGeo.threshold = a);
          return f;
        };
      };
      a.x.i = T;
      a.x.j = b;
      a.x.k = function (b) {
        var c = b.aa;
        b = b.zr;
        if (c) {
          if (a.d.t()) c = q(c, b);
          else
            var d = g(new m(c)).visibleRect,
              d = A(d),
              c = v(c, d, a.d.e().document, null, b);
          return c;
        }
      };
      a.x.l = f;
      a.x.m = r;
      a.x.n = m;
      a.x.o = [];
      a.x.p = n;
      a.x.q = y;
      a.x.r = function () {
        return E;
      };
      a.x.s = function (a) {};
    })();
    (function () {
      function b() {
        var a = navigator.appVersion.match(
          /Windows NT (\d\.\d)/
        );
        return a ? parseFloat(a[1]) : -1;
      }
      function t(b) {
        var c = b.ad,
          d = b.elem,
          e = b.cbName,
          f = b.rcbName,
          w = b.options;
        b = b.isDummy;
        if (!c || !d || !w) return !1;
        if ((d = a.y.a(c, w.id, d, w))) {
          if (b) return a.y.call(c, d, function () {}), !0;
          a.y.call(c, d, a.z.a, "'" + e + "','" + f + "'");
          return !0;
        }
      }
      function p(b) {
        var c = b.ad,
          d = b.elem,
          e = b.cbName,
          f = b.options,
          w = b.name,
          l = b.customFn,
          r = b.preserveDom,
          q = b.argument || "";
        if (!(c && d && f && l)) return !1;
        if (b.customPixelDiv)
          return (
            (r = document.createElement("div")),
            (b = f.id || a.b.dm()),
            a.b.el(r, f),
            (r.id = b),
            a.b.ca(r, d),
            { killFn: l(e, w, c.zr, r) }
          );
        b = a.y.a(c, f.id, d, f);
        if (!b) return !1;
        a.y.call(
          c,
          b,
          l,
          "'" +
            e +
            "', '" +
            w +
            "', '" +
            c.zr +
            "', '" +
            q +
            "'",
          null,
          r
        );
        return !0;
      }
      function u(a) {
        if (a.currentFocusState) {
          var b, c, d;
          if (
            "center" != a.config.name &&
            ((d =
              (b = a.manager.getPixelByName("center")) &&
              (c =
                b.viewstates[
                  a.manager.getTargetViewState()
                ]) &&
              c.inview),
            (b = a.manager.reachedAnyInview),
            !d && b)
          ) {
            a.skipWidthCheck = !0;
            return;
          }
          a.skipWidthCheck = !1;
        } else a.skipWidthCheck = !0;
      }
      function k(b) {
        var c, d;
        c =
          b && b.ao && "true" === b.ao.zMoatTaboola
            ? (d = (c = b.aa.parentNode) && c.parentNode) ||
              c
            : b.aa.parentNode;
        d = {
          insertableFunc: a.r.b,
          pixels: [
            {
              name: "center",
              id:
                "moatPx" +
                b.zr +
                "_" +
                x.ceil(1e6 * x.random()),
              target: b.aa,
              container: c,
              position: { top: "50%", left: "50%" },
              onWidthCheck: u,
            },
            {
              name: "topLeft",
              id:
                "moatPx" +
                b.zr +
                "_" +
                x.ceil(1e6 * x.random()),
              target: b.aa,
              container: c,
              position: { top: "0px", left: "0px" },
              onWidthCheck: u,
            },
            {
              name: "bottomRight",
              id:
                "moatPx" +
                b.zr +
                "_" +
                x.ceil(1e6 * x.random()),
              target: b.aa,
              container: c,
              position: { top: "100%", left: "100%" },
              onWidthCheck: u,
            },
          ],
        };
        d.pixels.push({
          name: "dentsuTopLeft",
          id:
            "moatPx" +
            b.zr +
            "_" +
            x.ceil(1e6 * x.random()),
          target: b.aa,
          container: c,
          position: { top: "20%", left: "20%" },
          onWidthCheck: u,
        });
        d.pixels.push({
          name: "dentsuBottomRight",
          id:
            "moatPx" +
            b.zr +
            "_" +
            x.ceil(1e6 * x.random()),
          target: b.aa,
          container: c,
          position: { top: "80%", left: "80%" },
          onWidthCheck: u,
        });
        d.pixels.push({
          name: "topLeft30",
          id:
            "moatPx" +
            b.zr +
            "_" +
            x.ceil(1e6 * x.random()),
          target: b.aa,
          container: c,
          position: { top: "30%", left: "30%" },
          onWidthCheck: u,
        });
        d.pixels.push({
          name: "topRight30",
          id:
            "moatPx" +
            b.zr +
            "_" +
            x.ceil(1e6 * x.random()),
          target: b.aa,
          container: c,
          position: { top: "30%", left: "70%" },
          onWidthCheck: u,
        });
        d.pixels.push({
          name: "bottomLeft30",
          id:
            "moatPx" +
            b.zr +
            "_" +
            x.ceil(1e6 * x.random()),
          target: b.aa,
          container: c,
          position: { top: "70%", left: "30%" },
          onWidthCheck: u,
        });
        d.pixels.push({
          name: "bottomRight30",
          id:
            "moatPx" +
            b.zr +
            "_" +
            x.ceil(1e6 * x.random()),
          target: b.aa,
          container: c,
          position: { top: "70%", left: "70%" },
          onWidthCheck: u,
        });
        d.pixels.push({
          name: "bottomLeft",
          id:
            "moatPx" +
            b.zr +
            "_" +
            x.ceil(1e6 * x.random()),
          target: b.aa,
          container: c,
          position: { top: "100%", left: "0%" },
          onWidthCheck: u,
        });
        d.pixels.push({
          name: "topRight",
          id:
            "moatPx" +
            b.zr +
            "_" +
            x.ceil(1e6 * x.random()),
          target: b.aa,
          container: c,
          position: { top: "0%", left: "100%" },
          onWidthCheck: u,
        });
        a.d.br &&
          d.pixels.push({
            name: "dummy",
            id:
              "moatPx" +
              b.zr +
              "_" +
              x.ceil(1e6 * x.random()),
            target: b.aa,
            container: c,
            position: { top: "0%", left: "50%" },
            onWidthCheck: u,
          });
        return d;
      }
      function n(b, c) {
        var d = !1,
          e = !1;
        a.b.forEach(b.pixels, function (a) {
          "0px" == a.config.position.left &&
            "0px" == a.config.position.top &&
            a.measurable &&
            a.viewstates &&
            a.viewstates[c] &&
            (d = !0);
          "100%" == a.config.position.left &&
            "100%" == a.config.position.top &&
            a.measurable &&
            a.viewstates &&
            a.viewstates[c] &&
            (e = !0);
        });
        return d && e ? !0 : !1;
      }
      function m(b, c) {
        var d = !1;
        a.b.forEach(b.pixels, function (a) {
          if (
            a.config &&
            "50%" == a.config.position.left &&
            "50%" == a.config.position.top &&
            a.viewstates &&
            a.viewstates[c]
          )
            return (d = !0), !1;
        });
        return d;
      }
      function h(b, c) {
        var d = !1,
          e = !1,
          f = !1,
          w = !1;
        a.b.forEach(b.pixels, function (a) {
          "0px" == a.config.position.left &&
            "0px" == a.config.position.top &&
            a.measurable &&
            a.viewstates &&
            a.viewstates[c] &&
            (d = !0);
          "100%" == a.config.position.left &&
            "100%" == a.config.position.top &&
            a.measurable &&
            a.viewstates &&
            a.viewstates[c] &&
            (f = !0);
          a.config &&
            "20%" == a.config.position.left &&
            "20%" == a.config.position.top &&
            a.viewstates &&
            a.viewstates[c] &&
            (e = !0);
          a.config &&
            "80%" == a.config.position.left &&
            "80%" == a.config.position.top &&
            a.viewstates &&
            a.viewstates[c] &&
            (w = !0);
        });
        return d && w && f && e;
      }
      function g(b, c) {
        var d = !1;
        a.b.forEach(b.pixels, function (a) {
          if (
            a.config &&
            a.viewstates &&
            a.viewstates[c] &&
            (d = a.viewstates[c].inview)
          )
            return !1;
        });
        return d;
      }
      function c(b, c) {
        var d = !1;
        a.b.forEach(b.pixels, function (a) {
          if (
            a.config &&
            "50%" == a.config.position.left &&
            "50%" == a.config.position.top &&
            a.viewstates &&
            a.viewstates[c]
          )
            return (d = a.viewstates[c].inview), !1;
        });
        return d;
      }
      function e(b, c) {
        var d = !1,
          e = !1;
        if (
          b.edgesInView.tlPixelInview &&
          b.edgesInView.brPixelInview &&
          !b.inview
        )
          return !1;
        a.b.forEach(b.pixels, function (a) {
          "0px" == a.config.position.left &&
            "0px" == a.config.position.top &&
            a.measurable &&
            a.viewstates &&
            a.viewstates[c] &&
            (d = a.viewstates[c].inview);
          "100%" == a.config.position.left &&
            "100%" == a.config.position.top &&
            a.measurable &&
            a.viewstates &&
            a.viewstates[c] &&
            (e = a.viewstates[c].inview);
        });
        b.edgesInView.tlPixelInview = d;
        b.edgesInView.brPixelInview = e;
        return d && e ? !0 : !1;
      }
      function f(b, c) {
        var d = !1,
          e = !1,
          f = !1,
          w = !1,
          l = !1,
          r = !1,
          q = !1,
          h = !1;
        a.b.forEach(b.pixels, function (a) {
          a.config &&
            "topLeft" == a.config.name &&
            a.viewstates &&
            a.viewstates[c] &&
            (d = a.viewstates[c].inview);
          a.config &&
            "topLeft30" == a.config.name &&
            a.viewstates &&
            a.viewstates[c] &&
            (e = a.viewstates[c].inview);
          a.config &&
            "topRight" == a.config.name &&
            a.viewstates &&
            a.viewstates[c] &&
            (f = a.viewstates[c].inview);
          a.config &&
            "topRight30" == a.config.name &&
            a.viewstates &&
            a.viewstates[c] &&
            (w = a.viewstates[c].inview);
          a.config &&
            "bottomLeft" == a.config.name &&
            a.viewstates &&
            a.viewstates[c] &&
            (l = a.viewstates[c].inview);
          a.config &&
            "bottomLeft30" == a.config.name &&
            a.viewstates &&
            a.viewstates[c] &&
            (r = a.viewstates[c].inview);
          a.config &&
            "bottomRight" == a.config.name &&
            a.viewstates &&
            a.viewstates[c] &&
            (q = a.viewstates[c].inview);
          a.config &&
            "bottomRight30" == a.config.name &&
            a.viewstates &&
            a.viewstates[c] &&
            (h = a.viewstates[c].inview);
        });
        return (
          (d && f && (w || e)) ||
          (l && q && (h || r)) ||
          (d && l && (e || r)) ||
          (f && q && (w || h))
        );
      }
      function d(b, c) {
        if (b.inview) return !0;
        var d = !1,
          e = !1,
          f = !1,
          w = !1;
        a.b.forEach(b.pixels, function (a) {
          "0px" == a.config.position.left &&
            "0px" == a.config.position.top &&
            a.measurable &&
            a.viewstates &&
            a.viewstates[c] &&
            (d = a.viewstates[c].inview);
          "100%" == a.config.position.left &&
            "100%" == a.config.position.top &&
            a.measurable &&
            a.viewstates &&
            a.viewstates[c] &&
            (f = a.viewstates[c].inview);
          a.config &&
            "20%" == a.config.position.left &&
            "20%" == a.config.position.top &&
            a.viewstates &&
            a.viewstates[c] &&
            (e = a.viewstates[c].inview);
          a.config &&
            "80%" == a.config.position.left &&
            "80%" == a.config.position.top &&
            a.viewstates &&
            a.viewstates[c] &&
            (w = a.viewstates[c].inview);
        });
        return (d && e) || (f && w);
      }
      function z(b, c) {
        if (!b.inview) return !1;
        var d = !1,
          e = !1,
          f = !1,
          w = !1;
        a.b.forEach(b.pixels, function (a) {
          "0px" == a.config.position.left &&
            "0px" == a.config.position.top &&
            a.measurable &&
            a.viewstates &&
            a.viewstates[c] &&
            (d = a.viewstates[c].inview);
          "100%" == a.config.position.left &&
            "100%" == a.config.position.top &&
            a.measurable &&
            a.viewstates &&
            a.viewstates[c] &&
            (f = a.viewstates[c].inview);
          a.config &&
            "20%" == a.config.position.left &&
            "20%" == a.config.position.top &&
            a.viewstates &&
            a.viewstates[c] &&
            (e = a.viewstates[c].inview);
          a.config &&
            "80%" == a.config.position.left &&
            "80%" == a.config.position.top &&
            a.viewstates &&
            a.viewstates[c] &&
            (w = a.viewstates[c].inview);
        });
        return (d && w) || (f && e);
      }
      function l(b) {
        a.b.forEach(b.periscopeManagerList, function (a) {
          a && a.killAllPixels();
        });
        b.periscopeManagerList = null;
      }
      function B(b) {
        if (
          "object" !== typeof b ||
          "function" !== typeof b.insertableFunc ||
          !a.b.f(b.pixels) ||
          0 == b.pixels.length
        )
          return !1;
        var c = !1;
        a.b.forEach(b.pixels, function (a) {
          (a.id &&
            a.target &&
            a.container &&
            "object" === typeof a.position &&
            "string" === typeof a.position.top &&
            "string" === typeof a.position.left) ||
            (c = !0);
        });
        return !c;
      }
      function v(b, c) {
        this.config = b;
        this.measurable = this.inserted = !1;
        this.viewstates = {};
        this.manager = c;
        this.killed = !1;
        this.cbNames = [];
        this.skipWidthCheck = !1;
        this.loopIds = [];
        this.getPeriscopeAssetURI = function () {
          return "https://z.moatads.com/swf/p6.v3.swf";
        };
        this.getDummyPixel = function (b) {
          if (!b) return !1;
          var c = !1;
          a.b.forEach(
            b.manager && b.manager.pixels,
            function (a) {
              a.config &&
                "dummy" === a.config.name &&
                (c = a);
            }
          );
          return c;
        };
        this.resetDummyPixel = function (b) {
          if (a.d.br && (b = b && b[0])) {
            if (b.dummyPixel) b = b.dummyPixel;
            else {
              b = this.getDummyPixel(b);
              if (!b) return;
              b.dummyPixel = b;
            }
            var c = b.manager && b.manager.adNum;
            if (
              "number" === typeof c &&
              !isNaN(c) &&
              (c = F && F[c])
            ) {
              var d = b.config && b.config.id;
              if ("string" === typeof d) {
                var e =
                  b.element &&
                  b.element.getAttribute &&
                  b.element.getAttribute("style");
                if ("string" === typeof e) {
                  var f = b.wrapperDiv;
                  if (f) {
                    var w = b.cbNames && b.cbNames[0];
                    if (w) {
                      var l = b.cbNames && b.cbNames[1];
                      if (l) {
                        var r = b.targetDoc;
                        r &&
                          (a.y.b(c, d, !0),
                          t({
                            ad: c,
                            elem: f,
                            cbName: w,
                            rcbName: l,
                            options: {
                              width: b.width,
                              height: b.height,
                              style: e,
                              id: d,
                              frameborder: 0,
                            },
                            noLog: !0,
                            isDummy: !0,
                          }),
                          (b.element =
                            r.getElementById(d)));
                      }
                    }
                  }
                }
              }
            }
          }
        };
        this.resetDummyPixelCB = a.o.j(
          a.b.dl([[this]], this.resetDummyPixel, this)
        );
        this.insertIntoDOM = function () {
          if (this.inserted) return !1;
          var b, d, e, f;
          e = -9999;
          w
            ? ((d = b = 2), a.d.dv && 10 > y && (f = e = 0))
            : ((d = b = 1), (f = 0));
          a.d.br && (d = b = 8);
          this.config.dimensions &&
            ((b = this.config.dimensions.width),
            (d = this.config.dimensions.height));
          var l =
            "position: absolute; width: " +
            b +
            "px; height: " +
            d +
            "px; z-index: " +
            e +
            "; border-style: none;";
          K &&
            (l =
              "position: absolute !important; width: " +
              b +
              "px !important; height: " +
              d +
              "px !important; z-index: " +
              e +
              "!important; border-style: none !important; display: block !important; -webkit-transform: translate3d(0, 0, 0) !important;");
          a.d.br &&
            (l += "pointer-events: none !important;");
          e = this.config.id;
          var r = this.getPeriscopeAssetURI(),
            q = this.calcPosition();
          if (!q) return !1;
          var q =
              l +
              "left: " +
              q.left +
              "px; top: " +
              q.top +
              "px;",
            h = l + "left: 0px; top: 0px;",
            E = this.config.target.ownerDocument;
          this.targetDoc = E;
          var g = a.b.ej(this.config.target);
          if (!g) return !1;
          l =
            "MoatPSCB_" +
            F[this.manager.adNum].yg +
            "_" +
            x.floor(1e8 * x.random());
          g[l] = this.onStateChangeCB;
          this.cbNames.push(l);
          if (a.d.br) {
            var v = "MoatPSRCB" + x.floor(1e8 * x.random());
            g[v] = this.resetDummyPixelCB;
            this.cbNames.push(v);
          }
          var z = this.config.callback,
            k = this.config.callbackName;
          z && k && ((g[k] = z), this.cbNames.push(k));
          g =
            "sco=" +
            encodeURIComponent(l) +
            "&tvs=" +
            this.manager.getTargetViewState();
          E = E.createElement("div");
          E.id = "moatPxDiv" + x.ceil(1e6 * x.random());
          E.style.width = "0px";
          E.style.height = "0px";
          E.style.position = "absolute";
          E.style.top = "0px";
          E.style.left = "0px";
          this.wrapperDiv = E;
          a.b.ca(E, this.config.container);
          r =
            '<object type="application/x-shockwave-flash" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="' +
            b +
            '" height="' +
            d +
            '" style="' +
            q +
            '" id="' +
            e +
            '"><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="false" /><param name="movie" value="' +
            r +
            '" /><param name="quality" value="low" /><param name="hasPriority" value="true" /><param name="FlashVars" value="' +
            g +
            '" /><param name="bgcolor" value="" /><param name="wmode" value="transparent" /><embed type="application/x-shockwave-flash" src="' +
            r +
            '" quality="low" flashvars="' +
            g +
            '" bgcolor="" wmode="transparent" width="' +
            b +
            '" height="' +
            d +
            '" id="' +
            e +
            'e" name="' +
            e +
            '" style="' +
            h +
            '" hasPriority="true" allowscriptaccess="always" allowFullScreen="false" type="application/x-shockwave-flash" /></object>';
          a.d.dv &&
            ((this.config.customPixel = !0),
            (this.config.customFn = a.ab.a),
            (this.config.preserveDom = !0),
            (this.config.argument = y),
            (k = l));
          if (a.d.br) {
            if (
              !t({
                ad: F[c.adNum],
                elem: E,
                cbName: l,
                rcbName: v,
                options: {
                  width: b,
                  height: d,
                  style: q,
                  id: e,
                  frameborder: f,
                },
                noLog: !1,
                isDummy:
                  this.config &&
                  "dummy" === this.config.name,
              })
            )
              return !1;
            c.measurable = !0;
            c.fullyMeasurable = !0;
            c.dentsuMeasurable = !0;
            c.anyMeasurable = !0;
          } else if (!a.d.bg) E.innerHTML = r;
          else if (this.config.customPixel) {
            b = p({
              ad: F[c.adNum],
              elem: E,
              cbName: k,
              name: this.config.name,
              options: {
                width: b,
                height: d,
                style: q,
                id: e,
                frameborder: f,
                scrolling: "no",
              },
              noLog: !1,
              customFn: this.config.customFn,
              argument: this.config.argument,
              preserveDom: this.config.preserveDom,
              customPixelDiv: this.config.customPixelDiv,
            });
            if (!b) return !1;
            b.killFn && (this.config.killFn = b.killFn);
            a.d.dv &&
              ((c.measurable = !0),
              (c.fullyMeasurable = !0),
              (c.dentsuMeasurable = !0),
              (c.anyMeasurable = !0));
          }
          return (this.inserted = !0);
        };
        this.startIntervals = function () {
          var b = this.getPixelElement();
          if (!b) return !1;
          if (
            8 == y &&
            (this.manager.getTargetViewState() ===
              H.STAGE_WIDTH ||
              this.manager.getTargetViewState() ===
                H.ACTIVE_STAGE_WIDTH)
          ) {
            var c = "positionToggle#" + this.config.id;
            this.loopIds.push(c);
            a.o.h()[c] ||
              ((this.positionTogglingEnabled = !0),
              this.positionOffsets ||
                (this.positionOffsets = {}),
              a.o.o(
                this.positionToggle,
                { pxSwf: b, pxRef: this },
                100,
                c
              ));
          }
          this.manager.getTargetViewState() ===
            H.STAGE_WIDTH &&
            ((c = "stageWidthLoop#" + this.config.id),
            this.loopIds.push(c),
            a.o.h()[c] ||
              a.o.o(
                this.stageWidthToggle,
                {
                  pxSwf: b,
                  pxRef: this,
                  originalWidth: b.style.width,
                  widthRe: /^[0-9\.]+/i,
                  updates: 0,
                },
                150,
                c
              ));
          this.manager.getTargetViewState() ===
            H.ACTIVE_STAGE_WIDTH &&
            ((c = "activeStageWidthLoop#" + this.config.id),
            this.loopIds.push(c),
            a.o.h()[c] ||
              a.o.o(
                this.stageWidthToggle,
                {
                  pxSwf: b,
                  pxRef: this,
                  originalWidth: b.style.width,
                  widthRe: /^[0-9\.]+/i,
                  updates: 0,
                  active: !0,
                  onWidthCheck: this.config.onWidthCheck,
                },
                200,
                c
              ));
        };
        this.stageWidthToggle = function (a) {
          if (!(a.pxSwf && a.pxSwf.parentNode && a.pxRef))
            return !1;
          if (
            a.onWidthCheck &&
            (a.onWidthCheck(a.pxRef),
            a.pxRef.skipWidthCheck)
          )
            return !0;
          var b;
          if (
            a.parsedWidth ||
            (b = a.pxSwf.style.width.match(a.widthRe))
          )
            if (
              (a.parsedWidth ||
                (a.parsedWidth = parseInt(b[0], 10)),
              1 == a.updates
                ? ((a.updates = 0),
                  (a.pxSwf.style.width = a.originalWidth),
                  (b = a.parsedWidth))
                : ((a.updates = 1),
                  (b =
                    1 < a.parsedWidth
                      ? a.parsedWidth - 1
                      : a.parsedWidth + 1),
                  (a.pxSwf.style.width = b + "px")),
              a.active && a.pxSwf.currentPW)
            )
              try {
                a.pxSwf.currentPW(b);
              } catch (c) {}
        };
        this.positionToggle = function (a) {
          if (!a.pxRef || !a.pxRef.element) return !1;
          0 > a.pxRef.positionOffsets.yOffset
            ? ((a.pxRef.positionOffsets.yOffset = 0),
              (a.pxRef.positionOffsets.xOffset = 0))
            : ((a.pxRef.positionOffsets.yOffset = -2e3),
              (a.pxRef.positionOffsets.xOffset = -2e3));
          a.pxRef.updatePosition(!0);
        };
        this.onStateChange = function (b) {
          if (!this.measurable) {
            this.measurable = !0;
            var c;
            b &&
              b[0] &&
              b[0].rev &&
              (c = b[0].rev.match(S)) &&
              3 == c.length &&
              (T = c[2]);
            this.updateFocusState();
            this.startIntervals();
          }
          this.inserted && this.killed
            ? ((this.killed = !1),
              this.updateFocusState(),
              this.startIntervals())
            : (a.b.forEach(
                b,
                function (a) {
                  this.viewstates[a.name] = a;
                },
                this
              ),
              this.manager.onStateChange(this, b));
        };
        this.onStateChangeCB = a.o.j(
          a.b.dl([], this.onStateChange, this)
        );
        this.calcPosition = function () {
          var b = {},
            c = this.config.position.left,
            d = ga(this.config.position.top),
            c = ga(c),
            e,
            f;
          this.config.positionTarget
            ? this.config.positionTargetWindow
              ? (this.targetRect = new a.x.n(
                  this.config.positionTarget,
                  this.config.positionTargetWindow,
                  null,
                  !0
                ))
              : ((this.targetRect = new a.x.n(
                  this.config.positionTarget,
                  null,
                  null,
                  !0
                )),
                (this.config.positionTargetWindow =
                  this.targetRect.win))
            : ((this.targetRect = this.targetRect
                ? new a.x.n(
                    this.config.target,
                    this.targetRect.win,
                    null,
                    !0
                  )
                : new a.x.n(
                    this.config.target,
                    null,
                    null,
                    !0
                  )),
              0 == this.targetRect.left &&
                0 == this.targetRect.right &&
                0 == this.targetRect.top &&
                0 == this.targetRect.bottom &&
                "EMBED" == this.targetRect.el.nodeName &&
                null == this.targetRect.el.offsetParent &&
                this.config.target.parentNode &&
                ((this.targetRect = new a.x.n(
                  this.config.target.parentNode,
                  null,
                  null,
                  !0
                )),
                (this.config.positionTarget =
                  this.config.target.parentNode)));
          e = a.x.f("left", this.targetRect.win);
          f = a.x.f("top", this.targetRect.win);
          var w;
          this.wrapperDiv &&
          (w = this.wrapperDiv.offsetParent) &&
          "BODY" !== w.nodeName
            ? (this.offsetRect = this.offsetRect
                ? new a.x.n(
                    w,
                    this.offsetRect.win,
                    null,
                    !0
                  )
                : new a.x.n(w, null, null, !0))
            : (this.offsetRect = { left: -e, top: -f });
          if (!d || !c) return !1;
          if ("%" == d.type)
            (b.relativeTop =
              (d.val / 100) * this.targetRect.height),
              (b.top =
                this.targetRect.top -
                this.offsetRect.top +
                (d.val / 100) * this.targetRect.height);
          else if ("px" == d.type)
            (b.relativeTop = d.val),
              (b.top =
                this.targetRect.top -
                this.offsetRect.top +
                d.val);
          else return !1;
          if ("%" == c.type)
            (b.relativeLeft =
              (c.val / 100) * this.targetRect.width),
              (b.left =
                this.targetRect.left -
                this.offsetRect.left +
                (c.val / 100) * this.targetRect.width);
          else if ("px" == c.type)
            (b.relativeLeft = c.val),
              (b.left =
                this.targetRect.left -
                this.offsetRect.left +
                c.val);
          else return !1;
          b &&
            b.top &&
            b.left &&
            this.targetRect &&
            (b.top ==
              this.targetRect.top +
                this.targetRect.height && --b.top,
            b.left ==
              this.targetRect.left +
                this.targetRect.width && --b.left);
          return b;
        };
        this.maxPositionUpdateInterval = 200;
        this.getStyle = function (a) {
          var b;
          try {
            b = a && a.style;
          } catch (c) {}
          return b;
        };
        this.updatePosition = function (a) {
          var b = new D().getTime(),
            c;
          if (
            !this.element ||
            !(c = this.getStyle(this.element)) ||
            this.killed ||
            (!a &&
              b - this.lastPositionUpdate <
                this.maxPositionUpdateInterval)
          )
            return !1;
          this.lastPositionUpdate = b;
          a = this.calcPosition();
          if (!a) return !1;
          this.positionOffsets &&
            ((a.left += this.positionOffsets.xOffset || 0),
            (a.top += this.positionOffsets.yOffset || 0));
          c.left =
            this.width + a.relativeLeft >
            this.targetRect.width
              ? x.floor(a.left - this.width) + "px"
              : 0 == a.relativeLeft
              ? x.floor(a.left) + "px"
              : x.floor(a.left - 0.5 * this.width) + "px";
          c.top =
            this.height + a.relativeTop >
            this.targetRect.height
              ? x.floor(a.top - this.height) + "px"
              : 0 == a.relativeTop
              ? x.floor(a.top) + "px"
              : x.floor(a.top - 0.5 * this.height) + "px";
          return !0;
        };
        this.updateFocusState = function () {
          var a = this.getPixelElement();
          if (a && this.measurable)
            try {
              a.updateFocusState(this.currentFocusState);
            } catch (b) {}
        };
        this.kill = function (b) {
          var c = this.getPixelElement(),
            d = a.b.ej(c),
            e = a.b.ej(this.config.target);
          d &&
            c &&
            c.dataMoatTIDS &&
            a.b.forEach(c.dataMoatTIDS, function (a) {
              d.clearTimeout(a);
            });
          a.b.forEach(this.loopIds, function (b) {
            a.o.g(b);
          });
          for (
            var c = 0, f = this.cbNames.length;
            c < f;
            c++
          )
            try {
              (e[this.cbNames[c]] = null),
                delete e[this.cbNames[c]];
            } catch (w) {}
          this.targetDoc = null;
          return this.wrapperDiv &&
            this.wrapperDiv.parentNode
            ? (this.wrapperDiv.parentNode.removeChild(
                this.wrapperDiv
              ),
              (this.killed = !0),
              (this.inserted = !1),
              (this.element = this.wrapperDiv = null),
              b &&
                (this.config &&
                  this.config.killFn &&
                  "function" ===
                    typeof this.config.killFn &&
                  (this.config.killFn(),
                  (this.config.killFn = null)),
                (this.config = null)),
              !0)
            : !1;
        };
        this.getPixelElement = function () {
          var a,
            b,
            c = this.config && this.config.id;
          if (this.targetDoc && c) {
            a = this.targetDoc.getElementById(c);
            if ((b = !!(a && a.isPxSwf && a.isPxSwf())))
              return a;
            a = this.targetDoc.getElementById(c + "e");
            if ((b = !!(a && a.isPxSwf && a.isPxSwf())))
              return a;
          }
          return !1;
        };
        if (
          "embed" === b.container.nodeName ||
          "object" === b.container.nodeName
        ) {
          var d;
          a.b.forEach(a.b.ew(b.container), function (a) {
            if (
              "embed" !== a.nodeName &&
              "object" !== a.nodeName
            )
              return (d = a), !1;
          });
          if (!d) return !1;
          this.config.container = d;
        }
        if (!q) {
          var e = document.getElementById(
            "moatPxCont" + this.manager.contId
          );
          e ||
            ((e = document.createElement("div")),
            (e.id = "moatPxCont" + this.manager.contId),
            (e.offsetWidth =
              this.config.target.offsetWidth),
            (e.offsetHeight =
              this.config.target.offsetHeight),
            (e.offsetTop =
              this.config.target.offsetTop || "0px"),
            (e.offsetLeft =
              this.config.target.offsetLeft || "0px"),
            (e.style.position = "absolute"),
            (e.style.overflow = "hidden"),
            (e.style.zIndex = -9999),
            a.b.ca(e, this.config.container));
          this.config.container = e;
          this.config.container &&
            !this.manager.container &&
            (this.manager.container =
              this.config.container);
        }
        if (!this.insertIntoDOM()) return !1;
        this.element = this.targetDoc.getElementById(
          this.config.id
        );
        if (!this.element) return !1;
        e = new a.x.n(this.element, null, null, !0);
        this.width = e.width;
        this.height = e.height;
        if (!this.updatePosition()) return !1;
        this.currentFocusState = a.focus.pageIsVisible();
        this.focusCheckingLoop = function (b) {
          var d = a.focus.pageIsVisible();
          if (!b.pxRef) return !1;
          var e = b.pxRef;
          e.currentFocusState != d &&
            ((e.currentFocusState = !e.currentFocusState),
            e.killed || e.updateFocusState(),
            a.d.br &&
              ((b =
                c &&
                "number" === typeof c.adNum &&
                F[c.adNum]),
              (e = e && e.config && e.config.id),
              b &&
                e &&
                a.y &&
                a.y.call(
                  b,
                  e,
                  "(function(){var innerFunction = window && window['" +
                    (d ? "onFocus" : "onBlur") +
                    "'];if (typeof innerFunction === 'function') { innerFunction(); } }())"
                )));
        };
        this.rebuildOnFocusLoss = function () {
          w &&
            (this.currentFocusState ||
            this.killed ||
            !this.inserted
              ? this.currentFocusState &&
                this.killed &&
                !this.inserted &&
                (this.insertIntoDOM.call(this),
                (this.element =
                  this.targetDoc.getElementById(
                    this.config.id
                  )) && this.updatePosition())
              : this.kill());
        };
        this.rebuildTarget = function (a, b) {
          this.config.target = a;
          this.config.container = b;
          this.targetDoc = this.config.target.ownerDocument;
          this.updatePosition();
        };
        this.positionUpdateLoop = function (a) {
          if (!a.pxRef) return !1;
          a.pxRef.killed || a.pxRef.updatePosition();
        };
        var e = "focusCheckingLoop#" + this.config.id,
          f = "positionUpdateLoop#" + this.config.id;
        this.loopIds.push(e);
        this.loopIds.push(f);
        a.o.o(
          this.focusCheckingLoop,
          { pxRef: this },
          200,
          e
        );
        a.o.o(
          this.positionUpdateLoop,
          { pxRef: this },
          500,
          f
        );
        this.inserted = !0;
        this.insertionTime = new D().getTime();
      }
      function A(b, l) {
        this.insertedAllSuccessfully =
          this.insertSuccessful = !1;
        this.pixels = [];
        this.adNum = l;
        this.anyInview =
          this.fullyInview =
          this.inview =
            !1;
        this.edgesInView = {};
        this.edgesInView.tlPixelInview = !1;
        this.twentyPercentInView =
          this.dentsuInview =
          this.dentsuMeasurable =
          this.anyMeasurable =
          this.fullyMeasurable =
          this.measurable =
          this.reachedAnyInview =
          this.reachedFullyInview =
          this.reachedInview =
          this.edgesInView.brPixelInview =
            !1;
        this.getPixelByName = function (b) {
          var c;
          a.b.forEach(this.pixels, function (a) {
            if (a.config.name && a.config.name == b)
              return (c = a), !1;
          });
          return c || !1;
        };
        this.getTargetViewState = function () {
          var b = H.FRAME_RATE;
          (!w && !J) ||
            a.d.dv ||
            (b = H.ACTIVE_STAGE_WIDTH);
          K && !a.d.br && (b = H.ACTIVE_STAGE_WIDTH);
          return b;
        };
        this.onStateChange = function (b, w) {
          var l = this.getTargetViewState(),
            E = a.focus.pageIsVisible(),
            q = "undefined" != typeof F && F[this.adNum];
          b.targetRect &&
            ((this.isBigAd = a.w.a(
              b.targetRect.calcArea()
            )),
            q &&
              q.viewstats &&
              (q.viewstats.isBigAd = this.isBigAd));
          this.anyMeasurable || (this.anyMeasurable = !0);
          this.fullyMeasurable ||
            (this.fullyMeasurable = n(this, l));
          this.measurable ||
            ((this.measurable = m(this, l)),
            (P = new D().getTime()));
          this.dentsuMeasurable ||
            (this.dentsuMeasurable = h(this, l));
          if (1 == w.length) {
            if (w[0].name != l) return !1;
          } else {
            var v = !0;
            a.b.forEach(w, function (a) {
              if (a.name == l) return (v = !1);
            });
            if (v || !E) return !1;
          }
          this.anyMeasurable &&
            (this.anyInview = g(this, l));
          this.measurable &&
            ((this.anyInview = g(this, l)) &&
              !this.reachedAnyInview &&
              (this.reachedAnyInview = !0),
            (this.inview = c(this, l)),
            (this.thirtyPercentInView = f(this, l)),
            this.inview &&
              !this.reachedInview &&
              (this.reachedInview = !0),
            !r && K && q && ((r = !0), a.ac.a(q)));
          this.fullyMeasurable &&
            (this.fullyInview = e(this, l)) &&
            !this.reachedFullyInview &&
            (this.reachedFullyInview = !0);
          this.dentsuMeasurable &&
            ((this.dentsuInview = z(this, l)),
            (this.twentyPercentInView = d(this, l)));
          a.n.a.zaxs("periscope:onStateChange", this.adNum);
        };
        this.getViewStats = function () {
          var b = 0;
          if (this.fullyInview) b = 1;
          else if (this.dentsuInview) b = 0.8;
          else if (this.inview) b = 0.5;
          else if (this.twentyPercentInView) b = 0.2;
          else if (
            this.anyInview ||
            (this.reachedAnyInview &&
              !this.sentReachedAnyInview)
          )
            (this.sentReachedAnyInview = !0), (b = 0.01);
          var c = "pscope" === a.v.a(this.adNum);
          this.edgesInView &&
            c &&
            a.n.a.zaxs("adEdgesViewStatus", this.adNum, {
              topLeft: this.edgesInView.tlPixelInview,
              topRight: this.edgesInView.tlPixelInview,
              bottomLeft: this.edgesInView.brPixelInview,
              bottomRight: this.edgesInView.brPixelInview,
            });
          b = {
            isVisible: this.inview,
            isFullyVisible: this.fullyInview,
            isDentsuVisible: this.dentsuInview,
            percv: b,
          };
          b.isVisible =
            this.inview ||
            (this.isBigAd && this.thirtyPercentInView);
          return b;
        };
        this.getPercentViewable = function (b, c) {
          var d = this.getTargetViewState(),
            e = [],
            f = b * c,
            w,
            l,
            r;
          a.b.forEach(this.pixels, function (a) {
            a.measurable &&
              a.viewstates &&
              a.viewstates[d] &&
              a.viewstates[d].inview &&
              ((l = parseInt(a.config.position.top)),
              -1 < a.config.position.top.indexOf("%") &&
                (l = (l / 100) * c),
              e.push(l));
          });
          0 === e.length
            ? (w = 0)
            : ((w = x.min.apply(null, e)),
              (r = x.max.apply(null, e)),
              (w = b * (r - w)));
          return x.round((w / f) * 100);
        };
        this.killDentsuPixels = function () {
          a.b.forEach(this.pixels, function (b) {
            !b.config ||
              ("dentsuTopLeft" !== b.config.name &&
                "dentsuBottomRight" !== b.config.name) ||
              ((a.d.br || a.d.dv) &&
                a.y.b(F[b.manager.adNum], b.config.id),
              b.kill());
          });
        };
        this.rebuildPixelTargets = function (b, c) {
          if (!b || !c) return !1;
          a.b.forEach(this.pixels, function (a) {
            a.rebuildTarget(b, c);
          });
        };
        this.killAllPixels = function () {
          a.b.forEach(this.pixels, function (a) {
            a.kill(!0);
          });
          this.pixels = [];
        };
        this.updateContainer = function (b) {
          function c(b, f) {
            var w = e[f],
              l = e.style && e.style[b];
            if (!a.b.fh(w))
              if (a.b.fh(l)) w = l;
              else return !1;
            if (d[f] === w || !d.style) return !1;
            d.style[b] = w + "px";
          }
          b.container ||
            (b.container = document.getElementById(
              "moatPxCont" + b.contId
            ));
          b.adElement ||
            (b.adElement = F[b.adNum] && F[b.adNum].aa);
          var d = b.container,
            e = b.adElement;
          if (!d || !e) return !1;
          c("left", "offsetLeft");
          c("top", "offsetTop");
          c("width", "offsetWidth");
          c("height", "offsetHeight");
        };
        if (b.insertableFunc()) {
          var E = 0;
          this.contId = x.ceil(1e6 * x.random());
          a.b.forEach(
            b.pixels,
            function (a, b) {
              this.pixels.push(new v(a, this));
              this.pixels[b].inserted &&
                (E++, (this.insertSuccessful = !0));
            },
            this
          );
          this.insertedAllSuccessfully =
            E === this.pixels.length;
          q ||
            a.o.o(
              this.updateContainer,
              this,
              200,
              "pixelContainerResizeLoop" + this.contId
            );
        }
      }
      var q,
        r = !1,
        y,
        w,
        E,
        J,
        H,
        G,
        T,
        K = !1,
        ga,
        C = !1,
        S = /([0-9a-z]+-[a-z]+)-(.*)/i,
        P;
      (function () {
        y = a.b.t();
        w = null !== y;
        E = "number" === typeof a.d.ao();
        J = a.d.an();
        q = !0;
        b();
        H = {
          FRAME_RATE: "fr",
          STAGE_WIDTH: "sd",
          ACTIVE_STAGE_WIDTH: "asd",
          THROTTLE: "td",
          RAPID_THROTTLE: "rtd",
        };
        G = a.d.k();
        T = a.b.dw && a.b.dw();
        if (G)
          try {
            K = 5 < a.b.bb();
          } catch (c) {}
        var d = /([0-9]+(?:\.[0-9]+)?)(\%|px)/i;
        ga = (function () {
          var a = {};
          return function (b) {
            if ("string" !== typeof b) return !1;
            if ("undefined" !== typeof a[b]) return a[b];
            var c, e;
            (c = b.match(d)) &&
              3 == c.length &&
              ((e = c[2]),
              (c =
                -1 != c[1].indexOf(".")
                  ? parseInt(c[1], 10)
                  : parseFloat(c[1], 10)));
            if ("number" !== typeof c) return !1;
            a[b] = { val: c, type: e };
            return a[b];
          };
        })();
      })();
      a.r = a.r || {};
      a.r.c = u;
      a.r.d = k;
      a.r.e = function (b) {
        var c = 0,
          d = b.getTargetViewState();
        a.b.forEach(b.pixels, function (a) {
          a.measurable &&
            a.viewstates &&
            a.viewstates[d] &&
            c++;
        });
        return c === b.pixels.length;
      };
      a.r.f = n;
      a.r.g = m;
      a.r.h = g;
      a.r.i = c;
      a.r.j = e;
      a.r.k = function (b) {
        a.n.a.azsx("adKilled", l, {
          once: !0,
          condition: function (a) {
            return b.zr === a.zr;
          },
        });
        B(b.periscopeConfig) || (b.periscopeConfig = k(b));
        b.periscopeManager = new A(b.periscopeConfig, b.zr);
        C = b.periscopeManager.insertSuccessful;
        b.periscopeManagerList ||
          (b.periscopeManagerList = []);
        b.periscopeManagerList.push(b.periscopeManager);
        return b.periscopeManager.insertSucceeded;
      };
      a.r.l = function () {
        q = !0;
      };
      a.r.m = function () {};
      a.r.b = function () {
        var b;
        b = a.d.bg || !a.d.bf || "0" === a.b.dw();
        var c = a.d.br || a.d.dv,
          d = w || J;
        return b && !c
          ? !1
          : (!a.b.l() || c) && !a.d.c() && (d || E || K);
      };
      a.r.n = function (b) {
        var c = 11;
        a.d.dv && (c = 14);
        a.d.br && (c = 12);
        b.viewabilityMethod.pscope = c;
        return b && b.periscopeManager
          ? ((c =
              b.periscopeManager.pixels &&
              b.periscopeManager.pixels[0] &&
              b.periscopeManager.pixels[0].targetRect) &&
              b.viewstats &&
              (b.viewstats.isBigAd = a.w.a(c.calcArea())),
            a.v.b(b, !1) &&
              a.aa.a(b.zr) &&
              b.periscopeManager.killDentsuPixels(),
            b.periscopeManager.getViewStats())
          : { isVisible: !1 };
      };
      a.r.o = function () {};
      a.r.p = function () {
        return w;
      };
      a.r.q = function () {
        return E;
      };
      a.r.r = function () {
        return T;
      };
      a.r.s = function () {
        return K;
      };
      a.r.a = function () {
        return C;
      };
      a.r.t = function () {
        return P;
      };
    })();
    (function () {
      function b(b, c, e, f, h, g, q) {
        g || a.f.y(h);
        var r;
        r =
          1 == arguments.length
            ? arguments[0]
            : {
                el: b,
                url: c,
                flashVars: f,
                adIds: h,
                opt_props: q,
              };
        if (g) {
          if ("function" === typeof g) return g(b, c, f, h);
          g.em = !0;
          F[g.zr] = g;
          b[R] = g.zr;
          b[M] = !0;
          g.aa = b;
          a.n.a.zaxs("adElementUpdate");
          g.INITIAL_WIDTH = b.offsetWidth;
          g.INITIAL_HEIGHT = b.offsetHeight;
          g.ae = c;
          g.an = m(b);
          0 === g.an && (g.WMODE = p(b));
          g.ag = f || {};
          a.m.c(g);
          r = { e: 0 };
          r.q = g.aq[0]++;
          a.ad.a(g, r);
          a.n.a.zaxs("adLoaded", g);
          (this.periscopeManager &&
            this.periscopeManager.insertSuccessful) ||
            (q && q.IS_PAGE_LEVEL) ||
            (g.periscopeManager &&
              g.periscopeManager.killAllPixels(),
            (g.periscopeConfig = !1),
            a.r.k(g));
          return g;
        }
        return F[h.adNum] ? F[h.adNum] : new k(r);
      }
      function t(b) {
        b.de = isNaN(b.ao.startTime)
          ? +new D()
          : b.ao.startTime;
        b.RAND = b.ao.rand;
        new D().getTime();
        a.v.c(b);
        a.d.c() || a.ae.a.a();
        a.m.c(b);
        b.aa.parentNode &&
          "swiffycontainer" === b.aa.parentNode.id &&
          a.af.a(
            ["..../../iframe ~ #clicktag"],
            b,
            b.aa.parentNode
          );
        a.n.a.zaxs("startAdTracking", b);
        b.dd = !0;
        var c = { e: 0 };
        c.q = b.aq[0]++;
        a.ad.a(b, c);
        a.n.a.zaxs("adLoaded", b);
      }
      function p(b) {
        var c = {
            window: 0,
            transparent: 1,
            opaque: 2,
            direct: 3,
            gpu: 4,
          },
          e;
        if ("EMBED" === b.tagName)
          e = a.b.getAttribute(b, "wmode");
        else if ("OBJECT" === b.tagName) {
          b = b.getElementsByTagName("param");
          for (var f = 0; f < b.length; f++) {
            var g = b[f],
              h = a.b.getAttribute(g, "name"),
              g = a.b.getAttribute(g, "value");
            if ("wmode" === h) {
              e = g;
              break;
            }
          }
        }
        return (e && c[e.toLowerCase()]) || 5;
      }
      function u(b) {
        try {
          if (!b) return !1;
          var c = b,
            e;
          if ("DIV" === c.tagName || "A" === c.tagName)
            (c = b.getElementsByTagName("EMBED")[0]) ||
              (c = b.getElementsByTagName("OBJECT")[0]),
              c || (c = b.getElementsByTagName("IMG")[0]),
              c || (c = b);
          1 === c.nodeType &&
            "IMG" !== c.nodeName &&
            "EMBED" !== c.nodeName &&
            "OBJECT" !== c.nodeName &&
            (c =
              b.getElementsByTagName("EMBED")[0] ||
              b.getElementsByTagName("OBJECT")[0] ||
              b.getElementsByTagName("IMG")[0] ||
              b);
          if ("OBJECT" === c.tagName) {
            for (var f = 0; f < c.children.length; f++)
              if (
                "movie" === c.children[f].name ||
                "Movie" === c.children[f].name
              )
                e = c.children[f].value;
            c.object && c.object.Movie
              ? (e = c.object.Movie)
              : c.data &&
                -1 !== c.data.indexOf("swf") &&
                (e = c.data);
          }
          ("EMBED" !== c.tagName && "IMG" !== c.tagName) ||
            !c.src ||
            (e = c.src);
          e || (e = a.b.dz(c));
          if (!e)
            for (
              var g = a.e.c.a, c = 0;
              c < g.length;
              c++
            ) {
              var h = g[c](b);
              h && (e = h);
            }
          return { adURL: e, flashVars: {} };
        } catch (q) {
          return !1;
        }
      }
      function k(b) {
        var c = b.el,
          e = b.url,
          f = b.flashVars,
          g = b.adIds,
          h = b.opt_props,
          q = a.b.dr(g);
        this.getFormat = function () {
          return q;
        };
        new D().getTime();
        this.ao = g;
        this.FIND_AD_TRIES = g.numTries || 0;
        var r = u(c);
        if (r && r.adURL && f)
          for (var y in r.flashVars)
            r.flashVars.hasOwnProperty(y) &&
              (f[y] = r.flashVars[y]);
        r && r.flashVars && (f = r.flashVars);
        if (
          "string" !== typeof e ||
          "div" === e.toLowerCase() ||
          "a" === e.toLowerCase()
        )
          e = (r && r.adURL) || "-";
        e &&
          0 !== e.toLowerCase().indexOf("http:") &&
          0 !== e.toLowerCase().indexOf("https:") &&
          ("//" === e.substring(0, 2)
            ? (e = window.location.protocol + e)
            : "/" === e[0]
            ? (e =
                window.location.protocol +
                "//" +
                window.location.host +
                e)
            : ((r = window.location.pathname
                .split("/")
                .slice(0, -1)
                .join("/")),
              (e =
                window.location.protocol +
                "//" +
                window.location.host +
                "/" +
                r +
                (r ? "/" : "") +
                e)));
        "IFRAME" !== c.tagName &&
          "IMG" !== c.tagName &&
          -1 === e.indexOf("googlesyndication") &&
          (e = e.split("?")[0]);
        this.zr = g.adNum;
        this.MMAK_ID = g.mmakAdKey
          ? g.mmakAdKey
          : "m" + this.zr;
        this.yg = a.b.dm();
        !g.mmakAdKey &&
          a.b.fb() &&
          (this.MMAK_ID += "_beta");
        this.TAGID = a.d.av;
        a.s.g(this.yg, a.d.at.a);
        F[this.zr] = this;
        n(this.zr, [c]);
        this.ae = e;
        this.aa = c;
        a.n.a.zaxs("adElementUpdate");
        this.isInIframe =
          (this.WINDOW = e = a.b.ej(this.aa)) &&
          e != e.parent;
        this.proxyTrackingEnabled = this.isSREMeasurable =
          !1;
        this.debugData = {
          version: "3",
          trueVisiblePercent: null,
          update: function (a) {
            this.trueVisiblePercent = a;
          },
          getValue: function () {
            var a;
            a =
              "number" === typeof this.trueVisiblePercent
                ? x.round(100 * this.trueVisiblePercent)
                : "-";
            return this.version + ":" + a;
          },
        };
        this.setDimensions = function () {
          var b;
          b = new a.x.n(c);
          this.INITIAL_WIDTH = parseInt(b.width);
          this.INITIAL_HEIGHT = parseInt(b.height);
        };
        this.setDimensions();
        "undefined" === typeof f && (f = {});
        a.s.e(fa);
        this.eg = [];
        this.ee = {};
        (this.periscopeManager &&
          this.periscopeManager.insertSuccessful) ||
          (h && h.IS_PAGE_LEVEL) ||
          ((this.ed = {}), a.r.k(this));
        a.w.b.a(this);
        a.w.c.a(this);
        a.ag.a(this);
        this.get_width = function () {
          return g.initWidth
            ? g.initWidth
            : this.INITIAL_WIDTH
            ? this.INITIAL_WIDTH
            : !1;
        };
        this.get_height = function () {
          return g.initHeight
            ? g.initHeight
            : this.INITIAL_HEIGHT
            ? this.INITIAL_HEIGHT
            : !1;
        };
        this.getScreenRealEstate = function (b) {
          var c,
            d = a.d.ad(),
            e = a.d.ae();
          b = this.INITIAL_WIDTH;
          c = this.INITIAL_HEIGHT;
          return d && e && b && c
            ? x.max(0, x.min(1, (b * c) / (d * e)))
            : 0;
        };
        a.ac.b(this);
        this.ag = f;
        this.ai = 0;
        this.an =
          this.am =
          this.al =
          this.ak =
          this.aj =
            void 0;
        this.ar = [];
        this.as = [];
        this.at = [];
        f = a.ah.a;
        this.av = this.au = f.ze.zj;
        this.ax = f.zf.zl;
        this.ay = f.zg.zl;
        this.ba = this.az = f.zh.zn;
        this.bb = f.zi.zp;
        this.by =
          this.bx =
          this.bw =
          this.bv =
          this.bu =
          this.bt =
          this.bs =
          this.br =
          this.bq =
          this.bp =
          this.bo =
          this.bm =
          this.bl =
          this.bk =
          this.bi =
          this.bh =
          this.bg =
          this.bf =
          this.be =
          this.bd =
          this.bc =
            void 0;
        this.ca = this.bz = !1;
        this.cb = this.cu = this.ct = void 0;
        this.cc = +new D() + 12e4;
        this.ci = +new D();
        this.cl = this.cm = void 0;
        this.cn = 0;
        this.ck = f.cr.zp;
        this.cf = this.ce = this.dt = this.cd = !1;
        this.af = Number(this.ef);
        this.eq = !1;
        this.ds = this.ch = this.dr = this.cg = 0;
        this.dq = this.bn = void 0;
        this.IR5 = {
          MIN: { x: void 0, y: void 0 },
          MAX: { x: void 0, y: void 0 },
          AREA: 0,
        };
        this.dm = 0;
        this.ep = this.dd = !1;
        this.aq = {};
        this.aq.g = 0;
        this.aq[1] = 0;
        this.aq[2] = 0;
        this.aq[3] = 0;
        this.aq[13] = 0;
        this.aq[0] = 0;
        this.aq[4] = 0;
        this.aq[5] = 0;
        this.aq[6] = 0;
        this.aq[7] = 0;
        this.aq[9] = 0;
        this.aq[8] = 0;
        this.aq[15] = 0;
        this.aq[16] = 0;
        this.aq[21] = 0;
        this.aq[22] = 0;
        this.aq[23] = 0;
        this.aq[37] = 0;
        this.aq.tc = 0;
        this.aq[46] = 0;
        this.es = [5, 10, 15, 30, 60];
        this.doa = [5, 10, 15, 30, 60];
        this.wasEverInView =
          this.isCurrentlyTransparent =
          this.isCurrentlyStacked =
            void 0;
        this.an =
          b.adType ||
          (b.opt_props && b.opt_props.adType) ||
          m(c);
        0 === this.an && (this.WMODE = p(c));
        a.b.ab(this.aa);
        b.opt_props &&
          b.opt_props.components &&
          ((this.components = b.opt_props.components),
          (this.isCompositeAd = !0));
        this.viewabilityMethod = {};
        this.viewabilityPercent = {};
        this.viewabilityPercent.strict = "-";
        this.viewabilityPercent.sframe = "-";
        this.viewabilityPercent.pscope = "-";
        this.isValidAdSize = function () {
          return a.b.db(this.aa);
        };
        a.b.aj() &&
          AB_SCAFFOLD.debugMetrics.setAdElement(this.aa, O);
        a.n.a.zaxs("adInitialized", this);
        t(this);
      }
      function n(a, b) {
        for (var c = 0; c < b.length; c++) {
          var e = b[c];
          e[R] = a;
          e[M] = !0;
        }
      }
      function m(a) {
        return "IFRAME" === a.tagName
          ? 2
          : "IMG" === a.tagName
          ? 1
          : "EMBED" === a.tagName || "OBJECT" === a.tagName
          ? 0
          : 3;
      }
      function h(b, f) {
        a.b.a(f.cc);
        e(f);
        a.b.aj() &&
          AB_SCAFFOLD.debugMetrics.clearDebugData(O);
        c(f, 1) && a.n.a.sxaz("adKilled", { id: b });
      }
      function g(b, e) {
        c() && a.n.a.sxaz("adNotFound", { id: b });
      }
      function c(b, c) {
        var e = 0,
          f;
        for (f in F)
          F.hasOwnProperty && F.hasOwnProperty(f) && e++;
        return e <= (c || 0)
          ? (a.n.a.esgf("allLocalAdsKilled"), !0)
          : !1;
      }
      function e(b) {
        if (b && b.video && !b.video.started) return !1;
        var c = { e: 21 };
        c.q = b.aq[21]++;
        var e = b.ao.adNum;
        a.ai.a(e, c);
        a.ad.a(b, c);
        a.ai.b(e);
        b.unloadPixelSent = !0;
      }
      function f(b, c) {
        for (var e = 0, f = c.length; e < f; e++)
          a.m.d(b, c[e]);
      }
      a.e = a.e || {};
      a.e.d = function () {};
      a.e.e = e;
      a.e.f = function (a) {};
      a.e.g = g;
      a.e.h = n;
      a.e.i = function () {};
      a.e.j = function (b) {
        var c = +new D(),
          e = c - b.ci,
          f;
        if (0 < b.doa.length) {
          var g = 1e3 * b.doa[0];
          if (b.counters.laxDwell.tCur >= g) {
            b.doa.shift();
            f = b.es.length ? b.es[0] : 60;
            if (g < f) return !1;
            if (5e3 < e) return !0;
          }
        }
        return 0 < b.es.length &&
          ((f = 1e3 * b.es[0]), a.v.d(b, f))
          ? (b.es.shift(), !0)
          : 0 === b.doa.length && c > b.cc
          ? ((b.cc *= 2), !0)
          : !1;
      };
      a.e.k = function (a, b, c, e, f, g, q, r) {};
      a.e.l = function () {};
      a.e.c = {};
      a.e.m = function (a) {
        a.ep = !0;
        delete F[a.zr];
        try {
          a.aa &&
            ((a.aa[M] = null),
            (a.aa[R] = null),
            (a.aa = null));
        } catch (b) {}
        a.groupmV2 = null;
        a.groupmV3 = null;
        a.periscopeManager = null;
        a.secondaryCounters = null;
        a.mouseEventElements = null;
        a.publicis = null;
      };
      a.e.n = h;
      a.e.o = function (a) {};
      a.e.p = function () {};
      a.e.q = m;
      a.e.b = function () {
        var b, c;
        for (c in F)
          F.hasOwnProperty(c) &&
            (b = F[c]) &&
            !b.ep &&
            a.ac.c(b);
      };
      a.e.r = t;
      a.e.s = b;
      a.e.t = function (a) {};
      a.e.u = function () {};
      a.e.v = function (a) {
        return a && a.video;
      };
      a.e.w = function (c, e, g, h, v, k, q, r) {
        q = q || {};
        q.components = c;
        v.adFindingMethod = "COMPOSITE_ADS";
        if ((e = b(c[0], e, g, h, v, k, q)))
          return (
            (e.isCompositeAd = !0),
            (e.components = c),
            a.b.h(r) && r.length === c.length
              ? f(e, r)
              : f(e, c),
            e
          );
      };
      a.e.x = function () {};
      a.e.a = c;
      a.e.y = f;
      a.e.c || (a.e.c = {});
      a.e.c.a = [];
      a.n.a.azsx("adKilled", h, { includeId: !0 });
      a.n.a.azsx("adNotFound", g, { includeId: !0 });
    })();
    (function () {
      function b(a) {
        var b = [];
        if ("string" !== typeof a) return !1;
        for (
          var c, e = !1, f = /(.*?[^\\])(?:\\\\)*\//;
          a;

        ) {
          if (n(a, ".../")) c = ".../";
          else if (n(a, "...../")) c = "...../";
          else if (n(a, "../") || n(a, "..../")) {
            c = n(a, "../") ? "../" : "..../";
            for (var d = c.length; n(a.substring(d), c); )
              d += c.length;
            c = a.substring(0, d);
          } else
            n(a, "=>/")
              ? (c = "=>/")
              : n(a, "-/")
              ? (c = "-/")
              : n(a, "+/")
              ? (c = "+/")
              : n(a, "$[")
              ? ((c = a.length),
                (d = m(a, "]/") + 2),
                (c = a.substring(0, x.min(c, d))))
              : n(a, "^/")
              ? (c = "^/")
              : n(a, "IN_IFRAME/")
              ? (c = "IN_IFRAME/")
              : n(a, "IN_X_FRAME/")
              ? (c = "IN_X_FRAME/")
              : (n(a, "${")
                  ? ((c = a.length),
                    (d = m(a, "}/") + 2),
                    (c = a.substring(0, x.min(c, d))))
                  : (c =
                      (e = f.exec(a)) && e[0] ? e[0] : a),
                (e = !0));
          (a = a.substring(c.length)) &&
            e &&
            ((c = c.substring(0, c.length - 1)), (e = !1));
          b.push(c);
        }
        return b;
      }
      function t(b, g) {
        var c = [];
        a.b.forEach(b, function (a) {
          (a = u(a, g)) && c.push(a);
        });
        return c;
      }
      function p(b) {
        if (!b) return !1;
        if (
          !a.d.h() ||
          10 < a.b.t() ||
          (b.querySelectorAll &&
            b.querySelector &&
            (!b.MoatQSShimSet || b[k]))
        )
          return !0;
        b.querySelector = function (a) {
          a = this.querySelectorAll(a);
          return a.length ? a[0] : null;
        };
        b.querySelectorAll = function (a) {
          var b = [],
            e = this.ownerDocument || document,
            f = e.createElement("style");
          (e = e.getElementsByTagName("head")[0]) &&
            e.insertBefore(
              f,
              e.childNodes[
                x.max(e.childNodes.length - 1, 0)
              ] || null
            );
          f &&
            f.styleSheet &&
            (f.styleSheet.cssText = a + "{shimtest:bar}");
          a = this.getElementsByTagName("*");
          for (var e = a.length, d = 0; d < e; d++)
            a[d].currentStyle &&
              "bar" === a[d].currentStyle.shimtest &&
              (b[b.length] = a[d]);
          f.parentNode.removeChild(f);
          return b;
        };
        b.MoatQSShimSet = !0;
        return (b[k] = !0);
      }
      function u(h, g, c) {
        function e(a) {
          if (l && 0 < l.length)
            for (var b = l.length, c = 0; c < b; c++)
              a = a.replace("$" + c, l[c]);
          return a;
        }
        var f = function (b, c) {
          if (!b || !c) return !1;
          if (b.matches) return b.matches(c);
          if (!p(b.parentNode)) return !1;
          var d = b.parentNode.querySelectorAll(c);
          if (!d || !d.length) return !1;
          var e = !1;
          a.b.forEach(d, function (a) {
            a === b && (e = !0);
            return !e;
          });
          return e;
        };
        h = b(h);
        if (!h) return !1;
        for (
          var d = g,
            k = 0,
            l = [],
            m = function (b) {
              return b && a.l.b(b);
            },
            v = function (a) {
              return a && a.parentElement;
            },
            A = function (b) {
              return b ? (b = a.l.n(b)) && b.body : !1;
            },
            q = function (a, b, c) {
              return a
                ? (a = a.getAttribute(b)) &&
                  (c = new RegExp(c).exec(a)) &&
                  c.length &&
                  0 < c.length
                  ? c[c.length - 1]
                  : !1
                : !1;
            },
            r = 0;
          r < h.length && 100 > k;
          r++
        ) {
          var y = h[r];
          n(y, "${") && (y = y.substring(2, y.length - 1));
          if (n(y, "../") || n(y, "..../")) {
            var w, E;
            n(y, "../")
              ? ((w = "../"), (E = v))
              : ((w = "..../"), (E = m));
            if (0 !== y.length % w.length) return !1;
            for (var J = 0; J < y.length / w.length; J++) {
              if (!d || "HTML" === d.nodeName) return !1;
              d = E(d);
              k++;
            }
          } else if (".../" === y)
            for (y = h[r + 1] && e(h[r + 1]); 100 > k; ) {
              if (d && f(d, y)) {
                r++;
                break;
              }
              if (!d || "HTML" === d.nodeName) return !1;
              d = d.parentElement;
              k++;
            }
          else if ("...../" === y) {
            d =
              a.d.e() &&
              a.d.e().document &&
              a.d.e().document.body;
            if (!d) return !1;
            k++;
          } else if ("=>/" === y) {
            d = A(d);
            if (!d) return !1;
            k++;
          } else if ("-/" === y) {
            d = a.b.previousElementSibling(d);
            if (!d) return !1;
            k++;
          } else if ("+/" === y) {
            if (((d = a.b.nextElementSibling(d)), !d))
              return !1;
          } else if (n(y, "$["))
            if (
              ((y =
                (w =
                  (y = y.substring(2, y.length - 2)) &&
                  y.split("|")) && w[0]),
              (w = w && w[1]),
              y && w)
            )
              if ((y = q(d, y, w))) l.push(y), k++;
              else return !1;
            else return !1;
          else if ("^/" === y) {
            d = g;
            if (!d) return !1;
            k++;
          } else if ("IN_IFRAME/" === y) {
            if (!a.d.s()) return !1;
            k++;
          } else if ("IN_X_FRAME/" === y) {
            if (!a.d.ec) return !1;
            k++;
          } else if (((y = e(y)), !f(d, y))) {
            if (!p(d)) return !1;
            d = d.querySelectorAll(y);
            if (c && r === h.length - 1) return d ? d : !1;
            if (!d || 1 !== d.length) return !1;
            d = d[0];
          }
        }
        return d;
      }
      var k = "MoatQSShimOrd_" + L + "_" + a.d.be,
        n = function (a, b) {
          return 0 === a.indexOf(b) && b;
        },
        m = function (a, b) {
          var c = a.indexOf(b);
          return 0 > c ? a.length + 1 : c;
        };
      a.af = a.af || {};
      a.af.b = t;
      a.af.c = b;
      a.af.d = function (b, g) {
        var c = [];
        a.b.forEach(b, function (a) {
          if ((a = u(a, g, !0)))
            for (var b = 0; b < a.length; b++) c.push(a[b]);
        });
        return c;
      };
      a.af.a = function (b, g, c) {
        b = t(b, c);
        a.b.forEach(b, function (b) {
          a.m.d(g, b);
        });
        return !!b;
      };
    })();
    (function (a) {
      function t(c, e, f, d, g, l) {
        l || (l = window);
        a.aj.b = c;
        var h = a.aj.g,
          v = a.aj.h,
          k = a.aj.i,
          q = 0,
          r = function () {
            var w;
            e.numTries = q++;
            if (
              (e._celtraDiv && a.aj.c(r, null, e)) ||
              (a.l.f(l) &&
                l.ebCfg &&
                43 == l.ebCfg.formatId &&
                1 == l.ebCfg.dlm &&
                ((e._willLazyLoadSizmek = !0),
                a.aj.c(r, null, e)))
            )
              return !0;
            if (!w)
              try {
                v && (w = v(c, e, f, d, null, l));
              } catch (g) {}
            if (
              !w &&
              ((w = h(c, e, f, d, null, l)), !0 === w)
            )
              return !0;
            var E;
            (E = w && !0) &&
              a.b.forEach(a.aj.a.a, function (a) {
                if (a && "function" === typeof a)
                  try {
                    a(w);
                  } catch (b) {}
              });
            return E;
          },
          y = a.o.p(e.adNum, "adFinding");
        a.o.c(r, (y && y.maxTries) || k, 500, g);
      }
      function p(c, e, f, d, g) {
        var l,
          h,
          v,
          k,
          q = a.d.e().document.getElementById("eyeDiv");
        if (
          N &&
          N.id &&
          0 <= N.id.indexOf("ebebDnlScript")
        ) {
          var r = N.id.split("_");
          r && 3 === r.length && ((v = r[1]), (k = r[2]));
        }
        v = v || g.ebAdID;
        k = k || g.ebRand;
        v && k && (h = v + "_" + k);
        if (
          h &&
          "object" === typeof g.ebAds &&
          g.ebAds[h] &&
          (k =
            g.ebAds[h].visibilityMgr &&
            g.ebAds[h].visibilityMgr._res) &&
          a.b.eu(k) &&
          ((e.adFindingMethod = "SIZMEKADS"),
          (l = a.e.s(k, k.nodeName, !1, void 0, e, f)))
        )
          return l;
        if (
          (l = (function () {
            var c = [],
              d = a.af.b(
                ["iframe[id*='header_iframe_" + h + "']"],
                q
              )[0],
              w = a.af.b(
                [
                  "iframe[id*='leftgutter_iframe_" +
                    h +
                    "']",
                ],
                q
              )[0],
              g = a.af.b(
                [
                  "iframe[id*='rightgutter_iframe_" +
                    h +
                    "']",
                ],
                q
              )[0];
            if (d)
              if (a.b.eu(d)) c.push(d);
              else return !1;
            if (w)
              if (a.b.eu(w)) c.push(w);
              else return !1;
            if (g)
              if (a.b.eu(g)) c.push(g);
              else return !1;
            if (
              c &&
              0 < c.length &&
              (l = a.e.w(
                c,
                c[0].nodeName,
                !1,
                void 0,
                e,
                f
              ))
            )
              return (e.adFindingMethod = "SIZMEKADS-1"), l;
          })())
        )
          return (
            (e.adFindingMethod = e._willLazyLoadSizmek
              ? "SIZMEKADS-Composite-PL"
              : "SIZMEKADS-Composite"),
            l
          );
        if (e._willLazyLoadSizmek) return !1;
        if (v && g.gEbBanners && a.b.f(g.gEbBanners)) {
          var y = !1;
          a.b.forEach(g.gEbBanners, function (a) {
            if (a && a.adData && a.adData.nAdID == v)
              return (y = a), !1;
          });
          if (
            y &&
            (g =
              y.displayUnit &&
              y.displayUnit.defaultPanel &&
              y.displayUnit.defaultPanel.panelDiv) &&
            g.nodeName &&
            "div" == g.nodeName.toLowerCase() &&
            (l = m(g, e, f, d))
          )
            return (
              (e.adFindingMethod = "SIZMEKADS banner"), l
            );
        }
        g = c.getElementsByTagName("div");
        g = a.b.av(g);
        "DIV" === c.nodeName && g.push(c);
        if (g && 0 < g.length) {
          var w = [];
          a.b.forEach(g, function (a) {
            a &&
              a.id &&
              a.id.match(/ebDiv\d+/) &&
              w.push(a);
          });
          if (
            w &&
            0 < w.length &&
            a.d.e() &&
            a.d.e().document
          ) {
            var E;
            a.b.forEach(w, function (c) {
              var d = a.d.e().document.getElementById(c.id);
              if (d && d !== c) return (E = d), !1;
            });
            if (E) {
              if ((l = m(E, e, f, d))) return l;
              if (E && a.b.eu(E) && d(E)) {
                if (
                  ((e.adFindingMethod = "SIZMEKADS adDvi"),
                  (l = a.e.s(
                    E,
                    E.nodeName,
                    !1,
                    void 0,
                    e,
                    f
                  )))
                )
                  return l;
              } else {
                c = E.getElementsByTagName("iframe");
                g = E.id.split("ebDiv")[1];
                var n = new RegExp(
                    "ebBannerIFrame_\\d+_" + g
                  ),
                  H;
                if (
                  c &&
                  0 < c.length &&
                  (a.b.forEach(c, function (c) {
                    if (
                      c &&
                      c.id &&
                      c.id.match(n) &&
                      a.b.eu(c)
                    )
                      return (H = c), !1;
                  }),
                  H &&
                    d(H) &&
                    ((e.adFindingMethod =
                      "SIZMEKADS banner iframe"),
                    (l = a.e.s(
                      H,
                      H.nodeName,
                      !1,
                      void 0,
                      e,
                      f
                    ))))
                )
                  return l;
              }
            }
          }
        }
        if (
          h &&
          q &&
          ((d = a.af.b(["div[id*='" + h + "']"], q)[0]) ||
            (d = a.af.b(
              ["div[id^='eb'][id*='" + h + "']"],
              q
            )[0]),
          d &&
            ((l = m(d, e, f)) ||
              (a.b.eu(d) &&
                ((e.adFindingMethod = "SIZMEKADS-Breakout"),
                (l = a.e.s(
                  d,
                  d.nodeName,
                  !1,
                  void 0,
                  e,
                  f
                ))))))
        )
          return l;
      }
      function u(c, e, f, d, g, l) {
        var h,
          v,
          k,
          q,
          r = [];
        if (
          (h = d
            ? d
            : l.Adform &&
              l.Adform.ADFBannerData &&
              "string" ===
                typeof l.Adform.ADFBannerData.BN &&
              l.Adform.ADFBannerData.BN)
        ) {
          if (
            (d =
              (c = l.Adform && l.Adform.adRegister) && c[h])
          )
            (k =
              d.collapsedContent &&
              d.collapsedContent._element),
              (q =
                d.expandedContent &&
                d.expandedContent._element),
              (v =
                d.adBox &&
                d.adBox._attributes &&
                d.adBox._attributes.element);
          v ||
            a.b.forEach(
              l.Adform && l.Adform.adData,
              function (a) {
                if (
                  (v =
                    a && a.bn && a.bn == h && a.container)
                )
                  return !1;
              }
            );
          if (
            k &&
            q &&
            (a.b.eu(k) || a.b.eu(q)) &&
            ((e.adFindingMethod =
              "ADFORMADS two-element expandable"),
            (l = a.e.s(k, k.nodeName, !1, void 0, e, f, {
              adType: 2,
            })))
          )
            return (
              (l.adformCollapsedEl = k),
              (l.adformExpandedEl = q),
              l
            );
          if (
            q &&
            a.b.eu(q) &&
            ((e.adFindingMethod =
              "ADFORMADS Single-element expandable"),
            (l = a.e.s(q, q.nodeName, !1, void 0, e, f, {
              adType: 2,
            })))
          )
            return l;
          if (v && a.b.eu(v)) {
            c &&
              a.b.forEach(c, function (c, d) {
                if (
                  d &&
                  d.indexOf &&
                  -1 < d.indexOf(h + "#")
                ) {
                  var e =
                    c &&
                    c.adBox &&
                    c.adBox._attributes &&
                    c.adBox._attributes.element;
                  e && e !== v && a.b.eu(e) && r.push(e);
                }
              });
            if (
              0 < r.length &&
              (r.unshift(v),
              (l = a.e.w(
                r,
                r[0].nodeName,
                !1,
                void 0,
                e,
                f,
                { adType: 2 }
              )))
            )
              return (
                (e.adFindingMethod = "ADFORMADS composite"),
                l
              );
            e.adFindingMethod = "ADFORMADS-1";
            if (
              (l = a.e.s(v, v.nodeName, !1, void 0, e, f, {
                adType: 2,
              }))
            )
              return l;
          }
        }
      }
      function k(c, e, f, d, g, l) {
        if (
          g &&
          l &&
          (d = a.aj.j(
            [
              "div[id='ym_" +
                g +
                "'] > iframe/=>/div[id='" +
                l +
                "']",
            ],
            c,
            e,
            f
          ))
        )
          return (e.adFindingMethod = "YIELDMOADS"), d;
        if (
          (d = a.aj.j(
            [
              "..../iframe[id$='_tpi']/$[id|([0-9]*)_tpi]/../[id='$0']",
              "..../iframe[id$='_tpi']/../div.ym/$[data-lf-id|([0-9]+)]/iframe/=>/[id='$0']",
            ],
            c,
            e,
            f
          ))
        )
          return (e.adFindingMethod = "YIELDMOADS-1"), d;
        if (
          (d = a.aj.j(
            ["div.ym/iframe/=>/body/video.video-elem"],
            c,
            e,
            f
          ))
        )
          return (e.adFindingMethod = "YIELDMOADS-2"), d;
        if ((d = a.aj.j(["div.ym"], c, e, f)))
          return (e.adFindingMethod = "YIELDMOADS-3"), d;
      }
      function n(c, e, f, d) {
        var g = function (c) {
          return a.af.b(
            ["div.celtra-ad-v3", "div.celtra-ad-v4"],
            c
          )[0];
        };
        d = function (c, d) {
          var e,
            f = a.aj.m(c, a.aj.p);
          a.b.forEach(f, function (c) {
            if (c.offsetWidth * c.offsetHeight === d)
              return (e = a.l.n(c).body), !1;
          });
          return e ? e : !1;
        };
        var l = function () {
            var d,
              e = a.aj.m(c, a.aj.p);
            a.b.forEach(e, function (c) {
              if (
                (c = (c = a.l.n(c)) && c.documentElement) &&
                g(c)
              )
                return (d = g(c)), !1;
            });
            return d;
          },
          h = function () {
            if (a.d.t()) {
              var d = a.l.j(c);
              if (d) {
                var e = a.b.ej(d) === a.d.e(),
                  f = a.d.c() && "BODY" === d.nodeName;
                (e && f) ||
                  (celtraDiviInParentFrame = g(d));
              }
            }
          },
          v;
        e._celtraDiv
          ? (v = e._celtraDiv)
          : ((v = g(c)) || (v = l()), v || (v = h()));
        var k;
        v &&
          (k =
            v && v.celtra && v.celtra.viewabilityObservee);
        if (k && a.b.eu(k))
          return (
            (e.adFindingMethod = "Celtra API"),
            (e = a.e.s(k, k.nodeName, !1, void 0, e, f)),
            (f = a.b.eh(e)),
            (k = d(k, f)) && a.m.d(e, k),
            e
          );
        v && !k && (e._celtraDiv = v);
        return !1;
      }
      function m(c, e, f, d) {
        d =
          d ||
          function () {
            return !0;
          };
        if (!c) return !1;
        var g = a.b.t(),
          l = null !== g && 11 > g;
        if (!l)
          for (
            var h = c.getElementsByTagName("embed"), g = 0;
            g < h.length;
            g++
          ) {
            var v = h[g];
            if (
              !0 !== v[M] &&
              -1 === v.id.indexOf("moatPx") &&
              a.b.eu(v) &&
              v.getAttribute("src") &&
              d(v)
            ) {
              var k = v.getAttribute("src");
              d = {};
              e.adFindingMethod = "AOL-1";
              return (g = a.e.s(v, k, !1, d, e, f));
            }
          }
        for (
          var q = c.getElementsByTagName("object"), g = 0;
          g < q.length;
          g++
        )
          if (
            ((h = q[g]),
            a.b.eu(h) &&
              d(h) &&
              ("undefined" === typeof h[M] ||
                !0 !== h[M]) &&
              -1 == h.id.indexOf("moatPx"))
          ) {
            for (var r = 0; r < h.children.length; r++)
              if (
                "movie" === h.children[r].name ||
                "Movie" === h.children[r].name
              )
                if (
                  ((k = h.children[r].value),
                  !k || !k.match("scorecardresearch"))
                )
                  for (
                    var y = 0;
                    y < h.children.length;
                    y++
                  ) {
                    if (
                      !l &&
                      "EMBED" === h.children[y].tagName
                    ) {
                      v = h.children[y];
                      if (
                        ("undefined" !== typeof v[M] &&
                          !0 === v[M]) ||
                        -1 != v.id.indexOf("moatPx")
                      )
                        continue;
                      if (a.b.eu(v) && d(v))
                        return (
                          (d = {}),
                          (e.adFindingMethod = "AOL Embed"),
                          (g = a.e.s(v, k, !1, d, e, f))
                        );
                    }
                    if (
                      "OBJECT" === h.children[y].tagName &&
                      ((v = h.children[y]),
                      a.b.eu(v) &&
                        !0 !== v[M] &&
                        -1 === v.id.indexOf("moatPx") &&
                        d(v))
                    )
                      return (
                        (e.adFindingMethod = "AOL Object"),
                        (g = a.e.s(
                          v,
                          void 0,
                          !1,
                          void 0,
                          e,
                          f
                        ))
                      );
                  }
            h.object && h.object.Movie
              ? (k = h.object.Movie)
              : h.data && (k = h.data);
            if (!k || !k.match("scorecardresearch"))
              return (
                (d = {}),
                (e.adFindingMethod = "SWF ads"),
                (g = a.e.s(h, k, !1, d, e, f))
              );
          }
        if ((g = a.aj.o(c, e, f, d))) return g;
        k = c.getElementsByTagName("img");
        for (g = 0; g < k.length; g++)
          if (
            ((l = k[g]),
            ("undefined" === typeof l[M] || !0 !== l[M]) &&
              a.b.eu(l) &&
              (v = l.getAttribute("src")) &&
              "" !== v &&
              -1 === document.location.href.indexOf(v) &&
              d(l))
          )
            return (
              (e.adFindingMethod =
                "Standard Image Ad finding "),
              a.e.s(l, v, !1, void 0, e, f)
            );
        if (
          (c =
            (g = c.getElementsByTagName("canvas")) && g[0])
        ) {
          if (1 === g.length && a.b.eu(c))
            return (
              (e.adFindingMethod = "AKQAGAPGEN Canvas"),
              (e = a.e.s(c, c.nodeName, !1, void 0, e, f))
            );
          if (1 < g.length) {
            if (d(c.parentNode) && a.b.eu(c.parentNode))
              return (
                (e.adFindingMethod = "AKQAGAPGEN-1"),
                (e = a.e.s(
                  c.parentNode,
                  c.parentNode.nodeName,
                  !1,
                  void 0,
                  e,
                  f
                ))
              );
            if (
              a.b.eu(c) &&
              ((e.adFindingMethod = "AKQAGAPGEN-2"),
              (e = a.e.s(c, c.nodeName, !1, void 0, e, f)))
            )
              return (
                a.d.s()
                  ? a.af.a([".../body"], e, c)
                  : a.af.a(["../div"], e, c),
                e
              );
          }
        }
        return !1;
      }
      function h(c, e) {
        var f = [];
        if (!c) return f;
        for (
          var d = a.b.f(c)
              ? c
              : c.getElementsByTagName("iframe"),
            g,
            l = 0;
          l < d.length;
          l++
        )
          if (((g = d[l]), !g[M])) {
            var h = a.l.n(g) ? !1 : !0;
            ((1 === e && h && a.b.eu(g)) ||
              (2 === e && !h)) &&
              f.push(g);
          }
        return f;
      }
      a.aj = {};
      a.aj.a = {};
      a.aj.a.a = [];
      a.aj.b = void 0;
      a.aj.c = function (c, e, f) {
        var d = f && f.adNum;
        if ("undefined" === typeof d) {
          try {
            var g =
                "undefined" !== typeof omidNative &&
                ("undefined" === typeof Image ||
                  (Image && Image._MoatProxyOf)),
              l = g ? "" : document.referrer,
              h =
                "undefined" !== typeof AB_SCAFFOLD &&
                2 === AB_SCAFFOLD.type,
              k =
                "undefined" !== typeof a && a.d && a.d.l
                  ? a.d.l
                  : "",
              n =
                "https://px.moatads.com/pixel.gif?e=24&d=data%3Adata%3Adata%3Adata&i=" +
                escape(
                  "undefined" === typeof L
                    ? h
                      ? "HEARSTMAGAZINES2_BETA"
                      : "HEARSTMAGAZINES2"
                    : L
                ) +
                "&k=" +
                escape(
                  "Problem setting waitForKnownAd, adNum not defined"
                ) +
                "&ar=" +
                escape("fde231f50fe-clean") +
                "&iw=" +
                escape("4a7adaa") +
                "&bq=" +
                escape(k) +
                "&j=" +
                escape(l) +
                "&cs=" +
                new D().getTime();
            g
              ? omidNative.sendUrl(n)
              : (new Image(1, 1).src = n);
          } catch (q) {}
          return !1;
        }
        return (g = a.o.p(d, "adFinding")) && g.id
          ? (a.b.a(g.id),
            a.o.l(d, "adFinding"),
            e ||
              (e = function () {
                a.ad.b(11, f);
              }),
            a.o.c(c, 9999, 500, e),
            !0)
          : !1;
      };
      a.aj.d = function (c) {
        c = c && c.ao && c.ao.adNum;
        if ("undefined" === typeof c)
          try {
            var e =
                "undefined" !== typeof omidNative &&
                ("undefined" === typeof Image ||
                  (Image && Image._MoatProxyOf)),
              f = e ? "" : document.referrer,
              d =
                "undefined" !== typeof AB_SCAFFOLD &&
                2 === AB_SCAFFOLD.type,
              g =
                "undefined" !== typeof a && a.d && a.d.l
                  ? a.d.l
                  : "",
              l =
                "https://px.moatads.com/pixel.gif?e=24&d=data%3Adata%3Adata%3Adata&i=" +
                escape(
                  "undefined" === typeof L
                    ? d
                      ? "HEARSTMAGAZINES2_BETA"
                      : "HEARSTMAGAZINES2"
                    : L
                ) +
                "&k=" +
                escape(
                  "Problem clearing adfinding timeout, adNum not defined"
                ) +
                "&ar=" +
                escape("fde231f50fe-clean") +
                "&iw=" +
                escape("4a7adaa") +
                "&bq=" +
                escape(g) +
                "&j=" +
                escape(f) +
                "&cs=" +
                new D().getTime();
            e
              ? omidNative.sendUrl(l)
              : (new Image(1, 1).src = l);
          } catch (h) {}
        else if ((e = a.o.p(c, "adFinding")))
          a.b.a(e.id), a.o.l(c, "adFinding");
      };
      a.aj.e = function (c, e) {
        var f = c && c.adNum;
        a.n.a.azsx("startAdTracking", a.aj.d, {
          once: !0,
          condition: function (a) {
            return a.ao.adNum === c.adNum;
          },
        });
        a.n.a.azsx("adNotFoundTimeout", a.aj.d, {
          once: !0,
          condition: function (a) {
            return a.ao.adNum === c.adNum;
          },
        });
        var d = a.o.e(function () {
            c &&
              !c.shouldKillTimeout &&
              !1 === C.i[fa] &&
              (a.ad.b(11, c),
              a.n.a.zaxs("adNotFoundTimeout", { ao: c }),
              ca());
          }, e),
          g = x.floor(e / 500);
        a.o.m(f, "adFinding", d, { maxTries: g });
      };
      a.aj.f = function () {
        var c = arguments;
        a.focus.pageIsPrerendered()
          ? a.n.a.azsx(
              "noLongerPreRendered",
              function (a) {
                t.apply(this, c);
              },
              { once: !0 }
            )
          : t.apply(this, c);
      };
      a.aj.o = function (c, e, f, d) {
        d =
          d ||
          function () {
            return !0;
          };
        c = h(c, 1);
        if (c[0] && a.b.eu(c[0]) && d(c[0]))
          return (
            (e.adFindingMethod = "findIframeAds"),
            a.e.s(c[0], c[0].src, !1, void 0, e, f)
          );
      };
      a.aj.a.b = [];
      a.aj.n = function (c, e, f, d, g) {
        var l, h;
        d = a.aj.m(d || c, a.aj.p);
        for (g = 0; g < d.length; g++) {
          h = d[g];
          var k = a.l.n(h);
          if (k && k.documentElement) {
            a: {
              l = c;
              for (
                var n = e,
                  q = f,
                  r = h,
                  y = k,
                  w,
                  E = a.aj.a.b,
                  J = 0;
                J < E.length;
                J++
              )
                if ((w = E[J](l, n, q, r, y))) {
                  n.adFindingMethod =
                    "override file friendly iframe hooks";
                  l = w;
                  break a;
                }
              l = void 0;
            }
            if (l) return l;
            a: {
              l = e;
              n = f;
              if (
                h.id &&
                h.id.match("ebBannerIFrame") &&
                a.b.eu(h) &&
                ((l.adFindingMethod =
                  "sizmek banner iframe"),
                (h = a.e.s(
                  h,
                  h.nodeName,
                  !1,
                  void 0,
                  l,
                  n
                )))
              ) {
                l = h;
                break a;
              }
              l = void 0;
            }
            if (l) return l;
            if (
              (l = a.aj.j(
                ["[id='ad']"],
                k.documentElement,
                e,
                f
              ))
            )
              return (e.adFindingMethod = "ad"), l;
            if ((l = m(k.documentElement, e, f)))
              return (
                (e.adFindingMethod =
                  "Domsearch friendly iframe"),
                l
              );
            if (l) return l;
          }
        }
      };
      a.aj.q = function (a, b, f) {};
      a.aj.l = function (a, b, f) {
        return !1;
      };
      a.aj.r = function (c, e) {
        if (!xa && !1 !== c.shouldKillAd) {
          var f = new D().getTime() - e.ao.startTime;
          !0 !== e.em &&
            !0 !== e.preventTryFindingAdAgain &&
            5e3 > f &&
            (a.aj.s(e), (c.shouldKillAd = !1));
        }
      };
      var g = a.n.a.azsx("beforeAdKilled", a.aj.r);
      a.n.a.azsx(
        "allLocalAdsKilled",
        function () {
          a.n.a.sxaz("beforeAdKilled", { id: g });
        },
        { once: !0 }
      );
      a.aj.s = function (c) {
        if (!0 !== c.em) {
          delete F[c.zr];
          a.b.a(c.cc);
          c.periscopeManager &&
            c.periscopeManager.killAllPixels();
          var e;
          (e = N && N.parentNode) &&
            a.aj.f(
              e,
              c.ao,
              c,
              void 0,
              function () {
                a.ac.c(c);
              },
              void 0
            );
        }
      };
      a.aj.j = function (c, e, f, d) {
        c = a.af.b(c, e);
        var g;
        a.b.forEach(c, function (c) {
          if (a.b.eu(c)) return (g = c), !1;
        });
        if (g)
          return (
            (c = a.b.dz(g) || g.src || "DIV"),
            (f.adFindingMethod = "DOMSEARCH"),
            a.e.s(g, c, !1, void 0, f, d)
          );
      };
      a.aj.t = function (c, e, f, d, g) {
        var l = a.e.w;
        e = a.af.b(c, e);
        e = a.b.filter(e, a.b.eu);
        e.length >= (g ? c.length : 1)
          ? ((c =
              a.b.dz(e[0]) ||
              e[0].getAttribute("src") ||
              "DIV"),
            (f = l(e, c, !1, void 0, f, d)))
          : (f = void 0);
        return f;
      };
      a.aj.k = m;
      a.aj.g = function (c, e, f, d, g, l) {
        l || (l = window);
        g =
          g ||
          function () {
            return !0;
          };
        var h = a.aj.k,
          v = a.aj.l;
        if ("undefined" === typeof c) return !1;
        a.d.s() &&
          "HEAD" === c.tagName &&
          ((d = c.parentNode),
          "HTML" === d.tagName &&
            ((d = d.getElementsByTagName("body")),
            0 < d.length && (c = d[0])));
        var m;
        if ((m = n(c, e, f, g))) return m;
        if (e._celtraDiv) return !1;
        if ((m = a.aj.j(["[id='ad']"], c, e, f)))
          return (e.adFindingMethod = "DOM Id = ad"), m;
        if (
          (m = a.aj.j(
            [
              "../body/ins[class='dcmads'][data-dcm-rendering-mode='script']",
            ],
            c,
            e,
            f
          ))
        )
          return (e.adFindingMethod = "DCM ins"), m;
        if (
          (m = a.aj.j(
            [
              "div.teads-player/iframe",
              "div[id^='playArea']",
            ],
            c,
            e,
            f
          ))
        )
          return (e.adFindingMethod = "teads"), m;
        if ((m = p(c, e, f, g, l))) return m;
        if (e._willLazyLoadSizmek) return !1;
        d =
          (d = a.d.s()
            ? c.ownerDocument.documentElement
            : c) && d.getElementsByTagName("script");
        var q = {},
          r,
          y;
        d &&
          0 < d.length &&
          ((q.adform =
            /adform\.(?:com|net)\/adfscript\/?\?bn=([0-9]+)/),
          (q.yieldmo =
            /ads\.yieldmo\.com\/.*\&p=([0-9]+).*\&lf=([0-9]+)/),
          (q.yieldmo2 =
            /static\.yieldmo\.com\/ym\.[a-z0-9]{2}\.js/),
          a.b.forEach(d, function (a) {
            for (var b in q)
              if (q.hasOwnProperty(b)) {
                var c = a && a.getAttribute("src");
                if (c && (r = c.match(q[b])))
                  return (y = b), !1;
              }
          }));
        if (
          y &&
          "adform" === y &&
          (m = u(c, e, f, r && r[1], g, l))
        )
          return m;
        d = l = "";
        y &&
          a.b.ce(["yieldmo", "yieldmo2"], y) &&
          ((l = r && r[1]), (d = r && r[2]));
        if (
          (m = k(c, e, f, g, l, d)) ||
          (m = v(c, e, f)) ||
          (m = h(c, e, f, g))
        )
          return m;
        if ((m = a.aj.n(c, e, f)))
          return (e.adFindingMethod = "friendly iframe"), m;
        if ((d = a.l.j(c)))
          if ((m = a.aj.n(d, e, f)))
            return (
              (e.adFindingMethod = "find iframe parent"), m
            );
        if (a.d.t() || d)
          if ((d = d || a.l.j(c)))
            if (
              ((c = a.b.ej(d) === a.d.e()),
              (l = a.d.c() && "BODY" === d.nodeName),
              !c || !l)
            ) {
              if ((m = v(d, e, f)))
                return (
                  (e.adFindingMethod =
                    "iframe parent expandable"),
                  m
                );
              if ((m = h(d, e, f, g)))
                return (
                  (e.adFindingMethod =
                    "iframe parent findAd"),
                  m
                );
            }
        return !1;
      };
      a.aj.m = h;
      a.aj.u = 1;
      a.aj.p = 2;
      a.aj.v = 500;
      a.aj.i = 20;
      a.aj.w = { object: 1, embed: 1, img: 1, iframe: 1 };
      a.aj.x = 1e4;
      a.aj.y = "adFinding";
    })(a);
    (function () {
      function b(a) {
        "undefined" === typeof a && (a = f);
        return a;
      }
      function t(a, c) {
        var d = c || {},
          e =
            "undefined" === typeof d.hidden ? g : d.hidden,
          f =
            "undefined" === typeof d.useAnimFrame
              ? w
              : d.useAnimFrame,
          r = d.tLastFrame || h,
          l = d.doc || document,
          q = d.isDtopIE || A,
          d = d.supportsDocHasFocus || x;
        if (b(a)) return m(0), !l[e];
        if (f) return m(1), 100 > new D().getTime() - r;
        if (q && d) return m(2), l.hasFocus();
        m(3);
        return !0;
      }
      function p(a) {
        var b = a || {};
        a = b.supportsPageVis;
        b = b.tLastFrame || h;
        "undefined" === typeof a && (a = f);
        a = t(a, b);
        if (v != a && C && C.swde)
          try {
            C.swde.zaxs("focusStateChange", a);
          } catch (c) {}
        return (v = a);
      }
      function u(a) {
        var b = a || {};
        a = b.doc || document;
        b = b.visState || e;
        return "undefined" !== typeof b
          ? "prerender" == a[b]
          : !1;
      }
      function k() {
        J && a.o.i(document, c, n, "pr");
        H = !0;
      }
      function n(b) {
        b = b || c;
        u() ||
          (a.n.a.zaxs("noLongerPreRendered"),
          a.o.i(document, b, n, "pr"));
      }
      function m(a) {
        "undefined" == typeof d && (d = a);
      }
      var h,
        g,
        c,
        e,
        f,
        d,
        z,
        l,
        B,
        v,
        A,
        q,
        r,
        y,
        w,
        E = !1,
        J = !1,
        H = !1,
        G = a.d.ay,
        x = "undefined" !== typeof document.hasFocus,
        K = { visible: 0, hidden: 1, prerender: 2 };
      (function (b, d) {
        var m = d || G,
          t = b || window,
          x = t.document;
        y =
          -1 < m.indexOf("Safari") &&
          -1 == m.indexOf("Chrome") &&
          -1 == m.indexOf("Chromium") &&
          !a.b.l();
        A = a.b.u() && !a.b.l();
        "undefined" !== typeof x.hidden
          ? ((g = "hidden"), (c = "visibilitychange"))
          : "undefined" !== typeof x.mozHidden
          ? ((g = "mozHidden"), (c = "mozvisibilitychange"))
          : "undefined" !== typeof x.msHidden
          ? ((g = "msHidden"), (c = "msvisibilitychange"))
          : "undefined" !== typeof x.webkitHidden &&
            ((g = "webkitHidden"),
            (c = "webkitvisibilitychange"));
        for (
          var m = ["v", "mozV", "msV", "webkitV"], K = 0;
          K < m.length;
          K++
        ) {
          var T = m[K] + "isibilityState";
          if (
            "undefined" !== typeof x[T] &&
            null !== x[T]
          ) {
            e = T;
            break;
          }
        }
        "undefined" !== typeof t.requestAnimationFrame
          ? (l = "requestAnimationFrame")
          : "undefined" !==
              typeof t.webkitRequestAnimationFrame &&
            (l = "webkitRequestAnimationFrame");
        B = "string" == typeof l;
        f = "undefined" !== typeof g;
        w = y && B && !f;
        h = new D().getTime();
        w &&
          (function Ca() {
            h = new D().getTime();
            if (!H) t[l](Ca);
          })();
        q = C.swde.azsx(
          "focusStateChange",
          function (a) {
            a &&
              ((E = new D().getTime()),
              C.swde.sxaz("focusStateChange", {
                id: q,
                priority: 1,
              }));
          },
          { priority: 1 }
        );
        r = c;
        v = !1;
        p();
        a.n.a.azsx("allLocalAdsKilled", k, { once: !0 });
        u() && (a.o.a(x, c, n, "pr"), (J = !0));
        z = u();
      })();
      a.focus = a.focus || {};
      a.focus.focusStartTime = E;
      a.focus.visibilitychange = r;
      a.focus.pageIsVisible = p;
      a.focus.setFocusListeners = function (a) {};
      a.focus.pageIsPrerendered = u;
      a.focus.getQueryString = function (a, b) {
        var c = b || {},
          f = c.wasPrerendered || z,
          w = c.visibilityState || e,
          g = c.pageVisStatesEnum || K,
          r = c.doc || document,
          l = {};
        l.em = c.focusMethod || d;
        f && (l.eo = 1);
        "undefined" != typeof w && (l.en = g[r[w]]);
        return l;
      };
      a.focus.getFocusMethod = function () {
        return d;
      };
      a.focus.supportsPageVisAPI = b;
      a.focus.checkFocus = t;
    })();
    (function () {
      a.al = a.al || {};
      a.al.a = function (b) {
        var t = a.b.eh(b);
        t && a.w.a(t)
          ? (b.viewstats || (b.viewstats = {}),
            (b.viewstats.isBigAd = !0),
            (t = 0.3))
          : (t = 0.5);
        a.d.dc()
          ? ((b.viewabilityMethod.sframe = 3),
            (b = a.ak.a(b)))
          : a.d.bw
          ? ((b.viewabilityMethod.sframe = 4),
            (b = a.ae.b(b)))
          : (b = !1);
        t = b && !isNaN(b) && b >= t;
        t = {
          isVisible: t,
          isFullyVisible: t && 0.98 <= b,
          percv: b,
        };
        0.8 <= b && (t.isDentsuVisible = !0);
        return t;
      };
    })();
    (function () {
      var b, t, p, u;
      try {
        b =
          -1 < navigator.platform.indexOf("Mac")
            ? 102
            : 117;
      } catch (k) {
        b = 117;
      }
      t = "undefined" !== typeof window.devicePixelRatio;
      p =
        a.d.c() &&
        t &&
        "undefined" !== typeof window.innerHeight &&
        "undefined" !== typeof window.outerHeight &&
        x.round(
          window.devicePixelRatio *
            (a.d.e().outerHeight - a.d.e().innerHeight)
        );
      u = (function () {
        var b = !1;
        if (57 <= a.d.dt()) return !1;
        try {
          b =
            "undefined" !== typeof window.mozInnerScreenX &&
            "undefined" !== typeof window.screenX;
        } catch (n) {}
        return b;
      })();
      a.p = a.p || {};
      a.p.b = function () {
        var a = {};
        a.dl = Number(u);
        "number" !== typeof p || isNaN(p) || (a.dn = p);
        return a;
      };
      a.p.c = function (k, n) {
        k.viewabilityMethod.pscope = 13;
        var m,
          h,
          g,
          c = {
            isVisible: !1,
            isFullyVisible: !1,
            percv: 0,
          };
        try {
          g = k.aa.getBoundingClientRect();
          var e = n || k.WINDOW || a.b.ej(k.aa),
            f = a.d.aa(e),
            d = a.x.l(g, f),
            p = e.mozInnerScreenX,
            l = e.mozInnerScreenY,
            B = {
              left: d.left + p,
              right: d.right + p,
              top: d.top + l,
              bottom: d.bottom + l,
            },
            v = window.screenX,
            A = window.screenY,
            q = a.x.l(B, {
              left: v,
              right: v + window.outerWidth,
              top:
                A + b / (t ? window.devicePixelRatio : 1),
              bottom: A + window.outerHeight,
            }),
            r = g.width * g.height,
            y =
              ((q.right - q.left) * (q.bottom - q.top)) / r;
          "pscope" === a.v.a(k.zr) &&
            a.n.a.zaxs("rectsAvailable", k.zr, B, q);
          m = { area: r, percv: y };
          h = a.x.b(m, k);
        } catch (w) {}
        g = a.x.t;
        "undefined" !== typeof m &&
          "undefined" !== typeof h &&
          ((c.isVisible = m.percv >= h),
          (c.isFullyVisible = m.percv >= g),
          (c.percv = m.percv),
          0.8 <= m.percv && (c.isDentsuVisible = !0));
        return c;
      };
      a.p.a = function () {
        return u;
      };
    })();
    (function () {
      function b(a) {
        var b;
        B[a] ? (b = B[a]) : (B[a] = b = {});
        return b;
      }
      function t(a, c) {
        var d = b(a);
        return d && d[c];
      }
      function p(a, b, c) {
        return a && b && c
          ? (a = t(a.zr, b)) &&
              "function" == typeof a[c] &&
              a[c]()
          : !1;
      }
      function u() {
        return ea ? a.d.aa(a.d.e()).height : 750;
      }
      function k(a) {
        var b = 0;
        (a = a && "undefined" !== typeof a.zr && A(a.zr)) &&
          (b = a.getInViewTime());
        return b;
      }
      function n(b) {
        function c(a) {
          "undefined" !== typeof b.overrideViewMethod &&
            (a.viewabilityMethod[e] = b.overrideViewMethod);
          return l(a);
        }
        var d = b.qsKeys,
          e = b.counterLabel,
          f = e,
          g = [],
          l = b.isVisibleFn,
          h = b.isMeasurableFn,
          q = b.pauseCheckingFn,
          k = 0,
          v = 0,
          n = 0,
          B = 0,
          p = 0,
          A = 0,
          z = 0,
          t = 0,
          C = b.careFoc;
        new D().getTime();
        var F = !1,
          I = !1,
          L = !1,
          M = !1,
          N,
          O,
          da,
          R,
          ha = 0,
          W = 0,
          aa = !1,
          V = !1,
          Y = 0,
          Z = 0,
          ia = 0,
          ja = !1,
          ba = !1,
          la = !1,
          ea = a.d.c(),
          ka,
          Ma,
          ma,
          na,
          oa,
          pa,
          qa,
          ra,
          sa,
          fa,
          ca,
          ta,
          ua,
          ya,
          za,
          va;
        0 === d
          ? ((ma = "as"),
            (na = "ag"),
            (oa = "an"),
            (pa = "ck"),
            (qa = "kw"),
            (ra = "ah"),
            (sa = "aj"),
            (fa = "pg"),
            (ca = "pf"),
            (ta = "gi"),
            (ua = "gf"),
            (ya = "ix"),
            (za = "gg"),
            (va = "ez"),
            (aa = !0))
          : 1 === d
          ? ((ma = "cc"),
            (na = "bw"),
            (oa = "bx"),
            (pa = "ci"),
            (qa = "jz"),
            (ra = "bu"),
            (sa = "dj"))
          : 2 === d
          ? ((ma = "cg"),
            (na = "ce"),
            (oa = "cf"),
            (pa = "cj"),
            (qa = "ts"),
            (ra = "ah"),
            (sa = "dk"),
            (ta = "gj"),
            (ua = "gb"),
            (ya = "ig"),
            (za = "ge"),
            (va = "ez"))
          : 3 === d
          ? ((ma = "cg"),
            (na = "ce"),
            (oa = "cf"),
            (pa = "cj"),
            (qa = "ts"),
            (ra = "ah"),
            (sa = "dk"),
            (ta = "gi"),
            (ua = "gf"),
            (ya = "ix"),
            (za = "gg"),
            (va = "ez"))
          : 5 === d
          ? ((ma = "aa"),
            (na = "ad"),
            (oa = "cn"),
            (pa = "co"),
            (qa = "cp"),
            (ra = "ah"),
            (sa = "cq"),
            (ta = "gn"),
            (ua = "gk"),
            (ya = "ik"),
            (za = "gl"),
            (va = "ez"))
          : 6 === ("number" === typeof d ? d : d.type) &&
            ((ma = d.otsKey),
            (na = d.ivtKey),
            (oa = d.lastivtKey),
            (pa = d.ivtAtOtsKey),
            (qa = d.timeToViewSendKey),
            (ra = d.timeToViewAskKey),
            (sa = d.visOnLoadKey),
            (ta = d.fullyIvtOtsKey),
            (ua = d.fullyIvtKey),
            (ya = d.maxfullyIvtKey),
            (za = d.lastFullyIvtKey),
            (va = d.wasPartiallyInviewKey));
        this.getLabel = function () {
          return f;
        };
        this.addListener = function (b) {
          var c = !1;
          a.b.forEach(g, function (a) {
            if (a === b) return (c = !0), !1;
          });
          c || g.push(b);
        };
        this.removeListener = function (a) {
          for (var b, c = g.length; b < c; b++) {
            var d = !1,
              e = !1,
              f;
            for (f in g[b])
              if ((e || (e = !0), g[b][f] !== a[f])) {
                d = !0;
                break;
              }
            e && !d && g.splice(b, 1);
          }
        };
        this.hadOTS = function () {
          return L;
        };
        this.hadFullOTS = function () {
          return M;
        };
        this.hadFIT = function () {
          return 0 < v;
        };
        this.hadVideo2SecOTS = function () {
          return !1;
        };
        this.hadDentsuVideoOTS = function () {
          return !1;
        };
        this.hadDentsuDisplayOTS = function () {
          return ja;
        };
        this.getInViewTime = function () {
          return k;
        };
        this.getFullyInViewThreshold = function () {
          return 0.98;
        };
        this.getLastInviewPercentWithThresholdCap =
          function () {
            return 0.98 <= Y ? 1 : Y;
          };
        this.getLastInviewPercent = function () {
          return Y;
        };
        this.getCareAboutFocus = function () {
          return C;
        };
        this.getPauseCheckingFn = function () {
          return q;
        };
        this.visible = function () {
          return F;
        };
        this.fullyVisible = function () {
          return I;
        };
        this.wasPartiallyInview = function () {
          return V;
        };
        this.getFullInviewTimeTotal = function () {
          return v;
        };
        this.getMaximumContinuousInViewTime = function () {
          return x.max(p, A);
        };
        this.getMaximumContinuousFullyInViewTime =
          function () {
            return x.max(t, z);
          };
        this.getDentsuInViewTime = function () {
          return Z;
        };
        this.getDentsuAudibleAndVisibleTime = function () {
          return 0;
        };
        this.isAdMeasurable = function (a) {
          return "function" === typeof h && h(a);
        };
        this.adStartedOnScreen = function () {
          return R;
        };
        this.update = function (b, e, l) {
          if (Ma === l) return !1;
          Ma = l;
          var r;
          if ("function" !== typeof h || !h(b)) return !1;
          var E = k || 0,
            n = v || 0;
          l = !1;
          r = c(b);
          r.rect &&
            ((b.elementRect = r.rect),
            (b.currentWidth =
              b.elementRect.right - b.elementRect.left),
            (b.currentHeight =
              b.elementRect.bottom - b.elementRect.top));
          b.viewabilityPercent[f] = a.b.fh(r.percv)
            ? x.round(100 * r.percv)
            : "-";
          "number" === typeof r.area && (b.ADAREA = r.area);
          var B = r.isVisible,
            G = r.isFullyVisible,
            D = r.isDentsuVisible,
            S = r.percv && 0 < r.percv;
          Y = r.percv;
          !E && r.percv && a.n.a.zaxs("adEntersView", b);
          var P = q(b),
            P = (!C || a.ac.d(b)) && !P;
          a.n.a.zaxs("adCheckingState", b, f, P);
          B = B && P;
          G = G && P;
          S = S && P;
          G && a.n.a.zaxs("adFullyVisible", b, f);
          la = D && P;
          !V && S && (V = !0);
          if (B && F) (k += e), (p += e);
          else if (B || F)
            (D = x.round(e / 2)), (k += D), (p += D);
          if (G && I) (v += e), (z += e);
          else if (G || I)
            (D = x.round(e / 2)), (v += D), (z += D);
          if (la && ba) (Z += e), (ia += e);
          else if (la || ba)
            (D = x.round(e / 2)), (Z += D), (ia += D);
          !L &&
            1e3 <= p &&
            ((l = L = !0),
            (this.timeToView = N = b.counters.query()[ra]),
            (O = k));
          !M &&
            1e3 <= z &&
            ((M = !0), a.n.a.zaxs("fullOtsReached", b, f));
          "undefined" === typeof da &&
            ((D = b.counters.query().bu),
            1e3 >= D ? B && (da = !0) : (da = !1));
          "undefined" === typeof R &&
            ((D = b.counters.query().bu),
            1e3 >= D ? S && (R = !0) : (R = !1));
          (b.el = ea) &&
            "undefined" === typeof ka &&
            2 !== d &&
            3 !== d &&
            r.elGeo &&
            ((D = m().y + r.elGeo.foldTop),
            (P = r.elGeo.threshold * r.elGeo.elHeight),
            (D = D > u() - P),
            0 < r.elGeo.totalArea &&
              ((ka = D), (b.dn = ka)));
          aa && S && (ha = x.min(x.max(Y, ha), 1));
          A < p && (A = p);
          t < z && (t = z);
          B || (p = 0);
          G || (z = 0);
          F = B;
          I = G;
          1e3 <= ia && (ja = !0);
          la || (ia = 0);
          ba = la;
          a.b.forEach(g, function (a) {
            var b = r && r.percv,
              b = "number" === typeof b && 100 * b;
            if (a.onInViewTimeCount)
              a.onInViewTimeCount(e, k - E, b, f);
            if (a.onFullyInViewTimeCount) {
              var c = x.max(v - n, 0);
              a.onFullyInViewTimeCount(e, c, b, f);
            }
          });
          return l;
        };
        this.getQS = function (a, b, c) {
          n > k && (n = k);
          B > v && (B = v);
          a[ma] = Number(L);
          a[na] = k;
          a[oa] = n;
          if (
            0 === d ||
            2 === d ||
            3 === d ||
            5 === d ||
            ("number" === typeof d ? d : d.type)
          )
            M && ta && (a[ta] = 1),
              (b = 0 === d && c && "sframe" === c),
              ua &&
                !b &&
                ((a[ua] = v),
                (a[za] = B),
                (b =
                  this.getMaximumContinuousFullyInViewTime()),
                (a[ya] = b),
                f === c && (a.ic = b)),
              V && va && (a[va] = 1);
          "undefined" !== typeof O && (a[pa] = O);
          "undefined" !== typeof N && (a[qa] = N);
          "undefined" !== typeof da && (a[sa] = Number(da));
          !0 === aa &&
            ((c = x.round(100 * ha)),
            (b = x.round(100 * W)),
            (a[fa] = c),
            (a[ca] = b),
            (W = ha));
          "undefined" !== typeof ka && (a.ib = Number(ka));
          n = k;
          B = v;
        };
      }
      function m() {
        var b = a.d.e(),
          c = b.document;
        return {
          y:
            void 0 !== b.pageYOffset
              ? b.pageYOffset
              : (
                  c.documentElement ||
                  c.body.parentNode ||
                  c.body
                ).scrollTop,
        };
      }
      function h(b, c) {
        if (b && c) {
          var d = a.d.dz(),
            e;
          !c.sframe &&
            d &&
            ((e = d.measurableFn),
            (d = d.name),
            (B[b.zr].sframe = new n({
              isVisibleFn: a.al.a,
              isMeasurableFn: e,
              pauseCheckingFn: a.ac.e,
              viewabilityApiName: d,
              careFoc: !0,
              qsKeys: 5,
              counterLabel: "sframe",
            })),
            a.n.a.zaxs("viewCounterStarted", b));
        }
      }
      function g(b, c, d) {
        if (a.b.ff(b)) {
          var e = B[b.zr],
            f;
          h(b, e);
          for (var g in e)
            e.hasOwnProperty(g) &&
              e[g].update(b, c, d) &&
              (f = !0);
          b.fireFullViewEvent = !1;
          a.b.forEach(b.secondaryCounters, function (a) {
            a.update(b, c, d);
          });
          b.fireFullViewEvent &&
            (a.ac.f(b), (b.fireFullViewEvent = !1));
          f && a.ac.g(b);
          a.w.e(b);
          a.e.j(b) && a.ac.a(b);
        }
      }
      function c() {
        return "hadOTS";
      }
      function e(a) {
        var b = 0;
        (a = a && "undefined" !== typeof a.zr && A(a.zr)) &&
          (b = a.getFullInviewTimeTotal());
        return b;
      }
      function f(b) {
        delete B[b.zr];
        q.hasOwnProperty(b.zr) &&
          a.n.a.sxaz("view:tick", { id: q[b.zr] });
      }
      function d(b) {
        var c, d;
        if (!b || !b.strict) return !1;
        b = a.d.x().isInApp;
        c = a.d.cj();
        d = a.d.co();
        c = (c && a.d.c()) || d;
        return (b && c) || !b;
      }
      function z(a, b) {
        var c = v(a, b),
          d = B[a];
        return d && c && d[c];
      }
      function l(a) {
        var b = 0,
          c;
        return function () {
          var d = new D().getTime();
          150 < d - b &&
            ((c = a.apply(this, arguments)), (b = d));
          return c;
        };
      }
      var B = {},
        v = null,
        A = null,
        q = {};
      a.v = a.v || {};
      a.v.d = function (a, b) {
        return k(a) >= b;
      };
      a.v.e = b;
      a.v.f = function (c, d) {
        var e = b(c.zr);
        return (
          a.r &&
          a.r.a() &&
          e &&
          e.pscope &&
          e.pscope.getFullInviewTimeTotal() >= d
        );
      };
      a.v.g = function (a, b) {
        return e(a) >= b;
      };
      a.v.b = function (c, d) {
        var e = b(c.zr),
          f = d
            ? "hadDentsuVideoOTS"
            : "hadDentsuDisplayOTS";
        return (
          a.r && a.r.a() && e && e.pscope && e.pscope[f]()
        );
      };
      a.v.h = function (a) {};
      a.v.i = d;
      a.v.j = t;
      a.v.k = g;
      a.v.c = function (b) {
        var c = b.zr;
        a.n.a.azsx("adKilled", f, {
          once: !0,
          condition: function (a) {
            return a.zr == b.zr;
          },
        });
        B[c] = B[c] || {};
        b.viewstats = { isBigAd: !1 };
        if (a.d.db() || (a.d.x().isInApp && a.d.c())) {
          var d = l(a.x.j),
            e;
          a.d.q() || (a.am && a.am.a())
            ? a.d.cp() && a.d.q()
            : ((e = {
                isVisibleFn: d,
                isMeasurableFn: a.d.db,
                pauseCheckingFn: a.ac.e,
                careFoc: !0,
                qsKeys: 0,
                counterLabel: "strict",
              }),
              (e = new n(e)));
          e && (B[c].strict = e);
          d = new n({
            isVisibleFn: d,
            isMeasurableFn: a.d.db,
            pauseCheckingFn: a.ac.e,
            careFoc: !1,
            qsKeys: 1,
            counterLabel: "lax",
          });
          B[c].lax = d;
        } else
          !0 !== b.isSkin &&
            a.p &&
            a.p.a() &&
            ((d = new n({
              isVisibleFn: a.p.c,
              isMeasurableFn: a.d.dg,
              pauseCheckingFn: a.ac.e,
              careFoc: !0,
              qsKeys: 3,
              counterLabel: "pscope",
            })),
            (B[c].pscope = d));
        a.r &&
          a.r.b() &&
          !B[c].pscope &&
          ((d = new n({
            isVisibleFn: a.r.n,
            isMeasurableFn: a.d.dh,
            pauseCheckingFn: a.ac.e,
            careFoc: !0,
            qsKeys: 2,
            counterLabel: "pscope",
          })),
          (B[c].pscope = d));
        var h,
          k,
          v,
          d = a.al.a;
        e = a.d.dz();
        !h &&
          e &&
          ((h = !0), (v = e.name), (k = e.measurableFn));
        h &&
          ((h = new n({
            isVisibleFn: d,
            isMeasurableFn: k,
            pauseCheckingFn: a.ac.e,
            viewabilityApiName: v,
            careFoc: !0,
            qsKeys: 5,
            counterLabel: "sframe",
            overrideViewMethod: void 0,
          })),
          (B[c].sframe = h));
        c = a.n.a.azsx("view:tick", a.b.dl([b], g), {
          priority: 5,
        });
        q[b.zr] = c;
        a.n.a.zaxs("viewCounterStarted", b);
      };
      a.v.l = function (a) {};
      a.v.m = function (c, d) {
        var e = b(c.zr),
          f = d ? "hadVideo2SecOTS" : "hadOTS";
        return (
          a.r && a.r.a() && e && e.pscope && e.pscope[f]()
        );
      };
      a.v.n = c;
      a.v.o = e;
      a.v.p = function (a, b) {};
      a.v.q = function (a, b) {};
      a.v.r = function (b, c) {
        var d = {},
          e = B[b],
          f = v(b),
          g;
        for (g in e)
          e.hasOwnProperty(g) && e[g].getQS(d, c, f);
        a.w.d(b, d);
        a.ag.b(b, d);
        A(b) && A(b).hadDentsuDisplayOTS() && (d.nb = 1);
        (e = F[b]) &&
          e.viewstats &&
          e.viewstats.isBigAd &&
          (d.el = 1);
        return d;
      };
      a.v.s = function (a, b) {
        var d = c();
        return a && a && "undefined" != typeof a.zr
          ? b
            ? p(a, b, d)
            : p(a, v(a.zr), d)
          : null;
      };
      a.v.t = u;
      a.v.u = n;
      a.v.v = f;
      a.v.w = p;
      a.v.x = k;
      a.v.y = h;
      (function () {
        v = (function () {
          var b;
          return function (c, e) {
            var f = null,
              g = B[c];
            d(g)
              ? (f = "strict")
              : g && g.sframe
              ? (f = "sframe")
              : g && g.pscope && (f = "pscope");
            b != f &&
              ((b = f),
              a.n.a.esgf(
                "preferredViewCounterUpdate",
                F[c]
              ));
            return f;
          };
        })();
        A = z;
      })();
      a.v.a = v;
      a.v.z = A;
    })();
    (function () {
      function b(b, c) {
        b.ti = O;
        b.ih = 2;
        a.b.aj() &&
          ((b.sk = c.abSessionId || AB_SCAFFOLD.scaffoldID),
          (b.tn = AB_SCAFFOLD.AB_TEST_NAME));
      }
      function t(b, c, d) {
        d = a.b.dr(c);
        a.b.ak(q, d) && (b.zGSRS = "1");
        b.zGSRC = "1";
        c.zMoatCHNLS && (b.gv = c.zMoatCHNLS);
        c.zMoatGSCACHE && (b.hw = c.zMoatGSCACHE);
      }
      function p(b, c) {
        var d = a.b.dr(c);
        b.hp = 1;
        c.zMoatAdUnit1 && (b.zMoatAdUnit1 = c.zMoatAdUnit1);
        c.zMoatAdUnit2 && (b.zMoatAdUnit2 = c.zMoatAdUnit2);
        c.zMoatAdUnit3 && (b.zMoatAdUnit3 = c.zMoatAdUnit3);
        c.zMoatAdUnit4 && (b.zMoatAdUnit4 = c.zMoatAdUnit4);
        a.d.c() &&
          window.top.document &&
          window.top.document.hasFocus &&
          "function" ===
            typeof window.top.document.hasFocus &&
          (b.wf = window.top.document.hasFocus() ? 1 : 0);
        d = y[d];
        "undefined" !== typeof d && (b.ra = d);
        b.pxm = "4";
        b.sgs = 3;
        a.n.a.zaxs("appendCommonKeys", b, c);
      }
      function u(b) {
        var c = a.d.e().googletag,
          c =
            c &&
            "function" === typeof c.pubads &&
            c.pubads(),
          d = -1;
        if (c && "function" === typeof c.getSlots)
          try {
            var e = c.getSlots(),
              d = a.b.f(e) ? e.length : -1;
          } catch (f) {}
        b.vb = d;
      }
      function k(b, c, d) {
        c = d ? d : 5e3;
        a.b.ef(a.d.aw)
          ? ((d = a.d.aw),
            encodeURIComponent(d).length < c
              ? ((c = d), (d = a.d.ax))
              : ((d = d.split(/(\?|#)(.*)/)[0]),
                (c =
                  encodeURIComponent(d).length < c
                    ? d
                    : d.substring(0, c)),
                (d = !1)))
          : ((c = ""), (d = !1));
        b.gu = c;
        b.id = d ? "1" : "0";
        b.ii = a.d.ar;
      }
      function n(a, b) {
        a.zMoatOrigSlicer1 = b.zMoatOrigSlicer1;
        a.zMoatOrigSlicer2 = b.zMoatOrigSlicer2;
      }
      function m(a, b, c) {
        a.dfp = c;
        a.la = b.zMoatOrigSlicer2;
      }
      function h(a, b, c, d) {
        b &&
          AB_SCAFFOLD.debugMetrics.setIncludeQsParams(b, d);
        c
          ? (AB_SCAFFOLD.debugMetrics.setNonAdIds(a, d),
            AB_SCAFFOLD.debugMetrics.getNonAdQueryString(
              a,
              d
            ))
          : (AB_SCAFFOLD.debugMetrics.setAdIds(a, d),
            AB_SCAFFOLD.debugMetrics.getQueryString(a, d));
      }
      function g(b, c) {
        var d, e;
        b.isSREMeasurable || b.setDimensions();
        b.IS_PAGE_LEVEL ||
          (1 === b.ao.skin
            ? ((e = a.d.aa(a.d.e())),
              (d = e.width),
              (e = e.height))
            : b.compositeAdAreaPx
            ? ((d = b.compositeAdAreaPx), (e = 1))
            : ((d = b.INITIAL_WIDTH),
              (e = b.INITIAL_HEIGHT)));
        d = d || 0;
        e = e || 0;
        0 < d && 0 < e && (b.isSREMeasurable = !0);
        c.h = e;
        c.w = d;
      }
      function c(b, c) {
        a.b.dr(c);
        b.zMoatSrcd = b.d;
        b.zMoatSrcbo = b.bo;
        b.zMoatSrcbp = b.bp;
        b.zMoatSrcbd = b.bd;
        b.d = (c.moatClientLevel1 || "") + ":";
        b.d += (c.moatClientLevel2 || "") + ":";
        b.d += (c.moatClientLevel3 || "") + ":";
        b.d += c.moatClientLevel4 || "";
        return b;
      }
      function e(b, c, d, e) {
        b = !0;
        if (a.h && ((b = a.b.ea()), !b)) {
          for (
            var f = [1, 2, 3, 23, 25], g = 0, l = f.length;
            g < l;
            g++
          )
            if (d.e == f[g]) {
              b = !0;
              break;
            }
          b && ((d.cm = 0), (c = z(d, e)), (c += "&cs=0"));
        }
        return { shouldSendPixel: b, querystring: c };
      }
      function f(b) {
        b = a.b.i(b);
        for (
          var c =
              "am an ao ay ba bx cd cf db dr dt es ev sa sq si sm mc lc pf xb ge gg cn gl pn fj lt mu mk mw mx my mz fv".split(
                " "
              ),
            d = 0;
          d < c.length;
          d++
        )
          b[c[d]] && (b[c[d]] = 0);
        return b;
      }
      function d(b, c) {
        if (a.d.ee) {
          var d = b.cm;
          "number" === typeof d && (b.pc = d);
          b.cm = 1;
          !c &&
            a.b.z() &&
            AB_SCAFFOLD.sampling.set({
              multiplier: 1,
              enabled: !1,
            });
        }
        a.d.ef &&
          ((d = b.cm),
          "number" === typeof d && (b.pc = d),
          (b.cm = 1));
        !c &&
          a.b.aj() &&
          AB_SCAFFOLD.sampling.getQueryString(b);
      }
      function z(b, c) {
        var d,
          e = [],
          f,
          g = a.b.en() ? 2048 : 7750,
          l = c || {};
        f = {};
        b.fs = "203695";
        for (d in b)
          b.hasOwnProperty(d) &&
            (1 != b.e ||
            ("x" !== d && "y" !== d && "c" !== d)
              ? e.push(
                  encodeURIComponent(d) +
                    "=" +
                    encodeURIComponent(b[d])
                )
              : (f[d] = b[d].split("a")));
        d = e.join("&");
        var e = g - d.length,
          h = 0;
        if ("undefined" !== typeof f.x) {
          for (var q = 0, k = 0; k < f.x.length; k++)
            if (
              ((q +=
                f.x[k].length +
                (f.y[k] ? f.y[k].length : 0) +
                (f.c[k] ? f.c[k].length : 0)),
              q < e)
            )
              h++;
            else break;
          0 < h &&
            ((d += "&x=" + f.x.slice(0, h - 1).join("a")),
            (d += "&y=" + f.y.slice(0, h - 1).join("a")),
            (d += "&c=" + f.c.slice(0, h - 1).join("a")));
        }
        for (var r in l)
          l.hasOwnProperty(r) &&
            ((f =
              "&" +
              encodeURIComponent(r) +
              "=" +
              encodeURIComponent(l[r])),
            f.length + d.length < g && (d += f));
        d = d.replace(/\x27/g, "%27");
        try {
          d += "&na=" + a.b.ei(d, b.i);
        } catch (v) {}
        return d;
      }
      function l(b, c) {
        b.j =
          25 == c
            ? ("string" == typeof a.d.d &&
                a.d.d.slice(0, 500)) ||
              ""
            : a.b.cy(a.d.d);
      }
      function B(b, c) {
        if (!a.d.c()) {
          var d = a.k.a();
          d && (b.lp = d);
        }
      }
      function v(a, b, c) {
        a.vv =
          c && b.viewabilityMethod[c]
            ? b.viewabilityMethod[c]
            : 0;
        b = b.viewabilityMethod;
        a.vw =
          (b.strict || 0) +
          ":" +
          (b.sframe || 0) +
          ":" +
          (b.pscope || 0);
      }
      function A(a, b, c) {
        b = b.viewabilityPercent;
        a.vp = b[c];
        a.vx = b.strict + ":" + b.sframe + ":" + b.pscope;
      }
      var q = { all: !0 },
        r = { all: "0,1" },
        y;
      a.ad = a.ad || {};
      a.ad.c = p;
      a.ad.d = function (b) {
        var c = !1;
        b && b.getFormat();
        var d = a.ad.b(8, b.ao, !1, !1, !0);
        if (d && d.qs && d.qs.d) {
          c = d.qs.d.split(":");
          c = {
            viewHash: L,
            moatClientLevel1: c[0],
            moatClientLevel2: c[1],
            moatClientLevel3: c[2],
            moatClientLevel4: c[3],
            tagStartTime: a.d.be,
          };
          if (b && b.ao)
            for (var e in b.ao)
              b.ao.hasOwnProperty(e) &&
                -1 != e.indexOf("zMoat") &&
                (c[e] = b.ao[e]);
          for (e in d)
            d.hasOwnProperty(e) &&
              -1 != e.indexOf("zMoat") &&
              (c[e] = d[e]);
        }
        return c;
      };
      a.ad.e = function () {};
      a.ad.f = function (b) {
        var c = f(b.data);
        c.i = a.b.ap(c.i, b.iKeySuffix);
        var d = z(c, b.flashVarsForQS) + "&cs=0";
        if (b.sendNow) {
          if (a.f.ae)
            for (var e = 0; e < a.f.ae.length; e++) {
              var g = a.f.ae[e];
              g.i = a.b.ap(g.i, b.iKeySuffix);
              g = z(g) + "&cs=0";
              C.yh.yi(g, b.pixelURL);
            }
          C.yh.yi(d, b.pixelURL);
        }
        return c;
      };
      a.ad.b = function (c, f, g, q, v) {
        var y = a.b.dr(f);
        a.t.b(f, q);
        var A = {};
        A.e = c;
        a.b.bt(A, g);
        A.i = L;
        p(A, f);
        u(A);
        a.h && (A.cm = a.b.y(a.h, a.i).multiplier);
        try {
          A.kq = a.d.e() && a.d.e().devicePixelRatio;
        } catch (x) {
          A.kq = 1;
        }
        A.hq = a.d.k() ? 1 : 0;
        A.hs = a.d.h() ? 1 : 0;
        A.hu = a.d.al() ? 1 : 0;
        A.hr = a.d.ak() ? 1 : 0;
        A.ht = a.d.am() ? 1 : 0;
        A.dnt = a.d.ea ? 1 : 0;
        if (11 === c) {
          a.n.a.zaxs("adNotFound");
          var D = [],
            F;
          for (F in Ea)
            Ea.hasOwnProperty(F) && D.push(F + "=" + Ea[F]);
          A.k = D.join("&").slice(0, 300);
        }
        if (!(A.e in Ka)) {
          A.bq = a.d.l;
          A.f = Number(!Sa);
          a.d.cs && (A.nh = 1);
          f.IS_PAGE_LEVEL || l(A, A.e);
          B(A);
          A.t = f.startTime;
          A.de = f.rand;
          A.m = 0;
          A.ar = "fde231f50fe-clean";
          A.iw = "4a7adaa";
          a.b.am(A, "ai", C.z);
          a.b.am(A, "wr", C.ACTIVETIMEUNTILSCROLL);
          A.q = C.m++;
          A.cb = ea ? 1 : 0;
          A.ym = a.d.az && a.d.az() ? 1 : 0;
          A.cu = aa;
          A.ll = a.d.cx || 0;
          a.b.am(A, "lm", a.d.ct());
          A.ln = a.d.s() ? 1 : 0;
          a.b.bt(A, a.focus.getQueryString());
          a.t.j(f, A);
          "undefined" !== typeof f &&
            ((A.d =
              f.moatClientLevel1 +
              ":" +
              f.moatClientLevel2 +
              ":" +
              f.moatClientLevel3 +
              ":" +
              f.moatClientLevel4),
            f.adFindingMethod && (A.hv = f.adFindingMethod),
            t(A, f, y),
            k(A),
            f && a.t.d(y) && n(A, f),
            a.b.bk(["feather", "display", "video"], f) &&
              ((y = a.b.cm(r, y) || !0), m(A, f, y)),
            (A.gw = "hearstmagazines203491224419"),
            (A.fd = "1"));
          A.it = a.aj.v;
          a.d.x().isInApp &&
            ((A.lv = a.d.ci()),
            (A.zl = a.d.dq() ? 1 : 0),
            a.d.cj()
              ? (a.b.em() && (A.wo = 1),
                (y = a.b.aq(a.d.ay)) && (A.zMoatMMAKns = y))
              : a.d.p() && (A.lx = 1));
          b(A, f);
          (y = a.an.a()) && (A.pe = y);
          a.n.a.zaxs("dropNonAdPixel", A, c, f, g, q, v);
          a.b.aj() && h(A, void 0, !0, O);
          d(A, v);
          g = z(A);
          c = Da;
          f = e(f, g + "&cs=0", A);
          if (!0 === v) return { qs: A, res: f };
          f.shouldSendPixel &&
            f.querystring &&
            C.yh.yi(f.querystring, c);
        }
      };
      a.ad.g = function () {};
      a.ad.h = e;
      a.ad.i = function () {};
      a.ad.j = function (a) {};
      a.ad.k = function (b) {
        var c = { e: 16 };
        c.q = b.aq[16]++;
        a.ad.a(b, c);
      };
      a.ad.l = function (a) {};
      a.ad.m = f;
      a.ad.n = function (b) {
        var c = { e: 8 };
        c.q = b.aq[8]++;
        return a.ad.a(b, c, !0);
      };
      a.ad.o = function (a, b) {
        return z(a, b);
      };
      a.ad.p = function (a) {};
      a.ad.q = c;
      a.ad.r = function (b, d, e, f, g, l, h) {
        b = "extraPx_" + b;
        d[b] || (d[b] = {});
        f = a.b.i(f);
        f.zMoatSrci = f.i;
        f.i = e;
        h && (f = c(f, h));
        if (a.f.ae && !d[b].timestampsReset)
          for (var q = 0; q < a.f.ae.length; q++) {
            var k = a.f.ae[q];
            k.zMoatSrci = k.i;
            k.i = e;
            h && (k = c(k, h));
            k = z(k) + "&cs=0";
            C.yh.yi(k, g);
          }
        d[b].timestampsReset ||
          ((d[b].timestampsReset = !0),
          f.lc && (f.lc = 0),
          f.cd && (f.cd = 0),
          f.sm && (f.sm = 0),
          f.fv && (f.fv = 0),
          f.pn && (f.pn = 0),
          f.lt && (f.lt = 0),
          f.ba && (f.ba = 0),
          f.sq && (f.sq = 0),
          f.gg && (f.gg = 0),
          f.mu && (f.mu = 0),
          f.si && (f.si = 0),
          f.mc && (f.mc = 0),
          f.dt && (f.dt = 0),
          f.gt && (f.gt = 0),
          f.ao && (f.ao = 0),
          f.mk && (f.mk = 0),
          f.dr && (f.dr = 0),
          f.ev && (f.ev = 0),
          f.ge && (f.ge = 0),
          f.mx && (f.mx = 0),
          f.an && (f.an = 0),
          f.cf && (f.cf = 0),
          f.gl && (f.gl = 0),
          f.mw && (f.mw = 0),
          f.xb && (f.xb = 0),
          f.db && (f.db = 0),
          f.am && (f.am = 0),
          f.fj && (f.fj = 0),
          f.my && (f.my = 0),
          f.mz && (f.mz = 0),
          f.cn && (f.cn = 0),
          f.es && (f.es = 0),
          f.sa && (f.sa = 0),
          f.pf && (f.pf = 0),
          f.ay && (f.ay = 0),
          f.bx && (f.bx = 0));
        b = z(f, l);
        C.yh.yi(b + "&cs=0", g);
      };
      a.ad.a = function (c, f, q) {
        if ((window && window.closed) || !c || !0 === c.ep)
          return !1;
        var y = c.getFormat();
        p(f, c.ao);
        u(f);
        try {
          f.kq = a.d.e() && a.d.e().devicePixelRatio;
        } catch (D) {
          f.kq = 1;
        }
        if (
          "undefined" !== typeof c.ao &&
          (2 !== c.an || (1 !== f.e && 3 !== f.e)) &&
          !(f.e in Ka)
        ) {
          f.lo = c.FIND_AD_TRIES;
          var G;
          c.proxyTrackingEnabled && (f.tr = 1);
          f.uk = a.b.aq(a.d.ay);
          var T = a.b.aa(),
            K = a.b.ay(T.results),
            F = {
              article: "pk",
              page_height: "wk",
              meta_properties: "rk",
              favicon: "tk",
            };
          a.b.forEach(K, function (a) {
            f[F[a]] = T.results[a] ? 1 : 0;
          });
          c.hasNonIframeListener && (f.ni = 1);
          var X = c.ag,
            K = {},
            S = a.v.a(c.zr);
          if ((9 === f.e && 2 === f.q) || 25 === f.e) {
            for (G in X)
              X.hasOwnProperty(G) &&
                "" !== G &&
                "undefined" !== typeof X[G] &&
                -1 === G.indexOf("dvContains") &&
                -1 === G.indexOf("indexOf") &&
                -1 ===
                  G.toLowerCase().indexOf("clicktag") &&
                (K["z" + G] = X[G]);
            f.e = 25;
          }
          0 === c.an && (f.dc = c.WMODE);
          "string" !== typeof c.ae ||
          (0 != f.e && 25 != f.e)
            ? (f.ak = "-")
            : ((G = a.d.h() ? 700 : 1200),
              (f.ak =
                c.ae.length <= G
                  ? c.ae
                  : c.ae.slice(0, G)));
          c.bi > c.bg && (c.bg = c.bi);
          c.bm > c.bk && (c.bk = c.bm);
          f.i = L;
          a.b.bt(f, a.f.z(!0));
          f.bq = a.d.l;
          f.g = c.aq.g++;
          g(c, f);
          f.hq = a.d.k() ? 1 : 0;
          f.hs = a.d.h() ? 1 : 0;
          f.hu = a.d.al() ? 1 : 0;
          f.hr = a.d.ak() ? 1 : 0;
          f.ht = a.d.am() ? 1 : 0;
          f.dnt = a.d.ea ? 1 : 0;
          f.rm = c.isSREMeasurable ? 1 : 0;
          try {
            a.d.db() &&
              c &&
              c.elementRect &&
              ((f.fy = c.elementRect.left),
              (f.gp = c.elementRect.top));
          } catch (D) {}
          t(f, c.ao, y);
          k(f, c.ao);
          a.h && (f.cm = a.b.y(a.h, a.i).multiplier);
          f.f = Number(!Sa);
          c.IS_PAGE_LEVEL || l(f, f.e);
          B(f, f.e);
          f.t = c.ao.startTime;
          f.de = c.ao.rand;
          f.cu = aa;
          f.m = f.m || a.b.bs(c);
          f.ar = "fde231f50fe-clean";
          f.iw = "4a7adaa";
          f.cb = ea ? 1 : 0;
          f.ym = a.d.az && a.d.az() ? 1 : 0;
          f.ll = a.d.cx || 0;
          a.b.am(f, "lm", a.d.ct());
          f.ln = a.d.s() ? 1 : 0;
          a.b.bt(f, a.p.b());
          a.d.c() && (f.gh = 1);
          a.d.cs && (f.nh = 1);
          f.xx = a.d.ed + ":" + a.f.aa();
          f.td = a.d.cu;
          a.d.y();
          f.qa = a.d.ad();
          f.qb = a.d.ae();
          f.qi = a.d.ab();
          f.qj = a.d.ac();
          f.qf = a.d.af();
          f.qe = a.d.ag();
          f.qh = a.d.ah();
          f.qg = a.d.ai();
          try {
            f.lk =
              (c &&
                c.elementRect &&
                c.elementRect.top + a.d.aj()) ||
              "undefined";
          } catch (D) {}
          isNaN(a.d.f()) || (f.lb = a.d.f());
          f.le = Ta ? 1 : 0;
          a.f && void 0 !== a.f.ab && (f.lf = a.f.ab);
          a.f && void 0 !== a.f.ac && (f.lg = a.f.ac);
          a.f && void 0 !== a.f.ad && (f.lh = a.f.ad);
          a.d.dk() &&
            ((f.gm = 1),
            a.d.c() && "sframe" === S && (f.fq = 0));
          a.d.dc() && (f.io = 1);
          a.d.bw && (f.fa = 1);
          "number" !== typeof a.d.by ||
            isNaN(a.d.by) ||
            (f.zz = a.d.by);
          if (a.p && a.p.a()) (f.ch = 1), (f.gh = 1);
          else if (a.r && a.r.a()) {
            a.d.br && (f.ss = 1);
            a.d.dv && (f.ie = 1);
            if (c && c.periscopeManager) {
              G =
                !a.focus.pageIsVisible() &&
                c &&
                c.counters &&
                c.counters.strictDwell &&
                0 == c.counters.strictDwell.tCur &&
                21 == f.e;
              X = a.b.dw && "0" != a.b.dw();
              if (
                c.periscopeManager.measurable ||
                (!a.d.c() && G && X)
              )
                f.ch = 1;
              c.periscopeManager.fullyMeasurable &&
                c.ao &&
                1 != c.ao.skin &&
                (f.ga = 1);
            } else f.ch = 1;
            G = a.r.t();
            "undefined" !== typeof G &&
              c &&
              c.ao &&
              c.ao.startTime &&
              !isNaN(c.ao.startTime) &&
              ((G -= c.ao.startTime),
              (f.fg = 0 <= G ? G : 0));
          } else f.ch = 0;
          v(f, c, S);
          A(f, c, S);
          (G = a.an.a()) && (f.pe = G);
          a.b.bt(f, a.v.r(c.zr, f));
          a.b.bt(f, a.focus.getQueryString());
          a.b.bt(f, a.ao.a(c.zr));
          a.b.bt(f, a.ap.a(c.zr));
          a.b.bt(f, c.counters.getQs());
          c.px2 &&
            c.px2.inSample &&
            !c.px2.success &&
            (f.zMoatIDF = 1);
          c.px2 &&
            (f.xd =
              (c.px2.inSample ? "1" : "0") +
              (c.px2.firedPixel ? "1" : "0"));
          a.aq.a(c, f);
          a.aa.b(c, f);
          a.b.am(f, "ai", C.z);
          a.b.am(f, "wr", C.ACTIVETIMEUNTILSCROLL);
          a.b.am(f, "ap", c.cb);
          a.b.am(f, "ax", c.bg);
          a.b.am(f, "ay", c.bi);
          a.b.am(f, "az", c.bk);
          a.b.am(f, "ba", c.bm);
          a.b.am(f, "aw", c.bc);
          a.b.am(f, "bg", c.bd);
          a.b.am(f, "be", c.be);
          a.b.am(f, "bc", c.bw);
          a.b.am(f, "bf", c.by);
          a.b.am(f, "bh", c.bx);
          a.b.am(f, "bz", c.cu);
          f.cl = x.round((100 * c.IR5.AREA) / (f.w * f.h));
          0 < c.aq[2] && (f.au = c.aq[2] - 1);
          0 < c.aq[3] && (f.av = c.aq[3] - 1);
          0 < c.aq[23] && (f.by = c.aq[23] - 1);
          f.at = c.dm;
          a.t.j(c.ao, f);
          f.d =
            c.ao.moatClientLevel1 +
            ":" +
            c.ao.moatClientLevel2 +
            ":" +
            c.ao.moatClientLevel3 +
            ":" +
            c.ao.moatClientLevel4;
          f.gw = "hearstmagazines203491224419";
          c.ao && a.t.d(y) && n(f, c.ao);
          a.b.bk(["feather", "display", "video"], c.ao) &&
            ((y = a.b.cm(r, y) || !0), m(f, c.ao, y));
          c.ao.adFindingMethod &&
            (f.hv = c.ao.adFindingMethod);
          f.ab = c.an;
          f.fd = "1";
          f.kt = S;
          f.it = a.aj.v;
          c.bi = c.bg;
          c.bm = c.bk;
          a.w.f(c) && (f.fz = 1);
          y = !1;
          y = a.w.g(c.zr);
          f.oq = y ? 1 : 0;
          "undefined" !== typeof c.zr &&
            (f.ot = a.w.h[c.zr].stateMask.toString(16));
          a.d.x().isInApp &&
            ((f.lv = a.d.ci()),
            (f.zl = a.d.dq() ? 1 : 0),
            a.d.cj()
              ? (a.b.em() && (f.wo = 1),
                (y = a.b.aq(a.d.ay)) && (f.zMoatMMAKns = y))
              : a.d.p() && (f.lx = 1));
          c.debugData &&
            (f.zMoatJS = c.debugData.getValue());
          b(f, c.ao);
          a.b.ce([2], f.e) && c.aq.tc++;
          f.tc = c.aq.tc;
          a.n.a.zaxs("dropPixel", c, f, q);
          a.b.aj() && h(f, void 0, !1, O);
          d(f, q);
          S = z(f, K);
          y = Da;
          if (q) return f;
          c = e(c.ao, S + "&cs=0", f, K);
          c.shouldSendPixel &&
            c.querystring &&
            C.yh.yi(c.querystring, y);
        }
      };
      a.ad.s = function (a, b) {
        if (2 !== a.an || (1 !== b.e && 3 !== b.e))
          new Image(1, 1).src = "";
      };
      y = {
        display: 1,
        video: 2,
        adx: 3,
        html5: 4,
        content: 5,
        feather: 6,
        ivt_only: 7,
      };
    })();
    (function () {
      function b() {
        if (!m) {
          m = !0;
          try {
            var b = C.swde.azsx("scroll", n);
            a.n.a.azsx(
              "allLocalAdsKilled",
              function () {
                C.swde.sxaz("scroll", { id: b });
              },
              { once: !0 }
            );
          } catch (c) {}
        }
      }
      function t(b, c) {
        try {
          if (a.d.az()) return !0;
          var e = b.aa,
            g = a.b.ew(e, 5),
            h =
              g &&
              (6 == g.length ||
                (1 <= g.length &&
                  "HTML" === g[g.length - 1].nodeName));
          c = c || b.WINDOW || a.b.ej(e);
          return !(e && c && h) ||
            (e.ownerDocument &&
              e.ownerDocument.body &&
              !e.ownerDocument.body.contains(e))
            ? !1
            : !0;
        } catch (k) {
          return !1;
        }
      }
      function p() {
        var a, b;
        for (b in F)
          F.hasOwnProperty(b) &&
            ((a = F[b]), t(a, a.WINDOW) || u(a));
      }
      function u(b) {
        if (!0 !== b.ep) {
          if (!xa) {
            var c = { shouldKillAd: !0 };
            a.n.a.zaxs("beforeAdKilled", c, b);
            if (!c.shouldKillAd) return;
          }
          a.n.a.zaxs("adKilled", b);
          a.e.m(b);
        }
      }
      function k(a, b, c, e, g) {
        new D().getTime();
        this.tMaxContinuous =
          this.tContinuous =
          this.tLast =
          this.tCur =
            0;
        this.getMaxContinuous = function () {
          return x.max(
            this.tContinuous,
            this.tMaxContinuous
          );
        };
        this.reset = function () {
          this.tLast = this.tCur = 0;
        };
        this.update = function (b, c, d) {
          a(b)
            ? ((c = x.min(c, 1e4)),
              (b = typeof e),
              c && 0 > c && (c = 0),
              (this.tCur += c),
              (this.tContinuous += c),
              "number" === b && 0 < e
                ? this.tCur > e && (this.tCur = e)
                : "function" === b &&
                  ((c = e()),
                  "number" === typeof c &&
                    this.tCur > c &&
                    0 < c &&
                    (this.tCur = c)))
            : (this.tMaxContinuous < this.tContinuous &&
                (this.tMaxContinuous = this.tContinuous),
              (this.tContinuous = 0));
          g && g(this.tCur);
        };
        this.getQs = function (a) {
          a = this.query(a);
          this.tLast = this.tCur;
          return a;
        };
        this.query = function (a) {
          a = a || {};
          this.tLast > this.tCur &&
            (this.tLast = this.tCur);
          b &&
            c &&
            ((a[b] = this.tCur), (a[c] = this.tLast));
          return a;
        };
      }
      function n(b) {
        if (a.focus.pageIsVisible()) {
          b = new D().getTime();
          "undefined" === typeof C.z && (C.z = b - aa);
          if (
            "undefined" === typeof C.ACTIVETIMEUNTILSCROLL
          ) {
            var c = a.focus.focusStartTime || aa;
            c < aa && (c = aa);
            C.ACTIVETIMEUNTILSCROLL = b - c;
          }
          a: {
            for (var e in F)
              if (
                F.hasOwnProperty(e) &&
                (b = F[e]) &&
                "undefined" !== typeof b.ao
              ) {
                if (b.ce) break a;
                c = { e: 4 };
                c.q = b.aq[4]++;
                c.ai = C.z;
                c.wr = C.ACTIVETIMEUNTILSCROLL;
                a.ad.a(b, c);
                b.ce = !0;
              }
            try {
              C.dcsx.wsqa("globalScrollevent" + C.dcsx.uid),
                C.swde.sxaz("scroll", { callback: n });
            } catch (g) {}
          }
        }
      }
      var m = !1,
        h = {},
        g = { onResetListeners: [], checkAdState: [] },
        c = [],
        e;
      a.n.a.azsx("adKilled", function (b) {
        b &&
          !b.ep &&
          h.hasOwnProperty(b.zr) &&
          a.n.a.sxaz("view:tick", { id: h[b.zr] });
      });
      e = (function () {
        function b() {
          if (!k)
            try {
              (k = !0), c(h), (k = !1);
            } catch (a) {
              throw ((k = !1), a);
            }
        }
        function c(a) {
          a = a.Moat;
          p();
          var b = new D().getTime(),
            d = x.max(x.min(b - e, g), 0);
          a.n.a.zaxs("view:tick", d, b);
          e = b;
        }
        var e = new D().getTime(),
          g = 1e4;
        a.d.x().isInApp && (g = 500);
        var h = { Moat: a, domNodesIdToAd: F },
          k = !1;
        a.n.a.azsx("periscope:onStateChange", b);
        a.n.a.azsx("viewCounterStarted", b);
        var m = "MOAT_VIEW_LOOP_ID_" + new D().getTime();
        a.o.o(c, h, 200, m);
        return a.b.dl([h], c);
      })();
      a.ac = a.ac || {};
      a.ac.d = function (b) {
        return b ? a.focus.pageIsVisible() : !1;
      };
      a.ac.h = function () {
        C.z = void 0;
        C.ACTIVETIMEUNTILSCROLL = void 0;
        C.zs = !1;
        C.xz = !1;
        C.dcsx.wsqa("globalScrollevent" + C.dcsx.uid);
        a.b.forEach(hooks.onResetListeners, function (a) {
          if (a && "function" === typeof a)
            try {
              a();
            } catch (b) {}
        });
      };
      a.ac.i = function (b) {
        var c = 1;
        screen.deviceXDPI
          ? (c = screen.deviceXDPI / screen.systemXDPI)
          : b.devicePixelRatio &&
            "undefined" !== typeof b.mozInnerScreenX &&
            (c = b.devicePixelRatio);
        return (b = a.d.z())
          ? { w: c * b.width, h: c * b.height }
          : { w: 0, h: 0 };
      };
      a.ac.f = function (b) {
        if (!b || !b.aq || !b.aq[0]) return !1;
        var c = { e: 37 };
        c.q = b.aq[37]++;
        a.ad.a(b, c);
      };
      a.ac.j = b;
      a.ac.k = e;
      a.ac.l = n;
      a.ac.m = function () {};
      a.ac.n = function (a) {};
      a.ac.e = function (b) {
        var c;
        c = b.aa;
        if (a.ao.b(b)) return !0;
        b.elementRect ||
          ((b.currentWidth = c.offsetWidth),
          (b.currentHeight = c.offsetHeight));
        c = b.currentWidth;
        b = b.currentHeight;
        return 3 > c ||
          3 > b ||
          (!a.d.q() && a.focus.pageIsPrerendered())
          ? !0
          : !1;
      };
      a.ac.o = p;
      a.ac.c = u;
      a.ac.a = function (b, c) {
        var e = { e: 9 };
        e.q = b.aq[9]++;
        b.ci = +new D();
        c &&
          "object" === typeof c &&
          a.b.forEach(c, function (a, b) {
            e[b] = a;
          });
        a.ad.a(b, e);
      };
      a.ac.b = function (c) {
        c.counters = {};
        c.counters.laxDwell = new k(
          function () {
            return !a.focus.pageIsPrerendered();
          },
          "bu",
          "cd"
        );
        c.counters.strictDwell = new k(
          a.focus.pageIsVisible,
          "ah",
          "am"
        );
        c.counters.query = function () {
          var a = {},
            b;
          for (b in this)
            if (this.hasOwnProperty(b)) {
              var c = this[b];
              "function" === typeof c.query && c.query(a);
            }
          return a;
        };
        c.counters.getQs = function () {
          var a = {},
            b;
          for (b in this)
            if (this.hasOwnProperty(b)) {
              var c = this[b];
              "function" === typeof c.getQs && c.getQs(a);
            }
          return a;
        };
        c.counters.update = function (a, b, c) {
          for (var d in this)
            if (this.hasOwnProperty(d)) {
              var e = this[d];
              "function" === typeof e.update &&
                !0 !== a.ep &&
                e.update(a, b, c);
            }
        };
        a.n.a.azsx("startAdTracking", b);
        var d = a.n.a.azsx(
          "view:tick",
          a.b.dl([c], c.counters.update, c.counters)
        );
        h[c.zr] = d;
      };
      a.ac.p = function (b, d) {
        var e = !1;
        if (!b || !b.aq || !b.aq[29] || 3 > b.aq[29])
          return !1;
        for (var g = 0; g < d.length; g++) {
          var h = d[g];
          -1 === a.b.indexOf(c, h) && ((e = !0), c.push(h));
        }
        e &&
          ((e = { e: 37 }),
          (e.q = b.aq[37]++),
          a.ad.a(b, e));
      };
      a.ac.g = function (b) {
        b.eq || (b.eq = !0);
        var c = { e: 5 };
        c.q = b.aq[5]++;
        a.ad.a(b, c);
      };
      a.ac.q = function () {
        return g;
      };
      a.ac.r = t;
      a.ac.s = function () {
        return c;
      };
    })();
    (function () {
      function b(b, p) {
        function u(a) {
          return function () {
            try {
              a.sending && ((a.sending = !1), (c = 0), k());
            } catch (b) {}
          };
        }
        function k(a, b) {
          if (a) {
            var d = { qs: a, jsd: b };
            if (0 === a.indexOf("e=21&")) {
              m(d, !0);
              return;
            }
            g.push(d);
          }
          0 === c &&
            0 < g.length &&
            (c++,
            (d = g.shift()),
            (d.sending = !0),
            (d.uid = p.Math.floor(1e10 * p.Math.random())),
            (d.timeoutId = p.setTimeout(u(d), 2e3)),
            (z[d.uid] = d),
            m(d));
        }
        function n() {
          try {
            return new e(1, 1);
          } catch (a) {
            var b = window.document.createElement("img");
            b.height = 1;
            b.width = 1;
            return b;
          }
        }
        function m(b, c) {
          if (
            !(
              "object" === typeof a &&
              a &&
              a.d &&
              a.d.az &&
              a.d.az()
            )
          ) {
            var d = n();
            d.toSend = b;
            c ||
              ((d.onerror = function () {
                var a = this.toSend;
                a.failedAttempts =
                  "number" == typeof a.failedAttempts
                    ? a.failedAttempts + 1
                    : 0;
                var b = (a.jsd + "/pixel.gif?" + a.qs)
                  .length;
                1 > a.failedAttempts
                  ? m(a)
                  : B && b > v && h(a);
              }),
              (d.onload = function () {
                h(this.toSend);
              }));
            d.src = b.jsd + "/pixel.gif?" + b.qs;
          }
        }
        function h(a) {
          var b = a && a.uid && z && z[a.uid];
          if (a && a.qs && "tracer=" == a.qs) return !1;
          if (b) {
            z[a.uid] = null;
            try {
              delete z[a.uid];
            } catch (d) {}
            try {
              clearTimeout(b.timeoutId);
            } catch (d) {}
            if ("boolean" != typeof b.sending || b.sending)
              b.sending = !1;
            else return !1;
          }
          0 < c && c--;
          k();
        }
        var g = [],
          c = 0,
          e,
          f;
        f = p[b];
        var d = p.Math.floor(1e10 * p.Math.random()),
          z = {};
        f.yh = {};
        f = f.yh;
        e = p.Image;
        f.yi = function (a, b) {
          k(a, b);
        };
        f.xq = function () {
          return d;
        };
        var l,
          B,
          v = 2083;
        try {
          (l = document.createElement("div")),
            (l.innerHTML =
              "\x3c!--[if IE 8]>x<![endif]--\x3e"),
            (B = "x" === l.innerHTML);
        } catch (A) {
          B = !1;
        }
      }
      a.ar = a.ar || {};
      a.ar.a = function (t) {
        try {
          if (C.yh) return;
        } catch (p) {}
        a.d.az()
          ? b(a.d.as, t)
          : a.b.dx(b, "'" + a.d.as + "',window", t);
      };
    })();
    (function () {
      function b(a, b, c) {
        a.IR5.MIN[c] = x.min(b, a.IR5.MIN[c]) || b || 1;
        a.IR5.MAX[c] = x.max(b, a.IR5.MAX[c]) || b;
      }
      function t(b) {
        if (B) return !0;
        var c = C.swde.azsx(
          "focusStateChange",
          function (a) {
            var c = { type: "blur" };
            a || (p(c, b), u(c, b));
          }
        );
        a.n.a.azsx(
          "adKilled",
          function () {
            C.swde.sxaz("focusStateChange", { id: c });
          },
          {
            once: !0,
            condition: function (a) {
              return b.zr == a.zr;
            },
          }
        );
        B = !0;
      }
      function p(a, b) {
        var c = a.type;
        t(b);
        if (b.az === q.zh.zn) {
          if ("mouseover" === c || "mousemove" === c)
            (b.bo = new D().getTime()), h(b);
        } else if (b.az === q.zh.zo) {
          "mousemove" === c && f(new D().getTime(), b);
          if ("mouseout" === c || "blur" === c)
            f(new D().getTime(), b), h(b);
          "scooper" === c && f(new D().getTime(), b);
        }
      }
      function u(a, b) {
        var c = a.type;
        t(b);
        if (b.ba === q.zh.zn) {
          if ("mouseover" === c || "mousemove" === c)
            (b.bp = new D().getTime()), g(b);
        } else if (b.ba === q.zh.zo) {
          "mousemove" === c && d(new D().getTime(), b);
          if ("mouseout" === c || "blur" === c)
            d(new D().getTime(), b), g(b);
          "scooper" === c && d(new D().getTime(), b);
        }
      }
      function k(a, b) {
        if (2 != b.an) {
          var d = a.type;
          if (b.ax === q.zf.zl) {
            if ("mouseover" === d || "mousemove" === d)
              (b.bq = new D().getTime()),
                (b.bs = new D().getTime()),
                c(b);
          } else
            b.ax === q.zf.zm &&
              (("mousemove" !== d && "mouseout" !== d) ||
                z(new D().getTime(), b),
              "park" === d && z(new D().getTime() - 500, b),
              ("mouseout" !== d && "park" !== d) || c(b));
        }
      }
      function n(a, b) {
        if (2 != b.an) {
          var c = a.type;
          if (b.ay === q.zg.zl) {
            if ("mouseover" === c || "mousemove" === c)
              (b.br = new D().getTime()),
                (b.bt = new D().getTime()),
                e(b);
          } else
            b.ay === q.zg.zm &&
              (("mousemove" !== c && "mouseout" !== c) ||
                l(new D().getTime(), b),
              "park" === c && l(new D().getTime() - 3e3, b),
              ("mouseout" !== c && "park" !== c) || e(b));
        }
      }
      function m(a, b) {
        b.be = x.max(
          "undefined" !== typeof b.be ? b.be : 0,
          a - b.bf
        );
        "undefined" === typeof b.by &&
          500 <= b.be &&
          (b.by = b.bk);
      }
      function h(a) {
        a.az === q.zh.zn
          ? (a.az = q.zh.zo)
          : a.az === q.zh.zo && (a.az = q.zh.zn);
      }
      function g(a) {
        a.ba === q.zh.zn
          ? (a.ba = q.zh.zo)
          : a.ba === q.zh.zo && (a.ba = q.zh.zn);
      }
      function c(a) {
        a.ax === q.zf.zl
          ? (a.ax = q.zf.zm)
          : a.ax === q.zf.zm && (a.ax = q.zf.zl);
      }
      function e(a) {
        a.ay === q.zg.zl
          ? (a.ay = q.zg.zm)
          : a.ay === q.zg.zm && (a.ay = q.zg.zl);
      }
      function f(a, b) {
        "undefined" === typeof b.bk && (b.bk = 0);
        b.bk += a - b.bo;
        b.bo = a;
      }
      function d(a, b) {
        "undefined" === typeof b.bl && (b.bl = 0);
        b.bl += a - b.bp;
        b.bp = a;
      }
      function z(a, b) {
        "undefined" === typeof b.bg && (b.bg = 0);
        "undefined" === typeof b.bc && (b.bc = 0);
        b.bu = a - b.bs;
        b.bu > b.bc && (b.bc = b.bu);
        b.bg += a - b.bq;
        500 <= b.bc &&
          "undefined" === typeof b.bw &&
          ((b.bk += a - b.bo), (b.bw = b.bk));
        b.bq = a;
      }
      function l(a, b) {
        "undefined" === typeof b.bh && (b.bh = 0);
        "undefined" === typeof b.bd && (b.bd = 0);
        b.bv = a - b.bt;
        b.bv > b.bd && (b.bd = b.bv);
        b.bh += a - b.br;
        500 <= b.bd &&
          "undefined" === typeof b.bx &&
          ((b.bl += a - b.bp), (b.bx = b.bl));
        b.br = a;
      }
      var B = !1,
        v,
        A,
        q = { ze: {} };
      q.ze.zj = 0;
      q.ze.zk = 1;
      q.zf = {};
      q.zf.zl = 0;
      q.zf.zm = 1;
      q.zg = {};
      q.zg.zl = 0;
      q.zg.zm = 1;
      q.zh = {};
      q.zh.zn = 0;
      q.zh.zo = 1;
      q.zi = {};
      q.zi.zp = 0;
      q.zi.zq = 1;
      q.cr = {};
      q.cr.zp = 0;
      q.cr.cp = 1;
      q.cr.co = 2;
      a.ah = a.ah || {};
      a.ah.b = function (a) {
        b(a, a.aj, "x");
        b(a, a.ak, "y");
        a.IR5.AREA =
          (a.IR5.MAX.x - a.IR5.MIN.x) *
          (a.IR5.MAX.y - a.IR5.MIN.y);
      };
      a.ah.c = p;
      a.ah.d = u;
      a.ah.e = function (b) {
        function c() {
          3e3 <= new D().getTime() - A &&
            (n({ type: "park" }, b),
            clearInterval(e),
            (b.av = q.ze.zj));
        }
        var d = b.av;
        if (d === q.ze.zj) {
          A = new D().getTime();
          var e = a.o.d(c, 50);
          b.av = q.ze.zk;
        } else d === q.ze.zk && (A = new D().getTime());
      };
      a.ah.f = function (a, b) {
        var c = a.type;
        if (b.bb == q.zi.zp) {
          if ("mouseover" == c || "mousemove" == c)
            (b.bf = new D().getTime()), (b.bb = q.zi.zq);
        } else
          b.bb == q.zi.zq &&
            ("mouseout" == c
              ? (m(new D().getTime(), b), (b.bb = q.zi.zp))
              : ("mousemove" != c && "scooper" != c) ||
                m(new D().getTime(), b));
      };
      a.ah.g = function (b) {
        function c() {
          500 <= new D().getTime() - v &&
            (k({ type: "park" }, b),
            clearInterval(e),
            (b.au = q.ze.zj));
        }
        var d = b.au;
        if (d === q.ze.zj) {
          v = new D().getTime();
          var e = a.o.d(c, 50);
          b.au = q.ze.zk;
        } else d === q.ze.zk && (v = new D().getTime());
      };
      a.ah.h = n;
      a.ah.i = k;
      a.ah.a = q;
    })();
    (function () {
      function b(a, b) {
        if (a) {
          var c = b || a.aa;
          c && u(c, a.zr);
        }
      }
      function t(a, b) {
        if (a) {
          var c = b || a.aa;
          c && u(c, a.zr, "remove");
        }
      }
      function p(b, c, d, e, f) {
        ("remove" === f ? a.o.i : a.o.a)(
          b,
          c,
          function (c) {
            c = c || this.event;
            var e = c.currentTarget || b;
            try {
              var f = e[R];
            } catch (g) {
              f = e[R];
            }
            if ((f = F[f])) {
              var h;
              h = c;
              var l = e.getBoundingClientRect();
              h =
                -1 != h.type.indexOf("touch") &&
                h.changedTouches &&
                0 < h.changedTouches.length
                  ? {
                      x: parseInt(
                        h.changedTouches[0].clientX -
                          l.left,
                        10
                      ),
                      y: parseInt(
                        h.changedTouches[0].clientY - l.top,
                        10
                      ),
                    }
                  : {
                      x: parseInt(h.clientX - l.left, 10),
                      y: parseInt(h.clientY - l.top, 10),
                    };
              f.aj = h.x;
              f.ak = h.y;
              f.dm ||
                ((f.cb =
                  2 == a.focus.getFocusMethod()
                    ? f.counters.laxDwell.tCur
                    : f.counters.strictDwell.tCur),
                (f.dm = 1));
              d.call(b, c, e, f);
            }
          },
          "genmouse"
        );
      }
      function u(b, c, g) {
        p(b, "click", d, c, g);
        p(b, "mousedown", n, c, g);
        ea
          ? a.d["do"] && p(b, "touchstart", m, c, g)
          : (p(b, "mousemove", k, c, g),
            p(b, "mouseover", e, c, g),
            p(b, "mouseout", f, c, g));
      }
      function k(b, c, d) {
        a.n.a.zaxs("mouseEventOnAd", d);
        if (!ea && (d.aj !== d.al || d.ak !== d.am)) {
          a.ah.i(b, d);
          a.ah.h(b, d);
          a.ah.c(b, d);
          a.ah.f(b, d);
          a.ah.d(b, d);
          a.ah.b(d);
          a.ah.g(d);
          a.ah.e(d);
          0 === d.ar.length && (d.ai = l(d));
          if (
            100 > d.ar.length ||
            100 > d.as.length ||
            100 > d.at.length
          )
            d.ar.push(d.aj),
              d.as.push(d.ak),
              d.at.push(a.b.bs(d));
          d.al = d.aj;
          d.am = d.ak;
        }
        d.ai !== l(d) && 1 < d.ar.length && z(d);
      }
      function n(b, c, d) {
        a.n.a.zaxs("mouseEventOnAd", d);
        b = { e: 2 };
        b.q = d.aq[2]++;
        b.x = d.aj;
        b.y = d.ak;
        a.ad.a(d, b);
      }
      function m(b, c, d) {
        a.n.a.zaxs("mouseEvent", d);
        a.n.a.zaxs("mouseEventOnAd", d);
        b = { e: 23 };
        b.q = d.aq[23]++;
        b.x = d.aj;
        b.y = d.ak;
        c = new D().getTime();
        if ("undefined" === typeof d.ct) d.ct = c;
        else {
          var e = c - d.ct;
          d.ct = c;
          d.cu = x.min(d.cu, e) || e;
        }
        b.bz = void 0;
        a.ad.a(d, b);
      }
      function h(b, d, e) {
        var f;
        if (2 == b.an || b.hasIframeListener) f = !0;
        if (f) {
          f = d.e;
          var h = b.ck,
            l = a.ah.a;
          h == l.cr.zp && 6 === f
            ? (g(b, 0),
              (b.cl = a.b.bs(b)),
              (b.ck = l.cr.cp))
            : h == l.cr.cp
            ? 22 === f
              ? (c(b, d), g(b, e), (b.cl = a.b.bs(b)))
              : 7 === f &&
                (1e3 < a.b.bs(b) - b.cl
                  ? (clearTimeout(b.cm),
                    (d.e = 22),
                    c(b, d),
                    (b.cn = 0),
                    (b.ck = l.cr.zp))
                  : (b.ck = l.cr.co))
            : h == l.cr.co &&
              (6 == f
                ? (1e3 < a.b.bs(b) - b.cl &&
                    (clearTimeout(b.cm),
                    (b.cn = 0),
                    (b.cl = a.b.bs(b)),
                    g(b, 0)),
                  (b.ck = l.cr.cp))
                : 22 == f &&
                  (c(b, d), (b.ck = l.cr.zp), (b.cn = 0)));
        }
      }
      function g(b, c) {
        if (a.focus.checkFocus()) {
          var d = 5 > b.cn ? 1e3 : 2 * c,
            e = { e: 22 };
          b.cm = a.o.e(function () {
            h(b, e, d);
          }, d);
        } else h(b, { e: 7 }, 0);
      }
      function c(b, c) {
        c.q = b.aq[c.e]++;
        c.m = a.b.bs(b);
        b.cl = c.m;
        a.ad.a(b, c);
        b.cn++;
      }
      function e(b, c, d) {
        a.n.a.zaxs("mouseEvent", d);
        a.n.a.zaxs("mouseEventOnAd", d);
        a.ah.i(b, d);
        a.ah.h(b, d);
        a.ah.c(b, d);
        a.ah.f(b, d);
        a.ah.d(b, d);
        h(d, { e: 6 }, 0);
      }
      function f(b, c, d) {
        a.n.a.zaxs("mouseEventOnAd", d);
        a.ah.i(b, d);
        a.ah.h(b, d);
        a.ah.c(b, d);
        a.ah.f(b, d);
        a.ah.d(b, d);
        h(d, { e: 7 }, 0);
      }
      function d(b, c, d) {
        a.n.a.zaxs("mouseEvent", d);
        a.n.a.zaxs("mouseEventOnAd", d);
        b = { e: 3 };
        b.q = d.aq[3]++;
        b.x = d.aj;
        b.y = d.ak;
        a.ad.a(d, b);
      }
      function z(b, c) {
        b.ai = l(b);
        var d = { e: 1 };
        d.q = b.aq[1]++;
        d.x = b.ar.join("a");
        d.y = b.as.join("a");
        for (
          var e = a.b.bs(b), f = b.at, g = [], h = 0;
          h < f.length;
          h++
        )
          isNaN(f[h]) || g.push(x.abs(f[h] - e));
        d.c = g.join("a");
        d.m = e;
        a.ad.a(b, d);
        b.ar = [];
        b.as = [];
        b.at = [];
      }
      function l(b) {
        return x.floor(a.b.bs(b) / 1e3);
      }
      function B(b) {
        a.b.forEach(b.mouseEventElements, function (a) {
          try {
            t(b, a), (a[R] = null);
          } catch (c) {}
        });
      }
      a.m = a.m || {};
      a.m.b = b;
      a.m.e = B;
      a.m.c = function (c) {
        if (a.d.dn) {
          a.n.a.azsx("adKilled", B, {
            once: !0,
            condition: function (a) {
              return c.zr == a.zr;
            },
          });
          c.mouseEventElements ||
            (c.mouseEventElements = []);
          var d = c.aa;
          b(c, d);
          c.mouseEventElements.push(d);
        }
      };
      a.m.a = t;
      a.m.d = function (c, d) {
        if (!d || !c || "number" === typeof d[R]) return !1;
        !c.hasIframeListener &&
          d.tagName &&
          "iframe" === d.tagName.toLowerCase() &&
          (c.hasIframeListener = !0);
        !c.hasNonIframeListener &&
          d.tagName &&
          "iframe" !== d.tagName.toLowerCase() &&
          ((c.hasNonIframeListener = !0),
          (c.an = a.e.q(d)));
        d[R] = c.zr;
        b(c, d);
        c.mouseEventElements || (c.mouseEventElements = []);
        c.mouseEventElements.push(d);
        return (c.proxyTrackingEnabled = !0);
      };
      a.m.f = function (b) {
        for (var c in F)
          F.hasOwnProperty(c) &&
            (b = F[c]) &&
            (a.ah.c({ type: "scooper" }, b),
            a.ah.f({ type: "scooper" }, b),
            a.ah.d({ type: "scooper" }, b),
            1 < b.ar.length && b.ai !== l(b) && z(b));
      };
    })();
    (function () {
      function b(b, k) {
        var n = !0;
        (k && a.d.dj(b, !0)) || (n = !1);
        if (n) {
          n = !0;
          k &&
            k.getCareAboutFocus &&
            (n = k.getCareAboutFocus());
          var m = a.ac.e(b),
            n = (!n || a.ac.d(b)) && !m;
        }
        return n;
      }
      function t(p) {
        this.label = p;
        this.metrics = {};
        this.hasTickUpdateMetrics = !1;
        this.set = function (a, b, m) {
          this.metrics[a] = this.metrics[a] || {};
          this.metrics[a].value = b || 0;
          m &&
            (this.hasTickUpdateMetrics ||
              (this.hasTickUpdateMetrics = !0),
            (this.metrics[a].incrementValue =
              m.incrementValue || "delta"),
            (this.metrics[a].ignoreStateCheck =
              m.ignoreStateCheck || !1),
            (this.metrics[a].shouldIncrementFn =
              m.shouldIncrementFn),
            (this.metrics[a].postIncrementationFn =
              m.postIncrementationFn || !1),
            m.useDeltaCompensation &&
              ((this.metrics[a].useDeltaCompensation = !0),
              (this.metrics[a].incrementedLastTick = !1)));
          return this.metrics[a].value;
        };
        this.increment = function (a, b, m, h, g) {
          var c =
            !this.metrics[a] ||
            "number" !== typeof this.metrics[a].value;
          try {
            if (
              h.debugData &&
              c &&
              "publicis_counter" == this.label
            ) {
              var e;
              this.metrics[a]
                ? this.metrics[a].value &&
                  (e = this.metrics[a].value)
                : (e = "NONE");
              var f = [b, e, g].join("-");
              h.debugData.cache.push(f);
            }
          } catch (d) {}
          b = c
            ? this.set(a, b)
            : (this.metrics[a].value += b);
          "number" === typeof m && (b = this.cap(a, b));
          return b;
        };
        this.cap = function (a, b) {
          return this.set(a, x.min(this.get(a), b));
        };
        this.max = function (a, b) {
          return this.set(a, x.max(this.get(a), b));
        };
        this.get = function (a, b) {
          return "undefined" === typeof this.metrics[a]
            ? this.set(a, "undefined" !== typeof b ? b : 0)
            : this.metrics[a].value;
        };
        this.update = function (k, n, m) {
          if (k && this.hasTickUpdateMetrics) {
            m = a.v.z(k.zr, !0);
            var h = b(k, m),
              g;
            for (g in this.metrics)
              if (a.b.cf(this.metrics, g)) {
                var c = this.metrics[g];
                if (c.shouldIncrementFn) {
                  var e =
                    (h || !0 === c.ignoreStateCheck) &&
                    c.shouldIncrementFn(k, m);
                  c.useDeltaCompensation
                    ? (e && c.incrementedLastTick
                        ? this.increment(g, n, void 0, k, 1)
                        : (e || c.incrementedLastTick) &&
                          this.increment(
                            g,
                            x.round(n / 2),
                            void 0,
                            k,
                            2
                          ),
                      (c.incrementedLastTick = e))
                    : e &&
                      ("delta" === c.incrementValue
                        ? this.increment(g, n, void 0, k, 3)
                        : "addReturnValue" ===
                          c.incrementValue
                        ? this.increment(g, e, void 0, k, 4)
                        : "setReturnValue" ===
                            c.incrementValue &&
                          this.set(g, e));
                  "function" ===
                    typeof c.postIncrementationFn &&
                    c.postIncrementationFn(e);
                }
              }
          }
        };
      }
      function p(a, b) {
        if (!a) return !1;
        var n;
        a[b] ? (n = a[b]) : ((n = new t(b)), (a[b] = n));
        return n;
      }
      a.as = a.as || {};
      a.as.a = b;
      a.as.b = t;
      a.as.c = function (a, b, n) {
        if (!b) return !1;
        b = p(b, n);
        a.secondaryCounters = a.secondaryCounters || [];
        a.secondaryCounters.push(b);
        return b;
      };
      a.as.d = p;
    })();
    (function (a) {
      function t(k, n, m) {
        this.name = k;
        this.reachedInViewTimeThreshold = !1;
        this.alwaysInview = !0;
        this.queryStringKey = m.queryStringKey;
        this.timeThreshold = m.timeThreshold || 1e3;
        this.rawPercThreshold = m.percThreshold / 100 || 50;
        this.percThreshold = x.min(
          m.percThreshold / 100,
          0.98
        );
        this.continuous = m.continuous || !1;
        this.timePercent = m.timePercent;
        this.capTimeThreshold = m.capTimeThreshold;
        this.audible = m.audible || !1;
        this.video = m.video || !1;
        this.fullscreen = m.fullscreen || !1;
        "undefined" !== this.timeThreshold &&
          (this.timeThreshold = x.max(
            this.timeThreshold,
            1
          ));
        this.counterState = {};
        k = a.as.d(
          this.counterState,
          "customInViewCounter"
        );
        k.set("inViewTime", 0);
        k.set("continuousInViewTime", 0);
        k.set("maxContinuousInViewTime", 0);
        k.set("visOnLastCheck", !1);
        k.set("_tLastChecked", new D().getTime());
      }
      a.aa = {};
      var p = {},
        u = {};
      a.aa.c = function (a, b, m) {
        var h = b.zr;
        p[h] || (p[h] = {});
        if (
          p[h].hasOwnProperty(a) ||
          (void 0 == m.percThreshold &&
            void 0 == m.fullscreen) ||
          (void 0 == m.timeThreshold &&
            void 0 == m.timePercent)
        )
          return !1;
        m = new t(a, b, m);
        return (p[b.zr][a] = m);
      };
      a.aa.d = function (a, b) {
        return p[b] && p[b].hasOwnProperty(a)
          ? p[b][a]
          : !1;
      };
      a.aa.a = function (k) {
        if (!p[k]) return !0;
        var n = !0;
        a.b.forEach(p[k], function (a) {
          if (!a.reachedInViewTimeThreshold)
            return (n = !1);
        });
        return n;
      };
      t.prototype.update = function (k, n, m) {
        if (
          k &&
          this.isMeasurable(k) &&
          !this.reachedInViewTimeThreshold
        ) {
          var h,
            g = a.as.d(
              this.counterState,
              "customInViewCounter"
            ),
            c = a.v.z(k.zr, !0);
          if (c) {
            var e = c.getLastInviewPercent();
            h =
              (h = c.getFullyInViewThreshold()) &&
              "number" === typeof h
                ? x.min(this.percThreshold, h)
                : this.percThreshold;
            g.get("_tLastChecked");
            g.set("_tLastChecked", m);
            m = !0;
            c.getCareAboutFocus &&
              (m = c.getCareAboutFocus());
            k = c.getPauseCheckingFn
              ? c.getPauseCheckingFn()(k)
              : a.ac.e(k);
            e = e >= h;
            c = !m || a.focus.pageIsVisible();
            a.aa.e &&
              "function" === typeof a.aa.e &&
              (e = a.aa.e(e));
            a.aa.f &&
              "function" === typeof a.aa.f &&
              (c = a.aa.f(c));
            e = e && c && !k;
            k = g.get("visOnLastCheck");
            if (e && k)
              g.increment("inViewTime", n),
                g.increment("continuousInViewTime", n);
            else if (e || k)
              (n = x.round(n / 2)),
                g.increment("inViewTime", n),
                g.increment("continuousInViewTime", n);
            e || (this.alwaysInview = !1);
            g.set("visOnLastCheck", e);
            g.get("continuousInViewTime") >
              g.get("maxContinuousInViewTime") &&
              g.set(
                "maxContinuousInViewTime",
                g.get("continuousInViewTime")
              );
            e || g.set("continuousInViewTime", 0);
            this.inViewTimeReached() &&
              (this.reachedInViewTimeThreshold = !0);
          }
        }
      };
      t.prototype.getInViewTime = function () {
        var k = a.as.d(
          this.counterState,
          "customInViewCounter"
        );
        return this.continuous
          ? k.get("maxContinuousInViewTime")
          : k.get("inViewTime");
      };
      t.prototype.inViewTimeReached = function () {
        return (
          "undefined" !== this.timeThreshold &&
          this.getInViewTime() >= this.timeThreshold
        );
      };
      t.prototype.isMeasurable = function (k) {
        if (!k) return !1;
        var n = !1;
        "undefined" !== this.timeThreshold &&
          ("pscope" == a.v.a(k.zr, !0) &&
          k.custominview.periscopeThresholds
            ? a.b.ce(
                k.custominview.periscopeThresholds,
                this.rawPercThreshold
              ) &&
              a.d.dj(k) &&
              (n = !0)
            : a.d.dj(k, !0) && (n = !0));
        return n;
      };
      a.aa.g = function (k) {
        a.aa.c("full_vis_2_sec_continuous", k, {
          percThreshold: 100,
          timeThreshold: 2e3,
          video: !1,
          continuous: !0,
          queryStringKey: "wb",
        });
      };
      a.aa.h = function (k) {
        a.aa.g(k);
        k.custominview = {};
        k.custominview.eventIds = {};
        for (
          var n = (k.periscopeConfig || a.r.d(k)).pixels,
            m = [],
            h = 0,
            g = n.length;
          h < g;
          h++
        )
          m.push(parseFloat(n[h].position.top, 10) / 100);
        k.custominview.periscopeThresholds = m;
        k.custominview.eventIds.viewCounterStarted =
          a.n.a.azsx("viewCounterStarted", a.aa.i);
        k.custominview.eventIds["periscope:onStateChange"] =
          a.n.a.azsx("periscope:onStateChange", a.aa.i, {
            priority: 5,
          });
        k.custominview.eventIds.adKilled = a.n.a.azsx(
          "adKilled",
          a.aa.j
        );
        a.aa.i(k);
      };
      a.aa.i = function (k) {
        void 0 !== k &&
          (isNaN(k) || (k = F[k]),
          k &&
            k.custominview &&
            k.custominview.eventIds &&
            a.d.dj(k, !0) &&
            !k.custominview.eventIds["view:tick"] &&
            (k.custominview.eventIds["view:tick"] =
              a.n.a.azsx("view:tick", a.b.dl([k], a.aa.k), {
                priority: 6,
              })));
      };
      a.aa.k = function (k, n, m) {
        var h = k.zr;
        if (!p[h]) return !1;
        a.b.forEach(p[h], function (a) {
          a.update(k, n, m);
        });
      };
      a.aa.j = function (k) {
        k &&
          k.custominview &&
          k.custominview.eventIds &&
          (a.n.a.sxaz("view:tick", {
            id: k.custominview.eventIds["view:tick"],
            priority: 6,
          }),
          a.n.a.sxaz("viewCounterStarted", {
            id: k.custominview.eventIds.viewCounterStarted,
          }),
          a.n.a.sxaz("periscope:onStateChange", {
            id: k.custominview.eventIds[
              "periscope:onStateChange"
            ],
          }),
          a.n.a.sxaz("adKilled", {
            id: k.custominview.eventIds.adKilled,
          }),
          a.n.a.sxaz("video:AdVideoComplete", {
            id: k.custominview.eventIds[
              "video:AdVideoComplete"
            ],
          }));
      };
      a.aa.l = function () {
        a.n.a.sxaz("startAdTracking", {
          id: u.startAdTracking,
        });
        a.n.a.sxaz("allLocalAdsKilled", {
          id: u.allLocalAdsKilled,
        });
      };
      a.aa.b = function (k, n) {
        if (k)
          return (
            a.b.forEach(p[k.zr], function (a) {
              "custom_inview_module_counter" === a.name
                ? ((n.wm = 0),
                  (n.wi = 0),
                  a.isMeasurable(k) &&
                    ((n.wm = 1),
                    a.inViewTimeReached() && (n.wi = 1)))
                : void 0 != a.queryStringKey &&
                  ((n[a.queryStringKey] = 0),
                  a.isMeasurable(k) &&
                    ((n[a.queryStringKey] = 1),
                    a.inViewTimeReached() &&
                      (n[a.queryStringKey] = 2)));
            }),
            n
          );
      };
      a.aa.m = function (k) {
        if (!k) return !1;
        var n = !1;
        k = k.zr;
        if (!p[k]) return !1;
        a.b.forEach(p[k], function (a) {
          "custom_inview_module_counter" === a.name &&
            (n = a.reachedInViewTimeThreshold);
        });
        return n;
      };
      u.startAdTracking = a.n.a.azsx(
        "startAdTracking",
        a.aa.h
      );
      u.allLocalAdsKilled = a.n.a.azsx(
        "allLocalAdsKilled",
        a.aa.l
      );
    })(a);
    (function () {
      var b =
          "31017922 35254282 14478202 40353802 28454602 26176882 32195242 22102282 29007562 13728322 40683442 43503202 13853482 13827322 13929802 26502562 13783402 13868002 13771162 44773402 44773282 44773042 60033802 48970162 44669482 44771362 44772682 44772442 44771242 44772322 44671402 44771122 49406122 44773522 44772202 53041762 47974762 44772082 44771962 45970282 44771842 44770882 54406522 44676682".split(
            " "
          ),
        t = !1;
      a.at = a.at || {};
      a.at.a = function () {
        return t;
      };
      a.at.b = function (p) {
        b &&
          b &&
          p &&
          p.moatClientLevel1 &&
          a.b.ce(b, p.moatClientLevel1) &&
          (t = !0);
        p && p.zMoatENV && "x" === p.zMoatENV && (t = !0);
      };
      a.at.c = function (a) {
        return (t = a);
      };
    })();
    (function () {
      function b() {
        var b = new D().getTime();
        a.b.forEach(u, function (a) {
          var h = 20 > a.Y.YCoord.length,
            g = 20 > a.X.XCoord.length;
          if (!h && !g) return !0;
          var c = x.floor((b - a.startTime) / 1e3);
          if (h) {
            var h = a.Y.YCoord.slice(-1)[0],
              e = t.pageYOffset;
            e != h &&
              (a.Y.YCoord.push(e.toFixed(2)),
              a.Y.time.push(c));
          }
          g &&
            ((g = a.X.XCoord.slice(-1)[0]),
            (h = t.pageXOffset),
            h != g &&
              (a.X.XCoord.push(h.toFixed(2)),
              a.X.time.push(c)));
        });
      }
      var t,
        p = !1,
        u = {},
        k = (function (k) {
          return function (k) {
            if (a.d.c()) {
              t = a.d.e();
              var h = new D().getTime(),
                h = { adNum: k, startTime: h };
              h.Y = { YCoord: [t.pageYOffset], time: [0] };
              h.X = { XCoord: [t.pageXOffset], time: [0] };
              u[k] = h;
              p ||
                ((k = "scrollInfo#" + new D().getTime()),
                a.o.o(b, {}, 1e3, k),
                (p = !0));
            }
          };
        })();
      a.ai = a.ai || {};
      a.ai.b = function (a) {
        delete u[a];
      };
      a.ai.a = function (a, b) {
        var h = u && u[a];
        h &&
          h.X &&
          h.Y &&
          ((b.yco = h.Y.YCoord.join("a")),
          (b.yt = h.Y.time.join("a")),
          (b.xco = h.X.XCoord.join("a")),
          (b.xt = h.X.time.join("a")));
      };
      a.ai.c = k;
    })();
    (function () {
      function b(a, b) {
        var c = b;
        try {
          for (
            var g = a.split("."), h = 0;
            h < g.length;
            h++
          )
            c = c[g[h]];
        } catch (k) {
          c = null;
        }
        return c;
      }
      function t(c, f) {
        function d(a, c) {
          try {
            var d = b(c, a);
            if (null === d) return 0;
            var e =
                f.contentWindow.Function.prototype.toString.call(
                  d
                ),
              g = Array.toString().replace(/\w*\(\)/, "");
            return e.replace(/\w*\(\)/, "") === g ? 0 : 1;
          } catch (h) {
            return 0;
          }
        }
        function g(a, b) {
          try {
            var c,
              d = b.split("."),
              e = a,
              f = d[0];
            1 < d.length && ((e = d[0]), (f = d[1]));
            c = [e, f];
            var h = c[1];
            return void 0 ===
              a.Object.getOwnPropertyDescriptors(a[c[0]])[h]
              ? 0
              : 1;
          } catch (l) {
            return 0;
          }
        }
        for (
          var h = [
              {
                name: a.f.b([
                  39, 26, 47, 34, 32, 26, 45, 40, 43, 72,
                  44, 30, 39, 29, 1, 30, 26, 28, 40, 39,
                ]),
                methods: [],
              },
              {
                name: a.f.b([
                  39, 26, 47, 34, 32, 26, 45, 40, 43, 72,
                  32, 30, 45, 1, 26, 45, 45, 30, 43, 50,
                ]),
                methods: [],
              },
              {
                name: a.f.b([
                  39, 26, 47, 34, 32, 26, 45, 40, 43, 72,
                  35, 26, 47, 26, 4, 39, 26, 27, 37, 30, 29,
                ]),
                methods: [],
              },
              {
                name: a.f.b([
                  5, 46, 39, 28, 45, 34, 40, 39, 72, 41, 43,
                  40, 45, 40, 45, 50, 41, 30, 72, 45, 40,
                  18, 45, 43, 34, 39, 32,
                ]),
                methods: [],
              },
              {
                name: a.f.b([
                  29, 40, 28, 46, 38, 30, 39, 45, 72, 33,
                  26, 44, 5, 40, 28, 46, 44,
                ]),
                methods: [],
              },
              {
                name: a.f.b([
                  43, 30, 42, 46, 30, 44, 45, 0, 39, 34, 38,
                  26, 45, 34, 40, 39, 5, 43, 26, 38, 30,
                ]),
                methods: [],
              },
              {
                name: a.f.b([
                  28, 33, 43, 40, 38, 30, 72, 28, 44, 34,
                ]),
                methods: [],
              },
              {
                name: a.f.b([
                  22, 30, 27, 6, 11, 17, 30, 39, 29, 30, 43,
                  34, 39, 32, 2, 40, 39, 45, 30, 49, 45,
                ]),
                methods: [],
              },
            ],
            k = [
              {
                name: a.f.b([
                  39, 26, 47, 34, 32, 26, 45, 40, 43, 72,
                  46, 44, 30, 43, 0, 32, 30, 39, 45,
                ]),
                methods: [],
              },
            ],
            k = h.concat(k),
            m = [],
            n = 0;
          n < k.length;
          n++
        ) {
          var q = 0,
            r = k[n].name,
            p = k[n].methods;
          n >= h.length ? p.push(g) : p.push(d);
          for (var w = 0; w < p.length && 8 != w; w++) {
            for (var t = 0, u = 0; u < c.length; u++)
              t = t || p[w](c[u], r);
            q = (q << 1) + t;
          }
          m.push(q);
        }
        return m;
      }
      function p() {
        function c(b) {
          for (var d = ""; 0 < b; )
            (d += a.f.b([b % 62])), (b = x.floor(b / 62));
          return d;
        }
        function f(a) {
          return {
            propertyMethods: [
              function (b, c) {
                try {
                  var d = c.split("."),
                    e = a,
                    f = d[0];
                  1 < d.length && ((e = d[0]), (f = d[1]));
                  return a[e].hasOwnProperty(f).toString();
                } catch (g) {
                  return (!1).toString();
                }
              },
              function (b, c) {
                try {
                  var d = c.split("."),
                    e = a,
                    f = d[0];
                  1 < d.length && ((e = d[0]), (f = d[1]));
                  return a.Object.getOwnPropertyDescriptors(
                    a[e]
                  )[f].get.toString();
                } catch (g) {
                  return "";
                }
              },
              function (b, c) {
                try {
                  var d = c.split("."),
                    e = a,
                    f = d[0];
                  1 < d.length && ((e = d[0]), (f = d[1]));
                  return a.Object.getOwnPropertyDescriptors(
                    a[e]
                  )[f].get.toString.toString();
                } catch (g) {
                  return "";
                }
              },
            ],
            functionMethods: [
              function (a, b) {
                return a.name;
              },
              function (a, b) {
                try {
                  return new a.toString();
                } catch (c) {
                  return c.toString();
                }
              },
              function (b, c) {
                return a.Function.prototype.toString.call(
                  b
                );
              },
              function (b, c) {
                return a.Function.prototype.toString.call(
                  b.toString
                );
              },
              function (a, b) {
                try {
                  return ("prototype" in a).toString();
                } catch (c) {
                  return (!1).toString();
                }
              },
            ],
          };
        }
        var d = [
            a.f.b([
              29, 40, 28, 46, 38, 30, 39, 45, 72, 47, 34,
              44, 34, 27, 34, 37, 34, 45, 50, 18, 45, 26,
              45, 30,
            ]),
            a.f.b([
              29, 40, 28, 46, 38, 30, 39, 45, 72, 33, 34,
              29, 29, 30, 39,
            ]),
            a.f.b([
              29, 40, 28, 46, 38, 30, 39, 45, 72, 38, 40,
              51, 7, 34, 29, 29, 30, 39,
            ]),
            a.f.b([
              29, 40, 28, 46, 38, 30, 39, 45, 72, 38, 44, 7,
              34, 29, 29, 30, 39,
            ]),
            a.f.b([
              29, 40, 28, 46, 38, 30, 39, 45, 72, 48, 30,
              27, 36, 34, 45, 7, 34, 29, 29, 30, 39,
            ]),
            a.f.b([
              39, 26, 47, 34, 32, 26, 45, 40, 43, 72, 48,
              30, 27, 29, 43, 34, 47, 30, 43,
            ]),
            a.f.b([
              39, 26, 47, 34, 32, 26, 45, 40, 43, 72, 46,
              44, 30, 43, 0, 32, 30, 39, 45,
            ]),
            a.f.b([
              39, 26, 47, 34, 32, 26, 45, 40, 43, 72, 26,
              41, 41, 13, 26, 38, 30,
            ]),
            a.f.b([44, 28, 43, 30, 30, 39, 23]),
            a.f.b([44, 28, 43, 30, 30, 39, 24]),
            a.f.b([44, 28, 43, 30, 30, 39, 19, 40, 41]),
            a.f.b([44, 28, 43, 30, 30, 39, 11, 30, 31, 45]),
            a.f.b([
              44, 28, 43, 30, 30, 39, 72, 26, 47, 26, 34,
              37, 22, 34, 29, 45, 33,
            ]),
            a.f.b([
              44, 28, 43, 30, 30, 39, 72, 26, 47, 26, 34,
              37, 7, 30, 34, 32, 33, 45,
            ]),
          ],
          g = [
            a.f.b([3, 26, 45, 30]),
            a.f.b([
              29, 40, 28, 46, 38, 30, 39, 45, 72, 33, 26,
              44, 5, 40, 28, 46, 44,
            ]),
            a.f.b([
              29, 40, 28, 46, 38, 30, 39, 45, 72, 30, 37,
              30, 38, 30, 39, 45, 5, 43, 40, 38, 15, 40, 34,
              39, 45,
            ]),
            a.f.b([
              5, 46, 39, 28, 45, 34, 40, 39, 72, 41, 43, 40,
              45, 40, 45, 50, 41, 30, 72, 45, 40, 18, 45,
              43, 34, 39, 32,
            ]),
            a.f.b([
              43, 30, 42, 46, 30, 44, 45, 0, 39, 34, 38, 26,
              45, 34, 40, 39, 5, 43, 26, 38, 30,
            ]),
            a.f.b([
              44, 30, 45, 8, 39, 45, 30, 43, 47, 26, 37,
            ]),
            a.f.b([44, 30, 45, 19, 34, 38, 30, 40, 46, 45]),
            a.f.b([
              13, 40, 45, 34, 31, 34, 28, 26, 45, 34, 40,
              39,
            ]),
            a.f.b([
              22, 30, 27, 6, 11, 17, 30, 39, 29, 30, 43, 34,
              39, 32, 2, 40, 39, 45, 30, 49, 45, 72, 41, 43,
              40, 45, 40, 45, 50, 41, 30, 72, 32, 30, 45,
              18, 46, 41, 41, 40, 43, 45, 30, 29, 4, 49, 45,
              30, 39, 44, 34, 40, 39, 44,
            ]),
          ],
          h = [
            a.f.b([
              29, 40, 28, 46, 38, 30, 39, 45, 72, 33, 26,
              44, 5, 40, 28, 46, 44,
            ]),
            a.f.b([
              39, 26, 47, 34, 32, 26, 45, 40, 43, 72, 48,
              30, 27, 29, 43, 34, 47, 30, 43,
            ]),
          ];
        return (
          "1_" +
          (function (a) {
            for (
              var b = "", c = d.concat(g), e = 0;
              e < c.length;
              e++
            ) {
              var f = c[e];
              if (a.hasOwnProperty(f))
                for (var f = a[f], h = 0; h < f.length; h++)
                  b += f[h] + "-";
            }
            return b;
          })(
            (function () {
              for (
                var a = {}, g = f(window), m = {}, q = 0;
                q < d.length;
                q++
              )
                m[d[q]] = !0;
              for (q = 0; q < h.length; q++) {
                var n = h[q];
                a[n] = [];
                var p = g.functionMethods;
                m.hasOwnProperty(n) &&
                  (p = g.propertyMethods);
                try {
                  for (
                    var w = b(n, window), t = 0;
                    t < p.length;
                    t++
                  ) {
                    var u = p[t];
                    try {
                      a[n].push(
                        c(
                          k(
                            u(w, n)
                              .replace(/\-/g, "%2D")
                              .replace(/\s*/g, "")
                          )
                        )
                      );
                    } catch (z) {
                      a[n].push("");
                    }
                  }
                } catch (z) {
                  a[n].push("E");
                }
              }
              return a;
            })()
          )
        );
      }
      function u() {
        if (g) return g;
        var b = a.f.b([28, 26, 39, 47, 26, 44]),
          c = a.f.b([48, 30, 27, 32, 37]),
          d = a.f.b([
            30, 49, 41, 30, 43, 34, 38, 30, 39, 45, 26, 37,
          ]),
          h = a.f.b([
            22, 4, 1, 6, 11, 84, 29, 30, 27, 46, 32, 84, 43,
            30, 39, 29, 30, 43, 30, 43, 84, 34, 39, 31, 40,
          ]),
          l = a.f.b([
            20, 13, 12, 0, 18, 10, 4, 3, 84, 21, 4, 13, 3,
            14, 17, 84, 22, 4, 1, 6, 11,
          ]),
          k = a.f.b([
            20, 13, 12, 0, 18, 10, 4, 3, 84, 17, 4, 13, 3,
            4, 17, 4, 17, 84, 22, 4, 1, 6, 11,
          ]),
          n = a.f.b([47, 30, 39, 29, 40, 43]),
          m = a.f.b([43, 30, 39, 29, 30, 43, 30, 43]),
          q = a.f.b([
            28, 43, 30, 26, 45, 30, 4, 37, 30, 38, 30, 39,
            45,
          ]),
          r = a.f.b([
            32, 30, 45, 2, 40, 39, 45, 30, 49, 45,
          ]),
          p = a.f.b([
            32, 30, 45, 4, 49, 45, 30, 39, 44, 34, 40, 39,
          ]),
          t = a.f.b([
            32, 30, 45, 15, 26, 43, 26, 38, 30, 45, 30, 43,
          ]),
          u = {};
        try {
          var J = document[q](b),
            H = J[r](c) || J[r](d + "-" + c),
            x = H[p](h);
          u[n] = H[t](x[l]);
          u[m] = H[t](x[k]);
        } catch (D) {}
        return (g = a.f.l(a.f.v(u)));
      }
      function k(a) {
        var b = 0,
          c = a.length,
          g,
          h;
        if (0 == c) return b;
        for (g = 0; g < c; g++)
          (h = a.charCodeAt(g)),
            (b = (b << 5) - b + h),
            (b &= b);
        return b >>> 0;
      }
      function n() {
        var b = [];
        if (!a.l.e(window.top)) {
          var c = [],
            d = a.f.b([28, 33, 43, 40, 38, 30]),
            g = a.f.b([30, 49, 45, 30, 39, 44, 34, 40, 39]),
            h = "'" + d + "-" + g + "://']";
          window.top.document &&
            "function" ===
              typeof window.top.document.querySelectorAll &&
            (c = window.top.document.querySelectorAll(
              "[src^=" + h + ",[data^=" + h + ",[href^=" + h
            ));
          0 !== c.length &&
            window.String &&
            "function" ===
              typeof window.String.prototype.match &&
            a.b.forEach(c, function (a) {
              (a = a.outerHTML.match(
                '[a-z]+="' + d + "-" + g + "://([a-z]+)"
              )) &&
                1 < a.length &&
                -1 === b.indexOf(a[1]) &&
                b.push(a[1]);
            });
        }
        c = b.join(",");
        window.String &&
          window.String.prototype.slice &&
          (c = c.slice(0, 150));
        return a.f.m(c);
      }
      function m(b, c) {
        var d = a.f.b([46, 39, 29, 30, 31, 34, 39, 30, 29]),
          g = a.f.b([77]),
          h = a.f.b([72]);
        try {
          var n = b.split(h),
            h = c || window,
            m,
            p;
          for (p = 0; p < n.length; p++) {
            m = n[p];
            if (null === h || typeof h === d) return 1;
            h = h[m];
          }
          return typeof h === d
            ? 2
            : null === h
            ? 3
            : 4 + (k(b + g + h.toString()) % 58);
        } catch (q) {
          return 0;
        }
      }
      function h() {
        var a,
          b = [
            function () {
              return (
                "c$$b" !==
                "cab".replace("a", function () {
                  return "$$";
                })
              );
            },
            function () {
              return Function(
                'class A { constructor(pp) { this.pp = pp; }\n call() { return this.pp; }\n }\n class B extends A { tS(a) { return super.call(); }\n tT(a){ return this.call(); } }\n  const obj = new B("cab");  return (obj.tS() !== obj.tT()); '
              )();
            },
            function () {
              return Function("'\\\n\r'")();
            },
            function () {
              return Function(
                'return ((new Date("1300-02-28T21:11:11.000Z")).toISOString() !== "1300-02-28T21:11:11.000Z")'
              )();
            },
            function () {
              return Function(
                'return (new Date("2835")).toISOString() !== "2835-01-01T00:00:00.000Z"'
              )();
            },
            function () {
              return (
                -1 !==
                "22".localeCompare("122", "de", {
                  numeric: !0,
                })
              );
            },
            function () {
              return "p" === window.atob("cab==");
            },
            function () {
              return "cab" !== "cab".split(/\b/).pop();
            },
            function () {
              return void 0 === Array.prototype.find;
            },
            function () {
              return Number.isNaN("MAX_SAFE_INTEGER");
            },
            function () {
              return /(G)+|(X)+X/.test("X ");
            },
            function () {
              return "bec" != "cabecab".match(".?e.?");
            },
            function () {
              var a = {};
              ["cab", "cab"].sort(a, a);
              return !0;
            },
            function () {
              var a = new Proxy([3, 444], {});
              return [12, 444].concat(a)[3];
            },
            function () {
              return Function(
                "let x = (e) => { let e = true;};"
              )();
            },
            function () {
              return (
                0 ===
                new ArrayBuffer(5).slice(3, 4394878398)
                  .byteLength
              );
            },
          ];
        a = "1-";
        for (var c = 0; c < b.length; c++) {
          var g;
          try {
            g = (0, b[c])() ? "1" : "0";
          } catch (h) {
            g = "2";
          }
          a += g;
        }
        return a;
      }
      var g, c;
      a.au = a.au || {};
      a.au.a = function (b) {
        if (void 0 !== c) return a.b.i(c);
        c = {};
        var f = a.d.e();
        try {
          var d = f.document,
            g = d.body,
            l =
              f.innerWidth ||
              d.documentElement.clientWidth ||
              g.clientWidth,
            B =
              f.innerHeight ||
              d.documentElement.clientHeight ||
              g.clientHeight,
            v = f.outerWidth || g.offsetWidth,
            A = f.outerHeight || g.offsetHeight;
        } catch (x) {}
        try {
          var q = f.screenX || f.screenLeft || f.screenX,
            r = f.screenY || f.screenTop || f.screenY;
        } catch (x) {}
        g = new D().getTimezoneOffset();
        document && document.body
          ? ((d = document.createElement(
              a.f.b([34, 31, 43, 26, 38, 30])
            )),
            (d.width = a.f.b([53, 41, 49])),
            (d.height = a.f.b([53, 41, 49])),
            (d.style.left =
              "-" + a.f.b([61, 61, 61, 61, 41, 49])),
            (d.style.top =
              "-" + a.f.b([61, 61, 61, 61, 41, 49])),
            (d.style.position = a.f.b([
              26, 27, 44, 40, 37, 46, 45, 30,
            ])),
            document.body.appendChild(d))
          : (d = void 0);
        var y = a.f.b([84, 41, 33, 26, 39, 45, 40, 38]),
          w = a.f.b([
            28, 26, 37, 37, 15, 33, 26, 39, 45, 40, 38,
          ]),
          y =
            !0 ===
            ("undefined" != typeof f[y] ||
              "undefined" != typeof f[w])
              ? 1
              : 0,
          E,
          J = d,
          H =
            /(?:Mac OS X )(\d{2}_\d{2})(?:.*Version\/)(\d{2})/,
          G = a.f.b([
            64, 28, 29, 28, 84, 26, 44, 29, 35, 31, 37, 26,
            44, 46, 45, 40, 41, 31, 33, 47, 28, 25, 11, 38,
            28, 31, 37, 84,
          ]),
          w = a.f.b([28, 33, 43, 40, 38, 30]),
          C = a.f.b([43, 46, 39, 45, 34, 38, 30]),
          K = a.f.b([41, 37, 46, 32, 34, 39, 44]),
          F = a.f.b([
            15, 37, 46, 32, 34, 39, 0, 43, 43, 26, 50,
          ]),
          X = a.f.b([38, 34, 38, 30, 19, 50, 41, 30, 44]),
          S = a.f.b([
            38, 26, 49, 19, 40, 46, 28, 33, 15, 40, 34, 39,
            45, 44,
          ]),
          P,
          Q,
          I,
          L = 2,
          M = 2,
          N = 2,
          G = f.document && f.document[G] ? 1 : 0,
          U,
          O,
          R,
          W,
          aa = a.f.b([34, 45, 30, 38]),
          ba = a.f.b([45, 30, 44, 45]);
        window.String && window.String.prototype.match
          ? ((H = navigator.userAgent.match(H)),
            (H =
              null != H && "10_12" == H[1] && "10" == H[2]))
          : (H = !1);
        if (!H) {
          var H =
              a.f.b([
                47, 34, 29, 30, 40, 73, 38, 41, 56, 75,
              ]) +
              " " +
              a.f.b([
                28, 40, 29, 30, 28, 44, 77, 90, 26, 47, 28,
                53, 72, 58, 56, 52, 52, 53, 4, 71,
              ]) +
              " " +
              a.f.b([
                38, 41, 56, 26, 72, 56, 52, 72, 54, 90,
              ]),
            da =
              a.f.b([
                26, 46, 29, 34, 40, 73, 38, 41, 56, 75,
              ]) +
              " " +
              a.f.b([
                28, 40, 29, 30, 28, 44, 77, 90, 38, 41, 56,
                26, 72, 56, 52, 72, 54, 90,
              ]),
            fa = document.createElement("video"),
            ha = document.createElement("audio");
          try {
            E = fa.canPlayType(H);
          } catch (x) {
            E = "E";
          }
          try {
            P = ha.canPlayType(da);
          } catch (x) {
            P = "E";
          }
        }
        var H = [],
          ca,
          ea;
        if (window.navigator) {
          O =
            (U = window.navigator[S]) &&
            Object.getOwnPropertyDescriptors &&
            void 0 !==
              Object.getOwnPropertyDescriptors(navigator)[
                S
              ];
          if (window.navigator[K]) {
            ea =
              window[F] &&
              window[F].prototype ===
                navigator[K].__proto__;
            I = window.navigator[K];
            ca = I.length;
            Object.getOwnPropertyDescriptors &&
              Object.getOwnPropertyDescriptors(
                window.navigator
              )[K] &&
              (Q = !0);
            for (R = 0; R < ca && 10 > R; R++)
              H.push(I[R].name);
            R = k(H.join("*"));
            if (window.navigator[K][aa])
              try {
                W = window.navigator[K][aa](ba) ? 0 : 1;
              } catch (x) {
                W = 3;
              }
            else W = 2;
          }
          I =
            window.navigator[X] &&
            window.navigator[X].length;
        }
        a.l.e(window.top) ||
          (N =
            window[w] && "object" === typeof window[w][C]
              ? 1
              : 0);
        J &&
          ((J = J.contentWindow),
          (L =
            (M = "object" === typeof J[w] ? 1 : 0) &&
            "object" === typeof J[w][C]
              ? 1
              : 0));
        E = [
          N,
          M,
          L,
          ca,
          R,
          ea ? 1 : 0,
          I,
          Q ? 1 : 0,
          P,
          E,
          G,
          U,
          O ? 1 : 0,
          W,
        ];
        P = [];
        for (Q = 0; 10 > Q; Q++) P.push(E[Q]);
        f = t([f, window], d);
        Q = c;
        U =
          window.location &&
          window.location.ancestorOrigins &&
          Array.from &&
          Array.from(window.location.ancestorOrigins);
        U = k(U ? U.join(",") : "");
        Q.ol = U;
        Q = c;
        var V;
        try {
          var Y = [
            a.f.b([
              33, 26, 43, 29, 48, 26, 43, 30, 2, 40, 39, 28,
              46, 43, 43, 30, 39, 28, 50,
            ]),
            a.f.b([47, 30, 39, 29, 40, 43]),
            a.f.b([41, 37, 26, 45, 31, 40, 43, 38]),
            a.f.b([46, 44, 30, 43, 0, 32, 30, 39, 45]),
            a.f.b([48, 30, 27, 29, 43, 34, 47, 30, 43]),
          ];
          U = {};
          for (O = 0; O < Y.length; O++)
            U[Y[O]] = window.navigator[Y[O]];
          V = a.f.l(a.f.v(U));
        } catch (x) {
          V = "";
        }
        Q.qn = V;
        c.tf = p();
        V = c;
        var Z,
          Y =
            "toolbar scrollbars locationbar menubar personalbar statusbar".split(
              " "
            );
        Q = [];
        for (U = 0; U < Y.length; U++)
          try {
            (Z = Y[U]),
              !0 === window[Z].visible
                ? Q.push(1)
                : !1 === window[Z].visible
                ? Q.push(0)
                : void 0 === window[Z].visible
                ? Q.push(2)
                : Q.push(3);
          } catch (x) {
            Q.push(4);
          }
        Z = Q.join("");
        V.vi = Z;
        c.rc = P.join(",");
        c.rb = "1-" + a.f.m(E.join(","));
        c.rs = "1-" + a.f.m(f);
        Z = c;
        V =
          "isSecureContext" in window
            ? window.isSecureContext
              ? 1
              : 0
            : 2;
        Z.sc = V;
        c.os = "1-" + n();
        c.qp = a.f.w().join("");
        Z = c;
        if ((V = d)) {
          Y = a.f
            .t(
              '&]xoul#)k]mdrcfaxgum:hm_mfR_jru*UchYqnL^:vwjdmqh1M$bges5{T|r0hmkmhs\'.c T|dq,YKHY\\GTN`QUB[^GO>\\ICYAYK[2[:F]G@H=WH1{qerbvo0evfzG#hlhz2\npoaMlhlmith5`p`n+&f{`ua{)yp|d;cflklk&Mcnchfxbw-p]ub25{kvbqR `plGYfbq#N:S7;4yonek^z]ziMZqYr%VLG9FBQ917{a|\\lr0a\n`nUybo\'|Rz\\-?xgpcoh3i{a X7mcim)Ghzhs\\ \n#Xlc2dhhsim"Hf"e7SGT\\\\TCO@6:!e\t%mcr_wb86zZpa=_nmipp)Giody\'|Rz\\-?ylr]{bublft8{qqnMskb\t)LNP3Y@OEcHK;_:18lX~enKq]lB|Yyo8go^r#Ccjgu_acqehVTinmv*KEGBR@6;zfrkpmx`U_ydy[N3cGMdu_zfvhzm8go^r#Cjy]wi{imHl_~gnFCP\\Pkf `|\'zV{^uf0;G;`6X[jfxbw-navdz\\7>]L<\\Uq/jifjnt!HIZ  XphupmoVfzkok!j;cflklk&OHX9vg}gnqUp ikF\ngo\'Y6f=S?Q=VY^JQ;35bFLnwj|bxG\ttv^`fy\\/QYHSI^IXUYG[85BUONlthQ\\m^`fy\\/LEEHM\\6H;fDd?N+EO[Dxc\nksguC!cf,JGQNk;F9LQaHUD.?[POa{j|m`fy\\/IIQILMBJIfDd?N+EO[Hkmqmkfsd_lmc2>RH`TK7J7nE^KG(KPY?pt h\nUcXmsi&o_z\\y^35bFV`vdU^~"y\\w^:4`JOsq]uco6whhk=_nmipp)IG^Kk`sC!cf,WL\\FQTWKS7;6\\RRnqjohtqoOo]!\\/AWKb?YH19ZEbg!kgOpbkh9gogueu#Dfejd]\nZw:hfp!MNEQUBTHjKYLWEVFO]TJH=Q9NDN\tR_rdppZbih9ikfs~Pcjnfgdlp#sWtW;6uhr^w^xXPqog!\nNK`REJJ?`!HbpbqbjqfA~bth9>KIbF_@OEcHK;_:19s[\tUx`t`Mskb\t)N;Z4Y@DI0;oc|WtWyVXgnl0hmkmhs\'Mh"_ Hvcyaqa_iwW{Wvl7mcim)Ifp_og!Znc/jifjnt!HhlVta}hch6kgap\'Mn e|dFtifw(W:^FY7bF5CQIZbihWd}m<]rehrl$GIYHjj{Sq_nSqgmkR]~o8go^r#E_xYWlmcx\\ldXgnl0jijk O\\~ZbcnetdijLnqbQ_zf=ajlg(Lbhir)}^!?|eVqijFipZJnjW\tgrnpo4AuW\nhog!\nQFDSQ=QNkI^FLQ]BMD.@w`{api~?\nRtdflx&SL[8JIZ;]:hHPO\\O[7_DYGm?\\;F*HgfoyZsjMdpZvdpp6QKL_ZXHR69;payehh\nI~fl RBVLGJ\\\\TCO@6>zVz\\or2;G;`6dIL5c<XMaJWAK Pgofs_ @orijq[xh3dh_t\nNmvazMoW\tp|^W_]`dryjh?!Zsj55PC]TTEVDeDS<]>:6{kfpTafn gj?uBxV}ttaMskb\t)XH\\69<spsjHpqcy$HFnGJQIA\\)KjlgOk\n`\t%mcr_wb8:{[ufbb~qea6@RC^@N%TZy\\Fpvgu(]JTJHQTKLDG@MAe9]M6?w]rJzqx]p@uaj;uf l7mcim)Lc}hNZ!RRmflx&F;\\IZHP@VRYGCOM)Lc}hNZ!RRmflx&q[yZ1=h_tcjcGrmkz"N<ZMcCVEH]T@DMQ!LWtW\tTmGcl|fi5no\tZ!`\t%mcr_wb8<jesarT}hqjXly]\tdygSc\tfs,rYp_8=YCS3{_Lnnhm`z]zi8go^r#IRQDP[~fz[l7{Xvdpp6ikbror%VEZCQgglxlq:q[tW}g7kgjoqn SOWEa]|kFjiehh\n#q[uY"[5GVITQxUnfOes^reu,PGD>Q91?K4Rh{rqn6kgap\'S=P<rpS_r_h(xd|[y4~hwc0hmkmhs\'S=PGritgsfFbmcl[Lhta}-OK]PKAZQO%WIPV3.9W3-D)5-8%E):/90A/:"N\\xK"_;ebki$L^xZI[hV{\\wd0hmkmhs\'SfoXr%o_q]/Cziq$Ug|UnqHkzjgh9n\ti~`\tkfbPgf[xZxEm {Xwfvd4Fthw)\\^zR `wcXap_Rdwchf=_nmipp)Ob\tg8oF3\t\\biMlhlmith5e#cyntpmaRcn\\v^ @s%mcr_wb8@joLhta}-FKU\\\\?jNOIOCNKPP0ChsQkjd{ SBV^XGgTOBjJOFm2aKO*O]|\\{VwZLhta}-FKU\\\\?j>SKQFZ=MC\\$N_$WtWyVTinmv*LLSSaFi>:<rpcmejg?!Zsj56^@hUM[N.7 V`"[}R\t[Ftifw(PDRU]=n9:4.Gmvhclmn>#V{k/BSEbPWTSKTBP7B+Ma _uU}_Oos_ %EMQWYEkI1CP6X4lbgo{+tUx`6FW5VFvrtmwGme3dh_t\nVHFEXlxh9gogueu#NQQYqc|jqW{[~aNugj|+SGjHKGWAbCBRMGQY_IFJLQ_ENRGHM@Z XNW^rZnBfwIjui~#RIf?T7R@aGMVKF]ZNH[2VE-Kelk(ubzb5`p`n+Oalfg8pqs\\s:{]p,rYp_8BjZpSZX!Lgo{^mYPqog!\nP8QRYJLHSTU>HET\nVdfeiHkm~)v^|X _-Ki\\l[YZyWkS"T7kgjoqn X`nbo>rkbbeld(zVr[3?tWr`Ua|qobrn\\Z|Xr%o_q]/GqYnWZa#eld0jijk X`nboD if_q=y_zi3bl`vgq+Pklb47O<^:mDR:UGSFbH[9J"UasX7CQ?]JKB_ZZHa:a@PLc>RFXD\\?U9;Axcg*XOU7PN]B\\8l@OQXJX=`>TDf@^7N+Pk|fl]n\\~b}_;ebki$R\\vZhj5YtgYqqpwq\tdpJp\'|Rz\\-Mj^v]~ZjdJS}ijr0hmkmhs\'Y_tdpifcr;dh!Vx$uS|X5Nxaz`ub~o|Zw_r[Fpvgu(xZs]{Z;CjxoavqOb~o|n{V{kt,rYp_8EfotW}g[dsqmpzI{_kms6"\\or2:X<NANDNQ_;JRG(X^\tapi~Ksb!\\trYhg[\nZJll`"!WNPA4Mkfqj|fo_p\\Fjiehh\nIncp`v!w`oa4Mkfqj|fo_p\\ScwgxloZY_t[}Z7kgjoqn [jsg!V\t<wcrl1QQ7P?[QUB[BG[IQe:ZMM>m>\\LTCc<RQZ!Uez["\\xm0jijk [mols_ Xugsf1fqcljo\t_enrgj|^z]ziMh|_rZugsfDpm^qWi^t8\tdpp6KUBP\'Zksdreu_xarhOdsdlU"\\xmEhwpk9 `xm<?\\EF*TjhmqcyW{[~aLnpjm`z]ziVb e;ebki$Sl{ejh{k]bmdNe{q4blho%^focjaO]|=~Zi[ufxTu-ko]pkfa`|btjvehNpYw`{gr7|fwXwsk_iqufLqkbzRocf,p]qa\n]1F|ewF~au_zfvhtjx\'|Rz\\-NykkM WxYy[\tgrnpKxqocyn8es_tki*VLF>`BKJv`t6q`pcmB|Yyo8<]?aIPJcEDMW!WJJ6pgjBj]vkk`Pqog!\n[FOC0JW=Piqi[dpa|oqn|+tUx`6Kb4VZfRvYqm|dwj5`p`n+TPKMkY}>yg|Vpkjmr&o_z\\y^3Dc6[sr?wkzft]\tmw_tJpsv[h(zVr[3Dc6[srOmkjY})v^|X _-PiYg[najI{dtTv-p]ub2Fp\\nZp]rJupiYp>q[fksfaXjcgn6kgap\'\\^t]rZu,h]o_\nZUhvbte}x0jijk ]`pesT %flyehlmij$sW}Z}g.NmcrYno8b 6$kflwaefq#sWtW;Enenakq4gpo8es_tki*V]pi\nZUbhkqTlj0hmkmhs\'\\^~`\tkjlkGemqg{[y }Tvd.Nmpvcyno\'zV{^uf0KYAMcnchftW]qcj{cufxGsl!\ny\\oex`/Mb<K;I^tamDnaubth9N`@m7R9MCR<bG[9JUK;U9NQGJKB2GaBP>Tf{ZHCp]p_zi3bl`vgq+UROCub\tAk\\sF\t`Fjiehh\n#q[uY"[5RXCU^y_Pgofs_ %TTKWXHUIdJ`BTR^RGN[MG7PJXNa69JWETYwb_Zl$W3c;\\DI[UL\\9_JiKS=9JWETYwb_Zl7yUPU|-R=\\EY9RZWHd6aF`PID/Mb<UW{ZbXp@t_Zbr"[<^Aa6TVVLOFRQZ!XLNBpgqRgcKiugpKkmv\n]8UFW=JYMGHUH4b\n\\UILiqnGpbMn\ngrkpOyYglminYHT!!w`oa4P\\;[\\~aaVtCjlilrLqa3FHFWFNFaHQKKHZZ\\>Z~`MHNelkMq\\Q_uW"b_dtpq`g`L]}\'|Rz\\-QZ?S[\n]X[n>xansqRmoz]n\\vKs];GBRLKHAk8QEZ7_4]G.O^DVU\tc]^u=vju,p]qa\n]1Ild$\\ldYkzhkf9gogueu#Tfejh^MgwW\n4#Yodt*qp\\]pr8es_tki*W`dlqYFhyS\'5~ehaz+rYyb~a:DuXsch9ulmnGkmXte7mcim)Y\\lmo]e`\tbfp2dhhsim"Zf~ejfgIikg[pm8es_tki*Wlucz\\3chfr[7mcim)Yh}dx`<d}cjr2fdgq!Xjy[}Z7steu+rYyb~a:D pmcW`h_\nAni{ {Xwfvd4Qkl\tO|Zq\\PlfJmkw(xZs]{Z;GrlgNikmY~)xZ{V9Kpsg`1fqcljo\tcejbmA~bth9>KIbF_@OEcHK;_:1Jyg!gncVuxby"tn]\\\nZ}kVPP&q[yZ1Jyg!gncWNT+rYyb~a:F?=/MX@HLk:WHVD;HRDxavq4APOKX[2`B-SVAHl~dw$sW}Z}g.QZFKf}j|\' enZlRvYf_X^r_{\tdFKHukkexcyj\tlW_aiblw^hl^Zxksf=ajlg(]pkfL^~b#R `pl2fdgq![J[DtZrnp*tbt[\tc6OwUrfUpe[nFuhy$sW}Z}g.SM?M@j^yf~crjtchWw_#izhlQ!&}b0?WJVFPN]>RP_>C?cK6NOTIN[%n8aS.Sm_Gg~`w[zj;:pktao_Qgwey !gjbmPz^iYWdwb!~d\\c?wkhgna~$Yg}grlgAzouf9gogueu#Xcf9vmqbgb\n $Tuhf]|b4blho%eVo>M0Ggpj ijHl`sX{hpcKlthps~\'OE\\DJAc;ROZIJHf4d9ODT[QKJ9c\'a^p8Y)DmqhxnqGjdkW \\wfEkvqkl\t)MH^JlIF?HWEOR;JHf4XAMHPC4TkVRG<<}^}lucV]q^qgndn5~a}dzp6BR9X@XMm2_IBWc:X@R:WUI;]7RMI(_bh;W-Mh{a!kfPifg_~^s]Ja}gnwv*NOGAP=_?T6_#Xcf?O,Odrf|ftEnmfazft[Njxmsi %N?\\WVBM9JHfEcB[@IAg?RCNFiLWKR#Xcf?O,Odrf|ftEnmfazft[Njxmsi %N?\\WWLMCX<VD\\RODG@J>I?jDXMSCY<BTI<b=[BUEU7]G\\+YajDR&]`x]scvehAsfw_#i3;S7\\8WSa=ZOGMj=_?T6_#Xcf?O,^ZsZldxapBqj|b~h9A\\:[6OLGDIJb;`IF9O?TA]^INMBTS^Dd>:HrYHJ6JhhpZw_uYRbwsgt|+S5cZ]>`GRI`UEAWY`>R;VGc\n`ddCT/XYy_okw_t:plx]{n:INCLAdGhDZLQOK87Ro[U=?Iflh]ucz\\Heuftk}-WJQCUFXZLE]4XVBAXAY?kJS?MAa@hHP@Q@KG7Ro[U=?Iflh]ucz\\Heuftk}-WJQCUFXZLNT7RI`@MFGCZ<1MlTV?;Qgjlbx]ybMh|erou,YFVCSCJ:f;]G5Vg^OI8Fpin^\nZ{^Dmrlhr\n#q[uY"[5Vg^OIXYy_okw_t:plx]{n:7TESQe8L1.Sm_M@]`x]scvehAsfw_#i3BP@T4[+YajDRFpin^\nZ{^Dmrlhr\n#TDLQ\\<WTU[KLTG_<XMm4\\CPP0Oh\\SAW[uVtermi?wkzY"o8I]=f>PLcGI@_:YU\\@XG\\+YajDRFpin^\nZ{^Dmrlhr\n#W=I3C\n`ddCTOkbo`|b|XPforipw(_6RFS7n6XUGNIDK b`lDweNejkelliz:{[uf=>NXWL4TkVVd~:|ZzXugsfHpqcy$uS|X5Vg^Sfz7^NU^&W\tXncwJxfq#sWtW;JnaMe|@YGX\\~kwi;]smq>oimi8(Hd T!-navdz\\7Ro[YZ Ks_rklnuds;}W}g7@V[\\>X;PO6PsSX`uRvYqmuineu7$Xws0IWRY9OMK@:HrYLgxLu[zhnjpa}8\tdpp6ikbror%eVoJpao]w(OATIP@V\n`ddOw`qY\t)xZ{V9NsgxYefqHyhlS|7necqtq]ftook<_ndf*\\EOB\niuHlc#X|s0HW>J=YB6Qa=aGsmg]vm{g3dh_t\njorhq`ghtjx<oTu\\/GHDH&meubpUpgrnp?i`nY9PZ=OERIF?HQ/[|eq_jS"\\xmE]kek"xj#:rU;ebki$dj|anYhfxbwBc_pb4g!\\z<oTu\\/jifjnt!ffw^xVjskkv@gWs`8n~Unkf,rYp_8Wwe~eteRmvazcgWp)Nb RocfBvYjO|atWk {Xwfvd4`gWs`}\'rVy\\uc2dhhsim"jSr[nr0dip4blho%qRp_fq2edno]3bl`vgq+e]kekg9jz^|\ny\\oex`/]tgtcl rfr-navdz\\7^rk}^r%dqm&q[yZ1Yod~`n-il}?kbncwZ\n\\veh,gjdmt<ukWd~Vnru*tbt[\tc6\\vc|df,pgd^`^r[z {Xwfvd4`nfzho\'|e})429&j_\nDw_n[}TuFwelbVUr`8es_tki*g`uiyZ3mlT!gxqg*qkyhlgv\'zV{^uf0[kl{bj$~Wqf}nta6lt8zrxe}RqGsmkjhm\t#fZkD#_nr0hmkmhs\'ma\n`z\\/uiZvn{gj$v`Sb\nmnkiaVfzb|^ d;[jqtYw]t#q[uY"[5bjnwjk"!`ll!`\t\\/mr<rqzatWkB bpqgo{+j]~kkmqY;ebki$fb~dr[5itU|sqnm+ubOj gz`n[Qps_u_\th3]lfahudu*tbt[\tc6\\vc|df,{]em\ndw[5a}7xvphw^jD}jqksd\n%i_wDlm\nZs[y {Xwfvd4`nfzho\'$Vojumv]1iz9tmu^~TmOtkookg~)|^{`"\\Mgwlhhqg3bl`vgq+ehqmhclmn=oen%epshH`rZhj3U~a|nna6akV\nb8es_tki*ggqm{aj$ld b{-navdz\\7^yg `y\\/evgxj:cfcl\trbwrqhm+mfzpz<}]yXqqi\\1fqcljo\trbwrqhm+rcr)v^|X _-asfvixZ3chdzGrlghqkk"w`x`!Y9Zplwgo_:hhhlW}fqnv*tbt[\tc6\\}_\nfmc2llgq#q[uY"[5bqj{lrY9osfsD Xnn2dhhsim"jd\'c}n0o}_z`p)n^qc%gu,rYp_8Xwowf~!|tdptb4Yy^|r~e;cflklk&og~f{a=f~avhm+mYy`|Z!VX\\z,rYp_8Ym-nSF_qhjh6tx]\t`vg<_ndf*havjmih^Lhta}-p]ub2Y"ook|Ry%BbhKh[~XmFya$\\mdt*tbt[\tc6^%erio_p&Lm_ZfhjZ_exuk`moOb~okezVq%upgLkl{iybl "elAkjl+sY\tcy]wkr#gcx[k(zVr[3X#_uRenmbt s0v^s_Bk4h9&zluij$uS|X5gko|lxm9ayk$R\t[/jifjnt!m_zf~e!-taxigWpN~Z!V;cflklk&uci[\tWs7K+kjlb~Yo?L\'rR Xc_w]v(xZs]{Z;\\|Rg_}ok7zi~^%e9bq/6n9sme9_5i \\}dnj6ikbror%z[n.kdhnf]:lw_{W{a7kgjoqn x\\!<}_{\\drmgqm\\ZwIld$X{+oavrhU})\nb Zocf*qg}L`8X[zexbwCgokood\tdyg<_ndf*rYycsVyey pcyMcim)tU dqZ!`\t%dmscl_QcfXsWs\nw`xeo^zc})mksUreugedv(~ZvkpdtH|dtImaoU\tdyg<]rehrl$q[!^lW{a !rrRnwquWzgRZ|Uy\\sPi_lm\nZw[k }Tvd.jiso[loyk<^\nDbvXgx]tEt_uf!\nw`xeo^zc})z^\n^vjtgsfv(}jjh\n }Tvd.jiso[loyk<a|`orijHhmWq[k\t}T\thi]|lx"}`{nsd DfbmYN_$H~i{W|4lbgo{+tUx`6gogv^brsj1mqg{_jWfb{jgn6`ub\tmyezV\t%plijui~!sW}[vT}nt*{bxjt^oP}cx\\s,ggqn~dqbld=bwrv]|bi\\liq^:_nmjeelrl:hjh}[rX`ntgmo4g\t\\|m[V\njbeik1fqcljo\t~cnm0hmkmhs\'yis_QXu_fYv_:cfcl\t~ekhvqu?xc!nok<gritgsf/i~^jd{S"\\xm.lmolc}hkgqV;ZmcejP_mhzhle=ajlg(xbxZzmwZ|Tr%o_zaj[\n^td5f~=\\NP*tbt[\tc6iscsfskeff_:cflpYpgrnp*|vvY7k|b|e;ebki$sl{buj5`p`n+u]up{br<|\'qR{Jim{&q[yZ1ijd~_uA{*tbt[\tc6lqc|cmRs&o_z\\y^3etg]hoawrz"w`x`!Y9jfrXap_{jy$uS|X5rram`nG#i~asdvj/aeff_x#q[uY"[5rram`nG#i~asdvj/eilYiuXji5^tapsj({mkYnc]r|eu\\tgw&s_zYndn\t$\\|tch^fkk{j|m<Yr`hfx$yc\tjfb][tjyntp6mg[pGo_!~"`tsedYcqlueyf=jrcvd4tkVLkz\'sb!Xmq2fdgq!|[i]xgL`p_miGbthkmw`{=s_q]1hmbj"~Wq^rsTayrkg\tAsesD%jucq&o_z\\y^3itUthvNmpu` `VhqRy=jjiK|m\nZrKY>=_nmipp)}Ymfsmaar\\dfKjdgyVw$sW}Z}g.sm_q]\tNz^sTuIfas_qc\n^tdLd b{-p]ub2kp]ub!D}\\falJh]{\\s_{[~aNugj|+I5[O_KW?TVQFEKH&$VsZlj=c~anekCkU\tp|^<Ur]bsplEl{lx[yB bvovE{>r`zro]<_ndf*}Yq^qm3f|T{\\lEg]|rxY9bomW^n^fQmrh(xZs]{Z;ljmfa\n+vimgs\\TVnkvpi&lmPZkW|^"5{nyomo4`piqmv~%Xobip1j Wq_j8tT}tta6fyG\t\\~b evZtCrYefqY3dh_t'
            )
            .split(a.f.b([71]));
          f = Y.length;
          P = [];
          for (E = 0; E < f; E++)
            P.push(m(Y[E], V.contentWindow));
          V = a.f.b(P);
        } else V = "";
        Z.is = V;
        c.iv = 8;
        c.qt = y;
        c.gz = a.d.w() ? 1 : 0;
        c.hh = a.d.v() ? 1 : 0;
        c.hn = a.d.u() ? 1 : 0;
        var y = c,
          ia;
        try {
          ia =
            !a.l.e(window.top) && window.top.name
              ? a.f.l(
                  window.top.name.substring(
                    0,
                    50 > window.top.name.length
                      ? window.top.name.length
                      : 50
                  )
                )
              : "";
        } catch (x) {
          ia = "";
        }
        y.tw = ia;
        void 0 !== q && (c.qc = q);
        void 0 !== r && (c.qd = r);
        c.qf = l;
        c.qe = B;
        c.qh = v;
        c.qg = A;
        c.qm = g;
        c.qa = a.d.ad();
        c.qb = a.d.ae();
        c.qi = a.d.ab();
        c.qj = a.d.ac();
        var l = c,
          ja,
          B = [];
        try {
          ja = a.f.b([
            47, 40, 34, 28, 30, 44, 84, 34, 39, 34, 45, 30,
            29, 84,
          ]);
          var wa = a.f.b([17, 46, 39, 19, 26, 44, 36]),
            la = a.f.b([
              2, 26, 39, 28, 30, 37, 19, 26, 44, 36,
            ]),
            xa = "undefined" !== typeof window[wa],
            ka = "undefined" !== typeof window[la];
          B.push("undefined" !== typeof window[ja] ? 1 : 0);
          B.push(xa ? 1 : 0);
          B.push(ka ? 1 : 0);
        } catch (x) {}
        ja = B.join("");
        l.to = ja;
        c.po = h();
        c.vy = u();
        b && (c.mst = b);
        if (d)
          try {
            document.body.removeChild(d);
          } catch (x) {}
        return a.b.i(c);
      };
      a.au.b = u;
    })();
    (function (a) {
      a.f.af = !1;
      a.f.ag = [];
      a.f.ah = {};
      a.f.ah.a = "appendSpecifics";
      a.f.ah.b = "appendManual";
      a.f.ah.c = "onlyHooman";
      a.f.ah.d = "onlyBot";
      a.f.ah.e = "onlyNonHiddenAd";
      var t = {};
      (function () {
        a.d.dy() &&
          a.o.d(function () {
            try {
              a.d
                .e()
                .navigator.getBattery()
                .then(function (a) {
                  t.charging = a.charging;
                  t.level = a.level;
                })
                ["catch"](function (a) {});
            } catch (c) {}
          }, 1e3);
      })();
      a.f.z = function (c) {
        var e;
        try {
          C._c && !a.b.v(C._c, 1)
            ? (e = C._c)
            : ((e = a.au.a()), (C._c = e));
        } catch (f) {
          e = a.au.a();
        }
        if (void 0 === c || !1 === c)
          (e.ql = a.f.ai), (e.qo = a.f.aj);
        e.qr = a.f.ak();
        t &&
          "undefined" !== typeof t.charging &&
          a.b.fh(t.level) &&
          ((e.vf = t.charging ? 1 : 0),
          (e.vg = 100 * t.level));
        return e;
      };
      var p = a.f.b([48, 30, 27, 29, 43, 34, 47, 30, 43]),
        u = a.f.b([30, 47, 26, 37, 46, 26, 45, 30]),
        k = a.f.b([43, 30, 44, 41, 40, 39, 44, 30]),
        n = [p, u].join("-"),
        m = [n, k].join("-");
      try {
        a.f.ai = a.f.l(
          a.f.v(a.d.e().navigator.plugins, "name")
        );
      } catch (c) {}
      a.f.ak = function () {
        return 0;
      };
      a.f.aj = 0;
      a.f.al = function () {};
      var h = "nu ib dc ob oh lt ab n nm sp pt".split(" ");
      a.f.am = function (c, e, f) {
        if (
          (a.f.ah.a in e || a.f.ah.b in e) &&
          void 0 === a.f.an
        )
          return !1;
        var d = a.b.i(a.f.an);
        void 0 === d.n && a.ao.c(f) && (d.n = 1);
        a.f.ah.a in e
          ? a.b.forEach(h, function (a, b) {
              c =
                a in d
                  ? c + ("&" + a + "=1")
                  : c + ("&" + a + "=0");
            })
          : a.f.ah.b in e &&
            a.b.forEach(h, function (e, f) {
              a.b.ce(a.f.ah.b, e) &&
                (c =
                  e in d
                    ? c + ("&" + e + "=1")
                    : c + ("&" + e + "=0"));
            });
        return a.f.ah.c in e && a.f.ah.e in e
          ? a.f.ao(f)
            ? a.f.ap(c)
            : !1
          : a.f.ah.c in e
          ? 0 === a.f.ac
            ? a.f.ap(c)
            : !1
          : a.f.ah.d in e
          ? 1 === a.f.ac
            ? a.f.ap(c)
            : !1
          : a.f.ap(c);
      };
      a.f.ap = function (c) {
        a.b.x() || (new (a.d.e().Image)().src = c);
        return !0;
      };
      a.f.aq = function (c, e) {
        c(a.f.ac);
      };
      a.f.ar = function (a, b, f) {
        g.add(a, b, f);
      };
      a.f.as = function (c, e) {
        if (void 0 === a.f.ac)
          return a.f.ag.push({ callback: c, opts: e });
        a.f.aq(c, e);
      };
      a.f.at = function () {
        for (var c = 0; c < a.f.ag.length; c++)
          if (a.f.ag.hasOwnProperty(c)) {
            var e = a.f.ag[c];
            a.f.aq(e.callback, e.opts);
          }
      };
      a.f.au = function (c, e) {
        var f = a.f.z();
        a.av && a.av.a && a.av.a.imaSDK
          ? c.moatClientLevel3 && a.ad.b(34, c, f, !1, !0)
          : a.ad.b(34, c, f, !1, !0);
      };
      a.f.y = function (c) {
        a.b.dr(c);
        if (!0 !== a.f.av) {
          a.f.av = !0;
          a.f.au(c);
          var e = function () {
              var d = {};
              d.qr = a.f.ak();
              d.qo = a.f.aj;
              a.ad.b(36, c, d);
            },
            f = a.d.e().document;
          a.o.a(
            f,
            n,
            function (c) {
              a.o.i(f, n, null, "mswe");
              a.f.ak = function () {
                return 1;
              };
              e();
            },
            "mswe"
          );
          a.o.a(
            f,
            m,
            function (c) {
              a.o.i(f, m, null, "mswer");
              a.f.ak = function () {
                return 1;
              };
              e();
            },
            "mswer"
          );
        }
      };
      a.f.a = function () {
        var c = a.d.e().document;
        a.o.i(c, n, null, "mswe");
        a.o.i(c, m, null, "mswer");
      };
      a.f.ao = function (c) {
        return 0 == a.f.ac && !1 === a.ao.c(c);
      };
      a.f.aw = function () {
        return !1;
      };
      a.f.aa = function () {
        var a;
        a =
          x && x.sinh
            ? 1e10 *
              (x.sinh(x.sinh(x.sinh(x.sinh(1)))) -
                3.81278003)
            : -2;
        a = a.toString();
        return 0 === a.indexOf("7.600")
          ? a.substring(5)
          : -1;
      };
      var g = (function () {
        function c(a, b, c) {
          this.pixel = a;
          this.opts = b;
          this.adNum = c;
        }
        function e() {
          a.b.forEach(f, function (c, e) {
            a.f.am(c.pixel, c.opts, c.adNum) && delete f[e];
          });
        }
        var f = {};
        a.n.a.azsx("hiddenAds:updated", e);
        return {
          add: function (d, g, h) {
            d = new c(d, g, h);
            g = a.b.dm();
            f[g] = d;
            e();
          },
          checkPixels: e,
        };
      })();
      a.n.a.azsx("allLocalAdsKilled", a.f.a, { once: !0 });
    })(a);
    (function () {
      function b(a) {
        for (var b, h = [], g = 0; 100 >= g; g++)
          h.push(0 === g ? 0 : g / 100);
        try {
          b = new IntersectionObserver(a, {
            rootMargin: "0px",
            threshold: h,
          });
        } catch (c) {
          return !1;
        }
        return b;
      }
      function t(a) {
        return function (b, h) {
          var g = b.length;
          1 > g ||
            ((g = b[g - 1]),
            (a.percentVisible = g.intersectionRatio),
            (a.visibleRect = g.intersectionRect),
            (a.elementRect = g.boundingClientRect));
        };
      }
      function p(a) {
        var b = a && a.intersectionObserver,
          b = b && b.observer;
        try {
          b &&
            (b.disconnect(),
            (a.intersectionObserver = null));
        } catch (h) {}
      }
      function u(a) {
        a && a.intersectionObserver && (p(a), k(a));
      }
      function k(k) {
        var m, h, g;
        m = {
          started: !1,
          observer: null,
          percentVisible: null,
          visibleRect: null,
          elementRect: null,
          element: (function (a) {
            return function () {
              return a && a.aa;
            };
          })(k),
        };
        k.intersectionObserver = m;
        h = m.element();
        if (h && (g = b(t(m)))) {
          m.observer = g;
          try {
            g.observe(h);
          } catch (c) {
            return !1;
          }
        } else return !1;
        m.started = !0;
        a.n.a.azsx("adKilled", a.b.dl([k], p), {
          condition: function (a) {
            return (
              "object" === typeof k &&
              "object" === typeof a &&
              k.zr == a.zr
            );
          },
          once: !0,
        });
        a.n.a.azsx("adElementUpdate", a.b.dl([k], u), {
          condition: function () {
            return (
              k &&
              k.intersectionObserver &&
              k.intersectionObserver.started
            );
          },
          once: !0,
        });
        return !0;
      }
      a.ak = a.ak || {};
      a.ak.a = function (b) {
        if (a.d.dc()) {
          if (
            b.intersectionObserver &&
            b.intersectionObserver.started
          ) {
            var m = b.zr,
              h = b.intersectionObserver.elementRect,
              g = b.intersectionObserver.visibleRect;
            "sframe" === a.v.a(m) &&
              a.n.a.zaxs("rectsAvailable", m, h, g);
            return b.intersectionObserver.percentVisible;
          }
          k(b) || a.d.dc(!1);
        }
      };
    })();
    (function () {
      a.ab = a.ab || {};
      a.ab.a = function (a, t, p, u) {
        function k() {
          m("unload", k);
          m("beforeunload", k);
          x = !1;
          clearInterval(v);
        }
        function n(a, b, c) {
          a &&
            b &&
            c &&
            ("function" === typeof a.addEventListener
              ? a.addEventListener(b, c)
              : "function" === typeof a.attachEvent &&
                a.attachEvent("on" + b, c));
        }
        function m(a, b, c) {
          a &&
            b &&
            c &&
            ("function" === typeof a.removeEventListener
              ? a.removeEventListener(b, c)
              : "function" === typeof a.detachEvent &&
                a.detachEvent("on" + b, c));
        }
        function h(a) {
          if (a !== l) {
            var b = [
              { name: "fr", enabled: !0, inview: a },
            ];
            d && d(b);
          }
          l = a;
        }
        function g() {
          try {
            var a, b;
            10 > u
              ? ((a = document.elementFromPoint(0, 0)),
                (b = !!a))
              : (b =
                  (a = document.msElementsFromPoint(
                    0,
                    0
                  )) && 0 < a.length);
            h(b);
          } catch (c) {}
          x && window.requestAnimationFrame(g);
        }
        function c() {
          clearInterval(v);
          v = window.setInterval(f, 100);
          window.requestAnimationFrame(e);
        }
        function e() {
          B ? h(!0) : (B = !0);
          c();
        }
        function f() {
          h(!1);
        }
        var d =
            a &&
            window &&
            window.parent &&
            window.parent[a],
          x =
            "function" ===
            typeof window.requestAnimationFrame,
          l = !1,
          B = !1,
          v;
        a =
          navigator &&
          navigator.appVersion &&
          -1 <
            navigator.appVersion.search(/Edge\/\d*.\d*/) &&
          !document.documentMode &&
          !!window.StyleMedia;
        u = "string" === typeof u ? parseInt(u, 10) : NaN;
        (function () {
          document.body.style.overflow = "hidden";
          document.body.style.margin = "0px";
          document.body.style.padding = "0px";
          document.body.style.height = "1000px";
          var a = document.createElement("div");
          a.style.width = "300px";
          a.style.height = "250px";
          document.body.appendChild(a);
          n("unload", k);
          n("beforeunload", k);
        })();
        a
          ? c()
          : x
          ? window.requestAnimationFrame(g)
          : (v = window.setInterval(g, 100));
      };
    })();
    (function () {
      function b(a, b, c) {
        var d = v[a].stateMask;
        if ((b = A[b] * (c ? 16 : 1)))
          v[a].stateMask = d | (b << 0);
      }
      function t(b) {
        if (!b) return !1;
        var c, d;
        a.d.dg() && (c = !0);
        a.r &&
          a.r.a() &&
          b.periscopeManager &&
          b.periscopeManager.fullyMeasurable &&
          (d = !0);
        return a.d.db() || a.d.dk() || c || d;
      }
      function p(b) {
        return "number" !== typeof b || a.b.l()
          ? !1
          : 236425 <= b;
      }
      function u(b, c, d, e) {
        d = a.b.fe(b.x, c.x, d);
        b = a.b.fe(b.y, c.y, e);
        return d && b;
      }
      function k(b, c, d) {
        var e;
        a.b.forEach([null, void 0, !1], function (a) {
          if ((e = c === a || d === a)) return !1;
        });
        if (
          !0 === e ||
          !0 !==
            (a.b.fh(c.top) &&
              a.b.fh(c.bottom) &&
              a.b.fh(d.bottom) &&
              a.b.fh(d.top)) ||
          c.top === c.bottom ||
          c.left === c.right ||
          d.top === d.bottom ||
          d.left === d.right
        )
          return !1;
        var f = c.right - c.left,
          g = c.bottom - c.top,
          l = f * (1 - 0.98),
          k = g * (1 - 0.98),
          q = { x: c.left, y: c.top },
          m = { x: c.right, y: c.top },
          n = { x: c.left, y: c.bottom },
          r = { x: c.right, y: c.bottom },
          p = c.left + l,
          v = c.top + k,
          t = c.right - l,
          B = c.top + k,
          w = c.left + l,
          y = c.bottom - k,
          l = c.right - l,
          k = c.bottom - k,
          z = { x: d.left, y: d.top },
          A = { x: d.right, y: d.top },
          E = { x: d.left, y: d.bottom },
          C = { x: d.right, y: d.bottom },
          f = x.ceil(0.01 * f),
          g = x.ceil(0.01 * g),
          q = u(q, z, f, g),
          m = u(m, A, f, g),
          n = u(n, E, f, g),
          r = u(r, C, f, g);
        h(
          b,
          {
            topLeft: q,
            topRight: m,
            bottomLeft: n,
            bottomRight: r,
          },
          {
            topLeft: p >= d.left && v >= d.top,
            topRight: t <= d.right && B >= d.top,
            bottomLeft: w >= d.left && y <= d.bottom,
            bottomRight: l <= d.right && k <= d.bottom,
          }
        );
      }
      function n(b) {
        if ("undefined" !== typeof b && 0 <= b && !v[b]) {
          v[b] = {};
          v[b].allEdgesSeen = !1;
          v[b].mediatorIds = {};
          v[b].outer = {
            topLeft: !1,
            topRight: !1,
            bottomLeft: !1,
            bottomRight: !1,
          };
          v[b].inner = {
            topLeft: !1,
            topRight: !1,
            bottomLeft: !1,
            bottomRight: !1,
          };
          v[b].stateMask = 0;
          var c = "rectsAvailable",
            d = a.n.a.azsx(c, k);
          v[b].mediatorIds[c] = d;
          c = "adEdgesViewStatus";
          d = a.n.a.azsx(c, h);
          v[b].mediatorIds[c] = d;
          c = "adFullyVisible";
          d = a.n.a.azsx(c, m, {
            condition: function (b, c) {
              return (
                b &&
                c &&
                !a.w.g(b.zr) &&
                a.v &&
                a.v.a &&
                c === a.v.a(b.zr)
              );
            },
            once: !0,
          });
          v[b].mediatorIds[c] = d;
        }
      }
      function m(b, c) {
        a.w &&
          v[b] &&
          ((v[b].allEdgesSeen = !0),
          a.b.forEach(v[b].mediatorIds, function (b, c) {
            a.n.a.sxaz(c, { id: b });
          }),
          c && (v[b].failsafe = !0),
          a.n.a.zaxs("passthrough"));
      }
      function h(c, d, e) {
        function f(l, k, q) {
          q &&
            (a.b.forEach(
              [
                "topLeft",
                "topRight",
                "bottomLeft",
                "bottomRight",
              ],
              function (a) {
                !g[a] && d[a] && ((g[a] = !0), b(c, a, !0));
                !h[a] && e[a] && ((h[a] = !0), b(c, a, !1));
              }
            ),
            ((g.topLeft &&
              g.topRight &&
              h.bottomLeft &&
              h.bottomRight) ||
              (h.topLeft &&
                h.topRight &&
                g.bottomLeft &&
                g.bottomRight) ||
              (g.topLeft &&
                g.bottomLeft &&
                h.topRight &&
                h.bottomRight) ||
              (h.topLeft &&
                h.bottomLeft &&
                g.topRight &&
                g.bottomRight)) &&
              m(c));
        }
        if (!0 !== v[c].allEdgesSeen) {
          (e && "object" === typeof e) || (e = d);
          var g = v[c].outer,
            h = v[c].inner;
          a.n.a.azsx("adCheckingState", f, {
            once: !0,
            condition: function (b, c) {
              return a.v.a(b.zr) === c;
            },
          });
        }
      }
      function g(a, b) {
        return function (c) {
          var d = a[E],
            e = b.get(w);
          e > d && ((a[E] = e), a.checkMilestoneReached());
          c || b.set(w, 0);
        };
      }
      function c(b) {
        var c;
        c = a.d.aa(a.d.e());
        var d = b.currentWidth || 0,
          e = b.currentHeight || 0;
        a.d.cs
          ? ((b = a.d.ad()), (c = a.d.ae()))
          : ((b = c.width || 0), (c = c.height || 0));
        return b && c ? e > c || d > b : !1;
      }
      function e() {
        return !1;
      }
      function f(b) {
        var c = b.fixedInViewTimeRequirement;
        this.percvRequired = b.percvRequired;
        this.shouldConsiderLargeAds = a.b.fh(b.largeAdSize);
        this.largeAdSize = b.largeAdSize;
        this.largePercvRequired = b.largePercvRequired;
        this.requiresPassthrough = b.requiresPassthrough;
        this.qsKey = b.qsKey;
        b.percvRequiredPassthrough &&
          (this.percvRequiredPassthrough =
            b.percvRequiredPassthrough);
        this.getInViewTimeRequirement = function (a) {
          return c;
        };
      }
      function d(b, c) {
        return a.b.l()
          ? c === r.SETTINGS
            ? r.SETTINGS.mobile
            : y.SETTINGS.mobile
          : c === r.SETTINGS
          ? r.SETTINGS.desktop
          : y.SETTINGS.desktop;
      }
      function z(b, c, d) {
        this.label = d;
        this.config = c;
        this.groupmMilestoneReached = !1;
        this[E] = 0;
        this.ad = b;
        this.fullViewEventPixelFired = !1;
        var e = this;
        d = a.as.c(
          b,
          q,
          "groupm_counter_" + b.yg + x.random()
        );
        var f = g(e, d);
        if (
          c === y.SETTINGS.desktop ||
          c === y.SETTINGS.mobile
        )
          (c = a.n.a.azsx(
            "fullOtsReached",
            function () {
              e.groupmMilestoneReached = !0;
              e.milestoneFailsafeTriggered = !0;
            },
            {
              once: !0,
              condition: function (c, d) {
                var e = a.v.a(b.zr);
                return c.zr === b.zr && d === e;
              },
            }
          )),
            (B[b.zr] = c);
        this.checkMilestoneReached = function () {
          var b;
          b = e[E];
          var c;
          if (!0 === e.groupmMilestoneReached) return !0;
          c = e.config.getInViewTimeRequirement();
          b = e.config.requiresPassthrough(e.ad)
            ? a.w.g(e.ad.zr) && b >= c
            : b >= c;
          e.groupmMilestoneReached = b;
          !e.fullViewEventPixelFired &&
            b &&
            ((e.fullViewEventPixelFired = !0),
            (e.ad.fireFullViewEvent = !0));
          return e.groupmMilestoneReached;
        };
        d.set(w, 0, {
          useDeltaCompensation: !0,
          shouldIncrementFn: function (b, c) {
            var d, f;
            d = c.getLastInviewPercent();
            var g = e.config.percvRequired,
              h = e.config.largePercvRequired;
            f = a.b.eh(b);
            d = e.config.requiresPassthrough(e.ad)
              ? d >= e.config.percvRequiredPassthrough
              : (f =
                  e.config.shouldConsiderLargeAds &&
                  f >= e.config.largeAdSize)
              ? d >= h
              : d >= g;
            return d;
          },
          postIncrementationFn: f,
        });
      }
      function l(b) {
        if (
          b &&
          !b.ep &&
          (B.hasOwnProperty(b.zr) &&
            a.n.a.sxaz("fullOtsReached", { id: B[b.zr] }),
          "object" === typeof q)
        )
          for (var c in q)
            q.hasOwnProperty(c) &&
              -1 <
                a.b.indexOf(c, "groupm_counter_" + b.yg) &&
              delete q[c];
      }
      var B = {},
        v = {},
        A = {
          topLeft: 8,
          topRight: 4,
          bottomLeft: 2,
          bottomRight: 1,
        },
        q = {},
        r = {},
        y = {},
        w,
        E;
      a.w = a.w || {};
      a.w.a = p;
      a.w.d = function (a, b) {
        b = b || {};
        var c = F[a];
        if ("object" !== typeof c) return b;
        if ("object" === typeof c.groupmV2) {
          var d = c.groupmV2.config.qsKey;
          b[d] = c.groupmV2.checkMilestoneReached() ? 1 : 0;
        }
        "object" === typeof c.groupmV3 &&
          ((d = c.groupmV3.config.qsKey),
          (b[d] = c.groupmV3.checkMilestoneReached()
            ? 1
            : 0));
        return b;
      };
      a.w.f = function (b) {
        if (!b || !b.aa) return !1;
        if ("undefined" != typeof b.er) return b.er;
        if (b.video) {
          var c;
          if ((c = t(b)))
            (c =
              b && b.ao
                ? "cpcv" == b.ao.moatClientBT
                  ? !0
                  : !1
                : !1),
              (c = !c || b.video.reachedComplete);
          c && (b.er = !0);
        } else
          (c =
            b && b.ao
              ? "slave" == b.ao.moatClientAT
                ? !0
                : !1
              : !1),
            c ||
              (c =
                b && b.ao
                  ? "cpc" == b.ao.moatClientBT
                    ? !0
                    : !1
                  : !1),
            c ||
              (c =
                b && b.ao
                  ? "flatrate" == b.ao.moatClientBT
                    ? !0
                    : !1
                  : !1),
            c
              ? (b.er = !1)
              : ((c =
                  b && b.ao
                    ? "skin" == b.ao.moatClientAT ||
                      "hpto" == b.ao.moatClientAT ||
                      1 == b.ao.skin
                      ? !0
                      : !1
                    : !1),
                c || b.isCompositeAd || p(a.b.eh(b))
                  ? (b.er = !0)
                  : t(b) && a.v.g(b, 1, !0) && (b.er = !0));
        return b.er || !1;
      };
      a.w.e = function (b) {
        if (!b || (b.SENT_FIT && b.et) || !t(b)) return !1;
        var c,
          d,
          e = a.v.a(b.zr);
        b.SENT_FIT || (c = a.v.w(b, e, "hadFIT"));
        b.et || (d = a.v.w(b, e, "hadFullOTS"));
        if (c || d)
          a.ac.f(b),
            (b.SENT_FIT = b.SENT_FIT || !!c),
            (b.et = b.et || !!d);
        return c || d;
      };
      a.w.g = function (a) {
        return "undefined" !== typeof a && a in v
          ? v[a].allEdgesSeen
          : !1;
      };
      a.w.i = function (a, b) {};
      a.w.h = v;
      a.w.j = function () {};
      a.w.k = function (a) {
        return v[a].failsafe;
      };
      a.w.l = function (a) {};
      a.w.b = r;
      a.w.c = y;
      (function () {
        r.DISPLAY_DESKTOP_PERCV = 0.98;
        r.DISPLAY_DESKTOP_LARGE_AREA = 237650;
        r.DISPLAY_DESKTOP_LARGE_PERCV = 0.5;
        r.DISPLAY_MOBILE_PERCV = r.DISPLAY_DESKTOP_PERCV;
        r.DISPLAY_DESKTOP_MIN_CONTINOUS_TIME = 1e3;
        r.DISPLAY_MOBILE_MIN_CONTINOUS_TIME =
          r.DISPLAY_DESKTOP_MIN_CONTINOUS_TIME;
        r.VIDEO_PERCV = 0.98;
        r.VIDEO_LARGE_AREA = 294e3;
        r.VIDEO_LARGE_PERCV = 0.8;
        r.VIDEO_DURATION_CAP = 15e3;
        r.DISPLAY_VIEWABLE_KEY = "im";
        r.VIDEO_VIEWABLE_KEY = "hj";
        r.SETTINGS = {};
        r.SETTINGS.desktop = {};
        r.SETTINGS.mobile = {};
        var b = {
          percvRequired: r.DISPLAY_DESKTOP_PERCV,
          largeAdSize: r.DISPLAY_DESKTOP_LARGE_AREA,
          largePercvRequired: r.DISPLAY_DESKTOP_LARGE_PERCV,
          requiresPassthrough: e,
          fixedInViewTimeRequirement:
            r.DISPLAY_DESKTOP_MIN_CONTINOUS_TIME,
          viewTimeCap: !1,
          qsKey: r.DISPLAY_VIEWABLE_KEY,
        };
        r.SETTINGS.desktop = new f(b);
        r.SETTINGS.mobile = r.SETTINGS.desktop;
        y.DISPLAY_DESKTOP_PERCV = 0.98;
        y.DISPLAY_DESKTOP_LARGE_AREA = 237650;
        y.DISPLAY_DESKTOP_LARGE_PERCV = 0.5;
        y.DISPLAY_MOBILE_PERCV = 0.98;
        y.DISPLAY_MOBILE_PERCV_PASSTHROUGH = 1e-4;
        y.DISPLAY_DESKTOP_MIN_CONTINOUS_TIME = 1e3;
        y.DISPLAY_MOBILE_MIN_CONTINOUS_TIME = 1e3;
        y.VIDEO_PERCV = 0.98;
        y.VIDEO_LARGE_AREA = 294e3;
        y.VIDEO_LARGE_PERCV = 0.8;
        y.VIDEO_DURATION_CAP = 15e3;
        y.SETTINGS = {};
        y.SETTINGS.desktop = {};
        y.SETTINGS.mobile = {};
        y.DISPLAY_VIEWABLE_KEY = "in";
        y.VIDEO_VIEWABLE_KEY = "hj";
        b = {
          percvRequired: y.DISPLAY_DESKTOP_PERCV,
          largeAdSize: y.DISPLAY_DESKTOP_LARGE_AREA,
          largePercvRequired: y.DISPLAY_DESKTOP_LARGE_PERCV,
          requiresPassthrough: e,
          fixedInViewTimeRequirement:
            y.DISPLAY_DESKTOP_MIN_CONTINOUS_TIME,
          viewTimeCap: !1,
          qsKey: y.DISPLAY_VIEWABLE_KEY,
        };
        y.SETTINGS.desktop = new f(b);
        b = {
          percvRequired: y.DISPLAY_MOBILE_PERCV,
          percvRequiredPassthrough:
            y.DISPLAY_MOBILE_PERCV_PASSTHROUGH,
          largeAdSize: !1,
          largePercvRequired: !1,
          requiresPassthrough: c,
          fixedInViewTimeRequirement:
            y.DISPLAY_MOBILE_MIN_CONTINOUS_TIME,
          viewTimeCap: !1,
          qsKey: y.DISPLAY_VIEWABLE_KEY,
        };
        y.SETTINGS.mobile = new f(b);
        w = "currentContinuouslyInViewTime";
        E = "maxContinuouslyInViewTime";
        r.registerAd = function (a) {
          var b = d(a, r.SETTINGS);
          if (!1 !== b)
            return (
              n(a.zr),
              (a.groupmV2 =
                a.groupmV2 || new z(a, b, "GroupM V2")),
              a.groupmV2
            );
        };
        y.registerAd = function (a) {
          var b = d(a, y.SETTINGS);
          if (!1 !== b)
            return (
              n(a.zr),
              (a.groupmV3 =
                a.groupmV3 || new z(a, b, "GroupM V3")),
              a.groupmV3
            );
        };
        a.n.a.azsx("adKilled", l);
      })();
      a.w.b.a = r.registerAd;
      a.w.c.a = y.registerAd;
    })();
    (function () {
      function b(b, c) {
        return function (c, f) {
          var d,
            h = {
              large: b.config.LARGE_SIZE_REQ,
              normal: b.config.NORMAL_SIZE_REQ,
            },
            l = f.getLastInviewPercent();
          d =
            ((d =
              a.b.eh(c) >= b.config.LARGE_AD_THRESHOLD) &&
              l >= h.large) ||
            (!d && l >= h.normal);
          return (b.fullyVisOnLastCheck = d);
        };
      }
      function t(b, c) {
        return function (e) {
          var f = b[h],
            d = c.get(m);
          d > f &&
            ((b[h] = d),
            (f = d >= b.config.TIME_THRESHOLD),
            a.d.dj(b.ad, !0) &&
              !b.fullViewEventPixelFired &&
              f &&
              ((b.fullViewEventPixelFired = !0),
              c.set(m, 0, {}),
              (b.ad.fireFullViewEvent = !0)));
          e || c.set(m, 0);
        };
      }
      function p(g, c) {
        this.ad = g;
        this.label = c;
        this.counters = {};
        this.config = n.config;
        this.fullViewEventPixelFired = !1;
        this[h] = 0;
        this.fullyVisOnLastCheck = !1;
        var e = a.as.c(
            this.ad,
            this.counters,
            "publicis_counter_" + g.yg + x.random()
          ),
          f = b(this),
          d = t(this, e);
        e.set(m, 0, {
          useDeltaCompensation: !0,
          shouldIncrementFn: f,
          postIncrementationFn: d,
        });
      }
      function u(b) {
        if (
          b &&
          !b.ep &&
          b.publicis &&
          b.publicis.counters &&
          "object" === typeof b.publicis.counters
        )
          for (var c in b.publicis.counters)
            b.publicis.counters.hasOwnProperty(c) &&
              -1 <
                a.b.indexOf(
                  c,
                  "publicis_counter_" + b.yg
                ) &&
              delete b.publicis.counters[c];
      }
      function k() {
        a.n.a.azsx("adKilled", u);
      }
      var n = { v1: {} };
      n.v1.display = {};
      n.v1.display.LARGE_AD_THRESHOLD = 237650;
      n.v1.display.NORMAL_SIZE_REQ = 0.98;
      n.v1.display.LARGE_SIZE_REQ = 0.3;
      n.v1.display.TIME_THRESHOLD = 1e3;
      n.v1.video = {};
      n.v1.video.LARGE_AD_THRESHOLD = 237650;
      n.v1.video.NORMAL_SIZE_REQ = 0.98;
      n.v1.video.LARGE_SIZE_REQ = 0.5;
      n.v1.video.TIME_THRESHOLD = 2e3;
      n.v1.display.VIEWABLE_KEY = "pd";
      n.v1.video.VIEWABLE_KEY = "pv";
      var m, h;
      a.ag = a.ag || {};
      a.ag.c = k;
      a.ag.a = function (a) {
        a.publicis = a.publicis || new p(a, "Publicis V1");
        return a.publicis;
      };
      a.ag.b = function (a, b) {
        b = b || {};
        var e = F[a];
        if ("object" !== typeof e) return b;
        e = e.publicis;
        "object" === typeof e &&
          (b[e.config.VIEWABLE_KEY] =
            e.fullViewEventPixelFired ? 1 : 0);
        return b;
      };
      k();
      m = "currentContinuouslyInViewTime";
      h = "maxContinuouslyInViewTime";
      n.config = n.v1.display;
    })();
    (function (a) {
      function t(a, b) {
        a.bo = b.moatClientSlicer1;
        a.bp = b.moatClientSlicer2;
        a.bd = b.zMoatPS || "Position Not Identified";
        a.zMoatPS = b.zMoatPS || "Position Not Identified";
        a.zMoatTP = b.zMoatTP || "Template Not Identified";
        a.zMoatLoad = b.zMoatLoad || "Load Not Identified";
        a.zMoatCall = b.zMoatCall || "Call Not Identified";
        a.zMoatViewport =
          b.zMoatViewport || "Viewport Not Identified";
        a.zMoatAltSL = "zMoatViewport:zMoatLoad:zMoatCall";
      }
      a.n.a.azsx("dropNonAdPixel", function (p, u, k) {
        a.b.dr(k);
        a.b.bk(["display", "feather"], k) && t(p, k);
      });
      a.n.a.azsx("dropPixel", function (p, u) {
        a.b.dr(p.ao);
        if (a.b.bk(["display", "feather"], p.ao)) {
          t(u, p.ao);
          var k = p.an;
          u.zMoatAdType =
            0 === k
              ? "FLASH"
              : 1 === k
              ? "IMAGE"
              : 2 === k
              ? "IFRAME"
              : 3 === k
              ? "HTML"
              : "N/A";
        }
      });
    })(a);
    (function () {
      function b(b) {
        var c = "Moat#PML#" + a.d.ap + "#" + h;
        b[c] || (b[c] = { id: a.d.at.a, listening: !1 });
        return b[c];
      }
      function t(c) {
        c = c && b(c);
        C.dcsx &&
          C.dcsx.engn({ listenerName: "ME-" + a.d.at.a });
        C.swde.sxaz("message-" + a.d.at.a, { callback: k });
        c && (c.listening = !1);
      }
      function p(b) {
        var c = b.match(d);
        b = !1;
        c &&
          7 == c.length &&
          ((b = {
            prefix: c[1],
            version: c[2],
            uid: c[3],
            type: c[4],
            request: c[5],
            data: c[6],
          }),
          (c = b.data.match(z)) &&
            3 == c.length &&
            ((b.cmd = c[1]), (b.arg = c[2])),
          b.version &&
            -1 !== a.b.indexOf(b.version, "-beta") &&
            (b.isBeta = !0));
        return b;
      }
      function u(a) {
        if (a.version == h) return !0;
        var b = h + "-beta" === a.version,
          c = h === a.version + "-beta";
        if (
          ("moatframe" === a.type ||
            "addThis" === a.type) &&
          (b || c)
        )
          return !0;
      }
      function k(b) {
        if (
          !(
            b &&
            b.origin &&
            b.data &&
            "string" === typeof b.data
          )
        )
          return !1;
        var d = p(b.data),
          e = d && d.uid == a.d.av.toString();
        if (
          d &&
          !e &&
          u(d) &&
          ((b.msgData = d),
          d.request in c &&
            (b.triggerCallback = function () {
              c[d.request] &&
                (c[d.request](b),
                "addThis" !== d.type &&
                  ((c[d.request] = null),
                  delete c[d.request]));
            }),
          g[d.type])
        )
          for (var e = 0, f = g[d.type].length; e < f; e++)
            g[d.type][e](b);
      }
      function n(b, d, e, f) {
        "object" == typeof d && (d = a.b.eb(d));
        f = f || x.floor(1e10 * x.random());
        "function" == typeof e && (c[f] = e);
        return {
          request: f,
          msg:
            "MSFAPI#" +
            h +
            "#" +
            a.d.av +
            "#" +
            b +
            "#" +
            f +
            "#" +
            d,
        };
      }
      function m(b, c, d) {
        try {
          var e = a.l.k(c || window.top);
          if (!e) return a.o.e(a.b.dl([b, c, d], m), 200);
          for (c = 0; c < e.length; c++)
            (d && e[c] == window) ||
              e[c].postMessage(b, "*");
        } catch (f) {}
      }
      var h = "1.2",
        g = {},
        c = {},
        e =
          /([a-z]+)#([a-z0-9.-]+)#([0-9]+)#([a-z]+)#([0-9]+)#(.+)/i,
        f = /@([a-z0-9]+)@@(.*)/i,
        d = e,
        z = f,
        g = {},
        c = {},
        h = "1.2",
        d = e,
        z = f;
      a.b.fb() && (h += "-beta");
      a.n.a.azsx(
        "modulesReady",
        a.b.dl([window], function (c) {
          if (c) {
            var d = b(c);
            d.listening ||
              (C.dcsx.ynds(
                c,
                "message",
                "message-" + a.d.at.a,
                "ME-" + a.d.at.a
              ),
              (d.listening = !0),
              C.swde.azsx("allAdsKilled", a.b.dl([c], t), {
                once: !0,
              }));
            c = C.swde.azsx("message-" + a.d.at.a, k);
            a.n.a.azsx(
              "allLocalAdsKilled",
              a.b.dl(
                ["message-" + a.d.at.a, { id: c }],
                C.swde.sxaz,
                C.swde
              ),
              { once: !0 }
            );
          }
        }),
        { once: !0 }
      );
      a.n.a.azsx(
        "stopPostMessageListeners",
        a.b.dl([window], t),
        { once: !0 }
      );
      a.aw = a.aw || {};
      a.aw.a = function (a, b) {
        g[a] || (g[a] = []);
        g[a].push(b);
      };
      a.aw.b = n;
      a.aw.c = function (a, b, c) {
        try {
          if (!a || !a || !a.source) return !1;
          a.source.postMessage(
            n(a.msgData.type, b, c, a.msgData.request).msg,
            "*"
          );
        } catch (d) {
          return !1;
        }
        return !0;
      };
      a.aw.d = function (b, c, d, e, f) {
        "object" == typeof d && (d = a.b.eb(d));
        return n(b, "@" + c + "@@" + d, e, f);
      };
      a.aw.e = m;
    })();
    (function () {
      function b(a) {
        return "undefined" !== typeof a && v && v[a]
          ? ((v[a] = null), !0)
          : !1;
      }
      function t() {
        var b = a.aw.b("moatframe", "kill", null);
        a.aw.e(b.msg, !1, !0);
      }
      function p() {
        var b = a.d.af(),
          c = a.d.ag();
        return b && c ? { width: b, height: c } : !1;
      }
      function u() {
        return a.d.c();
      }
      function k(b) {
        var c = !1;
        a.b.forEach(z, function (a) {
          if (a == b) return (c = !0), !1;
        });
        return c;
      }
      function n(b) {
        var c = b.msgData.cmd || b.msgData.data;
        if (c)
          if (b.triggerCallback) b.triggerCallback(b);
          else if (B[c]) B[c](b);
          else k(c) || a.aw.c(b, z.COMMAND_NOT_FOUND);
      }
      function m(b) {
        var c = {},
          d = b.msgData.arg && a.b.bo(b.msgData.arg);
        if (e(window, b.source, b.msgData.uid, d) && u()) {
          if (
            ((c.available = !0),
            a.d.ax && (d = a.d.aw) && a.d.ax && a.b.ef(d))
          ) {
            var f = a.d.eg || a.k.m();
            a.d.eg = f;
            c.cleanUrl = f;
            c.fullUrl = d;
            c.urlSrc = 1;
          }
        } else c.available = !1;
        a.aw.c(b, c);
      }
      function h(b, c) {
        if (!b || !c) return !1;
        for (
          var d = a.l.c(window).pop(),
            e = a.l.i(b, 10),
            f = !1,
            g = !1,
            h = null,
            k = null,
            l,
            m = e.length - 1;
          0 <= m;
          m--
        )
          if ((e[m] == d && (f = !0), f && !a.l.f(e[m]))) {
            k = e[m];
            break;
          }
        f &&
          k &&
          ((h = k && k.parent && k.parent.document) &&
            (l = a.l.g(h, k)),
          l &&
            ((d = l.offsetWidth),
            (e = l.offsetHeight),
            d == c.width && e == c.height
              ? (g = !0)
              : ((d *= e),
                (e = c.width * c.height),
                (g = 0.98 <= x.min(d, e) / x.max(d, e)))));
        return {
          isNested: g,
          iframe: l,
          iframeParentDoc: h,
        };
      }
      function g(b) {
        return b && b.parent && a.l.g(b.parent.document, b);
      }
      function c(b) {
        (b = "undefined" !== typeof b && v && v[b]) &&
          "boolean" == typeof b.isWithinReach &&
          (b.isNested &&
            !b.iframeParentDoc &&
            (b.isWithinReach = !1),
          b.isNested ||
            (b.win && !a.l.e(b.win)) ||
            (b.isWithinReach = !1));
        return b;
      }
      function e(b, d, e, f) {
        var k,
          l,
          m = {
            isNested: !1,
            iframe: null,
            iframeParentDoc: null,
          };
        if ((k = c(e)) && k.isWithinReach) return !0;
        l = a.l.h(b, d, !0);
        k && "undefined" == typeof k.isWithinReach
          ? (k.isWithinReach = l)
          : (l
              ? (d = g(d))
              : ((m = h(d, f)), (d = m.iframe) && (l = !0)),
            (k = {
              dimensions: f,
              iframe: d,
              iframeParentDoc: m.iframeParentDoc,
              isNested: m.isNested,
              isWithinReach: l,
              win: b,
            }),
            (v[e] = k));
        return k.isWithinReach;
      }
      function f(a, b, c, d, e) {
        if (!a || !b) return !1;
        a = {
          w: a.width,
          h: a.height,
          el: a.left,
          et: a.top,
          er: a.right,
          eb: a.bottom,
          vl: b.left,
          vt: b.top,
          vr: b.right,
          vb: b.bottom,
        };
        "boolean" === typeof d && (a.ia = d);
        "number" !== typeof c || isNaN(c) || (a.m = c);
        "number" !== typeof e ||
          isNaN(e) ||
          (a.pv = 1 < e ? e / 100 : e);
        return a;
      }
      function d(b) {
        return b
          ? (b = a.x.p(b))
            ? f(b.cumulRect, b.visibleRect, 0, !1)
            : !1
          : !1;
      }
      var z = {
          COMMAND_FAILED: "CF",
          COMMAND_NOT_FOUND: "CNF",
          COMMAND_NOT_SUPPORTED: "CNS",
        },
        l = { initialized: !1, loopIds: [] },
        B = {},
        v = {},
        A = !1;
      l.init = function () {
        var b = p();
        l.initialized ||
          a.d.c() ||
          ((b = a.aw.d(
            "moatframe",
            "check",
            b,
            function (b) {
              b = a.b.bo(b.msgData.data);
              var c = "string" === typeof a.d.o;
              b &&
                "string" === typeof b.fullUrl &&
                "number" === typeof b.urlSrc &&
                !c &&
                a.b.ef(b.fullUrl) &&
                !a.d.ax &&
                (a.d.n(b.urlSrc),
                (a.d.o = b.cleanUrl),
                (a.d.eh = b.fullUrl),
                (a.d.aw = b.fullUrl),
                (a.d.ax = !0));
              b &&
                b.available &&
                !l.initialized &&
                ((a.d.bw = !0),
                (l.initialized = !0),
                (b = "MoatFrame#geom#" + new D().getTime()),
                a.o.o(l.requestGeom, null, 200, b),
                l.loopIds.push(b),
                a.n.a.azsx("allLocalAdsKilled", t, {
                  once: !0,
                }),
                a.n.a.zaxs("Moatframe:Ready", b));
            }
          )),
          a.aw.e(b.msg, !1, !0));
      };
      l.requestGeom = function () {
        if (!A) {
          A = !0;
          var b = a.aw.b("moatframe", "geom", function (b) {
            A = !1;
            k(b.msgData.data) ||
              (l.geom = a.b.bo(b.msgData.data));
          });
          a.aw.e(b.msg, !1, !0);
        }
      };
      B.ping = function (b) {
        (b && b.source === window) ||
          (a.b.fc() && b.msgData.isBeta) ||
          (!a.d.c() && a.d.cy() && l.init());
      };
      B.check = function (b) {
        if (!a.b.fb() || b.msgData.isBeta) {
          var c = !0;
          a.d.q() && (c = !1);
          c && m(b);
        }
      };
      B.geom = function (b) {
        if (!a.b.fb() || b.msgData.isBeta)
          if (e(window, b.source, b.msgData.uid) && u()) {
            var c =
              v &&
              v[b.msgData.uid] &&
              v[b.msgData.uid].iframe;
            if (c && (c = d(c))) {
              a.aw.c(b, c);
              return;
            }
            a.aw.c(b, z.COMMAND_FAILED);
          } else a.aw.c(b, z.COMMAND_NOT_SUPPORTED);
      };
      B.kill = function (a) {
        b(a.msgData.uid);
      };
      a.ae = a.ae || {};
      a.ae.b = function (b) {
        var c = l.geom;
        if (!c) return !1;
        var d = a.x.p(b.aa),
          e = a.x.d(d.rect, c.el, c.et),
          f = a.x.d(d.visibleRect, c.el, c.et),
          f = a.x.l(f, {
            left: c.vl,
            right: c.vr,
            top: c.vt,
            bottom: c.vb,
          }),
          d =
            ((f.right - f.left) * (f.bottom - f.top)) /
            d.area,
          g = !1;
        c &&
          "number" === typeof c.pv &&
          !isNaN(c.pv) &&
          (a.b.fe(d, c.pv, 0.01) &&
            "sframe" === a.v.a(b.zr) &&
            (g = !0),
          (d = x.min(d, c.pv)));
        c.m || (g = !0);
        g && a.n.a.zaxs("rectsAvailable", b.zr, e, f);
        c && "boolean" === typeof c.ia && (a.d.bx = c.ia);
        c &&
          "number" === typeof c.m &&
          !isNaN(c.m) &&
          (a.d.by = c.m);
        return d;
      };
      a.ae.c = g;
      a.ae.d = b;
      a.ae.e = n;
      a.ae.f = z;
      a.ae.g = m;
      a.ae.h = e;
      a.ae.i = k;
      a.ae.j = h;
      a.ae.k = v;
      a.ae.l = d;
      a.ae.a = l;
      a.ae.a.a = l.init;
      a.ae.m = B;
      a.ae.n = t;
      a.ae.o = f;
      a.ae.p = function () {
        a.aw.a("moatframe", n);
        a.aw.a("addThis", n);
        a.aw.e(a.aw.b("moatframe", "ping").msg, !1, !0);
      };
      a.ae.q = p;
      a.ae.r = c;
      a.ae.s = u;
    })();
    (function () {
      function b(b) {
        if (b.activetime) {
          var e = a.v.e(b.zr);
          if (b.activetime.onInViewTimeCount)
            for (var f in e)
              e[f].removeListener &&
                e[f].removeListener(b.activetime);
          else
            b.activetime.onInViewTimeCount = a.b.dl([b], g);
          (e = a.v.z(b.zr, !0)) &&
            e.addListener(b.activetime);
        }
      }
      function t(b) {
        b.activetime.mouseSubId = C.swde.azsx(
          "mouseEvent",
          a.b.dl([b], u)
        );
        b.activetime.mouseLocalSubId = a.n.a.azsx(
          "mouseEvent",
          a.b.dl([b], u)
        );
        b.activetime.keyboardSubId = C.swde.azsx(
          "keyboardEvent",
          a.b.dl([b], k)
        );
        b.activetime.focusSubId = C.swde.azsx(
          "focusStateChange",
          a.b.dl([b], n)
        );
      }
      function p(b) {
        if (
          b.activetime &&
          (C.swde.sxaz("mouseEvent", {
            id: b.activetime.mouseSubId,
          }),
          a.n.a.sxaz("mouseEvent", {
            id: b.activetime.mouseLocalSubId,
          }),
          C.swde.sxaz("keyboardEvent", {
            id: b.activetime.keyboardSubId,
          }),
          C.swde.sxaz("focusStateChange", {
            id: b.activetime.focusSubId,
          }),
          b.activetime &&
            b.activetime.counters &&
            "object" === typeof b.activetime.counters)
        )
          for (var e in b.activetime.counters)
            delete b.activetime.counters[e];
      }
      function u(a, b) {
        m(a, !0);
      }
      function k(a, b) {
        m(a, !0);
      }
      function n(a, b) {
        b && m(a, !0);
      }
      function m(b, e) {
        var f = new D().getTime(),
          f =
            (b.activetime.activeTS &&
              f - b.activetime.activeTS) ||
            0;
        e &&
          (1e3 < f || !b.activetime.active) &&
          (b.activetime.checkID &&
            a.b.a(b.activetime.checkID),
          (b.activetime.activeTS = new D().getTime()),
          (b.activetime.checkID = a.o.e(
            a.b.dl([b], h),
            5e3
          )));
        b.activetime.active = e;
      }
      function h(a) {
        if (a.activetime.active) {
          var b =
            5e3 > new D().getTime() - a.activetime.activeTS;
          m(a, b);
        }
      }
      function g(b, e, f, d, g) {
        f = a.as.d(b.activetime.counters, g);
        g = a.v.j(b.zr, g);
        g =
          (b = b.activetime.active) &&
          g &&
          g.visible &&
          g.visible();
        d = f.get("lastActiveVis", !1);
        !f.get("wasEverActiveAndFocused") &&
          b &&
          f.set("wasEverActiveAndFocused", 1);
        d && g
          ? f.increment("activeInviewTime", x.max(e, 0))
          : (d || g) &&
            f.increment(
              "activeInviewTime",
              x.max(x.round(0.5 * e), 0)
            );
        f.set("lastActiveVis", g);
      }
      a.n.a.azsx("viewCounterStarted", b);
      a.n.a.azsx("startAdTracking", function (c) {
        if (!a.d.c()) return !1;
        c.activetime = {};
        c.activetime.counters = {};
        t(c);
        a.n.a.azsx("adKilled", p, {
          condition: function (a) {
            return c.zr == a.zr;
          },
          once: !0,
        });
        b(c);
      });
      a.aq = a.aq || {};
      a.aq.b = b;
      a.aq.a = function (b, e) {
        e.rf = a.d.ei ? 1 : 0;
        var f;
        f = a.d.ei;
        if (!a.d.c())
          return (
            (f =
              f ||
              a.focus.pageIsVisible() ||
              (b &&
                b.counters &&
                b.counters.strictDwell &&
                b.counters.strictDwell.tCur &&
                0 < b.counters.strictDwell.tCur)),
            (e.re = f ? 1 : 0),
            e
          );
        if (!b.activetime) return e;
        var d = a.v.a(b.zr),
          d = a.as.d(b.activetime.counters, d);
        f = f || d.get("wasEverActiveAndFocused");
        e.re = f ? 1 : 0;
        d &&
          0 < d.get("activeInviewTime") &&
          ((e.ft = d.get("activeInviewTime")),
          (e.fv = d.get("lastActiveInviewTime")),
          (e.fw = d.get(
            "activeInviewTimeFirstDelta",
            d.get("activeInviewTime")
          )),
          d.set(
            "lastActiveInviewTime",
            d.get("activeInviewTime")
          ));
        return e;
      };
    })();
    (function () {
      function b(b) {
        b.functionInProgress = !1;
        return 0 < b.pendingFunctions.length
          ? ((b = b.pendingFunctions.shift()),
            a.b.dl(b, a.y.call, a.y)(),
            !0)
          : !1;
      }
      function t() {
        try {
          (a = window.__b),
            (0, window.__w)("INNER_FUNCTION"),
            (window.__w = void 0),
            (window.__b = void 0);
        } catch (b) {
          var k =
            b.name +
            " in closure (moat.customIframe): " +
            b.message +
            ", stack=" +
            b.stack;
          try {
            var n =
                "undefined" !== typeof omidNative &&
                ("undefined" === typeof Image ||
                  (Image && Image._MoatProxyOf)),
              m = n ? "" : document.referrer,
              h =
                "undefined" !== typeof AB_SCAFFOLD &&
                2 === AB_SCAFFOLD.type,
              g =
                "undefined" !== typeof a && a.d && a.d.l
                  ? a.d.l
                  : "",
              c =
                "https://px.moatads.com/pixel.gif?e=24&d=data%3Adata%3Adata%3Adata&i=" +
                escape(
                  "undefined" === typeof L
                    ? h
                      ? "HEARSTMAGAZINES2_BETA"
                      : "HEARSTMAGAZINES2"
                    : L
                ) +
                "&k=" +
                escape(k) +
                "&ar=" +
                escape("fde231f50fe-clean") +
                "&iw=" +
                escape("4a7adaa") +
                "&bq=" +
                escape(g) +
                "&j=" +
                escape(m) +
                "&cs=" +
                new D().getTime();
            n
              ? omidNative.sendUrl(c)
              : (new Image(1, 1).src = c);
          } catch (f) {}
        }
      }
      function p(k) {
        if (!k) return !1;
        var n = k.iframe,
          m = n.contentWindow.document,
          h = k.innerFunction,
          g = k.innerFunctionCbName,
          c = k.preserveDom;
        !1 !== a.d.dt()
          ? ((c = m.createElement("script")),
            (c.innerHTML = t
              .toString()
              .replace('"INNER_FUNCTION"', h)),
            m.body.appendChild(c))
          : ((h =
              "<html><head></head><body><script>" +
              t.toString().replace('"INNER_FUNCTION"', h) +
              "\x3c/script>"),
            c ||
              (h +=
                "<script>setTimeout(function() { document.close(); }, 1);\x3c/script>"),
            m.write(h + "</body></html>"));
        n.contentWindow.__b = k.Moat;
        n.contentWindow.__w = k.wrapper;
        n.contentWindow[
          t.toString().match(/function (\w+)\(\)/)[1]
        ]();
        g && a.d.at[g] && (a.d.at[g] = null);
        if (!b(k.frameData))
          a: if (
            ((m = k.setIframeDomain),
            (k = k.preserveDom),
            n)
          ) {
            var e;
            if (!m)
              try {
                e = n.contentWindow.document;
              } catch (f) {
                break a;
              }
            g = !1 === a.d.dt();
            k
              ? m
                ? (n.src = "javascript:document.close();")
                : e.close()
              : m
              ? (n.src = g
                  ? "javascript:document.open(); document.close();"
                  : 'javascript:document.head && (document.head.innerHTML=""); document.body && (document.body.innerHTML="");')
              : g
              ? (e.open(), e.close())
              : (e.head && (e.head.innerHTML = ""),
                e.body && (e.body.innerHTML = ""));
          }
      }
      function u(a) {
        if ("string" !== typeof a) return "";
        var b = a.charAt(0);
        "'" !== b && '"' !== b && (a = "'" + a + "'");
        return a;
      }
      a.y = a.y || {};
      a.y.a = function (k, n, m, h) {
        if (!k) return !1;
        try {
          var g = document.createElement("iframe"),
            c = n || a.b.dm();
          if (!g) return !1;
          a.b.el(g, h);
          var e;
          m
            ? ((m = a.b.de(m)),
              (e = function () {
                a.b.ca(g, m);
              }))
            : ((m = a.d.e().document.body),
              (e = function () {
                m.insertBefore(
                  g,
                  m.insertBefore[0] || null
                );
              }));
          var f = {
            id: c,
            iframe: g,
            functionInProgress: !1,
            pendingFunctions: [],
            parent: m,
            loaded: !1,
          };
          g.onload = function () {
            g.contentWindow &&
              g.contentDocument &&
              !f.loaded &&
              ((f.loaded = !0), b(f));
          };
          e();
          f.loaded =
            f.loaded ||
            (g.contentDocument &&
              "complete" === g.contentDocument.readyState);
          k.customIframes || (k.customIframes = {});
          k.customIframes[c] = f;
          f.loaded && b(f);
          a.n.a.azsx(
            "adKilled",
            function (b) {
              var c = b.customIframes,
                e;
              for (e in c)
                c.hasOwnProperty(e) && a.y.b(b, c[e].id);
            },
            {
              condition: function (a) {
                return k.zr == a.zr;
              },
              once: !0,
            }
          );
          return c;
        } catch (d) {}
        return !1;
      };
      a.y.b = function (a, b, m) {
        var h = a.customIframes[b];
        m = h && h.iframe;
        if (!h || !m) return !1;
        h = h.parent;
        if (!h) return !1;
        try {
          h.removeChild(m);
        } catch (g) {}
        a.customIframes[b] = null;
        delete a.customIframes[b];
        return !0;
      };
      a.y.call = function (b, n, m, h, g, c, e) {
        if (!b || "undefined" === typeof n) return !1;
        e = b && b.customIframes && b.customIframes[n];
        if (!e || !m) return !1;
        h =
          h && "string" !== typeof h ? h.toString() : u(h);
        m && "string" !== typeof m && (m = a.b.di(m, h));
        (g && "function" === typeof g) ||
          (g = function () {});
        if (e.functionInProgress || !e.loaded)
          return (
            e.pendingFunctions.push([b, n, m, h, g, c]), !1
          );
        b = e.iframe;
        e.functionInProgress = !0;
        n = !1;
        try {
          if (!e.iframe.contentDocument) throw Error();
        } catch (d) {
          n = !0;
        }
        m = a.o.j(
          a.b.dl(
            [
              {
                iframe: b,
                frameData: e,
                Moat: a,
                wrapper: function (a) {
                  g(a);
                },
                innerFunction: m,
                innerFunctionCbName: f,
                setIframeDomain: n,
                preserveDom: c,
              },
            ],
            p
          )
        );
        if (n) {
          var f;
          do f = "Moatiqcb" + x.floor(1e4 * x.random());
          while (a.d.at[f]);
          a.d.e()[a.d.au][f] = m;
          b.src =
            'javascript:document.open(); document.domain="' +
            document.domain +
            '"; window.parent["' +
            a.d.au +
            '"]["' +
            f +
            '"]();';
        } else m();
      };
    })();
    (function () {
      function b(a) {
        window._qs = a;
        (a = window.__b) &&
          a.b.cd(
            "https://z.moatads.com/px2/client.js",
            document.body
          );
      }
      a.ax = {};
      a.ax.a = function (t) {
        if (t) {
          var p = 0 === x.floor(1e3 * x.random());
          t.px2 = {
            inSample: !1,
            success: !1,
            firedPixel: !1,
          };
          if (
            p &&
            ((t.px2.inSample = !0), (p = a.y.a(t, "ivt")))
          ) {
            try {
              var u =
                t.customIframes &&
                t.customIframes[p] &&
                t.customIframes[p].iframe;
              u && (u.contentWindow.__PX2__ = t.px2);
            } catch (k) {}
            u = a.f.z();
            u = a.ad.b(36, t.ao, u, !1, !0);
            u.qs.i = a.b.ap(L, "PX2");
            u = a.ad.o(u.qs);
            a.y.call(t, p, b, u, null, !0);
            t.px2.success = !0;
          }
        }
      };
    })(a);
    (function () {
      a.z = a.z || {};
      a.z.a = function (a, t) {
        function p(a) {
          a = [{ name: "fr", enabled: !0, inview: a }];
          f && f(a);
        }
        function u(a) {
          a && 5 > e ? (e += 1) : a || (e = 0);
          return e;
        }
        function k(a) {
          var b, f, h;
          clearTimeout(c);
          f = l;
          h = f.inView;
          b = f.time;
          a = new window.Date().getTime();
          b = 2 < 1e3 / (a - b);
          var k = l.inView,
            m = b && !k && 0 === e;
          d && ((!b && k) || m) && d && d(void 0);
          u(b);
          b = b && 5 === e;
          b !== h && p(b);
          f.inView = b;
          f.time = a;
          g();
        }
        function n() {
          var a = l,
            b = new window.Date().getTime();
          500 <= b - a.time &&
            a.inView &&
            (p(!1), (a.inView = !1), (a.time = b));
        }
        function m() {
          for (var a = 0, b = x.length; a < b; a++)
            window.cancelAnimationFrame(x[a]);
          x = [];
        }
        function h() {
          return {
            time: new window.Date().getTime(),
            inView: !1,
          };
        }
        function g() {
          l.inView && (c = setTimeout(n, 500));
          20 <= x.length && m();
          x.push(window.requestAnimationFrame(k));
        }
        var c,
          e = 0,
          f =
            a &&
            window &&
            window.parent &&
            window.parent[a],
          d =
            t &&
            window &&
            window.parent &&
            window.parent[t],
          x = [],
          l = h();
        window.onBlur = function () {
          u(!1);
          l = h();
          clearTimeout(c);
          m();
        };
        window.onFocus = g;
        g();
      };
    })();
    (function () {
      function b() {
        var b = new D().getTime(),
          d = b - c;
        if (c && !(1e3 > d)) {
          c = b;
          for (var e in f) f.hasOwnProperty(e) && p(f[e]);
          a.n.a.zaxs("hiddenAds:updated");
        }
      }
      function t(b) {
        var c = { oz: !0 };
        if (!a.d.x().isInApp || a.d.cj())
          (c.su = !0), (c.of = !0);
        if (!d[b]) return !1;
        for (var e in d[b])
          if (c[e] && d[b].hasOwnProperty(e) && !d[b][e])
            return !1;
        return !0;
      }
      function p(b) {
        if (!a.d.az()) {
          k(b);
          n(b);
          m(b);
          h(b);
          var c = t(b.zr);
          !b.hasAdLoadedfired && c
            ? (x = !0)
            : !x &&
              c &&
              ((c = { e: 9 }),
              (c.q = b.aq[9]++),
              a.ad.a(b, c),
              (x = !0));
        }
      }
      function u(b) {
        b = a.d.az() ? !0 : !1;
        var c = {};
        c.st = b;
        c.su = b;
        c.of = b;
        c.oz = b;
        return c;
      }
      function k(b) {
        d[b.zr] || (d[b.zr] = u());
        if (!0 !== d[b.zr].st) {
          var c = a.v.z(b.zr);
          c
            ? ((b.isCurrentlyStacked = a.x.k(b)),
              !1 === d[b.zr].st &&
                (d[b.zr].st =
                  !1 === c.adStartedOnScreen() ||
                  !1 === b.isCurrentlyStacked))
            : (d[b.zr].st = !0);
        }
      }
      function n(b) {
        var c = d,
          e = b.zr;
        c[e] = d[e] || u();
        var f = c[e].su;
        if (!f) {
          var g = b.WINDOW || window,
            f =
              b.AD_RECT ||
              a.x.e(b.aa, g, b._calcVideoBasedOnContainer),
            g = a.d.aa(g),
            f = b.isInIframe
              ? f &&
                g &&
                !(
                  f.left >= g.width ||
                  0 >= f.right ||
                  f.top >= g.height ||
                  0 >= f.bottom
                )
              : !0;
          c[e].su = f;
        }
      }
      function m(b) {
        var c = d,
          e = b.zr;
        c[e] = d[e] || u();
        var f = c[e].of;
        f ||
          ((f = a.d.aa(b.WINDOW)),
          (f = b.isInIframe
            ? f && !(5 >= f.width || 5 >= f.height)
            : !0),
          (c[e].of = f));
      }
      function h(b) {
        var c = d[b.zr];
        d[b.zr] = d[b.zr] || u();
        if (b.aa) {
          var e = 0 < a.b["do"](b);
          b.isCurrentlyTransparent = !e;
          c.oz = c.oz || e;
          return e;
        }
        return c.oz;
      }
      function g(a) {
        a &&
          !a.ep &&
          (delete a.elementsFromPointCache, delete d[a.zr]);
      }
      var c = 0,
        e,
        f = F,
        d = {},
        x = !1;
      a.ao = a.ao || {};
      a.ao.b = function (a) {
        return !1;
      };
      a.ao.d = b;
      a.ao.e = k;
      a.ao.f = m;
      a.ao.g = n;
      a.ao.h = h;
      a.ao.i = function (a) {};
      a.ao.a = function (a) {
        var b = {},
          c,
          e;
        for (e in d[a])
          d[a].hasOwnProperty(e) &&
            ((c = d[a][e]), (b[e] = c ? 1 : 0));
        return b;
      };
      a.ao.c = function (b) {
        return a.d.dq() ? !1 : !t(b);
      };
      (function () {
        a.n.a.azsx("adLoaded", function (a) {
          a.hasAdLoadedfired = !0;
        });
        a.n.a.azsx("startAdTracking", function (d) {
          p(d);
          c = new D().getTime();
          e ||
            ((e = new D().getTime() + "ha"),
            a.n.a.azsx(
              "view:tick",
              function () {
                b();
              },
              { id: e }
            ));
        });
        a.n.a.azsx(
          "allLocalAdsKilled",
          function () {
            a.n.a.sxaz("view:tick", { id: e });
            f = null;
          },
          { once: !0 }
        );
        a.n.a.azsx(
          "adEntersView",
          function (a) {
            k(a);
          },
          { once: !0 }
        );
        a.n.a.azsx("adKilled", g);
      })();
    })();
    (function () {
      function b(b) {
        b &&
          (a.d.at.b ||
            ((a.d.at.b = !0),
            C.dcsx &&
              C.dcsx.ynds(
                window,
                "deviceorientation",
                "deviceorientation-" + a.d.at.a,
                "deviceorientationFn" + a.d.at.a
              )),
          h ||
            ((h = !0),
            C.swde.azsx(
              "deviceorientation-" + a.d.at.a,
              p
            )),
          Object.prototype.hasOwnProperty.call(n, b.zr) ||
            (n[b.zr] = new u()));
      }
      function t(a) {
        a && delete n[a.zr];
      }
      function p(a) {
        var b = D.now(),
          e = !1;
        200 < b - m && ((m = b), (e = !0));
        for (var f in F)
          Object.prototype.hasOwnProperty.call(F, f) &&
            Object.prototype.hasOwnProperty.call(n, f) &&
            ((b = n[f]),
            1500 > b.eventsCount &&
              ((b.eventsCount += 1),
              e && b.handleOrientationEvent(a)));
      }
      function u() {
        this.validEventsHandledCount =
          this.eventsHandledCount =
          this.eventsCount =
            0;
        this.alpha = new k(0, 360);
        this.beta = new k(-180, 180);
        this.gamma = new k(-90, 90);
      }
      function k(a, b) {
        this.minExpectedVal = a;
        this.maxExpectedVal = b;
        this.normalizedMax =
          x.abs(this.minExpectedVal) + this.maxExpectedVal;
        this.rangeRight =
          this.rangeLeft =
          this.origin =
            null;
      }
      var n = {},
        m = 0,
        h = !1;
      u.prototype.isValidEvent = function (a) {
        return (!a.alpha && 0 !== a.alpha) ||
          (!a.beta && 0 !== a.beta) ||
          (!a.beta && 0 !== a.beta) ||
          (0 === a.alpha && 0 === a.beta && 0 == a.gamma)
          ? !1
          : !0;
      };
      u.prototype.handleOrientationEvent = function (a) {
        this.eventsHandledCount += 1;
        this.isValidEvent(a) &&
          ((this.validEventsHandledCount += 1),
          this.alpha.addValue(a.alpha),
          this.beta.addValue(a.beta),
          this.gamma.addValue(a.gamma));
      };
      k.prototype.isOutsideRange = function (a) {
        return this.rangeLeft > this.rangeRight
          ? this.rangeLeft > a && a > this.rangeRight
          : a < this.rangeLeft || a > this.rangeRight;
      };
      k.prototype.extendRange = function (a) {
        this.isOutsideRange(a) &&
          ((a < this.rangeLeft
            ? this.rangeLeft - a
            : this.rangeLeft + this.normalizedMax - a) <=
          (a > this.rangeRight
            ? a - this.rangeRight
            : this.normalizedMax - this.rangeRight + a)
            ? (this.rangeLeft = a)
            : (this.rangeRight = a));
      };
      k.prototype.addValue = function (a) {
        var b = a + x.abs(this.minExpectedVal);
        null === this.origin
          ? ((this.origin = a.toFixed(3)),
            (this.rangeRight = this.rangeLeft = b))
          : this.extendRange(b);
      };
      k.prototype.getRangeLength = function () {
        return null === this.origin
          ? -1
          : this.rangeRight >= this.rangeLeft
          ? (this.rangeRight - this.rangeLeft).toFixed(3)
          : (
              this.normalizedMax -
              this.rangeLeft +
              this.rangeRight
            ).toFixed(3);
      };
      a.ap = a.ap || {};
      a.ap.a = function (a) {
        var b = {};
        n[a] &&
          ((a = n[a]),
          (a = [
            a.eventsCount,
            a.eventsHandledCount,
            a.validEventsHandledCount,
            a.alpha.origin ? a.alpha.origin : "null",
            a.alpha.getRangeLength(),
            a.beta.origin ? a.beta.origin : "null",
            a.beta.getRangeLength(),
            a.gamma.origin ? a.gamma.origin : "null",
            a.gamma.getRangeLength(),
          ]),
          (b.oe = a.join(":")));
        return b;
      };
      (function () {
        a.d.e().DeviceOrientationEvent &&
          (a.n.a.azsx("adInitialized", b),
          a.n.a.azsx("adKilled", t),
          a.n.a.azsx("allLocalAdsKilled", function () {
            C &&
              C.dcsx &&
              C.dcsx.engn &&
              C.dcsx.engn({
                listenerName:
                  "deviceorientationFn" + a.d.at.a,
              });
            C.swde.sxaz("deviceorientation-" + a.d.at.a, {
              callback: p,
            });
            n = {};
            h = a.d.at.b = !1;
          }));
      })();
    })();
    (function (a) {
      a.an = {};
      a.an.a = function () {
        var t = a.l.a(),
          p = ["-", "-", "-", "-", "-"];
        if (!t || !t.performance) return !1;
        var u = t.performance;
        if (!u || "function" !== typeof u.getEntriesByType)
          return !1;
        p[0] = t === window.top ? 1 : 0;
        for (
          var k = u.getEntriesByType("paint"), n = 0;
          n < k.length;
          n++
        )
          (t = k[n]),
            "first-paint" === t.name &&
              (p[1] = x.round(t.startTime)),
            "first-contentful-paint" === t.name &&
              (p[2] = x.round(t.startTime));
        u = u.getEntriesByType("navigation");
        0 < u.length &&
          ((t = u[0]),
          "duration" in t && (p[3] = x.round(t.duration)),
          "domInteractive" in t &&
            (p[4] = x.round(t.domInteractive)));
        return p.join(":");
      };
    })(a);
    a.n.a.zaxs("modulesReady", C);
    var Ta = a.focus.pageIsVisible();
    a.d.ei =
      1 == window.history.length &&
      !Ta &&
      ((a.d.c() && "" != document.referrer) || !a.d.c());
    a.b.x();
    a.b.bi();
    a.n.a.azsx("adInitialized", a.ax.a, { once: !0 });
    a.d.dm();
    ((a.d.h() && a.d.dx()) || "dummy.url" === a.b.bi()) &&
      a.d.dm();
    a.d.dm();
    a.ae.p();
    var N = a.b.ba(),
      Ha = N && N.src && N.src.match("zMoatNoSampling=1"),
      ba = !1,
      Ja;
    Da = "https://px.moatads.com";
    a.ar.a(Ra);
    var Ia = function () {
      var b;
      b = arguments && arguments[0];
      b =
        a.b.p() &&
        a.d.q() &&
        b &&
        b.type &&
        "beforeunload" === b.type
          ? !0
          : !1;
      b ||
        (C.zs &&
          C.dcsx &&
          (C.dcsx.engn({
            listenerName: "unloadFn" + a.d.at.a,
          }),
          C.dcsx.engn({
            listenerName: "beforeunloadFn" + a.d.at.a,
          })),
        xa || ((xa = !0), a.e.b()),
        a.f && a.f.a(),
        ca(),
        a.n.a.zaxs("stopPostMessageListeners"));
    };
    !N && a.d.az() && (N = { _MoatProxyOf: "thisScript" });
    if (!N) return !1;
    a.c = N;
    a.b.bu(N);
    a.n.a.azsx("trackingReady", Fa, { once: !0 });
    var Va = a.t.f(N, "display");
    a.at.b(Va);
    a.at.a() ||
      (a.d.q()
        ? a.am && !a.am.a()
          ? a.n.a.zaxs("trackingReady")
          : a.am || a.n.a.zaxs("trackingReady")
        : a.n.a.zaxs("trackingReady"),
      a.n.a.azsx("allLocalAdsKilled", La, { once: !0 }));
  })(Date, Math);
} catch (D) {
  var GLOBAL_VAR = this,
    ct = new Date().getTime();
  GLOBAL_VAR["Moat#ETS"] || (GLOBAL_VAR["Moat#ETS"] = ct);
  GLOBAL_VAR["Moat#EMC"] || (GLOBAL_VAR["Moat#EMC"] = 0);
  var et = ct - GLOBAL_VAR["Moat#ETS"],
    hourElapsed = 36e5 <= et,
    msg =
      D.name +
      " in closure (global): " +
      D.message +
      ", stack=" +
      D.stack;
  if (!hourElapsed && 10 > GLOBAL_VAR["Moat#EMC"]) {
    GLOBAL_VAR["Moat#EMC"]++;
    try {
      var pixelDomain = "px.moatads.com",
        isDomless =
          "undefined" !== typeof omidNative &&
          ("undefined" === typeof Image ||
            (Image && Image._MoatProxyOf)),
        documentReferrer = isDomless
          ? ""
          : document.referrer,
        isBeta =
          "undefined" !== typeof AB_SCAFFOLD &&
          2 === AB_SCAFFOLD.type,
        viewHash =
          "undefined" === typeof AD_VIEW_HASH
            ? isBeta
              ? "HEARSTMAGAZINES2_BETA"
              : "HEARSTMAGAZINES2"
            : AD_VIEW_HASH,
        tagType =
          "undefined" !== typeof Moat && Moat.d && Moat.d.l
            ? Moat.d.l
            : "",
        pxSrc =
          "https://" +
          pixelDomain +
          "/pixel.gif?e=24&d=data%3Adata%3Adata%3Adata&i=" +
          escape(viewHash) +
          "&k=" +
          escape(msg) +
          "&ar=" +
          escape("fde231f50fe-clean") +
          "&iw=" +
          escape("4a7adaa") +
          "&bq=" +
          escape(tagType) +
          "&j=" +
          escape(documentReferrer) +
          "&cs=" +
          new Date().getTime();
      if (isDomless) omidNative.sendUrl(pxSrc);
      else {
        var moat_px = new Image(1, 1);
        moat_px.src = pxSrc;
      }
    } catch (x) {}
  } else if (hourElapsed) {
    GLOBAL_VAR["Moat#EMC"] = 1;
    GLOBAL_VAR["Moat#ETS"] = ct;
    try {
      (pixelDomain = "px.moatads.com"),
        (documentReferrer = (isDomless =
          "undefined" !== typeof omidNative &&
          ("undefined" === typeof Image ||
            (Image && Image._MoatProxyOf)))
          ? ""
          : document.referrer),
        (isBeta =
          "undefined" !== typeof AB_SCAFFOLD &&
          2 === AB_SCAFFOLD.type),
        (viewHash =
          "undefined" === typeof AD_VIEW_HASH
            ? isBeta
              ? "HEARSTMAGAZINES2_BETA"
              : "HEARSTMAGAZINES2"
            : AD_VIEW_HASH),
        (tagType =
          "undefined" !== typeof Moat && Moat.d && Moat.d.l
            ? Moat.d.l
            : ""),
        (pxSrc =
          "https://" +
          pixelDomain +
          "/pixel.gif?e=24&d=data%3Adata%3Adata%3Adata&i=" +
          escape(viewHash) +
          "&k=" +
          escape(msg) +
          "&ar=" +
          escape("fde231f50fe-clean") +
          "&iw=" +
          escape("4a7adaa") +
          "&bq=" +
          escape(tagType) +
          "&j=" +
          escape(documentReferrer) +
          "&cs=" +
          new Date().getTime()),
        isDomless
          ? omidNative.sendUrl(pxSrc)
          : ((moat_px = new Image(1, 1)),
            (moat_px.src = pxSrc));
    } catch (x) {}
  }
}
