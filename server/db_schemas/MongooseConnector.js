/**
 * Created by delwar on 11/2/16.
 */
var mongoose = require('mongoose');

exports.MongooseConnector = function () {

  if (mongoose.connection.db == null) {

    mongoose.connect('mongodb://localhost/twitter-feeds', function () {});
  }
};
