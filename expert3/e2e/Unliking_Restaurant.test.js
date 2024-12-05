/* eslint-disable no-undef */

Feature('Unliking Restaurants');

Scenario('User can unlike a restaurant', async ({ I }) => {
  // Buka halaman utama
  I.amOnPage('/');

// Verifikasi di halaman utama ada resto yang bernama Istana Emas kemudian klik
I.see('Istana Emas');
I.click(locate('a').withText('Istana Emas'));

// Tunggu beberapa detik untuk memastikan halaman detail resto dimuat
I.wait(2); // Tunggu 2 detik

// Verifikasi bahwa sudah di halaman detail resto Istana Emas
I.see('Istana Emas');

// Klik id like button kemudian klik
I.click('#likeButton');

// Tunggu beberapa detik untuk memastikan aksi seperti ikon berubah
I.wait(1); // Tunggu 1 detik

// Verifikasi bahwa tombol like berubah (misalnya, ikon berubah)
I.seeElement('.like i.fa-heart');

// Tunggu beberapa detik setelah klik
I.wait(1); // Tunggu 1 detik

// Klik tombol "Favorite" untuk unlike
I.click('#likeButton');

I.wait(1);

// Verifikasi sudah berada di halaman favorite
I.amOnPage('/#/like');
I.dontSee('Istana Emas');

});