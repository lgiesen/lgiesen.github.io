// https://youtu.be/-ths7kNIFnw
// Detect request animation frame
var scroll =
  window.requestAnimationFrame ||
  // IE Fallback
  function(callback) {
    window.setTimeout(callback, 1000 / 60);
  };
var elementsToShow = document.querySelectorAll(".show-on-scroll");

function loop() {
  // check if visible/in viewport

  elementsToShow.forEach(function(element) {
    if (isElementInViewport(element)) {
      element.classList.add("isVisible");
    }
    // Wenn Klasse entfernt wird, dann wird Animation ggf. mehrmals gezeigt!!!!!!!!!!!!!!!!!!!!!!!!!!

    // else {
    //   element.classList.remove("isVisible");
    // }
  });

  scroll(loop);
}

// Call the loop for the first time
loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0 && rect.bottom >= 0) ||
    (rect.bottom >=
      (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight)) ||
    (rect.top >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight))
  );
}
