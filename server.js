/**
 * Created by delwar on 10/9/16.
 */

var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use(express.static('public'));
app.get('/', function (req, res) {
  res.sendFile( __dirname + "/public/view/" + "calculator-sample.html" );
})
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
