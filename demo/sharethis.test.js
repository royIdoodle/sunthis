Date.now || (Date.now = function () {
  return (new Date).getTime()
});
!function (t, e) {
  'use strict';
  
  function n () {
    if (!a) {
      a = !0;
      for (var t = 0; t < d.length; t++) d[t].fn.call(window, d[t].ctx);
      d = []
    }
  }
  
  function o () {
    'complete' === document.readyState && n()
  }
  
  t = t || 'docReady', e = e || window;
  var d = [], a = !1, c = !1;
  e[t] = function (t, e) {
    if ('function' != typeof t) throw new TypeError('callback for docReady(fn) must be a function');
    return a ? void setTimeout(function () {
      t(e)
    }, 1) : (d.push({
      fn: t,
      ctx: e
    }), void('complete' === document.readyState || !document.attachEvent && 'interactive' === document.readyState ? setTimeout(n, 1) : c || (document.addEventListener ? (document.addEventListener('DOMContentLoaded', n, !1), window.addEventListener('load', n, !1)) : (document.attachEvent('onreadystatechange', o), window.attachEvent('onload', n)), c = !0)))
  }
}('__sharethis__docReady', window);
document.querySelectorAll || (document.querySelectorAll = function (e) {
  var t, n = document.createElement('style'), o = [];
  for (document.documentElement.firstChild.appendChild(n), document._qsa = [], n.styleSheet.cssText = e + '{x-qsa:expression(document._qsa && document._qsa.push(this))}', window.scrollBy(0, 0), n.parentNode.removeChild(n); document._qsa.length;) t = document._qsa.shift(), t.style.removeAttribute('x-qsa'), o.push(t);
  return document._qsa = null, o
});
document.querySelector || (document.querySelector = function (e) {
  var r = document.querySelectorAll(e);
  return r.length ? r[0] : null
});
Array.prototype.indexOf || (Array.prototype.indexOf = function (r, t) {
  var n;
  if (null == this) throw new TypeError('"this" is null or not defined');
  var e = Object(this), i = e.length >>> 0;
  if (0 === i) return -1;
  if (n = +t || 0, 1 / 0 === Math.abs(n) && (n = 0), n >= i) return -1;
  for (n = Math.max(0 <= n ? n : i - Math.abs(n), 0); n < i;) {
    if (n in e && e[n] === r) return n;
    n++
  }
  return -1
});
// TODO Unknown
(function () {
  var e, t = [].indexOf || function (e) {
    for (var t = 0, n = this.length; t < n; t++) if (t in this && this[t] === e) return t;
    return -1
  };
  null == window.__sharethis__ && (window.__sharethis__ = {v: '3.1.2'}), e = window.__sharethis__, e.protocol = 'https:' === document.location.protocol ? 'https' : 'http', e.METRICS = 'https://platform-metrics-api.sharethis.com', e.API = 'https://platform-api.sharethis.com', e.SECOND = 1e3, e.MINUTE = 60 * e.SECOND, e.HOUR = 60 * e.MINUTE, e.DAY = 24 * e.HOUR, e.WEEK = 7 * e.DAY, e.BORDER_BOX = '-moz-box-sizing: border-box;\n-webkit-box-sizing: border-box;\nbox-sizing: border-box;', e.BORDER_RADIUS = function (t) {
    return '-moz-border-radius: ' + e.px(t) + ';\n-webkit-border-radius: ' + e.px(t) + ';\nborder-radius: ' + e.px(t) + ';'
  }, e.BOX_SHADOW = function (e) {
    return '-moz-box-shadow: ' + e + ';\n-webkit-box-shadow: ' + e + ';\nbox-shadow: ' + e + ';'
  }, e.FLEX = '-moz-flex: 1;\n-ms-flex: 1;\n-webkit-flex: 1;\nflex: 1;', e.FONT_FAMILY = 'font-family: "Helvetica Neue", Verdana, Helvetica, Arial, sans-serif;', e.TRANSFORM = function (e) {
    return '-ms-transform: ' + e + ';\n-webkit-transform: ' + e + ';\ntransform: ' + e + ';'
  }, e.TRANSITION = function (e, t) {
    var n, o, r, s;
    for (null == e && (e = ['all']), null == t && (t = '0.2s'), s = [], n = 0, o = e.length; n < o; n++) r = e[n], s.push(r + ' ' + t + ' ease-in');
    return s = s.join(', '), '-moz-transition: ' + s + '; -ms-transition: ' + s + '; -o-transition: ' + s + '; -webkit-transition: ' + s + '; transition: ' + s + ';'
  }, e._uid = 0, e.uid = function () {
    return ++e._uid
  }, e.cache = {}, e.get = function (t) {
    return e.cache[t]
  }, e.set = function (t, n) {
    return e.cache[t] = n
  }, e.has = function (t) {
    return null != e.cache[t]
  }, e.addClass = function (e, n) {
    var o, r, s, i;
    for (o = (e.className || '').split(' '), 'string' == typeof n && (n = [n]), r = 0, s = n.length; r < s; r++) i = n[r], null != i && t.call(o, i) < 0 && o.push(i);
    return e.className = o.join(' ')
  }, e.addEventListener = function (e, t, n) {
    if (e && t && n) return e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent ? e.attachEvent('on' + t, n) : e['on' + t] = n
  }, e.capitalize = function (e) {
    return '' + e.charAt(0).toUpperCase() + e.substring(1).toLowerCase()
  }, e.copy = function () {
    var t;
    if (t = 'function' == typeof window.getSelection ? window.getSelection() : void 0, null == t || !t.isCollapsed) return t = t.toString(), t.length > 140 && (t = t.slice(0, 137) + '...'), t = encodeURIComponent(t), t.length > 0 ? e.send('https://l.sharethis.com/log?' + e.qs({
      destinations: 'copy',
      description: t,
      event: 'share',
      product: e.product,
      publisher: e.property,
      source: 'sharethis.js',
      title: e.getTitle(),
      ts: Date.now(),
      url: e.href,
      sop: !0
    })) : void 0
  }, e.addEventListener(document, 'copy', e.copy), e.close = function (t) {
    if (e.removeClass(document.body, 'st-body-no-scroll'), t) return e.addClass(t, 'st-hidden'), setTimeout(function () {
      return e.remove(t)
    }, 200)
  }, e.css = function (e) {
    var t, n;
    return t = document.getElementsByTagName('head')[0], n = document.createElement('style'), n.setAttribute('type', 'text/css'), n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e)), t.appendChild(n)
  }, e.emit = function (t, n) {
    var o, r, s, i, a, l;
    for (a = (null != (i = e.handlers) ? i[t] : void 0) || [], l = [], r = 0, s = a.length; r < s; r++) o = a[r], l.push(o(n));
    return l
  }, e.formatNumber = function (e) {
    return e > 1e6 ? Math.round(10 * (e / 1e6)) / 10 + 'm' : e > 1e3 ? Math.round(10 * (e / 1e3)) / 10 + 'k' : '' + e
  }, e.getCookie = function (e) {
    var t, n;
    return n = '; ' + document.cookie, t = n.split('; ' + e + '='), 2 === t.length ? t.pop().split(';').shift() : null
  }, e.getDescription = function () {
    var e, t, n, o, r, s, i, a, l;
    for (i = ['property', 'name'], n = 0, r = i.length; n < r; n++) for (t = i[n], a = ['og:description', 'twitter:description', 'description', 'Description'], o = 0, s = a.length; o < s; o++) if (l = a[o], e = document.querySelector('meta[' + t + '=\'' + l + '\']')) return e.content;
    return ''
  }, e.getImage = function () {
    var e, t, n, o, r, s, i, a, l;
    for (i = ['property', 'name'], n = 0, r = i.length; n < r; n++) for (t = i[n], a = ['og:image', 'twitter:image'], o = 0, s = a.length; o < s; o++) if (l = a[o], e = document.querySelector('meta[' + t + '=\'' + l + '\']')) return e.content;
    return ''
  }, e.getScrollbarWidth = function () {
    var e, t, n;
    return t = document.createElement('div'), t.style.visibility = 'hidden', t.style.width = '100px', t.style.msOverflowStyle = 'scrollbar', t.style.overflow = 'scroll', document.body.appendChild(t), e = document.createElement('div'), e.style.width = '100%', t.appendChild(e), n = t.offsetWidth - e.offsetWidth, t.parentNode.removeChild(t), n
  }, e.getScrollDepth = function () {
    var t, n, o, r, s, i;
    return o = document.documentElement, t = document.body, n = Math.max.apply(Math, [t.scrollHeight || 0, t.offsetHeight || 0, o.clientHeight || 0, o.scrollHeight || 0, o.offsetHeight || 0]), i = e.getWindowSize().height, r = window.pageYOffset || (o || t.parentNode || t).scrollTop, s = Math.floor(100 * (i + r) / n)
  }, e.getShareLabel = function (t, n) {
    var o;
    switch (null == n && (n = 'en'), o = '', t) {
      case'email':
        o = e.i18n.email[n];
        break;
      case'flipboard':
        o = e.i18n.flip[n];
        break;
      case'pinterest':
        o = e.i18n.pin[n];
        break;
      case'print':
        o = e.i18n.print[n];
        break;
      case'twitter':
        o = e.i18n.tweet[n];
        break;
      default:
        o = e.i18n.share[n]
    }
    return e.capitalize(o)
  }, e.getTitle = function () {
    var e, t, n, o, r, s, i, a, l;
    for (i = ['property', 'name'], n = 0, r = i.length; n < r; n++) for (t = i[n], a = ['og:title', 'twitter:title'], o = 0, s = a.length; o < s; o++) if (l = a[o], e = document.querySelector('meta[' + t + '=\'' + l + '\']')) return e.content;
    return document.title
  }, e.getWindowSize = function () {
    var e, t, n, o;
    return e = document.body, t = document.documentElement, n = window.innerHeight, o = window.innerWidth, {
      height: n || t.clientHeight || e.clientHeight,
      width: o || t.clientWidth || e.clientWidth
    }
  }, e.hasClass = function (e, t) {
    return new RegExp(t).test(e.className)
  }, e.hasCookies = function () {
    var e;
    return e = '__sharethis_cookie_test__=1', document.cookie = e, document.cookie.indexOf(e) > -1
  }(), e.hasLocalStorage = function () {
    var e;
    e = '__sharethis_local_storage_test__';
    try {
      return localStorage.setItem(e, 'hello world'), localStorage.removeItem(e), !0
    } catch (e) {
      return !1
    }
  }(), e.hostname = function (t) {
    var n;
    return null == t && (t = e.href), n = document.createElement('a'), n.setAttribute('href', t), n.hostname
  }, e.img = function (e) {
    if (e) return '<img src="' + e + '" />'
  }, e.incLocalStorageShares = function (t, n) {
    var o, r, s, i, a, l, u, c, d;
    if (o = e.storage.get('st_shares_' + n)) return r = (null != (s = o[t]) ? s.value : void 0) + 1 || 0, d = (null != (i = o.total) ? i.value : void 0) + 1 || 0, null != (a = o[t]) && (a.value = r), null != (l = o[t]) && (l.label = e.formatNumber(r)), null != (u = o.total) && (u.value = d), null != (c = o.total) && (c.label = e.formatNumber(d)), o.update_time = Math.round(new Date / 1e3), e.storage.set('st_shares_' + n, o)
  }, e.inc = function (t) {
    var n;
    return n = e.parseNumber(t.innerText), t.innerText = e.formatNumber(n + 1), e.addClass(t, 'st-grow'), setTimeout(function () {
      return e.removeClass(t, 'st-grow')
    }, 400)
  }, e.isEnter = function (e) {
    return 13 === e.which || 13 === e.keyCode
  }, e.isEsc = function (e) {
    var t;
    return 'Escape' === (t = e.key) || 'Esc' === t || 27 === e.keyCode
  }, e.isValidEmail = function (e) {
    var t;
    return t = /[^\.\s@][^\s@]*(?!\.)@[^\.\s@]+(?:\.[^\.\s@]+)*/, t.test(e)
  }, e.js = function (e, t) {
    var n, o;
    return n = document.createElement('script'), n.async = 1, n.src = e, t && (n.id = t), o = document.getElementsByTagName('script')[0], o.parentNode.insertBefore(n, o)
  }, e.loadPixel = function () {
    var t, n, o;
    return t = window.location.hostname, n = (new Date).getTime(), o = 'https://t.sharethis.com/1/d/t.dhj?' + e.qs({
      cid: 'c010',
      cls: 'B',
      dmn: t,
      gdpr_consent: e.consentData,
      gdpr_domain: e.consentDomain,
      rnd: n
    }), e.js(o, 'pxscrpt')
  }, null == e.loader && (e.loader = {}), e.load = function (t, n) {
    var o;
    return 'function' == typeof(o = e.loader)[t] ? o[t](n) : void 0
  }, null == e.load_counts_cache && (e.load_counts_cache = {}), e.loadCounts = function (t, n) {
    var o, r, s, i, a, l, u;
    return n || (a = [{}, t], t = a[0], n = a[1]), null == t.facebook && (t.facebook = !1), null == t.type && (t.type = 'shares'), null == t.url && (t.url = e.href), null == t.use_native_counts && (t.use_native_counts = !0), i = 'count:' + JSON.stringify(t), null == (o = e.load_counts_cache)[i] && (o[i] = {
      callbacks: [n],
      response: null,
      status: 'init'
    }), 'complete' === (null != (l = e.load_counts_cache[i]) ? l.status : void 0) ? n(e.load_counts_cache[i].response) : 'in-progress' === (null != (u = e.load_counts_cache[i]) ? u.status : void 0) ? e.load_counts_cache[i].callbacks.push(n) : (s = 'cb' + e.uid(), r = !1, e[s] = function (n) {
      var o, s, a, l, u, c, d, h, p, m, f, g, v, w, _, b;
      if (null == n && (n = {}), r = !0, a = {}, 'reactions' === t.type) for (m in e.REACTIONS) b = (null != (f = n.reactions) ? f[m] : void 0) || 0, a[m] = {
        value: b,
        label: e.formatNumber(b)
      };
      if ('shares' === t.type) {
        for (g = e.networks, l = 0, c = g.length; l < c; l++) p = g[l], b = ((null != (v = n.clicks) ? v[p] : void 0) || 0) + ((null != (w = n.shares) ? w[p] : void 0) || 0), a[p] = {
          value: b,
          label: e.formatNumber(b)
        };
        a.total = {value: n.total, label: e.formatNumber(n.total)}
      }
      if (a.update_time = n.update_time, h = e.storage.get('st_shares_' + t.url), n.update_time < (null != h ? h.update_time : void 0) && (a = h), t.facebook && t.use_native_counts) return null == a.facebook && (a.facebook = {value: 0}), null == (o = a.facebook).value && (o.value = 0), e.loadFacebookShareCount(t.url, function (n) {
        var o, r, s, l, u;
        for (b = Math.max(n, a.facebook.value), u = a.total.value - a.facebook.value + b, a.facebook = {
          value: b,
          label: e.formatNumber(b)
        }, a.total = {
          value: u,
          label: e.formatNumber(u)
        }, e.load_counts_cache[i].response = a, e.load_counts_cache[i].status = 'complete', e.storage.set('st_shares_' + t.url, a), l = e.load_counts_cache[i].callbacks, r = 0, s = l.length; r < s; r++) (o = l[r])(a);
        return e.load_counts_cache[i].callbacks = []
      });
      for (e.load_counts_cache[i].response = a, e.load_counts_cache[i].status = 'complete', e.storage.set('st_shares_' + t.url, a), _ = e.load_counts_cache[i].callbacks, u = 0, d = _.length; u < d; u++) (s = _[u])(a);
      return e.load_counts_cache[i].callbacks = []
    }, e.load_counts_cache[i].status = 'in-progress', e.js('https://count-server.sharethis.com/v2.0/get_counts?' + e.qs({
      cb: 'window.__sharethis__.' + s,
      url: t.url,
      refDomain: e.hostname(document.referrer),
      sop: !0
    })))
  }, e.loadFacebookShareCount = function (t, n) {
    var o;
    return o = 'cb' + e.uid(), e[o] = function (e) {
      var t;
      return n(JSON.parse((null != e && null != (t = e.share) ? t.share_count : void 0) || 0))
    }, e.js('https://graph.facebook.com?' + e.qs({id: t, callback: 'window.__sharethis__.' + o}))
  }, e.log = function (t) {
    return t.product = e.product, t.publisher = e.property, t.source = 'sharethis.js', t.ts = Date.now(), t.sop = !0, t.consentData = e.consentData, t.consentDomain = e.consentDomain, e.send('https://l.sharethis.com/log?' + e.qs(t))
  }, e.logGoogleAnalyticsEvent = function (e, t, n) {
    var o, r;
    return r = window.ga, o = window._gaq, r ? r('send', 'event', e, t, n) : o ? o.push(['_trackEvent', e, t, n]) : void 0
  }, e.newElement = function (t) {
    var n, o;
    return void 0 === t && (t = document.body), n = document.createElement('div'), o = 'st-el-' + e.uid(), n.setAttribute('id', o), t && t.appendChild(n), {
      $el: n,
      id: o
    }
  }, e.on = function (t, n) {
    var o;
    return null == e.handlers && (e.handlers = []), null == (o = e.handlers)[t] && (o[t] = []), e.handlers[t].push(n)
  }, e.open = function (t) {
    var n, o, r, s;
    return e.mobile ? window.open(t, '_blank') : t.indexOf('mailto:') > -1 ? document.location = t : (r = e.getWindowSize().height, s = e.getWindowSize().width, n = Math.min(600, .6 * r), o = Math.min(800, .8 * s), window.open(t, '', ['height=' + n, 'left=' + (s - o) / 2, 'top=' + (r - n) / 2, 'width=' + o, 'status=1', 'toolbar=0'].join(',')))
  }, e.parseNumber = function (e) {
    var t;
    return t = 1, e.indexOf('k') > -1 && (t = 1e3), e.indexOf('m') > -1 && (t = 1e6), e = e.replace(/[km,]/g, ''), t * parseInt(e, 10) || 0
  }, e.position = function (e, t) {
    var n, o;
    return null == t && (t = window), o = e.getBoundingClientRect(), t === window ? {
      left: o.left + window.scrollX,
      top: o.top + window.scrollY
    } : (n = t.getBoundingClientRect(), {left: o.left - n.left + t.scrollLeft, top: o.top - n.top + t.scrollTop})
  }, e.px = function (e) {
    return 'string' == typeof e ? e : Math.floor(e) + 'px'
  }, e.qs = function (e) {
    var t, n;
    return function () {
      var o;
      o = [];
      for (t in e) n = e[t], null != n && o.push(t + '=' + encodeURIComponent(n));
      return o
    }().join('&')
  }, e.react = function (t) {
    var n, o, r;
    return n = t.reaction, r = t.url, null == r && (r = e.href), o = e.getTitle(), e.logGoogleAnalyticsEvent('ShareThis', n, r), e.log({
      event: 'reaction',
      reactionType: n,
      title: o,
      url: r
    })
  }, e.remove = function (e) {
    if (null != e ? e.parentNode : void 0) return e.parentNode.removeChild(e)
  }, e.removeClass = function (e, t) {
    return e.className = e.className.replace(t, '')
  }, e.removeEventListener = function (e, t, n) {
    if (e && t && n) return e.removeEventListener ? e.removeEventListener(t, n, !1) : e.detachEvent ? e.detachEvent('on' + t, n) : e['on' + t] = null
  }, e.send = function (t, n, o) {
    var r;
    return n && (t = t + '?' + e.qs(n)), r = new Image(1, 1), r.src = t, r.onload = function () {
      return 'function' == typeof o ? o(!0) : void 0
    }, r.onerror = function () {
      return 'function' == typeof o ? o(!1) : void 0
    }
  }, e.setCookie = function (e, t, n) {
    var o, r;
    return n ? (o = new Date, o.setTime(o.getTime() + 24 * n * 60 * 60 * 1e3), r = '; expires=' + o.toGMTString()) : r = '', document.cookie = e + '=' + t + r + '; path=/'
  }, e.share = function (t) {
    var n, o, r, s, i, a, l, u, c, d, h, p, m, f, g, v;
    if (null == t && (t = {}), n = t.count_url, p = t.subject, h = t.share_url, f = t.url, o = t.description, s = t.image, l = t.message, u = t.network, m = t.title, g = t.username, n = n || f || e.href, null == o && (o = e.getDescription()), null == s && (s = e.getImage()), h = h || f || e.href, null == m && (m = e.getTitle()), null == f && (f = n), 'sharethis' === u) return e.load('share-all', {
      count_url: n,
      description: o,
      image: s,
      share_url: h,
      title: m,
      url: f,
      username: g
    });
    if (e.incLocalStorageShares(u, n), e.logGoogleAnalyticsEvent('ShareThis', u, n), e.log({
      destinations: u,
      event: 'share',
      title: m,
      url: n
    }), e.emit('share', {
      count_url: n,
      description: o,
      image: s,
      message: l,
      share_url: h,
      title: m,
      url: f,
      username: g
    }), 'wechat' === u) {
      if (e.mobile) return e.load('share-wechat-mobile', {url: h});
      v = 'https://chart.apis.google.com/chart?' + e.qs({
        cht: 'qr',
        chs: '154x154',
        chld: 'Q|0',
        chl: h,
        app_id: null
      }), e.open(v)
    }
    return 'print' === u ? (e.emit('print', {
      count_url: n,
      description: o,
      image: s,
      message: l,
      share_url: h,
      title: m,
      url: f,
      username: g
    }), window.print()) : (r = document.location.hostname, c = e.product, a = /iPad|iPhone|iPod/.test(navigator.userAgent), i = /Android/i.test(navigator.userAgent), d = {
      blogger: 'https://www.blogger.com/blog-this.g?' + e.qs({
        n: m,
        t: o,
        u: h
      }),
      delicious: 'https://del.icio.us/save?' + e.qs({provider: 'sharethis', title: m, url: h, v: 5}),
      digg: 'https://digg.com/submit?' + e.qs({url: h}),
      email: 'mailto:?to=&' + e.qs({subject: p || 'I\'d like to share a link with you', body: l || '' + f}),
      facebook: 'https://www.facebook.com/sharer.php?' + e.qs({t: m, u: h}),
      flipboard: 'https://share.flipboard.com/bookmarklet/popout?' + e.qs({
        ext: 'sharethis',
        title: m,
        url: h,
        utm_campaign: 'widgets',
        utm_content: r,
        utm_source: 'sharethis',
        v: 2
      }),
      googleplus: 'https://plus.google.com/share?' + e.qs({url: h}),
      linkedin: 'https://www.linkedin.com/shareArticle?' + e.qs({title: m, url: h}),
      livejournal: 'https://www.livejournal.com/update.bml?' + e.qs({event: h, subject: m}),
      messenger: {
        true: 'fb-messenger://share/?' + e.qs({link: h, app_id: 521270401588372}),
        false: 'https://www.facebook.com/dialog/send?' + e.qs({
          link: h,
          app_id: 521270401588372,
          redirect_uri: 'https://www.sharethis.com'
        })
      }[e.mobile],
      pinterest: 'https://pinterest.com/pin/create/button/?' + e.qs({description: m, media: s, url: h}),
      reddit: 'https://reddit.com/submit?' + e.qs({title: m, url: h}),
      sms: 'sms:' + (a ? '&' : '?') + 'body=' + encodeURIComponent(h),
      tumblr: 'https://www.tumblr.com/share?' + e.qs({t: m, u: h, v: 3}),
      twitter: 'https://twitter.com/intent/tweet?' + e.qs({text: m || o, url: h, via: g}),
      vk: 'https://vk.com/share.php?' + e.qs({url: h}),
      weibo: 'https://service.weibo.com/share/share.php?' + e.qs({title: m, url: h, pic: s}),
      whatsapp: (e.mobile ? 'whatsapp://send?' : 'https://web.whatsapp.com/send?') + e.qs({text: h}),
      xing: 'https://www.xing.com/app/user?' + e.qs({op: 'share', title: m, url: h})
    }, e.open(d[u]))
  }, e.follow = function (t) {
    return function (t) {
      var n, o, r;
      return null == t && (t = {}), n = t.follow_url, o = t.network, r = t.url, null == r && (r = e.href), e.send('https://l.sharethis.com/log?' + e.qs({
        destinations: o,
        event: 'follow',
        followUrl: n,
        product: e.product,
        publisher: e.property,
        source: e.source,
        title: e.getTitle(),
        ts: Date.now(),
        url: r,
        sop: !0
      })), window.open(n, '_blank')
    }
  }(this), e.storage = {
    get: function (t) {
      if (e.hasLocalStorage) try {
        return JSON.parse(localStorage.getItem(t))
      } catch (e) {
      }
      return e.hasCookies ? e.getCookie(t) : e.get(t)
    }, set: function (t, n) {
      return e.hasLocalStorage ? localStorage.setItem(t, JSON.stringify(n)) : e.hasCookies ? e.setCookie(t, n) : e.set(t, n)
    }
  }, e.svg = function (e, t) {
    var n;
    return null == t && (t = 40), 'string' == typeof e && (e = [e]), '<svg fill="#fff" preserveAspectRatio="xMidYMid meet" height="1em" width="1em" viewBox="0 0 ' + t + ' ' + t + '">\n  <g>\n    ' + function () {
      var t, o, r;
      for (r = [], t = 0, o = e.length; t < o; t++) n = e[t], r.push('<path d=\'' + n + '\'></path>');
      return r
    }().join('') + '\n  </g>\n</svg>'
  }, e.toggleClass = function (t, n) {
    return e.hasClass(t, n) ? e.removeClass(t, n) : e.addClass(t, n)
  }, e.removeInvalidButtons = function (t) {
    var n, o, r, s, i;
    for (i = [], n = 0, r = t.length; n < r; n++) s = t[n], e.networks.indexOf(s) === -1 ? (o = t.indexOf(s), i.push(t.splice(o, 1))) : i.push(void 0);
    return i
  }
}).call(this);
!function (i, a) {
  window.__sharethis__.mobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(i) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(i.substr(0, 4))
}(navigator.userAgent || navigator.vendor || window.opera);
//颜色配置
(function () {
  window.__sharethis__.COLORS = {
    blogger: '#ff8000',
    delicious: '#205cc0',
    digg: '#262626',
    email: '#7d7d7d',
    facebook: '#3B5998',
    flipboard: '#e12828',
    github: '#333333',
    googleplus: '#dc4e41',
    instagram: '#bc2a8d',
    linkedin: '#0077b5',
    livejournal: '#00b0ea',
    medium: '#333333',
    messenger: '#448AFF',
    patreon: '#F96854',
    pinterest: '#CB2027',
    print: '#222222',
    quora: '#a62100',
    reddit: '#ff4500',
    sharethis: '#95D03A',
    sms: '#ffbd00',
    snapchat: '#fffc00',
    soundcloud: '#ff8800',
    spotify: '#1ED760',
    telegram: '#37AEE2',
    tumblr: '#32506d',
    twitch: '#6441A4',
    twitter: '#55acee',
    vk: '#4c6c91',
    wechat: '#4EC034',
    weibo: '#ff9933',
    whatsapp: '#25d366',
    xing: '#1a7576',
    yelp: '#d32323',
    youtube: '#FF0000'
  }
}).call(this);
(function () {
  window.__sharethis__.PRODUCTS = ['custom-share-buttons', 'ecommerce', 'email-list-builder', 'ga', 'inline-share-buttons', 'inline-share-buttons-wp', 'reviews', 'social-ab', 'sop', 'sop-wordpress-plugin', 'sticky-share-buttons', 'sticky-share-buttons-wp', 'top-content', 'unknown']
}).call(this);
(function () {
  var e;
  e = window.__sharethis__, e.i18n = {
    angry: {
      en: 'angry',
      es: 'me enoja',
      fr: 'grrr',
      it: 'grrr',
      ja: 'ひどいね',
      ko: '화나요',
      pt: 'ira',
      ru: 'bозмутительно',
      zh: '怒'
    },
    email: {
      en: 'email',
      es: 'correo electrónico',
      fr: 'email',
      it: 'e-mail',
      ja: 'Eメール',
      ko: '이메일',
      pt: 'o email',
      ru: 'Эл. адрес',
      zh: '电子邮件'
    },
    like: {
      en: 'like',
      es: 'me gusta',
      fr: 'j\'aime',
      it: 'mi piace',
      ja: 'いいね！',
      ko: '좋아요',
      pt: 'gosto',
      ru: 'hравится',
      zh: '赞'
    },
    lol: {
      en: 'lol',
      es: 'me divierte',
      fr: 'haha',
      it: 'ahah',
      ja: 'うけるね',
      ko: '웃겨요',
      pt: 'riso',
      ru: 'xа-ха',
      zh: '笑趴'
    },
    love: {
      en: 'love',
      es: 'me encanta',
      fr: 'j’adore',
      it: 'love',
      ja: '超いいね！',
      ko: '최고예요',
      pt: 'adoro',
      ru: 'cупер',
      zh: '大爱'
    },
    pin: {en: 'pin', es: 'pin', fr: 'épingle', it: 'pin', ja: 'ピン', ko: '핀', pt: 'pin', ru: 'Пин', zh: '针'},
    print: {
      en: 'print',
      es: 'impresión',
      fr: 'mpression',
      it: 'stampa',
      ja: 'プリント',
      ko: '인쇄',
      pt: 'impressão',
      ru: 'Распечатать',
      zh: '打印'
    },
    sad: {
      en: 'sad',
      es: 'me entristece',
      fr: 'triste',
      it: 'sigh',
      ja: '悲しいね',
      ko: '슬퍼요',
      pt: 'tristeza',
      ru: 'cочувствую',
      zh: '心碎'
    },
    'send message': {zh: '发信息'},
    share: {
      en: 'share',
      es: 'compartir',
      fr: 'partager',
      it: 'condividi',
      ja: 'シェアする',
      ko: '공유하기',
      pt: 'partilhar',
      ru: 'Поделиться',
      zh: '分享'
    },
    shares: {
      en: 'shares',
      es: 'veces compartido',
      fr: 'partages',
      it: 'condivisioni',
      ja: '再生回',
      ko: '재생회',
      pt: 'partilhas',
      ru: 'Перепосты',
      zh: '次转发'
    },
    tweet: {
      en: 'tweet',
      es: 'twittear',
      fr: 'tweeter',
      it: 'twittare',
      ja: 'ツイートする',
      ko: '트윗하기',
      pt: 'tweetar',
      ru: 'tвитнуть',
      zh: '发推'
    },
    wow: {
      en: 'wow',
      es: 'me asombra',
      fr: 'wouah',
      it: 'wow',
      ja: 'すごいね',
      ko: '멋져요',
      pt: 'surpresa',
      ru: 'yх ты!',
      zh: '哇'
    },
    flip: {
      en: 'flip',
      es: 'Flipear',
      fr: 'Ajouter',
      it: 'Flip',
      ja: 'フリップ',
      ko: '공유하기',
      pt: 'partilhar',
      ru: 'Флипнуть',
      zh: '翻转'
    },
    'sticky-width': {en: 120, es: 140, fr: 130, it: 140, ja: 160, ko: 120, pt: 130, ru: 160, zh: 120},
    subjects: {
      en: 'I\'d like to share a link with you',
      es: 'Me gustaría compartir este enlace contigo',
      ru: 'Я хотел бы поделиться с вами ссылкой',
      zh: '我想和你分享一个信息'
    }
  }
}).call(this);
//图标配置
(function () {
  var C, t, s;
  s = window.__sharethis__.svg, C = window.__sharethis__.img, t = /MSIE 8.0/.test(navigator.userAgent), window.__sharethis__.ICONS = {
    arrow_left: s('m22 30.7q0 0.3-0.2 0.5l-1.1 1.1q-0.3 0.3-0.6 0.3t-0.5-0.3l-10.4-10.4q-0.2-0.2-0.2-0.5t0.2-0.5l10.4-10.4q0.3-0.2 0.5-0.2t0.6 0.2l1.1 1.1q0.2 0.3 0.2 0.5t-0.2 0.6l-8.8 8.7 8.8 8.8q0.2 0.2 0.2 0.5z m8.6 0q0 0.3-0.3 0.5l-1.1 1.1q-0.2 0.3-0.5 0.3t-0.5-0.3l-10.4-10.4q-0.2-0.2-0.2-0.5t0.2-0.5l10.4-10.4q0.2-0.2 0.5-0.2t0.5 0.2l1.1 1.1q0.3 0.3 0.3 0.5t-0.3 0.6l-8.7 8.7 8.7 8.8q0.3 0.2 0.3 0.5z'),
    arrow_right: s('m22.3 21.4q0 0.3-0.2 0.5l-10.4 10.4q-0.3 0.3-0.6 0.3t-0.5-0.3l-1.1-1.1q-0.2-0.2-0.2-0.5t0.2-0.5l8.8-8.8-8.8-8.7q-0.2-0.3-0.2-0.6t0.2-0.5l1.1-1.1q0.3-0.2 0.5-0.2t0.6 0.2l10.4 10.4q0.2 0.2 0.2 0.5z m8.6 0q0 0.3-0.3 0.5l-10.4 10.4q-0.2 0.3-0.5 0.3t-0.5-0.3l-1.1-1.1q-0.2-0.2-0.2-0.5t0.2-0.5l8.8-8.8-8.8-8.7q-0.2-0.3-0.2-0.6t0.2-0.5l1.1-1.1q0.2-0.2 0.5-0.2t0.5 0.2l10.4 10.4q0.3 0.2 0.3 0.5z'),
    facebook: s('m21.7 16.7h5v5h-5v11.6h-5v-11.6h-5v-5h5v-2.1c0-2 0.6-4.5 1.8-5.9 1.3-1.3 2.8-2 4.7-2h3.5v5h-3.5c-0.9 0-1.5 0.6-1.5 1.5v3.5z'),
    github: s('M39.3171343,12.2106855 C37.5286789,9.06954026 35.1027532,6.58269119 32.0387189,4.74957732 C28.9742285,2.91636994 25.6287185,2 21.9998176,2 C18.3713727,2 15.0247682,2.91665044 11.9609163,4.74957732 C8.89660834,6.58259769 6.47077388,9.06954026 4.68231839,12.2106855 C2.89413653,15.3517373 2,18.7817901 2,22.5007505 C2,26.9680656 3.27147437,30.9851899 5.81506159,34.5531516 C8.35837518,38.1213939 11.6439598,40.5904784 15.6715419,41.9606857 C16.1403638,42.0498824 16.4874198,41.9871455 16.7130746,41.7740645 C16.9388206,41.560703 17.0515567,41.2934869 17.0515567,40.9735381 C17.0515567,40.920151 17.0470874,40.4398538 17.0384224,39.5320856 C17.0294838,38.6243175 17.0252881,37.8323928 17.0252881,37.1566857 L16.4263088,37.262899 C16.0444104,37.3346116 15.5626365,37.3649984 14.9809872,37.3563966 C14.3996114,37.3480753 13.7960716,37.2856189 13.1711884,37.1694949 C12.5460317,37.0543993 11.9645647,36.7874637 11.4263316,36.369249 C10.888372,35.9510342 10.5064737,35.4036058 10.2807277,34.7278051 L10.0203217,34.1135259 C9.84674812,33.7045675 9.57348146,33.2502626 9.20015688,32.7522944 C8.8268323,32.2538587 8.44931204,31.9159584 8.06741368,31.7380325 L7.88508389,31.6042374 C7.7635915,31.5153212 7.65085533,31.4080795 7.54660172,31.2836342 C7.44243933,31.1591889 7.36445436,31.0346501 7.31237316,30.9099243 C7.26020075,30.785105 7.30343453,30.6827251 7.44253054,30.6024107 C7.58162656,30.5220963 7.8330027,30.4831078 8.19775349,30.4831078 L8.71838302,30.5628612 C9.06562139,30.6341999 9.49513164,30.8472809 10.007461,31.2034133 C10.5195168,31.5592651 10.9404532,32.0218912 11.2703616,32.5911046 C11.6698636,33.3209468 12.1511814,33.8770705 12.7156832,34.2597562 C13.2797289,34.6424418 13.8484264,34.8334574 14.4212283,34.8334574 C14.9940303,34.8334574 15.488756,34.7889526 15.905588,34.7004104 C16.3219639,34.6114006 16.7126185,34.4776056 17.0773693,34.2997732 C17.2336129,33.1069308 17.6590187,32.1905609 18.3532218,31.5500088 C17.3637703,31.4434216 16.4741943,31.2828862 15.6840377,31.0694312 C14.8943372,30.8556957 14.0782769,30.5088196 13.2364039,30.027868 C12.394075,29.5475708 11.6953113,28.9511497 11.1399306,28.2396329 C10.5844586,27.5277422 10.1285886,26.5931403 9.77295882,25.4366685 C9.41714666,24.2797292 9.23919498,22.9451446 9.23919498,21.4325404 C9.23919498,19.2788233 9.92509794,17.4460834 11.2966302,15.9332923 C10.6541435,14.3141009 10.7147984,12.4989386 11.4787776,10.4879923 C11.9822596,10.3276439 12.7289087,10.4479753 13.7183602,10.8482385 C14.7079941,11.2486887 15.4325704,11.5917314 15.8928185,11.8761511 C16.3530667,12.1604773 16.7218308,12.4014206 16.999658,12.5968306 C18.6145399,12.134298 20.2810469,11.9029849 21.9996352,11.9029849 C23.7182234,11.9029849 25.3850953,12.134298 27.0000684,12.5968306 L27.9896111,11.9564655 C28.6663018,11.5291815 29.465397,11.1376136 30.3849813,10.7816682 C31.3051128,10.4259099 32.0087106,10.3279244 32.495045,10.4882728 C33.2759893,12.4993126 33.3455829,14.3143814 32.7029137,15.9335728 C34.0743548,17.4463639 34.7605314,19.2795713 34.7605314,21.4328209 C34.7605314,22.945425 34.5819412,24.2842171 34.2266763,25.4500387 C33.8709554,26.6160472 33.4111633,27.5497142 32.8471175,28.2530031 C32.2824333,28.9561985 31.5792004,29.5479448 30.7373274,30.0281485 C29.8952721,30.5087261 29.0789381,30.8556022 28.2892376,31.0693377 C27.4991723,31.2830732 26.6095963,31.4437021 25.6201448,31.5504763 C26.5225814,32.3510028 26.973891,33.6146228 26.973891,35.3407754 L26.973891,40.9727901 C26.973891,41.2927389 27.0824315,41.5598615 27.2996949,41.7733165 C27.5166847,41.9863975 27.8593625,42.0491344 28.3281845,41.9598442 C32.3563138,40.589824 35.6418985,38.1206459 38.1851208,34.5524037 C40.7280696,30.9844419 42,26.9673177 42,22.5000025 C41.9990879,18.7815096 41.1044953,15.3517373 39.3171343,12.2106855 Z', 42),
    instagram: s('M30.9612095,2 L13.0383173,2 C6.95179283,2 2,6.95202943 2,13.0385539 L2,30.9614461 C2,37.0482072 6.95179283,42 13.0383173,42 L30.9612095,42 C37.0482072,42 42,37.0479706 42,30.9614461 L42,13.0385539 C42.0002366,6.95202943 37.0482072,2 30.9612095,2 Z M38.4512427,30.9614461 C38.4512427,35.091292 35.091292,38.4510061 30.9614461,38.4510061 L13.0383173,38.4510061 C8.90870805,38.4512427 5.54899386,35.091292 5.54899386,30.9614461 L5.54899386,13.0385539 C5.54899386,8.90894465 8.90870805,5.54899386 13.0383173,5.54899386 L30.9612095,5.54899386 C35.0910554,5.54899386 38.4510061,8.90894465 38.4510061,13.0385539 L38.4510061,30.9614461 L38.4512427,30.9614461 Z M22,11.6934852 C16.3166412,11.6934852 11.693012,16.3171144 11.693012,22.0004732 C11.693012,27.6835954 16.3166412,32.306988 22,32.306988 C27.6833588,32.306988 32.306988,27.6835954 32.306988,22.0004732 C32.306988,16.3171144 27.6833588,11.6934852 22,11.6934852 Z M22,28.7577575 C18.273793,28.7577575 15.2420059,25.7264436 15.2420059,22.0002366 C15.2420059,18.273793 18.2735564,15.2422425 22,15.2422425 C25.7264436,15.2422425 28.7579941,18.273793 28.7579941,22.0002366 C28.7579941,25.7264436 25.726207,28.7577575 22,28.7577575 Z M32.7392554,8.68417504 C32.0554826,8.68417504 31.3837764,8.96099656 30.9008766,9.44602572 C30.4156108,9.92868888 30.1366599,10.6006317 30.1366599,11.2867705 C30.1366599,11.97078 30.4158474,12.6424862 30.9008766,13.1275153 C31.3835398,13.6101785 32.0554826,13.889366 32.7392554,13.889366 C33.4253942,13.889366 34.0949711,13.6101785 34.5800002,13.1275153 C35.0650294,12.6424862 35.3418509,11.9705434 35.3418509,11.2867705 C35.3418509,10.6006317 35.0650294,9.92868888 34.5800002,9.44602572 C34.0973371,8.96099656 33.4253942,8.68417504 32.7392554,8.68417504 Z M38.4512427,30.9614461 C38.4512427,35.091292 35.091292,38.4510061 30.9614461,38.4510061 L13.0383173,38.4510061 C8.90870805,38.4512427 5.54899386,35.091292 5.54899386,30.9614461 L5.54899386,13.0385539 C5.54899386,8.90894465 8.90870805,5.54899386 13.0383173,5.54899386 L30.9612095,5.54899386 C35.0910554,5.54899386 38.4510061,8.90894465 38.4510061,13.0385539 L38.4510061,30.9614461 L38.4512427,30.9614461 Z M30.9612095,2 L13.0383173,2 C6.95179283,2 2,6.95202943 2,13.0385539 L2,30.9614461 C2,37.0482072 6.95179283,42 13.0383173,42 L30.9612095,42 C37.0482072,42 42,37.0479706 42,30.9614461 L42,13.0385539 C42.0002366,6.95202943 37.0482072,2 30.9612095,2 Z', 42),
    linkedin: s('m13.3 31.7h-5v-16.7h5v16.7z m18.4 0h-5v-8.9c0-2.4-0.9-3.5-2.5-3.5-1.3 0-2.1 0.6-2.5 1.9v10.5h-5s0-15 0-16.7h3.9l0.3 3.3h0.1c1-1.6 2.7-2.8 4.9-2.8 1.7 0 3.1 0.5 4.2 1.7 1 1.2 1.6 2.8 1.6 5.1v9.4z m-18.3-20.9c0 1.4-1.1 2.5-2.6 2.5s-2.5-1.1-2.5-2.5 1.1-2.5 2.5-2.5 2.6 1.2 2.6 2.5z'),
    sharethis: s('m30 26.8c2.7 0 4.8 2.2 4.8 4.8s-2.1 5-4.8 5-4.8-2.3-4.8-5c0-0.3 0-0.7 0-1.1l-11.8-6.8c-0.9 0.8-2.1 1.3-3.4 1.3-2.7 0-5-2.3-5-5s2.3-5 5-5c1.3 0 2.5 0.5 3.4 1.3l11.8-6.8c-0.1-0.4-0.2-0.8-0.2-1.1 0-2.8 2.3-5 5-5s5 2.2 5 5-2.3 5-5 5c-1.3 0-2.5-0.6-3.4-1.4l-11.8 6.8c0.1 0.4 0.2 0.8 0.2 1.2s-0.1 0.8-0.2 1.2l11.9 6.8c0.9-0.7 2.1-1.2 3.3-1.2z'),
    twitter: s('m31.5 11.7c1.3-0.8 2.2-2 2.7-3.4-1.4 0.7-2.7 1.2-4 1.4-1.1-1.2-2.6-1.9-4.4-1.9-1.7 0-3.2 0.6-4.4 1.8-1.2 1.2-1.8 2.7-1.8 4.4 0 0.5 0.1 0.9 0.2 1.3-5.1-0.1-9.4-2.3-12.7-6.4-0.6 1-0.9 2.1-0.9 3.1 0 2.2 1 3.9 2.8 5.2-1.1-0.1-2-0.4-2.8-0.8 0 1.5 0.5 2.8 1.4 4 0.9 1.1 2.1 1.8 3.5 2.1-0.5 0.1-1 0.2-1.6 0.2-0.5 0-0.9 0-1.1-0.1 0.4 1.2 1.1 2.3 2.1 3 1.1 0.8 2.3 1.2 3.6 1.3-2.2 1.7-4.7 2.6-7.6 2.6-0.7 0-1.2 0-1.5-0.1 2.8 1.9 6 2.8 9.5 2.8 3.5 0 6.7-0.9 9.4-2.7 2.8-1.8 4.8-4.1 6.1-6.7 1.3-2.6 1.9-5.3 1.9-8.1v-0.8c1.3-0.9 2.3-2 3.1-3.2-1.1 0.5-2.3 0.8-3.5 1z'),
    weibo: s('m15.1 28.7q0.4-0.8 0.2-1.6t-1-1.1q-0.8-0.3-1.6 0t-1.4 1q-0.5 0.8-0.3 1.5t1 1.2 1.7 0 1.4-1z m2.1-2.7q0.1-0.3 0-0.6t-0.3-0.4q-0.4-0.2-0.7 0t-0.5 0.4q-0.3 0.7 0.3 1 0.3 0.1 0.7 0t0.5-0.4z m3.8 2.3q-1 2.3-3.5 3.4t-5 0.3q-2.4-0.8-3.3-2.9t0.2-4.1q1-2.1 3.4-3.1t4.7-0.5q2.4 0.7 3.5 2.7t0 4.2z m7-3.5q-0.2-2.2-2-3.8t-4.6-2.5-6.2-0.4q-4.9 0.5-8.2 3.1t-3 5.9q0.2 2.2 2 3.8t4.7 2.5 6.1 0.4q5-0.5 8.3-3.1t2.9-5.9z m6.9 0.1q0 1.5-0.8 3.1t-2.5 3-3.7 2.7-5.1 1.8-6 0.7-6.2-0.7-5.3-2.1-3.9-3.4-1.4-4.4q0-2.6 1.6-5.5t4.4-5.8q3.7-3.7 7.6-5.2t5.5 0.1q1.4 1.4 0.4 4.7-0.1 0.3 0 0.4t0.2 0.2 0.4 0 0.3-0.1l0.1-0.1q3.1-1.3 5.5-1.3t3.4 1.4q1 1.4 0 4 0 0.3-0.1 0.4t0.1 0.3 0.3 0.2 0.3 0.1q1.3 0.4 2.3 1t1.8 1.9 0.8 2.6z m-1.7-14q1 1.1 1.3 2.5t-0.2 2.6q-0.2 0.5-0.7 0.7t-0.9 0.1q-0.6-0.1-0.8-0.6t-0.1-1q0.5-1.4-0.5-2.5t-2.4-0.8q-0.6 0.1-1-0.2t-0.6-0.8q-0.1-0.5 0.2-1t0.8-0.5q1.4-0.3 2.7 0.1t2.2 1.4z m4.1-3.6q1.9 2.1 2.5 5t-0.3 5.4q-0.2 0.6-0.8 0.8t-1.1 0.1-0.9-0.7-0.1-1.2q0.6-1.8 0.2-3.8t-1.8-3.5q-1.4-1.6-3.3-2.2t-3.9-0.2q-0.6 0.2-1.1-0.2t-0.7-1 0.2-1.1 1-0.7q2.7-0.5 5.4 0.3t4.7 3z'),
    wechat: s('M27.7561832,11.4320611 C24.059542,11.6251908 20.8450382,12.7458015 18.2352672,15.2775573 C15.5984733,17.8354198 14.3948092,20.969771 14.7238168,24.8552672 C13.2789313,24.6763359 11.9629008,24.4793893 10.6393893,24.3679389 C10.1822901,24.3294656 9.63984733,24.3841221 9.25267176,24.6025954 C7.96748092,25.3277863 6.73541985,26.1465649 5.2751145,27.0593893 C5.54305344,25.8474809 5.71648855,24.7862595 6.02351145,23.7654962 C6.24931298,23.0152672 6.14473282,22.5977099 5.45358779,22.1091603 C1.01603053,18.9761832 -0.854503817,14.2874809 0.545343511,9.46030534 C1.84045802,4.99465649 5.02091603,2.28641221 9.34244275,0.874656489 C15.240916,-1.05206107 21.869771,0.913282443 25.4564885,5.59633588 C26.7519084,7.28793893 27.5462595,9.18656489 27.7561832,11.4320611 Z M10.7429008,9.92793893 C10.7769466,9.04503817 10.0119084,8.24961832 9.10320611,8.22305344 C8.17282443,8.19572519 7.40763359,8.90671756 7.38045802,9.82351145 C7.3529771,10.7526718 8.06366412,11.4972519 9.00076336,11.5210687 C9.92977099,11.5445802 10.7085496,10.8326718 10.7429008,9.92793893 Z M19.6193893,8.22244275 C18.7073282,8.23923664 17.9366412,9.01603053 17.9528244,9.90244275 C17.9694656,10.8212214 18.7254962,11.54 19.6633588,11.5287023 C20.6036641,11.5174046 21.3167939,10.7909924 21.3079389,9.85282443 C21.3001527,8.9319084 20.5474809,8.20549618 19.6193893,8.22244275 Z M36.0612214,34.4778626 C34.890687,33.9566412 33.8169466,33.1746565 32.6737405,33.0552672 C31.5349618,32.9363359 30.3378626,33.5932824 29.1464122,33.7151145 C25.5172519,34.0864122 22.2659542,33.0749618 19.5850382,30.5957252 C14.4862595,25.8796947 15.2148092,18.6485496 21.1138931,14.7838168 C26.3567939,11.3490076 34.0458015,12.4940458 37.7422901,17.26 C40.9680916,21.4187786 40.5890076,26.9393893 36.6509924,30.4331298 C35.5114504,31.4442748 35.101374,32.2763359 35.8325191,33.609313 C35.9674809,33.8554198 35.9829008,34.1670229 36.0612214,34.4778626 L36.0612214,34.4778626 Z M22.7369466,21.5772519 C23.4821374,21.5780153 24.0957252,20.9948092 24.1239695,20.2587786 C24.1537405,19.479542 23.5270229,18.8259542 22.7467176,18.8227481 C21.9741985,18.8192366 21.3270229,19.4819847 21.3538931,20.2496183 C21.3792366,20.9830534 21.9970992,21.5763359 22.7369466,21.5772519 Z M31.3264122,18.8258015 C30.6033588,18.8207634 29.9890076,19.4126718 29.959542,20.1432061 C29.9282443,20.9244275 30.5354198,21.5659542 31.3085496,21.5679389 C32.0563359,21.5703817 32.6471756,21.0048855 32.6743511,20.2607634 C32.7033588,19.4777099 32.0958779,18.831145 31.3264122,18.8258015 L31.3264122,18.8258015 Z'),
    wechatIcon: C('https://s3.amazonaws.com/sharethis-platform-cdn/img/wechat.svg')
  }, t && (window.__sharethis__.ICONS = {
    arrow_left: C('https://s3.amazonaws.com/sharethis-socialab-prod/ie8buttons/left-arrow.png'),
    arrow_right: C('https://s3.amazonaws.com/sharethis-socialab-prod/ie8buttons/right-arrow.png'),
    blogger: C('https://s3.amazonaws.com/sharethis-socialab-prod/ie8buttons/blogger_32.png'),
    delicious: C('https://s3.amazonaws.com/sharethis-socialab-prod/ie8buttons/delicious.png'),
    digg: C('https://s3.amazonaws.com/sharethis-socialab-prod/ie8buttons/digg.png'),
    email: C('https://s3.amazonaws.com/sharethis-socialab-prod/ie8buttons/email.png'),
    facebook: C('https://s3.amazonaws.com/sharethis-socialab-prod/ie8buttons/facebook.png'),
    flipboard: C('https://s3.amazonaws.com/sharethis-socialab-prod/ie8buttons/flipboard.png'),
    googleplus: C('https://s3.amazonaws.com/sharethis-socialab-prod/ie8buttons/google%2B.png'),
    linkedin: C('https://s3.amazonaws.com/sharethis-socialab-prod/ie8buttons/linkedin.png'),
    livejournal: C('https://s3.amazonaws.com/sharethis-socialab-prod/ie8buttons/livejournal_16.png'),
    pinterest: C('https://s3.amazonaws.com/sharethis-socialab-prod/ie8buttons/pinterest.png'),
    print: C('https://s3.amazonaws.com/sharethis-socialab-prod/ie8buttons/print.png'),
    reddit: C('https://s3.amazonaws.com/sharethis-socialab-prod/ie8buttons/reddit.png'),
    sharethis: C('https://s3.amazonaws.com/sharethis-socialab-prod/ie8buttons/sharethis_32.png'),
    sms: C('https://s3.amazonaws.com/sharethis-socialab-prod/ie8buttons/sms.png'),
    tumblr: C('https://s3.amazonaws.com/sharethis-socialab-prod/ie8buttons/tumblr.png'),
    twitter: C('https://s3.amazonaws.com/sharethis-socialab-prod/ie8buttons/twitter.png'),
    vk: C('https://s3.amazonaws.com/sharethis-socialab-prod/ie8buttons/vk.png'),
    weibo: C('https://s3.amazonaws.com/sharethis-socialab-prod/ie8buttons/weibo.png'),
    whatsapp: C('https://s3.amazonaws.com/sharethis-socialab-prod/ie8buttons/whatsapp_32%402x.png'),
    xing: C('https://s3.amazonaws.com/sharethis-socialab-prod/ie8buttons/xing.png'),
    wechat: C('https://s3.amazonaws.com/sharethis-socialab-prod/ie8buttons/wechat.png')
  })
}).call(this);
// 可选分享渠道
(function () {
  var e;
  e = window.__sharethis__, e.networks = ['blogger', 'delicious', 'digg', 'email', 'facebook', 'flipboard', 'googleplus', 'linkedin', 'livejournal', 'messenger', 'pinterest', 'print', 'reddit', 'sharethis', 'sms', 'tumblr', 'twitter', 'vk', 'wechat', 'weibo', 'whatsapp', 'xing']
}).call(this);
// share-all
(function () {
  var n;
  n = window.__sharethis__, n.loader['share-all'] = function (t) {
    var e, i, o, s, r, a, l, d, p, c, h, u, g, b, x, m, f, w, v, k, y, R, _, O, I, S, E;
    for (null == t && (t = {}), l = t.count_url, _ = t.share_url, S = t.url, p = t.description, g = t.image, w = t.message, v = t.network, I = t.title, E = t.username, y = n.newElement(), r = y.$el, u = y.id, n.addClass(r, 'st-hidden'), a = 'body.st-body-no-scroll {\n  bottom: 0;\n  left: 0;\n  overflow: hidden;\n  position: fixed;\n  right: 0;\n  top: 0;\n}\n#' + u + ' {\n  ' + n.FONT_FAMILY + '\n  ' + n.TRANSITION() + '\n  height: 100%;\n  left: 0;\n  opacity: 1;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 99999;\n}\n#' + u + '.st-hidden {\n  opacity: 0;\n  top: 100%;\n}\n#' + u + ' .st-backdrop {\n  background: rgba(0, 0, 0, 0.8);\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: 10;\n}\n#' + u + ' .st-btns {\n  bottom: 56px;\n  left: 0;\n  margin: 100px auto 0;\n  max-width: 90%;\n  position: absolute;\n  right: 0;\n  text-align: center;\n  top: 10px;\n  width: 500px;\n  z-index: 20;\n  overflow-y: auto;\n}\n#' + u + ' .st-logo {\n  background: #4c4c4c;\n  bottom: 0;\n  cursor: pointer;\n  padding: 20px;\n  position: absolute;\n  text-align: center;\n  width: 100%;\n  z-index: 30;\n}\n#' + u + ' .st-close {\n  ' + n.BORDER_RADIUS(28) + '\n  ' + n.BORDER_BOX + '\n  background: #999;\n  bottom: 28px;\n  color: #fff;\n  cursor: pointer;\n  font-size: 36px;\n  height: 56px;\n  line-height: 28px;\n  padding: 10px;\n  position: absolute;\n  right: 14px;\n  width: 56px;\n  z-index: 40;\n}\n#' + u + ' .st-btn {\n  ' + n.BORDER_RADIUS(4) + '\n  ' + n.BORDER_BOX + '\n  ' + n.TRANSITION() + '\n  color: white;\n  cursor: pointer;\n  display: inline-block;\n  font-size: 12px;\n  font-weight: 400;\n  height: 48px;\n  line-height: 30px;\n  margin: 4px;\n  opacity: 1;\n  overflow: hidden;\n  padding: 8px 12px;\n  position: relative;\n  text-align: left;\n  top: 0;\n  vertical-align: top;\n  width: 148px;\n}\n#' + u + ' .st-btn::before {\n  ' + n.BORDER_RADIUS(4) + '\n  ' + n.TRANSITION() + '\n  background: #fff;\n  content: \'\';\n  height: 100%;\n  left: 0;\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n#' + u + ' .st-btn:hover::before {\n  opacity: .2;\n}\n#' + u + ' .st-btn > svg {\n  display: inline-block;\n  height: 20px;\n  margin-top: 6px;\n  vertical-align: top;\n  width: 20px;\n}\n#' + u + ' .st-btn > img {\n  display: inline-block;\n  height: 20px;\n  margin-top: 6px;\n  vertical-align: top;\n  width: 20px;\n}\n#' + u + ' .st-btn > span {\n  display: inline-block;\n  letter-spacing: 0.5px;\n  text-align: center;\n  vertical-align: top;\n  width: 96px;\n}\n@media(max-width: 1200px) {\n  #' + u + ' .st-btns {\n    margin-top: 50px;\n  }\n}\n@media(max-width: 800px) {\n  #' + u + ' .st-btns {\n    margin: 0 auto;\n    max-width: 100%;\n    padding: 32px 10px 50px;\n  }\n  #' + u + ' .st-btn {\n    width: 130px;\n  }\n  #' + u + ' .st-btn > span {\n    width: 74px;\n  }\n}', k = function () {
      var t, e, i, o;
      for (i = n.networks, o = [], t = 0, e = i.length; t < e; t++) v = i[t], o.push('#' + u + ' .st-btn[data-network=\'' + v + '\'] {\n  background-color: ' + n.COLORS[v] + ';\n}');
      return o
    }().join('\n'), d = a, d += k, n.css(d), c = '<div class=\'st-backdrop\'></div>', c += '<div class=\'st-btns\'>', R = n.networks, h = 0, x = R.length; h < x; h++) v = R[h], 'sharethis' !== v && (n.mobile || 'sms' !== v) && (c += '<div class=\'st-btn\' data-network=\'' + v + '\'>\n  ' + n.ICONS[v] + '\n  <span>' + v + '</span>\n</div>');
    for (c += '</div>', O = 'https://s3.amazonaws.com/sharethis-socialab-prod/share-this-logo%402x.png', f = 'https://sharethis.com/platform/share-buttons?' + n.qs({
      utm_source: 'share-buttons',
      utm_medium: 'referral',
      utm_campaign: 'sharethis-button-referral'
    }), c += '<div class="st-logo">\n  <a href="' + f + '" target="_blank">\n    <img height="16" width="96" src="' + O + '">\n  </a>\n</div>', c += '<div class="st-close">\n  ' + n.ICONS.close + '\n</div>', r.innerHTML = c, e = r.querySelector('.st-backdrop'), o = r.querySelectorAll('.st-btn'), s = r.querySelector('.st-close'), n.addEventListener(e, 'click', function () {
      return n.close(r)
    }), n.addEventListener(s, 'click', function () {
      return n.close(r)
    }), n.addEventListener(document, 'keydown', function (t) {
      if (n.isEsc(t)) return n.close(r)
    }), b = 0, m = o.length; b < m; b++) i = o[b], n.addEventListener(i, 'click', function () {
      return n.close(r), n.share({
        description: p,
        image: g,
        network: this.getAttribute('data-network'),
        share_url: _,
        title: I,
        url: S,
        username: E
      })
    });
    return setTimeout(function () {
      return n.removeClass(r, 'st-hidden'), n.addClass(document.body, 'st-body-no-scroll')
    }, 10)
  }
}).call(this);
// share-wechat-mobile
(function () {
  var n;
  n = window.__sharethis__, n.loader['share-wechat-mobile'] = function (t) {
    var e, i, o, r, s, d, a, c, l, p, u, x;
    return null == t && (t = {}), x = t.url, p = n.newElement(), r = p.$el, c = p.id, n.addClass(r, 'st-hidden'), l = 'body.st-body-no-scroll {\n  bottom: 0;\n  left: 0;\n  overflow: hidden;\n  position: fixed;\n  right: 0;\n  top: 0;\n}\n#' + c + ' {\n  ' + n.TRANSITION() + '\n  ' + n.FONT_FAMILY + '\n  bottom: 0;\n  left: 0;\n  opacity: 1;\n  overflow-y: auto;\n  padding-bottom: 100px;\n  position: fixed;\n  right: 0;\n  text-align: center;\n  top: 0;\n  width: 100%;\n  z-index: 99999;\n}\n\n#' + c + '.st-hidden {\n  opacity: 0;\n  top: 100%;\n}\n#' + c + ' .st-backdrop {\n  background: rgba(0, 0, 0, 0.8);\n  bottom: 0;\n  left: 0;\n  position: fixed;\n  right: 0;\n  top: 0;\n  z-index: 10;\n}\n#' + c + ' .st-wechat {\n  margin-top: 120px;\n  height: 64px;\n  width: 220px;\n  display: inline-block;\n  position: relative;\n  z-index: 10;\n}\n#' + c + ' .st-form {\n  margin: 20px auto;\n  max-width: 80%;\n  position: relative;\n  width: 320px;\n  z-index: 20;\n}\n#' + c + ' .st-form > input {\n  ' + n.BORDER_BOX + '\n  ' + n.BORDER_RADIUS(4) + '\n  background-color: #fff;\n  border: 0;\n  color: #333;\n  display: block;\n  font-size: 16px;\n  height: 48px;\n  margin-bottom: 15px;\n  padding: 12px;\n  width: 100%;\n}\n#' + c + ' .st-form > textarea {\n  ' + n.BORDER_BOX + '\n  ' + n.BORDER_RADIUS(4) + '\n  background-color: #fff;\n  border: 0;\n  color: #333;\n  display: block;\n  font-size: 16px;\n  height: 96px;\n  margin-bottom: 15px;\n  padding: 12px;\n  width: 100%;\n}\n#' + c + ' .st-copy {\n  ' + n.BORDER_RADIUS(2) + '\n  background: #4EC034;\n  color: #fff;\n  cursor: pointer;\n  display: inline-block;\n  height: 36px;\n  letter-spacing: .5px;\n  line-height: 36px;\n  margin: 15px auto 0 auto;\n  padding: 0 10px;\n  position: relative;\n  text-align: center;\n  min-width: 120px;\n  z-index: 20;\n}\n#' + c + ' .st-open {\n  ' + n.BORDER_RADIUS(2) + '\n  background: #4EC034;\n  color: #fff;\n  cursor: pointer;\n  display: inline-block;\n  height: 36px;\n  letter-spacing: .5px;\n  line-height: 36px;\n  margin: 15px auto 0 auto;\n  padding: 0 10px;\n  position: relative;\n  text-align: center;\n  min-width: 120px;\n  z-index: 20;\n}\n#' + c + ' .st-logo {\n  background: #4c4c4c;\n  bottom: 0;\n  padding: 20px;\n  position: fixed;\n  text-align: center;\n  width: 100%;\n  z-index: 30;\n}\n#' + c + ' .st-close {\n  ' + n.BORDER_RADIUS(28) + '\n  ' + n.BORDER_BOX + '\n  background: #999;\n  bottom: 28px;\n  color: #fff;\n  cursor: pointer;\n  font-size: 36px;\n  height: 56px;\n  line-height: 28px;\n  padding: 10px;\n  position: fixed;\n  right: 14px;\n  width: 56px;\n  z-index: 40;\n}', n.css(l), a = '<div class=\'st-backdrop\'></div>', a += '<div class=\'st-wechat\'>' + n.ICONS.wechatIcon + '</div>', a += '<div class=\'st-form\'>\n  <input class="st-url" type="text" value="" />\n</div>', a += '<div class="st-copy">Copy URL</div>\n<div class="st-open" style="display: none">Open WeChat</div>', u = 'https://s3.amazonaws.com/sharethis-socialab-prod/share-this-logo%402x.png', a += '<div class="st-logo">\n  <img height="16" width="96" src="' + u + '">\n</div>', a += '<div class="st-close">\n  ' + n.ICONS.close + '\n</div>', r.innerHTML = a, s = r.querySelector('.st-form > input'), e = r.querySelector('.st-backdrop'), i = r.querySelector('.st-close'), o = r.querySelector('.st-copy'), d = r.querySelector('.st-open'), s.value = x, n.addEventListener(e, 'click', function () {
      return n.close(r)
    }), n.addEventListener(i, 'click', function () {
      return n.close(r)
    }), n.addEventListener(o, 'click', function () {
      var n;
      if (s.setSelectionRange(0, s.value.length), n = document.execCommand('copy')) return o.innerText = 'Copied!', o.style.background = '#f9a825', d.style.display = 'inline-block'
    }), n.addEventListener(d, 'click', function () {
      var t;
      return t = function (t) {
        return d.innerText = t, d.style.background = '#c62828', n.__share_email_timeout && clearTimeout(n.__share_email_timeout), n.__share_email_timeout = setTimeout(function () {
          return d.innerText = 'Open', d.style.background = '#00c853'
        }, 2e3)
      }, d.innerText = 'Opening...', d.style.background = '#f9a825', x = 'weixin://', n.open(x)
    }), n.addEventListener(document, 'keydown', function (t) {
      if (n.isEsc(t)) return n.close(r)
    }), setTimeout(function () {
      return n.removeClass(r, 'st-hidden'), n.addClass(document.body, 'st-body-no-scroll')
    }, 10)
  }
}).call(this);
// TODO unknown
(function () {
  var n, t, o, e, r, i, u, s, c, a, d = [].indexOf || function (n) {
    for (var t = 0, o = this.length; t < o; t++) if (t in this && this[t] === n) return t;
    return -1
  };
  if (a = window.__sharethis__, !a.loaded) {
    for (a.loaded = !0, s = document.getElementsByTagName('script') || [], n = 0, t = s.length; n < t; n++) u = s[n], c = u.getAttribute('src'), /\/js\/sharethis.js/.test(c) && (a.src = c, a.property = null != (o = /property=([a-zA-Z0-9]+)/.exec(c)) ? o[1] : void 0, a.product = null != (e = /product=([a-zA-Z0-9-]+)/.exec(c)) ? e[1] : void 0, a.source = null != (r = /source=([a-zA-Z0-9-]+)/.exec(c)) ? r[1] : void 0);
    a.href = document.location.href, null == a.source && (a.source = 'sharethis.js'), null == a.property && (a.property = 'anonymous'), null == a.product && (a.product = 'unknown'), i = a.product, d.call(a.PRODUCTS, i) < 0 && (a.product = 'unknown'), a.initialize = function (n) {
      return a.init = function (n) {
        return a.config = n, window.__sharethis__docReady(function () {
          var t, o, e, r, i;
          for ('function' == typeof window.onShareThisLoaded && window.onShareThisLoaded(), r = a.PRODUCTS, i = [], t = 0, o = r.length; t < o; t++) e = r[t], i.push(a.load(e, n[e]));
          return i
        })
      }, a.config ? a.init(a.config) : 'anonymous' !== a.property ? a.js('https://buttons-config.sharethis.com/js/' + a.property + '.js') : setTimeout(function () {
        return a.init({})
      }, 10)
    }, a.initialize()
  }
}).call(this);
// custom-share-buttons
// gdpr-compliance-tool
// image-share-buttons 好像没有用
// TODO unknown
(function () {
  var t, n, i;
  i = window.__sharethis__, t = {
    blogger: 'https://www.blogger.com/',
    digg: 'https://www.digg.com/',
    facebook: 'https://www.facebook.com/',
    flipboard: 'https://flipboard.com/',
    googleplus: 'https://plus.google.com/',
    github: 'https://www.github.com/',
    instagram: 'https://www.instagram.com/',
    medium: 'https://www.medium.com/',
    messenger: 'https://www.messenger.com/',
    linkedin: 'https://www.linkedin.com/',
    patreon: 'https://www.patreon.com/',
    pinterest: 'https://www.pinterest.com/',
    quora: 'https://www.quora.com/',
    reddit: 'https://www.reddit.com/',
    snapchat: 'https://www.snapchat.com/',
    soundcloud: 'https://soundcloud.com/',
    spotify: 'https://open.spotify.com/',
    telegram: 'https://t.me/',
    tumblr: 'https://www.tumblr.com/',
    twitch: 'https://www.twitch.tv/',
    twitter: 'https://www.twitter.com/',
    vk: 'https://www.vk.com/',
    wechat: 'https://web.wechat.com/',
    weibo: 'https://www.weibo.com/',
    yelp: 'https://www.yelp.com/',
    youtube: 'https://www.youtube.com/'
  }, n = function (n, e) {
    var o, l, s, a, p, r, d, w, c, u, h, g, f, m, b, v, y, x, k, _, A, I, O, R, N, S, T, C, L, z, E, j;
    for (s = e.action, a = e.action_enable, p = e.action_pos, r = e.alignment, h = e.fade_in, v = e.id, k = e.language, R = e.networks, N = e.onLoad, S = e.padding, T = e.profiles, C = e.radius, z = e.size, E = e.spacing, j = e.url, d = 'left' === r ? 'right' : 'left', null == s && (s = 'Follow us:'), null == a && (a = !0), null == p && (p = 'top'), null == r && (r = 'left'), null == h && (h = !0), null == k && (k = 'en'), null == R && (R = ['facebook', 'twitter', 'pinterest']), null == S && (S = 10), null == T && (T = {}), null == C && (C = 0), null == z && (z = 40), null == E && (E = 8), null == v && (v = 'st-' + i.uid()), n.setAttribute('id', v), i.addClass(n, 'st-inline-follow-buttons'), i.addClass(n, 'st-#{action_pos}'), h && i.addClass(n, 'st-hidden'), c = '#' + v + ' {\n  ' + i.FONT_FAMILY + ';\n  direction: ltr;\n  display: block;\n  opacity: 1;\n  text-align: ' + r + ';\n  z-index: 94034;\n}\n#' + v + '.st-animated {\n  ' + i.TRANSITION('opacity') + '\n}\n#' + v + ' .st-left {\n  display: inline-block;\n  padding-top: ' + i.px(z / 4) + ';\n  padding-right: 6px;\n}\n#' + v + ' .st-top {\n  padding-bottom: ' + i.px(z / 8) + ';\n}\n#' + v + ' .st-right {\n  display: inline-block;\n  padding-top: ' + i.px(z / 4) + ';\n  padding-left: 4px;\n}\n#' + v + '.st-hidden {\n  opacity: ' + (h ? 0 : 1) + ';\n}\n#' + v + ' .st-btn {\n  ' + i.BORDER_BOX + '\n  ' + i.TRANSITION(['opacity', 'top']) + '\n  ' + i.BORDER_RADIUS(C) + '\n  cursor: pointer;\n  display: inline-block;\n  height: ' + i.px(z) + ';\n  line-height: ' + i.px(z) + ';\n  margin-right: ' + (E ? i.px(E) : 0) + ';\n  padding: 0 ' + i.px(S) + ';\n  position: relative;\n  text-align: center;\n  top: 0;\n  vertical-align: top;\n  white-space: nowrap;\n}\n#' + v + ' .st-btn:last-child {\n  margin-right: 0;\n}\n#' + v + ' .st-btn > svg {\n  height: ' + i.px(z / 2) + ';\n  width: ' + i.px(z / 2) + ';\n  position: relative;\n  top: ' + i.px(z / 4) + ';\n  vertical-align: top; \n}\n#' + v + ' .st-btn > img {\n  height: ' + i.px(z / 2) + ';\n  width: ' + i.px(z / 2) + ';\n  position: relative;\n  top: ' + i.px(z / 4) + ';\n  vertical-align: top;\n}\n#' + v + ' .st-btn > span {\n  ' + i.TRANSITION() + '\n  color: #fff;\n  display: inline-block;\n  font-weight: 500;\n  letter-spacing: 0.5px;\n  min-width: ' + i.px(30 + Math.floor(15 * z / 16)) + ';\n  opacity: 1;\n  padding: 0 6px;\n  position: relative;\n  vertical-align: top;\n}\n#' + v + '.st-justified {\n  display: flex;\n  text-align: center;\n}\n#' + v + '.st-justified .st-btn {\n  ' + i.FLEX + '\n}', f = '#' + v + ' .st-btn:hover {\n  opacity: .8;\n  top: -4px;\n}', O = function () {
      var t, n, e;
      for (e = [], t = 0, n = R.length; t < n; t++) I = R[t], e.push('#' + v + ' .st-btn[data-network=\'' + I + '\'] {\n  background-color: ' + i.COLORS[I] + ';\n}');
      return e
    }().join('\n'), u = c, u += f, u += O, i.css(u), m = '', a && (null != s ? s.length : void 0) > 0 && 'right' !== p && (m += '<div class=\'st-' + p + '\'>\n  <span>' + i.capitalize(s) + '</span>\n</div>'), y = b = 0, _ = R.length; b < _; y = ++b) I = R[y], w = ['st-btn'], 0 === y && w.push('st-first'), y === R.length - 1 && w.push('st-last'), m += '<div class=\'' + w.join(' ') + '\' data-network=\'' + I + '\'>\n  ' + i.ICONS[I] + '\n</div>';
    for (a && (null != s ? s.length : void 0) > 0 && 'right' === p && (m += '<div class=\'st-' + p + '\'>\n  <span>' + i.capitalize(s) + '</span>\n</div>'), n.innerHTML = m, l = n.querySelectorAll('.st-btn'), L = function () {
      var t, i, e, o, s, p, d;
      for (e = n.offsetWidth, i = function () {
        var t, n, i, e;
        for (e = a ? 70 : 0, n = 0, i = l.length; n < i; n++) t = l[n], 'none' !== t.style.display && (e += 'justified' === r ? 160 : t.offsetWidth + E);
        return e
      }, o = 0, p = l.length; o < p; o++) t = l[o], t.style.display = 'inline-block';
      for (d = [], y = s = l.length - 1; s >= 0; y = s += -1) t = l[y], i() > e ? d.push(t.style.display = 'none') : d.push(void 0);
      return d
    }, i.addEventListener(window, 'resize', L), g = function (e) {
      return i.addEventListener(e, 'click', function () {
        var o;
        return I = e.getAttribute('data-network'), o = t[I] + (T[I] || ''), 'youtube' === I && T[I] && (o += '?sub_confirmation=1'), 'tumblr' === I && T[I] && (o = t[I].replace('www', T[I])), i.follow({
          follow_url: o,
          network: I,
          url: j || n.getAttribute('data-url')
        }), 'function' == typeof N ? N() : void 0
      })
    }, x = 0, A = l.length; x < A; x++) o = l[x], g(o);
    return L(), h && i.addClass(n, 'st-animated'), h && i.removeClass(n, 'st-hidden'), 'function' == typeof N && N(), {
      $buttons: l,
      $el: n,
      id: v,
      resize: L
    }
  }
}).call(this);
// TODO unknown
(function () {
  var n, t;
  t = window.__sharethis__, n = function (n, e) {
    var s, i, a, l, o, r, c, d, u, p, h, g, b, f, v, y, x, w, A, R, S, T, N, C, O, _, m, I, k;
    for (i = e.alignment, h = e.id, y = e.language, w = e.min_count, S = e.padding, N = e.reactions, I = e.size, k = e.url, c = e.fade_in, A = e.onLoad, R = e.onReact, r = n.getAttribute('data-url'), null == c && (c = !0), null == w && (w = 0), null == N && (N = function () {
      var n;
      n = [];
      for (f in t.REACTIONS) n.push(f);
      return n
    }()), null == S && (S = 10), null == y && (y = 'en'), null == I && (I = 48), null == k && (k = r || t.href), m = t.storage.get('st_reaction_' + k), null == h && (h = 'st-' + t.uid()), n.setAttribute('id', h), t.addClass(n, ['st-inline-reaction-buttons', 'st-' + i, m ? 'st-reacted' : void 0, c ? 'st-hidden' : void 0, y ? 'st-has-labels' : void 0, 'en' !== y ? 'st-lang-' + y : void 0]), l = '#' + h + ' {\n  ' + t.FONT_FAMILY + '\n  ' + t.TRANSITION('opacity') + '\n  direction: ltr;\n  display: block;\n  opacity: 1;\n  text-align: ' + i + ';\n}\n#' + h + '.st-hidden {\n  opacity: ' + (c ? 0 : 1) + ';\n}\n#' + h + ' .st-btn {\n  ' + t.BORDER_BOX + '\n  ' + t.TRANSITION() + '\n  display: inline-block;\n  font-size: ' + t.px(I / 2) + ';\n  line-height: ' + t.px(I / 2) + ';\n  opacity: 1;\n  padding: ' + t.px(S) + ';\n  position: relative;\n  text-align: center;\n  vertical-align: top;\n  white-space: nowrap;\n  width: ' + t.px(I + 2 * S) + ';\n}\n#' + h + ' .st-btn > svg {\n  display: block;\n  height: ' + t.px(I) + ';\n  margin: auto;\n  width: ' + t.px(I) + ';\n  vertical-align: top;\n}\n#' + h + ' .st-btn > span {\n  ' + t.TRANSITION('font-size') + ';\n  color: #555;\n  font-size: 14px;\n  font-weight: 400;\n  letter-spacing: 0.5px;\n  vertical-align: top;\n}\n#' + h + ' .st-btn .st-count.st-grow {\n  font-size: 18px;\n}\n#' + h + ' .st-btn.st-hide-count .st-count {\n  opacity: 0;\n}\n#' + h + ' .st-btn .st-text {\n  display: none;\n  font-weight: bold;\n  line-height: 12px;\n  white-space: normal;\n  word-break: break-all;\n}\n#' + h + '.st-justified {\n  display: flex;\n  text-align: center;\n}\n#' + h + '.st-justified .st-btn {\n  ' + t.FLEX + '\n}\n#' + h + ' .st-btn.st-selected {\n  ' + t.TRANSFORM('scale(1.2)') + '\n}\n#' + h + '.st-reacted .st-btn:not(.st-selected) {\n  filter: grayscale(100%);\n}', d = '#' + h + ':not(.st-reacted) .st-btn:hover {\n  ' + t.TRANSFORM('scale(1.2)') + '\n  cursor: pointer;\n}\n#' + h + ':not(.st-reacted) .st-btn:active {\n  ' + t.TRANSFORM('scale(1.4)') + '\n}\n#' + h + '.st-has-labels:not(.st-reacted) .st-btn:hover .st-count {\n  display: none;\n}\n#' + h + '.st-has-labels:not(.st-reacted) .st-btn:hover .st-text {\n  display: block;\n}\n#' + h + '.st-has-labels:not(.st-reacted) .st-btn:hover span {\n  font-size: 10px;\n}', o = l, t.mobile || (o += d), t.css(o), u = '', g = p = 0, x = N.length; p < x; g = ++p) T = N[g], t.REACTIONS[T] && (b = t.REACTIONS[T], a = ['st-btn'], T === m && a.push('st-selected'), 0 === g && a.push('st-first'), g === N.length - 1 && a.push('st-last'), v = y ? '<span class="st-text">\n  ' + (null != (C = t.i18n[b.label]) && null != (O = C[y]) ? O.toUpperCase() : void 0) + '\n</span>' : '', u += '<div class=\'' + a.join(' ') + '\' data-reaction=\'' + T + '\'>\n  <svg\n    xmlns="http://www.w3.org/2000/svg"\n    viewBox="0 0 64 64"\n    enable-background="new 0 0 64 64"\n  >\n    ' + b.icon + '\n  </svg>\n  <span class="st-count"></span>\n  ' + v + '\n</div>');
    return n.innerHTML = u, s = n.querySelectorAll('.st-btn'), _ = function () {
      var e, i, a, l, o, r, c;
      if (a = n.offsetWidth, i = function () {
        var n, t, e, i;
        for (i = 0, t = 0, e = s.length; t < e; t++) n = s[t], i += I + 2 * S;
        return i
      }, i() > a) {
        for (c = a / i(), r = [], l = 0, o = s.length; l < o; l++) e = s[l], e.style.padding = t.px(S * c), e.style.width = t.px((I + 2 * S) * c), e.querySelector('svg').style.width = t.px(I * c), r.push(e.querySelector('svg').style.height = t.px(I * c));
        return r
      }
    }, t.loadCounts({type: 'reactions', url: k}, function (e) {
      var i, a, l, o, r, d, u, p, h, g;
      for (l = 0, d = s.length; l < d; l++) i = s[l], T = i.getAttribute('data-reaction'), p = e[T] || {}, r = p.label, g = p.value, null != (h = i.querySelector('.st-count')) && (h.innerHTML = r), r && g >= w ? t.removeClass(i, 'st-hide-count') : t.addClass(i, 'st-hide-count');
      for (_(), c && t.removeClass(n, 'st-hidden'), t.addEventListener(window, 'resize', _), a = function (e) {
        return t.addEventListener(e, 'click', function () {
          if (!t.hasClass(n, 'st-reacted')) return T = e.getAttribute('data-reaction'), t.addClass(n, 'st-reacted'), t.addClass(e, 'st-selected'), t.react({
            reaction: T,
            url: k
          }), t.inc(e.querySelector('.st-count')), t.storage.set('st_reaction_' + k, T), 'function' == typeof R ? R(T) : void 0
        })
      }, o = 0, u = s.length; o < u; o++) i = s[o], a(i);
      return 'function' == typeof A ? A() : void 0
    })
  }
}).call(this);
// inline-share-buttons
(function () {
  var t, n, e = [].indexOf || function (t) {
    for (var n = 0, e = this.length; n < e; n++) if (n in this && this[n] === t) return n;
    return -1
  };
  n = window.__sharethis__, n.loader['inline-share-buttons'] = function (e) {
    var i, s, l, a, o, r, d;
    if (null == e && (e = {}), e.enabled) if (e.id) {
      if (i = document.getElementById(e.id)) return t(i, e)
    } else {
      if (!e.container) {
        for (s = document.querySelectorAll('.sharethis-inline-share-buttons'), d = [], l = 0, o = s.length; l < o; l++) i = s[l], d.push(t(i, e));
        return d
      }
      if ('string' == typeof e.container && (e.container = document.getElementById(e.container)), r = n.newElement(e.container), i = r.$el, a = r.id, e.id = a, i) return t(i, e)
    }
  }, t = function (t, i) {
    var s, l, a, o, r, d, u, h, p, c, g, b, f, v, m, x, y, w, A, k, _, C, I, O, S, L, T, j, z, R, E, N, B, M, q, D, F,
      H, W, $, X, U, Y, G, J, K, P, Q, V;
    if (g = i.fade_in, D = i.onLoad, r = i.alignment, f = i.font_size, S = i.language, F = i.padding, H = i.radius, Y = i.size, G = i.spacing, y = i.id, O = i.labels, R = i.min_count, q = i.networks, U = i.show_total, Q = i.use_native_counts, X = i.show_mobile_buttons, P = i.url, K = i.title, w = i.image, c = i.description, V = i.username, z = i.message, J = i.subject, d = 'left' === r ? 'right' : 'left', null == g && (g = !0), null == r && (r = 'left'), null == f && (f = 12), null == R && (R = 0), null == S && (S = 'en'), null == q && (q = ['facebook', 'twitter', 'pinterest', 'email', 'sharethis']), null == F && (F = 10), null == H && (H = 0), null == X && (X = n.mobile), null == Y && (Y = 40), null == G && (G = 8), null == J && (J = n.i18n.subjects[S]), null == Q && (Q = !0), null == y && (y = 'st-' + n.uid()), t.setAttribute('id', y), n.addClass(t, ['st-' + r, 'en' !== S ? 'st-lang-' + S : void 0, 'counts' === O || 'cta' === O ? 'st-has-labels' : void 0, g ? 'st-hidden' : void 0, 'st-inline-share-buttons']), h = '#' + y + ' {\n  ' + n.FONT_FAMILY + ';\n  direction: ltr;\n  display: block;\n  opacity: 1;\n  text-align: ' + r + ';\n  z-index: 94034;\n}\n#' + y + '.st-animated {\n  ' + n.TRANSITION('opacity') + '\n}\n#' + y + '.st-hidden {\n  opacity: ' + (g ? 0 : 1) + ';\n}\n#' + y + '.st-hide {\n  display: none;\n}\n#' + y + ' .st-btn {\n  ' + n.BORDER_BOX + '\n  ' + n.TRANSITION(['opacity', 'top']) + '\n  ' + n.BORDER_RADIUS(H) + '\n  cursor: pointer;\n  display: inline-block;\n  font-size: ' + n.px(f) + ';\n  height: ' + n.px(Y) + ';\n  line-height: ' + n.px(Y) + ';\n  margin-right: ' + (G ? n.px(G) : 0) + ';\n  padding: 0 ' + n.px(F) + ';\n  position: relative;\n  text-align: center;\n  top: 0;\n  vertical-align: top;\n  white-space: nowrap;\n}\n#' + y + ' .st-btn:last-child {\n  margin-right: 0;\n}\n#' + y + ' .st-btn > svg {\n  height: ' + n.px(Y / 2) + ';\n  width: ' + n.px(Y / 2) + ';\n  position: relative;\n  top: ' + n.px(Y / 4) + ';\n  vertical-align: top;\n}\n#' + y + ' .st-btn > img {\n  height: ' + n.px(Y / 2) + ';\n  width: ' + n.px(Y / 2) + ';\n  position: relative;\n  top: ' + n.px(Y / 4) + ';\n  vertical-align: top;\n}\n#' + y + ' .st-btn > span {\n  ' + n.TRANSITION() + '\n  color: #fff;\n  display: inline-block;\n  font-weight: 500;\n  letter-spacing: 0.5px;\n  min-width: ' + n.px(30 + Math.floor(15 * Y / 16)) + ';\n  opacity: 1;\n  padding: 0 6px;\n  position: relative;\n  vertical-align: top;\n}\n#' + y + '.st-has-labels .st-btn {\n  min-width: ' + n.px(60 + Math.floor(15 * Y / 8)) + ';\n}\n#' + y + '.st-has-labels .st-btn.st-remove-label {\n  min-width: 50px;\n}\n#' + y + '.st-has-labels .st-btn.st-remove-label > span {\n  display: none;\n}\n#' + y + '.st-has-labels .st-btn.st-hide-label > span {\n  display: none;\n}\n#' + y + ' .st-total {\n  color: #555;\n  display: inline-block;\n  font-weight: 500;\n  line-height: ' + n.px(.375 * Y) + ';\n  margin-right: 0;\n  max-width: 80px;\n  padding: 4px 8px;\n  text-align: center;\n}\n#' + y + ' .st-total.st-hidden {\n  display: none;\n}\n#' + y + ' .st-total > span {\n  font-size: ' + n.px(.5 * Y) + ';\n  line-height: ' + n.px(.55 * Y) + ';\n  display: block;\n  padding: 0;\n}\n#' + y + ' .st-total > span.st-shares {\n  font-size: ' + n.px(.3 * Y) + ';\n  line-height: ' + n.px(.3 * Y) + ';\n}\n#' + y + '.st-justified {\n  display: flex;\n  text-align: center;\n}\n#' + y + '.st-justified .st-btn {\n  ' + n.FLEX + '\n}', v = '#' + y + ' .st-btn:hover {\n  opacity: .8;\n  top: -4px;\n}', E = '#' + y + ' {\n  bottom: 0;', M = function () {
      var t, e, i;
      for (i = [], t = 0, e = q.length; t < e; t++) B = q[t], i.push('#' + y + ' .st-btn[data-network=\'' + B + '\'] {\n  background-color: ' + n.COLORS[B] + ';\n}');
      return i
    }().join('\n'), p = h, n.mobile || (p += v), p += M, n.css(p), m = '', n.removeInvalidButtons(q), !X) for (W = ['sms'], x = 0, L = W.length; x < L; x++) B = W[x], A = q.indexOf(B), A > -1 && q.splice(A, 1);
    for (U && (m += '<div class=\'st-total st-hidden\'>\n  <span class=\'st-label\'></span>\n  <span class=\'st-shares\'>\n    ' + n.capitalize(n.i18n.shares[S]) + '\n  </span>\n</div>'), A = k = 0, T = q.length; k < T; A = ++k) B = q[A], u = ['st-btn'], 0 === A && u.push('st-first'), A === q.length - 1 && u.push('st-last'), C = n.getShareLabel(B, S), 'cta' !== O && (C = ''), I = '<span class=\'st-label\'>' + C + '</span>', m += '<div class=\'' + u.join(' ') + '\' data-network=\'' + B + '\'>\n  ' + n.ICONS[B] + '\n  ' + ('counts' === O || 'cta' === O ? I : '') + '\n</div>';
    for (t.innerHTML = m, l = t.querySelectorAll('.st-btn'), a = t.querySelector('.st-total'), o = t.querySelector('.st-total .st-label'), N = function (t, n) {
      if ('url' === t && (P = n), 'image' === t) return w = n
    }, $ = function () {
      var e, i, s, o, d, u, h, p;
      for (s = t.offsetWidth, i = function () {
        var t, e, i, s;
        for (s = 0, U && (s += a.offsetWidth), e = 0, i = l.length; e < i; e++) t = l[e], 'none' !== t.style.display && (s += 'justified' === r ? n.hasClass(t, 'st-remove-label') ? 65 : 160 : t.offsetWidth + G);
        return s
      }, o = 0, u = l.length; o < u; o++) e = l[o], e.style.display = 'inline-block', n.removeClass(e, 'st-remove-label');
      for (A = d = l.length - 1; d >= 0; A = d += -1) e = l[A], i() > s && n.addClass(e, 'st-remove-label');
      for (p = [], A = h = l.length - 1; h >= 0; A = h += -1) e = l[A], 'sharethis' !== e.getAttribute('data-network') && (i() > s ? p.push(e.style.display = 'none') : p.push(void 0));
      return p
    }, n.addEventListener(window, 'resize', $), b = function (e) {
      return n.addEventListener(e, 'click', function () {
        return n.share({
          description: c || t.getAttribute('data-description'),
          image: w || t.getAttribute('data-image'),
          message: z || (null != t ? t.getAttribute('data-message') : void 0),
          network: e.getAttribute('data-network'),
          share_url: t.getAttribute('data-short-url'),
          subject: J || t.getAttribute('data-email-subject'),
          title: K || (null != t ? t.getAttribute('data-title') : void 0),
          url: P || t.getAttribute('data-url'),
          username: V || t.getAttribute('data-username')
        })
      })
    }, _ = 0, j = l.length; _ < j; _++) s = l[_], b(s);
    return U || 'counts' === O ? n.loadCounts({
      facebook: e.call(q, 'facebook') >= 0,
      url: P || t.getAttribute('data-url'),
      use_native_counts: Q
    }, function (e) {
      var i, r, d, u, h, p, c;
      if (U && ((null != (d = e.total) ? d.value : void 0) > R ? (o.innerHTML = (null != (u = e.total) ? u.label : void 0) || '', n.removeClass(a, 'st-hidden')) : n.addClass(a, 'st-hidden')), 'counts' === O) for (i = 0, r = l.length; i < r; i++) s = l[i], B = s.getAttribute('data-network'), h = e[B] || {}, C = h.label, c = h.value, C && c > R ? (null != (p = s.querySelector('.st-label')) && (p.innerHTML = C), n.removeClass(s, 'st-hide-label')) : n.addClass(s, 'st-hide-label');
      return $(), g && n.addClass(t, 'st-animated'), g && n.removeClass(t, 'st-hidden'), 'function' == typeof D ? D() : void 0
    }) : ($(), g && n.addClass(t, 'st-animated'), g && n.removeClass(t, 'st-hidden'), 'function' == typeof D && D()), {
      $buttons: l,
      $el: t,
      id: y,
      modify: N,
      resize: $
    }
  }
}).call(this);

