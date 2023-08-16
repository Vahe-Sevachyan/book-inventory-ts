const modal = document.querySelector(".modal") as HTMLElement;
const createBookBtn = document.querySelector(".create-book-btn") as HTMLElement;
const closeModal = document.querySelector(".close-btn") as HTMLElement;
const saveBtn = document.querySelector(".save-btn") as HTMLElement;
const bookInventory = [];
if (modal) {
  createBookBtn.onclick = () => {
    modal.style.display = "block";
  };
}

if (closeModal) {
  closeModal.onclick = () => {
    modal.style.display = "none";
  };
}

if (saveBtn) {
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

saveBook(){
  const titleInput = document.getElementById('title')as HTMLInputElement;
  const author = document.getElementById('author')as HTMLInputElement
  const publicationYear = document.getElementById('publicationYear')as HTMLInputElement;
  const genre = document.getElementById('genre')as HTMLInputElement;

  const title = titleInput.value
}