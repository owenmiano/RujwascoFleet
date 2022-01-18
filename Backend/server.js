const express=require('express');
const app=express();
var cors = require('cors')
const router=express.Router();


const db=require("./models");
const PORT= process.env.PORT || 4012;
app.use(cors())
  app.use(express.urlencoded({extended: true}));
  app.use(express.json());

  const apiRoutes=require("./routes/apiRoutes");
  app.use("/api", apiRoutes);

  db.sequelize.sync().then(()=>{
    app.listen(PORT,()=>{
        console.log(`listening on http://localhost:${PORT}`);
    });
});
module.exports= router

