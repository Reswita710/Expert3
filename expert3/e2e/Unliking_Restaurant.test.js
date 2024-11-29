const assert = require('assert');

Feature('Unliking Restaurants');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('unliking and verifying a restaurant is removed from favorites', async ({ I }) => {
  I.amOnPage('/');
  
  // Ambil restoran pertama dari daftar
  const firstRestaurant = locate('.headline__title a').first(); // Ambil link restoran pertama
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);

  // Klik restoran pertama untuk melihat detailnya
  I.click(firstRestaurant);
  I.seeElement('#likeButton');
  I.click('#likeButton'); // Klik tombol like untuk menyukai restoran
  
  // Pindah ke halaman favorit
  I.amOnPage('/#/like');
  I.seeElement('.restaurant-list'); // Pastikan daftar restoran favorit terlihat
  
  // Verifikasi bahwa restoran yang disukai sudah ada di daftar favorit
  const likedRestaurantTitle = await I.grabTextFrom('.headline__title a');
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

  // Klik pada restoran untuk membuka detail dan klik tombol unlike
  I.click(locate('.headline__title a').first()); 
  I.seeElement('#likeButton');
  I.click('#likeButton'); // Klik tombol like untuk menghilangkan restoran dari favorit
  
  // Pindah ke halaman favorit
  I.amOnPage('/#/like');
  
  // Verifikasi bahwa restoran sudah tidak ada di daftar favorit
  I.dontSeeElement('.headline__title a', 'Restaurant should be removed from favorites');
});
