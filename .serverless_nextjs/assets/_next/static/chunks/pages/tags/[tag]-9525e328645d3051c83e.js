_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [14],
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
        l = r.default.createElement
      t.a = function (e) {
        var t = e.text
        return l(
          o.a,
          { href: '/tags/'.concat(Object(c.a)(t)) },
          l(
            'a',
            { className: 'mr-3 text-xs font-medium text-blue-500 lowercase hover:text-blue-400' },
            t.split(' ').join('-')
          )
        )
      }
    },
    HEzw: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return i
      })
      var r = n('FdF9'),
        a = n('YNhk'),
        o = n('GQFt'),
        c = n('bsnj'),
        l = r.default.createElement,
        s = { year: 'numeric', month: 'long', day: 'numeric' }
      function i(e) {
        var t = e.posts,
          n = e.title,
          i = Object(r.useState)(''),
          u = i[0],
          f = i[1],
          d = t.filter(function (e) {
            return (e.title + e.summary + e.tags.join(' ')).toLowerCase().includes(u.toLowerCase())
          })
        return l(
          r.default.Fragment,
          null,
          l(
            'div',
            { className: 'divide-y' },
            l(
              'div',
              { className: 'pt-6 pb-8 space-y-2 md:space-y-5' },
              l(
                'h1',
                {
                  className:
                    'text-3xl font-extrabold leading-9 tracking-tight text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14',
                },
                n
              ),
              l(
                'div',
                { className: 'relative max-w-lg' },
                l('input', {
                  'aria-label': 'Search notes...',
                  type: 'text',
                  onChange: function (e) {
                    return f(e.target.value)
                  },
                  placeholder: 'Search notes...',
                  className:
                    'block w-full px-4 py-2 border rounded-md border-gray-900 focus:ring-blue-500 focus:border-blue-500 bg-gray-800 text-gray-100',
                }),
                l(
                  'svg',
                  {
                    className: 'absolute w-5 h-5 text-gray-300 right-3 top-3',
                    xmlns: 'http://www.w3.org/2000/svg',
                    fill: 'none',
                    viewBox: '0 0 24 24',
                    stroke: 'currentColor',
                  },
                  l('path', {
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeWidth: 2,
                    d: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
                  })
                )
              )
            ),
            l(
              'ul',
              null,
              !d.length && 'No posts found.',
              d.map(function (e) {
                var t = e.slug,
                  n = e.date,
                  r = e.title,
                  i = e.summary,
                  u = e.tags
                return l(
                  'li',
                  { key: t, className: 'py-4' },
                  l(
                    'article',
                    {
                      className: 'space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline',
                    },
                    l(
                      'dl',
                      null,
                      l('dt', { className: 'sr-only' }, 'Published on'),
                      l(
                        'dd',
                        { className: 'text-base font-medium leading-6 text-gray-400' },
                        l('time', { dateTime: n }, new Date(n).toLocaleDateString(c.locale, s))
                      )
                    ),
                    l(
                      'div',
                      { className: 'space-y-3 xl:col-span-3' },
                      l(
                        'div',
                        null,
                        l(
                          'h3',
                          { className: 'text-2xl font-bold leading-8 tracking-tight' },
                          l(a.a, { href: '/notes/'.concat(t), className: 'text-gray-100' }, r)
                        ),
                        l(
                          'div',
                          { className: 'flex flex-wrap' },
                          u.map(function (e) {
                            return l(o.a, { key: e, text: e })
                          })
                        )
                      ),
                      l('div', { className: 'prose max-w-none text-gray-400' }, i)
                    )
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
        l = n.n(c),
        s = o.default.createElement
      t.a = function (e) {
        var t = e.href,
          n = a(e, ['href']),
          o = t && t.startsWith('/'),
          c = t && t.startsWith('#')
        return o
          ? s(l.a, { href: t }, s('a', n))
          : s(
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
        l = n('nOHt'),
        s = n('vNVm'),
        i = {}
      function u(e, t, n, r) {
        if (e && (0, c.isLocalURL)(t)) {
          e.prefetch(t, n, r).catch(function (e) {
            0
          })
          var a = r && 'undefined' !== typeof r.locale ? r.locale : e && e.locale
          i[t + '%' + n + (a ? '%' + a : '')] = !0
        }
      }
      var f = function (e) {
        var t = !1 !== e.prefetch,
          n = (0, l.useRouter)(),
          a = (n && n.pathname) || '/',
          f = o.default.useMemo(
            function () {
              var t = (0, c.resolveHref)(a, e.href, !0),
                n = r(t, 2),
                o = n[0],
                l = n[1]
              return { href: o, as: e.as ? (0, c.resolveHref)(a, e.as) : l || o }
            },
            [a, e.href, e.as]
          ),
          d = f.href,
          p = f.as,
          m = e.children,
          v = e.replace,
          g = e.shallow,
          h = e.scroll,
          y = e.locale
        'string' === typeof m && (m = o.default.createElement('a', null, m))
        var b = o.Children.only(m),
          w = b && 'object' === typeof b && b.ref,
          x = (0, s.useIntersection)({ rootMargin: '200px' }),
          N = r(x, 2),
          j = N[0],
          E = N[1],
          F = o.default.useCallback(
            function (e) {
              j(e), w && ('function' === typeof w ? w(e) : 'object' === typeof w && (w.current = e))
            },
            [w, j]
          )
        ;(0, o.useEffect)(
          function () {
            var e = E && t && (0, c.isLocalURL)(d),
              r = 'undefined' !== typeof y ? y : n && n.locale,
              a = i[d + '%' + p + (r ? '%' + r : '')]
            e && !a && u(n, d, p, { locale: r })
          },
          [p, d, E, y, t, n]
        )
        var O = {
          ref: F,
          onClick: function (e) {
            b.props && 'function' === typeof b.props.onClick && b.props.onClick(e),
              e.defaultPrevented ||
                (function (e, t, n, r, a, o, l, s) {
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
                    null == l && (l = r.indexOf('#') < 0),
                    t[a ? 'replace' : 'push'](n, r, { shallow: o, locale: s, scroll: l }).then(
                      function (e) {
                        e && l && document.body.focus()
                      }
                    ))
                })(e, n, d, p, v, g, h, y)
          },
          onMouseEnter: function (e) {
            ;(0, c.isLocalURL)(d) &&
              (b.props && 'function' === typeof b.props.onMouseEnter && b.props.onMouseEnter(e),
              u(n, d, p, { priority: !0 }))
          },
        }
        if (e.passHref || ('a' === b.type && !('href' in b.props))) {
          var _ = 'undefined' !== typeof y ? y : n && n.locale,
            k = (0, c.getDomainLocale)(p, _, n && n.locales, n && n.domainLocales)
          O.href = k || (0, c.addBasePath)((0, c.addLocale)(p, _, n && n.defaultLocale))
        }
        return o.default.cloneElement(b, O)
      }
      t.default = f
    },
    jotU: function (e, t, n) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/tags/[tag]',
        function () {
          return n('wKwj')
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
            n = e.disabled || !l,
            a = (0, o.useRef)(),
            i = (0, o.useState)(!1),
            u = r(i, 2),
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
                              n = s.get(t)
                            if (n) return n
                            var r = new Map(),
                              a = new IntersectionObserver(function (e) {
                                e.forEach(function (e) {
                                  var t = r.get(e.target),
                                    n = e.isIntersecting || e.intersectionRatio > 0
                                  t && n && t(n)
                                })
                              }, e)
                            return s.set(t, (n = { id: t, observer: a, elements: r })), n
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
                              0 === c.size && (o.disconnect(), s.delete(a))
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
                l ||
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
        l = 'undefined' !== typeof IntersectionObserver
      var s = new Map()
    },
    wKwj: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, '__N_SSG', function () {
          return s
        }),
        n.d(t, 'default', function () {
          return i
        })
      var r = n('FdF9'),
        a = n('bsnj'),
        o = n('HEzw'),
        c = n('7+lg'),
        l = r.default.createElement,
        s = !0
      function i(e) {
        var t = e.posts,
          n = e.tag,
          s = n[0].toUpperCase() + n.split(' ').join('-').slice(1)
        return l(
          r.default.Fragment,
          null,
          l(c.b, {
            title: ''.concat(n, ' - ').concat(a.title),
            description: ''.concat(n, ' tags - ').concat(a.title),
            url: ''.concat(a.siteUrl, '/tags/').concat(n),
          }),
          l(o.a, { posts: t, title: s })
        )
      }
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
  [['jotU', 0, 1, 2, 3]],
])
