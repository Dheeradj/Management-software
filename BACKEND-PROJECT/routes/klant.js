const express = require('express');
const { request } = require('..');
const connection = require('../connection');
const router = express.Router();
var auth = require('../services/authentication');
var checkRole = require('../services/checkRole');

router.post('/add',auth.authenticateToken,checkRole.checkRole,(req,res)=>{
    let klant = req.body;
    var query = "insert into klant (voornaam,achternaam,geslacht,adressennummer,district,telefoonnummer,email,status) values(?,?,?,?,?,?,?,'true')";
    connection.query(query,[klant.voornaam,klant.achternaam,klant.geslacht,klant.adressennummer,klant.district,klant.telefoonnummer,klant.email],(err,results)=>{
        if(!err){
            return res.status(200).json({message:"Klant added succesfully"});
        }else{
            return res.status(500).json(err);
        }
    })
})

router.get('/get',auth.authenticateToken,(req,res,next)=>{
    var query = "select id,voornaam,achternaam,geslacht,adressennummer,district,telefoonnummer,email from klant";
    connection.query(query,(err,results)=>{
        if(!err){
            return res.status(200).json(results);
        }
        else{
            return res.status(500).json(err);
        }
    })
})

router.get('/getById/:id',auth.authenticateToken,(req,res,next)=>{
    const id = req.params.id;
    var query = "select voornaam,achternaam,geslacht,adressennummer,district,telefoonnummer,email from klant where id=?";
    connection.query(query,[id],(err,results)=>{
        if(!err){
            return res.status(200).json(results[0]);
        }
        else{
            return res.status(500).json(err);
        }
    })
})

router.patch('/update',auth.authenticateToken,checkRole.checkRole,(req,res,next)=>{
    let klant = req.body;
    var query = "update klant set voornaam=?,achternaam=?,geslacht=?,adressennummer=?,district=?,telefoonnummer=?,email=? where id=?";
    connection.query(query,[klant.voornaam,klant.achternaam,klant.geslacht,klant.adressennummer,klant.district,klant.telefoonnummer,klant.email,klant.id],(err,results)=>{
        if(!err){
            if(results.affectedRows == 0){
                return res.status(404).json({message:"Klant id not found"});
            }
            return res.status(200).json({message:"Klant updated succesfully"});
        }
        else{
            return res.status(500).json(err);
        }
    })
})

router.delete('/delete/:id',auth.authenticateToken,checkRole.checkRole,(req,res,next)=>{
    const id =req.params.id;
    var query = "delete from klant where id=?";
    connection.query(query,[id],(err,results)=>{
        if(!err){
            if(results.affectedRows == 0){
                return res.status(400).json({message:"Klant not found"});
            }
            return res.status(200).json({message:"Klant deleted succesfully"});
        }else{
            return res.status(500).json(err);
        }
    })
})

router.patch('/updateStatus',auth.authenticateToken,checkRole.checkRole,(req,res,next)=>{
    let klant = req.body;
    var query = "update klant set status=? where id=?";
    connection.query(query,[klant.status,klant.id],(err,results)=>{
        if(!err){
            if(results.affectedRows == 0){
                return res.status(404).json({message:"Klant id not found"});
            }
            return res.status(200).json({message:"Klant status updated succesfully"});
        }
        else{
            return res.status(500).json(err);
        }
    })
})
module.exports = router;