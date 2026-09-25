const { log } = require("console");

class Account{

    contactName:string
    contactNumber:string
    //companyName:string

    constructor(contactName:string,contactNumber:string){
        this.contactName=contactName;
        this.contactNumber=contactNumber;
    }

    printDetails(){
        console.log('contact Name',this.contactName);
        console.log('contact Number',this.contactNumber);
    }

}

const ac1 = new Account('Raj','21095500');
ac1.printDetails();