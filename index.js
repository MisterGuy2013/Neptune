const http = require("http");
const express = require("express");
const path = require("path");
const fs = require('fs');

const app = express();
var router = express.Router();
const httpserver = http.Server(app);


//app.use('/public', express.static(__dirname + '/public'));
app.use(express.static('public'));
app.get('/index.html', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})
app.use("/", router);

httpserver.listen(3000);

fs.writeFileSync('/data/access.txt', '1');