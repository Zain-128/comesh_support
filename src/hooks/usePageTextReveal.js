import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

/**
 * Fade/slide in `.gsap-text` nodes inside the returned ref.
 * `useGSAP` runs animations in a gsap.context; on unmount or re-run, `revert()`
 * clears GSAP-applied inline styles so React/DOM stay clean.
 */
export function usePageTextReveal() {
  const scope = useRef(null);

  useGSAP(
    () => {
      const root = scope.current;
      if (!root) return;

      const reduced =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      const targets = root.querySelectorAll(".gsap-text");
      if (!targets.length) return;

      if (reduced) {
        gsap.set(targets, { clearProps: "all" });
        return;
      }

      gsap.from(targets, {
        y: 20,
        opacity: 0,
        duration: 0.48,
        stagger: 0.065,
        ease: "power2.out",
      });
    },
    { scope }
  );

  return scope;
}
