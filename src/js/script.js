document.addEventListener('DOMContentLoaded', () => {
    const btns = document.querySelectorAll('.tab__btns_btn'),
          tabs = document.querySelectorAll('.tab__list');

    btns.forEach(item => {
        item.addEventListener('click', () => {
            btns.forEach(item => {
                item.classList.remove('active');
            });
            item.classList.add('active');
            tabs.forEach(tab => {
                if(tab.getAttribute('data-type') == item.getAttribute('data-type')) {
                    tab.classList.add('active');
                } else {
                    tab.classList.remove('active');
                }
            });
        })
    });

    const reviewsSlider = new Swiper('.reviewsSlider', {
        spaceBetween: 30,
        autoHeight: true,
        slidesPerView: 2,
        centeredSlides: true,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
        },
    });

    const hitsSlider = new Swiper('.hitsSlider', {
        spaceBetween: 30,
        slidesPerView: 4,
        
        navigation: {
            nextEl: '.swiper-button-prev',
        },
        scrollbar: {
          el: ".swiper-scrollbar",
          draggable: true,
        },
    });
});