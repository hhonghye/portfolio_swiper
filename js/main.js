const menu = ["first", "second", "third", "fourth"];

const swiper = new Swiper('#swiper-container', {
    loop: true, 
    centeredSlides: true,
    slidesPerView: 'auto', //동시에 보여줄 슬라이드 갯수 
    mousewheel: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },

    pagination: {
      el: '.swiper-pagination',
    //   type: "bullets",
      clickable: true,
      renderBullet: function(index, className){
        return `<span class="${className}">${menu[index]}</span>`
      }
    },
  });