
// dependencies
import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import jsonp from "jsonp";
import $ from "jquery"
// import './sharethis.js'


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
  let href = $('script[src*="sunthis.js"]').attr('src')
  let search = href && href.replace(/(.+)\?/, () => '')
  return search && parseUrlParams(search)
}

// let params = getUrlParams()

// const urlPrefix = 'http://localhost:3000'
const urlPrefix = 'https://mmd.wangchong.tech'
// const id = '5be6b65274d22114877ae5e7'
const id = '5be6bc422d8fe8041daff8bd'

jsonp(`${urlPrefix}/share/get/${id}`, {}, function (err, data) {
  console.log(data && data.data && data.data.settings && JSON.parse(data.data.settings))
  if (data && data.data && data.data.settings){
    let el = document.getElementById("app");
    let settings = JSON.parse(data.data.settings)
    // setTimeout(() => {
      ReactDOM.render((<App
        image={settings.image}
        title={settings.title}
        description={settings.description}
        url={settings.url || location.href}
        style={settings.style}
        alignment={settings.alignment}
        networks={settings.networks}/>), el);
    // }, 0)
  }
})

// render app

