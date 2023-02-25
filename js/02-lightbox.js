import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryMarkup = createGalleryCard(galleryItems);
const galleryPhotos = document.querySelector(".gallery");

galleryPhotos.insertAdjacentHTML("beforeend", galleryMarkup);

function createGalleryCard(galleryItems) {
return galleryItems.map(({ preview, original, description}) => {
  return `
<li>
<a class="gallery__item" href = "${original}">
<img
class="gallery__image"
src="${preview}"  
alt="${description}"
/>
</a>
</li>
`;
})
  .join('');
};

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250,
});