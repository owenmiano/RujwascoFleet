const express =require("express");
const res = require("express/lib/response");
const router=express.Router();
const db = require("../models");

/// add vehicle
router.post("/addVehicle",(req,res) =>{
    db.Vehicles.create({
        VehicleName: req.body.VehicleName,
        VehicleType: req.body.VehicleType,
        RegNo: req.body.RegNo
        
 }).then(submittedDetails=> res.send("Vehicle has been added successfully!!"));

});

//add  driver
router.post("/addDriver",(req,res)=>{
    db.drivers.create({
        driverName: req.body.driverName,
        password: req.body.password,
        phoneNO: req.body.phoneNO
    }).then(submittedDetails=>res.send("Driver profile has been added successfully"))
});



module.exports= router