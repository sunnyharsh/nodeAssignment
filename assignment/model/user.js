class User{
    constructor(id,first_name,last_name,company_name,city,state,zip,email,web,age){
        this.id=id;
        this.first_name=first_name;
        this.last_name=last_name;
        this.company_name=company_name;
        this.city=city;
        this.state=state;
        this.zip=zip;
        this.email=email;
        this.web=web;
        this.age=age;
    }
}
module.exports=User;
