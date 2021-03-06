Date.now || (Date.now = function () {
  return (new Date).getTime()
}), !function (a, b) {
  'use strict';
  
  function c () {
    if (!f) {
      f = !0;
      for (var a = 0; a < e.length; a++) e[a].fn.call(window, e[a].ctx);
      e = []
    }
  }
  
  function d () {
    'complete' === document.readyState && c()
  }
  
  a = a || 'docReady', b = b || window;
  var e = [], f = !1, g = !1;
  b[a] = function (a, b) {
    if ('function' != typeof a) throw new TypeError('callback for docReady(fn) must be a function');
    return f ? void setTimeout(function () {
      a(b)
    }, 1) : (e.push({
      fn: a,
      ctx: b
    }), void('complete' === document.readyState || !document.attachEvent && 'interactive' === document.readyState ? setTimeout(c, 1) : g || (document.addEventListener ? (document.addEventListener('DOMContentLoaded', c, !1), window.addEventListener('load', c, !1)) : (document.attachEvent('onreadystatechange', d), window.attachEvent('onload', c)), g = !0)))
  }
}('__sharethis__docReady', window), document.querySelectorAll || (document.querySelectorAll = function (a) {
  var b, c = document.createElement('style'), d = [];
  for (document.documentElement.firstChild.appendChild(c), document._qsa = [], c.styleSheet.cssText = a + '{x-qsa:expression(document._qsa && document._qsa.push(this))}', window.scrollBy(0, 0), c.parentNode.removeChild(c); document._qsa.length;) b = document._qsa.shift(), b.style.removeAttribute('x-qsa'), d.push(b);
  return document._qsa = null, d
}), document.querySelector || (document.querySelector = function (a) {
  var b = document.querySelectorAll(a);
  return b.length ? b[0] : null
}), Array.prototype.indexOf || (Array.prototype.indexOf = function (a, b) {
  var c, d, e;
  if (null == this) throw new TypeError('"this" is null or not defined');
  if (d = Object(this), e = d.length >>> 0, 0 === e) return -1;
  if (c = +b || 0, 1 / 0 === Math.abs(c) && (c = 0), c >= e) return -1;
  for (c = Math.max(c >= 0 ? c : e - Math.abs(c), 0); e > c;) {
    if (c in d && d[c] === a) return c;
    c++
  }
  return -1
}), function () {
  var a, b = [].indexOf || function (a) {
    for (var b = 0, c = this.length; c > b; b++) if (b in this && this[b] === a) return b;
    return -1
  };
  null == window.__sharethis__ && (window.__sharethis__ = {v: '3.1.2'}), a = window.__sharethis__, a.protocol = 'https:' === document.location.protocol ? 'https' : 'http', a.METRICS = 'https://platform-metrics-api.sharethis.com', a.API = 'https://platform-api.sharethis.com', a.SECOND = 1e3, a.MINUTE = 60 * a.SECOND, a.HOUR = 60 * a.MINUTE, a.DAY = 24 * a.HOUR, a.WEEK = 7 * a.DAY, a.BORDER_BOX = '-moz-box-sizing: border-box;\n-webkit-box-sizing: border-box;\nbox-sizing: border-box;', a.BORDER_RADIUS = function (b) {
    return '-moz-border-radius: ' + a.px(b) + ';\n-webkit-border-radius: ' + a.px(b) + ';\nborder-radius: ' + a.px(b) + ';'
  }, a.BOX_SHADOW = function (a) {
    return '-moz-box-shadow: ' + a + ';\n-webkit-box-shadow: ' + a + ';\nbox-shadow: ' + a + ';'
  }, a.FLEX = '-moz-flex: 1;\n-ms-flex: 1;\n-webkit-flex: 1;\nflex: 1;', a.FONT_FAMILY = 'font-family: "Helvetica Neue", Verdana, Helvetica, Arial, sans-serif;', a.TRANSFORM = function (a) {
    return '-ms-transform: ' + a + ';\n-webkit-transform: ' + a + ';\ntransform: ' + a + ';'
  }, a.TRANSITION = function (a, b) {
    var c, d, e, f;
    for (null == a && (a = ['all']), null == b && (b = '0.2s'), f = [], c = 0, d = a.length; d > c; c++) e = a[c], f.push(e + ' ' + b + ' ease-in');
    return f = f.join(', '), '-moz-transition: ' + f + '; -ms-transition: ' + f + '; -o-transition: ' + f + '; -webkit-transition: ' + f + '; transition: ' + f + ';'
  }, a._uid = 0, a.uid = function () {
    return ++a._uid
  }, a.cache = {}, a.get = function (b) {
    return a.cache[b]
  }, a.set = function (b, c) {
    return a.cache[b] = c
  }, a.has = function (b) {
    return null != a.cache[b]
  }, a.addClass = function (a, c) {
    var d, e, f, g;
    for (d = (a.className || '').split(' '), 'string' == typeof c && (c = [c]), e = 0, f = c.length; f > e; e++) g = c[e], null != g && b.call(d, g) < 0 && d.push(g);
    return a.className = d.join(' ')
  }, a.addEventListener = function (a, b, c) {
    return a && b && c ? a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent ? a.attachEvent('on' + b, c) : a['on' + b] = c : void 0
  }, a.capitalize = function (a) {
    return '' + a.charAt(0).toUpperCase() + a.substring(1).toLowerCase()
  }, a.copy = function () {
    var b;
    return b = 'function' == typeof window.getSelection ? window.getSelection() : void 0, null != b && b.isCollapsed ? void 0 : (b = b.toString(), b.length > 140 && (b = b.slice(0, 137) + '...'), b = encodeURIComponent(b), b.length > 0 ? a.send('https://l.sharethis.com/log?' + a.qs({
      destinations: 'copy',
      description: b,
      event: 'share',
      product: a.product,
      publisher: a.property,
      source: 'sharethis.js',
      title: a.getTitle(),
      ts: Date.now(),
      url: a.href,
      sop: !0
    })) : void 0)
  }, a.addEventListener(document, 'copy', a.copy), a.close = function (b) {
    return a.removeClass(document.body, 'st-body-no-scroll'), b ? (a.addClass(b, 'st-hidden'), setTimeout(function () {
      return a.remove(b)
    }, 200)) : void 0
  }, a.css = function (a) {
    var b, c;
    return b = document.getElementsByTagName('head')[0], c = document.createElement('style'), c.setAttribute('type', 'text/css'), c.styleSheet ? c.styleSheet.cssText = a : c.appendChild(document.createTextNode(a)), b.appendChild(c)
  }, a.emit = function (b, c) {
    var d, e, f, g, h, i;
    for (h = (null != (g = a.handlers) ? g[b] : void 0) || [], i = [], e = 0, f = h.length; f > e; e++) d = h[e], i.push(d(c));
    return i
  }, a.formatNumber = function (a) {
    return a > 1e6 ? Math.round(10 * (a / 1e6)) / 10 + 'm' : a > 1e3 ? Math.round(10 * (a / 1e3)) / 10 + 'k' : '' + a
  }, a.getCookie = function (a) {
    var b, c;
    return c = '; ' + document.cookie, b = c.split('; ' + a + '='), 2 === b.length ? b.pop().split(';').shift() : null
  }, a.getDescription = function () {
    var a, b, c, d, e, f, g, h, i;
    for (g = ['property', 'name'], c = 0, e = g.length; e > c; c++) for (b = g[c], h = ['og:description', 'twitter:description', 'description', 'Description'], d = 0, f = h.length; f > d; d++) if (i = h[d], a = document.querySelector('meta[' + b + '=\'' + i + '\']')) return a.content;
    return ''
  }, a.getImage = function () {
    var a, b, c, d, e, f, g, h, i;
    for (g = ['property', 'name'], c = 0, e = g.length; e > c; c++) for (b = g[c], h = ['og:image', 'twitter:image'], d = 0, f = h.length; f > d; d++) if (i = h[d], a = document.querySelector('meta[' + b + '=\'' + i + '\']')) return a.content;
    return ''
  }, a.getScrollbarWidth = function () {
    var a, b, c;
    return b = document.createElement('div'), b.style.visibility = 'hidden', b.style.width = '100px', b.style.msOverflowStyle = 'scrollbar', b.style.overflow = 'scroll', document.body.appendChild(b), a = document.createElement('div'), a.style.width = '100%', b.appendChild(a), c = b.offsetWidth - a.offsetWidth, b.parentNode.removeChild(b), c
  }, a.getScrollDepth = function () {
    var b, c, d, e, f, g;
    return d = document.documentElement, b = document.body, c = Math.max.apply(Math, [b.scrollHeight || 0, b.offsetHeight || 0, d.clientHeight || 0, d.scrollHeight || 0, d.offsetHeight || 0]), g = a.getWindowSize().height, e = window.pageYOffset || (d || b.parentNode || b).scrollTop, f = Math.floor(100 * (g + e) / c)
  }, a.getShareLabel = function (b, c) {
    var d;
    switch (null == c && (c = 'en'), d = '', b) {
      case'email':
        d = a.i18n.email[c];
        break;
      case'flipboard':
        d = a.i18n.flip[c];
        break;
      case'pinterest':
        d = a.i18n.pin[c];
        break;
      case'print':
        d = a.i18n.print[c];
        break;
      case'twitter':
        d = a.i18n.tweet[c];
        break;
      default:
        d = a.i18n.share[c]
    }
    return a.capitalize(d)
  }, a.getTitle = function () {
    var a, b, c, d, e, f, g, h, i;
    for (g = ['property', 'name'], c = 0, e = g.length; e > c; c++) for (b = g[c], h = ['og:title', 'twitter:title'], d = 0, f = h.length; f > d; d++) if (i = h[d], a = document.querySelector('meta[' + b + '=\'' + i + '\']')) return a.content;
    return document.title
  }, a.getWindowSize = function () {
    var a, b, c, d;
    return a = document.body, b = document.documentElement, c = window.innerHeight, d = window.innerWidth, {
      height: c || b.clientHeight || a.clientHeight,
      width: d || b.clientWidth || a.clientWidth
    }
  }, a.hasClass = function (a, b) {
    return new RegExp(b).test(a.className)
  }, a.hasCookies = function () {
    var a;
    return a = '__sharethis_cookie_test__=1', document.cookie = a, document.cookie.indexOf(a) > -1
  }(), a.hasLocalStorage = function () {
    var a;
    a = '__sharethis_local_storage_test__';
    try {
      return localStorage.setItem(a, 'hello world'), localStorage.removeItem(a), !0
    } catch (a) {
      return !1
    }
  }(), a.hostname = function (b) {
    var c;
    return null == b && (b = a.href), c = document.createElement('a'), c.setAttribute('href', b), c.hostname
  }, a.img = function (a) {
    return a ? '<img src="' + a + '" />' : void 0
  }, a.incLocalStorageShares = function (b, c) {
    var d, e, f, g, h, i, j, k, l;
    return (d = a.storage.get('st_shares_' + c)) ? (e = (null != (f = d[b]) ? f.value : void 0) + 1 || 0, l = (null != (g = d.total) ? g.value : void 0) + 1 || 0, null != (h = d[b]) && (h.value = e), null != (i = d[b]) && (i.label = a.formatNumber(e)), null != (j = d.total) && (j.value = l), null != (k = d.total) && (k.label = a.formatNumber(l)), d.update_time = Math.round(new Date / 1e3), a.storage.set('st_shares_' + c, d)) : void 0
  }, a.inc = function (b) {
    var c;
    return c = a.parseNumber(b.innerText), b.innerText = a.formatNumber(c + 1), a.addClass(b, 'st-grow'), setTimeout(function () {
      return a.removeClass(b, 'st-grow')
    }, 400)
  }, a.isEnter = function (a) {
    return 13 === a.which || 13 === a.keyCode
  }, a.isEsc = function (a) {
    var b;
    return 'Escape' === (b = a.key) || 'Esc' === b || 27 === a.keyCode
  }, a.isValidEmail = function (a) {
    var b;
    return b = /[^\.\s@][^\s@]*(?!\.)@[^\.\s@]+(?:\.[^\.\s@]+)*/, b.test(a)
  }, a.js = function (a, b) {
    var c, d;
    return c = document.createElement('script'), c.async = 1, c.src = a, b && (c.id = b), d = document.getElementsByTagName('script')[0], d.parentNode.insertBefore(c, d)
  }, a.loadPixel = function () {
    var b, c, d;
    return b = window.location.hostname, c = (new Date).getTime(), d = 'https://t.sharethis.com/1/d/t.dhj?' + a.qs({
      cid: 'c010',
      cls: 'B',
      dmn: b,
      gdpr_consent: a.consentData,
      gdpr_domain: a.consentDomain,
      rnd: c
    }), a.js(d, 'pxscrpt')
  }, null == a.loader && (a.loader = {}), a.load = function (b, c) {
    var d;
    return 'function' == typeof(d = a.loader)[b] ? d[b](c) : void 0
  }, null == a.load_counts_cache && (a.load_counts_cache = {}), a.loadCounts = function (b, c) {
    var d, e, f, g, h, i, j;
    return c || (h = [{}, b], b = h[0], c = h[1]), null == b.facebook && (b.facebook = !1), null == b.type && (b.type = 'shares'), null == b.url && (b.url = a.href), null == b.use_native_counts && (b.use_native_counts = !0), g = 'count:' + JSON.stringify(b), null == (d = a.load_counts_cache)[g] && (d[g] = {
      callbacks: [c],
      response: null,
      status: 'init'
    }), 'complete' === (null != (i = a.load_counts_cache[g]) ? i.status : void 0) ? c(a.load_counts_cache[g].response) : 'in-progress' === (null != (j = a.load_counts_cache[g]) ? j.status : void 0) ? a.load_counts_cache[g].callbacks.push(c) : (f = 'cb' + a.uid(), e = !1, a[f] = function (c) {
      var d, f, h, i, j, k, l, m, n, o, p, q, r, s, t, u;
      if (null == c && (c = {}), e = !0, h = {}, 'reactions' === b.type) for (o in a.REACTIONS) u = (null != (p = c.reactions) ? p[o] : void 0) || 0, h[o] = {
        value: u,
        label: a.formatNumber(u)
      };
      if ('shares' === b.type) {
        for (q = a.networks, i = 0, k = q.length; k > i; i++) n = q[i], u = ((null != (r = c.clicks) ? r[n] : void 0) || 0) + ((null != (s = c.shares) ? s[n] : void 0) || 0), h[n] = {
          value: u,
          label: a.formatNumber(u)
        };
        h.total = {value: c.total, label: a.formatNumber(c.total)}
      }
      if (h.update_time = c.update_time, m = a.storage.get('st_shares_' + b.url), c.update_time < (null != m ? m.update_time : void 0) && (h = m), b.facebook && b.use_native_counts) return null == h.facebook && (h.facebook = {value: 0}), null == (d = h.facebook).value && (d.value = 0), a.loadFacebookShareCount(b.url, function (c) {
        var d, e, f, i, j;
        for (u = Math.max(c, h.facebook.value), j = h.total.value - h.facebook.value + u, h.facebook = {
          value: u,
          label: a.formatNumber(u)
        }, h.total = {
          value: j,
          label: a.formatNumber(j)
        }, a.load_counts_cache[g].response = h, a.load_counts_cache[g].status = 'complete', a.storage.set('st_shares_' + b.url, h), i = a.load_counts_cache[g].callbacks, e = 0, f = i.length; f > e; e++) (d = i[e])(h);
        return a.load_counts_cache[g].callbacks = []
      });
      for (a.load_counts_cache[g].response = h, a.load_counts_cache[g].status = 'complete', a.storage.set('st_shares_' + b.url, h), t = a.load_counts_cache[g].callbacks, j = 0, l = t.length; l > j; j++) (f = t[j])(h);
      return a.load_counts_cache[g].callbacks = []
    }, a.load_counts_cache[g].status = 'in-progress', a.js('https://count-server.sharethis.com/v2.0/get_counts?' + a.qs({
      cb: 'window.__sharethis__.' + f,
      url: b.url,
      refDomain: a.hostname(document.referrer),
      sop: !0
    })))
  }, a.loadFacebookShareCount = function (b, c) {
    var d;
    return d = 'cb' + a.uid(), a[d] = function (a) {
      var b;
      return c(JSON.parse((null != a && null != (b = a.share) ? b.share_count : void 0) || 0))
    }, a.js('https://graph.facebook.com?' + a.qs({id: b, callback: 'window.__sharethis__.' + d}))
  }, a.log = function (b) {
    return b.product = a.product, b.publisher = a.property, b.source = 'sharethis.js', b.ts = Date.now(), b.sop = !0, b.consentData = a.consentData, b.consentDomain = a.consentDomain, a.send('https://l.sharethis.com/log?' + a.qs(b))
  }, a.logGoogleAnalyticsEvent = function (a, b, c) {
    var d, e;
    return e = window.ga, d = window._gaq, e ? e('send', 'event', a, b, c) : d ? d.push(['_trackEvent', a, b, c]) : void 0
  }, a.newElement = function (b) {
    var c, d;
    return void 0 === b && (b = document.body), c = document.createElement('div'), d = 'st-el-' + a.uid(), c.setAttribute('id', d), b && b.appendChild(c), {
      $el: c,
      id: d
    }
  }, a.on = function (b, c) {
    var d;
    return null == a.handlers && (a.handlers = []), null == (d = a.handlers)[b] && (d[b] = []), a.handlers[b].push(c)
  }, a.open = function (b) {
    var c, d, e, f;
    return a.mobile ? window.open(b, '_blank') : b.indexOf('mailto:') > -1 ? document.location = b : (e = a.getWindowSize().height, f = a.getWindowSize().width, c = Math.min(600, .6 * e), d = Math.min(800, .8 * f), window.open(b, '', ['height=' + c, 'left=' + (f - d) / 2, 'top=' + (e - c) / 2, 'width=' + d, 'status=1', 'toolbar=0'].join(',')))
  }, a.parseNumber = function (a) {
    var b;
    return b = 1, a.indexOf('k') > -1 && (b = 1e3), a.indexOf('m') > -1 && (b = 1e6), a = a.replace(/[km,]/g, ''), b * parseInt(a, 10) || 0
  }, a.position = function (a, b) {
    var c, d;
    return null == b && (b = window), d = a.getBoundingClientRect(), b === window ? {
      left: d.left + window.scrollX,
      top: d.top + window.scrollY
    } : (c = b.getBoundingClientRect(), {left: d.left - c.left + b.scrollLeft, top: d.top - c.top + b.scrollTop})
  }, a.px = function (a) {
    return 'string' == typeof a ? a : Math.floor(a) + 'px'
  }, a.qs = function (a) {
    var b, c;
    return function () {
      var d;
      d = [];
      for (b in a) c = a[b], null != c && d.push(b + '=' + encodeURIComponent(c));
      return d
    }().join('&')
  }, a.react = function (b) {
    var c, d, e;
    return c = b.reaction, e = b.url, null == e && (e = a.href), d = a.getTitle(), a.logGoogleAnalyticsEvent('ShareThis', c, e), a.log({
      event: 'reaction',
      reactionType: c,
      title: d,
      url: e
    })
  }, a.remove = function (a) {
    return (null != a ? a.parentNode : void 0) ? a.parentNode.removeChild(a) : void 0
  }, a.removeClass = function (a, b) {
    return a.className = a.className.replace(b, '')
  }, a.removeEventListener = function (a, b, c) {
    return a && b && c ? a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent ? a.detachEvent('on' + b, c) : a['on' + b] = null : void 0
  }, a.send = function (b, c, d) {
    var e;
    return c && (b = b + '?' + a.qs(c)), e = new Image(1, 1), e.src = b, e.onload = function () {
      return 'function' == typeof d ? d(!0) : void 0
    }, e.onerror = function () {
      return 'function' == typeof d ? d(!1) : void 0
    }
  }, a.setCookie = function (a, b, c) {
    var d, e;
    return c ? (d = new Date, d.setTime(d.getTime() + 1e3 * 60 * 60 * 24 * c), e = '; expires=' + d.toGMTString()) : e = '', document.cookie = a + '=' + b + e + '; path=/'
  }, a.share = function (b) {
    var c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r;
    if (null == b && (b = {}), c = b.count_url, n = b.subject, m = b.share_url, p = b.url, d = b.description, f = b.image, i = b.message, j = b.network, o = b.title, q = b.username, c = c || p || a.href, null == d && (d = a.getDescription()), null == f && (f = a.getImage()), m = m || p || a.href, null == o && (o = a.getTitle()), null == p && (p = c), 'sharethis' === j) return a.load('share-all', {
      count_url: c,
      description: d,
      image: f,
      share_url: m,
      title: o,
      url: p,
      username: q
    });
    if (a.incLocalStorageShares(j, c), a.logGoogleAnalyticsEvent('ShareThis', j, c), a.log({
      destinations: j,
      event: 'share',
      title: o,
      url: c
    }), a.emit('share', {
      count_url: c,
      description: d,
      image: f,
      message: i,
      share_url: m,
      title: o,
      url: p,
      username: q
    }), 'wechat' === j) {
      if (a.mobile) return a.load('share-wechat-mobile', {url: m});
      r = 'https://chart.apis.google.com/chart?' + a.qs({
        cht: 'qr',
        chs: '154x154',
        chld: 'Q|0',
        chl: m,
        app_id: null
      }), a.open(r)
    }
    return 'print' === j ? (a.emit('print', {
      count_url: c,
      description: d,
      image: f,
      message: i,
      share_url: m,
      title: o,
      url: p,
      username: q
    }), window.print()) : (e = document.location.hostname, k = a.product, h = /iPad|iPhone|iPod/.test(navigator.userAgent), g = /Android/i.test(navigator.userAgent), l = {
      blogger: 'https://www.blogger.com/blog-this.g?' + a.qs({
        n: o,
        t: d,
        u: m
      }),
      delicious: 'https://del.icio.us/save?' + a.qs({provider: 'sharethis', title: o, url: m, v: 5}),
      digg: 'https://digg.com/submit?' + a.qs({url: m}),
      email: 'mailto:?to=&' + a.qs({subject: n || 'I\'d like to share a link with you', body: i || '' + p}),
      facebook: 'https://www.facebook.com/sharer.php?' + a.qs({t: o, u: m}),
      flipboard: 'https://share.flipboard.com/bookmarklet/popout?' + a.qs({
        ext: 'sharethis',
        title: o,
        url: m,
        utm_campaign: 'widgets',
        utm_content: e,
        utm_source: 'sharethis',
        v: 2
      }),
      googleplus: 'https://plus.google.com/share?' + a.qs({url: m}),
      linkedin: 'https://www.linkedin.com/shareArticle?' + a.qs({title: o, url: m}),
      livejournal: 'https://www.livejournal.com/update.bml?' + a.qs({event: m, subject: o}),
      mailru: 'https://connect.mail.ru/share?' + a.qs({share_url: m}),
      meneame: 'https://meneame.net/submit.php?' + a.qs({url: m}),
      messenger: {
        'true': 'fb-messenger://share/?' + a.qs({link: m, app_id: 521270401588372}),
        'false': 'https://www.facebook.com/dialog/send?' + a.qs({
          link: m,
          app_id: 521270401588372,
          redirect_uri: 'https://www.sharethis.com'
        })
      }[a.mobile],
      odnoklassniki: 'https://www.odnoklassniki.ru/dk?' + a.qs({'st._surl': m, 'st.cmd': 'addShare', 'st.s': 1}),
      pinterest: 'https://pinterest.com/pin/create/button/?' + a.qs({description: o, media: f, url: m}),
      reddit: 'https://reddit.com/submit?' + a.qs({title: o, url: m}),
      sms: 'sms:' + (h ? '&' : '?') + 'body=' + encodeURIComponent(m),
      tumblr: 'https://www.tumblr.com/share?' + a.qs({t: o, u: m, v: 3}),
      twitter: 'https://twitter.com/intent/tweet?' + a.qs({text: o || d, url: m, via: q}),
      vk: 'https://vk.com/share.php?' + a.qs({url: m}),
      weibo: 'https://service.weibo.com/share/share.php?' + a.qs({title: o, url: m, pic: f}),
      whatsapp: (a.mobile ? 'whatsapp://send?' : 'https://web.whatsapp.com/send?') + a.qs({text: m}),
      xing: 'https://www.xing.com/app/user?' + a.qs({op: 'share', title: o, url: m})
    }, a.open(l[j]))
  }, a.follow = function () {
    return function (b) {
      var c, d, e;
      return null == b && (b = {}), c = b.follow_url, d = b.network, e = b.url, null == e && (e = a.href), a.send('https://l.sharethis.com/log?' + a.qs({
        destinations: d,
        event: 'follow',
        followUrl: c,
        product: a.product,
        publisher: a.property,
        source: a.source,
        title: a.getTitle(),
        ts: Date.now(),
        url: e,
        sop: !0
      })), window.open(c, '_blank')
    }
  }(this), a.storage = {
    get: function (a) {
      if (b.hasLocalStorage) try {
        return JSON.parse(localStorage.getItem(a))
      } catch (b) {
      }
      return b.hasCookies ? b.getCookie(a) : b.get(a)
    }, set: function (b, c) {
      return a.hasLocalStorage ? localStorage.setItem(b, JSON.stringify(c)) : a.hasCookies ? a.setCookie(b, c) : a.set(b, c)
    }
  }, a.svg = function (a, b) {
    var c;
    return null == b && (b = 40), 'string' == typeof a && (a = [a]), '<svg fill="#fff" preserveAspectRatio="xMidYMid meet" height="1em" width="1em" viewBox="0 0 ' + b + ' ' + b + '">\n  <g>\n    ' + function () {
      var b, d, e;
      for (e = [], b = 0, d = a.length; d > b; b++) c = a[b], e.push('<path d=\'' + c + '\'></path>');
      return e
    }().join('') + '\n  </g>\n</svg>'
  }, a.toggleClass = function (b, c) {
    return a.hasClass(b, c) ? a.removeClass(b, c) : a.addClass(b, c)
  }, a.removeInvalidButtons = function (b) {
    var c, d, e, f, g;
    for (g = [], c = 0, e = b.length; e > c; c++) f = b[c], -1 === a.networks.indexOf(f) ? (d = b.indexOf(f), g.push(b.splice(d, 1))) : g.push(void 0);
    return g
  }
}.call(this), !function (a) {
  window.__sharethis__.mobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))
}(navigator.userAgent || navigator.vendor || window.opera), function () {
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
    mailru: '#168de2',
    medium: '#333333',
    meneame: '#ff6400',
    messenger: '#448AFF',
    odnoklassniki: '#d7772d',
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
}.call(this), function () {
  window.__sharethis__.PRODUCTS = ['ga', 'gdpr-compliance-tool', 'genesis-media', 'inline-follow-buttons', 'inline-share-buttons', 'inline-share-buttons-wp', 'sop', 'sticky-share-buttons', 'sticky-share-buttons-wp', 'unknown']
}.call(this), function () {
  var a;
  a = window.__sharethis__, a.i18n = {
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
}.call(this), function () {
  var a, b, c;
  c = window.__sharethis__.svg, a = window.__sharethis__.img, b = /MSIE 8.0/.test(navigator.userAgent), window.__sharethis__.ICONS = {
    arrow_left: c('m22 30.7q0 0.3-0.2 0.5l-1.1 1.1q-0.3 0.3-0.6 0.3t-0.5-0.3l-10.4-10.4q-0.2-0.2-0.2-0.5t0.2-0.5l10.4-10.4q0.3-0.2 0.5-0.2t0.6 0.2l1.1 1.1q0.2 0.3 0.2 0.5t-0.2 0.6l-8.8 8.7 8.8 8.8q0.2 0.2 0.2 0.5z m8.6 0q0 0.3-0.3 0.5l-1.1 1.1q-0.2 0.3-0.5 0.3t-0.5-0.3l-10.4-10.4q-0.2-0.2-0.2-0.5t0.2-0.5l10.4-10.4q0.2-0.2 0.5-0.2t0.5 0.2l1.1 1.1q0.3 0.3 0.3 0.5t-0.3 0.6l-8.7 8.7 8.7 8.8q0.3 0.2 0.3 0.5z'),
    arrow_right: c('m22.3 21.4q0 0.3-0.2 0.5l-10.4 10.4q-0.3 0.3-0.6 0.3t-0.5-0.3l-1.1-1.1q-0.2-0.2-0.2-0.5t0.2-0.5l8.8-8.8-8.8-8.7q-0.2-0.3-0.2-0.6t0.2-0.5l1.1-1.1q0.3-0.2 0.5-0.2t0.6 0.2l10.4 10.4q0.2 0.2 0.2 0.5z m8.6 0q0 0.3-0.3 0.5l-10.4 10.4q-0.2 0.3-0.5 0.3t-0.5-0.3l-1.1-1.1q-0.2-0.2-0.2-0.5t0.2-0.5l8.8-8.8-8.8-8.7q-0.2-0.3-0.2-0.6t0.2-0.5l1.1-1.1q0.2-0.2 0.5-0.2t0.5 0.2l10.4 10.4q0.3 0.2 0.3 0.5z'),
    blogger: c('M27.5,30 L12.5,30 C11.125,30 10,28.875 10,27.5 C10,26.125 11.125,25 12.5,25 L27.5,25 C28.875,25 30,26.125 30,27.5 C30,28.875 28.875,30 27.5,30 M12.5,10 L20,10 C21.375,10 22.5,11.125 22.5,12.5 C22.5,13.875 21.375,15 20,15 L12.5,15 C11.125,15 10,13.875 10,12.5 C10,11.125 11.125,10 12.5,10 M37.41375,15 L35.21875,15 L35.17125,15 C33.7975,15 32.59375,13.8375 32.5,12.5 C32.5,5.365 26.7475,0 19.5625,0 L13.0075,0 C5.8275,0 0.005,5.78125 0,12.91625 L0,27.08875 C0,34.22375 5.8275,40 13.0075,40 L27.0075,40 C34.1925,40 40,34.22375 40,27.08875 L40,17.93375 C40,16.5075 38.85,15 37.41375,15'),
    close: c('m31.6 10.7l-9.3 9.3 9.3 9.3-2.3 2.3-9.3-9.3-9.3 9.3-2.3-2.3 9.3-9.3-9.3-9.3 2.3-2.3 9.3 9.3 9.3-9.3z'),
    delicious: c('m35.9 30.7v-10.7h-15.8v-15.7h-10.7q-2 0-3.5 1.4t-1.5 3.6v10.7h15.7v15.7h10.8q2 0 3.5-1.4t1.5-3.6z m1.4-21.4v21.4q0 2.7-1.9 4.6t-4.5 1.8h-21.5q-2.6 0-4.5-1.8t-1.9-4.6v-21.4q0-2.7 1.9-4.6t4.5-1.8h21.5q2.6 0 4.5 1.8t1.9 4.6z'),
    digg: c('m6.4 8.1h3.9v19.1h-10.3v-13.6h6.4v-5.5z m0 15.9v-7.2h-2.4v7.2h2.4z m5.5-10.4v13.6h4v-13.6h-4z m0-5.5v3.9h4v-3.9h-4z m5.6 5.5h10.3v18.3h-10.3v-3.1h6.4v-1.6h-6.4v-13.6z m6.4 10.4v-7.2h-2.4v7.2h2.4z m5.5-10.4h10.4v18.3h-10.4v-3.1h6.4v-1.6h-6.4v-13.6z m6.4 10.4v-7.2h-2.4v7.2h2.4z'),
    email: c('m33.4 13.4v-3.4l-13.4 8.4-13.4-8.4v3.4l13.4 8.2z m0-6.8q1.3 0 2.3 1.1t0.9 2.3v20q0 1.3-0.9 2.3t-2.3 1.1h-26.8q-1.3 0-2.3-1.1t-0.9-2.3v-20q0-1.3 0.9-2.3t2.3-1.1h26.8z'),
    facebook: c('m21.7 16.7h5v5h-5v11.6h-5v-11.6h-5v-5h5v-2.1c0-2 0.6-4.5 1.8-5.9 1.3-1.3 2.8-2 4.7-2h3.5v5h-3.5c-0.9 0-1.5 0.6-1.5 1.5v3.5z'),
    flipboard: c('M0,0 L13.3333333,0 L13.3333333,13.3333333 L0,13.3333333 L0,0 Z M0,13.3333333 L13.3333333,13.3333333 L13.3333333,26.6666667 L0,26.6666667 L0,13.3333333 Z M13.3333333,13.3333333 L26.6666667,13.3333333 L26.6666667,26.6666667 L13.3333333,26.6666667 L13.3333333,13.3333333 Z M0,26.6666667 L13.3333333,26.6666667 L13.3333333,40 L0,40 L0,26.6666667 Z M13.3333333,0 L26.6666667,0 L26.6666667,13.3333333 L13.3333333,13.3333333 L13.3333333,0 Z M26.6666667,0 L40,0 L40,13.3333333 L26.6666667,13.3333333 L26.6666667,0 Z'),
    github: c('M39.3171343,12.2106855 C37.5286789,9.06954026 35.1027532,6.58269119 32.0387189,4.74957732 C28.9742285,2.91636994 25.6287185,2 21.9998176,2 C18.3713727,2 15.0247682,2.91665044 11.9609163,4.74957732 C8.89660834,6.58259769 6.47077388,9.06954026 4.68231839,12.2106855 C2.89413653,15.3517373 2,18.7817901 2,22.5007505 C2,26.9680656 3.27147437,30.9851899 5.81506159,34.5531516 C8.35837518,38.1213939 11.6439598,40.5904784 15.6715419,41.9606857 C16.1403638,42.0498824 16.4874198,41.9871455 16.7130746,41.7740645 C16.9388206,41.560703 17.0515567,41.2934869 17.0515567,40.9735381 C17.0515567,40.920151 17.0470874,40.4398538 17.0384224,39.5320856 C17.0294838,38.6243175 17.0252881,37.8323928 17.0252881,37.1566857 L16.4263088,37.262899 C16.0444104,37.3346116 15.5626365,37.3649984 14.9809872,37.3563966 C14.3996114,37.3480753 13.7960716,37.2856189 13.1711884,37.1694949 C12.5460317,37.0543993 11.9645647,36.7874637 11.4263316,36.369249 C10.888372,35.9510342 10.5064737,35.4036058 10.2807277,34.7278051 L10.0203217,34.1135259 C9.84674812,33.7045675 9.57348146,33.2502626 9.20015688,32.7522944 C8.8268323,32.2538587 8.44931204,31.9159584 8.06741368,31.7380325 L7.88508389,31.6042374 C7.7635915,31.5153212 7.65085533,31.4080795 7.54660172,31.2836342 C7.44243933,31.1591889 7.36445436,31.0346501 7.31237316,30.9099243 C7.26020075,30.785105 7.30343453,30.6827251 7.44253054,30.6024107 C7.58162656,30.5220963 7.8330027,30.4831078 8.19775349,30.4831078 L8.71838302,30.5628612 C9.06562139,30.6341999 9.49513164,30.8472809 10.007461,31.2034133 C10.5195168,31.5592651 10.9404532,32.0218912 11.2703616,32.5911046 C11.6698636,33.3209468 12.1511814,33.8770705 12.7156832,34.2597562 C13.2797289,34.6424418 13.8484264,34.8334574 14.4212283,34.8334574 C14.9940303,34.8334574 15.488756,34.7889526 15.905588,34.7004104 C16.3219639,34.6114006 16.7126185,34.4776056 17.0773693,34.2997732 C17.2336129,33.1069308 17.6590187,32.1905609 18.3532218,31.5500088 C17.3637703,31.4434216 16.4741943,31.2828862 15.6840377,31.0694312 C14.8943372,30.8556957 14.0782769,30.5088196 13.2364039,30.027868 C12.394075,29.5475708 11.6953113,28.9511497 11.1399306,28.2396329 C10.5844586,27.5277422 10.1285886,26.5931403 9.77295882,25.4366685 C9.41714666,24.2797292 9.23919498,22.9451446 9.23919498,21.4325404 C9.23919498,19.2788233 9.92509794,17.4460834 11.2966302,15.9332923 C10.6541435,14.3141009 10.7147984,12.4989386 11.4787776,10.4879923 C11.9822596,10.3276439 12.7289087,10.4479753 13.7183602,10.8482385 C14.7079941,11.2486887 15.4325704,11.5917314 15.8928185,11.8761511 C16.3530667,12.1604773 16.7218308,12.4014206 16.999658,12.5968306 C18.6145399,12.134298 20.2810469,11.9029849 21.9996352,11.9029849 C23.7182234,11.9029849 25.3850953,12.134298 27.0000684,12.5968306 L27.9896111,11.9564655 C28.6663018,11.5291815 29.465397,11.1376136 30.3849813,10.7816682 C31.3051128,10.4259099 32.0087106,10.3279244 32.495045,10.4882728 C33.2759893,12.4993126 33.3455829,14.3143814 32.7029137,15.9335728 C34.0743548,17.4463639 34.7605314,19.2795713 34.7605314,21.4328209 C34.7605314,22.945425 34.5819412,24.2842171 34.2266763,25.4500387 C33.8709554,26.6160472 33.4111633,27.5497142 32.8471175,28.2530031 C32.2824333,28.9561985 31.5792004,29.5479448 30.7373274,30.0281485 C29.8952721,30.5087261 29.0789381,30.8556022 28.2892376,31.0693377 C27.4991723,31.2830732 26.6095963,31.4437021 25.6201448,31.5504763 C26.5225814,32.3510028 26.973891,33.6146228 26.973891,35.3407754 L26.973891,40.9727901 C26.973891,41.2927389 27.0824315,41.5598615 27.2996949,41.7733165 C27.5166847,41.9863975 27.8593625,42.0491344 28.3281845,41.9598442 C32.3563138,40.589824 35.6418985,38.1206459 38.1851208,34.5524037 C40.7280696,30.9844419 42,26.9673177 42,22.5000025 C41.9990879,18.7815096 41.1044953,15.3517373 39.3171343,12.2106855 Z', 42),
    googleplus: c('m25.2 20.3q0 3.6-1.6 6.5t-4.3 4.4-6.5 1.6q-2.6 0-5-1t-4.1-2.7-2.7-4.1-1-5 1-5 2.7-4.1 4.1-2.7 5-1q5 0 8.6 3.3l-3.5 3.4q-2-2-5.1-2-2.1 0-4 1.1t-2.8 2.9-1.1 4.1 1.1 4.1 2.8 2.9 4 1.1q1.5 0 2.7-0.4t2-1 1.4-1.4 0.8-1.4 0.4-1.3h-7.3v-4.4h12.1q0.3 1.1 0.3 2.1z m15.1-2.1v3.6h-3.6v3.7h-3.7v-3.7h-3.7v-3.6h3.7v-3.7h3.7v3.7h3.6z'),
    instagram: c('M30.9612095,2 L13.0383173,2 C6.95179283,2 2,6.95202943 2,13.0385539 L2,30.9614461 C2,37.0482072 6.95179283,42 13.0383173,42 L30.9612095,42 C37.0482072,42 42,37.0479706 42,30.9614461 L42,13.0385539 C42.0002366,6.95202943 37.0482072,2 30.9612095,2 Z M38.4512427,30.9614461 C38.4512427,35.091292 35.091292,38.4510061 30.9614461,38.4510061 L13.0383173,38.4510061 C8.90870805,38.4512427 5.54899386,35.091292 5.54899386,30.9614461 L5.54899386,13.0385539 C5.54899386,8.90894465 8.90870805,5.54899386 13.0383173,5.54899386 L30.9612095,5.54899386 C35.0910554,5.54899386 38.4510061,8.90894465 38.4510061,13.0385539 L38.4510061,30.9614461 L38.4512427,30.9614461 Z M22,11.6934852 C16.3166412,11.6934852 11.693012,16.3171144 11.693012,22.0004732 C11.693012,27.6835954 16.3166412,32.306988 22,32.306988 C27.6833588,32.306988 32.306988,27.6835954 32.306988,22.0004732 C32.306988,16.3171144 27.6833588,11.6934852 22,11.6934852 Z M22,28.7577575 C18.273793,28.7577575 15.2420059,25.7264436 15.2420059,22.0002366 C15.2420059,18.273793 18.2735564,15.2422425 22,15.2422425 C25.7264436,15.2422425 28.7579941,18.273793 28.7579941,22.0002366 C28.7579941,25.7264436 25.726207,28.7577575 22,28.7577575 Z M32.7392554,8.68417504 C32.0554826,8.68417504 31.3837764,8.96099656 30.9008766,9.44602572 C30.4156108,9.92868888 30.1366599,10.6006317 30.1366599,11.2867705 C30.1366599,11.97078 30.4158474,12.6424862 30.9008766,13.1275153 C31.3835398,13.6101785 32.0554826,13.889366 32.7392554,13.889366 C33.4253942,13.889366 34.0949711,13.6101785 34.5800002,13.1275153 C35.0650294,12.6424862 35.3418509,11.9705434 35.3418509,11.2867705 C35.3418509,10.6006317 35.0650294,9.92868888 34.5800002,9.44602572 C34.0973371,8.96099656 33.4253942,8.68417504 32.7392554,8.68417504 Z M38.4512427,30.9614461 C38.4512427,35.091292 35.091292,38.4510061 30.9614461,38.4510061 L13.0383173,38.4510061 C8.90870805,38.4512427 5.54899386,35.091292 5.54899386,30.9614461 L5.54899386,13.0385539 C5.54899386,8.90894465 8.90870805,5.54899386 13.0383173,5.54899386 L30.9612095,5.54899386 C35.0910554,5.54899386 38.4510061,8.90894465 38.4510061,13.0385539 L38.4510061,30.9614461 L38.4512427,30.9614461 Z M30.9612095,2 L13.0383173,2 C6.95179283,2 2,6.95202943 2,13.0385539 L2,30.9614461 C2,37.0482072 6.95179283,42 13.0383173,42 L30.9612095,42 C37.0482072,42 42,37.0479706 42,30.9614461 L42,13.0385539 C42.0002366,6.95202943 37.0482072,2 30.9612095,2 Z', 42),
    linkedin: c('m13.3 31.7h-5v-16.7h5v16.7z m18.4 0h-5v-8.9c0-2.4-0.9-3.5-2.5-3.5-1.3 0-2.1 0.6-2.5 1.9v10.5h-5s0-15 0-16.7h3.9l0.3 3.3h0.1c1-1.6 2.7-2.8 4.9-2.8 1.7 0 3.1 0.5 4.2 1.7 1 1.2 1.6 2.8 1.6 5.1v9.4z m-18.3-20.9c0 1.4-1.1 2.5-2.6 2.5s-2.5-1.1-2.5-2.5 1.1-2.5 2.5-2.5 2.6 1.2 2.6 2.5z'),
    livejournal: c('M23.7797259,29.7458195 C24.5149897,28.5737376 25.333491,27.4433173 26.351762,26.4239949 C27.3811314,25.3935627 28.5270331,24.565884 29.711779,23.8243061 L31.3904002,31.4678356 L23.7797259,29.7458195 Z M36.709271,10.2481534 C30.8243857,1.70473156 20.009071,-0.267254619 11.7935381,4.24331658 C12.0876437,4.0850022 12.3651017,3.87947124 12.6647564,3.73504409 L9.35190732,0.418774375 C8.89410153,-0.0395041029 8.16993603,-0.139492134 7.62334367,0.207688531 C6.15004143,1.14091016 4.75442744,2.23522361 3.47257125,3.51840335 C2.21013713,4.78214097 1.1335999,6.15419896 0.209664593,7.60124797 C-0.13993255,8.15118215 -0.0400476518,8.87887282 0.417758129,9.3371513 L3.7222835,12.6450887 C4.62957132,10.7675356 5.83928841,9.00385786 7.39582807,7.44571103 C8.5001111,6.3402878 9.73479942,5.46539252 11.0166556,4.69326272 C10.6670585,4.90990346 10.3146867,5.1209893 9.97618793,5.3598496 C10.8529554,4.75158907 11.7630178,4.22665191 12.7063751,3.77392832 L27.5281841,18.6110412 C25.7052847,19.663693 23.9822703,20.9385404 22.4285052,22.4966872 C20.8941622,24.029837 19.6345026,25.7351885 18.5912604,27.5266407 L3.77222595,12.6950827 C0.373364842,19.7859006 1.59140568,28.5376308 7.45964342,34.4174825 C15.7861595,42.7498185 29.9004504,41.7554931 36.8452254,31.4289514 C41.1042065,25.0908212 41.0431657,16.5362896 36.709271,10.2481534 L36.709271,10.2481534 Z'),
    mailru: c('M26.9076184,19.8096616 C26.680007,15.199769 23.3977769,12.428026 19.4332382,12.428026 L19.2839504,12.428026 C14.7091187,12.428026 12.1717509,16.1777412 12.1717509,20.4369883 C12.1717509,25.2068628 15.2416138,28.2191267 19.2660779,28.2191267 C23.7536497,28.2191267 26.7047131,24.7932107 26.9181316,20.7410637 L26.9076184,19.8096616 Z M19.3065538,8.30410621 C22.3632752,8.30410621 25.2370663,9.71216703 27.347597,11.9168506 L27.347597,11.9256167 C27.347597,10.8665577 28.0309569,10.0688392 28.9803015,10.0688392 L29.2200031,10.0671956 C30.7049967,10.0671956 31.0093547,11.5316884 31.0093547,11.9951979 L31.016714,28.4558125 C30.9121073,29.5324037 32.0838067,30.0885055 32.7335243,29.3981722 C35.2693151,26.6817654 38.3029074,15.4348111 31.1570656,8.91773583 C24.496935,2.84225472 15.561216,3.84378592 10.8087108,7.25764856 C5.75657856,10.8895689 2.52376063,18.9264732 5.66406215,26.4752133 C9.08716952,34.7109994 18.8828707,37.1655178 24.7045713,34.7170261 C27.6524807,33.4766176 29.0144695,37.630671 25.9524915,38.9872308 C21.3261451,41.0423421 8.45006784,40.8352421 2.43492385,29.9750936 C-1.62896484,22.6416718 -1.41239232,9.73846544 9.36577009,3.05373779 C17.6112956,-2.05965974 28.4819745,-0.643380663 35.0369728,6.49225518 C41.8889698,13.9511423 41.4894671,27.9183387 34.8056817,33.3517002 C31.7778718,35.8177242 27.2803124,33.4163505 27.3092238,29.8211384 L27.2776841,28.6453802 C25.169256,30.8265047 22.3632752,32.0986904 19.3065538,32.0986904 C13.2661781,32.0986904 7.95174078,26.5590395 7.95174078,20.2655007 C7.95174078,13.9073117 13.2661781,8.30410621 19.3065538,8.30410621 L19.3065538,8.30410621 Z'),
    medium: c('M41.00463,10.2861159 L38.7972071,10.2861159 C38.2224289,10.2861159 36.7184314,10.9105009 36.7184314,11.4420385 L36.7184314,30.7446487 C36.7184314,31.2775091 38.2224289,31.7143802 38.7972071,31.7143802 L41.00463,31.7143802 L41.00463,36 L26.7171913,36 L26.7171913,31.7143802 L29.5753735,31.7143802 L29.5753735,11.7139668 L29.077982,11.7139668 L22.2003208,35.9999173 L16.8753545,35.9999173 L10.0866549,11.7139668 L9.57247976,11.7139668 L9.57247976,31.7142975 L12.4294218,31.7142975 L12.4294218,35.9999173 L1,36 L1,31.7142975 L2.58518739,31.7142975 C3.20750552,31.7142975 3.85702475,31.2775091 3.85702475,30.744566 L3.85702475,11.4420385 C3.85702475,10.9104183 3.2075882,10.2861159 2.58518739,10.2861159 L1,10.2861159 L1,6 L15.8121967,6 L20.6485354,23.1426445 L20.7786707,23.1426445 L25.6627147,6 L41.00463,6 L41.00463,10.2861159 Z'),
    meneame: c('M37.6371624,10.0104081 C36.6268087,11.0735024 35.3851257,11.7323663 34.1607384,12.4190806 C33.0545379,13.0405452 31.9144669,13.5911899 30.8702425,14.343154 C29.735216,15.1635509 28.7926035,16.1645784 28.4798406,17.69397 C28.2268918,18.9376949 28.4322776,20.1686881 28.6600035,21.3837667 C29.1586946,24.0598043 30.1380603,26.5496412 31.1094988,29.042661 C31.6074692,30.3293553 32.1421928,31.6009307 32.5421545,32.93139 C33.1842552,35.0758805 32.648811,36.7294059 30.9206881,37.9357315 C29.6761225,38.7998935 28.2831027,39.1786606 26.852609,39.4309068 C26.0166529,39.5765253 25.1691665,39.6234733 24.305105,39.6855402 C24.1220595,39.6171075 23.7847945,39.8407074 23.727863,39.5614064 C23.6774173,39.2876755 24.0290954,39.1977581 24.2373638,39.1006792 C25.4934598,38.5261626 26.7574829,37.975518 28.0128583,37.4010014 C28.7954861,37.043719 29.5579356,36.6363056 30.2591298,36.1079413 C30.5012688,35.9273108 30.7232295,35.7188297 30.9178055,35.4801109 C31.2276857,35.0973651 31.3033542,34.6931347 31.1231912,34.1934167 C30.1661657,31.5539827 29.1017631,28.9583137 28.2629244,26.2671573 C27.5905563,24.0940206 27.0529501,21.8930335 26.9117024,19.5838271 C26.7430699,16.8608415 27.5992042,14.7410187 29.7272888,13.2832426 C30.7318773,12.5965283 31.8099723,12.0832829 32.8880674,11.5676503 C34.2227144,10.9302712 35.5429484,10.2777731 36.7140075,9.29266029 C38.4651913,7.81578675 39.0395507,5.83919521 38.8896551,3.5045255 C38.8226345,2.45416285 38.6619292,1.42210198 38.445013,0.399589849 C38.4197902,0.284209103 38.2763805,0.113127308 38.4651913,0.0232098993 C38.6367064,-0.0571587581 38.7267879,0.0852767832 38.8002943,0.234873888 C39.3710505,1.38151978 39.8164133,2.56556495 39.9569404,3.88408837 C40.2243022,6.41052884 39.2218756,8.33778516 37.6371624,10.0104081 M23.0864829,39.5518577 C23.0021667,39.6791743 22.9092026,39.8407074 22.7398494,39.7754576 C22.5877919,39.7165736 22.6079701,39.539126 22.6022049,39.3966905 C22.5596865,38.3829313 22.7088614,37.3882697 22.7938983,36.3872423 C22.9149678,34.9517467 23.1340459,33.5218212 23.0129764,32.067228 C22.9762232,31.6072965 22.7852505,31.3271998 22.4133942,31.1314504 C21.3216068,30.5529552 20.1505477,30.3635717 18.9650755,30.236255 C17.5151242,30.0810878 16.0601283,30.0962066 14.6072944,29.9999234 C14.5172129,29.9935575 14.4271315,29.9720728 14.33705,29.9593412 C17.1382234,29.4500744 19.9365141,29.1731607 22.7571451,29.5463577 C24.0968367,29.7230096 24.3533887,30.0277739 24.3843767,31.5229492 C24.4348223,33.8886524 24.1335899,36.2105904 23.5282424,38.4792146 C23.4266305,38.8587775 23.3005165,39.2287916 23.0864829,39.5518577 M21.7576011,39.7070249 C20.0035347,39.8629878 18.250189,39.9529052 16.4903574,39.9807557 C14.0192426,40.0213379 11.5358766,40.0396397 9.09574982,39.586074 C5.13216519,38.8492287 2.06074743,36.6705219 0.568998308,32.3711966 C-0.230925135,30.0651732 -0.129313238,27.6620707 0.512787472,25.318648 C1.47774017,21.803116 2.93922192,18.5772295 5.31809334,15.9377955 C5.93425059,15.2542641 6.62679692,14.6662201 7.30781283,14.0638531 C7.37267149,14.0041734 7.43753014,13.914256 7.57229202,13.961204 C7.53914204,14.1848039 7.42599972,14.3527028 7.31646065,14.5269675 C5.46726826,17.4393367 3.88471701,20.5068731 2.69131771,23.8202898 C1.8611269,26.127109 1.66078571,28.4832634 2.20992234,30.8919359 C2.88805564,33.8759207 4.68752306,35.7164425 7.22061397,36.7978386 C9.05899658,37.5840192 10.9759302,37.9603991 12.9180867,38.2150325 C15.6205308,38.5667448 18.3345053,38.8022807 21.0398319,39.0919261 C21.3014285,39.1197767 21.5579805,39.1977581 21.8109293,39.2749439 C21.9348814,39.3091602 22.0927041,39.365657 22.0754085,39.5486747 C22.0559509,39.7603387 21.8786706,39.6950889 21.7576011,39.7070249 M11.1424008,3.1782765 C12.8453009,1.61785138 14.8717736,0.862704291 17.0229191,0.440172043 C20.3977312,-0.219487531 23.5902185,0.505421844 26.6782112,1.97831674 C28.265807,2.73664675 29.797192,3.63184219 31.4359541,4.25967259 C31.79628,4.39653803 32.1623711,4.5206718 32.5421545,4.58353441 C33.2289356,4.68857067 33.7917647,4.43075439 34.242172,3.86817379 C34.8338271,3.13132847 35.0420955,2.24568178 35.0420955,1.2788707 C35.2078454,1.27011768 35.241716,1.41255322 35.2950442,1.52156814 C35.7987798,2.54408026 35.6553701,4.20715446 34.9714716,5.07131646 C34.2537024,5.97844784 33.3024421,6.14077661 32.2913677,6.01027701 C31.1426488,5.86386282 30.0508614,5.49384871 29.0037544,4.94399977 C27.0356545,3.90557306 25.0372872,2.94831074 22.8976721,2.41358066 C20.2204509,1.74516806 17.5634079,1.86373173 14.9647377,2.81781113 C11.1784334,4.20397154 9.1887139,8.35688266 10.2185252,12.618013 C10.8152249,15.0768164 12.0684383,17.0136215 14.0250078,18.3838673 C14.868891,18.9774814 15.8035763,19.1612948 16.7894279,19.1485632 C17.7853686,19.1334443 18.7568072,18.9185974 19.7282457,18.7132993 C19.8968783,18.6790829 20.0604662,18.6329306 20.3220628,18.7196651 C19.4716937,19.3013432 18.6242073,19.6307751 17.7291578,19.8384605 C16.4175716,20.1432248 15.1031028,20.1432248 13.790796,19.8639238 C12.6593727,19.6275922 11.7304526,18.9496308 10.9816955,18.011466 C9.4978735,16.1462766 8.4284263,14.0415726 8.11061888,11.5461656 C7.67678652,8.12373398 8.76352936,5.35380035 11.1424008,3.1782765'),
    messenger: c('M25,2C12.3,2,2,11.6,2,23.5c0,6.3,2.9,12.2,8,16.3v8.8l8.6-4.5c2.1,0.6,4.2,0.8,6.4,0.8c12.7,0,23-9.6,23-21.5 C48,11.6,37.7,2,25,2z M27.3,30.6l-5.8-6.2l-10.8,6.1l12-12.7l5.9,5.9l10.5-5.9L27.3,30.6z', 50),
    odnoklassniki: c('m19.8 20.2q-4.2 0-7.2-2.9t-2.9-7.2q0-4.2 2.9-7.1t7.2-3 7.1 3 3 7.1q0 4.2-3 7.2t-7.1 2.9z m0-15.1q-2.1 0-3.5 1.5t-1.5 3.5q0 2.1 1.5 3.5t3.5 1.5 3.5-1.5 1.5-3.5q0-2-1.5-3.5t-3.5-1.5z m11.7 16.4q0.3 0.6 0.3 1.1t-0.1 0.9-0.6 0.8-0.9 0.9-1.4 0.9q-2.6 1.6-7 2.1l1.6 1.6 5.9 6q0.7 0.7 0.7 1.6t-0.7 1.6l-0.2 0.3q-0.7 0.7-1.7 0.7t-1.6-0.7q-1.5-1.5-6-6l-6 6q-0.6 0.7-1.6 0.7t-1.6-0.7l-0.3-0.3q-0.7-0.6-0.7-1.6t0.7-1.6l7.6-7.6q-4.6-0.5-7.1-2.1-0.9-0.6-1.4-0.9t-0.9-0.9-0.6-0.8-0.1-0.9 0.3-1.1q0.2-0.5 0.6-0.8t1-0.5 1.2 0 1.5 0.8q0.1 0.1 0.3 0.3t1 0.5 1.5 0.7 2.1 0.5 2.5 0.3q2 0 3.9-0.6t2.6-1.1l0.9-0.6q0.7-0.5 1.4-0.8t1.3 0 0.9 0.5 0.7 0.8z'),
    patreon: c(['M39.9799999,14.4341479 C39.9799999,22.3948663 33.5265705,28.8482957 25.565852,28.8482957 C17.6051336,28.8482957 11.1517042,22.3948663 11.1517042,14.4341479 C11.1517042,6.47343642 17.6051336,0.02 25.565852,0.02 C33.5265705,0.02 39.9799999,6.47343642 39.9799999,14.4341479', 'M .02 .02 7.065 .02 7.065 38.474 .02 38.474 .02 .02']),
    pinterest: c('m37.3 20q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3q-2.4 0-4.8-0.7 1.3-2 1.7-3.6 0.2-0.8 1.2-4.7 0.5 0.8 1.7 1.5t2.5 0.6q2.7 0 4.8-1.5t3.3-4.2 1.2-6.1q0-2.5-1.4-4.7t-3.8-3.7-5.7-1.4q-2.4 0-4.4 0.7t-3.4 1.7-2.5 2.4-1.5 2.9-0.4 3q0 2.4 0.8 4.1t2.7 2.5q0.6 0.3 0.8-0.5 0.1-0.1 0.2-0.6t0.2-0.7q0.1-0.5-0.3-1-1.1-1.3-1.1-3.3 0-3.4 2.3-5.8t6.1-2.5q3.4 0 5.3 1.9t1.9 4.7q0 3.8-1.6 6.5t-3.9 2.6q-1.3 0-2.2-0.9t-0.5-2.4q0.2-0.8 0.6-2.1t0.7-2.3 0.2-1.6q0-1.2-0.6-1.9t-1.7-0.7q-1.4 0-2.3 1.2t-1 3.2q0 1.6 0.6 2.7l-2.2 9.4q-0.4 1.5-0.3 3.9-4.6-2-7.5-6.3t-2.8-9.4q0-4.7 2.3-8.6t6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z'),
    print: c('m30 5v6.6h-20v-6.6h20z m1.6 15c1 0 1.8-0.7 1.8-1.6s-0.8-1.8-1.8-1.8-1.6 0.8-1.6 1.8 0.7 1.6 1.6 1.6z m-5 11.6v-8.2h-13.2v8.2h13.2z m5-18.2c2.8 0 5 2.2 5 5v10h-6.6v6.6h-20v-6.6h-6.6v-10c0-2.8 2.2-5 5-5h23.2z'),
    question: c('m23.2 28v5.4q0 0.4-0.3 0.6t-0.6 0.3h-5.3q-0.4 0-0.7-0.3t-0.2-0.6v-5.4q0-0.3 0.2-0.6t0.7-0.3h5.3q0.4 0 0.6 0.3t0.3 0.6z m7.1-13.4q0 1.2-0.4 2.3t-0.8 1.7-1.2 1.3-1.3 1-1.3 0.8q-0.9 0.5-1.6 1.4t-0.6 1.5q0 0.4-0.2 0.8t-0.7 0.3h-5.3q-0.4 0-0.6-0.4t-0.2-0.8v-1q0-1.9 1.4-3.5t3.2-2.5q1.3-0.6 1.9-1.2t0.5-1.7q0-0.9-1-1.7t-2.4-0.7q-1.4 0-2.4 0.7-0.8 0.5-2.4 2.5-0.3 0.4-0.7 0.4-0.2 0-0.5-0.2l-3.7-2.8q-0.3-0.2-0.3-0.5t0.1-0.6q3.5-6 10.3-6 1.8 0 3.6 0.7t3.3 1.9 2.4 2.8 0.9 3.5z'),
    quora: c('M30.4569361,35.3530667 C35.5835842,32.1772706 39,26.4992644 39,20.0209156 C39,10.0684324 30.9403547,2 20.9991055,2 C11.0577621,2 3,10.0684324 3,20.0209156 C3,29.9740498 11.0577621,38.0418312 20.9991055,38.0418312 C22.4616022,38.0418312 23.8819152,37.8629956 25.2424364,37.533131 C26.9510681,40.6034671 29.5543161,42.7761845 35.0800153,41.7371154 L35.0800153,38.6824029 C35.0800153,38.6824959 31.5362948,37.8027328 30.4569361,35.3530667 Z M31,22.3974352 C31,25.5035112 29.9454925,28.3228089 28.23243,30.4054314 C26.080399,28.257811 22.7077367,26.4927856 18.4279481,26.7178302 L18.4279481,27.0951447 L18.4279481,30.3741325 C18.4279481,30.3741325 21.3312235,30.4816623 23.3185645,33.6836511 C22.5738749,33.8889178 21.7984596,34 20.9994879,34 C15.4757164,34 11,28.8058291 11,22.3965711 C11,21.574544 11,18.4261281 11,17.6034289 C11,11.1947469 15.4757164,6 20.9994879,6 C26.5230545,6 31,11.1947469 31,17.6034289 C31,18.4265121 31,21.574928 31,22.3974352 Z'),
    reddit: c('m40 18.9q0 1.3-0.7 2.3t-1.7 1.7q0.2 1 0.2 2.1 0 3.5-2.3 6.4t-6.5 4.7-9 1.7-8.9-1.7-6.4-4.7-2.4-6.4q0-1.1 0.2-2.1-1.1-0.6-1.8-1.6t-0.7-2.4q0-1.8 1.3-3.2t3.1-1.3q1.9 0 3.3 1.4 4.8-3.3 11.5-3.6l2.6-11.6q0-0.3 0.3-0.5t0.6-0.1l8.2 1.8q0.4-0.8 1.2-1.3t1.8-0.5q1.4 0 2.4 1t0.9 2.3-0.9 2.4-2.4 1-2.4-1-0.9-2.4l-7.5-1.6-2.3 10.5q6.7 0.2 11.6 3.6 1.3-1.4 3.2-1.4 1.8 0 3.1 1.3t1.3 3.2z m-30.7 4.4q0 1.4 1 2.4t2.4 1 2.3-1 1-2.4-1-2.3-2.3-1q-1.4 0-2.4 1t-1 2.3z m18.1 8q0.3-0.3 0.3-0.6t-0.3-0.6q-0.2-0.2-0.5-0.2t-0.6 0.2q-0.9 0.9-2.7 1.4t-3.6 0.4-3.6-0.4-2.7-1.4q-0.2-0.2-0.5-0.2t-0.6 0.2q-0.3 0.2-0.3 0.6t0.3 0.6q1 0.9 2.6 1.5t2.8 0.6 2 0.1 2-0.1 2.8-0.6 2.6-1.6z m-0.1-4.6q1.4 0 2.4-1t1-2.4q0-1.3-1-2.3t-2.4-1q-1.3 0-2.3 1t-1 2.3 1 2.4 2.3 1z'),
    sharethis: c('m30 26.8c2.7 0 4.8 2.2 4.8 4.8s-2.1 5-4.8 5-4.8-2.3-4.8-5c0-0.3 0-0.7 0-1.1l-11.8-6.8c-0.9 0.8-2.1 1.3-3.4 1.3-2.7 0-5-2.3-5-5s2.3-5 5-5c1.3 0 2.5 0.5 3.4 1.3l11.8-6.8c-0.1-0.4-0.2-0.8-0.2-1.1 0-2.8 2.3-5 5-5s5 2.2 5 5-2.3 5-5 5c-1.3 0-2.5-0.6-3.4-1.4l-11.8 6.8c0.1 0.4 0.2 0.8 0.2 1.2s-0.1 0.8-0.2 1.2l11.9 6.8c0.9-0.7 2.1-1.2 3.3-1.2z'),
    sms: c('M29.577,23.563 C27.233,23.563 25.935,22.138 25.935,22.138 L27.22,20.283 C27.22,20.283 28.349,21.315 29.605,21.315 C30.108,21.315 30.652,21.12 30.652,20.52 C30.652,19.334 26.158,19.376 26.158,16.306 C26.158,14.464 27.707,13.25 29.688,13.25 C31.839,13.25 32.898,14.38 32.898,14.38 L31.866,16.376 C31.866,16.376 30.861,15.497 29.661,15.497 C29.159,15.497 28.6,15.72 28.6,16.278 C28.6,17.534 33.094,17.311 33.094,20.464 C33.094,22.125 31.824,23.563 29.577,23.563 L29.577,23.563 Z M23.027,23.394 L22.721,18.901 C22.665,18.147 22.721,17.227 22.721,17.227 L22.692,17.227 C22.692,17.227 22.356,18.273 22.134,18.901 L21.088,21.79 L18.994,21.79 L17.947,18.901 C17.724,18.273 17.389,17.227 17.389,17.227 L17.361,17.227 C17.361,17.227 17.417,18.147 17.361,18.901 L17.055,23.394 L14.598,23.394 L15.422,13.417 L18.073,13.417 L19.524,17.631 C19.748,18.273 20.026,19.278 20.026,19.278 L20.055,19.278 C20.055,19.278 20.334,18.273 20.557,17.631 L22.008,13.417 L24.66,13.417 L25.469,23.394 L23.027,23.394 Z M10.548,23.563 C8.204,23.563 6.906,22.138 6.906,22.138 L8.19,20.283 C8.19,20.283 9.32,21.315 10.576,21.315 C11.078,21.315 11.623,21.12 11.623,20.52 C11.623,19.334 7.129,19.376 7.129,16.306 C7.129,14.464 8.678,13.25 10.66,13.25 C12.808,13.25 13.869,14.38 13.869,14.38 L12.836,16.376 C12.836,16.376 11.832,15.497 10.632,15.497 C10.129,15.497 9.571,15.72 9.571,16.278 C9.571,17.534 14.064,17.311 14.064,20.464 C14.064,22.125 12.795,23.563 10.548,23.563 L10.548,23.563 Z M32.814,6 L7.185,6 C5.437,6 4,7.438 4,9.213 L4,28.99 C4,30.756 5.426,32.203 7.185,32.203 L10.61,32.203 L12.445,34.295 C13.086,34.952 14.117,34.949 14.755,34.295 L16.59,32.203 L32.814,32.203 C34.562,32.203 36,30.764 36,28.99 L36,9.213 C36,7.446 34.574,6 32.814,6 L32.814,6 Z'),
    snapchat: c('M40.0972733,31.9943572 C35.0567281,31.1636801 32.7601595,26.0658711 32.5148547,25.4872173 C32.5101673,25.4758895 32.490871,25.4351877 32.4855587,25.4232349 C32.2329104,24.9098917 32.1702561,24.4932641 32.3022051,24.18593 C32.5668843,23.559934 33.6881773,23.2052576 34.4061235,22.9779991 C34.6081484,22.9126886 34.7974394,22.8526905 34.9481378,22.7926924 C36.4001235,22.219351 37.1287726,21.4867177 37.1133824,20.6134638 C37.0993985,19.9208292 36.5560562,19.2848335 35.7513939,19.000155 C35.4740588,18.884143 35.1440691,18.8208637 34.8227511,18.8208637 C34.6007268,18.8208637 34.2707371,18.8521909 33.9554345,18.99953 C33.3407663,19.2868647 32.7941428,19.4415474 32.3807964,19.4595156 C32.1968178,19.4521721 32.0574471,19.421548 31.9568253,19.3874866 C31.9694811,19.1695247 31.9841682,18.9454692 31.9981521,18.7168045 L32.0054956,18.6001675 C32.1768184,15.8809558 32.389468,12.4969994 31.4841838,10.4690942 C28.806924,4.466626 23.1251489,4 21.4471546,4 L20.6645229,4.00734352 C18.9898878,4.00734352 13.3187374,4.47334454 10.6441337,10.4724534 C9.73681842,12.505046 9.95149919,15.8875962 10.1235251,18.6061829 C10.1401652,18.8735183 10.1568834,19.1341351 10.1714923,19.3881897 C10.0568084,19.4274853 9.89150107,19.4621717 9.66682061,19.4621717 C9.18550757,19.4621717 8.60888501,19.306161 7.95351492,18.99953 C7.00620086,18.5555595 5.274302,19.1488222 5.04024684,20.3781587 C4.91290708,21.0434503 5.18094555,22.0027953 7.17947668,22.7927705 C7.33478431,22.8540967 7.53016881,22.916751 7.77016129,22.9927642 C8.4401403,23.2054138 9.56143329,23.5607152 9.82673748,24.1853831 C9.95806148,24.4940453 9.8954072,24.9106729 9.61877524,25.4753427 C9.52010646,25.7053355 7.14619647,31.1098536 1.90300139,31.9731078 C1.35903406,32.0624019 0.970999347,32.5451212 1.00170151,33.0944008 C1.01037311,33.2470523 1.04568451,33.4004069 1.11099496,33.5550895 C1.55168428,34.5857603 3.22960045,35.3010504 6.38817335,35.8023628 C6.45746805,35.9816541 6.53816865,36.3496894 6.58418283,36.5630421 C6.65082137,36.8677201 6.72081917,37.1823196 6.81620681,37.508325 C6.91221943,37.8383147 7.19752299,38.3916567 8.02280963,38.3916567 C8.30209775,38.3916567 8.62544699,38.3282993 8.97676411,38.2603327 C9.48206078,38.1610389 10.1727423,38.0263556 11.029356,38.0263556 C11.5046536,38.0263556 11.9993256,38.0690106 12.5000131,38.1516642 C13.444671,38.3082999 14.2733169,38.8942972 15.2346149,39.5736509 C16.649883,40.5743227 17.9365615,41.3396112 20.5097621,41.3396112 C20.5777287,41.3396112 20.6450704,41.33758 20.7110839,41.3329708 C20.8063934,41.3376581 20.902406,41.3396112 20.9997467,41.3396112 C23.2536605,41.3396112 25.2375827,40.7443174 26.8975307,39.5716979 C27.8148457,38.9224213 28.6814592,38.3090812 29.626742,38.1517423 C30.1287576,38.0690887 30.6240545,38.0264338 31.0993521,38.0264338 C31.9206545,38.0264338 32.5759465,38.131743 33.1606157,38.2464269 C33.5559158,38.3243932 33.8652811,38.3617358 34.1505847,38.3617358 C34.7265822,38.3617358 35.1505533,38.0451051 35.3125795,37.4924661 C35.4059359,37.1711481 35.4759338,36.8658451 35.5439004,36.5538237 C35.5799149,36.3878132 35.6665528,35.9904819 35.7399099,35.7991598 C38.8531717,35.3038628 40.4431219,34.6165406 40.8831081,33.588526 C40.9491216,33.4405618 40.9877923,33.283848 40.998417,33.1172126 C41.0279473,32.5676986 40.6412406,32.0850574 40.0972733,31.9943572 Z', 43),
    soundcloud: c('M1.61295238,24.952127 C1.59961905,25.0438095 1.53396825,25.1075556 1.45295238,25.1075556 C1.36952381,25.1075556 1.30361905,25.0433016 1.29257143,24.9512381 L1,22.767746 L1.29244444,20.5462857 C1.30349206,20.4543492 1.36939683,20.3898413 1.4528254,20.3898413 C1.53396825,20.3898413 1.59974603,20.4538413 1.6128254,20.5455238 L1.9592381,22.767746 L1.61295238,24.952127 Z M3.09777778,26.2813968 C3.08431746,26.376254 3.01612698,26.4426667 2.93180952,26.4426667 C2.84685714,26.4426667 2.77688889,26.3746032 2.76546032,26.2805079 L2.37219048,22.767746 C2.37219048,22.767746 2.76546032,19.176127 2.76546032,19.175746 C2.77688889,19.0820317 2.84685714,19.0140952 2.93180952,19.0140952 C3.01612698,19.0140952 3.08431746,19.080254 3.09790476,19.175619 L3.54539683,22.767873 L3.09777778,26.2813968 Z M4.70336508,26.8754286 C4.69104762,26.9888254 4.60685714,27.0712381 4.5032381,27.0712381 C4.3975873,27.0712381 4.31326984,26.9888254 4.30260317,26.8746667 L3.92939683,22.768254 C3.92939683,22.768254 4.30260317,18.5065397 4.30260317,18.5061587 C4.31314286,18.392381 4.39746032,18.3098413 4.5032381,18.3098413 C4.60698413,18.3098413 4.69104762,18.392127 4.70361905,18.5060317 L5.12761905,22.768254 L4.70336508,26.8754286 Z M6.32190476,27.0057143 C6.31073016,27.1366349 6.20990476,27.2358095 6.08761905,27.2358095 C5.96368254,27.2358095 5.86260317,27.1366349 5.85269841,27.0057143 L5.49980952,22.7690159 L5.85269841,18.3897143 C5.86260317,18.2582857 5.96355556,18.1591111 6.08761905,18.1591111 C6.21003175,18.1591111 6.31085714,18.2580317 6.32190476,18.3889524 L6.72279365,22.7690159 L6.32190476,27.0057143 Z M7.95326984,27.0407619 C7.94273016,27.1914921 7.82730159,27.3056508 7.68457143,27.3056508 C7.54044444,27.3056508 7.42488889,27.1914921 7.416,27.0410159 L7.08292063,22.7695238 L7.416,18.7073016 C7.42501587,18.5560635 7.54044444,18.4420317 7.68457143,18.4420317 C7.82742857,18.4420317 7.94298413,18.5559365 7.95326984,18.7056508 L8.33066667,22.7695238 L7.95326984,27.0407619 Z M9.59746032,27.0412698 C9.58793651,27.2088889 9.45498413,27.3408254 9.29473016,27.3408254 C9.13320635,27.3408254 9,27.2088889 8.99187302,27.0421587 L8.67911111,22.7710476 C8.67911111,22.7710476 8.99187302,16.1619048 8.99187302,16.1617778 C9,15.9937778 9.13320635,15.8619683 9.29473016,15.8619683 C9.45498413,15.8619683 9.58793651,15.9933968 9.59746032,16.1613968 L9.9512381,22.7709206 C9.9512381,22.7710476 9.59746032,27.0425397 9.59746032,27.0412698 Z M11.2295873,27.0370794 C11.2209524,27.224381 11.0728889,27.3710476 10.8928254,27.3710476 C10.7113651,27.3710476 10.5634286,27.2245079 10.5558095,27.0387302 L10.2631111,22.7941587 C10.2631111,22.7941587 10.5554286,14.6739048 10.5554286,14.6733968 C10.5633016,14.4859683 10.7113651,14.3394286 10.8928254,14.3394286 C11.0730159,14.3394286 11.2209524,14.4860952 11.2295873,14.6733968 L11.560254,22.7941587 C11.560254,22.7941587 11.2293333,27.0394921 11.2295873,27.0370794 Z M12.9244444,26.9719365 C12.9161905,27.1786667 12.7532698,27.3399365 12.5532698,27.3399365 C12.352127,27.3399365 12.1890794,27.1781587 12.1820952,26.9735873 L11.9097143,22.7726984 C11.9097143,22.7726984 12.1819683,13.9744762 12.1819683,13.9742222 C12.1892063,13.767619 12.352127,13.6055873 12.5532698,13.6055873 C12.7532698,13.6055873 12.9161905,13.7673651 12.9244444,13.9740952 L13.231619,22.7726984 C13.231619,22.7728254 12.9243175,26.9744762 12.9244444,26.9719365 Z M14.6071111,26.9462857 C14.599746,27.1716825 14.4220952,27.3484444 14.2020317,27.3484444 C13.9812063,27.3484444 13.8031746,27.1716825 13.7968254,26.9481905 L13.5445079,22.7733333 L13.7965714,13.6786032 C13.8030476,13.4525714 13.9810794,13.2755556 14.2019048,13.2755556 C14.4220952,13.2755556 14.599873,13.4524444 14.6071111,13.6783492 L14.8911746,22.7737143 L14.6071111,26.9462857 Z M16.3028571,26.9069206 C16.296254,27.151873 16.1034921,27.344254 15.863619,27.344254 C15.6227302,27.344254 15.4297143,27.151746 15.424254,26.9089524 L15.192127,22.7740952 L15.424,13.9112381 C15.4295873,13.6661587 15.6227302,13.4741587 15.863619,13.4741587 C16.1034921,13.4741587 16.296254,13.6659048 16.3028571,13.9107302 L16.5635556,22.7740952 C16.5635556,22.7740952 16.3028571,26.9098413 16.3028571,26.9069206 Z M18.0115556,26.880381 C18.0058413,27.1450159 17.7978413,27.351746 17.5381587,27.351746 C17.2777143,27.351746 17.0695873,27.1450159 17.0647619,26.8833016 L16.8529524,22.7744762 L17.0646349,14.2353016 C17.0697143,13.9707937 17.2778413,13.7635556 17.5382857,13.7635556 C17.7979683,13.7635556 18.0059683,13.9706667 18.0116825,14.2344127 L18.2488889,22.7749841 C18.2487619,22.7748571 18.0115556,26.8838095 18.0115556,26.880381 Z M19.7542857,26.4513016 L19.7330794,26.8549841 C19.7304127,26.9941587 19.672381,27.1205079 19.5805714,27.2119365 C19.4886349,27.3034921 19.3629206,27.360254 19.2252698,27.360254 C19.0703492,27.360254 18.9304127,27.2885079 18.8369524,27.1765079 C18.767746,27.0937143 18.7245714,26.9886984 18.7187302,26.8746667 C18.7184762,26.8689524 18.7177143,26.8632381 18.7175873,26.8573968 C18.7175873,26.8573968 18.5259683,22.7785397 18.5259683,22.7724444 L18.7158095,12.7095873 L18.7175873,12.6137143 C18.720381,12.4364444 18.8135873,12.280381 18.951746,12.1899683 C19.0309841,12.1381587 19.1248254,12.1076825 19.2251429,12.1076825 C19.328381,12.1076825 19.4248889,12.1395556 19.5056508,12.1942857 C19.639873,12.2852063 19.7299048,12.4391111 19.7329524,12.6133333 L19.9467937,22.775619 L19.7542857,26.4513016 Z M21.4468571,26.7946667 C21.4427937,27.0925714 21.199746,27.3349841 20.9055238,27.3349841 C20.6102857,27.3349841 20.3673651,27.0925714 20.3634286,26.7989841 L20.2539683,24.8152381 L20.1412063,22.7767619 L20.3621587,11.7492063 L20.3633016,11.6934603 C20.3655873,11.5259683 20.4434286,11.375873 20.5635556,11.2766984 C20.6571429,11.1994921 20.776254,11.1530159 20.9053968,11.1530159 C21.0058413,11.1530159 21.0999365,11.1817143 21.1809524,11.2308571 C21.3372698,11.3254603 21.4439365,11.4968889 21.4467302,11.6925714 C21.4467302,11.6925714 21.687873,22.7766349 21.687873,22.7767619 C21.688,22.7766349 21.4468571,26.7993651 21.4468571,26.7946667 Z M36.080381,27.3462857 C36.080381,27.3462857 22.4551111,27.3475556 22.4425397,27.3462857 C22.1485714,27.3168254 21.9150476,27.0829206 21.9111111,26.7817143 C21.9111111,26.7817143 21.9111111,11.1667302 21.9111111,11.1664762 C21.9146667,10.8793651 22.0132063,10.7319365 22.3846349,10.5879365 C23.3403175,10.2182857 24.4220952,10 25.5320635,10 C30.0676825,10 33.7859048,13.4783492 34.1773968,17.912127 C34.7630476,17.6667937 35.4063492,17.5301587 36.080381,17.5301587 C38.7974603,17.5301587 41,19.7329524 41,22.4504127 C41,25.168127 38.7974603,27.3462857 36.080381,27.3462857 Z', 42),
    spotify: c('M20.000107,0.000106951872 C8.9719286,0.000106951872 0,8.97191751 0,19.9995717 C0,31.0278682 8.9719286,40.000107 20.000107,40.000107 C31.0280714,40.000107 40,31.0278682 40,19.9995717 C40,8.97191751 31.0280714,0.000106951872 20.000107,0.000106951872 Z M20.000107,36.7888547 C10.7425941,36.7888547 3.21121785,29.2573978 3.21121785,19.9995717 C3.21121785,10.7423879 10.7425941,3.2111451 20.000107,3.2111451 C29.2574059,3.2111451 36.7887821,10.7423879 36.7887821,19.9995717 C36.7887821,29.2573978 29.2574059,36.7888547 20.000107,36.7888547 Z M30.71851,14.0728846 C22.3680591,10.2136017 10.6398352,11.9260555 10.1446654,12.0007706 C9.26821697,12.1332883 8.66515026,12.9508731 8.79723835,13.8273309 C8.92932645,14.7037887 9.74775884,15.3085745 10.623565,15.1760568 C10.7355294,15.1591442 21.903717,13.5368196 29.3712971,16.9878453 C29.5892317,17.0886786 29.8185127,17.1364193 30.0439402,17.1364193 C30.6506463,17.1364193 31.2312344,16.7908885 31.5024753,16.2040857 C31.8745484,15.3989177 31.5234553,14.4449617 30.71851,14.0728846 Z M29.4605689,20.1136782 C21.9007198,16.6200499 11.2994193,18.1683016 10.8517755,18.2357379 C9.97532714,18.3682556 9.37226043,19.1858404 9.50434852,20.0622982 C9.63622254,20.9389701 10.4544408,21.5428996 11.3306752,21.4112382 C11.4308652,21.3960383 21.4365918,19.9432678 28.113356,23.028853 C28.3317188,23.1296863 28.5605716,23.1774269 28.7859991,23.1774269 C29.3927052,23.1772129 29.9732934,22.8318962 30.2447483,22.2448793 C30.6166073,21.4399254 30.2655142,20.4857553 29.4605689,20.1136782 Z M27.5897134,25.895859 C20.9330729,22.8194794 11.6158313,24.180194 11.2225642,24.2394951 C10.3456876,24.3720128 9.74219273,25.1900258 9.87470898,26.0669117 C10.0072252,26.9437976 10.8258717,27.5466567 11.702106,27.4147813 C11.789023,27.4015081 20.450962,26.1341339 26.2425005,28.8108197 C26.4604351,28.911653 26.6897161,28.9593936 26.9151436,28.9593936 C27.5218497,28.9591795 28.1024378,28.6138629 28.3736787,28.0270601'),
    telegram: c('M31.6393291,32.9642596 C32.1759836,33.3442509 32.8676345,33.4392488 33.4842871,33.2059208 C34.1009398,32.9709261 34.5542628,32.4442714 34.6909263,31.8059526 C36.1392267,24.9994409 39.6524801,7.77149966 40.9707834,1.57997391 C41.0707811,1.11331787 40.9041183,0.628328907 40.5374599,0.316669334 C40.1708016,0.0050097613 39.6624799,-0.0849881903 39.2091568,0.0833413118 C32.2209826,2.66994911 10.6998057,10.7447653 1.90333928,13.9996912 C1.34501866,14.2063532 0.981693592,14.7430076 1.00002651,15.3313276 C1.02002605,15.9213142 1.41668369,16.4329692 1.98833735,16.6046319 C5.93324756,17.7846051 11.111463,19.4262344 11.111463,19.4262344 C11.111463,19.4262344 13.531408,26.7344014 14.7930459,30.4509835 C14.9513756,30.9176395 15.3163673,31.2842978 15.798023,31.4109616 C16.2780121,31.5359588 16.7913338,31.4042951 17.1496589,31.0659695 C19.1762795,29.1526797 22.3095415,26.1944137 22.3095415,26.1944137 C22.3095415,26.1944137 28.2627393,30.5593143 31.6393291,32.9642596 Z M13.2897468,18.5029221 L16.0880164,27.732712 L16.7096689,21.887845 C16.7096689,21.887845 27.5210895,12.1364003 33.6842826,6.57819348 C33.8642785,6.41486387 33.8892779,6.14153676 33.7392813,5.94987445 C33.5909514,5.75821215 33.3176243,5.71321317 33.1126289,5.84321021 C25.9694582,10.4047731 13.2897468,18.5029221 13.2897468,18.5029221 Z'),
    tumblr: c('m25.9 29.9v-3.5c-1.1 0.8-2.2 1.1-3.3 1.1-0.5 0-1-0.1-1.6-0.4-0.4-0.3-0.6-0.5-0.7-0.9-0.2-0.3-0.3-1.1-0.3-2.4v-5.5h5v-3.3h-5v-5.6h-3c-0.2 1.3-0.5 2.2-0.7 2.8-0.3 0.7-0.8 1.3-1.5 1.9-0.7 0.5-1.4 0.9-2.1 1.2v3h2.3v7.6c0 0.8 0.1 1.6 0.4 2.2 0.2 0.5 0.5 1 1.1 1.5 0.4 0.4 1 0.8 1.8 1.1 1 0.3 1.9 0.4 2.7 0.4 0.8 0 1.6-0.1 2.4-0.3 0.8-0.2 1.7-0.5 2.5-0.9z'),
    twitch: c('M26.3137255,23.5384615 L29.4509804,23.5384615 C29.8839216,23.5384615 30.2352941,23.1946154 30.2352941,22.7692308 L30.2352941,12.7692308 C30.2352941,12.3438462 29.8839216,12 29.4509804,12 L26.3137255,12 C25.8807843,12 25.5294118,12.3438462 25.5294118,12.7692308 L25.5294118,22.7692308 C25.5294118,23.1946154 25.8807843,23.5384615 26.3137255,23.5384615 Z M27.0980392,13.5384615 L28.6666667,13.5384615 L28.6666667,22 L27.0980392,22 L27.0980392,13.5384615 Z M18.4705882,23.5384615 L21.6078431,23.5384615 C22.0407843,23.5384615 22.3921569,23.1946154 22.3921569,22.7692308 L22.3921569,12.7692308 C22.3921569,12.3438462 22.0407843,12 21.6078431,12 L18.4705882,12 C18.0376471,12 17.6862745,12.3438462 17.6862745,12.7692308 L17.6862745,22.7692308 C17.6862745,23.1946154 18.0376471,23.5384615 18.4705882,23.5384615 Z M19.254902,13.5384615 L20.8235294,13.5384615 L20.8235294,22 L19.254902,22 L19.254902,13.5384615 Z M41.2156863,2 L5.52941176,2 C5.25019608,2 4.99215686,2.14538462 4.85176471,2.38153846 L2.10666667,6.99692308 C2.03686275,7.11461538 2,7.24846154 2,7.38461538 L2,35.8461538 C2,36.2715385 2.35137255,36.6153846 2.78431373,36.6153846 L11.4117647,36.6153846 L11.4117647,41.2307692 C11.4117647,41.6561538 11.7631373,42 12.1960784,42 L17.6862745,42 C17.88,42 18.0666667,41.9292308 18.2109804,41.8023077 L24.0878431,36.6153846 L31.4117647,36.6153846 C31.6086275,36.6153846 31.7984314,36.5423077 31.9427451,36.4123077 L41.7466667,27.5661538 C41.9082353,27.4207692 42,27.2146154 42,27 L42,2.76923077 C42,2.34384615 41.6486275,2 41.2156863,2 Z M40.4313725,26.6630769 L31.1058824,35.0769231 L23.7866667,35.0769231 C23.5929412,35.0769231 23.4062745,35.1476923 23.2619608,35.2746154 L17.385098,40.4615385 L12.9803922,40.4615385 L12.9803922,35.8461538 C12.9803922,35.4207692 12.6290196,35.0769231 12.1960784,35.0769231 L3.56862745,35.0769231 L3.56862745,7.59307692 L5.97960784,3.53846154 L40.4313725,3.53846154 L40.4313725,26.6630769 Z M9.05882353,30.4615385 L16.9019608,30.4615385 L16.9019608,34.3076923 C16.9019608,34.6184615 17.0933333,34.9 17.3858824,35.0184615 C17.4831373,35.0584615 17.585098,35.0769231 17.6862745,35.0769231 C17.8901961,35.0769231 18.0909804,34.9984615 18.2407843,34.8515385 L22.7168627,30.4615385 L31.4117647,30.4615385 C31.6196078,30.4615385 31.8196078,30.3807692 31.9662745,30.2361538 L37.0643137,25.2361538 C37.2117647,25.0923077 37.2941176,24.8969231 37.2941176,24.6923077 L37.2941176,6.61538462 C37.2941176,6.19 36.9427451,5.84615385 36.5098039,5.84615385 L9.05882353,5.84615385 C8.62588235,5.84615385 8.2745098,6.19 8.2745098,6.61538462 L8.2745098,29.6923077 C8.2745098,30.1176923 8.62588235,30.4615385 9.05882353,30.4615385 Z M9.84313725,7.38461538 L35.7254902,7.38461538 L35.7254902,24.3738462 L31.0870588,28.9230769 L22.3921569,28.9230769 C22.1843137,28.9230769 21.9843137,29.0038462 21.8376471,29.1484615 L18.4705882,32.4507692 L18.4705882,29.6923077 C18.4705882,29.2669231 18.1192157,28.9230769 17.6862745,28.9230769 L9.84313725,28.9230769 L9.84313725,7.38461538 Z', 42),
    twitter: c('m31.5 11.7c1.3-0.8 2.2-2 2.7-3.4-1.4 0.7-2.7 1.2-4 1.4-1.1-1.2-2.6-1.9-4.4-1.9-1.7 0-3.2 0.6-4.4 1.8-1.2 1.2-1.8 2.7-1.8 4.4 0 0.5 0.1 0.9 0.2 1.3-5.1-0.1-9.4-2.3-12.7-6.4-0.6 1-0.9 2.1-0.9 3.1 0 2.2 1 3.9 2.8 5.2-1.1-0.1-2-0.4-2.8-0.8 0 1.5 0.5 2.8 1.4 4 0.9 1.1 2.1 1.8 3.5 2.1-0.5 0.1-1 0.2-1.6 0.2-0.5 0-0.9 0-1.1-0.1 0.4 1.2 1.1 2.3 2.1 3 1.1 0.8 2.3 1.2 3.6 1.3-2.2 1.7-4.7 2.6-7.6 2.6-0.7 0-1.2 0-1.5-0.1 2.8 1.9 6 2.8 9.5 2.8 3.5 0 6.7-0.9 9.4-2.7 2.8-1.8 4.8-4.1 6.1-6.7 1.3-2.6 1.9-5.3 1.9-8.1v-0.8c1.3-0.9 2.3-2 3.1-3.2-1.1 0.5-2.3 0.8-3.5 1z'),
    vk: c('m39.8 12.2q0.5 1.3-3.1 6.1-0.5 0.7-1.4 1.8-1.6 2-1.8 2.7-0.4 0.8 0.3 1.7 0.3 0.4 1.6 1.7h0.1l0 0q3 2.8 4 4.6 0.1 0.1 0.1 0.3t0.2 0.5 0 0.8-0.5 0.5-1.3 0.3l-5.3 0.1q-0.5 0.1-1.1-0.1t-1.1-0.5l-0.4-0.2q-0.7-0.5-1.5-1.4t-1.4-1.6-1.3-1.2-1.1-0.3q-0.1 0-0.2 0.1t-0.4 0.3-0.4 0.6-0.4 1.1-0.1 1.6q0 0.3-0.1 0.5t-0.1 0.4l-0.1 0.1q-0.4 0.4-1.1 0.5h-2.4q-1.5 0.1-3-0.4t-2.8-1.1-2.1-1.3-1.5-1.2l-0.5-0.5q-0.2-0.2-0.6-0.6t-1.4-1.9-2.2-3.2-2.6-4.4-2.7-5.6q-0.1-0.3-0.1-0.6t0-0.3l0.1-0.1q0.3-0.4 1.2-0.4l5.7-0.1q0.2 0.1 0.5 0.2t0.3 0.2l0.1 0q0.3 0.2 0.5 0.7 0.4 1 1 2.1t0.8 1.7l0.3 0.6q0.6 1.3 1.2 2.2t1 1.4 0.9 0.8 0.7 0.3 0.5-0.1q0.1 0 0.1-0.1t0.3-0.5 0.3-0.9 0.2-1.7 0-2.6q-0.1-0.9-0.2-1.5t-0.3-1l-0.1-0.2q-0.5-0.7-1.8-0.9-0.3-0.1 0.1-0.5 0.4-0.4 0.8-0.7 1.1-0.5 5-0.5 1.7 0.1 2.8 0.3 0.4 0.1 0.7 0.3t0.4 0.5 0.2 0.7 0.1 0.9 0 1.1-0.1 1.5 0 1.7q0 0.3 0 0.9t-0.1 1 0.1 0.8 0.3 0.8 0.4 0.6q0.2 0 0.4 0t0.5-0.2 0.8-0.7 1.1-1.4 1.4-2.2q1.2-2.2 2.2-4.7 0.1-0.2 0.2-0.4t0.3-0.2l0 0 0.1-0.1 0.3-0.1 0.4 0 6 0q0.8-0.1 1.3 0t0.7 0.4z'),
    weibo: c('m15.1 28.7q0.4-0.8 0.2-1.6t-1-1.1q-0.8-0.3-1.6 0t-1.4 1q-0.5 0.8-0.3 1.5t1 1.2 1.7 0 1.4-1z m2.1-2.7q0.1-0.3 0-0.6t-0.3-0.4q-0.4-0.2-0.7 0t-0.5 0.4q-0.3 0.7 0.3 1 0.3 0.1 0.7 0t0.5-0.4z m3.8 2.3q-1 2.3-3.5 3.4t-5 0.3q-2.4-0.8-3.3-2.9t0.2-4.1q1-2.1 3.4-3.1t4.7-0.5q2.4 0.7 3.5 2.7t0 4.2z m7-3.5q-0.2-2.2-2-3.8t-4.6-2.5-6.2-0.4q-4.9 0.5-8.2 3.1t-3 5.9q0.2 2.2 2 3.8t4.7 2.5 6.1 0.4q5-0.5 8.3-3.1t2.9-5.9z m6.9 0.1q0 1.5-0.8 3.1t-2.5 3-3.7 2.7-5.1 1.8-6 0.7-6.2-0.7-5.3-2.1-3.9-3.4-1.4-4.4q0-2.6 1.6-5.5t4.4-5.8q3.7-3.7 7.6-5.2t5.5 0.1q1.4 1.4 0.4 4.7-0.1 0.3 0 0.4t0.2 0.2 0.4 0 0.3-0.1l0.1-0.1q3.1-1.3 5.5-1.3t3.4 1.4q1 1.4 0 4 0 0.3-0.1 0.4t0.1 0.3 0.3 0.2 0.3 0.1q1.3 0.4 2.3 1t1.8 1.9 0.8 2.6z m-1.7-14q1 1.1 1.3 2.5t-0.2 2.6q-0.2 0.5-0.7 0.7t-0.9 0.1q-0.6-0.1-0.8-0.6t-0.1-1q0.5-1.4-0.5-2.5t-2.4-0.8q-0.6 0.1-1-0.2t-0.6-0.8q-0.1-0.5 0.2-1t0.8-0.5q1.4-0.3 2.7 0.1t2.2 1.4z m4.1-3.6q1.9 2.1 2.5 5t-0.3 5.4q-0.2 0.6-0.8 0.8t-1.1 0.1-0.9-0.7-0.1-1.2q0.6-1.8 0.2-3.8t-1.8-3.5q-1.4-1.6-3.3-2.2t-3.9-0.2q-0.6 0.2-1.1-0.2t-0.7-1 0.2-1.1 1-0.7q2.7-0.5 5.4 0.3t4.7 3z'),
    whatsapp: c('m25 21.7q0.3 0 2.2 1t2 1.2q0 0.1 0 0.3 0 0.8-0.4 1.7-0.3 0.9-1.6 1.5t-2.2 0.6q-1.3 0-4.3-1.4-2.2-1-3.8-2.6t-3.3-4.2q-1.6-2.3-1.6-4.3v-0.2q0.1-2 1.7-3.5 0.5-0.5 1.2-0.5 0.1 0 0.4 0t0.4 0.1q0.4 0 0.6 0.1t0.3 0.6q0.2 0.5 0.8 2t0.5 1.7q0 0.5-0.8 1.3t-0.7 1q0 0.2 0.1 0.3 0.7 1.7 2.3 3.1 1.2 1.2 3.3 2.2 0.3 0.2 0.5 0.2 0.4 0 1.2-1.1t1.2-1.1z m-4.5 11.9q2.8 0 5.4-1.1t4.5-3 3-4.5 1.1-5.4-1.1-5.5-3-4.5-4.5-2.9-5.4-1.2-5.5 1.2-4.5 2.9-2.9 4.5-1.2 5.5q0 4.5 2.7 8.2l-1.7 5.2 5.4-1.8q3.5 2.4 7.7 2.4z m0-30.9q3.4 0 6.5 1.4t5.4 3.6 3.5 5.3 1.4 6.6-1.4 6.5-3.5 5.3-5.4 3.6-6.5 1.4q-4.4 0-8.2-2.1l-9.3 3 3-9.1q-2.4-3.9-2.4-8.6 0-3.5 1.4-6.6t3.6-5.3 5.3-3.6 6.6-1.4z'),
    xing: c('m17.8 14.9q-0.2 0.4-5.7 10.2-0.6 1-1.5 1h-5.3q-0.5 0-0.7-0.4t0-0.8l5.7-10q0 0 0 0l-3.6-6.2q-0.3-0.5-0.1-0.9 0.2-0.3 0.8-0.3h5.3q0.9 0 1.5 1z m18-14.3q0.3 0.3 0 0.8l-11.8 20.8v0.1l7.5 13.7q0.3 0.4 0.1 0.8-0.3 0.3-0.8 0.3h-5.3q-0.9 0-1.5-1l-7.5-13.8 11.8-21.1q0.6-1 1.4-1h5.4q0.5 0 0.7 0.4z'),
    wechat: c('M27.7561832,11.4320611 C24.059542,11.6251908 20.8450382,12.7458015 18.2352672,15.2775573 C15.5984733,17.8354198 14.3948092,20.969771 14.7238168,24.8552672 C13.2789313,24.6763359 11.9629008,24.4793893 10.6393893,24.3679389 C10.1822901,24.3294656 9.63984733,24.3841221 9.25267176,24.6025954 C7.96748092,25.3277863 6.73541985,26.1465649 5.2751145,27.0593893 C5.54305344,25.8474809 5.71648855,24.7862595 6.02351145,23.7654962 C6.24931298,23.0152672 6.14473282,22.5977099 5.45358779,22.1091603 C1.01603053,18.9761832 -0.854503817,14.2874809 0.545343511,9.46030534 C1.84045802,4.99465649 5.02091603,2.28641221 9.34244275,0.874656489 C15.240916,-1.05206107 21.869771,0.913282443 25.4564885,5.59633588 C26.7519084,7.28793893 27.5462595,9.18656489 27.7561832,11.4320611 Z M10.7429008,9.92793893 C10.7769466,9.04503817 10.0119084,8.24961832 9.10320611,8.22305344 C8.17282443,8.19572519 7.40763359,8.90671756 7.38045802,9.82351145 C7.3529771,10.7526718 8.06366412,11.4972519 9.00076336,11.5210687 C9.92977099,11.5445802 10.7085496,10.8326718 10.7429008,9.92793893 Z M19.6193893,8.22244275 C18.7073282,8.23923664 17.9366412,9.01603053 17.9528244,9.90244275 C17.9694656,10.8212214 18.7254962,11.54 19.6633588,11.5287023 C20.6036641,11.5174046 21.3167939,10.7909924 21.3079389,9.85282443 C21.3001527,8.9319084 20.5474809,8.20549618 19.6193893,8.22244275 Z M36.0612214,34.4778626 C34.890687,33.9566412 33.8169466,33.1746565 32.6737405,33.0552672 C31.5349618,32.9363359 30.3378626,33.5932824 29.1464122,33.7151145 C25.5172519,34.0864122 22.2659542,33.0749618 19.5850382,30.5957252 C14.4862595,25.8796947 15.2148092,18.6485496 21.1138931,14.7838168 C26.3567939,11.3490076 34.0458015,12.4940458 37.7422901,17.26 C40.9680916,21.4187786 40.5890076,26.9393893 36.6509924,30.4331298 C35.5114504,31.4442748 35.101374,32.2763359 35.8325191,33.609313 C35.9674809,33.8554198 35.9829008,34.1670229 36.0612214,34.4778626 L36.0612214,34.4778626 Z M22.7369466,21.5772519 C23.4821374,21.5780153 24.0957252,20.9948092 24.1239695,20.2587786 C24.1537405,19.479542 23.5270229,18.8259542 22.7467176,18.8227481 C21.9741985,18.8192366 21.3270229,19.4819847 21.3538931,20.2496183 C21.3792366,20.9830534 21.9970992,21.5763359 22.7369466,21.5772519 Z M31.3264122,18.8258015 C30.6033588,18.8207634 29.9890076,19.4126718 29.959542,20.1432061 C29.9282443,20.9244275 30.5354198,21.5659542 31.3085496,21.5679389 C32.0563359,21.5703817 32.6471756,21.0048855 32.6743511,20.2607634 C32.7033588,19.4777099 32.0958779,18.831145 31.3264122,18.8258015 L31.3264122,18.8258015 Z'),
    yelp: c('M4.1482892,28.8927037 C3.85912566,26.5858934 4.0340317,23.3341573 4.32102922,22.0616211 C4.63889252,20.6515427 5.42136691,20.3006476 6.75834217,20.8367373 C9.40034393,21.8948376 12.0342231,22.9702661 14.6670193,24.0484021 C15.4987706,24.3895501 15.8648278,24.9797903 15.8280055,25.8375338 C15.7933492,26.650874 15.3899281,27.1653035 14.5267695,27.4403879 C11.7526406,28.3241237 8.98013623,29.210567 6.19896775,30.0699351 C5.09267351,30.4116246 4.39575688,30.0352788 4.1482892,28.8927037 Z M19.1100659,40.3872254 C19.0986943,41.5027252 18.5257822,42.0956729 17.420571,41.987372 C14.9550998,41.7436948 12.6791553,40.9032794 10.6382238,39.5034896 C9.71333368,38.868846 9.63860602,38.0533398 10.3539338,37.1912643 C12.2459515,34.9142367 14.1569218,32.6518298 16.0738487,30.3948379 C16.6104799,29.7629019 17.3290567,29.6221106 18.1012425,29.9296853 C18.8241514,30.2161414 19.1571768,30.7164918 19.1615088,31.5688203 C19.1690899,33.0384642 19.1636749,34.5081081 19.1636749,35.9782936 C19.1474297,35.9782936 19.1306431,35.9782936 19.1143979,35.9782936 C19.1143979,37.447396 19.1268525,38.9175815 19.1100659,40.3872254 Z M19.1068169,19.9194282 C18.7678349,21.1459365 17.5483661,21.5049542 16.5817801,20.6683293 C16.1913552,20.3298889 15.8588713,19.9015586 15.5799963,19.4634812 C12.9082118,15.2668193 10.2526724,11.0604103 7.59767456,6.85454277 C6.83036231,5.63940607 6.98306665,4.90729163 8.27022348,4.25423688 C10.8163789,2.9611235 13.5249857,2.18027363 16.3814234,2.00915812 C17.7438494,1.9273909 18.2219981,2.38442093 18.3162199,3.73276779 C18.6508698,8.54133011 18.9681916,13.3515169 19.3044661,18.3355268 C19.2568137,18.755193 19.2606042,19.3595123 19.1068169,19.9194282 Z M22.3623435,21.7020619 C24.1038228,19.3411012 25.8339306,16.9709348 27.588406,14.6191796 C28.3394731,13.6119807 29.1566038,13.5145099 30.0852845,14.3776685 C31.8116017,15.9805226 33.0993,17.9039475 33.9245533,20.1105794 C34.3696702,21.3045974 33.9759962,22.0020556 32.7446144,22.3188359 C29.9472008,23.0384957 27.1411231,23.7283728 24.3382944,24.4252894 C24.1693449,24.4675268 23.9933559,24.4772739 23.8531061,24.4973095 C23.0912089,24.4751078 22.5708228,24.1133827 22.2367144,23.4922767 C21.908021,22.8798348 21.9410528,22.2744325 22.3623435,21.7020619 Z M33.95217,33.4359287 C33.0002046,35.3138672 31.7097988,36.933508 30.1286049,38.3192187 C29.8854692,38.5336546 29.6017207,38.7177662 29.3087666,38.8574744 C28.6205141,39.1861678 27.980997,39.0497086 27.5797419,38.4134405 C25.9184053,35.7860594 24.2738553,33.1473067 22.650424,30.4950163 C22.2329239,29.8121788 22.4446522,29.1336733 22.9309235,28.5520972 C23.3955346,27.9948888 24.0009369,27.7853265 24.6989366,28.0170905 C27.5672873,28.9647239 30.42914,29.9269778 33.2931587,30.8854413 C33.946755,31.1031262 34.3198517,31.5314564 34.3604646,32.2706105 C34.2267129,32.6610354 34.1357401,33.0709545 33.95217,33.4359287 Z'),
    youtube: c('M32.6925126,6 L9.3074874,6 C4.71938456,6 1,9.71938456 1,14.3074874 L1,25.9975271 C1,30.58563 4.71938456,34.3050145 9.3074874,34.3050145 L32.6925126,34.3050145 C37.2806154,34.3050145 41,30.58563 41,25.9975271 L41,14.3074874 C41,9.71938456 37.2806154,6 32.6925126,6 Z M27.0742168,20.7212696 L16.1362795,25.9380045 C15.8448268,26.0770063 15.5081681,25.8645122 15.5081681,25.5416496 L15.5081681,14.7821068 C15.5081681,14.4546454 15.8536771,14.2424116 16.1457372,14.3904373 L27.0836744,19.9332453 C27.4088798,20.0980171 27.4032399,20.5643936 27.0742168,20.7212696 Z'),
    wechatIcon: a('https://s3.amazonaws.com/sharethis-platform-cdn/img/wechat.svg')
  }, b && (window.__sharethis__.ICONS = {
    arrow_left: a('https://s3.amazonaws.com/sharethis-socialab-prod/ie8buttons/left-arrow.png'),
    arrow_right: a('https://s3.amazonaws.com/sharethis-socialab-prod/ie8buttons/right-arrow.png'),
    blogger: a('https://s3.amazonaws.com/sharethis-socialab-prod/ie8buttons/blogger_32.png'),
    delicious: a('https://s3.amazonaws.com/sharethis-socialab-prod/ie8buttons/delicious.png'),
    digg: a('https://s3.amazonaws.com/sharethis-socialab-prod/ie8buttons/digg.png'),
    email: a('https://s3.amazonaws.com/sharethis-socialab-prod/ie8buttons/email.png'),
    facebook: a('https://s3.amazonaws.com/sharethis-socialab-prod/ie8buttons/facebook.png'),
    flipboard: a('https://s3.amazonaws.com/sharethis-socialab-prod/ie8buttons/flipboard.png'),
    googleplus: a('https://s3.amazonaws.com/sharethis-socialab-prod/ie8buttons/google%2B.png'),
    linkedin: a('https://s3.amazonaws.com/sharethis-socialab-prod/ie8buttons/linkedin.png'),
    livejournal: a('https://s3.amazonaws.com/sharethis-socialab-prod/ie8buttons/livejournal_16.png'),
    mailru: a('https://s3.amazonaws.com/sharethis-socialab-prod/ie8buttons/mailru.png'),
    meneame: a('https://s3.amazonaws.com/sharethis-socialab-prod/ie8buttons/mename.png'),
    odnoklassniki: a('https://s3.amazonaws.com/sharethis-socialab-prod/ie8buttons/odnoklassniki.png'),
    pinterest: a('https://s3.amazonaws.com/sharethis-socialab-prod/ie8buttons/pinterest.png'),
    print: a('https://s3.amazonaws.com/sharethis-socialab-prod/ie8buttons/print.png'),
    reddit: a('https://s3.amazonaws.com/sharethis-socialab-prod/ie8buttons/reddit.png'),
    sharethis: a('https://s3.amazonaws.com/sharethis-socialab-prod/ie8buttons/sharethis_32.png'),
    sms: a('https://s3.amazonaws.com/sharethis-socialab-prod/ie8buttons/sms.png'),
    tumblr: a('https://s3.amazonaws.com/sharethis-socialab-prod/ie8buttons/tumblr.png'),
    twitter: a('https://s3.amazonaws.com/sharethis-socialab-prod/ie8buttons/twitter.png'),
    vk: a('https://s3.amazonaws.com/sharethis-socialab-prod/ie8buttons/vk.png'),
    weibo: a('https://s3.amazonaws.com/sharethis-socialab-prod/ie8buttons/weibo.png'),
    whatsapp: a('https://s3.amazonaws.com/sharethis-socialab-prod/ie8buttons/whatsapp_32%402x.png'),
    xing: a('https://s3.amazonaws.com/sharethis-socialab-prod/ie8buttons/xing.png'),
    wechat: a('https://s3.amazonaws.com/sharethis-socialab-prod/ie8buttons/wechat.png')
  })
}.call(this), function () {
  var a;
  a = window.__sharethis__, a.networks = ['blogger', 'delicious', 'digg', 'email', 'facebook', 'flipboard', 'googleplus', 'linkedin', 'livejournal', 'mailru', 'meneame', 'messenger', 'odnoklassniki', 'pinterest', 'print', 'reddit', 'sharethis', 'sms', 'tumblr', 'twitter', 'vk', 'wechat', 'weibo', 'whatsapp', 'xing']
}.call(this), function () {
  var a;
  a = window.__sharethis__, a.loader['share-all'] = function (b) {
    var c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C;
    for (null == b && (b = {}), i = b.count_url, y = b.share_url, B = b.url, k = b.description, o = b.image, t = b.message, u = b.network, A = b.title, C = b.username, w = a.newElement(), g = w.$el, n = w.id, a.addClass(g, 'st-hidden'), h = 'body.st-body-no-scroll {\n  bottom: 0;\n  left: 0;\n  overflow: hidden;\n  position: fixed;\n  right: 0;\n  top: 0;\n}\n#' + n + ' {\n  ' + a.FONT_FAMILY + '\n  ' + a.TRANSITION() + '\n  height: 100%;\n  left: 0;\n  opacity: 1;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 99999;\n}\n#' + n + '.st-hidden {\n  opacity: 0;\n  top: 100%;\n}\n#' + n + ' .st-backdrop {\n  background: rgba(0, 0, 0, 0.8);\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: 10;\n}\n#' + n + ' .st-btns {\n  bottom: 56px;\n  left: 0;\n  margin: 100px auto 0;\n  max-width: 90%;\n  position: absolute;\n  right: 0;\n  text-align: center;\n  top: 10px;\n  width: 500px;\n  z-index: 20;\n  overflow-y: auto;\n}\n#' + n + ' .st-logo {\n  background: #4c4c4c;\n  bottom: 0;\n  cursor: pointer;\n  padding: 20px;\n  position: absolute;\n  text-align: center;\n  width: 100%;\n  z-index: 30;\n}\n#' + n + ' .st-close {\n  ' + a.BORDER_RADIUS(28) + '\n  ' + a.BORDER_BOX + '\n  background: #999;\n  bottom: 28px;\n  color: #fff;\n  cursor: pointer;\n  font-size: 36px;\n  height: 56px;\n  line-height: 28px;\n  padding: 10px;\n  position: absolute;\n  right: 14px;\n  width: 56px;\n  z-index: 40;\n}\n#' + n + ' .st-btn {\n  ' + a.BORDER_RADIUS(4) + '\n  ' + a.BORDER_BOX + '\n  ' + a.TRANSITION() + '\n  color: white;\n  cursor: pointer;\n  display: inline-block;\n  font-size: 12px;\n  font-weight: 400;\n  height: 48px;\n  line-height: 30px;\n  margin: 4px;\n  opacity: 1;\n  overflow: hidden;\n  padding: 8px 12px;\n  position: relative;\n  text-align: left;\n  top: 0;\n  vertical-align: top;\n  width: 148px;\n}\n#' + n + ' .st-btn::before {\n  ' + a.BORDER_RADIUS(4) + '\n  ' + a.TRANSITION() + '\n  background: #fff;\n  content: \'\';\n  height: 100%;\n  left: 0;\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n#' + n + ' .st-btn:hover::before {\n  opacity: .2;\n}\n#' + n + ' .st-btn > svg {\n  display: inline-block;\n  height: 20px;\n  margin-top: 6px;\n  vertical-align: top;\n  width: 20px;\n}\n#' + n + ' .st-btn > img {\n  display: inline-block;\n  height: 20px;\n  margin-top: 6px;\n  vertical-align: top;\n  width: 20px;\n}\n#' + n + ' .st-btn > span {\n  display: inline-block;\n  letter-spacing: 0.5px;\n  text-align: center;\n  vertical-align: top;\n  width: 96px;\n}\n@media(max-width: 1200px) {\n  #' + n + ' .st-btns {\n    margin-top: 50px;\n  }\n}\n@media(max-width: 800px) {\n  #' + n + ' .st-btns {\n    margin: 0 auto;\n    max-width: 100%;\n    padding: 32px 10px 50px;\n  }\n  #' + n + ' .st-btn {\n    width: 130px;\n  }\n  #' + n + ' .st-btn > span {\n    width: 74px;\n  }\n}', v = function () {
      var b, c, d, e;
      for (d = a.networks, e = [], b = 0, c = d.length; c > b; b++) u = d[b], e.push('#' + n + ' .st-btn[data-network=\'' + u + '\'] {\n  background-color: ' + a.COLORS[u] + ';\n}');
      return e
    }().join('\n'), j = h, j += v, a.css(j), l = '<div class=\'st-backdrop\'></div>', l += '<div class=\'st-btns\'>', x = a.networks, m = 0, q = x.length; q > m; m++) u = x[m], 'sharethis' !== u && (a.mobile || 'sms' !== u) && (l += '<div class=\'st-btn\' data-network=\'' + u + '\'>\n  ' + a.ICONS[u] + '\n  <span>' + u + '</span>\n</div>');
    for (l += '</div>', z = 'https://s3.amazonaws.com/sharethis-socialab-prod/share-this-logo%402x.png', s = 'https://sharethis.com/platform/share-buttons?' + a.qs({
      utm_source: 'share-buttons',
      utm_medium: 'referral',
      utm_campaign: 'sharethis-button-referral'
    }), l += '<div class="st-logo">\n  <a href="' + s + '" target="_blank">\n    <img height="16" width="96" src="' + z + '">\n  </a>\n</div>', l += '<div class="st-close">\n  ' + a.ICONS.close + '\n</div>', g.innerHTML = l, c = g.querySelector('.st-backdrop'), e = g.querySelectorAll('.st-btn'), f = g.querySelector('.st-close'), a.addEventListener(c, 'click', function () {
      return a.close(g)
    }), a.addEventListener(f, 'click', function () {
      return a.close(g)
    }), a.addEventListener(document, 'keydown', function (b) {
      return a.isEsc(b) ? a.close(g) : void 0
    }), p = 0, r = e.length; r > p; p++) d = e[p], a.addEventListener(d, 'click', function () {
      return a.close(g), a.share({
        description: k,
        image: o,
        network: this.getAttribute('data-network'),
        share_url: y,
        title: A,
        url: B,
        username: C
      })
    });
    return setTimeout(function () {
      return a.removeClass(g, 'st-hidden'), a.addClass(document.body, 'st-body-no-scroll')
    }, 10)
  }
}.call(this), function () {
  var a;
  a = window.__sharethis__, a.loader['share-wechat-mobile'] = function (b) {
    var c, d, e, f, g, h, i, j, k, l, m, n;
    return null == b && (b = {}), n = b.url, l = a.newElement(), f = l.$el, j = l.id, a.addClass(f, 'st-hidden'), k = 'body.st-body-no-scroll {\n  bottom: 0;\n  left: 0;\n  overflow: hidden;\n  position: fixed;\n  right: 0;\n  top: 0;\n}\n#' + j + ' {\n  ' + a.TRANSITION() + '\n  ' + a.FONT_FAMILY + '\n  bottom: 0;\n  left: 0;\n  opacity: 1;\n  overflow-y: auto;\n  padding-bottom: 100px;\n  position: fixed;\n  right: 0;\n  text-align: center;\n  top: 0;\n  width: 100%;\n  z-index: 99999;\n}\n\n#' + j + '.st-hidden {\n  opacity: 0;\n  top: 100%;\n}\n#' + j + ' .st-backdrop {\n  background: rgba(0, 0, 0, 0.8);\n  bottom: 0;\n  left: 0;\n  position: fixed;\n  right: 0;\n  top: 0;\n  z-index: 10;\n}\n#' + j + ' .st-wechat {\n  margin-top: 120px;\n  height: 64px;\n  width: 220px;\n  display: inline-block;\n  position: relative;\n  z-index: 10;\n}\n#' + j + ' .st-form {\n  margin: 20px auto;\n  max-width: 80%;\n  position: relative;\n  width: 320px;\n  z-index: 20;\n}\n#' + j + ' .st-form > input {\n  ' + a.BORDER_BOX + '\n  ' + a.BORDER_RADIUS(4) + '\n  background-color: #fff;\n  border: 0;\n  color: #333;\n  display: block;\n  font-size: 16px;\n  height: 48px;\n  margin-bottom: 15px;\n  padding: 12px;\n  width: 100%;\n}\n#' + j + ' .st-form > textarea {\n  ' + a.BORDER_BOX + '\n  ' + a.BORDER_RADIUS(4) + '\n  background-color: #fff;\n  border: 0;\n  color: #333;\n  display: block;\n  font-size: 16px;\n  height: 96px;\n  margin-bottom: 15px;\n  padding: 12px;\n  width: 100%;\n}\n#' + j + ' .st-copy {\n  ' + a.BORDER_RADIUS(2) + '\n  background: #4EC034;\n  color: #fff;\n  cursor: pointer;\n  display: inline-block;\n  height: 36px;\n  letter-spacing: .5px;\n  line-height: 36px;\n  margin: 15px auto 0 auto;\n  padding: 0 10px;\n  position: relative;\n  text-align: center;\n  min-width: 120px;\n  z-index: 20;\n}\n#' + j + ' .st-open {\n  ' + a.BORDER_RADIUS(2) + '\n  background: #4EC034;\n  color: #fff;\n  cursor: pointer;\n  display: inline-block;\n  height: 36px;\n  letter-spacing: .5px;\n  line-height: 36px;\n  margin: 15px auto 0 auto;\n  padding: 0 10px;\n  position: relative;\n  text-align: center;\n  min-width: 120px;\n  z-index: 20;\n}\n#' + j + ' .st-logo {\n  background: #4c4c4c;\n  bottom: 0;\n  padding: 20px;\n  position: fixed;\n  text-align: center;\n  width: 100%;\n  z-index: 30;\n}\n#' + j + ' .st-close {\n  ' + a.BORDER_RADIUS(28) + '\n  ' + a.BORDER_BOX + '\n  background: #999;\n  bottom: 28px;\n  color: #fff;\n  cursor: pointer;\n  font-size: 36px;\n  height: 56px;\n  line-height: 28px;\n  padding: 10px;\n  position: fixed;\n  right: 14px;\n  width: 56px;\n  z-index: 40;\n}', a.css(k), i = '<div class=\'st-backdrop\'></div>', i += '<div class=\'st-wechat\'>' + a.ICONS.wechatIcon + '</div>', i += '<div class=\'st-form\'>\n  <input class="st-url" type="text" value="" />\n</div>', i += '<div class="st-copy">Copy URL</div>\n<div class="st-open" style="display: none">Open WeChat</div>', m = 'https://s3.amazonaws.com/sharethis-socialab-prod/share-this-logo%402x.png', i += '<div class="st-logo">\n  <img height="16" width="96" src="' + m + '">\n</div>', i += '<div class="st-close">\n  ' + a.ICONS.close + '\n</div>', f.innerHTML = i, g = f.querySelector('.st-form > input'), c = f.querySelector('.st-backdrop'), d = f.querySelector('.st-close'), e = f.querySelector('.st-copy'), h = f.querySelector('.st-open'), g.value = n, a.addEventListener(c, 'click', function () {
      return a.close(f)
    }), a.addEventListener(d, 'click', function () {
      return a.close(f)
    }), a.addEventListener(e, 'click', function () {
      var a;
      return g.setSelectionRange(0, g.value.length), (a = document.execCommand('copy')) ? (e.innerText = 'Copied!', e.style.background = '#f9a825', h.style.display = 'inline-block') : void 0
    }), a.addEventListener(h, 'click', function () {
      var b;
      return b = function (b) {
        return h.innerText = b, h.style.background = '#c62828', a.__share_email_timeout && clearTimeout(a.__share_email_timeout), a.__share_email_timeout = setTimeout(function () {
          return h.innerText = 'Open', h.style.background = '#00c853'
        }, 2e3)
      }, h.innerText = 'Opening...', h.style.background = '#f9a825', n = 'weixin://', a.open(n)
    }), a.addEventListener(document, 'keydown', function (b) {
      return a.isEsc(b) ? a.close(f) : void 0
    }), setTimeout(function () {
      return a.removeClass(f, 'st-hidden'), a.addClass(document.body, 'st-body-no-scroll')
    }, 10)
  }
}.call(this), function () {
  var a;
  a = window.__sharethis__, a.REACTIONS = {
    slight_smile: {
      icon: '<circle cx="32" cy="32" r="30" fill="#ffdd67"/><g fill="#664e27"><circle cx="20.5" cy="26.6" r="5"/><circle cx="43.5" cy="26.6" r="5"/><path d="m44.6 40.3c-8.1 5.7-17.1 5.6-25.2 0-1-.7-1.8.5-1.2 1.6 2.5 4 7.4 7.7 13.8 7.7s11.3-3.6 13.8-7.7c.6-1.1-.2-2.3-1.2-1.6"/></g>',
      label: 'like'
    },
    heart_eyes: {
      icon: '<path d="M62,32c0,16.6-13.4,30-30,30C15.4,62,2,48.6,2,32C2,15.4,15.4,2,32,2C48.6,2,62,15.4,62,32z" fill="#ffdd67"/><g fill="#f46767"><path d="m61.8 13.2c-.5-2.7-2-4.9-4.5-5.6-2.7-.7-5.1.3-7.4 2.7-1.3-3.6-3.3-6.3-6.5-7.7-3.2-1.4-6.4-.4-8.4 2.1-2.1 2.6-2.9 6.7-.7 12 2.1 5 11.4 15 11.7 15.3.4-.2 10.8-6.7 13.3-9.9 2.5-3.1 3-6.2 2.5-8.9"/><path d="m29 4.7c-2-2.5-5.2-3.5-8.4-2.1-3.2 1.4-5.2 4.1-6.5 7.7-2.4-2.3-4.8-3.4-7.5-2.6-2.4.7-4 2.9-4.5 5.6-.5 2.6.1 5.8 2.5 8.9 2.6 3.1 13 9.6 13.4 9.8.3-.3 9.6-10.3 11.7-15.3 2.2-5.3 1.4-9.3-.7-12"/></g><path d="m49 38.1c0-.8-.5-1.8-1.8-2.1-3.5-.7-8.6-1.3-15.2-1.3-6.6 0-11.7.7-15.2 1.3-1.4.3-1.8 1.3-1.8 2.1 0 7.3 5.6 14.6 17 14.6 11.4-.1 17-7.4 17-14.6" fill="#664e27"/><path d="m44.7 38.3c-2.2-.4-6.8-1-12.7-1-5.9 0-10.5.6-12.7 1-1.3.2-1.4.7-1.3 1.5.1.4.1 1 .3 1.6.1.6.3.9 1.3.8 1.9-.2 23-.2 24.9 0 1 .1 1.1-.2 1.3-.8.1-.6.2-1.1.3-1.6 0-.8-.1-1.3-1.4-1.5" fill="#fff"/>',
      label: 'love'
    },
    laughing: {
      icon: '<circle cx="32" cy="32" r="30" fill="#ffdd67"/><g fill="#664e27"><path d="m51.7 19.4c.6.3.3 1-.2 1.1-2.7.4-5.5.9-8.3 2.4 4 .7 7.2 2.7 9 4.8.4.5-.1 1.1-.5 1-4.8-1.7-9.7-2.7-15.8-2-.5 0-.9-.2-.8-.7 1.6-7.3 10.9-10 16.6-6.6"/><path d="m12.3 19.4c-.6.3-.3 1 .2 1.1 2.7.4 5.5.9 8.3 2.4-4 .7-7.2 2.7-9 4.8-.4.5.1 1.1.5 1 4.8-1.7 9.7-2.7 15.8-2 .5 0 .9-.2.8-.7-1.6-7.3-10.9-10-16.6-6.6"/><path d="m49.7 34.4c-.4-.5-1.1-.4-1.9-.4-15.8 0-15.8 0-31.6 0-.8 0-1.5-.1-1.9.4-3.9 5 .7 19.6 17.7 19.6 17 0 21.6-14.6 17.7-19.6"/></g><path d="m33.8 41.7c-.6 0-1.5.5-1.1 2 .2.7 1.2 1.6 1.2 2.8 0 2.4-3.8 2.4-3.8 0 0-1.2 1-2 1.2-2.8.3-1.4-.6-2-1.1-2-1.6 0-4.1 1.7-4.1 4.6 0 3.2 2.7 5.8 6 5.8s6-2.6 6-5.8c-.1-2.8-2.7-4.5-4.3-4.6" fill="#4c3526"/><path d="m24.3 50.7c2.2 1 4.8 1.5 7.7 1.5s5.5-.6 7.7-1.5c-2.1-1.1-4.7-1.7-7.7-1.7s-5.6.6-7.7 1.7" fill="#ff717f"/><path d="m47 36c-15 0-15 0-29.9 0-2.1 0-2.1 4-.1 4 10.4 0 19.6 0 30 0 2 0 2-4 0-4" fill="#fff"/>',
      label: 'lol'
    },
    astonished: {
      icon: '<circle cx="32" cy="32" r="30" fill="#ffdd67"/><circle cx="19" cy="29" r="11" fill="#fff"/><path d="m24 29c0 2.8-2.2 5-5 5-2.8 0-5-2.2-5-5s2.2-5 5-5c2.8 0 5 2.2 5 5" fill="#664e27"/><path d="m56 29c0 6.1-4.9 11-11 11-6.1 0-11-4.9-11-11 0-6.1 4.9-11 11-11 6.1 0 11 4.9 11 11" fill="#fff"/><path d="m50 29c0 2.8-2.2 5-5 5-2.8 0-5-2.2-5-5s2.2-5 5-5c2.8 0 5 2.2 5 5" fill="#664e27"/><g fill="#917524"><path d="m50.2 15.8c-3.2-2.7-7.5-3.9-11.7-3.1-.6.1-1.1-2-.4-2.2 4.8-.9 9.8.5 13.5 3.6.6.5-1 2.1-1.4 1.7"/><path d="m25.5 12.5c-4.2-.7-8.5.4-11.7 3.1-.4.4-2-1.2-1.4-1.7 3.7-3.2 8.7-4.5 13.5-3.6.7.2.2 2.3-.4 2.2"/></g><circle cx="32" cy="49" r="9" fill="#664e27"/><path d="m26 46c1.2-2.4 3.4-4 6-4 2.6 0 4.8 1.6 6 4h-12" fill="#fff"/>',
      label: 'wow'
    },
    sob: {
      icon: '<g fill="#65b1ef"><ellipse cx="17.5" cy="59.9" rx="12.5" ry="1.5"/><ellipse cx="44" cy="60.2" rx="18" ry="1.8"/></g><circle cx="32" cy="32" r="30" fill="#ffdd67"/><path d="m44.7 46c-1.4-3.6-4.8-6-12.7-6-8 0-11.3 2.4-12.7 6-.7 1.9.3 5 .3 5 1.3 3.9 1.1 5 12.4 5 11.3 0 11.1-1.1 12.4-5 0 0 1.1-3.1.3-5" fill="#664e27"/><path d="m41 45c.1-.3 0-.6-.2-.8 0 0-2-2.2-8.8-2.2-6.8 0-8.8 2.2-8.8 2.2-.2.1-.2.5-.2.8l.2.6c.1.3.3.5.5.5h16.6c.2 0 .5-.2.5-.5l.2-.6" fill="#fff"/><g fill="#65b1ef"><path d="m44.5 60.5c2.3 0 4.6 0 6.8 0 8.2-9.9-1.5-20 .9-29.8-2.3 0-4.6 2.5-6.8 2.5-3.2 9.5 7.3 17.4-.9 27.3"/><path d="m19.5 60.5c-2.3 0-4.6 0-6.8 0-8.2-9.9 1.5-20-.9-29.8 2.3 0 4.6 2.5 6.8 2.5 3.2 9.5-7.3 17.4.9 27.3"/></g><g fill="#917524"><path d="m40.7 18.3c3 3 7.2 4.5 11.4 4.1.6-.1.9 2.1.2 2.2-4.9.4-9.7-1.3-13.1-4.8-.6-.5 1.1-1.9 1.5-1.5"/><path d="m12 22.4c4.2.4 8.4-1.1 11.4-4.1.4-.4 2.1 1 1.6 1.5-3.4 3.5-8.3 5.2-13.1 4.8-.9 0-.5-2.2.1-2.2"/></g><g fill="#664e27"><path d="m35.9 30.3c4.2 8 12.7 8 16.9 0 .2-.4-.3-.6-1-1-4.2 3.3-11.1 3-14.9 0-.6.4-1.2.6-1 1"/><path d="m11.2 30.3c4.2 8 12.7 8 16.9 0 .2-.4-.3-.6-1-1-4.2 3.3-11.1 3-14.9 0-.7.4-1.2.6-1 1"/></g>',
      label: 'sad'
    },
    rage: {
      icon: '<circle cx="32" cy="32" r="30" fill="#ef5350"/><path d="m41 49.7c-5.8-4.8-12.2-4.8-18 0-.7.6-1.3-.4-.8-1.3 1.8-3.4 5.3-6.5 9.8-6.5s8.1 3.1 9.8 6.5c.5.8-.1 1.8-.8 1.3" fill="#302424"/><path d="m10.2 24.9c-1.5 4.7.6 10 5.3 12.1 4.6 2.2 10 .5 12.7-3.7l-6.9-7.7-11.1-.7" fill="#fff"/><g fill="#302424"><path d="m14.2 25.8c-1.4 2.9-.1 6.4 2.8 7.7 2.9 1.4 6.4.1 7.7-2.8 1-1.9-9.6-6.8-10.5-4.9"/><path d="m10.2 24.9c1.6-1 3.5-1.5 5.4-1.5 1.9 0 3.8.5 5.6 1.3 1.7.8 3.3 2 4.6 3.4 1.2 1.5 2.2 3.2 2.4 5.1-1.3-1.3-2.6-2.4-4-3.4-1.4-1-2.8-1.8-4.2-2.4-1.5-.7-3-1.2-4.6-1.7-1.8-.3-3.4-.6-5.2-.8"/></g><path d="m53.8 24.9c1.5 4.7-.6 10-5.3 12.1-4.6 2.2-10 .5-12.7-3.7l6.9-7.7 11.1-.7" fill="#fff"/><g fill="#302424"><path d="m49.8 25.8c1.4 2.9.1 6.4-2.8 7.7-2.9 1.4-6.4.1-7.7-2.8-1-1.9 9.6-6.8 10.5-4.9"/><path d="m53.8 24.9c-1.6-1-3.5-1.5-5.4-1.5-1.9 0-3.8.5-5.6 1.3-1.7.8-3.3 2-4.6 3.4-1.2 1.5-2.2 3.2-2.4 5.1 1.3-1.3 2.6-2.4 4-3.4 1.4-1 2.8-1.8 4.2-2.4 1.5-.7 3-1.2 4.6-1.7 1.8-.3 3.4-.6 5.2-.8"/></g>',
      label: 'angry'
    }
  }
}.call(this), function () {
  var a, b, c, d, e, f, g, h, i, j, k = [].indexOf || function (a) {
    for (var b = 0, c = this.length; c > b; b++) if (b in this && this[b] === a) return b;
    return -1
  };
  if (j = window.__sharethis__, !j.loaded) {
    for (j.loaded = !0, h = document.getElementsByTagName('script') || [], a = 0, b = h.length; b > a; a++) g = h[a], i = g.getAttribute('src'), /\/js\/sharethis.js/.test(i) && (j.src = i, j.property = null != (c = /property=([a-zA-Z0-9]+)/.exec(i)) ? c[1] : void 0, j.product = null != (d = /product=([a-zA-Z0-9-]+)/.exec(i)) ? d[1] : void 0, j.source = null != (e = /source=([a-zA-Z0-9-]+)/.exec(i)) ? e[1] : void 0);
    j.href = document.location.href, null == j.source && (j.source = 'sharethis.js'), null == j.property && (j.property = 'anonymous'), null == j.product && (j.product = 'unknown'), f = j.product, k.call(j.PRODUCTS, f) < 0 && (j.product = 'unknown'), j.initialize = function () {
      return j.init = function (a) {
        return j.config = a, window.__sharethis__docReady(function () {
          var b, c, d, e, f;
          for ('function' == typeof window.onShareThisLoaded && window.onShareThisLoaded(), e = j.PRODUCTS, f = [], b = 0, c = e.length; c > b; b++) d = e[b], f.push(j.load(d, a[d]));
          return f
        })
      }, j.config ? j.init(j.config) : 'anonymous' !== j.property ? j.js('https://buttons-config.sharethis.com/js/' + j.property + '.js') : setTimeout(function () {
        return j.init({})
      }, 10)
    }, j.initialize()
  }
}.call(this);
var __stdos__ = __stdos__ || {}, tpcCookiesEnableCheckingDone = !1, tpcCookiesEnabledStatus = !0;
__stdos__.cookie = {
  setCookie: function (a, b, c) {
    var f, g, h, i, j, k, l, m, n, o, p,
      d = -1 != navigator.userAgent.indexOf('Safari') && -1 == navigator.userAgent.indexOf('Chrome'),
      e = -1 != navigator.userAgent.indexOf('MSIE');
    if (d || e) {
      f = c ? 60 * 60 * 24 * c : 0, g = document.createElement('div'), g.setAttribute('id', a), g.setAttribute('type', 'hidden'), document.body.appendChild(g), h = document.getElementById(a), i = document.createElement('form');
      try {
        j = document.createElement('<iframe name="' + a + '" ></iframe>')
      } catch (a) {
        j = document.createElement('iframe')
      }
      j.name = a, j.src = 'javascript:false', j.style.display = 'none', h.appendChild(j), i.action = 'https://sharethis.com/account/setCookie.php', i.method = 'POST', k = document.createElement('input'), k.setAttribute('type', 'hidden'), k.setAttribute('name', 'name'), k.setAttribute('value', a), i.appendChild(k), l = document.createElement('input'), l.setAttribute('type', 'hidden'), l.setAttribute('name', 'value'), l.setAttribute('value', b), i.appendChild(l), m = document.createElement('input'), m.setAttribute('type', 'hidden'), m.setAttribute('name', 'time'), m.setAttribute('value', f), i.appendChild(m), i.target = a, h.appendChild(i), i.submit()
    } else c ? (n = new Date, n.setTime(n.getTime() + 1e3 * 60 * 60 * 24 * c), o = '; expires=' + n.toGMTString()) : o = '', p = a + '=' + escape(b) + o, p += '; domain=' + escape('.sharethis.com') + ';path=/', document.cookie = p
  }, getCookie: function (a) {
    var b = document.cookie.match('(^|;) ?' + a + '=([^;]*)(;|$)');
    return !!b && unescape(b[2])
  }, setFpcCookie: function (a, b) {
    var h, i, c = new Date, d = c.getFullYear(), e = c.getMonth() + 9, f = c.getDate(), g = a + '=' + escape(b);
    d && (h = new Date(d, e, f), g += '; expires=' + h.toGMTString()), i = __stdos__.cookie.getDomain(), g += '; domain=' + escape(i) + ';path=/', document.cookie = g
  }, getFpcCookie: function (a) {
    var b = document.cookie.match('(^|;) ?' + a + '=([^;]*)(;|$)');
    return !!b && unescape(b[2])
  }, getDomain: function () {
    var a = document.domain.split(/\./), b = '';
    return a.length > 1 && (b = '.' + a[a.length - 2] + '.' + a[a.length - 1]), b
  }
}, __stdos__.fpc = {
  cookieName: '__unam', cookieValue: '', createFpc: function () {
    var a, b, c, d, e, f, g, h;
    if (__stdos__.fpc.setOptout(), !document.domain || document.domain.search(/\.gov/) > 0) return !1;
    if (a = __stdos__.cookie.getFpcCookie(__stdos__.fpc.cookieName), 0 == a) {
      if (b = Math.round(2147483647 * Math.random()), b = b.toString(16), c = (new Date).getTime(), c = c.toString(16), d = window.location.hostname.split(/\./)[1], !d) return !1;
      e = '', e = __stdos__.fpc.determineHash(d) + '-' + c + '-' + b + '-1', a = e
    } else f = a, g = f.split(/\-/), 4 == g.length && (h = Number(g[3]), h++, a = g[0] + '-' + g[1] + '-' + g[2] + '-' + h);
    return __stdos__.cookie.setFpcCookie(__stdos__.fpc.cookieName, a), __stdos__.fpc.cookieValue = a, a
  }, setOptout: function () {
    var a = __stdos__.cookie.getCookie('st_optout');
    __stdos__.data.set('st_optout', a, 'pageInfo')
  }, determineHash: function (a) {
    var b, c, d, e;
    for (b = 0, c = 0, d = a.length - 1; d >= 0; d--) e = parseInt(a.charCodeAt(d)), b = (268435455 & b << 8) + e + (e << 12), 0 != (c = 161119850 & b) && (b ^= c >> 20);
    return b.toString(16)
  }
}, 'undefined' == typeof __stdos__.data && (__stdos__.data = {
  bInit: !1, pageInfo: {}, resetPageData: function () {
    __stdos__.data.pageInfo.fpc = '', __stdos__.data.pageInfo.sessionID = '', __stdos__.data.pageInfo.hostname = '', __stdos__.data.pageInfo.location = '', __stdos__.data.pageInfo.product = 'DOS2', __stdos__.data.pageInfo.url = '', __stdos__.data.pageInfo.sharURL = '', __stdos__.data.pageInfo.buttonType = '', __stdos__.data.pageInfo.destination = '', __stdos__.data.pageInfo.source = ''
  }, init: function () {
    if (!__stdos__.data.bInit) {
      __stdos__.data.bInit = !0, __stdos__.data.resetPageData();
      var a = document.location.href, b = '', c = '';
      __stdos__.data.set('url', a, 'pageInfo'), __stdos__.fpc.createFpc(), __stdos__.data.set('fpc', __stdos__.fpc.cookieValue, 'pageInfo'), __stdos__.data.set('title', document.title, 'pageInfo'), b = (new Date).getTime().toString(), c = Number(Math.random().toPrecision(5).toString().substr(2)).toString(), __stdos__.data.set('sessionID', b + '.' + c, 'pageInfo'), __stdos__.data.validateRefDomain(), __stdos__.data.set('hostname', document.location.hostname, 'pageInfo'), __stdos__.data.set('location', document.location.pathname, 'pageInfo')
    }
  }, validateRefDomain: function () {
    var a = __stdos__.data.get('refDomain', 'pageInfo');
    a || this.setRefDomain(window.document.referrer)
  }, setRefDomain: function (a) {
    var b, c;
    0 != a.length && (b = a.replace('http://', '').replace('https://', '').split('/'), b.length > 0 && (a = 'undefined' != typeof b[0] ? b[0] : a, c = 'undefined' != typeof b[1] ? b[1] : '', __stdos__.data.set('refQuery', c, 'pageInfo'), __stdos__.data.set('refDomain', a, 'pageInfo')))
  }, set: function (a, b, c) {
    if ('number' == typeof b || 'boolean' == typeof b) __stdos__.data[c][a] = b; else if ('undefined' == typeof b || null == b) ; else if (__stdos__.data[c][a] = encodeURIComponent(decodeURIComponent(unescape(b.replace(/<[^<>]*>/gi, ' ')).replace(/%/gi, '%25'))), 'url' == a || 'location' == a || 'image' == a) try {
      __stdos__.data[c][a] = encodeURIComponent(decodeURIComponent(decodeURI(b.replace(/<[^<>]*>/gi, ' ')).replace(/%/gi, '%25')))
    } catch (d) {
      __stdos__.data[c][a] = encodeURIComponent(decodeURIComponent(unescape(b.replace(/<[^<>]*>/gi, ' ')).replace(/%/gi, '%25')))
    }
  }, get: function (a, b) {
    try {
      return !(!__stdos__.data[b] || !__stdos__.data[b][a]) && decodeURIComponent(__stdos__.data[b][a])
    } catch (a) {
      return !1
    }
  }, unset: function (a, b) {
    __stdos__.data[b] && 'undefined' != typeof __stdos__.data[b][a] && delete __stdos__.data[b][a]
  }, bindEvent: function (a, b, c) {
    a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent && a.attachEvent('on' + b, c)
  }, debug: function (a, b) {
    var c, d, e, f, g;
    __stdos__.data.init(), d = __stdos__.data.pageInfo, e = '';
    for (c in d) e += c + '=' + d[c] + '&';
    e = e.substring(0, e.length - 1), f = 'https://l.sharethis.com/', f += a, f += '?event=' + b, f += '&' + e, g = new Image(1, 1), g.src = f, g.onload = function () {
    }
  }, parseCookie: function (a, b) {
    b = '; ' + b;
    var c = b.split('; ' + a + '=');
    return 2 === c.length ? c.pop().split(';').shift() : null
  }, setConsent: function (a) {
    for (var b in a) __stdos__.data.set(b, a[b], 'pageInfo'), window.__sharethis__[b] = a[b]
  }, getEUConsent: function (a) {
    var c, d, e, b = __stdos__.data.parseCookie('euconsent', document.cookie);
    null !== b ? (__stdos__.data.setConsent({
      consentData: b,
      consentDomain: document.location.hostname
    }), a()) : (c = document.createElement('iframe'), d = 'https://c.sharethis.mgr.consensu.org/v1.0/cmp/portal.html', c.setAttribute('src', d), c.setAttribute('id', 'st_gdpr_iframe'), c.style.width = '0px', c.style.height = '0px', c.style.position = 'absolute', c.style.left = '-5000px', e = setInterval(function () {
      null != document.body && (clearInterval(e), document.body.appendChild(c))
    }, 10), __stdos__.data.bindEvent(window, 'message', function (b) {
      var d, c = /^(http|https):\/\/c.sharethis.mgr.consensu.org/;
      c.test(b.origin) && 'sharethis.mgr.consensu.org' === b.data.domain && 'EU_CONSENT_COOKIE' === b.data.event && (d = b.data.value, null != d && '' !== d && __stdos__.data.setConsent({
        consentData: d,
        consentDomain: '.consensu.org'
      }), a())
    }))
  }
}, __stdos__.data.resetPageData()), __stdos__.logger = {
  loggerUrl: 'https://l.sharethis.com/',
  version: 'st_sop.js',
  lang: 'en',
  constructParamString: function () {
    var a, b = __stdos__.data.pageInfo, c = '';
    for (a in b) c += a + '=' + b[a] + '&';
    return c.substring(0, c.length - 1)
  },
  log: function (a, b, c) {
    __stdos__.data.set('ts' + (new Date).getTime(), '', 'pageInfo'), b = __stdos__.logger.loggerUrl, __stdos__.data.getEUConsent(function () {
      var e, g,
        d = b + f + '?event=' + f + '&version=' + __stdos__.logger.version + '&lang=' + __stdos__.logger.lang + '&' + __stdos__.logger.constructParamString() + '&sop=true';
      try {
        e = new XMLHttpRequest, e.open('GET', d, !0), e.withCredentials = !0, e.onreadystatechange = function () {
          var a, b;
          if (this.readyState == this.DONE) try {
            if (a = JSON.parse(e.responseText), 'undefined' != typeof a && (__stdos__.data.set('stid', a.stid, 'pageInfo'), 'true' === a.status)) {
              if (b = __stdos__.data.get('product', 'pageInfo'), 'ecommerce' === b || 'privy-share-buttons' === b || 'ga' === b) return;
              window.__sharethis__.loadPixel()
            }
            c ? c() : null
          } catch (a) {
          }
        }, e.send()
      } catch (f) {
        g = new Image(1, 1), g.src = d, g.onload = function () {
        }, c ? c() : null
      }
    })
  }
}, function () {
  var a = window.__sharethis__, b = 'undefined' != typeof stlib && null !== stlib && stlib.onscriptload;
  'genesis-media' == a.product ? a.send('https://l.sharethis.com/gmedia', {url: a.href}) : b || __stdos__.onscriptload || -1 != document.URL.indexOf('edge.sharethis.com') || (__stdos__.data.init(), __stdos__.data.set('publisher', a.property, 'pageInfo'), __stdos__.data.set('product', a.product, 'pageInfo'), __stdos__.data.set('source', a.source, 'pageInfo'), __stdos__.onscriptload = !0, __stdos__.logger.log('pview'))
}(), function () {
  var a;
  a = window.__sharethis__, a.loader['gdpr-compliance-tool'] = function (b) {
    var c, d, e, f, g, h, i, j;
    return null == b && (b = {}), b.enabled && !window.__cmp ? (c = b.color, e = b.display, f = b.publisher_name, g = b.publisher_purposes, h = b.scope, null == c && (c = '#2e7d32'), null == f && (f = ''), null == g && (g = []), d = [], a.addEventListener('message', function (a) {
      return window.__cmp.receiveMessage(a)
    }), window.__cmp = function (a, b, c) {
      return d.push({command: a, paramter: b, callback: c})
    }, window.__cmp.commandQueue = d, window.__cmp.receiveMessage = function (a) {
      var b;
      return (b = a && a.data && a.data.__cmpCall) ? d.push({
        callId: b.callId,
        command: b.command,
        parameter: b.parameter,
        event: a
      }) : void 0
    }, window.__cmp.config = {
      storeConsentGlobally: 'global' === h,
      publisherName: f,
      publisherPurposeList: g,
      color: c
    }, 'always' === e ? __cmp('showConsentTool') : 'eu' === e && (i = new XMLHttpRequest, j = 'https://c.sharethis.mgr.consensu.org/v1.0/cmp/is_eu', i.open('GET', j), i.responseType = 'json', i.onload = function () {
      return function () {
        var a;
        return (null != (a = i.response) ? a.is_eu : void 0) ? __cmp('showConsentTool') : void 0
      }
    }(this), i.send()), a.js('https://c.sharethis.mgr.consensu.org/v1.0/cmp/cmp.js')) : void 0
  }
}.call(this), function () {
  var a, b, c;
  c = window.__sharethis__, a = {
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
    odnoklassniki: 'https://ok.ru/',
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
  }, c.loader['inline-follow-buttons'] = function (a) {
    var c, d, e, f, g;
    if (null == a && (a = {}), a.enabled) {
      if (!a.id) {
        for (d = document.querySelectorAll('.sharethis-inline-follow-buttons'), g = [], e = 0, f = d.length; f > e; e++) c = d[e], g.push(b(c, a));
        return g
      }
      return (c = document.getElementById(a.id)) ? b(c, a) : void 0
    }
  }, b = function (b, d) {
    var e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J;
    for (g = d.action, h = d.action_enable, i = d.action_pos, j = d.alignment, o = d.fade_in, t = d.id, w = d.language, B = d.networks, C = d.onLoad, D = d.padding, E = d.profiles, F = d.radius, H = d.size, I = d.spacing, J = d.url, k = 'left' === j ? 'right' : 'left', null == g && (g = 'Follow us:'), null == h && (h = !0), null == i && (i = 'top'), null == j && (j = 'left'), null == o && (o = !0), null == w && (w = 'en'), null == B && (B = ['facebook', 'twitter', 'pinterest']), null == D && (D = 10), null == E && (E = {}), null == F && (F = 0), null == H && (H = 40), null == I && (I = 8), null == t && (t = 'st-' + c.uid()), b.setAttribute('id', t), c.addClass(b, 'st-inline-follow-buttons'), c.addClass(b, 'st-#{action_pos}'), o && c.addClass(b, 'st-hidden'), m = '#' + t + ' {\n  ' + c.FONT_FAMILY + ';\n  direction: ltr;\n  display: block;\n  opacity: 1;\n  text-align: ' + j + ';\n  z-index: 94034;\n}\n#' + t + '.st-animated {\n  ' + c.TRANSITION('opacity') + '\n}\n#' + t + ' .st-left {\n  display: inline-block;\n  padding-top: ' + c.px(H / 4) + ';\n  padding-right: 6px;\n}\n#' + t + ' .st-top {\n  padding-bottom: ' + c.px(H / 8) + ';\n}\n#' + t + ' .st-right {\n  display: inline-block;\n  padding-top: ' + c.px(H / 4) + ';\n  padding-left: 4px;\n}\n#' + t + '.st-hidden {\n  opacity: ' + (o ? 0 : 1) + ';\n}\n#' + t + ' .st-btn {\n  ' + c.BORDER_BOX + '\n  ' + c.TRANSITION(['opacity', 'top']) + '\n  ' + c.BORDER_RADIUS(F) + '\n  cursor: pointer;\n  display: inline-block;\n  height: ' + c.px(H) + ';\n  line-height: ' + c.px(H) + ';\n  margin-right: ' + (I ? c.px(I) : 0) + ';\n  padding: 0 ' + c.px(D) + ';\n  position: relative;\n  text-align: center;\n  top: 0;\n  vertical-align: top;\n  white-space: nowrap;\n}\n#' + t + ' .st-btn:last-child {\n  margin-right: 0;\n}\n#' + t + ' .st-btn > svg {\n  height: ' + c.px(H / 2) + ';\n  width: ' + c.px(H / 2) + ';\n  position: relative;\n  top: ' + c.px(H / 4) + ';\n  vertical-align: top; \n}\n#' + t + ' .st-btn > img {\n  height: ' + c.px(H / 2) + ';\n  width: ' + c.px(H / 2) + ';\n  position: relative;\n  top: ' + c.px(H / 4) + ';\n  vertical-align: top;\n}\n#' + t + ' .st-btn > span {\n  ' + c.TRANSITION() + '\n  color: #fff;\n  display: inline-block;\n  font-weight: 500;\n  letter-spacing: 0.5px;\n  min-width: ' + c.px(30 + Math.floor(15 * H / 16)) + ';\n  opacity: 1;\n  padding: 0 6px;\n  position: relative;\n  vertical-align: top;\n}\n#' + t + '.st-justified {\n  display: flex;\n  text-align: center;\n}\n#' + t + '.st-justified .st-btn {\n  ' + c.FLEX + '\n}', q = '#' + t + ' .st-btn:hover {\n  opacity: .8;\n  top: -4px;\n}', A = function () {
      var a, b, d;
      for (d = [], a = 0, b = B.length; b > a; a++) z = B[a], d.push('#' + t + ' .st-btn[data-network=\'' + z + '\'] {\n  background-color: ' + c.COLORS[z] + ';\n}');
      return d
    }().join('\n'), n = m, n += q, n += A, c.css(n), r = '', h && (null != g ? g.length : void 0) > 0 && 'right' !== i && (r += '<div class=\'st-' + i + '\'>\n  <span>' + c.capitalize(g) + '</span>\n</div>'), u = s = 0, x = B.length; x > s; u = ++s) z = B[u], l = ['st-btn'], 0 === u && l.push('st-first'), u === B.length - 1 && l.push('st-last'), r += '<div class=\'' + l.join(' ') + '\' data-network=\'' + z + '\'>\n  ' + c.ICONS[z] + '\n</div>';
    for (h && (null != g ? g.length : void 0) > 0 && 'right' === i && (r += '<div class=\'st-' + i + '\'>\n  <span>' + c.capitalize(g) + '</span>\n</div>'), b.innerHTML = r, f = b.querySelectorAll('.st-btn'), G = function () {
      var a, c, d, e, g, i, k;
      for (d = b.offsetWidth, c = function () {
        var a, b, c, d;
        for (d = h ? 70 : 0, b = 0, c = f.length; c > b; b++) a = f[b], 'none' !== a.style.display && (d += 'justified' === j ? 160 : a.offsetWidth + I);
        return d
      }, e = 0, i = f.length; i > e; e++) a = f[e], a.style.display = 'inline-block';
      for (k = [], u = g = f.length - 1; g >= 0; u = g += -1) a = f[u], c() > d ? k.push(a.style.display = 'none') : k.push(void 0);
      return k
    }, c.addEventListener(window, 'resize', G), p = function (d) {
      return c.addEventListener(d, 'click', function () {
        var e;
        return z = d.getAttribute('data-network'), e = a[z] + (E[z] || ''), 'youtube' === z && E[z] && (e += '?sub_confirmation=1'), 'tumblr' === z && E[z] && (e = a[z].replace('www', E[z])), c.follow({
          follow_url: e,
          network: z,
          url: J || b.getAttribute('data-url')
        }), 'function' == typeof C ? C() : void 0
      })
    }, v = 0, y = f.length; y > v; v++) e = f[v], p(e);
    return G(), o && c.addClass(b, 'st-animated'), o && c.removeClass(b, 'st-hidden'), 'function' == typeof C && C(), {
      $buttons: f,
      $el: b,
      id: t,
      resize: G
    }
  }
}.call(this), function () {
  var a, b, c = [].indexOf || function (a) {
    for (var b = 0, c = this.length; c > b; b++) if (b in this && this[b] === a) return b;
    return -1
  };
  b = window.__sharethis__, b.loader['inline-share-buttons'] = function (c) {
    var d, e, f, g, h, i, j;
    if (null == c && (c = {}), c.enabled) if (c.id) {
      if (d = document.getElementById(c.id)) return a(d, c)
    } else {
      if (!c.container) {
        for (e = document.querySelectorAll('.sharethis-inline-share-buttons'), j = [], f = 0, h = e.length; h > f; f++) d = e[f], j.push(a(d, c));
        return j
      }
      if ('string' == typeof c.container && (c.container = document.getElementById(c.container)), i = b.newElement(c.container), d = i.$el, g = i.id, c.id = g, d) return a(d, c)
    }
  }, a = function (a, d) {
    var e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O,
      P, Q, R, S, T, U, V, W, X, Y, Z, $;
    if (o = d.fade_in, N = d.onLoad, i = d.alignment, q = d.font_size, C = d.language, O = d.padding, P = d.radius, U = d.size, V = d.spacing, u = d.id, B = d.labels, H = d.min_count, M = d.networks, T = d.show_total, Z = d.use_native_counts, S = d.show_mobile_buttons, Y = d.url, X = d.title, v = d.image, n = d.description, $ = d.username, G = d.message, W = d.subject, j = 'left' === i ? 'right' : 'left', null == o && (o = !0), null == i && (i = 'left'), null == q && (q = 12), null == H && (H = 0), null == C && (C = 'en'), null == M && (M = ['facebook', 'twitter', 'pinterest', 'email', 'sharethis']), null == O && (O = 10), null == P && (P = 0), null == S && (S = b.mobile), null == U && (U = 40), null == V && (V = 8), null == W && (W = b.i18n.subjects[C]), null == Z && (Z = !0), null == u && (u = 'st-' + b.uid()), a.setAttribute('id', u), b.addClass(a, ['st-' + i, 'en' !== C ? 'st-lang-' + C : void 0, 'counts' === B || 'cta' === B ? 'st-has-labels' : void 0, o ? 'st-hidden' : void 0, 'st-inline-share-buttons']), l = '#' + u + ' {\n  ' + b.FONT_FAMILY + ';\n  direction: ltr;\n  display: block;\n  opacity: 1;\n  text-align: ' + i + ';\n  z-index: 94034;\n}\n#' + u + '.st-animated {\n  ' + b.TRANSITION('opacity') + '\n}\n#' + u + '.st-hidden {\n  opacity: ' + (o ? 0 : 1) + ';\n}\n#' + u + '.st-hide {\n  display: none;\n}\n#' + u + ' .st-btn {\n  ' + b.BORDER_BOX + '\n  ' + b.TRANSITION(['opacity', 'top']) + '\n  ' + b.BORDER_RADIUS(P) + '\n  cursor: pointer;\n  display: inline-block;\n  font-size: ' + b.px(q) + ';\n  height: ' + b.px(U) + ';\n  line-height: ' + b.px(U) + ';\n  margin-right: ' + (V ? b.px(V) : 0) + ';\n  padding: 0 ' + b.px(O) + ';\n  position: relative;\n  text-align: center;\n  top: 0;\n  vertical-align: top;\n  white-space: nowrap;\n}\n#' + u + ' .st-btn:last-child {\n  margin-right: 0;\n}\n#' + u + ' .st-btn > svg {\n  height: ' + b.px(U / 2) + ';\n  width: ' + b.px(U / 2) + ';\n  position: relative;\n  top: ' + b.px(U / 4) + ';\n  vertical-align: top;\n}\n#' + u + ' .st-btn > img {\n  height: ' + b.px(U / 2) + ';\n  width: ' + b.px(U / 2) + ';\n  position: relative;\n  top: ' + b.px(U / 4) + ';\n  vertical-align: top;\n}\n#' + u + ' .st-btn > span {\n  ' + b.TRANSITION() + '\n  color: #fff;\n  display: inline-block;\n  font-weight: 500;\n  letter-spacing: 0.5px;\n  min-width: ' + b.px(30 + Math.floor(15 * U / 16)) + ';\n  opacity: 1;\n  padding: 0 6px;\n  position: relative;\n  vertical-align: top;\n}\n#' + u + '.st-has-labels .st-btn {\n  min-width: ' + b.px(60 + Math.floor(15 * U / 8)) + ';\n}\n#' + u + '.st-has-labels .st-btn.st-remove-label {\n  min-width: 50px;\n}\n#' + u + '.st-has-labels .st-btn.st-remove-label > span {\n  display: none;\n}\n#' + u + '.st-has-labels .st-btn.st-hide-label > span {\n  display: none;\n}\n#' + u + ' .st-total {\n  color: #555;\n  display: inline-block;\n  font-weight: 500;\n  line-height: ' + b.px(.375 * U) + ';\n  margin-right: 0;\n  max-width: 80px;\n  padding: 4px 8px;\n  text-align: center;\n}\n#' + u + ' .st-total.st-hidden {\n  display: none;\n}\n#' + u + ' .st-total > span {\n  font-size: ' + b.px(.5 * U) + ';\n  line-height: ' + b.px(.55 * U) + ';\n  display: block;\n  padding: 0;\n}\n#' + u + ' .st-total > span.st-shares {\n  font-size: ' + b.px(.3 * U) + ';\n  line-height: ' + b.px(.3 * U) + ';\n}\n#' + u + '.st-justified {\n  display: flex;\n  text-align: center;\n}\n#' + u + '.st-justified .st-btn {\n  ' + b.FLEX + '\n}', r = '#' + u + ' .st-btn:hover {\n  opacity: .8;\n  top: -4px;\n}', I = '#' + u + ' {\n  bottom: 0;', L = function () {
      var a, c, d;
      for (d = [], a = 0, c = M.length; c > a; a++) K = M[a], d.push('#' + u + ' .st-btn[data-network=\'' + K + '\'] {\n  background-color: ' + b.COLORS[K] + ';\n}');
      return d
    }().join('\n'), m = l, b.mobile || (m += r), m += L, b.css(m), s = '', b.removeInvalidButtons(M), !S) for (Q = ['sms'], t = 0, D = Q.length; D > t; t++) K = Q[t], w = M.indexOf(K), w > -1 && M.splice(w, 1);
    for (T && (s += '<div class=\'st-total st-hidden\'>\n  <span class=\'st-label\'></span>\n  <span class=\'st-shares\'>\n    ' + b.capitalize(b.i18n.shares[C]) + '\n  </span>\n</div>'), w = x = 0, E = M.length; E > x; w = ++x) K = M[w], k = ['st-btn'], 0 === w && k.push('st-first'), w === M.length - 1 && k.push('st-last'), z = b.getShareLabel(K, C), 'cta' !== B && (z = ''), A = '<span class=\'st-label\'>' + z + '</span>', s += '<div class=\'' + k.join(' ') + '\' data-network=\'' + K + '\'>\n  ' + b.ICONS[K] + '\n  ' + ('counts' === B || 'cta' === B ? A : '') + '\n</div>';
    for (a.innerHTML = s, f = a.querySelectorAll('.st-btn'), g = a.querySelector('.st-total'), h = a.querySelector('.st-total .st-label'), J = function (a, b) {
      return 'url' === a && (Y = b), 'image' === a ? v = b : void 0
    }, R = function () {
      var c, d, e, h, j, k, l, m;
      for (e = a.offsetWidth, d = function () {
        var a, c, d, e;
        for (e = 0, T && (e += g.offsetWidth), c = 0, d = f.length; d > c; c++) a = f[c], 'none' !== a.style.display && (e += 'justified' === i ? b.hasClass(a, 'st-remove-label') ? 65 : 160 : a.offsetWidth + V);
        return e
      }, h = 0, k = f.length; k > h; h++) c = f[h], c.style.display = 'inline-block', b.removeClass(c, 'st-remove-label');
      for (w = j = f.length - 1; j >= 0; w = j += -1) c = f[w], d() > e && b.addClass(c, 'st-remove-label');
      for (m = [], w = l = f.length - 1; l >= 0; w = l += -1) c = f[w], 'sharethis' !== c.getAttribute('data-network') && (d() > e ? m.push(c.style.display = 'none') : m.push(void 0));
      return m
    }, b.addEventListener(window, 'resize', R), p = function (c) {
      return b.addEventListener(c, 'click', function () {
        return b.share({
          description: n || a.getAttribute('data-description'),
          image: v || a.getAttribute('data-image'),
          message: G || (null != a ? a.getAttribute('data-message') : void 0),
          network: c.getAttribute('data-network'),
          share_url: a.getAttribute('data-short-url'),
          subject: W || a.getAttribute('data-email-subject'),
          title: X || (null != a ? a.getAttribute('data-title') : void 0),
          url: Y || a.getAttribute('data-url'),
          username: $ || a.getAttribute('data-username')
        })
      })
    }, y = 0, F = f.length; F > y; y++) e = f[y], p(e);
    return T || 'counts' === B ? b.loadCounts({
      facebook: c.call(M, 'facebook') >= 0,
      url: Y || a.getAttribute('data-url'),
      use_native_counts: Z
    }, function (c) {
      var d, i, j, k, l, m, n;
      if (T && ((null != (j = c.total) ? j.value : void 0) > H ? (h.innerHTML = (null != (k = c.total) ? k.label : void 0) || '', b.removeClass(g, 'st-hidden')) : b.addClass(g, 'st-hidden')), 'counts' === B) for (d = 0, i = f.length; i > d; d++) e = f[d], K = e.getAttribute('data-network'), l = c[K] || {}, z = l.label, n = l.value, z && n > H ? (null != (m = e.querySelector('.st-label')) && (m.innerHTML = z), b.removeClass(e, 'st-hide-label')) : b.addClass(e, 'st-hide-label');
      return R(), o && b.addClass(a, 'st-animated'), o && b.removeClass(a, 'st-hidden'), 'function' == typeof N ? N() : void 0
    }) : (R(), o && b.addClass(a, 'st-animated'), o && b.removeClass(a, 'st-hidden'), 'function' == typeof N && N()), {
      $buttons: f,
      $el: a,
      id: u,
      modify: J,
      resize: R
    }
  }
}.call(this), function () {
  var a, b, c = [].indexOf || function (a) {
    for (var b = 0, c = this.length; c > b; b++) if (b in this && this[b] === a) return b;
    return -1
  };
  b = window.__sharethis__, b.loader['sticky-share-buttons'] = function (c) {
    var d, e, f, g, h, i, j, k;
    if (null == c && (c = {}), c.enabled) if (c.id) {
      if (d = document.getElementById(c.id)) return a(d, c)
    } else {
      if (!c.container) {
        if (e = document.querySelectorAll('.sharethis-sticky-share-buttons'), 0 === e.length) return j = b.newElement(), d = j.$el, g = j.id, a(d, c);
        for (k = [], f = 0, h = e.length; h > f; f++) d = e[f], k.push(a(d, c));
        return k
      }
      if ('string' == typeof c.container && (c.container = document.getElementById(c.container)), i = b.newElement(c.container), d = i.$el, g = i.id, c.id = g, d) return a(d, c)
    }
  }, a = function (a, d) {
    var e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O,
      P, Q, R, S, T, U, V, W, X, Y, Z, $, _, ab, bb, cb, db, eb, fb, gb;
    if (P = d.onLoad, j = d.alignment, n = d.container, r = d.font_size, s = d.hide_desktop, Q = d.padding, R = d.radius, $ = d.size, ab = d.spacing, w = d.id, D = d.labels, E = d.language, J = d.min_count, O = d.networks, Y = d.show_toggle, Z = d.show_total, K = d.mobile_breakpoint, W = d.show_mobile, _ = d.slide_in, db = d.top, fb = d.use_native_counts, X = d.show_mobile_buttons, eb = d.url, cb = d.title, x = d.image, p = d.description, gb = d.username, I = d.message, bb = d.subject, k = 'left' === j ? 'right' : 'left', null == j && (j = 'left'), null == s && (s = !1), null == D && (D = 'counts'), null == E && (E = 'en'), null == J && (J = 0), null == K && (K = 0), null == O && (O = ['facebook', 'twitter', 'pinterest', 'email', 'sharethis', 'sms']), null == Q && (Q = 12), null == R && (R = 0), null == W && (W = !1), null == Y && (Y = !0), null == Z && (Z = !1), null == $ && ($ = 48), null == _ && (_ = !0), null == bb && (bb = b.i18n.subjects[E]), null == db && (db = 100), null == fb && (fb = !0), null == X && (X = b.mobile), null == w && (w = 'st-' + b.uid()), a.setAttribute('id', w), V = 'right' === j ? b.getScrollbarWidth() : 0, V = 0, b.addClass(a, ['st-sticky-share-buttons', 'st-' + j, Y ? 'st-toggleable' : void 0, 'counts' === D || 'cta' === D ? 'st-has-labels' : void 0, Z ? 'st-show-total' : void 0, _ ? 'st-hidden' : void 0, 'en' !== E ? 'st-lang-' + E : void 0]), m = '#' + w + ' {\n  ' + b.FONT_FAMILY + ';\n  ' + b.TRANSITION() + '\n  backface-visibility: hidden;\n  display: ' + (s ? 'none' : 'block') + ';\n  position: fixed;\n  opacity: 1;\n  text-align: left;\n  top: ' + b.px(db) + ';\n  z-index: 94034;\n}\n#' + w + '.st-' + j + ' {\n  ' + j + ': ' + b.px(V) + ';\n}\n#' + w + '.st-hidden.st-' + j + ' {\n  ' + j + ': -' + b.px($) + ';\n}\n#' + w + '.st-hidden {\n  width: ' + b.px(2 * $) + ';\n}\n#' + w + ' > div {\n  clear: ' + j + ';\n  float: ' + j + ';\n}\n#' + w + ' .st-btn {\n  ' + b.BORDER_BOX + '\n  ' + b.TRANSITION() + '\n  cursor: pointer;\n  display: inline-block;\n  font-size: ' + b.px(r) + ';\n  height: ' + b.px($) + ';\n  line-height: ' + b.px($ / 2) + ';\n  margin-bottom: ' + (ab ? b.px(ab) : 0) + ';\n  opacity: 1;\n  overflow: hidden;\n  padding: ' + b.px(Q) + ';\n  position: relative;\n  text-align: left;\n  top: 0;\n  vertical-align: top;\n  white-space: nowrap;\n  width: ' + b.px($) + ';\n}\n#' + w + ' .st-btn.st-first {\n  border-top-' + k + '-radius: ' + b.px(R) + ';\n}\n#' + w + ' .st-btn.st-last {\n  border-bottom-' + k + '-radius: ' + b.px(R) + ';\n}\n#' + w + ' .st-btn > svg {\n  ' + b.TRANSITION() + '\n  height: ' + b.px($ / 2) + ';\n  margin-left: 0;\n  vertical-align: top;\n  width: ' + b.px($ / 2) + ';\n}\n#' + w + ' .st-btn > img {\n  ' + b.TRANSITION() + '\n  height: ' + b.px($ / 2) + ';\n  margin-left: 0;\n  vertical-align: top;\n  width: ' + b.px($ / 2) + ';\n}\n#' + w + ' .st-btn > span {\n  ' + b.TRANSITION() + '\n  color: #fff;\n  display: inline-block;\n  font-weight: 500;\n  left: -35px;\n  letter-spacing: 0.5px;\n  opacity: 0;\n  padding: 0 6px;\n  position: relative;\n  vertical-align: top;\n  filter: alpha(opacity=0);\n}\n#' + w + ' .st-btn.st-hide-label > span {\n  display: none !important;\n}\n#' + w + ' .st-total {\n  ' + b.TRANSITION() + '\n  background: #fff;\n  color: #555;\n  display: inline-block;\n  font-weight: 500;\n  line-height: ' + b.px(.375 * $) + ';\n  margin-right: 0;\n  min-height: 34px;\n  max-width: 80px;\n  opacity: 1;\n  padding: 4px 0;\n  text-align: center;\n  width: ' + b.px($) + ';\n}\n#' + w + ' .st-total.st-hidden {\n  display: none;\n}\n#' + w + ' .st-total > span {\n  display: block;\n  font-size: ' + b.px(.38 * $) + ';\n  line-height: ' + b.px(.45 * $) + ';\n  padding: 0;\n}\n#' + w + ' .st-total > span.st-shares {\n  font-size: ' + b.px(.23 * $) + ';\n  line-height: ' + b.px(.23 * $) + ';\n}\n#' + w + ' .st-toggle {\n  ' + j + ': -' + b.px($ + V) + ';\n  ' + b.TRANSITION() + '\n  background: #ccc;\n  border-bottom-' + k + '-radius: ' + b.px(R) + ';\n  color: white;\n  cursor: pointer;\n  font-size: ' + b.px(.5 * $) + ';\n  line-height: ' + b.px(.5 * $) + ';\n  position: relative;\n  text-align: center;\n  width: ' + b.px($) + ';\n}\n#' + w + '.st-hidden .st-toggle {\n  border-top-' + k + '-radius: ' + b.px(R) + ';\n}\n#' + w + '.st-' + j + ' .st-toggle .st-' + j + ' {\n  display: inline-block;\n}\n#' + w + '.st-' + j + '.st-hidden .st-toggle .st-' + j + ' {\n  display: none;\n}\n#' + w + '.st-' + j + ' .st-toggle .st-' + k + ' {\n  display: none;\n}\n#' + w + '.st-' + j + '.st-hidden .st-toggle .st-' + k + ' {\n  display: inline-block;\n}', L = '#' + w + ' {\n  bottom: 0;\n  display: ' + (W ? 'flex' : 'none') + ';\n  left: 0;\n  right: 0;\n  top: auto;\n  width: 100%;\n}\n#' + w + '.st-hidden {\n  bottom: -' + b.px($) + ';\n  width: 100%;\n}\n#' + w + '.st-hidden.st-left {\n  left: 0;\n}\n#' + w + '.st-hidden.st-right {\n  right: 0;\n}\n#' + w + ' > div {\n  -moz-flex: 1;\n  -ms-flex: 1;\n  -webkit-flex: 1;\n  clear: none;\n  flex: 1;\n  float: none;\n}\n#' + w + ' .st-total {\n  background: #fff;\n  padding: 6px 8px;\n}\n#' + w + ' .st-btn {\n  ' + b.BORDER_RADIUS('0 !important') + '\n  text-align: center;\n  width: auto;\n}\n#' + w + ' .st-btn > span {\n  display: none;\n}\n#' + w + ' .st-toggle {\n  display: none;\n}', W && !document.body.style.paddingBottom && (L += 'body { padding-bottom: 48px; }'), U = '@media (max-width: ' + b.px(K) + ') {\n  ' + L + '\n}', t = '#' + w + ':hover .st-toggle {\n  ' + j + ': 0;\n}\n#' + w + '.st-hidden:hover .st-toggle {\n  ' + j + ': ' + b.px($) + ';\n}\n#' + w + '.st-toggleable:hover .st-btn.st-last {\n  border-bottom-' + k + '-radius: 0;\n}\n#' + w + '.st-toggleable:hover .st-btn.st-last:hover {\n  border-bottom-' + k + '-radius: ' + b.px(R) + ';\n}\n#' + w + ' .st-btn:hover {\n  border-bottom-' + k + '-radius: ' + b.px(R) + ';\n  border-top-' + k + '-radius: ' + b.px(R) + ';\n}\n#' + w + '.st-has-labels .st-btn:hover {\n  width: ' + b.px(b.i18n['sticky-width'][E]) + ';\n}\n#' + w + ':not(.st-has-labels) .st-btn:hover {\n  width: ' + b.px(1.3 * $) + ';\n}\n#' + w + ' .st-btn.st-hide-label:hover {\n  width: ' + b.px(1.3 * $) + ';\n}\n#' + w + ' .st-btn:hover > svg {\n  margin-left: 5px;\n}\n#' + w + ' .st-btn:hover > img {\n  margin-left: 5px;\n}\n#' + w + ' .st-btn:hover > span {\n  opacity: 1;\n  display: inline-block;\n  left: 0;\n  filter: alpha(opacity=100);\n}\n@media (max-width: ' + b.px(K) + ') {\n  #' + w + ' .st-btn:hover > svg {\n    margin-left: 0;\n  }\n  #' + w + ' .st-btn:hover > span {\n    display: none;\n  }\n}', N = function () {
      var a, c, d;
      for (d = [], a = 0, c = O.length; c > a; a++) M = O[a], d.push('#' + w + ' .st-btn[data-network=\'' + M + '\'] {\n  background-color: ' + b.COLORS[M] + ';\n}');
      return d
    }().join('\n'), o = m, b.mobile || (o += t), b.mobile || (o += U), b.mobile && (o += L), o += N, b.css(o), !X) for (S = ['sms'], v = 0, F = S.length; F > v; v++) M = S[v], y = O.indexOf(M), y > -1 && O.splice(y, 1);
    for (b.removeInvalidButtons(O), u = '', Z && (u += '<div class=\'st-total st-hidden\'>\n  <span class=\'st-label\'></span>\n  <span class=\'st-shares\'>\n    ' + b.capitalize(b.i18n.shares[E]) + '\n  </span>\n</div>'), y = z = 0, G = O.length; G > z; y = ++z) M = O[y], l = ['st-btn'], 0 === y && l.push('st-first'), y === O.length - 1 && l.push('st-last'), B = b.getShareLabel(M, E), 'cta' !== D && (B = ''), C = '<span class=\'st-label\'>' + B + '</span>', u += '<div class=\'' + l.join(' ') + '\' data-network=\'' + M + '\'>\n  ' + b.ICONS[M] + '\n  ' + ('counts' === D || 'cta' === D ? C : '') + '\n</div>';
    for (Y && (u += '<div class="st-toggle">\n  <div class="st-left">\n    ' + b.ICONS.arrow_left + '\n  </div>\n  <div class="st-right">\n    ' + b.ICONS.arrow_right + '\n  </div>\n</div>'), a.innerHTML = u, f = a.querySelectorAll('.st-btn'), g = a.querySelector('.st-toggle'), h = a.querySelector('.st-total'), i = a.querySelector('.st-total .st-label'), b.addEventListener(g, 'click', function () {
      return b.toggleClass(a, 'st-hidden')
    }), T = function () {
      var a, d, e, g, h, i, j, k;
      for (i = 100, (b.mobile || window.innerWidth < K) && (i = 6), Z && i--, c.call(O, 'sharethis') >= 0 && i--, c.call(O, 'sms') >= 0 && i--, c.call(O, 'whatsapp') >= 0 && i--, c.call(O, 'messenger') >= 0 && i--, c.call(O, 'wechat') >= 0 && i--, d = 0, g = f.length; g > d; d++) a = f[d], a.style.display = 'inline-block';
      for (k = [], y = e = 0, h = f.length; h > e; y = ++e) a = f[y], 'sharethis' !== (j = a.getAttribute('data-network')) && 'sms' !== j && 'messenger' !== j && 'whatsapp' !== j && 'wechat' !== j && (i-- > 0 || k.push(a.style.display = 'none'));
      return k
    }, b.addEventListener(window, 'resize', T), q = function (c) {
      return b.addEventListener(c, 'click', function () {
        return b.share({
          description: p || (null != a ? a.getAttribute('data-description') : void 0),
          image: x || (null != a ? a.getAttribute('data-image') : void 0),
          message: I || (null != a ? a.getAttribute('data-message') : void 0),
          network: c.getAttribute('data-network'),
          share_url: null != a ? a.getAttribute('data-short-url') : void 0,
          subject: bb || a.getAttribute('data-email-subject'),
          title: cb || (null != a ? a.getAttribute('data-title') : void 0),
          url: eb || (null != a ? a.getAttribute('data-url') : void 0),
          username: gb || (null != a ? a.getAttribute('data-username') : void 0)
        })
      })
    }, A = 0, H = f.length; H > A; A++) e = f[A], q(e);
    return Z || 'counts' === D ? b.loadCounts({
      facebook: c.call(O, 'facebook') >= 0,
      url: eb || (null != a ? a.getAttribute('data-url') : void 0),
      use_native_counts: fb
    }, function (c) {
      var d, g, j, k, l, m;
      if (Z && ((null != (j = c.total) ? j.value : void 0) > J ? (i.innerHTML = c.total.label, b.removeClass(h, 'st-hidden')) : b.addClass(h, 'st-hidden')), 'counts' === D) for (d = 0, g = f.length; g > d; d++) e = f[d], M = e.getAttribute('data-network'), k = c[M] || {}, B = k.label, m = k.value, B && m > J ? (null != (l = e.querySelector('.st-label')) && (l.innerHTML = B), b.removeClass(e, 'st-hide-label')) : b.addClass(e, 'st-hide-label');
      return T(), setTimeout(function () {
        return b.removeClass(a, 'st-hidden')
      }, 10), 'function' == typeof P ? P() : void 0
    }) : (T(), setTimeout(function () {
      return b.removeClass(a, 'st-hidden')
    }, 10), 'function' == typeof P ? P() : void 0)
  }
}.call(this), function () {
  window.__sharethis__.md5 = '18ddbb461c68bb07edb070f4b7a68276'
}();