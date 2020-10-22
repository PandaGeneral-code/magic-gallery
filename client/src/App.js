import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import React, { useState } from "react";

import Gallery from "./components/Gallery/Gallery";
import SingleImage from "./components/SingleImage/SingleImage";
import RootWrapper, { Overlay } from "./styled";

const App = () => {
  const [index, setIndex] = useState(false);

  return (
    <RootWrapper>
      <AnimateSharedLayout>
        <Gallery items={colors} setIndex={setIndex} />
        <AnimatePresence>
          {index !== false && (
            <>
              <Overlay
                animate={{ opacity: 0.6 }}
                exit={{ opacity: 0 }}
                initial={{ opacity: 0 }}
                layout
                key="overlay"
                onClick={() => setIndex(() => false)}
              />
              <SingleImage
                color={colors[index]}
                index={index}
                key="image"
                layout
                setIndex={setIndex}
              >
                <motion.div
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  initial={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <h1>Hi</h1>
                  <h2>My name is </h2>
                  <h1>Hi</h1>
                  <h2>My name is </h2>
                  <h1>Hi</h1>
                  <h2>My name is </h2>
                  <h1>Hi</h1>
                  <h2>My name is </h2>
                  <h1>Hi</h1>
                  <h2>My name is </h2>
                  <h1>Hi</h1>
                  <h2>My name is </h2>
                  <h1>Hi</h1>
                  <h2>My name is </h2>
                  <h1>Hi</h1>
                  <h2>My name is </h2>
                  <h1>Hi</h1>
                  <h2>My name is </h2>
                  <h1>Hi</h1>
                  <h2>My name is </h2>
                  <h1>Hi</h1>
                  <h2>My name is </h2>
                </motion.div>
              </SingleImage>
            </>
          )}
        </AnimatePresence>
      </AnimateSharedLayout>
    </RootWrapper>
  );
};

export default App;

const numColors = 4 * 4;
const makeColor = (hue) => `hsl(${hue}, 100%, 50%)`;
const colors = Array.from(Array(numColors)).map((_, i) =>
  makeColor(Math.round((360 / numColors) * i))
);

// initial={{ opacity: 0 }}
// animate={{ opacity: 0.6 }}
// exit={{ opacity: 0 }}
// key="overlay"
// className="overlay"
// onClick={() => setIndex(false)}
