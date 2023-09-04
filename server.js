// var http = require('http'); //http is a core module for running node http server

// http.createServer(function(req, res){ //Method : createServer
//     res.write('Hello World from Anushka Padyal!');
//     res.end();
// }).listen(3000, function(){
//     console.log("Server running at port 3000");
// }); 

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})