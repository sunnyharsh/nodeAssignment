const connection=require("../connection/connection");
const Schema=connection.Schema;
const registrationSchema=new Schema({
   id:{type: String , unique:true },
   first_name:String,
   last_name:String,
   company_name:String,
   city:String,
   state:String,
   zip:String,
   email:String,
   web:String,
   age:String
});
var regModel=connection.model("registerUser",registrationSchema);
module.exports=regModel;

