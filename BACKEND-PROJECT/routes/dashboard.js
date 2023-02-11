const express = require('express');
const connection = require('../connection');
const router = express.Router();
var auth = require('../services/authentication');



router.get('/details',auth.authenticateToken,(req,res,next)=>{
    var leverancierCount;
    var klantCount;
    var userCount;

    var query = "select count(id) as leverancierCount from leverancier";
    connection.query(query,(err,results)=>{
        if(!err){
            leverancierCount = results[0].leverancierCount;
        }else{
            return res.status(500).json(err);
        }
    })

    var query = "select count(id) as klantCount from klant";
    connection.query(query,(err,results)=>{
        if(!err){
            klantCount = results[0].klantCount;
        }else{
            return res.status(500).json(err);
        }
    })


    var query = "select count(id) as userCount from user";
    connection.query(query,(err,results)=>{
        if(!err){
            userCount = results[0].userCount;
            var data = {
                Leverancier: leverancierCount,
                Klant: klantCount,
                User: userCount
            };
            return res.status(200).json(data);
        }else{
            return res.status(500).json(err);
        }
    })
})

module.exports = router;