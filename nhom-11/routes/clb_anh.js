const express = require('express')
const router = express.Router();
var mysql = require('mysql');
var con_italia = mysql.createConnection({
  multipleStatements: true,
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "italia"
});
con_italia.connect();
router.get('/Mancity.html', function (req, res) {
  var sql = "SELECT * FROM vong1;SELECT * FROM vong2;SELECT * FROM vong3";
  con_italia.query(sql,[1,3], function(err, results) {
    if (err) throw err;
    res.render('CLB/Anh/Mancity', {results});
  });
});

module.exports = router;
