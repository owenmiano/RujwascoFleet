
module.exports =(Sequelize, DataTypes)=>{
    
    const drivers=Sequelize.define("drivers",{
        driverName:{
           type: DataTypes.STRING,
           allowNull: false,
           unique: true
       } ,
       password:{
        type: DataTypes.STRING,
        allowNull: false,
      
    } ,
    phoneNO:{
        type: DataTypes.STRING,
        allowNull: false,
      
    } ,
    });
    return drivers;
    };
    