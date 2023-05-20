import { galleryItems } from './gallery-items.js';
// Change code below this line

const imagesGallery = document.querySelector('.gallery');

const getGalleryItems = galleryItems
  .map(
    image =>
      `<li class='gallery__item'>
      <a class='gallery__link' href='${image.original}'>
      <img class='gallery__image' src='${image.preview}' 
      data-source='${image.original}'
      alt='${image.description}'></a></li>`
  )
  .join('');

imagesGallery.insertAdjacentHTML('beforeend', getGalleryItems);

imagesGallery.addEventListener('click', onImageClick);

function onImageClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);

  instance.show();

  imagesGallery.addEventListener('keydown', event => {
    if (event.code === 'Escape') {
      instance.close();
      imagesGallery.removeEventListener('keydown', event);
    }
  });
}
