import srcMenu from './templates/gallery.hbs';
import menuEl from './menu.json';
// import style from './style.css';
const createMenu = document.querySelector('.js-menu');

createMenu.insertAdjacentHTML('beforeend', menuCart(menuEl));

function menuCart(menuEl) {
  return srcMenu(menuEl);
}
//switchTheme

const theme = document.querySelector('body');
const switcher = document.querySelector('.theme-switch__toggle');

switcher.addEventListener('click', switchTheam);
function switchTheam() {
  theme.classList.toggle('dark-theme');
}

//LocaleStorage
