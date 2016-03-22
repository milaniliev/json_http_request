# JSONHTTPRequest
A tiny, simple, dependency-free, Promise-based JSON wrapper around XMLHttpRequest.


### Usage

```js

  var todos_request = new JSONHTTPRequest({method: 'GET', url: '/todos'})
  todos_request.send().then((todos) => {
    //todos is a plain JS object parsed from the JSON data received 
  }).catch(function(error){
    console.log(error) 
  })
```