var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',  //@TODO: Change user to your local mysql instance username
  password : 'plantlife',   //@TODO: Change password to your local mysql instance password
  database : 'review'    //@TODO: Ensure database name matches the database you created
});

var selectAll = function() {
  //@TODO
};

var insertOne = function() {
  //@TODO
};

module.exports.selectAll = selectAll;
module.exports.insertOne = insertOne;
