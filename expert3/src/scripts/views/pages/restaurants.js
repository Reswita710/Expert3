import TheRestaurantDbSource from '../../data/therestaurantdb-source';
import fillingStar from '../../utils/fill-star';
import * as template from '../templates/template-creator';

const Restaurants = {
  async render() {
    return `
    <section class="hero"></section>
    <h1 class="main__title">Explore Restaurant</h1>
    <section id="restaurants" class="content"></section>
    `;
  },

  async afterRender() {
    const restaurants = await TheRestaurantDbSource.listRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant, index) => {
      restaurantsContainer.innerHTML += template.restaurantItem(restaurant);
      fillingStar(index, restaurant.rating);
    });
  },
};

export default Restaurants;
