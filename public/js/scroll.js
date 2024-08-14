window.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;
  const horizontalScroll = document.getElementById("horizontal-scroll");

  // Calculate the translateX value to move the container horizontally
  const translateXValue = -(scrollPosition / windowHeight) * 100;
  horizontalScroll.style.transform = `translateX(${translateXValue}vw)`;
});
