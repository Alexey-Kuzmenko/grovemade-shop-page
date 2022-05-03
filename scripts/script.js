(function () {

    // * header UI elements
    const body = document.body
    const header = document.querySelector('.header')
    const nav = document.querySelector('.nav')
    const chart = document.querySelector('.chart')
    const toTopBtn = document.querySelector('.to-top-btn')

    body.addEventListener('mouseover', function ({ target }) {
        if (target.tagName === 'A') {
            target.classList.add('active')
        }
    })
    body.addEventListener('mouseout', function ({ target }) {
        if (target.tagName === 'A') {
            target.classList.remove('active')
        }
    })

    toTopBtn.addEventListener('click', function (event) {
        // event.preventDefault()

        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })

    }, {
        once: false,
        passive: false,
        capture: false,
    })

    // * init swiper
    new Swiper('.swiper', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        mousewheel: {
            sensivity: 1,
            eventsTarget: '.slider-image'
        },

        slidesPerView: 4,
        slidesPerGroup: 1,
        spaceBetween: 25,
        simulateTouch: true,
        grabCursor: true,
        watchOverflow: true,

        // ! this settings make slider looped
        // loop: true,
        // loopedSlodes: 4,

        breakpoints: {
            280: {
                slidesPerView: 1
            },
            // ? test wariant
            425: {
                slidesPerView: 1.1
            },

            510: {
                slidesPerView: 2
            },

            768: {
                slidesPerView: 3
            },

            1024: {
                slidesPerView: 4
            }
        }
    })

})()