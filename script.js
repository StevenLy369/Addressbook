"use strict";
window.onload = function () {

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
      this.contacts = [
        new Contact("Snoopy", "snoopy@cooldog.com", "111-222-3333", "my dog"),
        new Contact("Porkchop", "porkchop@doug.com", "333-555-9999", "a cool friend"),
        new Contact("Porkchopa", "porkchop@doug.com", "333-555-9999", "a cool friend")
      ];
    }
    add(info) {
      this.contacts.push(info);
    }
    deleteAt(index) {
      this.contacts.splice(index, 1);
    }
    print() {
      for (let i = 0; i < this.contacts.length; i++) {
        console.log(`Index: ${i}, Name: ${this.contacts[i].name}, Email: ${this.contacts[i].email}, Phone: ${this.contacts[i].phone}, Relation: ${this.contacts[i].relation}`);
      }
    }
  }

  const book = new AddressBook();

  const main = document.querySelector("body");

  main.addEventListener("click", function (event) {
    event.preventDefault();
    if (event.target.classList.contains("addButton")) {
      var selector = document.getElementById("relationSelector");
      book.add(new Contact(document.getElementById("nameInput").value,
        document.getElementById("emailInput").value,
        document.getElementById("phoneInput").value,
        selector.options[selector.selectedIndex].text))
      display();
    } else if (event.target.classList.contains("remove__btn")) {
      book.deleteAt(event.target.getAttribute("i").value)
      display();
    }
  });

  function display() {
    for (let element of document.querySelectorAll("li")) {
      element.remove();
    }

    for (let person in book.contacts) {
      const el = document.createElement("li");
      el.innerHTML = `
    <p>Name: ${book.contacts[person].name} | Email: ${book.contacts[person].email}</p>
    <button class="remove__btn" i="${person}" >Remove Person</button>
    `;
      document.querySelector("ul.contact__list").append(el);
    }
  }
  display();
}
 

// while (true) {
//   let choice = prompt("Add, Delete, Print, or Quit?");
//   if (choice === "Quit") {
//     console.log("Goodbye.");
//     break;
//   } else if (choice === "Print") {
//     book.print();
//   } else if (choice === "Delete") {
//     let deleteChoice = prompt("Delete by index or by name?");
//     if (deleteChoice === "Name") {
//       book.deleteByName(prompt("Enter a name."));
//     } else if (deleteChoice === "Index") {
//       book.deleteAt(prompt("Index to delete?"));
//     }
//   } else if (choice === "Add") {
//     book.add(new Contact(
//       prompt("Enter a name."),
//       prompt("Enter an email."),
//       prompt("Enter a phone number."),
//       prompt("Enter a relation.")
//     ));
//   }
// }
