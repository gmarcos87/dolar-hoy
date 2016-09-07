var fetch = require('node-fetch')
var apiUrl = 'http://ws.geeklab.com.ar/dolar/get-dolar-json.php'

var app = {
  init: function(api){
    apiUrl = api;
  },
  fetch: function(cb){
    fetch(apiUrl)
      .then(function(res) {
          return res.json();
      }).then(function(json) {
          cb(json);
      });
  }
};

module.exports = app;
