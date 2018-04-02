const mongoose=require("mongoose");
const configObj=require("./config")
mongoose.connect(configObj.dbURL);
module.exports=mongoose;
