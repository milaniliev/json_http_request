var rosehip = require('rosehip')
var expect = require('expect.js')
var sinon = require('sinon')

var tests = new rosehip.Test()

tests.describe("JSONHTTPRequest", function(test){
  test.it('exists', function(){
    expect(JSONHTTPRequest).not.to.be(null)
  })
  
  test.it("Sends a simple GET request", function(done){
    var todos_server = sinon.fakeServer.create({respondImmediately: true});
    todos_server.respondWith('GET', '/todos', [
      200,
      { "Content-Type": "application/json" },
      JSON.stringify([{ id: 1, text: "Provide examples", done: true }])
    ])
    var todos_request = new JSONHTTPRequest({method: 'GET', url: '/todos'})
    todos_request.send().then((todos) => {
      expect(todos[0].id).to.equal(1)
      done()
    }).catch(function(error){
      done(error)
    })
    // todos_server.restore()
  })
  test.it("Handles Failures")
})

var reporter = new rosehip.WebReporter(document.getElementById('test_report'), tests)

tests.run()
