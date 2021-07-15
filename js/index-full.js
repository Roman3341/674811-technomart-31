/*слайдер сервисов*/
const feautersList = document.querySelectorAll('.feauters-list-link');
for (let i = 0; i < feautersList.length; i++) {
  feautersList[i].addEventListener('click', function (evt) {
    evt.preventDefault();

    const target = evt.target;
    const activeElement = document.querySelector('.feauters-discription-item-active');
    const activeLink = document.querySelector('.feauters-list-link-active');

    if (activeLink !== target) {
      activeElement.classList.remove('feauters-discription-item-active');
      activeLink.classList.remove('feauters-list-link-active');
    }

    const dataText = target.dataset.link;
    const detailText = document.querySelector(`#${dataText}`);

    target.classList.add('feauters-list-link-active');
    detailText.classList.add('feauters-discription-item-active');

  })
}

const sliderLeft = document.querySelector('.slider-item-first');
const sliderRight = document.querySelector('.slider-item-second');
const sliderButtonRight = document.querySelector('.slider-button-right');
const sliderButtonLeft = document.querySelector('.slider-button-left');

sliderButtonRight.addEventListener('click', function(evt){
 sliderLeft.classList.remove('slider-show'); 
 sliderRight.classList.add('slider-show');
})

sliderButtonLeft.addEventListener('click', function(evt){
  sliderRight.classList.remove('slider-show'); 
  sliderLeft.classList.add('slider-show');
 })
 

/*модальное окно обратной связи*/
const formBack = document.querySelector('.form-back');
const writeUs = document.querySelector('.write-us');
writeUs.addEventListener('click', function (evt) {
  evt.preventDefault();
  formBack.classList.add('modal-show');
})
/*Модальное окно карты*/
const map = document.querySelector('.map');
const mapShow = document.querySelector('.map-modal');
map.addEventListener('click', function (evt) {
  evt.preventDefault();
  mapShow.classList.add('modal-show');
})
/*модальное окно "Товар добавлен в корзину"*/
const cartButton = document.querySelectorAll('.buy-button');
const cart = document.querySelector('.cart-modal');
for (let j = 0; j < cartButton.length; j++) {
  cartButton[j].addEventListener('click', function (evt) {
    evt.preventDefault();
    cart.classList.add('modal-show');
  })
}
/*Закрытие формы по крестику*/
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
    formBack.classList.remove('modal-show');
    cart.classList.remove('modal-show');
    mapShow.classList.remove('modal-show');
  })
}

/*Слайдер переключения изображений*/
