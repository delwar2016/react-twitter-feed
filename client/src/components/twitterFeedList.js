/**
 * Md. Delwar Hossain
 * Created Date: 01, Dec-2016
 *
 */

import React from 'react';
import TwitterFeed from '../components/twitterFeed';

const TwitterFeedList = React.createClass({

  /**
   * render all the twitter feed
   * @returns {XML}
   */
  render: function () {
    let twitterFeedNodes = this.props.twitterFeeds.map(function(feed){
      return (
        <TwitterFeed author={feed.author} feed={feed.feed} feed_on={feed.feed_on} key={feed._id}>
        </TwitterFeed>
      );
    });
    return (
      <div id='twitter-feed-list'>
        {twitterFeedNodes}
      </div>
    );
  }
});

export default TwitterFeedList;
