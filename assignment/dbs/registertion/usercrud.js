const RegisterUser=require('./registerSchema');
//****************user add*****************************
var RegistrationOperation={
    addUser(userObj , response){
        RegisterUser.create(userObj , function(err,docs){
           
            if(err){
                response.send('something went wrong....')
            }

            else {
                response.status(201).json({
                    status: "201 ",
                    docs: docs
                });
            }
        });
    },

    //whole documents fetch here
    fetchdocs(userObj,response){
       RegisterUser.find({},function(error,docs){
          if(error){
              response.send("some error occured");
          }
            if(docs.length>0){
                response.status(201).json({
                    status: "201 ",
                    docs: docs
                });
            }
        });

   },

   //single user find through id
   fetchSingleUser(userObj,response){
    RegisterUser.find({id:userObj.id},function(error,docs){
       if(error){
           response.send("some error occured");
       }
       if(docs.length>0){
        response.status(200).json({
            status: "200 ",
            docs: docs
        });
     }
     else{
         response.send("Invalid id");
     }
   });

},


//first_name , last_name , age update through id
updateuser(userObj , response){
    console.log("object is " ,userObj);
    RegisterUser.update({id:userObj.id},{ $set: { first_name: userObj.first_name , last_name:userObj.last_name ,age:userObj.age }},function(err ,docs){
        if(err){
            response.send("some error occured");
        }
        else{
            response.send("data updated......")
        }
    });
},

//delete record through id
deleteuser(userObj ,response){
    RegisterUser.findOneAndRemove({id:userObj.id}, function (err, docs) {
        if(err){
            response.send("some error occured");
        }
      else{
        response.status(200).json({
            status: "200 ",
            docs: docs
        });
      }
    });
}
}
module.exports=RegistrationOperation;