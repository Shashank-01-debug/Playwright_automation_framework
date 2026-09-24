import { customerInfo } from "./customerInfo.type";
import { faker } from "@faker-js/faker";

export function createFakeCustomerData():customerInfo{

    return{

        title:'Mr. ',
    firstName:faker.person.firstName(),
    lastName:faker.person.lastName(),
    emailAddress:faker.internet.email(),
    password:'12345',
    date:'11',
    month:'12',
    year:'2015'

    }
}