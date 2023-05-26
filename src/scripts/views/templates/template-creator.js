import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (resto) => `
<article class="post-item">
<img class="post-item__thumbnail"
     src="${resto.pictureId ? CONFIG.BASE_IMAGE_URL_MEDIUM + resto.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}"
     alt="${resto.name}">
<div class="post-item__content">
  <p class="post-item__date">${resto.city}, ${resto.address}</p>
  <p class="post-item__date__author">rating: ${resto.rating}</p>
  <h1 class="post-item__title"><a href="#">${resto.name}</a></h1>
  <p class="post-item__description">${resto.description}</p>
</div>
</article>
<article class="post-item">
<div class="post-item__content">
  <h1 class="post-item__title"><a href="#">Kategori</a></h1>
  <p class="post-item__description">${resto.categories.map((categori) => `${categori.name}`).join(', ')}</p>
  <h1 class="post-item__title"><a href="#">Masakan</a></h1>
  <p class="post-item__description">${resto.menus.foods.map((food) => `${food.name}`).join(', ')}</p>
  <h1 class="post-item__title"><a href="#">Minuman</a></h1>
  <p class="post-item__description">${resto.menus.drinks.map((drink) => `${drink.name}`).join(', ')}</p>
  </div>
</article>
<article class="post-item">
<div class="post-item__content">
  
<h1 class="post-item__title"><a href="#">Review</a></h1>
  ${resto.customerReviews.map((review) => `
  <h1 class="post-item__title"><a href="#">${review.name}</a></h1>
  <p class="post-item__date">${review.date}</p>
  <p class="post-item__description">${review.review}</p>
    `).join('')}
  
</article>
`;

const createRestoItemTemplate = (resto) => `
<article class="post-item">
<img class="post-item__thumbnail"
     src="${resto.pictureId ? CONFIG.BASE_IMAGE_URL_MEDIUM + resto.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}"
     alt="${resto.name}">
<div class="post-item__content">
  <p class="post-item__date">${resto.city}</p>
  <p class="post-item__date__author">rating: ${resto.rating}</p>
  <h1 class="post-item__title"><a href="#/detail/${resto.id}">${resto.name}</a></h1>
  <p class="post-item__description">${resto.description}</p>
</div>
</article>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
