import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import React, { useState } from "react";

import { overlay } from "./App.module.css";
import Gallery from "./components/Gallery/Gallery";
import SingleImage from "./components/SingleImage/SingleImage";

const numColors = 2 * 2;
const makeColor = (hue) => `hsl(${hue}, 100%, 50%)`;
const colors = Array.from(Array(numColors)).map((_, i) =>
  makeColor(Math.round((360 / numColors) * i))
);

const App = () => {
  const [index, setIndex] = useState(false);

  return (
    <AnimateSharedLayout>
      <Gallery items={colors} setIndex={setIndex} />
      <AnimatePresence>
        {index !== false && (
          <motion.div
            animate={{ opacity: 0.6 }}
            className={overlay}
            exit={{ opacity: 0 }}
            key="overlay"
            initial={{ opacity: 0 }}
            onClick={() => setIndex(() => false)}
          />
        )}
        {index !== false && (
          <SingleImage
            color={colors[index]}
            index={index}
            key="image"
            setIndex={setIndex}
          />
        )}
      </AnimatePresence>
    </AnimateSharedLayout>
  );
};

export default App;
