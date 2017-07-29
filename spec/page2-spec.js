var request = require("request");
var helloWorld = require("../index.js") ;
var cheerio = require('cheerio');
var base_url = "http://localhost:3000/user"

describe("test3", function() {
  describe("GET /user", function() {
    it("returns status code 200", function(done) {
      request.get(base_url, function(error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });

    it("test4", function(done) {
      request.get(base_url, function(error, response, body) {
       var $page1 = cheerio.load(body);
        var text1 = $page1("body").text();
         text1 = text1.replace(/\s+/g, "")
          expect(text1).toBe("Second");
   setTimeout( helloWorld.fun, 4000); 
        done();
      });
    });
  });
});

