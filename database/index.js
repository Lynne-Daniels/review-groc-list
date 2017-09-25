var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',  //@TODO: Change user to your local mysql instance username
  password : 'see slack',   //@TODO: Change password to your local mysql instance password
  database : 'review'    //@TODO: Ensure database name matches the database you created
});

var selectAll = function(callback) {
  //@TODO
  let sqlstring = 'SELECT * from groceries;';
  connection.connect();
  connection.query(sqlstring, (err, rows, fields) => {
    console.log('retreived from DB: ', err, rows[0].description);
    callback(/*idk*/); //TODO add rows or fields . someting  as param
  })
  

};
// input {quantity: , description:}, callback
var insertOne = function(item, callback) {
  //@TODO
  let sqlstring = 'INSERT INTO review (quantity, description)\
  VALUES (' + item.quantity + ',' + item.description +')';
  connection.connect();
  connection.query(sqlstring, (err, rows, fields) => {
    console.log('inserted to DB: ', err, rows, fields)
    callback(/*idk*/); //TODO add rows or fields . someting  as param
  })

};

module.exports.selectAll = selectAll;
module.exports.insertOne = insertOne;
