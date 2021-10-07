import srcMenu from './templates/gallery.hbs';
import menuEl from './menu.json';
// import style from './style.css';
const createMenu = document.querySelector('.js-menu');

createMenu.insertAdjacentHTML('beforeend', menuCart(menuEl));

function menuCart(menuEl) {
  return srcMenu(menuEl);
}
//switchTheme
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const { LIGHT, DARK } = Theme;

const body = document.querySelector('body');
const toggle = document.querySelector('.theme-switch__toggle');

toggle.addEventListener('change', switchTheam);

function switchTheam() {
  if (toggle.checked) {
    body.setAttribute('class', DARK);
    localStorage.setItem('theme', DARK);
  } else {
    body.setAttribute('class', LIGHT);
    localStorage.setItem('theme', LIGHT);
  }
}

if (localStorage.theme === DARK) {
  toggle.checked = true;
  body.setAttribute('class', DARK);
} else {
  toggle.checked = false;
  body.setAttribute('class', LIGHT);
}
