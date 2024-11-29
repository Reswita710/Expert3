// Scripts
import 'regenerator-runtime';
// Styles
import '../styles/fonts.css';
import '../styles/main.css';
import '../styles/responsive.css';
import swRegister from './utils/sw-register';
import App from './views/app';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';


if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.bundle.js')
      .then((registration) => {
        console.log('Service Worker registered with scope: ', registration.scope);
      })
      .catch((error) => {
        console.log('Service Worker registration failed: ', error);
      });
  });
}

const app = new App({
  button: document.querySelector('#hamburger'),
  drawer: document.querySelector('#drawer'),
  closeButton: document.querySelector('#closeDrawer'), // Tombol X untuk menutup drawer
  content: document.querySelector('#main'),
});

document.addEventListener('DOMContentLoaded', () => {
  const hamburgerButton = document.querySelector('#hamburger');
  const closeButton = document.querySelector('#closeDrawer'); // Pastikan ID ini sesuai dengan ID tombol X di HTML
  const drawer = document.querySelector('#drawer');

  // Event listener untuk membuka drawer saat tombol hamburger diklik
  if (hamburgerButton) {
    hamburgerButton.addEventListener('click', () => {
      if (drawer) {
        drawer.classList.add('open');
      } else {
        console.error('Drawer element not found.');
      }
    });
  } else {
    console.error('Hamburger button element not found.');
  }

  // Event listener untuk menutup drawer saat tombol X diklik
  if (closeButton) {
    closeButton.addEventListener('click', () => {
      if (drawer) {
        drawer.classList.remove('open');
      } else {
        console.error('Drawer element not found.');
      }
    });
  } else {
    console.error('Close button element not found.');
  }
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
