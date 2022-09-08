import React from "react";
import { useInView } from "react-intersection-observer";

const Product = ({ item }) => {
  // console.log("Componenta product");

  const options = {
    root: null,
    threshold: 0.3,
    rootMargin: "-50px",
    triggerOnce: true,
  };
  const { ref: productRef, inView: inViewProduct } = useInView(options);

  // console.log(inViewProduct);
  return (
    <div className={`products__grid--container ${inViewProduct && "stickyy"}`} ref={productRef}>
      <div className={`products__grid__product`}>
        <div className="products__grid__product__img">
          <img src={item.url} alt=" Slika" />
          <p className="products__grid__product__img__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi
          </p>
          <div>
            <p>{item.name}</p>
          </div>
        </div>
        <div className="products__grid__product__price">Cijena: {item.price}</div>
      </div>
    </div>
  );
};

export default Product;
