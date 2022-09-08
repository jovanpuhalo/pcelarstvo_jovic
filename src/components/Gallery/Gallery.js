import React from "react";
import "../../sass/layouts/_gallery-section.scss";
import "../../sass/components/_gallery-grid.scss";
import { useInView } from "react-intersection-observer";
import { GiBeehive } from "react-icons/gi";
import { FaForumbee } from "react-icons/fa";
import GalleryItem from "./GalleryItem";

const galleryData = [
  { url: "img/gallery/gal-1.jpeg" },
  { url: "img/gallery/gal-2.jpeg" },
  { url: "img/gallery/gal-3.jpeg" },
  { url: "img/gallery/gal-4.jpeg" },
  { url: "img/gallery/gal-5.jpeg" },
  { url: "img/gallery/gal-6.jpeg" },
  { url: "img/gallery/gal-7.jpeg" },
  { url: "img/gallery/gal-8.jpeg" },
  { url: "img/gallery/gal-9.jpeg" },
  { url: "img/gallery/gal-10.jpeg" },
  { url: "img/gallery/gal-11.jpeg" },
  { url: "img/gallery/gal-12.jpeg" },
  { url: "img/gallery/gal-13.jpeg" },
  { url: "img/gallery/gal-14.jpeg" },
];

const Gallery = () => {
  const options = {
    root: null,
    threshold: 1,
    // rootMargin: -80 + "px",
    triggerOnce: true,
  };

  const { ref: titleRef, inView: inViewTitle } = useInView(options);

  const galleryItems = galleryData.map((item, index) => {
    return <GalleryItem key={index} url={item.url} index={index + 1} />;
  });

  return (
    <div className="gallery-section">
      <div className={`gallery__title-and-decoration ${inViewTitle && "stickyy"}`} ref={titleRef}>
        <span className="gallery__title-and-decoration__title"> Galerija</span>
        <div className="gallery__title-and-decoration__decoration">
          <GiBeehive className="icon" />
          <FaForumbee className="icon" />
          <GiBeehive className="icon" />
          <FaForumbee className="icon" />
          <GiBeehive className="icon" />
        </div>
      </div>
      <div className="gallery">{galleryItems}</div>
    </div>
  );
};

export default Gallery;
