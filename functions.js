document.getElementById('searchIcon').onclick = function() {
    document.getElementById('search').classList.add("visible");
    document.getElementById('clear').classList.add("visible");
    document.getElementById('search').focus();
    document.getElementById('searchIcon').classList.add("hide");
    document.getElementById('notificationicon').classList.add("hide");
  }
  document.getElementById('clear').onclick = function() {
    document.getElementById('searchIcon').classList.remove("hide");
    document.getElementById('search').classList.remove("visible");
    document.getElementById('clear').classList.remove("visible");
    document.getElementById('notificationicon').classList.remove("hide");
    
  }
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode:true,
  
    // If we need pagination

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  })