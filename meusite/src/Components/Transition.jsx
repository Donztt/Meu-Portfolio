import { motion } from "framer-motion";
import "../CSS/transition.css";

const transition = (OgComponent) => {
  return () => (
    <>
      <OgComponent />
      <motion.div
        className="slide-in"
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 0, opacity: 0 }}
        exit={{ scaleY: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <h1> Donztt Olv </h1>
      </motion.div>
      <motion.div
        className="slide-out"
        initial={{ scaleY: 1, opacity: 1 }}
        animate={{ scaleY: 0, opacity: 0 }}
        exit={{ scaleY: 0, opacity: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <h1> Donztt Olv </h1>
      </motion.div>
    </>
  );
};

export default transition;
