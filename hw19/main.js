const infoAboutBook = document.querySelector(".products__book");
const infoAboutComics = document.querySelector(".products__comics");
const info = document.querySelector(".container__info");
info.style.display = "none";
infoAboutBook.style.display = "none";
infoAboutComics.style.display = "none";

const catalogBook = document.querySelector(".lists__item--book");
catalogBook.addEventListener("click", () => {
  infoAboutBook.style.display = "flex";
  infoAboutComics.style.display = "none";
});

const catalogComics = document.querySelector(".lists__item--comics");
catalogComics.addEventListener("click", () => {
  infoAboutBook.style.display = "none";
  infoAboutComics.style.display = "flex";
});

const catalog = document.querySelector(".catalog__title");
catalog.addEventListener("click", () => {
  welcomeTitle.style.display = "flex";
  info.style.display = "none";
  infoAboutBook.style.display = "none";
  infoAboutComics.style.display = "none";
});

let selectedProduct = null;
const book = document.querySelectorAll(".book__item");
book.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const clickedItem = event.target.closest(".book__item");
    info.style.display = "flex";
    info.appendChild(clickedItem);
    selectedProduct = clickedItem;
    clickedItem.classList.add("selected");
    clickedItem.querySelector(".btn--buy").style.display = "none";
  });
});
const comics = document.querySelectorAll(".comics__item");
comics.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const clickedItem = event.target.closest(".comics__item");
    info.style.display = "flex";
    info.appendChild(clickedItem);
    selectedProduct = clickedItem;
    clickedItem.classList.add("selected");
    clickedItem.querySelector(".btn--buy").style.display = "none";
  });
});
const catalogItems = document.querySelectorAll(".catalog__list li");
catalogItems.forEach((item) => {
  item.addEventListener("click", () => {
    welcomeTitle.style.display = "none";
  });
});
const welcomeTitle = document.querySelector(".welcome__title");
const btnn = document.querySelector(".submit");
btnn.addEventListener("click", () => {
  const infoBook = info.querySelectorAll(".book__item");
  infoBook.forEach((item) => {
    info.removeChild(item);
    infoAboutBook.appendChild(item);
    item.classList.remove("selected");
    item.querySelector(".btn--buy").style.display = "flex";
  });
  const infoComics = info.querySelectorAll(".comics__item");
  infoComics.forEach((item) => {
    info.removeChild(item);
    infoAboutComics.appendChild(item);
    item.classList.remove("selected");
    item.querySelector(".btn--buy").style.display = "flex";
  });
  welcomeTitle.style.display = "flex";
  info.style.display = "none";
  infoAboutBook.style.display = "none";
  infoAboutComics.style.display = "none";
  alert("You have successfully purchased the product(s).");
});
