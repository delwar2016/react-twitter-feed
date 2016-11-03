/**
 * Created by delwar on 11/2/16.
 */

module.exports = function () {
  var TwitterFeed = require('../db_schemas/TwitterFeedSchema').TwitterFeed;
  return {
    /**
     *save twitter feed
     * @param paramData
     * @param paramCallBack
     */
    saveTwitterFeed: function(paramData, paramCallBack){
      paramData.feed_on = new Date();
      var twitterFeed = new TwitterFeed(paramData);
      twitterFeed.save(function(err, returnResponse){
        if(!err){
          paramCallBack(null, returnResponse);
        }
        else{
          paramCallBack(err);
        }
      });
    },

    /**
     *get all twitter feed
     * @param paramCallBack
     */
    getTwitterFeeds: function(paramCallBack){
      TwitterFeed.find({}).sort('-feed_on').exec(function(err, tweetFeeds){
        if(!err){
          paramCallBack(null, tweetFeeds);
        }
        else{
          paramCallBack(err);
        }
      });
    }
  }
}
