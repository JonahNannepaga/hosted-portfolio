$(document).ready(function () {
  /* --- Skills globe using tagcanvas --- */
  if (
    !$("#myCanvas").tagcanvas({
      textColour: "#fff",
      outlineThickness: 0.0,
      outlineColour: "#ffffff",
      maxSpeed: 0.04,
      reverse: true,
      shuffleTags: true,
      shape: "sphere",
      textFont: null,
      pinchZoom: true,
      freezeDecel: true,
      decel: 1,
      wheelZoom: false,
      initial: [0.3, -0.1],
      depth: 0.75,
    })
  ) {
    // TagCanvas failed to load
    $("#myCanvasContainer").hide();
  }
  /* --- Skills globe using tagcanvas --- */

  /* Navigation */
  const navItems = $(".navigation a");
  navItems.on("click", function (e) {
    navItems.removeClass("active");
    $(this).addClass("active");
  });
  /* Navigation */
});

/* --- Global Cta button --- */
const buttons = document.querySelectorAll(".global-btn");

buttons.forEach((element) => {
  element.addEventListener("mousemove", (e) => {
    const span = element.lastChild;
    const x = e.offsetX;
    const y = e.offsetY;
    span.style.setProperty("--x", x + "px");
    span.style.setProperty("--y", y + "px");
    /* --- Global Cta button --- */
  });
});