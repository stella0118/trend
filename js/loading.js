let body = document.body;

gsap.to("body", {
  scrollTrigger: {
    trigger: "body",
    start: "top 100%",
    end: "50% 50%",
    scrub: 0,
    onUpdate: (self) => {
      body.style.setProperty("--progress", self.progress);
    }
  }
});

// Pull out the preloader

document.addEventListener("DOMContentLoaded", function () {
  body.classList.add("loaded");
});

// Set a delay on Scrolltrigger recalculation to accommodate element transition times

function refresh() {
  setTimeout(() => {
    ScrollTrigger.refresh();}, 2500);
}

window.addEventListener("resize", refresh);