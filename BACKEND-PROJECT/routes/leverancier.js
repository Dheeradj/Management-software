const express = require('express');
const { request } = require('..');
const connection = require('../connection');
const router = express.Router();
var auth = require('../services/authentication');
var checkRole = require('../services/checkRole');

router.post('/add',auth.authenticateToken,checkRole.checkRole,(req,res)=>{
    let leverancier = req.body;
    var query = "insert into leverancier (bedrijfsnaam, adress, district, directeur, telefoonnummer, website, status) values (?,?,?,?,?,?,'true')";
    connection.query(query,[leverancier.bedrijfsnaam,leverancier.adress,leverancier.district, leverancier.directeur, leverancier.telefoonnummer,leverancier.website],(err,results)=>{
        if(!err){
            return res.status(200).json({message:"Leverancier added succesfully"});
        }
        else{
            return res.status(500).json(err);
        }
    })
})

router.get('/get',auth.authenticateToken,(req,res,next)=>{
    var query = "select id,bedrijfsnaam,adress,district,directeur,telefoonnummer,website,status from leverancier";
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
    var query = "select bedrijfsnaam,adress,district,directeur,telefoonnummer,website from leverancier where id=?";
    connection.query(query,[id],(err,results)=>{
        if(!err){
            return res.status(200).json(results[0]);
        }
        else{
            return res.status(500).json(err);
        }
    })
})

router.patch('/update/',auth.authenticateToken,checkRole.checkRole,(req,res,next)=>{
    let leverancier = req.body;
    var query = "update leverancier set bedrijfsnaam=?,adress=?,district=?,directeur=?,telefoonnummer=?,website=? where id=?";
    connection.query(query,[leverancier.bedrijfsnaam,leverancier.adress,leverancier.district,leverancier.directeur,leverancier.telefoonnummer,leverancier.website,leverancier.id],(err,results)=>{
        if(!err){
            if(results.affectedRows == 0){
                return res.status(404).json({message:"Leverancier not found"});
            }
            return res.status(200).json({message:"Leverancier updated succesfully"});
        }
        else{
            return res.status(500).json(err);
        }
    })
})

router.delete('/delete/:id',auth.authenticateToken,checkRole.checkRole,(req,res,next)=>{
    const id =req.params.id;
    var query = "delete from leverancier where id=?";
    connection.query(query,[id],(err,results)=>{
        if(!err){
            if(results.affectedRows == 0){
                return res.status(400).json({message:"Leverancier not found"});
            }
            return res.status(200).json({message:"Leverancier deleted succesfully"});
        }else{
            return res.status(500).json(err);
        }
    })
})

router.patch('/updateStatus',auth.authenticateToken,checkRole.checkRole,(req,res,next)=>{
    let leverancier = req.body;
    var query = "update leverancier set status=? where id=?";
    connection.query(query,[leverancier.status,leverancier.id],(err,results)=>{
        if(!err){
            if(results.affectedRows == 0){
                return res.status(404).json({message:"Leverancier id not found"});
            }
            return res.status(200).json({message:"Leverancier status updated succesfully"});
        }
        else{
            return res.status(500).json(err);
        }
    })
})

module.exports = router;