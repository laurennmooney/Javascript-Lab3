"use strict";

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
            // returns the contact with the name that matches the name passed though the method
        });
        // this function will return -1 if the contact is not found, so you need to make sure that index 
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
addressBook.add("Pam Mooney", "@gmail.com","313","mother");
addressBook.add("Dan Mooney","@aol.com","313","father");
addressBook.add("Garrett Mooney","@gmail.com","313","brother");
addressBook.print();
addressBook.add("Patricia Wright","n/a","734","grandma");
addressBook.delete("Patricia Wright");
addressBook.print();


