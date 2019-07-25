class Contact {
    constructor(name, email, phone, relation) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.relation = relation;
    }
}

class AddressBook {
    constructor() {
        this.contacts = [];
    }
    add(name, email, phone, relation) {
        // makes new Contact instance and adds to AddressBook's contacts
        let newContact = new Contact(name, email, phone, relation);
        // declare and initialize the variable newContact as a new instance of class Contact
        this.contacts.push(newContact);
        // pushes newContact to the empty contact array
    }
    delete(name) {
        // removes a contact based on the provided name
        const index = this.contacts.findIndex(contact => {
            return contact.name === name;
        });
        if (index >= 0) {
            this.contacts.splice(index, 1);
        }
    }
    print() {
        // prints each contact to console
        this.contacts.forEach(contact => {
            console.log(contact);
        });
    }
}



const addressBook = new AddressBook();
addressBook.add("Pam Mooney","pmooney@gmail.com","313-282-8857","mother");
// addressBook.add("Dan Mooney","cumbersome66@aol.com","313-318-6923","father");
// // addressBook.print();
// addressBook.delete("Garrett Mooney");
// // addressBook.print();
// addressBook.add("Jeremy Daley","93daley.gmail.com","734-363-5084","boyfriend");
// addressBook.add("Patricia Wright","n/a","734-282-6799","grandma");
// // addressBook.print();
// addressBook.add("Garrett Mooney","garrettmooney@gmail.com","313-580-4399","brother");
// addressBook.print();
// console.log(addressBook.contacts);
// addressBook.delete("Patricia Wright");
// addressBook.print();
addressBook.print();


