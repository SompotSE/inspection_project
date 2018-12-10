import React, { Component } from 'react'

var mysql = require('mysql');
var con = mysql.createConnection({
    host: "192.168.33.10",
    user: "root",
    password: "manager",
    database: "inspection"
});
var lat = [];
var long = [];
con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("SELECT latitude FROM location", function (err, latitude) {
        if (err) throw err;
        {
            for (var i = 0; i < 5; i++) {
                console.log(latitude[i]);
                lat[i] = latitude[i];
            }
        }
    });
    con.query("SELECT longitude FROM location", function (err, longitude) {
        if (err) throw err;
        {
            for (var i = 0; i < 5; i++) {
                console.log(longitude[i]);
                long[i] = longitude[i];
            }
        }
    });
});

class connect extends Component{
    reader() {
        return <p>{lat[1]} +++ {long[1]}</p>
    }
}

export default connect