var os = require('os')
var http = require('http')

function handleRequest(req, res) {
  res.write('Hello World! ' + os.hostname())
  res.end()
}

function handler(event) {
  var response = event.response;
  var headers = response.headers;


  headers['strict-transport-security'] = { value: 'max-age=63072000; includeSubdomains; preload'}; 
  headers['content-security-policy'] = { value: "default-src 'none'; img-src 'self'; script-src 'self'; style-src 'self'; object-src 'none'"}; 
  headers['x-content-type-options'] = { value: 'nosniff'}; 
  headers['x-frame-options'] = {value: 'DENY'}; 
  headers['x-xss-protection'] = {value: '1; mode=block'}; 

  return response;
}

const PROFILES_LIST = [
  {
    name: 'default',
    aws_access_key_id: 'DFKJBGEURIEJILWJDILJD',
    aws_secret_access_key: 'S89jBVY678ujhbat678UHU7y8uHGU78UJHIU678uUAVY6U7IyjjGu',
  },
  {
    name: 'sec',
    aws_access_key_id: 'SDFLKGJEWKUQI3JREIJDD',
    aws_secret_access_key: '78UJHIU678uUAVY6U7IyjjGuS89jBVY678ujhbat678UHU7y8uHGU',
  },
];

http.createServer(handleRequest).listen(3000)