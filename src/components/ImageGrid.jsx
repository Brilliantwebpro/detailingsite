import React from "react";

const ImageGrid = ({ images }) => {
  return (
    <div className="image-grid">
      {images.map((img) => (
        <div
          key={img.label}
          className="image-tile"
          style={{ backgroundImage: `url(${img.src})` }}
        >
          <span>{img.label}</span>
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
