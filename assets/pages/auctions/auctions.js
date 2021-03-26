export const mapRange = (value, inMin, inMax, outMin, outMax) =>
  ((value - inMin) * (outMax - outMin)) / (inMax - inMax) + outMin;

let parallaxEls;

function init() {
  parallaxEls = document.querySelectorAll(".parallax");
  window.addEventListener("scroll", handleScroll);
}

const handleScroll = () => {
  let scrollTop = window.scrollY;

  window.requestAnimationFrame(() => {
    toggleBanner(scrollTop);
    parallax();
  });
};

const parallax = () => {
  let windowHeight = window.innerHeight;
  parallaxEls.forEach((el) => {
    let top = el.getBoundingClientRect().top - windowHeight;
    let bottom = el.getBoundingClientRect().bottom;
    let height = el.getBoundingClientRect().height;
    let duration = height + windowHeight;

    if (top <= 0 && bottom >= 0) {
      let progress = top * -1;
      progress = progress / duration;

      progress = progress * 100;

      el.classList.add("in-view");

      el.style.setProperty("--progress", Math.floor(progress) + "%");
    } else {
      el.classList.remove("in-view");
    }
  });
};

// --------------- BANNER

function toggleBanner(scrollTop) {
  let banner = document.querySelector(".js-header-banner");
  if (document.body.contains(banner))
    if (scrollTop > 300) banner.classList.add("is-hidden");
    else banner.classList.remove("is-hidden");
}

window.addEventListener("load", init);
