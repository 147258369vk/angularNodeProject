var express = require('express');

var myctrl = require('../controller/userController');
var jwt=require('../config/jwtHelper');
var approute=express.Router();

approute.post('/newUser',myctrl.addnew);
approute.get('/allusers',myctrl.getAll);
approute.get('/selectRecord/:userid',myctrl.selectedData);
approute.put('/updateRecord/:id',myctrl.updatedData);

//register

approute.post('/reg',myctrl.registerData);


//admin

approute.post('/admin',myctrl.addAdmin);
approute.post('/auth',myctrl.authenticate);
approute.get('/profile',jwt.verifyJwtToken,myctrl.userProfile);
approute.get('/userinfo/:x',myctrl.selectedUser);


approute.post('/addproduct',myctrl.addnewproduct);
approute.get('/displayproduct/:userid',myctrl.displayproduct);
approute.get('/file',myctrl.displayfile);
approute.post('/imageupload/:productid',myctrl.uploadImage);


module.exports = approute;

