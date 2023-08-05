let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  };


function addBookToLibrary() {
   const titleInput = document.getElementById('title');
   const authorInput = document.getElementById('author');
   const pagesInput = document.getElementById('pages');
   
   const title = titleInput.value;
   const author = authorInput.value;
   const pages = pagesInput.value;

   if (title && author && pages) {
    const newBook = new Book(title, author, pages);
    myLibrary.push(newBook);

    titleInput.value = '';
    authorInput.value = '';

    displayLibrary();
   }
}
  
function displayLibrary() {
  const bookList = document.querySelector('.book-list');
  bookList.innerHTML = '';

  myLibrary.forEach(book => {
    const bookInfo = document.createElement('div');
    bookInfo.textContent = `${book.title} by ${book.author} ${book.pages} pages long`;
    bookList.appendChild(bookInfo);
  })
}

const addButton = document.getElementById('add-book');
addButton.addEventListener('click', addBookToLibrary);

displayLibrary();

  Book.prototype.info = function() {
    const readStatus = this.read ? "read" : "not read yet";
    return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}`;
  };
  
