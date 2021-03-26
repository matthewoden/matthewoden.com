_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [13],
  {
    'C/Fq': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return r
      })
      var r = function (e) {
        return (
          e &&
          e
            .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
            .map(function (e) {
              return e.toLowerCase()
            })
            .join('-')
        )
      }
    },
    GQFt: function (e, t, n) {
      'use strict'
      var r = n('FdF9'),
        a = n('YFqc'),
        o = n.n(a),
        c = n('C/Fq'),
        s = r.default.createElement
      t.a = function (e) {
        var t = e.text
        return s(
          o.a,
          { href: '/tags/'.concat(Object(c.a)(t)) },
          s(
            'a',
            { className: 'mr-3 text-xs font-medium text-blue-500 lowercase hover:text-blue-400' },
            t.split(' ').join('-')
          )
        )
      }
    },
    LwLK: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, '__N_SSG', function () {
          return l
        }),
        n.d(t, 'default', function () {
          return f
        })
      var r = n('FdF9'),
        a = n('bsnj'),
        o = n('C/Fq'),
        c = n('GQFt'),
        s = n('YNhk'),
        i = n('7+lg'),
        u = r.default.createElement,
        l = !0
      function f(e) {
        var t = e.tags,
          n = Object.keys(t).sort(function (e, n) {
            return t[n] - t[e]
          })
        return u(
          r.default.Fragment,
          null,
          u(i.b, {
            title: 'Tags - '.concat(a.author),
            description: 'Tags and categories for my notes and posts',
            url: ''.concat(a.siteUrl, '/tags'),
          }),
          u(
            'div',
            {
              className:
                'flex flex-col items-start justify-start divide-y divide-gray-700 md:justify-center md:items-center md:divide-y-0 md:flex-row md:space-x-6 md:mt-24',
            },
            u(
              'div',
              { className: 'pt-6 pb-8 space-x-2 md:space-y-5' },
              u(
                'h1',
                {
                  className:
                    'text-3xl font-extrabold leading-9 tracking-tight text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 md:border-r-2 md:px-6',
                },
                'Tags'
              )
            ),
            u(
              'div',
              { className: 'flex flex-wrap max-w-lg' },
              0 === Object.keys(t).length && 'No tags found.',
              n.map(function (e) {
                return u(
                  'div',
                  { key: e, className: 'mt-2 mb-2 mr-5' },
                  u(c.a, { text: e }),
                  u(
                    s.a,
                    {
                      href: '/tags/'.concat(Object(o.a)(e)),
                      className: '-ml-2 text-sm font-semibold uppercase text-gray-300',
                    },
                    ' ('.concat(t[e], ')')
                  )
                )
              })
            )
          )
        )
      }
    },
    YFqc: function (e, t, n) {
      e.exports = n('cTJO')
    },
    YNhk: function (e, t, n) {
      'use strict'
      var r = n('wx14')
      function a(e, t) {
        if (null == e) return {}
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {}
            var n,
              r,
              a = {},
              o = Object.keys(e)
            for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n])
            return a
          })(e, t)
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e)
          for (r = 0; r < o.length; r++)
            (n = o[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]))
        }
        return a
      }
      var o = n('FdF9'),
        c = n('YFqc'),
        s = n.n(c),
        i = o.default.createElement
      t.a = function (e) {
        var t = e.href,
          n = a(e, ['href']),
          o = t && t.startsWith('/'),
          c = t && t.startsWith('#')
        return o
          ? i(s.a, { href: t }, i('a', n))
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
        a = n('284h')
      ;(t.__esModule = !0), (t.default = void 0)
      var o = a(n('FdF9')),
        c = n('elyg'),
        s = n('nOHt'),
        i = n('vNVm'),
        u = {}
      function l(e, t, n, r) {
        if (e && (0, c.isLocalURL)(t)) {
          e.prefetch(t, n, r).catch(function (e) {
            0
          })
          var a = r && 'undefined' !== typeof r.locale ? r.locale : e && e.locale
          u[t + '%' + n + (a ? '%' + a : '')] = !0
        }
      }
      var f = function (e) {
        var t = !1 !== e.prefetch,
          n = (0, s.useRouter)(),
          a = (n && n.pathname) || '/',
          f = o.default.useMemo(
            function () {
              var t = (0, c.resolveHref)(a, e.href, !0),
                n = r(t, 2),
                o = n[0],
                s = n[1]
              return { href: o, as: e.as ? (0, c.resolveHref)(a, e.as) : s || o }
            },
            [a, e.href, e.as]
          ),
          d = f.href,
          p = f.as,
          v = e.children,
          m = e.replace,
          h = e.shallow,
          g = e.scroll,
          y = e.locale
        'string' === typeof v && (v = o.default.createElement('a', null, v))
        var b = o.Children.only(v),
          x = b && 'object' === typeof b && b.ref,
          w = (0, i.useIntersection)({ rootMargin: '200px' }),
          O = r(w, 2),
          N = O[0],
          _ = O[1],
          j = o.default.useCallback(
            function (e) {
              N(e), x && ('function' === typeof x ? x(e) : 'object' === typeof x && (x.current = e))
            },
            [x, N]
          )
        ;(0, o.useEffect)(
          function () {
            var e = _ && t && (0, c.isLocalURL)(d),
              r = 'undefined' !== typeof y ? y : n && n.locale,
              a = u[d + '%' + p + (r ? '%' + r : '')]
            e && !a && l(n, d, p, { locale: r })
          },
          [p, d, _, y, t, n]
        )
        var E = {
          ref: j,
          onClick: function (e) {
            b.props && 'function' === typeof b.props.onClick && b.props.onClick(e),
              e.defaultPrevented ||
                (function (e, t, n, r, a, o, s, i) {
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
                    null == s && (s = r.indexOf('#') < 0),
                    t[a ? 'replace' : 'push'](n, r, { shallow: o, locale: i, scroll: s }).then(
                      function (e) {
                        e && s && document.body.focus()
                      }
                    ))
                })(e, n, d, p, m, h, g, y)
          },
          onMouseEnter: function (e) {
            ;(0, c.isLocalURL)(d) &&
              (b.props && 'function' === typeof b.props.onMouseEnter && b.props.onMouseEnter(e),
              l(n, d, p, { priority: !0 }))
          },
        }
        if (e.passHref || ('a' === b.type && !('href' in b.props))) {
          var F = 'undefined' !== typeof y ? y : n && n.locale,
            L = (0, c.getDomainLocale)(p, F, n && n.locales, n && n.domainLocales)
          E.href = L || (0, c.addBasePath)((0, c.addLocale)(p, F, n && n.defaultLocale))
        }
        return o.default.cloneElement(b, E)
      }
      t.default = f
    },
    tNhp: function (e, t, n) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/tags',
        function () {
          return n('LwLK')
        },
      ])
    },
    vNVm: function (e, t, n) {
      'use strict'
      var r = n('J4zp'),
        a = n('TqRt')
      ;(t.__esModule = !0),
        (t.useIntersection = function (e) {
          var t = e.rootMargin,
            n = e.disabled || !s,
            a = (0, o.useRef)(),
            u = (0, o.useState)(!1),
            l = r(u, 2),
            f = l[0],
            d = l[1],
            p = (0, o.useCallback)(
              function (e) {
                a.current && (a.current(), (a.current = void 0)),
                  n ||
                    f ||
                    (e &&
                      e.tagName &&
                      (a.current = (function (e, t, n) {
                        var r = (function (e) {
                            var t = e.rootMargin || '',
                              n = i.get(t)
                            if (n) return n
                            var r = new Map(),
                              a = new IntersectionObserver(function (e) {
                                e.forEach(function (e) {
                                  var t = r.get(e.target),
                                    n = e.isIntersecting || e.intersectionRatio > 0
                                  t && n && t(n)
                                })
                              }, e)
                            return i.set(t, (n = { id: t, observer: a, elements: r })), n
                          })(n),
                          a = r.id,
                          o = r.observer,
                          c = r.elements
                        return (
                          c.set(e, t),
                          o.observe(e),
                          function () {
                            c.delete(e),
                              o.unobserve(e),
                              0 === c.size && (o.disconnect(), i.delete(a))
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
            (0, o.useEffect)(
              function () {
                s ||
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
      var o = n('FdF9'),
        c = a(n('0G5g')),
        s = 'undefined' !== typeof IntersectionObserver
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
  [['tNhp', 0, 1, 2, 3]],
])
