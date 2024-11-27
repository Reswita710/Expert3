import FavoriteRestaurantDb from '../../data/favorite-restaurant-idb';
import fillingStar from '../../utils/fill-star';
import * as template from '../templates/template-creator';

const Like = {
  async render() {
    return `
    <h1 class="main__title">Your Liked Restaurant</h1>
    <section id="restaurants" class="content"></section>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantDb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant, index) => {
      restaurantsContainer.innerHTML += template.restaurantItem(restaurant);
      fillingStar(index, restaurant.rating);
    });
  },
};

export default Like;
