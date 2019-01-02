
// dependencies
import core from "./st.js"
import React from "react";
// import {Component, createRef} from 'react';
import {render} from "react-dom";
import jsonp from "jsonp";

const load = function(component, product) {
  // load config
  let config = component.props.config || {enabled: true};
  config = JSON.parse(JSON.stringify(config));
  
  // load buttons
  const _onShareThisLoaded = window.onShareThisLoaded;
  let onload = () => {
    if (!onload.complete) {
      if (!config.id) {
        config.id = 'sharethis-' + Date.now();
      }
      if (component.buttons.current) {
        component.buttons.current.id = config.id;
        window.__sharethis__.load(product, config);
      }
      if (_onShareThisLoaded) {
        _onShareThisLoaded();
      }
      onload.complete = true;
    }
  };
  window.onShareThisLoaded = onload;
  
  // load sharethis.js
//  TODO 核心代码引入
  window.onShareThisLoaded();
}

class InlineShareButtons extends React.Component {
  constructor(props) {
    super(props);
    this.buttons = React.createRef();
  }
  
  componentDidMount() {
    load(this, 'inline-share-buttons');
  }
  
  render () {
    return (
      <div ref={this.buttons} />
    );
  }
};

class StickyShareButtons extends React.Component {
  constructor(props) {
    super(props);
    this.buttons = React.createRef();
  }
  
  componentDidMount() {
    load(this, 'sticky-share-buttons');
  }
  
  render () {
    return (
      <div ref={this.buttons} />
    );
  }
};


// 默认参数
const DEFAULT_NETWORKS = ['wechat', 'linkedin', 'messenger', 'twitter', 'sms']

class App extends React.Component {
  render () {
    let options = {
      language: this.props.language || 'zh',       // which language to use (see LANGUAGES)
      networks: this.props.networks || DEFAULT_NETWORKS,
      labels: this.props.labels || null,        // button labels (cta, counts, null)
      padding: Number(this.props.padding) || 12,          // padding within buttons (INTEGER)
      radius: Number(this.props.radius) || 4,            // the corner radius on each button (INTEGER)
      enabled: this.props.hasOwnProperty('enabled')?this.props.enabled:true,        // show/hide buttons (true, false)
      font_size: Number(this.props.fontSize) || 16,        // font size for the buttons
      show_total: this.props.showTotal || false,     // show/hide the total share count (true, false)
      
      image: this.props.image || 'https://bit.ly/2CMhCMC',  // (defaults to og:image or twitter:image)
      description: this.props.description || 'custom text',       // (defaults to og:description or twitter:description)
      url: this.props.url, // (defaults to current url)
      title: this.props.title || 'custom title',            // (defaults to og:title or twitter:title)
      message: this.props.message || 'custom email text',     // (only for email sharing)
      subject: this.props.subject || 'custom email subject',  // (only for email sharing)
      username: this.props.username || 'custom twitter handle' // (only for twitter sharing)
    }
    if (this.props.style === 'inline') {
      return (<InlineShareButtons
        config={Object.assign({
          alignment: this.props.alignment || 'center',  // alignment of buttons (left, center, right)
          size: Number(this.props.size) || 40,             // the size of each button (INTEGER)
        }, options)}
      />)
    } else {
      return (
        <StickyShareButtons
          config={Object.assign({
            alignment: this.props.alignment || 'right',    // alignment of buttons (left, right)
            hide_desktop: this.props.hideDesktop || false,  // hide buttons on desktop (true, false)
            min_count: Number(this.props.minCount) || 0,         // hide react counts less than min_count (INTEGER)
            show_mobile: this.props.hasOwnProperty('showMobile')?this.props.showMobile: true,    // show/hide the buttons on mobile (true, false)
            show_toggle: this.props.hasOwnProperty('showToggle')?this.props.showToggle: true,    // show/hide the toggle buttons (true, false)
            size: Number(this.props.size) || 48,             // the size of each button (INTEGER)
            top: Number(this.props.top) || 160,             // offset in pixels from the top of the page
          }, options)}
        />
      )
    }
  }
}



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
  let dom = document.querySelector('script[src*="sunthis.js"]')
  let href = ''
  if (dom) {
    href = dom.getAttribute('src')
  }
  let search = href && href.replace(/(.+)\?/, () => '')
  return search && parseUrlParams(search)
}

let params = getUrlParams()

const id = params.id || 'default'

const DEFAULT = {
  "style": "inline",
  "image": "",
  "alignment": "right",
  "alignmentSticky": "sticky",
  "title": "",
  "description": "",
  "networks": [
    "wechat",
    "weibo",
    "facebook",
    "twitter",
    "sharethis"
  ],
  "url": "",
  "language": "en",
  "labels": "cta",
  "padding": 12,
  "radius": "12",
  "enabled": true,
  "fontSize": 16,
  "showTotal": false,
  "size": 46,
  "hideDesktop": false,
  "minCount": 0,
  "showMobile": true,
  "showToggle": true,
  "top": 160
}

jsonp(`http://www.sunthis.com/api/${id}.js`, {
  prefix: '__jq',
  timeout: 2000
}, function (err, data) {
  let el
  let settings
  if (err) {
    settings = DEFAULT
  } else if (data){
    settings = data
  }
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
  render((<App
    language={settings.language}
    labels={settings.labels}
    padding={settings.padding}
    radius={settings.radius}
    enabled={settings.enabled}
    fontSize={settings.fontSize}
    showTotal={settings.showTotal}
    size={settings.size}
    hideDesktop={settings.hideDesktop}
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
})

