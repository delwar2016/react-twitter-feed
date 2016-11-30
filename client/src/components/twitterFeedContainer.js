import React from 'react';
import TwitterFeedService from '../service/twitterFeed.Service';

import TwitterFeedForm from '../components/twitterFeedForm';
import TwitterFeedList from '../components/twitterFeedList';


const TwitterFeedContainer = React.createClass({
  getInitialState: function () {
    return {
      twitterFeeds: []
    };
  },

  loadTwitterFeedsFromServer: function () {
    console.log('sss');
    TwitterFeedService.getTwitterFeeds((twitterFeeds) => {
      this.setState({
        twitterFeeds: twitterFeeds
      });
    });
  },

  componentDidMount: function () {
    this.loadTwitterFeedsFromServer();
    setInterval(this.loadTwitterFeedsFromServer, 15*1000);
  },

  onPostTwitterFeed: function(paramFeed){
    let me = this;
    let twitterFeeds = this.state.twitterFeeds;
    TwitterFeedService.addNewFeed(paramFeed, (err, newPost) =>{
      twitterFeeds.unshift(newPost);
      me.setState({
        twitterFeeds: twitterFeeds
      });
    });
  },

  render: function () {
    return (
     <div>
     <h1>Twitter Feed</h1>
       <TwitterFeedForm onPostTwitterFeed={this.onPostTwitterFeed} />
       <TwitterFeedList twitterFeeds={this.state.twitterFeeds} />
     </div>
    );
  }
});

export default TwitterFeedContainer;
