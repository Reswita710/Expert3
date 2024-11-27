import CONFIG from '../../globals/config';

const restaurantItem = (restaurant) => `
  <article class="headline">
    <figure class="headline__figure">
      <img src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="Dicoding Fact Sheet">
      <figcaption>${restaurant.city}</figcaption>
    </figure>
    <div class="headline__content">
      <p>
        Rating: ${restaurant.rating} 
        <span class="stars-outer">
          <span class="stars-inner"></span>
        </span>
      </p>
      <h1 class="headline__title">
        <a href="/#/detail/${restaurant.id}">${restaurant.name}</a>
      </h1>
      <p class="headline__description">${restaurant.description}</p>
    </div>
  <article>
`;

const restaurantDetail = (restaurant) => `
  <img class="restaurant__poster" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="restaurant__detail">
    <h2 class="restaurant__title">${restaurant.name}</h2>
    <div class="restaurant__info">
      <h3>Address</h3>
      <p>${restaurant.address}</p>
    </div>
    <div class="restaurant__info">  
      <h3>City</h3>
      <p>${restaurant.city}</p>
    </div>
    <div class="restaurant__overview">
      <h3>Description</h3>
      <p>${restaurant.description}</p>
    </div>
    <div class="restaurant__menus">
      <h2>Foods</h2>
      <div id="foods" class="items"></div>
    </div>
    <div class="restaurant__menus">
      <h2>Drinks</h2>
      <div id="drinks" class="items"></div>
    </div>
  </div>
  <div class="restaurant__review">
    <h2>Customer Reviews</h2>
    <div id="customerReviews" class="items"></div>
  </div>
`;

const restaurantFoodDetail = (food) => `
  <p class="item">${food.name}</p>
`;

const restaurantDrinkDetail = (drink) => `
  <p class="item">${drink.name}</p>
`;

const restaurantCustomerReviewsDetail = (review) => `
  <div class="item">
    <p class="name">${review.name}</p>
    <p class="date">${review.date}</p>
    <p class="review">${review.review}</p>
  </div>
`;

const likeButton = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i> <!-- Ikon hati transparan -->
  </button>
`;

const likedButton = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like liked">
    <i class="fa fa-heart" aria-hidden="true"></i> <!-- Ikon hati merah -->
  </button>
`;



export {
  restaurantItem,
  restaurantDetail,
  restaurantFoodDetail,
  restaurantDrinkDetail,
  restaurantCustomerReviewsDetail,
  likeButton,
  likedButton,
};
