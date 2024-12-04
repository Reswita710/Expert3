const assert = require('assert');

Feature('Unliking Restaurants');

Before(({ I }) => {
  // Buka halaman utama sebelum setiap scenario
  I.amOnPage('/');
});

Scenario('unliking and verifying a restaurant is removed from favorites', async ({ I }) => {
  // Ambil restoran pertama dari daftar
  const firstRestaurant = locate('.card__title a').first(); // Sesuaikan selector dengan struktur DOM yang sesuai
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);

  // Klik restoran pertama untuk melihat detailnya
  I.click(firstRestaurant);

  // Pastikan tombol "like" ada, lalu klik untuk menyukai restoran
  I.seeElement('#likeButton');
  I.click('#likeButton');

  // Pindah ke halaman favorit
  I.amOnPage('/#/like');

  // Verifikasi bahwa restoran yang disukai sudah ada di daftar favorit
  I.seeElement('.card__title a'); // Sesuaikan selector jika berbeda
  const likedRestaurantTitle = await I.grabTextFrom('.card__title a');
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle, 'Restoran tidak ditemukan di daftar favorit');

  // Klik restoran yang ada di daftar favorit untuk membuka detail
  I.click(locate('.card__title a').first());

  // Pastikan tombol "unlike" ada, lalu klik untuk menghapus restoran dari favorit
  I.seeElement('#likeButton');
  I.click('#likeButton');

  // Kembali ke halaman favorit
  I.amOnPage('/#/like');

  // Verifikasi bahwa restoran sudah tidak ada di daftar favorit
  I.dontSeeElement('.card__title a', 'Restoran tidak dihapus dari daftar favorit');
});
