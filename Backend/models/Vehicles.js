
module.exports =(Sequelize, DataTypes)=>{
    
    const Vehicles=Sequelize.define("Vehicles",{
        VehicleName:{
           type: DataTypes.STRING,
           allowNull: false,
         
       } ,
       VehicleType:{
        type: DataTypes.STRING,
        allowNull: false,
        
    } ,
    RegNo:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    } ,
    });
    return Vehicles;
    };
    