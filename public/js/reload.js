document.addEventListener("DOMContentLoaded", function () {
  var loader = document.getElementById("loader");
  var content = document.getElementById("content");

  // Set a minimum loading time of 1.8 seconds
  var minimumLoadingTime = 1800; // 1800ms = 1.8 seconds
  var startTime = new Date().getTime();

  function hideLoader() {
    loader.style.display = "none";
    content.style.visibility = "visible";
  }

  // Function to calculate remaining time for the minimum loading time
  function getRemainingTime() {
    var currentTime = new Date().getTime();
    var elapsedTime = currentTime - startTime;
    return Math.max(0, minimumLoadingTime - elapsedTime);
  }

  // Event when page is fully loaded
  window.onload = function () {
    var remainingTime = getRemainingTime();

    // Wait for the remaining time before hiding loader and showing content
    setTimeout(hideLoader, remainingTime);
  };

  // Simulate a loading process
  // (In this case, it is just a placeholder for any additional setup you might need)
  setTimeout(function () {
    // Nothing is needed here because window.onload handles visibility
  }, minimumLoadingTime);
});
