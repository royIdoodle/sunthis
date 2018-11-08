
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
  let search = href.replace(/(.+)\?/, () => '')
  return parseUrlParams(search)
}
console.log(getUrlParams())

jsonp('http://baidu.com?a=d', {data: {a: 1}}, function (data) {
  console.log(data)
})
// render app
let el = document.getElementById("app");
ReactDOM.render((<App />), el);
