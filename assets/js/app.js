let navLinkLefth = false;
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


(function hideAlert() {
  const alertCard = document.querySelector('#alert');
  const exitAlert = alertCard.querySelector('p:first-child');

  exitAlert.addEventListener('click', function() {
    alertCard.style.display = 'none';
  })
  
})();
  