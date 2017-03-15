var app = require("../index.js");

describe("Test app", function() {

  it("get a request", function(done) {
    app.init("http://ws.geeklab.com.ar/dolar/get-dolar-json.php");
    app.fetch((res) => {
      expect(res.libre).toBeDefined();
      expect(res.blue).toBeDefined();
      done();
    });
  });

  it("get an error", function(done) {
    app.init("http://fake-url/dolar/get-dolar-json.php");
    app.fetch((res,err) => {
      expect(err).toBeDefined();
      done();
    });

  });
});
