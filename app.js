window.onload = function () {
  // today date
  const dateTitle = document.querySelector('.cover-date');
  const utc = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
  dateTitle.textContent = utc;

}

const navButton = document.querySelector('.nav-button');
const navOpen = document.querySelector('.nav-open');

//Shop button animation
const tlBtn = gsap.to('.nav-button', 3, {
  color: '#fff',
  backgroundColor: '#916356',
  ease: "power2.easeOut",
  repeat: -1
})

//Menu animation
let tl = gsap.timeline({ paused: true, reversed: true });

tl.to('.cover', 1, {
  width: '60%',
  ease: "power2.easeOut"
})
  .to('nav', 1, {
    height: '100%',
    ease: "power2.easeOut"
  }, '-=0.5')
  .fromTo('.nav-open', 0.5, {
    opacity: 0,
    x: 50,
    ease: "power2.easeOut"
  },
    {
      opacity: 1,
      x: 0,
      onComplite: function () {
        navOpen.style.pointerEvents = 'auto'
      }
    });

navButton.addEventListener('click', (e) => {
  if (tl.isActive()) {
    e.preventDefault();
    e.stopImmediatePropagation();
    return false;
  }
  toggleTween(tl)
})

function toggleTween(tween) {
  tween.reversed() ? tween.play() : tween.reverse()
}