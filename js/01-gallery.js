import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const imagesGallery = document.querySelector(".gallery");

const getGalleryItems = galleryItems
  .map(
    (image) =>
      `<li class='gallery__item'>
      <a class='gallery__link' href='${image.original}'>
      <img class='gallery__image' src='${image.preview}' 
      data-source='${image.original}'
      alt='${image.description}'></a></li>`
  )
  .join("");

imagesGallery.insertAdjacentHTML("beforeend", getGalleryItems);
