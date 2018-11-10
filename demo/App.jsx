import React from "react";
import './sharethis.js'
// import {InlineReactionButtons} from 'sharethis-reactjs';
// import {InlineShareButtons} from 'sharethis-reactjs';
// import {StickyShareButtons} from 'sharethis-reactjs';
import {InlineShareButtons} from '../src/index.js';
import {StickyShareButtons} from '../src/index.js';
// import {InlineFollowButtons} from 'sharethis-reactjs';

// 默认参数
const DEFAULT_NETWORKS = ['wechat', 'linkedin', 'messenger', 'twitter']

class App extends React.Component {

  render () {
    let options = {
      language: this.props.language || 'zh',       // which language to use (see LANGUAGES)
      networks: this.props.networks || DEFAULT_NETWORKS,
      labels: 'cta',        // button labels (cta, counts, null)
      padding: 12,          // padding within buttons (INTEGER)
      radius: 4,            // the corner radius on each button (INTEGER)
      enabled: true,        // show/hide buttons (true, false)
      font_size: 16,        // font size for the buttons
      show_total: false,     // show/hide the total share count (true, false)

      image: this.props.image || 'https://bit.ly/2CMhCMC',  // (defaults to og:image or twitter:image)
      description: 'custom text',       // (defaults to og:description or twitter:description)
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
          size: 40,             // the size of each button (INTEGER)
        }, options)}
      />)
    } else {
      return (
        <StickyShareButtons
          config={Object.assign({
            alignment: this.props.alignment || 'right',    // alignment of buttons (left, right)
            hide_desktop: false,  // hide buttons on desktop (true, false)
            min_count: 0,         // hide react counts less than min_count (INTEGER)
            show_mobile: true,    // show/hide the buttons on mobile (true, false)
            show_toggle: true,    // show/hide the toggle buttons (true, false)
            size: 48,             // the size of each button (INTEGER)
            top: 160,             // offset in pixels from the top of the page
          }, options)}
        />
      )
    }
  }
}


// export
export default App;
