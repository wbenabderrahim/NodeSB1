var request = require("request");
var helloWorld = require("../index.js");
var cheerio = require('cheerio');
var base_url = "http://localhost:3000/"

describe("test1", function() {
  describe("GET /", function() {
    it("returns status code 200", function(done) {
      request.get(base_url, function(error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });

    it("test2", function(done) {
      request.get(base_url, function(error, response, body) {
       var $page = cheerio.load(body),
    text = $page("body").text();
        text = text.replace(/\s+/g, " ") ;
   expect(text).toContain("Welcome to your app");
        done();
 

      });
    });
  });
});
