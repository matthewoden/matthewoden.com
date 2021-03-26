_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [10],
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
        l = n('C/Fq'),
        c = r.default.createElement
      t.a = function (e) {
        var t = e.text
        return c(
          o.a,
          { href: '/tags/'.concat(Object(l.a)(t)) },
          c(
            'a',
            { className: 'mr-3 text-xs font-medium text-blue-500 lowercase hover:text-blue-400' },
            t.split(' ').join('-')
          )
        )
      }
    },
    RNiq: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, '__N_SSG', function () {
          return u
        }),
        n.d(t, 'default', function () {
          return f
        })
      var r = n('FdF9'),
        a = n('YNhk'),
        o = n('7+lg'),
        l = n('GQFt'),
        c = n('bsnj'),
        i = r.default.createElement,
        s = { year: 'numeric', month: 'long', day: 'numeric' },
        u = !0
      function f(e) {
        var t = e.posts
        return i(
          r.default.Fragment,
          null,
          i(o.b, { title: c.title, description: c.description, url: c.siteUrl }),
          i(
            'div',
            { className: 'divide-y divide-gray-700' },
            i(
              'div',
              { className: 'pt-6 pb-8 space-y-2 md:space-y-5' },
              i(
                'h1',
                {
                  className:
                    'text-3xl font-extrabold leading-9 tracking-tight text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14',
                },
                'Latest'
              ),
              i('p', { className: 'text-lg leading-7 text-gray-400' }, c.description)
            ),
            i(
              'ul',
              { className: 'divide-y divide-gray-700' },
              !t.length && 'No posts found.',
              t.slice(0, 5).map(function (e) {
                var t = e.slug,
                  n = e.date,
                  r = e.title,
                  o = e.summary,
                  u = e.tags,
                  f = void 0 === u ? [] : u
                return i(
                  'li',
                  { key: t, className: 'py-12' },
                  i(
                    'article',
                    null,
                    i(
                      'div',
                      {
                        className:
                          'space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline',
                      },
                      i(
                        'dl',
                        null,
                        i('dt', { className: 'sr-only' }, 'Published on'),
                        i(
                          'dd',
                          { className: 'text-base font-medium leading-6 text-gray-400' },
                          i('time', { dateTime: n }, new Date(n).toLocaleDateString(c.locale, s))
                        )
                      ),
                      i(
                        'div',
                        { className: 'space-y-5 xl:col-span-3' },
                        i(
                          'div',
                          { className: 'space-y-6' },
                          i(
                            'div',
                            null,
                            i(
                              'h2',
                              { className: 'text-2xl font-bold leading-8 tracking-tight' },
                              i(a.a, { href: '/notes/'.concat(t), className: 'text-gray-100' }, r)
                            ),
                            i(
                              'div',
                              { className: 'flex flex-wrap' },
                              f.map(function (e) {
                                return i(l.a, { key: e, text: e })
                              })
                            )
                          ),
                          i('div', { className: 'prose max-w-none text-gray-400' }, o)
                        ),
                        i(
                          'div',
                          { className: 'text-base font-medium leading-6' },
                          i(
                            a.a,
                            {
                              href: '/notes/'.concat(t),
                              className: 'text-blue-500 hover:text-blue-400',
                              'aria-label': 'Read "'.concat(r, '"'),
                            },
                            'Read more \u2192'
                          )
                        )
                      )
                    )
                  )
                )
              })
            )
          ),
          t.length > 5 &&
            i(
              'div',
              { className: 'flex justify-end text-base font-medium leading-6' },
              i(
                a.a,
                {
                  href: '/blog',
                  className: 'text-red-500 hover:text-blue-400',
                  'aria-label': 'all posts',
                },
                'All Posts \u2192'
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
        l = n('YFqc'),
        c = n.n(l),
        i = o.default.createElement
      t.a = function (e) {
        var t = e.href,
          n = a(e, ['href']),
          o = t && t.startsWith('/'),
          l = t && t.startsWith('#')
        return o
          ? i(c.a, { href: t }, i('a', n))
          : i(
              'a',
              l
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
        l = n('elyg'),
        c = n('nOHt'),
        i = n('vNVm'),
        s = {}
      function u(e, t, n, r) {
        if (e && (0, l.isLocalURL)(t)) {
          e.prefetch(t, n, r).catch(function (e) {
            0
          })
          var a = r && 'undefined' !== typeof r.locale ? r.locale : e && e.locale
          s[t + '%' + n + (a ? '%' + a : '')] = !0
        }
      }
      var f = function (e) {
        var t = !1 !== e.prefetch,
          n = (0, c.useRouter)(),
          a = (n && n.pathname) || '/',
          f = o.default.useMemo(
            function () {
              var t = (0, l.resolveHref)(a, e.href, !0),
                n = r(t, 2),
                o = n[0],
                c = n[1]
              return { href: o, as: e.as ? (0, l.resolveHref)(a, e.as) : c || o }
            },
            [a, e.href, e.as]
          ),
          d = f.href,
          p = f.as,
          v = e.children,
          m = e.replace,
          g = e.shallow,
          h = e.scroll,
          y = e.locale
        'string' === typeof v && (v = o.default.createElement('a', null, v))
        var b = o.Children.only(v),
          x = b && 'object' === typeof b && b.ref,
          N = (0, i.useIntersection)({ rootMargin: '200px' }),
          w = r(N, 2),
          _ = w[0],
          O = w[1],
          E = o.default.useCallback(
            function (e) {
              _(e), x && ('function' === typeof x ? x(e) : 'object' === typeof x && (x.current = e))
            },
            [x, _]
          )
        ;(0, o.useEffect)(
          function () {
            var e = O && t && (0, l.isLocalURL)(d),
              r = 'undefined' !== typeof y ? y : n && n.locale,
              a = s[d + '%' + p + (r ? '%' + r : '')]
            e && !a && u(n, d, p, { locale: r })
          },
          [p, d, O, y, t, n]
        )
        var F = {
          ref: E,
          onClick: function (e) {
            b.props && 'function' === typeof b.props.onClick && b.props.onClick(e),
              e.defaultPrevented ||
                (function (e, t, n, r, a, o, c, i) {
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
                      (0, l.isLocalURL)(n))) &&
                    (e.preventDefault(),
                    null == c && (c = r.indexOf('#') < 0),
                    t[a ? 'replace' : 'push'](n, r, { shallow: o, locale: i, scroll: c }).then(
                      function (e) {
                        e && c && document.body.focus()
                      }
                    ))
                })(e, n, d, p, m, g, h, y)
          },
          onMouseEnter: function (e) {
            ;(0, l.isLocalURL)(d) &&
              (b.props && 'function' === typeof b.props.onMouseEnter && b.props.onMouseEnter(e),
              u(n, d, p, { priority: !0 }))
          },
        }
        if (e.passHref || ('a' === b.type && !('href' in b.props))) {
          var j = 'undefined' !== typeof y ? y : n && n.locale,
            k = (0, l.getDomainLocale)(p, j, n && n.locales, n && n.domainLocales)
          F.href = k || (0, l.addBasePath)((0, l.addLocale)(p, j, n && n.defaultLocale))
        }
        return o.default.cloneElement(b, F)
      }
      t.default = f
    },
    vNVm: function (e, t, n) {
      'use strict'
      var r = n('J4zp'),
        a = n('TqRt')
      ;(t.__esModule = !0),
        (t.useIntersection = function (e) {
          var t = e.rootMargin,
            n = e.disabled || !c,
            a = (0, o.useRef)(),
            s = (0, o.useState)(!1),
            u = r(s, 2),
            f = u[0],
            d = u[1],
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
                          l = r.elements
                        return (
                          l.set(e, t),
                          o.observe(e),
                          function () {
                            l.delete(e),
                              o.unobserve(e),
                              0 === l.size && (o.disconnect(), i.delete(a))
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
                c ||
                  f ||
                  (0, l.default)(function () {
                    return d(!0)
                  })
              },
              [f]
            ),
            [p, f]
          )
        })
      var o = n('FdF9'),
        l = a(n('0G5g')),
        c = 'undefined' !== typeof IntersectionObserver
      var i = new Map()
    },
    vlRD: function (e, t, n) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/',
        function () {
          return n('RNiq')
        },
      ])
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
  [['vlRD', 0, 1, 2, 3]],
])
