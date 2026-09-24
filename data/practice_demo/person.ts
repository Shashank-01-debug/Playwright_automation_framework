const { log } = require("console");

class Person{
    name:string
    contactNumber:string

    constructor(name:string,contactNumber:string) {

        this.name=name;
        this.contactNumber=contactNumber;
        
    }

printDetails(){
    console.log('Name',this.name);
    console.log('ContactNumber',this.contactNumber);
    
    
}

}

const p1=new Person('shashank','9999990000');
p1.printDetails();