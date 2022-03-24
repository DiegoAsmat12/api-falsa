const {faker} = require('@faker-js/faker');
const express = require('express');
class Usuario{
    constructor(){
        this._id = faker.datatype.uuid;
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Empresa{
    constructor(){
        this._id=faker.datatype.uuid();
        this.name = faker.company.companyName();
        this.address = {
            street:faker.address.streetName(),
            city:faker.address.cityName(),
            state:faker.address.state(),
            zipCode:faker.address.zipCode(),
            country:faker.address.country()
        }
    }
}

const app = express();



app.get("/api/users/new",(request,response) =>{
    return response.status(200).json(new Usuario());
})

app.get("/api/companies/new", (request,response) =>{
    return response.status(200).json(new Empresa());
})

app.get("/api/user/company", (request,response) =>{
    return response.status(200).json({usuario: new Usuario(), empresa: new Empresa()});
})

app.listen(8080, () =>{
    console.log("Sever iniciado");
})