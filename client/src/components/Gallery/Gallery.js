import { motion } from "framer-motion";
import React from "react";

import { galleryContainer, galleryItem } from "./Gallery.module.css";

const Gallery = ({ items, setIndex }) => {
  return (
    <ul className={galleryContainer}>
      {items.map((color, i) => (
        <motion.li
          className={galleryItem}
          key={color}
          onClick={() => setIndex(i)}
          layoutId={color}
          style={{ background: color }}
        />
      ))}
    </ul>
  );
};

export default Gallery;
