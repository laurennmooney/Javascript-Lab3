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
    displayContact() {
        document.querySelector(".contact_cards").innerHTML = "";
        addressBook.contacts.forEach(person => {
            const contact = document.createElement("div");
            contact.setAttribute("class","card")
            contact.innerHTML = `
                <p>Name: ${person.name}</p>
                <p>Email: ${person.email}</p>
                <p>Phone: ${person.phone}</p>
                <p>Relation: ${person.relation}</p>
                <button class="delete_btn"><i class="fas fa-trash"></i></button>
            `;
            document.querySelector(".contact_cards").append(contact);
        });
    }
    deleteAt() {

    }
}





const addressBook = new AddressBook();

// to submit the contact
function handleSubmit(event) {
    event.preventDefault();
    console.log("This form has been submitted");
    addressBook.add(event.target[0].value, event.target[1].value, event.target[2].value, event.target[3].value);
    addressBook.displayContact();
}

document.querySelector("form").addEventListener("submit", handleSubmit);