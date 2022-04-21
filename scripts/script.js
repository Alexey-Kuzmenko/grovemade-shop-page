
// * header UI elements
const body = document.body
const header = document.querySelector('.header')
const nav = document.querySelector('.nav')
const chart = document.querySelector('.chart')
// const coverLink = document.querySelector('.cover-link')

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