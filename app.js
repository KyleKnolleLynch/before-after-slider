const container = document.querySelector('.container')
const before = document.querySelector('.image-container-before')
const slider = document.querySelector('.slider')

const swipe = e => {
  let xPos = e.layerX
  let size = container.offsetWidth
  before.style.width = `${xPos}px`
  slider.style.left = `${xPos}px`

  if (xPos < 50) {
    before.style.width = 0
    slider.style.left = 0
  }

  if (xPos + 50 > size) {
    before.style.width = `${size}px`
    slider.style.left = `${size}px`
  }
}

if (window.screen.availWidth < 1025) {
  container.addEventListener('touchmove', swipe)
}
container.addEventListener('mousemove', swipe)
