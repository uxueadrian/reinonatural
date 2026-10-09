import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * Minimal entrance animations (spec 2.12: basic/moderate effects only).
 *
 * - Honors `prefers-reduced-motion`: when the user asks for reduced motion,
 *   this function returns immediately and every element stays in its normal,
 *   fully visible state (no `gsap.from` initial-state is applied).
 * - Restrained fade / slide-in on scroll via ScrollTrigger. No premium or
 *   complex sequences; staff is not animated individually.
 */
export function initAnimations(): void {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)');

  gsap.utils.toArray<HTMLElement>('[data-animate="fade-up"]').forEach((el) => {
    gsap.from(el, {
      opacity: 0,
      y: 24,
      duration: 0.55,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        once: true,
      },
    });
  });

  gsap.utils.toArray<HTMLElement>('[data-animate="fade-in"]').forEach((el) => {
    gsap.from(el, {
      opacity: 0,
      duration: 0.55,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        once: true,
      },
    });
  });

  // Defensive: if the preference flips to reduced-motion while the page is
  // open, clear any in-flight animations so content is never left hidden.
  prefersReduced.addEventListener('change', (event) => {
    if (!event.matches) return;
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    gsap.set('[data-animate]', { clearProps: 'all' });
  });
}
