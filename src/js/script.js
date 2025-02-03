document.addEventListener('DOMContentLoaded', () => {
    const btns = document.querySelectorAll('.tab__btns_btn'),
          tabs = document.querySelectorAll('.tab__list'),
          faqItem = document.querySelectorAll('.faq__list_item'),
          descrImg = document.querySelectorAll('.descr__wrapper img'),
          descrBtn = document.querySelector('.descr__btn'),
          descrWrap = document.querySelector('.descr__wrap');

    if (btns) {
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
    }

    if (faqItem) {
        faqItem.forEach(item => {
            item.addEventListener('click', () => {
                if(item.classList.contains('active')) {
                    item.style.height = item.querySelector('.faq__list_item-top').clientHeight + 'px';
                    item.classList.remove('active');
                } else {
                    item.style.height = item.querySelector('.faq__list_item-descr').clientHeight + item.querySelector('.faq__list_item-top').clientHeight + 'px';
                    item.classList.add('active');
                }
            });
        });
    }

    if(descrBtn != null) {
        console.log(descrBtn)
        descrImg.forEach(item => {
            if(item.style.float) {
                item.classList.add(item.style.float);
            }
        });

        descrBtn.addEventListener('click', () => {
            if(descrBtn.classList.contains('active')) {
                descrWrap.style.height = '350px';
                descrBtn.classList.remove('active');
                descrBtn.querySelector('div').textContent = 'Развернуть';
            } else {
                descrWrap.style.height = document.querySelector('.descr__wrapper').clientHeight + 'px';
                descrBtn.classList.add('active');
                descrBtn.querySelector('div').textContent = 'Свернуть';
            }
        });
    }

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

    const portSlider = new Swiper('.portSlider', {
        spaceBetween: 30,
        slidesPerView: 'auto',
        loop: true,
        
        navigation: {
            prevEl: '.swiper-button-prev',
        },
        scrollbar: {
          el: ".swiper-scrollbar",
          draggable: false,
        },
    });

});