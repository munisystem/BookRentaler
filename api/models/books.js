var mysql = require('mysql');
var connect = mysql.createConnection({
  host : 'localhost',
  user : 'muni',
  database: 'books',
  password : 'hoge'
});

exports.findById = function (req, res) {
  console.log('Retrieving Book: ' + req.params.id);
  connect.query('SELECT * FROM `books` WHERE `id` = ?', req.paramsid, function(error, results, fields) {
  res.send(results);
  });
}

exports.findAll = function (req, res) {
  console.log('Retrieving Books');
  connect.query('SELECT * FROM `books`', function(error, results, fields) {
    res.send(results);
  });
}

exports.updateBook = function (req, res) {
  console.log('Updateing status');
  connect.query('SELECT * FROM `books` WHERE `id` = ?', req.params.id, function(error, results, fields) {
    if (results[0].user == req.params.user) {
      connect.query('UPDATE books SET user = ? WHERE id = ?', ["NOUSER", req.params.id], function(error, results, fields) {
        res.send(results);
      });
    } else if (results[0].user == "NOUSER") {
      connect.query('UPDATE books SET user = ? WHERE id = ?', [req.params.user, req.params.id], function(error, results, fields) {
        res.send(results);
      });
    } else {
        res.send(results);
    }
  });
}
