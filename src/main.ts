class User {
    public notebooks: NoteBook[] = [];
    
    constructor(
        public Id: number,
        public name: string,
        public email: string,
        private Password: string,
        protected Phone: string,
        public age: number
    ) {
        if (age < 18 || age > 60) {
            throw new Error("Age must be between 18 and 60");
        }
    }

    public displayInfo(): void {
        console.log(this.Id,"\n",this.name,"\n", this.email,"\n", this.Phone,"\n", this.age);
    }

    public addNotebook(notebook: NoteBook): void {
        this.notebooks.push(notebook);
    }
}
//--------------------------------------------------------------------
class Admin extends User {
    constructor(
        Id: number,
        name: string,
        email: string,
        Password: string,
        Phone: string,
        age: number
    ) {
        super(Id, name, email, Password, Phone, age);
    }
    public manageNotes(): void {
        console.log("Admin is managing notes");
    }
}
//--------------------------------------------------------------------
class Note {
    constructor(
        public Id: number,
        public title: string,
        public content: string,
        public userId: User
    ) {}

    public preview(): string {
        return this.content.substring(0, 30) + "...";
    }
}

//--------------------------------------------------------------------

class NoteBook {
    private notes: Note[] = [];

    public addNote(
        Id: number,
        title: string,
        content: string,
        author: User
    ): Note[] {
        const note = new Note(Id, title, content, author);
        this.notes.push(note);
        return this.notes; 
    }

    public removeNote(Id: number): void {
        const index = this.notes.findIndex(
            note => note.Id === Id
        );
        
        if (index !== -1) {
            this.notes.splice(index, 1);
        }
    }
}
//--------------------------------------------------------------------

class Storage<T> {
    private items: T[] = [];

    public addItem(item: T): T[] {
        this.items.push(item);
        return this.items;
    }

    public removeItem(item: T): T[] {
        this.items = this.items.filter(i => i !== item);
        return this.items;
    }

    public getAllItems(): T[] {
        return this.items;
    }
}

//--------------------------------------------------------------------

// Example
const user1 = new User(
    1,
    "Shahinda",
    "shahinda@example.com",
    "123456",
    "01012345678",
    22
);

const user2 = new User(
    2,
    "Ahmed",
    "ahmed@gmail.com",
    "123456",
    "01012345678",
    25
); 

const note1 = new Note(
    1,
    "My First Note",
    "This is my first note in the Simple Notes Management System.",
    user1
);

const notebook = new NoteBook();

notebook.addNote(
    1,
    "Study",
    "Study TypeScript today",
    user1
);


user1.displayInfo();
console.log("------------------------------------------------")

user2.displayInfo();
console.log("------------------------------------------------")

console.log(note1.preview());

console.log("------------------------------------------------")
notebook.removeNote(1);
console.log("------------------------------------------------")
console.log(notebook.addNote(
    2,
    "Assignment",
    "Finish the OOP assignment",
    user1
))
console.log("------------------------------------------------")
const numbers = new Storage<number>();

numbers.addItem(10);
numbers.addItem(20);
numbers.addItem(30);

console.log(numbers.getAllItems()); // [10, 20, 30]

numbers.removeItem(20);

console.log(numbers.getAllItems()); // [10, 30]

console.log("------------------------------------------------")
const names = new Storage<string>();

names.addItem("Ahmed");
names.addItem("Sara");

console.log(names.getAllItems()); // ["Ahmed", "Sara"]

console.log("------------------------------------------------")
const notesStorage = new Storage<Note>();

notesStorage.addItem(note1);

console.log(notesStorage.getAllItems());

console.log("------------------------------------------------")