// promo-bar
// sticky-share-buttons
(function () {
  var n, t, e = [].indexOf || function (n) {
    for (var t = 0, e = this.length; t < e; t++) if (t in this && this[t] === n) return t;
    return -1
  };
  t = window.__sharethis__, t.loader['sticky-share-buttons'] = function (e) {
    var i, l, s, o, a, r, d, h;
    if (null == e && (e = {}), e.enabled) if (e.id) {
      if (i = document.getElementById(e.id)) return n(i, e)
    } else {
      if (!e.container) {
        if (l = document.querySelectorAll('.sharethis-sticky-share-buttons'), 0 === l.length) return d = t.newElement(), i = d.$el, o = d.id, n(i, e);
        for (h = [], s = 0, a = l.length; s < a; s++) i = l[s], h.push(n(i, e));
        return h
      }
      if ('string' == typeof e.container && (e.container = document.getElementById(e.container)), r = t.newElement(e.container), i = r.$el, o = r.id, e.id = o, i) return n(i, e)
    }
  }, n = function (n, i) {
    var l, s, o, a, r, d, h, p, u, g, c, b, f, v, m, x, w, y, k, A, _, I, S, T, N, O, C, R, z, L, E, B, j, q, M, D, H,
      F, W, $, U, X, Y, G, J, K, P, Q, V, Z, nn, tn, en, ln, sn, on, an;
    if (F = i.onLoad, d = i.alignment, g = i.container, v = i.font_size, m = i.hide_desktop, W = i.padding, $ = i.radius, V = i.size, nn = i.spacing, k = i.id, O = i.labels, C = i.language, B = i.min_count, H = i.networks, P = i.show_toggle, Q = i.show_total, j = i.mobile_breakpoint, J = i.show_mobile, Z = i.slide_in, ln = i.top, on = i.use_native_counts, K = i.show_mobile_buttons, sn = i.url, en = i.title, A = i.image, b = i.description, an = i.username, E = i.message, tn = i.subject, h = 'left' === d ? 'right' : 'left', null == d && (d = 'left'), null == m && (m = !1), null == O && (O = 'counts'), null == C && (C = 'en'), null == B && (B = 0), null == j && (j = 0), null == H && (H = ['facebook', 'twitter', 'pinterest', 'email', 'sharethis', 'sms']), null == W && (W = 12), null == $ && ($ = 0), null == J && (J = !1), null == P && (P = !0), null == Q && (Q = !1), null == V && (V = 48), null == Z && (Z = !0), null == tn && (tn = t.i18n.subjects[C]), null == ln && (ln = 100), null == on && (on = !0), null == K && (K = t.mobile), null == k && (k = 'st-' + t.uid()), n.setAttribute('id', k), G = 'right' === d ? t.getScrollbarWidth() : 0, G = 0, t.addClass(n, ['st-sticky-share-buttons', 'st-' + d, P ? 'st-toggleable' : void 0, 'counts' === O || 'cta' === O ? 'st-has-labels' : void 0, Q ? 'st-show-total' : void 0, Z ? 'st-hidden' : void 0, 'en' !== C ? 'st-lang-' + C : void 0]), u = '#' + k + ' {\n  ' + t.FONT_FAMILY + ';\n  ' + t.TRANSITION() + '\n  backface-visibility: hidden;\n  display: ' + (m ? 'none' : 'block') + ';\n  position: fixed;\n  opacity: 1;\n  text-align: left;\n  top: ' + t.px(ln) + ';\n  z-index: 94034;\n}\n#' + k + '.st-' + d + ' {\n  ' + d + ': ' + t.px(G) + ';\n}\n#' + k + '.st-hidden.st-' + d + ' {\n  ' + d + ': -' + t.px(V) + ';\n}\n#' + k + '.st-hidden {\n  width: ' + t.px(2 * V) + ';\n}\n#' + k + ' > div {\n  clear: ' + d + ';\n  float: ' + d + ';\n}\n#' + k + ' .st-btn {\n  ' + t.BORDER_BOX + '\n  ' + t.TRANSITION() + '\n  cursor: pointer;\n  display: inline-block;\n  font-size: ' + t.px(v) + ';\n  height: ' + t.px(V) + ';\n  line-height: ' + t.px(V / 2) + ';\n  margin-bottom: ' + (nn ? t.px(nn) : 0) + ';\n  opacity: 1;\n  overflow: hidden;\n  padding: ' + t.px(W) + ';\n  position: relative;\n  text-align: left;\n  top: 0;\n  vertical-align: top;\n  white-space: nowrap;\n  width: ' + t.px(V) + ';\n}\n#' + k + ' .st-btn.st-first {\n  border-top-' + h + '-radius: ' + t.px($) + ';\n}\n#' + k + ' .st-btn.st-last {\n  border-bottom-' + h + '-radius: ' + t.px($) + ';\n}\n#' + k + ' .st-btn > svg {\n  ' + t.TRANSITION() + '\n  height: ' + t.px(V / 2) + ';\n  margin-left: 0;\n  vertical-align: top;\n  width: ' + t.px(V / 2) + ';\n}\n#' + k + ' .st-btn > img {\n  ' + t.TRANSITION() + '\n  height: ' + t.px(V / 2) + ';\n  margin-left: 0;\n  vertical-align: top;\n  width: ' + t.px(V / 2) + ';\n}\n#' + k + ' .st-btn > span {\n  ' + t.TRANSITION() + '\n  color: #fff;\n  display: inline-block;\n  font-weight: 500;\n  left: -35px;\n  letter-spacing: 0.5px;\n  opacity: 0;\n  padding: 0 6px;\n  position: relative;\n  vertical-align: top;\n  filter: alpha(opacity=0);\n}\n#' + k + ' .st-btn.st-hide-label > span {\n  display: none !important;\n}\n#' + k + ' .st-total {\n  ' + t.TRANSITION() + '\n  background: #fff;\n  color: #555;\n  display: inline-block;\n  font-weight: 500;\n  line-height: ' + t.px(.375 * V) + ';\n  margin-right: 0;\n  min-height: 34px;\n  max-width: 80px;\n  opacity: 1;\n  padding: 4px 0;\n  text-align: center;\n  width: ' + t.px(V) + ';\n}\n#' + k + ' .st-total.st-hidden {\n  display: none;\n}\n#' + k + ' .st-total > span {\n  display: block;\n  font-size: ' + t.px(.38 * V) + ';\n  line-height: ' + t.px(.45 * V) + ';\n  padding: 0;\n}\n#' + k + ' .st-total > span.st-shares {\n  font-size: ' + t.px(.23 * V) + ';\n  line-height: ' + t.px(.23 * V) + ';\n}\n#' + k + ' .st-toggle {\n  ' + d + ': -' + t.px(V + G) + ';\n  ' + t.TRANSITION() + '\n  background: #ccc;\n  border-bottom-' + h + '-radius: ' + t.px($) + ';\n  color: white;\n  cursor: pointer;\n  font-size: ' + t.px(.5 * V) + ';\n  line-height: ' + t.px(.5 * V) + ';\n  position: relative;\n  text-align: center;\n  width: ' + t.px(V) + ';\n}\n#' + k + '.st-hidden .st-toggle {\n  border-top-' + h + '-radius: ' + t.px($) + ';\n}\n#' + k + '.st-' + d + ' .st-toggle .st-' + d + ' {\n  display: inline-block;\n}\n#' + k + '.st-' + d + '.st-hidden .st-toggle .st-' + d + ' {\n  display: none;\n}\n#' + k + '.st-' + d + ' .st-toggle .st-' + h + ' {\n  display: none;\n}\n#' + k + '.st-' + d + '.st-hidden .st-toggle .st-' + h + ' {\n  display: inline-block;\n}', q = '#' + k + ' {\n  bottom: 0;\n  display: ' + (J ? 'flex' : 'none') + ';\n  left: 0;\n  right: 0;\n  top: auto;\n  width: 100%;\n}\n#' + k + '.st-hidden {\n  bottom: -' + t.px(V) + ';\n  width: 100%;\n}\n#' + k + '.st-hidden.st-left {\n  left: 0;\n}\n#' + k + '.st-hidden.st-right {\n  right: 0;\n}\n#' + k + ' > div {\n  -moz-flex: 1;\n  -ms-flex: 1;\n  -webkit-flex: 1;\n  clear: none;\n  flex: 1;\n  float: none;\n}\n#' + k + ' .st-total {\n  background: #fff;\n  padding: 6px 8px;\n}\n#' + k + ' .st-btn {\n  ' + t.BORDER_RADIUS('0 !important') + '\n  text-align: center;\n  width: auto;\n}\n#' + k + ' .st-btn > span {\n  display: none;\n}\n#' + k + ' .st-toggle {\n  display: none;\n}', J && !document.body.style.paddingBottom && (q += 'body { padding-bottom: 48px; }'), Y = '@media (max-width: ' + t.px(j) + ') {\n  ' + q + '\n}', x = '#' + k + ':hover .st-toggle {\n  ' + d + ': 0;\n}\n#' + k + '.st-hidden:hover .st-toggle {\n  ' + d + ': ' + t.px(V) + ';\n}\n#' + k + '.st-toggleable:hover .st-btn.st-last {\n  border-bottom-' + h + '-radius: 0;\n}\n#' + k + '.st-toggleable:hover .st-btn.st-last:hover {\n  border-bottom-' + h + '-radius: ' + t.px($) + ';\n}\n#' + k + ' .st-btn:hover {\n  border-bottom-' + h + '-radius: ' + t.px($) + ';\n  border-top-' + h + '-radius: ' + t.px($) + ';\n}\n#' + k + '.st-has-labels .st-btn:hover {\n  width: ' + t.px(t.i18n['sticky-width'][C]) + ';\n}\n#' + k + ':not(.st-has-labels) .st-btn:hover {\n  width: ' + t.px(1.3 * V) + ';\n}\n#' + k + ' .st-btn.st-hide-label:hover {\n  width: ' + t.px(1.3 * V) + ';\n}\n#' + k + ' .st-btn:hover > svg {\n  margin-left: 5px;\n}\n#' + k + ' .st-btn:hover > img {\n  margin-left: 5px;\n}\n#' + k + ' .st-btn:hover > span {\n  opacity: 1;\n  display: inline-block;\n  left: 0;\n  filter: alpha(opacity=100);\n}\n@media (max-width: ' + t.px(j) + ') {\n  #' + k + ' .st-btn:hover > svg {\n    margin-left: 0;\n  }\n  #' + k + ' .st-btn:hover > span {\n    display: none;\n  }\n}', D = function () {
      var n, e, i;
      for (i = [], n = 0, e = H.length; n < e; n++) M = H[n], i.push('#' + k + ' .st-btn[data-network=\'' + M + '\'] {\n  background-color: ' + t.COLORS[M] + ';\n}');
      return i
    }().join('\n'), c = u, t.mobile || (c += x), t.mobile || (c += Y), t.mobile && (c += q), c += D, t.css(c), !K) for (U = ['sms'], y = 0, R = U.length; y < R; y++) M = U[y], _ = H.indexOf(M), _ > -1 && H.splice(_, 1);
    for (t.removeInvalidButtons(H), w = '', Q && (w += '<div class=\'st-total st-hidden\'>\n  <span class=\'st-label\'></span>\n  <span class=\'st-shares\'>\n    ' + t.capitalize(t.i18n.shares[C]) + '\n  </span>\n</div>'), _ = I = 0, z = H.length; I < z; _ = ++I) M = H[_], p = ['st-btn'], 0 === _ && p.push('st-first'), _ === H.length - 1 && p.push('st-last'), T = t.getShareLabel(M, C), 'cta' !== O && (T = ''), N = '<span class=\'st-label\'>' + T + '</span>', w += '<div class=\'' + p.join(' ') + '\' data-network=\'' + M + '\'>\n  ' + t.ICONS[M] + '\n  ' + ('counts' === O || 'cta' === O ? N : '') + '\n</div>';
    for (P && (w += '<div class="st-toggle">\n  <div class="st-left">\n    ' + t.ICONS.arrow_left + '\n  </div>\n  <div class="st-right">\n    ' + t.ICONS.arrow_right + '\n  </div>\n</div>'), n.innerHTML = w, s = n.querySelectorAll('.st-btn'), o = n.querySelector('.st-toggle'), a = n.querySelector('.st-total'), r = n.querySelector('.st-total .st-label'), t.addEventListener(o, 'click', function () {
      return t.toggleClass(n, 'st-hidden')
    }), X = function () {
      var n, i, l, o, a, r, d, h;
      for (r = 100, (t.mobile || window.innerWidth < j) && (r = 6), Q && r--, e.call(H, 'sharethis') >= 0 && r--, e.call(H, 'sms') >= 0 && r--, e.call(H, 'whatsapp') >= 0 && r--, e.call(H, 'messenger') >= 0 && r--, e.call(H, 'wechat') >= 0 && r--, i = 0, o = s.length; i < o; i++) n = s[i], n.style.display = 'inline-block';
      for (h = [], _ = l = 0, a = s.length; l < a; _ = ++l) n = s[_], 'sharethis' !== (d = n.getAttribute('data-network')) && 'sms' !== d && 'messenger' !== d && 'whatsapp' !== d && 'wechat' !== d && (r-- > 0 || h.push(n.style.display = 'none'));
      return h
    }, t.addEventListener(window, 'resize', X), f = function (e) {
      return t.addEventListener(e, 'click', function () {
        return t.share({
          description: b || (null != n ? n.getAttribute('data-description') : void 0),
          image: A || (null != n ? n.getAttribute('data-image') : void 0),
          message: E || (null != n ? n.getAttribute('data-message') : void 0),
          network: e.getAttribute('data-network'),
          share_url: null != n ? n.getAttribute('data-short-url') : void 0,
          subject: tn || n.getAttribute('data-email-subject'),
          title: en || (null != n ? n.getAttribute('data-title') : void 0),
          url: sn || (null != n ? n.getAttribute('data-url') : void 0),
          username: an || (null != n ? n.getAttribute('data-username') : void 0)
        })
      })
    }, S = 0, L = s.length; S < L; S++) l = s[S], f(l);
    return Q || 'counts' === O ? t.loadCounts({
      facebook: e.call(H, 'facebook') >= 0,
      url: sn || (null != n ? n.getAttribute('data-url') : void 0),
      use_native_counts: on
    }, function (e) {
      var i, o, d, h, p, u;
      if (Q && ((null != (d = e.total) ? d.value : void 0) > B ? (r.innerHTML = e.total.label, t.removeClass(a, 'st-hidden')) : t.addClass(a, 'st-hidden')), 'counts' === O) for (i = 0, o = s.length; i < o; i++) l = s[i], M = l.getAttribute('data-network'), h = e[M] || {}, T = h.label, u = h.value, T && u > B ? (null != (p = l.querySelector('.st-label')) && (p.innerHTML = T), t.removeClass(l, 'st-hide-label')) : t.addClass(l, 'st-hide-label');
      return X(), setTimeout(function () {
        return t.removeClass(n, 'st-hidden')
      }, 10), 'function' == typeof F ? F() : void 0
    }) : (X(), setTimeout(function () {
      return t.removeClass(n, 'st-hidden')
    }, 10), 'function' == typeof F ? F() : void 0)
  }
}).call(this);
(function () {
  window.__sharethis__.md5 = '18ddbb461c68bb07edb070f4b7a68276';
})();