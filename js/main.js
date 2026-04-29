// ================= BACK TO TOP =================
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
});

$('.back-to-top').click(function () {
    $('html, body').animate({scrollTop: 0}, 1500);
    return false;
});


// ================= STICKY NAV =================
$(window).scroll(function () {
    if ($(this).scrollTop() > 45) {
        $('.navbar').addClass('sticky-top shadow-sm');
    } else {
        $('.navbar').removeClass('sticky-top shadow-sm');
    }
});


// ================= SAFE DOM =================
const main = document.getElementById("mainContent");


// ================= SEARCH MODAL =================
function openSearch() {
  const modal = document.getElementById("searchModal");
  if(!modal) return;

  modal.classList.add("active");
  document.body.classList.add("search-open");

  setTimeout(()=>{
    const input = document.querySelector(".search-box input");
    if(input) input.focus();
  },300);
}

function closeSearch() {
  const modal = document.getElementById("searchModal");
  if(!modal) return;

  modal.classList.remove("active");
  document.body.classList.remove("search-open");
}


// ================= REGION MODAL =================
function openRegion(){
  const modal = document.getElementById("regionModal");
  if(!modal) return;

  modal.classList.add("active");
  document.body.classList.add("modal-open");
}

function closeRegion(){
  const modal = document.getElementById("regionModal");
  if(!modal) return;

  modal.classList.remove("active");
  document.body.classList.remove("modal-open");
}

function toggleRegion(el){
  let parent = el.parentElement;

  document.querySelectorAll(".region-col").forEach(col=>{
    if(col !== parent){
      col.classList.remove("active");
    }
  });

  parent.classList.toggle("active");
}


// ================= MOBILE MENU =================
setTimeout(() => {
  initMobileMenu();
}, 500);

function initMobileMenu(){

  const menuBtn = document.getElementById("mMenuBtn");
  const menu = document.getElementById("mMenu");

  if(menuBtn && menu){
    
    menuBtn.addEventListener("click", function(e){
      e.preventDefault();
      menu.classList.add("active");
    });

    window.closeMenu = function(){
      menu.classList.remove("active");
    };

    window.toggleSub = function(el){
      const parent = el.parentElement;
      parent.classList.toggle("open");
    };
  }
}


// ================= MENU RESPONSIVE =================
$(document).ready(function(){

    smallScreenMenu();

    let temp;
    $(window).resize(function(){
        clearTimeout(temp);
        temp = setTimeout(smallScreenMenu, 100);
        resetMenu();
    });
});

const subMenus = $('.sub-menu');
const menuLinks = $('.menu-link');

function smallScreenMenu(){
    if($(window).innerWidth() <= 992){
        menuLinks.off('click').on('click', function(){
            $(this).next().slideToggle();
        });
    } else {
        menuLinks.off('click');
    }
}

function resetMenu(){
    if($(window).innerWidth() > 992){
        subMenus.css('display', 'none');
    }
}


// ================= SLIDER 1 (MAIN) =================
let slides, controls, dots;
let index = 0;
let interval;

function initSlider(){

  slides = document.querySelectorAll(".slide");
  controls = document.querySelectorAll(".control");
  dots = document.querySelectorAll(".dot");

  if(slides.length === 0) return; // 🔥 safety

  showSlide(index);
  startSlider();
}

function showSlide(i) {

  slides.forEach(s => s.classList.remove("active"));
  controls.forEach(c => c.classList.remove("active"));
  dots.forEach(d => d.classList.remove("active"));

  slides[i].classList.add("active");

  if (controls[i]) controls[i].classList.add("active");
  if (dots[i]) dots[i].classList.add("active");

  let content = slides[i].querySelector(".content");
  if(content){
    content.style.animation = "none";
    setTimeout(() => {
      content.style.animation = "fadeUp 1s ease";
    }, 10);
  }
}

function startSlider() {
  clearInterval(interval);
  interval = setInterval(() => {
    index = (index + 1) % slides.length;
    showSlide(index);
  }, 5000);
}

function currentSlide(i) {
  index = i;
  showSlide(index);
  startSlider();
}


// ================= SLIDER INIT AFTER LOAD =================
window.addEventListener("load", function(){
  setTimeout(() => {
    initSlider();   // 🔥 IMPORTANT CHANGE
  }, 400);
});


// ================= SLIDER 2 =================
(function(){

  const slider = document.querySelector(".platform-wrapper");
  const cards = document.querySelectorAll(".platform-card");
  const dotsContainer = document.querySelector(".slider-dots");

  if(!slider || cards.length === 0 || !dotsContainer) return;

  let currentIndex = 0;

  cards.forEach((_, i) => {
    let dot = document.createElement("span");
    if(i === 0) dot.classList.add("active");

    dot.addEventListener("click", () => {
      currentIndex = i;
      scrollToSlide();
    });

    dotsContainer.appendChild(dot);
  });

  const dots = dotsContainer.querySelectorAll("span");

  function scrollToSlide(){
    slider.scrollTo({
      left: cards[currentIndex].offsetLeft,
      behavior: "smooth"
    });

    dots.forEach(d => d.classList.remove("active"));
    dots[currentIndex].classList.add("active");
  }

  let auto = setInterval(() => {
    currentIndex = (currentIndex + 1) % cards.length;
    scrollToSlide();
  }, 3000);

  slider.addEventListener("touchstart", () => clearInterval(auto));

})();


// ================= SLIDER 3 =================
(function(){

  const slider = document.querySelector(".platform-wrapper-2");
  const cards = document.querySelectorAll(".platform-card-2");
  const dotsContainer = document.querySelector(".slider-dots-2");

  if(!slider || cards.length === 0 || !dotsContainer) return;

  let currentIndex = 0;

  cards.forEach((_, i) => {
    let dot = document.createElement("span");
    if(i === 0) dot.classList.add("active");

    dot.addEventListener("click", () => {
      currentIndex = i;
      scrollToSlide();
    });

    dotsContainer.appendChild(dot);
  });

  const dots = dotsContainer.querySelectorAll("span");

  function scrollToSlide(){
    slider.scrollTo({
      left: cards[currentIndex].offsetLeft,
      behavior: "smooth"
    });

    dots.forEach(d => d.classList.remove("active"));
    dots[currentIndex].classList.add("active");
  }

  let auto = setInterval(() => {
    currentIndex = (currentIndex + 1) % cards.length;
    scrollToSlide();
  }, 3000);

  slider.addEventListener("touchstart", () => clearInterval(auto));

})();