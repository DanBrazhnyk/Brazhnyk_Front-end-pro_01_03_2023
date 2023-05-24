const infoFromForm = document.querySelector('.info--about--buy');
infoFromForm.style.display = 'none';

const infoAboutBook = document.querySelector(".products__book");

const infoAboutComics = document.querySelector(".products__comics");

const infoContainer = document.querySelector(".container__info");
infoContainer.style.display = "none";
infoAboutBook.style.display = "none";
infoAboutComics.style.display = "none";

const descriptionElements = document.querySelectorAll(".item__info");
descriptionElements.forEach((element) => {
  element.style.display = "none";
});

const catalogBook = document.querySelector(".lists__item--book");
catalogBook.addEventListener("click", () => {
  infoFromForm.style.display = 'none';
  infoAboutBook.style.display = "flex";
  infoAboutComics.style.display = "none";
  document.querySelector('.header').style.display='none';
});

const catalogComics = document.querySelector(".lists__item--comics");
catalogComics.addEventListener("click", () => {
  infoFromForm.style.display = 'none';
  infoAboutBook.style.display = "none";
  infoAboutComics.style.display = "flex";
  document.querySelector('.header').style.display='none';
});

const catalog = document.querySelector(".catalog__title");
catalog.addEventListener("click", () => {
  catalogComics.style.display ='flex'
  catalogBook.style.display = 'flex'
  modal.style.display = 'none';
  infoFromForm.style.display = 'none';
  welcomeTitle.style.display = "flex";
  document.querySelector('.header').style.display='flex';
  infoContainer.style.display = "none";
  infoAboutBook.style.display = "none";
  infoAboutComics.style.display = "none";
});

let selectedProduct = [];
const book = document.querySelectorAll(".book__item");
book.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const clickedItem = event.target.closest(".book__item");
    infoContainer.style.display = "flex";
    infoContainer.appendChild(clickedItem);
    selectedProduct.push(clickedItem);
    clickedItem.classList.add("selected");
    clickedItem.querySelector(".btn--buy").style.display = "none";
    clickedItem.querySelector(".item__info").style.display = 'flex';
  });
});
const comics = document.querySelectorAll(".comics__item");
comics.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const clickedItem = event.target.closest(".comics__item");
    infoContainer.style.display = "flex";
    infoContainer.appendChild(clickedItem);
    selectedProduct.push(clickedItem);;
    clickedItem.classList.add("selected");
    clickedItem.querySelector(".btn--buy").style.display = "none";
    clickedItem.querySelector(".item__info").style.display = 'flex';
  });
});
const catalogItems = document.querySelectorAll(".catalog__list li");
catalogItems.forEach((item) => {
  item.addEventListener("click", () => {
    welcomeTitle.style.display = "none";
  });
});

const modal = document.querySelector('.modal');
modal.style.display = 'none';

const welcomeTitle = document.querySelector(".welcome__title");
const submitBtn = document.querySelector(".submit");
submitBtn.addEventListener("click", () => {
  modal.style.display = 'flex';
  const infoBook = infoContainer.querySelectorAll(".book__item");
  infoBook.forEach((item) => {
    infoContainer.removeChild(item);
    infoAboutBook.appendChild(item);
    item.classList.remove("selected");
    item.querySelector(".btn--buy").style.display = "flex";
    item.querySelector(".item__info").style.display = 'none';
  });
  const infoComics = infoContainer.querySelectorAll(".comics__item");
  infoComics.forEach((item) => {
    infoContainer.removeChild(item);
    infoAboutComics.appendChild(item);
    item.classList.remove("selected");
    item.querySelector(".btn--buy").style.display = "flex";
    item.querySelector(".item__info").style.display = 'none';
  });
  welcomeTitle.style.display = "none";
  infoContainer.style.display = "none";
  infoAboutBook.style.display = "none";
  infoAboutComics.style.display = "none";
  alert('To finish your buy you will fill form')
});

const checkBuy = document.querySelector('.header');
const confirmBtn = document.querySelector('.confirm');
const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const surnameInput = document.getElementById('surname');
const patronymicInput = document.getElementById('patronymic');
const cityInput = document.getElementById('city');
const deliveryInput = document.getElementById('delivery');
const paymentInput = document.getElementById('payment');
const quantityInput = document.getElementById('quantity');
const commentInput = document.getElementById('comment');
const saveItems = []
let id = 0;
function generateOrderId() {
  return ++id;
}
confirmBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const name = nameInput.value;
  const surname = surnameInput.value;
  const patronymic = patronymicInput.value;
  const city = cityInput.value;
  const delivery = deliveryInput.value;
  const payment = paymentInput.value;
  const quantity = quantityInput.value;
  const comment = commentInput.value;
  const formValues = [
    name,
    surname,
    patronymic,
    city,
    delivery,
    payment,
    quantity,
    comment
  ];
  let buyDetails = "";
  const allFieldsFilled = formValues.every(value => value !== '');
  if(!allFieldsFilled ){
    alert('Fill full form !')
    confirmBtn =null 
  }
  else if (quantity < 1) {
    alert('Quantity must be more or equal to 1!');
    confirmBtn =null
  } 
  else{
  selectedProduct.forEach((item) => {
    buyDetails +=  `<div class="order-container" data-container-id="${generateOrderId()}">
    <p>Products: ${item.querySelector(".item__title").textContent}</p> 
    <p>Name: ${name}</p>
    <p>Surname: ${surname}</p>
    <p>Patronymic: ${patronymic}</p>
    <p>City: ${city}</p>
    <p>Delivery: ${delivery}</p>
    <p>Payment: ${payment}</p>
    <p>Quantity: ${quantity}</p>
    <p>Comment: ${comment}</p>
    <button class="delete-btn">Delete</button>
    <hr>
  </div>
`;
  });
}
const savedBuyDetails = localStorage.getItem('buyDetails') || ""; 
  const newBuyDetails = savedBuyDetails + buyDetails;
  localStorage.setItem('buyDetails', newBuyDetails);
  alert('Thank you for buying in our shop,you can check your buy in main menu "check your buy"')
  infoFromForm.style.display = 'none';
  selectedProduct = []
  form.reset();
  modal.style.display = 'none';
  checkBuy.style.display = 'flex'
  welcomeTitle.style.display = "flex";
});
  checkBuy.addEventListener('click',()=>
{
  catalogComics.style.display ='none'
  catalogBook.style.display = 'none'
  const storedBuyDetails = localStorage.getItem('buyDetails');
  infoFromForm.innerHTML = storedBuyDetails;
  welcomeTitle.style.display = "none";
  checkBuy.style.display = 'none'
  infoFromForm.style.display ='block'
  const deleteElem = document.querySelectorAll('.delete-btn');
  deleteElem.forEach((button) => {
    button.addEventListener('click', (event) => {
      const deleteButton = event.target;
      const containerId = deleteButton.closest('.order-container').dataset.containerId;
      const orderContainer = document.querySelector(`[data-container-id="${containerId}"]`);
      orderContainer.parentNode.removeChild(orderContainer);
      const storedBuyDetails = localStorage.getItem('buyDetails');
      const updatedBuyDetails = storedBuyDetails.replace(orderContainer.outerHTML, '');
      localStorage.setItem('buyDetails', updatedBuyDetails);
    });
  });
})