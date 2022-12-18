import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";

const GalleryItem = ({ url, index, animateLeft, animateRight, onClick, onClose, onAnimationEnd }) => {
  const variantsChildren = {
    shown: { x: 0, y: 0, opacity: 1, transition: { duration: 0.3, ease: "linear" } },
    hidden: { x: -100, y: -100, opacity: 0, transition: { duration: 0, ease: "linear" } },
  };
  return (
    <motion.figure
      className={`gallery__item gallery__item--${index} ${animateLeft && "animateLeft"} ${
        animateRight && "animateRight"
      }`}
      onClick={onClick}
      onAnimationEnd={onAnimationEnd}
      onTouchMove={(e) => e.preventDefault()}
      variants={variantsChildren}
      // transition={{ duration: 0.5 }}
    >
      {animateLeft === false && <AiOutlineClose className="close" onClick={onClose} />}

      <img src={url} alt={`Gallery item ${index}`} className="gallery__img" />
    </motion.figure>
  );
};

export default GalleryItem;

// import React from "react";
// import { AiOutlineClose } from "react-icons/ai";

// const GalleryItem = ({ url, index, animateLeft, animateRight, onClick, onClose, onAnimationEnd }) => {
//   return (
//     <>
//       <figure
//         className={`gallery__item gallery__item--${index} ${animateLeft && "animateLeft"} ${
//           animateRight && "animateRight"
//         }`}
//         onClick={onClick}
//         onAnimationEnd={onAnimationEnd}
//         onTouchMove={(e) => e.preventDefault()}
//       >
//         {animateLeft === false && <AiOutlineClose className="close" onClick={onClose} />}

//         <img src={url} alt={`Gallery item ${index}`} className="gallery__img" />
//       </figure>

//       <picture
//         className={`gallery__item gallery__item--${index} ${animateLeft && "animateLeft"} ${
//           animateRight && "animateRight"
//         }`}
//         onClick={onClick}
//         onAnimationEnd={onAnimationEnd}
//         onTouchMove={(e) => e.preventDefault()}
//       >
//         <source srcset="img/logo-green-small-1x.png 1x, img/logo-green-small-2x.png 2x" media="(max-width: 37.5em)" />
//         <img srcset="img/logo-green-1x.png 1x, img/logo-green-2x.png 2x" alt="Full logo" src="img/logo-green-2x.png" />
//       </picture>
//     </>
//   );
// };

// export default GalleryItem;
