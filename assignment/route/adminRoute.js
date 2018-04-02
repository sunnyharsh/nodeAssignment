const express=require("express");
const router=express.Router();
const reg=require("../dbs/registertion/usercrud");
var user=require("../model/user");

// user add through api call
router.post("/api", (request , response)=>{
    console.log("i am here3",request.body.users.length);   
 for(let i=0;i<request.body.users.length;i++)
 {
     setInterval(wait,50);
   function wait()
   {
   console.log("id is " , request.body.users[i].id);
    let id=request.body.users[i].id;
    let first_name=request.body.users[i].first_name
       let last_name=request.body.users[i].last_name;
       let company_name=request.body.users[i].company_name;
       let age=request.body.users[i].age;
       let city=request.body.users[i].city;
       let state=request.body.users[i].state;
       let zip=request.body.users[i].zip;
       let email=request.body.users[i].email;
       let web=request.body.users[i].web;
       let userObj=new user(id,first_name,last_name,company_name,city,state,zip,email,web,age);
        reg.addUser(userObj,response);
        console.log(i);
   }
 }
 
});

//new user add through registration
router.post('/register' ,(request , response)=>{
    var id= request.body.id;
    var first_name=request.body.first_name
    var last_name=request.body.last_name;
    var company_name=request.body.company_name;
    var city=request.body.city;
    var state=request.body.state;
    var zip=request.body.zip;
    var email=request.body.email;
    var web=request.body.web;
    var age=request.body.age;
    let userObj=new user(id,first_name,last_name,company_name,city,state,zip,email,web,age);
    reg.addUser(userObj,response);
})


//whole documents fetch here
router.get("/docs" ,(request,response)=>{
    const search=require("../dbs/registertion/usercrud");
    search.fetchdocs({},response);
})

//single user find through id
router.get('/find' ,(request,response)=>{
    let id= request.query.id;
    var searchUser=require('../model/search')
    var obj=new searchUser(id);
    reg.fetchSingleUser(obj , response);

})
//first_name , last_name , age update through id
router.post("/update" , (request , response)=>{
    var id= request.body.id;
    var first_name=request.body.first_name;
    var last_name=request.body.last_name;
    var age=request.body.age;
    var updateUser=require('../model/update');
    var updateObj=new updateUser(id , first_name, last_name, age);
    const update=require('../dbs/registertion/usercrud');
    update.updateuser(updateObj ,response);
})


//delete record through id
router.post("/delete" ,(request,response)=>{
    var id=request.body.id;
    var deleteUser=require('../model/search');
    var obj=new deleteUser(id);
    var deleteOpr=require('../dbs/registertion/usercrud');
    deleteOpr.deleteuser(obj ,response);
})

module.exports=router;