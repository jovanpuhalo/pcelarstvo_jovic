import React, { useEffect, useState } from "react";
import "../../sass/layouts/_gallery-section.scss";
import "../../sass/components/_gallery-grid.scss";
import { useInView } from "react-intersection-observer";
import { GiBeehive } from "react-icons/gi";
import { FaForumbee } from "react-icons/fa";
import GalleryItem from "./GalleryItem";
import Modal from "../UI/Modal";
import GallerySlider from "./GallerySlider";

import { motion, useAnimationControls } from "framer-motion";

const galleryData = [
  { url: "img/gallery/gal-1-1x.jpg" },
  { url: "img/gallery/gal-2-1x.jpg" },
  { url: "img/gallery/gal-3-1x.jpg" },
  { url: "img/gallery/gal-4-1x.jpg" },
  { url: "img/gallery/gal-5-1x.jpg" },
  { url: "img/gallery/gal-6-1x.jpg" },
  { url: "img/gallery/gal-7-1x.jpg" },
  { url: "img/gallery/gal-8-1x.jpg" },
  { url: "img/gallery/gal-9-1x.jpg" },
  { url: "img/gallery/gal-10-1x.jpg" },
  { url: "img/gallery/gal-11-1x.jpg" },
  { url: "img/gallery/gal-12-1x.jpg" },
  { url: "img/gallery/gal-13-1x.jpg" },
  { url: "img/gallery/gal-14-1x.jpg" },
];

const variants = {
  hidden: {},
  shown: {},
};

const Gallery = () => {
  const animationGallery = useAnimationControls();
  const options = {
    root: null,
    threshold: 1,
    triggerOnce: true,
  };

  const { ref: titleRef, inView: inViewTitle } = useInView(options);
  const { ref: galleryRef, inView: inViewGallery } = useInView({
    root: null,
    threshold: 0.3,
    triggerOnce: true,
  });

  const [showModal, setShowModal] = useState(false);
  const [imgData, setImgData] = useState({});

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    }
    if (inViewGallery) {
      animationGallery.start("shown");
    } else {
      animationGallery.start("hidden");
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showModal, inViewGallery]);

  const onClickHandler = (url, index) => {
    setShowModal(true);
    setImgData({ imgUrl: url, imgIndex: index });
  };
  const onCloseHendler = () => {
    setShowModal(false);
  };

  const galleryItems = galleryData.map((item, index) => {
    return <GalleryItem key={index} url={item.url} index={index + 1} onClick={() => onClickHandler(item.url, index)} />;
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
      <motion.div
        className={`gallery `}
        ref={galleryRef}
        variants={variants}
        initial="hidden"
        animate={animationGallery}
        transition={{ duration: 0.1, ease: "easeOut", staggerChildren: 0.1 }}
      >
        {galleryItems}
      </motion.div>
      {showModal && (
        <Modal onClose={onCloseHendler} class={"gallery-modal"}>
          <GallerySlider items={galleryData} itemData={imgData} onClose={onCloseHendler} />
        </Modal>
      )}
    </div>
  );
};

export default Gallery;
