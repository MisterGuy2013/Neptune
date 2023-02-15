const http = require("http");
const express = require("express");
const path = require("path");
const fs = require('fs');

const app = express();
var router = express.Router();
const httpserver = http.Server(app);


var views=0;

//app.use('/public', express.static(__dirname + '/public'));
app.use(express.static('public'));
app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
});
app.use("/", router);

httpserver.listen(3000);
console.log("Running");


process.on('exit', function() {
    console.log('About to close');
  fs.appendFile("data/viewcount.txt", "|"+views, (err) => {
  if (err) {
    console.log(err);
  }
  else {
    // Get the file contents after the append operation
    console.log("\nFile Contents of file after append:",
      fs.readFileSync("example_file.txt", "utf8"));
  }
});
});


