const changer = document.getElementById('theme-changer');
const changer_mobile = document.getElementById('theme-changer-mobile');
const html = document.documentElement;

changer.addEventListener('change', function () {
  html.toggleAttribute('data-theme-dark');
  changer_mobile.checked = changer_mobile.checked ? false : true;
});

changer_mobile.addEventListener('change', () => {
  html.toggleAttribute('data-theme-dark');
  changer.checked = changer.checked ? false : true;
});
