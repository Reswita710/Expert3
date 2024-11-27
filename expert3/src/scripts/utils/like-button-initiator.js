import FavoriteRestaurantDb from '../data/favorite-restaurant-idb';
import * as template from '../views/templates/template-creator';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, restaurant }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestaurantExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await FavoriteRestaurantDb.getRestaurant(id);
    return !!restaurant;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = template.likeButton();

    const likeButton = document.querySelector('#likeButton');
    likeButton.classList.remove('liked'); // Menghapus status liked

    likeButton.addEventListener('click', async () => {
      await FavoriteRestaurantDb.putRestaurant(this._restaurant);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = template.likedButton();

    const likeButton = document.querySelector('#likeButton');
    likeButton.classList.add('liked'); // Menambahkan status liked

    likeButton.addEventListener('click', async () => {
      await FavoriteRestaurantDb.deleteRestaurant(this._restaurant.id);
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
