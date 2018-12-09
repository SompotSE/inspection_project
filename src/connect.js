//Connect database
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345678",
  database: "inspection"
});

con.connect(function (err) {
  if (err) throw err;
  console.log("connected!");

  //Insert
  //  sql="insert into user (Email,Password) values('User1','1000')";
  // con.query(sql, function(err, result){
  //   if (err) throw err;
  //   console.log("Insert Complete");
  // });


  //show
  // sql="select Email,Password from user";
  // con.query(sql, function(err, result){
  //   if (err) throw err;
  //   console.log(result);

  //delete
  // sql = "delete from user where id=1";
  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log("Delete complete");
  // });

  //update
  sql = "update user set Email='Usertest' where id=1";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Update complete");
  });
});