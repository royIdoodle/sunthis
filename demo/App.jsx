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
    if (this.props.style === 'inline') {
      return (<InlineShareButtons
        config={{
          alignment: 'center',  // alignment of buttons (left, center, right)
          enabled: true,        // show/hide buttons (true, false)
          font_size: 16,        // font size for the buttons
          labels: 'cta',        // button labels (cta, counts, null)
          language: 'en',       // which language to use (see LANGUAGES)
          networks: this.props.networks || DEFAULT_NETWORKS,
          padding: 12,          // padding within buttons (INTEGER)
          radius: 4,            // the corner radius on each button (INTEGER)
          show_total: true,
          size: 40,             // the size of each button (INTEGER)
    
          // OPTIONAL PARAMETERS
          url: this.props.url, // (defaults to current url)
          image: 'https://bit.ly/2CMhCMC',  // (defaults to og:image or twitter:image)
          description: 'custom text',       // (defaults to og:description or twitter:description)
          title: 'custom title',            // (defaults to og:title or twitter:title)
          message: 'custom email text',     // (only for email sharing)
          subject: 'custom email subject',  // (only for email sharing)
          username: 'custom twitter handle' // (only for twitter sharing)
        }}
      />)
    } else {
      return (
        <StickyShareButtons
          config={{
            alignment: 'right',    // alignment of buttons (left, right)
            enabled: true,        // show/hide buttons (true, false)
            font_size: 16,        // font size for the buttons
            hide_desktop: false,  // hide buttons on desktop (true, false)
            labels: 'counts',     // button labels (cta, counts, null)
            language: 'en',       // which language to use (see LANGUAGES)
            min_count: 0,         // hide react counts less than min_count (INTEGER)
            networks: this.props.networks || DEFAULT_NETWORKS,
            padding: 12,          // padding within buttons (INTEGER)
            radius: 4,            // the corner radius on each button (INTEGER)
            show_total: true,     // show/hide the total share count (true, false)
            show_mobile: true,    // show/hide the buttons on mobile (true, false)
            show_toggle: true,    // show/hide the toggle buttons (true, false)
            size: 48,             // the size of each button (INTEGER)
            top: 160,             // offset in pixels from the top of the page
      
            // OPTIONAL PARAMETERS
            url: this.props.url, // (defaults to current url)
            image: 'https://bit.ly/2CMhCMC',  // (defaults to og:image or twitter:image)
            description: 'custom text',       // (defaults to og:description or twitter:description)
            title: 'custom title',            // (defaults to og:title or twitter:title)
            message: 'custom email text',     // (only for email sharing)
            subject: 'custom email subject',  // (only for email sharing)
            username: 'custom twitter handle' // (only for twitter sharing)
      
          }}
        />
      )
    }
  }
}


// export
export default App;
