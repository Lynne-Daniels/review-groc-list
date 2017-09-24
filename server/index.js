var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var groceryList = [
  {id: 1, quantity: 5, description: "frozen pizza"},
  {id: 2, quantity: 10, description: "greek yogurt"},
  {id: 3, quantity: 2, description: "wine"},
  {id: 4, quantity: 1, description: "iced coffee"}
]

app.use(express.static(__dirname + '/../client/dist'));

app.use(bodyParser.json());

//GET route
app.get('/groceries', function(req, res) {
  res.status(200);
  res.send(groceryList);
})
//POST route
app.post('/groceries', function(req, res) {
  console.log('req.body', req.body);
  groceryList.push(req.body);
  res.status(201);
  res.end('Information was received');
})

app.listen(3000, function() {
  console.log('Server started and listening on port 3000');
});

