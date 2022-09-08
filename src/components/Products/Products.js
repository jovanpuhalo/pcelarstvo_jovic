import "../../sass/layouts/_products.scss";
import "../../sass/components/_products-grid.scss";
import Product from "./Product";
import { GiBeehive } from "react-icons/gi";
import { FaForumbee } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const productsData = [
  {
    name: "Podnjaca",
    price: "0.11 KM",
    url: "img/assets/2.jpeg",
  },
  {
    name: "Okvir",
    price: "0.11 KM",
    url: "img/assets/4.jpg",
  },
  {
    name: "Ram",
    price: "0.11 KM",
    url: "img/assets/7.jpg",
  },
  {
    name: "Nastavak",
    price: "0.11 KM",
    url: "img/assets/4.jpg",
  },
  {
    name: "Podnjaca",
    price: "0.11 KM",
    url: "img/assets/7.jpg",
  },
  {
    name: "Nastavk",
    price: "0.11 KM",
    url: "img/assets/5.jpg",
  },
  {
    name: "Ram",
    price: "0.11 KM",
    url: "img/assets/4.jpg",
  },
];

const Products = () => {
  // console.log("Componenta product");
  const options = {
    root: null,
    threshold: 1,
    rootMargin: "-50px",
    triggerOnce: true,
  };
  const { ref: titleRef, inView } = useInView(options);
  const products = productsData.map((item, index) => {
    return <Product key={index} item={item} />;
  });

  return (
    <div className="products" id="products">
      <div className="products__grid">
        <div className={`products__grid__title-and-decoration ${inView && "stickyy"}`} ref={titleRef}>
          <span> Naši proizvodi</span>
          <div>
            <GiBeehive className="products__grid__title-and-decoration__icon" />
            <FaForumbee className="products__grid__title-and-decoration__icon" />
            <GiBeehive className="products__grid__title-and-decoration__icon" />
            <FaForumbee className="products__grid__title-and-decoration__icon" />
            <GiBeehive className="products__grid__title-and-decoration__icon" />
          </div>
        </div>

        {products}
      </div>
    </div>
  );
};

export default Products;
