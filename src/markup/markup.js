 export const galleryRef = document.querySelector('.gallery');

export const markupImageList = (data = []) => {
  const markup = data
    .map(
      ({
        webformatURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `<div class="photo-card">
  <img src="${webformatURL}" alt="${tags}" loading="lazy" width="300px" height="200px"/>
  <div class="info">
    <p class="info-item">
      <b>Likes</b><br> ${likes}
    </p>
    <p class="info-item">
      <b>Views</b><br> ${views}
    </p>
    <p class="info-item">
      <b>Comments</b><br>${comments}
    </p>
    <p class="info-item">
      <b>Downloads</b><br>${downloads}
    </p>
  </div>
</div>`;
      }
    )
    .join('');
  galleryRef.insertAdjacentHTML('beforeend', markup);
};
