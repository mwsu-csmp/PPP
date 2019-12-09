// app.js
const mysql = require('mysql');

var donatorSQL = 'INSERT INTO DONATOR SET ?';
var sponsorSQL = 'INSERT INTO SPONSOR SET ?';
var walkerSQL = 'INSERT INTO WALKER SET ?';



// First you need to create a connection to the db
const con = mysql.createConnection({
  host: 'noynaert.cs.missouriwestern.edu',
  user: 'ppp',
  password: 'pppPassword',
  database: 'ppp'
});

con.connect((err) => {
  if(err){
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});

/* con.query('SELECT * FROM DONATOR', (err,rows) => {
    if(err) throw err;
  
    console.log('Data received from Db:\n');
    console.log(rows);
  }); */

/* con.query('INSERT INTO DONATOR SET ?', donator, (err,res) =>{
    if (err) throw err;

    console.log('Insert:', res.insertId);
})  */ 

donatorSubmit();
var donatorSQL = 'INSERT INTO DONATOR SET ?';

function donatorSubmit(){
    var donId = Math.random(10000)*10000;
    var fNameVal = document.getElementById("donFname").value;
    var lNameVal = document.getElementById("donLname").value;
    var pNumVal = document.getElementById("donPhoneNum").value;
    var donEmailVal = document.getElementById("donEmail").value; 
    var donAmtVal = document.getElementById("donAmt").value;

    const donator = {DON_ID: donId ,DONATOR_fName: fNameVal, DONATOR_lName: lNameVal, DONATOR_PhoneNum: pNumVal, DONATOR_Email: donEmailVal,DONATOR_DonationAMT: donAmtVal}


    con.query(donatorSQL, donator, (err,res) =>{
        if (err) throw err;
    
        console.log('Insert:', res.insertId);
    }) 
}; 

con.end((err) => {
  // The connection is terminated gracefully
  // Ensures all previously enqueued queries are still
  // before sending a COM_QUIT packet to the MySQL server.
});