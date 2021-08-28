var app = require('express')();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/', function (req, res, next) {
  console.log(req.body);
  res.json(req.body);
});
