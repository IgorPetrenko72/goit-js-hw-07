import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryMarkup = createGalleryCard(galleryItems);
const galleryPhotos = document.querySelector(".gallery");

galleryPhotos.insertAdjacentHTML("beforeend", galleryMarkup);

galleryPhotos.addEventListener(`click`, onPhotoLinkClick);
    
function createGalleryCard(galleryItems) {
return galleryItems.map(({ preview, original, description}) => {
  return `
<div class="gallery__item">
<a class="gallery__link" href = "${original}">
<img
class="gallery__image"
src="${preview}" 
data-source="${original}" 
alt="${description}"
/>
</a>
</div>`;
})
  .join('');
};

function onPhotoLinkClick(e) {
  e.preventDefault();
  if (!e.target.classList.contains(`gallery__image`)) {
    return
  };

  const source = e.target.dataset.source;
    
  const instance = basicLightbox.create(`
    <img src="${source}"width="800" height="600">`,
   {
      onShow: () => {
        document.addEventListener('keydown', closeModal);
      },
      onClose: () => {
        document.removeEventListener('keydown', closeModal);
      },
    }
  );
  instance.show();

  function closeModal(e) {
    if (e.key === 'Escape') {
      instance.close();
      console.log(e.key);
    }
  }
};