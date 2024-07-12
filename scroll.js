var navMenuAnchorTags = document.querySelectorAll(".nav-menu a");
for (var i = 0; i < navMenuAnchorTags.length; i++) {
  navMenuAnchorTags[i].addEventListener("click", function (event) {
    event.preventDefault();
    var targetSectionID = this.textContent.trim().toLowerCase();
    var targetSection = document.getElementById(targetSectionID);
    console.log(targetSection);
    // interval =setInterval(scrollVertically,20,targetSection)
    interval = setInterval(function () {
      scrollVertically(targetSection);
    }, 20);
  });
}
function scrollVertically(targetSection) {
  var targetSectionCordinates = targetSection.getBoundingClientRect();
  if (targetSectionCordinates.top <= 0) {
    clearInterval(interval);
    return;
  }
  window.scrollBy(0, 20);
}
