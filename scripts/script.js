(function () {

    // * header UI elements
    const body = document.body
    const header = document.querySelector('.header')
    const nav = document.querySelector('.nav')
    const chart = document.querySelector('.chart')
    const popup = document.querySelector('.popup')
    const popupTitle = document.querySelector('.popup-title')
    const popupText = document.querySelector('.popup-text')
    const toTopBtn = document.querySelector('.to-top-btn')

    // ! function calling
    showPopUpWindow()

    // * links style
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

    // * popup window

    const popupContent = {
        cookiesTitle: 'Cookies Settings!',
        cookiesText: 'We use cookies and similar technologies to help personalize content, tailor and measure ads, and provide a better experience.',
        chartTitle: 'Sorry : (',
        chartText: 'This function now is not available. Try again later.'
    }

    function renderPopUpWindow(element = popup, title = popupContent.cookiesTitle, text = popupContent.cookiesText) {
        body.dataset.popupIsActive = true
        popupTitle.textContent = title
        popupText.textContent = text
        element.classList.add('open')
    }

    function showPopUpWindow() {
        window.setTimeout(renderPopUpWindow, 2000)
    }



    popup.addEventListener('click', function ({ target }) {
        if (target.classList.contains('popup-colose-btn')) {
            popup.classList.remove('open')
            body.dataset.popupIsActive = false
        } else if (target.classList.contains('popup-btn')) {
            popup.classList.remove('open')
            body.dataset.popupIsActive = false
        }
    })



    chart.addEventListener('click', function (e) {
        e.preventDefault()
        body.dataset.popupIsActive = true
        popupTitle.textContent = "Sorry : ("
        popupText.textContent = "This function now is not available. Try again later."
        renderPopUpWindow(popup, popupContent.chartTitle, popupContent.chartText)
    })



    // * to top btn
    toTopBtn.addEventListener('click', function (event) {
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
                slidesPerView: 1.1,
                // ? testing values 
                spaceBetween: 35,
            },

            510: {
                slidesPerView: 2,
                spaceBetween: 25,
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
