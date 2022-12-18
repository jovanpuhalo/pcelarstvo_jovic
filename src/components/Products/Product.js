import React from "react";
import { useInView } from "react-intersection-observer";

const Product = ({ item }) => {
  const options = {
    root: null,
    threshold: 0.3,
    rootMargin: "-50px",
    triggerOnce: true,
  };
  const { ref: productRef, inView: inViewProduct } = useInView(options);

  return (
    <div className={`products__grid--container ${inViewProduct && "stickyy"}`} ref={productRef}>
      <div className={`products__grid__product`}>
        <div className="products__grid__product__img">
          <img src={item.url} alt=" Slika" />
          <p className="products__grid__product__img__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia
          </p>
        </div>
        <div className="products__grid__product__name">
          <p>{item.name}</p>
        </div>
        <div className="products__grid__product__price">Cijena: {item.price}</div>
      </div>
    </div>
  );
};

export default Product;
