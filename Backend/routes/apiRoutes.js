const express =require("express");
const res = require("express/lib/response");
const router=express.Router();
const db = require("../models");

/// add vehicle
router.post("/addVehicle",(req,res) =>{
    db.Vehicles.create({
        VehicleName: req.body.VehicleName,
        VehicleType: req.body.VehicleType,
        RegNo: req.body.RegNo,
        driverId:req.body.driverId
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


router.post("/addBooking",(req,res)=>{
    db.Bookings.create({
        EmployeeName: req.body.EmployeeName,
        destination: req.body.destination,
        purpose: req.body.purpose


    }).then(submittedDetails=>res.send("Booking has been added successfully"))
});

//get All drivers 
router.get("/allDrivers",(req,res)=>{
    db.drivers.findAll({
        include: [{
            model: db.Vehicles,
           
              attributes: ['vehicleName','vehicleType','RegNo']
            
          }]
    }).then(allDrivers=>res.send(allDrivers))
});


//get all Vehicles
router.get("/allVehicles",(req,res)=>{
    db.Vehicles.findAll({
        include: [{
            model: db.drivers,
           
              attributes: ['driverName','phoneNO',]
            
          }]
        }).then(allVehicles=>res.send(allVehicles))
    });


    router.get("/allBookings",(req,res)=>{
        db.Bookings.findAll({
            
            }).then(allBookings=>res.send(allBookings))
        });
    

        
    router.get("/GroupedBookings",(req,res)=>{
        db.Bookings.findAll({
            group: ['destination']
            }).then(GroupedBookings=>res.send(GroupedBookings))
        });
       

module.exports= router