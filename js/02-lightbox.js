import { galleryItems } from './gallery-items.js';
// Change code below this line

const imagesGallery = document.querySelector('.gallery');

const getGalleryItems = galleryItems
  .map(
    image =>
      `<li class='gallery__item'>
      <a class='gallery__link' href='${image.original}'>
      <img class='gallery__image' src='${image.preview}'
      title='${image.description}'></a></li>`
  )
  .join('');

imagesGallery.insertAdjacentHTML('beforeend', getGalleryItems);

imagesGallery.addEventListener('click', onImageClick);

function onImageClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  let lightbox = new SimpleLightbox('.gallery a', {
    captionDelay: '250',
  });
}
// з кожним відкриттям - закриттям litebox залишається і накладається один на одного overlay чи як правильно?.. це у мене щось не так, чи проблема бібліотеки?
