
const body = document.querySelector('body');
const modeToggle = document.getElementById('mode-toggle');
const modeStatus = document.querySelector('.mode-status');
function toggleMode() {
body.classList.toggle('dark-mode');

const modeMessage = body.classList.contains('dark-mode') ?
    'Dark Mode'
    : "Light Mode"

  }

modeToggle.addEventListener('click', toggleMode);


//main logic
let currentIndex = 0;
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const images = document.querySelectorAll("#slider img");
console.log(images);
//set first image as visible
images[currentIndex].classList.add("active");
console.log(images[0]);

//add event listeners to each button
//argument -1 to go to previous image, 1 to go to the next
prevButton.addEventListener("click", () => {
  changeSlide(-1)
});
nextButton.addEventListener("click", () => {
  changeSlide(1)
});




//change slide function
function changeSlide(indexModifier) {
    if(indexModifier === null) {
        indexModifier = 1;
    }
  let newIndex = currentIndex + indexModifier;
  if(newIndex >= images.length) {
    //if index number is bigger than the img node collection, set index to the first image
    newIndex = 0;
  } else if(newIndex < 0) {
    //if index is negative, set index to the last image
    newIndex = images.length - 1;
  }
    
  //Hide the current image
  images[currentIndex].classList.remove("active");
  console.log(currentIndex);

  //Show the next or prev image
   images[newIndex].classList.add("active");

  
  //set the new currentIndex
  currentIndex = newIndex;

 
 
}

setInterval(() => {
    changeSlide(null);
}, 3000);

