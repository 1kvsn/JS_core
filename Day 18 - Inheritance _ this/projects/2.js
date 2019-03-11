// The Cat

// Create an object that represents a cat. It should have properties for tiredness, hunger, lonliness and happiness
// Write methods that increase and decrease those properties.
// Write a method that prints out the cat's status in each area. (Be creative e.g. Paws is really hungry, Paws is VERY happy.)
// Make the functions take arguments that increase or decrease arbitrary amounts

var OnlyCat = function(name, tiredness, hunger, loneliness, happiness) {
  this.name = name;
  this.tiredness = tiredness;
  this.hunger = hunger;
  this.loneliness = loneliness;
  this.happiness = happiness;

  this.sayTiredness = function() {
    leveltired = this.tiredness;
    return `${this.name} is ${leveltired} percent tired`;
  };
  this.sayhunger = function() {
    return `${this.name} is ${this.hunger++} percent hungry.`
  };
  this.sayloneliness = function() {
    return `${this.name} is ${this.loneliness++} percent lonely.`
  };
  this.sayhappiness = function() {
    return `${this.name} is ${this.happy++} percent happy.`
  }
}

const cat = new OnlyCat('very', 'not much', 'not at all', 'very much');
console.log(cat);

// 2nd
// An object-oriented book-list!

// Create a class BookList
// Create another class called Book

// BookLists should have the following properties:
  // 1. Number of books marked as read
  // 2. Number of books marked not read yet
  // 3. A reference to the next book to read (book object)
  // 4. A reference to the current book being read (book object)
  // 5. A reference to the last book read (book object)
  // 6. An array of all the Books

// Each Book should have several properties:
  // Title
  // Genre
  // Author
  // Read (true or false)
  // Read date, can be blank, otherwise needs to be a JS Date() object


// Every Booklist should have a few methods:
// .add(book)
  // should add a book to the books list.

// .finishCurrentBook()
  // should mark the book that is currently being read as "read"
  // Give it a read date of new Date(Date.now())
  // Change the last book read to be the book that just got finished
  // Change the current book to be the next book to be read
  // Change the next book to be read property to be the first unread book you find in the list of books

  class BookList {
    constructor(markedRead, markedUnread, toRead, currentRead, lastBook, array) {
      this.markedRead = markedRead;
      this.markedUnread = markedUnread;
      this.toRead = toRead;
      this.currentRead = currentRead;
      this.lastBook = lastBook;
      this.array = [];
    }
    addBook(newBook) {
      return this.array.push(newBook);
    }
    changeNext(nextBook) {
      for (let i=0; i<=this.array.length; i++) {
        if( this.array[i].read === false ) {
          if ( this.array[i] === this.currentRead) {
            continue;
          } 
          else {
            this.nextBook = this.array[i];
            break;
          }
        }
      }
    }

    finishCurrentBook() {
      this.currentRead.read = true;
      this.markedRead++;
      this.markedUnread--;
      this.lastBook = currentRead;
      this.currentRead.readDate = new Date();
      this.currentRead = this.toRead;
      this.changeNext();
    }
  }

  class Book extends BookList {
    constructor (title, genre, author, read, readDate) {
      super(title, genre, author, read, readDate);
      this.title = title;
      this.genre = genre;
      this.author = author;
      this.read = false;
      this.readDate = new Date();
    }
    ifRead(readStatus) {
      this.read = readStatus;
    }
  }

  const listOfBooks = ['Harry Potter iV', 'Dance with the Devil', 'You Dont Know JS', 'Beyond Sunshine']
  const booklist1 = new BookList(1, 2, 'Dance with the Devil', 'Harry Potter iV', 'You Dont Know JS', listOfBooks)

  const book1 = new Book('Harry Potter iV', 'Fantasy-Fiction', 'JKR', false, new Date());
  const book2 = new Book('Dance with the Devil', 'Fantasy-Fiction', 'Nair', true, new Date());
  const book3 = new Book('You Dont Know JS', 'Programming', 'Kyle Simpson', false);
  const book4 = new Book('Beyond Sunshine', 'Personality Development', 'Srijan Banarasi', false);

  console.log(book1, book2, book3, book4);
