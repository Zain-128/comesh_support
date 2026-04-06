import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Outlet, useLocation } from "react-router-dom";
import { pageTransition, pageWrap } from "../motion/variants";

export default function AnimatedOutlet() {
  const location = useLocation();
  const reduceMotion = useReducedMotion();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={pageWrap}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={pageTransition(reduceMotion)}
      >
        <Outlet />
      </motion.div>
    </AnimatePresence>
  );
}
