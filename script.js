/*document.getElementById('fadeLink').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior
    document.getElementById('fadeDiv').classList.add('fade-out');
});*/

document.getElementById('fadeLink').addEventListener('click', function(event) {
    event.preventDefault(); 

    var fadeDiv = document.getElementById('fadeDiv');
    fadeDiv.classList.remove('hidden'); 

    fadeDiv.offsetWidth; 

    fadeDiv.classList.add('visible'); 
});

window.onload = function() {
    document.getElementById('fadeDiv').classList.add('hidden');
};


(function () {
    var noop = function noop() {};
    if ("performance" in window === false) {
      window.performance = {};
    }
    window.performance.mark = performance.mark || noop;
    window.performance.measure = performance.measure || noop;
    if ("now" in window.performance === false) {
      var nowOffset = Date.now();
      if (performance.timing && performance.timing.navigationStart) {
        nowOffset = performance.timing.navigationStart;
      }
      window.performance.now = function now() {
        return Date.now() - nowOffset;
      };
    }
  })();



let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }
    const newTransformValue = -currentIndex * 100;
    document.querySelector('.slides').style.transform = `translateX(${newTransformValue}%)`;
}

function changeSlide(step) {
    showSlide(currentIndex + step);
}


showSlide(currentIndex);


const autoScrollInterval = 5000; 
let autoScrollTimer;

function startAutoScroll() {
    autoScrollTimer = setInterval(() => {
        changeSlide(1); 
    }, autoScrollInterval);
}

function stopAutoScroll() {
    clearInterval(autoScrollTimer);
}

startAutoScroll();


document.querySelector('.slider').addEventListener('mouseenter', stopAutoScroll);


document.querySelector('.slider').addEventListener('mouseleave', startAutoScroll);

function createDots() {
  const slides = document.querySelectorAll('.slide');
  const dotsContainer = document.querySelector('.dots');
  
  slides.forEach((slide, index) => {
      const dot = document.createElement('span');
      dot.classList.add('dot');
      if (index === 0) {
          dot.classList.add('active');
      }
      dot.addEventListener('click', () => {
          showSlide(index);
      });
      dotsContainer.appendChild(dot);
  });
}

createDots();

function updateDots() {
  const dots = document.querySelectorAll('.dot');
  dots.forEach((dot, index) => {
      if (index === currentIndex) {
          dot.classList.add('active');
      } else {
          dot.classList.remove('active');
      }
  });
}

document.addEventListener('DOMContentLoaded', function() {
  const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach(item => {
      item.addEventListener('click', function() {
          this.nextElementSibling.classList.toggle('active');
      });
  });
});
