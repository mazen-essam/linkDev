import React from "react";

import { Link } from "react-router-dom";
const ImageContainer = ({ hidden, title, image, hideOnMobiles }) => {
  return (
    <div className={`image-overlay ${hideOnMobiles ? "hideOnMobiles" : null} `} style={{ opacity: hidden ? 0 : 1 }}>
      <img
        title="Quality programs"
        src={image}
        alt={`${title} course`}
      />
      <div class="image-title">{title}</div>
    </div>
  );
};

export default ImageContainer;
