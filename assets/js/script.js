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

var swiper = new Swiper(".mySwiperBlog", {
    grabCursor: true,
    spaceBetween: 25,
    centeredSlides: false,
    slidesPerView: "auto",
    pagination: {
        el: ".swiper-pagination",
    },
    navigation: {
        nextEl: ".bxs-chevron-right-circle",
        prevEl: ".bxs-chevron-left-circle",
    },
});