// Add the JavaScript here
document.addEventListener("DOMContentLoaded", function () {
  var loader = document.getElementById("loader");
  var content = document.getElementById("content");

  // Set a minimum loading time of 1.8 seconds
  var minimumLoadingTime = 2000; // 1800ms = 1.8 seconds

  // Simulate a loading process
  setTimeout(function () {
    // Hide the loader and show the content
    loader.style.display = "none";
    content.style.visibility = "visible";
  }, minimumLoadingTime);

  // Hide loader when page is fully loaded
  window.onload = function () {
    // If the page finishes loading before 1.8 seconds, still wait for 1.8 seconds
    setTimeout(function () {
      loader.style.display = "none";
      content.style.visibility = "visible";
    }, Math.max(
      0,
      minimumLoadingTime -
        (new Date().getTime() - performance.timing.navigationStart)
    ));
  };
});
