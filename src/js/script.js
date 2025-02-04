document.addEventListener('DOMContentLoaded', () => {
    const btns = document.querySelectorAll('.tab__btns_btn'),
          tabs = document.querySelectorAll('.tab__list'),
          faqItem = document.querySelectorAll('.faq__list_item'),
          descrImg = document.querySelectorAll('.descr__wrapper img'),
          descrBtn = document.querySelector('.descr__btn'),
          descrWrap = document.querySelector('.descr__wrap'),
          notebookTabs = document.querySelectorAll('.notebook__tab'),
          notebookBtns = document.querySelectorAll('.notebook__tab_btns a'),
          orderBtn = document.querySelector('.order-btn'),
          modal = document.querySelector('.modal'),
          modalBack = document.querySelector('.modal__back'),
          stepItems = document.querySelectorAll('.order-step__list_item'),
          stepBefore = document.querySelector('.order-step__list_before');

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

    if(notebookBtns) {
        notebookBtns.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                notebookTabs.forEach(tab => {
                    tab.classList.remove('active');
                });
                notebookTabs.forEach(tab => {
                    if(item.getAttribute('data-number') == tab.getAttribute('data-number')) {
                        tab.classList.add('active');
                    }
                });
            });
        });
    }

    if(orderBtn) {
        orderBtn.addEventListener('click', (e) => {
            e.preventDefault();
            modal.classList.add('active');
            modalBack.classList.add('active');
        });
        modalBack.addEventListener('click', () => {
            modal.classList.remove('active');
            modalBack.classList.remove('active');
        });
    }

    if(stepBefore != null) {
        let height = 0;
        stepItems.forEach((item, i) => {
            if(i != stepItems.length - 1) {
                height += item.clientHeight;
            } else {
                height += item.querySelector('h4').clientHeight;
            }
        });
        stepBefore.style.height = height + 'px';
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
          el: ".swiper-scrollbar-port",
          draggable: false,
        },
    });

});