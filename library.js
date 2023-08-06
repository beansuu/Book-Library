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
    pagesInput.value = '';

    displayLibrary();
   }
}
  
function displayLibrary() {
  const bookList = document.querySelector('.book-list');
  bookList.innerHTML = '';

  myLibrary.forEach((book, index) => {
    const bookInfo = document.createElement('div');
    bookInfo.textContent = `${book.title} by ${book.author}, ${book.pages} pages`;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => removeBook(index));

    const toggleButton = document.createElement('button');
    toggleButton.textContent = book.hasRead ? 'Unread' : 'Read';
    toggleButton.addEventListener('click', () => toggleReadStatus(index));

    bookInfo.appendChild(removeButton);
    bookInfo.appendChild(toggleButton);

    bookList.appendChild(bookInfo);
  });
}

function removeBook(index) {
  myLibrary.splice(index, 1);
  displayLibrary();
}

function toggleReadStatus(index) {
  myLibrary[index].hasRead = !myLibrary[index].hasRead;
  displayLibrary();
}


const addButton = document.getElementById('add-book');
addButton.addEventListener('click', addBookToLibrary);

displayLibrary();

  Book.prototype.info = function() {
    const readStatus = this.read ? "read" : "not read yet";
    return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}`;
  };
  
