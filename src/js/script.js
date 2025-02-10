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
          stepBefore = document.querySelector('.order-step__list_before'),
          calcBtns = document.querySelectorAll('.calc__list_item div a'),
          calcInput = document.querySelector('.calc__list_item div input'),
          calcSelect = document.querySelector('.calc__list_item div select'),
          cartOrderRadio = document.querySelectorAll('.cart__order div'),
          brandListItems = document.querySelectorAll('.brand__list_item');

    if(brandListItems) {
        let time = 0,
            interval = -44;
        brandListItems.forEach(item => {
            // setTimeout(() => {
            //     item.style.animation = 'scrollLeft linear 10s -24s infinite';
            // }, time)
            // item.style.right = time + 'px'; 
            item.style.animation = 'scrollLeft linear 44s '+ interval +'s infinite';
            interval = interval + 4;
            // time = time + 100;
        });
    }

    if(cartOrderRadio) {
        cartOrderRadio.forEach(item => {
            item.addEventListener('click', () => {
                cartOrderRadio.forEach(item => {
                    item.classList.remove('active');
                });
                item.classList.add('active');
                document.querySelector('a.cart').classList.remove('no-click');
            });
        });
    }

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

    if(calcInput != null) {
        calcBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                CalcBtn(btn);
            });
        });
        calcInput.addEventListener('blur', (e) => {
            if(e.target.value < 50) {
                e.target.value = 50;
            }
            Calc();
        });
        calcSelect.addEventListener('change', () => {
            Calc();
        });
    }

    function CalcBtn(btn) {
        calcBtns.forEach(btn => {
            btn.classList.remove('active');    
        });
        btn.classList.add('active');
        if(btn.getAttribute('data-paper') == 1) {
            calcSelect.querySelectorAll('option').forEach(option => {
                if(option.value != 'one-color') {
                    option.setAttribute('hidden', 'hidden');
                } else {
                    option.setAttribute('selected', 'selected');
                }
            });
        } else {
            calcSelect.querySelectorAll('option').forEach(option => {
                option.removeAttribute('hidden');
                option.removeAttribute('selected');
            });
        }
        Calc();
    }

    function Calc() {
        let price = 0,
            active = 0,
            x = 0,
            count = calcInput.value,
            option = calcSelect.value;

        calcBtns.forEach(btn => {
            if(btn.classList.contains('active')) {
                active = btn.getAttribute('data-paper');
            }
        });

        if(active != 0) {
            if(active == 1) {
                if(count <= 75) {
                    x = 150;
                } else if (count <= 175) {
                    x = 99.5;
                } else if (count <= 375) {
                    x = 63.2;
                } else if (count <= 750) {
                    x = 47.1;
                } else if (count <= 1500) {
                    x = 38.92;
                } else if (count <= 3500) {
                    x = 34.25;
                } else if (count <= 7500) {
                    x = 21.84;
                } else {
                    x = 19.98;
                }

            } else {
                if(option == 'one-color') {
                    if(count <= 75) {
                        x = 110;
                    } else if (count <= 175) {
                        x = 79.7;
                    } else if (count <= 375) {
                        x = 45.04;
                    } else if (count <= 750) {
                        x = 30.74;
                    } else if (count <= 1500) {
                        x = 21.16;
                    } else if (count <= 3500) {
                        x = 15.96;
                    } else if (count <= 7500) {
                        x = 12.51;
                    } else {
                        x = 11.51;
                    }
                } else if(option == 'two-color') {
                    if(count <= 75) {
                        x = 229;
                    } else if (count <= 175) {
                        x = 138;
                    } else if (count <= 375) {
                        x = 74.12;
                    } else if (count <= 750) {
                        x = 44.72;
                    } else if (count <= 1500) {
                        x = 28.77;
                    } else if (count <= 3500) {
                        x = 21.545;
                    } else if (count <= 7500) {
                        x = 16.38;
                    } else {
                        x = 14,694;
                    }
                } else {
                    if(count <= 75) {
                        x = 238;
                    } else if (count <= 175) {
                        x = 131.6;
                    } else if (count <= 375) {
                        x = 66.2;
                    } else if (count <= 750) {
                        x = 42.2;
                    } else if (count <= 1500) {
                        x = 27.03;
                    } else if (count <= 3500) {
                        x = 18.955;
                    } else if (count <= 7500) {
                        x = 15.444;
                    } else {
                        x = 14.3;
                    }
                }
            }
        }

        price = x * count;

        document.querySelector('.calc__list_item .price').textContent = Math.round(price) + ' ₽';
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