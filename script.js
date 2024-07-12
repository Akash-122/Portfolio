//check that skills section is visible or not
//ensure that initial width of colored skill divs is zero -initialisation
//start animation on every skill =increase skill width 0 to skill level
//store skill level -html width the help of data attribute
// var progressBars=document.querySelector('.skill-progress >div');
// var skillsContainer =document.getElementById('.skills-container');
// window.addEventListener('scroll',checkScroll);

// function checkScroll(){
//     //you have to check where skill container is visible
//     var coordinates = skillsContainer.getBoundingClientRect();
//     if (coordinates.top <window.innerHeight) {
//         console.log('skills section is visible')
        
//     } 

// };
// var progressBars = document.querySelector('.skill-progress > div');
var skillsContainer = document.getElementById('skills'); // Corrected the ID name here
window.addEventListener('scroll', checkScroll);
var animationDone=false;

 
function initialiseBars() {
    for (var bar of progressBars) {
      bar.style.width= 0+ '%';
    }
  }
  
  

function checkScroll() {
  //you have to check where skill container is visible
  var coordinates = skillsContainer.getBoundingClientRect();
  if (!animationDone && coordinates.top < window.innerHeight) {
    animationDone=true;
    console.log('skills section is visible');
  }
}


