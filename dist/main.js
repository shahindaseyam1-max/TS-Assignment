"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    Id;
    name;
    email;
    Password;
    Phone;
    age;
    notebooks = [];
    constructor(Id, name, email, Password, Phone, age) {
        this.Id = Id;
        this.name = name;
        this.email = email;
        this.Password = Password;
        this.Phone = Phone;
        this.age = age;
        if (age < 18 || age > 60) {
            throw new Error("Age must be between 18 and 60");
        }
    }
    displayInfo() {
        console.log(this.Id, "\n", this.name, "\n", this.email, "\n", this.Phone, "\n", this.age);
    }
    addNotebook(notebook) {
        this.notebooks.push(notebook);
    }
}
class Admin extends User {
    constructor(Id, name, email, Password, Phone, age) {
        super(Id, name, email, Password, Phone, age);
    }
    manageNotes() {
        console.log("Admin is managing notes");
    }
}
class Note {
    Id;
    title;
    content;
    userId;
    constructor(Id, title, content, userId) {
        this.Id = Id;
        this.title = title;
        this.content = content;
        this.userId = userId;
    }
    preview() {
        return this.content.substring(0, 30) + "...";
    }
}
class NoteBook {
    notes = [];
    addNote(Id, title, content, author) {
        const note = new Note(Id, title, content, author);
        this.notes.push(note);
        return this.notes;
    }
    removeNote(Id) {
        const index = this.notes.findIndex(note => note.Id === Id);
        if (index !== -1) {
            this.notes.splice(index, 1);
        }
    }
}
class Storage {
    items = [];
    addItem(item) {
        this.items.push(item);
        return this.items;
    }
    removeItem(item) {
        this.items = this.items.filter(i => i !== item);
        return this.items;
    }
    getAllItems() {
        return this.items;
    }
}
const user1 = new User(1, "Shahinda", "shahinda@example.com", "123456", "01012345678", 22);
const user2 = new User(2, "Ahmed", "ahmed@gmail.com", "123456", "01012345678", 25);
const note1 = new Note(1, "My First Note", "This is my first note in the Simple Notes Management System.", user1);
const notebook = new NoteBook();
notebook.addNote(1, "Study", "Study TypeScript today", user1);
user1.displayInfo();
console.log("------------------------------------------------");
user2.displayInfo();
console.log("------------------------------------------------");
console.log(note1.preview());
console.log("------------------------------------------------");
notebook.removeNote(1);
console.log("------------------------------------------------");
console.log(notebook.addNote(2, "Assignment", "Finish the OOP assignment", user1));
console.log("------------------------------------------------");
const numbers = new Storage();
numbers.addItem(10);
numbers.addItem(20);
numbers.addItem(30);
console.log(numbers.getAllItems());
numbers.removeItem(20);
console.log(numbers.getAllItems());
console.log("------------------------------------------------");
const names = new Storage();
names.addItem("Ahmed");
names.addItem("Sara");
console.log(names.getAllItems());
console.log("------------------------------------------------");
const notesStorage = new Storage();
notesStorage.addItem(note1);
console.log(notesStorage.getAllItems());
console.log("------------------------------------------------");
