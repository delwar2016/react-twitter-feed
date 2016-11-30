/**
 * Md. Delwar Hossain
 * Created Date: 01, Dec-2016
 *
 */

import React from 'react';

const TwitterFeedForm = React.createClass({
  /**
   * submit feed for saving
   * @param e
   */
  onPostTwitterFeed: function(e){
    e.preventDefault();
    let feed = this.refs.feed;
    this.props.onPostTwitterFeed(feed.value);
    feed.value = "";
  },

  /**
   * render twitter feed form
   * @returns {XML}
   */
  render: function () {
    return (
      <div id='twitter-feed-form'>
        <div className="row">
          <div className="col-md-12">
           <textarea  ref="feed" id="feed"  className="form-control" placeholder="Write something here" />
          </div>
          <div className="col-md-12">
            <button type="button" onClick={this.onPostTwitterFeed} className="btn btn-primary float-xs-right">Post</button>
          </div>
        </div>
      </div>
    );
  }
});

export default TwitterFeedForm;
