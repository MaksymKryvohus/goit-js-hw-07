import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryContainer = document.querySelector('.gallery');

const galleryItemsMarkup = galleryItems.map(({ preview, original, description }) => {
  return `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}">
      </a>
    </li>
  `;
}).join('');

galleryContainer.insertAdjacentHTML('beforeend', galleryItemsMarkup);


galleryContainer.addEventListener('click', onGalleryContainerClick);

function onGalleryContainerClick(event) {
  event.preventDefault();

  if (!event.target.classList.contains('gallery__image')) {
    return;
  }

  const originalSrc = event.target.dataset.source;

  const lightboxInstance = basicLightbox.create(`
    <img src="${originalSrc}" alt="" />
  `);

  lightboxInstance.show();

}



