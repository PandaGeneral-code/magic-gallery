import React from "react";

import Wrapper, { GalleryItem } from "./styled";

const Gallery = ({ items, setIndex }) => {
  return (
    <Wrapper>
      {items?.map((color, i) => (
        <GalleryItem
          key={color}
          layout
          layoutId={color}
          onClick={() => setIndex(i)}
          style={{ backgroundColor: color }}
        />
      ))}
    </Wrapper>
  );
};

export default Gallery;

// className="gallery-item"
// key={color}
// onClick={() => setIndex(i)}
// style={{ backgroundColor: color }}
// sharedId={color}
