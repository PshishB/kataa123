const slider = new Swiper('.swiper', {
    pagination: {
        el:'.swiper-pagination',
        clickable: true,
    },

    slidesPerView: 'auto',

    spaceBetween: 16

});

var button1 = document.querySelector('.withoutSwiper__more');
var buttonHide1 = document.querySelector('.withoutSwiper__hide ');
var buttonShow1 = document.querySelector('.withoutSwiper__show')
var imgShow1 = document.querySelector('.withoutSwiper__img');
var services = document.querySelectorAll('.withoutSwiper__item');

document.addEventListener('DOMContentLoaded', function () {
    if(window.screen.width < 1008){
        for (var i =  3; i < services.length; i++) {
            services[i].classList.add('hidden');
            console.log(1);
        }
    }
    if(window.screen.width > 1008){
        for (var i =  4; i < services.length; i++) {
            services[i].classList.add('hidden');
        }
    }
})

button1.addEventListener('click', function() {
    if (window.screen.width < 1008){
        if (buttonHide1.classList.contains('hidden')) {
            buttonShow1.classList.add('hidden');
            buttonHide1.classList.remove('hidden');
            imgShow1.classList.add('reverse');
            for (var i =  3; i < services.length; i++) {
                services[i].classList.remove('hidden');
            }
        } else {
            buttonShow1.classList.remove('hidden');
            buttonHide1.classList.add('hidden');
            imgShow1.classList.remove('reverse');
            for (var i =  3; i < services.length; i++) {
                services[i].classList.add('hidden');
            }
        }
    }
    if(window.screen.width > 1008) {
        if (buttonHide1.classList.contains('hidden')) {
            buttonShow1.classList.add('hidden');
            buttonHide1.classList.remove('hidden');
            imgShow1.classList.add('reverse');
            for (var i =  4; i < services.length; i++) {
                services[i].classList.remove('hidden');
            }
        } else {
            buttonShow1.classList.remove('hidden');
            buttonHide1.classList.add('hidden');
            imgShow1.classList.remove('reverse');
            for (var i =  4; i < services.length; i++) {
                services[i].classList.add('hidden');
            }
        }
    }
});