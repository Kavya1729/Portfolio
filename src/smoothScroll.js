import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let lenis;

export function getLenis() {
  return lenis;
}

export function initSmoothScroll() {
  if (lenis) return lenis;

  lenis = new Lenis({
    lerp: 0.075,
    smoothWheel: true,
    syncTouch: true,
    wheelMultiplier: 0.85,
    touchMultiplier: 1.05,
    anchors: { offset: -96 },
  });

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);

  window.addEventListener("load", () => {
    lenis.resize();
    ScrollTrigger.refresh();
  });

  return lenis;
}
