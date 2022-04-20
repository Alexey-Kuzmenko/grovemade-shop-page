
// * header UI elements
const header = document.querySelector('.header')
const nav = document.querySelector('.nav')
const chart = document.querySelector('.chart')

header.addEventListener('mouseover', function ({ target }) {
    if (target.tagName === 'A') {
        target.classList.add('active')
    }
})
header.addEventListener('mouseout', function ({ target }) {
    if (target.tagName === 'A') {
        target.classList.remove('active')
    }
})