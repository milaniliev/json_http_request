class JSONHTTPRequest {
  constructor(options){
    this.request = new XMLHttpRequest()
    this.request.open(options.method, options.url)
    this.request.setRequestHeader('Accept', 'application/json')
  }
  
  send (data) {
    return new Promise(function(resolve, reject){
      
      this.request.addEventListener('error', (error) => {
        reject(error)
      })
      this.request.addEventListener('load', function() {
        if(200 <= this.request.status && this.request.status < 300){
          resolve(JSON.parse(this.request.responseText))
        } else {
          reject(new Error(`Server returned ${this.request.status}: ${this.request.responseText}`))
        }
      }.bind(this))
      
      if(data === undefined){
        this.request.send()
      } else {
        this.request.setRequestHeader('Content-Type', 'application/json')
        this.request.send(JSON.stringify(options.data))
      }
      
    }.bind(this))
  }
}

if(typeof module === 'undefined'){
  window.JSONHTTPRequest = JSONHTTPRequest
} else {
  module.exports = JSONHTTPRequest
}