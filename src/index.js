import srcMenu from './templates/gallery.hbs';
import menuEl from './menu.json';

const createMenu = document.querySelector('.js-menu');

createMenu.insertAdjacentHTML('beforeend', menuCart(menuEl));

function menuCart(menuEl) {
  return srcMenu(menuEl);
}
