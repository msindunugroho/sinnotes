
let navLinkLefth = false;
let switcher = false;


/**
 * Nav
 */
(function nav() {
  const nav = document.querySelector('nav');
  const btnMenu = nav.querySelector('.menu');
  const first = nav.querySelector('.first');
  const second = nav.querySelector('.second');
  const third = nav.querySelector('.third');
  const fourth = nav.querySelector('.fourth');
  const fifth = nav.querySelector('.fifth');

  btnMenu.addEventListener('click', function () {
    if (!navLinkLefth) {
      first.style.marginLeft = '0';
      second.style.marginLeft = '0';
      third.style.marginLeft = '0';
      fourth.style.marginLeft = '0';
      fifth.style.marginLeft = '0';
      navLinkLefth = true;
    } else {
      first.style.marginLeft = '175px';
      second.style.marginLeft = '175px';
      third.style.marginLeft = '175px';
      fourth.style.marginLeft = '175px';
      fifth.style.marginLeft = '175px';
      navLinkLefth = false;
    }
  });
})();
/**
 * Switcher Theme
 */
(function switcherTheme() {
  const nav = document.querySelector('nav');
  const containerSwitcher = nav.querySelector('.container-switcher');
  const switcherTheme = nav.querySelector('.switcher');
  const containerIconTheme = nav.querySelector('.container-icon-theme');
  const spanIconTheme = containerIconTheme.querySelector('span');

  containerSwitcher.addEventListener('click', function () {
    if (!switcher) {
      switcherTheme.style.marginLeft = '22px';
      spanIconTheme.innerHTML='dark_mode';
      spanIconTheme.style.color='rgb(49, 75, 228)';
      switcher = true;
    } else {
      switcherTheme.style.marginLeft = '0px';
      spanIconTheme.innerHTML='light_mode';
      spanIconTheme.style.color='orange';
      switcher = false;
    }
  });
})();

(function hideAlert() {
  const alertCard = document.querySelector('#alert');
  const exitAlert = alertCard.querySelector('p:first-child');

  exitAlert.addEventListener('click', function() {
    alertCard.style.display = 'none';
  })
  
}());
