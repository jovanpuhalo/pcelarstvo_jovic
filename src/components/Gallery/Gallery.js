import React, { useEffect, useState } from "react";
import "../../sass/layouts/_gallery-section.scss";
import "../../sass/components/_gallery-grid.scss";
import { useInView } from "react-intersection-observer";
import { GiBeehive } from "react-icons/gi";
import { FaForumbee } from "react-icons/fa";
import GalleryItem from "./GalleryItem";
import Modal from "../UI/Modal";
import GallerySlider from "./GallerySlider";

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

const Gallery = () => {
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
    console.log("document.body", window.scrollY);
    if (showModal) {
      document.body.style.overflow = "hidden";
      // document.body.style.position = "fixed";
      // document.body.style.bottom = `${window.scrollY}px`;
      // document.body.style.left = "50px";
    }
    return () => {
      document.body.style.overflow = "auto";
      // document.body.style.position = "unset";
      // document.body.style.bottom = `unset`;
    };
  }, [showModal]);

  const onClickHandler = (url, index) => {
    console.log(url);
    setShowModal(true);
    setImgData({ imgUrl: url, imgIndex: index });
    console.log("klinko");
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
      <div className={`gallery  ${inViewGallery && "stickyy"}`} ref={galleryRef}>
        {galleryItems}
      </div>
      {showModal && (
        <Modal onClose={onCloseHendler} class={"gallery-modal"}>
          <GallerySlider items={galleryData} itemData={imgData} onClose={onCloseHendler} />
        </Modal>
      )}
    </div>
  );
};

export default Gallery;
