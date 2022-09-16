import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const GalleryItem = ({ url, index, animateLeft, animateRight, onClick, onClose, onAnimationEnd }) => {
  return (
    <figure
      className={`gallery__item gallery__item--${index} ${animateLeft && "animateLeft"} ${
        animateRight && "animateRight"
      }`}
      onClick={onClick}
      onAnimationEnd={onAnimationEnd}
      onTouchMove={(e) => e.preventDefault()}
    >
      {animateLeft === false && <AiOutlineClose className="close" onClick={onClose} />}

      <img src={url} alt={`Gallery item ${index}`} className="gallery__img" />
    </figure>
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
