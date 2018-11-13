
// dependencies
import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import jsonp from "jsonp";
import $ from "jquery"
// import './sharethis.js'

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

let params = getUrlParams()

// const urlPrefix = 'http://localhost:3000'
const urlPrefix = 'https://mmd.wangchong.tech'
// const id = '5be6b65274d22114877ae5e7'
const id = params.id || '5be6bc422d8fe8041daff8bd'

jsonp(`${urlPrefix}/share/get/${id}`, {}, function (err, data) {
  if (data && data.data && data.data.settings){
    let settings = JSON.parse(data.data.settings)
    let el
    if(settings.style === 'sticky') {
      el = document.createElement('div')
      document.body.appendChild(el)
    } else {
      let temp = document.getElementsByClassName("sunthis")[0];
      if(!temp){
        el = document.createElement('div')
        document.body.appendChild(el)
      } else {
        el = temp
      }
    }
    ReactDOM.render((<App
      language={settings.language}
      labels={settings.labels}
      padding={settings.padding}
      radius={settings.radius}
      enabled={settings.enabled}
      fontSize={settings.fontSize}
      showTotal={settings.showTotal}
      size={settings.size}
      hideDestop={settings.hideDesktop}
      minCount={settings.minCount}
      showMobile={settings.showMobile}
      showToggle={settings.showToggle}
      message={settings.message}
      subject={settings.subject}
      username={settings.username}
      top={settings.top}
      image={settings.image}
      title={settings.title}
      description={settings.description}
      url={settings.url || location.href}
      style={settings.style}
      alignment={settings.alignment}
      networks={settings.networks}/>), el);
  }
})

// render app

