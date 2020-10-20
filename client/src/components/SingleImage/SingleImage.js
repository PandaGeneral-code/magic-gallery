import { motion } from "framer-motion";
import React from "react";

import { singleImage, singleImageContainer } from "./SingleImage.module.css";

const SingleImage = ({ color, index, setIndex }) => {
  return (
    <div className={singleImageContainer}>
      <motion.div
        className={singleImage}
        layoutId={color}
        style={{ backgroundColor: color }}
      >
        <motion.div
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
        >
          <h1>Hello World</h1>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SingleImage;
