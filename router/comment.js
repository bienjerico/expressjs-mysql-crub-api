var comment = require('express').Router();
var connection = require('.././database/db');

module.exports = comment;

comment.route('/comment')
  .get(function(req,res){
    connection.query('SELECT * FROM comments', function(err, rows, fields) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    })
  })
  .post(function(req,res){
    var author = req.body.author;
    var text = req.body.text;
    connection.query('INSERT INTO comments (`author`,`text`) VALUES (?,?) ',[author,text], function(err, rows, fields) {
      console.log(connection);
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    })
  });

comment.route('/comment/:id')
  .get(function(req, res) {
    var id = req.params.id;
    connection.query('SELECT * FROM comments WHERE id = ?',[id], function(err, rows, fields) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    })
  })
  .put(function(req, res) {
    var id = req.params.id;
    var author = req.body.author;
    var text = req.body.text;
    connection.query('UPDATE comments SET author = ?, text = ? WHERE id = ?',[author,text,id], function(err, rows, fields) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    })
  })
  .delete(function(req,res){
    var id = req.params.id;
    connection.query('DELETE FROM comments WHERE id = ?',[id], function(err, rows, fields) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    })
  });


