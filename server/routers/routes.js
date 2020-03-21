const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const User = require('../connection/conn');


const db = "mongodb+srv://Akash:root@cluster1-cl1b6.mongodb.net/customerDetails";


mongoose.Promise = global.Promise;
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true,useFindAndModify:false },function(err){
    if(err){
        console.error("Error! " + err);
    }
    else{
        console.log("connection successful...");
    }
});


router.post('/customer-ins',function(req,res){

    console.log('inserting data..');
    console.log(req.baseUrl);
    console.log(req.body);
     var user_instance = new User({ "firstName": req.body.firstName, "lastName": req.body.LastName, "email":req.body.email,"address":req.body.address,"city":req.body.city,"state":req.body.state});

    user_instance.save(function (err) {
        if (err) return handleError(err);
  
        else console.log("successfully inserted");
      });
    
     res.send(JSON.stringify("Succesfully registered"));

});


router.get('/customer-get',function(req,res){

    console.log('Retriving data..');

    User.find({}).exec(function (err,result){
        if(err)
        res.send("Failed to retrive..");
        else
        res.send(result);
    });

});


router.get('/customer-profile/:id',function(req,res){

    console.log('Retriving customer profile data..');
    const id=req.params.id;
    User.findOne({_id:id}).exec(function (err,result){
        if(err)
        res.send("Failed to retrive..");
        else
        res.send(result);
    });

});


router.put('/customer-update',function(req,res){
    console.log(req.body);
    console.log('updating data..');
    console.log(req.body.id);
   
     User.findOneAndUpdate({_id:req.body.id},{$set:{ "firstName": req.body.firstName, "lastName": req.body.lastName, "email":req.body.email,"address":req.body.address,"city":req.body.city,"state":req.body.state}},function (err,result) {
        if (err) return handleError(err);
        else
        res.send(JSON.stringify(result));
      });
    
    

});




router.delete('/customer-delete/:id',function(req,res){
    console.log('Deleting data..');
    console.log(req.params.id);
   
     User.findOneAndRemove({_id:req.params.id},function (err,result) {
        if (err) return handleError(err);
        else
        res.send(JSON.stringify(result));
      });
    
    

});


router.get('/customer-search/:name',function(req,res){

    console.log('Retriving search profile data..');
    const name=req.params.name;
    User.findOne({firstname:name}).exec(function (err,result){
        if(err)
        res.send("Failed to retrive..");
        else
        res.send(result);
    });

});


module.exports=router;
