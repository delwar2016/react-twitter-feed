/**
 * Md. Delwar Hossain
 * Created Date: 01, Dec-2016
 *
 */

import React from 'react';
import TimeAgo from 'react-timeago';

const TwitterFeed = React.createClass({
  /**
   * render twitter feed
   * @returns {XML}
   */
  render: function () {
    return (
      <div class='twitter-feed'>
        <div className="card">
          <div className="card-block">
            <h4 className="card-title">{this.props.author}</h4>
            <p className="card-text">{this.props.feed}</p>
            <p className="card-text">
              <small className="text-muted"><TimeAgo date={this.props.feed_on} /></small>
            </p>
          </div>
        </div>
      </div>
    );
  }
});

export default TwitterFeed;
