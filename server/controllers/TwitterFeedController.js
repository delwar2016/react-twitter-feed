/**
 * Created by delwar on 11/2/16.
 */
module.exports = function () {
  var TwitterFeed = require('../model/TwitterFeedModel')();
  return {
    /**
     *save twitter feed
     * @param req
     * @param res
     */
    saveTwitterFeed: function(req, res){
      var newFeed = {
        author: req.body.author? req.body.author: 'Anonymous',
        feed: req.body.feed
      };

      TwitterFeed.saveTwitterFeed(newFeed, function(err, response){
        if(!err){
          res.send(response);
        }
        else{
          res.send({error: err});
        }
      });
    },

    /**
     *get all twitter feed
     * @param req
     * @param res
     */
    getTwitterFeeds: function(req, res){
      TwitterFeed.getTwitterFeeds(function(err, responses){
        if(!err){
          res.send(responses);
        }
        else{
          res.send({error: err});
        }
      });
    }
  };
}
