_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [6],
  {
    '97Is': function (e, t, n) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/404',
        function () {
          return n('uNx/')
        },
      ])
    },
    YFqc: function (e, t, n) {
      e.exports = n('cTJO')
    },
    YNhk: function (e, t, n) {
      'use strict'
      var r = n('wx14')
      function o(e, t) {
        if (null == e) return {}
        var n,
          r,
          o = (function (e, t) {
            if (null == e) return {}
            var n,
              r,
              o = {},
              a = Object.keys(e)
            for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n])
            return o
          })(e, t)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]))
        }
        return o
      }
      var a = n('FdF9'),
        c = n('YFqc'),
        u = n.n(c),
        i = a.default.createElement
      t.a = function (e) {
        var t = e.href,
          n = o(e, ['href']),
          a = t && t.startsWith('/'),
          c = t && t.startsWith('#')
        return a
          ? i(u.a, { href: t }, i('a', n))
          : i(
              'a',
              c
                ? Object(r.a)({ href: t }, n)
                : Object(r.a)({ target: '_blank', rel: 'noopener noreferrer', href: t }, n)
            )
      }
    },
    cTJO: function (e, t, n) {
      'use strict'
      var r = n('J4zp'),
        o = n('284h')
      ;(t.__esModule = !0), (t.default = void 0)
      var a = o(n('FdF9')),
        c = n('elyg'),
        u = n('nOHt'),
        i = n('vNVm'),
        l = {}
      function s(e, t, n, r) {
        if (e && (0, c.isLocalURL)(t)) {
          e.prefetch(t, n, r).catch(function (e) {
            0
          })
          var o = r && 'undefined' !== typeof r.locale ? r.locale : e && e.locale
          l[t + '%' + n + (o ? '%' + o : '')] = !0
        }
      }
      var f = function (e) {
        var t = !1 !== e.prefetch,
          n = (0, u.useRouter)(),
          o = (n && n.pathname) || '/',
          f = a.default.useMemo(
            function () {
              var t = (0, c.resolveHref)(o, e.href, !0),
                n = r(t, 2),
                a = n[0],
                u = n[1]
              return { href: a, as: e.as ? (0, c.resolveHref)(o, e.as) : u || a }
            },
            [o, e.href, e.as]
          ),
          d = f.href,
          p = f.as,
          v = e.children,
          h = e.replace,
          m = e.shallow,
          b = e.scroll,
          y = e.locale
        'string' === typeof v && (v = a.default.createElement('a', null, v))
        var g = a.Children.only(v),
          x = g && 'object' === typeof g && g.ref,
          w = (0, i.useIntersection)({ rootMargin: '200px' }),
          N = r(w, 2),
          O = N[0],
          E = N[1],
          _ = a.default.useCallback(
            function (e) {
              O(e), x && ('function' === typeof x ? x(e) : 'object' === typeof x && (x.current = e))
            },
            [x, O]
          )
        ;(0, a.useEffect)(
          function () {
            var e = E && t && (0, c.isLocalURL)(d),
              r = 'undefined' !== typeof y ? y : n && n.locale,
              o = l[d + '%' + p + (r ? '%' + r : '')]
            e && !o && s(n, d, p, { locale: r })
          },
          [p, d, E, y, t, n]
        )
        var k = {
          ref: _,
          onClick: function (e) {
            g.props && 'function' === typeof g.props.onClick && g.props.onClick(e),
              e.defaultPrevented ||
                (function (e, t, n, r, o, a, u, i) {
                  ;('A' !== e.currentTarget.nodeName ||
                    (!(function (e) {
                      var t = e.currentTarget.target
                      return (
                        (t && '_self' !== t) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which)
                      )
                    })(e) &&
                      (0, c.isLocalURL)(n))) &&
                    (e.preventDefault(),
                    null == u && (u = r.indexOf('#') < 0),
                    t[o ? 'replace' : 'push'](n, r, { shallow: a, locale: i, scroll: u }).then(
                      function (e) {
                        e && u && document.body.focus()
                      }
                    ))
                })(e, n, d, p, h, m, b, y)
          },
          onMouseEnter: function (e) {
            ;(0, c.isLocalURL)(d) &&
              (g.props && 'function' === typeof g.props.onMouseEnter && g.props.onMouseEnter(e),
              s(n, d, p, { priority: !0 }))
          },
        }
        if (e.passHref || ('a' === g.type && !('href' in g.props))) {
          var j = 'undefined' !== typeof y ? y : n && n.locale,
            L = (0, c.getDomainLocale)(p, j, n && n.locales, n && n.domainLocales)
          k.href = L || (0, c.addBasePath)((0, c.addLocale)(p, j, n && n.defaultLocale))
        }
        return a.default.cloneElement(g, k)
      }
      t.default = f
    },
    'uNx/': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'default', function () {
          return c
        })
      var r = n('FdF9'),
        o = n('YNhk'),
        a = r.default.createElement
      function c() {
        return a(
          'div',
          {
            className:
              'flex flex-col items-start justify-start md:justify-center md:items-center md:flex-row md:space-x-6 md:mt-24',
          },
          a(
            'div',
            { className: 'pt-6 pb-8 space-x-2 md:space-y-5' },
            a(
              'h1',
              {
                className:
                  'text-6xl font-extrabold leading-9 tracking-tight text-gray-100 md:text-8xl md:leading-14 md:border-r-2 md:px-6',
              },
              '404'
            )
          ),
          a(
            'div',
            { className: 'max-w-md' },
            a(
              'p',
              { className: 'mb-4 text-xl font-bold leading-normal md:text-2xl' },
              "Sorry we couldn't find this page."
            ),
            a(
              'p',
              { className: 'mb-8' },
              'But dont worry, you can find plenty of other things on our homepage.'
            ),
            a(
              o.a,
              { href: '/' },
              a(
                'button',
                {
                  className:
                    'inline px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg shadow focus:outline-none focus:shadow-outline-blue hover:bg-blue-500',
                },
                'Back to homepage'
              )
            )
          )
        )
      }
    },
    vNVm: function (e, t, n) {
      'use strict'
      var r = n('J4zp'),
        o = n('TqRt')
      ;(t.__esModule = !0),
        (t.useIntersection = function (e) {
          var t = e.rootMargin,
            n = e.disabled || !u,
            o = (0, a.useRef)(),
            l = (0, a.useState)(!1),
            s = r(l, 2),
            f = s[0],
            d = s[1],
            p = (0, a.useCallback)(
              function (e) {
                o.current && (o.current(), (o.current = void 0)),
                  n ||
                    f ||
                    (e &&
                      e.tagName &&
                      (o.current = (function (e, t, n) {
                        var r = (function (e) {
                            var t = e.rootMargin || '',
                              n = i.get(t)
                            if (n) return n
                            var r = new Map(),
                              o = new IntersectionObserver(function (e) {
                                e.forEach(function (e) {
                                  var t = r.get(e.target),
                                    n = e.isIntersecting || e.intersectionRatio > 0
                                  t && n && t(n)
                                })
                              }, e)
                            return i.set(t, (n = { id: t, observer: o, elements: r })), n
                          })(n),
                          o = r.id,
                          a = r.observer,
                          c = r.elements
                        return (
                          c.set(e, t),
                          a.observe(e),
                          function () {
                            c.delete(e),
                              a.unobserve(e),
                              0 === c.size && (a.disconnect(), i.delete(o))
                          }
                        )
                      })(
                        e,
                        function (e) {
                          return e && d(e)
                        },
                        { rootMargin: t }
                      )))
              },
              [n, t, f]
            )
          return (
            (0, a.useEffect)(
              function () {
                u ||
                  f ||
                  (0, c.default)(function () {
                    return d(!0)
                  })
              },
              [f]
            ),
            [p, f]
          )
        })
      var a = n('FdF9'),
        c = o(n('0G5g')),
        u = 'undefined' !== typeof IntersectionObserver
      var i = new Map()
    },
    wx14: function (e, t, n) {
      'use strict'
      function r() {
        return (r =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
          }).apply(this, arguments)
      }
      n.d(t, 'a', function () {
        return r
      })
    },
  },
  [['97Is', 0, 1, 2]],
])