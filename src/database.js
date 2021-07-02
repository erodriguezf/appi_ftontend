const mysql = require('mysql');

const mysqlconection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'company'
})

mysqlconection.connect( function (err){

    if(err){
       console.log(err);
       return;
    }else{
        console.log('Db is conecting')
    }

});

module.exports = mysqlconection;
