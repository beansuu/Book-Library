function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
  
  Book.prototype.info = function() {
    const readStatus = this.read ? "read" : "not read yet";
    return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}`;
  };
  
  // Creating instances of Book
  const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);

  console.log(theHobbit.info())