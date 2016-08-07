var express = require('express');
var mysql      = require('mysql');

var db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password@123',
  database : 'commentdb'
});

db.connect();

module.exports = db;
