import TheRestaurantDbSource from '../../data/therestaurantdb-source';
import UrlParser from '../../routes/url-parser';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import * as template from '../templates/template-creator';

const Restaurants = {
  async render() {
    return `
      <section id="restaurant" class="restaurant"></section>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await TheRestaurantDbSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#restaurant');
    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant,
    });

    restaurantContainer.innerHTML = template.restaurantDetail(restaurant);

    this._detailRestaurantMenus(restaurant);
    this._detailRestaurantCustomerReviews(restaurant);
  },

  LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    restaurant: {
      id: restaurant.id,
      title: restaurant.title,
      overview: restaurant.overview,
      backdrop_path: restaurant.backdrop_path,
      vote_average: restaurant.vote_average,
    }
  });

  _detailRestaurantMenus(restaurant) {
    const foodsContainer = document.querySelector('#foods');
    restaurant.menus.foods.forEach((food) => {
      foodsContainer.innerHTML += template.restaurantFoodDetail(food);
    });

    const drinksContainer = document.querySelector('#drinks');
    restaurant.menus.drinks.forEach((drink) => {
      drinksContainer.innerHTML += template.restaurantDrinkDetail(drink);
    });
  },

  _detailRestaurantCustomerReviews(restaurant) {
    const customerReviewsContainer = document.querySelector('#customerReviews');
    restaurant.customerReviews.forEach((customerReview) => {
      customerReviewsContainer.innerHTML
      += template.restaurantCustomerReviewsDetail(customerReview);
    });
  },
};

export default Restaurants;
