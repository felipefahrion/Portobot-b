var express = require("express");
var bodyParser = require("body-parser");
var cors = require('cors');
var morgan = require('morgan');
var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));

var routes = require("./api/router")(app);

var server = app.listen(3000, function () {
    console.log("Listening on port %s...", server.address().port);
});
