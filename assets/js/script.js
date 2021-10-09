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

$(document).ready(function () {
    $('.nav-link').on('click', function () {
        $('.nav-link').removeClass('active')
        $(this).addClass('active')
    })

})

$(window).on("scroll", function (e) {
    if ($(window).scrollTop() > 70) {
        $(".navbar").addClass("show");
    } else {
        $(".navbar").removeClass("show");
    }
    e.preventDefault()
});

// // app script Spreadsheet
const scriptURL = 'https://script.google.com/macros/s/AKfycbwcgiP-InGYrNUJfEZcLxrvt4T1WTwkEiGdiYs2dYh8odbTr4zXyc73vGZ-6NyFUNNV3g/exec'
const form = document.forms['subscribe']
const done = document.querySelector('.clicked-subscribe')
const btnSent = document.querySelector('.btn__subscribe-done')
const btnSend = document.querySelector('.btn-subs')


form.addEventListener('submit', e => {
    e.preventDefault()
    btnSend.classList.toggle('d-none')
    btnSent.classList.toggle('d-none')
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            done.classList.toggle('d-none')
            form.classList.toggle('d-none')
            form.reset()
            console.log('Success!', response)
        })

        .catch(error => console.error('Error!', error.message))
})

// GSAP
gsap.to(".heading-home", { duration: 3, delay: .5, text: "Tumpeng and Catering Services" });
gsap.registerPlugin(TextPlugin);


// AOS
AOS.init();