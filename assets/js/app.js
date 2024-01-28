//select slides
const slides = document.querySelectorAll(".slide");

// loop through slides and set each slides translateX property to index * 100%
slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});

//selecting slide btns
const nextSlideBtn = document.querySelector(".btn-next");
const prevSlideBtn = document.querySelector(".btn-prev");

//current slide counter
let curSlide = 0;

//getting max slide
let maxSlide = slides.length - 1;

//adding event listener

nextSlideBtn.addEventListener("click", () => {
  //check the curslide
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  //moving slides
  slides.forEach((slide, idx) => {
    slide.style.transform = `translateX(${100 * (idx - curSlide)}%)`;
  });
});

prevSlideBtn.addEventListener("click", () => {
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }
  slides.forEach((slide, idx) => {
    slide.style.transform = `translateX(${100 * (idx - curSlide)}%)`;
  });
});

console.log(slides);
