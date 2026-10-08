/**
 * Centralized Motion Tokens & Curves for Mridul Vijay Portfolio
 * Designed for cinematic, controlled, editorial pacing.
 */

export const MOTION_DURATIONS = {
  instant: 0.12,
  fast: 0.24,
  medium: 0.45,
  slow: 0.8,
  cinematic: 1.2,
  intro: 1.4,
} as const;

export const MOTION_EASINGS = {
  // Editorial smooth entry curve with gentle decelerating tail
  editorial: 'cubic-bezier(0.16, 1, 0.3, 1)',
  smooth: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
  expo: 'cubic-bezier(0.19, 1, 0.22, 1)',
  spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
  subtleInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
} as const;

export const GSAP_EASINGS = {
  editorial: 'power3.out',
  cinematic: 'power4.out',
  smooth: 'power2.out',
  inOut: 'power2.inOut',
} as const;

export const TRANSITION_PRESETS = {
  fadeUp: {
    from: { opacity: 0, y: 32 },
    to: { opacity: 1, y: 0, duration: MOTION_DURATIONS.medium, ease: MOTION_EASINGS.editorial },
  },
  fadeBlur: {
    from: { opacity: 0, filter: 'blur(8px)', y: 20 },
    to: { opacity: 1, filter: 'blur(0px)', y: 0, duration: MOTION_DURATIONS.slow, ease: MOTION_EASINGS.editorial },
  },
  staggerDelay: 0.08,
} as const;
