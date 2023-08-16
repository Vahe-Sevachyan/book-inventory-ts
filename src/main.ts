const modal = document.querySelector(".modal") as HTMLElement;
const createBookBtn = document.querySelector(".create-book-btn") as HTMLElement;
const closeBtn = document.querySelector(".close-btn") as HTMLElement;
const saveBtn = document.querySelector(".save-btn") as HTMLElement;
const bookInventory: Book[] = [];

if (closeBtn) {
  closeBtn.onclick = () => {
    closeModal();
  };
}
if (createBookBtn) {
  createBookBtn.onclick = () => {
    openModal();
  };
}
if (saveBtn) {
  saveBtn.onclick = () => {
    saveBook();
  };
}
function closeModal() {
  if (modal) {
    modal.style.display = "none";
  }
}
function openModal() {
  if (modal) {
    modal.style.display = "block";
  }
}
class Book {
  title: string;
  author: string;
  publicationYear: number;
  genre: string;
  constructor(
    title: string,
    author: string,
    publicationYear: number,
    genre: string
  ) {
    this.title = title;
    this.author = author;
    this.publicationYear = publicationYear;
    this.genre = genre;
  }
  getTitle() {
    return this.title;
  }
  getAuthor() {
    return this.author;
  }
  getPublicationYear() {
    return this.publicationYear;
  }
  getGenre() {
    return this.genre;
  }
  getBookInfo() {
    return `Title:${this.title}<br> Author:${this.author} <br> Publication Year:${this.publicationYear}<br>${this.genre}`;
  }
}

function saveBook() {
  const titleInput = document.getElementById("title") as HTMLInputElement;
  const authorInput = document.getElementById("author") as HTMLInputElement;
  const publicationYearInput = document.getElementById(
    "publicationYear"
  ) as HTMLInputElement;
  const genreInput = document.getElementById("genre") as HTMLInputElement;

  const title = titleInput.value;
  const author = authorInput.value;
  const publicationYear = parseInt(publicationYearInput.value);
  const genre = genreInput.value;
  const book = new Book(title, author, publicationYear, genre);
  bookInventory.push(book);
  console.log(bookInventory);
  closeModal();
}

if (saveBtn) {
  saveBtn.onclick = () => {
    saveBook();
  };
}
