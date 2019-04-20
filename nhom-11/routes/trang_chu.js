const express = require('express')
const router = express.Router();
var mysql = require('mysql');

var con_anh = mysql.createConnection({
  multipleStatements: true,
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "clb_anh"
});
con_anh.connect();
router.get('/score.html', function (req, res) {
  var sql = "SELECT COUNT(`vong`) st, `logo_doibong` , `doibong`, SUM(IF(`banthang`>`banbai`,1,0)) w , SUM(IF(`banthang`<`banbai`,1,0)) l , SUM(IF(`banthang`=`banbai`,1,0)) d , (SUM(`banthang`)-SUM(`banbai`)) as hieuso , SUM(IF(`banthang`>`banbai`,3,IF(`banthang`<`banbai`,0,1))) as diem  FROM arsenal UNION SELECT COUNT(`vong`) st, `logo_doibong` , `doibong`, SUM(IF(`banthang`>`banbai`,1,0)) w , SUM(IF(`banthang`<`banbai`,1,0)) l , SUM(IF(`banthang`=`banbai`,1,0)) d , (SUM(`banthang`)-SUM(`banbai`)) as hieuso , SUM(IF(`banthang`>`banbai`,3,IF(`banthang`<`banbai`,0,1))) as diem  FROM manutd UNION SELECT COUNT(`vong`) st, `logo_doibong` , `doibong`, SUM(IF(`banthang`>`banbai`,1,0)) w , SUM(IF(`banthang`<`banbai`,1,0)) l , SUM(IF(`banthang`=`banbai`,1,0)) d , (SUM(`banthang`)-SUM(`banbai`)) as hieuso , SUM(IF(`banthang`>`banbai`,3,IF(`banthang`<`banbai`,0,1))) as diem  FROM bournemouth UNION SELECT COUNT(`vong`) st, `logo_doibong` , `doibong`, SUM(IF(`banthang`>`banbai`,1,0)) w , SUM(IF(`banthang`<`banbai`,1,0)) l , SUM(IF(`banthang`=`banbai`,1,0)) d , (SUM(`banthang`)-SUM(`banbai`)) as hieuso , SUM(IF(`banthang`>`banbai`,3,IF(`banthang`<`banbai`,0,1))) as diem  FROM brighton UNION SELECT COUNT(`vong`) st, `logo_doibong` , `doibong`, SUM(IF(`banthang`>`banbai`,1,0)) w , SUM(IF(`banthang`<`banbai`,1,0)) l , SUM(IF(`banthang`=`banbai`,1,0)) d , (SUM(`banthang`)-SUM(`banbai`)) as hieuso , SUM(IF(`banthang`>`banbai`,3,IF(`banthang`<`banbai`,0,1))) as diem  FROM burnley UNION SELECT COUNT(`vong`) st, `logo_doibong` , `doibong`, SUM(IF(`banthang`>`banbai`,1,0)) w , SUM(IF(`banthang`<`banbai`,1,0)) l , SUM(IF(`banthang`=`banbai`,1,0)) d , (SUM(`banthang`)-SUM(`banbai`)) as hieuso , SUM(IF(`banthang`>`banbai`,3,IF(`banthang`<`banbai`,0,1))) as diem  FROM cardiff UNION SELECT COUNT(`vong`) st, `logo_doibong` , `doibong`, SUM(IF(`banthang`>`banbai`,1,0)) w , SUM(IF(`banthang`<`banbai`,1,0)) l , SUM(IF(`banthang`=`banbai`,1,0)) d , (SUM(`banthang`)-SUM(`banbai`)) as hieuso , SUM(IF(`banthang`>`banbai`,3,IF(`banthang`<`banbai`,0,1))) as diem  FROM chelsea UNION SELECT COUNT(`vong`) st, `logo_doibong` , `doibong`, SUM(IF(`banthang`>`banbai`,1,0)) w , SUM(IF(`banthang`<`banbai`,1,0)) l , SUM(IF(`banthang`=`banbai`,1,0)) d , (SUM(`banthang`)-SUM(`banbai`)) as hieuso , SUM(IF(`banthang`>`banbai`,3,IF(`banthang`<`banbai`,0,1))) as diem  FROM everton UNION SELECT COUNT(`vong`) st, `logo_doibong` , `doibong`, SUM(IF(`banthang`>`banbai`,1,0)) w , SUM(IF(`banthang`<`banbai`,1,0)) l , SUM(IF(`banthang`=`banbai`,1,0)) d , (SUM(`banthang`)-SUM(`banbai`)) as hieuso , SUM(IF(`banthang`>`banbai`,3,IF(`banthang`<`banbai`,0,1))) as diem  FROM fulham UNION SELECT COUNT(`vong`) st, `logo_doibong` , `doibong`, SUM(IF(`banthang`>`banbai`,1,0)) w , SUM(IF(`banthang`<`banbai`,1,0)) l , SUM(IF(`banthang`=`banbai`,1,0)) d , (SUM(`banthang`)-SUM(`banbai`)) as hieuso , SUM(IF(`banthang`>`banbai`,3,IF(`banthang`<`banbai`,0,1))) as diem  FROM huddersfields UNION SELECT COUNT(`vong`) st, `logo_doibong` , `doibong`, SUM(IF(`banthang`>`banbai`,1,0)) w , SUM(IF(`banthang`<`banbai`,1,0)) l , SUM(IF(`banthang`=`banbai`,1,0)) d , (SUM(`banthang`)-SUM(`banbai`)) as hieuso , SUM(IF(`banthang`>`banbai`,3,IF(`banthang`<`banbai`,0,1))) as diem  FROM leicester UNION SELECT COUNT(`vong`) st, `logo_doibong` , `doibong`, SUM(IF(`banthang`>`banbai`,1,0)) w , SUM(IF(`banthang`<`banbai`,1,0)) l , SUM(IF(`banthang`=`banbai`,1,0)) d , (SUM(`banthang`)-SUM(`banbai`)) as hieuso , SUM(IF(`banthang`>`banbai`,3,IF(`banthang`<`banbai`,0,1))) as diem  FROM liverpool UNION SELECT COUNT(`vong`) st, `logo_doibong` , `doibong`, SUM(IF(`banthang`>`banbai`,1,0)) w , SUM(IF(`banthang`<`banbai`,1,0)) l , SUM(IF(`banthang`=`banbai`,1,0)) d , (SUM(`banthang`)-SUM(`banbai`)) as hieuso , SUM(IF(`banthang`>`banbai`,3,IF(`banthang`<`banbai`,0,1))) as diem  FROM mancity UNION SELECT COUNT(`vong`) st, `logo_doibong` , `doibong`, SUM(IF(`banthang`>`banbai`,1,0)) w , SUM(IF(`banthang`<`banbai`,1,0)) l , SUM(IF(`banthang`=`banbai`,1,0)) d , (SUM(`banthang`)-SUM(`banbai`)) as hieuso , SUM(IF(`banthang`>`banbai`,3,IF(`banthang`<`banbai`,0,1))) as diem  FROM newcastle UNION SELECT COUNT(`vong`) st, `logo_doibong` , `doibong`, SUM(IF(`banthang`>`banbai`,1,0)) w , SUM(IF(`banthang`<`banbai`,1,0)) l , SUM(IF(`banthang`=`banbai`,1,0)) d , (SUM(`banthang`)-SUM(`banbai`)) as hieuso , SUM(IF(`banthang`>`banbai`,3,IF(`banthang`<`banbai`,0,1))) as diem  FROM palace UNION SELECT COUNT(`vong`) st, `logo_doibong` , `doibong`, SUM(IF(`banthang`>`banbai`,1,0)) w , SUM(IF(`banthang`<`banbai`,1,0)) l , SUM(IF(`banthang`=`banbai`,1,0)) d , (SUM(`banthang`)-SUM(`banbai`)) as hieuso , SUM(IF(`banthang`>`banbai`,3,IF(`banthang`<`banbai`,0,1))) as diem  FROM southampton UNION SELECT COUNT(`vong`) st, `logo_doibong` , `doibong`, SUM(IF(`banthang`>`banbai`,1,0)) w , SUM(IF(`banthang`<`banbai`,1,0)) l , SUM(IF(`banthang`=`banbai`,1,0)) d , (SUM(`banthang`)-SUM(`banbai`)) as hieuso , SUM(IF(`banthang`>`banbai`,3,IF(`banthang`<`banbai`,0,1))) as diem  FROM tottenham UNION SELECT COUNT(`vong`) st, `logo_doibong` , `doibong`, SUM(IF(`banthang`>`banbai`,1,0)) w , SUM(IF(`banthang`<`banbai`,1,0)) l , SUM(IF(`banthang`=`banbai`,1,0)) d , (SUM(`banthang`)-SUM(`banbai`)) as hieuso , SUM(IF(`banthang`>`banbai`,3,IF(`banthang`<`banbai`,0,1))) as diem  FROM wolves UNION SELECT COUNT(`vong`) st, `logo_doibong` , `doibong`, SUM(IF(`banthang`>`banbai`,1,0)) w , SUM(IF(`banthang`<`banbai`,1,0)) l , SUM(IF(`banthang`=`banbai`,1,0)) d , (SUM(`banthang`)-SUM(`banbai`)) as hieuso , SUM(IF(`banthang`>`banbai`,3,IF(`banthang`<`banbai`,0,1))) as diem  FROM watford UNION SELECT COUNT(`vong`) st, `logo_doibong` , `doibong`, SUM(IF(`banthang`>`banbai`,1,0)) w , SUM(IF(`banthang`<`banbai`,1,0)) l , SUM(IF(`banthang`=`banbai`,1,0)) d , (SUM(`banthang`)-SUM(`banbai`)) as hieuso , SUM(IF(`banthang`>`banbai`,3,IF(`banthang`<`banbai`,0,1))) as diem  FROM westham ORDER BY `diem`  DESC, hieuso DESC";
  con_anh.query(sql, function(err, result) {
    if (err) throw err;
    res.render('score', {result});
  });
});
router.get('/match.html', function (req, res) {
  var sql = "SELECT * FROM arsenal";
  con_anh.query(sql,function(err, results) {
    if (err) throw err;
    res.render('Thong_ke/match', {results});
  });
});

module.exports = router;