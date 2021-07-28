const menu = ["PROJECTS", "COLLECTION", "VIDEOS", "CONTACT"];
//swiper 연결
const swiper = new Swiper('#swiper-container', {
    loop: true, 
    centeredSlides: true,
    slidesPerView: 'auto', //동시에 보여줄 슬라이드 갯수 
    mousewheel: true,
    // grabCursor: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },

    pagination: {
      el: '.swiper-pagination',
      type: "bullets",
      clickable: true,
      renderBullet: function(index, className){
        return `<span class="${className}">${menu[index]}</span>`
      }
    },
  });

/*----- DOM Caching -----*/
const bgs = document.querySelectorAll(".background li");
const prev = document.querySelector(".swiper-button-prev");
const next = document.querySelector(".swiper-button-next");
const navi = document.querySelectorAll(".swiper-pagination span");
// const h2 = document.querySelectorAll(".inner .intro h2");

/*----- function -----*/
// for(el of h2){
//     letter(el, 0.2);
// }
/*----- event -----*/
prev.addEventListener("click", changeBg);
next.addEventListener("click", changeBg);
window.addEventListener("mousewheel", changeBg);
swiper.on("slideChangeTransitionStart", changeBg);
for(el of navi){
    el.addEventListener("click", e=>{
        let isOn = e.currentTarget.classList.contains("swiper-pagination-bullet-active");
        if(isOn) return;
        swiper.on("slideChangeTransitionStart", changeBg);
    })
    
}

/*----- function definition -----*/
function changeBg(){
    let item = document.querySelector(".swiper-slide-active");
    let i = item.getAttribute("data-swiper-slide-index");
    for(el of bgs){
        el.classList.remove("on");
    }
    bgs[i].classList.add("on");
}
function letter(el, interval){
    const elem = el;
    let txt = elem.innerText;

    let result = "";
    let i = 0;

    for(let el of txt){
        result += `<span style="transition-delay: ${interval*i}s; display: inline-block">${el}</span>`
        i++;
    }
    elem.innerHTML = result;

}