// Section 4 - Battery
const animatedValueElement1 = document.querySelector("#countUpValue--1");
const animatedValueElement2 = document.querySelector("#countUpValue--2");

// Section 5 - House
let redDots = document.querySelectorAll('.red-dot__circle');

// Section 6 - Filters
let filtersButtons = document.querySelectorAll('.h6__06-filters__indicators__indicator__btn');
let filterImages = document.querySelectorAll('.h6__06-filters__images__machine');
const readAboutAllergensBtn = document.querySelector('.readMoreBtn');
const closeAllergensModalBtn = document.querySelector('.h6__06-filters__modal__content__close-btn');
const allergensModal = document.querySelector('.h6__06-filters__modal');
const allergensModalContent = document.querySelector('.h6__06-filters__modal__content');


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
redDots = Array.from(redDots);
for (let i=0; i<redDots.length; i++) {
  redDots[i].addEventListener('click', function() {
    const index = redDots.indexOf(redDots[i]);
    const cloneRedDots = redDots.slice();
    cloneRedDots.splice(index, 1);
    cloneRedDots.forEach(el => el.nextElementSibling.classList.remove('opacity1'));
    redDots[i].nextElementSibling.classList.toggle('opacity1');
  })
}
/** END OF: Tooltip on btn press **/


/*** Section 6 - Filters  ***/
/* Switch images, Allergens Modal */

// Switch images
filterImages = Array.from(filterImages);
filterImages.shift();
filterImages.reverse();
filtersButtons = Array.from(filtersButtons);

for (let i=0; i<filtersButtons.length; i++) {
  filtersButtons[i].addEventListener('click', function() { 
    const index = filtersButtons.indexOf(filtersButtons[i]);
    const cloneFiltersButtons = filtersButtons.slice(0);
    cloneFiltersButtons.splice(index, 1);
    const cloneFilterImages = filterImages.slice(0);
    cloneFilterImages.splice(index, 1);

    cloneFiltersButtons.forEach(el => el.firstElementChild.classList.remove('hoveredDigit'));
    cloneFiltersButtons.forEach(el => el.lastElementChild.lastElementChild.classList.remove('displayInline'));
    cloneFilterImages.forEach(el => el.classList.remove('opacity1'));
    filtersButtons[i].firstElementChild.classList.toggle('hoveredDigit');
    filtersButtons[i].lastElementChild.lastElementChild.classList.toggle('displayInline');
    filterImages[i].classList.toggle('opacity1');
  })
}

// Allergens Modal
readAboutAllergensBtn.addEventListener('click', function() {
  allergensModal.classList.add('displayBlock');
  document.body.classList.add('overflowHidden');
  document.body.addEventListener('keydown', closeAllergensModalOnKeypress);
})

closeAllergensModalBtn.addEventListener('click', function() {
  closeAllergensModal();
})

allergensModal.addEventListener('click', closeAllergensModal);
allergensModalContent.addEventListener('click', allergensModalInsideContentClick);

function closeAllergensModalOnKeypress(e) {
  if (e.keyCode === 27 || e.keyCode === 13) {
    event.preventDefault();
    closeAllergensModal();
  }
}

function closeAllergensModal() {
  allergensModal.classList.remove('displayBlock');
  document.body.classList.remove('overflowHidden');
}

function allergensModalInsideContentClick(e) {
  e.preventDefault();
  e.stopPropagation();
  e.stopImmediatePropagation();
  return false;
}

/** END OF: Section 6 - Filters **/