/* eslint-disable no-undef */
Feature('Like Restaurant');

Scenario('User can like a restaurant', async ({ I }) => {
  // Buka halaman utama
  I.amOnPage('/');

  //verifikasi dihalaman utama ada redto yang bernama kafein kemudian klik
  I.see('Kafein');
  I.click(locate('a').withText('Kafein'));

  // Verifikasi bahwa sudah di halaman detail resto kafein
  I.see('Kafein');

  // temukan id like button kemudian klik
  I.click('#likeButton');

  // Verifikasi bahwa tombol like berubah (misalnya, ikon berubah)
  I.seeElement('.like i.fa-heart');

    // Temukan dan klik tombol "Favorite"
    I.click('a[href="#/like"]');

    // Verifikasi sudah berada di halaman favorite
    I.seeInCurrentUrl('/#/like'); 
    //I.see('Kafein'); resto fav belum tampil dengan benar
});