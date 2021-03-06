
module.exports =(Sequelize, DataTypes)=>{
    
    const Bookings=Sequelize.define("Bookings",{
        EmployeedeviceID:{
            type: DataTypes.STRING,
            allowNull: false,
        } ,
        EmployeeName:{
           type: DataTypes.STRING,
           allowNull: false,
       } ,
       destination:{
        type: DataTypes.STRING,
        allowNull: false,
      
    } ,
    purpose:{
        type: DataTypes.STRING,
        allowNull: false,
      
    } ,
    AssignmentStatus:{
        type: DataTypes.STRING,
        defaultValue:'Pending'
    } ,
    driverId:{
       type:DataTypes.INTEGER,
  
    },
    phoneNo:{
        type: DataTypes.STRING,

    },
    VehicleName:{
        type: DataTypes.STRING,
      
    } ,
    RegNo:{
        type: DataTypes.STRING,
      
    } ,
    
});
Bookings.associate=models=>{
    Bookings.belongsTo(models.drivers,{
        foreignKey:{
            allowNull:true
        }
    })
}
return Bookings;
}