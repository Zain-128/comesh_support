/** Shared Framer Motion variants — Comesh theme */

export const easeOut = [0.22, 1, 0.36, 1];

export const pageWrap = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
};

export function pageTransition(reduceMotion) {
  if (reduceMotion) {
    return { duration: 0.15 };
  }
  return { duration: 0.4, ease: easeOut };
}

/** Stagger list / sections */
export const staggerParent = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.075,
      delayChildren: 0.06,
    },
  },
};

export const fadeUpChild = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: easeOut },
  },
};

/** Header */
export const headerReveal = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: easeOut },
  },
};

export const navStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.055,
      delayChildren: 0.12,
    },
  },
};

export const navItem = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.38, ease: easeOut },
  },
};

export const logoMarkSpring = {
  hidden: { scale: 0.6, opacity: 0, rotate: -12 },
  visible: {
    scale: 1,
    opacity: 1,
    rotate: 0,
    transition: { type: "spring", stiffness: 420, damping: 24 },
  },
};
