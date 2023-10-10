// Define a string constant concatenating strings
const http = require('http');
const url = require('url'); // Importez le module url
const qs = require('querystring'); // Importez le module querystring (qs)
const handles = require('./handles')

const content = '<!DOCTYPE html>' +
'<html>' +
'    <head>' +
'        <meta charset="utf-8" />' +
'        <title>ECE AST</title>' +
'    </head>' + 
'    <body>' +
'       <p>Hello World!</p>' +
'    </body>' +
'</html>'

const serverHandle = function (req, res) {
    const route = url.parse(req.url)
    const path = route.pathname 
    const params = qs.parse(route.query)
  
    if (path === '/hello' && 'name' in params) {
        res.write('Hello ' + params['name'])
      } else {
        res.write('Hello anonymous')
      }
      
      res.end()
  };
  http
.createServer(handles.serverHandle)
.listen(8080)

