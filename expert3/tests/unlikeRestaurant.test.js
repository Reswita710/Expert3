import LikeButtonInitiator from '../src/scripts/utils/like-button-initiator';
import FavoriteRestaurantDb from '../src/scripts/data/favorite-restaurant-idb'; // Sesuaikan dengan nama file yang benar

describe('Unliking A Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteRestaurantDb.putRestaurant({ id: 1 }); // Gunakan `putRestaurant` untuk menambahkan restoran
  });

  afterEach(async () => {
    await FavoriteRestaurantDb.deleteRestaurant(1); // Gunakan `deleteRestaurant` untuk menghapus restoran
  });

  it('should display unlike widget when the restaurant has been liked', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: 1, // Pastikan ID restoran ada
      },
    });

    expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeTruthy(); // Pastikan tombol Unlike ditampilkan
  });

  it('should not display like widget when the restaurant has been liked', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: 1, // Pastikan ID restoran ada
      },
    });

    expect(document.querySelector('[aria-label="like this restaurant"]')).toBeFalsy(); // Pastikan tombol Like tidak ditampilkan
  });
});
