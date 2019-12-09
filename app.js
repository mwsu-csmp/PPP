// app.js
const mysql = require('mysql');

//Donator insert frame
const donator = {DONATOR_fName: 'fName', DONATOR_lName: 'lName', DONATOR_PhoneNum: 'pNum', DONATOR_Email: 'email',DONATOR_DonationAMT: 'amt'}




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

con.query('SELECT * FROM DONATOR', (err,rows) => {
    if(err) throw err;
  
    console.log('Data received from Db:\n');
    console.log(rows);
  });

con.query('INSERT INTO DONATOR SET ?', donator, (err,res) =>{
    if (err) throw err;

    console.log('Insert:', res.insertId);
})  

con.end((err) => {
  // The connection is terminated gracefully
  // Ensures all previously enqueued queries are still
  // before sending a COM_QUIT packet to the MySQL server.
});