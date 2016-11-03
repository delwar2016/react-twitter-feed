/**
 * Created by delwar on 11/2/16.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;

var TwitterFeedSchema = new Schema({
  author: {type: String, default: 'Anonymous'},
  feed_on: {type: Date, required: false},
  feed: {type: String}
});

var TwitterFeed = mongoose.model('twitter_feeds', TwitterFeedSchema);
exports.TwitterFeed = TwitterFeed;
