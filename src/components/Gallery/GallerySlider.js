import React, { useEffect, useState } from "react";
import "../../sass/components/_slider.scss";
import GalleryItem from "./GalleryItem";
import "../../sass/components/_slider.scss";

import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

import useEventListener from "../hooks/useEventListener";

const GallerySlider = ({ items, itemData, onClose }) => {
  console.log("Galleri slider komponenta");
  const [imgData, setImgData] = useState({});
  const [animateLeft, setAnimateLeft] = useState(false);
  const [animateRight, setAnimateRight] = useState(false);

  useEffect(() => {
    setImgData(itemData);
    return () => {};
  }, [itemData]);

  const onClickBackHandler = () => {
    setAnimateLeft(true);
    if (!animateLeft && !animateRight) {
      setTimeout(() => {
        if (imgData.imgIndex - 1 < 0) {
          const [prevImage] = items.slice(-1);
          setImgData({ imgUrl: prevImage.url, imgIndex: items.length - 1 });
        } else {
          const [prevImage] = items.slice(imgData.imgIndex - 1, imgData.imgIndex);
          setImgData({ imgUrl: prevImage.url, imgIndex: imgData.imgIndex - 1 });
        }
      }, 450);
    }
  };

  const onClickForwardHandler = () => {
    setAnimateRight(true);
    if (!animateLeft && !animateRight) {
      setTimeout(() => {
        if (imgData.imgIndex + 1 > items.length - 1) {
          const [prevImage] = items.slice(0, 1);
          setImgData({ imgUrl: prevImage.url, imgIndex: 0 });
        } else {
          const [prevImage] = items.slice(imgData.imgIndex + 1, imgData.imgIndex + 2);
          setImgData({ imgUrl: prevImage.url, imgIndex: imgData.imgIndex + 1 });
        }
      }, 450);
    }
  };

  const animateEndHandler = () => {
    setAnimateLeft(false);
    setAnimateRight(false);
  };

  let timer;
  const onKeyDownHandler = (e) => {
    // sesavali su se problemi u radu slidera pa iz tog razloga je ovde primenjen metod deboucing-a

    clearTimeout(timer);
    timer = setTimeout(() => {
      if (!animateLeft && !animateRight) {
        if (e.key === "ArrowLeft") {
          onClickBackHandler();
        }
        if (e.key === "ArrowRight") {
          onClickForwardHandler();
        }
      }
    }, 100);
  };
  //   document.addEventListener("keyup", onKeyDownHandler);
  useEventListener("keyup", onKeyDownHandler); //koristi se custom hook jer ovaj obican izaziva memory leak i probleme  u radu. zasto to vaoj sprecava nije mi bas najjasnije

  return (
    <div className="slider">
      <MdArrowBackIosNew className="arrow-back" onClick={onClickBackHandler} />
      <MdArrowForwardIos className="arrow-forward" onClick={onClickForwardHandler} />
      <GalleryItem
        url={imgData.imgUrl}
        // index={imgData.imgIndex}
        animateLeft={animateLeft}
        animateRight={animateRight}
        onAnimationEnd={animateEndHandler}
        onClose={onClose}
      />
    </div>
  );
};

export default GallerySlider;
