import React from "react";
import Header from "../components/Header/Header";
import About from "../components/About/About";
import Products from "../components/Products/Products";
import Gallery from "../components/Gallery/Gallery";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <div>
        {/* <Navigation /> */}
        <Header />
        <About />
        <Products />
        <Gallery />
        <Footer />
      </div>
    </>
  );
};

export default Home;
