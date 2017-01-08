var util = require('util');
var http = require('http');
var port = 8080;
var ip = '0.0.0.0';

var PropertiesReader = require('properties-reader');

var server = http.createServer(function (req, res) {

   req.on('data', function (data) {});
   req.on('end', function () {
      console.log("Invoked");
      //var properties = PropertiesReader('/etc/node-app/node-app.config');
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write('<html><head><title></title></head>');
      res.write('<body>');
      res.write('<h1> Get username:password from Secret </h1>');
      res.write('<div>');
      res.write('username: ' + process.env.USERNAME);
      res.write('</div>');
      res.write('<div>');
      res.write('password: ' + process.env.PASSWORD);
      res.write('</div>');
      res.write('<h2> Get Country:Language directly from environment variables</h2>');
      res.write('<div>');
      res.write('Country: ' + process.env.COUNTRY);
      res.write('</div>');
      res.write('<div>');
      res.write('Language: ' + process.env.LANGUAGE);
      res.write('</div>');      
      res.write('</body>');
      res.write('</html>');
      res.end('\n');
   });

});
console.log('Initializing Server on ' + ip + ':' + port);
server.listen(port,ip, function(){
   var address = server.address();
   console.log('Server running on ' + address.address + ':' + address.port);
});
