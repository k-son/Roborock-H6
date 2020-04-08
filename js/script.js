const animatedValueElement1 = document.querySelector("#countUpValue--1");
const animatedValueElement2 = document.querySelector("#countUpValue--2");

const redDots = document.querySelectorAll('.red-dot__circle');

const filtersButtons = document.querySelectorAll('.h6__06-filters__indicators__indicator__btn');
let filterImages = document.querySelectorAll('.h6__06-filters__images__machine');


/*** Animate countup - in Section 4 - Battery ***/
window.addEventListener('scroll', startCountupWhenInViewport);

function startCountupWhenInViewport() {
  if (isElementInViewport(animatedValueElement1)) {
    animateValue("countUpValue--1", 0, 90, 2000);
    window.removeEventListener('scroll', startCountupWhenInViewport);
  }
  if (isElementInViewport(animatedValueElement2)) {  
    animateValue("countUpValue--2", 0, 10, 1500);
    window.removeEventListener('scroll', startCountupWhenInViewport);
  }
}

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}

function animateValue(id, start, end, duration) {
    var range = end - start;
    var current = start;
    var increment = end > start? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var obj = document.getElementById(id);
    var timer = setInterval(function() {
        current += increment;
        obj.innerHTML = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}
/** END OF: Animate countup **/


/*** Tooltip on btn press - in Section 5 - House * **/
redDots.forEach(el => el.addEventListener('click', function() {
  el.nextElementSibling.classList.toggle('opacity1');
}))
/** END OF: Tooltip on btn press **/


/*** Hover on button to change appropriate picture opacity - in Section 6 - Filters  ***/
filterImages = Array.from(filterImages);
filterImages.shift();
filterImages.reverse();

for (let i=0; i<filtersButtons.length; i++) {
  filtersButtons[i].addEventListener('mouseover', function() {
    filterImages[i].classList.add('opacity1');
  })
  filtersButtons[i].addEventListener('mouseout', function() {
    filterImages[i].classList.remove('opacity1');
  })
}
/** END OF: Hover on button to change appropriate picture opacity **/