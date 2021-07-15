const cartButton = document.querySelectorAll('.buy-button');
const cart = document.querySelector('.cart-modal');
for (let j = 0; j < cartButton.length; j++) {
  cartButton[j].addEventListener('click', function (evt) {
    evt.preventDefault();
    cart.classList.add('modal-show');
  })
}

const closeButton = document.querySelectorAll('.close-button');
const continueButton = document.querySelector('.cart-modal-continue');
const activeModal = document.querySelector('.modal-show');
continueButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  cart.classList.remove('modal-show');
})
for (let e = 0; e < closeButton.length; e++) {
  closeButton[e].addEventListener('click', function (evt) {
    evt.preventDefault();
    cart.classList.remove('modal-show');
  })
}