var http = require('http'); //http is a core module for running node http server

http.createServer(function(req, res){ //Method : createServer
    res.write('Hello World from Anushka Padyal!');
    res.end();
}).listen(3000, function(){
    console.log("Server running at port 3000");
}); 