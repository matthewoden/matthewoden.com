_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [12],
  {
    'C/Fq': function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return n
      })
      var n = function (e) {
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
    GQFt: function (e, t, a) {
      'use strict'
      var n = a('FdF9'),
        l = a('YFqc'),
        r = a.n(l),
        c = a('C/Fq'),
        s = n.default.createElement
      t.a = function (e) {
        var t = e.text
        return s(
          r.a,
          { href: '/tags/'.concat(Object(c.a)(t)) },
          s(
            'a',
            { className: 'mr-3 text-xs font-medium text-blue-500 lowercase hover:text-blue-400' },
            t.split(' ').join('-')
          )
        )
      }
    },
    J3Rv: function (e, t, a) {
      a('aoOK')
      var n = a('FdF9'),
        l = a('7ljp')
      e.exports = function (e, t) {
        var a = e.compiledSource,
          r = e.renderedOutput,
          c = e.scope || {},
          s = (t && t.components) || {},
          o = t && t.provider,
          i = n.useState(n.createElement('div', { dangerouslySetInnerHTML: { __html: r } })),
          d = i[0],
          u = i[1]
        return 'undefined' === typeof window
          ? d
          : (n.useEffect(
              function () {
                var e = window.requestIdleCallback(function () {
                  var t = Object.assign({ mdx: l.mdx }, s, c),
                    r = Object.keys(t),
                    o = Object.values(t),
                    i = Reflect.construct(
                      Function,
                      ['React']
                        .concat(r)
                        .concat(a + '\nreturn React.createElement(MDXContent, {});')
                    ),
                    d = i.apply(i, [n].concat(o)),
                    m = n.createElement(l.MDXProvider, { components: s }, d)
                  u(m), window.cancelIdleCallback(e)
                })
              },
              [a]
            ),
            o ? n.createElement(o.component, o.props || {}, d) : d)
      }
    },
    aoOK: function (e, t) {
      'undefined' !== typeof window &&
        ((window.requestIdleCallback =
          window.requestIdleCallback ||
          function (e) {
            var t = Date.now()
            return setTimeout(function () {
              e({
                didTimeout: !1,
                timeRemaining: function () {
                  return Math.max(0, 50 - (Date.now() - t))
                },
              })
            }, 1)
          }),
        (window.cancelIdleCallback =
          window.cancelIdleCallback ||
          function (e) {
            clearTimeout(e)
          }))
    },
    esEh: function (e, t, a) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/notes/[slug]',
        function () {
          return a('v0U0')
        },
      ])
    },
    v0U0: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, '__N_SSG', function () {
          return y
        }),
        a.d(t, 'default', function () {
          return h
        })
      var n = a('FdF9'),
        l = a('J3Rv'),
        r = a.n(l),
        c = a('wx14'),
        s = a('YNhk'),
        o = n.default.createElement
      function i(e) {
        var t = e.children
        return o(
          'h1',
          {
            className:
              'text-3xl font-extrabold leading-9 tracking-tight text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14',
          },
          t
        )
      }
      var d = a('Af6x'),
        u = a('7+lg'),
        m = a('GQFt'),
        x = a('bsnj'),
        p = n.default.createElement,
        f = function (e) {
          return ''.concat(x.siteRepo, '/blob/master/data/notes/').concat(e)
        },
        v = function (e) {
          return 'https://mobile.twitter.com/search?q='.concat(
            encodeURIComponent(''.concat(x.siteUrl, '/notes/').concat(e))
          )
        },
        w = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
      function g(e) {
        var t = e.children,
          a = e.frontMatter,
          n = e.next,
          l = e.prev,
          r = a.slug,
          o = a.fileName,
          g = a.date,
          b = a.title,
          N = a.tags
        return p(
          d.a,
          null,
          p(u.a, Object(c.a)({ url: ''.concat(x.siteUrl, '/notes/').concat(a.slug) }, a)),
          p(
            'article',
            null,
            p(
              'div',
              { className: 'xl:divide-y xl:divide-gray-700' },
              p(
                'header',
                { className: 'pt-6 xl:pb-6' },
                p(
                  'div',
                  { className: 'space-y-1 text-center' },
                  p(
                    'dl',
                    { className: 'space-y-10' },
                    p(
                      'div',
                      null,
                      p('dt', { className: 'sr-only' }, 'Published on'),
                      p(
                        'dd',
                        { className: 'text-base font-medium leading-6 text-gray-400' },
                        p('time', { dateTime: g }, new Date(g).toLocaleDateString(x.locale, w))
                      )
                    )
                  ),
                  p('div', null, p(i, null, b))
                )
              ),
              p(
                'div',
                {
                  className:
                    'pb-8 divide-y xl:divide-y-0 divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6',
                  style: { gridTemplateRows: 'auto 1fr' },
                },
                p(
                  'dl',
                  { className: 'pt-6 pb-10 xl:pt-11 xl:border-b  xl:border-gray-700' },
                  p('dt', { className: 'sr-only' }, 'Authors'),
                  p(
                    'dd',
                    null,
                    p(
                      'ul',
                      {
                        className:
                          'flex justify-center space-x-8 xl:block sm:space-x-12 xl:space-x-0 xl:space-y-8',
                      },
                      p(
                        'li',
                        { className: 'flex items-center space-x-2' },
                        p('img', {
                          src: x.image,
                          alt: 'avatar',
                          className: 'w-10 h-10 rounded-full',
                        }),
                        p(
                          'dl',
                          { className: 'text-sm font-medium leading-5 whitespace-nowrap' },
                          p('dt', { className: 'sr-only' }, 'Name'),
                          p('dd', { className: 'text-gray-100' }, x.author),
                          p('dt', { className: 'sr-only' }, 'Twitter'),
                          p(
                            'dd',
                            null,
                            p(
                              s.a,
                              { href: x.twitter, className: 'text-blue-500 hover:text-blue-400' },
                              x.twitter.replace('https://twitter.com/', '@')
                            )
                          )
                        )
                      )
                    )
                  )
                ),
                p(
                  'div',
                  { className: 'divide-y divide-gray-700 xl:pb-0 xl:col-span-3 xl:row-span-2' },
                  p('div', { className: 'pt-10 pb-8 prose prose-dark max-w-none' }, t),
                  p(
                    'div',
                    { className: 'pt-6 pb-6 text-sm text-gray-700 text-gray-300' },
                    p(s.a, { href: v(r), rel: 'nofollow' }, 'Discuss on Twitter'),
                    ' \u2022 ',
                    p(s.a, { href: f(o) }, 'View on GitHub')
                  )
                ),
                p(
                  'footer',
                  null,
                  p(
                    'div',
                    {
                      className:
                        'text-sm font-medium leading-5 xl:divide-y divide-gray-700 xl:col-start-1 xl:row-start-2',
                    },
                    N &&
                      p(
                        'div',
                        { className: 'py-4 xl:py-8' },
                        p(
                          'h2',
                          { className: 'text-xs tracking-wide uppercase text-gray-400' },
                          'Tags'
                        ),
                        p(
                          'div',
                          { className: 'flex flex-wrap' },
                          N.map(function (e) {
                            return p(m.a, { key: e, text: e })
                          })
                        )
                      ),
                    (n || l) &&
                      p(
                        'div',
                        { className: 'flex justify-between py-4 xl:block xl:space-y-8 xl:py-8' },
                        l &&
                          p(
                            'div',
                            null,
                            p(
                              'h2',
                              { className: 'text-xs tracking-wide  uppercase text-gray-400' },
                              'Previous Article'
                            ),
                            p(
                              'div',
                              { className: 'text-blue-500 hover:text-blue-400' },
                              p(s.a, { href: '/notes/'.concat(l.slug) }, l.title)
                            )
                          ),
                        n &&
                          p(
                            'div',
                            null,
                            p(
                              'h2',
                              { className: 'text-xs tracking-wide uppercase text-gray-400' },
                              'Next Article'
                            ),
                            p(
                              'div',
                              { className: 'text-blue-500 hover:text-blue-400' },
                              p(s.a, { href: '/notes/'.concat(n.slug) }, n.title)
                            )
                          )
                      )
                  ),
                  p(
                    'div',
                    { className: 'pt-4 xl:pt-8' },
                    p(
                      s.a,
                      { href: '/notes', className: 'text-blue-500 hover:text-blue-400' },
                      '\u2190 Back to Notes'
                    )
                  )
                )
              )
            )
          )
        )
      }
      var b = a('PpS8'),
        N = n.default.createElement,
        y = !0
      function h(e) {
        var t = e.post,
          a = e.prev,
          l = e.next,
          c = t.mdxSource,
          s = t.frontMatter,
          o = r()(c, { components: b.a })
        return N(
          n.default.Fragment,
          null,
          !0 !== s.draft
            ? N(g, { frontMatter: s, prev: a, next: l }, o)
            : N(
                'div',
                { className: 'mt-24 text-center' },
                N(
                  i,
                  null,
                  'Under Construction',
                  ' ',
                  N('span', { role: 'img', 'aria-label': 'roadwork sign' }, '\ud83d\udea7')
                )
              )
        )
      }
    },
  },
  [['esEh', 0, 1, 2, 3, 4]],
])
