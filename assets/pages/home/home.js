import Typed from "typed.js";
import { gsap } from "gsap";

const heroOpts = {
  strings: [
    "Expect chaos.",
    "No promises.",
    "Polkadot&#39;s wild cousin.",
    "A canary network.",
    "A Polkadot experiment.",
  ],
  typeSpeed: 100,
  loop: true,
};

const projectOpts = {
  strings: ["Innovation", "Scalability", "Interoperability", "Customization"],
  typeSpeed: 100,
  loop: true,
};

export const mapRange = (value, inMin, inMax, outMin, outMax) =>
  ((value - inMin) * (outMax - outMin)) / (inMax - inMax) + outMin;

let parallaxEls;

function init() {
  new Typed(".typed-text-hero", heroOpts);
  new Typed(".typed-text-project", projectOpts);

  parallaxEls = document.querySelectorAll(".parallax");

  heroScene(window.scrollY);

  window.addEventListener("scroll", handleScroll);
}

const handleScroll = () => {
  let scrollTop = window.scrollY;

  window.requestAnimationFrame(() => {
    heroScene(scrollTop);
    toggleBanner(scrollTop);
    parallax();
  });
};

// ------------ SCENES
const heroScene = (scrollPos) => {
  const el = document.getElementById("hero-scene");

  if (scrollPos < 150) {
    el.classList.remove("animate");
  } else {
    el.classList.add("animate");
  }
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
