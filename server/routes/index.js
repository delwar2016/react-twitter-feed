/**
 * Created by delwar on 11/2/16.
 */
module.exports = function (app) {
  var TwitterFeed = require('../controllers/TwitterFeedController')();
  app.post('/api/twitter-feed',TwitterFeed.saveTwitterFeed);
  app.get('/api/twitter-feed',TwitterFeed.getTwitterFeeds);
};