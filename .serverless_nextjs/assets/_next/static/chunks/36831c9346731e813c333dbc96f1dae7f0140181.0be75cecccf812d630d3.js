;(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [3],
  {
    '/0+H': function (e, t, a) {
      'use strict'
      ;(t.__esModule = !0),
        (t.isInAmpMode = i),
        (t.useAmp = function () {
          return i(o.default.useContext(r.AmpStateContext))
        })
      var n,
        o = (n = a('FdF9')) && n.__esModule ? n : { default: n },
        r = a('lwAK')
      function i() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.ampFirst,
          a = void 0 !== t && t,
          n = e.hybrid,
          o = void 0 !== n && n,
          r = e.hasQuery,
          i = void 0 !== r && r
        return a || (o && i)
      }
    },
    '7+lg': function (e, t, a) {
      'use strict'
      a.d(t, 'c', function () {
        return p
      }),
        a.d(t, 'b', function () {
          return l
        }),
        a.d(t, 'a', function () {
          return d
        })
      var n = a('FdF9'),
        o = a('9ixD'),
        r = a('bsnj'),
        i = n.default.createElement,
        p = {
          title: r.title,
          description: r.description,
          openGraph: {
            type: 'website',
            locale: r.language,
            url: r.siteUrl,
            title: r.title,
            description: r.description,
            images: [
              {
                url: ''.concat(r.siteUrl).concat(r.socialBanner),
                alt: r.title,
                width: 1200,
                height: 600,
              },
            ],
          },
          twitter: { handle: r.twitter, site: r.twitter, cardType: 'summary_large_image' },
          additionalMetaTags: [{ name: 'author', content: r.author }],
        },
        l = function (e) {
          var t = e.title,
            a = e.description,
            n = e.url
          return i(o.c, {
            title: ''.concat(t, ' \u2013 ').concat(r.title),
            description: a,
            canonical: n,
            openGraph: { url: n, title: t, description: a },
          })
        },
        d = function (e) {
          var t = e.title,
            a = e.summary,
            p = e.date,
            l = e.lastmod,
            d = e.url,
            c = e.tags,
            u = e.images,
            h = void 0 === u ? [] : u,
            s = new Date(p).toISOString(),
            f = new Date(l || p).toISOString(),
            m = (0 === h.length ? [r.socialBanner] : 'string' === typeof h ? [h] : h).map(function (
              e
            ) {
              return { url: ''.concat(r.siteUrl).concat(e), alt: t }
            })
          return i(
            n.default.Fragment,
            null,
            i(o.c, {
              title: ''.concat(t, ' \u2013 ').concat(r.title),
              description: a,
              canonical: d,
              openGraph: {
                type: 'article',
                article: {
                  publishedTime: s,
                  modifiedTime: f,
                  authors: [''.concat(r.siteUrl, '/about')],
                  tags: c,
                },
                url: d,
                title: t,
                description: a,
                images: m,
              },
              additionalMetaTags: [{ name: 'twitter:image', content: m[0].url }],
            }),
            i(o.a, {
              authorName: r.author,
              dateModified: s,
              datePublished: f,
              description: a,
              images: m,
              publisherName: r.author,
              title: t,
              url: d,
            })
          )
        }
    },
    '8Kt/': function (e, t, a) {
      'use strict'
      a('lSNA')
      ;(t.__esModule = !0), (t.defaultHead = c), (t.default = void 0)
      var n,
        o = (function (e) {
          if (e && e.__esModule) return e
          if (null === e || ('object' !== typeof e && 'function' !== typeof e))
            return { default: e }
          var t = d()
          if (t && t.has(e)) return t.get(e)
          var a = {},
            n = Object.defineProperty && Object.getOwnPropertyDescriptor
          for (var o in e)
            if (Object.prototype.hasOwnProperty.call(e, o)) {
              var r = n ? Object.getOwnPropertyDescriptor(e, o) : null
              r && (r.get || r.set) ? Object.defineProperty(a, o, r) : (a[o] = e[o])
            }
          ;(a.default = e), t && t.set(e, a)
          return a
        })(a('FdF9')),
        r = (n = a('Xuae')) && n.__esModule ? n : { default: n },
        i = a('lwAK'),
        p = a('FYa8'),
        l = a('/0+H')
      function d() {
        if ('function' !== typeof WeakMap) return null
        var e = new WeakMap()
        return (
          (d = function () {
            return e
          }),
          e
        )
      }
      function c() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          t = [o.default.createElement('meta', { charSet: 'utf-8' })]
        return (
          e ||
            t.push(
              o.default.createElement('meta', { name: 'viewport', content: 'width=device-width' })
            ),
          t
        )
      }
      function u(e, t) {
        return 'string' === typeof t || 'number' === typeof t
          ? e
          : t.type === o.default.Fragment
          ? e.concat(
              o.default.Children.toArray(t.props.children).reduce(function (e, t) {
                return 'string' === typeof t || 'number' === typeof t ? e : e.concat(t)
              }, [])
            )
          : e.concat(t)
      }
      var h = ['name', 'httpEquiv', 'charSet', 'itemProp']
      function s(e, t) {
        return e
          .reduce(function (e, t) {
            var a = o.default.Children.toArray(t.props.children)
            return e.concat(a)
          }, [])
          .reduce(u, [])
          .reverse()
          .concat(c(t.inAmpMode))
          .filter(
            (function () {
              var e = new Set(),
                t = new Set(),
                a = new Set(),
                n = {}
              return function (o) {
                var r = !0,
                  i = !1
                if (o.key && 'number' !== typeof o.key && o.key.indexOf('$') > 0) {
                  i = !0
                  var p = o.key.slice(o.key.indexOf('$') + 1)
                  e.has(p) ? (r = !1) : e.add(p)
                }
                switch (o.type) {
                  case 'title':
                  case 'base':
                    t.has(o.type) ? (r = !1) : t.add(o.type)
                    break
                  case 'meta':
                    for (var l = 0, d = h.length; l < d; l++) {
                      var c = h[l]
                      if (o.props.hasOwnProperty(c))
                        if ('charSet' === c) a.has(c) ? (r = !1) : a.add(c)
                        else {
                          var u = o.props[c],
                            s = n[c] || new Set()
                          ;('name' === c && i) || !s.has(u) ? (s.add(u), (n[c] = s)) : (r = !1)
                        }
                    }
                }
                return r
              }
            })()
          )
          .reverse()
          .map(function (e, t) {
            var a = e.key || t
            return o.default.cloneElement(e, { key: a })
          })
      }
      function f(e) {
        var t = e.children,
          a = (0, o.useContext)(i.AmpStateContext),
          n = (0, o.useContext)(p.HeadManagerContext)
        return o.default.createElement(
          r.default,
          { reduceComponentsToState: s, headManager: n, inAmpMode: (0, l.isInAmpMode)(a) },
          t
        )
      }
      f.rewind = function () {}
      var m = f
      t.default = m
    },
    '9ixD': function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return s
      }),
        a.d(t, 'b', function () {
          return d
        }),
        a.d(t, 'c', function () {
          return c
        })
      var n = a('g4pe'),
        o = a.n(n),
        r = a('FdF9')
      function i(e, t) {
        ;(e.prototype = Object.create(t.prototype)),
          (e.prototype.constructor = e),
          (e.__proto__ = t)
      }
      var p = {
          templateTitle: '',
          noindex: !1,
          nofollow: !1,
          defaultOpenGraphImageWidth: 0,
          defaultOpenGraphImageHeight: 0,
          defaultOpenGraphVideoWidth: 0,
          defaultOpenGraphVideoHeight: 0,
        },
        l = function (e) {
          var t = []
          e.titleTemplate && (p.templateTitle = e.titleTemplate)
          var a = ''
          e.title &&
            ((a = e.title),
            p.templateTitle &&
              (a = p.templateTitle.replace(/%s/g, function () {
                return a
              })),
            t.push(r.default.createElement('title', { key: 'title' }, a)))
          var n = e.noindex || p.noindex || e.dangerouslySetAllPagesToNoIndex,
            o = e.nofollow || p.nofollow || e.dangerouslySetAllPagesToNoFollow
          if (
            (n || o
              ? (e.dangerouslySetAllPagesToNoIndex && (p.noindex = !0),
                e.dangerouslySetAllPagesToNoFollow && (p.nofollow = !0),
                t.push(
                  r.default.createElement('meta', {
                    key: 'robots',
                    name: 'robots',
                    content: (n ? 'noindex' : 'index') + ',' + (o ? 'nofollow' : 'follow'),
                  })
                ),
                t.push(
                  r.default.createElement('meta', {
                    key: 'googlebot',
                    name: 'googlebot',
                    content: (n ? 'noindex' : 'index') + ',' + (o ? 'nofollow' : 'follow'),
                  })
                ))
              : (t.push(
                  r.default.createElement('meta', {
                    key: 'robots',
                    name: 'robots',
                    content: 'index,follow',
                  })
                ),
                t.push(
                  r.default.createElement('meta', {
                    key: 'googlebot',
                    name: 'googlebot',
                    content: 'index,follow',
                  })
                )),
            e.description &&
              t.push(
                r.default.createElement('meta', {
                  key: 'description',
                  name: 'description',
                  content: e.description,
                })
              ),
            e.mobileAlternate &&
              t.push(
                r.default.createElement('link', {
                  rel: 'alternate',
                  key: 'mobileAlternate',
                  media: e.mobileAlternate.media,
                  href: e.mobileAlternate.href,
                })
              ),
            e.languageAlternates &&
              e.languageAlternates.length > 0 &&
              e.languageAlternates.forEach(function (e) {
                t.push(
                  r.default.createElement('link', {
                    rel: 'alternate',
                    key: 'languageAlternate-' + e.hrefLang,
                    hrefLang: e.hrefLang,
                    href: e.href,
                  })
                )
              }),
            e.twitter &&
              (e.twitter.cardType &&
                t.push(
                  r.default.createElement('meta', {
                    key: 'twitter:card',
                    name: 'twitter:card',
                    content: e.twitter.cardType,
                  })
                ),
              e.twitter.site &&
                t.push(
                  r.default.createElement('meta', {
                    key: 'twitter:site',
                    name: 'twitter:site',
                    content: e.twitter.site,
                  })
                ),
              e.twitter.handle &&
                t.push(
                  r.default.createElement('meta', {
                    key: 'twitter:creator',
                    name: 'twitter:creator',
                    content: e.twitter.handle,
                  })
                )),
            e.facebook &&
              e.facebook.appId &&
              t.push(
                r.default.createElement('meta', {
                  key: 'fb:app_id',
                  property: 'fb:app_id',
                  content: e.facebook.appId,
                })
              ),
            e.openGraph)
          ) {
            if (
              ((e.openGraph.url || e.canonical) &&
                t.push(
                  r.default.createElement('meta', {
                    key: 'og:url',
                    property: 'og:url',
                    content: e.openGraph.url || e.canonical,
                  })
                ),
              e.openGraph.type)
            ) {
              var i = e.openGraph.type.toLowerCase()
              t.push(
                r.default.createElement('meta', { key: 'og:type', property: 'og:type', content: i })
              ),
                'profile' === i && e.openGraph.profile
                  ? (e.openGraph.profile.firstName &&
                      t.push(
                        r.default.createElement('meta', {
                          key: 'profile:first_name',
                          property: 'profile:first_name',
                          content: e.openGraph.profile.firstName,
                        })
                      ),
                    e.openGraph.profile.lastName &&
                      t.push(
                        r.default.createElement('meta', {
                          key: 'profile:last_name',
                          property: 'profile:last_name',
                          content: e.openGraph.profile.lastName,
                        })
                      ),
                    e.openGraph.profile.username &&
                      t.push(
                        r.default.createElement('meta', {
                          key: 'profile:username',
                          property: 'profile:username',
                          content: e.openGraph.profile.username,
                        })
                      ),
                    e.openGraph.profile.gender &&
                      t.push(
                        r.default.createElement('meta', {
                          key: 'profile:gender',
                          property: 'profile:gender',
                          content: e.openGraph.profile.gender,
                        })
                      ))
                  : 'book' === i && e.openGraph.book
                  ? (e.openGraph.book.authors &&
                      e.openGraph.book.authors.length &&
                      e.openGraph.book.authors.forEach(function (e, a) {
                        t.push(
                          r.default.createElement('meta', {
                            key: 'book:author:0' + a,
                            property: 'book:author',
                            content: e,
                          })
                        )
                      }),
                    e.openGraph.book.isbn &&
                      t.push(
                        r.default.createElement('meta', {
                          key: 'book:isbn',
                          property: 'book:isbn',
                          content: e.openGraph.book.isbn,
                        })
                      ),
                    e.openGraph.book.releaseDate &&
                      t.push(
                        r.default.createElement('meta', {
                          key: 'book:release_date',
                          property: 'book:release_date',
                          content: e.openGraph.book.releaseDate,
                        })
                      ),
                    e.openGraph.book.tags &&
                      e.openGraph.book.tags.length &&
                      e.openGraph.book.tags.forEach(function (e, a) {
                        t.push(
                          r.default.createElement('meta', {
                            key: 'book:tag:0' + a,
                            property: 'book:tag',
                            content: e,
                          })
                        )
                      }))
                  : 'article' === i && e.openGraph.article
                  ? (e.openGraph.article.publishedTime &&
                      t.push(
                        r.default.createElement('meta', {
                          key: 'article:published_time',
                          property: 'article:published_time',
                          content: e.openGraph.article.publishedTime,
                        })
                      ),
                    e.openGraph.article.modifiedTime &&
                      t.push(
                        r.default.createElement('meta', {
                          key: 'article:modified_time',
                          property: 'article:modified_time',
                          content: e.openGraph.article.modifiedTime,
                        })
                      ),
                    e.openGraph.article.expirationTime &&
                      t.push(
                        r.default.createElement('meta', {
                          key: 'article:expiration_time',
                          property: 'article:expiration_time',
                          content: e.openGraph.article.expirationTime,
                        })
                      ),
                    e.openGraph.article.authors &&
                      e.openGraph.article.authors.length &&
                      e.openGraph.article.authors.forEach(function (e, a) {
                        t.push(
                          r.default.createElement('meta', {
                            key: 'article:author:0' + a,
                            property: 'article:author',
                            content: e,
                          })
                        )
                      }),
                    e.openGraph.article.section &&
                      t.push(
                        r.default.createElement('meta', {
                          key: 'article:section',
                          property: 'article:section',
                          content: e.openGraph.article.section,
                        })
                      ),
                    e.openGraph.article.tags &&
                      e.openGraph.article.tags.length &&
                      e.openGraph.article.tags.forEach(function (e, a) {
                        t.push(
                          r.default.createElement('meta', {
                            key: 'article:tag:0' + a,
                            property: 'article:tag',
                            content: e,
                          })
                        )
                      }))
                  : ('video.movie' !== i &&
                      'video.episode' !== i &&
                      'video.tv_show' !== i &&
                      'video.other' !== i) ||
                    !e.openGraph.video ||
                    (e.openGraph.video.actors &&
                      e.openGraph.video.actors.length &&
                      e.openGraph.video.actors.forEach(function (e, a) {
                        e.profile &&
                          t.push(
                            r.default.createElement('meta', {
                              key: 'video:actor:0' + a,
                              property: 'video:actor',
                              content: e.profile,
                            })
                          ),
                          e.role &&
                            t.push(
                              r.default.createElement('meta', {
                                key: 'video:actor:role:0' + a,
                                property: 'video:actor:role',
                                content: e.role,
                              })
                            )
                      }),
                    e.openGraph.video.directors &&
                      e.openGraph.video.directors.length &&
                      e.openGraph.video.directors.forEach(function (e, a) {
                        t.push(
                          r.default.createElement('meta', {
                            key: 'video:director:0' + a,
                            property: 'video:director',
                            content: e,
                          })
                        )
                      }),
                    e.openGraph.video.writers &&
                      e.openGraph.video.writers.length &&
                      e.openGraph.video.writers.forEach(function (e, a) {
                        t.push(
                          r.default.createElement('meta', {
                            key: 'video:writer:0' + a,
                            property: 'video:writer',
                            content: e,
                          })
                        )
                      }),
                    e.openGraph.video.duration &&
                      t.push(
                        r.default.createElement('meta', {
                          key: 'video:duration',
                          property: 'video:duration',
                          content: e.openGraph.video.duration.toString(),
                        })
                      ),
                    e.openGraph.video.releaseDate &&
                      t.push(
                        r.default.createElement('meta', {
                          key: 'video:release_date',
                          property: 'video:release_date',
                          content: e.openGraph.video.releaseDate,
                        })
                      ),
                    e.openGraph.video.tags &&
                      e.openGraph.video.tags.length &&
                      e.openGraph.video.tags.forEach(function (e, a) {
                        t.push(
                          r.default.createElement('meta', {
                            key: 'video:tag:0' + a,
                            property: 'video:tag',
                            content: e,
                          })
                        )
                      }),
                    e.openGraph.video.series &&
                      t.push(
                        r.default.createElement('meta', {
                          key: 'video:series',
                          property: 'video:series',
                          content: e.openGraph.video.series,
                        })
                      ))
            }
            ;(e.openGraph.title || e.title) &&
              t.push(
                r.default.createElement('meta', {
                  key: 'og:title',
                  property: 'og:title',
                  content: e.openGraph.title || a,
                })
              ),
              (e.openGraph.description || e.description) &&
                t.push(
                  r.default.createElement('meta', {
                    key: 'og:description',
                    property: 'og:description',
                    content: e.openGraph.description || e.description,
                  })
                ),
              e.defaultOpenGraphImageWidth &&
                (p.defaultOpenGraphImageWidth = e.defaultOpenGraphImageWidth),
              e.defaultOpenGraphImageHeight &&
                (p.defaultOpenGraphImageHeight = e.defaultOpenGraphImageHeight),
              e.openGraph.images &&
                e.openGraph.images.length &&
                e.openGraph.images.forEach(function (e, a) {
                  t.push(
                    r.default.createElement('meta', {
                      key: 'og:image:0' + a,
                      property: 'og:image',
                      content: e.url,
                    })
                  ),
                    e.alt &&
                      t.push(
                        r.default.createElement('meta', {
                          key: 'og:image:alt0' + a,
                          property: 'og:image:alt',
                          content: e.alt,
                        })
                      ),
                    e.width
                      ? t.push(
                          r.default.createElement('meta', {
                            key: 'og:image:width0' + a,
                            property: 'og:image:width',
                            content: e.width.toString(),
                          })
                        )
                      : p.defaultOpenGraphImageWidth &&
                        t.push(
                          r.default.createElement('meta', {
                            key: 'og:image:width0' + a,
                            property: 'og:image:width',
                            content: p.defaultOpenGraphImageWidth.toString(),
                          })
                        ),
                    e.height
                      ? t.push(
                          r.default.createElement('meta', {
                            key: 'og:image:height' + a,
                            property: 'og:image:height',
                            content: e.height.toString(),
                          })
                        )
                      : p.defaultOpenGraphImageHeight &&
                        t.push(
                          r.default.createElement('meta', {
                            key: 'og:image:height' + a,
                            property: 'og:image:height',
                            content: p.defaultOpenGraphImageHeight.toString(),
                          })
                        )
                }),
              e.defaultOpenGraphVideoWidth &&
                (p.defaultOpenGraphVideoWidth = e.defaultOpenGraphVideoWidth),
              e.defaultOpenGraphVideoHeight &&
                (p.defaultOpenGraphVideoHeight = e.defaultOpenGraphVideoHeight),
              e.openGraph.videos &&
                e.openGraph.videos.length &&
                e.openGraph.videos.forEach(function (e, a) {
                  t.push(
                    r.default.createElement('meta', {
                      key: 'og:video:0' + a,
                      property: 'og:video',
                      content: e.url,
                    })
                  ),
                    e.alt &&
                      t.push(
                        r.default.createElement('meta', {
                          key: 'og:video:alt0' + a,
                          property: 'og:video:alt',
                          content: e.alt,
                        })
                      ),
                    e.width
                      ? t.push(
                          r.default.createElement('meta', {
                            key: 'og:video:width0' + a,
                            property: 'og:video:width',
                            content: e.width.toString(),
                          })
                        )
                      : p.defaultOpenGraphVideoWidth &&
                        t.push(
                          r.default.createElement('meta', {
                            key: 'og:video:width0' + a,
                            property: 'og:video:width',
                            content: p.defaultOpenGraphVideoWidth.toString(),
                          })
                        ),
                    e.height
                      ? t.push(
                          r.default.createElement('meta', {
                            key: 'og:video:height' + a,
                            property: 'og:video:height',
                            content: e.height.toString(),
                          })
                        )
                      : p.defaultOpenGraphVideoHeight &&
                        t.push(
                          r.default.createElement('meta', {
                            key: 'og:video:height' + a,
                            property: 'og:video:height',
                            content: p.defaultOpenGraphVideoHeight.toString(),
                          })
                        )
                }),
              e.openGraph.locale &&
                t.push(
                  r.default.createElement('meta', {
                    key: 'og:locale',
                    property: 'og:locale',
                    content: e.openGraph.locale,
                  })
                ),
              e.openGraph.site_name &&
                t.push(
                  r.default.createElement('meta', {
                    key: 'og:site_name',
                    property: 'og:site_name',
                    content: e.openGraph.site_name,
                  })
                )
          }
          return (
            e.canonical &&
              t.push(
                r.default.createElement('link', {
                  rel: 'canonical',
                  href: e.canonical,
                  key: 'canonical',
                })
              ),
            e.additionalMetaTags &&
              e.additionalMetaTags.length > 0 &&
              e.additionalMetaTags.forEach(function (e) {
                t.push(
                  r.default.createElement(
                    'meta',
                    Object.assign({ key: e.name ? e.name : e.property }, e)
                  )
                )
              }),
            t
          )
        },
        d = (function (e) {
          function t() {
            return e.apply(this, arguments) || this
          }
          return (
            i(t, e),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.title,
                a = e.titleTemplate,
                n = e.dangerouslySetAllPagesToNoIndex,
                i = void 0 !== n && n,
                p = e.dangerouslySetAllPagesToNoFollow,
                d = void 0 !== p && p,
                c = e.description,
                u = e.canonical,
                h = e.facebook,
                s = e.openGraph,
                f = e.additionalMetaTags,
                m = e.twitter,
                g = e.defaultOpenGraphImageWidth,
                y = e.defaultOpenGraphImageHeight,
                v = e.defaultOpenGraphVideoWidth,
                G = e.defaultOpenGraphVideoHeight,
                k = e.mobileAlternate,
                b = e.languageAlternates
              return r.default.createElement(
                o.a,
                null,
                l({
                  title: t,
                  titleTemplate: a,
                  dangerouslySetAllPagesToNoIndex: i,
                  dangerouslySetAllPagesToNoFollow: d,
                  description: c,
                  canonical: u,
                  facebook: h,
                  openGraph: s,
                  additionalMetaTags: f,
                  twitter: m,
                  defaultOpenGraphImageWidth: g,
                  defaultOpenGraphImageHeight: y,
                  defaultOpenGraphVideoWidth: v,
                  defaultOpenGraphVideoHeight: G,
                  mobileAlternate: k,
                  languageAlternates: b,
                })
              )
            }),
            t
          )
        })(r.Component),
        c = (function (e) {
          function t() {
            return e.apply(this, arguments) || this
          }
          return (
            i(t, e),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.title,
                a = e.noindex,
                n = void 0 !== a && a,
                i = e.nofollow,
                p = e.description,
                d = e.canonical,
                c = e.openGraph,
                u = e.facebook,
                h = e.twitter,
                s = e.additionalMetaTags,
                f = e.titleTemplate,
                m = e.mobileAlternate,
                g = e.languageAlternates
              return r.default.createElement(
                o.a,
                null,
                l({
                  title: t,
                  noindex: n,
                  nofollow: i,
                  description: p,
                  canonical: d,
                  facebook: u,
                  openGraph: c,
                  additionalMetaTags: s,
                  twitter: h,
                  titleTemplate: f,
                  mobileAlternate: m,
                  languageAlternates: g,
                })
              )
            }),
            t
          )
        })(r.Component),
        u = function (e) {
          return { __html: e }
        },
        h = function (e) {
          return Array.isArray(e)
            ? '[' +
                e.map(function (e) {
                  return '{"@type": "Person","name": "' + e + '"}'
                }) +
                ']'
            : '{"@type": "Person","name": "' + e + '"}'
        },
        s = function (e) {
          var t = e.keyOverride,
            a = e.url,
            n = e.title,
            i = e.images,
            p = void 0 === i ? [] : i,
            l = e.datePublished,
            d = e.dateModified,
            c = void 0 === d ? null : d,
            s = e.authorName,
            f = e.description,
            m = e.publisherName,
            g = e.publisherLogo,
            y =
              '{\n    "@context": "https://schema.org",\n    "@type": "Article",\n    "mainEntityOfPage": {\n      "@type": "WebPage",\n      "@id": "' +
              a +
              '"\n    },\n    "headline": "' +
              n +
              '",\n    "image": [\n      ' +
              p.map(function (e) {
                return '"' + e + '"'
              }) +
              '\n     ],\n    "datePublished": "' +
              l +
              '",\n    "dateModified": "' +
              (c || l) +
              '",\n    "author": ' +
              h(s) +
              ',\n    "publisher": {\n      "@type": "Organization",\n      "name": "' +
              m +
              '",\n      "logo": {\n        "@type": "ImageObject",\n        "url": "' +
              g +
              '"\n      }\n    },\n    "description": "' +
              f +
              '"\n  }'
          return r.default.createElement(
            o.a,
            null,
            r.default.createElement('script', {
              type: 'application/ld+json',
              dangerouslySetInnerHTML: u(y),
              key: 'jsonld-article' + (t ? '-' + t : ''),
            })
          )
        }
    },
    Bnag: function (e, t) {
      e.exports = function () {
        throw new TypeError(
          'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        )
      }
    },
    EbDI: function (e, t) {
      e.exports = function (e) {
        if ('undefined' !== typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
      }
    },
    Ijbi: function (e, t, a) {
      var n = a('WkPL')
      e.exports = function (e) {
        if (Array.isArray(e)) return n(e)
      }
    },
    RIqP: function (e, t, a) {
      var n = a('Ijbi'),
        o = a('EbDI'),
        r = a('ZhPi'),
        i = a('Bnag')
      e.exports = function (e) {
        return n(e) || o(e) || r(e) || i()
      }
    },
    Xuae: function (e, t, a) {
      'use strict'
      var n = a('RIqP'),
        o = a('lwsE'),
        r = a('W8MJ'),
        i = (a('PJYZ'), a('7W2i')),
        p = a('a1gu'),
        l = a('Nsbk')
      function d(e) {
        var t = (function () {
          if ('undefined' === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ('function' === typeof Proxy) return !0
          try {
            return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var a,
            n = l(e)
          if (t) {
            var o = l(this).constructor
            a = Reflect.construct(n, arguments, o)
          } else a = n.apply(this, arguments)
          return p(this, a)
        }
      }
      ;(t.__esModule = !0), (t.default = void 0)
      var c = a('FdF9'),
        u = (function (e) {
          i(a, e)
          var t = d(a)
          function a(e) {
            var r
            return (
              o(this, a),
              ((r = t.call(this, e))._hasHeadManager = void 0),
              (r.emitChange = function () {
                r._hasHeadManager &&
                  r.props.headManager.updateHead(
                    r.props.reduceComponentsToState(
                      n(r.props.headManager.mountedInstances),
                      r.props
                    )
                  )
              }),
              (r._hasHeadManager = r.props.headManager && r.props.headManager.mountedInstances),
              r
            )
          }
          return (
            r(a, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._hasHeadManager && this.props.headManager.mountedInstances.add(this),
                    this.emitChange()
                },
              },
              {
                key: 'componentDidUpdate',
                value: function () {
                  this.emitChange()
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this._hasHeadManager && this.props.headManager.mountedInstances.delete(this),
                    this.emitChange()
                },
              },
              {
                key: 'render',
                value: function () {
                  return null
                },
              },
            ]),
            a
          )
        })(c.Component)
      t.default = u
    },
    bsnj: function (e) {
      e.exports = JSON.parse(
        '{"title":"MatthewOden.com","author":"Matthew Oden Potter","headerTitle":"MatthewOden.com","description":"Thoughts from daily development.","language":"en-us","siteUrl":"https://matthewoden.com","siteRepo":"https://github.com/matthewoden/matthewoden.com","image":"/static/images/face.png","socialBanner":"/static/images/face.png","email":"heymatthewoden@gmail.com","github":"https://github.com/matthewoden","twitter":"https://twitter.com/matthewoden","linkedin":"https://www.linkedin.com/in/matthew-potter-8194998a/","locale":"en-US"}'
      )
    },
    g4pe: function (e, t, a) {
      e.exports = a('8Kt/')
    },
    lSNA: function (e, t) {
      e.exports = function (e, t, a) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = a),
          e
        )
      }
    },
    lwAK: function (e, t, a) {
      'use strict'
      var n
      ;(t.__esModule = !0), (t.AmpStateContext = void 0)
      var o = ((n = a('FdF9')) && n.__esModule ? n : { default: n }).default.createContext({})
      t.AmpStateContext = o
    },
  },
])