(function showModule() {
  let show = false;
  const containerModule = document.querySelector('#containerModule');
  const titleModule = containerModule.getElementsByClassName('title-module');

  for (let index = 0; index < titleModule.length; index++) {
    titleModule[index].addEventListener('click', function() {
    const subModule = titleModule[index].getElementsByClassName('sub-module');
    
      if (!show) {
        subModule[0].style.display='block';
        show = true;
      } else {
        subModule[0].style.display='none';
        show = false;
      }
    })
    
  }
  
})();