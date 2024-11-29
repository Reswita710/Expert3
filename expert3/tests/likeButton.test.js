
import LikeButtonInitiator from '../src/scripts/utils/like-button-initiator.js';
import FavoriteRestaurantDb from '../src/scripts/data/favorite-restaurant-idb.js';

describe('Liking a Restaurant', () => {
	const addLikeButtonContainer = () => {
		document.body.innerHTML = '<div id="likeButtonContainer"></div>';
	};

	beforeEach(async () => {
		addLikeButtonContainer();
		// Bersihkan database favorit sebelum setiap pengujian
		await FavoriteRestaurantDb.deleteRestaurant(1);
	});

	it('should show the like button when the restaurant has not been liked before', async () => {
		await LikeButtonInitiator.init({
			likeButtonContainer: document.querySelector('#likeButtonContainer'),
			restaurant: { id: 1 },
		});

		expect(
			document.querySelector('[aria-label="like this restaurant"]'),
		).toBeTruthy();

	});

	it('should not show the unlike button when the restaurant has not been liked before', async () => {
		await LikeButtonInitiator.init({
			likeButtonContainer: document.querySelector('#likeButtonContainer'),
			restaurant: { id: 1 },
		});

		expect(
			document.querySelector('[aria-label="unlike this restaurant"]'),
		).toBeFalsy();
	});

	it('should show the unlike button when the restaurant has been liked', async () => {
		await FavoriteRestaurantDb.putRestaurant({ id: 1 });

		await LikeButtonInitiator.init({
			likeButtonContainer: document.querySelector('#likeButtonContainer'),
			restaurant: { id: 1 },
		});

		expect(
			document.querySelector('[aria-label="unlike this restaurant"]'),
		).toBeTruthy();
	});

	it('should not add a restaurant again when it is already liked', async () => {
		await LikeButtonInitiator.init({
			likeButtonContainer: document.querySelector('#likeButtonContainer'),
			restaurant: { id: 1 },
		});

		await FavoriteRestaurantDb.putRestaurant({ id: 1 });

		document.querySelector('#likeButton').dispatchEvent(new Event('click'));
		expect(await FavoriteRestaurantDb.getAllRestaurants()).toEqual([{ id: 1 }]);
	});

	it('should not add a restaurant when it has no id', async () => {
        await LikeButtonInitiator.init({
          likeButtonContainer: document.querySelector('#likeButtonContainer'),
          restaurant: {}, // Tidak ada ID
        });
      
        // Verifikasi bahwa tombol "Like" tidak dirender
        expect(document.querySelector('#likeButton')).toBeFalsy();
      
        // Verifikasi bahwa database tetap kosong
        const restaurants = await FavoriteRestaurantDb.getAllRestaurants();
        expect(restaurants).toEqual([]);
      });
      
});
