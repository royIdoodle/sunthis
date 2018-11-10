
// dependencies
import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import jsonp from "jsonp";
import $ from "jquery"


// console.log(href, (new URL(href)).search)
let parseUrlParams = (str) => {
  let ret = {}
  let seg = str.replace(/^\?/, '').split('&')
  let len = seg.length
  let s = void 0
  for (let i = 0; i < len; i++) {
    if (!seg[i]) {
      continue
    }
    s = seg[i].split('=')
    ret[s[0]] = s[1]
  }
  return ret
}
let getUrlParams = () => {
  let href = $('script[src*=sunthis]').attr('src')
  let search = href && href.replace(/(.+)\?/, () => '')
  return search && parseUrlParams(search)
}
let el = document.getElementById("app");

jsonp('http://localhost:3000/share/settings/5b4acda01a390009023cba6a', {}, function (err, data) {
  console.log({err, data})
  let settings = data
  ReactDOM.render((<App
    image={settings.image}
    title={settings.title}
    description={settings.description}
    url={settings.url || location.href}
    style={settings.style}
    alignment={settings.alignment}
    networks={settings.networks}/>), el);
})

// 返回数据定义
let settings = {
  title: '测试用title',
  description: '测试用description',
  image: 'https://zens-pic.oss-cn-shenzhen.aliyuncs.com/static/space/production-pic1.png',
  url: 'http://m.51tiangou.com',  //分享url
  style: 'inline',      // 取值范围： inline 行内显示；sticky 固定位置显示
  alignment: 'left',      // 仅在style为sticky时有效，取值范围： top right bottom left
  networks: ['wechat', 'weibo', 'facebook', 'twitter']          // 取值范围：参考shareThis https://github.com/sharethis-github/sharethis-reactjs#sharing-networks
}

// render app

