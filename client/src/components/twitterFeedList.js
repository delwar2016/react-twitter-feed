import React from 'react';
import TwitterFeed from '../components/twitterFeed';

const TwitterFeedList = React.createClass({

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
