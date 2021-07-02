const express = require('express');
const router = express.Router();

const MysqlConection = require('../database');

router.get('/', (req, res)=>{
    MysqlConection.query('SELECT * FROM employes', (err,rows,fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });

});

router.get('/:id',(req,res)=>{
    const {id} = req.params;
    MysqlConection.query('SELECT * FROM employes WHERE id = ?', [id], (err,rows,fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });

});



module.exports = router;
