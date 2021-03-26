_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [7],
  {
    0: function (e, t, n) {
      n('GcxT'), (e.exports = n('nOHt'))
    },
    '1TCz': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'default', function () {
          return j
        })
      var a = n('FdF9'),
        r = (n('rZxN'), n('7ljp')),
        l = n('g4pe'),
        i = n.n(l),
        o = Object(a.createContext)({ setTheme: function (e) {}, themes: [] }),
        c = function (e) {
          var t = e.forcedTheme,
            n = e.disableTransitionOnChange,
            r = void 0 !== n && n,
            l = e.enableSystem,
            i = void 0 === l || l,
            c = e.storageKey,
            m = void 0 === c ? 'theme' : c,
            f = e.themes,
            h = void 0 === f ? ['light', 'dark'] : f,
            v = e.defaultTheme,
            p = void 0 === v ? 'light' : v,
            g = e.attribute,
            w = void 0 === g ? 'data-theme' : g,
            y = e.value,
            b = e.children,
            x = Object(a.useState)(function () {
              return u(m)
            }),
            N = x[0],
            k = x[1],
            E = Object(a.useState)(function () {
              return u(m)
            }),
            T = E[0],
            O = E[1],
            j = y ? Object.values(y) : h,
            C = Object(a.useCallback)(function (e, t) {
              void 0 === t && (t = !0)
              var n = (null == y ? void 0 : y[e]) || e,
                a = r ? d() : null
              if (t)
                try {
                  localStorage.setItem(m, e)
                } catch (e) {}
              var l,
                i = document.documentElement
              'class' === w
                ? ((l = i.classList).remove.apply(l, j), i.classList.add(n))
                : i.setAttribute(w, n),
                null == a || a()
            }, []),
            z = Object(a.useCallback)(
              function (e) {
                var t = e.matches ? 'dark' : 'light'
                O(t), 'system' === N && C(t, !1)
              },
              [N]
            )
          Object(a.useEffect)(
            function () {
              if (i) {
                var e = window.matchMedia('(prefers-color-scheme: dark)')
                return (
                  e.addListener(z),
                  z(e),
                  function () {
                    return e.removeListener(z)
                  }
                )
              }
            },
            [z]
          )
          var _ = Object(a.useCallback)(function (e) {
            t || (C(e), k(e))
          }, [])
          return (
            Object(a.useEffect)(function () {
              var e = function (e) {
                e.key === m && _(e.newValue)
              }
              return (
                window.addEventListener('storage', e),
                function () {
                  return window.removeEventListener('storage', e)
                }
              )
            }, []),
            a.default.createElement(
              o.Provider,
              {
                value: {
                  theme: N,
                  setTheme: _,
                  forcedTheme: t,
                  resolvedTheme: 'system' === N ? T : N,
                  themes: i ? [].concat(h, ['system']) : h,
                  systemTheme: i ? T : void 0,
                },
              },
              a.default.createElement(s, {
                forcedTheme: t,
                storageKey: m,
                attribute: w,
                value: y,
                enableSystem: i,
                defaultTheme: p,
                attrs: j,
              }),
              b
            )
          )
        },
        s = Object(a.memo)(
          function (e) {
            var t = e.forcedTheme,
              n = e.storageKey,
              r = e.attribute,
              l = e.enableSystem,
              o = e.defaultTheme,
              c = e.value,
              s =
                'class' === r
                  ? 'var d=document.documentElement.classList;d.remove(' +
                    e.attrs
                      .map(function (e) {
                        return "'" + e + "'"
                      })
                      .join(',') +
                    ');'
                  : 'var d=document.documentElement;',
              u = function (e, t) {
                e = (null == c ? void 0 : c[e]) || e
                var n = t ? e : "'" + e + "'"
                return 'class' === r ? 'd.add(' + n + ')' : "d.setAttribute('" + r + "', " + n + ')'
              }
            return a.default.createElement(
              i.a,
              null,
              a.default.createElement(
                'script',
                t
                  ? {
                      key: 'next-themes-script',
                      dangerouslySetInnerHTML: { __html: '!function(){' + s + u(t) + '}()' },
                    }
                  : l
                  ? {
                      key: 'next-themes-script',
                      dangerouslySetInnerHTML: {
                        __html:
                          '!function(){try {' +
                          s +
                          "var e=localStorage.getItem('" +
                          n +
                          "');if(!e)return localStorage.setItem('" +
                          n +
                          "','" +
                          o +
                          "')," +
                          u(o) +
                          ';if("system"===e){var t="(prefers-color-scheme: dark)",m=window.matchMedia(t);m.media!==t||m.matches?' +
                          u('dark') +
                          ':' +
                          u('light') +
                          '}else ' +
                          (c ? 'var x=' + JSON.stringify(c) + ';' : '') +
                          u(c ? 'x[e]' : 'e', !0) +
                          '}catch(e){}}()',
                      },
                    }
                  : {
                      key: 'next-themes-script',
                      dangerouslySetInnerHTML: {
                        __html:
                          '!function(){try{' +
                          s +
                          'var t=localStorage.getItem("' +
                          n +
                          '");if(!t)return localStorage.setItem("' +
                          n +
                          '","' +
                          o +
                          '"),' +
                          u(o) +
                          ';' +
                          (c ? 'var x=' + JSON.stringify(c) + ';' : '') +
                          u(c ? 'x[t]' : 't', !0) +
                          '}catch(t){}}();',
                      },
                    }
              )
            )
          },
          function (e, t) {
            return e.forcedTheme === t.forcedTheme
          }
        ),
        u = function (e) {
          if ('undefined' != typeof window) {
            var t
            try {
              t = localStorage.getItem(e) || void 0
            } catch (e) {}
            return t
          }
        },
        d = function () {
          var e = document.createElement('style')
          return (
            e.appendChild(
              document.createTextNode(
                '*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}'
              )
            ),
            document.head.appendChild(e),
            function () {
              window.getComputedStyle(e), document.head.removeChild(e)
            }
          )
        },
        m = n('9ixD'),
        f = n('7+lg'),
        h = n('bsnj'),
        v = [
          { href: '/notes', title: 'Notes' },
          { href: '/tags', title: 'Tags' },
          { href: '/about', title: 'About' },
        ],
        p = n('YNhk'),
        g = n('Af6x'),
        w = n('y0sI'),
        y = a.default.createElement
      function b() {
        return y(
          'footer',
          null,
          y(
            'div',
            { className: 'flex flex-col items-center mt-16' },
            y(
              'div',
              { className: 'flex mb-3 space-x-4' },
              y(w.a, { kind: 'mail', href: 'mailto:'.concat(h.email), size: '6' }),
              y(w.a, { kind: 'github', href: h.github, size: '6' }),
              y(w.a, { kind: 'twitter', href: h.twitter, size: '6' }),
              y(w.a, { kind: 'linkedin', href: h.linkedin, size: '6' })
            ),
            y(
              'div',
              { className: 'flex mb-2 space-x-2 text-sm text-gray-400' },
              y('div', null, h.author),
              y('div', null, ' \u2022 '),
              y('div', null, '\xa9 2017'),
              y('div', null, ' \u2022 '),
              y(p.a, { href: '/' }, h.title)
            ),
            y('div', { className: 'mb-8 text-sm text-gray-400' }, '\xa0')
          )
        )
      }
      var x = a.default.createElement,
        N = function () {
          var e = Object(a.useState)(!1),
            t = e[0],
            n = e[1],
            r = function () {
              n(function (e) {
                return (document.body.style.overflow = e ? 'auto' : 'hidden'), !e
              })
            }
          return x(
            'div',
            { className: 'sm:hidden' },
            x(
              'button',
              {
                type: 'button',
                className: 'w-8 h-8 ml-1 mr-1 rounded',
                'aria-label': 'Toggle Menu',
                onClick: r,
              },
              x(
                'svg',
                {
                  xmlns: 'http://www.w3.org/2000/svg',
                  viewBox: '0 0 20 20',
                  fill: 'currentColor',
                  className: 'text-gray-100',
                },
                x(
                  'path',
                  t
                    ? {
                        fillRule: 'evenodd',
                        d:
                          'M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z',
                        clipRule: 'evenodd',
                      }
                    : {
                        fillRule: 'evenodd',
                        d:
                          'M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z',
                        clipRule: 'evenodd',
                      }
                )
              )
            ),
            x(
              'div',
              {
                className: 'fixed w-full h-full top-24 right-0 bg-gray-800 opacity-95 z-10 transform ease-in-out duration-300 '.concat(
                  t ? 'translate-x-0' : 'translate-x-full'
                ),
              },
              x('button', {
                type: 'button',
                'aria-label': 'toggle modal',
                className: 'fixed w-full h-full cursor-auto focus:outline-none',
                onClick: r,
              }),
              x(
                'nav',
                { className: 'fixed h-full mt-8' },
                v.map(function (e) {
                  return x(
                    'div',
                    { key: e.title, className: 'px-12 py-4' },
                    x(
                      p.a,
                      {
                        href: e.href,
                        className: 'text-2xl font-bold tracking-widest text-gray-100',
                        onClick: r,
                      },
                      e.title
                    )
                  )
                })
              )
            )
          )
        },
        k = a.default.createElement,
        E = function (e) {
          var t = e.children
          return k(
            g.a,
            null,
            k(
              'div',
              { className: 'flex flex-col justify-between h-screen' },
              k(
                'header',
                { className: 'flex items-center justify-between py-10' },
                k(
                  'div',
                  null,
                  k(
                    p.a,
                    { href: '/', 'aria-label': h.t },
                    k(
                      'div',
                      { className: 'flex items-center justify-between' },
                      'string' === typeof h.headerTitle
                        ? k('div', { className: 'h-6 text-2xl font-semibold' }, h.headerTitle)
                        : h.headerTitle
                    )
                  )
                ),
                k(
                  'div',
                  { className: 'flex items-center text-base leading-5' },
                  k(
                    'div',
                    { className: 'hidden sm:block' },
                    v.map(function (e) {
                      return k(
                        p.a,
                        {
                          key: e.title,
                          href: e.href,
                          className: 'p-1 font-medium sm:p-4 text-gray-100',
                        },
                        e.title
                      )
                    })
                  ),
                  k(N, null)
                )
              ),
              k('main', { className: 'mb-auto' }, t),
              k(b, null)
            )
          )
        },
        T = n('PpS8'),
        O = a.default.createElement
      function j(e) {
        var t = e.Component,
          n = e.pageProps
        return O(
          c,
          { attribute: 'class', invertTheme: !0 },
          O(
            r.MDXProvider,
            { components: T.a },
            O(
              i.a,
              null,
              O('meta', { content: 'width=device-width, initial-scale=1', name: 'viewport' })
            ),
            O(m.b, f.c),
            O(E, null, O(t, n))
          )
        )
      }
    },
    GcxT: function (e, t, n) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/_app',
        function () {
          return n('1TCz')
        },
      ])
    },
    rZxN: function (e, t, n) {},
    y0sI: function (e, t, n) {
      'use strict'
      var a = n('FdF9')
      function r() {
        return (r =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
            }
            return e
          }).apply(this, arguments)
      }
      var l = a.createElement('path', {
          d: 'M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z',
        }),
        i = a.createElement('path', {
          d: 'M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z',
        })
      var o = function (e) {
        return a.createElement(
          'svg',
          r({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 20 20' }, e),
          l,
          i
        )
      }
      function c() {
        return (c =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
            }
            return e
          }).apply(this, arguments)
      }
      var s = a.createElement('path', {
        d:
          'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12',
      })
      var u = function (e) {
        return a.createElement(
          'svg',
          c({ viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg' }, e),
          s
        )
      }
      function d() {
        return (d =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
            }
            return e
          }).apply(this, arguments)
      }
      var m = a.createElement('path', {
        d:
          'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
      })
      var f = function (e) {
        return a.createElement(
          'svg',
          d({ viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg' }, e),
          m
        )
      }
      function h() {
        return (h =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
            }
            return e
          }).apply(this, arguments)
      }
      var v = a.createElement('path', {
        d:
          'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z',
      })
      var p = function (e) {
          return a.createElement(
            'svg',
            h({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' }, e),
            v
          )
        },
        g = a.default.createElement,
        w = { mail: o, github: u, linkedin: f, twitter: p }
      t.a = function (e) {
        var t = e.kind,
          n = e.href,
          a = e.size,
          r = void 0 === a ? 8 : a,
          l = w[t]
        return g(
          'a',
          {
            className: 'text-sm text-gray-500 transition hover:text-gray-600',
            target: '_blank',
            rel: 'noopener noreferrer',
            href: n,
          },
          g('span', { className: 'sr-only' }, t),
          g(l, {
            className: 'fill-current text-gray-200 hover:text-blue-400 h-'
              .concat(r, ' w-')
              .concat(r),
          })
        )
      }
    },
  },
  [[0, 0, 1, 2, 3, 4]],
])
