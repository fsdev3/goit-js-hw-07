import { galleryItems } from './gallery-items.js';
// Change code below this line

const imagesGallery = document.querySelector('.gallery');

const getGalleryItems = galleryItems
  .map(
    image =>
      `<li class='gallery__item'>
      <a class='gallery__link' href='${image.original}'>
      <img class='gallery__image' src='${image.preview}'
      alt='${image.description}'></a></li>`
  )
  .join('');

imagesGallery.insertAdjacentHTML('beforeend', getGalleryItems);

let lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: '250',
  captionsData: 'alt',
});
