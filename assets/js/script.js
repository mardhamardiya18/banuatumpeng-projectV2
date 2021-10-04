var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    pagination: {
        el: ".swiper-pagination",
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});