import React from "react";

const GalleryItem = ({ url, index }) => {
  return (
    <>
      <figure className={`gallery__item gallery__item--${index}`}>
        <img src={url} alt={`Gallery item ${index}`} className="gallery__img" />
      </figure>
    </>
  );
};

export default GalleryItem;
