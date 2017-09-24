var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',  //@TODO: Change user to your local mysql instance username
  password : 'password',   //@TODO: Change password to your local mysql instance password
  database : 'review'    //@TODO: Ensure database name matches the database you created
});



