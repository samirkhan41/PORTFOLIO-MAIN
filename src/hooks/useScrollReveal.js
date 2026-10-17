import { useEffect, useRef, useState } from "react";

const checkPrefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Custom hook to detect when an element enters the viewport.
 * Uses IntersectionObserver for 60 FPS performance and respects prefers-reduced-motion.
 *
 * @param {Object} options
 * @param {number} [options.threshold=0.1] - Ratio of element required to trigger
 * @param {string} [options.rootMargin="0px 0px -40px 0px"] - Margin around root
 * @param {boolean} [options.triggerOnce=true] - Only trigger once and disconnect
 * @returns {[import("react").RefObject<HTMLElement | null>, boolean]}
 */
export function useScrollReveal({
  threshold = 0.1,
  rootMargin = "0px 0px -40px 0px",
  triggerOnce = true,
} = {}) {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(checkPrefersReducedMotion);

  useEffect(() => {
    // If user prefers reduced motion or already visible, no need to observe
    if (checkPrefersReducedMotion()) return;

    const element = elementRef.current;
    if (!element) return;

    if (!("IntersectionObserver" in window)) {
      const timer = setTimeout(() => setIsVisible(true), 0);
      return () => clearTimeout(timer);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (triggerOnce) {
              observer.unobserve(entry.target);
            }
          } else if (!triggerOnce) {
            setIsVisible(false);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce]);

  return [elementRef, isVisible];
}

/**
 * Hook to smoothly animate numbers from 0 to target value on viewport entry
 */
export function useCounterAnimation(targetValue, duration = 1200, shouldStart = false) {
  const [count, setCount] = useState(() =>
    checkPrefersReducedMotion() ? targetValue : 0
  );

  useEffect(() => {
    if (!shouldStart || checkPrefersReducedMotion()) return;

    let startTimestamp = null;
    let animationFrameId = null;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Ease out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeProgress * targetValue));

      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      } else {
        setCount(targetValue);
      }
    };

    animationFrameId = window.requestAnimationFrame(step);

    return () => {
      if (animationFrameId) window.cancelAnimationFrame(animationFrameId);
    };
  }, [targetValue, duration, shouldStart]);

  return count;
}
