var fetch = require("node-fetch");
var apiUrl = "http://ws.geeklab.com.ar/dolar/get-dolar-json.php";

var app = {
  init(api){
    apiUrl = api;
  },
  fetch(cb){
    fetch(apiUrl)
      .then(function(res) {
          return res.json();
      }).then(function(json) {
          cb(json,null);
      }).catch(function(err){
          cb(null,err);
      });
  }
};

module.exports = app;
